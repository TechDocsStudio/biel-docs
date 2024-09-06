"use strict";(self.webpackChunkbiel=self.webpackChunkbiel||[]).push([[939],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,k=u["".concat(p,".").concat(m)]||u[m]||d[m]||l;return r?n.createElement(k,i(i({ref:t},c),{},{components:r})):n.createElement(k,i({ref:t},c))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7302:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const l={sidebar_label:"Jekyll"},i="Feedback widget for Jekyll",o={unversionedId:"installation/jekyll",id:"installation/jekyll",title:"Feedback widget for Jekyll",description:"Here's a step-by-step guide to help you install Biel.ai in your Jekyll project.",source:"@site/docs/installation/jekyll.md",sourceDirName:"installation",slug:"/installation/jekyll",permalink:"/installation/jekyll",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Jekyll"},sidebar:"tutorialSidebar",previous:{title:"Hugo",permalink:"/installation/hugo"},next:{title:"MkDocs",permalink:"/installation/mkdocs"}},p={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},{value:"Next steps",id:"next-steps",level:2}],c={toc:s},u="wrapper";function d(e){let{components:t,...l}=e;return(0,a.kt)(u,(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"feedback-widget-for-jekyll"},"Feedback widget for Jekyll"),(0,a.kt)("p",null,"Here's a step-by-step guide to help you install Biel.ai in your Jekyll project."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Feedback wiget for docs screenshot",src:r(1497).Z,width:"1725",height:"937"})),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"Before you begin, you'll need to have the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A Biel.ai account. If you don't have one, ",(0,a.kt)("a",{parentName:"li",href:"https://app.biel.ai/accounts/signup/"},"sign up for free"),"."),(0,a.kt)("li",{parentName:"ul"},"A project created in your Biel.ai dashboard. If you haven't created one yet, follow the steps in the ",(0,a.kt)("a",{parentName:"li",href:"/#2-create-a-project"},"Quickstart")," guide."),(0,a.kt)("li",{parentName:"ul"},"A Jekyll project.")),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"To integrate the Biel.ai widget into your Jekyll site:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open your terminal or command prompt. Navigate to your project's root directory using the ",(0,a.kt)("inlineCode",{parentName:"p"},"cd")," command:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-console"},"cd path/to/your/project\n")),(0,a.kt)("p",{parentName:"li"},"Replace ",(0,a.kt)("inlineCode",{parentName:"p"},"path/to/your/project")," with your project's actual directory path.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open the ",(0,a.kt)("inlineCode",{parentName:"p"},"_includes/head.html")," file (or the equivalent file that contains the ",(0,a.kt)("inlineCode",{parentName:"p"},"<head>")," section in your Jekyll theme). Append the following code:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Initialize the Biel.ai widget --\x3e\n<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/biel-search/dist/biel-search/biel-search.css">\n<script type="module" src="https://cdn.jsdelivr.net/npm/biel-search/dist/biel-search/biel-search.esm.js"><\/script>\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open ",(0,a.kt)("inlineCode",{parentName:"p"},"_includes/footer.html")," or the specific file where you'd like the feedback button to appear. Add the following snippet just before its closing tags:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<biel-button project="<YOUR_PROJECT_ID>" button-position="bottom-right" modal-position="bottom-right" button-style="dark">ASK AI</biel-button>\n')),(0,a.kt)("p",{parentName:"li"},"Replace ",(0,a.kt)("inlineCode",{parentName:"p"},"<YOUR_PROJECT_ID>")," with your project's ID from the ",(0,a.kt)("a",{parentName:"p",href:"/#2-create-a-project"},"Biel.ai dashboard"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"After making these changes, navigate back to your Jekyll project root and run:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-console"},"jekyll build\n")),(0,a.kt)("p",{parentName:"li"},"Once it builds successfully, verify that the feedback button appears and functions correctly on your site."))),(0,a.kt)("h2",{id:"next-steps"},"Next steps"),(0,a.kt)("p",null,"For more about customization and additional features exploration, check out the ",(0,a.kt)("a",{parentName:"p",href:"/category/configuration"},"Configuration")," section."),(0,a.kt)("p",null,"Need assistance? We're here to help! Reach out to us at ",(0,a.kt)("a",{parentName:"p",href:"https://biel.ai/contact"},"Biel.ai Support"),"."))}d.isMDXComponent=!0},1497:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/feedback-widget-docs-0c902c85b3fa9f951a3c0ffc5e6a037e.png"}}]);