# ForAgent

展示 Agent Skills 和 Agent Tools 的前端站点。

## Tech Stack

- Vite
- React 19
- React Router
- TypeScript
- Tailwind CSS 4
- HeroUI 3
- Cloudflare Workers

## 本地开发

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
```

## 部署到 Cloudflare Workers

```bash
npm run cf:deploy
```

当前部署配置在 [wrangler.toml](./wrangler.toml)。

## 修改项目数据

项目列表数据在 [src/data/tools.json](./src/data/tools.json)。

每个项目一条记录，示例：

```json
{
  "name": "talkless",
  "description": "让 AI 输出更简洁、直接、少废话的工具。",
  "tags": ["Concise Writing", "CLI", "Local Skill"],
  "frameworks": ["Python", "CLI", "Skill"],
  "githubUrl": "https://github.com/adfoke/talkless"
}
```

## 目录

```text
src/
  components/
  config/
  data/tools.json
  pages/
  App.tsx
  main.tsx
```
