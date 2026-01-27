import { defineClientConfig } from "vuepress/client";
import ChartJS from "/home/ljp/git/work/work-blog-website/work-blog-website-frontend/node_modules/vuepress-theme-plume/node_modules/@vuepress/plugin-markdown-chart/lib/client/components/ChartJS.js";
import ECharts from "/home/ljp/git/work/work-blog-website/work-blog-website-frontend/node_modules/vuepress-theme-plume/node_modules/@vuepress/plugin-markdown-chart/lib/client/components/ECharts.js";
import MarkMap from "/home/ljp/git/work/work-blog-website/work-blog-website-frontend/node_modules/vuepress-theme-plume/node_modules/@vuepress/plugin-markdown-chart/lib/client/components/MarkMap.js";
import Mermaid from "/home/ljp/git/work/work-blog-website/work-blog-website-frontend/node_modules/vuepress-theme-plume/node_modules/@vuepress/plugin-markdown-chart/lib/client/components/Mermaid.js";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("ChartJS", ChartJS)
    app.component("ECharts", ECharts);
    app.component("MarkMap", MarkMap);
    app.component("Mermaid", Mermaid);
  },
});
