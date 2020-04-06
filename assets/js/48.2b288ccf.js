(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{292:function(t,s,a){"use strict";a.r(s);var n=a(28),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_4-3-常量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-常量"}},[t._v("#")]),t._v(" 4.3 常量")]),t._v(" "),a("p",[t._v("常量使用关键字 "),a("code",[t._v("const")]),t._v(" 定义，用于存储不会改变的数据。")]),t._v(" "),a("p",[t._v("存储在常量中的数据类型只可以是布尔型、数字型（整数型、浮点型和复数）和字符串型。")]),t._v(" "),a("p",[t._v("常量的定义格式："),a("code",[t._v("const identifier [type] = value")]),t._v("，例如：")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Pi "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.14159")]),t._v("\n")])])]),a("p",[t._v("在 Go 语言中，你可以省略类型说明符 "),a("code",[t._v("[type]")]),t._v("，因为编译器可以根据变量的值来推断其类型。")]),t._v(" "),a("ul",[a("li",[t._v("显式类型定义： "),a("code",[t._v('const b string = "abc"')])]),t._v(" "),a("li",[t._v("隐式类型定义： "),a("code",[t._v('const b = "abc"')])])]),t._v(" "),a("p",[t._v("一个没有指定类型的常量被使用时，会根据其使用环境而推断出它所需要具备的类型。换句话说，未定义类型的常量会在必要时刻根据上下文来获得相关类型。")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" n "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 无类型的数字型常量 “5” 它的类型在这里变成了 int")]),t._v("\n")])])]),a("p",[t._v("常量的值必须是能够在编译时就能够确定的；你可以在其赋值表达式中涉及计算过程，但是所有用于计算的值必须在编译期间就能获得。")]),t._v(" "),a("ul",[a("li",[t._v("正确的做法："),a("code",[t._v("const c1 = 2/3")])]),t._v(" "),a("li",[t._v("错误的做法："),a("code",[t._v("const c2 = getNumber()")]),t._v(" // 引发构建错误: "),a("code",[t._v("getNumber() used as value")])])]),t._v(" "),a("p",[a("strong",[t._v("因为在编译期间自定义函数均属于未知，因此无法用于常量的赋值，但内置函数可以使用，如：len()。")])]),t._v(" "),a("p",[t._v("数字型的常量是没有大小和符号的，并且可以使用任何精度而不会导致溢出：")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Ln2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.693147180559945309417232121458")]),t._v("\\\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("176568075500134360255254120680009")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Log2E "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Ln2 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// this is a precise reciprocal")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Billion "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1e9")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// float constant")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" hardEight "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("97")]),t._v("\n")])])]),a("p",[t._v("根据上面的例子我们可以看到，反斜杠 "),a("code",[t._v("\\")]),t._v(" 可以在常量表达式中作为多行的连接符使用。")]),t._v(" "),a("p",[t._v("与各种类型的数字型变量相比，你无需担心常量之间的类型转换问题，因为它们都是非常理想的数字。")]),t._v(" "),a("p",[t._v("不过需要注意的是，当常量赋值给一个精度过小的数字型变量时，可能会因为无法正确表达常量所代表的数值而导致溢出，这会在编译期间就引发错误。另外，常量也允许使用并行赋值的形式：")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" beef"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" two"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eat"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"veg"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Monday"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Tuesday"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Wednesday"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Thursday"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Friday"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Saturday "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\tMonday"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Tuesday"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Wednesday "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n\tThursday"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Friday"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Saturday "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("常量还可以用作枚举：")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\tUnknown "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n\tFemale "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\tMale "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("现在，数字 0、1 和 2 分别代表未知性别、女性和男性。这些枚举值可以用于测试某个变量或常量的实际值，比如使用 switch/case 结构 (第 5.3 节).")]),t._v(" "),a("p",[t._v("在这个例子中，"),a("code",[t._v("iota")]),t._v(" 可以被用作枚举值：")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\ta "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("iota")]),t._v("\n\tb "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("iota")]),t._v("\n\tc "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("iota")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("第一个 "),a("code",[t._v("iota")]),t._v(" 等于 0，每当 "),a("code",[t._v("iota")]),t._v(" 在新的一行被使用时，它的值都会自动加 1；所以 "),a("code",[t._v("a=0, b=1, c=2")]),t._v(" 可以简写为如下形式：")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\ta "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("iota")]),t._v("\n\tb\n\tc\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("（ "),a("strong",[t._v("译者注：关于 iota 的使用涉及到非常复杂多样的情况，这里作者解释的并不清晰，因为很难对 iota 的用法进行直观的文字描述。如希望进一步了解，请观看视频教程 "),a("a",{attrs:{href:"https://github.com/Unknwon/go-fundamental-programming",target:"_blank",rel:"noopener noreferrer"}},[t._v("《Go编程基础》"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://github.com/Unknwon/go-fundamental-programming/blob/master/lectures/lecture4.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("第四课：常量与运算符"),a("OutboundLink")],1)]),t._v(" ）")]),t._v(" "),a("p",[a("code",[t._v("iota")]),t._v(" 也可以用在表达式中，如："),a("code",[t._v("iota + 50")]),t._v("。在每遇到一个新的常量块或单个常量声明时， "),a("code",[t._v("iota")]),t._v(" 都会重置为 0（ "),a("strong",[t._v("简单地讲，每遇到一次 const 关键字，iota 就重置为 0")]),t._v(" ）。")]),t._v(" "),a("p",[t._v("当然，常量之所以为常量就是恒定不变的量，因此我们无法在程序运行过程中修改它的值；如果你在代码中试图修改常量的值则会引发编译错误。")]),t._v(" "),a("p",[t._v("引用 "),a("code",[t._v("time")]),t._v(" 包中的一段代码作为示例：一周中每天的名称。")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\tSunday "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("iota")]),t._v("\n\tMonday\n\tTuesday\n\tWednesday\n\tThursday\n\tFriday\n\tSaturday\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("你也可以使用某个类型作为枚举常量的类型：")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" Color "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\tRED Color "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("iota")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0")]),t._v("\n\tORANGE "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1")]),t._v("\n\tYELLOW "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2")]),t._v("\n\tGREEN "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ..")]),t._v("\n\tBLUE\n\tINDIGO\n\tVIOLET "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 6")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#链接"}},[t._v("#")]),t._v(" 链接")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/go-doc/directory.html"}},[t._v("目录")])],1),t._v(" "),a("li",[t._v("上一节："),a("RouterLink",{attrs:{to:"/go-doc/04.2.html"}},[t._v("Go 程序的基本结构和要素")])],1),t._v(" "),a("li",[t._v("下一节："),a("RouterLink",{attrs:{to:"/go-doc/04.4.html"}},[t._v("变量")])],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);