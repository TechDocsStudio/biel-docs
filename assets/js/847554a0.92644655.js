"use strict";(self.webpackChunkbiel=self.webpackChunkbiel||[]).push([[4935],{1829:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var i=n(4848),s=n(8453);const l={sidebar_label:"Jekyll",description:"Learn how to add an AI chatbot to your Jekyll site with this step-by-step guide."},o="AI chatbot for Jekyll",r={id:"installation/jekyll",title:"AI chatbot for Jekyll",description:"Learn how to add an AI chatbot to your Jekyll site with this step-by-step guide.",source:"@site/docs/installation/jekyll.md",sourceDirName:"installation",slug:"/installation/jekyll",permalink:"/installation/jekyll",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Jekyll",description:"Learn how to add an AI chatbot to your Jekyll site with this step-by-step guide."},sidebar:"tutorialSidebar",previous:{title:"Hugo",permalink:"/installation/hugo"},next:{title:"MkDocs",permalink:"/installation/mkdocs"}},a={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},{value:"Next steps",id:"next-steps",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"ai-chatbot-for-jekyll",children:"AI chatbot for Jekyll"})}),"\n",(0,i.jsx)(t.p,{children:"Biel.ai is an advanced chatbot designed to transform the way users interact with your technical documentation.\nBy leveraging AI, Biel.ai delivers instant, context-rich answers, making your documentation more accessible and reducing the need for repetitive support tasks."}),"\n",(0,i.jsx)(t.p,{children:"Here's a step-by-step guide to help you install Biel.ai in your Jekyll project."}),"\n",(0,i.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsx)(t.p,{children:"Before starting, ensure you have the following:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["A ",(0,i.jsx)(t.strong,{children:"Biel.ai account"}),". If you don't have one, ",(0,i.jsx)(t.a,{href:"https://app.biel.ai/accounts/signup/",children:"sign up for free"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"A project created in your Biel.ai dashboard"}),". Follow the ",(0,i.jsx)(t.a,{href:"/",children:"Quickstart guide"})," to create one."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"A Jekyll application"})," ready to install Biel.ai."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(t.p,{children:"The Biel.ai widget enables a conversational chat powered by AI in your site."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Chatbot widget for docs",src:n(5439).A+"",width:"2880",height:"1576"})}),"\n",(0,i.jsx)(t.p,{children:"To integrate the Biel.ai widget into your Jekyll site:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Open your terminal or command prompt. Navigate to your project's root directory using the ",(0,i.jsx)(t.code,{children:"cd"})," command:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-console",children:"cd path/to/your/project\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Replace ",(0,i.jsx)(t.code,{children:"path/to/your/project"})," with your project's actual directory path."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Open the ",(0,i.jsx)(t.code,{children:"_includes/head.html"})," file (or the equivalent file that contains the ",(0,i.jsx)(t.code,{children:"<head>"})," section in your Jekyll theme). Append the following code:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",children:'\x3c!-- Initialize the Biel.ai widget --\x3e\n<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/biel-search/dist/biel-search/biel-search.css">\n<script type="module" src="https://cdn.jsdelivr.net/npm/biel-search/dist/biel-search/biel-search.esm.js"><\/script>\n'})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Open ",(0,i.jsx)(t.code,{children:"_includes/footer.html"})," or the specific file where you'd like the chatbot to appear. Add the following snippet just before its closing tags:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",children:'<biel-button project="<YOUR_PROJECT_ID>" \n    header-title="Biel.ai chatbot"\n    button-position="bottom-right"\n    modal-position="bottom-right"\n    button-style="dark">\n        Ask AI\n</biel-button>\n'})}),"\n",(0,i.jsxs)(t.p,{children:["Replace ",(0,i.jsx)(t.code,{children:"<YOUR_PROJECT_ID>"})," with your project's ID from the ",(0,i.jsx)(t.a,{href:"/#2-create-a-project",children:"Biel.ai dashboard"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"After making these changes, navigate back to your Jekyll project root and run:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-console",children:"jekyll build\n"})}),"\n",(0,i.jsx)(t.p,{children:"Once it builds successfully, verify that the chatbot  appears and functions correctly on your site."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,i.jsxs)(t.p,{children:["For more about customization and additional features exploration, check out the ",(0,i.jsx)(t.a,{href:"/category/customization",children:"customization"})," section."]}),"\n",(0,i.jsxs)(t.p,{children:["Need assistance? We're here to help! Reach out to us at ",(0,i.jsx)(t.a,{href:"https://biel.ai/contact",children:"Biel.ai Support"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},5439:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/biel-widget-docs-080a0bb415cb5bd67accd1e10d45f9f8.png"},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>r});var i=n(6540);const s={},l=i.createContext(s);function o(e){const t=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(l.Provider,{value:t},e.children)}}}]);