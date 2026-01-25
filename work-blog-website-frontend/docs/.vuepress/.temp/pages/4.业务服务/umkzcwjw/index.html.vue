<template><div><p>如果只使用 <code v-pre>root</code> 用户，就存在安全隐患，这点在 <code v-pre>Linux</code> 系统本身就体现出来了，<code v-pre>MySQL</code> 也有类似的问题，因此也有自己的账户管理。</p>
<p>我们前面铺垫过一个事情，<code v-pre>MySQL</code> 本质是在管理一些表的相关文件，文件在 <code v-pre>Linux</code> 中怎么区分用户？那不就是调用 <code v-pre>Linux</code> 本身的文件权限等接口么？</p>
<div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-sql"><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"># MySQL 的用户表</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">mysql</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">></span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> use</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> mysql;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Reading </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">table</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> information </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">for</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> completion of </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">table</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> and</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> column names</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">You can turn </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">off</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> this feature </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">to</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> get</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> a quicker startup </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">with</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> -</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">A</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">Database</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> changed</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">mysql</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> show tables;</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">+</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">---------------------------+</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">| Tables_in_mysql           |</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">+</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">---------------------------+</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">| user                      |</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">| ...                       |</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">+</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">---------------------------+</span></span>
<span class="line"><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">31</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> rows</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> in</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> set</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> (</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">0</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">.</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">00</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> sec)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">mysql</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">></span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> select</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> *</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> user\G</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"># ...</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>MySQL</code> 的用户本身也是以一个表的形式来管理的，而创建用户实际上就是插入用户的名字、权限、密码插入到 <code v-pre>user</code> 中（最简单粗暴的做法也是这样的，但是一般没必要）。</p>
<p>之后要提到的相关命令，往深处也是对 <code v-pre>user</code> 表做增删查改。</p>
<div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-sql"><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"># MySQL 用户语法</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"># (</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">1</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">)重新加载授权表</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">FLUSH PRIVILEGES;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"># (</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">2</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">)创建用户</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">CREATE</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> USER</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> '</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">user_name</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">'@</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">登录主机/ip</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> IDENTIFIED </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">BY</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">password</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">; # 如果是 </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">Windows</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 是不行的，</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">Windows</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 的是私有 IP，设置为具体 IP 是没有意义的，因此有些时候会使用 %，但是一般也不使用 %</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"># (</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">3</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">)删除用户</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">DROP</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> USER</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">user_name</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">@</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">登录主机/ip</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"># (</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">4</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">)修改用户的密码</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">ALTER</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> USER</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">username</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">@</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">host</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> IDENTIFIED </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">BY</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">new_password</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">UPDATE</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> USER </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">SET</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> authentication_string</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">=</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">password</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">new_password</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">) </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">where</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> user</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">user_name</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">; </span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">SET</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> password</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">=</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">password</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">new_password</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">); # 只设置当前用户密码</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">SET</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> PASSWORD</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> for</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">user_name</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">@</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">主机名</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">=</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">password</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">new_password</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">);</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"># (</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">5</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">)查看当前用户</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">SELECT</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> USER</span><span style="--shiki-light:#999999;--shiki-dark:#666666">()</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>补充：<code v-pre>MySQL</code> 对密码的管理是会进行明文加密的。</p>
</blockquote>
<h1 id="_2-mysql-的权限列表" tabindex="-1"><a class="header-anchor" href="#_2-mysql-的权限列表"><span>2.MySQL 的权限列表</span></a></h1>
<table>
<thead>
<tr>
<th>权限</th>
<th>列名</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td>CREATE</td>
<td><code v-pre>Create_priv</code></td>
<td>数据库、表或索引</td>
</tr>
<tr>
<td>DROP</td>
<td><code v-pre>Drop_priv</code></td>
<td>数据库或表</td>
</tr>
<tr>
<td>GRANT OPTION</td>
<td><code v-pre>Grant_priv</code></td>
<td>数据库、表或索引权限的授权</td>
</tr>
<tr>
<td>REFERENCES</td>
<td><code v-pre>References_priv</code></td>
<td>数据库或表</td>
</tr>
<tr>
<td>ALTER</td>
<td><code v-pre>Alter_priv</code></td>
<td>表</td>
</tr>
<tr>
<td>DELETE</td>
<td><code v-pre>Delete_priv</code></td>
<td>表</td>
</tr>
<tr>
<td>INDEX</td>
<td><code v-pre>Index_priv</code></td>
<td>表</td>
</tr>
<tr>
<td>INSERT</td>
<td><code v-pre>Insert_priv</code></td>
<td>表</td>
</tr>
<tr>
<td>SELECT</td>
<td><code v-pre>Select_priv</code></td>
<td>表</td>
</tr>
<tr>
<td>UPDATE</td>
<td><code v-pre>Update_priv</code></td>
<td>表</td>
</tr>
<tr>
<td>CREATE VIEW</td>
<td><code v-pre>Create_view_priv</code></td>
<td>视图</td>
</tr>
<tr>
<td>SHOW VIEW</td>
<td><code v-pre>Show_view_priv</code></td>
<td>视图</td>
</tr>
<tr>
<td>ALTER ROUTINE</td>
<td><code v-pre>Alter_routine_priv</code></td>
<td>存储的程序</td>
</tr>
<tr>
<td>CREATE ROUTINE</td>
<td><code v-pre>Create_routine_priv</code></td>
<td>存储的程序</td>
</tr>
<tr>
<td>EXECUTE</td>
<td><code v-pre>Execute_priv</code></td>
<td>存储的程序</td>
</tr>
<tr>
<td>FILE</td>
<td><code v-pre>File_priv</code></td>
<td>服务器主机上的文件访问</td>
</tr>
<tr>
<td>CREATE TEMPORARY TABLES</td>
<td><code v-pre>Create_tmp_table_priv</code></td>
<td>临时表</td>
</tr>
<tr>
<td>LOCK TABLES</td>
<td><code v-pre>Lock_tables_priv</code></td>
<td>表的锁定</td>
</tr>
<tr>
<td>CREATE USER</td>
<td><code v-pre>Create_user_priv</code></td>
<td>用户帐号</td>
</tr>
<tr>
<td>PROCESS</td>
<td><code v-pre>Process_priv</code></td>
<td>进程信息</td>
</tr>
<tr>
<td>RELOAD</td>
<td><code v-pre>Reload_priv</code></td>
<td>服务器的重载</td>
</tr>
<tr>
<td>REPLICATION CLIENT</td>
<td><code v-pre>Repl_client_priv</code></td>
<td>复制客户端</td>
</tr>
<tr>
<td>REPLICATION SLAVE</td>
<td><code v-pre>Repl_slave_priv</code></td>
<td>复制从库</td>
</tr>
<tr>
<td>SHOW DATABASES</td>
<td><code v-pre>Show_db_priv</code></td>
<td>数据库列表</td>
</tr>
<tr>
<td>SHUTDOWN</td>
<td><code v-pre>Shutdown_priv</code></td>
<td>服务器的关闭</td>
</tr>
<tr>
<td>SUPER</td>
<td><code v-pre>Super_priv</code></td>
<td>超级权限</td>
</tr>
</tbody>
</table>
<p>刚刚创建的用户没有任何权限，需要 <code v-pre>root</code> 使用 <code v-pre>GRANT 权限列表 ON 库.对象名 TO '用户名'@'登陆位置' [IDENTIFIED BY '密码']</code> 来赋予。</p>
<ul>
<li>
<p><code v-pre>GRANT</code>：权限列表，用多个权限用逗号分开</p>
<div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-sql"><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"># 权限列表</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">grant</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> select</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> on</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> ...</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">grant</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> select</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">, </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">delete</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">, </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">create</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> on</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> ....</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">grant</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> all [privileges] </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">on</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> ... # 表示赋予该用户在该对象上的所有权限</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>*.* ：代表本系统中的所有数据库的所有对象（表，视图，存储过程等）</p>
</li>
<li>
<p>库.*：表示某个数据库中的所有数据对象（表，视图，存储过程等）</p>
</li>
<li>
<p><code v-pre>IDENTIFIED BY</code> ：可选，如果用户存在，赋予权限的同时修改密码，如果该用户不存在，就会创建用户并且设置对应的密码</p>
</li>
</ul>
<p>而可以使用 <code v-pre>REVOKE 权限列表 ON 库.对象名 FROM 'user_name'@'登陆位置'；</code> 回收权限。</p>
</div></template>


