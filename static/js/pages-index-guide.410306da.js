(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-guide"],{"058e":function(t,i,s){t.exports=s.p+"static/6.png"},"0f04":function(t,i,s){"use strict";s.r(i);var a=s("1ffe"),e=s.n(a);for(var n in a)["default"].indexOf(n)<0&&function(t){s.d(i,t,(function(){return a[t]}))}(n);i["default"]=e.a},"1f3c":function(t,i,s){t.exports=s.p+"static/vip.png"},"1ffe":function(t,i,s){"use strict";s("6a54"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={data:function(){return{acctive:0,getJson:{},wtfk:1,mxianlu:1}},onReady:function(){},onLoad:function(t){t.type&&(this.acctive=t.type)},onShow:function(){this.getJson=uni.getStorageSync("getJson"),this.inits()},methods:{inits:function(){var t=this;this.$api.last({}).then((function(i){if(200==i.code){var s=i.data.id,a=uni.getStorageSync("uid")+"mxianlu",e=uni.getStorageSync("uid")+"max";0==uni.getStorageSync(a)?t.mxianlu=0:s>uni.getStorageSync(e)?(t.mxianlu=0,uni.setStorageSync(a,0)):t.mxianlu=1,uni.setStorageSync(e,s)}})),this.$api.feedlast({}).then((function(i){if(200==i.code){var s=i.data.id,a=uni.getStorageSync("uid")+"wtfk",e=uni.getStorageSync("uid")+"max1";0==uni.getStorageSync(a)?t.wtfk=0:s>uni.getStorageSync(e)?(t.wtfk=0,uni.setStorageSync(a,0)):t.wtfk=1,uni.setStorageSync(e,s)}}))},xiazai1:function(){window.location.href=this.getJson.DOWNLOAD_APP_OUTLINE_APPSTORE_ADDRESS},xiazai:function(){window.location.href=this.getJson.DOWNLOAD_APP_XIYOU_APPSTORE_ADDRESS},xinxi:function(){uni.reLaunch({url:"/pages/index/xiaoxi"})},contacats:function(){uni.reLaunch({url:"/pages/index/contact"})},fankui:function(){uni.reLaunch({url:"/pages/index/fankui"})},checkouts:function(t,i){this.typeacctive=i},go:function(){uni.reLaunch({url:"/pages/index/index"})},go1:function(){uni.reLaunch({url:"/pages/index/price"})},go2:function(){uni.reLaunch({url:"/pages/index/xianlu"})},checkout:function(){this.acctive=!this.acctive,uni.pageScrollTo({scrollTop:0,duration:100})}}};i.default=a},3810:function(t,i,s){t.exports=s.p+"static/logo.png"},"3d4c":function(t,i,s){t.exports=s.p+"static/13.png"},"3d96":function(t,i,s){t.exports=s.p+"static/5.png"},"4c4c":function(t,i,s){t.exports=s.p+"static/26.png"},"4e97":function(t,i,s){t.exports=s.p+"static/25.png"},"4ee58":function(t,i,s){t.exports=s.p+"static/7.png"},"511f":function(t,i,s){t.exports=s.p+"static/22.png"},"51f9":function(t,i,s){var a=s("d275");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var e=s("967d").default;e("6586363c",a,!0,{sourceMap:!1,shadowMode:!1})},"52bd":function(t,i,s){t.exports=s.p+"static/12.png"},"5eee":function(t,i,s){"use strict";s.d(i,"b",(function(){return a})),s.d(i,"c",(function(){return e})),s.d(i,"a",(function(){}));var a=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",{staticClass:"fl justify_center"},[a("v-uni-view",{staticStyle:{background:"linear-gradient(180deg, #F3FAFB 0%, #fff 100%)",width:"751rpx",height:"100vh"}},[a("v-uni-view",{staticClass:"flexNew hear_boxs space-between",staticStyle:{padding:"33rpx 0rpx 33rpx 0rpx","background-color":"#fff","padding-left":"20rpx","padding-right":"20rpx","z-index":"9999999"}},[a("v-uni-view",{on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.go.apply(void 0,arguments)}}},[a("v-uni-image",{staticStyle:{width:"36rpx",height:"44rpx"},attrs:{src:s("3810")}})],1),a("v-uni-view",{staticClass:"flexNew",staticStyle:{"margin-right":"20px"}},[a("v-uni-view",{staticClass:"flexNew m-r-30",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.go.apply(void 0,arguments)}}},[a("v-uni-image",{staticStyle:{width:"44rpx",height:"44rpx"},attrs:{src:s("f585")}}),a("v-uni-view",{staticClass:"font26 m-l-10",staticStyle:{color:"#2B2B2B"}},[t._v("我的账号")])],1),a("v-uni-view",{staticClass:"flexNew m-r-30",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.go1.apply(void 0,arguments)}}},[a("v-uni-image",{staticStyle:{width:"44rpx",height:"44rpx"},attrs:{src:s("1f3c")}}),a("v-uni-view",{staticClass:"font26 m-l-10",staticStyle:{color:"#2B2B2B"}},[t._v("购买会员")])],1),a("v-uni-view",{staticClass:"flexNew m-r-30",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.go2.apply(void 0,arguments)}}},[a("v-uni-image",{staticStyle:{width:"44rpx",height:"44rpx"},attrs:{src:s("b4ef")}}),a("v-uni-view",{staticClass:"font26 m-l-10",staticStyle:{color:"#2B2B2B"}},[t._v("线路列表")])],1)],1)],1),a("v-uni-view",{staticStyle:{position:"fixed",top:"6%","z-index":"100000","background-color":"#f2f9f2",width:"751rpx"}},[a("v-uni-view",{staticClass:"font28 boxs color21 ft500",staticStyle:{"margin-top":"60rpx"}},[t._v("因本类产品的特殊性和政策原因，ios用户需借助Outline客户端使用或使用海外Apple ID进行下载安装西柚APP，两种方案可按需选择。具体方法如下：")]),a("v-uni-view",{staticClass:"flexNew justify-content",staticStyle:{"padding-bottom":"40rpx"}},[a("v-uni-view",{staticClass:"flexNew justify-content",staticStyle:{"margin-top":"50rpx","box-shadow":"0px 3px 6px  #c1dee3","border-radius":"20rpx"}},[a("v-uni-view",{class:0==t.acctive?"right":"left",staticStyle:{"border-top-left-radius":"20rpx","border-bottom-left-radius":"20rpx"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.checkout.apply(void 0,arguments)}}},[a("v-uni-view",{class:0==t.acctive?"colorf":"color0",staticStyle:{"font-size":"32rpx","text-align":"center"}},[t._v("Outline方案教程")]),a("v-uni-view",{staticStyle:{"margin-left":"20rpx","margin-right":"20rpx","margin-top":"20rpx"}},[t._v("国内AppleID即可下载，须在web端获取线路密钥后到Outline客户端粘贴使用")])],1),a("v-uni-view",{class:1==t.acctive?"right":"left",staticStyle:{"border-top-right-radius":"20rpx","border-bottom-right-radius":"20rpx",position:"relative"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.checkout.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"xiazais"},[t._v("下载有福利")]),a("v-uni-view",{class:1==t.acctive?"colorf":"color0",staticStyle:{"font-size":"32rpx","text-align":"center"}},[t._v("IOS方案教程")]),a("v-uni-view",{staticStyle:{"margin-left":"20rpx","margin-right":"20rpx","margin-top":"20rpx"}},[t._v("国内AppleID即可下载，须在web端获取线路密钥后到Outline客户端粘贴使用")])],1)],1)],1)],1),a("v-uni-view",{staticClass:"aaaa",staticStyle:{"padding-bottom":"100rpx","margin-top":"640rpx"}},[0==t.acctive?[a("v-uni-view",{staticClass:"boxs"},[a("v-uni-view",{staticStyle:{"font-size":"42rpx","text-align":"center","margin-top":"60rpx"}},[t._v("Outline下载及使用教程")]),a("v-uni-view",{staticClass:"ft500 font32",staticStyle:{"margin-top":"40rpx"}},[t._v("第一步,购买会员：")]),a("v-uni-view",{staticClass:"font28 colorA3 m-t-10"},[t._v("登录账号后点击"),a("v-uni-text",{staticClass:"color21"},[t._v("“购买”")]),t._v("，进入“购买”页面，选择任意会员套餐点击购买付款；")],1),a("v-uni-view",{staticClass:"textCenter m-t-20"},[a("v-uni-image",{staticStyle:{width:"520rpx",height:"428rpx"},attrs:{src:s("633c")}})],1),a("v-uni-view",{staticClass:"ft500 font32",staticStyle:{"margin-top":"40rpx"}},[t._v("第二步，获取线路密钥：：")]),a("v-uni-view",{staticClass:"font28 colorA3 m-t-10"},[t._v("购买完成后点击"),a("v-uni-text",{staticClass:"color21"},[t._v("“线路列表”")]),t._v("，进入线路页面，选择需要链接的线路，点击"),a("v-uni-text",{staticClass:"color21"},[t._v("“获取密钥”")]),t._v("，即可获得可使用的线路链接；")],1),a("v-uni-view",{staticClass:"textCenter m-t-20"},[a("v-uni-image",{staticStyle:{width:"520rpx",height:"428rpx"},attrs:{src:s("c62e")}})],1),a("v-uni-view",{staticClass:"ft500 font32",staticStyle:{"margin-top":"40rpx"}},[t._v("第三步，下载/打开Outline：")]),a("v-uni-view",{staticClass:"font28 colorA3 m-t-10"},[t._v("打开手机中已安装好的“outline”APP"),a("v-uni-text",{staticClass:"color21",staticStyle:{color:"#35C6C6"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.xiazai1.apply(void 0,arguments)}}},[t._v("(没有下载点击此处下载)")]),t._v("，点击右上角"),a("v-uni-text",{staticClass:"color21"},[t._v("“加号”")]),t._v("，然后在输入框里粘贴刚获取的密钥，最后点击右下角的"),a("v-uni-text",{staticClass:"color21"},[t._v("“添加服务器”")])],1),a("v-uni-view",{staticClass:"textCenter m-t-20"},[a("v-uni-image",{staticStyle:{width:"480rpx",height:"368rpx"},attrs:{src:s("e026")}})],1),a("v-uni-view",{staticClass:"ft500 font32",staticStyle:{"margin-top":"40rpx"}},[t._v("第四步，连接线路：")]),a("v-uni-view",{staticClass:"font28 colorA3 m-t-10"},[t._v("点击线路服务器右下角的"),a("v-uni-text",{staticClass:"color21"},[t._v("“连接”")]),t._v("按钮，即可享受极致的网络服务；")],1),a("v-uni-view",{staticClass:"textCenter m-t-20"},[a("v-uni-image",{staticStyle:{width:"297px",height:"282px"},attrs:{src:s("81f0")}})],1)],1)]:[a("v-uni-view",{staticStyle:{"padding-bottom":"100rpx"}},[a("v-uni-view",{staticStyle:{"font-size":"42rpx","text-align":"center","margin-top":"60rpx"}},[t._v("IOS客户端下载教程")]),a("v-uni-view",{staticClass:"m-t-20",staticStyle:{"background-color":"#D0EDEF","font-size":"24rpx",padding:"20rpx"}},[t._v("Ios客户端需要使用海外Apple ID进行下载安装，现如下几种下载方法可供选择：")]),a("v-uni-view",{staticStyle:{"font-size":"28rpx","text-align":"center","margin-top":"30rpx","font-weight":"500"}},[t._v("方法一：创建一个新的“香港Apple ID”下载西柚")]),a("v-uni-view",{staticClass:"boxs"},[a("v-uni-view",{staticClass:"flexNew"},[a("v-uni-view",{staticClass:"btns"},[t._v("第一步")])],1),a("v-uni-view",{staticClass:"font28 m-t-20 colorA3"},[t._v("进入 Apple 的创建 Apple ID 网站："),a("v-uni-text",{staticClass:"color21"},[t._v("https://appleid.apple.com/account\n\t\t\t\t\t\t\t\t；")])],1),a("v-uni-view",{staticClass:"fl m-t-30 space-between"},[a("v-uni-view",[a("v-uni-view",{staticClass:"fl"},[a("v-uni-view",{staticClass:"btns"},[t._v("第二步")])],1),a("v-uni-view",{staticClass:"font28 m-t-30 colorA3",staticStyle:{width:"420rpx"}},[t._v("根据提示输入您的个人相关信息，注意在国家和地区请选择"),a("v-uni-text",{staticClass:"color21"},[t._v("<香港>")]),t._v("，"),a("br"),t._v("另外："),a("br"),t._v("邮箱：需要准备一个从未注册过 Apple ID 的"),a("v-uni-text",{staticClass:"color21"},[t._v("<全新真实>")]),t._v("邮箱用来收取验证码；手机号：支持 <中国大陆> 的手机验证；")],1)],1),a("v-uni-image",{staticStyle:{width:"175rpx",height:"320rpx"},attrs:{src:s("3d96")}})],1),a("v-uni-view",{staticClass:"fl m-t-30 space-between",staticStyle:{"margin-top":"40rpx"}},[a("v-uni-view",[a("v-uni-view",{staticClass:"fl"},[a("v-uni-view",{staticClass:"btns"},[t._v("第三步")])],1),a("v-uni-view",{staticClass:"font28 m-t-30 colorA3",staticStyle:{width:"420rpx"}},[t._v("所有的信息输入完成后会进入到"),a("v-uni-text",{staticClass:"color21"},[t._v("<邮箱验证>")])],1)],1),a("v-uni-image",{staticStyle:{width:"175rpx",height:"320rpx"},attrs:{src:s("058e")}})],1),a("v-uni-view",{staticClass:"fl m-t-30 space-between",staticStyle:{"margin-top":"40rpx"}},[a("v-uni-view",[a("v-uni-view",{staticClass:"fl"},[a("v-uni-view",{staticClass:"btns"},[t._v("第四步")])],1),a("v-uni-view",{staticClass:"font28 m-t-30 colorA3",staticStyle:{width:"420rpx"}},[t._v("邮箱验证完成后会进入到"),a("v-uni-text",{staticClass:"color21"},[t._v("<手机号验证>")])],1)],1),a("v-uni-image",{staticStyle:{width:"175rpx",height:"320rpx"},attrs:{src:s("4ee58")}})],1),a("v-uni-view",{staticClass:"fl m-t-30 space-between",staticStyle:{"margin-top":"40rpx"}},[a("v-uni-view",[a("v-uni-view",{staticClass:"fl"},[a("v-uni-view",{staticClass:"btns"},[t._v("第五步")])],1),a("v-uni-view",{staticClass:"font28 m-t-30 colorA3",staticStyle:{width:"420rpx"}},[t._v("当进入到"),a("v-uni-text",{staticClass:"color21"},[t._v("<登录和安全>")]),t._v("页面说明您的"),a("v-uni-text",{staticClass:"color21"},[t._v("<香港 AppleID>")]),t._v("已经注册成功了；")],1)],1),a("v-uni-image",{staticStyle:{width:"175rpx",height:"320rpx"},attrs:{src:s("96bf")}})],1),a("v-uni-view",{staticClass:"fl m-t-30 space-between",staticStyle:{"margin-top":"40rpx"}},[a("v-uni-view",[a("v-uni-view",{staticClass:"fl"},[a("v-uni-view",{staticClass:"btns"},[t._v("第六步")])],1),a("v-uni-view",{staticClass:"font28 m-t-30 colorA3",staticStyle:{width:"420rpx"}},[t._v("打开 App Store ，点击"),a("v-uni-text",{staticClass:"color21"},[t._v("<右上角图标>")])],1)],1),a("v-uni-image",{staticStyle:{width:"175rpx",height:"320rpx"},attrs:{src:s("d00a")}})],1),a("v-uni-view",{staticClass:"fl m-t-30 space-between",staticStyle:{"margin-top":"40rpx"}},[a("v-uni-view",[a("v-uni-view",{staticClass:"fl"},[a("v-uni-view",{staticClass:"btns"},[t._v("第七步")])],1),a("v-uni-view",{staticClass:"font28 m-t-30 colorA3",staticStyle:{width:"420rpx"}},[t._v("选择"),a("v-uni-text",{staticClass:"color21"},[t._v("<退出登录>")]),t._v("，记得一定要滑到页面底部才能看到；")],1)],1),a("v-uni-image",{staticStyle:{width:"175rpx",height:"320rpx"},attrs:{src:s("dce5")}})],1),a("v-uni-view",{staticClass:"fl m-t-30 space-between",staticStyle:{"margin-top":"40rpx"}},[a("v-uni-view",[a("v-uni-view",{staticClass:"fl"},[a("v-uni-view",{staticClass:"btns"},[t._v("第八步")])],1),a("v-uni-view",{staticClass:"font28 m-t-30 colorA3",staticStyle:{width:"420rpx"}},[t._v("在 App Store 中登录您刚刚注册的"),a("v-uni-text",{staticClass:"color21"},[t._v("<香港 AppleID>")]),t._v("这里记得选择"),a("v-uni-text",{staticClass:"color21"},[t._v("<登录>")]),t._v("，不要点击右上角的完成；")],1)],1),a("v-uni-image",{staticStyle:{width:"175rpx",height:"320rpx"},attrs:{src:s("5fc3")}})],1),a("v-uni-view",{staticClass:"fl m-t-30 space-between",staticStyle:{"margin-top":"40rpx"}},[a("v-uni-view",[a("v-uni-view",{staticClass:"fl"},[a("v-uni-view",{staticClass:"btns"},[t._v("最后一步")])],1),a("v-uni-view",{staticClass:"font28 m-t-30 colorA3",staticStyle:{width:"420rpx"}},[t._v("当发现商店内容变为繁体内容后证明您已经切换到香港地区了；此时您可以点击下方按钮直接下载西柚 VPN，或在商店中自行搜索"),a("v-uni-text",{staticClass:"color21"},[t._v("<西柚 VPN>")])],1),a("v-uni-view",{staticClass:"btn",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.xiazai.apply(void 0,arguments)}}},[t._v("下载西柚VPN")])],1),a("v-uni-image",{staticStyle:{width:"175rpx",height:"360rpx"},attrs:{src:s("52bd")}})],1)],1),a("v-uni-view",{staticStyle:{"font-size":"28rpx","text-align":"center","margin-top":"100rpx","font-weight":"500"}},[t._v("方法二：修改“Apple\n\t\t\t\t\t\tID”地区下载西柚")]),a("v-uni-view",{staticClass:"boxs"},[a("v-uni-view",{staticClass:"fl m-t-30 space-between"},[a("v-uni-view",[a("v-uni-view",{staticClass:"fl"},[a("v-uni-view",{staticClass:"btns"},[t._v("第一步")])],1),a("v-uni-view",{staticClass:"font28 m-t-30 colorA3",staticStyle:{width:"420rpx"}},[t._v("进入 Apple 官网 ："),a("v-uni-text",{staticClass:"color21"},[a("br"),t._v("https://appleid.apple.com")]),t._v("，\n\t\t\t\t\t\t\t\t\t点击"),a("v-uni-text",{staticClass:"color21"},[t._v("<登录>")]),t._v("，输入自己的 Apple ID；")],1)],1),a("v-uni-image",{staticStyle:{width:"175rpx",height:"320rpx"},attrs:{src:s("3d4c")}})],1),a("v-uni-view",{staticClass:"fl m-t-30 space-between"},[a("v-uni-view",[a("v-uni-view",{staticClass:"fl"},[a("v-uni-view",{staticClass:"btns"},[t._v("第二步")])],1),a("v-uni-view",{staticClass:"font28 m-t-30 colorA3",staticStyle:{width:"420rpx"}},[t._v("登录成功后在"),a("v-uni-text",{staticClass:"color21"},[t._v("<右上角下拉菜单>")]),t._v("， 中选择"),a("v-uni-text",{staticClass:"color21"},[t._v("<个人信息>")])],1)],1),a("v-uni-image",{staticStyle:{width:"175rpx",height:"320rpx"},attrs:{src:s("5fdd")}})],1),a("v-uni-view",{staticClass:"fl m-t-30 space-between",staticStyle:{"margin-top":"40rpx"}},[a("v-uni-view",[a("v-uni-view",{staticClass:"fl"},[a("v-uni-view",{staticClass:"btns"},[t._v("第三步")])],1),a("v-uni-view",{staticClass:"font28 m-t-30 colorA3",staticStyle:{width:"420rpx"}},[t._v("在个人信息页面选择"),a("v-uni-text",{staticClass:"color21"},[t._v("<国家或地区>")])],1)],1),a("v-uni-image",{staticStyle:{width:"175rpx",height:"320rpx"},attrs:{src:s("a1d7")}})],1),a("v-uni-view",{staticClass:"fl m-t-30 space-between",staticStyle:{"margin-top":"40rpx"}},[a("v-uni-view",[a("v-uni-view",{staticClass:"fl"},[a("v-uni-view",{staticClass:"btns"},[t._v("第四步")])],1),a("v-uni-view",{staticClass:"font28 m-t-30 colorA3",staticStyle:{width:"420rpx"}},[t._v("在国家或地区页面选择"),a("v-uni-text",{staticClass:"color21"},[t._v("<更改国家或地区>")]),a("br"),a("v-uni-text",{staticStyle:{color:"#DD2828"}},[t._v("*若提示无法更改国家或地区，请使用其他方式下载>> ；")])],1)],1),a("v-uni-image",{staticStyle:{width:"175rpx",height:"320rpx"},attrs:{src:s("fd54")}})],1),a("v-uni-view",{staticClass:"fl m-t-30 space-between",staticStyle:{"margin-top":"40rpx"}},[a("v-uni-view",[a("v-uni-view",{staticClass:"fl"},[a("v-uni-view",{staticClass:"btns"},[t._v("第五步")])],1),a("v-uni-view",{staticClass:"font28 m-t-30 colorA3",staticStyle:{width:"420rpx"}},[t._v("此时您已经进入到付款方式页面，请按照下述描述填写相关信息："),a("br"),t._v("国家或地区："),a("v-uni-text",{staticClass:"color21"},[t._v("<香港>"),a("br")]),t._v("付款方式："),a("v-uni-text",{staticClass:"color21"},[t._v("<无>")]),a("br"),t._v("账单寄送地址："),a("v-uni-text",{staticClass:"color21"},[t._v("<姓氏、名字、街道地址随意填写>")]),a("br"),t._v("电话号码："),a("v-uni-text",{staticClass:"color21"},[t._v("852+任意8位数字")]),a("br"),t._v("送货地址："),a("v-uni-text",{staticClass:"color21"},[t._v("<姓氏、名字、街道地址随意填写>")]),a("br"),t._v("国家或地区选择"),a("v-uni-text",{staticClass:"color21"},[t._v("<香港>")]),t._v("最后选择更新即可。"),a("br"),a("v-uni-text",{staticStyle:{color:"#DD2828"}},[t._v("*若付款方式无法选择“无”，请使用其他方式下载>> ；")])],1)],1),a("v-uni-image",{staticStyle:{width:"175rpx",height:"720rpx"},attrs:{src:s("ade4")}})],1),a("v-uni-view",{staticClass:"fl m-t-30 space-between",staticStyle:{"margin-top":"40rpx"}},[a("v-uni-view",[a("v-uni-view",{staticClass:"fl"},[a("v-uni-view",{staticClass:"btns"},[t._v("第六步")])],1),a("v-uni-view",{staticClass:"font28 m-t-30 colorA3",staticStyle:{width:"420rpx"}},[t._v("打开 App Store ，点击"),a("v-uni-text",{staticClass:"color21"},[t._v("<右上角图标>")])],1)],1),a("v-uni-image",{staticStyle:{width:"175rpx",height:"320rpx"},attrs:{src:s("8df0")}})],1),a("v-uni-view",{staticClass:"fl m-t-30 space-between",staticStyle:{"margin-top":"40rpx"}},[a("v-uni-view",[a("v-uni-view",{staticClass:"fl"},[a("v-uni-view",{staticClass:"btns"},[t._v("第七步")])],1),a("v-uni-view",{staticClass:"font28 m-t-30 colorA3",staticStyle:{width:"420rpx"}},[t._v("选择"),a("v-uni-text",{staticClass:"color21"},[t._v("<退出登录>")]),t._v("，记得一定要滑到页面底部才能看到；")],1)],1),a("v-uni-image",{staticStyle:{width:"175rpx",height:"320rpx"},attrs:{src:s("6169")}})],1),a("v-uni-view",{staticClass:"fl m-t-30 space-between",staticStyle:{"margin-top":"40rpx"}},[a("v-uni-view",[a("v-uni-view",{staticClass:"fl"},[a("v-uni-view",{staticClass:"btns"},[t._v("第八步")])],1),a("v-uni-view",{staticClass:"font28 m-t-30 colorA3",staticStyle:{width:"420rpx"}},[t._v("在 App Store 中重新登录您的"),a("v-uni-text",{staticClass:"color21"},[t._v("<'AppleID'>")]),t._v("这里记得选择"),a("v-uni-text",{staticClass:"color21"},[t._v("<登录>")]),t._v("，不要点击右上角的完成；")],1)],1),a("v-uni-image",{staticStyle:{width:"175rpx",height:"320rpx"},attrs:{src:s("d796")}})],1),a("v-uni-view",{staticClass:"fl m-t-30 space-between",staticStyle:{"margin-top":"40rpx"}},[a("v-uni-view",[a("v-uni-view",{staticClass:"fl"},[a("v-uni-view",{staticClass:"btns"},[t._v("最后一步")])],1),a("v-uni-view",{staticClass:"font28 m-t-30 colorA3",staticStyle:{width:"420rpx"}},[t._v("当发现商店内容变为繁体内容后证明您已经切换到香港地区了；此时您可以点击下方按钮直接下载西柚 VPN，或在商店中自行搜索"),a("v-uni-text",{staticClass:"color21"},[t._v("<西柚 VPN>")])],1),a("v-uni-view",{staticClass:"btn",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.xiazai.apply(void 0,arguments)}}},[t._v("下载西柚VPN")])],1),a("v-uni-image",{staticStyle:{width:"175rpx",height:"360rpx"},attrs:{src:s("b66e")}})],1)],1),a("v-uni-view",{staticStyle:{"font-size":"28rpx","text-align":"center","margin-top":"100rpx","font-weight":"500"}},[t._v("方法三：使用我们提供的公开ID下载西柚")]),a("v-uni-view",{staticClass:"m-t-20",staticStyle:{"background-color":"#D0EDEF","font-size":"24rpx",padding:"30rpx"}},[t._v("*注意：千万别在 iCloud 页面和设置页面登录! 这会导致您的 App Store 和 iTunes Store 被停用 或 锁定，最严重会导致"),a("v-uni-text",{staticStyle:{color:"rgba(221, 40, 40, 1)"}},[t._v("“手机会变砖”")]),a("br"),t._v("若提示需要"),a("v-uni-text",{staticStyle:{color:"rgba(221, 40, 40, 1)"}},[t._v("电话号码验证")]),t._v("，代表您操作错误，请仔细查看教程的第三步与第四步")],1),a("v-uni-view",{staticClass:"boxs"},[a("v-uni-view",{staticClass:"fl m-t-30 space-between"},[a("v-uni-view",[a("v-uni-view",{staticClass:"fl"},[a("v-uni-view",{staticClass:"btns"},[t._v("第一步")])],1),a("v-uni-view",{staticClass:"font28 m-t-30 colorA3",staticStyle:{width:"420rpx"}},[t._v("打开 App Store ，点击"),a("v-uni-text",{staticClass:"color21"},[t._v("<右上角图标>")]),t._v("千万别在 iCloud 页面和设置页面登录！否则，"),a("v-uni-text",{staticStyle:{color:"#DD2828"}},[t._v("“手机会变砖”")])],1)],1),a("v-uni-image",{staticStyle:{width:"175rpx",height:"320rpx"},attrs:{src:s("511f")}})],1),a("v-uni-view",{staticClass:"fl m-t-30 space-between"},[a("v-uni-view",[a("v-uni-view",{staticClass:"fl"},[a("v-uni-view",{staticClass:"btns"},[t._v("第二步")])],1),a("v-uni-view",{staticClass:"font28 m-t-30 colorA3",staticStyle:{width:"420rpx"}},[t._v("选择"),a("v-uni-text",{staticClass:"color21"},[t._v("<退出登录>")]),t._v(",记得一定要滑到页面底部才能看到；")],1)],1),a("v-uni-image",{staticStyle:{width:"175rpx",height:"320rpx"},attrs:{src:s("c2f3")}})],1),a("v-uni-view",{staticClass:"fl m-t-30 space-between",staticStyle:{"margin-top":"40rpx"}},[a("v-uni-view",[a("v-uni-view",{staticClass:"fl"},[a("v-uni-view",{staticClass:"btns"},[t._v("第三步")])],1),a("v-uni-view",{staticClass:"font28 m-t-30 colorA3",staticStyle:{width:"420rpx"}},[t._v("登录ID后，会弹出Apple ID安全页面，切记，请点击"),a("v-uni-text",{staticClass:"color21"},[t._v("<其他选项>")]),t._v("，若没有此提示请忽略；")],1)],1),a("v-uni-image",{staticStyle:{width:"175rpx",height:"320rpx"},attrs:{src:s("b289")}})],1),a("v-uni-view",{staticClass:"fl m-t-30 space-between",staticStyle:{"margin-top":"40rpx"}},[a("v-uni-view",[a("v-uni-view",{staticClass:"fl"},[a("v-uni-view",{staticClass:"btns"},[t._v("第四步")])],1),a("v-uni-view",{staticClass:"font28 m-t-30 colorA3",staticStyle:{width:"420rpx"}},[t._v("在弹出的弹窗中选择"),a("v-uni-text",{staticClass:"color21"},[t._v("<不升级>")]),t._v("若没有此提示请忽略；")],1)],1),a("v-uni-image",{staticStyle:{width:"175rpx",height:"320rpx"},attrs:{src:s("4e97")}})],1),a("v-uni-view",{staticClass:"fl m-t-30 space-between",staticStyle:{"margin-top":"40rpx"}},[a("v-uni-view",[a("v-uni-view",{staticClass:"fl"},[a("v-uni-view",{staticClass:"btns"},[t._v("第五步")])],1),a("v-uni-view",{staticClass:"font28 m-t-30 colorA3",staticStyle:{width:"420rpx"}},[t._v("使用下方的"),a("v-uni-text",{staticClass:"color21"},[t._v("<公共香港 Apple ID>")]),a("v-uni-text",{staticStyle:{color:"#DD2828"}},[t._v("按照前面的四个步骤进行登录")]),t._v("， 注意密码大小写，建议直接复制粘贴；"),a("br"),t._v("公共 Apple\n\t\t\t\t\t\t\t\t\tID：patiencebraun8@gmail.com密码："),a("br"),t._v("5!WSFQiU"),a("br"),a("v-uni-text",{staticStyle:{color:"#DD2828"}},[t._v("(若公共 Apple ID 不可用，请清除浏览器缓存后重新刷新页面获取!)")])],1)],1),a("v-uni-image",{staticStyle:{width:"175rpx",height:"320rpx"},attrs:{src:s("4c4c")}})],1),a("v-uni-view",{staticClass:"fl m-t-30 space-between",staticStyle:{"margin-top":"40rpx"}},[a("v-uni-view",[a("v-uni-view",{staticClass:"fl"},[a("v-uni-view",{staticClass:"btns"},[t._v("最后一步")])],1),a("v-uni-view",{staticClass:"font28 m-t-30 colorA3",staticStyle:{width:"420rpx"}},[t._v("当发现商店内容变为繁体内容后证明您已经切换到香港地区了；此时您可以点击下方按钮直接下载西柚 VPN，或在商店中自行搜索"),a("v-uni-text",{staticClass:"color21"},[t._v("<西柚 VPN>")])],1),a("v-uni-view",{staticClass:"btn",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.xiazai.apply(void 0,arguments)}}},[t._v("下载西柚VPN")])],1),a("v-uni-image",{staticStyle:{width:"175rpx",height:"360rpx"},attrs:{src:s("f0b7")}})],1)],1)],1)]],2),a("v-uni-view",{staticClass:"btn_box flexNew space-around"},[a("v-uni-view",{staticClass:"colorf  font28",staticStyle:{position:"relative"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.fankui.apply(void 0,arguments)}}},[a("v-uni-view",[t._v("问题反馈")]),0==t.wtfk?a("v-uni-view",{staticClass:"dians1"}):t._e()],1),a("v-uni-view",{staticClass:"colorf font28",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.contacats.apply(void 0,arguments)}}},[t._v("联系我们")]),a("v-uni-view",{staticClass:"colorf font28",staticStyle:{position:"relative"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.xinxi.apply(void 0,arguments)}}},[a("v-uni-view",[t._v("信息公告")]),0==t.mxianlu?a("v-uni-view",{staticClass:"dians1"}):t._e()],1),a("v-uni-view",{staticClass:"colorf font28",staticStyle:{color:"#3AAFB4"}},[t._v("使用指南")])],1)],1)],1)},e=[]},"5fc3":function(t,i,s){t.exports=s.p+"static/11.png"},"5fdd":function(t,i,s){t.exports=s.p+"static/14.png"},6169:function(t,i,s){t.exports=s.p+"static/19.png"},"633c":function(t,i,s){t.exports=s.p+"static/outline.png"},"81f0":function(t,i,s){t.exports=s.p+"static/outline4.png"},"8df0":function(t,i,s){t.exports=s.p+"static/18.png"},"96bf":function(t,i,s){t.exports=s.p+"static/8.png"},a1d7:function(t,i,s){t.exports=s.p+"static/15.png"},ade4:function(t,i,s){t.exports=s.p+"static/17.png"},b289:function(t,i,s){t.exports=s.p+"static/24.png"},b4ef:function(t,i,s){t.exports=s.p+"static/wangluo.png"},b66e:function(t,i,s){t.exports=s.p+"static/21.png"},c2f3:function(t,i,s){t.exports=s.p+"static/23.png"},c4f9:function(t,i,s){"use strict";var a=s("51f9"),e=s.n(a);e.a},c62e:function(t,i,s){t.exports=s.p+"static/outlion2.png"},d00a:function(t,i,s){t.exports=s.p+"static/9.png"},d275:function(t,i,s){var a=s("c86c");i=a(!1),i.push([t.i,".xiazais[data-v-b3057314]{position:absolute;left:30%;top:-10%;font-size:%?24?%;color:#fff;background-color:#ec8355;border-radius:%?12?%;padding:%?6?% %?10?% %?6?% %?10?%}.hear_boxs[data-v-b3057314]{position:fixed;top:0;width:%?751?%;z-index:9999}.colorA3[data-v-b3057314]{color:#a3a3a3}.color21[data-v-b3057314]{color:#212121}.dians[data-v-b3057314]{position:absolute;left:-1%;top:0;width:%?10?%;height:%?10?%;border-radius:%?180?%;background-color:#dd2828}.boxs[data-v-b3057314]{margin-left:%?48?%;margin-right:%?48?%}.typebox1[data-v-b3057314]{margin-right:%?24?%;margin-bottom:%?20?%;border-radius:31px;background:#fff;color:#a3a3a3;padding:%?8?% %?24?% %?8?% %?24?%;font-size:%?24?%;border:%?1?% solid #d5d5d5}.typebox[data-v-b3057314]{border:%?1?% solid #ec8355;margin-right:%?24?%;margin-bottom:%?20?%;border-radius:31px;background:#fbeae3;color:#ec8355;padding:%?8?% %?24?% %?8?% %?24?%;font-size:%?24?%}.btn[data-v-b3057314]{margin-top:%?30?%;background-color:#3aafb4;color:#fff;padding:%?26?%;\n\t/* margin-left: 95rpx; */\n\t/* margin-right: 95rpx; */border-radius:%?20?%;text-align:center;font-size:%?26?%;border-radius:%?20?%}.btns[data-v-b3057314]{margin-top:%?30?%;background-color:#d0edef;color:#212121;border:%?1?% solid #3aafb4;padding:%?14?% %?36?% %?14?% %?36?%;\n\t/* margin-left: 95rpx; */\n\t/* margin-right: 95rpx; */border-radius:%?20?%;text-align:center;font-size:%?22?%;border-radius:%?32?%}.left[data-v-b3057314]{color:#a3a3a3;background-color:#fff;padding:%?28?% %?0?% %?28?% %?0?%;font-size:%?24?%;width:%?327?%;height:%?167?%}.right[data-v-b3057314]{color:#fff;background-color:#3aafb4;\n\t/* text-align: center; */padding:%?28?% %?0?% %?28?% %?0?%;font-size:%?24?%;width:%?327?%;height:%?167?%}.btn_box[data-v-b3057314]{width:%?751?%;background:#3c3c3c;padding-top:%?49.5?%;padding-bottom:%?49.5?%;position:fixed;bottom:0}",""]),t.exports=i},d796:function(t,i,s){t.exports=s.p+"static/20.png"},dce5:function(t,i,s){t.exports=s.p+"static/10.png"},e026:function(t,i,s){t.exports=s.p+"static/outline3.png"},e938:function(t,i,s){"use strict";s.r(i);var a=s("5eee"),e=s("0f04");for(var n in e)["default"].indexOf(n)<0&&function(t){s.d(i,t,(function(){return e[t]}))}(n);s("c4f9");var c=s("828b"),v=Object(c["a"])(e["default"],a["b"],a["c"],!1,null,"b3057314",null,!1,a["a"],void 0);i["default"]=v.exports},f0b7:function(t,i,s){t.exports=s.p+"static/27.png"},f585:function(t,i,s){t.exports=s.p+"static/my.png"},fd54:function(t,i,s){t.exports=s.p+"static/16.png"}}]);