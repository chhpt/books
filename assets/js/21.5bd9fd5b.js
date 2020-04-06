(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{265:function(a,t,r){"use strict";r.r(t);var s=r(28),e=Object(s.a)({},(function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"术语表-【draft】"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#术语表-【draft】"}},[a._v("#")]),a._v(" 术语表 【DRAFT】")]),a._v(" "),r("blockquote",[r("p",[a._v("请注意，本术语表中的定义简短而简单，旨在传达核心思想，而不是术语的完整细微之处。 有关更多详细信息，请参阅正文中的参考资料。")])]),a._v(" "),r("p",[a._v("[TOC]")]),a._v(" "),r("h3",{attrs:{id:"异步（asynchronous）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#异步（asynchronous）"}},[a._v("#")]),a._v(" 异步（asynchronous）")]),a._v(" "),r("p",[a._v("不等待某些事情完成（例如，将数据发送到网络中的另一个节点），并且不会假设要花多长时间。请参阅第153页上的“同步与异步复制”，第284页上的“同步与异步网络”，以及第306页上的“系统模型与现实”。")]),a._v(" "),r("h3",{attrs:{id:"原子（atomic）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#原子（atomic）"}},[a._v("#")]),a._v(" 原子（atomic）")]),a._v(" "),r("p",[a._v("1.在并发操作的上下文中：描述一个在单个时间点看起来生效的操作，所以另一个并发进程永远不会遇到处于“半完成”状态的操作。另见隔离。")]),a._v(" "),r("p",[a._v("2.在事务的上下文中：将一些写入操作分为一组，这组写入要么全部提交成功，要么遇到错误时全部回滚。参见第223页的“原子性”和第354页的“原子提交和两阶段提交（2PC）”。")]),a._v(" "),r("h3",{attrs:{id:"背压（backpressure）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#背压（backpressure）"}},[a._v("#")]),a._v(" 背压（backpressure）")]),a._v(" "),r("p",[a._v("接收方接收数据速度较慢时，强制降低发送方的数据发送速度。也称为流量控制。请参阅第441页上的“消息系统”。")]),a._v(" "),r("h3",{attrs:{id:"批处理（batch-process）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#批处理（batch-process）"}},[a._v("#")]),a._v(" 批处理（batch process）")]),a._v(" "),r("p",[a._v("一种计算，它将一些固定的（通常是大的）数据集作为输入，并将其他一些数据作为输出，而不修改输入。见第十章。")]),a._v(" "),r("h3",{attrs:{id:"边界（bounded）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#边界（bounded）"}},[a._v("#")]),a._v(" 边界（bounded）")]),a._v(" "),r("p",[a._v("有一些已知的上限或大小。例如，网络延迟情况（请参阅“超时和未定义的延迟”在本页281）和数据集（请参阅第11章的介绍）。")]),a._v(" "),r("h3",{attrs:{id:"拜占庭故障（byzantine-fault）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#拜占庭故障（byzantine-fault）"}},[a._v("#")]),a._v(" 拜占庭故障（Byzantine fault）")]),a._v(" "),r("p",[a._v("表现异常的节点，这种异常可能以任意方式出现，例如向其他节点发送矛盾或恶意消息。请参阅第304页上的“拜占庭故障”。")]),a._v(" "),r("h3",{attrs:{id:"缓存（cache）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#缓存（cache）"}},[a._v("#")]),a._v(" 缓存（cache）")]),a._v(" "),r("p",[a._v("一种组件，通过存储最近使用过的数据，加快未来对相同数据的读取速度。缓存中通常存放部分数据：因此，如果缓存中缺少某些数据，则必须从某些底层较慢的数据存储系统中，获取完整的数据副本。")]),a._v(" "),r("h3",{attrs:{id:"cap定理（cap-theorem）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cap定理（cap-theorem）"}},[a._v("#")]),a._v(" CAP定理（CAP theorem）")]),a._v(" "),r("p",[a._v("一个被广泛误解的理论结果，在实践中是没有用的。参见第336页的“CAP定理”。")]),a._v(" "),r("h3",{attrs:{id:"因果关系（causality）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#因果关系（causality）"}},[a._v("#")]),a._v(" 因果关系（causality）")]),a._v(" "),r("p",[a._v("事件之间的依赖关系，当一件事发生在另一件事情之前。例如，后面的事件是对早期事件的回应，或者依赖于更早的事件，或者应该根据先前的事件来理解。请参阅第186页上的“发生之前的关系和并发性”和第339页上的“排序和因果关系”。")]),a._v(" "),r("h3",{attrs:{id:"共识（consensus）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#共识（consensus）"}},[a._v("#")]),a._v(" 共识（consensus）")]),a._v(" "),r("p",[a._v("分布式计算的一个基本问题，就是让几个节点同意某些事情（例如，哪个节点应该是数据库集群的领导者）。问题比乍看起来要困难得多。请参阅第364页上的“容错共识”。")]),a._v(" "),r("h3",{attrs:{id:"数据仓库（data-warehouse）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#数据仓库（data-warehouse）"}},[a._v("#")]),a._v(" 数据仓库（data warehouse）")]),a._v(" "),r("p",[a._v("一个数据库，其中来自几个不同的OLTP系统的数据已经被合并和准备用于分析目的。请参阅第91页上的“数据仓库”。")]),a._v(" "),r("h3",{attrs:{id:"声明式（declarative）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#声明式（declarative）"}},[a._v("#")]),a._v(" 声明式（declarative）")]),a._v(" "),r("p",[a._v("描述某些东西应有的属性，但不知道如何实现它的确切步骤。在查询的上下文中，查询优化器采用声明性查询并决定如何最好地执行它。请参阅第42页上的“数据的查询语言”。")]),a._v(" "),r("h3",{attrs:{id:"非规范化（denormalize）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#非规范化（denormalize）"}},[a._v("#")]),a._v(" 非规范化（denormalize）")]),a._v(" "),r("p",[a._v("为了加速读取，在标准数据集中引入一些冗余或重复数据，通常采用缓存或索引的形式。非规范化的值是一种预先计算的查询结果，像物化视图。请参见“单对象和多对象操作”（第228页）和“从同一事件日志中派生多个视图”（第461页）。")]),a._v(" "),r("h3",{attrs:{id:"衍生数据（derived-data）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#衍生数据（derived-data）"}},[a._v("#")]),a._v(" 衍生数据（derived data）")]),a._v(" "),r("p",[a._v("一种数据集，根据其他数据通过可重复运行的流程创建。必要时，你可以运行该流程再次创建衍生数据。衍生数据通常用于提高特定数据的读取速度。常见的衍生数据有索引、缓存和物化视图。参见第三部分的介绍。")]),a._v(" "),r("h3",{attrs:{id:"确定性（deterministic）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#确定性（deterministic）"}},[a._v("#")]),a._v(" 确定性（deterministic）")]),a._v(" "),r("p",[a._v("描述一个函数，如果给它相同的输入，则总是产生相同的输出。这意味着它不能依赖于随机数字、时间、网络通信或其他不可预测的事情。")]),a._v(" "),r("h3",{attrs:{id:"分布式（distributed）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#分布式（distributed）"}},[a._v("#")]),a._v(" 分布式（distributed）")]),a._v(" "),r("p",[a._v("在由网络连接的多个节点上运行。对于部分节点故障，具有容错性：系统的一部分发生故障时，其他部分仍可以正常工作，通常情况下，软件无需了解故障相关的确切情况。请参阅第274页上的“故障和部分故障”。")]),a._v(" "),r("h3",{attrs:{id:"持久（durable）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#持久（durable）"}},[a._v("#")]),a._v(" 持久（durable）")]),a._v(" "),r("p",[a._v("以某种方式存储数据，即使发生各种故障，也不会丢失数据。请参阅第226页上的“持久性”。")]),a._v(" "),r("h3",{attrs:{id:"etl（extract-transform-load）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#etl（extract-transform-load）"}},[a._v("#")]),a._v(" ETL（Extract-Transform-Load）")]),a._v(" "),r("p",[a._v("提取-转换-加载（Extract-Transform-Load）。从源数据库中提取数据，将其转换为更适合分析查询的形式，并将其加载到数据仓库或批处理系统中的过程。请参阅第91页上的“数据仓库”。")]),a._v(" "),r("h3",{attrs:{id:"故障切换（failover）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#故障切换（failover）"}},[a._v("#")]),a._v(" 故障切换（failover）")]),a._v(" "),r("p",[a._v("在具有单一领导者的系统中，故障切换是将领导角色从一个节点转移到另一个节点的过程。请参阅第156页的“处理节点故障”。")]),a._v(" "),r("h3",{attrs:{id:"容错（fault-tolerant）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#容错（fault-tolerant）"}},[a._v("#")]),a._v(" 容错（fault-tolerant）")]),a._v(" "),r("p",[a._v("如果出现问题（例如，机器崩溃或网络连接失败），可以自动恢复。请参阅第6页上的“可靠性”。")]),a._v(" "),r("h3",{attrs:{id:"流量控制（flow-control）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#流量控制（flow-control）"}},[a._v("#")]),a._v(" 流量控制（flow control）")]),a._v(" "),r("p",[a._v("见背压（backpressure）。")]),a._v(" "),r("h3",{attrs:{id:"追随者（follower）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#追随者（follower）"}},[a._v("#")]),a._v(" 追随者（follower）")]),a._v(" "),r("p",[a._v("一种数据副本，仅处理领导者发出的数据变更，不直接接受来自客户端的任何写入。也称为辅助、仆从、只读副本或热备份。请参阅第152页上的“领导和追随者”。")]),a._v(" "),r("h3",{attrs:{id:"全文检索（full-text-search）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#全文检索（full-text-search）"}},[a._v("#")]),a._v(" 全文检索（full-text search）")]),a._v(" "),r("p",[a._v("通过任意关键字来搜索文本，通常具有附加特征，例如匹配类似的拼写词或同义词。全文索引是一种支持这种查询的次级索引。请参阅第88页上的“全文搜索和模糊索引”。")]),a._v(" "),r("h3",{attrs:{id:"图（graph）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#图（graph）"}},[a._v("#")]),a._v(" 图（graph）")]),a._v(" "),r("p",[a._v("一种数据结构，由顶点（可以指向的东西，也称为节点或实体）和边（从一个顶点到另一个顶点的连接，也称为关系或弧）组成。请参阅第49页上的“和图相似的数据模型”。")]),a._v(" "),r("h3",{attrs:{id:"散列（hash）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#散列（hash）"}},[a._v("#")]),a._v(" 散列（hash）")]),a._v(" "),r("p",[a._v("将输入转换为看起来像随机数值的函数。相同的输入会转换为相同的数值，不同的输入一般会转换为不同的数值，也可能转换为相同数值（也被称为冲突）。请参阅第203页的“根据键的散列值分隔”。")]),a._v(" "),r("h3",{attrs:{id:"幂等（idempotent）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#幂等（idempotent）"}},[a._v("#")]),a._v(" 幂等（idempotent）")]),a._v(" "),r("p",[a._v("用于描述一种操作可以安全地重试执行，即执行多次的效果和执行一次的效果相同。请参阅第478页的“幂等”。")]),a._v(" "),r("h3",{attrs:{id:"索引（index）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#索引（index）"}},[a._v("#")]),a._v(" 索引（index）")]),a._v(" "),r("p",[a._v("一种数据结构。通过索引，你可以根据特定字段的值，在所有数据记录中进行高效检索。请参阅第70页的“让数据库更强大的数据结构”。")]),a._v(" "),r("h3",{attrs:{id:"隔离性（isolation）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#隔离性（isolation）"}},[a._v("#")]),a._v(" 隔离性（isolation）")]),a._v(" "),r("p",[a._v("在事务上下文中，用于描述并发执行事务的互相干扰程度。串行运行具有最强的隔离性，不过其它程度的隔离也通常被使用。请参阅第225页的“隔离”。")]),a._v(" "),r("h3",{attrs:{id:"连接（join）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#连接（join）"}},[a._v("#")]),a._v(" 连接（join）")]),a._v(" "),r("p",[a._v("汇集有共同点的记录。在一个记录与另一个记录有关（外键，文档参考，图中的边）的情况下最常用，查询需要获取参考所指向的记录。请参阅第33页上的“多对一和多对多关系”和第393页上的“减少端连接和分组”。")]),a._v(" "),r("h3",{attrs:{id:"领导者（leader）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#领导者（leader）"}},[a._v("#")]),a._v(" 领导者（leader）")]),a._v(" "),r("p",[a._v("当数据或服务被复制到多个节点时，由领导者分发已授权变更的数据副本。领导者可以通过某些协议选举产生，也可以由管理者手动选择。也被称为主人。请参阅第152页的“领导者和追随者”。")]),a._v(" "),r("h3",{attrs:{id:"线性化（linearizable）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#线性化（linearizable）"}},[a._v("#")]),a._v(" 线性化（linearizable）")]),a._v(" "),r("p",[a._v("表现为系统中只有一份通过原子操作更新的数据副本。请参阅第324页的“线性化”。")]),a._v(" "),r("h3",{attrs:{id:"局部性（locality）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#局部性（locality）"}},[a._v("#")]),a._v(" 局部性（locality）")]),a._v(" "),r("p",[a._v("一种性能优化方式，如果经常在相同的时间请求一些离散数据，把这些数据放到一个位置。请参阅第41页的“请求数据的局部性”。")]),a._v(" "),r("h3",{attrs:{id:"锁（lock）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#锁（lock）"}},[a._v("#")]),a._v(" 锁（lock）")]),a._v(" "),r("p",[a._v("一种保证只有一个线程、节点或事务可以访问的机制，如果其它线程、节点或事务想访问相同元素，则必须等待锁被释放。请参阅第257页的“两段锁（2PL）”和301页的“领导者和锁”。")]),a._v(" "),r("h3",{attrs:{id:"日志（log）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#日志（log）"}},[a._v("#")]),a._v(" 日志（log）")]),a._v(" "),r("p",[a._v("日志是一个只能以追加方式写入的文件，用于存放数据。预写式日志用于在存储引擎崩溃时恢复数据（请参阅第82页的“使二叉树更稳定”）；结构化日志存储引擎使用日志作为它的主要存储格式（请参阅第76页的“有序字符串表和日志结构的合并树”）；复制型日志用于把写入从领导者复制到追随者（请参阅第152页的“领导者和追随者”）；事件性日志可以表现为数据流（请参阅第446页的“分段日志”）。")]),a._v(" "),r("h3",{attrs:{id:"物化（materialize）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#物化（materialize）"}},[a._v("#")]),a._v(" 物化（materialize）")]),a._v(" "),r("p",[a._v("急切地计算并写出结果，而不是在请求时计算。请参阅第101页的“聚合：数据立方和物化视图”和419页的“中间状态的物化”。")]),a._v(" "),r("h3",{attrs:{id:"节点（node）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#节点（node）"}},[a._v("#")]),a._v(" 节点（node）")]),a._v(" "),r("p",[a._v("计算机上运行的一些软件的实例，通过网络与其他节点通信以完成某项任务。")]),a._v(" "),r("h3",{attrs:{id:"规范化（normalized）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#规范化（normalized）"}},[a._v("#")]),a._v(" 规范化（normalized）")]),a._v(" "),r("p",[a._v("以没有冗余或重复的方式进行结构化。 在规范化数据库中，当某些数据发生变化时，您只需要在一个地方进行更改，而不是在许多不同的地方复制很多次。 请参阅第33页上的“多对一和多对多关系”。")]),a._v(" "),r("h3",{attrs:{id:"olap（online-analytic-processing）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#olap（online-analytic-processing）"}},[a._v("#")]),a._v(" OLAP（Online Analytic Processing）")]),a._v(" "),r("p",[a._v("在线分析处理。 通过对大量记录进行聚合（例如，计数，总和，平均）来表征的访问模式。 请参阅第90页上的“交易处理或分析？”。")]),a._v(" "),r("h3",{attrs:{id:"oltp（online-transaction-processing）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#oltp（online-transaction-processing）"}},[a._v("#")]),a._v(" OLTP（Online Transaction Processing）")]),a._v(" "),r("p",[a._v("在线事务处理。 访问模式的特点是快速查询，读取或写入少量记录，这些记录通常通过键索引。 请参阅第90页上的“交易处理或分析？”。")]),a._v(" "),r("h3",{attrs:{id:"分区（partitioning）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#分区（partitioning）"}},[a._v("#")]),a._v(" 分区（partitioning）")]),a._v(" "),r("p",[a._v("将单机上的大型数据集或计算结果拆分为较小部分，并将其分布到多台机器上。 也称为分片。 见第6章。")]),a._v(" "),r("h3",{attrs:{id:"百分位点（percentile）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#百分位点（percentile）"}},[a._v("#")]),a._v(" 百分位点（percentile）")]),a._v(" "),r("p",[a._v("通过计算有多少值高于或低于某个阈值来衡量值分布的方法。 例如，某个时间段的第95个百分位响应时间是时间t，则该时间段中，95％的请求完成时间小于t，5％的请求完成时间要比t长。 请参阅第13页上的“描述性能”。")]),a._v(" "),r("h3",{attrs:{id:"主键（primary-key）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#主键（primary-key）"}},[a._v("#")]),a._v(" 主键（primary key）")]),a._v(" "),r("p",[a._v("唯一标识记录的值（通常是数字或字符串）。 在许多应用程序中，主键由系统在创建记录时生成（例如，按顺序或随机）; 它们通常不由用户设置。 另请参阅二级索引。")]),a._v(" "),r("h3",{attrs:{id:"法定人数（quorum）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#法定人数（quorum）"}},[a._v("#")]),a._v(" 法定人数（quorum）")]),a._v(" "),r("p",[a._v("在操作完成之前，需要对操作进行投票的最少节点数量。 请参阅第179页上的“读和写的法定人数”。")]),a._v(" "),r("h3",{attrs:{id:"再平衡（rebalance）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#再平衡（rebalance）"}},[a._v("#")]),a._v(" 再平衡（rebalance）")]),a._v(" "),r("p",[a._v("将数据或服务从一个节点移动到另一个节点以实现负载均衡。 请参阅第209页上的“再平衡分区”。")]),a._v(" "),r("h3",{attrs:{id:"复制（replication）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#复制（replication）"}},[a._v("#")]),a._v(" 复制（replication）")]),a._v(" "),r("p",[a._v("在几个节点（副本）上保留相同数据的副本，以便在某些节点无法访问时，数据仍可访问。请参阅第5章。")]),a._v(" "),r("h3",{attrs:{id:"模式（schema）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#模式（schema）"}},[a._v("#")]),a._v(" 模式（schema）")]),a._v(" "),r("p",[a._v("一些数据结构的描述，包括其字段和数据类型。 可以在数据生命周期的不同点检查某些数据是否符合模式（请参阅第39页上的“文档模型中的模式灵活性”），模式可以随时间变化（请参阅第4章）。")]),a._v(" "),r("h3",{attrs:{id:"次级索引（secondary-index）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#次级索引（secondary-index）"}},[a._v("#")]),a._v(" 次级索引（secondary index）")]),a._v(" "),r("p",[a._v("与主要数据存储器一起维护的附加数据结构，使您可以高效地搜索与某种条件相匹配的记录。 请参阅第85页上的“其他索引结构”和第206页上的“分区和二级索引”。")]),a._v(" "),r("h3",{attrs:{id:"可序列化（serializable）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#可序列化（serializable）"}},[a._v("#")]),a._v(" 可序列化（serializable）")]),a._v(" "),r("p",[a._v("保证多个并发事务同时执行时，它们的行为与按顺序逐个执行事务相同。 请参阅第251页上的“可序列化”。")]),a._v(" "),r("h3",{attrs:{id:"无共享（shared-nothing）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#无共享（shared-nothing）"}},[a._v("#")]),a._v(" 无共享（shared-nothing）")]),a._v(" "),r("p",[a._v("与共享内存或共享磁盘架构相比，独立节点（每个节点都有自己的CPU，内存和磁盘）通过传统网络连接。 见第二部分的介绍。")]),a._v(" "),r("h3",{attrs:{id:"偏斜（skew）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#偏斜（skew）"}},[a._v("#")]),a._v(" 偏斜（skew）")]),a._v(" "),r("p",[a._v("1.各分区负载不平衡，例如某些分区有大量请求或数据，而其他分区则少得多。也被称为热点。请参阅第205页上的“工作负载偏斜和减轻热点”和第407页上的“处理偏斜”。")]),a._v(" "),r("p",[a._v("2.时间线异常导致事件以不期望的顺序出现。 请参阅第237页上的“快照隔离和可重复读取”中的关于读取偏斜的讨论，第246页上的“写入偏斜和模糊”中的写入偏斜以及第291页上的“订购事件的时间戳”中的时钟偏斜。")]),a._v(" "),r("h3",{attrs:{id:"脑裂（split-brain）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#脑裂（split-brain）"}},[a._v("#")]),a._v(" 脑裂（split brain）")]),a._v(" "),r("p",[a._v("两个节点同时认为自己是领导者的情况，这种情况可能违反系统担保。 请参阅第156页的“处理节点中断”和第300页的“真相由多数定义”。")]),a._v(" "),r("h3",{attrs:{id:"存储过程（stored-procedure）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#存储过程（stored-procedure）"}},[a._v("#")]),a._v(" 存储过程（stored procedure）")]),a._v(" "),r("p",[a._v("一种对事务逻辑进行编码的方式，它可以完全在数据库服务器上执行，事务执行期间无需与客户端通信。 请参阅第252页的“实际串行执行”。")]),a._v(" "),r("h3",{attrs:{id:"流处理（stream-process）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#流处理（stream-process）"}},[a._v("#")]),a._v(" 流处理（stream process）")]),a._v(" "),r("p",[a._v("持续运行的计算。可以持续接收事件流作为输入，并得出一些输出。 见第11章。")]),a._v(" "),r("h3",{attrs:{id:"同步（synchronous）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#同步（synchronous）"}},[a._v("#")]),a._v(" 同步（synchronous）")]),a._v(" "),r("p",[a._v("异步的反义词。")]),a._v(" "),r("h3",{attrs:{id:"记录系统（system-of-record）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#记录系统（system-of-record）"}},[a._v("#")]),a._v(" 记录系统（system of record）")]),a._v(" "),r("p",[a._v("一个保存主要权威版本数据的系统，也被称为真相的来源。首先在这里写入数据变更，其他数据集可以从记录系统衍生。 参见第三部分的介绍。")]),a._v(" "),r("h3",{attrs:{id:"超时（timeout）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#超时（timeout）"}},[a._v("#")]),a._v(" 超时（timeout）")]),a._v(" "),r("p",[a._v("检测故障的最简单方法之一，即在一段时间内观察是否缺乏响应。 但是，不可能知道超时是由于远程节点的问题还是网络中的问题造成的。 请参阅第281页上的“超时和无限延迟”。")]),a._v(" "),r("h3",{attrs:{id:"全序（total-order）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#全序（total-order）"}},[a._v("#")]),a._v(" 全序（total order）")]),a._v(" "),r("p",[a._v("一种比较事物的方法（例如时间戳），可以让您总是说出两件事中哪一件更大，哪件更小。 总的来说，有些东西是无法比拟的（不能说哪个更大或更小）的顺序称为偏序。 请参见第341页的“因果顺序不是全序”。")]),a._v(" "),r("h3",{attrs:{id:"事务（transaction）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#事务（transaction）"}},[a._v("#")]),a._v(" 事务（transaction）")]),a._v(" "),r("p",[a._v("为了简化错误处理和并发问题，将几个读写操作分组到一个逻辑单元中。 见第7章。")]),a._v(" "),r("h3",{attrs:{id:"两阶段提交（2pc-two-phase-commit）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#两阶段提交（2pc-two-phase-commit）"}},[a._v("#")]),a._v(" 两阶段提交（2PC, two-phase commit）")]),a._v(" "),r("p",[a._v("一种确保多个数据库节点全部提交或全部中止事务的算法。 请参阅第354页上的“原子提交和两阶段提交（2PC）”。")]),a._v(" "),r("h3",{attrs:{id:"两阶段锁定（2pl-two-phase-locking）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#两阶段锁定（2pl-two-phase-locking）"}},[a._v("#")]),a._v(" 两阶段锁定（2PL, two-phase locking）")]),a._v(" "),r("p",[a._v("一种用于实现可序列化隔离的算法，该算法通过事务获取对其读取或写入的所有数据的锁，直到事务结束。 请参阅第257页上的“两阶段锁定（2PL）”。")]),a._v(" "),r("h3",{attrs:{id:"无边界（unbounded）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#无边界（unbounded）"}},[a._v("#")]),a._v(" 无边界（unbounded）")]),a._v(" "),r("p",[a._v("没有任何已知的上限或大小。 反义词是边界（bounded）。")])])}),[],!1,null,null,null);t.default=e.exports}}]);