(this.webpackJsonpconvert_currency=this.webpackJsonpconvert_currency||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(1),a=n.n(s),r=n(4),i=n.n(r);var l=function(){return Object(c.jsx)("div",{className:"header",children:Object(c.jsx)("div",{className:"header__title",children:"\u041a\u0443\u0440\u0441 \u0432\u0430\u043b\u044e\u0442"})})},o=n(2);var u=function(){var e=a.a.useState(null),t=Object(o.a)(e,2),n=t[0],s=t[1];return a.a.useEffect((function(){return fetch("https://api.exchangeratesapi.io/latest?base=USD").then((function(e){return e.json()})).then((function(e){return s(e.date)}))}),[]),Object(c.jsxs)("div",{className:"date",children:["\u0414\u0430\u0442\u0430: ",n]})};n(10);var b=function(e){var t=e.country,n=e.output,s=a.a.useState([]),r=Object(o.a)(s,2),i=r[0],l=r[1],u=Object.keys(i),b=Object.values(i);return a.a.useEffect((function(){return fetch("https://api.exchangeratesapi.io/latest?base=USD&symbols=GBP,RUB,EUR,CHF,CNY").then((function(e){return e.json()})).then((function(e){return l(e.rates)}))}),[]),Object(c.jsx)("div",{className:"currency__calc",children:u.map((function(e,s){return Object(c.jsx)("div",{children:Object(c.jsx)("div",{className:"flex-container",children:Object(c.jsxs)("div",{className:"info",children:[Object(c.jsxs)("div",{className:"info__img-other",children:[Object(c.jsx)("img",{src:t[s].flagURL,alt:"flag"}),Object(c.jsxs)("span",{className:"currency__symbol-other",children:[" ",t[s].symbol," "]})]}),Object(c.jsxs)("div",{className:"info__text",children:[Object(c.jsxs)("p",{className:"currency__name-other",children:[" ",(n*b[s]).toFixed(2)," ",e," "]}),Object(c.jsxs)("p",{className:"base__currency-rate",children:["1 USD = ",b.map((function(e,t){return s===t?e.toFixed(2):""}))," ",e]})]})]})})},s)}))})};var j=function(e){var t=e.country,n=a.a.useState(""),s=Object(o.a)(n,2),r=s[0],i=s[1];return Object(c.jsxs)("div",{className:"currency__calc",children:[Object(c.jsx)("div",{className:"flex-container",children:Object(c.jsxs)("div",{className:"info",children:[Object(c.jsxs)("div",{className:"info__img",children:[Object(c.jsx)("img",{src:"http://www.geonames.org/flags/l/us.gif",alt:"flag"}),Object(c.jsx)("span",{className:"currency__symbol",children:"$"})]}),Object(c.jsxs)("div",{className:"info__text",children:[Object(c.jsx)("input",{placeholder:"0.0000",name:"count-currency",type:"number",onInput:function(e){i(e.target.value)}}),Object(c.jsx)("p",{className:"base__currency-rate",children:"\u0411\u0430\u0437\u043e\u0432\u0430\u044f \u0432\u0430\u043b\u044e\u0442\u0430 - \u0434\u043e\u043b\u043b\u0430\u0440"})]})]})}),Object(c.jsx)(b,{country:t,output:r})]})};var m=function(e){var t=e.country;return Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(l,{}),Object(c.jsxs)("div",{className:"content",children:[Object(c.jsx)(u,{}),Object(c.jsx)(j,{country:t})]})]})})},d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,12)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),a(e),r(e)}))};i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(m,{country:[{name:"Swiss Franc",abbreviation:"CHF",symbol:"+",flagURL:"https://www.rabstol.net/uploads/gallery/main/229/rabstol_net_flags_65.jpg"},{name:"Euro",abbreviation:"EUR",symbol:"\u20ac",flagURL:"https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg"},{name:"Chinese Yuan Renminbi",abbreviation:"CNY",symbol:"\xa5",flagURL:"https://img.geonames.org/flags/x/cn.gif"},{name:"Russian Ruble",abbreviation:"RUB",symbol:"\u20bd",flagURL:"https://img.geonames.org/flags/x/ru.gif"},{name:"British Pound",abbreviation:"GBP",symbol:"\xa3",flagURL:"https://img.geonames.org/flags/x/gb.gif"}]})}),document.getElementById("root")),d()}},[[11,1,2]]]);
//# sourceMappingURL=main.121b4b1a.chunk.js.map