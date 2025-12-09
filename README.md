# MR - Mission Repo Template

> **E = MC² × AI**

本仓库是 **Mission Repo** 的通用架构模板，旨在构建一个 **AI 增强型任务协作框架**。

在这里，每一个任务（Mission）都被视为一个独立的**数字生命体**，通过与 AI 的深度共生，实现对个体与组织的**赋能 (Empower)**。

同时，本仓库当前正在运行一个具体的 Mission 实例：**创作科幻小说《最后一课》**。

---

## 📐 核心公式 (The Formula)

$$ E = M \times C^2 \times AI $$

这个公式重新定义了数字时代的价值创造逻辑：

| 符号 | 定义 | 核心内涵 | 对应目录 |
|---|---|---|---|
| **E** | **Empower (赋能)** | **价值的终点**。不仅仅是交付物 (Output)，更是对受众的启发、对业务的驱动和对未来的改变 (Impact)。 | `OUTPUT/` |
| **M** | **Mission (使命)** | **价值的起点**。定义我们“要做什么”以及“为什么做”。它是任务的灵魂与血肉。 | `MISSION.md` + `MISSION/` |
| **C¹** | **Connection (连结)** | **协作的神经网络** (TeamsPlane)。连接人与人、人与AI、内网与外网。它是任务的生命线。 | `CONNECTION/` |
| **C²** | **Context (语境)** | **时空的锚点**。明确任务发生的物理环境、历史背景与参与者。没有语境，智能无法生效。 | `CONTEXT/` |
| **AI** | **Intelligence (智能)** | **进化的引擎**。LLM 不再是冷冰冰的工具，而是具备记忆与角色的合作伙伴。 | `AI/` |

---

## 📂 架构拓扑 (Architecture Topology)

MR 架构并非简单的文件夹堆叠，而是一个**分形结构**。它模拟了人类大脑处理复杂任务的机制：左脑负责逻辑与执行 (Mission)，右脑负责连接与感知 (Connection/Context)，前额叶负责决策与调度 (AI)。

```text
MR/
├── MISSION.md             # [M] 任务宣言：定义任务的元数据 (目标、原则、核心价值)
├── README.md              # 架构说明书
├── MISSION/               # [M] 执行内核：任务的实际工作空间 (Workplace)
│   ├── outline/           #     (骨骼：结构与规划)
│   ├── chapters/          #     (血肉：具体内容)
│   ├── docs/              #     (暗影：辅助资料)
│   ├── notes/             #     (草稿：灵感碎片)
│   └── assets/            #     (皮肤：素材资源)
├── CONNECTION/            # [C¹] 连结平面：内外协作的接口
│   ├── Workbench/         #     [工具] 数字化作战室 (VSC, Tools)
│   │   └── Manual/        #         操作手册
│   ├── Workplane/         #     [管道] 基础设施 (Network, API)
│   ├── People/            #     [社交] 利益相关者网络
│   └── World/             #     [物理] 现实世界接口
├── CONTEXT/               # [C²] 语境容器：为 AI 提供的高维上下文
│   ├── Players/           #     [Who] 角色画像
│   ├── Story/             #     [Why] 背景叙事
│   └── Times/             #     [When/Where] 时空约束
├── AI/                    # [AI] 智能中枢：Copilot 的大脑扩展
│   ├── LLM/               #     模型配置
│   ├── Prompts/           #     提示词工程
│   ├── MCP/               #     工具协议
│   ├── Agents/            #     数字员工
│   └── Memory/            #     长期记忆
└── OUTPUT/                # [E] 赋能交付：价值的具象化
    ├── Web/               #     交互式体验
    ├── Doc/               #     标准化文档
    └── Media/             #     多媒体内容
```

---

## 🚀 核心价值：E系数 (Empower-Factor, AI赋能系数)

MR 架构的核心目标是探索了传统协作的 **"不可能三角"** (快、好、省无法兼得)，通过 AI 带来的 **零边际成本**，实现相对于传统专家团队 (Baseline) 的**倍增效应**。

我们定义 **Baseline** 为一支标准的优秀人类团队（E-Team）在现有资源下所能做出的**承诺（Commitment）**。

| 维度 (Axis) | 传统模式 (Baseline: 1.0) | MR 架构 (Empower) | 推力计算 (Thrust) |
|---|---|---|---|
| **💎 品质 (Quality)**<br>*(Y轴: 交付高度)* | **主观承诺**<br>基于 E 队的能力上限叫牌。<br>*(例: 承诺一篇合格的公文)* | **客观影响力**<br>基于外部客观数据（阅读量、通过率）的超额交付。<br>*(例: 实际上热搜的爆款)* | **🚀 Impact ↑**<br>*(实际效果 / 承诺预期)* |
| **⚡ 速度 (Speed)**<br>*(X轴: 交付周期)* | **线性工时**<br>受限于人类生理极限与协作摩擦。<br>*(例: 历史平均需 5 天)* | **瞬时响应**<br>以 Deadline 为锚点，通过并发生成极致压缩周期。<br>*(例: 4小时完成初稿)* | **🚀 Velocity ↑**<br>*(历史工时 / 实际工时)* |
| **💰 成本 (Cost)**<br>*(Z轴: 资源投入)* | **市场公允价**<br>包含人力薪资、机会成本与沟通损耗。<br>*(例: 市场稿费 ¥3000/篇)* | **边际成本**<br>仅包含 Token 消耗与少量的人类微调精力。<br>*(例: 算力成本 ¥30/篇)* | **🚀 Efficiency ↑**<br>*(市场价格 / 实际成本)* |

> **推力公式**: $\vec{T} = \langle \text{Quality}_{gain}, \text{Speed}_{gain}, \text{Cost}_{saving} \rangle$

### 🗣️ 一分钟读懂 "E系数" (The Elevator Pitch)

如何向他人通俗解释 MR 架构的威力？请记住这个 **"E队对比法"**：

假设你雇佣了一支标准的**专家团队 (E-Team)** 来执行任务：

1.  **比品质 (Quality)**：E队承诺做个“及格品”，MR 帮你做成了**“爆款”**。*(超预期)*
2.  **比速度 (Speed)**：E队要磨 **5天** 的活，MR **4小时** 搞定。*(快10倍)*
3.  **比成本 (Cost)**：E队报价 **3000元**，MR 只要 **30元** 算力费。*(省100倍)*

**E系数 (赋能比)**，就是这三笔账算下来的**综合战斗力倍数**。它代表了你不再是一个人战斗，而是一个拥有无限杠杆的**超级个体**。

---

## 🎯 当前任务 (Current Mission)

本仓库目前正在执行 **MR-001** 号任务。

*   **任务名称**: **《最后一课》 (The Last Lesson)**
*   **核心问题**: "当 AI 掌握了所有知识，人类还需要老师吗？"
*   **赋能系数**: $\mathcal{E} \approx 20.0 \times$ (综合推力评估)
*   **执行状态**: 🟢 **已完成 (Mission Accomplished)**
*   **交付成果**:
    *   📖 **小说**: 4章完整版 (含大纲与设定)
    *   🎧 **有声书**: AI 情感化朗读 (MP3)
    *   🌐 **Web**: 沉浸式阅读体验站
*   **详细看板**: 请参阅 [MISSION.md](MISSION.md) 获取实时仪表盘与 ROI 分析。

---

## 🚀 模板使用指南 (User Guide)

如果你想使用此模板启动一个新的 Mission（如写论文、备演讲、开发项目），请遵循以下步骤：

### 1. 初始化 (Initialization)
*   **Fork** 本仓库或下载源码。
*   保留 `AI/`, `CONNECTION/`, `CONTEXT/`, `OUTPUT/` 四大框架目录。
*   清空 `MISSION/` 目录下的示例内容（小说章节）。
*   清空 `OUTPUT/` 目录下的示例产出。

### 2. 定义 Mission (M)
*   修改 `MISSION.md`，明确你的任务目标、负责人和截止日期。
*   在 `MISSION/` 下建立适合你任务的子目录：
    *   **论文任务**: `MISSION/drafts/`, `MISSION/data/`, `MISSION/references/`
    *   **演讲任务**: `MISSION/script/`, `MISSION/slides/`, `MISSION/rehearsal/`
    *   **开发任务**: `MISSION/src/`, `MISSION/tests/`, `MISSION/docs/`

### 3. 配置 Context (C²)
*   进入 `CONTEXT/` 目录，更新以下信息以帮助 AI 理解背景：
    *   `Players/README.md`: 谁在参与？
    *   `Story/README.md`: 为什么做这个任务？
    *   `Times/README.md`: 当前的时间、地点和约束条件是什么？

### 4. 建立 Connection (C¹)
*   进入 `CONNECTION/Workbench/`，配置你的 VS Code 环境。
*   阅读 `CONNECTION/Workbench/Manual/` 中的手册，熟悉协作规范。

### 5. 激活 AI (AI)
*   在 `AI/LLM/` 中确认你使用的模型策略。
*   在 `AI/Memory/preferences.md` 中记录你的个人偏好。
*   使用 `.github/copilot-instructions.md` 激活全局指令。

---

> **Mission Repo** —— 让每一个任务都有迹可循，让每一次创作都有 AI 相伴。
