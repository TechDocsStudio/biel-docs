"use strict";(self.webpackChunkbiel=self.webpackChunkbiel||[]).push([[3188],{9145:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var i=n(4848),s=n(8453);const o={sidebar_label:"Hugo",description:"Add an AI chatbot to your Hugo site with this step-by-step guide."},r="AI chat widget for Hugo",a={id:"installation/hugo",title:"AI chat widget for Hugo",description:"Add an AI chatbot to your Hugo site with this step-by-step guide.",source:"@site/docs/installation/hugo.md",sourceDirName:"installation",slug:"/installation/hugo",permalink:"/installation/hugo",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Hugo",description:"Add an AI chatbot to your Hugo site with this step-by-step guide."},sidebar:"tutorialSidebar",previous:{title:"Gatsby",permalink:"/installation/gatsby"},next:{title:"Jekyll",permalink:"/installation/jekyll"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},{value:"Next steps",id:"next-steps",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"ai-chat-widget-for-hugo",children:"AI chat widget for Hugo"})}),"\n",(0,i.jsx)(t.p,{children:"Add an AI chatbot to your Hugo site using Biel.ai's web components. The integration works with any Hugo theme and requires only adding a few lines to your templates."}),"\n",(0,i.jsx)(t.p,{children:"This guide shows you how to add the chat widget to your Hugo site in minutes using HTML partials."}),"\n",(0,i.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsx)(t.p,{children:"Before starting, ensure you have::"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["A ",(0,i.jsx)(t.strong,{children:"Biel.ai account"}),". If you don't have one, ",(0,i.jsx)(t.a,{href:"https://app.biel.ai/accounts/signup/",children:"sign up for free"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"A project created in your Biel.ai dashboard"}),". Follow the ",(0,i.jsx)(t.a,{href:"/",children:"Quickstart guide"})," to create one."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"An Hugo application"})," ready to install Biel.ai."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(t.p,{children:"The Biel.AI chat widget enables a conversational chat powered by AI in your site."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Chatbot widget for docs",src:n(5439).A+"",width:"2880",height:"1576"})}),"\n",(0,i.jsx)(t.p,{children:"To integrate the Biel.AI chat widget into your Hugo site:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Open your terminal or command prompt. Navigate to your project's root directory using the ",(0,i.jsx)(t.code,{children:"cd"})," command:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-console",children:"cd your-hugo-site/themes/your-theme-name/\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Replace ",(0,i.jsx)(t.code,{children:"your-hugo-site"})," with the path to your Hugo site and ",(0,i.jsx)(t.code,{children:"your-theme-name"})," with the name of the theme you're using."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Find the head partial, which is often located under ",(0,i.jsx)(t.code,{children:"layouts/partials/"}),". Add the following code to this file:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",children:'\x3c!-- Initialize the Biel.AI chat widget --\x3e\n<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/biel-search/dist/biel-search/biel-search.css">\n<script type="module" src="https://cdn.jsdelivr.net/npm/biel-search/dist/biel-search/biel-search.esm.js"><\/script>\n'})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Next, find the footer partial (or wherever you'd like the chatbot to be placed) and add the following code just before the closing tags:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",children:'<biel-button project="<YOUR_PROJECT_ID>" \n    header-title="Biel.ai chatbot"\n    button-position="bottom-right"\n    modal-position="bottom-right"\n    button-style="dark">\n        Ask AI\n</biel-button>\n'})}),"\n",(0,i.jsxs)(t.p,{children:["Replace ",(0,i.jsx)(t.code,{children:"<YOUR_PROJECT_ID>"})," with your project's ID from the ",(0,i.jsx)(t.a,{href:"/#2-create-a-project",children:"Biel.ai dashboard"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"After making these changes, navigate back to your Hugo project root and run:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-console",children:"hugo server\n"})}),"\n",(0,i.jsx)(t.p,{children:"Once it builds successfully, verify that the chatbot  appears and functions correctly on your site."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,i.jsxs)(t.p,{children:["For more about customization and additional features exploration, check out the ",(0,i.jsx)(t.a,{href:"/category/customization",children:"customization"})," section."]}),"\n",(0,i.jsxs)(t.p,{children:["Need assistance? We're here to help! Reach out to us at ",(0,i.jsx)(t.a,{href:"https://biel.ai/contact",children:"Biel.ai Support"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},5439:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/biel-widget-docs-080a0bb415cb5bd67accd1e10d45f9f8.png"},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var i=n(6540);const s={},o=i.createContext(s);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);