(this["webpackJsonpmsal-react"]=this["webpackJsonpmsal-react"]||[]).push([[0],{14:function(e,c,t){},17:function(e,c,t){},18:function(e,c,t){"use strict";t.r(c);var n=t(1),s=t.n(n),i=t(7),r=t.n(i),a=(t(14),t(6)),o=t(9),l=t(3),j=t(2),u={auth:{clientId:"f922679e-b7f3-4126-afe1-f59e4a53fac8",authority:"https://login.microsoftonline.com/common/",redirectUri:"http://localhost:3000/auth"},cache:{cacheLocation:"sessionStorage",storeAuthStateInCookie:!1},system:{loggerOptions:{loggerCallback:function(e,c,t){if(!t)switch(e){case j.e.Error:return void console.error(c);case j.e.Info:return void console.info(c);case j.e.Verbose:return void console.debug(c);case j.e.Warning:return void console.warn(c)}}}}},h={scopes:["User.Read"]},b="https://graph.microsoft.com/v1.0/me",d=t(0),O=function(){var e=Object(l.e)().instance;return Object(d.jsxs)("button",{className:"ui red button",onClick:function(){e.loginPopup(h).catch((function(e){console.log(e)}))},children:[Object(d.jsx)("i",{className:"microsoft icon"}),"Sign In"]})},m=function(){var e=Object(l.e)().instance;return Object(d.jsx)("button",{className:"ui yellow button",onClick:function(){return e.logout()},children:"Sign Out"})},x=function(e){var c=Object(l.d)();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"ui inverted pointing menu",children:[Object(d.jsxs)("a",{href:"/",className:"item ",children:[Object(d.jsx)("i",{className:"react icon blue"}),"BlackAdi"]}),Object(d.jsxs)("div",{className:"right menu",children:[Object(d.jsx)("span",{className:"item",children:"MSAL Sample - Microsoft Identity Platform"}),c?Object(d.jsx)(m,{}):Object(d.jsx)(O,{})]})]}),Object(d.jsx)("h2",{children:Object(d.jsxs)("center",{children:["Welcome to the Land of OAuth - ",Object(d.jsx)("i",{className:"smile outline icon"})]})}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),e.children]})},f=function(e){return console.log(e.graphData),Object(d.jsx)("div",{className:"ui people shape",children:Object(d.jsx)("div",{className:"sides",children:Object(d.jsx)("div",{className:"active side",children:Object(d.jsxs)("div",{className:"ui card red",style:{width:"100%"},children:[Object(d.jsx)("div",{class:"image",children:Object(d.jsx)("i",{className:"user icon"})}),Object(d.jsxs)("div",{class:"content",children:[Object(d.jsxs)("div",{class:"header",children:[Object(d.jsx)("i",{className:"microsoft icon"}),"Azure AD Profile Info"]}),Object(d.jsx)("br",{}),Object(d.jsxs)("div",{className:"description",children:[Object(d.jsxs)("p",{children:[Object(d.jsx)("strong",{children:"First Name: "})," ",e.graphData.givenName]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("strong",{children:"Last Name: "})," ",e.graphData.surname]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("strong",{children:"Email: "})," ",e.graphData.userPrincipalName]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("strong",{children:"Mobile Phone: "})," ",e.graphData.mobilePhone]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("strong",{children:"Id: "})," ",e.graphData.id]})]})]})]})})})})},p=t(5),g=t.n(p),v=t(8);function N(){return(N=Object(v.a)(g.a.mark((function e(c){var t,n,s;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new Headers,n="Bearer ".concat(c),t.append("Authorization",n),s={method:"GET",headers:t},e.abrupt("return",fetch(b,s).then((function(e){return e.json()})).catch((function(e){return console.log(e)})));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t(17);var w=function(){var e=Object(l.e)(),c=e.instance,t=e.accounts,s=Object(n.useState)(null),i=Object(o.a)(s,2),r=i[0],j=i[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("h2",{className:"ui header brown",children:["Welcome ",t[0].name]}),r?Object(d.jsx)(f,{graphData:r}):Object(d.jsxs)("button",{className:"ui primary button",onClick:function(){c.acquireTokenSilent(Object(a.a)(Object(a.a)({},h),{},{account:t[0]})).then((function(e){(function(e){return N.apply(this,arguments)})(e.accessToken).then((function(e){return j(e)}))}))},children:[Object(d.jsx)("i",{className:"microsoft icon"}),"Get Profile Information"]})]})},k=function(){return console.log("secret: f922679e-b7f3-4126-afe1-f59e4a53fac8"),Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(l.a,{children:Object(d.jsx)(w,{})}),Object(d.jsx)(l.c,{children:Object(d.jsx)("div",{className:"ui container",children:Object(d.jsxs)("h5",{className:"ui floating message yellow",children:[Object(d.jsx)("i",{class:"sign-in icon"}),"Please sign-in to see your profile information."]})})})]})};function y(){return Object(d.jsx)(x,{children:Object(d.jsx)(k,{})})}var I=new j.g(u);r.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(l.b,{instance:I,children:Object(d.jsx)(y,{})})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.c6ff1c52.chunk.js.map