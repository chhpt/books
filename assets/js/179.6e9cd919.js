(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{421:function(t,o,_){"use strict";_.r(o);var v=_(28),r=Object(v.a)({},(function(){var t=this,o=t.$createElement,_=t._self._c||o;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"_16-常见的陷阱与错误"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_16-常见的陷阱与错误"}},[t._v("#")]),t._v(" 16 常见的陷阱与错误")]),t._v(" "),_("p",[t._v("在之前的内容中，有时候使用"),_("code",[t._v("!!...!!")]),t._v("标记警告go语言中的一些错误使用方式。当你在编程时候遇到的一个困难，可以确定本书特定的章节能找到类似的主题。为了方便起见，这里列出了一些常见陷进，以便于你能发现更多的解释和例子：")]),t._v(" "),_("ul",[_("li",[t._v("永远不要使用形如 "),_("code",[t._v("var p*a")]),t._v(" 声明变量，这会混淆指针声明和乘法运算（参考"),_("RouterLink",{attrs:{to:"/go-doc/04.9.html"}},[t._v("4.9小节")]),t._v("）")],1),t._v(" "),_("li",[t._v("永远不要在"),_("code",[t._v("for")]),t._v("循环自身中改变计数器变量（参考"),_("RouterLink",{attrs:{to:"/go-doc/05.4.html"}},[t._v("5.4小节")]),t._v("）")],1),t._v(" "),_("li",[t._v("永远不要在"),_("code",[t._v("for-range")]),t._v("循环中使用一个值去改变自身的值（参考"),_("RouterLink",{attrs:{to:"/go-doc/05.4.html"}},[t._v("5.4.4小节")]),t._v("）")],1),t._v(" "),_("li",[t._v("永远不要将"),_("code",[t._v("goto")]),t._v("和前置标签一起使用（参考"),_("RouterLink",{attrs:{to:"/go-doc/05.6.html"}},[t._v("5.6小节")]),t._v("）")],1),t._v(" "),_("li",[t._v("永远不要忘记在函数名（参考"),_("RouterLink",{attrs:{to:"/go-doc/06.0.html"}},[t._v("第6章")]),t._v("）后加括号()，尤其调用一个对象的方法或者使用匿名函数启动一个协程时")],1),t._v(" "),_("li",[t._v("永远不要使用"),_("code",[t._v("new()")]),t._v("一个map，一直使用make（参考"),_("RouterLink",{attrs:{to:"/go-doc/08.0.html"}},[t._v("第8章")]),t._v("）")],1),t._v(" "),_("li",[t._v("当为一个类型定义一个String()方法时，不要使用"),_("code",[t._v("fmt.Print")]),t._v("或者类似的代码（参考"),_("RouterLink",{attrs:{to:"/go-doc/10.7.html"}},[t._v("10.7小节")]),t._v("）")],1),t._v(" "),_("li",[t._v("永远不要忘记当终止缓存写入时，使用"),_("code",[t._v("Flush")]),t._v("函数（参考"),_("RouterLink",{attrs:{to:"/go-doc/12.2.html"}},[t._v("12.2.3小节")]),t._v("）")],1),t._v(" "),_("li",[t._v("永远不要忽略错误提示，忽略错误会导致程序崩溃（参考"),_("RouterLink",{attrs:{to:"/go-doc/13.1.html"}},[t._v("13.1小节")]),t._v("）")],1),t._v(" "),_("li",[t._v("不要使用全局变量或者共享内存，这会使并发执行的代码变得不安全（参考"),_("RouterLink",{attrs:{to:"/go-doc/14.1.html"}},[t._v("14.1小节")]),t._v("）")],1),t._v(" "),_("li",[_("code",[t._v("println")]),t._v("函数仅仅是用于调试的目的")])]),t._v(" "),_("p",[t._v("最佳实践：对比以下使用方式：")]),t._v(" "),_("ul",[_("li",[t._v("使用正确的方式初始化一个元素是切片的映射，例如"),_("code",[t._v("map[type]slice")]),t._v("（参考"),_("RouterLink",{attrs:{to:"/go-doc/08.1.html"}},[t._v("8.1.3小节")]),t._v("）")],1),t._v(" "),_("li",[t._v("一直使用逗号，ok或者checked形式作为类型断言（参考"),_("RouterLink",{attrs:{to:"/go-doc/11.3.html"}},[t._v("11.3小节")]),t._v("）")],1),t._v(" "),_("li",[t._v("使用一个工厂函数创建并初始化自己定义类型（参考"),_("RouterLink",{attrs:{to:"/go-doc/10.2.html"}},[t._v("10.2小节")]),t._v("-"),_("RouterLink",{attrs:{to:"/go-doc/18.4.html"}},[t._v("18.4小节")]),t._v("）")],1),t._v(" "),_("li",[t._v("仅当一个结构体的方法想改变结构体时，使用结构体指针作为方法的接受者，否则使用一个结构体值类型"),_("RouterLink",{attrs:{to:"/go-doc/10.6.html"}},[t._v("10.6.3小节")])],1)]),t._v(" "),_("p",[t._v("本章主要汇总了go语言使用过程中最常见的错误和注意事项。在之前的章节已经涉及到了完整的示例和解释，你应该做的不仅仅是阅读这段的标题。")]),t._v(" "),_("h2",{attrs:{id:"链接"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#链接"}},[t._v("#")]),t._v(" 链接")]),t._v(" "),_("ul",[_("li",[_("RouterLink",{attrs:{to:"/go-doc/directory.html"}},[t._v("目录")])],1),t._v(" "),_("li",[t._v("上一章："),_("RouterLink",{attrs:{to:"/go-doc/15.12.html"}},[t._v("使用SMTP（简单邮件传输协议）发送邮件")])],1),t._v(" "),_("li",[t._v("下一节："),_("RouterLink",{attrs:{to:"/go-doc/16.1.html"}},[t._v("误用短声明导致变量覆盖")])],1)])])}),[],!1,null,null,null);o.default=r.exports}}]);