(this["webpackJsonpclicky-game"]=this["webpackJsonpclicky-game"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a.p+"static/media/beth.4d5e65a0.png"},function(e,t,a){e.exports=a.p+"static/media/birdperson.612ba8d4.png"},function(e,t,a){e.exports=a.p+"static/media/evilmorty.0657e1f4.png"},function(e,t,a){e.exports=a.p+"static/media/gianthead.978b3847.png"},function(e,t,a){e.exports=a.p+"static/media/goldenford.3774b39d.png"},function(e,t,a){e.exports=a.p+"static/media/jerry.af8e8a84.png"},function(e,t,a){e.exports=a.p+"static/media/jessica.a9644830.png"},function(e,t,a){e.exports=a.p+"static/media/meeseeks.9667b7ee.png"},function(e,t,a){e.exports=a.p+"static/media/morty.244deeda.png"},function(e,t,a){e.exports=a.p+"static/media/mr.d61b2d5b.png"},function(e,t,a){e.exports=a.p+"static/media/rick.06b65841.png"},function(e,t,a){e.exports=a.p+"static/media/summer.afdbb7bf.png"},,,function(e,t,a){e.exports=a(32)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(3),s=a.n(r),i=a(4),o=a(5),l=a(19),u=a(6),h=a(1),m=a(20),p=(a(26),function(e){return c.a.createElement("div",{className:"navbar "},c.a.createElement("div",null,"Clicky Game"),c.a.createElement("div",{className:e.navMsgColor},e.navMessage),c.a.createElement("div",null,"Score: ",e.score," ",c.a.createElement("span",{className:"pipe"},"|")," High Score: ",e.highScore))}),d=(a(27),a(28),function(e){return c.a.createElement("div",{className:"card",onClick:function(t){return e.clickEvent(t.target.src)}},c.a.createElement("img",{className:"card-img-top card-height",src:e.name,alt:""}))}),f=function(e){return c.a.createElement("div",{className:e.shake?"container d-flex flex-wrap justify-content-center shake":"container d-flex flex-wrap justify-content-center"},e.characters.map((function(t,a){return c.a.createElement(d,{name:t,key:a,clickEvent:e.clickEvent})})))},g=(a(29),function(){return c.a.createElement("div",{className:"footer text-center"},"Ravi Jethva")}),v=(a(30),function(){return c.a.createElement("div",{className:"banner text-center d-flex align-items-center justify-content-center"},c.a.createElement("p",{className:"m-0"},"Click on an image to earn points, but don't click on any more than once!"))}),k=a(7),b=a.n(k),C=a(8),E=a.n(C),y=a(9),x=a.n(y),M=a(10),S=a.n(M),j=a(11),w=a.n(j),N=a(12),O=a.n(N),A=a(13),J=a.n(A),G=a(14),I=a.n(G),B=a(15),H=a.n(B),R=a(16),T=a.n(R),Y=a(17),q=a.n(Y),z=a(18),D=a.n(z),F=[b.a,E.a,x.a,S.a,w.a,O.a,J.a,I.a,H.a,T.a,q.a,D.a],K=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={score:0,highScore:0,navMsgColor:"",navMessage:"Click an image to begin!",allCharacters:a.shuffleArray(),wasClicked:[],shake:!1},a.clickEvent=a.checkClicked.bind(Object(h.a)(a)),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"shuffleArray",value:function(){for(var e=F.slice(),t=[];e.length>0;)t.push(e.splice(Math.floor(Math.random()*e.length),1)[0]);return t}},{key:"checkClicked",value:function(e){var t=this,a=this.state.wasClicked.slice(),n=this.shuffleArray(),c=this.state.score,r=this.state.highScore;if(this.state.wasClicked.includes(e)||(c===r?(c++,r++):c++,a.push(e)),this.state.wasClicked.includes(e)){return this.setState({score:0,highScore:r,navMsgColor:"incorrect",navMessage:"Incorrect guess!",allCharacters:n,wasClicked:[],shake:!0})}return this.setState({score:c,highScore:r,navMsgColor:"correct",navMessage:"You Guessed Correctly!",allCharacters:n,wasClicked:a,shake:!1}),setTimeout((function(){return t.setState({navMsgColor:""})}),500)}},{key:"render",value:function(){var e=this.state;return c.a.createElement("div",null,c.a.createElement(p,{score:e.score,highScore:e.highScore,navMessage:e.navMessage,navMsgColor:e.navMsgColor}),c.a.createElement(v,null),c.a.createElement(f,{shake:e.shake,characters:e.allCharacters,clickEvent:this.clickEvent}),c.a.createElement(g,null))}}]),t}(n.Component);a(31);s.a.render(c.a.createElement(K,null),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.7df1c131.chunk.js.map