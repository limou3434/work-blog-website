/**
 * 基础配置
 */
import {viteBundler} from '@vuepress/bundler-vite'
import {defineUserConfig} from 'vuepress'
import {plumeTheme} from 'vuepress-theme-plume'
import {collections} from './collections'

export default defineUserConfig({
    // 网站元数
    base: '/work-blog-website/',
    lang: 'zh-CN',
    title: '缡墨',
    description: '工作室成员长期实践形成的公用博客平台——缡墨',
    head: [
        ['link', {rel: 'icon', type: 'image/png', href: 'https://theme-plume.vuejs.press/favicon-32x32.png'}], // 配置站点图标
    ],

    // 打包工具
    bundler: viteBundler(),

    // 预先加载
    shouldPrefetch: false, // 站点较大, 页面数量较多时, 不建议启用

    // 主题配置
    theme: plumeTheme({
        // 集合配置
        collections,

        // 加密功能
        encrypt: {
            rules: {
                '/6.素材处理/': 'Qwe54188_',
                '/7.视频剪辑/': 'Qwe54188_',
                '/8.立体建设/': 'Qwe54188_',
            }
        },

        // 页面水印
        watermark: {
            watermarkOptions: {
                content: 'limou3434',
                fontColor: '#fff', // 文字颜色
            }
        },

        // 编译缓存
        cache: 'filesystem', // 加快编译速度
        // - false: 禁用 缓存
        // - 'memory': 使用内存缓存，此方式可获得更快地启动速度，但随着项目文件数量增加，内存占用会增加， 适合文章数量较少的项目使用
        // - 'filesystem': 使用文件系统缓存，此方式可获得相对快且稳定地启动速度，更适合内容多的项目使用

        // 文档头部
        autoFrontmatter: {
            permalink: true, // 是否给 .md 文档 frontmatter 生成永久链接
            createTime: true, // 是否 .md 文档 frontmatter 生成创建时间
            title: false, // 是否 .md 文档 frontmatter 生成标题
        },

        // 本地搜索
        search: {provider: 'local'},

        // 评论功能
        comment: {
            provider: 'Giscus', // "Artalk" | "Giscus" | "Twikoo" | "Waline"
            comment: true,
            repo: 'limou3434/work-blog-website-comment',
            repoId: 'R_kgDOOZVKTA',
            category: 'Q&A',
            categoryId: 'DIC_kwDOOZVKTM4CpFNb',
            mapping: 'pathname',
            reactionsEnabled: true,
            inputPosition: 'top',
        },

        // 页面历史
        editLink: true,
        contributors: true,
        changelog: {
            maxCount: 10,
            repoUrl: 'https://github.com/limou3434/work-blog-website',
        },
        plugins: {
            git: true, // 如果您在此处直接声明为 true, 则表示开发环境和生产环境都启用该功能
        },

        // 部署域名
        hostname: 'https://limou3434.github.io/work-blog-website/', // 有助于 SEO, 生成 sitemap

        // 文档仓库
        docsRepo: 'https://github.com/limou3434/work-blog-website',
        docsDir: 'docs',
        docsBranch: 'main',

        // 代码拷贝
        copyCode: {
            showInMobile: true, // 是否启用移动端代码拷贝功能
        },

        // 拓展语法
        markdown: {
            field: true, // 启用字段展示
            math: {             // 启用数学公式
                type: 'katex',
            },
            mermaid: true,      // 启用 mermaid
            chartjs: true,      // 启用 chart.js
            echarts: true,      // 启用 ECharts
            markmap: true,      // 启用 Markmap
            codeTree: true,     // 启用代码树语法
            bilibili: true,     // 启用嵌入 bilibili 视频 语法 @[bilibili](bid)
            youtube: true,      // 启用嵌入 youtube 视频 语法 @[youtube](video_id)
            pdf: true,          // 启用 PDF 嵌入 @[pdf](/xxx.pdf)
            audioReader: true,  // 启用嵌入音频朗读功能 语法 @[audioReader](url)
            plot: true,         // 启用隐秘文本语法 !!xxxx!!
            annotation: true,   // 启用 annotation 语法  [+label]: content
            timeline: true,     // 启用 timeline 语法  ::: timeline
            collapse: true,     // 折叠面板语法 ::: collapse
            caniuse: true,      // 启用 caniuse 语法  @[caniuse](feature_name)
            chat: true,         // 启用 chat 语法 ::: chat
            image: {
                figure: true,     // 启用 figure
                lazyload: true,   // 启用图片懒加载
                mark: true,       // 启用图片标记
                size: true,       // 启用图片大小
            },
            fileTree: {
                icon: 'colored',
            },
            table: {
                align: 'left', // 表格默认对齐方式 'left' | 'center' | 'right'
                maxContent: false, // 表格宽度是否为最大内容宽度, 行内元素不再自动换行, 超出容器宽度时表格显示滚动条
                fullWidth: false, // 表格宽度默认占据整行
                copy: true, // true | 'all' | 'html' | 'md', 复制为 html/markdown, true 相当于 `all`, 相当于同时启用 html 和 markdown
            },
        },
    }),
})
