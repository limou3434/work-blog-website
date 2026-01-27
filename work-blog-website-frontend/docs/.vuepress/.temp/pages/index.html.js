import comp from "/home/ljp/git/work/work-blog-website/work-blog-website-frontend/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"pageLayout\":\"home\",\"footer\":false,\"config\":[{\"type\":\"hero\",\"full\":true,\"effect\":\"beams\",\"effectConfig\":{\"beamWidth\":2,\"beamHeight\":15,\"beamNumber\":12,\"lightColor\":null,\"speed\":2,\"noiseIntensity\":1.75,\"scale\":0.2,\"rotation\":0},\"hero\":{\"name\":\"工作室博客平台\",\"tagline\":\"Work Blog Website\",\"text\":\"这是一个集齐工作室成员实践的博客平台——缡墨\",\"actions\":[{\"theme\":\"brand\",\"text\":\"日常博客\",\"link\":\"/blog/\"},{\"theme\":\"alt\",\"text\":\"本项目 Github 仓库 →\",\"link\":\"https://github.com/limou3434/work-blog-website\"}]}}]},\"readingTime\":{\"minutes\":0.29,\"words\":88},\"git\":{},\"filePathRelative\":\"README.md\",\"headers\":[],\"bulletin\":true}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
