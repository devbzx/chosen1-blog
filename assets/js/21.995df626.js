(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{503:function(a,t,s){"use strict";s.r(t);var e=s(13),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"java-io-nio"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#java-io-nio"}},[a._v("#")]),a._v(" Java IO/NIO")]),a._v(" "),s("h2",{attrs:{id:"_1、传统-io-在读写时会发生阻塞现象。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、传统-io-在读写时会发生阻塞现象。"}},[a._v("#")]),a._v(" 1、传统 IO 在读写时会发生阻塞现象。")]),a._v(" "),s("p",[a._v("用户发出 IO 请求，内核会去查看数据是否就绪：")]),a._v(" "),s("p",[a._v("没有就绪就等待就绪，用户线程处于阻塞状态，用户交出 CPU。")]),a._v(" "),s("p",[a._v("就绪之后，内核将数据拷贝到用户线程，返回结果给用户线程，用户线程解除阻塞状态。")]),a._v(" "),s("p",[a._v("典型阻塞 IO 例子： data = socket.read();如果数据没有就绪，就会阻塞在 read 方法。")]),a._v(" "),s("h2",{attrs:{id:"_2、非阻塞-io"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、非阻塞-io"}},[a._v("#")]),a._v(" 2、非阻塞 IO")]),a._v(" "),s("p",[a._v("当用户线程发起一个 read 操作后，不需要等待，马上得到一个结果。")]),a._v(" "),s("p",[a._v("如果结果为 error 时，它就知道数据没准备好，于是它可以再次发送 read 操作。")]),a._v(" "),s("p",[a._v("如果内核中数据准备好了，并且又再次收到了用户请求，那么它马上就将数据拷贝到了用户线程，然后返回。")]),a._v(" "),s("p",[a._v("非阻塞 IO 中，用户需要不断询问内核数据是否就绪，非阻塞 IO 不会交出 CPU，而会一直占用 CPU。")]),a._v(" "),s("p",[a._v("模型为：")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("while")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n   data "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" socket"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("read")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("data "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!=")]),a._v(" error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      处理数据\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("break")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br")])]),s("p",[a._v("问题：在 while 循环中需要不断去询问内核数据是否就绪，会导致 cpu 占用率非常高。一般很少用 while 循环来读取数据。")]),a._v(" "),s("h2",{attrs:{id:"_3、多路复用-io-模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、多路复用-io-模型"}},[a._v("#")]),a._v(" 3、多路复用 IO 模型")]),a._v(" "),s("p",[a._v("比较常用的 IO 模型。")]),a._v(" "),s("p",[a._v("Java NIO 是一个多路复用 IO。")]),a._v(" "),s("p",[a._v("在多路复用 IO 模型中，会"),s("strong",[a._v("有一个线程不断去轮询多个 socket 的状态，只有当 socket 真正有读写事件时，才真正调用实际的 IO 读写操作。")])]),a._v(" "),s("p",[a._v("在多路复用 IO 中，一个线程就可以管理多个 socket。在真正有 socket 读写事件进行时才会使用 IO 资源，减少资源占用。")]),a._v(" "),s("p",[a._v("多路复用 IO 适合连接数比较多的情况。")]),a._v(" "),s("p",[a._v("多路复用 IO 比非阻塞 IO 模型效率高是因为：")]),a._v(" "),s("p",[a._v("非阻塞 IO 中，不断轮询 socket 状态时通过"),s("strong",[a._v("用户线程")]),a._v("去进行")]),a._v(" "),s("p",[a._v("而多路复用 IO 轮询 socket 状态是"),s("strong",[a._v("内核")]),a._v("在进行的，这个效率比用户线程高的多。")]),a._v(" "),s("p",[s("strong",[a._v("注意")])]),a._v(" "),s("p",[a._v("多路复用 IO 模型是通过轮询的方式来检测是否有事件到达，并且对到达的事件逐一进行响应。")]),a._v(" "),s("p",[a._v("因此对于多路复用 IO 模型来说，一旦事件响应体很大，那么就会导致后续的事件迟迟得不到处理，并且会影响新的事件轮询。")]),a._v(" "),s("h2",{attrs:{id:"_4、信号驱动-io-模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4、信号驱动-io-模型"}},[a._v("#")]),a._v(" 4、信号驱动 IO 模型")]),a._v(" "),s("p",[a._v("在信号驱动 IO 模型中，用户线程发起一个 IO 请求操作，会给对应的 socket 注册一个信号函数，然后用户线程会继续执行，当内核数据就绪时会发送一个信号给用户线程，用户线程接收到信号之后，便在信号函数中调用 IO 读写操作来进行实际的 IO 请求操作。")]),a._v(" "),s("p",[s("code",[a._v("用户线程 IO 操作")]),a._v(" ——》 "),s("code",[a._v("注册信号函数")]),a._v(" ——》 "),s("code",[a._v("用户线程继续执行")]),a._v("  ——》 "),s("code",[a._v("内核数据就绪发送信号")]),a._v(" ——》 "),s("code",[a._v("用户线程")]),a._v(" ——》"),s("code",[a._v("在信号函数中调用 IO 读写")])]),a._v(" "),s("h2",{attrs:{id:"_5、异步-io"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5、异步-io"}},[a._v("#")]),a._v(" 5、异步 IO")])])}),[],!1,null,null,null);t.default=n.exports}}]);