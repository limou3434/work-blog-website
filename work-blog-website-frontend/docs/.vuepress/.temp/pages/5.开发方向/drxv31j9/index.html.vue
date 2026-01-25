<template><div><h2 id="_1-全面概述" tabindex="-1"><a class="header-anchor" href="#_1-全面概述"><span>1.全面概述</span></a></h2>
<p><code v-pre>Apache Dubbo</code> 是一款 <code v-pre>RPC</code> 服务开发框架，用于解决微服务架构下的服务治理与通信问题，官方提供了 <code v-pre>Java、Golang</code> 等多语言 <code v-pre>SDK</code> 实现。<code v-pre>使用</code> Dubbo 开发的微服务原生具备相互之间的远程地址发现与通信能力，利用 <code v-pre>Dubbo</code> 提供的丰富服务治理特性，可以实现诸如服务发现、负载均衡、流量调度等服务治理诉求。<code v-pre>Dubbo</code> 被设计为高度可扩展，用户可以方便的实现流量拦截、选址的各种定制逻辑。在云原生时代，<code v-pre>Dubbo</code> 相继衍生出了 <code v-pre>Dubbo3、Proxyless Mesh</code> 等架构与解决方案，在易用性、超大规模微服务实践、云原生基础设施适配、安全性等几大方向上进行了全面升级。</p>
<p><code v-pre>Apache Dubbo</code> 最初是为了解决阿里巴巴内部的微服务架构问题而设计并开发的，在十多年的时间里，它在阿里巴巴公司内部的很多业务系统得到了非常广泛的应用。最早在 <code v-pre>2008</code> 年，阿里巴巴就将 <code v-pre>Dubbo</code> 捐献到开源社区，它很快成为了国内开源服务框架选型的事实标准框架，得到了业界更广泛的应用。在 <code v-pre>2017</code> 年，<code v-pre>Dubbo</code> 被正式捐献 <code v-pre>Apache</code> 软件基金会并成为 <code v-pre>Apache</code> 顶级项目，开始了一段新的征程。</p>
<p><code v-pre>Dubbo</code> 被证实能很好的满足企业的大规模微服务实践，并且能有效降低微服务建设的开发与管理成本，不论是阿里巴巴还是工商银行、中国平安、携程、海尔等社区用户，它们都通过多年的大规模生产环境流量对 Dubbo 的稳定性与性能进行了充分验证。后来 <code v-pre>Dubbo</code> 在很多大企业内部衍生出了独立版本。自云原生概念推广以来，各大厂商都开始拥抱开源标准实现，阿里巴巴将其内部 <code v-pre>HSF</code> 系统与开源社区 <code v-pre>Dubbo</code> 相融合，与社区一同推出了云原生时代的 <code v-pre>Dubbo3</code> 架构，截止 <code v-pre>2022</code> 年双十一结束，<code v-pre>Dubbo3</code> 已经在阿里巴巴内部广泛落地，实现了老版本 <code v-pre>HSF2</code> 框架升级，包括电商核心、阿里云等核心系统已经全面运行在 Dubbo3 之上。</p>
<h2 id="_2-基本功能" tabindex="-1"><a class="header-anchor" href="#_2-基本功能"><span>2.基本功能</span></a></h2>
<p>为什么需要 <code v-pre>Dubbo</code>，它能做什么？按照微服务架构的定义，采用它的组织能够很好的提高业务迭代效率与系统稳定性，但前提是要先能保证微服务按照期望的方式运行，要做到这一点需要解决：</p>
<ul>
<li>服务拆分</li>
<li>数据通信</li>
<li>地址发现</li>
<li>流量管理</li>
<li>数据一致</li>
<li>系统容错</li>
</ul>
<p>等一系列问题，而 <code v-pre>Dubbo</code> 可以帮助解决如下微服务实践问题：</p>
<ul>
<li><strong>微服务编程范式和工具</strong>：<code v-pre>Dubbo</code> 支持基于 <code v-pre>IDL</code> 或语言特定方式的服务定义，提供多种形式的服务调用形式（如同步、异步、流式等）</li>
<li><strong>高性能的 RPC 通信</strong>
Dubbo 帮助解决微服务组件之间的通信问题，提供了基于 <code v-pre>HTTP、HTTP/2、TCP</code> 等的多种高性能通信协议实现，并支持序列化协议扩展，在实现上解决网络连接管理、数据传输等基础问题。</li>
<li><strong>微服务监控与治理</strong>：<code v-pre>Dubbo</code> 官方提供的服务发现、动态配置、负载均衡、流量路由等基础组件可以很好的帮助解决微服务基础实践的问题。除此之外，您还可以用 <code v-pre>Admin</code> 控制台监控微服务状态，通过周边生态完成限流降级、数据一致性、链路追踪等能力。</li>
<li><strong>部署在多种环境</strong>：<code v-pre>Dubbo</code> 服务可以直接部署在 <code v-pre>docker、Kubernetes、Service Mesh</code> 等多种架构下。</li>
</ul>
<h2 id="_3-快速使用" tabindex="-1"><a class="header-anchor" href="#_3-快速使用"><span>3.快速使用</span></a></h2>
<h2 id="_4-深入学习" tabindex="-1"><a class="header-anchor" href="#_4-深入学习"><span>4.深入学习</span></a></h2>
</div></template>


