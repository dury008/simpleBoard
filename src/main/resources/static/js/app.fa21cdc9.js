(function(e){function t(t){for(var r,a,o=t[0],s=t[1],i=t[2],l=0,f=[];l<o.length;l++)a=o[l],Object.prototype.hasOwnProperty.call(u,a)&&u[a]&&f.push(u[a][0]),u[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);h&&h(t);while(f.length)f.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var o=n[a];0!==u[o]&&(r=!1)}r&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},u={app:0},c=[];function o(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-2d0aed93":"e85e3b39","chunk-432f9ab2":"0d42f584","chunk-4676406c":"2d9f2bfc","chunk-4a58e7cd":"bc5635e9","chunk-51b8528b":"d71c663b","chunk-5ca3340e":"a6f8808b","chunk-649bb374":"cf8db3dd","chunk-b41f2354":"57e2b29e","chunk-ccacbd92":"58f8e666","chunk-eda7d5b8":"74636973"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-432f9ab2":1,"chunk-51b8528b":1,"chunk-5ca3340e":1,"chunk-649bb374":1,"chunk-b41f2354":1,"chunk-ccacbd92":1,"chunk-eda7d5b8":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d0aed93":"31d6cfe0","chunk-432f9ab2":"387cb683","chunk-4676406c":"31d6cfe0","chunk-4a58e7cd":"31d6cfe0","chunk-51b8528b":"f9cba620","chunk-5ca3340e":"387cb683","chunk-649bb374":"387cb683","chunk-b41f2354":"99bc5f63","chunk-ccacbd92":"387cb683","chunk-eda7d5b8":"972f46f8"}[e]+".css",u=s.p+r,c=document.getElementsByTagName("link"),o=0;o<c.length;o++){var i=c[o],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===r||l===u))return t()}var f=document.getElementsByTagName("style");for(o=0;o<f.length;o++){i=f[o],l=i.getAttribute("data-href");if(l===r||l===u)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var r=t&&t.target&&t.target.src||u,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],h.parentNode.removeChild(h),n(c)},h.href=u;var d=document.getElementsByTagName("head")[0];d.appendChild(h)})).then((function(){a[e]=0})));var r=u[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=u[e]=[t,n]}));t.push(r[2]=c);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=o(e);var f=new Error;i=function(t){l.onerror=l.onload=null,clearTimeout(h);var n=u[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}u[e]=void 0}};var h=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var f=0;f<i.length;f++)t(i[f]);var h=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"365c":function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n("bc3a"),a=n.n(r),u=n("1da1"),c=(n("d3b7"),n("96cf"),n("2b27")),o=n.n(c),s=n("4360"),i=n("e26c"),l=n("2b0e");function f(e){return e.interceptors.request.use(function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.timeout=1e4,t.headers["Authorization"]="Bearer ".concat(o.a.get("accessToken")),e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(e){return Promise.reject(e)})),e.interceptors.response.use((function(e){return e}),function(){var t=Object(u["a"])(regeneratorRuntime.mark((function t(n){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,r=n.response.config,401!=n.response.status||null==o.a.get("refreshToken")){t.next=10;break}return t.next=5,s["a"].dispatch("REFRESH_TOKEN");case 5:return t.next=7,e(r);case 7:return t.abrupt("return",t.sent);case 10:return l["default"].swal("Please Login"),t.abrupt("return",i["a"].push({path:"/login"}));case 12:t.next=17;break;case 14:t.prev=14,t.t0=t["catch"](0),console.error("[axios.interceptors.response] error : ",t.t0.message);case 17:return t.abrupt("return",Promise.reject(n));case 18:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(e){return t.apply(this,arguments)}}()),e}function h(){return a.a.create({baseURL:"http://localhost:3000/"})}function d(){var e=a.a.create({baseURL:"http://localhost:3000/"});return f(e)}var p=h(),b=d()},3786:function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"a",(function(){return u})),n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return o}));var r=n("365c");function a(e){return r["a"].post("api/auth/signup/",e)}function u(e){return r["a"].post("api/auth/signin/",e)}function c(e){return r["a"].post("api/auth/refreshtoken/",e)}function o(e){return r["a"].post("api/auth/logout/",e)}},4360:function(e,t,n){"use strict";var r=n("2b0e"),a=n("2f62"),u=n("1da1"),c=(n("96cf"),n("3786")),o=n("2b27"),s=n.n(o),i={state:{accessToken:s.a.get("accessToken"),refreshToken:s.a.get("refreshToken"),userId:s.a.get("userId"),username:s.a.get("username")},mutations:{loginToken:function(e,t){s.a.set("accessToken",t.accessToken,"1h"),s.a.set("refreshToken",t.refreshToken,"2h"),s.a.set("username",t.username,"2h"),s.a.set("userId",t.id,"2h"),e.username=t.username,e.accessToken=t.accessToken,e.refreshToken=t.refreshToken,e.userId=t.id},refreshToken:function(e,t){s.a.set("accessToken",t.accessToken,"1h"),e.accessToken=t.accessToken},logout:function(e){e.username=null,e.accessToken=null,e.refreshToken=null,e.userId=null,s.a.remove("accessToken"),s.a.remove("refreshToken"),s.a.remove("userId"),s.a.remove("username")}},getters:{},actions:{LOGIN:function(e,t){return Object(u["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,Object(c["a"])(t);case 3:return a=n.sent,r("loginToken",a.data),n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})))()},REFRESH_TOKEN:function(e){return Object(u["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,Object(c["c"])({refreshToken:s.a.get("refreshToken")});case 3:return r=t.sent,n("refreshToken",r.data),t.abrupt("return",r);case 6:case"end":return t.stop()}}),t)})))()},LOGOUT:function(e,t){return Object(u["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,Object(c["b"])(t);case 3:return a=n.sent,r("logout"),n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})))()}}},l=i;r["default"].use(a["a"]);t["a"]=new a["a"].Store({modules:{login:l}})},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light fixed-top"},[n("div",{staticClass:"container"},[n("router-link",{staticClass:"navbar-brand",attrs:{to:"/main"}},[e._v("simple board")]),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarResponsive"}},[n("ul",{staticClass:"navbar-nav ml-auto"},[n("li",{staticClass:"nav-item active"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/main"}},[e._v("Community")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/notice"}},[e._v("Notice")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/faq"}},[e._v("FAQ")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/inquiry"}},[e._v("Inquiry")])],1)])]),n("ul",{directives:[{name:"show",rawName:"v-show",value:null!=this.$store.state.login.username,expression:"this.$store.state.login.username != null"}],staticClass:"nav navbar-nav"},[n("p",{staticStyle:{color:"black"}},[e._v(" user: "+e._s(this.$store.state.login.username)+" ")]),n("li",{staticClass:"nav-item"},[n("button",{staticClass:"btn",on:{click:e.logout}},[e._v("LogOut")])])])],1)]),n("router-view"),e._m(0)],1)},u=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticClass:"py-5 bg-light container-fluid fixed-bottom"},[n("div",{staticClass:"container"},[n("p",{staticClass:"m-0 text-center text-black"},[e._v("Copyright © dury008 2021")])])])}],c=n("1da1"),o=(n("96cf"),{name:"App",methods:{logout:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("LOGOUT",{userId:e.$store.state.login.userId});case 2:n=t.sent,console.log(n),e.$router.push({path:"/login"});case 5:case"end":return t.stop()}}),t)})))()}}}),s=o,i=(n("034f"),n("2877")),l=Object(i["a"])(s,a,u,!1,null,null,null),f=l.exports,h=n("e26c"),d=n("4360"),p=n("f9d5"),b=n.n(p),m=(n("4413"),n("5f5b")),k=(n("ab8b"),n("2dd8"),n("25ae")),v=n.n(k);r["default"].use(v.a),r["default"].use(m["a"]),r["default"].use(b.a),r["default"].config.productionTip=!1,new r["default"]({render:function(e){return e(f)},router:h["a"],store:d["a"]}).$mount("#app")},"85ec":function(e,t,n){},e26c:function(e,t,n){"use strict";var r=n("1da1"),a=(n("96cf"),n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),u=n("2b0e"),c=n("4360"),o=n("2b27"),s=n.n(o);u["default"].use(a["a"]);var i=new a["a"]({mode:"history",routes:[{path:"/",redirect:"/login"},{path:"/login",component:function(){return n.e("chunk-51b8528b").then(n.bind(null,"48ca"))}},{path:"/signup",component:function(){return n.e("chunk-eda7d5b8").then(n.bind(null,"560f"))}},{path:"/main",component:function(){return n.e("chunk-5ca3340e").then(n.bind(null,"4385"))}},{path:"/faq",component:function(){return n.e("chunk-432f9ab2").then(n.bind(null,"2852"))}},{path:"/inquiry",component:function(){return n.e("chunk-ccacbd92").then(n.bind(null,"53ee"))}},{path:"/notice",component:function(){return n.e("chunk-649bb374").then(n.bind(null,"ca2c"))}},{path:"/detail/:id",component:function(){return n.e("chunk-b41f2354").then(n.bind(null,"ca75"))}},{path:"/edit/:id",component:function(){return n.e("chunk-4a58e7cd").then(n.bind(null,"31b8"))}},{path:"/create",component:function(){return n.e("chunk-4676406c").then(n.bind(null,"afdd"))}},{path:"*",component:function(){return n.e("chunk-2d0aed93").then(n.bind(null,"0c8b"))}}]});i.beforeEach(function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t,n,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(console.log(t),"/login"===t.path||"/signup"===t.path){e.next=11;break}if(null!==s.a.get("accessToken")||null===s.a.get("refreshToken")){e.next=5;break}return e.next=5,c["a"].dispatch("REFRESH_TOKEN");case 5:if(null!==s.a.get("accessToken")||null!==s.a.get("refreshToken")){e.next=8;break}return u["default"].swal("Please Login"),e.abrupt("return",r("/login"));case 8:return e.abrupt("return",r());case 11:if(null===s.a.get("refreshToken")){e.next=13;break}return e.abrupt("return",r("/main"));case 13:return e.abrupt("return",r());case 14:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}()),t["a"]=i}});
//# sourceMappingURL=app.fa21cdc9.js.map