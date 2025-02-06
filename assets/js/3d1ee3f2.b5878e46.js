"use strict";(self.webpackChunkbiel=self.webpackChunkbiel||[]).push([[4816],{1528:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var n=i(4848),s=i(8453);const o={sidebar_position:2},r="Production checklist",a={id:"security/checklist",title:"Production checklist",description:"Use this checklist to confirm that essential security measures are configured for optimal protection on the Biel.ai chatbot before going to production. Each item provides straightforward actions to help you secure data, control access, and maintain compliance.",source:"@site/docs/security/checklist.md",sourceDirName:"security",slug:"/security/checklist",permalink:"/security/checklist",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/security/overview"},next:{title:"Our providers",permalink:"/security/providers"}},c={},l=[{value:"For widget integrations",id:"for-widget-integrations",level:2},{value:"For API integrations",id:"for-api-integrations",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",input:"input",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"production-checklist",children:"Production checklist"})}),"\n",(0,n.jsx)(t.p,{children:"Use this checklist to confirm that essential security measures are configured for optimal protection on the Biel.ai chatbot before going to production. Each item provides straightforward actions to help you secure data, control access, and maintain compliance."}),"\n",(0,n.jsx)(t.h2,{id:"for-widget-integrations",children:"For widget integrations"}),"\n",(0,n.jsx)(t.admonition,{title:"Widget Integrations Only",type:"info",children:(0,n.jsxs)(t.p,{children:["The following steps apply only to implementations using the ",(0,n.jsx)(t.strong,{children:"chatbot widget"}),"."]})}),"\n",(0,n.jsxs)(t.ul,{className:"contains-task-list",children:["\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.input,{type:"checkbox",disabled:!0})," ",(0,n.jsx)(t.strong,{children:"Restrict allowed domains"}),": List only the domains authorized to host your chatbot widget in  ",(0,n.jsx)(t.strong,{children:"Projects"})," > ",(0,n.jsx)(t.strong,{children:"Settings"})," > ",(0,n.jsx)(t.strong,{children:"Allowed domains"}),". This restricts embedding to approved sites, helping prevent unauthorized access."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.input,{type:"checkbox",disabled:!0})," ",(0,n.jsx)(t.strong,{children:"Enable two-factor authentication (2FA)"}),": Navigate to ",(0,n.jsx)(t.strong,{children:"My Account"})," > ",(0,n.jsx)(t.strong,{children:"Profile"})," and enable 2FA for all accounts with access to the dashboard to enhance access security."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.input,{type:"checkbox",disabled:!0})," ",(0,n.jsx)(t.strong,{children:"Configure data privacy (optional)"}),": Choose whether to display a terms and conditions modal before starting a conversation or to remove Personally Identifiable Information (PII) from chat conversations. For more information, see ",(0,n.jsx)(t.a,{href:"/customization/data-privacy",children:"Data privacy"}),"."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"for-api-integrations",children:"For API integrations"}),"\n",(0,n.jsx)(t.admonition,{title:"API Integrations Only",type:"info",children:(0,n.jsxs)(t.p,{children:["The following steps apply only to direct integrations using the ",(0,n.jsx)(t.strong,{children:"enterprise API"}),". These steps are not necessary for widget-based implementations."]})}),"\n",(0,n.jsxs)(t.ul,{className:"contains-task-list",children:["\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.input,{type:"checkbox",disabled:!0})," ",(0,n.jsx)(t.strong,{children:"Enable bearer authentication"}),": Ensure each API client request includes a bearer token in the header as follows: ",(0,n.jsx)(t.code,{children:"Authorization: Bearer <token>"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.input,{type:"checkbox",disabled:!0})," ",(0,n.jsx)(t.strong,{children:"Set up regular token rotation"}),": Establish a schedule for rotating bearer tokens periodically to enhance security."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.input,{type:"checkbox",disabled:!0})," ",(0,n.jsx)(t.strong,{children:"Verify token security"}),": Confirm that tokens are not publicly accessible (e.g., in repositories) and are shared only with authorized team members."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.input,{type:"checkbox",disabled:!0})," ",(0,n.jsx)(t.strong,{children:"Deactivate unused tokens"}),": Immediately disable any tokens that are no longer in use to prevent unauthorized access."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Completing this checklist ensures that your Biel.ai chatbot environment is secure, protecting data integrity and meeting compliance standards."})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>a});var n=i(6540);const s={},o=n.createContext(s);function r(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);