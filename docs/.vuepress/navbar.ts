/**
 * 导航配置
 */
import {defineNavbarConfig} from 'vuepress-theme-plume'

// 导航图标可以在 https://fonts.google.com/icons 中查找
export const navbar = defineNavbarConfig([
    {text: '首页', icon: 'material-symbols:home-outline', badge: {text: 'v2.0.0', type: 'info'}, link: '/',},
    {text: '博客', icon: 'material-symbols:article-outline', link: '/blog/',},
    {text: '友链', link: '/FRIENDS.md', icon: 'material-symbols:partner-exchange',},
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
    // {
    //     text: '香水研究',
    //     icon: 'material-symbols:fragrance',
    //     items: [
    //         {text: '香水历史', icon: 'material-symbols:update', link: '/9.香水历史/README.md',},
    //         {text: '香水原料', icon: 'material-symbols:experiment', link: '/10.香水原料/README.md',},
    //         {text: '香水品牌', icon: 'material-symbols:copyright', link: '/11.香水品牌/README.md',},
    //     ]
    // },
    // {
    //     text: '商业逻辑',
    //     icon: 'material-symbols:business-center',
    //     items: [
    //         {text: '货架电商', icon: 'material-symbols:store', link: '/12.货架电商/README.md',},
    //         {text: '兴趣电商', icon: 'material-symbols:bookmark-heart', link: '/13.兴趣电商/README.md',},
    //         {text: '种草电商', icon: 'material-symbols:grass', link: '/14.种草电商/README.md',},
    //         {text: '信任电商', icon: 'material-symbols:handshake', link: '/15.信任电商/README.md',},
    //     ]
    // },
    // {
    //     text: '电音探索',
    //     icon: 'material-symbols:album',
    //     items: [
    //         {text: '基础乐理', icon: 'material-symbols:music-video', link: '/16.基础乐理/README.md',},
    //         {text: '贝斯分类', icon: 'material-symbols:discover-tune', link: '/17.贝斯分类/README.md',},
    //     ]
    // },
])
