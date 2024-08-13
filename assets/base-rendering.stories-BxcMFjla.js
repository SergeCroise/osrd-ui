import{R as r}from"./index-RYns6xqu.js";import{S as u,O as o,P as O,a as d,X as y,Y as g}from"./PathLayer-C7DXgddV.js";/* empty css                        */import"./index-Cm1LdsEh.js";import"./lodash-CcdATr5u.js";const L=({xZoomLevel:p,yZoomLevel:n,xOffset:m,yOffset:c,spaceScaleType:f})=>r.createElement(u,{className:"inset-0 absolute",operationalPoints:o,spaceOrigin:0,spaceScales:o.slice(0,-1).map((e,t)=>({from:e.position,to:o[t+1].position,...f==="linear"?{size:50*n}:{coefficient:150/n}})),timeOrigin:+new Date("2024/04/02"),timeScale:6e4/p,xOffset:m,yOffset:c},O.map((e,t)=>r.createElement(d,{key:e.id,index:t,path:e,color:e.color}))),V={title:"SpaceTimeChart/Rendering",component:L,argTypes:{xZoomLevel:{name:"X zoom level",description:"(in pixels/minute)",defaultValue:.4,control:{type:"range",min:.1,max:75,step:.1}},xOffset:{name:"X offset",description:"(in pixels)",defaultValue:0,control:{type:"number",step:10}},yZoomLevel:{name:"Y zoom level",options:["linear","proportional"],defaultValue:1,control:{type:"range",min:.1,max:10,step:.1}},yOffset:{name:"Y offset",description:"(in pixels)",defaultValue:0,control:{type:"number",step:10}},spaceScaleType:{name:"Space scaling type",options:["linear","proportional"],defaultValue:"linear",control:{type:"radio"}}}},a={name:"Default arguments",args:{xZoomLevel:y,yZoomLevel:g,xOffset:0,yOffset:0,spaceScaleType:"linear"}};var s,i,l;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: 'Default arguments',
  args: {
    xZoomLevel: X_ZOOM_LEVEL,
    yZoomLevel: Y_ZOOM_LEVEL,
    xOffset: 0,
    yOffset: 0,
    spaceScaleType: 'linear'
  }
}`,...(l=(i=a.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const Z=["DefaultArgs"];export{a as DefaultArgs,Z as __namedExportsOrder,V as default};
