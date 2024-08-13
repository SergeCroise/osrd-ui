import{r as u,R as r}from"./index-RYns6xqu.js";/* empty css              */import{G as ce,i as me}from"./index.esm-Dk8PHLvH.js";import{c as pe}from"./index-Cm1LdsEh.js";import{I as de}from"./Input-BEca98am.js";import"./FieldWrapper-DTvEllJF.js";import"./InputStatusIcon-COYgDJ0E.js";import"./useFocusByTab-DuF17kQm.js";const N=s=>s.normalize("NFD").replace(/[\u0300-\u036f]/g,""),Q=({suggestions:s,onChange:X,getSuggestionLabel:a,customLabel:q,numberOfSuggestionsToShow:Z=5,exactSearch:L=!1,value:l,small:c,...v})=>{const[n,o]=u.useState([]),[I,S]=u.useState(-1),[E,m]=u.useState(l?a(l):""),i=u.useRef(null),x=u.useMemo(()=>s.sort((e,t)=>a(e).localeCompare(a(t))),[s,a]),ee=n.length>0,te=()=>{var e;return(e=i.current)==null?void 0:e.focus()},ae=()=>{var e;m(""),(e=i.current)==null||e.focus()},re=[...E?[{icon:r.createElement(ce,{size:c?"sm":"lg"}),action:ae,className:"clear-icon"}]:[],...x.length>0?[{icon:r.createElement(me,{size:c?"sm":"lg"}),action:te,className:"chevron-icon"}]:[]];u.useEffect(()=>{l&&m(a(l))},[l,a]);const se=e=>{const t=N(e.currentTarget.value).trim();if(m(e.currentTarget.value),t.trim()===""){o([]);return}const w=x.filter(ie=>{const D=N(a(ie).toLowerCase());return L?D.startsWith(t.toLowerCase()):D.includes(t.toLowerCase())});o(w)},T=e=>{const t=n[e];m(a(t)),X(t),o([]),S(-1)},ne=e=>{e.key==="ArrowDown"?S(t=>t<n.length-1?t+1:t):e.key==="ArrowUp"?S(t=>t>0?t-1:t):(e.key==="Enter"||e.key==="Tab")&&I>=0?T(I):e.key==="Escape"&&o([])},oe=e=>{e.stopPropagation(),i.current&&i.current.value===""&&o(x)},ue=()=>{n.length===1?T(0):o([])},le=e=>{T(e)};return r.createElement("div",{className:"input-with-suggestions",style:{"--number-of-suggestions":Z},onBlur:ue},q&&r.createElement("label",{htmlFor:v.id},q),r.createElement(de,{...v,ref:i,value:E,onChange:se,onKeyDown:ne,onFocus:oe,withIcons:re,small:c}),ee&&n.length>0&&r.createElement("ul",{className:"suggestions-list"},n.map((e,t)=>r.createElement("li",{key:`${a(e)}-${t}`,className:pe("suggestion-item",{active:t===I,small:c}),onClick:()=>le(t),onMouseDown:w=>w.preventDefault()},a(e)))))};Q.__docgenInfo={description:"",methods:[],displayName:"InputWithSuggestions",props:{suggestions:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"Array<T>"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: T) => void",signature:{arguments:[{type:{name:"T"},name:"value"}],return:{name:"void"}}},description:""},getSuggestionLabel:{required:!0,tsType:{name:"signature",type:"function",raw:"(option: T) => string",signature:{arguments:[{type:{name:"T"},name:"option"}],return:{name:"string"}}},description:""},customLabel:{required:!1,tsType:{name:"ReactNode"},description:""},numberOfSuggestionsToShow:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"5",computed:!1}},exactSearch:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},value:{required:!1,tsType:{name:"T"},description:""}},composes:["Omit"]};const ge=[{id:"1",label:"Manuel"},{id:"2",label:"Manuela"},{id:"3",label:"Manuella"}],we={component:Q,args:{small:!1,disabled:!1,readOnly:!1,onChange:()=>{},getSuggestionLabel:s=>s.label,suggestions:ge},decorators:[s=>r.createElement("div",{style:{maxWidth:"20rem"}},r.createElement(s,null))],title:"core/InputWithSuggestions",tags:["autodocs"]},p={args:{label:"Your name",type:"text",defaultValue:""}},d={args:{label:"Your name",type:"text",value:{id:"1",label:"Manuel"}}},g={args:{label:"Your name",type:"text",disabled:!0}},f={args:{label:"Your name",type:"text",hint:"You can type Manu to have suggestions"}},y={args:{label:"Your name",type:"text",required:!0}},h={args:{label:"Name",type:"text",required:!0,statusWithMessage:{status:"loading"}}},b={args:{label:"Name",type:"text",required:!0,small:!0}};var Y,M,C;p.parameters={...p.parameters,docs:{...(Y=p.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    label: 'Your name',
    type: 'text',
    defaultValue: ''
  }
}`,...(C=(M=p.parameters)==null?void 0:M.docs)==null?void 0:C.source}}};var W,k,V;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    label: 'Your name',
    type: 'text',
    value: {
      id: '1',
      label: 'Manuel'
    }
  }
}`,...(V=(k=d.parameters)==null?void 0:k.docs)==null?void 0:V.source}}};var R,A,F;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    label: 'Your name',
    type: 'text',
    disabled: true
  }
}`,...(F=(A=g.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};var O,z,_;f.parameters={...f.parameters,docs:{...(O=f.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    label: 'Your name',
    type: 'text',
    hint: 'You can type Manu to have suggestions'
  }
}`,...(_=(z=f.parameters)==null?void 0:z.docs)==null?void 0:_.source}}};var B,G,H;y.parameters={...y.parameters,docs:{...(B=y.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    label: 'Your name',
    type: 'text',
    required: true
  }
}`,...(H=(G=y.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var K,$,P;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    label: 'Name',
    type: 'text',
    required: true,
    statusWithMessage: {
      status: 'loading'
    }
  }
}`,...(P=($=h.parameters)==null?void 0:$.docs)==null?void 0:P.source}}};var U,j,J;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    label: 'Name',
    type: 'text',
    required: true,
    small: true
  }
}`,...(J=(j=b.parameters)==null?void 0:j.docs)==null?void 0:J.source}}};const qe=["Default","WithDefaultValue","Disabled","Hint","RequiredInput","LoadingInput","SmallInput"];export{p as Default,g as Disabled,f as Hint,h as LoadingInput,y as RequiredInput,b as SmallInput,d as WithDefaultValue,qe as __namedExportsOrder,we as default};
