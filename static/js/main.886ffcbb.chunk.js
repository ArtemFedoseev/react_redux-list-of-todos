(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{26:function(e,t,c){},27:function(e,t,c){"use strict";c.r(t);var n=c(7),a=c.n(n),s=c(2),r=c(15),o=c(6),i=c(12),l=c(13),d={setTodo:function(e){return{type:"currentTodo/SET",payload:e}},removeTodo:function(){return{type:"currentTodo/REMOVE"}}},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"currentTodo/SET":return t.payload;case"currentTodo/REMOVE":return null;default:return e}},u=c(4),b=function(e){return{type:"filterStatus/SET",payload:e}},h=function(e){return{type:"filterQuery/SET",payload:e}},O=function(){return{type:"filterQuery/CLEAR"}},f={query:"",status:"all"},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"filterStatus/SET":return Object(u.a)(Object(u.a)({},e),{},{status:t.payload});case"filterQuery/SET":return Object(u.a)(Object(u.a)({},e),{},{query:t.payload});case"filterQuery/CLEAR":return Object(u.a)(Object(u.a)({},e),{},{query:""});default:return e}},x=function(e){return{type:"todos.SET",payload:e}},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"todos.SET"===t.type?t.payload:e},v=Object(o.combineReducers)({currentTodo:j,filter:m,todos:p}),y=Object(o.createStore)(v,Object(i.composeWithDevTools)(Object(o.applyMiddleware)(l.a))),N=c(5),g=c(0),T=(c(23),c(24),c(14)),S=c.n(T),E=c(1),w=function(e){var t=e.completed,c=e.title,n=e.id,a=Object(s.c)();return Object(E.jsxs)("tr",{"data-cy":"todo",children:[Object(E.jsx)("td",{className:"is-vcentered",children:n}),Object(E.jsx)("td",{className:"is-vcentered",children:t&&Object(E.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(E.jsx)("i",{className:"fas fa-check"})})}),Object(E.jsx)("td",{className:"is-vcentered is-expanded",children:Object(E.jsx)("p",{className:S()({"has-text-success":t},{"has-text-danger":!t}),children:c})}),Object(E.jsx)("td",{className:"has-text-right is-vcentered",children:Object(E.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){a(d.setTodo(Object(u.a)({},e)))},children:Object(E.jsx)("span",{className:"icon",children:Object(E.jsx)("i",{className:"far fa-eye"})})})})]})},k=Object(s.b)((function(e){return{todos:e.todos,filter:e.filter}})),C=k((function(e){var t=e.todos,c=e.filter,n=function(e,t,c){return e.filter((function(e){switch(t){case"active":return!e.completed;case"completed":return e.completed;default:return!0}})).filter((function(e){return""===c||e.title.includes(c)}))}(t,c.status,c.query);return Object(E.jsxs)(E.Fragment,{children:[0===n.length&&Object(E.jsx)("p",{className:"notification is-warning",children:"There are no todos matching current filter criteria"}),Object(E.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(E.jsx)("thead",{children:Object(E.jsxs)("tr",{children:[Object(E.jsx)("th",{children:"#"}),Object(E.jsx)("th",{children:Object(E.jsx)("span",{className:"icon",children:Object(E.jsx)("i",{className:"fas fa-check"})})}),Object(E.jsx)("th",{children:"Title"}),Object(E.jsx)("th",{children:" "})]})}),Object(E.jsx)("tbody",{children:n.map((function(e){return Object(E.jsx)(w,Object(u.a)({},e),e.id)}))})]})]})})),q=(s.c,s.d),R=function(){var e=Object(s.c)(),t=q((function(e){return e.filter})),c=t.query,n=t.status;return Object(E.jsxs)("form",{className:"field has-addons",onSubmit:function(e){return e.preventDefault()},children:[Object(E.jsx)("p",{className:"control",children:Object(E.jsx)("span",{className:"select",children:Object(E.jsxs)("select",{"data-cy":"statusSelect",value:n,onChange:function(t){var c=function(e){switch(e){case"completed":case"active":return e;default:return"all"}}(t.target.value);e(b(c))},children:[Object(E.jsx)("option",{value:"all",children:"All"}),Object(E.jsx)("option",{value:"active",children:"Active"}),Object(E.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(E.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(E.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:c,onChange:function(t){e(h(t.target.value))}}),Object(E.jsx)("span",{className:"icon is-left",children:Object(E.jsx)("i",{className:"fas fa-magnifying-glass"})}),""!==c&&Object(E.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(E.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){e(O())}})})]})]})},_=(c(26),function(){return Object(E.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(E.jsx)("div",{className:"Loader__content"})})});function A(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){if(e.ok)return e.json();throw new Error("Failed fetching")}))}var L={removeTodo:d.removeTodo},Q=Object(s.b)((function(e){return{todo:e.currentTodo}}),L)((function(e){var t=e.todo,c=e.removeTodo,n=Object(s.c)(),a=Object(g.useState)(null),r=Object(N.a)(a,2),o=r[0],i=r[1],l=Object(g.useState)(""),d=Object(N.a)(l,2),j=d[0],u=d[1];return Object(g.useEffect)((function(){var e;t&&(e=null===t||void 0===t?void 0:t.userId,A("/users/".concat(e))).then((function(e){return i(e)})).catch((function(){return u("Something went wrong")}))}),[]),Object(E.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(E.jsx)("div",{className:"modal-background"}),o?Object(E.jsxs)("div",{className:"modal-card",children:[Object(E.jsxs)("header",{className:"modal-card-head",children:[Object(E.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #3"}),Object(E.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){n(c())}})]}),Object(E.jsxs)("div",{className:"modal-card-body",children:[Object(E.jsx)("p",{className:"block","data-cy":"modal-title",children:null===t||void 0===t?void 0:t.title}),Object(E.jsxs)("p",{className:"block","data-cy":"modal-user",children:[null!==t&&void 0!==t&&t.completed?Object(E.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(E.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",!j&&Object(E.jsx)("a",{href:"mailto:".concat(o.email),children:o.name})]})]})]}):Object(E.jsx)(_,{})]})})),B=function(){var e=Object(g.useState)(!1),t=Object(N.a)(e,2),c=t[0],n=t[1],a=Object(s.c)(),r=q((function(e){return e.todos})),o=q((function(e){return e.currentTodo}));return Object(g.useEffect)((function(){A("/todos").then((function(e){a(x(e))})).catch((function(){return n(!0)}))}),[]),Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("div",{className:"section",children:Object(E.jsx)("div",{className:"container",children:Object(E.jsxs)("div",{className:"box",children:[Object(E.jsx)("h1",{className:"title",children:"Todos:"}),Object(E.jsx)("div",{className:"block",children:Object(E.jsx)(R,{})}),Object(E.jsxs)("div",{className:"block",children:[0===r.length?Object(E.jsx)(_,{}):Object(E.jsx)(C,{}),c&&"Something went wrong"]})]})})}),o&&Object(E.jsx)(Q,{})]})},D=function(){return Object(E.jsx)(s.a,{store:y,children:Object(E.jsx)(r.a,{children:Object(E.jsx)(B,{})})})};a.a.render(Object(E.jsx)(D,{}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.886ffcbb.chunk.js.map