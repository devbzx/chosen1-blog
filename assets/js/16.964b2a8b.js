(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{450:function(s,a,t){"use strict";t.r(a);var n=t(18),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"方法介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方法介绍"}},[s._v("#")]),s._v(" 方法介绍")]),s._v(" "),t("ol",[t("li",[s._v("启动MongoDB服务（禁用访问权限控制）")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("mongod --port "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("27017")]),s._v(" --dbpath d:/file/mongo\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("连接至MongoDB实例")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("mongo --port "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("27017")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"3"}},[t("li",[s._v("添加管理员账号")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("use admin\ndb.createUser"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("user: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"username1"')]),s._v(", pwd: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"123456"')]),s._v(", roles: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("role: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"userAdminAnyDatabase"')]),s._v(", db: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"admin"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("ol",{attrs:{start:"4"}},[t("li",[s._v("重启MongoDB实例，并启用访问权限控制")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("mongod --auth --port "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("27017")]),s._v(" --dbpath d:/file/mongo\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"5"}},[t("li",[s._v("连接至MongoDB实例")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("mongo --port "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("27017")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"6"}},[t("li",[s._v("切换至admin库，并登陆")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("use admin\ndb.auth"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"username1"')]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"123456"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("ol",{attrs:{start:"7"}},[t("li",[s._v("添加普通用户账号")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("use dbName\ndb.createUser"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("user: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"username2"')]),s._v(", pwd: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"123456"')]),s._v(", roles: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("role: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"readWrite"')]),s._v(", db: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dbName"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("ol",{attrs:{start:"8"}},[t("li",[s._v("使用普通用户账号登陆")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("mongo --port "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("27017")]),s._v("\nuse dbName\ndb.auth"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"username2"')]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"123456"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("ol",{attrs:{start:"9"}},[t("li",[t("strong",[t("em",[s._v("切记")])]),s._v(" 登陆或创建mongo连接实例的时候需要用创建的普通账户及其所在数据库的名字")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("mongodb://username2:123456@host:port/dbName'\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("个人博客："),t("a",{attrs:{href:"http://recoluan.gitlab.io",target:"_blank",rel:"noopener noreferrer"}},[t("strong",[s._v("午后南杂")]),t("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);