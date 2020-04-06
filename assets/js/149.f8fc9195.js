(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{391:function(t,n,s){"use strict";s.r(n);var a=s(28),e=Object(a.a)({},(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_14-1-并发、并行和协程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_14-1-并发、并行和协程"}},[t._v("#")]),t._v(" 14.1 并发、并行和协程")]),t._v(" "),s("h2",{attrs:{id:"_14-1-1-什么是协程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_14-1-1-什么是协程"}},[t._v("#")]),t._v(" 14.1.1 什么是协程")]),t._v(" "),s("p",[t._v("一个应用程序是运行在机器上的一个进程；进程是一个运行在自己内存地址空间里的独立执行体。一个进程由一个或多个操作系统线程组成，这些线程其实是共享同一个内存地址空间的一起工作的执行体。几乎所有'正式'的程序都是多线程的，以便让用户或计算机不必等待，或者能够同时服务多个请求（如 Web 服务器），或增加性能和吞吐量（例如，通过对不同的数据集并行执行代码）。一个并发程序可以在一个处理器或者内核上使用多个线程来执行任务，但是只有同一个程序在某个时间点同时运行在多核或者多处理器上才是真正的并行。")]),t._v(" "),s("p",[t._v("并行是一种通过使用多处理器以提高速度的能力。所以并发程序可以是并行的，也可以不是。")]),t._v(" "),s("p",[t._v("公认的，使用多线程的应用难以做到准确，最主要的问题是内存中的数据共享，它们会被多线程以无法预知的方式进行操作，导致一些无法重现或者随机的结果（称作 "),s("code",[t._v("竞态")]),t._v("）。")]),t._v(" "),s("p",[s("strong",[t._v("不要使用全局变量或者共享内存，它们会给你的代码在并发运算的时候带来危险。")])]),t._v(" "),s("p",[t._v("解决之道在于同步不同的线程，对数据加锁，这样同时就只有一个线程可以变更数据。在 Go 的标准库 "),s("code",[t._v("sync")]),t._v(" 中有一些工具用来在低级别的代码中实现加锁；我们在第 "),s("RouterLink",{attrs:{to:"/go-doc/09.3.html"}},[t._v("9.3")]),t._v(" 节中讨论过这个问题。不过过去的软件开发经验告诉我们这会带来更高的复杂度，更容易使代码出错以及更低的性能，所以这个经典的方法明显不再适合现代多核/多处理器编程："),s("code",[t._v("thread-per-connection")]),t._v(" 模型不够有效。")],1),t._v(" "),s("p",[t._v("Go 更倾向于其他的方式，在诸多比较合适的范式中，有个被称作 "),s("code",[t._v("Communicating Sequential Processes（顺序通信处理）")]),t._v("（CSP, C. Hoare 发明的）还有一个叫做 "),s("code",[t._v("message passing-model（消息传递）")]),t._v("（已经运用在了其他语言中，比如 Erlang）。")]),t._v(" "),s("p",[t._v("在 Go 中，应用程序并发处理的部分被称作 "),s("code",[t._v("goroutines（协程）")]),t._v("，它可以进行更有效的并发运算。在协程和操作系统线程之间并无一对一的关系：协程是根据一个或多个线程的可用性，映射（多路复用，执行于）在他们之上的；协程调度器在 Go 运行时很好的完成了这个工作。")]),t._v(" "),s("p",[t._v("协程工作在相同的地址空间中，所以共享内存的方式一定是同步的；这个可以使用 "),s("code",[t._v("sync")]),t._v(" 包来实现（参见第 "),s("RouterLink",{attrs:{to:"/go-doc/09.3.html"}},[t._v("9.3")]),t._v(" 节），不过我们很不鼓励这样做：Go 使用 "),s("code",[t._v("channels")]),t._v(" 来同步协程（可以参见第 "),s("RouterLink",{attrs:{to:"/go-doc/14.2.html"}},[t._v("14.2")]),t._v(" 节等章节）")],1),t._v(" "),s("p",[t._v("当系统调用（比如等待 I/O）阻塞协程时，其他协程会继续在其他线程上工作。协程的设计隐藏了许多线程创建和管理方面的复杂工作。")]),t._v(" "),s("p",[t._v("协程是轻量的，比线程更轻。它们痕迹非常不明显（使用少量的内存和资源）：使用 4K 的栈内存就可以在堆中创建它们。因为创建非常廉价，必要的时候可以轻松创建并运行大量的协程（在同一个地址空间中 100,000 个连续的协程）。并且它们对栈进行了分割，从而动态的增加（或缩减）内存的使用；栈的管理是自动的，但不是由垃圾回收器管理的，而是在协程退出后自动释放。")]),t._v(" "),s("p",[t._v("协程可以运行在多个操作系统线程之间，也可以运行在线程之内，让你可以很小的内存占用就可以处理大量的任务。由于操作系统线程上的协程时间片，你可以使用少量的操作系统线程就能拥有任意多个提供服务的协程，而且 Go 运行时可以聪明的意识到哪些协程被阻塞了，暂时搁置它们并处理其他协程。")]),t._v(" "),s("p",[t._v("存在两种并发方式：确定性的（明确定义排序）和非确定性的（加锁/互斥从而未定义排序）。Go 的协程和通道理所当然的支持确定性的并发方式（例如通道具有一个 sender 和一个 receiver）。我们会在第 "),s("RouterLink",{attrs:{to:"/go-doc/14.7.html"}},[t._v("14.7")]),t._v(" 节中使用一个常见的算法问题（工人问题）来对比两种处理方式。")],1),t._v(" "),s("p",[t._v("协程是通过使用关键字 "),s("code",[t._v("go")]),t._v(" 调用（执行）一个函数或者方法来实现的（也可以是匿名或者 lambda 函数）。这样会在当前的计算过程中开始一个同时进行的函数，在相同的地址空间中并且分配了独立的栈，比如："),s("code",[t._v("go sum(bigArray)")]),t._v("，在后台计算总和。")]),t._v(" "),s("p",[t._v("协程的栈会根据需要进行伸缩，不出现栈溢出；开发者不需要关心栈的大小。当协程结束的时候，它会静默退出：用来启动这个协程的函数不会得到任何的返回值。")]),t._v(" "),s("p",[t._v("任何 Go 程序都必须有的 "),s("code",[t._v("main()")]),t._v(" 函数也可以看做是一个协程，尽管它并没有通过 "),s("code",[t._v("go")]),t._v(" 来启动。协程可以在程序初始化的过程中运行（在 "),s("code",[t._v("init()")]),t._v(" 函数中）。")]),t._v(" "),s("p",[t._v("在一个协程中，比如它需要进行非常密集的运算，你可以在运算循环中周期的使用 "),s("code",[t._v("runtime.Gosched()")]),t._v("：这会让出处理器，允许运行其他协程；它并不会使当前协程挂起，所以它会自动恢复执行。使用 "),s("code",[t._v("Gosched()")]),t._v(" 可以使计算均匀分布，使通信不至于迟迟得不到响应。")]),t._v(" "),s("h2",{attrs:{id:"_14-1-2-并发和并行的差异"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_14-1-2-并发和并行的差异"}},[t._v("#")]),t._v(" 14.1.2 并发和并行的差异")]),t._v(" "),s("p",[t._v("Go 的并发原语提供了良好的并发设计基础：表达程序结构以便表示独立地执行的动作；所以Go的重点不在于并行的首要位置：并发程序可能是并行的，也可能不是。并行是一种通过使用多处理器以提高速度的能力。但往往是，一个设计良好的并发程序在并行方面的表现也非常出色。")]),t._v(" "),s("p",[t._v("在当前的运行时（2012 年一月）实现中，Go 默认没有并行指令，只有一个独立的核心或处理器被专门用于 Go 程序，不论它启动了多少个协程；所以这些协程是并发运行的，但他们不是并行运行的：同一时间只有一个协程会处在运行状态。")]),t._v(" "),s("p",[t._v("这个情况在以后可能会发生改变，不过届时，为了使你的程序可以使用多个核心运行，这时协程就真正的是并行运行了，你必须使用 "),s("code",[t._v("GOMAXPROCS")]),t._v(" 变量。")]),t._v(" "),s("p",[t._v("这会告诉运行时有多少个协程同时执行。")]),t._v(" "),s("p",[t._v("并且只有 gc 编译器真正实现了协程，适当的把协程映射到操作系统线程。使用 "),s("code",[t._v("gccgo")]),t._v(" 编译器，会为每一个协程创建操作系统线程。")]),t._v(" "),s("h2",{attrs:{id:"_14-1-3-使用-gomaxprocs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_14-1-3-使用-gomaxprocs"}},[t._v("#")]),t._v(" 14.1.3 使用 GOMAXPROCS")]),t._v(" "),s("p",[t._v("在 gc 编译器下（6g 或者 8g）你必须设置 GOMAXPROCS 为一个大于默认值 1 的数值来允许运行时支持使用多于 1 个的操作系统线程，所有的协程都会共享同一个线程除非将 GOMAXPROCS 设置为一个大于 1 的数。当 GOMAXPROCS 大于 1 时，会有一个线程池管理许多的线程。通过 "),s("code",[t._v("gccgo")]),t._v(" 编译器 GOMAXPROCS 有效的与运行中的协程数量相等。假设 n 是机器上处理器或者核心的数量。如果你设置环境变量 GOMAXPROCS>=n，或者执行 "),s("code",[t._v("runtime.GOMAXPROCS(n)")]),t._v("，接下来协程会被分割（分散）到 n 个处理器上。更多的处理器并不意味着性能的线性提升。有这样一个经验法则，对于 n 个核心的情况设置 GOMAXPROCS 为 n-1 以获得最佳性能，也同样需要遵守这条规则：协程的数量 > 1 + GOMAXPROCS > 1。")]),t._v(" "),s("p",[t._v("所以如果在某一时间只有一个协程在执行，不要设置 GOMAXPROCS！")]),t._v(" "),s("p",[t._v("还有一些通过实验观察到的现象：在一台 1 颗 CPU 的笔记本电脑上，增加 GOMAXPROCS 到 9 会带来性能提升。在一台 32 核的机器上，设置 GOMAXPROCS=8 会达到最好的性能，在测试环境中，更高的数值无法提升性能。如果设置一个很大的 GOMAXPROCS 只会带来轻微的性能下降；设置 GOMAXPROCS=100，使用 "),s("code",[t._v("top")]),t._v(" 命令和 "),s("code",[t._v("H")]),t._v(" 选项查看到只有 7 个活动的线程。")]),t._v(" "),s("p",[t._v("增加 GOMAXPROCS 的数值对程序进行并发计算是有好处的；")]),t._v(" "),s("p",[t._v("请看 "),s("a",{attrs:{href:"examples/chapter_14/goroutine_select2.go"}},[t._v("goroutine_select2.go")])]),t._v(" "),s("p",[t._v("总结：GOMAXPROCS 等同于（并发的）线程数量，在一台核心数多于1个的机器上，会尽可能有等同于核心数的线程在并行运行。")]),t._v(" "),s("h2",{attrs:{id:"_14-1-4-如何用命令行指定使用的核心数量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_14-1-4-如何用命令行指定使用的核心数量"}},[t._v("#")]),t._v(" 14.1.4 如何用命令行指定使用的核心数量")]),t._v(" "),s("p",[t._v("使用 "),s("code",[t._v("flags")]),t._v(" 包，如下：")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" numCores "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" flag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"n"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"number of CPU cores to use"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("在 main() 中：")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[t._v("flag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Parse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nruntime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GOMAXPROCS")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("numCores"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("协程可以通过调用"),s("code",[t._v("runtime.Goexit()")]),t._v("来停止，尽管这样做几乎没有必要。")]),t._v(" "),s("p",[t._v("示例 14.1-"),s("a",{attrs:{href:"examples/chapter_14/goroutine1.go"}},[t._v("goroutine1.go")]),t._v(" 介绍了概念：")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fmt"')]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"time"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tfmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"In main()"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("go")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("longWait")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("go")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("shortWait")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tfmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"About to sleep in main()"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// sleep works with a Duration in nanoseconds (ns) !")]),t._v("\n\ttime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Sleep")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1e9")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tfmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"At the end of main()"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("longWait")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tfmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Beginning longWait()"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ttime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Sleep")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1e9")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// sleep for 5 seconds")]),t._v("\n\tfmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"End of longWait()"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("shortWait")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tfmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Beginning shortWait()"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ttime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Sleep")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1e9")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// sleep for 2 seconds")]),t._v("\n\tfmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"End of shortWait()"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("输出：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("In main()\nAbout to sleep in main()\nBeginning longWait()\nBeginning shortWait()\nEnd of shortWait()\nEnd of longWait()\nAt the end of main() // after 10s\n")])])]),s("p",[s("code",[t._v("main()")]),t._v("，"),s("code",[t._v("longWait()")]),t._v(" 和 "),s("code",[t._v("shortWait()")]),t._v(" 三个函数作为独立的处理单元按顺序启动，然后开始并行运行。每一个函数都在运行的开始和结束阶段输出了消息。为了模拟他们运算的时间消耗，我们使用了 "),s("code",[t._v("time")]),t._v(" 包中的 "),s("code",[t._v("Sleep")]),t._v(" 函数。"),s("code",[t._v("Sleep()")]),t._v(" 可以按照指定的时间来暂停函数或协程的执行，这里使用了纳秒（ns，符号 1e9 表示 1 乘 10 的 9 次方，e=指数）。")]),t._v(" "),s("p",[t._v("他们按照我们期望的顺序打印出了消息，几乎都一样，可是我们明白这是模拟出来的，以并行的方式。我们让 "),s("code",[t._v("main()")]),t._v(" 函数暂停 10 秒从而确定它会在另外两个协程之后结束。如果不这样（如果我们让 "),s("code",[t._v("main()")]),t._v(" 函数停止 4 秒），"),s("code",[t._v("main()")]),t._v(" 会提前结束，"),s("code",[t._v("longWait()")]),t._v(" 则无法完成。如果我们不在 "),s("code",[t._v("main()")]),t._v(" 中等待，协程会随着程序的结束而消亡。")]),t._v(" "),s("p",[t._v("当 "),s("code",[t._v("main()")]),t._v(" 函数返回的时候，程序退出：它不会等待任何其他非 main 协程的结束。这就是为什么在服务器程序中，每一个请求都会启动一个协程来处理，"),s("code",[t._v("server()")]),t._v(" 函数必须保持运行状态。通常使用一个无限循环来达到这样的目的。")]),t._v(" "),s("p",[t._v("另外，协程是独立的处理单元，一旦陆续启动一些协程，你无法确定他们是什么时候真正开始执行的。你的代码逻辑必须独立于协程调用的顺序。")]),t._v(" "),s("p",[t._v("为了对比使用一个线程，连续调用的情况，移除 go 关键字，重新运行程序。")]),t._v(" "),s("p",[t._v("现在输出：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("In main()\nBeginning longWait()\nEnd of longWait()\nBeginning shortWait()\nEnd of shortWait()\nAbout to sleep in main()\nAt the end of main() // after 17 s\n")])])]),s("p",[t._v("协程更有用的一个例子应该是在一个非常长的数组中查找一个元素。")]),t._v(" "),s("p",[t._v("将数组分割为若干个不重复的切片，然后给每一个切片启动一个协程进行查找计算。这样许多并行的协程可以用来进行查找任务，整体的查找时间会缩短（除以协程的数量）。")]),t._v(" "),s("h2",{attrs:{id:"_14-1-5-go-协程（goroutines）和协程（coroutines）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_14-1-5-go-协程（goroutines）和协程（coroutines）"}},[t._v("#")]),t._v(" 14.1.5 Go 协程（goroutines）和协程（coroutines）")]),t._v(" "),s("p",[t._v("（译者注：标题中的“Go协程（goroutines）” 即是 14 章讲的协程指的是 Go 语言中的协程。而“协程（coroutines）”指的是其他语言中的协程概念，仅在本节出现。）")]),t._v(" "),s("p",[t._v("在其他语言中，比如 C#，Lua 或者 Python 都有协程的概念。这个名字表明它和 Go协程有些相似，不过有两点不同：")]),t._v(" "),s("ul",[s("li",[t._v("Go 协程意味着并行（或者可以以并行的方式部署），协程一般来说不是这样的")]),t._v(" "),s("li",[t._v("Go 协程通过通道来通信；协程通过让出和恢复操作来通信")])]),t._v(" "),s("p",[t._v("Go 协程比协程更强大，也很容易从协程的逻辑复用到 Go 协程。")]),t._v(" "),s("h2",{attrs:{id:"链接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#链接"}},[t._v("#")]),t._v(" 链接")]),t._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/go-doc/directory.html"}},[t._v("目录")])],1),t._v(" "),s("li",[t._v("上一节："),s("RouterLink",{attrs:{to:"/go-doc/14.0.html"}},[t._v("协程（goroutine）与通道（channel）")])],1),t._v(" "),s("li",[t._v("下一节："),s("RouterLink",{attrs:{to:"/go-doc/14.2.html"}},[t._v("使用通道进行协程间通信")])],1)])])}),[],!1,null,null,null);n.default=e.exports}}]);