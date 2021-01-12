(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(2),s=n(12),r=n.n(s),i=(n(24),n(13)),o=n(14),l=n(15),u=n(18),h=n(17);var d=function(e){return Object(c.jsx)("div",{className:"row".concat(e.fluid?"-fluid":""),children:e.children})};var j=function(e){var t=e.size.split(" ").map((function(e){return"col-"+e})).join(" ");return Object(c.jsx)("div",{className:t,children:e.children})};var b=function(e){return Object(c.jsx)("div",{className:"form-group justify-content-center form-inline",children:Object(c.jsx)("input",{onChange:e.handleInputChange,onKeyDown:e.onKeyDown,value:e.value,name:"search",type:"text",className:"form-control",placeholder:"Find employees here...",id:"search",autoFocus:!0})})};var f=function(e){return Object(c.jsx)("div",{className:"container".concat(e.fluid?"-fluid":""),children:e.children})};var m=function(e){return Object(c.jsxs)("div",{className:"jumbotron",children:[Object(c.jsx)("h1",{className:"display-1",children:e.heading}),Object(c.jsx)("p",{children:e.heading2})]})};n(25);var p=function(e){return Object(c.jsxs)("table",{className:"table table-hover",id:"employers",children:[Object(c.jsx)("thead",{className:"thead-light",children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{scope:"col",children:"Image"}),Object(c.jsx)("th",{scope:"col",children:"First Name"}),Object(c.jsx)("th",{scope:"col",children:"Last Name"}),Object(c.jsx)("th",{scope:"col",children:"Phone #"}),Object(c.jsx)("th",{scope:"col",children:"Email Address"}),Object(c.jsx)("th",{scope:"col",children:"DOB"})]})}),Object(c.jsx)("tbody",{children:e.employees.map((function(e,t){var n=new Date(e.dob.date),a="".concat(n.getMonth()+1,"/").concat(n.getDate(),"/").concat(n.getFullYear());return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:Object(c.jsx)("img",{src:e.picture.large,alt:e.name.first})}),Object(c.jsx)("td",{children:e.name.first}),Object(c.jsx)("td",{children:e.name.last}),Object(c.jsx)("td",{children:e.phone}),Object(c.jsx)("td",{children:e.email}),Object(c.jsx)("td",{children:a})]},t)}))})]})},O=n(16),g=n.n(O);var x=function(){return g.a.get("https://randomuser.me/api/?results=20")},v=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={result:[],search:"",searchResult:[]},e.getUsers=function(){x().then((function(t){e.setState({result:t.data.results})})).catch((function(e){return console.log(e)}))},e.handleInputChange=function(t){var n=t.target.value.toLowerCase(),c=t.target.name;e.setState(Object(i.a)({},c,n),(function(){e.searching()}))},e.newDate=function(e){return new Date(e)},e.searching=function(){var t=e.state.result,n=e.state.search,c=t.filter((function(t){return(t.name.first.toLowerCase()+" "+t.name.last.toLowerCase()+" "+t.phone+" "+t.email+" "+"".concat(e.newDate(t.dob.date).getMonth()+1,"/").concat(e.newDate(t.dob.date).getDate(),"/").concat(e.newDate(t.dob.date).getFullYear())).includes(n)}));e.setState({searchResult:c})},e.ascenFunction=function(t,n,c){var a=t.sort((function(e,t){return e[n][c]>t[n][c]?1:-1}));e.setState({searchResult:a})},e.descenFunction=function(t,n,c){var a=t.sort((function(e,t){return e[n][c]>t[n][c]?1:-1})).reverse();e.setState({searchResult:a})},e.handleButtonClick=function(t){t.preventDefault();var n=t.currentTarget.getAttribute("data-value"),c=e.state.result,a=e.state.searchResult;"first-asc"===n?""===e.state.search?e.ascenFunction(c,"name","first"):e.ascenFunction(a,"name","first"):"last-asc"===n?""===e.state.search?e.ascenFunction(c,"name","last"):e.ascenFunction(a,"name","last"):"first-desc"===n?""===e.state.search?e.descenFunction(c,"name","first"):e.descenFunction(a,"name","first"):"last-desc"===n&&(""===e.state.search?e.descenFunction(c,"name","last"):e.descenFunction(a,"name","last"))},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.getUsers()}},{key:"render",value:function(){return Object(c.jsxs)(f,{children:[Object(c.jsx)(m,{heading:"Employee Directory",heading2:"Click on carrots to filter by heading or use the search box to narrow your results."}),Object(c.jsxs)(d,{children:[Object(c.jsx)(j,{size:"lg-12",children:Object(c.jsx)(b,{value:this.state.search,handleInputChange:this.handleInputChange})}),Object(c.jsx)(j,{size:"lg-12",children:Object(c.jsx)(p,{employees:""===this.state.search?this.state.result:this.state.searchResult,onClick:this.handleButtonClick})})]})]})}}]),n}(a.Component);var y=function(){return Object(c.jsx)(v,{})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};n(44);r.a.render(Object(c.jsx)(y,{}),document.getElementById("root")),F()}},[[45,1,2]]]);
//# sourceMappingURL=main.408bfdea.chunk.js.map