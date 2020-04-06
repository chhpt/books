(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{306:function(t,n,a){"use strict";a.r(n);var s=a(28),e=Object(s.a)({},(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_6-1-介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-介绍"}},[t._v("#")]),t._v(" 6.1 介绍")]),t._v(" "),a("p",[t._v("每一个程序都包含很多的函数：函数是基本的代码块。")]),t._v(" "),a("p",[t._v("Go是编译型语言，所以函数编写的顺序是无关紧要的；鉴于可读性的需求，最好把 "),a("code",[t._v("main()")]),t._v(" 函数写在文件的前面，其他函数按照一定逻辑顺序进行编写（例如函数被调用的顺序）。")]),t._v(" "),a("p",[t._v("编写多个函数的主要目的是将一个需要很多行代码的复杂问题分解为一系列简单的任务（那就是函数）来解决。而且，同一个任务（函数）可以被调用多次，有助于代码重用。")]),t._v(" "),a("p",[t._v("（事实上，好的程序是非常注意DRY原则的，即不要重复你自己（Don't Repeat Yourself），意思是执行特定任务的代码只能在程序里面出现一次。）")]),t._v(" "),a("p",[t._v("当函数执行到代码块最后一行（"),a("code",[t._v("}")]),t._v(" 之前）或者 "),a("code",[t._v("return")]),t._v(" 语句的时候会退出，其中 "),a("code",[t._v("return")]),t._v(" 语句可以带有零个或多个参数；这些参数将作为返回值（参考 "),a("RouterLink",{attrs:{to:"/go-doc/06.2.html"}},[t._v("第 6.2 节")]),t._v("）供调用者使用。简单的 "),a("code",[t._v("return")]),t._v(" 语句也可以用来结束 for 死循环，或者结束一个协程（goroutine）。")],1),t._v(" "),a("p",[t._v("Go 里面有三种类型的函数：")]),t._v(" "),a("ul",[a("li",[t._v("普通的带有名字的函数")]),t._v(" "),a("li",[t._v("匿名函数或者lambda函数（参考 "),a("RouterLink",{attrs:{to:"/go-doc/06.8.html"}},[t._v("第 6.8 节")]),t._v("）")],1),t._v(" "),a("li",[t._v("方法（Methods，参考 "),a("RouterLink",{attrs:{to:"/go-doc/10.6.html"}},[t._v("第 10.6 节")]),t._v("）")],1)]),t._v(" "),a("p",[t._v("除了main()、init()函数外，其它所有类型的函数都可以有参数与返回值。函数参数、返回值以及它们的类型被统称为函数签名。")]),t._v(" "),a("p",[t._v("作为提醒，提前介绍一个语法：")]),t._v(" "),a("p",[t._v("这样是不正确的 Go 代码：")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("g")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("它必须是这样的：")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("g")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("函数被调用的基本格式如下：")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[t._v("pack1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arg1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" arg2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" …"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" argn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[a("code",[t._v("Function")]),t._v(" 是 "),a("code",[t._v("pack1")]),t._v(" 包里面的一个函数，括号里的是被调用函数的实参（argument）：这些值被传递给被调用函数的"),a("em",[t._v("形参")]),t._v("（parameter，参考 "),a("RouterLink",{attrs:{to:"/go-doc/06.2.html"}},[t._v("第 6.2 节")]),t._v("）。函数被调用的时候，这些实参将被复制（简单而言）然后传递给被调用函数。函数一般是在其他函数里面被调用的，这个其他函数被称为调用函数（calling function）。函数能多次调用其他函数，这些被调用函数按顺序（简单而言）执行，理论上，函数调用其他函数的次数是无穷的（直到函数调用栈被耗尽）。")],1),t._v(" "),a("p",[t._v("一个简单的函数调用其他函数的例子：")]),t._v(" "),a("p",[t._v("示例 6.1 "),a("a",{attrs:{href:"examples/chapter_6/greeting.go"}},[t._v("greeting.go")])]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"In main before calling greeting"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("greeting")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"In main after calling greeting"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("greeting")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"In greeting: Hi!!!!!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("代码输出：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("In main before calling greeting\nIn greeting: Hi!!!!!\nIn main after calling greeting\n")])])]),a("p",[t._v("函数可以将其他函数调用作为它的参数，只要这个被调用函数的返回值个数、返回值类型和返回值的顺序与调用函数所需求的实参是一致的，例如：")]),t._v(" "),a("p",[t._v("假设 f1 需要 3 个参数 "),a("code",[t._v("f1(a, b, c int)")]),t._v("，同时 f2 返回 3 个参数 "),a("code",[t._v("f2(a, b int) (int, int, int)")]),t._v("，就可以这样调用 f1："),a("code",[t._v("f1(f2(a, b))")]),t._v("。")]),t._v(" "),a("p",[t._v("函数重载（function overloading）指的是可以编写多个同名函数，只要它们拥有不同的形参与/或者不同的返回值，在 Go 里面函数重载是不被允许的。这将导致一个编译错误：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("funcName redeclared in this book, previous declaration at lineno\n")])])]),a("p",[t._v("Go 语言不支持这项特性的主要原因是函数重载需要进行多余的类型匹配影响性能；没有重载意味着只是一个简单的函数调度。所以你需要给不同的函数使用不同的名字，我们通常会根据函数的特征对函数进行命名（参考 "),a("RouterLink",{attrs:{to:"/go-doc/11.12.html"}},[t._v("第 11.12.5 节")]),t._v("）。")],1),t._v(" "),a("p",[t._v("如果需要申明一个在外部定义的函数，你只需要给出函数名与函数签名，不需要给出函数体：")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("flushICache")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("begin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" end "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uintptr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// implemented externally")]),t._v("\n")])])]),a("p",[a("strong",[t._v("函数也可以以申明的方式被使用，作为一个函数类型")]),t._v("，就像：")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" binOp "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v("\n")])])]),a("p",[t._v("在这里，不需要函数体 "),a("code",[t._v("{}")]),t._v("。")]),t._v(" "),a("p",[t._v("函数是一等值（first-class value）：它们可以赋值给变量，就像 "),a("code",[t._v("add := binOp")]),t._v(" 一样。")]),t._v(" "),a("p",[t._v("这个变量知道自己指向的函数的签名，所以给它赋一个具有不同签名的函数值是不可能的。")]),t._v(" "),a("p",[t._v("函数值（functions value）之间可以相互比较：如果它们引用的是相同的函数或者都是 nil 的话，则认为它们是相同的函数。函数不能在其它函数里面声明（不能嵌套），不过我们可以通过使用匿名函数（参考 "),a("RouterLink",{attrs:{to:"/go-doc/06.8.html"}},[t._v("第 6.8 节")]),t._v("）来破除这个限制。")],1),t._v(" "),a("p",[t._v("目前 Go 没有泛型（generic）的概念，也就是说它不支持那种支持多种类型的函数。不过在大部分情况下可以通过接口（interface），特别是空接口与类型选择（type switch，参考 "),a("RouterLink",{attrs:{to:"/go-doc/11.12.html"}},[t._v("第 11.12 节")]),t._v("）与/或者通过使用反射（reflection，参考 "),a("RouterLink",{attrs:{to:"/go-doc/06.8.html"}},[t._v("第 6.8 节")]),t._v("）来实现相似的功能。使用这些技术将导致代码更为复杂、性能更为低下，所以在非常注意性能的的场合，最好是为每一个类型单独创建一个函数，而且代码可读性更强。")],1),t._v(" "),a("h2",{attrs:{id:"链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#链接"}},[t._v("#")]),t._v(" 链接")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/go-doc/directory.html"}},[t._v("目录")])],1),t._v(" "),a("li",[t._v("上一节："),a("RouterLink",{attrs:{to:"/go-doc/06.0.html"}},[t._v("函数（function）")])],1),t._v(" "),a("li",[t._v("下一节："),a("RouterLink",{attrs:{to:"/go-doc/06.2.html"}},[t._v("函数参数与返回值")])],1)])])}),[],!1,null,null,null);n.default=e.exports}}]);