<template><div><h2 id="_1-环境安装" tabindex="-1"><a class="header-anchor" href="#_1-环境安装"><span>1.环境安装</span></a></h2>
<p><code v-pre>C4d、Maya、3Dmax</code> 都是常见的 <code v-pre>3D</code> 建模工具，而 <code v-pre>Blender</code> 则是开源的渲染工具，支持多种环境的安装，非常舒服，<a href="https://www.blender.org/" target="_blank" rel="noopener noreferrer">这里是官网</a>。实际上在油管上已经是处于统治地位的 <code v-pre>3D</code> 工具了。无论是 <code v-pre>骨骼、建模、绑定、贴图...</code> 都是非常好用的。内置两个主流的渲染器：</p>
<ul>
<li><code v-pre>eevee</code></li>
<li><code v-pre>cycles</code></li>
</ul>
<p>还有不错的雕刻能力，可以和老牌的 <code v-pre>Zbrush</code> 相媲美。</p>
<div class="hint-container important">
<p class="hint-container-title">重要</p>
<p>补充：关于使用平板安装，可以看看 <a href="https://www.youtube.com/watch?v=Lbr_TB-_EVs" target="_blank" rel="noopener noreferrer">这位博主的自主编译过程</a>，以及期待 <a href="https://www.bilibili.com/video/BV1Ab8fzYE4A/?spm_id_from=333.337.search-card.all.click&amp;vd_source=c92c89dbfcf9cc30c48086469621f35b" target="_blank" rel="noopener noreferrer">关于 Blender 平板的推出</a>。</p>
</div>
<h2 id="_2-基础工具" tabindex="-1"><a class="header-anchor" href="#_2-基础工具"><span>2.基础工具</span></a></h2>
<h3 id="_2-1-初始设置" tabindex="-1"><a class="header-anchor" href="#_2-1-初始设置"><span>2.1.初始设置</span></a></h3>
<p>我们先来做一些简单的初始化，和一些基础的界面认识再来考虑各种案例的实操学习。第一次进来 <code v-pre>Blender</code> 的界面时会出现下面的内容，您需要先设置好语言为简体中文（当然看您而定）。然后，在其他空白之处点击一下就会取消这个初始化界面（忘记设置了也可以在编辑中重新设置）。</p>
<figure><img src="@source/8.立体建模/assets/image-20251110210632865.png" alt="image-20251110210632865" tabindex="0" loading="lazy"><figcaption>image-20251110210632865</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251110220018859.png" alt="image-20251110220018859" tabindex="0" loading="lazy"><figcaption>image-20251110220018859</figcaption></figure>
<p>另外这种工程软件分辨率通常比较低，导致视觉体验非常难受...不过开源的 <code v-pre>Blender</code> 功能非常强大，支持用户自己设置分辨率。</p>
<figure><img src="@source/8.立体建模/assets/image-20251110220247822.png" alt="image-20251110220247822" tabindex="0" loading="lazy"><figcaption>image-20251110220247822</figcaption></figure>
<p>同时加大可以撤回的次数。</p>
<figure><img src="@source/8.立体建模/assets/image-20251110220613153.png" alt="image-20251110220613153" tabindex="0" loading="lazy"><figcaption>image-20251110220613153</figcaption></figure>
<p>并且由于众多 <code v-pre>Adobe</code> 的空格按钮都是拖动，就会导致我经常使用空格来拖动物体。</p>
<figure><img src="@source/8.立体建模/assets/image-20251110221318419.png" alt="image-20251110221318419" tabindex="0" loading="lazy"><figcaption>image-20251110221318419</figcaption></figure>
<h3 id="_2-2-世界物体" tabindex="-1"><a class="header-anchor" href="#_2-2-世界物体"><span>2.2.世界物体</span></a></h3>
<p>然后默认的 <code v-pre>Blender</code> 项目会自动建立三个物体，摄影机、灯光、物体（<code v-pre>[shift+a]</code> 添加物体）。</p>
<figure><img src="@source/8.立体建模/assets/image-20251110222122883.png" alt="image-20251110222122883" tabindex="0" loading="lazy"><figcaption>image-20251110222122883</figcaption></figure>
<div class="hint-container important">
<p class="hint-container-title">重要</p>
<p>补充：对于不同的物体，右键都会出现对应的操作菜单。</p>
</div>
<h3 id="_2-3-视觉变化" tabindex="-1"><a class="header-anchor" href="#_2-3-视觉变化"><span>2.3.视觉变化</span></a></h3>
<figure><img src="@source/8.立体建模/assets/image-20251111001601609.png" alt="image-20251111001601609" tabindex="0" loading="lazy"><figcaption>image-20251111001601609</figcaption></figure>
<p>然后我们需要知道上面一些工具的基础操作：</p>
<ul>
<li>按住坐标图拖拽可以获取任意观看物体的视角 <code v-pre>[鼠标中键]</code></li>
<li>按住放大镜拖拽可以放大视图 <code v-pre>[ctrl+鼠标中键]</code></li>
<li>按住手掌拖拽可以移动视图 <code v-pre>[shift+鼠标中键]</code></li>
<li>点击摄影机可以切换是否摄影机视图</li>
<li>点击空间可以切换是否三点透视</li>
</ul>
<figure><img src="@source/8.立体建模/assets/image-20251111111304596.png" alt="image-20251111111304596" tabindex="0" loading="lazy"><figcaption>image-20251111111304596</figcaption></figure>
<p>使用 <code v-pre>~</code> 可以快速切换各种不同的视图。</p>
<h3 id="_2-4-变换操作" tabindex="-1"><a class="header-anchor" href="#_2-4-变换操作"><span>2.4.变换操作</span></a></h3>
<figure><img src="@source/8.立体建模/assets/image-20251111010548333.png" alt="image-20251111010548333" tabindex="0" loading="lazy"><figcaption>image-20251111010548333</figcaption></figure>
<p>还有上面对图像的一些基本变换，可以简单操作一下：</p>
<ul>
<li>移动</li>
<li>旋转</li>
<li>缩放</li>
<li>自由变换（这个虽然方便，但是操作控件变多后会操作的稀里糊涂的...）</li>
</ul>
<p>而这里的油标作用是，可以定位到具体需要添加新物体的位置（<code v-pre>[shift+c]</code> 油标回归世界中心，<code v-pre>[shift+鼠标右键点击]</code> 改变油标位置）。</p>
<div class="hint-container important">
<p class="hint-container-title">重要</p>
<p>补充：这里所有的工具都可以鼠标悬浮获取到快捷键。</p>
</div>
<h3 id="_2-5-区域切换" tabindex="-1"><a class="header-anchor" href="#_2-5-区域切换"><span>2.5.区域切换</span></a></h3>
<p>不同的编辑窗口，都可以切换不同的工作区，这个很灵活自由，后续我们再来具体使用。</p>
<figure><img src="@source/8.立体建模/assets/image-20251111112048051.png" alt="image-20251111112048051" tabindex="0" loading="lazy"><figcaption>image-20251111112048051</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251111112056019.png" alt="image-20251111112056019" tabindex="0" loading="lazy"><figcaption>image-20251111112056019</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251111112103354.png" alt="image-20251111112103354" tabindex="0" loading="lazy"><figcaption>image-20251111112103354</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251111112107853.png" alt="image-20251111112107853" tabindex="0" loading="lazy"><figcaption>image-20251111112107853</figcaption></figure>
<h2 id="_3-快速体验" tabindex="-1"><a class="header-anchor" href="#_3-快速体验"><span>3.快速体验</span></a></h2>
<p>在学习怎么继续使用之前，先来快速跟着 <a href="https://www.bilibili.com/video/BV1Bt4y1E7qn/?vd_source=c92c89dbfcf9cc30c48086469621f35b" target="_blank" rel="noopener noreferrer">大佬</a> 来做一些简单的建模渲染，提高您的学习动力。相关的资源链接可以在 <a href="https://www.blendergo.net/8622.html" target="_blank" rel="noopener noreferrer">网站</a> 中直接获得，非常方便。不过</p>
<h3 id="_3-1-萌三兄弟" tabindex="-1"><a class="header-anchor" href="#_3-1-萌三兄弟"><span>3.1.萌三兄弟</span></a></h3>
<div class="hint-container important">
<p class="hint-container-title">重要</p>
<p>补充：这一个章节主要用来学习基础的建模过程，和一些常见的快捷键操作。</p>
</div>
<h4 id="_3-1-1-物体建模" tabindex="-1"><a class="header-anchor" href="#_3-1-1-物体建模"><span>3.1.1.物体建模</span></a></h4>
<h5 id="_3-1-1-1-身体" tabindex="-1"><a class="header-anchor" href="#_3-1-1-1-身体"><span>3.1.1.1.身体</span></a></h5>
<p>先添加一个正方体，然后修改器设置一个倒角。</p>
<figure><img src="@source/8.立体建模/assets/image-20251111115955354.png" alt="image-20251111115955354" tabindex="0" loading="lazy"><figcaption>image-20251111115955354</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251111120039898.png" alt="image-20251111120039898" tabindex="0" loading="lazy"><figcaption>image-20251111120039898</figcaption></figure>
<p>不过这个倒角有点少，可以添加一些段数来达到圆滑边缘的效果，并且增加每一个分段的量。</p>
<figure><img src="@source/8.立体建模/assets/image-20251111120313247.png" alt="image-20251111120313247" tabindex="0" loading="lazy"><figcaption>image-20251111120313247</figcaption></figure>
<h5 id="_3-1-1-2-双脚" tabindex="-1"><a class="header-anchor" href="#_3-1-1-2-双脚"><span>3.1.1.2.双脚</span></a></h5>
<div class="hint-container important">
<p class="hint-container-title">重要</p>
<p>补充：“顶点数据” 其实是 <code v-pre>3D</code> 模型最核心的 “骨架”，非常好理解，我们用一个简单的例子来说明，想象您用积木搭一个正方体：</p>
<ul>
<li>这个正方体有 <code v-pre>8</code> 个角，每个角就是一个 “顶点”</li>
<li>每个顶点在 <code v-pre>3D</code> 空间中都有一个固定的 “坐标”（比如 <code v-pre>(0,0,0)、(1,0,0)</code> 等，就像地图上的经纬度），这些坐标就是 “顶点数据”</li>
<li>顶点之间的连线形成了正方体的边，边围成面，最终构成你看到的 <code v-pre>3D</code> 形状</li>
</ul>
</div>
<div class="hint-container important">
<p class="hint-container-title">重要</p>
<p>补充：假设你有一张 <code v-pre>10</code> 厘米的照片，你用放大镜看它，照片看起来变成了 <code v-pre>20</code> 厘米（相当于 “缩放” 操作）。这时候照片的 “实际尺寸” 还是 <code v-pre>10</code> 厘米（相当于 “顶点数据” 没变），只是你通过放大镜（相当于 <code v-pre>Blender</code> 的 “缩放系数”）让它看起来变大了。</p>
<p>如果你把这张照片拿去扫描，然后打印出一张 <code v-pre>20</code> 厘米的新照片（相当于 “应用缩放”），这时候新照片的 “实际尺寸” 就是 <code v-pre>20</code> 厘米了 —— 它的 “真实大小” 和你之前用放大镜看到的大小一致了。</p>
<p>在 <code v-pre>Blender</code> 里的具体表现是：</p>
<ul>
<li>没应用缩放时，“顶点数据” 是原始大小（比如 <code v-pre>1</code> 米），但 <code v-pre>Blender</code> 会用一个 “缩放系数”（比如 <code v-pre>2</code> 倍）让它看起来是 <code v-pre>2</code> 米。此时你在右侧 “变换面板” 里能看到缩放值是 <code v-pre>2.0</code>（不是 <code v-pre>1.0</code>）。</li>
<li>应用缩放后时，<code v-pre>Blender</code> 会把 “顶点数据” 直接改成 <code v-pre>2</code> 米（相当于重画了一个 <code v-pre>2</code> 米的模型），同时把 “缩放系数” 重置为 <code v-pre>1.0</code>。此时模型看起来还是 <code v-pre>2</code> 米，但它的 “真实尺寸” 已经是 <code v-pre>2</code> 米了。</li>
</ul>
</div>
<div class="hint-container important">
<p class="hint-container-title">重要</p>
<p>补充：<code v-pre>Blender</code> 会在用户设置缩放时不实际去应用缩放，缩放、旋转、移动（合称 “变换操作”）是 <code v-pre>3D</code> 建模中最基础、最频繁的操作。如果每次缩放都直接修改顶点数据（即 “自动应用”），意味着：</p>
<ul>
<li>一旦缩放错了，很难精确还原到之前的状态（比如把 <code v-pre>1</code> 米的模型缩放到 <code v-pre>0.5</code> 倍后，顶点数据变成 <code v-pre>0.5</code> 米，想再改回 <code v-pre>1</code> 米只能手动算比例缩放，容易出错）</li>
<li>而 <code v-pre>Blender</code> 默认的 “不应用” 状态，缩放参数（如 <code v-pre>X/Y/Z</code> 轴的缩放值）会被临时记录在 “变换面板” 中，你随时可以把缩放值改回 <code v-pre>1.0</code>，模型就会瞬间恢复原始大小 —— 相当于给了你 “反悔” 的机会</li>
</ul>
<p>而应用缩放的过程中会发生：</p>
<ol>
<li>更新顶点的实际坐标：模型的每个顶点都有一组 <code v-pre>3D</code> 坐标（比如 <code v-pre>(x, y, z)</code>），这是模型 “原始大小” 的记录。当你缩放模型时（比如放大 <code v-pre>2</code> 倍），<code v-pre>Blender</code> 只是临时用 “缩放系数”（如 <code v-pre>2.0</code>）计算顶点的 “显示位置”（显示坐标 = 原始坐标 × 缩放系数），但顶点的原始坐标并未改变。
应用缩放后，<code v-pre>Blender</code> 会直接把顶点的 “原始坐标” 改成 “显示坐标”（比如原始 <code v-pre>(1,1,1)</code> 变成 <code v-pre>(2,2,2)</code>），让顶点数据真正对应模型当前的视觉大小。</li>
<li>重置缩放系数为 <code v-pre>1.0</code>：<code v-pre>Blender</code> 会记录模型的缩放参数（在右侧 “变换面板” 的 <code v-pre>Scale X/Y/Z</code> 中显示）。缩放后，这些参数会是你设置的值（比如 <code v-pre>2.0</code>）。应用缩放后，这些参数会被强制重置为 <code v-pre>1.0</code>，因为此时模型的大小已经通过顶点坐标 “固化”，不再需要依赖缩放系数来调整显示效果。</li>
<li>让所有工具基于 “当前大小” 工作：<code v-pre>Blender</code> 中的修改器（如倒角、细分）、物理引擎、测量工具等，都是以顶点的 “原始坐标” 为基准计算的。未应用缩放时，它们会无视 “缩放系数”，直接用顶点的原始坐标计算（导致结果与视觉大小不符）。应用缩放后，顶点坐标已更新为当前大小，这些工具就会基于你看到的实际尺寸工作，结果更符合预期。</li>
</ol>
</div>
<p>有了上面的补充概念后，我们再来设计双脚。</p>
<figure><img src="@source/8.立体建模/assets/image-20251111123129632.png" alt="image-20251111123129632" tabindex="0" loading="lazy"><figcaption>image-20251111123129632</figcaption></figure>
<p>由于倒角的过程中会产生缩放系数，我们需要应用缩放，让这个双脚都达到我们需要的效果。</p>
<figure><img src="@source/8.立体建模/assets/image-20251111123351515.png" alt="image-20251111123351515" tabindex="0" loading="lazy"><figcaption>image-20251111123351515</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251111124127482.png" alt="image-20251111124127482" tabindex="0" loading="lazy"><figcaption>image-20251111124127482</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251111124200194.png" alt="image-20251111124200194" tabindex="0" loading="lazy"><figcaption>image-20251111124200194</figcaption></figure>
<h5 id="_3-1-1-3-嘴巴" tabindex="-1"><a class="header-anchor" href="#_3-1-1-3-嘴巴"><span>3.1.1.3.嘴巴</span></a></h5>
<p>首先添加一个环体，并且注意到其实添加后左下角是可以进行一些精细化操作的（注意这里是使用游标来添加环体的）。</p>
<figure><img src="@source/8.立体建模/assets/image-20251111124550805.png" alt="image-20251111124550805" tabindex="0" loading="lazy"><figcaption>image-20251111124550805</figcaption></figure>
<p>可以利用快捷键来快速旋转，<code v-pre>[r+x+90]</code> 就可以在顺着 <code v-pre>x</code> 方向上做自旋 <code v-pre>90 度</code> 的操作（类似的快捷键后续会进行一个归纳，先不急）。</p>
<figure><img src="@source/8.立体建模/assets/image-20251111130007930.png" alt="image-20251111130007930" tabindex="0" loading="lazy"><figcaption>image-20251111130007930</figcaption></figure>
<p>并且调整好位置就可以。</p>
<h5 id="_3-1-1-4-双眼" tabindex="-1"><a class="header-anchor" href="#_3-1-1-4-双眼"><span>3.1.1.4.双眼</span></a></h5>
<p>我们直接添加一个经纬球作为眼球，调整好整体的脸部布局后，复制一个球体制作上眼皮。</p>
<figure><img src="@source/8.立体建模/assets/image-20251111130824269.png" alt="image-20251111130824269" tabindex="0" loading="lazy"><figcaption>image-20251111130824269</figcaption></figure>
<p>我们选中这个复制出来的经纬球后，使用快捷键 <code v-pre>[/]</code> 进入隔离工作区，同时切换编辑模式。此时就允许您对物体的点线面进行一个编辑操作，同时左侧工具栏有更多可以使用的工具。</p>
<figure><img src="@source/8.立体建模/assets/image-20251111131025494.png" alt="image-20251111131025494" tabindex="0" loading="lazy"><figcaption>image-20251111131025494</figcaption></figure>
<p>我们稍微熟悉一下这个页面，这里有三个控件，分别代表：</p>
<ul>
<li>点</li>
<li>边</li>
<li>面</li>
</ul>
<figure><img src="@source/8.立体建模/assets/image-20251111131344615.png" alt="image-20251111131344615" tabindex="0" loading="lazy"><figcaption>image-20251111131344615</figcaption></figure>
<p>而他们的快捷键分别是 <code v-pre>[1], [2], [3]</code>。然后我们先选择点控件，然后选中最底部的点，先来做一个衰减操作。会发现出现一个圆圈，这个圈就是衰减的作用范围（可以使用 <code v-pre>[鼠标滚轮]</code> 来调整这个圈的作用范围）。</p>
<figure><img src="@source/8.立体建模/assets/image-20251111131655049.png" alt="image-20251111131655049" tabindex="0" loading="lazy"><figcaption>image-20251111131655049</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251111131842436.png" alt="image-20251111131842436" tabindex="0" loading="lazy"><figcaption>image-20251111131842436</figcaption></figure>
<p>为了做出上眼皮的效果，这里给出一个快捷键 <code v-pre>[g+z+鼠标移动]</code> 就可以按照 <code v-pre>z</code> 轴做一个柔性编辑。</p>
<figure><img src="@source/8.立体建模/assets/image-20251111132148534.png" alt="image-20251111132148534" tabindex="0" loading="lazy"><figcaption>image-20251111132148534</figcaption></figure>
<p>这个效果就做好了，接下来我们取消隔离，然后组合为一个完整的眼睛（注意切换为物体模式）。</p>
<figure><img src="@source/8.立体建模/assets/image-20251111134101152.png" alt="image-20251111134101152" tabindex="0" loading="lazy"><figcaption>image-20251111134101152</figcaption></figure>
<p>然后我们做一个眼睛。</p>
<figure><img src="@source/8.立体建模/assets/image-20251111134202657.png" alt="image-20251111134202657" tabindex="0" loading="lazy"><figcaption>image-20251111134202657</figcaption></figure>
<p>使用 <code v-pre>[s+y]</code> 快捷键压扁这个球体，再和眼球进行贴和。</p>
<figure><img src="@source/8.立体建模/assets/image-20251111134333945.png" alt="image-20251111134333945" tabindex="0" loading="lazy"><figcaption>image-20251111134333945</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251111134713390.png" alt="image-20251111134713390" tabindex="0" loading="lazy"><figcaption>image-20251111134713390</figcaption></figure>
<p>然后再复制一个眼睛出来就可以。</p>
<figure><img src="@source/8.立体建模/assets/image-20251111135711710.png" alt="image-20251111135711710" tabindex="0" loading="lazy"><figcaption>image-20251111135711710</figcaption></figure>
<h5 id="_3-1-1-5-装饰" tabindex="-1"><a class="header-anchor" href="#_3-1-1-5-装饰"><span>3.1.1.5.装饰</span></a></h5>
<p>添加一个椎体，可以自己做调整。</p>
<figure><img src="@source/8.立体建模/assets/image-20251111140104263.png" alt="image-20251111140104263" tabindex="0" loading="lazy"><figcaption>image-20251111140104263</figcaption></figure>
<p>并且添加一个倒角，可以先应用缩放后再去调整段数。</p>
<figure><img src="@source/8.立体建模/assets/image-20251111140358589.png" alt="image-20251111140358589" tabindex="0" loading="lazy"><figcaption>image-20251111140358589</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251111140426516.png" alt="image-20251111140426516" tabindex="0" loading="lazy"><figcaption>image-20251111140426516</figcaption></figure>
<h5 id="_3-1-1-6-场景" tabindex="-1"><a class="header-anchor" href="#_3-1-1-6-场景"><span>3.1.1.6.场景</span></a></h5>
<p>先简单添加一个平面，可以稍微拉大一些，方便我们后续进行渲染。</p>
<figure><img src="@source/8.立体建模/assets/image-20251111141507576.png" alt="image-20251111141507576" tabindex="0" loading="lazy"><figcaption>image-20251111141507576</figcaption></figure>
<p>然后进入编辑模式，同时使用 <code v-pre>[2]</code> 进入“边”控件，并且选择人物后面的边。</p>
<figure><img src="@source/8.立体建模/assets/image-20251111141951226.png" alt="image-20251111141951226" tabindex="0" loading="lazy"><figcaption>image-20251111141951226</figcaption></figure>
<p>我们可以按住 <code v-pre>[z]</code> 来向 <code v-pre>z</code> 轴体做一个挤出。</p>
<figure><img src="@source/8.立体建模/assets/image-20251111142103928.png" alt="image-20251111142103928" tabindex="0" loading="lazy"><figcaption>image-20251111142103928</figcaption></figure>
<p>为了让这个背景有个无缝衔接的感觉，可以对平面使用倒角来解决，并且使用平滑着色。</p>
<figure><img src="@source/8.立体建模/assets/image-20251111142755262.png" alt="image-20251111142755262" tabindex="0" loading="lazy"><figcaption>image-20251111142755262</figcaption></figure>
<div class="hint-container important">
<p class="hint-container-title">重要</p>
<p>补充：在 <code v-pre>3D</code> 建模（包括 <code v-pre>Blender</code>）中，“平滑着色（<code v-pre>Smooth Shading</code>）” 是一种控制模型表面显示效果的渲染方式，核心作用是让模型表面看起来更 “光滑、连续”，而非由生硬的棱角组成。</p>
<ul>
<li><strong>平直着色（Flat Shading）</strong>：模型的每个面（多边形）会单独计算光照，面与面之间有明显的棱角和阴影边界，看起来像 “拼接起来的硬纸板”（适合低多边形风格）。</li>
<li><strong>平滑着色（Smooth Shading）</strong>：相邻的面会共享光照信息，通过计算面之间的角度自动过渡阴影和高光，让表面看起来更圆润、无明显棱角（适合表现球体、人体、家具等需要光滑质感的物体）。</li>
</ul>
</div>
<h4 id="_3-1-2-摄影机位" tabindex="-1"><a class="header-anchor" href="#_3-1-2-摄影机位"><span>3.1.2.摄影机位</span></a></h4>
<p>我们需要添加一个摄影机。</p>
<figure><img src="@source/8.立体建模/assets/image-20251111143054893.png" alt="image-20251111143054893" tabindex="0" loading="lazy"><figcaption>image-20251111143054893</figcaption></figure>
<p>然后稍微调整一下摄影机的位置。</p>
<figure><img src="@source/8.立体建模/assets/image-20251111143244018.png" alt="image-20251111143244018" tabindex="0" loading="lazy"><figcaption>image-20251111143244018</figcaption></figure>
<p>然后打开摄影利用锁定“摄影机到视图方位”和鼠标滚轮来进行缩放。</p>
<figure><img src="@source/8.立体建模/assets/image-20251111161250818.png" alt="image-20251111161250818" tabindex="0" loading="lazy"><figcaption>image-20251111161250818</figcaption></figure>
<p>然后在边缘线这里鼠标右键，可以切割多的工作区域，这样方便多一个。</p>
<figure><img src="@source/8.立体建模/assets/image-20251111164338571.png" alt="image-20251111164338571" tabindex="0" loading="lazy"><figcaption>image-20251111164338571</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251111164348981.png" alt="image-20251111164348981" tabindex="0" loading="lazy"><figcaption>image-20251111164348981</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251112012249056.png" alt="image-20251112012249056" tabindex="0" loading="lazy"><figcaption>image-20251112012249056</figcaption></figure>
<p>可以稍微修改一下输出的属性，修改摄影机的展示比例（这里调整为偏向竖向的出图比例）。</p>
<figure><img src="@source/8.立体建模/assets/image-20251112012624080.png" alt="image-20251112012624080" tabindex="0" loading="lazy"><figcaption>image-20251112012624080</figcaption></figure>
<h4 id="_3-1-3-灯光布局" tabindex="-1"><a class="header-anchor" href="#_3-1-3-灯光布局"><span>3.1.3.灯光布局</span></a></h4>
<p>做一个简单的灯光，就安在左上角就可以（在摄影机视角的左上角）。</p>
<figure><img src="@source/8.立体建模/assets/image-20251112014409092.png" alt="image-20251112014409092" tabindex="0" loading="lazy"><figcaption>image-20251112014409092</figcaption></figure>
<p>然后开启渲染方式。</p>
<figure><img src="@source/8.立体建模/assets/image-20251112014601381.png" alt="image-20251112014601381" tabindex="0" loading="lazy"><figcaption>image-20251112014601381</figcaption></figure>
<p>不过灯光有点暗，我们需要调高一下连亮度。</p>
<figure><img src="@source/8.立体建模/assets/image-20251112014913792.png" alt="image-20251112014913792" tabindex="0" loading="lazy"><figcaption>image-20251112014913792</figcaption></figure>
<p>不过我们现在的阴影比较锐利，主要的原因是因为使用了半径比较小的灯光，这样阴影就会比较弱化且柔和（如果您觉得物体的影子过于实，可以在右侧（摄影机视角）处添加一个光源较弱的灯光）。</p>
<figure><img src="@source/8.立体建模/assets/image-20251112020150971.png" alt="image-20251112020150971" tabindex="0" loading="lazy"><figcaption>image-20251112020150971</figcaption></figure>
<p>为了养成良好的习惯，我们可以对灯光和摄影机做一个新建集合操作，快捷键是 <code v-pre>[m]</code> 键位。</p>
<figure><img src="@source/8.立体建模/assets/image-20251112020818860.png" alt="image-20251112020818860" tabindex="0" loading="lazy"><figcaption>image-20251112020818860</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251112021208635.png" alt="image-20251112021208635" tabindex="0" loading="lazy"><figcaption>image-20251112021208635</figcaption></figure>
<div class="hint-container important">
<p class="hint-container-title">重要</p>
<p>补充：一般集合会有以下情况。</p>
<ul>
<li>场景集合</li>
<li>设备集合</li>
<li>物体集合</li>
</ul>
</div>
<div class="hint-container important">
<p class="hint-container-title">重要</p>
<p>补充：可以考虑点击摄影机后调整遮光罩的效果方便观看。</p>
<figure><img src="@source/8.立体建模/assets/image-20251112023816659.png" alt="image-20251112023816659" tabindex="0" loading="lazy"><figcaption>image-20251112023816659</figcaption></figure>
</div>
<div class="hint-container important">
<p class="hint-container-title">重要</p>
<p>补充：可以关闭这里的控件以给更加清晰查看摄影机视角，并且按 <code v-pre>[t]</code> 取消变化工具的显示。</p>
<figure><img src="@source/8.立体建模/assets/image-20251112024001120.png" alt="image-20251112024001120" tabindex="0" loading="lazy"><figcaption>image-20251112024001120</figcaption></figure>
</div>
<h4 id="_3-1-4-材质添加" tabindex="-1"><a class="header-anchor" href="#_3-1-4-材质添加"><span>3.1.4.材质添加</span></a></h4>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>注意：在添加材质之前，我们需要先修改一下渲染器：</p>
<ul>
<li><strong>EEVEE</strong>：实时渲染器，但是不够真实，需要调整参数才可以</li>
<li><strong>Cycles</strong>：更加真实</li>
</ul>
<p>让我们切换一下渲染器，同时设置为 <code v-pre>GPU</code> 计算。</p>
<figure><img src="@source/8.立体建模/assets/image-20251112015211758.png" alt="image-20251112015211758" tabindex="0" loading="lazy"><figcaption>image-20251112015211758</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251112015536694.png" alt="image-20251112015536694" tabindex="0" loading="lazy"><figcaption>image-20251112015536694</figcaption></figure>
<p>不过这里可以看到这里的 <code v-pre>GPU</code> 计算选中后显示为灰色，可以在设置中勾选启动 <code v-pre>GPU</code> 显卡。</p>
<figure><img src="@source/8.立体建模/assets/image-20251112015841831.png" alt="image-20251112015841831" tabindex="0" loading="lazy"><figcaption>image-20251112015841831</figcaption></figure>
</div>
<p>然后我们需要选择一下颜色进行上色。</p>
<figure><img src="@source/8.立体建模/assets/image-20251112021753284.png" alt="image-20251112021753284" tabindex="0" loading="lazy"><figcaption>image-20251112021753284</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251112021528672.png" alt="image-20251112021528672" tabindex="0" loading="lazy"><figcaption>image-20251112021528672</figcaption></figure>
<p>然后先进行一个简单的上色。</p>
<figure><img src="@source/8.立体建模/assets/image-20251112021851371.png" alt="image-20251112021851371" tabindex="0" loading="lazy"><figcaption>image-20251112021851371</figcaption></figure>
<p>然后由于这个小黄人的全是基本色都是黄色，我们可以最后选中所有部件（除去眼睛），最后在选择身体。然后使用 <code v-pre>[ctrl+l]</code> 选择关联材质。</p>
<figure><img src="@source/8.立体建模/assets/image-20251112022211545.png" alt="image-20251112022211545" tabindex="0" loading="lazy"><figcaption>image-20251112022211545</figcaption></figure>
<p>其他大概也上色一下。</p>
<figure><img src="@source/8.立体建模/assets/image-20251112022924707.png" alt="image-20251112022924707" tabindex="0" loading="lazy"><figcaption>image-20251112022924707</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251112023138247.png" alt="image-20251112023138247" tabindex="0" loading="lazy"><figcaption>image-20251112023138247</figcaption></figure>
<h4 id="_3-1-5-动画制作" tabindex="-1"><a class="header-anchor" href="#_3-1-5-动画制作"><span>3.1.5.动画制作</span></a></h4>
<p>我们暂时不考虑加入动画。</p>
<h4 id="_3-1-6-生成结果" tabindex="-1"><a class="header-anchor" href="#_3-1-6-生成结果"><span>3.1.6.生成结果</span></a></h4>
<p>然后您可以稍微做一些个性化的调整，并且简单回忆一下之前的操作（可以简单总结一下），同时做一个运行查看渲染效果。</p>
<figure><img src="@source/8.立体建模/assets/image-20251112024741895.png" alt="image-20251112024741895" tabindex="0" loading="lazy"><figcaption>image-20251112024741895</figcaption></figure>
<h3 id="_3-2-积木组合" tabindex="-1"><a class="header-anchor" href="#_3-2-积木组合"><span>3.2.积木组合</span></a></h3>
<div class="hint-container important">
<p class="hint-container-title">重要</p>
<p>补充：这一个章节主要用来加强建模的基本操作，同时简单使用一些动画关键帧。</p>
</div>
<h4 id="_3-2-1-物体建模" tabindex="-1"><a class="header-anchor" href="#_3-2-1-物体建模"><span>3.2.1.物体建模</span></a></h4>
<p><code v-pre>ok</code>，再来进行一次实践吧，这次会更加好玩。可以先把灯光和摄像机删除，然后开始我们对物体的建模过程。</p>
<h5 id="_3-2-1-1-组合积木" tabindex="-1"><a class="header-anchor" href="#_3-2-1-1-组合积木"><span>3.2.1.1.组合积木</span></a></h5>
<figure><img src="@source/8.立体建模/assets/image-20251126033236443.png" alt="image-20251126033236443" tabindex="0" loading="lazy"><figcaption>image-20251126033236443</figcaption></figure>
<p>由于您已经有前面使用基础工具变化物体属性以及倒角的经验了，这里进行一个快速的建模供您参考，先修改一些属性。</p>
<figure><img src="@source/8.立体建模/assets/image-20251126033404560.png" alt="image-20251126033404560" tabindex="0" loading="lazy"><figcaption>image-20251126033404560</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251126033605522.png" alt="image-20251126033605522" tabindex="0" loading="lazy"><figcaption>image-20251126033605522</figcaption></figure>
<p>然后添加倒角，不过这次我们不是要所有的边都做一模一样的倒角，要求您先只能修改上述物体的其中四个棱角为倒角，而不是上来直接把立方体的所有棱角都设置为倒角，因此我们不再添加修改器，改用另外一个工具。</p>
<p>不过由于我们此时的需求不是改变物体的变换属性，而是需要修改物体的点线面，因此我们需要使用快捷键 <code v-pre>[tab]</code> 来从物体模式切换到编辑模式（或者您手动切换），切换后就可以找到倒角编辑工具。</p>
<figure><img src="@source/8.立体建模/assets/image-20251126122854285.png" alt="image-20251126122854285" tabindex="0" loading="lazy"><figcaption>image-20251126122854285</figcaption></figure>
<p>使用快捷键 <code v-pre>[ctrl+a]</code> 来应用所有的变换，这一步是避免后续做倒角时被影响。然后使用快捷键 <code v-pre>[2]</code> 来切换到选中线的模式，选中四条线，使用倒角工具后，就会出现一个黄色控件，使用鼠标拖动调整就可以。</p>
<figure><img src="@source/8.立体建模/assets/image-20251126123913075.png" alt="image-20251126123913075" tabindex="0" loading="lazy"><figcaption>image-20251126123913075</figcaption></figure>
<p>有了这个工具后，立方体的其他边也可以做倒角，但是可以独立进行调整，不会向使用修改器一样全部的边都被修改，我们再类似修改其他的边。</p>
<figure><img src="@source/8.立体建模/assets/image-20251126124610154.png" alt="image-20251126124610154" tabindex="0" loading="lazy"><figcaption>image-20251126124610154</figcaption></figure>
<p>然后再次按 <code v-pre>[tab]</code> 切换回物体模式，复制多一块积木出来，两块积木贴和到一起。</p>
<figure><img src="@source/8.立体建模/assets/image-20251126124927250.png" alt="image-20251126124927250" tabindex="0" loading="lazy"><figcaption>image-20251126124927250</figcaption></figure>
<p>不过我们已经贴住到一起了，如果还需要对上面的一块积木做缩放变换，又会出现没有贴住的问题。这个时候就可以利用一种办法，编辑模式不是可以修改点线面么，那就使用编辑模式手动把积木的高度变小。</p>
<p>也就是线使用 <code v-pre>[tab]</code> 切换到编辑模式，点击 <code v-pre>[3]</code> 选择 <img src="@source/8.立体建模/assets/image-20251126131117058.png" alt="image-20251126131117058" loading="lazy"> 需要调整的所有面，然后使用旁边的移动工具来调整顶部的高度（当然其实我觉得这样也挺麻烦，不如直接缩放后再做贴和，但这里我其实只是想演示一些不同的方法而已)。</p>
<figure><img src="@source/8.立体建模/assets/image-20251126130506750.png" alt="image-20251126130506750" tabindex="0" loading="lazy"><figcaption>image-20251126130506750</figcaption></figure>
<p>然后我们也类似的修改长度和宽度。</p>
<figure><img src="@source/8.立体建模/assets/image-20251126131311093.png" alt="image-20251126131311093" tabindex="0" loading="lazy"><figcaption>image-20251126131311093</figcaption></figure>
<p>接下里继续制作直到所有基础的积木都做好。</p>
<figure><img src="@source/8.立体建模/assets/image-20251126131426197.png" alt="image-20251126131426197" tabindex="0" loading="lazy"><figcaption>image-20251126131426197</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251126131630972.png" alt="image-20251126131630972" tabindex="0" loading="lazy"><figcaption>image-20251126131630972</figcaption></figure>
<div class="hint-container important">
<p class="hint-container-title">重要</p>
<p>补充：关于两个常用模式的区别。</p>
<table>
<thead>
<tr>
<th>对比项</th>
<th>物体模式</th>
<th>编辑模式</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>操作对象</strong></td>
<td>整个物体（整体）</td>
<td>物体内部结构（顶点 / 边 / 面）</td>
</tr>
<tr>
<td><strong>影响范围</strong></td>
<td>位置、旋转、缩放等整体属性</td>
<td>仅改变物体几何形状，不影响整体位置</td>
</tr>
<tr>
<td><strong>界面显示</strong></td>
<td>橙色边框包围的灰色模型</td>
<td>顶点和所有边高亮显示</td>
</tr>
<tr>
<td><strong>快捷键</strong></td>
<td>移动 (G)、旋转 (R)、缩放 (S)</td>
<td>顶点选择 (1)、边选择 (2)、面选择 (3)</td>
</tr>
<tr>
<td><strong>应用场景</strong></td>
<td>场景布置、动画路径、整体调整</td>
<td>建模、细节雕刻、几何变形</td>
</tr>
<tr>
<td><strong>原点变化</strong></td>
<td>移动会改变物体原点</td>
<td>移动顶点不影响物体原点</td>
</tr>
</tbody>
</table>
</div>
<h5 id="_3-2-1-2-三颗小树" tabindex="-1"><a class="header-anchor" href="#_3-2-1-2-三颗小树"><span>3.2.1.2.三颗小树</span></a></h5>
<p>而三颗小树，由于我们要求三颗树都要“长”在积木上，因此这里不再直接添加圆柱体来做树体，而是换一种方式来做树体，切换到物体模式中，然后长按添加工具，选择添加柱体选项。</p>
<figure><img src="@source/8.立体建模/assets/image-20251126144222258.png" alt="image-20251126144222258" tabindex="0" loading="lazy"><figcaption>image-20251126144222258</figcaption></figure>
<p>然后在物体表面放置该工具，可以使用 <code v-pre>[shift]</code> 来创建圆柱体的底部形状和大小，选定后向上拖动鼠标就可以快速做出树体了。</p>
<figure><img src="@source/8.立体建模/assets/image-20251126144614360.png" alt="image-20251126144614360" tabindex="0" loading="lazy"><figcaption>image-20251126144614360</figcaption></figure>
<p>然后在编辑模式中缩小顶部的圆形大小。</p>
<figure><img src="@source/8.立体建模/assets/image-20251126144908216.png" alt="image-20251126144908216" tabindex="0" loading="lazy"><figcaption>image-20251126144908216</figcaption></figure>
<p>然后我们需要在树体上添加一个球体，但是需要刚刚好添加到柱体顶部圆的正中心，我们理由 <code v-pre>游标+吸附</code> 的原理来做到。</p>
<figure><img src="@source/8.立体建模/assets/image-20251126145335764.png" alt="image-20251126145335764" tabindex="0" loading="lazy"><figcaption>image-20251126145335764</figcaption></figure>
<p>然后再来添加球体就可以了。</p>
<figure><img src="@source/8.立体建模/assets/image-20251126145620770.png" alt="image-20251126145620770" tabindex="0" loading="lazy"><figcaption>image-20251126145620770</figcaption></figure>
<p>然后开始复制粘贴。</p>
<figure><img src="@source/8.立体建模/assets/image-20251126150052715.png" alt="image-20251126150052715" tabindex="0" loading="lazy"><figcaption>image-20251126150052715</figcaption></figure>
<h5 id="_3-2-1-3-文字牌匾" tabindex="-1"><a class="header-anchor" href="#_3-2-1-3-文字牌匾"><span>3.2.1.3.文字牌匾</span></a></h5>
<p>先做个柱子。</p>
<figure><img src="@source/8.立体建模/assets/image-20251126150344998.png" alt="image-20251126150344998" tabindex="0" loading="lazy"><figcaption>image-20251126150344998</figcaption></figure>
<p>然后选中顶部圆面，依旧是使用 <code v-pre>游标+吸附</code> 的功能，不过这次我们使用快捷键 <code v-pre>[shift+s]</code> 来得到。</p>
<figure><img src="@source/8.立体建模/assets/image-20251126150828790.png" alt="image-20251126150828790" tabindex="0" loading="lazy"><figcaption>image-20251126150828790</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251126150134483.png" alt="image-20251126150134483" tabindex="0" loading="lazy"><figcaption>image-20251126150134483</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251126154041588.png" alt="image-20251126154041588" tabindex="0" loading="lazy"><figcaption>image-20251126154041588</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251126154334953.png" alt="image-20251126154334953" tabindex="0" loading="lazy"><figcaption>image-20251126154334953</figcaption></figure>
<p>然后来个内插面，方便放置文字。先在编辑模式中选中牌面，然后点击 <code v-pre>[i]</code> 鼠标拖动就可以做出内插面了。</p>
<figure><img src="@source/8.立体建模/assets/image-20251126160517655.png" alt="image-20251126160517655" tabindex="0" loading="lazy"><figcaption>image-20251126160517655</figcaption></figure>
<p>也可以使用旁边的工具。</p>
<figure><img src="@source/8.立体建模/assets/image-20251126160741987.png" alt="image-20251126160741987" tabindex="0" loading="lazy"><figcaption>image-20251126160741987</figcaption></figure>
<div class="hint-container important">
<p class="hint-container-title">重要</p>
<p>补充：<code v-pre>Blender</code> 编辑模式下选中面后按下 <code v-pre>[i]</code> 键是执行 &quot;内插面&quot;（<code v-pre>Inset Faces</code>）操作，它会在选中的面内部创建一个缩小版本的新面，并保持与原面的连接。这就像在纸上画一个矩形，然后在内部画一个更小的矩形并连接它们的对应边。</p>
</div>
<p>然后再做一个挤出，可以使用快捷键 <code v-pre>[e]</code>，也可以使用工具。</p>
<figure><img src="@source/8.立体建模/assets/image-20251126161049804.png" alt="image-20251126161049804" tabindex="0" loading="lazy"><figcaption>image-20251126161049804</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251126161108317.png" alt="image-20251126161108317" tabindex="0" loading="lazy"><figcaption>image-20251126161108317</figcaption></figure>
<div class="hint-container important">
<p class="hint-container-title">重要</p>
<p>补充：挤出是 <code v-pre>Blender</code> 中最核心的建模操作之一，它通过复制选中的 <code v-pre>点/边/面</code> 并将它们沿垂直方向 <code v-pre>推/拉</code>，创建新的立体几何形状。</p>
<ul>
<li>
<p>点挤出：将点变为线</p>
</li>
<li>
<p>边挤出：将线变为面</p>
</li>
<li>
<p>面挤出：将面变为体</p>
</li>
</ul>
</div>
<p>然后给这个挤压后的牌子整体做一个倒角。</p>
<figure><img src="@source/8.立体建模/assets/image-20251126161919861.png" alt="image-20251126161919861" tabindex="0" loading="lazy"><figcaption>image-20251126161919861</figcaption></figure>
<p>最后我们做一个文本。</p>
<figure><img src="@source/8.立体建模/assets/image-20251126162548190.png" alt="image-20251126162548190" tabindex="0" loading="lazy"><figcaption>image-20251126162548190</figcaption></figure>
<p><code v-pre>Blender</code> 为了保持操作的连贯性，需要选中文本物体后切换到编辑模式后，才能编辑文本。</p>
<figure><img src="@source/8.立体建模/assets/image-20251126163054924.png" alt="image-20251126163054924" tabindex="0" loading="lazy"><figcaption>image-20251126163054924</figcaption></figure>
<p>然后我们可以修改文字的几何中心，方便我们后续的把文字吸附到牌子上。</p>
<figure><img src="@source/8.立体建模/assets/image-20251126164655806.png" alt="image-20251126164655806" tabindex="0" loading="lazy"><figcaption>image-20251126164655806</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251126165029859.png" alt="image-20251126165029859" tabindex="0" loading="lazy"><figcaption>image-20251126165029859</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251126165138683.png" alt="image-20251126165138683" tabindex="0" loading="lazy"><figcaption>image-20251126165138683</figcaption></figure>
<p>如果还有什么关于字体的修改的话，就可以在旁边进行修改。</p>
<figure><img src="@source/8.立体建模/assets/image-20251126165430387.png" alt="image-20251126165430387" tabindex="0" loading="lazy"><figcaption>image-20251126165430387</figcaption></figure>
<p>但是现在我们想要给字体加大前后的厚度怎么办呢？回到编辑模式没有工作栏的工具可以操作，那就只能使用修改器中的实体化了。</p>
<figure><img src="@source/8.立体建模/assets/image-20251126170416808.png" alt="image-20251126170416808" tabindex="0" loading="lazy"><figcaption>image-20251126170416808</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251126170539348.png" alt="image-20251126170539348" tabindex="0" loading="lazy"><figcaption>image-20251126170539348</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251126170556058.png" alt="image-20251126170556058" tabindex="0" loading="lazy"><figcaption>image-20251126170556058</figcaption></figure>
<h5 id="_3-2-1-4-背景水管" tabindex="-1"><a class="header-anchor" href="#_3-2-1-4-背景水管"><span>3.2.1.4.背景水管</span></a></h5>
<figure><img src="@source/8.立体建模/assets/image-20251126171522236.png" alt="image-20251126171522236" tabindex="0" loading="lazy"><figcaption>image-20251126171522236</figcaption></figure>
<p>在挖洞的效果中，经常会用到内插面和挤压操作。不过这次我们换一个更加彻底的，直接做出内插面后，使用快捷键 <code v-pre>[x]</code> 来选择删除面，就会让整个圆柱体被挖空到底。</p>
<figure><img src="@source/8.立体建模/assets/image-20251126172158932.png" alt="image-20251126172158932" tabindex="0" loading="lazy"><figcaption>image-20251126172158932</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251126172259887.png" alt="image-20251126172259887" tabindex="0" loading="lazy"><figcaption>image-20251126172259887</figcaption></figure>
<p>然后底部还有一个面，可以利用“桥接循环边”来完成消除。</p>
<figure><img src="@source/8.立体建模/assets/image-20251126173422806.png" alt="image-20251126173422806" tabindex="0" loading="lazy"><figcaption>image-20251126173422806</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251126173558621.png" alt="image-20251126173558621" tabindex="0" loading="lazy"><figcaption>image-20251126173558621</figcaption></figure>
<div class="hint-container important">
<p class="hint-container-title">重要</p>
<p>补充：桥接循环边是 <code v-pre>Blender</code> 编辑模式中连接两组环形边（<code v-pre>Edge Loops</code>）并在其间创建面的高级建模工具，类似填充工具但能一次性连接多组边并自定义连接方式。可以在两个环形边，创建新面连接对应顶点 → 形成平滑过渡的网格结构。这就像在两个圆形管道之间建立平滑连接的弯头。</p>
</div>
<p>再复制一些，做个倒角和表面细分，并且使用 <code v-pre>[ctrl+l]</code> 来关联修改器。</p>
<figure><img src="@source/8.立体建模/assets/image-20251126175557540.png" alt="image-20251126175557540" tabindex="0" loading="lazy"><figcaption>image-20251126175557540</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251126175637001.png" alt="image-20251126175637001" tabindex="0" loading="lazy"><figcaption>image-20251126175637001</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251126175818657.png" alt="image-20251126175818657" tabindex="0" loading="lazy"><figcaption>image-20251126175818657</figcaption></figure>
<h5 id="_3-2-1-5-点火火箭" tabindex="-1"><a class="header-anchor" href="#_3-2-1-5-点火火箭"><span>3.2.1.5.点火火箭</span></a></h5>
<p>接下来就是造火箭了。</p>
<figure><img src="@source/8.立体建模/assets/image-20251126180605151.png" alt="image-20251126180605151" tabindex="0" loading="lazy"><figcaption>image-20251126180605151</figcaption></figure>
<p>然后对圆柱体的顶部圆面进行挤出。</p>
<figure><img src="@source/8.立体建模/assets/image-20251126210253602.png" alt="image-20251126210253602" tabindex="0" loading="lazy"><figcaption>image-20251126210253602</figcaption></figure>
<p>然后缩小新的顶部圆面。</p>
<figure><img src="@source/8.立体建模/assets/image-20251126210329237.png" alt="image-20251126210329237" tabindex="0" loading="lazy"><figcaption>image-20251126210329237</figcaption></figure>
<p>接下来不断挤出不断缩小，重复直到成型即可。</p>
<figure><img src="@source/8.立体建模/assets/image-20251126210513190.png" alt="image-20251126210513190" tabindex="0" loading="lazy"><figcaption>image-20251126210513190</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251126210528557.png" alt="image-20251126210528557" tabindex="0" loading="lazy"><figcaption>image-20251126210528557</figcaption></figure>
<p>然后把尾部缩小就可以。</p>
<figure><img src="@source/8.立体建模/assets/image-20251126210718993.png" alt="image-20251126210718993" tabindex="0" loading="lazy"><figcaption>image-20251126210718993</figcaption></figure>
<p>接下来我们需要使用环切工具，快捷键是 <code v-pre>[ctrl+r]</code>，如果长按就可以做环切面的拖动，使用鼠标滚轮可以调整环切的平行面个数。</p>
<figure><img src="@source/8.立体建模/assets/image-20251126215343181.png" alt="image-20251126215343181" tabindex="0" loading="lazy"><figcaption>image-20251126215343181</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251126215350931.png" alt="image-20251126215350931" tabindex="0" loading="lazy"><figcaption>image-20251126215350931</figcaption></figure>
<p>如果确认了环切的个数和位置，就可以鼠标双击左键来确定环切面。</p>
<figure><img src="@source/8.立体建模/assets/image-20251126215601061.png" alt="image-20251126215601061" tabindex="0" loading="lazy"><figcaption>image-20251126215601061</figcaption></figure>
<p>我们要这个环切的目的是为了更加精细化调整我们的火箭体，然后给一个细分曲面。</p>
<figure><img src="@source/8.立体建模/assets/image-20251126221212624.png" alt="image-20251126221212624" tabindex="0" loading="lazy"><figcaption>image-20251126221212624</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251126221600746.png" alt="image-20251126221600746" tabindex="0" loading="lazy"><figcaption>image-20251126221600746</figcaption></figure>
<div class="hint-container important">
<p class="hint-container-title">重要</p>
<p>补充：在 <code v-pre>Blender</code> 编辑模式中，环切是最常用的建模工具之一，核心作用是在模型表面添加一条或多条 “环形连续的边”，用于细分网格、增加细节或辅助塑形，是硬表面建模、角色建模中调整拓扑结构的关键操作。</p>
<p>想象你有一个圆柱体（类似易拉罐），“环切” 就相当于用一把刀平行于上下底面切一圈，但不切断模型，切开的位置会新增一圈顶点和边，把原来的长面分成两个（或多个）平行的面。对立方体、角色头部等复杂模型，环切会自动识别模型的 “环形边回路”，沿最短路径生成连续的新边，确保网格拓扑结构规整（不会出现杂乱的三角面）。</p>
</div>
<p>另外，这里的三个是否显示修改器作用的选项可以看一下，分别对应在 <code v-pre>编辑模式、物体模式、渲染</code> 中是否显示修改器的作用。</p>
<figure><img src="@source/8.立体建模/assets/image-20251126221949967.png" alt="image-20251126221949967" tabindex="0" loading="lazy"><figcaption>image-20251126221949967</figcaption></figure>
<p>不过下面的褶皱有些难看，我们可以在底部做一些倒角。</p>
<figure><img src="@source/8.立体建模/assets/image-20251126222957828.png" alt="image-20251126222957828" tabindex="0" loading="lazy"><figcaption>image-20251126222957828</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251126223016638.png" alt="image-20251126223016638" tabindex="0" loading="lazy"><figcaption>image-20251126223016638</figcaption></figure>
<p>按照自己喜欢去调整就可以，然后我再加一个环切，并且做一些细节的调整。</p>
<figure><img src="@source/8.立体建模/assets/image-20251126223228378.png" alt="image-20251126223228378" tabindex="0" loading="lazy"><figcaption>image-20251126223228378</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251126224749742.png" alt="image-20251126224749742" tabindex="0" loading="lazy"><figcaption>image-20251126224749742</figcaption></figure>
<p>然后接下来就需要做两个机翼，先加一个正方体进行缩放，然后直接给出一个应用细分的效果</p>
<figure><img src="@source/8.立体建模/assets/image-20251126230637076.png" alt="image-20251126230637076" tabindex="0" loading="lazy"><figcaption>image-20251126230637076</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251126230603913.png" alt="image-20251126230603913" tabindex="0" loading="lazy"><figcaption>image-20251126230603913</figcaption></figure>
<p>然后编辑模式加一个分段。</p>
<figure><img src="@source/8.立体建模/assets/image-20251126230747810.png" alt="image-20251126230747810" tabindex="0" loading="lazy"><figcaption>image-20251126230747810</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251126231353561.png" alt="image-20251126231353561" tabindex="0" loading="lazy"><figcaption>image-20251126231353561</figcaption></figure>
<p>我们还需要稍微压扁一下，不过我们可以发现，很明显调整点线面调整的都是线框，而不是渲染后的图像中的面。</p>
<figure><img src="@source/8.立体建模/assets/image-20251126231620223.png" alt="image-20251126231620223" tabindex="0" loading="lazy"><figcaption>image-20251126231620223</figcaption></figure>
<p>然后这种完成左右对称的物体我们可以采取更加专业的关联复制，这样一旦有一个机翼被修改，另外一个复制过去的机翼也会一起被修改，这个关联好后的机翼的轴心切换为游标，然后根据游标去 <code v-pre>90 度</code> 旋转就可以啦。</p>
<figure><img src="@source/8.立体建模/assets/image-20251126231804499.png" alt="image-20251126231804499" tabindex="0" loading="lazy"><figcaption>image-20251126231804499</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251126232020914.png" alt="image-20251126232020914" tabindex="0" loading="lazy"><figcaption>image-20251126232020914</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251126232129957.png" alt="image-20251126232129957" tabindex="0" loading="lazy"><figcaption>image-20251126232129957</figcaption></figure>
<p>自己做一些细微调整就可以了。</p>
<figure><img src="@source/8.立体建模/assets/image-20251126232259928.png" alt="" tabindex="0" loading="lazy"><figcaption><code v-pre>image-20251126232259928</code></figcaption></figure>
<p>如果觉得有点过于扁了，在编辑模式下选中一个面，然后使用快捷键 <code v-pre>[a]</code> 就可以把该物体的所有面全部选中。</p>
<figure><img src="@source/8.立体建模/assets/image-20251126232459911.png" alt="image-20251126232459911" tabindex="0" loading="lazy"><figcaption>image-20251126232459911</figcaption></figure>
<p>然后依旧是利用挤出和倒角，做一个底部凹槽。</p>
<figure><img src="@source/8.立体建模/assets/image-20251126233431249.png" alt="image-20251126233431249" tabindex="0" loading="lazy"><figcaption>image-20251126233431249</figcaption></figure>
<p>接着就需要做发射时的火焰。</p>
<figure><img src="@source/8.立体建模/assets/image-20251126233632109.png" alt="image-20251126233632109" tabindex="0" loading="lazy"><figcaption>image-20251126233632109</figcaption></figure>
<p>不再细说了，按照之前的操作来捏吧（可以使用衰变来快速达到效果）！</p>
<figure><img src="@source/8.立体建模/assets/image-20251126233851072.png" alt="image-20251126233851072" tabindex="0" loading="lazy"><figcaption>image-20251126233851072</figcaption></figure>
<p>再加上细分修改器。</p>
<figure><img src="@source/8.立体建模/assets/image-20251126234058840.png" alt="image-20251126234058840" tabindex="0" loading="lazy"><figcaption>image-20251126234058840</figcaption></figure>
<p>实际上捏模型，有各种实现方法，但是我个人认为只要有比较多的实践，慢慢就可以摸索到一些经验的东西。</p>
<div class="hint-container important">
<p class="hint-container-title">重要</p>
<p>补充：如果倒角做的比较不自然，则可以稍微尝试修改一下倒角这里的几何数据。</p>
<figure><img src="@source/8.立体建模/assets/image-20251127005154036.png" alt="image-20251127005154036" tabindex="0" loading="lazy"><figcaption>image-20251127005154036</figcaption></figure>
</div>
<h5 id="_3-1-2-6-灯光板子" tabindex="-1"><a class="header-anchor" href="#_3-1-2-6-灯光板子"><span>3.1.2.6.灯光板子</span></a></h5>
<p>这个很简单，就是先创建变换后，做倒角和表面细分即可。</p>
<figure><img src="@source/8.立体建模/assets/image-20251127010445159.png" alt="image-20251127010445159" tabindex="0" loading="lazy"><figcaption>image-20251127010445159</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251127011717238.png" alt="image-20251127011717238" tabindex="0" loading="lazy"><figcaption>image-20251127011717238</figcaption></figure>
<p>上面我们先做好一个了，但是这次我们不要一个一个去复制了，利用阵列修改器就可以做到精确无误的排列。</p>
<figure><img src="@source/8.立体建模/assets/image-20251127011959434.png" alt="image-20251127011959434" tabindex="0" loading="lazy"><figcaption>image-20251127011959434</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251127012057624.png" alt="image-20251127012057624" tabindex="0" loading="lazy"><figcaption>image-20251127012057624</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251127012331544.png" alt="image-20251127012331544" tabindex="0" loading="lazy"><figcaption>image-20251127012331544</figcaption></figure>
<p>接下来就做一些背景的装饰。</p>
<figure><img src="@source/8.立体建模/assets/image-20251127013803103.png" alt="image-20251127013803103" tabindex="0" loading="lazy"><figcaption>image-20251127013803103</figcaption></figure>
<p>但是这里就有新的问题，这里的到角做太过会重叠，但是我们需要的效果是一个非常圆的圆角效果。</p>
<figure><img src="@source/8.立体建模/assets/image-20251127013852749.png" alt="image-20251127013852749" tabindex="0" loading="lazy"><figcaption>image-20251127013852749</figcaption></figure>
<p>这种问题怎么避免呢？很简单，选择闲置重叠即可。</p>
<figure><img src="@source/8.立体建模/assets/image-20251127014024968.png" alt="image-20251127014024968" tabindex="0" loading="lazy"><figcaption>image-20251127014024968</figcaption></figure>
<p>不过这样做的话又会出现一些新的问题，就是如果做一个内插面的话，这些因为需要避免倒角穿模而被重叠在一起的点会在生成内侧插面的时候形成一条线。</p>
<figure><img src="@source/8.立体建模/assets/image-20251127014859462.png" alt="image-20251127014859462" tabindex="0" loading="lazy"><figcaption>image-20251127014859462</figcaption></figure>
<p>因此我们需要把这些重合点点做一个合并，快捷键是 <code v-pre>[m]</code> 然后选按距离。</p>
<figure><img src="@source/8.立体建模/assets/image-20251127015317414.png" alt="image-20251127015317414" tabindex="0" loading="lazy"><figcaption>image-20251127015317414</figcaption></figure>
<p>此时再做创建内插面就不会出现刚刚的情况了，再继续做个挤出。</p>
<figure><img src="@source/8.立体建模/assets/image-20251127015420891.png" alt="image-20251127015420891" tabindex="0" loading="lazy"><figcaption>image-20251127015420891</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251127015719519.png" alt="image-20251127015719519" tabindex="0" loading="lazy"><figcaption>image-20251127015719519</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251127015833135.png" alt="image-20251127015833135" tabindex="0" loading="lazy"><figcaption>image-20251127015833135</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251127020503796.png" alt="image-20251127020503796" tabindex="0" loading="lazy"><figcaption>image-20251127020503796</figcaption></figure>
<p>继续添加一个波浪线装饰物。</p>
<figure><img src="@source/8.立体建模/assets/image-20251127020635916.png" alt="image-20251127020635916" tabindex="0" loading="lazy"><figcaption>image-20251127020635916</figcaption></figure>
<p>进入编辑模式就可以进行对曲线的修改。</p>
<figure><img src="@source/8.立体建模/assets/image-20251127020742170.png" alt="image-20251127020742170" tabindex="0" loading="lazy"><figcaption>image-20251127020742170</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251127020853442.png" alt="image-20251127020853442" tabindex="0" loading="lazy"><figcaption>image-20251127020853442</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251127021016857.png" alt="image-20251127021016857" tabindex="0" loading="lazy"><figcaption>image-20251127021016857</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251127021523282.png" alt="image-20251127021523282" tabindex="0" loading="lazy"><figcaption>image-20251127021523282</figcaption></figure>
<p>还有仿制苹果风格的三个按钮。</p>
<figure><img src="@source/8.立体建模/assets/image-20251127023019651.png" alt="image-20251127023019651" tabindex="0" loading="lazy"><figcaption>image-20251127023019651</figcaption></figure>
<div class="hint-container important">
<p class="hint-container-title">重要</p>
<p>补充：小插曲，这里有一个小问题。应该是被我误操作了，导致树体和树叶合并为一个物体。</p>
<figure><img src="@source/8.立体建模/assets/image-20251127132510732.png" alt="image-20251127132510732" tabindex="0" loading="lazy"><figcaption>image-20251127132510732</figcaption></figure>
<p>那么怎么进行分离呢？先进入编辑模式选中树体的其中一个面，然后使用 <code v-pre>[l]</code> 来选中关于树体的部分（如果使用 <code v-pre>[a]</code> 就会导致整棵树全部被选中）。</p>
<figure><img src="@source/8.立体建模/assets/image-20251127132947695.png" alt="image-20251127132947695" tabindex="0" loading="lazy"><figcaption>image-20251127132947695</figcaption></figure>
<p>然后右键使用选中项来分离即可。</p>
<figure><img src="@source/8.立体建模/assets/image-20251127144735638.png" alt="image-20251127144735638" tabindex="0" loading="lazy"><figcaption>image-20251127144735638</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251127133124219.png" alt="image-20251127133124219" tabindex="0" loading="lazy"><figcaption>image-20251127133124219</figcaption></figure>
</div>
<h5 id="_3-1-2-7-拍摄背景" tabindex="-1"><a class="header-anchor" href="#_3-1-2-7-拍摄背景"><span>3.1.2.7.拍摄背景</span></a></h5>
<p>为了光影效果，这里再做个简单的场景方便拍摄。</p>
<figure><img src="@source/8.立体建模/assets/image-20251127134019565.png" alt="image-20251127134019565" tabindex="0" loading="lazy"><figcaption>image-20251127134019565</figcaption></figure>
<h4 id="_3-2-2-摄影机位" tabindex="-1"><a class="header-anchor" href="#_3-2-2-摄影机位"><span>3.2.2.摄影机位</span></a></h4>
<p>这次我们不再手动调整摄像机，而是让摄像机自己确定，使用 <code v-pre>[ctrl+alt+数字0]</code> 就可以打开摄像机视角。然后再自己微调一下就可以，可以看到摄影机已经自动进行的对准。</p>
<figure><img src="@source/8.立体建模/assets/image-20251127135332269.png" alt="image-20251127135332269" tabindex="0" loading="lazy"><figcaption>image-20251127135332269</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251127135433064.png" alt="image-20251127135433064" tabindex="0" loading="lazy"><figcaption>image-20251127135433064</figcaption></figure>
<p>然后修改一下出图比例。</p>
<figure><img src="@source/8.立体建模/assets/image-20251127135821963.png" alt="image-20251127135821963" tabindex="0" loading="lazy"><figcaption>image-20251127135821963</figcaption></figure>
<p>如果觉得有点小了，可以调整一下镜头的焦距。</p>
<figure><img src="@source/8.立体建模/assets/image-20251127140046521.png" alt="image-20251127140046521" tabindex="0" loading="lazy"><figcaption>image-20251127140046521</figcaption></figure>
<h4 id="_3-2-3-灯光布局" tabindex="-1"><a class="header-anchor" href="#_3-2-3-灯光布局"><span>3.2.3.灯光布局</span></a></h4>
<p>我们先设置一个左上角的灯光。</p>
<figure><img src="@source/8.立体建模/assets/image-20251127140508909.png" alt="image-20251127140508909" tabindex="0" loading="lazy"><figcaption>image-20251127140508909</figcaption></figure>
<p>然后做个垂直分割方便我们观察摄影机视角的同时进行修改，这里观察的区域可以使用快捷键 <code v-pre>[t]</code> 来取消工具栏的显示，在显示叠加层选择取消基面和 <code v-pre>X,Y,Z</code> 就可以去除一些影响观察的因素，同时我们把视图着色方式改为渲染。</p>
<div class="hint-container caution">
<p class="hint-container-title">警告</p>
<p>警告：这里的显示叠加层如果被点击后取消会出现一个问题，无法在编辑模式中显示被选中的 <code v-pre>点、边、面</code> 元素。</p>
<figure><img src="@source/8.立体建模/assets/image-20251129223720676.png" alt="image-20251129223720676" tabindex="0" loading="lazy"><figcaption>image-20251129223720676</figcaption></figure>
</div>
<figure><img src="@source/8.立体建模/assets/image-20251127140441383.png" alt="image-20251127140441383" tabindex="0" loading="lazy"><figcaption>image-20251127140441383</figcaption></figure>
<p>还可以点击取消显示控制器。</p>
<figure><img src="@source/8.立体建模/assets/image-20251127140952697.png" alt="image-20251127140952697" tabindex="0" loading="lazy"><figcaption>image-20251127140952697</figcaption></figure>
<p>然后给一个 <code v-pre>10000w</code> 的灯光看看阴影效果。</p>
<figure><img src="@source/8.立体建模/assets/image-20251127141208650.png" alt="image-20251127141208650" tabindex="0" loading="lazy"><figcaption>image-20251127141208650</figcaption></figure>
<p>同时我们需要修改渲染器和渲染计算方式。</p>
<figure><img src="@source/8.立体建模/assets/image-20251127141543802.png" alt="image-20251127141543802" tabindex="0" loading="lazy"><figcaption>image-20251127141543802</figcaption></figure>
<p>如果发现阴影太实，就使调大灯光的半径。</p>
<figure><img src="@source/8.立体建模/assets/image-20251127141743572.png" alt="image-20251127141743572" tabindex="0" loading="lazy"><figcaption>image-20251127141743572</figcaption></figure>
<p>也可以考虑加一盏辅助灯光。</p>
<figure><img src="@source/8.立体建模/assets/image-20251127142123356.png" alt="image-20251127142123356" tabindex="0" loading="lazy"><figcaption>image-20251127142123356</figcaption></figure>
<div class="hint-container important">
<p class="hint-container-title">重要</p>
<p>补充：这里也可以观察一下您的 <code v-pre>GPU</code> 是否在工作，如果您是 <code v-pre>Winodws</code> 直接打开人物管理器观察即可，如果是 <code v-pre>Ubuntu</code> 可以安装 <code v-pre>nvtop</code> 来进行查看。</p>
<figure><img src="@source/8.立体建模/assets/image-20251127141938668.png" alt="image-20251127141938668" tabindex="0" loading="lazy"><figcaption>image-20251127141938668</figcaption></figure>
</div>
<p>还可以添加一个面灯加强轮廓。</p>
<figure><img src="@source/8.立体建模/assets/image-20251127152449578.png" alt="image-20251127152449578" tabindex="0" loading="lazy"><figcaption>image-20251127152449578</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251127152614627.png" alt="image-20251127152614627" tabindex="0" loading="lazy"><figcaption>image-20251127152614627</figcaption></figure>
<p>然后看情况决定是否需要给灯光添加暖色。同时为了有一个良好习惯，可以给灯光、摄影机、拍摄背景三者选中后使用快捷键 <code v-pre>[m]</code> 来做一个集合。</p>
<h4 id="_3-2-4-材质添加" tabindex="-1"><a class="header-anchor" href="#_3-2-4-材质添加"><span>3.2.4.材质添加</span></a></h4>
<p>先加一个细分着色。</p>
<figure><img src="@source/8.立体建模/assets/image-20251127130600130.png" alt="image-20251127130600130" tabindex="0" loading="lazy"><figcaption>image-20251127130600130</figcaption></figure>
<div class="hint-container important">
<p class="hint-container-title">重要</p>
<p>补充：关于平滑着色和曲线细分的区别。</p>
<table>
<thead>
<tr>
<th>特性</th>
<th>平滑着色（Smooth Shading）</th>
<th>曲面细分（Subdivision Surface）</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>核心原理</strong></td>
<td>不改变模型网格，仅通过计算面与面之间的法线方向，让渲染时的光影过渡更平滑（视觉上消除棱角）</td>
<td>通过算法新增大量顶点和边，将原始粗网格 “拆分成” 更细密的网格，从物理结构上让模型表面变光滑</td>
</tr>
<tr>
<td><strong>网格变化</strong></td>
<td>无任何网格新增 / 修改，顶点、边、面数量不变（非破坏性）</td>
<td>显著增加网格密度（比如 1 个四边形面可拆成 4 个 / 8 个），改变原始网格结构（可通过修改器保留可逆性）</td>
</tr>
<tr>
<td><strong>视觉效果</strong></td>
<td>消除 “硬边”，光影过渡自然，但模型轮廓仍保持原始形状（比如立方体平滑后还是立方体轮廓，只是面看起来不生硬）</td>
<td>不仅光影平滑，模型轮廓也会变圆润（比如立方体细分后会接近球体，棱角被 “磨平”）</td>
</tr>
<tr>
<td><strong>操作方式</strong></td>
<td>物体模式 / 编辑模式均可，点击工具栏 “平滑着色” 按钮（或快捷键 Shift+Alt+S），直接作用于模型 / 选中面</td>
<td>多通过添加 “曲面细分修改器” 实现，可调整细分级别（1-6 级）、细分算法（Catmull-Clark / 简单）</td>
</tr>
<tr>
<td><strong>性能影响</strong></td>
<td>几乎不影响性能（仅改变渲染计算方式，不增加数据量）</td>
<td>细分级别越高，网格面数越多，建模 / 渲染性能消耗越大（比如级别 6 可能导致面数破百万）</td>
</tr>
<tr>
<td><strong>适用场景</strong></td>
<td>快速优化模型视觉效果，适合本身拓扑规整但棱角生硬的模型（如机械零件、建筑模型）</td>
<td>制作高精度光滑曲面（如角色皮肤、产品外壳、有机形态），或需要细分后进一步雕刻细节</td>
</tr>
</tbody>
</table>
</div>
<p>然后就可以开始我们的材质添加了，先修改拍摄背景的材质。</p>
<figure><img src="@source/8.立体建模/assets/image-20251127142617220.png" alt="image-20251127142617220" tabindex="0" loading="lazy"><figcaption>image-20251127142617220</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251127143812826.png" alt="image-20251127143812826" tabindex="0" loading="lazy"><figcaption>image-20251127143812826</figcaption></figure>
<p>然后设置了基础色后可以做关联材质。</p>
<figure><img src="@source/8.立体建模/assets/image-20251127143903607.png" alt="image-20251127143903607" tabindex="0" loading="lazy"><figcaption>image-20251127143903607</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251127143939068.png" alt="image-20251127143939068" tabindex="0" loading="lazy"><figcaption>image-20251127143939068</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251127144044488.png" alt="image-20251127144044488" tabindex="0" loading="lazy"><figcaption>image-20251127144044488</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251127144542660.png" alt="image-20251127144542660" tabindex="0" loading="lazy"><figcaption>image-20251127144542660</figcaption></figure>
<p>另外，由于我们需要对三个按钮分别三色，而我们之前做的又是矩阵序列，我们需要做隔离，不让无论上哪个按钮的材质，都会导致三个按钮一起变色。</p>
<figure><img src="@source/8.立体建模/assets/image-20251128173236678.png" alt="image-20251128173236678" tabindex="0" loading="lazy"><figcaption>image-20251128173236678</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251128173203900.png" alt="image-20251128173203900" tabindex="0" loading="lazy"><figcaption>image-20251128173203900</figcaption></figure>
<p>我们先应用一下阵列修改器，然后 <code v-pre>[tab]</code> 进入编辑模式，点击菜单栏上的网格按钮。在网格菜单列表中，打开分离选项，选择按松散块，即可将阵列物体变成各自独立的物体。</p>
<figure><img src="@source/8.立体建模/assets/image-20251128173414762.png" alt="image-20251128173414762" tabindex="0" loading="lazy"><figcaption>image-20251128173414762</figcaption></figure>
<p>然后分别修改材质就可以了。</p>
<figure><img src="@source/8.立体建模/assets/image-20251128173728340.png" alt="image-20251128173728340" tabindex="0" loading="lazy"><figcaption>image-20251128173728340</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251127150347218.png" alt="image-20251127150347218" tabindex="0" loading="lazy"><figcaption>image-20251127150347218</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251127150610687.png" alt="image-20251127150610687" tabindex="0" loading="lazy"><figcaption>image-20251127150610687</figcaption></figure>
<p>这些材质基本都是上个色就可以了，但是我们这里有比较特殊的材质需要添加，这里的灯光和火箭发射火需要添加一些自发光的材质。</p>
<figure><img src="@source/8.立体建模/assets/image-20251127153854901.png" alt="image-20251127153725975" tabindex="0" loading="lazy"><figcaption>image-20251127153725975</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251127154128524.png" alt="image-20251127154128524" tabindex="0" loading="lazy"><figcaption>image-20251127154128524</figcaption></figure>
<p>然后这里的渲染采样可以稍微调低一些，毕竟我们这是进行一个渲染测试就可以。</p>
<figure><img src="@source/8.立体建模/assets/image-20251127154228741.png" alt="image-20251127154228741" tabindex="0" loading="lazy"><figcaption>image-20251127154228741</figcaption></figure>
<p>这里的风格化可以修改一下看看效果。</p>
<figure><img src="@source/8.立体建模/assets/image-20251127154419859.png" alt="image-20251127154419859" tabindex="0" loading="lazy"><figcaption>image-20251127154419859</figcaption></figure>
<h4 id="_3-2-5-动画制作" tabindex="-1"><a class="header-anchor" href="#_3-2-5-动画制作"><span>3.2.5.动画制作</span></a></h4>
<p>在使用 <code v-pre>Blender</code> 之前需要稍微了解一下 <code v-pre>Blender</code> 关键帧的使用，这里稍微演示一下，和一些 <code v-pre>AE</code> 软件是比较类似的。首先新建一个项目，然后打开一个最为基本的场景。</p>
<figure><img src="@source/8.立体建模/assets/image-20251125122716147.png" alt="image-20251125122716147" tabindex="0" loading="lazy"><figcaption>image-20251125122716147</figcaption></figure>
<p>这里我拉高了关于动画区的工作窗口，您需要在这里编辑关键帧。</p>
<p>所有的动画都是记录物体在不同时间下各种属性的变化，而关键帧和关键帧之间就会具备产生这个变化的函数，在不设置变化函数的情况下，默认是匀速变化属性的（这里暂时只研究匀速的情况）。</p>
<p>比如我们要做到这个物体运动，那么至少需要两个关键帧，但是如何设置关键帧呢？需要选中想要做动画的物体，然后指定开始动画的起点，在编辑器属性中的变换中点击位置 <code v-pre>X</code> 最右侧的小圆点，就成功设置好了起点关键帧，同时数值会变为黄色高亮（表示这个物体正在处于关键帧处）。</p>
<figure><img src="@source/8.立体建模/assets/image-20251125123037323.png" alt="image-20251125123037323" tabindex="0" loading="lazy"><figcaption>image-20251125123037323</figcaption></figure>
<p>然后我们移动下方的帧，会发现原本的帧位出现了一个白色小棱形，并且属性位置 <code v-pre>X</code> 中的数值显示为绿色高亮（表示这个物体此时所在帧的位置没有处于关键帧处），小圆点变成了空性棱形。</p>
<figure><img src="@source/8.立体建模/assets/image-20251125123739414.png" alt="image-20251125123739414" tabindex="0" loading="lazy"><figcaption>image-20251125123739414</figcaption></figure>
<p>现在我们在新的帧位处调整物体的属性位置 <code v-pre>X</code>，就会发现数值从绿色高亮变成了黄色高亮（表示这个物体此时所在帧的位置正在处于关键帧处）。</p>
<figure><img src="@source/8.立体建模/assets/image-20251125123952789.png" alt="image-20251125123952789" tabindex="0" loading="lazy"><figcaption>image-20251125123952789</figcaption></figure>
<p>接下来再点一下空心小棱形，就可以成功设置终点关键帧了，重新播放就可以获得一段动画。</p>
<figure><img src="@source/8.立体建模/assets/image-20251125124055929.png" alt="image-20251125124055929" tabindex="0" loading="lazy"><figcaption>image-20251125124055929</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/1764095414.gif" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>稍微一结合就可以开始制作复杂的动画了。</p>
<figure><img src="@source/8.立体建模/assets/1764096660.gif" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>另外这里的工具也值得您使用体验一下。</p>
<figure><img src="@source/8.立体建模/assets/image-20251126024944894.png" alt="image-20251126024944894" tabindex="0" loading="lazy"><figcaption>image-20251126024944894</figcaption></figure>
<p>顺带一提，如果您发现设置好物体后的关键帧不见了，但是播放后发现物体的动画效果还在，那么可能是因为您没有选中已经设置好动画的物体。</p>
<figure><img src="@source/8.立体建模/assets/image-20251126025919337.png" alt="image-20251126025919337" tabindex="0" loading="lazy"><figcaption>image-20251126025919337</figcaption></figure>
<p>另外，打关键帧也可以鼠标左键选中物体，并且鼠标光标悬浮在目标物体上，然后使用快捷键 <code v-pre>[k]</code>，选择新出现菜单中的属性来快速打上，这点您可以试一试（所以有些教程也会管加帧的过程叫 <code v-pre>K</code> 帧）。</p>
<figure><img src="@source/8.立体建模/assets/image-20251126032143865.png" alt="image-20251126032143865" tabindex="0" loading="lazy"><figcaption>image-20251126032143865</figcaption></figure>
<p>假设您使用的是位置，那么和位置相关的熟悉都会开始变成黄色高亮，并且打上一个开始关键帧。</p>
<figure><img src="@source/8.立体建模/assets/image-20251126032303619.png" alt="image-20251126032303619" tabindex="0" loading="lazy"><figcaption>image-20251126032303619</figcaption></figure>
<p>拖动帧后，再去结合工具来调整位置。</p>
<figure><img src="@source/8.立体建模/assets/image-20251126032558840.png" alt="image-20251126032558840" tabindex="0" loading="lazy"><figcaption>image-20251126032558840</figcaption></figure>
<p>继续使用快捷键 <code v-pre>[k]</code> 就可以记录结束关键帧，然后播放验证动画就可以了。</p>
<figure><img src="@source/8.立体建模/assets/1764098876.gif" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>然后我们可以去除掉一些干扰因素，避免影响我们做动画。</p>
<figure><img src="@source/8.立体建模/assets/image-20251127155632290.png" alt="image-20251127155632290" tabindex="0" loading="lazy"><figcaption>image-20251127155632290</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251127155747813.png" alt="image-20251127155747813" tabindex="0" loading="lazy"><figcaption>image-20251127155747813</figcaption></figure>
<p>然后拉开时间轴，准备开始制作动画。我们先把帧数调少一些，用不了那么多，然后使用快捷键 <code v-pre>[i]</code> 设置一个关键帧，</p>
<figure><img src="@source/8.立体建模/assets/image-20251127160208865.png" alt="image-20251127160208865" tabindex="0" loading="lazy"><figcaption>image-20251127160208865</figcaption></figure>
<p>这里使用鼠标滚轮可以放大时间轴，使用鼠标中键可以左右移动时间轴。然后我们可以学习一个操作，选中一个物体后，可以使用 <code v-pre>[ctrl+i]</code> 来反选其他的物体，最后使用 <code v-pre>[h]</code> 来快速隐藏其他的物体，使用 <code v-pre>[alt+h]</code> 就可以恢复显示。</p>
<figure><img src="@source/8.立体建模/assets/image-20251127160956407.png" alt="image-20251127160956407" tabindex="0" loading="lazy"><figcaption>image-20251127160956407</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251127161006092.png" alt="image-20251127161006092" tabindex="0" loading="lazy"><figcaption>image-20251127161006092</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251127161230434.png" alt="image-20251127161230434" tabindex="0" loading="lazy"><figcaption>image-20251127161230434</figcaption></figure>
<p>但是我们需要的不是这种缩放，是基于地面的缩放，因此我们需要修改这个物体的原点到底部的中心。</p>
<figure><img src="@source/8.立体建模/assets/image-20251127161556417.png" alt="image-20251127161556417" tabindex="0" loading="lazy"><figcaption>image-20251127161556417</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251127161603956.png" alt="image-20251127161603956" tabindex="0" loading="lazy"><figcaption>image-20251127161603956</figcaption></figure>
<p>可以看看效果，这样缩放的效果就不是中心缩放动画了。</p>
<figure><img src="@source/8.立体建模/assets/1764231867000.gif" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251127164013331.png" alt="image-20251127164013331" tabindex="0" loading="lazy"><figcaption>image-20251127164013331</figcaption></figure>
<p>但是这种关联会导致两个物体的动画数据的同步的，我们需要单独修改每个物体缩放的时机，因此需要做分离。</p>
<figure><img src="@source/8.立体建模/assets/image-20251127164412317.png" alt="image-20251127164412317" tabindex="0" loading="lazy"><figcaption>image-20251127164412317</figcaption></figure>
<p>然后调整不同物体的动画出现时机。</p>
<figure><img src="@source/8.立体建模/assets/1764233143.gif" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>可以按照自己的舒适度调整一下，然后继续类似的做出小树生长的动画。</p>
<figure><img src="@source/8.立体建模/assets/image-20251127165130987.png" alt="image-20251127165130987" tabindex="0" loading="lazy"><figcaption>image-20251127165130987</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251127165250490.png" alt="image-20251127165250490" tabindex="0" loading="lazy"><figcaption>image-20251127165250490</figcaption></figure>
<p>自己稍微调整一下就可以做出下面的效果。</p>
<figure><img src="@source/8.立体建模/assets/1764235872.gif" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>然后我们处理一下小火箭的动画，我们可以绑定一个父子关系（父亲动儿子则跟着动，儿子动父亲则不会动）。</p>
<figure><img src="@source/8.立体建模/assets/image-20251127173011048.png" alt="image-20251127173011048" tabindex="0" loading="lazy"><figcaption>image-20251127173011048</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251127173741060.png" alt="image-20251127173741060" tabindex="0" loading="lazy"><figcaption>image-20251127173741060</figcaption></figure>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>注意：儿子们别关联错父亲了...而且这个父子关系也是可以清除的。</p>
<figure><img src="@source/8.立体建模/assets/image-20251127173935362.png" alt="image-20251127173935362" tabindex="0" loading="lazy"><figcaption>image-20251127173935362</figcaption></figure>
</div>
<figure><img src="@source/8.立体建模/assets/1764236724.gif" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>其他的动画您也可以自己加，就是注意电脑的性能是否达标（至少 <code v-pre>16G 内存 + 4G 显存</code> 以上，老实说这个电脑的性能渲染起来都需要个把小时）。</p>
<p>如果想要做得更加好看下，可以使用一个空对象来框住整个积木，然后使用父子关系来绑定（空对象为父亲），然后让空对象产生一个旋转的效果。</p>
<h4 id="_3-2-6-生成结果" tabindex="-1"><a class="header-anchor" href="#_3-2-6-生成结果"><span>3.2.6.生成结果</span></a></h4>
<figure><img src="@source/8.立体建模/assets/image-20251127232802264.png" alt="image-20251127232802264" tabindex="0" loading="lazy"><figcaption>image-20251127232802264</figcaption></figure>
<p>这里的百分比是指出图比例，如果不需要太精美的话，设置为 <code v-pre>50%</code> 就可以渲染出一半的出图比例。如果需要更加丝滑就可以调整到 <code v-pre>30</code> 左右，当然不建议调太高。</p>
<figure><img src="@source/8.立体建模/assets/image-20251127232056459.png" alt="image-20251127232056459" tabindex="0" loading="lazy"><figcaption>image-20251127232056459</figcaption></figure>
<p>另外减少结束点也可以加快渲染，默认是 <code v-pre>250</code>。</p>
<figure><img src="@source/8.立体建模/assets/image-20251127233106488.png" alt="image-20251127233106488" tabindex="0" loading="lazy"><figcaption>image-20251127233106488</figcaption></figure>
<p>其他的输出如上，然后直接输出视频即可。<img src="@source/8.立体建模/assets/image-20251127233231562.png" alt="image-20251127233231562" loading="lazy"></p>
<p>不过在大型项目中通常不这么做，原因是无法避免一些因为环境问题导致需要重复渲染的问题，这里给出更加专业的选项，可以不间断进行渲染。</p>
<figure><img src="@source/8.立体建模/assets/image-20251127233550906.png" alt="image-20251127233550906" tabindex="0" loading="lazy"><figcaption>image-20251127233550906</figcaption></figure>
<p>这里如果有颜色中如果有透明材质就需要选择 <code v-pre>RGBA</code>，如果没有就选择 <code v-pre>RDB</code>，而如果此时渲染就是一帧一帧的图片进行渲染，就算是渲染失败软件崩溃，也可以重新设置起始帧进行渲染。</p>
<figure><img src="@source/8.立体建模/assets/image-20251127233900882.png" alt="image-20251127233900882" tabindex="0" loading="lazy"><figcaption>image-20251127233900882</figcaption></figure>
<p>不过由于我的电脑不怎么好，渲染 <code v-pre>140</code> 多张图片就渲染了 <code v-pre>4</code> 小时，因此这里中止一下，先来做视频合成（后面会教如何中断渲染后继续渲染，而不是重头开始渲染）。</p>
<figure><img src="@source/8.立体建模/assets/image-20251127234138642.png" alt="image-20251127234138642" tabindex="0" loading="lazy"><figcaption>image-20251127234138642</figcaption></figure>
<p>然后新建立一个场景，把所有的图片序列放进去就可以了。</p>
<figure><img src="@source/8.立体建模/assets/image-20251127235600536.png" alt="image-20251127235600536" tabindex="0" loading="lazy"><figcaption>image-20251127235600536</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251127235522692.png" alt="image-20251127235522692" tabindex="0" loading="lazy"><figcaption>image-20251127235522692</figcaption></figure>
<p>效果如下。</p>
<figure><img src="@source/8.立体建模/assets/1764259094.gif" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>您也可以考虑使用帧而不是时间来显示。</p>
<figure><img src="@source/8.立体建模/assets/image-20251128000050236.png" alt="image-20251128000050236" tabindex="0" loading="lazy"><figcaption>image-20251128000050236</figcaption></figure>
<p>了另外这里的相关参数和刚刚的差不多。</p>
<figure><img src="@source/8.立体建模/assets/image-20251128000353319.png" alt="image-20251128000353319" tabindex="0" loading="lazy"><figcaption>image-20251128000353319</figcaption></figure>
<p>此时再来点击生成渲染动画就会非常快速了（真正消耗时间的都是图片）。</p>
<figure><img src="@source/8.立体建模/assets/image-20251128000459376.png" alt="image-20251128000459376" tabindex="0" loading="lazy"><figcaption>image-20251128000459376</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251128000624619.png" alt="image-20251128000624619" tabindex="0" loading="lazy"><figcaption>image-20251128000624619</figcaption></figure>
<p>渲染好的视频默认和 <code v-pre>.blender</code> 文件处于相同的位置。</p>
<h3 id="_3-3-金币基站" tabindex="-1"><a class="header-anchor" href="#_3-3-金币基站"><span>3.3.金币基站</span></a></h3>
<div class="hint-container important">
<p class="hint-container-title">重要</p>
<p>补充：这一节主要学习关于建模的材质添加，并且继续强化一些基础操作</p>
</div>
<h4 id="_3-3-1-物体建模" tabindex="-1"><a class="header-anchor" href="#_3-3-1-物体建模"><span>3.3.1.物体建模</span></a></h4>
<h5 id="_3-3-1-1-底部物体" tabindex="-1"><a class="header-anchor" href="#_3-3-1-1-底部物体"><span>3.3.1.1.底部物体</span></a></h5>
<p>先做一个基础的底部，这个底部在 <code v-pre>[tab]</code> 编辑模式下选中四条边做一个倒角。</p>
<figure><img src="@source/8.立体建模/assets/image-20251129213816986.png" alt="image-20251129213816986" tabindex="0" loading="lazy"><figcaption>image-20251129213816986</figcaption></figure>
<p>然后我们需要向周围做一个突出，以前做这种突出都是直接复制一份后缩放叠加在就可以。但是这次我们采取一个新的方法，我们使用编辑模式下的环切工具做一个环切。</p>
<figure><img src="@source/8.立体建模/assets/image-20251129214135351.png" alt="image-20251129214135351" tabindex="0" loading="lazy"><figcaption>image-20251129214135351</figcaption></figure>
<p>然后给这个环切线应用一个倒角工具。</p>
<figure><img src="@source/8.立体建模/assets/image-20251129214259686.png" alt="image-20251129214259686" tabindex="0" loading="lazy"><figcaption>image-20251129214259686</figcaption></figure>
<p>然后我们需要使用选择工具把最上面的一层侧面选中，但是一个一个点击过于麻烦，可以考虑使用一个非常便捷的快捷键工具 <code v-pre>[ctrl+alt+鼠标左键选中面]</code>（注意在编辑模式中使用 <code v-pre>[3]</code> 切换到选择面的模式）。</p>
<figure><img src="@source/8.立体建模/assets/image-20251129215721552.png" alt="image-20251129215721552" tabindex="0" loading="lazy"><figcaption>image-20251129215721552</figcaption></figure>
<div class="hint-container important">
<p class="hint-container-title">重要</p>
<p>补充：这里的 <code v-pre>[ctrl+alt]</code> 靠近那哪一个方向就往哪一个方向进行环选。</p>
<figure><img src="@source/8.立体建模/assets/image-20251129215005702.png" alt="image-20251129215005702" tabindex="0" loading="lazy"><figcaption>image-20251129215005702</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251129215018697.png" alt="image-20251129215018697" tabindex="0" loading="lazy"><figcaption>image-20251129215018697</figcaption></figure>
</div>
<p>然后都分别做一个沿着法向挤出（单纯的挤出太过于自由不好把控方向）。</p>
<figure><img src="@source/8.立体建模/assets/image-20251129220020679.png" alt="image-20251129220020679" tabindex="0" loading="lazy"><figcaption>image-20251129220020679</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251129220049135.png" alt="image-20251129220049135" tabindex="0" loading="lazy"><figcaption>image-20251129220049135</figcaption></figure>
<p>然后再使用修改器给整体的物体都带上倒角，并且应用一下全部变换。</p>
<figure><img src="@source/8.立体建模/assets/image-20251129220328963.png" alt="image-20251129220328963" tabindex="0" loading="lazy"><figcaption>image-20251129220328963</figcaption></figure>
<h5 id="_3-3-1-2-修饰组件" tabindex="-1"><a class="header-anchor" href="#_3-3-1-2-修饰组件"><span>3.3.1.2.修饰组件</span></a></h5>
<p><code v-pre>ok</code>，现在很快完成了底部的搭建，现在我们需要给底部做一些装饰了，首先给出一个阵列修改器，来做装饰。</p>
<figure><img src="@source/8.立体建模/assets/image-20251129221120696.png" alt="image-20251129221120696" tabindex="0" loading="lazy"><figcaption>image-20251129221120696</figcaption></figure>
<p>然后在侧面做一个凹槽，并且做一个倒角。</p>
<figure><img src="@source/8.立体建模/assets/image-20251129221848605.png" alt="image-20251129221848605" tabindex="0" loading="lazy"><figcaption>image-20251129221848605</figcaption></figure>
<p>然后选中两个面隔离出来做内插面，我们来做一个镂空的效果，选中两个内插面，使用 <code v-pre>[x]</code> 删除面。</p>
<figure><img src="@source/8.立体建模/assets/image-20251129222321001.png" alt="image-20251129222321001" tabindex="0" loading="lazy"><figcaption>image-20251129222321001</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251129222412417.png" alt="image-20251129222412417" tabindex="0" loading="lazy"><figcaption>image-20251129222412417</figcaption></figure>
<p>然后做个顶部的突起，这个很简单，做一个内插图，然后再做个挤出就可以。刚刚我们是使用快捷键 <code v-pre>[shift+alt+鼠标左键]</code> 来选环选边，我们类似的也可以用来环选线（但是只需要点击一下就可以）。</p>
<figure><img src="@source/8.立体建模/assets/image-20251129224558119.png" alt="image-20251129224558119" tabindex="0" loading="lazy"><figcaption>image-20251129224558119</figcaption></figure>
<p>然后右键选择“桥接入循环边”来生成新的面。</p>
<figure><img src="@source/8.立体建模/assets/image-20251129224627487.png" alt="image-20251129224627487" tabindex="0" loading="lazy"><figcaption>image-20251129224627487</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251129224756136.png" alt="image-20251129224756136" tabindex="0" loading="lazy"><figcaption>image-20251129224756136</figcaption></figure>
<p>同理做出两个按钮。</p>
<figure><img src="@source/8.立体建模/assets/image-20251130024158830.png" alt="image-20251130024158830" tabindex="0" loading="lazy"><figcaption>image-20251130024158830</figcaption></figure>
<p>然后我们可以以借形的方式来做内部的按钮。</p>
<figure><img src="@source/8.立体建模/assets/image-20251130024517776.png" alt="image-20251130024517776" tabindex="0" loading="lazy"><figcaption>image-20251130024517776</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251130024926300.png" alt="image-20251130024926300" tabindex="0" loading="lazy"><figcaption>image-20251130024926300</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251130024911589.png" alt="image-20251130024911589" tabindex="0" loading="lazy"><figcaption>image-20251130024911589</figcaption></figure>
<p>然后在编辑模式中从边创建面。</p>
<figure><img src="@source/8.立体建模/assets/image-20251130025020415.png" alt="image-20251130025020415" tabindex="0" loading="lazy"><figcaption>image-20251130025020415</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251130025032665.png" alt="image-20251130025032665" tabindex="0" loading="lazy"><figcaption>image-20251130025032665</figcaption></figure>
<p>最后做个挤出得到按钮，快速操作得到下面的建模。</p>
<figure><img src="@source/8.立体建模/assets/image-20251130025754364.png" alt="image-20251130025754364" tabindex="0" loading="lazy"><figcaption>image-20251130025754364</figcaption></figure>
<p>接下来我们做两个发亮的小窗口，这个需求也需要挖洞，但是我们之前的的挖洞比较简单直接，在某些复杂的挖洞场景可能不适用，因此这里顺便教一下布尔运算，不过最好使用插件的布尔运算插件。</p>
<figure><img src="@source/8.立体建模/assets/image-20251130030847158.png" alt="image-20251130030847158" tabindex="0" loading="lazy"><figcaption>image-20251130030847158</figcaption></figure>
<p>安装成功后，就可以在编辑中看到。</p>
<figure><img src="@source/8.立体建模/assets/image-20251130031020184.png" alt="image-20251130031020184" tabindex="0" loading="lazy"><figcaption>image-20251130031020184</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251130031415933.png" alt="image-20251130031415933" tabindex="0" loading="lazy"><figcaption>image-20251130031415933</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251130031513616.png" alt="image-20251130031513616" tabindex="0" loading="lazy"><figcaption>image-20251130031513616</figcaption></figure>
<p>然后这里也可以修改布尔后物体的显示方式。</p>
<figure><img src="@source/8.立体建模/assets/image-20251130031644407.png" alt="image-20251130031644407" tabindex="0" loading="lazy"><figcaption>image-20251130031644407</figcaption></figure>
<p>然后添加倒角，不过物体的背部也有倒角比较奇怪，可以删除面来去除。</p>
<figure><img src="@source/8.立体建模/assets/image-20251130031747235.png" alt="image-20251130031747235" tabindex="0" loading="lazy"><figcaption>image-20251130031747235</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251130031845839.png" alt="image-20251130031845839" tabindex="0" loading="lazy"><figcaption>image-20251130031845839</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251130031852911.png" alt="image-20251130031852911" tabindex="0" loading="lazy"><figcaption>image-20251130031852911</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251130031859802.png" alt="image-20251130031859802" tabindex="0" loading="lazy"><figcaption>image-20251130031859802</figcaption></figure>
<p>这样就可以快速调整出窗框，并且类似的使用 <code v-pre>[shift+d]</code> 复制粘贴借形做一个灯（在物体模式下线框可以使用鼠标左键双击来选择）。</p>
<div class="hint-container caution">
<p class="hint-container-title">警告</p>
<p>警告：以后复制物体最好使用快捷键 <code v-pre>[shift+d]</code>，类似上面我们需要复制边界范围的物体时，有时候会出现奇怪的问题，所以最好是不要使用 <code v-pre>[ctrl+c]</code> 来做复制操作，另外使用 <code v-pre>[shift+d]</code> 在准确复制所选对象的同时，还会自动在原地粘贴，非常好用。</p>
<figure><img src="@source/8.立体建模/assets/image-20251130135531617.png" alt="image-20251130135531617" tabindex="0" loading="lazy"><figcaption>image-20251130135531617</figcaption></figure>
</div>
<figure><img src="@source/8.立体建模/assets/image-20251130140025939.png" alt="image-20251130140025939" tabindex="0" loading="lazy"><figcaption>image-20251130140025939</figcaption></figure>
<p>然后复制两份。</p>
<figure><img src="@source/8.立体建模/assets/image-20251130140748927.png" alt="image-20251130140748927" tabindex="0" loading="lazy"><figcaption>image-20251130140748927</figcaption></figure>
<p>然后我们需要做连接线的效果，这里我们不使用贝塞尔曲线的方法，依旧是利用借形，我们先做一个环切，然后使用 <code v-pre>[ctrl]</code> 选中需要的线的头和尾即可选中一根我们需要的线段，</p>
<figure><img src="@source/8.立体建模/assets/image-20251130154127071.png" alt="image-20251130154127071" tabindex="0" loading="lazy"><figcaption>image-20251130154127071</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251130154210258.png" alt="image-20251130154210258" tabindex="0" loading="lazy"><figcaption>image-20251130154210258</figcaption></figure>
<p>然后在物体这里转化为曲线。</p>
<figure><img src="@source/8.立体建模/assets/image-20251130154319675.png" alt="image-20251130154319675" tabindex="0" loading="lazy"><figcaption>image-20251130154319675</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251130154417426.png" alt="image-20251130154417426" tabindex="0" loading="lazy"><figcaption>image-20251130154417426</figcaption></figure>
<p>记得曲线不能使用挤出工具，这里使用移动工具的足够。</p>
<figure><img src="@source/8.立体建模/assets/image-20251130154714702.png" alt="image-20251130154714702" tabindex="0" loading="lazy"><figcaption>image-20251130154714702</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251130154733245.png" alt="image-20251130154733245" tabindex="0" loading="lazy"><figcaption>image-20251130154733245</figcaption></figure>
<p>然后加阵列修改器、倒角修改器、表面细分修改器。</p>
<figure><img src="@source/8.立体建模/assets/image-20251130155732147.png" alt="image-20251130155732147" tabindex="0" loading="lazy"><figcaption>image-20251130155732147</figcaption></figure>
<h5 id="_3-3-1-3-基站炉子" tabindex="-1"><a class="header-anchor" href="#_3-3-1-3-基站炉子"><span>3.3.1.3.基站炉子</span></a></h5>
<p>接下来的操作您大概也可以知道怎么回事了，直接开始操作吧。</p>
<figure><img src="@source/8.立体建模/assets/image-20251130160002228.png" alt="image-20251130160002228" tabindex="0" loading="lazy"><figcaption>image-20251130160002228</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251130160413862.png" alt="image-20251130160413862" tabindex="0" loading="lazy"><figcaption>image-20251130160413862</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251130160445531.png" alt="image-20251130160445531" tabindex="0" loading="lazy"><figcaption>image-20251130160445531</figcaption></figure>
<p>最上面这个部分可以不用倒角。</p>
<figure><img src="@source/8.立体建模/assets/image-20251130160605031.png" alt="image-20251130160605031" tabindex="0" loading="lazy"><figcaption>image-20251130160605031</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251130160736957.png" alt="image-20251130160646196" tabindex="0" loading="lazy"><figcaption>image-20251130160646196</figcaption></figure>
<p>给一个细分。</p>
<figure><img src="@source/8.立体建模/assets/image-20251130160929823.png" alt="image-20251130160929823" tabindex="0" loading="lazy"><figcaption>image-20251130160929823</figcaption></figure>
<p>然后可以利用倒角来替代内侧面的功能，再利用挤出做一些细节。</p>
<figure><img src="@source/8.立体建模/assets/image-20251130161514600.png" alt="image-20251130161419614" tabindex="0" loading="lazy"><figcaption>image-20251130161419614</figcaption></figure>
<p>这里我们进入编辑模式使用间隔性弃选。</p>
<figure><img src="@source/8.立体建模/assets/image-20251130161717449.png" alt="image-20251130161717449" tabindex="0" loading="lazy"><figcaption>image-20251130161717449</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251130165524863.png" alt="image-20251130165524863" tabindex="0" loading="lazy"><figcaption>image-20251130165524863</figcaption></figure>
<p>然后做内侧面。<img src="@source/8.立体建模/assets/image-20251130165608805.png" alt="image-20251130165608805" loading="lazy"></p>
<p>这里我们需要做挤出，但是必须是沿着法向做挤出。</p>
<figure><img src="@source/8.立体建模/assets/image-20251130165815912.png" alt="image-20251130165815912" tabindex="0" loading="lazy"><figcaption>image-20251130165815912</figcaption></figure>
<p>然后制作四个管道（同样可以利用借形的方式）。</p>
<figure><img src="@source/8.立体建模/assets/image-20251130170751202.png" alt="image-20251130170751202" tabindex="0" loading="lazy"><figcaption>image-20251130170751202</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251130171826680.png" alt="image-20251130171826680" tabindex="0" loading="lazy"><figcaption>image-20251130171826680</figcaption></figure>
<p>实际上也可以给曲线加倒角，但是需要在使用 <code v-pre>[CTRL+b+v]</code>，多一个 <code v-pre>[v]</code> 的输入。</p>
<figure><img src="@source/8.立体建模/assets/image-20251130172026324.png" alt="image-20251130172026324" tabindex="0" loading="lazy"><figcaption>image-20251130172026324</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251130172154853.png" alt="image-20251130172154853" tabindex="0" loading="lazy"><figcaption>image-20251130172154853</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251130172245661.png" alt="image-20251130172245661" tabindex="0" loading="lazy"><figcaption>image-20251130172245661</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251130172809519.png" alt="image-20251130172809519" tabindex="0" loading="lazy"><figcaption>image-20251130172809519</figcaption></figure>
<p>然后我们需要吧这个线转化为网格。</p>
<figure><img src="@source/8.立体建模/assets/image-20251130174046535.png" alt="image-20251130174046535" tabindex="0" loading="lazy"><figcaption>image-20251130174046535</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251130174950400.png" alt="image-20251130174950400" tabindex="0" loading="lazy"><figcaption>image-20251130174950400</figcaption></figure>
<p>使用 <code v-pre>[alt+e]</code> 则可以沿着法线进行挤出。</p>
<figure><img src="@source/8.立体建模/assets/image-20251130175212166.png" alt="image-20251130175212166" tabindex="0" loading="lazy"><figcaption>image-20251130175212166</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251130175358431.png" alt="image-20251130175358431" tabindex="0" loading="lazy"><figcaption>image-20251130175358431</figcaption></figure>
<p>然后我们周期学过矩阵修改器，这次我们来使用景象修改器。</p>
<figure><img src="@source/8.立体建模/assets/image-20251130175950645.png" alt="image-20251130175950645" tabindex="0" loading="lazy"><figcaption>image-20251130175950645</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251130180020058.png" alt="image-20251130180020058" tabindex="0" loading="lazy"><figcaption>image-20251130180020058</figcaption></figure>
<p>注意下面这里可以选择镜像的轴心物体。</p>
<figure><img src="@source/8.立体建模/assets/image-20251130180324892.png" alt="image-20251130180324892" tabindex="0" loading="lazy"><figcaption>image-20251130180324892</figcaption></figure>
<p>当画面中物体比较多不容易观察，且我们暂时还不想上材质时，就可以使用随机上色的功能。<img src="@source/8.立体建模/assets/image-20251130180531506.png" alt="image-20251130180531506" loading="lazy"></p>
<figure><img src="@source/8.立体建模/assets/image-20251130182328595.png" alt="image-20251130182328595" tabindex="0" loading="lazy"><figcaption>image-20251130182328595</figcaption></figure>
<p>表面细分后可以给删除底部的面避免不协调。</p>
<figure><img src="@source/8.立体建模/assets/image-20251130182738849.png" alt="image-20251130182738849" tabindex="0" loading="lazy"><figcaption>image-20251130182738849</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251130185138942.png" alt="image-20251130185138942" tabindex="0" loading="lazy"><figcaption>image-20251130185138942</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251130185410908.png" alt="image-20251130185308439" tabindex="0" loading="lazy"><figcaption>image-20251130185308439</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251130185450252.png" alt="image-20251130185450252" tabindex="0" loading="lazy"><figcaption>image-20251130185450252</figcaption></figure>
<p>然后加一个铁丝圆环。</p>
<figure><img src="@source/8.立体建模/assets/image-20251130185721295.png" alt="image-20251130185721295" tabindex="0" loading="lazy"><figcaption>image-20251130185721295</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251130185855679.png" alt="image-20251130185855679" tabindex="0" loading="lazy"><figcaption>image-20251130185855679</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251130190016314.png" alt="image-20251130190016314" tabindex="0" loading="lazy"><figcaption>image-20251130190016314</figcaption></figure>
<h5 id="_3-3-1-4-金币制作" tabindex="-1"><a class="header-anchor" href="#_3-3-1-4-金币制作"><span>3.3.1.4.金币制作</span></a></h5>
<figure><img src="@source/8.立体建模/assets/image-20251130190256110.png" alt="image-20251130190256110" tabindex="0" loading="lazy"><figcaption>image-20251130190256110</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251130190532254.png" alt="image-20251130190532254" tabindex="0" loading="lazy"><figcaption>image-20251130190532254</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251130190618558.png" alt="image-20251130190618558" tabindex="0" loading="lazy"><figcaption>image-20251130190618558</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251130190718200.png" alt="image-20251130190718200" tabindex="0" loading="lazy"><figcaption>image-20251130190718200</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251130190748306.png" alt="image-20251130190748306" tabindex="0" loading="lazy"><figcaption>image-20251130190748306</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251130190810193.png" alt="image-20251130190810193" tabindex="0" loading="lazy"><figcaption>image-20251130190810193</figcaption></figure>
<p>然后加倒角以及表面细分。</p>
<figure><img src="@source/8.立体建模/assets/image-20251130190946731.png" alt="image-20251130190946731" tabindex="0" loading="lazy"><figcaption>image-20251130190946731</figcaption></figure>
<p>中间的面也可以缩小一点。</p>
<figure><img src="@source/8.立体建模/assets/image-20251130191040658.png" alt="image-20251130191040658" tabindex="0" loading="lazy"><figcaption>image-20251130191040658</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251130191227759.png" alt="image-20251130191227759" tabindex="0" loading="lazy"><figcaption>image-20251130191227759</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251130191405591.png" alt="image-20251130191405591" tabindex="0" loading="lazy"><figcaption>image-20251130191405591</figcaption></figure>
<p>然后添加实体化修改器。</p>
<figure><img src="@source/8.立体建模/assets/image-20251130191537971.png" alt="image-20251130191450397" tabindex="0" loading="lazy"><figcaption>image-20251130191450397</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251130191623843.png" alt="image-20251130191623843" tabindex="0" loading="lazy"><figcaption>image-20251130191623843</figcaption></figure>
<p>然后可以加一个镜像修改器。</p>
<figure><img src="@source/8.立体建模/assets/image-20251130191805630.png" alt="image-20251130191805630" tabindex="0" loading="lazy"><figcaption>image-20251130191805630</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251130191854191.png" alt="image-20251130191854191" tabindex="0" loading="lazy"><figcaption>image-20251130191854191</figcaption></figure>
<p>最后再进行一个平滑着色，让模型看起来更加光滑一点。</p>
<figure><img src="@source/8.立体建模/assets/image-20251130220633838.png" alt="image-20251130220633838" tabindex="0" loading="lazy"><figcaption>image-20251130220633838</figcaption></figure>
<h4 id="_3-3-2-摄影机位" tabindex="-1"><a class="header-anchor" href="#_3-3-2-摄影机位"><span>3.3.2.摄影机位</span></a></h4>
<figure><img src="@source/8.立体建模/assets/image-20251130221040961.png" alt="image-20251130221040961" tabindex="0" loading="lazy"><figcaption>image-20251130221040961</figcaption></figure>
<div class="hint-container important">
<p class="hint-container-title">重要</p>
<p>补充：实际上这个 <code v-pre>[ctrl+alt+数字0]</code> 的操作是有一个按钮存在的。</p>
<figure><img src="@source/8.立体建模/assets/image-20251130221733032.png" alt="image-20251130221733032" tabindex="0" loading="lazy"><figcaption>image-20251130221733032</figcaption></figure>
</div>
<p>然后设置分辨率。</p>
<figure><img src="@source/8.立体建模/assets/image-20251130221632319.png" alt="image-20251130221632319" tabindex="0" loading="lazy"><figcaption>image-20251130221632319</figcaption></figure>
<p>以及设置渲染器和计算方式。</p>
<figure><img src="@source/8.立体建模/assets/image-20251130221903258.png" alt="image-20251130221903258" tabindex="0" loading="lazy"><figcaption>image-20251130221903258</figcaption></figure>
<h4 id="_3-3-3-灯光布局" tabindex="-1"><a class="header-anchor" href="#_3-3-3-灯光布局"><span>3.3.3.灯光布局</span></a></h4>
<p>加一个灯光，这里的灯光可以使用 <code v-pre>[shitf+t]</code> 来快速调整灯光方向（会跟随鼠标移动）。</p>
<figure><img src="@source/8.立体建模/assets/image-20251130222227762.png" alt="image-20251130222227762" tabindex="0" loading="lazy"><figcaption>image-20251130222227762</figcaption></figure>
<p>再打个辅助灯光。</p>
<figure><img src="@source/8.立体建模/assets/image-20251130222552825.png" alt="image-20251130222403586" tabindex="0" loading="lazy"><figcaption>image-20251130222403586</figcaption></figure>
<p>搭建好场景。</p>
<figure><img src="@source/8.立体建模/assets/image-20251130222847934.png" alt="image-20251130222847934" tabindex="0" loading="lazy"><figcaption>image-20251130222847934</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251130223032408.png" alt="image-20251130223032408" tabindex="0" loading="lazy"><figcaption>image-20251130223032408</figcaption></figure>
<div class="hint-container important">
<p class="hint-container-title">重要</p>
<p>补充：个人觉得平滑着色比表面细分好用（以后查一下区分）。</p>
</div>
<h4 id="_3-3-4-材质添加" tabindex="-1"><a class="header-anchor" href="#_3-3-4-材质添加"><span>3.3.4.材质添加</span></a></h4>
<p>这里将会提到关于材质的更加深入的学习，我们先随便建立一个球出来。</p>
<figure><img src="@source/8.立体建模/assets/image-20251130233425571.png" alt="image-20251130233425571" tabindex="0" loading="lazy"><figcaption>image-20251130233425571</figcaption></figure>
<p>然后在着色模式下，单独隔离出来查看。</p>
<figure><img src="@source/8.立体建模/assets/image-20251130233716691.png" alt="image-20251130233716691" tabindex="0" loading="lazy"><figcaption>image-20251130233716691</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251130233732652.png" alt="image-20251130233732652" tabindex="0" loading="lazy"><figcaption>image-20251130233732652</figcaption></figure>
<p>然后修改为视图着色方式为渲染，由于我们把球单独隔离出来没有灯光，就会导致为黑色。</p>
<figure><img src="@source/8.立体建模/assets/image-20251201001155429.png" alt="image-20251201001155429" tabindex="0" loading="lazy"><figcaption>image-20251201001155429</figcaption></figure>
<p>但是可以取消勾选两个选项，然后使用 <code v-pre>Blender</code> 中默认的 <code v-pre>HDR</code>。</p>
<figure><img src="@source/8.立体建模/assets/image-20251201001438999.png" alt="image-20251201001438999" tabindex="0" loading="lazy"><figcaption>image-20251201001438999</figcaption></figure>
<p>然后新建一个材质。</p>
<figure><img src="@source/8.立体建模/assets/image-20251201001621558.png" alt="image-20251201001621558" tabindex="0" loading="lazy"><figcaption>image-20251201001621558</figcaption></figure>
<p>这里就会出现一个原理化 <code v-pre>BSDF</code>，这里需要做一些详细的补充。在 <code v-pre>Blender</code> 等 <code v-pre>3D</code> 渲染软件中，原理化 <code v-pre>BSDF</code>（<code v-pre>Principled BSDF</code>）是一种基于物理规律的通用材质着色模型，核心作用是“用一套统一的参数，模拟现实世界中绝大多数物体的表面光学特性”。简单说，它是一个“万能材质生成器”，不用手动编写复杂的光学公式，就能调出金属、塑料、皮肤、布料等各种材质的质感。</p>
<table>
<thead>
<tr>
<th>术语</th>
<th>通俗理解</th>
<th>核心作用</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>BSDF</code></td>
<td>物体表面 “反射/折射光线” 的计算规则</td>
<td>决定光线照射到物体上后，会怎么反射、折射（比如金属反光强，布料反光弱）</td>
</tr>
<tr>
<td>原理化（<code v-pre>Principled</code>）</td>
<td>遵循现实物理规律，且参数通用、直观</td>
<td>不用管复杂的光学公式，调 “金属度”“粗糙度” 等生活化参数就行</td>
</tr>
<tr>
<td>通用材质模型</td>
<td>一套参数能模拟多种物体，不用换模型</td>
<td>比如用同一套原理化 <code v-pre>BSDF</code>，调一下参数就能从 “塑料” 变成 “金属”</td>
</tr>
</tbody>
</table>
<p>现实中，不同物体的质感差异，本质是“光线照射到物体表面后，反射、折射、吸收的方式不同”：</p>
<ul>
<li>金属（如铁、铜）：几乎不折射光线，大部分光线被反射，且反射带有金属颜色；</li>
<li>塑料（如矿泉水瓶）：一部分光线被表面反射（镜面反射），一部分光线进入内部再折射出来（漫反射）；</li>
<li>皮肤（如人体皮肤）：光线会进入皮肤表层，被皮下组织散射后再出来，还会有轻微的透光效果；</li>
<li>布料（如棉布）：光线会进入纤维缝隙，多次散射后反射出来，几乎没有镜面反射。</li>
</ul>
<p>原理化 BSDF 的核心就是 把这些复杂的 “光线交互规律”，打包成一套可调节的参数，让用户通过调整参数，告诉渲染器 “这个物体该如何反射/折射光线”，从而模拟出对应的质感。它的底层是基于“微表面理论（假设物体表面是由无数微小的 “小平面” 组成）”，再结合物理公式（如 <code v-pre>Fresnel</code> 方程，计算不同角度的反射率），确保渲染结果符合现实物理规律，让材质看起来更真实。</p>
<p>在 <code v-pre>Blender</code> 的材质编辑器中，添加原理化 <code v-pre>BSDF</code> 节点后，核心参数都很直观，对应现实物体的特性：</p>
<table>
<thead>
<tr>
<th>参数名称</th>
<th>通俗理解</th>
</tr>
</thead>
<tbody>
<tr>
<td>基础色</td>
<td>物体本身的颜色（不考虑反光）</td>
</tr>
<tr>
<td>金属度</td>
<td>物体是否是金属（0 = 非金属，1 = 纯金属）</td>
</tr>
<tr>
<td>糙度</td>
<td>物体表面的光滑程度（0 = 完全光滑，1 = 完全粗糙）</td>
</tr>
<tr>
<td>折射率</td>
<td>光线穿过透明/半透明物体时的 “弯折程度”（数值越大，光线偏折越明显）</td>
</tr>
<tr>
<td>Alpha</td>
<td>物体的透明度（0 = 完全透明 / 镂空，1 = 完全不透明，0~1 之间为半透明）</td>
</tr>
</tbody>
</table>
<p>可以简单看看四个参数的区别。</p>
<figure><img src="@source/8.立体建模/assets/image-20251201003107524.png" alt="image-20251201003107524" tabindex="0" loading="lazy"><figcaption>image-20251201003107524</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251201003119174.png" alt="image-20251201003119174" tabindex="0" loading="lazy"><figcaption>image-20251201003119174</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251201003158250.png" alt="image-20251201003158250" tabindex="0" loading="lazy"><figcaption>image-20251201003158250</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251201003214270.png" alt="image-20251201003214270" tabindex="0" loading="lazy"><figcaption>image-20251201003214270</figcaption></figure>
<p>不过还是需要结合使用，同时注意这个地方的材质是和我们之前的材质面板同步的，但是在后一个区域会比较方便更加细致的调节材质。本节课程暂时不会用到那么多关于参数，只会用到前面提到的几个参数以及一些额外的参数。预计未来会 <a href="https://zhuanlan.zhihu.com/p/68893079" target="_blank" rel="noopener noreferrer">读这篇文章</a> 和官方文档进行补充，待补充...</p>
<p><code v-pre>ok</code>，现在回到我们的主题。<img src="@source/8.立体建模/assets/image-20251201011853507.png" alt="image-20251201011853507" loading="lazy"></p>
<figure><img src="@source/8.立体建模/assets/image-20251201011954255.png" alt="image-20251201011954255" tabindex="0" loading="lazy"><figcaption>image-20251201011954255</figcaption></figure>
<p>但是我们需要在一个物体的部分区域添加不同的材质怎么办呢？可以在编辑模式下指定新的材质。</p>
<figure><img src="@source/8.立体建模/assets/image-20251201012443694.png" alt="image-20251201012443694" tabindex="0" loading="lazy"><figcaption>image-20251201012443694</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251201012510690.png" alt="image-20251201012510690" tabindex="0" loading="lazy"><figcaption>image-20251201012510690</figcaption></figure>
<p>然后关联部分物体的材质。</p>
<figure><img src="@source/8.立体建模/assets/image-20251201012856839.png" alt="image-20251201012856839" tabindex="0" loading="lazy"><figcaption>image-20251201012856839</figcaption></figure>
<p>然后这里可以把布尔运算给应用，应用好后就可以删除立方体框了。</p>
<figure><img src="@source/8.立体建模/assets/image-20251201013110464.png" alt="image-20251201013110464" tabindex="0" loading="lazy"><figcaption>image-20251201013110464</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251201013352143.png" alt="image-20251201013352143" tabindex="0" loading="lazy"><figcaption>image-20251201013352143</figcaption></figure>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>注意：这里可能有些小 <code v-pre>bug</code>，如果您注意到这里的部分物体不见了，可以自己重新添加。</p>
<figure><img src="@source/8.立体建模/assets/image-20251201014058769.png" alt="image-20251201014058769" tabindex="0" loading="lazy"><figcaption>image-20251201014058769</figcaption></figure>
</div>
<p>但是注意到这里添加材质后，如果直接添加自发光的设置，会影响所有的材质发生变动（这里有 <code v-pre>7</code> 个物体在引用相同的材质）。</p>
<figure><img src="@source/8.立体建模/assets/image-20251201014705575.png" alt="image-20251201014705575" tabindex="0" loading="lazy"><figcaption>image-20251201014705575</figcaption></figure>
<p>点一下这个引用相同材质数字就可以自己创建一个新的材质单独应用（并且自动复制材质）。</p>
<figure><img src="@source/8.立体建模/assets/image-20251201014857394.png" alt="image-20251201014857394" tabindex="0" loading="lazy"><figcaption>image-20251201014857394</figcaption></figure>
<p>然后再给个自发光，并且关联材质。</p>
<figure><img src="@source/8.立体建模/assets/image-20251201015020701.png" alt="image-20251201015020701" tabindex="0" loading="lazy"><figcaption>image-20251201015020701</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251201015056634.png" alt="image-20251201015056634" tabindex="0" loading="lazy"><figcaption>image-20251201015056634</figcaption></figure>
<p>如果感觉颜色很奇怪，可以在在渲染选项卡中，在色彩管理风格效果中勾选 <code v-pre>Filmic</code>。</p>
<figure><img src="@source/8.立体建模/assets/image-20251201020115709.png" alt="image-20251201020115709" tabindex="0" loading="lazy"><figcaption>image-20251201020115709</figcaption></figure>
<p>然后我们调整一下地面的粗糙度，让地面有一点点散射的感觉。</p>
<figure><img src="@source/8.立体建模/assets/image-20251201020416621.png" alt="image-20251201020416621" tabindex="0" loading="lazy"><figcaption>image-20251201020416621</figcaption></figure>
<p>然后我们做一些金属材质。</p>
<figure><img src="@source/8.立体建模/assets/image-20251201020653579.png" alt="image-20251201020653579" tabindex="0" loading="lazy"><figcaption>image-20251201020653579</figcaption></figure>
<p>然后我们做些按钮的材质以及关联。</p>
<figure><img src="@source/8.立体建模/assets/image-20251201020837435.png" alt="image-20251201020837435" tabindex="0" loading="lazy"><figcaption>image-20251201020837435</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251201021113828.png" alt="image-20251201021113828" tabindex="0" loading="lazy"><figcaption>image-20251201021113828</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251201021750413.png" alt="image-20251201021750413" tabindex="0" loading="lazy"><figcaption>image-20251201021750413</figcaption></figure>
<p>然后给四个管子也做金属化。</p>
<figure><img src="@source/8.立体建模/assets/image-20251201021825942.png" alt="image-20251201021825942" tabindex="0" loading="lazy"><figcaption>image-20251201021825942</figcaption></figure>
<p>然后在应用第二个材质。</p>
<figure><img src="@source/8.立体建模/assets/image-20251201021935179.png" alt="image-20251201021935179" tabindex="0" loading="lazy"><figcaption>image-20251201021935179</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251201022015439.png" alt="image-20251201022015439" tabindex="0" loading="lazy"><figcaption>image-20251201022015439</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251201022139153.png" alt="image-20251201022139153" tabindex="0" loading="lazy"><figcaption>image-20251201022139153</figcaption></figure>
<p>不过这里我们观察到这里有些银金属部分有些超出，这是因为我之前加了表面细分产生的。可以多加一条环切线，并且调整环切的位置解决这个问题。</p>
<figure><img src="@source/8.立体建模/assets/image-20251201022513879.png" alt="image-20251201022513879" tabindex="0" loading="lazy"><figcaption>image-20251201022513879</figcaption></figure>
<p>然后做一个透明材质。</p>
<figure><img src="@source/8.立体建模/assets/image-20251201023039255.png" alt="image-20251201023039255" tabindex="0" loading="lazy"><figcaption>image-20251201023039255</figcaption></figure>
<p>同时补做一个铁圈在透明物体内部。</p>
<figure><img src="@source/8.立体建模/assets/image-20251201023138043.png" alt="image-20251201023138043" tabindex="0" loading="lazy"><figcaption>image-20251201023138043</figcaption></figure>
<p>然后营造一点被烧得发红的感觉。</p>
<figure><img src="@source/8.立体建模/assets/image-20251201023802479.png" alt="image-20251201023802479" tabindex="0" loading="lazy"><figcaption>image-20251201023802479</figcaption></figure>
<p>这里透明材质还可以调基础色为红色，更加真实。</p>
<figure><img src="@source/8.立体建模/assets/image-20251201024336909.png" alt="image-20251201024336909" tabindex="0" loading="lazy"><figcaption>image-20251201024336909</figcaption></figure>
<p>继续做部分金属材质的关联。</p>
<figure><img src="@source/8.立体建模/assets/image-20251201024536156.png" alt="image-20251201024536156" tabindex="0" loading="lazy"><figcaption>image-20251201024536156</figcaption></figure>
<p>然后做最上面烧红的部分。</p>
<figure><img src="@source/8.立体建模/assets/image-20251201025201076.png" alt="image-20251201025201076" tabindex="0" loading="lazy"><figcaption>image-20251201025201076</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251201025338240.png" alt="image-20251201025338240" tabindex="0" loading="lazy"><figcaption>image-20251201025338240</figcaption></figure>
<p>不过我们还需要对最中间的部分再次添加一个不同的材质，反复选中很麻烦，这时候使用 <code v-pre>[ctrl+数字加号/数字减号]</code> 就可以对选区进行一个扩展或缩小，选中我们需要的部分后指定一个自发光强度即可。</p>
<figure><img src="@source/8.立体建模/assets/image-20251201030359090.png" alt="image-20251201030359090" tabindex="0" loading="lazy"><figcaption>image-20251201030359090</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251201030440944.png" alt="image-20251201030440944" tabindex="0" loading="lazy"><figcaption>image-20251201030440944</figcaption></figure>
<p>然后可以按照自己的感觉稍微调整一下。</p>
<figure><img src="@source/8.立体建模/assets/image-20251201030739235.png" alt="image-20251201030739235" tabindex="0" loading="lazy"><figcaption>image-20251201030739235</figcaption></figure>
<p>然后到了最后的硬币部分。</p>
<figure><img src="@source/8.立体建模/assets/image-20251201030902892.png" alt="image-20251201030902892" tabindex="0" loading="lazy"><figcaption>image-20251201030902892</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251201030951919.png" alt="image-20251201030951919" tabindex="0" loading="lazy"><figcaption>image-20251201030951919</figcaption></figure>
<p>然后我们可以把风格效果改为中高对比度。</p>
<figure><img src="@source/8.立体建模/assets/image-20251201031041466.png" alt="image-20251201031041466" tabindex="0" loading="lazy"><figcaption>image-20251201031041466</figcaption></figure>
<h4 id="_3-3-5-动画制作" tabindex="-1"><a class="header-anchor" href="#_3-3-5-动画制作"><span>3.3.5.动画制作</span></a></h4>
<p>您可以按照自己喜好来设置，前面教过的知识已经足够使用了。</p>
<h4 id="_3-3-6-生成结果" tabindex="-1"><a class="header-anchor" href="#_3-3-6-生成结果"><span>3.3.6.生成结果</span></a></h4>
<p>待补充...</p>
<h3 id="_3-4-狂奔小车" tabindex="-1"><a class="header-anchor" href="#_3-4-狂奔小车"><span>3.4.狂奔小车</span></a></h3>
<h4 id="_3-4-1-物体建模" tabindex="-1"><a class="header-anchor" href="#_3-4-1-物体建模"><span>3.4.1.物体建模</span></a></h4>
<p>现在一些简单的物体建模对我们来说以及不是难事了。</p>
<figure><img src="@source/8.立体建模/assets/image-20251208021156224.png" alt="image-20251208021156224" tabindex="0" loading="lazy"><figcaption>image-20251208021156224</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251208021234188.png" alt="image-20251208021234188" tabindex="0" loading="lazy"><figcaption>image-20251208021234188</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251208021325028.png" alt="image-20251208021325028" tabindex="0" loading="lazy"><figcaption>image-20251208021325028</figcaption></figure>
<p>表面细分。</p>
<figure><img src="@source/8.立体建模/assets/image-20251208021355573.png" alt="image-20251208021355573" tabindex="0" loading="lazy"><figcaption>image-20251208021355573</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251208021558856.png" alt="image-20251208021558856" tabindex="0" loading="lazy"><figcaption>image-20251208021558856</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251208021612777.png" alt="image-20251208021612777" tabindex="0" loading="lazy"><figcaption>image-20251208021612777</figcaption></figure>
<p>点模式稍微往上挪一下。</p>
<figure><img src="@source/8.立体建模/assets/image-20251208021716859.png" alt="image-20251208021716859" tabindex="0" loading="lazy"><figcaption>image-20251208021716859</figcaption></figure>
<p>可以自己做些略微的调整。</p>
<p>可以利用卡边和镜像修改器快速制作。</p>
<figure><img src="@source/8.立体建模/assets/image-20251208021919285.png" alt="image-20251208021919285" tabindex="0" loading="lazy"><figcaption>image-20251208021919285</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251208021959545.png" alt="image-20251208021959545" tabindex="0" loading="lazy"><figcaption>image-20251208021959545</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251208022100606.png" alt="image-20251208022100606" tabindex="0" loading="lazy"><figcaption>image-20251208022100606</figcaption></figure>
<p>这里可以勾选范围限制，避免调整过程中镜像中间撕裂。</p>
<figure><img src="@source/8.立体建模/assets/image-20251208022148591.png" alt="image-20251208022148591" tabindex="0" loading="lazy"><figcaption>image-20251208022148591</figcaption></figure>
<p>还可以调整层级视图后应用表面细分，让可以调整的控件更多。</p>
<figure><img src="@source/8.立体建模/assets/image-20251208141206122.png" alt="image-20251208141206122" tabindex="0" loading="lazy"><figcaption>image-20251208141206122</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251208141256472.png" alt="image-20251208141256472" tabindex="0" loading="lazy"><figcaption>image-20251208141256472</figcaption></figure>
<p>然后我们使用 <code v-pre>[alt+e]</code> 沿着法向挤出做一点细节。</p>
<figure><img src="@source/8.立体建模/assets/image-20251208141515459-1765174516482-1.png" alt="image-20251208141515459" tabindex="0" loading="lazy"><figcaption>image-20251208141515459</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251208141623427.png" alt="image-20251208141623427" tabindex="0" loading="lazy"><figcaption>image-20251208141623427</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251208141953213.png" alt="image-20251208141953213" tabindex="0" loading="lazy"><figcaption>image-20251208141953213</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251208142006818.png" alt="image-20251208142006818" tabindex="0" loading="lazy"><figcaption>image-20251208142006818</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251208142109145.png" alt="image-20251208142109145" tabindex="0" loading="lazy"><figcaption>image-20251208142109145</figcaption></figure>
<p>然后使用内插面，并且关闭边界来制作挡风玻璃。</p>
<figure><img src="@source/8.立体建模/assets/image-20251208142528959.png" alt="image-20251208142528959" tabindex="0" loading="lazy"><figcaption>image-20251208142528959</figcaption></figure>
<p>以及车窗玻璃。</p>
<figure><img src="@source/8.立体建模/assets/image-20251208142615433.png" alt="image-20251208142615433" tabindex="0" loading="lazy"><figcaption>image-20251208142615433</figcaption></figure>
<p>然后做凹槽。</p>
<figure><img src="@source/8.立体建模/assets/image-20251208142711867.png" alt="image-20251208142711867" tabindex="0" loading="lazy"><figcaption>image-20251208142711867</figcaption></figure>
<p>使用 <code v-pre>[p]</code> 分离单独做一个保险杆。</p>
<figure><img src="@source/8.立体建模/assets/image-20251208143009848.png" alt="image-20251208143009848" tabindex="0" loading="lazy"><figcaption>image-20251208143009848</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251208143023901.png" alt="image-20251208143023901" tabindex="0" loading="lazy"><figcaption>image-20251208143023901</figcaption></figure>
<p>加保险杠和分离车窗。</p>
<figure><img src="@source/8.立体建模/assets/image-20251215140652788.png" alt="image-20251215140652788" tabindex="0" loading="lazy"><figcaption>image-20251215140652788</figcaption></figure>
<p>复制一个车窗，然后转化为曲线进行实体化。</p>
<figure><img src="@source/8.立体建模/assets/image-20251215141312736.png" alt="image-20251215141312736" tabindex="0" loading="lazy"><figcaption>image-20251215141312736</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251215141330431.png" alt="image-20251215141330431" tabindex="0" loading="lazy"><figcaption>image-20251215141330431</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251215141340361.png" alt="image-20251215141340361" tabindex="0" loading="lazy"><figcaption>image-20251215141340361</figcaption></figure>
<div class="hint-container important">
<p class="hint-container-title">重要</p>
<p>补充：这里有个小技巧，如果需要同时调整两条曲线的深度，则可以在拖动深度的同时按住 <code v-pre>[alt]</code> 来同时操作。</p>
</div>
<figure><img src="@source/8.立体建模/assets/image-20251215142736903.png" alt="image-20251215142736903" tabindex="0" loading="lazy"><figcaption>image-20251215142736903</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251215151722465.png" alt="image-20251215151722465" tabindex="0" loading="lazy"><figcaption>image-20251215151722465</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251215152700737.png" alt="image-20251215152700737" tabindex="0" loading="lazy"><figcaption>image-20251215152700737</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251215152746556.png" alt="image-20251215152746556" tabindex="0" loading="lazy"><figcaption>image-20251215152746556</figcaption></figure>
<p>然后使用镜像，可以考虑修改几何原点来控制镜像的轴面，也可以选择新的参考物。</p>
<figure><img src="@source/8.立体建模/assets/image-20251215153145517.png" alt="image-20251215153145517" tabindex="0" loading="lazy"><figcaption>image-20251215153145517</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20251215153628261.png" alt="image-20251215153628261" tabindex="0" loading="lazy"><figcaption>image-20251215153628261</figcaption></figure>
<p>这里镜像修改器在挤出会干扰，可以把面删除。</p>
<figure><img src="@source/8.立体建模/assets/image-20251215155343442.png" alt="image-20251215155343442" tabindex="0" loading="lazy"><figcaption>image-20251215155343442</figcaption></figure>
<p>这个建模建烂掉了，太早做细分了（这是一个教训），直接进入动画环节吧，就不再扣这个东西了。</p>
<p>直接进入我们最需要学习的粒子效果，我们需要使用粒子效果来快速生成树木和尾气。其中，制作粒子效果主要有两种做法，我们分别来进行操作实践。</p>
<figure><img src="@source/8.立体建模/assets/image-20260102174354282.png" alt="image-20260102174354282" tabindex="0" loading="lazy"><figcaption>image-20260102174354282</figcaption></figure>
<p>然后做一颗小树替换粒子效果中的粒子元素。</p>
<figure><img src="@source/8.立体建模/assets/image-20260102174918619.png" alt="image-20260102174918619" tabindex="0" loading="lazy"><figcaption>image-20260102174918619</figcaption></figure>
<p>然后我们需要对柱体和球体使用 <code v-pre>[ctrl+j]</code> 的合并操作（记得先把圆柱体上面的面删除，方便我们后续做合并操作）。</p>
<figure><img src="@source/8.立体建模/assets/image-20260102175309292.png" alt="image-20260102175309292" tabindex="0" loading="lazy"><figcaption>image-20260102175309292</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20260102180728694.png" alt="image-20260102180728694" tabindex="0" loading="lazy"><figcaption>image-20260102180728694</figcaption></figure>
<p>这里注意到使用这个效果后小树只显示了一部分，这个的原因是因为我们的小树的原点在几何中心点，需要手动进行一个调整才可以。</p>
<figure><img src="@source/8.立体建模/assets/image-20260102191058534.png" alt="image-20260102191058534" tabindex="0" loading="lazy"><figcaption>image-20260102191058534</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20260102191431346.png" alt="image-20260102191431346" tabindex="0" loading="lazy"><figcaption>image-20260102191431346</figcaption></figure>
<p>但是这里我们不仅仅是针对一个物体，还需要对多个物体做发射，因此就需要按照集合来发射，需要几个物体放在一起使用快捷键 <code v-pre>[m]</code> 来新建立一个集合。</p>
<figure><img src="@source/8.立体建模/assets/image-20260102191700349.png" alt="image-20260102191700349" tabindex="0" loading="lazy"><figcaption>image-20260102191700349</figcaption></figure>
<p>同时小草堆的几何原点也需要被调整，然后再做个斑马线。</p>
<figure><img src="@source/8.立体建模/assets/image-20260102205545978.png" alt="image-20260102205545978" tabindex="0" loading="lazy"><figcaption>image-20260102205545978</figcaption></figure>
<p>同时做粒子效果。</p>
<figure><img src="@source/8.立体建模/assets/image-20260102205513738.png" alt="image-20260102205513738" tabindex="0" loading="lazy"><figcaption>image-20260102205513738</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20260102205620240.png" alt="image-20260102205620240" tabindex="0" loading="lazy"><figcaption>image-20260102205620240</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20260102205932030.png" alt="image-20260102205932030" tabindex="0" loading="lazy"><figcaption>image-20260102205932030</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20260102205957239.png" alt="image-20260102205957239" tabindex="0" loading="lazy"><figcaption>image-20260102205957239</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20260102210050802.png" alt="image-20260102210050802" tabindex="0" loading="lazy"><figcaption>image-20260102210050802</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20260102210304657.png" alt="image-20260102210304657" tabindex="0" loading="lazy"><figcaption>image-20260102210304657</figcaption></figure>
<p>然后可以提前烘焙一下。</p>
<figure><img src="@source/8.立体建模/assets/image-20260102212117372.png" alt="image-20260102212117372" tabindex="0" loading="lazy"><figcaption>image-20260102212117372</figcaption></figure>
<h4 id="_3-4-2-摄影机位" tabindex="-1"><a class="header-anchor" href="#_3-4-2-摄影机位"><span>3.4.2.摄影机位</span></a></h4>
<p>随便架一个就可以，符合下面视角就可以。</p>
<figure><img src="@source/8.立体建模/assets/image-20260102173603318.png" alt="image-20260102173603318" tabindex="0" loading="lazy"><figcaption>image-20260102173603318</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20260102234911295.png" alt="image-20260102234911295" tabindex="0" loading="lazy"><figcaption>image-20260102234911295</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20260102235335701.png" alt="image-20260102235335701" tabindex="0" loading="lazy"><figcaption>image-20260102235335701</figcaption></figure>
<h4 id="_3-4-3-灯光布局" tabindex="-1"><a class="header-anchor" href="#_3-4-3-灯光布局"><span>3.4.3.灯光布局</span></a></h4>
<figure><img src="@source/8.立体建模/assets/image-20260102235354064.png" alt="image-20260102235354064" tabindex="0" loading="lazy"><figcaption>image-20260102235354064</figcaption></figure>
<h4 id="_3-4-4-材质添加" tabindex="-1"><a class="header-anchor" href="#_3-4-4-材质添加"><span>3.4.4.材质添加</span></a></h4>
<figure><img src="@source/8.立体建模/assets/image-20260102233105464.png" alt="image-20260102233105464" tabindex="0" loading="lazy"><figcaption>image-20260102233105464</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20260102233516785.png" alt="image-20260102233516785" tabindex="0" loading="lazy"><figcaption>image-20260102233516785</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20260102234736529.png" alt="image-20260102234736529" tabindex="0" loading="lazy"><figcaption>image-20260102234736529</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20260102235147048.png" alt="image-20260102235147048" tabindex="0" loading="lazy"><figcaption>image-20260102235147048</figcaption></figure>
<h4 id="_3-4-5-动画制作" tabindex="-1"><a class="header-anchor" href="#_3-4-5-动画制作"><span>3.4.5.动画制作</span></a></h4>
<p>这里的动画制作主要是指依靠帧的调整，不过这里我们依靠粒子效果已经做好了部分动画，还有部分动画需要树林和斑马线向后移动营造移动的效果。</p>
<p>我们需要树林、斑马线以及空轴使用 <code v-pre>[ctrl+p]</code> 来建立一个父子关系，这样控制轴体就可以控制树林和斑马线。</p>
<figure><img src="@source/8.立体建模/assets/image-20260102211150901.png" alt="image-20260102211150901" tabindex="0" loading="lazy"><figcaption>image-20260102211150901</figcaption></figure>
<p>使用 <code v-pre>[i]</code> 来记录关键帧记录。</p>
<figure><img src="@source/8.立体建模/assets/image-20260102211348183.png" alt="image-20260102211348183" tabindex="0" loading="lazy"><figcaption>image-20260102211348183</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20260102211434619.png" alt="image-20260102211434619" tabindex="0" loading="lazy"><figcaption>image-20260102211434619</figcaption></figure>
<p>同理处理小车。</p>
<figure><img src="@source/8.立体建模/assets/image-20260102212507001.png" alt="image-20260102212507001" tabindex="0" loading="lazy"><figcaption>image-20260102212507001</figcaption></figure>
<p>但是我们需要做抖动的效果，因此就需要使用曲线编辑器，而不是一个一个做帧节点。</p>
<figure><img src="@source/8.立体建模/assets/image-20260102213213598.png" alt="image-20260102213213598" tabindex="0" loading="lazy"><figcaption>image-20260102213213598</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20260102213326639.png" alt="image-20260102213326639" tabindex="0" loading="lazy"><figcaption>image-20260102213326639</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20260102213603637.png" alt="image-20260102213603637" tabindex="0" loading="lazy"><figcaption>image-20260102213603637</figcaption></figure>
<h4 id="_3-4-6-生成结果" tabindex="-1"><a class="header-anchor" href="#_3-4-6-生成结果"><span>3.4.6.生成结果</span></a></h4>
<p>这个就不多提及了。</p>
<h3 id="_3-5-荧光树桩" tabindex="-1"><a class="header-anchor" href="#_3-5-荧光树桩"><span>3.5.荧光树桩</span></a></h3>
<h4 id="_3-5-1-物体建模" tabindex="-1"><a class="header-anchor" href="#_3-5-1-物体建模"><span>3.5.1.物体建模</span></a></h4>
<div class="hint-container important">
<p class="hint-container-title">重要</p>
<p>补充：在一些比较精细的工程中，需要使用雕刻来进行建模，有两种方法可以进行切换，第一种就是切换模式。</p>
<figure><img src="@source/8.立体建模/assets/image-20260103005813559.png" alt="image-20260103005813559" tabindex="0" loading="lazy"><figcaption>image-20260103005813559</figcaption></figure>
<p>或者使用雕刻标签进入工作台。</p>
<figure><img src="@source/8.立体建模/assets/image-20260103005859470.png" alt="image-20260103005859470" tabindex="0" loading="lazy"><figcaption>image-20260103005859470</figcaption></figure>
<p>可以拉开关于工具的描述。</p>
<figure><img src="@source/8.立体建模/assets/image-20260103010049327.png" alt="image-20260103010049327" tabindex="0" loading="lazy"><figcaption>image-20260103010049327</figcaption></figure>
<p>下面的参数比较重要，一个是调整笔刷的半径，一个是调整笔刷的压力。</p>
<figure><img src="@source/8.立体建模/assets/image-20260103011016749.png" alt="image-20260103011016749" tabindex="0" loading="lazy"><figcaption>image-20260103011016749</figcaption></figure>
<ul>
<li>半径的快捷键是 <code v-pre>[f]</code>，然后用鼠标调整大小</li>
<li>强度的快捷键是 <code v-pre>[shift+f]</code>，然后用鼠标调整大小</li>
</ul>
<p>然后如果没有数位板，则需要注意防抖的情况，可以稍微调整一下（表现形式上就是有条红色的追尾条）。</p>
<figure><img src="@source/8.立体建模/assets/image-20260103011236393.png" alt="image-20260103011236393" tabindex="0" loading="lazy"><figcaption>image-20260103011236393</figcaption></figure>
<p>这里还有个对称雕刻值得注意。</p>
<figure><img src="@source/8.立体建模/assets/image-20260103011523766.png" alt="image-20260103011523766" tabindex="0" loading="lazy"><figcaption>image-20260103011523766</figcaption></figure>
<p>雕刻的本质其实就是对模型布线的一个调整，因此如果需要更加精细的效果时，就需要更多的布线支持。而除了表面细分这种做法以外，还可以使用重构网格来做到调整体素，快捷键是 <code v-pre>[r]</code>，然后搭配鼠标拖动就可以调整体素大小了。</p>
<figure><img src="@source/8.立体建模/assets/image-20260103011811054.png" alt="image-20260103011811054" tabindex="0" loading="lazy"><figcaption>image-20260103011811054</figcaption></figure>
<p>同时有些时候我们比较讨厌模型有些棱角的感觉，因此选择任意笔刷后，再同时长按 <code v-pre>[shift]</code> 可以快速切换到光滑工具。</p>
<p>另外最为常用的工具就是自由线，默认是外凸的工具，如果需要向内凹则需要在操作的同时长按 <code v-pre>[ctrl]</code>（其实所有工具都是类似的操作）。</p>
</div>
<figure><img src="@source/8.立体建模/assets/image-20260107021020229.png" alt="image-20260107021020229" tabindex="0" loading="lazy"><figcaption>image-20260107021020229</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20260107021054786.png" alt="image-20260107021054786" tabindex="0" loading="lazy"><figcaption>image-20260107021054786</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20260107021307845.png" alt="image-20260107021307845" tabindex="0" loading="lazy"><figcaption>image-20260107021307845</figcaption></figure>
<p>使用快捷键 <code v-pre>[alt+q]</code> 就可以快速选择不同的物体进行分别雕刻，就不需要再切回物体模式进行雕刻了。</p>
<figure><img src="@source/8.立体建模/assets/image-20260107025142918.png" alt="image-20260107025142918" tabindex="0" loading="lazy"><figcaption>image-20260107025142918</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20260107025302606.png" alt="image-20260107025302606" tabindex="0" loading="lazy"><figcaption>image-20260107025302606</figcaption></figure>
<h4 id="_3-5-2-摄影机位" tabindex="-1"><a class="header-anchor" href="#_3-5-2-摄影机位"><span>3.5.2.摄影机位</span></a></h4>
<p>随意，您喜欢就可以。</p>
<h4 id="_3-5-3-灯光布局" tabindex="-1"><a class="header-anchor" href="#_3-5-3-灯光布局"><span>3.5.3.灯光布局</span></a></h4>
<p>随意，您喜欢就可以。</p>
<h4 id="_3-5-4-材质添加" tabindex="-1"><a class="header-anchor" href="#_3-5-4-材质添加"><span>3.5.4.材质添加</span></a></h4>
<p>主要是树桩需要添加一点点折射，其他上个颜色就可以。</p>
<h4 id="_3-5-5-动画制作" tabindex="-1"><a class="header-anchor" href="#_3-5-5-动画制作"><span>3.5.5.动画制作</span></a></h4>
<p>本次建模没有动画相关的知识，主要是学习雕刻。</p>
<h4 id="_3-5-6-生成结果" tabindex="-1"><a class="header-anchor" href="#_3-5-6-生成结果"><span>3.5.6.生成结果</span></a></h4>
<figure><img src="@source/8.立体建模/assets/image-20260109182048318.png" alt="image-20260109182048318" tabindex="0" loading="lazy"><figcaption>image-20260109182048318</figcaption></figure>
<h3 id="_3-6-子弹冲击" tabindex="-1"><a class="header-anchor" href="#_3-6-子弹冲击"><span>3.6.子弹冲击</span></a></h3>
<h4 id="_3-5-1-物体建模-1" tabindex="-1"><a class="header-anchor" href="#_3-5-1-物体建模-1"><span>3.5.1.物体建模</span></a></h4>
<div class="hint-container important">
<p class="hint-container-title">重要</p>
<p>补充：实际上 <code v-pre>Blender</code> 是有刚体的，因此这节就是用来学习一些有碰撞体积的场景。还包含一些关于摄影机追踪以及几何节点合成的知识。</p>
</div>
<figure><img src="@source/8.立体建模/assets/image-20260109224850170.png" alt="image-20260109224850170" tabindex="0" loading="lazy"><figcaption>image-20260109224850170</figcaption></figure>
<p>给对应物体设置一个刚体效果，并且播放就会往下坠落。如果同时在平面上设置刚体且类型设置为被动，就可以发生一些刚体的碰撞物理效果。</p>
<figure><img src="@source/8.立体建模/assets/image-20260109225752331.png" alt="image-20260109225752331" tabindex="0" loading="lazy"><figcaption>image-20260109225752331</figcaption></figure>
<p>上述的物体之间要是重叠了一部分再设置刚体，就会发生弹跳的效果。并且物体可以设置重量，如果设置的比较大就会让活动之间的物体弹开的范围就会比较大一些。</p>
<figure><img src="@source/8.立体建模/assets/image-20260109230645095.png" alt="image-20260109230645095" tabindex="0" loading="lazy"><figcaption>image-20260109230645095</figcaption></figure>
<p>并且还可以修改碰撞的实际体积。</p>
<figure><img src="@source/8.立体建模/assets/image-20260110011233879.png" alt="image-20260110011233879" tabindex="0" loading="lazy"><figcaption>image-20260110011233879</figcaption></figure>
<p>并且如果我们给平面做一个内插面并且向下挤出，就会发现一个问题，没有办法掉进坑里。</p>
<figure><img src="@source/8.立体建模/assets/image-20260110011407308.png" alt="image-20260110011407308" tabindex="0" loading="lazy"><figcaption>image-20260110011407308</figcaption></figure>
<p>因此我们需要把类型改为网格。</p>
<figure><img src="@source/8.立体建模/assets/image-20260110011508033.png" alt="image-20260110011508033" tabindex="0" loading="lazy"><figcaption>image-20260110011508033</figcaption></figure>
<p>还有一个问题，如果处于被动关系的刚体处于运动状态，默认是不会受到影响的。</p>
<figure><img src="@source/8.立体建模/assets/image-20260110011744290.png" alt="image-20260110011744290" tabindex="0" loading="lazy"><figcaption>image-20260110011744290</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20260110011855088.png" alt="image-20260110011855088" tabindex="0" loading="lazy"><figcaption>image-20260110011855088</figcaption></figure>
<p>因此就需要设置一个“动画”开关，才会跟随被动刚体的抖动效果而产生碰撞。</p>
<figure><img src="@source/8.立体建模/assets/image-20260110012044037.png" alt="image-20260110012044037" tabindex="0" loading="lazy"><figcaption>image-20260110012044037</figcaption></figure>
<p>先来做简单的建模。</p>
<figure><img src="@source/8.立体建模/assets/image-20260110022451618.png" alt="image-20260110022451618" tabindex="0" loading="lazy"><figcaption>image-20260110022451618</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20260110022845319.png" alt="image-20260110022845319" tabindex="0" loading="lazy"><figcaption>image-20260110022845319</figcaption></figure>
<p><code v-pre>[shift+r]</code> 可以重复上一步的操作。</p>
<figure><img src="@source/8.立体建模/assets/image-20260110023650305.png" alt="image-20260110023650305" tabindex="0" loading="lazy"><figcaption>image-20260110023650305</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20260110024439739.png" alt="image-20260110024439739" tabindex="0" loading="lazy"><figcaption>image-20260110024439739</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20260110024451406.png" alt="image-20260110024451406" tabindex="0" loading="lazy"><figcaption>image-20260110024451406</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20260110025252789.png" alt="image-20260110025252789" tabindex="0" loading="lazy"><figcaption>image-20260110025252789</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20260110025416513.png" alt="image-20260110025416513" tabindex="0" loading="lazy"><figcaption>image-20260110025416513</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20260110025546437.png" alt="image-20260110025546437" tabindex="0" loading="lazy"><figcaption>image-20260110025546437</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20260110031251786.png" alt="image-20260110031251786" tabindex="0" loading="lazy"><figcaption>image-20260110031251786</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20260110031243235.png" alt="image-20260110031243235" tabindex="0" loading="lazy"><figcaption>image-20260110031243235</figcaption></figure>
<p>勾选播放动画可以给子弹一个初始速度，如果使用关键帧逐步取消了，就会完全处于刚体世界中的状态，逐渐丧失速度。</p>
<figure><img src="@source/8.立体建模/assets/image-20260110033900821.png" alt="image-20260110033900821" tabindex="0" loading="lazy"><figcaption>image-20260110033900821</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20260110034654922.png" alt="image-20260110034654922" tabindex="0" loading="lazy"><figcaption>image-20260110034654922</figcaption></figure>
<p><code v-pre>[r+r]</code> 也是可以调整摄影机的左右上下的（就是不能调远近）。</p>
<figure><img src="@source/8.立体建模/assets/image-20260110035339029.png" alt="image-20260110035339029" tabindex="0" loading="lazy"><figcaption>image-20260110035339029</figcaption></figure>
<p>嗯...这种情况也会弹开...也需要设置网格（有点不太理解，好像是因为处于凹陷处）。</p>
<figure><img src="@source/8.立体建模/assets/image-20260110035857760.png" alt="image-20260110035857760" tabindex="0" loading="lazy"><figcaption>image-20260110035857760</figcaption></figure>
<p>可以带点广角。</p>
<figure><img src="@source/8.立体建模/assets/image-20260110040224840.png" alt="image-20260110040224840" tabindex="0" loading="lazy"><figcaption>image-20260110040224840</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20260110040417172.png" alt="image-20260110040417172" tabindex="0" loading="lazy"><figcaption>image-20260110040417172</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20260110040617711.png" alt="image-20260110040617711" tabindex="0" loading="lazy"><figcaption>image-20260110040617711</figcaption></figure>
<h4 id="_3-5-2-摄影机位-1" tabindex="-1"><a class="header-anchor" href="#_3-5-2-摄影机位-1"><span>3.5.2.摄影机位</span></a></h4>
<p>需要设置跟随。</p>
<h4 id="_3-5-3-灯光布局-1" tabindex="-1"><a class="header-anchor" href="#_3-5-3-灯光布局-1"><span>3.5.3.灯光布局</span></a></h4>
<p>左右两个 <code v-pre>45</code> 度的长面灯即可。</p>
<h4 id="_3-5-4-材质添加-1" tabindex="-1"><a class="header-anchor" href="#_3-5-4-材质添加-1"><span>3.5.4.材质添加</span></a></h4>
<p>简单调整金属度、粗糙度还有颜色即可。</p>
<figure><img src="@source/8.立体建模/assets/image-20260111183935047.png" alt="image-20260111183935047" tabindex="0" loading="lazy"><figcaption>image-20260111183935047</figcaption></figure>
<h4 id="_3-5-5-动画制作-1" tabindex="-1"><a class="header-anchor" href="#_3-5-5-动画制作-1"><span>3.5.5.动画制作</span></a></h4>
<p>这个动画就是一个简单的动作帧，不过有一点点门道。这里可以考虑一个问题，如何在碰撞的时候发出声音，待补充...</p>
<h4 id="_3-5-6-生成结果-1" tabindex="-1"><a class="header-anchor" href="#_3-5-6-生成结果-1"><span>3.5.6.生成结果</span></a></h4>
<figure><img src="@source/8.立体建模/assets/image-20260111184041702.png" alt="image-20260111184041702" tabindex="0" loading="lazy"><figcaption>image-20260111184041702</figcaption></figure>
<p>可以调大噪波阈值来尝试加快渲染时间。</p>
<figure><img src="@source/8.立体建模/assets/image-20260111184252175.png" alt="image-20260111184252175" tabindex="0" loading="lazy"><figcaption>image-20260111184252175</figcaption></figure>
<p>不过这次我们搞点不一样的，用合成来渲染，不过需要注意的是，合成之前需要先渲染一张图。</p>
<figure><img src="@source/8.立体建模/assets/image-20260111184813804.png" alt="image-20260111184813804" tabindex="0" loading="lazy"><figcaption>image-20260111184813804</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20260111221223671.png" alt="image-20260111221223671" tabindex="0" loading="lazy"><figcaption>image-20260111221223671</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20260111221416704.png" alt="image-20260111221416704" tabindex="0" loading="lazy"><figcaption>image-20260111221416704</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20260111221611988.png" alt="image-20260111221611988" tabindex="0" loading="lazy"><figcaption>image-20260111221611988</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20260111222921704.png" alt="image-20260111222921704" tabindex="0" loading="lazy"><figcaption>image-20260111222921704</figcaption></figure>
<p>准确来说合成节点是可以在输出渲染前进行一个自定义修正，比如下面我们就利用了曲线来进行调亮。</p>
<figure><img src="@source/8.立体建模/assets/image-20260111223254163.png" alt="image-20260111223254163" tabindex="0" loading="lazy"><figcaption>image-20260111223254163</figcaption></figure>
<p>对任意节点使用 <code v-pre>[m]</code> 就可以达到取消使用的效果。</p>
<figure><img src="@source/8.立体建模/assets/image-20260111223613677.png" alt="image-20260111223613677" tabindex="0" loading="lazy"><figcaption>image-20260111223613677</figcaption></figure>
<p>整体来说合成节点有种类似调色的感觉，接下来使用的色彩平衡实际上对应 <code v-pre>PS</code> 的 <code v-pre>暗调/中间调/亮调</code> 。</p>
<figure><img src="@source/8.立体建模/assets/image-20260111223909014.png" alt="image-20260111223909014" tabindex="0" loading="lazy"><figcaption>image-20260111223909014</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20260111224223496.png" alt="image-20260111224223496" tabindex="0" loading="lazy"><figcaption>image-20260111224223496</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20260111224535627.png" alt="image-20260111224535627" tabindex="0" loading="lazy"><figcaption>image-20260111224535627</figcaption></figure>
<h3 id="_3-7-猴头构建" tabindex="-1"><a class="header-anchor" href="#_3-7-猴头构建"><span>3.7.猴头构建</span></a></h3>
<div class="hint-container important">
<p class="hint-container-title">重要</p>
<p>补充：这一节我们需要学习 <code v-pre>Blender</code> 中被予以重望的几何节点的知识，这是一种偏向程序化建模的方式，如果您有开发基础，甚至可以利用 <code v-pre>AI</code> 工具来进行建模。</p>
</div>
<h4 id="_3-5-1-物体建模-2" tabindex="-1"><a class="header-anchor" href="#_3-5-1-物体建模-2"><span>3.5.1.物体建模</span></a></h4>
<p>我们可以直接给一个物体添加几何节点修改器（当然实际上是可以直接从几何节点开始从零建模的）。</p>
<figure><img src="@source/8.立体建模/assets/image-20260111225753542.png" alt="image-20260111225753542" tabindex="0" loading="lazy"><figcaption>image-20260111225753542</figcaption></figure>
<p>也可以直接打开几何节点工作区。</p>
<figure><img src="@source/8.立体建模/assets/image-20260111230129937.png" alt="image-20260111230129937" tabindex="0" loading="lazy"><figcaption>image-20260111230129937</figcaption></figure>
<p>可以看到旁边有这个几何体的几何信息，记得把下面这个选项打开，可以方便我们定位几何数据。</p>
<figure><img src="@source/8.立体建模/assets/image-20260111231547273.png" alt="image-20260111231547273" tabindex="0" loading="lazy"><figcaption>image-20260111231547273</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20260111231657585.png" alt="image-20260111231657585" tabindex="0" loading="lazy"><figcaption>image-20260111231657585</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20260111231703387.png" alt="image-20260111231703387" tabindex="0" loading="lazy"><figcaption>image-20260111231703387</figcaption></figure>
<p>好，接下来我们就来继续探索。</p>
<figure><img src="@source/8.立体建模/assets/image-20260111234140090.png" alt="image-20260111234140090" tabindex="0" loading="lazy"><figcaption>image-20260111234140090</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20260111234154798.png" alt="image-20260111234154798" tabindex="0" loading="lazy"><figcaption>image-20260111234154798</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20260111234457847.png" alt="image-20260111234457847" tabindex="0" loading="lazy"><figcaption>image-20260111234457847</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20260111234703879.png" alt="image-20260111234703879" tabindex="0" loading="lazy"><figcaption>image-20260111234703879</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20260111234902118.png" alt="image-20260111234902118" tabindex="0" loading="lazy"><figcaption>image-20260111234902118</figcaption></figure>
<p>不过由于我们的猴头细分程度不够，导致头部有些许空缺，这点可以进行一个调整。</p>
<figure><img src="@source/8.立体建模/assets/image-20260111235221068.png" alt="image-20260111235221068" tabindex="0" loading="lazy"><figcaption>image-20260111235221068</figcaption></figure>
<p>然后我们可以给同步的修改器加上一些属性，这样我们就可以再后续添加一些动画。</p>
<figure><img src="@source/8.立体建模/assets/image-20260112000042772.png" alt="image-20260112000042772" tabindex="0" loading="lazy"><figcaption>image-20260112000042772</figcaption></figure>
<p>这里我们可以把类型改为浮点.这里有个问题，为什么三个输入数据映射为一个输入数据了，这个映射规则是什么呢？待补充...</p>
<figure><img src="@source/8.立体建模/assets/image-20260112000142923.png" alt="image-20260112000142923" tabindex="0" loading="lazy"><figcaption>image-20260112000142923</figcaption></figure>
<p>复制一份做线框。</p>
<figure><img src="@source/8.立体建模/assets/image-20260112002105010.png" alt="image-20260112002105010" tabindex="0" loading="lazy"><figcaption>image-20260112002105010</figcaption></figure>
<p>并且把复制后的猴头去除几何节点和关键帧。</p>
<figure><img src="@source/8.立体建模/assets/image-20260112002429150.png" alt="image-20260112002429150" tabindex="0" loading="lazy"><figcaption>image-20260112002429150</figcaption></figure>
<p>然后添加一个线框修改器。</p>
<figure><img src="@source/8.立体建模/assets/image-20260112002538440.png" alt="image-20260112002538440" tabindex="0" loading="lazy"><figcaption>image-20260112002538440</figcaption></figure>
<p>然后加一个细分。</p>
<figure><img src="@source/8.立体建模/assets/image-20260112002638549.png" alt="image-20260112002638549" tabindex="0" loading="lazy"><figcaption>image-20260112002638549</figcaption></figure>
<p>再应用一个线框修改器。</p>
<figure><img src="@source/8.立体建模/assets/image-20260112002719197.png" alt="image-20260112002719197" tabindex="0" loading="lazy"><figcaption>image-20260112002719197</figcaption></figure>
<h4 id="_3-5-2-摄影机位-2" tabindex="-1"><a class="header-anchor" href="#_3-5-2-摄影机位-2"><span>3.5.2.摄影机位</span></a></h4>
<p>这里插一个快捷键操作，<code v-pre>[alt+r]</code> 可以进行一个快速复位，有时候有用。</p>
<figure><img src="@source/8.立体建模/assets/image-20260112002952966.png" alt="image-20260112002952966" tabindex="0" loading="lazy"><figcaption>image-20260112002952966</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20260112003041590.png" alt="image-20260112003041590" tabindex="0" loading="lazy"><figcaption>image-20260112003041590</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20260112003159855.png" alt="image-20260112003159855" tabindex="0" loading="lazy"><figcaption>image-20260112003159855</figcaption></figure>
<h4 id="_3-5-3-灯光布局-2" tabindex="-1"><a class="header-anchor" href="#_3-5-3-灯光布局-2"><span>3.5.3.灯光布局</span></a></h4>
<figure><img src="@source/8.立体建模/assets/image-20260112003311063.png" alt="image-20260112003311063" tabindex="0" loading="lazy"><figcaption>image-20260112003311063</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20260112003455497.png" alt="image-20260112003455497" tabindex="0" loading="lazy"><figcaption>image-20260112003455497</figcaption></figure>
<h4 id="_3-5-4-材质添加-2" tabindex="-1"><a class="header-anchor" href="#_3-5-4-材质添加-2"><span>3.5.4.材质添加</span></a></h4>
<figure><img src="@source/8.立体建模/assets/image-20260112004705475.png" alt="image-20260112004705475" tabindex="0" loading="lazy"><figcaption>image-20260112004705475</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20260112004727916.png" alt="image-20260112004727916" tabindex="0" loading="lazy"><figcaption>image-20260112004727916</figcaption></figure>
<p>这里需要注意的是，几何节点生产的几何体不能直接添加材质，需要在几何节点界面中进行添加，不过可以设置为之前已经有的材质。</p>
<figure><img src="@source/8.立体建模/assets/image-20260112005255875.png" alt="image-20260112005255875" tabindex="0" loading="lazy"><figcaption>image-20260112005255875</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20260112005542406.png" alt="image-20260112005542406" tabindex="0" loading="lazy"><figcaption>image-20260112005542406</figcaption></figure>
<p>然后调整着色器。</p>
<figure><img src="@source/8.立体建模/assets/image-20260112013609907.png" alt="image-20260112013609907" tabindex="0" loading="lazy"><figcaption>image-20260112013609907</figcaption></figure>
<p>菲涅尔现象是一种常见的现象，越是靠近我们的湖泊就越是水面清澈，越是远离我们的湖泊就越是水面反光。</p>
<figure><img src="@source/8.立体建模/assets/image-20260112013841437.png" alt="image-20260112013841437" tabindex="0" loading="lazy"><figcaption>image-20260112013841437</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20260112014235737.png" alt="image-20260112014235737" tabindex="0" loading="lazy"><figcaption>image-20260112014235737</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20260112014615097.png" alt="image-20260112014615097" tabindex="0" loading="lazy"><figcaption>image-20260112014615097</figcaption></figure>
<p>然后我们可以使用原理化体积来模拟丁达尔效应。</p>
<figure><img src="@source/8.立体建模/assets/image-20260112015502474.png" alt="image-20260112015502474" tabindex="0" loading="lazy"><figcaption>image-20260112015502474</figcaption></figure>
<h4 id="_3-5-5-动画制作-2" tabindex="-1"><a class="header-anchor" href="#_3-5-5-动画制作-2"><span>3.5.5.动画制作</span></a></h4>
<figure><img src="@source/8.立体建模/assets/image-20260112001932749.png" alt="image-20260112001932749" tabindex="0" loading="lazy"><figcaption>image-20260112001932749</figcaption></figure>
<p>然后我们需要添加一个眩光的效果，看起来就会 <code v-pre>kirakira</code> 一些。</p>
<figure><img src="@source/8.立体建模/assets/image-20260112004504390.png" alt="image-20260112004504390" tabindex="0" loading="lazy"><figcaption>image-20260112004504390</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20260112020010390.png" alt="image-20260112020010390" tabindex="0" loading="lazy"><figcaption>image-20260112020010390</figcaption></figure>
<h4 id="_3-5-6-生成结果-2" tabindex="-1"><a class="header-anchor" href="#_3-5-6-生成结果-2"><span>3.5.6.生成结果</span></a></h4>
<figure><img src="@source/8.立体建模/assets/image-20260112020030098.png" alt="image-20260112020030098" tabindex="0" loading="lazy"><figcaption>image-20260112020030098</figcaption></figure>
<h3 id="_3-8-走路机器" tabindex="-1"><a class="header-anchor" href="#_3-8-走路机器"><span>3.8.走路机器</span></a></h3>
<h4 id="_3-5-1-物体建模-3" tabindex="-1"><a class="header-anchor" href="#_3-5-1-物体建模-3"><span>3.5.1.物体建模</span></a></h4>
<p>可以使用 <code v-pre>[g+g]</code> 来进行滑移，让点在边或者面上按轨迹移动。</p>
<figure><img src="@source/8.立体建模/assets/image-20260112044411954.png" alt="image-20260112044411954" tabindex="0" loading="lazy"><figcaption>image-20260112044411954</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20260112050241900.png" alt="image-20260112050241900" tabindex="0" loading="lazy"><figcaption>image-20260112050241900</figcaption></figure>
<p>下面这种基于法向调整可以学习一下。</p>
<figure><img src="@source/8.立体建模/assets/image-20260112050236920.png" alt="image-20260112050236920" tabindex="0" loading="lazy"><figcaption>image-20260112050236920</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20260112050912329.png" alt="image-20260112050912329" tabindex="0" loading="lazy"><figcaption>image-20260112050912329</figcaption></figure>
<p>这里有个缩裹修改器可以使用一下。</p>
<figure><img src="@source/8.立体建模/assets/image-20260112052442146.png" alt="image-20260112052442146" tabindex="0" loading="lazy"><figcaption>image-20260112052442146</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20260112052627037.png" alt="image-20260112052627037" tabindex="0" loading="lazy"><figcaption>image-20260112052627037</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20260112052826151.png" alt="image-20260112052826151" tabindex="0" loading="lazy"><figcaption>image-20260112052826151</figcaption></figure>
<p>sz0 打平底。</p>
<figure><img src="@source/8.立体建模/assets/image-20260112054510943.png" alt="image-20260112054510943" tabindex="0" loading="lazy"><figcaption>image-20260112054510943</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20260112054959944.png" alt="image-20260112054959944" tabindex="0" loading="lazy"><figcaption>image-20260112054959944</figcaption></figure>
<p>注意这里腿部不要用镜像修改器，直接复制手动对齐就可以，后续我们需要绑定骨骼。</p>
<h4 id="_3-5-2-摄影机位-3" tabindex="-1"><a class="header-anchor" href="#_3-5-2-摄影机位-3"><span>3.5.2.摄影机位</span></a></h4>
<h4 id="_3-5-3-灯光布局-3" tabindex="-1"><a class="header-anchor" href="#_3-5-3-灯光布局-3"><span>3.5.3.灯光布局</span></a></h4>
<h4 id="_3-5-4-材质添加-3" tabindex="-1"><a class="header-anchor" href="#_3-5-4-材质添加-3"><span>3.5.4.材质添加</span></a></h4>
<h4 id="_3-5-5-动画制作-3" tabindex="-1"><a class="header-anchor" href="#_3-5-5-动画制作-3"><span>3.5.5.动画制作</span></a></h4>
<p>这次我们利用绑定骨骼来进行动画制作，对骨骼的两个端在编辑模式下进行 <code v-pre>[e]</code> 就可以做一个挤出快速创建新的骨骼（但是小头有父子关系，大头没有只是位置重叠，但是可以使用 <code v-pre>[ctrl+p]</code> 手动保持偏移量来进行父子绑定，可以使用 <code v-pre>[alt+p]</code> 来进行断开）。</p>
<p>同时还可以进入姿态模式来调整姿态，在这里制作动画，编辑模式下只是做骨骼的一个基本形态。</p>
<figure><img src="@source/8.立体建模/assets/image-20260112055729351.png" alt="image-20260112055729351" tabindex="0" loading="lazy"><figcaption>image-20260112055729351</figcaption></figure>
<p>我们来绑定给机器人。</p>
<figure><img src="@source/8.立体建模/assets/image-20260112061240403.png" alt="image-20260112061240403" tabindex="0" loading="lazy"><figcaption>image-20260112061240403</figcaption></figure>
<p>要做骨骼的镜像需要添加 <code v-pre>_L</code> 后缀...这个东西不太好用...待补充...</p>
<figure><img src="@source/8.立体建模/assets/image-20260112061759103.png" alt="image-20260112061759103" tabindex="0" loading="lazy"><figcaption>image-20260112061759103</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20260112061900549.png" alt="image-20260112061900549" tabindex="0" loading="lazy"><figcaption>image-20260112061900549</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20260112062026923.png" alt="image-20260112062026923" tabindex="0" loading="lazy"><figcaption>image-20260112062026923</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20260112062057863.png" alt="image-20260112062057863" tabindex="0" loading="lazy"><figcaption>image-20260112062057863</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20260112062149433.png" alt="image-20260112062149433" tabindex="0" loading="lazy"><figcaption>image-20260112062149433</figcaption></figure>
<p>这里设置极点如果有问题可以重算扭转。</p>
<figure><img src="@source/8.立体建模/assets/image-20260112062427141.png" alt="image-20260112062427141" tabindex="0" loading="lazy"><figcaption>image-20260112062427141</figcaption></figure>
<p>或者手动调整角度。</p>
<figure><img src="@source/8.立体建模/assets/image-20260112062636881.png" alt="image-20260112062636881" tabindex="0" loading="lazy"><figcaption>image-20260112062636881</figcaption></figure>
<p>做骨骼最好有一点点弯曲倾向，不然设置极点后有可能看起来和瘸腿一样。<img src="@source/8.立体建模/assets/image-20260112062754015.png" alt="image-20260112062754015" loading="lazy"></p>
<p>极骨就是控制骨骼的反转限度，可以绑定一个父子关系来保证不反转。</p>
<figure><img src="@source/8.立体建模/assets/image-20260112063202521.png" alt="image-20260112063202521" tabindex="0" loading="lazy"><figcaption>image-20260112063202521</figcaption></figure>
<figure><img src="@source/8.立体建模/assets/image-20260112063222925.png" alt="image-20260112063222925" tabindex="0" loading="lazy"><figcaption>image-20260112063222925</figcaption></figure>
<p>链长可以控制骨头的数量。</p>
<figure><img src="@source/8.立体建模/assets/image-20260112063527200.png" alt="image-20260112063527200" tabindex="0" loading="lazy"><figcaption>image-20260112063527200</figcaption></figure>
<p>这样在连接父子关系的时候不会出错...待补充...</p>
<figure><img src="@source/8.立体建模/assets/image-20260112064336267.png" alt="image-20260112064336267" tabindex="0" loading="lazy"><figcaption>image-20260112064336267</figcaption></figure>
<p>然后需要做一个骨骼的绑定。</p>
<figure><img src="@source/8.立体建模/assets/image-20260112064533097.png" alt="image-20260112064533097" tabindex="0" loading="lazy"><figcaption>image-20260112064533097</figcaption></figure>
<p><code v-pre>[alt+f]</code> 可以解决反转的问题。</p>
<figure><img src="@source/8.立体建模/assets/image-20260112070303194.png" alt="image-20260112070303194" tabindex="0" loading="lazy"><figcaption>image-20260112070303194</figcaption></figure>
<p>接下来就是最重要的录制动作啦。</p>
<figure><img src="@source/8.立体建模/assets/image-20260112151756886.png" alt="image-20260112151756886" tabindex="0" loading="lazy"><figcaption>image-20260112151756886</figcaption></figure>
<p>不过仔细想想取消身体骨骼和脚步控制骨骼会比较好（这样身体骨骼蹲下的时候可以自然做出类似蹲下的动作）。</p>
<figure><img src="@source/8.立体建模/assets/image-20260112155521007.png" alt="image-20260112155521007" tabindex="0" loading="lazy"><figcaption>image-20260112155521007</figcaption></figure>
<p>可以进行一个 <code v-pre>[s]</code> 对时间轴进行拉伸。</p>
<figure><img src="@source/8.立体建模/assets/image-20260112155637410.png" alt="image-20260112155637410" tabindex="0" loading="lazy"><figcaption>image-20260112155637410</figcaption></figure>
<p>还有眼睛也可以调整一下。</p>
<figure><img src="@source/8.立体建模/assets/image-20260112160546708.png" alt="image-20260112160546708" tabindex="0" loading="lazy"><figcaption>image-20260112160546708</figcaption></figure>
<p>拓展到 <code v-pre>250</code> 帧，在 <code v-pre>30</code> 帧处设置一个通道的内插，就可以自动循环动画。</p>
<figure><img src="@source/8.立体建模/assets/image-20260112161251452.png" alt="image-20260112161251452" tabindex="0" loading="lazy"><figcaption>image-20260112161251452</figcaption></figure>
<p>还需要根据曲线编辑器来决定结束帧，避免产生不连贯的问题。</p>
<figure><img src="@source/8.立体建模/assets/image-20260112161619829.png" alt="image-20260112161619829" tabindex="0" loading="lazy"><figcaption>image-20260112161619829</figcaption></figure>
<h4 id="_3-5-6-生成结果-3" tabindex="-1"><a class="header-anchor" href="#_3-5-6-生成结果-3"><span>3.5.6.生成结果</span></a></h4>
<p>待补充...</p>
<h2 id="_4-深入研究" tabindex="-1"><a class="header-anchor" href="#_4-深入研究"><span>4.深入研究</span></a></h2>
<p>通过上述的一些实操学习后，您最好再多做做一些实际操作的教程，我这里有一些推荐的效果不错的建模项目，从小项目到大项目依次排列：</p>
<ul>
<li>这一份覆盖 <code v-pre>Blender</code> 较全的 <a href="https://www.youtube.com/playlist?list=PLw4hWepHFqhS2DiI8Y96X7gCiRizY87Et" target="_blank" rel="noopener noreferrer">甜甜圈系列教程</a> 来进行一个深入学习，然后我再来通过阅读 <a href="https://docs.blender.org/manual/zh-hans/latest/" target="_blank" rel="noopener noreferrer">Blender 5.0</a> 版本向您解析关于一些 <code v-pre>Blender</code> 的官方知识</li>
<li>人物建模的过程是比较长的，因此您可以参考一份 <a href="https://www.bilibili.com/video/BV1w9T4z2EuY?spm_id_from=333.788.recommend_more_video.1&amp;trackid=web_related_0.router-related-2206146-t48nw.1768250522485.782&amp;vd_source=c92c89dbfcf9cc30c48086469621f35b" target="_blank" rel="noopener noreferrer">房子老师的初级到中级教程</a> 来进行学习，这个项目一旦做好就说明您的 <code v-pre>Blender</code> 已经具备一定的价值转化了，已经可以开始考虑做一名初级的建模师了</li>
</ul>
<h3 id="_4-1-用户界面" tabindex="-1"><a class="header-anchor" href="#_4-1-用户界面"><span>4.1.用户界面</span></a></h3>
<h3 id="_4-2-编辑器" tabindex="-1"><a class="header-anchor" href="#_4-2-编辑器"><span>4.2.编辑器</span></a></h3>
<h3 id="_4-3-场景-物体-集合" tabindex="-1"><a class="header-anchor" href="#_4-3-场景-物体-集合"><span>4.3.场景&amp;物体&amp;集合</span></a></h3>
<h3 id="_4-4-创作方法" tabindex="-1"><a class="header-anchor" href="#_4-4-创作方法"><span>4.4.创作方法</span></a></h3>
<h4 id="_4-4-1-建模" tabindex="-1"><a class="header-anchor" href="#_4-4-1-建模"><span>4.4.1.建模</span></a></h4>
<h4 id="_4-4-2-雕刻" tabindex="-1"><a class="header-anchor" href="#_4-4-2-雕刻"><span>4.4.2.雕刻</span></a></h4>
<h4 id="_4-4-3-蜡笔" tabindex="-1"><a class="header-anchor" href="#_4-4-3-蜡笔"><span>4.4.3.蜡笔</span></a></h4>
<h4 id="_4-4-4-动画" tabindex="-1"><a class="header-anchor" href="#_4-4-4-动画"><span>4.4.4.动画</span></a></h4>
<h3 id="_4-5-展示技巧" tabindex="-1"><a class="header-anchor" href="#_4-5-展示技巧"><span>4.5.展示技巧</span></a></h3>
<h4 id="_4-5-1-物理" tabindex="-1"><a class="header-anchor" href="#_4-5-1-物理"><span>4.5.1.物理</span></a></h4>
<h4 id="_4-5-2-渲染" tabindex="-1"><a class="header-anchor" href="#_4-5-2-渲染"><span>4.5.2.渲染</span></a></h4>
<h4 id="_4-5-3-合成" tabindex="-1"><a class="header-anchor" href="#_4-5-3-合成"><span>4.5.3.合成</span></a></h4>
<h3 id="_4-6-视踪" tabindex="-1"><a class="header-anchor" href="#_4-6-视踪"><span>4.6.视踪</span></a></h3>
<h3 id="_4-7-视频编辑" tabindex="-1"><a class="header-anchor" href="#_4-7-视频编辑"><span>4.7.视频编辑</span></a></h3>
<h3 id="_4-8-文件管理" tabindex="-1"><a class="header-anchor" href="#_4-8-文件管理"><span>4.8.文件管理</span></a></h3>
<p>待补充...</p>
<h2 id="_5-插件推荐" tabindex="-1"><a class="header-anchor" href="#_5-插件推荐"><span>5.插件推荐</span></a></h2>
<ul>
<li>https://www.blenderkit.com/</li>
<li>https://polygoniq.com/software/engon/</li>
<li>使用的插件▼ AutoMirror：标准 LoopTools：标准 Edge Flow：https://github.com/BenjaminSauder/EdgeFlow Hide Only Vertex：https://bookyakuno.gumroad.com/l/hide_only_vertex Copy Attributes Menu：标准 Check Tool Box (Mesh Detection)：https://vfxgrace.gumroad.com/l/apny 绑定 VRM Import Export：https://vrm-addon-for-blender.info/en/ UV展开 TexTools：https://github.com/SavMartin/TexTools-Blender UV Checker Map Maker：https://uvchecker.vinzi.xyz/ 纹理 Auto Reload： https://github.com/samytichadou/Auto_Reload_Blender_addon</li>
<li></li>
</ul>
<h2 id="_6-开发能力" tabindex="-1"><a class="header-anchor" href="#_6-开发能力"><span>6.开发能力</span></a></h2>
<p>当从终端手动启动 <code v-pre>Blender</code> 时，<code v-pre>Blender</code> 会在其启动的控制台窗口输出信息，通常用于：</p>
<ul>
<li><a href="https://docs.blender.org/manual/zh-hans/latest/advanced/command_line/render.html#command-line-render" target="_blank" rel="noopener noreferrer">渲染动画</a></li>
<li>用于自动化和批处理，需要使用不同 <a href="https://docs.blender.org/manual/zh-hans/latest/advanced/command_line/arguments.html#command-line-args" target="_blank" rel="noopener noreferrer">参数</a> 启动 <code v-pre>Blender</code></li>
<li><code v-pre>Python</code> 开发时，可以查看 <code v-pre>print()</code> 函数的输出</li>
<li>如果 <code v-pre>Blender</code> 意外退出，控制台显示的信息也许可以指示原因或者错误</li>
<li>排查错误时，查看 <code v-pre>--debug</code> 信息输出</li>
</ul>
<p><a href="https://docs.blender.org/manual/zh-hans/latest/advanced/command_line/launch/index.html#command-line-launch-index" target="_blank" rel="noopener noreferrer">从命令行启动</a> 查询具体命令行启动 <code v-pre>Blender</code> 的指令。</p>
</div></template>


