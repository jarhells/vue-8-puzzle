webpackJsonp([1],{"+t+x":function(t,e,i){t.exports=i.p+"static/media/cat.18555a5.mp4"},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW");const n=0;var o;!function(t){t.Above="Above",t.Below="Below",t.Left="Left",t.Right="Right"}(o||(o={}));var a=class{constructor(t){if(this.dy=t.length,this.dx=t[0].length,this.dy<2||this.dx<2)throw new Error("cannot initialize with the array which has less than 2 col/rows");this.blocks=new Array(this.dx*this.dy);let e=0;for(let i=0;i<this.dy;i++)for(let s=0;s<this.dx;s++)this.blocks[e]=t[i][s],t[i][s]===n&&(this.blankpos=e),e++}row(t){return Math.floor(t/this.dx)}col(t){return t%this.dx}dimensions(){return{x:this.dx,y:this.dy}}checkInRange(...t){for(let e of t)if(null==this.blocks[e])throw new Error(`Index ${e} not in range [0 .. ${this.blocks.length-1}]`)}direction(t,e){if(this.checkInRange(t,e),this.row(e)===this.row(t)){if(e%this.dx==t%this.dx-1)return o.Left;if(e%this.dx==t%this.dx+1)return o.Right}return e===t+this.dx?o.Below:e===t-this.dx?o.Above:null}hamming(){let t=0;for(let e=0,i=1,s=this.blocks.length;e<s;e++,i++)this.blocks[e]!==n&&this.blocks[e]!==i&&t++;return t}manhattan(){let t=0;for(let e=0,i=this.blocks.length;e<i;e++)this.blocks[e]!==n&&(t+=Math.abs(this.row(this.blocks[e]-1)-this.row(e))+Math.abs(this.col(this.blocks[e]-1)-this.col(e)));return t}isGoal(){for(let t=0,e=this.blocks.length;t<e;t++)if(this.blocks[t]!==n&&this.blocks[t]!==t+1)return!1;return!0}swap(t,e,i){if(this.checkInRange(e,i),this.blocks[e]!==n&&this.blocks[i]!==n)throw new Error("cannot swap non-space block");return[t[e],t[i]]=[t[i],t[e]],this.blankpos=t[e]===n?e:i,this}swapAbove(t){return this.swap(this.blocks,t,t-this.dx)}swapBelow(t){return this.swap(this.blocks,t,t+this.dx)}swapLeft(t){return this.swap(this.blocks,t,t-1)}swapRight(t){return this.swap(this.blocks,t,t+1)}slide(t){switch(this.checkInRange(t),this.direction(t,this.blankpos)){case o.Above:return this.swapAbove(t);case o.Below:return this.swapBelow(t);case o.Left:return this.swapLeft(t);case o.Right:return this.swapRight(t);default:return this}}toArray2D(){let t=0;const e=[];for(let i=0;i<this.dy;i++){const i=[];for(let e=0;e<this.dx;e++,t++)i.push(this.blocks[t]);e.push(i)}return e}},r=i("y1vT"),l=i.n(r),h=i("vy4U"),c=i.n(h),u=function(t,e){for(var i=function(t,e){for(var i=[],s=0,n=0;n<e;n++){for(var o=[],a=0;a<t;a++)o.push(++s%(t*e));i.push(o)}return i}(t,e),s=new a(i),n=["swapAbove","swapLeft","swapRight","swapBelow"],o=n.length,r=0;r<100;r++){var l=n[Math.floor(Math.random()*o)];try{s[l](s.blankpos)}catch(t){continue}}return s},d={name:"PuzzleBoard",data:function(){this._blockPositions=[],this._isStarted=!1;var t=u(this.dx,this.dy);return{isTouchNeeded:!0,blocks:t.blocks,isGoal:!1,manhattan:null,hamming:null,width:0,height:0,board:t}},props:{animation:{type:Boolean,default:!0},dx:{type:Number,default:4},dy:{type:Number,default:4},sources:{required:!0},showNumber:{type:Boolean,default:!0},autoResize:{type:Boolean,default:!1},fps:{type:Number,default:30}},computed:{cellWidth:function(){return this.width/this.dx},cellHeight:function(){return this.height/this.dy}},mounted:function(){var t=this;this.onResize(),this.updateBlockPositions(!this.animation),window.addEventListener("resize",l()(this.onResize.bind(this),300)),this._tmpCanvas=document.createElement("canvas"),this._tmpCtx=this._tmpCanvas.getContext("2d"),this._lastRenderVideoTime=-1,this._lastRenderTime=0,this.$refs.sourceImg.addEventListener("play",function(){t.isTouchNeeded=!1});this.$nextTick(function e(){if(c.a.update(),null==t.$refs.sourceImg||t.$refs.sourceImg.readyState<3)requestAnimationFrame(e);else{var i=t.$refs.sourceImg,s=Date.now();if(i.currentTime!==t._lastRender&&s-t._lastRenderTime>1e3/t.fps){t._lastRenderVideoTime=i.currentTime,t._lastRenderTime=s;var n=t.$refs["puzzle-canvas"],o=n.getContext("2d"),a=t.width,r=t.height,l=i.videoWidth,h=i.videoHeight,u=Math.max(a/l,r/h);t._tmpCanvas.width=l*u,t._tmpCanvas.height=h*u,t._tmpCtx.drawImage(i,0,0,l*u,h*u),o.clearRect(0,0,t.width,t.height);var d=(l*u-a)/2,f=(h*u-r)/2;if(o.drawImage(t._tmpCanvas,d,f,a,r,a,0,a,r),t.isGoal)return void requestAnimationFrame(e);if(o.font="24px 'Avenir', Helvetica, Arial, sans-serif",o.fillStyle="#fafafa",o.textBaseline="top",t.showNumber)for(var m=0,p=t.blocks.length;m<p;m++){var v=Math.floor(m/t.dx),b=m%t.dx,g=String(m+1);o.strokeText(g,5+a+t.cellWidth*b,5+t.cellHeight*v),o.fillText(g,5+a+t.cellWidth*b,5+t.cellHeight*v)}for(var w=0,y=t.blocks.length;w<y;w++){var k=t.blocks[w];if(0!==k){var _=t.board.row(k-1),x=t.board.col(k-1),z=t.cellWidth*x+a,N=t.cellHeight*_,C=t._blockPositions[k];if(null!=C){var B=C.x,R=C.y;o.drawImage(n,z,N,t.cellWidth,t.cellHeight,B,R,t.cellWidth,t.cellHeight)}}}}requestAnimationFrame(e)}}),this.$emit("init")},watch:{dx:function(){this.initBoard()},dy:function(){this.initBoard()},board:function(){this.blocks=this.board.blocks},blocks:function(){this.updateBlockPositions(!this.animation),this.isGoal=this.board.isGoal(),this.manhattan=this.board.manhattan(),this.hamming=this.board.hamming(),this.$emit("change",{blocks:this.blocks,isGoal:this.isGoal,distance:this.manhattan})},isGoal:function(){this.isGoal&&this.$emit("finish")}},methods:{initBoard:function(){this.board=u(this.dx,this.dy),this._isStarted=!1,this.$emit("init")},updateBlockPositions:function(t){for(var e=this,i=function(i,s){var n=e.blocks[i],o=e.board.col(i),a=e.board.row(i),r=e.cellWidth*o,l=e.cellHeight*a,h=e._blockPositions[n]||{x:0,y:0};if(null==e._blockPositions[n]&&(e._blockPositions[n]=h),h.x-r==0&&h.y-l==0)return"continue";var u={x:h.x,y:h.y};t?(e._blockPositions[n].x=r,e._blockPositions[n].y=l):new c.a.Tween(u).to({x:r,y:l},200).easing(c.a.Easing.Quadratic.Out).onUpdate(function(){e._blockPositions[n].x=u.x,e._blockPositions[n].y=u.y}).start()},s=0,n=this.blocks.length;s<n;s++)i(s)},getCanvasStyle:function(){return{left:this.isGoal?"-100%":0}},getSourceStyle:function(){return{display:"none"}},slide:function(t){this._isStarted||(this._isStarted=!0,this.$emit("start")),this.board.slide(t),s.a.set(this,"blocks",this.board.blocks.concat())},onTouchEnd:function(t){this.isTouchNeeded&&(this.$refs.sourceImg.play(),this.isTouchNeeded=!1);var e=t.changedTouches[0],i=this.$el.getBoundingClientRect(),s={offsetX:e.clientX-i.left,offsetY:e.clientY-i.top};this.onClick(s)},onClick:function(t){var e=Math.floor(t.offsetX/this.cellWidth),i=Math.floor(t.offsetY/this.cellHeight)*this.dx+e;this.slide(i)},onClickBoard:function(){this.$el.focus()},onResize:function(){var t=this.$el.offsetWidth,e=this.$el.offsetHeight;this.autoResize&&(this.width=t,this.height=e),this.updateBlockPositions(!0)},onKeyUp:function(t){var e=this.board.blankpos,i=this.blocks.length;switch(t.keyCode){case 37:e+1<i&&this.slide(e+1);break;case 38:e+this.dx<i&&this.slide(e+this.dx);break;case 39:e-1>=0&&this.slide(e-1);break;case 40:e-this.dx>=0&&this.slide(e-this.dx)}}}},f={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"puzzle-board",attrs:{tabindex:"-1"},on:{keyup:function(e){e.preventDefault(),t.onKeyUp(e)},click:t.onClickBoard}},[t.isTouchNeeded?i("div",{staticClass:"puzzle-message"},[t._v("Touch to start")]):t._e(),t._v(" "),i("canvas",{ref:"puzzle-canvas",staticClass:"puzzle-canvas",style:t.getCanvasStyle(),attrs:{width:2*t.width,height:t.height},on:{click:function(t){t.preventDefault()},mousedown:function(t){t.preventDefault()},mouseup:function(e){e.preventDefault(),t.onClick(e)},touchend:function(e){e.preventDefault(),t.onTouchEnd(e)}}}),t._v(" "),i("video",{ref:"sourceImg",style:t.getSourceStyle(),attrs:{autoplay:"",loop:"",playsinline:"",muted:"true",width:t.width,height:t.height},domProps:{muted:!0}},[t._l(t.sources,function(t){return i("source",{key:t.src,attrs:{src:t.src,type:t.type}})}),t._v("\n  No video")],2)])},staticRenderFns:[]};var m=i("VU/8")(d,f,!1,function(t){i("lQGe")},"data-v-ab78a1ee",null).exports,p=i("+t+x"),v=i.n(p),b={Easy:{x:3,y:3},Normal:{x:4,y:4},Difficult:{x:5,y:5}},g={Low:5,Middle:20,High:30},w={name:"App",components:{PuzzleBoard:m},data:function(){return{difficulty:"Easy",quality:"Middle",distance:null,isGoal:!1,autoResize:!0,showNumber:!1,animation:!1,sources:[{src:v.a,type:"video/mp4"}]}},computed:{dimensions:function(){return b[this.difficulty]},fps:function(){return g[this.quality]}},methods:{onPuzzleBoardInit:function(){console.log("init")},onPuzzleBoardStart:function(){console.log("start")},onPuzzleBoardFinish:function(){console.log("finish"),this.isGoal=!0},onPuzzleBoardChange:function(t){console.log("change"),this.distance=t.distance}}},y={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("div",{staticClass:"header"},[i("span",{staticClass:"header-item title"},[t._v("Vue-8-Puzzle")]),t._v(" "),i("span",{staticClass:"header-item distance"},[t._v(" d: "+t._s(t.distance)+" ")]),t._v(" "),i("span",{staticClass:"header-item"},[i("label",{attrs:{for:"showNumber"}},[t._v("#:")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.showNumber,expression:"showNumber"}],attrs:{type:"checkbox",id:"showNumber"},domProps:{checked:Array.isArray(t.showNumber)?t._i(t.showNumber,null)>-1:t.showNumber},on:{change:function(e){var i=t.showNumber,s=e.target,n=!!s.checked;if(Array.isArray(i)){var o=t._i(i,null);s.checked?o<0&&(t.showNumber=i.concat([null])):o>-1&&(t.showNumber=i.slice(0,o).concat(i.slice(o+1)))}else t.showNumber=n}}})]),t._v(" "),i("span",{staticClass:"header-item"},[i("label",{attrs:{for:"animation"}},[t._v("a:")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.animation,expression:"animation"}],attrs:{type:"checkbox",id:"animation"},domProps:{checked:Array.isArray(t.animation)?t._i(t.animation,null)>-1:t.animation},on:{change:function(e){var i=t.animation,s=e.target,n=!!s.checked;if(Array.isArray(i)){var o=t._i(i,null);s.checked?o<0&&(t.animation=i.concat([null])):o>-1&&(t.animation=i.slice(0,o).concat(i.slice(o+1)))}else t.animation=n}}})]),t._v(" "),i("span",{staticClass:"header-item"},[i("select",{directives:[{name:"model",rawName:"v-model",value:t.quality,expression:"quality"}],on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.quality=e.target.multiple?i:i[0]}}},[i("option",[t._v("Low")]),t._v(" "),i("option",[t._v("Middle")]),t._v(" "),i("option",[t._v("High")])])]),t._v(" "),i("span",{staticClass:"header-item"},[i("select",{directives:[{name:"model",rawName:"v-model",value:t.difficulty,expression:"difficulty"}],on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.difficulty=e.target.multiple?i:i[0]}}},[i("option",[t._v("Easy")]),t._v(" "),i("option",[t._v("Normal")]),t._v(" "),i("option",[t._v("Difficult")])])]),t._v(" "),i("span",{staticClass:"header-item"},[t.isGoal?[t._v("\n        finish!!\n      ")]:t._e()],2)]),t._v(" "),i("div",{staticClass:"container"},[i("puzzle-board",{attrs:{autoResize:t.autoResize,showNumber:t.showNumber,dx:t.dimensions.x,dy:t.dimensions.y,sources:t.sources,animation:t.animation,fps:t.fps},on:{init:t.onPuzzleBoardInit,start:t.onPuzzleBoardStart,change:t.onPuzzleBoardChange,finish:t.onPuzzleBoardFinish}})],1)])},staticRenderFns:[]};var k=i("VU/8")(w,y,!1,function(t){i("w08s")},null,null).exports;s.a.config.productionTip=!1,new s.a({el:"#app",components:{App:k},template:"<App/>"})},lQGe:function(t,e){},w08s:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.1092b5cc4903c007f0cc.js.map