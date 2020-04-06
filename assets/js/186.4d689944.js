(window.webpackJsonp=window.webpackJsonp||[]).push([[186],{428:function(t,s,e){"use strict";e.r(s);var a=e(28),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"_16-5-不需要将一个指向切片的指针传递给函数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_16-5-不需要将一个指向切片的指针传递给函数"}},[t._v("#")]),t._v(" 16.5 不需要将一个指向切片的指针传递给函数")]),t._v(" "),e("p",[t._v("在"),e("RouterLink",{attrs:{to:"/go-doc/04.9.html"}},[t._v("第4.9小节")]),t._v("，我们已经知道，切片实际是一个指向潜在数组的指针。我们常常需要把切片作为一个参数传递给函数是因为：实际就是传递一个指向变量的指针，在函数内可以改变这个变量，而不是传递数据的拷贝。")],1),t._v(" "),e("p",[t._v("因此应该这样做：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("   func findBiggest( listOfNumbers []int ) int {}\n")])])]),e("p",[t._v("而不是：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("   func findBiggest( listOfNumbers *[]int ) int {}\n")])])]),e("p",[e("strong",[t._v("当切片作为参数传递时，切记不要解引用切片。")])]),t._v(" "),e("h2",{attrs:{id:"链接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#链接"}},[t._v("#")]),t._v(" 链接")]),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/go-doc/directory.html"}},[t._v("目录")])],1),t._v(" "),e("li",[t._v("上一节："),e("RouterLink",{attrs:{to:"/go-doc/16.4.html"}},[t._v("何时使用new()和make()")])],1),t._v(" "),e("li",[t._v("下一节："),e("RouterLink",{attrs:{to:"/go-doc/16.6.html"}},[t._v("使用指针指向接口类型")])],1)])])}),[],!1,null,null,null);s.default=r.exports}}]);