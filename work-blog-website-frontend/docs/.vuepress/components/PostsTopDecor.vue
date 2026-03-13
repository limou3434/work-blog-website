<template>
  <!-- #posts-top 专属静态装饰组件（窄版） -->
  <div class="posts-top-decor">
    <!-- 装饰元素1：渐变斜线网格 -->
    <div class="decor-grid"></div>
    <!-- 装饰元素2：主题色渐变光晕条 -->
    <div class="decor-glow-bar"></div>
    <!-- 装饰元素3：极简圆点装饰 -->
    <div class="decor-dots">
      <div class="dot" v-for="i in 6" :key="i"></div> <!-- 减少圆点数量适配窄宽度 -->
    </div>
  </div>
</template>

<script setup lang="ts">
// 纯静态组件，无逻辑
</script>

<style scoped>
/* 核心容器：调整宽度+居中，适配 #posts-top */
.posts-top-decor {
  width: 100%; /* 核心修改：宽度改为80%（可按需调70%/90%） */
  height: 60px;
  position: relative;
  overflow: hidden;
  background-color: var(--vp-c-bg-alt);
  border-radius: 8px;
  margin: auto; /* 自动居中，适配 #posts-top 容器 */
}

/* 渐变斜线网格（适配窄宽度） */
.decor-grid {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background:
      linear-gradient(45deg, rgba(112, 69, 158, 0.05) 25%, transparent 25%),
      linear-gradient(-45deg, rgba(84, 45, 199, 0.05) 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, rgba(112, 69, 158, 0.05) 75%),
      linear-gradient(-45deg, transparent 75%, rgba(84, 45, 199, 0.05) 75%);
  background-size: 18px 18px; /* 缩小网格密度适配窄宽度 */
  z-index: 1;
}

.decor-dots:hover .dot {
  opacity: 1;
}
.dot:nth-child(2n) {
  background: var(--vp-c-brand-1);
}

/* 暗黑模式适配 */
@media (prefers-color-scheme: dark) {
  .decor-grid {
    background:
        linear-gradient(45deg, rgba(97, 105, 189, 0.08) 25%, transparent 25%),
        linear-gradient(-45deg, rgba(84, 45, 199, 0.08) 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, rgba(97, 105, 189, 0.08) 75%),
        linear-gradient(-45deg, transparent 75%, rgba(84, 45, 199, 0.08) 75%);
  }
  .decor-glow-bar {
    box-shadow: 0 0 8px rgba(97, 105, 189, 0.4);
  }
}

/* 小屏幕适配（进一步缩窄） */
@media (max-width: 768px) {
  .posts-top-decor {
    width: 90%; /* 小屏幕宽度放宽到90%，保证显示完整 */
  }
}
</style>