<template><div><h2 id="_1-stl-的简介" tabindex="-1"><a class="header-anchor" href="#_1-stl-的简介"><span>1.STL 的简介</span></a></h2>
<h3 id="_1-1-stl-的概念" tabindex="-1"><a class="header-anchor" href="#_1-1-stl-的概念"><span>1.1.STL 的概念</span></a></h3>
<p><code v-pre>STL</code>(<code v-pre>standard template libaray</code> 即：“标准模板库”)是 <code v-pre>C++</code> 标准库的重要组成部分，不仅是一个可复用的组件库，也是一个包罗数据结构与算法的软件框架，是当之无愧的大师之作。</p>
<h3 id="_1-2-stl-的版本" tabindex="-1"><a class="header-anchor" href="#_1-2-stl-的版本"><span>1.2.STL 的版本</span></a></h3>
<ol>
<li>
<p><strong>原始版本</strong>：<code v-pre>Alexander Stepanov</code>、<code v-pre>Meng Lee</code> 两人在惠普实验室完成了 <code v-pre>STL</code> 的原始版本，本着开源精神，他们声明允许任何人任意运用、拷贝、修改、传播、商业使用这些代码，无需付费。唯一的条件就是也需要向原始版本一样做开源使用。原始版本也叫 <code v-pre>HP</code> 版本，是所有 <code v-pre>STL</code> 实现版本的始祖。</p>
</li>
<li>
<p><strong>P.J. 版本</strong>：由 <code v-pre>P.J.Plauger</code> 开发，继承自 <code v-pre>HP</code> 版本，被 <code v-pre>Windows Visual C++</code> 采用，不能公开或修改。缺陷是，可读性比较低，符号命名比较怪异。</p>
</li>
<li>
<p><strong>RW 版本</strong>：由 <code v-pre>Rouge Wage</code> 公司开发，继承自 <code v-pre>HP</code> 版本，被 <code v-pre>C++ Builder</code> 采用，不能公开或修改，可读性一般（该编译器后来被微软的 <code v-pre>VS</code> 打败，已经没落）。</p>
</li>
<li>
<p><strong>SGI 版本</strong>：由 <code v-pre>Silicon Graphics Computer Systems</code>，<code v-pre>Inc</code> 公司开发，继承自 <code v-pre>HP</code> 版本。被 <code v-pre>GCC(Linux)</code> 采用，可移植性好，可公开、修改甚至贩卖，从命名风格和编程风格上看，可读性非常高。后面学习 <code v-pre>STL</code> 如果需要阅读部分源代码，主要参考的就是这个版本。</p>
</li>
</ol>
<h2 id="_2-stl-的六大组件" tabindex="-1"><a class="header-anchor" href="#_2-stl-的六大组件"><span>2.STL 的六大组件</span></a></h2>
<p><code v-pre>STL</code> 可以划分为六个组件：</p>
<Mermaid code="eJx9UstO4zAU3ecrIi9G7oLmD0Yq5bEYRjM8dhaqrNQUizQJtlvEDhAINjwWIMQSISRYUCHBhhbEz5CW/gXXt02bQmETX597zj0nV64oHq+6cwtOgZHFpblOa7d9cEKWXafgTkz8dicZSRpPycXNECoy8v5699a6QrQPTjHS3dppH11nwWlG3lqvyf5L++x+AM4w0mmctx/OBsgsILfN7vljd++w89LoTXAmsbco1msi9EWpGIWGy1AoDU6XzaR53MtFU4Y7ZORAP0aIA+vCN5GitHd6ZUvzAqlNLpd6FrSOfMmNrI/aJnsP79unyXPqnOF9Mh8/AYdrYSiFj1flMVj+wKzWAiORnlYeFj1hP+tAUyqUeWwwZ3+ZWzuwT8jp0QHJTUk25FcpTvwD8Qz31zxYTE2A0ze8v5TGSkZKms1SSnWK2JJA4rBdRtIKXs8v149CbUoW0tgcvSNFiTr4DPWj98wU29AiwxwL23c0hZH+M5L5K280uaVNI62iBActI/0CHQOhYav2a4kzSJxnZEWGZZrz9AaP4cCkWlggUgaOqlAVkc/nrWYWNf8YD4LIt8GWnQ/O+0wx"></Mermaid><blockquote>
<p>补充：“容器”实际上就是 <code v-pre>C++</code> 的“数据结构”。</p>
</blockquote>
<h2 id="_3-stl-的学习境界" tabindex="-1"><a class="header-anchor" href="#_3-stl-的学习境界"><span>3.STL 的学习境界</span></a></h2>
<ol>
<li>
<p>能熟用 <code v-pre>STL</code> 语法</p>
</li>
<li>
<p>明白 <code v-pre>STL</code> 的底层原理</p>
</li>
<li>
<p>能够根据需求来自主拓展、扩充 <code v-pre>STL</code></p>
</li>
</ol>
<h2 id="_4-stl-的缺陷" tabindex="-1"><a class="header-anchor" href="#_4-stl-的缺陷"><span>4.STL 的缺陷</span></a></h2>
<p>下面是 <code v-pre>[2020]</code> 年前的结论，未来的 <code v-pre>C++</code> 可能会解决这些缺陷...</p>
<ol>
<li>
<p>更新速度：这里值得吐槽的是 <code v-pre>STL</code> 的更新速度，比较靠谱的上一版本是 <code v-pre>C++98</code>，<code v-pre>C++03</code> 是一些基本修订，<code v-pre>13</code> 年后 <code v-pre>C++11</code> 才推出，<code v-pre>STL</code> 才得以进一步更新</p>
</li>
<li>
<p>线程安全：<code v-pre>STL</code> 到现在都没有支持线程安全，并发环境下需要自己加锁，而且锁的粒度比较大</p>
</li>
<li>
<p>过于效率：<code v-pre>STL</code> 太追求效率了，导致内部比较复杂，例如：类型萃取、迭代器萃取等</p>
</li>
<li>
<p>代码膨胀：<code v-pre>STL</code> 的使用会有代码膨胀的问题，这是模板语法本身导致的</p>
</li>
</ol>
<h2 id="_5-stl-的学习规划" tabindex="-1"><a class="header-anchor" href="#_5-stl-的学习规划"><span>5.STL 的学习规划</span></a></h2>
<p>之后我会带您了解 <code v-pre>STL(C++98)</code> 的重要容器，并在所有容器都大致讲解完毕后，补充一些 <code v-pre>C++11</code> 的语法知识，然后讲解 <code v-pre>STL(C++98)</code> 和 <code v-pre>STL(C++11)</code> 的差别...</p>
</div></template>


