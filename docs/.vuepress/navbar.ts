import {defineNavbarConfig} from 'vuepress-theme-plume'

/**
 * 目录配置
 */
export const navbar = defineNavbarConfig([
    {text: '首页', link: '/'},
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
            {text: '基础排序', link: '/notes/1.编码修养/2.数构算法/2.基础排序/README.md'},
            {text: '常规算法', link: '/notes/1.编码修养/2.数构算法/3.常规算法/README.md'},
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
])
