(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4676406c"],{"7e1e":function(t,e,a){"use strict";a.d(e,"c",(function(){return r})),a.d(e,"b",(function(){return s})),a.d(e,"d",(function(){return o})),a.d(e,"a",(function(){return c}));var n=a("365c");function r(t){var e=t;return n["b"].get("board",{params:e})}function s(t){return n["b"].get("board/".concat(t))}function o(t){return n["b"].post("board",t)}function c(t){return n["b"].delete("board/".concat(t))}},afdd:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("h1",{staticStyle:{"text-align":"left","padding-top":"30px"}},[t._v("게시글 생성")]),a("hr"),a("div",{staticClass:"mb-2 row"},[a("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"title"}},[t._v("제목")]),a("div",{staticClass:"col-sm-10"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"form-control",attrs:{type:"text",id:"title"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})])]),a("hr"),a("div",{staticClass:"mb-3 row"},[a("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"boardtype"}},[t._v("종류")]),a("div",{staticClass:"col-sm-10"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.boardType,expression:"boardType"}],staticClass:"boardtype form-select",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.boardType=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"COMMUNITY"}},[t._v("자유게시판")]),a("option",{attrs:{value:"NOTICE"}},[t._v("공지사항")]),a("option",{attrs:{value:"FAQ"}},[t._v("자주묻는 질문")]),a("option",{attrs:{value:"INQUIRY"}},[t._v("1:1문의")])])])]),a("div",{staticClass:"mb-3 row"},[a("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"contents"}},[t._v("내용")]),a("div",{staticClass:"col-sm-10"},[a("ckeditor",{staticClass:"contents",model:{value:t.contents,callback:function(e){t.contents=e},expression:"contents"}})],1)]),a("div",{staticClass:"float-end"},[a("button",{staticClass:"btn btn-warning me-2",attrs:{type:"button"},on:{click:t.cancel}},[t._v(" 취소 ")]),a("button",{staticClass:"btn btn-primary me-2",attrs:{type:"button"},on:{click:t.save}},[t._v(" 저장 ")])]),a("hr")])},r=[],s=a("1da1"),o=(a("96cf"),a("7e1e")),c={created:function(){this.boardType=this.$route.query.type},data:function(){return{title:"",contents:"",boardType:""}},methods:{cancel:function(){var t=this.$route.query.type;"COMMUNITY"==t?this.$router.push({path:"/main"}):"NOTICE"==t?this.$router.push({path:"/notice"}):"FAQ"==t?this.$router.push({path:"/faq"}):"INQUIRY"==t?this.$router.push({path:"/inquiry"}):this.$router.push({path:"/main"})},save:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(""!=t.title&&""!=t.contents&&""!=t.boardType){e.next=2;break}return e.abrupt("return",t.$swal("제목,종류,내용 모두 채우세요"));case 2:return e.prev=2,e.next=5,Object(o["d"])({boardType:t.boardType,title:t.title,contents:t.contents});case 5:a=e.sent,n=a.data,console.log(n),t.$swal(n.message),t.cancel(),e.next=15;break;case 12:e.prev=12,e.t0=e["catch"](2),console.log(e.t0.response);case 15:case"end":return e.stop()}}),e,null,[[2,12]])})))()}}},i=c,l=a("2877"),u=Object(l["a"])(i,n,r,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-4676406c.2d9f2bfc.js.map