(function(e){function t(t){for(var s,o,i=t[0],c=t[1],u=t[2],m=0,d=[];m<i.length;m++)o=i[m],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);l&&l(t);while(d.length)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],s=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(s=!1)}s&&(r.splice(t--,1),e=o(o.s=n[0]))}return e}var s={},a={app:0},r=[];function o(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=s,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(n,s,function(t){return e[t]}.bind(null,s));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var s=n("8a23"),a=n.n(s);a.a},1:function(e,t){},3223:function(e,t,n){},"4dc0":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("div",[n("router-view",{attrs:{name:"Header"}}),n("router-view",{attrs:{name:"Home"}})],1)])},r=[],o=n("eb7a"),i=n.n(o),c={created:function(){var e=this;this.$store.state.socket.on("message",(function(t){e.$store.state.messages.push(t),t.username!==e.$store.state.username&&(document.title="New message ( ".concat(t.username," )"))})),this.$store.state.socket.on("user",(function(t){e.$store.state.messages.push({id:i()(),content:"".concat(t," has entered the chat"),alert:!0})})),this.$store.state.socket.on("user-disconnect",(function(t){e.$store.state.messages.push({id:i()(),content:"".concat(t," has left the chat"),alert:!0})}))}},u=c,l=(n("034f"),n("2877")),m=n("6544"),d=n.n(m),f=n("7496"),p=Object(l["a"])(u,a,r,!1,null,null,null),v=p.exports;d()(p,{VApp:f["a"]});var h=n("8c4f"),b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{fluid:""}},[n("v-row",{attrs:{justify:"center"}},[n("v-col",{staticClass:"text-center"},[n("v-icon",[e._v("mdi-weather-night")])],1)],1)],1)},g=[],y=n("62ad"),_=n("a523"),O=n("132d"),k=n("0fd9"),x={},w=Object(l["a"])(x,b,g,!1,null,null,null),j=w.exports;d()(w,{VCol:y["a"],VContainer:_["a"],VIcon:O["a"],VRow:k["a"]});var S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[""===e.username?n("app-name-picker"):n("app-chat")],1)},V=[],$=n("5530"),C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-list",{staticClass:"mx-10 list px-10",attrs:{id:"list"}},[n("p",{staticClass:"text-center"},[e._v("Say hello 🤠")]),n("v-slide-x-reverse-transition",{attrs:{group:""}},e._l(e.messages,(function(t){return n("v-list-item",{key:t.id,class:t.alert?"":""+(e.username===t.username?e.classForOwnMessage:e.classForMessage)},[n("v-list-item-content",[n("v-list-item-title",{class:t.alert?"":e.username===t.username?"message__user-text":"message-text"},[e._v(e._s(t.alert?"":t.username+" says: ")+" ")]),n("v-list-item-subtitle",[n("p",{class:t.alert?"new__user-alert":"text-wrap headline"},[e._v(" "+e._s(t.content)+" ")])])],1)],1)})),1)],1),n("app-input-message",{staticClass:"mx-10 my-4",on:{"send-message":e.addMessage}})],1)},E=[],M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"d-flex align-center"},[n("v-text-field",{attrs:{placehoder:"Write a message"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.sendMessage(t)}},model:{value:e.message,callback:function(t){e.message=t},expression:"message"}}),n("v-btn",{staticClass:"ml-4",attrs:{icon:"",color:"primary"},on:{click:e.sendMessage}},[n("v-icon",[e._v("mdi-send")])],1)],1)},P=[],L={data:function(){return{message:""}},methods:{sendMessage:function(){this.$emit("send-message",this.message),this.message=""}}},T=L,U=n("8336"),F=n("8654"),H=Object(l["a"])(T,M,P,!1,null,null,null),I=H.exports;d()(H,{VBtn:U["a"],VIcon:O["a"],VTextField:F["a"]});var N=n("2f62"),R={computed:Object($["a"])(Object($["a"])({},Object(N["b"])(["socket","messages","username","usersOnChat"])),{},{classForOwnMessage:function(){return"text-right my-4 message message__user"},classForMessage:function(){return"text-left my-4 message"}}),components:{"app-input-message":I},methods:{addMessage:function(e){""!==e&&this.socket.emit("new-message",{id:i()(),content:e,username:this.username})}},updated:function(){var e=this.$el.querySelector("#list");e.scrollTo(0,e.scrollHeight)},created:function(){"Notification"in window&&Notification.requestPermission()},mounted:function(){document.addEventListener("visibilitychange",(function(){"visible"===document.visibilityState&&(document.title="wannacry")}))}},A=R,B=(n("f196"),n("8860")),q=n("da13"),J=n("5d23"),D=n("0789"),W=Object(l["a"])(A,C,E,!1,null,null,null),X=W.exports;d()(W,{VList:B["a"],VListItem:q["a"],VListItemContent:J["a"],VListItemSubtitle:J["b"],VListItemTitle:J["c"],VSlideXReverseTransition:D["c"]});var z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"name__picker"},[n("p",{staticClass:"mb-6"},[e._v("Select your username")]),n("v-text-field",{attrs:{label:"Username",placeholder:"Username",solo:""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.updateUsername(t)}},model:{value:e.usernameSelected,callback:function(t){e.usernameSelected=t},expression:"usernameSelected"}}),n("v-btn",{attrs:{right:"",absolute:"",bottom:""},on:{click:e.updateUsername}},[e._v("Ok")])],1)},G=[],K={data:function(){return{usernameSelected:""}},computed:Object($["a"])({},Object(N["b"])(["socket"])),methods:Object($["a"])(Object($["a"])({},Object(N["c"])(["username"])),{},{updateUsername:function(){""!==this.usernameSelected&&(this.username(this.usernameSelected),this.socket.emit("new-user",this.usernameSelected))}})},Q=K,Y=(n("befa"),Object(l["a"])(Q,z,G,!1,null,"9aeb97fe",null)),Z=Y.exports;d()(Y,{VBtn:U["a"],VTextField:F["a"]});var ee={computed:Object($["a"])({},Object(N["b"])(["username"])),components:{"app-chat":X,"app-name-picker":Z}},te=ee,ne=Object(l["a"])(te,S,V,!1,null,"204a7a9a",null),se=ne.exports;s["a"].use(h["a"]);var ae=[{path:"/",name:"Home",components:{Header:j,Home:se},meta:{title:"Skere"}}],re=new h["a"]({mode:"history",base:"/",routes:ae}),oe=re,ie=n("f309");s["a"].use(ie["a"]);var ce=new ie["a"]({theme:{dark:!0}}),ue=n("8055"),le=n.n(ue),me=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_URL,de=le()(me);s["a"].use(N["a"]);var fe=new N["a"].Store({state:{socket:de,messages:[],username:""},getters:{socket:function(e){return e.socket},messages:function(e){return e.messages},username:function(e){return e.username}},mutations:{username:function(e,t){return e.username=t}},actions:{},modules:{}});s["a"].config.productionTip=!1,new s["a"]({router:oe,vuetify:ce,store:fe,render:function(e){return e(v)}}).$mount("#app")},"8a23":function(e,t,n){},befa:function(e,t,n){"use strict";var s=n("3223"),a=n.n(s);a.a},f196:function(e,t,n){"use strict";var s=n("4dc0"),a=n.n(s);a.a}});
//# sourceMappingURL=app.d5fafc25.js.map