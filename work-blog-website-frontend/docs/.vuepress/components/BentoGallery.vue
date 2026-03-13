<!-- components/BentoGallery.vue -->
<template>
  <div class="page-ppt-scroll-section">
    <!-- 便当风格错落图片组 -->
    <div ref="bentoRef" class="bento-box-grid">
      <div class="bento-item a1"><img src="/artistic_1.jpg" alt="企业展示图1"></div>
      <div class="bento-item a2"><img src="/artistic_2.jpg" alt="企业展示图2"></div>
      <div class="bento-item a3"><img src="/artistic_3.jpg" alt="企业展示图3"></div>
      <div class="bento-item a4"><img src="/artistic_4.jpg" alt="企业展示图4"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// 定义DOM引用
const bentoRef = ref<HTMLDivElement | null>(null)

// 滚动监听逻辑
const handleScroll = () => {
  if (!bentoRef.value) return
  const top = bentoRef.value.getBoundingClientRect().top
  const winH = window.innerHeight
  // 元素进入视口85%时触发动画
  if (top < winH * 0.85) {
    bentoRef.value.classList.add('visible')
  }
}

// 组件挂载时绑定监听
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  // 初始检查一次，避免页面加载时元素已在视口内
  setTimeout(handleScroll, 100)
})

// 组件销毁时移除监听（避免内存泄漏）
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* 容器基础样式 */
.page-ppt-scroll-section {
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  border-radius: 8px;
}

/* 便当式布局容器 - 初始隐藏+下移 */
.bento-box-grid {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(140px, auto);
  gap: 16px;
  opacity: 0;
  transform: translateY(60px);
  transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
}

/* 滑入动画激活态 */
.bento-box-grid.visible {
  opacity: 1;
  transform: translateY(0);
}

/* 便当格子样式 - 初始缩放+下移 */
.bento-item {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  opacity: 0;
  transform: translateY(40px) scale(0.95);
  transition: all 0.8s cubic-bezier(0.25, 1, 0.5, 1);
}

/* 图片自适应 */
.bento-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  /* 可选：图片轻微高斯模糊，提升高级感 */
  /* filter: blur(0.5px); */
}

/* 格子依次入场动画（延迟叠加） */
.bento-box-grid.visible .bento-item {
  opacity: 1;
  transform: translateY(0) scale(1);
}
.bento-box-grid.visible .a1 { transition-delay: 0.1s; }
.bento-box-grid.visible .a2 { transition-delay: 0.2s; }
.bento-box-grid.visible .a3 { transition-delay: 0.3s; }
.bento-box-grid.visible .a4 { transition-delay: 0.4s; }

/* 便当格子布局规则（核心错落效果） */
.a1 { grid-column: 1 / 3; grid-row: 1 / 3; } /* 左上大格子 */
.a2 { grid-column: 3 / 5; grid-row: 1 / 2; } /* 右上长格子 */
.a3 { grid-column: 3 / 4; grid-row: 2 / 3; } /* 右侧中小格子 */
.a4 { grid-column: 4 / 5; grid-row: 2 / 3; } /* 右侧小格子 */

/* 移动端适配（屏幕<768px时堆叠为2列） */
@media (max-width: 768px) {
  .bento-box-grid {
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }
  .a1, .a2, .a3, .a4, .a5 {
    grid-column: auto;
    grid-row: auto;
  }
  .page-ppt-scroll-section {
    padding: 40px 16px 80px;
  }
}
</style>