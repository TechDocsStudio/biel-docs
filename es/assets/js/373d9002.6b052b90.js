"use strict";(self.webpackChunkbiel=self.webpackChunkbiel||[]).push([[540],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:r,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1175:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_label:"Sphinx"},o="Feedback widget for Sphinx",p={unversionedId:"installation/sphinx",id:"installation/sphinx",title:"Feedback widget for Sphinx",description:"Here's a step-by-step guide to help you install Biel.ai in your Sphinx project.",source:"@site/docs/installation/sphinx.md",sourceDirName:"installation",slug:"/installation/sphinx",permalink:"/es/installation/sphinx",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Sphinx"},sidebar:"tutorialSidebar",previous:{title:"React",permalink:"/es/installation/react"},next:{title:"Vue.js",permalink:"/es/installation/vue"}},l={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},{value:"Next steps",id:"next-steps",level:2}],c={toc:s},u="wrapper";function d(e){let{components:t,...i}=e;return(0,r.kt)(u,(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"feedback-widget-for-sphinx"},"Feedback widget for Sphinx"),(0,r.kt)("p",null,"Here's a step-by-step guide to help you install Biel.ai in your Sphinx project."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Feedback wiget for docs screenshot",src:n(1497).Z,width:"1725",height:"937"})),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Before you begin, you'll need to have the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A Biel.ai account. If you don't have one, ",(0,r.kt)("a",{parentName:"li",href:"https://app.biel.ai/accounts/signup/"},"sign up for free"),"."),(0,r.kt)("li",{parentName:"ul"},"A project created in your Biel.ai dashboard. If you haven't created one yet, follow the steps in the ",(0,r.kt)("a",{parentName:"li",href:"/es/#2-create-a-project"},"Quickstart")," guide."),(0,r.kt)("li",{parentName:"ul"},"A Sphinx project.")),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"To integrate the Biel.ai widget into your Sphinx site:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open your terminal or command prompt. Navigate to your project's root directory using the ",(0,r.kt)("inlineCode",{parentName:"p"},"cd")," command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-console"},"cd path/to/your/project\n")),(0,r.kt)("p",{parentName:"li"},"Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"path/to/your/project")," with your project's actual directory path.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"With your terminal still open, run the following command to install Biel.ai via PIP:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-console"},"pip install sphinx-pushfeedback\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add the extension to your Sphinx project's ",(0,r.kt)("inlineCode",{parentName:"p"},"conf.py")," file:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},"extensions ['sphinx_pushfeedback']\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure your project ID in the ",(0,r.kt)("inlineCode",{parentName:"p"},"conf.py")," file:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},"pushfeedback_project = '<YOUR_PROJECT_ID>'\n")),(0,r.kt)("p",{parentName:"li"},"Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"<YOUR_PROJECT_ID>")," with your project's ID from the ",(0,r.kt)("a",{parentName:"p",href:"/es/#2-create-a-project"},"Biel.ai dashboard"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Build the documentation:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-console"},"make html\n")),(0,r.kt)("p",{parentName:"li"},"Once built, open your documentation in a web browser. Verify that the feedback button appears and works correctly on your site."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Sphinx Feedback widget",src:n(6921).Z,width:"3840",height:"1848"})))),(0,r.kt)("h2",{id:"next-steps"},"Next steps"),(0,r.kt)("p",null,"You can customize the Biel.ai widget to suit your needs. For example, you can change the widget's position, color, and more."),(0,r.kt)("p",null,"To do so, you can add any of the following ",(0,r.kt)("a",{parentName:"p",href:"/es/configuration/layout"},"configuration"),"  options to your ",(0,r.kt)("inlineCode",{parentName:"p"},"conf.py")," file, with the following modifications:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Prefix configuration options with ",(0,r.kt)("inlineCode",{parentName:"p"},"pushfeedback_"),". For instance, ",(0,r.kt)("inlineCode",{parentName:"p"},"project")," would be ",(0,r.kt)("inlineCode",{parentName:"p"},"pushfeedback_project"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Use underscores instead of hyphens as words separator. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"button-position")," becomes ",(0,r.kt)("inlineCode",{parentName:"p"},"pushfeedback_button_position"),"."))),(0,r.kt)("p",null,"Here's an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'pushfeedback_button_style = "light"\n')))}d.isMDXComponent=!0},1497:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/feedback-widget-docs-0c902c85b3fa9f951a3c0ffc5e6a037e.png"},6921:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/sphinx-1f549548421209ca36d90627ea6ef39a.png"}}]);