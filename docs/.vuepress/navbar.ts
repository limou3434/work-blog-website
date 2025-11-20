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
            {text: '素材处理', icon: 'material-symbols:landscape-2-edit', link: '---'},
            {text: '视频剪辑', icon: 'material-symbols:cinematic-blur', link: '---'},
            {text: '立体建模', icon: 'material-symbols:view-in-ar', link: '---'},
        ]
    },
    {
        text: '香水研究',
        icon: 'material-symbols:fragrance',
        items: [
            {text: '历史发展', icon: 'material-symbols:update', link: '---',},
            {text: '原料原理', icon: 'material-symbols:experiment', link: '---',},
            {text: '香水品牌', icon: 'material-symbols:copyright', link: '---',},
        ]
    },
    {
        text: '商业逻辑',
        icon: 'material-symbols:business-center',
        items: [
            {text: '货架电商', icon: 'material-symbols:store', link: '---',},
            {text: '兴趣电商', icon: 'material-symbols:bookmark-heart', link: '---',},
            {text: '种草电商', icon: 'material-symbols:grass', link: '---',},
            {text: '信任电商', icon: 'material-symbols:handshake', link: '---',},
        ]
    },
    {
        text: '电音探索',
        icon: 'material-symbols:album',
        items: [
            {text: '基础乐理', icon: 'material-symbols:music-video', link: '---',},
            {text: '贝斯分类', icon: 'material-symbols:discover-tune', link: '---',},
        ]
    },
])
