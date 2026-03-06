# work-blog-website

## 1.项目介绍

本站是作者组织的一个团体博客站点，也算是半个作者的个人博客，部分文章内容来自他人。

## 2.快速使用

本站目前有两个站点，直接访问就可以享用：

- 站点一（内容最新，永不倒闭）：https://limou3434.github.io/work-blog-website/
- 站点二（功能最全，偶尔掉线）：https://wbw.edtechhub.com.cn/

第一个站点托管在 `Github` 上，第二个站点托管在作者自己的服务器上。

## 3.原理分析

而本项目作为开源项目，实际上也是支持您来进行做自定义的，本项目是基于 [vuepress](https://vuepress.vuejs.org/) 主题 [plume](https://theme-plume.vuejs.press/) 二次开发而成文档站点，相关的原理可以查阅内部的文档。如果您想要快速了解，则直接看下面的几个文件即可：

- [站点配置](./work-blog-website-frontend/docs/.vuepress/config.ts)
- [主题配置](./work-blog-website-frontend/docs/.vuepress/plume.config.ts)
- [客端配置](./work-blog-website-frontend/docs/.vuepress/client.ts)
- [集合配置](./work-blog-website-frontend/docs/.vuepress/collections.ts)
- [导航配置](./work-blog-website-frontend/docs/.vuepress/navbar.ts)
- [主题颜色](./work-blog-website-frontend/docs/.vuepress/styles/index.css)
- [首页页面](./work-blog-website-frontend/docs/.vuepress/components/HomeComponent.vue)
- [基本布局](./work-blog-website-frontend/docs/.vuepress/layout/)

> [!IMPORTANT]
> 补充：基本上您如果需要给本站提供新的知识文章，基本上只需要了解上述的 `集合配置` 和 `导航配置` 即可。


## 4.变得更好

如果您希望本项目更好，可以提供您的想法，这里几乎把所有的约定都在这里写清楚了：

1. 您需要满足条件：
   1. 关于 `Markdown` 语法的基础知识 
   2. 对 `Git` 的基本操作，至少学会 `clone、branch、checkout、push、pull`，还需要具备一定的解决冲突的问题 
   3. 拥有一个 `Github` 账号 
   4. 配置 `Github` 双重认证和密钥（因为 `Github` 现在不再默认支持 `用户名-密码认证`，改为投向 `token` 和 `ssh` 的怀抱） 
   5. 具备使用 `Github` 进行远程团队协作开发的认知
2. 若需要修改或添加文档内容，您需要联系管理员的邮箱 `898738804@qq.com`、直接在文档上评论、直接在 `Github` 上提交 `PR` 告知本作者
3. 若是提交 `PR`，则是需要按照下面的规则来进行提交
   1. 每一个贡献者克隆本仓库后都需要在本地创建一个分支，分支名为 "作者名称拼音缩写_提交内容类别"，以后使用这个分支进行提交代码，管理员会在合适的时机处理 `PR` 以展现您的成果
   2. 准备一个目录作为后续注册的文章集合，这个目录最多只能有一层子目录，且目录内必须包含一个 `README.md` 文件
   3. 该目录或子目录下都是 `三位序号_年份_月份_日期_作者名称缩写_文档内的一级标题.md` 的文件
   4. 制作目录的过程可以参考 [3.原理分析](#3原理分析) 和作者的项目源代码
   5. 编写好内容后，根据项目内部原理来修改配置代码
   6. 提交 `PR` 等待本作者同意即可
