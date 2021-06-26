(self.webpackChunk=self.webpackChunk||[]).push([[309],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>c,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),f=n,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return r?a.createElement(m,i(i({ref:t},c),{},{components:r})):a.createElement(m,i({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3351:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>l,metadata:()=>s,toc:()=>p,default:()=>u});var a=r(2122),n=r(9756),o=(r(7294),r(3905)),i=["components"],l={title:"1-3: Data Flow",sidebar_label:"Part 3: Data Flow"},s={unversionedId:"ref/data-flow",id:"ref/data-flow",isDocsHomePage:!1,title:"1-3: Data Flow",description:"As any computer program, BushelScript scripts need to shunt data around to get things done.",source:"@site/docs/ref/data-flow.md",sourceDirName:"ref",slug:"/ref/data-flow",permalink:"/help/docs/ref/data-flow",version:"current",lastUpdatedBy:"Ian Gregory",lastUpdatedAt:1624675237,formattedLastUpdatedAt:"6/25/2021",sidebar_label:"Part 3: Data Flow",frontMatter:{title:"1-3: Data Flow",sidebar_label:"Part 3: Data Flow"},sidebar:"ref",previous:{title:"1-2: Basic Syntax",permalink:"/help/docs/ref/basic-syntax"},next:{title:"1-4: Object Types",permalink:"/help/docs/ref/object-types"}},p=[{value:"Anonymous",id:"anonymous",children:[]},{value:"Variables",id:"variables",children:[]}],c={toc:p};function u(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"As any computer program, BushelScript scripts need to shunt data around to get things done."),(0,o.kt)("p",null,"See also: ",(0,o.kt)("a",{parentName:"p",href:"/docs/tutorial/data-flow"},"Quick Tutorial"),"."),(0,o.kt)("h2",{id:"anonymous"},(0,o.kt)("a",{parentName:"h2",href:"/docs/ref/grammar#reference"},"Anonymous")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"that")," keyword refers to the result of the last sequenced expression (i.e., whatever was discarded at the end of the previous line). This is called ",(0,o.kt)("em",{parentName:"p"},"anonymous")," data flow because there is no naming involved. It is somewhat analogous to shell script pipes (",(0,o.kt)("inlineCode",{parentName:"p"},"|"),") or the implicit data flow between actions in Automator or Siri Shortcuts."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"that")," only lacks meaning at the beginning of a ",(0,o.kt)("a",{parentName:"p",href:"functions"},"function"),", where it evaluates to ",(0,o.kt)("a",{parentName:"p",href:"basic-syntax#null-the-absence-of-a-value"},(0,o.kt)("inlineCode",{parentName:"a"},"null"))," because there is no previous expression. Since all language structures are expressions, they always result in a value, which may be referred to by ",(0,o.kt)("inlineCode",{parentName:"p"},"that")," once discarded."),(0,o.kt)("p",null,"Anonymous data flow is encouraged over the use of variables whenever reasonable. But don't feel restricted to it."),(0,o.kt)("h2",{id:"variables"},(0,o.kt)("a",{parentName:"h2",href:"/docs/ref/grammar#definition"},"Variables")),(0,o.kt)("p",null,"Variables are ",(0,o.kt)("a",{parentName:"p",href:"terms"},"terms")," defined using a ",(0,o.kt)("inlineCode",{parentName:"p"},"let")," expression. As all terms, they can shadow other terms, and they may consist of multiple words."))}u.isMDXComponent=!0}}]);