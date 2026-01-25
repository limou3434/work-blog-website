<template><div><h2 id="_1-浏览器的现有商家" tabindex="-1"><a class="header-anchor" href="#_1-浏览器的现有商家"><span>1.浏览器的现有商家</span></a></h2>
<p>现在主流的浏览器主要由 <code v-pre>Chrome、Edge/IE、Firefox、Safari、Opera</code> 这五款浏览器，其中笔者对 <code v-pre>Chrome</code> 使用的时间较久。</p>
<h2 id="_2-浏览器的主要功能" tabindex="-1"><a class="header-anchor" href="#_2-浏览器的主要功能"><span>2.浏览器的主要功能</span></a></h2>
<p>浏览器的主要功能是从服务器请求您选择的 <code v-pre>Web</code> 资源，并将其显示在浏览器窗口中。资源通常是 <code v-pre>HTML</code> 文档，但也可能是 <code v-pre>PDF</code>、图片或其他类型的内容。资源的位置由用户使用 <code v-pre>URI</code>（统一资源标识符）指定。</p>
<p><code v-pre>HTML</code> 和 <code v-pre>CSS</code> 规范中指定了浏览器解读和显示 <code v-pre>HTML</code> 文件的方式。这些规范由 <code v-pre>W3C, 万维网联盟</code> 组织维护，该组织是网络标准组织。多年来，浏览器仅遵循了部分规范，并开发了自己的扩展程序。这给网站作者带来了严重的兼容性问题。目前，大多数浏览器或多或少都符合规范。</p>
<p>浏览器界面有很多共同之处。常见的界面元素包括：</p>
<ul>
<li>用于插入 <code v-pre>URI</code> 的地址栏</li>
<li>“返回”和“前进”按钮</li>
<li>书签选项</li>
<li>用于刷新或停止加载当前文档的“刷新”和“停止”按钮</li>
<li>用于前往首页的主屏幕按钮</li>
</ul>
<p>奇怪的是，浏览器的界面并未在任何正式规范中指定，而是来自多年经验形成的良好做法，以及浏览器相互模仿的结果。<code v-pre>HTML5</code> 规范未定义浏览器必须具备的界面元素，但列出了一些常见元素。其中包括地址栏、状态栏和工具栏。当然，有些功能是特定浏览器独有的。</p>
<h2 id="_3-浏览器的工作流程" tabindex="-1"><a class="header-anchor" href="#_3-浏览器的工作流程"><span>3.浏览器的工作流程</span></a></h2>
<ul>
<li>
<p>浏览器会解析三个文件。</p>
<ul>
<li>
<p><code v-pre>HTML/SVG/XHTML</code> 文件，事实上，<code v-pre>Webkit</code> 有三个 <code v-pre>Cpp</code> 的类对应这三类文档，解析这三种文件会产生一个 <code v-pre>DOM Tree</code></p>
</li>
<li>
<p><code v-pre>CSS</code> 文件，解析 <code v-pre>CSS</code> 会产生 <code v-pre>CSS Rule Tree</code>，实际上建立 <code v-pre>CSS Rule Tree</code> 是需要比照着 <code v-pre>DOM Tree</code> 来的</p>
</li>
<li>
<p><code v-pre>JS</code> 文件，主要是通过 <code v-pre>DOM API</code> 和 <code v-pre>CSSOM API</code> 来操作 <code v-pre>DOM Tree</code> 和 <code v-pre>CSS Rule Tree</code></p>
</li>
</ul>
</li>
<li>
<p>解析完成后，浏览器引擎会通过 <code v-pre>DOM Tree</code> 和 <code v-pre>CSS Rule Tree</code> 来构造渲染树 <code v-pre>Render Tree</code>。</p>
<ul>
<li>
<p><code v-pre>Render Tree</code> 并不等同于 <code v-pre>DOM Tree</code>，因为一些像 <code v-pre>&lt;head&gt; </code>或 <code v-pre>display:none</code> 的东西就没必要放在 <code v-pre>Render Tree</code> 中了，反正都是写不用显示出来的东西</p>
</li>
<li>
<p><code v-pre>CSS Rule Tree</code> 主要是为了完成匹配并把 <code v-pre>CSS Rule</code> 附加上<code v-pre>Render Tree</code> 上的每个 <code v-pre>Element</code></p>
</li>
<li>
<p>然后计算每个 <code v-pre>Element</code> 的位置，这又叫 <code v-pre>layout</code> 布局过程和 <code v-pre>reflow</code> 回流过程</p>
</li>
</ul>
</li>
<li>
<p>最后通过调用操作系统 <code v-pre>Native GUI</code> 的 <code v-pre>API</code> 绘制。</p>
</li>
</ul>
<div class="hint-container important">
<p class="hint-container-title">重要</p>
<p>补充：<a href="https://github.com/WebKit/WebKit" target="_blank" rel="noopener noreferrer">WebKit</a> 是一个跨平台的浏览器引擎库，早期被大多数浏览器所使用，虽然 <code v-pre>WebKit</code> 仍然是 <code v-pre>Safari</code> 的渲染引擎，但 <code v-pre>Google</code> 在 <code v-pre>2013</code> 年从 <code v-pre>WebKit</code> 分叉出了 <a href="https://www.chromium.org/blink/#" target="_blank" rel="noopener noreferrer">Blink</a>，并用于 <code v-pre>Chrome、Edge</code> 中（也就是 <code v-pre>Chromium</code> 内核）等浏览器。因此，现在的 <code v-pre>Chrome</code> 和 <code v-pre>Edge</code> 已经不再使用 <code v-pre>WebKit</code>，而是基于 <code v-pre>Blink</code>。</p>
</div>
<div class="hint-container important">
<p class="hint-container-title">重要</p>
<p>补充：布局过程和回流过程的区别很大。</p>
<ul>
<li><strong>布局过程</strong>：<mark>计算元素的尺寸和位置</mark>，例如：宽度、高度、边距、内边距、边框等。确定每个元素在页面上的具体位置，即确定它们的坐标。布局过程是基于 <code v-pre>Render Tree</code> 计算所有可见元素的位置和大小。在这一步骤中，浏览器计算元素的坐标（左上角的位置），并为其分配空间。布局过程发生在页面渲染时，通常是在回流过程中进行的。</li>
<li><strong>回流过程</strong>：<mark>回流是布局过程的再计算</mark>，在页面中的元素几何信息发生变化时触发。它会导致重新计算布局，更新元素的位置、尺寸等信息。触发回流的操作包括：a.改变元素的大小（例如宽高、内外边距） b.<code v-pre>DOM</code> 结构的变化（比如添加、删除元素） c.窗口大小变化 d.改变元素的位置属性（例如 <code v-pre>position</code>、<code v-pre>top</code>、<code v-pre>left</code>） e.获取布局信息，如 <code v-pre>offsetWidth</code>、<code v-pre>offsetHeight</code> 等。但性能开销较大，尤其是在大规模 <code v-pre>DOM</code> 操作时，回流会影响到页面的渲染效率。</li>
</ul>
</div>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>警告：<code v-pre>CSS</code> 匹配 <code v-pre>HTML</code> 元素是一个相当复杂和有性能问题的事情。所以，您会在 <code v-pre>N</code> 多地方看到很多人都告诉您，<code v-pre>DOM</code> 树要小，<code v-pre>CSS</code> 尽量用 <code v-pre>id</code> 和 <code v-pre>class</code>，千万不要过度层叠下去。</p>
</div>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>警告：多次的回流是浏览器性能的瓶颈之一，在某些场景下，会导致浏览器卡死，一般来说，浏览器会把样式修改这样的操作积攒一批，然后做一次 <code v-pre>reflow</code>，这又叫异步 <code v-pre>reflow</code> 或增量异步 <code v-pre>reflow</code>。但是有些操作无法避免，例如修改窗口的大小。</p>
<p>因此在现代浏览器编写中，通常都会做以下的优化：</p>
<ul>
<li>不一条一条地修改 <code v-pre>DOM</code> 的样式。与其这样，还不如预先定义好 <code v-pre>CSS</code> 的 <code v-pre>class</code>，然后修改 <code v-pre>DOM</code> 的 <code v-pre>className</code>（这在一些框架中也叫动态绑定）。</li>
<li>把 <code v-pre>DOM</code> 离线后修改。比如使用 <code v-pre>documentFragment</code> 对象在内存里操作 <code v-pre>DOM</code>，先把 <code v-pre>DOM</code> 给 <code v-pre>display:none</code>（有一次 <code v-pre>reflow</code>），然后想怎么改就怎么改。比如修改 <code v-pre>100</code> 次，然后再把他显示出来。亦或者 <code v-pre>clone</code> 一个 <code v-pre>DOM</code> 结点到内存里，然后想怎么改就怎么改，改完后，和在线的那个的交换一下。</li>
<li>不要把 <code v-pre>DOM</code> 结点的属性值放在一个循环里当成循环里的变量，不然这会导致大量地读写这个结点的属性。为了避免频繁读写 <code v-pre>DOM</code> 属性，我们可以将需要修改的属性值先缓存到一个变量中，进行批量修改后再应用到 <code v-pre>DOM</code> 上。</li>
<li>尽可能的修改层级比较低的 <code v-pre>DOM</code>。当然，改变层级比较底的 <code v-pre>DOM</code> 有有可能会造成大面积的 <code v-pre>reflow</code>，但是也可能影响范围很小。</li>
<li>为动画的 <code v-pre>HTML</code> 元件使用 <code v-pre>fixed</code> 或 <code v-pre>absoult</code> 的 <code v-pre>position</code>，那么修改他们的 <code v-pre>CSS</code> 是不会 <code v-pre>reflow</code> 的。因为这类元素的定位行为与普通流式布局的元素不同，它们的布局过程在文档流中是独立的，不会影响其他元素的排版和布局。</li>
<li>千万不要使用 <code v-pre>table</code> 布局。因为可能很小的一个小改动会造成整个 <code v-pre>table</code> 的重新布局，性能较差，另外丧失了语义性。</li>
</ul>
<p>存在一些工具可以检测回流的情况以优化性能，例如 <code v-pre>Google</code> 的 <code v-pre>Speed Tracer</code>。</p>
</div>
<h2 id="_4-浏览器的渲染引擎" tabindex="-1"><a class="header-anchor" href="#_4-浏览器的渲染引擎"><span>4.浏览器的渲染引擎</span></a></h2>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> https://web.dev/articles/howbrowserswork?hl=zh-cn</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> https://arvindr21.github.io/howBrowserWorks/#/</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" disabled="disabled"><label class="task-list-item-label" for="task-item-2"> https://taligarsiel.com/Projects/howbrowserswork1.htm#Communication_between_the_components</label></li>
</ul>
</div></template>


