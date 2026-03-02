<script setup>
// 引入主题核心布局组件 https://plume-layout-slots.netlify.app/
import { Layout } from 'vuepress-theme-plume/client'
</script>

<template>
  <Layout>
    <!-- 1. 全局布局顶部（所有页面最顶部，导航栏上方） -->
    <template #layout-top>
      <div class="test-slot layout-top">
        📌 这是 layout-top 插槽内容（所有页面最顶部）
      </div>
    </template>

    <!-- 2. 全局布局底部（所有页面最底部，页脚下方） -->
    <template #layout-bottom>
      <div class="test-slot layout-bottom">
        📌 这是 layout-bottom 插槽内容（所有页面最底部）
      </div>
    </template>

    <!-- 3. 导航栏标题前 -->
    <template #nav-bar-title-before>
      <span class="test-slot nav-title-before">【</span>
    </template>

    <!-- 4. 导航栏标题后 -->
    <template #nav-bar-title-after>
      <span class="test-slot nav-title-after">】</span>
    </template>

    <!-- 5. 导航栏内容前（导航栏整体内容左侧） -->
    <template #nav-bar-content-before>
      <div class="test-slot nav-content-before">◀️</div>
    </template>

    <!-- 6. 导航栏内容后（导航栏整体内容右侧） -->
    <template #nav-bar-content-after>
      <div class="test-slot nav-content-after">▶️</div>
    </template>

    <!-- 7. 导航栏菜单前（导航菜单列表左侧） -->
    <template #nav-bar-menu-before>
      <div class="test-slot nav-menu-before">🍔</div>
    </template>

    <!-- 8. 导航栏菜单后（导航菜单列表右侧） -->
    <template #nav-bar-menu-after>
      <div class="test-slot nav-menu-after">🍟</div>
    </template>

    <!-- 9. 移动端导航弹窗内容前 -->
    <template #nav-screen-content-before>
      <div class="test-slot nav-screen-before">
        📱 移动端导航弹窗顶部
      </div>
    </template>

    <!-- 10. 移动端导航弹窗内容后 -->
    <template #nav-screen-content-after>
      <div class="test-slot nav-screen-after">
        📱 移动端导航弹窗底部
      </div>
    </template>

    <!-- 11. 移动端导航弹窗菜单前 -->
    <template #nav-screen-menu-before>
      <div class="test-slot nav-screen-menu-before">📋</div>
    </template>

    <!-- 12. 移动端导航弹窗菜单后 -->
    <template #nav-screen-menu-after>
      <div class="test-slot nav-screen-menu-after">📝</div>
    </template>

    <!-- 13. 页脚内容（替换/补充原页脚） -->
    <template #footer-content>
      <div class="test-slot footer-content">
        📮 这是自定义页脚内容（替换了默认页脚）<br/>
        Copyright © 2025 我的测试博客
      </div>
    </template>

    <!-- 14. 公告栏内容（页面顶部的公告条） -->
    <template #bulletin-content>
      <div class="test-slot bulletin-content">
        📢 这是全局公告栏内容（所有页面可见）
      </div>
    </template>
  </Layout>
</template>

<!-- 给测试内容加样式，方便识别位置 -->
<style scoped>
.test-slot {
  background: #f0f8ff;
  color: #e64398;
  padding: 8px;
  margin: 4px 0;
  border: 1px dashed #4299e1;
  font-size: 14px;
}

/* 导航栏相关插槽样式适配 */
.nav-title-before, .nav-title-after {
  background: transparent;
  border: none;
  padding: 0 4px;
}

.nav-content-before, .nav-content-after,
.nav-menu-before, .nav-menu-after {
  display: inline-block;
  background: transparent;
  border: none;
  padding: 0 8px;
}

/* 公告栏样式 */
.bulletin-content {
  background: #fffbe6;
  text-align: center;
  border: 1px dashed #faad14;
}

/* 页脚样式 */
.footer-content {
  text-align: center;
  background: #f8f9fa;
  padding: 20px;
}
</style>