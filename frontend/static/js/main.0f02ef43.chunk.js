(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{13:function(e,t,a){e.exports=a(22)},21:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n,r=a(0),l=a.n(r),i=a(11),s=a.n(i),c=a(8),o=a(1),u=a(2),h=a(3),p=a(5),m=a(4),d=a(6),f=["svgRef","title"];function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var g=function(e){var t=e.svgRef,a=e.title,r=b(e,f);return l.a.createElement("svg",v({viewBox:"0 0 24 24",type:"chevron-down",size:20,className:"css-1ufps5s e16t9rkf0",width:24,height:24,ref:t},r),a?l.a.createElement("title",null,a):null,n||(n=l.a.createElement("path",{d:"M12 15a.997.997 0 00.707-.293l4-4a1 1 0 00-1.414-1.414L12 12.586 8.707 9.293a1 1 0 00-1.414 1.414l4 4A.997.997 0 0012 15z"})))},O=l.a.forwardRef((function(e,t){return l.a.createElement(g,v({svgRef:t},e))})),y=(a.p,a(12)),E=a.n(y),j=(a(19),a(7)),w=a.n(j),k=a(9),C=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("button",{onClick:function(){return e.props.loadMore()},className:"loadMore"},l.a.createElement("p",null,"Visa fler"))}}]),a}(r.Component),S=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"switchName",value:function(e){switch(e){case"TasteClockBody":return"Fyllighet";case"TasteClockRoughness":return"Str\xe4vhet";case"TasteClockFruitacid":return"Fruktsyra";case"TasteClockSweetness":return"S\xf6tma";case"TasteClockBitter":return"Beska";default:return"NOT KNOWN ".concat(e)}}},{key:"render",value:function(){var e=this;return l.a.createElement("aside",{className:"clocks"},this.props.clockList.map((function(t){return l.a.createElement("div",{key:t.key},l.a.createElement("img",{src:"../img/clocks/clock-".concat(t.value,".svg"),alt:"Taste clock"}),l.a.createElement("p",null,e.switchName(t.key)))})))}}]),a}(r.Component);function x(e){var t,a="https://product-cdn.systembolaget.se/productimages/".concat(e.product.productId,"/").concat(e.product.productId,"_100.png"),n=parseFloat(e.product.apk).toPrecision(3);t=null===e.product.vintage&&null===e.product.nameThin?"":null===e.product.nameThin?e.product.vintage:null===e.product.vintage?e.product.nameThin:"".concat(e.product.nameThin,", ").concat(e.product.vintage);var r="".concat(e.product.nameBold.replace(/\s+/g,"-").toLowerCase(),"-").concat(e.product.productNumber),i="https://www.systembolaget.se/produkt/".concat(e.product.cat1,"/").concat(r);return l.a.createElement("a",{href:i},l.a.createElement("figure",null,"Ordervara"!==e.product.assortmentText?"":l.a.createElement("div",{className:"orderStock"},l.a.createElement("p",null,"Ordervara")),l.a.createElement("img",{src:a,alt:"Produktbild"})),l.a.createElement("div",{className:"titles"},l.a.createElement("p",null,e.product.cat1,", ",e.product.cat2,", ",e.product.cat3),l.a.createElement("h1",null,e.product.nameBold),l.a.createElement("h2",null,t)),l.a.createElement("div",{className:"usageTasteContainer"},l.a.createElement("p",null,e.product.taste," ",e.product.usage)),l.a.createElement("footer",{className:"volumePrice"},l.a.createElement("div",null,l.a.createElement("p",null,l.a.createElement("strong",null,"APK: ",n)),l.a.createElement("p",null,e.product.volume," ml"),l.a.createElement("p",null,e.product.alcPercentage,"%")),l.a.createElement("h3",null,e.product.price," :-")),l.a.createElement(S,{clockList:e.product.tasteClocks}))}var V,M=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={products:[]},n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.getProducts()}},{key:"componentDidUpdate",value:function(e,t){if(null!==this.props.filters&&e.filters!==this.props.filters){this.setState({products:[]});var a=[];this.props.filters.slideFilters.forEach((function(e,t){a.push("".concat(e.minTag,"=").concat(e.minCurrent,"&").concat(e.maxTag,"=").concat(e.maxCurrent))})),this.getProducts(a.join("&"))}}},{key:"getProducts",value:function(){var e=Object(k.a)(w.a.mark((function e(){var t,a,n,r,l,i=arguments;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:"",console.log("Fetching..."),e.prev=2,a="".concat(window.location,"api/productsLimited?page=").concat(this.props.pageNum,"&").concat(t),console.log(a),e.next=7,fetch(a);case 7:return n=e.sent,e.next=10,n.json();case 10:r=e.sent,console.log("Done fetching: ",r),l=this.state.products.concat(r),this.setState({products:l}),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(2),console.error(e.t0),console.log("Failed to fetch from server!");case 20:case"end":return e.stop()}}),e,this,[[2,16]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return l.a.createElement("section",{className:"drinksContainer ".concat(this.props.isSmall?"strippedArticles":"")},this.state.products.map((function(e,t){return l.a.createElement(x,{key:e.productId,product:e})})))}}]),a}(r.Component),N=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{onClick:this.props.onClick,className:"dropHeader"},l.a.createElement("p",null,this.props.title),l.a.createElement(O,null))}}]),a}(r.Component),F=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(e){var n,r;return Object(u.a)(this,a),(r=t.call(this,e)).minVal=r.props.filter.minVal,r.maxVal=r.props.filter.maxVal,r.range={min:r.minVal,max:r.maxVal},r.min=r.props.filter.minTag,r.max=r.props.filter.maxTag,r.handleSlider=r.handleSlider.bind(Object(o.a)(r)),r.handleInputBlur=r.handleInputBlur.bind(Object(o.a)(r)),r.handleInputKey=r.handleInputKey.bind(Object(o.a)(r)),r.handleInputChange=r.handleInputChange.bind(Object(o.a)(r)),r.state=(n={},Object(d.a)(n,r.min,r.minVal),Object(d.a)(n,r.max,r.maxVal),Object(d.a)(n,"start",[r.minVal,r.maxVal]),n),r}return Object(h.a)(a,[{key:"handleSlider",value:function(e){var t;this.setState((t={},Object(d.a)(t,this.min,e[0]),Object(d.a)(t,this.max,e[1]),t)),this.props.update(parseFloat(this.state[this.min]),parseFloat(this.state[this.max]))}},{key:"handleInputBlur",value:function(e){var t=this,a=e.target.value;if(a>this.maxVal||a<this.minVal)this.setState((function(){var e;return e={},Object(d.a)(e,t.min,t.minVal),Object(d.a)(e,t.max,t.maxVal),Object(d.a)(e,"start",[t.minVal,t.maxVal]),e}));else if(a>this.state[this.max]||a<this.state[this.min]){var n;this.setState((n={},Object(d.a)(n,this.min,a),Object(d.a)(n,this.max,a),n)),this.setState((function(e,a){return{start:[e[t.min],e[t.max]]}})),this.props.update(this.state[this.min],this.state[this.max])}else this.setState((function(t,n){return Object(d.a)({},e.target.name,parseFloat(a))})),this.setState((function(e,a){return{start:[e[t.min],e[t.max]]}})),this.props.update(this.state[this.min],this.state[this.max])}},{key:"handleInputKey",value:function(e){"Enter"===e.key&&this.handleInputBlur(e)}},{key:"handleInputChange",value:function(e){var t=parseFloat(e.target.value);this.setState((function(a,n){return Object(d.a)({},e.target.name,t)}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"dropContainer ".concat(this.props.show?"show":"")},l.a.createElement("div",{className:"sliderContainer"},l.a.createElement("div",{className:"inputs-wrapper"},l.a.createElement("div",{className:"range-input-wrapper"},l.a.createElement("p",null,"Fr\xe5n"),l.a.createElement("input",{type:"number",name:this.min,value:this.state[this.min],onKeyUp:this.handleInputKey,onBlur:this.handleInputBlur,onChange:this.handleInputChange}),l.a.createElement("p",null,this.props.filter.unit)),l.a.createElement("div",{className:"range-input-wrapper"},l.a.createElement("p",null,"Till"),l.a.createElement("input",{type:"number",name:this.max,value:this.state[this.max],onKeyUp:this.handleInputKey,onBlur:this.handleInputBlur,onChange:this.handleInputChange}),l.a.createElement("p",null,this.props.filter.unit))),l.a.createElement("div",{className:"sliderRound"},l.a.createElement(E.a,{connect:!0,onSlide:this.handleSlider,step:this.props.filter.steps,start:this.state.start,range:this.range}))))}}]),a}(r.Component),P=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).handleHeaderClick=n.handleHeaderClick.bind(Object(o.a)(n)),n.state={show:!1},n}return Object(h.a)(a,[{key:"handleHeaderClick",value:function(){this.setState({show:!this.state.show})}},{key:"render",value:function(){return l.a.createElement("div",{className:"filterWrapper"},l.a.createElement(N,{onClick:this.handleHeaderClick,title:this.props.filter.title}),l.a.createElement(F,{show:this.state.show,update:this.props.update,filter:this.props.filter}))}}]),a}(r.Component),T=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).handleHeaderClick=n.handleHeaderClick.bind(Object(o.a)(n)),n.state={show:!0},n}return Object(h.a)(a,[{key:"handleHeaderClick",value:function(){this.setState({show:!this.state.show})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"filterWrapper"},l.a.createElement(N,{onClick:this.handleHeaderClick,title:this.props.filter.title}),l.a.createElement("div",{className:"dropContainer ".concat(this.state.show?"show":"")},l.a.createElement("div",{className:"input-option"},l.a.createElement("input",{onChange:function(){e.props.update("show")},type:"radio",name:"orderStock",id:"showOrderStock"}),l.a.createElement("label",{htmlFor:"showOrderStock"},"Visa ordervaror")),l.a.createElement("div",{className:"input-option"},l.a.createElement("input",{onChange:function(){e.props.update("hide")},type:"radio",name:"orderStock",id:"hideOrderStock"}),l.a.createElement("label",{htmlFor:"hideOrderStock"},"D\xf6lj ordervaror"))))}}]),a}(r.Component),z=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).handleSliderUpdate=n.handleSliderUpdate.bind(Object(o.a)(n)),n.handleLoadMore=n.handleLoadMore.bind(Object(o.a)(n)),n.handleOrderStockUpdate=n.handleOrderStockUpdate.bind(Object(o.a)(n)),n.state={hasChanged:!1,changedArray:null,filters:{showOrderStock:{value:!1,prevValue:!1,title:"Ordervaror"},slideFilters:[{unit:"%",maxTag:"alcMax",minTag:"alcMin",title:"Alkoholhalt",maxVal:90,minVal:0,minPrevious:0,maxPrevious:90,minCurrent:0,maxCurrent:90,steps:.5},{unit:"kr",maxTag:"priceMax",minTag:"priceMin",title:"Pris",maxVal:4e5,minVal:0,minPrevious:0,maxPrevious:4e5,minCurrent:0,maxCurrent:4e5,steps:1},{unit:"ml",maxTag:"volumeMax",minTag:"volumeMin",title:"Volym",maxVal:4e4,minVal:0,minPrevious:0,maxPrevious:4e4,minCurrent:0,maxCurrent:4e4,steps:1}]}},n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.setState({changedArray:Array(this.state.filters.slideFilters.length).fill(!1)})}},{key:"handleSliderUpdate",value:function(e,t,a){var n=this,r=this.state.filters.slideFilters.slice();r[e].minCurrent=t,r[e].maxCurrent=a,this.setState((function(){return{slideFilters:r}})),this.state.filters.slideFilters.forEach((function(e,t){if(e.minCurrent!==e.minPrevious||e.maxCurrent!==e.maxPrevious){var a=n.state.slideFilters;a[t]=!0,n.setState((function(){return{changedArray:a}}))}else{var r=n.state.slideFilters;r[t]=!1,n.setState((function(){return{changedArray:r}}))}})),this.state.changedArray.includes(!0)?this.setState({hasChanged:!0}):this.setState({hasChanged:!1})}},{key:"handleLoadMore",value:function(){var e=this.state.filters.slideFilters.slice();this.setState({hasChanged:!1,changedArray:Array(this.state.filters.slideFilters.length).fill(!1)}),this.props.loadMore(this.state.filters),e.map((function(e,t){e.minPrevious=e.minCurrent,e.maxPrevious=e.maxCurrent}))}},{key:"handleOrderStockUpdate",value:function(e){var t=Object(c.a)({},this.state.filters);t.showOrderStock.value="show"===e,this.setState({filters:t,hasChanged:!0})}},{key:"render",value:function(){var e=this;return l.a.createElement("aside",{className:"filters ".concat(this.props.showMobile?"show-mobile":"")},l.a.createElement("button",{onClick:this.props.changeMobileShow,className:"close-filters"},l.a.createElement("p",null,"St\xe4ng"),l.a.createElement("p",null,"x")),l.a.createElement("h1",null,"Filtrera"),this.state.filters.slideFilters.map((function(t,a){return l.a.createElement(P,{update:function(t,n){return e.handleSliderUpdate(a,t,n)},className:"filterWrapper",key:t.title,filter:t})})),l.a.createElement(T,{update:this.handleOrderStockUpdate,filter:this.state.filters.showOrderStock}),l.a.createElement("div",{className:"button-container"},(this.state.hasChanged,l.a.createElement("button",{className:"update-filters",onClick:this.handleLoadMore},"Uppdatera filter"))))}}]),a}(r.Component),R=["svgRef","title"];function I(){return(I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function B(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var A,L=function(e){var t=e.svgRef,a=e.title,n=B(e,R);return l.a.createElement("svg",I({viewBox:"0 0 18 16",type:"filter",height:20,width:20,className:"css-1tzyzy6 e1vdopyw9",ref:t},n),a?l.a.createElement("title",null,a):null,V||(V=l.a.createElement("path",{d:"M10 8.17a3.001 3.001 0 010 5.66V15a1 1 0 11-2 0v-1.17a3.001 3.001 0 010-5.66V1a1 1 0 012 0v7.17zM9 12a1 1 0 100-2 1 1 0 000 2zM4 7.83V15a1 1 0 11-2 0V7.83a3.001 3.001 0 010-5.66V1a1 1 0 012 0v1.17a3.001 3.001 0 010 5.66zM3 4a1 1 0 100 2 1 1 0 000-2zm13 3.83V15a1 1 0 11-2 0V7.83a3.001 3.001 0 010-5.66V1a1 1 0 112 0v1.17a3.001 3.001 0 010 5.66zM15 4a1 1 0 100 2 1 1 0 000-2z",fill:"#095741"})))},H=l.a.forwardRef((function(e,t){return l.a.createElement(L,I({svgRef:t},e))})),U=(a.p,["svgRef","title"]);function K(){return(K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function D(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var W,q=function(e){var t=e.svgRef,a=e.title,n=D(e,U);return l.a.createElement("svg",K({viewBox:"0 0 24 24",type:"swap-up-down",className:"css-uu50z e1wjyngk1",width:24,height:24,ref:t},n),a?l.a.createElement("title",null,a):null,A||(A=l.a.createElement("path",{d:"M7.517 4.124a.996.996 0 01.901-.032 1 1 0 01.368.285l2.92 2.915a.999.999 0 010 1.415c-.39.39-1.025.39-1.416 0L9 7.419V17a1 1 0 11-2 0V7.42L5.71 8.706c-.391.39-1.026.39-1.417 0a.999.999 0 010-1.414l2.923-2.917a1.013 1.013 0 01.3-.252zm8 15.752a1 1 0 01-.301-.252l-2.922-2.917a.999.999 0 010-1.414 1.003 1.003 0 011.416 0L15 16.581V7a1 1 0 112 0v9.581l1.29-1.288a1.003 1.003 0 011.416 0 .999.999 0 010 1.415l-2.92 2.915a.995.995 0 01-.367.285.997.997 0 01-.902-.032z",fill:"#095741"})))},J=l.a.forwardRef((function(e,t){return l.a.createElement(q,K({svgRef:t},e))})),_=(a.p,["svgRef","title"]);function G(){return(G=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function Q(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var X,Y,Z=function(e){var t=e.svgRef,a=e.title,n=Q(e,_);return l.a.createElement("svg",G({viewBox:"0 0 24 24",type:"list-view",className:"css-1tzg0zi e1wjyngk1",width:24,height:24,ref:t},n),a?l.a.createElement("title",null,a):null,W||(W=l.a.createElement("path",{fillRule:"evenodd",d:"M10 6h9a1 1 0 110 2h-9a1 1 0 010-2zm0 5h9a1 1 0 110 2h-9a1 1 0 110-2zm0 5h9a1 1 0 110 2h-9a1 1 0 110-2zM5 6h1a1 1 0 010 2H5a1 1 0 010-2zm0 5h1a1 1 0 110 2H5a1 1 0 110-2zm0 5h1a1 1 0 110 2H5a1 1 0 110-2z",clipRule:"evenodd",fill:"#2D2926"})))},$=l.a.forwardRef((function(e,t){return l.a.createElement(Z,G({svgRef:t},e))})),ee=(a.p,["svgRef","title"]);function te(){return(te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function ae(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var ne=function(e){var t=e.svgRef,a=e.title,n=ae(e,ee);return l.a.createElement("svg",te({viewBox:"0 0 24 24",type:"detailed-view",className:"css-1tzg0zi e1wjyngk1",width:24,height:24,ref:t},n),a?l.a.createElement("title",null,a):null,X||(X=l.a.createElement("path",{d:"M7 18H5a1 1 0 100 2h2a1 1 0 100-2zm6 0h-2a1 1 0 100 2h2a1 1 0 100-2zm6 0h-2a1 1 0 100 2h2a1 1 0 100-2z",fill:"#2D2926"})),Y||(Y=l.a.createElement("path",{fillRule:"evenodd",d:"M5 4a1 1 0 00-1 1v8a1 1 0 001 1h14a1 1 0 001-1V5a1 1 0 00-1-1H5zm13 2H6v6h12V6z",clipRule:"evenodd",fill:"#2D2926"})))},re=l.a.forwardRef((function(e,t){return l.a.createElement(ne,te({svgRef:t},e))})),le=(a.p,function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{onClick:this.props.mobileFilters,className:"filter"},"Filtrera",l.a.createElement(H,null)),l.a.createElement("form",{className:"sort"},l.a.createElement("select",{name:"sort"},l.a.createElement("option",null," Sortera efter"),l.a.createElement("option",null," filter")),l.a.createElement(J,null)))}}]),a}(r.Component)),ie=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).changeViewSmall=n.changeViewSmall.bind(Object(o.a)(n)),n.changeViewBig=n.changeViewBig.bind(Object(o.a)(n)),n.state={smallActive:!1},n}return Object(h.a)(a,[{key:"changeViewSmall",value:function(){this.setState({smallActive:!0}),this.props.viewTypeChange("small")}},{key:"changeViewBig",value:function(){this.setState({smallActive:!1}),this.props.viewTypeChange("big")}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("p",null,"V\xe4lj vy:"),l.a.createElement("button",{onClick:this.changeViewSmall,className:"stripped ".concat(this.state.smallActive?"":"notActive")},l.a.createElement($,null)),l.a.createElement("button",{onClick:this.changeViewBig,className:"bigArticles ".concat(this.state.smallActive?"notActive":"")},l.a.createElement(re,null)))}}]),a}(r.Component),se=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return l.a.createElement("header",{className:"searchOptions"},l.a.createElement(le,{mobileFilters:this.props.mobileFilters}),l.a.createElement(ie,{viewTypeChange:this.props.viewTypeChange}))}}]),a}(r.Component),ce=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).handleViewChange=n.handleViewChange.bind(Object(o.a)(n)),n.handleLoadMore=n.handleLoadMore.bind(Object(o.a)(n)),n.state={pageNum:1,isSmall:!1},n}return Object(h.a)(a,[{key:"handleLoadMore",value:function(){var e=Object(k.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setState((function(e){return{pageNum:e.pageNum+1}}));case 2:this.productContainer.getProducts();case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleViewChange",value:function(e){"small"===e?this.setState({isSmall:!0}):this.setState({isSmall:!1})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(se,{mobileFilters:this.props.mobileFilters,viewTypeChange:this.handleViewChange}),l.a.createElement(M,{pageNum:this.state.pageNum,ref:function(t){e.productContainer=t},filters:this.props.filters,isSmall:this.state.isSmall}),l.a.createElement(C,{loadMore:this.handleLoadMore}))}}]),a}(r.Component),oe=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return l.a.createElement("header",{id:"header"},l.a.createElement("nav",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("button",{className:"wine"},l.a.createElement("span",null,"Vin"))),l.a.createElement("li",null,l.a.createElement("button",{className:"beer"},l.a.createElement("span",null,"\xd6l"))),l.a.createElement("li",null,l.a.createElement("button",{className:"liquor"},l.a.createElement("span",null,"Sprit"))),l.a.createElement("li",null,l.a.createElement("button",{className:"cider"},l.a.createElement("span",null,"Cider & Blanddryck"))))))}}]),a}(r.Component),ue=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).handleLoadMore=n.handleLoadMore.bind(Object(o.a)(n)),n.handleMobileShowFilters=n.handleMobileShowFilters.bind(Object(o.a)(n)),n.state={filters:null,showMobile:!1},n}return Object(h.a)(a,[{key:"handleLoadMore",value:function(e){this.state.showMobile&&this.handleMobileShowFilters(),this.setState((function(t,a){return{filters:Object(c.a)({},e)}}))}},{key:"handleMobileShowFilters",value:function(){console.log("chnaging"),this.setState({showMobile:!this.state.showMobile})}},{key:"render",value:function(){return l.a.createElement("main",{id:"index"},l.a.createElement(z,{changeMobileShow:this.handleMobileShowFilters,showMobile:this.state.showMobile,loadMore:this.handleLoadMore}),l.a.createElement(ce,{mobileFilters:this.handleMobileShowFilters,filters:this.state.filters}))}}]),a}(l.a.Component);var he=function(){return l.a.createElement("div",{id:"app"},l.a.createElement(oe,null),l.a.createElement(ue,null))};a(21);s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(he,null)),document.querySelector("#root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.0f02ef43.chunk.js.map