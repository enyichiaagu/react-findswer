(this["webpackJsonpreact-web-app"]=this["webpackJsonpreact-web-app"]||[]).push([[0],{22:function(e,t,a){e.exports={btnGoBack:"button_btnGoBack__31uje"}},25:function(e,t,a){e.exports=a(37)},37:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(17),c=a.n(l),o=a(4),m=a(11),s={body:"#fff",text:"#363537",btnBackground:"#2BBBAD",btnTxtColor:"#fff",toggleBorder:"#FFF",gradient:"linear-gradient(#39598A, #79D7ED)"},i={body:"#15202b",btnBackground:"#f50057 ",text:"#ccc",toggleBorder:"#6B8096",gradient:"linear-gradient(#091236, #1E215D)"},u=a(18);function f(){var e=Object(u.a)(["\n  *,\n  *::after,\n  *::before {\n    box-sizing: border-box;\n  }\n  body {\n    background: ",";\n    color: ",";\n    padding: 0;\n    padding: 0px;\n    margin: 0;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n      sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;    transition: all 0.25s linear;\n  }\n  footer {\n    position: absolute;\n    bottom: 5%;\n    left: 50%;\n    transform: translateX(-50%);\n  }\n  small {\n    display: block;\n  }\n\n  .btn {\n    background: ",";\n    color: ",";\n  }\n  .btn:hover {\n    background: ",";\n    color: ",";\n  }\n\n  a {\n    color: ",";\n  }\n  \n  code {\n    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n      monospace;\n  }\n"]);return f=function(){return e},e}var d=Object(m.b)(f(),(function(e){return e.theme.body}),(function(e){return e.theme.text}),(function(e){return e.theme.btnBackground}),(function(e){return e.theme.btnTxtColor}),(function(e){return e.theme.btnBackground}),(function(e){return e.theme.btnTxtColor}),(function(e){return e.theme.text})),b=a(5),p=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"login-wrapper"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"}),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",{style:{marginTop:"150px"}},e.children)),r.a.createElement("div",{className:"col"})))))},E=a(22),g=a.n(E),y=function(e){var t=e.handler,a=e.txtLabel;e.loader;return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:t,type:"button",className:"btn btn-primary btn-block rounded-pill"},a,r.a.createElement("i",{className:"fas fa-arrow-right ml-2"})))},h=function(e){var t=e.inputReference,a=e.style;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"login-username-wrapper"},r.a.createElement("i",{className:"fas fa-user input-prefix",style:a}),r.a.createElement("input",{ref:t,name:"username",type:"text",id:"username",className:"form-control",autoComplete:"off"}),r.a.createElement("label",{htmlFor:"username",style:a},"Username or Phone")))},N=function(e){var t=e.handler,a=e.inputReference,n=e.style;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"login-password-wrapper"},r.a.createElement("div",{onClick:t,className:"".concat(g.a.btnGoBack," , d-flex position-absolute")},r.a.createElement("i",{className:"fas fa-arrow-left mr-2",style:{marginTop:"-25px"}}),r.a.createElement("span",{style:{marginTop:"-30px"}},"Go back")),r.a.createElement("i",{className:"fas fa-key input-prefix",style:n}),r.a.createElement("input",{ref:a,name:"password",type:"text",id:"password",className:"form-control",autoComplete:"off"}),r.a.createElement("label",{htmlFor:"password",style:n},"Password")))},v=function(e){var t=e.style,a=e.label;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"custom-control custom-checkbox",style:t},r.a.createElement("input",{type:"checkbox",className:"custom-control-input",id:"defaultChecked2",defaultChecked:!0}),r.a.createElement("label",{className:"custom-control-label",htmlFor:"defaultChecked2",style:a},"Remember login")))},x=function(e){var t=e.style;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:t},r.a.createElement("span",null,"Forgot password?")))},k=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"login-header-wrapper"},r.a.createElement("div",{className:"d-flex justify-content-center "},r.a.createElement("div",null,r.a.createElement("img",{srcSet:"temp_header_2.png",alt:"Login_header",style:{width:"350px"}})))))},w=a(24),F={color:"#ccc"},j={marginTop:""},B={marginTop:"-10px",color:"#ccc"},O={color:"#ccc"};var C=function(){var e=Object(w.a)().register,t=Object(n.useState)({loader:!1,count:0,label:""}),a=Object(o.a)(t,2),l=a[0],c=a[1];return Object(n.useEffect)((function(){document.title="Findswer Login",0===l.count&&c((function(e){return Object(b.a)(Object(b.a)({},e),{},{label:"NEXT"})}))}),[l.count]),r.a.createElement(r.a.Fragment,null,r.a.createElement(p,null,r.a.createElement(k,null),0===l.count&&r.a.createElement("div",{className:"md-form md-bg input-with-pre-icon"},r.a.createElement(h,{inputReference:e,style:F})),1===l.count&&r.a.createElement("div",{className:"md-form md-bg input-with-pre-icon",style:j},r.a.createElement(N,{handler:function(e){1===l.count&&c((function(e){return Object(b.a)(Object(b.a)({},e),{},{count:l.count-1})}))},inputReference:e,style:F})),r.a.createElement("div",{className:"login-option-wapper"},r.a.createElement("div",{className:"d-flex justify-content-between"},r.a.createElement(v,{style:B,label:O}),r.a.createElement(x,{style:B}))),r.a.createElement("div",{className:"mt-4"},r.a.createElement(y,{handler:function(){0===l.count&&setTimeout((function(){c((function(e){return Object(b.a)(Object(b.a)({},e),{},{count:l.count+1,label:"NEXT",loader:!1})}))}),1e3)},txtLabel:l.label,loader:l.loader})),r.a.createElement("div",{className:"text-center mt-3 mb-1"},r.a.createElement("span",{style:{color:"#ccc",opacity:"0.4"}},"or sign in with",r.a.createElement("i",{className:"fas fa-sign-in-alt ml-2"}))),r.a.createElement("div",{className:"d-flex justify-content-center",style:{fontSize:"34px"}},r.a.createElement("i",{className:"fab fa-facebook",style:{margin:"10px",color:"#336699"}}),r.a.createElement("i",{className:"fab fa-google",style:{margin:"10px",color:"#ff3333"}}),r.a.createElement("i",{className:"fab fa-twitter",style:{margin:"10px",color:"#3399ff"}}))))};var T=function(e){e.children;var t=Object(n.useState)("light"),a=Object(o.a)(t,2),l=a[0],c=a[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{theme:"light"===l?s:i},r.a.createElement(d,null),r.a.createElement("button",{onClick:function(){return c("light"===l?"dark":"light")},className:"btn"},"Toggle theme"),r.a.createElement(C,null)))},S=a(23);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S.a,null,r.a.createElement(T,null))),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.9d3ddbbd.chunk.js.map