"use strict";(self.webpackChunkbiel=self.webpackChunkbiel||[]).push([[4084],{9801:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=i(4848),s=i(8453);const r={sidebar_label:"Basic installation",description:"Add an AI chatbot to your HTML site with this step-by-step guide.",sidebar_position:1},o="Basic installation",l={id:"installation/cdn",title:"Basic installation",description:"Add an AI chatbot to your HTML site with this step-by-step guide.",source:"@site/docs/installation/cdn.md",sourceDirName:"installation",slug:"/installation/cdn",permalink:"/installation/cdn",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Basic installation",description:"Add an AI chatbot to your HTML site with this step-by-step guide.",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/category/installation"},next:{title:"Antora",permalink:"/installation/antora"}},a={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},{value:"Advanced: Install biel-search",id:"advanced-install-biel-search",level:2},{value:"Next steps",id:"next-steps",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"basic-installation",children:"Basic installation"})}),"\n",(0,n.jsx)(t.p,{children:"Add an AI chatbot to any website using Biel.ai's CDN-hosted components. This method works with any HTML site and requires only two code snippets: one in your head tag and one where you want the chat widget to appear."}),"\n",(0,n.jsx)(t.p,{children:"This guide shows you how to add the chat widget to your site in minutes using simple HTML."}),"\n",(0,n.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsx)(t.p,{children:"Before starting, ensure you have::"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["A ",(0,n.jsx)(t.strong,{children:"Biel.ai account"}),". If you don't have one, ",(0,n.jsx)(t.a,{href:"https://app.biel.ai/accounts/signup/",children:"sign up for free"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"A project created in your Biel.ai dashboard"}),". Follow the ",(0,n.jsx)(t.a,{href:"/",children:"Quickstart guide"})," to create one."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"<biel-button>"})," widget enables a conversational chat powered by AI in your site."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Chatbot widget for docs",src:i(5439).A+"",width:"2880",height:"1576"})}),"\n",(0,n.jsx)(t.p,{children:"To integrate the widget into your website, follow these steps:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Insert the following code within the ",(0,n.jsx)(t.code,{children:"<head>"})," section of your site's HTML:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-html",children:'\x3c!-- Initialize the Biel.AI chat widget --\x3e\n<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/biel-search/dist/biel-search/biel-search.css">\n<script type="module" src="https://cdn.jsdelivr.net/npm/biel-search/dist/biel-search/biel-search.esm.js"><\/script>\n'})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Just before the closing ",(0,n.jsx)(t.code,{children:"</body>"})," tag of your website's HTML, add the following snippet:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-html",children:'<biel-button project="<YOUR_PROJECT_ID>" \n    header-title="Biel.ai chatbot"\n    button-position="bottom-right"\n    modal-position="bottom-right"\n    button-style="dark">\n        Ask AI\n</biel-button>\n'})}),"\n",(0,n.jsxs)(t.p,{children:["Replace ",(0,n.jsx)(t.code,{children:"<YOUR_PROJECT_ID>"})," with your project's ID from the ",(0,n.jsx)(t.a,{href:"/#2-create-a-project",children:"Biel.ai dashboard"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Open the website in a web browser to verify the chatbot is working correctly."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"advanced-install-biel-search",children:"Advanced: Install biel-search"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"<biel-search-button>"})," widget offers a search-based interaction that allows users to query documentation or other indexed content."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Biel search",src:i(2546).A+"",width:"2880",height:"1576"})}),"\n",(0,n.jsx)(t.p,{children:"To integrate the widget into your website, follow these steps:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Insert the following code within the ",(0,n.jsx)(t.code,{children:"<head>"})," section of your site's HTML:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-html",children:'\x3c!-- Initialize the Biel.AI chat widget --\x3e\n<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/biel-search/dist/biel-search/biel-search.css">\n<script type="module" src="https://cdn.jsdelivr.net/npm/biel-search/dist/biel-search/biel-search.esm.js"><\/script>\n'})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Just before the closing ",(0,n.jsx)(t.code,{children:"</body>"})," tag of your website's HTML, add the following snippet in the desired location on your site:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-html",children:'<biel-search-button project="<YOUR_PROJECT_ID>" button-style="rounded">Search</biel-search-button>\n'})}),"\n",(0,n.jsxs)(t.p,{children:["Replace ",(0,n.jsx)(t.code,{children:"<YOUR_PROJECT_ID>"})," with your project's ID from the ",(0,n.jsx)(t.a,{href:"/#2-create-a-project",children:"Biel.ai dashboard"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Open the website in a web browser to verify the search widget is working correctly."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,n.jsxs)(t.p,{children:["For more about customization and additional features exploration, check out the ",(0,n.jsx)(t.a,{href:"/category/customization",children:"customization"})," section."]}),"\n",(0,n.jsxs)(t.p,{children:["Need assistance? We're here to help! Reach out to us at ",(0,n.jsx)(t.a,{href:"https://biel.ai/contact",children:"Biel.ai Support"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},2546:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/biel-search-widget-ca034a4908221a109d42b933cf446381.png"},5439:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/biel-widget-docs-080a0bb415cb5bd67accd1e10d45f9f8.png"},8453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>l});var n=i(6540);const s={},r=n.createContext(s);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);