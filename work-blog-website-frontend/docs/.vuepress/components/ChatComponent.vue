<template>
  <!-- 弹窗触发按钮 -->
  <button class="ai-chat-trigger" @click="openModal">
    全站弹幕
  </button>

  <!-- 弹幕容器（全局挂载） -->
  <Teleport to="body">
    <div class="ai-danmaku-container" v-if="showDanmaku && danmakuList.length">
      <div
          class="ai-danmaku"
          v-for="(item, idx) in danmakuList"
          :key="item.id"
          :style="{
            top: `${item.top}px`,
            animationDuration: `${item.duration}s`,
            color: item.color,
            backgroundColor: item.bgColor,
            animationPlayState: item.paused ? 'paused' : 'running'
          }"
          @mouseenter="item.paused = true"
          @mouseleave="item.paused = false"
      >
        <span class="danmaku-content">{{ item.content }}</span>
        <span class="close-icon" @click.stop="closeDanmaku(idx)">✕</span>
      </div>
    </div>
  </Teleport>

  <!-- 聊天弹窗 -->
  <Teleport to="body">
    <div v-if="modalOpen" class="ai-modal-mask" @click="closeModalAndDanmaku">
      <div class="ai-modal" @click.stop>
        <!-- 弹窗头部 -->
        <div class="ai-modal-header">
          <div class="header-left">
            <b>全站弹幕</b>
            <span class="ai-tip">* 发送内容将以弹幕形式展示</span>
          </div>
          <button class="close-btn" @click="closeModalAndDanmaku">
            <span>✕</span>
          </button>
        </div>

        <!-- 弹窗内容 -->
        <div class="ai-modal-body">
          <!-- 输入区域 -->
          <div class="ai-input-wrap">
            <textarea
                v-model="inputVal"
                class="ai-input"
                :disabled="sending"
                placeholder="输入内容，回车发送为弹幕..."
                rows="3"
                @keydown.enter.exact="handleEnter"
            />
            <button class="ai-send-btn" :disabled="sending" @click="sendMsg">
              <span v-if="!sending">发送</span>
              <span v-else class="send-wait">
                <i class="send-spinner"></i>
                <span>等待中</span>
              </span>
            </button>
          </div>

          <!-- 历史记录 -->
          <div class="chat-history" v-if="chatList.length">
            <p class="history-title">
              历史发送
            </p>
            <div class="history-list">
              <div
                  class="history-item"
                  v-for="(item, idx) in chatList"
                  :key="idx"
                  @click="inputVal = item"
              >
                {{ item }}
                <span class="del-icon" @click.stop="deleteHistory(idx)">✕</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import {ref} from 'vue'

// 核心状态
const modalOpen = ref(false)
const showDanmaku = ref(false)
const sending = ref(false)
const inputVal = ref('')
const chatList = ref<string[]>([])

// 弹幕列表：每条弹幕自带唯一 id
interface DanmakuItem {
  id: number
  content: string
  top: number
  duration: number
  color: string
  bgColor: string
  paused: boolean
}

const danmakuList = ref<DanmakuItem[]>([])
let nextId = 1

// 颜色池
const themeColors = [
  'var(--vp-c-brand)',
  'var(--vp-c-brand-1)',
  'var(--vp-c-brand-2)',
  'var(--vp-c-text-1)',
  'var(--vp-c-text-2)'
]
const bgColors = [
  'rgba(255, 255, 255, 0.9)',
  'rgba(245, 245, 247, 0.9)',
  'rgba(235, 235, 245, 0.9)',
]
const darkBgColors = [
  'rgba(30, 30, 30, 0.9)',
  'rgba(40, 40, 40, 0.9)',
  'rgba(50, 50, 50, 0.9)',
]

// 随机
const getRandom = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min
const getRandomColor = () => themeColors[getRandom(0, themeColors.length - 1)]
const getRandomBgColor = () => {
  const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const colors = isDark ? darkBgColors : bgColors
  return colors[getRandom(0, colors.length - 1)]
}

// 生成弹幕（带唯一 id，移除字体大小设置）
const generateDanmakuConfig = (content: string): DanmakuItem => {
  const winHeight = window.innerHeight
  return {
    id: nextId++,
    content,
    top: getRandom(20, winHeight - 80),
    duration: getRandom(8, 15),
    color: getRandomColor(),
    bgColor: getRandomBgColor(),
    paused: false
  }
}

// 打开弹窗
const openModal = () => {
  modalOpen.value = true
  showDanmaku.value = true
}

// 关闭弹窗 + 隐藏弹幕
const closeModalAndDanmaku = () => {
  modalOpen.value = false
  showDanmaku.value = false
}

// 回车发送
const handleEnter = (e: KeyboardEvent) => {
  if (e.isComposing || sending.value) return
  e.preventDefault()
  sendMsg()
}

// 发送：只追加，不影响旧弹幕
const sendMsg = async () => {
  const text = inputVal.value.trim()
  if (!text || sending.value) return

  sending.value = true
  const originalText = text
  inputVal.value = ''

  try {
    if (!chatList.value.includes(originalText)) {
      chatList.value.unshift(originalText)
      if (chatList.value.length > 10) chatList.value.pop()
    }

    // 只追加新弹幕，旧的完全不动
    const danmaku = generateDanmakuConfig(originalText)
    danmakuList.value.push(danmaku)
    if (danmakuList.value.length > 30) danmakuList.value.shift()

  } finally {
    sending.value = false
  }
}

// 关闭单条弹幕
const closeDanmaku = (index: number) => {
  danmakuList.value.splice(index, 1)
}

// 删除历史
const deleteHistory = (index: number) => {
  chatList.value.splice(index, 1)
}
</script>

<style scoped>
/* 按钮 */
.ai-chat-trigger {
  width: 100%;
  height: 40px;
  margin: 8px 0;
  font-size: 14px;
  background: var(--vp-c-bg-alt);
  color: var(--vp-c-brand);
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  transition: all 0.2s ease;
}

/* 弹窗遮罩 */
.ai-modal-mask {
  position: fixed;
  inset: 0;
  z-index: 99999;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

/* 弹窗 */
.ai-modal {
  font-size: 14px;
  width: 100%;
  max-width: 500px;
  background: var(--vp-c-bg);
  border-radius: 12px;
  border: 1px solid var(--vp-c-border);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  animation: modalFadeIn 0.3s ease;
}

@keyframes modalFadeIn {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* 头部 */
.ai-modal-header {
  padding: 12px 20px;
  border-bottom: 1px solid var(--vp-c-border);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 8px;
}

.ai-tip {
  margin-left: 8px;
  color: var(--vp-c-text-3);
}

.close-btn {
  background: transparent;
  border: none;
  color: var(--vp-c-text-2);
  cursor: pointer;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
}

.close-btn:hover {
  background: var(--vp-c-bg-alt);
  color: var(--vp-c-brand-1);
}

/* 内容 */
.ai-modal-body {
  padding: 20px;
}

.ai-input-wrap {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
}

.ai-input {
  font-size: 14px;
  width: 100%;
  padding: 12px 14px;
  border-radius: 8px;
  border: 1px solid var(--vp-c-border);
  background: var(--vp-c-bg-alt);
  outline: none;
  resize: none;
  box-sizing: border-box;
}

.ai-input:focus {
  border-color: var(--vp-c-brand);
  box-shadow: 0 0 0 2px var(--vp-c-brand-soft);
}

.ai-send-btn {
  font-size: 14px;
  align-self: flex-end;
  padding: 8px 16px;
  border-radius: 6px;
  border: 1px solid var(--vp-c-brand);
  background: transparent;
  color: var(--vp-c-brand);
  cursor: pointer;
  transition: all 0.2s;
}

.ai-send-btn:disabled {
  opacity: 0.6;
  border-color: var(--vp-c-border);
  color: var(--vp-c-text-3);
}

.ai-send-btn:hover:not(:disabled) {
  background: var(--vp-c-brand);
  color: #fff;
}

.send-wait {
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.send-spinner {
  width: 12px;
  height: 12px;
  border: 2px solid rgba(255, 255, 255, .4);
  border-top-color: var(--vp-c-brand);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* 历史 */
.chat-history {
  margin-top: 10px;
}

.history-title {
  color: var(--vp-c-text-2);
  margin: 0 0 8px;
  display: flex;
  align-items: center;
  gap: 6px;
}

.history-list {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.history-item {
  font-size: 14px;
  padding: 6px 12px;
  background: var(--vp-c-bg-alt);
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.2s;
}

.history-item:hover {
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
}

.del-icon {
  color: var(--vp-c-text-3);
  cursor: pointer;
}

.del-icon:hover {
  color: #ef4444;
}

/* 弹幕容器 */
.ai-danmaku-container {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 100000;
  overflow: hidden;
}

/* 弹幕：循环滚动，只靠 transform 保证清晰，移除字体设置 */
.ai-danmaku {
  position: absolute;
  /* 关键修改1：起始位置从右侧改为左侧 */
  right: 100%;
  border: 1px solid var(--vp-c-border);
  border-radius: 20px;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  animation: danmakuSlide linear infinite;
  pointer-events: auto;
  max-width: 300px;
  backdrop-filter: blur(4px);
  white-space: nowrap;
  transform: translateZ(0);
}

/* 关键修改2：动画方向从左到右 */
@keyframes danmakuSlide {
  0% {
    transform: translateX(0);
  }
  100% {
    /* 从左侧移出到右侧 */
    transform: translateX(200vw);
  }
}

.danmaku-content {
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
}

.close-icon {
  color: var(--vp-c-text-3);
  cursor: pointer;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.close-icon:hover {
  color: #ef4444;
  background: rgba(0, 0, 0, 0.05);
}
</style>