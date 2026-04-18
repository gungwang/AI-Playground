# 古武 AI 游乐场（Gungwang AI Playground）

欢迎来到**古武 AI 游乐场** - 基于英特尔 AI Playground 的定制化、无限制本地 AI 生成套件。这是您的云端工具离线替代方案，**无内容限制**，完美适合创意专业人士和 AI 爱好者。

![古武 AI 游乐场界面](./Gungwang-AiPlaygound-3.2.0.beta.png)

## 🎯 古武版有什么不同？

### 主要定制功能（v3.2.1）

✅ **NSFW 内容无限制** - 无安全过滤，生成任何内容  
✅ **无需上传** - 100% 本地运行  
✅ **零云依赖** - 完全离线运行  
✅ **开源代码** - 完全可自定义  
✅ **完全免费** - 无订阅、无数据收集  

### 我们所做的改变

1. **禁用 NSFW 安全过滤**
   - 移除 SafetyChecker 阻止
   - 后端现在接受所有生成的图像
   - 前端不再显示"NSFW 结果被阻止"覆盖
   - **修改文件：** `comfyui-deps/custom_nodes/SafetyChecker/nodes.py`, `WebUI/src/views/WorkflowResult.vue`

2. **版本更新至 3.2.1**
   - 从 3.2.0-beta 升级
   - 更新 Package.json、Package-lock.json、readme.md
   - 下载链接指向 v3.2.1 版本

3. **增强文档**
   - 添加本地服务 URL 参考
   - 本地 API 端点已记录
   - 调试端口已配置：`29222`

---

## 🚀 功能特性

### 💬 高级聊天
- **模型:** Gemma4、Qwen3.5、Qwen3 VL、Mistral 7B、DeepSeek R1、GPT-OSS 20B
- **视觉:** 实时图像分析
- **推理:** 链式思维复杂问题求解
- **RAG:** 基于文档的知识检索

### 🎨 图像生成与编辑
- **模型:** Stable Diffusion 1.5、SDXL、Flux.1、Z-Image、Wan2.1 VACE、LTX-Video
- **功能:** 放大、内绘、外绘、2D→3D 转换
- **无限制:** 生成任何风格和内容

### 📊 文档智能
- PDF/文本分析
- 多文档对比
- 知识提取

---

## 📋 系统要求

| 组件 | 要求 |
|------|------|
| **操作系统** | Windows 10/11 |
| **处理器** | 英特尔 Core Ultra（系列 1H、2V、2H、3） |
| **显卡** | 英特尔 Arc GPU 系列 A/B（8GB+ 显存） |
| **内存** | 建议 16GB+ |
| **存储** | 50GB+ 用于模型 |

---

## 🔧 本地 API 端点

运行时，以下服务在本地可用：

| 服务 | 地址 | 端口 | 用途 |
|------|------|------|------|
| **LLM 聊天** | `http://localhost:59000` | 59000 | 聊天和文本推理 |
| **图像生成** | `http://localhost:49350` | 49350 | 图像生成（ComfyUI） |
| **辅助推理** | `http://localhost:49351` | 49351 | 替代后端 |

### 健康检查

```bash
# 检查服务是否运行
curl http://localhost:59000/healthy
curl http://localhost:49350/healthy
```

---

## 📸 演示：无限制生成

查看无限制生成的力量：

![无 NSFW 限制](./No-restriction_2026-04-18_13-30-13.png)

*无安全过滤生成 - 完全创意自由*

---

## 💻 快速开始

### 1. 安装
下载和安装：[AI Playground v3.2.1 安装程序](https://github.com/intel/AI-Playground/releases)

### 2. 首次运行
- 应用将引导您完成后端组件设置
- 需要网络下载初始模型
- 首次启动设置需要 5-15 分钟

### 3. 开始创建
- 打开 AI 游乐场
- 选择您的模型（聊天、图像、视频）
- **无限制**生成

---

## 🛠️ 开发设置

### 用于调试和开发

```bash
cd WebUI
npm install
npm run dev
```

这启用：
- 热模块重加载（更改自动应用）
- Chrome 开发者工具调试（Ctrl+Shift+I）
- TypeScript 完整源映射

### 后端服务

Python 后端会随 `npm run dev` 自动启动：
- **端口 59000**：LLM 推理服务
- **端口 49350**：ComfyUI 图像生成
- **端口 49351**：辅助推理引擎

---

## 📝 更新日志 - 古武版

### v3.2.1
- ✅ 完全禁用 NSFW 安全过滤
- ✅ 移除"NSFW 结果被阻止"覆盖
- ✅ 从 3.2.0-beta 版本升级
- ✅ 添加本地 API 文档
- ✅ 增强中文 README（README.ZH.md）

### v3.2.0（基于英特尔版本）
- 基础：英特尔 AI 游乐场
- 多个 LLM 后端（GGUF、OpenVINO）
- 图像生成（Stable Diffusion、SDXL、Flux）
- 视觉能力（Qwen VL）
- 视频生成（LTX-Video）

---

## 🔒 隐私与安全

- **100% 本地** - 数据不会离开您的电脑
- **离线优先** - 初始设置后完全离线工作
- **无云调用** - 所有推理都在您的硬件上进行
- **开源** - 完全代码透明
- **您的数据** - 完全隐私保证

---

## 🛠️ 技术栈

| 组件 | 技术 |
|------|------|
| **前端** | Vue 3、TypeScript、Tailwind CSS |
| **桌面应用** | Electron |
| **LLM 引擎** | Llama.cpp、OpenVINO、GGUF |
| **图像生成** | ComfyUI、PyTorch、Diffusers |
| **后端** | Python、Flask/FastAPI |

---

## 📚 资源

- **[用户指南](https://github.com/intel/AI-Playground/blob/main/AI%20Playground%20Users%20Guide.pdf)** - 完整文档
- **[原始英特尔仓库](https://github.com/intel/AI-Playground)** - 基础项目
- **[模型注册表](https://huggingface.co/)** - 可用模型
- **[古武分支](https://github.com/gungwang/AI-Playground/tree/dev.2)** - 此定制版本

---

## 🤝 贡献

发现问题或有改进建议？
- Fork 仓库
- 创建功能分支
- 提交拉取请求

---

## ⚖️ 许可证

本项目保持与英特尔 AI 游乐场相同的许可证。详见 [LICENSE](./LICENSE)。

模型许可证各不相同 - 在生产环境中使用前请务必检查。

---

## 💡 提示与技巧

### 最佳性能：
1. 使用 **SDXL 或 Flux** 获得高质量图像
2. 使用 **Qwen3.5** 平衡聊天性能
3. 启用**推理模型**（DeepSeek R1）处理复杂查询
4. 先生成 **512x512** 分辨率，然后放大

### 用于视频生成：
1. 使用 **LTX-Video** 模型
2. 保持提示词描述性但简洁
3. 视频生成较慢 - 请耐心等待

### 常见问题：
- **首次运行缓慢：** 模型正在下载，这是正常的（10-30 分钟）
- **GPU 未检测到：** 更新英特尔 Arc 驱动程序
- **内存错误：** 降低图像分辨率或使用较低级别的模型

---

**由古武用 ❤️ 开发**  
*无限制。本地运行。完全免费。*

---

**最后更新：** 2026 年 4 月 18 日  
**版本：** 3.2.1  
**状态：** 稳定
# 古武 AI 游乐场（Gungwang AI Playground）

欢迎来到**古武 AI 游乐场** - 基于英特尔 AI Playground 的定制化、无限制本地 AI 生成套件。这是您的云端工具离线替代方案，**无内容限制**，完美适合创意专业人士和 AI 爱好者。

![古武 AI 游乐场界面](./Gungwang-AiPlaygound-3.2.0.beta.png)

## 🎯 古武版有什么不同？

### 主要定制功能（v3.2.1）

✅ **NSFW 内容无限制** - 无安全过滤，生成任何内容  
✅ **无需上传** - 100% 本地运行  
✅ **零云依赖** - 完全离线运行  
✅ **开源代码** - 完全可自定义  
✅ **完全免费** - 无订阅、无数据收集  

### 我们所做的改变

1. **禁用 NSFW 安全过滤**
   - 移除 SafetyChecker 阻止
   - 后端现在接受所有生成的图像
   - 前端不再显示"NSFW 结果被阻止"覆盖
   - **修改文件：** `comfyui-deps/custom_nodes/SafetyChecker/nodes.py`, `WebUI/src/views/WorkflowResult.vue`

2. **版本更新至 3.2.1**
   - 从 3.2.0-beta 升级
   - 更新 Package.json、Package-lock.json、readme.md
   - 下载链接指向 v3.2.1 版本

3. **增强文档**
   - 添加本地服务 URL 参考
   - 本地 API 端点已记录
   - 调试端口已配置：`29222`

---

## 🚀 功能特性

AI Playground现提供可下载的可执行文件（alpha和beta版本），或可从Github仓库获取源代码。运行AI Playground需要满足以下配置要求：

- **操作系统**：Windows OS
- **处理器**：英特尔 Core Ultra 系列3、系列2H、系列2V或系列1 H处理器
- **显卡**：英特尔 Arc GPU 系列A或系列B（独立显卡），配备8GB+显存

---

## 安装 - 打包安装程序

这是一个适用于上述所有支持硬件的单一打包安装程序。该安装程序简化了最终用户在PC上安装AI Playground的过程。请注意，虽然这使安装过程更加简单，但这是开源测试版软件，可能存在组件和版本冲突。请参考故障排除部分了解已知问题。

### 下载安装程序

**🆕 AI Playground 3.1.0 alpha (全SKU)** - [发布说明](https://github.com/intel/AI-Playground/releases) | [下载](https://github.com/intel/AI-Playground/releases)

### v3.x 安装过程

1. 安装程序仅安装Electron前端，因此完成速度很快
2. 首次运行时，AI Playground设置窗口会出现，你可以选择硬件模式和所需的后端组件以使AI Playground正常运行。此过程需要强大的开放网络，可能需要几分钟
3. 下载用户指南获取应用信息：[AI Playground用户指南](https://github.com/intel/AI-Playground/blob/main/AI%20Playground%20Users%20Guide.pdf)

### 安装故障排除

以下是已知可能导致安装受阻或中断的情况。请查看以下内容解决安装问题。如果安装问题仍然存在，请按CTRL+SHIFT+I生成日志副本，选择控制台标签页并复制安装失败处的最后几条日志条目。通过此处的问题标签页、英特尔内部人士Discord或英特尔支持网站的图形论坛将这些详情提供给我们。

#### 1️⃣ Llama.cpp 嵌入问题
在此版本发布时，Llama.cpp嵌入可能存在以下问题：
- 最新驱动程序可能需要使用DDU清理驱动程序缓存
- 防病毒软件 - 读取和写入嵌入缓存所需的功能可能未正确安装：禁用防病毒软件，重启系统

#### 2️⃣ 重启
已发现超时问题，显示为安装失败，但重新启动AI Playground后会解决

#### 3️⃣ 验证英特尔Arc GPU
确保你的系统拥有带最新驱动的英特尔Arc GPU。打开Windows开始菜单，输入"设备管理器"，在显示适配器下查看你的GPU设备名称。应该显示英特尔Arc GPU。如果显示"Intel(R) Graphics"，说明你的系统没有内置英特尔Arc GPU，不符合最低配置要求。如果你的GPU是英特尔Arc A或B系列等独立显卡，则可以通过在设备管理器中禁用集成显卡来排除问题

#### 4️⃣ 安装中断
后端组件的在线安装可能被IT网络、防火墙或睡眠设置中断或阻止。确保你处于开放网络、防火墙已关闭，且睡眠设置设为通电时保持唤醒

#### 5️⃣ 缺少库文件
某些Windows系统可能缺少必要的库。可以通过从[微软官网](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist)安装64位VC++再发行版来修复。建议在更新图形驱动程序后执行此操作，然后安装AI Playground

#### 6️⃣ Python冲突
某些装有现有Python环境的PC可能与AI Playground安装冲突，导致因系统中Python的版本或位置不正确而安装错误或冲突的包。通常可以通过卸载Python环境、重启系统然后重新安装AI Playground来解决

#### 7️⃣ 临时文件
如果因以上任何问题导致安装中断，可能会留下临时安装文件，在这些文件存在的情况下尝试安装会阻止安装进行。删除这些文件或执行AI Playground的全新安装以解决此问题

---

## 项目开发

### 检出源代码

开始之前，克隆仓库并导航到项目目录：

```cmd
git clone -b dev https://github.com/intel/AI-Playground.git
cd AI-Playground
```

### 安装 Node.js 依赖项

1. 从 [Node.js官网](https://nodejs.org/en/download) 安装Node.js开发环境

2. 导航到 `WebUI` 目录并安装所有Node.js依赖项：

```cmd
cd WebUI
npm install
```

### 获取外部资源

在 `WebUI` 目录中，执行 `fetch-external-resources` 脚本下载所需的外部资源：

这将把 `uv`（Python包管理器）和其他必需工具下载到 `build/resources/` 目录

### 启动应用程序

以开发模式运行应用程序，执行：

```
npm run dev
```

### （可选）构建安装程序

要构建安装程序，运行：

```
npm run build
```

安装程序可执行文件将位于 `build/electron` 文件夹中

---

## 模型支持

AI Playground不预装任何生成式AI模型，但可以通过应用程序界面直接提供模型，或用户可以从HuggingFace.co或CivitAI.com下载模型并将其放在相应的模型文件夹中来间接提供模型。

**应用程序当前链接的模型请参考模型注册表**

> 请确保检查在AI Playground中使用的任何模型的许可证条款，特别要注意任何限制

### 使用其他模型

查看[用户指南](https://github.com/intel/AI-Playground/blob/main/AI%20Playground%20Users%20Guide.pdf)了解详情，或[观看此视频](https://www.youtube.com/watch?v=1FXrk9Xcx2g)了解如何向AI Playground添加其他Stable Diffusion模型

---

## 本地服务访问地址

运行AI Playground时，多个后端服务会在本地启动。以下是它们的地址和端口信息：

### 活动服务端口

| 服务 | 本地地址 | 端口 | 说明 |
|------|--------|------|------|
| **AI后端（聊天/LLM）** | `http://localhost:59000` | 59000 | 主要的LLM推理服务，用于聊天功能 |
| **ComfyUI后端** | `http://localhost:49350` | 49350 | 图像生成服务 |
| **辅助后端** | `http://localhost:49351` | 49351 | OpenVINO或Llama.cpp推理服务 |

### API 调用示例

**检查聊天服务健康状态：**
```bash
curl http://localhost:59000/healthy
```

**检查图像生成服务健康状态：**
```bash
curl http://localhost:49350/healthy
```

所有后端服务仅在本地可访问，确保数据隐私和安全。

---

**祝你使用愉快！** 🚀


AI Playground's exact local URLs:

Active Service Ports
Service	URL	Port	Process ID
AI Backend (Chat/LLM)	http://localhost:59000	59000	11168
ComfyUI Backend	http://localhost:49350	49350	25332
Secondary Backend	http://localhost:49351	49351	12028
Using the APIs
For Chat API calls:

For Image Generation (ComfyUI):

The three active ports are:

59000 — Your main LLM/Chat inference service
49350 — ComfyUI image generation service
49351 — Secondary backend (OpenVINO or Llama.cpp)
You can test these with a quick health check:

