<template><div><h2 id="数据索引" tabindex="-1"><a class="header-anchor" href="#数据索引"><span>数据索引</span></a></h2>
<h3 id="数据结构的角度" tabindex="-1"><a class="header-anchor" href="#数据结构的角度"><span>数据结构的角度</span></a></h3>
<ul>
<li><strong>B+ 树索引</strong>：通过树形结构存储数据，适用于范围查询（如 <code v-pre>BETWEEN</code>）和精确查询（如 <code v-pre>=</code>），支持有序数据的快速查找、排序、聚合操作。是 <code v-pre>MySQL</code> 默认的索引类型，常用于 <code v-pre>InnoDB</code> 和 <code v-pre>MyISAM</code> 引擎。</li>
<li><strong>哈希索引</strong>：基于哈希表的结构，适用于等值查询（如 <code v-pre>=</code>），查询速度非常快，但不支持范围查询（如 <code v-pre>&gt;</code>、<code v-pre>&lt;</code>）。哈希索引不存储数据的顺序，常用于 <code v-pre>Memory</code> 引擎。</li>
<li><strong>倒排索引/全文索引</strong>：用于全文搜索，将全文分词，通过存储词与文档的映射，支持模糊匹配和关键字搜索。特别适合用于大文本字段，如 <code v-pre>TEXT</code> 类型的列，用于查找包含特定词语的记录。</li>
<li><strong>R- 树索引/多维空间树</strong>：专为多维空间数据（如地理坐标）设计，适用于空间查询（例如，计算地理位置的最近距离、区域查询等）。常用于存储和查询地理信息系统（GIS）中的空间数据。</li>
</ul>
<div class="hint-container important">
<p class="hint-container-title">重要</p>
<p>补充：<code v-pre>B+</code> 树把所有的实际数据都存储在深度都一样的叶子节点上，而其他内部节点只存储索引，所有的叶子节点之间通过指针组成一个有序列表。</p>
<p>通常在 <code v-pre>B+</code> 树上有两个指针头，一个指向根节点，另一个指向关键字最小的叶子节点。</p>
<p>基于上述两个指针和链表，就可以支持范围查询和随机查询。</p>
<p>而一颗 <code v-pre>B+</code> 树的节点一般如下：</p>
<div class="language-cpp line-numbers-mode" data-highlighter="shiki" data-ext="cpp" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-cpp"><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">struct</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994"> InternalNode</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">    int</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> keys</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">N</span><span style="--shiki-light:#999999;--shiki-dark:#666666">];</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 最多 N 个键/索引, 超出需修改树的结构(分裂操作)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    Node</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">*</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> children</span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">N </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">+</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 1</span><span style="--shiki-light:#999999;--shiki-dark:#666666">];</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 指向子节点的指针</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">    int</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> key_count</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> // 关键字/实际内容</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">};</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果对应到数据库中，具体的分裂操作过程可以 <a href="https://blog.csdn.net/weixin_52622200/article/details/118530154" target="_blank" rel="noopener noreferrer">看这篇博文</a>，非常详细。</p>
</div>
<h3 id="是否聚蔟的角度" tabindex="-1"><a class="header-anchor" href="#是否聚蔟的角度"><span>是否聚蔟的角度</span></a></h3>
<ul>
<li><strong>聚簇索引</strong>：<code v-pre>InnoDB</code> 中主键索引就是聚簇索引，它基于主键排序存储，之所以叫聚簇索引是因为索引的叶子节点存储完整数据行数据。聚簇索引适合进行大范围查询和排序操作，因为叶子节点存储的是完整的数据行，可以方便地进行范围扫描和按顺序读取。</li>
<li><strong>非聚簇索引</strong>：<code v-pre>InnoDB</code> 中非主键索引的索引，之所以称之为非聚簇是因为这个索引的叶子节点仅保存索引字段和主键值。如果要查询完整的数据行中的数据，需要再从聚簇索引即主键索引中通过主键查询，一个表可以有多个非聚簇索引。</li>
</ul>
<div class="hint-container important">
<p class="hint-container-title">重要</p>
<p>补充：在 <code v-pre>InnoDB</code> 里聚簇索引就是主键索引，非聚簇索引指的是非主键索引（辅助索引、二级索引），默认情况下它们都是 <code v-pre>B+</code> 树实现的。例如通过姓名仅查询 <code v-pre>id</code> 的话，直接利用姓名索引就能得到 <code v-pre>id</code> 数据。如果图方便直接用 <code v-pre>select *</code>，那就不得不通过 <code v-pre>id</code> 再去主键索引查找不需要的性别和地址，浪费资源，且可能伴随着很多随机 <code v-pre>I/O</code>。</p>
<p>而通过二级索引查找得到 <code v-pre>id</code> ，再去主键索引查询记录的这个过程叫回表，一般做回表的效率会更加高一些。</p>
</div>
<h3 id="索引性质的角度" tabindex="-1"><a class="header-anchor" href="#索引性质的角度"><span>索引性质的角度</span></a></h3>
<ul>
<li><strong>主键索引</strong>：表中的每一行数据都有唯一的主键。每个表只能有一个主键索引，且主键值不能为 <code v-pre>NULL</code>，<code v-pre>InnoDB</code> 中主键索引是聚簇索引结构实现的，其实指定主键就会自动生成。</li>
<li><strong>唯一索引</strong>：保证索引列中的值是唯一的，可以有效防止重复数据的插入。唯一索引允许 <code v-pre>NULL</code> 值，但一个列中可以有多个 <code v-pre>NULL</code>，其实指定唯一键就会自动生成。</li>
<li><strong>普通索引/二级索引/辅助索引</strong>：一般指非主键索引且非唯一索引，不要所有查询都用 <code v-pre>select *</code> ，因为如果本来只需要查询索引列数据的话，直接利用二级索引就能得到所要的数据。</li>
<li><strong>联合索引</strong>：由多个列组成的索引，适用于多列的查询条件，能够提高包含多个条件的查询的性能。联合索引中的列是按照指定顺序排列的。</li>
<li><strong>全文索引</strong>：用于全文搜索，支持对长文本字段（如 <code v-pre>TEXT</code> 类型）进行关键字查找，支持自然语言处理、模糊匹配等操作，适用于需要对文本内容进行复杂搜索的场景。不过可以考虑使用 <code v-pre>ES</code> 来替代。</li>
<li><strong>哈希索引</strong>：基于哈希表的结构，适用于等值查询（如 <code v-pre>=</code>），查询速度非常快，但不支持范围查询（如 <code v-pre>&gt;</code>、<code v-pre>&lt;</code>）。哈希索引不存储数据的顺序，常用于 <strong>Memory</strong> 引擎。</li>
<li><strong>空间索引</strong>：用于空间数据（如地图上的经纬度坐标等）查询，通常使用 <code v-pre>R-</code> 树结构，适合多维数据的查询，如区域查询和最近距离查询，主要用于 <code v-pre>MyISAM</code> 和 <code v-pre>InnoDB</code> 存储引擎中的地理信息数据。</li>
</ul>
<p>这里用一张表的创建过程来演示上述索引。</p>
<div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-sql"><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">CREATE</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> TABLE</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> `</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">users</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">` (</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">    `</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">id</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">`</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> INT</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> NOT NULL</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> AUTO_INCREMENT,</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">    `</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">username</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">`</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> VARCHAR</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">50</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">) </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">NOT NULL</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">,</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">    `</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">password</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">`</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> VARCHAR</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">50</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">),</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">    `</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">email</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">`</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> VARCHAR</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">50</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">),</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">    `</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">content</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">`</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> VARCHAR</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">50</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">),</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">    `</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">location</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">`</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> VARCHAR</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">50</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">),</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">    PRIMARY KEY</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">(id) </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">-- 主键索引</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">-- 唯一索引</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">CREATE</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> UNIQUE INDEX</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> idx_username</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> ON</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> users(username);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">-- 普通索引</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">CREATE</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> INDEX</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> idx_username</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> ON</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> users(username);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">-- 联合索引</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">CREATE</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> INDEX</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> idx_username_email</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> ON</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> users(username, email);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">-- 全文索引</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">CREATE</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> FULLTEXT</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> INDEX</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> idx_content </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">ON</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> articles(content);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">-- 哈希索引</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">CREATE</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> INDEX</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> idx_username_hash</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> ON</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> users(username) </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">USING</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> HASH</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">-- 空间索引</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">CREATE</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> SPATIAL</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> INDEX</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> idx_location </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">ON</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> places(</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">location</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">);</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="存储引擎" tabindex="-1"><a class="header-anchor" href="#存储引擎"><span>存储引擎</span></a></h2>
<ul>
<li>
<p><strong>InnoDB</strong>：</p>
<ul>
<li>
<p>支持事务、行级锁、外键。</p>
</li>
<li>
<p>提供高并发性能，适用于高负载的 <code v-pre>OLTP</code> 应用。</p>
</li>
<li>
<p>数据以聚集索引的方式存储，提高检索效率。</p>
</li>
</ul>
</li>
<li>
<p><strong>MyISAM</strong>：</p>
<ul>
<li>不支持事务和外键，使用表级锁。</li>
</ul>
<ul>
<li>
<p>适合读取多、更新少的场景，如数据仓库。</p>
</li>
<li>
<p>具有较高的读性能和较快的表级锁定。</p>
</li>
</ul>
</li>
<li>
<p><strong>MEMORY</strong>：</p>
<ul>
<li>
<p>数据存储在内存中，速度快，但数据在服务器重启后丢失。</p>
</li>
<li>
<p>适用于临时数据存储或快速缓存。</p>
</li>
</ul>
</li>
<li>
<p><strong>NDB</strong>：</p>
<ul>
<li>支持高可用性和数据分布，适合大规模分布式应用。</li>
</ul>
<ul>
<li>提供行级锁和自动分区。</li>
</ul>
</li>
<li>
<p><strong>ARCHIVE</strong>：</p>
<ul>
<li>
<p>用于存储大量历史数据，支持高效的插入和压缩。</p>
</li>
<li>
<p>不支持索引，适合日志数据存储。</p>
</li>
</ul>
</li>
</ul>
<div class="hint-container important">
<p class="hint-container-title">重要</p>
<p>补充：实际上我们仅需重点了解 <code v-pre>InnoDB</code> 和 <code v-pre>MyISAM</code> 即可，其它仅需有点印象即可，关于这两者的详细区别可以在这里看一下。</p>
</div>
<div class="hint-container important">
<p class="hint-container-title">重要</p>
<p>补充：在 <code v-pre>MySQL 8.4</code> 版本中，实际上一共提供了 <code v-pre>10</code> 种不同的存储引擎，<a href="https://dev.mysql.com/doc/refman/8.4/en/storage-engines.html" target="_blank" rel="noopener noreferrer">有兴趣可以了解一下官方文档</a>。</p>
</div>
</div></template>


