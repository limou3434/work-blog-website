<script setup lang="ts">
import { ref, nextTick } from 'vue'

const showChat = ref(false)
const userInput = ref('')
const chatHistory = ref<{ role: 'user' | 'ai', message: string }[]>([])

// 发送消息
function sendMessage() {
  const msg = userInput.value.trim()
  if (!msg) return

  chatHistory.value.push({ role: 'user', message: msg })
  userInput.value = ''

  // 模拟 AI 回复
  setTimeout(() => {
    chatHistory.value.push({ role: 'ai', message: 'AI 回复: ' + msg })
    nextTick(() => scrollToBottom())
  }, 500)

  nextTick(() => scrollToBottom())
}

// 自动滚动到底
function scrollToBottom() {
  const chatContainer = document.getElementById('chat-main')
  if (chatContainer) chatContainer.scrollTop = chatContainer.scrollHeight
}
</script>

<template>
  <!-- 弹出按钮 -->
  <button @click="showChat = true"
          class="fixed bottom-5 right-5 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg z-50 hover:bg-blue-700">
    AI
  </button>

  <!-- 弹窗 -->
  <transition name="fade">
    <div v-if="showChat"
         class="fixed bottom-20 right-5 w-96 h-128 bg-white shadow-2xl rounded-lg flex flex-col z-50">
      <!-- Header -->
      <header class="flex justify-between items-center p-3 bg-blue-600 text-white font-bold rounded-t-lg">
        AI 对话窗口
        <button @click="showChat = false" class="text-white text-xl font-bold hover:text-gray-300">×</button>
      </header>

      <!-- Chat 内容 -->
      <main id="chat-main" class="flex-1 p-3 overflow-y-auto space-y-2 bg-gray-50">
        <div v-for="(msg, index) in chatHistory" :key="index" class="flex" :class="msg.role === 'user' ? 'justify-end' : 'justify-start'">
          <div :class="[
                  msg.role === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800',
                  'px-3 py-2 rounded-xl max-w-xs break-words'
                ]">
            {{ msg.message }}
          </div>
        </div>
      </main>

      <!-- Footer 输入框 -->
      <footer class="p-3 border-t flex gap-2 bg-white">
        <input
            v-model="userInput"
            @keyup.enter="sendMessage"
            placeholder="输入消息..."
            class="flex-1 border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button @click="sendMessage" class="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">发送</button>
      </footer>
    </div>
  </transition>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* 高度单位 */
.h-128 { height: 32rem; } /* 可调整弹窗高度 */
</style>
