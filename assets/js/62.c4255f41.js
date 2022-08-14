(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{540:function(s,t,e){"use strict";e.r(t);var a=e(13),r=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("Boxx",{attrs:{changeTime:"5000"}}),s._v(" "),e("h1",{attrs:{id:"github生成公钥"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#github生成公钥"}},[s._v("#")]),s._v(" Github生成公钥")]),s._v(" "),e("h2",{attrs:{id:"_1-在-setting-里点击-new-ssh-key"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-在-setting-里点击-new-ssh-key"}},[s._v("#")]),s._v(" 1 在 "),e("code",[s._v("setting")]),s._v(" 里点击 "),e("code",[s._v("new ssh key")])]),s._v(" "),e("p",[e("img",{attrs:{src:"https://gitee.com/li_hao_qi/imgbed/raw/master/img/20210202113645.png",alt:"image-20210202113645001"}})]),s._v(" "),e("p",[e("img",{attrs:{src:"https://gitee.com/li_hao_qi/imgbed/raw/master/img/20210202114246.png",alt:"image-20210202114246730"}})]),s._v(" "),e("h2",{attrs:{id:"_2-打开-git-bash"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-打开-git-bash"}},[s._v("#")]),s._v(" 2 打开 "),e("code",[s._v("git bash")])]),s._v(" "),e("h3",{attrs:{id:"_2-1-将现有的-ssh-key-删掉"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-将现有的-ssh-key-删掉"}},[s._v("#")]),s._v(" 2.1 将现有的 ssh key 删掉")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf ~/.ssh/*\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"_2-2-生成新的-ssh-key"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-生成新的-ssh-key"}},[s._v("#")]),s._v(" 2.2 生成新的 ssh key")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("ssh-keygen -t rsa -b "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v(" -C "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"你的邮箱"')]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"_2-3-一路回车"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-一路回车"}},[s._v("#")]),s._v(" 2.3 一路回车")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://gitee.com/li_hao_qi/imgbed/raw/master/img/20210202113954.png",alt:"image-20210202113954627"}})]),s._v(" "),e("h3",{attrs:{id:"_2-4-查看并复制-ssh-key"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-查看并复制-ssh-key"}},[s._v("#")]),s._v(" 2.4 查看并复制 ssh key")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" ~/.ssh/id_rsa.pub\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("回到 1 ，在 titile 里起个名字，将复制的东西复制在 key 里面。")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://gitee.com/li_hao_qi/imgbed/raw/master/img/20210202114200.png",alt:"image-20210202114200919"}})]),s._v(" "),e("p",[s._v("点击添加")]),s._v(" "),e("h3",{attrs:{id:"_2-5-验证"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-验证"}},[s._v("#")]),s._v(" 2.5 验证")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -T git@github.com\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("看到")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://gitee.com/li_hao_qi/imgbed/raw/master/img/20210202114413.png",alt:"image-20210202114413750"}})]),s._v(" "),e("p",[s._v("输入 yes 回车")]),s._v(" "),e("p",[s._v("如果出现 "),e("code",[s._v("git@github.com: Permission denied (publickey).")]),s._v(" 说明失败")]),s._v(" "),e("p",[e("strong",[s._v("重新回1来")])]),s._v(" "),e("p",[s._v("如果出现 "),e("code",[s._v("Hi devbzx! You've successfully authenticated, but GitHub does not provide shelaccess.")]),s._v(" 说明成功，可以直接使用 "),e("code",[s._v("ssh")]),s._v(" 进行 "),e("code",[s._v("push")])])],1)}),[],!1,null,null,null);t.default=r.exports}}]);