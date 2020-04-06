(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{388:function(t,s,a){"use strict";a.r(s);var e=a(28),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_13-7-go-中的单元测试和基准测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_13-7-go-中的单元测试和基准测试"}},[t._v("#")]),t._v(" 13.7 Go 中的单元测试和基准测试")]),t._v(" "),a("p",[t._v("首先所有的包都应该有一定的必要文档，然后同样重要的是对包的测试。")]),t._v(" "),a("p",[t._v("在第 3 章中提到了 Go 的测试工具 gotest， 我们已经在 "),a("RouterLink",{attrs:{to:"/go-doc/09.8.html"}},[t._v("9.8 节")]),t._v("中使用过了。这里我们会用更多的例子进行详细说明。")],1),t._v(" "),a("p",[t._v("名为 testing 的包被专门用来进行自动化测试，日志和错误报告。并且还包含一些基准测试函数的功能。")]),t._v(" "),a("p",[a("u",[t._v("备注：")]),t._v("gotest 是 Unix bash 脚本，所以在 Windows 下你需要配置 MINGW 环境（参见 "),a("RouterLink",{attrs:{to:"/go-doc/02.5.html"}},[t._v("2.5 节")]),t._v("）；在 Windows 环境下把所有的 pkg/linux_amd64 替换成 pkg/windows。")],1),t._v(" "),a("p",[t._v("对一个包做（单元）测试，需要写一些可以频繁（每次更新后）执行的小块测试单元来检查代码的正确性。于是我们必须写一些 Go 源文件来测试代码。测试程序必须属于被测试的包，并且文件名满足这种形式 "),a("code",[t._v("*_test.go")]),t._v("，所以测试代码和包中的业务代码是分开的。")]),t._v(" "),a("p",[a("code",[t._v("_test")]),t._v(" 程序不会被普通的 Go 编译器编译，所以当放应用部署到生产环境时它们不会被部署；只有 gotest 会编译所有的程序：普通程序和测试程序。")]),t._v(" "),a("p",[t._v('测试文件中必须导入 "testing" 包，并写一些名字以 '),a("code",[t._v("TestZzz")]),t._v(" 打头的全局函数，这里的 "),a("code",[t._v("Zzz")]),t._v(" 是被测试函数的字母描述，如 TestFmtInterface，TestPayEmployees 等。")]),t._v(" "),a("p",[t._v("测试函数必须有这种形式的头部：")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("TestAbcde")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("testing"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("T"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("T 是传给测试函数的结构类型，用来管理测试状态，支持格式化测试日志，如 t.Log，t.Error，t.ErrorF 等。在函数的结尾把输出跟想要的结果对比，如果不等就打印一个错误。成功的测试则直接返回。")]),t._v(" "),a("p",[t._v("用下面这些函数来通知测试失败：")]),t._v(" "),a("p",[t._v("1）"),a("code",[t._v("func (t *T) Fail()")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("\t标记测试函数为失败，然后继续执行（剩下的测试）。\n")])])]),a("p",[t._v("2）"),a("code",[t._v("func (t *T) FailNow()")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("\t标记测试函数为失败并中止执行；文件中别的测试也被略过，继续执行下一个文件。\n")])])]),a("p",[t._v("3）"),a("code",[t._v("func (t *T) Log(args ...interface{})")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("\targs 被用默认的格式格式化并打印到错误日志中。\n")])])]),a("p",[t._v("4）"),a("code",[t._v("func (t *T) Fatal(args ...interface{})")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("\t结合 先执行 3），然后执行 2）的效果。\n")])])]),a("p",[t._v("运行 go test 来编译测试程序，并执行程序中所有的 TestZZZ 函数。如果所有的测试都通过会打印出 PASS。")]),t._v(" "),a("p",[t._v("gotest 可以接收一个或多个函数程序作为参数，并指定一些选项。")]),t._v(" "),a("p",[t._v("结合 --chatty 或 -v 选项，每个执行的测试函数以及测试状态会被打印。")]),t._v(" "),a("p",[t._v("例如：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("go "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v(" fmt_test.go --chatty\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" RUN fmt.TestFlagParser\n--- PASS: fmt.TestFlagParser\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" RUN fmt.TestArrayPrinter\n--- PASS: fmt.TestArrayPrinter\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n")])])]),a("p",[t._v("testing 包中有一些类型和函数可以用来做简单的基准测试；测试代码中必须包含以 "),a("code",[t._v("BenchmarkZzz")]),t._v(" 打头的函数并接收一个 "),a("code",[t._v("*testing.B")]),t._v(" 类型的参数，比如：")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("BenchmarkReverse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("testing"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("B"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("命令 "),a("code",[t._v("go test –test.bench=.*")]),t._v(" 会运行所有的基准测试函数；代码中的函数会被调用 N 次（N是非常大的数，如 N = 1000000），并展示 N 的值和函数执行的平均时间，单位为 ns（纳秒，ns/op）。如果是用 testing.Benchmark 调用这些函数，直接运行程序即可。")]),t._v(" "),a("p",[t._v("具体可以参见 "),a("RouterLink",{attrs:{to:"/go-doc/14.16.html"}},[t._v("14.16 节")]),t._v("中用 goroutines 运行基准测试的例子以及练习 13.4："),a("a",{attrs:{href:"exercises/chapter_13/string_reverse_test.go"}},[t._v("string_reverse_test.go")])],1),t._v(" "),a("h2",{attrs:{id:"链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#链接"}},[t._v("#")]),t._v(" 链接")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/go-doc/directory.html"}},[t._v("目录")])],1),t._v(" "),a("li",[t._v("上一节："),a("RouterLink",{attrs:{to:"/go-doc/13.6.html"}},[t._v("启动外部命令和程序")])],1),t._v(" "),a("li",[t._v("下一节："),a("RouterLink",{attrs:{to:"/go-doc/13.8.html"}},[t._v("测试的具体例子")])],1)])])}),[],!1,null,null,null);s.default=r.exports}}]);