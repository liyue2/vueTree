webpackJsonp([1],{FSjD:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("MVMM"),i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var o=n("Z0/y")({name:"App"},i,!1,function(e){n("bbJY")},null,null).exports,s=n("zO6J");n("aozt");var d={name:"公安卷宗目录",code:"10000",child:[{name:"刑事侦查卷 正卷",code:"11000",child:[{name:"诉讼文书及技术性鉴定材料部分",code:"11100",child:[{name:"卷宗封面",code:"11101"},{name:"卷内目录",code:"11102"},{name:"立案、管辖文书",code:"11103"},{name:"回避、律师参与诉讼文书",code:"11104"},{name:"强制措施文书",code:"11105"},{name:"侦查文书",code:"11106"},{name:"检验、鉴定、认定结论及相关文书",code:"11107"},{name:"结案文书",code:"11108"},{name:"卷宗封底",code:"11109"}]},{name:"证据部分",code:"11200",child:[{name:"卷宗封面",code:"11201"},{name:"卷内目录",code:"11202"},{name:"犯罪嫌疑人供述、详解",code:"11203"},{name:"证人证言、被害人陈述及相关文书",code:"11204"},{name:"勘验、检查、搜取、调取所获得证据及相关文件",code:"11205"},{name:"犯罪嫌疑人身份材料",code:"11206"},{name:"卷宗封底",code:"11207"}]}]},{name:"刑事侦查卷 副卷",code:"12000",child:[{name:"卷宗封面",code:"12001"},{name:"卷宗封底",code:"12002"}]}]},c={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{staticClass:"folderWrapper"},[n("div",{staticClass:"name"},[e.control?n("span",{on:{click:e.toggle}},[e.open?n("i",{staticClass:"iconfont icon-caozuo-zhedie"}):e._e(),e._v(" "),e.open?e._e():n("i",{staticClass:"iconfont icon-caozuo-zhankai"})]):e._e(),e._v(" "),e.newModel.data?n("span",{class:{left:!e.control}},[e._v(e._s(e.newModel.data.menuName))]):e._e()]),e._v(" "),e.control?n("ul",{directives:[{name:"show",rawName:"v-show",value:!e.isFolder,expression:"!isFolder"}],staticClass:"panel"},e._l(e.model.childTreeNode,function(e){return n("Items",{key:e.id,attrs:{model:e}})})):e._e()])},staticRenderFns:[]};var r={data:function(){return{testData:d,resultData:[],tempOptions:[],treedata:[{id:"1",data:{menuName:"项目管理",menuCode:""},childTreeNode:[{id:"101",data:{menuName:"项目",menuCode:"BusProject"},childTreeNode:[{id:"1001",data:{menuName:"上海项目组",menuCode:"shanghai"}},{id:"1002",data:{menuName:"北京项目组",menuCode:"beijing"}}]},{id:"102",data:{menuName:"我的任务",menuCode:"BusProject"},childTreeNode:[]},{id:"103",data:{menuName:"人员周报",menuCode:"BusProject"},childTreeNode:[]}]},{id:"2",data:{menuName:"数据统计",menuCode:"BusClock"},childTreeNode:[{id:"201",data:{menuName:"流量统计",menuCode:"2011"}},{id:"202",data:{menuName:"人员统计",menuCode:"2021"}}]},{id:"3",data:{menuName:"人事管理",menuCode:""},childTreeNode:[{id:"33",data:{menuName:"新人入职手续",menuCode:""}},{id:"34",data:{menuName:"公积金缴纳",menuCode:""}}]},{id:"4",data:{menuName:"基础管理",menuCode:""},childTreeNode:[{id:"41",data:{menuName:"日常报销",menuCode:""}}]}]}},created:function(){this.pushFirst(),this.initOptions(this.testData)},methods:{switchState:function(e){var t=!this.resultData[e].isShow;this.$set(this.resultData[e],"isShow",t)},select:function(e,t){this.$set(this.resultData[t],"name",e.name),this.$set(this.resultData[t],"isShow",!1);var n=this.findExact(this.testData,e.code,e.name);this.initOptions(n,t)},findExact:function(e,t,n){if(e.code===t&&e.name===n)return e;if(e.child&&e.child.length>0){var a=e.child.find(function(e){return e.code===t&&e.name===n});if(a)return a;if(!a)for(var i=e.child.length,o=0;o<i;o++){var s=this.findExact(e.child[o],t,n);if(s)return s}return!1}return!1},pushFirst:function(){var e=this.testData,t=e.name,n=e.code;this.resultData.push({name:t,code:n,isShow:!1,options:[{name:t,code:n}]})},initOptions:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;this.tempOptions=[],this.tempOptions.length=0,this.getOptions(e),this.comOptions(this.tempOptions,t)},getOptions:function(e){if(e.child&&e.child.length>0){var t=e.child.map(function(e){return{name:e.name,code:e.code}});this.tempOptions.push(t),this.getOptions(e.child[0])}},comOptions:function(e,t){this.tempOptions=e.map(function(e){return{name:e[0].name,code:e[0].code,isShow:!1,options:e}}),this.resultData.splice(t+1),this.resultData.push.apply(this.resultData,this.tempOptions)}},components:{Items:n("Z0/y")({name:"Items",props:["model"],data:function(){return{isFolder:!0,open:!1,newModel:this.model}},created:function(){},computed:{control:function(){return this.model.childTreeNode&&this.model.childTreeNode.length}},methods:{toggle:function(){this.open=!this.open,this.isFolder=!this.isFolder}}},c,!1,function(e){n("NoOl")},null,null).exports}},m={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"parent"},[e._l(e.treedata,function(e){return n("Items",{key:e.id,attrs:{model:e}})}),e._v(" "),e._l(e.resultData,function(t,a){return n("div",{key:t.code,staticClass:"wrapper",style:{marginTop:"50px"}},[n("input",{staticClass:"input",attrs:{type:"text",readonly:""},domProps:{value:t.name},on:{click:function(t){e.switchState(a)}}}),e._v(" "),n("ul",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"item.isShow"}],staticClass:"downList"},e._l(t.options,function(t){return n("li",{key:t.code,on:{click:function(n){e.select(t,a)}}},[e._v(e._s(t.name))])}))])})],2)},staticRenderFns:[]};var l=n("Z0/y")(r,m,!1,function(e){n("FSjD")},null,null).exports;a.a.use(s.a);var u=new s.a({routes:[{path:"/",name:"HelloWorld",component:l}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:u,components:{App:o},template:"<App/>"})},NoOl:function(e,t){},bbJY:function(e,t){}},["NHnr"]);