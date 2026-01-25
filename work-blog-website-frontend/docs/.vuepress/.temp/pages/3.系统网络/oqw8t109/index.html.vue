<template><div><p>主要是关于 <code v-pre>zsh</code> 的</p>
<blockquote>
<ul>
<li>登录 shell：需要用户名、密码登录后才能进入的 shell（或者通过--login”选项生成的 shell）。</li>
<li>非登录 shell：不需要输入用户名和密码即可打开的 Shell，例如：直接命令“bash”就是打开一个新的非登录 shell；在 Gnome 或 KDE 中打开一个“终端”（terminal）窗口程序也是一个非登录 shell。</li>
<li>退出一个登录 shell：exit 或者 logout；退出一个非登录 shell：只能 exit。</li>
</ul>
</blockquote>
<blockquote>
<p><code v-pre>echo $-</code>，有 <code v-pre>i - interactive</code> ，所以是交互式 <code v-pre>shell</code>；反之则为非交互式。</p>
</blockquote>
<p>Zsh 的启动顺序包括执行一系列不同的配置文件，具体取决于 zsh 的运行模式（交互式、登录、非登录等）。以下是 zsh 启动时的主要文件和顺序：</p>
<h3 id="_1-登录-shell-启动时" tabindex="-1"><a class="header-anchor" href="#_1-登录-shell-启动时"><span>1. 登录 shell 启动时：</span></a></h3>
<p>当 zsh 作为登录 shell 启动时（例如通过终端或在 SSH 登录时），它会按照以下顺序读取配置文件：</p>
<ol>
<li><strong><code v-pre>/etc/zsh/zshenv</code></strong>  用于设置系统级别的 <strong>环境变量</strong></li>
<li><strong><code v-pre>~/.zshenv</code></strong>  用于用户级别 <strong>环境变量</strong></li>
<li><strong><code v-pre>/etc/zsh/zprofile</code></strong>  用于放置系统中与登录时相关的命令</li>
<li><strong><code v-pre>~/.zprofile</code></strong>  用于放置用户中与登录时相关的命令</li>
<li><strong><code v-pre>/etc/zsh/zshrc</code></strong>  交互式终端会加载这个系统级配置文件，通常放置 <strong>主题、别名、强化、函数和其他自定义设置</strong></li>
<li><strong><code v-pre>~/.zshrc</code></strong>  交互式终端会加载这个用户级配置文件，通常放置 <strong>主题、别名、强化、函数和其他自定义设置</strong></li>
<li><strong><code v-pre>/etc/zsh/zlogin</code></strong>  在 <code v-pre>shell</code> 完全启动后执行的系统级别文件，通常放置用户希望在 <strong>登录完成后执行的命令</strong></li>
<li><strong><code v-pre>~/.zlogin</code></strong>  在 <code v-pre>shell</code> 完全启动后执行的用户级别文件，通常放置用户希望在 <strong>登录完成后执行的命令</strong></li>
<li><code v-pre>/etc/zsh/zlogout</code> 类似</li>
<li><code v-pre>/.zlogout</code> 类似</li>
</ol>
<blockquote>
<p><code v-pre>/etc/prifile</code> 用于防止兼容中与登录时相关的命令（有的不加载，这只是做兼容）</p>
</blockquote>
<h3 id="_2-退出登录时" tabindex="-1"><a class="header-anchor" href="#_2-退出登录时"><span>2. 退出登录时：</span></a></h3>
<p>当 zsh 作为登录 shell 退出时，以下文件按顺序执行：</p>
<ol>
<li>
<p><strong><code v-pre>/etc/zsh/zlogout</code></strong></p>
<ul>
<li>系统级别的登出脚本，执行一些清理任务。</li>
</ul>
</li>
<li>
<p><strong><code v-pre>~/.zlogout</code></strong></p>
<ul>
<li>用户级别的登出脚本，用于执行清理或记录退出时的操作。</li>
</ul>
</li>
</ol>
<h3 id="_3-非登录-shell-启动时" tabindex="-1"><a class="header-anchor" href="#_3-非登录-shell-启动时"><span>3. 非登录 shell 启动时：</span></a></h3>
<p>如果 zsh 作为非登录的交互式 shell 启动（例如打开新终端窗口），则会跳过 <code v-pre>zprofile</code> 和 <code v-pre>zlogin</code>，按以下顺序执行：</p>
<ol>
<li><strong><code v-pre>/etc/zsh/zshenv</code></strong></li>
<li><strong><code v-pre>~/.zshenv</code></strong></li>
<li><strong><code v-pre>/etc/zsh/zshrc</code></strong></li>
<li><strong><code v-pre>~/.zshrc</code></strong></li>
</ol>
<p><a href="https://www.hackerneo.com/blog/dev-tools/better-use-terminal-with-zsh#%E5%AE%89%E8%A3%85-oh-my-zsh" target="_blank" rel="noopener noreferrer">zsh 安装与配置：9步打造高效命令行 - HackerNeo</a></p>
<p><a href="https://cn.x-cmd.com/" target="_blank" rel="noopener noreferrer">X-CMD | 开源轻量级 POSIX 脚本，用于管理工具 (500+) 和提供经典命令扩展</a></p>
<p><a href="https://lazyvim-github-io.vercel.app/zh-Hans/" target="_blank" rel="noopener noreferrer">🚀 入门指南 | LazyVim</a></p>
<p>yazi</p>
<p>trmp</p>
</div></template>


