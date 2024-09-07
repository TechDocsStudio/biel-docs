"use strict";(self.webpackChunkbiel=self.webpackChunkbiel||[]).push([[413],{3460:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var i=t(4848),s=t(8453);const o={sidebar_label:"Gatsby"},a="AI chatbot for Gatsby",r={id:"installation/gatsby",title:"AI chatbot for Gatsby",description:"Here's a step-by-step guide to help you install Biel.ai in your Gatsby project using NPM.",source:"@site/docs/installation/gatsby.md",sourceDirName:"installation",slug:"/installation/gatsby",permalink:"/es/installation/gatsby",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Gatsby"},sidebar:"tutorialSidebar",previous:{title:"Docusaurus",permalink:"/es/installation/docusaurus"},next:{title:"Hugo",permalink:"/es/installation/hugo"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},{value:"Next steps",id:"next-steps",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"ai-chatbot-for-gatsby",children:"AI chatbot for Gatsby"})}),"\n",(0,i.jsx)(n.p,{children:"Here's a step-by-step guide to help you install Biel.ai in your Gatsby project using NPM."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Feedback wiget for docs screenshot",src:t(4734).A+"",width:"1725",height:"937"})}),"\n",(0,i.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsx)(n.p,{children:"Before you begin, you'll need to have the following:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["A Biel.ai account. If you don't have one, ",(0,i.jsx)(n.a,{href:"https://app.biel.ai/accounts/signup/",children:"sign up for free"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["A project created in your Biel.ai dashboard. If you haven't created one yet, follow the steps in the ",(0,i.jsx)(n.a,{href:"/es/#2-create-a-project",children:"Quickstart"})," guide."]}),"\n",(0,i.jsx)(n.li,{children:"A Gatsby application and Node.js installed."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(n.p,{children:"To integrate the Biel.ai widget into your Gatsby site:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Open your terminal or command prompt. Navigate to your project's root directory using the ",(0,i.jsx)(n.code,{children:"cd"})," command:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:"cd path/to/your/project\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Replace ",(0,i.jsx)(n.code,{children:"path/to/your/project"})," with your project's actual directory path."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"With your terminal still open, run the following command to install Biel.ai:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:"npm install pushfeedback-react\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["If you're using yarn as your package manager, run ",(0,i.jsx)(n.code,{children:"yarn add biel-react"})," instead of the npm command above."]})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the main component where you wish to place the chatbot (often ",(0,i.jsx)(n.code,{children:"src/pages/index.js"}),"), embed the Biel.ai button:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import React, { useEffect } from 'react';\n\nimport { BielButton } from 'biel-react';\nimport { defineCustomElements } from 'biel-search/loader';\nimport 'biel-search/dist/biel-search/biel-search.css';\n\nconst IndexPage = () => {\n    \n    useEffect(() => {\n        if (typeof window !== 'undefined') {\n            defineCustomElements(window);\n        }\n    }, []);\n\n    return (\n        <div className=\"page-layout\">\n            {/* Other components and content */}\n            <BielButton project=\"<YOUR_PROJECT_ID>\" button-position=\"bottom-right\" modal-position=\"bottom-right\" button-style=\"dark\">Ask AI</BielButton>\n        </div>\n    );\n}\n\nexport default IndexPage;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Replace ",(0,i.jsx)(n.code,{children:"<YOUR_PROJECT_ID>"})," with your project's ID from the ",(0,i.jsx)(n.a,{href:"/es/#2-create-a-project",children:"Biel.ai dashboard"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Start your Gatsby app by running ",(0,i.jsx)(n.code,{children:"gatsby develop"})," in your terminal. Once it compiles successfully, verify that the chatbot  appears and functions correctly on your site."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,i.jsxs)(n.p,{children:["For more about customization and additional features exploration, check out the ",(0,i.jsx)(n.a,{href:"/category/configuration",children:"Configuration"})," section."]}),"\n",(0,i.jsxs)(n.p,{children:["Need assistance? We're here to help! Reach out to us at ",(0,i.jsx)(n.a,{href:"https://biel.ai/contact",children:"Biel.ai Support"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},4734:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/feedback-widget-docs-0c902c85b3fa9f951a3c0ffc5e6a037e.png"},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var i=t(6540);const s={},o=i.createContext(s);function a(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);