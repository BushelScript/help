(self.webpackChunk=self.webpackChunk||[]).push([[738],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,h=d["".concat(p,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(h,l(l({ref:t},u),{},{components:n})):r.createElement(h,l({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8105:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>o,metadata:()=>p,toc:()=>s,default:()=>c});var r=n(2122),i=n(9756),a=(n(7294),n(3905)),l=["components"],o={title:"Command line",sidebar_label:"Command line (bushelscript)"},p={unversionedId:"integration/cli",id:"integration/cli",isDocsHomePage:!1,title:"Command line",description:"The bushelscript command-line tool runs BushelScript scripts. To use it, you'll probably want to install it to a location visible to your command-line shell (i.e., in your PATH). You can do this in BushelScript Editor \u2192 Preferences \u2192 Interpreter. The default install path is /usr/local/bin/bushelscript. Please note that if you want to permanently move BushelScript Editor, you'll have to reinstall the tool. (Temporary moves and updates, as well as remounting drives, cause no problems. It's a symbolic link, if you're familiar with those.)",source:"@site/docs/integration/cli.md",sourceDirName:"integration",slug:"/integration/cli",permalink:"/help/docs/integration/cli",version:"current",lastUpdatedBy:"Ian Gregory",lastUpdatedAt:1626220834,formattedLastUpdatedAt:"7/13/2021",sidebar_label:"Command line (bushelscript)",frontMatter:{title:"Command line",sidebar_label:"Command line (bushelscript)"},sidebar:"integration",previous:{title:"Integrating BushelScript \u2013 Introduction",permalink:"/help/docs/integration"},next:{title:"Shortcuts and Automator",permalink:"/help/docs/integration/automator"}},s=[{value:"Run scripts",id:"run-scripts",children:[{value:"From a file",id:"from-a-file",children:[]},{value:"From command line arguments",id:"from-command-line-arguments",children:[]},{value:"Interactive (REPL) mode",id:"interactive-repl-mode",children:[]}]},{value:"Language",id:"language",children:[]},{value:"Output",id:"output",children:[{value:"Result",id:"result",children:[]},{value:"Printing/logging",id:"printinglogging",children:[]}]},{value:"Input",id:"input",children:[{value:"Arguments",id:"arguments",children:[]},{value:"Environment variables",id:"environment-variables",children:[]}]}],u={toc:s};function c(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"bushelscript")," command-line tool runs BushelScript scripts. To use it, you'll probably want to install it to a location visible to your command-line shell (i.e., in your ",(0,a.kt)("inlineCode",{parentName:"p"},"PATH"),"). You can do this in BushelScript Editor \u2192 Preferences \u2192 Interpreter. The default install path is ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/local/bin/bushelscript"),". Please note that if you want to permanently move BushelScript Editor, you'll have to reinstall the tool. (Temporary moves and updates, as well as remounting drives, cause no problems. It's a symbolic link, if you're familiar with those.)"),(0,a.kt)("h2",{id:"run-scripts"},"Run scripts"),(0,a.kt)("p",null,"There are three ways to run scripts with the ",(0,a.kt)("inlineCode",{parentName:"p"},"bushelscript")," command-line tool."),(0,a.kt)("h3",{id:"from-a-file"},"From a file"),(0,a.kt)("p",null,"If you don't specify ",(0,a.kt)("inlineCode",{parentName:"p"},"-e")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"--interactive")," mode, then the first argument to ",(0,a.kt)("inlineCode",{parentName:"p"},"bushelscript")," will be treated as the name of a script file to run."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"bushelscript Script.bushel\nbushelscript ~/Scripts/'Categorize Email.bushel'\n")),(0,a.kt)("p",null,"The special file name ",(0,a.kt)("inlineCode",{parentName:"p"},"-")," means standard input."),(0,a.kt)("h3",{id:"from-command-line-arguments"},"From command line arguments"),(0,a.kt)("p",null,"If you specify one or more ",(0,a.kt)("inlineCode",{parentName:"p"},"-e"),", then the argument after ",(0,a.kt)("inlineCode",{parentName:"p"},"-e")," is treated as a line of BushelScript code. The ",(0,a.kt)("inlineCode",{parentName:"p"},"-e")," lines are stitched into a script and then run."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"bushelscript -e 'require app Safari' -e 'tell Safari to open location \"https://example.com\"'\n")),(0,a.kt)("p",null,"An alternative to this approach is to use a heredoc or similar, if your shell supports it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'bushelscript - <<END\nrequire app Safari\ntell Safari to open location "https://example.com"\nEND\n')),(0,a.kt)("h3",{id:"interactive-repl-mode"},"Interactive (REPL) mode"),(0,a.kt)("p",null,"To get an interactive shell where you can run BushelScript code with immediate feedback, specify ",(0,a.kt)("inlineCode",{parentName:"p"},"--interactive")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"-i"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'$ bushelscript -i\nbushelscript vx.y.z (build 999)\nType :exit or CTRL-D to exit\n1> require app Calendar\napp id "com.apple.iCal"\n2> tell Calendar to make new event at calendar "Calendar" with properties {summary: "Lunch", start date: current date, end date: current date}\nevent id "AE940743-7C71-4383-839E-444322EA9C13" of calendar id "5C076C66-5FBB-4478-9423-170143BA4488" of app id "com.apple.iCal"\n')),(0,a.kt)("h2",{id:"language"},"Language"),(0,a.kt)("p",null,"To specify the language on the command line, use ",(0,a.kt)("inlineCode",{parentName:"p"},"--language")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"-l")," followed by a language ID. If the script's ",(0,a.kt)("inlineCode",{parentName:"p"},"#!")," (hashbang) line contains this ",(0,a.kt)("inlineCode",{parentName:"p"},"-l")," flag, the language ID it specifies is used, and the language given at the command line (if any) is ignored. If neither of these sources dictate which language to use, the default is ",(0,a.kt)("inlineCode",{parentName:"p"},"bushelscript_en")," (BushelScript English)."),(0,a.kt)("h2",{id:"output"},"Output"),(0,a.kt)("h3",{id:"result"},"Result"),(0,a.kt)("p",null,"By default, the tool will print the result of the final executed expression to standard output. To suppress this, specify ",(0,a.kt)("inlineCode",{parentName:"p"},"--no-result")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"-R"),"."),(0,a.kt)("h3",{id:"printinglogging"},"Printing/logging"),(0,a.kt)("p",null,"To print things to standard output, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"log")," command in your script. For now, there's no built-in way to write to other streams (or read text input)."),(0,a.kt)("h2",{id:"input"},"Input"),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("p",null,"All non-option, non-script file arguments passed to ",(0,a.kt)("inlineCode",{parentName:"p"},"bushelscript")," will be available via the built-in ",(0,a.kt)("inlineCode",{parentName:"p"},"arguments")," property."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'$ bushelscript -e \'arguments\' hi there\n{"hi", "there"}\n$ cat Script.bushel\narguments\n$ bushelscript Script.bushel arg1 arg2 arg3\n{"arg1", "arg2", "arg3"}\n')),(0,a.kt)("h3",{id:"environment-variables"},"Environment variables"),(0,a.kt)("p",null,"To read environment variables, get an ",(0,a.kt)("inlineCode",{parentName:"p"},"environment variable")," (aka ",(0,a.kt)("inlineCode",{parentName:"p"},"env var"),") by name and inspect its ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," property."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'$ bushelscript -e \'value of env var "HOME"\'\n"/Users/me"\n')),(0,a.kt)("p",null,"You can also set environment variables through this property."))}c.isMDXComponent=!0}}]);