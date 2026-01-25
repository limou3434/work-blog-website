<template><div><h2 id="_1-vuepress-的简单概要" tabindex="-1"><a class="header-anchor" href="#_1-vuepress-的简单概要"><span>1.VuePress 的简单概要</span></a></h2>
<p>一个 <code v-pre>VuePress</code> 站点本质上是一个由 <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">Vue</a> 和 <a href="https://router.vuejs.org/" target="_blank" rel="noopener noreferrer">Vue Router</a> 驱动的单页面应用，页面由 <code v-pre>Markdown</code> 文档组成。</p>
<p>路由会根据 <code v-pre>Markdown</code> 文件的相对路径来自动生成。每个 <code v-pre>Markdown</code> 文件都通过 <a href="https://github.com/markdown-it/markdown-it" target="_blank" rel="noopener noreferrer">markdown-it</a> 编译为 <code v-pre>HTML</code>，然后将其作为 <code v-pre>Vue</code> 组件的模板。因此，你可以在 <code v-pre>Markdown</code> 文件中直接使用 <code v-pre>Vue</code> 语法，便于你嵌入一些动态内容。</p>
<p>在开发过程中，我们启动一个常规的开发服务器，并将 <code v-pre>VuePress</code> 站点作为一个常规的 <code v-pre>SPA</code>。如果你以前使用过 <code v-pre>Vue</code> 的话，你在使用时会感受到非常熟悉的开发体验。</p>
<p>在构建过程中，我们会为 <code v-pre>VuePress</code> 站点创建一个服务端渲染的版本，然后通过虚拟访问每一条路径来渲染对应的 <code v-pre>HTML</code>，下面使用命令行工具开始建立项目。</p>
<div class="hint-container important">
<p class="hint-container-title">重要</p>
<p>补充：这里我从我搭建我们工作室网站的角度来分析我是如何搭建这个项目的。</p>
</div>
<details class="hint-container details"><summary>详情</summary>
<div class="language-shell line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="shell" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-shell"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 使用脚手架来搭建项目</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">$</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> init</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> vuepress</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> work-blogs</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> Select a language to display / 选择显示语言 简体中文</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 选择包管理器 npm</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 你想要使用哪个打包器？ vite</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 你想要创建什么类型的项目？ docs</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">生成</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> package.json...</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 设置应用名称 work-blogs</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 设置应用版本号 0.0.1</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 设置应用描述 存放工作室文档和博客</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 设置协议 MIT</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 是否需要一个自动部署文档到 GitHub Pages 的工作流？ Yes</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">生成模板...</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 选择你想使用的源 当前源</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">安装依赖...</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">这可能需要数分钟，请耐心等待.</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">我们无法正确输出子进程的进度条，所以进程可能会看似未响应</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">added</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 239</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> packages</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> in</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 14s</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">75</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> packages</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> are</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> looking</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> for</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> funding</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">  run</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> `</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> fund</span><span style="--shiki-light:#999999;--shiki-dark:#666666">`</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> for</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> details</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">模板已成功生成!</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">?</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 是否想要现在启动</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Demo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 查看?</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Yes</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">启动开发服务器...</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">启动成功后，请在浏览器输入给出的开发服务器地址(默认为</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">localhost:8080</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> work-blogs@0.0.1 docs:dev</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> vuepress dev docs</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">  vite</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> v5.4.11</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> dev</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> server</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> running</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> at:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">  ➜</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">  Local:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">   http://localhost:8080/</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">  ➜</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">  Network:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> http://192.168.101.254:8080/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> # 如果打开网站报错就使用 npm install -D sass-embedded 安装依赖...</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div></details>
<ul>
<li><a href="https://vuepress.vuejs.org/zh/guide/configuration.html#%E5%AE%A2%E6%88%B7%E7%AB%AF%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6" target="_blank" rel="noopener noreferrer">入门文档</a></li>
<li><a href="https://vuepress.vuejs.org/zh/reference/node-api.html" target="_blank" rel="noopener noreferrer">核心文档</a></li>
</ul>
<h2 id="_2-vuepress-的工作目录" tabindex="-1"><a class="header-anchor" href="#_2-vuepress-的工作目录"><span>2.VuePress 的工作目录</span></a></h2>
<details class="hint-container details"><summary>详情</summary>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-shell"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> # 查看工作目录</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> $</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> tree</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -L</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 1</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> ./work-blogs</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">├──</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> .gitignore</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> # git 忽略文件</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">├──</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> docs/</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> # 存储 Markdown 文档的地方, 同时也作为 VuePress 的源文件目录</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">│</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">	├──</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> get-started.md</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">│</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">	├──</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> README.md</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> # 文档网站主页页面</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">│</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">	└──</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> .vuepress/</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> # VuePress 应用的源文件目录</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">├──</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> node_modules/</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> # 包管理依赖代码</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">├──</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> package.json</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> # 包管理依赖文件</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">└──</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> package-lock.json</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> # 包管理依赖文件</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<p>上述的工作目录简单查看一下就可以，大概的作用我也标记在旁边的注释里了。其中，由于 <code v-pre>.vuepress</code> 中，在后续编译项目会有一些临时文件、缓存文件、构建文件的生成，因此建议在项目的根目录内加上以下的 <code v-pre>.gitignore</code> 文件，避免推送到远端仓库中。</p>
<details class="hint-container details"><summary>详情</summary>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-shell"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># .gitignore</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># VuePress 默认临时文件目录</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">.vuepress/.temp</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># VuePress 默认缓存目录</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">.vuepress/.cache</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># VuePress 默认构建生成的静态文件目录</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">.vuepress/dist</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h2 id="_3-vuepress-的约定路由" tabindex="-1"><a class="header-anchor" href="#_3-vuepress-的约定路由"><span>3.VuePress 的约定路由</span></a></h2>
<p><code v-pre>VuePress</code> 采用约定式路由，并且 <code v-pre>.md</code> 文档会被自动渲染为 <code v-pre>.html</code> 文件。</p>
<details class="hint-container details"><summary>详情</summary>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-shell"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 目录结构</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">└─</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> docs</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">   ├─</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> guide</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">   │</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">  ├─</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> getting-started.md</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">   │</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">  └─</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> README.md</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">   ├─</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> contributing.md</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">   └─</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> README.md</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<p>将 <code v-pre>docs</code> 目录作为你的 <code v-pre>sourceDir</code>，在运行 <code v-pre>vuepress dev docs</code> 命令时，<code v-pre>Markdown</code> 文件对应的路由路径为：</p>
<table>
<thead>
<tr>
<th>相对路径</th>
<th>路由路径</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>/README.md</code></td>
<td><code v-pre>/</code></td>
</tr>
<tr>
<td><code v-pre>/index.md</code></td>
<td><code v-pre>/</code></td>
</tr>
<tr>
<td><code v-pre>/contributing.md</code></td>
<td><code v-pre>/contributing.html</code></td>
</tr>
<tr>
<td><code v-pre>/guide/README.md</code></td>
<td><code v-pre>/guide/</code></td>
</tr>
<tr>
<td><code v-pre>/guide/getting-started.md</code></td>
<td><code v-pre>/guide/getting-started.html</code></td>
</tr>
</tbody>
</table>
<h2 id="_4-vuepress-的配置文件" tabindex="-1"><a class="header-anchor" href="#_4-vuepress-的配置文件"><span>4.VuePress 的配置文件</span></a></h2>
<h3 id="_4-1-vuepress-的站点配置" tabindex="-1"><a class="header-anchor" href="#_4-1-vuepress-的站点配置"><span>4.1.VuePress 的站点配置</span></a></h3>
<p>我把站点配置文件中常见的配置列了出来，您可以照着编写一下。</p>
<details class="hint-container details"><summary>详情</summary>
<div class="language-js line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="js" style="--vp-collapsed-lines:15;--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-js"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">/**</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> * docs/.vuepress/config.js</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> * 网站主要配置文件, 主要引用 docs/.vuepress/config/ 下的文件</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> viteBundler</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">@vuepress/bundler-vite</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> defaultTheme</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">@vuepress/theme-default</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> defineUserConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">vuepress</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 默认可以从 public 目录下获取文件</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// VuePress 默认使用约定路由</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> default</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> defineUserConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  // 设置网站基本配置</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  lang</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">zh-CN</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 设置语言</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  title</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">工作室文档平台项目</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 设置网站标题</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  description</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">以人为本，技术为先，服务为重</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 设置网站描述</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  // base: "/gzs",</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 千万别加, 因为其他地方也需要修改, 也有可能是中文问题(默认)</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  // dest: ,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 设置网站编译配置(默认)</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  // temp: ,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 设置临时文件目录(默认)</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  // cache: ,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 设置缓存文件目录(默认)</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  // public: ,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 设置静态文件目录(默认)</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  // head: [</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 在 head 标签中添加子标签(默认)</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  //   [</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  //     "script",</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  //     {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  //       src: "/script/test.js",</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  //       defer: "true",</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  //     },</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  //   ],</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  // ],</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  // 设置网站部署配置</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  bundler</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> viteBundler</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    viteOptions</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      server</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">        host</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">0.0.0.0</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 设置为 0.0.0.0 以接受来自所有 IP 的请求</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">        port</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 8085</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 设置端口为 8085</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">        open</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> false</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 启动时取消自动打开浏览器</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">      },</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    },</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  }),</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  // 设置网站主题配置</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  theme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> defaultTheme</span><span style="--shiki-light:#999999;--shiki-dark:#666666">({</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    // 网章标识</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    logo</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">https://vuejs.press/images/hero.png</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    // 标题深度</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    sidebarDepth</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 6</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    // 更新时间</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    lastUpdated</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> true</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 每个文件 git 最后提交的时间</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  }),</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">});</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div></details>
<div class="hint-container important">
<p class="hint-container-title">重要</p>
<p>补充：<a href="https://vuepress.vuejs.org/zh/reference/config.html" target="_blank" rel="noopener noreferrer">相关的配置选项也可以看这里</a>。</p>
</div>
<h3 id="_4-2-vuepress-的页面配置" tabindex="-1"><a class="header-anchor" href="#_4-2-vuepress-的页面配置"><span>4.2.VuePress 的页面配置</span></a></h3>
<p><code v-pre>Markdown</code> 文件可以包含一个 <code v-pre>YAML Frontmatter</code> 配置，<code v-pre>Frontmatter</code> 必须在 <code v-pre>Markdown</code> 文件的顶部，并且被包裹在一对三短划线中间。</p>
<details class="hint-container details"><summary>详情</summary>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-shell"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># test.md</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">---</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">lang:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> zh-CN</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">title:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 页面的标题</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">description:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 页面的描述</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">---</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<p><code v-pre>Frontmatter</code> 中的字段和 <a href="https://vuepress.vuejs.org/zh/guide/configuration.html#config-file" target="_blank" rel="noopener noreferrer">配置文件</a> 中的 <a href="https://vuepress.vuejs.org/zh/guide/configuration.html#%E7%AB%99%E7%82%B9%E9%85%8D%E7%BD%AE" target="_blank" rel="noopener noreferrer">站点配置</a> 十分类似。你可以通过 <code v-pre>Frontmatter</code> 来覆盖当前页面的 <code v-pre>lang</code>, <code v-pre>title</code>, <code v-pre>description</code> 等属性。因此，你可以把 <code v-pre>Frontmatter</code> 当作页面级作用域的配置（因此可以使用页面配置覆盖某些站点配置）。</p>
<div class="hint-container important">
<p class="hint-container-title">重要</p>
<p>补充：<a href="https://vuepress.vuejs.org/zh/reference/frontmatter.html" target="_blank" rel="noopener noreferrer">相关配置选项也可以这里</a>。</p>
</div>
<h3 id="_4-3-vuepress-的客户配置" tabindex="-1"><a class="header-anchor" href="#_4-3-vuepress-的客户配置"><span>4.3.VuePress 的客户配置</span></a></h3>
<p>待补充...</p>
<h3 id="_4-4-vuepress-的导航配置" tabindex="-1"><a class="header-anchor" href="#_4-4-vuepress-的导航配置"><span>4.4.VuePress 的导航配置</span></a></h3>
<h3 id="_4-5-vuepress-的翻页配置" tabindex="-1"><a class="header-anchor" href="#_4-5-vuepress-的翻页配置"><span>4.5.VuePress 的翻页配置</span></a></h3>
<h3 id="_4-6-vuepress-的插件配置" tabindex="-1"><a class="header-anchor" href="#_4-6-vuepress-的插件配置"><span>4.6.VuePress 的插件配置</span></a></h3>
<h2 id="_5-vuepress-的资源目录" tabindex="-1"><a class="header-anchor" href="#_5-vuepress-的资源目录"><span>5.VuePress 的资源目录</span></a></h2>
<p>待补充...</p>
<h2 id="_6-vuepress-的页面组件" tabindex="-1"><a class="header-anchor" href="#_6-vuepress-的页面组件"><span>6.VuePress 的页面组件</span></a></h2>
<p>页面的主要内容是使用 <code v-pre>Markdown</code> 书写的。<code v-pre>VuePress</code> 首先会将 <code v-pre>Markdown</code> 转换为 <code v-pre>HTML</code> ，然后将 <code v-pre>HTML</code> 作为 <code v-pre>Vue</code> 单文件组件的 <code v-pre>&lt;template&gt;</code> 。</p>
<h3 id="_6-1-使用内置组件" tabindex="-1"><a class="header-anchor" href="#_6-1-使用内置组件"><span>6.1.使用内置组件</span></a></h3>
<ul>
<li>表格</li>
<li>删除线</li>
<li>链接</li>
<li>避免渲染</li>
</ul>
<h3 id="_6-2-使用拓展组件" tabindex="-1"><a class="header-anchor" href="#_6-2-使用拓展组件"><span>6.2.使用拓展组件</span></a></h3>
<ul>
<li>标题锚点语法  <a href="https://github.com/valeriangalliat/markdown-it-anchor" target="_blank" rel="noopener noreferrer">markdown-it-anchor</a></li>
<li><code v-pre>Emoji</code> 语法 <a href="https://github.com/markdown-it/markdown-it-emoji" target="_blank" rel="noopener noreferrer">markdown-it-emoji</a></li>
<li>目录语法 <a href="https://vuepress.vuejs.org/zh/reference/config#markdown-toc" target="_blank" rel="noopener noreferrer">markdown.toc</a></li>
<li>代码块语法 <a href="https://ecosystem.vuejs.press/zh/plugins/markdown/prismjs.html" target="_blank" rel="noopener noreferrer">@vuepress/plugin-prismjs</a> 和 <a href="https://ecosystem.vuejs.press/zh/plugins/markdown/shiki.html" target="_blank" rel="noopener noreferrer">@vuepress/plugin-shiki</a></li>
</ul>
<h3 id="_6-3-使用外部组件" tabindex="-1"><a class="header-anchor" href="#_6-3-使用外部组件"><span>6.3.使用外部组件</span></a></h3>
<p>由于 <code v-pre>Markdown</code> 中允许使用 <code v-pre>HTML</code>，所以支持使用 <code v-pre>Vue</code> 组件，因此一个 <code v-pre>.md</code> 文件中允许包含一组 <code v-pre>&lt;script&gt;</code> 和 <code v-pre>&lt;style&gt;</code>（并且整个 <code v-pre>.md</code> 文件只能包含一组）。</p>
<div class="hint-container caution">
<p class="hint-container-title">警告</p>
<p>警告：注意应该避免使用非标准的标签。</p>
</div>
<h3 id="_6-4-使用自定组件" tabindex="-1"><a class="header-anchor" href="#_6-4-使用自定组件"><span>6.4.使用自定组件</span></a></h3>
<p>如果我们可以自己在 <code v-pre>.md</code> 中使用自定义的组件也是可以做到的。</p>
<p>甚至，您可以引入 <code v-pre>Elemet UI Pro</code> 组件导入到您的 <code v-pre>.md</code> 进行高度自定义！</p>
<p>如果您还需要导入全局使用的布局模板，也是可以的，不过还需要搭配特殊的容器标签，以及 <code v-pre>VuePress</code> 的页面配置。</p>
<h2 id="_7-vuepress-的项目部署" tabindex="-1"><a class="header-anchor" href="#_7-vuepress-的项目部署"><span>7.VuePress 的项目部署</span></a></h2>
<p>待补充...</p>
<h2 id="_8-vuepress-的接口文档" tabindex="-1"><a class="header-anchor" href="#_8-vuepress-的接口文档"><span>8.VuePress 的接口文档</span></a></h2>
<p>待补充...</p>
</div></template>


