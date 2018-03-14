webpackJsonp([0],{IjIJ:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),o=i("wh8N"),n=i.n(o);const h=0;var a;!function(t){t.Above="Above",t.Below="Below",t.Left="Left",t.Right="Right"}(a||(a={}));var r=class{constructor(t){if(this.dy=t.length,this.dx=t[0].length,this.dy<2||this.dx<2)throw new Error("cannot initialize with the array which has less than 2 col/rows");this.blocks=new Array(this.dx*this.dy);let e=0;for(let i=0;i<this.dy;i++)for(let s=0;s<this.dx;s++)this.blocks[e]=t[i][s],t[i][s]===h&&(this.blankpos=e),e++}row(t){return Math.ceil(t/this.dx)}col(t){return t%this.dx===h?this.dx:t%this.dx}dimensions(){return{x:this.dx,y:this.dy}}checkInRange(...t){for(let e of t)if(null==this.blocks[e])throw new Error(`Index ${e} not in range [0 .. ${this.blocks.length-1}]`)}direction(t,e){if(this.checkInRange(t,e),this.row(e+1)===this.row(t+1)){if(e%this.dx==t%this.dx-1)return a.Left;if(e%this.dx==t%this.dx+1)return a.Right}return e===t+this.dx?a.Below:e===t-this.dx?a.Above:null}hamming(){let t=0;for(let e=0,i=1,s=this.blocks.length;e<s;e++,i++)this.blocks[e]!==h&&this.blocks[e]!==i&&t++;return t}manhattan(){let t=0;for(let e=0,i=this.blocks.length;e<i;e++)this.blocks[e]!==h&&(t+=Math.abs(this.row(this.blocks[e])-this.row(e+1))+Math.abs(this.col(this.blocks[e])-this.col(e+1)));return t}isGoal(){for(let t=0,e=this.blocks.length;t<e;t++)if(this.blocks[t]!==h&&this.blocks[t]!==t+1)return!1;return!0}swap(t,e,i){if(this.checkInRange(e,i),this.blocks[e]!==h&&this.blocks[i]!==h)throw new Error("cannot swap non-space block");return[t[e],t[i]]=[t[i],t[e]],this.blankpos=t[e]===h?e:i,this}swapAbove(t){return this.swap(this.blocks,t,t-this.dx)}swapBelow(t){return this.swap(this.blocks,t,t+this.dx)}swapLeft(t){return this.swap(this.blocks,t,t-1)}swapRight(t){return this.swap(this.blocks,t,t+1)}slide(t){switch(this.checkInRange(t),this.direction(t,this.blankpos)){case a.Above:return this.swapAbove(t);case a.Below:return this.swapBelow(t);case a.Left:return this.swapLeft(t);case a.Right:return this.swapRight(t);default:return this}}toArray2D(){let t=0;const e=[];for(let i=0;i<this.dy;i++){const i=[];for(let e=0;e<this.dx;e++,t++)i.push(this.blocks[t]);e.push(i)}return e}},l=i("y1vT"),c=i.n(l),d=function(t,e){for(var i=t*e,s=[],o=0;o<i;o++)s.push(o);!function(t){for(var e=t.length-1;e>0;e--){var i=Math.floor(Math.random()*(e+1)),s=t[e];t[e]=t[i],t[i]=s}}(s);for(var n=[],h=0;h<e;h++){for(var a=[],r=0;r<t;r++)a.push(s[t*h+r]);n.push(a)}return n},u={name:"PuzzleBoard",data:function(){return{blocks:this.board.blocks,isGoal:!1,manhattan:null,hamming:null,width:0,height:0,vidSrc:n.a,targetSrc:this.src,dx:this.board.dx,dy:this.board.dx}},props:{board:{type:r,default:function(){var t=d(3,3);return new r(t)}},src:{type:String},showNumber:{type:Boolean,default:!0},autoResize:{type:Boolean,default:!1}},computed:{cellWidth:function(){return this.width/this.dx},cellHeight:function(){return this.height/this.dy}},mounted:function(){var t=this;this.onResize(),window.addEventListener("resize",c()(this.onResize.bind(this),300)),this._lastRender=Date.now();this.$nextTick(function e(){var i=Date.now();if(t.$refs.sourceImg&&i-t._lastRender>33){t._lastRender=i;var s=t.$refs.sourceImg,o=Math.min(s.videoWidth/t.dx,s.videoHeight/t.dy),n=(s.videoWidth-o*t.dx)/2,h=(s.videoHeight-o*t.dy)/2,a=t.$refs["puzzle-canvas"],r=a.getContext("2d"),l=o*t.dx,c=o*t.dy,d=t.width,u=t.height;r.drawImage(s,n,h,l,c,d,0,d,u),t._shouldClear&&r.clearRect(0,0,t.width,t.height);for(var f=0,p=t.blocks.length;f<p;f++){var b=t.blocks[f];if(0!==b){var g=t.board.row(b),v=t.board.col(b),w=t.cellWidth,k=t.cellHeight,m=w*(v-1)+d,x=k*(g-1),y=w,z=k,R=(t.board.row(f+1)-1)*t.cellHeight,C=(t.board.col(f+1)-1)*t.cellWidth;r.drawImage(a,m,x,y,z,C,R,w,k)}}}requestAnimationFrame(e)})},watch:{board:function(){console.log(),this.blocks=this.board.blocks,this.dx=this.board.dx,this.dy=this.board.dy},blocks:function(){this.isGoal=this.board.isGoal(),this.manhattan=this.board.manhattan(),this.hamming=this.board.hamming(),this.clearCanvas(),this.$emit("change",{blocks:this.blocks,isGoal:this.isGoal,distance:this.manhattan})},isGoal:function(){this.isGoal&&this.$emit("finish")}},methods:{getImageStyle:function(t,e){var i=this.board.col(t)-1,s=this.board.row(t)-1,o=this.cellWidth*i,n=this.cellHeight*s;return{position:"absolute",margin:0,padding:0,width:this.width+"px",height:this.height+"px",transform:"translate(-"+o+"px, -"+n+"px"}},getBlockStyle:function(t,e){var i=0===t,s=(this.board.row(e+1)-1)*this.cellHeight,o=(this.board.col(e+1)-1)*this.cellWidth;return{userSelect:"none",display:i||this.isGoal?"none":"inherit",textAlign:"left",fontSize:"2em",boxSizing:"border-box",border:i?"":"1px solid black",backgroundColor:i?"":"#FFF",position:"absolute",left:o+"px",top:s+"px",height:this.cellHeight+"px",width:this.cellWidth+"px",overflow:"hidden"}},getCanvasStyle:function(){return{left:this.isGoal?"-100%":0}},getSourceStyle:function(){return{position:"absolute",display:this.isGoal?"block":"none",top:0,left:0}},clearCanvas:function(){this._shouldClear=!0},slide:function(t){this.board.slide(t),s.a.set(this,"blocks",this.board.blocks.concat())},onTouchEnd:function(t){var e=t.changedTouches[0],i=this.$el.getBoundingClientRect(),s={offsetX:e.clientX-i.left,offsetY:e.clientY-i.top};this.onClick(s)},onClick:function(t){var e=Math.floor(t.offsetX/this.cellWidth),i=Math.floor(t.offsetY/this.cellHeight)*this.dx+e;this.$refs.sourceImg.currentTime<.01&&this.$refs.sourceImg.play(),this.slide(i)},onClickBoard:function(){this.$el.focus()},onResize:function(){var t=this.$el.offsetWidth,e=this.$el.offsetHeight;this.autoResize&&(this.width=t,this.height=e)},onKeyUp:function(t){var e=this.board.blankpos,i=this.blocks.length;switch(t.keyCode){case 37:e+1<i&&this.slide(e+1);break;case 38:e+this.dx<i&&this.slide(e+this.dx);break;case 39:e-1>=0&&this.slide(e-1);break;case 40:e-this.dx>=0&&this.slide(e-this.dx)}}}},f={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"puzzle-board",attrs:{tabindex:"-1"},on:{keyup:function(e){e.preventDefault(),t.onKeyUp(e)},click:t.onClickBoard}},[i("canvas",{ref:"puzzle-canvas",staticClass:"puzzle-canvas",style:t.getCanvasStyle(),attrs:{width:2*t.width,height:t.height},on:{click:function(t){t.preventDefault()},mousedown:function(t){t.preventDefault()},mouseup:function(e){e.preventDefault(),t.onClick(e)},touchmove:function(e){e.preventDefault(),t.onTouchMove(e)},touchend:function(e){e.preventDefault(),t.onTouchEnd(e)}}}),t._v(" "),i("video",{ref:"sourceImg",style:t.getSourceStyle(),attrs:{autoplay:"",loop:"",muted:"",width:t.width,height:t.height,src:t.vidSrc},domProps:{muted:!0}},[t._v("No video")])])},staticRenderFns:[]};var p=i("VU/8")(u,f,!1,function(t){i("IjIJ")},"data-v-5cc2876c",null).exports,b=i("xkHn"),g=i.n(b),v={name:"App",components:{PuzzleBoard:p},data:function(){return{imgSrc:g.a,distance:null,isGoal:!1,autoResize:!0}},methods:{onPuzzleBoardFinish:function(){this.isGoal=!0},onPuzzleBoardChange:function(t){this.distance=t.distance}}},w={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("div",{staticClass:"header"},[t._v("\n    Vue-8-Puzzle\n    "),i("div",{staticClass:"status"},[t._v("\n      (Distance: "+t._s(t.distance)+")\n      "),t.isGoal?i("div",[t._v("\n        finish!!\n      ")]):t._e()])]),t._v(" "),i("div",{staticClass:"container"},[i("puzzle-board",{attrs:{src:t.imgSrc,autoResize:t.autoResize},on:{change:t.onPuzzleBoardChange,finish:t.onPuzzleBoardFinish}})],1)])},staticRenderFns:[]};var k=i("VU/8")(v,w,!1,function(t){i("fP7/")},null,null).exports;s.a.config.productionTip=!1,new s.a({el:"#app",components:{App:k},template:"<App/>"})},"fP7/":function(t,e){},wh8N:function(t,e,i){t.exports=i.p+"static/media/cat.ae00415.webm"},xkHn:function(t,e,i){t.exports=i.p+"static/img/robot.ca73761.jpg"}},["NHnr"]);
//# sourceMappingURL=app.5a01f61a01bb308ef244.js.map