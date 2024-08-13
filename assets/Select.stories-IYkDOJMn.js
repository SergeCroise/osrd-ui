import{r as M,R as t}from"./index-RYns6xqu.js";import{c as ie}from"./index-Cm1LdsEh.js";import{F as ce}from"./FieldWrapper-DTvEllJF.js";/* empty css              */import"./InputStatusIcon-COYgDJ0E.js";import"./index.esm-Dk8PHLvH.js";const O="__PLACEHOLDER__",ee=({id:e,label:re,hint:te,value:g,options:y,placeholder:h,statusWithMessage:s,required:W,disabled:E,readOnly:T,small:q,getOptionLabel:se,getOptionValue:a,onChange:ae})=>{const[S,v]=M.useState(g),ne=r=>{const w=r.target.value===O?void 0:y.find(oe=>a(oe)===r.target.value);v(w),ae(w)};return M.useEffect(()=>{v(g)},[g]),t.createElement(ce,{id:e,label:re,hint:te,statusWithMessage:s,required:W,disabled:E,small:q},t.createElement("select",{className:ie("custom-select",s==null?void 0:s.status,{"placeholder-selected":h&&!S,small:q,"read-only":T}),value:S?a(S):void 0,required:W,disabled:E||T,onChange:ne},h&&t.createElement("option",{value:O},`– ${h} –`),y.map(r=>t.createElement("option",{key:a(r),value:a(r)},se(r)))))};ee.__docgenInfo={description:"",methods:[],displayName:"Select",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"Array<T>"},description:""},value:{required:!0,tsType:{name:"T"},description:""},getOptionLabel:{required:!0,tsType:{name:"signature",type:"function",raw:"(option: T) => string",signature:{arguments:[{type:{name:"T"},name:"option"}],return:{name:"string"}}},description:""},getOptionValue:{required:!0,tsType:{name:"signature",type:"function",raw:"(option: T) => string",signature:{arguments:[{type:{name:"T"},name:"option"}],return:{name:"string"}}},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(option?: T) => void",signature:{arguments:[{type:{name:"T"},name:"option"}],return:{name:"void"}}},description:""}}};const f=[{value:"blue",label:"Blue"},{value:"red",label:"Red"},{value:"green",label:"Green"}],he={component:ee,args:{label:"Fill colour",placeholder:"Choose",value:f[0],options:f,getOptionLabel:e=>e.label,getOptionValue:e=>e.value,onChange:e=>console.log(e),small:!1,disabled:!1,readOnly:!1},decorators:[e=>t.createElement("div",{style:{maxWidth:"20rem"}},t.createElement(e,null))],title:"Core/Select",tags:["autodocs"]},n={args:{id:"Default",value:void 0}},o={args:{id:"SelectedOption",value:f[1]}},i={args:{id:"Hint",hint:"This is not a choice"}},c={args:{id:"RequiredInput",required:!0}},u={args:{id:"InformationSelect",required:!0,statusWithMessage:{status:"info",message:"This is a one way choice"}}},d={args:{id:"WarningSelect",required:!0,statusWithMessage:{status:"warning"}}},l={args:{id:"WarningWithMessageSelect",required:!0,statusWithMessage:{status:"warning",message:"This is a one way choice"}}},m={args:{id:"ErrorSelect",required:!0,statusWithMessage:{status:"error"}}},p={args:{id:"ErrorWithMessageSelect",required:!0,statusWithMessage:{status:"error",message:"This is a one way choice"}}};var b,I,R;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    id: 'Default',
    value: undefined
  }
}`,...(R=(I=n.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var _,C,L;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    id: 'SelectedOption',
    value: options[1]
  }
}`,...(L=(C=o.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var D,H,x;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    id: 'Hint',
    hint: 'This is not a choice'
  }
}`,...(x=(H=i.parameters)==null?void 0:H.docs)==null?void 0:x.source}}};var A,F,N;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    id: 'RequiredInput',
    required: true
  }
}`,...(N=(F=c.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};var P,k,B;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    id: 'InformationSelect',
    required: true,
    statusWithMessage: {
      status: 'info',
      message: 'This is a one way choice'
    }
  }
}`,...(B=(k=u.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var G,U,$;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    id: 'WarningSelect',
    required: true,
    statusWithMessage: {
      status: 'warning'
    }
  }
}`,...($=(U=d.parameters)==null?void 0:U.docs)==null?void 0:$.source}}};var j,z,J;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    id: 'WarningWithMessageSelect',
    required: true,
    statusWithMessage: {
      status: 'warning',
      message: 'This is a one way choice'
    }
  }
}`,...(J=(z=l.parameters)==null?void 0:z.docs)==null?void 0:J.source}}};var K,Q,V;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    id: 'ErrorSelect',
    required: true,
    statusWithMessage: {
      status: 'error'
    }
  }
}`,...(V=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:V.source}}};var X,Y,Z;p.parameters={...p.parameters,docs:{...(X=p.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    id: 'ErrorWithMessageSelect',
    required: true,
    statusWithMessage: {
      status: 'error',
      message: 'This is a one way choice'
    }
  }
}`,...(Z=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const Se=["Default","SelectedOption","Hint","RequiredInput","InformationSelect","WarningSelect","WarningWithMessageSelect","ErrorSelect","ErrorWithMessageSelect"];export{n as Default,m as ErrorSelect,p as ErrorWithMessageSelect,i as Hint,u as InformationSelect,c as RequiredInput,o as SelectedOption,d as WarningSelect,l as WarningWithMessageSelect,Se as __namedExportsOrder,he as default};
