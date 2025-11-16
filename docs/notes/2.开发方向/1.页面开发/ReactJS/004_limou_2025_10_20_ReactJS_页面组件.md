---
createTime: 2025/10/20 01:41:26
permalink: /article/sv8fk15l/
---
# 页面组件

## 1.设计思路

我决定采用 `Antd UI` 组件封装一个更加便捷使用，更加符合我的风格的前端组件。首先我们需要整理一些事情，比如设计思路、设计模式、组件生态、全局设置等。

### 1.1.色彩

色彩体系解读成两个层面：**系统级色彩体系** 和 **产品级色彩体系**。

- 系统级色彩体系主要定义了蚂蚁中台设计中的基础色板、中性色板、数据可视化色板。
  - **基础色板**：`Ant Design` 系统级色彩体系同样源于 「自然」 的设计价值观。设计师通过对自然场景的抽象捕捉，结合蚂蚁的技术基因，形成了特有的 `12` 色。进一步又通过大量的观察，捕捉不同色彩在自然光下的变化规律，借助美术中素描的思路，对 `12` 个颜色进行了衍生。在中性色板的定义上，则是平衡了可读性、美感以及可用性得出的。
  - **中性色板**：包含了黑、白、灰。在蚂蚁中后台的网页设计中被大量使用到，合理地选择中性色能够令页面信息具备良好的主次关系，助力阅读体验`。Ant Design` 的中性色板一共包含了从白到黑的 `13` 个颜色。
  - **可视色板**：如果上面的色板不能满足你的需求，你可以选择一个主色，`Ant Design` 的色彩生成算法会为你生成完整的色板，[生成地址](https://ant.design/docs/spec/colors-cn#%E8%89%B2%E6%9D%BF%E7%94%9F%E6%88%90%E5%B7%A5%E5%85%B7)。
- 产品级色彩体系则是在具体设计过程中，基于系统色彩进一步定义符合产品调性以及功能诉求的颜色。

上述的色板融合到了组件中，可以通过某些配置来全局修改，不过对于“我们”这种不会设计的人来说，仅仅只是想要快速得到一款优雅好看的产品，因此我一般建议使用官方的色彩设计，并且结合 [色彩依赖](https://www.npmjs.com/package/@ant-design/colors) 在代码中进行写入。当然，能不用就不用。

### 1.2.布局

待补充...

### 1.3.字体

待补充...

### 1.4.图标

待补充...

### 1.5.暗黑

待补充...

### 1.6.阴影

待补充...

## 2.设计模式

![](./assets/NyWYOFQxJYElAwtUfSdv.png)

完整的设计模式将包括模板、组件、通用概念

- 功能：由多个模板组成，以启发用户如何使用和构建一个通用功能
- 模板：一个页面级示例，启发用户如何在系统中构建典型页面，例如详细信息页面
- 组件
  - 基本组件：系统的最基本元素，例如按钮和分页器
  - 业务组件：块级示例，通常由多个组件组成

## 3.组件生态

实际上 `Antd` 有自己的一套完整组件生态（再搭配 `React`），这里结合 `React + Antd` 整理一份资源清单：

- [Antd 安装启动](https://ant.design/docs/react/use-with-next-cn)
- [Antd 基本组件](https://ant.design/components/overview-cn)
- [Antd 封装组件](https://procomponents.ant.design/components)
- [Antd 智能组件](https://github.com/ant-design/x)
- [Antd 完整方案](https://pro.ant.design/zh-CN/docs/getting-started/)
- [数据图表组件](https://g2plot.antv.antgroup.com/examples)
- [关系可视组件](https://g6.antv.antgroup.com/examples)
- [地理空间组件](https://l7.antv.vision/examples)
- [代码展示组件](https://github.com/uiwjs/react-codemirror)
- [二维码图组件](https://github.com/zpao/qrcode.react)
- [顶部进度组件](https://github.com/tanem/react-nprogress)
- [视频播放组件](https://github.com/chintan9/plyr-react?utm_source=chatgpt.com)
- [高德地图组件](https://github.com/uiwjs/react-amap)
- [~~页脚信息组件~~](https://github.com/react-component/footer)
- [~~剪切图片组件~~](https://github.com/nanxiaobei/antd-img-crop)
- [流节点图组件](https://github.com/xyflow/xyflow)
- [电话输入组件](https://github.com/typesnippet/antd-phone-input)
- [动画渲染组件](https://github.com/motiondivision/motion)
- [文档展示组件](https://github.com/diegomura/react-pdf)
- [富文编辑组件](https://github.com/zenoamaro/react-quill)
- [~~国际管理~~](https://github.com/i18next/react-i18next)
- [色彩管理](https://www.npmjs.com/package/@ant-design/colors)
- [拖拽管理](https://github.com/clauderic/dnd-kit)
- [~~设备管理~~](https://github.com/duskload/react-device-detect)
- [ahooks](https://ahooks.js.org/zh-CN/hooks/use-request/basic)

## 4.封装框架

封装的过程步骤是：

1. 保证 `npm` 是最新的版本，先使用 `Next.js` 安装 `Antd` 的基本依赖 `npx create-next-app work-edtechhub-demo-frontend`，后面有需要的其他依赖就逐步安装。

   ```shell
   ljp@limou3434:~/git/edtechhub/work-edtechhub-demo$ yarn create next-app work-edtechhub-demo-frontend
   ✔ Would you like to use TypeScript? … No / Yes
   ✔ Which linter would you like to use? › ESLint
   ✔ Would you like to use Tailwind CSS? … No / Yes
   ✔ Would you like your code inside a `src/` directory? … No / Yes
   ✔ Would you like to use App Router? (recommended) … No / Yes
   ✔ Would you like to use Turbopack? (recommended) … No / Yes
   ✔ Would you like to customize the import alias (`@/*` by default)? … No / Yes
   ✔ What import alias would you like configured? … @/*
   Creating a new Next.js app in /home/ljp/git/edtechhub/work-edtechhub-demo/work-edtechhub-demo-frontend.
   
   Using npm.
   
   Initializing project with template: app 
   
   
   Installing dependencies:
   - react
   - react-dom
   - next
   
   Installing devDependencies:
   - typescript
   - @types/node
   - @types/react
   - @types/react-dom
   - eslint
   - eslint-config-next
   - @eslint/eslintrc
   
   
   added 303 packages, and audited 304 packages in 53s
   
   131 packages are looking for funding
     run `npm fund` for details
   
   found 0 vulnerabilities
   Success! Created work-edtechhub-demo-frontend at /home/ljp/git/edtechhub/work-edtechhub-demo/work-edtechhub-demo-frontend
   
   ```

   > [!IMPORTANT]
   >
   > 补充：可以使用 `npm config set registry https://registry.npmmirror.com` 来使用国内镜像节省不该花费的流量。

2. 也可以直接使用命令行配置。

   | 参数                   | 含义                             |
   | ---------------------- | -------------------------------- |
   | `--typescript`         | 使用 TypeScript                  |
   | `--eslint`             | 启用 ESLint                      |
   | `--src-dir`            | 源码放到 `src/` 目录             |
   | `--app`                | 使用 App Router (`app/` 目录)    |
   | `--turbo`              | 使用 Turbopack                   |
   | `--import-alias "@/*"` | 设置导入别名                     |
   | `--yes`                | 默认所有提示都选择 Yes，跳过交互 |

   ```shell
   ljp@limou3434:~/git/edtechhub/work-edtechhub-demo$ yarn create next-app work-edtechhub-demo-frontend \
     --typescript \
     --eslint \
     --src-dir \
     --app \
     --turbo \
     --import-alias "@/*" \
     --yes
   yarn create v1.22.22
   [1/4] Resolving packages...
   [2/4] Fetching packages...
   [3/4] Linking dependencies...
   [4/4] Building fresh packages...
   
   success Installed "create-next-app@15.5.6" with binaries:
         - create-next-app
   [##] 2/2Creating a new Next.js app in /home/ljp/git/edtechhub/work-edtechhub-demo/work-edtechhub-demo-frontend.
   
   Using yarn.
   
   Initializing project with template: app 
   
   
   Installing dependencies:
   - react
   - react-dom
   - next
   
   Installing devDependencies:
   - typescript
   - @types/node
   - @types/react
   - @types/react-dom
   - eslint
   - eslint-config-next
   - @eslint/eslintrc
   
   yarn install v1.22.22
   info No lockfile found.
   [1/4] Resolving packages...
   [2/4] Fetching packages...
   [3/4] Linking dependencies...
   [4/4] Building fresh packages...
   success Saved lockfile.
   Done in 156.25s.
   Success! Created work-edtechhub-demo-frontend at /home/ljp/git/edtechhub/work-edtechhub-demo/work-edtechhub-demo-frontend
   
   Done in 157.06s.
   
   ```

3. 使用自动路由来编写一个训练测试页面，这个页面专门用来给我们测试组件的封装效果的，就创建一个 `/home/ljp/git/edtechhub/work-edtechhub-demo/work-edtechhub-demo-frontend/src/app/training/page.tsx` 就可以，内容先随便写。

   ```tsx
   export default function TrainingPage() {
       return (
           <p>TrainingPage</p>
       );
   }
   
   ```

4. 然后先引入国际化，我们的网站需要支持国际化 `yarn add react-i18next i18next`。

5. 引入路由布局组件，接入到全局布局组件中，并且设置页脚、错误页面







