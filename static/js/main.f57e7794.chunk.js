(this.webpackJsonpquizproject=this.webpackJsonpquizproject||[]).push([[0],{11:function(e,t,c){},18:function(e,t,c){},27:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c(1),r=c.n(i),s=c(19),o=c.n(s),a=(c(27),c(4)),l=function(){return Object(n.jsxs)("nav",{className:" navbar navbar-expand-lg navbar-dark navbar-custom",children:[Object(n.jsx)(a.b,{className:"navbar-brand",to:"/",children:"Quiz"}),Object(n.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(n.jsx)("span",{className:"navbar-toggler-icon"})}),Object(n.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(n.jsxs)("ul",{className:"navbar-nav",children:[Object(n.jsx)("li",{class:"nav-item active",children:Object(n.jsxs)(a.b,{className:"nav-link",to:"/",children:["Home",Object(n.jsx)("span",{class:"sr-only",children:"(current)"})]})}),Object(n.jsx)("li",{class:"nav-item",children:Object(n.jsx)(a.b,{className:"nav-link ",to:"/instructions",children:"Instructions"})}),Object(n.jsx)("li",{class:"nav-item",children:Object(n.jsx)(a.b,{className:"nav-link ",to:"/about",children:"About"})}),Object(n.jsx)("li",{class:"nav-item",children:Object(n.jsx)(a.b,{className:"nav-link ",to:"/quiz",children:"Quiz"})})]})})]})},d=(c(11),function(){return Object(n.jsx)("div",{className:"footer",children:Object(n.jsx)("p",{className:"footer-content",children:"copyRight@2021"})})}),u=function(){return Object(n.jsxs)("div",{className:"text-center",children:[Object(n.jsx)("h1",{className:"text-center home",children:"Welcome to the quiz site"}),Object(n.jsx)(a.b,{className:"btn btn-success col-sm-2",to:{pathname:"/quiz"},children:"Play now!"}),Object(n.jsx)("br",{}),Object(n.jsx)("small",{children:"It is recommended to read the instructions first!"})]})},j=function(){return Object(n.jsxs)("div",{className:"text-center",children:[Object(n.jsx)("h1",{children:"Instructions:"}),Object(n.jsx)("br",{}),Object(n.jsx)("p",{children:"1.You have to complete the quiz in the given time slot."}),Object(n.jsx)("hr",{}),Object(n.jsx)("p",{children:"2.You can use the Previous button to go on previous question"}),Object(n.jsx)("hr",{}),Object(n.jsx)("p",{children:"3.You can use the Next button to go on next question"}),Object(n.jsx)("hr",{}),Object(n.jsx)("p",{children:"4.Once completed,click on finish to view the result"}),Object(n.jsx)("hr",{}),Object(n.jsx)("p",{children:"5.If times up quiz will automatically take you to the last question and click on finish to view the reult"}),Object(n.jsx)(a.b,{className:"btn btn-success col-sm-2",to:{pathname:"/quiz"},children:"Start"})]})},b=function(){return Object(n.jsx)("div",{className:"about-div",children:Object(n.jsxs)("p",{class:"text-center about",children:["This quiz test is just to provide you an opportunity to judge your general knowledge.If you feel that any answer/question is wrong you are free to contact us:",Object(n.jsx)("br",{}),"Ph no.:XXXXXXXXXXX",Object(n.jsx)("br",{}),"email id:XXXXXXXXX"]})})},h=c(9),m=c(12),x=c(21),O=[{id:1,question:"Capital of Denmark is",options:[{title:"Copenhagen",correct:!0},{title:"Athens",correct:!1},{title:"Buenos Aires",correct:!1},{title:"Hungary",correct:!1}]},{id:2,question:"Longest river in world",options:[{title:"Amazon",correct:!1},{title:"Yangtze",correct:!1},{title:"Nile",correct:!0},{title:"Thames",correct:!1}]},{id:3,question:"Largest river in world",options:[{title:"Amazon",correct:!0},{title:"Yangtze",correct:!1},{title:"Nile",correct:!1},{title:"Thames",correct:!1}]},{id:4,question:"Largest ocean of the world",options:[{title:"Indian Ocean",correct:!1},{title:"Pacific Ocean",correct:!0},{title:"Arabian Sea",correct:!1},{title:"Caribbean Sea",correct:!1}]},{id:5,question:"smallest city in the world",options:[{title:"Vatican City",correct:!0},{title:"Vietnam",correct:!1},{title:"Kapurthala",correct:!1},{title:"Chile",correct:!1}]},{id:6,question:"Currancy of Dubai",options:[{title:"Rupees",correct:!1},{title:"Dirham",correct:!0},{title:"Yen",correct:!1},{title:"UAE rupees",correct:!1}]},{id:7,question:"how many states in India",options:[{title:"34",correct:!1},{title:"20",correct:!1},{title:"25",correct:!1},{title:"29",correct:!0}]},{id:8,question:"Tallest mountain in the world",options:[{title:"Makalu",correct:!1},{title:"Mount Everest",correct:!0},{title:"Himalaya",correct:!1},{title:"Annapurna",correct:!1}]},{id:9,question:"Capital of Russia",options:[{title:"Moscow",correct:!0},{title:"Rome",correct:!1},{title:"Los Angles",correct:!1},{title:" Chichago",correct:!1}]},{id:10,question:"Most populous country",options:[{title:"India",correct:!1},{title:"Pakistan",correct:!1},{title:"Japan",correct:!1},{title:"China",correct:!0}]}],v=(c(18),function(){var e=Object(i.useState)(0),t=Object(m.a)(e,2),c=t[0],r=t[1],s=Object(i.useState)(O),o=Object(m.a)(s,2),l=o[0],d=o[1],u=Object(i.useState)({correct:0,false:0}),j=Object(m.a)(u,2),b=j[0],v=j[1],p=l[c],f=(p.id,p.question),g=p.options,N=new Date;N.setSeconds(N.getSeconds()+1800);var y=Object(x.useTimer)({expiryTimestamp:N,onExpire:function(){return r(l.length-1)}}),w=y.seconds,q=y.minutes,k=y.hours;Object(i.useEffect)((function(){!function(){var e=l.filter((function(e){return e.selected})).filter((function(e){return e.options.find((function(e){return e.correct&&e.selected===e.correct}))}));v({correct:e.length,false:l.length-e.length})}()}),[l]);return Object(n.jsxs)("div",{children:[Object(n.jsxs)("h2",{className:"text-center mb-3 mt-3",children:["Quiz Screen - Score: ",b.correct," - ",b.false+b.correct," Timer: ",k,":",q,":",w]}),Object(n.jsx)("div",{className:"card mb-3",children:Object(n.jsx)("div",{className:"card-body design",children:l.map((function(e,t){return Object(n.jsx)("div",{className:"border border-primary font-weight-bold ",style:{display:"flex",alignSelf:"center",justifyContent:"center",alignItems:"center",height:40,width:40,marginRight:15,marginBottom:10,borderRadius:5,cursor:"pointer",backgroundColor:t===c?"greenyellow ":(null===e||void 0===e?void 0:e.selected)?"grey":"transparent"},onClick:function(){return r(t)},children:t+1},t)}))})}),Object(n.jsxs)("div",{className:"card",children:[Object(n.jsxs)("div",{className:"card-header bg-white font-weight-bold",children:[c+1,". ",f]}),Object(n.jsx)("div",{className:"card-body",children:g.map((function(e,t){return Object(n.jsxs)("div",{className:"card-body-div",children:[Object(n.jsx)("div",{style:{height:20,width:20,borderRadius:100,backgroundColor:(null===e||void 0===e?void 0:e.selected)?"blue":"grey",cursor:"pointer",marginRight:5},onClick:function(){return e=c,n=t,void d(l.map((function(t,c){return c===e?Object(h.a)(Object(h.a)({},t),{},{selected:!0,options:g.map((function(e,t){return t===n?Object(h.a)(Object(h.a)({},e),{},{selected:!0}):Object(h.a)(Object(h.a)({},e),{},{selected:!1})}))}):t})));var e,n}}),e.title]},t)}))})]}),Object(n.jsxs)("div",{className:"quizdiv",children:[Object(n.jsx)("button",{className:"btn btn-info col-sm-2",onClick:function(){0!==c&&r(c-1)},disabled:0===c,children:"Previous"}),l.length-1===c?Object(n.jsx)(a.b,{className:"btn btn-success col-sm-2",to:{pathname:"/summary",state:{quiz:l,score:b}},children:"Finish"}):Object(n.jsx)("button",{className:"btn btn-primary col-sm-2",onClick:function(){l.length-1!==c&&r(c+1)},children:"Next"})]})]})}),p=c(2),f=function(e){var t=e.location,c=Object(p.f)();return Object(i.useEffect)((function(){t.state||c.push("/")}),[]),t.state?Object(n.jsxs)("div",{className:"mt-3",children:[Object(n.jsxs)("h1",{className:"head",children:["Quiz Summary Score:"," ",Object(n.jsx)("div",{className:"text-success",children:t.state.score.correct}),"-"," ",Object(n.jsxs)("div",{className:"text-danger",children:[" ",t.state.score.false+t.state.score.correct]})]}),t.state.quiz.map((function(e,t){var c,i;return Object(n.jsxs)("div",{className:"card mb-3",children:[Object(n.jsxs)("div",{className:"card-header bg-white",children:[Object(n.jsxs)("div",{className:"font-weight-bold",children:["No.",t+1]})," ",e.question]}),Object(n.jsx)("div",{className:"card-body",children:e.options.map((function(e,t){return Object(n.jsxs)("div",{className:"card-body-div",children:[Object(n.jsx)("div",{style:{height:20,width:20,borderRadius:100,backgroundColor:(null===e||void 0===e?void 0:e.selected)?"blue":"grey",cursor:"pointer",marginRight:5}}),e.title]},t)}))}),Object(n.jsx)("div",{className:"card-footer bg-white",children:e.options.find((function(e){return e.correct&&e.selected===e.correct}))?Object(n.jsxs)("div",{className:"text-success",children:["Your Answer: ",e.options.find((function(e){return e.correct})).title]}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:"text-danger",children:["Your Answer :"," ",null!==(c=null===(i=e.options.find((function(e){return e.selected})))||void 0===i?void 0:i.title)&&void 0!==c?c:"You don't answer this question"]}),Object(n.jsxs)("div",{className:"text-success",children:["Correct Answer :"," ",e.options.find((function(e){return e.correct})).title]})]})})]},t)}))]}):Object(n.jsx)("h1",{children:"Forbidden"})},g=function(){return Object(n.jsxs)(a.a,{children:[Object(n.jsx)(l,{}),Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)(p.c,{children:[Object(n.jsx)(p.a,{exact:!0,path:"/",component:u}),Object(n.jsx)(p.a,{exact:!0,path:"/instructions",component:j}),Object(n.jsx)(p.a,{exact:!0,path:"/about",component:b}),Object(n.jsx)(p.a,{exact:!0,path:"/quiz",component:v}),Object(n.jsx)(p.a,{exact:!0,path:"/summary",component:f})]})}),Object(n.jsx)(d,{})]})},N=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,34)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),i(e),r(e),s(e)}))};o.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(g,{})}),document.getElementById("root")),N()}},[[33,1,2]]]);
//# sourceMappingURL=main.f57e7794.chunk.js.map