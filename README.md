# SNH48 Fan Agents Starter

Multi-tab SNH48-themed agents (Analyst / Planner / Historian / Mood Companion) built with Next.js (MVVM-style) for quick demo and iteration.

## Quick Start
```bash
# install
npm install

# dev
npm run dev

# prod build
npm run build && npm start
```
Open http://localhost:3000.

## Features / Screens
- Tabbed single-turn chat UI: each tab is an agent (Analyst, Planner, Historian, Mood Companion) separated by simple routing/state.
- HistorianAgent: keyword search + timeline view over user’s SNH48 notes/records (no semantic search).
- AnalystAgent: user-entered spend/time/attendance → lightweight charts + tips (budget, show planning).
- Psychologist-style Companion: empathetic text replies for fan scenarios; includes clear non-medical disclaimer.
- Base personas & MVVM: shared model logic, UI swap by tab; ready for per-member persona presets.

## TODO
- [MUST] Implement tabbed single-turn chat UI (Next.js, MVVM) with SNH48 agent tabs.
- [MUST] HistorianAgent: keyword search + timeline for user SNH48 notes/records.
- [MUST] AnalystAgent: input spend/time/attendance → simple visualizations and suggestions.
- [MUST] Mood Companion: empathetic replies for fan contexts; show “not professional medical advice”.
- [MUST] Frontend-only multi-agent separation via routing/state (no complex planners).
- [OPTIONAL] Per-member/sub-unit persona presets (same model/logic).
- [OPTIONAL] Activity calendar input; AnalystAgent uses for time/budget hints.
- [OPTIONAL] Weekly “support report” text summary (spend, mood tags, activities).
- [OPTIONAL] Privacy info page (local/simple storage; future GDPR-ready).
- [OPTIONAL] Static SNH48 FAQ / basic Q&A (no large-scale crawling).
