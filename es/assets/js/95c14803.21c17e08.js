"use strict";(self.webpackChunkbiel=self.webpackChunkbiel||[]).push([[971],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7341:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_label:"Vue.js"},i="Feedback widget for Vue.js",l={unversionedId:"installation/vue",id:"installation/vue",title:"Feedback widget for Vue.js",description:"Here's a step-by-step guide to help you install Biel.ai in your Vue.js project using NPM.",source:"@site/docs/installation/vue.md",sourceDirName:"installation",slug:"/installation/vue",permalink:"/es/installation/vue",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Vue.js"},sidebar:"tutorialSidebar",previous:{title:"Sphinx",permalink:"/es/installation/sphinx"},next:{title:"Wordpress",permalink:"/es/installation/wordpress"}},p={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},{value:"Next steps",id:"next-steps",level:2}],c={toc:s},u="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"feedback-widget-for-vuejs"},"Feedback widget for Vue.js"),(0,r.kt)("p",null,"Here's a step-by-step guide to help you install Biel.ai in your Vue.js project using NPM."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Feedback wiget for docs screenshot",src:n(1497).Z,width:"1725",height:"937"})),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Before you begin, you'll need to have the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A Biel.ai account. If you don't have one, ",(0,r.kt)("a",{parentName:"li",href:"https://app.biel.ai/accounts/signup/"},"sign up for free"),"."),(0,r.kt)("li",{parentName:"ul"},"A project created in your Biel.ai dashboard. If you haven't created one yet, follow the steps in the ",(0,r.kt)("a",{parentName:"li",href:"/es/#2-create-a-project"},"Quickstart")," guide."),(0,r.kt)("li",{parentName:"ul"},"A Vue.js project and Node.js installed.")),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"To integrate the Biel.ai widget into your Vue.js site:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open your terminal or command prompt. Navigate to your project's root directory using the ",(0,r.kt)("inlineCode",{parentName:"p"},"cd")," command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-console"},"cd path/to/your/project\n")),(0,r.kt)("p",{parentName:"li"},"Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"path/to/your/project")," with your project's actual directory path.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"With your terminal still open, run the following command to install Biel.ai:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-console"},"npm install pushfeedback\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open your main Vue component or the desired Vue component where you want the feedback widget to appear. Then, incorporate the Biel.ai styles and scripts:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"<script>\n// Incorporate Biel.ai styles\nimport 'pushfeedback/dist/biel-search/biel-search.css';\n\n// Initialize the Biel.ai widget\nimport 'pushfeedback/dist/biel-search/biel-search.esm.js';\n<\/script>\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the template section of your Vue component, add the following snippet:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n    \x3c!-- Rest of your component\'s template --\x3e\n\n    <biel-button \n        project="<YOUR_PROJECT_ID>" \n        button-position="bottom-right" \n        modal-position="bottom-right" \n        button-style="dark">\n        Feedback\n    </biel-button>\n</template>\n')),(0,r.kt)("p",{parentName:"li"},"Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"<YOUR_PROJECT_ID>")," with your project's ID from the ",(0,r.kt)("a",{parentName:"p",href:"/es/#2-create-a-project"},"Biel.ai dashboard"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"After making these changes, navigate back to your Vue.js project root and run:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-console"},"npm run serve\n")),(0,r.kt)("p",{parentName:"li"},"Open the website in a web browser to verify that the feedback button appears and works correctly."))),(0,r.kt)("h2",{id:"next-steps"},"Next steps"),(0,r.kt)("p",null,"For more about customization and additional features exploration, check out the ",(0,r.kt)("a",{parentName:"p",href:"/category/configuration"},"Configuration")," section."),(0,r.kt)("p",null,"Need assistance? We're here to help! Reach out to us at ",(0,r.kt)("a",{parentName:"p",href:"https://biel.ai/contact"},"Biel.ai Support"),"."))}d.isMDXComponent=!0},1497:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/feedback-widget-docs-0c902c85b3fa9f951a3c0ffc5e6a037e.png"}}]);