(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{374:function(t,s,n){"use strict";n.r(s);var a=n(28),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"_12-3-文件拷贝"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_12-3-文件拷贝"}},[t._v("#")]),t._v(" 12.3 文件拷贝")]),t._v(" "),n("p",[t._v("如何拷贝一个文件到另一个文件？最简单的方式就是使用 io 包：")]),t._v(" "),n("p",[t._v("示例 12.10 "),n("a",{attrs:{href:"examples/chapter_12/filecopy.go"}},[t._v("filecopy.go")]),t._v("：")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// filecopy.go")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fmt"')]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"io"')]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"os"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("CopyFile")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"target.txt"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"source.txt"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tfmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Copy done!"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("CopyFile")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dstName"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" srcName "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("written "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int64")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tsrc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" os"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Open")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("srcName"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("defer")]),t._v(" src"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Close")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\tdst"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" os"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Create")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dstName"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("defer")]),t._v(" dst"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Close")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" io"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Copy")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dst"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" src"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("注意 "),n("code",[t._v("defer")]),t._v(" 的使用：当打开dst文件时发生了错误，那么 "),n("code",[t._v("defer")]),t._v(" 仍然能够确保 "),n("code",[t._v("src.Close()")]),t._v(" 执行。如果不这么做，src文件会一直保持打开状态并占用资源。")]),t._v(" "),n("h2",{attrs:{id:"链接"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#链接"}},[t._v("#")]),t._v(" 链接")]),t._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/go-doc/directory.html"}},[t._v("目录")])],1),t._v(" "),n("li",[t._v("上一节："),n("RouterLink",{attrs:{to:"/go-doc/12.2.html"}},[t._v("文件读写")])],1),t._v(" "),n("li",[t._v("下一节："),n("RouterLink",{attrs:{to:"/go-doc/12.4.html"}},[t._v("从命令行读取参数")])],1)])])}),[],!1,null,null,null);s.default=r.exports}}]);