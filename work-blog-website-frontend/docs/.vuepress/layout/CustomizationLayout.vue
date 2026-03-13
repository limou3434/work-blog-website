<script setup>
import { Layout } from 'vuepress-theme-plume/client'
import AIChatDrawer from '../components/AIChatDrawer.vue'
import ChatComponent from '../components/ChatComponent.vue'
import MusicPlayer from '../components/MusicPlayer.vue'
import Calendar from '../components/Calendar.vue'
import BentoGallery from '../components/BentoGallery.vue'
import PostsTopDecor from '../components/PostsTopDecor.vue'
</script>

<template>
  <Layout>
    <template #aside-outline-before>
      <AIChatDrawer/>
      <ChatComponent/>
      <MusicPlayer/>
      <Calendar/>
    </template>
    <template #posts-post-list-before>
      <PostsTopDecor/>
      <BentoGallery/>
    </template>
    <template #posts-post-list-after>
      <PostsTopDecor/>
    </template>
  </Layout>
</template>

<style scoped>

</style>