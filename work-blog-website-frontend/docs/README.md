---
pageLayout: home
footer: false
home: true
config:
  -
    type: hero # 区域类型
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
      name: 工作室博客平台
      tagline: Work Blog Website
      text: 这是一个集齐工作室成员实践的博客平台——缡墨
      actions:
        -
          theme: brand
          text: 博客集合
          link: /blog/
        -
          theme: sponsor
          text: 文档集合
          link: /book   /
        -
          theme: alt
          text: 本项目 Github 仓库 →
          link: https://github.com/limou3434/work-blog-website
---
