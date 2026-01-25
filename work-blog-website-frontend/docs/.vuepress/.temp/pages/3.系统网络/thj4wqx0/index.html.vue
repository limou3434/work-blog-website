<template><div><h2 id="_1-前提基础" tabindex="-1"><a class="header-anchor" href="#_1-前提基础"><span>1.前提基础</span></a></h2>
<p>本教程实际上是阅读 <a href="https://0xax.gitbooks.io/linux-insides/content/Booting/linux-bootstrap-1.html" target="_blank" rel="noopener noreferrer">这篇著名的内核启动教程</a>，作者很爱好底层逻辑。</p>
<p>常见的汇编语法主要分为两大体系：<strong>Intel 语法</strong> 和 <strong>AT&amp;T 语法</strong>，两者在指令格式、操作数顺序、寄存器命名等方面有显著差异。</p>
<ol>
<li><strong>Intel 语法</strong> 由 <code v-pre>Intel</code> 公司定义，广泛用于 <code v-pre>x86/x86-64</code> 架构的汇编程序（如 <code v-pre>MASM、NASM、FASM</code> 等），<code v-pre>Windows</code> 平台的汇编开发多采用此语法。核心特点：
<ul>
<li>操作数顺序：<strong>目标操作数在前，源操作数在后</strong>（如 <code v-pre>mov eax, 123</code> 表示将 <code v-pre>123</code> 存入 <code v-pre>eax</code> 寄存器）。</li>
<li>寄存器命名：直接使用寄存器名（如 <code v-pre>eax</code>、<code v-pre>ebx</code>），无需前缀。</li>
<li>立即数：直接写数值（如 <code v-pre>123</code>、<code v-pre>0x1A</code>），无需前缀。</li>
<li>内存寻址：使用 <code v-pre>[ ]</code> 表示内存地址（如 <code v-pre>mov eax, [ebx]</code> 表示从 <code v-pre>ebx</code> 指向的内存地址读取数据到 eax）。</li>
<li>指令前缀：段寄存器使用 <code v-pre>:</code> 分隔（如 <code v-pre>mov eax, ds:[ebx]</code>）。</li>
</ul>
</li>
<li><strong>AT&amp;T 语法</strong> 由 <code v-pre>AT&amp;T</code> 公司定义，最初用于 <code v-pre>Unix</code> 系统，现在是 <code v-pre>GNU</code> 工具链（如 <code v-pre>gas、gcc</code> 生成的汇编）的默认语法，在 <code v-pre>Linux、macOS</code> 等类 <code v-pre>Unix</code> 系统中广泛使用。核心特点：
<ul>
<li>操作数顺序：<strong>源操作数在前，目标操作数在后</strong>（与 <code v-pre>Intel</code> 相反，如 <code v-pre>movl $123, %eax</code> 表示将 123 存入 eax 寄存器）。</li>
<li>寄存器命名：必须加 <code v-pre>%</code> 前缀（如 <code v-pre>%eax</code>、<code v-pre>%ebx</code>）。</li>
<li>立即数：必须加 <code v-pre>$</code> 前缀（如 <code v-pre>$123</code>、<code v-pre>$0x1A</code>）。</li>
<li>内存寻址：使用 <code v-pre>( )</code> 表示内存地址，且格式为 <code v-pre>偏移量(基址寄存器, 索引寄存器, 比例因子)</code>（如 <code v-pre>movl 4(%ebx), %eax</code> 表示从 <code v-pre>ebx + 4</code> 指向的内存地址读取数据到 <code v-pre>eax</code>）。</li>
<li>指令后缀：通过后缀指定操作数长度（如 <code v-pre>movb</code> 表示字节操作，<code v-pre>movw</code> 表示字操作，<code v-pre>movl</code> 表示双字操作，<code v-pre>movq</code> 表示四字操作）。</li>
<li>段寄存器：使用 <code v-pre>%</code> 前缀，且通过 <code v-pre>%segreg:</code> 表示（如 <code v-pre>movl %ds:(%ebx), %eax</code>）。</li>
</ul>
</li>
</ol>
<h2 id="_2-开机启动" tabindex="-1"><a class="header-anchor" href="#_2-开机启动"><span>2.开机启动</span></a></h2>
<p>虽然这是一系列关于 <code v-pre>Linux</code> 内核的文章，但我们不会直接从内核代码入手。当你按下笔记本电脑或台式电脑的电源按钮时，它就开始工作了。主板会向 <a href="https://en.wikipedia.org/wiki/Power_supply" target="_blank" rel="noopener noreferrer">电源</a> 设备发送信号。电源接收到信号后，会为电脑提供适量的电力。主板接收到 <a href="https://en.wikipedia.org/wiki/Power_good_signal" target="_blank" rel="noopener noreferrer">电源正常信号</a> 后，会尝试启动 <code v-pre>CPU</code>。<code v-pre>CPU</code> 会重置其寄存器中的所有残留数据，并为每个寄存器设置预定义的值。</p>
<p><a href="https://en.wikipedia.org/wiki/Intel_80386" target="_blank" rel="noopener noreferrer">80386</a> 及更高版本的 CPU 在计算机复位后，会在 CPU 寄存器中定义以下预定义数据：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-"><span class="line"><span>IP          0xfff0</span></span>
<span class="line"><span>CS selector 0xf000</span></span>
<span class="line"><span>CS base     0xffff0000</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-初始操作" tabindex="-1"><a class="header-anchor" href="#_3-初始操作"><span>3.初始操作</span></a></h2>
<h2 id="_4-中断机制" tabindex="-1"><a class="header-anchor" href="#_4-中断机制"><span>4.中断机制</span></a></h2>
<h2 id="_5-系统调用" tabindex="-1"><a class="header-anchor" href="#_5-系统调用"><span>5.系统调用</span></a></h2>
<h2 id="_6-时间管理" tabindex="-1"><a class="header-anchor" href="#_6-时间管理"><span>6.时间管理</span></a></h2>
<h2 id="_7-同步原语" tabindex="-1"><a class="header-anchor" href="#_7-同步原语"><span>7.同步原语</span></a></h2>
<h2 id="_8-内存管理" tabindex="-1"><a class="header-anchor" href="#_8-内存管理"><span>8.内存管理</span></a></h2>
</div></template>


