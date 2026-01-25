<template><div><h2 id="_1-shell-的含义" tabindex="-1"><a class="header-anchor" href="#_1-shell-的含义"><span>1.Shell 的含义</span></a></h2>
<p><code v-pre>Shell(外壳)</code> 与 <code v-pre>kernel(内核)</code> 相对应，比喻内核的最外层，用户跟内核交互的对话界面。对 <code v-pre>Shell</code> 的不同使用会产生不同的理解：</p>
<ul>
<li><code v-pre>Shell</code> 是程序，提供一个与用户对话的环境。接收到用户输入的命令，将命令送入操作系统执行，并将结果返回给用户。</li>
<li><code v-pre>Shell</code> 是命令解释器，解释用户输入的命令。支持变量、条件判断、循环操作等语法，所以用户可以用 <code v-pre>Shell</code> 命令写出各种小程序，又称为 <code v-pre>script(脚本)</code>。这些脚本都通过 <code v-pre>Shell</code> 的解释执行，而不通过编译。</li>
<li><code v-pre>Shell</code> 是一个工具箱，提供了各种小工具，供用户方便地使用操作系统的功能。</li>
</ul>
<h2 id="_2-shell-的种类" tabindex="-1"><a class="header-anchor" href="#_2-shell-的种类"><span>2.Shell 的种类</span></a></h2>
<p>历史上主要的 <code v-pre>Shell</code> 有下面这些：</p>
<ul>
<li><code v-pre>Bourne Shell（sh）</code></li>
<li><code v-pre>Bourne Again shell（bash）</code></li>
<li><code v-pre>C Shell（csh）</code></li>
<li><code v-pre>TENEX C Shell（tcsh）</code></li>
<li><code v-pre>Korn shell（ksh）</code></li>
<li><code v-pre>Z Shell（zsh）</code></li>
<li><code v-pre>Friendly Interactive Shell（fish）</code></li>
</ul>
<p><code v-pre>Bash</code> 是目前最常用的 <code v-pre>Shell</code>，本系列文章采用的都是 <code v-pre>bash</code> 作为解释器来展开脚本代码...</p>
<blockquote>
<p>补充：可以理解为 <code v-pre>Bash</code> 是 <code v-pre>Shell</code> 这个概念的一个具体实现的软件，因此 <code v-pre>Shell</code> 对应的软件实现有很多种，您也可以尝试自己写一个 <code v-pre>shell</code> 实现，在我的，不过需要您知道一定的系统接口知识。</p>
</blockquote>
<p>下面的命令可以查看当前系统的默认 <code v-pre>Shell</code>。</p>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-shell"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 查看系统的默认外壳程序</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">$</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> echo</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> $SHELL</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">/bin/bash</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除了默认使用 <code v-pre>bash</code> 除了默认的 <code v-pre>bash</code> 以外，也可以查看系统是否有其他的已经安装好的外壳程序，下面是我的系统显示的结果。</p>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-shell"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 查看系统安装好的外壳程序</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">$</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> cat</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /etc/shells</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">/bin/sh</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">/bin/bash</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">/bin/tcsh</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">/bin/csh</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以直接使用 <code v-pre>tcsh、csh...</code> 切换不同的外壳解释器，因此当前正在使用的 <code v-pre>Shell</code> 不一定是默认的 <code v-pre>Shell</code>，一般来说，<code v-pre>ps</code> 命令结果的倒数第二行是当前的 <code v-pre>Shell</code> 程序。</p>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-shell"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 使用 ps 查看解释器</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">$</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> csh</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> # 切换当前解释器为 csh</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">$</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ps</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">  PID</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> TTY</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">          TIME</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> CMD</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">16818</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> pts/3</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    00:00:00</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> bash</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">28500</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> pts/3</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    00:00:00</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> csh</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> # 这就是当前的解释器</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">28531</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> pts/3</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    00:00:00</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ps</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用户可以通过 <code v-pre>bash</code> 命令的 <code v-pre>--version</code> 参数或者环境变量 <code v-pre>$BASH_VERSION</code>，查看本机的 <code v-pre>Bash</code> 版本。</p>
</div></template>


