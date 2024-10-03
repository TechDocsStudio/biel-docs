"use strict";(self.webpackChunkbiel=self.webpackChunkbiel||[]).push([[583],{2587:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>a,contentTitle:()=>n,default:()=>d,frontMatter:()=>t,metadata:()=>b,toc:()=>c});var l=r(4848),i=r(8453);const t={sidebar_position:5},n="Styles",b={id:"customization/styles",title:"Styles",description:"The Biel.ai button is highly customizable, allowing you to customize its appearance to suit your application's needs.",source:"@site/docs/customization/styles.mdx",sourceDirName:"customization",slug:"/customization/styles",permalink:"/customization/styles",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Layout",permalink:"/customization/layout"},next:{title:"Dark mode",permalink:"/customization/dark-mode"}},a={},c=[{value:"Usage",id:"usage",level:2},{value:"Properties",id:"properties",level:2}];function s(e){const o={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.header,{children:(0,l.jsx)(o.h1,{id:"styles",children:"Styles"})}),"\n",(0,l.jsx)(o.p,{children:"The Biel.ai button is highly customizable, allowing you to customize its appearance to suit your application's needs.\nThis reference document lists all the available CSS custom properties that can be overridden to match your website's design."}),"\n",(0,l.jsx)(o.h2,{id:"usage",children:"Usage"}),"\n",(0,l.jsxs)(o.p,{children:["To customize these properties, define them in your website's CSS using the ",(0,l.jsx)(o.code,{children:":root"})," selector for global changes or a specific selector to target particular areas:"]}),"\n",(0,l.jsx)(o.pre,{children:(0,l.jsx)(o.code,{className:"language-css",children:":root {\n    --biel-primary-color: #00D68F;\n    ...\n}\n"})}),"\n",(0,l.jsx)(o.h2,{id:"properties",children:"Properties"}),"\n",(0,l.jsx)(o.p,{children:"The tables below lists all the available properties you can override:"}),"\n",(0,l.jsx)(o.pre,{children:(0,l.jsx)(o.code,{className:"language-css",children:':root {\n    /* Colors */\n    --biel-primary-color: #0070F4;\n    --biel-primary-light-color: #3a99ff;\n    --biel-secondary-color: #f1f3f4;\n    --biel-light-color: #ccc;\n    --biel-dark-color: #191919;\n    --biel-dark-hover-color: #333;\n    --biel-text-color: #5f6368;\n    --biel-white-color: #fff;\n    --biel-white-hover-color: #eee;\n    --biel-highlight-color: #ffb422;\n    --biel-scrollbar-color: #888888;\n    --biel-scrollbar-hover-color: #666666;\n    --code-snippet-header-color: #3a3a3a;\n    --biel-message-source-color: #3b3b3b;\n    --biel-message-source-hover-color: #303030;\n    --biel-table-header-color: #2b2b2b;\n\n\n    /* Fonts */\n    --biel-font-family: "Inter", "Tahoma", "sans-serif";\n    --biel-text-font-size: 14px;\n    --biel-text-lg-font-size: 16px;\n    --biel-text-xl-font-size: 18px;\n    --code-snippet-font-family: "Courier New", "Courier", "monospace";\n\n    /* Biel button */\n    --biel-button-border-radius: 20px;\n    --biel-button-dark-bg-color: var(--biel-primary-color);\n    --biel-button-dark-text-color: var(--biel-white-color);\n    --biel-button-icon-size: 20px;\n    --biel-button-light-bg-color: var(--biel-white-color);\n    --biel-button-light-text-color: var(--biel-primary-color);\n    --biel-button-text-font-size: var(--biel-text-lg-font-size);\n    --biel-button-text-font-weight: 400;\n    --biel-button-z-index: 300;\n\n    /* Biel bot */\n    --biel-bot-close-bg-color: var(--biel-white-color);\n    --biel-bot-close-color: var(--biel-dark-color);\n    --biel-bot-content-bg-color: var(--biel-white-color);\n    --biel-bot-content-border-color: var(--biel-light-color);\n    --biel-bot-content-border-radius: 8px;\n    --biel-bot-content-font-family: var(--biel-font-family);\n    --biel-bot-content-position-bottom: 10px;\n    --biel-bot-content-position-left: 10px;\n    --biel-bot-content-position-right: 10px;\n    --biel-bot-content-position-top: 10px;\n    --biel-bot-content-text-color: var(--biel-text-color);\n    --biel-bot-content-z-index: 300;\n\n    /* Biel input */\n    --biel-input-color: var(--biel-dark-color);\n    --biel-input-border-color: var(--biel-dark-color);\n    --biel-input-button-color: var(--biel-white-color);\n    --biel-input-button-bg-color: var(--biel-dark-color);\n    --biel-input-button-hover-bg-color: var(--biel-dark-hover-color);\n    --biel-input-border-radius: 6px;\n    --biel-input-font-family: var(--biel-font-family);\n    --biel-input-textarea-max-height: 102px;\n    --biel-input-textarea-min-height: 17px;\n\n    /* Biel message */\n    --biel-message-biel-text-color: var(--biel-white-color);\n    --biel-message-user-text-color: var(--biel-white-color);\n    --biel-message-biel-background-color: var(--biel-dark-color);\n    --biel-message-user-background-color: var(--biel-primary-color);\n    --biel-message-avatar-width: 20px;\n    --biel-message-avatar-height: 20px;\n    --biel-message-padding: 10px;\n    --biel-message-avatar-margin-right: 10px;\n    --biel-message-border-radius: 10px;\n    --biel-message-source-font-size: 14px;\n    --biel-message-source-background-color: var(--biel-message-source-color);\n    --biel-message-source-background-hover-color: var(--biel-message-source-hover-color);\n    --biel-message-link-color: var(--biel-primary-light-color);\n\n    /* Biel chat */\n    --biel-chat-scrollbar-color: var(--biel-scrollbar-color);\n    --biel-chat-scrollbar-hover-color: var(--biel-scrollbar-hover-color);\n    --biel-chat-height: 45vh;\n\n    /* Biel header */\n    --biel-header-font-family: var(--biel-font-family);\n    --biel-header-font-size: var(--biel-text-xl-font-size);\n    --biel-header-font-weight: 600;\n    --biel-header-powered-by-font-weight: 400;\n    --biel-header-powered-by-text-color: var(--biel-text-color);\n    --biel-header-powered-by-link-color: var(--biel-dark-color);\n    --biel-header-text-color: var(--biel-dark-color);\n    --biel-header-border-color: var(--biel-light-color);\n\n    /* Code snippet */\n    --code-snippet-header-text-color: var(--biel-text-color);\n    --code-snippet-content-text-color: var(--biel-white-color);\n    --code-snippet-header-bg-color: var(--code-snippet-header-color);\n    --code-snippet-content-bg-color: var(--biel-dark-color);\n    --code-snippet-font-size: var(--biel-text-font-size);\n\n    /* Biel footer */\n    --biel-footer-font-size: 12px;\n\n    /* Biel table */\n    --biel-table-th-bg-color: var(--biel-table-header-color);\n    --biel-table-bg-color: var(--biel-dark-color);\n    --biel-table-content-text-color: var(--biel-white-color);\n\n    /* Biel suggested questions */\n    --biel-suggested-questions-text-color: var(--biel-dark-color);\n    --biel-suggested-questions-text-hover-color: var(--biel-white-color);\n    --biel-suggested-questions-bg-color: var(--biel-white-color);\n    --biel-suggested-questions-bg-hover-color: var(--biel-primary-color);\n    --biel-suggested-questions-border-color: var(--biel-primary-color);    \n\n    /* Biel feedback */\n    --biel-feedback-background-color: var(--biel-message-source-color);\n    --biel-feedback-background-hover-color: var(--biel-message-source-hover-color);\n    --biel-feedback-background-selected-color: var(--biel-primary-color);\n    --biel-feedback-text-color: var(--biel-white-color);\n    --biel-feedback-text-selected-color: var(--biel-white-color);\n}\n\n[data-theme=\'dark\'] {\n    --biel-text-color: #b0b8c4;\n    --biel-light-color: #363636;\n    --biel-scrollbar-color: #555555;\n    --biel-scrollbar-hover-color: #333333;\n    --biel-message-source-color: #eee;\n    --biel-message-source-hover-color: #ddd;\n    --biel-bot-button-bg-color-active: transparent;\n    --biel-bot-button-icon-color: var(--biel-white-color);\n    --biel-bot-button-text-color: var(--biel-white-color);\n    --biel-header-text-color: var(--biel-white-color);\n    --biel-bot-close-bg-color: transparent;\n    --biel-bot-close-color: var(--biel-white-color);\n    --biel-bot-content-bg-color: var(--biel-dark-color);\n    --biel-bot-content-text-color: var(--biel-text-color);\n    --biel-header-powered-by-link-color: var(--biel-white-color);\n    --biel-input-color: var(--biel-white-color);\n    --biel-input-border-color: var(--biel-white-color);\n    --biel-input-button-color: var(--biel-dark-color);\n    --biel-input-button-bg-color: var(--biel-white-color);\n    --biel-input-button-hover-bg-color: var(--biel-white-hover-color);\n    --biel-message-biel-text-color: var(--biel-dark-color);\n    --biel-message-biel-background-color: var(--biel-white-color);\n    --biel-message-source-link-color: var(--biel-primary-color);\n    --biel-suggested-questions-text-color: var(--biel-white-color);\n    --biel-suggested-questions-bg-color: var(--biel-dark-color);\n    --biel-feedback-text-color: var(--biel-dark-color);\n}\n'})})]})}function d(e={}){const{wrapper:o}={...(0,i.R)(),...e.components};return o?(0,l.jsx)(o,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}},8453:(e,o,r)=>{r.d(o,{R:()=>n,x:()=>b});var l=r(6540);const i={},t=l.createContext(i);function n(e){const o=l.useContext(t);return l.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function b(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),l.createElement(t.Provider,{value:o},e.children)}}}]);