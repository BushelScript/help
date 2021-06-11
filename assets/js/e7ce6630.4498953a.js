/*! For license information please see e7ce6630.4498953a.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([[668],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=s(n),d=o,y=f["".concat(c,".").concat(d)]||f[d]||p[d]||i;return n?r.createElement(y,a(a({ref:t},u),{},{components:n})):r.createElement(y,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9615:(e,t,n)=>{"use strict";n.r(t),n.d(t,{DocSectionLink:()=>S,default:()=>D,fontSize:()=>O,frontMatter:()=>k,metadata:()=>x,toc:()=>w});var r=n(2122),o=n(9756),i=n(7294),a=n(3905),l=n(4184),c=n.n(l),s=i.createContext({});s.Consumer,s.Provider;function u(e,t){var n=(0,i.useContext)(s);return e||n[t]||t}const p=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!=typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];e.apply(this,r),t.apply(this,r)}}),null)};var f=["as","disabled","onKeyDown"];function d(e){return!e||"#"===e.trim()}var y=i.forwardRef((function(e,t){var n=e.as,a=void 0===n?"a":n,l=e.disabled,c=e.onKeyDown,s=(0,o.Z)(e,f),u=function(e){var t=s.href,n=s.onClick;(l||d(t))&&e.preventDefault(),l?e.stopPropagation():n&&n(e)};return d(s.href)&&(s.role=s.role||"button",s.href=s.href||"#"),l&&(s.tabIndex=-1,s["aria-disabled"]=!0),i.createElement(a,(0,r.Z)({ref:t},s,{onClick:u,onKeyDown:p((function(e){" "===e.key&&(e.preventDefault(),u(e))}),c)}))}));y.displayName="SafeAnchor";const m=y;var v=["bsPrefix","variant","size","active","className","block","type","as"],g=i.forwardRef((function(e,t){var n=e.bsPrefix,a=e.variant,l=e.size,s=e.active,p=e.className,f=e.block,d=e.type,y=e.as,g=(0,o.Z)(e,v),b=u(n,"btn"),h=c()(p,b,s&&"active",a&&b+"-"+a,f&&b+"-block",l&&b+"-"+l);if(g.href)return i.createElement(m,(0,r.Z)({},g,{as:y,ref:t,className:c()(h,g.disabled&&"disabled")}));t&&(g.ref=t),d?g.type=d:y||(g.type="button");var k=y||"button";return i.createElement(k,(0,r.Z)({},g,{className:h}))}));g.displayName="Button",g.defaultProps={variant:"primary",active:!1,disabled:!1};const b=g;var h=["components"],k={title:"BushelScript Help"},x={type:"mdx",permalink:"/help/",source:"@site/src/pages/index.mdx"},w=[],O="20px",S=function(e){return(0,a.kt)("div",{style:{display:"flex",flexFlow:"row wrap",justifyContent:"center",alignItems:"flex-end",margin:"10px",marginTop:"0"}},(0,a.kt)(b,{style:{marginRight:"10px"},variant:"outline-primary",href:e.to,mdxType:"Button"},e.title),(0,a.kt)("p",{style:{lineHeight:"0.5em"}},e.description))},j={toc:w,fontSize:O,DocSectionLink:S};function D(e){var t=e.components,n=(0,o.Z)(e,h);return(0,a.kt)("wrapper",(0,r.Z)({},j,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("h1",null,"BushelScript Help"),(0,a.kt)("p",{style:{fontSize:O}},"Select a section to get started:")),(0,a.kt)("div",{style:{display:"flex",flexFlow:"column wrap",justifyContent:"center",alignItems:"flex-start"}},(0,a.kt)(S,{to:"docs/tutorial",title:"Quick Tutorial",description:"Guide designed to teach the language quickly and gloss over some details",mdxType:"DocSectionLink"}),(0,a.kt)(S,{to:"docs/ref",title:"Reference",description:"Detailed language and runtime documentation",mdxType:"DocSectionLink"}),(0,a.kt)(S,{to:"docs/integration",title:"Integration",description:"Additional guides on integrating BushelScript with existing tools",mdxType:"DocSectionLink"}),(0,a.kt)(S,{to:"docs/internal",title:"Internals",description:"Documentation for file formats, the language module API, etc.",mdxType:"DocSectionLink"})),(0,a.kt)("br",null),(0,a.kt)("p",{style:{textAlign:"center",fontSize:O}},"Additional resources are linked in the footer."))}D.isMDXComponent=!0},4184:(e,t)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var a=o.apply(null,n);a&&e.push(a)}}else if("object"===i)if(n.toString===Object.prototype.toString)for(var l in n)r.call(n,l)&&n[l]&&e.push(l);else e.push(n.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()}}]);