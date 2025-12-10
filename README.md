# SNH48 Multi-Agent Companion

SNH48 主题的多 Agent 应援助手：提供多标签单轮聊天、数据分析、日记回顾与简易应援规划，强调情绪陪伴但不涉医疗诊断。

## Quick Start
```bash
# install
npm install

# dev
npm run dev
# open http://localhost:3000

# build & start
npm run build
npm run start
```

## Features / Endpoints
- Web UI (Next.js):
  - Tabbed single-turn chat：成员情绪陪聊、行程/问答、应援建议等基础对话。
  - Multi-agent router：按意图在信息问答 / 应援规划 / 记忆回顾等子 Agent 间分发。
- AnalystAgent (SNH48 主题)：基于公开数据（出勤、公演、握手/生写信息）做轻量统计与可视化说明。
- JournalHistorian Agent：对粉丝应援日记/观演记录做关键词+语义搜索，帮助回顾与 SNH48 相关记忆。
- Privacy & Compliance：最小化存储个人行程/消费/情绪文本，提供删除机制；不提供医疗诊断或紧急求助。

## TODO
- [MUST] Next.js 多标签单轮聊天 UI（成员情绪陪聊、行程问答、应援建议）。
- [MUST] SNH48 AnalystAgent：公开数据的基础洞察与可视化。
- [MUST] JournalHistorian Agent：粉丝日记/观演记录的关键词+语义搜索。
- [MUST] 简易多 Agent 路由（信息问答 / 应援规划 / 记忆回顾 / 情绪陪伴）。
- [MUST] 隐私与合规：最小化存储+可删除；明确非医疗、非紧急求助。
- [OPTIONAL] 情绪陪伴（Psychologist 风格但非专业咨询）。
- [OPTIONAL] 活动/应援计划生成（按成员偏好与时间预算）。
- [OPTIONAL] 数据可视化组件（公演参与、成员提及频率时间线等）。
- [OPTIONAL] 中英混合问答支持。
- [OPTIONAL] 周报型粉丝行为统计（关键词云、粗粒度情绪分布）。
