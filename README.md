# ForAgent

极简 landing page，用来展示 Agent Skills 和 Agent Tools。

## Tech Stack

- Vite
- React
- TypeScript
- Tailwind CSS 4
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
  "name": "cleanuagent",
  "description": "给 agent 输出降噪的工具。",
  "tags": ["Text Cleaning", "CLI", "Local Skill"],
  "frameworks": ["Python", "CLI", "Skill"],
  "githubUrl": "https://github.com/adfoke/cleanuagent"
}
```

## 目录

```text
src/
  components/
  data/tools.json
  App.tsx
  main.tsx
```
