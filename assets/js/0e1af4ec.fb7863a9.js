(self.webpackChunk=self.webpackChunk||[]).push([[601],{3905:(t,e,r)=>{"use strict";r.d(e,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var u=n.createContext({}),c=function(t){var e=n.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},p=function(t){var e=c(t.components);return n.createElement(u.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,u=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),d=c(r),f=o,m=d["".concat(u,".").concat(f)]||d[f]||s[f]||a;return r?n.createElement(m,i(i({ref:e},p),{},{components:r})):n.createElement(m,i({ref:e},p))}));function f(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l.mdxType="string"==typeof t?t:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8154:(t,e,r)=>{"use strict";r.r(e),r.d(e,{frontMatter:()=>l,metadata:()=>u,toc:()=>c,default:()=>s});var n=r(2122),o=r(9756),a=(r(7294),r(3905)),i=["components"],l={title:"Shortcuts and Automator",sidebar_label:"Shortcuts and Automator"},u={unversionedId:"integration/automator",id:"integration/automator",isDocsHomePage:!1,title:"Shortcuts and Automator",description:'BushelScript Editor comes with a "Run BushelScript" action for your Shortcuts and Automator workflows. Its basic usage is self-explanatory.',source:"@site/docs/integration/automator.md",sourceDirName:"integration",slug:"/integration/automator",permalink:"/help/docs/integration/automator",version:"current",lastUpdatedBy:"Ian Gregory",lastUpdatedAt:1626221596,formattedLastUpdatedAt:"7/13/2021",sidebar_label:"Shortcuts and Automator",frontMatter:{title:"Shortcuts and Automator",sidebar_label:"Shortcuts and Automator"},sidebar:"integration",previous:{title:"Command line",permalink:"/help/docs/integration/cli"},next:{title:"Shells and interpreters",permalink:"/help/docs/integration/shells-and-interpreters"}},c=[{value:"Input",id:"input",children:[]},{value:"Output",id:"output",children:[]}],p={toc:c};function s(t){var e=t.components,r=(0,o.Z)(t,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'BushelScript Editor comes with a "Run BushelScript" action for your Shortcuts and Automator workflows. Its basic usage is self-explanatory.'),(0,a.kt)("h2",{id:"input"},"Input"),(0,a.kt)("p",null,'If the action\'s input is AppleScript-compatible (i.e., it could be the input to a "Run AppleScript" action), then it will be available as the last result (',(0,a.kt)("inlineCode",{parentName:"p"},"that")," in BushelScript English) on the first line of the script. To save it for later, use a variable."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"let action input be that\n-- ...\n-- ...\nalert action input\n")),(0,a.kt)("h2",{id:"output"},"Output"),(0,a.kt)("p",null,"If the result of the last expression executed is AppleScript-compatible, it will be yielded as the result of the Run BushelScript action. If the would-be result isn't AppleScript-compatible, the action returns its input instead."))}s.isMDXComponent=!0}}]);