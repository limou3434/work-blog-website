<template><div><h2 id="_1-设计思路" tabindex="-1"><a class="header-anchor" href="#_1-设计思路"><span>1.设计思路</span></a></h2>
<p>我决定采用 <code v-pre>Antd UI</code> 组件封装一个更加便捷使用，更加符合我的风格的前端组件。首先我们需要整理一些事情，比如设计思路、设计模式、组件生态、全局设置等。</p>
<h3 id="_1-1-色彩" tabindex="-1"><a class="header-anchor" href="#_1-1-色彩"><span>1.1.色彩</span></a></h3>
<p>色彩体系解读成两个层面：<strong>系统级色彩体系</strong> 和 <strong>产品级色彩体系</strong>。</p>
<ul>
<li>系统级色彩体系主要定义了蚂蚁中台设计中的基础色板、中性色板、数据可视化色板。
<ul>
<li><strong>基础色板</strong>：<code v-pre>Ant Design</code> 系统级色彩体系同样源于 「自然」 的设计价值观。设计师通过对自然场景的抽象捕捉，结合蚂蚁的技术基因，形成了特有的 <code v-pre>12</code> 色。进一步又通过大量的观察，捕捉不同色彩在自然光下的变化规律，借助美术中素描的思路，对 <code v-pre>12</code> 个颜色进行了衍生。在中性色板的定义上，则是平衡了可读性、美感以及可用性得出的。</li>
<li><strong>中性色板</strong>：包含了黑、白、灰。在蚂蚁中后台的网页设计中被大量使用到，合理地选择中性色能够令页面信息具备良好的主次关系，助力阅读体验<code v-pre>。Ant Design</code> 的中性色板一共包含了从白到黑的 <code v-pre>13</code> 个颜色。</li>
<li><strong>可视色板</strong>：如果上面的色板不能满足你的需求，你可以选择一个主色，<code v-pre>Ant Design</code> 的色彩生成算法会为你生成完整的色板，<a href="https://ant.design/docs/spec/colors-cn#%E8%89%B2%E6%9D%BF%E7%94%9F%E6%88%90%E5%B7%A5%E5%85%B7" target="_blank" rel="noopener noreferrer">生成地址</a>。</li>
</ul>
</li>
<li>产品级色彩体系则是在具体设计过程中，基于系统色彩进一步定义符合产品调性以及功能诉求的颜色。</li>
</ul>
<p>上述的色板融合到了组件中，可以通过某些配置来全局修改，不过对于“我们”这种不会设计的人来说，仅仅只是想要快速得到一款优雅好看的产品，因此我一般建议使用官方的色彩设计，并且结合 <a href="https://www.npmjs.com/package/@ant-design/colors" target="_blank" rel="noopener noreferrer">色彩依赖</a> 在代码中进行写入。当然，能不用就不用。</p>
<h3 id="_1-2-布局" tabindex="-1"><a class="header-anchor" href="#_1-2-布局"><span>1.2.布局</span></a></h3>
<p>待补充...</p>
<h3 id="_1-3-字体" tabindex="-1"><a class="header-anchor" href="#_1-3-字体"><span>1.3.字体</span></a></h3>
<p>待补充...</p>
<h3 id="_1-4-图标" tabindex="-1"><a class="header-anchor" href="#_1-4-图标"><span>1.4.图标</span></a></h3>
<p>待补充...</p>
<h3 id="_1-5-暗黑" tabindex="-1"><a class="header-anchor" href="#_1-5-暗黑"><span>1.5.暗黑</span></a></h3>
<p>待补充...</p>
<h3 id="_1-6-阴影" tabindex="-1"><a class="header-anchor" href="#_1-6-阴影"><span>1.6.阴影</span></a></h3>
<p>待补充...</p>
<h2 id="_2-设计模式" tabindex="-1"><a class="header-anchor" href="#_2-设计模式"><span>2.设计模式</span></a></h2>
<figure><img src="@source/5.开发方向/2.网页开发/ReactJS/assets/NyWYOFQxJYElAwtUfSdv.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>完整的设计模式将包括模板、组件、通用概念</p>
<ul>
<li>功能：由多个模板组成，以启发用户如何使用和构建一个通用功能</li>
<li>模板：一个页面级示例，启发用户如何在系统中构建典型页面，例如详细信息页面</li>
<li>组件
<ul>
<li>基本组件：系统的最基本元素，例如按钮和分页器</li>
<li>业务组件：块级示例，通常由多个组件组成</li>
</ul>
</li>
</ul>
<h2 id="_3-组件生态" tabindex="-1"><a class="header-anchor" href="#_3-组件生态"><span>3.组件生态</span></a></h2>
<p>实际上 <code v-pre>Antd</code> 有自己的一套完整组件生态（再搭配 <code v-pre>React</code>），这里结合 <code v-pre>React + Antd</code> 整理一份资源清单：</p>
<ul>
<li>
<p><a href="https://vite.dev/" target="_blank" rel="noopener noreferrer">编译框架</a></p>
</li>
<li>
<p><a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">渲染框架</a></p>
</li>
<li>
<p>管理框架</p>
<ul>
<li><a href="https://pro.ant.design/zh-CN/docs/getting-started/" target="_blank" rel="noopener noreferrer">Antd 开箱方案</a></li>
<li><a href="https://ant.design/docs/react/use-with-next-cn" target="_blank" rel="noopener noreferrer">Antd 安装启动</a></li>
<li><a href="https://ant.design/components/overview-cn" target="_blank" rel="noopener noreferrer">Antd 基本组件</a></li>
<li><a href="https://procomponents.ant.design/components" target="_blank" rel="noopener noreferrer">Antd 封装组件</a></li>
<li><a href="https://github.com/ant-design/x" target="_blank" rel="noopener noreferrer">Antd 智能组件</a></li>
<li><a href="https://ant-design-charts.antgroup.com/manual/introduction" target="_blank" rel="noopener noreferrer">Antd 图表组件</a></li>
<li><a href="https://motion.ant.design/exhibition-cn/" target="_blank" rel="noopener noreferrer">Antd 动效组件</a></li>
<li><a href="https://ant.design/theme-editor-cn" target="_blank" rel="noopener noreferrer">Antd 主题组件</a></li>
<li><a href="https://ant.design/docs/react/recommendation-cn" target="_blank" rel="noopener noreferrer">Antd 精选组件</a>
<ul>
<li><a href="https://g6.antv.antgroup.com/examples" target="_blank" rel="noopener noreferrer">关系可视组件</a></li>
<li><a href="https://l7.antv.vision/examples" target="_blank" rel="noopener noreferrer">地理空间组件</a></li>
<li><a href="https://github.com/uiwjs/react-codemirror" target="_blank" rel="noopener noreferrer">代码展示组件</a></li>
<li><a href="https://github.com/zpao/qrcode.react" target="_blank" rel="noopener noreferrer">二维码图组件</a></li>
<li><a href="https://github.com/tanem/react-nprogress" target="_blank" rel="noopener noreferrer">顶部进度组件</a></li>
<li><a href="https://github.com/chintan9/plyr-react?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer">视频播放组件</a></li>
<li><a href="https://github.com/uiwjs/react-amap" target="_blank" rel="noopener noreferrer">高德地图组件</a></li>
<li><a href="https://landing.ant.design/index-cn" target="_blank" rel="noopener noreferrer">首页模板组件</a></li>
<li><a href="https://github.com/react-component/footer" target="_blank" rel="noopener noreferrer"><s>页脚信息组件</s></a></li>
<li><a href="https://github.com/nanxiaobei/antd-img-crop" target="_blank" rel="noopener noreferrer"><s>剪切图片组件</s></a></li>
<li><a href="https://github.com/xyflow/xyflow" target="_blank" rel="noopener noreferrer">流节点图组件</a></li>
<li><a href="https://github.com/typesnippet/antd-phone-input" target="_blank" rel="noopener noreferrer">电话输入组件</a></li>
<li><a href="https://github.com/motiondivision/motion" target="_blank" rel="noopener noreferrer">动画渲染组件</a></li>
<li><a href="https://github.com/diegomura/react-pdf" target="_blank" rel="noopener noreferrer">文档展示组件</a></li>
<li><a href="https://github.com/zenoamaro/react-quill" target="_blank" rel="noopener noreferrer">富文编辑组件</a></li>
<li><a href="https://sheetjs.com/" target="_blank" rel="noopener noreferrer">表格处理组件</a></li>
<li><a href="https://github.com/i18next/react-i18next" target="_blank" rel="noopener noreferrer"><s>国际管理</s></a></li>
<li><a href="https://www.npmjs.com/package/@ant-design/colors" target="_blank" rel="noopener noreferrer">色彩管理</a></li>
<li><a href="https://github.com/clauderic/dnd-kit" target="_blank" rel="noopener noreferrer">拖拽管理</a></li>
<li><a href="https://github.com/duskload/react-device-detect" target="_blank" rel="noopener noreferrer"><s>设备管理</s></a></li>
<li><a href="https://ahooks.js.org/zh-CN/hooks/use-request/basic" target="_blank" rel="noopener noreferrer">ahooks</a></li>
</ul>
</li>
</ul>
</li>
<li>
<p>工具框架</p>
</li>
</ul>
<h2 id="_4-封装框架" tabindex="-1"><a class="header-anchor" href="#_4-封装框架"><span>4.封装框架</span></a></h2>
<p>封装的过程步骤是：</p>
<ol>
<li>
<p>保证 <code v-pre>npm</code> 是最新的版本，先使用 <code v-pre>Next.js</code> 安装 <code v-pre>Antd</code> 的基本依赖 <code v-pre>npx create-next-app work-edtechhub-demo-frontend</code>，后面有需要的其他依赖就逐步安装。</p>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-shell"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">ljp@limou3434:~/git/edtechhub/work-edtechhub-demo$</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> yarn</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> create</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> next-app</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> work-edtechhub-demo-frontend</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">✔</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Would</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> you</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> like</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> to</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> use</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> TypeScript?</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> …</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> No</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Yes</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">✔</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Which</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> linter</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> would</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> you</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> like</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> to</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> use?</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ›</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ESLint</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">✔</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Would</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> you</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> like</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> to</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> use</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Tailwind</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> CSS?</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> …</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> No</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Yes</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">✔</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Would</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> you</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> like</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> your</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> code</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> inside</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> a</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> `</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">src/</span><span style="--shiki-light:#999999;--shiki-dark:#666666">`</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> directory?</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> …</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> No</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Yes</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">✔</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Would</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> you</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> like</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> to</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> use</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> App</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Router?</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> (recommended) … No / Yes</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">✔</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Would</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> you</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> like</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> to</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> use</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Turbopack?</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> (recommended) … No / Yes</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">✔</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Would</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> you</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> like</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> to</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> customize</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> the</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> import</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> alias</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> (</span><span style="--shiki-light:#999999;--shiki-dark:#666666">`</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">@/*</span><span style="--shiki-light:#999999;--shiki-dark:#666666">`</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> by</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> default</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">)</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> … No / Yes</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">✔</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> What</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> import</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> alias</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> would</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> you</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> like</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> configured?</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> …</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> @/</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">*</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">Creating</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> a</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> new</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Next.js</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> app</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> in</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /home/ljp/git/edtechhub/work-edtechhub-demo/work-edtechhub-demo-frontend.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">Using</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> npm.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">Initializing</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> project</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> with</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> template:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> app</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> </span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">Installing</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> dependencies:</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">-</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> react</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">-</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> react-dom</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">-</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> next</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">Installing</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> devDependencies:</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">-</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> typescript</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">-</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> @types/node</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">-</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> @types/react</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">-</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> @types/react-dom</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">-</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> eslint</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">-</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> eslint-config-next</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">-</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> @eslint/eslintrc</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">added</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 303</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> packages,</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> and</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> audited</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 304</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> packages</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> in</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 53s</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">131</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> packages</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> are</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> looking</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> for</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> funding</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">  run</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> `</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> fund</span><span style="--shiki-light:#999999;--shiki-dark:#666666">`</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> for</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> details</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">found</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 0</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> vulnerabilities</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">Success!</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Created</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> work-edtechhub-demo-frontend</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> at</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /home/ljp/git/edtechhub/work-edtechhub-demo/work-edtechhub-demo-frontend</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container important">
<p class="hint-container-title">重要</p>
<p>补充：可以使用 <code v-pre>npm config set registry https://registry.npmmirror.com</code> 来使用国内镜像节省不该花费的流量。</p>
</div>
</li>
<li>
<p>也可以直接使用命令行配置。</p>
<table>
<thead>
<tr>
<th>参数</th>
<th>含义</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>--typescript</code></td>
<td>使用 TypeScript</td>
</tr>
<tr>
<td><code v-pre>--eslint</code></td>
<td>启用 ESLint</td>
</tr>
<tr>
<td><code v-pre>--src-dir</code></td>
<td>源码放到 <code v-pre>src/</code> 目录</td>
</tr>
<tr>
<td><code v-pre>--app</code></td>
<td>使用 App Router (<code v-pre>app/</code> 目录)</td>
</tr>
<tr>
<td><code v-pre>--turbo</code></td>
<td>使用 Turbopack</td>
</tr>
<tr>
<td><code v-pre>--import-alias &quot;@/*&quot;</code></td>
<td>设置导入别名</td>
</tr>
<tr>
<td><code v-pre>--yes</code></td>
<td>默认所有提示都选择 Yes，跳过交互</td>
</tr>
</tbody>
</table>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-shell"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">ljp@limou3434:~/git/edtechhub/work-edtechhub-demo$</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> yarn</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> create</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> next-app</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> work-edtechhub-demo-frontend</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> \</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">  --typescript</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> \</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">  --eslint</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> \</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">  --src-dir</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> \</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">  --app</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> \</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">  --turbo</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> \</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">  --import-alias</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">@/*</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> \</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">  --yes</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">yarn</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> create</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> v1.22.22</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">1/4</span><span style="--shiki-light:#999999;--shiki-dark:#666666">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> Resolving packages...</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">2/4</span><span style="--shiki-light:#999999;--shiki-dark:#666666">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> Fetching packages...</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">3/4</span><span style="--shiki-light:#999999;--shiki-dark:#666666">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> Linking dependencies...</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">4/4</span><span style="--shiki-light:#999999;--shiki-dark:#666666">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> Building fresh packages...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">success</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Installed</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">create-next-app@15.5.6</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> with</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> binaries:</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">      -</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> create-next-app</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">##</span><span style="--shiki-light:#999999;--shiki-dark:#666666">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 2/2Creating a new Next.js app in /home/ljp/git/edtechhub/work-edtechhub-demo/work-edtechhub-demo-frontend.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">Using</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> yarn.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">Initializing</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> project</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> with</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> template:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> app</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> </span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">Installing</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> dependencies:</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">-</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> react</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">-</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> react-dom</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">-</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> next</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">Installing</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> devDependencies:</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">-</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> typescript</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">-</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> @types/node</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">-</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> @types/react</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">-</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> @types/react-dom</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">-</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> eslint</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">-</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> eslint-config-next</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">-</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> @eslint/eslintrc</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">yarn</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> install</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> v1.22.22</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">info</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> No</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> lockfile</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> found.</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">1/4</span><span style="--shiki-light:#999999;--shiki-dark:#666666">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> Resolving packages...</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">2/4</span><span style="--shiki-light:#999999;--shiki-dark:#666666">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> Fetching packages...</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">3/4</span><span style="--shiki-light:#999999;--shiki-dark:#666666">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> Linking dependencies...</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">4/4</span><span style="--shiki-light:#999999;--shiki-dark:#666666">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> Building fresh packages...</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">success</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Saved</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> lockfile.</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">Done</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> in</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 156.25s.</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">Success!</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Created</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> work-edtechhub-demo-frontend</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> at</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /home/ljp/git/edtechhub/work-edtechhub-demo/work-edtechhub-demo-frontend</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">Done</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> in</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 157.06s.</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>使用自动路由来编写一个训练测试页面，这个页面专门用来给我们测试组件的封装效果的，就创建一个 <code v-pre>/home/ljp/git/edtechhub/work-edtechhub-demo/work-edtechhub-demo-frontend/src/app/training/page.tsx</code> 就可以，内容先随便写。</p>
<div class="language-tsx line-numbers-mode" data-highlighter="shiki" data-ext="tsx" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-tsx"><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> default</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> function</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> TrainingPage</span><span style="--shiki-light:#999999;--shiki-dark:#666666">()</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">    return</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> (</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">        &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">p</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">TrainingPage</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">p</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    );</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>然后先引入国际化，我们的网站需要支持国际化 <code v-pre>yarn add react-i18next i18next</code>。</p>
</li>
<li>
<p>引入路由布局组件，接入到全局布局组件中，并且设置页脚、错误页面</p>
</li>
</ol>
</div></template>


