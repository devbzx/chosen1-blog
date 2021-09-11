(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{520:function(t,a,_){"use strict";_.r(a);var v=_(13),s=Object(v.a)({},(function(){var t=this,a=t.$createElement,_=t._self._c||a;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h2",{attrs:{id:"http-协议"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http-协议"}},[t._v("#")]),t._v(" http 协议")]),t._v(" "),_("h3",{attrs:{id:"_1、http-的长连接和短连接"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1、http-的长连接和短连接"}},[t._v("#")]),t._v(" 1、http 的长连接和短连接")]),t._v(" "),_("p",[t._v("HTTP 协议有 HTTP/1.0 版本和 HTTP/1.1 版本。")]),t._v(" "),_("p",[t._v("HTTP1.1 默认保持长连接（HTTP persistent connection，也翻译为持久连接），数据传输完成了保持 TCP 连接不断开（不发 RST 包、不四次握手），等待在同域名下继续用这个通道传输数据；相反就是短连接。")]),t._v(" "),_("p",[t._v("在 HTTP/1.0 中，默认使用的是短连接。")]),t._v(" "),_("p",[t._v("浏览器和服务器每进行一次 HTTP 操作，就建立一次连接，任务结束就中断连接。")]),t._v(" "),_("p",[t._v("从 HTTP/1.1 起，默认使用的是长连接，用以保持连接特性。")]),t._v(" "),_("h3",{attrs:{id:"_2、http-1-1-与-http-1-0-的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2、http-1-1-与-http-1-0-的区别"}},[t._v("#")]),t._v(" 2、HTTP/1.1 与 HTTP/1.0 的区别")]),t._v(" "),_("h4",{attrs:{id:"_1-可扩展性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-可扩展性"}},[t._v("#")]),t._v(" 1）可扩展性")]),t._v(" "),_("p",[t._v("a) HTTP/1.1 在消息中增加版本号，用于兼容性判断。")]),t._v(" "),_("p",[t._v("b) HTTP/1.1 增加了 OPTIONS 方法，它允许客户端获取一个服务器支持的方法列表。")]),t._v(" "),_("p",[t._v("c) 为了与未来的协议规范兼容，HTTP/1.1 在请求消息中包含了 Upgrade 头域，通过该头域，客户端可以让服 务器知道它能够支持的其它备用通信协议，服务器可以据此进行协议切换，使用备用协议与客户端进行通信。")]),t._v(" "),_("h4",{attrs:{id:"_2-缓存"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-缓存"}},[t._v("#")]),t._v(" 2）缓存")]),t._v(" "),_("p",[t._v("在 HTTP/1.0 中，使用 Expire 头域来判断资源的 fresh 或 stale，并使用条件请求（conditional request）来判断资源是否仍有效。")]),t._v(" "),_("p",[t._v("HTTP/1.1 在 1.0 的基础上加入了一些 cache 的新特性，当缓存对象的 Age 超过 Expire 时变为 stale 对象，cache 不需要直接抛弃 stale 对象，而是与源服务器进行重新激活（revalidation）。")]),t._v(" "),_("h4",{attrs:{id:"_3-带宽优化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-带宽优化"}},[t._v("#")]),t._v(" 3）带宽优化")]),t._v(" "),_("h5",{attrs:{id:"http-1-0-中-存在一些浪费带宽的现象"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http-1-0-中-存在一些浪费带宽的现象"}},[t._v("#")]),t._v(" HTTP/1.0 中，存在一些浪费带宽的现象")]),t._v(" "),_("p",[_("strong",[t._v("例如")]),t._v("，客户端只是需要某个对象的一部分，而服务器却将整个对象送过来 了。")]),t._v(" "),_("p",[_("strong",[t._v("例如")]),t._v("，客户端只需要显示一个文档的部分内容，又比如下载大文件时需要支持断点续传功能，而不是在发生断连后 不得不重新下载完整的包。")]),t._v(" "),_("h5",{attrs:{id:"http-1-1-中在请求消息中引入了-range-头域"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http-1-1-中在请求消息中引入了-range-头域"}},[t._v("#")]),t._v(" HTTP/1.1 中在请求消息中引入了 range 头域")]),t._v(" "),_("p",[t._v("它允许只请求资源的某个部分。")]),t._v(" "),_("p",[t._v("在响应消息中 Content-Range 头 域声明了返回的这部分对象的偏移值和长度。")]),t._v(" "),_("p",[t._v("如果服务器相应地返回了对象所请求范围的内容，则响应码为 206 （Partial Content），它可以防止 Cache 将响应误以为是完整的一个对象。")]),t._v(" "),_("p",[t._v("另外一种情况是请求消息中如果包含比 较大的实体内容，但不确定服务器是否能够接收该请求（如是否有权限）， 此时若贸然发出带实体的请求，如果被拒绝也会浪费带宽。")]),t._v(" "),_("h5",{attrs:{id:"http-1-1-加入了一个新的状态码-100-continue-。"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http-1-1-加入了一个新的状态码-100-continue-。"}},[t._v("#")]),t._v(" HTTP/1.1 加入了一个新的状态码 100（Continue）。")]),t._v(" "),_("p",[t._v("客户端事先发送一个只带头域的请求，如果服务器因为权 限拒绝了请求，就回送响应码 401（Unauthorized）；")]),t._v(" "),_("p",[t._v("如果服务器接收此请求就回送响应码 100，客户端就可以继续 发送带实体的完整请求了。")]),t._v(" "),_("p",[t._v("注意，HTTP/1.0 的客户端不支持 100 响应码。但可以让客户端在请求消息中加入 Expect 头域，并将它的值设置为 100-continue。")]),t._v(" "),_("h5",{attrs:{id:"节省带宽资源的一个非常有效的做法就是压缩要传送的数据"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#节省带宽资源的一个非常有效的做法就是压缩要传送的数据"}},[t._v("#")]),t._v(" 节省带宽资源的一个非常有效的做法就是压缩要传送的数据")]),t._v(" "),_("p",[t._v("Content-Encoding 是对消息进行端到端（end-toend）的编码，它可能是资源在服务器上保存的固有格式（如 jpeg 图片格式）；")]),t._v(" "),_("p",[t._v("在请求消息中加入 Accept-Encoding 头域，它可以告诉服务器客户端能够解码的编码方式。")]),t._v(" "),_("h4",{attrs:{id:"_4-长连接"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-长连接"}},[t._v("#")]),t._v(" 4）长连接")]),t._v(" "),_("h5",{attrs:{id:"http-1-0-规定浏览器与服务器只保持短暂的连接"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http-1-0-规定浏览器与服务器只保持短暂的连接"}},[t._v("#")]),t._v(" HTTP/1.0 规定浏览器与服务器只保持短暂的连接")]),t._v(" "),_("p",[t._v("浏览器的每次请求都需要与服务器建立一个 TCP 连接，服务 器完成请求处理后立即断开 TCP 连接，服务器不跟踪每个客户也不记录过去的请求。")]),t._v(" "),_("p",[t._v("此外，由于大多数网页的流量都比较小，一次 TCP 连接很少能通过 slow-start 区，不利于提高带宽利用率。")]),t._v(" "),_("h5",{attrs:{id:"http-1-1-支持长连接-persistentconnection-和请求的流水线-pipelining-处理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http-1-1-支持长连接-persistentconnection-和请求的流水线-pipelining-处理"}},[t._v("#")]),t._v(" HTTP 1.1 支持长连接（PersistentConnection）和请求的流水线（Pipelining）处理")]),t._v(" "),_("p",[t._v("在一个 TCP 连接上可以传 送多个 HTTP 请求和响应，减少了建立和关闭连接的消耗和延迟。")]),t._v(" "),_("p",[_("strong",[t._v("例如")]),t._v("，一个包含有许多图像的网页文件的多个请求 和应答可以在一个连接中传输，但每个单独的网页文件的请求和应答仍然需要使用各自的连接。")]),t._v(" "),_("h5",{attrs:{id:"http-1-1-还允许客户端不用等待上一次请求结果返回-就可以发出下一次请求"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http-1-1-还允许客户端不用等待上一次请求结果返回-就可以发出下一次请求"}},[t._v("#")]),t._v(" HTTP 1.1 还允许客户端不用等待上一次请求结果返回，就可以发出下一次请求")]),t._v(" "),_("p",[t._v("但服务器端必须按照接收到客户端请求的先后顺序依次回送响应结果，以保证客户端能够区分出每次请求的响应内容，这样也显著地减少了整个下载过程所需要的时间。")]),t._v(" "),_("h4",{attrs:{id:"_5-消息传递"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-消息传递"}},[t._v("#")]),t._v(" 5）消息传递")]),t._v(" "),_("h5",{attrs:{id:"http-消息中可以包含任意长度的实体"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http-消息中可以包含任意长度的实体"}},[t._v("#")]),t._v(" HTTP 消息中可以包含任意长度的实体")]),t._v(" "),_("p",[t._v("通常它们使用 Content-Length 来给出消息结束标志。")]),t._v(" "),_("p",[t._v("但是，对于很多动 态产生的响应，只能通过缓冲完整的消息来判断消息的大小，但这样做会加大延迟。")]),t._v(" "),_("p",[t._v("如果不使用长连接，还可以通过连 接关闭的信号来判定一个消息的结束。")]),t._v(" "),_("h5",{attrs:{id:"http-1-1-中引入了-chunkedtransfer-coding-来解决上面这个问题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http-1-1-中引入了-chunkedtransfer-coding-来解决上面这个问题"}},[t._v("#")]),t._v(" HTTP/1.1 中引入了 Chunkedtransfer-coding 来解决上面这个问题")]),t._v(" "),_("p",[t._v("发送方将消息分割成若干个任意大小的数据块，每个数据块在发送时都会附上块的长度，最后用一个零长度的块作为消息结束的标志。")]),t._v(" "),_("p",[t._v("这种方法允许发送方只缓冲消息的一个片段，避免缓冲整个消息带来的过载。")]),t._v(" "),_("h5",{attrs:{id:"在-http-1-0-中-有一个-content-md5-的头域"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#在-http-1-0-中-有一个-content-md5-的头域"}},[t._v("#")]),t._v(" 在 HTTP/1.0 中，有一个 Content-MD5 的头域")]),t._v(" "),_("p",[t._v("要计算这个头域需要发送方缓冲完整个消息后才能进行。")]),t._v(" "),_("p",[t._v("而 HTTP/1.1 中，采用 chunked 分块传递的消息在最后一个块（零长度）结束之后会再传递一个拖尾（trailer），它包 含一个或多个头域，这些头域是发送方在传递完所有块之后再计算出值的。")]),t._v(" "),_("p",[t._v("发送方会在消息中包含一个 Trailer 头域告 诉接收方这个拖尾的存在。")]),t._v(" "),_("h4",{attrs:{id:"_6-host-头域"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-host-头域"}},[t._v("#")]),t._v(" 6）Host 头域")]),t._v(" "),_("h5",{attrs:{id:"在-http1-0-中认为每台服务器都绑定一个唯一的-ip-地址"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#在-http1-0-中认为每台服务器都绑定一个唯一的-ip-地址"}},[t._v("#")]),t._v(" 在 HTTP1.0 中认为每台服务器都绑定一个唯一的 IP 地址")]),t._v(" "),_("p",[t._v("因此，请求消息中的 URL 并没有传递主机名（hostname）。")]),t._v(" "),_("p",[t._v("但随着虚拟主机技术的发展，在一台物理服务器上可以存在多个虚拟主机（Multi-homed Web Servers），并且它们 共享一个 IP 地址。")]),t._v(" "),_("h5",{attrs:{id:"http1-1-的请求消息和响应消息都应支持-host-头域-且请求消息中如果没有-host-头域会报告一个错误-400-bad-request"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http1-1-的请求消息和响应消息都应支持-host-头域-且请求消息中如果没有-host-头域会报告一个错误-400-bad-request"}},[t._v("#")]),t._v(" HTTP1.1 的请求消息和响应消息都应支持 Host 头域，且请求消息中如果没有 Host 头域会报告一个错误（400 Bad Request）")]),t._v(" "),_("p",[t._v("此外，服务器应该接受以绝对路径标记的资源请求。")]),t._v(" "),_("h4",{attrs:{id:"_7-错误提示"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_7-错误提示"}},[t._v("#")]),t._v(" 7）错误提示")]),t._v(" "),_("h5",{attrs:{id:"http-1-0-中只定义了-16-个状态响应码-对错误或警告的提示不够具体"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http-1-0-中只定义了-16-个状态响应码-对错误或警告的提示不够具体"}},[t._v("#")]),t._v(" HTTP/1.0 中只定义了 16 个状态响应码，对错误或警告的提示不够具体")]),t._v(" "),_("p",[t._v("HTTP/1.1 引入了一个 Warning 头域， 增加对错误或警告信息的描述。")]),t._v(" "),_("h5",{attrs:{id:"http-1-1-中新增了-24-个状态响应码"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http-1-1-中新增了-24-个状态响应码"}},[t._v("#")]),t._v(" HTTP/1.1 中新增了 24 个状态响应码")]),t._v(" "),_("p",[_("strong",[t._v("如")]),t._v(" 409（Conflict）表示请求的资源与资源的当前状态发生冲突； 410（Gone）表示服务器上的某个资源被永久性的删除。")]),t._v(" "),_("h3",{attrs:{id:"_3、http-常见的状态码"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3、http-常见的状态码"}},[t._v("#")]),t._v(" 3、http 常见的状态码")]),t._v(" "),_("p",[_("strong",[t._v("200")]),t._v(" "),_("strong",[t._v("OK")])]),t._v(" "),_("p",[t._v("//客户端请求成功")]),t._v(" "),_("p",[_("strong",[t._v("301")]),t._v(" "),_("strong",[t._v("Moved Permanently")])]),t._v(" "),_("p",[t._v("//（永久移除)，请求的 URL 已移走。")]),t._v(" "),_("p",[t._v("Response 中应该包含一个 Location URL, 说明资 源现在所处的位置")]),t._v(" "),_("p",[_("strong",[t._v("302")]),t._v(" "),_("strong",[t._v("found")])]),t._v(" "),_("p",[t._v("//重定向")]),t._v(" "),_("p",[_("strong",[t._v("400")]),t._v(" "),_("strong",[t._v("Bad Request")])]),t._v(" "),_("p",[t._v("//客户端请求有语法错误，不能被服务器所理解")]),t._v(" "),_("p",[_("strong",[t._v("401 Unauthorized")])]),t._v(" "),_("p",[t._v("//请求未经授权，这个状态代码必须和 WWW-Authenticate 报头域一起使用")]),t._v(" "),_("p",[_("strong",[t._v("403 Forbidden")])]),t._v(" "),_("p",[t._v("//服务器收到请求，但是拒绝提供服务")]),t._v(" "),_("p",[_("strong",[t._v("404 Not Found")])]),t._v(" "),_("p",[t._v("//请求资源不存在，eg：输入了错误的 URL")]),t._v(" "),_("p",[_("strong",[t._v("500 Internal Server Error")])]),t._v(" "),_("p",[t._v("//服务器发生不可预期的错误")]),t._v(" "),_("p",[_("strong",[t._v("503 Server Unavailable")])]),t._v(" "),_("p",[t._v("//服务器当前不能处理客户端的请求，一段时间后可能恢复正常")]),t._v(" "),_("h3",{attrs:{id:"_4、get-和-post-的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4、get-和-post-的区别"}},[t._v("#")]),t._v(" 4、GET 和 POST 的区别")]),t._v(" "),_("h4",{attrs:{id:"_1-请求数据位置"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-请求数据位置"}},[t._v("#")]),t._v(" 1）请求数据位置")]),t._v(" "),_("h5",{attrs:{id:"get-请求的数据会附在-url-之后"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#get-请求的数据会附在-url-之后"}},[t._v("#")]),t._v(" GET 请求的数据会附在 URL 之后")]),t._v(" "),_("p",[t._v("就是把数据放置在 HTTP 协议头中，以 ? 分割 URL 和传输数据，参数之间以 & 相连，如：login.action?name=zhagnsan&password=123456。")]),t._v(" "),_("h5",{attrs:{id:"post-把提交的数据则放置在是-http-包的包体中。"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#post-把提交的数据则放置在是-http-包的包体中。"}},[t._v("#")]),t._v(" POST 把提交的数据则放置在是 HTTP 包的包体中。")]),t._v(" "),_("h4",{attrs:{id:"_2-get-方式提交的数据最多只能是-1024-字节-理论上-post-没有限制-可传较大量的数据"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-get-方式提交的数据最多只能是-1024-字节-理论上-post-没有限制-可传较大量的数据"}},[t._v("#")]),t._v(" 2）GET 方式提交的数据最多只能是 1024 字节，理论上 POST 没有限制，可传较大量的数据")]),t._v(" "),_("p",[t._v("其实这样说是"),_("strong",[t._v("错误的")]),t._v('，不准确的： “GET 方式提交的数据最多只能是 1024 字节"，因为 GET 是通过 URL 提交数据，那么 GET 可提交的数据量就跟 URL 的长度有直接关系了。')]),t._v(" "),_("p",[t._v("而实际上，URL 不存在参数上限的问题，HTTP 协议规范没有对 URL 长度进行限制。")]),t._v(" "),_("p",[t._v("这个限制是特定的浏览器及服务器对它的限制。")]),t._v(" "),_("p",[t._v("IE 对 URL 长度的限制是 2083 字节(2K+35)。")]),t._v(" "),_("p",[t._v("对于其他浏览器，如 Netscape、 FireFox 等，理论上没有长度限制，其限制取决于操作系统的支持。")]),t._v(" "),_("h4",{attrs:{id:"_3-post-的安全性要比-get-的安全性高"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-post-的安全性要比-get-的安全性高"}},[t._v("#")]),t._v(" 3）POST 的安全性要比 GET 的安全性高")]),t._v(" "),_("p",[t._v("注意：这里所说的安全性和上面 GET 提到的“安全”不是同个概念。")]),t._v(" "),_("p",[t._v("上面“安全”的含义仅仅是不作数据修改，而这里安全的含义是真正的 Security 的含义")]),t._v(" "),_("p",[t._v("比如：通过 GET 提交数据， 用 户名和密码将明文出现在 URL 上，因为")]),t._v(" "),_("p",[t._v("（1）登录页面有可能被浏览器缓存")]),t._v(" "),_("p",[t._v("（2）其他人查看浏览器的历史纪录，那 么别人就可以拿到你的账号和密码了，除此之外，使用 GET 提交数据还可能会造成 Cross-site request forgery 攻击。")]),t._v(" "),_("p",[t._v('Get 是向服务器发索取数据的一种请求，而 Post 是向服务器提交数据的一种请求，在 FORM（表单）中，Method 默认为"GET"，实质上，GET 和 POST 只是发送机制不同，并不是一个取一个发！')]),t._v(" "),_("p",[t._v("参考原文： https://www.cnblogs.com/hyddd/archive/2009/03/31/1426026.html")]),t._v(" "),_("h3",{attrs:{id:"_5、http-中重定向和请求转发的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5、http-中重定向和请求转发的区别"}},[t._v("#")]),t._v(" 5、http 中重定向和请求转发的区别？")]),t._v(" "),_("h4",{attrs:{id:"本质区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#本质区别"}},[t._v("#")]),t._v(" 本质区别")]),t._v(" "),_("p",[t._v("转发是服务器行为，重定向是客户端行为。")]),t._v(" "),_("h5",{attrs:{id:"重定向特点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#重定向特点"}},[t._v("#")]),t._v(" 重定向特点")]),t._v(" "),_("p",[t._v("两次请求，浏览器地址发生变化，可以访问 web 外的资源，传输数据会丢失。")]),t._v(" "),_("h5",{attrs:{id:"请求转发特点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#请求转发特点"}},[t._v("#")]),t._v(" 请求转发特点")]),t._v(" "),_("p",[t._v("一次请求，浏览器地址不变，访问的是自己本身的 web 资源，传输数据不会丢失。")])])}),[],!1,null,null,null);a.default=s.exports}}]);