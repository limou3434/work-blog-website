<template><div><h2 id="_1-c-语言的简要概述" tabindex="-1"><a class="header-anchor" href="#_1-c-语言的简要概述"><span>1.C 语言的简要概述</span></a></h2>
<h3 id="_1-1-c-语言类比自然语言" tabindex="-1"><a class="header-anchor" href="#_1-1-c-语言类比自然语言"><span>1.1.C 语言类比自然语言</span></a></h3>
<p>平时我们说的语言（汉语、英语...）就是人与人之间的交流语言，而 <a href="https://baike.baidu.com/item/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80" target="_blank" rel="noopener noreferrer">编程语言</a> 就是人与计算机的交流语言。<code v-pre>C</code> 语言就是众多编程语言中的一种（其他流行语言：<code v-pre>python</code>、<code v-pre>Java</code>、<code v-pre>C++</code>、<code v-pre>C#</code>、<code v-pre>Go</code>、<code v-pre>JS</code>）</p>
<h3 id="_1-2-c-和其他语言的发展" tabindex="-1"><a class="header-anchor" href="#_1-2-c-和其他语言的发展"><span>1.2.C 和其他语言的发展</span></a></h3>
<p>而计算机语言不是凭空出现的，是有一定的发展阶段的：</p>
<ol>
<li>
<p>一开始程序员都是直接使用二进制，并且需要查询手册，使用打孔机将孔打在纸条上，有孔和没孔代表 <code v-pre>1/0</code> 两种状态，然后交给计算机处理计算</p>
</li>
<li>
<p>二进制使用起来过于繁琐，需要记忆不同的指令或者反复查找指令手册。</p>
<p>而后来使用的汇编语言，是由一个个助记符构成的，比如说：想实现加法运算，假设加法指令的二进制代码是 <code v-pre>01011</code>，这个时候给二进制 <code v-pre>01011</code> 命名为 <code v-pre>Add</code> 的加法指令，于是输入 <code v-pre>Add</code> 就就可以实现指令 <code v-pre>01011</code>，其中 <code v-pre>Add</code> 就是一个助记符</p>
</li>
<li>
<p>后面诞生了 <code v-pre>BCPL</code> 语言、<code v-pre>B</code> 语言，最终演化到了 <code v-pre>C</code> 语言的诞生（在当时，对比二进制输入和汇编语言，<code v-pre>C</code> 语言是极其方便的语言）</p>
</li>
<li>
<p>然后就开始出现了其他语言的发展，例如：<code v-pre>Java</code>、<code v-pre>C++</code>、<code v-pre>Python</code>。</p>
</li>
</ol>
<h3 id="_1-3-c-语言在当今的地位" tabindex="-1"><a class="header-anchor" href="#_1-3-c-语言在当今的地位"><span>1.3.C 语言在当今的地位</span></a></h3>
<p>那么是否有必要学习 <code v-pre>C</code> 语言呢？<code v-pre>C</code> 语言于 <code v-pre>1978</code> 年问世（已经是属于比较早远的语言了），可以从图中看出，即使过了这么久 <code v-pre>C</code> 语言仍然是程序员们热门的语言之一，常年占据前几名的位置，干掉了不少的语言。</p>
<figure><img src="@source/1.编程语言/1.C/assets/image-20231014215621880.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="hint-container important">
<p class="hint-container-title">重要</p>
<p>补充：以上数据截止于 <code v-pre>2023</code> 年 <code v-pre>10</code> 月 <code v-pre>14</code> 日，来源 <a href="https://www.tiobe.com/tiobe-index/" target="_blank" rel="noopener noreferrer">TIOBE 指数 - TIOBE</a>（<code v-pre>TIOBE</code> 编程社区指数是编程普及程度的指标语言，该指数每月更新一次）。</p>
</div>
<p>从使用规模上来看，<code v-pre>C</code> 还是值得我们学习的，尽管它属于比较古老的编程语言，但是学习 <code v-pre>C</code> 的过程，会帮助我们更深入学习其他计算机知识。</p>
<h3 id="_1-4-c-语言的优势和劣势" tabindex="-1"><a class="header-anchor" href="#_1-4-c-语言的优势和劣势"><span>1.4.C 语言的优势和劣势</span></a></h3>
<h4 id="_1-4-1-c-语言的优势" tabindex="-1"><a class="header-anchor" href="#_1-4-1-c-语言的优势"><span>1.4.1.C 语言的优势</span></a></h4>
<p>下面的优势您可能现在还感觉不出来，您姑且一看即可，以后再来慢慢了解。</p>
<ol>
<li>设计特性：其模块化设计和结构化编程的特点，使得写出的程序易懂易读（这是对比汇编语言而言的）。</li>
<li>高效性：由于 <code v-pre>C</code> 是偏向计算机底层的语言（用 <code v-pre>C</code> 可以很直接操控某些硬件），可以充分利用计算机的优势，具有汇编语言的微调控制能力，可以更高效使用内存、运行速度很快（对比其他语言）。</li>
<li>可移植性：可移植性是难得的特性，<code v-pre>C</code> 出名原因之一就有这一点，您编写出来的同一份标准 <code v-pre>C</code> 代码在稍作修改甚至不修改的情况下，可以运行在其他机器上。不过需要注意的是，在某些硬件设备，例如：显示监视器或操作系统特殊功能编写的部分，通常是不可移植的。</li>
<li>强大且灵活，我曾在 <code v-pre>CoolShell</code> 上看到一句很酷的话：“<code v-pre>C</code> 语言不用多说，现今这个世界上几乎所有重要的软件都跟 <code v-pre>C</code> 有直接和间接的关系，操作系统、网络、硬件驱动等等。说得霸气一点儿，这个世界就是在 <code v-pre>C</code> 语言之上运行的”。</li>
<li>面向程序员：<code v-pre>C</code> 语言满足程序员的需求，程序员可以利用 <code v-pre>C</code> 方便地访问硬件、操作内存中的位。并且 <code v-pre>C</code> 的类型检查不像 <code v-pre>C++</code> 那么严格，这样做的好处是很多任务采用 <code v-pre>C</code> 都十分简洁（坏处是容易犯错）。</li>
<li>库函数：包含众多程序员基础使用的 <code v-pre>C</code> 函数（但是没有直接的数据结构）。</li>
</ol>
<h4 id="_1-4-2-c-语言的劣势" tabindex="-1"><a class="header-anchor" href="#_1-4-2-c-语言的劣势"><span>1.4.2.C 语言的劣势</span></a></h4>
<p>实际上 <code v-pre>C</code> 语言的很多好处都有可能转化为坏处。</p>
<ol>
<li><code v-pre>C</code> 太过于自由，太信任程序员，这点在指针的使用上尤为突出，使用指针时，稍不注意就会导致程序崩溃，程序员需要对自己的 C 代码负责（这也提醒您，在后续学习中，遇到的第一个难点很可能就是指针）。</li>
<li><code v-pre>C</code> 语言紧凑且简洁，有大量的运行，因此有可能写出令人费解的代码，甚至有“<a href="https://www.ioccc.org/" target="_blank" rel="noopener noreferrer">国际 C 语言混淆代码大赛（IOCCC）</a>”的存在，这是只有 <code v-pre>C</code> 语言才独有的大赛。</li>
</ol>
<h2 id="_2-c-语言的应用场景" tabindex="-1"><a class="header-anchor" href="#_2-c-语言的应用场景"><span>2.C 语言的应用场景</span></a></h2>
<ol>
<li>操作系统开发：小型计算机（例如：<code v-pre>UNIX</code> 系统，类似于 <code v-pre>Windows</code> 系统，也是一种电脑操作系统）、个人计算机、大型计算机等。</li>
<li>嵌入式开发：这些系统通常被嵌入到其他设备中（例如：智能手表、飞机、导弹、照相机等）<code v-pre>C</code> 语言在单片机开发，嵌入式开发用的特别多，近几年物联网又让 <code v-pre>C</code> 语言掀起热潮（2024-7-23）。</li>
<li>硬件驱动开发：做硬件设备的驱动程序，为上层软件提供服务。</li>
<li><code v-pre>C</code> 还有一些应用场景，感兴趣的话您也可以查找一下其他相关知识。</li>
</ol>
<div class="hint-container important">
<p class="hint-container-title">重要</p>
<p>补充：关于计算机的硬件知识，我觉得您有必要了解一下，您至少需要知道一点基础的计算机硬件知识，这对未来计算机技术的学习特别是对 <code v-pre>C</code> 语言的学习有很大的帮助。您可以看看我的另外一篇文章：<a href="https://blog.csdn.net/m0_73168361/article/details/131525012?spm=1001.2014.3001.5502" target="_blank" rel="noopener noreferrer">《简明计算机运行结构》</a>。</p>
</div>
<h2 id="_3-c-语言的学习方法" tabindex="-1"><a class="header-anchor" href="#_3-c-语言的学习方法"><span>3.C 语言的学习方法</span></a></h2>
<h3 id="_3-1-多概览全局" tabindex="-1"><a class="header-anchor" href="#_3-1-多概览全局"><span>3.1.多概览全局</span></a></h3>
<p>无论是学习什么东西，你必须要看得到“头”，看不到头的无止尽的学习是最容易让人学习奔溃的。可以先查看本系列的标题和菜鸟教程中关于 <code v-pre>C</code> 的教程标题，先做概览能让您很好把握知识的分布，以控制自己的学习重点和学习时间。同时您也可以使用 <code v-pre>AI</code> 来辅助问答，例如：(1)<code v-pre>C</code> 语言的发展历史 (2)<code v-pre>C</code> 语言学习的重难点 (3)<code v-pre>C</code> 中有哪些知识值得学习...</p>
<h3 id="_3-2-多敲写代码" tabindex="-1"><a class="header-anchor" href="#_3-2-多敲写代码"><span>3.2.多敲写代码</span></a></h3>
<p>多多敲代码，不要嫌弃繁琐的敲键盘过程！本系列中所有的例子简易都用键盘敲一遍，当然不是照抄，而是在理解本文例子的同时，自己尝试编写出类似的例子，思考为什么这么做？为什么不这么做？还能怎么做...的问题。</p>
<h3 id="_3-3-多撰写博客" tabindex="-1"><a class="header-anchor" href="#_3-3-多撰写博客"><span>3.3.多撰写博客</span></a></h3>
<p>在其他方面，我推荐您在 <code v-pre>CSDN</code> 上撰写自己的学习经历，就像 <a href="https://blog.csdn.net/m0_73168361?spm=1000.2115.3001.5343" target="_blank" rel="noopener noreferrer">我自己写的博文</a> 那样，写博文的意义有以下几个：</p>
<ol>
<li>与他人分享知识</li>
<li>整理、理清自己的学习思路，更好掌握知识</li>
<li>方便以后自己修改复习使用</li>
<li>面试是一个加分选项，有博客的人和没博客的人在面试的时候是两个档次的</li>
</ol>
<div class="hint-container note">
<p class="hint-container-title">注</p>
<p>吐槽：另外 <code v-pre>CSDN</code> 这个平台确实...不过把您练手的博文放在上面这多是一件没事（您说是吧 😏）。</p>
</div>
<h3 id="_3-4-多推送代码" tabindex="-1"><a class="header-anchor" href="#_3-4-多推送代码"><span>3.4.多推送代码</span></a></h3>
<p>我推荐注册一个 <code v-pre>Gitee</code> 账户，并且在 <a href="https://gitee.com/" target="_blank" rel="noopener noreferrer">Gitee 平台</a> 上推送自己的代码作为记录，这点在面试的时候也是加分项，相关的注册和使用可以看这个视频：<a href="https://www.bilibili.com/video/BV1hf4y1W7yT?vd_source=4772b64d7a3cb1873f14bc0153c4de68" target="_blank" rel="noopener noreferrer">Gitee(码云)的注册和代码提交</a>。</p>
<div class="hint-container note">
<p class="hint-container-title">注</p>
<p>您可以看看 <a href="https://gitee.com/limou3434" target="_blank" rel="noopener noreferrer">我的 gitee 主页</a> 中的 <code v-pre>commit</code> 信息，来看看我最近都在学习和做些什么...希望能对您的技术栈有所启发 😊。</p>
</div>
<h3 id="_3-5-多把握节奏" tabindex="-1"><a class="header-anchor" href="#_3-5-多把握节奏"><span>3.5.多把握节奏</span></a></h3>
<p>对于一名“普通”在校大学生的建议节奏就是：以“上网课为主线，看书刷题为副线，博客为顺便”最好</p>
<div class="hint-container note">
<p class="hint-container-title">注</p>
<p>吐槽：当然要根据实际情况而定，万一您学校的老师比较优质呢 😅？</p>
</div>
<h2 id="_4-c-语言的各大标准" tabindex="-1"><a class="header-anchor" href="#_4-c-语言的各大标准"><span>4.C 语言的各大标准</span></a></h2>
<h3 id="_4-1-c-标-的概念" tabindex="-1"><a class="header-anchor" href="#_4-1-c-标-的概念"><span>4.1.“C 标”的概念</span></a></h3>
<p>一门语言需要被其他人拿去沟通，就必须拥有规则的语法体系，例如：汉语中形容词可以修饰一个名词，这是汉语的语法规则。不同语言可能会有相同的规则，也有可能会有不相同的规则。同理，要想要和计算机正常交流，就必须学好 <code v-pre>C</code> 的语法，也就是“<code v-pre>C</code> 标准”。</p>
<p><code v-pre>C</code> 语言在一开始没有标准这一说法，各个公司使用 <code v-pre>C</code> 语言时都采用了不同的标准，于是产生了语言歧义，这个时候就出现了一些关于使用 <code v-pre>C</code> 的标准。</p>
<p>“<code v-pre>C</code> 语言的标准”即“<code v-pre>C</code> 标”，是一种编写代码的约定，“<code v-pre>C</code> 标”让我们能够向计算机更加准确、规范表达我们的需求，一种编程语言的流行是需要一个标准的，否则很可能半途荒废掉。</p>
<div class="hint-container note">
<p class="hint-container-title">注</p>
<p>吐槽：当然，好的语言还要有明显的优势和良好的社区 😊。</p>
</div>
<h3 id="_4-2-c-标-的分类" tabindex="-1"><a class="header-anchor" href="#_4-2-c-标-的分类"><span>4.2.“C 标”的分类</span></a></h3>
<p><code v-pre>C</code> 的标准有很多，常见的有：</p>
<ol>
<li>《<code v-pre>The C Programming Language</code>（<code v-pre>C</code> 语言程序设计）》的第一版是公认的 <code v-pre>C</code> 标准，称为 <code v-pre>K&amp;R C</code> 或“经典 <code v-pre>C</code>”，该书的附录“<code v-pre>C</code> 语言参考手册”是实现 <code v-pre>C</code> 的指导标准。但是这本书只是定义了什么是 <code v-pre>C</code> 语言，并没有定义 <code v-pre>C</code> 库，而 <code v-pre>C</code> 很依赖库，后来的 <code v-pre>UNIX</code> 实现提供的库逐渐变成了标准库（库就是函数库，里面存放了一些库函数，可以被直接调用，用来执行一些简短的任务）。</li>
<li>美国国家标准协会（<code v-pre>ANSI</code>）于 <code v-pre>1983</code> 年组建委员会（<code v-pre>X3J11</code>），在 <code v-pre>1989</code> 年公布了 <code v-pre>ANSI C</code> 标准。而国际标准化组织在 <code v-pre>1990</code> 年采用了这套标准，也叫“<code v-pre>ISO C</code> 标准。因此“<code v-pre>ANSI C</code>”和“<code v-pre>ISO C</code>”实际上是完全相同的标准，“<code v-pre>ANSI/ISO C</code>”的最终版本也就是后来的“<code v-pre>C89</code> 标准”或“<code v-pre>C90</code> 标准”。</li>
<li><code v-pre>C89</code>（也叫 <code v-pre>ANSI C</code>）、<code v-pre>C90</code> 的后继标准还有：<code v-pre>C95</code>、<code v-pre>C99</code>、<code v-pre>C11</code>、<code v-pre>C17</code>……未来也还有更加新的标准，这其实也侧面说明 <code v-pre>C</code> 还是非常流行的（因为仍在不断更新），但可惜只有 <code v-pre>C99</code> 之前的标准才更加流行。</li>
</ol>
<p>这里需要注意，语言标准并不是越新就越好，新标准需要时间的沉淀才能得到大家的认可（尤其是大公司的支持）！</p>
<p>不过其中仍有一些新的特性也值得我们学习，例如：柔性数组、变长数组等，这一部分我们以后再提及。</p>
<p>本系列教程主要使用 <code v-pre>C89</code> 和 <code v-pre>C99</code> 标准的 <code v-pre>C</code>，过新的标准也许会提到一些，这些新标准的内容会注明是何时的标准。</p>
<h2 id="_5-c-语言的代码结构" tabindex="-1"><a class="header-anchor" href="#_5-c-语言的代码结构"><span>5.C 语言的代码结构</span></a></h2>
<p>首先让我们了解一下 <code v-pre>C</code> 语言这类编译型语言的使用步骤：</p>
<ol>
<li>定义程序的目标</li>
<li>在纸上/脑中设计程序</li>
<li>在编译器内编写代码</li>
<li>编译和运行程序</li>
<li>测试和调试代码</li>
<li>维护和修改代码</li>
</ol>
<p>这里只是提及一下，随着语言的深入，您会明白这些步骤的。</p>
<h3 id="_5-1-程序文件结构" tabindex="-1"><a class="header-anchor" href="#_5-1-程序文件结构"><span>5.1.程序文件结构</span></a></h3>
<p>要构成完整的 <code v-pre>C</code> 程序，首先需要有三个文件：</p>
<ol>
<li>一个文件是“头文件（<code v-pre>.h</code> 后缀的文件）”</li>
<li>另外两个文件是“源文件（<code v-pre>.c</code> 后缀的文件）”</li>
</ol>
<p>一般来说，头文件的内容是函数的声明，另外两个源文件的内容分别是函数的定义和 <code v-pre>main()</code> 所在的文件。</p>
<img src="@source/1.编程语言/1.C/assets/image-20231019140053754.png" alt="image-20231019140053754" style="zoom:67%;" />
<div class="hint-container important">
<p class="hint-container-title">重要</p>
<p>补充：什么是函数呢？在编程语言的函数和数学意义上的函数有些许不同，数学意义上的函数更多是一种输入数据和输出数据的关系，但是编程语言的函数不仅仅可以做到这一点，还可以完成一些额外的任务或者动作。</p>
<p>而一个函数需要被定义和声明，“定义”就是定义出函数具体要做的事情，“声明”就是提前告知编译器：“我要使用这个函数了，你注意一下”。</p>
<p>也有人曾经有过一个笑话，“为何日漫里的角色在放大招前要先喊一声招式名？”，我记得评论有人回答“因为要先声明啊”的非常合理非常程序的回答 😄。</p>
</div>
<p>但是，我们先不纠结 <code v-pre>C</code> 程序的文件结构，我们在短时间内先只使用一个源文件来写 <code v-pre>C</code> 代码，这样更好入门，等我们学完函数后再来重新提及文件结构。</p>
<h3 id="_5-2-程序内容结构" tabindex="-1"><a class="header-anchor" href="#_5-2-程序内容结构"><span>5.2.程序内容结构</span></a></h3>
<p>我们先来讲讲单独一个源文件（<code v-pre>.c</code> 后缀文件）内部怎么写 <code v-pre>C</code> 代码，我先给您一份实际的 <code v-pre>C</code> 代码，这份代码里暂时只有一个 <code v-pre>main()</code> 和一个 <code v-pre>printf()</code>：</p>
<div class="language-cpp line-numbers-mode" data-highlighter="shiki" data-ext="cpp" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-cpp"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 源文件内部</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">#</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">include</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> &#x3C;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">stdio.h</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">></span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 包含标准头文件</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">int</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> main</span><span style="--shiki-light:#999999;--shiki-dark:#666666">()</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // main 函数是主函数, 每一个 C 语言代码的入口都在这里</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">    printf</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">hello word</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">\n</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 向屏幕打印一串字符 "hello word", 然后换行  </span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">    return</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 0</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 返回返回值为 0 </span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>注意：以后我们会在这个 <code v-pre>main()</code> 内加入其他的内容。</p>
</div>
<p>这都是什么意思呢？别急，下面会一一解释。</p>
<h4 id="_5-2-1-主函数-main" tabindex="-1"><a class="header-anchor" href="#_5-2-1-主函数-main"><span>5.2.1.主函数 main()</span></a></h4>
<p><code v-pre>main()</code> 叫做作“主函数”，是整个程序的入口，在整个 <code v-pre>C</code> 程序中有且只能有一个。</p>
<p>无论 <code v-pre>C</code> 语言的代码有多少行，都必须要先从 <code v-pre>main()</code> 开始执行，我们看一份 <code v-pre>C</code> 代码的时候，可以选择从 <code v-pre>main()</code> 开始分析代码。</p>
<p>这里需要注意，<code v-pre>mian</code> 函数有多种写法：</p>
<ol>
<li>
<p>第一种：常见的写法（比较多，初学者只需要使用这种就可以）</p>
<div class="language-cpp line-numbers-mode" data-highlighter="shiki" data-ext="cpp" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-cpp"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 常见的写法</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">int</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> main</span><span style="--shiki-light:#999999;--shiki-dark:#666666">()</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  </span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    /* 这里写上其他的 C 代码 */</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">    return</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 0</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>第二种：这种写法过于古老了，不建议使用，但是有的老教材可以看到这种写法</p>
<div class="language-cpp line-numbers-mode" data-highlighter="shiki" data-ext="cpp" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-cpp"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 这种写法过于古老了</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">void</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> main</span><span style="--shiki-light:#999999;--shiki-dark:#666666">()</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  </span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    /* 这里写上其他的 C 代码 */</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">    return</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 0</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> </span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>第三种：也可以的写法（当前系列中很少这么写，但在其他地方很常见）</p>
<div class="language-cpp line-numbers-mode" data-highlighter="shiki" data-ext="cpp" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-cpp"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 也可以的写法</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">int</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> main</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">int</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> argc</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> char*</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> argv</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[],</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> char*</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> env</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[])</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  </span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    /* 这里写上其他的 C 代码 */</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">    return</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 0</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> </span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>第四种：不太推荐的写法</p>
<div class="language-cpp line-numbers-mode" data-highlighter="shiki" data-ext="cpp" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-cpp"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 不太推荐的写法</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">int</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> main</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">void</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  </span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    /* 这里写上其他的 C 代码 */</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">    return</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 0</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> </span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>注意：我在给一些 <code v-pre>C</code> 语言初学者 <code v-pre>debug</code> 的时候，总能遇到下面这些错误，请您查看是否“中招”，实际上这些写多了也就有经验了</p>
<ol>
<li><code v-pre>main</code> 被写成了 <code v-pre>mian</code></li>
<li><code v-pre>main</code> 后边的 <code v-pre>()</code> 漏掉了</li>
<li>代码中不能使用中文符号，比如括号和分号</li>
<li>⼀ 条语句结束后，分号忘记写了</li>
<li>最后的 <code v-pre>return 0</code> 不是 <code v-pre>return ()</code></li>
</ol>
</div>
<h4 id="_5-2-2-打印函数-printf-和标准头文件-stdio-h" tabindex="-1"><a class="header-anchor" href="#_5-2-2-打印函数-printf-和标准头文件-stdio-h"><span>5.2.2.打印函数 printf() 和标准头文件 stdio.h</span></a></h4>
<p>写一个 <code v-pre>C</code> 代码需要使用（或者叫“调用”）很多函数，而一个函数需要有函数声明（告知这个函数是什么，有什么样的参数）和函数定义（这个给函数的具体实现逻辑）才可以被我们使用/调用。</p>
<p>而 <code v-pre>printf()</code> 是 <code v-pre>C</code> 语言已经提前定义好的库函数（不需要我们自己实现），而标准头文件 <code v-pre>stdio.h</code> 则是标准库中的其中一个头文件，内部包含 <code v-pre>printf()</code> 的声明，在代码一开头中写入 <code v-pre>#include &lt;某个头文件.h&gt;</code>，就是写入了 <code v-pre>printf()</code> 的声明。</p>
<p><code v-pre>printf()</code> 可以打印出括号内的内容到控制台上（就是一个黑色的小框框），后面运行代码的时候就可以看到。</p>
<div class="hint-container note">
<p class="hint-container-title">注</p>
<p>吐槽：这里的 <code v-pre>include</code> 的使用就相当于：使用了别人的东西（标准头文件 <code v-pre>stdio.h</code>），需要打个招呼（<code v-pre>#include&lt;stdio.h&gt;</code>），然后才能使用 <code v-pre>printf()</code>。</p>
</div>
<p>在未来我们会学习更多这样的库函数，使用这些库函数也都需要包含对应的头文件。</p>
<h4 id="_5-2-3-返回值-return-0" tabindex="-1"><a class="header-anchor" href="#_5-2-3-返回值-return-0"><span>5.2.3.返回值 return 0</span></a></h4>
<p>简单来说：一个 <code v-pre>C</code> 代码运行成功后程序就会返回一个 <code v-pre>0</code> 值，实际上在 <code v-pre>C</code> 语言中很多函数都具有返回值，这个 <code v-pre>return 0</code> 实际上就是 <code v-pre>main()</code> 函数的返回值。</p>
<h2 id="_6-c-语言的编译运行" tabindex="-1"><a class="header-anchor" href="#_6-c-语言的编译运行"><span>6.C 语言的编译运行</span></a></h2>
<p>通过 [5.C 语言的代码结构](# 5.C 语言的代码结构)，我们得到了第一份 C 语言代码：</p>
<div class="language-cpp line-numbers-mode" data-highlighter="shiki" data-ext="cpp" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-cpp"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 源文件内部</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">#</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">include</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> &#x3C;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">stdio.h</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">></span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 包含标准头文件</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">int</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> main</span><span style="--shiki-light:#999999;--shiki-dark:#666666">()</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // main 函数是主函数，每一个 C 语言代码的入口都在这里</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">    printf</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">hello word</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">\n</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 向屏幕打印一串字符 "hello word", 然后换行  </span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">    return</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 0</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 返回返回值为 0 </span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可是光有代码是不行的，我们要让代码跑起来呀！这就需要通过编译器编译 <code v-pre>C</code> 语言代码了。那么接下来我们怎么编译（也就是翻译成计算机能够识别的机器代码）这个 <code v-pre>C</code> 代码并且运行起来呢？</p>
<p>在不同操作系统上，不同的编译方法有很多。但是我们都需要一个编译器或者 <code v-pre>IDE</code> 软件（<code v-pre>IDE</code> 集合了编辑器、编译器、链接器这些组件我们以后学习 <code v-pre>C</code> 语言的编译链接过程就能明白）</p>
<p>我们先来简单理解一下什么是编译器：<code v-pre>C</code> 语言是给人看懂的，计算机只能读懂二进制。简单来讲，编译器可以把我们写的代码转化为二进制让电脑能够理解（编译器是一名优秀的翻译家，好的编译器能得到更好的翻译，让计算机更好的理解我们的需求，运行代码的效率就更快）</p>
<h3 id="_6-1-windows-下的编译运行" tabindex="-1"><a class="header-anchor" href="#_6-1-windows-下的编译运行"><span>6.1.Windows 下的编译运行</span></a></h3>
<p>在 <code v-pre>Windows</code> 下，常见的编译器软件有：<code v-pre>MSVC</code>、<code v-pre>GCC</code>、<code v-pre>Visual stdio</code> 系列、<code v-pre>code blocks</code>、<code v-pre>Clang</code>、<code v-pre>SUBLIME</code>、<code v-pre>WIN-TC</code>、<code v-pre>Turbo C</code> 等等。</p>
<p>需要注意的是，<code v-pre>VS2022</code> 应该叫集成开发环境（缩写为 <code v-pre>IDE</code>），是编辑器、编译器（例如：<code v-pre>msvc</code>）、调试器等组件的集合开发环境，一体式安装，即装即用，非常适合编程新手。</p>
<p>而最近这几年火的 <code v-pre>VSCode</code> 是个编辑器，不能独自进行编译，但是可以安装插件形成极具个性化的开发工具，但是配置环节能难倒很多编程新手，这里我们只是简单提及一下。</p>
<p>在我的文章系列，有关 <code v-pre>C/C++</code> 的代码编写和运行都是使用的 <code v-pre>Visual stdio 2022</code>，偶尔使用 <code v-pre>VSCode</code> 或者 <code v-pre>gcc</code>，因此我推荐您下载 <code v-pre>Visual stdio 2022</code>，有关于 <code v-pre>Visual stdio 2022</code> 的安装和使用可以到我的另外一篇博文：《<a href="https://blog.csdn.net/m0_73168361/article/details/134495624?csdn_share_tail=%7B%22type%22%3A%22blog%22%2C%22rType%22%3A%22article%22%2C%22rId%22%3A%22134495624%22%2C%22source%22%3A%22m0_73168361%22%7D" target="_blank" rel="noopener noreferrer">安装并使用 VS</a>》。</p>
<div class="hint-container important">
<p class="hint-container-title">重要</p>
<p>补充：如果在使用 <code v-pre>VS2022</code> 的时候出现控制台一闪而过的问题（就是闪过一个黑色小框框），可以试试在 <code v-pre>return 0;</code> 的前面加上 <code v-pre>getchar()</code> 函数。</p>
</div>
<h3 id="_6-2-linux-下的编译运行" tabindex="-1"><a class="header-anchor" href="#_6-2-linux-下的编译运行"><span>6.2.Linux 下的编译运行</span></a></h3>
<p>在 <code v-pre>Linux</code> 下编译代码一般使用 <code v-pre>gcc/g++</code> 编译器，这个我们无需理会。</p>
<p>我相信有很多编程新手的学习机器大都是 <code v-pre>Windows</code> 或者 <code v-pre>MacOS</code> 的电脑，因此如果您想深入了解的话，你必须懂得 <code v-pre>Linux</code> 命令行的操作，可以看看我的 <code v-pre>Linux</code> 博文系列《Linux 系列》，然后再去了解使用 <code v-pre>gcc/g++</code> 编译器。</p>
<h3 id="_6-3-macos-下的编译运行" tabindex="-1"><a class="header-anchor" href="#_6-3-macos-下的编译运行"><span>6.3.MacOS 下的编译运行</span></a></h3>
<p>由于我对 <code v-pre>MacOS</code> 并不太熟悉，您可以查询网络资料，若是以后我更换 <code v-pre>Mac</code> 机器了，我会再回来这里补充推荐...</p>
<div class="hint-container note">
<p class="hint-container-title">注</p>
<p>吐槽：其实我对金钱也不熟悉 😭 贫穷限制了我的想象力...</p>
</div>
</div></template>


