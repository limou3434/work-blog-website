<template>
  <!-- 侧边容器 -->
  <div class="ai-chat-container">
    <!-- 浮动按钮 -->
    <button
        class="ai-btn"
        @click="drawerOpen = true"
        v-show="!drawerOpen"
    >
      智能助手
    </button>

    <!-- 对话抽屉 -->
    <div v-if="drawerOpen" class="ai-drawer-mask" @click="drawerOpen = false"></div>
    <Teleport to="body">
      <div v-if="drawerOpen" class="ai-drawer-wrap">
        <div class="ai-drawer">
          <!-- 抽屉头部 -->
          <div class="ai-drawer-header">
            <p>
              <b> 智能助手 </b>
              <span class="ai-tip">* 不支持 Github Page 用户使用本功能，请跳转
                <a href="https://wbw.edtechhub.com.cn" target="_blank"> 网站 </a>
              </span>
            </p>
            <div class="ai-actions">
              <span class="ai-action ai-download" @click="downloadMd"> 下载 </span>
              <span class="ai-action ai-clear" @click="clearChat"> 清空 </span>
            </div>
          </div>
          <!-- 抽屉内容 -->
          <div class="ai-drawer-body">
            <!-- 对话列表 -->
            <div ref="chatRef" class="chat-content">
              <div v-for="(item, idx) in chatList" :key="idx" class="chat-item">
                <!-- 用户消息 -->
                <div v-if="item.role === 'user'" class="user-chat">
                  <div class="bubble user-bubble markdown-body" v-html="renderMarkdown(item.content)"></div>
                  <div class="avatar user-avatar">🙂</div>
                </div>
                <!-- 智能消息 -->
                <div v-if="item.role === 'assistant'" class="ai-chat">
                  <div class="avatar">🤖</div>
                  <div class="bubble ai-bubble">
                    <div v-if="item.loading" class="loading">
                      <span></span><span></span><span></span>
                    </div>
                    <div v-else class="markdown-body" v-html="renderMarkdown(item.content)"></div>
                  </div>
                </div>
              </div>
            </div>
            <!-- 推荐标签 -->
            <div class="tips">
              <span
                  v-for="(tip, idx) in tips"
                  :key="idx"
                  @click="inputVal = tip"
                  class="ai-tag"
              >
                {{tip}}
              </span>
            </div>
            <!-- 输入区域 -->
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
              <button class="ai-send-btn" :disabled="sending" @click="sendMsg">
                <span v-if="!sending"> 发送 </span>
                <span v-else class="send-wait">
                  <i class="send-spinner"></i>
                  等待中
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script lang="ts" setup>
import {nextTick, ref, Teleport} from 'vue'
import {marked} from 'marked'

// 核心状态管理
const sending = ref(false)
const drawerOpen = ref<boolean>(false)
const inputVal = ref<string>('')
const chatRef = ref<HTMLDivElement | null>(null)
const chatList = ref<Array<{
  role: 'user' | 'assistant'
  content: string
  loading?: boolean
}>>([])

// 推荐提问标签
const tips = ref<string[]>([
  'VuePress 2.x 配置技巧',
  'AntD Vue 自定义主题',
  'Vue3 组合式 API',
  '前端工程化实践'
])

// 滚动到对话底部
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

// 构建 Markdown 格式聊天记录
const buildMarkdown = () => {
  if (!chatList.value.length) return ''
  const lines: string[] = []
  lines.push('# 文档智能助手聊天记录')
  lines.push(`> 导出时间：${new Date().toLocaleString()}`)
  lines.push('')

  chatList.value.forEach(item => {
    if (item.loading) return
    lines.push(item.role === 'user' ? '## 👤 用户' : '## 🤖 AI')
    lines.push('')
    lines.push(item.content)
    lines.push('')
  })
  return lines.join('\n')
}

// 下载聊天记录
const downloadMd = () => {
  const mdContent = buildMarkdown()
  if (!mdContent) return

  const blob = new Blob([mdContent], { type: 'text/markdown;charset=utf-8;' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')

  a.href = url
  a.download = `chat-record-${Date.now()}.md`
  a.click()
  URL.revokeObjectURL(url)
}

// Markdown 渲染配置
marked.setOptions({gfm: true, breaks: true})
const renderMarkdown = (text: string) => marked.parse(text || '')

// 文本框自动高度
const autoResize = (e: Event) => {
  const el = e.target as HTMLTextAreaElement
  el.style.height = 'auto'
  el.style.height = `${el.scrollHeight}px`
}

// 快捷键处理
const handleKeydown = (e: KeyboardEvent) => {
  if (e.isComposing) return

  // Ctrl + Enter 发送消息
  if (e.ctrlKey && e.key === 'Enter') {
    e.preventDefault()
    sendMsg()
    return
  }

  // Enter 正常换行
  if (e.key === 'Enter') return
}

// 获取 Ollama 服务地址（自动区分环境）
const getOllamaBaseUrl = () => {
  const isLocal = window.location.href.includes('localhost') || window.location.href.includes('127.0.0.1')
  return isLocal ? 'http://localhost:11434' : 'http://edtechhub.com.cn:11434'
}

// 调用 Ollama API
const callOllamaOnce = async (prompt: string): Promise<string> => {
  const baseUrl = getOllamaBaseUrl()
  const body = JSON.stringify({
    model: 'llama3:8b-instruct-q4_0',
    prompt: ` 请使用【简体中文】回答下面的问题：\n\n${prompt}`,
    stream: false
  })

  const controller = new AbortController()
  const timer = setTimeout(()=> controller.abort(), 30000)

  try {
    const res = await fetch(`${baseUrl}/api/generate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body,
      signal: controller.signal
    })

    clearTimeout(timer)
    if (res.status === 204) throw new Error('AI 服务返回空内容 (204)')
    if (!res.ok) throw new Error(` 请求失败 [${res.status}]：${res.statusText}`)

    const text = await res.text()
    const data = JSON.parse(text)
    return data.response || '暂无回答内容'
  } catch (err) {
    clearTimeout(timer)
    throw err
  }
}

// 发送消息核心逻辑
const sendMsg = async () => {
  const text = inputVal.value.trim()
  if (!text || sending.value) return

  // 状态更新
  sending.value = true
  chatList.value.push({ role: 'user', content: text })
  inputVal.value = ''

  // 添加 AI 加载状态
  const aiMsg = { role: 'assistant' as const, content: '', loading: true }
  chatList.value.push(aiMsg)
  scrollToBottom()

  try {
    // 调用 AI 接口
    const ans = await callOllamaOnce(text)
    aiMsg.content = ans
  } catch (e: any) {
    aiMsg.content = `😭 请求失败：${e.message || '未知错误'}`
  } finally {
    // 重置状态
    aiMsg.loading = false
    sending.value = false
    scrollToBottom()
  }
}
</script>

<style scoped>
/* 容器基础样式 */
.ai-chat-container {
  width: 100%;
  box-sizing: border-box;
}

/* 侧边栏适配按钮 - 核心修改：主题色边框 + 无填充色 */
.ai-btn {
  width: 100%;
  height: 40px;
  margin: 8px 0 4px 0;
  background: var(--vp-c-bg-alt);
  color: var(--vp-c-brand); /* 文字用主题色 */
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  transition: all 0.2s ease;
}

.ai-btn:hover {
  color: var(--vp-c-brand-1); /* hover 加深文字色 */
  border-color: var(--vp-c-brand-1); /* hover 加深边框色 */
}

/* 抽屉遮罩层 */
.ai-drawer-mask {
  position: fixed;
  inset: 0;
  z-index: 99999;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
}

/* 抽屉容器 */
.ai-drawer-wrap {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 100000;
  width: 90%;
  max-width: 660px;
  overflow: hidden;
}

.ai-drawer {
  height: 100%;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  border-left: 1px solid var(--vp-c-border);
  display: flex;
  flex-direction: column;
}

/* 抽屉头部 */
.ai-drawer-header {
  padding: 12px 20px;
  border-bottom: 1px solid var(--vp-c-border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
}

.ai-tip {
  margin-left: 8px;
  font-size: 12px;
  color: var(--vp-c-text-3);
  font-weight: normal;
}

.ai-tip a {
  color: var(--vp-c-brand);
  text-decoration: underline;
}

.ai-actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

.ai-action {
  font-size: 14px;
  cursor: pointer;
  user-select: none;
  color: var(--vp-c-text-2);
  transition: color 0.2s;
}

.ai-action.ai-download:hover {
  color: #3b82f6;
}

.ai-action.ai-clear:hover {
  color: #d97706;
}

/* 抽屉内容区 */
.ai-drawer-body {
  flex: 1;
  padding: 16px 20px;
  overflow: auto;
  display: flex;
  flex-direction: column;
}

.chat-content {
  flex: 1;
  overflow-y: auto;
  margin-bottom: 12px;
}

.chat-item {
  margin-bottom: 12px;
  display: flex;
  align-items: flex-start;
}

/* 头像样式 */
.avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--vp-c-bg-alt);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.ai-chat .avatar {
  margin-right: 8px;
}

.user-chat {
  margin-left: auto;
  display: flex;
  align-items: flex-start;
}

.user-chat .avatar {
  margin-left: 8px;
}

/* 消息气泡 */
.bubble {
  max-width: 85%;
  padding: 8px 12px;
  font-size: 14px;
  line-height: 1.4;
  border-radius: 10px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, .08);
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

/* 推荐标签 */
.tips {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 12px;
}

.ai-tag {
  margin: 0 6px 6px 0;
  padding: 4px 10px;
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

/* 输入区域 */
.ai-input-wrap {
  display: flex;
  gap: 8px;
  margin-top: auto;
  width: 100%;
}

.ai-input {
  flex: 1;
  padding: 10px 12px;
  border-radius: 6px;
  border: 1px solid var(--vp-c-border);
  background: var(--vp-c-bg-alt);
  font-size: 14px;
  outline: none;
  resize: none;
  overflow-y: hidden;
  line-height: 1.4;
}

.ai-input:focus {
  border-color: var(--vp-c-brand);
}

/* 发送按钮 - 核心修改：主题色边框 + 无填充色 */
.ai-send-btn {
  padding: 0 16px;
  border-radius: 6px;
  border: 1px solid var(--vp-c-brand); /* 主题色边框 */
  background: transparent; /* 无填充色 */
  color: var(--vp-c-brand); /* 文字用主题色 */
  font-size: 14px;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s;
}

.ai-send-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  border-color: var(--vp-c-border);
  color: var(--vp-c-text-3);
}

.ai-send-btn:hover:not(:disabled) {
  background: var(--vp-c-brand-light); /* hover 浅主题色背景 */
  color: var(--vp-c-brand-dark); /* hover 加深文字色 */
  border-color: var(--vp-c-brand-dark); /* hover 加深边框色 */
}

.ai-send-btn:active:not(:disabled) {
  transform: scale(0.96);
}

/* 加载动画 */
.loading {
  display: flex;
  gap: 4px;
  align-items: center;
  height: 20px;
  padding: 4px 0;
}

.loading span {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--vp-c-brand);
  animation: blink 1s infinite;
}

.loading span:nth-child(2) {
  animation-delay: 0.2s;
}

.loading span:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes blink {
  0%, 100% {opacity: 0.3;}
  50% {opacity: 1;}
}

/* 发送等待状态 */
.send-wait {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.send-spinner {
  width: 12px;
  height: 12px;
  border: 2px solid rgba(255,255,255,.4);
  border-top-color: var(--vp-c-brand); /* 适配无填充色按钮的加载动画 */
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {transform: rotate(360deg); }
}

/* Markdown 样式重置 */
.bubble :deep(.markdown-body) {
  line-height: 1.4 !important;
  font-size: 14px !important;
}

.bubble :deep(.markdown-body p) {
  margin: 0 !important;
  padding: 0 !important;
}

.bubble :deep(.markdown-body pre) {
  padding: 8px !important;
  margin: 4px 0 !important;
  font-size: 12px !important;
}

.bubble :deep(.markdown-body code) {
  padding: 1px 3px !important;
  font-size: 13px !important;
}

/* 滚动条隐藏 */
.chat-content::-webkit-scrollbar,
.ai-drawer-body::-webkit-scrollbar {
  width: 0;
}

.chat-content,
.ai-drawer-body {
  scrollbar-width: none;
  -ms-overflow-style: none;
}
</style>