# MR - Mission Repo: 3Days (三日)

> E = MC² × AI

**这个仓库是一次 MR（Mission Repo）框架的探索与游戏化实践**：
- 用“创作小说《三日》”这一 Mission，来验证、打磨 MR 的方法论与目录组织。
- 目标是让人类与 AI 在统一的上下文中高效协作、可交付、可复用。

---

## 🎮 项目定位（MR 框架的探索）
- 性质：框架验证 + 创作实践（Game-like）
- 方式：以明确的 Mission 驱动（小说《三日》），贯穿调研、设定、写作、发布全流程。
- 结果：既产出小说实体（MD/PDF/EPUB 与网站），也沉淀一套可复制的 MR 使用指南与结构改进建议。

---

## 📚 使用指南（How to Use This Repo）
- 启动任务：
	- 阅读 `MISSION.md` 了解目标与验收标准。
	- 在 `MISSION/outline/` 查看主大纲与角色档案，进入创作场景。
- 写作与资料：
	- 在 `MISSION/chapters/` 按章节推进；事实引用前，先查阅 `MISSION/docs/`（历史/商业调研）。
	- 需要新事实时，补充到 `MISSION/docs/` 并引用来源（保持“唯一事实源”）。
- 协作与上下文：
	- 共同语境在 `CONTEXT/`（Players/Story/Times），保持可读与可维护。
	- 协作操作与工具在 `CONNECTION/Workbench/`（Manual、tools）。
- 交付与发布：
	- 整合版位于 `docs/3Days.md`、`docs/3Days.pdf`、`docs/3Days.epub`；网站首页为 `docs/index.html`。
	- 启用 GitHub Pages（Settings → Pages → Branch: main, Folder: /docs）。

---

## 🗂 目录结构（当前）
```text
MR/
├── MISSION.md
├── README.md
├── MISSION/
│   ├── outline/              # 大纲、人设
│   ├── chapters/             # 正文
│   ├── docs/                 # 调研与事实库
│   └── assets/               # 素材
├── CONNECTION/               # 协作与工具
├── CONTEXT/                  # 语境与角色
├── AI/                       # 智能辅助
└── docs/                     # 站点与整合交付（GitHub Pages）
```

---

## 🚀 快速开始（Quick Start）
- 阅读大纲：`MISSION/outline/3Days_Outline.md`
- 看正文：`MISSION/chapters/`
- 查事实：`MISSION/docs/`
- 发布网站：启用 Pages 后访问站点；下载整合版见网站页脚或 `docs/` 目录。

---

## 🧭 MR 框架（简述）
- 公式：$E = M \times C^2 \times AI$
- 含义：
	- M（Mission）：目标与交付物、验收标准清晰可见（`MISSION.md`）。
	- C¹（Connection）：人-人/人-AI 的协作通道与工具（`CONNECTION/`）。
	- C²（Context）：可共享、可维护的项目语境（`CONTEXT/`）。
	- AI（Intelligence）：作为团队成员参与创作与校对（`AI/` 与 Copilot 指令）。

---

## 🛠 来自 GitHub 实践的 MR 修订建议（结构级）
- 建议 1：将“最终交付”统一落在 `docs/`（站点 + 下载）
	- 变更：`OUTPUT/` 的对外交付迁移到 `docs/`，保持 Pages 一致入口。
	- 受益：发布路径一致、Raw/CDN 与站点直链统一。
- 建议 2：在 `MISSION/docs/` 建立“事实索引”与“引用规范”
	- 新增：`MISSION/docs/README.md` 中加入“主题索引 + 引用约束（示例）”。
	- 受益：事实维持唯一来源，避免散落与重复。
- 建议 3：为协作工具建立“任务模板”
	- 新增：`CONNECTION/Workbench/templates/`（Issue/PR/Release/Research 模板）。
	- 受益：操作标准化，提高复用性与可移植性。
- 建议 4：在 `CONTEXT/` 增加“维护策略”与“版本标识”
	- 新增：`CONTEXT/README.md` 增设“语境版本（vX.Y）与更新日历”。
	- 受益：上下文可演进、可回溯，AI 调用更稳定。
- 建议 5：在 `AI/` 目录下增加“角色剧本”与“测试脚本”
	- 新增：`AI/Agents/roles/`（特定场景的 Prompt 剧本）、`AI/tests/`（事实一致性检查清单）。
	- 受益：AI 行为更可控，提升一致性与质量。

---

## 📎 附：MR 框架描述（摘要）
- 目标：把“隐性认知”外化为组织化资产，让团队与 AI 在统一语境下协作。
- 关键原则：
	- 单一事实源（Single Source of Truth）
	- 任务驱动（Mission-First）
	- 语境持续维护（Context Gardening）
	- 可交付可发布（Delivery-Ready）
- 推荐落地：将对外交付与站点统一在 `docs/`；在 `MISSION/docs/` 建立事实索引与引用约束；把协作模板与指南沉淀到 `CONNECTION/Workbench/`。

