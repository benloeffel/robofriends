(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{16:function(e,o,n){e.exports=n(22)},21:function(e,o,n){},22:function(e,o,n){"use strict";n.r(o);var a=n(0),t=n.n(a),i=n(12),r=n.n(i),c=n(10),l=n(1),d={space:[0,4,8,16,32,64,128,256,512],fonts:{body:"Lato, sans-serif",heading:"Roboto, sans-serif",monospace:"Menlo, monospace"},fontSizes:[12,14,16,20,24,32,48,64,96],fontWeights:{body:400,heading:700,bold:700},lineHeights:{body:1.5,heading:1.125},initialColorMode:"light",colors:{text:"#2C393B",background:"#EDF2ED",primary:"#EC5B31",secondary:"#f25f4c",accent:"887C7C",modes:{dark:{background:"#0f0e17",text:"#fffffe",primary:"#EC5B31",secondary:"#f25f4c",accent:"#a7a9be"}}},buttons:{primary:{bg:"primary",color:"text",fontWeight:"bold",transition:"all 0.25s","&:hover":{bg:"secondary",color:"text",transition:"all 0.25s"}},secondary:{bg:"secondary",color:"text",fontWeight:"bold",transition:"all 0.25s","&:hover":{bg:"accent",transition:"all 0.25s"}}},cards:{primary:{padding:2,borderRadius:4,boxShadow:"0 0 8px rgba(0, 0, 0, 0.125)",textAlign:"center"}},styles:{root:{fontFamily:"body",lineHeight:"body",fontWeight:"body"},h1:{color:"primary",fontFamily:"heading",lineHeight:"heading",fontWeight:"heading",fontSize:5},h2:{color:"primary",fontFamily:"heading",lineHeight:"heading",fontWeight:"heading",fontSize:4},h3:{color:"primary",fontFamily:"heading",lineHeight:"heading",fontWeight:"heading",fontSize:3},h4:{color:"primary",fontFamily:"heading",lineHeight:"heading",fontWeight:"heading",fontSize:2},h5:{color:"primary",fontFamily:"heading",lineHeight:"heading",fontWeight:"heading",fontSize:1},h6:{color:"primary",fontFamily:"heading",lineHeight:"heading",fontWeight:"heading",fontSize:0},p:{color:"text",fontFamily:"body",fontWeight:"body",lineHeight:"body"},a:{color:"primary"},pre:{fontFamily:"monospace",overflowX:"auto",code:{color:"inherit"}},code:{fontFamily:"monospace",fontSize:"inherit"},table:{width:"100%",borderCollapse:"separate",borderSpacing:0},th:{textAlign:"left",borderBottomStyle:"solid"},td:{textAlign:"left",borderBottomStyle:"solid"},img:{maxWidth:"100%"}}},s=[{id:1,name:"John Doe",username:"johndoe",email:"john@doe.com"},{id:2,name:"Jane Doe",username:"janedoe",email:"jane@doe.com"},{id:3,name:"Jeremy Doe",username:"jeremydoe",email:"jeremy@doe.com"},{id:4,name:"Jake Doe",username:"jakedoe",email:"jake@doe.com"},{id:5,name:"Jessica Doe",username:"jessicadoe",email:"jessica@doe.com"},{id:6,name:"Julian Doe",username:"juliandoe",email:"julian@doe.com"},{id:7,name:"Joy Doe",username:"joydoe",email:"joy@doe.com"},{id:8,name:"Jack Doe",username:"jackdoe",email:"jack@doe.com"}],m=n(4),h=function(e){var o=e.searchTerm,n=e.searchChange;return Object(l.c)(m.f,{sx:{mb:3,maxWidth:250,color:"text"},placeholder:"Enter Robot Name",value:o,onChange:n})},g=function(e){var o=e.searchTerms,n=e.searchChange,a=e.resultLength,t=Object(l.d)(),i=Object(c.a)(t,2),r=i[0],d=i[1];return Object(l.c)("header",{sx:{display:"flex",flexDirection:"column",alignItems:"center",bg:"background",padding:16}},Object(l.c)(l.a.h1,null,"RoboFriends"),Object(l.c)(l.a.p,null,"Search and instantly find your Robot Friends!"),Object(l.c)(h,{searchTerm:o,searchChange:n}),Object(l.c)(l.a.p,null,a," Robots found."),Object(l.c)(m.b,{sx:{position:"absolute",right:"16px"},onClick:function(e){d("default"===r?"dark":"default")}},"Lights ","default"===r?"OFF":"ON","!"))},f=function(e){var o=e.id,n=e.username,a=e.name,t=e.email;return Object(l.c)(m.c,{sx:{bg:"background",border:"2px solid black"}},Object(l.c)(m.e,{src:"https://robohash.org/".concat(o,"?size=200x200")}),Object(l.c)(l.a.h2,{sx:{color:"primary"}},a),Object(l.c)(l.a.p,{sx:{color:"text"}},n),Object(l.c)(l.a.p,{sx:{color:"text"}},t))},b=function(e){var o=e.robots;return t.a.createElement(t.a.Fragment,null,o.length>0&&""!==o[0]?t.a.createElement(m.d,{gap:3,columns:[2,null,5],sx:{bg:"text",padding:16}},o.map((function(e,o){return t.a.createElement(f,{key:o,id:e.id,username:e.username,name:e.name,email:e.email})}))):t.a.createElement(m.a,{sx:{bg:"secondary",padding:"16px",textAlign:"center"}},t.a.createElement(l.a.p,null,"Sorry, we couldn't find any Robots matching your search!")))};var u=function(){var e=Object(a.useState)(""),o=Object(c.a)(e,2),n=o[0],i=o[1],r=Object(a.useState)([n]),m=Object(c.a)(r,2),h=m[0],f=m[1];return Object(a.useEffect)((function(){var e=s.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));f(e)}),[n]),t.a.createElement(l.b,{theme:d},t.a.createElement(g,{searchTerms:n,searchChange:function(e){i(e.target.value)},resultLength:h.length}),t.a.createElement(b,{robots:h}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(21);r.a.render(t.a.createElement(u,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[16,1,2]]]);
//# sourceMappingURL=main.d10ba657.chunk.js.map