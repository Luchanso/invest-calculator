(this["webpackJsonpinvest-calculator"]=this["webpackJsonpinvest-calculator"]||[]).push([[0],{200:function(e,t,a){},201:function(e,t,a){},202:function(e,t,a){},203:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(56),l=a.n(o),i=a(57),c=a(64),u=a(58),s=a(59),d=a(65),m=a(60),v=a(66),b=a(14),h=a.n(b),f=a(16),g=a.n(f),p=a(13),E=a.n(p),C=a(61),y=a.n(C),k=a(15),O=a.n(k),w=a(62),B=(a(200),a(4)),j=a.n(B),S=(a(201),function(e){var t=e.total;return n.a.createElement(h.a,{amount:{value:1e5*t,currency:{code:"RUR",minority:1e5}}})}),R=function(e){var t=e.totalProfit,a=e.interval;return n.a.createElement("div",{className:"counters"},n.a.createElement(E.a,{size:"s"},"\u0414\u043e\u0445\u043e\u0434 \u043e\u0442 \u043f\u0440\u043e\u0446\u0435\u043d\u0442\u043e\u0432:"),n.a.createElement(j.a,null,"\u0432 \u0433\u043e\u0434: ",n.a.createElement(S,{total:t/(a/12)})),n.a.createElement(j.a,null,"\u0432 \u043c\u0435\u0441\u044f\u0446: ",n.a.createElement(S,{total:t/a})),n.a.createElement(j.a,null,"\u0432 \u0434\u0435\u043d\u044c: ~",n.a.createElement(S,{total:t/a/30})),n.a.createElement(j.a,null,"\u0432 \u0447\u0430\u0441: ~",n.a.createElement(S,{total:t/a/30/24})),n.a.createElement(j.a,null,"\u0432 \u043c\u0438\u043d\u0443\u0442\u0443: ~",n.a.createElement(S,{total:t/a/30/24/60})),n.a.createElement(j.a,null,"\u0432 \u0441\u0435\u043a\u0443\u043d\u0434\u0443: ~",n.a.createElement(S,{total:t/a/30/24/60/60})))};function N(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function P(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?N(a,!0).forEach((function(t){Object(i.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):N(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var I=function(e,t,a){return function(r){return function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:2,n=Number(e),o=Number(t),l=Number(a),i=Number(r)+1,c=[l],u=1;u<i;u++){var s=c[u-1];c[u]=o+s*(1+n/12/100)}return c}(r,e,t,a)}},H=function(e){function t(){var e,a;Object(u.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={rate:6,investments:5e3,startCapital:5e4,interval:12},a.handleRatioForm=function(e){a.setState({rate:e})},a.handleInvestments=function(e){a.setState({investments:e})},a.handleStartCapital=function(e){a.setState({startCapital:e})},a.handleInterval=function(e){a.setState({interval:e})},a}return Object(v.a)(t,e),Object(s.a)(t,[{key:"renderCurrency",value:function(){}},{key:"renderRatioForm",value:function(){var e={label:"\u041f\u0440\u043e\u0446\u0435\u043d\u0442\u043d\u0430\u044f \u0441\u0442\u0430\u0432\u043a\u0430 (%)",onChange:this.handleRatioForm,value:String(this.state.rate),type:"number",width:"available"};return n.a.createElement(g.a,e)}},{key:"renderInvestments",value:function(){var e={label:"\u0415\u0436\u0435\u043c\u0435\u0441\u044f\u0447\u043d\u044b\u0435 \u0438\u043d\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u0438 (\u0440\u0443\u0431\u043b\u0435\u0439)",onChange:this.handleInvestments,value:String(this.state.investments),type:"number",width:"available"};return n.a.createElement(g.a,e)}},{key:"renderStartCapital",value:function(){var e={label:"\u0421\u0442\u0430\u0440\u0442\u043e\u0432\u044b\u0439 \u043a\u0430\u043f\u0438\u0442\u0430\u043b (\u0440\u0443\u0431\u043b\u0435\u0439)",onChange:this.handleStartCapital,value:String(this.state.startCapital),type:"number",width:"available"};return n.a.createElement(g.a,e)}},{key:"renderInterval",value:function(){var e={label:"\u0421\u0440\u043e\u043a \u0438\u043d\u0432\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f (\u043c\u0435\u0441\u044f\u0446\u0435\u0432)",onChange:this.handleInterval,value:String(this.state.interval),type:"number",width:"available"};return n.a.createElement(g.a,e)}},{key:"renderChart",value:function(e,t,a,r,o,l){var i=this.state.interval,u={fill:!1,lineTension:.1,borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,pointHoverBorderColor:"rgba(220,220,220,1)"},s={labels:Object(c.a)(Array(Math.max(1,i)).keys()).map((function(e){return e+1})),datasets:[P({},u,{label:"\u0420\u0430\u0437\u043c\u0435\u0440 \u0434\u0435\u043d\u0435\u0433 \u0441 \u0438\u043d\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u044f\u043c\u0438",backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",pointBorderColor:"rgba(75,192,192,1)",pointHoverBackgroundColor:"rgba(75,192,192,1)",data:r}),P({},u,{label:"\u041d\u0430\u043a\u043e\u043f\u043b\u0435\u043d\u0438\u044f \u043f\u043e\u0434 \u043f\u043e\u0434\u0443\u0448\u043a\u043e\u0439",backgroundColor:"rgba(244, 66, 72, 0.4)",borderColor:"rgb(244, 66, 72)",pointBorderColor:"rgb(244, 66, 72)",pointBackgroundColor:"#fff",pointHoverBackgroundColor:"rgb(244, 66, 72)",data:e}),P({},u,{label:"\u041f\u0440\u043e\u0446\u0435\u043d\u0442 \u0438\u043d\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u0439 x0.75",backgroundColor:"rgba(241, 244, 66, 0.4)",borderColor:"rgb(241, 244, 66)",pointBorderColor:"rgb(241, 244, 66)",pointBackgroundColor:"#fff",pointHoverBackgroundColor:"rgb(241, 244, 66)",data:a}),P({},u,{label:"\u041f\u0440\u043e\u0446\u0435\u043d\u0442 \u0438\u043d\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u0439 x0.25",backgroundColor:"rgba(119, 66, 244, 0.4)",borderColor:"rgb(119, 66, 244)",pointBorderColor:"rgb(119, 66, 244)",pointBackgroundColor:"#fff",pointHoverBackgroundColor:"rgb(119, 66, 244)",data:t})]},d={value:o,currency:{code:"RUR",minority:1}},m={value:r[r.length-1],currency:{code:"RUR",minority:1}};return n.a.createElement("div",{className:"chart"},n.a.createElement(O.a,null,"\u0420\u0430\u0437\u043d\u0438\u0446\u0430 \u0432 \u0434\u0435\u043d\u044c\u0433\u0430\u0445")," ",n.a.createElement(h.a,{amount:d})," ",n.a.createElement(O.a,null,(100*l).toFixed(2)," %"),n.a.createElement("br",null),n.a.createElement(O.a,null,"\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u043e \u0437\u0430 \u0441\u0447\u0435\u0442 \u0440\u0435\u0438\u043d\u0432\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f")," ",n.a.createElement(h.a,{amount:m}),n.a.createElement("br",null),n.a.createElement("div",{className:"line-chart"},n.a.createElement(w.a,{data:s,heigth:5e3})))}},{key:"render",value:function(){var e=this.state,t=e.rate,a=e.investments,r=e.startCapital,o=e.interval,l=I(a,r,o),i=l(0),c=l(.25*t),u=l(.75*t),s=l(t),d=s[s.length-1]-i[i.length-1],m=d/i[i.length-1];return n.a.createElement(y.a,{theme:"alfa-on-color"},n.a.createElement("div",{className:"app"},n.a.createElement(E.a,{size:"xl"},"\u041a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440 \u0438\u043d\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u0439"),n.a.createElement("div",{className:"finance"},n.a.createElement("div",{className:"form"},this.renderRatioForm(),this.renderInvestments(),this.renderStartCapital(),this.renderInterval()),n.a.createElement("div",{className:"counter-block"},n.a.createElement(R,{interval:o,totalProfit:d}))),this.renderChart(i,c,u,s,d,m)))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(202);l.a.render(n.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},67:function(e,t,a){e.exports=a(203)}},[[67,1,2]]]);
//# sourceMappingURL=main.d34e7550.chunk.js.map