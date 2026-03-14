<template>
  <div class="md-contribute-upload-entrance">
    <label class="upload-area" :class="{ uploading: uploading }">
      <input
          type="file"
          accept=".md,.markdown"
          class="hidden-file-input"
          @change="handleFileUpload"
          :disabled="uploading"
      />
      <span class="upload-text">{{ uploading ? '读取文件中...' : '上传 Markdown 文件' }}</span>
    </label>
  </div>

  <teleport to="body">
    <div v-if="modalVisible" class="md-contribute-modal-mask" @click="closeContributeModal">
      <div class="md-contribute-modal" @click.stop>
        <div class="modal-header">
          <h3>编辑与预览</h3>
          <span class="file-name-tag">{{ fileName }}</span>
          <button class="close-btn" @click="closeContributeModal">×</button>
        </div>

        <!-- 核心：等宽自适应容器 -->
        <div class="modal-body">
          <!-- 编辑区 - 严格50%宽度 -->
          <div class="modal-panel modal-left">
            <h4>编辑区</h4>
            <textarea v-model="mdContent" class="md-editor" placeholder="请输入 Markdown 内容..."></textarea>
          </div>
          <!-- 预览区 - 严格50%宽度 -->
          <div class="modal-panel modal-right">
            <h4>预览区</h4>
            <div class="preview-content">
              <div v-if="mdContent.trim()" class="preview-section" v-html="renderedMd"></div>
              <div v-else class="empty-preview">请在左侧编辑 Markdown 内容</div>
            </div>
          </div>
        </div>

        <div class="modal-footer">
          <button @click="handleFakeSubmit" :disabled="submitLoading || !mdContent.trim()" class="submit-btn">
            {{ submitLoading ? '提交中...' : '提交贡献' }}
          </button>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const modalVisible = ref(false)
const mdContent = ref('')
const uploading = ref(false)
const submitLoading = ref(false)
const fileName = ref('')
const windowWidth = ref(window.innerWidth)

// 监听窗口大小变化，确保自适应
const handleResize = () => {
  windowWidth.value = window.innerWidth
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})

const handleFileUpload = (e) => {
  const file = e.target.files?.[0]
  if (!file) return
  e.target.value = ''

  if (!file.name.endsWith('.md') && !file.name.endsWith('.markdown')) {
    alert('仅支持 .md / .markdown 格式文件')
    return
  }

  uploading.value = true
  fileName.value = file.name

  const reader = new FileReader()
  reader.onload = (evt) => {
    mdContent.value = evt.target.result
    uploading.value = false
    modalVisible.value = true
  }
  reader.onerror = () => {
    alert('文件读取失败，请重试')
    uploading.value = false
    fileName.value = ''
  }
  reader.readAsText(file, 'utf-8')
}

const closeContributeModal = () => {
  modalVisible.value = false
  submitLoading.value = false
}

const renderedMd = computed(() => {
  if (!mdContent.value) return ''
  return mdContent.value
      .replace(/\r\n/g, '\n')
      .replace(/\n/g, '<br>')
      .replace(/^#{1,6} (.*$)/gm, (m, p1) => `<h${m.split(' ')[0].length}>${p1}</h${m.split(' ')[0].length}>`)
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>')
      .replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
      .replace(/`([^`]+)`/g, '<code>$1</code>')
})

const handleFakeSubmit = async () => {
  submitLoading.value = true
  await new Promise(r => setTimeout(r, 1200))
  alert('提交成功（仅本地模拟）')
  submitLoading.value = false
  closeContributeModal()
}
</script>

<style scoped>
/* 基础样式 */
.md-contribute-upload-entrance {
  margin: 16px 0;
  width: 100%;
}
.upload-area {
  display: block;
  width: 100%;
  padding: 24px 0;
  border: 2px dashed var(--vp-c-border);
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  background: var(--vp-c-bg-alt);
}
.upload-area:hover {
  border-color: var(--vp-c-brand);
}
.upload-text {
  font-size: 14px;
  color: var(--vp-c-text-2);
}
.hidden-file-input {
  display: none;
}

/* 弹窗遮罩 - 自适应窗口 */
.md-contribute-modal-mask {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  overflow-y: auto;
}

/* 弹窗主体 - 自适应宽度 */
.md-contribute-modal {
  width: 100%;
  max-width: min(1400px, 95vw); /* 最大宽度不超过窗口95% */
  min-width: 320px;
  background: var(--vp-c-bg);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
}

/* 弹窗头部 - 自适应 */
.modal-header {
  padding: 16px 24px;
  border-bottom: 1px solid var(--vp-c-border-light);
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}
.modal-header h3 {
  margin: 0;
  font-size: 16px;
  flex: 1;
  min-width: 120px; /* 最小宽度，避免挤压 */
}
.file-name-tag {
  font-size: 12px;
  color: var(--vp-c-brand);
  background: rgba(var(--vp-c-brand-rgb), 0.08);
  padding: 4px 12px;
  border-radius: 16px;
  max-width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.close-btn {
  background: transparent;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: var(--vp-c-text-2);
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0; /* 不被挤压 */
}
.close-btn:hover {
  background: var(--vp-c-bg-alt);
}

/* 核心：等宽布局 + 窗口自适应 */
.modal-body {
  display: flex;
  height: 700px;
  overflow: hidden;
  width: 100%; /* 确保宽度100% */
}

/* 面板通用样式 - 严格等宽 */
.modal-panel {
  flex: 1; /* 关键：使用flex:1确保严格等宽 */
  min-width: 0; /* 解决内容溢出导致不等宽 */
  padding: 24px;
  display: flex;
  flex-direction: column;
}
/* 仅添加右侧边框，避免宽度偏差 */
.modal-left {
  border-right: 1px solid var(--vp-c-border-light);
}
.modal-right {
  /* 无额外边框，确保宽度一致 */
}

.modal-panel h4 {
  margin: 0 0 16px;
  font-size: 14px;
}

/* 编辑区：自动换行 + 自适应 */
.md-editor {
  flex: 1;
  padding: 16px;
  border-radius: 8px;
  background: var(--vp-c-bg-alt);
  border: none;
  outline: none;
  resize: none;
  font-family: monospace;
  font-size: 14px;
  line-height: 1.8;
  overflow-y: auto;
  /* 自动换行 */
  white-space: pre-wrap;
  word-wrap: break-word;
  word-break: break-all;
  width: 100%; /* 宽度100% */
  box-sizing: border-box; /* 内边距不影响宽度 */
}

/* 预览区：自动换行 + 自适应 */
.preview-content {
  flex: 1;
  padding: 16px;
  border-radius: 8px;
  background: var(--vp-c-bg-alt);
  overflow-y: auto;
  width: 100%; /* 宽度100% */
  box-sizing: border-box; /* 内边距不影响宽度 */
}
.preview-section {
  line-height: 1.8;
  white-space: normal;
  word-wrap: break-word;
  word-break: break-all;
}
.preview-section pre {
  white-space: pre;
  overflow-x: auto;
  background: var(--vp-c-bg);
  padding: 16px;
  border-radius: 6px;
  margin: 12px 0;
}
.preview-section code {
  background: rgba(var(--vp-c-border-rgb), 0.1);
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 13px;
}
.empty-preview {
  color: var(--vp-c-text-3);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 精美滚动条 */
.md-editor::-webkit-scrollbar,
.preview-content::-webkit-scrollbar {
  width: 6px;
}
.md-editor::-webkit-scrollbar-thumb,
.preview-content::-webkit-scrollbar-thumb {
  background: rgba(150,150,150,0.25);
  border-radius: 3px;
}
.md-editor::-webkit-scrollbar-thumb:hover,
.preview-content::-webkit-scrollbar-thumb:hover {
  background: rgba(150,150,150,0.5);
}

/* 弹窗底部 - 自适应 */
.modal-footer {
  padding: 16px 24px;
  border-top: 1px solid var(--vp-c-border-light);
  text-align: right;
}
.submit-btn {
  padding: 10px 24px;
  background: var(--vp-c-brand);
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
.submit-btn:disabled {
  opacity: 0.6;
}

/* 响应式适配 - 小窗口自动切换纵向布局 */
@media (max-width: 768px) {
  .modal-body {
    flex-direction: column;
    height: 600px;
  }
  .modal-left {
    border-right: none;
    border-bottom: 1px solid var(--vp-c-border-light);
    flex: 1;
  }
  .modal-right {
    flex: 1;
  }
  .modal-footer .submit-btn {
    width: 100%; /* 小窗口按钮全屏宽 */
  }
}

/* 超小窗口适配 */
@media (max-width: 480px) {
  .modal-body {
    height: 500px;
  }
  .modal-panel {
    padding: 16px;
  }
  .md-editor, .preview-content {
    padding: 12px;
  }
}
</style>