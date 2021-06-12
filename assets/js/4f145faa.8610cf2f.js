(self.webpackChunk=self.webpackChunk||[]).push([[348],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>c,kt:()=>f});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=r,u=d["".concat(p,".").concat(f)]||d[f]||m[f]||a;return n?i.createElement(u,o(o({ref:t},c),{},{components:n})):i.createElement(u,o({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6974:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>l,metadata:()=>p,toc:()=>s,default:()=>m});var i=n(2122),r=n(9756),a=(n(7294),n(3905)),o=["components"],l={title:"3-1: Specifiers",sidebar_label:"Part 1: Specifiers"},p={unversionedId:"ref/specifiers",id:"ref/specifiers",isDocsHomePage:!1,title:"3-1: Specifiers",description:"A specifier is a composable query of object relations.",source:"@site/docs/ref/specifiers.md",sourceDirName:"ref",slug:"/ref/specifiers",permalink:"/help/docs/ref/specifiers",version:"current",lastUpdatedBy:"Ian Gregory",lastUpdatedAt:1623479990,formattedLastUpdatedAt:"6/12/2021",sidebar_label:"Part 1: Specifiers",frontMatter:{title:"3-1: Specifiers",sidebar_label:"Part 1: Specifiers"},sidebar:"ref",previous:{title:"2-2: Dictionaries",permalink:"/help/docs/ref/dictionaries"},next:{title:"3-2: Resources",permalink:"/help/docs/ref/resources"}},s=[{value:"Relations",id:"relations",children:[]},{value:"Chaining",id:"chaining",children:[]},{value:"Element relations",id:"element-relations",children:[{value:"Element specifiers",id:"element-specifiers",children:[]}]},{value:"Indexing forms",id:"indexing-forms",children:[{value:"Simple",id:"simple",children:[]},{value:"Name",id:"name",children:[]},{value:"Index",id:"index",children:[]},{value:"ID",id:"id",children:[]},{value:"Absolute positioning",id:"absolute-positioning",children:[]},{value:"Relative positioning",id:"relative-positioning",children:[]},{value:"All",id:"all",children:[]},{value:"Range",id:"range",children:[]},{value:"Filter",id:"filter",children:[]}]},{value:"Property relations",id:"property-relations",children:[{value:"Property specifiers",id:"property-specifiers",children:[]}]},{value:"Evaluation",id:"evaluation",children:[{value:"Implicit evaluation",id:"implicit-evaluation",children:[]},{value:"Explicit evaluation",id:"explicit-evaluation",children:[]},{value:"Reference expressions",id:"reference-expressions",children:[]}]}],c={toc:s};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A ",(0,a.kt)("em",{parentName:"p"},"specifier")," is a composable query of object relations."),(0,a.kt)("p",null,"See also: ",(0,a.kt)("a",{parentName:"p",href:"../tutorial/specifiers"},"Quick Tutorial"),"."),(0,a.kt)("h2",{id:"relations"},"Relations"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Relations")," ",(0,a.kt)("em",{parentName:"p"},"relate")," objects to each other, connecting them through an object graph somewhat analogous to a ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Relational_database"},"relational database"),"."),(0,a.kt)("p",null,"Relations are not themselves syntactic elements, but exist at runtime between objects and are described by specifiers."),(0,a.kt)("h2",{id:"chaining"},(0,a.kt)("a",{parentName:"h2",href:"grammar#specifier"},"Chaining")),(0,a.kt)("p",null,"A specifier ",(0,a.kt)("em",{parentName:"p"},"chains")," together descriptions of relations, starting from a concrete ",(0,a.kt)("em",{parentName:"p"},"root object"),"."),(0,a.kt)("p",null,"For example, a specifier might refer to the ",(0,a.kt)("inlineCode",{parentName:"p"},"length")," property of its root object, or it might refer to an element (of an element) of the root."),(0,a.kt)("h2",{id:"element-relations"},"Element relations"),(0,a.kt)("p",null,"Objects are often organized into a hierarchical tree structure through ",(0,a.kt)("em",{parentName:"p"},"element relations"),". An object is an ",(0,a.kt)("em",{parentName:"p"},"element")," of another when it is hierarchically subordinate to it in such a structure."),(0,a.kt)("p",null,"An element relation exists based on an element type, an indexing form, and zero to two ",(0,a.kt)("em",{parentName:"p"},"identifying objects")," (depending on the indexing form)."),(0,a.kt)("h3",{id:"element-specifiers"},(0,a.kt)("a",{parentName:"h3",href:"grammar#specifier"},"Element specifiers")),(0,a.kt)("p",null,"An ",(0,a.kt)("em",{parentName:"p"},"element specifier")," describes an element relation. The syntax varies by indexing form, but always includes a ",(0,a.kt)("a",{parentName:"p",href:"terms#term-roles"},"type term"),". Reciprocally, the syntactic form used determines the specifier's indexing form."),(0,a.kt)("h2",{id:"indexing-forms"},"Indexing forms"),(0,a.kt)("p",null,"Each element relation has an ",(0,a.kt)("em",{parentName:"p"},"indexing form")," that specifies how it selects objects."),(0,a.kt)("h3",{id:"simple"},(0,a.kt)("a",{parentName:"h3",href:"grammar#specifier"},"Simple")),(0,a.kt)("p",null,"Simple form is a convenience syntax for either Name or Index form, depending on the type of identifying object used."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Identifying object"),": A ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"integer")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"real"),". ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," makes a Simple specifier act like a Name specifier; ",(0,a.kt)("inlineCode",{parentName:"p"},"integer")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"real")," make a Simple specifier act like an Index specifier. An object that is not of one of these types produces a runtime error."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'document "Untitled"\nwindow 1\n')),(0,a.kt)("h3",{id:"name"},(0,a.kt)("a",{parentName:"h3",href:"grammar#specifier"},"Name")),(0,a.kt)("p",null,"Name form specifies a single element according to the value of its ",(0,a.kt)("inlineCode",{parentName:"p"},"ae4:pnam")," (",(0,a.kt)("inlineCode",{parentName:"p"},"name"),") property."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Identifying object"),": A ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," object that a ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," property must match."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'document named "Untitled"\n')),(0,a.kt)("h3",{id:"index"},(0,a.kt)("a",{parentName:"h3",href:"grammar#specifier"},"Index")),(0,a.kt)("p",null,"Index form specifies a single element according to the value of its ",(0,a.kt)("inlineCode",{parentName:"p"},"ae4:pidx")," (",(0,a.kt)("inlineCode",{parentName:"p"},"index"),") property."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Identifying object"),": An ",(0,a.kt)("inlineCode",{parentName:"p"},"integer")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"real")," object that an ",(0,a.kt)("inlineCode",{parentName:"p"},"index")," property must match."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"window index 1\n")),(0,a.kt)("h3",{id:"id"},(0,a.kt)("a",{parentName:"h3",href:"grammar#specifier"},"ID")),(0,a.kt)("p",null,"ID form specifies a single element according to the value of its ",(0,a.kt)("code",null,"ae4:ID","\xa0","\xa0")," (",(0,a.kt)("inlineCode",{parentName:"p"},"id"),") property."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Identifying object"),": An object that an ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," property must match."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'-- Suppose the document\'s identifying object is the integer 123.\ndocument named "Untitled" --\x3e document id 123\nlet docid be id of that --\x3e 123\n\ndocument id docid --\x3e document id 123\n')),(0,a.kt)("h3",{id:"absolute-positioning"},(0,a.kt)("a",{parentName:"h3",href:"grammar#specifier"},"Absolute positioning")),(0,a.kt)("p",null,"Absolute Positioning form specifies a single element according to its ordinal position within a container."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"No identifying objects"),", but the selection varies based on the positioning used."),(0,a.kt)("p",null,"The choice of ",(0,a.kt)("inlineCode",{parentName:"p"},"first"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"middle"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"last")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"some")," affects the meaning of the specifier:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"first")," selects the item ordered first in its container; typically equivalent to ",(0,a.kt)("inlineCode",{parentName:"li"},"<type> index 1"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"middle")," selects the item ordered at the center of its container (the median item), preferring the one ordered first when a two-way tie occurs. For a sequence with a ",(0,a.kt)("inlineCode",{parentName:"li"},"length")," property, equivalent to ",(0,a.kt)("inlineCode",{parentName:"li"},"<type> index (floor (length / 2))"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"last")," selects the item ordered last in its container; for a sequence with a ",(0,a.kt)("inlineCode",{parentName:"li"},"length")," property, equivalent to ",(0,a.kt)("inlineCode",{parentName:"li"},"<type> index (length)"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"some")," selects a random item from the container. No, seriously. Listen, this was Apple's idea, not mine \ud83d\udc40.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"first window\nmiddle window\nlast window\nsome window\n")),(0,a.kt)("h3",{id:"relative-positioning"},(0,a.kt)("a",{parentName:"h3",href:"grammar#specifier"},"Relative positioning")),(0,a.kt)("p",null,"Relative Positioning form specifies a single element according to its ordinal position relative to another element in the same container."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"No identifying objects"),", but the selection varies based on the positioning used."),(0,a.kt)("p",null,"The choice of ",(0,a.kt)("inlineCode",{parentName:"p"},"before")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"after")," affects the meaning of the specifier:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"before")," selects the item ordered immediately before the reference element."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"after")," selects the item ordered immediately after the reference element.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note")," that the reference element is not an identifying object, but is rather the immediate parent of the specifier."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"window before last window\nwindow after that --\x3e last window\n")),(0,a.kt)("p",null,"To form a Relative Positioning specifier under the current default target, ",(0,a.kt)("inlineCode",{parentName:"p"},"it")," must be used, since the syntax requires explicit mention of the parent after ",(0,a.kt)("inlineCode",{parentName:"p"},"before"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"after"),"; i.e., ",(0,a.kt)("inlineCode",{parentName:"p"},"window after")," is not a syntactically valid specifier:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"window after it\n")),(0,a.kt)("h3",{id:"all"},(0,a.kt)("a",{parentName:"h3",href:"grammar#specifier"},"All")),(0,a.kt)("p",null,"All form specifies every element in a container."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"No identifying objects"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"every window\nall windows\nwindows\n")),(0,a.kt)("h3",{id:"range"},(0,a.kt)("a",{parentName:"h3",href:"grammar#specifier"},"Range")),(0,a.kt)("p",null,"Range form specifies elements within a range of values in a container. The test used to determine whether an object is ",(0,a.kt)("em",{parentName:"p"},"in the range")," depends on the element and container types, and possibly the type of the identifying objects used."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Identifying objects"),": One representing the lower bound, and another representing the upper bound."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"paragraph 1 thru 2\nwindows 2 through -1\n")),(0,a.kt)("h3",{id:"filter"},(0,a.kt)("a",{parentName:"h3",href:"grammar#specifier"},"Filter")),(0,a.kt)("p",null,"Filter form specifies elements that pass a certain custom test."),(0,a.kt)("p",null,"A Filter test is predicated on comparions between test specimen-rooted specifiers and other objects. Logical operations can compose these tests to form new tests."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"No identifying objects"),", but a special test predicate expression is used instead."),(0,a.kt)("p",null,"The test expression should usually consist of binary comparison or logical ",(0,a.kt)("a",{parentName:"p",href:"basic-syntax#binary-operators"},"operations"),"."),(0,a.kt)("h4",{id:"specimen-specifiers"},"Specimen specifiers"),(0,a.kt)("p",null,"Syntactically unrooted specifiers in the test expression are implicitly rooted in the test specimen object. Such specifiers are called ",(0,a.kt)("em",{parentName:"p"},"specimen specifiers"),", and are reevaluated for each object tested."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'windows where name contains "Google"\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"name")," in this context is a specimen specifier."),(0,a.kt)("h2",{id:"property-relations"},"Property relations"),(0,a.kt)("p",null,"A ",(0,a.kt)("em",{parentName:"p"},"property relation")," relates a ",(0,a.kt)("em",{parentName:"p"},"host object")," to a ",(0,a.kt)("em",{parentName:"p"},"value object")," via a ",(0,a.kt)("a",{parentName:"p",href:"terms#term-roles"},"property term"),". While element relations are one-to-many, property relations are one-to-one. Property relations often describe the host object with number or string values, although they can also act as references to other complex objects."),(0,a.kt)("h3",{id:"property-specifiers"},(0,a.kt)("a",{parentName:"h3",href:"grammar#specifier"},"Property specifiers")),(0,a.kt)("p",null,"A ",(0,a.kt)("em",{parentName:"p"},"property specifier")," describes a property relation, and is created by simply naming a property term."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"name\ncurrent tab\n")),(0,a.kt)("h2",{id:"evaluation"},"Evaluation"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Evaluating")," a specifier follows its chain of relational queries to arrive at a value or storage location."),(0,a.kt)("h3",{id:"implicit-evaluation"},"Implicit evaluation"),(0,a.kt)("p",null,"Specifiers are ",(0,a.kt)("em",{parentName:"p"},"implicitly evaluated")," in most expression contexts. This means that naming a specifier will, by default, result in the specifier's current value rather than a static, unevaluated ",(0,a.kt)("inlineCode",{parentName:"p"},"specifier")," object."),(0,a.kt)("p",null,"The following are all the contexts where specifiers are ",(0,a.kt)("em",{parentName:"p"},"not")," implicitly evaluated:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The argument of a reference expression (see below); e.g., ",(0,a.kt)("inlineCode",{parentName:"li"},"ref window 1"),"."),(0,a.kt)("li",{parentName:"ul"},"The target expression of a ",(0,a.kt)("inlineCode",{parentName:"li"},"tell")," expression; e.g., ",(0,a.kt)("inlineCode",{parentName:"li"},"tell window 1"),"."),(0,a.kt)("li",{parentName:"ul"},"Key expressions in a record; e.g., ",(0,a.kt)("inlineCode",{parentName:"li"},'{name: "abc"}'),"."),(0,a.kt)("li",{parentName:"ul"},"The destination expression of a ",(0,a.kt)("inlineCode",{parentName:"li"},"set")," expression; e.g., ",(0,a.kt)("inlineCode",{parentName:"li"},'set URL to "https://google.com/"'),"."),(0,a.kt)("li",{parentName:"ul"},"The parent expression of a specifier phrase; e.g., ",(0,a.kt)("inlineCode",{parentName:"li"},"name of window 1")," (the final specifier will be evaluated, but ",(0,a.kt)("inlineCode",{parentName:"li"},"window 1")," will not)."),(0,a.kt)("li",{parentName:"ul"},"Filter test expressions; e.g., ",(0,a.kt)("inlineCode",{parentName:"li"},'windows where name is "Untitled"')," (the final specifier will be evaluated, but ",(0,a.kt)("inlineCode",{parentName:"li"},"name")," will not).")),(0,a.kt)("h3",{id:"explicit-evaluation"},(0,a.kt)("a",{parentName:"h3",href:"grammar#getset"},"Explicit evaluation")),(0,a.kt)("p",null,"A specifier can be ",(0,a.kt)("em",{parentName:"p"},"explicitly evaluated")," with a ",(0,a.kt)("inlineCode",{parentName:"p"},"get")," expression. This always results in evaluation, even in contexts where implicit evaluation is disabled."),(0,a.kt)("h3",{id:"reference-expressions"},(0,a.kt)("a",{parentName:"h3",href:"grammar#getset"},"Reference expressions")),(0,a.kt)("p",null,"Implicit evaluation can be contextually disabled with a ",(0,a.kt)("inlineCode",{parentName:"p"},"ref")," expression. This always creates a ",(0,a.kt)("inlineCode",{parentName:"p"},"specifier")," object, which can then be sent in ",(0,a.kt)("a",{parentName:"p",href:"resources#remote-calls"},"remote calls")," or evaluated later."))}m.isMDXComponent=!0}}]);