/**
 * 客端配置
 *
 * 在这里注册使用 vue 编写客户端组件，注册好后就可以在 markdown 文件中使用
 */
// 引入自定义的主题
// @ts-ignore
import './styles/index.css'

// 引入 vuepress 对于客户端组件渲染的支持
// @ts-ignore
import {defineClientConfig} from 'vuepress/client'

// 引入 plume 主题提供的客户端组件
// @ts-ignore
import RepoCard from 'vuepress-theme-plume/features/RepoCard.vue'
// @ts-ignore
import Swiper from 'vuepress-theme-plume/features/Swiper.vue'

// 引入本人自主开发的客户端组件
// @ts-ignore
import BulletinContent from './components/BulletinContent.vue'
// @ts-ignore
import TestAntdUI from './components/TestAntdUI.vue'
// @ts-ignore
import AIChatDrawer from './components/AIChatDrawer.vue'

// 在这里注册客户端组件，就可以成功将 Vue 代码编写的组件使用到 markdown 文件中
export default defineClientConfig({
    enhance({app}) {
        app.component('RepoCard', RepoCard); // 引入码仓卡片组件
        app.component('Swiper', Swiper) // 引入轮播图片组件
        app.component('BulletinContent', BulletinContent); // 引入全局公告组件
        app.component('TestAntdUI', TestAntdUI) // 引入轮播图片组件
        app.component('AIChatDrawer', AIChatDrawer) // 引入轮播图片组件
    },
})
