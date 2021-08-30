(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{505:function(t,a,e){"use strict";e.r(a);var r=e(13),s=Object(r.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"_1、java中异常类分为哪些种类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、java中异常类分为哪些种类"}},[t._v("#")]),t._v(" 1、java中异常类分为哪些种类")]),t._v(" "),e("h3",{attrs:{id:"_1-按异常需要处理的时机分为"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-按异常需要处理的时机分为"}},[t._v("#")]),t._v(" 1）按异常需要处理的时机分为")]),t._v(" "),e("p",[t._v("编译时异常（也叫强制性异常）也叫 CheckedException。")]),t._v(" "),e("p",[t._v("运行时异常（也叫非强制性异常）也叫 RuntimeException。")]),t._v(" "),e("h4",{attrs:{id:"checked异常处理方法有两种"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#checked异常处理方法有两种"}},[t._v("#")]),t._v(" Checked异常处理方法有两种：")]),t._v(" "),e("h5",{attrs:{id:"_1-当前方法知道如何处理该异常"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-当前方法知道如何处理该异常"}},[t._v("#")]),t._v(" 1 当前方法知道如何处理该异常")]),t._v(" "),e("p",[t._v("则用 try...catch 块来处理该异常。")]),t._v(" "),e("h5",{attrs:{id:"_2-当前方法不知道如何处理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-当前方法不知道如何处理"}},[t._v("#")]),t._v(" 2 当前方法不知道如何处理")]),t._v(" "),e("p",[t._v("则在定义该方法时声明抛出该异常。运行时异常只有当前代码在运行时才发生的异常，编译时不需要 try catch。")]),t._v(" "),e("h4",{attrs:{id:"runtime-异常"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#runtime-异常"}},[t._v("#")]),t._v(" Runtime 异常")]),t._v(" "),e("p",[t._v("如除数是 0 和数组下标越界等，其产生频繁，处理麻烦，若显示申明或者捕获将会对程序的可读性和运行效率影响很大。")]),t._v(" "),e("p",[t._v("所以由系统自动检测并将它们交给缺省的异常处理程序。当然如果你有处理要求 也可以显示捕获它们。")]),t._v(" "),e("h2",{attrs:{id:"_2、error-和-exception-的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、error-和-exception-的区别"}},[t._v("#")]),t._v(" 2、Error 和 Exception 的区别")]),t._v(" "),e("p",[t._v("父类都是 Throwable")]),t._v(" "),e("h3",{attrs:{id:"区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#区别"}},[t._v("#")]),t._v(" 区别")]),t._v(" "),e("p",[t._v("Error 类一般是指与虚拟机相关的问题，如系统崩溃，虚拟机错误，内存空间不足，方法调用栈溢出等。对于这类 错误的导致的应用程序中断，仅靠程序本身无法恢复和和预防，遇到这样的错误，建议让程序终止。")]),t._v(" "),e("p",[t._v("Exception 类表示程序可以处理的异常，可以捕获并且可能恢复。遇到此类异常，应尽可能处理异常，使程序恢复运行，而不是随意终止异常。")]),t._v(" "),e("h3",{attrs:{id:"exception-类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#exception-类"}},[t._v("#")]),t._v(" Exception 类")]),t._v(" "),e("h4",{attrs:{id:"运行时异常-runtime-exception"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#运行时异常-runtime-exception"}},[t._v("#")]),t._v(" 运行时异常（Runtime Exception）")]),t._v(" "),e("p",[t._v("ArithmaticException,IllegalArgumentException，编译能通过，但是一运行就终止了，程序不会处理运行时异常， 出现这类异常，程序会终止")]),t._v(" "),e("h4",{attrs:{id:"受检查的异常-checked-exception"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#受检查的异常-checked-exception"}},[t._v("#")]),t._v(" 受检查的异常(Checked Exception )")]),t._v(" "),e("p",[t._v("要么用 try。。。catch 捕获，要么用 throws 字句声明抛出，交给它 的父类处理，否则编译不会通过。")]),t._v(" "),e("h2",{attrs:{id:"_3、java异常处理机制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3、java异常处理机制"}},[t._v("#")]),t._v(" 3、java异常处理机制")]),t._v(" "),e("p",[t._v("java对异常进行了分类，不同异常用不同的java类表示，所有异常的根类为java.lang.Throwable。")]),t._v(" "),e("h3",{attrs:{id:"java为系统异常和普通异常提供了不同的解决方案"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#java为系统异常和普通异常提供了不同的解决方案"}},[t._v("#")]),t._v(" Java为系统异常和普通异常提供了不同的解决方案")]),t._v(" "),e("h4",{attrs:{id:"普通异常"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#普通异常"}},[t._v("#")]),t._v(" 普通异常")]),t._v(" "),e("p",[t._v("编译器强制普通异常必须try ... catch处理或用throws声明继续抛给上层调用方法处理，所以普通异常也称为checked异常")]),t._v(" "),e("h4",{attrs:{id:"系统异常"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#系统异常"}},[t._v("#")]),t._v(" 系统异常")]),t._v(" "),e("p",[t._v("可以处理也可以不处理")]),t._v(" "),e("h2",{attrs:{id:"_4、常见的runtimeexception"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4、常见的runtimeexception"}},[t._v("#")]),t._v(" 4、常见的RuntimeException")]),t._v(" "),e("p",[t._v("nullpointer、classnotfound、indexoutofbounds、classcast、numberformat、illegalargument、sql、nosuchmethod、noclassdeffound（本人速记）")]),t._v(" "),e("h3",{attrs:{id:"_1-nullpointerexception"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-nullpointerexception"}},[t._v("#")]),t._v(" 1）NullPointerException")]),t._v(" "),e("p",[t._v("​\t\tjava.lang.NullPointerException空指针异常：出现原因：调用了未经初始化的对象或者是不存在的对象。")]),t._v(" "),e("h3",{attrs:{id:"_2-classnotfoundexception"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-classnotfoundexception"}},[t._v("#")]),t._v(" 2）ClassNotFoundException")]),t._v(" "),e("p",[t._v("​\t\tjava.lang.ClassNotFoundException指定的类找不到：出现原因：类的名称和路径加载错误；通常都是程序 试图通过字符串\t来加载某个类时可能引发异常。")]),t._v(" "),e("h3",{attrs:{id:"_3-numberformatexception"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-numberformatexception"}},[t._v("#")]),t._v(" 3）NumberFormatException")]),t._v(" "),e("p",[t._v("​\t\tjava.lang.NumberFormatException字符串转换为数字异常：出现原因：字符型数据中包含非数字型字符。")]),t._v(" "),e("h3",{attrs:{id:"_4-indexoutofboundsexception"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-indexoutofboundsexception"}},[t._v("#")]),t._v(" 4）IndexOutOfBoundsException")]),t._v(" "),e("p",[t._v("​\t\tjava.lang.IndexOutOfBoundsException数组角标越界异常：常见于操作数组对象时发生。")]),t._v(" "),e("h3",{attrs:{id:"_5-illegalargumentexception"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-illegalargumentexception"}},[t._v("#")]),t._v(" 5）IllegalArgumentException")]),t._v(" "),e("p",[t._v("​\t\tjava.lang.IllegalArgumentException方法传递参数错误。")]),t._v(" "),e("h3",{attrs:{id:"_6-classcastexception"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-classcastexception"}},[t._v("#")]),t._v(" 6）ClassCastException")]),t._v(" "),e("p",[t._v("​\t\tjava.lang.ClassCastException数据类型转换异常。")]),t._v(" "),e("h3",{attrs:{id:"_7-noclassdeffoundexception"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-noclassdeffoundexception"}},[t._v("#")]),t._v(" 7）NoClassDefFoundException")]),t._v(" "),e("p",[t._v("​\t\tjava.lang.NoClassDefFoundException未找到类定义错误。")]),t._v(" "),e("h3",{attrs:{id:"_8-sqlexception"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8-sqlexception"}},[t._v("#")]),t._v(" 8）SQLException")]),t._v(" "),e("p",[t._v("​\t\tSQL 异常，常见于操作数据库时的 SQL 语句错误。")]),t._v(" "),e("h3",{attrs:{id:"_9-instantiationexception"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9-instantiationexception"}},[t._v("#")]),t._v(" 9） InstantiationException")]),t._v(" "),e("p",[t._v("​\t\t java.lang.InstantiationException实例化异常。")]),t._v(" "),e("h3",{attrs:{id:"_10-nosuchmethodexception"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_10-nosuchmethodexception"}},[t._v("#")]),t._v(" 10）NoSuchMethodException")]),t._v(" "),e("p",[t._v("​\t\tjava.lang.NoSuchMethodException方法不存在异常。")]),t._v(" "),e("h2",{attrs:{id:"_5、throw和throws的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5、throw和throws的区别"}},[t._v("#")]),t._v(" 5、throw和throws的区别")]),t._v(" "),e("h3",{attrs:{id:"throw"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#throw"}},[t._v("#")]),t._v(" throw")]),t._v(" "),e("p",[t._v("1）throw 语句用在方法体内，表示抛出异常，由方法体内的语句处理。")]),t._v(" "),e("p",[t._v("2）throw 是具体向外抛出异常的动作，所以它抛出的是一个异常实例，执行 throw 一定是抛出了某种异常。")]),t._v(" "),e("h3",{attrs:{id:"throws"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#throws"}},[t._v("#")]),t._v(" throws")]),t._v(" "),e("p",[t._v("1）throws 语句是用在方法声明后面，表示如果抛出异常，由该方法的调用者来进行异常的处理。")]),t._v(" "),e("p",[t._v("2）throws 主要声明这个方法会抛出某种类型的异常，让它的使用者知道需要捕获的异常的类型。")]),t._v(" "),e("p",[t._v("3）throws 表示出现异常的一种可能性，并不一定会发生这种异常。")]),t._v(" "),e("h2",{attrs:{id:"_6、final、finally、finalize-的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6、final、finally、finalize-的区别"}},[t._v("#")]),t._v(" 6、final、finally、finalize 的区别")]),t._v(" "),e("h3",{attrs:{id:"_1-final"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-final"}},[t._v("#")]),t._v(" 1）final")]),t._v(" "),e("p",[t._v("用于声明属性、方法和类，分别表示属性不可变，方法不可覆盖，被其修饰的类不可继承。")]),t._v(" "),e("h3",{attrs:{id:"_2-finally"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-finally"}},[t._v("#")]),t._v(" 2）finally")]),t._v(" "),e("p",[t._v("异常处理语句结构的一部分，表示总是执行")]),t._v(" "),e("h3",{attrs:{id:"_3-finalize"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-finalize"}},[t._v("#")]),t._v(" 3）finalize")]),t._v(" "),e("p",[t._v("Object 类的一个方法，垃圾回收器执行时会调用被回收对象的此方法，可以覆盖此方法提供垃圾收集时的其他资源回收（关闭文件等）。当该方法被调用则代表该对象即将”死亡“，这是个被动方法，不需要我们调用。")])])}),[],!1,null,null,null);a.default=s.exports}}]);