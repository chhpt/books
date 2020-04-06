(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{350:function(t,s,a){"use strict";a.r(s);var n=a(28),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_10-5-匿名字段和内嵌结构体"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-5-匿名字段和内嵌结构体"}},[t._v("#")]),t._v(" 10.5 匿名字段和内嵌结构体")]),t._v(" "),a("h2",{attrs:{id:"_10-5-1-定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-5-1-定义"}},[t._v("#")]),t._v(" 10.5.1 定义")]),t._v(" "),a("p",[t._v("结构体可以包含一个或多个 "),a("strong",[t._v("匿名（或内嵌）字段")]),t._v("，即这些字段没有显式的名字，只有字段的类型是必须的，此时类型就是字段的名字。匿名字段本身可以是一个结构体类型，即 "),a("strong",[t._v("结构体可以包含内嵌结构体")]),t._v("。")]),t._v(" "),a("p",[t._v("可以粗略地将这个和面向对象语言中的继承概念相比较，随后将会看到它被用来模拟类似继承的行为。Go 语言中的继承是通过内嵌或组合来实现的，所以可以说，在 Go 语言中，相比较于继承，组合更受青睐。")]),t._v(" "),a("p",[t._v("考虑如下的程序：")]),t._v(" "),a("p",[t._v("示例 10.8 "),a("a",{attrs:{href:"examples/chapter_10/structs_anonymous_fields.go"}},[t._v("structs_anonymous_fields.go")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fmt"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" innerS "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tin1 "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v("\n\tin2 "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" outerS "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tb    "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v("\n\tc    "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("float32")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// anonymous field")]),t._v("\n\tinnerS "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//anonymous field")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\touter "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("new")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("outerS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\touter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v("\n\touter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7.5")]),t._v("\n\touter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),t._v("\n\touter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("in1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n\touter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("in2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n\n\tfmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"outer.b is: %d\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" outer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tfmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"outer.c is: %f\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" outer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tfmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"outer.int is: %d\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" outer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tfmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"outer.in1 is: %d\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" outer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("in1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tfmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"outer.in2 is: %d\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" outer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("in2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用结构体字面量")]),t._v("\n\touter2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" outerS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7.5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" innerS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\tfmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"outer2 is:"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" outer2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("输出：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("outer.b is: 6\nouter.c is: 7.500000\nouter.int is: 60\nouter.in1 is: 5\nouter.in2 is: 10\nouter2 is:{6 7.5 60 {5 10}}\n")])])]),a("p",[t._v("通过类型 "),a("code",[t._v("outer.int")]),t._v(" 的名字来获取存储在匿名字段中的数据，于是可以得出一个结论：在一个结构体中对于每一种数据类型只能有一个匿名字段。")]),t._v(" "),a("h2",{attrs:{id:"_10-5-2-内嵌结构体"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-5-2-内嵌结构体"}},[t._v("#")]),t._v(" 10.5.2 内嵌结构体")]),t._v(" "),a("p",[t._v("同样地结构体也是一种数据类型，所以它也可以作为一个匿名字段来使用，如同上面例子中那样。外层结构体通过 "),a("code",[t._v("outer.in1")]),t._v(" 直接进入内层结构体的字段，内嵌结构体甚至可以来自其他包。内层结构体被简单的插入或者内嵌进外层结构体。这个简单的“继承”机制提供了一种方式，使得可以从另外一个或一些类型继承部分或全部实现。")]),t._v(" "),a("p",[t._v("另外一个例子：")]),t._v(" "),a("p",[t._v("示例 10.9 "),a("a",{attrs:{href:"examples/chapter_10/embedd_struct.go"}},[t._v("embedd_struct.go")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fmt"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" A "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tax"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ay "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" B "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tA\n\tbx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" by "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("float32")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tb "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" B"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("A"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\tfmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ax"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ay"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("by"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tfmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("A"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("输出：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("1 2 3 4\n{1 2}\n")])])]),a("p",[a("strong",[t._v("练习 10.5")]),t._v(" anonymous_struct.go：")]),t._v(" "),a("p",[t._v("创建一个结构体，它有一个具名的 float 字段，2 个匿名字段，类型分别是 int 和 string。通过结构体字面量新建一个结构体实例并打印它的内容。")]),t._v(" "),a("h2",{attrs:{id:"_10-5-3-命名冲突"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-5-3-命名冲突"}},[t._v("#")]),t._v(" 10.5.3 命名冲突")]),t._v(" "),a("p",[t._v("当两个字段拥有相同的名字（可能是继承来的名字）时该怎么办呢？")]),t._v(" "),a("ol",[a("li",[t._v("外层名字会覆盖内层名字（但是两者的内存空间都保留），这提供了一种重载字段或方法的方式；")]),t._v(" "),a("li",[t._v("如果相同的名字在同一级别出现了两次，如果这个名字被程序使用了，将会引发一个错误（不使用没关系）。没有办法来解决这种问题引起的二义性，必须由程序员自己修正。")])]),t._v(" "),a("p",[t._v("例子：")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" A "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("a "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" B "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" C "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("A"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" B"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" c C\n")])])]),a("p",[t._v("规则 2：使用 "),a("code",[t._v("c.a")]),t._v(" 是错误的，到底是 "),a("code",[t._v("c.A.a")]),t._v(" 还是 "),a("code",[t._v("c.B.a")]),t._v(" 呢？会导致编译器错误："),a("strong",[t._v("ambiguous DOT reference c.a disambiguate with either c.A.a or c.B.a")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" D "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("B"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("float32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" d D\n")])])]),a("p",[t._v("规则1：使用 "),a("code",[t._v("d.b")]),t._v(" 是没问题的：它是 float32，而不是 "),a("code",[t._v("B")]),t._v(" 的 "),a("code",[t._v("b")]),t._v("。如果想要内层的 "),a("code",[t._v("b")]),t._v(" 可以通过 "),a("code",[t._v("d.B.b")]),t._v(" 得到。")]),t._v(" "),a("h2",{attrs:{id:"链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#链接"}},[t._v("#")]),t._v(" 链接")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/go-doc/directory.html"}},[t._v("目录")])],1),t._v(" "),a("li",[t._v("上一节："),a("RouterLink",{attrs:{to:"/go-doc/10.4.html"}},[t._v("带标签的结构体")])],1),t._v(" "),a("li",[t._v("下一节："),a("RouterLink",{attrs:{to:"/go-doc/10.6.html"}},[t._v("方法")])],1)])])}),[],!1,null,null,null);s.default=r.exports}}]);