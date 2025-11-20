/**
 * 导航配置
 */
import {defineNavbarConfig} from 'vuepress-theme-plume'

// 导航图标可以在 https://fonts.google.com/icons 中查找
export const navbar = defineNavbarConfig([
    {text: '首页', icon: 'material-symbols:home-outline', badge: {text: 'v2.0.0', type: 'info'}, link: '/',},
    {text: '每日博客', icon: 'material-symbols:article-outline', link: '/blog/',},
    {text: '友情链接', link: '/FRIENDS.md', icon: 'material-symbols:partner-exchange',},
    {
        text: '开发修养',
        icon: 'material-symbols:code-blocks',
        items: [
            {text: '编程语言', link: '/1.编程语言/README.md',},
            {text: '数构算法', link: '/2.数构算法/README.md',},
            {text: '系统网络', link: '/3.系统网络/README.md',},
            {text: '业务服务', link: '/4.业务服务/README.md',},
            {text: '开发方向', link: '/5.开发方向/README.md',},
        ]
    },
    {
        text: '艺术设计',
        icon: 'material-symbols:design-services',
        items: [
            {text: '素材处理', link: '---'},
            {text: '视频处理', link: '---'},
            {text: '立体建模', link: '---'},
        ]
    },
    {
        text: '香水研究',
        icon: 'material-symbols:fragrance',
        items: [
            {text: '历史发展', link: '---',},
            {text: '原料原理', link: '---',},
            {text: '香水品牌', link: '---',},
        ]
    },
    {
        text: '商业逻辑',
        icon: 'material-symbols:business-center',
        items: [
            {text: '兴趣电商', link: '---',},
            {text: '种草电商', link: '---',},
            {text: '信任电商', link: '---',},
            {text: '货架电商', link: '---',},
        ]
    },
    {
        text: '电音探索',
        icon: 'material-symbols:album',
        items: [
            {text: '基础乐理', link: '---',},
            {text: '贝斯分类', link: '---',},
        ]
    },
])
