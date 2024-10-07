"use strict";(self.webpackChunkbiel=self.webpackChunkbiel||[]).push([[644],{513:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var i=n(4848),o=n(8453);const r={sidebar_label:"React"},s="AI chatbot for React",a={id:"installation/react",title:"AI chatbot for React",description:"Here's a step-by-step guide to help you install Biel.ai in your React project using NPM.",source:"@site/docs/installation/react.md",sourceDirName:"installation",slug:"/installation/react",permalink:"/installation/react",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"React"},sidebar:"tutorialSidebar",previous:{title:"NPM",permalink:"/installation/npm"},next:{title:"Sphinx",permalink:"/installation/sphinx"}},c={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},{value:"Next steps",id:"next-steps",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"ai-chatbot-for-react",children:"AI chatbot for React"})}),"\n",(0,i.jsx)(t.p,{children:"Here's a step-by-step guide to help you install Biel.ai in your React project using NPM."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Chatbot wiget for docs",src:n(5439).A+"",width:"2880",height:"1576"})}),"\n",(0,i.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsx)(t.p,{children:"Before you begin, you'll need to have the following:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["A Biel.ai account. If you don't have one, ",(0,i.jsx)(t.a,{href:"https://app.biel.ai/accounts/signup/",children:"sign up for free"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["A project created in your Biel.ai dashboard. If you haven't created one yet, follow the steps in the ",(0,i.jsx)(t.a,{href:"/#2-create-a-project",children:"Quickstart"})," guide."]}),"\n",(0,i.jsx)(t.li,{children:"A React application and Node.js installed."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Open your terminal or command prompt. Navigate to your project's root directory using the ",(0,i.jsx)(t.code,{children:"cd"})," command:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-console",children:"cd path/to/your/project\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Replace ",(0,i.jsx)(t.code,{children:"path/to/your/project"})," with your project's actual directory path."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"With your terminal still open, run the following command to install Biel.ai:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-console",children:"npm install pushfeedback-react\n"})}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["If you're using yarn as your package manager, run ",(0,i.jsx)(t.code,{children:"yarn add biel-react"})," instead of the npm command above."]})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["In the main component where you wish to place the chatbot (often ",(0,i.jsx)(t.code,{children:"src/App.js"}),"), embed the Biel.ai button:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"import React, { useEffect } from 'react';\n\nimport { BielButton } from 'biel-react';\nimport { defineCustomElements } from 'biel-search/loader';\nimport 'biel-search/dist/biel-search/biel-search.css';\n\nfunction App() {\n    \n    useEffect(() => {\n        if (typeof window !== 'undefined') {\n        defineCustomElements(window);\n        }\n    }, []);\n\n    return (\n        <div className=\"App\">\n            {/* Other components and content */}\n            <BielButton project=\"<YOUR_PROJECT_ID>\" button-position=\"bottom-right\" modal-position=\"bottom-right\" button-style=\"dark\">Ask AI</BielButton>\n        </div>\n    );\n}\n\nexport default App;\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Replace ",(0,i.jsx)(t.code,{children:"<YOUR_PROJECT_ID>"})," with your project's ID from the ",(0,i.jsx)(t.a,{href:"/#2-create-a-project",children:"Biel.ai dashboard"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Start your React app by running ",(0,i.jsx)(t.code,{children:"npm start"})," or ",(0,i.jsx)(t.code,{children:"yarn start"})," in your terminal. Once it compiles successfully, verify that the chatbot  appears and functions correctly on your site."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,i.jsxs)(t.p,{children:["For more about customization and additional features exploration, check out the ",(0,i.jsx)(t.a,{href:"/category/customization",children:"customization"})," section."]}),"\n",(0,i.jsxs)(t.p,{children:["Need assistance? We're here to help! Reach out to us at ",(0,i.jsx)(t.a,{href:"https://biel.ai/contact",children:"Biel.ai Support"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},5439:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/biel-widget-docs-d5454c7b7b4cacdd6da4cd5b426f5c40.png"},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var i=n(6540);const o={},r=i.createContext(o);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);