<template><div><Mermaid code="eJxLL0osyFAIceHKSo9Werpjx4vljc/mbXs2r0UplosrJQso1jv12ZxdcLHKyuKstByg8K4pz6eseDZ1w7PedU872p4v242kJK08qzBa6dmc3qddC1/Obnu+bwlMUkFX104BpKAQpAJqCFjd05krIEqBitQUkpNhStbOeNqEqYQrpwjsirbtz5vXotmfXJWWDZSa1/R89hag1NNdk+FS5WnlQJl96yDmwYWLCpMKgOLrdgJteL5n2rO+SYgwyEoHuzklC+gqiOfBDJAXgQyQM0DOBVoJpIDGA0mQaVwAu2yv/A=="></Mermaid><h2 id="_1-单机架构" tabindex="-1"><a class="header-anchor" href="#_1-单机架构"><span>1.单机架构</span></a></h2>
<p>在一个服务器上启动运用服务，并且将数据存储在数据库中，甚至可以把数据库模块移除直接做出上层应用，这种模式是很多中小公司采用的模式，哪怕只有一台主机，其性能也可能非常稳定，多购买主机的成本也随之降低，并且很多服务的用户量也达不到使用更高级架构的门槛。</p>
<h2 id="_2-分离架构" tabindex="-1"><a class="header-anchor" href="#_2-分离架构"><span>2.分离架构</span></a></h2>
<p>如果业务用户量增长，一台主机难以应付（尤其是同一时刻处理的请求变多），因此就需要引入更多的主机（硬件资源，尤其是 <code v-pre>CPU</code>、内存、硬盘、网络带宽...），这种情况一般使用两种类型的方案，也就是开源节流（增加收入，节省开支）</p>
<ul>
<li>开源：简单粗暴，增加更多高级硬件资源</li>
<li>节流：复杂优雅，通过性能测试优化代码</li>
</ul>
<p>可以应用服务器和存储服务器，针对两种服务器的特点做不同的配置（前者可能需要更多的 <code v-pre>CPU</code> 和内存资源，后者可能需要更多的硬盘资源）。</p>
<h2 id="_3-应用服务集群架构-分布式" tabindex="-1"><a class="header-anchor" href="#_3-应用服务集群架构-分布式"><span>3.应用服务集群架构（分布式）</span></a></h2>
<p>如果引入更多的应用服务器，形成一个服务器集群，因此就可能对用户请求做负载均衡，<code v-pre>Nginx</code> 就在这里得到了应用，让每个服务器瓜分大量的请求，降低每一台机器的压力（和多线程的思路很类似）。</p>
<p>而这里最重要的就是负载均衡器，有很多负载均衡算法（最简单的就是轮询分配来分配请求），需要注意，负载均衡器对请求量的承担能力要远远高于应用服务器，处理一个请求只是进行分配，而不完成请求对应的动作，对应的资源消耗也较少。</p>
<p>当然，如果负载均衡器也撑不下去了，就可能再引入更多的负载均衡，不过这同时也会提高管理成本。</p>
<p>另外，该架构也可以提高系统的可用性，一旦某个应用服务器故障，负载均衡则可以实时调配，将故障服务器的任务临时转移给其他服务器。</p>
<h2 id="_4-存储服务集群架构-分布式" tabindex="-1"><a class="header-anchor" href="#_4-存储服务集群架构-分布式"><span>4.存储服务集群架构（分布式）</span></a></h2>
<p>当然，如果引入的大量应用服务器，就有可能导致存储服务器的压力同样上升，如果同样进行开源操作，就需要引入更多的存储服务器，并且做读写分离，例如一台主存储服务器（<code v-pre>master</code>）只做写入操作，而从数据库（<code v-pre>slave</code>）只做读取操作。</p>
<p>主数据库也会实时把数据同步到从数据库中，并且一般实际开发中，读操作会比写操作更多。因此就有可能引入更多的从服务器，形成一主多从的存储服务器集群。</p>
<p>同时从数据库还可以通过负载均衡的方式，让应用服务器进行访问。</p>
<h2 id="_5-数据冷热分离架构-分布式" tabindex="-1"><a class="header-anchor" href="#_5-数据冷热分离架构-分布式"><span>5.数据冷热分离架构（分布式）</span></a></h2>
<p>但是数据库有个问题，终究是要面对响应速度的问题，可以把用来读取的数据进行“冷热”区分，热数据存储在缓存服务器中，而冷数据存储在从存储服务器中。</p>
<p>而缓存服务器所能存储的热数据一般也较少，速度也较快，<code v-pre>Redis</code> 就可以在这里被得到应用。</p>
<p>有些时候，也会让 <code v-pre>Readis</code> 存储全量数据，这样的数据不能被丢弃。也可以给 <code v-pre>MySQL</code> 作辅助，存储部分数据，哪怕 <code v-pre>Redis</code> 的数据没有了也可以再加载回来。</p>
<h2 id="_6-垂直分库分表架构-分布式" tabindex="-1"><a class="header-anchor" href="#_6-垂直分库分表架构-分布式"><span>6.垂直分库分表架构（分布式）</span></a></h2>
<p>如果一个存储服务器还是不够存储，就可以考虑将多个 <code v-pre>database</code> 划分给不同的存储服务器，让一个存储服务器只拥有一个或部分的 <code v-pre>database</code>，甚至可以拆分 <code v-pre>table</code> 也就是所谓的分库分表。因此一个存储集群对应一个完整的数据库服务，内含多个数据库存储服务器或数据表存储服务器（当然，也需要结合实际的业务）。</p>
<div class="hint-container important">
<p class="hint-container-title">重要</p>
<p>注意：如果迫不得已选择开源然后引入分布式，系统的复杂度大大提高，出 <code v-pre>BUG</code> 的概率就会更高。引入新特性的方便，往往会带来新的暗含的代价。</p>
</div>
<h2 id="_7-微服务架构-团队化的分布式" tabindex="-1"><a class="header-anchor" href="#_7-微服务架构-团队化的分布式"><span>7.微服务架构（团队化的分布式）</span></a></h2>
<p>如果进一步优化，就会诞生微服务，每个微服务设置一整套应用集群、缓存集群、存储集群，一个微服务交给一个团队开发维护。而多个微服务之间就可能需要设置相关的公共服务和数据隔离，例如安全中心、监控预警中心等（微服务本质是为了解决人的问题，可以让更多的人力资源进行运用，因此微服务可以说是把人力资源也考虑进去了，因此小公司是很难直接使用这种架构的，只能租用大厂的微服务技术）。</p>
<p>当然这种做法提高了协作效率，但是也变相降低了一些性能，并且也更加复杂了，需要更多的运维团队进行专门的服务器资源监控。</p>
<p>当然，如果使用微服务，在技术领域上也可以提高功能复用的效果，并且可以给不同的服务进行部署。</p>
<div class="hint-container important">
<p class="hint-container-title">重要</p>
<p>补充：还有一些补充的概念。</p>
<figure><img src="@source/5.开发方向/8.架构开发/assets/image-20240413214907836-1713016745337-4.png" alt="image-20240413214907836" tabindex="0" loading="lazy"><figcaption>image-20240413214907836</figcaption></figure>
<p>分布是在物理上的，集群是在逻辑上的，不过多数情况也混用。</p>
<figure><img src="@source/5.开发方向/8.架构开发/assets/image-20240413215241449-1713016745336-1.png" alt="image-20240413215241449" tabindex="0" loading="lazy"><figcaption>image-20240413215241449</figcaption></figure>
<figure><img src="@source/5.开发方向/8.架构开发/assets/image-20240413215350196-1713016745337-2.png" alt="image-20240413215350196" tabindex="0" loading="lazy"><figcaption>image-20240413215350196</figcaption></figure>
<figure><img src="@source/5.开发方向/8.架构开发/assets/image-20240413215554168-1713016745337-3.png" alt="image-20240413215554168" tabindex="0" loading="lazy"><figcaption>image-20240413215554168</figcaption></figure>
<p>分布式系统就是为了引入更多的硬件资源。</p>
</div>
<h2 id="_8-细致讨论" tabindex="-1"><a class="header-anchor" href="#_8-细致讨论"><span>8.细致讨论</span></a></h2>
<h3 id="_8-1-基础分布式" tabindex="-1"><a class="header-anchor" href="#_8-1-基础分布式"><span>8.1.基础分布式</span></a></h3>
<h3 id="_1-简单提要" tabindex="-1"><a class="header-anchor" href="#_1-简单提要"><span>1.简单提要</span></a></h3>
<p>学习分布式系统跟学习其它技术非常不一样，分布式系统涵盖的面非常广，具体来说涵盖如下几方面：</p>
<ul>
<li><strong>服务调度</strong>，涉及服务发现、配置管理、弹性伸缩、故障恢复等</li>
<li><strong>资源调度</strong>，涉及对底层资源的调度使用，如计算资源、网络资源和存储资源等</li>
<li><strong>流量调度</strong>，涉及路由、负载均衡、流控、熔断等</li>
<li><strong>数据调度</strong>，涉及数据复本、数据一致性、分布式事务、分库、分表等。容错处理，涉及隔离、幂等、重试、业务补偿、异步、降级等</li>
<li><strong>自动运维</strong>，涉及持续集成、持续部署、全栈监控、调用链跟踪等</li>
</ul>
<p>分布式的注意要点有很多：</p>
<ul>
<li>分布式系统之所以复杂，就是因为它太容易出错了。这意味着，你要 <strong>把处理错误的代码当成正常功能的代码</strong> 来处理。</li>
<li>开发一个健壮的分布式系统的成本是单体系统的几百倍甚至几万倍。这意味着，我们要自己开发一个，<strong>需要能力很强的开发者</strong>。</li>
<li>非常健壮的 <strong>开源的分布式系统并不多</strong>，或者说基本没有。这意味着，如果你要用开源的，那么你需要 <code v-pre>hold</code> 得住其源码。</li>
<li>管理或是协调多个服务或机器是非常难的。这意味着，我们要去 <strong>读很多很多的分布式系统的论文</strong>。</li>
<li>在分布式环境下，出了问题是很难 <code v-pre>debug</code> 的。这意味着，我们需要非常好的 <strong>监控和跟踪系统</strong>，还需要经常做演练和测试。</li>
<li>在分布式环境下，你需要 <strong>更科学地分析和统计</strong>。这意味着，我们要用 <code v-pre>P90</code> 这样的统计指标，而不是平均值，我们还需要做容量计划和评估。</li>
<li>在分布式环境下，<strong>需要应用服务化</strong>。这意味着，我们需要一个服务开发框架，比如 <code v-pre>SOA</code> 或微服务。</li>
<li>在分布式环境下，故障不可怕，可怕的是影响面过大，时间过长。这意味着，我们需要花时间来开发我们的 <strong>自动化运维平台</strong>。</li>
</ul>
<p>以前我在软件设计的相关笔记中其实有简单的提及过种常见的分布式应用，这里简单列出来：</p>
<ul>
<li>应用服务集群架构</li>
<li>存储服务集群架构</li>
<li>数据冷热分离架构</li>
<li>垂直分库分表架构</li>
<li>微服务架构</li>
</ul>
<div class="hint-container important">
<p class="hint-container-title">重要</p>
<p>补充：接下来我会基于 <a href="https://aosabook.org/en/v2/distsys.html" target="_blank" rel="noopener noreferrer">这个著名的博文</a> 来进行拓展和学习。</p>
</div>
<p>但是这些只是让您清楚分布式的好处，但是具体分布式需要克服哪些困难，有哪些特征（不仅仅是多）是需要继续研究的。但是上面的应用都会告诉我们构建和运营可扩展的网站或应用程序意味着：在原始层面上，它只是通过 <code v-pre>Internet</code> 将用户与远程资源连接起来，使其具有可扩展性的部分是资源或对这些资源的访问分布在多个服务器上。</p>
<p>就像生活中的大多数事情一样，从长远来看，在构建 <code v-pre>Web</code> 服务时花时间提前计划会有所帮助; 了解大型网站背后的一些考虑因素和权衡可以在创建小型网站时做出更明智的决策。以下是影响大型 Web 系统设计的一些关键原则：</p>
<ul>
<li><strong>可用性（Scalability）：</strong> 网站的正常运行时间对于许多公司的声誉和功能绝对至关重要。对于一些较大的在线零售网站来说，即使几分钟也不可用也可能导致数千或数百万美元的收入损失，因此将他们的系统设计为持续可用并具有故障弹性既是一项基本业务，也是一项技术要求。分布式系统中的高可用性需要仔细考虑关键组件的冗余、系统部分故障时的快速恢复以及出现问题时的优雅降级。</li>
<li><strong>可靠性（Availability）：</strong> 系统需要可靠，以便数据请求将始终返回相同的数据。如果数据发生更改或更新，则同一请求应返回新数据。用户需要知道，如果某些内容被写入或存储到系统中，它将持续存在，并且可以依赖它来进行将来的检索。</li>
<li><strong>可扩性（Stability Patterns）：</strong> 对于任何大型分布式系统，大小只是需要考虑的规模的一个方面。同样重要的是增加容量以处理更多负载所需的努力，通常称为系统的可扩展性。可扩展性可以指系统的许多不同参数：它可以处理多少额外的流量，添加更多存储容量的难易程度，甚至可以处理多少个交易。</li>
<li><strong>可管理性</strong>： 设计一个易于作的系统是另一个重要的考虑因素。系统的可管理性等同于作的可扩展性：维护和更新。可管理性需要考虑的事项是，在问题发生时诊断和理解问题的难易程度、进行更新或修改的难易程度以及系统作的简单程度（即，它是否经常运行而没有故障或异常？）。</li>
<li><strong>高性能：</strong> 网站性能已成为大多数网站的重要考虑因素。网站的速度会影响使用情况和用户满意度，以及搜索引擎排名，这一因素与收入和保留率直接相关。因此，创建一个针对快速响应和低延迟进行优化的系统是关键。</li>
<li><strong>成本：</strong> 成本是一个重要因素。这显然可能包括硬件和软件成本，但考虑部署和维护系统所需的其他方面也很重要。开发人员构建系统所需的时间、运行系统所需的作工作量，甚至所需的培训量都应考虑在内。</li>
</ul>
<div class="hint-container caution">
<p class="hint-container-title">警告</p>
<p>警告：这些原则中的每一个都为设计分布式 <code v-pre>Web</code> 架构的决策提供了基础。然而，它们也可能相互矛盾，因此实现一个目标是以牺牲另一个目标为代价的。一个基本的例子：选择通过简单地添加更多服务器（可扩展性）来解决容量问题，可能会以可管理性（您必须运行额外的服务器）和成本（服务器的价格）为代价。</p>
<p>在设计任何类型的 <code v-pre>Web</code> 应用程序时，重要的是要考虑这些关键原则，即使它承认设计可能会牺牲其中的一个或多个。</p>
</div>
<p>我们先来假设一个场景：</p>
<figure><img src="@source/5.开发方向/8.架构开发/assets/imageHosting1-1753086229518-2.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>在某个时候，您可能已经在网上发布了一张图片。对于托管和交付大量图像的大型站点，构建经济高效、高可用性和低延迟（快速检索）的架构存在挑战。想象一下一个 <code v-pre>Web</code> 系统（注意我们假设的是一个网站，但是后续的描述都可以迁移），用户能够将他们的图像上传到中央服务器，并且可以通过网络链接或 <code v-pre>API</code> 请求图像，就像 <code v-pre>Flickr</code> 或 <code v-pre>Picasa</code> 一样。为简单起见，我们假设此应用程序有两个关键部分：将图像上传（写入）到服务器的能力，以及查询图像的能力。虽然我们当然希望上传高效，但我们最关心的是当有人请求图像时（例如，可以为网页或其他应用程序请求图像）时提供非常快速的交付。这与 <code v-pre>Web</code> 服务器或内容分发网络 （<code v-pre>CDN</code>） 边缘服务器 （<code v-pre>CDN</code> 用于将内容存储在多个位置的服务器，以便内容在地理上/物理上更靠近用户，从而获得更快的性能） 可能提供的功能非常相似。</p>
<p>在此图片托管示例中，系统必须具有可感知的速度、可靠的数据存储以及所有这些属性的高度可扩展性。构建此应用程序的小型版本将是微不足道的，并且很容易托管在单个服务器上。然而，这对本章来说并不有趣。假设我们想要构建可以像 <code v-pre>Flickr</code> 一样大的东西。</p>
<div class="hint-container important">
<p class="hint-container-title">重要</p>
<p>补充：简要说明如下。</p>
<table>
<thead>
<tr>
<th>项目</th>
<th>Flickr</th>
<th>Picasa</th>
</tr>
</thead>
<tbody>
<tr>
<td>平台类型</td>
<td>在线图片分享网站</td>
<td>本地图片管理软件 + 在线相册</td>
</tr>
<tr>
<td>用户定位</td>
<td>摄影师 / 照片分享者</td>
<td>一般用户 / 照片管理</td>
</tr>
<tr>
<td>当前状态</td>
<td>仍在运行（由 <code v-pre>SmugMug</code> 运营）</td>
<td>已停止服务（被 <code v-pre>Google Photos</code> 替代）</td>
</tr>
</tbody>
</table>
</div>
<h3 id="_2-实现特征" tabindex="-1"><a class="header-anchor" href="#_2-实现特征"><span>2.实现特征</span></a></h3>
<h4 id="_2-1-服务分离" tabindex="-1"><a class="header-anchor" href="#_2-1-服务分离"><span>2.1.服务分离</span></a></h4>
<p>在考虑可扩展的系统设计时，它有助于解耦功能并将系统的每个部分视为具有明确定义接口的自己的服务。在实践中，以这种方式设计的系统被称为面向服务的架构（<code v-pre>SOA</code>）。对于这些类型的系统，每个服务都有自己独特的功能上下文，并且与该上下文之外的任何内容的交互都是通过抽象接口进行的，通常是另一个服务的面向公众的 <code v-pre>API</code>。</p>
<p>将系统解构为一组互补服务会使这些部分的作彼此分离。此抽象有助于在服务、其底层环境和该服务的使用者之间建立明确的关系。创建这些清晰的划分有助于隔离问题，但也允许每个部分彼此独立扩展。这种面向服务的系统设计与面向对象的编程设计非常相似。</p>
<p>在我们的示例中，所有上传和检索图像的请求都由同一服务器处理。但是，由于系统需要扩展，因此将这两个功能分解为自己的服务是有意义的。</p>
<p>让我们快进一下，假设这项服务被频繁使用。在这种情况下，很容易看出写入操作耗时更长会如何影响读取图像的时间（因为这两个功能会争夺共享资源）。根据架构的不同，这种影响可能会相当显著。即便上传速度和下载速度相同（大多数 <code v-pre>IP</code> 网络并非如此，因为多数网络的设计至少保证下载速度与上传速度之比为 <code v-pre>3:1</code>），读取文件通常也会从缓存中读取，而写入操作最终必须写入磁盘（在最终一致性的情况下，或许还要写入多次）。即便是所有数据都在内存中，或者从磁盘（如固态硬盘）读取，数据库写入操作几乎总是比读取操作慢。</p>
<p>这种设计的另一个潜在问题是，像 <code v-pre>Apache</code> 或 <code v-pre>lighttpd</code> 这样的 <code v-pre>Web</code> 服务器通常对它可以保持的同时连接数有上限（默认值约为 <code v-pre>500</code>，但可以更高），并且在高流量中，写入会很快消耗所有这些连接。由于读取可以是异步的，也可以利用其他性能优化（如 <code v-pre>gzip</code> 压缩或分块传输编码），因此 <code v-pre>Web</code> 服务器可以更快地切换服务读取，并在每秒处理比最大连接数更多的请求的客户端之间快速切换（<code v-pre>Apache</code> 和最大连接数设置为 <code v-pre>500</code>，每秒处理数千个读取请求的情况并不少见）。另一方面，写入往往会在上传期间保持开放连接，因此在大多数家庭网络上上传 <code v-pre>1MB</code> 文件可能需要 <code v-pre>1</code> 秒以上的时间，因此 <code v-pre>Web</code> 服务器只能处理 <code v-pre>500</code> 个这样的同时写入。</p>
<p>为这种瓶颈进行规划是一个很好的理由，可以将图像的读取和写入拆分为它们自己的服务。这使我们能够独立地扩展它们中的每一个（因为我们可能总是会做更多的阅读而不是写作），但也有助于澄清每个点发生的事情。最后，这将分离未来的关注点，这将使故障排除和扩展读取速度慢等问题变得更加容易。</p>
<p>这种方法的优势在于，我们能够独立地解决各个问题 —— 无需在同一环境下操心新图像的写入和检索问题。这两项服务仍会利用全局的图像集合，但它们可以自由地采用适合自身服务的方法来优化性能（例如，对请求进行排队，或者对热门图像进行缓存 —— 下文会详细介绍）。而且从维护和成本角度来看，每项服务都能根据需要独立扩展，这一点非常有利，因为如果将它们合并交织在一起，就可能像前面讨论的场景那样，其中一项服务会在不经意间影响另一项服务的性能。</p>
<p>当然，当你拥有两个不同的端点时，上述方法可以很好地发挥作用（实际上，这与多家云存储提供商及内容分发网络的实现非常相似）。不过，有很多方法可以解决这类瓶颈问题，且每种方法都有不同的权衡取舍。</p>
<p>例如，<code v-pre>Flickr</code> 通过将用户分布到不同的分片上来解决读写问题，每个分片只能处理一定数量的用户，随着用户数量的增加，集群中会添加更多的分片（参见关于 <code v-pre>Flickr</code> 扩展的演示文稿，网址：http://mysqldba.blogspot.com/2008/04/mysql-uc-2007-presentation-file.html）。在第一个例子中，根据实际使用情况（整个系统的读写次数）来扩展硬件会更简单，而 <code v-pre>Flickr</code> 是根据用户基数进行扩展（但这需要假设用户的使用量均等，因此可能会存在额外的容量）。在第一个例子中，如果其中一个服务出现故障，会导致整个系统的功能受影响（例如，所有人都无法写入文件），而 <code v-pre>Flickr</code> 的某个分片出现故障只会影响该分片上的用户。在第一个例子中，对整个数据集执行操作会更便捷 —— 比如，更新写入服务以包含新的元数据，或者跨所有图像元数据进行搜索 —— 而在 <code v-pre>Flickr</code> 的架构中，每个分片都需要单独更新或搜索（或者需要创建一个搜索服务来整理这些元数据 —— 实际上他们就是这么做的）。</p>
<p><strong>但是合适的、符合业务的分片算法就是重中之重，并且需要考虑转接路由的网关服务器的可用性</strong>，一旦网关系统宕机，整个服务都会挂断。</p>
<figure><img src="@source/5.开发方向/8.架构开发/assets/imageHosting2-1753156061792-1.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<div class="hint-container important">
<p class="hint-container-title">重要</p>
<p>补充：有关数据库基准测试的开源工具 <code v-pre>Pole Position</code>，可参考 http://polepos.org/，其测试结果见 http://polepos.sourceforge.net/results/PolePositionClientServer.pdf）。</p>
</div>
<h4 id="_2-2-备份冗余" tabindex="-1"><a class="header-anchor" href="#_2-2-备份冗余"><span>2.2.备份冗余</span></a></h4>
<p>为了优雅地处理故障，<code v-pre>Web</code> 架构必须具有其服务和数据的冗余。例如，如果单个服务器上存储了一个文件副本，则丢失该服务器意味着丢失该文件。丢失数据很少是一件好事，处理数据的常见方法是创建多个或冗余副本。</p>
<p>同样的原则也适用于服务。如果应用程序有核心功能，则确保同时运行多个副本或版本可以防止单个节点发生故障。</p>
<p>在系统中创建冗余可以消除单点故障，并在危机中需要时提供备份或备用功能。例如，如果同一服务的两个实例在生产中运行，并且一个实例失败或降级，则系统可以 <em>故障转移</em> 到正常副本。<strong>故障转移可能会发生自动或需要人工干预，有承担某些新数据丢失的风险，并且成本会双倍提升</strong>。</p>
<p>服务冗余的另一个关键部分是创建无共享架构 。通过这种架构，每个节点都能够相互独立运行，并且没有中央“大脑”来管理状态或协调其他节点的活动。这对可扩展性有很大帮助，因为可以在没有特殊条件或知识的情况下添加新节点。然而，最重要的是，这些系统中没有单点故障，因此它们对故障的弹性要强得多。</p>
<h4 id="_2-3-数据分区" tabindex="-1"><a class="header-anchor" href="#_2-3-数据分区"><span>2.3.数据分区</span></a></h4>
<p>可能存在非常大的数据集，无法容纳在单个服务器上。也可能是作需要过多的计算资源，从而降低性能并因此需要增加容量。无论哪种情况，您都有两种选择：垂直缩放或水平缩放。</p>
<ul>
<li>垂直扩展意味着向单个服务器添加更多资源。因此，对于非常大的数据集，这可能意味着添加更多（或更大）的硬盘驱动器，以便单个服务器可以包含整个数据集。在计算作的情况下，这可能意味着将计算移动到具有更快 <code v-pre>CPU</code> 或更多内存的更大服务器。在每种情况下，垂直扩展都是通过使单个资源能够自行处理更多资源来实现的。</li>
<li>水平扩展就是添加更多节点。对于大型数据集，这可能是存储部分数据集的第二台服务器，对于计算资源来说，这意味着将作或负载拆分到一些额外的节点上。为了充分利用水平扩展，它应该作为系统架构的内在设计原则包含在内，否则修改和分离上下文以实现这一点可能会非常麻烦。</li>
</ul>
<p><strong>垂直拓展需要钞能力</strong>，水平拓展太多门道了，常见的技术之一是将数据服务拆分为多个分区（<code v-pre>partitions</code>）或分片（<code v-pre>shards</code>）。这些分区可以进行分布式部署，使每一组逻辑功能相互独立；分区的划分可依据地理边界，也可采用其他标准，例如非付费用户与付费用户的区分。这类方案的优势在于，它们能为服务或数据存储提供额外的容量。</p>
<p>在我们的图像服务器示例中，可以用多台文件服务器替代用于存储图像的单台文件服务器，每台服务器都包含其独有的一组图像。这种架构能让系统在每台文件服务器中存储图像，当磁盘存满时，只需添加更多服务器即可。该设计需要一套命名机制，将图像的文件名与存储它的服务器关联起来。图像的名称可以通过在服务器间映射的一致性哈希算法生成。或者，也可以为每个图像分配一个递增的 <code v-pre>ID</code>，这样当客户端请求某一图像时，图像检索服务只需维护映射到每台服务器的 <code v-pre>ID</code> 范围（类似索引）即可。</p>
<p>当然，在多个服务器之间分发数据或功能存在挑战。关键问题之一是数据局部性，在分布式系统中，数据越接近作或计算点，系统的性能就越好。因此，将数据分布在多个服务器上可能会出现问题，因为任何时候需要它都可能不是本地的，<strong>分片导致的数据局部性迫使服务器通过网络执行所需信息的代价高昂的获取</strong>。</p>
<p>另一个潜在问题的形式是不一致 。当有不同的服务从共享资源（可能是另一个服务或数据存储）读取和写入时，可能会出现竞争条件，即 <strong>某些数据应该更新，但读取发生在更新之前，并且在这些情况下，数据不一致</strong>。例如，在图像托管方案中，如果一个客户端发送请求以使用新标题更新狗图像的信息，并且我们刁钻一些，狗图片的信息的修改需要同时更新一个表上的两个记录行，而由于分片会导致两个数据行处于不同服务器上的数据库，此时的修改需要在两个记录上保持事务，这个时候就会因为网络波动等问题导致事务卡死，这解决起来就麻烦里。此时读取会开始灵异起来了，完一没有回退，就会冲突，在一些需要协作处理图片的场景就会开始复杂起来。</p>
<figure><img src="@source/5.开发方向/8.架构开发/assets/imageHosting4-1753156699863-7.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<h4 id="_2-2-系统优化" tabindex="-1"><a class="header-anchor" href="#_2-2-系统优化"><span>2.2.系统优化</span></a></h4>
<p>前面的三个做法就是最基本的分布式核心要素，但是我们可以发现最为困难的其实是数据的处理，除了分区，我们还需要一些策略（实践中数据的访问速度如果只使用数据库分区会严重降低访问速度）。</p>
<h5 id="_2-2-1-负载均衡" tabindex="-1"><a class="header-anchor" href="#_2-2-1-负载均衡"><span>2.2.1.负载均衡</span></a></h5>
<p>任何分布式系统的另一个关键部分是负载均衡器。负载均衡器是任何架构的主要部分，因为它们的作用是在一组负责服务请求的节点之间分配负载。这允许多个节点透明地为系统中的同一功能提供服务。它们的主要目的是处理大量同时连接并将这些连接路由到其中一个请求节点，从而允许系统通过添加节点来扩展以服务更多请求。在分布式系统中，负载均衡器通常位于系统最前面，以便路由所有传入请求。</p>
<p>而如果需要用到多个负载均衡器，就需要应对一些问题。常见的挑战之一是管理特定于用户会话的数据（也就是对于有状态的后端服务器来说）。在电子商务网站中，当您只有一个客户时，很容易允许用户将商品放入购物车并在访问之间保留这些内容（这很重要，因为如果产品仍在用户的购物车中，您更有可能出售当他们返回时）。但是，如果用户在会话中被路由到一个节点，然后在下次访问时路由到另一个节点，则可能会出现不一致的情况，因为新节点可能缺少该用户的购物车内容。（如果你把 6 包激浪放在购物车里，然后回来却是空的，你不会不高兴吗？解决此问题的一种方法是使会话具有粘性，以便用户始终被路由到同一节点，但很难利用一些可靠性功能，例如自动故障转移。在这种情况下，用户的购物车将始终包含内容，但如果他们的粘性节点变得不可用，则需要有一个特殊情况，并且内容存在的假设将不再有效（尽管希望这个假设不会内置到应用程序中）。当然，这个问题可以使用本章中的其他策略和工具来解决，例如服务，以及许多未涵盖的策略和工具（例如浏览器缓存、cookie 和 URL 重写）。</p>
<p>当然，如果系统服务节点较少，并且负载均衡器相对昂贵的情况下，可以考虑使用循环 <code v-pre>DNS</code>。循环 <code v-pre>DNS（Round-Robin DNS，简称 RR DNS）</code> 是一种 <code v-pre>DNS</code> 负载均衡技术，通过在 <code v-pre>DNS</code> 服务器中为同一个域名配置多个 <code v-pre>IP</code> 地址，实现将客户端请求轮流分配到不同服务器的效果，从而分摊服务器负载、提高系统可用性。</p>
<p>如果在更大的系统中采用了多个负载均衡服务器，就有各种不同的调度和负载平衡算法，包括随机选择或循环等简单的算法，以及考虑利用率和容量等因素的更复杂的机制。所有这些算法都允许分配流量和请求，并且可以提供有用的可靠性工具，例如自动故障转移或自动删除坏节点（例如当它变得无响应时）。然而，这些高级功能可能会使问题诊断变得麻烦。例如，当涉及到高负载情况时，负载均衡器将删除可能缓慢或超时的节点（由于请求过多），但这只会加剧其他节点的情况。在这些情况下，广泛的监控很重要，因为整体系统流量和吞吐量可能看起来正在减少（因为节点处理的请求较少），但各个节点正在达到最大值。</p>
<figure><img src="@source/5.开发方向/8.架构开发/assets/multipleLoadBalancers-1753755037078-17.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<h5 id="_2-2-2-热点缓存" tabindex="-1"><a class="header-anchor" href="#_2-2-2-热点缓存"><span>2.2.2.热点缓存</span></a></h5>
<p>缓存利用引用的局部性原则：最近请求的数据可能会再次被请求。它们几乎用于计算的每一层：硬件、作系统、<code v-pre>Web</code> 浏览器、<code v-pre>Web</code> 应用程序等。缓存类似于短期内存：它的空间有限，但通常比原始数据源更快，并且包含最近访问的项目。缓存可以存在于架构中的所有级别，但通常位于最接近前端的级别，在那里它们被实现以快速返回数据，而不会对下游级别造成负担。</p>
<p>在我们的 <code v-pre>API</code> 示例中，如何使用缓存来加快数据访问速度？ 在这种情况下，您可以在几个地方插入缓存：</p>
<ul>
<li>请求节点的缓存（最快）</li>
<li>响应节点的缓存（较快）</li>
<li>缓存节点的缓存（挺快）</li>
</ul>
<p>当然就会有 <strong>如何提高多级缓存命中率的同时，避免因为复杂的更新策略导致效率低下</strong> 的问题。不过也有很多系统重点做一个地方的缓存，也就是专用的缓存节点，最为典型的实现就是使用 <code v-pre>Redis</code> 进行实现。这种实现我们一般称之为“全局缓存”，如果单机的全局缓存承担过重，就可以利用 <code v-pre>Redis</code> 的分布式拓展，把全局缓存提升为分布式缓存。当在缓存中找不到缓存的响应时，会从底层存储中检索丢失的数据片段。但是有两种实现方式，一种是全局缓存来检索丢失的数据，一种是请求节点来检索丢失的数据，实践中一般第一种实现方式比较多。</p>
<p>但是，在某些情况下，第二种实现更有意义。例如，如果缓存用于非常大的文件，则低缓存命中率将导致缓存缓冲区因缓存未命中而不堪重负。在这种情况下，在高速缓存中拥有总数据集（或热数据集）的很大一部分会有所帮助。另一个示例是存储在缓存中的文件是静态的，不应被逐出的体系结构。（这可能是因为应用程序对数据延迟的要求 - 对于大型数据集，某些数据片段可能需要非常快 - 其中应用程序逻辑比缓存更了解逐出策略或热点。</p>
<p>当单机的内存都无法满足需求时，就会诞生分布式缓存，它的每个节点都拥有缓存数据的一部分，因此，如果冰箱充当杂货店的缓存，那么分布式缓存就像将食物放在多个位置，冰箱、橱柜、午餐盒。方便从中取回零食的位置，而无需前往商店。通常，使用一致的哈希函数划分缓存，这样，如果请求节点正在寻找某条数据，它可以快速知道在分布式缓存中查找的位置，以确定该数据是否可用。在这种情况下，每个节点都有一小部分缓存，然后在转到源之前会向另一个节点发送数据请求。因此，分布式缓存的优点之一是只需将节点添加到请求池即可增加缓存空间。</p>
<p>分布式缓存的一个缺点是补救缺失的节点。一些分布式缓存通过在不同节点上存储多个数据副本来解决这个问题。但是，您可以想象此逻辑会很快变得复杂，尤其是在请求层中添加或删除节点时。尽管即使节点消失并且部分缓存丢失，请求也只会从源中提取，因此这不一定是灾难性的！缓存的伟大之处在于它们通常会使事情变得更快（当然，实现正确！您选择的方法只是允许您更快地处理更多请求）。然而，所有这些缓存都是以必须维护额外存储空间为代价的，通常以昂贵的内存的形式出现，没有什么是免费的。并且还有一个缓存被击穿时溯源压力过大的问题...</p>
<h5 id="_2-2-3-代理折叠" tabindex="-1"><a class="header-anchor" href="#_2-2-3-代理折叠"><span>2.2.3.代理折叠</span></a></h5>
<p>我们前面在提到服务分离的时候，如果不使用代理，就需要要求客户端存储一份服务器的列表，这会有许多问题（例如难以维护），应此就需要让众多客户端转发给同一个代理服务器，然后由代理服务器（依据负载均衡算法）来进行转发。通常，代理用于过滤请求、记录请求，有时或转换请求（通过添加/删除标头、加密/解密或压缩）。</p>
<p>不过我们还有一种值的优化的方法，想象一下，在多个节点上有一个对相同数据的请求，而该数据片段不在缓存中。如果该请求是通过代理路由的，那么所有这些请求都可以折叠为一个，这意味着我们只需要从磁盘上读取一次。此设计会产生一些成本，因为每个请求的延迟可能略高，并且某些请求可能会稍微延迟以与类似的请求分组。但它将提高高负载情况下的性能，尤其是当一遍又一遍地请求相同的数据时。这类似于缓存，但它不是像缓存那样存储数据/文档，而是优化这些文档的请求或调用，并充当这些客户端的代理。</p>
<p>值得注意的是，您可以同时使用代理和缓存，但一般最好将缓存放在代理前面，原因与在拥挤的马拉松比赛中最好让速度更快的跑步者首先开始一样（即使是重复读取缓存也比压缩快）。这是因为缓存从内存中提供数据，它非常快，并且不介意对同一结果进行多次请求。但是，如果缓存位于代理服务器的另一端，那么在缓存之前的每个请求都会有额外的延迟，这可能会影响性能。</p>
<figure><img src="@source/5.开发方向/8.架构开发/assets/collapseRequestsSpatial-1753753467095-5.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<h5 id="_2-2-2-多级索引" tabindex="-1"><a class="header-anchor" href="#_2-2-2-多级索引"><span>2.2.2.多级索引</span></a></h5>
<p>使用索引快速访问数据是优化数据访问性能的众所周知的策略，在数据库方面可能是最著名的。索引在增加存储开销和写入速度变慢之间进行权衡（因为您必须同时写入数据并更新索引），以获得更快的读取速度。</p>
<p>索引可以像目录一样使用，将您定向到数据所在的位置。例如，假设您正在寻找一条数据，即 <code v-pre>B</code> 的第 <code v-pre>2</code> 部分，您如何知道在哪里可以找到它？如果您有一个按数据类型排序的索引（例如数据 <code v-pre>A、B、C</code>），它会告诉您数据 <code v-pre>B</code> 在原点的位置。然后你只需要寻找那个位置并阅读你想要的 <code v-pre>B</code> 部分。这些索引通常存储在内存中（其实建立索引就是维护一可以键值对查询表，这和 <code v-pre>Redis</code> 等相似的需求，因此很多索引实现都会放在内存中实现），或者存储在传入客户端请求的本地位置。伯克利数据库 （<code v-pre>BDB</code>） 和树状数据结构通常用于将数据存储在有序列表中，非常适合使用索引进行访问。</p>
<p>通常有许多索引层充当地图，将您从一个位置移动到另一个位置，依此类推，直到您获得所需的特定数据。索引还可用于创建同一数据的多个不同视图。对于大型数据集，这是定义不同过滤器和排序的好方法，而无需创建许多额外的数据副本。</p>
<p>在大规模系统中（如托管 <code v-pre>1</code> 亿本书），单一索引会面临存储压力，此时就需要使用多级索引。为实现高效查询，系统可以采用 “<code v-pre>倒排索引（粗筛选） + 中间索引（细筛选）</code>” 的嵌套索引架构。倒排索引是顶层索引，以 “单词” 或 “单词元组”（如短语）为 <code v-pre>key</code>，<code v-pre>value</code> 为包含该文本的书籍列表。</p>
<table>
<thead>
<tr>
<th>文本（单词 / 短语）</th>
<th>包含的书籍</th>
</tr>
</thead>
<tbody>
<tr>
<td>being awesome</td>
<td>Book B、C、D</td>
</tr>
<tr>
<td>always</td>
<td>Book C、F</td>
</tr>
<tr>
<td>believe</td>
<td>Book B</td>
</tr>
</tbody>
</table>
<p>但是当书籍数量过多时，就会导致索引过大，因此倒排索引作用是快速缩小查询范围：用户输入关键词后，先通过倒排索引定位可能包含该内容的书籍，避免遍历所有书籍。仅记录 “关键词（或词组合）” 与 “包含该关键词的资源（如书籍）” 的对应关系，不包含资源内部的细节。再找到某本书籍后，就需要查询中间索引，中间索引只对某本书籍做细致的查询，比如记录 <code v-pre>believe</code> 在书中的具体位置（如第 <code v-pre>5</code> 页第 <code v-pre>3</code> 段）、出现次数（如 <code v-pre>2</code> 次）等。</p>
<figure><img src="@source/5.开发方向/8.架构开发/assets/indexes-1753753608093-8.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<figure><img src="@source/5.开发方向/8.架构开发/assets/multipleIndexes-1753753657332-11.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<h5 id="_2-2-5-任务队列" tabindex="-1"><a class="header-anchor" href="#_2-2-5-任务队列"><span>2.2.5.任务队列</span></a></h5>
<p>在更复杂的系统中，写入可能需要几乎非确定性的很长时间。例如，数据可能必须写入不同的服务器或索引上的多个位置，或者系统可能只是处于高负载之下。在写入或任何与此相关的任务可能需要很长时间的情况下，实现性能和可用性需要在系统中构建异步，一种常见的方法是使用任务队列。</p>
<p>想象一下一个系统，其中每个客户端都请求远程服务一项任务。这些客户端中的每一个都将其请求发送到服务器，服务器在服务器中尽快完成任务并将结果返回给各自的客户端。在小型系统中，一台服务器（或逻辑服务）可以像传入客户端一样快地为传入客户端提供服务，这种情况应该可以正常工作。但是，当服务器收到的请求多于其处理能力时，每个客户端都被迫等待其他客户端的请求完成，然后才能生成响应。这是同步请求的示例。</p>
<p>这种同步行为会严重降低客户端性能;客户端被迫等待，实际上执行零工作，直到其请求得到响应。添加额外的服务器来解决系统负载也不能解决问题;即使实施了有效的负载平衡，也很难确保平均和公平地分配工作，以最大限度地提高客户绩效。此外，如果处理请求的服务器不可用或失败，则上游的客户端也将失败。有效解决这个问题需要在客户端的请求和为服务它而执行的实际工作之间进行抽象。</p>
<p>一个任务进来，被添加到队列中，然后工作人员在有能力处理下一个任务时继续执行下一个任务。这些任务可以表示对数据库的简单写入，也可以像为文档生成缩略图预览图像这样复杂的事情。当客户端将任务请求提交到队列时，它们不再被迫等待结果;相反，他们只需要确认请求已正确收到。当客户需要时，这种确认可以作为工作结果的参考。</p>
<p>队列使客户端能够以异步方式工作，提供客户端请求及其响应的战略抽象。另一方面，在同步系统中，请求和回复之间没有区别，因此不能单独管理它们。在异步系统中，客户端请求任务，服务会以确认已收到任务的消息进行响应，然后客户端可以定期检查任务的状态，仅在任务完成后请求结果。当客户端等待异步请求完成时，它可以自由地执行其他工作，甚至可以对其他服务发出异步请求。后者是如何在分布式系统中利用队列和消息的一个示例。</p>
<p>队列还提供了一些针对服务中断和故障的保护。例如，创建高度健壮的队列非常容易，该队列可以重试由于暂时性服务器故障而失败的服务请求。使用队列来强制实施服务质量保证比直接将客户端暴露给间歇性服务中断更可取，这需要复杂且经常不一致的客户端错误处理。</p>
<figure><img src="@source/5.开发方向/8.架构开发/assets/synchronousRequest-1753755083362-20.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<figure><img src="@source/5.开发方向/8.架构开发/assets/queues.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="_3-实践项目" tabindex="-1"><a class="header-anchor" href="#_3-实践项目"><span>3.实践项目</span></a></h3>
<p>可以学习以下技术栈来学习分布架构项目。</p>
<ul>
<li>前端：<code v-pre>React.js + Antd UI</code> 或 <code v-pre>Vue.js + Antd UI</code></li>
<li>后端：<code v-pre>Java + Spring Boot</code></li>
<li>存储：<code v-pre>MySQL + Redis</code></li>
<li>中间：<code v-pre>Pulsar(消息队列) + Redissen(多级缓存) + HotKey(热点探测) + Sentinel(流量治理) + Satoken(用户鉴权)</code></li>
<li>通讯：<code v-pre>HTTP</code></li>
<li>配置：<code v-pre>Github + Spring Config</code></li>
<li>接口：<code v-pre>Swagger</code></li>
<li>网关：<code v-pre>Spring Gateway + Caddy</code></li>
<li>日志：<code v-pre>SLF4J + Logback</code></li>
<li>指标：<code v-pre>JPS + FlameGraph + Druid</code></li>
<li>部署：<code v-pre>Docker + Docker Compose + Jenkins + Gitea</code></li>
</ul>
<h3 id="_4-深入理论" tabindex="-1"><a class="header-anchor" href="#_4-深入理论"><span>4.深入理论</span></a></h3>
<h2 id="" tabindex="-1"><a class="header-anchor" href="#"><span></span></a></h2>
<div class="hint-container important">
<p class="hint-container-title">重要</p>
<p>补充：本文参考 <a href="https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E7%B3%BB%E7%BB%9F%E8%AE%BE%E8%AE%A1%E5%85%A5%E9%97%A8" target="_blank" rel="noopener noreferrer">这个项目博文</a>，这里不仅仅是关于分布式，还有一些系统设计的常见知识。这里我读的不是特别细，感觉差不多都学习过，感觉可以直接集成到入门中...</p>
</div>
<h4 id="_1-性能和可拓的关系" tabindex="-1"><a class="header-anchor" href="#_1-性能和可拓的关系"><span>1.性能和可拓的关系</span></a></h4>
<p>如果服务 <strong>性能</strong> 的增长与资源的增加是成比例的，服务就是可扩展的。通常，提高性能意味着服务于更多的工作单元，另一方面，当数据集增长时，同样也可以处理更大的工作单位。</p>
<p>另一个角度来看待性能与可扩展:</p>
<ul>
<li>如果你的系统有 <strong>性能</strong> 问题，对于单个用户来说是缓慢的</li>
<li>如果你的系统有 <strong>可扩</strong> 问题，单个用户较快但在高负载下会变慢</li>
</ul>
<p>上面让我们明确了关系，并且也揭示了区别。</p>
<h4 id="_2-延迟与吞吐的关系" tabindex="-1"><a class="header-anchor" href="#_2-延迟与吞吐的关系"><span>2.延迟与吞吐的关系</span></a></h4>
<ul>
<li><strong>延迟</strong> 是执行操作或运算结果所花费的时间</li>
<li><strong>吞吐</strong> 是单位时间内（执行）此类操作或运算的数量</li>
</ul>
<p>通常，你应该以 <strong>可接受级延迟</strong> 下 <strong>最大化吞吐量</strong> 为目标。</p>
<h4 id="_3-不同的一致性模式" tabindex="-1"><a class="header-anchor" href="#_3-不同的一致性模式"><span>3.不同的一致性模式</span></a></h4>
<ul>
<li><strong>弱一致性</strong>：在写入之后，访问可能看到，也可能看不到（写入数据）。尽力优化之让其能访问最新数据。这种方式可以 <code v-pre>memcached</code> 等系统中看到。弱一致性在 <code v-pre>VoIP</code>，视频聊天和实时多人游戏等真实用例中表现不错。打个比方，如果你在通话中丢失信号几秒钟时间，当重新连接时你是听不到这几秒钟所说的话的。</li>
<li><strong>最终一致性</strong>：在写入后，访问最终能看到写入数据（通常在数毫秒内）。数据被异步复制。<code v-pre>DNS</code> 和 <code v-pre>email</code> 等系统使用的是此种方式。最终一致性在高可用性系统中效果不错。</li>
<li><strong>强一致性</strong>：在写入后，访问立即可见。数据被同步复制。文件系统和关系型数据库（<code v-pre>RDBMS</code>）中使用的是此种方式。强一致性在需要记录的系统中运作良好。</li>
</ul>
<h4 id="_4-不同的可用性模式" tabindex="-1"><a class="header-anchor" href="#_4-不同的可用性模式"><span>4.不同的可用性模式</span></a></h4>
<ul>
<li><strong>故障切换</strong>：故障切换需要添加额外硬件并增加复杂性，如果新写入数据在能被复制到备用系统之前，工作系统出现了故障，则有可能会丢失数据。
<ul>
<li><strong>工作到备用切换（Active-passive）</strong>：关于工作到备用的故障切换流程是，工作服务器发送周期信号给待机中的备用服务器。如果周期信号中断，备用服务器切换成工作服务器的 <code v-pre>IP</code> 地址并恢复服务。宕机时间取决于备用服务器处于“热”待机状态还是需要从“冷”待机状态进行启动。只有工作服务器处理流量。工作到备用的故障切换也被称为主从切换。</li>
<li><strong>双工作切换（Active-active）</strong>：在双工作切换中，双方都在管控流量，在它们之间分散负载。这样哪怕一个节点挂掉仍然有一个节点一直在保持工作（无需交接切换问题，把故障节点的任务全盘接受就可以）。如果是外网服务器，<code v-pre>DNS</code> 将需要对两方都了解。如果是内网服务器，应用程序逻辑将需要对两方都了解。双工作切换也可以称为主主切换。</li>
</ul>
</li>
<li><strong>节点复制</strong>：<strong>主 ─ 从复制</strong> 和 <strong>主 ─ 主复制</strong></li>
</ul>
<h4 id="_5-内容分发网络-cdn" tabindex="-1"><a class="header-anchor" href="#_5-内容分发网络-cdn"><span>5.内容分发网络 CDN</span></a></h4>
<p>内容分发网络（<code v-pre>CDN</code>）是一个全球性的代理服务器分布式网络，它从靠近用户的位置提供内容。通常，<code v-pre>HTML/CSS/JS，图片和视频等静态内容</code> 由 <code v-pre>CDN</code> 提供，虽然亚马逊 <code v-pre>CloudFront</code> 等也支持动态内容。<code v-pre>CDN</code> 的 <code v-pre>DNS</code> 解析会告知客户端连接哪台服务器。</p>
<p>将内容存储在 <code v-pre>CDN</code> 上可以从两个方面来提供性能:</p>
<ul>
<li>从靠近用户的数据中心提供资源，更加快速</li>
<li>通过 <code v-pre>CDN</code>，你的服务器不必真的处理请求</li>
</ul>
<p><code v-pre>CDN</code> 有两个重要的动作：</p>
<ul>
<li><code v-pre>CDN</code> 推送（<code v-pre>push</code>）：当你服务器上内容发生变动时，推送 <code v-pre>CDN</code> 接受新内容。直接推送给 <code v-pre>CDN</code> 并重写 <code v-pre>URL</code> 地址以指向你的内容的 <code v-pre>CDN</code> 地址。你可以配置内容到期时间及何时更新。内容只有在更改或新增是才推送，流量最小化，但储存最大化。</li>
<li><code v-pre>CDN</code> 拉取（<code v-pre>pull</code>）：CDN 拉取模式的关键是只有在第一个用户请求该资源时，才从服务器上拉取资源。你将内容留在自己的服务器上并重写 <code v-pre>URL</code> 指向 <code v-pre>CDN</code> 地址。直到内容被缓存在 <code v-pre>CDN</code> 上为止，对于第一个用户来说，第一次请求只会更慢（但是访问量越来越多的时候就会快很多），存储最小化，但流量最大化。</li>
</ul>
<p>高流量站点使用 <code v-pre>CDN</code> 拉取效果不错，因为只有最近请求的内容保存在 <code v-pre>CDN</code> 中，流量才能更平衡地分散。但是需要注意：</p>
<ul>
<li><code v-pre>CDN</code> 成本可能因流量而异，可能在权衡之后你将不会使用 <code v-pre>CDN</code></li>
<li>如果在 <code v-pre>TTL</code> 过期之前更新内容，<code v-pre>CDN</code> 缓存内容可能会过时</li>
<li><code v-pre>CDN</code> 需要更改静态内容的 <code v-pre>URL</code> 地址以指向 <code v-pre>CDN</code></li>
</ul>
<h4 id="_6-数据库存储" tabindex="-1"><a class="header-anchor" href="#_6-数据库存储"><span>6.数据库存储</span></a></h4>
<p>和 <code v-pre>Redis</code> 集群类似，很多集群的实现方案都是利用主从机制的。主库同时负责读取和写入操作，并复制写入到一个或多个从库中，从库只负责读操作。树状形式的从库再将写入复制到更多的从库中去。如果主库离线，系统可以以只读模式运行，直到某个从库被提升为主库或有新的主库出现。但注意，将从库提升为主库需要额外的逻辑。</p>
<p>也可以选择两个主库都负责读操作和写操作，写入操作时互相协调。如果其中一个主库挂机，系统可以继续读取和写入。主主复制需要添加负载均衡器或者在应用逻辑中做改动，来确定写入哪一个数据库。多数主-主系统要么不能保证一致性（违反 ACID），要么因为同步产生了写入延迟。随着更多写入节点的加入和延迟的提高，如何解决冲突显得越发重要。</p>
<p>或者采用联合的方案（或按功能划分）将数据库按对应功能分割。例如，你可以有三个数据库：<strong>论坛</strong>、<strong>用户</strong> 和 <strong>产品</strong>，而不仅是一个单体数据库，从而减少每个数据库的读取和写入流量，减少复制延迟。较小的数据库意味着更多适合放入内存的数据，进而意味着更高的缓存命中几率。没有只能串行写入的中心化主库，你可以并行写入，提高负载能力。但是这种实现也有很多复杂的地方，如果你的数据库模式需要大量的功能和数据表，联合的效率并不好。你需要更新应用程序的逻辑来确定要读取和写入哪个数据库。用 <a href="http://stackoverflow.com/questions/5145637/querying-data-by-joining-two-tables-in-two-database-on-different-servers" target="_blank" rel="noopener noreferrer">server link</a> 从两个库联结数据更复杂，联合需要更多的硬件和额外的复杂度。</p>
<p>而分片策略将数据分配在不同的数据库上，使得每个数据库仅管理整个数据集的一个子集。以用户数据库为例，随着用户数量的增加，越来越多的分片会被添加到集群中。</p>
<p>类似联合的优点，分片可以减少读取和写入流量，减少复制并提高缓存命中率。也减少了索引，通常意味着查询更快，性能更好。如果一个分片出问题，其他的仍能运行，你可以使用某种形式的冗余来防止数据丢失。类似联合，没有只能串行写入的中心化主库，你可以并行写入，提高负载能力。常见的做法是用户姓氏的首字母或者用户的地理位置来分隔用户表。但是，你需要修改应用程序的逻辑来实现分片，这会带来复杂的 SQL 查询。分片不合理可能导致数据负载不均衡。例如，被频繁访问的用户数据会导致其所在分片的负载相对其他分片高。再平衡会引入额外的复杂度。基于 <a href="http://www.paperplanes.de/2011/12/9/the-magic-of-consistent-hashing.html" target="_blank" rel="noopener noreferrer">一致性哈希</a> 的分片算法可以减少这种情况。联结多个分片的数据操作更复杂。分片需要更多的硬件和额外的复杂度。</p>
<div class="hint-container important">
<p class="hint-container-title">重要</p>
<p>补充：<code v-pre>SQL</code> 调优也是一个经典的主题。</p>
<ul>
<li><strong>基准测试</strong> - 用 <a href="http://httpd.apache.org/docs/2.2/programs/ab.html" target="_blank" rel="noopener noreferrer">ab</a> 等工具模拟高负载情况。</li>
<li><strong>性能分析</strong> - 通过启用如 <a href="http://dev.mysql.com/doc/refman/5.7/en/slow-query-log.html" target="_blank" rel="noopener noreferrer">慢查询日志</a> 等工具来辅助追踪性能问题。</li>
</ul>
</div>
<h4 id="_7-负载均衡器" tabindex="-1"><a class="header-anchor" href="#_7-负载均衡器"><span>7.负载均衡器</span></a></h4>
<p>负载均衡器将传入的请求分发到应用服务器和数据库等计算资源。无论哪种情况，负载均衡器将从计算资源来的响应返回给恰当的客户端。负载均衡器的效用在于:</p>
<ul>
<li>防止请求进入不好的服务器</li>
<li>防止资源过载</li>
<li>帮助消除单一的故障点</li>
<li><code v-pre>SSL 终结</code>，解密传入的请求并加密服务器响应，这样的话后端服务器就不必再执行这些潜在高消耗运算了。不需要再每台服务器上安装 <a href="https://en.wikipedia.org/wiki/X.509" target="_blank" rel="noopener noreferrer">X.509 证书</a>。</li>
<li><code v-pre>Session 留存</code>：如果 <code v-pre>Web</code> 应用程序不追踪会话，发出 <code v-pre>cookie</code> 并将特定客户端的请求路由到同一实例。</li>
</ul>
<p>通常会设置采用 <a href="https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E5%B7%A5%E4%BD%9C%E5%88%B0%E5%A4%87%E7%94%A8%E5%88%87%E6%8D%A2active-passive" target="_blank" rel="noopener noreferrer">工作 ─ 备用</a> 或 <a href="https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E5%8F%8C%E5%B7%A5%E4%BD%9C%E5%88%87%E6%8D%A2active-active" target="_blank" rel="noopener noreferrer">双工作</a> 模式的多个负载均衡器，以免发生故障。负载均衡器能基于多种方式来路由流量：</p>
<ul>
<li>随机机制：负载均衡器随机选择一台后端服务器处理当前请求，实现简单，无需维护复杂的状态信息。</li>
<li>最少负载机制：负载均衡器优先选择当前连接数最少的后端服务器处理请求，需额外开销监控服务器状态，实现稍复杂。</li>
<li><code v-pre>Session/cookie</code> 会话保持机制：确保同一用户的多次请求被转发到同一台后端服务器，以维持会话状态，可能导致部分服务器因绑定用户会话而负载过高。</li>
<li><a href="http://g33kinfo.com/info/archives/2657" target="_blank" rel="noopener noreferrer">轮询调度或加权轮询调度算法</a>：按顺序依次将请求分配给后端服务器（如服务器 A→B→C→A→B→C...），简单公平，适用于所有服务器性能相同的场景。</li>
<li><a href="https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E5%9B%9B%E5%B1%82%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1" target="_blank" rel="noopener noreferrer">四层负载均衡</a>：工作在 OSI 网络模型的 <strong>传输层（第四层）</strong>，基于 <code v-pre>IP</code> 地址和端口号进行请求转发，转发速度快（仅处理底层协议，无需解析应用层数据），以损失灵活性为代价，四层负载均衡比七层负载均衡花费更少时间和计算资源，虽然这对现代商用硬件的性能影响甚微。</li>
<li><a href="https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E4%B8%83%E5%B1%82%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1" target="_blank" rel="noopener noreferrer">七层负载均衡</a>：工作在 OSI 网络模型的 <strong>应用层（第七层）</strong>，基于应用层协议内容（如 HTTP/HTTPS）进行请求转发，灵活性高，可实现复杂的路由策略。</li>
</ul>
<p>如果没有足够的资源配置或配置错误，负载均衡器会变成一个性能瓶颈。引入负载均衡器以帮助消除单点故障但导致了额外的复杂性。单个负载均衡器会导致单点故障，但配置多个负载均衡器会进一步增加复杂性。</p>
<h4 id="_8-更多级缓存" tabindex="-1"><a class="header-anchor" href="#_8-更多级缓存"><span>8.更多级缓存</span></a></h4>
<ul>
<li><strong>客户端缓存</strong>：缓存可以位于客户端（操作系统或者浏览器），服务端或者不同的缓存层。</li>
<li><strong>CDN 缓存</strong>：<code v-pre>CDN</code> 也被视为一种缓存。</li>
<li><strong>Web 服务器缓存</strong>：反向代理和缓存（比如 <code v-pre>Varnish</code>）可以直接提供静态和动态内容。<code v-pre>Web</code> 服务器同样也可以缓存请求，返回相应结果而不必连接应用服务器。</li>
<li><strong>数据库缓存</strong>：数据库的默认配置中通常包含缓存级别，针对一般用例进行了优化。调整配置，在不同情况下使用不同的模式可以进一步提高性能。</li>
<li><strong>应用缓存</strong>：基于内存的缓存比如 <code v-pre>Memcached</code> 和 <code v-pre>Redis</code> 是应用程序和数据存储之间的一种键值存储。由于数据保存在 <code v-pre>RAM</code> 中，它比存储在磁盘上的典型数据库要快多了。<code v-pre>RAM</code> 比磁盘限制更多，所以例如 <code v-pre>least recently used (LRU)</code> 的缓存无效算法可以将「热门数据」放在 <code v-pre>RAM</code> 中，而对一些比较「冷门」的数据不做处理。</li>
</ul>
<div class="hint-container important">
<p class="hint-container-title">重要</p>
<p>补充：有多个缓存级别，分为两大类：数据库查询和对象。</p>
<ul>
<li>行级别</li>
<li>查询级别</li>
<li>完整的可序列化对象</li>
<li>完全渲染的 <code v-pre>HTML</code></li>
</ul>
<p>一般来说，你应该尽量避免基于文件的缓存，因为这使得复制和自动缩放很困难。<strong>根据 “计算 / IO 成本” 和 “更新频率” 选择粒度</strong>，也就是说成本越高、更新越慢的内容，越适合缓存。</p>
</div>
<p>而何时做缓存就非常有学问了，有几种模式供您参考：</p>
<ul>
<li>缓存模式：第一次查询直接访问数据库，但是查询次数多时同步一部分数据在缓存中，此时先查看缓存中是否有结果再决定是否查询数据库。</li>
<li>直写模式：写入到缓存中后立刻返回用户消息，等待后续数据库自动同步数据。</li>
<li>回写模式：是直写模式的加强版，在缓存中写入数据后立刻响应用户，然后缓存利用消息队列插入写入任务，利用异步来提高写入性能。</li>
<li>刷新模式：是缓存模式的补充，数据库可以主动按照某些策略（比如定时任务），主动刷新数据到缓存中（不过如果不能准确预测到未来需要用到的数据可能会导致性能不如不使用刷新）。</li>
</ul>
<p>无效缓存是个难题，什么时候更新缓存是与之相关的复杂问题。</p>
<h4 id="_9-异步型设计" tabindex="-1"><a class="header-anchor" href="#_9-异步型设计"><span>9.异步型设计</span></a></h4>
<p>消息队列接收，保留和传递消息。如果按顺序执行操作太慢的话，你可以使用有以下工作流的消息队列：</p>
<ul>
<li>应用程序将作业发布到队列，然后通知用户作业状态</li>
<li>一个 <code v-pre>worker</code> 从队列中取出该作业，对其进行处理，然后显示该作业完成</li>
</ul>
<p>不去阻塞用户操作，作业在后台处理。在此期间，客户端可能会进行一些处理使得看上去像是任务已经完成了。例如，如果要发送一条推文，推文可能会马上出现在你的时间线上，但是可能需要一些时间才能将你的推文推送到你的所有关注者那里去。</p>
<p>如果队列开始明显增长，那么队列大小可能会超过内存大小，导致高速缓存未命中，磁盘读取，甚至性能更慢。<a href="http://mechanical-sympathy.blogspot.com/2012/05/apply-back-pressure-when-overloaded.html" target="_blank" rel="noopener noreferrer">背压</a> 可以通过限制队列大小来帮助我们，从而为队列中的作业保持高吞吐率和良好的响应时间。一旦队列填满，客户端将得到服务器忙或者 <code v-pre>HTTP 503</code> 状态码，以便稍后重试。客户端可以在稍后时间重试该请求，也许是 <a href="https://en.wikipedia.org/wiki/Exponential_backoff" target="_blank" rel="noopener noreferrer">指数退避</a>。</p>
<h4 id="_10-cap-理论" tabindex="-1"><a class="header-anchor" href="#_10-cap-理论"><span>10.CAP 理论</span></a></h4>
<p>在一个分布式计算系统中，只能同时满足下列的两点:</p>
<ul>
<li><strong>一致性（Consistency）</strong>：每次访问都能获得最新数据但可能会收到错误响应</li>
<li><strong>可用性（Availability）</strong>：每次访问都能收到非错响应，但不保证获取到最新数据</li>
<li><strong>分区容错性（Partition Tolerance）</strong>：在任意分区网络故障的情况下系统仍能继续运行</li>
</ul>
<p>网络并不可靠，所以你应要支持分区容错性（这是核心需要），并需要在软件可用性和一致性间做出取舍。因此，<strong>分布式系统必须满足 P</strong>，问题简化为：在 <code v-pre>P</code> 必然存在的前提下，<code v-pre>C</code> 和 <code v-pre>A</code> 能否同时满足？假设一个分布式系统有节点 <code v-pre>A</code> 和节点 <code v-pre>B</code>，初始时数据一致（都存储值 <code v-pre>V0</code>）。此时网络分区发生，<code v-pre>A</code> 和 <code v-pre>B</code> 无法通信：</p>
<ul>
<li><strong>若要保证一致性（C）</strong>：当客户端向 <code v-pre>A</code> 写入新数据 <code v-pre>V1</code> 后，<code v-pre>A</code> 需要将 <code v-pre>V1</code> 同步给 <code v-pre>B</code> 才能保证所有节点数据一致（满足一致性）。但因分区，<code v-pre>A</code> 无法同步给 <code v-pre>B</code>（无法同步而已，但是总系统可以对两者通信）。此时，为了避免 <code v-pre>B</code> 返回旧数据（<code v-pre>V0</code>）破坏一致性，系统必须 <strong>拒绝客户端对 B 的读请求</strong>（返回错误或超时），否则 B 会返回不一致的数据。但这就牺牲了 “可用性”（<code v-pre>B</code> 节点无法响应请求）。</li>
<li><strong>若要保证可用性（A）</strong>：当分区发生时，为了让 <code v-pre>A</code> 和 <code v-pre>B</code> 都能响应请求（满足可用性），<code v-pre>A</code> 会接受写入 <code v-pre>V1</code>，<code v-pre>B</code> 会继续用旧数据 <code v-pre>V0</code> 响应读请求。此时客户端从 <code v-pre>A</code> 读到 <code v-pre>V1</code>，从 <code v-pre>B</code> 读到 <code v-pre>V0</code>，<strong>数据不一致</strong>，即牺牲了 “一致性”。</li>
</ul>
<p>因此三者是无法同时实现的，最终就会诞生两种分布式架构：</p>
<ul>
<li><code v-pre>CP</code>：等待分区节点的响应可能会导致延时错误。如果你的业务需求需要原子读写，<code v-pre>CP</code> 是一个不错的选择。</li>
<li><code v-pre>AP</code>：响应节点上可用数据的最近版本可能并不是最新的。当分区解析完后，写入（操作）可能需要一些时间来传播。如果业务需求允许 <a href="https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E6%9C%80%E7%BB%88%E4%B8%80%E8%87%B4%E6%80%A7" target="_blank" rel="noopener noreferrer">最终一致性</a>，或当有外部故障时要求系统继续运行，<code v-pre>AP</code> 是一个不错的选择。</li>
</ul>
<h4 id="_11-flp-理论" tabindex="-1"><a class="header-anchor" href="#_11-flp-理论"><span>11.FLP 理论</span></a></h4>
<p>为了达成一致性时，某些情况下需要让多个工作节点投票达成共识。但是在异步环境中，如果节点间的网络延迟没有上限，只要有一个恶意的节点存在，就没有算法能在有限的时间内达成共识（这是因为无法区分 “消息延迟” 和 “恶意行为”，涉及到拜占庭问题，会让诚实节点无法在有限时间内确定 “其他节点的真实状态”），这就是 <code v-pre>FLP</code> 理论。</p>
<div class="hint-container important">
<p class="hint-container-title">重要</p>
<p>补充：拜占庭将军问题（<code v-pre>Byzantine Generals Problem</code>）。这个问题是莱斯利·兰波特（<code v-pre>Leslie Lamport</code>）于 <code v-pre>1982</code> 年提出用来解释一致性问题的一个虚构模型（论文地址）。拜占庭是古代东罗马帝国的首都，由于地域宽广，守卫边境的多个将军（系统中的多个节点）需要通过信使来传递消息，达成某些一致的决定。但由于将军中可能存在叛徒（系统中节点出错），这些叛徒将努力向不同的将军发送不同的消息，试图会干扰一致性的达成。拜占庭问题即为在此情况下，如何让忠诚的将军们能达成行动的一致。</p>
</div>
<p>解决的常见方法就是 <code v-pre>Las Vegas algorithms</code>（这个算法又叫撞大运算法，其保证结果正确，只是在运算时所用资源上进行赌博，一个简单的例子是随机快速排序，它的 <code v-pre>pivot, 基准值</code> 是随机选的，但排序结果永远一致，也就是那句“在绝对随机情况下，次数越多，成功概率越高”）在每一轮皆有一定机率达成共识，随着时间增加，机率会越趋近于 <code v-pre>1</code>。而这也是许多成功的共识算法会采用的解决问题的办法。</p>
<ul>
<li>（下达可信的规定区间）在每轮共识中，节点可以 <strong>随机选择一个等待时间窗口</strong>（而非固定时长）。恶意节点即使试图通过延迟消息干扰，也无法精准预测诚实节点的等待窗口 —— 随着轮次增加，诚实节点恰好避开干扰、收集到足够多正确信息的概率会越来越高。</li>
<li>（信任更加信任的节点）再如，节点可以 <strong>随机选择提议值</strong>（而非固定逻辑生成）。即使部分节点故障，随机选择能让诚实节点的提议在统计上更可能形成多数，从而在某一轮中意外达成共识。</li>
</ul>
<p>简单说，随机性让恶意节点的 “针对性干扰” 失效，而 “多次尝试” 则通过概率累积，最终让诚实节点突破 “不可区分性” 的僵局，达成正确共识。</p>
<h4 id="_12-dls-理论" tabindex="-1"><a class="header-anchor" href="#_12-dls-理论"><span>12.DLS 理论</span></a></h4>
<p>容错的上限，<a href="https://groups.csail.mit.edu/tds/papers/Lynch/jacm88.pdf" target="_blank" rel="noopener noreferrer">从 DLS 论文 中</a> 我们可以得到以下结论：在部分同步（<code v-pre>partially synchronous</code>）的网络环境中（即网络延迟有一定的上限，但我们无法事先知道上限是多少），协议可以容忍最多 <code v-pre>1/3</code> 的拜占庭故障（<code v-pre>Byzantine fault</code>）。</p>
<div class="hint-container important">
<p class="hint-container-title">重要</p>
<p>补充：拜占庭故障（<code v-pre>Byzantine Fault</code>）是分布式系统中最严重的一类节点故障，指节点（如服务器、进程等）出现 <strong>任意行为</strong> 的故障，包括恶意欺骗、篡改消息、故意发送错误信息、不响应或伪造数据等，甚至可以合谋干扰系统共识。</p>
</div>
<ul>
<li>在异步（<code v-pre>asynchronous</code>）的网络环境中，具有确定性质的协议无法容忍任何错误，但这篇论文并没有提及 <code v-pre>randomized algorithms</code>，在这种情况下可以容忍最多 <code v-pre>1/3</code> 的拜占庭故障。</li>
<li>在同步（synchronous）网络环境中（即网络延迟有上限且上限是已知的），协议可以容忍 <code v-pre>100%</code> 的拜占庭故障，但当超过 <code v-pre>1/2</code> 的节点为恶意节点时，会有一些限制条件。要注意的是，我们考虑的是 &quot;具有认证特性的拜占庭模型（<code v-pre>authenticated Byzantine</code>）“，而不是&quot; 一般的拜占庭模型”（具有认证特性指的是将如今已经过大量研究且成本低廉的公私钥加密机制应用在我们的算法中）。</li>
</ul>
<h4 id="_13-荒谬的-8-假设" tabindex="-1"><a class="header-anchor" href="#_13-荒谬的-8-假设"><span>13.荒谬的 8 假设</span></a></h4>
<ul>
<li>网络是稳定的</li>
<li>网络传输的延迟是零</li>
<li>网络的带宽是无穷大</li>
<li>网络是安全的</li>
<li>网络的拓扑不会改变</li>
<li>只有一个系统管理员</li>
<li>传输数据的成本为零</li>
<li>整个网络是同构的（同构是指“节点之间结构类似”）</li>
</ul>
<p>为什么需要理解这 <code v-pre>8</code> 个错误？<a href="http://www.rgoarchitects.com/Files/fallacies.pdf" target="_blank" rel="noopener noreferrer">看这篇</a> 就可以得知。</p>
<h4 id="_14-其他补充" tabindex="-1"><a class="header-anchor" href="#_14-其他补充"><span>14.其他补充</span></a></h4>
<p>一些图书 https://time.geekbang.org/column/article/10604</p>
<p>实践过程 https://time.geekbang.org/column/article/11232</p>
<p>真实架构</p>
<p><a href="https://github.com/donnemartin/system-design-primer/blob/master/images/TcUo2fw.png" target="_blank" rel="noopener noreferrer"><img src="@source/5.开发方向/8.架构开发/assets/TcUo2fw.png" alt="img" loading="lazy"></a>
<strong><a href="https://www.infoq.com/presentations/Twitter-Timeline-Scalability" target="_blank" rel="noopener noreferrer">Source: Twitter timelines at scale</a></strong></p>
<p><strong>不要专注于以下文章的细节，专注于以下方面：</strong></p>
<ul>
<li>发现这些文章中的共同的原则、技术和模式。</li>
<li>学习每个组件解决哪些问题，什么情况下使用，什么情况下不适用</li>
<li>复习学过的文章</li>
</ul>
<table>
<thead>
<tr>
<th>类型</th>
<th>系统</th>
<th>引用</th>
</tr>
</thead>
<tbody>
<tr>
<td>Data processing</td>
<td><strong>MapReduce</strong> - Google 的分布式数据处理</td>
<td><a href="http://static.googleusercontent.com/media/research.google.com/zh-CN/us/archive/mapreduce-osdi04.pdf" target="_blank" rel="noopener noreferrer">research.google.com</a></td>
</tr>
<tr>
<td>Data processing</td>
<td><strong>Spark</strong> - Databricks 的分布式数据处理</td>
<td><a href="http://www.slideshare.net/AGrishchenko/apache-spark-architecture" target="_blank" rel="noopener noreferrer">slideshare.net</a></td>
</tr>
<tr>
<td>Data processing</td>
<td><strong>Storm</strong> - Twitter 的分布式数据处理</td>
<td><a href="http://www.slideshare.net/previa/storm-16094009" target="_blank" rel="noopener noreferrer">slideshare.net</a></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Data store</td>
<td><strong>Bigtable</strong> - Google 的列式数据库</td>
<td><a href="http://www.read.seas.harvard.edu/~kohler/class/cs239-w08/chang06bigtable.pdf" target="_blank" rel="noopener noreferrer">harvard.edu</a></td>
</tr>
<tr>
<td>Data store</td>
<td><strong>HBase</strong> - Bigtable 的开源实现</td>
<td><a href="http://www.slideshare.net/alexbaranau/intro-to-hbase" target="_blank" rel="noopener noreferrer">slideshare.net</a></td>
</tr>
<tr>
<td>Data store</td>
<td><strong>Cassandra</strong> - Facebook 的列式数据库</td>
<td><a href="http://www.slideshare.net/planetcassandra/cassandra-introduction-features-30103666" target="_blank" rel="noopener noreferrer">slideshare.net</a></td>
</tr>
<tr>
<td>Data store</td>
<td><strong>DynamoDB</strong> - Amazon 的文档数据库</td>
<td><a href="http://www.read.seas.harvard.edu/~kohler/class/cs239-w08/decandia07dynamo.pdf" target="_blank" rel="noopener noreferrer">harvard.edu</a></td>
</tr>
<tr>
<td>Data store</td>
<td><strong>MongoDB</strong> - 文档数据库</td>
<td><a href="http://www.slideshare.net/mdirolf/introduction-to-mongodb" target="_blank" rel="noopener noreferrer">slideshare.net</a></td>
</tr>
<tr>
<td>Data store</td>
<td><strong>Spanner</strong> - Google 的全球分布数据库</td>
<td><a href="http://research.google.com/archive/spanner-osdi2012.pdf" target="_blank" rel="noopener noreferrer">research.google.com</a></td>
</tr>
<tr>
<td>Data store</td>
<td><strong>Memcached</strong> - 分布式内存缓存系统</td>
<td><a href="http://www.slideshare.net/oemebamo/introduction-to-memcached" target="_blank" rel="noopener noreferrer">slideshare.net</a></td>
</tr>
<tr>
<td>Data store</td>
<td><strong>Redis</strong> - 能够持久化及具有值类型的分布式内存缓存系统</td>
<td><a href="http://www.slideshare.net/dvirsky/introduction-to-redis" target="_blank" rel="noopener noreferrer">slideshare.net</a></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>File system</td>
<td><strong>Google File System (GFS)</strong> - 分布式文件系统</td>
<td><a href="http://static.googleusercontent.com/media/research.google.com/zh-CN/us/archive/gfs-sosp2003.pdf" target="_blank" rel="noopener noreferrer">research.google.com</a></td>
</tr>
<tr>
<td>File system</td>
<td><strong>Hadoop File System (HDFS)</strong> - GFS 的开源实现</td>
<td><a href="https://hadoop.apache.org/docs/r1.2.1/hdfs_design.html" target="_blank" rel="noopener noreferrer">apache.org</a></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Misc</td>
<td><strong>Chubby</strong> - Google 的分布式系统的低耦合锁服务</td>
<td><a href="http://static.googleusercontent.com/external_content/untrusted_dlcp/research.google.com/en/us/archive/chubby-osdi06.pdf" target="_blank" rel="noopener noreferrer">research.google.com</a></td>
</tr>
<tr>
<td>Misc</td>
<td><strong>Dapper</strong> - 分布式系统跟踪基础设施</td>
<td><a href="http://static.googleusercontent.com/media/research.google.com/en//pubs/archive/36356.pdf" target="_blank" rel="noopener noreferrer">research.google.com</a></td>
</tr>
<tr>
<td>Misc</td>
<td><strong>Kafka</strong> - LinkedIn 的发布订阅消息系统</td>
<td><a href="http://www.slideshare.net/mumrah/kafka-talk-tri-hug" target="_blank" rel="noopener noreferrer">slideshare.net</a></td>
</tr>
<tr>
<td>Misc</td>
<td><strong>Zookeeper</strong> - 集中的基础架构和协调服务</td>
<td><a href="http://www.slideshare.net/sauravhaloi/introduction-to-apache-zookeeper" target="_blank" rel="noopener noreferrer">slideshare.net</a></td>
</tr>
<tr>
<td></td>
<td>添加更多</td>
<td><a href="https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E8%B4%A1%E7%8C%AE" target="_blank" rel="noopener noreferrer">贡献</a></td>
</tr>
</tbody>
</table>
<h5 id="公司的系统架构" tabindex="-1"><a class="header-anchor" href="#公司的系统架构"><span>公司的系统架构</span></a></h5>
<table>
<thead>
<tr>
<th>Company</th>
<th>Reference(s)</th>
</tr>
</thead>
<tbody>
<tr>
<td>Amazon</td>
<td><a href="http://highscalability.com/amazon-architecture" target="_blank" rel="noopener noreferrer">Amazon 的架构</a></td>
</tr>
<tr>
<td>Cinchcast</td>
<td><a href="http://highscalability.com/blog/2012/7/16/cinchcast-architecture-producing-1500-hours-of-audio-every-d.html" target="_blank" rel="noopener noreferrer">每天产生 1500 小时的音频</a></td>
</tr>
<tr>
<td>DataSift</td>
<td><a href="http://highscalability.com/blog/2011/11/29/datasift-architecture-realtime-datamining-at-120000-tweets-p.html" target="_blank" rel="noopener noreferrer">每秒实时挖掘 120000 条 tweet</a></td>
</tr>
<tr>
<td>DropBox</td>
<td><a href="https://www.youtube.com/watch?v=PE4gwstWhmc" target="_blank" rel="noopener noreferrer">我们如何缩放 Dropbox</a></td>
</tr>
<tr>
<td>ESPN</td>
<td><a href="http://highscalability.com/blog/2013/11/4/espns-architecture-at-scale-operating-at-100000-duh-nuh-nuhs.html" target="_blank" rel="noopener noreferrer">每秒操作 100000 次</a></td>
</tr>
<tr>
<td>Google</td>
<td><a href="http://highscalability.com/google-architecture" target="_blank" rel="noopener noreferrer">Google 的架构</a></td>
</tr>
<tr>
<td>Instagram</td>
<td><a href="http://highscalability.com/blog/2011/12/6/instagram-architecture-14-million-users-terabytes-of-photos.html" target="_blank" rel="noopener noreferrer">1400 万用户，达到兆级别的照片存储</a> <a href="http://instagram-engineering.tumblr.com/post/13649370142/what-powers-instagram-hundreds-of-instances" target="_blank" rel="noopener noreferrer">是什么在驱动 Instagram</a></td>
</tr>
<tr>
<td>Justin.tv</td>
<td><a href="http://highscalability.com/blog/2010/3/16/justintvs-live-video-broadcasting-architecture.html" target="_blank" rel="noopener noreferrer">Justin.Tv 的直播广播架构</a></td>
</tr>
<tr>
<td>Facebook</td>
<td><a href="https://cs.uwaterloo.ca/~brecht/courses/854-Emerging-2014/readings/key-value/fb-memcached-nsdi-2013.pdf" target="_blank" rel="noopener noreferrer">Facebook 的可扩展 memcached</a> <a href="https://cs.uwaterloo.ca/~brecht/courses/854-Emerging-2014/readings/data-store/tao-facebook-distributed-datastore-atc-2013.pdf" target="_blank" rel="noopener noreferrer">TAO: Facebook 社交图的分布式数据存储</a> <a href="https://www.usenix.org/legacy/event/osdi10/tech/full_papers/Beaver.pdf" target="_blank" rel="noopener noreferrer">Facebook 的图片存储</a></td>
</tr>
<tr>
<td>Flickr</td>
<td><a href="http://highscalability.com/flickr-architecture" target="_blank" rel="noopener noreferrer">Flickr 的架构</a></td>
</tr>
<tr>
<td>Mailbox</td>
<td><a href="http://highscalability.com/blog/2013/6/18/scaling-mailbox-from-0-to-one-million-users-in-6-weeks-and-1.html" target="_blank" rel="noopener noreferrer">在 6 周内从 0 到 100 万用户</a></td>
</tr>
<tr>
<td>Pinterest</td>
<td><a href="http://highscalability.com/blog/2013/4/15/scaling-pinterest-from-0-to-10s-of-billions-of-page-views-a.html" target="_blank" rel="noopener noreferrer">从零到每月数十亿的浏览量</a> <a href="http://highscalability.com/blog/2012/5/21/pinterest-architecture-update-18-million-visitors-10x-growth.html" target="_blank" rel="noopener noreferrer">1800 万访问用户，10 倍增长，12 名员工</a></td>
</tr>
<tr>
<td>Playfish</td>
<td><a href="http://highscalability.com/blog/2010/9/21/playfishs-social-gaming-architecture-50-million-monthly-user.html" target="_blank" rel="noopener noreferrer">月用户量 5000 万并在不断增长</a></td>
</tr>
<tr>
<td>PlentyOfFish</td>
<td><a href="http://highscalability.com/plentyoffish-architecture" target="_blank" rel="noopener noreferrer">PlentyOfFish 的架构</a></td>
</tr>
<tr>
<td>Salesforce</td>
<td><a href="http://highscalability.com/blog/2013/9/23/salesforce-architecture-how-they-handle-13-billion-transacti.html" target="_blank" rel="noopener noreferrer">他们每天如何处理 13 亿笔交易</a></td>
</tr>
<tr>
<td>Stack Overflow</td>
<td><a href="http://highscalability.com/blog/2009/8/5/stack-overflow-architecture.html" target="_blank" rel="noopener noreferrer">Stack Overflow 的架构</a></td>
</tr>
<tr>
<td>TripAdvisor</td>
<td><a href="http://highscalability.com/blog/2011/6/27/tripadvisor-architecture-40m-visitors-200m-dynamic-page-view.html" target="_blank" rel="noopener noreferrer">40M 访问者，200M 页面浏览量，30TB 数据</a></td>
</tr>
<tr>
<td>Tumblr</td>
<td><a href="http://highscalability.com/blog/2012/2/13/tumblr-architecture-15-billion-page-views-a-month-and-harder.html" target="_blank" rel="noopener noreferrer">每月 150 亿的浏览量</a></td>
</tr>
<tr>
<td>Twitter</td>
<td><a href="http://highscalability.com/scaling-twitter-making-twitter-10000-percent-faster" target="_blank" rel="noopener noreferrer">Making Twitter 10000 percent faster</a> <a href="http://highscalability.com/blog/2011/12/19/how-twitter-stores-250-million-tweets-a-day-using-mysql.html" target="_blank" rel="noopener noreferrer">每天使用 MySQL 存储 2.5 亿条 tweet</a> <a href="http://highscalability.com/blog/2013/7/8/the-architecture-twitter-uses-to-deal-with-150m-active-users.html" target="_blank" rel="noopener noreferrer">150M 活跃用户，300K QPS，22 MB/S 的防火墙</a> <a href="https://www.infoq.com/presentations/Twitter-Timeline-Scalability" target="_blank" rel="noopener noreferrer">可扩展时间表</a> <a href="https://www.youtube.com/watch?v=5cKTP36HVgI" target="_blank" rel="noopener noreferrer">Twitter 的大小数据</a> <a href="https://www.youtube.com/watch?v=z8LU0Cj6BOU" target="_blank" rel="noopener noreferrer">Twitter 的行为：规模超过 1 亿用户</a></td>
</tr>
<tr>
<td>Uber</td>
<td><a href="http://highscalability.com/blog/2015/9/14/how-uber-scales-their-real-time-market-platform.html" target="_blank" rel="noopener noreferrer">Uber 如何扩展自己的实时化市场</a></td>
</tr>
<tr>
<td>WhatsApp</td>
<td><a href="http://highscalability.com/blog/2014/2/26/the-whatsapp-architecture-facebook-bought-for-19-billion.html" target="_blank" rel="noopener noreferrer">Facebook 用 190 亿美元购买 WhatsApp 的架构</a></td>
</tr>
<tr>
<td>YouTube</td>
<td><a href="https://www.youtube.com/watch?v=w5WVu624fY8" target="_blank" rel="noopener noreferrer">YouTube 的可扩展性</a> <a href="http://highscalability.com/youtube-architecture" target="_blank" rel="noopener noreferrer">YouTube 的架构</a></td>
</tr>
</tbody>
</table>
<h5 id="公司工程博客" tabindex="-1"><a class="header-anchor" href="#公司工程博客"><span>公司工程博客</span></a></h5>
<blockquote>
<p>你即将面试的公司的架构</p>
<p>你面对的问题可能就来自于同样领域</p>
</blockquote>
<ul>
<li><a href="http://nerds.airbnb.com/" target="_blank" rel="noopener noreferrer">Airbnb Engineering</a></li>
<li><a href="https://developer.atlassian.com/blog/" target="_blank" rel="noopener noreferrer">Atlassian Developers</a></li>
<li><a href="http://cloudengineering.autodesk.com/blog/" target="_blank" rel="noopener noreferrer">Autodesk Engineering</a></li>
<li><a href="https://aws.amazon.com/blogs/aws/" target="_blank" rel="noopener noreferrer">AWS Blog</a></li>
<li><a href="http://word.bitly.com/" target="_blank" rel="noopener noreferrer">Bitly Engineering Blog</a></li>
<li><a href="https://www.box.com/blog/engineering/" target="_blank" rel="noopener noreferrer">Box Blogs</a></li>
<li><a href="http://blog.cloudera.com/blog/" target="_blank" rel="noopener noreferrer">Cloudera Developer Blog</a></li>
<li><a href="https://tech.dropbox.com/" target="_blank" rel="noopener noreferrer">Dropbox Tech Blog</a></li>
<li><a href="http://engineering.quora.com/" target="_blank" rel="noopener noreferrer">Engineering at Quora</a></li>
<li><a href="http://www.ebaytechblog.com/" target="_blank" rel="noopener noreferrer">Ebay Tech Blog</a></li>
<li><a href="https://blog.evernote.com/tech/" target="_blank" rel="noopener noreferrer">Evernote Tech Blog</a></li>
<li><a href="http://codeascraft.com/" target="_blank" rel="noopener noreferrer">Etsy Code as Craft</a></li>
<li><a href="https://www.facebook.com/Engineering" target="_blank" rel="noopener noreferrer">Facebook Engineering</a></li>
<li><a href="http://code.flickr.net/" target="_blank" rel="noopener noreferrer">Flickr Code</a></li>
<li><a href="http://engineering.foursquare.com/" target="_blank" rel="noopener noreferrer">Foursquare Engineering Blog</a></li>
<li><a href="https://github.blog/category/engineering" target="_blank" rel="noopener noreferrer">GitHub Engineering Blog</a></li>
<li><a href="http://googleresearch.blogspot.com/" target="_blank" rel="noopener noreferrer">Google Research Blog</a></li>
<li><a href="https://engineering.groupon.com/" target="_blank" rel="noopener noreferrer">Groupon Engineering Blog</a></li>
<li><a href="https://engineering.heroku.com/" target="_blank" rel="noopener noreferrer">Heroku Engineering Blog</a></li>
<li><a href="http://product.hubspot.com/blog/topic/engineering" target="_blank" rel="noopener noreferrer">Hubspot Engineering Blog</a></li>
<li><a href="http://highscalability.com/" target="_blank" rel="noopener noreferrer">High Scalability</a></li>
<li><a href="http://instagram-engineering.tumblr.com/" target="_blank" rel="noopener noreferrer">Instagram Engineering</a></li>
<li><a href="https://software.intel.com/en-us/blogs/" target="_blank" rel="noopener noreferrer">Intel Software Blog</a></li>
<li><a href="https://blogs.janestreet.com/category/ocaml/" target="_blank" rel="noopener noreferrer">Jane Street Tech Blog</a></li>
<li><a href="http://engineering.linkedin.com/blog" target="_blank" rel="noopener noreferrer">LinkedIn Engineering</a></li>
<li><a href="https://engineering.microsoft.com/" target="_blank" rel="noopener noreferrer">Microsoft Engineering</a></li>
<li><a href="https://blogs.msdn.microsoft.com/pythonengineering/" target="_blank" rel="noopener noreferrer">Microsoft Python Engineering</a></li>
<li><a href="http://techblog.netflix.com/" target="_blank" rel="noopener noreferrer">Netflix Tech Blog</a></li>
<li><a href="https://devblog.paypal.com/category/engineering/" target="_blank" rel="noopener noreferrer">Paypal Developer Blog</a></li>
<li><a href="http://engineering.pinterest.com/" target="_blank" rel="noopener noreferrer">Pinterest Engineering Blog</a></li>
<li><a href="https://engineering.quora.com/" target="_blank" rel="noopener noreferrer">Quora Engineering</a></li>
<li><a href="http://www.redditblog.com/" target="_blank" rel="noopener noreferrer">Reddit Blog</a></li>
<li><a href="https://developer.salesforce.com/blogs/engineering/" target="_blank" rel="noopener noreferrer">Salesforce Engineering Blog</a></li>
<li><a href="https://slack.engineering/" target="_blank" rel="noopener noreferrer">Slack Engineering Blog</a></li>
<li><a href="https://labs.spotify.com/" target="_blank" rel="noopener noreferrer">Spotify Labs</a></li>
<li><a href="https://stripe.com/blog/engineering" target="_blank" rel="noopener noreferrer">Stripe Engineering Blog</a></li>
<li><a href="http://www.twilio.com/engineering" target="_blank" rel="noopener noreferrer">Twilio Engineering Blog</a></li>
<li><a href="https://engineering.twitter.com/" target="_blank" rel="noopener noreferrer">Twitter Engineering</a></li>
<li><a href="http://eng.uber.com/" target="_blank" rel="noopener noreferrer">Uber Engineering Blog</a></li>
<li><a href="http://yahooeng.tumblr.com/" target="_blank" rel="noopener noreferrer">Yahoo Engineering Blog</a></li>
<li><a href="http://engineeringblog.yelp.com/" target="_blank" rel="noopener noreferrer">Yelp Engineering Blog</a></li>
<li><a href="https://www.zynga.com/blogs/engineering" target="_blank" rel="noopener noreferrer">Zynga Engineering Blog</a></li>
</ul>
<h6 id="来源及延伸阅读" tabindex="-1"><a class="header-anchor" href="#来源及延伸阅读"><span>来源及延伸阅读</span></a></h6>
<ul>
<li><a href="https://github.com/kilimchoi/engineering-blogs" target="_blank" rel="noopener noreferrer">kilimchoi/engineering-blogs</a></li>
</ul>
<h3 id="_8-1-深入分布式" tabindex="-1"><a class="header-anchor" href="#_8-1-深入分布式"><span>8.1.深入分布式</span></a></h3>
<div class="hint-container note">
<p class="hint-container-title">注</p>
<p>吐槽：以下文章来自于对 https://martinfowler.com/articles/microservices.html 的阅读笔记。</p>
</div>
<h3 id="_1-简单提要-1" tabindex="-1"><a class="header-anchor" href="#_1-简单提要-1"><span>1.简单提要</span></a></h3>
<p>实际上微服务是基于分布式系统的一种团队向的优化架构，在学习微服务的过程中，我们会发现分布式系统的影子。</p>
<p>简而言之，微服务架构风格是一种将单个应用程序开发为一套小型服务的方法，每个服务（团队）都在自己的进程中运行，并与轻量级机制（通常是 <code v-pre>HTTP</code> 资源 <code v-pre>API</code>）进行通信。</p>
<p>这些服务围绕业务功能构建，可通过完全自动化的部署机制独立部署。微服务架构尽量减少中心化管理，不同的服务甚至可以用不同的编程语言编写，并采用不同的数据存储技术（也最好）。</p>
<p>为了更好地理解微服务架构，最好的方式是把它和单体架构进行对比：在传统的单体架构里，一个应用通常由三部分组成：</p>
<ol>
<li>前端 <code v-pre>UI</code>：浏览器中的 <code v-pre>HTML</code> 页面 + <code v-pre>JS</code> 代码</li>
<li>数据库：通常是一个关系型数据库，包含多个数据表</li>
<li>后端服务器：负责处理 <code v-pre>HTTP</code> 请求、执行业务逻辑、操作数据库，并渲染 <code v-pre>HTML</code> 页面返回给前端</li>
</ol>
<p>在这种架构下，后端服务器是一个整体，所有功能都打包到一个可执行文件中。如果系统需要更新，即使只是改动了一个小功能，整个后端应用也必须重新构建并部署。</p>
<p>单体架构的优点：</p>
<ul>
<li>逻辑集中，所有代码运行在同一个进程里，方便管理</li>
<li>开发和测试较为简单，可以直接在开发者的电脑上运行完整应用</li>
<li>部署相对容易，可以打包一个大应用，直接部署到服务器上</li>
<li>可以通过负载均衡水平扩展（比如运行多个实例）</li>
</ul>
<p>但随着应用规模变大，单体架构开始暴露出问题：</p>
<ul>
<li>改动一个小功能，整个应用都要重新部署，开发效率低</li>
<li>代码越来越复杂，模块之间高度耦合，维护成本高</li>
<li>难以针对某个模块单独扩展，即使只是某个功能需要更多资源，也必须整体扩展整个应用</li>
<li>云环境下难以灵活部署，不像微服务那样可以针对不同需求单独优化</li>
</ul>
<p>为什么越来越多人选择微服务？因为微服务架构解决了单体架构的一些问题：</p>
<ul>
<li>更灵活的部署，每个服务都是独立的，可以单独更新，不影响其他部分</li>
<li>更容易扩展，可以只扩展某个需要高性能的服务，而不是整个应用</li>
<li>技术选型更自由，不同的微服务可以用不同的技术栈，比如用户服务用 <code v-pre>Go</code>，订单服务用 <code v-pre>Java</code></li>
<li>更容易维护，每个团队可以专注于一个特定的服务，减少相互影响</li>
</ul>
<p>不过，微服务也带来了一些新的挑战：</p>
<ul>
<li>服务间通信变得复杂，不再是简单的函数调用，而是通过 <code v-pre>API</code> 请求</li>
<li>数据一致性管理更难，因为不同服务可能有不同的数据库</li>
<li>部署和监控要求更高，需要 <code v-pre>DevOps</code> 自动化工具来管理</li>
</ul>
<p>总的来说，微服务架构适合复杂、大型、需要频繁更新的应用，尤其是云原生场景，而小型应用或简单业务用单体架构可能更高效。而微服务架构风格则是一种将单个应用程序开发为一套小型服务的方法，每个服务都在自己的进程中运行并与轻量级机制进行通信。这些服务是围绕业务功能构建的，可通过全自动部署机制独立部署。这些服务有最低限度的集中管理，这些服务可能用不同的编程语言编写并使用不同的数据存储技术。</p>
<div class="hint-container important">
<p class="hint-container-title">重要</p>
<p>补充：有人会问：“微服务不就是 <code v-pre>SOA</code> 吗？” 其实两者确实有相似之处，但也有关键区别。<code v-pre>SOA</code> 这个概念被很多大公司用来设计企业级系统，但实践中很多 <code v-pre>SOA</code> 方案太过复杂，导致问题频发，比如：</p>
<ul>
<li><strong>架构粒度</strong>：<code v-pre>SOA</code> 服务粒度相对较粗，通常以业务功能模块为单位设计服务，一个服务可能包含多个相关功能</li>
<li>**集成方式****：<code v-pre>SOA</code> 通常依赖企业服务总线（<code v-pre>ESB</code>）作为中介，实现服务间的通信、路由和消息转换，但是 <strong>ESB 在变得过于复杂时</strong>，会隐藏系统的核心逻辑，让维护变得困难（微服务通常采用去中心化的通信方式，服务间直接通过轻量级协议（如<code v-pre>HTTP/REST、gRPC</code>）通信）</li>
<li><strong>部署扩展</strong> ：<code v-pre>SOA</code> 服务通常共享基础设施，部署相对集中，扩展时可能需要整体考虑（微服务的每个服务可独立部署、独立扩展，支持按需弹性伸缩，更适合云环境，考虑比较少）</li>
<li><strong>技术不同</strong>：<code v-pre>SOA</code> 倾向于使用统一的技术栈和标准，强调服务间的兼容性（微服务允许不同服务使用最适合其需求的技术栈，支持技术多样性）</li>
<li><strong>数据管理</strong>：<code v-pre>SOA</code> 可能共享数据库，数据一致性通过集中式方式管理（微服务中每个服务通常拥有自己的数据库，数据一致性通过最终一致性等分布式策略保证）</li>
<li><strong>适用场景</strong>：<code v-pre>SOA</code> 适合企业级集成，更像是企业级的&quot;大服务&quot;架构，解决不同系统间的互联互通问题（微服务适合快速迭代的互联网应用，是更精细的&quot;小服务&quot;架构，支持团队独立开发和部署）</li>
<li><strong>耗费成本</strong>：一些 <code v-pre>SOA</code> 项目花费数百万美元，却没有实际价值。</li>
<li><strong>集中过度</strong>：集中管理过度，限制了系统的灵活性导致修改或扩展服务变得困难。</li>
</ul>
<p>微服务架构可以看作是 <strong>“正确地实现 SOA”</strong>，它避免了 <code v-pre>SOA</code> 里那些复杂、低效的做法，而是更专注于 <strong>独立的、小型的、自主的服务</strong>。</p>
<p>因此先有分布式架构的提出后，再次基础上诞生 <code v-pre>SOA</code> 以及微服务，而由于云环境的出现，导致大型企业划分了 <code v-pre>IaaS、PaaS、Saas</code> 三种类型的大型架构。</p>
</div>
<div class="hint-container note">
<p class="hint-container-title">注</p>
<p>吐槽：微服务风格是新颖或创新的，它的根源至少可以追溯到 <code v-pre>Unix</code> 的设计原则，您猜猜是哪一条（笑）？</p>
</div>
<h3 id="_2-实现特征-1" tabindex="-1"><a class="header-anchor" href="#_2-实现特征-1"><span>2.实现特征</span></a></h3>
<p>微服务架构没有一个固定的官方定义，但我们可以总结出一些常见的特点。虽然并不是所有微服务架构都会具备这些特点，但大多数都符合其中的大部分。我们并不是在制定一个标准，而是根据自身经验和行业案例，描述微服务的主要特性。</p>
<h4 id="_2-1-通过服务来实现模块化" tabindex="-1"><a class="header-anchor" href="#_2-1-通过服务来实现模块化"><span>2.1.通过服务来实现模块化</span></a></h4>
<p>在软件开发中，开发人员一直希望能像拼装积木一样构建系统，把不同的功能模块组合在一起（类似机械键盘的热插拔）。近年来，编程语言的生态系统提供了大量的标准库（就是那些写好的代码可以交给使用者来使用），这大大推动了模块化的发展。</p>
<p>一个“组件”可以简单理解为一个可以独立替换和升级的软件单元。在微服务架构中，虽然仍然会使用库（<code v-pre>Library</code>），但核心的模块化方式是把软件拆分成独立的服务（<code v-pre>Service</code>）。</p>
<p>我们可以这样区分：</p>
<ul>
<li><strong>库（Library）</strong>：直接嵌入到程序中，通过内存调用执行（像普通的函数调用）。</li>
<li><strong>服务（Service）</strong>：是独立运行的进程，通过远程调用（如 <code v-pre>HTTP</code> 请求或 <code v-pre>RPC</code>）来进行交互。</li>
</ul>
<p>假设您的应用是一个大项目，里面包含多个库。如果您修改了其中一个库，通常需要重新构建并部署整个应用。但如果这个应用被拆分成多个独立的服务，那么修改某个服务后，只需要重新部署该服务，而不是整个系统。当然，这也不是绝对的——如果某个修改影响了多个服务的接口，就需要做一定的协调。但良好的微服务架构会通过合理划分边界和稳定的服务契约来尽量减少这种情况。在传统的程序开发中，不同模块之间的边界往往不够清晰，可能会因为代码调用方式不规范，导致模块间的耦合过于紧密。而微服务由于必须通过远程调用来交互，使得接口更加明确，避免了内部实现细节被随意访问。</p>
<p>虽然微服务架构有很多优点，但它也有一定的成本：</p>
<ul>
<li>远程调用（如 <code v-pre>HTTP</code> 或 <code v-pre>RPC</code>）比本地函数调用慢得多，因为涉及网络通信。</li>
<li>远程 <code v-pre>API</code> 需要更粗粒度，不能像本地函数一样频繁调用，否则会影响性能。</li>
<li>如果需要调整某个功能模块的职责，跨进程的变更比修改本地代码更复杂。</li>
</ul>
<p>一般来说，一个服务通常对应一个独立运行的进程，但这只是一个大致的原则。例如，一个微服务可能包含多个进程（比如应用进程+数据库进程），但它们始终作为一个整体开发和部署，取决于一个公司如何抉择。</p>
<h4 id="_2-2-围绕业务能力组织团队" tabindex="-1"><a class="header-anchor" href="#_2-2-围绕业务能力组织团队"><span>2.2.围绕业务能力组织团队</span></a></h4>
<p>在拆分大型应用程序时，管理层通常会按技术层面划分团队，比如 <code v-pre>UI</code> 团队、后端逻辑团队和数据库团队。但这种划分方式会导致哪怕是一个简单的修改，都可能涉及多个团队，增加沟通成本，甚至需要额外的预算审批。面对这种情况，团队通常会选择折中方案——把逻辑塞进自己能改的地方，导致代码逻辑分布在各个应用中，变得杂乱无章。这正是康威定律的典型体现：<strong>任何设计一个系统的组织，其最终的系统架构都会反映该组织内部的沟通结构</strong>。</p>
<p>微服务架构采用的是 <strong>围绕业务能力拆分</strong> 的方式，而不是按照技术层面来分割。每个微服务都包含整个业务功能所需的完整技术栈，例如前端界面、数据库、持久化存储以及与其他系统的交互。</p>
<p>因此，微服务架构下的团队是跨职能的，具备完整的开发能力，包括 <code v-pre>UI</code> 设计、数据库管理和项目管理等。这种团队划分方式，使得每个团队能够独立地交付和维护自己的业务功能，减少了跨团队协作的复杂度（而不是开发团队开发完毕就解散了，团队具体变化如下）。</p>
<figure><img src="@source/5.开发方向/8.架构开发/assets/conways-law.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<figure><img src="@source/5.开发方向/8.架构开发/assets/PreferFunctionalStaffOrganization.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<div class="hint-container important">
<p class="hint-container-title">重要</p>
<p>补充：例如我曾经在在一家微服务公司内，几乎每一次开发都涉及到前后端一套完整的技术栈开发，特别是结合了 <code v-pre>AI</code> 后，程序员可以大大降低对某个技术的理解门槛。</p>
</div>
<p>“微服务”这个词容易让人关注服务的大小，甚至有人争论什么才算“微”。在实践中，微服务的规模差别很大。</p>
<ul>
<li><strong>大点的微服务</strong> 遵循 <code v-pre>Amazon</code> 提出的 <strong>“两块披萨团队”</strong> 原则，即一个团队不超过 <code v-pre>10-12</code> 个人，确保沟通高效。</li>
<li><strong>更小的微服务</strong> 可能由 <code v-pre>6</code> 人团队负责 <code v-pre>6</code> 个微服务，每个团队成员都能维护多个服务。</li>
</ul>
<div class="hint-container important">
<p class="hint-container-title">重要</p>
<p>补充：“两块披萨团队” 是亚马逊创始人贝索斯提出的一种团队组织理念。指的是团队规模不能超过两块披萨所能喂饱的人数，通常为 <code v-pre>6</code> 到 <code v-pre>10</code> 人。其核心目的是通过维持较小的团队规模，来提升团队的沟通效率、责任感和灵活性，以实现更好的业绩表现。具体介绍如下：</p>
<ul>
<li><strong>让团队变小</strong>：贝索斯认为小团队的生产效率和表现普遍优于大团队。因为团队规模越大，沟通成本就会呈指数级上升，成员之间信息同步变得困难，会严重影响效率。</li>
<li><strong>让团队独立</strong>：“两块披萨团队” 通常是跨职能团队，成员技能互补，具备完整交付能力，可自主完成任务，无需依赖其他团队。这样能减少团队间的沟通和交接成本，避免等待、信息丢失等问题。</li>
<li><strong>让团队自主</strong>：亚马逊的 “两块披萨团队” 有权决定做什么、怎么做，无需高层批准。团队可以自主决策，快速响应市场变化和客户需求，这有助于提高团队的创新能力和工作效率。</li>
</ul>
</div>
<p>不同规模的微服务是否应该归为同一类，目前还没有定论。我们暂时认为它们都属于微服务，但未来可能会细分出不同类别。即便是单体架构，也可以按业务能力进行模块化拆分（不过现实中并不常见）。我们建议开发单体架构时，也应按业务划分团队，而不是按技术栈划分。然而，单体架构往往涉及太多业务上下文，导致团队成员难以掌握完整的系统逻辑。相比之下，微服务架构的团队边界更清晰，强制了更加严格的模块化，有助于提升团队协作的效率。</p>
<h4 id="_2-3-是产品而非项目的理解" tabindex="-1"><a class="header-anchor" href="#_2-3-是产品而非项目的理解"><span>2.3.是产品而非项目的理解</span></a></h4>
<ul>
<li>
<p>传统的软件开发采用 <strong>项目模式</strong>，即开发团队完成一个项目后，软件交付给运维团队维护，而开发团队随即解散。</p>
</li>
<li>
<p>但微服务架构提倡 <strong>产品模式</strong>，强调团队对产品的全生命周期负责。这种模式受到 <code v-pre>Amazon</code> 的 <strong>你开发，你运维（You build it, you run it）</strong> 原则的启发，即开发团队不仅要编写代码，还要负责产品的长期维护。这种模式的优势是：</p>
<ul>
<li><strong>开发人员能直接看到代码在生产环境的表现</strong>，快速发现和修复问题。</li>
<li><strong>增强团队与用户的联系</strong>，团队需要承担一部分用户支持工作，从而更关注用户体验和业务需求。</li>
</ul>
</li>
</ul>
<p>产品思维关注的是如何持续改进软件来增强业务能力，而不仅仅是按时交付一个项目。这种思维方式同样适用于单体架构，但微服务的小规模粒度更容易让开发团队与用户建立紧密联系。</p>
<p>因此不仅仅是技术栈需要完整，开发者也需要和用户进行一些支持，对程序员的要求某些程度是更高的。</p>
<div class="hint-container important">
<p class="hint-container-title">重要</p>
<p>补充：这点是真实的，如果一个微服务的小型团队可以独自拥有一条开发流水线（<code v-pre>CI/CD</code>），那么开发效率就会大大提高，开发环境出现的问题可以快速得到验证，又不至于开发者由于各种环境和业务上下文的问题无法进行快速测试。而在一条开发流水线中开发、部署、测试，对于项目管理员来说也能快速进行服务迁移，本质上两边都是省去了很多不必要的时间等待问题。</p>
</div>
<h4 id="_2-4-体现智能端点傻瓜通道" tabindex="-1"><a class="header-anchor" href="#_2-4-体现智能端点傻瓜通道"><span>2.4.体现智能端点傻瓜通道</span></a></h4>
<p>简单来说，就是让每个服务自己内聚逻辑，而让通信通道尽可能简单（只是传输数据）。微服务构建的应用程序旨在尽可能地解耦和内聚——它们拥有自己的领域逻辑，并且更多地充当经典 <code v-pre>Unix</code> 意义上的过滤器——接收请求，酌情应用逻辑并生成响应。这些协议是使用简单的 <code v-pre>RESTish</code> 协议而不是复杂的协议（如 <code v-pre>WS-Choreography</code> 或 <code v-pre>BPEL</code>）或由中央工具编排来编排的。</p>
<p>而在一些传统架构里，比如 <code v-pre>SOA</code> 的企业服务总线（<code v-pre>ESB</code>），很多复杂的功能（如消息路由、数据转换、业务规则）都放在了通信机制里。但微服务架构不这么做，它遵循 <strong>“智能端点，傻瓜通道”</strong> 的理念，让每个服务自己负责业务逻辑，而通信机制（如 <code v-pre>HTTP</code>、消息队列）只是简单地传输数据，不做额外处理。</p>
<p>具体来说，微服务通常采用两种方式进行通信。</p>
<ul>
<li><strong>HTTP 请求-响应（REST API）</strong>：这种方式类似于 <code v-pre>Web</code> 的工作方式，比如前端调用后端 <code v-pre>API</code>。简单、易懂，且可以利用 <code v-pre>Web</code> 现有的缓存机制提高性能。关键原则是 “属于 <code v-pre>Web</code>，而不是隐藏在 <code v-pre>Web</code> 之后”（即尽量用 <code v-pre>Web</code> 原生的方式进行交互）。</li>
<li><strong>轻量级消息队列（如 RabbitMQ、ZeroMQ）</strong>：适用于需要异步处理的场景，比如订单处理、事件通知等。消息队列本身不做业务处理，只是传递数据，所有的业务逻辑仍然由微服务自己负责。</li>
</ul>
<div class="hint-container important">
<p class="hint-container-title">重要</p>
<p>补充：在整体式架构（单体应用）中，组件之间直接通过函数调用或方法调用进行通信。但在微服务架构中，由于服务是分布式的，直接的函数调用行不通，必须通过 <code v-pre>HTTP</code> 或消息队列 来替代。但如果简单地把方法调用改成 <code v-pre>RPC</code> 调用，会导致通信变得非常频繁（“话太多”），影响性能。所以，微服务通常采用更大粒度的通信方式，减少交互次数，提高效率。</p>
</div>
<div class="hint-container important">
<p class="hint-container-title">重要</p>
<p>补充：一般来说微服务需要做 <code v-pre>API</code> 网关，因为客户端不是直接调用服务，而是调用 <code v-pre>API</code> 网关，<code v-pre>API</code> 网关将调用转发到后端的相应服务。</p>
</div>
<h4 id="_2-5-去中心化治理更加灵活" tabindex="-1"><a class="header-anchor" href="#_2-5-去中心化治理更加灵活"><span>2.5.去中心化治理更加灵活</span></a></h4>
<p>集中式治理的一个常见问题是对单一技术平台的过度依赖。实践证明，这种做法过于死板。不是所有问题都适用于同一种工具，就像并非所有问题都是钉子，也不是所有解决方案都是锤子。相比之下，我们更倾向于选择适合具体任务的技术。虽然传统的单体架构应用可以在一定程度上使用不同的编程语言，但这种做法并不常见。</p>
<p>将单体架构拆分成多个独立服务后，我们在构建每个组件时可以灵活选择技术方案。例如：</p>
<ul>
<li>想用 <strong>Node.js</strong> 搭建一个简单的报表页面？完全可以！</li>
<li>需要用 <strong>C++</strong> 来处理一个高性能的实时计算模块？没问题！</li>
<li>想为某个组件更换更适合其读取行为的数据库？技术上完全可行！</li>
</ul>
<p>当然，技术选择的自由度增加并不意味着可以随意滥用，但这种架构至少为我们提供了更大的选择空间。</p>
<p>在微服务架构中，团队对于“标准化”有着不同的理解。他们更倾向于使用可复用的工具，而不是依赖一套写在纸上的固定标准。这些工具通常是从实践中提取出来的，并在团队内部乃至整个公司范围内共享，有些甚至采用类似开源的管理模式。</p>
<p>随着 <strong>Git</strong> 和 <strong>GitHub</strong> 成为事实上的版本管理标准，开源协作的方式也逐渐被企业内部采纳。例如 <strong>Netflix</strong>，他们鼓励开发人员将经过实践检验的代码封装成共享库，以便其他团队复用。这种方式既能提高开发效率，也能确保架构的一致性，同时仍然允许在特定情况下使用不同的技术方案。</p>
<p>如今的技术栈早已不限于单一语言。例如，<code v-pre>JVM</code> 生态支持多种语言混合使用，开发者可以在高层使用高级语言进行抽象封装，而在底层采用更高效的低级语言优化性能。然而，许多传统的单体架构往往是单语言的，并且试图减少技术栈的多样性，以降低维护成本。</p>
<p>相比之下，微服务架构鼓励团队在保证服务契约的前提下自由选择技术。例如：</p>
<ul>
<li>采用 <code v-pre>Tolerant Reader</code> 或 <code v-pre>Consumer-Driven Contracts</code> 等模式，使服务契约能够独立演进，减少系统耦合。</li>
<li>通过消费者驱动的契约测试，在新功能开发前就定义好 <code v-pre>API</code> 交互，确保服务间的兼容性。</li>
<li>一些团队甚至在开发新服务时，先定义契约，并将其作为自动化构建的一部分，只有当服务满足契约后，才算真正完成。</li>
</ul>
<p>这一切都减少了对中心化合同管理的需求，使服务更加独立。</p>
<p>去中心化治理的巅峰案例当属 <code v-pre>Amazon</code> 提出的 <strong>&quot;Build it, Run it&quot;（自己开发，自己运维）</strong> 理念。在这种模式下，开发团队不仅负责编码，还要承担运维责任，包括全天候确保系统正常运行。这种做法虽然不是行业普遍标准，但越来越多的公司正在朝这个方向发展。</p>
<p><code v-pre>Netflix</code> 也是这一理念的践行者之一。在这样的环境下，开发人员需要直接对服务的稳定性负责——如果代码质量不佳，可能意味着凌晨 <code v-pre>3</code> 点就会被报警电话叫醒。这种责任机制极大地促进了工程师对代码质量的关注，从而推动整个系统架构的优化。</p>
<div class="hint-container important">
<p class="hint-container-title">重要</p>
<p>补充：对于一些较小需求其实有些时候雇佣专门的微服务维护团队成本也挺高的。</p>
</div>
<h4 id="_2-6-分散的数据管理持久化" tabindex="-1"><a class="header-anchor" href="#_2-6-分散的数据管理持久化"><span>2.6.分散的数据管理持久化</span></a></h4>
<figure><img src="@source/5.开发方向/8.架构开发/assets/decentralised-data.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>数据管理的去中心化主要体现在两方面：概念模型和数据存储。不同系统或部门对同一事物的理解可能不同，比如销售和客服对“客户”的定义不一致。领域驱动设计（<code v-pre>DDD</code>）通过限界上下文来划分不同业务领域，避免这种混淆。</p>
<p>微服务架构去中心化了数据存储，每个服务管理自己的数据库，而不是共享一个数据库，这种方式称为多样化持久化。</p>
<p>数据更新方面，传统单体应用使用事务保证一致性，但微服务由于难以实现分布式事务，更倾向于采用最终一致性，通过补偿操作来处理错误。企业通常愿意接受短暂的不一致，以换取更高的业务灵活性。</p>
<h4 id="_2-7-基础设施的自动化管理" tabindex="-1"><a class="header-anchor" href="#_2-7-基础设施的自动化管理"><span>2.7.基础设施的自动化管理</span></a></h4>
<figure><img src="@source/5.开发方向/8.架构开发/assets/basic-pipeline.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>近几年，基础设施自动化技术发展迅猛，特别是云计算和 <code v-pre>AWS</code> 的进步，大大降低了构建、部署和运行微服务的复杂性。</p>
<p>很多采用微服务架构的团队，之前就有丰富的持续集成（<code v-pre>CI</code>）和持续交付（<code v-pre>CD</code>）经验，因此，他们高度依赖基础设施自动化。例如，在软件构建过程中，会运行大量自动化测试，确保代码质量，同时使用自动化工具将软件逐步部署到不同的环境中。</p>
<div class="hint-container important">
<p class="hint-container-title">重要</p>
<p>补充：<code v-pre>CI/CD, 持续继承/持续交付或持续部署</code> 是现代软件开发中的两个核心概念，它们的目标是提高软件开发效率、减少错误，并让软件交付更快、更稳定。</p>
<ul>
<li><strong>持续集成（CI, Continuous Integration）</strong>：是指开发人员频繁地将代码合并到主分支，并通过自动化测试确保代码质量。</li>
<li><strong>持续交付（CD, Continuous Delivery）</strong>：是指代码在通过 <code v-pre>CI</code> 的测试后，可以随时打包部署到生产环境，供团队进一步测试（一般需要人为批准后发布）。</li>
<li><strong>持续部署（CD, Continuous Deployment）</strong>：是指代码通过所有测试后，自动部署到生产环境，无需人工干预。确保软件能稳定发布，可以随时发布到生产环境（一般可以自动测试后发布）。</li>
</ul>
</div>
<p>随着持续交付和自动化部署的发展，开发人员和运维人员也创造了许多实用工具，比如：</p>
<ul>
<li>代码管理和构建工具</li>
<li>一键启动服务的脚本</li>
<li>标准化监控日志工具</li>
</ul>
<p>对于单体架构的应用来说，自动化构建、测试和部署的流程通常都很顺畅。如果一个团队已经为单体架构搭建了自动化部署流程，那么增加更多的应用也不会觉得麻烦。<strong>持续交付的目标就是让部署变得“无聊”，无论是一两个应用，还是多个应用，只要部署依然稳定可靠，那就没什么可担心的。</strong></p>
<p>虽然部署流程可以做到自动化，但运行微服务的方式和单体应用仍然有很大区别。微服务的运维管理通常更复杂，涉及到服务编排、监控、弹性伸缩等问题，因此，基础设施自动化在微服务架构中变得尤为重要。</p>
<h4 id="_2-8-即使是故障也需要处理" tabindex="-1"><a class="header-anchor" href="#_2-8-即使是故障也需要处理"><span>2.8.即使是故障也需要处理</span></a></h4>
<p>使用服务作为组件的一个后果是，应用程序必须具备容错能力，以应对服务的故障。任何一次服务调用都可能因供应方不可用而失败，客户端必须尽可能优雅地处理这种情况。与单体架构相比，这增加了额外的复杂性，这是微服务架构的一大缺点。因此，微服务团队需要持续思考服务故障对用户体验的影响。例如，<code v-pre>Netflix</code> 的 <code v-pre>Simian Army</code> 在工作时间故意制造服务甚至整个数据中心的故障，以测试应用的容错性和监控能力。</p>
<p>这种在生产环境下进行自动化测试的做法，会让大多数运维团队感到胆战心惊，甚至可能需要放假一周来缓解压力。当然，这并不是说单体架构无法拥有成熟的监控体系，而是从实践经验来看，这种做法在单体架构中较少见。</p>
<p>由于服务随时可能出现故障，因此快速检测并尽可能自动恢复服务至关重要。微服务架构对应用的实时监控要求极高，不仅关注架构层面的指标（如数据库每秒处理多少请求），还关注业务层面的数据（如每分钟有多少订单提交）。语义化监控可以作为预警系统，提前发现异常，并通知开发团队进行调查和修复。</p>
<p>这对微服务架构尤为重要，因为微服务倾向于使用编排（<code v-pre>choreography</code>）和事件驱动的方式进行协作，这容易导致“涌现行为”（<code v-pre>emergent behavior</code>）。虽然很多人推崇这种自发涌现的特性，但实际上，涌现行为并不总是积极的。监控系统的作用就是尽早发现并纠正不良的涌现行为。</p>
<p>单体架构也可以做到像微服务那样透明，事实上，它应该做到这一点。但不同之处在于，运行在不同进程中的微服务如果断连，必须能够立即检测到，而在同一进程中的库（<code v-pre>library</code>）之间，这种透明度的重要性则相对较低。</p>
<p>微服务团队通常会为每个独立服务部署复杂的监控和日志系统，例如提供服务运行状态的仪表盘（<code v-pre>Dashboard</code>），以及各种运维和业务相关指标的展示。常见的监控内容包括熔断器（<code v-pre>circuit breaker</code>）状态、当前吞吐量、请求延迟等，这些都已成为微服务架构的常见实践。</p>
<h4 id="_2-9-渐进式和可替换的设计" tabindex="-1"><a class="header-anchor" href="#_2-9-渐进式和可替换的设计"><span>2.9.渐进式和可替换的设计</span></a></h4>
<p>微服务的实践者通常具有渐进式设计的背景，并将服务拆分视为一种工具，使应用开发人员能够在不降低变更速度的情况下更好地控制应用的更新。变更控制并不意味着减少变更，只要有合适的理念和工具，软件就可以实现频繁、快速且受控的迭代。</p>
<p>在尝试将一个软件系统拆分为多个组件时，必须决定如何划分这些部分，我们基于什么原则来拆分应用？组件的关键特性是独立替换和可升级性，也就是说，我们应该寻找那些可以独立重写而不影响其他组件的部分。事实上，许多微服务团队更进一步，他们默认许多服务会被废弃，而不是长期演进。</p>
<p><code v-pre>Guardian</code> 网站就是一个典型案例，它最初是以单体架构构建的，但后来逐步向微服务架构演进。目前，该网站的核心仍然是单体架构，但他们更倾向于通过微服务的方式扩展新功能，而这些微服务会调用单体架构提供的 <code v-pre>API</code>。这种方式特别适用于一些临时性的功能，比如为某项体育赛事创建专门的页面。这类页面可以使用敏捷开发语言快速搭建，并在活动结束后直接移除。类似的模式在金融行业也很常见，比如针对某个市场机会新增的服务，可能只会存在几周或几个月，之后就会被废弃。</p>
<div class="hint-container note">
<p class="hint-container-title">注</p>
<p>吐槽：简而言之，就是通过微服务架构来快速搭建和拆除临时功能，避免单体架构中的“臃肿”问题。</p>
</div>
<p>可替换性（<code v-pre>Replaceability</code>）是模块化设计的一个特例，其核心思想是通过变更模式来驱动模块化设计。也就是说，应该把那些经常一起变更的部分放在同一个模块中，而变更频率低的部分则应拆分到不同的服务中。如果两个服务经常需要一起修改，那可能意味着它们应该被合并成一个。</p>
<p>将组件拆分为独立服务后，还能带来更灵活的发布管理。在单体架构中，任何变更都需要重新构建和部署整个应用，而在微服务架构下，只需要重新部署修改过的服务即可，这大大简化了发布流程并提高了效率。然而，这种模式的缺点是，某个服务的变更可能会影响到其依赖方。传统的做法是通过版本管理来解决这个问题，但微服务架构更倾向于将版本管理作为最后的手段。实际上，我们可以通过让服务尽可能具备向后兼容性，从而减少对版本管理的依赖，提高系统的稳定性。</p>
<div class="hint-container important">
<p class="hint-container-title">重要</p>
<p>补充：其实实现了上述 <code v-pre>9</code> 点的架构都可以算是微服务架构，只是不同公司的具体实现技术不同罢了，下面给出几家公司对微服务的各自理解。</p>
<ul>
<li><a href="https://aws.amazon.com/cn/microservices/" target="_blank" rel="noopener noreferrer">Amazon</a></li>
<li><a href="https://learn.microsoft.com/zh-cn/azure/architecture/guide/architecture-styles/microservices" target="_blank" rel="noopener noreferrer">Microsoft</a></li>
<li><a href="https://www.vmware.com/topics/microservices" target="_blank" rel="noopener noreferrer">WMware</a></li>
</ul>
</div>
<h3 id="_3-实践项目-1" tabindex="-1"><a class="header-anchor" href="#_3-实践项目-1"><span>3.实践项目</span></a></h3>
<p>可以学习以下技术栈来学习微服架构项目。</p>
<ul>
<li>前端：<code v-pre>React.js + Antd UI</code> 或 <code v-pre>Vue.js + Antd UI</code></li>
<li>后端：<code v-pre>Go</code> 语言 + 微服务工具集 <code v-pre>Go kit</code></li>
<li>存储：<code v-pre>PgSQL + Redis</code></li>
<li>中间：<code v-pre>Pulsar(消息队列) + Redissen(多级缓存) + HotKey(热点探测) + Sentinel(流量治理) + Satoken(用户鉴权)</code></li>
<li>通讯：<code v-pre>HTTP + Dubbo(gRPC)</code></li>
<li>配置：<code v-pre>Nacos</code></li>
<li>接口：<code v-pre>Swagger</code></li>
<li>网关：<code v-pre>Envoy + Contour + Caddy</code></li>
<li>日志：<code v-pre>Fluentd + ELK</code></li>
<li>指标：<code v-pre>FlameGraph + Prometheus + Jaeger/Zipkin</code></li>
<li>部署：<code v-pre>Containerd + Kubeadm + Jenkins + Gitea</code></li>
</ul>
</div></template>


