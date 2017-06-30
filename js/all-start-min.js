/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-shiv-mq-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function D(a){j.cssText=a}function E(a,b){return D(n.join(a+";")+(b||""))}function F(a,b){return typeof a===b}function G(a,b){return!!~(""+a).indexOf(b)}function H(a,b){for(var d in a){var e=a[d];if(!G(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function I(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:F(f,"function")?f.bind(d||b):f}return!1}function J(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+p.join(d+" ")+d).split(" ");return F(b,"string")||F(b,"undefined")?H(e,b):(e=(a+" "+q.join(d+" ")+d).split(" "),I(e,b,c))}function K(){e.input=function(c){for(var d=0,e=c.length;d<e;d++)u[c[d]]=c[d]in k;return u.list&&(u.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),u}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)k.setAttribute("type",f=a[d]),e=k.type!=="text",e&&(k.value=l,k.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&k.style.WebkitAppearance!==c?(g.appendChild(k),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(k,null).WebkitAppearance!=="textfield"&&k.offsetHeight!==0,g.removeChild(k)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=k.checkValidity&&k.checkValidity()===!1:e=k.value!=l)),t[a[d]]=!!e;return t}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l=":)",m={}.toString,n=" -webkit- -moz- -o- -ms- ".split(" "),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r={svg:"http://www.w3.org/2000/svg"},s={},t={},u={},v=[],w=v.slice,x,y=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},z=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b).matches;var d;return y("@media "+b+" { #"+h+" { position: absolute; } }",function(b){d=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle)["position"]=="absolute"}),d},A=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;return f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=F(e[d],"function"),F(e[d],"undefined")||(e[d]=c),e.removeAttribute(d))),e=null,f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),B={}.hasOwnProperty,C;!F(B,"undefined")&&!F(B.call,"undefined")?C=function(a,b){return B.call(a,b)}:C=function(a,b){return b in a&&F(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=w.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(w.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(w.call(arguments)))};return e}),s.flexbox=function(){return J("flexWrap")},s.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")},s.canvastext=function(){return!!e.canvas&&!!F(b.createElement("canvas").getContext("2d").fillText,"function")},s.webgl=function(){return!!a.WebGLRenderingContext},s.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:y(["@media (",n.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},s.geolocation=function(){return"geolocation"in navigator},s.postmessage=function(){return!!a.postMessage},s.websqldatabase=function(){return!!a.openDatabase},s.indexedDB=function(){return!!J("indexedDB",a)},s.hashchange=function(){return A("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},s.history=function(){return!!a.history&&!!history.pushState},s.draganddrop=function(){var a=b.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a},s.websockets=function(){return"WebSocket"in a||"MozWebSocket"in a},s.rgba=function(){return D("background-color:rgba(150,255,150,.5)"),G(j.backgroundColor,"rgba")},s.hsla=function(){return D("background-color:hsla(120,40%,100%,.5)"),G(j.backgroundColor,"rgba")||G(j.backgroundColor,"hsla")},s.multiplebgs=function(){return D("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(j.background)},s.backgroundsize=function(){return J("backgroundSize")},s.borderimage=function(){return J("borderImage")},s.borderradius=function(){return J("borderRadius")},s.boxshadow=function(){return J("boxShadow")},s.textshadow=function(){return b.createElement("div").style.textShadow===""},s.opacity=function(){return E("opacity:.55"),/^0.55$/.test(j.opacity)},s.cssanimations=function(){return J("animationName")},s.csscolumns=function(){return J("columnCount")},s.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return D((a+"-webkit- ".split(" ").join(b+a)+n.join(c+a)).slice(0,-a.length)),G(j.backgroundImage,"gradient")},s.cssreflections=function(){return J("boxReflect")},s.csstransforms=function(){return!!J("transform")},s.csstransforms3d=function(){var a=!!J("perspective");return a&&"webkitPerspective"in g.style&&y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},s.csstransitions=function(){return J("transition")},s.fontface=function(){var a;return y('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&g.indexOf(d.split(" ")[0])===0}),a},s.generatedcontent=function(){var a;return y(["#",h,"{font:0/0 a}#",h,':after{content:"',l,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a},s.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(d){}return c},s.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(d){}return c},s.localstorage=function(){try{return localStorage.setItem(h,h),localStorage.removeItem(h),!0}catch(a){return!1}},s.sessionstorage=function(){try{return sessionStorage.setItem(h,h),sessionStorage.removeItem(h),!0}catch(a){return!1}},s.webworkers=function(){return!!a.Worker},s.applicationcache=function(){return!!a.applicationCache},s.svg=function(){return!!b.createElementNS&&!!b.createElementNS(r.svg,"svg").createSVGRect},s.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==r.svg},s.smil=function(){return!!b.createElementNS&&/SVGAnimate/.test(m.call(b.createElementNS(r.svg,"animate")))},s.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(m.call(b.createElementNS(r.svg,"clipPath")))};for(var L in s)C(s,L)&&(x=L.toLowerCase(),e[x]=s[L](),v.push((e[x]?"":"no-")+x));return e.input||K(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)C(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},D(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._prefixes=n,e._domPrefixes=q,e._cssomPrefixes=p,e.mq=z,e.hasEvent=A,e.testProp=function(a){return H([a])},e.testAllProps=J,e.testStyles=y,e.prefixed=function(a,b,c){return b?J(a,b,c):J(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+v.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};

/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas. Dual MIT/BSD license */
/*! NOTE: If you're already including a window.matchMedia polyfill via Modernizr or otherwise, you don't need this part */
window.matchMedia=window.matchMedia||(function(e,f){var c,a=e.documentElement,b=a.firstElementChild||a.firstChild,d=e.createElement("body"),g=e.createElement("div");g.id="mq-test-1";g.style.cssText="position:absolute;top:-100em";d.style.background="none";d.appendChild(g);return function(h){g.innerHTML='&shy;<style media="'+h+'"> #mq-test-1 { width: 42px; }</style>';a.insertBefore(d,b);c=g.offsetWidth==42;a.removeChild(d);return{matches:c,media:h}}})(document);

/*! Respond.js v1.1.0: min/max-width media query polyfill. (c) Scott Jehl. MIT/GPLv2 Lic. j.mp/respondjs  */
(function(e){e.respond={};respond.update=function(){};respond.mediaQueriesSupported=e.matchMedia&&e.matchMedia("only all").matches;if(respond.mediaQueriesSupported){return}var w=e.document,s=w.documentElement,i=[],k=[],q=[],o={},h=30,f=w.getElementsByTagName("head")[0]||s,g=w.getElementsByTagName("base")[0],b=f.getElementsByTagName("link"),d=[],a=function(){var D=b,y=D.length,B=0,A,z,C,x;for(;B<y;B++){A=D[B],z=A.href,C=A.media,x=A.rel&&A.rel.toLowerCase()==="stylesheet";if(!!z&&x&&!o[z]){if(A.styleSheet&&A.styleSheet.rawCssText){m(A.styleSheet.rawCssText,z,C);o[z]=true}else{if((!/^([a-zA-Z:]*\/\/)/.test(z)&&!g)||z.replace(RegExp.$1,"").split("/")[0]===e.location.host){d.push({href:z,media:C})}}}}u()},u=function(){if(d.length){var x=d.shift();n(x.href,function(y){m(y,x.href,x.media);o[x.href]=true;u()})}},m=function(I,x,z){var G=I.match(/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi),J=G&&G.length||0,x=x.substring(0,x.lastIndexOf("/")),y=function(K){return K.replace(/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,"$1"+x+"$2$3")},A=!J&&z,D=0,C,E,F,B,H;if(x.length){x+="/"}if(A){J=1}for(;D<J;D++){C=0;if(A){E=z;k.push(y(I))}else{E=G[D].match(/@media *([^\{]+)\{([\S\s]+?)$/)&&RegExp.$1;k.push(RegExp.$2&&y(RegExp.$2))}B=E.split(",");H=B.length;for(;C<H;C++){F=B[C];i.push({media:F.split("(")[0].match(/(only\s+)?([a-zA-Z]+)\s?/)&&RegExp.$2||"all",rules:k.length-1,hasquery:F.indexOf("(")>-1,minw:F.match(/\(min\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:F.match(/\(max\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}}j()},l,r,v=function(){var z,A=w.createElement("div"),x=w.body,y=false;A.style.cssText="position:absolute;font-size:1em;width:1em";if(!x){x=y=w.createElement("body");x.style.background="none"}x.appendChild(A);s.insertBefore(x,s.firstChild);z=A.offsetWidth;if(y){s.removeChild(x)}else{x.removeChild(A)}z=p=parseFloat(z);return z},p,j=function(I){var x="clientWidth",B=s[x],H=w.compatMode==="CSS1Compat"&&B||w.body[x]||B,D={},G=b[b.length-1],z=(new Date()).getTime();if(I&&l&&z-l<h){clearTimeout(r);r=setTimeout(j,h);return}else{l=z}for(var E in i){var K=i[E],C=K.minw,J=K.maxw,A=C===null,L=J===null,y="em";if(!!C){C=parseFloat(C)*(C.indexOf(y)>-1?(p||v()):1)}if(!!J){J=parseFloat(J)*(J.indexOf(y)>-1?(p||v()):1)}if(!K.hasquery||(!A||!L)&&(A||H>=C)&&(L||H<=J)){if(!D[K.media]){D[K.media]=[]}D[K.media].push(k[K.rules])}}for(var E in q){if(q[E]&&q[E].parentNode===f){f.removeChild(q[E])}}for(var E in D){var M=w.createElement("style"),F=D[E].join("\n");M.type="text/css";M.media=E;f.insertBefore(M,G.nextSibling);if(M.styleSheet){M.styleSheet.cssText=F}else{M.appendChild(w.createTextNode(F))}q.push(M)}},n=function(x,z){var y=c();if(!y){return}y.open("GET",x,true);y.onreadystatechange=function(){if(y.readyState!=4||y.status!=200&&y.status!=304){return}z(y.responseText)};if(y.readyState==4){return}y.send(null)},c=(function(){var x=false;try{x=new XMLHttpRequest()}catch(y){x=new ActiveXObject("Microsoft.XMLHTTP")}return function(){return x}})();a();respond.update=a;function t(){j(true)}if(e.addEventListener){e.addEventListener("resize",t,false)}else{if(e.attachEvent){e.attachEvent("onresize",t)}}})(this);
/*!
 * Sizzle CSS Selector Engine
 * Copyright 2012 jQuery Foundation and other contributors
 * Released under the MIT license
 * http://sizzlejs.com/
 */
;(function(e,t){function P(e){var t=e.length,n=b.type(e);return b.isWindow(e)?!1:e.nodeType===1&&t?!0:n==="array"||n!=="function"&&(t===0||typeof t=="number"&&t>0&&t-1 in e)}function B(e){var t=H[e]={};return b.each(e.match(E)||[],function(e,n){t[n]=!0}),t}function I(e,n,r,i){if(!b.acceptData(e))return;var s,o,u=b.expando,a=typeof n=="string",f=e.nodeType,c=f?b.cache:e,h=f?e[u]:e[u]&&u;if((!h||!c[h]||!i&&!c[h].data)&&a&&r===t)return;h||(f?e[u]=h=l.pop()||b.guid++:h=u),c[h]||(c[h]={},f||(c[h].toJSON=b.noop));if(typeof n=="object"||typeof n=="function")i?c[h]=b.extend(c[h],n):c[h].data=b.extend(c[h].data,n);return s=c[h],i||(s.data||(s.data={}),s=s.data),r!==t&&(s[b.camelCase(n)]=r),a?(o=s[n],o==null&&(o=s[b.camelCase(n)])):o=s,o}function q(e,t,n){if(!b.acceptData(e))return;var r,i,s,o=e.nodeType,u=o?b.cache:e,a=o?e[b.expando]:b.expando;if(!u[a])return;if(t){s=n?u[a]:u[a].data;if(s){b.isArray(t)?t=t.concat(b.map(t,b.camelCase)):t in s?t=[t]:(t=b.camelCase(t),t in s?t=[t]:t=t.split(" "));for(r=0,i=t.length;r<i;r++)delete s[t[r]];if(!(n?U:b.isEmptyObject)(s))return}}if(!n){delete u[a].data;if(!U(u[a]))return}o?b.cleanData([e],!0):b.support.deleteExpando||u!=u.window?delete u[a]:u[a]=null}function R(e,n,r){if(r===t&&e.nodeType===1){var i="data-"+n.replace(F,"-$1").toLowerCase();r=e.getAttribute(i);if(typeof r=="string"){try{r=r==="true"?!0:r==="false"?!1:r==="null"?null:+r+""===r?+r:j.test(r)?b.parseJSON(r):r}catch(s){}b.data(e,n,r)}else r=t}return r}function U(e){var t;for(t in e){if(t==="data"&&b.isEmptyObject(e[t]))continue;if(t!=="toJSON")return!1}return!0}function it(){return!0}function st(){return!1}function ct(e,t){do e=e[t];while(e&&e.nodeType!==1);return e}function ht(e,t,n){t=t||0;if(b.isFunction(t))return b.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return b.grep(e,function(e){return e===t===n});if(typeof t=="string"){var r=b.grep(e,function(e){return e.nodeType===1});if(at.test(t))return b.filter(t,r,!n);t=b.filter(t,r)}return b.grep(e,function(e){return b.inArray(e,t)>=0===n})}function pt(e){var t=dt.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}function Mt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function _t(e){var t=e.getAttributeNode("type");return e.type=(t&&t.specified)+"/"+e.type,e}function Dt(e){var t=Ct.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function Pt(e,t){var n,r=0;for(;(n=e[r])!=null;r++)b._data(n,"globalEval",!t||b._data(t[r],"globalEval"))}function Ht(e,t){if(t.nodeType!==1||!b.hasData(e))return;var n,r,i,s=b._data(e),o=b._data(t,s),u=s.events;if(u){delete o.handle,o.events={};for(n in u)for(r=0,i=u[n].length;r<i;r++)b.event.add(t,n,u[n][r])}o.data&&(o.data=b.extend({},o.data))}function Bt(e,t){var n,r,i;if(t.nodeType!==1)return;n=t.nodeName.toLowerCase();if(!b.support.noCloneEvent&&t[b.expando]){i=b._data(t);for(r in i.events)b.removeEvent(t,r,i.handle);t.removeAttribute(b.expando)}if(n==="script"&&t.text!==e.text)_t(t).text=e.text,Dt(t);else if(n==="object")t.parentNode&&(t.outerHTML=e.outerHTML),b.support.html5Clone&&e.innerHTML&&!b.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML);else if(n==="input"&&xt.test(e.type))t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value);else if(n==="option")t.defaultSelected=t.selected=e.defaultSelected;else if(n==="input"||n==="textarea")t.defaultValue=e.defaultValue}function jt(e,n){var r,s,o=0,u=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!u)for(u=[],r=e.childNodes||e;(s=r[o])!=null;o++)!n||b.nodeName(s,n)?u.push(s):b.merge(u,jt(s,n));return n===t||n&&b.nodeName(e,n)?b.merge([e],u):u}function Ft(e){xt.test(e.type)&&(e.defaultChecked=e.checked)}function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--){t=en[i]+n;if(t in e)return t}return r}function nn(e,t){return e=t||e,b.css(e,"display")==="none"||!b.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,s=[],o=0,u=e.length;for(;o<u;o++){r=e[o];if(!r.style)continue;s[o]=b._data(r,"olddisplay"),n=r.style.display,t?(!s[o]&&n==="none"&&(r.style.display=""),r.style.display===""&&nn(r)&&(s[o]=b._data(r,"olddisplay",an(r.nodeName)))):s[o]||(i=nn(r),(n&&n!=="none"||!i)&&b._data(r,"olddisplay",i?n:b.css(r,"display")))}for(o=0;o<u;o++){r=e[o];if(!r.style)continue;if(!t||r.style.display==="none"||r.style.display==="")r.style.display=t?s[o]||"":"none"}return e}function sn(e,t,n){var r=$t.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function on(e,t,n,r,i){var s=n===(r?"border":"content")?4:t==="width"?1:0,o=0;for(;s<4;s+=2)n==="margin"&&(o+=b.css(e,n+Zt[s],!0,i)),r?(n==="content"&&(o-=b.css(e,"padding"+Zt[s],!0,i)),n!=="margin"&&(o-=b.css(e,"border"+Zt[s]+"Width",!0,i))):(o+=b.css(e,"padding"+Zt[s],!0,i),n!=="padding"&&(o+=b.css(e,"border"+Zt[s]+"Width",!0,i)));return o}function un(e,t,n){var r=!0,i=t==="width"?e.offsetWidth:e.offsetHeight,s=qt(e),o=b.support.boxSizing&&b.css(e,"boxSizing",!1,s)==="border-box";if(i<=0||i==null){i=Rt(e,t,s);if(i<0||i==null)i=e.style[t];if(Jt.test(i))return i;r=o&&(b.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+on(e,t,n||(o?"border":"content"),r,s)+"px"}function an(e){var t=s,n=Qt[e];if(!n){n=fn(e,t);if(n==="none"||!n)It=(It||b("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(It[0].contentWindow||It[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=fn(e,t),It.detach();Qt[e]=n}return n}function fn(e,t){var n=b(t.createElement(e)).appendTo(t.body),r=b.css(n[0],"display");return n.remove(),r}function vn(e,t,n,r){var i;if(b.isArray(t))b.each(t,function(t,i){n||cn.test(e)?r(e,i):vn(e+"["+(typeof i=="object"?t:"")+"]",i,n,r)});else if(!n&&b.type(t)==="object")for(i in t)vn(e+"["+i+"]",t[i
],n,r);else r(e,t)}function _n(e){return function(t,n){typeof t!="string"&&(n=t,t="*");var r,i=0,s=t.toLowerCase().match(E)||[];if(b.isFunction(n))while(r=s[i++])r[0]==="+"?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function Dn(e,t,n,r){function o(u){var a;return i[u]=!0,b.each(e[u]||[],function(e,u){var f=u(t,n,r);if(typeof f=="string"&&!s&&!i[f])return t.dataTypes.unshift(f),o(f),!1;if(s)return!(a=f)}),a}var i={},s=e===An;return o(t.dataTypes[0])||!i["*"]&&o("*")}function Pn(e,n){var r,i,s=b.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((s[i]?e:r||(r={}))[i]=n[i]);return r&&b.extend(!0,e,r),e}function Hn(e,n,r){var i,s,o,u,a=e.contents,f=e.dataTypes,l=e.responseFields;for(u in l)u in r&&(n[l[u]]=r[u]);while(f[0]==="*")f.shift(),s===t&&(s=e.mimeType||n.getResponseHeader("Content-Type"));if(s)for(u in a)if(a[u]&&a[u].test(s)){f.unshift(u);break}if(f[0]in r)o=f[0];else{for(u in r){if(!f[0]||e.converters[u+" "+f[0]]){o=u;break}i||(i=u)}o=o||i}if(o)return o!==f[0]&&f.unshift(o),r[o]}function Bn(e,t){var n,r,i,s,o={},u=0,a=e.dataTypes.slice(),f=a[0];e.dataFilter&&(t=e.dataFilter(t,e.dataType));if(a[1])for(i in e.converters)o[i.toLowerCase()]=e.converters[i];for(;r=a[++u];)if(r!=="*"){if(f!=="*"&&f!==r){i=o[f+" "+r]||o["* "+r];if(!i)for(n in o){s=n.split(" ");if(s[1]===r){i=o[f+" "+s[0]]||o["* "+s[0]];if(i){i===!0?i=o[n]:o[n]!==!0&&(r=s[0],a.splice(u--,0,r));break}}}if(i!==!0)if(i&&e["throws"])t=i(t);else try{t=i(t)}catch(l){return{state:"parsererror",error:i?l:"No conversion from "+f+" to "+r}}}f=r}return{state:"success",data:t}}function zn(){try{return new e.XMLHttpRequest}catch(t){}}function Wn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}function Yn(){return setTimeout(function(){Xn=t}),Xn=b.now()}function Zn(e,t){b.each(t,function(t,n){var r=(Gn[t]||[]).concat(Gn["*"]),i=0,s=r.length;for(;i<s;i++)if(r[i].call(e,t,n))return})}function er(e,t,n){var r,i,s=0,o=Qn.length,u=b.Deferred().always(function(){delete a.elem}),a=function(){if(i)return!1;var t=Xn||Yn(),n=Math.max(0,f.startTime+f.duration-t),r=n/f.duration||0,s=1-r,o=0,a=f.tweens.length;for(;o<a;o++)f.tweens[o].run(s);return u.notifyWith(e,[f,s,n]),s<1&&a?n:(u.resolveWith(e,[f]),!1)},f=u.promise({elem:e,props:b.extend({},t),opts:b.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Yn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=b.Tween(e,f.opts,t,n,f.opts.specialEasing[t]||f.opts.easing);return f.tweens.push(r),r},stop:function(t){var n=0,r=t?f.tweens.length:0;if(i)return this;i=!0;for(;n<r;n++)f.tweens[n].run(1);return t?u.resolveWith(e,[f,t]):u.rejectWith(e,[f,t]),this}}),l=f.props;tr(l,f.opts.specialEasing);for(;s<o;s++){r=Qn[s].call(f,e,l,f.opts);if(r)return r}return Zn(f,l),b.isFunction(f.opts.start)&&f.opts.start.call(e,f),b.fx.timer(b.extend(a,{elem:e,anim:f,queue:f.opts.queue})),f.progress(f.opts.progress).done(f.opts.done,f.opts.complete).fail(f.opts.fail).always(f.opts.always)}function tr(e,t){var n,r,i,s,o;for(i in e){r=b.camelCase(i),s=t[r],n=e[i],b.isArray(n)&&(s=n[1],n=e[i]=n[0]),i!==r&&(e[r]=n,delete e[i]),o=b.cssHooks[r];if(o&&"expand"in o){n=o.expand(n),delete e[r];for(i in n)i in e||(e[i]=n[i],t[i]=s)}else t[r]=s}}function nr(e,t,n){var r,i,s,o,u,a,f,l,c,h=this,p=e.style,d={},v=[],m=e.nodeType&&nn(e);n.queue||(l=b._queueHooks(e,"fx"),l.unqueued==null&&(l.unqueued=0,c=l.empty.fire,l.empty.fire=function(){l.unqueued||c()}),l.unqueued++,h.always(function(){h.always(function(){l.unqueued--,b.queue(e,"fx").length||l.empty.fire()})})),e.nodeType===1&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],b.css(e,"display")==="inline"&&b.css(e,"float")==="none"&&(!b.support.inlineBlockNeedsLayout||an(e.nodeName)==="inline"?p.display="inline-block":p.zoom=1)),n.overflow&&(p.overflow="hidden",b.support.shrinkWrapBlocks||h.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(i in t){o=t[i];if($n.exec(o)){delete t[i],a=a||o==="toggle";if(o===(m?"hide":"show"))continue;v.push(i)}}s=v.length;if(s){u=b._data(e,"fxshow")||b._data(e,"fxshow",{}),"hidden"in u&&(m=u.hidden),a&&(u.hidden=!m),m?b(e).show():h.done(function(){b(e).hide()}),h.done(function(){var t;b._removeData(e,"fxshow");for(t in d)b.style(e,t,d[t])});for(i=0;i<s;i++)r=v[i],f=h.createTween(r,m?u[r]:0),d[r]=u[r]||b.style(e,r),r in u||(u[r]=f.start,m&&(f.end=f.start,f.start=r==="width"||r==="height"?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}function ir(e,t){var n,r={height:e},i=0;t=t?1:0;for(;i<4;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function sr(e){return b.isWindow(e)?e:e.nodeType===9?e.defaultView||e.parentWindow:!1}var n,r,i=typeof t,s=e.document,o=e.location,u=e.jQuery,a=e.$,f={},l=[],c="1.9.1",h=l.concat,p=l.push,d=l.slice,v=l.indexOf,m=f.toString,g=f.hasOwnProperty,y=c.trim,b=function(e,t){return new b.fn.init(e,t,r)},w=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,E=/\S+/g,S=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,x=/^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,T=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,N=/^[\],:{}\s]*$/,C=/(?:^|:|,)(?:\s*\[)+/g,k=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,L=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,A=/^-ms-/,O=/-([\da-z])/gi,M=function(e,t){return t.toUpperCase()},_=function(e){if(s.addEventListener||e.type==="load"||s.readyState==="complete")D(),b.ready()},D=function(){s.addEventListener?(s.removeEventListener("DOMContentLoaded",_,!1),e.removeEventListener("load",_,!1)):(s.detachEvent("onreadystatechange",_),e.detachEvent("onload",_))};b.fn=b.prototype={jquery:c,constructor:b,init:function(e,n,r){var i,o;if(!e)return this;if(typeof e=="string"){e.charAt(0)==="<"&&e.charAt(e.length-1)===">"&&e.length>=3?i=[null,e,null]:i=x.exec(e);if(i&&(i[1]||!n)){if(i[1]){n=n instanceof b?n[0]:n,b.merge(this,b.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:s,!0));if(T.test(i[1])&&b.isPlainObject(n))for(i in n)b
.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}o=s.getElementById(i[2]);if(o&&o.parentNode){if(o.id!==i[2])return r.find(e);this.length=1,this[0]=o}return this.context=s,this.selector=e,this}return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e)}return e.nodeType?(this.context=this[0]=e,this.length=1,this):b.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),b.makeArray(e,this))},selector:"",length:0,size:function(){return this.length},toArray:function(){return d.call(this)},get:function(e){return e==null?this.toArray():e<0?this[this.length+e]:this[e]},pushStack:function(e){var t=b.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return b.each(this,e,t)},ready:function(e){return b.ready.promise().done(e),this},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},map:function(e){return this.pushStack(b.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:p,sort:[].sort,splice:[].splice},b.fn.init.prototype=b.fn,b.extend=b.fn.extend=function(){var e,n,r,i,s,o,u=arguments[0]||{},a=1,f=arguments.length,l=!1;typeof u=="boolean"&&(l=u,u=arguments[1]||{},a=2),typeof u!="object"&&!b.isFunction(u)&&(u={}),f===a&&(u=this,--a);for(;a<f;a++)if((s=arguments[a])!=null)for(i in s){e=u[i],r=s[i];if(u===r)continue;l&&r&&(b.isPlainObject(r)||(n=b.isArray(r)))?(n?(n=!1,o=e&&b.isArray(e)?e:[]):o=e&&b.isPlainObject(e)?e:{},u[i]=b.extend(l,o,r)):r!==t&&(u[i]=r)}return u},b.extend({noConflict:function(t){return e.$===b&&(e.$=a),t&&e.jQuery===b&&(e.jQuery=u),b},isReady:!1,readyWait:1,holdReady:function(e){e?b.readyWait++:b.ready(!0)},ready:function(e){if(e===!0?--b.readyWait:b.isReady)return;if(!s.body)return setTimeout(b.ready);b.isReady=!0;if(e!==!0&&--b.readyWait>0)return;n.resolveWith(s,[b]),b.fn.trigger&&b(s).trigger("ready").off("ready")},isFunction:function(e){return b.type(e)==="function"},isArray:Array.isArray||function(e){return b.type(e)==="array"},isWindow:function(e){return e!=null&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return e==null?String(e):typeof e=="object"||typeof e=="function"?f[m.call(e)]||"object":typeof e},isPlainObject:function(e){if(!e||b.type(e)!=="object"||e.nodeType||b.isWindow(e))return!1;try{if(e.constructor&&!g.call(e,"constructor")&&!g.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||g.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw new Error(e)},parseHTML:function(e,t,n){if(!e||typeof e!="string")return null;typeof t=="boolean"&&(n=t,t=!1),t=t||s;var r=T.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=b.buildFragment([e],t,i),i&&b(i).remove(),b.merge([],r.childNodes))},parseJSON:function(t){if(e.JSON&&e.JSON.parse)return e.JSON.parse(t);if(t===null)return t;if(typeof t=="string"){t=b.trim(t);if(t&&N.test(t.replace(k,"@").replace(L,"]").replace(C,"")))return(new Function("return "+t))()}b.error("Invalid JSON: "+t)},parseXML:function(n){var r,i;if(!n||typeof n!="string")return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(s){r=t}return(!r||!r.documentElement||r.getElementsByTagName("parsererror").length)&&b.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&b.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(A,"ms-").replace(O,M)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,s=e.length,o=P(e);if(n)if(o)for(;i<s;i++){r=t.apply(e[i],n);if(r===!1)break}else for(i in e){r=t.apply(e[i],n);if(r===!1)break}else if(o)for(;i<s;i++){r=t.call(e[i],i,e[i]);if(r===!1)break}else for(i in e){r=t.call(e[i],i,e[i]);if(r===!1)break}return e},trim:y&&!y.call("\ufeff\u00a0")?function(e){return e==null?"":y.call(e)}:function(e){return e==null?"":(e+"").replace(S,"")},makeArray:function(e,t){var n=t||[];return e!=null&&(P(Object(e))?b.merge(n,typeof e=="string"?[e]:e):p.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(v)return v.call(t,e,n);r=t.length,n=n?n<0?Math.max(0,r+n):n:0;for(;n<r;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,s=0;if(typeof r=="number")for(;s<r;s++)e[i++]=n[s];else while(n[s]!==t)e[i++]=n[s++];return e.length=i,e},grep:function(e,t,n){var r,i=[],s=0,o=e.length;n=!!n;for(;s<o;s++)r=!!t(e[s],s),n!==r&&i.push(e[s]);return i},map:function(e,t,n){var r,i=0,s=e.length,o=P(e),u=[];if(o)for(;i<s;i++)r=t(e[i],i,n),r!=null&&(u[u.length]=r);else for(i in e)r=t(e[i],i,n),r!=null&&(u[u.length]=r);return h.apply([],u)},guid:1,proxy:function(e,n){var r,i,s;return typeof n=="string"&&(s=e[n],n=e,e=s),b.isFunction(e)?(r=d.call(arguments,2),i=function(){return e.apply(n||this,r.concat(d.call(arguments)))},i.guid=e.guid=e.guid||b.guid++,i):t},access:function(e,n,r,i,s,o,u){var a=0,f=e.length,l=r==null;if(b.type(r)==="object"){s=!0;for(a in r)b.access(e,n,a,r[a],!0,o,u)}else if(i!==t){s=!0,b.isFunction(i)||(u=!0),l&&(u?(n.call(e,i),n=null):(l=n,n=function(e,t,n){return l.call(b(e),n)}));if(n)for(;a<f;a++)n(e[a],r,u?i:i.call(e[a],a,n(e[a],r)))}return s?e:l?n.call(e):f?n(e[0],r):o},now:function(){return(new Date).getTime()}}),b.ready.promise=function(t){if(!n){n=b.Deferred();if(s.readyState==="complete")setTimeout(b.ready);else if(s.addEventListener)s.addEventListener("DOMContentLoaded",_,!1),e.addEventListener("load",_,!1);else{s.attachEvent("onreadystatechange",_),e.attachEvent("onload",_);var r=!1;try{r=e.frameElement==null&&s.documentElement}catch(i){}r&&r.doScroll&&function o(){if(!b.isReady){try{
r.doScroll("left")}catch(e){return setTimeout(o,50)}D(),b.ready()}}()}}return n.promise(t)},b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){f["[object "+t+"]"]=t.toLowerCase()}),r=b(s);var H={};b.Callbacks=function(e){e=typeof e=="string"?H[e]||B(e):b.extend({},e);var n,r,i,s,o,u,a=[],f=!e.once&&[],l=function(t){r=e.memory&&t,i=!0,o=u||0,u=0,s=a.length,n=!0;for(;a&&o<s;o++)if(a[o].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,a&&(f?f.length&&l(f.shift()):r?a=[]:c.disable())},c={add:function(){if(a){var t=a.length;(function i(t){b.each(t,function(t,n){var r=b.type(n);r==="function"?(!e.unique||!c.has(n))&&a.push(n):n&&n.length&&r!=="string"&&i(n)})})(arguments),n?s=a.length:r&&(u=t,l(r))}return this},remove:function(){return a&&b.each(arguments,function(e,t){var r;while((r=b.inArray(t,a,r))>-1)a.splice(r,1),n&&(r<=s&&s--,r<=o&&o--)}),this},has:function(e){return e?b.inArray(e,a)>-1:!!a&&!!a.length},empty:function(){return a=[],this},disable:function(){return a=f=r=t,this},disabled:function(){return!a},lock:function(){return f=t,r||c.disable(),this},locked:function(){return!f},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],a&&(!i||f)&&(n?f.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!i}};return c},b.extend({Deferred:function(e){var t=[["resolve","done",b.Callbacks("once memory"),"resolved"],["reject","fail",b.Callbacks("once memory"),"rejected"],["notify","progress",b.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return b.Deferred(function(n){b.each(t,function(t,s){var o=s[0],u=b.isFunction(e[t])&&e[t];i[s[1]](function(){var e=u&&u.apply(this,arguments);e&&b.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[o+"With"](this===r?n.promise():this,u?[e]:arguments)})}),e=null}).promise()},promise:function(e){return e!=null?b.extend(e,r):r}},i={};return r.pipe=r.then,b.each(t,function(e,s){var o=s[2],u=s[3];r[s[1]]=o.add,u&&o.add(function(){n=u},t[e^1][2].disable,t[2][2].lock),i[s[0]]=function(){return i[s[0]+"With"](this===i?r:this,arguments),this},i[s[0]+"With"]=o.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=d.call(arguments),r=n.length,i=r!==1||e&&b.isFunction(e.promise)?r:0,s=i===1?e:b.Deferred(),o=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?d.call(arguments):r,n===u?s.notifyWith(t,n):--i||s.resolveWith(t,n)}},u,a,f;if(r>1){u=new Array(r),a=new Array(r),f=new Array(r);for(;t<r;t++)n[t]&&b.isFunction(n[t].promise)?n[t].promise().done(o(t,f,n)).fail(s.reject).progress(o(t,a,u)):--i}return i||s.resolveWith(f,n),s.promise()}}),b.support=function(){var t,n,r,o,u,a,f,l,c,h,p=s.createElement("div");p.setAttribute("className","t"),p.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=p.getElementsByTagName("*"),r=p.getElementsByTagName("a")[0];if(!n||!r||!n.length)return{};u=s.createElement("select"),f=u.appendChild(s.createElement("option")),o=p.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={getSetAttribute:p.className!=="t",leadingWhitespace:p.firstChild.nodeType===3,tbody:!p.getElementsByTagName("tbody").length,htmlSerialize:!!p.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:r.getAttribute("href")==="/a",opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:!!o.value,optSelected:f.selected,enctype:!!s.createElement("form").enctype,html5Clone:s.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",boxModel:s.compatMode==="CSS1Compat",deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},o.checked=!0,t.noCloneChecked=o.cloneNode(!0).checked,u.disabled=!0,t.optDisabled=!f.disabled;try{delete p.test}catch(d){t.deleteExpando=!1}o=s.createElement("input"),o.setAttribute("value",""),t.input=o.getAttribute("value")==="",o.value="t",o.setAttribute("type","radio"),t.radioValue=o.value==="t",o.setAttribute("checked","t"),o.setAttribute("name","t"),a=s.createDocumentFragment(),a.appendChild(o),t.appendChecked=o.checked,t.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,p.attachEvent&&(p.attachEvent("onclick",function(){t.noCloneEvent=!1}),p.cloneNode(!0).click());for(h in{submit:!0,change:!0,focusin:!0})p.setAttribute(l="on"+h,"t"),t[h+"Bubbles"]=l in e||p.attributes[l].expando===!1;return p.style.backgroundClip="content-box",p.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle=p.style.backgroundClip==="content-box",b(function(){var n,r,o,u="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",a=s.getElementsByTagName("body")[0];if(!a)return;n=s.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",a.appendChild(n).appendChild(p),p.innerHTML="<table><tr><td></td><td>t</td></tr></table>",o=p.getElementsByTagName("td"),o[0].style.cssText="padding:0;margin:0;border:0;display:none",c=o[0].offsetHeight===0,o[0].style.display="",o[1].style.display="none",t.reliableHiddenOffsets=c&&o[0].offsetHeight===0,p.innerHTML="",p.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=p.offsetWidth===4,t.doesNotIncludeMarginInBodyOffset=a.offsetTop!==1,e.getComputedStyle&&(t.pixelPosition=(e.getComputedStyle(p,null)||{}).top!=="1%",t.boxSizingReliable=(e.getComputedStyle(p,null)||{width:"4px"}).width==="4px",r=p.appendChild(s.createElement("div")),r.style.cssText=p.style.cssText=u,r.style.marginRight=r.style.width="0",p.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||
{}).marginRight)),typeof p.style.zoom!==i&&(p.innerHTML="",p.style.cssText=u+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=p.offsetWidth===3,p.style.display="block",p.innerHTML="<div></div>",p.firstChild.style.width="5px",t.shrinkWrapBlocks=p.offsetWidth!==3,t.inlineBlockNeedsLayout&&(a.style.zoom=1)),a.removeChild(n),n=p=o=r=null}),n=u=a=f=r=o=null,t}();var j=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,F=/([A-Z])/g;b.extend({cache:{},expando:"jQuery"+(c+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?b.cache[e[b.expando]]:e[b.expando],!!e&&!U(e)},data:function(e,t,n){return I(e,t,n)},removeData:function(e,t){return q(e,t)},_data:function(e,t,n){return I(e,t,n,!0)},_removeData:function(e,t){return q(e,t,!0)},acceptData:function(e){if(e.nodeType&&e.nodeType!==1&&e.nodeType!==9)return!1;var t=e.nodeName&&b.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),b.fn.extend({data:function(e,n){var r,i,s=this[0],o=0,u=null;if(e===t){if(this.length){u=b.data(s);if(s.nodeType===1&&!b._data(s,"parsedAttrs")){r=s.attributes;for(;o<r.length;o++)i=r[o].name,i.indexOf("data-")||(i=b.camelCase(i.slice(5)),R(s,i,u[i]));b._data(s,"parsedAttrs",!0)}}return u}return typeof e=="object"?this.each(function(){b.data(this,e)}):b.access(this,function(n){if(n===t)return s?R(s,e,b.data(s,e)):null;this.each(function(){b.data(this,e,n)})},null,n,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){b.removeData(this,e)})}}),b.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=b._data(e,t),n&&(!r||b.isArray(n)?r=b._data(e,t,b.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=b.queue(e,t),r=n.length,i=n.shift(),s=b._queueHooks(e,t),o=function(){b.dequeue(e,t)};i==="inprogress"&&(i=n.shift(),r--),s.cur=i,i&&(t==="fx"&&n.unshift("inprogress"),delete s.stop,i.call(e,o,s)),!r&&s&&s.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return b._data(e,n)||b._data(e,n,{empty:b.Callbacks("once memory").add(function(){b._removeData(e,t+"queue"),b._removeData(e,n)})})}}),b.fn.extend({queue:function(e,n){var r=2;return typeof e!="string"&&(n=e,e="fx",r--),arguments.length<r?b.queue(this[0],e):n===t?this:this.each(function(){var t=b.queue(this,e,n);b._queueHooks(this,e),e==="fx"&&t[0]!=="inprogress"&&b.dequeue(this,e)})},dequeue:function(e){return this.each(function(){b.dequeue(this,e)})},delay:function(e,t){return e=b.fx?b.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,s=b.Deferred(),o=this,u=this.length,a=function(){--i||s.resolveWith(o,[o])};typeof e!="string"&&(n=e,e=t),e=e||"fx";while(u--)r=b._data(o[u],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(a));return a(),s.promise(n)}});var z,W,X=/[\t\r\n]/g,V=/\r/g,$=/^(?:input|select|textarea|button|object)$/i,J=/^(?:a|area)$/i,K=/^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,Q=/^(?:checked|selected)$/i,G=b.support.getSetAttribute,Y=b.support.input;b.fn.extend({attr:function(e,t){return b.access(this,b.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){b.removeAttr(this,e)})},prop:function(e,t){return b.access(this,b.prop,e,t,arguments.length>1)},removeProp:function(e){return e=b.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,s,o=0,u=this.length,a=typeof e=="string"&&e;if(b.isFunction(e))return this.each(function(t){b(this).addClass(e.call(this,t,this.className))});if(a){t=(e||"").match(E)||[];for(;o<u;o++){n=this[o],r=n.nodeType===1&&(n.className?(" "+n.className+" ").replace(X," "):" ");if(r){s=0;while(i=t[s++])r.indexOf(" "+i+" ")<0&&(r+=i+" ");n.className=b.trim(r)}}}return this},removeClass:function(e){var t,n,r,i,s,o=0,u=this.length,a=arguments.length===0||typeof e=="string"&&e;if(b.isFunction(e))return this.each(function(t){b(this).removeClass(e.call(this,t,this.className))});if(a){t=(e||"").match(E)||[];for(;o<u;o++){n=this[o],r=n.nodeType===1&&(n.className?(" "+n.className+" ").replace(X," "):"");if(r){s=0;while(i=t[s++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?b.trim(r):""}}}return this},toggleClass:function(e,t){var n=typeof e,r=typeof t=="boolean";return b.isFunction(e)?this.each(function(n){b(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if(n==="string"){var s,o=0,u=b(this),a=t,f=e.match(E)||[];while(s=f[o++])a=r?a:!u.hasClass(s),u[a?"addClass":"removeClass"](s)}else if(n===i||n==="boolean")this.className&&b._data(this,"__className__",this.className),this.className=this.className||e===!1?"":b._data(this,"__className__")||""})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;n<r;n++)if(this[n].nodeType===1&&(" "+this[n].className+" ").replace(X," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,s=this[0];if(!arguments.length){if(s)return r=b.valHooks[s.type]||b.valHooks[s.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(s,"value"))!==t?n:(n=s.value,typeof n=="string"?n.replace(V,""):n==null?"":n);return}return i=b.isFunction(e),this.each(function(n){var s,o=b(this);if(this.nodeType!==1)return;i?s=e.call(this,n,o.val()):s=e,s==null?s="":typeof s=="number"?s+="":b.isArray(s)&&(s=b.map(s,function(e){return e==null?"":e+""})),r=b.valHooks[this.type]||b.valHooks[this.nodeName.toLowerCase()];if(!r||!("set"in r)||r.set(this,s,"value")===t)this.value=s})}}),b.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,s=e.type==="select-one"||i<0,o=s?null:[],u=s?i+1:r.length,a=i<0?u:s?i:0;for(;a<u;a++){n=r[a];if((n.selected||a===i)&&(b.support.optDisabled?!
n.disabled:n.getAttribute("disabled")===null)&&(!n.parentNode.disabled||!b.nodeName(n.parentNode,"optgroup"))){t=b(n).val();if(s)return t;o.push(t)}}return o},set:function(e,t){var n=b.makeArray(t);return b(e).find("option").each(function(){this.selected=b.inArray(b(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attr:function(e,n,r){var s,o,u,a=e.nodeType;if(!e||a===3||a===8||a===2)return;if(typeof e.getAttribute===i)return b.prop(e,n,r);o=a!==1||!b.isXMLDoc(e),o&&(n=n.toLowerCase(),s=b.attrHooks[n]||(K.test(n)?W:z));if(r===t)return s&&o&&"get"in s&&(u=s.get(e,n))!==null?u:(typeof e.getAttribute!==i&&(u=e.getAttribute(n)),u==null?t:u);if(r!==null)return s&&o&&"set"in s&&(u=s.set(e,r,n))!==t?u:(e.setAttribute(n,r+""),r);b.removeAttr(e,n)},removeAttr:function(e,t){var n,r,i=0,s=t&&t.match(E);if(s&&e.nodeType===1)while(n=s[i++])r=b.propFix[n]||n,K.test(n)?!G&&Q.test(n)?e[b.camelCase("default-"+n)]=e[r]=!1:e[r]=!1:b.attr(e,n,""),e.removeAttribute(G?n:r)},attrHooks:{type:{set:function(e,t){if(!b.support.radioValue&&t==="radio"&&b.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,s,o,u=e.nodeType;if(!e||u===3||u===8||u===2)return;return o=u!==1||!b.isXMLDoc(e),o&&(n=b.propFix[n]||n,s=b.propHooks[n]),r!==t?s&&"set"in s&&(i=s.set(e,r,n))!==t?i:e[n]=r:s&&"get"in s&&(i=s.get(e,n))!==null?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):$.test(e.nodeName)||J.test(e.nodeName)&&e.href?0:t}}}}),W={get:function(e,n){var r=b.prop(e,n),i=typeof r=="boolean"&&e.getAttribute(n),s=typeof r=="boolean"?Y&&G?i!=null:Q.test(n)?e[b.camelCase("default-"+n)]:!!i:e.getAttributeNode(n);return s&&s.value!==!1?n.toLowerCase():t},set:function(e,t,n){return t===!1?b.removeAttr(e,n):Y&&G||!Q.test(n)?e.setAttribute(!G&&b.propFix[n]||n,n):e[b.camelCase("default-"+n)]=e[n]=!0,n}};if(!Y||!G)b.attrHooks.value={get:function(e,n){var r=e.getAttributeNode(n);return b.nodeName(e,"input")?e.defaultValue:r&&r.specified?r.value:t},set:function(e,t,n){if(!b.nodeName(e,"input"))return z&&z.set(e,t,n);e.defaultValue=t}};G||(z=b.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&(n==="id"||n==="name"||n==="coords"?r.value!=="":r.specified)?r.value:t},set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="",r==="value"||n===e.getAttribute(r)?n:t}},b.attrHooks.contenteditable={get:z.get,set:function(e,t,n){z.set(e,t===""?!1:t,n)}},b.each(["width","height"],function(e,t){b.attrHooks[t]=b.extend(b.attrHooks[t],{set:function(e,n){if(n==="")return e.setAttribute(t,"auto"),n}})})),b.support.hrefNormalized||(b.each(["href","src","width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return r==null?t:r}})}),b.each(["href","src"],function(e,t){b.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}})),b.support.style||(b.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),b.support.optSelected||(b.propHooks.selected=b.extend(b.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),b.support.enctype||(b.propFix.enctype="encoding"),b.support.checkOn||b.each(["radio","checkbox"],function(){b.valHooks[this]={get:function(e){return e.getAttribute("value")===null?"on":e.value}}}),b.each(["radio","checkbox"],function(){b.valHooks[this]=b.extend(b.valHooks[this],{set:function(e,t){if(b.isArray(t))return e.checked=b.inArray(b(e).val(),t)>=0}})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;b.event={global:{},add:function(e,n,r,s,o){var u,a,f,l,c,h,p,d,v,m,g,y=b._data(e);if(!y)return;r.handler&&(l=r,r=l.handler,o=l.selector),r.guid||(r.guid=b.guid++),(a=y.events)||(a=y.events={}),(h=y.handle)||(h=y.handle=function(e){return typeof b===i||!!e&&b.event.triggered===e.type?t:b.event.dispatch.apply(h.elem,arguments)},h.elem=e),n=(n||"").match(E)||[""],f=n.length;while(f--){u=rt.exec(n[f])||[],v=g=u[1],m=(u[2]||"").split(".").sort(),c=b.event.special[v]||{},v=(o?c.delegateType:c.bindType)||v,c=b.event.special[v]||{},p=b.extend({type:v,origType:g,data:s,handler:r,guid:r.guid,selector:o,needsContext:o&&b.expr.match.needsContext.test(o),namespace:m.join(".")},l);if(!(d=a[v])){d=a[v]=[],d.delegateCount=0;if(!c.setup||c.setup.call(e,s,m,h)===!1)e.addEventListener?e.addEventListener(v,h,!1):e.attachEvent&&e.attachEvent("on"+v,h)}c.add&&(c.add.call(e,p),p.handler.guid||(p.handler.guid=r.guid)),o?d.splice(d.delegateCount++,0,p):d.push(p),b.event.global[v]=!0}e=null},remove:function(e,t,n,r,i){var s,o,u,a,f,l,c,h,p,d,v,m=b.hasData(e)&&b._data(e);if(!m||!(l=m.events))return;t=(t||"").match(E)||[""],f=t.length;while(f--){u=rt.exec(t[f])||[],p=v=u[1],d=(u[2]||"").split(".").sort();if(!p){for(p in l)b.event.remove(e,p+t[f],n,r,!0);continue}c=b.event.special[p]||{},p=(r?c.delegateType:c.bindType)||p,h=l[p]||[],u=u[2]&&new RegExp("(^|\\.)"+d.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=s=h.length;while(s--)o=h[s],(i||v===o.origType)&&(!n||n.guid===o.guid)&&(!u||u.test(o.namespace))&&(!r||r===o.selector||r==="**"&&o.selector)&&(h.splice(s,1),o.selector&&h.delegateCount--,c.remove&&c.remove.call(e,o));a&&!h.length&&((!c.teardown||c.teardown.call(e,d,m.handle)===!1)&&b.removeEvent(e,p,m.handle),delete l[p])}b.isEmptyObject(l)&&(delete m.handle,b._removeData(e,"events"))},trigger:function(n,r,i,o){var u,a,f,l,c,h,p,d=[i||s],v=g.call(n,"type")?n.type:n,m=g.call(n,"namespace")?n.namespace.split("."
):[];f=h=i=i||s;if(i.nodeType===3||i.nodeType===8)return;if(nt.test(v+b.event.triggered))return;v.indexOf(".")>=0&&(m=v.split("."),v=m.shift(),m.sort()),a=v.indexOf(":")<0&&"on"+v,n=n[b.expando]?n:new b.Event(v,typeof n=="object"&&n),n.isTrigger=!0,n.namespace=m.join("."),n.namespace_re=n.namespace?new RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=r==null?[n]:b.makeArray(r,[n]),c=b.event.special[v]||{};if(!o&&c.trigger&&c.trigger.apply(i,r)===!1)return;if(!o&&!c.noBubble&&!b.isWindow(i)){l=c.delegateType||v,nt.test(l+v)||(f=f.parentNode);for(;f;f=f.parentNode)d.push(f),h=f;h===(i.ownerDocument||s)&&d.push(h.defaultView||h.parentWindow||e)}p=0;while((f=d[p++])&&!n.isPropagationStopped())n.type=p>1?l:c.bindType||v,u=(b._data(f,"events")||{})[n.type]&&b._data(f,"handle"),u&&u.apply(f,r),u=a&&f[a],u&&b.acceptData(f)&&u.apply&&u.apply(f,r)===!1&&n.preventDefault();n.type=v;if(!o&&!n.isDefaultPrevented()&&(!c._default||c._default.apply(i.ownerDocument,r)===!1)&&(v!=="click"||!b.nodeName(i,"a"))&&b.acceptData(i)&&a&&i[v]&&!b.isWindow(i)){h=i[a],h&&(i[a]=null),b.event.triggered=v;try{i[v]()}catch(y){}b.event.triggered=t,h&&(i[a]=h)}return n.result},dispatch:function(e){e=b.event.fix(e);var n,r,i,s,o,u=[],a=d.call(arguments),f=(b._data(this,"events")||{})[e.type]||[],l=b.event.special[e.type]||{};a[0]=e,e.delegateTarget=this;if(l.preDispatch&&l.preDispatch.call(this,e)===!1)return;u=b.event.handlers.call(this,e,f),n=0;while((s=u[n++])&&!e.isPropagationStopped()){e.currentTarget=s.elem,o=0;while((i=s.handlers[o++])&&!e.isImmediatePropagationStopped())if(!e.namespace_re||e.namespace_re.test(i.namespace))e.handleObj=i,e.data=i.data,r=((b.event.special[i.origType]||{}).handle||i.handler).apply(s.elem,a),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation())}return l.postDispatch&&l.postDispatch.call(this,e),e.result},handlers:function(e,n){var r,i,s,o,u=[],a=n.delegateCount,f=e.target;if(a&&f.nodeType&&(!e.button||e.type!=="click"))for(;f!=this;f=f.parentNode||this)if(f.nodeType===1&&(f.disabled!==!0||e.type!=="click")){s=[];for(o=0;o<a;o++)i=n[o],r=i.selector+" ",s[r]===t&&(s[r]=i.needsContext?b(r,this).index(f)>=0:b.find(r,this,null,[f]).length),s[r]&&s.push(i);s.length&&u.push({elem:f,handlers:s})}return a<n.length&&u.push({elem:this,handlers:n.slice(a)}),u},fix:function(e){if(e[b.expando])return e;var t,n,r,i=e.type,o=e,u=this.fixHooks[i];u||(this.fixHooks[i]=u=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=u.props?this.props.concat(u.props):this.props,e=new b.Event(o),t=r.length;while(t--)n=r[t],e[n]=o[n];return e.target||(e.target=o.srcElement||s),e.target.nodeType===3&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,u.filter?u.filter(e,o):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return e.which==null&&(e.which=t.charCode!=null?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,o,u=n.button,a=n.fromElement;return e.pageX==null&&n.clientX!=null&&(i=e.target.ownerDocument||s,o=i.documentElement,r=i.body,e.pageX=n.clientX+(o&&o.scrollLeft||r&&r.scrollLeft||0)-(o&&o.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(o&&o.scrollTop||r&&r.scrollTop||0)-(o&&o.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&a&&(e.relatedTarget=a===e.target?n.toElement:a),!e.which&&u!==t&&(e.which=u&1?1:u&2?3:u&4?2:0),e}},special:{load:{noBubble:!0},click:{trigger:function(){if(b.nodeName(this,"input")&&this.type==="checkbox"&&this.click)return this.click(),!1}},focus:{trigger:function(){if(this!==s.activeElement&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){if(this===s.activeElement&&this.blur)return this.blur(),!1},delegateType:"focusout"},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=b.extend(new b.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?b.event.trigger(i,null,t):b.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},b.removeEvent=s.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},b.Event=function(e,t){if(!(this instanceof b.Event))return new b.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:st):this.type=e,t&&b.extend(this,t),this.timeStamp=e&&e.timeStamp||b.now(),this[b.expando]=!0},b.Event.prototype={isDefaultPrevented:st,isPropagationStopped:st,isImmediatePropagationStopped:st,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it;if(!e)return;e.preventDefault?e.preventDefault():e.returnValue=!1},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it;if(!e)return;e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},b.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){b.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,s=e.handleObj;if(!i||i!==r&&!b.contains(r,i))e.type=s.origType,n=s.handler.apply(this,arguments),e.type=t;return n}}}),b.support.submitBubbles||(b.event.special.submit={setup:function(){if(b.nodeName(this,"form"))return!1;b.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=b.nodeName(n,"input")||b.nodeName(n,"button")?n.form:t;r&&!b._data(r,"submitBubbles")&&(b.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),b._data(r,"submitBubbles",!0))})},postDispatch
:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&b.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){if(b.nodeName(this,"form"))return!1;b.event.remove(this,"._submit")}}),b.support.changeBubbles||(b.event.special.change={setup:function(){if(Z.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")b.event.add(this,"propertychange._change",function(e){e.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),b.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),b.event.simulate("change",this,e,!0)});return!1}b.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!b._data(t,"changeBubbles")&&(b.event.add(t,"change._change",function(e){this.parentNode&&!e.isSimulated&&!e.isTrigger&&b.event.simulate("change",this.parentNode,e,!0)}),b._data(t,"changeBubbles",!0))})},handle:function(e){var t=e.target;if(this!==t||e.isSimulated||e.isTrigger||t.type!=="radio"&&t.type!=="checkbox")return e.handleObj.handler.apply(this,arguments)},teardown:function(){return b.event.remove(this,"._change"),!Z.test(this.nodeName)}}),b.support.focusinBubbles||b.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){b.event.simulate(t,e.target,b.event.fix(e),!0)};b.event.special[t]={setup:function(){n++===0&&s.addEventListener(e,r,!0)},teardown:function(){--n===0&&s.removeEventListener(e,r,!0)}}}),b.fn.extend({on:function(e,n,r,i,s){var o,u;if(typeof e=="object"){typeof n!="string"&&(r=r||n,n=t);for(o in e)this.on(o,n,r,e[o],s);return this}r==null&&i==null?(i=n,r=n=t):i==null&&(typeof n=="string"?(i=r,r=t):(i=r,r=n,n=t));if(i===!1)i=st;else if(!i)return this;return s===1&&(u=i,i=function(e){return b().off(e),u.apply(this,arguments)},i.guid=u.guid||(u.guid=b.guid++)),this.each(function(){b.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,s;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,b(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if(typeof e=="object"){for(s in e)this.off(s,n,e[s]);return this}if(n===!1||typeof n=="function")r=n,n=t;return r===!1&&(r=st),this.each(function(){b.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return arguments.length===1?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){b.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return b.event.trigger(e,t,n,!0)}}),
/*!
 * jQuery JavaScript Library v1.9.1
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2012 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-2-4
 */
function(e, t) {
    function rt(e) {
        return J.test(e + "")
    }

    function it() {
        var e, t = [];
        return e = function(n, r) {
            return t.push(n += " ") > i.cacheLength && delete e[t.shift()], e[n] = r
        }
    }

    function st(e) {
        return e[w] = !0, e
    }

    function ot(e) {
        var t = c.createElement("div");
        try {
            return e(t)
        } catch (n) {
            return !1
        } finally {
            t = null
        }
    }

    function ut(e, t, n, r) {
        var i, s, o, u, a, f, h, v, m, y;
        (t ? t.ownerDocument || t : E) !== c && l(t), t = t || c, n = n || [];
        if (!e || typeof e != "string") return n;
        if ((u = t.nodeType) !== 1 && u !== 9) return [];
        if (!p && !r) {
            if (i = K.exec(e))
                if (o = i[1]) {
                    if (u === 9) {
                        s = t.getElementById(o);
                        if (!s || !s.parentNode) return n;
                        if (s.id === o) return n.push(s), n
                    } else if (t.ownerDocument && (s = t.ownerDocument.getElementById(o)) && g(t, s) && s.id === o) return n.push(s), n
                } else {
                    if (i[2]) return _.apply(n, D.call(t.getElementsByTagName(e), 0)), n;
                    if ((o = i[3]) && S.getByClassName && t.getElementsByClassName) return _.apply(n, D.call(t.getElementsByClassName(o), 0)), n
                }
            if (S.qsa && !d.test(e)) {
                h = !0, v = w, m = t, y = u === 9 && e;
                if (u === 1 && t.nodeName.toLowerCase() !== "object") {
                    f = ht(e), (h = t.getAttribute("id")) ? v = h.replace(Y, "\\$&") : t.setAttribute("id", v), v = "[id='" + v + "'] ", a = f.length;
                    while (a--) f[a] = v + pt(f[a]);
                    m = $.test(e) && t.parentNode || t, y = f.join(",")
                }
                if (y) try {
                    return _.apply(n, D.call(m.querySelectorAll(y), 0)), n
                } catch (b) {} finally {
                    h || t.removeAttribute("id")
                }
            }
        }
        return Et(e.replace(R, "$1"), t, n, r)
    }

    function at(e, t) {
        var n = t && e,
            r = n && (~t.sourceIndex || A) - (~e.sourceIndex || A);
        if (r) return r;
        if (n)
            while (n = n.nextSibling)
                if (n === t) return -1;
        return e ? 1 : -1
    }

    function ft(e) {
        return function(t) {
            var n = t.nodeName.toLowerCase();
            return n === "input" && t.type === e
        }
    }

    function lt(e) {
        return function(t) {
            var n = t.nodeName.toLowerCase();
            return (n === "input" || n === "button") && t.type === e
        }
    }

    function ct(e) {
        return st(function(t) {
            return t = +t, st(function(n, r) {
                var i, s = e([], n.length, t),
                    o = s.length;
                while (o--) n[i = s[o]] && (n[i] = !(r[i] = n[i]))
            })
        })
    }

    function ht(e, t) {
        var n, r, s, o, u, a, f, l = C[e + " "];
        if (l) return t ? 0 : l.slice(0);
        u = e, a = [], f = i.preFilter;
        while (u) {
            if (!n || (r = U.exec(u))) r && (u = u.slice(r[0].length) || u), a.push(s = []);
            n = !1;
            if (r = z.exec(u)) n = r.shift(), s.push({
                value: n,
                type: r[0].replace(R, " ")
            }), u = u.slice(n.length);
            for (o in i.filter)(r = V[o].exec(u)) && (!f[o] || (r = f[o](r))) && (n = r.shift(), s.push({
                value: n,
                type: o,
                matches: r
            }), u = u.slice(n.length));
            if (!n) break
        }
        return t ? u.length : u ? ut.error(e) : C(e, a).slice(0)
    }

    function pt(e) {
        var t = 0,
            n = e.length,
            r = "";
        for (; t < n; t++) r += e[t].value;
        return r
    }

    function dt(e, t, n) {
        var i = t.dir,
            s = n && i === "parentNode",
            o = T++;
        return t.first ? function(t, n, r) {
            while (t = t[i])
                if (t.nodeType === 1 || s) return e(t, n, r)
        } : function(t, n, u) {
            var a, f, l, c = x + " " + o;
            if (u) {
                while (t = t[i])
                    if (t.nodeType === 1 || s)
                        if (e(t, n, u)) return !0
            } else
                while (t = t[i])
                    if (t.nodeType === 1 || s) {
                        l = t[w] || (t[w] = {});
                        if ((f = l[i]) && f[0] === c) {
                            if ((a = f[1]) === !0 || a === r) return a === !0
                        } else {
                            f = l[i] = [c], f[1] = e(t, n, u) || r;
                            if (f[1] === !0) return !0
                        }
                    }
        }
    }

    function vt(e) {
        return e.length > 1 ? function(t, n, r) {
            var i = e.length;
            while (i--)
                if (!e[i](t, n, r)) return !1;
            return !0
        } : e[0]
    }

    function mt(e, t, n, r, i) {
        var s, o = [],
            u = 0,
            a = e.length,
            f = t != null;
        for (; u < a; u++)
            if (s = e[u])
                if (!n || n(s, r, i)) o.push(s), f && t.push(u);
        return o
    }

    function gt(e, t, n, r, i, s) {
        return r && !r[w] && (r = gt(r)), i && !i[w] && (i = gt(i, s)), st(function(s, o, u, a) {
            var f, l, c, h = [],
                p = [],
                d = o.length,
                v = s || wt(t || "*", u.nodeType ? [u] : u, []),
                m = e && (s || !t) ? mt(v, h, e, u, a) : v,
                g = n ? i || (s ? e : d || r) ? [] : o : m;
            n && n(m, g, u, a);
            if (r) {
                f = mt(g, p), r(f, [], u, a), l = f.length;
                while (l--)
                    if (
                        c = f[l]) g[p[l]] = !(m[p[l]] = c)
            }
            if (s) {
                if (i || e) {
                    if (i) {
                        f = [], l = g.length;
                        while (l--)(c = g[l]) && f.push(m[l] = c);
                        i(null, g = [], f, a)
                    }
                    l = g.length;
                    while (l--)(c = g[l]) && (f = i ? P.call(s, c) : h[l]) > -1 && (s[f] = !(o[f] = c))
                }
            } else g = mt(g === o ? g.splice(d, g.length) : g), i ? i(null, o, g, a) : _.apply(o, g)
        })
    }

    function yt(e) {
        var t, n, r, s = e.length,
            o = i.relative[e[0].type],
            u = o || i.relative[" "],
            a = o ? 1 : 0,
            l = dt(function(e) {
                return e === t
            }, u, !0),
            c = dt(function(e) {
                return P.call(t, e) > -1
            }, u, !0),
            h = [function(e, n, r) {
                return !o && (r || n !== f) || ((t = n).nodeType ? l(e, n, r) : c(e, n, r))
            }];
        for (; a < s; a++)
            if (n = i.relative[e[a].type]) h = [dt(vt(h), n)];
            else {
                n = i.filter[e[a].type].apply(null, e[a].matches);
                if (n[w]) {
                    r = ++a;
                    for (; r < s; r++)
                        if (i.relative[e[r].type]) break;
                    return gt(a > 1 && vt(h), a > 1 && pt(e.slice(0, a - 1)).replace(R, "$1"), n, a < r && yt(e.slice(a, r)), r < s && yt(e = e.slice(r)), r < s && pt(e))
                }
                h.push(n)
            }
        return vt(h)
    }

    function bt(e, t) {
        var n = 0,
            s = t.length > 0,
            o = e.length > 0,
            u = function(u, a, l, h, p) {
                var d, v, m, g = [],
                    y = 0,
                    b = "0",
                    w = u && [],
                    E = p != null,
                    S = f,
                    T = u || o && i.find.TAG("*", p && a.parentNode || a),
                    N = x += S == null ? 1 : Math.random() || .1;
                E && (f = a !== c && a, r = n);
                for (;
                    (d = T[b]) != null; b++) {
                    if (o && d) {
                        v = 0;
                        while (m = e[v++])
                            if (m(d, a, l)) {
                                h.push(d);
                                break
                            }
                        E && (x = N, r = ++n)
                    }
                    s && ((d = !m && d) && y--, u && w.push(d))
                }
                y += b;
                if (s && b !== y) {
                    v = 0;
                    while (m = t[v++]) m(w, g, a, l);
                    if (u) {
                        if (y > 0)
                            while (b--) !w[b] && !g[b] && (g[b] = M.call(h));
                        g = mt(g)
                    }
                    _.apply(h, g), E && !u && g.length > 0 && y + t.length > 1 && ut.uniqueSort(h)
                }
                return E && (x = N, f = S), w
            };
        return s ? st(u) : u
    }

    function wt(e, t, n) {
        var r = 0,
            i = t.length;
        for (; r < i; r++) ut(e, t[r], n);
        return n
    }

    function Et(e, t, n, r) {
        var s, o, a, f, l, c = ht(e);
        if (!r && c.length === 1) {
            o = c[0] = c[0].slice(0);
            if (o.length > 2 && (a = o[0]).type === "ID" && t.nodeType === 9 && !p && i.relative[o[1].type]) {
                t = i.find.ID(a.matches[0].replace(et, tt), t)[0];
                if (!t) return n;
                e = e.slice(o.shift().value.length)
            }
            s = V.needsContext.test(e) ? 0 : o.length;
            while (s--) {
                a = o[s];
                if (i.relative[f = a.type]) break;
                if (l = i.find[f])
                    if (r = l(a.matches[0].replace(et, tt), $.test(o[0].type) && t.parentNode || t)) {
                        o.splice(s, 1), e = r.length && pt(o);
                        if (!e) return _.apply(n, D.call(r, 0)), n;
                        break
                    }
            }
        }
        return u(e, c)(r, t, p, n, $.test(e)), n
    }

    function St() {}
    var n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, w = "sizzle" + -(new Date),
        E = e.document,
        S = {},
        x = 0,
        T = 0,
        N = it(),
        C = it(),
        k = it(),
        L = typeof t,
        A = 1 << 31,
        O = [],
        M = O.pop,
        _ = O.push,
        D = O.slice,
        P = O.indexOf || function(e) {
            var t = 0,
                n = this.length;
            for (; t < n; t++)
                if (this[t] === e) return t;
            return -1
        },
        H = "[\\x20\\t\\r\\n\\f]",
        B = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        j = B.replace("w", "w#"),
        F = "([*^$|!~]?=)",
        I = "\\[" + H + "*(" + B + ")" + H + "*(?:" + F + H + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + j + ")|)|)" + H + "*\\]",
        q = ":(" + B + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + I.replace(3, 8) + ")*)|.*)\\)|)",
        R = new RegExp("^" + H + "+|((?:^|[^\\\\])(?:\\\\.)*)" + H + "+$", "g"),
        U = new RegExp("^" + H + "*," + H + "*"),
        z = new RegExp("^" + H + "*([\\x20\\t\\r\\n\\f>+~])" + H + "*"),
        W = new RegExp(q),
        X = new RegExp("^" + j + "$"),
        V = {
            ID: new RegExp("^#(" + B + ")"),
            CLASS: new RegExp("^\\.(" + B + ")"),
            NAME: new RegExp("^\\[name=['\"]?(" + B + ")['\"]?\\]"),
            TAG: new RegExp("^(" + B.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + I),
            PSEUDO: new RegExp("^" + q),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + H + "*(even|odd|(([+-]|)(\\d*)n|)" + H + "*(?:([+-]|)" + H + "*(\\d+)|))" + H + "*\\)|)", "i"),
            needsContext: new RegExp("^" + H + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + H + "*((?:-\\d)?\\d*)" + H + "*\\)|)(?=[^-]|$)", "i")
        },
        $ = /[\x20\t\r\n\f]*[+~]/,
        J = /^[^{]+\{\s*\[native code/,
        K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        Q = /^(?:input|select|textarea|button)$/i,
        G = /^h\d$/i,
        Y = /'|\\/g,
        Z = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
        et = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
        tt = function(e, t) {
            var n = "0x" + t - 65536;
            return n !== n ? t : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, n & 1023 | 56320)
        };
    try {
        D.call(E.documentElement.childNodes, 0)[0].nodeType
    } catch (nt) {
        D = function(e) {
            var t, n = [];
            while (t = this[e++]) n.push(t);
            return n
        }
    }
    o = ut.isXML = function(e) {
        var t = e && (e.ownerDocument || e).documentElement;
        return t ? t.nodeName !== "HTML" : !1
    }, l = ut.setDocument = function(e) {
        var n = e ? e.ownerDocument || e : E;
        if (n === c || n.nodeType !== 9 || !n.documentElement) return c;
        c = n, h = n.documentElement, p = o(n), S.tagNameNoComments = ot(function(e) {
            return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
        }), S.attributes = ot(function(e) {
            e.innerHTML = "<select></select>";
            var t = typeof e.lastChild.getAttribute("multiple");
            return t !== "boolean" && t !== "string"
        }), S.getByClassName = ot(function(e) {
            return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", !e.getElementsByClassName || !e.getElementsByClassName("e").length ? !1 : (e.lastChild.className = "e", e.getElementsByClassName("e").length === 2)
        }), S.getByName = ot(function(e) {
            e.id = w + 0, e.innerHTML = "<a name='" + w + "'></a><div name='" + w + "'></div>", h.insertBefore(e, h.firstChild);
            var t = n.getElementsByName && n.getElementsByName(w).length === 2 + n.getElementsByName(w + 0).length;
            return S.getIdNotName = !n.getElementById(w), h.removeChild(e), t
        }), i.attrHandle = ot(function(e) {
            return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== L && e.firstChild.getAttribute("href") === "#"
        }) ? {} : {
            href: function(e) {
                return e.getAttribute("href", 2)
            },
            type: function(e) {
                return e.getAttribute("type")
            }
        }, S.getIdNotName ? (i.find.ID = function(e, t) {
            if (typeof t.getElementById !== L && !p) {
                var n = t.getElementById(e);
                return n && n.parentNode ? [n] : []
            }
        }, i.filter.ID = function(e) {
            var t = e.replace(et, tt);
            return function(e) {
                return e.getAttribute("id") === t
            }
        }) : (i.find.ID = function(e, n) {
            if (typeof n.getElementById !== L && !p) {
                var r = n.getElementById(e);
                return r ? r.id === e || typeof r.getAttributeNode !== L && r.getAttributeNode("id").value === e ? [r] : t : []
            }
        }, i.filter.ID = function(e) {
            var t = e.replace(et, tt);
            return function(e) {
                var n = typeof e.getAttributeNode !== L && e.getAttributeNode("id");
                return n && n.value === t
            }
        }), i.find.TAG = S.tagNameNoComments ? function(e, t) {
            if (typeof t.getElementsByTagName !== L) return t.getElementsByTagName(e)
        } : function(e, t) {
            var n, r = [],
                i = 0,
                s = t.getElementsByTagName(e);
            if (e === "*") {
                while (n = s[i++]) n.nodeType === 1 && r.push(n);
                return r
            }
            return s
        }, i.find.NAME = S.getByName && function(e, t) {
            if (typeof t.getElementsByName !== L) return t.getElementsByName(name)
        }, i.find.CLASS = S.getByClassName && function(
            e, t) {
            if (typeof t.getElementsByClassName !== L && !p) return t.getElementsByClassName(e)
        }, v = [], d = [":focus"];
        if (S.qsa = rt(n.querySelectorAll)) ot(function(e) {
            e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || d.push("\\[" + H + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || d.push(":checked")
        }), ot(function(e) {
            e.innerHTML = "<input type='hidden' i=''/>", e.querySelectorAll("[i^='']").length && d.push("[*^$]=" + H + "*(?:\"\"|'')"), e.querySelectorAll(":enabled").length || d.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), d.push(",.*:")
        });
        return (S.matchesSelector = rt(m = h.matchesSelector || h.mozMatchesSelector || h.webkitMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ot(function(e) {
            S.disconnectedMatch = m.call(e, "div"), m.call(e, "[s!='']:x"), v.push("!=", q)
        }), d = new RegExp(d.join("|")), v = new RegExp(v.join("|")), g = rt(h.contains) || h.compareDocumentPosition ? function(e, t) {
            var n = e.nodeType === 9 ? e.documentElement : e,
                r = t && t.parentNode;
            return e === r || !!r && r.nodeType === 1 && !!(n.contains ? n.contains(r) : e.compareDocumentPosition && e.compareDocumentPosition(r) & 16)
        } : function(e, t) {
            if (t)
                while (t = t.parentNode)
                    if (t === e) return !0;
            return !1
        }, y = h.compareDocumentPosition ? function(e, t) {
            var r;
            if (e === t) return a = !0, 0;
            if (r = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t)) return r & 1 || e.parentNode && e.parentNode.nodeType === 11 ? e === n || g(E, e) ? -1 : t === n || g(E, t) ? 1 : 0 : r & 4 ? -1 : 1;
            return e.compareDocumentPosition ? -1 : 1
        } : function(e, t) {
            var r, i = 0,
                s = e.parentNode,
                o = t.parentNode,
                u = [e],
                f = [t];
            if (e === t) return a = !0, 0;
            if (!s || !o) return e === n ? -1 : t === n ? 1 : s ? -1 : o ? 1 : 0;
            if (s === o) return at(e, t);
            r = e;
            while (r = r.parentNode) u.unshift(r);
            r = t;
            while (r = r.parentNode) f.unshift(r);
            while (u[i] === f[i]) i++;
            return i ? at(u[i], f[i]) : u[i] === E ? -1 : f[i] === E ? 1 : 0
        }, a = !1, [0, 0].sort(y), S.detectDuplicates = a, c
    }, ut.matches = function(e, t) {
        return ut(e, null, null, t)
    }, ut.matchesSelector = function(e, t) {
        (e.ownerDocument || e) !== c && l(e), t = t.replace(Z, "='$1']");
        if (S.matchesSelector && !p && (!v || !v.test(t)) && !d.test(t)) try {
            var n = m.call(e, t);
            if (n || S.disconnectedMatch || e.document && e.document.nodeType !== 11) return n
        } catch (r) {}
        return ut(t, c, null, [e]).length > 0
    }, ut.contains = function(e, t) {
        return (e.ownerDocument || e) !== c && l(e), g(e, t)
    }, ut.attr = function(e, t) {
        var n;
        return (e.ownerDocument || e) !== c && l(e), p || (t = t.toLowerCase()), (n = i.attrHandle[t]) ? n(e) : p || S.attributes ? e.getAttribute(t) : ((n = e.getAttributeNode(t)) || e.getAttribute(t)) && e[t] === !0 ? t : n && n.specified ? n.value : null
    }, ut.error = function(e) {
        throw new Error("Syntax error, unrecognized expression: " + e)
    }, ut.uniqueSort = function(e) {
        var t, n = [],
            r = 1,
            i = 0;
        a = !S.detectDuplicates, e.sort(y);
        if (a) {
            for (; t = e[r]; r++) t === e[r - 1] && (i = n.push(r));
            while (i--) e.splice(n[i], 1)
        }
        return e
    }, s = ut.getText = function(e) {
        var t, n = "",
            r = 0,
            i = e.nodeType;
        if (!i)
            for (; t = e[r]; r++) n += s(t);
        else if (i === 1 || i === 9 || i === 11) {
            if (typeof e.textContent == "string") return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) n += s(e)
        } else if (i === 3 || i === 4) return e.nodeValue;
        return n
    }, i = ut.selectors = {
        cacheLength: 50,
        createPseudo: st,
        match: V,
        find: {},
        relative: {
            ">": {
                dir: "parentNode",
                first: !0
            },
            " ": {
                dir: "parentNode"
            },
            "+": {
                dir: "previousSibling",
                first: !0
            },
            "~": {
                dir: "previousSibling"
            }
        },
        preFilter: {
            ATTR: function(e) {
                return e[1] = e[1].replace(et, tt), e[3] = (e[4] || e[5] || "").replace(et, tt), e[2] === "~=" && (e[3] = " " + e[3] + " "), e.slice(0, 4)
            },
            CHILD: function(e) {
                return e[1] = e[1].toLowerCase(), e[1].slice(0, 3) === "nth" ? (e[3] || ut.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * (e[3] === "even" || e[3] === "odd")), e[5] = +(e[7] + e[8] || e[3] === "odd")) : e[3] && ut.error(e[0]), e
            },
            PSEUDO: function(e) {
                var t, n = !e[5] && e[2];
                return V.CHILD.test(e[0]) ? null : (e[4] ? e[2] = e[4] : n && W.test(n) && (t = ht(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
            }
        },
        filter: {
            TAG: function(e) {
                return e === "*" ? function() {
                    return !0
                } : (e = e.replace(et, tt).toLowerCase(), function(t) {
                    return t.nodeName && t.nodeName.toLowerCase() === e
                })
            },
            CLASS: function(e) {
                var t = N[e + " "];
                return t || (t = new RegExp("(^|" + H + ")" + e + "(" + H + "|$)")) && N(e, function(e) {
                    return t.test(e.className || typeof e.getAttribute !== L && e.getAttribute("class") || "")
                })
            },
            ATTR: function(e, t, n) {
                return function(r) {
                    var i = ut.attr(r, e);
                    return i == null ? t === "!=" : t ? (i += "", t === "=" ? i === n : t === "!=" ? i !== n : t === "^=" ? n && i.indexOf(n) === 0 : t === "*=" ? n && i.indexOf(n) > -1 : t === "$=" ? n && i.slice(-n.length) === n : t === "~=" ? (" " + i + " ").indexOf(n) > -1 : t === "|=" ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
                }
            },
            CHILD: function(e, t, n, r, i) {
                var s = e.slice(0, 3) !== "nth",
                    o = e.slice(-4) !== "last",
                    u = t === "of-type";
                return r === 1 && i === 0 ? function(e) {
                    return !!e.parentNode
                } : function(t, n, a) {
                    var f, l, c, h, p, d, v = s !== o ? "nextSibling" : "previousSibling",
                        m = t.parentNode,
                        g = u && t.nodeName.toLowerCase(),
                        y = !a && !u;
                    if (m) {
                        if (s) {
                            while (v) {
                                c = t;
                                while (c = c[v])
                                    if (u ? c.nodeName.toLowerCase() === g : c.nodeType === 1) return !1;
                                d = v = e === "only" && !d && "nextSibling"
                            }
                            return !0
                        }
                        d = [o ? m.firstChild : m.lastChild];
                        if (o && y) {
                            l = m[w] || (m[w] = {}), f = l[e] || [], p = f[0] === x && f[1], h = f[0] === x && f[2], c = p && m.childNodes[p];
                            while (c = ++p && c && c[v] || (h = p = 0) || d.pop())
                                if (c.nodeType === 1 && ++h && c === t) {
                                    l[e] = [x, p, h];
                                    break
                                }
                        } else if (y && (f = (t[w] || (t[w] = {}))[e]) && f[0] === x) h = f[1];
                        else
                            while (c = ++p && c && c[v] || (h = p = 0) || d.pop())
                                if ((u ? c.nodeName.toLowerCase() === g : c.nodeType === 1) && ++h) {
                                    y && ((c[w] || (c[w] = {}))[e] = [x, h]);
                                    if (c === t) break
                                } return h -= i, h === r || h % r === 0 && h / r >= 0
                    }
                }
            },
            PSEUDO: function(e, t) {
                var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || ut.error("unsupported pseudo: " + e);
                return r[w] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? st(function(e, n) {
                    var i, s = r(e, t),
                        o = s.length;
                    while (o--) i = P.call(e, s[o]), e[i] = !(n[i] = s[o])
                }) : function(e) {
                    return r(e, 0, n)
                }) : r
            }
        },
        pseudos: {
            not: st(function(e) {
                var t = [],
                    n = [],
                    r = u(e.replace(R, "$1"));
                return r[w] ? st(function(e, t, n, i) {
                    var s, o = r(e, null, i, []),
                        u = e.length;
                    while (u--)
                        if (s = o[u]) e[u] = !(t[u] = s)
                }) : function(e, i, s) {
                    return t[0] = e, r(t, null, s, n), !n.pop()
                }
            }),
            has: st(function(e) {
                return function(t) {
                    return ut(e, t).length > 0
                }
            }),
            contains: st(function(e) {
                return function(t) {
                    return (t.textContent || t.innerText || s(t)).indexOf(e) > -1
                }
            }),
            lang: st(function(e) {
                return X.test(e || "") || ut.error("unsupported lang: " + e), e = e.replace(et, tt).toLowerCase(),
                    function(t) {
                        var n;
                        do
                            if (n = p ? t.getAttribute("xml:lang") || t.getAttribute("lang") : t.lang) return n = n.toLowerCase(), n === e || n.indexOf(e + "-") === 0;
                        while ((t = t.parentNode) && t.nodeType === 1);
                        return !1
                    }
            }),
            target: function(t) {
                var n = e.location && e.location.hash;
                return n && n.slice(1) === t.id
            },
            root: function(e) {
                return e === h
            },
            focus: function(e) {
                return e === c.activeElement && (!c.hasFocus || c.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
            },
            enabled: function(e) {
                return e.disabled === !1
            },
            disabled: function(e) {
                return e.disabled === !0
            },
            checked: function(e) {
                var t = e.nodeName.toLowerCase();
                return t === "input" && !!e.checked || t === "option" && !!e.selected
            },
            selected: function(e) {
                return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
            },
            empty: function(e) {
                for (e = e.firstChild; e; e = e.nextSibling)
                    if (e.nodeName > "@" || e.nodeType === 3 || e.nodeType === 4) return !1;
                return !0
            },
            parent: function(e) {
                return !i.pseudos.empty(e)
            },
            header: function(e) {
                return G.test(e.nodeName)
            },
            input: function(e) {
                return Q.test(e.nodeName)
            },
            button: function(e) {
                var t = e.nodeName.toLowerCase();
                return t === "input" && e.type === "button" || t === "button"
            },
            text: function(e) {
                var t;
                return e.nodeName.toLowerCase() === "input" && e.type === "text" && ((t = e.getAttribute("type")) == null || t.toLowerCase() === e.type)
            },
            first: ct(function() {
                return [0]
            }),
            last: ct(function(e, t) {
                return [t - 1]
            }),
            eq: ct(function(e, t, n) {
                return [n < 0 ? n + t : n]
            }),
            even: ct(function(e, t) {
                var n = 0;
                for (; n < t; n += 2) e.push(n);
                return e
            }),
            odd: ct(function(e, t) {
                var n = 1;
                for (; n < t; n += 2) e.push(n);
                return e
            }),
            lt: ct(function(e, t, n) {
                var r = n < 0 ? n + t : n;
                for (; --r >= 0;) e.push(r);
                return e
            }),
            gt: ct(function(e, t, n) {
                var r = n < 0 ? n + t : n;
                for (; ++r < t;) e.push(r);
                return e
            })
        }
    };
    for (n in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) i.pseudos[n] = ft(n);
    for (n in {
            submit: !0,
            reset: !0
        }) i.pseudos[n] = lt(n);
    u = ut.compile = function(e, t) {
        var n, r = [],
            i = [],
            s = k[e + " "];
        if (!s) {
            t || (t = ht(e)), n = t.length;
            while (n--) s = yt(t[n]), s[w] ? r.push(s) : i.push(s);
            s = k(e, bt(i, r))
        }
        return s
    }, i.pseudos.nth = i.pseudos.eq, i.filters = St.prototype = i.pseudos, i.setFilters = new St, l(), ut.attr = b.attr, b.find = ut, b.expr = ut.selectors, b.expr[":"] = b.expr.pseudos, b.unique = ut.uniqueSort, b.text = ut.getText, b.isXMLDoc = ut.isXML, b.contains = ut.contains
}(e);
var ot = /Until$/,
    ut = /^(?:parents|prev(?:Until|All))/,
    at = /^.[^:#\[\.,]*$/,
    ft = b.expr.match.needsContext,
    lt = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
b.fn.extend({
    find: function(e) {
        var t, n, r, i = this.length;
        if (typeof e != "string") return r = this, this.pushStack(b(e).filter(function() {
            for (t = 0; t < i; t++)
                if (b.contains(r[t], this)) return !0
        }));
        n = [];
        for (t = 0; t < i; t++) b.find(e, this[t], n);
        return n = this.pushStack(i > 1 ? b.unique(n) : n), n.selector = (this.selector ? this.selector + " " : "") + e, n
    },
    has: function(e) {
        var t, n = b(e, this),
            r = n.length;
        return this.filter(function() {
            for (t = 0; t < r; t++)
                if (b.contains(this, n[t])) return !0
        })
    },
    not: function(e) {
        return this.pushStack(ht(this, e, !1))
    },
    filter: function(e) {
        return this.pushStack(ht(this, e, !0))
    },
    is: function(e) {
        return !!e && (typeof e == "string" ? ft.test(e) ? b(e, this.context).index(this[0]) >= 0 : b.filter(e, this).length > 0 : this.filter(e).length > 0)
    },
    closest: function(e, t) {
        var n, r = 0,
            i = this.length,
            s = [],
            o = ft.test(e) || typeof e != "string" ? b(e, t || this.context) : 0;
        for (; r < i; r++) {
            n = this[r];
            while (n && n.ownerDocument && n !== t && n.nodeType !== 11) {
                if (o ? o.index(n) > -1 : b.find.matchesSelector(n, e)) {
                    s.push(n);
                    break
                }
                n = n.parentNode
            }
        }
        return this.pushStack(s.length > 1 ? b.unique(s) : s)
    },
    index: function(e) {
        return e ? typeof e == "string" ? b.inArray(this[0], b(e)) : b.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    },
    add: function(e, t) {
        var n = typeof e == "string" ? b(e, t) : b.makeArray(e && e.nodeType ? [e] : e),
            r = b.merge(this.get(), n);
        return this.pushStack(b.unique(r))
    },
    addBack: function(e) {
        return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
    }
}), b.fn.andSelf = b.fn.addBack, b.each({
    parent: function(e) {
        var t = e.parentNode;
        return t && t.nodeType !== 11 ? t : null
    },
    parents: function(e) {
        return b.dir(e, "parentNode")
    },
    parentsUntil: function(e, t, n) {
        return b.dir(e, "parentNode", n)
    },
    next: function(e) {
        return ct(e, "nextSibling")
    },
    prev: function(e) {
        return ct(e, "previousSibling")
    },
    nextAll: function(e) {
        return b.dir(e, "nextSibling")
    },
    prevAll: function(e) {
        return b.dir(e, "previousSibling")
    },
    nextUntil: function(e, t, n) {
        return b.dir(e, "nextSibling", n)
    },
    prevUntil: function(e, t, n) {
        return b.dir(e, "previousSibling", n)
    },
    siblings: function(e) {
        return b.sibling((e.parentNode || {}).firstChild, e)
    },
    children: function(e) {
        return b.sibling(e.firstChild)
    },
    contents: function(e) {
        return b.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : b.merge([], e.childNodes)
    }
}, function(e, t) {
    b.fn[e] = function(n, r) {
        var i = b.map(this, t, n);
        return ot.test(e) || (r = n), r && typeof r == "string" && (i = b.filter(r, i)), i = this.length > 1 && !lt[e] ? b.unique(i) : i, this.length > 1 && ut.test(e) && (i = i.reverse()), this.pushStack(i)
    }
}), b.extend({
    filter: function(e, t, n) {
        return n && (e = ":not(" + e + ")"), t.length === 1 ? b.find.matchesSelector(t[0], e) ? [t[0]] : [] : b.find.matches(e, t)
    },
    dir: function(e, n, r) {
        var i = [],
            s = e[n];
        while (s && s.nodeType !== 9 && (r === t || s.nodeType !== 1 || !b(s).is(r))) s.nodeType === 1 && i.push(s), s = s[n];
        return i
    },
    sibling: function(e, t) {
        var n = [];
        for (; e; e = e.nextSibling) e.nodeType === 1 && e !== t && n.push(e);
        return n
    }
});
var dt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    vt = / jQuery\d+="(?:null|\d+)"/g,
    mt = new RegExp("<(?:" + dt + ")[\\s/>]", "i"),
    gt = /^\s+/,
    yt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    bt = /<([\w:]+)/,
    wt = /<tbody/i,
    Et = /<|&#?\w+;/,
    St = /<(?:script|style|link)/i,
    xt = /^(?:checkbox|radio)$/i,
    Tt = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Nt = /^$|\/(?:java|ecma)script/i,
    Ct = /^true\/(.*)/,
    kt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    Lt = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: b.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    },
    At = pt(s),
    Ot = At.appendChild(s.createElement("div"));
Lt.optgroup = Lt.option, Lt.tbody = Lt.tfoot = Lt.colgroup = Lt.caption = Lt.thead, Lt.th = Lt.td, b.fn.extend({
    text: function(e) {
        return b.access(this, function(e) {
            return e === t ? b.text(this) : this.empty().append((this[0] && this[0].ownerDocument || s).createTextNode(e))
        }, null, e, arguments.length)
    },
    wrapAll: function(e) {
        if (b.isFunction(e)) return this.each(function(t) {
            b(this).wrapAll(e.call(this, t))
        });
        if (this[0]) {
            var t = b(e, this[0].ownerDocument).eq(0).clone(!0);
            this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                var e = this;
                while (e.firstChild && e.firstChild.nodeType === 1) e = e.firstChild;
                return e
            }).append(this)
        }
        return this
    },
    wrapInner: function(e) {
        return b.isFunction(e) ? this.each(function(t) {
            b(this).wrapInner(e.call(this, t))
        }) : this.each(function() {
            var t = b(this),
                n = t.contents();
            n.length ? n.wrapAll(e) : t.append(e)
        })
    },
    wrap: function(e) {
        var t = b.isFunction(e);
        return this.each(function(n) {
            b(this).wrapAll(t ? e.call(this, n) : e)
        })
    },
    unwrap: function() {
        return this.parent().each(function() {
            b.nodeName(this, "body") || b(this).replaceWith(this.childNodes)
        }).end()
    },
    append: function() {
        return this.domManip(arguments, !0, function(e) {
            (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) && this.appendChild(e)
        })
    },
    prepend: function() {
        return this.domManip(arguments, !0, function(e) {
            (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) && this.insertBefore(e, this.firstChild)
        })
    },
    before: function() {
        return this.domManip(arguments, !1, function(e) {
            this.parentNode && this.parentNode.insertBefore(e, this)
        })
    },
    after: function() {
        return this.domManip(arguments, !1, function(e) {
            this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
        })
    },
    remove: function(e, t) {
        var n, r = 0;
        for (;
            (n = this[r]) != null; r++)
            if (!e || b.filter(e, [n]).length > 0) !t && n.nodeType === 1 && b.cleanData(jt(n)), n.parentNode && (t && b.contains(n.ownerDocument, n) && Pt(jt(n, "script")), n.parentNode.removeChild(n));
        return this
    },
    empty: function() {
        var e, t = 0;
        for (;
            (e = this[t]) != null; t++) {
            e.nodeType === 1 && b.cleanData(jt(e, !1));
            while (e.firstChild) e.removeChild(e.firstChild);
            e.options && b.nodeName(e, "select") && (e.options.length = 0)
        }
        return this
    },
    clone: function(e, t) {
        return e = e == null ? !1 : e, t = t == null ? e : t, this.map(function() {
            return b.clone(this, e, t)
        })
    },
    html: function(e) {
        return b.access(this, function(e) {
            var n = this[0] || {},
                r = 0,
                i = this.length;
            if (e === t) return n.nodeType === 1 ? n.innerHTML.replace(vt, "") : t;
            if (typeof e == "string" && !St.test(e) && (b.support.htmlSerialize || !mt.test(e)) && (b.support.leadingWhitespace || !gt.test(e)) && !Lt[(bt.exec(e) || ["", ""])[1].toLowerCase()]) {
                e = e.replace(yt, "<$1></$2>");
                try {
                    for (; r < i; r++) n = this[r] || {}, n.nodeType === 1 && (b.cleanData(jt(n, !1)), n.innerHTML = e);
                    n = 0
                } catch (s) {}
            }
            n && this.empty().append(e)
        }, null, e, arguments.length)
    },
    replaceWith: function(e) {
        var t = b.isFunction(e);
        return !t && typeof e != "string" && (e = b(e).not(this).detach()), this.domManip([e], !0, function(e) {
            var t = this.nextSibling,
                n = this.parentNode;
            n && (b(this).remove(), n.insertBefore(e, t))
        })
    },
    detach: function(e) {
        return this.remove(e, !0)
    },
    domManip: function(e, n, r) {
        e = h.apply([], e);
        var i, s, o, u, a, f, l = 0,
            c = this.length,
            p = this,
            d = c - 1,
            v = e[0],
            m = b.isFunction(v);
        if (m || !(c <= 1 || typeof v != "string" || b.support.checkClone || !Tt.test(v))) return this.each(function(i) {
            var s = p.eq(i);
            m && (e[0] = v.call(this, i, n ? s.html() : t)), s.domManip(e, n, r)
        });
        if (c) {
            f = b.buildFragment(e, this[0].ownerDocument, !1, this), i = f.firstChild, f.childNodes.length === 1 && (f = i);
            if (i) {
                n = n && b.nodeName(i, "tr"), u = b.map(jt(f, "script"), _t), o = u.length;
                for (; l < c; l++) s = f, l !== d && (s = b.clone(s, !0, !0), o && b.merge(u, jt(s, "script"))), r.call(n && b.nodeName(this[l], "table") ? Mt(this[l], "tbody") : this[l], s, l);
                if (o) {
                    a = u[u.length - 1].ownerDocument, b.map(u, Dt);
                    for (l = 0; l < o; l++) s = u[l], Nt.test(s.type || "") && !b._data(s, "globalEval") && b.contains(a, s) && (s.src ? b.ajax({
                        url: s.src,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        "throws": !0
                    }) : b.globalEval((s.text || s.textContent || s.innerHTML || "").replace(kt, "")))
                }
                f = i = null
            }
        }
        return this
    }
}), b.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
}, function(e, t) {
    b.fn[e] = function(e) {
        var n, r = 0,
            i = [],
            s = b(e),
            o = s.length - 1;
        for (; r <= o; r++) n = r === o ? this : this.clone(!0), b(s[r])[t](n), p.apply(i, n.get());
        return this.pushStack(i)
    }
}), b.extend({
    clone: function(e, t, n) {
        var r, i, s, o, u, a = b.contains(e.ownerDocument, e);
        b.support.html5Clone || b.isXMLDoc(e) || !mt.test("<" + e.nodeName + ">") ? s = e.cloneNode(!0) : (Ot.innerHTML = e.outerHTML, Ot.removeChild(s = Ot.firstChild));
        if ((!b.support.noCloneEvent || !b.support.noCloneChecked) && (e.nodeType === 1 || e.nodeType === 11) && !b.isXMLDoc(e)) {
            r = jt(s), u = jt(e);
            for (o = 0;
                (i = u[o]) != null; ++o) r[o] && Bt(i, r[o])
        }
        if (t)
            if (n) {
                u = u || jt(e), r = r || jt(s);
                for (o = 0;
                    (i = u[o]) != null; o++) Ht(i, r[o])
            } else Ht(e, s);
        return r = jt(s, "script"), r.length > 0 && Pt(r, !a && jt(e, "script")), r = u = i = null, s
    },
    buildFragment: function(e, t, n, r) {
        var i, s, o, u, a, f, l, c = e.length,
            h = pt(t),
            p = [],
            d = 0;
        for (; d < c; d++) {
            s = e[d];
            if (s || s === 0)
                if (b.type(s) === "object") b.merge(p, s.nodeType ? [s] : s);
                else if (!Et.test(s)) p.push(t.createTextNode(s));
            else {
                u = u || h.appendChild(t.createElement("div")), a = (bt.exec(s) || ["", ""])[1].toLowerCase(), l = Lt[a] || Lt._default, u.innerHTML = l[1] + s.replace(yt, "<$1></$2>") + l[2], i = l[0];
                while (i--) u = u.lastChild;
                !b.support.leadingWhitespace && gt.test(s) && p.push(t.createTextNode(gt.exec(s)[0]));
                if (!b.support.tbody) {
                    s = a === "table" && !wt.test(s) ? u.firstChild : l[1] === "<table>" && !wt.test(s) ? u : 0, i = s && s.childNodes.length;
                    while (i--) b.nodeName(f = s.childNodes[i], "tbody") && !f.childNodes.length && s.removeChild(f)
                }
                b.merge(p, u.childNodes), u.textContent = "";
                while (u.firstChild) u.removeChild(u.firstChild);
                u = h.lastChild
            }
        }
        u && h.removeChild(u), b.support.appendChecked || b.grep(jt(p, "input"), Ft), d = 0;
        while (s = p[d++]) {
            if (r && b.inArray(s, r) !== -1) continue;
            o = b.contains(s.ownerDocument, s), u = jt(h.appendChild(s), "script"), o && Pt(u);
            if (n) {
                i = 0;
                while (s = u[i++]) Nt.test(s.type || "") && n.push(s)
            }
        }
        return u = null, h
    },
    cleanData: function(e, t) {
        var n, r, s, o, u = 0,
            a = b.expando,
            f = b.cache,
            c = b.support.deleteExpando,
            h = b.event.special;
        for (;
            (n = e[u]) != null; u++)
            if (t || b.acceptData(n)) {
                s = n[a], o = s && f[s];
                if (o) {
                    if (o.events)
                        for (r in o.events) h[r] ? b.event.remove(n, r) : b.removeEvent(n, r, o.handle);
                    f[s] && (delete f[s], c ? delete n[a] : typeof n.removeAttribute !== i ? n.removeAttribute(a) : n[a] = null, l.push(s))
                }
            }
    }
});
var It, qt, Rt, Ut = /alpha\([^)]*\)/i,
    zt = /opacity\s*=\s*([^)]*)/,
    Wt = /^(top|right|bottom|left)$/,
    Xt = /^(none|table(?!-c[ea]).+)/,
    Vt = /^margin/,
    $t = new RegExp("^(" + w + ")(.*)$", "i"),
    Jt = new RegExp("^(" + w + ")(?!px)[a-z%]+$", "i"),
    Kt = new RegExp("^([+-])=(" + w + ")", "i"),
    Qt = {
        BODY: "block"
    },
    Gt = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    },
    Yt = {
        letterSpacing: 0,
        fontWeight: 400
    },
    Zt = ["Top", "Right", "Bottom", "Left"],
    en = ["Webkit", "O", "Moz", "ms"];
b.fn.extend({
    css: function(e, n) {
        return b.access(this, function(e, n, r) {
            var i, s, o = {},
                u = 0;
            if (b.isArray(n)) {
                s = qt(e), i = n.length;
                for (; u < i; u++) o[n[u]] = b.css(e, n[u], !1, s);
                return o
            }
            return r !== t ? b.style(e, n, r) : b.css(e, n)
        }, e, n, arguments.length > 1)
    },
    show: function() {
        return rn(this, !0)
    },
    hide: function() {
        return rn(this)
    },
    toggle: function(e) {
        var t = typeof e == "boolean";
        return this.each(function() {
            (t ? e : nn(this)) ? b(this).show(): b(this).hide()
        })
    }
}), b.extend({
    cssHooks: {
        opacity: {
            get: function(e, t) {
                if (t) {
                    var n = Rt(e, "opacity");
                    return n === "" ? "1" : n
                }
            }
        }
    },
    cssNumber: {
        columnCount: !0,
        fillOpacity: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0
    },
    cssProps: {
        "float": b.support.cssFloat ? "cssFloat" : "styleFloat"
    },
    style: function(e, n, r, i) {
        if (!e || e.nodeType === 3 || e.nodeType === 8 || !e.style) return;
        var s, o, u, a = b.camelCase(n),
            f = e.style;
        n = b.cssProps[a] || (b.cssProps[a] = tn(f, a)), u = b.cssHooks[n] || b.cssHooks[a];
        if (r === t) return u && "get" in u && (s = u.get(e, !1, i)) !== t ? s : f[n];
        o = typeof r, o === "string" && (s = Kt.exec(r)) && (r = (s[1] + 1) * s[2] + parseFloat(b.css(e, n)), o = "number");
        if (r == null || o === "number" && isNaN(r)) return;
        o === "number" && !b.cssNumber[a] && (r += "px"), !b.support.clearCloneStyle && r === "" && n.indexOf("background") === 0 && (f[n] = "inherit");
        if (!u || !("set" in u) || (r = u.set(e, r, i)) !== t) try {
            f[n] = r
        } catch (l) {}
    },
    css: function(e, n, r, i) {
        var s, o, u, a = b.camelCase(n);
        return n = b.cssProps[a] || (b.cssProps[a] = tn(e.style, a)), u = b.cssHooks[n] || b.cssHooks[a], u && "get" in u && (o = u.get(e, !0, r)), o === t && (o = Rt(e, n, i)), o === "normal" && n in Yt && (o = Yt[n]), r === "" || r ? (s = parseFloat(o), r === !0 || b.isNumeric(s) ? s || 0 : o) : o
    },
    swap: function(e, t, n, r) {
        var i, s, o = {};
        for (s in t) o[s] = e.style[s], e.style[s] = t[s];
        i = n.apply(e, r || []);
        for (s in t) e.style[s] = o[s];
        return i
    }
}), e.getComputedStyle ? (qt = function(t) {
    return e.getComputedStyle(t, null)
}, Rt = function(e, n, r) {
    var i, s, o, u = r || qt(e),
        a = u ? u.getPropertyValue(n) || u[n] : t,
        f = e.style;
    return u && (a === "" && !b.contains(e.ownerDocument, e) && (a = b.style(e, n)), Jt.test(a) && Vt.test(n) && (i = f.width, s = f.minWidth, o = f.maxWidth, f.minWidth = f.maxWidth = f.width = a, a = u.width, f.width = i, f.minWidth = s, f.maxWidth = o)), a
}) : s.documentElement.currentStyle && (qt = function(e) {
    return e.currentStyle
}, Rt = function(e, n, r) {
    var i, s, o, u = r || qt(e),
        a = u ? u[n] : t,
        f = e.style;
    return a == null && f && f[n] && (a = f[n]), Jt.test(a) && !Wt.test(n) && (i = f.left, s = e.runtimeStyle, o = s && s.left, o && (s.left = e.currentStyle.left), f.left = n === "fontSize" ? "1em" : a, a = f.pixelLeft + "px", f.left = i, o && (s.left = o)), a === "" ? "auto" : a
}), b.each(["height", "width"], function(e, t) {
    b.cssHooks[t] = {
        get: function(e, n, r) {
            if (n) return e.offsetWidth === 0 && Xt.test(b.css(e, "display")) ? b.swap(e, Gt, function() {
                return un(e, t, r)
            }) : un(e, t, r)
        },
        set: function(e, n, r) {
            var i = r && qt(e);
            return sn(e, n, r ? on(e, t, r, b.support.boxSizing && b.css(e, "boxSizing", !1, i) === "border-box", i) : 0)
        }
    }
}), b.support.opacity || (b.cssHooks.opacity = {
    get: function(e, t) {
        return zt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
    },
    set: function(e, t) {
        var n = e.style,
            r = e.currentStyle,
            i = b.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")" : "",
            s = r && r.filter || n.filter || "";
        n.zoom = 1;
        if ((t >= 1 || t === "") && b.trim(s.replace(Ut, "")) === "" && n.removeAttribute) {
            n.removeAttribute("filter");
            if (t === "" || r && !r.filter) return
        }
        n.filter = Ut.test(s) ? s.replace(Ut, i) : s + " " + i
    }
}), b(function() {
    b.support.reliableMarginRight || (b.cssHooks.marginRight = {
        get: function(e, t) {
            if (t) return b.swap(e, {
                display: "inline-block"
            }, Rt, [e, "marginRight"])
        }
    }), !b.support.pixelPosition && b.fn.position && b.each(["top", "left"], function(e, t) {
        b.cssHooks[t] = {
            get: function(e, n) {
                if (n) return n = Rt(e, t), Jt.test(n) ? b(e).position()[t] + "px" : n
            }
        }
    })
}), b.expr && b.expr.filters && (b.expr.filters.hidden = function(e) {
    return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !b.support.reliableHiddenOffsets && (e.style && e.style.display || b.css(e, "display")) === "none"
}, b.expr.filters.visible = function(e) {
    return !b.expr.filters.hidden(e)
}), b.each({
    margin: "",
    padding: "",
    border: "Width"
}, function(e, t) {
    b.cssHooks[e + t] = {
        expand: function(n) {
            var r = 0,
                i = {},
                s = typeof n == "string" ? n.split(" ") : [n];
            for (; r < 4; r++) i[e + Zt[r] + t] = s[r] || s[r - 2] || s[0];
            return i
        }
    }, Vt.test(e) || (b.cssHooks[e + t].set = sn)
});
var ln = /%20/g,
    cn = /\[\]$/,
    hn = /\r?\n/g,
    pn = /^(?:submit|button|image|reset|file)$/i,
    dn = /^(?:input|select|textarea|keygen)/i;
b.fn.extend({
    serialize: function() {
        return b.param(this.serializeArray())
    },
    serializeArray: function() {
        return this.map(function() {
            var e = b.prop(this, "elements");
            return e ? b.makeArray(e) : this
        }).filter(function() {
            var e = this.type;
            return this.name && !b(this).is(":disabled") && dn.test(this.nodeName) && !pn.test(e) && (this.checked || !xt.test(e))
        }).map(function(e, t) {
            var n = b(this).val();
            return n == null ? null : b.isArray(n) ? b.map(n, function(e) {
                return {
                    name: t.name,
                    value: e.replace(hn, "\r\n")
                }
            }) : {
                name: t.name,
                value: n.replace(hn, "\r\n")
            }
        }).get()
    }
}), b.param = function(e, n) {
    var r, i = [],
        s = function(e, t) {
            t = b.isFunction(t) ? t() : t == null ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
    n === t && (n = b.ajaxSettings && b.ajaxSettings.traditional);
    if (b.isArray(e) || e.jquery && !b.isPlainObject(e)) b.each(e, function() {
        s(this.name, this.value)
    });
    else
        for (r in e) vn(r, e[r], n, s);
    return i.join("&").replace(ln, "+")
}, b.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
    b.fn[t] = function(
        e, n) {
        return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
    }
}), b.fn.hover = function(e, t) {
    return this.mouseenter(e).mouseleave(t || e)
};
var mn, gn, yn = b.now(),
    bn = /\?/,
    wn = /#.*$/,
    En = /([?&])_=[^&]*/,
    Sn = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
    xn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Tn = /^(?:GET|HEAD)$/,
    Nn = /^\/\//,
    Cn = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
    kn = b.fn.load,
    Ln = {},
    An = {},
    On = "*/".concat("*");
try {
    gn = o.href
} catch (Mn) {
    gn = s.createElement("a"), gn.href = "", gn = gn.href
}
mn = Cn.exec(gn.toLowerCase()) || [], b.fn.load = function(e, n, r) {
    if (typeof e != "string" && kn) return kn.apply(this, arguments);
    var i, s, o, u = this,
        a = e.indexOf(" ");
    return a >= 0 && (i = e.slice(a, e.length), e = e.slice(0, a)), b.isFunction(n) ? (r = n, n = t) : n && typeof n == "object" && (o = "POST"), u.length > 0 && b.ajax({
        url: e,
        type: o,
        dataType: "html",
        data: n
    }).done(function(e) {
        s = arguments, u.html(i ? b("<div>").append(b.parseHTML(e)).find(i) : e)
    }).complete(r && function(e, t) {
        u.each(r, s || [e.responseText, t, e])
    }), this
}, b.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
    b.fn[t] = function(e) {
        return this.on(t, e)
    }
}), b.each(["get", "post"], function(e, n) {
    b[n] = function(e, r, i, s) {
        return b.isFunction(r) && (s = s || i, i = r, r = t), b.ajax({
            url: e,
            type: n,
            dataType: s,
            data: r,
            success: i
        })
    }
}), b.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
        url: gn,
        type: "GET",
        isLocal: xn.test(mn[1]),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
            "*": On,
            text: "text/plain",
            html: "text/html",
            xml: "application/xml, text/xml",
            json: "application/json, text/javascript"
        },
        contents: {
            xml: /xml/,
            html: /html/,
            json: /json/
        },
        responseFields: {
            xml: "responseXML",
            text: "responseText"
        },
        converters: {
            "* text": e.String,
            "text html": !0,
            "text json": b.parseJSON,
            "text xml": b.parseXML
        },
        flatOptions: {
            url: !0,
            context: !0
        }
    },
    ajaxSetup: function(e, t) {
        return t ? Pn(Pn(e, b.ajaxSettings), t) : Pn(b.ajaxSettings, e)
    },
    ajaxPrefilter: _n(Ln),
    ajaxTransport: _n(An),
    ajax: function(e, n) {
        function N(e, n, r, i) {
            var l, g, y, E, S, T = n;
            if (w === 2) return;
            w = 2, u && clearTimeout(u), f = t, o = i || "", x.readyState = e > 0 ? 4 : 0, r && (E = Hn(c, x, r));
            if (e >= 200 && e < 300 || e === 304) c.ifModified && (S = x.getResponseHeader("Last-Modified"), S && (b.lastModified[s] = S), S = x.getResponseHeader("etag"), S && (b.etag[s] = S)), e === 204 ? (l = !0, T = "nocontent") : e === 304 ? (l = !0, T = "notmodified") : (l = Bn(c, E), T = l.state, g = l.data, y = l.error, l = !y);
            else {
                y = T;
                if (e || !T) T = "error", e < 0 && (e = 0)
            }
            x.status = e, x.statusText = (n || T) + "", l ? d.resolveWith(h, [g, T, x]) : d.rejectWith(h, [x, T, y]), x.statusCode(m), m = t, a && p.trigger(l ? "ajaxSuccess" : "ajaxError", [x, c, l ? g : y]), v.fireWith(h, [x, T]), a && (p.trigger("ajaxComplete", [x, c]), --b.active || b.event.trigger("ajaxStop"))
        }
        typeof e == "object" && (n = e, e = t), n = n || {};
        var r, i, s, o, u, a, f, l, c = b.ajaxSetup({}, n),
            h = c.context || c,
            p = c.context && (h.nodeType || h.jquery) ? b(h) : b.event,
            d = b.Deferred(),
            v = b.Callbacks("once memory"),
            m = c.statusCode || {},
            g = {},
            y = {},
            w = 0,
            S = "canceled",
            x = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (w === 2) {
                        if (!l) {
                            l = {};
                            while (t = Sn.exec(o)) l[t[1].toLowerCase()] = t[2]
                        }
                        t = l[e.toLowerCase()]
                    }
                    return t == null ? null : t
                },
                getAllResponseHeaders: function() {
                    return w === 2 ? o : null
                },
                setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    return w || (e = y[n] = y[n] || e, g[e] = t), this
                },
                overrideMimeType: function(e) {
                    return w || (c.mimeType = e), this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (w < 2)
                            for (t in e) m[t] = [m[t], e[t]];
                        else x.always(e[x.status]);
                    return this
                },
                abort: function(e) {
                    var t = e || S;
                    return f && f.abort(t), N(0, t), this
                }
            };
        d.promise(x).complete = v.add, x.success = x.done, x.error = x.fail, c.url = ((e || c.url || gn) + "").replace(wn, "").replace(Nn, mn[1] + "//"), c.type = n.method || n.type || c.method || c.type, c.dataTypes = b.trim(c.dataType || "*").toLowerCase().match(E) || [""], c.crossDomain == null && (r = Cn.exec(c.url.toLowerCase()), c.crossDomain = !(!r || r[1] === mn[1] && r[2] === mn[2] && (r[3] || (r[1] === "http:" ? 80 : 443)) == (mn[3] || (mn[1] === "http:" ? 80 : 443)))), c.data && c.processData && typeof c.data != "string" && (c.data = b.param(c.data, c.traditional)), Dn(Ln, c, n, x);
        if (w === 2) return x;
        a = c.global, a && b.active++ === 0 && b.event.trigger("ajaxStart"), c.type = c.type.toUpperCase(), c.hasContent = !Tn.test(c.type), s = c.url, c.hasContent || (c.data && (s = c.url += (bn.test(s) ? "&" : "?") + c.data, delete c.data), c.cache === !1 && (c.url = En.test(s) ? s.replace(En, "$1_=" + yn++) : s + (bn.test(s) ? "&" : "?") + "_=" + yn++)), c.ifModified && (b.lastModified[s] && x.setRequestHeader("If-Modified-Since", b.lastModified[s]), b.etag[s] && x.setRequestHeader("If-None-Match", b.etag[s])), (c.data && c.hasContent && c.contentType !== !1 || n.contentType) && x.setRequestHeader("Content-Type", c.contentType), x.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + (c.dataTypes[0] !== "*" ? ", " + On + "; q=0.01" : "") : c.accepts["*"]);
        for (i in c.headers) x.setRequestHeader(i, c.headers[i]);
        if (!c.beforeSend || c.beforeSend.call(h, x, c) !== !1 && w !== 2) {
            S = "abort";
            for (i in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) x[i](c[i]);
            f = Dn(An, c, n, x);
            if (!f) N(-1, "No Transport");
            else {
                x.readyState = 1, a && p.trigger("ajaxSend", [x, c]), c.async && c.timeout > 0 && (u = setTimeout(function() {
                    x.abort("timeout")
                }, c.timeout));
                try {
                    w = 1, f.send(g, N)
                } catch (T) {
                    if (!(w < 2)) throw T;
                    N(-1, T)
                }
            }
            return x
        }
        return x.abort()
    },
    getScript: function(e, n) {
        return b.get(e, t, n, "script")
    },
    getJSON: function(e, t, n) {
        return b.get(e, t, n, "json")
    }
}), b.ajaxSetup({
    accepts: {
        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
        script: /(?:java|ecma)script/
    },
    converters: {
        "text script": function(e) {
            return b.globalEval(e), e
        }
    }
}), b.ajaxPrefilter("script", function(e) {
    e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
}), b.ajaxTransport("script", function(e) {
    if (e.crossDomain) {
        var n, r = s.head || b("head")[0] || s.documentElement;
        return {
            send: function(t, i) {
                n = s.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, t) {
                    if (t || !n.readyState || /loaded|complete/.test(n.readyState)) n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success")
                }, r.insertBefore(n, r.firstChild)
            },
            abort: function() {
                n && n.onload(t, !0)
            }
        }
    }
});
var jn = [],
    Fn = /(=)\?(?=&|$)|\?\?/;
b.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function() {
        var e = jn.pop() || b.expando + "_" + yn++;
        return this[e] = !0, e
    }
}), b.ajaxPrefilter("json jsonp", function(n, r, i) {
    var s, o, u, a = n.jsonp !== !1 && (Fn.test(n.url) ? "url" : typeof n.data == "string" && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Fn.test(n.data) && "data");
    if (a || n.dataTypes[0] === "jsonp") return s = n.jsonpCallback = b.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, a ? n[a] = n[a].replace(Fn, "$1" + s) : n.jsonp !== !1 && (n.url += (bn.test(n.url) ? "&" : "?") + n.jsonp + "=" + s), n.converters["script json"] = function() {
        return u || b.error(s + " was not called"), u[0]
    }, n.dataTypes[0] = "json", o = e[s], e[s] = function() {
        u = arguments
    }, i.always(function() {
        e[s] = o, n[s] && (n.jsonpCallback = r.jsonpCallback, jn.push(s)), u && b.isFunction(o) && o(u[0]), u = o = t
    }), "script"
});
var In, qn, Rn = 0,
    Un = e.ActiveXObject && function() {
        var e;
        for (e in In) In[e](t, !0)
    };
b.ajaxSettings.xhr = e.ActiveXObject ? function() {
    return !this.isLocal && zn() || Wn()
} : zn, qn = b.ajaxSettings.xhr(), b.support.cors = !!qn && "withCredentials" in qn, qn = b.support.ajax = !!qn, qn && b.ajaxTransport(function(n) {
    if (!n.crossDomain || b.support.cors) {
        var r;
        return {
            send: function(i, s) {
                var o, u, a = n.xhr();
                n.username ? a.open(n.type, n.url, n.async, n.username, n.password) : a.open(n.type, n.url, n.async);
                if (n.xhrFields)
                    for (u in n.xhrFields) a[u] = n.xhrFields[u];
                n.mimeType && a.overrideMimeType && a.overrideMimeType(n.mimeType), !n.crossDomain && !i["X-Requested-With"] && (i["X-Requested-With"] = "XMLHttpRequest");
                try {
                    for (u in i) a.setRequestHeader(u, i[u])
                } catch (f) {}
                a.send(n.hasContent && n.data || null), r = function(e, i) {
                    var u, f, l, c;
                    try {
                        if (r && (i || a.readyState === 4)) {
                            r = t, o && (a.onreadystatechange = b.noop, Un && delete In[o]);
                            if (i) a.readyState !== 4 && a.abort();
                            else {
                                c = {}, u = a.status, f = a.getAllResponseHeaders(), typeof a.responseText == "string" && (c.text = a.responseText);
                                try {
                                    l = a.statusText
                                } catch (h) {
                                    l = ""
                                }!u && n.isLocal && !n.crossDomain ? u = c.text ? 200 : 404 : u === 1223 && (u = 204)
                            }
                        }
                    } catch (p) {
                        i || s(-1, p)
                    }
                    c && s(u, l, c, f)
                }, n.async ? a.readyState === 4 ? setTimeout(r) : (o = ++Rn, Un && (In || (In = {}, b(e).unload(Un)), In[o] = r), a.onreadystatechange = r) : r()
            },
            abort: function() {
                r && r(t, !0)
            }
        }
    }
});
var Xn, Vn, $n = /^(?:toggle|show|hide)$/,
    Jn = new RegExp("^(?:([+-])=|)(" + w + ")([a-z%]*)$", "i"),
    Kn = /queueHooks$/,
    Qn = [nr],
    Gn = {
        "*": [function(e, t) {
            var n, r, i = this.createTween(e, t),
                s = Jn.exec(t),
                o = i.cur(),
                u = +o || 0,
                a = 1,
                f = 20;
            if (s) {
                n = +s[2], r = s[3] || (b.cssNumber[e] ? "" : "px");
                if (r !== "px" && u) {
                    u = b.css(i.elem, e, !0) || n || 1;
                    do a = a || ".5", u /= a, b.style(i.elem, e, u + r); while (a !== (a = i.cur() / o) && a !== 1 && --f)
                }
                i.unit = r, i.start = u, i.end = s[1] ? u + (s[1] + 1) * n : n
            }
            return i
        }]
    };
b.Animation = b.extend(er, {
tweener: function(e, t) {
    b.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
    var n, r = 0,
        i = e.length;
    for (; r < i; r++) n = e[r], Gn[n] = Gn[n] || [], Gn[n].unshift(t)
},
prefilter: function(e, t) {
    t ? Qn.unshift(e) : Qn.push(e)
}
}), b.Tween = rr, rr.prototype = {
constructor: rr,
init: function(e, t, n, r, i, s) {
    this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = s || (b.cssNumber[n] ? "" : "px")
},
cur: function() {
    var e = rr.propHooks[this.prop];
    return e && e.get ? e.get(this) : rr.propHooks._default.get(this)
},
run: function(e) {
    var t, n = rr.propHooks[this.prop];
    return this.options.duration ? this.pos = t = b.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : rr.propHooks._default.set(this), this
}
}, rr.prototype.init.prototype = rr.prototype, rr.propHooks = {
_default: {
    get: function(e) {
        var t;
        return e.elem[e.prop] == null || !!e.elem.style && e.elem.style[e.prop] != null ? (t = b.css(e.elem, e.prop, ""), !t || t === "auto" ? 0 : t) : e.elem[e.prop]
    },
    set: function(e) {
        b.fx.step[e.prop] ? b.fx.step[e.prop](e) : e.elem.style && (e.elem.style[b.cssProps[e.prop]] != null || b.cssHooks[e.prop]) ? b.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
    }
}
}, rr.propHooks.scrollTop = rr.propHooks.scrollLeft = {
set: function(e) {
    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
}
}, b.each(["toggle", "show", "hide"], function(e, t) {
var n = b.fn[t];
b.fn[t] = function(e, r, i) {
    return e == null || typeof e == "boolean" ? n.apply(this, arguments) : this.animate(ir(t, !0), e, r, i)
}
}), b.fn.extend({
fadeTo: function(e, t, n, r) {
    return this.filter(nn).css("opacity", 0).show().end().animate({
        opacity: t
    }, e, n, r)
},
animate: function(e, t, n, r) {
    var i = b.isEmptyObject(e),
        s = b.speed(t, n, r),
        o = function() {
            var t = er(this, b.extend({}, e), s);
            o.finish = function() {
                t.stop(!0)
            }, (i || b._data(this, "finish")) && t.stop(!0)
        };
    return o.finish = o, i || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
},
stop: function(e, n, r) {
    var i = function(e) {
        var t = e.stop;
        delete e.stop, t(r)
    };
    return typeof e != "string" && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
        var t = !0,
            n = e != null && e + "queueHooks",
            s = b.timers,
            o = b._data(this);
        if (n) o[n] && o[n].stop && i(o[n]);
        else
            for (n in o) o[n] && o[n].stop && Kn.test(n) && i(o[n]);
        for (n = s.length; n--;) s[n].elem === this && (e == null || s[n].queue === e) && (s[n].anim.stop(r), t = !1, s.splice(n, 1));
        (t || !r) && b.dequeue(this, e)
    })
},
finish: function(e) {
    return e !== !1 && (e = e || "fx"), this.each(function() {
        var t, n = b._data(this),
            r = n[e + "queue"],
            i = n[e + "queueHooks"],
            s = b.timers,
            o = r ? r.length : 0;
        n.finish = !0, b.queue(this, e, []), i && i.cur && i.cur.finish && i.cur.finish.call(this);
        for (t = s.length; t--;) s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
        for (t = 0; t < o; t++) r[t] && r[t].finish && r[t].finish.call(this);
        delete n.finish
    })
}
}), b.each({
slideDown: ir("show"),
slideUp: ir("hide"),
slideToggle: ir("toggle"),
fadeIn: {
    opacity: "show"
},
fadeOut: {
    opacity: "hide"
},
fadeToggle: {
    opacity: "toggle"
}
}, function(e, t) {
b.fn[e] = function(e, n, r) {
    return this.animate(t, e, n, r)
}
}), b.speed = function(e, t, n) {
var r = e && typeof e == "object" ? b.extend({}, e) : {
    complete: n || !n && t || b.isFunction(e) && e,
    duration: e,
    easing: n && t || t && !b.isFunction(t) && t
};
r.duration = b.fx.off ? 0 : typeof r.duration == "number" ? r.duration : r.duration in b.fx.speeds ? b.fx.speeds[r.duration] : b.fx.speeds._default;
if (r.queue == null || r.queue === !0) r.queue = "fx";
return r.old = r.complete, r.complete = function() {
    b.isFunction(r.old) && r.old.
    call(this), r.queue && b.dequeue(this, r.queue)
}, r
}, b.easing = {
linear: function(e) {
    return e
},
swing: function(e) {
    return .5 - Math.cos(e * Math.PI) / 2
}
}, b.timers = [], b.fx = rr.prototype.init, b.fx.tick = function() {
var e, n = b.timers,
    r = 0;
Xn = b.now();
for (; r < n.length; r++) e = n[r], !e() && n[r] === e && n.splice(r--, 1);
n.length || b.fx.stop(), Xn = t
}, b.fx.timer = function(e) {
e() && b.timers.push(e) && b.fx.start()
}, b.fx.interval = 13, b.fx.start = function() {
Vn || (Vn = setInterval(b.fx.tick, b.fx.interval))
}, b.fx.stop = function() {
clearInterval(Vn), Vn = null
}, b.fx.speeds = {
slow: 600,
fast: 200,
_default: 400
}, b.fx.step = {}, b.expr && b.expr.filters && (b.expr.filters.animated = function(e) {
return b.grep(b.timers, function(t) {
    return e === t.elem
}).length
}), b.fn.offset = function(e) {
if (arguments.length) return e === t ? this : this.each(function(t) {
    b.offset.setOffset(this, e, t)
});
var n, r, s = {
        top: 0,
        left: 0
    },
    o = this[0],
    u = o && o.ownerDocument;
if (!u) return;
return n = u.documentElement, b.contains(n, o) ? (typeof o.getBoundingClientRect !== i && (s = o.getBoundingClientRect()), r = sr(u), {
    top: s.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
    left: s.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
}) : s
}, b.offset = {
setOffset: function(e, t, n) {
    var r = b.css(e, "position");
    r === "static" && (e.style.position = "relative");
    var i = b(e),
        s = i.offset(),
        o = b.css(e, "top"),
        u = b.css(e, "left"),
        a = (r === "absolute" || r === "fixed") && b.inArray("auto", [o, u]) > -1,
        f = {},
        l = {},
        c, h;
    a ? (l = i.position(), c = l.top, h = l.left) : (c = parseFloat(o) || 0, h = parseFloat(u) || 0), b.isFunction(t) && (t = t.call(e, n, s)), t.top != null && (f.top = t.top - s.top + c), t.left != null && (f.left = t.left - s.left + h), "using" in t ? t.using.call(e, f) : i.css(f)
}
}, b.fn.extend({
position: function() {
    if (!this[0]) return;
    var e, t, n = {
            top: 0,
            left: 0
        },
        r = this[0];
    return b.css(r, "position") === "fixed" ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), b.nodeName(e[0], "html") || (n = e.offset()), n.top += b.css(e[0], "borderTopWidth", !0), n.left += b.css(e[0], "borderLeftWidth", !0)), {
        top: t.top - n.top - b.css(r, "marginTop", !0),
        left: t.left - n.left - b.css(r, "marginLeft", !0)
    }
},
offsetParent: function() {
    return this.map(function() {
        var e = this.offsetParent || s.documentElement;
        while (e && !b.nodeName(e, "html") && b.css(e, "position") === "static") e = e.offsetParent;
        return e || s.documentElement
    })
}
}), b.each({
scrollLeft: "pageXOffset",
scrollTop: "pageYOffset"
}, function(e, n) {
var r = /Y/.test(n);
b.fn[e] = function(i) {
    return b.access(this, function(e, i, s) {
        var o = sr(e);
        if (s === t) return o ? n in o ? o[n] : o.document.documentElement[i] : e[i];
        o ? o.scrollTo(r ? b(o).scrollLeft() : s, r ? s : b(o).scrollTop()) : e[i] = s
    }, e, i, arguments.length, null)
}
}), b.each({
Height: "height",
Width: "width"
}, function(e, n) {
b.each({
    padding: "inner" + e,
    content: n,
    "": "outer" + e
}, function(r, i) {
    b.fn[i] = function(i, s) {
        var o = arguments.length && (r || typeof i != "boolean"),
            u = r || (i === !0 || s === !0 ? "margin" : "border");
        return b.access(this, function(n, r, i) {
            var s;
            return b.isWindow(n) ? n.document.documentElement["client" + e] : n.nodeType === 9 ? (s = n.documentElement, Math.max(n.body["scroll" + e], s["scroll" + e], n.body["offset" + e], s["offset" + e], s["client" + e])) : i === t ? b.css(n, r, u) : b.style(n, r, i, u)
        }, n, o ? i : t, o, null)
    }
})
}), e.jQuery = e.$ = b, typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function() {
return b
})
})(window);