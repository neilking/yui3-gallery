<<<<<<< HEAD
YUI.add("gallery-yui-slideshow",function(A){A.Transitions={none:{},staticTL:{from:{top:0,left:0},to:{top:0,left:0}},staticTR:{from:{top:0,right:0},to:{top:0,right:0}},staticBL:{from:{bottom:0,left:0},to:{bottom:0,left:0}},staticBR:{from:{bottom:0,right:0},to:{bottom:0,right:0}},fadeIn:{from:{opacity:0},to:{opacity:1}},fadeOut:{from:{opacity:1},to:{opacity:0}},swipeInLTR:{from:{left:function(B){return parseInt(-(B.get("parentNode").get("offsetWidth")),10);}},to:{left:0}},swipeOutLTR:{from:{left:0},to:{left:function(B){return parseInt(B.get("parentNode").get("offsetWidth"),10);}}},swipeInRTL:{from:{right:function(B){return parseInt(-(B.get("parentNode").get("offsetWidth")),10);}},to:{right:0}},swipeOutRTL:{from:{right:0},to:{right:function(B){return parseInt(B.get("parentNode").get("offsetWidth"),10);}}},swipeInTTB:{from:{top:function(B){return parseInt(-(B.get("parentNode").get("offsetHeight")),10);}},to:{top:0}},swipeOutTTB:{from:{top:0},to:{top:function(B){return parseInt(B.get("parentNode").get("offsetHeight"),10);}}},swipeInBTT:{from:{bottom:function(B){return parseInt(-(B.get("parentNode").get("offsetHeight")),10);}},to:{bottom:0}},swipeOutBTT:{from:{bottom:0},to:{bottom:function(B){return parseInt(B.get("parentNode").get("offsetHeight"),10);}}}};A.Slideshow=function(D,F){switch(typeof(D)){case"string":this.id=(D.indexOf("#")===0)?D:"#"+D;this.container=A.one(this.id);break;case"object":if(A.Lang.isArray(D)){var B=[];for(var C=0;C<D.length;C++){B.push(new A.Slideshow(D[C],F));}return B;}else{if(!A.Lang.isUndefined(D._node)){this.id=(D.get("id")==="")?A.guid():D.get("id");D.set("id",this.id);this.id=(this.id.indexOf("#")===0)?this.id:"#"+this.id;this.container=D;break;}else{if(!A.Lang.isUndefined(D.nodeName)){this.id=(D.id==="")?A.guid():D.id;this.id=(this.id.indexOf("#")===0)?this.id:"#"+this.id;this.container=A.one(this.id);break;}}}default:return false;}if(A.Lang.isObject(F)){if(!A.Lang.isUndefined(F.lazyLoad)){this.container.append(F.lazyLoad);}}this.slides=this.container.get("children");this.zIndex={container:1,slides:2,nextSlide:3,currentSlide:4};this.transIn=A.Transitions.fadeIn;this.transOut=A.Transitions.fadeOut;this.easingIn=A.Easing.easeOut;this.easingOut=A.Easing.easeOut;this.currentSlide=0;this.interval=4000;this.duration=0.5;this.autoplay=true;this.debug=false;this.loop=false;this.previousButton=false;this.nextButton=false;this.playButton=false;this.pauseButton=false;this.stopOnUser=true;if(A.Lang.isObject(F)){for(var C in F){if(F.hasOwnProperty(C)){this[C]=F[C];}}}var E=this;this.slideChange=function(J){var L={node:this.slides.item(this.currentSlide)};switch(J){case"next":if(this.currentSlide+1<this.slides.size()){this.currentSlide++;}else{this.currentSlide=0;}break;case"previous":if(this.currentSlide-1>-1){this.currentSlide--;}else{this.currentSlide=this.slides.size()-1;}break;default:this.currentSlide=parseInt(J,10);}var G={node:this.slides.item(this.currentSlide)};G.node.setStyle("zIndex",this.zIndex.nextSlide);for(var I in this.transOut){if(this.transOut.hasOwnProperty(I)){L[I]=this.transOut[I];}}for(var I in this.transIn){if(this.transIn.hasOwnProperty(I)){G[I]=this.transIn[I];}}var K=new A.Anim(L);var H=new A.Anim(G);if(A.Lang.isUndefined(L.duration)){K.set("duration",this.duration);}if(A.Lang.isUndefined(G.duration)){H.set("duration",this.duration);}if(A.Lang.isUndefined(L.easing)){K.set("easing",this.easingOut);}if(A.Lang.isUndefined(G.easing)){H.set("easing",this.easingIn);}K.on("end",function(){L.node.setStyle("zIndex",this.zIndex.slides);},this);H.on("end",function(){G.node.setStyle("zIndex",this.zIndex.currentSlide);},this);K.run();H.run();};this.startLoop=function(){if(this.autoplay===true){if(this.debug===false){this.loop=setInterval(function(){E.slideChange("next");},this.interval);}else{if(this.debug===true){this.loop=setTimeout(function(){E.slideChange("next");},this.interval);}}}};this.container.setStyles({position:"relative",zIndex:this.zIndex.container});this.slides.setStyles({position:"absolute",zIndex:this.zIndex.slides});this.slides.item(this.currentSlide).setStyle("zIndex",this.zIndex.currentSlide);this.slides.item(this.currentSlide+1).setStyle("zIndex",this.zIndex.nextSlide);if(this.previousButton!==false){A.on("click",function(){if(this.loop!==false&&this.stopOnUser===true){clearInterval(this.loop);this.loop=false;}this.slideChange("previous");},this.previousButton,this);}if(this.nextButton!==false){A.on("click",function(){if(this.loop!==false&&this.stopOnUser===true){clearInterval(this.loop);this.loop=false;}this.slideChange("next");},this.nextButton,this);}if(this.playButton!==false){A.on("click",function(){if(this.loop===false){this.startLoop();}},this.playButton,this);}if(this.pauseButton!==false){A.on("click",function(){if(this.loop!==false){clearInterval(this.loop);}},this.pauseButton,this);}this.startLoop();};},"@VERSION@",{requires:["anim"]});
=======
YUI.add("gallery-yui-slideshow",function(A){A.Transitions={none:{},staticTL:{from:{top:0,left:0},to:{top:0,left:0}},staticTR:{from:{top:0,right:0},to:{top:0,right:0}},staticBL:{from:{bottom:0,left:0},to:{bottom:0,left:0}},staticBR:{from:{bottom:0,right:0},to:{bottom:0,right:0}},fadeIn:{from:{opacity:0},to:{opacity:1}},fadeOut:{from:{opacity:1},to:{opacity:0}},swipeInLTR:{from:{left:function(B){return parseInt(-(B.get("parentNode").get("offsetWidth")),10);}},to:{left:0}},swipeOutLTR:{from:{left:0},to:{left:function(B){return parseInt(B.get("parentNode").get("offsetWidth"),10);}}},swipeInRTL:{from:{right:function(B){return parseInt(-(B.get("parentNode").get("offsetWidth")),10);}},to:{right:0}},swipeOutRTL:{from:{right:0},to:{right:function(B){return parseInt(B.get("parentNode").get("offsetWidth"),10);}}},swipeInTTB:{from:{top:function(B){return parseInt(-(B.get("parentNode").get("offsetHeight")),10);}},to:{top:0}},swipeOutTTB:{from:{top:0},to:{top:function(B){return parseInt(B.get("parentNode").get("offsetHeight"),10);}}},swipeInBTT:{from:{bottom:function(B){return parseInt(-(B.get("parentNode").get("offsetHeight")),10);}},to:{bottom:0}},swipeOutBTT:{from:{bottom:0},to:{bottom:function(B){return parseInt(B.get("parentNode").get("offsetHeight"),10);}}}};A.Slideshow=function(D,F){switch(typeof(D)){case"string":this.id=(D.indexOf("#")===0)?D:"#"+D;this.container=A.one(this.id);break;case"object":if(A.Lang.isArray(D)){var B=[];for(var C=0;C<D.length;C++){B.push(new A.Slideshow(D[C],F));}return B;}else{if(!A.Lang.isUndefined(D._node)){this.id=(D.get("id")==="")?A.guid():D.get("id");D.set("id",this.id);this.id=(this.id.indexOf("#")===0)?this.id:"#"+this.id;this.container=D;break;}else{if(!A.Lang.isUndefined(D.nodeName)){this.id=(D.id==="")?A.guid():D.id;this.id=(this.id.indexOf("#")===0)?this.id:"#"+this.id;this.container=A.one(this.id);break;}}}default:return false;}if(A.Lang.isObject(F)){if(!A.Lang.isUndefined(F.lazyLoad)){this.container.append(F.lazyLoad);}}this.slides=this.container.get("children");this.zIndex={container:1,slides:2,nextSlide:3,currentSlide:4};this.transIn=A.Transitions.fadeIn;this.transOut=A.Transitions.fadeOut;this.easingIn=A.Easing.easeOut;this.easingOut=A.Easing.easeOut;this.currentSlide=0;this.interval=4000;this.duration=0.5;this.autoplay=true;this.debug=false;this.loop=false;this.previousButton=false;this.nextButton=false;this.playButton=false;this.pauseButton=false;this.stopOnUser=true;if(A.Lang.isObject(F)){for(var C in F){if(F.hasOwnProperty(C)){this[C]=F[C];}}}var E=this;this.slideChange=function(J){var L={node:this.slides.item(this.currentSlide)};switch(J){case"next":if(this.currentSlide+1<this.slides.size()){this.currentSlide++;}else{this.currentSlide=0;}break;case"previous":if(this.currentSlide-1>-1){this.currentSlide--;}else{this.currentSlide=this.slides.size()-1;}break;default:this.currentSlide=parseInt(J,10);}var G={node:this.slides.item(this.currentSlide)};G.node.setStyle("zIndex",this.zIndex.nextSlide);for(var I in this.transOut){if(this.transOut.hasOwnProperty(I)){L[I]=this.transOut[I];}}for(var I in this.transIn){if(this.transIn.hasOwnProperty(I)){G[I]=this.transIn[I];}}var K=new A.Anim(L);var H=new A.Anim(G);if(A.Lang.isUndefined(L.duration)){K.set("duration",this.duration);}if(A.Lang.isUndefined(G.duration)){H.set("duration",this.duration);}if(A.Lang.isUndefined(L.easing)){K.set("easing",this.easingOut);}if(A.Lang.isUndefined(G.easing)){H.set("easing",this.easingIn);}K.on("end",function(){L.node.setStyle("zIndex",this.zIndex.slides);},this);H.on("end",function(){G.node.setStyle("zIndex",this.zIndex.currentSlide);},this);K.run();H.run();};this.startLoop=function(){if(this.autoplay===true){if(this.debug===false){this.loop=setInterval(function(){E.slideChange("next");},this.interval);}else{if(this.debug===true){this.loop=setTimeout(function(){E.slideChange("next");},this.interval);}}}};this.container.setStyles({position:"relative",zIndex:this.zIndex.container});this.slides.setStyles({position:"absolute",zIndex:this.zIndex.slides});this.slides.item(this.currentSlide).setStyle("zIndex",this.zIndex.currentSlide);this.slides.item(this.currentSlide+1).setStyle("zIndex",this.zIndex.nextSlide);if(this.previousButton!==false){A.on("click",function(){if(this.loop!==false&&this.stopOnUser===true){clearInterval(this.loop);this.loop=false;}this.slideChange("previous");},this.previousButton,this);}if(this.nextButton!==false){A.on("click",function(){if(this.loop!==false&&this.stopOnUser===true){clearInterval(this.loop);this.loop=false;}this.slideChange("next");},this.nextButton,this);}if(this.playButton!==false){A.on("click",function(){if(this.loop===false){this.startLoop();}},this.playButton,this);}if(this.pauseButton!==false){A.on("click",function(){if(this.loop!==false){clearInterval(this.loop);}},this.pauseButton,this);}this.startLoop();};},"gallery-2010.03.23-17-54",{requires:["anim"]});
>>>>>>> upstream/master
