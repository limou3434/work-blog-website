<template><div><h2 id="_1-编译环境的概念" tabindex="-1"><a class="header-anchor" href="#_1-编译环境的概念"><span>1.编译环境的概念</span></a></h2>
<p>在学习 <code v-pre>C</code> 语言之前，我们需要一个能写代码的环境，就像是用电脑写文章、小说一样，你必须有一个类似 <code v-pre>WPS</code> 一样的软件编写 <code v-pre>word</code> 文档吧？写代码也是一样的，需要有个编译器来写代码和运行代码（<code v-pre>C</code> 语言是给人看懂的，计算机只能读懂二进制，编译器把我们写的代码转化为二进制让电脑能够理解）。</p>
<div class="hint-container important">
<p class="hint-container-title">重要</p>
<p>补充：常见的编译器有 <code v-pre>MSVC</code>、<code v-pre>GCC</code>、<code v-pre>Visual Studio</code> 系列、<code v-pre>Clang</code>、<code v-pre>SUBLIME</code>、<code v-pre>WIN-TC</code>、<code v-pre>Turbo C</code>、<code v-pre>CodeBlocks</code> 等等。</p>
</div>
<p>但是对于新手来说，选择一个用来写代码的编译器并不容易，操作稍有不慎，就会出现各种奇怪的提示窗口。所以对于初学者来说，还是十分推荐使用 <code v-pre>IDE</code> 类型的软件（即 <a href="https://baike.baidu.com/item/%E9%9B%86%E6%88%90%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83/298524" target="_blank" rel="noopener noreferrer">集成开发环境</a>）。之所以选择方便的编译器，是因为这个阶段最重要的是语法学习，而不是鼓捣开发环境的各种东西。</p>
<p><code v-pre>Visual Studio 2022</code> 就是这种类型的编程软件，简单来说，编译器被包含在 <code v-pre>IDE</code> 里面，有 <code v-pre>IDE</code> 类型的软件你就可以开始写代码啦（即装即用，对新手更加友好）。但是以后的学习中也可以自己尝试不依赖 <code v-pre>IDE</code> 类型的软件，开始使用别的编译器试试看，不过那是后话了。</p>
<div class="hint-container important">
<p class="hint-container-title">重要</p>
<p>补充：其实 <code v-pre>VS 2022</code> 应该叫集成开发环境（缩写为 <code v-pre>IDE</code>），而不是编译器，它内部集合了编辑器、编译器（例如 <code v-pre>msvc</code>）、调试器的重要组件。而另外一个软件 <code v-pre>Visual Studio Code</code> 只是一个编辑器，需要安装插件，否则不能独自编译。</p>
</div>
<h2 id="_2-编译环境的选择" tabindex="-1"><a class="header-anchor" href="#_2-编译环境的选择"><span>2.编译环境的选择</span></a></h2>
<h3 id="_2-1-vs2022-的初步了解" tabindex="-1"><a class="header-anchor" href="#_2-1-vs2022-的初步了解"><span>2.1.VS2022 的初步了解</span></a></h3>
<ol>
<li>
<p><code v-pre>VS</code> 的优点：<code v-pre>VS</code> 全名是 <code v-pre>Visual Studio</code>，它其实不是存粹的编译器，而是集成开发环境（<code v-pre>IDE</code>，即：<code v-pre>Integrated Development Environment</code> ）一下载就可以上手，对新手友好，不需要配置太多环境，有比较美化的代码风格，并且有中文版，方便后期代码调试（支持大概 <code v-pre>95%</code> 左右的 <code v-pre>C</code> 标准吧，以下为 <code v-pre>VS</code> 的软件编写代码的截图）。其中，强大的调试能力是 <code v-pre>VS2022</code> 的特点</p>
<img src="@source/1.编程语言/1.C/assets/70200abab7d140bc930c93ee1b667fed.gif" alt="在这里插入图片描述" style="zoom: 50%;" />
</li>
<li>
<p><code v-pre>VS</code> 的缺点：磁盘空间占用大（大概需要 <code v-pre>10G</code>，如果只是为了学习 <code v-pre>C</code> 语言的话，是不需要下载 <code v-pre>VS</code> 所有功能的，可以择取一些板块进行下载。并且最好是放在 <code v-pre>C</code> 盘，预防未来出现不知名的错误。记得给自己的盘符预留好足够大的磁盘空间，此外还需要有良好的电脑使用习惯，不过这个事情就跑题了）。</p>
</li>
</ol>
<h3 id="_2-2-为什么不选择其他的软件呢" tabindex="-1"><a class="header-anchor" href="#_2-2-为什么不选择其他的软件呢"><span>2.2.为什么不选择其他的软件呢？</span></a></h3>
<ol>
<li><code v-pre>VC6.0</code>：是 <code v-pre>98</code> 年的 <code v-pre>IDE</code> 软件，已经停止更新了，老旧并且兼容性差</li>
<li><code v-pre>Dev C++</code>：<code v-pre>10</code> 多年前（现在 <code v-pre>2023</code> 年）就停止更新了，内部的代码风格不美观，也不利于代码风格培养</li>
<li><code v-pre>CodeBlocks</code>：有些学校在用，但是不够主流比较小众，需要手动配置环境，但用着还算不错（这也是我大学初学时接触的第二款 <code v-pre>C</code> 的 <code v-pre>IDE</code>）</li>
<li><code v-pre>Visual Studio Code</code>：需要配置环境（本质上是个编辑器）还有选择并且安装较多的插件，对新手不太友好</li>
<li><code v-pre>Clion</code>：非常好用，但是收费，对于初学者来说暂时没必要</li>
<li>其他：你是老手就直接用 <code v-pre>GCC</code>、<code v-pre>clang</code> 这些编译器来学习 <code v-pre>C</code> 语言，这样能免除关于 <code v-pre>IDE</code> 软件界面的交互学习，但这对新手不太友好...</li>
</ol>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>注意：其实编译器只要用的足够熟悉就可以，刚开始学习 <code v-pre>C</code> 语言的时候倒也没必要多纠结，顺手就行，只是最好不要太过老旧...</p>
</div>
<h2 id="_3-编译环境的安装-保姆级教学" tabindex="-1"><a class="header-anchor" href="#_3-编译环境的安装-保姆级教学"><span>3.编译环境的安装（保姆级教学）</span></a></h2>
<div class="hint-container important">
<p class="hint-container-title">重要</p>
<p>补充：这里写到前头，还有一个视频版的教程，您如果不喜欢看具体文字，想要跟着操作，还可以查看这个 <a href="https://www.bilibili.com/video/BV11R4y1s7jz/" target="_blank" rel="noopener noreferrer">安装视频</a>。</p>
</div>
<h3 id="_3-1-检查电脑版本" tabindex="-1"><a class="header-anchor" href="#_3-1-检查电脑版本"><span>3.1.检查电脑版本</span></a></h3>
<p>通过快捷键 <code v-pre>[win（那个有点像田字格的微软图标）+R]</code>，输入 <code v-pre>cmd</code> 来打开控制台（也可以在电脑搜索“命令提示符”或者 <code v-pre>cmd</code> 来找到）。</p>
<img src="@source/1.编程语言/1.C/assets/17917f923f80412783dee81985b61c7e.png" alt="在这里插入图片描述" style="zoom:50%;" />
<p>于是电脑屏幕出现类似这样的界面：</p>
<img src="@source/1.编程语言/1.C/assets/827f9a03e7754721ac7621bc94c713a0.png" alt="在这里插入图片描述" style="zoom:67%;" />
<p>输入 <code v-pre>systeminfo</code>，稍后会以文字形式展示系统信息。</p>
<img src="@source/1.编程语言/1.C/assets/87c6829ea0594aa19df32edb4c3e3df1.png" alt="在这里插入图片描述" style="zoom:67%;" />
<p>或者在控制台中输入 <code v-pre>winver</code>，这个时候就会弹出一个窗口</p>
<img src="@source/1.编程语言/1.C/assets/7bb8238a1666488188d5577e44e585ca.png" alt="在这里插入图片描述" style="zoom:67%;" />
<img src="@source/1.编程语言/1.C/assets/92ccc5e9c6f646d7a5b6a564aa3c342a.png" alt="在这里插入图片描述" style="zoom:50%;" />
<p>然后进入 <a href="https://learn.microsoft.com/zh-cn/visualstudio/releases/2022/system-requirements" target="_blank" rel="noopener noreferrer">VS 官网</a> 查看对于 <code v-pre>VS2022</code> 的系统要求，然后进行对比，选择最合适自己的版本。</p>
<div class="hint-container important">
<p class="hint-container-title">重要</p>
<p>补充：如果想下载其他版本的 <code v-pre>VS</code> 其实也可以，功能其实也差不多。不过这里也不再详细介绍其他版本的下载了。</p>
</div>
<h3 id="_3-2-下载安装包" tabindex="-1"><a class="header-anchor" href="#_3-2-下载安装包"><span>3.2.下载安装包</span></a></h3>
<p>首先用浏览器（我一直用的是微软自带的 <code v-pre>Microsoft Edge</code>，其他的也可以）进入安装链接：<a href="https://visualstudio.microsoft.com/zh-hans/vs/" target="_blank" rel="noopener noreferrer">VS 官网</a>，打开网址如下（不要进错网站啦，这个软件是免费的！）。</p>
<img src="@source/1.编程语言/1.C/assets/cc398e552f7544989839c7c18482ee1e.png" alt="在这里插入图片描述" style="zoom:50%;" />
<p>点击上方“下载”按钮（不过点这里只能下载最新 <code v-pre>VS</code> 的，如果您的系统比较老旧，需要在官网选择其他的版本下载），然后下载 <code v-pre>Visual Studio Community</code> 即：“<code v-pre>VS</code> 社区版”（社区版是完全免费的）。</p>
<p>下载好安装包后，打开安装包，点击安装包即可开始进行下载。</p>
<figure><img src="@source/1.编程语言/1.C/assets/53f6384650f841c98262e65ac872b549.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="_3-3-选择安装选项" tabindex="-1"><a class="header-anchor" href="#_3-3-选择安装选项"><span>3.3.选择安装选项</span></a></h3>
<p>点击安装包后就会进入 <code v-pre>VS</code> 的下载界面，在下载的过程中，可能有些选项需要选择。</p>
<img src="@source/1.编程语言/1.C/assets/0894ba5e1d014774858e3eedf9899846.png" alt="在这里插入图片描述" style="zoom:67%;" />
<p>点击继续，开始下载，等待进度条。</p>
<img src="@source/1.编程语言/1.C/assets/890c4808ea814d96ae7b000b0fe81205.png" alt="在这里插入图片描述" style="zoom:50%;" />
<p>进度条走完后，会有一些设置（选择得当可以减少 <code v-pre>VS</code> 在电脑中的内存占比）。</p>
<figure><img src="@source/1.编程语言/1.C/assets/a84715a0038c436a962edf59a40b6a0c.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol>
<li>“工作负荷”的“桌面应用与移动运用”中选择“使用 <code v-pre>C++</code> 的桌面开发”</li>
<li>其中“路径”改 <code v-pre>D</code> 盘当然可以，但是最好放在 <code v-pre>C</code> 盘，避免使用不稳定</li>
<li>左边的“安装详细信息”也不需要改，建议直接默认就行</li>
<li>看清楚安装“要求的总空间”有多少，看自己的盘符空间够不够用</li>
</ol>
<p>开始下载，并且勾选“安装后启动”选项。</p>
<img src="@source/1.编程语言/1.C/assets/483c11013dc04681b3ac89f9dfc69316.png" alt="在这里插入图片描述" style="zoom:67%;" />
<h3 id="_3-4-重启电脑" tabindex="-1"><a class="header-anchor" href="#_3-4-重启电脑"><span>3.4.重启电脑</span></a></h3>
<p>等待下载成功并且重启电脑，就可以看到会出现这样的图标（没出现的话也可以在电脑中直接搜索 <code v-pre>Visual Studio 2022</code>）</p>
<figure><img src="@source/1.编程语言/1.C/assets/701521d639114cf8809bd734a60914a2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="_3-5-创建账户登录" tabindex="-1"><a class="header-anchor" href="#_3-5-创建账户登录"><span>3.5.创建账户登录</span></a></h3>
<p>社区版登录后 <code v-pre>VS</code> 就是完全免费的（不登陆免费 <code v-pre>30</code> 天）我们创建一个账户就可以。</p>
<img src="@source/1.编程语言/1.C/assets/0a3f7f9933514d019530795012ab30aa.png" alt="在这里插入图片描述" style="zoom:67%;" />
<h3 id="_3-6-颜色配置" tabindex="-1"><a class="header-anchor" href="#_3-6-颜色配置"><span>3.6.颜色配置</span></a></h3>
<ol>
<li>开发设置：改成 <code v-pre>Visual C++</code> 即可</li>
<li>颜色主题：看个人的喜好就行（个人推荐深色，不伤眼…）</li>
<li>点击“启动 Visual Studio（S)”按钮</li>
</ol>
<img src="@source/1.编程语言/1.C/assets/fa65bc3d753e4f0390bf82b6a7f019f2.png" alt="在这里插入图片描述" style="zoom:50%;" />
<h3 id="_3-7-vs-启动" tabindex="-1"><a class="header-anchor" href="#_3-7-vs-启动"><span>3.7.VS！启动~</span></a></h3>
<p>等待初次启动完毕（初次启动可能会有点慢），开始书写写我们的第一份 <code v-pre>C</code> 语言文件</p>
<ol>
<li>
<p>点击“创建新项目”。</p>
<img src="@source/1.编程语言/1.C/assets/ca8ef7e9d72d4e768d7f1d36b183827d.png" alt="在这里插入图片描述" style="zoom:50%;" />
</li>
<li>
<p>搜索“空项目”，并点击“空项目”，然后点击“下一步”。</p>
<img src="@source/1.编程语言/1.C/assets/12f058dbb07e4614b822ccd8c2966b16.png" alt="在这里插入图片描述" style="zoom: 50%;" />
</li>
<li>
<p>更改“项目的名称”（尽量使用英文）和“路径”（要保证自己找得到就行，比如创建一个文件夹，以后一直都放在这个文件夹里，这一次演示可以暂时放在“桌面”上。</p>
<img src="@source/1.编程语言/1.C/assets/52d4d53e9a534f2e8177d9cbf5e3f7b1.png" alt="在这里插入图片描述" style="zoom:50%;" />
</li>
<li>
<p>进入 <code v-pre>VS</code> 的界面</p>
<img src="@source/1.编程语言/1.C/assets/b29e5dc0c9254dc098e5501c3c54f8b2.png" alt="在这里插入图片描述" style="zoom:50%;" />
</li>
<li>
<p>右击右侧“解决方案资源管理器”中的“源文件”，点击“添加”，选择“新建项”，添加一个源文件（即后缀为 <code v-pre>.c</code> 的文件）。另外，由于我的 <code v-pre>VS</code> 装了一些小插件，所以才有“清理已选代码”这一选项，刚下载的 <code v-pre>VS</code> 是没有这个选项的，这些拓展插件以后在别的文章里面也会简单介绍几个。</p>
<img src="@source/1.编程语言/1.C/assets/3b49c49c0c4d414f8fd2c8777adf7711.png" alt="在这里插入图片描述" style="zoom:50%;" />
</li>
<li>
<p>选择“<code v-pre>C++</code> 文件”修改头文件后缀 <code v-pre>.cpp</code> 为 <code v-pre>.c</code>（这是因为 <code v-pre>.cpp</code> 文件是用于 <code v-pre>C++</code> 的 <code v-pre>.c</code> 文件是用于 <code v-pre>C</code> 语言的）。并且修改该头文件的名字，例如：我用了 <code v-pre>main</code> 作为源文件的名字（想叫其他名字的也可以的，但同样最好是英文名字）</p>
<img src="@source/1.编程语言/1.C/assets/c797fb4c100d4da9b64ea3ae48176e94.png" alt="在这里插入图片描述" style="zoom:50%;" />
</li>
<li>
<p>工作区出现行号和光标，可以开始编写第一段代码啦！</p>
<img src="@source/1.编程语言/1.C/assets/d858b0c418de4ddc98082c575baaf90a.png" alt="在这里插入图片描述" style="zoom:50%;" />
</li>
<li>
<p>以下是上述代码片段，可以复制下来运行试试（先别着急理解)</p>
<div class="language-cpp line-numbers-mode" data-highlighter="shiki" data-ext="cpp" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-cpp"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 测试代码</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">#</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">include</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">&#x3C;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">stdio.h</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">></span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">int</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> main</span><span style="--shiki-light:#999999;--shiki-dark:#666666">()</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">{</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">	printf</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">hello word</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">	return</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 0</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>运行程序，点击 <code v-pre>[F5]</code> 或者 <code v-pre>[fn+F5]</code> 或者 <code v-pre>[fn+shift+F5]</code> 等（不同电脑可能快捷键不一样）运行程序，也可以点击 VS 界面最上方的“绿色播放键”按钮，就可以运行程序。</p>
<img src="@source/1.编程语言/1.C/assets/9f00abd5375f4023a93f8508ae06b4c1.png" alt="在这里插入图片描述" style="zoom: 80%;" />
</li>
<li>
<p>运行结果显示</p>
<img src="@source/1.编程语言/1.C/assets/cd8ffbbedca14479bf92bfa8e0df2e95.png" alt="在这里插入图片描述" style="zoom:50%;" />
</li>
<li>
<p>程序运行完后，按任意键可以关闭程序（即现在跳出来的窗口），当然除了一些比较特殊的按键，比如“关机键”什么的...按个空格什么的就行了啦！</p>
</li>
</ol>
</div></template>


