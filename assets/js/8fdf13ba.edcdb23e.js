"use strict";(self.webpackChunkchisel_lang=self.webpackChunkchisel_lang||[]).push([[1384],{6424:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>T,contentTitle:()=>A,default:()=>S,frontMatter:()=>I,metadata:()=>R,toc:()=>P});var t=s(4848),i=s(8453),n=s(6540),l=s(53),c=s(3104),d=s(6347),a=s(205),o=s(7485),h=s(1682),u=s(9466);function x(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function j(e){const{values:r,children:s}=e;return(0,n.useMemo)((()=>{const e=r??function(e){return x(e).map((e=>{let{props:{value:r,label:s,attributes:t,default:i}}=e;return{value:r,label:s,attributes:t,default:i}}))}(s);return function(e){const r=(0,h.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,s])}function p(e){let{value:r,tabValues:s}=e;return s.some((e=>e.value===r))}function m(e){let{queryString:r=!1,groupId:s}=e;const t=(0,d.W6)(),i=function(e){let{queryString:r=!1,groupId:s}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:r,groupId:s});return[(0,o.aZ)(i),(0,n.useCallback)((e=>{if(!i)return;const r=new URLSearchParams(t.location.search);r.set(i,e),t.replace({...t.location,search:r.toString()})}),[i,t])]}function f(e){const{defaultValue:r,queryString:s=!1,groupId:t}=e,i=j(e),[l,c]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const t=s.find((e=>e.default))??s[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:r,tabValues:i}))),[d,o]=m({queryString:s,groupId:t}),[h,x]=function(e){let{groupId:r}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(r),[t,i]=(0,u.Dv)(s);return[t,(0,n.useCallback)((e=>{s&&i.set(e)}),[s,i])]}({groupId:t}),f=(()=>{const e=d??h;return p({value:e,tabValues:i})?e:null})();(0,a.A)((()=>{f&&c(f)}),[f]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),o(e),x(e)}),[o,x,i]),tabValues:i}}var b=s(2303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:r,block:s,selectedValue:i,selectValue:n,tabValues:d}=e;const a=[],{blockElementScrollPositionUntilNextRender:o}=(0,c.a_)(),h=e=>{const r=e.currentTarget,s=a.indexOf(r),t=d[s].value;t!==i&&(o(r),n(t))},u=e=>{let r=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const s=a.indexOf(e.currentTarget)+1;r=a[s]??a[0];break}case"ArrowLeft":{const s=a.indexOf(e.currentTarget)-1;r=a[s]??a[a.length-1];break}}r?.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":s},r),children:d.map((e=>{let{value:r,label:s,attributes:n}=e;return(0,t.jsx)("li",{role:"tab",tabIndex:i===r?0:-1,"aria-selected":i===r,ref:e=>a.push(e),onKeyDown:u,onClick:h,...n,className:(0,l.A)("tabs__item",v.tabItem,n?.className,{"tabs__item--active":i===r}),children:s??r},r)}))})}function w(e){let{lazy:r,children:s,selectedValue:i}=e;const l=(Array.isArray(s)?s:[s]).filter(Boolean);if(r){const e=l.find((e=>e.props.value===i));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:l.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==i})))})}function C(e){const r=f(e);return(0,t.jsxs)("div",{className:(0,l.A)("tabs-container",v.tabList),children:[(0,t.jsx)(g,{...e,...r}),(0,t.jsx)(w,{...e,...r})]})}function y(e){const r=(0,b.A)();return(0,t.jsx)(C,{...e,children:x(e.children)},String(r))}const V={tabItem:"tabItem_Ymn6"};function k(e){let{children:r,hidden:s,className:i}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,l.A)(V.tabItem,i),hidden:s,children:r})}const I={layout:"docs",title:"Versioning",section:"chisel3"},A="Chisel Project Versioning",R={id:"appendix/versioning",title:"Versioning",description:"Chisel follows Semantic Versioning 2.0.0.",source:"@site/docs/appendix/versioning.md",sourceDirName:"appendix",slug:"/appendix/versioning",permalink:"/docs/appendix/versioning",draft:!1,unlisted:!1,editUrl:"https://github.com/chipsalliance/chisel/tree/main/docs/src/appendix/versioning.md",tags:[],version:"current",frontMatter:{layout:"docs",title:"Versioning",section:"chisel3"},sidebar:"chiselSidebar",previous:{title:"Upgrading From Scala 2.11",permalink:"/docs/appendix/upgrading-from-scala-2-11"},next:{title:"Developer Documentation",permalink:"/docs/developers"}},T={},P=[{value:"Firtool Version",id:"firtool-version",level:2},{value:"Old Chisel versions (3.0 - 3.6)",id:"old-chisel-versions-30---36",level:2},{value:"Compatible Versions (Chisel 3.0 - 3.6)",id:"compatible-versions-chisel-30---36",level:3}];function M(e){const r={a:"a",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"chisel-project-versioning",children:"Chisel Project Versioning"}),"\n",(0,t.jsxs)(r.p,{children:["Chisel follows ",(0,t.jsx)(r.a,{href:"https://semver.org",children:"Semantic Versioning 2.0.0"}),".\nProject versions are of the form ",(0,t.jsx)(r.code,{children:"MAJOR.MINOR.PATCH"}),".\nAn incremented ",(0,t.jsx)(r.code,{children:"MAJOR"})," version means there may be backwards incompatible changes (typically after an appropriate deprecation schedule).\nAn incrementaled ",(0,t.jsx)(r.code,{children:"MINOR"})," version means there are changes in functionality (new APIs) in a backwards compatible manner.\nImportantly, Chisel maintains ",(0,t.jsx)(r.em,{children:"binary compatibility"})," between minor versions of the same major version.\nFor example, a project compiled against Chisel 5.0.0 can be used with future Chisel versions 5.1.0 or 5.100.2.\nAn incremented ",(0,t.jsx)(r.code,{children:"PATCH"})," version means there are backwards compatible bug fixes."]}),"\n",(0,t.jsx)(r.h2,{id:"firtool-version",children:"Firtool Version"}),"\n",(0,t.jsxs)(r.p,{children:["Starting with Chisel v3.6, Chisel uses firtool (part of the ",(0,t.jsx)(r.a,{href:"https://github.com/llvm/circt",children:"LLVM CIRCT"})," project) to generate Verilog.\nEach version of Chisel is released against a specific version of firtool as specified in the following tables:"]}),"\n","\n","\n",(0,t.jsxs)(y,{children:[(0,t.jsx)(k,{value:"releases",label:"Releases",default:!0,children:(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Chisel Version"}),(0,t.jsx)(r.th,{children:"Firtool Version"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"6.1.0"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://github.com/llvm/circt/releases/tag/firtool-1.62.0",children:"1.62.0"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"6.0.0"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://github.com/llvm/circt/releases/tag/firtool-1.62.0",children:"1.62.0"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"5.1.0"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://github.com/llvm/circt/releases/tag/firtool-1.43.0",children:"1.43.0"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"5.0.0"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://github.com/llvm/circt/releases/tag/firtool-1.40.0",children:"1.40.0"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"3.6.0"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://github.com/llvm/circt/releases/tag/firtool-1.37.0",children:"1.37.0"})})]})]})]})}),(0,t.jsx)(k,{value:"prereleases",label:"Pre-releases",children:(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Chisel Version"}),(0,t.jsx)(r.th,{children:"Firtool Version"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"7.0.0-M1"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://github.com/llvm/circt/releases/tag/firtool-1.66.0",children:"1.66.0"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"6.0.0-RC2"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://github.com/llvm/circt/releases/tag/firtool-1.62.0",children:"1.62.0"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"6.0.0-RC1"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://github.com/llvm/circt/releases/tag/firtool-1.61.0",children:"1.61.0"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"6.0.0-M3"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://github.com/llvm/circt/releases/tag/firtool-1.52.0",children:"1.52.0"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"6.0.0-M2"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://github.com/llvm/circt/releases/tag/firtool-1.43.0",children:"1.43.0"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"6.0.0-M1"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://github.com/llvm/circt/releases/tag/firtool-1.40.0",children:"1.40.0"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"5.0.0-RC2"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://github.com/llvm/circt/releases/tag/firtool-1.40.0",children:"1.40.0"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"5.0.0-RC1"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://github.com/llvm/circt/releases/tag/firtool-1.38.0",children:"1.38.0"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"5.0.0-M2"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://github.com/llvm/circt/releases/tag/firtool-1.36.0",children:"1.36.0"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"5.0.0-M1"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://github.com/llvm/circt/releases/tag/firtool-1.31.0",children:"1.31.0"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"3.6.0-RC3"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://github.com/llvm/circt/releases/tag/firtool-1.37.0",children:"1.37.0"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"3.6.0-RC2"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://github.com/llvm/circt/releases/tag/firtool-1.31.0",children:"1.31.0"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"3.6.0-RC1"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://github.com/llvm/circt/releases/tag/firtool-1.30.0",children:"1.30.0"})})]})]})]})})]}),"\n",(0,t.jsx)(r.h2,{id:"old-chisel-versions-30---36",children:"Old Chisel versions (3.0 - 3.6)"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"As of Chisel 5.0.0, this and following sections no longer apply."})}),"\n",(0,t.jsxs)(r.p,{children:["Prior to the relese of Chisel 5.0.0, Chisel and related projects followed a versioning scheme similar to ",(0,t.jsx)(r.a,{href:"https://pvp.haskell.org/",children:"PVP"}),".\nProject versions were of the form ",(0,t.jsx)(r.code,{children:"A.B.C"})," where ",(0,t.jsx)(r.code,{children:"A.B"})," specifies the ",(0,t.jsx)(r.em,{children:"Major"})," version and ",(0,t.jsx)(r.code,{children:"C"})," specifies the ",(0,t.jsx)(r.em,{children:"Minor"})," version.\nProjects maintain ",(0,t.jsx)(r.em,{children:"binary compatibility"})," between minor versions of the same major version."]}),"\n",(0,t.jsx)(r.h3,{id:"compatible-versions-chisel-30---36",children:"Compatible Versions (Chisel 3.0 - 3.6)"}),"\n",(0,t.jsx)(r.p,{children:"Historically, various Chisel-related projects were distributed across multiple projects each with their own versioning."}),"\n",(0,t.jsxs)(r.p,{children:["Please use the following table to determine which versions of the related projects are compatible.\nIn particular, versions of projects in this table were compiled against the version of any dependencies listed in the same row.\nFor example, ",(0,t.jsx)(r.code,{children:"chisel-iotesters"})," version 1.4 was compiled against ",(0,t.jsx)(r.code,{children:"chisel3"})," version 3.3."]}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"chisel3"}),(0,t.jsx)(r.th,{children:"chiseltest"}),(0,t.jsxs)(r.th,{children:["chisel-iotesters",(0,t.jsx)("sup",{children:"3"})]}),(0,t.jsx)(r.th,{children:"firrtl"}),(0,t.jsx)(r.th,{children:"treadle"}),(0,t.jsx)(r.th,{children:"diagrammer"}),(0,t.jsxs)(r.th,{children:["firrtl-interpreter",(0,t.jsx)("sup",{children:"2"})]})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"3.6"}),(0,t.jsx)(r.td,{children:"0.6"}),(0,t.jsx)(r.td,{children:"-"}),(0,t.jsx)(r.td,{children:"1.6"}),(0,t.jsx)(r.td,{children:"1.6"}),(0,t.jsx)(r.td,{children:"1.6"}),(0,t.jsx)(r.td,{children:"-"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"3.5"}),(0,t.jsxs)(r.td,{children:["0.5",(0,t.jsx)("sup",{children:"4"})]}),(0,t.jsxs)(r.td,{children:["2.5",(0,t.jsx)("sup",{children:"5"})]}),(0,t.jsx)(r.td,{children:"1.5"}),(0,t.jsxs)(r.td,{children:["1.5",(0,t.jsx)("sup",{children:"4"})]}),(0,t.jsxs)(r.td,{children:["1.5",(0,t.jsx)("sup",{children:"4"})]}),(0,t.jsx)(r.td,{children:"-"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"3.4"}),(0,t.jsx)(r.td,{children:"0.3"}),(0,t.jsx)(r.td,{children:"1.5"}),(0,t.jsx)(r.td,{children:"1.4"}),(0,t.jsx)(r.td,{children:"1.3"}),(0,t.jsx)(r.td,{children:"1.3"}),(0,t.jsx)(r.td,{children:"1.4"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"3.3"}),(0,t.jsx)(r.td,{children:"0.2"}),(0,t.jsx)(r.td,{children:"1.4"}),(0,t.jsx)(r.td,{children:"1.3"}),(0,t.jsx)(r.td,{children:"1.2"}),(0,t.jsx)(r.td,{children:"1.2"}),(0,t.jsx)(r.td,{children:"1.3"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"3.2"}),(0,t.jsxs)(r.td,{children:["0.1",(0,t.jsx)("sup",{children:"1"})]}),(0,t.jsx)(r.td,{children:"1.3"}),(0,t.jsx)(r.td,{children:"1.2"}),(0,t.jsx)(r.td,{children:"1.1"}),(0,t.jsx)(r.td,{children:"1.1"}),(0,t.jsx)(r.td,{children:"1.2"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"3.1"}),(0,t.jsx)(r.td,{children:"-"}),(0,t.jsx)(r.td,{children:"1.2"}),(0,t.jsx)(r.td,{children:"1.1"}),(0,t.jsx)(r.td,{children:"1.0"}),(0,t.jsx)(r.td,{children:"1.0"}),(0,t.jsx)(r.td,{children:"1.1"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"3.0"}),(0,t.jsx)(r.td,{children:"-"}),(0,t.jsx)(r.td,{children:"1.1"}),(0,t.jsx)(r.td,{children:"1.0"}),(0,t.jsx)(r.td,{children:"-"}),(0,t.jsx)(r.td,{children:"-"}),(0,t.jsx)(r.td,{children:"1.0"})]})]})]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)("sup",{children:"1"})," chiseltest 0.1 was published under artifact name ",(0,t.jsx)(r.a,{href:"https://search.maven.org/search?q=a:chisel-testers2_2.12",children:"chisel-testers2"})," (0.2 was published under both artifact names)",(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)("sup",{children:"2"})," Replaced by Treadle, in maintenance mode only since version 1.1, final version is 1.4",(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)("sup",{children:"3"})," Replaced by chiseltest, final version is 2.5",(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)("sup",{children:"4"})," chiseltest, treadle, and diagrammer skipped X.4 to have a consistent major version with Chisel",(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)("sup",{children:"5"})," chisel-iotesters skipped from 1.5 to 2.5 to have a consistent major version with Chisel"]})]})}function S(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(M,{...e})}):M(e)}},8453:(e,r,s)=>{s.d(r,{R:()=>l,x:()=>c});var t=s(6540);const i={},n=t.createContext(i);function l(e){const r=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(n.Provider,{value:r},e.children)}}}]);