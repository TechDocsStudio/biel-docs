"use strict";(self.webpackChunkbiel=self.webpackChunkbiel||[]).push([[42],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3262:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_label:"MkDocs"},i="AI chatbot for MkDocs",l={unversionedId:"installation/mkdocs",id:"installation/mkdocs",title:"AI chatbot for MkDocs",description:"Here's a step-by-step guide to help you install Biel.ai in your MkDocs project.",source:"@site/docs/installation/mkdocs.md",sourceDirName:"installation",slug:"/installation/mkdocs",permalink:"/installation/mkdocs",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"MkDocs"},sidebar:"tutorialSidebar",previous:{title:"Jekyll",permalink:"/installation/jekyll"},next:{title:"Next.js",permalink:"/installation/nextjs"}},s={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},{value:"Next steps",id:"next-steps",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ai-chatbot-for-mkdocs"},"AI chatbot for MkDocs"),(0,a.kt)("p",null,"Here's a step-by-step guide to help you install Biel.ai in your MkDocs project."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Feedback wiget for docs screenshot",src:n(1497).Z,width:"1725",height:"937"})),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"Before you begin, you'll need to have the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A Biel.ai account. If you don't have one, ",(0,a.kt)("a",{parentName:"li",href:"https://app.biel.ai/accounts/signup/"},"sign up for free"),"."),(0,a.kt)("li",{parentName:"ul"},"A project created in your Biel.ai dashboard. If you haven't created one yet, follow the steps in the ",(0,a.kt)("a",{parentName:"li",href:"/#2-create-a-project"},"Quickstart")," guide."),(0,a.kt)("li",{parentName:"ul"},"A MkDocs project.")),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"To integrate the Biel.ai widget into your MkDocs site:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Navigate to your docs folder and locate the ",(0,a.kt)("inlineCode",{parentName:"p"},"overrides")," directory (create one if it doesn't exist).")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Inside the overrides directory, create or edit the file named ",(0,a.kt)("inlineCode",{parentName:"p"},"base.html"),"."),(0,a.kt)("admonition",{parentName:"li",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The file names of the templates to override and the block names you need to override might be different, depending on your theme. This example is specifically for the Material for MkDocs theme. Always refer to your theme's documentation or source templates to ensure accurate customization."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In this ",(0,a.kt)("inlineCode",{parentName:"p"},"base.html"),", extend the base template and override the necessary sections. Here's what you should add:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-html"},'{% extends "base.html" %}\n\n{% block extrahead %}\n\x3c!-- Biel.ai styles --\x3e\n<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/biel-search/dist/biel-search/biel-search.css">\n\n\x3c!-- Biel.ai script as ES6 module --\x3e\n<script type="module" src="https://cdn.jsdelivr.net/npm/biel-search/dist/biel-search/biel-search.esm.js"><\/script>\n{% endblock %}\n\n{% block content %}\n{{ super() }}\n\n\x3c!-- Feedback button --\x3e\n<biel-button project="<YOUR_PROJECT_ID>" button-position="bottom-right" modal-position="bottom-right" button-style="dark">ASK AI</biel-button>\n{% endblock %}\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Ensure your ",(0,a.kt)("inlineCode",{parentName:"p"},"mkdocs.yml")," points to the overrides directory:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"theme:\n    name: 'material'\n    custom_dir: 'docs/overrides'\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Build your MkDocs project:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-console"},"mkdocs build\n")),(0,a.kt)("p",{parentName:"li"},"Once it builds successfully, verify that the feedback button appears and functions correctly on your site."))),(0,a.kt)("h2",{id:"next-steps"},"Next steps"),(0,a.kt)("p",null,"For more about customization and additional features exploration, check out the ",(0,a.kt)("a",{parentName:"p",href:"/category/configuration"},"Configuration")," section."),(0,a.kt)("p",null,"Need assistance? We're here to help! Reach out to us at ",(0,a.kt)("a",{parentName:"p",href:"https://biel.ai/contact"},"Biel.ai Support"),"."))}d.isMDXComponent=!0},1497:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/feedback-widget-docs-0c902c85b3fa9f951a3c0ffc5e6a037e.png"}}]);