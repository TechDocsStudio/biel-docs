"use strict";(self.webpackChunkbiel=self.webpackChunkbiel||[]).push([[157],{7393:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=t(4848),n=t(8453);const r={sidebar_label:"Wordpress"},o="AI chatbot for Wordpress",l={id:"installation/wordpress",title:"AI chatbot for Wordpress",description:"Here's a step-by-step guide to help you install Biel.ai in your Wordpress site.",source:"@site/docs/installation/wordpress.md",sourceDirName:"installation",slug:"/installation/wordpress",permalink:"/installation/wordpress",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Wordpress"},sidebar:"tutorialSidebar",previous:{title:"Vue.js",permalink:"/installation/vue"},next:{title:"Customization",permalink:"/category/customization"}},a={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},{value:"Next steps",id:"next-steps",level:2}];function d(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"ai-chatbot-for-wordpress",children:"AI chatbot for Wordpress"})}),"\n",(0,i.jsx)(s.p,{children:"Here's a step-by-step guide to help you install Biel.ai in your Wordpress site."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Chatbot widget for docs",src:t(5439).A+"",width:"2880",height:"1576"})}),"\n",(0,i.jsx)(s.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["A Biel.ai account. If you don't have one, ",(0,i.jsx)(s.a,{href:"https://app.biel.ai/accounts/signup/",children:"sign up for free"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:["A project created in your Biel.ai dashboard. If you haven't created one yet, follow the steps in the ",(0,i.jsx)(s.a,{href:"/#2-create-a-project",children:"Quickstart"})," guide."]}),"\n",(0,i.jsx)(s.li,{children:"A Wordpress website."}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(s.p,{children:"To embed the Biel.ai widget into your WordPress site:"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Access the admin dashboard of your WordPress website by navigating to ",(0,i.jsx)(s.code,{children:"http://yourwebsite.com/wp-admin/"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Add the Biel.ai styles and scripts:"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Navigate to ",(0,i.jsx)(s.strong,{children:"Appearance > Theme Editor"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["From the right sidebar, select the ",(0,i.jsx)(s.code,{children:"header.php"})," file to edit the ",(0,i.jsx)(s.code,{children:"<head>"})," section."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Insert the following code within the ",(0,i.jsx)(s.code,{children:"<head>"})," section:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-html",children:'\x3c!-- Initialize the Biel.ai widget --\x3e\n<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/biel-search/dist/biel-search/biel-search.css">\n<script type="module" src="https://cdn.jsdelivr.net/npm/biel-search/dist/biel-search/biel-search.esm.js"><\/script>\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["To insert the chatbot just before the ",(0,i.jsx)(s.code,{children:"</body>"})," tag:"]}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["While still in the ",(0,i.jsx)(s.strong,{children:"Theme Editor"}),", locate and click on the ",(0,i.jsx)(s.code,{children:"footer.php"})," file from the right sidebar."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Just before the ",(0,i.jsx)(s.code,{children:"</body>"})," tag, paste the following snippet:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-html",children:'<biel-button project="<YOUR_PROJECT_ID>" \n    header-title="Biel.ai chatbot"\n    button-position="bottom-right"\n    modal-position="bottom-right"\n    button-style="dark">\n        Ask AI\n</biel-button>\n'})}),"\n",(0,i.jsxs)(s.p,{children:["Replace ",(0,i.jsx)(s.code,{children:"<YOUR_PROJECT_ID>"})," with your project's ID from the ",(0,i.jsx)(s.a,{href:"/#2-create-a-project",children:"Biel.ai dashboard"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Once you've saved your changes, visit your WordPress website in a web browser. Confirm that the chatbot is visible and operational."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,i.jsxs)(s.p,{children:["For more about customization and additional features exploration, check out the ",(0,i.jsx)(s.a,{href:"/category/customization",children:"customization"})," section."]}),"\n",(0,i.jsxs)(s.p,{children:["Need assistance? We're here to help! Reach out to us at ",(0,i.jsx)(s.a,{href:"https://biel.ai/contact",children:"Biel.ai Support"}),"."]})]})}function h(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},5439:(e,s,t)=>{t.d(s,{A:()=>i});const i=t.p+"assets/images/biel-widget-docs-d5454c7b7b4cacdd6da4cd5b426f5c40.png"},8453:(e,s,t)=>{t.d(s,{R:()=>o,x:()=>l});var i=t(6540);const n={},r=i.createContext(n);function o(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);