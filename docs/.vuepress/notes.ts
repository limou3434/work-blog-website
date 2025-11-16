/**
 * 笔记配置
 */
import {defineNoteConfig, defineNotesConfig} from 'vuepress-theme-plume'

import path from "path";
import fs from "fs";
import {navbar} from './navbar'

// 移除 "/notes" 前缀和 "/README.md" 后缀
function transformNavbarLink(link: string): string {
    return link
        .replace(/^\/notes/, '')  // 去除 "/notes" 前缀
        .replace(/\/README\.md$/, '')  // 去除 "/README.md" 后缀
}

// 从 navbar 提取所有 link
function extractLinksFromNavbar(): string[] {
    const links: string[] = []
    
    navbar.forEach((item: any) => {
        if (item.link && item.link.startsWith('/notes/')) {
            links.push(transformNavbarLink(item.link))
        }
        if (item.items && Array.isArray(item.items)) {
            item.items.forEach((subItem: any) => {
                if (subItem.link && subItem.link.startsWith('/notes/')) {
                    links.push(transformNavbarLink(subItem.link))
                }
            })
        }
    })
    
    return links
}

// 笔记配置
function generateNoteConfig(link) {
    const dir = link.replace(/^\//, '') // 去除开头斜杠
    const fullPath = path.resolve(process.cwd(), 'docs/notes', dir)
    const files = fs.existsSync(fullPath) ? fs.readdirSync(fullPath) : []
    const sidebar = [''].concat(
        files
            .filter(f => f.endsWith('.md') && f !== 'README.md')
            .map(f => f.slice(0, -3))
            .sort()
    )
    return { dir, link, sidebar }
}

// 从 navbar 自动生成 notes 配置
const navbarLinks = extractLinksFromNavbar()

export const notes = defineNotesConfig({
    dir: 'notes',
    link: '/',
    notes: navbarLinks.map(link => defineNoteConfig(generateNoteConfig(link))),
})
