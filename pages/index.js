```js
import { useState } from "react";

const tabs = [
  { key: "chat", label: "情绪陪聊", desc: "粉丝视角的共情聊天 (非专业心理咨询)" },
  { key: "analyst", label: "AnalystAgent", desc: "基于公开数据的轻量洞察与可视化说明" },
  { key: "journal", label: "JournalHistorian", desc: "粉丝日记/观演记录的关键词+语义检索" },
  { key: "support", label: "应援规划", desc: "活动与应援计划草案" }
];

export default function Home() {
  const [activeTab, setActiveTab] = useState(tabs[0].key);
  const [input, setInput] = useState("");
  const [log, setLog] = useState([]);

  async function sendMessage() {
    if (!input.trim()) return;
    try {
      const res = await fetch("/api/agent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input, tab: activeTab })
      });
      const data = await res.json();
      setLog((prev) => [...prev, { role: "user", text: input }, { role: data.agent, text: data.response }]);
      setInput("");
    } catch (err) {
      // TODO: Add better error UI/telemetry (avoid storing personal data unnecessarily).
      console.error(err);
    }
  }

  function handleKey(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  return (
    <main className="container">
      <h1>SNH48 多Agent Playground</h1>
      <p className="note">
        Demo 仅供粉丝娱乐与信息参考，非医疗/紧急求助渠道；个人信息最小化收集，可按需删除会话记录。
      </p>

      <div className="tabs">
        {tabs.map((t) => (
          <button
            key={t.key}
            className={t.key === activeTab ? "tab active" : "tab"}
            onClick={() => setActiveTab(t.key)}
          >
            <div>{t.label}</div>
            <small>{t.desc}</small>
          </button>
        ))}
      </div>

      <div className="chat">
        <div className="log">
          {log.map((item, idx) => (
            <div key={idx} className={`bubble ${item.role === "user" ? "user" : "agent"}`}>
              <strong>{item.role}:</strong> {item.text}
            </div>
          ))}
          {log.length === 0 && <div className="placeholder">选择上方 Tab 并发送你的 SNH48 想法吧！</div>}
        </div>
        <div className="inputBar">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKey}
            placeholder="输入与你的SNH48相关问题或日记片段..."
          />
          <button onClick={sendMessage}>发送</button>
        </div>
      </div>

      <style jsx>{`
        .container {
          max-width: 900px;
          margin: 0 auto;
          padding: 24px;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }
        h1 {
          margin-bottom: 8px;
        }
        .note {
          color: #555;
          margin-bottom: 16px;
        }
        .tabs {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 8px;
          margin-bottom: 16px;
        }
        .tab {
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 8px;
          background: #fff;
          text-align: left;
          cursor: pointer;
        }
        .tab.active {
          border-color: #7c3aed;
          box-shadow: 0 0 0 2px rgba(124, 58, 237, 0.15);
        }
        .tab small {
          color: #666;
        }
        .chat {
          border: 1px solid #eee;
          border-radius: 12px;
          padding: 12px;
          background: #fafafa;
        }
        .log {
          min-height: 220px;
          max-height: 360px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding: 8px;
          background: #fff;
          border: 1px solid #eee;
          border-radius: 8px;
        }
        .bubble {
          padding: 8px 10px;
          border-radius: 8px;
          background: #f1f5f9;
        }
        .bubble.user {
          align-self: flex-end;
          background: #e0f2fe;
        }
        .bubble.agent {
          align-self: flex-start;
          background: #eef2ff;
        }
        .placeholder {
          color: #999;
          text-align: center;
          padding: 24px 0;
        }
        .inputBar {
          display: flex;
          gap: 8px;
          margin-top: 12px;
        }
        textarea {
          flex: 1;
          min-height: 60px;
          padding: 8px;
          border-radius: 8px;
          border: 1px solid #ddd;
          resize: vertical;
        }
        button {
          width: 100px;
          border: none;
          border-radius: 8px;
          background: #7c3aed;
          color: white;
          font-weight: 600;
          cursor: pointer;
        }
        button:hover {
          background: #6d28d9;
        }
      </style>
    </main>
  );
}
```
