(this["webpackJsonpmsal-react"]=this["webpackJsonpmsal-react"]||[]).push([[0],{14:function(e,c,t){},17:function(e,c,t){},18:function(e,c,t){"use strict";t.r(c);var n=t(1),s=t.n(n),i=t(7),r=t.n(i),a=(t(14),t(6)),o=t(9),j=t(3),l=t(2),b={auth:{clientId:"",authority:"",redirectUri:""},cache:{cacheLocation:"sessionStorage",storeAuthStateInCookie:!1},system:{loggerOptions:{loggerCallback:function(e,c,t){if(!t)switch(e){case l.e.Error:return void console.error(c);case l.e.Info:return void console.info(c);case l.e.Verbose:return void console.debug(c);case l.e.Warning:return void console.warn(c)}}}}},u={scopes:["User.Read"]},d="",h=t(0),O=function(){var e=Object(j.e)().instance;return Object(h.jsxs)("button",{className:"ui red button",onClick:function(){e.loginPopup(u).catch((function(e){console.log(e)}))},children:[Object(h.jsx)("i",{className:"microsoft icon"}),"Sign In"]})},x=function(){var e=Object(j.e)().instance;return Object(h.jsx)("button",{className:"ui yellow button",onClick:function(){return e.logout()},children:"Sign Out"})},m=function(e){var c=Object(j.d)();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"ui inverted pointing menu",children:[Object(h.jsxs)("a",{href:"/",className:"item ",children:[Object(h.jsx)("i",{className:"react icon blue"}),"BlackAdi"]}),Object(h.jsxs)("div",{className:"right menu",children:[Object(h.jsx)("span",{className:"item",children:"MSAL Sample - Microsoft Identity Platform"}),c?Object(h.jsx)(x,{}):Object(h.jsx)(O,{})]})]}),Object(h.jsx)("h2",{children:Object(h.jsxs)("center",{children:["Welcome to the Land of OAuth - ",Object(h.jsx)("i",{className:"smile outline icon"})]})}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),e.children]})},p=function(e){return console.log(e.graphData),Object(h.jsx)("div",{className:"ui people shape",children:Object(h.jsx)("div",{className:"sides",children:Object(h.jsx)("div",{className:"active side",children:Object(h.jsxs)("div",{className:"ui card red",style:{width:"100%"},children:[Object(h.jsx)("div",{class:"image",children:Object(h.jsx)("i",{className:"user icon"})}),Object(h.jsxs)("div",{class:"content",children:[Object(h.jsxs)("div",{class:"header",children:[Object(h.jsx)("i",{className:"microsoft icon"}),"Azure AD Profile Info"]}),Object(h.jsx)("br",{}),Object(h.jsxs)("div",{className:"description",children:[Object(h.jsxs)("p",{children:[Object(h.jsx)("strong",{children:"First Name: "})," ",e.graphData.givenName]}),Object(h.jsxs)("p",{children:[Object(h.jsx)("strong",{children:"Last Name: "})," ",e.graphData.surname]}),Object(h.jsxs)("p",{children:[Object(h.jsx)("strong",{children:"Email: "})," ",e.graphData.userPrincipalName]}),Object(h.jsxs)("p",{children:[Object(h.jsx)("strong",{children:"Mobile Phone: "})," ",e.graphData.mobilePhone]}),Object(h.jsxs)("p",{children:[Object(h.jsx)("strong",{children:"Job: "})," ",e.graphData.jobTitle]}),Object(h.jsxs)("p",{children:[Object(h.jsx)("strong",{children:"Id: "})," ",e.graphData.id]})]})]})]})})})})},f=t(5),g=t.n(f),v=t(8);function N(){return(N=Object(v.a)(g.a.mark((function e(c){var t,n,s;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new Headers,n="Bearer ".concat(c),t.append("Authorization",n),s={method:"GET",headers:t},e.abrupt("return",fetch(d,s).then((function(e){return e.json()})).catch((function(e){return console.log(e)})));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t(17);var w=function(){var e=Object(j.e)(),c=e.instance,t=e.accounts,s=Object(n.useState)(null),i=Object(o.a)(s,2),r=i[0],l=i[1];return console.log("acoounts:"+t[0]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("h2",{className:"ui header brown",children:["Welcome ",t[0].name]}),r?Object(h.jsx)(p,{graphData:r}):Object(h.jsxs)("button",{className:"ui primary button",onClick:function(){c.acquireTokenSilent(Object(a.a)(Object(a.a)({},u),{},{account:t[0]})).then((function(e){(function(e){return N.apply(this,arguments)})(e.accessToken).then((function(e){return l(e)}))}))},children:[Object(h.jsx)("i",{className:"microsoft icon"}),"Get Profile Information"]})]})},k=function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(j.a,{children:Object(h.jsx)(w,{})}),Object(h.jsx)(j.c,{children:Object(h.jsx)("div",{className:"ui container",children:Object(h.jsxs)("h5",{className:"ui floating message yellow",children:[Object(h.jsx)("i",{class:"sign-in icon"}),"Please sign-in to see your profile information."]})})})]})};function y(){return Object(h.jsx)(m,{children:Object(h.jsx)(k,{})})}var D=new l.g(b);r.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(j.b,{instance:D,children:Object(h.jsx)(y,{})})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.4c95b790.chunk.js.map