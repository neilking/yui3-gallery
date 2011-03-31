YUI.add("gallery-flickr-api",function(a){YUI.namespace("flickrAPITransactions");var k="http://api.flickr.com/services/rest/",m={format:"json",clientType:"yui-3-flickrapi-module"},f="flapicb",g=YUI.flickrAPITransactions,c=function(){return true;},j=function(){return true;},h=function(){return true;},b={last_response_id:0,id_map:{},response_map:{},setResponse:function(p,o){var n=b;n.response_map[p]=o;return n.response_map[p];},setId:function(q,p){var o=b,n=p;o.id_map[q]=n;o.last_response_id=n;return n;}},e=function(q){var n="";for(var p in q){if(q.hasOwnProperty(p)){n+=p+"="+q[p]+"&";}}return n.substr(0,n.length-1);},i=function(u,r,n,p){var t=b,s,o;if(p){try{s=a.JSON.parse(r[1].responseText);}catch(q){}o=[{params:r[2].params,data:s}].concat(r);}else{s=(t.response_map[t.id_map[r[0].tId]])?t.response_map[t.id_map[r[0].tId]][0]:null;o=[{params:r[0].data,data:s}].concat(r);}if(s){if(s.stat==="ok"){return u.apply(a,o);}else{this.failure.apply(a,o);}}else{this.failure.apply(a,o);}},d=function(p,r,q){var o=b.last_response_id+1,n=a.Get.script(p+"?"+e(r)+"&"+"jsoncallback=YUI.flickrAPITransactions."+f+o+"&"+"cachebust="+(new Date()).getTime(),q);b.setId(n.tId,o);g[f+o]=function(s){var t=b.setResponse(o,arguments);if(t){a.later(1000,a,function(){delete g[f+o];});}};return n;},l=function(n,p,o){a.use("io",function(q){q.io(n,{method:"POST",data:e(p),timeout:30000,on:o,"arguments":{params:p}});});};a.flickrAPI={callMethod:function(o,q,n,s){s=s||{};oYUIPOSTConf=s||{};q=q||{};var p=k;q=a.merge(a.config.flickrAPI,q);if(q.flickr_api_uri){p=q.flickr_api_uri;delete q.flickr_api_uri;}a.Object.each(q,function(v,t,u){u[t]=encodeURIComponent(v);});q.method=o;if(a.Lang.isFunction(n)){n={success:n,failure:c,progress:j,timeout:h};}if(a.Lang.isObject(n)){s=a.merge(s,{onSuccess:function(){a.fire("flickrAPI:success");return i.apply(n,[n.success,arguments,1]);},onFailure:function(){if(b.response_map[b.id_map[arguments[0].tId]]!==null){a.fire("flickrAPI:failure");return i.apply(n,[n.failure,arguments,0]);}},onProgress:function(){a.fire("flickrAPI:progress");return i.apply(n,[n.progress,arguments,null]);},onTimeout:function(){b.response_map[b.id_map[arguments[0].tId]]=null;a.Get.abort(arguments[0].tId);a.fire("flickrAPI:timeout");return i.apply(n,[n.timeout,arguments,0]);}});oYUIPOSTConf=a.merge(oYUIPOSTConf,{success:function(){a.fire("flickrAPI:success");return i.apply(n,[n.success,arguments,1,1]);},failure:function(){a.fire("flickrAPI:failure");return i.apply(n,[n.failure,arguments,0,1]);},timeout:function(){a.fire("flickrAPI:timeout");return i.apply(n,[n.timeout,arguments,0,1]);}});}s.scope=a;var r=a.merge(s.data,m,q);s.data=r;if(/(?:add|create|delete|edit|mute|post|record|remove|set|submit|unmute|move|sort|hide|block|unblock|insert)[a-zA-Z]*$/.test(r.method)){r.nojsoncallback=1;return l(p,r,oYUIPOSTConf);}else{return d(p,r,s);}}};},"gallery-2011.02.16-20-31",{requires:["event","dump","io-xdr","substitute","json-parse"]});