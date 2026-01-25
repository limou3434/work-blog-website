<template><div><blockquote>
<p>注意：请先保证您对 <code v-pre>C</code> 语言有足够的了解，这里的“了解”指您应当做到以下事情：</p>
<ol>
<li>熟悉大部分的 <code v-pre>C</code> 语言语法，至少需要知道 <code v-pre>C89/99</code> 的所有基本语法，例如：指针、数组、结构体...总之就是越熟悉越好</li>
<li>熟悉库内的一些常见库函数，例如：<code v-pre>string.h</code>、<code v-pre>assert.h</code>、<code v-pre>stdio.h</code>、<code v-pre>stdlib.h</code>，尤其是关于动态内存申请的 <code v-pre>malloc()</code>、<code v-pre>free()</code>、<code v-pre>calloc()</code> 等函数，它们会充斥整个初阶数据结构系列文章</li>
<li>拥有一个优秀且强大的代码运行调试环境，您必须足够熟悉一些调试方法，懂得查看监视窗口来：调试代码、寻找 <code v-pre>bug</code>、修正 <code v-pre>bug</code>...</li>
<li>请完整看完本节先导文章，我会告诉您：为什么要做某一些事情、接下来要做什么、怎么去做...</li>
</ol>
</blockquote>
<p>[TOC]</p>
<h1 id="_1-数据结构和算法的意义" tabindex="-1"><a class="header-anchor" href="#_1-数据结构和算法的意义"><span>1.数据结构和算法的意义</span></a></h1>
<p>我必须提一下，数据结构和算法并不好学（如果您只是需要通过考试，那大概率很简单，您只需要知道一些操作，无需过度深入细节，就通过某些相关课程的考核，当然视情况而定）。</p>
<p>如果说编程语言让我们学会了“写字”，那么组织代码就需要我们学习一些写作框架（数据结构），还需要我们学习优秀的修辞手法（算法）。</p>
<p>可以说，数据结构和算法是编码学习的第一个拐点，只有踏过数据结构和算法（下文都简称为 <code v-pre>DSA</code>）这一“拐点”，才有精进一步的可能。</p>
<blockquote>
<p>补充：本文关于拐点的说法来自于这篇文章《<a href="https://blog.thefirehoseproject.com/posts/learn-to-code-and-be-self-reliant/" target="_blank" rel="noopener noreferrer">The Key To Accelerating Your Coding Skills</a>》，您也可以去寻找它的一些翻译版本《<a href="https://learnku.com/articles/74764" target="_blank" rel="noopener noreferrer">提高编码技能的关键</a>》</p>
</blockquote>
<p>您应该可以感觉到，学习编程语言到后期时，实际会越来越轻松，您只需经过 <code v-pre>1</code> 到 <code v-pre>2</code> 个月的时间差不多就可以上手一门语言了（有的语言甚至会更快），但是学到数据结构和算法就会出现明显的停滞状态，这个时期很容易出现“放弃”的心态。</p>
<p>但是一旦通过这个拐点，您一定会得到以下的成长：</p>
<ol>
<li>编程语言语法的深刻理解，我们对一些语法规则会更加记忆深刻</li>
<li>可以实现一些简单的算法，分析并且解决一些实际问题，并且可以进行一定程度的优化</li>
<li>调试技巧，在编写数据结构框架和一些算法时，类似指针越界、差一问题...的错误会经常陪伴着你，会逼迫您深入学习调试技巧</li>
<li>...</li>
</ol>
<p><strong>再强调一下，如果您下定决心要走向编程与开发的道路，请不要放弃，相信我，您会得到提升的！</strong></p>
<h1 id="_2-数据结构和算法的内容" tabindex="-1"><a class="header-anchor" href="#_2-数据结构和算法的内容"><span>2.数据结构和算法的内容</span></a></h1>
<p>这个网站的思维导图您值得一看，会让您清楚即将要学习的内容：<a href="https://www.bitejiuyeke.com/path?key=dsh" target="_blank" rel="noopener noreferrer">DSA 学习大纲</a>，里面提及的内容在在最后的学习规划中也有所体现。</p>
<h1 id="_3-数据结构和算法的资源" tabindex="-1"><a class="header-anchor" href="#_3-数据结构和算法的资源"><span>3.数据结构和算法的资源</span></a></h1>
<p>这里我会推荐一些资源，并且进行不定时的更新，您可以先概览一下...</p>
<h2 id="_3-1-书籍" tabindex="-1"><a class="header-anchor" href="#_3-1-书籍"><span>3.1.书籍</span></a></h2>
<p>这里推荐一些书籍供您查阅，需要注意的是，有些书籍并不适合您仔细阅读，而需要您作为科普类书籍查看即可。</p>
<h3 id="_3-1-1-入门" tabindex="-1"><a class="header-anchor" href="#_3-1-1-入门"><span>3.1.1.入门</span></a></h3>
<p>上面这两本书个人觉得作为入门科普书籍还是不错的，图文并茂：</p>
<ol>
<li>《小黑的漫画算法》</li>
<li>《大话数据结构》</li>
</ol>
<p>前一本我只看过一半，没看下去的原因是我看的是电子版本，有部分缺失内容，并且太简略了。后一本我完整看过一遍，稍微详细了一些，但是书内的代码一言难尽（看不懂代码不要硬看，因为书内的代码比较一般，学习起来很费劲）。</p>
<p>记住，这两本书您简单作为科普书看一看即可，只需要摸索一下大概的框架，心里有底就行，不必过于较真。</p>
<h3 id="_3-1-2-初学" tabindex="-1"><a class="header-anchor" href="#_3-1-2-初学"><span>3.1.2.初学</span></a></h3>
<p>上面的书籍还是太过于</p>
<ol>
<li>《<a href="https://book.douban.com/subject/24699581/" target="_blank" rel="noopener noreferrer">数据结构（C 语言版）</a>》：国内的很多大学教材都会先从数学化的定义和抽象的描述来编写 <code v-pre>DSA</code> 的知识，并且有大量的伪代码，这种教材设计对于初学者来说，很容易会出现知其意不知其所然的情况（经典的看不懂也写不出代码），这本书有实际的代码，但是描述也还是有些抽象，不过值得一看</li>
<li>《<a href="https://book.douban.com/subject/19952400/" target="_blank" rel="noopener noreferrer">算法（第 4 版）</a>》</li>
</ol>
<p>有了上述的理论知识，就可以开始深入“造轮子”了，注意不是看完再“造”，而是边看边“造”。</p>
<h3 id="_3-1-3-深入" tabindex="-1"><a class="header-anchor" href="#_3-1-3-深入"><span>3.1.3.深入</span></a></h3>
<p>这个阶段赶紧去学习面向对象的语言！入门阶段过去了就需要开始过渡一些比较高级的 DSA 了，这些纯 <code v-pre>C</code> 实现起来颇为复杂和“恶心”，容易消化不良。</p>
<p><code v-pre>C++</code> 或 <code v-pre>Java</code> 都可以，不过本系列文章主要还是面向 <code v-pre>C++</code> 学习者的，还是推荐您使用 <code v-pre>C++</code> 来学习本系列的文章。</p>
<p>等学习完 <code v-pre>C++</code> 的基础语法后，再开始看我的高级 <code v-pre>DSA</code>。</p>
<p>如果您看过我的文章结构，就可以发现：我将 <code v-pre>C</code> 语言学习和初阶 <code v-pre>DSA</code> 混合在一起，并且将 <code v-pre>C++</code> 语法学习和高级 <code v-pre>DSA</code> 混杂在一起，我认为这样学习起来会比较连贯一些，您顺序看下去就行。</p>
<p>还要推荐几本书，属于比较晦涩的书：</p>
<ol>
<li>《剑指 offer》</li>
<li>《STL 源码剖析》</li>
<li>《算法（第 4 版）》</li>
</ol>
<h2 id="_3-2-网站" tabindex="-1"><a class="header-anchor" href="#_3-2-网站"><span>3.2.网站</span></a></h2>
<h3 id="_3-2-1-刷题网站" tabindex="-1"><a class="header-anchor" href="#_3-2-1-刷题网站"><span>3.2.1.刷题网站</span></a></h3>
<ol>
<li><a href="https://leetcode.com/" target="_blank" rel="noopener noreferrer">力扣（国外版）</a></li>
<li><a href="https://leetcode.cn/" target="_blank" rel="noopener noreferrer">力扣（国内版）</a></li>
</ol>
<h3 id="_3-2-2-可视化网站" tabindex="-1"><a class="header-anchor" href="#_3-2-2-可视化网站"><span>3.2.2.可视化网站</span></a></h3>
<ol>
<li><a href="https://www.cs.usfca.edu/~galles/visualization/Algorithms.html" target="_blank" rel="noopener noreferrer">Data Structure Visualizations</a></li>
<li><a href="https://blog.csdn.net/weixin_42208959/article/details/108065466" target="_blank" rel="noopener noreferrer">visualgo</a></li>
<li><a href="http://btv.melezinek.cz/home.html" target="_blank" rel="noopener noreferrer">BinaryTreeVisualiser</a></li>
<li><a href="https://yangez.github.io/btree-js/" target="_blank" rel="noopener noreferrer">btree-js</a></li>
<li><a href="https://algorithm-visualizer.org/backtracking/hamiltonean-cycles" target="_blank" rel="noopener noreferrer">Algorithm Visualizer</a></li>
<li><VPLink href="">bigocheatsheet</VPLink></li>
</ol>
<h2 id="_3-3-课程" tabindex="-1"><a class="header-anchor" href="#_3-3-课程"><span>3.3.课程</span></a></h2>
<p>暂时还没有，等待补充...</p>
<h1 id="_4-数据结构和算法的规划" tabindex="-1"><a class="header-anchor" href="#_4-数据结构和算法的规划"><span>4.数据结构和算法的规划</span></a></h1>
<p>本系列文章是基于 <code v-pre>C/C++</code> 语言的，因此我们将编程语言和数据结构进行了耦合，您会在学习数据结构和算法的过程中同时学习 <code v-pre>C++</code> 的一些语法，以及关于 <code v-pre>STL</code> 的使用（但是说这些还是太早了）。</p>
<p>在学习初阶数据结构的时候，我向您保证不会用到 <code v-pre>C++</code> 的语法，尽可能使用纯 <code v-pre>C</code> 来编写代码。而只有涉及到高阶数据结构和算法的时候，我才会使用 <code v-pre>C++</code> 来编写代码。</p>
<p>您短期内关于数据结构和算法的大致学习路线如下：</p>
<Mermaid code="eJxtUU1L60AU3edXDFk8fIgLfe9tH9S0XbnTXXEhgrgQBBHcplJLYhu/SrEYaxs/moI01g+0k1b9Mc6dSVb9C96ZUUFwN3PvPfece87K2vrW8urSxiZZyBpGpmBCr8No21wkRoZMTf0nswWTxeUkvOD1PvciMazxsxIcVUV0zO/rcBnyzrY4KUF5ByIqYbMKZuGmkQ1hRZxWxDZltCNuvTe7mNptFvvJcwS9A/xC8URENnj19LwxAU4zbTxm5zO/zUXD0mumC2YaxBDvJ0FXwmsv+ECaX8SaKZi87chiowXOMT7Y4E63/mCr3hfDkqSgr4y6X6i/EnUoh+Mq7Lv6De2y7v7DbuuKuy+owLCmFY1aqKBqQunK4nm7PncvwHlC6XDpKdMMI6vauU8f0+Y5HBzCDU1uA3QpueklXZtYk5M4m9OjeKE2WJaJtLIVi8DGUfR3PKqy4R6xSPJaFOEQnL4Go5Ic3v8dSOYX5ghGwwY2epxeN9BNTYqbJKG8JzejaPOfCrn/gOp5U4b4Y8QTetFHLHmNRtG8G/BKC6IzsdfXkiX/eORoMxitgOvJc5ymiEOC+PHIVcrzqFwvRfd1BQODmgODqv5iSEAfMYnU18HkMRjwZSrvhrBeiw=="></Mermaid></div></template>


