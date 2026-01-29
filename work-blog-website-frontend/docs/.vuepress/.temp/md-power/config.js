import { defineClientConfig } from 'vuepress/client'
import Tabs from '/home/ljp/git/work/work-blog-website/work-blog-website-frontend/node_modules/vuepress-theme-plume/node_modules/vuepress-plugin-md-power/lib/client/components/Tabs.vue'
import CodeTabs from '/home/ljp/git/work/work-blog-website/work-blog-website-frontend/node_modules/vuepress-theme-plume/node_modules/vuepress-plugin-md-power/lib/client/components/CodeTabs.vue'
import PDFViewer from '/home/ljp/git/work/work-blog-website/work-blog-website-frontend/node_modules/vuepress-theme-plume/node_modules/vuepress-plugin-md-power/lib/client/components/PDFViewer.vue'
import VPVideoEmbed from '/home/ljp/git/work/work-blog-website/work-blog-website-frontend/node_modules/vuepress-theme-plume/node_modules/vuepress-plugin-md-power/lib/client/components/VPVideoEmbed.vue'
import Plot from '/home/ljp/git/work/work-blog-website/work-blog-website-frontend/node_modules/vuepress-theme-plume/node_modules/vuepress-plugin-md-power/lib/client/components/Plot.vue'
import CanIUse from '/home/ljp/git/work/work-blog-website/work-blog-website-frontend/node_modules/vuepress-theme-plume/node_modules/vuepress-plugin-md-power/lib/client/components/CanIUse.vue'
import FileTreeNode from '/home/ljp/git/work/work-blog-website/work-blog-website-frontend/node_modules/vuepress-theme-plume/node_modules/vuepress-plugin-md-power/lib/client/components/FileTreeNode.vue'
import VPCodeTree from '/home/ljp/git/work/work-blog-website/work-blog-website-frontend/node_modules/vuepress-theme-plume/node_modules/vuepress-plugin-md-power/lib/client/components/VPCodeTree.vue'
import AudioReader from '/home/ljp/git/work/work-blog-website/work-blog-website-frontend/node_modules/vuepress-theme-plume/node_modules/vuepress-plugin-md-power/lib/client/components/AudioReader.vue'
import Annotation from '/home/ljp/git/work/work-blog-website/work-blog-website-frontend/node_modules/vuepress-theme-plume/node_modules/vuepress-plugin-md-power/lib/client/components/Annotation.vue'
import VPTimeline from '/home/ljp/git/work/work-blog-website/work-blog-website-frontend/node_modules/vuepress-theme-plume/node_modules/vuepress-plugin-md-power/lib/client/components/VPTimeline.vue'
import VPTimelineItem from '/home/ljp/git/work/work-blog-website/work-blog-website-frontend/node_modules/vuepress-theme-plume/node_modules/vuepress-plugin-md-power/lib/client/components/VPTimelineItem.vue'
import VPCollapse from '/home/ljp/git/work/work-blog-website/work-blog-website-frontend/node_modules/vuepress-theme-plume/node_modules/vuepress-plugin-md-power/lib/client/components/VPCollapse.vue'
import VPCollapseItem from '/home/ljp/git/work/work-blog-website/work-blog-website-frontend/node_modules/vuepress-theme-plume/node_modules/vuepress-plugin-md-power/lib/client/components/VPCollapseItem.vue'
import '/home/ljp/git/work/work-blog-website/work-blog-website-frontend/node_modules/vuepress-theme-plume/node_modules/vuepress-plugin-md-power/lib/client/styles/chat.css'
import VPField from '/home/ljp/git/work/work-blog-website/work-blog-website-frontend/node_modules/vuepress-theme-plume/node_modules/vuepress-plugin-md-power/lib/client/components/VPField.vue'
import VPTable from '/home/ljp/git/work/work-blog-website/work-blog-website-frontend/node_modules/vuepress-theme-plume/node_modules/vuepress-plugin-md-power/lib/client/components/VPTable.vue'
import VPQRCode from '/home/ljp/git/work/work-blog-website/work-blog-website-frontend/node_modules/vuepress-theme-plume/node_modules/vuepress-plugin-md-power/lib/client/components/VPQRCode.vue'
import { setupMarkHighlight } from '/home/ljp/git/work/work-blog-website/work-blog-website-frontend/node_modules/vuepress-theme-plume/node_modules/vuepress-plugin-md-power/lib/client/composables/mark.js'

import '/home/ljp/git/work/work-blog-website/work-blog-website-frontend/node_modules/vuepress-theme-plume/node_modules/vuepress-plugin-md-power/lib/client/styles/index.css'

export default defineClientConfig({
  enhance({ router, app }) {
    app.component('Tabs', Tabs)
    app.component('CodeTabs', CodeTabs)
    app.component('PDFViewer', PDFViewer)
    app.component('VPVideoEmbed', VPVideoEmbed)
    app.component('Plot', Plot)
    app.component('CanIUseViewer', CanIUse)
    app.component('FileTreeNode', FileTreeNode)
    app.component('VPCodeTree', VPCodeTree)
    app.component('AudioReader', AudioReader)
    app.component('Annotation', Annotation)
    app.component('VPTimeline', VPTimeline)
    app.component('VPTimelineItem', VPTimelineItem)
    app.component('VPCollapse', VPCollapse)
    app.component('VPCollapseItem', VPCollapseItem)
    app.component('VPField', VPField)
    app.component('VPTable', VPTable)
    app.component('VPQRCode', VPQRCode)
  },
  setup() {
        setupMarkHighlight("eager")

  }
})
