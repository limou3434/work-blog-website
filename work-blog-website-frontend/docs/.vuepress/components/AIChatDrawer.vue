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
              placeholder="Ctrl + Enter 发送，Enter 换行"
              rows="1"
              @keydown="handleKeydown"
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
import { nextTick, ref } from 'vue'
import { marked } from 'marked'

// 核心状态
const sending = ref(false)
const drawerOpen = ref<boolean>(false)
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

// 滚动到底部
const scrollToBottom = () => {
  nextTick(() => {
    if (chatRef.value) {
      chatRef.value.scrollTop = chatRef.value.scrollHeight
    }
  })
}

// 清空聊天
const clearChat = () => {
  chatList.value = []
}

// 下载聊天
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
  const blob = new Blob([mdContent], { type: 'text/markdown;charset=utf-8;' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `chat-${Date.now()}.md`
  a.click()
  URL.revokeObjectURL(url)
}

// markdown
marked.setOptions({ gfm: true, breaks: true })
const renderMarkdown = (text: string) => marked.parse(text || '')

// 自动高度
const autoResize = (e: Event) => {
  const el = e.target as HTMLTextAreaElement
  el.style.height = 'auto'
  el.style.height = el.scrollHeight + 'px'
}

// ====================== 快捷键逻辑（你要的版本）======================
const handleKeydown = (e: KeyboardEvent) => {
  if (e.isComposing) return

  // Ctrl + Enter = 发送
  if (e.ctrlKey && e.key === 'Enter') {
    e.preventDefault()
    sendMsg()
    return
  }

  // Enter / Shift + Enter = 换行
  if (e.key === 'Enter') {
    // 不阻止，让它正常换行
    return
  }
}

// 自动切环境
const getOllamaBaseUrl = () => {
  const isLocal = window.location.href.includes('localhost') || window.location.href.includes('127.0.0.1')
  return isLocal ? 'http://localhost:11434' : 'http://edtechhub.com.cn:11434'
}

// 请求 Ollama
const callOllamaOnce = async (prompt: string): Promise<string> => {
  const baseUrl = getOllamaBaseUrl()
  const body = JSON.stringify({
    model: 'llama3:8b-instruct-q4_0',
    prompt: `请使用【简体中文】回答下面的问题：\n\n${prompt}`,
    stream: false
  })

  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), 30000)

  try {
    const res = await fetch(`${baseUrl}/api/generate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body,
      signal: controller.signal
    })
    clearTimeout(timer)

    if (res.status === 204) throw new Error('AI 服务返回空内容 204')
    if (!res.ok) throw new Error(`请求失败 ${res.status}`)

    const text = await res.text()
    const data = JSON.parse(text)
    return data.response || '无回答'
  } catch (err) {
    clearTimeout(timer)
    throw err
  }
}

// 发送
const sendMsg = async () => {
  const text = inputVal.value.trim()
  if (!text || sending.value) return

  sending.value = true
  chatList.value.push({ role: 'user', content: text })
  inputVal.value = ''

  const aiMsg = { role: 'assistant' as const, content: '', loading: true }
  chatList.value.push(aiMsg)
  scrollToBottom()

  try {
    const ans = await callOllamaOnce(text)
    aiMsg.content = ans
  } catch (e: any) {
    aiMsg.content = `😭 请求失败：${e.message}`
  } finally {
    aiMsg.loading = false
    sending.value = false
    scrollToBottom()
  }
}
</script>

<style scoped>
/* 全局重置：消除所有默认边距和内边距 */
.ai-drawer :deep(*) {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

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
  flex-direction: column; /* 保持列布局 */
  pointer-events: auto;
}

/* ================= 头部 ================= */
.ai-drawer-header {
  padding: 8px 24px;
  border-bottom: 1px solid var(--vp-c-border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0; /* 固定头部不压缩 */
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
  flex: 1; /* 占满剩余空间 */
  padding: 24px 24px 20px 24px; /* 底部内边距减小，给输入框让位 */
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* 对话区在上，输入区在下 */
}

.chat-content {
  flex: 1; /* 对话区占满上方空间 */
  overflow-y: auto;
  margin-bottom: 10px; /* 和输入区保持小间距 */
}

.chat-item {
  margin-bottom: 10px; /* 消息之间的间距 */
  display: flex;
  align-items: flex-start;
}

.user-chat,
.ai-chat {
  display: flex;
  align-items: flex-start;
}

.avatar {
  width: 32px; /* 缩小头像 */
  height: 32px;
  border-radius: 50%;
  background: var(--vp-c-bg-alt);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

/* AI 头像：在左 */
.ai-chat .avatar {
  margin-right: 8px; /* 减小头像和气泡间距 */
}

/* 用户头像：在右 */
.user-chat .avatar {
  margin-left: 8px; /* 减小头像和气泡间距 */
}

.user-chat {
  display: flex;
  align-items: flex-start;
  margin-left: auto;
}

/* 气泡 ← 核心修复：彻底消除多余高度 */
.bubble {
  max-width: 85%;
  padding: 8px 12px; /* 极致紧凑的内边距 */
  font-size: 14px;
  line-height: 1.3; /* 最小行高 */
  border-radius: 10px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, .08); /* 弱化阴影，视觉更紧凑 */
  word-break: break-word;
  overflow-wrap: anywhere;
  white-space: pre-wrap;
  min-height: unset !important; /* 强制取消最小高度 */
  height: fit-content !important; /* 高度自适应内容 */
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
  margin-bottom: 10px;
}

.ai-tag {
  margin: 0 6px 6px 0;
  padding: 3px 10px;
  font-size: 13px;
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

/* ================= 输入区（核心修改：靠底部） ================= */
.ai-input-wrap {
  display: flex;
  gap: 8px;
  margin-top: auto; /* 强制靠底部 */
  align-self: flex-end; /* 宽度自适应 */
  width: 100%; /* 占满容器宽度 */
}

.ai-input {
  flex: 1;
  padding: 10px 14px;
  border-radius: 8px;
  border: 1px solid var(--vp-c-border);
  background: var(--vp-c-bg-alt);
  font-size: 14px;
  outline: none;
  resize: none;
  overflow-y: hidden;
  line-height: 1.3;
}

.ai-input:focus {
  border-color: var(--vp-c-brand);
}

/* 发送按钮 */
.ai-send-btn {
  padding: 0 14px;
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
  align-items: center;
  height: 18px; /* 缩小加载动画高度 */
}

.loading span {
  width: 6px; /* 缩小加载圆点 */
  height: 6px;
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
  width: 12px; /* 缩小加载圈 */
  height: 12px;
  border: 2px solid rgba(255,255,255,.4);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Markdown 样式终极重置 ← 关键中的关键 */
.bubble :deep(.markdown-body) {
  line-height: 1.3 !important;
  font-size: 14px !important;
}

.bubble :deep(.markdown-body p) {
  margin: 0 !important; /* 彻底消除p标签默认边距 */
  padding: 0 !important;
  line-height: 1.3 !important;
}

.bubble :deep(.markdown-body br) {
  line-height: 1.3 !important;
}

.bubble :deep(.markdown-body pre) {
  padding: 8px 10px !important;
  margin: 4px 0 !important;
  font-size: 12px !important;
  line-height: 1.2 !important;
}

.bubble :deep(.markdown-body code) {
  padding: 1px 3px !important;
  font-size: 13px !important;
}

.bubble :deep(.markdown-body ul),
.bubble :deep(.markdown-body ol) {
  margin: 4px 0 !important;
  padding-left: 20px !important;
  line-height: 1.3 !important;
}

/* 辅助样式 */
.ai-tip {
  margin-left: 6px;
  font-size: 12px;
  color: var(--vp-c-text-3);
  font-weight: normal;
}

/* 隐藏滚动条（全端兼容） */
*::-webkit-scrollbar {
  width: 0 !important;
  height: 0 !important;
}

* {
  scrollbar-width: none !important;
  -ms-overflow-style: none !important;
}
</style>