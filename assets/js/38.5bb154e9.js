(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{467:function(s,e,o){"use strict";o.r(e);var t=o(18),a=Object(t.a)({},(function(){var s=this,e=s.$createElement,o=s._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[o("h2",{attrs:{id:"cookie-和-session"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cookie-和-session"}},[s._v("#")]),s._v(" Cookie 和 Session")]),s._v(" "),o("h3",{attrs:{id:"_1、cookie-和-session-的区别"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1、cookie-和-session-的区别"}},[s._v("#")]),s._v(" 1、Cookie 和 Session 的区别")]),s._v(" "),o("h4",{attrs:{id:"cookie"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cookie"}},[s._v("#")]),s._v(" Cookie")]),s._v(" "),o("p",[s._v("是 web 服务器发送给浏览器的一块信息。")]),s._v(" "),o("p",[s._v("浏览器会在本地一个文件中给每个 web 服务器存储 cookie。")]),s._v(" "),o("p",[s._v("以后浏览器再给特定的 web 服务器发送请求时，同时会发送所有为该服务器存储的 cookie。")]),s._v(" "),o("h4",{attrs:{id:"session"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#session"}},[s._v("#")]),s._v(" Session")]),s._v(" "),o("p",[s._v("是存储在 web 服务器端的一块信息。")]),s._v(" "),o("p",[s._v("session 对象存储特定用户会话所需的属性及配置信息。")]),s._v(" "),o("p",[s._v("当用户在 应用程序的 Web 页之间跳转时，存储在 Session 对象中的变量将不会丢失，而是在整个用户会话中一直存在下去。")]),s._v(" "),o("h4",{attrs:{id:"cookie-和-session-的不同点"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cookie-和-session-的不同点"}},[s._v("#")]),s._v(" Cookie 和 Session 的不同点")]),s._v(" "),o("h5",{attrs:{id:"_1-无论客户端做怎样的设置"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-无论客户端做怎样的设置"}},[s._v("#")]),s._v(" 1）无论客户端做怎样的设置")]),s._v(" "),o("p",[s._v("session 都能够正常工作。当客户端禁用 cookie 时将无法使用 cookie。")]),s._v(" "),o("h5",{attrs:{id:"_2-在存储的数据量方面"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_2-在存储的数据量方面"}},[s._v("#")]),s._v(" 2）在存储的数据量方面")]),s._v(" "),o("p",[s._v("session 能够存储"),o("strong",[s._v("任意的 java 对象")]),s._v("，cookie 只能存储 "),o("strong",[s._v("String")]),s._v(" 类型的对象。")]),s._v(" "),o("h3",{attrs:{id:"_2、session-共享怎么做-分布式如何实现-session-共享-待写"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_2、session-共享怎么做-分布式如何实现-session-共享-待写"}},[s._v("#")]),s._v(" 2、session 共享怎么做（分布式如何实现 session 共享）？（待写）")]),s._v(" "),o("p",[s._v("session 复制 + 维护在客户端")]),s._v(" "),o("h3",{attrs:{id:"_3、在单点登录中-如果-cookie-被禁用了怎么办"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_3、在单点登录中-如果-cookie-被禁用了怎么办"}},[s._v("#")]),s._v(" 3、在单点登录中，如果 cookie 被禁用了怎么办？")]),s._v(" "),o("h4",{attrs:{id:"单点登录的原理"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#单点登录的原理"}},[s._v("#")]),s._v(" 单点登录的原理")]),s._v(" "),o("p",[s._v("后端生成一个 session ID，然后设置到 cookie，后面的所有请求浏览器都会带上 cookie， 然后服务端从 cookie 里获取 session ID，再查询到用户信息。")]),s._v(" "),o("h4",{attrs:{id:"被禁用的解决方法"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#被禁用的解决方法"}},[s._v("#")]),s._v(" 被禁用的解决方法")]),s._v(" "),o("p",[s._v("保持登录的关键不是 cookie，而是通过 cookie 保存和传输的 session ID，其本质是能获取用户信息的数据。")]),s._v(" "),o("p",[s._v("除了 cookie，还通常使用 HTTP 请求头来传输。")]),s._v(" "),o("p",[s._v("但是这个请求头浏览器不会像 cookie 一样自动携带，需要手工处理。")])])}),[],!1,null,null,null);e.default=a.exports}}]);