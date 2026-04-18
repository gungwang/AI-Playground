# Gungwang AI Playground

Download Windows 11 installation file: 
https://github.com/gungwang/AI-Playground/releases/download/3.2.1/Gungwang.AI.Playground-3.2.1.exe

Welcome to **Gungwang AI Playground** - A customized, unrestricted local AI generation suite built on Intel's AI Playground. This is your offline alternative to cloud-based AI tools with **no content restrictions**, perfect for creative professionals and AI enthusiasts.

![Gungwang AI Playground Interface](./Gungwang-AiPlaygound-3.2.0.beta.png)

## 🎯 What's Different in Gungwang Edition?

### Key Customizations (v3.2.1)

✅ **NSFW Content Unrestricted** - Generate any content without safety filters  
✅ **No Upload Required** - Everything runs 100% locally on your PC  
✅ **Zero Cloud Dependency** - Complete offline operation  
✅ **Open Source** - Fully modifiable for your needs  
✅ **Free & Private** - No subscriptions, no data collection  

### What We Changed

1. **Disabled NSFW Safety Filter**
   - Removed SafetyChecker blocking
   - Backend now accepts all generated images
   - Frontend no longer shows "NSFW Result Blocked" overlay
   - **Files modified:** `comfyui-deps/custom_nodes/SafetyChecker/nodes.py`, `WebUI/src/views/WorkflowResult.vue`

2. **Version Bump to 3.2.1**
   - Updated from 3.2.0-beta
   - Package.json, Package-lock.json, readme.md updated
   - Download links point to v3.2.1 release

3. **Enhanced Documentation**
   - Added local service URL reference
   - Local API endpoints documented
   - Debug port configured: `29222`

---

## 🚀 Features

### 💬 Advanced Chat
- **Models:** Gemma4, Qwen3.5, Qwen3 VL, Mistral 7B, DeepSeek R1, GPT-OSS 20B
- **Vision:** Real-time image analysis
- **Reasoning:** Complex problem solving with chain-of-thought
- **RAG:** Document-based knowledge retrieval

### 🎨 Image Generation & Editing
- **Models:** Stable Diffusion 1.5, SDXL, Flux.1, Z-Image, Wan2.1 VACE, LTX-Video
- **Features:** Upscaling, inpainting, outpainting, 2D→3D conversion
- **No Restrictions:** Generate any style or content

### 📊 Document Intelligence
- PDF/text analysis
- Multi-document comparison
- Knowledge extraction

---

## 📋 System Requirements

| Component | Requirement |
|-----------|------------|
| **OS** | Windows 10/11 |
| **CPU** | Intel Core Ultra (Series 1H, 2V, 2H, 3) |
| **GPU** | Intel Arc GPU Series A/B (8GB+ vRAM) |
| **RAM** | 16GB+ recommended |
| **Storage** | 50GB+ for models |

---

## 🔧 Local API Endpoints

When running, the following services are available locally:

| Service | URL | Port | Purpose |
|---------|-----|------|---------|
| **LLM Chat** | `http://localhost:59000` | 59000 | Chat & text inference |
| **Image Generation** | `http://localhost:49350` | 49350 | Image generation (ComfyUI) |
| **Secondary Inference** | `http://localhost:49351` | 49351 | Alternative backends |

### Health Check

```bash
# Check if services are running
curl http://localhost:59000/healthy
curl http://localhost:49350/healthy
```

---

## 📸 Demo: No Restrictions

See the power of unrestricted generation:

![No NSFW Restrictions](./No-restriction_2026-04-18_13-30-13.png)

*Generated without safety filters - full creative freedom*

---

## 💻 Getting Started

### 1. Installation
Download and install from: [AI Playground v3.2.1 Installer](https://github.com/intel/AI-Playground/releases)

### 2. First Run
- App will guide you through backend component setup
- Requires internet for initial model downloads
- Setup takes 5-15 minutes on first launch

### 3. Start Creating
- Open AI Playground
- Select your model (chat, image, video)
- Generate with **zero restrictions**

---

## 🛠️ Development Setup

### For Debugging & Development

```bash
cd WebUI
npm install
npm run dev
```

This enables:
- Hot module reloading (changes auto-apply)
- Chrome DevTools debugging (Ctrl+Shift+I)
- Full source maps for TypeScript

### Backend Services

Python backends start automatically with `npm run dev`:
- **Port 59000**: LLM inference service
- **Port 49350**: ComfyUI image generation
- **Port 49351**: Secondary inference engine

---

## 📝 Changelog - Gungwang Edition

### v3.2.1
- ✅ Disabled NSFW safety filter completely
- ✅ Removed "NSFW Result Blocked" overlay
- ✅ Version bump from 3.2.0-beta
- ✅ Added local API documentation
- ✅ Enhanced Chinese README (README.ZH.md)

### v3.2.0 (Base from Intel)
- Foundation: Intel AI Playground
- Multiple LLM backends (GGUF, OpenVINO)
- Image generation (Stable Diffusion, SDXL, Flux)
- Vision capabilities (Qwen VL)
- Video generation (LTX-Video)

---

## 🔒 Privacy & Security

- **100% Local** - No data leaves your PC
- **Offline First** - Works completely disconnected after initial setup
- **No Cloud Calls** - All inference happens on your hardware
- **Open Source** - Full code transparency
- **Your Data** - Complete privacy guaranteed

---

## 🛠️ Technology Stack

| Component | Technology |
|-----------|-----------|
| **Frontend** | Vue 3, TypeScript, Tailwind CSS |
| **Desktop** | Electron |
| **LLM Engines** | Llama.cpp, OpenVINO, GGUF |
| **Image Gen** | ComfyUI, PyTorch, Diffusers |
| **Backend** | Python, Flask/FastAPI |

---

## 📚 Resources

- **[User Guide](https://github.com/intel/AI-Playground/blob/main/AI%20Playground%20Users%20Guide.pdf)** - Complete documentation
- **[Original Intel Repo](https://github.com/intel/AI-Playground)** - Base project
- **[Model Registry](https://huggingface.co/)** - Available models
- **[Gungwang Branch](https://github.com/gungwang/AI-Playground/tree/dev.2)** - This customized version

---

## 🤝 Contributing

Found an issue or have improvements? 
- Fork the repo
- Create a feature branch
- Submit a pull request

---

## ⚖️ License

This project maintains the same license as Intel AI Playground. See [LICENSE](./LICENSE) for details.

Model licenses vary - always check before use in production.

---

## 💡 Tips & Tricks

### For Best Performance:
1. Use **SDXL or Flux** for high-quality images
2. Use **Qwen3.5** for balanced chat performance
3. Enable **reasoning models** (DeepSeek R1) for complex queries
4. Generate at **512x512** first, then upscale

### For Video Generation:
1. Use **LTX-Video** model
2. Keep prompts descriptive but concise
3. Video generation is slower - be patient

### Common Issues:
- **Slow first run:** Models are downloading, this is normal (10-30 min)
- **GPU not detected:** Update Intel Arc drivers
- **Memory errors:** Reduce image resolution or use lower-tier models

---

**Made with ❤️ by Gungwang**  
*Unrestricted. Local. Free.*

---

**Last Updated:** April 18, 2026  
**Version:** 3.2.1  
**Status:** Stable
