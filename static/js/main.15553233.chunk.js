(this["webpackJsonptodo-material"]=this["webpackJsonptodo-material"]||[]).push([[0],{119:function(e,t,c){},144:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),r=c(24),i=c.n(r),o=c(197),s=c(201),l=c(198),j=c(195),d=c(12),u=c(192),b=c(189),O=c(91),f=c.n(O),p=c(56),x=c.n(p),h=c(57),m=c.n(h),v=c(2),y=function(e){var t=e.addTask,c=a.a.useState(""),n=Object(d.a)(c,2),r=n[0],i=n[1],o=a.a.useState(!1),s=Object(d.a)(o,2),l=s[0],O=s[1];return Object(v.jsxs)("div",{className:"field",children:[Object(v.jsx)(u.a,{checked:l,onChange:function(e){return O(e.target.checked)},className:"checkbox",icon:Object(v.jsx)(x.a,{}),checkedIcon:Object(v.jsx)(m.a,{})}),Object(v.jsx)(b.a,{value:r,onChange:function(e){return i(e.target.value)},placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442 \u0437\u0430\u0434\u0430\u0447\u0438...",variant:"standard",fullWidth:!0}),Object(v.jsx)(j.a,{onClick:function(){t(r,l),i(""),O(!1)},children:Object(v.jsx)(f.a,{})})]})},E=c(193),k=c(196),T=c(199),S=c(92),g=c.n(S),L=c(93),A=c.n(L),_=function(e){var t=e.text,c=e.completed,n=e.removeTask,a=e.toggleCompleted;return Object(v.jsx)(E.a,{children:Object(v.jsxs)("div",{className:"d-flex item",children:[Object(v.jsx)(u.a,{onChange:a,checked:c,icon:Object(v.jsx)(x.a,{}),checkedIcon:Object(v.jsx)(m.a,{})}),Object(v.jsx)(k.a,{className:"item-text",children:t}),Object(v.jsxs)("div",{className:"item-buttons d-flex",children:[Object(v.jsx)(T.a,{children:Object(v.jsx)(g.a,{style:{fontSize:20}})}),Object(v.jsx)(T.a,{onClick:n,children:Object(v.jsx)(A.a,{style:{fontSize:20}})})]})]})})},C=c(37),D=c(191),M=c(200),N=function(){var e=Object(C.b)(),t=Object(C.c)((function(e){return e.filter.filterBy})),c=["all","active","completed"];return Object(v.jsxs)(D.a,{onChange:function(t,n){var a=c[n];e(function(e){return{type:"SET_FILTER",payload:e}}(a))},value:c.findIndex((function(e){return e===t})),children:[Object(v.jsx)(M.a,{label:"\u0412\u0441\u0435"}),Object(v.jsx)(M.a,{label:"\u0410\u043a\u0442\u0438\u0432\u043d\u044b\u0435"}),Object(v.jsx)(M.a,{label:"\u0417\u0430\u0432\u0435\u0440\u0448\u0451\u043d\u043d\u044b\u0435"})]})},w=c(74),B=c(96);var K=function(){var e=Object(C.b)(),t=Object(C.c)((function(e){return e}));return a.a.useEffect((function(){e(function(){var e=Object(B.a)(Object(w.a)().mark((function e(t){var c,n;return Object(w.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://62cd07e7a43bf78008509237.mockapi.io/users");case 2:if(!(c=e.sent).ok){e.next=8;break}return e.next=6,c.json();case 6:return n=e.sent,e.abrupt("return",t({type:"SET_TASKS",payload:n}));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(v.jsx)("div",{className:"App",children:Object(v.jsxs)(o.a,{className:"wrapper",children:[Object(v.jsx)(o.a,{className:"header",elevation:0,children:Object(v.jsx)("h4",{children:"\u0421\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u0434\u0430\u0447"})}),Object(v.jsx)(y,{addTask:function(t,c){e(function(e,t){return{type:"ADD_TASK",payload:{text:e,completed:t}}}(t,c))}}),Object(v.jsx)(s.a,{}),Object(v.jsx)(N,{}),Object(v.jsx)(s.a,{}),Object(v.jsx)(l.a,{children:t.tasks.filter((function(e){return"all"===t.filter.filterBy||("active"===t.filter.filterBy?!e.completed:"completed"===t.filter.filterBy?e.completed:void 0)})).map((function(t){return Object(v.jsx)(_,{text:t.text,completed:t.completed,removeTask:function(){return c=t.id,void(window.confirm("\u0412\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0442\u0430\u0441\u043a\u0443 ".concat(c," ?"))&&e(function(e){return{type:"REMOVE_TASK",payload:e}}(c)));var c},toggleCompleted:function(){return c=t.id,void e(function(e){return{type:"TOGGLE_COMPLETED",payload:e}}(c));var c}},t.id)}))}),Object(v.jsx)(s.a,{}),Object(v.jsxs)("div",{className:"check-buttons",children:[Object(v.jsx)(j.a,{onClick:function(){e({type:"ALL_COMPLETED"})},children:"\u041e\u0442\u043c\u0435\u0442\u0438\u0442\u044c \u0432\u0441\u0451"}),Object(v.jsx)(j.a,{onClick:function(){e({type:"ALL_REMOVE"})},children:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c"})]})]})})},I=(c(119),c(61)),R=c(28),G=c(15),P=[{id:1,text:"Hello1",completed:!1}],V={filterBy:"all"},z=c(97),F=c.n(z),J=c(98),H=Object(I.b)({tasks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TASKS":return t.payload;case"ADD_TASK":return[].concat(Object(G.a)(e),[{id:e.length+1,text:t.payload.text,completed:t.payload.completed}]);case"REMOVE_TASK":return e.filter((function(e){return e.id!==t.payload}));case"ALL_REMOVE":return[];case"TOGGLE_COMPLETED":return e.map((function(e){return e.id===t.payload?Object(R.a)(Object(R.a)({},e),{},{completed:!e.completed}):e}));case"ALL_COMPLETED":return e.map((function(e){return Object(R.a)(Object(R.a)({},e),{},{completed:!0})}));default:return e}},filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;return"SET_FILTER"===t.type?Object(R.a)(Object(R.a)({},e),{},{filterBy:t.payload}):e}}),W=Object(I.c)(H,Object(I.a)(J.a,(function(e){return function(e){return function(t){return"ADD_TASK"===t.type?(F.a.post("https://62cd07e7a43bf78008509237.mockapi.io/users",t.payload),void setTimeout((function(){e(t)}),2e3)):e(t)}}})));i.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(C.a,{store:W,children:Object(v.jsx)(K,{})})}),document.getElementById("root"))}},[[144,1,2]]]);
//# sourceMappingURL=main.15553233.chunk.js.map