# 🎭 MES-AI - Character-Based AI Chatbot

<div align="center">
  
  ![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
  ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
  ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-38B2AC?style=for-the-badge&logo=tailwind-css)
  ![Ollama](https://img.shields.io/badge/Ollama-Powered-green?style=for-the-badge&logo=ollama)
  ![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)
  
  <h3>Chat with your favorite characters powered by local AI</h3>
  
  [Demo](#) • [Report Bug](https://github.com/yourusername/mes-ai/issues) • [Request Feature](https://github.com/yourusername/mes-ai/issues)
  
  <img src="/public/assets/demo-screenshot.png" alt="MES-AI Demo" width="600"/>
  
</div>

---

## 📋 Table of Contents
- [About The Project](#-about-the-project)
- [✨ Features](#-features)
- [🎪 Available Characters](#-available-characters)
- [🛠️ Built With](#️-built-with)
- [🚀 Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
- [🎮 How to Use](#-how-to-use)
- [📁 Project Structure](#-project-structure)
- [🧠 How It Works](#-how-it-works)
- [🎨 Adding New Characters](#-adding-new-characters)
- [🌐 Deployment Options](#-deployment-options)
- [🤝 Contributing](#-contributing)
- [📝 License](#-license)
- [📧 Contact](#-contact)
- [🙏 Acknowledgments](#-acknowledgments)

---

## 🎯 About The Project

**MES-AI** is a unique character-based AI chatbot that lets you have meaningful conversations with different personalities - from the energetic ninja Naruto to the wise philosopher Socrates. Built with Next.js and powered by Ollama, it runs completely locally on your machine, ensuring privacy and zero API costs.

The project demonstrates:
- 🎭 **Character-specific AI personalities** with unique response styles
- 💬 **Real-time streaming responses** for natural conversations
- 🎨 **Beautiful, responsive UI** with TailwindCSS
- 🔒 **100% local and private** - no data leaves your computer
- 🚀 **Easy deployment options** from local to cloud

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| **🎭 Multiple Characters** | Chat with Naruto, Socrates, or The Tramp |
| **💬 Real-time Streaming** | See responses appear word-by-word |
| **🎨 Beautiful UI** | Clean, modern design with custom scrollbars |
| **📱 Fully Responsive** | Works on desktop, tablet, and mobile |
| **🔄 Easy Character Switching** | Change characters mid-conversation |
| **⚡ Fast Performance** | Optimized with Next.js App Router |
| **🔒 100% Private** | All processing done locally with Ollama |
| **🎯 Character Memory** | Each character remembers your conversation |
| **⌨️ Keyboard Shortcuts** | Enter to send, Shift+Enter for new line |

---

## 🎪 Available Characters

<div align="center">
  
| Character | Emoji | Personality | Speech Style | Color |
|-----------|-------|-------------|--------------|-------|
| **Naruto Uzumaki** | 🍜 | Energetic, determined, loyal | "Believe it!", loves ramen, never gives up | `bg-orange-500` |
| **Socrates** | 🏛️ | Wise, questioning, humble | Socratic method, philosophical questions | `bg-blue-700` |
| **The Tramp** | 🎩 | Kind-hearted, poetic, dignified | Warm wisdom, gentle humor, simple truths | `bg-gray-700` |

</div>

### Sample Conversations:

<details>
<summary>🗣️ With Naruto</summary>

> **User:** What's your dream?
> 
> **Naruto:** Believe it! I'm going to become Hokage someday! The villagers will finally acknowledge me, and I'll protect everyone, just like the previous Hokage! Want to grab some ramen at Ichiraku while we talk about it? Dattebayo!

</details>

<details>
<summary>🗣️ With Socrates</summary>

> **User:** What is wisdom?
> 
> **Socrates:** An excellent question, my friend. But tell me, do you think a person who knows many things is wise? Or is there something more to wisdom than mere knowledge? Consider this: I am called wise, yet I know that I know nothing. Is that not the beginning of wisdom?

</details>

<details>
<summary>🗣️ With The Tramp</summary>

> **User:** How do you stay so happy?
> 
> **The Tramp:** Happiness, my friend, is like a small flower growing through the cracks in the pavement. It finds a way, even in the hardest places. I've learned that a smile costs nothing, but it can light up someone's entire day. Even with empty pockets, one can have a heart full of dreams.

</details>

---

## 🛠️ Built With

- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[TailwindCSS](https://tailwindcss.com/)** - Styling
- **[Ollama](https://ollama.com/)** - Local LLM runner
- **[Llama 3.2](https://ollama.com/library/llama3.2)** - Base language model

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js 18+** 
  ```bash
  node --version
  npm install
# or
yarn install

🦙 Setting Up Ollama (Step-by-Step)
Step 1: Install Ollama
<details> <summary><b>Windows Installation</b></summary>
Go to ollama.com/download

Download the Windows installer (OllamaSetup.exe)

Run the installer and follow the prompts

Ollama will automatically start and run in your system tray

https://ollama.com/public/assets/ollama-windows-tray.png

</details><details> <summary><b>Mac Installation</b></summary>
Option A: Download Installer

Go to ollama.com/download

Download the Mac installer

Move Ollama to your Applications folder

Run Ollama from Applications
