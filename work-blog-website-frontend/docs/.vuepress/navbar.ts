/**
 * 导航配置
 */
import {defineNavbarConfig} from 'vuepress-theme-plume'

// 导航图标可以在 https://fonts.google.com/icons 中查找
export const navbar = defineNavbarConfig([
    {text: '首页', icon: 'material-symbols:home-outline', badge: {text: 'v2.0.0', type: 'info'}, link: '/',},
    {text: '友链', icon: 'material-symbols:partner-exchange', link: '/FRIENDS.md',},
    {text: '博客', icon: 'material-symbols:article-outline', link: '/blog/',},
    {text: '文档', icon: 'material-symbols:developer-guide', link: '/book/',},
    {
        text: '开发修养',
        icon: 'material-symbols:code-blocks',
        items: [
            {text: '编程语言', icon: 'material-symbols:code', link: '/1.编程语言/README.md',},
            {text: '数构算法', icon: 'material-symbols:account-tree', link: '/2.数构算法/README.md',},
            {text: '系统网络', icon: 'material-symbols:captive-portal', link: '/3.系统网络/README.md',},
            {text: '业务服务', icon: 'material-symbols:deployed-code-account', link: '/4.业务服务/README.md',},
            {text: '开发方向', icon: 'material-symbols:arrow-split', link: '/5.开发方向/README.md',},
        ]
    },
    {
        text: '艺术设计',
        icon: 'material-symbols:design-services',
        items: [
            {text: '素材处理', icon: 'material-symbols:landscape-2-edit', link: '/6.素材处理/README.md'},
            {text: '视频剪辑', icon: 'material-symbols:cinematic-blur', link: '/7.视频剪辑/README.md'},
            {text: '立体建模', icon: 'material-symbols:view-in-ar', link: '/8.立体建模/README.md'},
        ]
    },
])
