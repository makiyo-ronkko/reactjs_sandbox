(this.webpackJsonp10_task=this.webpackJsonp10_task||[]).push([[0],{33:function(e,t,a){e.exports=a(69)},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(30),c=a.n(l),r=(a(38),a(39),a(6)),u=a(8),o=(a(40),function(){return i.a.createElement("div",{className:"nav-container"},i.a.createElement("nav",null,i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(r.b,{to:"/"},"Home")),i.a.createElement("li",null,i.a.createElement(r.b,{to:"/blog"},"Blog")),i.a.createElement("li",null,i.a.createElement(r.b,{to:"/newpost"},"New Post")))))}),s=a(2),m=(a(46),a(11)),d=(a(47),function(e){var t=e.id,a=e.title,n=e.like,l=e.updateLike;return i.a.createElement("div",{className:"moodCard"},i.a.createElement("div",null,a),i.a.createElement("div",null,i.a.createElement("button",{onClick:function(){return l(t,n-1)},disabled:n<=0},"-"),n,i.a.createElement("button",{onClick:function(){return l(t,n+1)}},"+")))}),p=function(e){var t=e.initialMoods,a=JSON.parse(window.localStorage.getItem("moods")),l=Object(n.useState)(t||a),c=Object(s.a)(l,2),r=c[0],u=c[1];Object(n.useEffect)((function(){window.localStorage.setItem("items",JSON.stringify(r))}),[r]);var o=function(e,t){var a=r.map((function(a){return a.id===e?Object(m.a)(Object(m.a)({},a),{},{like:t}):a}));u(a)};return i.a.createElement("div",null,i.a.createElement("h2",null,"Welcome!"),i.a.createElement("h3",{style:{textAlign:"center",margin:"1rem"}},"What is your mood today? ",i.a.createElement("br",null),"Add some number to indicate your feelings."),r.map((function(e){return i.a.createElement(d,Object.assign({key:e.id},e,{updateLike:o}))})))},E=[{id:1,title:"HAPPY",like:0},{id:2,title:"NOTHING",like:0},{id:3,title:"DEPRESSED",like:0}],b=function(){var e=new Date,t="Good afternoon! Today is ".concat(e),a=Object(n.useState)(!0),l=Object(s.a)(a,2),c=l[0],r=l[1];return i.a.createElement("div",null,i.a.createElement("div",{className:"welcome-container"},i.a.createElement("p",{className:"container-title",onClick:function(){return r(!c)},style:{textAlign:"center",cursor:"pointer",margin:"1rem",color:"white"}},c?"Give me high five! (^.^)/":"Yay! Thanks (`.`)\u2661"),i.a.createElement(p,{initialMoods:E})),i.a.createElement("p",{style:{margin:"30px",textAlign:"center",background:"rgb(233, 233, 247, 0.52)"}},t))},f=a(14),g=(a(48),function(e){var t=e.title,a=e.img,n=e.desc,l=e.link,c=e.remove;return i.a.createElement("div",{className:"postCard"},i.a.createElement("h2",null,t),i.a.createElement("p",null,n),i.a.createElement("img",{src:a,alt:t}),i.a.createElement(r.b,{to:l,style:{color:"black",fontWeight:"bold"}},"Read more"),i.a.createElement("p",{onClick:c,style:{cursor:"pointer"}},"Remove this post"))}),v=[{id:1,title:"About Sky",desc:"Morbi sed aliquet nisi, in efficitur risus. Donec porttitor facilisis pulvinar. Maecenas porta eros eget dui ultrices sollicitudin. Vestibulum suscipit, libero eu vehicula cursus, metus ante vestibulum nisi, sed sollicitudin nisl ex ac arcu. ",img:"https://source.unsplash.com/1600x900/?sky"},{id:2,title:"About Forest",desc:"Morbi sed aliquet nisi, in efficitur risus. Donec porttitor facilisis pulvinar. Maecenas porta eros eget dui ultrices sollicitudin. Vestibulum suscipit, libero eu vehicula cursus, metus ante vestibulum nisi, sed sollicitudin nisl ex ac arcu. ",img:"https://source.unsplash.com/1600x900/?forest"},{id:3,title:"About Nature",desc:"Morbi sed aliquet nisi, in efficitur risus. Donec porttitor facilisis pulvinar. Maecenas porta eros eget dui ultrices sollicitudin. Vestibulum suscipit, libero eu vehicula cursus, metus ante vestibulum nisi, sed sollicitudin nisl ex ac arcu. ",img:"https://source.unsplash.com/1600x900/?nature"},{id:4,title:"About Mountain",desc:"Morbi sed aliquet nisi, in efficitur risus. Donec porttitor facilisis pulvinar. Maecenas porta eros eget dui ultrices sollicitudin. Vestibulum suscipit, libero eu vehicula cursus, metus ante vestibulum nisi, sed sollicitudin nisl ex ac arcu. ",img:"https://source.unsplash.com/1600x900/?mountain"},{id:5,title:"About Tree",desc:"Morbi sed aliquet nisi, in efficitur risus. Donec porttitor facilisis pulvinar. Maecenas porta eros eget dui ultrices sollicitudin. Vestibulum suscipit, libero eu vehicula cursus, metus ante vestibulum nisi, sed sollicitudin nisl ex ac arcu. ",img:"https://source.unsplash.com/1600x900/?tree"}],h=(a(49),a(10)),O=a.n(h),k=function(){var e=Object(n.useState)(),t=Object(s.a)(e,2),a=(t[0],t[1],Object(u.f)().postId),l=v.find((function(e){return e.id==a}));return i.a.createElement("div",{className:"fullPost"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"text-container"},i.a.createElement("h1",{className:"container-title"},"Post ",l.id),i.a.createElement("h2",null,l.title),i.a.createElement("p",null,l.desc)),i.a.createElement("div",{className:"image-container"},i.a.createElement("img",{src:l.img,alt:l.title}))))},y=v,j=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],l=t[1],c=Object(u.g)(),r=function(e){console.log(e);var t=Object(f.a)(a);console.log(a),t.splice(e,1),l(t)},o=y.map((function(e){return i.a.createElement(g,{key:e.id,title:e.title,desc:e.desc,img:e.img,link:"".concat(c.url,"/").concat(e.id),remove:function(){return r(e.id)}})}));return i.a.createElement(i.a.Fragment,null,i.a.createElement(u.c,null,i.a.createElement(u.a,{path:"/blog/:postId"},i.a.createElement(k,null)),i.a.createElement(u.a,{path:c.path},i.a.createElement("div",null,i.a.createElement("h1",{style:{margin:"20px"}},"Blog"),o))))},x=a(16),N=(a(67),function(){var e=Object(n.useState)({title:"",desc:"",img:""}),t=Object(s.a)(e,2),a=t[0],l=t[1],c=function(e){l(Object(m.a)(Object(m.a)({},a),{},Object(x.a)({},e.target.name,e.target.value)))};return i.a.createElement(i.a.Fragment,null,i.a.createElement("form",{className:"newPost"},i.a.createElement("h2",null,"Add new post"),i.a.createElement("div",null,i.a.createElement("label",{htmlFor:"title"},"TITLE"),i.a.createElement("input",{type:"text",name:"title",id:"title",onChange:c})),i.a.createElement("div",null,i.a.createElement("label",{htmlFor:"desc"},"DESCRIPTION"),i.a.createElement("textarea",{type:"text",name:"desc",id:"desc",onChange:c})),i.a.createElement("div",null,i.a.createElement("label",{htmlFor:"img"},"IMAGE URL"),i.a.createElement("input",{type:"text",name:"img",id:"img",onChange:c})),i.a.createElement("div",null,i.a.createElement("button",{type:"submit",onClick:function(e){e.preventDefault(),O.a.post("http://localhost:3001/posts",a).then((function(e){console.log(e)}))}},"Add new post"))))}),S=(a(68),function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)([]),r=Object(s.a)(c,2),u=r[0],o=r[1],m=Object(n.useState)([]),d=Object(s.a)(m,2),p=d[0],E=d[1],b=Object(n.useState)([]),g=Object(s.a)(b,2),v=g[0],h=g[1];Object(n.useEffect)((function(){O.a.get("http://localhost:3001/categories").then((function(e){l(e.data)}))}),[]);var k=a.map((function(e){return i.a.createElement("div",{className:"categoryCard"},i.a.createElement("p",{key:e.id,className:"card",onClick:function(){return y(e.id)}},e.name))})),y=function(e){o([]),O.a.get("http://localhost:3001/products/?catId="+e).then((function(e){o(e.data)}))},j=function(){h((function(e){return[].concat(Object(f.a)(e),[p])}))},x=u.map((function(e){return i.a.createElement("div",{key:e.id,className:"product"},i.a.createElement("h2",null,e.name),i.a.createElement("label",{htmlFor:""},"Select quantity"),i.a.createElement("input",{type:"number",name:e.name,id:e.id,onChange:function(t){return a=t,n=e.catId,void E({name:a.target.name,quantity:a.target.value,prodId:a.target.id,catId:n});var a,n},min:"0",max:"5"}),i.a.createElement("button",{onClick:j},"PreOrder"))})),N=v.map((function(e,t){return i.a.createElement("div",{className:"selectedItem"},i.a.createElement("p",{key:e.prodId,className:"preOrder",onClick:function(){return function(e){var t=Object(f.a)(v);t.splice(e,1),h(t)}(t)}},"x ",e.name,": ",e.quantity))}));return i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement("h2",{style:{margin:"20px"}},"Choose a category"),i.a.createElement("p",null,k),i.a.createElement("p",null,x)),i.a.createElement("div",null,i.a.createElement("h2",{style:{margin:"20px"}},"Your preorder"),i.a.createElement("p",null,N)))}),C=function(){return i.a.createElement("div",null,i.a.createElement(S,null))},I=function(){return i.a.createElement(r.a,{basename:"/task10"},i.a.createElement(o,null),i.a.createElement("main",null,i.a.createElement(u.c,null,i.a.createElement(u.a,{path:"/",exact:!0,component:b}),i.a.createElement(u.a,{path:"/blog",component:j}),i.a.createElement(u.a,{path:"/newpost",component:N}),i.a.createElement(u.a,{path:"/formexample",component:C}))))};c.a.render(i.a.createElement(I,null),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.f97f5b64.chunk.js.map