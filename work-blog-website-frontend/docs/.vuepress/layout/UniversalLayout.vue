<script setup>
import { Layout } from 'vuepress-theme-plume/client'
import { Icon } from '@iconify/vue'
import { ref } from 'vue'

const status = 'healthy'
const isExpanded = ref(false)

const statusConfig = {
  healthy: {
    icon: 'material-symbols:favorite-outline',
    text: '健康',
    color: 'var(--vp-c-green-1)',
    desc: '健康是生命最自然的状态，平静且充满力量，站长今日身体安详的说。'
  },
  death: {
    icon: 'mdi:tombstone',
    text: '死亡',
    color: 'var(--vp-c-gray-1)',
    desc: '一切归于寂静，是生命的另一种形式，站长已经彻底消失的说'
  },
  low: {
    icon: 'mdi:leaf',
    text: '低落',
    color: 'var(--vp-c-yellow-1)',
    desc: '情绪像落叶一样飘落，是沉淀也是休息，站长今天心情一般的说'
  }
}

const currentStatus = statusConfig[status]
</script>

<template>
  <Layout>
    <template #posts-aside-top>
      <div
          class="icon-signature-card"
          @mouseenter="isExpanded = true"
          @mouseleave="isExpanded = false"
      >
        <!-- 顶部内容 -->
        <div class="card-main">
          <div class="icon-desc-block">
            <Icon
                :icon="currentStatus.icon"
                class="status-icon"
                :style="{ color: currentStatus.color }"
            />
            <span class="status-text">{{ currentStatus.text }}</span>
          </div>

          <div class="signature-block">
            <span class="signature-text">温柔的人总会被温柔对待的说</span>
          </div>
        </div>

        <!-- 向下展开的内容：默认隐藏，hover 显示 -->
        <div class="card-detail" :class="{ open: isExpanded }">
          <div class="detail-content">{{ currentStatus.desc }}</div>
        </div>
      </div>
    </template>
  </Layout>
</template>

<style scoped>
/* 主卡片：Plume 风格 */
.icon-signature-card {
  background: var(--vp-c-bg);
  border-radius: 8px;
  padding: 12px 16px;
  margin-bottom: 16px;
  border: 1px solid var(--vp-c-brand-3);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
  transition: all 0.25s ease;
  cursor: default;
}

.icon-signature-card:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.06);
  transform: translateY(-1px);
}

/* 头部布局 */
.card-main {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

/* 图标 + 文字 */
.icon-desc-block {
  display: flex;
  align-items: center;
  gap: 8px;
}

.status-icon {
  font-size: 20px;
  width: 20px;
  height: 20px;
}

.status-text {
  font-size: 13px;
  color: var(--vp-c-text-1);
}

/* 签名 */
.signature-text {
  font-size: 12px;
  color: var(--vp-c-text-2);
  white-space: nowrap;
}

/* -------------------------- */
/* 向下展开部分：关键在这里 */
/* -------------------------- */
.card-detail {
  height: 0;
  overflow: hidden;
  transition: height 0.28s ease, padding 0.28s ease;
}

.card-detail.open {
  height: 40px;
  padding-top: 10px;
  border-top: 1px solid var(--vp-c-divider);
  margin-top: 8px;
}

.detail-content {
  font-size: 10px;
  color: var(--vp-c-text-2);
  line-height: 1.4;
}
</style>