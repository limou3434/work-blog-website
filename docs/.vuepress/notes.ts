import {defineNoteConfig, defineNotesConfig} from 'vuepress-theme-plume'

import path from "path";
import fs from "fs";

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

export const notes = defineNotesConfig({
    dir: 'notes',
    link: '/',
    notes: [
        defineNoteConfig(generateNoteConfig('/1.编码修养/1.编程语言/1.系统语言')),
        defineNoteConfig(generateNoteConfig('/1.编码修养/1.编程语言/2.业务语言')),
        defineNoteConfig(generateNoteConfig('/1.编码修养/1.编程语言/3.智能语言')),
        defineNoteConfig(generateNoteConfig('/1.编码修养/1.编程语言/4.脚本语言')),
        defineNoteConfig(generateNoteConfig('/1.编码修养/2.数构算法/1.数据结构')),
        defineNoteConfig(generateNoteConfig('/1.编码修养/2.数构算法/2.基础排序')),
        defineNoteConfig(generateNoteConfig('/1.编码修养/2.数构算法/3.常规算法')),
        defineNoteConfig(generateNoteConfig('/1.编码修养/3.系统网络/1.基本操作')),
        defineNoteConfig(generateNoteConfig('/1.编码修养/3.系统网络/2.系统美化')),
        defineNoteConfig(generateNoteConfig('/1.编码修养/3.系统网络/3.网络协议')),
        defineNoteConfig(generateNoteConfig('/1.编码修养/3.系统网络/4.内核原理')),
        defineNoteConfig(generateNoteConfig('/1.编码修养/4.业务服务/1.存储服务')),
        defineNoteConfig(generateNoteConfig('/1.编码修养/4.业务服务/2.缓存服务')),
        defineNoteConfig(generateNoteConfig('/1.编码修养/4.业务服务/3.鉴权服务')),
        defineNoteConfig(generateNoteConfig('/2.开发方向/1.页面开发')),
        defineNoteConfig(generateNoteConfig('/2.开发方向/2.桌面开发')),
        defineNoteConfig(generateNoteConfig('/2.开发方向/3.移动开发')),
        defineNoteConfig(generateNoteConfig('/2.开发方向/4.小程开发')),
        defineNoteConfig(generateNoteConfig('/2.开发方向/5.插件开发')),
        defineNoteConfig(generateNoteConfig('/2.开发方向/6.文档开发')),
        defineNoteConfig(generateNoteConfig('/3.艺术设计/1.色彩理论')),
        defineNoteConfig(generateNoteConfig('/3.艺术设计/2.摄影技巧')),
        defineNoteConfig(generateNoteConfig('/3.艺术设计/3.立体建模')),
    ],
})
