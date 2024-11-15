"use strict";(self.webpackChunkbiel=self.webpackChunkbiel||[]).push([[880],{7286:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var t=s(4848),i=s(8453);s(4865),s(9365);const r={sidebar_label:"Docusaurus"},o="AI chatbot for Docusaurus",c={id:"installation/docusaurus",title:"AI chatbot for Docusaurus",description:"Biel.ai is an advanced chatbot designed to transform the way users interact with your technical documentation.",source:"@site/docs/installation/docusaurus.mdx",sourceDirName:"installation",slug:"/installation/docusaurus",permalink:"/installation/docusaurus",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Docusaurus"},sidebar:"tutorialSidebar",previous:{title:"HTML",permalink:"/installation/cdn"},next:{title:"Gatsby",permalink:"/installation/gatsby"}},a={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},{value:"Advanced: Install the search widget",id:"advanced-install-the-search-widget",level:2},{value:"Customization",id:"customization",level:2},{value:"Need help?",id:"need-help",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"ai-chatbot-for-docusaurus",children:"AI chatbot for Docusaurus"})}),"\n",(0,t.jsx)(n.p,{children:"Biel.ai is an advanced chatbot designed to transform the way users interact with your technical documentation.\nBy leveraging AI, Biel.ai delivers instant, context-rich answers, making your documentation more accessible and reducing the need for repetitive support tasks."}),"\n",(0,t.jsx)(n.p,{children:"Here's a step-by-step guide to help you install Biel.ai in your Docusaurus project using NPM."}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(n.p,{children:"Before you begin, you'll need to have the following:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["A Biel.ai account. If you don't have one, ",(0,t.jsx)(n.a,{href:"https://app.biel.ai/accounts/signup/",children:"sign up for free"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["A project created in your Biel.ai dashboard. If you haven't created one yet, follow the steps in the ",(0,t.jsx)(n.a,{href:"/#2-create-a-project",children:"Quickstart"})," guide."]}),"\n",(0,t.jsx)(n.li,{children:"A Docusaurus site and Node.js installed."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(n.p,{children:"The Biel.ai widget enables a conversational chat powered by AI in your site."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Chatbot widget for docs",src:s(5439).A+"",width:"2880",height:"1576"})}),"\n",(0,t.jsx)(n.p,{children:"To integrate the Biel.ai widget into your Docusaurus site:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Open your terminal or command prompt. Navigate to your project's root directory using the ",(0,t.jsx)(n.code,{children:"cd"})," command:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"cd path/to/your/project\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Replace ",(0,t.jsx)(n.code,{children:"path/to/your/project"})," with your project's actual directory path."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"With your terminal still open, run the following command to install Biel.ai:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"npm install docusaurus-biel\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Add the plugin to your Docusaurus config file ",(0,t.jsx)(n.code,{children:"docusaurus.config.js"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"plugins: [\n    [\n        'docusaurus-biel',{\n            project: '<YOUR_PROJECT_ID>',\n            headerTitle: 'Biel.ai chatbot',\n            version: 'latest'\n        }\n    ]\n],\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Replace ",(0,t.jsx)(n.code,{children:"<YOUR_PROJECT_ID>"})," with your project's ID from the ",(0,t.jsx)(n.a,{href:"/#2-create-a-project",children:"Biel.ai dashboard"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Start your Docusaurus project by running ",(0,t.jsx)(n.code,{children:"npm start"})," or ",(0,t.jsx)(n.code,{children:"yarn start"})," in your terminal. Once it compiles successfully, verify that the chatbot appears and functions correctly on your site."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"advanced-install-the-search-widget",children:"Advanced: Install the search widget"}),"\n",(0,t.jsx)(n.p,{children:"Biel.ai's search widget offers a search-based ineraction that allows users to query documentation or other indexed content."}),"\n",(0,t.jsx)(n.p,{children:"To integrate the search widget into your Docusaurus site, follow these steps:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Open your terminal or command prompt. Navigate to your project's root directory using the ",(0,t.jsx)(n.code,{children:"cd"})," command:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"cd path/to/your/project\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Replace ",(0,t.jsx)(n.code,{children:"path/to/your/project"})," with your project's actual directory path."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"With your terminal still open, run the following command to install Biel.ai:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"npm install docusaurus-biel\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Add the plugin to your Docusaurus config file ",(0,t.jsx)(n.code,{children:"docusaurus.config.js"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"plugins: [\n    [\n        'docusaurus-biel',{\n            project: '<YOUR_PROJECT_ID>',\n            headerTitle: 'Biel.ai chatbot',\n            version: 'latest',\n            search: {\n                enable: true,\n                searchButtonText: 'Search...',\n            }\n        }\n    ]\n],\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Replace ",(0,t.jsx)(n.code,{children:"<YOUR_PROJECT_ID>"})," with your project's ID from the ",(0,t.jsx)(n.a,{href:"/#2-create-a-project",children:"Biel.ai dashboard"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Start your Docusaurus project by running ",(0,t.jsx)(n.code,{children:"npm start"})," or ",(0,t.jsx)(n.code,{children:"yarn start"})," in your terminal. Once it compiles successfully, verify that the chatbot appears and functions correctly on your site."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"customization",children:"Customization"}),"\n",(0,t.jsx)(n.p,{children:"You can customize the Biel.ai widget to suit your needs. For example, you can change the widget's position, color, and more."}),"\n",(0,t.jsxs)(n.p,{children:["To do so, you can add any of the following ",(0,t.jsx)(n.a,{href:"/customization/layout",children:"customization"})," options to the plugin or formatted as camelCase."]}),"\n",(0,t.jsx)(n.p,{children:"Here's an example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"plugins: [\n    [\n        'docusaurus-biel',{\n            project: '<YOUR_PROJECT_ID>',\n            buttonPosition: 'center-right',\n            modalPosition: 'sidebar-right',\n            headerTitle: 'Biel.ai chatbot'\n            buttonStyle: 'dark',\n            search: {\n                enable: true,\n                searchButtonText: 'Search...',\n            }\n        }\n    ]\n],\n"})}),"\n",(0,t.jsx)(n.p,{children:"To further customize the style of the Biel.ai widget in Docusaurus, such as altering the widget's background color, you can override specific CSS properties. This is done by defining these properties in a custom stylesheet. Here's how you can do it:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In your project's ",(0,t.jsx)(n.code,{children:"src"})," directory, create the file ",(0,t.jsx)(n.code,{children:"css/custom.css"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.code,{children:"custom.css"})," file, you can define your custom CSS properties. For example, to change the widget's primary color, add the following CSS rule:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-css",children:":root {\n    --biel-primary-color: #FF0000; /* Replace #FF0000 with the hex color code of your choice */\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["For a complete reference of properties you can modify, see the ",(0,t.jsx)(n.a,{href:"../customization/styles",children:"Styles"})," documentation."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Open your ",(0,t.jsx)(n.code,{children:"docusaurus.config.js"})," file and locate the ",(0,t.jsx)(n.code,{children:"presets"})," array and within it, the ",(0,t.jsx)(n.code,{children:"classic"})," preset configuration. Then, add a reference to your custom stylesheet in the theme configuration. It should look something like this:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"presets: [\n    [\n        'classic',\n        {\n        // ... other configurations ...\n        theme: {\n            customCss: require.resolve('./src/css/custom.css'), // Add this line\n        },\n        // ... other configurations ...\n        },\n    ],\n],\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"need-help",children:"Need help?"}),"\n",(0,t.jsxs)(n.p,{children:["We're here to help! Reach out to us at ",(0,t.jsx)(n.a,{href:"https://biel.ai/contact",children:"Biel.ai Support"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},9365:(e,n,s)=>{s(6540);s(4848)},4865:(e,n,s)=>{s(6540),s(2303);s(4848)},5439:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/biel-widget-docs-d5454c7b7b4cacdd6da4cd5b426f5c40.png"},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>c});var t=s(6540);const i={},r=t.createContext(i);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);