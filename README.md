# 工作室博客平台

## 1.本站相关简介

本站是作者组织的一个团体博客站点，本站目前有两个站点：

- 站点一（内容最新，永不倒闭）：https://limou3434.github.io/work-blog-website/
- 站点二（功能最全，偶尔掉线）：https://wbw.edtechhub.com.cn/

第一个站点托管在 `Github` 上，第二个站点托管在作者自己的服务器上。

## 2.如何提交贡献

本项目希望达到一种只需要关注文档编写和少量配置的目的，因此几乎把所有的约定都在这里写清楚了：

1. 您需要满足条件：
   - 学习关于 `Markdown` 语法的基础知识
   - 学会对 `Git` 的基本操作，至少学会 `clone、branch、checkout、push、pull`，还需要具备一定的解决冲突的问题 
   - 拥有一个 `Github` 账号 
   - 配置 `Github` 双重认证和密钥（因为 `Github` 现在不再默认支持 `用户名-密码认证`，改为投向 `token` 和 `ssh` 的怀抱） 
   - 学习使用 `Github` 进行远程团队协作开发
2. 提交博客文档需要经过管理员审核成为内部成员才能提交，您需要联系管理员的邮箱 `898738804@qq.com` 或者在本站提交 `issues` 告知本作者
3. 每一个贡献者克隆本仓库后都需要在本地创建一个分支，分支名为 "作者名字拼音缩写_新的博文分类名"，以后使用这个分支进行提交代码，管理员会在合适的时机进行 `PR` 以展现您的成果

## 3.文档编写规则

如果您希望给本站提供新的知识文章，续哟按照下面的简单规则来进行编写：

1. 准备一个父目录作为后续注册的文章集合，这个目录最多只能有一层子目录，父目录必须包含一个 `README.md` 文件
2. 该父目录或子目录下都是 `三位序号_年份_月份_日期_作者名字缩写_大标题.md` 的文件
3. 编写好内容后，根据项目内部原理来修改配置代码
4. 提交 `PR` 等待本作者同意即可

## 4.项目内部原理

本项目采用了 [VuePress 文档](https://vuepress.vuejs.org/zh/) 搭配 [Plume 主题](https://theme-plume.vuejs.press/)，相关的原理可以查阅内部的文档，主要查阅以下几个文件：
- [站点配置](./work-blog-website-frontend/docs/.vuepress/config.ts)
- [主题配置](./work-blog-website-frontend/docs/.vuepress/plume.config.ts)
- [客端配置](./work-blog-website-frontend/docs/.vuepress/client.ts)
- [集合配置](./work-blog-website-frontend/docs/.vuepress/collections.ts)
- [导航配置](./work-blog-website-frontend/docs/.vuepress/navbar.ts)
- [区域配置](./work-blog-website-frontend/docs/.vuepress/components/HomeComponent.vue)
- [颜色配置](./work-blog-website-frontend/docs/.vuepress/styles/index.css)

> [!IMPORTANT]
> 补充：基本上您如果需要给本站提供新的知识文章，基本上只需要了解上述的 `集合配置` 和 `导航配置` 即可。

## 5.主要工作人员

![Contributors](https://contrib.rocks/image?repo=limou3434/work-blog-website)
