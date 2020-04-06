(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{268:function(t,r,a){"use strict";a.r(r);var v=a(28),_=Object(v.a)({},(function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"第三部分：衍生数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第三部分：衍生数据"}},[t._v("#")]),t._v(" 第三部分：衍生数据")]),t._v(" "),a("p",[t._v("在本书的"),a("RouterLink",{attrs:{to:"/ddia/part-i.html"}},[t._v("第一部分")]),t._v("和"),a("RouterLink",{attrs:{to:"/ddia/part-ii.html"}},[t._v("第二部分")]),t._v("中，我们自底向上地把所有关于分布式数据库的主要考量都过了一遍。从数据在磁盘上的布局，一直到出现故障时分布式系统一致性的局限。但所有的讨论都假定了应用中只用了一种数据库。")],1),t._v(" "),a("p",[t._v("现实世界中的数据系统往往更为复杂。大型应用程序经常需要以多种方式访问和处理数据，没有一个数据库可以同时满足所有这些不同的需求。因此应用程序通常组合使用多种组件：数据存储，索引，缓存，分析系统，等等，并实现在这些组件中移动数据的机制。")]),t._v(" "),a("p",[t._v("本书的最后一部分，会研究将多个不同数据系统（可能有着不同数据模型，并针对不同的访问模式进行优化）集成为一个协调一致的应用架构时，会遇到的问题。软件供应商经常会忽略这一方面的生态建设，并声称他们的产品能够满足你的所有需求。在现实世界中，集成不同的系统是实际应用中最重要的事情之一。")]),t._v(" "),a("h2",{attrs:{id:"记录和衍生数据系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#记录和衍生数据系统"}},[t._v("#")]),t._v(" 记录和衍生数据系统")]),t._v(" "),a("p",[t._v("从高层次上看，存储和处理数据的系统可以分为两大类：")]),t._v(" "),a("h4",{attrs:{id:"记录系统（system-of-record）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#记录系统（system-of-record）"}},[t._v("#")]),t._v(" 记录系统（System of record）")]),t._v(" "),a("p",[a("strong",[t._v("记录系统")]),t._v("，也被称为"),a("strong",[t._v("真相源（source of truth）")]),t._v("，持有数据的权威版本。当新的数据进入时（例如，用户输入）首先会记录在这里。每个事实正正好好表示一次（表示通常是"),a("strong",[t._v("标准化的（normalized）")]),t._v("）。如果其他系统和"),a("strong",[t._v("记录系统")]),t._v("之间存在任何差异，那么记录系统中的值是正确的（根据定义）。")]),t._v(" "),a("h4",{attrs:{id:"衍生数据系统（derived-data-systems）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#衍生数据系统（derived-data-systems）"}},[t._v("#")]),t._v(" 衍生数据系统（Derived data systems）")]),t._v(" "),a("p",[a("strong",[t._v("衍生系统")]),t._v("中的数据，通常是另一个系统中的现有数据以某种方式进行转换或处理的结果。如果丢失衍生数据，可以从原始来源重新创建。典型的例子是"),a("strong",[t._v("缓存（cache）")]),t._v("：如果数据在缓存中，就可以由缓存提供服务；如果缓存不包含所需数据，则降级由底层数据库提供。非规范化的值，索引和物化视图亦属此类。在推荐系统中，预测汇总数据通常衍生自用户日志。")]),t._v(" "),a("p",[t._v("从技术上讲，衍生数据是"),a("strong",[t._v("冗余的（redundant）")]),t._v("，因为它重复了已有的信息。但是衍生数据对于获得良好的只读查询性能通常是至关重要的。它通常是非规范化的。可以从单个源头衍生出多个不同的数据集，使你能从不同的“视角”洞察数据。")]),t._v(" "),a("p",[t._v("并不是所有的系统都在其架构中明确区分"),a("strong",[t._v("记录系统")]),t._v("和"),a("strong",[t._v("衍生数据系统")]),t._v("，但是这是一种有用的区分方式，因为它明确了系统中的数据流：系统的哪一部分具有哪些输入和哪些输出，以及它们如何相互依赖。")]),t._v(" "),a("p",[t._v("大多数数据库，存储引擎和查询语言，本质上既不是记录系统也不是衍生系统。数据库只是一个工具：如何使用它取决于你自己。"),a("strong",[t._v("记录系统和衍生数据系统之间的区别不在于工具，而在于应用程序中的使用方式。")])]),t._v(" "),a("p",[t._v("通过梳理数据的衍生关系，可以清楚地理解一个令人困惑的系统架构。这将贯穿本书的这一部分。")]),t._v(" "),a("h2",{attrs:{id:"章节概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#章节概述"}},[t._v("#")]),t._v(" 章节概述")]),t._v(" "),a("p",[t._v("我们将从"),a("RouterLink",{attrs:{to:"/ddia/ch10.html"}},[t._v("第十章")]),t._v("开始，研究例如MapReduce这样**面向批处理（batch-oriented）"),a("strong",[t._v("的数据流系统。对于建设大规模数据系统，我们将看到，它们提供了优秀的工具和思想。"),a("RouterLink",{attrs:{to:"/ddia/ch11.html"}},[t._v("第十一章")]),t._v("将把这些思想应用到")],1),t._v("流式数据（data streams）**中，使我们能用更低的延迟完成同样的任务。"),a("RouterLink",{attrs:{to:"/ddia/ch12.html"}},[t._v("第十二章")]),t._v("将对本书进行总结，探讨如何使用这些工具来构建可靠，可扩展和可维护的应用。")],1),t._v(" "),a("h2",{attrs:{id:"索引"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#索引"}},[t._v("#")]),t._v(" 索引")]),t._v(" "),a("ol",{attrs:{start:"10"}},[a("li",[a("RouterLink",{attrs:{to:"/ddia/ch10.html"}},[t._v("批处理")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ddia/ch11.html"}},[t._v("流处理")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ddia/ch12.html"}},[t._v("数据系统的未来")])],1)]),t._v(" "),a("hr"),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("上一章")]),t._v(" "),a("th",[t._v("目录")]),t._v(" "),a("th",[t._v("下一章")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("RouterLink",{attrs:{to:"/ddia/ch9.html"}},[t._v("第九章：一致性与共识")])],1),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/ddia/"}},[t._v("设计数据密集型应用")])],1),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/ddia/ch10.html"}},[t._v("第十章：批处理")])],1)])])])])}),[],!1,null,null,null);r.default=_.exports}}]);