<template><div><h2 id="_1-1-栈概念" tabindex="-1"><a class="header-anchor" href="#_1-1-栈概念"><span>1.1.栈概念</span></a></h2>
<h2 id="_1-2-栈接口" tabindex="-1"><a class="header-anchor" href="#_1-2-栈接口"><span>1.2.栈接口</span></a></h2>
<h2 id="_1-3-栈细节" tabindex="-1"><a class="header-anchor" href="#_1-3-栈细节"><span>1.3.栈细节</span></a></h2>
<h2 id="_1-4-栈实现" tabindex="-1"><a class="header-anchor" href="#_1-4-栈实现"><span>1.4.栈实现</span></a></h2>
<h1 id="_2-队列" tabindex="-1"><a class="header-anchor" href="#_2-队列"><span>2.队列</span></a></h1>
<h2 id="_2-1-队列概念" tabindex="-1"><a class="header-anchor" href="#_2-1-队列概念"><span>2.1.队列概念</span></a></h2>
<h2 id="_2-2-队列接口" tabindex="-1"><a class="header-anchor" href="#_2-2-队列接口"><span>2.2.队列接口</span></a></h2>
<h2 id="_2-3-队列细节" tabindex="-1"><a class="header-anchor" href="#_2-3-队列细节"><span>2.3.队列细节</span></a></h2>
<h2 id="_2-4-队列实现" tabindex="-1"><a class="header-anchor" href="#_2-4-队列实现"><span>2.4.队列实现</span></a></h2>
<h1 id="_3-串" tabindex="-1"><a class="header-anchor" href="#_3-串"><span>3.串</span></a></h1>
<h2 id="_3-1-串概念" tabindex="-1"><a class="header-anchor" href="#_3-1-串概念"><span>3.1.串概念</span></a></h2>
<h2 id="_3-2-串接口" tabindex="-1"><a class="header-anchor" href="#_3-2-串接口"><span>3.2.串接口</span></a></h2>
<h2 id="_3-3-串细节" tabindex="-1"><a class="header-anchor" href="#_3-3-串细节"><span>3.3.串细节</span></a></h2>
<p>串最重要的接口莫过于在主串中定位子串的位置，这种定位运算就是串的模式匹配（串匹配），这里简单介绍两种实现。</p>
<h3 id="_3-3-1-bf-算法" tabindex="-1"><a class="header-anchor" href="#_3-3-1-bf-算法"><span>3.3.1.BF 算法</span></a></h3>
<p>暴力匹配的算法。</p>
<div class="language-cpp line-numbers-mode" data-highlighter="shiki" data-ext="cpp" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-cpp"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">//BF 算法</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">#</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">define</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> _CRT_SECURE_NO_WARNINGS</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 1</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">#</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">include</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> &#x3C;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">stdio.h</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">#</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">include</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> &#x3C;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">string.h</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">#</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">include</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> &#x3C;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">stdbool.h</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">#</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">include</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> &#x3C;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">assert.h</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">></span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">bool</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> IsEqual</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">const</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> char*</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> s</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> const</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> char*</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> subS</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">{</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	//避免一开始就传过来空的模式串</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">	assert</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">*</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">subS </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">!=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">\0</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	//一一比较每一个字符</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">	while</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> ((</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">*</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">subS </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">!=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">\0</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> &#x26;&#x26;</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> (</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">*</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">s </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">==</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> *</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">subS</span><span style="--shiki-light:#999999;--shiki-dark:#666666">))</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">	{</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">		s</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">++</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">		subS</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">++</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">		//处理模式字符长度大于主串子串的情况</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">		if</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> ((</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">*</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">subS </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">!=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">\0</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> &#x26;&#x26;</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> (</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">*</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">s </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">==</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">\0</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">))</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">			return</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> false</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">	}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	//相等说明匹配完</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">	return</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> *</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">subS </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">==</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">\0</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">int</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> BF</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">const</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> char*</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> mainS</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> const</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> char*</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> subS</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">{</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">	int</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> mainSSize </span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> strlen</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">mainS</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">	int</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> subSSize </span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> strlen</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">subS</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">	int</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> size </span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> mainSSize </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> subSSize </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">+</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 1</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">	for</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> (</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">int</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> i </span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 0</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> i </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">&#x3C;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> size</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> i</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">++</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">	{</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">		if</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> (</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">IsEqual</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">mainS </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">+</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> i</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> subS</span><span style="--shiki-light:#999999;--shiki-dark:#666666">))</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">		{</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">			return</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> i</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">		}</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">	}</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">	return</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> -</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">1</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">int</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> main</span><span style="--shiki-light:#999999;--shiki-dark:#666666">()</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">{</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">	const</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> char*</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> mainS</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">aaabcd</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> //主串</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">	const</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> char*</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> subS </span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">abcd</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> //模式串</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">	int</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> index </span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> BF</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">mainS</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> subS</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> //暴力匹配</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">	printf</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">%d\n</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> index</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> //得出主串中对于的索引值 </span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">	return</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 0</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-2-kmp-算法" tabindex="-1"><a class="header-anchor" href="#_3-3-2-kmp-算法"><span>3.3.2.KMP 算法</span></a></h3>
<table>
<thead>
<tr>
<th><span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>K</mi><mi>M</mi><mi>P</mi></mrow><annotation encoding="application/x-tex">KMP</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.07153em;">K</span><span class="mord mathnormal" style="margin-right:0.13889em;">MP</span></span></span></span></th>
<th>a</th>
<th>b</th>
<th>a</th>
<th>b</th>
<th>a</th>
<th>a</th>
<th>a</th>
<th>b</th>
<th>a</th>
<th>b</th>
<th>a</th>
<th>a</th>
</tr>
</thead>
<tbody>
<tr>
<td><span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>P</mi><msub><mi>M</mi><mi>i</mi></msub><mo separator="true">,</mo><mtext>且</mtext><mi>i</mi><mo>∈</mo><mo stretchy="false">[</mo><mn>0</mn><mo separator="true">,</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy="false">]</mo></mrow><annotation encoding="application/x-tex">PM_i, \text{且}i \in [0, n-1]</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8778em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">P</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.10903em;">M</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:-0.109em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord text"><span class="mord cjk_fallback">且</span></span><span class="mord mathnormal">i</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">[</span><span class="mord">0</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">n</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">1</span><span class="mclose">]</span></span></span></span></td>
<td><span style="color:#FF0000;">0</span></td>
<td><span style="color:#FF0000;"> 0 </span></td>
<td><span style="color:#FF0000;"> 1 </span></td>
<td><span style="color:#FF0000;"> 2 </span></td>
<td><span style="color:#FF0000;">3</span></td>
<td><span style="color:#FF0000;">1</span></td>
<td><span style="color:#FF0000;">1</span></td>
<td><span style="color:#FF0000;">2</span></td>
<td><span style="color:#FF0000;">3</span></td>
<td><span style="color:#FF0000;">4</span></td>
<td><span style="color:#FF0000;">5</span></td>
<td><span style="color:#FF0000;">6</span></td>
</tr>
<tr>
<td><span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mtext>写法一</mtext><mo>:</mo><mi>n</mi><mi>e</mi><mi>x</mi><mi>t</mi><msub><mn>1</mn><mi>i</mi></msub><mo>=</mo><mi>P</mi><msub><mi>M</mi><mrow><mi>i</mi><mo>−</mo><mn>1</mn></mrow></msub><mo separator="true">,</mo><mtext>且</mtext><mi>n</mi><mi>e</mi><mi>x</mi><mi>t</mi><msub><mn>1</mn><mn>0</mn></msub><mo>=</mo><mo>−</mo><mn>1</mn></mrow><annotation encoding="application/x-tex">\text{写法一}: next1_i = PM_{i-1}, \text{且} next1_0=-1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord text"><span class="mord cjk_fallback">写法一</span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">:</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.7944em;vertical-align:-0.15em;"></span><span class="mord mathnormal">n</span><span class="mord mathnormal">e</span><span class="mord mathnormal">x</span><span class="mord mathnormal">t</span><span class="mord"><span class="mord">1</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8917em;vertical-align:-0.2083em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">P</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.10903em;">M</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:-0.109em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">i</span><span class="mbin mtight">−</span><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2083em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord text"><span class="mord cjk_fallback">且</span></span><span class="mord mathnormal">n</span><span class="mord mathnormal">e</span><span class="mord mathnormal">x</span><span class="mord mathnormal">t</span><span class="mord"><span class="mord">1</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">−</span><span class="mord">1</span></span></span></span></td>
<td>-1</td>
<td><span style="color:#FF0000;">0</span></td>
<td><span style="color:#FF0000;"> 0 </span></td>
<td><span style="color:#FF0000;"> 1 </span></td>
<td><span style="color:#FF0000;"> 2 </span></td>
<td><span style="color:#FF0000;">3</span></td>
<td><span style="color:#FF0000;">1</span></td>
<td><span style="color:#FF0000;">1</span></td>
<td><span style="color:#FF0000;">2</span></td>
<td><span style="color:#FF0000;">3</span></td>
<td><span style="color:#FF0000;">4</span></td>
<td><span style="color:#FF0000;">5</span></td>
</tr>
<tr>
<td><span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mtext>写法二</mtext><mo>:</mo><mi>n</mi><mi>e</mi><mi>x</mi><mi>t</mi><msub><mn>2</mn><mi>i</mi></msub><mo>=</mo><mi>n</mi><mi>e</mi><mi>x</mi><mi>t</mi><msub><mn>1</mn><mi>i</mi></msub><mo>+</mo><mn>1</mn></mrow><annotation encoding="application/x-tex">\text{写法二}: next2_i = next1_i + 1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord text"><span class="mord cjk_fallback">写法二</span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">:</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.7944em;vertical-align:-0.15em;"></span><span class="mord mathnormal">n</span><span class="mord mathnormal">e</span><span class="mord mathnormal">x</span><span class="mord mathnormal">t</span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.7944em;vertical-align:-0.15em;"></span><span class="mord mathnormal">n</span><span class="mord mathnormal">e</span><span class="mord mathnormal">x</span><span class="mord mathnormal">t</span><span class="mord"><span class="mord">1</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span></td>
<td><span style="color:#FF00FF;">0</span></td>
<td><span style="color:#FF00FF;"> 1</span></td>
<td><span style="color:#FF00FF;">1</span></td>
<td><span style="color:#FF00FF;">2</span></td>
<td><span style="color:#FF00FF;">3</span></td>
<td><span style="color:#FF00FF;">4</span></td>
<td><span style="color:#FF00FF;">2</span></td>
<td><span style="color:#FF00FF;">2</span></td>
<td><span style="color:#FF00FF;">3</span></td>
<td><span style="color:#FF00FF;">4</span></td>
<td><span style="color:#FF00FF;">5</span></td>
<td><span style="color:#FF00FF;">6</span></td>
</tr>
<tr>
<td><span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mtext>根据</mtext><mi>n</mi><mi>e</mi><mi>x</mi><mi>t</mi><msub><mn>2</mn><mi>i</mi></msub><mtext>值得对应字符, 找到不匹配的字符</mtext></mrow><annotation encoding="application/x-tex">\text{根据} next2_i \text{值得对应字符, 找到不匹配的字符}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8778em;vertical-align:-0.1944em;"></span><span class="mord text"><span class="mord cjk_fallback">根据</span></span><span class="mord mathnormal">n</span><span class="mord mathnormal">e</span><span class="mord mathnormal">x</span><span class="mord mathnormal">t</span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mord text"><span class="mord cjk_fallback">值得对应字符</span><span class="mord">, </span><span class="mord cjk_fallback">找到不匹配的字符</span></span></span></span></span></td>
<td>null</td>
<td><span style="color:#FFFF00;">a</span></td>
<td>a</td>
<td>b</td>
<td>a</td>
<td><span style="color:#FFFF00;">b</span></td>
<td><span style="color:#FFFF00;">b</span></td>
<td>b</td>
<td>a</td>
<td>b</td>
<td>a</td>
<td>a</td>
</tr>
<tr>
<td><span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mtext>不匹配字符直接落下, 匹配字符直接拷贝</mtext></mrow><annotation encoding="application/x-tex">\text{不匹配字符直接落下, 匹配字符直接拷贝}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8778em;vertical-align:-0.1944em;"></span><span class="mord text"><span class="mord cjk_fallback">不匹配字符直接落下</span><span class="mord">, </span><span class="mord cjk_fallback">匹配字符直接拷贝</span></span></span></span></span></td>
<td><span style="color:#FF00FF;">0</span></td>
<td><span style="color:#FFFF00;">1</span></td>
<td><span style="color:#00FF00;">0</span></td>
<td><span style="color:#00FF00;">1</span></td>
<td><span style="color:#00FF00;">0</span></td>
<td><span style="color:#FFFF00;">4</span></td>
<td><span style="color:#FFFF00;">2</span></td>
<td><span style="color:#00FF00;">1</span></td>
<td><span style="color:#00FF00;">0</span></td>
<td><span style="color:#00FF00;">1</span></td>
<td><span style="color:#00FF00;">0</span></td>
<td><span style="color:#00FF00;">4</span></td>
</tr>
</tbody>
</table>
<figure><img src="@source/2.数构算法/1.数据结构/assets/image-20240107130702748.png" alt="image-20240107130702748" tabindex="0" loading="lazy"><figcaption>image-20240107130702748</figcaption></figure>
<h2 id="_3-4-串实现" tabindex="-1"><a class="header-anchor" href="#_3-4-串实现"><span>3.4.串实现</span></a></h2>
<h1 id="_4-实践" tabindex="-1"><a class="header-anchor" href="#_4-实践"><span>4.实践</span></a></h1>
<h2 id="_4-1-栈" tabindex="-1"><a class="header-anchor" href="#_4-1-栈"><span>4.1.栈</span></a></h2>
<h3 id="_4-1-1-逆波兰表达式" tabindex="-1"><a class="header-anchor" href="#_4-1-1-逆波兰表达式"><span>4.1.1.逆波兰表达式</span></a></h3>
<h3 id="_4-1-2-双栈" tabindex="-1"><a class="header-anchor" href="#_4-1-2-双栈"><span>4.1.2.双栈</span></a></h3>
<h3 id="_4-1-3-递归与非递归转化" tabindex="-1"><a class="header-anchor" href="#_4-1-3-递归与非递归转化"><span>4.1.3.递归与非递归转化</span></a></h3>
<p v-pre class='katex-block'><span class="katex-error" title="ParseError: KaTeX parse error: Unknown column alignment: e at position 37: …\begin{array}{le̲ft}
n + 1, m = …" style="color:#cc0000">Ack(m, n) = 
\left\{
\begin{array}{left}
n + 1, m = 0\\
Ack(m-1, 1), m \neq 0 \text{且} n = 0 \\
Ack(m - 1, Ack(m, n - 1)), m \neq 0 \text{且} n \neq 0\\
\end{array}
\right.
</span></p>
<p>用递归和非递归的方式写出上述函数的对应算法。</p>
<h4 id="_4-1-3-1-斐波那契数列" tabindex="-1"><a class="header-anchor" href="#_4-1-3-1-斐波那契数列"><span>4.1.3.1.斐波那契数列</span></a></h4>
<h4 id="_4-1-3-2-青蛙跳荷叶问题" tabindex="-1"><a class="header-anchor" href="#_4-1-3-2-青蛙跳荷叶问题"><span>4.1.3.2.青蛙跳荷叶问题</span></a></h4>
<h4 id="_4-1-3-3-汉诺塔问题" tabindex="-1"><a class="header-anchor" href="#_4-1-3-3-汉诺塔问题"><span>4.1.3.3.汉诺塔问题</span></a></h4>
<h3 id="_4-1-4-数制转化" tabindex="-1"><a class="header-anchor" href="#_4-1-4-数制转化"><span>4.1.4.数制转化</span></a></h3>
<h3 id="_4-1-5-括号匹配问题" tabindex="-1"><a class="header-anchor" href="#_4-1-5-括号匹配问题"><span>4.1.5.括号匹配问题</span></a></h3>
<h3 id="_4-1-6-栈模拟队列" tabindex="-1"><a class="header-anchor" href="#_4-1-6-栈模拟队列"><span>4.1.6.栈模拟队列</span></a></h3>
<h2 id="_4-2-队列" tabindex="-1"><a class="header-anchor" href="#_4-2-队列"><span>4.2.队列</span></a></h2>
<h3 id="_4-2-1-队列模拟栈" tabindex="-1"><a class="header-anchor" href="#_4-2-1-队列模拟栈"><span>4.2.1.队列模拟栈</span></a></h3>
</div></template>


