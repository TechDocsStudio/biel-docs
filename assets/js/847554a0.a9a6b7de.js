"use strict";(self.webpackChunkbiel=self.webpackChunkbiel||[]).push([[935],{1829:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>a});var i=n(4848),l=n(8453);const s={sidebar_label:"Jekyll"},o="AI chatbot for Jekyll",r={id:"installation/jekyll",title:"AI chatbot for Jekyll",description:"Here's a step-by-step guide to help you install Biel.ai in your Jekyll project.",source:"@site/docs/installation/jekyll.md",sourceDirName:"installation",slug:"/installation/jekyll",permalink:"/installation/jekyll",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Jekyll"},sidebar:"tutorialSidebar",previous:{title:"Hugo",permalink:"/installation/hugo"},next:{title:"MkDocs",permalink:"/installation/mkdocs"}},c={},a=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},{value:"Next steps",id:"next-steps",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"ai-chatbot-for-jekyll",children:"AI chatbot for Jekyll"})}),"\n",(0,i.jsx)(t.p,{children:"Here's a step-by-step guide to help you install Biel.ai in your Jekyll project."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Feedback wiget for docs screenshot",src:n(4734).A+"",width:"1725",height:"937"})}),"\n",(0,i.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsx)(t.p,{children:"Before you begin, you'll need to have the following:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["A Biel.ai account. If you don't have one, ",(0,i.jsx)(t.a,{href:"https://app.biel.ai/accounts/signup/",children:"sign up for free"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["A project created in your Biel.ai dashboard. If you haven't created one yet, follow the steps in the ",(0,i.jsx)(t.a,{href:"/#2-create-a-project",children:"Quickstart"})," guide."]}),"\n",(0,i.jsx)(t.li,{children:"A Jekyll project."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(t.p,{children:"To integrate the Biel.ai widget into your Jekyll site:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Open your terminal or command prompt. Navigate to your project's root directory using the ",(0,i.jsx)(t.code,{children:"cd"})," command:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-console",children:"cd path/to/your/project\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Replace ",(0,i.jsx)(t.code,{children:"path/to/your/project"})," with your project's actual directory path."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Open the ",(0,i.jsx)(t.code,{children:"_includes/head.html"})," file (or the equivalent file that contains the ",(0,i.jsx)(t.code,{children:"<head>"})," section in your Jekyll theme). Append the following code:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",children:'\x3c!-- Initialize the Biel.ai widget --\x3e\n<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/biel-search/dist/biel-search/biel-search.css">\n<script type="module" src="https://cdn.jsdelivr.net/npm/biel-search/dist/biel-search/biel-search.esm.js"><\/script>\n'})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Open ",(0,i.jsx)(t.code,{children:"_includes/footer.html"})," or the specific file where you'd like the chatbot to appear. Add the following snippet just before its closing tags:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",children:'<biel-button project="<YOUR_PROJECT_ID>" button-position="bottom-right" modal-position="bottom-right" button-style="dark">Ask AI</biel-button>\n'})}),"\n",(0,i.jsxs)(t.p,{children:["Replace ",(0,i.jsx)(t.code,{children:"<YOUR_PROJECT_ID>"})," with your project's ID from the ",(0,i.jsx)(t.a,{href:"/#2-create-a-project",children:"Biel.ai dashboard"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"After making these changes, navigate back to your Jekyll project root and run:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-console",children:"jekyll build\n"})}),"\n",(0,i.jsx)(t.p,{children:"Once it builds successfully, verify that the chatbot  appears and functions correctly on your site."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,i.jsxs)(t.p,{children:["For more about customization and additional features exploration, check out the ",(0,i.jsx)(t.a,{href:"/category/configuration",children:"Configuration"})," section."]}),"\n",(0,i.jsxs)(t.p,{children:["Need assistance? We're here to help! Reach out to us at ",(0,i.jsx)(t.a,{href:"https://biel.ai/contact",children:"Biel.ai Support"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},4734:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/feedback-widget-docs-0c902c85b3fa9f951a3c0ffc5e6a037e.png"},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>r});var i=n(6540);const l={},s=i.createContext(l);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);