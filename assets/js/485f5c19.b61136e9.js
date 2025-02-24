"use strict";(self.webpackChunkbiel=self.webpackChunkbiel||[]).push([[8108],{1537:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var s=i(4848),n=i(8453);const r={sidebar_label:"Astro",description:"Add an AI chatbot to your Astro site with this step-by-step guide."},o="AI chat widget for Astro",a={id:"installation/astro",title:"AI chat widget for Astro",description:"Add an AI chatbot to your Astro site with this step-by-step guide.",source:"@site/docs/installation/astro.md",sourceDirName:"installation",slug:"/installation/astro",permalink:"/installation/astro",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Astro",description:"Add an AI chatbot to your Astro site with this step-by-step guide."},sidebar:"tutorialSidebar",previous:{title:"Antora",permalink:"/installation/antora"},next:{title:"Docusaurus",permalink:"/installation/docusaurus"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},{value:"Next steps",id:"next-steps",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"ai-chat-widget-for-astro",children:"AI chat widget for Astro"})}),"\n",(0,s.jsx)(t.p,{children:"Add an AI chatbot to your Astro site using Biel.ai's web components. The integration works with any Astro theme or template, and requires only a few lines of code in your layout file."}),"\n",(0,s.jsx)(t.p,{children:"This guide shows you how to add the chat widget to your Astro site in minutes using CDN-hosted scripts."}),"\n",(0,s.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(t.p,{children:"Before starting, ensure you have::"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["A ",(0,s.jsx)(t.strong,{children:"Biel.ai account"}),". If you don't have one, ",(0,s.jsx)(t.a,{href:"https://app.biel.ai/accounts/signup/",children:"sign up for free"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"A project created in your Biel.ai dashboard"}),". Follow the ",(0,s.jsx)(t.a,{href:"/",children:"Quickstart guide"})," to create one."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"An Astro site"})," ready to install Biel.ai."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(t.p,{children:"The Biel.AI chat widget enables a conversational chat powered by AI in your site."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Chatbot widget for docs",src:i(5439).A+"",width:"2880",height:"1576"})}),"\n",(0,s.jsx)(t.p,{children:"To integrate the Biel.AI chat widget into your Astro site:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Open your Astro project in your preferred code editor."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Locate the ",(0,s.jsx)(t.code,{children:"src/layouts/Layout.astro"})," file (or any layout file that wraps your pages) and insert the following code within the ",(0,s.jsx)(t.code,{children:"<head>"})," section:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",children:'\x3c!-- Initialize the Biel.AI chat widget --\x3e\n<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/biel-search/dist/biel-search/biel-search.css">\n<script type="module" src="https://cdn.jsdelivr.net/npm/biel-search/dist/biel-search/biel-search.esm.js"><\/script>\n'})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Just before the closing ",(0,s.jsx)(t.code,{children:"</body>"})," tag of your layout file, add the following snippet:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",children:'<biel-button project="<YOUR_PROJECT_ID>" \n    header-title="Biel.ai chatbot"\n    button-position="bottom-right"\n    modal-position="bottom-right"\n    button-style="dark">\n        Ask AI\n</biel-button>\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Replace ",(0,s.jsx)(t.code,{children:"<YOUR_PROJECT_ID>"})," with your project's ID from the ",(0,s.jsx)(t.a,{href:"/#2-create-a-project",children:"Biel.ai dashboard"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Open the website in a web browser to verify the chatbot appears and works correctly."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,s.jsxs)(t.p,{children:["For more about customization and additional features exploration, check out the ",(0,s.jsx)(t.a,{href:"/category/customization",children:"customization"})," section."]}),"\n",(0,s.jsxs)(t.p,{children:["Need assistance? We're here to help! Reach out to us at ",(0,s.jsx)(t.a,{href:"https://biel.ai/contact",children:"Biel.ai Support"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},5439:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/biel-widget-docs-080a0bb415cb5bd67accd1e10d45f9f8.png"},8453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>a});var s=i(6540);const n={},r=s.createContext(n);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);