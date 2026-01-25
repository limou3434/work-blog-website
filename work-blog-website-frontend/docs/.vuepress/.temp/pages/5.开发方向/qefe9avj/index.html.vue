<template><div><h2 id="_1-强大优势" tabindex="-1"><a class="header-anchor" href="#_1-强大优势"><span>1.强大优势</span></a></h2>
<p><code v-pre>shadcn/ui</code> 是一套精心设计、可访问性良好的组件和 <strong>代码分发</strong> 平台。它能和你喜欢的框架、<code v-pre>AI</code> 模型一起工作。开源，开放代码。<strong>这不是一个现成的组件库，而是你用来搭建自己组件库的方式。</strong></p>
<p>大多数传统组件库的工作模式是：你从 NPM 装一个包，导入组件，然后在应用里直接用。这种模式在你需要根据设计系统去改组件，或者缺少某些组件时，就不太好使了。<strong>通常你会被迫包一层库组件、写 hack 去覆盖样式，或者混合多个库的组件，结果 API 风格还不兼容</strong>。</p>
<p>这就是 <code v-pre>shadcn/ui</code> 要解决的问题。它遵循以下原则：</p>
<ul>
<li><strong>开放代码</strong>：组件的顶层代码是开放的，你可以直接改</li>
<li><strong>组件组合</strong>：所有组件都有统一的、可组合的接口，可预测性强</li>
<li><strong>文件分发</strong>：用扁平文件结构和 <code v-pre>CLI</code> 工具来分发组件</li>
<li><strong>美观默认</strong>：提供精挑细选的默认样式，开箱即用就好看</li>
<li><strong>面向智能</strong>：开放的代码让 <code v-pre>LLMs</code> 能读、能理解，甚至能帮你改进</li>
</ul>
<h3 id="_1-1-开放代码" tabindex="-1"><a class="header-anchor" href="#_1-1-开放代码"><span>1.1.开放代码</span></a></h3>
<p><code v-pre>shadcn/ui</code> 把组件的源代码交给你。你有完全的控制权，可以随意定制和扩展。意味着：</p>
<ul>
<li><strong>完全透明</strong>：你能看到每个组件的真实实现。</li>
<li><strong>轻松定制</strong>：想改哪里就改哪里，满足自己的设计和功能需求。</li>
<li><strong>AI 集成</strong>：因为代码是开放的，<code v-pre>LLMs</code> 能轻松读懂甚至帮你改进。</li>
</ul>
<p>在常规库里，你要改一个按钮的行为，通常只能覆盖样式或包一层。而在 <code v-pre>shadcn/ui</code> 里，你就直接改按钮代码本身。1.2.</p>
<h3 id="_1-2-组件组合" tabindex="-1"><a class="header-anchor" href="#_1-2-组件组合"><span>1.2.组件组合</span></a></h3>
<p><code v-pre>shadcn/ui</code> 的所有组件共享统一的、可组合的接口。如果缺了某个组件，我们会把它引进来，做成可组合的形式，并调整样式，让它能和设计系统里的其他部分搭配起来。统一的接口意味着团队和 <code v-pre>LLMs</code> 都能预测行为。你不用为每个新组件学新的 <code v-pre>API</code>，哪怕是第三方组件。</p>
<h3 id="_1-3-文件分发" tabindex="-1"><a class="header-anchor" href="#_1-3-文件分发"><span>1.3.文件分发</span></a></h3>
<p><code v-pre>shadcn/ui</code> 同时也是一个代码分发系统。它定义了组件的 <code v-pre>schema</code>，以及一个 <code v-pre>CLI</code> 工具来分发。</p>
<ul>
<li><strong>Schema 架构</strong>：用扁平文件结构定义组件、依赖和属性。</li>
<li><strong>CLI 工具</strong>：跨框架支持，能在不同项目间分发和安装组件。</li>
</ul>
<p>你可以用 <code v-pre>schema</code> 把组件分发给别的项目，或者让 <code v-pre>AI</code> 基于 <code v-pre>schema</code> 自动生成新的组件。</p>
<h3 id="_1-4-美观默认" tabindex="-1"><a class="header-anchor" href="#_1-4-美观默认"><span>1.4.美观默认</span></a></h3>
<p><code v-pre>shadcn/ui</code> 自带一批有默认样式的组件，这些样式是精挑细选过的：</p>
<ul>
<li><strong>开箱即用</strong>：界面简洁、极简风格，不用你额外折腾。</li>
<li><strong>统一设计</strong>：组件之间天然契合，保持 <code v-pre>UI</code> 一致性。</li>
<li><strong>容易改动</strong>：要调整时，可以很方便地覆盖和扩展默认值。</li>
</ul>
<h3 id="_1-5-面向智能" tabindex="-1"><a class="header-anchor" href="#_1-5-面向智能"><span>1.5.面向智能</span></a></h3>
<p><code v-pre>shadcn/ui</code> 的设计让 <code v-pre>AI</code> 工具很容易和代码配合。因为代码是开放的，<code v-pre>API</code> 一致，<code v-pre>LLMs</code> 能读懂逻辑，甚至能生成新的组件。<code v-pre>AI</code> 模型能学到你的组件是怎么工作的，给你提改进意见，甚至帮你生成能和现有设计无缝融合的新组件。</p>
<h2 id="_2-组件清单" tabindex="-1"><a class="header-anchor" href="#_2-组件清单"><span>2.组件清单</span></a></h2>
<p>可以大致看看 <code v-pre>shadcn/ui</code> 提供的 <a href="https://ui.shadcn.com/docs/components" target="_blank" rel="noopener noreferrer">组件清单</a>。</p>
<h2 id="_3-注册中心" tabindex="-1"><a class="header-anchor" href="#_3-注册中心"><span>3.注册中心</span></a></h2>
<p>实际上我们自己编写的基于 <code v-pre>shadcn/ui</code> 也可以被分发，具体 <a href="https://ui.shadcn.com/docs/registry" target="_blank" rel="noopener noreferrer">看这里</a>。</p>
<h2 id="_4-环境安装" tabindex="-1"><a class="header-anchor" href="#_4-环境安装"><span>4.环境安装</span></a></h2>
<p>这里我使用我比较熟悉的 <code v-pre>Next.js</code> 框架来安装和配置 <code v-pre>shadcn/ui</code>，<a href="https://ui.shadcn.com/docs/installation/next" target="_blank" rel="noopener noreferrer">参考文档</a>。</p>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-shell"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">$</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> info</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> shadcn</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> version</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">3.2.1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">$</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> npx</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> shadcn@latest</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> init</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">Need</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> to</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> install</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> the</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> following</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> packages:</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">shadcn@3.2.1</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">Ok</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> to</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> proceed?</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> (y) y</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> warn</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> deprecated</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> node-domexception@1.0.0:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Use</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> your</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> platform</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">s native DOMException instead</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">✔ The path /home/ljp/git/edtechhub does not contain a package.json file.</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">  Would you like to start a new project? › Next.js</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">✔ What is your project named? … work-cyber-lifeform # 这个项目名字您看着来起就行</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">✔ Creating a new Next.js project.</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">✔ Which color would you like to use as the base color? › Zinc # 这里会选择一款颜色, 可以参考 https://ui.shadcn.com/colors#colors</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">✔ Writing components.json.</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">✔ Checking registry.</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">✔ Updating CSS variables in app/globals.css</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">✔ Installing dependencies.</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">✔ Created 1 file:</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">  - lib/utils.ts</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Success! Project initialization completed.</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">You may now add components.</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>简单看看项目文件目录树。</p>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-shell"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">$</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> tree</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -L</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 1</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">.</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">├──</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> app</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">├──</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> components.json</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">├──</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> eslint.config.mjs</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">├──</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> lib</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">├──</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> next.config.ts</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">├──</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> next-env.d.ts</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">├──</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> node_modules</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">├──</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> package.json</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">├──</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> package-lock.json</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">├──</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> postcss.config.mjs</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">├──</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> public</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">├──</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> README.md</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">└──</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> tsconfig.json</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">4</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> directories,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 9</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> files</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后先什么都不动，按照里面的 <code v-pre>README.md</code> 来进行操作，直接运行 <code v-pre>npm run dev</code>。</p>
<figure><img src="@source/5.开发方向/2.网页开发/UI/assets/image-20250910144712159.png" alt="image-20250910144712159" tabindex="0" loading="lazy"><figcaption>image-20250910144712159</figcaption></figure>
<figure><img src="@source/5.开发方向/2.网页开发/UI/assets/image-20250910144849326.png" alt="image-20250910144849326" tabindex="0" loading="lazy"><figcaption>image-20250910144849326</figcaption></figure>
<p>访问 <code v-pre>http://localhost:3000</code> 有可能会看到报错...这个原因应该是和您安装的浏览器插件有关，建议使用无痕浏览器模式来打开网址。</p>
<figure><img src="@source/5.开发方向/2.网页开发/UI/assets/image-20250910152111583.png" alt="image-20250910152111583" tabindex="0" loading="lazy"><figcaption>image-20250910152111583</figcaption></figure>
<p>我们修改一下生成的 <code v-pre>app.tsx</code> 文件，需要先使用 <code v-pre>npx shadcn@latest add button</code> 添加一个按钮组件。这个时候和很多框架不同的地方来了，按钮的源代码直接出现在您的项目里。</p>
<figure><img src="@source/5.开发方向/2.网页开发/UI/assets/image-20250910145915330.png" alt="image-20250910145915330" tabindex="0" loading="lazy"><figcaption>image-20250910145915330</figcaption></figure>
<div class="language-tsx line-numbers-mode" data-highlighter="shiki" data-ext="tsx" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-tsx"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// import Image from "next/image";</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">Button</span><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">@/components/ui/button</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> default</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> function</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> Home</span><span style="--shiki-light:#999999;--shiki-dark:#666666">()</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">    return</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> (</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">        &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">div</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">            &#x3C;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">Button</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Click me</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">Button</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">        &#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">div</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    )</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    // return (</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //     &#x3C;div</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //         className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20"></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //         &#x3C;main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start"></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //             &#x3C;Image</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                 className="dark:invert"</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                 src="/next.svg"</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                 alt="Next.js logo"</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                 width={180}</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                 height={38}</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                 priority</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //             /></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //             &#x3C;ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left"></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                 &#x3C;li className="mb-2 tracking-[-.01em]"></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                     Get started by editing{" "}</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                     &#x3C;code</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                         className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded"></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                         app/page.tsx</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                     &#x3C;/code></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                     .</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                 &#x3C;/li></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                 &#x3C;li className="tracking-[-.01em]"></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                     Save and see your changes instantly.</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                 &#x3C;/li></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //             &#x3C;/ol></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //             &#x3C;div className="flex gap-4 items-center flex-col sm:flex-row"></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                 &#x3C;a</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                     className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                     href="https://vercel.com/new?utm_source=create-next-app&#x26;utm_medium=appdir-template-tw&#x26;utm_campaign=create-next-app"</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                     target="_blank"</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                     rel="noopener noreferrer"</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                 ></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                     &#x3C;Image</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                         className="dark:invert"</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                         src="/vercel.svg"</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                         alt="Vercel logomark"</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                         width={20}</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                         height={20}</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                     /></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                     Deploy now</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                 &#x3C;/a></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                 &#x3C;a</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                     className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                     href="https://nextjs.org/docs?utm_source=create-next-app&#x26;utm_medium=appdir-template-tw&#x26;utm_campaign=create-next-app"</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                     target="_blank"</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                     rel="noopener noreferrer"</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                 ></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                     Read our docs</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                 &#x3C;/a></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //             &#x3C;/div></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //         &#x3C;/main></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //         &#x3C;footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //             &#x3C;a</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                 className="flex items-center gap-2 hover:underline hover:underline-offset-4"</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                 href="https://nextjs.org/learn?utm_source=create-next-app&#x26;utm_medium=appdir-template-tw&#x26;utm_campaign=create-next-app"</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                 target="_blank"</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                 rel="noopener noreferrer"</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //             ></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                 &#x3C;Image</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                     aria-hidden</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                     src="/file.svg"</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                     alt="File icon"</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                     width={16}</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                     height={16}</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                 /></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                 Learn</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //             &#x3C;/a></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //             &#x3C;a</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                 className="flex items-center gap-2 hover:underline hover:underline-offset-4"</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                 href="https://vercel.com/templates?framework=next.js&#x26;utm_source=create-next-app&#x26;utm_medium=appdir-template-tw&#x26;utm_campaign=create-next-app"</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                 target="_blank"</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                 rel="noopener noreferrer"</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //             ></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                 &#x3C;Image</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                     aria-hidden</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                     src="/window.svg"</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                     alt="Window icon"</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                     width={16}</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                     height={16}</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                 /></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                 Examples</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //             &#x3C;/a></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //             &#x3C;a</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                 className="flex items-center gap-2 hover:underline hover:underline-offset-4"</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                 href="https://nextjs.org?utm_source=create-next-app&#x26;utm_medium=appdir-template-tw&#x26;utm_campaign=create-next-app"</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                 target="_blank"</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                 rel="noopener noreferrer"</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //             ></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                 &#x3C;Image</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                     aria-hidden</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                     src="/globe.svg"</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                     alt="Globe icon"</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                     width={16}</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                     height={16}</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                 /></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                 Go to nextjs.org →</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //             &#x3C;/a></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //         &#x3C;/footer></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //     &#x3C;/div></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    // );</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>注意：这里其实有个问题我没有整理清楚，就是这里使用 <code v-pre>latest</code> 来初始化的项目，后期官方更新了，在此用 <code v-pre>latest</code> 来添加组件不知道会不会有问题...总之最好是锁死版本号叭...</p>
</div>
<h2 id="_5-项目配置" tabindex="-1"><a class="header-anchor" href="#_5-项目配置"><span>5.项目配置</span></a></h2>
<p>在初始化阶段还会生成 <code v-pre>components.json</code> 文件，这里包含您的项目配置，参考 <a href="https://ui.shadcn.com/docs/components-json" target="_blank" rel="noopener noreferrer">官方文档</a>。</p>
<div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-yaml"><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">{</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">  "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">$schema</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">https://ui.shadcn.com/schema.json</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> # JSON Schema 地址, 用于编辑器提示和验证文件结构</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">  "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">style</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">new-york</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> # 组件的样式, 初始化后不能更改</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">  "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">rsc</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> true</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> # 当设置为 true 时, CLI 会自动向客户端组件添加 use client 指令</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">  "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">tsx</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> true</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> # 将此选项设置为 false 允许以 .jsx 文件扩展名将组件作为 JavaScript 添加</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">  "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">tailwind</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">    "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">config</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> ""</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> # Tailwind 配置文件路径, 如果为空, 默认读取项目的 tailwind.config.js</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">    "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">css</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">app/globals.css</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> # Tailwind 样式的入口文件路径, 例如 "app/globals.css", 要使用 CSS 变量进行主题设置请务必开启</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">    "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">baseColor</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">zinc</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> # 颜色主题, 例如 "zinc", 初始化后无法更改</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">    "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">cssVariables</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> true</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> # 是否开启 CSS 变量来控制颜色等设计属性, 初始化后无法更改</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">    "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">prefix</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> ""</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> # Tailwind 的类名前缀, 如果不为空，会在所有类名前加前缀</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  },</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">  "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">iconLibrary</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">lucide</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> # 默认图标库</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">  "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">aliases</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> # 定义项目中常用目录的别名, 例如 'import Button from "components/Button"' 来简化书写</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">    "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">components</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">@/components</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">    "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">utils</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">@/lib/utils</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">    "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">ui</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">@/components/ui</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">    "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">lib</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">@/lib</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">    "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">hooks</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">@/hooks</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  },</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">  "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">registries</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {}</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> # 组件注册中心</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-样式风格" tabindex="-1"><a class="header-anchor" href="#_6-样式风格"><span>6.样式风格</span></a></h2>
<p>可以快速使用 <code v-pre>shadcn</code> 提供的类来把原生的组件转化为和 <code v-pre>shadcn</code> 组件库中相似的组件。</p>
<div class="hint-container important">
<p class="hint-container-title">重要</p>
<p>补充：实际上有两种方式。</p>
<ul>
<li><code v-pre>CSS Variables</code></li>
<li><code v-pre>Utility Classes</code></li>
</ul>
<p>一般用前一种方式。</p>
</div>
<div class="language-tsx line-numbers-mode" data-highlighter="shiki" data-ext="tsx" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-tsx"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// import Image from "next/image";</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">Button</span><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">@/components/ui/button</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> default</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> function</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> Home</span><span style="--shiki-light:#999999;--shiki-dark:#666666">()</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">    return</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> (</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">        &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">div</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">            &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">button</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">                普通按钮</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">            &#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> button</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">            &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">button</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> className</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">bg-primary text-primary-foreground px-4 py-2 rounded</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">                自定按钮</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">            &#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">button</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">            &#x3C;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">Button</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">                组件按钮</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">            &#x3C;/</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">Button</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">        &#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">div</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    )</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    // return (</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //     &#x3C;div</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //         className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20"></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //         &#x3C;main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start"></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //             &#x3C;Image</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                 className="dark:invert"</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                 src="/next.svg"</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                 alt="Next.js logo"</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                 width={180}</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                 height={38}</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                 priority</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //             /></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //             &#x3C;ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left"></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                 &#x3C;li className="mb-2 tracking-[-.01em]"></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                     Get started by editing{" "}</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                     &#x3C;code</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                         className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded"></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                         app/page.tsx</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                     &#x3C;/code></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                     .</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                 &#x3C;/li></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                 &#x3C;li className="tracking-[-.01em]"></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                     Save and see your changes instantly.</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                 &#x3C;/li></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //             &#x3C;/ol></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //             &#x3C;div className="flex gap-4 items-center flex-col sm:flex-row"></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                 &#x3C;a</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                     className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                     href="https://vercel.com/new?utm_source=create-next-app&#x26;utm_medium=appdir-template-tw&#x26;utm_campaign=create-next-app"</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                     target="_blank"</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                     rel="noopener noreferrer"</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                 ></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                     &#x3C;Image</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                         className="dark:invert"</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                         src="/vercel.svg"</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                         alt="Vercel logomark"</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                         width={20}</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                         height={20}</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                     /></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                     Deploy now</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                 &#x3C;/a></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                 &#x3C;a</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                     className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                     href="https://nextjs.org/docs?utm_source=create-next-app&#x26;utm_medium=appdir-template-tw&#x26;utm_campaign=create-next-app"</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                     target="_blank"</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                     rel="noopener noreferrer"</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                 ></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                     Read our docs</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                 &#x3C;/a></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //             &#x3C;/div></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //         &#x3C;/main></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //         &#x3C;footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //             &#x3C;a</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                 className="flex items-center gap-2 hover:underline hover:underline-offset-4"</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                 href="https://nextjs.org/learn?utm_source=create-next-app&#x26;utm_medium=appdir-template-tw&#x26;utm_campaign=create-next-app"</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                 target="_blank"</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                 rel="noopener noreferrer"</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //             ></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                 &#x3C;Image</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                     aria-hidden</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                     src="/file.svg"</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                     alt="File icon"</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                     width={16}</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                     height={16}</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                 /></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                 Learn</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //             &#x3C;/a></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //             &#x3C;a</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                 className="flex items-center gap-2 hover:underline hover:underline-offset-4"</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                 href="https://vercel.com/templates?framework=next.js&#x26;utm_source=create-next-app&#x26;utm_medium=appdir-template-tw&#x26;utm_campaign=create-next-app"</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                 target="_blank"</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                 rel="noopener noreferrer"</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //             ></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                 &#x3C;Image</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                     aria-hidden</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                     src="/window.svg"</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                     alt="Window icon"</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                     width={16}</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                     height={16}</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                 /></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                 Examples</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //             &#x3C;/a></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //             &#x3C;a</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                 className="flex items-center gap-2 hover:underline hover:underline-offset-4"</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                 href="https://nextjs.org?utm_source=create-next-app&#x26;utm_medium=appdir-template-tw&#x26;utm_campaign=create-next-app"</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                 target="_blank"</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                 rel="noopener noreferrer"</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //             ></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                 &#x3C;Image</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                     aria-hidden</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                     src="/globe.svg"</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                     alt="Globe icon"</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                     width={16}</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                     height={16}</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                 /></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //                 Go to nextjs.org →</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //             &#x3C;/a></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //         &#x3C;/footer></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //     &#x3C;/div></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    // );</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>而如果需要需要修改 <code v-pre>TCSS</code> 的样式风格，就需要：</p>
<ul>
<li><code v-pre>CSS</code> 选择器的知识</li>
<li><code v-pre>TCSS</code> 的知识</li>
</ul>
<p>然后在 <code v-pre>tsconfig.json</code> 中尝试修改即可。</p>
<h2 id="_7-黑暗模式" tabindex="-1"><a class="header-anchor" href="#_7-黑暗模式"><span>7.黑暗模式</span></a></h2>
<p>首先我们人为规定，自己编写的组件放置在 <code v-pre>components/ui/</code> 同级目录下，然后创建一个 <code v-pre>theme-provider.tsx</code> 文件。</p>
<figure><img src="@source/5.开发方向/2.网页开发/UI/assets/image-20250910173549008.png" alt="image-20250910173549008" tabindex="0" loading="lazy"><figcaption>image-20250910173549008</figcaption></figure>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-shell"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> install</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> next-themes</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_8-指令选项" tabindex="-1"><a class="header-anchor" href="#_8-指令选项"><span>8.指令选项</span></a></h2>
<p>前面说了那么多还没系统介绍过 <code v-pre>CLI</code> 程序的使用，不过我觉得这个 <a href="https://ui.shadcn.com/docs/cli" target="_blank" rel="noopener noreferrer">看看文档</a> 就可以了...这里做一个精简：</p>
<ul>
<li>使用 <code v-pre>npx shadcn@latest init</code> 命令初始化新项目的配置和依赖项</li>
<li>使用 <code v-pre>npx shadcn@latest add [组件]</code> 命令将组件和依赖项添加到您的项目中</li>
<li>在安装前，使用 <code v-pre>npx shadcn@latest view [组件]</code> 命令查看注册表中的项目</li>
<li>...</li>
</ul>
</div></template>


