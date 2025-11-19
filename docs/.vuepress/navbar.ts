/**
 * 目录配置
 */
import {defineNavbarConfig} from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
    {text: '首页', link: '/', icon: 'material-symbols:home-outline'},
    {text: '博客', link: '/blog/'},
    {text: '标签', link: '/blog/tags/'},
    {text: '归档', link: '/blog/archives/'},
    {
        text: '编程语言',
        items: [
            {text: '系统语言', link: '/notes/1.编码修养/1.编程语言/1.系统语言/README.md'},
            {text: '业务语言', link: '/notes/1.编码修养/1.编程语言/2.业务语言/README.md'},
            {text: '智能语言', link: '/notes/1.编码修养/1.编程语言/3.智能语言/README.md'},
            {text: '脚本语言', link: '/notes/1.编码修养/1.编程语言/4.脚本语言/README.md'},
        ]
    },
    {
        text: '数构算法',
        items: [
            {text: '数据结构', link: '/notes/1.编码修养/2.数构算法/1.数据结构/README.md'},
            {text: '复合结构', link: '/notes/1.编码修养/2.数构算法/2.复合结构/README.md'},
            {text: '基础排序', link: '/notes/1.编码修养/2.数构算法/3.基础排序/README.md'},
            {text: '常规算法', link: '/notes/1.编码修养/2.数构算法/4.常规算法/README.md'},
        ]
    },
    {
        text: '系统网络',
        items: [
            {text: '基本操作', link: '/notes/1.编码修养/3.系统网络/1.基本操作/README.md'},
            {text: '系统美化', link: '/notes/1.编码修养/3.系统网络/2.系统美化/README.md'},
            {text: '网络协议', link: '/notes/1.编码修养/3.系统网络/3.网络协议/README.md'},
            {text: '内核原理', link: '/notes/1.编码修养/3.系统网络/4.内核原理/README.md'},
        ]
    },
    {
        text: '业务服务',
        items: [
            {text: '存储服务', link: '/notes/1.编码修养/4.业务服务/1.存储服务/README.md'},
            {text: '缓存服务', link: '/notes/1.编码修养/4.业务服务/2.缓存服务/README.md'},
            {text: '鉴权服务', link: '/notes/1.编码修养/4.业务服务/3.鉴权服务/README.md'},
        ]
    },
    {
        text: '开发方向',
        items: [
            {text: '页面开发', link: '/notes/1.编码修养/5.开发方向/1.网页开发/README.md'},
            {text: '桌面开发', link: '/notes/1.编码修养/5.开发方向/2.桌面开发/README.md'},
            {text: '移动开发', link: '/notes/1.编码修养/5.开发方向/3.移动开发/README.md'},
            {text: '小程开发', link: '/notes/1.编码修养/5.开发方向/4.小程开发/README.md'},
            {text: '插件开发', link: '/notes/1.编码修养/5.开发方向/5.插件开发/README.md'},
            {text: '文档开发', link: '/notes/1.编码修养/5.开发方向/6.文档开发/README.md'},
        ]
    },
    {
        text: '个人摘要',
        items: [
            {text: '色彩理论', link: '/notes/2.个人摘要/1.色彩理论/README.md'},
            {text: '摄影技巧', link: '/notes/2.个人摘要/2.摄影技巧/README.md'},
            {text: '立体建模', link: '/notes/2.个人摘要/3.立体建模/README.md'},
        ]
    },
])
