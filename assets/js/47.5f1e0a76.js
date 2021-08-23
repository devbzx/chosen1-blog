(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{484:function(t,_,r){"use strict";r.r(_);var v=r(18),a=Object(v.a)({},(function(){var t=this,_=t.$createElement,r=t._self._c||_;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("p",[t._v("事务的隔离级别定义一个事务可能受其他并发务活动活动影响的程度，可以把事务的隔离级别想象为这个事务对于事物\n处理数据的自私程度。")]),t._v(" "),r("p",[t._v("在一个典型的应用程序中，多个事务同时运行，经常会为了完成他们的工作而操作同一个数据。并发虽然是必需的，但是会导致以下问题：")]),t._v(" "),r("h2",{attrs:{id:"脏读-dirty-read"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#脏读-dirty-read"}},[t._v("#")]),t._v(" 脏读（Dirty read）")]),t._v(" "),r("p",[t._v("脏读发生在一个事务读取了被另一个事务改写但尚未提交的数据时。如果这些改变在稍后被回滚了，那么第一个事务读取的数据就会是无效的。")]),t._v(" "),r("h2",{attrs:{id:"不可重复读-nonrepeatable-read"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#不可重复读-nonrepeatable-read"}},[t._v("#")]),t._v(" 不可重复读（Nonrepeatable read）")]),t._v(" "),r("p",[t._v("不可重复读发生在一个事务执行相同的查询两次或两次以上，但每次查询结果都不相同时。这通常是由于另一个并发事务在两次查询之间更新了数据。")]),t._v(" "),r("p",[r("strong",[t._v("不可重复读重点在修改")]),t._v("。")]),t._v(" "),r("h2",{attrs:{id:"幻读-phantom-reads"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#幻读-phantom-reads"}},[t._v("#")]),t._v(" 幻读（Phantom reads）")]),t._v(" "),r("p",[t._v("幻读和不可重复读相似。当一个事务（T1）读取几行记录后，另一个并发事务（T2）插入了一些记录时，幻读就发生了。在后来的查询中，第一个事务（T1）就会发现一些原来没有的额外记录。")]),t._v(" "),r("p",[r("strong",[t._v("幻读重点在新增或删除")]),t._v("。")]),t._v(" "),r("p",[t._v("在理想状态下，事务之间将完全隔离，从而可以防止这些问题发生。然而，完全隔离会影响性能，因为隔离经常涉及到锁定在数据库中的记录（甚至有时是锁表）。完全隔离要求事务相互等待来完成工作，会阻碍并发。因此，可以根据业务场景选择不同的隔离级别。")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[r("strong",[t._v("隔离级别")])]),t._v(" "),r("th",[r("strong",[t._v("含义")])])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("ISOLATION_DEFAULT")]),t._v(" "),r("td",[t._v("使用后端数据库默认的隔离级别")])]),t._v(" "),r("tr",[r("td",[t._v("ISOLATION_READ_UNCOMMITTED")]),t._v(" "),r("td",[t._v("允许读取尚未提交的更改。可能导致脏读、幻读或不可重复读。")])]),t._v(" "),r("tr",[r("td",[t._v("ISOLATION_READ_COMMITTED")]),t._v(" "),r("td",[t._v("（Oracle 默认级别）允许从已经提交的并发事务读取。可防止脏读，但幻读和不可重复读仍可能会发生。")])]),t._v(" "),r("tr",[r("td",[t._v("ISOLATION_REPEATABLE_READ")]),t._v(" "),r("td",[t._v("（MYSQL默认级别）对相同字段的多次读取的结果是一致的，除非数据被当前事务本身改变。可防止脏读和不可重复读，但幻读仍可能发生。")])]),t._v(" "),r("tr",[r("td",[t._v("ISOLATION_SERIALIZABLE")]),t._v(" "),r("td",[t._v("完全服从ACID的隔离级别，确保不发生脏读、不可重复读和幻影读。这在所有隔离级别中也是最慢的，因为它通常是通过完全锁定当前事务所涉及的数据表来完成的。")])])])])])}),[],!1,null,null,null);_.default=a.exports}}]);