<template>
  <!-- 浮动按钮 -->
  <button
      class="ai-btn"
      @click="drawerOpen = true"
      v-show="!drawerOpen"
      style="pointer-events: auto;"
  >
    智能体
  </button>

  <!-- 对话抽屉 -->
  <div v-if="drawerOpen" class="ai-drawer-mask" @click="drawerOpen = false"></div>
  <div v-if="drawerOpen" class="ai-drawer-wrap">
    <div class="ai-drawer">
      <!-- 抽屉头部 -->
      <div class="ai-drawer-header">
        <p>
          <b>文档智能助手</b>
          <span class="ai-tip">* 不支持 Github Page 用户使用本功能，请跳转 <a href="https://wbw.edtechhub.com.cn"> 网站 </a></span>
        </p>
        <div class="ai-actions">
          <span class="ai-action ai-download" @click="downloadMd">下载</span>
          <span class="ai-action ai-clear" @click="clearChat">清空</span>
        </div>
      </div>
      <!-- 抽屉内容 -->
      <div class="ai-drawer-body">
        <!-- 抽屉对话 -->
        <div ref="chatRef" class="chat-content">
          <div v-for="(item, idx) in chatList" :key="idx" class="chat-item">
            <div v-if="item.role === 'user'" class="user-chat">
              <div
                class="bubble user-bubble markdown-body"
                v-html="renderMarkdown(item.content)"
              ></div>
              <div class="avatar user-avatar">🙂</div>
            </div>

            <div v-if="item.role === 'assistant'" class="ai-chat">
              <div class="avatar">🤖</div>
              <div class="bubble ai-bubble">
                <div v-if="item.loading" class="loading">
                  <span></span><span></span><span></span>
                </div>
                <div
                  v-else
                  class="markdown-body"
                  v-html="renderMarkdown(item.content)"
                ></div>
              </div>
            </div>
          </div>
        </div>
        <!-- 抽屉提示 -->
        <div class="tips">
          <span
              v-for="(tip, idx) in tips"
              :key="idx"
              @click="inputVal = tip"
              class="ai-tag"
          >
            {{ tip }}
          </span>
        </div>
        <!-- 抽屉发送 -->
        <div class="ai-input-wrap">
          <textarea
              v-model="inputVal"
              class="ai-input"
              :disabled="sending"
              placeholder="Enter 换行，Shift + Enter 发送"
              rows="1"
              @keydown.shift.enter.prevent="sendMsg($event)"
              @input="autoResize"
          />
          <button
              class="ai-send-btn"
              :disabled="sending"
              @click="sendMsg"
          >
            <span v-if="!sending">发送</span>
            <span v-else class="send-wait">
              <i class="send-spinner"></i>
              等待中
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {nextTick, ref} from 'vue'

// 核心状态
const sending = ref(false) // 是否正在等待 AI 回复
const drawerOpen = ref<boolean>(false)
const isBtnHover = ref<boolean>(false) // 按钮悬浮状态，初始不悬浮
const inputVal = ref<string>('')
const chatRef = ref<HTMLDivElement | null>(null)
const chatList = ref<Array<{
  role: 'user' | 'assistant'
  content: string
  loading?: boolean
}>>([])

// 推荐标签
const tips = ref<string[]>([
  'VuePress 2.x 配置技巧',
  'AntD Vue 自定义主题',
  'Vue3 组合式 API',
  '前端工程化实践'
])

// 对话滚动到底部
const scrollToBottom = () => {
  nextTick(() => {
    if (chatRef.value) {
      chatRef.value.scrollTop = chatRef.value.scrollHeight
    }
  })
}

// 清空聊天记录
const clearChat = () => {
  chatList.value = []
}

// 下载聊天记录
const buildMarkdown = () => {
  if (!chatList.value.length) return ''

  const lines: string[] = []

  lines.push('# 聊天记录')
  lines.push('')
  lines.push(`> 导出时间：${new Date().toLocaleString()}`)
  lines.push('')

  chatList.value.forEach(item => {
    if (item.loading) return

    if (item.role === 'user') {
      lines.push('## 👤 用户')
      lines.push('')
      lines.push(item.content)
      lines.push('')
    }

    if (item.role === 'assistant') {
      lines.push('## 🤖 AI')
      lines.push('')
      lines.push(item.content)
      lines.push('')
    }
  })

  return lines.join('\n')
}

const downloadMd = () => {
  const mdContent = buildMarkdown()
  if (!mdContent) return

  const blob = new Blob([mdContent], {type: 'text/markdown;charset=utf-8;'})
  const url = URL.createObjectURL(blob)

  const a = document.createElement('a')
  a.href = url
  a.download = `chat-${Date.now()}.md`
  a.click()

  URL.revokeObjectURL(url)
}

// 支持 markdown 转化
import { marked } from 'marked'

marked.setOptions({
  gfm: true,
  breaks: true
})

const renderMarkdown = (text: string) => {
  return marked.parse(text || '')
}

// 支持换行文本
const autoResize = (e: Event) => {
  const el = e.target as HTMLTextAreaElement
  el.style.height = 'auto'
  el.style.height = el.scrollHeight + 'px'
}

// 请求本地模型
const callOllamaOnce = async (prompt: string): Promise<string> => {
  const res = await fetch('http://edtechhub.com.cn:11434/api/generate', { // TODO：这个后续改为请求后端请求而不是直接请求服务器
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'llama3:8b-instruct-q4_0',
      prompt: `请使用【简体中文】回答下面的问题：\n\n${prompt}`,
      stream: false
    })
  })

  if (!res.ok) {
    throw new Error('Ollama 请求失败')
  }

  const data = await res.json()
  return data.response || ''
}

// 发送消息
// const sendMsg = (e?: KeyboardEvent) => {
//   // 🚫 中文输入法组合阶段，直接忽略
//   if (e?.isComposing) return
//
//   // 🚫 发送中禁止重复触发
//   if (sending.value) return
//   if (!inputVal.value.trim()) return
//
//   sending.value = true
//
//   chatList.value.push({
//     role: 'user',
//     content: inputVal.value.trim()
//   })
//
//   inputVal.value = ''
//   scrollToBottom()
//
//   chatList.value.push({
//     role: 'assistant',
//     content: '',
//     loading: true
//   })
//   scrollToBottom()
//
//   setTimeout(() => {
//     const lastItem = chatList.value.at(-1)
//     if (lastItem?.loading) {
//       lastItem.content =
//           `已收到您的问题：\n\n${chatList.value.at(-2)?.content}\n\n请注意 AI 的使用次数...`
//       lastItem.loading = false
//       sending.value = false
//       scrollToBottom()
//     }
//   }, 1500)
// }
const sendMsg = async (e?: KeyboardEvent) => {
  if (e?.isComposing) return
  if (sending.value) return
  if (!inputVal.value.trim()) return

  const userContent = inputVal.value.trim()
  sending.value = true
  inputVal.value = ''

  // 用户消息
  chatList.value.push({
    role: 'user',
    content: userContent
  })

  // AI 占位
  const aiMsg = {
    role: 'assistant' as const,
    content: '',
    loading: true
  }
  chatList.value.push(aiMsg)

  scrollToBottom()

  try {
    const answer = await callOllamaOnce(userContent)
    aiMsg.content = answer
  } catch (err) {
    aiMsg.content = '请求回答失败的说...'
  } finally {
    aiMsg.loading = false
    sending.value = false
    scrollToBottom()
  }
}
</script>

<style scoped>
/* ================= 浮动按钮 ================= */
.ai-btn {
  position: fixed;
  top: 80px;
  right: 25px;
  z-index: 9999;
  width: 80px;
  height: 40px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  background: var(--vp-c-brand);
  color: #3f3f3f;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.ai-btn:hover {
  transform: translateY(-2px);
}

/* ================= 抽屉遮罩 ================= */
.ai-drawer-mask {
  position: fixed;
  inset: 0;
  z-index: 10000;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
}

/* ================= 抽屉容器 ================= */
.ai-drawer-wrap {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 10001;
  width: 660px;
  overflow: hidden;
  pointer-events: none;
}

.ai-drawer {
  height: 100%;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  border-left: 1px solid var(--vp-c-border);
  display: flex;
  flex-direction: column;
  pointer-events: auto;
}

/* ================= 头部 ================= */
.ai-drawer-header {
  padding: 8px 24px;
  border-bottom: 1px solid var(--vp-c-border);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* 右侧操作区 */
.ai-actions {
  display: flex;
  align-items: center;
  gap: 14px;
}

.ai-action {
  font-size: 14px;
  cursor: pointer;
  user-select: none;
  color: var(--vp-c-text-2);
  transition: color 0.2s;
}

.ai-action.ai-download:hover {
  color: #3b82f6; /* 蓝色 */
}

.ai-action.ai-clear:hover {
  color: #d97706; /* 橙色 */
}

/* ================= 内容区 ================= */
.ai-drawer-body {
  flex: 1;
  padding: 24px;
  overflow: auto;
}

.chat-content {
  height: calc(100% - 180px);
  overflow-y: auto;
  margin-bottom: 20px;
}

.chat-item {
  margin-bottom: 20px;
  display: flex;
  align-items: flex-start; /* ← 关键 */
}

.user-chat,
.ai-chat {
  display: flex;
  align-items: flex-start; /* ← 关键 */
}

.avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--vp-c-bg-alt);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

/* AI 头像：在左 */
.ai-chat .avatar {
  margin-right: 12px;
}

/* 用户头像：在右 */
.user-chat .avatar {
  margin-left: 12px;
}

.user-chat {
  display: flex;
  align-items: flex-start;
  margin-left: auto;   /* ⭐ 核心 */
}

/* 气泡 */
.bubble {
  max-width: 85%;
  padding: 12px 16px;
  font-size: 14px;
  line-height: 1.5;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .1);
  word-break: break-word;
  overflow-wrap: anywhere;
  white-space: pre-wrap;
}

.user-bubble {
  background: var(--vp-c-brand);
  color: var(--vp-c-white);
  border-top-right-radius: 0;
}

.ai-bubble {
  background: var(--vp-c-bg-alt);
  border: 1px solid var(--vp-c-border);
  border-top-left-radius: 0;
}

/* ================= 推荐标签 ================= */
.tips {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.ai-tag {
  margin: 0 8px 8px 0;
  padding: 4px 12px;
  font-size: 14px;
  border-radius: 4px;
  background: var(--vp-c-bg-alt);
  color: var(--vp-c-text-2);
  cursor: pointer;
  transition: all 0.2s;
}

.ai-tag:hover {
  background: var(--vp-c-brand);
  color: var(--vp-c-white);
}

/* ================= 输入区 ================= */
.ai-input-wrap {
  display: flex;
  gap: 8px;
}

.ai-input {
  flex: 1;
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid var(--vp-c-border);
  background: var(--vp-c-bg-alt);
  font-size: 14px;
  outline: none;
}

.ai-input:focus {
  border-color: var(--vp-c-brand);
}

/* 发送按钮 */
.ai-send-btn {
  padding: 0 16px;
  border-radius: 8px;
  border: none;
  background: var(--vp-c-brand);
  color: var(--vp-c-white);
  font-size: 14px;
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.2s, transform 0.1s;
}

.ai-send-btn:active {
  transform: scale(0.96);
}

/* ================= 加载动画 ================= */
.loading {
  display: flex;
  gap: 4px;
}

.loading span {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--vp-c-brand);
  animation: blink 1s infinite;
}

.loading span:nth-child(2) {
  animation-delay: .2s;
}

.loading span:nth-child(3) {
  animation-delay: .4s;
}

@keyframes blink {
  0%, 100% {
    opacity: .3
  }
  50% {
    opacity: 1
  }
}

.ai-send-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* 等待中布局 */
.send-wait {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

/* 旋转圈 */
.send-spinner {
  width: 14px;
  height: 14px;
  border: 2px solid rgba(255,255,255,.4);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.markdown-body pre {
  background: #020617;
  padding: 12px;
  border-radius: 6px;
  overflow-x: auto;
  font-size: 13px;
}

.markdown-body code {
  background: rgba(255,255,255,0.08);
  padding: 2px 4px;
  border-radius: 4px;
}

.markdown-body h1,
.markdown-body h2,
.markdown-body h3 {
  margin: 8px 0;
}

.markdown-body ul {
  padding-left: 20px;
}

.ai-input {
  resize: none;
  overflow-y: hidden;
}

.ai-tip {
  margin-left: 6px;
  font-size: 12px;
  color: var(--vp-c-text-3);
  font-weight: normal;
}

/* Chrome / Edge / Safari */
*::-webkit-scrollbar {
  width: 0 !important;
  height: 0 !important;
}

/* Firefox */
* {
  scrollbar-width: none !important;
}

/* IE / 旧 Edge */
* {
  -ms-overflow-style: none !important;
}
</style>