(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{408:function(t,s,n){"use strict";n.r(s);var a=n(28),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"_14-8-惰性生成器的实现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_14-8-惰性生成器的实现"}},[t._v("#")]),t._v(" 14.8 惰性生成器的实现")]),t._v(" "),n("p",[t._v("生成器是指当被调用时返回一个序列中下一个值的函数，例如：")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[t._v("    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("generateInteger")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("generateInteger")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("generateInteger")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])])]),n("p",[t._v("生成器每次返回的是序列中下一个值而非整个序列；这种特性也称之为惰性求值：只在你需要时进行求值，同时保留相关变量资源（内存和cpu）：这是一项在需要时对表达式进行求值的技术。例如，生成一个无限数量的偶数序列：要产生这样一个序列并且在一个一个的使用可能会很困难，而且内存会溢出！但是一个含有通道和go协程的函数能轻易实现这个需求。")]),t._v(" "),n("p",[t._v("在14.12的例子中，我们实现了一个使用 int 型通道来实现的生成器。通道被命名为"),n("code",[t._v("yield")]),t._v("和"),n("code",[t._v("resume")]),t._v("，这些词经常在协程代码中使用。")]),t._v(" "),n("p",[t._v("示例 14.12 "),n("a",{attrs:{href:"examples/chapter_14/lazy_evaluation.go"}},[t._v("lazy_evaluation.go")]),t._v("：")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fmt"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" resume "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("chan")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("integers")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("chan")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    yield "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("chan")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    count "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("go")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            yield "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" count\n            count"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" yield\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("generateInteger")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v("resume\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    resume "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("integers")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    fmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("generateInteger")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> 0")]),t._v("\n    fmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("generateInteger")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> 1")]),t._v("\n    fmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("generateInteger")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> 2    ")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("有一个细微的区别是从通道读取的值可能会是稍早前产生的，并不是在程序被调用时生成的。如果确实需要这样的行为，就得实现一个请求响应机制。当生成器生成数据的过程是计算密集型且各个结果的顺序并不重要时，那么就可以将生成器放入到go协程实现并行化。但是得小心，使用大量的go协程的开销可能会超过带来的性能增益。")]),t._v(" "),n("p",[t._v("这些原则可以概括为：通过巧妙地使用空接口、闭包和高阶函数，我们能实现一个通用的惰性生产器的工厂函数"),n("code",[t._v("BuildLazyEvaluator")]),t._v("（这个应该放在一个工具包中实现）。工厂函数需要一个函数和一个初始状态作为输入参数，返回一个无参、返回值是生成序列的函数。传入的函数需要计算出下一个返回值以及下一个状态参数。在工厂函数中，创建一个通道和无限循环的go协程。返回值被放到了该通道中，返回函数稍后被调用时从该通道中取得该返回值。每当取得一个值时，下一个值即被计算。在下面的例子中，定义了一个"),n("code",[t._v("evenFunc")]),t._v("函数，其是一个惰性生成函数：在main函数中，我们创建了前10个偶数，每个都是通过调用"),n("code",[t._v("even()")]),t._v("函数取得下一个值的。为此，我们需要在"),n("code",[t._v("BuildLazyIntEvaluator")]),t._v("函数中具体化我们的生成函数，然后我们能够基于此做出定义。")]),t._v(" "),n("p",[t._v("示例 14.13 "),n("a",{attrs:{href:"examples/chapter_14/general_lazy_evalution1.go"}},[t._v("general_lazy_evalution1.go")]),t._v("：")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fmt"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" Any "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" EvalFunc "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Any"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Any"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Any"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    evenFunc "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("state Any"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Any"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Any"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        os "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" state"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        ns "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" os "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" os"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ns\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    even "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("BuildLazyIntEvaluator")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("evenFunc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        fmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Printf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%vth even: %v\\n"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("even")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("BuildLazyEvaluator")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("evalFunc EvalFunc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" initState Any"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" Any "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    retValChan "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("chan")]),t._v(" Any"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    loopFunc "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" actState Any "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" initState\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" retVal Any\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            retVal"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" actState "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("evalFunc")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("actState"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            retValChan "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" retVal\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    retFunc "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" Any "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" retValChan\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("go")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("loopFunc")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" retFunc\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("BuildLazyIntEvaluator")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("evalFunc EvalFunc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" initState Any"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    ef "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("BuildLazyEvaluator")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("evalFunc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" initState"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ef")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("输出：")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("th even"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("th even"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("th even"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("th even"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("th even"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("th even"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v("th even"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v("th even"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("th even"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),t._v("th even"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),t._v("\n")])])]),n("p",[t._v("练习14.12："),n("a",{attrs:{href:"exercises/chapter_14/general_lazy_evalution2.go"}},[t._v("general_lazy_evaluation2.go")]),t._v("\n通过使用14.12中工厂函数生成前10个斐波那契数")]),t._v(" "),n("p",[t._v("提示：因为斐波那契数增长很迅速，使用"),n("code",[t._v("uint64")]),t._v("类型。\n注：这种计算通常被定义为递归函数，但是在没有尾递归的语言中，例如go语言，这可能会导致栈溢出，但随着go语言中堆栈可扩展的优化，这个问题就不那么严重。这里的诀窍是使用了惰性求值。gccgo编译器在某些情况下会实现尾递归。")]),t._v(" "),n("h2",{attrs:{id:"链接"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#链接"}},[t._v("#")]),t._v(" 链接")]),t._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/go-doc/directory.html"}},[t._v("目录")])],1),t._v(" "),n("li",[t._v("上一节："),n("RouterLink",{attrs:{to:"/go-doc/14.7.html"}},[t._v("新旧模型对比：任务和worker")])],1),t._v(" "),n("li",[t._v("下一节："),n("RouterLink",{attrs:{to:"/go-doc/14.9.html"}},[t._v("实现 Futures 模式")])],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);