(self.webpackChunk=self.webpackChunk||[]).push([[611],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),f=o,m=u["".concat(p,".").concat(f)]||u[f]||d[f]||l;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var s=2;s<l;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8793:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>i,metadata:()=>p,toc:()=>s,default:()=>d});var r=n(2122),o=n(9756),l=(n(7294),n(3905)),a=["components"],i={title:"5-2: Control Flow",sidebar_label:"Part 2: Control Flow"},p={unversionedId:"ref/control-flow",id:"ref/control-flow",isDocsHomePage:!1,title:"5-2: Control Flow",description:"See also: Quick Tutorial.",source:"@site/docs/ref/control-flow.md",sourceDirName:"ref",slug:"/ref/control-flow",permalink:"/help/docs/ref/control-flow",version:"current",lastUpdatedBy:"Ian Gregory",lastUpdatedAt:1623393694,formattedLastUpdatedAt:"6/11/2021",sidebar_label:"Part 2: Control Flow",frontMatter:{title:"5-2: Control Flow",sidebar_label:"Part 2: Control Flow"},sidebar:"ref",previous:{title:"5-1: Functions",permalink:"/help/docs/ref/functions"},next:{title:"A: Built-in Terms",permalink:"/help/docs/ref/built-in-terms"}},s=[{value:"Conditional expressions",id:"conditional-expressions",children:[]},{value:"Conditional loops",id:"conditional-loops",children:[]},{value:"Constant-bounded loops",id:"constant-bounded-loops",children:[]},{value:"Iterative loops",id:"iterative-loops",children:[]}],c={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"See also: ",(0,l.kt)("a",{parentName:"p",href:"../tutorial/control-flow"},"Quick Tutorial"),"."),(0,l.kt)("h2",{id:"conditional-expressions"},"Conditional expressions"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"<conditional> :: if <expression>\n                 ( then <expression> | [ then ] <sequence> )\n                 [ else ( <expression> | <sequence> ) ]\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'if 1 = 2\n  alert "computer dun broke"\nelse if "hello" contains "p"\n  alert "computer dun broke"\nelse\n  if true then alert "everything is fine"\n  else alert "thisisfine.jpg"\n  alert "You selected" & (if ask for boolean prompt "Yes or no?" then "yes" else "no")\nend\n')),(0,l.kt)("h2",{id:"conditional-loops"},"Conditional loops"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"<conditional-loop> :: repeat while <expression> <sequence>\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"let l be {}\nlet min be minutes of current date\nrepeat while (minutes of (let date be current date)) = min\n  add seconds of date to l\n  delay 1\nend\nl\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"seconds of current date\nrepeat while that = min\n  seconds of current date\nend\n")),(0,l.kt)("h2",{id:"constant-bounded-loops"},"Constant-bounded loops"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"<bounded-loop> :: repeat <expression> times <sequence>\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'let choices be {}\nrepeat 5 times\n  choose from {"Choice A", "Choice B"}\n  add that to choices\nend\nchoices\n')),(0,l.kt)("h2",{id:"iterative-loops"},"Iterative loops"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"<iterative-loop> :: repeat for <term-name> in <expression>\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'use app Finder\nalert "Your currently connected disks are\u2026"\ntell Finder to get name of every disk\nrepeat for disk name in that\n  alert disk name\nend\n')))}d.isMDXComponent=!0}}]);