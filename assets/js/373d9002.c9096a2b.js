"use strict";(self.webpackChunkbiel=self.webpackChunkbiel||[]).push([[449],{9546:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>a});var t=i(4848),s=i(8453);const o={sidebar_label:"Sphinx"},r="AI chatbot for Sphinx",l={id:"installation/sphinx",title:"AI chatbot for Sphinx",description:"Here's a step-by-step guide to help you install Biel.ai in your Sphinx project.",source:"@site/docs/installation/sphinx.md",sourceDirName:"installation",slug:"/installation/sphinx",permalink:"/installation/sphinx",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Sphinx"},sidebar:"tutorialSidebar",previous:{title:"React",permalink:"/installation/react"},next:{title:"Vue.js",permalink:"/installation/vue"}},c={},a=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},{value:"Next steps",id:"next-steps",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"ai-chatbot-for-sphinx",children:"AI chatbot for Sphinx"})}),"\n",(0,t.jsx)(n.p,{children:"Here's a step-by-step guide to help you install Biel.ai in your Sphinx project."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Feedback wiget for docs screenshot",src:i(4734).A+"",width:"1725",height:"937"})}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(n.p,{children:"Before you begin, you'll need to have the following:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["A Biel.ai account. If you don't have one, ",(0,t.jsx)(n.a,{href:"https://app.biel.ai/accounts/signup/",children:"sign up for free"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["A project created in your Biel.ai dashboard. If you haven't created one yet, follow the steps in the ",(0,t.jsx)(n.a,{href:"/#2-create-a-project",children:"Quickstart"})," guide."]}),"\n",(0,t.jsx)(n.li,{children:"A Sphinx project."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(n.p,{children:"To integrate the Biel.ai widget into your Sphinx site:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Open your terminal or command prompt. Navigate to your project's root directory using the ",(0,t.jsx)(n.code,{children:"cd"})," command:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"cd path/to/your/project\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Replace ",(0,t.jsx)(n.code,{children:"path/to/your/project"})," with your project's actual directory path."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"With your terminal still open, run the following command to install Biel.ai via PIP:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"pip install sphinx-biel\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Add the extension to your Sphinx project's ",(0,t.jsx)(n.code,{children:"conf.py"})," file:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"extensions ['sphinx_biel']\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Configure your project ID in the ",(0,t.jsx)(n.code,{children:"conf.py"})," file:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"biel_project = '<YOUR_PROJECT_ID>'\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Replace ",(0,t.jsx)(n.code,{children:"<YOUR_PROJECT_ID>"})," with your project's ID from the ",(0,t.jsx)(n.a,{href:"/#2-create-a-project",children:"Biel.ai dashboard"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Build the documentation:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"make html\n"})}),"\n",(0,t.jsx)(n.p,{children:"Once built, open your documentation in a web browser. verify that the chatbot  appears and works correctly on your site."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Sphinx Chatbot",src:i(4974).A+"",width:"3840",height:"1848"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,t.jsx)(n.p,{children:"You can customize the Biel.ai widget to suit your needs. For example, you can change the widget's position, color, and more."}),"\n",(0,t.jsxs)(n.p,{children:["To do so, you can add any of the following ",(0,t.jsx)(n.a,{href:"/configuration/layout",children:"configuration"}),"  options to your ",(0,t.jsx)(n.code,{children:"conf.py"})," file, with the following modifications:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Prefix configuration options with ",(0,t.jsx)(n.code,{children:"biel_"}),". For instance, ",(0,t.jsx)(n.code,{children:"project"})," would be ",(0,t.jsx)(n.code,{children:"biel_project"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Use underscores instead of hyphens as words separator. For example, ",(0,t.jsx)(n.code,{children:"button-position"})," becomes ",(0,t.jsx)(n.code,{children:"biel_button_position"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Here's an example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'biel_button_style = "light"\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},4734:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/feedback-widget-docs-0c902c85b3fa9f951a3c0ffc5e6a037e.png"},4974:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/sphinx-1f549548421209ca36d90627ea6ef39a.png"},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>l});var t=i(6540);const s={},o=t.createContext(s);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);