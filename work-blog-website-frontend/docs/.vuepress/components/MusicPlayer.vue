<template>
  <div class="music-player-container">
    <!-- 播放器头部（封面+标题+可视化） -->
    <div class="music-header">
      <div class="music-cover">
        <img
            src="/music.jpg"
            alt="音乐封面"
            class="cover-img"
            loading="lazy"
        />
        <!-- 播放/暂停按钮 -->
        <button
            class="play-btn"
            @click="togglePlay"
            :aria-label="isPlaying ? '暂停' : '播放'"
        >
          <span v-if="!isPlaying">▶</span>
          <span v-else>❚❚</span>
        </button>
      </div>
      <div class="music-info">
        <h4 class="music-title">{{ musicInfo.title }}</h4>
        <p class="music-artist">{{ musicInfo.artist }}</p>
      </div>
      <!-- 音乐可视化条形图 -->
      <div class="visualizer-wrap" :class="{ hidden: !isPlaying }">
        <div class="visualizer">
          <div
              class="visualizer-bar"
              v-for="(height, index) in visualizerHeights"
              :key="index"
              :style="{ height: height + '%' }"
          ></div>
        </div>
      </div>
    </div>

    <!-- 进度条 -->
    <div class="progress-bar-wrap">
      <div
          class="progress-bar"
          @click="setProgress"
      >
        <div
            class="progress-loaded"
            :style="{ width: loadedPercent + '%' }"
        ></div>
        <div
            class="progress-current"
            :style="{ width: progressPercent + '%' }"
        ></div>
        <div
            class="progress-thumb"
            :style="{ left: progressPercent + '%' }"
        ></div>
      </div>
      <div class="time-wrap">
        <span class="current-time">{{ formatTime(currentTimeVal) }}</span>
        <span class="total-time">{{ formatTime(durationVal) }}</span>
      </div>
    </div>

    <!-- 控制栏（音量） -->
    <div class="music-controls">
      <div class="volume-wrap">
        <span class="volume-icon">音量（默认 5%）</span>
        <input
            type="range"
            class="volume-slider"
            min="0"
            max="1"
            step="0.01"
            v-model="volume"
            @input="setVolume"
        />
      </div>
    </div>

    <!-- 音频元素（隐藏） -->
    <audio
        ref="audioRef"
        :src="musicInfo.src"
        @timeupdate="updateProgress"
        @loadedmetadata="updateDuration"
        @ended="handleEnded"
        @error="handleError"
        preload="metadata"
    ></audio>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'

// 音乐信息
const musicInfo = ref({
  title: '0.0?',
  artist: 'TSAR',
  src: '/music.mp3', // 确保路径正确！建议用绝对路径测试，如：https://xxx.com/music.mp3
  cover: '/music.jpg'
})

// 核心状态
const audioRef = ref<HTMLAudioElement | null>(null)
const isPlaying = ref(false)
const currentTimeVal = ref(0)
const durationVal = ref(0)
const loadedPercent = ref(0)
const volume = ref(0.05)

// 可视化相关状态（增加容错）
const visualizerHeights = ref<number[]>(Array(12).fill(5)) // 初始高度5%，方便观察
let audioContext: AudioContext | null = null
let analyser: AnalyserNode | null = null
let dataArray: Uint8Array | null = null
let animationId: number | null = null

// 计算属性：进度百分比
const progressPercent = computed(() => {
  return durationVal.value > 0 ? (currentTimeVal.value / durationVal.value) * 100 : 0
})

// 初始化音频可视化（优化逻辑）
const initVisualizer = () => {
  if (!audioRef.value) {
    alert('音频元素未加载！')
    return
  }

  try {
    // 强制创建音频上下文（解决浏览器兼容）
    window.AudioContext = window.AudioContext || (window as any).webkitAudioContext
    audioContext = new AudioContext()

    // 配置分析器（降低精度，提升兼容性）
    analyser = audioContext.createAnalyser()
    analyser.fftSize = 32 // 更小的fftSize，适配12个条形
    analyser.minDecibels = -90
    analyser.maxDecibels = -10
    analyser.smoothingTimeConstant = 0.4 // 平滑过渡

    const bufferLength = analyser.frequencyBinCount
    dataArray = new Uint8Array(bufferLength)
    console.log('可视化初始化成功，频谱长度：', bufferLength)

    // 重新创建音源连接（避免连接失效）
    const source = audioContext.createMediaElementSource(audioRef.value)
    source.connect(analyser)
    analyser.connect(audioContext.destination)

    // 强制设置音量
    audioRef.value.volume = volume.value
  } catch (err) {
    console.error('可视化初始化失败：', err)
    alert('当前浏览器不支持音频可视化！')
  }
}

// 更新可视化条形高度（增加容错）
const updateVisualizer = () => {
  if (!analyser || !dataArray || !isPlaying.value || audioContext?.state !== 'running') {
    return
  }

  try {
    // 获取频谱数据
    analyser.getByteFrequencyData(dataArray)

    // 提取数据（兼容不同bufferLength）
    const heights = []
    const barCount = 12
    const step = Math.floor(dataArray.length / barCount)

    for (let i = 0; i < barCount; i++) {
      // 取平均值，避免数据波动过大
      let sum = 0
      for (let j = 0; j < step; j++) {
        sum += dataArray[i * step + j] || 0
      }
      const avg = sum / step
      heights.push(Math.min(avg / 255 * 100, 100))
    }

    visualizerHeights.value = heights
  } catch (err) {
    console.error('更新可视化失败：', err)
  }

  // 循环更新（无论是否成功，都继续请求动画帧）
  animationId = requestAnimationFrame(updateVisualizer)
}

// 播放/暂停切换（彻底修复自动播放限制）
const togglePlay = async () => {
  if (!audioRef.value) {
    alert('音频文件未加载！请检查src路径')
    return
  }

  // 首次播放：强制初始化可视化+恢复音频上下文
  if (!audioContext) {
    initVisualizer()
  }

  // 处理音频上下文状态
  if (audioContext?.state === 'suspended') {
    await audioContext.resume()
  } else if (audioContext?.state === 'closed') {
    initVisualizer() // 重新初始化
  }

  try {
    if (isPlaying.value) {
      // 暂停逻辑
      audioRef.value.pause()
      isPlaying.value = false
      if (animationId) {
        cancelAnimationFrame(animationId)
        animationId = null
      }
      // 重置可视化高度
      visualizerHeights.value = Array(12).fill(5)
    } else {
      // 播放逻辑（强制用户交互触发）
      await audioRef.value.play()
      isPlaying.value = true
      // 立即启动可视化
      updateVisualizer()
      console.log('音乐播放成功，可视化已启动')
    }
  } catch (err) {
    console.error('播放/暂停失败：', err)
    alert(`播放失败：${(err as Error).message}\n请手动点击播放按钮，或检查音频文件路径`)
    // 手动恢复音频上下文（最后尝试）
    if (audioContext) {
      await audioContext.resume()
      togglePlay() // 重新调用
    }
  }
}

// 更新进度
const updateProgress = () => {
  if (!audioRef.value) return
  currentTimeVal.value = audioRef.value.currentTime
  if (audioRef.value.buffered.length > 0) {
    const loaded = audioRef.value.buffered.end(audioRef.value.buffered.length - 1)
    loadedPercent.value = (loaded / audioRef.value.duration) * 100
  }
}

// 更新总时长
const updateDuration = () => {
  if (!audioRef.value) return
  durationVal.value = audioRef.value.duration
}

// 设置进度
const setProgress = (e: MouseEvent) => {
  if (!audioRef.value || !e.target) return
  const target = e.target as HTMLElement
  const rect = target.getBoundingClientRect()
  const clickX = e.clientX - rect.left
  const percent = clickX / rect.width
  currentTimeVal.value = percent * durationVal.value
  audioRef.value.currentTime = currentTimeVal.value
}

// 设置音量
const setVolume = () => {
  if (!audioRef.value) return
  audioRef.value.volume = volume.value
  // 同步更新音频上下文的音量（如果需要）
  if (audioContext && analyser) {
    const gainNode = audioContext.createGain()
    gainNode.gain.value = volume.value
    analyser.disconnect()
    analyser.connect(gainNode)
    gainNode.connect(audioContext.destination)
  }
}

// 播放结束
const handleEnded = () => {
  currentTimeVal.value = 0
  isPlaying.value = false
  if (animationId) {
    cancelAnimationFrame(animationId)
    animationId = null
  }
  visualizerHeights.value = Array(12).fill(5)
}

// 错误处理（增强提示）
const handleError = (e: Event) => {
  const error = e as MediaError
  const errorMsg = {
    1: '音频获取被中止',
    2: '音频解码失败',
    3: '音频播放不支持',
    4: '音频加载失败'
  }[(error?.code || 0).toString()] || '未知错误'

  console.error('音频加载失败：', errorMsg, e)
  alert(`音频加载失败：${errorMsg}\n请检查：\n1. 音频文件路径是否正确\n2. 音频格式是否支持（建议MP3）\n3. 服务器是否允许跨域`)
}

// 格式化时间
const formatTime = (seconds: number) => {
  if (!seconds) return '00:00'
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
}

// 组件销毁时清理资源（增强）
onUnmounted(() => {
  if (audioRef.value) {
    audioRef.value.pause()
  }
  if (animationId) {
    cancelAnimationFrame(animationId)
  }
  if (audioContext) {
    audioContext.close()
    audioContext = null
  }
  analyser = null
  dataArray = null
  isPlaying.value = false
})

// 初始化（增加音频加载检查）
onMounted(() => {
  // 检查音频元素
  if (audioRef.value) {
    audioRef.value.volume = volume.value
    // 监听音频加载事件
    audioRef.value.addEventListener('loadeddata', () => {
      console.log('音频文件加载完成')
    })
  } else {
    console.error('音频元素未找到！')
  }
})
</script>

<style scoped>
/* 播放器容器 */
.music-player-container {
  width: 100%;
  margin: 8px 0 4px 0;
  padding: 12px 10px;
  border-radius: 8px;
  background: var(--vp-c-bg-alt) !important;
  box-sizing: border-box;
}

/* 头部（封面+标题+可视化） */
.music-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
  justify-content: space-between;
}

/* 封面容器 */
.music-cover {
  position: relative;
  width: 48px;
  height: 48px;
  border-radius: 6px;
  overflow: hidden;
  flex-shrink: 0;
}

.cover-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* 播放/暂停按钮 */
.play-btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: none;
  background: rgba(0,0,0,0.5);
  color: white;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0.8;
  transition: all 0.2s ease;
}

.play-btn:hover {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1.1);
}

/* 音乐信息 */
.music-info {
  flex: 1;
  overflow: hidden;
  margin-right: 10px;
}

.music-title {
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.music-artist {
  margin: 2px 0 0 0;
  font-size: 12px;
  color: var(--vp-c-text-2);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* 音乐可视化样式（增强可见性） */
.visualizer-wrap {
  display: flex;
  align-items: center;
  height: 48px;
  flex-shrink: 0;
  width: 60px; /* 固定宽度，确保显示 */
}

.visualizer-wrap.hidden {
  opacity: 0.2; /* 改为半透明，方便观察 */
  pointer-events: none;
}

.visualizer {
  display: flex;
  gap: 2px;
  height: 100%;
  align-items: flex-end;
  width: 100%;
}

.visualizer-bar {
  width: 3px;
  background: var(--vp-c-brand);
  border-radius: 1px;
  transition: height 0.05s ease; /* 更快的过渡 */
  min-height: 5px; /* 增加最小高度，确保可见 */
}

/* 进度条 */
.progress-bar-wrap {
  margin-bottom: 8px;
}

.progress-bar {
  position: relative;
  height: 4px;
  background: var(--vp-c-border);
  border-radius: 2px;
  cursor: pointer;
}

.progress-loaded {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: var(--vp-c-text-3);
  border-radius: 2px;
}

.progress-current {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: var(--vp-c-brand);
  border-radius: 2px;
}

.progress-thumb {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--vp-c-brand);
  box-shadow: 0 0 4px rgba(0,0,0,0.2);
  opacity: 0;
  transition: opacity 0.2s ease;
}

.progress-bar:hover .progress-thumb {
  opacity: 1;
}

/* 时间显示 */
.time-wrap {
  display: flex;
  justify-content: space-between;
  margin-top: 4px;
  font-size: 11px;
  color: var(--vp-c-text-3);
}

/* 控制栏（音量） */
.music-controls {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.volume-wrap {
  display: flex;
  align-items: center;
  gap: 6px;
}

.volume-icon {
  font-size: 12px;
  color: var(--vp-c-text-2);
}

.volume-slider {
  width: 60px;
  height: 4px;
  accent-color: var(--vp-c-brand);
  cursor: pointer;
}

/* 隐藏原生音频元素 */
audio {
  display: none;
}
</style>