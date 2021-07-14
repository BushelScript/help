(self.webpackChunk=self.webpackChunk||[]).push([[503],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4371:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>l,metadata:()=>s,toc:()=>p,default:()=>m});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),o=["components"],l={title:"1-2: Basic Syntax",sidebar_label:"Step 2: Basic Syntax"},s={unversionedId:"tutorial/basic-syntax",id:"tutorial/basic-syntax",isDocsHomePage:!1,title:"1-2: Basic Syntax",description:"Syntax is the structure of language. Programming languages have stricter syntactic rules than natural languages, and BushelScript is no exception.",source:"@site/docs/tutorial/basic-syntax.md",sourceDirName:"tutorial",slug:"/tutorial/basic-syntax",permalink:"/help/docs/tutorial/basic-syntax",version:"current",lastUpdatedBy:"Ian Gregory",lastUpdatedAt:1626226983,formattedLastUpdatedAt:"7/13/2021",sidebar_label:"Step 2: Basic Syntax",frontMatter:{title:"1-2: Basic Syntax",sidebar_label:"Step 2: Basic Syntax"},sidebar:"tutorial",previous:{title:"1-1: User Interaction",permalink:"/help/docs/tutorial/user-interaction"},next:{title:"1-3: Data Flow",permalink:"/help/docs/tutorial/data-flow"}},p=[{value:"Comments",id:"comments",children:[{value:"Line comments",id:"line-comments",children:[]},{value:"Block comments",id:"block-comments",children:[]}]},{value:"Values",id:"values",children:[{value:"Numbers",id:"numbers",children:[]},{value:"<code>string</code>, a sequence of characters",id:"string-a-sequence-of-characters",children:[]},{value:"<code>boolean</code>, truth and falsity",id:"boolean-truth-and-falsity",children:[]},{value:"<code>missing</code>, the intentional absence of a value",id:"missing-the-intentional-absence-of-a-value",children:[]},{value:"<code>unspecified</code>, the incidental absence of a value",id:"unspecified-the-incidental-absence-of-a-value",children:[]}]},{value:"Commands",id:"commands",children:[{value:"Direct object arguments",id:"direct-object-arguments",children:[]},{value:"Named arguments",id:"named-arguments",children:[]}]},{value:"Operators",id:"operators",children:[]}],c={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Syntax is the structure of language. Programming languages have stricter syntactic rules than natural languages, and BushelScript is no exception."),(0,i.kt)("p",null,"See also: ",(0,i.kt)("a",{parentName:"p",href:"/docs/ref/basic-syntax"},"Language Reference"),"."),(0,i.kt)("h2",{id:"comments"},"Comments"),(0,i.kt)("p",null,"You can write ",(0,i.kt)("em",{parentName:"p"},"comments")," to help people understand your code. Use them to explain the behavior, purpose or design of complicated code, to help others adapt your code to their needs, or even to share ASCII art (please don't)."),(0,i.kt)("p",null,"Your programs will work just fine without any comments. Then again, a car would work just fine without an instruction manual. What and why you comment is really up to you."),(0,i.kt)("p",null,"There are two kinds of comments:"),(0,i.kt)("h3",{id:"line-comments"},"Line comments"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Line comments")," start with two hypens ",(0,i.kt)("inlineCode",{parentName:"p"},"--")," and continue to the end of the current line. They never extend over multiple lines."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"-- I'm a line comment\n-- You can write whatever you like here.\n-- The computer doesn't care!\n-- Though other humans probably will \ud83d\ude09\n\nthis is not a line comment and will probably cause an error\n\n-- An empty line comment:\n--\n")),(0,i.kt)("h3",{id:"block-comments"},"Block comments"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Block comments")," start with two hyphens and an opening parenthesis ",(0,i.kt)("inlineCode",{parentName:"p"},"--("),", and they continue across any number of lines until a closing parenthesis and two more hyphens are reached ",(0,i.kt)("inlineCode",{parentName:"p"},")--"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"--( Single-line block comments are possible )--\n--( Multi-line\n    block comments\n    are too )--\n--(\n    Whatever style\n    \n    floats your boat.\n)--\n\n")),(0,i.kt)("h2",{id:"values"},"Values"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Values")," are abstract objects, like numbers. Every value belongs to a type class, discussed later in ",(0,i.kt)("a",{parentName:"p",href:"/docs/tutorial/object-types"},"1-4: Object Types"),"."),(0,i.kt)("h3",{id:"numbers"},"Numbers"),(0,i.kt)("p",null,"Type a number to produce a number value. Whole numbers are of type ",(0,i.kt)("inlineCode",{parentName:"p"},"integer"),", while numbers with fractional components are of type ",(0,i.kt)("inlineCode",{parentName:"p"},"real"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"123 -- integer\n1.23 -- real\n")),(0,i.kt)("h3",{id:"string-a-sequence-of-characters"},(0,i.kt)("inlineCode",{parentName:"h3"},"string"),", a sequence of characters"),(0,i.kt)("p",null,"Type anything between quotation marks to produce a ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),", which is a fancy name for a glob of text, like a character, word, sentence, or doctoral dissertation."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'-- Note that each of these lines produces a string that is\n-- immediately discarded; none of this actually does\n-- much of anything.\n-- That is to say, don\'t write real programs like this.\n\n"a"\n"string"\n"is composed of one or more letters, or digits 1234567890, or"\n"anything, really."\n\n"To include a quotation mark character in a string, type"\n"a backslash like this \\" to \\"escape\\" it."\n"Strings can also be empty, like this next one:"\n""\n')),(0,i.kt)("h3",{id:"boolean-truth-and-falsity"},(0,i.kt)("inlineCode",{parentName:"h3"},"boolean"),", truth and falsity"),(0,i.kt)("p",null,"Type ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," to produce a value representing truth and ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," for a value representing falsity."),(0,i.kt)("p",null,"These ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),' values are more typically produced when ask a yes-or-no question. For example, "1 is a number" is, under usual definitions, indisputably true; while "the character count of the most recent tweet on Twitter is 49" may or may not be true, depending on the state of the world when we ask the question.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"true -- boolean\nfalse -- boolean\n1 = 2 -- boolean (more on this below)\n")),(0,i.kt)("h3",{id:"missing-the-intentional-absence-of-a-value"},(0,i.kt)("inlineCode",{parentName:"h3"},"missing"),", the intentional absence of a value"),(0,i.kt)("p",null,"You can type ",(0,i.kt)("inlineCode",{parentName:"p"},"missing")," to get a value that represents the lack of an otherwise meaningful value. For instance, if I asked \"what is your great niece's nephew's birthday?\", and you replied that that person doesn't exist, we could represent this formally as ",(0,i.kt)("inlineCode",{parentName:"p"},"missing"),"\u2014a placeholder for the lack of a birthday value."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"missing\n")),(0,i.kt)("h3",{id:"unspecified-the-incidental-absence-of-a-value"},(0,i.kt)("inlineCode",{parentName:"h3"},"unspecified"),", the incidental absence of a value"),(0,i.kt)("p",null,"Finally, you can type ",(0,i.kt)("inlineCode",{parentName:"p"},"unspecified"),' to get a value that represents the "incidental" lack of a value. ',(0,i.kt)("inlineCode",{parentName:"p"},"unspecified")," is often generated by other language constructs. In particular, it is the default value for variables. If you're familiar with JavaScript, ",(0,i.kt)("inlineCode",{parentName:"p"},"unspecified")," is essentially ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"unspecified\n\nlet my variable\nmy variable --\x3e unspecified\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Aside (advanced)"),': As an example of why distinguishing between "intentional" and "incidental" lack-of-value is useful, consider a function that makes a REST API request with parameters. Users should be able to specify a "null" JSON value for some parameters, but omit the others entirely from the request. The function can distinguish these situations by encoding JSON "null" if the value is ',(0,i.kt)("inlineCode",{parentName:"p"},"missing"),", and omitting a parameter entirely if the value is ",(0,i.kt)("inlineCode",{parentName:"p"},"unspecified"),". With this design, an invocation of the command that doesn't name every parameter will have those parameters omitted from the API call."),(0,i.kt)("h2",{id:"commands"},"Commands"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Commands")," are actions like ",(0,i.kt)("inlineCode",{parentName:"p"},"add"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"remove"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"search"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"send"),". They can take data as input and produce data as output, and they may have additional effects."),(0,i.kt)("p",null,"We can ",(0,i.kt)("em",{parentName:"p"},"invoke")," (run) a command by typing its name. For example, ",(0,i.kt)("inlineCode",{parentName:"p"},"alert")," is the built-in command that we used in ",(0,i.kt)("a",{parentName:"p",href:"/docs/tutorial/user-interaction"},"Step 1: User Interaction"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"alert\n")),(0,i.kt)("h3",{id:"direct-object-arguments"},"Direct object arguments"),(0,i.kt)("p",null,"We didn't give ",(0,i.kt)("inlineCode",{parentName:"p"},"alert")," anything to display. We can tell it to show a ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'alert "some message"\n')),(0,i.kt)("p",null,"The input values we give to a command are called the ",(0,i.kt)("em",{parentName:"p"},"arguments"),", and this special argument, the ",(0,i.kt)("em",{parentName:"p"},"direct argument"),", comes right after the name of the command. Another example is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cos 3.14159265\n")),(0,i.kt)("p",null,"Here, the ",(0,i.kt)("inlineCode",{parentName:"p"},"real")," approximation of \u03c0 is the direct argument. Note that we don't ",(0,i.kt)("em",{parentName:"p"},"have")," to provide a direct argument."),(0,i.kt)("h3",{id:"named-arguments"},"Named arguments"),(0,i.kt)("p",null,"We can provide additional input as ",(0,i.kt)("em",{parentName:"p"},"named arguments"),". To do this, we type the name of a parameter that the command defines, and follow that with the value. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'send "Hey!" to "ian@example.com"\n')),(0,i.kt)("p",null,"This invocation provides two arguments: The direct argument ",(0,i.kt)("inlineCode",{parentName:"p"},'"Hey!"'),", and the named argument ",(0,i.kt)("inlineCode",{parentName:"p"},'"ian@example.com"')," associated with the parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"to"),". If the command doesn't require it, we can also provide only named arguments:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'download from "https://example.com/"\n')),(0,i.kt)("p",null,"Finally, we can specify multiple named arguments, as many as the command supports:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'login "ian@example.com" to "example.com" password "password123"\n')),(0,i.kt)("h2",{id:"operators"},"Operators"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Operators")," are special commands that are called differently and have no side-effects. Common math operators like ",(0,i.kt)("inlineCode",{parentName:"p"},"+")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"*")," (multiply) are built in."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"1 + 2\nnot (true and false)\n")),(0,i.kt)("p",null,"For a full list, consult the ",(0,i.kt)("a",{parentName:"p",href:"/docs/ref/basic-syntax#operators"},"Language Reference"),"."))}m.isMDXComponent=!0}}]);