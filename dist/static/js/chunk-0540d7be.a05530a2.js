(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0540d7be"],{"1c6e":function(t,e,a){},"39ab":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-form",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{"margin-top":"30px"},attrs:{"label-width":"170px",model:t.data,"element-loading-text":"修改中"}},[a("el-form-item",{attrs:{label:"分享用户名"}},[a("el-col",{attrs:{span:20}},[a("el-input",{model:{value:t.data.share_username,callback:function(e){t.$set(t.data,"share_username",e)},expression:"data.share_username"}})],1),t._v(" "),a("el-col",{attrs:{span:2,align:"center"}},[a("el-tooltip",{attrs:{content:"镜像分享时所需要的贡献用户名，建议设置为Github用户名，方便进行统计贡献。",placement:"top"}},[a("i",{staticClass:"el-icon-question"})])],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"Dockerhub 用户名"}},[a("el-col",{attrs:{span:20}},[a("el-input",{model:{value:t.data.username,callback:function(e){t.$set(t.data,"username",e)},expression:"data.username"}})],1),t._v(" "),a("el-col",{attrs:{span:2,align:"center"}},[a("el-tooltip",{attrs:{content:"镜像分享时所需的登陆用户名，默认情况下无需修改。",placement:"top"}},[a("i",{staticClass:"el-icon-question"})])],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"Dockerhub Token"}},[a("el-col",{attrs:{span:20}},[a("el-input",{model:{value:t.data.pwd,callback:function(e){t.$set(t.data,"pwd",e)},expression:"data.pwd"}})],1),t._v(" "),a("el-col",{attrs:{span:2,align:"center"}},[a("el-tooltip",{attrs:{content:"镜像分享时所需的登陆凭证，默认情况下无需修改。",placement:"top"}},[a("i",{staticClass:"el-icon-question"})])],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"镜像过期时间（秒）"}},[a("el-col",{attrs:{span:20}},[a("el-input",{model:{value:t.data.time,callback:function(e){t.$set(t.data,"time",e)},expression:"data.time"}})],1),t._v(" "),a("el-col",{attrs:{span:2,align:"center"}},[a("el-tooltip",{attrs:{content:"镜像过期时间，默认为 30 分钟，最小为 1 分钟，0 为永不过期，修改后下次启动镜像开始生效。",placement:"top"}},[a("i",{staticClass:"el-icon-question"})])],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"网站名称"}},[a("el-col",{attrs:{span:20}},[a("el-input",{model:{value:t.data.url_name,callback:function(e){t.$set(t.data,"url_name",e)},expression:"data.url_name"}})],1),t._v(" "),a("el-col",{attrs:{span:2,align:"center"}},[a("el-tooltip",{attrs:{content:"修改网站名称",placement:"top"}},[a("i",{staticClass:"el-icon-question"})])],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"镜像过期删除"}},[a("el-col",{attrs:{span:20}},[a("el-switch",{model:{value:t.data.del_container,callback:function(e){t.$set(t.data,"del_container",e)},expression:"data.del_container"}})],1),t._v(" "),a("el-col",{attrs:{span:2,align:"center"}},[a("el-tooltip",{attrs:{content:"开启之后，镜像到期会自动删除相关容器(默认开启)",placement:"top"}},[a("i",{staticClass:"el-icon-question"})])],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"自动下载镜像"}},[a("el-col",{attrs:{span:20}},[a("el-switch",{model:{value:t.data.is_synchronization,callback:function(e){t.$set(t.data,"is_synchronization",e)},expression:"data.is_synchronization"}})],1),t._v(" "),a("el-col",{attrs:{span:2,align:"center"}},[a("el-tooltip",{attrs:{content:"开启之后每隔 1 小时自动下载最新的镜像",placement:"top"}},[a("i",{staticClass:"el-icon-question"})])],1)],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.settingUpdate}},[t._v("修改")]),t._v(" "),a("el-button",[t._v("取消")])],1)],1)],1)],1)],1)},s=[],l=a("b775");function i(){return Object(l["a"])({url:"/setting/get",method:"get"})}function o(t){return Object(l["a"])({url:"/setting/update/",method:"post",data:t})}var r={name:"setting",data:function(){return{loading:!1,data:{share_username:"",username:"",pwd:"",time:"1800",is_synchronization:!1,del_container:!0,url_name:""}}},created:function(){this.initSetting()},methods:{initSetting:function(){var t=this;i().then((function(e){var a=e.data;if(200===a.status)t.data=a.data;else for(var n;n<a.msg.length;n++)t.$message({message:a.msg[n],type:"info"})}))},settingUpdate:function(){var t=this,e=new FormData;e.set("username",this.data.username),e.set("pwd",this.data.pwd),e.set("time",this.data.time),e.set("share_username",this.data.share_username),e.set("is_synchronization",this.data.is_synchronization),e.set("del_container",this.data.del_container),e.set("url_name",this.data.url_name),this.loading=!0,o(e).then((function(e){var a=e.data;t.loading=!1,200===a.status?(t.data=a.data,t.$message({message:"修改成功",type:"success"})):t.$message({message:a.msg,type:"error"})}))}}},c=r,d=(a("a3d7"),a("2877")),u=Object(d["a"])(c,n,s,!1,null,"0d0e01ec",null);e["default"]=u.exports},a3d7:function(t,e,a){"use strict";a("1c6e")}}]);
//# sourceMappingURL=chunk-0540d7be.a05530a2.js.map