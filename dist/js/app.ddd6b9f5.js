(function(t){function e(e){for(var r,l,u=e[0],i=e[1],s=e[2],m=0,p=[];m<u.length;m++)l=u[m],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&p.push(a[l][0]),a[l]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);c&&c(e);while(p.length)p.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,u=1;u<n.length;u++){var i=n[u];0!==a[i]&&(r=!1)}r&&(o.splice(e--,1),t=l(l.s=n[0]))}return t}var r={},a={app:0},o=[];function l(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=t,l.c=r,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)l.d(n,r,function(e){return t[e]}.bind(null,r));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=e,u=u.slice();for(var s=0;s<u.length;s++)e(u[s]);var c=i;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Form",{on:{submitForm:t.onFormSubmit}}),n("TotalBalance",{attrs:{total:t.totalBalance}}),n("BudgetList",{attrs:{list:t.list},on:{deleteItem:t.onDeleteItem}})],1)},o=[],l=n("5530"),u=(n("07ac"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"budget-list-wrap"},[n("ElCard",{attrs:{header:t.header}},[t.isEmpty?n("ElAlert",{attrs:{type:"info",title:t.emptyTitle,closable:!1}}):t._l(t.list,(function(e,r){return n("div",{key:r,staticClass:"list-item"},[n("span",{staticClass:"budget-comment"},[t._v(t._s(e.comment))]),n("span",{staticClass:"budget-value"},[t._v(t._s(e.value))]),n("ElButton",{attrs:{type:"danger",size:"mini"},on:{click:function(n){return t.deleteItem(e.id)}}},[t._v("Delete")])],1)}))],2)],1)}),i=[],s=(n("b64b"),{name:"BudgetList",props:{list:{type:Object,default:function(){return{}}}},data:function(){return{header:"Budget List",emptyTitle:"Empty List"}},computed:{isEmpty:function(){return!Object.keys(this.list).length}},methods:{deleteItem:function(t){this.$emit("deleteItem",t)}}}),c=s,m=(n("5d34"),n("2877")),p=Object(m["a"])(c,u,i,!1,null,"d4bdb976",null),f=p.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"total-value"},[t._v("Balance: "+t._s(t.total))])},b=[],v=(n("a9e3"),{name:"TotalBalance",props:{total:{type:Number,default:0}}}),h=v,y=(n("965b"),Object(m["a"])(h,d,b,!1,null,"743733c8",null)),g=y.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ElCard",{staticClass:"form-card"},[n("ElForm",{ref:"addItemForm",attrs:{model:t.formData,rules:t.rules,"lable-position":"top"}},[n("ElFormItem",{attrs:{label:"Type",prop:"type"}},[n("ElSelect",{staticClass:"type-select",attrs:{placeholder:"Choose type..."},model:{value:t.formData.type,callback:function(e){t.$set(t.formData,"type",e)},expression:"formData.type"}},[n("ElOption",{attrs:{lable:"Income",value:"INCOME"}}),n("ElOption",{attrs:{lable:"Outcome",value:"OUTCOME"}})],1)],1),n("ElFormItem",{attrs:{label:"Comments",prop:"comment"}},[n("ElInput",{model:{value:t.formData.comment,callback:function(e){t.$set(t.formData,"comment",e)},expression:"formData.comment"}})],1),n("ElFormItem",{attrs:{label:"Value",prop:"value"}},[n("ElInput",{model:{value:t.formData.value,callback:function(e){t.$set(t.formData,"value",t._n(e))},expression:"formData.value"}})],1),n("ElButton",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("Submit")])],1)],1)},E=[],_={name:"Form",data:function(){return{formData:{type:"INCOME",comment:"",value:0},rules:{type:[{required:!0,message:"Please select type",trigger:"blur"}],comment:[{required:!0,message:"Please input comment",trigger:"change"}],value:[{required:!0,message:"Please input value",trigger:"change"},{type:"number",message:"Value must be a number",trigger:"change"}]}}},methods:{onSubmit:function(){var t=this;this.$refs.addItemForm.validate((function(e){e&&(t.$emit("submitForm",Object(l["a"])({},t.formData)),t.$refs.addItemForm.resetFields())}))}}},I=_,j=(n("679c"),Object(m["a"])(I,O,E,!1,null,"f163ae02",null)),C=j.exports,F={name:"app",components:{BudgetList:f,TotalBalance:g,Form:C},data:function(){return{list:{1:{type:"INCOME",value:100,comment:"Some comment",id:1},2:{type:"OUTCOME",value:-50,comment:"Some outcome comment",id:2}}}},computed:{totalBalance:function(){return Object.values(this.list).reduce((function(t,e){return t+e.value}),0)}},methods:{onDeleteItem:function(t){this.$delete(this.list,t)},onFormSubmit:function(t){var e=Object(l["a"])(Object(l["a"])({},t),{},{id:String(Math.random())});this.$set(this.list,e.id,e)}}},D=F,S=(n("034f"),Object(m["a"])(D,a,o,!1,null,null,null)),$=S.exports,x=(n("159b"),n("b2d6")),B=n.n(x),w=n("4897"),T=n.n(w),k=(n("377f"),n("5c96")),M=[k["Button"],k["Card"],k["Form"],k["FormItem"],k["Input"],k["Select"],k["Option"],k["Alert"]];T.a.use(B.a),M.forEach((function(t){return r["default"].use(t,{locale:T.a})})),r["default"].config.productionTip=!1,new r["default"]({render:function(t){return t($)}}).$mount("#app")},"5d34":function(t,e,n){"use strict";n("e491")},"679c":function(t,e,n){"use strict";n("e7e6")},"85ec":function(t,e,n){},"965b":function(t,e,n){"use strict";n("e2dc")},e2dc:function(t,e,n){},e491:function(t,e,n){},e7e6:function(t,e,n){}});
//# sourceMappingURL=app.ddd6b9f5.js.map