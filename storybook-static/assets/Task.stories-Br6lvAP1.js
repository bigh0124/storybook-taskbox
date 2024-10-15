import{f as l}from"./index-DEpIhj4w.js";import{j as t}from"./jsx-runtime-CB5fy6C8.js";import{P as a}from"./index-D3ylJrlI.js";function o({task:c,onArchiveTask:x,onPinTask:v}){if(!c)return null;const{id:e,title:d,state:n}=c;return t.jsxs("div",{className:`list-item ${n}`,children:[t.jsxs("label",{htmlFor:`archiveTask-${e}`,"aria-label":`archiveTask-${e}`,className:"checkbox",children:[t.jsx("input",{type:"checkbox",disabled:!0,name:"checked",id:`archiveTask-${e}`,checked:n==="TASK_ARCHIVED"}),t.jsx("span",{className:"checkbox-custom",onClick:()=>x(e)})]}),t.jsx("label",{htmlFor:`title-${e}`,"aria-label":d,className:"title",children:t.jsx("input",{type:"text",value:d,readOnly:!0,name:"title",id:`title-${e}`,placeholder:"Input title"})}),n!=="TASK_ARCHIVED"&&t.jsx("button",{className:"pin-button",onClick:()=>v(e),id:`pinTask-${e}`,"aria-label":`pinTask-${e}`,children:t.jsx("span",{className:"icon-star"})},`pinTask-${e}`)]})}o.propTypes={task:a.shape({id:a.string.isRequired,title:a.string.isRequired,state:a.string.isRequired}).isRequired,onArchiveTask:a.func.isRequired,onPinTask:a.func.isRequired};o.__docgenInfo={description:"",methods:[],displayName:"Task",props:{task:{description:"Composition of the task",type:{name:"shape",value:{id:{name:"string",description:"Id of the task",required:!0},title:{name:"string",description:"Title of the task",required:!0},state:{name:"string",description:"Current state of the task",required:!0}}},required:!0},onArchiveTask:{description:"Event to change the task to archived",type:{name:"func"},required:!0},onPinTask:{description:"Event to change the task to pinned",type:{name:"func"},required:!0}}};const _={onArchiveTask:l(),onPinTask:l()},b={component:o,title:"Task",tags:["autodocs"],excludeStories:/.*Data$/,args:{..._}},s={args:{task:{id:"1",title:"Test Task",state:"TASK_INBOX"}}},r={args:{task:{...s.args.task,state:"TASK_PINNED"}}},i={args:{task:{...s.args.task,state:"TASK_ARCHIVED"}}};var u,p,k;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    task: {
      id: "1",
      title: "Test Task",
      state: "TASK_INBOX"
    }
  }
}`,...(k=(p=s.parameters)==null?void 0:p.docs)==null?void 0:k.source}}};var m,T,h;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: "TASK_PINNED"
    }
  }
}`,...(h=(T=r.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};var g,f,A;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: "TASK_ARCHIVED"
    }
  }
}`,...(A=(f=i.parameters)==null?void 0:f.docs)==null?void 0:A.source}}};const D=["ActionsData","Default","Pinned","Archived"],q=Object.freeze(Object.defineProperty({__proto__:null,ActionsData:_,Archived:i,Default:s,Pinned:r,__namedExportsOrder:D,default:b},Symbol.toStringTag,{value:"Module"}));export{s as D,o as T,q as a};
