ForAgent.cc 项目文档（白色简洁版）
版本：1.2（白色简洁版）
日期：2026 年 3 月
作者：项目发起人（根据您最新要求更新）
域名：foragent.cc
1. 项目概述
ForAgent.cc 是一个极简单单页面网站，专为 AI Agent 开发者提供“工具与技能”展示平台。
主题不变：收集各种可直接用于 Agent 的 Tools / Skills（API Wrapper、Prompt 模板、浏览器工具、向量数据库集成等）。
核心理念保持不变，但一切极简 + 白色风格：
一个页面搞定所有展示，您直接把已开发好的 GitHub 项目链接放上去即可。
不再有任何暗黑模式，采用纯白色简洁风格，清爽、专业、像官方文档一样干净。
2. 项目目标（简化后）

一站式展示您的 Agent 工具集合
访客一眼就能看到每个工具的 GitHub 链接、简单描述、兼容框架
您只需编辑一个 JSON 文件，就能把新项目链接加上去
MVP 目标：1 天内本地跑起来，3 天内部署上线

3. 目标用户
不变（AI Agent 开发者、Prompt 工程师等），网站现在是纯展示型，白色风格更适合专业开发者阅读。
4. 核心功能特性（极简版）
全部都在一个单页面（SPA）内完成：

Hero 区：大标题 “ForAgent.cc – Agent 的工具箱” + 搜索框（实时过滤工具卡片）
工具展示区：响应式卡片网格
每张卡片包含：
工具名称
一句话描述
标签（LangChain / CrewAI / 浏览器 / 图像 / 记忆 等）
GitHub 链接按钮（您直接填自己的仓库地址）
星标数（可选手动填或留空）

底部：提交新工具提示（简单邮件或 GitHub Issue 引导）
无暗黑模式，全程白色背景，清爽到底

没有：

数据库、用户登录、评论、后端
多页面、复杂路由
所有数据直接硬编码在 src/data/tools.json

5. 技术栈（严格按您要求：Vite + 极简）
采用开发人员最常用、最轻量的 Vite 模板：

构建工具：Vite 5 + React 18 + TypeScript
UI：Tailwind CSS 4 + Lucide Icons（零配置，3 分钟出卡片样式）
推荐启动模板（直接 clone）：
Vite 官方 React + TS 模板：
npm create vite@latest foragent-cc -- --template react-ts
然后一键加 Tailwind（官方文档 30 秒）

状态管理：纯 React useState + useEffect
数据存储：单个 tools.json 文件（您把 GitHub 链接写在这里）
搜索：纯前端 JS filter
部署：GitHub Pages / Netlify / Vercel（零配置）

6. 项目结构（超级简单）
textforagent-cc/
├── public/
├── src/
│   ├── components/
│   │   ├── ToolCard.tsx      
│   │   └── Header.tsx
│   ├── data/
│   │   └── tools.json        ← ← ← 您在这里添加 GitHub 链接！
│   ├── App.tsx               ← 唯一主页面
│   └── main.tsx
├── tailwind.config.js
├── vite.config.ts
└── package.json