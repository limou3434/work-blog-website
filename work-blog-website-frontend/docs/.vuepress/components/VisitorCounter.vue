<template>
  <!-- 直接展示实时访问计数 -->
  <div style="margin: 10px 0; color: #666;">
    本次访问计数：<span style="color: #409eff; font-weight: bold;">{{ visitorCount }}</span>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// 定义计数变量，初始值为0
const visitorCount = ref(0)

onMounted(() => {
  // 页面加载完成后，计数直接+1（仅本次会话有效，刷新重置）
  visitorCount.value = 1
})
</script>