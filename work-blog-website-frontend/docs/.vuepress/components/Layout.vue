<script setup>
import { Layout } from 'vuepress-theme-plume/client'
</script>

<template>
  <Layout>
    <!-- 全局布局顶部 -->
    <template #layout-top>
      <div class="slot-test">layout-top</div>
    </template>

    <!-- 全局布局底部 -->
    <template #layout-bottom>
      <div class="slot-test">layout-bottom</div>
    </template>

    <!-- 导航栏标题前 -->
    <template #nav-bar-title-before>
      <span class="nav-slot">nav-bar-title-before</span>
    </template>

    <!-- 导航栏标题后 -->
    <template #nav-bar-title-after>
      <span class="nav-slot">nav-bar-title-after</span>
    </template>

    <!-- 导航栏内容前 -->
    <template #nav-bar-content-before>
      <div class="nav-slot-block">nav-bar-content-before</div>
    </template>

    <!-- 导航栏内容后 -->
    <template #nav-bar-content-after>
      <div class="nav-slot-block">nav-bar-content-after</div>
    </template>

    <!-- 导航栏菜单前 -->
    <template #nav-bar-menu-before>
      <div class="nav-slot-block">nav-bar-menu-before</div>
    </template>

    <!-- 导航栏菜单后 -->
    <template #nav-bar-menu-after>
      <div class="nav-slot-block">nav-bar-menu-after</div>
    </template>

    <!-- 移动端导航弹窗内容前 -->
    <template #nav-screen-content-before>
      <div class="slot-test">nav-screen-content-before</div>
    </template>

    <!-- 移动端导航弹窗内容后 -->
    <template #nav-screen-content-after>
      <div class="slot-test">nav-screen-content-after</div>
    </template>

    <!-- 移动端导航弹窗菜单前 -->
    <template #nav-screen-menu-before>
      <div class="slot-test">nav-screen-menu-before</div>
    </template>

    <!-- 移动端导航弹窗菜单后 -->
    <template #nav-screen-menu-after>
      <div class="slot-test">nav-screen-menu-after</div>
    </template>

    <!-- 页脚内容 -->
    <template #footer-content>
      <div class="slot-test footer">footer-content</div>
    </template>

    <!-- 公告栏内容 -->
    <template #bulletin-content>
      <div class="slot-test notice">bulletin-content</div>
    </template>
  </Layout>
</template>

<style scoped>
/* 通用插槽样式 */
.slot-test {
  padding: 5px;
  margin: 2px 0;
  color: #333;
  font-size: 12px;
  border: 1px dashed #666;
  background: #f5f5f5;
}

/* 导航栏行内插槽样式（标题前后） */
.nav-slot {
  margin: 0 4px;
  color: #e64398;
  font-size: 11px;
}

/* 导航栏块级插槽样式（内容/菜单前后） */
.nav-slot-block {
  display: inline-block;
  padding: 2px 6px;
  margin: 0 2px;
  color: #4299e1;
  font-size: 11px;
  border: 1px dashed #4299e1;
}

/* 公告栏样式 */
.notice {
  background: #fffbe6;
  text-align: center;
  border-color: #faad14;
  color: #fa8c16;
}

/* 页脚样式 */
.footer {
  text-align: center;
  background: #f0f8ff;
  border-color: #9f7aea;
  color: #9f7aea;
  padding: 10px;
}
</style>