(this["webpackJsonppizza-app"]=this["webpackJsonppizza-app"]||[]).push([[0],{18:function(e,t,a){e.exports={button_wrapper:"viewButton_button_wrapper__sVCEO",view_button:"viewButton_view_button__2JBhZ"}},22:function(e,t,a){e.exports={container:"CartButton_container__2l0Bo",counter:"CartButton_counter__3RAZe"}},25:function(e,t,a){e.exports={header_container:"Header_header_container__11p6_",header_title:"Header_header_title__1KndY",header_image:"Header_header_image__3Jo3Y"}},26:function(e,t,a){e.exports={container:"PizzaList_container__3aN_V",grid:"PizzaList_grid__pBcOr"}},28:function(e,t,a){e.exports={listContainer:"CartView_listContainer__2dv0D",grid:"CartView_grid__2_FsT"}},36:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(29),c=a.n(i),s=(a(36),a(10)),o=a(19),d=a(4),u=a(12),j=a(2),b=r.a.createContext(),p=function(e){var t=e.children,a=Object(n.useReducer)((function(e,t){var a;switch(t.type){case"addPizza":if(a=e.orders.find((function(e){return e.name===t.newPizza.name&&e.price===t.newPizza.price}))){console.log("add",e);var n=e.orders.filter((function(e){return e.name!==a.name}));return Object(d.a)(Object(d.a)({},e),{},{orders:[].concat(Object(o.a)(n),[Object(d.a)(Object(d.a)({},a),{},{quantity:a.quantity+1})])})}return Object(d.a)(Object(d.a)({},e),{},{orders:[].concat(Object(o.a)(e.orders),[t.newPizza])});case"removePizza":if(void 0!==(a=e.orders.find((function(e){return e.id===t.pizzaRemove.id&&e.quantity>1})))){console.log("remove",e);var r=e.orders.filter((function(e){return e.name!==a.name}));return Object(d.a)(Object(d.a)({},e),{},{orders:[].concat(Object(o.a)(r),[Object(d.a)(Object(d.a)({},a),{},{quantity:a.quantity-1})])})}return Object(d.a)(Object(d.a)({},e),{},{orders:e.orders.filter((function(e){return e.id!==t.pizzaRemove.id}))});default:return e}}),{orders:[]}),r=Object(u.a)(a,2),i=r[0],c=r[1];return Object(j.jsx)(b.Provider,{value:{state:i,dispatch:c},children:t})},z=a(22),l=a.n(z),_=a(31),O=function(){var e=Object(n.useContext)(b).state;return Object(j.jsx)("div",{className:l.a.container,children:Object(j.jsxs)(s.b,{to:"/cart",children:[Object(j.jsx)(_.a,{}),Object(j.jsx)("p",{className:l.a.counter,children:e.orders.length})]})})},m=a(25),h=a.n(m);var x=function(e){var t=e.title;return Object(j.jsx)(s.b,{to:"/",children:Object(j.jsx)("div",{className:h.a.header_container,children:Object(j.jsx)("h2",{className:h.a.header_title,children:t})})})},f=a(13),v=a.n(f),g=a(17),w=a(9),N=a.n(w),y=a(49);var C=function(e){var t=e.img,a=e.name,r=e.desc,i=e.priceBig,c=e.priceSmall,s=e.grid,o=e.price,d=e.id,u=e.isShopCard,p=e.quantity,z=Object(n.useContext)(b).dispatch,l=function(e,t,a,n){z({type:"addPizza",newPizza:{name:a,desc:e,img:t,price:n,quantity:1,id:Object(y.a)()}})};return Object(j.jsxs)("div",{className:s?"".concat(N.a.grid," ").concat(N.a.pizza_box):N.a.pizza_box,children:[Object(j.jsx)("img",{className:N.a.pizza_image,src:t,alt:"asd",title:"tytul"}),Object(j.jsxs)("div",{className:N.a.pizza_wrapper,children:[Object(j.jsx)("h3",{className:N.a.pizza_name,children:a}),Object(j.jsx)("p",{className:N.a.pizza_descr,children:r})]}),Object(j.jsx)("div",{className:N.a.pizza_size,children:!0===u?Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("button",{onClick:function(){return function(e){var t=e.id,a=e.name,n=e.price;z({type:"removePizza",pizzaRemove:{id:t,name:a,price:n}})}({id:d,name:a,price:o})},className:N.a.delete,children:[p," ",o,Object(j.jsx)("br",{}),"X"]})}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("button",{className:N.a.size_button,onClick:function(){return l(r,t,a,c)},children:[c,"z\u0142"]}),Object(j.jsxs)("button",{className:N.a.size_button,onClick:function(){return l(r,t,a,i)},children:[i,"z\u0142"]})]})})]})},P=a(26),B=a.n(P);function k(){return(k=Object(g.a)(v.a.mark((function e(){var t,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pizzaportal.azurewebsites.net/api/GetMenu");case 2:if(200!==(t=e.sent).status){e.next=8;break}return e.next=6,t.json();case 6:return a=e.sent,e.abrupt("return",a.map((function(e){return{img:e.metadata.image,name:e.pizzaName,desc:e.metadata.description,priceBig:Math.round(100*e.prices.find((function(e){return"big"===e.type})).price)/100,priceSmall:Math.round(100*e.prices.find((function(e){return"small"===e.type})).price)/100,id:e.id}})));case 8:return console.log(t),e.abrupt("return",[]);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var I=function(e){var t=e.isGrid,a=Object(n.useState)([]),r=Object(u.a)(a,2),i=r[0],c=r[1];return Object(n.useEffect)((function(){(function(){return k.apply(this,arguments)})().then((function(e){return c(e)}))}),[]),Object(j.jsx)("div",{className:t?"".concat(B.a.grid," grid"):B.a.container,children:i.map((function(e,a){return Object(j.jsx)(C,Object(d.a)(Object(d.a)({},t?{grid:!0}:{}),e),a)}))})},S=a(18),G=a.n(S),q=a(27),R=function(e){e.viewButtonImg;var t=e.setIsGrid;e.isGrid;return Object(j.jsxs)("div",{className:G.a.button_wrapper,children:[Object(j.jsx)("button",{className:G.a.view_button,onClick:function(){t(!1)},children:Object(j.jsx)(q.a,{})}),Object(j.jsx)("button",{className:G.a.view_button,onClick:function(){t(!0)},children:Object(j.jsx)(q.b,{})})]})},J=a(3),M=a(28),H=a.n(M),V=function(){var e=Object(g.a)(v.a.mark((function e(t){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pizzaportal.azurewebsites.net/api/SendOrder",{method:"POST",body:JSON.stringify(t)});case 2:a=e.sent,console.log(a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(e){var t=e.isGrid,a=Object(n.useContext)(b).state;return Object(j.jsxs)("div",{className:"".concat(H.a.listContainer," ").concat(t?H.a.grid:""),children:[a.orders.map((function(e,a){return Object(j.jsx)(C,Object(d.a)(Object(d.a)({},e),{},{isShopCard:!0},t?{grid:!0}:{}),a)})),Object(j.jsxs)("div",{children:[Math.round(100*a.orders.reduce((function(e,t){return e+t.price*t.quantity}),0))/100,"z\u0142"]}),Object(j.jsx)("button",{onClick:function(){return V({orders:Object(d.a)({},a.orders)})},children:"Zamawiam"})]})};var F=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],r=t[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)(x,{title:"Trattoria la React"}),Object(j.jsx)(R,{isGrid:a,setIsGrid:r}),Object(j.jsx)(J.a,{path:"/",exact:!0,children:Object(j.jsx)(I,{isGrid:a})}),Object(j.jsx)(J.a,{path:"/cart",exact:!0,children:Object(j.jsx)(E,{isGrid:a})})]})},T=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(O,{}),Object(j.jsx)(F,{})]})};c.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(p,{children:Object(j.jsx)(s.a,{basename:"",children:Object(j.jsx)(T,{})})})}),document.getElementById("root"))},9:function(e,t,a){e.exports={pizza_box:"PizzaItem_pizza_box___UwO0",pizza_name:"PizzaItem_pizza_name__15-HN",pizza_image:"PizzaItem_pizza_image__291vv",pizza_descr:"PizzaItem_pizza_descr__26Dxt",pizza_wrapper:"PizzaItem_pizza_wrapper__1cXnN",pizza_size:"PizzaItem_pizza_size__3j_vn",grid:"PizzaItem_grid__37Bbw"}}},[[47,1,2]]]);
//# sourceMappingURL=main.4811966a.chunk.js.map