"use strict";(self.webpackChunkbiel=self.webpackChunkbiel||[]).push([[646],{6754:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var i=n(4848),s=n(8453);const o={sidebar_label:"Next.js",description:"Learn how to add an AI chatbot to your Next.js site with this step-by-step guide."},r="AI chatbot for Next.js",a={id:"installation/nextjs",title:"AI chatbot for Next.js",description:"Learn how to add an AI chatbot to your Next.js site with this step-by-step guide.",source:"@site/docs/installation/nextjs.md",sourceDirName:"installation",slug:"/installation/nextjs",permalink:"/installation/nextjs",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Next.js",description:"Learn how to add an AI chatbot to your Next.js site with this step-by-step guide."},sidebar:"tutorialSidebar",previous:{title:"MkDocs",permalink:"/installation/mkdocs"},next:{title:"NPM",permalink:"/installation/npm"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},{value:"Next steps",id:"next-steps",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"ai-chatbot-for-nextjs",children:"AI chatbot for Next.js"})}),"\n",(0,i.jsx)(t.p,{children:"Biel.ai is an advanced chatbot designed to transform the way users interact with your technical documentation.\nBy leveraging AI, Biel.ai delivers instant, context-rich answers, making your documentation more accessible and reducing the need for repetitive support tasks."}),"\n",(0,i.jsx)(t.p,{children:"Here's a step-by-step guide to help you install Biel.ai in your Next.js project using NPM."}),"\n",(0,i.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsx)(t.p,{children:"Before starting, ensure you have the following:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["A ",(0,i.jsx)(t.strong,{children:"Biel.ai account"}),". If you don't have one, ",(0,i.jsx)(t.a,{href:"https://app.biel.ai/accounts/signup/",children:"sign up for free"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"A project created in your Biel.ai dashboard"}),". Follow the ",(0,i.jsx)(t.a,{href:"/",children:"Quickstart guide"})," to create one."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"A Next.js application"})," ready to install Biel.ai."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Node.js"})," installed."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(t.p,{children:"The Biel.ai widget enables a conversational chat powered by AI in your site."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Chatbot widget for docs",src:n(5439).A+"",width:"2880",height:"1576"})}),"\n",(0,i.jsx)(t.p,{children:"To integrate the Biel.ai widget into your Next.js site:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Open your terminal or command prompt. Navigate to your project's root directory using the ",(0,i.jsx)(t.code,{children:"cd"})," command:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-console",children:"cd path/to/your/project\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Replace ",(0,i.jsx)(t.code,{children:"path/to/your/project"})," with your project's actual directory path."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"With your terminal still open, run the following command to install Biel.ai:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-console",children:"npm install biel-react\n"})}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["If you're using yarn as your package manager, run ",(0,i.jsx)(t.code,{children:"yarn add biel-react"})," instead of the npm command above."]})}),"\n",(0,i.jsx)(t.p,{children:"This will download and install the Biel.ai package into your project."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Create a wrapper for the chatbot by creating a file under the path ",(0,i.jsx)(t.code,{children:"components/biel-search.tsx"})," and paste the following code:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"import React, { useEffect } from 'react';\nimport { BielButton } from 'biel-react';\nimport { JSX, defineCustomElements } from 'biel-search/loader';\nimport { StyleReactProps } from 'biel-react/dist/types/react-component-lib/interfaces';\nimport 'biel-search/dist/biel-search/biel-search.css';\n\nconst DynamicBielButtonComponent = (props: React.JSX.IntrinsicAttributes & JSX.BielButton & Omit<React.HTMLAttributes<HTMLBielButtonElement>, \"style\"> & StyleReactProps & React.RefAttributes<HTMLBielButtonElement>) => {\nuseEffect(() => {\n    defineCustomElements(windowF);\n}, []);\n\nreturn <BielButton {...props} />;\n};\n\nexport default DynamicBielButtonComponent;\n"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["In the component where you wish to display the chatbot (often ",(0,i.jsx)(t.code,{children:"_pages/app.tsx"})," or ",(0,i.jsx)(t.code,{children:"app/layout.tsx"}),"), include it shown below:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:'\'use client\'\nimport dynamic from \'next/dynamic\';\n\nexport default function Banner() {\n\nconst DynamicBielButton = dynamic(() => import(\'@/components/utils/biel-search\'), {\n    ssr: false,\n});  \n\nreturn (\n<div className="App">\n{/* Other components and content */}\n    <DynamicBielButton\n        project="<YOUR_PROJECT_ID>"\n        header-title="Biel.ai chatbot"\n        button-position="bottom-right"\n        modal-position="bottom-right"\n        button-style="dark">\n        Ask AI\n    </DynamicBielButton>\n</div>\n);\n'})}),"\n",(0,i.jsxs)(t.p,{children:["Replace ",(0,i.jsx)(t.code,{children:"<YOUR_PROJECT_ID>"})," with your project's ID from the ",(0,i.jsx)(t.a,{href:"/#2-create-a-project",children:"Biel.ai dashboard"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Start your Next.js app by running ",(0,i.jsx)(t.code,{children:"npm start"})," or ",(0,i.jsx)(t.code,{children:"yarn start"})," in your terminal. Once it compiles successfully, verify that the chatbot appears and functions correctly on your site."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,i.jsxs)(t.p,{children:["For more about customization and additional features exploration, check out the ",(0,i.jsx)(t.a,{href:"/category/customization",children:"customization"})," section."]}),"\n",(0,i.jsxs)(t.p,{children:["Need assistance? We're here to help! Reach out to us at ",(0,i.jsx)(t.a,{href:"https://biel.ai/contact",children:"Biel.ai Support"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},5439:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/biel-widget-docs-080a0bb415cb5bd67accd1e10d45f9f8.png"},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var i=n(6540);const s={},o=i.createContext(s);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);