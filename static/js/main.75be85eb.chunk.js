(this["webpackJsonpkanban-board"]=this["webpackJsonpkanban-board"]||[]).push([[0],{55:function(n,e,t){"use strict";t.r(e);var r=t(3),a=t(1),i=t(15),o=t.n(i),c=t(9),s=t(27),d=t(7),u=t(4),l=t(59),b={taskId:"",isDone:!1,task:""};function p(n,e){var t=e.type,r=e.payload,a=Object(u.a)(Object(u.a)({},r.cardData),r),i=a.columnId,o=a.cardId,c=a.description,p=a.tags,f=a.tasks,j=a.createdAt,O=a.taskId,x=a.taskText,g=a.source,m=a.destination,h=Object(u.a)({},m).droppableId,v=Object(u.a)({},g).droppableId;return{MOVE_CARD_TO_ANOTHER_COLUMN:function(){var e,t=n[h].items;return t.splice(r.destination.index,0,r.movedItem),Object(u.a)(Object(u.a)({},n),{},(e={},Object(d.a)(e,v,Object(u.a)(Object(u.a)({},n[v]),{},{items:n[v].items})),Object(d.a)(e,h,Object(u.a)(Object(u.a)({},n[h]),{},{items:t})),e))},MOVE_CARD_TO_SAME_COLUMN:function(){var e=n[r.source.droppableId].items;return e.splice(r.destination.index,0,r.movedItem),Object(u.a)(Object(u.a)({},n),{},Object(d.a)({},r.source.droppableId,Object(u.a)(Object(u.a)({},n[r.source.droppableId]),{},{items:e})))},CREATE_CARD:function(){var e={cardId:Object(l.a)(),description:c,tags:p,tasks:f,createdAt:(new Date).toISOString(),lastUpdate:(new Date).toISOString()};return Object(u.a)(Object(u.a)({},n),{},Object(d.a)({},i,Object(u.a)(Object(u.a)({},n[i]),{},{items:[e].concat(Object(s.a)(n[i].items))})))},UPDATE_CARD:function(){var e={cardId:o,description:c,tags:p,tasks:f,createdAt:j,lastUpdate:(new Date).toISOString()};return Object(u.a)(Object(u.a)({},n),{},Object(d.a)({},i,Object(u.a)(Object(u.a)({},n[i]),{},{items:n[i].items.map((function(n){return n.cardId===o?e:n}))})))},DELETE_CARD:function(){return Object(u.a)(Object(u.a)({},n),{},Object(d.a)({},i,Object(u.a)(Object(u.a)({},n[i]),{},{items:n[i].items.filter((function(n){return n.cardId!==o}))})))},TOGGLE_TASK_IS_DONE:function(){return Object(u.a)(Object(u.a)({},n),{},Object(d.a)({},i,Object(u.a)(Object(u.a)({},n[i]),{},{items:n[i].items.map((function(n){return n.cardId===o?Object(u.a)(Object(u.a)({},n),{},{lastUpdate:(new Date).toISOString(),tasks:n.tasks.map((function(n){return n.taskId===O?Object(u.a)(Object(u.a)({},n),{},{isDone:!n.isDone}):n}))}):n}))})))},ADD_TASK_TO_CARD:function(){return Object(u.a)(Object(u.a)({},n),{},Object(d.a)({},i,Object(u.a)(Object(u.a)({},n[i]),{},{items:n[i].items.map((function(n){return n.cardId===o?Object(u.a)(Object(u.a)({},n),{},{lastUpdate:(new Date).toISOString(),tasks:[(e=Object(l.a)(),Object(u.a)(Object(u.a)({},b),{},{taskId:e}))].concat(Object(s.a)(n.tasks))}):n;var e}))})))},EDIT_CARD_TASK:function(){return Object(u.a)(Object(u.a)({},n),{},Object(d.a)({},i,Object(u.a)(Object(u.a)({},n[i]),{},{items:n[i].items.map((function(n){return n.cardId===o?Object(u.a)(Object(u.a)({},n),{},{lastUpdate:(new Date).toISOString(),tasks:n.tasks.map((function(n){return n.taskId===O?Object(u.a)(Object(u.a)({},n),{},{task:x}):n}))}):n}))})))},DELETE_CARD_TASK:function(){return Object(u.a)(Object(u.a)({},n),{},Object(d.a)({},i,Object(u.a)(Object(u.a)({},n[i]),{},{items:n[i].items.map((function(n){return n.cardId===o?Object(u.a)(Object(u.a)({},n),{},{tasks:n.tasks.filter((function(n){return n.taskId!==O}))}):n}))})))}}[t]()||n}var f=[{cardId:Object(l.a)(),description:"Nam aliquam sollicitudin lorem, et tempor magna dapibus.",tags:["Frontend","Backend","Devops"],tasks:[{taskId:Object(l.a)(),isDone:!1,task:"Mauris ligula leo, cursus vitae enim non."},{taskId:Object(l.a)(),isDone:!0,task:"Quisque neque ligula, ullamcorper."},{taskId:Object(l.a)(),isDone:!0,task:"Praesent in nulla nec elit tristique eleifend sed eget lacus. Nam cursus odio ut."}],createdAt:"2021-05-19T19:39:33.863Z",lastUpdate:"2021-06-19T19:39:33.863Z"},{cardId:Object(l.a)(),description:"Pellentesque fermentum, tortor sed lacinia.",tags:["Backend"],tasks:[{taskId:Object(l.a)(),isDone:!1,task:"Praesent vel leo risus. Integer erat tellus, elementum ut velit non."},{taskId:Object(l.a)(),isDone:!0,task:"consectetur vehicula lorem."}],createdAt:"2021-05-11T19:39:33.863Z",lastUpdate:"2021-06-11T19:39:33.863Z"},{cardId:Object(l.a)(),description:"isDonec vel pulvinar ex, sit amet vehicula nisl.",tags:["Frontend","Bug"],tasks:[{taskId:Object(l.a)(),isDone:!1,task:"Quisque congue lacus nibh, quis sagittis ante blandit eu. Praesent rhoncus fermentum est."}],createdAt:"2021-05-11T19:39:33.863Z",lastUpdate:"2021-06-11T19:39:33.863Z"},{cardId:Object(l.a)(),description:"Vivamus venenatis leo vitae sapien tempus, eleifend.",tags:["Backend","Bug"],tasks:[{taskId:Object(l.a)(),isDone:!1,task:"Phasellus bibendum maximus nulla, faucibus"}],createdAt:"2021-05-19T19:39:33.863Z",lastUpdate:"2021-06-17T19:39:33.863Z"}],j=[{cardId:Object(l.a)(),description:"Duis elementum dictum nibh non hendrerit.",tags:["Frontend","Backend"],tasks:[{taskId:Object(l.a)(),isDone:!1,task:"Donec facilisis consectetur odio vitae porta."},{taskId:Object(l.a)(),isDone:!1,task:"Donec non pulvinar tellus, id tincidunt mi."},{taskId:Object(l.a)(),isDone:!1,task:"Mauris consequat lectus quis."},{taskId:Object(l.a)(),isDone:!1,task:"In hac habitasse."},{taskId:Object(l.a)(),isDone:!0,task:"Nunc elementum dui eu nibh posuere, et mollis nulla tincidunt."},{taskId:Object(l.a)(),isDone:!1,task:"Quisque congue lacus."},{taskId:Object(l.a)(),isDone:!0,task:"Mauris consequat lectus quis."},{taskId:Object(l.a)(),isDone:!1,task:"Ut euismod felis eget quam vestibulum."},{taskId:Object(l.a)(),isDone:!1,task:"Mauris consequat lectus quis."}],createdAt:"2021-05-19T19:39:33.863Z",lastUpdate:"2021-06-19T19:39:33.863Z"},{cardId:Object(l.a)(),description:"Vivamus id nunc ut est condimentum molestie.",tags:["Frontend","Devops"],tasks:[],createdAt:"2021-05-19T19:39:33.863Z",lastUpdate:"2021-06-19T19:39:33.863Z"},{cardId:Object(l.a)(),description:"Nunc blandit maximus accumsan.",tags:["Frontend","Backend"],tasks:[{taskId:Object(l.a)(),isDone:!1,task:"Morbi ut aliquet ante, in fermentum quam. Proin varius sodales magna a posuere."}],createdAt:"2021-05-19T19:39:33.863Z",lastUpdate:"2021-06-04T19:39:33.863Z"},{cardId:Object(l.a)(),description:"In posuere bibendum nulla iaculis gravida.",tags:["QA"],tasks:[{taskId:Object(l.a)(),isDone:!1,task:"Mauris ligula leo, cursus vitae enim non."},{taskId:Object(l.a)(),isDone:!0,task:"Quisque neque ligula, ullamcorper."},{taskId:Object(l.a)(),isDone:!0,task:"Praesent in nulla nec elit tristique eleifend sed eget lacus. Nam cursus odio ut."}],createdAt:"2021-05-19T19:39:33.863Z",lastUpdate:"2021-06-03T19:39:33.863Z"}],O=[{cardId:Object(l.a)(),description:"Etiam bibendum, nisi at vestibulum aliquam.",tags:["QA","Backend"],tasks:[{taskId:Object(l.a)(),isDone:!1,task:"Mauris ligula leo, cursus vitae enim non."},{taskId:Object(l.a)(),isDone:!0,task:"Quisque neque ligula, ullamcorper."},{taskId:Object(l.a)(),isDone:!0,task:"Praesent in nulla nec elit tristique eleifend sed eget lacus. Nam cursus odio ut."}],createdAt:"2021-05-19T19:39:33.863Z",lastUpdate:"2021-05-27T19:39:33.863Z"},{cardId:Object(l.a)(),description:"isDonec posuere interdum posuere.",tags:["Backend"],tasks:[{taskId:Object(l.a)(),isDone:!1,task:"Mauris ligula leo, cursus vitae enim non."},{taskId:Object(l.a)(),isDone:!0,task:"Quisque neque ligula, ullamcorper."},{taskId:Object(l.a)(),isDone:!0,task:"Praesent in nulla nec elit tristique eleifend sed eget lacus. Nam cursus odio ut."}],createdAt:"2021-05-19T19:39:33.863Z",lastUpdate:"2021-05-28T19:39:33.863Z"},{cardId:Object(l.a)(),description:"Nullam nunc magna, tristique ut varius eget.",tags:["Frontend","Backend"],tasks:[{taskId:Object(l.a)(),isDone:!1,task:"Mauris ligula leo, cursus vitae enim non."},{taskId:Object(l.a)(),isDone:!0,task:"Quisque neque ligula, ullamcorper."},{taskId:Object(l.a)(),isDone:!0,task:"Praesent in nulla nec elit tristique eleifend sed eget lacus. Nam cursus odio ut."}],createdAt:"2021-05-19T19:39:33.863Z",lastUpdate:"2021-05-26T19:39:33.863Z"}],x=[{cardId:Object(l.a)(),description:"Cras magna eros, finibus suscipit.",tags:["UX/UI","Business"],tasks:[{taskId:Object(l.a)(),isDone:!0,task:"Quisque neque ligula, ullamcorper."},{taskId:Object(l.a)(),isDone:!0,task:"Praesent in nulla nec elit tristique eleifend sed eget lacus. Nam cursus odio ut."}],createdAt:"2021-05-09T19:39:33.863Z",lastUpdate:"2021-05-13T19:39:33.863Z"},{cardId:Object(l.a)(),description:"Duis dignissim eros at eleifend.",tags:["UX/UI"],tasks:[],createdAt:"2021-05-15T19:39:33.863Z",lastUpdate:"2021-05-16T19:39:33.863Z"},{cardId:Object(l.a)(),description:"pretium et elit.",tags:["Frontend","Backend"],tasks:[],createdAt:"2021-05-14T19:39:33.863Z",lastUpdate:"2021-05-17T19:39:33.863Z"}],g={backlog:{columnId:Object(l.a)(),name:"Backlog",items:f},todo:{columnId:Object(l.a)(),name:"To-do",items:j},doing:{columnId:Object(l.a)(),name:"Doing",items:O},done:{columnId:Object(l.a)(),name:"Done",items:x}},m=Object(a.createContext)();function h(n){var e=n.children,t=Object(a.useReducer)(p,g),i=Object(c.a)(t,2),o=i[0],s=i[1];return Object(r.jsx)(m.Provider,{value:{columns:o,handleDragEnd:function(n){var e=n.source,t=n.destination;if(t){var r=e.droppableId,a=t.droppableId,i=o[r].items.splice(e.index,1),d=Object(c.a)(i,1)[0],u=r===a;return u?s({type:"MOVE_CARD_TO_SAME_COLUMN",payload:{source:e,destination:t,movedItem:d}}):u?void 0:s({type:"MOVE_CARD_TO_ANOTHER_COLUMN",payload:{source:e,destination:t,movedItem:d}})}},createCardOnColumn:function(n,e){console.log(n,e),s({type:"CREATE_CARD",payload:{columnId:n,cardData:e}})},updateCardFromColumn:function(n,e){s({type:"UPDATE_CARD",payload:{columnId:n,cardData:e}})},deleteCardFromColumn:function(n,e){s({type:"DELETE_CARD",payload:{columnId:n,cardId:e}})},toggleTaskIsDone:function(n,e,t){s({type:"TOGGLE_TASK_IS_DONE",payload:{columnId:n,cardId:e,taskId:t}})},addTaskToCard:function(n,e){s({type:"ADD_TASK_TO_CARD",payload:{columnId:n,cardId:e}})},editCardTask:function(n,e,t,r){s({type:"EDIT_CARD_TASK",payload:{columnId:n,cardId:e,taskId:t,taskText:r}})},deleteCardTask:function(n,e,t){s({type:"DELETE_CARD_TASK",payload:{columnId:n,cardId:e,taskId:t}})}},children:e})}var v={columnName:"",columnId:"",cardId:"",description:"",tags:[],tasks:[],createdAt:"",lastUpdate:""};function k(n,e){var t=e.type,r=e.payload;return{OPEN_EDITOR:function(){return Object(u.a)(Object(u.a)({},n),{},{isEditorOpen:!0,currentEditing:Object(u.a)(Object(u.a)({},n.currentEditing),r)})},CLOSE_EDITOR:function(){return{isEditorOpen:!1,currentEditing:v}},EDIT_CARD_DATA:function(){return Object(u.a)(Object(u.a)({},n),{},{currentEditing:Object(u.a)(Object(u.a)({},n.currentEditing),{},Object(d.a)({},r.key,r.value))})}}[t]()||n}var I=Object(a.createContext)();function D(n){var e=n.children,t={isEditorOpen:!1,currentEditing:v},i=Object(a.useReducer)(k,t),o=Object(c.a)(i,2),s=o[0],d=o[1],u=Object(a.useCallback)((function(n){console.log("cardData: ",n),d({type:"OPEN_EDITOR",payload:n})}),[]),l=Object(a.useCallback)((function(){d({type:"CLOSE_EDITOR"})}),[]);return Object(r.jsx)(I.Provider,{value:{editor:s,handleOpenEditor:u,handleCloseEditor:l,handleEditCardData:function(n){var e=n.key,t=n.value;d({type:"EDIT_CARD_DATA",payload:{key:e,value:t}})}},children:e})}var y=t(5),T=t(6);function C(){var n=Object(y.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 36px;\n  background-color: #fff;\n  border-radius: 8px;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  color: #636363;\n  font-size: 14px;\n  border: 1px solid #ccc;\n  transition: 100ms ease-in-out;\n  user-select: none;\n\n  &:hover {\n    border: 1px solid transparent;\n    box-shadow: 0 0 0 0.2rem #0d6efd;\n  }\n\n  &:active {\n    box-shadow: 0 0 0 0.125rem #0d6efd;\n  }\n\n  & > svg {\n    margin-right: 6px;\n  }\n"]);return C=function(){return n},n}function E(){var n=Object(y.a)(["\n  padding-bottom: 4px;\n"]);return E=function(){return n},n}var w=T.b.div(E()),A=T.b.button(C()),_=t(32);function S(n){var e=n.handleOpenEditor;return Object(r.jsx)(w,{children:Object(r.jsxs)(A,{onClick:e,children:[Object(r.jsx)(_.a,{color:"#636363",size:14}),"Add Card"]})})}var N=t(18);function U(){var n=Object(y.a)(["\n  display: flex;\n  padding: 0 16px;\n"]);return U=function(){return n},n}var q=T.b.div(U());function z(){var n=Object(a.useContext)(m),e=n.columns,t=n.handleDragEnd,i=Object(a.useContext)(I).handleOpenEditor,o=Object(a.useMemo)((function(){return Object.entries(e).map((function(n){var e=Object(c.a)(n,2),t=e[0],a=e[1],o=a.name,s=a.items;return Object(r.jsxs)(ne,{children:[Object(r.jsx)(ce,{columnName:o,totalCards:s.length}),Object(r.jsxs)(Yn,{id:t,children:[Object(r.jsx)(S,{handleOpenEditor:function(){return i({columnName:o,columnId:t})}}),s.length?s.map((function(n,e){return Object(r.jsx)(Q,{index:e,columnId:t,cardData:n,handleOpenModal:function(){return i(Object(u.a)({columnName:o,columnId:t},n))}},n.cardId)})):Object(r.jsx)(De,{})]})]},t)}))}),[e,i]);return Object(r.jsx)(N.a,{onDragEnd:function(n){return t(n)},children:Object(r.jsx)(q,{children:o})})}function R(){var n=Object(y.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  margin: 12px 0;\n"]);return R=function(){return n},n}function M(){var n=Object(y.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 8px 12px;\n  min-height: 50px;\n  color: #000;\n  background-color: #fff;\n  user-select: none;\n  box-shadow: ",";\n  width: 100%;\n  border-radius: 8px;\n  transition: 100ms ease-in-out;\n  border: 1px solid transparent;\n\n  &:hover {\n    border: 1px solid transparent;\n    box-shadow: 0 0 0 0.2rem #0d6efd;\n  }\n"]);return M=function(){return n},n}function Z(){var n=Object(y.a)(["\n  display: flex;\n  max-width: 275px;\n  min-width: 275px;\n  height: 100%;\n  margin: 8px 0 0 0;\n  border-top-right-radius: 6px;\n  border-bottom-right-radius: 6px;\n\n  &[data-rbd-drag-handle-context-id] {\n    cursor: default;\n  }\n\n  .options {\n    visibility: hidden;\n  }\n\n  &:hover {\n    .options {\n      visibility: visible;\n    }\n  }\n"]);return Z=function(){return n},n}var P=T.b.div(Z()),F=T.b.div(M(),(function(n){return n.snapshot.isDragging?"rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;":"rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;"})),L=T.b.div(R()),B=t(60);function Q(n){var e=n.index,t=n.columnId,i=n.cardData,o=n.handleOpenModal,s=i.cardId,d=i.description,l=i.tags,b=i.tasks,p=i.createdAt,f=i.lastUpdate,j=Object(a.useState)(!1),O=Object(c.a)(j,2),x=O[0],g=O[1],h=Object(a.useState)(!1),v=Object(c.a)(h,2),k=v[0],I=v[1],D=Object(a.useState)(null),y=Object(c.a)(D,2),T=y[0],C=y[1],E=Object(a.useContext)(m),w=E.addTaskToCard,A=E.editCardTask,_=E.deleteCardFromColumn,S=Object(a.useRef)(null),U=function(n){C(n)},q=Object(a.useCallback)((function(n){var e=S.current,t=!!S.current.contains(n.target);return e&&t&&k||e&&!t?I(!1):void 0}),[k]);return Object(a.useEffect)((function(){if(T){var n=setTimeout((function(){var n=T.columnId,e=T.cardId,t=T.taskId,r=T.inputValue;A(n,e,t,r),C(null)}),1500);return function(){return clearTimeout(n)}}}),[T,A]),Object(a.useEffect)((function(){return document.addEventListener("click",q),function(){document.removeEventListener("click",q)}}),[q]),Object(r.jsx)(N.b,{draggableId:s,index:e,children:function(n,e){return Object(r.jsx)(P,Object(u.a)(Object(u.a)(Object(u.a)({ref:n.innerRef,provided:n,snapshot:e},n.draggableProps),n.dragHandleProps),{},{children:Object(r.jsxs)(F,{snapshot:e,ref:S,children:[Object(r.jsx)(mn,{description:d,isMenuOpen:k,setIsMenuOpen:function(){return I((function(n){return!n}))},handleAddTask:function(){return x||g(!0),w(t,s),void I(!1)},handleEditCard:function(){return I(!1),void o()},handleDeleteCard:function(){return _(t,s)}}),Object(r.jsx)(L,{children:l.map((function(n){return Object(r.jsx)(Ae,{tag:n,children:n},n)}))}),Object(r.jsx)(B.a,{children:x&&Object(r.jsx)(qn,{tasks:b,columnId:t,cardId:s,setCurrentEditingTask:U})}),Object(r.jsx)(tn,{lastUpdate:f,createdAt:p,isTasksListOpen:x,openTasksList:function(){return g((function(n){return!n}))},totalDoneTasks:(a=b,a.reduce((function(n,e){return e.isDone?n+1:n}),0)),totalTasks:b.length})]})}));var a}})}function V(){var n=Object(y.a)(["\n  display: flex;\n  align-items: center;\n  background-color: ",";\n  font-size: 13px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  padding: 3px 6px;\n  border-radius: 6px;\n  cursor: pointer;\n  letter-spacing: 2px;\n\n  & > svg {\n    margin-right: 6px;\n    margin-bottom: 2px;\n  }\n\n  &:hover {\n    box-shadow: 0 0 0 0.1rem #0d6efd;\n  }\n"]);return V=function(){return n},n}function K(){var n=Object(y.a)(["\n  display: flex;\n  align-items: center;\n  font-size: 13px;\n"]);return K=function(){return n},n}function G(){var n=Object(y.a)(["\n  display: flex;\n  align-items: center;\n"]);return G=function(){return n},n}function H(){var n=Object(y.a)(["\n  font-size: 13px;\n"]);return H=function(){return n},n}function X(){var n=Object(y.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n  padding: 8px 0 0 0;\n  margin-top: 6px;\n"]);return X=function(){return n},n}var J=T.b.div(X()),Y=T.b.div(H()),W=T.b.div(G()),$=(T.b.div(K()),T.b.div(V(),(function(n){return n.isTasksListOpen?"#eee":"#fff"}))),nn=t(34),en=t(58);function tn(n){var e,t=n.lastUpdate,a=n.createdAt,i=n.isTasksOpen,o=n.openTasksList,c=n.totalDoneTasks,s=n.totalTasks;return Object(r.jsxs)(J,{children:[Object(r.jsx)(Y,{children:(e=t||a,Object(en.a)(new Date(e),new Date,{addSuffix:!0}))}),Object(r.jsx)(W,{children:Object(r.jsxs)($,{isTasksOpen:i,onClick:o,children:[Object(r.jsx)(nn.a,{}),"".concat(c,"/").concat(s)]})})]})}var rn=t(57);function an(){var n=Object(y.a)(["\n  padding: 8px 16px;\n  transition: background-color 25ms ease-in-out;\n  font-weight: 500;\n  font-size: 13px;\n  color: ",";\n\n  &:hover {\n    background-color: ",";\n    color: #fff;\n    cursor: pointer;\n  }\n"]);return an=function(){return n},n}function on(){var n=Object(y.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 132px;\n  background-color: #fff;\n  position: absolute;\n  top: 29px;\n  right: -7px;\n  border-radius: 4px;\n  overflow: hidden;\n  border-top: 1px solid rgba(0, 0, 0, 0.05);\n  z-index: 2;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,\n    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,\n    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;\n"]);return on=function(){return n},n}function cn(){var n=Object(y.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 32px;\n  min-width: 32px;\n  height: 32px;\n  background-color: ",";\n  border-radius: 50%;\n  transition: background-color 100ms ease-in-out;\n  position: relative;\n  left: 7px;\n  bottom: 3px;\n  cursor: pointer;\n  outline: none;\n\n  &:hover {\n    background-color: #eee;\n  }\n"]);return cn=function(){return n},n}function sn(){var n=Object(y.a)(["\n  position: relative;\n  transition: visibility 100ms ease-in-out;\n"]);return sn=function(){return n},n}function dn(){var n=Object(y.a)(["\n  margin: 0;\n  font-weight: 500;\n  font-size: 14px;\n  padding-right: 12px;\n"]);return dn=function(){return n},n}function un(){var n=Object(y.a)(["\n  display: flex;\n  justify-content: space-between;\n"]);return un=function(){return n},n}var ln=T.b.div(un()),bn=T.b.p(dn()),pn=T.b.div(sn()),fn=T.b.div(cn(),(function(n){return n.isMenuOpen?"#eee":"#fff"})),jn=Object(T.b)(rn.a.ul)(on()),On=T.b.li(an(),(function(n){return n.color?n.color:"#000"}),(function(n){return n.color?n.color:"#0d6efd"})),xn=t(35),gn={initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},transition:{duration:.15},exit:{height:0,opacity:0}};function mn(n){var e=n.description,t=n.setIsMenuOpen,a=n.isMenuOpen,i=n.handleAddTask,o=n.handleEditCard,c=n.handleDeleteCard;return Object(r.jsxs)(ln,{children:[Object(r.jsx)(bn,{children:e}),Object(r.jsxs)(pn,{className:"options",children:[Object(r.jsx)(fn,{onClick:t,isMenuOpen:a,children:Object(r.jsx)(xn.a,{size:24})}),Object(r.jsx)(B.a,{children:a&&Object(r.jsxs)(jn,Object(u.a)(Object(u.a)({},gn),{},{children:[Object(r.jsx)(On,{onClick:i,children:"New Task"}),Object(r.jsx)(On,{onClick:o,children:"Edit Card"}),Object(r.jsx)(On,{onClick:c,color:"#f44336",children:"Delete Card"})]}))})]})]})}function hn(){var n=Object(y.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 16px 10px;\n  text-align: center;\n  font-size: 14px;\n"]);return hn=function(){return n},n}function vn(){var n=Object(y.a)(["\n  position: absolute;\n  top: 6px;\n  right: 5px;\n  width: 14px;\n  height: 14px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  display: none;\n  cursor: pointer;\n  background-color: #f44336;\n\n  & > svg {\n    color: #fff;\n  }\n\n  &:hover {\n    filter: brightness(0.8);\n  }\n"]);return vn=function(){return n},n}function kn(){var n=Object(y.a)(["\n  width: 100%;\n\n  &:hover {\n    & > .removeTask {\n      display: flex;\n    }\n  }\n"]);return kn=function(){return n},n}function In(){var n=Object(y.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: ",";\n  border: 1px solid #0d6efd;\n  width: 16px;\n  min-width: 16px;\n  height: 15px;\n  margin-right: 6px;\n  border-radius: 3px;\n  margin-top: 8px;\n  cursor: pointer;\n  transition: background-color 100ms ease-in-out;\n\n  &:hover {\n    background-color: ",";\n  }\n"]);return In=function(){return n},n}function Dn(){var n=Object(y.a)(["\n  display: flex;\n  padding-bottom: 8px;\n  font-size: 14px;\n  position: relative;\n  overflow: visible;\n"]);return Dn=function(){return n},n}function yn(){var n=Object(y.a)(["\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n  padding-top: 4px;\n  overflow: hidden;\n"]);return yn=function(){return n},n}var Tn=Object(T.b)(rn.a.ul)(yn()),Cn=T.b.div(Dn()),En=T.b.div(In(),(function(n){return n.isDone?"#0d6efd":"#fff"}),(function(n){return n.isDone?"#0d6efd":"#0d6efd23"})),wn=T.b.div(kn()),An=T.b.div(vn()),_n=T.b.div(hn()),Sn=t(36),Nn=t(37),Un={initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},transition:{duration:.25},exit:{height:0,opacity:0}};function qn(n){var e=n.tasks,t=n.columnId,i=n.cardId,o=n.setCurrentEditingTask,c=Object(a.useContext)(m),s=c.toggleTaskIsDone,d=c.deleteCardTask;return Object(r.jsx)(Tn,Object(u.a)(Object(u.a)({},Un),{},{children:e.length?e.map((function(n,e){var a=n.taskId,c=n.isDone,u=n.task;return Object(r.jsxs)(Cn,{children:[Object(r.jsx)(En,{isDone:c,onClick:function(){return s(t,i,a)},children:c&&Object(r.jsx)(Sn.a,{color:"#fff"})}),Object(r.jsxs)(wn,{children:[Object(r.jsx)(Le,{autofocus:0===e&&!u,value:u,id:a,cardId:i,columnId:t,isDone:!!c,handleChange:function(n){return o({columnId:t,cardId:i,taskId:a,inputValue:n.target.value})}}),Object(r.jsx)(An,{className:"removeTask",onClick:function(){return d(t,i,a)},children:Object(r.jsx)(Nn.a,{size:10})})]})]},a)})):Object(r.jsx)(_n,{children:"This story has no tasks yet.\n            You can create one and start working :)"})}))}function zn(){var n=Object(y.a)(["\n  cursor: pointer;\n  background-color: ",";\n  padding-left: ","px;\n  padding-right: ","px;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  color: ",";\n  border: 0;\n  font-size: 12px;\n  border-radius: 4px;\n  transition: 100ms ease-in-out;\n  outline: none;\n  margin-right: 8px;\n  font-weight: 500;\n  letter-spacing: 1px;\n  filter: brightness(",");\n  cursor: ",";\n\n  &:hover {\n    filter: brightness(0.9);\n  }\n\n  &:focus {\n    box-shadow: 0 0 0 0.25rem\n      ",";\n\n    &:active {\n      box-shadow: 0 0 0 0 #fff;\n    }\n  }\n"]);return zn=function(){return n},n}function Rn(){var n=Object(y.a)(["\n  display: flex;\n  justify-content: flex-end;\n"]);return Rn=function(){return n},n}function Mn(){var n=Object(y.a)(["\n  resize: none;\n  margin-bottom: 16px;\n  border: 1px solid #fff;\n  transition: 100ms ease-in-out;\n  outline: none;\n  background-color: #f3f3f4;\n  border-radius: 6px;\n  padding: 10px;\n  height: 100px;\n  font-size: 14px;\n\n  &:hover {\n    border: 1px solid #ccc;\n    box-shadow: 0 0 0 0.25rem rgb(13, 110, 253, 0.1);\n    background-color: #fff;\n  }\n\n  &:focus {\n    box-shadow: 0 0 0 0.25rem rgb(13, 110, 253, 0.35);\n    border: 1px solid rgb(13, 110, 253, 0.6);\n    background-color: #fff;\n  }\n"]);return Mn=function(){return n},n}function Zn(){var n=Object(y.a)(["\n  display: block;\n  text-transform: uppercase;\n  font-size: 11px;\n  margin-bottom: 6px;\n  letter-spacing: 1px;\n"]);return Zn=function(){return n},n}function Pn(){var n=Object(y.a)(["\n  display: block;\n  font-size: 20px;\n  margin-bottom: 16px;\n"]);return Pn=function(){return n},n}function Fn(){var n=Object(y.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 32px;\n"]);return Fn=function(){return n},n}var Ln=T.b.div(Fn()),Bn=T.b.span(Pn()),Qn=T.b.span(Zn()),Vn=T.b.textarea(Mn()),Kn=T.b.div(Rn()),Gn=T.b.button(zn(),(function(n){var e;return(null===(e=n.colors)||void 0===e?void 0:e.background)||"#EEE"}),(function(n){return n.horizontalPadding}),(function(n){return n.horizontalPadding}),(function(n){var e;return(null===(e=n.colors)||void 0===e?void 0:e.font)||"#000"}),(function(n){return n.disabled?"0.8":"1"}),(function(n){return n.disabled?"not-allowed":"pointer"}),(function(n){var e;return(null===(e=n.colors)||void 0===e?void 0:e.shadow)||"rgb(168, 168, 168, 0.35)"}));function Hn(){var n=Object(a.useContext)(m),e=n.createCardOnColumn,t=n.updateCardFromColumn,i=Object(a.useContext)(I),o=i.editor,c=i.handleCloseEditor,s=i.handleEditCardData,d=o.currentEditing,u=d.columnName,l=d.columnId,b=d.cardId,p=d.description,f=d.tags,j=Object(a.useRef)(null),O=function(n){!function(n){({create:function(){return e(l,d)},update:function(){return t(l,d)}})[n]()}(n),c()};return Object(r.jsx)(me,{isModalOpen:o.isEditorOpen,handleCloseEditor:c,children:Object(r.jsxs)(Ln,{children:[Object(r.jsx)(Bn,{children:"".concat(b?"Editing card in":"Creating card in"," ").concat(u)}),Object(r.jsx)(Qn,{children:"Description"}),Object(r.jsx)(Vn,{ref:j,placeholder:"Type a description here",defaultValue:p,onChange:function(n){return s({key:"description",value:n.target.value})}}),Object(r.jsx)(Qn,{children:"Tags"}),Object(r.jsx)(qe,{handleChange:function(n){return s({key:"tags",value:n})},selecteds:f}),Object(r.jsxs)(Kn,{children:[Object(r.jsx)(Gn,{onClick:function(){return c()},horizontalPadding:16,children:"Cancel"}),!b&&Object(r.jsx)(Gn,{onClick:function(){return O("create")},horizontalPadding:32,disabled:!p||!f.length,colors:{background:"#279EFF",font:"#FFF",shadow:"rgb(13, 110, 253, 0.35)"},children:"Create"}),!!b&&Object(r.jsx)(Gn,{onClick:function(){return O("update")},horizontalPadding:32,disabled:!p||!f.length,colors:{background:"#039be5",font:"#FFF",shadow:"rgb(13, 110, 253, 0.35)"},children:"Edit"})]})]})})}function Xn(){var n=Object(y.a)(["\n  background-color: #eee;\n  padding: 12px;\n  margin: 16px 0 12px 0;\n  width: 300px;\n  min-height: 100px;\n  border-radius: 8px;\n  transition: 100ms ease-in-out;\n  overflow: hidden;\n  overflow-anchor: none;\n  position: relative;\n"]);return Xn=function(){return n},n}var Jn=T.b.div(Xn());function Yn(n){var e=n.id,t=n.children;return Object(r.jsx)(N.c,{droppableId:e,children:function(n,e){return Object(r.jsxs)(Jn,Object(u.a)(Object(u.a)({ref:n.innerRef,isDraggingOver:e.isDraggingOver},n.droppableProps),{},{children:[t,n.placeholder]}))}})}function Wn(){var n=Object(y.a)(["\n  margin-right: 3px;\n  background-color: #fff;\n  border-radius: 6px;\n  height: fit-content;\n  padding: 0 12px;\n"]);return Wn=function(){return n},n}var $n=T.b.div(Wn());function ne(n){var e=n.children;return Object(a.useEffect)((function(){console.log("renderizou o Column")})),Object(r.jsx)($n,{children:e})}function ee(){var n=Object(y.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0;\n  border-radius: 6px;\n  color: #000;\n  min-width: 24px;\n  height: 24px;\n  user-select: none;\n  font-weight: 500;\n"]);return ee=function(){return n},n}function te(){var n=Object(y.a)(["\n  margin: 0;\n  font-size: 16px;\n  color: #000;\n  user-select: none;\n  font-weight: 500;\n"]);return te=function(){return n},n}function re(){var n=Object(y.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 0 0 0;\n"]);return re=function(){return n},n}var ae=T.b.div(re()),ie=T.b.span(te()),oe=T.b.span(ee());function ce(n){var e=n.columnName,t=n.totalCards;return Object(r.jsxs)(ae,{children:[Object(r.jsx)(ie,{children:e}),Object(r.jsx)(oe,{children:t})]})}function se(){var n=Object(y.a)([""]);return se=function(){return n},n}function de(){var n=Object(y.a)(["\n  width: 500px;\n  min-height: 300px;\n  background-color: #fff;\n  border-radius: 12px;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,\n    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;\n  z-index: 3;\n"]);return de=function(){return n},n}function ue(){var n=Object(y.a)(["\n  background-color: rgba(0, 0, 0, 0.55);\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n"]);return ue=function(){return n},n}function le(){var n=Object(y.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 3;\n"]);return le=function(){return n},n}var be=T.b.div(le()),pe=Object(T.b)(rn.a.div)(ue()),fe=Object(T.b)(rn.a.div)(de()),je=Object(T.b)(rn.a.div)(se()),Oe={initial:{opacity:0},animate:{opacity:1},exit:{opacity:0,transition:{delay:.05}},transition:{duration:.2}},xe={initial:{scale:0},animate:{scale:1},exit:{scale:0},transition:{duration:.2}},ge={initial:{opacity:0},animate:{opacity:1},exit:{opacity:0,transition:{delay:-1}},transition:{duration:.5}};function me(n){var e=n.children,t=n.isModalOpen,a=n.handleCloseEditor,i=Oe,o=xe,c=ge;return Object(r.jsx)(B.a,{children:t&&Object(r.jsxs)(be,{children:[Object(r.jsx)(pe,Object(u.a)(Object(u.a)({},i),{},{onClick:a})),Object(r.jsx)(fe,Object(u.a)(Object(u.a)({},o),{},{children:Object(r.jsx)(je,Object(u.a)(Object(u.a)({},c),{},{children:e}))}))]})})}function he(){var n=Object(y.a)(["\n  text-align: center;\n  font-size: 13px;\n  padding: 16px;\n  user-select: none;\n"]);return he=function(){return n},n}function ve(){var n=Object(y.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return ve=function(){return n},n}var ke=T.b.div(ve()),Ie=T.b.span(he());function De(){return Object(r.jsx)(ke,{children:Object(r.jsx)(Ie,{children:"Nenhum card nesta coluna. Arraste at\xe9 aqui ou crie um novo."})})}var ye={Frontend:{color:"#1976d2",background:"#1976d225"},Backend:{color:"#4caf50",background:"#e8f5e9"},"UX/UI":{color:"#7b1fa2",background:"#7b1fa225"},Devops:{color:"#5d4037",background:"#5d403725"},Business:{color:"#f57c00",background:"#f57c0025"},Bug:{color:"#d32f2f",background:"#d32f2f25"},QA:{color:"#827717",background:"#82771725"}};function Te(){var n=Object(y.a)(["\n  position: relative;\n  left: 6px;\n  width: 26px;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  color: #f44336;\n  border-top-right-radius: 10px;\n  border-bottom-right-radius: 10px;\n  background-color: #ffcdd2;\n\n  & > svg {\n    color: #f44336;\n  }\n\n  &:hover {\n    & > svg {\n      filter: brightness(0.8);\n    }\n  }\n"]);return Te=function(){return n},n}function Ce(){var n=Object(y.a)(["\n  padding: 0 4px;\n  border-radius: 50%;\n  position: relative;\n  left: 8px;\n  width: 18px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  &:hover {\n    background-color: ",";\n    filter: brightness(0.8);\n  }\n"]);return Ce=function(){return n},n}function Ee(){var n=Object(y.a)(["\n  padding: 2px 12px;\n  margin: 0 6px 6px 0;\n  border-radius: 10px;\n  font-size: 12px;\n  font-weight: 500;\n  background-color: ",";\n  color: ",";\n  display: flex;\n  align-items: center;\n  position: relative;\n  transition: 100ms ease-in-out;\n  box-shadow: ",";\n"]);return Ee=function(){return n},n}var we=T.b.div(Ee(),(function(n){var e;return(null===(e=ye[null===n||void 0===n?void 0:n.tag])||void 0===e?void 0:e.background)||"#fff"}),(function(n){var e;return(null===(e=ye[null===n||void 0===n?void 0:n.tag])||void 0===e?void 0:e.color)||"#fff"}),(function(n){return n.isFocused?"0 0 0 0.25rem rgb(13, 110, 253, 0.35)":""}));T.b.div(Ce(),(function(n){var e;return(null===(e=ye[null===n||void 0===n?void 0:n.tag])||void 0===e?void 0:e.background)||"#fff"})),T.b.div(Te());function Ae(n){var e=n.children,t=n.tag;return Object(r.jsx)(we,{tag:t,className:"tag",children:e})}function _e(){var n=Object(y.a)(["\n  width: fit-content;\n  border-radius: 10px;\n  background-color: ",";\n  color: ",";\n  box-shadow: ",";\n  padding: 2px 12px;\n  margin: 3px 11px 8px 0;\n  font-size: 12px;\n  cursor: pointer;\n  transition: 100ms ease-in-out;\n  user-select: none;\n  font-weight: 500;\n  border: 1px solid transparent;\n  border-color: ",";\n\n  &:hover {\n    border-color: ",";\n    box-shadow: 0 0 0 0.25rem rgb(13, 110, 253, 0.1);\n  }\n\n  &:focus {\n    box-shadow: 0 0 0 0.25rem rgb(13, 110, 253, 0.35);\n    border: 1px solid rgb(13, 110, 253, 0.6);\n  }\n"]);return _e=function(){return n},n}function Se(){var n=Object(y.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  margin-bottom: 32px;\n  padding-right: 24px;\n"]);return Se=function(){return n},n}var Ne=T.b.div(Se()),Ue=T.b.div(_e(),(function(n){return n.background?n.background:""}),(function(n){return n.color?n.color:""}),(function(n){return n.isSelected?"0 0 0 0.25rem rgb(13, 110, 253, 0.35)":""}),(function(n){return n.isSelected?"rgb(13, 110, 253, 0.6)":""}),(function(n){return n.isSelected?"rgb(13, 110, 253, 0.6)":"#ccc"}));function qe(n){var e=n.handleChange,t=n.selecteds,i=Object(a.useState)([]),o=Object(c.a)(i,2),s=o[0],d=o[1];return Object(a.useEffect)((function(){var n=Object.entries(ye).map((function(n){var e=Object(c.a)(n,2),t=e[0],r=e[1];return Object(u.a)(Object(u.a)({tagName:t},r),{},{isSelected:!1})})).map((function(n){return t.includes(n.tagName)?Object(u.a)(Object(u.a)({},n),{},{isSelected:!0}):n}));d(n)}),[t]),Object(r.jsx)(Ne,{children:s.map((function(n){var t=n.tagName,a=n.isSelected,i=n.color,o=n.background;return Object(r.jsx)(Ue,{onClick:function(){return function(n){var t=n.tagName,r=s.map((function(n){return n.tagName===t?Object(u.a)(Object(u.a)({},n),{},{isSelected:!n.isSelected}):n}));d(r);var a=r.filter((function(n){return!!n.isSelected})).map((function(n){return n.tagName}));e(a)}({tagName:t})},isSelected:a,color:i,background:o,children:t},t)}))})}var ze=t(38),Re=t.n(ze);function Me(){var n=Object(y.a)(["\n  min-height: 36px;\n  width: 100%;\n  margin: 4px 2px;\n  padding: 0 4px;\n  resize: none;\n  border: none;\n  outline: none;\n  font-family: inherit;\n  overflow: hidden;\n  box-sizing: content-box;\n  transition: box-shadow 100ms ease-in-out;\n  font-size: 13px;\n\n  &:hover {\n    box-shadow: 0 0 0 0.1rem rgba(0, 0, 0, 0.1);\n  }\n\n  &:focus {\n    box-shadow: 0 0 0 0.1rem #000;\n  }\n"]);return Me=function(){return n},n}function Ze(){var n=Object(y.a)(["\n  display: flex;\n  width: 100%;\n  text-decoration: ",";\n"]);return Ze=function(){return n},n}var Pe=T.b.div(Ze(),(function(n){return n.isDone?"line-through":"none"})),Fe=Object(T.b)(Re.a)(Me());function Le(n){var e=n.value,t=n.handleChange,i=n.autofocus,o=n.isDone,c=Object(a.useRef)(null);return Object(a.useEffect)((function(){i&&c.current.focus()}),[i]),Object(r.jsx)(Pe,{isDone:o,children:Object(r.jsx)(Fe,{ref:c,async:!0,defaultValue:e,onChange:t})})}function Be(){var n=Object(y.a)(["\n  html,\n  body,\n  #root {\n    min-height: 100vh;\n  }\n\n  body {\n    font-family: 'Poppins', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    margin: 0;\n    padding: 0;\n    background-color: #FFF;\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n\n  ul {\n    margin: 0;\n    padding: 0;\n  }\n\n  li {\n    margin: 0;\n    padding: 0;\n    list-style-type: none;\n  }\n\n  button, textarea {\n    font-family: inherit;\n  }\n"]);return Be=function(){return n},n}var Qe=Object(T.a)(Be());function Ve(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(z,{}),Object(r.jsx)(Hn,{}),Object(r.jsx)(Qe,{})]})}o.a.render(Object(r.jsx)(a.StrictMode,{children:Object(r.jsx)(h,{children:Object(r.jsx)(D,{children:Object(r.jsx)(Ve,{})})})}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.75be85eb.chunk.js.map