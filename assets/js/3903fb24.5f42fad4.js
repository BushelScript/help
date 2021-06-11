(self.webpackChunk=self.webpackChunk||[]).push([[695],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9514:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>l,metadata:()=>s,toc:()=>c,default:()=>d});var a=n(2122),i=n(9756),r=(n(7294),n(3905)),o=["components"],l={title:"1-1: User Interaction",sidebar_label:"Part 1: User Interaction"},s={unversionedId:"ref/user-interaction",id:"ref/user-interaction",isDocsHomePage:!1,title:"1-1: User Interaction",description:"BushelScript supports custom-built GUI commands as its primary mode of user interaction. Limited CLI interactions are also supported. Speech-based interactions are planned but have low priority.",source:"@site/docs/ref/user-interaction.md",sourceDirName:"ref",slug:"/ref/user-interaction",permalink:"/help/docs/ref/user-interaction",version:"current",lastUpdatedBy:"Ian Gregory",lastUpdatedAt:1623393694,formattedLastUpdatedAt:"6/11/2021",sidebar_label:"Part 1: User Interaction",frontMatter:{title:"1-1: User Interaction",sidebar_label:"Part 1: User Interaction"},sidebar:"ref",previous:{title:"Language Reference \u2013 Introduction",permalink:"/help/docs/ref"},next:{title:"1-2: Basic Syntax",permalink:"/help/docs/ref/basic-syntax"}},c=[{value:"GUI commands",id:"gui-commands",children:[{value:"notification",id:"notification",children:[]},{value:"alert",id:"alert",children:[]},{value:"choose from",id:"choose-from",children:[]},{value:"ask",id:"ask",children:[]}]}],p={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"BushelScript supports custom-built GUI commands as its primary mode of user interaction. Limited CLI interactions are also supported. Speech-based interactions are planned but have low priority."),(0,r.kt)("p",null,"See also: ",(0,r.kt)("a",{parentName:"p",href:"../tutorial/user-interaction"},"Quick Tutorial"),"."),(0,r.kt)("h2",{id:"gui-commands"},"GUI commands"),(0,r.kt)("p",null,"Interaction with the user is done primarily through various GUI commands, heavily inspired by those made available by AppleScript's StandardAdditions module."),(0,r.kt)("p",null,'In BushelScript, GUI commands are routed through a background application called "BushelGUIHost". This alleviates many of the inconveniences and security shortcomings of using the StandardAdditions module.'),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"notification"},"notification"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"notification [<message>]\n  [title <title>]\n  [subtitle <subtitle>]\n  [sound <sound name>]\n")),(0,r.kt)("p",null,"Presents a banner-style notification."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"message: The informative message text. Smallest and lowest down, can have the most detail. The exception is if there is no ",(0,r.kt)("inlineCode",{parentName:"li"},"title")," to display (i.e., none is specified and the calling script has no name); if so, then this text appears as the title instead."),(0,r.kt)("li",{parentName:"ul"},"title: The title text. Largest and highest up, should provide appropriate context for the notification. Defaults to the name of the script, if any."),(0,r.kt)("li",{parentName:"ul"},"subtitle: The subtitle text. Subordinate to the title, and if present, should provide more specific or elaborated context for the notification. Often not used."),(0,r.kt)("li",{parentName:"ul"},"sound name: The name of the system sound to play when the notification is delivered.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"alert"},"alert"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"alert [<heading>]\n  [message <message>]\n  [title <title>]\n")),(0,r.kt)("p",null,"Presents an informative message box."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"heading: The alert heading text. Displayed in bold font, should clearly indicate what this alert is for."),(0,r.kt)("li",{parentName:"ul"},"message: The alert message text. Displayed in normal font subordinate to the heading; can be used to explain why the heading is so, what might be done about it, etc."),(0,r.kt)("li",{parentName:"ul"},"title: The title of the alert window. Defaults to the name of the script, if any.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"choose-from"},"choose from"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"choose from [ [list] <list> ]\n  [prompt <prompt>]\n  [title <title>]\n")),(0,r.kt)("p",null,"Presents a list of choices and asks the user to choose from them."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"list: The choices. Should be a ",(0,r.kt)("inlineCode",{parentName:"li"},"list"),". If a ",(0,r.kt)("inlineCode",{parentName:"li"},"list"),", each item is coerced to a ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," and displayed as a choice. Otherwise, the passed object is treated as a single atomic choice: coerced to a ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," and displayed as the single available item."),(0,r.kt)("li",{parentName:"ul"},"prompt: The text displayed above the list of choices. Should explain what choice is being made and, if applicable, why."),(0,r.kt)("li",{parentName:"ul"},"title: The title of the dialog window. Defaults to the name of the script, if any.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"ask"},"ask"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ask [ [prompt] <prompt> ]\n  [ [for | as] <type> ]\n  [title <title>]\n")),(0,r.kt)("p",null,"Prompts the user to enter data."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"prompt: The text displayed above the input area. Should explain what data is to be entered and, if applicable, why. Defaults to the generic ",(0,r.kt)("inlineCode",{parentName:"li"},'"Please enter a value:"'),"."),(0,r.kt)("li",{parentName:"ul"},"type: The type of data requested as a ",(0,r.kt)("inlineCode",{parentName:"li"},"type")," object. If absent or not a type object, defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),"."),(0,r.kt)("li",{parentName:"ul"},"title: The title of the dialog window. Defaults to the name of the script, if any.")))}d.isMDXComponent=!0}}]);