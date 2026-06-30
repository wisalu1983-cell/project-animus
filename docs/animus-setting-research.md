# Animus 技术设定调研

> 《刺客信条》(Assassin's Creed) Animus 技术的完整设定参考资料：核心工作原理、核心功能的代际发展，以及“若要在现实中实现 Animus”所必须满足的设定要素。本文是 Project Animus 的设定底稿。

## 关于本文

**调研方法**：多 Agent 工作流并行联网调研 → 逐维度对抗式核查 → 分节综合撰写。8 个设定维度各由独立 agent 检索取证，再由核查 agent 重新打开关键来源页面独立比对、纠错、区分 canon 与社区推测，最后分节成文。

**来源优先级**：① Ubisoft 官方（ubisoft.com / news.ubisoft.com）→ ② 游戏/电影/漫画内可验证内容 → ③ Assassin's Creed Fandom Wiki → ④ 其他可靠整理。全文去重来源见文末来源附录。

**可信度图例**：正文关键设定点按下列等级标注，社区推断以“（社区推测）”显式标出。

| 标签 | 含义 |
|---|---|
| 官方Ubisoft | 来自 Ubisoft 官方页面 / 发布说明 |
| 游戏内可验证 | 游戏、电影、漫画作品内可直接验证 |
| Wiki整理 | 社区 Wiki 对作品内容的整理归纳 |
| 玩家推测 / 社区推测 | 缺乏明确官方出处的社区推断 |

**重要声明**：① 来源内容截至本次检索时点，后续作品更新可能改变设定。② 带小数点的型号编号与跨作品的“单一演进时间线”属整理性叙述，并非任一单部作品的官方时间轴声明。③ Animus 最核心的科幻前提——“DNA 完整保存可回放的祖先具体记忆”——在现实中无科学基础，详见第 9 节。


## 目录

1. 核心原理：遗传记忆与 Animus 读取机制
2. 同步机制：同步率、不同步与记忆边界
3. 出血效应：副作用与技能迁移
4. Animus 界面与模拟系统
5. 前身技术与伊述根源
6. 代际演进：硬件与软件完整时间线
7. 组织用途与商业化
8. 核心规则与限制
9. 现实实现必备设定要素（功能规格）

---

## 1. 核心原理：遗传记忆与 Animus 读取机制

### 1.1 科学假设根基：遗传记忆

整套设定的科学假设根基是「遗传记忆」（genetic memory）。在《刺客信条》（Assassin's Creed）世界观中，遗传记忆被定义为"一个人祖先的记忆集合，通过 DNA 传递给后代"：它在动物身上表现为本能技能（instinctive skills），在人类身上则充当一份历史档案（an archive of history）([Genetic memory](https://assassinscreed.fandom.com/wiki/Genetic_memory))。

Warren Vidic 对 Desmond Miles 的台词概括了这一假设：DNA 充当一份档案，不仅包含从前代传下的遗传指令，也包含记忆——祖先的记忆 ([Genetic memory](https://assassinscreed.fandom.com/wiki/Genetic_memory))。

需要说明：现实中的"遗传记忆"是心理学/行为学概念，而"DNA 完整保存可回放的祖先经历"是本作的虚构外推，并非现实科学结论 ([Genetic memory](https://assassinscreed.fandom.com/wiki/Genetic_memory))。

### 1.2 Animus 的本质：读取遗传记忆并三维投影

Animus（复数 Animi）是 Abstergo Industries 开发（后商业化）的虚拟现实机器，其本质是"读取宿主（host）的遗传记忆，并将输出以三维形式投影到外部屏幕上"([Animus](https://assassinscreed.fandom.com/wiki/Animus))。遗传记忆词条进一步说明：Abstergo 明确开发 Animus 来解码并把此类记忆渲染成三维信号流（three-dimensional feed），以重历过往事件、发掘隐藏信息 ([Genetic memory](https://assassinscreed.fandom.com/wiki/Genetic_memory))。

设定中，Animus 由 Abstergo 于 20 世纪后半叶基于已发现的第一文明（Isu）科技开发 ([Animus](https://assassinscreed.fandom.com/wiki/Animus))。其核心链路可概括为：

**读取 DNA 中的遗传记忆 → 解码 → 重构为可感知的三维环境。**

对这一本质最权威的官方台词，来自 Abstergo 在遗传记忆领域的权威、Animus 研发主导者、动画计划（Animus Project）总监 Dr. Warren Vidic。他向被劫持的 Desmond 解释 Animus 时的原话（已逐字核实）为：

> "You're inside the Animus. It's a projector which renders genetic memories in three dimensions."（你正身处 Animus 之内，它是一台将遗传记忆三维渲染出来的投影机。）([Animus](https://assassinscreed.fandom.com/wiki/Animus))

Vidic 最终在 Desmond 反抗时，被 Desmond 用伊甸苹果操控的守卫射杀 ([Warren Vidic](https://assassinscreed.fandom.com/wiki/Warren_Vidic))。

### 1.3 Animus 的双重本质：回放器 + 模拟器

Animus 同时具备「忠实回放」与「有限交互」两面 ([Synchronization](https://assassinscreed.fandom.com/wiki/Synchronization), [Animus](https://assassinscreed.fandom.com/wiki/Animus))：

| 面向 | 机制 | 约束/表现 |
| --- | --- | --- |
| 回放器（忠实复刻） | 用户须严格按祖先记忆原样重历 | 偏离导致同步度（synchronization）暂时下降；持续偏离则完全脱同步（desynchronization），强制从更早的点重新加载；进入祖先当时未进入的区域会被设屏障，极端时被弹出 |
| 模拟器（有限交互） | 允许用户对所见环境进行一定程度交互 | Abstergo 早期型号交互很有限；到 Animus 2.0 大幅增强，用户可自选推进记忆的节奏 |

在玩法层面，同步度相当于血量系统（例如蒙特里久尼围城战中 Ezio 的同步血格被削减）([Synchronization](https://assassinscreed.fandom.com/wiki/Synchronization))。

### 1.4 记忆走廊：加载与重构的可视化中介

记忆走廊（Memory Corridor）是 Animus 用来由宿主遗传记忆精确重建影像的数字构造（digital construct），对用户呈现为 Animus 内部一片空的虚拟空间；记忆加载后，虚拟环境会在记忆走廊之上被重建 ([Memory Corridor](https://assassinscreed.fandom.com/wiki/Memory_Corridor))。它主要充当记忆之间的"加载屏幕"，用户可在编译期间走动；不同软件版本外观各异（如 1.28 为含雾与代码串的冰蓝色背景，2.0 为浅灰白线的"白室 White Room"）。用户脱同步时，化身会回到走廊等待记忆重载；刺杀目标的临终画面也显示在记忆走廊中 ([Memory Corridor](https://assassinscreed.fandom.com/wiki/Memory_Corridor))。

由于记忆是由 Animus 软件渲染的，记忆走廊中会出现「故障」（glitch）与计算机代码串/符号（strings of computer code / symbols），而非生物学意义上的核苷酸 ([Memory Corridor](https://assassinscreed.fandom.com/wiki/Memory_Corridor))。初代《刺客信条》中，1.28 在审讯被击倒的目标时常出现故障，玩家可借此切换过场视角；当同步度降到临界低位时，Animus 屏幕会闪烁蓝色与红色以警告记忆趋于不稳定，同步全失后再有一次脱同步动作即触发记忆完全重启 ([Synchronization](https://assassinscreed.fandom.com/wiki/Synchronization))。这从侧面印证 Animus 输出是「重构/渲染」而非原始影像本身。

### 1.5 血缘读取的边界规则：记忆随生育节点终止

早期 Animus 的读取受「血缘」硬约束，且记忆边界与生育节点绑定 ([Genetic memory](https://assassinscreed.fandom.com/wiki/Genetic_memory))：

| 祖先性别 | 可读取记忆的终止点 | 终止后读取焦点 |
| --- | --- | --- |
| 男性祖先 | 使后代受孕（conceive）时 | 转而追随胎儿，即跟随母亲直到分娩 |
| 女性祖先 | 诞下后代（give birth）时 | 至分娩即终止 |

游戏内例证（《刺客信条II》可验证）：Desmond 观察 Altaïr 与 Haytham Kenway 的记忆时，分别跟随他们直到使 Maria Thorpe（怀上 Sef）与 Kaniehtí:io（怀上 Ratonhnhaké:ton）受孕，再转而跟随两位母亲直到分娩 ([Genetic memory](https://assassinscreed.fandom.com/wiki/Genetic_memory))。这解释了"为何只能看到祖先生育该后代之前的人生"。

### 1.6 同步与适应：早期 Animus 的心理障碍与控制改进

早期使用 Animus 的关键障碍是同步困难——同步本质上需要用户在心理上"代入"祖先。Lucy Stillman 在 Desmond 早期会话中的原话（已逐字核实）为：

> "You lack the confidence to step into your ancestor's body."（你缺乏踏入祖先身体的信心。）([Genetic memory](https://assassinscreed.fandom.com/wiki/Genetic_memory))

多数参与者会下意识排斥外来记忆，创伤性记忆更需先大幅提升同步度才能访问 ([Genetic memory](https://assassinscreed.fandom.com/wiki/Genetic_memory))。此外，Abstergo 早期发现实验体难以适应 Animus 的操控方式，遂将操控改为贴近游戏主机的标准操作，并把操控提示投影进用户意识中，显著提升反应与适应速度 ([Animus](https://assassinscreed.fandom.com/wiki/Animus))。

### 1.7 动画计划：1–17 号实验体与遗传记忆批量分析

由 Warren Vidic 领衔的「动画计划」（Animus Project）是 Abstergo 围绕遗传记忆技术的重大行动，至少自 1980 年运作：由「血统发现与获取部」（Department of Lineage Discovery and Acquisition）绑架拥有历史相关祖先（尤其是著名刺客或圣殿骑士后代）的实验体，分析其遗传记忆，以获取刺客组织与伊甸碎片情报 ([Animus Project](https://assassinscreed.fandom.com/wiki/Animus_Project))。

动画计划 1 号至 17 号实验体被置入 Animus 接受长时间审查，Desmond Miles 即 17 号实验体（Subject 17）([Animus Project](https://assassinscreed.fandom.com/wiki/Animus_Project))。Vidic 于 2012 年死后，该计划转由 Alan Rikkin 之女 Sofia Rikkin 领导 ([Animus Project](https://assassinscreed.fandom.com/wiki/Animus_Project))。

关于 Desmond 被劫持的过程：Wiki 仅记载他因摩托车驾照所需指纹被 Abstergo 追踪定位，随后被绑架至意大利某 Abstergo 实验室，由「血统发现与获取部」执行 ([Desmond Miles](https://assassinscreed.fandom.com/wiki/Desmond_Miles))。**（社区推测）** 部分早期资料称其"于 2012 年 9 月 1 日在 Daniel Cross 指挥下被劫持"，但该具体日期与"Daniel Cross 指挥"在 Wiki 正文中无明确出处。

### 1.8 关键突破：Data Dump Scanner 打破血缘限制

Data Dump Scanner（DDS，数据转储扫描器）由 Álvaro Gramática 于 2009 年创建，是与 Animus 配合工作的软件 ([Animus](https://assassinscreed.fandom.com/wiki/Animus))。它通过上传从他人遗传记忆中提取的记忆，让用户"重历任何预录记忆，无论是否有血缘关系（regardless of whether they were blood related）"([Animus](https://assassinscreed.fandom.com/wiki/Animus))。

这是设定中的决定性突破：原本 Animus 只能让实验体查看自身直系祖先的记忆（血缘读取）；DDS 让 Abstergo 能从特定个体的遗传记忆中提取片段，再让其他实验体借助 Animus + DDS 重历（样本读取）。DDS 被用于 Project Legacy（获取刺客与伊甸碎片情报，2012 年因安全顾虑关闭）和 Animi 训练计划（训练特工），并在与 Animus 接口结合后，为 Helix 的诞生铺平道路 ([Animus](https://assassinscreed.fandom.com/wiki/Animus))。

### 1.9 血缘读取 vs 样本读取：原理差异总结

两种读取模式的根本差异，在于「记忆来源是否来自用户自身 DNA」：

| 维度 | 血缘读取 | 样本读取 |
| --- | --- | --- |
| 技术载体 | 原始 Animus | Animus + DDS |
| 记忆来源 | 用户自身 DNA 中编码的直系祖先记忆 | 从他人（供体）遗传记忆中提取并预录的"数据样本" |
| 血缘要求 | 须与祖先血脉相连 | 无需血缘关系 |
| 边界约束 | 受"生育节点终止"规则约束 | 不受血缘限制 |

Animus 词条明确记载：到 2012 年底，"Animus 与 DDS 技术进步到只要 DNA 在库（provided DNA was in storage），就能让任何人查看另一个体的遗传记忆"（出自《刺客信条III：解放》）——彻底解耦了「读取」与「血缘」([Animus](https://assassinscreed.fandom.com/wiki/Animus))。

### 1.10 Sample 17 Project：以遗体 DNA 实现的非血缘大规模读取

Sample 17 Project（17 号样本计划）是 Abstergo Industries 经由 Abstergo Entertainment 运作的行动，目标是探索已故 Desmond Miles（前动画计划 17 号实验体）的祖先遗传记忆 ([Sample 17 Project](https://assassinscreed.fandom.com/wiki/Sample_17_Project))。

其遗传材料直接来自在大神庙（Grand Temple）从 Desmond 遗体上采集血液与唾液样本的技术人员——即用「样本读取」方式读取一位已死亡个体的祖先记忆，仅需极少解码即从 DNA 中分离出 Altaïr、Ezio、Edward Kenway、Ratonhnhaké:ton 至少四位祖先；其方法借鉴了 1980 年代初的 Surrogate Initiative 研究，使分析者无需与对象有直接生物联系 ([Sample 17 Project](https://assassinscreed.fandom.com/wiki/Sample_17_Project))。

对蒙特利尔分部员工的说辞，是为 Animus Omega 程序、影视等寻找素材；Abstergo Industries 的真实目的是定位伊甸碎片与 Isu 科技 ([Sample 17 Project](https://assassinscreed.fandom.com/wiki/Sample_17_Project))。项目先由 Olivier Garneau 主管，其失踪（后被证实遇害）后转交 Melanie Lemay；2013 年 11 月先完成 Edward Kenway 记忆，其余三位被评估为风险/弱投资而搁置。随 2014 年《叛变》《大革命》系列转离 Desmond 血脉，计划被放弃，最终命运未交代 ([Sample 17 Project](https://assassinscreed.fandom.com/wiki/Sample_17_Project))。

### 1.11 Helix：遗传记忆概念的商业化与云端延伸

DDS 技术与 Animus 接口结合，为 Helix 的诞生铺平道路 ([Animus](https://assassinscreed.fandom.com/wiki/Animus))。2014 年 Abstergo Entertainment 发布 Helix——一款存储圣殿骑士多年来收集的大量遗传记忆的软件；配合基于 Animus Omega 型号的主机与头显使用时，它让任何人都能查看这些记忆、无需与宿主有血缘关系，并秘密收集玩家自身的遗传数据 ([Animus](https://assassinscreed.fandom.com/wiki/Animus))。Helix 与云端 Animus 在《叛变》《大革命》《枭雄》等作中引入。

与 Helix/Animus 相关的设定健康隐患包括：出血效应（Bleeding Effect，祖先技能/人格渗入现实，长期使用致精神退化乃至崩溃）、海马体冲击（hippocampal shock）、枕叶残影（occipital ghosting）、脑死亡（brain death）等 ([Genetic memory](https://assassinscreed.fandom.com/wiki/Genetic_memory))。Helix 是「遗传记忆」从专业实验装置走向大众消费产品的关键延伸。

### 1.12 Animus 型号演进与读取能力升级

下表整理 Animus 主要型号及其读取能力演进。各型物理形态与编号属性多为 Fandom 整理，核心型号及其剧情用途为游戏内可验证 ([Animus](https://assassinscreed.fandom.com/wiki/Animus), [Synchronization](https://assassinscreed.fandom.com/wiki/Synchronization))。

| 型号 | 时间/出处 | 物理形态与特征 | 读取能力 |
| --- | --- | --- | --- |
| Animus 1.28 | 2002 起 | 旋转弧形屏幕投影；加载背景冰蓝色；能效低，过热时蓝光转橙；Lucy Stillman 做过技术改良 | 血缘读取（提取 Desmond 记忆） |
| Animus 2.0 | 2012，Rebecca Crane（昵称"Baby"）基于 Lucy 部分图纸改良 | 回归座椅式（需手臂插管 catheter 接入）；加载背景白色、记忆区域逐步加载；引入 Shaun Hastings 撰写的数据库（Database）；交互大增，可自选推进节奏 | 血缘读取（交互增强） |
| Animus 3.0 | 《兄弟会》后软件升级 | 新 UI 与操控；硬件同 2.0，但头/臂托不再需固定于座椅，可置任意平面、便携（可拆成三箱搬入大神庙） | 血缘读取 |
| Animus Omega | 2013，Abstergo Entertainment 消费级主机 | 消费级主机 | 用于 Sample 17 Project（样本读取） |
| Helix | 2014 | 云端化，基于 Omega 主机与头显 | 非血缘公众读取（见 1.11） |
| Animus 4.3 'Sarcophagus' | 2016，电影线 Madrid 设施，Sofia Rikkin 指导 | 弃座椅，用户经机械臂以全身动作物理重历（如 Callum Lynch） | 物理重历 |
| Mobile Animus 4.38 | 2017 年 9 月，连接 Helix 服务器 | 小型移动版 | 配套手游《Rebellion》（刺客 Aguilar de Nerha） |
| Animus HR-8 | 2017，Madrid 设施，Sofia Rikkin 指导 | 便携型（可压缩进手提箱），改用血液学链接 | Layla Hassan 读取 Bayek 与 Aya（《起源》）；Layla 自述"造了一台能访问任何人记忆、即便不是自己祖先"的 Animus，只需获得宿主 DNA 样本 |
| Animus HR-8.5 | Layla 与 Victoria Bibeau 共同改进 | 配 Brahman V.R. 头显 | 2018 年读取 Kassandra（《奥德赛》）；2020 年读取 Eivor（《英灵殿》） |
| Animus EGO | 21 世纪中叶 | 娱乐型号 | 更强调探索用户自身祖先记忆（《影》） |

补充说明：HR-8 由 Madrid 设施在 Sofia Rikkin 指导下开发，同时 Layla 亦自述其能访问任何人记忆——两层信息在原文中并存，故并列保留 ([Animus](https://assassinscreed.fandom.com/wiki/Animus))。

**（社区推测/已澄清）** 部分整理资料曾称"HR-8.5 配套数据库名为 Codex（英灵殿）"，但 Database 与 Animus 词条均无此命名；其中的"Codex"实指 Altaïr 的 Codex（一件游戏内手稿物品），与 Animus 数据库无关，故此说法不予采纳 ([Animus](https://assassinscreed.fandom.com/wiki/Animus))。

---

## 2. 同步机制：同步率、不同步与记忆边界

### 2.1 核心定义：同步是行为与基因记忆的吻合度量

同步（Synchronization）是 Animus 对其使用者重历祖先基因记忆时、行为与原始记忆一致程度的度量与可视化机制。其底层逻辑是：使用者并非自由操控祖先，而是在重历一段已经发生、固定不变的过去——必须复刻祖先当年的真实行动。完全按祖先经过行动即达成完全同步，并可解锁某些被压抑的记忆片段；反之，偏离真实记忆会导致记忆不稳定，最终被彻底逐出该段记忆 ([Synchronization](https://assassinscreed.fandom.com/wiki/Synchronization))。

这套设定在虚构层面合理化了游戏中的检查点、读档、关卡边界与任务失败：同步丢失即"失败"，模拟从较早的稳定记忆点重启 ([Synchronization](https://assassinscreed.fandom.com/wiki/Synchronization))。

祖先当时的精神状态也会影响重历的稳定性。Desmond 首次使用 Animus 时，因潜意识无法承受记忆带来的压力与创伤，几乎瞬间不同步 ([Synchronization](https://assassinscreed.fandom.com/wiki/Synchronization))。

### 2.2 不同步：失败状态的设定级解释

不同步（Desynchronization）是本系列对"失败"的设定级包装。同步丢失先导致记忆不稳定，进一步升级为被完全逐出记忆；一旦不同步，模拟从较早的记忆点重新开始 ([Synchronization](https://assassinscreed.fandom.com/wiki/Synchronization))。

初代《刺客信条》没有传统血条，生命值即 Desmond 与祖先记忆的同步水平：祖先每次受伤，被体验为对真实记忆的偏离，同步随之下降；若同步全部耗尽，同步条消失，此时再做一次不同步动作即触发当前记忆的完全重启 ([Synchronization](https://assassinscreed.fandom.com/wiki/Synchronization))。

常见的不同步触发条件：

| 触发条件 | 说明 |
|---|---|
| 战斗中受伤 | 同步随受伤下降，被理解为偏离真实记忆 |
| 从高处坠落 | 偏离祖先经历范围 |
| 杀害无辜平民 | 违背兄弟会信条（详见 2.4） |
| 进入被封锁隔离区域（cordoned-off areas） | 越过记忆边界，祖先当时未到过该处 |
| 刺杀时被发现 | 不符合祖先真实行动，往往立即导致同步丢失 |

来源：([Synchronization](https://assassinscreed.fandom.com/wiki/Synchronization))。

### 2.3 同步条与版本演进

早期 Animus 在屏幕左上角以同步条充当生命值。已核实的容量上限如下：

| Animus 版本 | 同步条上限 | 备注 |
|---|---|---|
| Abstergo Animus 1.28 | 20 格（bars） | 区分基础同步与附加同步 |
| Animus 2.0 | 25 格 | 自 AC II 起引入完全同步目标 |
| 电影 Animus 4.3 | 无同步条 | 屏幕同步条是游戏 HUD 元素 |

来源：([Synchronization](https://assassinscreed.fandom.com/wiki/Synchronization))。

当同步降到临界低位，Animus 屏幕开始闪烁蓝色与红色，警告记忆正变得不稳定；同步全部耗尽时同步条消失，再做一次不同步动作即触发完全重启 ([Synchronization](https://assassinscreed.fandom.com/wiki/Synchronization))。

Animus 1.28 将同步分为两类：基础同步（base，绑定主线剧情）与附加同步（additional，来自支线）。完成 15 次附加动作（如救助市民、登上瞭望点）会让 Animus 显示 DNA Synchronization Augmented 并增加一格上限 ([Synchronization](https://assassinscreed.fandom.com/wiki/Synchronization))。

> 说明：早期流传的"1.28 随时间自行恢复、2.0 需药物或看医生恢复"的差异未能在权威 Wiki 正文核实，已删除；明确的"脱离战斗、等待充能恢复"描述属后文 HR-8 时代。

### 2.4 杀害无辜平民触发不同步：信条约束

本系列刻意不允许玩家杀害无辜平民。攻击平民会弹出警告，提示进一步造成平民伤亡将导致与 Animus 不同步。该机制自初代起即存在，并在剧情中借设定向玩家与 Altaïr 解释：游戏开头 Altaïr 被剥夺等级后，导师 Al Mualim 向其重申兄弟会三条信条（three core tenets），其中第一信条即"收起你的刀刃，远离无辜者的血肉"（stay your blade from the flesh of an innocent）([Synchronization](https://assassinscreed.fandom.com/wiki/Synchronization))。

ScreenRant 指出，该限制让玩家在体验上"感觉自己是好人"，借此区别于伤害无辜的圣殿骑士/Abstergo；在近年主角并非刺客的作品中，该限制更像遗留机制，但全系列仍予以保留。后续作品中圣殿骑士/雇佣兵主角不再因杀平民掉同步 ([Why Assassin's Creed Doesn't Let You Kill Civilians](https://screenrant.com/assassins-creed-kill-civilian-murder-innocent-desychronize-animus/))。

### 2.5 记忆边界：不能漫游到祖先没去过的地方

偏离祖先经历范围会触发不同步，构成"记忆边界"：从高处坠落、战斗中受伤、或进入被封锁隔离区域（cordoned-off areas）都可能导致同步丢失，因为这些事件并未发生在祖先当时身上。这意味着玩家不能漫游到祖先没去过的地方 ([Synchronization](https://assassinscreed.fandom.com/wiki/Synchronization))。

> 措辞说明：玩家社区常以"无形边界墙""看似当下有利的事件也会不同步"作通俗概括，方向与官方一致；但 Wiki 正文采用的是"进入封锁隔离区"与"未发生在祖先身上"的表述，本节按 Wiki 原意收敛。

### 2.6 Altaïr 同步上限随刺客等级成长（4 → 13 格）

针对 Altaïr 的记忆，基础同步上限随其在刺客组织（Assassin Order）中的等级成长而提高：作为新手（novice）时，记忆中最大同步为 4 格，此后每升一级增加一格，直至 Master Assassin 达到 13 格。Wiki 明确这暗示同步水平与祖先当时的技能/能力挂钩 ([Synchronization](https://assassinscreed.fandom.com/wiki/Synchronization))。附加同步则通过完成附加动作（救市民、登瞭望点等）获得，与基础同步分开计算。

### 2.7 完全同步（Full Synchronization / 100%）：可选目标的引入与演进

自《刺客信条 II》（Animus 2.0 时代）起引入"完全同步"玩法机制：达成它需要几乎完全复刻祖先当年的经过。完成主目标即可推进剧情，拿到 100% 则需额外满足这些可选条件 ([Synchronization](https://assassinscreed.fandom.com/wiki/Synchronization))。最常见的三类条件：

- 时间相关（限时完成）
- 特定武器（指定武器击杀）
- 全程不被发现（remain undetected）

完全同步目标的设计在各代之间差异显著，关键差异在于"能否跨多次重玩分别获取"：

| 作品 | 目标数量 | 失败补救方式 | 整体难度 |
|---|---|---|---|
| Brotherhood / Revelations | 每段记忆通常一个可选目标（部分没有） | Brotherhood 早期需稍后重玩整段任务；Ubisoft 后改为每次重载检查点重置目标 | 100% 仍很难 |
| AC III 起 | 单任务可有多个目标 | 需在一次通关中全部达成；检查点重启重置失败目标，任务可通过 DNA tracker 重玩（无漏失） | 较高 |
| Black Flag / Rogue | 多个目标 | 可选目标可跨同一任务多次重玩分别获取 | 较低 |

来源：([Synchronization](https://assassinscreed.fandom.com/wiki/Synchronization))、([AC III Completionist Guide](https://psnprofiles.com/guide/23827-assassins-creed-iii-completionist-guide))。

> 来源标注：常被引用的高难度任务（莱昂纳多坦克、Castello 渗透、护送传令官等）来自 WatchMojo 榜单，方向正确但属二手社区归纳，并非权威逐条定义 ([WatchMojo 100% Sync 榜单](https://www.watchmojo.com/articles/hardest-assassins-creed-missions-to-100-sync))。
>
> 另：早期流传的"完全同步功能由 Rebecca 为 Animus 2.0 增加"的人物归属未能核实，已移除，仅保留"随 Animus 2.0 时代（AC II）引入"的事实。

通用机制还包括同步制高点（viewpoints / 瞭望点）：爬到指定瞭望点并同步会揭示周边地图、收集品、支线与兴趣点 ([Viewpoint](https://assassinscreed.fandom.com/wiki/Viewpoint))。

### 2.8 记忆走廊（Memory Corridor）

记忆走廊是 Animus 内的数字构造，让其能从基因记忆重建准确影像，对使用者呈现为空旷的虚拟空间。它主要用作记忆之间的加载屏幕，使用者可在记忆编译时于其中走动并使用武器 ([Memory Corridor](https://assassinscreed.fandom.com/wiki/Memory_Corridor))。

走廊表现为无尽虚空，每个 Animus 软件版本外观不同：

| 版本 | 视觉外观 |
|---|---|
| Animus 1.28 | 冰蓝背景，含模拟雾气与代码串 |
| HR-8 | 透明黄点构成、类似沙丘的地面，地平线明亮落日，背景全黑 |

来源：([Memory Corridor](https://assassinscreed.fandom.com/wiki/Memory_Corridor))。

叙事上，刺杀目标临终时刻在走廊中呈现——目标与杀手（祖先）分享临终之言后接受最后仪式。《起源》中，Bayek 与 Aya 审讯目标时，走廊会生成与目标阴谋及其通往杜阿特（Duat，埃及神话中的来世）相关的视觉表征 ([Memory Corridor](https://assassinscreed.fandom.com/wiki/Memory_Corridor))。

> 已删除/降级的说法：社区称之为"confessions"、"高浓度先行者 DNA（Precursor DNA）让知识（Knowledge）一瞥并表现为走廊对话"、"Syndicate 白灰方块地面"、"Valhalla 按被杀目标定制场景"等均未在核实的 Wiki 正文确认。Valhalla 已核实的内容是 Eivor 与 Odin 在记忆走廊重建场景中的精神对决，并非按被杀目标定制。

### 2.9 RPG 时代：同步规则的大幅放宽

Layla Hassan 使用便携 Animus HR-8（又称 Sarcophagus，由 Madrid Abstergo 在 Sofia Rikkin 主导下开发，可压缩进手提箱、用血液连接替代硬膜外连接）重历 Bayek（《刺客信条 起源》）记忆时，规则较经典时代大幅放宽 ([Animus](https://assassinscreed.fandom.com/wiki/Animus))。

| 作品 | 重历对象 | 设备 | 掉同步方式 | 100% 条件 |
|---|---|---|---|---|
| 《起源》 | Bayek | HR-8 | 受伤过重 / 杀超过三个平民 / 过度冒犯圣猫 | 无 |
| 《奥德赛》 | Kassandra（斯巴达雇佣兵） | HR-8.5（升级版） | 仅受伤过重（杀戮掉同步被彻底取消） | 无 |

来源：([Synchronization](https://assassinscreed.fandom.com/wiki/Synchronization))、([Animus](https://assassinscreed.fandom.com/wiki/Animus))。

掉同步不再是永久的——可脱离战斗、等待同步条充能恢复；且与此前所有 Animi 不同，RPG 时代没有任何 100% 同步条件 ([Synchronization](https://assassinscreed.fandom.com/wiki/Synchronization))。

圣猫（sacred cats）细节：杀猫像杀平民一样掉同步，游戏会给两次警告（"Cats are sacred beings, a Medjay must respect them" / "Cats casualties will result in desynchronization"），第三次即触发不同步（"Desynchronized. Excessive offense to the sacred cats"）([Synchronization](https://assassinscreed.fandom.com/wiki/Synchronization))。

### 2.10 《起源》Animus 控制面板（ACP）：可关闭杀戮掉同步

《起源》提供 Animus 控制面板（Animus Control Panel, ACP），可自定义体验（必杀刺杀、近无限 HP、无限箭矢/工具、杀平民和猫不掉同步、修改昼夜时长等）。其中的去同步规则（desynchronization rule）开关控制是否因杀平民/杀猫掉同步：关闭即不再掉同步 ([ACP | Ubisoft Help](https://www.ubisoft.com/en-us/help/assassins-creed-origins/gameplay/article/animus-control-panel/000062381))、([desynchronization rule | Steam Community](https://steamcommunity.com/app/582160/discussions/0/3211505894130485521/))。

Ubisoft 从 Uplay 切换到 Ubisoft Connect 后，移除了游戏内 ACP 面板（Shift+F2 只剩商店/成就，无法再改设置），并表示该功能不会重新加入、目前无已知回归计划。由于游戏仍读取存在的配置文件，社区可手动编辑配置文件、或使用 Nexus Mods 上的独立 ACP 工具恢复（需先加载已启用 ACP 的存档；游戏在加载存档时会自行写配置，故改动须在加载后再保存）([ACP | Nexus Mods](https://www.nexusmods.com/assassinscreedorigins/mods/232))。

> 修正说明：(1) 配置文件名为 `ACP.ini`，开关名为 desynchronization rule；早期流传的配置项名 `DesyncOnKillEnabled = false` 疑为杜撰，已删除。(2) Steam 版 `ACP.ini` 直接位于 Documents 文件夹下，而非 `Documents/Assassin's Creed Origins` 子目录。(3)"进入 ACP 存档后不可逆转回非 ACP 状态"未在核实来源确认，降级为社区注意事项。

### 2.11 《幻景》(Mirage)：完全同步重构为可选难度挑战

现代系列重新定义了完全同步：在《刺客信条 幻景》中，Full Synchronization 不再是逐任务的可选目标，而是开新游戏时可激活的额外难度挑战，通关并保持其激活可解锁累积奖励 ([Full Synchronization | Ubisoft Help](https://www.ubisoft.com/en-us/help/assassins-creed-mirage/gameplay/article/full-synchronization-feature-in-assassins-creed-mirage/000106881))。

> 待逐字核对：该官方 Ubisoft Help 页面（000106881）因 JS 渲染导致抓取返回空内容，URL 真实可访问、方向与系列认知一致，但"奖励自动进入任意存档库存"等具体措辞未独立逐字核实。

### 2.12 电影《刺客信条》：Animus 4.3 无同步条

2016 年电影中，Callum (Cal) Lynch 被 Abstergo 抓入 Animus 4.3，重历 15 世纪西班牙刺客 Aguilar de Nerha 的记忆。电影版 Animus 改为室内模拟器：机械臂从背后钩入 Callum，以全息影像呈现 Aguilar 的经历，区别于游戏中的躺椅式设备 ([Assassin's Creed (film)](https://assassinscreed.fandom.com/wiki/Assassin's_Creed_(film)))。

关键设定点：

- 电影没有屏幕上的同步条（那是游戏的 HUD 元素）([Assassin's Creed (film)](https://assassinscreed.fandom.com/wiki/Assassin's_Creed_(film)))。
- Callum 在 Aguilar 做出"信仰之跃"（Leap of Faith）后发生快速不同步（rapid desynchronization），Sofia 的医疗团队迅速介入防止脑损伤，Callum 因此一度被迫坐轮椅 ([Callum Lynch](https://assassinscreed.fandom.com/wiki/Callum_Lynch))。
- 电影主要通过出血效应（Bleeding Effect）呈现不完美同步的后果：Callum 受 Aguilar 幻影困扰，甚至在下次进入 Animus 时攻击伤及一名员工，后逐渐缓解；出血效应也让 Callum 习得 Aguilar 的战斗与跑酷技能 ([Assassin's Creed (film) - Wikipedia](https://en.wikipedia.org/wiki/Assassin's_Creed_(film)))。

> 修正说明：早期"偏离即被立刻弹出/暂时部分瘫痪"的表述已修正——"短暂坐轮椅"属于快速不同步后的脑/生理后果，且来自 Wiki 整理而非电影逐帧明确展示。

### 2.13 玩家社区的通俗理解（社区推测）

玩家社区常见的口语化解读是：你在重历一段固定的过去——他的记忆、他的人生，必须完全照他做过的来做，否则就不同步；这就是为什么杀家畜、杀平民、让自己死亡、或在特定时间去他没去过的区域会不同步 ([Why Assassin's Creed Doesn't Let You Kill Civilians](https://screenrant.com/assassins-creed-kill-civilian-murder-innocent-desychronize-animus/))、([desync from slaughtering civilians | Steam Community](https://steamcommunity.com/app/582160/discussions/0/1640915206477601029/))。

这是对 canon 设定的玩家归纳与口语化表述，方向与官方一致，但具体举例（如"家畜"）属玩家推测层面的整理，并非官方逐条定义。**（社区推测）**

---

## 3. 出血效应：副作用与技能迁移

出血效应（Bleeding Effect）是 Animus 用户因过度暴露而出现的官方设定紊乱症（disorder）：祖先的遗传记忆（genetic memory）开始与使用者自身的实时记忆混合，使用者难以区分两者，严重时导致精神崩溃。它是一把双刃剑——负面引发认知退化、时间性幻觉乃至脑死亡，正面则把祖先的格斗、跑酷、鹰眼等技能渗透给现实使用者。刺客组织借此快速训练新人；圣殿骑士 Abstergo 反向利用同一逻辑批量训练特工，并最终将其商业化为消费产品。

### 3.1 核心机制：遗传记忆与实时记忆的混合

出血效应的本质是把祖先的思想、技能与经验从祖先传递给后代。其最常见诱因是过度使用 Animus 虚拟机。游戏内文件（Lucy Stillman 致 Warren Vidic 的邮件，《刺客信条》初代）对 16 号实验体的描述为："Prolonged exposure to the Animus caused a Bleeding Effect within Subject Sixteen's genetic structure. The result was a blending of genetic and real-time memory."（长期暴露于 Animus 在其基因结构中造成出血效应，结果是遗传记忆与实时记忆的混合）([Bleeding Effect](https://assassinscreed.fandom.com/wiki/Bleeding_Effect))。

设定还提到，前世回溯（past life regression）与解离性身份障碍等现象被推测可能源自罕见、自然发生的出血效应，但该理论既未被证实也未被推翻 ([Bleeding Effect](https://assassinscreed.fandom.com/wiki/Bleeding_Effect))。

### 3.2 症状分层

出血效应的症状从轻度认知干扰一路延伸到不可逆的生理损伤与人格丧失，可大致分为三层。

| 分层 | 症状 | 性质 | 来源 |
| --- | --- | --- | --- |
| 认知/感知层 | 认知退化（degradation of cognition）、时间性幻觉（temporal hallucinations）、多重意识问题（multiple awareness issues）、现实重叠（overlapping realities） | 可逆/渐进 | 《刺客信条 II》中 Rebecca Crane 台词 ([Bleeding Effect](https://assassinscreed.fandom.com/wiki/Bleeding_Effect)) |
| 极端生理层 | 精神退化（mental degradation）直至完全精神不稳定（total psychological instability）、海马冲击（hippocampal shock）、枕叶残影（occipital ghosting）、脑死亡（brain death） | 极端/部分不可逆 | 《刺客信条：大革命》数据库"Helix 营销策略备忘录" ([Animus](https://assassinscreed.fandom.com/wiki/Animus)) |
| 人格层（最严重罕见） | 身份替换（identity substitution）：误认自己为祖先、丧失自我身份 | 罕见且严重 | ([Bleeding Effect](https://assassinscreed.fandom.com/wiki/Bleeding_Effect)) |

Rebecca Crane 向 Desmond 列举副作用的台词是设定中对症状最权威的概括性表述："Degradation of cognition, temporal hallucinations, multiple awareness issues, overlapping realities, you know."（该台词的剧情内时间为 2012 年，准确出处为《刺客信条 II》）([Bleeding Effect](https://assassinscreed.fandom.com/wiki/Bleeding_Effect))。极端生理风险中，"枕叶残影"对应通俗所说的视觉残影。

### 3.3 身份替换：最严重的人格层症状

身份替换是出血效应中罕见且严重的症状：受试者不仅吸收祖先的体能技能，还吸收其人格与思维方式，进而误认自己就是祖先。官方案例如下。

| 角色 | 误认对象 | 经过与结局 | 出处 |
| --- | --- | --- | --- |
| Maxime Gorm（刺客，被 Abstergo 改造为潜伏特工） | 祖父 Eddie Gorm | 2017 年被 Animus 工程师 Thomas 与 Alice Adler 囚于地下室，被迫重历祖父记忆；在体验到祖父被施以"钟形装置 Die Glocke"后遗忘自身身份、相信自己就是 Eddie Gorm。后虽意识到自己并非祖先，仍处于失忆状态 | 漫画《刺客信条：阴谋》第一卷 Die Glocke |
| Robert Fraser（Abstergo Entertainment 雇员，前 14 号实验体，作者 Christie Golden 确认） | 法国刺客 Arno Dorian | 2014 年研究 Arno 记忆时出现强烈出血效应，相信自己是 Arno，转而破坏自己的研究、烧毁上司 Aidan St. Claire 的硬盘，最终因风险被 Abstergo 处决 | ([Bleeding Effect](https://assassinscreed.fandom.com/wiki/Bleeding_Effect)) |

身份替换还被设计为阴谋工具：Nathalie Chapman 计划重启 Project BLUEBIRD，利用 Animus Omega 的转移效应，以早已死去的刺客的记忆与人格覆盖测试对象（对象心智越是"未开垦地"效果越好），企图打造超级士兵军队 ([Bleeding Effect](https://assassinscreed.fandom.com/wiki/Bleeding_Effect))。

### 3.4 正面价值：技能迁移

出血效应的正面一面是技能迁移：使用者可习得祖先的格斗（combat）、跑酷/自由奔跑（freerunning）能力乃至鹰眼（Eagle Vision）。17 号实验体 Desmond Miles 正是通过长期暴露于 Animus 获得祖先的格斗、跑酷及使用鹰眼的能力 ([Bleeding Effect](https://assassinscreed.fandom.com/wiki/Bleeding_Effect))。

Desmond 的幻觉也具实用性：他通过跟随 Ezio 的幻象，导航 Villa Auditore 地下、斗兽场（Colosseum）与 Basilica di Santa Maria in Ara Coeli 的隧道，并在 Monteriggioni 跟随 Ezio 幻象完成首次信仰之跃（Leap of Faith）。本质上，Animus 加出血效应让人能在数天到数周内习得几辈子的技能，代价是精神状态恶化 ([Bleeding Effect](https://assassinscreed.fandom.com/wiki/Bleeding_Effect))。

### 3.5 典型案例

**案例一：Clay Kaczmarek（16 号实验体）——失控、疯狂、血书与疑似自杀。** 据 Lucy Stillman 的分析邮件，Clay 连续数天留在 Animus 中（remained in the Animus for days at a time），逐渐无法控制出血效应，被在 Animus 外体验到的遗传记忆逼至疯狂（driven to insanity）。其认知严重衰退：难以记起自己是谁、当前是哪一年，甚至记不起自己的名字；但仍清醒到坚持揭示真相（the Truth），并留下供后来者解读的讯息与线索（Glyphs）。这种执念最终导致他用自己的血在被囚禁的实验室墙上写下警告，并"疑似自杀"（apparent suicide，原文措辞；后续设定对其死因另有说法）。Desmond 曾担忧若不能阻止逐渐变长的幻象，他不久也会像 Clay 一样在墙上"画符号" ([Bleeding Effect](https://assassinscreed.fandom.com/wiki/Bleeding_Effect))。

**案例二：Desmond Miles（17 号实验体）——幻觉渐进恶化与身份混淆。** Desmond 的症状由轻到重渐进：幻象起初呈幽灵般、模糊不清（phantom-like and indistinct），后变得更长更生动，一度令他黑视/昏厥（black out）。判断阈值：只要幻象持续少于 30 秒便无危险。身份混淆方面，他把祖先记忆当成自己的——在 Monteriggioni 地下隧道对 Lucy 说"上次我在这里时……"，被纠正那是 Ezio Auditore 的经历。刺客组织明知风险，仍刻意利用出血效应快速训练 Desmond ([Bleeding Effect](https://assassinscreed.fandom.com/wiki/Bleeding_Effect), [Desmond Miles](https://assassinscreed.fandom.com/wiki/Desmond_Miles))。

> 重要厘清：Desmond 用袖剑刺杀 Lucy Stillman **并非**出血效应所致。Desmond 在斗兽场地下取得伊甸苹果后，身体被 Isu 成员朱诺（Juno）操控，朱诺揭露 Lucy 是叛徒后迫使其刺杀她；此事属伊甸苹果/朱诺操控，与出血效应无关 ([Desmond Miles](https://assassinscreed.fandom.com/wiki/Desmond_Miles))。

**案例三：Layla Hassan——技能迁移与攻击性失控。** Layla 是 Abstergo 历史研究部门研究员，用便携 Animus 重历隐藏者共同创始人 Bayek 与 Amunet 的记忆，通过出血效应获得二人战技；在 Abstergo 的 Sigma 小队追杀时，她把回收来的 Amunet 袖剑用胶带绑在前臂，凭出血效应所得技能击退攻击者。心理恶化方面：2018 年她持续重历 Kassandra 记忆时行为日益具攻击性，Victoria Bibeau 被迫强行把她拉出 Animus 并指出是出血效应在影响她；最终 Layla 在一次失控（outburst）中用赫尔墨斯三重伟大之杖（Staff of Hermes Trismegistus）误杀了 Victoria。到《英灵殿》时期（2020），长期使用 Animus 使她出现抑郁、虚无、自毁症状，Shaun Hastings 在她颈部安置情绪稳定器（mood stabilizer）以防她再度屈服于出血效应或权杖影响 ([Layla Hassan](https://assassinscreed.fandom.com/wiki/Layla_Hassan))。

> 关于 Victoria 之死的归因存在两种说法：Wiki 将诱因归于出血效应与权杖影响并存，而外部来源 ScreenRant 主要归因于权杖（Staff）的影响 ([ScreenRant](https://screenrant.com/assassins-creed-layla-hassan-story-valhalla-mirage/))。另需区分：Eivor 的同步异常源于其 DNA 中叠加了两条不同数据流（即 Odin/Reborn Isu 转世设定）有时令模拟失稳，属 Isu 转世机制，与出血效应是不同设定，不应混为一谈 ([Layla Hassan](https://assassinscreed.fandom.com/wiki/Layla_Hassan))。

### 3.6 圣殿骑士的反向利用：Animi 训练计划

Animi 训练计划（Animi Training Program）是圣殿骑士的秘密计划，目的是通过 Animus 训练 Abstergo 雇员掌握对抗刺客残余势力所需的格斗、跑酷技能。其运作原理正是强制诱发出血效应——多人模式 Wiki 明确写道，计划让受训者通过 Animi 重历各受试者祖先的记忆，"以对观看记忆的圣殿骑士强加出血效应"（to force the bleeding effect upon the Templar viewing the memory），逻辑与刺客训练 Desmond 如出一辙 ([Animi Training Program](https://assassinscreed.fandom.com/wiki/Animi_Training_Program), [Animi Training Program (Multiplayer)](https://acmultiplayer.fandom.com/wiki/Animi_Training_Program))。

该计划在 Desmond 逃脱后不久于 Abstergo 罗马设施启动，由 Warren Vidic 主持（场内有数十台 Animi），Vidic 与 Theodore Rizzo 还借助 Daniel Cross 训练特工。受训者 Juhani Otso Berg 升任宗师级（Master Templar），并率队在开罗擒获刺客领袖 William Miles ([Animi Training Program](https://assassinscreed.fandom.com/wiki/Animi_Training_Program))。

| 阶段 | 训练内容 | 备注 |
| --- | --- | --- |
| 第一阶段 | 重历文艺复兴时期意大利圣殿骑士与非刺客者，并互相虚拟对战 | — |
| 第二阶段 | 把受试者投射到奥斯曼帝国时期（age of the Ottoman Empire）的人物身上，在地中海与中东各地开放更多训练类型 | 准确表述为"奥斯曼帝国时期"，非"奥斯曼文艺复兴" |

> 数据可信度说明：本小节整体为 Wiki 整理（非纯游戏内可直接验证）。社区曾流传的"第二阶段筛选技能吸收率（adoption rate）更高者、使用 Animi Avatars""早在 2010 年 Vidic 已招募 Berg"等细节，在主 Wiki 与多人 Wiki 两个来源中均无文本支撑，应视为**（社区推测）**，不计入本设定。

### 3.7 商业化：从训练计划到消费产品

在 Berg 的训练被证明成功后，Abstergo 通过子公司 Abstergo Entertainment 把 Animus 技术分发到全球家庭，公众用户被投射到美国独立战争时期的人物身上；同时还建立了 Geosimulation Workspace（投射到七年战争末期人物，对应《刺客信条 III：解放》）。第三阶段大获成功后，又推出以海盗黄金时代（Golden Age of Piracy）为题材的续作（对应《刺客信条 IV：黑旗》）([Animi Training Program](https://assassinscreed.fandom.com/wiki/Animi_Training_Program))。

这一计划同时是系列多人模式（multiplayer，最早见于《兄弟会》Brotherhood）的剧情内框架：在线玩家被设定为参与 Abstergo Animi 训练计划的受试者，扮演文艺复兴时期的圣殿骑士互相竞争，并通过出血效应发展自身技能 ([Animi Training Program (Multiplayer)](https://acmultiplayer.fandom.com/wiki/Animi_Training_Program))。

### 3.8 量化阈值与代际加剧

设定明确出血效应与使用时长强相关，并存在可量化阈值。

| 量化参数 | 数值 | 出处 |
| --- | --- | --- |
| 一次性触发阈值 | 一次性在 Animus 内待满 6 小时（as much as six hours at any one time）即可触发出血效应 | 《刺客信条 IV：黑旗》([Bleeding Effect](https://assassinscreed.fandom.com/wiki/Bleeding_Effect)) |
| 幻象安全阈值 | 幻象持续少于 30 秒无危险，超过则有危险 | ([Bleeding Effect](https://assassinscreed.fandom.com/wiki/Bleeding_Effect)) |
| 防护性限制 | 2013 年 Abstergo Entertainment 的 Sample 17 Project 把参与者每天 Animus 时间限制在数小时内（研究员若愿意可轻易无视） | ([Sample 17 Project](https://assassinscreed.fandom.com/wiki/Sample_17_Project)) |

关键变量是**连续且不间断使用**（continued and uninterrupted use）：长期不间断使用导致受试者精神逐步退化，极端时完全精神不稳定 ([Animus](https://assassinscreed.fandom.com/wiki/Animus))。

新技术会加剧风险。2023 年 Zhawang Corporation（由 Claire Zhang 主导）基于窃取的 Abstergo 图纸逆向 Animus 技术，制造出 Brahman 3.0——结构上类似 Abstergo 的 Animus 4.3，含一条固定在用户腰部的机械臂以模拟宿主动作（含跳跃与信仰之跃），并额外加入类似 Brahman V.R. 的头戴设备增强沉浸。其早期测试因同步率提升导致出血效应加剧（aggravated Bleeding Effect），令大多数测试对象发疯，仅少数（如 Claire 之弟 Nathan Zhang）相对无恙逃脱（出处《刺客信条：被遗忘的神殿》Forgotten Temple webtoon）([Brahman 3.0](https://assassinscreed.fandom.com/wiki/Brahman_3.0))。

---

## 4. Animus 界面与模拟系统

Animus（阿尼姆斯）的核心设计思路，是把"重历祖先遗传记忆"这件事，包装成一整套类电子游戏的可操作接口。玩家在屏幕上看到的任务、计量条、地图、潜行提示，在设定层并非凭空叠加的 UI，而是被解释为 Animus 软件读取与还原遗传记忆时的工作界面。这一节梳理这套接口的各个子系统：HUD 与反馈、操纵/木偶系统、同步度约束、两类关键虚拟空间（白色房间 / 黑色房间）、虚拟训练、数据库、现代统一入口，以及故障与记忆损坏的呈现方式。

### 4.1 HUD 与反馈状态系统：把模拟"游戏化"

Animus 的抬头显示器（Heads-up Display, HUD）是叠加在模拟画面上的信息层，让使用者在不脱离模拟的前提下监控关键信息，并据此对记忆同步施加特定约束。在设定/meta 层面，HUD 是 Animus 用来"正当化"游戏性与剧情分离（Gameplay and Story Segregation）的装置——完成度计量条（Completion Meter）等电子游戏式目标与设备，被解释为对某位祖先经历的"同步度（Synchronization）"度量 ([Animus](https://assassinscreed.fandom.com/wiki/Animus))。

反馈状态系统（Feedback State System）通过 HUD 多个区域回传模拟信息，包括记忆目标与警告、情境与教程信息、各类更新。其中社交状态指示器（Social Status Indicator）告诉使用者特定被模拟角色对当前动作的反应，即是否引起怀疑或敌意——这构成了潜行系统在设定层的解释：侦察条、怀疑度本质上都是 Animus 反馈系统对"模拟内反应"的可视化 ([Animus](https://assassinscreed.fandom.com/wiki/Animus))。

地图、迷你地图、任务提示与记忆标记同样作为 HUD 组成部分呈现。按 HUD 总原则，它们属于反馈/同步辅助显示层。但需明确：Wiki 与官方对 HUD 的总述清晰，而"迷你地图/具体地图图标各自对应何种 Animus 子系统"缺乏官方逐条设定文档，多为依据"HUD 即同步界面"总原则做的合理推断（社区推测），不应视为硬 canon ([Animus](https://assassinscreed.fandom.com/wiki/Animus); [Synchronization](https://assassinscreed.fandom.com/wiki/Synchronization))。

### 4.2 操纵 / 木偶系统：把记忆控制改写成按键输入

Animus 的控制/操纵系统让使用者像操纵木偶（puppet）一样控制被模拟者，每个肢体对应一个输入；后期版本开始把多种交互绑定到单个输入上 ([Animus](https://assassinscreed.fandom.com/wiki/Animus))。

在初代《刺客信条》PC 版的游戏内文档《Animus Control & Feedback》中，明确给出四肢映射。该文档由刺客 Lucy Stillman（露西·斯蒂尔曼）针对 Animus 1.28 功能撰写并持续更新；2012 年 9 月她在 Desmond（"Subject 17"）抵达罗马实验室前把文档发给 Warren Vidic（沃伦·维迪克），Vidic 添加了批注（如"按住按键比连点更有效"）([Animus Control & Feedback (Updated)](https://assassinscreed.fandom.com/wiki/Animus_Control_%26_Feedback_(Updated).txt))：

| 肢体部位 | 默认按键（PC） | 说明 |
| --- | --- | --- |
| 头部（Head） | E | 情境交互 |
| 持武器手（Weapon Hand） | 鼠标左键 | 攻击/使用武器 |
| 空手（Empty Hand） | 左 Shift | 抓取/互动 |
| 双腿（Legs） | 空格 | 跑动/攀爬，功能随情境变化（马背高调态=疾驰，近战中=冲刺/突进） |

HUD 右上角实时显示每个键当前功能，功能随情境（context）变化。注意"木偶"比喻在不同平台手册存在差异，PC 版以此口吻写成；该机制在《兄弟会》等后续作中延续 ([Animus Control & Feedback](https://assassinscreed.fandom.com/wiki/Animus_Control_%26_Feedback.txt); [Controls](https://strategywiki.org/wiki/Assassin's_Creed/Controls))。

操纵系统还允许调节动作强度（intensity），即低调态/高调态开关：

| 状态 | 触发 | 行为特征 |
| --- | --- | --- |
| 低调态（Low Profile） | 默认 | 动作不张扬、符合社交场合、偏潜行；动作键上下文为行走、混入人群、扒窃等 |
| 高调态（High Profile） | 按住鼠标右键 | 更快、更具攻击性；可自由奔跑、抓投、战斗，但更易惊动卫兵 |

Vidic 在批注里把切到高调态形容为"就像踩下油门一样（This is like stepping on the accelerator!）"。《刺客信条2》中 Ezio（艾吉奥）默认处于低调态 ([Animus Control & Feedback (Updated)](https://assassinscreed.fandom.com/wiki/Animus_Control_%26_Feedback_(Updated).txt); [AC II Controls](https://strategywiki.org/wiki/Assassin's_Creed_II/Controls))。

### 4.3 同步度（Synchronization）：核心约束机制

同步度是 Animus 对"使用者贴合祖先记忆程度"的可视化度量。完全按记忆原样行动达到满同步（full synchronization），并可解锁某些被压抑的记忆；偏离则导致记忆不稳定，最终被完全逐出，模拟从更早的点重启（即失同步/desynchronization）([Synchronization](https://assassinscreed.fandom.com/wiki/Synchronization))。

对 Desmond 的祖先而言，触发失同步的行为包括：从高处坠落、战斗中受伤、进入被封锁/限制区域（说明祖先当时没去过那里）。专门菜单追踪同步度，列出各段记忆、其同步约束（Synch Constraints），以及需完成或交互的活动与物品——这正是"完整同步条件"在设定层的来源 ([Synchronization](https://assassinscreed.fandom.com/wiki/Synchronization); [Animus](https://assassinscreed.fandom.com/wiki/Animus))。

同步规则随型号演变，可分代对照：

| 型号/阶段 | 同步机制 | 失同步触发 | 满同步要求 |
| --- | --- | --- | --- |
| 经典 Animus（初代～《启示录》） | 同步度计量，偏离即重启 | 坠落、受伤、进入限制区域 | 各记忆有 Synch Constraints |
| 便携 Animus HR-8（《起源》，Layla Hassan 重历 Bayek） | 实时同步条，可恢复 | 受伤过多、杀超过三名平民、过度冒犯圣猫（杀猫前先给两段警告） | 无任何强制 100% 条件 |
| 新型号（《被遗忘的神殿》，Noa Kim 重历 Edward Kenway） | 不显示同步条，但偏离可致命 | 偏离祖先行为（详见 4.7） | — |

HR-8 取消满同步硬性条件，反映《起源》起系列弱化"强制照搬史实"约束、放开沙盒自由度的设计转向 ([Synchronization](https://assassinscreed.fandom.com/wiki/Synchronization))。

### 4.4 白色房间 / 记忆走廊（White Room / Memory Corridor）：加载与构建缓冲

记忆走廊（Memory Corridor）是让 Animus 从对象遗传记忆中重建准确影像的数字构造（digital construct），对使用者呈现为 Animus 内一片空旷的虚拟空间（"白色房间"），本质是记忆之间的加载屏幕（loading screen）。记忆编译时使用者可在其中走动，期间会看到 Animus 建议（Animus Advice）——关于 Animus 功能的简短复习或历史背景片段。"White Room/Black Room"术语源自创意总监 Alexandre Amancio 的访谈表述 ([Memory Corridor](https://assassinscreed.fandom.com/wiki/Memory_Corridor); [Animus](https://assassinscreed.fandom.com/wiki/Animus))。

其外观随软件版本演变：

| 版本 | 背景 | 视觉元素 |
| --- | --- | --- |
| Abstergo Animus 1.28 | 冰蓝（icy-blue） | 模拟雾气 + 成串计算机代码 |
| Animus 2.0 / 2.01 | 浅灰背景 | 白线；正式称为"White Room" |
| Animus 3.0 | 冰蓝（无雾气） | 三角碎片拼合（取代 1.28 的代码串） |

需澄清：三角碎片是 Animus 3.0 特征，并非 1.28 ([Memory Corridor](https://assassinscreed.fandom.com/wiki/Memory_Corridor); [Animus](https://assassinscreed.fandom.com/wiki/Animus))。

### 4.5 黑色房间 / Animus 岛（Black Room / Animus Island）：底层"安全模式"

黑色房间（Black Room），又称 Animus 岛（Animus Island），是 Animus 虚拟机内部创建的安全模式（safe mode），即最初的测试程序，只含基础物理与天气模拟，而非重历记忆数据；它并非为人类直接接入而设计，构成 Animus 更高层编程的骨干 ([Black Room](https://assassinscreed.fandom.com/wiki/Black_Room))。

《刺客信条：启示录》的关键部分在此发生：Desmond 在黑色房间醒来，遇到 Clay（克莱，即 Subject 16）的数字构造体，被告知必须重历 Ezio 和 Altaïr（阿泰尔）的剩余记忆直到两人生命交汇点，才能让 Animus 把祖先遗传记忆从 Desmond 自己的记忆中分离、使其脱离昏迷。出于游戏目的，黑色房间在通关后会重建，以便 Desmond's Journey 与 The Lost Archive 等内容仍可访问 ([Black Room](https://assassinscreed.fandom.com/wiki/Black_Room); [Assassin's Creed: Revelations](https://assassinscreed.fandom.com/wiki/Assassin's_Creed:_Revelations))。

黑色房间采用独特的第一人称解谜（puzzle-oriented）玩法，表现 Desmond 拼凑潜意识的过程。据开发者 Alexandre Breault 所述，该玩法受 René Magritte（雷内·马格利特，超现实主义画家）和 Roger Penrose（罗杰·彭罗斯，不可能几何）作品启发，故黑色房间在游戏内部文件中被昵称为"Penrose Island"。收集 Animus 数据碎片（Animus data fragment）可全程第一人称重历 Desmond 过去多段记忆；集齐共 30 个数据碎片可解锁窄门，看到此前人生的若干关键时刻（5/15/30 个碎片分别解锁 Doubts / Escape / Regret）([Black Room](https://assassinscreed.fandom.com/wiki/Black_Room); [Animus data fragment](https://assassinscreed.fandom.com/wiki/Animus_data_fragment))。

### 4.6 虚拟训练与数据库系统

**Animus 虚拟训练程序（Animus Virtual Training Program）** 由 Rebecca Crane（丽贝卡·克兰）植入 Animus 2.01，是给 Desmond 的一系列教程任务，用于提升公开战斗、自由奔跑和暗杀技能。其环境与记忆走廊背景相似，Desmond 进入每个挑战时总以祖先 Ezio 的形象出现。《兄弟会》中包含四类挑战：自由奔跑（Free Run）、潜行暗杀（Stealth Assassination）、定位（Locate）、战斗（Combat），支持在线排行榜竞争；完成可获"Perfectionist"奖杯（需在任一训练类别拿 3 枚金牌）。需注意作品归属："Ezio 固定穿默认白袍配 Seusenhofer 甲、装备通用剑/匕首/双袖剑/弩、受外观自定义但不受武器护甲自定义影响"这一套装备细节，属于《刺客信条2：发现》（AC II: Discovery）的虚拟训练程序，而非《兄弟会》([Animus Virtual Training Program](https://assassinscreed.fandom.com/wiki/Animus_Virtual_Training_Program); [Perfectionist Trophy](https://www.playstationtrophies.org/game/assassins-creed-brotherhood/trophy/21993-perfectionist.html))。

**数据库（Database）** 是 Animus 或 Helix 使用者可访问的信息词条集合，介绍探索遗传记忆时遇到的人物、地点、物品、事件。它在 Rebecca Crane 制作的 Animus 2.0 中引入，词条由 Shaun Hastings（肖恩·黑斯廷斯）撰写，当 Desmond 在 Ezio 记忆中遇到目标人/物时解锁，Shaun 与 Rebecca 均可加批注。词条准确性取决于撰写者：当数据库落入 Templar（圣殿骑士）之手（如《解放》中 Abstergo Entertainment 编写的版本），常因美化圣殿骑士而遗漏、歪曲或造假，刺客或其盟友黑客组织 Erudito 会侵入文件纠正；即便刺客所写也偶有错误——Vieri de' Pazzi（《刺客信条2》词条把生年误写成 1454，百科修正为 1459）、Duncan Little（Shaun 把生年误写为 1730 而非 1742）([Database](https://assassinscreed.fandom.com/wiki/Database); [Animus](https://assassinscreed.fandom.com/wiki/Animus))。

需标注待核实点：原始资料中"Layla 用改造的 Animus HR-8.5 探索 Eivor 记忆时数据库被称为 Codex"一句未获独立证实，"HR-8.5"型号与"Codex"命名尚需进一步核对，不作为硬 canon；《英灵殿》现代线由 Shaun/Rebecca 协助 Layla 探索 Eivor 记忆这一大前提仍成立 ([Database](https://assassinscreed.fandom.com/wiki/Database))。

**现代统一入口** 方面，约 2014 年 Abstergo Entertainment 发布 Helix——存储 Templar 多年收集的大量遗传记忆的软件，搭配游戏主机让任何人无需血缘即可观看记忆（先后用于重历 Arno Dorian、Jacob 与 Evie Frye 等记忆），数据库通过 Helix 访问，并以 Helix Navigator 的型号迭代（如 4.0 才出现记忆走廊）。系列最新统一框架是 Animus Hub（前称 Codename Infinity）：据系列副总裁、执行制作人 Marc-Alexis Côté（马克-亚历克西斯·科泰）2022 年说明，Infinity 是面向未来所有系列作品的中枢入口、未来支持多人；2024 年中改名为 Animus Hub。其设定内入口随《刺客信条：影》落地，用 hacked "Animus EGO" 重历 Yasuke（弥助）与藤林直江（Naoe）记忆，含 Memories / Projects / Exchange / Vault 四区，Vault 用数据碎片解密文件 ([Animus Hub](https://assassinscreed.fandom.com/wiki/Animus_Hub); [Helix](https://assassinscreed.fandom.com/wiki/Helix); [Database](https://assassinscreed.fandom.com/wiki/Database))。

**Animus 控制面板（Animus Control Panel, ACP）** 是《刺客信条：起源》的免费 PC 独占工具（2018 年 4 月 18 日随约 5GB 更新上线，集成于 Uplay 覆盖层）。设定上它是 Animus HR-8 的一个程序，让 Layla Hassan 在重历 Medjay Bayek 记忆时"黑入（hack）"模拟参数：先标记一个存档（按 Q）生成新存档槽，存档名下标注"Animus Hacked"以区分，可随时回到不受影响的原档。ACP 共 75 个参数、分 11 个类别（VULKK 的分组列举与官方分类略有出入），提供"Hardcore Stealth / God Mode / Mad World"三套预设，可调玩家/NPC 伤害与血量倍率、敌人侦察/搜索范围、昼夜时长、阵营缩放等，并可选择 HUD 上显示哪些元素 ([Animus Control Panel - Ubisoft](https://www.ubisoft.com/en-us/help/assassins-creed-origins/gameplay/article/animus-control-panel/000062381); [Animus Control Panel](https://assassinscreed.fandom.com/wiki/Animus_Control_Panel); [VULKK](https://vulkk.com/2018/04/19/assassins-creed-origins-animus-control-panel-overview/))。需标注待核实点："ACP 修正值与难度设置相乘叠加"以及"迁移到 Ubisoft Connect 后入口被移除但游戏仍读取 ACP.ini"两点未在官方/VULKK 来源中独立证实，属玩家整理/待核实，而非官方确认。

### 4.7 故障与记忆损坏的呈现

Animus 用多层手段把"祖先未经历过的区域/动作"和"模拟崩溃"可视化，并把记忆损坏延伸到叙事层。

**隐形屏障与画面故障**：Animus 会在使用者试图进入祖先当时未踏足的环境时竖起屏障（barrier），极端失同步时弹出使用者。具体故障表现：在 Animus 1.28 的交互式加载序列里持续疾跑足够久，会清除四处闪烁的随机数据碎片，只剩一片蓝色雾气（blue, foggy expanse），Altaïr 会撞上隐形屏障——这是把"地图边界/不可进入区域"写成 Animus 模拟极限的可视化 ([Animus](https://assassinscreed.fandom.com/wiki/Animus); [Memory Corridor](https://assassinscreed.fandom.com/wiki/Memory_Corridor))。

**致命级失同步（新型号）**：在《刺客信条：被遗忘的神殿》（Forgotten Temple）中，Noa Kim（诺亚·金，Edward Kenway 的后裔）被 Abstergo 绑架后用 Animus 重历 Edward Kenway（爱德华·肯威）记忆。其使用的 Animus 不显示同步度计量条，但偏离祖先行为仍可致命失同步：当 Noa 试图警告与 Edward 同藏的村民霍乱来袭（史实上刺客并未这么做），Animus 屏幕开始闪红，机器在无法稳定模拟、重新让使用者与宿主同步后最终电击了 Noa，致其心率与肾上腺素飙升。这把"偏离史实导致系统崩溃"从单纯"重启记忆"升级为对使用者本体的物理威胁 ([Synchronization](https://assassinscreed.fandom.com/wiki/Synchronization); [Noa Kim](https://assassinscreed.fandom.com/wiki/Noa_Kim))。

**渗血效应（Bleeding Effect）**：指祖先遗传记忆与使用者自身实时记忆开始交融、难以区分的紊乱，主因是过度暴露于 Animus 虚拟机。症状逐级加重：Rebecca Crane 形容为"认知退化、时间性幻觉、多重意识问题、现实重叠"；表现为视觉与听觉幻觉、身份混淆（Desmond 把 Ezio 的经历当成自己的），极端形态"身份替换（identity substitution）"会让使用者吸收被模拟者的人格（如 Daniel Cross 案例）；Subject 16（Clay）即因严重渗血效应而自杀。它在较新作品中被反派视角重构为主动武器，例如一条 Rift 1 词条："你在 Animus Ego 中的时间本意是削弱你……之前的人称之为「渗血效应」。"([Bleeding Effect](https://assassinscreed.fandom.com/wiki/Bleeding_Effect); [Database: Rift 1 - Bleeding Effect](https://assassinscreed.fandom.com/wiki/Database:_Rift_1_-_Bleeding_Effect))。

**鹰眼视觉（Eagle Vision）与渗血外溢**：鹰眼视觉（术语创于 12 世纪末）是潜伏于人类体内的超感知/"第六感"，源于远古人类与 Isu（先行者）的杂交；Isu 天生完整拥有此感、称之为"知识（Knowledge）"，人类的鹰眼视觉只是其被稀释的版本。在 Animus 接口里它是高亮敌人、目标、可交互物（如扫描数据碎片/字符 Glyph）的可视化感知层；Desmond 在 Animus 外的鹰眼视觉本身即被设定为渗血效应的症状。可证实的外溢案例：漫画人物 Charlotte de la Cruz 长期玩 Helix 后，通过渗血效应无意识继承了祖先 Tom Stoddard 的战斗与潜行技能，并具备"看穿墙壁（看到通风井）"式增强感知——这体现"游戏接口能力反向影响现实使用者"的设定方向 ([Eagle Vision](https://assassinscreed.fandom.com/wiki/Eagle_Vision); [Charlotte de la Cruz](https://assassinscreed.fandom.com/wiki/Charlotte_de_la_Cruz))。

**数据损坏作为可交互谜题**：Subject 16（Clay Kaczmarek，克莱·卡兹马雷克，1982–2012）侵入 Animus，把"真相（The Truth）"视频文件拆成二十块加密数据碎片，以字符（Glyphs）形式藏在 Animus 渲染环境（文艺复兴意大利）的特定建筑上，每个 Glyph 须用鹰眼视觉扫描才能访问，且文件只兼容 Animus 本身。Desmond 解开每个 Glyph 内的谜题解锁短片，集齐 20 段拼成 Adam 与 Eve 携 Apple of Eden 逃离 Eden 的影像。第二层是十处 Rift——只能用鹰眼视觉看到、需爬入而非扫描，其后是十个集群谜题（Cluster puzzles），全部解开后显示一段失真视频"the miracle is in the execution"，并暗藏可执行文件。这是"记忆/数据损坏"作为可交互谜题与视觉失真直接呈现在接口里的典型 ([Glyphs](https://assassinscreed.fandom.com/wiki/Glyphs); [The Truth](https://assassinscreed.fandom.com/wiki/The_Truth))。

---

## 5. 前身技术与伊述根源

本节梳理 Animus（阿尼姆斯）技术在世界观内的真实谱系。其根源并非单一遗物，而是一条横跨伊述时代、中世纪与现代的长链：核心遗物为伊述（Isu / First Civilization，第一文明）制造的 Memory Seals（记忆封印）；最早的"类 Animus"实机是 9 世纪巴格达的 Alruh（阿尔鲁）；而现代 Animus 的原型机谱系实际可上溯至 1940 年代。需要特别强调的官方设定点是：Animus 受 Memory Seals 的发现部分影响，但其软件架构并非建立在封印之上。

### 5.1 技术根源：Memory Seals（记忆封印）

Memory Seals 是伊述遗物，能记录并储存使用者（伊述或人类）的记忆 ([Memory Seals](https://assassinscreed.fandom.com/wiki/Memory_Seals))。其外形为小型圆盘状的金属与石料造物，刻有符号、图标与几何形状，常被类比为古代的费斯托斯圆盘（Phaistos Disc） ([Precursor relic](https://assassinscreed.fandom.com/wiki/Precursor_relic))。封印首次登场于 2011 年《刺客信条：启示录》(Assassin's Creed: Revelations)。据 Abstergo（阿布斯泰戈）档案，被发现或有记载的封印不足约 40 枚，推测此器物在伊述社会中并不普及，多保留给最富有、最有权势者 ([Memory Seals](https://assassinscreed.fandom.com/wiki/Memory_Seals))。

封印是后续一切"重历记忆"技术的器物源头：从 9 世纪的 Alruh，到现代 Abstergo 的遗传记忆研究，都以解读 / 储存记忆这一伊述能力为蓝本。

### 5.2 Altaïr 的封印与 Masyaf Keys（马西亚夫钥匙）

流亡期间，Altaïr Ibn-La'Ahad（阿泰尔）在阿拉穆特（Alamut）刺客堡垒下方的一座小型伊述神庙中取得六枚 Memory Seals ([Masyaf Key](https://assassinscreed.fandom.com/wiki/Masyaf_Key))。该神庙在伊述时代是关押叛逆伊述的监狱，其中最著名的囚徒是 Loki（洛基）——即 Basim（巴辛）的前世 ([Alamut Temple](https://assassinscreed.fandom.com/wiki/Alamut_Temple))。

Altaïr 在封印中录入了一生的关键事件，时间跨度极长：

| 年份 | 录入的关键事件 |
|------|----------------|
| 1189 | 十字军冲突 |
| 1191 | Al Mualim（阿尔·穆阿利姆）死后的叛乱 |
| 1228 | Maria Thorpe 之死与随后的流亡 |
| 1247 | 重返马西亚夫（Masyaf） |
| —— | 马西亚夫陷落时波罗（Polo）兄弟离开 |
| —— | 其本人随后的死亡（临终记忆） |

他将其中五枚封印做成马西亚夫城堡下方图书馆（藏有 Apple of Eden / 伊甸苹果的金库）的门钥匙——门锁以天鹰座（Aquila，主星即 Altair）的五颗星作为锁孔 ([Masyaf Key](https://assassinscreed.fandom.com/wiki/Masyaf_Key))。1257 年蒙古进逼时，Altaïr 把五枚封印连同《典籍》(Codex) 托付给波罗兄弟，第六枚自留，录完临终记忆后锁入图书馆并在其中死去。《典籍》在途中被蒙古夺走丢失，仅五枚封印安全藏于君士坦丁堡；它们成为《启示录》中 Ezio（埃齐奥）寻找的主线 ([Memory Seals#Masyaf Keys](https://assassinscreed.fandom.com/wiki/Memory_Seals#Masyaf_Keys))。

需注意：游戏内从未将这五枚称为"Memory Seals"，"Masyaf Keys"这一叫法来自地中海防御菜单的契约描述。

### 5.3 Alruh：已知最早的"类 Animus"机器

Alruh（阿拉伯语，英译 The Spirit，"灵魂 / 精神"，亦称 Great Work / 伟大工程）登场于 2023 年《刺客信条：幻景》(Assassin's Creed: Mirage)，被 Wiki 定性为系列中已知最早的、与 Animus 类似的机器开发尝试 ([Alruh](https://assassinscreed.fandom.com/wiki/Alruh))。

- **建造方**：古教团（Order of the Ancients），9 世纪。
- **地点**：阿拔斯王朝巴格达智慧宫（House of Wisdom）地下密室。
- **目的**：解读 Memory Seals 的内容。
- **技术来源**：巴格达西南方一处伊述金库（vault）打捞的技术；古教团在 860 年代发掘巴格达周边伊述遗址时发现若干 Memory Seals。
- **关键人物**：身兼智慧宫学者与古教团成员的 Fazil Fahim al-Kemsa（法齐勒）主持；其下属、医师兼教团成员 Hassan 负责建造；刺客（隐秘者 Hidden Ones）成员、发明家 Ahmad ibn Musa 在不知情下协助（Basim 因此被派去寻找他） ([Fazil Fahim al-Kemsa](https://assassinscreed.fandom.com/wiki/Fazil_Fahim_al-Kemsa))。

**运作方式**：将人类测试者置于浑天仪（armillary sphere）中心，把 Memory Seal 插入球体后令环圈旋转，使测试者暴露于封印记录的内容。过程极度危险，多数测试者无法存活，幸存者大多被逼疯；机器始终在建造中（under construction），从未完工 ([Alruh](https://assassinscreed.fandom.com/wiki/Alruh))。剧情高潮中，Basim 伪装成测试者接近 Fazil，趁其试图用 Alruh 对自身做实验时以袖剑将其刺杀，终结了人体试验 ([Basim ibn Ishaq](https://assassinscreed.fandom.com/wiki/Basim_ibn_Ishaq))。

**命名同源**：Alruh（阿拉伯语）与 Animus（拉丁语）含义相同，都意为"灵魂"或"精神"；二者同样通过揭示 Memory Seals 的内容让使用者"进入过去"。Wiki 将其归纳为人类在世界观内反复尝试理解回溯（regression）与遗传记忆（genetic memory）概念的实例之一，这一脉络后由古教团的继承者——圣殿骑士团及其前台 Abstergo——再次重演（此为 Wiki 主题整理性行文，非游戏内逐字台词） ([Alruh](https://assassinscreed.fandom.com/wiki/Alruh))。

> 待核实细节（社区推测）：《幻景》中 Memory Seals 以"全息（holographic）"方式回放记忆，以及"古教团破译古代手稿以增强 Alruh、Zahra 与 Hassan 的分工、焚书掩护绑架翻译家 Hunayn ibn Ishaq"等情节，本次未在核心词条直接核到原文，引用前应再查《幻景》剧情词条 ([Memory Seals](https://assassinscreed.fandom.com/wiki/Memory_Seals))。"封印能回放记忆"这一事实本身已确证；另需区分该古代手稿与 Altaïr 的《典籍》是不同器物。"Fazil 写信向 Qabiha 索要更多测试者""Fazil 绰号 Al-Rabisu""巴格达以北的第二处金库"等细节本次未独立验证（不影响主线设定成立）。

### 5.4 伊述留给 Desmond 的封印信息

卡比托利三神（Capitoline Triad）——Minerva（密涅瓦，Sacred Voice / 神圣之声）、Jupiter（朱庇特，Father of Understanding / 理解之父）、Juno（朱诺，Mother of Wisdom / 智慧之母）——是伊述科学家，曾在大神庙（Grand Temple）封闭多年，试图阻止太阳耀斑引发的大灾变（Great Catastrophe） ([Capitoline Triad](https://assassinscreed.fandom.com/wiki/Capitoline_Triad))。

三人将一系列警告录入数枚 Memory Seals，留给数千年后的 Desmond Miles（戴斯蒙德·迈尔斯）。Juno 的意识被囚禁于神庙后发现这些封印，认定其"充满谎言"，将其扔进神庙下方的深渊 ([Minerva](https://assassinscreed.fandom.com/wiki/Minerva))。

1499 年 12 月 28 日，在梵蒂冈金库（Vatican Vault），Ezio 用教皇权杖（Papal Staff / Staff of Eden）配合伊甸苹果开启密室，遇见 Minerva 的全息投影——她越过 Ezio 直接向 Desmond 传话，预知他将通过 Animus 查看祖先记忆，并托付其寻找其他金库、阻止 2012 年的第二次灾变 ([Vatican Vault](https://assassinscreed.fandom.com/wiki/Vatican_Vault))。

> 年代修正：Desmond 与 Jupiter 的对话发生在 2012 年现代时间线、地点为大神庙的同步连结点（Synch Nexus），并非此前设定稿所写的"1512 年马西亚夫"。Jupiter 在此告知 Desmond 大灾变细节与阻止第二次灾变的方法 ([Jupiter](https://assassinscreed.fandom.com/wiki/Jupiter))。

### 5.5 现代 Animus 的原型机谱系

Animus 是由 Abstergo Industries 开发并最终商业化的机器，能读取宿主的遗传记忆（genetic memory）并三维投射；遗传记忆指通过 DNA 数字化数据存储、代代相传的祖先记忆集合 ([Animus](https://assassinscreed.fandom.com/wiki/Animus))。Warren Vidic（沃伦·维迪克）被官方定性为"Animus 的发明者"与 Animus Project 主管 ([Warren Vidic](https://assassinscreed.fandom.com/wiki/Warren_Vidic)）。

现代 Animus 的研发起点比此前设定稿所写的"Vidic，1970 年代末"更早。完整谱系如下（该链条主要来自漫画等周边媒介，属官方正史，但非主线游戏内直接可见，故整体归为 Wiki 整理）：

| 时期 | 节点 | 内容 |
|------|------|------|
| 约 1942 年起 | **Die Glocke（钟）** | 已知最早的 Animus 原型机。Abstergo 秘密资助，由被圣殿骑士团绑架（伪造死亡）的 Nikola Tesla（特斯拉）建造，伪装为纳粹核计划，目的是探索过去刺客的记忆以寻找伊甸碎片 ([Animus](https://assassinscreed.fandom.com/wiki/Animus)) |
| 1950–1960 年代初 | **BLUEBIRD 计划（Project BLUEBIRD）** | 刺客 Boris Pash（鲍里斯·帕什）主持的 CIA 项目（表面研究心智控制，实为研究苹果对潜意识的影响），用伊甸碎片与从失败原型 Die Glocke 打捞的技术，试图用已故刺客的记忆覆盖测试者记忆 ([Boris Pash](https://assassinscreed.fandom.com/wiki/Boris_Pash)) |
| 1964 年 | **挟持 Nathalie** | 圣殿骑士团扣押 Pash 新生女儿 Nathalie 为人质，迫其交出全部 BLUEBIRD 研究与苹果；Nathalie 由 Vidic 抚养 |
| 1977 年 | **Vidic 原型测试** | Vidic 极大受益于 BLUEBIRD 研究，用其首台 Animus 原型机测试 13 岁的 Nathalie，令其重历父亲记忆。Nathalie 借此发现自己是人质并逃脱，盗走 Animus 蓝图与苹果，交给刺客 William Miles（威廉·迈尔斯） ([Warren Vidic](https://assassinscreed.fandom.com/wiki/Warren_Vidic)) |

> 表述差异提示：Vidic 词条另称"已知最早使用 Animus 是 1980 年 Subject 1"，与 1977 年原型测试存在出入。Vidic 约生于 1940 年代、2012 年死亡，是圣殿骑士团核心圣所（Inner Sanctum）成员。

### 5.6 关键澄清：Animus 与 Memory Seals 的真实关系

这是本维度最易被误传、最需谨慎的设定点。官方表述：Animus 由 Abstergo 于 20 世纪后半叶基于此前发现的第一文明技术建造；虽然至少部分受到数枚 Memory Seals 发现的影响，但其软件架构并非建立在封印之上（"the software architecture used by the Animus was not based upon them"） ([Animus](https://assassinscreed.fandom.com/wiki/Animus))。

进一步确证：到 20 世纪后期，Abstergo 已找到若干 Memory Seals，但极少含有记录下来的记忆，且无一属于伊述；尽管如此，对这些遗物的研究帮助公司在遗传记忆技术上取得早期突破，最终促成 Animus 诞生 ([Memory Seals](https://assassinscreed.fandom.com/wiki/Memory_Seals))。

正确表述应为：**封印是早期研究的助推 / 灵感来源之一，而非 Animus 直接基于封印技术。**

### 5.7 Abstergo 对 Masyaf Keys 的认知

到 2013 年，Abstergo Industries 已得知 Masyaf Keys 的存在，以及 Altaïr 用它们向 Ezio 传递信息一事，但不知其具体下落——Ezio 与 Sofia 已于 1512 年将六枚封印托付奥斯曼刺客，藏于书店地下的耶尔巴坦地下水宫（Yerebatan Cistern） ([Memory Seals](https://assassinscreed.fandom.com/wiki/Memory_Seals))。Abstergo 既把 Memory Seals 当作历史线索，也当作理解伊述记忆储存技术的研究素材，与其遗传记忆 / Animus 研究路线一脉相承。

---

**本节谱系小结：** 伊述 Memory Seals（技术根源）→ 9 世纪古教团 Alruh（已知最早的类 Animus 实机，解读封印）→ 伊述三神用封印留信给 Desmond（封印作为跨纪元信息载体）→ 1940 年代 Die Glocke / 1950 年代 BLUEBIRD / 1977 年 Vidic 原型（现代原型机谱系）→ 20 世纪后半叶 Abstergo 商业化 Animus（受封印研究启发，但架构独立）。

---

## 6. 代际演进：硬件与软件完整时间线

Animus（拉丁语「灵魂/精神」）并非凭空诞生的单一设备，而是人类反复尝试「读取并重历遗传记忆」这一目标的产物。从 9 世纪的古代神教到 21 世纪中叶的商品化主机，多部游戏、电影、漫画与网络漫画里散落的型号节点，被 Wiki 与媒体整理成一条单一因果谱系。需要先说明可信度边界：各节点本身的设定多为游戏内可验证或 Ubisoft 官方；但把它们排成「一条连贯演进线」属整理性叙述，而非任何单一作品的官方时间轴声明。带小数点的型号（1.28、2.03、4.3、HR-8.5 等）多来自游戏内 Animus 界面/数据库或电影道具表，可验证但不同来源命名偶有出入；现代日年份以各作品内日期为准 ([Animus](https://assassinscreed.fandom.com/wiki/Animus))。

### 6.1 时间线总览

| 阶段 | 型号 / 节点 | 年代 | 阵营 | 来源作品 | canon |
|---|---|---|---|---|---|
| 古代前身 | Alruh（the Great Work） | 约 9 世纪 860 年代 | 古代神教 | 《Mirage》 | 游戏内可验证 |
| 圣殿原型机 | Die Glocke（「钟」） | 1930–1940 年代 | 圣殿骑士 | 漫画《Conspiracies》 | 游戏内可验证 |
| 原始 Animus Project | Vidic 原型机（椅状→床状） | 1977 / 1980 / 1983 / 2000 / 2002 | Abstergo | 多作 | 游戏内可验证 |
| 标准实验型 | Animus 1.28 | 2002 定型，沿用至 2012 | Abstergo | 初代《AC》等 | 游戏内可验证 |
| 刺客自制 | Animus 2.0「Baby」/ 2.03 | 2012 | 刺客 | 《Brotherhood》《Revelations》 | 游戏内可验证 |
| 便携软件升级 | Animus 3.0 | 2012（昏迷期完成） | 刺客 | 《ACIII》 | 游戏内可验证 |
| 记忆商品化 | Animus 主机 / Animus Omega + DDS + Helix | 2009 / 2013 / 2014 | Abstergo Entertainment | 《Black Flag》等 | 游戏内可验证 |
| 便携分支 | Brahman V.R. | 2013 | Abstergo × MysoreTech | 漫画《Brahman》 | 游戏内可验证 |
| 电影版 | Animus 4.3 / 4.35 / 4.38 | 2016 / 2016 / 2017 | Abstergo | 2016 电影 | 官方 Ubisoft |
| 便携手提箱型 | Animus HR-8「Sarcophagus」 | 2017 | 跨阵营 | 《Origins》 | 游戏内可验证 |
| 升级便携型 | Animus HR-8.5（配 Brahman V.R. 头显） | 2018 | 刺客 | 《Odyssey》《Valhalla》 | 游戏内可验证 |
| 逆向分支 | Brahman 3.0 | 2023 | Zhawang Corporation | 网络漫画《Forgotten Temple》 | 游戏内可验证 |
| 商品化当代型 | Animus EGO / Dark Animus / Animus Hub | 《Shadows》时代（2025 上线） | Abstergo / 被「The Guide」入侵 | 《Shadows》 | 官方 Ubisoft |

完整脉络：Alruh（9 世纪）→ Die Glocke（1930–40 年代）→ Abstergo 原始 Animus → Animus 1.28 → 刺客 2.0/2.03 → 3.0 → Animus 主机/Omega + DDS + Helix + Brahman V.R. → 电影 4.3 及 4.35/4.38 → HR-8 / HR-8.5 → Brahman 3.0 → Animus EGO / Dark Animus / Animus Hub ([Animus](https://assassinscreed.fandom.com/wiki/Animus))。

### 6.2 古代前身：Alruh（约 9 世纪）

Alruh（阿拉伯语意为「灵魂/精神」，又称 the Great Work「伟业」）是古代神教（Order of the Ancients）用先驱者（Isu / Precursor）技术解码记忆封印（Memory Seal）的机器，与 Animus 同义同源——一为阿拉伯语、一为拉丁语，均意「灵魂/精神」，被设定为人类理解「遗传记忆/记忆回溯」的众多早期尝试之一，是 Abstergo Animus 的思想前身 ([Alruh](https://assassinscreed.fandom.com/wiki/Alruh))。

它由古代神教成员、智慧之家（House of Wisdom）学者 Fazil Fahim al-Kemsa 监管，实际由其下属 Doctor Hassan 在被蒙在鼓里的 Ahmad ibn Musa 协助下建造，所用先驱者技术回收自巴格达西南一处地穴（vault），机器位于巴格达 Abbasiyah 区智慧之家地下密室。运作原理：受试者被置于机器中央的浑天仪式球体（armillary sphere）中，插入记忆封印后球体环旋转、将封印内容暴露给受试者；过程极度危险，多数受试者无法存活。860 年代隐者 Basim Ibn Ishaq 潜入并伪装成受试者，在机器即将用于自己前于 Alruh 顶端刺杀 Fazil，使人体试验中止、机器未完工。出自《Assassin's Creed: Mirage》（幻景）([Alruh](https://assassinscreed.fandom.com/wiki/Alruh))。

### 6.3 圣殿原型机：Die Glocke（1930–1940 年代）

连接古代 Alruh 与现代 Animus 的关键前身节点。1930 年代，圣殿骑士在挪威以纳粹原子计划（Uranprojekt）为掩护、由党卫军军官兼圣殿骑士 Gero Kramer 领导，建造一台可查看祖先记忆的机器，目的同样是从被俘刺客的遗传记忆中定位伊甸碎片。机器名为 Die Glocke（德语「钟」，因中央部件呈钟形），由被绑架的 Nikola Tesla 设计，是一套能生成虫洞、用伊甸苹果（Apple of Eden）供能的反重力系统，比其后继者大十几倍 ([Animus](https://assassinscreed.fandom.com/wiki/Animus))。

1943 年原型机可运行。当 Kramer 试图用它读取刺客 Eddie Gorm 的记忆时，因 Gorm 的 21 世纪后代 Maxime 同时在 Animus 中重温同一段记忆，两人意识跨时空互换，后因暗中同情刺客的 Tesla 破坏机器而恢复。该「proto-Animus」出自漫画《Assassin's Creed: Conspiracies》([Animus](https://assassinscreed.fandom.com/wiki/Animus))。

### 6.4 原始 Animus Project（20 世纪后半叶）

Animus 由 Abstergo Industries 在 20 世纪后半叶基于已发现的第一文明（Isu）技术造出，其软件架构并非直接基于记忆封印。遗传记忆权威 Dr. Warren Vidic 主导研发并成为 Animus Project 监管人；早期受 Boris Pash 的 Project BLUEBIRD 研究（利用伊甸碎片与 Die Glocke 残骸技术）协助，Pash 于 1964 年被迫交出全部研究 ([Animus](https://assassinscreed.fandom.com/wiki/Animus))。

刺客方平行谱系亦由此分出：1977 年 Pash 之女 Nathalie（少女）成为 Vidic 原型 Animus 的首位受试者，后携伊甸苹果与 Animus 图纸出逃并交给刺客 William Miles；William 又将图纸交给苏联刺客科学家 Medeya Voronina，她据此独立造出刺客方的 Animus（其 cell 成员多因长期使用而发疯）([Animus](https://assassinscreed.fandom.com/wiki/Animus))。

早期型号年表：

| 年份 | 节点 |
|---|---|
| 1977 | Nathalie 成为 Vidic 原型机首位受试者 |
| 1980 | 已知最早使用记录：Vidic 对 Subject 1 实验（提取 Aveline 记忆），机器极不稳定致受试者致命性癫痫 |
| 1983 | 用更稳定版本操控 Subject 4「Daniel Cross」的遗传记忆 |
| 2000 | 机器呈椅状，需大量外部布线 |
| 2002 | 改为床状镀铬外观 |

即便到 2012 年，Abstergo 仍未能完美该技术 ([Animus](https://assassinscreed.fandom.com/wiki/Animus))。

### 6.5 标准实验型：Animus 1.28（2002 定型，沿用至 2012）

Animus 1.28 是在 2002 年（非 2012 年）更新定型的型号，比之前更舒适，作为标准型号沿用约十年直到 2012；Wiki 中并无独立的「Animus 1.0」型号或词条，型号史是 2000 年椅状机 → 2002 年床状机 → Animus 1.28 ([Animus](https://assassinscreed.fandom.com/wiki/Animus))。

Animus 整体是可读取宿主遗传记忆并三维投射到外部屏幕的 VR 机器，用于 Abstergo 的 Animus Project（分析记忆找刺客与伊甸碎片情报）与 Animi Training Program（训练员工）。1.28 用于罗马（Rome）设施实验室与 Animi 室：使用时机器把一块弧形屏幕旋转覆盖到使用者头顶投射所访问的记忆；能效不高、长时间使用易过热，过热时机器的蓝色灯光会闪烁变橙色；记忆走廊（memory corridor）背景为冰蓝色。Abstergo 内的刺客间谍 Lucy Stillman 曾对 1.28 做过若干技术改动，以改善受试者稳定性与同步时长。Desmond 在初代《Assassin's Creed》被 Abstergo 用 1.28 读取 Altaïr 记忆；该型号在《Brotherhood》《Revelations》《ACIII》中由 Abstergo 员工使用，并在《Black Flag》旧型号文件中展示 ([Animus](https://assassinscreed.fandom.com/wiki/Animus))。

### 6.6 刺客自制：Animus 2.0「Baby」与 2.03

Animus 2.0 是刺客方 2012 年自制型号，由技术员 Rebecca "Becs" Crane（生于 1984 年 2 月 3 日）建造、昵称「Baby」，她称其「比 Abstergo 那些好两倍」。机器用 Lucy Stillman 发来的部分图纸（schematics）建造、其余由 Rebecca 即兴补全 ([Rebecca Crane](https://assassinscreed.fandom.com/wiki/Rebecca_Crane))。

相对 1.28 的差异：加载序列背景色从冰蓝变为白色、整片记忆区域逐步加载；外观回到椅状并更舒适，但需在使用者手臂插入导管（catheter）以接入——注意此时尚非血液链接（血液链接是后来 HR-8 才引入的特性）；仍受翻译软件延迟与血统效应（Bleeding Effect）困扰。2.0 支持远程上传数据库信息包，由历史学家 Shaun Hastings 编写条目 ([Animus](https://assassinscreed.fandom.com/wiki/Animus))。

2.03 是其衍生配置：《Revelations》中 Desmond 因事件冲击陷入昏迷，2.03 被当作生命支持系统使用（Rebecca 警告其本非为此设计）；昏迷期间由「16 号实验体」Clay Kaczmarek 的虚拟智能（virtual intelligence）接手编写 Animus 数据库条目，Desmond 所处的虚拟空间是「Animus Island」（属 White Room 性质）。Rebecca 还为 2.03 加入 Virtual Training Program，帮 Desmond 适应新系统 ([Animus](https://assassinscreed.fandom.com/wiki/Animus))。

### 6.7 便携软件升级：Animus 3.0

Animus 3.0 在 Desmond 昏迷期间完成，主要是软件升级，含全新用户界面与操控（puppeteering motion controls）改动，硬件大体沿用 2.0、外观仅小幅改动。最重要的实用变化是便携性：头枕和臂托不再需要安装在座椅上才能工作，可在几乎任何平面上架设。这一改动有直接剧情回报——Animus 设备被拆成三只箱子，由 Rebecca、Shaun、William Miles 分别搬进大神殿（Grand Temple）。Desmond 醒后进入 3.0 重温 Haytham Kenway 与 Ratonhnhaké:ton 的记忆，Shaun 继续为其写数据库条目 ([Animus](https://assassinscreed.fandom.com/wiki/Animus))。

需区分概念：「Animus Project Update 3.0」是《Brotherhood》的多人 DLC 包名（含于 2011 年 3 月的 The Da Vinci Disappearance），与游戏内设备无关 ([Animus Project Update 3.0](https://assassinscreed.fandom.com/wiki/Animus_Project_Update_3.0))。

### 6.8 记忆商品化套件：Animus 主机 / Animus Omega + DDS + Helix

Abstergo Entertainment 是 Abstergo Industries 2010 年成立、总部在蒙特利尔（Montreal）的面向公众子公司，主打把 Animus 软件做成全球销售的游戏主机版本，通过预包装遗传记忆与社交化游戏影响大众，首部作品是 2012 年的《Liberation》([Abstergo Entertainment](https://assassinscreed.fandom.com/wiki/Abstergo_Entertainment))。

支撑商品化的底层技术分三层：

- **DDS（Data Dump Scanner，2009 年由 Álvaro Gramática 创造）**：让使用者无需与宿主有血缘即可重温任何预录记忆，与 Animus 接口结合后铺平了 Helix 之路 ([Animus](https://assassinscreed.fandom.com/wiki/Animus))。
- **Animus Omega（2013）**：蒙特利尔分部用该型号开展 Sample 17 Project（17 号样本项目），探索已故 Desmond Miles（原 Subject 17）的祖先记忆。公开目的是为 Animus Omega 程序与电影（如《Devils of the Caribbean》）找素材，隐藏目的是定位伊甸碎片与 Isu 技术。遗传素材取自 Desmond 于 2012 年 12 月 21 日激活全球极光装置死亡后、在大神殿其遗体上采集的血液和唾液，仅需极少解码即分离出至少四位祖先：Altaïr、Ezio、Edward Kenway、Ratonhnhaké:ton ([Sample 17 Project](https://assassinscreed.fandom.com/wiki/Sample_17_Project))。
- **Helix（2014）**：云端软件，配合基于 Animus Omega 的主机与头显，分发由编辑过的遗传记忆制成的「游戏」，使任何人无需血缘即可体验，同时暗中收集玩家自身遗传数据。因圣殿骑士背景，凡涉及圣殿/刺客之战或第一文明的内容被大量审查或美化，遭黑客组织 Erudito Collective 反对 ([Animus](https://assassinscreed.fandom.com/wiki/Animus))。

### 6.9 便携分支：Brahman V.R.（2013）

2013 年底，Abstergo Industries 与印度公司 MysoreTech 达成数百万美元交易，将 Brahman V.R. 推向亚洲市场。它功能类似其它 Animus，特点是便携，并把所有用户的遗传记忆上传到 Abstergo Cloud（云）。Abstergo 的主要目的是寻找接触过光之山钻石（Koh-i-Noor，一枚伊甸碎片）的人的记忆，特别是 Arbaaz Mir 与 Pyara Kaur。Brahman V.R. 是后来 HR-8.5 配套头显与 Zhawang 公司 Brahman 3.0 的技术源头，出自漫画《Assassin's Creed: Brahman》([Animus](https://assassinscreed.fandom.com/wiki/Animus))。

### 6.10 电影版：Animus 4.3 及衍生 4.35 / 4.38（2016–2017）

2016 年《Assassin's Creed》电影把 Animus 从躺椅重塑为大型机械臂结构：在马德里（Madrid）一座大房间里，受试者腰部锚定（anchored at the waist）于一只机械臂，悬空中提取记忆并用身体实际跳跃、奔跑、使用武器演绎祖先动作。这是侵入式过程，需在颈椎（cervical vertebrae）施加皮下硬膜外连接（subcutaneous epidural）——「皮下硬膜外」确为权威词条原文用词。设施为马德里的 Abstergo 设施，项目由首席科学家 Dr. Sofia Rikkin 主导，涉及 Callum Lynch、Moussa、Lin 等刺客后裔；Cal 重温 Aguilar de Nerha 的记忆。电影主创刻意调整连接方式以避免与《黑客帝国》雷同 ([Assassin's Creed (film)](https://assassinscreed.fandom.com/wiki/Assassin's_Creed_(film)))。

衍生型号：

| 型号 | 时间 | 特点 |
|---|---|---|
| Animus 4.35 | 2016 年 10 月伦敦测试 | 去掉针头、减少头痛恶心但沉浸感更差，需头盔与外骨骼且不能无人协助安全使用 |
| Mobile Animus 4.38 | 2017 年 9 月推出 | 连接 Helix 服务器的小型移动版，配手游《Rebellion》 |

([Animus](https://assassinscreed.fandom.com/wiki/Animus))

### 6.11 便携手提箱型：Animus HR-8「Sarcophagus」（2017）

到 2017 年，Animus 技术进步到 HR-8 型号，别称「Sarcophagus（石棺）」，是马德里 Abstergo 设施在 Dr. Sofia Rikkin 指导下开发的便携版。2017 年 10 月，Layla Hassan 在埃及用它探索 Bayek of Siwa 和 Aya of Alexandria 的记忆（《Assassin's Creed Origins》起源）([Animus](https://assassinscreed.fandom.com/wiki/Animus))。

据 Abstergo Animus Guide，HR-8 可压缩进一只手提箱（suitcase）；为安全起见，将硬膜外连接（epidural connection）替换为血液链接（hematological link）——不再像 4.3 仅向大脑传递信息，而是对使用者红细胞中存储的信息测序并向各器官传输数据。Layla 自述造 HR-8 是为能访问任何人（包括非自己祖先）的记忆（需取得宿主 DNA 样本），并实装了 Animus Control Panel 以修改模拟环境参数。她脱离 Abstergo 前曾把一台 HR-8 原型机作为礼物留给同事 Dr. Shimazu Sei；该机后在《Forgotten Temple》剧情中被 Sei、Noa Kim 等人用于重温 Shimazu Saito 与 Edward Kenway 的记忆 ([Animus](https://assassinscreed.fandom.com/wiki/Animus))。

### 6.12 升级便携型：Animus HR-8.5（2018）与 Brahman 3.0（2023）

Animus HR-8.5 是 HR-8 的升级版，由 Layla Hassan 与 Victoria Bibeau 共同开发，改进包括更友好的用户选项（如进一步整合使用者感官数据）、更强算力，并配备 Brahman V.R. 头显。Layla 把它描述为「Animus 主机原型，Brahman 变体，I/O 能力推到极限——超便携，算力比 NASA 和 CERN 加起来还强」。2018 年 Layla 用它探索 Kassandra 记忆找列奥尼达斯之矛与赫尔墨斯三重伟大之杖（《Odyssey》奥德赛）；两年后又用它探索维京人 Eivor 的记忆（《Valhalla》英灵殿）。其数据库条目仍由 Shaun Hastings 编写 ([Animus](https://assassinscreed.fandom.com/wiki/Animus))。

Brahman 技术后续延续：Zhawang Corporation 逆向 Abstergo 技术开发出 Brahman 3.0（受 Animus 4.3 与 Brahman V.R. 启发，头盔加腰部锚定机械臂，同步率更高但血统效应风险更大），多次失败后搁置，直到 2023 年其主管 Claire Zhang 向血统效应抗性较高的 Noa Kim 推出，让其重温 Edward Kenway 记忆——出自网络漫画《Assassin's Creed: Forgotten Temple》([Lost, but Not Forgotten](https://assassinscreed.fandom.com/wiki/Lost,_but_Not_Forgotten))。

### 6.13 商品化当代型：Animus EGO / Dark Animus / Animus Hub（《Shadows》时代）

需厘清三个易混淆的概念：

- **Animus EGO**：21 世纪中叶的商品化型号本体，类似 Helix 由 Abstergo 大规模分发，但更强调探索使用者自己祖先的记忆。某台 Animus EGO 被自称「the Guide」的未知实体入侵，使其拥有者得以重温战国日本武士 Yasuke 与女忍 Fujibayashi Naoe 的记忆 ([Animus](https://assassinscreed.fandom.com/wiki/Animus))。
- **Dark Animus**：Ubisoft 官方对这台被黑环境的称呼（官方文案已确认此术语）。
- **Animus Hub**：这台被入侵的 Animus EGO 的界面，是 2025 年 3 月随《Assassin's Creed Shadows》（影）上线的功能 ([Animus Hub](https://assassinscreed.fandom.com/wiki/Animus_Hub))。

Animus Hub 四大板块：

| 板块 | 功能 |
|---|---|
| Memories | 时间线式访问本作及部分其它作品记忆。官方说明该 Hub 目前不支持《Origins》之前发行的作品 |
| Projects | 含 Anomalies（异常）任务，完成后获奖励，推进解锁 Keys、加密数据文件、mods、装备等；Keys 不能用真钱购买、只能靠完成 Anomalies 赚取；首发项目为 The Legacy 与 Awakening |
| Exchange | 用 Keys 兑换装备与宠物 |
| Vault | 汇集现代日剧情、整理加密数据文件、记录与 AI「The Guide」「Ego」的对话 |

Memories 永远离线可用，Projects/Exchange/Vault 等 live 功能需联网；所有奖励免费、靠玩游戏解锁 ([Welcome to the Animus Hub - Ubisoft News](https://www.ubisoft.com/en-gb/game/assassins-creed/news/6yQywqDB4bRmLtXp3K0pbd/welcome-to-the-animus-hub-your-new-home-for-assassins-creed-games))。

> **社区/媒体整理性描述（非官方原话）**：常见说法将 Animus Hub 描述为「类似战斗通行证（battle pass）」、含「Data Fragments」、或「承接 Assassin's Creed: Infinity 计划/为其前身」。Ubisoft 官方 Animus Hub 新闻页与帮助页并未使用「battle pass」「Data Fragments」「Infinity」等词，这些表述属媒体/社区整理而非官方原话，应区别看待 ([Welcome to the Animus Hub - Ubisoft News](https://www.ubisoft.com/en-gb/game/assassins-creed/news/6yQywqDB4bRmLtXp3K0pbd/welcome-to-the-animus-hub-your-new-home-for-assassins-creed-games))。

---

## 7. 组织用途与商业化

Animus 在组织层面经历了一条清晰的演化轨迹：从圣殿骑士（Templar）现代化身 **Abstergo Industries（阿布斯泰戈工业）** 手中的秘密情报工具，逐步转变为面向大众的消费产品，同时背地里成为一张隐秘的 DNA 采集与血脉筛选网络。下文先梳理早期的秘密情报阶段，再展开消费级商业化的双层策略。

> 来源可访问性说明：本节关键设定大量出自 Assassin's Creed Wiki（Fandom）条目，这些条目在浏览器中可正常打开；但经 WebFetch 直连均返回 HTTP 402（疑似反爬/付费墙），无法逐字核对原文。涉及游戏发售年份、元叙事设计意图、重制版方向等可直连内容，已通过 Wikipedia、ScreenRant、Game Rant 的可直连页面交叉验证。

### 7.1 早期：作为秘密情报工具

#### 7.1.1 Animus Project（Animus 计划）

**Animus Project** 是 Abstergo Industries 的核心项目，由 **血统发现与获取部门（Lineage Discovery and Acquisition）** 绑架特定受试者，分析其遗传记忆（genetic memory），以获取关于刺客兄弟会（Assassin Brotherhood）与伊甸碎片（Pieces of Eden）位置的情报。该计划至少自 1980 年起运作，最初由 **Dr. Warren Vidic（沃伦·维迪克博士）** 领导 ([Animus Project](https://assassinscreed.fandom.com/wiki/Animus_Project))。

两名关键受试者：

| 受试者编号 | 真实身份 | 绑架/介入时间 | 主要重历对象 | 结局 |
|---|---|---|---|---|
| Subject 16 | Clay Kaczmarek（克莱·卡兹马雷克） | 2011 年 2 月 1 日被绑架至罗马设施 | 主要重历祖先 Ezio Auditore（埃齐奥·奥迪托雷） | 因过度暴露产生流血效应（Bleeding Effect），2012 年 8 月 8 日自杀前将自己思维的数字副本上传进 Animus ([Clay Kaczmarek](https://assassinscreed.fandom.com/wiki/Clay_Kaczmarek)) |
| Subject 17 | Desmond Miles（戴斯蒙·迈尔斯） | 2012 年 9 月被捕，替代 Clay | 重历 12 世纪黎凡特刺客 Altaïr Ibn-La'Ahad（阿泰尔）在第三次十字军东征期间的记忆 | 达成目标记忆时，从一枚伊甸苹果（Apple of Eden）中浮现出标注全球多座先行者神殿（Precursor Temples，含伊甸碎片）位置的全息地图，随后逃脱 ([Animus Project](https://assassinscreed.fandom.com/wiki/Animus_Project)) |

需要厘清的两个常见误传：Clay 重历的主要祖先是 Ezio 而非 Altaïr；Desmond 浮现的地图标注的是先行者神殿位置（与伊甸碎片关联），而非单纯的"多个伊甸碎片坐标"。

#### 7.1.2 Animi Training Program（Animi 训练计划）

Desmond 于 2012 年逃脱后，Warren Vidic 在 Abstergo 罗马设施启动了 **Animi Training Program**，这是圣殿骑士针对刺客"用流血效应训练 Desmond"做出的对应方案。它使用数十台 Animi（Animus 复数形态），让受训者重历各类受试者祖先的记忆，并刻意诱发流血效应以习得战斗与潜行技能 ([Animi Training Program](https://assassinscreed.fandom.com/wiki/Animi_Training_Program))。

计划分阶段推进：

- **第一阶段**：重历文艺复兴时期意大利的圣殿骑士与非刺客人物。受训者所操控的角色称 **Animi Avatars（Animi 化身）**，第一阶段共 21 个，涵盖理发师、铁匠、交际花、雇佣兵、军官、教士等市井身份 ([Animi Avatars (first stage)](https://assassinscreed.fandom.com/wiki/Animi_Avatars_(first_stage)))。
- **第二阶段**：转移到奥斯曼帝国时期。自该阶段起，Vidic 与 Theodore Rizzo 引入 **Daniel Cross（丹尼尔·克罗斯）** 协助训练——Cross 本人即 Animus Project 的 Subject 4、流血效应受害者 ([Daniel Cross](https://assassinscreed.fandom.com/wiki/Daniel_Cross))。
- **第三阶段**：广受欢迎，后来被 Abstergo Entertainment 改制成海盗黄金时代主题的续作。

著名结业者 **Juhani Otso Berg** 早在 2010 年即被 Vidic 物色招募，后升为大师圣殿骑士、进入内殿（Inner Sanctum），并被派去抓捕刺客领袖 William Miles。

> 在游戏机制层面，Animi Training Program 是整个多人模式（自 2010 年《兄弟会》Brotherhood 起）的叙事框架：玩家扮演接受训练的受试者。

### 7.2 技术转折点：DNA 测序即可读取记忆

《刺客信条 III》（Assassin's Creed III）结局揭示，Abstergo 已突破到 **仅通过对宿主 DNA 测序即可查看其遗传记忆**，不再必须由本人进入 Animus（"Abstergo can now view a host's genetic memories simply by sequencing the host's DNA"）([Assassin's Creed IV: Black Flag - Wikipedia](https://en.wikipedia.org/wiki/Assassin%27s_Creed_IV:_Black_Flag))。这一技术——配合 DDS 与云计算能力——是 Abstergo 把 Animus 从秘密情报工具转为面向大众消费产品的前提。

Desmond 死后（2012 年 12 月 21 日），技术人员在大神殿（Grand Temple）从其遗体采集血液与唾液样本，使 Abstergo 得以在其本人缺席的情况下继续探索其遗传记忆 ([Sample 17 Project](https://assassinscreed.fandom.com/wiki/Sample_17_Project))。

### 7.3 消费级商业化：公开层产品

#### 7.3.1 Abstergo Entertainment 与 Animus Omega

**Abstergo Entertainment（阿布斯泰戈娱乐）** 是圣殿骑士控制的 Abstergo Industries 设于蒙特利尔的公开消费子公司，生产多媒体消费产品，在《黑旗》（AC4: Black Flag，2013）中正式登场 ([Abstergo Entertainment](https://assassinscreed.fandom.com/wiki/Abstergo_Entertainment))。其主力产品是全球销售的游戏主机版 Animus——**Animus Omega**，有两种形态：

| 形态 | 用途 |
|---|---|
| 主机版（console） | 提供类似 Animi 训练计划的交互体验 ([Animus](https://assassinscreed.fandom.com/wiki/Animus)) |
| 面罩/visor 版 | 以 HUD 显示某人或某地在过去的样貌 ([Animus](https://assassinscreed.fandom.com/wiki/Animus)) |

Animus Omega 的游戏内容与 Ubisoft 合作发行（设定中《Liberation》即为其产品之一）。2013 年，Abstergo Entertainment 用 Animus Omega 分析从 Desmond DNA 中提取的遗传记忆，并基于 **Edward Kenway（爱德华·肯威）** 的记忆开发了游戏《Pirates of Nightmares》与剪辑自 Animus 影像的电影《Devils of the Caribbean》——两者都聚焦威尔士海盗 Edward Kenway，且系统性抹去其与刺客的关联 ([Abstergo Entertainment](https://assassinscreed.fandom.com/wiki/Abstergo_Entertainment))。（注：游戏内角色体验中存在把电影名错标到 Kenway 体验上的连续性瑕疵。）

#### 7.3.2 Helix 云端平台

**Helix** 是 Abstergo Entertainment 于 2014 年面向大众推出的云端软件/Animus 驱动游戏设备，技术上延续自 **Álvaro Gramática（阿尔瓦罗·格拉马蒂卡）** 所造的 **Data Dump Scanner（DDS，数据转储扫描仪）** ([Helix](https://assassinscreed.fandom.com/wiki/Helix))。它让用户以廉价主机式形态体验经过篡改、带圣殿骑士宣传旁白的刺客与圣殿骑士记忆——同时通过头戴设备在用户不知情的情况下采集其遗传数据。

Helix 平台同时是刺客兄弟会与圣殿骑士在现代博弈的舞台：玩家角色被刺客女性操作员 **Bishop（毕晓普）**（暗中由化名 **Deacon** 的 Shaun 协助）招募后称为 **Initiate（入会者）** ([Helix Initiate](https://assassinscreed.fandom.com/wiki/Helix_Initiate))。Initiate 是以下两作的现代主角：

| 作品 | 年份 | 现代任务目标 |
|---|---|---|
| Unity | 2014 | 重历 Arno Dorian 记忆，定位 18 世纪圣者（Sage）François-Thomas Germain 遗骸 ([Assassin's Creed: Unity](https://assassinscreed.fandom.com/wiki/Assassin's_Creed:_Unity)) |
| Syndicate | 2015 | 重历 Frye 双子记忆，寻找伦敦白金汉宫地下的伊甸裹尸布（Shroud of Eden） |

### 7.4 隐秘层：DNA 采集、血脉筛选、伊述科技与叙事控制

公开娱乐层之下，Abstergo 用同一套商业化产品支撑四条隐秘目标线。

#### 7.4.1 Sample 17 Project（17 号样本计划）：双重用途

**Sample 17 Project** 由 Abstergo Industries 通过 Abstergo Entertainment 运作，由 **Melanie Lemay** 主管、**Olivier Garneau** 监督，探索已故 Desmond Miles（原 Subject 17）的祖先遗传记忆 ([Sample 17 Project](https://assassinscreed.fandom.com/wiki/Sample_17_Project))。它具欺骗性的双重目的：蒙特利尔分部员工被告知记忆用于为 Animus Omega 程序、电影等娱乐产品探索新背景设定，实际数据被 Abstergo Industries 用于定位关于第一文明（伊述，Isu）与伊甸碎片的信息。

该项目大量借鉴 1980 年代早期由 **Aileen Bock** 主持的 **Surrogate Initiative（代理人计划）**——后者首次实现用捐献者遗传材料、无需与历史人物有直接血缘即可探索其祖先记忆 ([Surrogate Initiative](https://assassinscreed.fandom.com/wiki/Surrogate_Initiative))。从 Desmond 遗体样本中，仅经极少解码即分离出至少四位祖先：

| 祖先 | 处置结果 |
|---|---|
| Edward Kenway | 首个成功，2013 年 10 月敲定记忆并投入产品 |
| Altaïr Ibn-La'Ahad | 经分析判定风险高/价值弱，放弃 |
| Ezio Auditore | 经分析判定风险高/价值弱，放弃 |
| Ratonhnhaké:ton | 经分析判定风险高/价值弱，放弃 |

该剧情线在 2014 年《Rogue》《Unity》后被搁置。

#### 7.4.2 Phoenix Project（凤凰计划）：筛选伊述三螺旋血脉

**Phoenix Project** 由 **Dr. Álvaro Gramática**（Abstergo Industries 未来技术部门研究总监、圣殿骑士内殿成员）领导，目标是测序伊述的 **三螺旋（triple-helix）** 基因组并探索其中编码的遗传记忆 ([Phoenix Project](https://assassinscreed.fandom.com/wiki/Phoenix_Project))。

计划始于 2013 年末，起因是圣者 John Standish 在蒙特利尔 Abstergo Entertainment 办公室死亡后，检验遗体发现其基因组约 **5% 为纯伊述 DNA**、含极高比例三螺旋 ([Álvaro Gramática](https://assassinscreed.fandom.com/wiki/%C3%81lvaro_Gram%C3%A1tica))。Abstergo 由此着手在现代与历史中定位圣者的遗传记录，以其高浓度伊述 DNA 为基础，尝试用现有人类生物技术结合伊甸碎片把伊述"生物性地复活/克隆/重建"。一段被刺客盗取的内部视频说明：若收集到足够圣者三螺旋 DNA，即可构建出标注伊甸碎片位置的记忆序列。

名称取意凤凰浴火重生，喻指伊述借人类 DNA 残留重生。2018 年，项目被崇拜 Juno 的邪教 **Instruments of the First Will（始愿之械）** 劫持，一度复活 Juno，最终被刺客与圣殿骑士联手挫败、Gramática 丧生 ([Phoenix Project](https://assassinscreed.fandom.com/wiki/Phoenix_Project))。

#### 7.4.3 篡改历史叙事与 Erudito 对抗

Abstergo Entertainment 的娱乐产品同时服务于宣传目的：凡涉及圣殿骑士/刺客、双方战争或第一文明痕迹的内容都被大幅审查甚至篡改——抹去隐秘组织证据，或把圣殿骑士塑造成仁慈群体，并伪造历史人物生平。这种系统性审查招致黑客组织 **Erudito Collective（埃鲁迪托集体）** 入侵网络，向玩家揭示 Abstergo 伪造的历史真相 ([Abstergo Entertainment](https://assassinscreed.fandom.com/wiki/Abstergo_Entertainment))。

#### 7.4.4 面向消费者的样本采集门店（设定中的未来规划）

Abstergo Entertainment 的未来规划包含直接面向消费者的基因采集：公司计划开设 **sample collection（样本采集）门店**，让个人向 Abstergo 系统捐献遗传样本，从而开放该捐献者 DNA 中锁藏的新场景；这些遗传记忆将由研究分析师探索，若被判定为有价值的投资就进入产品制作 ([Abstergo Entertainment](https://assassinscreed.fandom.com/wiki/Abstergo_Entertainment))。这是把"遗传记忆向所有人可接触"反向用作 DNA 采集入口的构想，体现公开娱乐层与隐秘血脉筛选层的合一。需注意：此为游戏内 Abstergo 文档表述的"未来"设想，属设定中的规划而非已落地业务。

### 7.5 双层策略总览

综合各项目，可将 Abstergo 对商业化 Animus 的策略归纳为公开层与隐秘层：

| 维度 | 内容 | 关联项目 |
|---|---|---|
| **公开层** | Animus Omega 主机与 Helix 云平台作为消费娱乐/历史体验产品，借 Ubisoft 合作发行的游戏、影片触达大众 | Abstergo Entertainment、Animus Omega、Helix |
| 隐秘层① 采集 DNA | 借不知情玩家与（规划中的）采集门店收集用户 DNA | Helix、sample collection 门店 |
| 隐秘层② 筛选血脉 | 筛选含三螺旋的圣者/伊述血脉 | Phoenix Project |
| 隐秘层③ 定位遗迹 | 通过遗传记忆定位伊甸碎片与第一文明（伊述）科技 | Sample 17 Project、Phoenix Project |
| 隐秘层④ 控制叙事 | 审查/篡改历史以进行圣殿骑士宣传，控制历史叙事 | Abstergo Entertainment（引发 Erudito 对抗） |

刺客兄弟会的反制则是通过 Bishop 招募 Helix 玩家成为 Initiate，抢先找到并保护圣者遗骸（如 Germain），阻止其 DNA 落入 Abstergo 之手 ([Helix](https://assassinscreed.fandom.com/wiki/Helix))。

### 7.6 现实层面的元叙事：Ubisoft 的设计意图

"遗传记忆向所有人可接触"不仅是剧情演化，也是 Ubisoft 刻意设计的元叙事——让真实玩家扮演为圣殿骑士企业挖掘刺客记忆的雇员。《黑旗》的现代部分不再以 Desmond 为现代主角，而让玩家以第一人称扮演 Abstergo Entertainment 的一名无名新雇员，在企业办公室走动、窃听、黑客解谜（无战斗），把重历 Edward Kenway 记忆当作公司开发互动影片/游戏的素材 ([Assassin's Creed IV: Black Flag - Wikipedia](https://en.wikipedia.org/wiki/Assassin%27s_Creed_IV:_Black_Flag))。Ubisoft 进一步把现实游戏引擎 Ubisoft Anvil 的 logo 做成与 Abstergo Entertainment 相同——暗示玩家本就是在用 Animus 引擎扮演一个用 Animus 重历刺客人生的角色 ([Assassin's Creed: What Happens If Someone In The Animus Uses An Animus? | Screen Rant](https://screenrant.com/assassins-creed-animus-inception-abstergo-history-dna/))。

> 注：坊间常说"开发者操法语口音、谈论赶工期以影射 Ubisoft Montreal"——此说法在本轮可直连来源（Wikipedia/ScreenRant）中未获直接证实，属玩家社区常见解读（社区推测）；而"无名雇员第一人称、无战斗、Anvil 与 Abstergo 同名 logo、办公室设于蒙特利尔"等元素可证，予以保留。

### 7.7 重制版方向（非原作设定，背景注记）

据 Game Rant 报道，2026 年《Black Flag Resynced》重制版并非简单删除原现代部分，而是用一个"更黑暗、更具主题冒险性"的新现代故事替换：设定在 **2096 年的企业反乌托邦**，一名无名旁白者通过 Animus 沉浸进 Edward 的身份，Animus 被刻画为令人上瘾的逃避现实科技而非研究设施，强调心理上的身份流血与行为转移 ([Black Flag Resynced Modern Day Story Replacement Explained | Game Rant](https://gamerant.com/assassins-creed-ac-black-flag-modern-day-story/))。游戏总监 Richard Knight 与创意总监 Paul Fu 称，2026 年重现原 Abstergo 序列对从新作入坑的玩家会显得"突兀"，且 Desmond 时代语境已不再驱动叙事。

> 此条属重制版方向信息，是对原框架的"替换"而非"削减"，与原作设定区分对待，仅作背景注记。

---

## 8. 核心规则与限制

本节梳理 Animus（阿尼姆斯）技术体系在《刺客信条》设定中长期稳定的不变量（invariant）与边界条件：它能做什么、不能做什么、随版本演进放宽了哪些限制，以及"同步/脱同步"等玩法机制如何作为这些规则的表层表达。所有设定点均区分 canon（官方/游戏内可验证）与玩家推测层级。

### 8.1 根本机制：读取遗传记忆，而非肉身穿越时间

Animus 是 Abstergo Industries（艾布斯泰戈工业公司，圣殿骑士的现代前台）开发的虚拟现实机器，其核心功能是扫描宿主存储于 DNA 中的遗传记忆（genetic memory），并以三维影像重建，让使用者沉浸式重历祖先的经历 ([Animus](https://assassinscreed.fandom.com/wiki/Animus))。它本质上是一台"历史虚拟现实/遗传记忆读取器"，而**不是**让肉身穿越回过去。

遗传记忆被定义为通过 DNA 传递给后代的祖先记忆：在动物身上表现为本能技能，在人类身上则充当一份历史档案 ([Genetic memory](https://assassinscreed.fandom.com/wiki/Genetic_memory))。"读取 DNA 以访问并模拟祖先记忆""最初由 Abstergo Industries 开发"两点已获独立来源交叉验证 ([method.gg](https://www.method.gg/assassins-creed-shadows/what-is-the-animus-in-assassin-s-creed-a-complete-guide))。

### 8.2 第一不变量：历史已固定，不可篡改

被读取的遗传记忆是已发生事件的"录像"——一段固定的历史记录在被回放，**无法被改变**。玩家只能重演祖先真实做过的事，最多在模拟内做有限探索，不能改写时间线 ([Synchronization](https://assassinscreed.fandom.com/wiki/Synchronization))。

这也是脱同步（desynchronization）机制存在的根本原因：当玩家偏离祖先真实行为太远，模拟会判定与记录不符，校正并回退。该不变量贯穿全系列叙事框架。

### 8.3 第二不变量：记忆终点受遗传传递硬约束

可被继承读取的记忆，**只包含祖先在"孕育该血缘线中下一代直系祖先"之前形成的记忆**；此后的人生未被编码进遗传信息，普通 Animus 无法读取 ([Genetic memory](https://assassinscreed.fandom.com/wiki/Genetic_memory))。

| 祖先性别 | 记忆可读终点 | 视角转移规则 |
| --- | --- | --- |
| 男性祖先 | 止于使下一代受孕之时 | 受孕后视角转移到胎儿，随后跟随母亲直到分娩 |
| 女性祖先 | 止于分娩之时 | 分娩即记忆终点 |

游戏内例证：Desmond Miles（戴斯蒙·迈尔斯）跟随 Altaïr Ibn-La'Ahad（阿泰尔）与 Maria Thorpe（玛利亚·索普）直到二人孕育次子 Sef Ibn-La'Ahad（赛夫），记忆随即从 Altaïr 切换到该孩子（再追随 Maria 至分娩）；同样的规则适用于 Haytham（海尔森）与 Kaniehtí:io 孕育 Connor（康纳）的记忆链 ([Genetic memory](https://assassinscreed.fandom.com/wiki/Genetic_memory))。

> 注：早期资料中曾提到"孕妇 Subject 15（实验体 15 号）使用 Animus 时可读取胎儿父母双方记忆、并探索胎儿生父遗传记忆"的具体编号与机制，本轮独立检索未能复核到，归入 Wiki 待核细节，**不作为硬设定主张**。

### 8.4 晚年记忆的补完：Memory Seals 等 Isu 载体

由于遗传链只能传到"孕育下一代"为止，祖先的晚年记忆无法经普通血缘读取，需借助 Isu（伊述/先行者）造物 Memory Seals（记忆封印）补完。

13 世纪初，Altaïr 被逐出 Masyaf（马西亚夫）、避难于 Alamut（阿拉穆特），其伊甸苹果指引他到堡垒下的 Isu 神庙，在那里取得**六枚** Memory Seal，用以记录其一生重要事件 ([Memory Seals](https://assassinscreed.fandom.com/wiki/Memory_Seals))。六段记忆按时序为：

1. 1189 年一场十字军遭遇战
2. 1191 年 Al Mualim（阿尔·穆阿林）死后不久的暴动
3. 1228 年 Maria Thorpe 之死与 Altaïr 流亡
4. 1247 年返回 Masyaf
5. Niccolò 与 Maffeo Polo（波罗兄弟）离去时的 Masyaf 陷落
6. 随后 Altaïr 之死

1247 年返回后，Altaïr 在堡垒下修建秘密图书馆，用其中五枚 Seal 作钥匙（即五把 Masyaf Keys，马西亚夫钥匙）；1257 年蒙古围城时他将五把钥匙与 Codex（典籍）交给波罗兄弟藏匿，第六枚留在图书馆随其遗骸 ([Masyaf Key](https://assassinscreed.fandom.com/wiki/Masyaf_Key))。在《启示录 Revelations》中，Ezio（埃齐奥，经 Desmond）每寻回一把钥匙便重历 Altaïr 一段晚年记忆——这是"超遗传终点的记忆经外部 Isu 载体补完"的官方机制范例 ([Assassin's Creed: Revelations](https://en.wikipedia.org/wiki/Assassin's_Creed:_Revelations))。

### 8.5 技术边界的演进：从"需血缘"到"任何人皆可读"

Animus 的核心限制——只能读取使用者自身血脉的记忆——随技术发展被逐步突破。以下为代际演进。

| 阶段/技术 | 时间 | 血缘限制 | 核心能力 |
| --- | --- | --- | --- |
| 早期 Animus（1.0 / 2.0） | Desmond 时代 | 必须是目标祖先的直系后代 | 仅显示使用者本人血统内的遗传记忆 |
| Data Dump Scanner（DDS，数据转储扫描仪） | 2009 年开发 | —（提取/录制环节） | 把遗传记忆从源头提取并录制下来 |
| Animus + DDS 联合技术成熟 | 2012 年底 | 突破：DNA 在库即可读 | 只要 DNA 在库中，任何人无需血缘即可观看他人记忆 |
| Helix（螺旋）云端商业版 | 2014 年 | 无需血缘 | 云端记忆库 + 远程多人读取 |
| 便携 Animus HR-8 / HR-8.5 | Layla 时代 | 无需活体宿主、无需血缘 | 直接从古代遗骸 DNA 读取 |

**早期：需直系血缘。** 技术早期，Animus 只能显示使用者本人血统内的记忆，使用者必须是目标祖先的直系后代。Desmond 被选中，正因为 Altaïr、Ezio Auditore、Kenway 家族（Edward、Haytham、Connor）等都是他的祖先，统一汇聚在 Desmond 的遗传记忆里（Aveline de Grandpré 是该血缘线外的例外）。Abstergo 用 Animus 1.0 与 2.0 从 Desmond 身上提取记忆 ([Animus](https://assassinscreed.fandom.com/wiki/Animus))。

**DDS 的真实角色（修正项）。** Data Dump Scanner 由 Álvaro Gramática 于 **2009 年**开发，首次用于 Project Legacy。它的角色是把遗传记忆从源头"提取/录制"下来（可类比 DVD 光盘存储信息，仍需 Animi 这台"电视"才能播放观看），**而非**"读取突破"本身。随技术进步，Abstergo 借 DDS 让用户重历他人（含无血缘者）记忆；到 2012 年底，Animus 与 DDS 联合技术发展到"只要 DNA 在库中、任何人皆可观看他人遗传记忆"的成熟度，铺平了 Helix 之路 ([Animus](https://assassinscreed.fandom.com/wiki/Animus), [Bleeding Effect](https://assassinscreed.fandom.com/wiki/Bleeding_Effect))。
> 修正说明：DDS 并非"2012 事件后才被用来突破血缘"，而是早已存在、在 2012 年底由联合技术达到面向公众的成熟度。

**Helix 云端版。** 2014 年，Abstergo Entertainment（艾布斯泰戈娱乐）发布 Helix——存储圣殿骑士多年收集的大量遗传记忆的软件，配合基于 Animus Omega 型号的主机与头显使用，任何人无需与宿主有血缘即可观看（《大革命 Unity》引入云端 Animus）。2017 年 9 月又发布连接 Helix 服务器的便携 Mobile Animus 4.38（基于 Animus 4.3），附带手游《Rebellion 起义》，让用户跟随西班牙刺客 Aguilar de Nerha 在收复失地运动（Reconquista）中的经历；手游现实发售为 2018 年。Animus Omega 为 Abstergo Entertainment 全球销售的游戏机版 Animus ([Animus](https://assassinscreed.fandom.com/wiki/Animus), [Assassin's Creed: Rebellion](https://assassinscreed.fandom.com/wiki/Assassin%27s_Creed:_Rebellion), [Aguilar de Nerha](https://assassinscreed.fandom.com/wiki/Aguilar_de_Nerha))。

**便携 Animus（Layla 时代）。** Layla Hassan（蕾拉·哈桑）在《起源 Origins》《奥德赛 Odyssey》《英灵殿 Valhalla》使用的便携 Animus（Portable Animus HR-8 / HR-8.5）属高度先进版本，能从古代遗骸提取 DNA：Bayek（巴耶克）的木乃伊遗骸提供其记忆样本；Misthios（Kassandra 或 Alexios）的样本取自埋于希腊、列奥尼达斯之矛上残留的血液。该版本无需活体宿主、无需血缘 ([Animus](https://assassinscreed.fandom.com/wiki/Animus), [method.gg](https://www.method.gg/assassins-creed-shadows/what-is-the-animus-in-assassin-s-creed-a-complete-guide))。

### 8.6 同步与脱同步：历史固定规则的玩法化表达

同步（Synchronization）衡量使用者对祖先记忆的还原度：完全照实重演可得满同步并解锁被压抑的记忆；偏离则同步度下降、记忆不稳定，最终被逐出（脱同步），模拟从更早的点重启 ([Synchronization](https://assassinscreed.fandom.com/wiki/Synchronization))。典型脱同步触发都遵循"祖先当时没发生这种事"的逻辑：

- 高处坠落
- 战斗中受致命伤
- 进入祖先当时未进入的封锁区
- 刺杀时被发现

使用者与祖先的精神状态也影响模拟（Desmond 首次使用时，因潜意识无法承受创伤而几乎瞬间脱同步）。Animus 给予的是"有限自由"：核心仅允许观看 DNA 中的记忆，但也允许一定环境交互；当用户试图进入祖先当时未到过的环境时，Animus 会设立屏障。

各版本同步规则差异显著（均可在对应游戏内验证）：

| 版本 | 对应记忆 | 容量/显示 | 同步规则要点 |
| --- | --- | --- | --- |
| Animus 1.28 | Altaïr | 条状显示，总上限 20 格 | 分基础同步与附加同步；基础上限随 Altaïr 军衔提升（新手 4 格，每升一级 +1，至大师刺客 13 格）；附加同步靠救市民、登高点等获得，每完成 15 项触发"DNA Synchronization Augmented"并 +1 格 |
| Animus 2.0 | Ezio | 总上限 25 格 | 同步过低时屏幕闪蓝红警告；归零后再一次脱同步动作即重启记忆 |
| Animus 4.3 | Callum Lynch（电影） | 无同步条 | 未模仿祖先、或在 Bleeding Effect 负面症状下精确复制祖先行为，都会立即脱同步、被弹出，并因颈椎硬膜外注射而短暂部分瘫痪 |
| 便携 Animus HR-8 | Bayek（《起源》） | 同步条 | Bayek 受伤过多、杀超过 3 名平民或过度冒犯圣猫时掉同步，可脱离战斗等待同步条回充；首次出现"无需满足任何条件即可 100% 同步" |

自《起源》起，脱同步规则可在 Animus Control Panel（阿尼姆斯控制面板）中开关 ([Synchronization](https://assassinscreed.fandom.com/wiki/Synchronization), [Steam 社区](https://steamcommunity.com/app/582160/discussions/0/3211505894130485521/))。

### 8.7 模拟的不完美与"数据补全"

模拟并非完美重建。Animus 生成的兴趣点地图随探索逐步填充，且与现实原型有时存在失真。记忆本身有公认缺口——Altaïr 只需读取至多几年，Ezio 却从出生读起且大段人生被直接跳过，官方简单解释为"那些部分不重要" ([Animus](https://assassinscreed.fandom.com/wiki/Animus))。

记忆间的"加载"过渡数字空间是 Memory Corridor（记忆走廊），各版本外观不同：

| 版本 | Memory Corridor 外观 |
| --- | --- |
| Animus 1.28 | 冰蓝带雾，含代码串 |
| Animus 3.0 | 冰蓝无雾，三角碎片网格 |
| Animi 训练计划版 | 混合蓝雾与白线 |

来源见 ([Memory Corridor](https://assassinscreed.fandom.com/wiki/Memory_Corridor))。

需要明确：**"开放世界玩家自由 vs 历史固定"之间的张力，被 Wiki/媒体明确指为设定内部并不总能自洽，而非官方给出的统一规则** ([TheGamer](https://www.thegamer.com/assassins-creed-things-make-no-sense-about-animus/))。

**（社区推测）** 新世代 RPG 化作品中的对话选项与多结局，最贴合的设定内解释是"模拟基于不完整的遗传样本、存在缺口，系统以分支/概率方式补全"，与 Animus 失真、跳过不重要片段、用算法填充地图的既有机制一致。但目前没有 Ubisoft 官方逐条声明"对话选项=样本不完整"，此为沿用既有框架的玩家/社区推断，不可当作 canon 硬设定 ([TheGamer](https://www.thegamer.com/assassins-creed-things-make-no-sense-about-animus/))。

### 8.8 异常数据：Glitch / Animus Anomalies / Rift

在设定内，故障与异常都被解释为"模拟内被损坏、加密或刻意隐藏的数据片段"，需现世用户交互或稳定化以恢复。

- **Glitch（故障）：** 使用 Animus 时特定点出现的视觉异常。Desmond 在 Animus 1.28 重历 Altaïr 记忆时，glitch 表现为核苷酸（nucleotides）在界面上闪过；与 glitch 交互可把镜头从祖先身后切到正面、持续交互可循环切换所有可用视角，对垂死的刺杀目标交互时还能改变场景条件，让目标无伤走动交谈 ([Glitch](https://assassinscreed.fandom.com/wiki/Glitch))。
  > 修正说明：早期资料称 1.28 中"持续冲刺可清空闪烁数据碎片、露出蓝色雾状空间"，机制描述不准确；实际是切换镜头视角，已据 Glitch 词条更正。
- **Animus Anomalies（阿尼姆斯异常）：** 《英灵殿》中散落于模拟世界（盎格鲁-撒克逊英格兰与挪威 Hordafylke）的遗传记忆数据碎片，由便携 Animus HR-8.5 渲染。靠近会使会话不稳定并 glitch，交互后模拟暂停进入跳台解谜。其叙事来源是 Isu Loki（洛基）通过化身 Basim（巴辛）被困超级计算机 Yggdrasil 期间所造，内含 Loki 在大灾变期间被加密的记忆碎片（解谜时可听到 Loki 与 Aletheia 的声音），集齐十枚拼出完整 Isu 记忆 ([Animus Anomalies](https://assassinscreed.fandom.com/wiki/Animus_Anomalies))。
- **Rift（裂隙）：** 《影 Shadows》延续了上述形式，表现为追随发光节点、聆听数字世界中的实体 ([Animus Anomalies](https://assassinscreed.fandom.com/wiki/Animus_Anomalies))。

### 8.9 多人模式的设定内定位：Animi Training Program

早期作品的多人模式被设定内解释为 Abstergo 的 Animi Training Program（阿尼姆斯训练计划）：玩家扮演正接受训练、成为模板特工的现代 Abstergo 员工，通过 Animus 重历历史模板（圣殿骑士/非刺客）的记忆并相互对抗（追杀指定目标、躲避追击），并刻意利用 Bleeding Effect（渗血效应）灌输战斗与跑酷技能。这与"历史固定、只能重历并被评分"的核心规则一致 ([Animi Training Program](https://assassinscreed.fandom.com/wiki/Animi_Training_Program))。

该计划在 Desmond（实验体 17 号）"逃脱"后不久，由 Warren Vidic（沃伦·维迪克）在罗马设施启动，分阶段推进：

| 阶段 | 对应作品 | 设定内容 |
| --- | --- | --- |
| 第一阶段 | 《兄弟会 Brotherhood》 | 21 个 Animi Avatars（替身），文艺复兴意大利圣殿骑士/要人 |
| 第二阶段 | 《启示录 Revelations》 | 奥斯曼时代地中海与中东 |
| 第三阶段 | 《刺客信条 3》 | 七年战争末期的 Geosimulation |
| 续作 | 《黑旗 Black Flag》 | 海盗黄金时代，经 Abstergo Entertainment 商业化分发 |

来源见 ([Animi Training Program](https://assassinscreed.fandom.com/wiki/Animi_Training_Program), [Warren Vidic](https://assassinscreed.fandom.com/wiki/Warren_Vidic))。

### 8.10 存疑/已降级设定

**（社区推测）"读取者与记忆创造者共享血统和性别可减轻 Bleeding Effect"——缺乏来源支撑。** 早期资料曾把此说法作为"早期需血缘"规则的附带 canon 断言。独立核查 Bleeding Effect 词条：症状严重度主要与 Animus 暴露时长、个体天生抗性（如 Noa 对 Bleeding Effect 天生较高抗性）相关，**未见**"共享血统+性别减轻症状"的因果设定。该说法应从 canon 中移除或标注为玩家推测，不可作为"核心规则"引用 ([Bleeding Effect](https://assassinscreed.fandom.com/wiki/Bleeding_Effect))。

---

## 9. 现实实现必备设定要素（功能规格）

本节从已核实的 Animus canon 中抽取：若要在现实中实现一台 Animus，必须满足哪些功能性设定要素。按八层归纳——每层说明该层在设定中做什么、依赖哪些前置设定、属于工程性要素还是科幻前提。

**判定口径**：「工程可近似」指现实中已有对应技术方向、Animus 只是把它推到极端；「科学断点」指依赖一个现实尚未/无法证实的虚构科学前提，是整套系统无法落地的根因。

### 9.1 各层功能规格总表

| 层 | 设定中该层做什么 | 依赖的前置设定 | 性质 |
|---|---|---|---|
| **输入端**（DNA 采样/接入） | 从宿主取得 DNA 并把使用者接入机器：早期 1.28 用弧形玻璃屏覆盖头部投影、2.0 经手臂导管（catheter）接入、电影 4.3 经颈椎皮下硬膜外（subcutaneous epidural）连接、HR-8 改用血液链接（hematological link，对红细胞中存储信息测序并向各器官传输） | 「DNA 同时存储遗传指令与可回放的祖先记忆」这一根本假设（[Genetic memory](https://assassinscreed.fandom.com/wiki/Genetic_memory)）；样本读取还依赖 DDS 已把记忆提取入库 | 采样/接入硬件**工程可近似**；「DNA 含可回放祖先记忆」是**科学断点** |
| **解码端**（遗传记忆 → 信号流） | 把 DNA 中编码的遗传记忆解码、还原成三维信号流（three-dimensional feed），供重构端使用 | 遗传记忆可被「解码并渲染成三维信号流」（[Animus](https://assassinscreed.fandom.com/wiki/Animus)）；基于已发现的 Isu（第一文明）科技 | **科学断点**（DNA 不存储可回放经历，无可解码对象） |
| **重构端**（信号 → 三维环境） | 把解码信号三维投影/重建为可感知环境。Vidic 名言：「它是一台把遗传记忆三维渲染出来的投影机」。重构借助记忆走廊（[Memory Corridor](https://assassinscreed.fandom.com/wiki/Memory_Corridor)）作加载/构建缓冲空间 | 解码端已产出有效信号流；翻译/渲染软件架构（[Animus](https://assassinscreed.fandom.com/wiki/Animus)） | 三维渲染/VR 重建**工程可近似**；其输入（真实祖先记忆数据）**科学断点** |
| **交互端**（操纵/反馈接口） | 把记忆控制映射成「木偶式」按键（每肢体一输入）、低调/高调态强度开关；HUD + 反馈状态系统回传记忆目标、警告、社交状态指示器；把操控提示投影进使用者意识以提升适应（[Animus Control & Feedback](https://assassinscreed.fandom.com/wiki/Animus_Control_%26_Feedback_(Updated).txt)） | 重构端已生成可交互环境；使用者能「代入」祖先（同步） | 控制映射/HUD/反馈**工程可近似**；「向意识投影提示」属**科学断点** |
| **校验端**（同步率/Synchronization） | 度量使用者行为与原始记忆的吻合度：照实重演得满同步并解锁被压抑片段，偏离则记忆不稳定、屏幕闪蓝红、最终脱同步并从更早点重载；以隐形屏障封锁祖先未踏足区域（[Synchronization](https://assassinscreed.fandom.com/wiki/Synchronization)） | 「历史已固定、只能重放不可篡改」这一不变量；记忆是已发生事件的录像 | 比对/回退是**工程可近似**的校验逻辑；其前提「存在唯一固定的历史录像可比对」是**科学断点** |
| **保护端**（时长限制/恢复/安全模式） | 限制单次使用时长以抑制副作用（一次达 6 小时即可触发出血效应，幻象超 30 秒方有危险）；脱离战斗等待同步条回充；底层「安全模式」黑色房间/Animus 岛（[Black Room](https://assassinscreed.fandom.com/wiki/Black_Room)）作为不含记忆数据的测试空间 | 副作用端的可量化阈值；解码/重构端可被挂起到不加载记忆的底层态 | **工程可近似**（时长门限、会话隔离、安全模式是常规防护设计） |
| **副作用端**（出血效应/技能迁移） | 双刃：负面引发遗传记忆与实时记忆混合、认知退化、时间性幻觉、多重意识、现实重叠，极端致海马冲击、枕叶残影、脑死亡、身份替换；正面把祖先格斗/跑酷/鹰眼渗透给使用者（[Bleeding Effect](https://assassinscreed.fandom.com/wiki/Bleeding_Effect)） | 长时间/连续接入解码端；个体天生抗性差异 | 整体是**科学断点**（记忆/技能在神经层「渗入并固化」无现实机制） |
| **应用端**（情报/训练/商业化） | 把读取能力转为用途：定位伊甸碎片与 Isu 科技（Animus Project）、诱发出血效应批量训练特工（Animi Training Program）、消费化为 Animus Omega/Helix 云平台并采集大众 DNA（[Helix](https://assassinscreed.fandom.com/wiki/Helix)） | 前述各层成立；样本读取使「无需血缘即可读任何在库 DNA」 | 商业平台/云分发/数据采集**工程可近似**；其内容（真实祖先记忆）**科学断点** |

### 9.2 跨层关键依赖链

实现链条存在硬性前后依赖，任一前置不成立则下游整层失效：

1. **样本读取（解除血缘限制）依赖 DDS**：早期 Animus 只能读使用者自身直系祖先记忆（血缘读取），且受「记忆止于孕育下一代直系祖先之时」的硬约束（男性止于使后代受孕、女性止于分娩，[Genetic memory](https://assassinscreed.fandom.com/wiki/Genetic_memory)）。Data Dump Scanner（DDS，2009 年 Álvaro Gramática 开发）负责把记忆从源头提取/录制入库；到 2012 年底 Animus + DDS 联合发展到「只要 DNA 在库，任何人无需血缘即可观看他人记忆」（[Animus](https://assassinscreed.fandom.com/wiki/Animus)）。没有这一步，应用端的大众商业化无从谈起。

2. **超遗传终点记忆依赖 Isu 载体补完**：遗传链只能传到孕育下一代为止，祖先晚年记忆无法经普通血缘读取，须借 Memory Seals（如 [Masyaf Key](https://assassinscreed.fandom.com/wiki/Masyaf_Key)）等 Isu 造物记录与回放。即「输入端的 DNA 通道」本身有覆盖上限，需外部记忆载体补齐。

3. **校验端 ⇄ 副作用端的此消彼长**：提升同步率会加剧出血效应（Brahman 3.0 早期测试因同步率提升导致出血效应加剧、多数测试者发疯，[Brahman 3.0](https://assassinscreed.fandom.com/wiki/Brahman_3.0)）。保护端的时长限制正是为压制这一耦合而设——这是设定内最接近「工程约束」的安全设计。

### 9.3 「工程可近似 / 科学断点」分布结论

- **可在现实近似的层**：输入端的接入硬件、交互端的控制映射与 HUD、校验端的比对回退逻辑、保护端的会话隔离、应用端的云平台与数据采集——这些都是现有 VR/BCI/软件工程方向的极端化延伸。
- **决定整机不可实现的断点集中在解码端与副作用端**：核心断点只有一个——「DNA 完整保存可回放的祖先经历」这一虚构外推（现实中的「遗传记忆」是行为学/本能概念，不含可回放的个人经历，[Genetic memory](https://assassinscreed.fandom.com/wiki/Genetic_memory)）。该假设一旦不成立，解码端没有可解码对象、重构端没有真实数据可渲染、副作用端的「记忆渗入」无从发生，应用端全部用途随之失效。
- 因此现实实现的边界很清晰：**外壳（接入、界面、校验、防护、平台）可造，内核（从 DNA 读出祖先记忆）是不可逾越的科学断点。** 设定中现实世界的几台「类 Animus」尝试（9 世纪 [Alruh](https://assassinscreed.fandom.com/wiki/Alruh)、1940 年代 Die Glocke）也都把可行性押在「Isu 科技 + 遗传记忆可解码」这同一前提上，本质上属于同一断点。

---

## 来源附录

全文引用的去重来源（共 84 条）：

- [Animi Training Program | Assassin's Creed Multiplayer Wiki | Fandom](https://acmultiplayer.fandom.com/wiki/Animi_Training_Program)
- [Álvaro Gramática | Assassin's Creed Wiki | Fandom](https://assassinscreed.fandom.com/wiki/%C3%81lvaro_Gram%C3%A1tica)
- [Abstergo Entertainment | Assassin's Creed Wiki](https://assassinscreed.fandom.com/wiki/Abstergo_Entertainment)
- [Aguilar de Nerha | Assassin's Creed Wiki | Fandom](https://assassinscreed.fandom.com/wiki/Aguilar_de_Nerha)
- [Alamut Temple | Assassin's Creed Wiki](https://assassinscreed.fandom.com/wiki/Alamut_Temple)
- [Alruh | Assassin's Creed Wiki](https://assassinscreed.fandom.com/wiki/Alruh)
- [Animi Avatars (first stage) | Assassin's Creed Wiki | Fandom](https://assassinscreed.fandom.com/wiki/Animi_Avatars_(first_stage))
- [Animi Training Program | Assassin's Creed Wiki | Fandom](https://assassinscreed.fandom.com/wiki/Animi_Training_Program)
- [Animus | Assassin's Creed Wiki | Fandom](https://assassinscreed.fandom.com/wiki/Animus)
- [Animus Anomalies | Assassin's Creed Wiki | Fandom](https://assassinscreed.fandom.com/wiki/Animus_Anomalies)
- [Animus Control & Feedback.txt | Assassin's Creed Wiki](https://assassinscreed.fandom.com/wiki/Animus_Control_%26_Feedback.txt)
- [Animus Control & Feedback (Updated).txt | Assassin's Creed Wiki](https://assassinscreed.fandom.com/wiki/Animus_Control_%26_Feedback_(Updated).txt)
- [Animus Control Panel | Assassin's Creed Wiki | Fandom](https://assassinscreed.fandom.com/wiki/Animus_Control_Panel)
- [Animus Hub | Assassin's Creed Wiki | Fandom](https://assassinscreed.fandom.com/wiki/Animus_Hub)
- [Animus Project | Assassin's Creed Wiki | Fandom](https://assassinscreed.fandom.com/wiki/Animus_Project)
- [Animus Project Update 3.0 | Assassin's Creed Wiki](https://assassinscreed.fandom.com/wiki/Animus_Project_Update_3.0)
- [Animus Virtual Training Program | Assassin's Creed Wiki](https://assassinscreed.fandom.com/wiki/Animus_Virtual_Training_Program)
- [Animus data fragment | Assassin's Creed Wiki | Fandom](https://assassinscreed.fandom.com/wiki/Animus_data_fragment)
- [Assassin's Creed: Rebellion | Assassin's Creed Wiki | Fandom](https://assassinscreed.fandom.com/wiki/Assassin%27s_Creed:_Rebellion)
- [Assassin's Creed: Mirage | Assassin's Creed Wiki](https://assassinscreed.fandom.com/wiki/Assassin's_Creed:_Mirage)
- [Assassin's Creed: Revelations | Assassin's Creed Wiki](https://assassinscreed.fandom.com/wiki/Assassin's_Creed:_Revelations)
- [Assassin's Creed: Unity | Assassin's Creed Wiki | Fandom](https://assassinscreed.fandom.com/wiki/Assassin's_Creed:_Unity)
- [Assassin's Creed (film) | Assassin's Creed Wiki | Fandom](https://assassinscreed.fandom.com/wiki/Assassin's_Creed_(film))
- [Basim ibn Ishaq | Assassin's Creed Wiki](https://assassinscreed.fandom.com/wiki/Basim_ibn_Ishaq)
- [Black Room | Assassin's Creed Wiki | Fandom](https://assassinscreed.fandom.com/wiki/Black_Room)
- [Bleeding Effect | Assassin's Creed Wiki | Fandom](https://assassinscreed.fandom.com/wiki/Bleeding_Effect)
- [Boris Pash | Assassin's Creed Wiki](https://assassinscreed.fandom.com/wiki/Boris_Pash)
- [Brahman 3.0 | Assassin's Creed Wiki | Fandom](https://assassinscreed.fandom.com/wiki/Brahman_3.0)
- [Callum Lynch | Assassin's Creed Wiki | Fandom](https://assassinscreed.fandom.com/wiki/Callum_Lynch)
- [Capitoline Triad | Assassin's Creed Wiki](https://assassinscreed.fandom.com/wiki/Capitoline_Triad)
- [Charlotte de la Cruz | Assassin's Creed Wiki | Fandom](https://assassinscreed.fandom.com/wiki/Charlotte_de_la_Cruz)
- [Clay Kaczmarek | Assassin's Creed Wiki | Fandom](https://assassinscreed.fandom.com/wiki/Clay_Kaczmarek)
- [Daniel Cross | Assassin's Creed Wiki | Fandom](https://assassinscreed.fandom.com/wiki/Daniel_Cross)
- [Database | Assassin's Creed Wiki | Fandom](https://assassinscreed.fandom.com/wiki/Database)
- [Database: Rift 1 - Bleeding Effect | Assassin's Creed Wiki](https://assassinscreed.fandom.com/wiki/Database:_Rift_1_-_Bleeding_Effect)
- [Desmond Miles | Assassin's Creed Wiki | Fandom](https://assassinscreed.fandom.com/wiki/Desmond_Miles)
- [Eagle Vision | Assassin's Creed Wiki | Fandom](https://assassinscreed.fandom.com/wiki/Eagle_Vision)
- [Fazil Fahim al-Kemsa | Assassin's Creed Wiki](https://assassinscreed.fandom.com/wiki/Fazil_Fahim_al-Kemsa)
- [Genetic memory | Assassin's Creed Wiki | Fandom](https://assassinscreed.fandom.com/wiki/Genetic_memory)
- [Glitch | Assassin's Creed Wiki | Fandom](https://assassinscreed.fandom.com/wiki/Glitch)
- [Glyphs | Assassin's Creed Wiki | Fandom](https://assassinscreed.fandom.com/wiki/Glyphs)
- [Helix | Assassin's Creed Wiki | Fandom](https://assassinscreed.fandom.com/wiki/Helix)
- [Helix Initiate | Assassin's Creed Wiki | Fandom](https://assassinscreed.fandom.com/wiki/Helix_Initiate)
- [Jupiter | Assassin's Creed Wiki](https://assassinscreed.fandom.com/wiki/Jupiter)
- [Layla Hassan | Assassin's Creed Wiki | Fandom](https://assassinscreed.fandom.com/wiki/Layla_Hassan)
- [Lost, but Not Forgotten | Assassin's Creed Wiki](https://assassinscreed.fandom.com/wiki/Lost,_but_Not_Forgotten)
- [Masyaf Key | Assassin's Creed Wiki](https://assassinscreed.fandom.com/wiki/Masyaf_Key)
- [Memory Corridor | Assassin's Creed Wiki | Fandom](https://assassinscreed.fandom.com/wiki/Memory_Corridor)
- [Memory Seals | Assassin's Creed Wiki](https://assassinscreed.fandom.com/wiki/Memory_Seals)
- [Memory Seals#Masyaf Keys | Assassin's Creed Wiki](https://assassinscreed.fandom.com/wiki/Memory_Seals#Masyaf_Keys)
- [Minerva | Assassin's Creed Wiki](https://assassinscreed.fandom.com/wiki/Minerva)
- [Noa Kim | Assassin's Creed Wiki | Fandom](https://assassinscreed.fandom.com/wiki/Noa_Kim)
- [Phoenix Project | Assassin's Creed Wiki | Fandom](https://assassinscreed.fandom.com/wiki/Phoenix_Project)
- [Precursor relic | Assassin's Creed Wiki](https://assassinscreed.fandom.com/wiki/Precursor_relic)
- [Rebecca Crane | Assassin's Creed Wiki](https://assassinscreed.fandom.com/wiki/Rebecca_Crane)
- [Sample 17 Project | Assassin's Creed Wiki | Fandom](https://assassinscreed.fandom.com/wiki/Sample_17_Project)
- [Surrogate Initiative | Assassin's Creed Wiki | Fandom](https://assassinscreed.fandom.com/wiki/Surrogate_Initiative)
- [Synchronization | Assassin's Creed Wiki | Fandom](https://assassinscreed.fandom.com/wiki/Synchronization)
- [The Truth | Assassin's Creed Wiki | Fandom](https://assassinscreed.fandom.com/wiki/The_Truth)
- [Vatican Vault | Assassin's Creed Wiki](https://assassinscreed.fandom.com/wiki/Vatican_Vault)
- [Viewpoint | Assassin's Creed Wiki | Fandom](https://assassinscreed.fandom.com/wiki/Viewpoint)
- [Warren Vidic | Assassin's Creed Wiki | Fandom](https://assassinscreed.fandom.com/wiki/Warren_Vidic)
- [Assassin's Creed IV: Black Flag - Wikipedia](https://en.wikipedia.org/wiki/Assassin%27s_Creed_IV:_Black_Flag)
- [Assassin's Creed Revelations - Wikipedia](https://en.wikipedia.org/wiki/Assassin's_Creed:_Revelations)
- [Assassin's Creed (film) - Wikipedia](https://en.wikipedia.org/wiki/Assassin's_Creed_(film))
- [Black Flag Resynced Modern Day Story Replacement Explained | Game Rant](https://gamerant.com/assassins-creed-ac-black-flag-modern-day-story/)
- [Assassin's Creed III - Completionist Guide | PSNProfiles](https://psnprofiles.com/guide/23827-assassins-creed-iii-completionist-guide)
- [Assassin's Creed: What Happens If Someone In The Animus Uses An Animus? | Screen Rant](https://screenrant.com/assassins-creed-animus-inception-abstergo-history-dna/)
- [Why Assassin's Creed Doesn't Let You Kill Civilians | ScreenRant](https://screenrant.com/assassins-creed-kill-civilian-murder-innocent-desychronize-animus/)
- [Assassin's Creed: Layla Hassan's Full Story Through AC Valhalla | ScreenRant](https://screenrant.com/assassins-creed-layla-hassan-story-valhalla-mirage/)
- [desync from slaughtering civilians is so damn annoying | Steam Community (AC Origins)](https://steamcommunity.com/app/582160/discussions/0/1640915206477601029/)
- [What is desynchronization rule in animus control panel? | Steam Community (AC Origins)](https://steamcommunity.com/app/582160/discussions/0/3211505894130485521/)
- [Assassin's Creed/Controls — StrategyWiki](https://strategywiki.org/wiki/Assassin's_Creed/Controls)
- [Assassin's Creed II/Controls — StrategyWiki](https://strategywiki.org/wiki/Assassin's_Creed_II/Controls)
- [Assassin's Creed Origins: Animus Control Panel Overview - VULKK.com](https://vulkk.com/2018/04/19/assassins-creed-origins-animus-control-panel-overview/)
- [What is the Animus in Assassin's Creed? (method.gg)](https://www.method.gg/assassins-creed-shadows/what-is-the-animus-in-assassin-s-creed-a-complete-guide)
- [Animus Control Panel (ACP) | Nexus Mods (AC Origins)](https://www.nexusmods.com/assassinscreedorigins/mods/232)
- [Perfectionist Trophy in Assassin's Creed: Brotherhood | PlayStationTrophies.org](https://www.playstationtrophies.org/game/assassins-creed-brotherhood/trophy/21993-perfectionist.html)
- [In Assassin's Creed, if ancestors' memories are imprinted on genes... (Quora)](https://www.quora.com/In-Assassins-Creed-if-ancestors-memories-are-imprinted-on-genes-Does-that-mean-the-memory-of-a-male-ancestor-ends-after-semen-ejaculation)
- [AC: 10 Things That Make No Sense About The Animus (TheGamer)](https://www.thegamer.com/assassins-creed-things-make-no-sense-about-animus/)
- [Welcome to the Animus Hub - Ubisoft News](https://www.ubisoft.com/en-gb/game/assassins-creed/news/6yQywqDB4bRmLtXp3K0pbd/welcome-to-the-animus-hub-your-new-home-for-assassins-creed-games)
- [Full Synchronization feature in Assassin's Creed Mirage | Ubisoft Help](https://www.ubisoft.com/en-us/help/assassins-creed-mirage/gameplay/article/full-synchronization-feature-in-assassins-creed-mirage/000106881)
- [Animus Control Panel | Ubisoft Help (AC Origins)](https://www.ubisoft.com/en-us/help/assassins-creed-origins/gameplay/article/animus-control-panel/000062381)
- [The 10 HARDEST Assassin's Creed Missions to 100% Sync | WatchMojo](https://www.watchmojo.com/articles/hardest-assassins-creed-missions-to-100-sync)

