# SNH48 Multi-Agent Companion

SNH48-themed multi-agent starter with tabbed single-turn chat (Next.js). Routes questions to specialized agents: data intel, history lookup, and mood companion.

## Quick Start
```bash
pnpm install   # or npm install
pnpm dev       # or npm run dev
# open http://localhost:3000
```

## Stack
- Next.js + React (JavaScript)
- Minimal API routes for agent routing
- Local JSON datasets for members & timelines

## Features
- Tabbed chat UI: each tab = SNH48 sub-agent (情报官 / 历史官 / 心情助手 / 应援策划等示例) with single-turn replies.
- Data情报官: simple Q&A/comparisons on公开成员数据（生日、队伍、基础应援示例等）.
- 历史记录官: keyword + semantic search over本地时间线数据（总选/公演/应援事件），回答“某年某成员的重要事件”.
- 情绪陪伴助手: 温和建议，常识+科普，明确“非专业医疗/心理诊断”声明.
- Basic router: rule/keyword-based dispatch to best-fit agent via Next.js API.

## Endpoints
- `GET /api/health` — liveness check
- `POST /api/chat` — `{ message, agentHint? }` → routes to sub-agent and returns reply
- `GET /api/data/members` — sample members dataset
- `GET /api/data/timeline` — sample events/timeline dataset

## TODO
- [MUST] Tabbed single-turn chat UI for SNH48 sub-agents (成员情报官/应援策划师/公演日程助理等).
- [MUST] 数据情报官：公开成员数据驱动的问答与对比分析.
- [MUST] 历史记录官：本地示例数据的关键词+语义检索，回答“某年某成员的重要事件”.
- [MUST] 情绪陪伴助手：饭圈心情支持，附非专业声明.
- [MUST] 基础多Agent编排：根据问题自动路由到情报官/历史官/情绪陪伴.
- [OPTIONAL] 时间线可视化组件，联动历史检索高亮.
- [OPTIONAL] 成员卡片视图（按成员/队伍过滤、标签、快捷对话入口）。
- [OPTIONAL] 轻量应援计划建议（生日/活动节点，非商业化创意）。
- [OPTIONAL] 收藏/书签回答并由历史官可检索。
- [OPTIONAL] 多语言基础支持（中文主，附英文简答）。

## Notes
- 仅使用公开合规数据，避免隐私与版权风险。
- 情绪类回答需重复强调非专业医疗，必要时建议寻求专业帮助。
- 聚焦信息整理、情绪陪伴与文化科普，避免引导高强度消费。
