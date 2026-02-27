---
pageLayout: home
footer: false
home: true
config:
  -
    type: hero # 区域类型，这里可以使用自定义的 docs/.vuepress/components/HomeComponent.vue 也就是 HomeComponent 类型来自定义主页（并且下面的所有配置全部去除）
    full: true # 是否全屏
    # backgroundImage?: string | { light: string, dark: string } # 背景图片
    # backgroundAttachment?: 'fixed' | 'local' # 背景定位
    effect: beams
    effectConfig:
      beamWidth: 2
      beamHeight: 15
      beamNumber: 12
      lightColor: #fff
      speed: 2
      noiseIntensity: 1.75
      scale: 0.2
      rotation: 0
    hero:
      name: 缡墨 limou3434
      tagline: work-blog-website
      text: 这是个开放的知识共享平台 —— 缡墨
      actions:
        -
          theme: brand
          text: plume 主题文档 →
          link: https://theme-plume.vuejs.press/
        -
          theme: alt
          text: 本项目 Github 仓库 →
          link: https://github.com/limou3434/work-blog-website
        -
          theme: sponsor
          text: 博客集合
          link: /blog/
        -
          theme: sponsor
          text: 文档集合
          link: /book/
        -
          theme: sponsor
          text: 智能集合
          link: /agent/
---

