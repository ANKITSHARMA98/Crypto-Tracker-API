(this["webpackJsonpcrypto-tracker-api"]=this["webpackJsonpcrypto-tracker-api"]||[]).push([[0],{37:function(e,c,t){},38:function(e,c,t){},40:function(e,c,t){"use strict";t.r(c);var r=t(2),a=t.n(r),s=t(13),n=t.n(s),o=t(4),i=t(14),p=t.n(i),l=(t(37),t(38),t(0)),j=function(e){var c=e.name,t=e.image,r=e.symbol,a=e.price,s=e.volume,n=e.priceChange,o=e.marketcap;return Object(l.jsx)("div",{className:"crypto-container",children:Object(l.jsxs)("div",{className:"crypto-row",children:[Object(l.jsxs)("div",{className:"crypto",children:[Object(l.jsx)("img",{src:t,alt:"crypto"}),Object(l.jsx)("h1",{children:c}),Object(l.jsx)("p",{className:"crypto-symbol",children:r})]}),Object(l.jsxs)("div",{className:"crypto-data",children:[Object(l.jsxs)("p",{className:"crypto-price",children:["$",a]}),Object(l.jsxs)("p",{className:"crypto-volume",children:["$",s.toLocaleString()]}),n<0?Object(l.jsxs)("p",{className:"crypto-percentage red",children:[n.toFixed(2),"%"]}):Object(l.jsxs)("p",{className:"crypto-percent green",children:[n.toFixed(2),"%"]}),Object(l.jsxs)("p",{className:"crypto-marketcap",children:[" Mkt Cap: $",o.toLocaleString()]})]})]})})};var m=function(){var e=Object(r.useState)([]),c=Object(o.a)(e,2),t=c[0],a=c[1],s=Object(r.useState)(""),n=Object(o.a)(s,2),i=n[0],m=n[1];Object(r.useEffect)((function(){p.a.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false").then((function(e){a(e.data)})).catch((function(e){return console.log(e)}))}),[]);var d=t.filter((function(e){return e.name.toLowerCase().includes(i.toLowerCase())}));return Object(l.jsxs)("div",{className:"crypto-app",children:[Object(l.jsxs)("div",{className:"crypto-search",children:[Object(l.jsx)("h1",{className:"crypto-text",children:"Search Crypto Coin"}),Object(l.jsx)("form",{children:Object(l.jsx)("input",{type:"text",placeholder:"Search Coin",className:"crypto-input",onChange:function(e){m(e.target.value)}})})]}),d.map((function(e){return Object(l.jsx)(j,{name:e.name,price:e.current_price,symbol:e.symbol,marketcap:e.total_volume,volume:e.market_cap,image:e.image,priceChange:e.price_change_percentage_24h},e.id)}))]})};n.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(m,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.d0ce6dde.chunk.js.map