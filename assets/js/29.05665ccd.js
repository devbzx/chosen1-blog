(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{460:function(a,s,t){"use strict";t.r(s);var n=t(18),r=Object(n.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"java-中的动态代理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java-中的动态代理"}},[a._v("#")]),a._v(" java 中的动态代理")]),a._v(" "),t("h3",{attrs:{id:"_1、写一个-arraylist-的动态代理类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、写一个-arraylist-的动态代理类"}},[a._v("#")]),a._v(" 1、写一个 ArrayList 的动态代理类")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ArrayListProxy")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" args"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("final")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("List")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" list "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ArrayList")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("List")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" proxyInstance "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" \n                "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("List")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Proxy")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("newProxyInstance")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n                        list"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("getClass")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("getClassLoader")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n                        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" list"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("getClass")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("getInterfaces")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n                        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("InvocationHandler")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n                            "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Override")]),a._v(" \n                            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Object")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("invoke")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Object")]),a._v(" proxy"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Method")]),a._v(" method"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Object")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" args"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("throws")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Throwable")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" \n                                "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" method"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("invoke")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("list"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" args"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" \n                            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n                        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        proxyInstance"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"你好"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("list"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br"),t("span",{staticClass:"line-number"},[a._v("16")]),t("br"),t("span",{staticClass:"line-number"},[a._v("17")]),t("br")])]),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"D:\\Program Files\\Java\\jdk1.8.0_201\\bin\\java.exe"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"-javaagent:D:\\Program Files\\JetBrains\\IntelliJ IDEA 2020.2.1\\lib\\idea_rt.jar=55036:D:\\Program Files\\JetBrains\\IntelliJ IDEA 2020.2.1\\bin"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Dfile")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("encoding"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("UTF"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("8")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("classpath "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"D:\\Program Files\\Java\\jdk1.8.0_201\\jre\\lib\\charsets.jar;D:\\Program Files\\Java\\jdk1.8.0_201\\jre\\lib\\deploy.jar;D:\\Program Files\\Java\\jdk1.8.0_201\\jre\\lib\\ext\\access-bridge-64.jar;D:\\Program Files\\Java\\jdk1.8.0_201\\jre\\lib\\ext\\cldrdata.jar;D:\\Program Files\\Java\\jdk1.8.0_201\\jre\\lib\\ext\\dnsns.jar;D:\\Program Files\\Java\\jdk1.8.0_201\\jre\\lib\\ext\\jaccess.jar;D:\\Program Files\\Java\\jdk1.8.0_201\\jre\\lib\\ext\\jfxrt.jar;D:\\Program Files\\Java\\jdk1.8.0_201\\jre\\lib\\ext\\localedata.jar;D:\\Program Files\\Java\\jdk1.8.0_201\\jre\\lib\\ext\\nashorn.jar;D:\\Program Files\\Java\\jdk1.8.0_201\\jre\\lib\\ext\\sunec.jar;D:\\Program Files\\Java\\jdk1.8.0_201\\jre\\lib\\ext\\sunjce_provider.jar;D:\\Program Files\\Java\\jdk1.8.0_201\\jre\\lib\\ext\\sunmscapi.jar;D:\\Program Files\\Java\\jdk1.8.0_201\\jre\\lib\\ext\\sunpkcs11.jar;D:\\Program Files\\Java\\jdk1.8.0_201\\jre\\lib\\ext\\zipfs.jar;D:\\Program Files\\Java\\jdk1.8.0_201\\jre\\lib\\javaws.jar;D:\\Program Files\\Java\\jdk1.8.0_201\\jre\\lib\\jce.jar;D:\\Program Files\\Java\\jdk1.8.0_201\\jre\\lib\\jfr.jar;D:\\Program Files\\Java\\jdk1.8.0_201\\jre\\lib\\jfxswt.jar;D:\\Program Files\\Java\\jdk1.8.0_201\\jre\\lib\\jsse.jar;D:\\Program Files\\Java\\jdk1.8.0_201\\jre\\lib\\management-agent.jar;D:\\Program Files\\Java\\jdk1.8.0_201\\jre\\lib\\plugin.jar;D:\\Program Files\\Java\\jdk1.8.0_201\\jre\\lib\\resources.jar;D:\\Program Files\\Java\\jdk1.8.0_201\\jre\\lib\\rt.jar;D:\\code\\java\\javamdcode\\out\\production\\javamdcode"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[t("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("lhq"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("java"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")])]),a._v("ArrayListProxy")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("你好"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Process")]),a._v(" finished "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("with")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("exit")]),a._v(" code "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br")])]),t("h3",{attrs:{id:"_2、动静态代理的区别-什么场景使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、动静态代理的区别-什么场景使用"}},[a._v("#")]),a._v(" 2、动静态代理的区别，什么场景使用？")]),a._v(" "),t("h4",{attrs:{id:"静态代理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#静态代理"}},[a._v("#")]),a._v(" 静态代理")]),a._v(" "),t("p",[a._v("静态代理通常只代理一个类，动态代理是代理一个接口下的多个实现类。")]),a._v(" "),t("p",[a._v("静态代理事先要知道代理的是什么。")]),a._v(" "),t("h4",{attrs:{id:"动态代理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#动态代理"}},[a._v("#")]),a._v(" 动态代理")]),a._v(" "),t("p",[a._v("动态代理不知道要代理什么东西，只有在运行时才知道。")]),a._v(" "),t("p",[a._v("动态代理是实现 JDK 里的 InvocationHandler 接口的 invoke 方法，但注意的是代理的是接口，也就是业务类必须要实现的接口，通过 Proxy 里的 newProxyinstance 得到代理的对象。")]),a._v(" "),t("p",[a._v("还有一种动态代理 CGLIB，代理的是类，不需要业务类继承接口，通过派生的子类来实现代理。通过在运行时，动态修改字节码达到修改类的目的。")]),a._v(" "),t("p",[a._v("AOP 编程时基于动态代理实现的。")])])}),[],!1,null,null,null);s.default=r.exports}}]);