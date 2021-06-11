(self.webpackChunk=self.webpackChunk||[]).push([[256],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2717:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>l,metadata:()=>s,toc:()=>c,default:()=>u});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),i=["components"],l={title:"Translation Files",sidebar_label:"Translation Files"},s={unversionedId:"internal/translation",id:"internal/translation",isDocsHomePage:!1,title:"Translation Files",description:"Translation files map term IDs to term names. Recall that a term ID is the combination of a syntactic role and semantic URI.",source:"@site/docs/internal/translation.md",sourceDirName:"internal",slug:"/internal/translation",permalink:"/help/docs/internal/translation",version:"current",lastUpdatedBy:"Ian Gregory",lastUpdatedAt:1623393694,formattedLastUpdatedAt:"6/11/2021",sidebar_label:"Translation Files",frontMatter:{title:"Translation Files",sidebar_label:"Translation Files"},sidebar:"internal",previous:{title:"BushelScript Internals \u2013 Introduction",permalink:"/help/docs/internal"},next:{title:"sdef Files",permalink:"/help/docs/internal/sdef"}},c=[],p={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Translation files map term IDs to term names. Recall that a term ID is the combination of a syntactic role and semantic URI."),(0,o.kt)("p",null,"Translation files use a YAML-based format and have a ",(0,o.kt)("inlineCode",{parentName:"p"},".yaml")," extension. They are read from the ",(0,o.kt)("inlineCode",{parentName:"p"},"Contents/Resources/Translations")," folder of the current language module. In the future, they should also be read from a folder dedicated to user-provided translations, allowing library terms to be translated into different languages."),(0,o.kt)("p",null,"The YAML-based format looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"translation:\n    format: 0.4 # Translation file format (version)\n    language: bushelscript_en # Language the translation is written for\n    mappings: # Contains all the actual translations\n        type: # Any role (type, command, parameter, proprety, \u2026)\n            ae4: # Any semantic URI scheme\n                cobj: item # URI data is key, name is value\n                pcls: type\n                capp: # Use a sequence for synonyms:\n                    - app\n                    - application\n                # \u2026\n        command:\n            ae8:\n                aevtquit: quit\n                miscactv: activate\n            id: # The id scheme has optional special syntax:\n                # Terms can be nested in dictionaries\u2026\n                Math: # \u2026by nesting mappings\n                    abs:\n                        - abs\n                        - absolute value\n        parameter:\n            ae12:\n                coresetddata: to\n                aevtodocstxt: search text\n            id:\n                Math:\n                    abs:\n                        .direct: of\n                Sequence:\n                    add:\n                        .target: to\n                    join:\n                        with:\n                            - with\n                            - by\n")))}u.isMDXComponent=!0}}]);