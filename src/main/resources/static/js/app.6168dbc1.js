(function(e){function t(t){for(var n,u,s=t[0],i=t[1],l=t[2],f=0,p=[];f<s.length;f++)u=s[f],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&p.push(o[u][0]),o[u]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);c&&c(t);while(p.length)p.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,s=1;s<r.length;s++){var i=r[s];0!==o[i]&&(n=!1)}n&&(a.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},o={app:0},a=[];function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var c=i;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("85ec"),o=r.n(n);o.a},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},a=[],u={name:"App"},s=u,i=(r("034f"),r("2877")),l=Object(i["a"])(s,o,a,!1,null,null,null),c=l.exports,f=r("8c4f"),p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.show?r("b-form",{on:{submit:e.onSubmit,reset:e.onReset}},[r("b-form-group",{attrs:{id:"exampleInputGroup1",label:"Username:","label-for":"exampleInput1"}},[r("b-form-input",{attrs:{id:"exampleInput1",type:"text",required:"",placeholder:"Enter username"},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),r("b-form-group",{attrs:{id:"exampleInputGroup2",label:"Password:","label-for":"exampleInput2"}},[r("b-form-input",{attrs:{id:"exampleInput2",type:"text",required:"",placeholder:"Enter password"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),r("b-form-group",{attrs:{id:"exampleGroup4"}},[r("b-form-checkbox-group",{attrs:{id:"exampleChecks"},model:{value:e.form.checked,callback:function(t){e.$set(e.form,"checked",t)},expression:"form.checked"}},[r("b-form-checkbox",{attrs:{value:"me"}},[e._v("Check me out")]),r("b-form-checkbox",{attrs:{value:"that"}},[e._v("Check that out")])],1)],1),r("b-button",{attrs:{type:"submit",variant:"primary"}},[e._v("Submit")]),r("b-button",{attrs:{type:"reset",variant:"danger"}},[e._v("Reset")])],1):e._e()],1)},m=[],d=r("bc3a"),h=r.n(d),b=r("4328"),v=r.n(b),g={data:function(){return{form:{username:"",password:"",checked:[]},show:!0}},methods:{onSubmit:function(e){var t=this;e.preventDefault(),h.a.post("http://localhost:8088/api/login",v.a.stringify({username:this.form.username,password:this.form.password})).then((function(e){var r=e.data;"successful"===r?t.$router.push("/information"):alert(e.data.message),console.log(e)})).catch((function(e){console.log(e)}))},onReset:function(e){var t=this;e.preventDefault(),this.form.username="",this.form.password="",this.form.checked=[],this.show=!1,this.$nextTick((function(){t.show=!0}))}}},w=g,x=Object(i["a"])(w,p,m,!1,null,"cf17bf40",null),_=x.exports,y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("Welcome!")]),r("div",[r("b-button",{on:{click:function(t){return e.getInfo()}}},[e._v("Get your information")]),""!==e.username?r("h2",[e._v("Your username is: "+e._s(e.username))]):e._e(),""!==e.email?r("h2",[e._v("Your email is: "+e._s(e.email))]):e._e()],1)])},k=[],O={data:function(){return{username:"",email:""}},method:{getInfo:function(){var e=this;h.a.get("http://localhost:8088/api/information").then((function(t){e.username=t.data["username"],e.email=t.data["email"],console.log(t)})).catch((function(e){console.log(e)}))}},name:""},j=O,I=Object(i["a"])(j,y,k,!1,null,"01ab51c6",null),P=I.exports;n["default"].use(f["a"]);var S=new f["a"]({routes:[{path:"/",name:"Login",component:_},{path:"/information",name:"Information",component:P}]}),$=r("5f5b");r("f9e3"),r("2dd8");n["default"].use($["a"]),n["default"].config.productionTip=!1,new n["default"]({el:"#app",router:S,components:{App:c},template:"<App/>"})},"85ec":function(e,t,r){}});
//# sourceMappingURL=app.6168dbc1.js.map