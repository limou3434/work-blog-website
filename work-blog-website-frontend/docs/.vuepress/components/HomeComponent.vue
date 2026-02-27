<script setup lang="ts">
import type { ThemeHomeConfigBase } from 'vuepress-theme-plume'
// @ts-ignore
import { VPHomeBox } from 'vuepress-theme-plume/client'

// 定义组件属性，继承主题基础配置并扩展
const props = defineProps<ThemeHomeConfigBase & {
  // 自定义属性
  title?: string
  description?: string
  items?: Array<{
    icon?: string
    text: string
    link?: string
    desc?: string
  }>
  ctaText?: string
  ctaLink?: string
}>()

// 默认值处理
const defaultItems = [
  { icon: "✨", text: "简洁优雅", desc: "现代化的设计风格" },
  { icon: "🚀", text: "性能卓越", desc: "轻量级且高效" },
  { icon: "🎨", text: "高度定制", desc: "灵活的配置选项" },
  { icon: "📱", text: "响应式布局", desc: "适配各种设备尺寸" },
]

const items = props.items || defaultItems
</script>

<template>
  <VPHomeBox
      :type="type || 'primary'"
      :background-image="backgroundImage || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'"
      :background-attachment="backgroundAttachment || 'fixed'"
      :full="full !== false"
      class="custom-home-box"
  >
    <!-- 自定义内容区域 -->
    <div class="home-box-content">
      <!-- 标题区域 -->
      <div class="home-box-header" v-if="title || description">
        <h2 class="home-box-title" v-if="title">{{ title }}</h2>
        <p class="home-box-desc" v-if="description">{{ description }}</p>
      </div>

      <!-- 特性列表 -->
      <div class="home-box-features" v-if="items.length">
        <div
            class="feature-item"
            v-for="(item, index) in items"
            :key="index"
            :class="{ 'has-link': item.link }"
        >
          <span class="feature-icon" v-if="item.icon">{{ item.icon }}</span>
          <div class="feature-content">
            <h3 class="feature-text">
              <a v-if="item.link" :href="item.link">{{ item.text }}</a>
              <span v-else>{{ item.text }}</span>
            </h3>
            <p class="feature-desc" v-if="item.desc">{{ item.desc }}</p>
          </div>
        </div>
      </div>

      <!-- 行动按钮 -->
      <div class="home-box-cta" v-if="ctaText">
        <a
            class="cta-button"
            :href="ctaLink || '#'"
            target="_blank"
            rel="noopener noreferrer"
        >
          {{ ctaText }}
        </a>
      </div>
    </div>
  </VPHomeBox>
</template>

<style scoped>
/* 主容器样式 */
.custom-home-box {
  padding: 4rem 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.custom-home-box:hover {
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

/* 内容容器 */
.home-box-content {
  max-width: 1200px;
  margin: 0 auto;
  color: white;
  text-align: center;
}

/* 标题区域 */
.home-box-header {
  margin-bottom: 3rem;
}

.home-box-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0 0 1rem 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.home-box-desc {
  font-size: 1.2rem;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
  opacity: 0.9;
}

/* 特性列表 */
.home-box-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.feature-item {
  padding: 2rem 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease, background 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.feature-item:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.15);
}

.feature-icon {
  font-size: 2rem;
  display: block;
  margin-bottom: 1rem;
}

.feature-content {
  text-align: left;
}

.feature-text {
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
}

.feature-text a {
  color: inherit;
  text-decoration: none;
}

.feature-text a:hover {
  text-decoration: underline;
}

.feature-desc {
  font-size: 1rem;
  opacity: 0.8;
  line-height: 1.5;
  margin: 0;
}

/* 行动按钮 */
.home-box-cta {
  margin-top: 2rem;
}

.cta-button {
  display: inline-block;
  padding: 1rem 2.5rem;
  background: rgba(255, 255, 255, 0.9);
  color: #667eea;
  font-weight: 600;
  text-decoration: none;
  border-radius: 50px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.cta-button:hover {
  background: white;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

/* 响应式适配 */
@media (max-width: 768px) {
  .custom-home-box {
    padding: 2.5rem 1.5rem;
  }

  .home-box-title {
    font-size: 2rem;
  }

  .home-box-features {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
</style>