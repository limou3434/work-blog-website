/**
 * 集合配置
 */
import {defineCollection, defineCollections} from 'vuepress-theme-plume'
import {navbar} from './navbar'

// 从 navbar 提取所有有效的链接
function extractLinksFromNavbar() {
    const links: Array<{link: string, text: string}> = []
    
    navbar.forEach((item: any) => {
        // 跳过"网站首页、每日博客、友情链接"
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
    title: text,
    sidebarCollapsed: true,
    sidebar: 'auto' as const,
}))

console.log(docConfigs)

export const collections = defineCollections([
    // 博客集合
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
    // 自动生成的文档集合
    ...docConfigs.map(config => defineCollection(config)),
])
