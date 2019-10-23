(function(t){function e(e){for(var s,r,o=e[0],u=e[1],c=e[2],d=0,m=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&m.push(i[r][0]),i[r]=0;for(s in u)Object.prototype.hasOwnProperty.call(u,s)&&(t[s]=u[s]);l&&l(e);while(m.length)m.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,o=1;o<a.length;o++){var u=a[o];0!==i[u]&&(s=!1)}s&&(n.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},i={app:0},n=[];function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(a,s,function(e){return t[e]}.bind(null,s));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/task-guy/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var l=u;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0310":function(t,e,a){},"034f":function(t,e,a){"use strict";var s=a("64a9"),i=a.n(s);i.a},"35aa":function(t,e,a){"use strict";var s=a("4950"),i=a.n(s);i.a},"43bf":function(t,e,a){},4950:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[1==t.displayModal?a("introduction-modal",{on:{"add:username":t.updatedUsername},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}):t._e(),a("p",{attrs:{id:"app-header"}},[t._v("Mr. Task Guy")]),a("span",{attrs:{id:"user-display"},on:{click:function(e){t.displayModal=!0}}},[t._v("Current user: "+t._s(this.username))]),a("nav",[a("router-link",{attrs:{to:"/"}},[t._v("Home")]),a("router-link",{attrs:{to:"/about"}},[t._v("Library")])],1),a("router-view")],1)},n=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return!0===t.showModal?a("div",{staticClass:"modal-container"},[!0===t.showModal?a("div",{staticClass:"modal-dimmer",on:{click:t.toggleModal,keypressc:t.hideModal}}):t._e(),a("div",{staticClass:"modal"},[a("h2",[t._v(t._s(t.message1))]),a("p",[t._v(t._s(t.message))]),a("form",{on:{submit:function(e){return e.preventDefault(),t.submitModal(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],attrs:{id:"name-field",type:"text",name:""},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})])])]):t._e()},o=[],u={name:"IntroductionModal",components:{},data:function(){return{message1:"Hello, I am Mr. Task Guy.",message:" Don't believe we've met before; what's your name?",showModal:!1,username:""}},methods:{toggleModal:function(){!0===this.showModal?this.showModal=!1:this.showModal=!0},submitModal:function(){this.$emit("add:username",this.username),this.showModal=!1},initialDispay:function(){""!==this.username&&"jake"!==this.username||(this.showModal=!0)},hideModal:function(){this.showModal=!1}},computed:{},watch:{},created:function(){},mounted:function(){this.initialDispay()},updated:function(){},destroyed:function(){}},c=u,l=(a("bd28"),a("2877")),d=Object(l["a"])(c,r,o,!1,null,"50d57713",null),m=d.exports,p={name:"app",components:{IntroductionModal:m},data:function(){return{username:"",userDisplay:"Current user: "+this.username,displayModal:!0}},methods:{updatedUsername:function(t){console.log("event works!"),this.username=t,localStorage.setItem("taskGuyUsername",this.username)},checkForExistinguser:function(){var t=localStorage.getItem("taskGuyUsername");t?(this.username=t,this.displayModal=!1):this.displayModal=!0}},mounted:function(){this.checkForExistinguser()}},f=p,h=(a("034f"),Object(l["a"])(f,i,n,!1,null,null,null)),v=h.exports,k=a("7bb1"),y=a("8c4f"),g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},[a("div",{attrs:{id:"list-container"}},[a("form",{attrs:{autocomplete:"off"},on:{submit:function(e){return e.preventDefault(),t.addItem(e)}}},[a("div",{staticClass:"button-container"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.task,expression:"task"},{name:"validate",rawName:"v-validate",value:"min:5",expression:"'min:5'"}],ref:"inputField",attrs:{type:"text",placeholder:"Enter a task here...",name:"task",id:"task-input"},domProps:{value:t.task},on:{input:function(e){e.target.composing||(t.task=e.target.value)}}}),a("input",{attrs:{type:"submit",value:"+",id:"submit-button"}})])]),a("div",{staticClass:"task-list-view"},[a("ul",[a("transition-group",{attrs:{name:"list","enter-active-class":"animated bounceInUp","leave-active-class":"animated bounceOutDown"}},t._l(t.tasks,(function(e,s){return a("li",{key:s,staticClass:"taskItem"},[a("span",{staticClass:"task-text",on:{click:function(e){return t.toggleItemReveal(s)}}},[t._v(t._s(e.name))]),t.revealStatus===s?a("div",{staticClass:"item-data-display"},[!0!==t.editDetails&&e.details?a("p",{on:{click:function(e){t.editDetails=!0}}},[t._v(t._s(e.details))]):a("input",{directives:[{name:"model",rawName:"v-model",value:e.details,expression:"task.details"}],ref:"detailsInput",refInFor:!0,staticClass:"details-input",attrs:{type:"text"},domProps:{value:e.details},on:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.updateItem(s)},input:function(a){a.target.composing||t.$set(e,"details",a.target.value)}}}),!0!==t.editDetails&&e.details?t._e():a("input",{staticClass:"details-save",attrs:{type:"button",value:"OK"},on:{click:function(e){return t.updateItem(s)}}})]):t._e(),a("i",{staticClass:"fa fa-minus-circle",on:{click:function(e){return t.deleteItem(s)}}})])})),0)],1)]),a("message-center",{staticClass:"messageBox",attrs:{actionBrief:t.actionBrief,itemCount:t.itemCount}})],1),a("div",{class:{alert:t.showAlert}})])},b=[],_=(a("7f7f"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("p",[t._v(t._s(t.evaluateBrief(this.actionBrief)))])])}),w=[],C=(a("c5f6"),{name:"MessageCenter",props:{actionBrief:Object,itemCount:Number,currentUser:String},data:function(){return{message:"Welcome to Task Guy"}},methods:{evaluateBrief:function(t){var e=t.name,a=t.type,s=t.status,i="";switch(a){case"add":"success"===s?i="The item ".concat(e," was successfully ").concat(a,"ed"):"error"===s&&(i="The item ".concat(e," was not ").concat(a,"ed"));break;case"delete":"success"===s?i="The item ".concat(e," was successfully ").concat(a,"d"):"error"===s&&(i="The item ".concat(e," was not ").concat(a,"d"));break;case"reveal":i="reveal"===s?"Viewing details of ".concat(e):this.itemCount>1?"You got ".concat(this.itemCount," tasks!"):1===this.itemCount?"You gone and got yourself a task!":"Not a damn task to your name!";break;case"update":"success"===s?i="The item ".concat(e," was successfully ").concat(a,"d"):"error"===s&&(i="The item ".concat(e," was not ").concat(a,"d"));break;default:i=this.itemCount>1?"You got ".concat(this.itemCount," tasks!"):1===this.itemCount?"You gone and got yourself a task!":"Not a damn task to your name!";break}return i}},computed:{},watch:{},created:function(){},mounted:function(){},updated:function(){},destroyed:function(){}}),M=C,I=Object(l["a"])(M,_,w,!1,null,"d788b2fa",null),S=I.exports,x={name:"Tasks",components:{MessageCenter:S},data:function(){return{editDetails:!0,task:"",tasks:[],submitState:!1,revealStatus:null,showAlert:!1,actionBrief:{itemName:"",actionType:"",status:""}}},props:{placeholder:Array,username:String},methods:{addItem:function(){this.submitState=!0;var t=this.validateItemInput(this.task);!1===t&&!0===this.submitState?this.updateActionBrief("","add","error"):!0===t&&!0===this.submitState&&(this.tasks.push({id:this.tasks.length+1,name:this.task,details:this.task.details}),this.storeItems(this.tasks,"taskGuyList"),this.updateActionBrief(this.task,"add","success")),this.task=""},deleteItem:function(t){var e=this.tasks.splice(t,1);this.submitState=!1,this.storeItems(this.tasks,"taskGuyList"),this.updateActionBrief(e[0].name,"delete","success"),this.task=""},toggleItemReveal:function(t){this.submitState=!1,this.revealStatus===t?this.revealStatus=null:(this.revealStatus=t,this.editDetails=!1),null!=this.revealStatus?this.updateActionBrief(this.tasks[t].name,"reveal","reveal"):this.updateActionBrief(this.tasks[t].name,"reveal","conceal")},updateItem:function(t){this.editDetails=!1,this.storeItems(this.tasks,"taskGuyList"),this.updateActionBrief(this.tasks[t].name,"update","success")},validateItemInput:function(t){var e=t.trim()===!t;return 0!==t.length&&!0!==e},updateActionBrief:function(t,e,a){this.actionBrief={name:t,type:e,status:a}},storeItems:function(t,e){if(!t||0==t.length)return console.log("No tasks found in list; clearing storage items"),void localStorage.removeItem(e);e?localStorage.setItem(e,JSON.stringify(t)):console.error("No item name supplied for storage reference; tasks not saved!")},initializeItemList:function(){var t=localStorage.getItem("taskGuyList")?JSON.parse(localStorage.getItem("taskGuyList")):[{task:"See tasks here..."},{task:"Oh such task!"}];this.tasks=t}},computed:{itemCount:function(){var t=0;return t=this.tasks.length,t}},mounted:function(){this.initializeItemList()}},O=x,B=(a("c9ba"),Object(l["a"])(O,g,b,!1,null,"65267691",null)),D=B.exports,T=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},j=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"about-container"}},[a("p",{attrs:{id:"header-title"}},[t._v("The Library View")]),a("div",{attrs:{id:"content-container"}},[a("p",{staticClass:"subheader"},[t._v("A display of info coupled cards")]),a("div",{attrs:{id:"grid-container"}},[a("div",{staticClass:"card-container",attrs:{id:"lazy-star"}},[a("div",{staticClass:"title-card"},[t._v("Lazy Star")]),a("div",{staticClass:"details-card",attrs:{id:"lazy-star-details"}},[t._v("Lazy Star Details")])]),a("div",{staticClass:"card-container",attrs:{id:"the-gypsy"}},[a("div",{staticClass:"title-card"},[t._v("The Gypsy")]),a("div",{staticClass:"details-card",attrs:{id:"the-gypsy-details"}},[t._v("The Gypsy Details")])]),a("div",{staticClass:"card-container",attrs:{id:"walk-with-me"}},[a("div",{staticClass:"title-card"},[t._v("Walk with Me")]),a("div",{staticClass:"details-card",attrs:{id:"walk-with-me-details"}},[t._v("Walk with Me Details")])]),a("div",{staticClass:"card-container",attrs:{id:"ave-maria"}},[a("div",{staticClass:"title-card"},[t._v("Ave Maria")]),a("div",{staticClass:"details-card",attrs:{id:"ave-maria-details"}},[t._v("Ave Maria Details")])]),a("div",{staticClass:"card-container",attrs:{id:"rat-boot-redux"}},[a("div",{staticClass:"title-card"},[t._v("Rat Boot Redux")]),a("div",{staticClass:"details-card",attrs:{id:"rat-boot-redux-details"}},[t._v("Rat Boot Redux Details")])])])])])}],A={},G=A,N=(a("35aa"),Object(l["a"])(G,T,j,!1,null,"783640ce",null)),L=N.exports;s["a"].use(y["a"]);var E=new y["a"]({routes:[{path:"/",name:"tasks",component:D,props:!0},{path:"/about",name:"about",component:L}]});s["a"].use(k["a"]),s["a"].config.productionTip=!1,new s["a"]({router:E,render:function(t){return t(v)}}).$mount("#app")},"64a9":function(t,e,a){},bd28:function(t,e,a){"use strict";var s=a("0310"),i=a.n(s);i.a},c9ba:function(t,e,a){"use strict";var s=a("43bf"),i=a.n(s);i.a}});
//# sourceMappingURL=app.6bd75974.js.map