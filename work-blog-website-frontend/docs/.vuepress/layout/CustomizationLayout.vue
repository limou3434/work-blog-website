<script setup>
import { Layout } from 'vuepress-theme-plume/client'
import AIChatDrawer from '../components/AIChatDrawer.vue'
import MusicPlayer from '../components/MusicPlayer.vue'
</script>

<template>
  <Layout>
    <template #aside-outline-before>
      <AIChatDrawer/>
      <MusicPlayer/>
    </template>
  </Layout>
</template>

<style scoped>

</style>