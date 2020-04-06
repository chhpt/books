(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{368:function(t,s,n){"use strict";n.r(s);var a=n(28),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"_12-1-读取用户的输入"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_12-1-读取用户的输入"}},[t._v("#")]),t._v(" 12.1 读取用户的输入")]),t._v(" "),n("p",[t._v("我们如何读取用户的键盘（控制台）输入呢？从键盘和标准输入 "),n("code",[t._v("os.Stdin")]),t._v(" 读取输入，最简单的办法是使用 "),n("code",[t._v("fmt")]),t._v(" 包提供的 Scan 和 Sscan 开头的函数。请看以下程序：")]),t._v(" "),n("p",[t._v("示例 12.1 "),n("a",{attrs:{href:"examples/chapter_12/readinput1.go"}},[t._v("readinput1.go")]),t._v("：")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 从控制台读取输入:")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fmt"')]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n   firstName"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" lastName"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" s "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("\n   i "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v("\n   f "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("float32")]),t._v("\n   input "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"56.12 / 5212 / Go"')]),t._v("\n   format "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%f / %d / %s"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   fmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Please enter your full name: "')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   fmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Scanln")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("firstName"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("lastName"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// fmt.Scanf("%s %s", &firstName, &lastName)')]),t._v("\n   fmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Printf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hi %s %s!\\n"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" firstName"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" lastName"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Hi Chris Naegels")]),t._v("\n   fmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Sscanf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("input"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" format"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("f"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   fmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"From the string we read: "')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" f"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 输出结果: From the string we read: 56.12 5212 Go")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[n("code",[t._v("Scanln")]),t._v(" 扫描来自标准输入的文本，将空格分隔的值依次存放到后续的参数内，直到碰到换行。"),n("code",[t._v("Scanf")]),t._v(" 与其类似，除了 "),n("code",[t._v("Scanf")]),t._v(" 的第一个参数用作格式字符串，用来决定如何读取。"),n("code",[t._v("Sscan")]),t._v(" 和以 "),n("code",[t._v("Sscan")]),t._v(" 开头的函数则是从字符串读取，除此之外，与 "),n("code",[t._v("Scanf")]),t._v(" 相同。如果这些函数读取到的结果与您预想的不同，您可以检查成功读入数据的个数和返回的错误。")]),t._v(" "),n("p",[t._v("您也可以使用 "),n("code",[t._v("bufio")]),t._v(" 包提供的缓冲读取（buffered reader）来读取数据，正如以下例子所示：")]),t._v(" "),n("p",[t._v("示例 12.2 "),n("a",{attrs:{href:"examples/chapter_12/readinput2.go"}},[t._v("readinput2.go")]),t._v("：")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fmt"')]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bufio"')]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"os"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" inputReader "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("bufio"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Reader\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" input "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" err "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    inputReader "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" bufio"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewReader")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("os"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Stdin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    fmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Please enter some input: "')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    input"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" inputReader"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ReadString")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\n'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        fmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Printf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"The input was: %s\\n"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" input"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[n("code",[t._v("inputReader")]),t._v(" 是一个指向 "),n("code",[t._v("bufio.Reader")]),t._v(" 的指针。"),n("code",[t._v("inputReader := bufio.NewReader(os.Stdin)")]),t._v(" 这行代码，将会创建一个读取器，并将其与标准输入绑定。")]),t._v(" "),n("p",[n("code",[t._v("bufio.NewReader()")]),t._v(" 构造函数的签名为："),n("code",[t._v("func NewReader(rd io.Reader) *Reader")])]),t._v(" "),n("p",[t._v("该函数的实参可以是满足 "),n("code",[t._v("io.Reader")]),t._v(" 接口的任意对象（任意包含有适当的 "),n("code",[t._v("Read()")]),t._v(" 方法的对象，请参考"),n("RouterLink",{attrs:{to:"/go-doc/11.8.html"}},[t._v("章节11.8")]),t._v("），函数返回一个新的带缓冲的 "),n("code",[t._v("io.Reader")]),t._v(" 对象，它将从指定读取器（例如 "),n("code",[t._v("os.Stdin")]),t._v("）读取内容。")],1),t._v(" "),n("p",[t._v("返回的读取器对象提供一个方法 "),n("code",[t._v("ReadString(delim byte)")]),t._v("，该方法从输入中读取内容，直到碰到 "),n("code",[t._v("delim")]),t._v(" 指定的字符，然后将读取到的内容连同 "),n("code",[t._v("delim")]),t._v(" 字符一起放到缓冲区。")]),t._v(" "),n("p",[n("code",[t._v("ReadString")]),t._v(" 返回读取到的字符串，如果碰到错误则返回 "),n("code",[t._v("nil")]),t._v("。如果它一直读到文件结束，则返回读取到的字符串和 "),n("code",[t._v("io.EOF")]),t._v("。如果读取过程中没有碰到 "),n("code",[t._v("delim")]),t._v(" 字符，将返回错误 "),n("code",[t._v("err != nil")]),t._v("。")]),t._v(" "),n("p",[t._v("在上面的例子中，我们会读取键盘输入，直到回车键（\\n）被按下。")]),t._v(" "),n("p",[t._v("屏幕是标准输出 "),n("code",[t._v("os.Stdout")]),t._v("；"),n("code",[t._v("os.Stderr")]),t._v(" 用于显示错误信息，大多数情况下等同于 "),n("code",[t._v("os.Stdout")]),t._v("。")]),t._v(" "),n("p",[t._v("一般情况下，我们会省略变量声明，而使用 "),n("code",[t._v(":=")]),t._v("，例如：")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[t._v("inputReader "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" bufio"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewReader")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("os"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Stdin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ninput"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" inputReader"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ReadString")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\n'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("我们将从现在开始使用这种写法。")]),t._v(" "),n("p",[t._v("第二个例子从键盘读取输入，使用了 "),n("code",[t._v("switch")]),t._v(" 语句：")]),t._v(" "),n("p",[t._v("示例 12.3 "),n("a",{attrs:{href:"examples/chapter_12/switch_input.go"}},[t._v("switch_input.go")]),t._v("：")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fmt"')]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"os"')]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bufio"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    inputReader "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" bufio"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewReader")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("os"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Stdin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    fmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Please enter your name:"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    input"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" inputReader"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ReadString")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\n'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        fmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"There were errors reading, exiting program."')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    fmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Printf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Your name is %s"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" input"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// For Unix: test with delimiter "\\n", for Windows: test with "\\r\\n"')]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" input "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Philip\\r\\n"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  fmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Welcome Philip!"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Chris\\r\\n"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("   fmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Welcome Chris!"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Ivo\\r\\n"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("     fmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Welcome Ivo!"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" fmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Printf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"You are not welcome here! Goodbye!"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// version 2:   ")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" input "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Philip\\r\\n"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fallthrough")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Ivo\\r\\n"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("     "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fallthrough")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Chris\\r\\n"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("   fmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Printf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Welcome %s\\n"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" input"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" fmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Printf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"You are not welcome here! Goodbye!\\n"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// version 3:")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" input "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Philip\\r\\n"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Ivo\\r\\n"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("   fmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Printf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Welcome %s\\n"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" input"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" fmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Printf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"You are not welcome here! Goodbye!\\n"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("注意：Unix和Windows的行结束符是不同的！")]),t._v(" "),n("p",[n("strong",[t._v("练习")])]),t._v(" "),n("p",[n("strong",[t._v("练习 12.1:")]),t._v(" "),n("a",{attrs:{href:"exercises/chapter_12/word_letter_count.go"}},[t._v("word_letter_count.go")])]),t._v(" "),n("p",[t._v("编写一个程序，从键盘读取输入。当用户输入 'S' 的时候表示输入结束，这时程序输出 3 个数字："),n("br"),t._v("\ni) 输入的字符的个数，包括空格，但不包括 '\\r' 和 '\\n'"),n("br"),t._v("\nii) 输入的单词的个数"),n("br"),t._v("\niii) 输入的行数")]),t._v(" "),n("p",[n("strong",[t._v("练习 12.2:")]),t._v(" "),n("a",{attrs:{href:"exercises/chapter_12/calculator.go"}},[t._v("calculator.go")])]),t._v(" "),n("p",[t._v("编写一个简单的逆波兰式计算器，它接受用户输入的整型数（最大值 999999）和运算符 +、-、*、/。"),n("br"),t._v("\n输入的格式为：number1 ENTER number2 ENTER operator ENTER --\x3e 显示结果"),n("br"),t._v("\n当用户输入字符 'q' 时，程序结束。请使用您在练习11.13中开发的 "),n("code",[t._v("stack")]),t._v(" 包。")]),t._v(" "),n("h2",{attrs:{id:"链接"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#链接"}},[t._v("#")]),t._v(" 链接")]),t._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/go-doc/directory.html"}},[t._v("目录")])],1),t._v(" "),n("li",[t._v("上一节："),n("RouterLink",{attrs:{to:"/go-doc/12.0.html"}},[t._v("读写数据")])],1),t._v(" "),n("li",[t._v("下一节："),n("RouterLink",{attrs:{to:"/go-doc/12.2.html"}},[t._v("文件读写")])],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);