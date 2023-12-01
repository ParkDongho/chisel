"use strict";(self.webpackChunkchisel_lang=self.webpackChunkchisel_lang||[]).push([[5719],{2266:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>p});var n=r(5893),o=r(1151);const s={layout:"docs",title:"Properties",section:"chisel3"},i="Properties",a={id:"explanations/properties",title:"Properties",description:"Chisel properties represent information about the design that is not hardware.",source:"@site/docs/explanations/properties.md",sourceDirName:"explanations",slug:"/explanations/properties",permalink:"/docs/explanations/properties",draft:!1,unlisted:!1,editUrl:"https://github.com/chipsalliance/chisel/tree/main/docs/src/explanations/properties.md",tags:[],version:"current",frontMatter:{layout:"docs",title:"Properties",section:"chisel3"},sidebar:"tutorialSidebar",previous:{title:"Printing",permalink:"/docs/explanations/printing"},next:{title:"Reset",permalink:"/docs/explanations/reset"}},l={},p=[{value:"Property Types",id:"property-types",level:2},{value:"Using Properties",id:"using-properties",level:2},{value:"Property Ports",id:"property-ports",level:3},{value:"Property Connections",id:"property-connections",level:3},{value:"Property Values",id:"property-values",level:3},{value:"Property Sequences",id:"property-sequences",level:3}];function c(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"properties",children:"Properties"}),"\n",(0,n.jsxs)(t.p,{children:["Chisel ",(0,n.jsx)(t.em,{children:"properties"})," represent information about the design that is not hardware.\nThis is useful to capture domain-specific knowledge and design intent alongside\nthe hardware description within the same generator."]}),"\n",(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsx)(t.p,{children:"Properties are under active development and are not yet considered stable."})}),"\n",(0,n.jsx)(t.h2,{id:"property-types",children:"Property Types"}),"\n",(0,n.jsxs)(t.p,{children:["The core primitive for using properties is the ",(0,n.jsx)(t.code,{children:"Property"})," type."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Property"})," types work similarly to the other Chisel\n",(0,n.jsx)(t.a,{href:"../explanations/data-types",children:"Data Types"}),", but rather than specifying the type of\nvalues held in state elements or flowing through wires in the circuit,\nproperties never flow through or affect the generated hardware. Instead, they\nflow through the hierarchy as ports that can be connected."]}),"\n",(0,n.jsxs)(t.p,{children:["What makes ",(0,n.jsx)(t.code,{children:"Property"})," types useful is their ability to express non-hardware\ninformation that is present in the generated hierarchy, and can be composed to\ncreate domain-specific data models that are tightly coupled to the design. An\ninput port with ",(0,n.jsx)(t.code,{children:"Property"})," type represents a part of the data model that must be\nsupplied when its module is instantiated. An output port with ",(0,n.jsx)(t.code,{children:"Property"})," type\nrepresents a part of the data model that may be accessed when its module is\ninstantiated. As the complete design is generated, an arbitrary data model can\nbe generated alongside it."]}),"\n",(0,n.jsxs)(t.p,{children:["The following are legal ",(0,n.jsx)(t.code,{children:"Property"})," types:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"Property[Int]"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"Property[Long]"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"Property[BigInt]"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"Property[String]"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"Property[Boolean]"})}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Property[Seq[A]]"})," (where ",(0,n.jsx)(t.code,{children:"A"})," is itself a ",(0,n.jsx)(t.code,{children:"Property"}),")"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"using-properties",children:"Using Properties"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"Property"})," functionality can be used with the following imports:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-scala",children:"import chisel3._\nimport chisel3.properties.Property\n"})}),"\n",(0,n.jsxs)(t.p,{children:["The subsections below show example uses of ",(0,n.jsx)(t.code,{children:"Property"})," types in various Chisel\nconstructs."]}),"\n",(0,n.jsx)(t.h3,{id:"property-ports",children:"Property Ports"}),"\n",(0,n.jsxs)(t.p,{children:["The legal ",(0,n.jsx)(t.code,{children:"Property"})," types may be used in ports. For example:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-scala",children:"class PortsExample extends RawModule {\n  // An Int Property type port.\n  val myPort = IO(Input(Property[Int]()))\n}\n"})}),"\n",(0,n.jsx)(t.h3,{id:"property-connections",children:"Property Connections"}),"\n",(0,n.jsxs)(t.p,{children:["The legal ",(0,n.jsx)(t.code,{children:"Property"})," types may be connected using the ",(0,n.jsx)(t.code,{children:":="})," operator. For\nexample, an input ",(0,n.jsx)(t.code,{children:"Property"})," type port may be connected to an output ",(0,n.jsx)(t.code,{children:"Property"}),"\ntype port:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-scala",children:"class ConnectExample extends RawModule {\n  val inPort = IO(Input(Property[Int]()))\n  val outPort = IO(Output(Property[Int]()))\n  outPort := inPort\n}\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Connections are only supported between the same ",(0,n.jsx)(t.code,{children:"Property"})," type. For example, a\n",(0,n.jsx)(t.code,{children:"Property[Int]"})," may only be connected to a ",(0,n.jsx)(t.code,{children:"Property[Int]"}),". This is enforced by\nthe Scala compiler."]}),"\n",(0,n.jsx)(t.h3,{id:"property-values",children:"Property Values"}),"\n",(0,n.jsxs)(t.p,{children:["The legal ",(0,n.jsx)(t.code,{children:"Property"})," types may be used to construct values by applying the\n",(0,n.jsx)(t.code,{children:"Property"})," object to a value of the ",(0,n.jsx)(t.code,{children:"Property"})," type. For example, a\n",(0,n.jsx)(t.code,{children:"Property"})," value may be connected to an output ",(0,n.jsx)(t.code,{children:"Property"})," type port:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-scala",children:"class LiteralExample extends RawModule {\n  val outPort = IO(Output(Property[Int]()))\n  outPort := Property(123)\n}\n"})}),"\n",(0,n.jsx)(t.h3,{id:"property-sequences",children:"Property Sequences"}),"\n",(0,n.jsxs)(t.p,{children:["Similarly to the primitive ",(0,n.jsx)(t.code,{children:"Property"})," types, sequences of ",(0,n.jsx)(t.code,{children:"Properties"})," may also be\nfor creating ports and values and they may also be connected:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-scala",children:"class SequenceExample extends RawModule {\n  val inPort = IO(Input(Property[Int]()))\n  val outPort1 = IO(Output(Property[Seq[Int]]()))\n  val outPort2 = IO(Output(Property[Seq[Int]]()))\n  // A Seq of literals can by turned into a Property\n  outPort1 := Property(Seq(123, 456))\n  // Property ports and literals can be mixed together into a Seq\n  outPort2 := Property(Seq(inPort, Property(789)))\n}\n"})})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},1151:(e,t,r)=>{r.d(t,{Z:()=>a,a:()=>i});var n=r(7294);const o={},s=n.createContext(o);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);