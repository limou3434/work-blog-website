---
createTime: 2025/04/09 13:05:15
permalink: /5.开发方向/gg8tsyan/

---

# Vuepress

## 1.简单概要

一个 [VuePress](https://vuepress.vuejs.org/zh/) 站点本质上是一个由 [Vue](https://vuejs.org/) 和 [Vue Router](https://router.vuejs.org/) 驱动的单页面应用，页面由 `Markdown` 文档组成。

路由会根据 `Markdown` 文件的相对路径来自动生成。每个 `Markdown` 文件都通过 [markdown-it](https://github.com/markdown-it/markdown-it) 编译为 `HTML`，然后将其作为 `Vue` 组件的模板。因此，你可以在 `Markdown` 文件中直接使用 `Vue` 语法，便于你嵌入一些动态内容。

在开发过程中，我们启动一个常规的开发服务器，并将 `VuePress` 站点作为一个常规的 `SPA`。如果你以前使用过 `Vue` 的话，你在使用时会感受到非常熟悉的开发体验。

在构建过程中，我们会为 `VuePress` 站点创建一个服务端渲染的版本，然后通过虚拟访问每一条路径来渲染对应的 `HTML`，下面使用命令行工具开始建立项目。

```shell :collapsed-lines
# 使用脚手架来搭建项目
$ npm init vuepress work-blogs
? Select a language to display / 选择显示语言 简体中文
? 选择包管理器 npm
? 你想要使用哪个打包器？ vite
? 你想要创建什么类型的项目？ docs
生成 package.json...
? 设置应用名称 work-blogs
? 设置应用版本号 0.0.1
? 设置应用描述 存放工作室文档和博客
? 设置协议 MIT
? 是否需要一个自动部署文档到 GitHub Pages 的工作流？ Yes
生成模板...
? 选择你想使用的源 当前源
安装依赖...
这可能需要数分钟，请耐心等待.
我们无法正确输出子进程的进度条，所以进程可能会看似未响应

added 239 packages in 14s

75 packages are looking for funding
  run `npm fund` for details
模板已成功生成!
? 是否想要现在启动 Demo 查看? Yes
启动开发服务器...
启动成功后，请在浏览器输入给出的开发服务器地址(默认为 'localhost:8080')

> work-blogs@0.0.1 docs:dev
> vuepress dev docs


  vite v5.4.11 dev server running at:

  ➜  Local:   http://localhost:8080/
  ➜  Network: http://192.168.101.254:8080/

 # 如果打开网站报错就使用 npm install -D sass-embedded 安装依赖...
 
```

## 2.工作目录

```shell :collapsed-lines
 # 查看工作目录
 $ tree -L 1
 ./work-blogs
├── .gitignore # git 忽略文件
├── node_modules/ # 包管理依赖代码
├── package.json # 包管理依赖文件
├── package-lock.json # 包管理依赖文件
└── docs/ # 存储 Markdown 文档的地方, 同时也作为 VuePress 的“源文件目录”
 	├── README.md # 文档网站主页页面
 	└── .vuepress/ # VuePress 目录，放置所有和 VuePress 相关的文件的地方
         ├─ config.js # 站点配置文件
         └─ client.js # 客端配置文件

```

> [!IMPORTANT]
>
> 补充：

上述的工作目录简单查看一下就可以，大概的作用我也标记在旁边的注释里了。其中，由于 `.vuepress` 中，在后续编译项目会有一些临时文件、缓存文件、构建文件的生成，因此建议在项目的根目录内加上以下的 `.gitignore` 文件，避免推送到远端仓库中。

```shell :collapsed-lines
# .gitignore
# VuePress 默认临时文件目录
.vuepress/.temp
# VuePress 默认缓存目录
.vuepress/.cache
# VuePress 默认构建生成的静态文件目录
.vuepress/dist

```

## 3.约定路由

`VuePress` 采用约定式路由，并且 `.md` 文档会被自动渲染为 `.html` 文件。

```shell :collapsed-lines
# 目录结构
└─ docs
   ├─ guide
   │  ├─ getting-started.md
   │  └─ README.md
   ├─ contributing.md
   └─ README.md
   
```

将 `docs` 目录作为你的 `sourceDir`，在运行 `vuepress dev docs` 命令时，`Markdown` 文件对应的路由路径为：

| 相对路径                    | 路由路径                      |
| --------------------------- | ----------------------------- |
| `/README.md`                | `/`                           |
| `/index.md`                 | `/`                           |
| `/contributing.md`          | `/contributing.html`          |
| `/guide/README.md`          | `/guide/`                     |
| `/guide/getting-started.md` | `/guide/getting-started.html` |

> [!IMPORTANT]
>
> 补充：不要同时使用 `README.md` 和 `index.md` 在同一个目录下，要不然就要看文档去接近这个冲突，没必要。

> [!IMPORTANT]
>
> 补充：页面的主要内容是使用 `Markdown` 书写的。`VuePress` 首先会将 `Markdown` 转换为 `HTML` ，然后将 `HTML` 作为 `Vue` 单文件组件的 `<template>` 。

