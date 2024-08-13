/* empty css              */import{M as k,Z as O,a as w,c as W,g as $,o as G,b as K,I as V,d as x,e as I,S as X}from"./OperationalPoint-DNRbjqtc.js";import{r as i,R as t}from"./index-RYns6xqu.js";import{t as F,Y as J}from"./index.esm-Dk8PHLvH.js";import{V as Q,i as U}from"./index.esm-0nN0eK2b.js";import{c as N}from"./index-Cm1LdsEh.js";import{O as ee}from"./OperationalPointList-CvvjP58D.js";import"./lodash-CcdATr5u.js";import"./chroma-CVOSM3bD.js";const te=(n,a)=>{const[o,s]=i.useState(void 0);return i.useLayoutEffect(()=>{const{current:c}=n,l=()=>{if(c){const h=c.scrollHeight>c.clientHeight;s(h),a&&a(h)}};c&&("ResizeObserver"in window&&new ResizeObserver(l).observe(c),l())},[a,n]),o},ne=(n,a)=>n.positions.map((o,s)=>({time:n.times[s]+new Date(a).getTime(),position:o})),ae=(n,a)=>i.useMemo(()=>n.map(o=>({id:`${o.id}`,label:o.name,color:a&&a===o.id?"#201EDE":"#000000",points:o.space_time_curves.flatMap(s=>ne(s,o.departure_time))})),[n,a]);function se(n,a){return{x:a.x-n.x,y:a.y-n.y}}const L=({operationalPoints:n,projectPathTrainResult:a,selectedProjection:o})=>{const s=i.useRef(null),[c,l]=i.useState({xZoom:1,yZoom:1,xOffset:0,yOffset:0,panning:null,scrollPosition:0,isProportional:!1,operationalPointsChart:[],operationalPointsToDisplay:[],panY:!1,scales:[]}),{xZoom:h,yZoom:r,xOffset:y,yOffset:M,panY:S,panning:_,scrollPosition:C,isProportional:p,operationalPointsChart:g,operationalPointsToDisplay:H,scales:T}=c,R=ae(a,o),Y=i.useCallback(()=>{r<k&&l(e=>({...e,yZoom:r+O}))},[r]),j=i.useCallback(()=>{r>w&&l(e=>({...e,yZoom:r-O}))},[r]),f=i.useCallback(()=>{if(s.current){const{scrollTop:e}=s.current;(e||e===0)&&l(m=>({...m,scrollPosition:e,yOffset:e}))}},[]),Z=i.useCallback(()=>{l(e=>({...e,isProportional:!e.isProportional}))},[]),z=i.useCallback(e=>{l(m=>({...m,panY:e}))},[]);return te(s,z),i.useEffect(()=>(window.addEventListener("scroll",f,{passive:!0}),()=>{window.removeEventListener("scroll",f)}),[f]),i.useEffect(()=>{const e=W(n,p,r);l(m=>({...m,operationalPointsChart:$(e),operationalPointsToDisplay:G(e,r,p)}))},[n,p,r]),i.useEffect(()=>{l(e=>({...e,scales:K(g,p,r)}))},[g]),t.createElement("div",{className:"manchette-space-time-chart-wrapper"},t.createElement("div",{className:"header bg-ambientB-5 w-full border-b border-grey-30",style:{height:"40px"}}),t.createElement("div",{ref:s,className:"manchette flex",onScroll:f},t.createElement("div",{className:"manchette-container "},t.createElement("div",{className:" bg-ambientB-10 border-r border-grey-30",style:{minHeight:`${V}px`}},t.createElement(ee,{operationalPoints:H})),t.createElement("div",{className:"manchette-actions flex items-center"},t.createElement("div",{className:" flex items-center "},t.createElement("button",{className:"h-full px-3 w-full zoom-out",onClick:j,disabled:r<=w},t.createElement(F,null))),t.createElement("div",{className:" flex items-center  border-x border-black-25  h-full"},t.createElement("button",{className:"h-full px-3 w-full zoom-in",disabled:r>=k,onClick:Y},t.createElement(J,null))),t.createElement("div",{className:"flex items-center ml-auto text-sans font-semibold"},t.createElement("button",{className:"toggle-mode",onClick:Z},t.createElement("div",{className:"flex flex-col items-end pr-2"},t.createElement("span",{className:N({"text-grey-30":!p})},"Km"),t.createElement("span",{className:N({"text-grey-30":p})},"Linéaire")))))),t.createElement("div",{className:"space-time-chart-container w-full sticky",style:{bottom:0,left:0,top:0,height:`${x}px`}},T.length>0&&t.createElement(Q,{className:"inset-0 absolute h-full",style:{top:0,height:"calc(100% - 6px)"},operationalPoints:g,spaceOrigin:0,spaceScales:T,timeOrigin:Math.min(...a.map(e=>+new Date(e.departure_time))),timeScale:6e4/h,xOffset:y,yOffset:-C+14,onPan:({initialPosition:e,position:m,isPanning:B})=>{var v;const P=se(e,m),u={...c};if(!B)u.panning=null;else if(!_)u.panning={initialOffset:{x:y,y:M}};else{const{initialOffset:E}=_;if(u.xOffset=E.x+P.x,S){const d=E.y-P.y;s.current&&d>=0&&d+x<=((v=s.current)==null?void 0:v.scrollHeight)&&(u.yOffset=d,u.scrollPosition=d,s.current&&s.current.scrollHeight&&(s.current.scrollTop=d))}}l(u)}},R.map((e,m)=>t.createElement(U,{key:e.id,index:m,path:e,color:e.color}))))))};L.__docgenInfo={description:"",methods:[],displayName:"Manchette",props:{operationalPoints:{required:!0,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"OperationalPointType[]"},description:""},projectPathTrainResult:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /*Name of train */
  name: string;
  /*Id of train */
  id: number;
  /** List of signal updates along the path */
  signal_updates: {
    /** The labels of the new aspect */
    aspect_label: string;
    /** Whether the signal is blinking */
    blinking: boolean;
    /** The color of the aspect
        (Bits 24-31 are alpha, 16-23 are red, 8-15 are green, 0-7 are blue) */
    color: number;
    /** The route ends at this position in mm on the train path */
    position_end: number;
    /** The route starts at this position in mm on the train path */
    position_start: number;
    /** The id of the updated signal */
    signal_id: string;
    /** The aspects stop being displayed at this time (number of seconds since \`departure_time\`) */
    time_end: number;
    /** The aspects start being displayed at this time (number of mseconds since \`departure_time\`) */
    time_start: number;
  }[];
  /** List of space-time curves sections along the path */
  space_time_curves: {
    positions: number[];
    times: number[];
  }[];
  /** Departure time of the train */
  departure_time: string;
  /** Rolling stock length in mm */
  rolling_stock_length: number;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"id",value:{name:"number",required:!0}},{key:"signal_updates",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /** The labels of the new aspect */
  aspect_label: string;
  /** Whether the signal is blinking */
  blinking: boolean;
  /** The color of the aspect
      (Bits 24-31 are alpha, 16-23 are red, 8-15 are green, 0-7 are blue) */
  color: number;
  /** The route ends at this position in mm on the train path */
  position_end: number;
  /** The route starts at this position in mm on the train path */
  position_start: number;
  /** The id of the updated signal */
  signal_id: string;
  /** The aspects stop being displayed at this time (number of seconds since \`departure_time\`) */
  time_end: number;
  /** The aspects start being displayed at this time (number of mseconds since \`departure_time\`) */
  time_start: number;
}`,signature:{properties:[{key:"aspect_label",value:{name:"string",required:!0},description:"The labels of the new aspect"},{key:"blinking",value:{name:"boolean",required:!0},description:"Whether the signal is blinking"},{key:"color",value:{name:"number",required:!0},description:`The color of the aspect
        (Bits 24-31 are alpha, 16-23 are red, 8-15 are green, 0-7 are blue)`},{key:"position_end",value:{name:"number",required:!0},description:"The route ends at this position in mm on the train path"},{key:"position_start",value:{name:"number",required:!0},description:"The route starts at this position in mm on the train path"},{key:"signal_id",value:{name:"string",required:!0},description:"The id of the updated signal"},{key:"time_end",value:{name:"number",required:!0},description:"The aspects stop being displayed at this time (number of seconds since `departure_time`)"},{key:"time_start",value:{name:"number",required:!0},description:"The aspects start being displayed at this time (number of mseconds since `departure_time`)"}]}}],raw:`{
  /** The labels of the new aspect */
  aspect_label: string;
  /** Whether the signal is blinking */
  blinking: boolean;
  /** The color of the aspect
      (Bits 24-31 are alpha, 16-23 are red, 8-15 are green, 0-7 are blue) */
  color: number;
  /** The route ends at this position in mm on the train path */
  position_end: number;
  /** The route starts at this position in mm on the train path */
  position_start: number;
  /** The id of the updated signal */
  signal_id: string;
  /** The aspects stop being displayed at this time (number of seconds since \`departure_time\`) */
  time_end: number;
  /** The aspects start being displayed at this time (number of mseconds since \`departure_time\`) */
  time_start: number;
}[]`,required:!0},description:"List of signal updates along the path"},{key:"space_time_curves",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  positions: number[];
  times: number[];
}`,signature:{properties:[{key:"positions",value:{name:"Array",elements:[{name:"number"}],raw:"number[]",required:!0}},{key:"times",value:{name:"Array",elements:[{name:"number"}],raw:"number[]",required:!0}}]}}],raw:`{
  positions: number[];
  times: number[];
}[]`,required:!0},description:"List of space-time curves sections along the path"},{key:"departure_time",value:{name:"string",required:!0},description:"Departure time of the train"},{key:"rolling_stock_length",value:{name:"number",required:!0},description:"Rolling stock length in mm"}]}}],raw:"ProjectPathTrainResult[]"},description:""},selectedProjection:{required:!1,tsType:{name:"number"},description:""}}};const ie=X.operational_points??[],re=I??[],be={component:L,title:"Manchette/Manchette",tags:["autodocs"],argTypes:{operationalPoints:{control:{type:"object"}},projectPathTrainResult:{control:{type:"object"}},selectedProjection:{options:[void 0,...I.map(n=>n.id)],control:{type:"select"}}}},b={args:{operationalPoints:ie,projectPathTrainResult:re,selectedProjection:3}};var A,q,D;b.parameters={...b.parameters,docs:{...(A=b.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    operationalPoints: OperationalPointListData,
    projectPathTrainResult: PathData,
    selectedProjection: 3
  }
}`,...(D=(q=b.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};const ge=["Default"];export{b as Default,ge as __namedExportsOrder,be as default};
