(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b41f2354"],{"0988":function(t,e,a){"use strict";function r(t){var e=new Date(1e3*t),a=e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()+" "+e.getHours()+"시"+e.getMinutes()+"분";return a}a.d(e,"a",(function(){return r}))},"7cd0":function(t,e,a){},"7e1e":function(t,e,a){"use strict";a.d(e,"c",(function(){return n})),a.d(e,"b",(function(){return o})),a.d(e,"d",(function(){return s})),a.d(e,"a",(function(){return i}));var r=a("365c");function n(t){var e=t;return r["b"].get("board",{params:e})}function o(t){return r["b"].get("board/".concat(t))}function s(t){return r["b"].post("board",t)}function i(t){return r["b"].delete("board/".concat(t))}},af85:function(t,e,a){"use strict";a("7cd0")},ca75:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("h1",{staticStyle:{"text-align":"left","padding-top":"30px"}},[t._v("게시글")]),a("hr"),a("div",{staticClass:"mb-2 row"},[a("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"title"}},[t._v("제목")]),a("div",{staticClass:"col-sm-10"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.board.title,expression:"board.title"}],staticClass:"form-control-plaintext",attrs:{type:"text",readonly:"",id:"title"},domProps:{value:t.board.title},on:{input:function(e){e.target.composing||t.$set(t.board,"title",e.target.value)}}})])]),a("hr"),a("div",{staticClass:"mb-3 row"},[a("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"date"}},[t._v("게시일")]),a("div",{staticClass:"col-sm-10"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.regDate,expression:"regDate"}],staticClass:"form-control-plaintext",attrs:{type:"text",readonly:"",id:"date"},domProps:{value:t.regDate},on:{input:function(e){e.target.composing||(t.regDate=e.target.value)}}})])]),a("div",{staticClass:"mb-3 row"},[a("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"boardtype"}},[t._v("종류")]),a("div",{staticClass:"col-sm-10"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.label,expression:"label"}],staticClass:"form-control-plaintext",attrs:{type:"text",readonly:"",id:"boardtype"},domProps:{value:t.label},on:{input:function(e){e.target.composing||(t.label=e.target.value)}}})])]),a("div",{staticClass:"mb-3 row"},[a("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"contents"}},[t._v("내용")]),a("div",{staticClass:"col-sm-10"},[a("div",{staticClass:"editable",attrs:{id:"contents",contenteditable:"false"},domProps:{innerHTML:t._s(t.board.contents)}})])]),a("div",{staticClass:"mb-3 row"},[a("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"viewcount"}},[t._v("조회수")]),a("div",{staticClass:"col-sm-10"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.board.viewCount,expression:"board.viewCount"}],staticClass:"form-control-plaintext",attrs:{type:"text",readonly:"",id:"viewcount"},domProps:{value:t.board.viewCount},on:{input:function(e){e.target.composing||t.$set(t.board,"viewCount",e.target.value)}}})])]),a("div",{staticClass:"float-end"},[a("button",{staticClass:"btn btn-primary me-2",attrs:{type:"button"},on:{click:t.boardEdit}},[t._v(" 수정 ")]),a("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.boardDelete}},[t._v(" 삭제 ")])]),a("hr")])},n=[],o=a("1da1"),s=(a("96cf"),a("7e1e")),i=a("0988"),l={created:function(){this.fetchData()},data:function(){return{board:{},label:"",regDate:""}},methods:{fetchData:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a,r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,a=t.$route.params.id,e.next=4,Object(s["b"])(a);case 4:r=e.sent,n=r.data,null==n.data&&(t.$swal(n.message),t.$router.push({path:"/main"})),console.log(n.data),t.regDate=Object(i["a"])(n.data.regDate/1e3),t.label=n.data.boardType.label,t.board=n.data,e.next=16;break;case 13:e.prev=13,e.t0=e["catch"](0),console.log(e.t0.response);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))()},boardEdit:function(){var t=this.$route.params.id;this.$router.push({path:"/edit/".concat(t)})},boardDelete:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a,r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,a=t.$route.params.id,e.next=4,Object(s["a"])(a);case 4:r=e.sent,n=r.data,console.log(n),t.$swal(n.message),t.$router.push({path:"/main"}),e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](0),console.log(e.t0.response);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))()}}},c=l,u=(a("af85"),a("2877")),d=Object(u["a"])(c,r,n,!1,null,"0d094ac8",null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-b41f2354.57e2b29e.js.map