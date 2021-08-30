(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{449:function(a,t,s){"use strict";s.r(t);var r=s(18),_=Object(r.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"javase语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#javase语法"}},[a._v("#")]),a._v(" JavaSE语法")]),a._v(" "),s("h3",{attrs:{id:"_1、goto"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、goto"}},[a._v("#")]),a._v(" 1、goto")]),a._v(" "),s("p",[a._v("java中没有 goto 语句，goto、const 为保留字")]),a._v(" "),s("h3",{attrs:{id:"_2、-和-的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、-和-的区别"}},[a._v("#")]),a._v(" 2、&和&&的区别")]),a._v(" "),s("p",[a._v("&：按位与；逻辑与。左右为 true 才为 true")]),a._v(" "),s("p",[a._v("&&：短路与运算。左右为 true 才为 true")]),a._v(" "),s("p",[a._v("&& 左边表达式为 false 的话后边直接短路。")]),a._v(" "),s("h3",{attrs:{id:"_3、跳出多重嵌套循环"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、跳出多重嵌套循环"}},[a._v("#")]),a._v(" 3、跳出多重嵌套循环")]),a._v(" "),s("p",[a._v("在最外层添加标记 A，break A ; 可以跳出多重循环。")]),a._v(" "),s("h3",{attrs:{id:"_4、hashcode与值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4、hashcode与值"}},[a._v("#")]),a._v(" 4、hashCode与值")]),a._v(" "),s("p",[a._v("两个对象值相等但是 hashCode 一定相等，两个对象 hashCode 相等值不一定相等。")]),a._v(" "),s("h3",{attrs:{id:"_5、是否可以继承-string"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5、是否可以继承-string"}},[a._v("#")]),a._v(" 5、是否可以继承 String")]),a._v(" "),s("p",[a._v("String 是 final 类")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("final")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("implements")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("io"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")])]),a._v("Serializable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Comparable")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("CharSequence")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("h3",{attrs:{id:"_6、值传递"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6、值传递"}},[a._v("#")]),a._v(" 6、值传递")]),a._v(" "),s("p",[a._v("​\t\t当一个对象被当作参数传递到一个方法后，此方法可改变这个对象的属性， 并 可返回变化后的结果，是值传递。")]),a._v(" "),s("p",[a._v("​\t\tJava 语言的方法调用只支持参数的值传递。当一个对象实例作为一个参数被传递到方法中时，参数的值就是对该对象的引用。对象的属性可以在被调用过程中被改变，但对对象引用的改变是不会影响到调用者的。")]),a._v(" "),s("h3",{attrs:{id:"_9、char能不能存汉字"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_9、char能不能存汉字"}},[a._v("#")]),a._v(" 9、char能不能存汉字")]),a._v(" "),s("p",[a._v("char 可以存储一个汉字，java使用 unicode 编码，一个 char 类型占两个字节（16比特），放一个中文没问题。")]),a._v(" "),s("p",[a._v("使用 unicode 意味在 jvm 内部和外部有不同表现形式，内部是 unicode ，在外部时需要编码转换。")]),a._v(" "),s("h3",{attrs:{id:"_10、抽象类与接口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_10、抽象类与接口"}},[a._v("#")]),a._v(" 10、抽象类与接口")]),a._v(" "),s("h4",{attrs:{id:"不同"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#不同"}},[a._v("#")]),a._v(" 不同")]),a._v(" "),s("h5",{attrs:{id:"抽象类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#抽象类"}},[a._v("#")]),a._v(" 抽象类")]),a._v(" "),s("p",[a._v("1、抽象类可以定义构造器")]),a._v(" "),s("p",[a._v("2、可以有抽象方法和具体方法")]),a._v(" "),s("p",[a._v("3、抽象类中成员可以是 private、默认、protected、 public")]),a._v(" "),s("p",[a._v("4、抽象类中可以定义成员变量")]),a._v(" "),s("p",[a._v("5、有抽象方法的类必须声明为抽象类，而抽象类未必要有抽象方法")]),a._v(" "),s("p",[a._v("6、抽象类中可以包含静态方法")]),a._v(" "),s("p",[a._v("7、一个类只能继承一个抽象类")]),a._v(" "),s("h5",{attrs:{id:"接口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#接口"}},[a._v("#")]),a._v(" 接口")]),a._v(" "),s("p",[a._v("1、接口中不能定义构造器")]),a._v(" "),s("p",[a._v("2、方法全为抽象方法")]),a._v(" "),s("p",[a._v("3、接口中成员全部是public")]),a._v(" "),s("p",[a._v("4、接口中定义的成员变量实际上都是常量")]),a._v(" "),s("p",[a._v("5、接口中不允许有静态方法")]),a._v(" "),s("p",[a._v("6、一个类中可以实现多个接口")]),a._v(" "),s("h4",{attrs:{id:"相同"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#相同"}},[a._v("#")]),a._v(" 相同")]),a._v(" "),s("p",[a._v("1.不能够实例化")]),a._v(" "),s("p",[a._v("2.可以将抽象类和接口类型作为引用类型")]),a._v(" "),s("p",[a._v("3.一个类如果继承了某个抽象类或者实现了某个接口都需要对其中的抽象方法"),s("strong",[a._v("全部进行实现")]),a._v("，否则该类仍然需要被声明为抽象类")]),a._v(" "),s("h3",{attrs:{id:"_11、抽象的方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_11、抽象的方法"}},[a._v("#")]),a._v(" 11、抽象的方法")]),a._v(" "),s("h4",{attrs:{id:"是否可以同时是静态的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#是否可以同时是静态的"}},[a._v("#")]),a._v(" 是否可以同时是静态的")]),a._v(" "),s("p",[a._v("不能，抽象方法需要子类重写，静态方法无法被重写。")]),a._v(" "),s("h4",{attrs:{id:"是否可同时是本地方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#是否可同时是本地方法"}},[a._v("#")]),a._v(" 是否可同时是本地方法")]),a._v(" "),s("p",[a._v("本地方法是由本地代码实现的方法，而抽象方法是没有实现的。")]),a._v(" "),s("h4",{attrs:{id:"是否可同时被synchronized"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#是否可同时被synchronized"}},[a._v("#")]),a._v(" 是否可同时被synchronized")]),a._v(" "),s("p",[a._v("synchronized和方法的实现细节有关，抽象方法不涉及实现细节。")]),a._v(" "),s("h3",{attrs:{id:"_12、静态变量和实例变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_12、静态变量和实例变量"}},[a._v("#")]),a._v(" 12、静态变量和实例变量")]),a._v(" "),s("h4",{attrs:{id:"静态变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#静态变量"}},[a._v("#")]),a._v(" 静态变量")]),a._v(" "),s("p",[a._v("被static修饰的变量也叫类变量。属于类，不属于类的任何一个对象，不管这个类创建多少个对象，静态变量在内存中有且仅有一个拷贝。")]),a._v(" "),s("p",[a._v("静态变量可以实现让多个对象共享内存。")]),a._v(" "),s("h4",{attrs:{id:"实例变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实例变量"}},[a._v("#")]),a._v(" 实例变量")]),a._v(" "),s("p",[a._v("必须依存于某一实例，需要先创建对象然后通过对象才能访问到它。")]),a._v(" "),s("h3",{attrs:{id:"_13、-和-equals-的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_13、-和-equals-的区别"}},[a._v("#")]),a._v(" 13、== 和 equals 的区别")]),a._v(" "),s("p",[a._v("== 是运算符，equals 是方法")]),a._v(" "),s("p",[a._v("== 若比较基本类型比较数值是否相同，比较对象比较地址是否相同")]),a._v(" "),s("p",[a._v("equals 比较对象内容是否相同")]),a._v(" "),s("h3",{attrs:{id:"_14、break-和-continue-的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_14、break-和-continue-的区别"}},[a._v("#")]),a._v(" 14、break 和 continue 的区别")]),a._v(" "),s("p",[a._v("break 和 continue 都是控制循环的语句")]),a._v(" "),s("p",[a._v("break 用来结束循环，跳出循环执行循环外的语句")]),a._v(" "),s("p",[a._v("continue 执行后跳出此次循环，执行下次循环")])])}),[],!1,null,null,null);t.default=_.exports}}]);