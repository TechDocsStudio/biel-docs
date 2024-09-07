"use strict";(self.webpackChunkbiel=self.webpackChunkbiel||[]).push([[963],{4647:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>a});var s=n(4848),i=n(8453);const o={sidebar_label:"MkDocs"},r="AI chatbot for MkDocs",l={id:"installation/mkdocs",title:"AI chatbot for MkDocs",description:"Here's a step-by-step guide to help you install Biel.ai in your MkDocs project.",source:"@site/docs/installation/mkdocs.md",sourceDirName:"installation",slug:"/installation/mkdocs",permalink:"/installation/mkdocs",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"MkDocs"},sidebar:"tutorialSidebar",previous:{title:"Jekyll",permalink:"/installation/jekyll"},next:{title:"Next.js",permalink:"/installation/nextjs"}},c={},a=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},{value:"Next steps",id:"next-steps",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"ai-chatbot-for-mkdocs",children:"AI chatbot for MkDocs"})}),"\n",(0,s.jsx)(t.p,{children:"Here's a step-by-step guide to help you install Biel.ai in your MkDocs project."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Feedback wiget for docs screenshot",src:n(4734).A+"",width:"1725",height:"937"})}),"\n",(0,s.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(t.p,{children:"Before you begin, you'll need to have the following:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["A Biel.ai account. If you don't have one, ",(0,s.jsx)(t.a,{href:"https://app.biel.ai/accounts/signup/",children:"sign up for free"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["A project created in your Biel.ai dashboard. If you haven't created one yet, follow the steps in the ",(0,s.jsx)(t.a,{href:"/#2-create-a-project",children:"Quickstart"})," guide."]}),"\n",(0,s.jsx)(t.li,{children:"A MkDocs project."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(t.p,{children:"To integrate the Biel.ai widget into your MkDocs site:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Navigate to your docs folder and locate the ",(0,s.jsx)(t.code,{children:"overrides"})," directory (create one if it doesn't exist)."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Inside the overrides directory, create or edit the file named ",(0,s.jsx)(t.code,{children:"base.html"}),"."]}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsx)(t.p,{children:"The file names of the templates to override and the block names you need to override might be different, depending on your theme. This example is specifically for the Material for MkDocs theme. Always refer to your theme's documentation or source templates to ensure accurate customization."})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["In this ",(0,s.jsx)(t.code,{children:"base.html"}),", extend the base template and override the necessary sections. Here's what you should add:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",children:'{% extends "base.html" %}\n\n{% block extrahead %}\n\x3c!-- Biel.ai styles --\x3e\n<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/biel-search/dist/biel-search/biel-search.css">\n\n\x3c!-- Biel.ai script as ES6 module --\x3e\n<script type="module" src="https://cdn.jsdelivr.net/npm/biel-search/dist/biel-search/biel-search.esm.js"><\/script>\n{% endblock %}\n\n{% block content %}\n{{ super() }}\n\n\x3c!-- Feedback button --\x3e\n<biel-button project="<YOUR_PROJECT_ID>" button-position="bottom-right" modal-position="bottom-right" button-style="dark">Ask AI</biel-button>\n{% endblock %}\n'})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Ensure your ",(0,s.jsx)(t.code,{children:"mkdocs.yml"})," points to the overrides directory:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:"theme:\n    name: 'material'\n    custom_dir: 'docs/overrides'\n"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Build your MkDocs project:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-console",children:"mkdocs build\n"})}),"\n",(0,s.jsx)(t.p,{children:"Once it builds successfully, verify that the chatbot  appears and functions correctly on your site."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,s.jsxs)(t.p,{children:["For more about customization and additional features exploration, check out the ",(0,s.jsx)(t.a,{href:"/category/configuration",children:"Configuration"})," section."]}),"\n",(0,s.jsxs)(t.p,{children:["Need assistance? We're here to help! Reach out to us at ",(0,s.jsx)(t.a,{href:"https://biel.ai/contact",children:"Biel.ai Support"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},4734:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/feedback-widget-docs-0c902c85b3fa9f951a3c0ffc5e6a037e.png"},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>l});var s=n(6540);const i={},o=s.createContext(i);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);