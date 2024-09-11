"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[2634],{192:(e,r,t)=>{t.r(r),t.d(r,{default:()=>v});var n=t(781),i=t(6540),o=t(3540),a=t(3756),s=t(4848);const l=o.Ay.header`
  background: #121212;
  color: #e0e0e0;
  padding: 3rem 2rem;
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`,c=o.Ay.h1`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
  background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  position: relative;
  z-index: 1;

  @media (min-width: 768px) {
    font-size: 4rem;
  }
`,d=o.Ay.p`
  font-size: 1.1rem;
  max-width: 700px;
  margin: 0 auto 2rem;
  line-height: 1.5;
  color: #b0b0b0;
  position: relative;
  z-index: 1;
`,p=o.Ay.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  z-index: 1;
`,x=o.AH`
  &:hover {
    transform: translateY(-3px) scale(1.05);
  }
`,h=o.Ay.a`
  padding: 1rem 2.5rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  ${x}
`,m=(0,o.Ay)(h)`
  background-color: #42b983; // Vue.js green color
  color: #fff;
  &:hover {
    background-color: #358a6c;
  }
`,u=(0,o.Ay)(h)`
  background-color: #333;
  color: #e0e0e0;
  &:hover {
    background-color: #444;
  }
`,g=o.Ay.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 4rem;
  flex-wrap: wrap;
  position: relative;
  z-index: 1;
`,f=o.Ay.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.1rem;
  color: #e0e0e0;
  padding: 1rem 1.5rem;
  transition: all 0.3s ease;
  background-color: #1e1e1e;
  border-radius: 8px;

  &:hover {
    background-color: #333;
    transform: translateY(-5px);
  }
`,b=o.Ay.pre`
  background-color: #1e1e1e;
  color: #42b983; // Vue.js green color
  padding: 15px;
  border-radius: 10px;
  font-family: "Fira Code", monospace;
  font-size: 0.9rem;
  text-align: left;
  max-width: 500px;
  width: 100%;
  margin: 2rem auto;
  overflow-x: auto;
  position: relative;
  z-index: 1;
`,j=e=>{let{text:r}=e;const[t,n]=(0,i.useState)("");return(0,i.useEffect)((()=>{let e=0;const t=setInterval((()=>{e<r.length?(n((t=>t+r.charAt(e))),e++):clearInterval(t)}),50);return()=>clearInterval(t)}),[r]),(0,s.jsx)("span",{children:t})};function v(){return(0,s.jsx)(n.A,{children:(0,s.jsxs)(l,{children:[(0,s.jsxs)(c,{gradient:"-webkit-linear-gradient(315deg, #42d392 25%, #647eff)",children:[(0,s.jsx)("span",{children:"The lightweight"}),(0,s.jsx)("br",{}),(0,s.jsx)("span",{children:"JavaScript Framework"})]}),(0,s.jsx)(d,{children:"Experience the future of web development with our lightning-fast, intuitive, and scalable framework."}),(0,s.jsxs)(p,{children:[(0,s.jsxs)(m,{href:"/docs/intro",children:["Get Started",(0,s.jsx)(a.dyV,{})]}),(0,s.jsxs)(u,{href:"/docs/category/tutorial---directives",children:["Take the Tutorial",(0,s.jsx)(a.PjK,{})]})]}),(0,s.jsx)(b,{children:(0,s.jsx)(j,{text:'\n  <div id="root"></div>\n\n <template app>\n  <button\n    $text="{counter} {counter <= 1 ? \'time\' : \'times\'}"\n    @click="incrementCounter()"></button>\n </template>\n\n<script type="module">\n  import deshi from "//unpkg.com/deshijs";\n  deshi.init();\n  signal = {\n    counter: 0,\n    incrementCounter: function () {\n      this.counter++;\n    },\n  };\n<\/script>\n '})}),(0,s.jsxs)(g,{children:[(0,s.jsxs)(f,{children:[(0,s.jsx)(a.FrA,{}),"Lightning Fast"]}),(0,s.jsxs)(f,{children:[(0,s.jsx)(a.s_k,{}),"Template Based"]}),(0,s.jsxs)(f,{children:[(0,s.jsx)(a.jTZ,{}),"Reactive by Design"]})]})]})})}}}]);