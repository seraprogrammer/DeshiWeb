"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[8089],{9691:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>a});var t=i(4848),c=i(8453);const l={sidebar_position:3},s="on Attribute",o={id:"Directives/onclick",title:"on:click Attribute",description:"The on:click directive allows you to attach click event listeners to elements",source:"@site/docs/Directives/onclick.md",sourceDirName:"Directives",slug:"/Directives/onclick",permalink:"/docs/Directives/onclick",draft:!1,unlisted:!1,editUrl:"https://github.com/DeshiJS/DeshiJS/docs/Directives/onclick.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"@click Attribute",permalink:"/docs/Directives/click"},next:{title:"If and Else Attribute",permalink:"/docs/Directives/if-and-else"}},r={},a=[];function d(e){const n={admonition:"admonition",code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsxs)(n.h1,{id:"on-attribute",children:["on",":click"," Attribute"]})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"on:click"})," directive allows you to attach click event listeners to elements\r\nin your HTML markup."]}),"\n",(0,t.jsx)(n.h1,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(n.p,{children:["To use the ",(0,t.jsx)(n.code,{children:"on:click"})," directive, add it to any HTML element followed by the\r\nJavaScript expression or function call you want to execute when the element is\r\nclicked."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",metastring:'title="~index.html"',children:'<button on:click="handleClick">Click me</button>\n'})}),"\n",(0,t.jsx)(n.h1,{id:"features",children:"Features"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Direct Expression Execution: You can include JavaScript expressions directly\r\nin the ",(0,t.jsx)(n.code,{children:"on:click"})," attribute."]}),"\n",(0,t.jsx)(n.li,{children:"Function Calls: You can call functions defined in your application's scope."}),"\n",(0,t.jsx)(n.li,{children:"Access to Event Object: The event object is automatically passed to your\r\nhandler, allowing you to access event properties."}),"\n",(0,t.jsx)(n.li,{children:"Access to Reactive System: The reactive instance is available in the handler,\r\ngiving you access to the framework's reactivity system."}),"\n"]}),"\n",(0,t.jsx)(n.h1,{id:"examples",children:"Examples"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Incrementing a counter"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",metastring:'title="~index.html"',children:'<button on:click="$.count++">Increment</button>\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Calling a function"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",metastring:'title="~index.html"',children:'<button on:click="handleSubmit">Submit</button>\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Using the event object:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",metastring:'title="~index.html"',children:'<div on:click="console.log(event.target)">Log clicked element</div>\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Conditional logic:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",metastring:'title="~index.html"',children:'<button on:click="$.isActive ? deactivate : activate">Toggle</button>\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The expression in ",(0,t.jsx)(n.code,{children:"on:click"})," is executed in the global scope, so make sure\r\nyour functions and variables are accessible globally."]}),"\n",(0,t.jsx)(n.li,{children:"If the result of the expression is a function, it will be immediately invoked."}),"\n",(0,t.jsx)(n.li,{children:"Error handling is built-in, and any errors during execution will be logged to\r\nthe console."}),"\n"]})})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>o});var t=i(6540);const c={},l=t.createContext(c);function s(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);