(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{518:function(t,_,a){"use strict";a.r(_);var v=a(13),r=Object(v.a)({},(function(){var t=this,_=t.$createElement,a=t._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"jvm-垃圾回收机制和常见算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jvm-垃圾回收机制和常见算法"}},[t._v("#")]),t._v(" JVM 垃圾回收机制和常见算法")]),t._v(" "),a("p",[t._v("GC（Garbage Collector）在回收对象前首先必须发现那些无用对象")]),t._v(" "),a("h3",{attrs:{id:"_1、定位无用对象的搜索算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、定位无用对象的搜索算法"}},[t._v("#")]),t._v(" 1、定位无用对象的搜索算法")]),t._v(" "),a("h4",{attrs:{id:"_1-引用计数器算法-废弃"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-引用计数器算法-废弃"}},[t._v("#")]),t._v(" "),a("s",[t._v("1）引用计数器算法（废弃）")])]),t._v(" "),a("p",[t._v("给每个对象设置一个计数器，当有地方引用这个对象的时候，计数器 +1，当引用失效的时候，计数器 -1，当计数器为 0 的时候，成为垃圾。")]),t._v(" "),a("p",[t._v("引用计数器实现简单，效率高；但是不能解决循环依赖问题（A 对象引用 B 对象，B 对象又引用 A 对象，但是 A,B 对象已不被任何其他对象引用），同时每次计数器的增加和较少都带来了很多额外的开销，所以 JDK 1.1 以后这个算法就不再使用了。")]),t._v(" "),a("h4",{attrs:{id:"_2-根搜索算法-使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-根搜索算法-使用"}},[t._v("#")]),t._v(" 2）根搜索算法（使用）")]),t._v(" "),a("p",[t._v("根搜索算法是通过一些“GC Roots”对象作为起点，从这些节点开始往下搜索，搜索"),a("strong",[t._v("通过的路径成为引用链")]),t._v(" （Reference Chain），当一个对象"),a("strong",[t._v("没有被 GC Roots 的引用链连接的时候")]),t._v("，说明这个对象是"),a("strong",[t._v("不可用")]),t._v("的。")]),t._v(" "),a("h5",{attrs:{id:"gc-roots-对象包括"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gc-roots-对象包括"}},[t._v("#")]),t._v(" GC Roots 对象包括")]),t._v(" "),a("p",[t._v("a) 虚拟机栈（栈帧中的本地变量表）中的引用的对象。")]),t._v(" "),a("p",[t._v("b) 方法区域中的类静态属性引用的对象。")]),t._v(" "),a("p",[t._v("c) 方法区域中常量引用的对象。")]),t._v(" "),a("p",[t._v("d) 本地方法栈中 JNI（Native 方法）的引用的对象。")]),t._v(" "),a("p",[t._v("通过上面的算法搜索到无用对象之后，就是回收过程，")]),t._v(" "),a("h3",{attrs:{id:"_2、回收算法如下"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、回收算法如下"}},[t._v("#")]),t._v(" 2、回收算法如下")]),t._v(" "),a("h4",{attrs:{id:"_1-标记-清除算法-mark-sweep"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-标记-清除算法-mark-sweep"}},[t._v("#")]),t._v(" 1）标记 - 清除算法（Mark - Sweep）")]),t._v(" "),a("p",[t._v("（DVM 使用的算法）")]),t._v(" "),a("p",[t._v('分为两个阶段："标记" 和 "清除"。')]),t._v(" "),a("h5",{attrs:{id:"标记阶段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#标记阶段"}},[t._v("#")]),t._v(" 标记阶段")]),t._v(" "),a("p",[t._v("确定要回收的对象，并做标记")]),t._v(" "),a("h5",{attrs:{id:"清除阶段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#清除阶段"}},[t._v("#")]),t._v(" 清除阶段")]),t._v(" "),a("p",[t._v("紧随标记阶段，将标记阶段确定不可用的对象清除。")]),t._v(" "),a("p",[t._v("标记—清除算法是基础的收集算法，标记和清除阶段的效率不高， 而且清除后回产生大量的不连续空间，这样当程序需要分配大内存对象时，可能无法找到足够的连续空间。")]),t._v(" "),a("h4",{attrs:{id:"_2-复制算法-copying"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-复制算法-copying"}},[t._v("#")]),t._v(" 2）复制算法（Copying）")]),t._v(" "),a("p",[t._v("复制算法是把"),a("strong",[t._v("内存分成大小相等的两块")]),t._v("，每次使用其中一块，当垃圾回收的时候，"),a("strong",[t._v("把存活的对象复制到另一块上")]),t._v("， 然后把这块内存整个清理掉。")]),t._v(" "),a("p",[t._v("复制算法实现简单，运行效率高，但是由于每次只能使用其中的一半，造成内存的利用率不高。")]),t._v(" "),a("p",[t._v("现在的 JVM 用复制方法收集新生代，由于新生代中大部分对象（98%）都是朝生夕死的，所以两块内存的比例 不是 1:1(大概是 8:1)。")]),t._v(" "),a("h4",{attrs:{id:"_3-标记整理算法-mark-compact"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-标记整理算法-mark-compact"}},[t._v("#")]),t._v(" 3）标记整理算法（Mark - Compact）")]),t._v(" "),a("p",[t._v("标记—整理算法和标记—清除算法一样，但是标记—整理算法不是把存活对象复制到另一块内存，而是"),a("strong",[t._v("把存活对象往内存的一端移动")]),t._v("，然后"),a("strong",[t._v("直接回收边界以外的内存")]),t._v("。")]),t._v(" "),a("p",[t._v("标记—整理算法提高了内存的利用率，并且它"),a("strong",[t._v("适合在收集对象存活时间较长的老年代")]),t._v("。")]),t._v(" "),a("h4",{attrs:{id:"_4-分代收集-generational-collection"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-分代收集-generational-collection"}},[t._v("#")]),t._v(" 4）分代收集（Generational Collection）")]),t._v(" "),a("p",[t._v("分代收集是根据对象的存活时间把内存分为新生代和老年代，根据各个代对象的存活特点，每个代采用不同的垃圾回收算法。")]),t._v(" "),a("p",[t._v("新生代采用复制算法，")]),t._v(" "),a("p",[t._v("老年代采用标记—整理算法。")]),t._v(" "),a("p",[t._v("垃圾算法的实现涉及大量的程序细节，而且不同的虚拟机平台实现的方法也各不相同。")])])}),[],!1,null,null,null);_.default=r.exports}}]);