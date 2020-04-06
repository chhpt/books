(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{346:function(t,s,a){"use strict";a.r(s);var n=a(28),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_10-1-结构体定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-1-结构体定义"}},[t._v("#")]),t._v(" 10.1 结构体定义")]),t._v(" "),a("p",[t._v("结构体定义的一般方式如下：")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" identifier "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    field1 type1\n    field2 type2\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("code",[t._v("type T struct {a, b int}")]),t._v(" 也是合法的语法，它更适用于简单的结构体。")]),t._v(" "),a("p",[t._v("结构体里的字段都有 "),a("strong",[t._v("名字")]),t._v("，像 field1、field2 等，如果字段在代码中从来也不会被用到，那么可以命名它为 "),a("strong",[t._v("_")]),t._v("。")]),t._v(" "),a("p",[t._v("结构体的字段可以是任何类型，甚至是结构体本身（参考第 "),a("RouterLink",{attrs:{to:"/go-doc/10.5.html"}},[t._v("10.5")]),t._v(" 节），也可以是函数或者接口（参考第 11 章）。可以声明结构体类型的一个变量，然后像下面这样给它的字段赋值：")],1),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" s T\ns"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\ns"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("\n")])])]),a("p",[t._v("数组可以看作是一种结构体类型，不过它使用下标而不是具名的字段。")]),t._v(" "),a("p",[a("strong",[t._v("使用 new")])]),t._v(" "),a("p",[t._v("使用 "),a("strong",[t._v("new")]),t._v(" 函数给一个新的结构体变量分配内存，它返回指向已分配内存的指针："),a("code",[t._v("var t *T = new(T)")]),t._v("，如果需要可以把这条语句放在不同的行（比如定义是包范围的，但是分配却没有必要在开始就做）。")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" t "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("T\nt "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("new")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("T"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("写这条语句的惯用方法是："),a("code",[t._v("t := new(T)")]),t._v("，变量 "),a("code",[t._v("t")]),t._v(" 是一个指向 "),a("code",[t._v("T")]),t._v("的指针，此时结构体字段的值是它们所属类型的零值。")]),t._v(" "),a("p",[t._v("声明 "),a("code",[t._v("var t T")]),t._v(" 也会给 "),a("code",[t._v("t")]),t._v(" 分配内存，并零值化内存，但是这个时候 "),a("code",[t._v("t")]),t._v(" 是类型T。在这两种方式中，"),a("code",[t._v("t")]),t._v(" 通常被称做类型 T 的一个实例（instance）或对象（object）。")]),t._v(" "),a("p",[t._v("示例 10.1 "),a("a",{attrs:{href:"examples/chapter_10/structs_fields.go"}},[t._v("structs_fields.go")]),t._v(" 给出了一个非常简单的例子：")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fmt"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" struct1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    i1  "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v("\n    f1  "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("float32")]),t._v("\n    str "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    ms "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("new")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("struct1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    ms"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("i1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n    ms"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("f1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("15.5")]),t._v("\n    ms"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("str"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Chris"')]),t._v("\n\n    fmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"The int is: %d\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ms"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("i1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    fmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"The float is: %f\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ms"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("f1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    fmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"The string is: %s\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ms"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    fmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ms"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("输出：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("The int is: 10\nThe float is: 15.500000\nThe string is: Chris\n&{10 15.5 Chris}\n")])])]),a("p",[t._v("使用 "),a("code",[t._v("fmt.Println")]),t._v(" 打印一个结构体的默认输出可以很好的显示它的内容，类似使用 "),a("strong",[t._v("%v")]),t._v(" 选项。")]),t._v(" "),a("p",[t._v("就像在面向对象语言所作的那样，可以使用点号符给字段赋值："),a("code",[t._v("structname.fieldname = value")]),t._v("。")]),t._v(" "),a("p",[t._v("同样的，使用点号符可以获取结构体字段的值："),a("code",[t._v("structname.fieldname")]),t._v("。")]),t._v(" "),a("p",[t._v("在 Go 语言中这叫 "),a("strong",[t._v("选择器（selector）")]),t._v("。无论变量是一个结构体类型还是一个结构体类型指针，都使用同样的 "),a("strong",[t._v("选择器符（selector-notation）")]),t._v(" 来引用结构体的字段：")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" myStruct "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" v myStruct    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// v是结构体类型变量")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" p "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("myStruct   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// p是指向一个结构体类型变量的指针")]),t._v("\nv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("i\np"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("i\n")])])]),a("p",[t._v("初始化一个结构体实例（一个结构体字面量：struct-literal）的更简短和惯用的方式如下：")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[t._v("    ms "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("struct1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("15.5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Chris"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 此时ms的类型是 *struct1")]),t._v("\n")])])]),a("p",[t._v("或者：")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" ms struct1\n    ms "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" struct1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("15.5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Chris"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("混合字面量语法（composite literal syntax）"),a("code",[t._v("&struct1{a, b, c}")]),t._v(" 是一种简写，底层仍然会调用 "),a("code",[t._v("new ()")]),t._v("，这里值的顺序必须按照字段顺序来写。在下面的例子中能看到可以通过在值的前面放上字段名来初始化字段的方式。表达式 "),a("code",[t._v("new(Type)")]),t._v(" 和 "),a("code",[t._v("&Type{}")]),t._v(" 是等价的。")]),t._v(" "),a("p",[t._v("时间间隔（开始和结束时间以秒为单位）是使用结构体的一个典型例子：")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" Interval "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    start "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v("\n    end   "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("初始化方式：")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[t._v("intr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" Interval"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("A"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nintr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" Interval"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("end"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("B"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nintr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" Interval"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("end"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("           "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("C"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("在（A）中，值必须以字段在结构体定义时的顺序给出，"),a("strong",[t._v("&")]),t._v(" 不是必须的。（B）显示了另一种方式，字段名加一个冒号放在值的前面，这种情况下值的顺序不必一致，并且某些字段还可以被忽略掉，就像（C）中那样。")]),t._v(" "),a("p",[t._v("结构体类型和字段的命名遵循可见性规则（第 "),a("RouterLink",{attrs:{to:"/go-doc/04.2.html"}},[t._v("4.2")]),t._v(" 节），一个导出的结构体类型中有些字段是导出的，另一些不是，这是可能的。")],1),t._v(" "),a("p",[t._v("下图说明了结构体类型实例和一个指向它的指针的内存布局：")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" Point "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("使用 new 初始化：")]),t._v(" "),a("p",[a("img",{attrs:{src:"images/10.1_fig10.1-1.jpg?raw=true",alt:""}})]),t._v(" "),a("p",[t._v("作为结构体字面量初始化：")]),t._v(" "),a("p",[a("img",{attrs:{src:"images/10.1_fig10.1-2.jpg?raw=true",alt:""}})]),t._v(" "),a("p",[t._v("类型 struct1 在定义它的包 pack1 中必须是唯一的，它的完全类型名是："),a("code",[t._v("pack1.struct1")]),t._v("。")]),t._v(" "),a("p",[t._v("下面的例子 "),a("a",{attrs:{href:"examples/chapter_10/person.go"}},[t._v("Listing 10.2—person.go")]),t._v(" 显示了一个结构体 Person，一个方法，方法有一个类型为 "),a("code",[t._v("*Person")]),t._v(" 的参数（因此对象本身是可以被改变的），以及三种调用这个方法的不同方式：")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fmt"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"strings"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" Person "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    firstName   "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("\n    lastName    "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("upPerson")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("Person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("firstName "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" strings"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ToUpper")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("firstName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lastName "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" strings"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ToUpper")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lastName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1-struct as a value type:")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" pers1 Person\n    pers1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("firstName "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Chris"')]),t._v("\n    pers1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lastName "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Woodward"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("upPerson")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("pers1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    fmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"The name of the person is %s %s\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pers1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("firstName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pers1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lastName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2—struct as a pointer:")]),t._v("\n    pers2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("new")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    pers2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("firstName "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Chris"')]),t._v("\n    pers2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lastName "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Woodward"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("pers2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lastName "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Woodward"')]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这是合法的")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("upPerson")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pers2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    fmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"The name of the person is %s %s\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pers2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("firstName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pers2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lastName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3—struct as a literal:")]),t._v("\n    pers3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("Person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Chris"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Woodward"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("upPerson")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pers3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    fmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"The name of the person is %s %s\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pers3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("firstName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pers3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lastName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("输出：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("The name of the person is CHRIS WOODWARD\nThe name of the person is CHRIS WOODWARD\nThe name of the person is CHRIS WOODWARD\n")])])]),a("p",[t._v("在上面例子的第二种情况中，可以直接通过指针，像 "),a("code",[t._v('pers2.lastName="Woodward"')]),t._v(" 这样给结构体字段赋值，没有像 C++ 中那样需要使用 "),a("code",[t._v("->")]),t._v(" 操作符，Go 会自动做这样的转换。")]),t._v(" "),a("p",[t._v("注意也可以通过解指针的方式来设置值："),a("code",[t._v('(*pers2).lastName = "Woodward"')])]),t._v(" "),a("p",[a("strong",[t._v("结构体的内存布局")])]),t._v(" "),a("p",[t._v("Go 语言中，结构体和它所包含的数据在内存中是以连续块的形式存在的，即使结构体中嵌套有其他的结构体，这在性能上带来了很大的优势。不像 Java 中的引用类型，一个对象和它里面包含的对象可能会在不同的内存空间中，这点和 Go 语言中的指针很像。下面的例子清晰地说明了这些情况：")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" Rect1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Min"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Max Point "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" Rect2 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Min"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Max "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("Point "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("img",{attrs:{src:"images/10.1_fig10.2.jpg?raw=true",alt:""}})]),t._v(" "),a("p",[a("strong",[t._v("递归结构体")])]),t._v(" "),a("p",[t._v("结构体类型可以通过引用自身来定义。这在定义链表或二叉树的元素（通常叫节点）时特别有用，此时节点包含指向临近节点的链接（地址）。如下所示，链表中的 "),a("code",[t._v("su")]),t._v("，树中的 "),a("code",[t._v("ri")]),t._v(" 和 "),a("code",[t._v("le")]),t._v(" 分别是指向别的节点的指针。")]),t._v(" "),a("p",[t._v("链表：")]),t._v(" "),a("p",[a("img",{attrs:{src:"images/10.1_fig10.3.jpg?raw=true",alt:""}})]),t._v(" "),a("p",[t._v("这块的 "),a("code",[t._v("data")]),t._v(" 字段用于存放有效数据（比如 float64），"),a("code",[t._v("su")]),t._v(" 指针指向后继节点。")]),t._v(" "),a("p",[t._v("Go 代码：")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" Node "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    data    "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("float64")]),t._v("\n    su      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("Node\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("链表中的第一个元素叫 "),a("code",[t._v("head")]),t._v("，它指向第二个元素；最后一个元素叫 "),a("code",[t._v("tail")]),t._v("，它没有后继元素，所以它的 "),a("code",[t._v("su")]),t._v(" 为 nil 值。当然真实的链接会有很多数据节点，并且链表可以动态增长或收缩。")]),t._v(" "),a("p",[t._v("同样地可以定义一个双向链表，它有一个前趋节点 "),a("code",[t._v("pr")]),t._v(" 和一个后继节点 "),a("code",[t._v("su")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" Node "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    pr      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("Node\n    data    "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("float64")]),t._v("\n    su      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("Node\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("二叉树：")]),t._v(" "),a("p",[a("img",{attrs:{src:"images/10.1_fig10.4.jpg?raw=true",alt:""}})]),t._v(" "),a("p",[t._v("二叉树中每个节点最多能链接至两个节点：左节点（le）和右节点（ri），这两个节点本身又可以有左右节点，依次类推。树的顶层节点叫根节点（"),a("strong",[t._v("root")]),t._v("），底层没有子节点的节点叫叶子节点（"),a("strong",[t._v("leaves")]),t._v("），叶子节点的 "),a("code",[t._v("le")]),t._v(" 和 "),a("code",[t._v("ri")]),t._v(" 指针为 nil 值。在 Go 中可以如下定义二叉树：")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" Tree "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    le      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("Tree\n    data    "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("float64")]),t._v("\n    ri      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("Tree\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("strong",[t._v("结构体转换")])]),t._v(" "),a("p",[t._v("Go 中的类型转换遵循严格的规则。当为结构体定义了一个 alias 类型时，此结构体类型和它的 alias 类型都有相同的底层类型，它们可以如示例 10.3 那样互相转换，同时需要注意其中非法赋值或转换引起的编译错误。")]),t._v(" "),a("p",[t._v("示例 10.3：")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fmt"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" number "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    f "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("float32")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" nr number   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// alias type")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" nr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// var i float32 = b   // compile-error: cannot use b (type nr) as type float32 in assignment")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// var i = float32(b)  // compile-error: cannot convert b (type nr) to type float32")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// var c number = b    // compile-error: cannot use b (type nr) as type number in assignment")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// needs a conversion:")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    fmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("输出：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("{5} {5} {5}\n")])])]),a("p",[a("strong",[t._v("练习 10.1")]),t._v(" vcard.go：")]),t._v(" "),a("p",[t._v("定义结构体 Address 和 VCard，后者包含一个人的名字、地址编号、出生日期和图像，试着选择正确的数据类型。构建一个自己的 vcard 并打印它的内容。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("提示：\nVCard 必须包含住址，它应该以值类型还是以指针类型放在 VCard 中呢？\n第二种会好点，因为它占用内存少。包含一个名字和两个指向地址的指针的 Address 结构体可以使用 %v 打印：\n{Kersschot 0x126d2b80 0x126d2be0}\n")])])]),a("p",[a("strong",[t._v("练习 10.2")]),t._v(" personex1.go：")]),t._v(" "),a("p",[t._v("修改 personex1.go，使它的参数 upPerson 不是一个指针，解释下二者的区别。")]),t._v(" "),a("p",[a("strong",[t._v("练习 10.3")]),t._v(" point.go：")]),t._v(" "),a("p",[t._v("使用坐标 X、Y 定义一个二维 Point 结构体。同样地，对一个三维点使用它的极坐标定义一个 Polar 结构体。实现一个 "),a("code",[t._v("Abs()")]),t._v(" 方法来计算一个 Point 表示的向量的长度，实现一个 "),a("code",[t._v("Scale")]),t._v(" 方法，它将点的坐标乘以一个尺度因子（提示：使用 "),a("code",[t._v("math")]),t._v(" 包里的 "),a("code",[t._v("Sqrt")]),t._v(" 函数）（function Scale that multiplies the coordinates of a point with a scale\nfactor）。")]),t._v(" "),a("p",[a("strong",[t._v("练习 10.4")]),t._v(" rectangle.go：")]),t._v(" "),a("p",[t._v("定义一个 Rectangle 结构体，它的长和宽是 int 类型，并定义方法 "),a("code",[t._v("Area()")]),t._v(" 和 "),a("code",[t._v("Perimeter()")]),t._v("，然后进行测试。")]),t._v(" "),a("h2",{attrs:{id:"链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#链接"}},[t._v("#")]),t._v(" 链接")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/go-doc/directory.html"}},[t._v("目录")])],1),t._v(" "),a("li",[t._v("上一节："),a("RouterLink",{attrs:{to:"/go-doc/10.0.html"}},[t._v("结构（struct）与方法（method）")])],1),t._v(" "),a("li",[t._v("下一节："),a("RouterLink",{attrs:{to:"/go-doc/10.2.html"}},[t._v("使用工厂方法创建结构体")])],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);