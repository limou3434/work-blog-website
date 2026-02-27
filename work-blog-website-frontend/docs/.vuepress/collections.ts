/**
 * 集合配置
 *
 * 这里支持自动生成多个文档集合
 */
import {defineCollection, defineCollections} from 'vuepress-theme-plume'
import {navbar} from './navbar'

// 过滤器，从 navbar 提取所有有效的链接
function extractLinksFromNavbar() {
    const links: Array<{link: string, text: string}> = []
    
    navbar.forEach((item: any) => {
        // 集合黑名单，跳过"网站首页、每日博客、友情链接" 来生成集合
        if (item.link === '/' || item.link === '/blog/' || item.link === '/FRIENDS.md') {
            return
        }
        
        // 处理有子项的导航
        if (item.items && Array.isArray(item.items)) {
            item.items.forEach((subItem: any) => {
                // 跳过 link 为 '---' 的项
                if (subItem.link && subItem.link !== '---') {
                    // 移除 /README.md 后缀
                    const cleanLink = subItem.link.replace(/\/README\.md$/, '/')
                    links.push({
                        link: cleanLink,
                        text: subItem.text
                    })
                }
            })
        }
    })
    
    return links
}

// 生成集合配置对象
const navbarLinks = extractLinksFromNavbar()
const docConfigs = navbarLinks.map(({link, text}) => ({
    type: 'doc' as const,
    dir: link,
    title: "学习集合" + "_" + text,
    sidebarCollapsed: true,
    sidebar: 'auto' as const,
}))

console.log(docConfigs) // 检查生成的学习集合配置对象是否正确

// 告知主题有哪些文章集合，其中
// post：表示碎片化文章的集合，文章之间不存在关联关系或弱关联关系
// doc: 表示结构化文章的集合，文章之间存在结构化的强关联关系，作为一个整体
export const collections = defineCollections([
    // 博客集合
    defineCollection({
        type: 'post',
        dir: '/blog/',
        title: '博客集合',
        postCover: 'right',
        pagination: 15,
        postList: true, // 启用列表
        tags: true, // 启用标签
        archives: true, // 启用归档
        categories: true, // 启用分类
    }),
    // 文档集合
    defineCollection({
        type: 'doc',
        dir: '/book/',
        title: '文档集合',
        sidebarCollapsed: true,
        sidebar: 'auto',
    }),
    // 智能集合
    defineCollection({
        type: 'doc',
        dir: '/agent/',
        title: '智能集合',
        sidebarCollapsed: true,
        sidebar: 'auto',
    }),
    // 学习集合
    ...docConfigs.map(config => defineCollection(config)),
])
