# 虚拟歌姬引擎开发

## 1.模块划分

`VOICEVOX` 开发并分发两个版本：

- 一个是不包含角色元素（声音和外观）的开源版本（`OOS, Open Source Software`）
- 以及一个基于开源版本构建并包含角色元素的生产版本

`VOICEVOX` 由三个模块组成，它们各自承担着不同的功能：

- [编辑器 voicevox](https://github.com/VOICEVOX/voicevox)：一个用于显示 `GUI` 的模块，以应用程序的形式提供，由 `TypeScript、Vue、Electron` 组成
- [引擎 voicevox_engine](https://github.com/VOICEVOX/voicevox_engine)：这是一个用于发布文本转语音合成 `API` 的模块，并以 `Web` 服务器的形式提供，由 `Python、FastAPI Web、OpenJTalk TTS` 组成
- [核心 voicevox_core](https://github.com/VOICEVOX/voicevox_core)：该模块执行语音合成所需的计算，并以动态库的形式提供，由 `Rust、Onnxruntime` 组成

其中编辑器引用引擎，引擎又引用核心。

![image-20251130014248875](./assets/image-20251130014248875.png)

上述三个模块“编辑器、引擎、核心”是独立提供的，因此其中一些模块可以用于 `VOICEVOX` 以外的应用程序。例如，`VOICEVOX` 引擎以 `Web` 服务器的形式提供，因此可以通过发送 `Web` 请求来获取文本转语音合成结果。核心模块也是一个动态库，因此可以直接集成到其他软件中。

## 2.使用方法

在看源代码前，需要先充分熟悉这个软件的界面以及对应的使用方法，首先需要看 [最最基础的使用教程](https://www.bilibili.com/video/BV1EfybYAEVz/?spm_id_from=333.337.search-card.all.click&vd_source=c92c89dbfcf9cc30c48086469621f35b)。不过这个视频是 `2024` 年的了，如果还需要学习全面的使用，最好看看 `github` 的说明文档。

待补充...

## 3.源码研究

