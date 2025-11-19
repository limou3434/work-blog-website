/**
 * 客端配置
 */
// @ts-ignore
import {defineClientConfig} from 'vuepress/client'
// @ts-ignore
import BulletinContent from './components/BulletinContent.vue'
// @ts-ignore
import RepoCard from 'vuepress-theme-plume/features/RepoCard.vue'
// @ts-ignore
import Swiper from 'vuepress-theme-plume/features/Swiper.vue'
// import NpmBadge from 'vuepress-theme-plume/features/NpmBadge.vue'
// import NpmBadgeGroup from 'vuepress-theme-plume/features/NpmBadgeGroup.vue'
// import CustomComponent from './theme/components/Custom.vue'
// import './theme/styles/custom.css'

export default defineClientConfig({
    enhance({app}) {
        // built-in components
        // app.component('RepoCard', RepoCard)
        // app.component('NpmBadge', NpmBadge)
        // app.component('NpmBadgeGroup', NpmBadgeGroup)
        // app.component('Swiper', Swiper) // you should install `swiper`

        // your custom components
        // app.component('CustomComponent', CustomComponent)
        app.component('BulletinContent', BulletinContent); // 引入全局公告组件
        app.component('RepoCard', RepoCard); // 引入码仓卡片组件
        app.component('Swiper', Swiper) // 引入轮播图片组件
    },
})
