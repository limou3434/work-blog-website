/**
 * 客端配置
 */
// @ts-ignore
import {defineClientConfig} from 'vuepress/client'
// @ts-ignore
import RepoCard from 'vuepress-theme-plume/features/RepoCard.vue'
// @ts-ignore
import Swiper from 'vuepress-theme-plume/features/Swiper.vue'
// @ts-ignore
import BulletinContent from './components/BulletinContent.vue'
// @ts-ignore
import TestAntdUI from './components/TestAntdUI.vue'

export default defineClientConfig({
    enhance({app}) {
        app.component('RepoCard', RepoCard); // 引入码仓卡片组件
        app.component('Swiper', Swiper) // 引入轮播图片组件
        app.component('BulletinContent', BulletinContent); // 引入全局公告组件
        app.component('TestAntdUI', TestAntdUI) // 引入轮播图片组件
    },
})
