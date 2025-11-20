/**
 * 集合配置
 */
import {defineCollection, defineCollections} from 'vuepress-theme-plume'

export const collections = defineCollections([
    defineCollection({
        type: 'post',
        dir: '/blog/',
        title: 'blog',
        postCover: 'right',
        pagination: 15,
        postList: true, // 启用列表
        tags: true, // 启用标签
        archives: true, // 启用归档
        categories: true, // 启用分类
    }),
    defineCollection({
        type: 'doc',
        dir: '/1.编程语言/',
        title: '1.编程语言',
        sidebarCollapsed: true,
        sidebar: 'auto',
    }),
    defineCollection({
        type: 'doc',
        dir: '/2.数构算法/',
        title: '2.数构算法',
        sidebarCollapsed: true,
        sidebar: 'auto',
    }),
])
