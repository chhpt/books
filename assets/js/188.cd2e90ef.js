(window.webpackJsonp=window.webpackJsonp||[]).push([[188],{430:function(t,r,o){"use strict";o.r(r);var e=o(28),_=Object(e.a)({},(function(){var t=this,r=t.$createElement,o=t._self._c||r;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"_16-8-误用协程和通道"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_16-8-误用协程和通道"}},[t._v("#")]),t._v(" 16.8 误用协程和通道")]),t._v(" "),o("p",[t._v("由于教学需要和对协程的工作原理有一个直观的了解，在"),o("RouterLink",{attrs:{to:"/go-doc/14.0.html"}},[t._v("第14章")]),t._v("使用了一些简单的算法，举例说明了协程和通道的使用，例如生产者或者迭代器。在实际应用中，你不需要并发执行，或者你不需要关注协程和通道的开销，在大多数情况下，通过栈传递参数会更有效率。")],1),t._v(" "),o("p",[t._v("但是，如果你使用"),o("code",[t._v("break")]),t._v("、"),o("code",[t._v("return")]),t._v("或者"),o("code",[t._v("panic")]),t._v("去跳出一个循环，很有可能会导致内存溢出，因为协程正处理某些事情而被阻塞。在实际代码中，通常仅需写一个简单的过程式循环即可。"),o("strong",[t._v("当且仅当代码中并发执行非常重要，才使用协程和通道。")])]),t._v(" "),o("h2",{attrs:{id:"链接"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#链接"}},[t._v("#")]),t._v(" 链接")]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/go-doc/directory.html"}},[t._v("目录")])],1),t._v(" "),o("li",[t._v("上一节："),o("RouterLink",{attrs:{to:"/go-doc/16.7.html"}},[t._v("使用值类型时误用指针")])],1),t._v(" "),o("li",[t._v("下一节："),o("RouterLink",{attrs:{to:"/go-doc/16.9.html"}},[t._v("闭包和协程的使用")])],1)])])}),[],!1,null,null,null);r.default=_.exports}}]);