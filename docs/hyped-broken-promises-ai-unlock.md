# 被吹爆但没做到：AI 能否解锁的游戏承诺清单（精简版）

> 调研：游戏行业历史上"宣布时引发极高尖叫度、玩家形成强烈期待、但迄今未兑现"的功能性承诺；剔除纯硬件/性能/画质问题；聚焦"如果有 2025/2026 级前沿 AI 能力是否能解锁"。每条能力轴只保留 3 个最具代表性的 case + 近 2 年 AI 退烧信号。Project Animus vision pitch 设计参考。

## 关于本文

**精简口径**：每条能力轴最多 3 个 case，按以下优先级综合判断——① 近期出现 ② 当年宣发尖叫度 ③ reveal trailer 式视觉演示效果好。完整版（每轴 5–8 个 case + 详细引述）见早期版本快照。

**叠加的退烧分析**：每轴新增"近 2 年的退烧信号"小节——严格口径下只看**体验本身**是否仍被玩家渴望（不看信任问题，不看 AI 技术翻车）。结论：8 轴中 6 轴"欲望仍在"、2 轴"部分退烧"（仅"数量话术"子方向退烧）、0 轴"欲望已退烧"。这意味着大部分饼仍是性感饼，pitch 的真正工作是用现场证据穿透信任退烧，而非回避欲望退烧。

**AI 成熟度图例**：

| 标签 | 含义 |
|---|---|
| 已可演示 | 2025/2026 主流 LLM agent / 世界模型 / 多 agent 系统已能做产品级 demo |
| 前沿但有路径 | 学术或实验室级别可行，产品级稳定性、规模、成本仍是难点 |
| 远期/科学断点 | 缺乏可信工程路径 |

**重要声明**：本文判断"AI 能否解锁"指的是"今天的 AI 能力栈是否在原理上可承担该承诺"，不等于"今天就能商业化交付"。退烧信号尤其要看进——演示≠产品，承诺要算成本。NMS 教训依然有效。


## 目录

1. 活的、可信的 NPC（自主行为/记忆/反应）
2. 动态生成的剧情与任务（非脚本）
3. 活着的世界（NPC 日常生活/动态经济/派系自演化）
4. 世界记得你（持久后果/有意义的选择）
5. 自然语言对话 / 真正能聊的 NPC
6. AI 导演 / 个性化体验调度
7. 真正无限且有深度的程序化内容
8. 涌现式社会/派系战争/玩家间动态
9. 对 AI 游戏 vision pitch 的设计含义
10. AI 必要性审视：哪些轴 AI 没有显著优势

---

## 1. 活的、可信的 NPC（自主行为/记忆/反应）

| 游戏 | 年份 | 当年承诺(1 句话) | 至今仍缺 | AI 解锁路径(1 句话) | 成熟度 |
|---|---|---|---|---|---|
| Project Milo | 2009 | 现场演示玩家可与虚拟男孩自然对话、被识别情绪、被长期记住 | 能跨次会话记住玩家个体、识别情绪、在 20+ 小时关系循环中维持吸引力 | 多模态 LLM + ASR/TTS + 长期记忆向量库，已能稳定支撑当年靠 "cheating" 蒙混过去的对话与情绪反应 | 已可演示 |
| The Elder Scrolls IV: Oblivion (Radiant AI) | 2004-2006 | NPC 有需求与目标、能跨区域自主决策并产生连锁犯罪/经济事件 | 离开玩家视野后世界继续运转、并把背景事件自然转化为玩家可遇情节 | LLM agent + utility planner + 长期记忆，叠加 Smallville/Project Sid 类多 agent 仿真即可演示村镇级涌现 | 已可演示 |
| Hello Neighbor 2 | 2022 | 每个角色由 neural network 驱动，会从全社区玩家行为学习、修改日程、用未预设方式抓玩家 | 玩家能感知到的、基于长期行为模式形成新对抗策略的学习型 AI | 离线强化学习（AlphaStar 谱系）+ 行为克隆 + LLM 作为高层 planner，云端聚合玩家轨迹训练对手模型 | 前沿但有路径 |

Project Milo 是 demo 价值最高的一个：单人场景、对话即玩法、当年卡点恰是 LLM 已解决的部分。Molyneux 2025 年在 Nordic Game 亲口承认："Even though voice recognition now is almost a solved problem, back in those days we solved the problem by cheating. So, when Milo asked you the player a question, we had set that question up to different points, so he knew what sort of answer he'd give."（[VGC 转录](https://www.videogameschronicle.com/news/peter-molyneux-explains-why-his-infamous-kinect-game-project-milo-was-never-released/)）当年那个 trick，正是今天 GPT-4 / Claude 多模态 + 长期记忆栈现成能做的事。

### 近 2 年的退烧信号

经核查，截至 2026 年 6 月未发现该体验本身的欲望退烧证据——玩家依然渴望"NPC 真的活着、有日程、记得你、对你有反应"这种体验。过去两年的负面声音几乎全部集中在"AI 技术翻车"（记忆只撑 10 分钟、对话漂移、生成延迟杀死沉浸）或"厂商做不到"，而非"我们不想要"。反向证据反而很厚：Baldur's Gate 3 因 NPC 反应度被社区推为新标杆，玩家公开要求"每款 RPG 都做到这个程度"（[ScreenRant](https://screenrant.com/baldurs-gate-3-npc-reactivity-benryn-discovery/)）；Kingdom Come Deliverance 2 把"动态 NPC 日程"作为正面卖点宣传并被媒体当作浸入感亮点（[Wccftech](https://wccftech.com/kingdom-come-deliverance-2-dev-talks-about-dynamic-npc-routines-and-emergent-storytelling-for-side-quests/)）；Inworld/ACE 演示中"NPC 记得我前三个任务"被玩家直接形容为 next-level immersion（[ITMunch](https://itmunch.com/ai-npcs-in-gaming-2025/)）。Pitch 仍可放心押此饼。

### 对 vision pitch 的含义

demo 可放心押这条饼——欲望仍在，关键是用现场可观察的证据正面穿透"AI 做不到"的信任退烧：让评审亲眼看到 NPC 在跨场次后准确记起他做过的事、按日程做事、并对他的具体行为给出非脚本反应，而不是只放一段对话 demo。

---

## 2. 动态生成的剧情与任务（非脚本）

| 游戏 | 年份 | 当年承诺 | 至今仍缺 | AI 解锁路径 | 成熟度 |
|---|---|---|---|---|---|
| Starfield | 2022-2023 | 1000+ 可降落行星，每颗都有 Bethesda 招牌的 emergent 探索叙事 | 每颗星球的事件、人物、选择独特性几乎为零，POI 模板反复出现 | LLM 把地形 seed 转成 "这颗星球的历史/居民/秘密"，再用 quest 工具栈实例化 | 前沿但有路径 |
| Watch Dogs: Legion | 2019-2020 | 伦敦每个 NPC 程序化生成完整背景，可招募并扮演，故事与玩家行为产生因果 | NPC 档案无法织进剧情，招募任务是与主线隔离的一次性碎片 | LLM 当 quest writer，把已有 NPC 档案织进招募任务和主线；多 agent 仿真形成可被玩家发现的关系链 | 前沿但有路径 |
| Anthem | 2017-2019 | Freeplay 中 world events 随机改变环境，Cataclysm/Shaper Storm 让每个玩家玩出独特演化叙事 | 世界事件不改变剧情走向，玩家行为不沉淀到世界状态；2026 年 1 月 12 日服务器永久关闭 | director agent 监控玩家聚合数据触发事件并生成叙事 beat（NPC 广播、任务变体、地形 set piece） | 已可演示 |

Starfield 是最有 demo 价值的一条：它的失败粒度恰好是"行星档案"——LLM 输出的天然单位，且 Bethesda Managing Director Ashley Cheng 自己留下了一句官方台阶可被直接对位反驳——"The point of the vastness of space is you should feel small. It should feel overwhelming. Everyone's concerned that empty planets are going to be boring. But when the astronauts went to the moon, there was nothing there. They certainly weren't bored."（[PC Gamer](https://www.pcgamer.com/bethesda-says-most-of-starfields-1000-planets-are-dull-on-purpose-because-when-the-astronauts-went-to-the-moon-there-was-nothing-there-but-they-certainly-werent-bored/)）。Demo 只需在一颗星球上演示 LLM 生成档案 + quest 实例化即可形成尖锐对照。

### 近 2 年的退烧信号

体验本身的欲望仍在，但一个子方向已被玩家拉黑：用程序化堆量（Skyrim 198 个洞窟、Starfield 1000 颗星球、Fallout 4 radiant quests）来兑现"每次都不一样"。PC Gamer 用同一个冰封实验室在三颗星球重复出现作为 Starfield 失败的核心证据，玩家将"copy-pasted jobs"列为 cringe（[PC Gamer](https://www.pcgamer.com/baldurs-gate-3-has-ruined-starfield-for-me/)）。反向证据：BG3 的"让你在世界留下独特印记"成为新标杆，AI Dungeon 的"AI Renaissance"更新后玩家仍明确追捧"co-create a truly unique story"（[AI Apps Review 2025](https://www.aiapps.com/blog/ai-dungeon-review-2025-interactive-storytelling-with-artificial-intelligence/)）。欲望仍在，话术变了。

### 对 vision pitch 的含义

可以押这条饼，但 demo 必须避开"数量话术"（多少星球、多少任务），改演单一场景中"同一情境因玩家而走出不同剧情"的现场对比——观众一看就能感到差异，而不是听承诺。

---

## 3. 活着的世界（NPC 日常生活/动态经济/派系自演化）

| 游戏 | 年份 | 当年承诺 | 至今仍缺 | AI 解锁路径 | 成熟度 |
|---|---|---|---|---|---|
| Cyberpunk 2077 | 2020 | 1000+ NPC 各有手工编写的日程，构成一座按 AI 与自动化原理运转的活体大都市 | 跨日记忆、长期身份、可被玩家长期改变的居民生活；2.x 更新只补了反应性 | 多 agent LLM + 行为蒸馏到小模型，把 NPC 目标—日程—事件循环塞进帧预算 | 前沿但有路径 |
| Star Citizen | 2018–至今 | Quanta 仿真层用数十万 lightweight agent 驱动银河经济，配真正像玩家一样工作的 NPC 船员 | StarSim 与 NPC Crew 均未在 PU 中驱动玩家活动；NPC Crew 已被 CIG 明推到 1.0 之后 | 分层仿真（宏观统计模型 + 关键事件 spawn 具体 agent）+ LLM 上层决策 | 前沿但有路径 |
| Oblivion | 2004–2006 | Radiant AI：给 NPC general goals，让其自行吃饭、睡觉、偷窃、互动 | 目标驱动 + 不让世界崩坏的城市级 NPC 行为；2025 Remastered UE5 套 2006 老逻辑 | utility AI 打分 + LLM 做角色化决策 + 叙事守门员 agent 监控连锁反应 | 前沿但有路径 |

最具 demo 价值的是 Cyberpunk 2077。CDPR 2016 年向波兰政府申报研发资助的原文白纸黑字写明目标是 ["comprehensive technology for the creation of 'live,' playable in real-time, cities of great scale based on the principles of artificial intelligence and automation."](https://techraptor.net/gaming/features/every-unfulfilled-promise-cyberpunk-2077) 这句话视觉化最直接——一条街、白天黑夜两段、同一个 NPC 各自做自己的事——是 reveal trailer 一镜可证的内容，也是分层 LOD 仿真 + LLM agent 最容易跑出第一帧的形态。

### 近 2 年的退烧信号

经核查，截至 2026 年 6 月未发现"活着的世界"这种体验本身的欲望退烧证据——玩家依然渴望此体验，过去两年的负面声音几乎全部集中在"不信厂商能做到"和"AI 系统翻车被迫回滚"，而非"我们不想要 NPC 有自己的人生"。反向证据持续在涌出：inZOI 2025 年 3 月上线一周售出 100 万套、登顶 Steam 全球愿望单与畅销榜，核心卖点就是 Smart Zoi 自主 NPC 系统（[Wikipedia](https://en.wikipedia.org/wiki/InZOI)）；Paradox 砍掉 Life by You 后玩家在官方论坛集体惋惜"该题材太需要竞品"（[VGC](https://www.videogameschronicle.com/news/life-by-you-has-been-cancelled-by-paradox-interactive/)）；媒体年度盘点仍把 KCD、RDR2、AC Mirage 的 NPC 日程作为最高褒义词（[Game Rant 2024](https://gamerant.com/open-world-games-realistic-daily-routine-simulations/)）。Pitch 仍可放心押此饼。

### 对 vision pitch 的含义

可放心押。Demo 重点不是论证"玩家想不想要"——这点市场已用真金白银投票——而是用现场可触证据穿透"信任退烧"：让评审在 5 分钟内亲眼看到非脚本 NPC 在玩家离场后仍按自身动机推进生活，并能回看其轨迹，直接对冲 Life by You / Smart Zoi 留下的"做不出来"印象。

---

## 4. 世界记得你（持久后果/有意义的选择）

| 游戏 | 年份 | 当年承诺 | 至今仍缺 | AI 解锁路径 | 成熟度 |
|---|---|---|---|---|---|
| Cyberpunk 2077（Lifepaths） | 2020 | 三条出身决定夜之城如何对待 V、可走的关系网与剧情线 | Prologue 之后 95% 内容三条出身共用，派系态度、对白色彩、可解锁支线均无结构性差异 | LLM agent 把出身写进 NPC 关系建模与对白 prompt，多 agent 仿真让公司/帮派/游牧对不同出身 V 有不同舆论与开放度 | 已可演示 |
| Mass Effect 3 | 2012 | 三部曲累计选择汇成 state of the galaxy，不是 A/B/C 结局 | 三色结局沿用重用过场，仅滤色不同；Legendary Edition 至 2026 未改 | LLM 读取整套 playthrough 状态向量，多模态生成实时合成属于该线的结局过场与对白 | 已可演示 |
| Skyrim（Radiant Story） | 2011 | 世界会回头指向玩家，NPC 注意并消化玩家做过的事 | NPC 限于硬编码台词与无限刷重复任务模板，不会按具体事件再生成内容 | 给每个 NPC 装一份玩家事件长期记忆（向量检索 + 摘要），按性格 prompt 实时生成对你的台词，城镇层调度让旧事被自然提及 | 已可演示 |

最有 demo 价值的是 Cyberpunk Lifepaths：三条出身在 reveal trailer 中可直接做并列对比镜头——同一 NPC 对 Corpo V、Nomad V、Streetkid V 说不同的话、开放/拒绝不同任务、用不同俚语称呼。CDPR narrative director Igor Sarzyński 2023 年公开承认 lifepaths "goes away a little bit"，Den of Geek 评估"95% of the game will still play out largely the same regardless of which Lifepath is picked"。来源：[TheGamer](https://www.thegamer.com/cyberpunk-2077-sequel-lifepaths-matter-branch-out-more/)。

### 近 2 年的退烧信号

经核查，截至 2026 年 6 月未发现"世界记得你的选择"这一体验本身的欲望退烧证据——玩家依然渴望此体验，过去几年的负面声音几乎全部集中在"不信厂商能做到"或"承诺给月亮只递了石子"，而非"我们不想要这种体验"。反向证据反而很硬：BG3 凭 170+ 结局变体与极致 reactivity 卖出 2000 万份、被业界视为 RPG 新基线（[TechTimes](https://www.techtimes.com/articles/314269/20260124/why-baldurs-gate-3-broke-rpg-industry-player-choice-games-revolution.htm)）；玩家对 Avowed 最尖锐的批评恰是"choices 不够 reactive、世界不够记得我"（[PCGamesN](https://www.pcgamesn.com/avowed/review)、[ResetEra](https://www.resetera.com/threads/avowed-review-thread.1108236/)）——这是供给不足，不是欲望退潮。Pitch 仍可放心押此饼。

### 对 vision pitch 的含义

放心押。难点在穿透信任退烧，不在欲望退烧：demo 必须用现场可触证据展示"我刚做的这件事，多周目后世界结构仍真的不同"——单次会话内塞两个具体记忆回响节点即可压住"又一个 illusion of choice"质疑，把焦点拉回欲望本身。

---

## 5. 自然语言对话 / 真正能聊的 NPC

| 游戏 | 年份 | 当年承诺(1 句话) | 至今仍缺 | AI 解锁路径(1 句话) | 成熟度 |
|---|---|---|---|---|---|
| Project Milo | 2009 | Kinect 配一个 AI 男孩，自由对话、看懂玩家画的画、跨会话记住玩家形成"终身友谊"。 | AAA 规模下对自由语音+图像+手势做联合理解、跨会话记住玩家的伙伴 NPC。 | 实时多模态 LLM + 向量长期记忆 + 情感 TTS 已可复现 demo 每一项能力。 | 已可演示 |
| BioShock Infinite | 2011 | Elizabeth 是真正动态 AI 伙伴，会自己观察环境找机会做酷事、对玩家随机行为合理反应。 | AI 伙伴在开放语境里自发评论玩家行为、参与情境对话、有独立目标。 | LLM agent 驱动 perception→planning→自然语言响应；Inworld、NVIDIA ACE 已 demo 同轴。 | 已可演示 |
| Starfield | 2022 | 25 万行手写对话支撑 1000+ 行星的"活着的宇宙"，说服系统融入对话不像 mini-game。 | AAA 开放世界尺度上不重复、贴合本地文化的 NPC 对话，"活着"的世界。 | LLM 实时生成对话 + 角色档案 prompt + 世界状态注入，替代"预写台词数量竞赛"。 | 已可演示 |

Starfield 最适合作为 demo 对照素材：它把"自然 NPC"赌在数量上而非生成上，结果反向证明了预写路线的尽头。Todd Howard 在 2022 年 10 月 Bethesda Q&A 里给出口径："We've gone back to a classic Bethesda style dialogue, you're looking at the character and how they emote, you have a series of choices there... We just passed 250,000 lines, and so that's a lot of dialogue."（[Pure Xbox](https://www.purexbox.com/news/2022/10/todd-howard-starfield-has-over-250000-lines-of-dialogue)）上线后玩家普遍反映 NPC 死眼、台词循环——25 万行反而成了刻板的证据。

### 近 2 年的退烧信号

经核查，截至 2026 年 6 月未发现该体验本身的欲望退烧证据——玩家依然渴望和 NPC 自由对话，过去两年几乎所有负面声音都集中在"AI 还是像 AI/ChatGPT 穿戏服"的技术翻车，以及"AI 取代真人声优"的劳动伦理（Arc Raiders 被 Eurogamer 打 2/5、Larian 反弹），而非"我们不想跟 NPC 聊天"。Inworld 2025 调研中 99% 玩家相信能聊的 NPC 会改善游戏、81% 愿为此多付费；Skyrim 的 Mantella 玩家反复描述"突然就是在真聊天"、"和角色建立了真实关系"，0.14 版本仍被追更。Pitch 仍可放心押此饼。

参考：[Frisson Labs: It's 2026, where are all the AI NPCs?](https://www.frisson-labs.com/ai-npcs-2026)、[Inworld AI NPCs Survey](https://inworld.ai/blog/future-of-game-development-with-ai-npcs-report)、[Mantella on Nexus Mods](https://www.nexusmods.com/skyrimspecialedition/mods/98631)

### 对 vision pitch 的含义

欲望仍在，demo 可放心押这条饼。现场关键不是说服观众"想不想要"，而是用一段真听得懂、不出戏、不像 ChatGPT 穿戏服的对话，把"AI 还是像 AI"的技术信任问题当场击穿——这是观众真正卡住的点。

---

## 6. AI 导演 / 个性化体验调度

| 游戏 | 年份 | 当年承诺(1 句话) | 至今仍缺 | AI 解锁路径(1 句话) | 成熟度 |
|---|---|---|---|---|---|
| S.T.A.L.K.E.R.: Shadow of Chernobyl | 2002 承诺 / 2024 续作 / 2025.6 1.5 补丁 | A-Life 让 1000+ stalker 在 Zone 里自主生活、玩家不在场也持续推进各自任务 | 全 Zone 持续模拟与 NPC 长期个体记忆仍未达初代营销标准 | LLM agent 给每个 stalker 配长期记忆与目标树，离线 tick 多 agent 仿真推进 | 已可演示 |
| Watch Dogs: Legion | 2019 公布 / 2020 发售 | Play as Anyone：每个 NPC 都是被完整模拟的独立人，可招募并带来独属于他的玩法 | NPC 仍是模板拼接的"轶事工厂"，缺独特人格与玩家交互后的真实改变 | 在 Legion 已有的日程模拟底座上接入 LLM，把模板传记换成结构化人格 prompt + 长期事件记忆 | 已可演示 |
| Fable | 2002–2004 承诺 / 重启 2026 | 对手英雄会在玩家不操作时主动接 NPC 任务、抢走奖励，玩家拖延就输掉荣誉 | 对手英雄完全不会主动接任务，世界长期状态退化为浅层善恶标签 | 给关键 NPC 配轻量记忆体与个性 prompt，多 agent 让世界在玩家不在场时持续推进 | 已可演示 |

Watch Dogs Legion 是最有 demo 价值的那一个：模拟基础设施已经跑通——NPC 真的会回家睡觉、按时通勤、走在路上能被拦截——Ubisoft 创意总监 Clint Hocking 当年自己把这个问题写成 [`"what if every NPC is an open world?"`](https://www.gamedeveloper.com/design/how-watch-dogs-legion-s-play-as-anyone-simulation-works)。卡点是语义层：所有 NPC 共享模板，最终是"一堆带 buff 的 stat block"。Vision pitch 拿 Legion 当 before、把语义层换成 LLM 当 after，对比最直观。

### 近 2 年的退烧信号

经核查，截至 2026 年 6 月未发现"AI 根据你来调度难度/节奏/事件、每次都不一样"这种体验本身的欲望退烧证据——玩家依然渴望它，过去两年的负面声音几乎都集中在"对生成式 AI 替代创作者的反感"和"具体实现穿帮被察觉"，而非"我们不想要这种体验"。反向证据：Quantic Foundry 2025 年 12 月调查指出玩家对 DDA/调度类功能性 AI 的态度明显比创作型 Gen AI 更宽容；Fatshark Vermintide/Darktide AI Director 迭代被社区点赞；L4D 之父 Mike Booth 携 Bad Robot Games 获 Sony 投资继续做 AI Director 驱动的合作射击；Stray Bombay 公开打出"AI Director 2.0"招牌做 The Anacrusis。Pitch 仍可放心押此饼。

### 对 vision pitch 的含义

可放心押。Demo 重点不在"我们有 AI 导演"这句话——这饼玩家信、也想要——而在现场让评审亲眼看见两段同一关卡走出截然不同节奏，并且每次调度都"可读、可解释"，用证据直接穿透"厂商做不到"的信任退烧。

---

## 7. 真正无限且有深度的程序化内容

| 游戏 | 年份 | 当年承诺 | 至今仍缺 | AI 解锁路径 | 成熟度 |
|---|---|---|---|---|---|
| No Man's Sky | 2014–2016 | 18 quintillion 行星，各有独立生态与浮现行为（鲨鱼跳出水面咬飞鸟） | 行星间真实的食物链/捕食拓扑、外星文明各有目标 | 世界模型为每个生物赋类型先验 + 多 agent 仿真做生态导演，按 seed 生成独立食物链 | 已可演示 |
| Starfield | 2022–2023 | 1000+ 颗可降落行星，手作内容比 Skyrim+Fallout 4 加起来还多 | 1000 颗行星各有独有地貌叙事与历史；2024.09 Shattered Space 退回整颗手作，等于承认未解 | LLM 把每颗行星 seed 当 prompt 生成独有废墟/文档/任务钩子，世界模型生成符合参数的地形变体 | 已可演示 |
| Spore | 2005–2008 | Procedural everything，5000:1 输入到生成内容比，造物自然演化出文明阶段的外交/宗教/经济差异 | 物种形态真正影响 AI 行为、文明阶段涌现宗教/外交 | 多模态模型从形态推行为先验，把多 agent 放进社会沙盒，让社会结构涌现 | 已可演示 |

Spore 演示价值最高：Will Wright 2005 GDC 把"5000:1"做成了可演示的内容放大器叙事，但开发组事后自承"built a fantasy in people's minds that was unachievable"。这恰好是 Project Animus 该轴的对照原型：reveal trailer 可以正面致敬"computer functions as a creative amplifier of what the player has done"，再用多 agent 仿真把当年被砍的文明阶段重做一遍。来源：[Spore devs say previews were more ambitious than what they were actually making — PC Gamer](https://www.pcgamer.com/games/life-sim/spore-devs-say-the-evolution-games-previews-were-more-ambitious-than-what-they-were-actually-making-and-they-built-a-fantasy-in-peoples-minds-that-was-unachievable/)。

### 近 2 年的退烧信号

"无限数量"子方向的欲望已退烧，"有深度差异"欲望仍在。Starfield 上线后被普遍定性为"quantity over quality"、1000 星球是其最大败笔（[TheGamer](https://www.thegamer.com/starfield-1000-planets-putting-players-off/)、[History Tools 2024 复盘](https://www.historytools.org/reviews/reasons-to-avoid-buying-starfield)）。社区把"程序化无限"直接等同于 soulless、barren，与 AI 生成内容并列贬义（[NeoGAF 2024](https://www.neogaf.com/threads/procedural-generation-good-but-ai-bad.1666160/)、[Substack 2024](https://airborneham.substack.com/p/unintentional-design-procedural-generation)）。但讨论已从"要不要无限"迁移到"怎样让程序化有灵魂"（[Unmapped Worlds 2025](https://unmappedworlds.com/posts/what-makes-a-procedural-world-have-a-soul/)），说明"每一个都有意义"的反向欲望仍在。承诺数量会被嘲，承诺深度仍有票。

### 对 vision pitch 的含义

避开"千星球/万物种"的数量话术，那条已是出现即 cringe。Demo 必须正面押"有意义的差异化"——现场让评委连开三个 seed，每一个都展示出独有的生态/事件/叙事钩子，且能被一眼看出不是换皮。数量是结果不是承诺。

---

## 8. 涌现式社会/派系战争/玩家间动态

| 游戏 | 年份 | 当年承诺(1 句话) | 至今仍缺 | AI 解锁路径(1 句话) | 成熟度 |
|---|---|---|---|---|---|
| Fable | 2001-2004 | 其他英雄 NPC 像玩家一样接任务、抢奖励，NPC 粉丝会改穿更受欢迎英雄的衣服 | 可与玩家在同一任务池竞争的 AI 英雄、动态名声/穿搭传播 | 每个 AI 英雄做独立 LLM agent，订阅任务池按风格抢单；粉丝 agent 按可观察声望更新偏好 | 已可演示 |
| Spore | 2005-2008 | Civilization 阶段会出现真实文明级策略、外交、宗教、经济涌现 | 玩家造物种间的真正文明互动、AI 文明差异化战略 | 多模态模型读取玩家造的生物/城市生成文化叙事，multi-agent 给各 AI 文明独立战略 | 已可演示 |
| Star Citizen | 2014-2020 | 宇宙 90% 人口为 AI Quanta，自主选择挖矿/安保/海盗职业并反馈经济 | 数十万级 Quanta 的自主经济选择、对玩家行为的全局反馈循环 | 分层调度：大模型做粗粒度规划，小模型/规则跑逐 tick 决策，契合 Quanta 无几何无寻路设计 | 前沿但有路径 |

Fable 是最适合 demo 的一个：规模仅几十到几百 agent，单机可承受，且视觉冲突可读——同一块任务板上 AI 英雄和玩家抢单、街上 NPC 服装因声望此消彼长，都能直接拍进 trailer。Molyneux 当年公开道歉时说：[*"If I have mentioned any feature in the past which... did not make it as I described into Fable, I apologise"*](https://kotaku.com/the-man-who-promised-too-much-1537352493)。这正是 2025/2026 Generative Agents 路线的标准 demo 范围。

### 近 2 年的退烧信号

经核查，截至 2026 年 6 月未发现该体验本身的欲望退烧证据——玩家依然渴望"世界因玩家互动改变"的体验，过去几年的负面声音几乎全部集中在"不信厂商能做到"或"做出来是空壳"，而非"我们不想要这种体验"。反向证据反而很强：EVE Online 仅凭强化派系战争与玩家经济就让在线人数从约 2 万拉到 2.9 万+，CCP 2026 路线图把三个连续扩展全押在 Factional Warfare；Foxhole 的"物流工人罢工"被 NME 专文记述为美谈；Pax Dei 玩家与评论员的失望点恰是"我 desperately 想玩你们承诺的那个涌现社会，但现在只给了通用生存壳"。MassivelyOP 评论员甚至直接哀叹"玩家被从世界主角降级为剧本观众"，呼唤回归 emergent virtual world。Pitch 仍可放心押此饼。

- https://outputlag.com/news/eve-onlines-2026-roadmap-three-expansions-to-overhaul-faction-warfare/
- https://www.nme.com/features/gaming-features/how-a-logistics-strike-in-foxhole-created-a-war-like-no-other-3163884
- https://www.pcgamer.com/games/mmo/early-access-mmo-pax-dei-has-launched-without-its-most-exciting-features-so-it-needs-to-convince-players-to-stick-around/

### 对 vision pitch 的含义

欲望仍在，且属于被反复辜负、玩家越饿越想要的稀缺体验，demo 可放心押此饼。关键是用现场可见的因果链——具体派系冲突、玩家选择改写阵营版图、NPC 经济响应玩家行为——直接穿透"又一个 MMO 大饼"的信任退烧，让评委亲眼看到，而不是听承诺。

---

## 9. 对 AI 游戏 vision pitch 的设计含义

> **阅读说明**：本节基于"欲望退烧"判断给出每轴 verdict（玩家想不想要）。下一节 §10 会做第二维度审视——AI 实现相对非 AI 最佳案例**在 demo 现场是否有可观察的显著优势**。两节结论结合后会显著收紧本节的"放心押"建议——具体见 §10。


### 9.1 八轴 verdict 与 pitch 抉择速查

| 轴 | Verdict | 对 pitch 的核心抉择 |
|---|---|---|
| 活着的 NPC | 欲望仍在 | 押。现场演跨场次记忆 + 非脚本反应 |
| 动态叙事 | 部分退烧 | 押体验，砍"数量话术"。同情境走出不同剧情 |
| 活的世界 | 欲望仍在 | 押。演玩家离场后 NPC 自主推进 + 轨迹回看 |
| 选择被记得 | 欲望仍在 | 押。单次 demo 塞 ≥2 个具体记忆回响节点 |
| 自然对话 | 欲望仍在 | 押。一段不出戏对话当场击穿"AI 像 AI" |
| AI 导演 | 欲望仍在 | 押。同关卡两轮截然不同节奏 + 可读可解释 |
| 无限程序化 | 部分退烧 | "无限数量"出现即扣分；只押"有灵魂的差异" |
| 涌现社会 | 欲望仍在 | 押。现场可见的因果链改写阵营 / 经济 |

### 9.2 Vision pitch 设计规则

1. **凡 verdict = 欲望仍在的轴，pitch 的任务不是论证"玩家想不想要"，而是用现场可触证据击穿"厂商做不到"。** 不要花篇幅讲市场需求——市场已用真金白银投票完毕。

2. **每一条押注必须配一个 5 分钟内可亲眼看到的证据动作**：跨场次记忆调用、玩家离场后的轨迹回看、同情境的剧情分叉对比、记忆回响节点、两轮调度节拍对照、因果链改写阵营。无现场证据的轴不要写进 pitch。

3. **"活的世界 / 涌现社会 / 选择被记得"是被反复辜负、玩家越饿越想要的稀缺体验**——优先级最高，且必须用因果链而非承诺呈现。Life by You、Pax Dei、Avowed 留下的伤口正是 pitch 的机会。

4. **"动态叙事"和"程序化"必须改话术**：删除"千星球 / 万任务 / 海量内容"一类数量表达；改押"同一情境因玩家而走出不同剧情"、"连开三个 seed 各自有钩子"的差异化现场对比。数量是结果不是承诺。

5. **"自然对话"在 demo 中是信任穿透器，不是独立卖点**——任何一段对话出戏，整套 pitch 的可信度连带塌方。要么演到不出戏，要么不演。

6. **凡 demo 无法当场穿透信任退烧的轴，从 pitch 删除**。宁缺勿吹——评审已被 Starfield、Avowed、Life by You、Pax Dei、Arc Raiders 反复烫过。

### 9.3 看似聪明、但欲望已退烧的方向，pitch 千万不要碰

基于 8 轴退烧证据，以下方向"听起来 AI 含量很高、实际玩家欲望已退潮"，写进 pitch 是负分项：

- **"1000 颗星球 / 海量程序化任务 / 无限内容"**：Starfield 1000 星球被钉成 soulless 反面教材，玩家把"程序化无限"直接等同于 barren，与 AI 生成内容并列贬义。
- **"AI 自动生成 radiant quests / copy-paste 任务包"**：Fallout 4、Starfield 的复制粘贴任务是玩家明确拉黑的子方向，BG3 已重设基线。
- **"AI 替代编剧 / 声优生成全部剧情和配音"**：Arc Raiders 被 Eurogamer 打 2/5、Larian 公开反弹，是劳动伦理 + 体验双重雷区。
- **"用 AI 把内容做大做多"任何变体**：玩家的偏好已从"多"迁移到"每一个都有意义"，承诺数量出现即 cringe。

Pitch 的押注全部留给"深度、差异、被记得、因果可见"——这是 8 轴证据共同指向的真欲望。

## 10. AI 必要性审视：哪些轴 AI 没有显著优势

### 判定原理：4 条件 AND-gate

AI 在 reveal demo 现场的可观察优势能否成立，由 4 个独立条件同时决定——任一不满足，AI 优势在 demo 现场就消失。这 4 个条件不是技术层的"AI 能做什么"，而是 demo 物理约束层的"AI 能演出来什么"。

| 编号 | 条件 | 不满足时会怎样 |
|---|---|---|
| **G1 输入不可枚举** | 玩家的输入空间无法被设计师穷举（自由文本、语音、自定义素材等） | 输入空间可枚举 → 非 AI 路径用穷举手作 + 状态机已达天花板（BG3 17,000 排列、Disco Elysium passive check） |
| **G2 输出在 demo 时间窗内可观察** | 5–15 分钟内评审能看到 AI 增量带来的变化 | AI 真正增量发生在跨小时 / 跨日尺度（NPC 长期人格漂移、社会涌现）→ demo 时长内不可观察 |
| **G3 因果链可被肉眼归因** | 评审能直接看出"我刚做的事 → 这个结果"是 AI 在响应 | 输出本质隐形（AI Director 越成功越像不存在）或与玩家行为脱钩 → 评审无法归因为 AI |
| **G4 单次可靠性足够** | 评审 probe 下不会触发 OOC / hallucination / 逻辑断裂 | 5 分钟内被 probe 翻车一次 → 整套 pitch 信用塌方 |

### 8 轴速查表（含失败 gate 诊断）

| 轴 | Verdict | 未通过的 gate | 非 AI 最佳代表 | Pitch 抉择 |
|---|---|---|---|---|
| 活的 NPC | 边际优势 | G1 + G4 | RDR2、KCD2、BG3 | 不要演 AI 版 |
| 动态剧情 | 无显著优势 | G1（完全） | BG3、Disco Elysium、Wildermyth | 不要演 AI 版 |
| 活着的世界 | 边际优势 | G1 + G2 | RDR2、KCD2、Stalker A-Life | 不要演 AI 版 |
| 世界记得你 | 边际优势 | G1（部分）+ 输出制作约束（AI 不能生成美术资产改世界结构） | BG3、Witcher 3、Tyranny | 不必标 AI（仅 30 秒锦上添花） |
| **自然语言对话** | **显著优势** | **全部通过** | Disco Elysium、BG3、Façade | **标 AI（核心锚点）** |
| AI 导演 | 无显著优势 | G3（输出隐形） | L4D Director、RE4 DDA、Hades God Mode | 不要演 AI 版 |
| 程序化无限 | 边际优势 | G2/G3（语义独特性需细读） | Caves of Qud、Dwarf Fortress、Hades | 不必标 AI |
| 涌现式社会 | 无显著优势 | G2（跨日尺度） | EVE、CK3、Dwarf Fortress、RimWorld | 不要演 AI 版 |

### 按失败 gate 分组的诊断

**G1 卡死（输入可枚举）→ 非 AI 穷举手作可达天花板**：动态剧情整条、活的 NPC 与活的世界的"动作维度"。卡点本质：玩家点击的选项、按下的键、走过的位置都是有限集，BG3 / Disco Elysium / RDR2 把这些维度全部冻结后穷举手作，AI 在同一维度上无新东西可演。

**G2 卡死（输出超时间窗）→ AI 增量被 demo 时长吃掉**：活着的世界、涌现社会。AI 的"长期人格漂移""派系自演化""跨日记忆塑造"都是真实增量，但需要小时或天来积累——5–15 分钟评审看到的只是两个版本都能演的日程动作（inZOI Smart Zoi GDC 翻车的根因）。

**G3 卡死（因果链不可归因）→ AI 优势本质上不能演**：AI 导演这一整条。L4D Director 的成功标志正是玩家感受不到——RE4 DDA 玩家 20 年才发现。"成功 = 不被察觉"的产品价值在 reveal demo 里物理上无法呈现。

**G4 卡死（AI 现场可靠性不足）→ 增量动作落在 hallucination 高发区**：活的 NPC 的"自由对话"增量。Ubisoft NEO NPC 自承要不停修正 LLM 走偏；评审 5 分钟内 probe 一次很可能触发 OOC，整段 pitch 报废。

### 唯一同时通过 4 条件的轴：自然语言对话

把每个 gate 单独拿来看：

- **G1**：玩家说出"菜单外的话"——所有非 AI 路径在这件事上 0 → 1 ✓
- **G2**：NPC 当场用 5 秒内回应 ✓
- **G3**：评审听到自己刚说的话被 NPC 接住，因果显然 ✓
- **G4**：单次 5–10 秒短对话 + 评审有心理预期（不是 20 小时 RPG），可靠性勉强够 ✓

这是 8 轴中唯一一条 4 条件全亮的轴——所以工作流给它"显著优势"是正确的。

### 组合策略

把整场 AI demo 的焦点压在"自然语言对话"一条上——评审麦克风互动作为高潮动作。"世界记得你"在结尾以 30 秒彩蛋（远端 NPC 复述现场即兴细节）做辅助回响——这是 4 条件全亮的**另一个窄窗口**：评审即兴细节属于不可枚举输入、复述立刻可观察、因果直接归因、单句可靠性够。

其余 6 条全部走 RDR2/KCD2/BG3/Witcher 3/L4D/CK3 范式，AI 一概不提——评审看到的是"活的世界 + 真实选择 + 你能说话进去"，AI 标签集中在最不可替代的那一处，pitch 既稳又锐。

> **修正说明**：4 条件 gate 比早期讨论中的"输入可枚举"单条件原理更严格——后者只覆盖 G1，本节其他 6 条 verdict 的失败因都不在 G1 上。pitch 设计的真正约束是 demo 物理层的多重门槛，不是输入空间一项。

---

## 来源附录

全文引用的去重来源（共 35 条）：

- [Aftermath](https://aftermath.site/ai-npcs-nvidia-unity-ubisoft-convai-inworld/)
- [arXiv:2512.02358](https://arxiv.org/html/2512.02358v1)
- [arXiv 2506.19806](https://arxiv.org/pdf/2506.19806)
- [arXiv:2510.13982](https://arxiv.org/pdf/2510.13982)
- [TechTalks — promise and limitations of Genie 3](https://bdtechtalks.com/2025/08/07/deepmind-genie-3/)
- [Player2 blog](https://blog.player2.game/p/ai-npc-games-were-too-hard-for-players)
- [ACM 2025 综述](https://dl.acm.org/doi/10.1145/3783862.3783876)
- [FinalBoss](https://finalboss.io/ai-powered-npcs-in-2025-hype-check-standout)
- [FinalBoss.io](https://finalboss.io/i-played-2025s-top-generative-ai-games-heres)
- [Convai Forum](https://forum.convai.com/t/there-seems-to-be-an-issue-with-the-long-term-memory/6227)
- [GDC](https://gdconf.com/article/gdc-2025-state-of-the-game-industry-devs-weigh-in-on-layoffs-ai-and-more/)
- [HyperAI](https://hyper.ai/en/headlines/f569b05700da38721bffe6d602c7476d)
- [Inworld GDC 2025](https://inworld.ai/blog/gdc-2025)
- [*"If I have mentioned any feature in the past which... did not make it as I described into Fable, I apologise"*](https://kotaku.com/the-man-who-promised-too-much-1537352493)
- [Multilingual](https://multilingual.com/replica-studios-shutdown-2025/)
- [Quantic Foundry](https://quanticfoundry.com/2025/12/18/gen-ai/)
- [Star Citizen Wiki: StarSim](https://starcitizen.tools/StarSim)
- ["comprehensive technology for the creation of 'live,' playable in real-time, cities of great scale based on the principles of artificial intelligence and automation."](https://techraptor.net/gaming/features/every-unfulfilled-promise-cyberpunk-2077)
- [Wccftech](https://wccftech.com/inworld-ai-gdc-2025-qa-aaa-games-want-to-be-secret-but-theres-going-to-be-large-titles-announced/)
- [CIO — Gen AI descends into disillusionment](https://www.cio.com/article/4046443/gen-ai-descends-into-disillusionment.html)
- [Digital Trends](https://www.digitaltrends.com/gaming/ubisoft-ai-bias-problem-gdc-2024/)
- [Frisson Labs](https://www.frisson-labs.com/ai-npcs-2026)
- [Game Developer](https://www.gamedeveloper.com/business/developers-still-aren-t-warming-up-to-generative-ai)
- [`"what if every NPC is an open world?"`](https://www.gamedeveloper.com/design/how-watch-dogs-legion-s-play-as-anyone-simulation-works)
- [GIANTY](https://www.gianty.com/gdc-2026-report-about-generative-ai/)
- [Laptop Mag](https://www.laptopmag.com/laptops/gaming-laptops-pcs/nvidia-ai-npc-gaming-chatbot-)
- [Notebookcheck](https://www.notebookcheck.net/MMO-hopeful-stumbles-badly-earning-terrible-reviews.952309.0.html)
- [PC Gamer](https://www.pcgamer.com/bethesda-says-most-of-starfields-1000-planets-are-dull-on-purpose-because-when-the-astronauts-went-to-the-moon-there-was-nothing-there-but-they-certainly-werent-bored/)
- [Spore devs say previews were more ambitious than what they were actually making — PC Gamer](https://www.pcgamer.com/games/life-sim/spore-devs-say-the-evolution-games-previews-were-more-ambitious-than-what-they-were-actually-making-and-they-built-a-fantasy-in-peoples-minds-that-was-unachievable/)
- [PC Gamer](https://www.pcgamer.com/gaming-industry/i-tried-two-demos-of-machine-learning-ai-npcs-and-they-didnt-convince-me-the-ai-will-lead-to-anything-that-immersive-sims-like-deus-ex-havent-already-done-better/)
- [Pure Xbox](https://www.purexbox.com/news/2022/10/todd-howard-starfield-has-over-250000-lines-of-dialogue)
- [MIT Tech Review](https://www.technologyreview.com/2025/12/15/1129174/the-great-ai-hype-correction-of-2025/)
- [TechPowerUp](https://www.techpowerup.com/350230/games-made-with-gen-ai-suffer-up-to-53-worse-sales-on-steam)
- [TheGamer](https://www.thegamer.com/cyberpunk-2077-sequel-lifepaths-matter-branch-out-more/)
- [VGC 转录](https://www.videogameschronicle.com/news/peter-molyneux-explains-why-his-infamous-kinect-game-project-milo-was-never-released/)
- [Generative Agents: Interactive Simulacra of Human Behavior (Stanford Smallville)](https://arxiv.org/pdf/2304.03442)
- [Symbolically Scaffolded Play: Role-Sensitive Prompts for Generative NPC Dialogue (arXiv)](https://arxiv.org/pdf/2510.25820)
- [Black Shell Media: A-Life — An Insight into Ambitious AI (STALKER)](https://blackshellmedia.com/2017/08/a-life-an-insight-into-ambitious-ai/)
- [Bringing Personality to Pixels, Inworld Levels Up Game Characters Using Generative AI - NVIDIA Blog](https://blogs.nvidia.com/blog/generative-ai-npcs/)
- [Negative Feedback on LLM-Powered Storytelling & Roleplay Apps](https://cuckoo.network/blog/2025/04/17/negative-feedback-on-llm-powered-storytelling-and-roleplay-apps)
- [Thought Cabinet - Disco Elysium Wiki](https://discoelysium.wiki.gg/wiki/Thought_Cabinet)
- [Dwarf Fortress Wiki: World Generation](https://dwarffortresswiki.org/index.php/World_generation)
- [Bowls of Oatmeal and Text Generation — Emily Short on Kate Compton's framing](https://emshort.blog/2016/09/21/bowls-of-oatmeal-and-text-generation/)
- [How No Man's Sky's procedural content works — 'procedural oatmeal' critique](https://en.wikipedia.org/wiki/No_Man's_Sky)
- ["That's a consequence": The Baldur's Gate 3 Decision That'll Make You Miss Out on Devastatingly Large Amount of Cutscenes — FandomWire](https://fandomwire.com/thats-a-consequence-the-baldurs-gate-3-decision-thatll-make-you-miss-out-on-devastatingly-large-amount-of-cutscenes/)
- [GameRant: Things RDR2 Does Better Than Other Open-World Games](https://gamerant.com/red-dead-redemption-rdr2-things-does-better-other-open-world-games/)
- [GDC Vault — Procedurally Generating History in 'Caves of Qud' (Jason Grinblat)](https://gdcvault.com/play/1024990/Procedurally-Generating-History-in-Caves)
- [2019: A.I. Dungeon - Aaron A. Reed (if50)](https://if50.substack.com/p/2019-ai-dungeon)
- [Disco Elysium's Dialogue System Is As Addictive As Any Social Network - Kotaku](https://kotaku.com/disco-elysiums-dialogue-system-is-as-addictive-as-any-s-1841046831)
- [The Director - Left 4 Dead Wiki | Fandom](https://left4dead.fandom.com/wiki/The_Director)
- [The Reality of Red Dead Redemption 2's AI (Medium)](https://medium.com/the-sound-of-ai/the-reality-of-red-dead-redemption-2-s-ai-part-2-c0887123cffd)
- [How Ubisoft's NEO NPC Prototype Changes the Narrative for NPCs](https://news.ubisoft.com/en-us/article/5qXdxhshJBXoanFZApdG3L/how-ubisofts-new-generative-ai-prototype-changes-the-narrative-for-npcs)
- [RimWorld AI Storytellers — RimWorld Wiki](https://rimworldwiki.com/wiki/AI_Storytellers)
- [Baldur's Gate 3 Hidden Interaction Shows Just How Smart NPCs Can Be (Screen Rant)](https://screenrant.com/baldurs-gate-3-npc-reactivity-benryn-discovery/)
- [10 Biggest Choices In The Witcher 3 That Actually Matter — ScreenRant](https://screenrant.com/witcher-3-biggest-choices-consequences/)
- [Facade: An Experiment in Building a Fully-Realized Interactive Drama (Mateas & Stern, GDC 2003)](https://sites.cc.gatech.edu/fac/Charles.Isbell/classes/reading/papers/MateasSternGDC03.pdf)
- [Tyranny Conquest Mode — Tyranny Wiki (Paradox)](https://tyranny.paradoxwikis.com/Conquest_mode)
- [Underworld Unfolded: How Hades Balances Narrative and Gameplay](https://uu.diva-portal.org/smash/get/diva2:1965991/FULLTEXT01.pdf)
- [Kingdom Come Deliverance 2 Dev Talks About Dynamic NPC Routines (Wccftech)](https://wccftech.com/kingdom-come-deliverance-2-dev-talks-about-dynamic-npc-routines-and-emergent-storytelling-for-side-quests/)
- [Hades' God Mode is an Incredible Choice in Game Design](https://web.phenixxgaming.com/2021/02/15/hades-god-mode-is-an-incredible-choice-in-game-design/)
- [Resident Evil 4's Most Important Feature Is Its Dynamic Difficulty - CBR](https://www.cbr.com/resident-evil-4-dynamic-difficulty-capcom/)
- [Cyberpunk 2077 Update 2.0 Patch Notes (CDPR Official)](https://www.cyberpunk.net/en/news/49060/update-2-0)
- [EVE Online Faction Warfare Overhaul / Cradle of War](https://www.eveonline.com/news/view/factional-warfare-overhaul)
- [The Future Of AI In Gaming - Forbes/SAP 2025](https://www.forbes.com/sites/sap/2025/08/05/the-future-of-ai-in-gaming-whats-here-and-whats-next/)
- [Understanding the meaningless, micro-reactive, and marvellous writing of Disco Elysium — Game Developer](https://www.gamedeveloper.com/business/understanding-the-meaningless-micro-reactive-and-marvellous-writing-of-i-disco-elysium-i-)
- [Tapping into the potential of procedural generation in Caves of Qud](https://www.gamedeveloper.com/design/tapping-into-the-potential-of-procedural-generation-in-caves-of-qud)
- [Baldur's Gate 3's lead writer on the 'spiderweb' formation of the game's 17,000 endings](https://www.gamesradar.com/baldurs-gate-3s-lead-writer-on-the-spiderweb-formation-of-the-games-17000-endings/)
- [Crusader Kings III Emergent Narrative — Paste Magazine](https://www.pastemagazine.com/games/crusader-kings-iii/crusader-kings-iii-emergent-narrative)
- [PC Gamer: Inzoi's Smart Zoi AI didn't exactly wow me at GDC live demo](https://www.pcgamer.com/games/life-sim/inzois-smart-zoi-ai-system-sounds-great-on-paper-but-seeing-it-in-a-live-demo-didnt-exactly-wow-me/)
- [Larian gave Baldur's Gate 3 its acclaimed reactivity by approaching it as 'weird Dungeon Masters' — PC Gamer](https://www.pcgamer.com/games/rpg/larian-gave-baldurs-gate-3-its-acclaimed-reactivity-by-approaching-it-as-weird-dungeon-masters/)
- [Characterization and Emergent Narrative in Dwarf Fortress (ResearchGate)](https://www.researchgate.net/publication/356686095_Characterization_and_Emergent_Narrative_in_Dwarf_Fortress)
- [AI Systems of L4D2 by Mike Booth (Valve)](https://www.scribd.com/doc/160700503/Ai-Systems-of-l4d2-by-Mike-Booth)
- [WordPlayer: Wildermyth Lays Bare the False Promises of AI Storytelling](https://www.superjumpmagazine.com/wordplayer-wildermyth-lays-bare-the-false-promises-of-ai-storytelling/)
- [Engage in Wicked Conversations with AI in Suck Up - Toolify](https://www.toolify.ai/ai-news/engage-in-wicked-conversations-with-ai-in-suck-up-the-coolest-game-of-the-year-2107651)
- [The Illusion of Infinite Games: Why Procedural Generation Needs a Human Touch](https://www.wayline.io/blog/illusion-of-infinite-games-procedural-generation-human-touch)
