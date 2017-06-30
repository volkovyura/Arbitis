/*! jQuery UI - v1.9.2 - 2013-06-21
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.position.js, jquery.ui.accordion.js, jquery.ui.autocomplete.js, jquery.ui.button.js, jquery.ui.datepicker.js, jquery.ui.menu.js, jquery.ui.progressbar.js, jquery.ui.effect.js, jquery.ui.effect-blind.js, jquery.ui.effect-bounce.js, jquery.ui.effect-clip.js, jquery.ui.effect-drop.js, jquery.ui.effect-explode.js, jquery.ui.effect-fade.js, jquery.ui.effect-fold.js, jquery.ui.effect-highlight.js, jquery.ui.effect-pulsate.js, jquery.ui.effect-scale.js, jquery.ui.effect-shake.js, jquery.ui.effect-slide.js, jquery.ui.effect-transfer.js
* Copyright 2013 jQuery Foundation and other contributors Licensed MIT */

(function(e,t){function i(t,n){var r,i,o,u=t.nodeName.toLowerCase();return"area"===u?(r=t.parentNode,i=r.name,!t.href||!i||r.nodeName.toLowerCase()!=="map"?!1:(o=e("img[usemap=#"+i+"]")[0],!!o&&s(o))):(/input|select|textarea|button|object/.test(u)?!t.disabled:"a"===u?t.href||n:n)&&s(t)}function s(t){return e.expr.filters.visible(t)&&!e(t).parents().andSelf().filter(function(){return e.css(this,"visibility")==="hidden"}).length}var n=0,r=/^ui-id-\d+$/;e.ui=e.ui||{};if(e.ui.version)return;e.extend(e.ui,{version:"1.9.2",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({_focus:e.fn.focus,focus:function(t,n){return typeof t=="number"?this.each(function(){var r=this;setTimeout(function(){e(r).focus(),n&&n.call(r)},t)}):this._focus.apply(this,arguments)},scrollParent:function(){var t;return e.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?t=this.parents().filter(function(){return/(relative|absolute|fixed)/.test(e.css(this,"position"))&&/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0):t=this.parents().filter(function(){return/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!t.length?e(document):t},zIndex:function(n){if(n!==t)return this.css("zIndex",n);if(this.length){var r=e(this[0]),i,s;while(r.length&&r[0]!==document){i=r.css("position");if(i==="absolute"||i==="relative"||i==="fixed"){s=parseInt(r.css("zIndex"),10);if(!isNaN(s)&&s!==0)return s}r=r.parent()}}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++n)})},removeUniqueId:function(){return this.each(function(){r.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(n){return!!e.data(n,t)}}):function(t,n,r){return!!e.data(t,r[3])},focusable:function(t){return i(t,!isNaN(e.attr(t,"tabindex")))},tabbable:function(t){var n=e.attr(t,"tabindex"),r=isNaN(n);return(r||n>=0)&&i(t,!r)}}),e(function(){var t=document.body,n=t.appendChild(n=document.createElement("div"));n.offsetHeight,e.extend(n.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0}),e.support.minHeight=n.offsetHeight===100,e.support.selectstart="onselectstart"in n,t.removeChild(n).style.display="none"}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(n,r){function u(t,n,r,s){return e.each(i,function(){n-=parseFloat(e.css(t,"padding"+this))||0,r&&(n-=parseFloat(e.css(t,"border"+this+"Width"))||0),s&&(n-=parseFloat(e.css(t,"margin"+this))||0)}),n}var i=r==="Width"?["Left","Right"]:["Top","Bottom"],s=r.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+r]=function(n){return n===t?o["inner"+r].call(this):this.each(function(){e(this).css(s,u(this,n)+"px")})},e.fn["outer"+r]=function(t,n){return typeof t!="number"?o["outer"+r].call(this,t):this.each(function(){e(this).css(s,u(this,t,!0,n)+"px")})}}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(n){return arguments.length?t.call(this,e.camelCase(n)):t.call(this)}}(e.fn.removeData)),function(){var t=/msie ([\w.]+)/.exec(navigator.userAgent.toLowerCase())||[];e.ui.ie=t.length?!0:!1,e.ui.ie6=parseFloat(t[1],10)===6}(),e.fn.extend({disableSelection:function(){return this.bind((e.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(e){e.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),e.extend(e.ui,{plugin:{add:function(t,n,r){var i,s=e.ui[t].prototype;for(i in r)s.plugins[i]=s.plugins[i]||[],s.plugins[i].push([n,r[i]])},call:function(e,t,n){var r,i=e.plugins[t];if(!i||!e.element[0].parentNode||e.element[0].parentNode.nodeType===11)return;for(r=0;r<i.length;r++)e.options[i[r][0]]&&i[r][1].apply(e.element,n)}},contains:e.contains,hasScroll:function(t,n){if(e(t).css("overflow")==="hidden")return!1;var r=n&&n==="left"?"scrollLeft":"scrollTop",i=!1;return t[r]>0?!0:(t[r]=1,i=t[r]>0,t[r]=0,i)},isOverAxis:function(e,t,n){return e>t&&e<t+n},isOver:function(t,n,r,i,s,o){return e.ui.isOverAxis(t,r,s)&&e.ui.isOverAxis(n,i,o)}})})(jQuery);(function(e,t){var n=0,r=Array.prototype.slice,i=e.cleanData;e.cleanData=function(t){for(var n=0,r;(r=t[n])!=null;n++)try{e(r).triggerHandler("remove")}catch(s){}i(t)},e.widget=function(t,n,r){var i,s,o,u,a=t.split(".")[0];t=t.split(".")[1],i=a+"-"+t,r||(r=n,n=e.Widget),e.expr[":"][i.toLowerCase()]=function(t){return!!e.data(t,i)},e[a]=e[a]||{},s=e[a][t],o=e[a][t]=function(e,t){if(!this._createWidget)return new o(e,t);arguments.length&&this._createWidget(e,t)},e.extend(o,s,{version:r.version,_proto:e.extend({},r),_childConstructors:[]}),u=new n,u.options=e.widget.extend({},u.options),e.each(r,function(t,i){e.isFunction(i)&&(r[t]=function(){var e=function(){return n.prototype[t].apply(this,arguments)},r=function(e){return n.prototype[t].apply(this,e)};return function(){var t=this._super,n=this._superApply,s;return this._super=e,this._superApply=r,s=i.apply(this,arguments),this._super=t,this._superApply=n,s}}())}),o.prototype=e.widget.extend(u,{widgetEventPrefix:s?u.widgetEventPrefix:t},r,{constructor:o,namespace:a,widgetName:t,widgetBaseClass:i,widgetFullName:i}),s?(e.each(s._childConstructors,function(t,n){var r=n.prototype;e.widget(r.namespace+"."+r.widgetName,o,n._proto)}),delete s._childConstructors):n._childConstructors.push(o),e.widget.bridge(t,o)},e.widget.extend=function(n){var i=r.call(arguments,1),s=0,o=i.length,u,a;for(;s<o;s++)for(u in i[s])a=i[s][u],i[s].hasOwnProperty(u)&&a!==t&&(e.isPlainObject(a)?n[u]=e.isPlainObject(n[u])?e.widget.extend({},n[u],a):e.widget.extend({},a):n[u]=a);return n},e.widget.bridge=function(n,i){var s=i.prototype.widgetFullName||n;e.fn[n]=function(o){var u=typeof o=="string",a=r.call(arguments,1),f=this;return o=!u&&a.length?e.widget.extend.apply(null,[o].concat(a)):o,u?this.each(function(){var r,i=e.data(this,s);if(!i)return e.error("cannot call methods on "+n+" prior to initialization; "+"attempted to call method '"+o+"'");if(!e.isFunction(i[o])||o.charAt(0)==="_")return e.error("no such method '"+o+"' for "+n+" widget instance");r=i[o].apply(i,a);if(r!==i&&r!==t)return f=r&&r.jquery?f.pushStack(r.get()):r,!1}):this.each(function(){var t=e.data(this,s);t?t.option(o||{})._init():e.data(this,s,new i(o,this))}),f}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,r){r=e(r||this.defaultElement||this)[0],this.element=e(r),this.uuid=n++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this.bindings=e(),this.hoverable=e(),this.focusable=e(),r!==this&&(e.data(r,this.widgetName,this),e.data(r,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===r&&this.destroy()}}),this.document=e(r.style?r.ownerDocument:r.document||r),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(n,r){var i=n,s,o,u;if(arguments.length===0)return e.widget.extend({},this.options);if(typeof n=="string"){i={},s=n.split("."),n=s.shift();if(s.length){o=i[n]=e.widget.extend({},this.options[n]);for(u=0;u<s.length-1;u++)o[s[u]]=o[s[u]]||{},o=o[s[u]];n=s.pop();if(r===t)return o[n]===t?null:o[n];o[n]=r}else{if(r===t)return this.options[n]===t?null:this.options[n];i[n]=r}}return this._setOptions(i),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,e==="disabled"&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!t).attr("aria-disabled",t),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(t,n,r){var i,s=this;typeof t!="boolean"&&(r=n,n=t,t=!1),r?(n=i=e(n),this.bindings=this.bindings.add(n)):(r=n,n=this.element,i=this.widget()),e.each(r,function(r,o){function u(){if(!t&&(s.options.disabled===!0||e(this).hasClass("ui-state-disabled")))return;return(typeof o=="string"?s[o]:o).apply(s,arguments)}typeof o!="string"&&(u.guid=o.guid=o.guid||u.guid||e.guid++);var a=r.match(/^(\w+)\s*(.*)$/),f=a[1]+s.eventNamespace,l=a[2];l?i.delegate(l,f,u):n.bind(f,u)})},_off:function(e,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(t).undelegate(t)},_delay:function(e,t){function n(){return(typeof e=="string"?r[e]:e).apply(r,arguments)}var r=this;return setTimeout(n,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,n,r){var i,s,o=this.options[t];r=r||{},n=e.Event(n),n.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),n.target=this.element[0],s=n.originalEvent;if(s)for(i in s)i in n||(n[i]=s[i]);return this.element.trigger(n,r),!(e.isFunction(o)&&o.apply(this.element[0],[n].concat(r))===!1||n.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,n){e.Widget.prototype["_"+t]=function(r,i,s){typeof i=="string"&&(i={effect:i});var o,u=i?i===!0||typeof i=="number"?n:i.effect||n:t;i=i||{},typeof i=="number"&&(i={duration:i}),o=!e.isEmptyObject(i),i.complete=s,i.delay&&r.delay(i.delay),o&&e.effects&&(e.effects.effect[u]||e.uiBackCompat!==!1&&e.effects[u])?r[t](i):u!==t&&r[u]?r[u](i.duration,i.easing,s):r.queue(function(n){e(this)[t](),s&&s.call(r[0]),n()})}}),e.uiBackCompat!==!1&&(e.Widget.prototype._getCreateOptions=function(){return e.metadata&&e.metadata.get(this.element[0])[this.widgetName]})})(jQuery);(function(e,t){var n=!1;e(document).mouseup(function(e){n=!1}),e.widget("ui.mouse",{version:"1.9.2",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.bind("mousedown."+this.widgetName,function(e){return t._mouseDown(e)}).bind("click."+this.widgetName,function(n){if(!0===e.data(n.target,t.widgetName+".preventClickEvent"))return e.removeData(n.target,t.widgetName+".preventClickEvent"),n.stopImmediatePropagation(),!1}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(t){if(n)return;this._mouseStarted&&this._mouseUp(t),this._mouseDownEvent=t;var r=this,i=t.which===1,s=typeof this.options.cancel=="string"&&t.target.nodeName?e(t.target).closest(this.options.cancel).length:!1;if(!i||s||!this._mouseCapture(t))return!0;this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){r.mouseDelayMet=!0},this.options.delay));if(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)){this._mouseStarted=this._mouseStart(t)!==!1;if(!this._mouseStarted)return t.preventDefault(),!0}return!0===e.data(t.target,this.widgetName+".preventClickEvent")&&e.removeData(t.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return r._mouseMove(e)},this._mouseUpDelegate=function(e){return r._mouseUp(e)},e(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),t.preventDefault(),n=!0,!0},_mouseMove:function(t){return!e.ui.ie||document.documentMode>=9||!!t.button?this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,t)!==!1,this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted):this._mouseUp(t)},_mouseUp:function(t){return e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&e.data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),!1},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(e){return this.mouseDelayMet},_mouseStart:function(e){},_mouseDrag:function(e){},_mouseStop:function(e){},_mouseCapture:function(e){return!0}})})(jQuery);(function(e,t){function h(e,t,n){return[parseInt(e[0],10)*(l.test(e[0])?t/100:1),parseInt(e[1],10)*(l.test(e[1])?n/100:1)]}function p(t,n){return parseInt(e.css(t,n),10)||0}e.ui=e.ui||{};var n,r=Math.max,i=Math.abs,s=Math.round,o=/left|center|right/,u=/top|center|bottom/,a=/[\+\-]\d+%?/,f=/^\w+/,l=/%$/,c=e.fn.position;e.position={scrollbarWidth:function(){if(n!==t)return n;var r,i,s=e("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),o=s.children()[0];return e("body").append(s),r=o.offsetWidth,s.css("overflow","scroll"),i=o.offsetWidth,r===i&&(i=s[0].clientWidth),s.remove(),n=r-i},getScrollInfo:function(t){var n=t.isWindow?"":t.element.css("overflow-x"),r=t.isWindow?"":t.element.css("overflow-y"),i=n==="scroll"||n==="auto"&&t.width<t.element[0].scrollWidth,s=r==="scroll"||r==="auto"&&t.height<t.element[0].scrollHeight;return{width:i?e.position.scrollbarWidth():0,height:s?e.position.scrollbarWidth():0}},getWithinInfo:function(t){var n=e(t||window),r=e.isWindow(n[0]);return{element:n,isWindow:r,offset:n.offset()||{left:0,top:0},scrollLeft:n.scrollLeft(),scrollTop:n.scrollTop(),width:r?n.width():n.outerWidth(),height:r?n.height():n.outerHeight()}}},e.fn.position=function(t){if(!t||!t.of)return c.apply(this,arguments);t=e.extend({},t);var n,l,d,v,m,g=e(t.of),y=e.position.getWithinInfo(t.within),b=e.position.getScrollInfo(y),w=g[0],E=(t.collision||"flip").split(" "),S={};return w.nodeType===9?(l=g.width(),d=g.height(),v={top:0,left:0}):e.isWindow(w)?(l=g.width(),d=g.height(),v={top:g.scrollTop(),left:g.scrollLeft()}):w.preventDefault?(t.at="left top",l=d=0,v={top:w.pageY,left:w.pageX}):(l=g.outerWidth(),d=g.outerHeight(),v=g.offset()),m=e.extend({},v),e.each(["my","at"],function(){var e=(t[this]||"").split(" "),n,r;e.length===1&&(e=o.test(e[0])?e.concat(["center"]):u.test(e[0])?["center"].concat(e):["center","center"]),e[0]=o.test(e[0])?e[0]:"center",e[1]=u.test(e[1])?e[1]:"center",n=a.exec(e[0]),r=a.exec(e[1]),S[this]=[n?n[0]:0,r?r[0]:0],t[this]=[f.exec(e[0])[0],f.exec(e[1])[0]]}),E.length===1&&(E[1]=E[0]),t.at[0]==="right"?m.left+=l:t.at[0]==="center"&&(m.left+=l/2),t.at[1]==="bottom"?m.top+=d:t.at[1]==="center"&&(m.top+=d/2),n=h(S.at,l,d),m.left+=n[0],m.top+=n[1],this.each(function(){var o,u,a=e(this),f=a.outerWidth(),c=a.outerHeight(),w=p(this,"marginLeft"),x=p(this,"marginTop"),T=f+w+p(this,"marginRight")+b.width,N=c+x+p(this,"marginBottom")+b.height,C=e.extend({},m),k=h(S.my,a.outerWidth(),a.outerHeight());t.my[0]==="right"?C.left-=f:t.my[0]==="center"&&(C.left-=f/2),t.my[1]==="bottom"?C.top-=c:t.my[1]==="center"&&(C.top-=c/2),C.left+=k[0],C.top+=k[1],e.support.offsetFractions||(C.left=s(C.left),C.top=s(C.top)),o={marginLeft:w,marginTop:x},e.each(["left","top"],function(r,i){e.ui.position[E[r]]&&e.ui.position[E[r]][i](C,{targetWidth:l,targetHeight:d,elemWidth:f,elemHeight:c,collisionPosition:o,collisionWidth:T,collisionHeight:N,offset:[n[0]+k[0],n[1]+k[1]],my:t.my,at:t.at,within:y,elem:a})}),e.fn.bgiframe&&a.bgiframe(),t.using&&(u=function(e){var n=v.left-C.left,s=n+l-f,o=v.top-C.top,u=o+d-c,h={target:{element:g,left:v.left,top:v.top,width:l,height:d},element:{element:a,left:C.left,top:C.top,width:f,height:c},horizontal:s<0?"left":n>0?"right":"center",vertical:u<0?"top":o>0?"bottom":"middle"};l<f&&i(n+s)<l&&(h.horizontal="center"),d<c&&i(o+u)<d&&(h.vertical="middle"),r(i(n),i(s))>r(i(o),i(u))?h.important="horizontal":h.important="vertical",t.using.call(this,e,h)}),a.offset(e.extend(C,{using:u}))})},e.ui.position={fit:{left:function(e,t){var n=t.within,i=n.isWindow?n.scrollLeft:n.offset.left,s=n.width,o=e.left-t.collisionPosition.marginLeft,u=i-o,a=o+t.collisionWidth-s-i,f;t.collisionWidth>s?u>0&&a<=0?(f=e.left+u+t.collisionWidth-s-i,e.left+=u-f):a>0&&u<=0?e.left=i:u>a?e.left=i+s-t.collisionWidth:e.left=i:u>0?e.left+=u:a>0?e.left-=a:e.left=r(e.left-o,e.left)},top:function(e,t){var n=t.within,i=n.isWindow?n.scrollTop:n.offset.top,s=t.within.height,o=e.top-t.collisionPosition.marginTop,u=i-o,a=o+t.collisionHeight-s-i,f;t.collisionHeight>s?u>0&&a<=0?(f=e.top+u+t.collisionHeight-s-i,e.top+=u-f):a>0&&u<=0?e.top=i:u>a?e.top=i+s-t.collisionHeight:e.top=i:u>0?e.top+=u:a>0?e.top-=a:e.top=r(e.top-o,e.top)}},flip:{left:function(e,t){var n=t.within,r=n.offset.left+n.scrollLeft,s=n.width,o=n.isWindow?n.scrollLeft:n.offset.left,u=e.left-t.collisionPosition.marginLeft,a=u-o,f=u+t.collisionWidth-s-o,l=t.my[0]==="left"?-t.elemWidth:t.my[0]==="right"?t.elemWidth:0,c=t.at[0]==="left"?t.targetWidth:t.at[0]==="right"?-t.targetWidth:0,h=-2*t.offset[0],p,d;if(a<0){p=e.left+l+c+h+t.collisionWidth-s-r;if(p<0||p<i(a))e.left+=l+c+h}else if(f>0){d=e.left-t.collisionPosition.marginLeft+l+c+h-o;if(d>0||i(d)<f)e.left+=l+c+h}},top:function(e,t){var n=t.within,r=n.offset.top+n.scrollTop,s=n.height,o=n.isWindow?n.scrollTop:n.offset.top,u=e.top-t.collisionPosition.marginTop,a=u-o,f=u+t.collisionHeight-s-o,l=t.my[1]==="top",c=l?-t.elemHeight:t.my[1]==="bottom"?t.elemHeight:0,h=t.at[1]==="top"?t.targetHeight:t.at[1]==="bottom"?-t.targetHeight:0,p=-2*t.offset[1],d,v;a<0?(v=e.top+c+h+p+t.collisionHeight-s-r,e.top+c+h+p>a&&(v<0||v<i(a))&&(e.top+=c+h+p)):f>0&&(d=e.top-t.collisionPosition.marginTop+c+h+p-o,e.top+c+h+p>f&&(d>0||i(d)<f)&&(e.top+=c+h+p))}},flipfit:{left:function(){e.ui.position.flip.left.apply(this,arguments),e.ui.position.fit.left.apply(this,arguments)},top:function(){e.ui.position.flip.top.apply(this,arguments),e.ui.position.fit.top.apply(this,arguments)}}},function(){var t,n,r,i,s,o=document.getElementsByTagName("body")[0],u=document.createElement("div");t=document.createElement(o?"div":"body"),r={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},o&&e.extend(r,{position:"absolute",left:"-1000px",top:"-1000px"});for(s in r)t.style[s]=r[s];t.appendChild(u),n=o||document.documentElement,n.insertBefore(t,n.firstChild),u.style.cssText="position: absolute; left: 10.7432222px;",i=e(u).offset().left,e.support.offsetFractions=i>10&&i<11,t.innerHTML="",n.removeChild(t)}(),e.uiBackCompat!==!1&&function(e){var n=e.fn.position;e.fn.position=function(r){if(!r||!r.offset)return n.call(this,r);var i=r.offset.split(" "),s=r.at.split(" ");return i.length===1&&(i[1]=i[0]),/^\d/.test(i[0])&&(i[0]="+"+i[0]),/^\d/.test(i[1])&&(i[1]="+"+i[1]),s.length===1&&(/left|center|right/.test(s[0])?s[1]="center":(s[1]=s[0],s[0]="center")),n.call(this,e.extend(r,{at:s[0]+i[0]+" "+s[1]+i[1],offset:t}))}}(jQuery)})(jQuery);(function(e,t){var n=0,r={},i={};r.height=r.paddingTop=r.paddingBottom=r.borderTopWidth=r.borderBottomWidth="hide",i.height=i.paddingTop=i.paddingBottom=i.borderTopWidth=i.borderBottomWidth="show",e.widget("ui.accordion",{version:"1.9.2",options:{active:0,animate:{},collapsible:!1,event:"click",header:"> li > :first-child,> :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},_create:function(){var t=this.accordionId="ui-accordion-"+(this.element.attr("id")||++n),r=this.options;this.prevShow=this.prevHide=e(),this.element.addClass("ui-accordion ui-widget ui-helper-reset"),this.headers=this.element.find(r.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"),this._hoverable(this.headers),this._focusable(this.headers),this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").hide(),!r.collapsible&&(r.active===!1||r.active==null)&&(r.active=0),r.active<0&&(r.active+=this.headers.length),this.active=this._findActive(r.active).addClass("ui-accordion-header-active ui-state-active").toggleClass("ui-corner-all ui-corner-top"),this.active.next().addClass("ui-accordion-content-active").show(),this._createIcons(),this.refresh(),this.element.attr("role","tablist"),this.headers.attr("role","tab").each(function(n){var r=e(this),i=r.attr("id"),s=r.next(),o=s.attr("id");i||(i=t+"-header-"+n,r.attr("id",i)),o||(o=t+"-panel-"+n,s.attr("id",o)),r.attr("aria-controls",o),s.attr("aria-labelledby",i)}).next().attr("role","tabpanel"),this.headers.not(this.active).attr({"aria-selected":"false",tabIndex:-1}).next().attr({"aria-expanded":"false","aria-hidden":"true"}).hide(),this.active.length?this.active.attr({"aria-selected":"true",tabIndex:0}).next().attr({"aria-expanded":"true","aria-hidden":"false"}):this.headers.eq(0).attr("tabIndex",0),this._on(this.headers,{keydown:"_keydown"}),this._on(this.headers.next(),{keydown:"_panelKeyDown"}),this._setupEvents(r.event)},_getCreateEventData:function(){return{header:this.active,content:this.active.length?this.active.next():e()}},_createIcons:function(){var t=this.options.icons;t&&(e("<span>").addClass("ui-accordion-header-icon ui-icon "+t.header).prependTo(this.headers),this.active.children(".ui-accordion-header-icon").removeClass(t.header).addClass(t.activeHeader),this.headers.addClass("ui-accordion-icons"))},_destroyIcons:function(){this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()},_destroy:function(){var e;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"),this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function(){/^ui-accordion/.test(this.id)&&this.removeAttribute("id")}),this._destroyIcons(),e=this.headers.next().css("display","").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function(){/^ui-accordion/.test(this.id)&&this.removeAttribute("id")}),this.options.heightStyle!=="content"&&e.css("height","")},_setOption:function(e,t){if(e==="active"){this._activate(t);return}e==="event"&&(this.options.event&&this._off(this.headers,this.options.event),this._setupEvents(t)),this._super(e,t),e==="collapsible"&&!t&&this.options.active===!1&&this._activate(0),e==="icons"&&(this._destroyIcons(),t&&this._createIcons()),e==="disabled"&&this.headers.add(this.headers.next()).toggleClass("ui-state-disabled",!!t)},_keydown:function(t){if(t.altKey||t.ctrlKey)return;var n=e.ui.keyCode,r=this.headers.length,i=this.headers.index(t.target),s=!1;switch(t.keyCode){case n.RIGHT:case n.DOWN:s=this.headers[(i+1)%r];break;case n.LEFT:case n.UP:s=this.headers[(i-1+r)%r];break;case n.SPACE:case n.ENTER:this._eventHandler(t);break;case n.HOME:s=this.headers[0];break;case n.END:s=this.headers[r-1]}s&&(e(t.target).attr("tabIndex",-1),e(s).attr("tabIndex",0),s.focus(),t.preventDefault())},_panelKeyDown:function(t){t.keyCode===e.ui.keyCode.UP&&t.ctrlKey&&e(t.currentTarget).prev().focus()},refresh:function(){var t,n,r=this.options.heightStyle,i=this.element.parent();r==="fill"?(e.support.minHeight||(n=i.css("overflow"),i.css("overflow","hidden")),t=i.height(),this.element.siblings(":visible").each(function(){var n=e(this),r=n.css("position");if(r==="absolute"||r==="fixed")return;t-=n.outerHeight(!0)}),n&&i.css("overflow",n),this.headers.each(function(){t-=e(this).outerHeight(!0)}),this.headers.next().each(function(){e(this).height(Math.max(0,t-e(this).innerHeight()+e(this).height()))}).css("overflow","auto")):r==="auto"&&(t=0,this.headers.next().each(function(){t=Math.max(t,e(this).css("height","").height())}).height(t))},_activate:function(t){var n=this._findActive(t)[0];if(n===this.active[0])return;n=n||this.active[0],this._eventHandler({target:n,currentTarget:n,preventDefault:e.noop})},_findActive:function(t){return typeof t=="number"?this.headers.eq(t):e()},_setupEvents:function(t){var n={};if(!t)return;e.each(t.split(" "),function(e,t){n[t]="_eventHandler"}),this._on(this.headers,n)},_eventHandler:function(t){var n=this.options,r=this.active,i=e(t.currentTarget),s=i[0]===r[0],o=s&&n.collapsible,u=o?e():i.next(),a=r.next(),f={oldHeader:r,oldPanel:a,newHeader:o?e():i,newPanel:u};t.preventDefault();if(s&&!n.collapsible||this._trigger("beforeActivate",t,f)===!1)return;n.active=o?!1:this.headers.index(i),this.active=s?e():i,this._toggle(f),r.removeClass("ui-accordion-header-active ui-state-active"),n.icons&&r.children(".ui-accordion-header-icon").removeClass(n.icons.activeHeader).addClass(n.icons.header),s||(i.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"),n.icons&&i.children(".ui-accordion-header-icon").removeClass(n.icons.header).addClass(n.icons.activeHeader),i.next().addClass("ui-accordion-content-active"))},_toggle:function(t){var n=t.newPanel,r=this.prevShow.length?this.prevShow:t.oldPanel;this.prevShow.add(this.prevHide).stop(!0,!0),this.prevShow=n,this.prevHide=r,this.options.animate?this._animate(n,r,t):(r.hide(),n.show(),this._toggleComplete(t)),r.attr({"aria-expanded":"false","aria-hidden":"true"}),r.prev().attr("aria-selected","false"),n.length&&r.length?r.prev().attr("tabIndex",-1):n.length&&this.headers.filter(function(){return e(this).attr("tabIndex")===0}).attr("tabIndex",-1),n.attr({"aria-expanded":"true","aria-hidden":"false"}).prev().attr({"aria-selected":"true",tabIndex:0})},_animate:function(e,t,n){var s,o,u,a=this,f=0,l=e.length&&(!t.length||e.index()<t.index()),c=this.options.animate||{},h=l&&c.down||c,p=function(){a._toggleComplete(n)};typeof h=="number"&&(u=h),typeof h=="string"&&(o=h),o=o||h.easing||c.easing,u=u||h.duration||c.duration;if(!t.length)return e.animate(i,u,o,p);if(!e.length)return t.animate(r,u,o,p);s=e.show().outerHeight(),t.animate(r,{duration:u,easing:o,step:function(e,t){t.now=Math.round(e)}}),e.hide().animate(i,{duration:u,easing:o,complete:p,step:function(e,n){n.now=Math.round(e),n.prop!=="height"?f+=n.now:a.options.heightStyle!=="content"&&(n.now=Math.round(s-t.outerHeight()-f),f=0)}})},_toggleComplete:function(e){var t=e.oldPanel;t.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"),t.length&&(t.parent()[0].className=t.parent()[0].className),this._trigger("activate",null,e)}}),e.uiBackCompat!==!1&&(function(e,t){e.extend(t.options,{navigation:!1,navigationFilter:function(){return this.href.toLowerCase()===location.href.toLowerCase()}});var n=t._create;t._create=function(){if(this.options.navigation){var t=this,r=this.element.find(this.options.header),i=r.next(),s=r.add(i).find("a").filter(this.options.navigationFilter)[0];s&&r.add(i).each(function(n){if(e.contains(this,s))return t.options.active=Math.floor(n/2),!1})}n.call(this)}}(jQuery,jQuery.ui.accordion.prototype),function(e,t){e.extend(t.options,{heightStyle:null,autoHeight:!0,clearStyle:!1,fillSpace:!1});var n=t._create,r=t._setOption;e.extend(t,{_create:function(){this.options.heightStyle=this.options.heightStyle||this._mergeHeightStyle(),n.call(this)},_setOption:function(e){if(e==="autoHeight"||e==="clearStyle"||e==="fillSpace")this.options.heightStyle=this._mergeHeightStyle();r.apply(this,arguments)},_mergeHeightStyle:function(){var e=this.options;if(e.fillSpace)return"fill";if(e.clearStyle)return"content";if(e.autoHeight)return"auto"}})}(jQuery,jQuery.ui.accordion.prototype),function(e,t){e.extend(t.options.icons,{activeHeader:null,headerSelected:"ui-icon-triangle-1-s"});var n=t._createIcons;t._createIcons=function(){this.options.icons&&(this.options.icons.activeHeader=this.options.icons.activeHeader||this.options.icons.headerSelected),n.call(this)}}(jQuery,jQuery.ui.accordion.prototype),function(e,t){t.activate=t._activate;var n=t._findActive;t._findActive=function(e){return e===-1&&(e=!1),e&&typeof e!="number"&&(e=this.headers.index(this.headers.filter(e)),e===-1&&(e=!1)),n.call(this,e)}}(jQuery,jQuery.ui.accordion.prototype),jQuery.ui.accordion.prototype.resize=jQuery.ui.accordion.prototype.refresh,function(e,t){e.extend(t.options,{change:null,changestart:null});var n=t._trigger;t._trigger=function(e,t,r){var i=n.apply(this,arguments);return i?(e==="beforeActivate"?i=n.call(this,"changestart",t,{oldHeader:r.oldHeader,oldContent:r.oldPanel,newHeader:r.newHeader,newContent:r.newPanel}):e==="activate"&&(i=n.call(this,"change",t,{oldHeader:r.oldHeader,oldContent:r.oldPanel,newHeader:r.newHeader,newContent:r.newPanel})),i):!1}}(jQuery,jQuery.ui.accordion.prototype),function(e,t){e.extend(t.options,{animate:null,animated:"slide"});var n=t._create;t._create=function(){var e=this.options;e.animate===null&&(e.animated?e.animated==="slide"?e.animate=300:e.animated==="bounceslide"?e.animate={duration:200,down:{easing:"easeOutBounce",duration:1e3}}:e.animate=e.animated:e.animate=!1),n.call(this)}}(jQuery,jQuery.ui.accordion.prototype))})(jQuery);(function(e,t){var n=0;e.widget("ui.autocomplete",{version:"1.9.2",defaultElement:"<input>",options:{appendTo:"body",autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},pending:0,_create:function(){var t,n,r;this.isMultiLine=this._isMultiLine(),this.valueMethod=this.element[this.element.is("input,textarea")?"val":"text"],this.isNewMenu=!0,this.element.addClass("ui-autocomplete-input").attr("autocomplete","off"),this._on(this.element,{keydown:function(i){if(this.element.prop("readOnly")){t=!0,r=!0,n=!0;return}t=!1,r=!1,n=!1;var s=e.ui.keyCode;switch(i.keyCode){case s.PAGE_UP:t=!0,this._move("previousPage",i);break;case s.PAGE_DOWN:t=!0,this._move("nextPage",i);break;case s.UP:t=!0,this._keyEvent("previous",i);break;case s.DOWN:t=!0,this._keyEvent("next",i);break;case s.ENTER:case s.NUMPAD_ENTER:this.menu.active&&(t=!0,i.preventDefault(),this.menu.select(i));break;case s.TAB:this.menu.active&&this.menu.select(i);break;case s.ESCAPE:this.menu.element.is(":visible")&&(this._value(this.term),this.close(i),i.preventDefault());break;default:n=!0,this._searchTimeout(i)}},keypress:function(r){if(t){t=!1,r.preventDefault();return}if(n)return;var i=e.ui.keyCode;switch(r.keyCode){case i.PAGE_UP:this._move("previousPage",r);break;case i.PAGE_DOWN:this._move("nextPage",r);break;case i.UP:this._keyEvent("previous",r);break;case i.DOWN:this._keyEvent("next",r)}},input:function(e){if(r){r=!1,e.preventDefault();return}this._searchTimeout(e)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(e){if(this.cancelBlur){delete this.cancelBlur;return}clearTimeout(this.searching),this.close(e),this._change(e)}}),this._initSource(),this.menu=e("<ul>").addClass("ui-autocomplete").appendTo(this.document.find(this.options.appendTo||"body")[0]).menu({input:e(),role:null}).zIndex(this.element.zIndex()+1).hide().data("menu"),this._on(this.menu.element,{mousedown:function(t){t.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur});var n=this.menu.element[0];e(t.target).closest(".ui-menu-item").length||this._delay(function(){var t=this;this.document.one("mousedown",function(r){r.target!==t.element[0]&&r.target!==n&&!e.contains(n,r.target)&&t.close()})})},menufocus:function(t,n){if(this.isNewMenu){this.isNewMenu=!1;if(t.originalEvent&&/^mouse/.test(t.originalEvent.type)){this.menu.blur(),this.document.one("mousemove",function(){e(t.target).trigger(t.originalEvent)});return}}var r=n.item.data("ui-autocomplete-item")||n.item.data("item.autocomplete");!1!==this._trigger("focus",t,{item:r})?t.originalEvent&&/^key/.test(t.originalEvent.type)&&this._value(r.value):this.liveRegion.text(r.value)},menuselect:function(e,t){var n=t.item.data("ui-autocomplete-item")||t.item.data("item.autocomplete"),r=this.previous;this.element[0]!==this.document[0].activeElement&&(this.element.focus(),this.previous=r,this._delay(function(){this.previous=r,this.selectedItem=n})),!1!==this._trigger("select",e,{item:n})&&this._value(n.value),this.term=this._value(),this.close(e),this.selectedItem=n}}),this.liveRegion=e("<span>",{role:"status","aria-live":"polite"}).addClass("ui-helper-hidden-accessible").insertAfter(this.element),e.fn.bgiframe&&this.menu.element.bgiframe(),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(e,t){this._super(e,t),e==="source"&&this._initSource(),e==="appendTo"&&this.menu.element.appendTo(this.document.find(t||"body")[0]),e==="disabled"&&t&&this.xhr&&this.xhr.abort()},_isMultiLine:function(){return this.element.is("textarea")?!0:this.element.is("input")?!1:this.element.prop("isContentEditable")},_initSource:function(){var t,n,r=this;e.isArray(this.options.source)?(t=this.options.source,this.source=function(n,r){r(e.ui.autocomplete.filter(t,n.term))}):typeof this.options.source=="string"?(n=this.options.source,this.source=function(t,i){r.xhr&&r.xhr.abort(),r.xhr=e.ajax({url:n,data:t,dataType:"json",success:function(e){i(e)},error:function(){i([])}})}):this.source=this.options.source},_searchTimeout:function(e){clearTimeout(this.searching),this.searching=this._delay(function(){this.term!==this._value()&&(this.selectedItem=null,this.search(null,e))},this.options.delay)},search:function(e,t){e=e!=null?e:this._value(),this.term=this._value();if(e.length<this.options.minLength)return this.close(t);if(this._trigger("search",t)===!1)return;return this._search(e)},_search:function(e){this.pending++,this.element.addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:e},this._response())},_response:function(){var e=this,t=++n;return function(r){t===n&&e.__response(r),e.pending--,e.pending||e.element.removeClass("ui-autocomplete-loading")}},__response:function(e){e&&(e=this._normalize(e)),this._trigger("response",null,{content:e}),!this.options.disabled&&e&&e.length&&!this.cancelSearch?(this._suggest(e),this._trigger("open")):this._close()},close:function(e){this.cancelSearch=!0,this._close(e)},_close:function(e){this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",e))},_change:function(e){this.previous!==this._value()&&this._trigger("change",e,{item:this.selectedItem})},_normalize:function(t){return t.length&&t[0].label&&t[0].value?t:e.map(t,function(t){return typeof t=="string"?{label:t,value:t}:e.extend({label:t.label||t.value,value:t.value||t.label},t)})},_suggest:function(t){var n=this.menu.element.empty().zIndex(this.element.zIndex()+1);this._renderMenu(n,t),this.menu.refresh(),n.show(),this._resizeMenu(),n.position(e.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next()},_resizeMenu:function(){var e=this.menu.element;e.outerWidth(Math.max(e.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(t,n){var r=this;e.each(n,function(e,n){r._renderItemData(t,n)})},_renderItemData:function(e,t){return this._renderItem(e,t).data("ui-autocomplete-item",t)},_renderItem:function(t,n){return e("<li>").append(e("<a>").text(n.label)).appendTo(t)},_move:function(e,t){if(!this.menu.element.is(":visible")){this.search(null,t);return}if(this.menu.isFirstItem()&&/^previous/.test(e)||this.menu.isLastItem()&&/^next/.test(e)){this._value(this.term),this.menu.blur();return}this.menu[e](t)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(e,t){if(!this.isMultiLine||this.menu.element.is(":visible"))this._move(e,t),t.preventDefault()}}),e.extend(e.ui.autocomplete,{escapeRegex:function(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(t,n){var r=new RegExp(e.ui.autocomplete.escapeRegex(n),"i");return e.grep(t,function(e){return r.test(e.label||e.value||e)})}}),e.widget("ui.autocomplete",e.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(e){return e+(e>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(e){var t;this._superApply(arguments);if(this.options.disabled||this.cancelSearch)return;e&&e.length?t=this.options.messages.results(e.length):t=this.options.messages.noResults,this.liveRegion.text(t)}})})(jQuery);(function(e,t){var n,r,i,s,o="ui-button ui-widget ui-state-default ui-corner-all",u="ui-state-hover ui-state-active ",a="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",f=function(){var t=e(this).find(":ui-button");setTimeout(function(){t.button("refresh")},1)},l=function(t){var n=t.name,r=t.form,i=e([]);return n&&(r?i=e(r).find("[name='"+n+"']"):i=e("[name='"+n+"']",t.ownerDocument).filter(function(){return!this.form})),i};e.widget("ui.button",{version:"1.9.2",defaultElement:"<button>",options:{disabled:null,text:!0,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset"+this.eventNamespace).bind("reset"+this.eventNamespace,f),typeof this.options.disabled!="boolean"?this.options.disabled=!!this.element.prop("disabled"):this.element.prop("disabled",this.options.disabled),this._determineButtonType(),this.hasTitle=!!this.buttonElement.attr("title");var t=this,u=this.options,a=this.type==="checkbox"||this.type==="radio",c=a?"":"ui-state-active",h="ui-state-focus";u.label===null&&(u.label=this.type==="input"?this.buttonElement.val():this.buttonElement.html()),this._hoverable(this.buttonElement),this.buttonElement.addClass(o).attr("role","button").bind("mouseenter"+this.eventNamespace,function(){if(u.disabled)return;this===n&&e(this).addClass("ui-state-active")}).bind("mouseleave"+this.eventNamespace,function(){if(u.disabled)return;e(this).removeClass(c)}).bind("click"+this.eventNamespace,function(e){u.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}),this.element.bind("focus"+this.eventNamespace,function(){t.buttonElement.addClass(h)}).bind("blur"+this.eventNamespace,function(){t.buttonElement.removeClass(h)}),a&&(this.element.bind("change"+this.eventNamespace,function(){if(s)return;t.refresh()}),this.buttonElement.bind("mousedown"+this.eventNamespace,function(e){if(u.disabled)return;s=!1,r=e.pageX,i=e.pageY}).bind("mouseup"+this.eventNamespace,function(e){if(u.disabled)return;if(r!==e.pageX||i!==e.pageY)s=!0})),this.type==="checkbox"?this.buttonElement.bind("click"+this.eventNamespace,function(){if(u.disabled||s)return!1;e(this).toggleClass("ui-state-active"),t.buttonElement.attr("aria-pressed",t.element[0].checked)}):this.type==="radio"?this.buttonElement.bind("click"+this.eventNamespace,function(){if(u.disabled||s)return!1;e(this).addClass("ui-state-active"),t.buttonElement.attr("aria-pressed","true");var n=t.element[0];l(n).not(n).map(function(){return e(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed","false")}):(this.buttonElement.bind("mousedown"+this.eventNamespace,function(){if(u.disabled)return!1;e(this).addClass("ui-state-active"),n=this,t.document.one("mouseup",function(){n=null})}).bind("mouseup"+this.eventNamespace,function(){if(u.disabled)return!1;e(this).removeClass("ui-state-active")}).bind("keydown"+this.eventNamespace,function(t){if(u.disabled)return!1;(t.keyCode===e.ui.keyCode.SPACE||t.keyCode===e.ui.keyCode.ENTER)&&e(this).addClass("ui-state-active")}).bind("keyup"+this.eventNamespace,function(){e(this).removeClass("ui-state-active")}),this.buttonElement.is("a")&&this.buttonElement.keyup(function(t){t.keyCode===e.ui.keyCode.SPACE&&e(this).click()})),this._setOption("disabled",u.disabled),this._resetButton()},_determineButtonType:function(){var e,t,n;this.element.is("[type=checkbox]")?this.type="checkbox":this.element.is("[type=radio]")?this.type="radio":this.element.is("input")?this.type="input":this.type="button",this.type==="checkbox"||this.type==="radio"?(e=this.element.parents().last(),t="label[for='"+this.element.attr("id")+"']",this.buttonElement=e.find(t),this.buttonElement.length||(e=e.length?e.siblings():this.element.siblings(),this.buttonElement=e.filter(t),this.buttonElement.length||(this.buttonElement=e.find(t))),this.element.addClass("ui-helper-hidden-accessible"),n=this.element.is(":checked"),n&&this.buttonElement.addClass("ui-state-active"),this.buttonElement.prop("aria-pressed",n)):this.buttonElement=this.element},widget:function(){return this.buttonElement},_destroy:function(){this.element.removeClass("ui-helper-hidden-accessible"),this.buttonElement.removeClass(o+" "+u+" "+a).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()),this.hasTitle||this.buttonElement.removeAttr("title")},_setOption:function(e,t){this._super(e,t);if(e==="disabled"){t?this.element.prop("disabled",!0):this.element.prop("disabled",!1);return}this._resetButton()},refresh:function(){var t=this.element.is("input, button")?this.element.is(":disabled"):this.element.hasClass("ui-button-disabled");t!==this.options.disabled&&this._setOption("disabled",t),this.type==="radio"?l(this.element[0]).each(function(){e(this).is(":checked")?e(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true"):e(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")}):this.type==="checkbox"&&(this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true"):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false"))},_resetButton:function(){if(this.type==="input"){this.options.label&&this.element.val(this.options.label);return}var t=this.buttonElement.removeClass(a),n=e("<span></span>",this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(t.empty()).text(),r=this.options.icons,i=r.primary&&r.secondary,s=[];r.primary||r.secondary?(this.options.text&&s.push("ui-button-text-icon"+(i?"s":r.primary?"-primary":"-secondary")),r.primary&&t.prepend("<span class='ui-button-icon-primary ui-icon "+r.primary+"'></span>"),r.secondary&&t.append("<span class='ui-button-icon-secondary ui-icon "+r.secondary+"'></span>"),this.options.text||(s.push(i?"ui-button-icons-only":"ui-button-icon-only"),this.hasTitle||t.attr("title",e.trim(n)))):s.push("ui-button-text-only"),t.addClass(s.join(" "))}}),e.widget("ui.buttonset",{version:"1.9.2",options:{items:"button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(e,t){e==="disabled"&&this.buttons.button("option",e,t),this._super(e,t)},refresh:function(){var t=this.element.css("direction")==="rtl";this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return e(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(t?"ui-corner-left":"ui-corner-right").end().end()},_destroy:function(){this.element.removeClass("ui-buttonset"),this.buttons.map(function(){return e(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")}})})(jQuery);(function($,undefined){function Datepicker(){this.debug=!1,this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},$.extend(this._defaults,this.regional[""]),this.dpDiv=bindHover($('<div id="'+this._mainDivId+'" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))}function bindHover(e){var t="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return e.delegate(t,"mouseout",function(){$(this).removeClass("ui-state-hover"),this.className.indexOf("ui-datepicker-prev")!=-1&&$(this).removeClass("ui-datepicker-prev-hover"),this.className.indexOf("ui-datepicker-next")!=-1&&$(this).removeClass("ui-datepicker-next-hover")}).delegate(t,"mouseover",function(){$.datepicker._isDisabledDatepicker(instActive.inline?e.parent()[0]:instActive.input[0])||($(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),$(this).addClass("ui-state-hover"),this.className.indexOf("ui-datepicker-prev")!=-1&&$(this).addClass("ui-datepicker-prev-hover"),this.className.indexOf("ui-datepicker-next")!=-1&&$(this).addClass("ui-datepicker-next-hover"))})}function extendRemove(e,t){$.extend(e,t);for(var n in t)if(t[n]==null||t[n]==undefined)e[n]=t[n];return e}$.extend($.ui,{datepicker:{version:"1.9.2"}});var PROP_NAME="datepicker",dpuuid=(new Date).getTime(),instActive;$.extend(Datepicker.prototype,{markerClassName:"hasDatepicker",maxRows:4,log:function(){this.debug&&console.log.apply("",arguments)},_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(e){return extendRemove(this._defaults,e||{}),this},_attachDatepicker:function(target,settings){var inlineSettings=null;for(var attrName in this._defaults){var attrValue=target.getAttribute("date:"+attrName);if(attrValue){inlineSettings=inlineSettings||{};try{inlineSettings[attrName]=eval(attrValue)}catch(err){inlineSettings[attrName]=attrValue}}}var nodeName=target.nodeName.toLowerCase(),inline=nodeName=="div"||nodeName=="span";target.id||(this.uuid+=1,target.id="dp"+this.uuid);var inst=this._newInst($(target),inline);inst.settings=$.extend({},settings||{},inlineSettings||{}),nodeName=="input"?this._connectDatepicker(target,inst):inline&&this._inlineDatepicker(target,inst)},_newInst:function(e,t){var n=e[0].id.replace(/([^A-Za-z0-9_-])/g,"\\\\$1");return{id:n,input:e,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:t,dpDiv:t?bindHover($('<div class="'+this._inlineClass+' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')):this.dpDiv}},_connectDatepicker:function(e,t){var n=$(e);t.append=$([]),t.trigger=$([]);if(n.hasClass(this.markerClassName))return;this._attachments(n,t),n.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker",function(e,n,r){t.settings[n]=r}).bind("getData.datepicker",function(e,n){return this._get(t,n)}),this._autoSize(t),$.data(e,PROP_NAME,t),t.settings.disabled&&this._disableDatepicker(e)},_attachments:function(e,t){var n=this._get(t,"appendText"),r=this._get(t,"isRTL");t.append&&t.append.remove(),n&&(t.append=$('<span class="'+this._appendClass+'">'+n+"</span>"),e[r?"before":"after"](t.append)),e.unbind("focus",this._showDatepicker),t.trigger&&t.trigger.remove();var i=this._get(t,"showOn");(i=="focus"||i=="both")&&e.focus(this._showDatepicker);if(i=="button"||i=="both"){var s=this._get(t,"buttonText"),o=this._get(t,"buttonImage");t.trigger=$(this._get(t,"buttonImageOnly")?$("<img/>").addClass(this._triggerClass).attr({src:o,alt:s,title:s}):$('<button type="button"></button>').addClass(this._triggerClass).html(o==""?s:$("<img/>").attr({src:o,alt:s,title:s}))),e[r?"before":"after"](t.trigger),t.trigger.click(function(){return $.datepicker._datepickerShowing&&$.datepicker._lastInput==e[0]?$.datepicker._hideDatepicker():$.datepicker._datepickerShowing&&$.datepicker._lastInput!=e[0]?($.datepicker._hideDatepicker(),$.datepicker._showDatepicker(e[0])):$.datepicker._showDatepicker(e[0]),!1})}},_autoSize:function(e){if(this._get(e,"autoSize")&&!e.inline){var t=new Date(2009,11,20),n=this._get(e,"dateFormat");if(n.match(/[DM]/)){var r=function(e){var t=0,n=0;for(var r=0;r<e.length;r++)e[r].length>t&&(t=e[r].length,n=r);return n};t.setMonth(r(this._get(e,n.match(/MM/)?"monthNames":"monthNamesShort"))),t.setDate(r(this._get(e,n.match(/DD/)?"dayNames":"dayNamesShort"))+20-t.getDay())}e.input.attr("size",this._formatDate(e,t).length)}},_inlineDatepicker:function(e,t){var n=$(e);if(n.hasClass(this.markerClassName))return;n.addClass(this.markerClassName).append(t.dpDiv).bind("setData.datepicker",function(e,n,r){t.settings[n]=r}).bind("getData.datepicker",function(e,n){return this._get(t,n)}),$.data(e,PROP_NAME,t),this._setDate(t,this._getDefaultDate(t),!0),this._updateDatepicker(t),this._updateAlternate(t),t.settings.disabled&&this._disableDatepicker(e),t.dpDiv.css("display","block")},_dialogDatepicker:function(e,t,n,r,i){var s=this._dialogInst;if(!s){this.uuid+=1;var o="dp"+this.uuid;this._dialogInput=$('<input type="text" id="'+o+'" style="position: absolute; top: -100px; width: 0px;"/>'),this._dialogInput.keydown(this._doKeyDown),$("body").append(this._dialogInput),s=this._dialogInst=this._newInst(this._dialogInput,!1),s.settings={},$.data(this._dialogInput[0],PROP_NAME,s)}extendRemove(s.settings,r||{}),t=t&&t.constructor==Date?this._formatDate(s,t):t,this._dialogInput.val(t),this._pos=i?i.length?i:[i.pageX,i.pageY]:null;if(!this._pos){var u=document.documentElement.clientWidth,a=document.documentElement.clientHeight,f=document.documentElement.scrollLeft||document.body.scrollLeft,l=document.documentElement.scrollTop||document.body.scrollTop;this._pos=[u/2-100+f,a/2-150+l]}return this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),s.settings.onSelect=n,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),$.blockUI&&$.blockUI(this.dpDiv),$.data(this._dialogInput[0],PROP_NAME,s),this},_destroyDatepicker:function(e){var t=$(e),n=$.data(e,PROP_NAME);if(!t.hasClass(this.markerClassName))return;var r=e.nodeName.toLowerCase();$.removeData(e,PROP_NAME),r=="input"?(n.append.remove(),n.trigger.remove(),t.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)):(r=="div"||r=="span")&&t.removeClass(this.markerClassName).empty()},_enableDatepicker:function(e){var t=$(e),n=$.data(e,PROP_NAME);if(!t.hasClass(this.markerClassName))return;var r=e.nodeName.toLowerCase();if(r=="input")e.disabled=!1,n.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""});else if(r=="div"||r=="span"){var i=t.children("."+this._inlineClass);i.children().removeClass("ui-state-disabled"),i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)}this._disabledInputs=$.map(this._disabledInputs,function(t){return t==e?null:t})},_disableDatepicker:function(e){var t=$(e),n=$.data(e,PROP_NAME);if(!t.hasClass(this.markerClassName))return;var r=e.nodeName.toLowerCase();if(r=="input")e.disabled=!0,n.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"});else if(r=="div"||r=="span"){var i=t.children("."+this._inlineClass);i.children().addClass("ui-state-disabled"),i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)}this._disabledInputs=$.map(this._disabledInputs,function(t){return t==e?null:t}),this._disabledInputs[this._disabledInputs.length]=e},_isDisabledDatepicker:function(e){if(!e)return!1;for(var t=0;t<this._disabledInputs.length;t++)if(this._disabledInputs[t]==e)return!0;return!1},_getInst:function(e){try{return $.data(e,PROP_NAME)}catch(t){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(e,t,n){var r=this._getInst(e);if(arguments.length==2&&typeof t=="string")return t=="defaults"?$.extend({},$.datepicker._defaults):r?t=="all"?$.extend({},r.settings):this._get(r,t):null;var i=t||{};typeof t=="string"&&(i={},i[t]=n);if(r){this._curInst==r&&this._hideDatepicker();var s=this._getDateDatepicker(e,!0),o=this._getMinMaxDate(r,"min"),u=this._getMinMaxDate(r,"max");extendRemove(r.settings,i),o!==null&&i.dateFormat!==undefined&&i.minDate===undefined&&(r.settings.minDate=this._formatDate(r,o)),u!==null&&i.dateFormat!==undefined&&i.maxDate===undefined&&(r.settings.maxDate=this._formatDate(r,u)),this._attachments($(e),r),this._autoSize(r),this._setDate(r,s),this._updateAlternate(r),this._updateDatepicker(r)}},_changeDatepicker:function(e,t,n){this._optionDatepicker(e,t,n)},_refreshDatepicker:function(e){var t=this._getInst(e);t&&this._updateDatepicker(t)},_setDateDatepicker:function(e,t){var n=this._getInst(e);n&&(this._setDate(n,t),this._updateDatepicker(n),this._updateAlternate(n))},_getDateDatepicker:function(e,t){var n=this._getInst(e);return n&&!n.inline&&this._setDateFromField(n,t),n?this._getDate(n):null},_doKeyDown:function(e){var t=$.datepicker._getInst(e.target),n=!0,r=t.dpDiv.is(".ui-datepicker-rtl");t._keyEvent=!0;if($.datepicker._datepickerShowing)switch(e.keyCode){case 9:$.datepicker._hideDatepicker(),n=!1;break;case 13:var i=$("td."+$.datepicker._dayOverClass+":not(."+$.datepicker._currentClass+")",t.dpDiv);i[0]&&$.datepicker._selectDay(e.target,t.selectedMonth,t.selectedYear,i[0]);var s=$.datepicker._get(t,"onSelect");if(s){var o=$.datepicker._formatDate(t);s.apply(t.input?t.input[0]:null,[o,t])}else $.datepicker._hideDatepicker();return!1;case 27:$.datepicker._hideDatepicker();break;case 33:$.datepicker._adjustDate(e.target,e.ctrlKey?-$.datepicker._get(t,"stepBigMonths"):-$.datepicker._get(t,"stepMonths"),"M");break;case 34:$.datepicker._adjustDate(e.target,e.ctrlKey?+$.datepicker._get(t,"stepBigMonths"):+$.datepicker._get(t,"stepMonths"),"M");break;case 35:(e.ctrlKey||e.metaKey)&&$.datepicker._clearDate(e.target),n=e.ctrlKey||e.metaKey;break;case 36:(e.ctrlKey||e.metaKey)&&$.datepicker._gotoToday(e.target),n=e.ctrlKey||e.metaKey;break;case 37:(e.ctrlKey||e.metaKey)&&$.datepicker._adjustDate(e.target,r?1:-1,"D"),n=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&$.datepicker._adjustDate(e.target,e.ctrlKey?-$.datepicker._get(t,"stepBigMonths"):-$.datepicker._get(t,"stepMonths"),"M");break;case 38:(e.ctrlKey||e.metaKey)&&$.datepicker._adjustDate(e.target,-7,"D"),n=e.ctrlKey||e.metaKey;break;case 39:(e.ctrlKey||e.metaKey)&&$.datepicker._adjustDate(e.target,r?-1:1,"D"),n=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&$.datepicker._adjustDate(e.target,e.ctrlKey?+$.datepicker._get(t,"stepBigMonths"):+$.datepicker._get(t,"stepMonths"),"M");break;case 40:(e.ctrlKey||e.metaKey)&&$.datepicker._adjustDate(e.target,7,"D"),n=e.ctrlKey||e.metaKey;break;default:n=!1}else e.keyCode==36&&e.ctrlKey?$.datepicker._showDatepicker(this):n=!1;n&&(e.preventDefault(),e.stopPropagation())},_doKeyPress:function(e){var t=$.datepicker._getInst(e.target);if($.datepicker._get(t,"constrainInput")){var n=$.datepicker._possibleChars($.datepicker._get(t,"dateFormat")),r=String.fromCharCode(e.charCode==undefined?e.keyCode:e.charCode);return e.ctrlKey||e.metaKey||r<" "||!n||n.indexOf(r)>-1}},_doKeyUp:function(e){var t=$.datepicker._getInst(e.target);if(t.input.val()!=t.lastVal)try{var n=$.datepicker.parseDate($.datepicker._get(t,"dateFormat"),t.input?t.input.val():null,$.datepicker._getFormatConfig(t));n&&($.datepicker._setDateFromField(t),$.datepicker._updateAlternate(t),$.datepicker._updateDatepicker(t))}catch(r){$.datepicker.log(r)}return!0},_showDatepicker:function(e){e=e.target||e,e.nodeName.toLowerCase()!="input"&&(e=$("input",e.parentNode)[0]);if($.datepicker._isDisabledDatepicker(e)||$.datepicker._lastInput==e)return;var t=$.datepicker._getInst(e);$.datepicker._curInst&&$.datepicker._curInst!=t&&($.datepicker._curInst.dpDiv.stop(!0,!0),t&&$.datepicker._datepickerShowing&&$.datepicker._hideDatepicker($.datepicker._curInst.input[0]));var n=$.datepicker._get(t,"beforeShow"),r=n?n.apply(e,[e,t]):{};if(r===!1)return;extendRemove(t.settings,r),t.lastVal=null,$.datepicker._lastInput=e,$.datepicker._setDateFromField(t),$.datepicker._inDialog&&(e.value=""),$.datepicker._pos||($.datepicker._pos=$.datepicker._findPos(e),$.datepicker._pos[1]+=e.offsetHeight);var i=!1;$(e).parents().each(function(){return i|=$(this).css("position")=="fixed",!i});var s={left:$.datepicker._pos[0],top:$.datepicker._pos[1]};$.datepicker._pos=null,t.dpDiv.empty(),t.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),$.datepicker._updateDatepicker(t),s=$.datepicker._checkOffset(t,s,i),t.dpDiv.css({position:$.datepicker._inDialog&&$.blockUI?"static":i?"fixed":"absolute",display:"none",left:s.left+"px",top:s.top+"px"});if(!t.inline){var o=$.datepicker._get(t,"showAnim"),u=$.datepicker._get(t,"duration"),a=function(){var e=t.dpDiv.find("iframe.ui-datepicker-cover");if(!!e.length){var n=$.datepicker._getBorders(t.dpDiv);e.css({left:-n[0],top:-n[1],width:t.dpDiv.outerWidth(),height:t.dpDiv.outerHeight()})}};t.dpDiv.zIndex($(e).zIndex()+1),$.datepicker._datepickerShowing=!0,$.effects&&($.effects.effect[o]||$.effects[o])?t.dpDiv.show(o,$.datepicker._get(t,"showOptions"),u,a):t.dpDiv[o||"show"](o?u:null,a),(!o||!u)&&a(),t.input.is(":visible")&&!t.input.is(":disabled")&&t.input.focus(),$.datepicker._curInst=t}},_updateDatepicker:function(e){this.maxRows=4;var t=$.datepicker._getBorders(e.dpDiv);instActive=e,e.dpDiv.empty().append(this._generateHTML(e)),this._attachHandlers(e);var n=e.dpDiv.find("iframe.ui-datepicker-cover");!n.length||n.css({left:-t[0],top:-t[1],width:e.dpDiv.outerWidth(),height:e.dpDiv.outerHeight()}),e.dpDiv.find("."+this._dayOverClass+" a").mouseover();var r=this._getNumberOfMonths(e),i=r[1],s=17;e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),i>1&&e.dpDiv.addClass("ui-datepicker-multi-"+i).css("width",s*i+"em"),e.dpDiv[(r[0]!=1||r[1]!=1?"add":"remove")+"Class"]("ui-datepicker-multi"),e.dpDiv[(this._get(e,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),e==$.datepicker._curInst&&$.datepicker._datepickerShowing&&e.input&&e.input.is(":visible")&&!e.input.is(":disabled")&&e.input[0]!=document.activeElement&&e.input.focus();if(e.yearshtml){var o=e.yearshtml;setTimeout(function(){o===e.yearshtml&&e.yearshtml&&e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml),o=e.yearshtml=null},0)}},_getBorders:function(e){var t=function(e){return{thin:1,medium:2,thick:3}[e]||e};return[parseFloat(t(e.css("border-left-width"))),parseFloat(t(e.css("border-top-width")))]},_checkOffset:function(e,t,n){var r=e.dpDiv.outerWidth(),i=e.dpDiv.outerHeight(),s=e.input?e.input.outerWidth():0,o=e.input?e.input.outerHeight():0,u=document.documentElement.clientWidth+(n?0:$(document).scrollLeft()),a=document.documentElement.clientHeight+(n?0:$(document).scrollTop());return t.left-=this._get(e,"isRTL")?r-s:0,t.left-=n&&t.left==e.input.offset().left?$(document).scrollLeft():0,t.top-=n&&t.top==e.input.offset().top+o?$(document).scrollTop():0,t.left-=Math.min(t.left,t.left+r>u&&u>r?Math.abs(t.left+r-u):0),t.top-=Math.min(t.top,t.top+i>a&&a>i?Math.abs(i+o):0),t},_findPos:function(e){var t=this._getInst(e),n=this._get(t,"isRTL");while(e&&(e.type=="hidden"||e.nodeType!=1||$.expr.filters.hidden(e)))e=e[n?"previousSibling":"nextSibling"];var r=$(e).offset();return[r.left,r.top]},_hideDatepicker:function(e){var t=this._curInst;if(!t||e&&t!=$.data(e,PROP_NAME))return;if(this._datepickerShowing){var n=this._get(t,"showAnim"),r=this._get(t,"duration"),i=function(){$.datepicker._tidyDialog(t)};$.effects&&($.effects.effect[n]||$.effects[n])?t.dpDiv.hide(n,$.datepicker._get(t,"showOptions"),r,i):t.dpDiv[n=="slideDown"?"slideUp":n=="fadeIn"?"fadeOut":"hide"](n?r:null,i),n||i(),this._datepickerShowing=!1;var s=this._get(t,"onClose");s&&s.apply(t.input?t.input[0]:null,[t.input?t.input.val():"",t]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),$.blockUI&&($.unblockUI(),$("body").append(this.dpDiv))),this._inDialog=!1}},_tidyDialog:function(e){e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(e){if(!$.datepicker._curInst)return;var t=$(e.target),n=$.datepicker._getInst(t[0]);(t[0].id!=$.datepicker._mainDivId&&t.parents("#"+$.datepicker._mainDivId).length==0&&!t.hasClass($.datepicker.markerClassName)&&!t.closest("."+$.datepicker._triggerClass).length&&$.datepicker._datepickerShowing&&(!$.datepicker._inDialog||!$.blockUI)||t.hasClass($.datepicker.markerClassName)&&$.datepicker._curInst!=n)&&$.datepicker._hideDatepicker()},_adjustDate:function(e,t,n){var r=$(e),i=this._getInst(r[0]);if(this._isDisabledDatepicker(r[0]))return;this._adjustInstDate(i,t+(n=="M"?this._get(i,"showCurrentAtPos"):0),n),this._updateDatepicker(i)},_gotoToday:function(e){var t=$(e),n=this._getInst(t[0]);if(this._get(n,"gotoCurrent")&&n.currentDay)n.selectedDay=n.currentDay,n.drawMonth=n.selectedMonth=n.currentMonth,n.drawYear=n.selectedYear=n.currentYear;else{var r=new Date;n.selectedDay=r.getDate(),n.drawMonth=n.selectedMonth=r.getMonth(),n.drawYear=n.selectedYear=r.getFullYear()}this._notifyChange(n),this._adjustDate(t)},_selectMonthYear:function(e,t,n){var r=$(e),i=this._getInst(r[0]);i["selected"+(n=="M"?"Month":"Year")]=i["draw"+(n=="M"?"Month":"Year")]=parseInt(t.options[t.selectedIndex].value,10),this._notifyChange(i),this._adjustDate(r)},_selectDay:function(e,t,n,r){var i=$(e);if($(r).hasClass(this._unselectableClass)||this._isDisabledDatepicker(i[0]))return;var s=this._getInst(i[0]);s.selectedDay=s.currentDay=$("a",r).html(),s.selectedMonth=s.currentMonth=t,s.selectedYear=s.currentYear=n,this._selectDate(e,this._formatDate(s,s.currentDay,s.currentMonth,s.currentYear))},_clearDate:function(e){var t=$(e),n=this._getInst(t[0]);this._selectDate(t,"")},_selectDate:function(e,t){var n=$(e),r=this._getInst(n[0]);t=t!=null?t:this._formatDate(r),r.input&&r.input.val(t),this._updateAlternate(r);var i=this._get(r,"onSelect");i?i.apply(r.input?r.input[0]:null,[t,r]):r.input&&r.input.trigger("change"),r.inline?this._updateDatepicker(r):(this._hideDatepicker(),this._lastInput=r.input[0],typeof r.input[0]!="object"&&r.input.focus(),this._lastInput=null)},_updateAlternate:function(e){var t=this._get(e,"altField");if(t){var n=this._get(e,"altFormat")||this._get(e,"dateFormat"),r=this._getDate(e),i=this.formatDate(n,r,this._getFormatConfig(e));$(t).each(function(){$(this).val(i)})}},noWeekends:function(e){var t=e.getDay();return[t>0&&t<6,""]},iso8601Week:function(e){var t=new Date(e.getTime());t.setDate(t.getDate()+4-(t.getDay()||7));var n=t.getTime();return t.setMonth(0),t.setDate(1),Math.floor(Math.round((n-t)/864e5)/7)+1},parseDate:function(e,t,n){if(e==null||t==null)throw"Invalid arguments";t=typeof t=="object"?t.toString():t+"";if(t=="")return null;var r=(n?n.shortYearCutoff:null)||this._defaults.shortYearCutoff;r=typeof r!="string"?r:(new Date).getFullYear()%100+parseInt(r,10);var i=(n?n.dayNamesShort:null)||this._defaults.dayNamesShort,s=(n?n.dayNames:null)||this._defaults.dayNames,o=(n?n.monthNamesShort:null)||this._defaults.monthNamesShort,u=(n?n.monthNames:null)||this._defaults.monthNames,a=-1,f=-1,l=-1,c=-1,h=!1,p=function(t){var n=y+1<e.length&&e.charAt(y+1)==t;return n&&y++,n},d=function(e){var n=p(e),r=e=="@"?14:e=="!"?20:e=="y"&&n?4:e=="o"?3:2,i=new RegExp("^\\d{1,"+r+"}"),s=t.substring(g).match(i);if(!s)throw"Missing number at position "+g;return g+=s[0].length,parseInt(s[0],10)},v=function(e,n,r){var i=$.map(p(e)?r:n,function(e,t){return[[t,e]]}).sort(function(e,t){return-(e[1].length-t[1].length)}),s=-1;$.each(i,function(e,n){var r=n[1];if(t.substr(g,r.length).toLowerCase()==r.toLowerCase())return s=n[0],g+=r.length,!1});if(s!=-1)return s+1;throw"Unknown name at position "+g},m=function(){if(t.charAt(g)!=e.charAt(y))throw"Unexpected literal at position "+g;g++},g=0;for(var y=0;y<e.length;y++)if(h)e.charAt(y)=="'"&&!p("'")?h=!1:m();else switch(e.charAt(y)){case"d":l=d("d");break;case"D":v("D",i,s);break;case"o":c=d("o");break;case"m":f=d("m");break;case"M":f=v("M",o,u);break;case"y":a=d("y");break;case"@":var b=new Date(d("@"));a=b.getFullYear(),f=b.getMonth()+1,l=b.getDate();break;case"!":var b=new Date((d("!")-this._ticksTo1970)/1e4);a=b.getFullYear(),f=b.getMonth()+1,l=b.getDate();break;case"'":p("'")?m():h=!0;break;default:m()}if(g<t.length){var w=t.substr(g);if(!/^\s+/.test(w))throw"Extra/unparsed characters found in date: "+w}a==-1?a=(new Date).getFullYear():a<100&&(a+=(new Date).getFullYear()-(new Date).getFullYear()%100+(a<=r?0:-100));if(c>-1){f=1,l=c;do{var E=this._getDaysInMonth(a,f-1);if(l<=E)break;f++,l-=E}while(!0)}var b=this._daylightSavingAdjust(new Date(a,f-1,l));if(b.getFullYear()!=a||b.getMonth()+1!=f||b.getDate()!=l)throw"Invalid date";return b},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925))*24*60*60*1e7,formatDate:function(e,t,n){if(!t)return"";var r=(n?n.dayNamesShort:null)||this._defaults.dayNamesShort,i=(n?n.dayNames:null)||this._defaults.dayNames,s=(n?n.monthNamesShort:null)||this._defaults.monthNamesShort,o=(n?n.monthNames:null)||this._defaults.monthNames,u=function(t){var n=h+1<e.length&&e.charAt(h+1)==t;return n&&h++,n},a=function(e,t,n){var r=""+t;if(u(e))while(r.length<n)r="0"+r;return r},f=function(e,t,n,r){return u(e)?r[t]:n[t]},l="",c=!1;if(t)for(var h=0;h<e.length;h++)if(c)e.charAt(h)=="'"&&!u("'")?c=!1:l+=e.charAt(h);else switch(e.charAt(h)){case"d":l+=a("d",t.getDate(),2);break;case"D":l+=f("D",t.getDay(),r,i);break;case"o":l+=a("o",Math.round(((new Date(t.getFullYear(),t.getMonth(),t.getDate())).getTime()-(new Date(t.getFullYear(),0,0)).getTime())/864e5),3);break;case"m":l+=a("m",t.getMonth()+1,2);break;case"M":l+=f("M",t.getMonth(),s,o);break;case"y":l+=u("y")?t.getFullYear():(t.getYear()%100<10?"0":"")+t.getYear()%100;break;case"@":l+=t.getTime();break;case"!":l+=t.getTime()*1e4+this._ticksTo1970;break;case"'":u("'")?l+="'":c=!0;break;default:l+=e.charAt(h)}return l},_possibleChars:function(e){var t="",n=!1,r=function(t){var n=i+1<e.length&&e.charAt(i+1)==t;return n&&i++,n};for(var i=0;i<e.length;i++)if(n)e.charAt(i)=="'"&&!r("'")?n=!1:t+=e.charAt(i);else switch(e.charAt(i)){case"d":case"m":case"y":case"@":t+="0123456789";break;case"D":case"M":return null;case"'":r("'")?t+="'":n=!0;break;default:t+=e.charAt(i)}return t},_get:function(e,t){return e.settings[t]!==undefined?e.settings[t]:this._defaults[t]},_setDateFromField:function(e,t){if(e.input.val()==e.lastVal)return;var n=this._get(e,"dateFormat"),r=e.lastVal=e.input?e.input.val():null,i,s;i=s=this._getDefaultDate(e);var o=this._getFormatConfig(e);try{i=this.parseDate(n,r,o)||s}catch(u){this.log(u),r=t?"":r}e.selectedDay=i.getDate(),e.drawMonth=e.selectedMonth=i.getMonth(),e.drawYear=e.selectedYear=i.getFullYear(),e.currentDay=r?i.getDate():0,e.currentMonth=r?i.getMonth():0,e.currentYear=r?i.getFullYear():0,this._adjustInstDate(e)},_getDefaultDate:function(e){return this._restrictMinMax(e,this._determineDate(e,this._get(e,"defaultDate"),new Date))},_determineDate:function(e,t,n){var r=function(e){var t=new Date;return t.setDate(t.getDate()+e),t},i=function(t){try{return $.datepicker.parseDate($.datepicker._get(e,"dateFormat"),t,$.datepicker._getFormatConfig(e))}catch(n){}var r=(t.toLowerCase().match(/^c/)?$.datepicker._getDate(e):null)||new Date,i=r.getFullYear(),s=r.getMonth(),o=r.getDate(),u=/([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,a=u.exec(t);while(a){switch(a[2]||"d"){case"d":case"D":o+=parseInt(a[1],10);break;case"w":case"W":o+=parseInt(a[1],10)*7;break;case"m":case"M":s+=parseInt(a[1],10),o=Math.min(o,$.datepicker._getDaysInMonth(i,s));break;case"y":case"Y":i+=parseInt(a[1],10),o=Math.min(o,$.datepicker._getDaysInMonth(i,s))}a=u.exec(t)}return new Date(i,s,o)},s=t==null||t===""?n:typeof t=="string"?i(t):typeof t=="number"?isNaN(t)?n:r(t):new Date(t.getTime());return s=s&&s.toString()=="Invalid Date"?n:s,s&&(s.setHours(0),s.setMinutes(0),s.setSeconds(0),s.setMilliseconds(0)),this._daylightSavingAdjust(s)},_daylightSavingAdjust:function(e){return e?(e.setHours(e.getHours()>12?e.getHours()+2:0),e):null},_setDate:function(e,t,n){var r=!t,i=e.selectedMonth,s=e.selectedYear,o=this._restrictMinMax(e,this._determineDate(e,t,new Date));e.selectedDay=e.currentDay=o.getDate(),e.drawMonth=e.selectedMonth=e.currentMonth=o.getMonth(),e.drawYear=e.selectedYear=e.currentYear=o.getFullYear(),(i!=e.selectedMonth||s!=e.selectedYear)&&!n&&this._notifyChange(e),this._adjustInstDate(e),e.input&&e.input.val(r?"":this._formatDate(e))},_getDate:function(e){var t=!e.currentYear||e.input&&e.input.val()==""?null:this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay));return t},_attachHandlers:function(e){var t=this._get(e,"stepMonths"),n="#"+e.id.replace(/\\\\/g,"\\");e.dpDiv.find("[data-handler]").map(function(){var e={prev:function(){window["DP_jQuery_"+dpuuid].datepicker._adjustDate(n,-t,"M")},next:function(){window["DP_jQuery_"+dpuuid].datepicker._adjustDate(n,+t,"M")},hide:function(){window["DP_jQuery_"+dpuuid].datepicker._hideDatepicker()},today:function(){window["DP_jQuery_"+dpuuid].datepicker._gotoToday(n)},selectDay:function(){return window["DP_jQuery_"+dpuuid].datepicker._selectDay(n,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return window["DP_jQuery_"+dpuuid].datepicker._selectMonthYear(n,this,"M"),!1},selectYear:function(){return window["DP_jQuery_"+dpuuid].datepicker._selectMonthYear(n,this,"Y"),!1}};$(this).bind(this.getAttribute("data-event"),e[this.getAttribute("data-handler")])})},_generateHTML:function(e){var t=new Date;t=this._daylightSavingAdjust(new Date(t.getFullYear(),t.getMonth(),t.getDate()));var n=this._get(e,"isRTL"),r=this._get(e,"showButtonPanel"),i=this._get(e,"hideIfNoPrevNext"),s=this._get(e,"navigationAsDateFormat"),o=this._getNumberOfMonths(e),u=this._get(e,"showCurrentAtPos"),a=this._get(e,"stepMonths"),f=o[0]!=1||o[1]!=1,l=this._daylightSavingAdjust(e.currentDay?new Date(e.currentYear,e.currentMonth,e.currentDay):new Date(9999,9,9)),c=this._getMinMaxDate(e,"min"),h=this._getMinMaxDate(e,"max"),p=e.drawMonth-u,d=e.drawYear;p<0&&(p+=12,d--);if(h){var v=this._daylightSavingAdjust(new Date(h.getFullYear(),h.getMonth()-o[0]*o[1]+1,h.getDate()));v=c&&v<c?c:v;while(this._daylightSavingAdjust(new Date(d,p,1))>v)p--,p<0&&(p=11,d--)}e.drawMonth=p,e.drawYear=d;var m=this._get(e,"prevText");m=s?this.formatDate(m,this._daylightSavingAdjust(new Date(d,p-a,1)),this._getFormatConfig(e)):m;var g=this._canAdjustMonth(e,-1,d,p)?'<a class="ui-datepicker-prev ui-corner-all" data-handler="prev" data-event="click" title="'+m+'"><span class="ui-icon ui-icon-circle-triangle-'+(n?"e":"w")+'">'+m+"</span></a>":i?"":'<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="'+m+'"><span class="ui-icon ui-icon-circle-triangle-'+(n?"e":"w")+'">'+m+"</span></a>",y=this._get(e,"nextText");y=s?this.formatDate(y,this._daylightSavingAdjust(new Date(d,p+a,1)),this._getFormatConfig(e)):y;var b=this._canAdjustMonth(e,1,d,p)?'<a class="ui-datepicker-next ui-corner-all" data-handler="next" data-event="click" title="'+y+'"><span class="ui-icon ui-icon-circle-triangle-'+(n?"w":"e")+'">'+y+"</span></a>":i?"":'<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="'+y+'"><span class="ui-icon ui-icon-circle-triangle-'+(n?"w":"e")+'">'+y+"</span></a>",w=this._get(e,"currentText"),E=this._get(e,"gotoCurrent")&&e.currentDay?l:t;w=s?this.formatDate(w,E,this._getFormatConfig(e)):w;var S=e.inline?"":'<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" data-handler="hide" data-event="click">'+this._get(e,"closeText")+"</button>",x=r?'<div class="ui-datepicker-buttonpane ui-widget-content">'+(n?S:"")+(this._isInRange(e,E)?'<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" data-handler="today" data-event="click">'+w+"</button>":"")+(n?"":S)+"</div>":"",T=parseInt(this._get(e,"firstDay"),10);T=isNaN(T)?0:T;var N=this._get(e,"showWeek"),C=this._get(e,"dayNames"),k=this._get(e,"dayNamesShort"),L=this._get(e,"dayNamesMin"),A=this._get(e,"monthNames"),O=this._get(e,"monthNamesShort"),M=this._get(e,"beforeShowDay"),_=this._get(e,"showOtherMonths"),D=this._get(e,"selectOtherMonths"),P=this._get(e,"calculateWeek")||this.iso8601Week,H=this._getDefaultDate(e),B="";for(var j=0;j<o[0];j++){var F="";this.maxRows=4;for(var I=0;I<o[1];I++){var q=this._daylightSavingAdjust(new Date(d,p,e.selectedDay)),R=" ui-corner-all",U="";if(f){U+='<div class="ui-datepicker-group';if(o[1]>1)switch(I){case 0:U+=" ui-datepicker-group-first",R=" ui-corner-"+(n?"right":"left");break;case o[1]-1:U+=" ui-datepicker-group-last",R=" ui-corner-"+(n?"left":"right");break;default:U+=" ui-datepicker-group-middle",R=""}U+='">'}U+='<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix'+R+'">'+(/all|left/.test(R)&&j==0?n?b:g:"")+(/all|right/.test(R)&&j==0?n?g:b:"")+this._generateMonthYearHeader(e,p,d,c,h,j>0||I>0,A,O)+'</div><table class="ui-datepicker-calendar"><thead>'+"<tr>";var z=N?'<th class="ui-datepicker-week-col">'+this._get(e,"weekHeader")+"</th>":"";for(var W=0;W<7;W++){var X=(W+T)%7;z+="<th"+((W+T+6)%7>=5?' class="ui-datepicker-week-end"':"")+">"+'<span title="'+C[X]+'">'+L[X]+"</span></th>"}U+=z+"</tr></thead><tbody>";var V=this._getDaysInMonth(d,p);d==e.selectedYear&&p==e.selectedMonth&&(e.selectedDay=Math.min(e.selectedDay,V));var J=(this._getFirstDayOfMonth(d,p)-T+7)%7,K=Math.ceil((J+V)/7),Q=f?this.maxRows>K?this.maxRows:K:K;this.maxRows=Q;var G=this._daylightSavingAdjust(new Date(d,p,1-J));for(var Y=0;Y<Q;Y++){U+="<tr>";var Z=N?'<td class="ui-datepicker-week-col">'+this._get(e,"calculateWeek")(G)+"</td>":"";for(var W=0;W<7;W++){var et=M?M.apply(e.input?e.input[0]:null,[G]):[!0,""],tt=G.getMonth()!=p,nt=tt&&!D||!et[0]||c&&G<c||h&&G>h;Z+='<td class="'+((W+T+6)%7>=5?" ui-datepicker-week-end":"")+(tt?" ui-datepicker-other-month":"")+(G.getTime()==q.getTime()&&p==e.selectedMonth&&e._keyEvent||H.getTime()==G.getTime()&&H.getTime()==q.getTime()?" "+this._dayOverClass:"")+(nt?" "+this._unselectableClass+" ui-state-disabled":"")+(tt&&!_?"":" "+et[1]+(G.getTime()==l.getTime()?" "+this._currentClass:"")+(G.getTime()==t.getTime()?" ui-datepicker-today":""))+'"'+((!tt||_)&&et[2]?' title="'+et[2]+'"':"")+(nt?"":' data-handler="selectDay" data-event="click" data-month="'+G.getMonth()+'" data-year="'+G.getFullYear()+'"')+">"+(tt&&!_?"&#xa0;":nt?'<span class="ui-state-default">'+G.getDate()+"</span>":'<a class="ui-state-default'+(G.getTime()==t.getTime()?" ui-state-highlight":"")+(G.getTime()==l.getTime()?" ui-state-active":"")+(tt?" ui-priority-secondary":"")+'" href="#">'+G.getDate()+"</a>")+"</td>",G.setDate(G.getDate()+1),G=this._daylightSavingAdjust(G)}U+=Z+"</tr>"}p++,p>11&&(p=0,d++),U+="</tbody></table>"+(f?"</div>"+(o[0]>0&&I==o[1]-1?'<div class="ui-datepicker-row-break"></div>':""):""),F+=U}B+=F}return B+=x+($.ui.ie6&&!e.inline?'<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>':""),e._keyEvent=!1,B},_generateMonthYearHeader:function(e,t,n,r,i,s,o,u){var a=this._get(e,"changeMonth"),f=this._get(e,"changeYear"),l=this._get(e,"showMonthAfterYear"),c='<div class="ui-datepicker-title">',h="";if(s||!a)h+='<span class="ui-datepicker-month">'+o[t]+"</span>";else{var p=r&&r.getFullYear()==n,d=i&&i.getFullYear()==n;h+='<select class="ui-datepicker-month" data-handler="selectMonth" data-event="change">';for(var v=0;v<12;v++)(!p||v>=r.getMonth())&&(!d||v<=i.getMonth())&&(h+='<option value="'+v+'"'+(v==t?' selected="selected"':"")+">"+u[v]+"</option>");h+="</select>"}l||(c+=h+(s||!a||!f?"&#xa0;":""));if(!e.yearshtml){e.yearshtml="";if(s||!f)c+='<span class="ui-datepicker-year">'+n+"</span>";else{var m=this._get(e,"yearRange").split(":"),g=(new Date).getFullYear(),y=function(e){var t=e.match(/c[+-].*/)?n+parseInt(e.substring(1),10):e.match(/[+-].*/)?g+parseInt(e,10):parseInt(e,10);return isNaN(t)?g:t},b=y(m[0]),w=Math.max(b,y(m[1]||""));b=r?Math.max(b,r.getFullYear()):b,w=i?Math.min(w,i.getFullYear()):w,e.yearshtml+='<select class="ui-datepicker-year" data-handler="selectYear" data-event="change">';for(;b<=w;b++)e.yearshtml+='<option value="'+b+'"'+(b==n?' selected="selected"':"")+">"+b+"</option>";e.yearshtml+="</select>",c+=e.yearshtml,e.yearshtml=null}}return c+=this._get(e,"yearSuffix"),l&&(c+=(s||!a||!f?"&#xa0;":"")+h),c+="</div>",c},_adjustInstDate:function(e,t,n){var r=e.drawYear+(n=="Y"?t:0),i=e.drawMonth+(n=="M"?t:0),s=Math.min(e.selectedDay,this._getDaysInMonth(r,i))+(n=="D"?t:0),o=this._restrictMinMax(e,this._daylightSavingAdjust(new Date(r,i,s)));e.selectedDay=o.getDate(),e.drawMonth=e.selectedMonth=o.getMonth(),e.drawYear=e.selectedYear=o.getFullYear(),(n=="M"||n=="Y")&&this._notifyChange(e)},_restrictMinMax:function(e,t){var n=this._getMinMaxDate(e,"min"),r=this._getMinMaxDate(e,"max"),i=n&&t<n?n:t;return i=r&&i>r?r:i,i},_notifyChange:function(e){var t=this._get(e,"onChangeMonthYear");t&&t.apply(e.input?e.input[0]:null,[e.selectedYear,e.selectedMonth+1,e])},_getNumberOfMonths:function(e){var t=this._get(e,"numberOfMonths");return t==null?[1,1]:typeof t=="number"?[1,t]:t},_getMinMaxDate:function(e,t){return this._determineDate(e,this._get(e,t+"Date"),null)},_getDaysInMonth:function(e,t){return 32-this._daylightSavingAdjust(new Date(e,t,32)).getDate()},_getFirstDayOfMonth:function(e,t){return(new Date(e,t,1)).getDay()},_canAdjustMonth:function(e,t,n,r){var i=this._getNumberOfMonths(e),s=this._daylightSavingAdjust(new Date(n,r+(t<0?t:i[0]*i[1]),1));return t<0&&s.setDate(this._getDaysInMonth(s.getFullYear(),s.getMonth())),this._isInRange(e,s)},_isInRange:function(e,t){var n=this._getMinMaxDate(e,"min"),r=this._getMinMaxDate(e,"max");return(!n||t.getTime()>=n.getTime())&&(!r||t.getTime()<=r.getTime())},_getFormatConfig:function(e){var t=this._get(e,"shortYearCutoff");return t=typeof t!="string"?t:(new Date).getFullYear()%100+parseInt(t,10),{shortYearCutoff:t,dayNamesShort:this._get(e,"dayNamesShort"),dayNames:this._get(e,"dayNames"),monthNamesShort:this._get(e,"monthNamesShort"),monthNames:this._get(e,"monthNames")}},_formatDate:function(e,t,n,r){t||(e.currentDay=e.selectedDay,e.currentMonth=e.selectedMonth,e.currentYear=e.selectedYear);var i=t?typeof t=="object"?t:this._daylightSavingAdjust(new Date(r,n,t)):this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay));return this.formatDate(this._get(e,"dateFormat"),i,this._getFormatConfig(e))}}),$.fn.datepicker=function(e){if(!this.length)return this;$.datepicker.initialized||($(document).mousedown($.datepicker._checkExternalClick).find(document.body).append($.datepicker.dpDiv),$.datepicker.initialized=!0);var t=Array.prototype.slice.call(arguments,1);return typeof e!="string"||e!="isDisabled"&&e!="getDate"&&e!="widget"?e=="option"&&arguments.length==2&&typeof arguments[1]=="string"?$.datepicker["_"+e+"Datepicker"].apply($.datepicker,[this[0]].concat(t)):this.each(function(){typeof e=="string"?$.datepicker["_"+e+"Datepicker"].apply($.datepicker,[this].concat(t)):$.datepicker._attachDatepicker(this,e)}):$.datepicker["_"+e+"Datepicker"].apply($.datepicker,[this[0]].concat(t))},$.datepicker=new Datepicker,$.datepicker.initialized=!1,$.datepicker.uuid=(new Date).getTime(),$.datepicker.version="1.9.2",window["DP_jQuery_"+dpuuid]=$})(jQuery);(function(e,t){var n=!1;e.widget("ui.menu",{version:"1.9.2",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0}).bind("click"+this.eventNamespace,e.proxy(function(e){this.options.disabled&&e.preventDefault()},this)),this.options.disabled&&this.element.addClass("ui-state-disabled").attr("aria-disabled","true"),this._on({"mousedown .ui-menu-item > a":function(e){e.preventDefault()},"click .ui-state-disabled > a":function(e){e.preventDefault()},"click .ui-menu-item:has(a)":function(t){var r=e(t.target).closest(".ui-menu-item");!n&&r.not(".ui-state-disabled").length&&(n=!0,this.select(t),r.has(".ui-menu").length?this.expand(t):this.element.is(":focus")||(this.element.trigger("focus",[!0]),this.active&&this.active.parents(".ui-menu").length===1&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(t){var n=e(t.currentTarget);n.siblings().children(".ui-state-active").removeClass("ui-state-active"),this.focus(t,n)},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(e,t){var n=this.active||this.element.children(".ui-menu-item").eq(0);t||this.focus(e,n)},blur:function(t){this._delay(function(){e.contains(this.element[0],this.document[0].activeElement)||this.collapseAll(t)})},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(t){e(t.target).closest(".ui-menu").length||this.collapseAll(t),n=!1}})},_destroy:function(){this.element.removeAttr("aria-activedescendant").find(".ui-menu").andSelf().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(),this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var t=e(this);t.data("ui-menu-submenu-carat")&&t.remove()}),this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")},_keydown:function(t){function a(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}var n,r,i,s,o,u=!0;switch(t.keyCode){case e.ui.keyCode.PAGE_UP:this.previousPage(t);break;case e.ui.keyCode.PAGE_DOWN:this.nextPage(t);break;case e.ui.keyCode.HOME:this._move("first","first",t);break;case e.ui.keyCode.END:this._move("last","last",t);break;case e.ui.keyCode.UP:this.previous(t);break;case e.ui.keyCode.DOWN:this.next(t);break;case e.ui.keyCode.LEFT:this.collapse(t);break;case e.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(t);break;case e.ui.keyCode.ENTER:case e.ui.keyCode.SPACE:this._activate(t);break;case e.ui.keyCode.ESCAPE:this.collapse(t);break;default:u=!1,r=this.previousFilter||"",i=String.fromCharCode(t.keyCode),s=!1,clearTimeout(this.filterTimer),i===r?s=!0:i=r+i,o=new RegExp("^"+a(i),"i"),n=this.activeMenu.children(".ui-menu-item").filter(function(){return o.test(e(this).children("a").text())}),n=s&&n.index(this.active.next())!==-1?this.active.nextAll(".ui-menu-item"):n,n.length||(i=String.fromCharCode(t.keyCode),o=new RegExp("^"+a(i),"i"),n=this.activeMenu.children(".ui-menu-item").filter(function(){return o.test(e(this).children("a").text())})),n.length?(this.focus(t,n),n.length>1?(this.previousFilter=i,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter):delete this.previousFilter}u&&t.preventDefault()},_activate:function(e){this.active.is(".ui-state-disabled")||(this.active.children("a[aria-haspopup='true']").length?this.expand(e):this.select(e))},refresh:function(){var t,n=this.options.icons.submenu,r=this.element.find(this.options.menus);r.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var t=e(this),r=t.prev("a"),i=e("<span>").addClass("ui-menu-icon ui-icon "+n).data("ui-menu-submenu-carat",!0);r.attr("aria-haspopup","true").prepend(i),t.attr("aria-labelledby",r.attr("id"))}),t=r.add(this.element),t.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","presentation").children("a").uniqueId().addClass("ui-corner-all").attr({tabIndex:-1,role:this._itemRole()}),t.children(":not(.ui-menu-item)").each(function(){var t=e(this);/[^\-—–\s]/.test(t.text())||t.addClass("ui-widget-content ui-menu-divider")}),t.children(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!e.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},focus:function(e,t){var n,r;this.blur(e,e&&e.type==="focus"),this._scrollIntoView(t),this.active=t.first(),r=this.active.children("a").addClass("ui-state-focus"),this.options.role&&this.element.attr("aria-activedescendant",r.attr("id")),this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"),e&&e.type==="keydown"?this._close():this.timer=this._delay(function(){this._close()},this.delay),n=t.children(".ui-menu"),n.length&&/^mouse/.test(e.type)&&this._startOpening(n),this.activeMenu=t.parent(),this._trigger("focus",e,{item:t})},_scrollIntoView:function(t){var n,r,i,s,o,u;this._hasScroll()&&(n=parseFloat(e.css(this.activeMenu[0],"borderTopWidth"))||0,r=parseFloat(e.css(this.activeMenu[0],"paddingTop"))||0,i=t.offset().top-this.activeMenu.offset().top-n-r,s=this.activeMenu.scrollTop(),o=this.activeMenu.height(),u=t.height(),i<0?this.activeMenu.scrollTop(s+i):i+u>o&&this.activeMenu.scrollTop(s+i-o+u))},blur:function(e,t){t||clearTimeout(this.timer);if(!this.active)return;this.active.children("a").removeClass("ui-state-focus"),this.active=null,this._trigger("blur",e,{item:this.active})},_startOpening:function(e){clearTimeout(this.timer);if(e.attr("aria-hidden")!=="true")return;this.timer=this._delay(function(){this._close(),this._open(e)},this.delay)},_open:function(t){var n=e.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden","true"),t.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(n)},collapseAll:function(t,n){clearTimeout(this.timer),this.timer=this._delay(function(){var r=n?this.element:e(t&&t.target).closest(this.element.find(".ui-menu"));r.length||(r=this.element),this._close(r),this.blur(t),this.activeMenu=r},this.delay)},_close:function(e){e||(e=this.active?this.active.parent():this.element),e.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find("a.ui-state-active").removeClass("ui-state-active")},collapse:function(e){var t=this.active&&this.active.parent().closest(".ui-menu-item",this.element);t&&t.length&&(this._close(),this.focus(e,t))},expand:function(e){var t=this.active&&this.active.children(".ui-menu ").children(".ui-menu-item").first();t&&t.length&&(this._open(t.parent()),this._delay(function(){this.focus(e,t)}))},next:function(e){this._move("next","first",e)},previous:function(e){this._move("prev","last",e)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(e,t,n){var r;this.active&&(e==="first"||e==="last"?r=this.active[e==="first"?"prevAll":"nextAll"](".ui-menu-item").eq(-1):r=this.active[e+"All"](".ui-menu-item").eq(0));if(!r||!r.length||!this.active)r=this.activeMenu.children(".ui-menu-item")[t]();this.focus(n,r)},nextPage:function(t){var n,r,i;if(!this.active){this.next(t);return}if(this.isLastItem())return;this._hasScroll()?(r=this.active.offset().top,i=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return n=e(this),n.offset().top-r-i<0}),this.focus(t,n)):this.focus(t,this.activeMenu.children(".ui-menu-item")[this.active?"last":"first"]())},previousPage:function(t){var n,r,i;if(!this.active){this.next(t);return}if(this.isFirstItem())return;this._hasScroll()?(r=this.active.offset().top,i=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return n=e(this),n.offset().top-r+i>0}),this.focus(t,n)):this.focus(t,this.activeMenu.children(".ui-menu-item").first())},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(t){this.active=this.active||e(t.target).closest(".ui-menu-item");var n={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(t,!0),this._trigger("select",t,n)}})})(jQuery);(function(e,t){e.widget("ui.progressbar",{version:"1.9.2",options:{value:0,max:100},min:0,_create:function(){this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min,"aria-valuemax":this.options.max,"aria-valuenow":this._value()}),this.valueDiv=e("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element),this.oldValue=this._value(),this._refreshValue()},_destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.valueDiv.remove()},value:function(e){return e===t?this._value():(this._setOption("value",e),this)},_setOption:function(e,t){e==="value"&&(this.options.value=t,this._refreshValue(),this._value()===this.options.max&&this._trigger("complete")),this._super(e,t)},_value:function(){var e=this.options.value;return typeof e!="number"&&(e=0),Math.min(this.options.max,Math.max(this.min,e))},_percentage:function(){return 100*this._value()/this.options.max},_refreshValue:function(){var e=this.value(),t=this._percentage();this.oldValue!==e&&(this.oldValue=e,this._trigger("change")),this.valueDiv.toggle(e>this.min).toggleClass("ui-corner-right",e===this.options.max).width(t.toFixed(0)+"%"),this.element.attr("aria-valuenow",e)}})})(jQuery);jQuery.effects||function(e,t){var n=e.uiBackCompat!==!1,r="ui-effects-";e.effects={effect:{}},function(t,n){function p(e,t,n){var r=a[t.type]||{};return e==null?n||!t.def?null:t.def:(e=r.floor?~~e:parseFloat(e),isNaN(e)?t.def:r.mod?(e+r.mod)%r.mod:0>e?0:r.max<e?r.max:e)}function d(e){var n=o(),r=n._rgba=[];return e=e.toLowerCase(),h(s,function(t,i){var s,o=i.re.exec(e),a=o&&i.parse(o),f=i.space||"rgba";if(a)return s=n[f](a),n[u[f].cache]=s[u[f].cache],r=n._rgba=s._rgba,!1}),r.length?(r.join()==="0,0,0,0"&&t.extend(r,c.transparent),n):c[e]}function v(e,t,n){return n=(n+1)%1,n*6<1?e+(t-e)*n*6:n*2<1?t:n*3<2?e+(t-e)*(2/3-n)*6:e}var r="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor".split(" "),i=/^([\-+])=\s*(\d+\.?\d*)/,s=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,parse:function(e){return[e[1],e[2],e[3],e[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,parse:function(e){return[e[1]*2.55,e[2]*2.55,e[3]*2.55,e[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(e){return[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(e){return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(e){return[e[1],e[2]/100,e[3]/100,e[4]]}}],o=t.Color=function(e,n,r,i){return new t.Color.fn.parse(e,n,r,i)},u={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},a={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},f=o.support={},l=t("<p>")[0],c,h=t.each;l.style.cssText="background-color:rgba(1,1,1,.5)",f.rgba=l.style.backgroundColor.indexOf("rgba")>-1,h(u,function(e,t){t.cache="_"+e,t.props.alpha={idx:3,type:"percent",def:1}}),o.fn=t.extend(o.prototype,{parse:function(r,i,s,a){if(r===n)return this._rgba=[null,null,null,null],this;if(r.jquery||r.nodeType)r=t(r).css(i),i=n;var f=this,l=t.type(r),v=this._rgba=[];i!==n&&(r=[r,i,s,a],l="array");if(l==="string")return this.parse(d(r)||c._default);if(l==="array")return h(u.rgba.props,function(e,t){v[t.idx]=p(r[t.idx],t)}),this;if(l==="object")return r instanceof o?h(u,function(e,t){r[t.cache]&&(f[t.cache]=r[t.cache].slice())}):h(u,function(t,n){var i=n.cache;h(n.props,function(e,t){if(!f[i]&&n.to){if(e==="alpha"||r[e]==null)return;f[i]=n.to(f._rgba)}f[i][t.idx]=p(r[e],t,!0)}),f[i]&&e.inArray(null,f[i].slice(0,3))<0&&(f[i][3]=1,n.from&&(f._rgba=n.from(f[i])))}),this},is:function(e){var t=o(e),n=!0,r=this;return h(u,function(e,i){var s,o=t[i.cache];return o&&(s=r[i.cache]||i.to&&i.to(r._rgba)||[],h(i.props,function(e,t){if(o[t.idx]!=null)return n=o[t.idx]===s[t.idx],n})),n}),n},_space:function(){var e=[],t=this;return h(u,function(n,r){t[r.cache]&&e.push(n)}),e.pop()},transition:function(e,t){var n=o(e),r=n._space(),i=u[r],s=this.alpha()===0?o("transparent"):this,f=s[i.cache]||i.to(s._rgba),l=f.slice();return n=n[i.cache],h(i.props,function(e,r){var i=r.idx,s=f[i],o=n[i],u=a[r.type]||{};if(o===null)return;s===null?l[i]=o:(u.mod&&(o-s>u.mod/2?s+=u.mod:s-o>u.mod/2&&(s-=u.mod)),l[i]=p((o-s)*t+s,r))}),this[r](l)},blend:function(e){if(this._rgba[3]===1)return this;var n=this._rgba.slice(),r=n.pop(),i=o(e)._rgba;return o(t.map(n,function(e,t){return(1-r)*i[t]+r*e}))},toRgbaString:function(){var e="rgba(",n=t.map(this._rgba,function(e,t){return e==null?t>2?1:0:e});return n[3]===1&&(n.pop(),e="rgb("),e+n.join()+")"},toHslaString:function(){var e="hsla(",n=t.map(this.hsla(),function(e,t){return e==null&&(e=t>2?1:0),t&&t<3&&(e=Math.round(e*100)+"%"),e});return n[3]===1&&(n.pop(),e="hsl("),e+n.join()+")"},toHexString:function(e){var n=this._rgba.slice(),r=n.pop();return e&&n.push(~~(r*255)),"#"+t.map(n,function(e){return e=(e||0).toString(16),e.length===1?"0"+e:e}).join("")},toString:function(){return this._rgba[3]===0?"transparent":this.toRgbaString()}}),o.fn.parse.prototype=o.fn,u.hsla.to=function(e){if(e[0]==null||e[1]==null||e[2]==null)return[null,null,null,e[3]];var t=e[0]/255,n=e[1]/255,r=e[2]/255,i=e[3],s=Math.max(t,n,r),o=Math.min(t,n,r),u=s-o,a=s+o,f=a*.5,l,c;return o===s?l=0:t===s?l=60*(n-r)/u+360:n===s?l=60*(r-t)/u+120:l=60*(t-n)/u+240,f===0||f===1?c=f:f<=.5?c=u/a:c=u/(2-a),[Math.round(l)%360,c,f,i==null?1:i]},u.hsla.from=function(e){if(e[0]==null||e[1]==null||e[2]==null)return[null,null,null,e[3]];var t=e[0]/360,n=e[1],r=e[2],i=e[3],s=r<=.5?r*(1+n):r+n-r*n,o=2*r-s;return[Math.round(v(o,s,t+1/3)*255),Math.round(v(o,s,t)*255),Math.round(v(o,s,t-1/3)*255),i]},h(u,function(e,r){var s=r.props,u=r.cache,a=r.to,f=r.from;o.fn[e]=function(e){a&&!this[u]&&(this[u]=a(this._rgba));if(e===n)return this[u].slice();var r,i=t.type(e),l=i==="array"||i==="object"?e:arguments,c=this[u].slice();return h(s,function(e,t){var n=l[i==="object"?e:t.idx];n==null&&(n=c[t.idx]),c[t.idx]=p(n,t)}),f?(r=o(f(c)),r[u]=c,r):o(c)},h(s,function(n,r){if(o.fn[n])return;o.fn[n]=function(s){var o=t.type(s),u=n==="alpha"?this._hsla?"hsla":"rgba":e,a=this[u](),f=a[r.idx],l;return o==="undefined"?f:(o==="function"&&(s=s.call(this,f),o=t.type(s)),s==null&&r.empty?this:(o==="string"&&(l=i.exec(s),l&&(s=f+parseFloat(l[2])*(l[1]==="+"?1:-1))),a[r.idx]=s,this[u](a)))}})}),h(r,function(e,n){t.cssHooks[n]={set:function(e,r){var i,s,u="";if(t.type(r)!=="string"||(i=d(r))){r=o(i||r);if(!f.rgba&&r._rgba[3]!==1){s=n==="backgroundColor"?e.parentNode:e;while((u===""||u==="transparent")&&s&&s.style)try{u=t.css(s,"backgroundColor"),s=s.parentNode}catch(a){}r=r.blend(u&&u!=="transparent"?u:"_default")}r=r.toRgbaString()}try{e.style[n]=r}catch(l){}}},t.fx.step[n]=function(e){e.colorInit||(e.start=o(e.elem,n),e.end=o(e.end),e.colorInit=!0),t.cssHooks[n].set(e.elem,e.start.transition(e.end,e.pos))}}),t.cssHooks.borderColor={expand:function(e){var t={};return h(["Top","Right","Bottom","Left"],function(n,r){t["border"+r+"Color"]=e}),t}},c=t.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",bordo:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(jQuery),function(){function i(){var t=this.ownerDocument.defaultView?this.ownerDocument.defaultView.getComputedStyle(this,null):this.currentStyle,n={},r,i;if(t&&t.length&&t[0]&&t[t[0]]){i=t.length;while(i--)r=t[i],typeof t[r]=="string"&&(n[e.camelCase(r)]=t[r])}else for(r in t)typeof t[r]=="string"&&(n[r]=t[r]);return n}function s(t,n){var i={},s,o;for(s in n)o=n[s],t[s]!==o&&!r[s]&&(e.fx.step[s]||!isNaN(parseFloat(o)))&&(i[s]=o);return i}var n=["add","remove","toggle"],r={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};e.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(t,n){e.fx.step[n]=function(e){if(e.end!=="none"&&!e.setAttr||e.pos===1&&!e.setAttr)jQuery.style(e.elem,n,e.end),e.setAttr=!0}}),e.effects.animateClass=function(t,r,o,u){var a=e.speed(r,o,u);return this.queue(function(){var r=e(this),o=r.attr("class")||"",u,f=a.children?r.find("*").andSelf():r;f=f.map(function(){var t=e(this);return{el:t,start:i.call(this)}}),u=function(){e.each(n,function(e,n){t[n]&&r[n+"Class"](t[n])})},u(),f=f.map(function(){return this.end=i.call(this.el[0]),this.diff=s(this.start,this.end),this}),r.attr("class",o),f=f.map(function(){var t=this,n=e.Deferred(),r=jQuery.extend({},a,{queue:!1,complete:function(){n.resolve(t)}});return this.el.animate(this.diff,r),n.promise()}),e.when.apply(e,f.get()).done(function(){u(),e.each(arguments,function(){var t=this.el;e.each(this.diff,function(e){t.css(e,"")})}),a.complete.call(r[0])})})},e.fn.extend({_addClass:e.fn.addClass,addClass:function(t,n,r,i){return n?e.effects.animateClass.call(this,{add:t},n,r,i):this._addClass(t)},_removeClass:e.fn.removeClass,removeClass:function(t,n,r,i){return n?e.effects.animateClass.call(this,{remove:t},n,r,i):this._removeClass(t)},_toggleClass:e.fn.toggleClass,toggleClass:function(n,r,i,s,o){return typeof r=="boolean"||r===t?i?e.effects.animateClass.call(this,r?{add:n}:{remove:n},i,s,o):this._toggleClass(n,r):e.effects.animateClass.call(this,{toggle:n},r,i,s)},switchClass:function(t,n,r,i,s){return e.effects.animateClass.call(this,{add:n,remove:t},r,i,s)}})}(),function(){function i(t,n,r,i){e.isPlainObject(t)&&(n=t,t=t.effect),t={effect:t},n==null&&(n={}),e.isFunction(n)&&(i=n,r=null,n={});if(typeof n=="number"||e.fx.speeds[n])i=r,r=n,n={};return e.isFunction(r)&&(i=r,r=null),n&&e.extend(t,n),r=r||n.duration,t.duration=e.fx.off?0:typeof r=="number"?r:r in e.fx.speeds?e.fx.speeds[r]:e.fx.speeds._default,t.complete=i||n.complete,t}function s(t){return!t||typeof t=="number"||e.fx.speeds[t]?!0:typeof t=="string"&&!e.effects.effect[t]?n&&e.effects[t]?!1:!0:!1}e.extend(e.effects,{version:"1.9.2",save:function(e,t){for(var n=0;n<t.length;n++)t[n]!==null&&e.data(r+t[n],e[0].style[t[n]])},restore:function(e,n){var i,s;for(s=0;s<n.length;s++)n[s]!==null&&(i=e.data(r+n[s]),i===t&&(i=""),e.css(n[s],i))},setMode:function(e,t){return t==="toggle"&&(t=e.is(":hidden")?"show":"hide"),t},getBaseline:function(e,t){var n,r;switch(e[0]){case"top":n=0;break;case"middle":n=.5;break;case"bottom":n=1;break;default:n=e[0]/t.height}switch(e[1]){case"left":r=0;break;case"center":r=.5;break;case"right":r=1;break;default:r=e[1]/t.width}return{x:r,y:n}},createWrapper:function(t){if(t.parent().is(".ui-effects-wrapper"))return t.parent();var n={width:t.outerWidth(!0),height:t.outerHeight(!0),"float":t.css("float")},r=e("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),i={width:t.width(),height:t.height()},s=document.activeElement;try{s.id}catch(o){s=document.body}return t.wrap(r),(t[0]===s||e.contains(t[0],s))&&e(s).focus(),r=t.parent(),t.css("position")==="static"?(r.css({position:"relative"}),t.css({position:"relative"})):(e.extend(n,{position:t.css("position"),zIndex:t.css("z-index")}),e.each(["top","left","bottom","right"],function(e,r){n[r]=t.css(r),isNaN(parseInt(n[r],10))&&(n[r]="auto")}),t.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),t.css(i),r.css(n).show()},removeWrapper:function(t){var n=document.activeElement;return t.parent().is(".ui-effects-wrapper")&&(t.parent().replaceWith(t),(t[0]===n||e.contains(t[0],n))&&e(n).focus()),t},setTransition:function(t,n,r,i){return i=i||{},e.each(n,function(e,n){var s=t.cssUnit(n);s[0]>0&&(i[n]=s[0]*r+s[1])}),i}}),e.fn.extend({effect:function(){function a(n){function u(){e.isFunction(i)&&i.call(r[0]),e.isFunction(n)&&n()}var r=e(this),i=t.complete,s=t.mode;(r.is(":hidden")?s==="hide":s==="show")?u():o.call(r[0],t,u)}var t=i.apply(this,arguments),r=t.mode,s=t.queue,o=e.effects.effect[t.effect],u=!o&&n&&e.effects[t.effect];return e.fx.off||!o&&!u?r?this[r](t.duration,t.complete):this.each(function(){t.complete&&t.complete.call(this)}):o?s===!1?this.each(a):this.queue(s||"fx",a):u.call(this,{options:t,duration:t.duration,callback:t.complete,mode:t.mode})},_show:e.fn.show,show:function(e){if(s(e))return this._show.apply(this,arguments);var t=i.apply(this,arguments);return t.mode="show",this.effect.call(this,t)},_hide:e.fn.hide,hide:function(e){if(s(e))return this._hide.apply(this,arguments);var t=i.apply(this,arguments);return t.mode="hide",this.effect.call(this,t)},__toggle:e.fn.toggle,toggle:function(t){if(s(t)||typeof t=="boolean"||e.isFunction(t))return this.__toggle.apply(this,arguments);var n=i.apply(this,arguments);return n.mode="toggle",this.effect.call(this,n)},cssUnit:function(t){var n=this.css(t),r=[];return e.each(["em","px","%","pt"],function(e,t){n.indexOf(t)>0&&(r=[parseFloat(n),t])}),r}})}(),function(){var t={};e.each(["Quad","Cubic","Quart","Quint","Expo"],function(e,n){t[n]=function(t){return Math.pow(t,e+2)}}),e.extend(t,{Sine:function(e){return 1-Math.cos(e*Math.PI/2)},Circ:function(e){return 1-Math.sqrt(1-e*e)},Elastic:function(e){return e===0||e===1?e:-Math.pow(2,8*(e-1))*Math.sin(((e-1)*80-7.5)*Math.PI/15)},Back:function(e){return e*e*(3*e-2)},Bounce:function(e){var t,n=4;while(e<((t=Math.pow(2,--n))-1)/11);return 1/Math.pow(4,3-n)-7.5625*Math.pow((t*3-2)/22-e,2)}}),e.each(t,function(t,n){e.easing["easeIn"+t]=n,e.easing["easeOut"+t]=function(e){return 1-n(1-e)},e.easing["easeInOut"+t]=function(e){return e<.5?n(e*2)/2:1-n(e*-2+2)/2}})}()}(jQuery);(function(e,t){var n=/up|down|vertical/,r=/up|left|vertical|horizontal/;e.effects.effect.blind=function(t,i){var s=e(this),o=["position","top","bottom","left","right","height","width"],u=e.effects.setMode(s,t.mode||"hide"),a=t.direction||"up",f=n.test(a),l=f?"height":"width",c=f?"top":"left",h=r.test(a),p={},d=u==="show",v,m,g;s.parent().is(".ui-effects-wrapper")?e.effects.save(s.parent(),o):e.effects.save(s,o),s.show(),v=e.effects.createWrapper(s).css({overflow:"hidden"}),m=v[l](),g=parseFloat(v.css(c))||0,p[l]=d?m:0,h||(s.css(f?"bottom":"right",0).css(f?"top":"left","auto").css({position:"absolute"}),p[c]=d?g:m+g),d&&(v.css(l,0),h||v.css(c,g+m)),v.animate(p,{duration:t.duration,easing:t.easing,queue:!1,complete:function(){u==="hide"&&s.hide(),e.effects.restore(s,o),e.effects.removeWrapper(s),i()}})}})(jQuery);(function(e,t){e.effects.effect.bounce=function(t,n){var r=e(this),i=["position","top","bottom","left","right","height","width"],s=e.effects.setMode(r,t.mode||"effect"),o=s==="hide",u=s==="show",a=t.direction||"up",f=t.distance,l=t.times||5,c=l*2+(u||o?1:0),h=t.duration/c,p=t.easing,d=a==="up"||a==="down"?"top":"left",v=a==="up"||a==="left",m,g,y,b=r.queue(),w=b.length;(u||o)&&i.push("opacity"),e.effects.save(r,i),r.show(),e.effects.createWrapper(r),f||(f=r[d==="top"?"outerHeight":"outerWidth"]()/3),u&&(y={opacity:1},y[d]=0,r.css("opacity",0).css(d,v?-f*2:f*2).animate(y,h,p)),o&&(f/=Math.pow(2,l-1)),y={},y[d]=0;for(m=0;m<l;m++)g={},g[d]=(v?"-=":"+=")+f,r.animate(g,h,p).animate(y,h,p),f=o?f*2:f/2;o&&(g={opacity:0},g[d]=(v?"-=":"+=")+f,r.animate(g,h,p)),r.queue(function(){o&&r.hide(),e.effects.restore(r,i),e.effects.removeWrapper(r),n()}),w>1&&b.splice.apply(b,[1,0].concat(b.splice(w,c+1))),r.dequeue()}})(jQuery);(function(e,t){e.effects.effect.clip=function(t,n){var r=e(this),i=["position","top","bottom","left","right","height","width"],s=e.effects.setMode(r,t.mode||"hide"),o=s==="show",u=t.direction||"vertical",a=u==="vertical",f=a?"height":"width",l=a?"top":"left",c={},h,p,d;e.effects.save(r,i),r.show(),h=e.effects.createWrapper(r).css({overflow:"hidden"}),p=r[0].tagName==="IMG"?h:r,d=p[f](),o&&(p.css(f,0),p.css(l,d/2)),c[f]=o?d:0,c[l]=o?0:d/2,p.animate(c,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){o||r.hide(),e.effects.restore(r,i),e.effects.removeWrapper(r),n()}})}})(jQuery);(function(e,t){e.effects.effect.drop=function(t,n){var r=e(this),i=["position","top","bottom","left","right","opacity","height","width"],s=e.effects.setMode(r,t.mode||"hide"),o=s==="show",u=t.direction||"left",a=u==="up"||u==="down"?"top":"left",f=u==="up"||u==="left"?"pos":"neg",l={opacity:o?1:0},c;e.effects.save(r,i),r.show(),e.effects.createWrapper(r),c=t.distance||r[a==="top"?"outerHeight":"outerWidth"](!0)/2,o&&r.css("opacity",0).css(a,f==="pos"?-c:c),l[a]=(o?f==="pos"?"+=":"-=":f==="pos"?"-=":"+=")+c,r.animate(l,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){s==="hide"&&r.hide(),e.effects.restore(r,i),e.effects.removeWrapper(r),n()}})}})(jQuery);(function(e,t){e.effects.effect.explode=function(t,n){function y(){c.push(this),c.length===r*i&&b()}function b(){s.css({visibility:"visible"}),e(c).remove(),u||s.hide(),n()}var r=t.pieces?Math.round(Math.sqrt(t.pieces)):3,i=r,s=e(this),o=e.effects.setMode(s,t.mode||"hide"),u=o==="show",a=s.show().css("visibility","hidden").offset(),f=Math.ceil(s.outerWidth()/i),l=Math.ceil(s.outerHeight()/r),c=[],h,p,d,v,m,g;for(h=0;h<r;h++){v=a.top+h*l,g=h-(r-1)/2;for(p=0;p<i;p++)d=a.left+p*f,m=p-(i-1)/2,s.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-p*f,top:-h*l}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:f,height:l,left:d+(u?m*f:0),top:v+(u?g*l:0),opacity:u?0:1}).animate({left:d+(u?0:m*f),top:v+(u?0:g*l),opacity:u?1:0},t.duration||500,t.easing,y)}}})(jQuery);(function(e,t){e.effects.effect.fade=function(t,n){var r=e(this),i=e.effects.setMode(r,t.mode||"toggle");r.animate({opacity:i},{queue:!1,duration:t.duration,easing:t.easing,complete:n})}})(jQuery);(function(e,t){e.effects.effect.fold=function(t,n){var r=e(this),i=["position","top","bottom","left","right","height","width"],s=e.effects.setMode(r,t.mode||"hide"),o=s==="show",u=s==="hide",a=t.size||15,f=/([0-9]+)%/.exec(a),l=!!t.horizFirst,c=o!==l,h=c?["width","height"]:["height","width"],p=t.duration/2,d,v,m={},g={};e.effects.save(r,i),r.show(),d=e.effects.createWrapper(r).css({overflow:"hidden"}),v=c?[d.width(),d.height()]:[d.height(),d.width()],f&&(a=parseInt(f[1],10)/100*v[u?0:1]),o&&d.css(l?{height:0,width:a}:{height:a,width:0}),m[h[0]]=o?v[0]:a,g[h[1]]=o?v[1]:0,d.animate(m,p,t.easing).animate(g,p,t.easing,function(){u&&r.hide(),e.effects.restore(r,i),e.effects.removeWrapper(r),n()})}})(jQuery);(function(e,t){e.effects.effect.highlight=function(t,n){var r=e(this),i=["backgroundImage","backgroundColor","opacity"],s=e.effects.setMode(r,t.mode||"show"),o={backgroundColor:r.css("backgroundColor")};s==="hide"&&(o.opacity=0),e.effects.save(r,i),r.show().css({backgroundImage:"none",backgroundColor:t.color||"#ffff99"}).animate(o,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){s==="hide"&&r.hide(),e.effects.restore(r,i),n()}})}})(jQuery);(function(e,t){e.effects.effect.pulsate=function(t,n){var r=e(this),i=e.effects.setMode(r,t.mode||"show"),s=i==="show",o=i==="hide",u=s||i==="hide",a=(t.times||5)*2+(u?1:0),f=t.duration/a,l=0,c=r.queue(),h=c.length,p;if(s||!r.is(":visible"))r.css("opacity",0).show(),l=1;for(p=1;p<a;p++)r.animate({opacity:l},f,t.easing),l=1-l;r.animate({opacity:l},f,t.easing),r.queue(function(){o&&r.hide(),n()}),h>1&&c.splice.apply(c,[1,0].concat(c.splice(h,a+1))),r.dequeue()}})(jQuery);(function(e,t){e.effects.effect.puff=function(t,n){var r=e(this),i=e.effects.setMode(r,t.mode||"hide"),s=i==="hide",o=parseInt(t.percent,10)||150,u=o/100,a={height:r.height(),width:r.width(),outerHeight:r.outerHeight(),outerWidth:r.outerWidth()};e.extend(t,{effect:"scale",queue:!1,fade:!0,mode:i,complete:n,percent:s?o:100,from:s?a:{height:a.height*u,width:a.width*u,outerHeight:a.outerHeight*u,outerWidth:a.outerWidth*u}}),r.effect(t)},e.effects.effect.scale=function(t,n){var r=e(this),i=e.extend(!0,{},t),s=e.effects.setMode(r,t.mode||"effect"),o=parseInt(t.percent,10)||(parseInt(t.percent,10)===0?0:s==="hide"?0:100),u=t.direction||"both",a=t.origin,f={height:r.height(),width:r.width(),outerHeight:r.outerHeight(),outerWidth:r.outerWidth()},l={y:u!=="horizontal"?o/100:1,x:u!=="vertical"?o/100:1};i.effect="size",i.queue=!1,i.complete=n,s!=="effect"&&(i.origin=a||["middle","center"],i.restore=!0),i.from=t.from||(s==="show"?{height:0,width:0,outerHeight:0,outerWidth:0}:f),i.to={height:f.height*l.y,width:f.width*l.x,outerHeight:f.outerHeight*l.y,outerWidth:f.outerWidth*l.x},i.fade&&(s==="show"&&(i.from.opacity=0,i.to.opacity=1),s==="hide"&&(i.from.opacity=1,i.to.opacity=0)),r.effect(i)},e.effects.effect.size=function(t,n){var r,i,s,o=e(this),u=["position","top","bottom","left","right","width","height","overflow","opacity"],a=["position","top","bottom","left","right","overflow","opacity"],f=["width","height","overflow"],l=["fontSize"],c=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],h=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],p=e.effects.setMode(o,t.mode||"effect"),d=t.restore||p!=="effect",v=t.scale||"both",m=t.origin||["middle","center"],g=o.css("position"),y=d?u:a,b={height:0,width:0,outerHeight:0,outerWidth:0};p==="show"&&o.show(),r={height:o.height(),width:o.width(),outerHeight:o.outerHeight(),outerWidth:o.outerWidth()},t.mode==="toggle"&&p==="show"?(o.from=t.to||b,o.to=t.from||r):(o.from=t.from||(p==="show"?b:r),o.to=t.to||(p==="hide"?b:r)),s={from:{y:o.from.height/r.height,x:o.from.width/r.width},to:{y:o.to.height/r.height,x:o.to.width/r.width}};if(v==="box"||v==="both")s.from.y!==s.to.y&&(y=y.concat(c),o.from=e.effects.setTransition(o,c,s.from.y,o.from),o.to=e.effects.setTransition(o,c,s.to.y,o.to)),s.from.x!==s.to.x&&(y=y.concat(h),o.from=e.effects.setTransition(o,h,s.from.x,o.from),o.to=e.effects.setTransition(o,h,s.to.x,o.to));(v==="content"||v==="both")&&s.from.y!==s.to.y&&(y=y.concat(l).concat(f),o.from=e.effects.setTransition(o,l,s.from.y,o.from),o.to=e.effects.setTransition(o,l,s.to.y,o.to)),e.effects.save(o,y),o.show(),e.effects.createWrapper(o),o.css("overflow","hidden").css(o.from),m&&(i=e.effects.getBaseline(m,r),o.from.top=(r.outerHeight-o.outerHeight())*i.y,o.from.left=(r.outerWidth-o.outerWidth())*i.x,o.to.top=(r.outerHeight-o.to.outerHeight)*i.y,o.to.left=(r.outerWidth-o.to.outerWidth)*i.x),o.css(o.from);if(v==="content"||v==="both")c=c.concat(["marginTop","marginBottom"]).concat(l),h=h.concat(["marginLeft","marginRight"]),f=u.concat(c).concat(h),o.find("*[width]").each(function(){var n=e(this),r={height:n.height(),width:n.width(),outerHeight:n.outerHeight(),outerWidth:n.outerWidth()};d&&e.effects.save(n,f),n.from={height:r.height*s.from.y,width:r.width*s.from.x,outerHeight:r.outerHeight*s.from.y,outerWidth:r.outerWidth*s.from.x},n.to={height:r.height*s.to.y,width:r.width*s.to.x,outerHeight:r.height*s.to.y,outerWidth:r.width*s.to.x},s.from.y!==s.to.y&&(n.from=e.effects.setTransition(n,c,s.from.y,n.from),n.to=e.effects.setTransition(n,c,s.to.y,n.to)),s.from.x!==s.to.x&&(n.from=e.effects.setTransition(n,h,s.from.x,n.from),n.to=e.effects.setTransition(n,h,s.to.x,n.to)),n.css(n.from),n.animate(n.to,t.duration,t.easing,function(){d&&e.effects.restore(n,f)})});o.animate(o.to,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){o.to.opacity===0&&o.css("opacity",o.from.opacity),p==="hide"&&o.hide(),e.effects.restore(o,y),d||(g==="static"?o.css({position:"relative",top:o.to.top,left:o.to.left}):e.each(["top","left"],function(e,t){o.css(t,function(t,n){var r=parseInt(n,10),i=e?o.to.left:o.to.top;return n==="auto"?i+"px":r+i+"px"})})),e.effects.removeWrapper(o),n()}})}})(jQuery);(function(e,t){e.effects.effect.shake=function(t,n){var r=e(this),i=["position","top","bottom","left","right","height","width"],s=e.effects.setMode(r,t.mode||"effect"),o=t.direction||"left",u=t.distance||20,a=t.times||3,f=a*2+1,l=Math.round(t.duration/f),c=o==="up"||o==="down"?"top":"left",h=o==="up"||o==="left",p={},d={},v={},m,g=r.queue(),y=g.length;e.effects.save(r,i),r.show(),e.effects.createWrapper(r),p[c]=(h?"-=":"+=")+u,d[c]=(h?"+=":"-=")+u*2,v[c]=(h?"-=":"+=")+u*2,r.animate(p,l,t.easing);for(m=1;m<a;m++)r.animate(d,l,t.easing).animate(v,l,t.easing);r.animate(d,l,t.easing).animate(p,l/2,t.easing).queue(function(){s==="hide"&&r.hide(),e.effects.restore(r,i),e.effects.removeWrapper(r),n()}),y>1&&g.splice.apply(g,[1,0].concat(g.splice(y,f+1))),r.dequeue()}})(jQuery);(function(e,t){e.effects.effect.slide=function(t,n){var r=e(this),i=["position","top","bottom","left","right","width","height"],s=e.effects.setMode(r,t.mode||"show"),o=s==="show",u=t.direction||"left",a=u==="up"||u==="down"?"top":"left",f=u==="up"||u==="left",l,c={};e.effects.save(r,i),r.show(),l=t.distance||r[a==="top"?"outerHeight":"outerWidth"](!0),e.effects.createWrapper(r).css({overflow:"hidden"}),o&&r.css(a,f?isNaN(l)?"-"+l:-l:l),c[a]=(o?f?"+=":"-=":f?"-=":"+=")+l,r.animate(c,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){s==="hide"&&r.hide(),e.effects.restore(r,i),e.effects.removeWrapper(r),n()}})}})(jQuery);(function(e,t){e.effects.effect.transfer=function(t,n){var r=e(this),i=e(t.to),s=i.css("position")==="fixed",o=e("body"),u=s?o.scrollTop():0,a=s?o.scrollLeft():0,f=i.offset(),l={top:f.top-u,left:f.left-a,height:i.innerHeight(),width:i.innerWidth()},c=r.offset(),h=e('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(t.className).css({top:c.top-u,left:c.left-a,height:r.innerHeight(),width:r.innerWidth(),position:s?"fixed":"absolute"}).animate(l,t.duration,t.easing,function(){h.remove(),n()})}})(jQuery);
function ucfirst(e){e+="";var t=e.charAt(0).toUpperCase();return t+e.substr(1)}jQuery(function(e,t){var n=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},r=n(navigator.userAgent),i={};r.browser&&(i[r.browser]=!0,i.version=r.version),i.chrome?i.webkit=!0:i.webkit&&(i.safari=!0);var s=e(window),o=e(document),u=e("body"),a=e("base").attr("href"),f={filters:[],callbacks:{},anims:{},loadFilter:t,modal:!1,closeOnEscape:!0,closeOnClick:!0,useKeyHandler:!1,showCloseButton:!0,closeButton:'<a href="#" class="nyroModalClose nyroModalCloseButton nmReposition" title="close">Close</a>',stack:!1,nonStackable:"form",header:t,footer:t,galleryLoop:!0,galleryCounts:!0,ltr:!0,domCopy:!1,ajax:{},imageRegex:"[^.].(jpg|jpeg|png|tiff|gif|bmp)s*$",selIndicator:"nyroModalSel",swfObjectId:t,swf:{allowFullScreen:"true",allowscriptaccess:"always",wmode:"transparent"},store:{},errorMsg:"An error occured",elts:{all:t,bg:t,load:t,cont:t,hidden:t},sizes:{initW:t,initH:t,w:t,h:t,minW:t,minH:t,wMargin:t,hMargin:t},anim:{def:t,showBg:t,hideBg:t,showLoad:t,hideLoad:t,showCont:t,hideCont:t,showTrans:t,hideTrans:t,resize:t},_open:!1,_bgReady:!1,_opened:!1,_loading:!1,_animated:!1,_transition:!1,_nmOpener:t,_nbContentLoading:0,_scripts:"",_scriptsShown:"",saveObj:function(){this.opener.data("nmObj",this)},open:function(){this._nmOpener&&this._nmOpener._close(),this.getInternal()._pushStack(this.opener),this._opened=!1,this._bgReady=!1,this._open=!0,this._initElts(),this._load(),this._nbContentLoading=0,this._callAnim("showBg",e.proxy(function(){this._bgReady=!0,this._nmOpener&&(this._nmOpener._bgReady=!1,this._nmOpener._loading=!1,this._nmOpener._animated=!1,this._nmOpener._opened=!1,this._nmOpener._open=!1,this._nmOpener.elts.cont=this._nmOpener.elts.hidden=this._nmOpener.elts.load=this._nmOpener.elts.bg=this._nmOpener.elts.all=t,this._nmOpener.saveObj(),this._nmOpener=t),this._contentLoading()},this))},resize:function(t){t?(this.elts.hidden.append(this.elts.cont.children().first().clone()),this.sizes.initW=this.sizes.w=this.elts.hidden.width(),this.sizes.initH=this.sizes.h=this.elts.hidden.height(),this.elts.hidden.empty()):(this.sizes.w=this.sizes.initW,this.sizes.h=this.sizes.initH),this._unreposition(),this.size(),this._callAnim("resize",e.proxy(function(){this._reposition()},this))},size:function(){var e=this.getInternal().fullSize.viewH-this.sizes.hMargin,t=this.getInternal().fullSize.viewW-this.sizes.wMargin;console.log("[size]",e,t),this.sizes.minW&&this.sizes.minW>this.sizes.w&&(this.sizes.w=this.sizes.minW),this.sizes.minH&&this.sizes.minH>this.sizes.h&&(this.sizes.h=this.sizes.minH);if(this.sizes.h>e||this.sizes.w>t)this.sizes.h=Math.min(this.sizes.h,e),this.sizes.w=Math.min(this.sizes.w,t);this._callFilters("size")},getForNewLinks:function(n){var r;return this.stack&&(!n||this.isStackable(n))?(r=e.extend(!0,{},this),r._nmOpener=t,r.elts.all=t):(r=e.extend({},this),r._nmOpener=this),r.filters=[],r.opener=t,r._open=!1,r},isStackable:function(e){return!e.is(this.nonStackable)},keyHandle:function(e){this.keyEvent=e,this._callFilters("keyHandle"),this.keyEvent=t,delete this.keyEvent},getInternal:function(){return l},_close:function(){this.getInternal()._removeStack(this.opener),this._opened=!1,this._open=!1,this._callFilters("close")},close:function(){this._close(),this._callFilters("beforeClose");var e=this;this._unreposition(),e._callAnim("hideCont",function(){e._callAnim("hideLoad",function(){e._callAnim("hideBg",function(){e._callFilters("afterClose"),e.elts.cont.remove(),e.elts.hidden.remove(),e.elts.load.remove(),e.elts.bg.remove(),e.elts.all.remove(),e.elts.cont=e.elts.hidden=e.elts.load=e.elts.bg=e.elts.all=t})})})},destroy:function(){return this._open?!1:(this._callFilters("destroy"),this.elts.all&&this.elts.all.remove(),!0)},_initElts:function(){!this.stack&&this.getInternal().stack.length>1&&(this.elts=this.getInternal().stack[this.getInternal().stack.length-2].nmObj.elts);if(!this.elts.all||this.elts.all.closest("body").length==0)this.elts.all=this.elts.bg=this.elts.cont=this.elts.hidden=this.elts.load=t;this.elts.all||(this.elts.all=e("<div />").appendTo(this.getInternal()._container)),this.elts.bg||(this.elts.bg=e("<div />").hide().appendTo(this.elts.all)),this.elts.cont||(this.elts.cont=e("<div />").hide().appendTo(this.elts.all)),this.elts.hidden||(this.elts.hidden=e("<div />").hide().appendTo(this.elts.all)),this.elts.hidden.empty(),this.elts.load||(this.elts.load=e("<div />").hide().appendTo(this.elts.all)),this._callFilters("initElts")},_error:function(e){this._callFilters("error",e)},_setCont:function(t,n){if(n){var r=[],i=0;t=t.replace(/\r\n/gi,"nyroModalLN").replace(/<script(.|\s)*?\/script>/gi,function(e){return r[i]=e,'<pre class=nyroModalScript rel="'+i++ +'"></pre>'});var s=e("<div>"+t+"</div>").find(n);if(!s.length){this._error();return}t=s.html().replace(/<pre class="?nyroModalScript"? rel="?([0-9]*)"?><\/pre>/gi,function(e,t,n){return r[t]}).replace(/nyroModalLN/gi,"\r\n")}this.elts.hidden.append(this._filterScripts(t)).prepend(this.header).append(this.footer).wrapInner(e("<div />",{"class":"nyroModal"+ucfirst(this.loadFilter)})),this.sizes.initW=this.sizes.w=this.elts.hidden.width(),this.sizes.initH=this.sizes.h=this.elts.hidden.height();var o=this.getInternal()._getOuter(this.elts.cont);this.sizes.hMargin=o.h.total,this.sizes.wMargin=o.w.total,this.size(),this.loading=!1,this._callFilters("filledContent"),this._contentLoading()},_filterScripts:function(t){if(typeof t!="string")return t;this._scripts=[],this._scriptsShown=[];var n=0,r="<script",i="</script>",s=i.length,o,u,a;while((o=t.indexOf(r,n))>-1){u=t.indexOf(i)+s,a=e(t.substring(o,u));if(!a.attr("src")||a.attr("rel")=="forceLoad")a.attr("rev")=="shown"?this._scriptsShown.push(a.get(0)):this._scripts
.push(a.get(0));t=t.substring(0,o)+t.substr(u),n=o}return t},_hasFilter:function(t){var n=!1;return e.each(this.filters,function(e,r){n=n||r==t}),n},_delFilter:function(t){this.filters=e.map(this.filters,function(e){if(e!=t)return e})},_callFilters:function(t,n){this.getInternal()._debug(t);var r=[],i=this;return e.each(this.filters,function(e,s){r[s]=i._callFilter(s,t,n)}),this.callbacks[t]&&e.isFunction(this.callbacks[t])&&this.callbacks[t](this,n),r},_callFilter:function(n,r,i){return h[n]&&h[n][r]&&e.isFunction(h[n][r])?h[n][r](this,i):t},_callAnim:function(t,n){this.getInternal()._debug(t),this._callFilters("before"+ucfirst(t));if(!this._animated){this._animated=!0,e.isFunction(n)||(n=e.noop);if(this.anims[t]&&e.isFunction(this.anims[t]))curFct=this.anims[t];else{var r=this.anim[t]||this.anim.def||"basic";if(!c[r]||!c[r][t]||!e.isFunction(c[r][t]))r="basic";curFct=c[r][t]}curFct(this,e.proxy(function(){this._animated=!1,this._callFilters("after"+ucfirst(t)),n()},this))}},_load:function(){this.getInternal()._debug("_load"),!this.loading&&this.loadFilter&&(this.loading=!0,this._callFilter(this.loadFilter,"load"))},_contentLoading:function(){if(!this._animated&&this._bgReady){!this._transition&&this.elts.cont.html().length>0&&(this._transition=!0),this._nbContentLoading++;if(!this.loading){if(!this._opened){this._opened=!0;if(this._transition){var t=e.proxy(function(){this._writeContent(),this._callFilters("beforeShowCont"),this._callAnim("hideTrans",e.proxy(function(){this._transition=!1,this._callFilters("afterShowCont"),this.elts.cont.append(this._scriptsShown),this._reposition(),this.elts.cont.scrollTop(0)},this))},this);this._nbContentLoading==1?(this._unreposition(),this._callAnim("showTrans",t)):t()}else this._callAnim("hideLoad",e.proxy(function(){this._writeContent(),this._callAnim("showCont",e.proxy(function(){this.elts.cont.append(this._scriptsShown),this._reposition(),this.elts.cont.scrollTop(0)},this))},this))}}else if(this._nbContentLoading==1){var n=this.getInternal()._getOuter(this.elts.load);this.elts.load.css({position:"fixed",top:(this.getInternal().fullSize.viewH-this.elts.load.height()-n.h.margin)/2,left:(this.getInternal().fullSize.viewW-this.elts.load.width()-n.w.margin)/2}),this._transition?(this._unreposition(),this._callAnim("showTrans",e.proxy(function(){this._contentLoading()},this))):this._callAnim("showLoad",e.proxy(function(){this._contentLoading()},this))}}},_writeContent:function(){this.elts.cont.empty().append(this.elts.hidden.contents()).append(this._scripts).append(this.showCloseButton?this.closeButton:"").css({position:"fixed",width:this.sizes.w,height:this.sizes.h,top:(this.getInternal().fullSize.viewH-this.sizes.h-this.sizes.hMargin)/2,left:(this.getInternal().fullSize.viewW-this.sizes.w-this.sizes.wMargin)/2})},_reposition:function(){var t=this.elts.cont.find(".nmReposition");if(t.length){var n=this.getInternal()._getSpaceReposition();t.each(function(){var t=e(this),r=t.offset();t.css({position:"fixed",top:r.top-n.top,left:r.left-n.left})}),this.elts.cont.after(t)}this.elts.cont.css("overflow","auto"),this._callFilters("afterReposition")},_unreposition:function(){this.elts.cont.css("overflow","");var e=this.elts.all.find(".nmReposition");e.length&&this.elts.cont.append(e.removeAttr("style")),this._callFilters("afterUnreposition")}},l={firstInit:!0,debug:!1,stack:[],fullSize:{w:0,h:0,wW:0,wH:0,viewW:0,viewH:0},nyroModal:function(t,n){return l.firstInit&&(l._container=e("<div />").appendTo(u),s.smartresize(e.proxy(l._resize,l)),o.on("keydown.nyroModal",e.proxy(l._keyHandler,l)),l._calculateFullSize(),l.firstInit=!1),this.nmInit(t,n).each(function(){l._init(e(this).data("nmObj"))})},nmInit:function(t,n){return this.each(function(){var r=e(this);n?r.data("nmObj",e.extend(!0,{opener:r},t)):r.data("nmObj",r.data("nmObj")?e.extend(!0,r.data("nmObj"),t):e.extend(!0,{opener:r},f,t))})},nmDestroy:function(){return this.each(function(){var t=e(this);t.data("nmObj")&&t.data("nmObj").destroy()&&t.removeData("nmObj")})},nmCall:function(){return this.trigger("nyroModal")},nmManual:function(t,n){e("<a />",{href:t}).nyroModal(n).trigger("nyroModal")},nmData:function(t,n){this.nmManual("#",e.extend({data:t},n))},nmObj:function(t){e.extend(!0,f,t)},nmInternal:function(t){e.extend(!0,l,t)},nmAnims:function(t){e.extend(!0,c,t)},nmFilters:function(t){e.extend(!0,h,t)},nmTop:function(){return l.stack.length?l.stack[l.stack.length-1].nmObj:t},_debug:function(e){this.debug&&window.console&&window.console.log&&window.console.log(e)},_container:t,_init:function(t){t.filters=[],e.each(h,function(n,r){r.is&&e.isFunction(r.is)&&r.is(t)&&t.filters.push(n)}),t._callFilters("initFilters"),t._callFilters("init"),t.opener.off("nyroModal.nyroModal nmClose.nyroModal nmResize.nyroModal").on({"nyroModal.nyroModal":function(){return t.open(),!1},"nmClose.nyroModal":function(){return t.close(),!1},"nmResize.nyroModal":function(){return t.resize(),!1}})},_selNyroModal:function(t){return e(t).data("nmObj")?!0:!1},_selNyroModalOpen:function(t){var n=e(t);return n.data("nmObj")?n.data("nmObj")._open:!1},_keyHandler:function(t){var n=e.nmTop();if(n&&n.useKeyHandler)return n.keyHandle(t)},_pushStack:function(t){this.stack=e.map(this.stack,function(e){if(e["nmOpener"]!=t.get(0))return e}),this.stack.push({nmOpener:t.get(0),nmObj:e(t).data("nmObj")})},_removeStack:function(t){this.stack=e.map(this.stack,function(e){if(e["nmOpener"]!=t.get(0))return e})},_resize:function(){var t=e(":nmOpen").each(function(){e(this).data("nmObj")._unreposition()});this._calculateFullSize(),t.trigger("nmResize")},_calculateFullSize:function(){this.fullSize={w:o.width(),h:o.height(),wW:s.width(),wH:s.height()},this.fullSize.viewW=Math.min(this.fullSize.w,this.fullSize.wW),this.fullSize.viewH=Math.min(this.fullSize.h,this.fullSize.wH)},_getCurCSS:function(t,n){var r=parseInt(e.css(t,n,!0));return isNaN(r)?0:r},_getOuter:function(e){e=e.get(0);var t={h:{margin:this._getCurCSS(e,"marginTop")+this._getCurCSS(e,"marginBottom"
),border:this._getCurCSS(e,"borderTopWidth")+this._getCurCSS(e,"borderBottomWidth"),padding:this._getCurCSS(e,"paddingTop")+this._getCurCSS(e,"paddingBottom")},w:{margin:this._getCurCSS(e,"marginLeft")+this._getCurCSS(e,"marginRight"),border:this._getCurCSS(e,"borderLeftWidth")+this._getCurCSS(e,"borderRightWidth"),padding:this._getCurCSS(e,"paddingLeft")+this._getCurCSS(e,"paddingRight")}};return t.h.outer=t.h.margin+t.h.border,t.w.outer=t.w.margin+t.w.border,t.h.inner=t.h.padding+t.h.border,t.w.inner=t.w.padding+t.w.border,t.h.total=t.h.outer+t.h.padding,t.w.total=t.w.outer+t.w.padding,t},_getSpaceReposition:function(){var e=this._getOuter(u),t=i.msie&&i.version<8&&!(screen.height<=s.height()+23);return{top:s.scrollTop()-(t?0:e.h.border/2),left:s.scrollLeft()-(t?0:e.w.border/2)}},_getHash:function(e){if(typeof e=="string"){var t=e.indexOf("#");if(t>-1)return e.substring(t)}return""},_extractUrl:function(e){var n={url:t,sel:t};if(e){var r=this._getHash(e),i=this._getHash(window.location.href),s=window.location.href.substring(0,window.location.href.length-i.length),o=e.substring(0,e.length-r.length);n.sel=r,o!=s&&o!=a&&(n.url=o)}return n}},c={basic:{showBg:function(e,t){e.elts.bg.css({opacity:.7}).show(),t()},hideBg:function(e,t){e.elts.bg.hide(),t()},showLoad:function(e,t){e.elts.load.show(),t()},hideLoad:function(e,t){e.elts.load.hide(),t()},showCont:function(e,t){e.elts.cont.show(),t()},hideCont:function(e,t){e.elts.cont.hide(),t()},showTrans:function(e,t){e.elts.cont.hide(),e.elts.load.show(),t()},hideTrans:function(e,t){e.elts.cont.show(),e.elts.load.hide(),t()},resize:function(e,t){console.log("[_animations::resize]",e.sizes),e.elts.cont.css({width:e.sizes.w,height:e.sizes.h,top:(e.getInternal().fullSize.viewH-e.sizes.h-e.sizes.hMargin)/2,left:(e.getInternal().fullSize.viewW-e.sizes.w-e.sizes.wMargin)/2}),t()}}},h={basic:{is:function(e){return!0},init:function(e){e.opener.attr("rev")=="modal"&&(e.modal=!0),e.modal&&(e.closeOnEscape=e.closeOnClick=e.showCloseButton=!1),e.closeOnEscape&&(e.useKeyHandler=!0)},initElts:function(e){e.elts.bg.addClass("nyroModalBg"),e.closeOnClick&&e.elts.bg.off("click.nyroModal").on("click.nyroModal",function(t){t.preventDefault(),e.close()}),e.elts.cont.addClass("nyroModalCont"),e.elts.hidden.addClass("nyroModalCont nyroModalHidden"),e.elts.load.addClass("nyroModalCont nyroModalLoad")},error:function(e){e.elts.hidden.addClass("nyroModalError"),e.elts.cont.addClass("nyroModalError"),e._setCont(e.errorMsg)},beforeShowCont:function(t){t.elts.cont.find(".nyroModal").each(function(){var n=e(this);n.nyroModal(t.getForNewLinks(n),!0)}).end().find(".nyroModalClose").on("click.nyroModal",function(e){e.preventDefault(),t.close()})},keyHandle:function(e){e.keyEvent.keyCode==27&&e.closeOnEscape&&(e.keyEvent.preventDefault(),e.close())}},custom:{is:function(e){return!0}}};e.fn.extend({nm:l.nyroModal,nyroModal:l.nyroModal,nmInit:l.nmInit,nmDestroy:l.nmDestroy,nmCall:l.nmCall}),e.extend({nmManual:l.nmManual,nmData:l.nmData,nmObj:l.nmObj,nmInternal:l.nmInternal,nmAnims:l.nmAnims,nmFilters:l.nmFilters,nmTop:l.nmTop}),e.expr[":"].nyroModal=e.expr[":"].nm=l._selNyroModal,e.expr[":"].nmOpen=l._selNyroModalOpen}),function(e,t){var n=function(e,t,n){var r;return function(){function u(){n||e.apply(s,o),r=null}var s=this,o=arguments;r?clearTimeout(r):n&&e.apply(s,o),r=setTimeout(u,t||100)}};jQuery.fn[t]=function(e){return e?this.on("resize",n(e)):this.trigger(t)}}(jQuery,"smartresize"),jQuery(function(e,t){e.nmAnims({fade:{showBg:function(e,t){e.elts.bg.fadeTo(250,.7,t)},hideBg:function(e,t){e.elts.bg.fadeOut(t)},showLoad:function(e,t){e.elts.load.fadeIn(t)},hideLoad:function(e,t){e.elts.load.fadeOut(t)},showCont:function(e,t){e.elts.cont.fadeIn(t)},hideCont:function(e,t){e.elts.cont.css("overflow","hidden").fadeOut(t)},showTrans:function(e,t){console.log("[showTrans]",e.elts),e.elts.load.css({position:e.elts.cont.css("position"),top:e.elts.cont.css("top"),left:e.elts.cont.css("left"),width:e.elts.cont.css("width"),height:e.elts.cont.css("height"),marginTop:e.elts.cont.css("marginTop"),marginLeft:e.elts.cont.css("marginLeft")}).fadeIn(function(){e.elts.cont.hide(),t()})},hideTrans:function(e,t){e.elts.cont.css("visibility","hidden").show(),e.elts.load.css("position",e.elts.cont.css("position")).animate({top:e.elts.cont.css("top"),left:e.elts.cont.css("left"),width:e.elts.cont.css("width"),height:e.elts.cont.css("height"),marginTop:e.elts.cont.css("marginTop"),marginLeft:e.elts.cont.css("marginLeft")},function(){e.elts.cont.css("visibility",""),e.elts.load.fadeOut(t)})},resize:function(e,t){console.log("[resize]",e.sizes),e.elts.cont.animate({width:e.sizes.w,height:e.sizes.h,top:(e.getInternal().fullSize.viewH-e.sizes.h-e.sizes.hMargin)/2,left:(e.getInternal().fullSize.viewW-e.sizes.w-e.sizes.wMargin)/2},t)}}}),e.nmObj({anim:{def:"fade"}})}),jQuery(function(e,t){e.nmFilters({title:{is:function(e){return e.opener.is("[title]")},beforeShowCont:function(t){var n=t.elts.cont.offset();t.store.title=e("<h1 />",{text:t.opener.attr("title")}).addClass("nyroModalTitle nmReposition"),t.elts.cont.prepend(t.store.title)},close:function(e){e.store.title&&(e.store.title.remove(),e.store.title=t,delete e.store.title)}}})}),jQuery(function(e,t){e.nmFilters({gallery:{is:function(t){var n=t.opener.is("[rel]:not([rel=external], [rel=nofollow])");if(n){var r=t.opener.attr("rel"),i=r.indexOf(" "),s=i>0?r.substr(0,i):r,o=e('[href][rel="'+s+'"], [href][rel^="'+s+' "]');o.length<2&&(n=!1),n&&t.galleryCounts&&!t._hasFilter("title")&&t.filters.push("title")}return n},init:function(e){e.useKeyHandler=!0},keyHandle:function(e){if(!e._animated&&e._opened)if(e.keyEvent.keyCode==39||e.keyEvent.keyCode==40)e.keyEvent.preventDefault(),e._callFilters("galleryNext");else if(e.keyEvent.keyCode==37||e.keyEvent.keyCode==38)e.keyEvent.preventDefault(),e._callFilters("galleryPrev")},initElts:function(t){var n=t.opener.attr("rel"),r=n.indexOf(" ");t.store.gallery=r>0?n.substr(0,r):n,t.store.galleryLinks=e('[href][rel="'+
t.store.gallery+'"], [href][rel^="'+t.store.gallery+' "]'),t.store.galleryIndex=t.store.galleryLinks.index(t.opener)},beforeShowCont:function(e){if(e.galleryCounts&&e.store.title&&e.store.galleryLinks&&e.store.galleryLinks.length>1){var t=e.store.title.html();e.store.title.html((t.length?t+" - ":"")+(e.store.galleryIndex+1)+"/"+e.store.galleryLinks.length)}},filledContent:function(t){var n=this._getGalleryLink(t,-1),r=t.elts.hidden.find(" > div");n&&e("<a />",{text:"previous",href:"#"}).addClass("nyroModalPrev").on("click",function(e){e.preventDefault(),t._callFilters("galleryPrev")}).appendTo(r),n=this._getGalleryLink(t,1),n&&e("<a />",{text:"next",href:"#"}).addClass("nyroModalNext").on("click",function(e){e.preventDefault(),t._callFilters("galleryNext")}).appendTo(r)},close:function(e){e.store.gallery=t,e.store.galleryLinks=t,e.store.galleryIndex=t,delete e.store.gallery,delete e.store.galleryLinks,delete e.store.galleryIndex,e.elts.cont&&e.elts.cont.find(".nyroModalNext, .nyroModalPrev").remove()},galleryNext:function(e){this._getGalleryLink(e,1).nyroModal(e.getForNewLinks(),!0).click()},galleryPrev:function(e){this._getGalleryLink(e,-1).nyroModal(e.getForNewLinks(),!0).click()},_getGalleryLink:function(e,n){if(e.store.gallery){e.ltr||(n*=-1);var r=e.store.galleryIndex+n;if(e.store.galleryLinks&&r>=0&&r<e.store.galleryLinks.length)return e.store.galleryLinks.eq(r);if(e.galleryLoop&&e.store.galleryLinks)return e.store.galleryLinks.eq(r<0?e.store.galleryLinks.length-1:0)}return t}}})}),jQuery(function(e,t){e.nmFilters({link:{is:function(e){var t=e.opener.is("[href]");return t&&(e.store.link=e.getInternal()._extractUrl(e.opener.attr("href"))),t},init:function(e){e.loadFilter="link",e.opener.off("click.nyroModal").on("click.nyroModal",function(t){t.preventDefault(),e.opener.trigger("nyroModal")})},load:function(n){e.ajax(e.extend(!0,{},n.ajax||{},{url:n.store.link.url,data:n.store.link.sel?[{name:n.selIndicator,value:n.store.link.sel.substring(1)}]:t,success:function(e){n._setCont(e,n.store.link.sel)},error:function(e){n._error(e)}}))},destroy:function(e){e.opener.off("click.nyroModal")}}})}),jQuery(function(e,t){e.nmFilters({dom:{is:function(e){return e._hasFilter("link")&&!e.store.link.url&&e.store.link.sel},init:function(e){e.loadFilter="dom"},load:function(t){t.store.domEl=e(t.store.link.sel),t.store.domEl.length?t._setCont(t.domCopy?t.store.domEl.html():t.store.domEl.contents()):t._error()},close:function(e){!e.domCopy&&e.store.domEl&&e.elts.cont&&e.store.domEl.append(e.elts.cont.find(".nyroModalDom").contents())}}})}),jQuery(function(e,t){e.nmFilters({data:{is:function(e){var t=e.data?!0:!1;return t&&e._delFilter("dom"),t},init:function(e){console.log("[dom::is]"),e.loadFilter="data"},load:function(e){console.log("[dom::is]"),e._setCont(e.data)}}})}),jQuery(function(e,t){e.nmFilters({image:{is:function(e){return(new RegExp(e.imageRegex,"i")).test(e.opener.attr("href"))},init:function(e){e.loadFilter="image"},load:function(t){var n=t.opener.attr("href");e("<img />").load(function(){t.elts.cont.addClass("nyroModalImg"),t.elts.hidden.addClass("nyroModalImg"),t._setCont(this)}).error(function(){t._error()}).attr("src",n)},size:function(e){if(e.sizes.w!=e.sizes.initW||e.sizes.h!=e.sizes.initH){var t=Math.min(e.sizes.w/e.sizes.initW,e.sizes.h/e.sizes.initH);e.sizes.w=e.sizes.initW*t,e.sizes.h=e.sizes.initH*t}var n=e.loading?e.elts.hidden.find("img"):e.elts.cont.find("img");n.attr({width:e.sizes.w,height:e.sizes.h})},close:function(e){e.elts.cont&&(e.elts.cont.removeClass("nyroModalImg"),e.elts.hidden.removeClass("nyroModalImg"))}}})}),jQuery(function(e,t){e.nmFilters({swf:{idCounter:1,is:function(e){return e._hasFilter("link")&&e.opener.is('[href$=".swf"]')},init:function(e){e.loadFilter="swf"},load:function(t){t.swfObjectId||(t.swfObjectId="nyroModalSwf-"+this.idCounter++);var n=t.store.link.url,r='<div><object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" id="'+t.swfObjectId+'" width="'+t.sizes.w+'" height="'+t.sizes.h+'"><param name="movie" value="'+n+'"></param>',i="";e.each(t.swf,function(e,t){r+='<param name="'+e+'" value="'+t+'"></param>',i+=" "+e+'="'+t+'"'}),r+='<embed src="'+n+'" type="application/x-shockwave-flash" width="'+t.sizes.w+'" height="'+t.sizes.h+'"'+i+"></embed></object></div>",t._setCont(r)}}})}),jQuery(function(e,t){e.nmFilters({form:{is:function(e){var t=e.opener.is("form");return t&&(e.store.form=e.getInternal()._extractUrl(e.opener.attr("action"))),t},init:function(e){e.loadFilter="form",e.opener.off("submit.nyroModal").on("submit.nyroModal",function(t){t.preventDefault(),e.opener.trigger("nyroModal")})},load:function(n){var r={};e.map(n.opener.serializeArray(),function(e){r[e.name]=e.value}),n.store.form.sel&&(r[n.selIndicator]=n.store.form.sel.substring(1)),e.ajax(e.extend(!0,{type:"get",dataType:"text"},n.ajax||{},{url:n.store.form.url,data:r,type:n.opener.attr("method")?n.opener.attr("method"):t,success:function(e){n._setCont(e,n.store.form.sel)},error:function(e){n._error(e)}}))},destroy:function(e){e.opener.off("submit.nyroModal")}}})}),jQuery(function(e,t){e.nmFilters({formFile:{is:function(e){var t=e.opener.is('form[enctype="multipart/form-data"]');return t&&(e._delFilter("form"),e.store.form||(e.store.form=e.getInternal()._extractUrl(e.opener.attr("action")))),t},init:function(e){e.loadFilter="formFile",e.store.formFileLoading=!1,e.opener.off("submit.nyroModal").on("submit.nyroModal",function(t){e.store.formFileIframe?e.store.formFileLoading=!0:(t.preventDefault(),e.opener.trigger("nyroModal"))})},initElts:function(n){function i(){r&&(r.remove(),r=t,delete r),n.store.formFileIframe.attr("src","about:blank").remove(),n.store.formFileIframe=t,delete n.store.formFileIframe}var r;n.store.form.sel&&(r=e('<input type="hidden" />',{name:n.selIndicator,value:n.store.form.sel.substring(1)}).appendTo(n.opener)),n.store.formFileIframe=e("<iframe />").attr({name:"nyroModalFormFile",src:"javascript:'';",id:"nyromodal-iframe-"+(new Date).getTime(),frameborder:"0"
}).hide().load(function(){if(n.store.formFileLoading){n.store.formFileLoading=!1;var e=n.store.formFileIframe.off("load error").contents().find("body").not("script[src]");if(e&&e.html()&&e.html().length)i(),n._setCont(e.html(),n.store.form.sel);else{var t=0,r=function(){t++;var e=n.store.formFileIframe.off("load error").contents().find("body").not("script[src]");e&&e.html()&&e.html().length?(n._setCont(e.html(),n.store.form.sel),i()):t<5?setTimeout(r,25):(i(),n._error())};setTimeout(r,25)}}}).on("error",function(){i(),n._error()}),n.elts.all.append(n.store.formFileIframe),n.opener.attr("target","nyroModalFormFile").submit()},close:function(e){e.store.formFileLoading=!1,e.store.formFileIframe&&(e.store.formFileIframe.remove(),e.store.formFileIframe=t,delete e.store.formFileIframe)},destroy:function(e){e.opener.off("submit.nyroModal")}}})}),jQuery(function(e,t){e.nmFilters({iframe:{is:function(e){var t=e.opener.attr("target")||"",n=e.opener.attr("rel")||"",r=e.opener.get(0);return!e._hasFilter("image")&&(t.toLowerCase()=="_blank"||n.toLowerCase().indexOf("external")>-1||r.hostname&&r.hostname.replace(/:\d*$/,"")!=window.location.hostname.replace(/:\d*$/,""))},init:function(e){e.loadFilter="iframe"},load:function(t){t.store.iframe=e("<iframe />").attr({src:"javascript:'';",id:"nyromodal-iframe-"+(new Date).getTime(),frameborder:"0"}),t._setCont(t.store.iframe)},afterShowCont:function(e){e.store.iframe.attr("src",e.opener.attr("href"))},close:function(e){e.store.iframe&&(e.store.iframe.remove(),e.store.iframe=t,delete e.store.iframe)}}})}),jQuery(function(e,t){e.nmFilters({iframeForm:{is:function(e){var t=e._hasFilter("iframe")&&e.opener.is("form");return t&&(e._delFilter("iframe"),e._delFilter("form")),t},init:function(e){e.loadFilter="iframeForm",e.store.iframeFormLoading=!1,e.store.iframeFormOrgTarget=e.opener.attr("target"),e.opener.off("submit.nyroModal").on("submit.nyroModal",function(t){e.store.iframeFormIframe?e.store.iframeFormLoading=!0:(t.preventDefault(),e.opener.trigger("nyroModal"))})},load:function(t){t.store.iframeFormIframe=e("<iframe />").attr({name:"nyroModalIframeForm",src:"javascript:'';",id:"nyromodal-iframe-"+(new Date).getTime(),frameborder:"0"}),t._setCont(t.store.iframeFormIframe)},afterShowCont:function(e){e.opener.attr("target","nyroModalIframeForm").submit()},close:function(e){e.store.iframeFormOrgTarget?e.opener.attr("target",e.store.iframeFormOrgTarget):e.opener.removeAttr("target"),delete e.store.formFileLoading,delete e.store.iframeFormOrgTarget,e.store.iframeFormIframe&&(e.store.iframeFormIframe.remove(),e.store.iframeFormIframe=t,delete e.store.iframeFormIframe)},destroy:function(e){e.opener.off("submit.nyroModal")}}})}),jQuery(function(e,t){e.nmObj({embedlyUrl:"http://api.embed.ly/1/oembed",embedly:{key:t,wmode:"transparent",allowscripts:!0,format:"json"}});var n=[];e.nmFilters({embedly:{is:function(t){if(t._hasFilter("link")&&t._hasFilter("iframe")&&t.opener.attr("href")&&t.embedly.key){if(n[t.opener.attr("href")])return t.store.embedly=n[t.opener.attr("href")],t._delFilter("iframe"),!0;t.store.embedly=!1;var r=t.embedly;r.url=t.opener.attr("href"),e.ajax({url:t.embedlyUrl,dataType:"jsonp",data:r,success:function(e){e.type!="error"&&e.html&&(t.store.embedly=e,n[t.opener.attr("href")]=e,t._delFilter("iframe"),t.filters.push("embedly"),t._callFilters("initFilters"),t._callFilters("init"))}})}return!1},init:function(e){e.loadFilter="embedly"},load:function(t){t.store.embedly.type=="photo"?(t.filters.push("image"),e("<img />").load(function(){t.elts.cont.addClass("nyroModalImg"),t.elts.hidden.addClass("nyroModalImg"),t._setCont(this)}).on("error",function(){t._error()}).attr("src",t.store.embedly.url)):t._setCont("<div>"+t.store.embedly.html+"</div>")},size:function(e){e.store.embedly.width&&!e.sizes.height&&(e.sizes.w=e.store.embedly.width,e.sizes.h=e.store.embedly.height)}}})});
//     Underscore.js 1.5.1
//     http://underscorejs.org
//     (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
!function(){var n=this,t=n._,r={},e=Array.prototype,u=Object.prototype,i=Function.prototype,a=e.push,o=e.slice,c=e.concat,l=u.toString,f=u.hasOwnProperty,s=e.forEach,p=e.map,v=e.reduce,h=e.reduceRight,d=e.filter,g=e.every,m=e.some,y=e.indexOf,b=e.lastIndexOf,x=Array.isArray,_=Object.keys,w=i.bind,j=function(n){return n instanceof j?n:this instanceof j?(this._wrapped=n,void 0):new j(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=j),exports._=j):n._=j,j.VERSION="1.5.1";var A=j.each=j.forEach=function(n,t,e){if(null!=n)if(s&&n.forEach===s)n.forEach(t,e);else if(n.length===+n.length){for(var u=0,i=n.length;i>u;u++)if(t.call(e,n[u],u,n)===r)return}else for(var a in n)if(j.has(n,a)&&t.call(e,n[a],a,n)===r)return};j.map=j.collect=function(n,t,r){var e=[];return null==n?e:p&&n.map===p?n.map(t,r):(A(n,function(n,u,i){e.push(t.call(r,n,u,i))}),e)};var E="Reduce of empty array with no initial value";j.reduce=j.foldl=j.inject=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),v&&n.reduce===v)return e&&(t=j.bind(t,e)),u?n.reduce(t,r):n.reduce(t);if(A(n,function(n,i,a){u?r=t.call(e,r,n,i,a):(r=n,u=!0)}),!u)throw new TypeError(E);return r},j.reduceRight=j.foldr=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),h&&n.reduceRight===h)return e&&(t=j.bind(t,e)),u?n.reduceRight(t,r):n.reduceRight(t);var i=n.length;if(i!==+i){var a=j.keys(n);i=a.length}if(A(n,function(o,c,l){c=a?a[--i]:--i,u?r=t.call(e,r,n[c],c,l):(r=n[c],u=!0)}),!u)throw new TypeError(E);return r},j.find=j.detect=function(n,t,r){var e;return O(n,function(n,u,i){return t.call(r,n,u,i)?(e=n,!0):void 0}),e},j.filter=j.select=function(n,t,r){var e=[];return null==n?e:d&&n.filter===d?n.filter(t,r):(A(n,function(n,u,i){t.call(r,n,u,i)&&e.push(n)}),e)},j.reject=function(n,t,r){return j.filter(n,function(n,e,u){return!t.call(r,n,e,u)},r)},j.every=j.all=function(n,t,e){t||(t=j.identity);var u=!0;return null==n?u:g&&n.every===g?n.every(t,e):(A(n,function(n,i,a){return(u=u&&t.call(e,n,i,a))?void 0:r}),!!u)};var O=j.some=j.any=function(n,t,e){t||(t=j.identity);var u=!1;return null==n?u:m&&n.some===m?n.some(t,e):(A(n,function(n,i,a){return u||(u=t.call(e,n,i,a))?r:void 0}),!!u)};j.contains=j.include=function(n,t){return null==n?!1:y&&n.indexOf===y?n.indexOf(t)!=-1:O(n,function(n){return n===t})},j.invoke=function(n,t){var r=o.call(arguments,2),e=j.isFunction(t);return j.map(n,function(n){return(e?t:n[t]).apply(n,r)})},j.pluck=function(n,t){return j.map(n,function(n){return n[t]})},j.where=function(n,t,r){return j.isEmpty(t)?r?void 0:[]:j[r?"find":"filter"](n,function(n){for(var r in t)if(t[r]!==n[r])return!1;return!0})},j.findWhere=function(n,t){return j.where(n,t,!0)},j.max=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.max.apply(Math,n);if(!t&&j.isEmpty(n))return-1/0;var e={computed:-1/0,value:-1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a>e.computed&&(e={value:n,computed:a})}),e.value},j.min=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.min.apply(Math,n);if(!t&&j.isEmpty(n))return 1/0;var e={computed:1/0,value:1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a<e.computed&&(e={value:n,computed:a})}),e.value},j.shuffle=function(n){var t,r=0,e=[];return A(n,function(n){t=j.random(r++),e[r-1]=e[t],e[t]=n}),e};var F=function(n){return j.isFunction(n)?n:function(t){return t[n]}};j.sortBy=function(n,t,r){var e=F(t);return j.pluck(j.map(n,function(n,t,u){return{value:n,index:t,criteria:e.call(r,n,t,u)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index<t.index?-1:1}),"value")};var k=function(n,t,r,e){var u={},i=F(null==t?j.identity:t);return A(n,function(t,a){var o=i.call(r,t,a,n);e(u,o,t)}),u};j.groupBy=function(n,t,r){return k(n,t,r,function(n,t,r){(j.has(n,t)?n[t]:n[t]=[]).push(r)})},j.countBy=function(n,t,r){return k(n,t,r,function(n,t){j.has(n,t)||(n[t]=0),n[t]++})},j.sortedIndex=function(n,t,r,e){r=null==r?j.identity:F(r);for(var u=r.call(e,t),i=0,a=n.length;a>i;){var o=i+a>>>1;r.call(e,n[o])<u?i=o+1:a=o}return i},j.toArray=function(n){return n?j.isArray(n)?o.call(n):n.length===+n.length?j.map(n,j.identity):j.values(n):[]},j.size=function(n){return null==n?0:n.length===+n.length?n.length:j.keys(n).length},j.first=j.head=j.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:o.call(n,0,t)},j.initial=function(n,t,r){return o.call(n,0,n.length-(null==t||r?1:t))},j.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:o.call(n,Math.max(n.length-t,0))},j.rest=j.tail=j.drop=function(n,t,r){return o.call(n,null==t||r?1:t)},j.compact=function(n){return j.filter(n,j.identity)};var R=function(n,t,r){return t&&j.every(n,j.isArray)?c.apply(r,n):(A(n,function(n){j.isArray(n)||j.isArguments(n)?t?a.apply(r,n):R(n,t,r):r.push(n)}),r)};j.flatten=function(n,t){return R(n,t,[])},j.without=function(n){return j.difference(n,o.call(arguments,1))},j.uniq=j.unique=function(n,t,r,e){j.isFunction(t)&&(e=r,r=t,t=!1);var u=r?j.map(n,r,e):n,i=[],a=[];return A(u,function(r,e){(t?e&&a[a.length-1]===r:j.contains(a,r))||(a.push(r),i.push(n[e]))}),i},j.union=function(){return j.uniq(j.flatten(arguments,!0))},j.intersection=function(n){var t=o.call(arguments,1);return j.filter(j.uniq(n),function(n){return j.every(t,function(t){return j.indexOf(t,n)>=0})})},j.difference=function(n){var t=c.apply(e,o.call(arguments,1));return j.filter(n,function(n){return!j.contains(t,n)})},j.zip=function(){for(var n=j.max(j.pluck(arguments,"length").concat(0)),t=new Array(n),r=0;n>r;r++)t[r]=j.pluck(arguments,""+r);return t},j.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},j.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=j.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}if(y&&n.indexOf===y)return n.indexOf(t,r);for(;u>e;e++)if(n[e]===t)return e;return-1},j.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=null!=r;if(b&&n.lastIndexOf===b)return e?n.lastIndexOf(t,r):n.lastIndexOf(t);for(var u=e?r:n.length;u--;)if(n[u]===t)return u;return-1},j.range=function(n,t,r){arguments.length<=1&&(t=n||0,n=0),r=arguments[2]||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=0,i=new Array(e);e>u;)i[u++]=n,n+=r;return i};var M=function(){};j.bind=function(n,t){var r,e;if(w&&n.bind===w)return w.apply(n,o.call(arguments,1));if(!j.isFunction(n))throw new TypeError;return r=o.call(arguments,2),e=function(){if(!(this instanceof e))return n.apply(t,r.concat(o.call(arguments)));M.prototype=n.prototype;var u=new M;M.prototype=null;var i=n.apply(u,r.concat(o.call(arguments)));return Object(i)===i?i:u}},j.partial=function(n){var t=o.call(arguments,1);return function(){return n.apply(this,t.concat(o.call(arguments)))}},j.bindAll=function(n){var t=o.call(arguments,1);if(0===t.length)throw new Error("bindAll must be passed function names");return A(t,function(t){n[t]=j.bind(n[t],n)}),n},j.memoize=function(n,t){var r={};return t||(t=j.identity),function(){var e=t.apply(this,arguments);return j.has(r,e)?r[e]:r[e]=n.apply(this,arguments)}},j.delay=function(n,t){var r=o.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},j.defer=function(n){return j.delay.apply(j,[n,1].concat(o.call(arguments,1)))},j.throttle=function(n,t,r){var e,u,i,a=null,o=0;r||(r={});var c=function(){o=r.leading===!1?0:new Date,a=null,i=n.apply(e,u)};return function(){var l=new Date;o||r.leading!==!1||(o=l);var f=t-(l-o);return e=this,u=arguments,0>=f?(clearTimeout(a),a=null,o=l,i=n.apply(e,u)):a||r.trailing===!1||(a=setTimeout(c,f)),i}},j.debounce=function(n,t,r){var e,u=null;return function(){var i=this,a=arguments,o=function(){u=null,r||(e=n.apply(i,a))},c=r&&!u;return clearTimeout(u),u=setTimeout(o,t),c&&(e=n.apply(i,a)),e}},j.once=function(n){var t,r=!1;return function(){return r?t:(r=!0,t=n.apply(this,arguments),n=null,t)}},j.wrap=function(n,t){return function(){var r=[n];return a.apply(r,arguments),t.apply(this,r)}},j.compose=function(){var n=arguments;return function(){for(var t=arguments,r=n.length-1;r>=0;r--)t=[n[r].apply(this,t)];return t[0]}},j.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},j.keys=_||function(n){if(n!==Object(n))throw new TypeError("Invalid object");var t=[];for(var r in n)j.has(n,r)&&t.push(r);return t},j.values=function(n){var t=[];for(var r in n)j.has(n,r)&&t.push(n[r]);return t},j.pairs=function(n){var t=[];for(var r in n)j.has(n,r)&&t.push([r,n[r]]);return t},j.invert=function(n){var t={};for(var r in n)j.has(n,r)&&(t[n[r]]=r);return t},j.functions=j.methods=function(n){var t=[];for(var r in n)j.isFunction(n[r])&&t.push(r);return t.sort()},j.extend=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]=t[r]}),n},j.pick=function(n){var t={},r=c.apply(e,o.call(arguments,1));return A(r,function(r){r in n&&(t[r]=n[r])}),t},j.omit=function(n){var t={},r=c.apply(e,o.call(arguments,1));for(var u in n)j.contains(r,u)||(t[u]=n[u]);return t},j.defaults=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]===void 0&&(n[r]=t[r])}),n},j.clone=function(n){return j.isObject(n)?j.isArray(n)?n.slice():j.extend({},n):n},j.tap=function(n,t){return t(n),n};var S=function(n,t,r,e){if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return n===t;n instanceof j&&(n=n._wrapped),t instanceof j&&(t=t._wrapped);var u=l.call(n);if(u!=l.call(t))return!1;switch(u){case"[object String]":return n==String(t);case"[object Number]":return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case"[object Date]":case"[object Boolean]":return+n==+t;case"[object RegExp]":return n.source==t.source&&n.global==t.global&&n.multiline==t.multiline&&n.ignoreCase==t.ignoreCase}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]==n)return e[i]==t;var a=n.constructor,o=t.constructor;if(a!==o&&!(j.isFunction(a)&&a instanceof a&&j.isFunction(o)&&o instanceof o))return!1;r.push(n),e.push(t);var c=0,f=!0;if("[object Array]"==u){if(c=n.length,f=c==t.length)for(;c--&&(f=S(n[c],t[c],r,e)););}else{for(var s in n)if(j.has(n,s)&&(c++,!(f=j.has(t,s)&&S(n[s],t[s],r,e))))break;if(f){for(s in t)if(j.has(t,s)&&!c--)break;f=!c}}return r.pop(),e.pop(),f};j.isEqual=function(n,t){return S(n,t,[],[])},j.isEmpty=function(n){if(null==n)return!0;if(j.isArray(n)||j.isString(n))return 0===n.length;for(var t in n)if(j.has(n,t))return!1;return!0},j.isElement=function(n){return!(!n||1!==n.nodeType)},j.isArray=x||function(n){return"[object Array]"==l.call(n)},j.isObject=function(n){return n===Object(n)},A(["Arguments","Function","String","Number","Date","RegExp"],function(n){j["is"+n]=function(t){return l.call(t)=="[object "+n+"]"}}),j.isArguments(arguments)||(j.isArguments=function(n){return!(!n||!j.has(n,"callee"))}),"function"!=typeof/./&&(j.isFunction=function(n){return"function"==typeof n}),j.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},j.isNaN=function(n){return j.isNumber(n)&&n!=+n},j.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"==l.call(n)},j.isNull=function(n){return null===n},j.isUndefined=function(n){return n===void 0},j.has=function(n,t){return f.call(n,t)},j.noConflict=function(){return n._=t,this},j.identity=function(n){return n},j.times=function(n,t,r){for(var e=Array(Math.max(0,n)),u=0;n>u;u++)e[u]=t.call(r,u);return e},j.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))};var I={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"}};I.unescape=j.invert(I.escape);var T={escape:new RegExp("["+j.keys(I.escape).join("")+"]","g"),unescape:new RegExp("("+j.keys(I.unescape).join("|")+")","g")};j.each(["escape","unescape"],function(n){j[n]=function(t){return null==t?"":(""+t).replace(T[n],function(t){return I[n][t]})}}),j.result=function(n,t){if(null==n)return void 0;var r=n[t];return j.isFunction(r)?r.call(n):r},j.mixin=function(n){A(j.functions(n),function(t){var r=j[t]=n[t];j.prototype[t]=function(){var n=[this._wrapped];return a.apply(n,arguments),z.call(this,r.apply(j,n))}})};var N=0;j.uniqueId=function(n){var t=++N+"";return n?n+t:t},j.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var q=/(.)^/,B={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\t|\u2028|\u2029/g;j.template=function(n,t,r){var e;r=j.defaults({},r,j.templateSettings);var u=new RegExp([(r.escape||q).source,(r.interpolate||q).source,(r.evaluate||q).source].join("|")+"|$","g"),i=0,a="__p+='";n.replace(u,function(t,r,e,u,o){return a+=n.slice(i,o).replace(D,function(n){return"\\"+B[n]}),r&&(a+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'"),e&&(a+="'+\n((__t=("+e+"))==null?'':__t)+\n'"),u&&(a+="';\n"+u+"\n__p+='"),i=o+t.length,t}),a+="';\n",r.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{e=new Function(r.variable||"obj","_",a)}catch(o){throw o.source=a,o}if(t)return e(t,j);var c=function(n){return e.call(this,n,j)};return c.source="function("+(r.variable||"obj")+"){\n"+a+"}",c},j.chain=function(n){return j(n).chain()};var z=function(n){return this._chain?j(n).chain():n};j.mixin(j),A(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=e[n];j.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!=n&&"splice"!=n||0!==r.length||delete r[0],z.call(this,r)}}),A(["concat","join","slice"],function(n){var t=e[n];j.prototype[n]=function(){return z.call(this,t.apply(this._wrapped,arguments))}}),j.extend(j.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}.call(this);

/*! elastic.js - v1.1.1 - 2013-05-31
 * https://github.com/fullscale/elastic.js
 * Copyright (c) 2013 FullScale Labs, LLC; Licensed MIT */

!function(){"use strict";var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F=this,G=F&&F.ejs,H=Array.prototype,I=Object.prototype,J=H.slice,K=I.toString,L=I.hasOwnProperty,M=H.forEach,N=Array.isArray,O=H.indexOf,P={};E="undefined"!=typeof exports?exports:F.ejs={},a=function(a,b){return L.call(a,b)},b=function(b,c,d){if(null!=b)if(M&&b.forEach===M)b.forEach(c,d);else if(b.length===+b.length){for(var e=0,f=b.length;f>e;e++)if(c.call(d,b[e],e,b)===P)return}else for(var g in b)if(a(b,g)&&c.call(d,b[g],g,b)===P)return},c=function(a){return b(J.call(arguments,1),function(b){for(var c in b)a[c]=b[c]}),a},d=function(a,b){if(null==a)return-1;var c=0,d=a.length;if(O&&a.indexOf===O)return a.indexOf(b);for(;d>c;c++)if(a[c]===b)return c;return-1},e=function(b,c){var e,f,h={};for(e in b)a(b,e)&&-1===d(c,e)&&(f=b[e],g(f)&&(f=f.join()),h[e]=f);return h},f=function(b,c){var d,f=e(b,c),g=[];for(d in f)a(f,d)&&g.push(d+"="+encodeURIComponent(f[d]));return g.join("&")},g=N||function(a){return"[object Array]"===K.call(a)},h=function(a){return a===Object(a)},i=function(a){return"[object String]"===K.call(a)},j=function(a){return"[object Number]"===K.call(a)},k="function"!=typeof/./?function(a){return"function"==typeof a}:function(a){return"[object Function]"===K.call(a)},l=function(b){return h(b)&&a(b,"_type")&&a(b,"_self")&&a(b,"toString")},m=function(a){return l(a)&&"query"===a._type()},n=function(a){return l(a)&&"rescore"===a._type()},o=function(a){return l(a)&&"filter"===a._type()},p=function(a){return l(a)&&"facet"===a._type()},q=function(a){return l(a)&&"script field"===a._type()},r=function(a){return l(a)&&"geo point"===a._type()},s=function(a){return l(a)&&"indexed shape"===a._type()},t=function(a){return l(a)&&"shape"===a._type()},u=function(a){return l(a)&&"sort"===a._type()},v=function(a){return l(a)&&"highlight"===a._type()},w=function(a){return l(a)&&"suggest"===a._type()},x=function(a){return l(a)&&"generator"===a._type()},y=function(a){return l(a)&&"cluster health"===a._type()},z=function(a){return l(a)&&"cluster state"===a._type()},A=function(a){return l(a)&&"node stats"===a._type()},B=function(a){return l(a)&&"node info"===a._type()},C=function(a){return l(a)&&"request"===a._type()},D=function(a){return l(a)&&"multi search request"===a._type()},E.DateHistogramFacet=function(a){var b={};return b[a]={date_histogram:{}},{field:function(c){return null==c?b[a].date_histogram.field:(b[a].date_histogram.field=c,this)},keyField:function(c){return null==c?b[a].date_histogram.key_field:(b[a].date_histogram.key_field=c,this)},valueField:function(c){return null==c?b[a].date_histogram.value_field:(b[a].date_histogram.value_field=c,this)},interval:function(c){return null==c?b[a].date_histogram.interval:(b[a].date_histogram.interval=c,this)},timeZone:function(c){return null==c?b[a].date_histogram.time_zone:(b[a].date_histogram.time_zone=c,this)},preZone:function(c){return null==c?b[a].date_histogram.pre_zone:(b[a].date_histogram.pre_zone=c,this)},preZoneAdjustLargeInterval:function(c){return null==c?b[a].date_histogram.pre_zone_adjust_large_interval:(b[a].date_histogram.pre_zone_adjust_large_interval=c,this)},postZone:function(c){return null==c?b[a].date_histogram.post_zone:(b[a].date_histogram.post_zone=c,this)},preOffset:function(c){return null==c?b[a].date_histogram.pre_offset:(b[a].date_histogram.pre_offset=c,this)},postOffset:function(c){return null==c?b[a].date_histogram.post_offset:(b[a].date_histogram.post_offset=c,this)},factor:function(c){return null==c?b[a].date_histogram.factor:(b[a].date_histogram.factor=c,this)},valueScript:function(c){return null==c?b[a].date_histogram.value_script:(b[a].date_histogram.value_script=c,this)},order:function(c){return null==c?b[a].date_histogram.order:(c=c.toLowerCase(),("time"===c||"count"===c||"total"===c)&&(b[a].date_histogram.order=c),this)},lang:function(c){return null==c?b[a].date_histogram.lang:(b[a].date_histogram.lang=c,this)},params:function(c){return null==c?b[a].date_histogram.params:(b[a].date_histogram.params=c,this)},facetFilter:function(c){if(null==c)return b[a].facet_filter;if(!o(c))throw new TypeError("Argument must be a Filter");return b[a].facet_filter=c._self(),this},global:function(c){return null==c?b[a].global:(b[a].global=c,this)},mode:function(c){return null==c?b[a].mode:(c=c.toLowerCase(),("collector"===c||"post"===c)&&(b[a].mode=c),this)},scope:function(){return this},cacheFilter:function(c){return null==c?b[a].cache_filter:(b[a].cache_filter=c,this)},nested:function(c){return null==c?b[a].nested:(b[a].nested=c,this)},toString:function(){return JSON.stringify(b)},_type:function(){return"facet"},_self:function(){return b}}},E.FilterFacet=function(a){var b={};return b[a]={},{filter:function(c){if(null==c)return b[a].filter;if(!o(c))throw new TypeError("Argument must be a Filter");return b[a].filter=c._self(),this},facetFilter:function(c){if(null==c)return b[a].facet_filter;if(!o(c))throw new TypeError("Argument must be a Filter");return b[a].facet_filter=c._self(),this},global:function(c){return null==c?b[a].global:(b[a].global=c,this)},mode:function(c){return null==c?b[a].mode:(c=c.toLowerCase(),("collector"===c||"post"===c)&&(b[a].mode=c),this)},scope:function(){return this},cacheFilter:function(c){return null==c?b[a].cache_filter:(b[a].cache_filter=c,this)},nested:function(c){return null==c?b[a].nested:(b[a].nested=c,this)},toString:function(){return JSON.stringify(b)},_type:function(){return"facet"},_self:function(){return b}}},E.GeoDistanceFacet=function(a){var b={},c=E.GeoPoint([0,0]),d="location";return b[a]={geo_distance:{location:c._self(),ranges:[]}},{field:function(c){var e=b[a].geo_distance[d];return null==c?d:(delete b[a].geo_distance[d],d=c,b[a].geo_distance[c]=e,this)},point:function(e){if(null==e)return c;if(!r(e))throw new TypeError("Argument must be a GeoPoint");return c=e,b[a].geo_distance[d]=e._self(),this},addRange:function(c,d){return 0===arguments.length?b[a].geo_distance.ranges:(b[a].geo_distance.ranges.push({from:c,to:d}),this)},addUnboundedFrom:function(c){return null==c?b[a].geo_distance.ranges:(b[a].geo_distance.ranges.push({from:c}),this)},addUnboundedTo:function(c){return null==c?b[a].geo_distance.ranges:(b[a].geo_distance.ranges.push({to:c}),this)},unit:function(c){return null==c?b[a].geo_distance.unit:(c=c.toLowerCase(),("mi"===c||"km"===c)&&(b[a].geo_distance.unit=c),this)},distanceType:function(c){return null==c?b[a].geo_distance.distance_type:(c=c.toLowerCase(),("arc"===c||"plane"===c)&&(b[a].geo_distance.distance_type=c),this)},normalize:function(c){return null==c?b[a].geo_distance.normalize:(b[a].geo_distance.normalize=c,this)},valueField:function(c){return null==c?b[a].geo_distance.value_field:(b[a].geo_distance.value_field=c,this)},valueScript:function(c){return null==c?b[a].geo_distance.value_script:(b[a].geo_distance.value_script=c,this)},lang:function(c){return null==c?b[a].geo_distance.lang:(b[a].geo_distance.lang=c,this)},params:function(c){return null==c?b[a].geo_distance.params:(b[a].geo_distance.params=c,this)},facetFilter:function(c){if(null==c)return b[a].facet_filter;if(!o(c))throw new TypeError("Argument must be a Filter");return b[a].facet_filter=c._self(),this},global:function(c){return null==c?b[a].global:(b[a].global=c,this)},mode:function(c){return null==c?b[a].mode:(c=c.toLowerCase(),("collector"===c||"post"===c)&&(b[a].mode=c),this)},scope:function(){return this},cacheFilter:function(c){return null==c?b[a].cache_filter:(b[a].cache_filter=c,this)},nested:function(c){return null==c?b[a].nested:(b[a].nested=c,this)},toString:function(){return JSON.stringify(b)},_type:function(){return"facet"},_self:function(){return b}}},E.HistogramFacet=function(a){var b={};return b[a]={histogram:{}},{field:function(c){return null==c?b[a].histogram.field:(b[a].histogram.field=c,this)},interval:function(c){return null==c?b[a].histogram.interval:(b[a].histogram.interval=c,this)},timeInterval:function(c){return null==c?b[a].histogram.time_interval:(b[a].histogram.time_interval=c,this)},from:function(c){return null==c?b[a].histogram.from:(b[a].histogram.from=c,this)},to:function(c){return null==c?b[a].histogram.to:(b[a].histogram.to=c,this)},valueField:function(c){return null==c?b[a].histogram.value_field:(b[a].histogram.value_field=c,this)},keyField:function(c){return null==c?b[a].histogram.key_field:(b[a].histogram.key_field=c,this)},valueScript:function(c){return null==c?b[a].histogram.value_script:(b[a].histogram.value_script=c,this)},keyScript:function(c){return null==c?b[a].histogram.key_script:(b[a].histogram.key_script=c,this)},lang:function(c){return null==c?b[a].histogram.lang:(b[a].histogram.lang=c,this)},params:function(c){return null==c?b[a].histogram.params:(b[a].histogram.params=c,this)},order:function(c){return null==c?b[a].histogram.order:(c=c.toLowerCase(),("key"===c||"count"===c||"total"===c)&&(b[a].histogram.order=c),this)},facetFilter:function(c){if(null==c)return b[a].facet_filter;if(!o(c))throw new TypeError("Argument must be a Filter");return b[a].facet_filter=c._self(),this},global:function(c){return null==c?b[a].global:(b[a].global=c,this)},mode:function(c){return null==c?b[a].mode:(c=c.toLowerCase(),("collector"===c||"post"===c)&&(b[a].mode=c),this)},scope:function(){return this},cacheFilter:function(c){return null==c?b[a].cache_filter:(b[a].cache_filter=c,this)},nested:function(c){return null==c?b[a].nested:(b[a].nested=c,this)},toString:function(){return JSON.stringify(b)},_type:function(){return"facet"},_self:function(){return b}}},E.QueryFacet=function(a){var b={};return b[a]={},{query:function(c){if(null==c)return b[a].query;if(!m(c))throw new TypeError("Argument must be a Query");return b[a].query=c._self(),this},facetFilter:function(c){if(null==c)return b[a].facet_filter;if(!o(c))throw new TypeError("Argumnet must be a Filter");return b[a].facet_filter=c._self(),this},global:function(c){return null==c?b[a].global:(b[a].global=c,this)},mode:function(c){return null==c?b[a].mode:(c=c.toLowerCase(),("collector"===c||"post"===c)&&(b[a].mode=c),this)},scope:function(){return this},cacheFilter:function(c){return null==c?b[a].cache_filter:(b[a].cache_filter=c,this)},nested:function(c){return null==c?b[a].nested:(b[a].nested=c,this)},toString:function(){return JSON.stringify(b)},_type:function(){return"facet"},_self:function(){return b}}},E.RangeFacet=function(a){var b={};return b[a]={range:{ranges:[]}},{field:function(c){return null==c?b[a].range.field:(b[a].range.field=c,this)},keyField:function(c){return null==c?b[a].range.key_field:(b[a].range.key_field=c,this)},valueField:function(c){return null==c?b[a].range.value_field:(b[a].range.value_field=c,this)},valueScript:function(c){return null==c?b[a].range.value_script:(b[a].range.value_script=c,this)},keyScript:function(c){return null==c?b[a].range.key_script:(b[a].range.key_script=c,this)},lang:function(c){return null==c?b[a].range.lang:(b[a].range.lang=c,this)},params:function(c){return null==c?b[a].range.params:(b[a].range.params=c,this)},addRange:function(c,d){return 0===arguments.length?b[a].range.ranges:(b[a].range.ranges.push({from:c,to:d}),this)},addUnboundedFrom:function(c){return null==c?b[a].range.ranges:(b[a].range.ranges.push({from:c}),this)},addUnboundedTo:function(c){return null==c?b[a].range.ranges:(b[a].range.ranges.push({to:c}),this)},facetFilter:function(c){if(null==c)return b[a].facet_filter;if(!o(c))throw new TypeError("Argument must be a Filter");return b[a].facet_filter=c._self(),this},global:function(c){return null==c?b[a].global:(b[a].global=c,this)},mode:function(c){return null==c?b[a].mode:(c=c.toLowerCase(),("collector"===c||"post"===c)&&(b[a].mode=c),this)},scope:function(){return this},cacheFilter:function(c){return null==c?b[a].cache_filter:(b[a].cache_filter=c,this)},nested:function(c){return null==c?b[a].nested:(b[a].nested=c,this)},toString:function(){return JSON.stringify(b)},_type:function(){return"facet"},_self:function(){return b}}},E.StatisticalFacet=function(a){var b={};return b[a]={statistical:{}},{field:function(c){return null==c?b[a].statistical.field:(b[a].statistical.field=c,this)},fields:function(c){if(null==c)return b[a].statistical.fields;if(!g(c))throw new TypeError("Argument must be an array");return b[a].statistical.fields=c,this},script:function(c){return null==c?b[a].statistical.script:(b[a].statistical.script=c,this)},lang:function(c){return null==c?b[a].statistical.lang:(b[a].statistical.lang=c,this)},params:function(c){return null==c?b[a].statistical.params:(b[a].statistical.params=c,this)},facetFilter:function(c){if(null==c)return b[a].facet_filter;if(!o(c))throw new TypeError("Argument must be a Filter");return b[a].facet_filter=c._self(),this},global:function(c){return null==c?b[a].global:(b[a].global=c,this)},mode:function(c){return null==c?b[a].mode:(c=c.toLowerCase(),("collector"===c||"post"===c)&&(b[a].mode=c),this)},scope:function(){return this},cacheFilter:function(c){return null==c?b[a].cache_filter:(b[a].cache_filter=c,this)},nested:function(c){return null==c?b[a].nested:(b[a].nested=c,this)},toString:function(){return JSON.stringify(b)},_type:function(){return"facet"},_self:function(){return b}}},E.TermStatsFacet=function(a){var b={};return b[a]={terms_stats:{}},{valueField:function(c){return null==c?b[a].terms_stats.value_field:(b[a].terms_stats.value_field=c,this)},keyField:function(c){return null==c?b[a].terms_stats.key_field:(b[a].terms_stats.key_field=c,this)},scriptField:function(c){return null==c?b[a].terms_stats.script_field:(b[a].terms_stats.script_field=c,this)},valueScript:function(c){return null==c?b[a].terms_stats.value_script:(b[a].terms_stats.value_script=c,this)},allTerms:function(c){return null==c?b[a].terms_stats.all_terms:(b[a].terms_stats.all_terms=c,this)},lang:function(c){return null==c?b[a].terms_stats.lang:(b[a].terms_stats.lang=c,this)},params:function(c){return null==c?b[a].terms_stats.params:(b[a].terms_stats.params=c,this)},size:function(c){return null==c?b[a].terms_stats.size:(b[a].terms_stats.size=c,this)},order:function(c){return null==c?b[a].terms_stats.order:(c=c.toLowerCase(),("count"===c||"term"===c||"reverse_count"===c||"reverse_term"===c||"total"===c||"reverse_total"===c||"min"===c||"reverse_min"===c||"max"===c||"reverse_max"===c||"mean"===c||"reverse_mean"===c)&&(b[a].terms_stats.order=c),this)},facetFilter:function(c){if(null==c)return b[a].facet_filter;if(!o(c))throw new TypeError("Argument must be a Filter");return b[a].facet_filter=c._self(),this},global:function(c){return null==c?b[a].global:(b[a].global=c,this)},mode:function(c){return null==c?b[a].mode:(c=c.toLowerCase(),("collector"===c||"post"===c)&&(b[a].mode=c),this)},scope:function(){return this},cacheFilter:function(c){return null==c?b[a].cache_filter:(b[a].cache_filter=c,this)},nested:function(c){return null==c?b[a].nested:(b[a].nested=c,this)},toString:function(){return JSON.stringify(b)},_type:function(){return"facet"},_self:function(){return b}}},E.TermsFacet=function(a){var b={};return b[a]={terms:{}},{field:function(c){return null==c?b[a].terms.field:(b[a].terms.field=c,this)},fields:function(c){if(null==c)return b[a].terms.fields;if(!g(c))throw new TypeError("Argument must be an array");return b[a].terms.fields=c,this},scriptField:function(c){return null==c?b[a].terms.script_field:(b[a].terms.script_field=c,this)},size:function(c){return null==c?b[a].terms.size:(b[a].terms.size=c,this)},order:function(c){return null==c?b[a].terms.order:(c=c.toLowerCase(),("count"===c||"term"===c||"reverse_count"===c||"reverse_term"===c)&&(b[a].terms.order=c),this)},allTerms:function(c){return null==c?b[a].terms.all_terms:(b[a].terms.all_terms=c,this)},exclude:function(c){if(null==b[a].terms.exclude&&(b[a].terms.exclude=[]),null==c)return b[a].terms.exclude;if(i(c))b[a].terms.exclude.push(c);else{if(!g(c))throw new TypeError("Argument must be string or array");b[a].terms.exclude=c}return this},regex:function(c){return null==c?b[a].terms.regex:(b[a].terms.regex=c,this)},regexFlags:function(c){return null==c?b[a].terms.regex_flags:(b[a].terms.regex_flags=c,this)},script:function(c){return null==c?b[a].terms.script:(b[a].terms.script=c,this)},lang:function(c){return null==c?b[a].terms.lang:(b[a].terms.lang=c,this)},params:function(c){return null==c?b[a].terms.params:(b[a].terms.params=c,this)},executionHint:function(c){return null==c?b[a].terms.execution_hint:(b[a].terms.execution_hint=c,this)},facetFilter:function(c){if(null==c)return b[a].facet_filter;if(!o(c))throw new TypeError("Argument must be a Filter");return b[a].facet_filter=c._self(),this},global:function(c){return null==c?b[a].global:(b[a].global=c,this)},mode:function(c){return null==c?b[a].mode:(c=c.toLowerCase(),("collector"===c||"post"===c)&&(b[a].mode=c),this)},scope:function(){return this},cacheFilter:function(c){return null==c?b[a].cache_filter:(b[a].cache_filter=c,this)},nested:function(c){return null==c?b[a].nested:(b[a].nested=c,this)},toString:function(){return JSON.stringify(b)},_type:function(){return"facet"},_self:function(){return b}}},E.AndFilter=function(a){var b,c,d={and:{filters:[]}};if(o(a))d.and.filters.push(a._self());else{if(!g(a))throw new TypeError("Argument must be a Filter or Array of Filters");for(b=0,c=a.length;c>b;b++){if(!o(a[b]))throw new TypeError("Array must contain only Filter objects");d.and.filters.push(a[b]._self())}}return{filters:function(a){var b,c;if(null==a)return d.and.filters;if(o(a))d.and.filters.push(a._self());else{if(!g(a))throw new TypeError("Argument must be a Filter or an Array of Filters");for(d.and.filters=[],b=0,c=a.length;c>b;b++){if(!o(a[b]))throw new TypeError("Array must contain only Filter objects");d.and.filters.push(a[b]._self())}}return this},name:function(a){return null==a?d.and._name:(d.and._name=a,this)},cache:function(a){return null==a?d.and._cache:(d.and._cache=a,this)},cacheKey:function(a){return null==a?d.and._cache_key:(d.and._cache_key=a,this)},toString:function(){return JSON.stringify(d)},_type:function(){return"filter"},_self:function(){return d}}},E.BoolFilter=function(){var a={bool:{}};return{must:function(b){var c,d;if(null==a.bool.must&&(a.bool.must=[]),null==b)return a.bool.must;if(o(b))a.bool.must.push(b._self());else{if(!g(b))throw new TypeError("Argument must be a Filter or array of Filters");for(a.bool.must=[],c=0,d=b.length;d>c;c++){if(!o(b[c]))throw new TypeError("Argument must be an array of Filters");a.bool.must.push(b[c]._self())}}return this},mustNot:function(b){var c,d;if(null==a.bool.must_not&&(a.bool.must_not=[]),null==b)return a.bool.must_not;if(o(b))a.bool.must_not.push(b._self());else{if(!g(b))throw new TypeError("Argument must be a Filter or array of Filters");for(a.bool.must_not=[],c=0,d=b.length;d>c;c++){if(!o(b[c]))throw new TypeError("Argument must be an array of Filters");a.bool.must_not.push(b[c]._self())}}return this},should:function(b){var c,d;if(null==a.bool.should&&(a.bool.should=[]),null==b)return a.bool.should;if(o(b))a.bool.should.push(b._self());else{if(!g(b))throw new TypeError("Argument must be a Filter or array of Filters");for(a.bool.should=[],c=0,d=b.length;d>c;c++){if(!o(b[c]))throw new TypeError("Argument must be an array of Filters");a.bool.should.push(b[c]._self())}}return this},name:function(b){return null==b?a.bool._name:(a.bool._name=b,this)},cache:function(b){return null==b?a.bool._cache:(a.bool._cache=b,this)},cacheKey:function(b){return null==b?a.bool._cache_key:(a.bool._cache_key=b,this)},toString:function(){return JSON.stringify(a)},_type:function(){return"filter"},_self:function(){return a}}},E.ExistsFilter=function(a){var b={exists:{field:a}};return{field:function(a){return null==a?b.exists.field:(b.exists.field=a,this)},name:function(a){return null==a?b.exists._name:(b.exists._name=a,this)},toString:function(){return JSON.stringify(b)},_type:function(){return"filter"},_self:function(){return b}}},E.GeoBboxFilter=function(a){var b={geo_bounding_box:{}};return b.geo_bounding_box[a]={},{field:function(c){var d=b.geo_bounding_box[a];return null==c?a:(delete b.geo_bounding_box[a],a=c,b.geo_bounding_box[c]=d,this)},topLeft:function(c){if(null==c)return b.geo_bounding_box[a].top_left;if(!r(c))throw new TypeError("Argument must be a GeoPoint");return b.geo_bounding_box[a].top_left=c._self(),this},bottomRight:function(c){if(null==c)return b.geo_bounding_box[a].bottom_right;if(!r(c))throw new TypeError("Argument must be a GeoPoint");return b.geo_bounding_box[a].bottom_right=c._self(),this},type:function(a){return null==a?b.geo_bounding_box.type:(a=a.toLowerCase(),("memory"===a||"indexed"===a)&&(b.geo_bounding_box.type=a),this)},normalize:function(a){return null==a?b.geo_bounding_box.normalize:(b.geo_bounding_box.normalize=a,this)},name:function(a){return null==a?b.geo_bounding_box._name:(b.geo_bounding_box._name=a,this)},cache:function(a){return null==a?b.geo_bounding_box._cache:(b.geo_bounding_box._cache=a,this)},cacheKey:function(a){return null==a?b.geo_bounding_box._cache_key:(b.geo_bounding_box._cache_key=a,this)},toString:function(){return JSON.stringify(b)},_type:function(){return"filter"},_self:function(){return b}}},E.GeoDistanceFilter=function(a){var b={geo_distance:{}};return b.geo_distance[a]=[0,0],{field:function(c){var d=b.geo_distance[a];return null==c?a:(delete b.geo_distance[a],a=c,b.geo_distance[c]=d,this)},distance:function(a){if(null==a)return b.geo_distance.distance;if(!j(a))throw new TypeError("Argument must be a numeric value");return b.geo_distance.distance=a,this},unit:function(a){return null==a?b.geo_distance.unit:(a=a.toLowerCase(),("mi"===a||"km"===a)&&(b.geo_distance.unit=a),this)},point:function(c){if(null==c)return b.geo_distance[a];if(!r(c))throw new TypeError("Argument must be a GeoPoint");return b.geo_distance[a]=c._self(),this},distanceType:function(a){return null==a?b.geo_distance.distance_type:(a=a.toLowerCase(),("arc"===a||"plane"===a)&&(b.geo_distance.distance_type=a),this)},normalize:function(a){return null==a?b.geo_distance.normalize:(b.geo_distance.normalize=a,this)},optimizeBbox:function(a){return null==a?b.geo_distance.optimize_bbox:(a=a.toLowerCase(),("memory"===a||"indexed"===a||"none"===a)&&(b.geo_distance.optimize_bbox=a),this)},name:function(a){return null==a?b.geo_distance._name:(b.geo_distance._name=a,this)},cache:function(a){return null==a?b.geo_distance._cache:(b.geo_distance._cache=a,this)},cacheKey:function(a){return null==a?b.geo_distance._cache_key:(b.geo_distance._cache_key=a,this)},toString:function(){return JSON.stringify(b)},_type:function(){return"filter"},_self:function(){return b}}},E.GeoDistanceRangeFilter=function(a){var b={geo_distance_range:{}};return b.geo_distance_range[a]=[0,0],{field:function(c){var d=b.geo_distance_range[a];return null==c?a:(delete b.geo_distance_range[a],a=c,b.geo_distance_range[c]=d,this)},from:function(a){if(null==a)return b.geo_distance_range.from;if(!j(a))throw new TypeError("Argument must be a numeric value");return b.geo_distance_range.from=a,this},to:function(a){if(null==a)return b.geo_distance_range.to;if(!j(a))throw new TypeError("Argument must be a numeric value");return b.geo_distance_range.to=a,this},includeLower:function(a){return null==a?b.geo_distance_range.include_lower:(b.geo_distance_range.include_lower=a,this)},includeUpper:function(a){return null==a?b.geo_distance_range.include_upper:(b.geo_distance_range.include_upper=a,this)},gt:function(a){if(null==a)return b.geo_distance_range.gt;if(!j(a))throw new TypeError("Argument must be a numeric value");return b.geo_distance_range.gt=a,this},gte:function(a){if(null==a)return b.geo_distance_range.gte;if(!j(a))throw new TypeError("Argument must be a numeric value");return b.geo_distance_range.gte=a,this},lt:function(a){if(null==a)return b.geo_distance_range.lt;if(!j(a))throw new TypeError("Argument must be a numeric value");return b.geo_distance_range.lt=a,this},lte:function(a){if(null==a)return b.geo_distance_range.lte;if(!j(a))throw new TypeError("Argument must be a numeric value");return b.geo_distance_range.lte=a,this},unit:function(a){return null==a?b.geo_distance_range.unit:(a=a.toLowerCase(),("mi"===a||"km"===a)&&(b.geo_distance_range.unit=a),this)},point:function(c){if(null==c)return b.geo_distance_range[a];if(!r(c))throw new TypeError("Argument must be a GeoPoint");return b.geo_distance_range[a]=c._self(),this},distanceType:function(a){return null==a?b.geo_distance_range.distance_type:(a=a.toLowerCase(),("arc"===a||"plane"===a)&&(b.geo_distance_range.distance_type=a),this)},normalize:function(a){return null==a?b.geo_distance_range.normalize:(b.geo_distance_range.normalize=a,this)},optimizeBbox:function(a){return null==a?b.geo_distance_range.optimize_bbox:(a=a.toLowerCase(),("memory"===a||"indexed"===a||"none"===a)&&(b.geo_distance_range.optimize_bbox=a),this)},name:function(a){return null==a?b.geo_distance_range._name:(b.geo_distance_range._name=a,this)},cache:function(a){return null==a?b.geo_distance_range._cache:(b.geo_distance_range._cache=a,this)},cacheKey:function(a){return null==a?b.geo_distance_range._cache_key:(b.geo_distance_range._cache_key=a,this)},toString:function(){return JSON.stringify(b)},_type:function(){return"filter"},_self:function(){return b}}},E.GeoPolygonFilter=function(a){var b={geo_polygon:{}};return b.geo_polygon[a]={points:[]},{field:function(c){var d=b.geo_polygon[a];return null==c?a:(delete b.geo_polygon[a],a=c,b.geo_polygon[c]=d,this)},points:function(c){var d,e;if(null==c)return b.geo_polygon[a].points;if(r(c))b.geo_polygon[a].points.push(c._self());else{if(!g(c))throw new TypeError("Argument must be a GeoPoint or Array of GeoPoints");for(b.geo_polygon[a].points=[],d=0,e=c.length;e>d;d++){if(!r(c[d]))throw new TypeError("Argument must be Array of GeoPoints");b.geo_polygon[a].points.push(c[d]._self())}}return this},normalize:function(a){return null==a?b.geo_polygon.normalize:(b.geo_polygon.normalize=a,this)},name:function(a){return null==a?b.geo_polygon._name:(b.geo_polygon._name=a,this)},cache:function(a){return null==a?b.geo_polygon._cache:(b.geo_polygon._cache=a,this)},cacheKey:function(a){return null==a?b.geo_polygon._cache_key:(b.geo_polygon._cache_key=a,this)},toString:function(){return JSON.stringify(b)},_type:function(){return"filter"},_self:function(){return b}}},E.GeoShapeFilter=function(a){var b={geo_shape:{}};return b.geo_shape[a]={},{field:function(c){var d=b.geo_shape[a];return null==c?a:(delete b.geo_shape[a],a=c,b.geo_shape[c]=d,this)},shape:function(c){return null==c?b.geo_shape[a].shape:(null!=b.geo_shape[a].indexed_shape&&delete b.geo_shape[a].indexed_shape,b.geo_shape[a].shape=c._self(),this)},indexedShape:function(c){return null==c?b.geo_shape[a].indexed_shape:(null!=b.geo_shape[a].shape&&delete b.geo_shape[a].shape,b.geo_shape[a].indexed_shape=c._self(),this)},relation:function(c){return null==c?b.geo_shape[a].relation:(c=c.toLowerCase(),("intersects"===c||"disjoint"===c||"within"===c)&&(b.geo_shape[a].relation=c),this)},strategy:function(c){return null==c?b.geo_shape[a].strategy:(c=c.toLowerCase(),("recursive"===c||"term"===c)&&(b.geo_shape[a].strategy=c),this)},name:function(a){return null==a?b.geo_shape._name:(b.geo_shape._name=a,this)},cache:function(a){return null==a?b.geo_shape._cache:(b.geo_shape._cache=a,this)},cacheKey:function(a){return null==a?b.geo_shape._cache_key:(b.geo_shape._cache_key=a,this)},toString:function(){return JSON.stringify(b)},_type:function(){return"filter"},_self:function(){return b}}},E.HasChildFilter=function(a,b){if(!m(a))throw new TypeError("No Query object found");var c={has_child:{query:a._self(),type:b}};return{query:function(a){if(null==a)return c.has_child.query;if(!m(a))throw new TypeError("Argument must be a Query object");return c.has_child.query=a._self(),this},filter:function(a){if(null==a)return c.has_child.filter;if(!o(a))throw new TypeError("Argument must be a Filter object");return c.has_child.filter=a._self(),this},type:function(a){return null==a?c.has_child.type:(c.has_child.type=a,this)},scope:function(){return this},name:function(a){return null==a?c.has_child._name:(c.has_child._name=a,this)},cache:function(a){return null==a?c.has_child._cache:(c.has_child._cache=a,this)},cacheKey:function(a){return null==a?c.has_child._cache_key:(c.has_child._cache_key=a,this)},toString:function(){return JSON.stringify(c)},_type:function(){return"filter"},_self:function(){return c}}},E.HasParentFilter=function(a,b){if(!m(a))throw new TypeError("No Query object found");var c={has_parent:{query:a._self(),parent_type:b}};return{query:function(a){if(null==a)return c.has_parent.query;if(!m(a))throw new TypeError("Argument must be a Query object");return c.has_parent.query=a._self(),this},filter:function(a){if(null==a)return c.has_parent.filter;if(!o(a))throw new TypeError("Argument must be a Filter object");return c.has_parent.filter=a._self(),this},parentType:function(a){return null==a?c.has_parent.parent_type:(c.has_parent.parent_type=a,this)},scope:function(){return this},name:function(a){return null==a?c.has_parent._name:(c.has_parent._name=a,this)},cache:function(a){return null==a?c.has_parent._cache:(c.has_parent._cache=a,this)},cacheKey:function(a){return null==a?c.has_parent._cache_key:(c.has_parent._cache_key=a,this)},toString:function(){return JSON.stringify(c)},_type:function(){return"filter"},_self:function(){return c}}},E.IdsFilter=function(a){var b={ids:{}};if(i(a))b.ids.values=[a];else{if(!g(a))throw new TypeError("Argument must be a string or an array");b.ids.values=a}return{values:function(a){if(null==a)return b.ids.values;if(i(a))b.ids.values.push(a);else{if(!g(a))throw new TypeError("Argument must be a string or an array");b.ids.values=a}return this},type:function(a){if(null==b.ids.type&&(b.ids.type=[]),null==a)return b.ids.type;if(i(a))b.ids.type.push(a);else{if(!g(a))throw new TypeError("Argument must be a string or an array");b.ids.type=a}return this},name:function(a){return null==a?b.ids._name:(b.ids._name=a,this)},toString:function(){return JSON.stringify(b)},_type:function(){return"filter"},_self:function(){return b}}},E.IndicesFilter=function(a,b){if(!o(a))throw new TypeError("Argument must be a Filter");var c={indices:{filter:a._self()}};if(i(b))c.indices.indices=[b];else{if(!g(b))throw new TypeError("Argument must be a string or array");c.indices.indices=b}return{indices:function(a){if(null==a)return c.indices.indices;if(i(a))c.indices.indices.push(a);else{if(!g(a))throw new TypeError("Argument must be a string or array");c.indices.indices=a}return this},filter:function(a){if(null==a)return c.indices.filter;if(!o(a))throw new TypeError("Argument must be a Filter");return c.indices.filter=a._self(),this},noMatchFilter:function(a){if(null==a)return c.indices.no_match_filter;if(i(a))a=a.toLowerCase(),("none"===a||"all"===a)&&(c.indices.no_match_filter=a);else{if(!o(a))throw new TypeError("Argument must be string or Filter");c.indices.no_match_filter=a._self()}return this},toString:function(){return JSON.stringify(c)},_type:function(){return"filter"},_self:function(){return c}}},E.LimitFilter=function(a){var b={limit:{value:a}};return{value:function(a){if(null==a)return b.limit.value;if(!j(a))throw new TypeError("Argument must be a numeric value");return b.limit.value=a,this},toString:function(){return JSON.stringify(b)},_type:function(){return"filter"},_self:function(){return b}}},E.MatchAllFilter=function(){var a={match_all:{}};return{toString:function(){return JSON.stringify(a)},_type:function(){return"filter"},_self:function(){return a}}},E.MissingFilter=function(a){var b={missing:{field:a}};return{field:function(a){return null==a?b.missing.field:(b.missing.field=a,this)},existence:function(a){return null==a?b.missing.existence:(b.missing.existence=a,this)},nullValue:function(a){return null==a?b.missing.null_value:(b.missing.null_value=a,this)},name:function(a){return null==a?b.missing._name:(b.missing._name=a,this)},toString:function(){return JSON.stringify(b)},_type:function(){return"filter"},_self:function(){return b
}}},E.NestedFilter=function(a){var b={nested:{path:a}};return{path:function(a){return null==a?b.nested.path:(b.nested.path=a,this)},query:function(a){if(null==a)return b.nested.query;if(!m(a))throw new TypeError("Argument must be a Query object");return b.nested.query=a._self(),this},filter:function(a){if(null==a)return b.nested.filter;if(!o(a))throw new TypeError("Argument must be a Filter object");return b.nested.filter=a._self(),this},boost:function(a){return null==a?b.nested.boost:(b.nested.boost=a,this)},join:function(a){return null==a?b.nested.join:(b.nested.join=a,this)},scope:function(){return this},name:function(a){return null==a?b.nested._name:(b.nested._name=a,this)},cache:function(a){return null==a?b.nested._cache:(b.nested._cache=a,this)},cacheKey:function(a){return null==a?b.nested._cache_key:(b.nested._cache_key=a,this)},toString:function(){return JSON.stringify(b)},_type:function(){return"filter"},_self:function(){return b}}},E.NotFilter=function(a){if(!o(a))throw new TypeError("Argument must be a Filter");var b={not:a._self()};return{filter:function(a){if(null==a)return b.not;if(!o(a))throw new TypeError("Argument must be a Filter");return b.not=a._self(),this},name:function(a){return null==a?b.not._name:(b.not._name=a,this)},cache:function(a){return null==a?b.not._cache:(b.not._cache=a,this)},cacheKey:function(a){return null==a?b.not._cache_key:(b.not._cache_key=a,this)},toString:function(){return JSON.stringify(b)},_type:function(){return"filter"},_self:function(){return b}}},E.NumericRangeFilter=function(a){var b={numeric_range:{}};return b.numeric_range[a]={},{field:function(c){var d=b.numeric_range[a];return null==c?a:(delete b.numeric_range[a],a=c,b.numeric_range[a]=d,this)},from:function(c){if(null==c)return b.numeric_range[a].from;if(!j(c))throw new TypeError("Argument must be a numeric value");return b.numeric_range[a].from=c,this},to:function(c){if(null==c)return b.numeric_range[a].to;if(!j(c))throw new TypeError("Argument must be a numeric value");return b.numeric_range[a].to=c,this},includeLower:function(c){return null==c?b.numeric_range[a].include_lower:(b.numeric_range[a].include_lower=c,this)},includeUpper:function(c){return null==c?b.numeric_range[a].include_upper:(b.numeric_range[a].include_upper=c,this)},gt:function(c){if(null==c)return b.numeric_range[a].gt;if(!j(c))throw new TypeError("Argument must be a numeric value");return b.numeric_range[a].gt=c,this},gte:function(c){if(null==c)return b.numeric_range[a].gte;if(!j(c))throw new TypeError("Argument must be a numeric value");return b.numeric_range[a].gte=c,this},lt:function(c){if(null==c)return b.numeric_range[a].lt;if(!j(c))throw new TypeError("Argument must be a numeric value");return b.numeric_range[a].lt=c,this},lte:function(c){if(null==c)return b.numeric_range[a].lte;if(!j(c))throw new TypeError("Argument must be a numeric value");return b.numeric_range[a].lte=c,this},name:function(a){return null==a?b.numeric_range._name:(b.numeric_range._name=a,this)},cache:function(a){return null==a?b.numeric_range._cache:(b.numeric_range._cache=a,this)},cacheKey:function(a){return null==a?b.numeric_range._cache_key:(b.numeric_range._cache_key=a,this)},toString:function(){return JSON.stringify(b)},_type:function(){return"filter"},_self:function(){return b}}},E.OrFilter=function(a){var b,c,d;if(b={or:{filters:[]}},o(a))b.or.filters.push(a._self());else{if(!g(a))throw new TypeError("Argument must be a Filter or array of Filters");for(c=0,d=a.length;d>c;c++){if(!o(a[c]))throw new TypeError("Argument must be array of Filters");b.or.filters.push(a[c]._self())}}return{filters:function(a){var c,d;if(null==a)return b.or.filters;if(o(a))b.or.filters.push(a._self());else{if(!g(a))throw new TypeError("Argument must be a Filter or array of Filters");for(b.or.filters=[],c=0,d=a.length;d>c;c++){if(!o(a[c]))throw new TypeError("Argument must be an array of Filters");b.or.filters.push(a[c]._self())}}return this},name:function(a){return null==a?b.or._name:(b.or._name=a,this)},cache:function(a){return null==a?b.or._cache:(b.or._cache=a,this)},cacheKey:function(a){return null==a?b.or._cache_key:(b.or._cache_key=a,this)},toString:function(){return JSON.stringify(b)},_type:function(){return"filter"},_self:function(){return b}}},E.PrefixFilter=function(a,b){var c={prefix:{}};return c.prefix[a]=b,{field:function(b){var d=c.prefix[a];return null==b?a:(delete c.prefix[a],a=b,c.prefix[a]=d,this)},prefix:function(b){return null==b?c.prefix[a]:(c.prefix[a]=b,this)},name:function(a){return null==a?c.prefix._name:(c.prefix._name=a,this)},cache:function(a){return null==a?c.prefix._cache:(c.prefix._cache=a,this)},cacheKey:function(a){return null==a?c.prefix._cache_key:(c.prefix._cache_key=a,this)},toString:function(){return JSON.stringify(c)},_type:function(){return"filter"},_self:function(){return c}}},E.QueryFilter=function(a){if(!m(a))throw new TypeError("Argument must be a Query");var b={fquery:{query:a._self()}};return{query:function(a){if(null==a)return b.fquery.query;if(!m(a))throw new TypeError("Argument must be a Query");return b.fquery.query=a._self(),this},name:function(a){return null==a?b.fquery._name:(b.fquery._name=a,this)},cache:function(a){return null==a?b.fquery._cache:(b.fquery._cache=a,this)},cacheKey:function(a){return null==a?b.fquery._cache_key:(b.fquery._cache_key=a,this)},toString:function(){return JSON.stringify(b)},_type:function(){return"filter"},_self:function(){return b}}},E.RangeFilter=function(a){var b={range:{}};return b.range[a]={},{field:function(c){var d=b.range[a];return null==c?a:(delete b.range[a],a=c,b.range[c]=d,this)},from:function(c){return null==c?b.range[a].from:(b.range[a].from=c,this)},to:function(c){return null==c?b.range[a].to:(b.range[a].to=c,this)},includeLower:function(c){return null==c?b.range[a].include_lower:(b.range[a].include_lower=c,this)},includeUpper:function(c){return null==c?b.range[a].include_upper:(b.range[a].include_upper=c,this)},gt:function(c){return null==c?b.range[a].gt:(b.range[a].gt=c,this)},gte:function(c){return null==c?b.range[a].gte:(b.range[a].gte=c,this)},lt:function(c){return null==c?b.range[a].lt:(b.range[a].lt=c,this)},lte:function(c){return null==c?b.range[a].lte:(b.range[a].lte=c,this)},name:function(a){return null==a?b.range._name:(b.range._name=a,this)},cache:function(a){return null==a?b.range._cache:(b.range._cache=a,this)},cacheKey:function(a){return null==a?b.range._cache_key:(b.range._cache_key=a,this)},toString:function(){return JSON.stringify(b)},_type:function(){return"filter"},_self:function(){return b}}},E.RegexpFilter=function(a,b){var c={regexp:{}};return c.regexp[a]={value:b},{field:function(b){var d=c.regexp[a];return null==b?a:(delete c.regexp[a],a=b,c.regexp[b]=d,this)},value:function(b){return null==b?c.regexp[a].value:(c.regexp[a].value=b,this)},flags:function(b){return null==b?c.regexp[a].flags:(c.regexp[a].flags=b,this)},flagsValue:function(b){return null==b?c.regexp[a].flags_value:(c.regexp[a].flags_value=b,this)},name:function(a){return null==a?c.regexp._name:(c.regexp._name=a,this)},cache:function(a){return null==a?c.regexp._cache:(c.regexp._cache=a,this)},cacheKey:function(a){return null==a?c.regexp._cache_key:(c.regexp._cache_key=a,this)},toString:function(){return JSON.stringify(c)},_type:function(){return"filter"},_self:function(){return c}}},E.ScriptFilter=function(a){var b={script:{script:a}};return{script:function(a){return null==a?b.script.script:(b.script.script=a,this)},params:function(a){return null==a?b.script.params:(b.script.params=a,this)},lang:function(a){return null==a?b.script.lang:(b.script.lang=a,this)},name:function(a){return null==a?b.script._name:(b.script._name=a,this)},cache:function(a){return null==a?b.script._cache:(b.script._cache=a,this)},cacheKey:function(a){return null==a?b.script._cache_key:(b.script._cache_key=a,this)},toString:function(){return JSON.stringify(b)},_type:function(){return"filter"},_self:function(){return b}}},E.TermFilter=function(a,b){var c={term:{}};return c.term[a]=b,{field:function(b){var d=c.term[a];return null==b?a:(delete c.term[a],a=b,c.term[a]=d,this)},term:function(b){return null==b?c.term[a]:(c.term[a]=b,this)},name:function(a){return null==a?c.term._name:(c.term._name=a,this)},cache:function(a){return null==a?c.term._cache:(c.term._cache=a,this)},cacheKey:function(a){return null==a?c.term._cache_key:(c.term._cache_key=a,this)},toString:function(){return JSON.stringify(c)},_type:function(){return"filter"},_self:function(){return c}}},E.TermsFilter=function(a,b){var c={terms:{}},d=function(){g(c.terms[a])||(c.terms[a]=[])},e=function(){g(c.terms[a])&&(c.terms[a]={})};return c.terms[a]=g(b)?b:[b],{field:function(b){var d=c.terms[a];return null==b?a:(delete c.terms[a],a=b,c.terms[b]=d,this)},terms:function(b){return d(),null==b?c.terms[a]:(g(b)?c.terms[a]=b:c.terms[a].push(b),this)},index:function(b){return e(),null==b?c.terms[a].index:(c.terms[a].index=b,this)},type:function(b){return e(),null==b?c.terms[a].type:(c.terms[a].type=b,this)},id:function(b){return e(),null==b?c.terms[a].id:(c.terms[a].id=b,this)},path:function(b){return e(),null==b?c.terms[a].path:(c.terms[a].path=b,this)},execution:function(a){return null==a?c.terms.execution:(a=a.toLowerCase(),("plain"===a||"bool"===a||"bool_nocache"===a||"and"===a||"and_nocache"===a||"or"===a||"or_nocache"===a)&&(c.terms.execution=a),this)},name:function(a){return null==a?c.terms._name:(c.terms._name=a,this)},cache:function(a){return null==a?c.terms._cache:(c.terms._cache=a,this)},cacheKey:function(a){return null==a?c.terms._cache_key:(c.terms._cache_key=a,this)},toString:function(){return JSON.stringify(c)},_type:function(){return"filter"},_self:function(){return c}}},E.TypeFilter=function(a){var b={type:{value:a}};return{type:function(a){return null==a?b.type.value:(b.type.value=a,this)},toString:function(){return JSON.stringify(b)},_type:function(){return"filter"},_self:function(){return b}}},E.Document=function(a,b,c){var d={},j=["upsert","source","script","lang","params"];return{index:function(b){return null==b?a:(a=b,this)},type:function(a){return null==a?b:(b=a,this)},id:function(a){return null==a?c:(c=a,this)},routing:function(a){return null==a?d.routing:(d.routing=a,this)},parent:function(a){return null==a?d.parent:(d.parent=a,this)},timestamp:function(a){return null==a?d.timestamp:(d.timestamp=a,this)},ttl:function(a){return null==a?d.ttl:(d.ttl=a,this)},timeout:function(a){return null==a?d.timeout:(d.timeout=a,this)},refresh:function(a){return null==a?d.refresh:(d.refresh=a,this)},version:function(a){return null==a?d.version:(d.version=a,this)},versionType:function(a){return null==a?d.version_type:(a=a.toLowerCase(),("internal"===a||"external"===a)&&(d.version_type=a),this)},percolate:function(a){return null==a?d.percolate:(d.percolate=a,this)},opType:function(a){return null==a?d.op_type:(a=a.toLowerCase(),("index"===a||"create"===a)&&(d.op_type=a),this)},replication:function(a){return null==a?d.replication:(a=a.toLowerCase(),("async"===a||"sync"===a||"default"===a)&&(d.replication=a),this)},consistency:function(a){return null==a?d.consistency:(a=a.toLowerCase(),("default"===a||"one"===a||"quorum"===a||"all"===a)&&(d.consistency=a),this)},preference:function(a){return null==a?d.preference:(d.preference=a,this)},realtime:function(a){return null==a?d.realtime:(d.realtime=a,this)},fields:function(a){if(null==d.fields&&(d.fields=[]),null==a)return d.fields;if(i(a))d.fields.push(a);else{if(!g(a))throw new TypeError("Argument must be string or array");d.fields=a}return this},script:function(a){return null==a?d.script:(d.script=a,this)},lang:function(a){return null==a?d.lang:(d.lang=a,this)},params:function(a){if(null==a)return d.params;if(!h(a))throw new TypeError("Argument must be an object");return d.params=a,this},retryOnConflict:function(a){return null==a?d.retry_on_conflict:(d.retry_on_conflict=a,this)},upsert:function(a){if(null==a)return d.upsert;if(!h(a))throw new TypeError("Argument must be an object");return d.upsert=a,this},source:function(a){if(null==a)return d.source;if(!h(a))throw new TypeError("Argument must be an object");return d.source=a,this},toString:function(){return JSON.stringify(d)},_type:function(){return"document"},_self:function(){return d},doGet:function(f,g){if(null==E.client)throw new Error("No Client Set");if(null==a||null==b||null==c)throw new Error("Index, Type, and ID must be set");var h="/"+a+"/"+b+"/"+c;return E.client.get(h,e(d,j),f,g)},doIndex:function(e,g){if(null==E.client)throw new Error("No Client Set");if(null==a||null==b)throw new Error("Index and Type must be set");if(null==d.source)throw new Error("No source document found");var h,i="/"+a+"/"+b,k=JSON.stringify(d.source),l=f(d,j);return null!=c&&(i=i+"/"+c),""!==l&&(i=i+"?"+l),h=null==c?E.client.post(i,k,e,g):E.client.put(i,k,e,g)},doUpdate:function(e,g){if(null==E.client)throw new Error("No Client Set");if(null==a||null==b||null==c)throw new Error("Index, Type, and ID must be set");if(null==d.script&&null==d.source)throw new Error("Update script or document required");var h="/"+a+"/"+b+"/"+c+"/_update",i={},k=f(d,j);return""!==k&&(h=h+"?"+k),null!=d.script&&(i.script=d.script),null!=d.lang&&(i.lang=d.lang),null!=d.params&&(i.params=d.params),null!=d.upsert&&(i.upsert=d.upsert),null!=d.source&&(i.doc=d.source),E.client.post(h,JSON.stringify(i),e,g)},doDelete:function(e,g){if(null==E.client)throw new Error("No Client Set");if(null==a||null==b||null==c)throw new Error("Index, Type, and ID must be set");var h="/"+a+"/"+b+"/"+c,i="",k=f(d,j);return""!==k&&(h=h+"?"+k),E.client.del(h,i,e,g)}}},E.BoolQuery=function(){var a={bool:{}};return{must:function(b){var c,d;if(null==a.bool.must&&(a.bool.must=[]),null==b)return a.bool.must;if(m(b))a.bool.must.push(b._self());else{if(!g(b))throw new TypeError("Argument must be a Query or array of Queries");for(a.bool.must=[],c=0,d=b.length;d>c;c++){if(!m(b[c]))throw new TypeError("Argument must be an array of Queries");a.bool.must.push(b[c]._self())}}return this},mustNot:function(b){var c,d;if(null==a.bool.must_not&&(a.bool.must_not=[]),null==b)return a.bool.must_not;if(m(b))a.bool.must_not.push(b._self());else{if(!g(b))throw new TypeError("Argument must be a Query or array of Queries");for(a.bool.must_not=[],c=0,d=b.length;d>c;c++){if(!m(b[c]))throw new TypeError("Argument must be an array of Queries");a.bool.must_not.push(b[c]._self())}}return this},should:function(b){var c,d;if(null==a.bool.should&&(a.bool.should=[]),null==b)return a.bool.should;if(m(b))a.bool.should.push(b._self());else{if(!g(b))throw new TypeError("Argument must be a Query or array of Queries");for(a.bool.should=[],c=0,d=b.length;d>c;c++){if(!m(b[c]))throw new TypeError("Argument must be an array of Queries");a.bool.should.push(b[c]._self())}}return this},boost:function(b){return null==b?a.bool.boost:(a.bool.boost=b,this)},disableCoord:function(b){return null==b?a.bool.disable_coord:(a.bool.disable_coord=b,this)},minimumNumberShouldMatch:function(b){return null==b?a.bool.minimum_number_should_match:(a.bool.minimum_number_should_match=b,this)},toString:function(){return JSON.stringify(a)},_type:function(){return"query"},_self:function(){return a}}},E.BoostingQuery=function(a,b,c){if(!m(a)||!m(b))throw new TypeError("Arguments must be Queries");var d={boosting:{positive:a._self(),negative:b._self(),negative_boost:c}};return{positive:function(a){if(null==a)return d.boosting.positive;if(!m(a))throw new TypeError("Argument must be a Query");return d.boosting.positive=a._self(),this},negative:function(a){if(null==a)return d.boosting.negative;if(!m(a))throw new TypeError("Argument must be a Query");return d.boosting.negative=a._self(),this},negativeBoost:function(a){return null==a?d.boosting.negative_boost:(d.boosting.negative_boost=a,this)},boost:function(a){return null==a?d.boosting.boost:(d.boosting.boost=a,this)},toString:function(){return JSON.stringify(d)},_type:function(){return"query"},_self:function(){return d}}},E.CommonTermsQuery=function(a,b){var c={common:{}};return null==a&&(a="no_field_set"),c.common[a]={},null!=b&&(c.common[a].query=b),{field:function(b){var d=c.common[a];return null==b?a:(delete c.common[a],a=b,c.common[b]=d,this)},query:function(b){return null==b?c.common[a].query:(c.common[a].query=b,this)},analyzer:function(b){return null==b?c.common[a].analyzer:(c.common[a].analyzer=b,this)},disableCoord:function(b){return null==b?c.common[a].disable_coord:(c.common[a].disable_coord=b,this)},cutoffFrequency:function(b){return null==b?c.common[a].cutoff_frequency:(c.common[a].cutoff_frequency=b,this)},highFreqOperator:function(b){return null==b?c.common[a].high_freq_operator:(b=b.toLowerCase(),("and"===b||"or"===b)&&(c.common[a].high_freq_operator=b),this)},lowFreqOperator:function(b){return null==b?c.common[a].low_freq_operator:(b=b.toLowerCase(),("and"===b||"or"===b)&&(c.common[a].low_freq_operator=b),this)},minimumShouldMatch:function(b){return null==b?c.common[a].minimum_should_match:(c.common[a].minimum_should_match=b,this)},boost:function(b){return null==b?c.common[a].boost:(c.common[a].boost=b,this)},toString:function(){return JSON.stringify(c)},_type:function(){return"query"},_self:function(){return c}}},E.ConstantScoreQuery=function(){var a={constant_score:{}};return{query:function(b){if(null==b)return a.constant_score.query;if(!m(b))throw new TypeError("Argument must be a Query");return a.constant_score.query=b._self(),this},filter:function(b){if(null==b)return a.constant_score.filter;if(!o(b))throw new TypeError("Argument must be a Filter");return a.constant_score.filter=b._self(),this},cache:function(b){return null==b?a.constant_score._cache:(a.constant_score._cache=b,this)},cacheKey:function(b){return null==b?a.constant_score._cache_key:(a.constant_score._cache_key=b,this)},boost:function(b){return null==b?a.constant_score.boost:(a.constant_score.boost=b,this)},toString:function(){return JSON.stringify(a)},_type:function(){return"query"},_self:function(){return a}}},E.CustomBoostFactorQuery=function(a){if(!m(a))throw new TypeError("Argument must be a Query");var b={custom_boost_factor:{query:a._self()}};return{query:function(a){if(null==a)return b.custom_boost_factor.query;if(!m(a))throw new TypeError("Argument must be a Query");return b.custom_boost_factor.query=a._self(),this},boostFactor:function(a){return null==a?b.custom_boost_factor.boost_factor:(b.custom_boost_factor.boost_factor=a,this)},boost:function(a){return null==a?b.custom_boost_factor.boost:(b.custom_boost_factor.boost=a,this)},toString:function(){return JSON.stringify(b)},_type:function(){return"query"},_self:function(){return b}}},E.CustomFiltersScoreQuery=function(a,c){if(!m(a))throw new TypeError("Argument must be a Query");var d={custom_filters_score:{query:a._self(),filters:[]}},e=function(a){var b=null;return a.filter&&o(a.filter)&&(b={filter:a.filter._self()},a.boost?b.boost=a.boost:a.script?b.script=a.script:b=null),b};return b(g(c)?c:[c],function(a){var b=e(a);null!==b&&d.custom_filters_score.filters.push(b)}),{query:function(a){if(null==a)return d.custom_filters_score.query;if(!m(a))throw new TypeError("Argument must be a Query");return d.custom_filters_score.query=a._self(),this},filters:function(a){return null==a?d.custom_filters_score.filters:(g(a)&&(d.custom_filters_score.filters=[]),b(g(a)?a:[a],function(a){var b=e(a);null!==b&&d.custom_filters_score.filters.push(b)}),this)},scoreMode:function(a){return null==a?d.custom_filters_score.score_mode:(a=a.toLowerCase(),("first"===a||"min"===a||"max"===a||"total"===a||"avg"===a||"multiply"===a)&&(d.custom_filters_score.score_mode=a),this)},params:function(a){return null==a?d.custom_filters_score.params:(d.custom_filters_score.params=a,this)},lang:function(a){return null==a?d.custom_filters_score.lang:(d.custom_filters_score.lang=a,this)},maxBoost:function(a){return null==a?d.custom_filters_score.max_boost:(d.custom_filters_score.max_boost=a,this)},boost:function(a){return null==a?d.custom_filters_score.boost:(d.custom_filters_score.boost=a,this)},toString:function(){return JSON.stringify(d)},_type:function(){return"query"},_self:function(){return d}}},E.CustomScoreQuery=function(a,b){if(!m(a))throw new TypeError("Argument must be a Query");var c={custom_score:{query:a._self(),script:b}};return{query:function(a){if(null==a)return c.custom_score.query;if(!m(a))throw new TypeError("Argument must be a Query");return c.custom_score.query=a._self(),this},script:function(a){return null==a?c.custom_score.script:(c.custom_score.script=a,this)},params:function(a){return null==a?c.custom_score.params:(c.custom_score.params=a,this)},lang:function(a){return null==a?c.custom_score.lang:(c.custom_score.lang=a,this)},boost:function(a){return null==a?c.custom_score.boost:(c.custom_score.boost=a,this)},toString:function(){return JSON.stringify(c)},_type:function(){return"query"},_self:function(){return c}}},E.DisMaxQuery=function(){var a={dis_max:{}};return{queries:function(b){var c,d;if(null==b)return a.dis_max.queries;if(null==a.dis_max.queries&&(a.dis_max.queries=[]),m(b))a.dis_max.queries.push(b._self());else{if(!g(b))throw new TypeError("Argument must be a Query or array of Queries");for(a.dis_max.queries=[],c=0,d=b.length;d>c;c++){if(!m(b[c]))throw new TypeError("Argument must be array of Queries");a.dis_max.queries.push(b[c]._self())}}return this},boost:function(b){return null==b?a.dis_max.boost:(a.dis_max.boost=b,this)},tieBreaker:function(b){return null==b?a.dis_max.tie_breaker:(a.dis_max.tie_breaker=b,this)},toString:function(){return JSON.stringify(a)},_type:function(){return"query"},_self:function(){return a}}},E.FieldMaskingSpanQuery=function(a,b){if(!m(a))throw new TypeError("Argument must be a SpanQuery");var c={field_masking_span:{query:a._self(),field:b}};return{query:function(a){if(null==a)return c.field_masking_span.query;if(!m(a))throw new TypeError("Argument must be a SpanQuery");return c.field_masking_span.query=a._self(),this},field:function(a){return null==a?c.field_masking_span.field:(c.field_masking_span.field=a,this)},boost:function(a){return null==a?c.field_masking_span.boost:(c.field_masking_span.boost=a,this)},toString:function(){return JSON.stringify(c)},_type:function(){return"query"},_self:function(){return c}}},E.FieldQuery=function(a,b){var c={field:{}};return c.field[a]={query:b},{field:function(b){var d=c.field[a];return null==b?a:(delete c.field[a],a=b,c.field[b]=d,this)},query:function(b){return null==b?c.field[a].query:(c.field[a].query=b,this)},defaultOperator:function(b){return null==b?c.field[a].default_operator:(b=b.toUpperCase(),("AND"===b||"OR"===b)&&(c.field[a].default_operator=b),this)},analyzer:function(b){return null==b?c.field[a].analyzer:(c.field[a].analyzer=b,this)},quoteAnalyzer:function(b){return null==b?c.field[a].quote_analyzer:(c.field[a].quote_analyzer=b,this)},autoGeneratePhraseQueries:function(b){return null==b?c.field[a].auto_generate_phrase_queries:(c.field[a].auto_generate_phrase_queries=b,this)},allowLeadingWildcard:function(b){return null==b?c.field[a].allow_leading_wildcard:(c.field[a].allow_leading_wildcard=b,this)},lowercaseExpandedTerms:function(b){return null==b?c.field[a].lowercase_expanded_terms:(c.field[a].lowercase_expanded_terms=b,this)},enablePositionIncrements:function(b){return null==b?c.field[a].enable_position_increments:(c.field[a].enable_position_increments=b,this)},fuzzyMinSim:function(b){return null==b?c.field[a].fuzzy_min_sim:(c.field[a].fuzzy_min_sim=b,this)},boost:function(b){return null==b?c.field[a].boost:(c.field[a].boost=b,this)},fuzzyPrefixLength:function(b){return null==b?c.field[a].fuzzy_prefix_length:(c.field[a].fuzzy_prefix_length=b,this)},fuzzyMaxExpansions:function(b){return null==b?c.field[a].fuzzy_max_expansions:(c.field[a].fuzzy_max_expansions=b,this)},fuzzyRewrite:function(b){return null==b?c.field[a].fuzzy_rewrite:(b=b.toLowerCase(),("constant_score_auto"===b||"scoring_boolean"===b||"constant_score_boolean"===b||"constant_score_filter"===b||0===b.indexOf("top_terms_boost_")||0===b.indexOf("top_terms_"))&&(c.field[a].fuzzy_rewrite=b),this)},rewrite:function(b){return null==b?c.field[a].rewrite:(b=b.toLowerCase(),("constant_score_auto"===b||"scoring_boolean"===b||"constant_score_boolean"===b||"constant_score_filter"===b||0===b.indexOf("top_terms_boost_")||0===b.indexOf("top_terms_"))&&(c.field[a].rewrite=b),this)},quoteFieldSuffix:function(b){return null==b?c.field[a].quote_field_suffix:(c.field[a].quote_field_suffix=b,this)},phraseSlop:function(b){return null==b?c.field[a].phrase_slop:(c.field[a].phrase_slop=b,this)},analyzeWildcard:function(b){return null==b?c.field[a].analyze_wildcard:(c.field[a].analyze_wildcard=b,this)},escape:function(b){return null==b?c.field[a].escape:(c.field[a].escape=b,this)},minimumShouldMatch:function(b){return null==b?c.field[a].minimum_should_match:(c.field[a].minimum_should_match=b,this)},toString:function(){return JSON.stringify(c)},_type:function(){return"query"},_self:function(){return c}}},E.FilteredQuery=function(a,b){if(!m(a))throw new TypeError("Argument must be a Query");if(null!=b&&!o(b))throw new TypeError("Argument must be a Filter");var c={filtered:{query:a._self()}};return null!=b&&(c.filtered.filter=b._self()),{query:function(a){if(null==a)return c.filtered.query;if(!m(a))throw new TypeError("Argument must be a Query");return c.filtered.query=a._self(),this},filter:function(a){if(null==a)return c.filtered.filter;if(!o(a))throw new TypeError("Argument must be a Filter");return c.filtered.filter=a._self(),this},strategy:function(a){return null==a?c.filtered.strategy:(a=a.toLowerCase(),("query_first"===a||"random_access_always"===a||"leap_frog"===a||"leap_frog_filter_first"===a||0===a.indexOf("random_access_"))&&(c.filtered.strategy=a),this)},cache:function(a){return null==a?c.filtered._cache:(c.filtered._cache=a,this)},cacheKey:function(a){return null==a?c.filtered._cache_key:(c.filtered._cache_key=a,this)},boost:function(a){return null==a?c.filtered.boost:(c.filtered.boost=a,this)},toString:function(){return JSON.stringify(c)},_type:function(){return"query"},_self:function(){return c}}},E.FuzzyLikeThisFieldQuery=function(a,b){var c={flt_field:{}};return c.flt_field[a]={like_text:b},{field:function(b){var d=c.flt_field[a];return null==b?a:(delete c.flt_field[a],a=b,c.flt_field[b]=d,this)},likeText:function(b){return null==b?c.flt_field[a].like_text:(c.flt_field[a].like_text=b,this)},ignoreTf:function(b){return null==b?c.flt_field[a].ignore_tf:(c.flt_field[a].ignore_tf=b,this)},maxQueryTerms:function(b){return null==b?c.flt_field[a].max_query_terms:(c.flt_field[a].max_query_terms=b,this)},minSimilarity:function(b){return null==b?c.flt_field[a].min_similarity:(c.flt_field[a].min_similarity=b,this)},prefixLength:function(b){return null==b?c.flt_field[a].prefix_length:(c.flt_field[a].prefix_length=b,this)},analyzer:function(b){return null==b?c.flt_field[a].analyzer:(c.flt_field[a].analyzer=b,this)},boost:function(b){return null==b?c.flt_field[a].boost:(c.flt_field[a].boost=b,this)},toString:function(){return JSON.stringify(c)},_type:function(){return"query"},_self:function(){return c}}},E.FuzzyLikeThisQuery=function(a){var b={flt:{like_text:a}};return{fields:function(a){if(null==b.flt.fields&&(b.flt.fields=[]),null==a)return b.flt.fields;if(i(a))b.flt.fields.push(a);else{if(!g(a))throw new TypeError("Argument must be a string or array");b.flt.fields=a}return this},likeText:function(a){return null==a?b.flt.like_text:(b.flt.like_text=a,this)},ignoreTf:function(a){return null==a?b.flt.ignore_tf:(b.flt.ignore_tf=a,this)},maxQueryTerms:function(a){return null==a?b.flt.max_query_terms:(b.flt.max_query_terms=a,this)},minSimilarity:function(a){return null==a?b.flt.min_similarity:(b.flt.min_similarity=a,this)},prefixLength:function(a){return null==a?b.flt.prefix_length:(b.flt.prefix_length=a,this)},analyzer:function(a){return null==a?b.flt.analyzer:(b.flt.analyzer=a,this)},boost:function(a){return null==a?b.flt.boost:(b.flt.boost=a,this)},toString:function(){return JSON.stringify(b)},_type:function(){return"query"},_self:function(){return b}}},E.FuzzyQuery=function(a,b){var c={fuzzy:{}};return c.fuzzy[a]={value:b},{field:function(b){var d=c.fuzzy[a];return null==b?a:(delete c.fuzzy[a],a=b,c.fuzzy[b]=d,this)},value:function(b){return null==b?c.fuzzy[a].value:(c.fuzzy[a].value=b,this)},transpositions:function(b){return null==b?c.fuzzy[a].transpositions:(c.fuzzy[a].transpositions=b,this)},maxExpansions:function(b){return null==b?c.fuzzy[a].max_expansions:(c.fuzzy[a].max_expansions=b,this)},minSimilarity:function(b){return null==b?c.fuzzy[a].min_similarity:(c.fuzzy[a].min_similarity=b,this)},prefixLength:function(b){return null==b?c.fuzzy[a].prefix_length:(c.fuzzy[a].prefix_length=b,this)},rewrite:function(b){return null==b?c.fuzzy[a].rewrite:(b=b.toLowerCase(),("constant_score_auto"===b||"scoring_boolean"===b||"constant_score_boolean"===b||"constant_score_filter"===b||0===b.indexOf("top_terms_boost_")||0===b.indexOf("top_terms_"))&&(c.fuzzy[a].rewrite=b),this)},boost:function(b){return null==b?c.fuzzy[a].boost:(c.fuzzy[a].boost=b,this)},toString:function(){return JSON.stringify(c)},_type:function(){return"query"},_self:function(){return c}}},E.GeoShapeQuery=function(a){var b={geo_shape:{}};return b.geo_shape[a]={},{field:function(c){var d=b.geo_shape[a];return null==c?a:(delete b.geo_shape[a],a=c,b.geo_shape[c]=d,this)},shape:function(c){return null==c?b.geo_shape[a].shape:(null!=b.geo_shape[a].indexed_shape&&delete b.geo_shape[a].indexed_shape,b.geo_shape[a].shape=c._self(),this)},indexedShape:function(c){return null==c?b.geo_shape[a].indexed_shape:(null!=b.geo_shape[a].shape&&delete b.geo_shape[a].shape,b.geo_shape[a].indexed_shape=c._self(),this)},relation:function(c){return null==c?b.geo_shape[a].relation:(c=c.toLowerCase(),("intersects"===c||"disjoint"===c||"within"===c)&&(b.geo_shape[a].relation=c),this)},strategy:function(c){return null==c?b.geo_shape[a].strategy:(c=c.toLowerCase(),("recursive"===c||"term"===c)&&(b.geo_shape[a].strategy=c),this)},boost:function(c){return null==c?b.geo_shape[a].boost:(b.geo_shape[a].boost=c,this)},toString:function(){return JSON.stringify(b)},_type:function(){return"query"},_self:function(){return b}}},E.HasChildQuery=function(a,b){if(!m(a))throw new TypeError("Argument must be a valid Query");var c={has_child:{query:a._self(),type:b}};return{query:function(a){if(null==a)return c.has_child.query;if(!m(a))throw new TypeError("Argument must be a valid Query");return c.has_child.query=a._self(),this},type:function(a){return null==a?c.has_child.type:(c.has_child.type=a,this)},scope:function(){return this},scoreType:function(a){return null==a?c.has_child.score_type:(a=a.toLowerCase(),("none"===a||"max"===a||"sum"===a||"avg"===a)&&(c.has_child.score_type=a),this)},scoreMode:function(a){return null==a?c.has_child.score_mode:(a=a.toLowerCase(),("none"===a||"max"===a||"sum"===a||"avg"===a)&&(c.has_child.score_mode=a),this)},boost:function(a){return null==a?c.has_child.boost:(c.has_child.boost=a,this)},toString:function(){return JSON.stringify(c)},_type:function(){return"query"},_self:function(){return c}}},E.HasParentQuery=function(a,b){if(!m(a))throw new TypeError("Argument must be a Query");var c={has_parent:{query:a._self(),parent_type:b}};return{query:function(a){if(null==a)return c.has_parent.query;if(!m(a))throw new TypeError("Argument must be a Query");return c.has_parent.query=a._self(),this},parentType:function(a){return null==a?c.has_parent.parent_type:(c.has_parent.parent_type=a,this)},scope:function(){return this},scoreType:function(a){return null==a?c.has_parent.score_type:(a=a.toLowerCase(),("none"===a||"score"===a)&&(c.has_parent.score_type=a),this)},scoreMode:function(a){return null==a?c.has_parent.score_mode:(a=a.toLowerCase(),("none"===a||"score"===a)&&(c.has_parent.score_mode=a),this)},boost:function(a){return null==a?c.has_parent.boost:(c.has_parent.boost=a,this)},toString:function(){return JSON.stringify(c)},_type:function(){return"query"
},_self:function(){return c}}},E.IdsQuery=function(a){var b={ids:{}};if(i(a))b.ids.values=[a];else{if(!g(a))throw new TypeError("Argument must be string or array");b.ids.values=a}return{values:function(a){if(null==a)return b.ids.values;if(i(a))b.ids.values.push(a);else{if(!g(a))throw new TypeError("Argument must be string or array");b.ids.values=a}return this},type:function(a){if(null==b.ids.type&&(b.ids.type=[]),null==a)return b.ids.type;if(i(a))b.ids.type.push(a);else{if(!g(a))throw new TypeError("Argument must be string or array");b.ids.type=a}return this},boost:function(a){return null==a?b.ids.boost:(b.ids.boost=a,this)},toString:function(){return JSON.stringify(b)},_type:function(){return"query"},_self:function(){return b}}},E.IndicesQuery=function(a,b){if(!m(a))throw new TypeError("Argument must be a Query");var c={indices:{query:a._self()}};if(i(b))c.indices.indices=[b];else{if(!g(b))throw new TypeError("Argument must be a string or array");c.indices.indices=b}return{indices:function(a){if(null==a)return c.indices.indices;if(i(a))c.indices.indices.push(a);else{if(!g(a))throw new TypeError("Argument must be a string or array");c.indices.indices=a}return this},query:function(a){if(null==a)return c.indices.query;if(!m(a))throw new TypeError("Argument must be a Query");return c.indices.query=a._self(),this},noMatchQuery:function(a){if(null==a)return c.indices.no_match_query;if(i(a))a=a.toLowerCase(),("none"===a||"all"===a)&&(c.indices.no_match_query=a);else{if(!m(a))throw new TypeError("Argument must be string or Query");c.indices.no_match_query=a._self()}return this},boost:function(a){return null==a?c.indices.boost:(c.indices.boost=a,this)},toString:function(){return JSON.stringify(c)},_type:function(){return"query"},_self:function(){return c}}},E.MatchAllQuery=function(){var a={match_all:{}};return{boost:function(b){return null==b?a.match_all.boost:(a.match_all.boost=b,this)},toString:function(){return JSON.stringify(a)},_type:function(){return"query"},_self:function(){return a}}},E.MatchQuery=function(a,b){var c={match:{}};return c.match[a]={query:b},{boost:function(b){return null==b?c.match[a].boost:(c.match[a].boost=b,this)},query:function(b){return null==b?c.match[a].query:(c.match[a].query=b,this)},type:function(b){return null==b?c.match[a].type:(b=b.toLowerCase(),("boolean"===b||"phrase"===b||"phrase_prefix"===b)&&(c.match[a].type=b),this)},fuzziness:function(b){return null==b?c.match[a].fuzziness:(c.match[a].fuzziness=b,this)},cutoffFrequency:function(b){return null==b?c.match[a].cutoff_frequency:(c.match[a].cutoff_frequency=b,this)},prefixLength:function(b){return null==b?c.match[a].prefix_length:(c.match[a].prefix_length=b,this)},maxExpansions:function(b){return null==b?c.match[a].max_expansions:(c.match[a].max_expansions=b,this)},operator:function(b){return null==b?c.match[a].operator:(b=b.toLowerCase(),("and"===b||"or"===b)&&(c.match[a].operator=b),this)},slop:function(b){return null==b?c.match[a].slop:(c.match[a].slop=b,this)},analyzer:function(b){return null==b?c.match[a].analyzer:(c.match[a].analyzer=b,this)},minimumShouldMatch:function(b){return null==b?c.match[a].minimum_should_match:(c.match[a].minimum_should_match=b,this)},rewrite:function(b){return null==b?c.match[a].rewrite:(b=b.toLowerCase(),("constant_score_auto"===b||"scoring_boolean"===b||"constant_score_boolean"===b||"constant_score_filter"===b||0===b.indexOf("top_terms_boost_")||0===b.indexOf("top_terms_"))&&(c.match[a].rewrite=b),this)},fuzzyRewrite:function(b){return null==b?c.match[a].fuzzy_rewrite:(b=b.toLowerCase(),("constant_score_auto"===b||"scoring_boolean"===b||"constant_score_boolean"===b||"constant_score_filter"===b||0===b.indexOf("top_terms_boost_")||0===b.indexOf("top_terms_"))&&(c.match[a].fuzzy_rewrite=b),this)},fuzzyTranspositions:function(b){return null==b?c.match[a].fuzzy_transpositions:(c.match[a].fuzzy_transpositions=b,this)},lenient:function(b){return null==b?c.match[a].lenient:(c.match[a].lenient=b,this)},zeroTermsQuery:function(b){return null==b?c.match[a].zero_terms_query:(b=b.toLowerCase(),("all"===b||"none"===b)&&(c.match[a].zero_terms_query=b),this)},toString:function(){return JSON.stringify(c)},_type:function(){return"query"},_self:function(){return c}}},E.MoreLikeThisFieldQuery=function(a,b){var c={mlt_field:{}};return c.mlt_field[a]={like_text:b},{field:function(b){var d=c.mlt_field[a];return null==b?a:(delete c.mlt_field[a],a=b,c.mlt_field[b]=d,this)},likeText:function(b){return null==b?c.mlt_field[a].like_text:(c.mlt_field[a].like_text=b,this)},percentTermsToMatch:function(b){return null==b?c.mlt_field[a].percent_terms_to_match:(c.mlt_field[a].percent_terms_to_match=b,this)},minTermFreq:function(b){return null==b?c.mlt_field[a].min_term_freq:(c.mlt_field[a].min_term_freq=b,this)},maxQueryTerms:function(b){return null==b?c.mlt_field[a].max_query_terms:(c.mlt_field[a].max_query_terms=b,this)},stopWords:function(b){return null==b?c.mlt_field[a].stop_words:(c.mlt_field[a].stop_words=b,this)},minDocFreq:function(b){return null==b?c.mlt_field[a].min_doc_freq:(c.mlt_field[a].min_doc_freq=b,this)},maxDocFreq:function(b){return null==b?c.mlt_field[a].max_doc_freq:(c.mlt_field[a].max_doc_freq=b,this)},minWordLen:function(b){return null==b?c.mlt_field[a].min_word_len:(c.mlt_field[a].min_word_len=b,this)},maxWordLen:function(b){return null==b?c.mlt_field[a].max_word_len:(c.mlt_field[a].max_word_len=b,this)},analyzer:function(b){return null==b?c.mlt_field[a].analyzer:(c.mlt_field[a].analyzer=b,this)},boostTerms:function(b){return null==b?c.mlt_field[a].boost_terms:(c.mlt_field[a].boost_terms=b,this)},boost:function(b){return null==b?c.mlt_field[a].boost:(c.mlt_field[a].boost=b,this)},toString:function(){return JSON.stringify(c)},_type:function(){return"query"},_self:function(){return c}}},E.MoreLikeThisQuery=function(a,b){var c={mlt:{like_text:b,fields:[]}};if(i(a))c.mlt.fields.push(a);else{if(!g(a))throw new TypeError("Argument must be string or array");c.mlt.fields=a}return{fields:function(a){if(null==a)return c.mlt.fields;if(i(a))c.mlt.fields.push(a);else{if(!g(a))throw new TypeError("Argument must be a string or array");c.mlt.fields=a}return this},likeText:function(a){return null==a?c.mlt.like_text:(c.mlt.like_text=a,this)},percentTermsToMatch:function(a){return null==a?c.mlt.percent_terms_to_match:(c.mlt.percent_terms_to_match=a,this)},minTermFreq:function(a){return null==a?c.mlt.min_term_freq:(c.mlt.min_term_freq=a,this)},maxQueryTerms:function(a){return null==a?c.mlt.max_query_terms:(c.mlt.max_query_terms=a,this)},stopWords:function(a){return null==a?c.mlt.stop_words:(c.mlt.stop_words=a,this)},minDocFreq:function(a){return null==a?c.mlt.min_doc_freq:(c.mlt.min_doc_freq=a,this)},maxDocFreq:function(a){return null==a?c.mlt.max_doc_freq:(c.mlt.max_doc_freq=a,this)},minWordLen:function(a){return null==a?c.mlt.min_word_len:(c.mlt.min_word_len=a,this)},maxWordLen:function(a){return null==a?c.mlt.max_word_len:(c.mlt.max_word_len=a,this)},analyzer:function(a){return null==a?c.mlt.analyzer:(c.mlt.analyzer=a,this)},boostTerms:function(a){return null==a?c.mlt.boost_terms:(c.mlt.boost_terms=a,this)},boost:function(a){return null==a?c.mlt.boost:(c.mlt.boost=a,this)},toString:function(){return JSON.stringify(c)},_type:function(){return"query"},_self:function(){return c}}},E.MultiMatchQuery=function(a,b){var c={multi_match:{query:b,fields:[]}};if(i(a))c.multi_match.fields.push(a);else{if(!g(a))throw new TypeError("Argument must be string or array");c.multi_match.fields=a}return{fields:function(a){if(null==a)return c.multi_match.fields;if(i(a))c.multi_match.fields.push(a);else{if(!g(a))throw new TypeError("Argument must be string or array");c.multi_match.fields=a}return this},useDisMax:function(a){return null==a?c.multi_match.use_dis_max:(c.multi_match.use_dis_max=a,this)},tieBreaker:function(a){return null==a?c.multi_match.tie_breaker:(c.multi_match.tie_breaker=a,this)},cutoffFrequency:function(a){return null==a?c.multi_match.cutoff_frequency:(c.multi_match.cutoff_frequency=a,this)},minimumShouldMatch:function(a){return null==a?c.multi_match.minimum_should_match:(c.multi_match.minimum_should_match=a,this)},rewrite:function(a){return null==a?c.multi_match.rewrite:(a=a.toLowerCase(),("constant_score_auto"===a||"scoring_boolean"===a||"constant_score_boolean"===a||"constant_score_filter"===a||0===a.indexOf("top_terms_boost_")||0===a.indexOf("top_terms_"))&&(c.multi_match.rewrite=a),this)},fuzzyRewrite:function(a){return null==a?c.multi_match.fuzzy_rewrite:(a=a.toLowerCase(),("constant_score_auto"===a||"scoring_boolean"===a||"constant_score_boolean"===a||"constant_score_filter"===a||0===a.indexOf("top_terms_boost_")||0===a.indexOf("top_terms_"))&&(c.multi_match.fuzzy_rewrite=a),this)},lenient:function(a){return null==a?c.multi_match.lenient:(c.multi_match.lenient=a,this)},boost:function(a){return null==a?c.multi_match.boost:(c.multi_match.boost=a,this)},query:function(a){return null==a?c.multi_match.query:(c.multi_match.query=a,this)},type:function(a){return null==a?c.multi_match.type:(a=a.toLowerCase(),("boolean"===a||"phrase"===a||"phrase_prefix"===a)&&(c.multi_match.type=a),this)},fuzziness:function(a){return null==a?c.multi_match.fuzziness:(c.multi_match.fuzziness=a,this)},prefixLength:function(a){return null==a?c.multi_match.prefix_length:(c.multi_match.prefix_length=a,this)},maxExpansions:function(a){return null==a?c.multi_match.max_expansions:(c.multi_match.max_expansions=a,this)},operator:function(a){return null==a?c.multi_match.operator:(a=a.toLowerCase(),("and"===a||"or"===a)&&(c.multi_match.operator=a),this)},slop:function(a){return null==a?c.multi_match.slop:(c.multi_match.slop=a,this)},analyzer:function(a){return null==a?c.multi_match.analyzer:(c.multi_match.analyzer=a,this)},zeroTermsQuery:function(a){return null==a?c.multi_match.zero_terms_query:(a=a.toLowerCase(),("all"===a||"none"===a)&&(c.multi_match.zero_terms_query=a),this)},toString:function(){return JSON.stringify(c)},_type:function(){return"query"},_self:function(){return c}}},E.NestedQuery=function(a){var b={nested:{path:a}};return{path:function(a){return null==a?b.nested.path:(b.nested.path=a,this)},query:function(a){if(null==a)return b.nested.query;if(!m(a))throw new TypeError("Argument must be a Query");return b.nested.query=a._self(),this},filter:function(a){if(null==a)return b.nested.filter;if(!o(a))throw new TypeError("Argument must be a Filter");return b.nested.filter=a._self(),this},scoreMode:function(a){return null==a?b.nested.score_mode:(a=a.toLowerCase(),("avg"===a||"total"===a||"max"===a||"none"===a||"sum"===a)&&(b.nested.score_mode=a),this)},scope:function(){return this},boost:function(a){return null==a?b.nested.boost:(b.nested.boost=a,this)},toString:function(){return JSON.stringify(b)},_type:function(){return"query"},_self:function(){return b}}},E.PrefixQuery=function(a,b){var c={prefix:{}};return c.prefix[a]={value:b},{field:function(b){var d=c.prefix[a];return null==b?a:(delete c.prefix[a],a=b,c.prefix[b]=d,this)},value:function(b){return null==b?c.prefix[a].value:(c.prefix[a].value=b,this)},rewrite:function(b){return null==b?c.prefix[a].rewrite:(b=b.toLowerCase(),("constant_score_auto"===b||"scoring_boolean"===b||"constant_score_boolean"===b||"constant_score_filter"===b||0===b.indexOf("top_terms_boost_")||0===b.indexOf("top_terms_"))&&(c.prefix[a].rewrite=b),this)},boost:function(b){return null==b?c.prefix[a].boost:(c.prefix[a].boost=b,this)},toString:function(){return JSON.stringify(c)},_type:function(){return"query"},_self:function(){return c}}},E.QueryStringQuery=function(a){var b={query_string:{}};return b.query_string.query=a,{query:function(a){return null==a?b.query_string.query:(b.query_string.query=a,this)},defaultField:function(a){return null==a?b.query_string.default_field:(b.query_string.default_field=a,this)},fields:function(a){if(null==b.query_string.fields&&(b.query_string.fields=[]),null==a)return b.query_string.fields;if(i(a))b.query_string.fields.push(a);else{if(!g(a))throw new TypeError("Argument must be a string or array");b.query_string.fields=a}return this},useDisMax:function(a){return null==a?b.query_string.use_dis_max:(b.query_string.use_dis_max=a,this)},defaultOperator:function(a){return null==a?b.query_string.default_operator:(a=a.toUpperCase(),("AND"===a||"OR"===a)&&(b.query_string.default_operator=a),this)},analyzer:function(a){return null==a?b.query_string.analyzer:(b.query_string.analyzer=a,this)},quoteAnalyzer:function(a){return null==a?b.query_string.quote_analyzer:(b.query_string.quote_analyzer=a,this)},allowLeadingWildcard:function(a){return null==a?b.query_string.allow_leading_wildcard:(b.query_string.allow_leading_wildcard=a,this)},lowercaseExpandedTerms:function(a){return null==a?b.query_string.lowercase_expanded_terms:(b.query_string.lowercase_expanded_terms=a,this)},enablePositionIncrements:function(a){return null==a?b.query_string.enable_position_increments:(b.query_string.enable_position_increments=a,this)},fuzzyPrefixLength:function(a){return null==a?b.query_string.fuzzy_prefix_length:(b.query_string.fuzzy_prefix_length=a,this)},fuzzyMinSim:function(a){return null==a?b.query_string.fuzzy_min_sim:(b.query_string.fuzzy_min_sim=a,this)},phraseSlop:function(a){return null==a?b.query_string.phrase_slop:(b.query_string.phrase_slop=a,this)},boost:function(a){return null==a?b.query_string.boost:(b.query_string.boost=a,this)},analyzeWildcard:function(a){return null==a?b.query_string.analyze_wildcard:(b.query_string.analyze_wildcard=a,this)},autoGeneratePhraseQueries:function(a){return null==a?b.query_string.auto_generate_phrase_queries:(b.query_string.auto_generate_phrase_queries=a,this)},minimumShouldMatch:function(a){return null==a?b.query_string.minimum_should_match:(b.query_string.minimum_should_match=a,this)},tieBreaker:function(a){return null==a?b.query_string.tie_breaker:(b.query_string.tie_breaker=a,this)},escape:function(a){return null==a?b.query_string.escape:(b.query_string.escape=a,this)},fuzzyMaxExpansions:function(a){return null==a?b.query_string.fuzzy_max_expansions:(b.query_string.fuzzy_max_expansions=a,this)},fuzzyRewrite:function(a){return null==a?b.query_string.fuzzy_rewrite:(a=a.toLowerCase(),("constant_score_auto"===a||"scoring_boolean"===a||"constant_score_boolean"===a||"constant_score_filter"===a||0===a.indexOf("top_terms_boost_")||0===a.indexOf("top_terms_"))&&(b.query_string.fuzzy_rewrite=a),this)},rewrite:function(a){return null==a?b.query_string.rewrite:(a=a.toLowerCase(),("constant_score_auto"===a||"scoring_boolean"===a||"constant_score_boolean"===a||"constant_score_filter"===a||0===a.indexOf("top_terms_boost_")||0===a.indexOf("top_terms_"))&&(b.query_string.rewrite=a),this)},quoteFieldSuffix:function(a){return null==a?b.query_string.quote_field_suffix:(b.query_string.quote_field_suffix=a,this)},lenient:function(a){return null==a?b.query_string.lenient:(b.query_string.lenient=a,this)},toString:function(){return JSON.stringify(b)},_type:function(){return"query"},_self:function(){return b}}},E.RangeQuery=function(a){var b={range:{}};return b.range[a]={},{field:function(c){var d=b.range[a];return null==c?a:(delete b.range[a],a=c,b.range[c]=d,this)},from:function(c){return null==c?b.range[a].from:(b.range[a].from=c,this)},to:function(c){return null==c?b.range[a].to:(b.range[a].to=c,this)},includeLower:function(c){return null==c?b.range[a].include_lower:(b.range[a].include_lower=c,this)},includeUpper:function(c){return null==c?b.range[a].include_upper:(b.range[a].include_upper=c,this)},gt:function(c){return null==c?b.range[a].gt:(b.range[a].gt=c,this)},gte:function(c){return null==c?b.range[a].gte:(b.range[a].gte=c,this)},lt:function(c){return null==c?b.range[a].lt:(b.range[a].lt=c,this)},lte:function(c){return null==c?b.range[a].lte:(b.range[a].lte=c,this)},boost:function(c){return null==c?b.range[a].boost:(b.range[a].boost=c,this)},toString:function(){return JSON.stringify(b)},_type:function(){return"query"},_self:function(){return b}}},E.RegexpQuery=function(a,b){var c={regexp:{}};return c.regexp[a]={value:b},{field:function(b){var d=c.regexp[a];return null==b?a:(delete c.regexp[a],a=b,c.regexp[b]=d,this)},value:function(b){return null==b?c.regexp[a].value:(c.regexp[a].value=b,this)},flags:function(b){return null==b?c.regexp[a].flags:(c.regexp[a].flags=b,this)},flagsValue:function(b){return null==b?c.regexp[a].flags_value:(c.regexp[a].flags_value=b,this)},rewrite:function(b){return null==b?c.regexp[a].rewrite:(b=b.toLowerCase(),("constant_score_auto"===b||"scoring_boolean"===b||"constant_score_boolean"===b||"constant_score_filter"===b||0===b.indexOf("top_terms_boost_")||0===b.indexOf("top_terms_"))&&(c.regexp[a].rewrite=b),this)},boost:function(b){return null==b?c.regexp[a].boost:(c.regexp[a].boost=b,this)},toString:function(){return JSON.stringify(c)},_type:function(){return"query"},_self:function(){return c}}},E.SpanFirstQuery=function(a,b){if(!m(a))throw new TypeError("Argument must be a SpanQuery");var c={span_first:{match:a._self(),end:b}};return{match:function(a){if(null==a)return c.span_first.match;if(!m(a))throw new TypeError("Argument must be a SpanQuery");return c.span_first.match=a._self(),this},end:function(a){return null==a?c.span_first.end:(c.span_first.end=a,this)},boost:function(a){return null==a?c.span_first.boost:(c.span_first.boost=a,this)},toString:function(){return JSON.stringify(c)},_type:function(){return"query"},_self:function(){return c}}},E.SpanMultiTermQuery=function(a){if(null!=a&&!m(a))throw new TypeError("Argument must be a MultiTermQuery");var b={span_multi:{match:{}}};return null!=a&&(b.span_multi.match=a._self()),{match:function(a){if(null==a)return b.span_multi.match;if(!m(a))throw new TypeError("Argument must be a MultiTermQuery");return b.span_multi.match=a._self(),this},toString:function(){return JSON.stringify(b)},_type:function(){return"query"},_self:function(){return b}}},E.SpanNearQuery=function(a,b){var c,d,e={span_near:{clauses:[],slop:b}};if(m(a))e.span_near.clauses.push(a._self());else{if(!g(a))throw new TypeError("Argument must be SpanQuery or array of SpanQueries");for(c=0,d=a.length;d>c;c++){if(!m(a[c]))throw new TypeError("Argument must be array of SpanQueries");e.span_near.clauses.push(a[c]._self())}}return{clauses:function(a){var b,c;if(null==a)return e.span_near.clauses;if(m(a))e.span_near.clauses.push(a._self());else{if(!g(a))throw new TypeError("Argument must be SpanQuery or array of SpanQueries");for(e.span_near.clauses=[],b=0,c=a.length;c>b;b++){if(!m(a[b]))throw new TypeError("Argument must be array of SpanQueries");e.span_near.clauses.push(a[b]._self())}}return this},slop:function(a){return null==a?e.span_near.slop:(e.span_near.slop=a,this)},inOrder:function(a){return null==a?e.span_near.in_order:(e.span_near.in_order=a,this)},collectPayloads:function(a){return null==a?e.span_near.collect_payloads:(e.span_near.collect_payloads=a,this)},boost:function(a){return null==a?e.span_near.boost:(e.span_near.boost=a,this)},toString:function(){return JSON.stringify(e)},_type:function(){return"query"},_self:function(){return e}}},E.SpanNotQuery=function(a,b){if(!m(a)||!m(b))throw new TypeError("Argument must be a SpanQuery");var c={span_not:{include:a._self(),exclude:b._self()}};return{include:function(a){if(null==a)return c.span_not.include;if(!m(a))throw new TypeError("Argument must be a SpanQuery");return c.span_not.include=a._self(),this},exclude:function(a){if(null==a)return c.span_not.exclude;if(!m(a))throw new TypeError("Argument must be a SpanQuery");return c.span_not.exclude=a._self(),this},boost:function(a){return null==a?c.span_not.boost:(c.span_not.boost=a,this)},toString:function(){return JSON.stringify(c)},_type:function(){return"query"},_self:function(){return c}}},E.SpanOrQuery=function(a){var b,c,d={span_or:{clauses:[]}};if(m(a))d.span_or.clauses.push(a._self());else{if(!g(a))throw new TypeError("Argument must be SpanQuery or array of SpanQueries");for(b=0,c=a.length;c>b;b++){if(!m(a[b]))throw new TypeError("Argument must be array of SpanQueries");d.span_or.clauses.push(a[b]._self())}}return{clauses:function(a){var b,c;if(null==a)return d.span_or.clauses;if(m(a))d.span_or.clauses.push(a._self());else{if(!g(a))throw new TypeError("Argument must be SpanQuery or array of SpanQueries");for(d.span_or.clauses=[],b=0,c=a.length;c>b;b++){if(!m(a[b]))throw new TypeError("Argument must be array of SpanQueries");d.span_or.clauses.push(a[b]._self())}}return this},boost:function(a){return null==a?d.span_or.boost:(d.span_or.boost=a,this)},toString:function(){return JSON.stringify(d)},_type:function(){return"query"},_self:function(){return d}}},E.SpanTermQuery=function(a,b){var c={span_term:{}};return c.span_term[a]={term:b},{field:function(b){var d=c.span_term[a];return null==b?a:(delete c.span_term[a],a=b,c.span_term[b]=d,this)},term:function(b){return null==b?c.span_term[a].term:(c.span_term[a].term=b,this)},boost:function(b){return null==b?c.span_term[a].boost:(c.span_term[a].boost=b,this)},toString:function(){return JSON.stringify(c)},_type:function(){return"query"},_self:function(){return c}}},E.TermQuery=function(a,b){var c={term:{}};return c.term[a]={term:b},{field:function(b){var d=c.term[a];return null==b?a:(delete c.term[a],a=b,c.term[b]=d,this)},term:function(b){return null==b?c.term[a].term:(c.term[a].term=b,this)},boost:function(b){return null==b?c.term[a].boost:(c.term[a].boost=b,this)},toString:function(){return JSON.stringify(c)},_type:function(){return"query"},_self:function(){return c}}},E.TermsQuery=function(a,b){var c={terms:{}};if(i(b))c.terms[a]=[b];else{if(!g(b))throw new TypeError("Argument must be string or array");c.terms[a]=b}return{field:function(b){var d=c.terms[a];return null==b?a:(delete c.terms[a],a=b,c.terms[b]=d,this)},terms:function(b){if(null==b)return c.terms[a];if(i(b))c.terms[a].push(b);else{if(!g(b))throw new TypeError("Argument must be string or array");c.terms[a]=b}return this},minimumShouldMatch:function(a){return null==a?c.terms.minimum_should_match:(c.terms.minimum_should_match=a,this)},disableCoord:function(a){return null==a?c.terms.disable_coord:(c.terms.disable_coord=a,this)},boost:function(a){return null==a?c.terms.boost:(c.terms.boost=a,this)},toString:function(){return JSON.stringify(c)},_type:function(){return"query"},_self:function(){return c}}},E.TopChildrenQuery=function(a,b){if(!m(a))throw new TypeError("Argument must be a Query");var c={top_children:{query:a._self(),type:b}};return{query:function(a){if(null==a)return c.top_children.query;if(!m(a))throw new TypeError("Argument must be a Query");return c.top_children.query=a._self(),this},type:function(a){return null==a?c.top_children.type:(c.top_children.type=a,this)},scope:function(){return this},score:function(a){return null==a?c.top_children.score:(a=a.toLowerCase(),("max"===a||"sum"===a||"avg"===a||"total"===a)&&(c.top_children.score=a),this)},scoreMode:function(a){return null==a?c.top_children.score_mode:(a=a.toLowerCase(),("max"===a||"sum"===a||"avg"===a||"total"===a)&&(c.top_children.score_mode=a),this)},factor:function(a){return null==a?c.top_children.factor:(c.top_children.factor=a,this)},incrementalFactor:function(a){return null==a?c.top_children.incremental_factor:(c.top_children.incremental_factor=a,this)},boost:function(a){return null==a?c.top_children.boost:(c.top_children.boost=a,this)},toString:function(){return JSON.stringify(c)},_type:function(){return"query"},_self:function(){return c}}},E.WildcardQuery=function(a,b){var c={wildcard:{}};return c.wildcard[a]={value:b},{field:function(b){var d=c.wildcard[a];return null==b?a:(delete c.wildcard[a],a=b,c.wildcard[b]=d,this)},value:function(b){return null==b?c.wildcard[a].value:(c.wildcard[a].value=b,this)},rewrite:function(b){return null==b?c.wildcard[a].rewrite:(b=b.toLowerCase(),("constant_score_auto"===b||"scoring_boolean"===b||"constant_score_boolean"===b||"constant_score_filter"===b||0===b.indexOf("top_terms_boost_")||0===b.indexOf("top_terms_"))&&(c.wildcard[a].rewrite=b),this)},boost:function(b){return null==b?c.wildcard[a].boost:(c.wildcard[a].boost=b,this)},toString:function(){return JSON.stringify(c)},_type:function(){return"query"},_self:function(){return c}}},E.ClusterHealth=function(){var a={},b=["indices"];return{indices:function(b){if(null==a.indices&&(a.indices=[]),null==b)return a.indices;if(i(b))a.indices.push(b);else{if(!g(b))throw new TypeError("Argument must be string or array");a.indices=b}return this},local:function(b){return null==b?a.local:(a.local=b,this)},masterTimeout:function(b){return null==b?a.master_timeout:(a.master_timeout=b,this)},timeout:function(b){return null==b?a.timeout:(a.timeout=b,this)},waitForStatus:function(b){return null==b?a.wait_for_status:(b=b.toLowerCase(),("green"===b||"bordo"===b||"red"===b)&&(a.wait_for_status=b),this)},waitForRelocatingShards:function(b){return null==b?a.wait_for_relocating_shards:(a.wait_for_relocating_shards=b,this)},waitForActiveShards:function(b){return null==b?a.wait_for_active_shards:(a.wait_for_active_shards=b,this)},waitForNodes:function(b){return null==b?a.wait_for_nodes:(a.wait_for_nodes=b,this)},level:function(b){return null==b?a.level:(b=b.toLowerCase(),("cluster"===b||"indices"===b||"shards"===b)&&(a.level=b),this)},toString:function(){return JSON.stringify(a)},_type:function(){return"cluster health"},_self:function(){return a},doHealth:function(c,d){if(null==E.client)throw new Error("No Client Set");var f="/_cluster/health";return a.indices&&a.indices.length>0&&(f=f+"/"+a.indices.join()),E.client.get(f,e(a,b),c,d)}}},E.ClusterState=function(){var a={},b=[];return{local:function(b){return null==b?a.local:(a.local=b,this)},masterTimeout:function(b){return null==b?a.master_timeout:(a.master_timeout=b,this)},filterNodes:function(b){return null==b?a.filter_nodes:(a.filter_nodes=b,this)},filterRoutingTable:function(b){return null==b?a.filter_routing_table:(a.filter_routing_table=b,this)},filterMetadata:function(b){return null==b?a.filter_metadata:(a.filter_metadata=b,this)},filterBlocks:function(b){return null==b?a.filter_blocks:(a.filter_blocks=b,this)},filterIndices:function(b){if(null==a.filter_indices&&(a.filter_indices=[]),null==b)return a.filter_indices;if(i(b))a.filter_indices.push(b);else{if(!g(b))throw new TypeError("Argument must be string or array");a.filter_indices=b}return this},filterIndexTemplates:function(b){if(null==a.filter_index_templates&&(a.filter_index_templates=[]),null==b)return a.filter_index_templates;if(i(b))a.filter_index_templates.push(b);else{if(!g(b))throw new TypeError("Argument must be string or array");a.filter_index_templates=b}return this},toString:function(){return JSON.stringify(a)},_type:function(){return"cluster state"},_self:function(){return a},doState:function(c,d){if(null==E.client)throw new Error("No Client Set");var f="/_cluster/state";return E.client.get(f,e(a,b),c,d)}}},E.NodeInfo=function(){var a={},b=["nodes"];return{nodes:function(b){if(null==a.nodes&&(a.nodes=[]),null==b)return a.nodes;if(i(b))a.nodes.push(b);else{if(!g(b))throw new TypeError("Argument must be string or array");a.nodes=b}return this},clear:function(b){return null==b?a.clear:(a.clear=b,this)},all:function(b){return null==b?a.all:(a.all=b,this)},settings:function(b){return null==b?a.settings:(a.settings=b,this)},os:function(b){return null==b?a.os:(a.os=b,this)},process:function(b){return null==b?a.process:(a.process=b,this)},jvm:function(b){return null==b?a.jvm:(a.jvm=b,this)},threadPool:function(b){return null==b?a.thread_pool:(a.thread_pool=b,this)},network:function(b){return null==b?a.network:(a.network=b,this)},transport:function(b){return null==b?a.transport:(a.transport=b,this)},http:function(b){return null==b?a.http:(a.http=b,this)},plugin:function(b){return null==b?a.plugin:(a.plugin=b,this)},toString:function(){return JSON.stringify(a)},_type:function(){return"node info"},_self:function(){return a},doInfo:function(c,d){if(null==E.client)throw new Error("No Client Set");var f="/_nodes";return a.nodes&&a.nodes.length>0&&(f=f+"/"+a.nodes.join()),E.client.get(f,e(a,b),c,d)}}},E.NodeStats=function(){var a={},b=["nodes"];return{nodes:function(b){if(null==a.nodes&&(a.nodes=[]),null==b)return a.nodes;if(i(b))a.nodes.push(b);else{if(!g(b))throw new TypeError("Argument must be string or array");a.nodes=b}return this},clear:function(b){return null==b?a.clear:(a.clear=b,this)},all:function(b){return null==b?a.all:(a.all=b,this)},indices:function(b){return null==b?a.indices:(a.indices=b,this)},os:function(b){return null==b?a.os:(a.os=b,this)},process:function(b){return null==b?a.process:(a.process=b,this)},jvm:function(b){return null==b?a.jvm:(a.jvm=b,this)},threadPool:function(b){return null==b?a.thread_pool:(a.thread_pool=b,this)},network:function(b){return null==b?a.network:(a.network=b,this)},fs:function(b){return null==b?a.fs:(a.fs=b,this)},transport:function(b){return null==b?a.transport:(a.transport=b,this)},http:function(b){return null==b?a.http:(a.http=b,this)},toString:function(){return JSON.stringify(a)},_type:function(){return"node stats"},_self:function(){return a},doStats:function(c,d){if(null==E.client)throw new Error("No Client Set");var f="/_nodes";return a.nodes&&a.nodes.length>0&&(f=f+"/"+a.nodes.join()),f+="/stats",E.client.get(f,e(a,b),c,d)}}},E.GeoPoint=function(b){var c=[0,0];return null!=b&&g(b)&&2===b.length&&(c=[b[1],b[0]]),{properties:function(b){return null==b?c:(h(b)&&a(b,"lat")&&a(b,"lon")&&(c={lat:b.lat,lon:b.lon}),this)},string:function(a){return null==a?c:(i(a)&&-1!==a.indexOf(",")&&(c=a),this)},geohash:function(a,b){return b=null!=b&&j(b)?b:12,null==a?c:(i(a)&&a.length===b&&(c=a),this)},array:function(a){return null==a?c:(g(a)&&2===a.length&&(c=[a[1],a[0]]),this)},toString:function(){return JSON.stringify(c)},_type:function(){return"geo point"},_self:function(){return c}}},E.Highlight=function(c){var d={fields:{}},e=function(b,c,e){null==b?d[c]=e:(a(d.fields,b)||(d.fields[b]={}),d.fields[b][c]=e)};return null!=c&&(i(c)?d.fields[c]={}:g(c)&&b(c,function(a){d.fields[a]={}})),{fields:function(c){return null==c?d.fields:(i(c)?a(d.fields,c)||(d.fields[c]={}):g(c)&&b(c,function(b){a(d.fields,b)||(d.fields[b]={})}),void 0)},preTags:function(a,b){return null===a&&null!=b?d.fields[b].pre_tags:null==a?d.pre_tags:(i(a)?e(b,"pre_tags",[a]):g(a)&&e(b,"pre_tags",a),this)},postTags:function(a,b){return null===a&&null!=b?d.fields[b].post_tags:null==a?d.post_tags:(i(a)?e(b,"post_tags",[a]):g(a)&&e(b,"post_tags",a),this)},order:function(a,b){return null===a&&null!=b?d.fields[b].order:null==a?d.order:(a=a.toLowerCase(),"score"===a&&e(b,"order",a),this)},tagsSchema:function(a){return null==a?d.tags_schema:(a=a.toLowerCase(),"styled"===a&&(d.tags_schema=a),this)},highlightFilter:function(a,b){return null===a&&null!=b?d.fields[b].highlight_filter:null==a?d.highlight_filter:(e(b,"highlight_filter",a),this)},fragmentSize:function(a,b){return null===a&&null!=b?d.fields[b].fragment_size:null==a?d.fragment_size:(e(b,"fragment_size",a),this)},numberOfFragments:function(a,b){return null===a&&null!=b?d.fields[b].number_of_fragments:null==a?d.number_of_fragments:(e(b,"number_of_fragments",a),this)},encoder:function(a){return null==a?d.encoder:(a=a.toLowerCase(),("default"===a||"html"===a)&&(d.encoder=a),this)},requireFieldMatch:function(a,b){return null===a&&null!=b?d.fields[b].require_field_match:null==a?d.require_field_match:(e(b,"require_field_match",a),this)},boundaryMaxScan:function(a,b){return null===a&&null!=b?d.fields[b].boundary_max_scan:null==a?d.boundary_max_scan:(e(b,"boundary_max_scan",a),this)},boundaryChars:function(a,b){return null===a&&null!=b?d.fields[b].boundary_chars:null==a?d.boundary_chars:(e(b,"boundary_chars",a),this)},type:function(a,b){return null===a&&null!=b?d.fields[b].type:null==a?d.type:(a=a.toLowerCase(),("fast-vector-highlighter"===a||"highlighter"===a)&&e(b,"type",a),this)},fragmenter:function(a,b){return null===a&&null!=b?d.fields[b].fragmenter:null==a?d.fragmenter:(a=a.toLowerCase(),("simple"===a||"span"===a)&&e(b,"fragmenter",a),this)
},options:function(a,b){if(null===a&&null!=b)return d.fields[b].options;if(null==a)return d.options;if(!h(a)||g(a)||l(a))throw new TypeError("Parameter must be an object");return e(b,"options",a),this},toString:function(){return JSON.stringify(d)},_type:function(){return"highlight"},_self:function(){return d}}},E.IndexedShape=function(a,b){var c={type:a,id:b};return{type:function(a){return null==a?c.type:(c.type=a,this)},id:function(a){return null==a?c.id:(c.id=a,this)},index:function(a){return null==a?c.index:(c.index=a,this)},shapeFieldName:function(a){return null==a?c.shape_field_name:(c.shape_field_name=a,this)},toString:function(){return JSON.stringify(c)},_type:function(){return"indexed shape"},_self:function(){return c}}},E.MultiSearchRequest=function(b){var c,d,e,f={},h=function(){var b="",c=[];d.length>0&&(b=b+"/"+d.join()),e.length>0&&(b=b+"/"+e.join()),b+="/_msearch";for(var g in f)a(f,g)&&""!==f[g]&&c.push(g+"="+encodeURIComponent(f[g]));return c.length>0&&(b=b+"?"+c.join("&")),b};return c=[],b=b||{},d=null==b.indices?[]:i(b.indices)?[b.indices]:b.indices,e=null==b.types?[]:i(b.types)?[b.types]:b.types,0===d.length&&e.length>0&&(d=["_all"]),{requests:function(a){if(null==a)return c;if(C(a))c.push(a);else{if(!g(a))throw new TypeError("Argument must be request or array");c=a}return this},searchType:function(a){return null==a?f.search_type:(a=a.toLowerCase(),("dfs_query_then_fetch"===a||"dfs_query_and_fetch"===a||"query_then_fetch"===a||"query_and_fetch"===a||"scan"===a||"count"===a)&&(f.search_type=a),this)},indices:function(a){if(null==a)return d;if(i(a))d=[a];else{if(!g(a))throw new TypeError("Argument must be a string or array");d=a}return 0===d.length&&e.length>0&&(d=["_all"]),this},types:function(a){if(null==a)return e;if(i(a))e=[a];else{if(!g(a))throw new TypeError("Argument must be a string or array");e=a}return 0===d.length&&e.length>0&&(d=["_all"]),this},ignoreIndices:function(a){return null==a?f.ignore_indices:(a=a.toLowerCase(),("none"===a||"missing"===a)&&(f.ignore_indices=a),this)},toString:function(){var a,b,d=[];for(a=0,b=c.length;b>a;a++)d.push(c[a]._self());return JSON.stringify(d)},_type:function(){return"multi search request"},_self:function(){var a,b,d=[];for(a=0,b=c.length;b>a;a++)d.push(c[a]._self());return d},doSearch:function(a,b){var d,e,f,g,i,j="";if(null==E.client)throw new Error("No Client Set");for(d=0,e=c.length;e>d;d++)f=c[d],i={},f.indices().length>0&&(i.indices=f.indices()),f.types().length>0&&(i.types=f.types()),null!=f.searchType()&&(i.search_type=f.searchType()),null!=f.preference()&&(i.preference=f.preference()),null!=f.routing()&&(i.routing=f.routing()),null!=f.ignoreIndices()&&(i.ignore_indices=f.ignoreIndices()),j=j+JSON.stringify(i)+"\n",g=f._self(),null!=f.timeout()&&(g.timeout=f.timeout()),j=j+JSON.stringify(g)+"\n";return E.client.post(h(),j,a,b)}}},E.Request=function(b){var d,e,f,h={},j=function(b){var c="",d=[];e.length>0&&(c=c+"/"+e.join()),f.length>0&&(c=c+"/"+f.join()),b.length>0&&"/"!==b[0]&&(c+="/"),c+=b;for(var g in h)a(h,g)&&""!==h[g]&&d.push(g+"="+encodeURIComponent(h[g]));return d.length>0&&(c=c+"?"+d.join("&")),c};return d={},b=b||{},e=null==b.indices?[]:i(b.indices)?[b.indices]:b.indices,f=null==b.types?[]:i(b.types)?[b.types]:b.types,0===e.length&&f.length>0&&(e=["_all"]),null!=b.routing&&(h.routing=b.routing),{sort:function(){var b,c;if(a(d,"sort")||(d.sort=[]),0===arguments.length)return d.sort;if(1===arguments.length){var e=arguments[0];if(i(e))d.sort.push(e);else if(u(e))d.sort.push(e._self());else{if(!g(e))throw new TypeError("Argument must be string, Sort, or array");for(d.sort=[],b=0,c=e.length;c>b;b++)if(i(e[b]))d.sort.push(e[b]);else{if(!u(e[b]))throw new TypeError("Invalid object in array");d.sort.push(e[b]._self())}}}else if(2===arguments.length){var f=arguments[0],h=arguments[1];if(i(f)&&i(h)&&(h=h.toLowerCase(),"asc"===h||"desc"===h)){var j={};j[f]={order:h},d.sort.push(j)}}return this},trackScores:function(a){return null==a?d.track_scores:(d.track_scores=a,this)},size:function(a){return null==a?d.size:(d.size=a,this)},timeout:function(a){return null==a?h.timeout:(h.timeout=a,this)},routing:function(a){return null==a?h.routing:(h.routing=a,this)},replication:function(a){return null==a?h.replication:(a=a.toLowerCase(),("async"===a||"sync"===a||"default"===a)&&(h.replication=a),this)},consistency:function(a){return null==a?h.consistency:(a=a.toLowerCase(),("default"===a||"one"===a||"quorum"===a||"all"===a)&&(h.consistency=a),this)},searchType:function(a){return null==a?h.search_type:(a=a.toLowerCase(),("dfs_query_then_fetch"===a||"dfs_query_and_fetch"===a||"query_then_fetch"===a||"query_and_fetch"===a||"scan"===a||"count"===a)&&(h.search_type=a),this)},fields:function(a){if(null==a)return d.fields;if(null==d.fields&&(d.fields=[]),i(a))d.fields.push(a);else{if(!g(a))throw new TypeError("Argument must be string or array");d.fields=a}return this},rescore:function(a){if(null==a)return d.rescore;if(!n(a))throw new TypeError("Argument must be a Rescore");return d.rescore=a._self(),this},from:function(a){return null==a?d.from:(d.from=a,this)},query:function(a){if(null==a)return d.query;if(!m(a))throw new TypeError("Argument must be a Query");return d.query=a._self(),this},indices:function(a){if(null==a)return e;if(i(a))e=[a];else{if(!g(a))throw new TypeError("Argument must be a string or array");e=a}return 0===e.length&&f.length>0&&(e=["_all"]),this},types:function(a){if(null==a)return f;if(i(a))f=[a];else{if(!g(a))throw new TypeError("Argument must be a string or array");f=a}return 0===e.length&&f.length>0&&(e=["_all"]),this},facet:function(a){if(null==a)return d.facets;if(null==d.facets&&(d.facets={}),!p(a))throw new TypeError("Argument must be a Facet");return c(d.facets,a._self()),this},filter:function(a){if(null==a)return d.filter;if(!o(a))throw new TypeError("Argument must be a Filter");return d.filter=a._self(),this},highlight:function(a){if(null==a)return d.highlight;if(!v(a))throw new TypeError("Argument must be a Highlight object");return d.highlight=a._self(),this},suggest:function(a){if(null==a)return d.suggest;if(null==d.suggest&&(d.suggest={}),i(a))d.suggest.text=a;else{if(!w(a))throw new TypeError("Argument must be a string or Suggest object");c(d.suggest,a._self())}return this},scriptField:function(a){if(null==a)return d.script_fields;if(null==d.script_fields&&(d.script_fields={}),!q(a))throw new TypeError("Argument must be a ScriptField");return c(d.script_fields,a._self()),this},preference:function(a){return null==a?h.preference:(h.preference=a,this)},local:function(a){return null==a?h.local:(h.local=a,this)},ignoreIndices:function(a){return null==a?h.ignore_indices:(a=a.toLowerCase(),("none"===a||"missing"===a)&&(h.ignore_indices=a),this)},indexBoost:function(a,b){return null==d.indices_boost&&(d.indices_boost={}),0===arguments.length?d.indices_boost:(d.indices_boost[a]=b,this)},explain:function(a){return null==a?d.explain:(d.explain=a,this)},version:function(a){return null==a?d.version:(d.version=a,this)},minScore:function(a){return null==a?d.min_score:(d.min_score=a,this)},toString:function(){return JSON.stringify(d)},_type:function(){return"request"},_self:function(){return d},doDeleteByQuery:function(a,b){var c=JSON.stringify(d.query);if(null==E.client)throw new Error("No Client Set");return E.client.del(j("_query"),c,a,b)},doCount:function(a,b){var c=JSON.stringify(d.query);if(null==E.client)throw new Error("No Client Set");return E.client.post(j("_count"),c,a,b)},doSearch:function(a,b){var c=JSON.stringify(d);if(null==E.client)throw new Error("No Client Set");return E.client.post(j("_search"),c,a,b)},doSearchShards:function(a,b){if(null==E.client)throw new Error("No Client Set");return E.client.post(j("_search_shards"),"",a,b)}}},E.Rescore=function(a,b){if(null!=a&&!j(a))throw new TypeError("Argument must be a Number");if(null!=b&&!m(b))throw new TypeError("Argument must be a Query");var c={query:{}};return null!=a&&(c.window_size=a),null!=b&&(c.query.rescore_query=b._self()),{rescoreQuery:function(a){if(null==a)return c.query.rescore_query;if(!m(a))throw new TypeError("Argument must be a Query");return c.query.rescore_query=a._self(),this},queryWeight:function(a){if(null==a)return c.query.query_weight;if(!j(a))throw new TypeError("Argument must be a Number");return c.query.query_weight=a,this},rescoreQueryWeight:function(a){if(null==a)return c.query.rescore_query_weight;if(!j(a))throw new TypeError("Argument must be a Number");return c.query.rescore_query_weight=a,this},windowSize:function(a){if(null==a)return c.window_size;if(!j(a))throw new TypeError("Argument must be a Number");return c.window_size=a,this},toString:function(){return JSON.stringify(c)},_type:function(){return"rescore"},_self:function(){return c}}},E.ScriptField=function(a){var b={};return b[a]={},{lang:function(c){return null==c?b[a].lang:(b[a].lang=c,this)},script:function(c){return null==c?b[a].script:(b[a].script=c,this)},params:function(c){return null==c?b[a].params:(b[a].params=c,this)},ignoreFailure:function(c){return null==c?b[a].ignore_failure:(b[a].ignore_failure=c,this)},toString:function(){return JSON.stringify(b)},_type:function(){return"script field"},_self:function(){return b}}},E.Shape=function(a,b){var c={},d=function(a){var b=!1;return("point"===a||"linestring"===a||"polygon"===a||"multipoint"===a||"envelope"===a||"multipolygon"===a)&&(b=!0),b};return a=a.toLowerCase(),d(a)&&(c.type=a,c.coordinates=b),{type:function(a){return null==a?c.type:(a=a.toLowerCase(),d(a)&&(c.type=a),this)},coordinates:function(a){return null==a?c.coordinates:(c.coordinates=a,this)},toString:function(){return JSON.stringify(c)},_type:function(){return"shape"},_self:function(){return c}}},E.Sort=function(a){null==a&&(a="_score");var b={},c=a,d="_geo_distance",e="_script";return b[c]={},{field:function(d){var e=b[c];return null==d?a:(delete b[c],a=d,c=d,b[c]=e,this)},geoDistance:function(e){var f=b[c];if(null==e)return b[c][a];if(!r(e))throw new TypeError("Argument must be a GeoPoint");return delete b[c],c=d,b[c]=f,b[c][a]=e._self(),this},script:function(a){var d=b[c];return null==a?b[c].script:(delete b[c],c=e,b[c]=d,b[c].script=a,this)},order:function(a){return null==a?b[c].order:(a=a.toLowerCase(),("asc"===a||"desc"===a)&&(b[c].order=a),this)},asc:function(){return b[c].order="asc",this},desc:function(){return b[c].order="desc",this},reverse:function(a){return null==a?b[c].reverse:(b[c].reverse=a,this)},missing:function(a){return null==a?b[c].missing:(b[c].missing=a,this)},ignoreUnmapped:function(a){return null==a?b[c].ignore_unmapped:(b[c].ignore_unmapped=a,this)},unit:function(a){return null==a?b[c].unit:(a=a.toLowerCase(),("mi"===a||"km"===a)&&(b[c].unit=a),this)},normalize:function(a){return null==a?b[c].normalize:(b[c].normalize=a,this)},distanceType:function(a){return null==a?b[c].distance_type:(a=a.toLowerCase(),("arc"===a||"plane"===a)&&(b[c].distance_type=a),this)},params:function(a){return null==a?b[c].params:(b[c].params=a,this)},lang:function(a){return null==a?b[c].lang:(b[c].lang=a,this)},type:function(a){return null==a?b[c].type:(a=a.toLowerCase(),("string"===a||"number"===a)&&(b[c].type=a),this)},mode:function(a){return null==a?b[c].mode:(a=a.toLowerCase(),("min"===a||"max"===a||"sum"===a||"avg"===a)&&(b[c].mode=a),this)},nestedPath:function(a){return null==a?b[c].nested_path:(b[c].nested_path=a,this)},nestedFilter:function(a){if(null==a)return b[c].nested_filter;if(!o(a))throw new TypeError("Argument must be a Filter");return b[c].nested_filter=a._self(),this},toString:function(){return JSON.stringify(b)},_type:function(){return"sort"},_self:function(){return b}}},E.DirectGenerator=function(){var a=E.DirectSettingsMixin(),b=a._self();return c(a,{preFilter:function(a){return null==a?b.pre_filter:(b.pre_filter=a,this)},postFilter:function(a){return null==a?b.post_filter:(b.post_filter=a,this)},field:function(a){return null==a?b.field:(b.field=a,this)},size:function(a){return null==a?b.size:(b.size=a,this)},toString:function(){return JSON.stringify(b)},_type:function(){return"generator"},_self:function(){return b}})},E.DirectSettingsMixin=function(){var a={};return{accuracy:function(b){return null==b?a.accuracy:(a.accuracy=b,this)},suggestMode:function(b){return null==b?a.suggest_mode:(b=b.toLowerCase(),("missing"===b||"popular"===b||"always"===b)&&(a.suggest_mode=b),this)},sort:function(b){return null==b?a.sort:(b=b.toLowerCase(),("score"===b||"frequency"===b)&&(a.sort=b),this)},stringDistance:function(b){return null==b?a.string_distance:(b=b.toLowerCase(),("internal"===b||"damerau_levenshtein"===b||"levenstein"===b||"jarowinkler"===b||"ngram"===b)&&(a.string_distance=b),this)},maxEdits:function(b){return null==b?a.max_edits:(a.max_edits=b,this)},maxInspections:function(b){return null==b?a.max_inspections:(a.max_inspections=b,this)},maxTermFreq:function(b){return null==b?a.max_term_freq:(a.max_term_freq=b,this)},prefixLen:function(b){return null==b?a.prefix_len:(a.prefix_len=b,this)},minWordLen:function(b){return null==b?a.min_word_len:(a.min_word_len=b,this)},minDocFreq:function(b){return null==b?a.min_doc_freq:(a.min_doc_freq=b,this)},_self:function(){return a}}},E.PhraseSuggester=function(a){var b={};return b[a]={phrase:{}},{text:function(c){return null==c?b[a].text:(b[a].text=c,this)},analyzer:function(c){return null==c?b[a].phrase.analyzer:(b[a].phrase.analyzer=c,this)},field:function(c){return null==c?b[a].phrase.field:(b[a].phrase.field=c,this)},size:function(c){return null==c?b[a].phrase.size:(b[a].phrase.size=c,this)},shardSize:function(c){return null==c?b[a].phrase.shard_size:(b[a].phrase.shard_size=c,this)},realWorldErrorLikelihood:function(c){return null==c?b[a].phrase.real_world_error_likelihood:(b[a].phrase.real_world_error_likelihood=c,this)},confidence:function(c){return null==c?b[a].phrase.confidence:(b[a].phrase.confidence=c,this)},separator:function(c){return null==c?b[a].phrase.separator:(b[a].phrase.separator=c,this)},maxErrors:function(c){return null==c?b[a].phrase.max_errors:(b[a].phrase.max_errors=c,this)},gramSize:function(c){return null==c?b[a].phrase.gram_size:(b[a].phrase.gram_size=c,this)},forceUnigrams:function(c){return null==c?b[a].phrase.force_unigrams:(b[a].phrase.force_unigrams=c,this)},linearSmoothing:function(c,d,e){return 0===arguments.length?b[a].phrase.smoothing:(b[a].phrase.smoothing={linear:{trigram_lambda:c,bigram_lambda:d,unigram_lambda:e}},this)},laplaceSmoothing:function(c){return null==c?b[a].phrase.smoothing:(b[a].phrase.smoothing={laplace:{alpha:c}},this)},stupidBackoffSmoothing:function(c){return null==c?b[a].phrase.smoothing:(b[a].phrase.smoothing={stupid_backoff:{discount:c}},this)},directGenerator:function(c){var d,e;if(null==b[a].phrase.direct_generator&&(b[a].phrase.direct_generator=[]),null==c)return b[a].phrase.direct_generator;if(x(c))b[a].phrase.direct_generator.push(c._self());else{if(!g(c))throw new TypeError("Argument must be a Generator or array of Generators");for(b[a].phrase.direct_generator=[],d=0,e=c.length;e>d;d++){if(!x(c[d]))throw new TypeError("Argument must be an array of Generators");b[a].phrase.direct_generator.push(c[d]._self())}}return this},toString:function(){return JSON.stringify(b)},_type:function(){return"suggest"},_self:function(){return b}}},E.TermSuggester=function(a){var b={},d=E.DirectSettingsMixin();return b[a]={term:d._self()},c(d,{text:function(c){return null==c?b[a].text:(b[a].text=c,this)},analyzer:function(c){return null==c?b[a].term.analyzer:(b[a].term.analyzer=c,this)},field:function(c){return null==c?b[a].term.field:(b[a].term.field=c,this)},size:function(c){return null==c?b[a].term.size:(b[a].term.size=c,this)},shardSize:function(c){return null==c?b[a].term.shard_size:(b[a].term.shard_size=c,this)},toString:function(){return JSON.stringify(b)},_type:function(){return"suggest"},_self:function(){return b}})},E.noConflict=function(){return F.ejs=G,this}}.call(this);
/*! elastic.js - v1.1.1 - 2013-05-24
 * https://github.com/fullscale/elastic.js
 * Copyright (c) 2013 FullScale Labs, LLC; Licensed MIT */

!function(){"use strict";var a,b=this;a="undefined"!=typeof exports?exports:null==b.ejs?b.ejs={}:b.ejs,a.jQueryClient=function(a){var b={contentType:"application/json",dataType:"json",processData:!1},c=function(b){return"/"!==b.charAt(0)&&(b="/"+b),a+b};return null==a?a="":"/"===a.charAt(a.length-1)&&(a=a.substring(0,a.length-1)),{server:function(b){return null==b?a:(a="/"===b.charAt(b.length-1)?b.substring(0,b.length-1):b,this)},option:function(a,c){return null==a?b:null==c?b[a]:(b[a]=c,void 0)},get:function(a,d,e,f){var g=jQuery.extend({},b);return g.type="GET",g.url=c(a),g.data=d,g.success=e,g.error=f,jQuery.ajax(g)},post:function(a,d,e,f){var g=jQuery.extend({},b);return g.type="POST",g.url=c(a),g.data=d,g.success=e,g.error=f,jQuery.ajax(g)},put:function(a,d,e,f){var g=jQuery.extend({},b);return g.type="PUT",g.url=c(a),g.data=d,g.success=e,g.error=f,jQuery.ajax(g)},del:function(a,d,e,f){var g=jQuery.extend({},b);return g.type="DELETE",g.url=c(a),g.data=d,g.success=e,g.error=f,jQuery.ajax(g)},head:function(a,d,e,f){var g=jQuery.extend({},b);return g.type="HEAD",g.url=c(a),g.data=d,g.error=f,g.complete=function(a,b){if("success"===b){var c,d,f=a.getAllResponseHeaders().split("\n"),g={};for(d=0;d<f.length;d++)c=f[d].split(":"),2!==c.length&&(g[c[0]]=c[1]);null!=e&&e(g)}},jQuery.ajax(g)}}}}.call(this);
/*! iScroll v5.0.4 ~ (c) 2008-2013 Matteo Spinelli ~ http://cubiq.org/license */
;var IScroll=function(e,t,n){function s(e,n){this.wrapper=typeof e=="string"?t.querySelector(e):e,this.scroller=this.wrapper.children[0],this.scrollerStyle=this.scroller.style,this.options={resizeIndicator:!0,mouseWheelSpeed:20,snapThreshold:.334,startX:0,startY:0,scrollY:!0,directionLockThreshold:5,momentum:!0,bounce:!0,bounceTime:600,bounceEasing:"",preventDefault:!0,HWCompositing:!0,useTransition:!0,useTransform:!0};for(var r in n)this.options[r]=n[r];this.translateZ=this.options.HWCompositing&&i.hasPerspective?" translateZ(0)":"",this.options.useTransition=i.hasTransition&&this.options.useTransition,this.options.useTransform=i.hasTransform&&this.options.useTransform,this.options.eventPassthrough=this.options.eventPassthrough===!0?"vertical":this.options.eventPassthrough,this.options.preventDefault=!this.options.eventPassthrough&&this.options.preventDefault,this.options.scrollY=this.options.eventPassthrough=="vertical"?!1:this.options.scrollY,this.options.scrollX=this.options.eventPassthrough=="horizontal"?!1:this.options.scrollX,this.options.freeScroll=this.options.freeScroll&&!this.options.eventPassthrough,this.options.directionLockThreshold=this.options.eventPassthrough?0:this.options.directionLockThreshold,this.options.bounceEasing=typeof this.options.bounceEasing=="string"?i.ease[this.options.bounceEasing]||i.ease.circular:this.options.bounceEasing,this.options.resizePolling=this.options.resizePolling===undefined?60:this.options.resizePolling,this.options.tap===!0&&(this.options.tap="tap"),this.options.invertWheelDirection=this.options.invertWheelDirection?-1:1,this.options.probeType==3&&(this.options.useTransition=!1),this.x=0,this.y=0,this.directionX=0,this.directionY=0,this._events={},this._init(),this.refresh(),this.scrollTo(this.options.startX,this.options.startY),this.enable()}function o(e,n,r){var i=t.createElement("div"),s=t.createElement("div");return r===!0&&(i.style.cssText="position:absolute;z-index:9999",s.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px"),s.className="iScrollIndicator",e=="h"?(r===!0&&(i.style.cssText+=";height:7px;left:2px;right:2px;bottom:0",s.style.height="100%"),i.className="iScrollHorizontalScrollbar"):(r===!0&&(i.style.cssText+=";width:7px;bottom:2px;top:2px;right:1px",s.style.width="100%"),i.className="iScrollVerticalScrollbar"),n||(i.style.pointerEvents="none"),i.appendChild(s),i}function u(n,r){this.wrapper=typeof r.el=="string"?t.querySelector(r.el):r.el,this.indicator=this.wrapper.children[0],this.indicatorStyle=this.indicator.style,this.scroller=n,this.options={listenX:!0,listenY:!0,interactive:!1,resize:!0,defaultScrollbars:!1,speedRatioX:0,speedRatioY:0};for(var s in r)this.options[s]=r[s];this.sizeRatioX=1,this.sizeRatioY=1,this.maxPosX=0,this.maxPosY=0,this.options.interactive&&(i.addEvent(this.indicator,"touchstart",this),i.addEvent(this.indicator,"MSPointerDown",this),i.addEvent(this.indicator,"mousedown",this),i.addEvent(e,"touchend",this),i.addEvent(e,"MSPointerUp",this),i.addEvent(e,"mouseup",this))}var r=e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.oRequestAnimationFrame||e.msRequestAnimationFrame||function(t){e.setTimeout(t,1e3/60)},i=function(){function o(e){return s===!1?!1:s===""?e:s+e.charAt(0).toUpperCase()+e.substr(1)}var r={},i=t.createElement("div").style,s=function(){var e=["t","webkitT","MozT","msT","OT"],t,n=0,r=e.length;for(;n<r;n++){t=e[n]+"ransform";if(t in i)return e[n].substr(0,e[n].length-1)}return!1}();r.getTime=Date.now||function(){return(new Date).getTime()},r.extend=function(e,t){for(var n in t)e[n]=t[n]},r.addEvent=function(e,t,n,r){e.addEventListener?e.addEventListener(t,n,!!r):e.attachEvent(t,n)},r.removeEvent=function(e,t,n,r){e.removeventListener?(e.removeEventListener(t,n,!!r),e.addEventListener(t,n,!!r)):e.detachEvent(t,n)},r.momentum=function(e,t,r,i,s){var o=e-t,u=n.abs(o)/r,a,f,l=6e-4;return a=e+u*u/(2*l)*(o<0?-1:1),f=u/l,a<i?(a=s?i-s/2.5*(u/8):i,o=n.abs(a-e),f=o/u):a>0&&(a=s?s/2.5*(u/8):0,o=n.abs(e)+a,f=o/u),{destination:n.round(a),duration:f}};var u=o("transform");return r.extend(r,{hasTransform:u!==!1,hasPerspective:o("perspective")in i,hasTouch:"ontouchstart"in e,hasPointer:navigator.msPointerEnabled,hasTransition:o("transition")in i}),r.isAndroidBrowser=/Android/.test(e.navigator.appVersion)&&/Version\/\d/.test(e.navigator.appVersion),r.extend(r.style={},{transform:u,transitionTimingFunction:o("transitionTimingFunction"),transitionDuration:o("transitionDuration"),transformOrigin:o("transformOrigin")}),r.hasClass=function(e,t){var n=new RegExp("(^|\\s)"+t+"(\\s|$)");return n.test(e.className)},r.addClass=function(e,t){if(r.hasClass(e,t))return;var n=e.className.split(" ");n.push(t),e.className=n.join(" ")},r.removeClass=function(e,t){if(!r.hasClass(e,t))return;var n=new RegExp("(^|\\s)"+t+"(\\s|$)","g");e.className=e.className.replace(n,"")},r.offset=function(e){var t=-e.offsetLeft,n=-e.offsetTop;while(e=e.offsetParent)t-=e.offsetLeft,n-=e.offsetTop;return{left:t,top:n}},r.extend(r.eventType={},{touchstart:1,touchmove:1,touchend:1,mousedown:2,mousemove:2,mouseup:2,MSPointerDown:3,MSPointerMove:3,MSPointerUp:3}),r.extend(r.ease={},{quadratic:{style:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",fn:function(e){return e*(2-e)}},circular:{style:"cubic-bezier(0.1, 0.57, 0.1, 1)",fn:function(e){return n.sqrt(1- --e*e)}},back:{style:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",fn:function(e){var t=4;return(e-=1)*e*((t+1)*e+t)+1}},bounce:{style:"",fn:function(e){return(e/=1)<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375}},elastic:{style:"",fn:function(e){var t=.22,r=.4;return e===0?0:e==1?1:r*n.pow(2,-10*e)*n.sin((e-t/4)*2*n.PI/t)+1}}}),r.tap=function(e,n){var r=t.createEvent("Event");r.initEvent(n,!0,!0),r.pageX=
e.pageX,r.pageY=e.pageY,e.target.dispatchEvent(r)},r.click=function(e){var n=e.target,r;n.tagName!="SELECT"&&n.tagName!="INPUT"&&n.tagName!="TEXTAREA"&&(r=t.createEvent("MouseEvents"),r.initMouseEvent("click",!0,!0,e.view,1,n.screenX,n.screenY,n.clientX,n.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,0,null),r._constructed=!0,n.dispatchEvent(r))},r}();return s.prototype={version:"5.0.4",_init:function(){this._initEvents(),(this.options.scrollbars||this.options.indicators)&&this._initIndicators(),this.options.mouseWheel&&this._initWheel(),this.options.snap&&this._initSnap(),this.options.keyBindings&&this._initKeys()},destroy:function(){this._initEvents(!0),this._execEvent("destroy")},_transitionEnd:function(e){if(e.target!=this.scroller)return;this._transitionTime(0),this.resetPosition(this.options.bounceTime)||this._execEvent("scrollEnd")},_start:function(e){if(i.eventType[e.type]!=1&&e.button!==0)return;if(!this.enabled||this.initiated&&i.eventType[e.type]!==this.initiated)return;this.options.preventDefault&&!i.isAndroidBrowser&&e.preventDefault();var t=e.touches?e.touches[0]:e,r;this.initiated=i.eventType[e.type],this.moved=!1,this.distX=0,this.distY=0,this.directionX=0,this.directionY=0,this.directionLocked=0,this._transitionTime(),this.isAnimating=!1,this.startTime=i.getTime(),this.options.useTransition&&this.isInTransition&&(r=this.getComputedPosition(),this._translate(n.round(r.x),n.round(r.y)),this.isInTransition=!1),this.startX=this.x,this.startY=this.y,this.absStartX=this.x,this.absStartY=this.y,this.pointX=t.pageX,this.pointY=t.pageY,this._execEvent("scrollStart")},_move:function(e){if(!this.enabled||i.eventType[e.type]!==this.initiated)return;this.options.preventDefault&&e.preventDefault();var t=e.touches?e.touches[0]:e,r=this.hasHorizontalScroll?t.pageX-this.pointX:0,s=this.hasVerticalScroll?t.pageY-this.pointY:0,o=i.getTime(),u,a,f,l;this.pointX=t.pageX,this.pointY=t.pageY,this.distX+=r,this.distY+=s,f=n.abs(this.distX),l=n.abs(this.distY);if(o-this.endTime>300&&f<10&&l<10)return;!this.directionLocked&&!this.options.freeScroll&&(f>l+this.options.directionLockThreshold?this.directionLocked="h":l>=f+this.options.directionLockThreshold?this.directionLocked="v":this.directionLocked="n");if(this.directionLocked=="h"){if(this.options.eventPassthrough=="vertical")e.preventDefault();else if(this.options.eventPassthrough=="horizontal"){this.initiated=!1;return}s=0}else if(this.directionLocked=="v"){if(this.options.eventPassthrough=="horizontal")e.preventDefault();else if(this.options.eventPassthrough=="vertical"){this.initiated=!1;return}r=0}u=this.x+r,a=this.y+s;if(u>0||u<this.maxScrollX)u=this.options.bounce?this.x+r/3:u>0?0:this.maxScrollX;if(a>0||a<this.maxScrollY)a=this.options.bounce?this.y+s/3:a>0?0:this.maxScrollY;this.directionX=r>0?-1:r<0?1:0,this.directionY=s>0?-1:s<0?1:0,this.moved=!0,this._translate(u,a),o-this.startTime>300&&(this.startTime=o,this.startX=this.x,this.startY=this.y,this.options.probeType==1&&this._execEvent("scroll")),this.options.probeType>1&&this._execEvent("scroll")},_end:function(e){if(!this.enabled||i.eventType[e.type]!==this.initiated)return;this.options.preventDefault&&e.preventDefault();var t=e.changedTouches?e.changedTouches[0]:e,r,s,o=i.getTime()-this.startTime,u=n.round(this.x),a=n.round(this.y),f=n.abs(u-this.startX),l=n.abs(a-this.startY),c=0,h="";this.scrollTo(u,a),this.isInTransition=0,this.initiated=0,this.endTime=i.getTime();if(this.resetPosition(this.options.bounceTime))return;if(!this.moved){this.options.tap&&i.tap(e,this.options.tap),this.options.click&&i.click(e);return}if(this._events.flick&&o<200&&f<100&&l<100){this._execEvent("flick");return}this.options.momentum&&o<300&&(r=this.hasHorizontalScroll?i.momentum(this.x,this.startX,o,this.maxScrollX,this.options.bounce?this.wrapperWidth:0):{destination:u,duration:0},s=this.hasVerticalScroll?i.momentum(this.y,this.startY,o,this.maxScrollY,this.options.bounce?this.wrapperHeight:0):{destination:a,duration:0},u=r.destination,a=s.destination,c=n.max(r.duration,s.duration),this.isInTransition=1);if(this.options.snap){var p=this._nearestSnap(u,a);this.currentPage=p,u=p.x,a=p.y,c=this.options.snapSpeed||n.max(n.max(n.min(f,1e3),n.min(f,1e3)),300),this.directionX=0,this.directionY=0,h=this.options.bounceEasing}if(u!=this.x||a!=this.y){if(u>0||u<this.maxScrollX||a>0||a<this.maxScrollY)h=i.ease.quadratic;this.scrollTo(u,a,c,h);return}this._execEvent("scrollEnd")},_resize:function(){var e=this;clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(function(){e.refresh()},this.options.resizePolling)},resetPosition:function(e){var t=this.x,n=this.y;return e=e||0,!this.hasHorizontalScroll||this.x>0?t=0:this.x<this.maxScrollX&&(t=this.maxScrollX),!this.hasVerticalScroll||this.y>0?n=0:this.y<this.maxScrollY&&(n=this.maxScrollY),t==this.x&&n==this.y?!1:(this.scrollTo(t,n,e,this.options.bounceEasing),!0)},disable:function(){this.enabled=!1},enable:function(){this.enabled=!0},refresh:function(){var e=this.wrapper.offsetHeight;this.wrapperWidth=this.wrapper.clientWidth,this.wrapperHeight=this.wrapper.clientHeight,this.scrollerWidth=this.scroller.offsetWidth,this.scrollerHeight=this.scroller.offsetHeight,this.maxScrollX=this.wrapperWidth-this.scrollerWidth,this.maxScrollY=this.wrapperHeight-this.scrollerHeight,this.hasHorizontalScroll=this.options.scrollX&&this.maxScrollX<0,this.hasVerticalScroll=this.options.scrollY&&this.maxScrollY<0,this.hasHorizontalScroll||(this.maxScrollX=0,this.scrollerWidth=this.wrapperWidth),this.hasVerticalScroll||(this.maxScrollY=0,this.scrollerHeight=this.wrapperHeight),this.endTime=0,this.directionX=0,this.directionY=0,this.wrapperOffset=i.offset(this.wrapper),this._execEvent("refresh"),this.resetPosition();if(this.options.snap){var t=this._nearestSnap(this.x,this.y);if(this.x==t.x&&this.y==t.y)return;this.currentPage=t,this.scrollTo(t.x,t.y)}},on:function(e,t){this._events[e]||(this._events[e]=[]),this._events[e].push(t)},_execEvent:function(e){if(!this._events[e])return;
var t=0,n=this._events[e].length;if(!n)return;for(;t<n;t++)this._events[e][t].call(this)},scrollBy:function(e,t,n,r){e=this.x+e,t=this.y+t,n=n||0,this.scrollTo(e,t,n,r)},scrollTo:function(e,t,n,r){r=r||i.ease.circular,!n||this.options.useTransition&&r.style?(this._transitionTimingFunction(r.style),this._transitionTime(n),this._translate(e,t)):this._animate(e,t,n,r.fn)},scrollToElement:function(e,t,r,s,o){e=e.nodeType?e:this.scroller.querySelector(e);if(!e)return;var u=i.offset(e);u.left-=this.wrapperOffset.left,u.top-=this.wrapperOffset.top,r===!0&&(r=n.round(e.offsetWidth/2-this.wrapper.offsetWidth/2)),s===!0&&(s=n.round(e.offsetHeight/2-this.wrapper.offsetHeight/2)),u.left-=r||0,u.top-=s||0,u.left=u.left>0?0:u.left<this.maxScrollX?this.maxScrollX:u.left,u.top=u.top>0?0:u.top<this.maxScrollY?this.maxScrollY:u.top,t=t===undefined||t===null||t==="auto"?n.max(n.abs(u.left)*2,n.abs(u.top)*2):t,this.scrollTo(u.left,u.top,t,o)},_transitionTime:function(e){e=e||0,this.scrollerStyle[i.style.transitionDuration]=e+"ms",this.indicator1&&this.indicator1.transitionTime(e),this.indicator2&&this.indicator2.transitionTime(e)},_transitionTimingFunction:function(e){this.scrollerStyle[i.style.transitionTimingFunction]=e,this.indicator1&&this.indicator1.transitionTimingFunction(e),this.indicator2&&this.indicator2.transitionTimingFunction(e)},_translate:function(e,t){this.options.useTransform?this.scrollerStyle[i.style.transform]="translate("+e+"px,"+t+"px)"+this.translateZ:(e=n.round(e),t=n.round(t),this.scrollerStyle.left=e+"px",this.scrollerStyle.top=t+"px"),this.x=e,this.y=t,this.indicator1&&this.indicator1.updatePosition(),this.indicator2&&this.indicator2.updatePosition()},_initEvents:function(t){var n=t?i.removeEvent:i.addEvent,r=this.options.bindToWrapper?this.wrapper:e;n(e,"orientationchange",this),n(e,"resize",this),n(this.wrapper,"mousedown",this),n(r,"mousemove",this),n(r,"mousecancel",this),n(r,"mouseup",this),i.hasPointer&&(n(this.wrapper,"MSPointerDown",this),n(r,"MSPointerMove",this),n(r,"MSPointerCancel",this),n(r,"MSPointerUp",this)),i.hasTouch&&(n(this.wrapper,"touchstart",this),n(r,"touchmove",this),n(r,"touchcancel",this),n(r,"touchend",this)),n(this.scroller,"transitionend",this),n(this.scroller,"webkitTransitionEnd",this),n(this.scroller,"oTransitionEnd",this),n(this.scroller,"MSTransitionEnd",this)},getComputedPosition:function(){var t=e.getComputedStyle(this.scroller,null),n,r;return this.options.useTransform?(t=t[i.style.transform].split(")")[0].split(", "),n=+(t[12]||t[4]),r=+(t[13]||t[5])):(n=+t.left.replace(/[^-\d]/g,""),r=+t.top.replace(/[^-\d]/g,"")),{x:n,y:r}},_initIndicators:function(){var e=this.options.interactiveScrollbars,t=typeof this.options.scrollbars!="object",n=typeof this.options.scrollbars!="string",r,i;this.options.scrollbars?(this.options.scrollY&&(r={el:o("v",e,this.options.scrollbars),interactive:e,defaultScrollbars:!0,customStyle:n,resize:this.options.resizeIndicator,listenX:!1},this.wrapper.appendChild(r.el)),this.options.scrollX&&(i={el:o("h",e,this.options.scrollbars),interactive:e,defaultScrollbars:!0,customStyle:n,resize:this.options.resizeIndicator,listenY:!1},this.wrapper.appendChild(i.el))):(r=this.options.indicators.length?this.options.indicators[0]:this.options.indicators,i=this.options.indicators[1]&&this.options.indicators[1]),r&&(this.indicator1=new u(this,r)),i&&(this.indicator2=new u(this,i)),this.on("refresh",function(){this.indicator1&&this.indicator1.refresh(),this.indicator2&&this.indicator2.refresh()}),this.on("destroy",function(){this.indicator1&&(this.indicator1.destroy(),this.indicator1=null),this.indicator2&&(this.indicator2.destroy(),this.indicator2=null)})},_initWheel:function(){i.addEvent(this.wrapper,"mousewheel",this),i.addEvent(this.wrapper,"DOMMouseScroll",this),this.on("destroy",function(){i.removeEvent(this.wrapper,"mousewheel",this),i.removeEvent(this.wrapper,"DOMMouseScroll",this)})},_wheel:function(e){if(!this.enabled)return;var t,n,r,i,s=this;clearTimeout(this.wheelTimeout),this.wheelTimeout=setTimeout(function(){s._execEvent("scrollEnd")},400),e.preventDefault();if("wheelDeltaX"in e)t=e.wheelDeltaX/120,n=e.wheelDeltaY/120;else if("wheelDelta"in e)t=n=e.wheelDelta/120;else{if(!("detail"in e))return;t=n=-e.detail/3}t*=this.options.mouseWheelSpeed,n*=this.options.mouseWheelSpeed,this.hasVerticalScroll||(t=n),r=this.x+(this.hasHorizontalScroll?t*this.options.invertWheelDirection:0),i=this.y+(this.hasVerticalScroll?n*this.options.invertWheelDirection:0),r>0?r=0:r<this.maxScrollX&&(r=this.maxScrollX),i>0?i=0:i<this.maxScrollY&&(i=this.maxScrollY),this.scrollTo(r,i,0),this.options.probeType>1&&this._execEvent("scroll")},_initSnap:function(){this.currentPage={},typeof this.options.snap=="string"&&(this.options.snap=this.scroller.querySelectorAll(this.options.snap)),this.on("refresh",function(){var e=0,t,r=0,i,s,o,u=0,a,f=this.options.snapStepX||this.wrapperWidth,l=this.options.snapStepY||this.wrapperHeight,c;this.pages=[];if(this.options.snap===!0){s=n.round(f/2),o=n.round(l/2);while(u>-this.scrollerWidth){this.pages[e]=[],t=0,a=0;while(a>-this.scrollerHeight)this.pages[e][t]={x:n.max(u,this.maxScrollX),y:n.max(a,this.maxScrollY),width:f,height:l,cx:u-s,cy:a-o},a-=l,t++;u-=f,e++}}else{c=this.options.snap,t=c.length,i=-1;for(;e<t;e++){if(e===0||c[e].offsetLeft<=c[e-1].offsetLeft)r=0,i++;this.pages[r]||(this.pages[r]=[]),u=n.max(-c[e].offsetLeft,this.maxScrollX),a=n.max(-c[e].offsetTop,this.maxScrollY),s=u-n.round(c[e].offsetWidth/2),o=a-n.round(c[e].offsetHeight/2),this.pages[r][i]={x:u,y:a,width:c[e].offsetWidth,height:c[e].offsetHeight,cx:s,cy:o},u>this.maxScrollX&&r++}}this.goToPage(this.currentPage.pageX||0,this.currentPage.pageY||0,0),this.options.snapThreshold%1===0?(this.snapThresholdX=this.options.snapThreshold,this.snapThresholdY=this.options.snapThreshold):(this.snapThresholdX=n.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width*this.options.snapThreshold),this.snapThresholdY=n.round(this.pages[this.currentPage
.pageX][this.currentPage.pageY].height*this.options.snapThreshold))}),this.on("flick",function(){var e=this.options.snapSpeed||n.max(n.max(n.min(n.abs(this.x-this.startX),1e3),n.min(n.abs(this.y-this.startY),1e3)),300);this.goToPage(this.currentPage.pageX+this.directionX,this.currentPage.pageY+this.directionY,e)})},_nearestSnap:function(e,t){var r=0,i=this.pages.length,s=0;if(n.abs(e-this.absStartX)<this.snapThresholdX&&n.abs(t-this.absStartY)<this.snapThresholdY)return this.currentPage;e>0?e=0:e<this.maxScrollX&&(e=this.maxScrollX),t>0?t=0:t<this.maxScrollY&&(t=this.maxScrollY);for(;r<i;r++)if(e>=this.pages[r][0].cx){e=this.pages[r][0].x;break}i=this.pages[r].length;for(;s<i;s++)if(t>=this.pages[0][s].cy){t=this.pages[0][s].y;break}return r==this.currentPage.pageX&&(r+=this.directionX,r<0?r=0:r>=this.pages.length&&(r=this.pages.length-1),e=this.pages[r][0].x),s==this.currentPage.pageY&&(s+=this.directionY,s<0?s=0:s>=this.pages[0].length&&(s=this.pages[0].length-1),t=this.pages[0][s].y),{x:e,y:t,pageX:r,pageY:s}},goToPage:function(e,t,r,i){i=i||this.options.bounceEasing,e>=this.pages.length?e=this.pages.length-1:e<0&&(e=0),t>=this.pages[0].length?t=this.pages[0].length-1:t<0&&(t=0);var s=this.pages[e][t].x,o=this.pages[e][t].y;r=r===undefined?this.options.snapSpeed||n.max(n.max(n.min(n.abs(s-this.x),1e3),n.min(n.abs(o-this.y),1e3)),300):r,this.currentPage={x:s,y:o,pageX:e,pageY:t},this.scrollTo(s,o,r,i)},next:function(e,t){var n=this.currentPage.pageX,r=this.currentPage.pageY;n++,n>=this.pages.length&&this.hasVerticalScroll&&(n=0,r++),this.goToPage(n,r,e,t)},prev:function(e,t){var n=this.currentPage.pageX,r=this.currentPage.pageY;n--,n<0&&this.hasVerticalScroll&&(n=0,r--),this.goToPage(n,r,e,t)},_initKeys:function(t){var n={pageUp:33,pageDown:34,end:35,home:36,left:37,up:38,right:39,down:40},r;if(typeof this.options.keyBindings=="object")for(r in this.options.keyBindings)typeof this.options.keyBindings[r]=="string"&&(this.options.keyBindings[r]=this.options.keyBindings[r].toUpperCase().charCodeAt(0));else this.options.keyBindings={};for(r in n)this.options.keyBindings[r]=this.options.keyBindings[r]||n[r];i.addEvent(e,"keydown",this),this.on("destroy",function(){i.removeEvent(e,"keydown",this)})},_key:function(e){if(!this.enabled)return;var t=this.options.snap,r=t?this.currentPage.pageX:this.x,s=t?this.currentPage.pageY:this.y,o=i.getTime(),u=this.keyTime||0,a=.25,f;this.options.useTransition&&this.isInTransition&&(f=this.getComputedPosition(),this._translate(n.round(f.x),n.round(f.y)),this.isInTransition=!1),this.keyAcceleration=o-u<200?n.min(this.keyAcceleration+a,50):0;switch(e.keyCode){case this.options.keyBindings.pageUp:this.hasHorizontalScroll&&!this.hasVerticalScroll?r+=t?1:this.wrapperWidth:s+=t?1:this.wrapperHeight;break;case this.options.keyBindings.pageDown:this.hasHorizontalScroll&&!this.hasVerticalScroll?r-=t?1:this.wrapperWidth:s-=t?1:this.wrapperHeight;break;case this.options.keyBindings.end:r=t?this.pages.length-1:this.maxScrollX,s=t?this.pages[0].length-1:this.maxScrollY;break;case this.options.keyBindings.home:r=0,s=0;break;case this.options.keyBindings.left:r+=t?-1:5+this.keyAcceleration>>0;break;case this.options.keyBindings.up:s+=t?1:5+this.keyAcceleration>>0;break;case this.options.keyBindings.right:r-=t?-1:5+this.keyAcceleration>>0;break;case this.options.keyBindings.down:s-=t?1:5+this.keyAcceleration>>0}if(t){this.goToPage(r,s);return}r>0?(r=0,this.keyAcceleration=0):r<this.maxScrollX&&(r=this.maxScrollX,this.keyAcceleration=0),s>0?(s=0,this.keyAcceleration=0):s<this.maxScrollY&&(s=this.maxScrollY,this.keyAcceleration=0),this.scrollTo(r,s,0),this.keyTime=o},_animate:function(e,t,n,s){function c(){var h=i.getTime(),p,d,v;if(h>=l){o.isAnimating=!1,o._translate(e,t),o.resetPosition(o.options.bounceTime)||o._execEvent("scrollEnd");return}h=(h-f)/n,v=s(h),p=(e-u)*v+u,d=(t-a)*v+a,o._translate(p,d),o.isAnimating&&r(c),o.options.probeType==3&&o._execEvent("scroll")}var o=this,u=this.x,a=this.y,f=i.getTime(),l=f+n;this.isAnimating=!0,c()},handleEvent:function(e){switch(e.type){case"touchstart":case"MSPointerDown":case"mousedown":this._start(e);break;case"touchmove":case"MSPointerMove":case"mousemove":this._move(e);break;case"touchend":case"MSPointerUp":case"mouseup":case"touchcancel":case"MSPointerCancel":case"mousecancel":this._end(e);break;case"orientationchange":case"resize":this._resize();break;case"transitionend":case"webkitTransitionEnd":case"oTransitionEnd":case"MSTransitionEnd":this._transitionEnd(e);break;case"DOMMouseScroll":case"mousewheel":this._wheel(e);break;case"keydown":this._key(e)}}},u.prototype={handleEvent:function(e){switch(e.type){case"touchstart":case"MSPointerDown":case"mousedown":this._start(e);break;case"touchmove":case"MSPointerMove":case"mousemove":this._move(e);break;case"touchend":case"MSPointerUp":case"mouseup":case"touchcancel":case"MSPointerCancel":case"mousecancel":this._end(e)}},destroy:function(){this.options.interactive&&(i.removeEvent(this.indicator,"touchstart",this),i.removeEvent(this.indicator,"MSPointerDown",this),i.removeEvent(this.indicator,"mousedown",this),i.removeEvent(e,"touchmove",this),i.removeEvent(e,"MSPointerMove",this),i.removeEvent(e,"mousemove",this),i.removeEvent(e,"touchend",this),i.removeEvent(e,"MSPointerUp",this),i.removeEvent(e,"mouseup",this)),this.options.defaultScrollbars&&this.wrapper.parentNode.removeChild(this.wrapper)},_start:function(t){var n=t.touches?t.touches[0]:t;t.preventDefault(),t.stopPropagation(),this.transitionTime(0),this.initiated=!0,this.moved=!1,this.lastPointX=n.pageX,this.lastPointY=n.pageY,this.startTime=i.getTime(),i.addEvent(e,"touchmove",this),i.addEvent(e,"MSPointerMove",this),i.addEvent(e,"mousemove",this),this.scroller._execEvent("scrollStart")},_move:function(e){var t=e.touches?e.touches[0]:e,n,r,s,o,u=i.getTime();this.moved=!0,n=t.pageX-this.lastPointX,this.lastPointX=t.pageX,r=t.pageY-this.lastPointY,this.lastPointY=t.pageY,s=this.x+n,o=this.y+r,this._pos(s,o),e.preventDefault(),
e.stopPropagation()},_end:function(t){if(!this.initiated)return;this.initiated=!1,t.preventDefault(),t.stopPropagation(),i.removeEvent(e,"touchmove",this),i.removeEvent(e,"MSPointerMove",this),i.removeEvent(e,"mousemove",this),this.moved&&this.scroller._execEvent("scrollEnd")},transitionTime:function(e){e=e||0,this.indicatorStyle[i.style.transitionDuration]=e+"ms"},transitionTimingFunction:function(e){this.indicatorStyle[i.style.transitionTimingFunction]=e},refresh:function(){this.transitionTime(0),this.options.listenX&&!this.options.listenY?this.indicatorStyle.display=this.scroller.hasHorizontalScroll?"block":"none":this.options.listenY&&!this.options.listenX?this.indicatorStyle.display=this.scroller.hasVerticalScroll?"block":"none":this.indicatorStyle.display=this.scroller.hasHorizontalScroll||this.scroller.hasVerticalScroll?"block":"none",this.scroller.hasHorizontalScroll&&this.scroller.hasVerticalScroll?(i.addClass(this.wrapper,"iScrollBothScrollbars"),i.removeClass(this.wrapper,"iScrollLoneScrollbar"),this.options.defaultScrollbars&&this.options.customStyle&&(this.options.listenX?this.wrapper.style.right="8px":this.wrapper.style.bottom="8px")):(i.removeClass(this.wrapper,"iScrollBothScrollbars"),i.addClass(this.wrapper,"iScrollLoneScrollbar"),this.options.defaultScrollbars&&this.options.customStyle&&(this.options.listenX?this.wrapper.style.right="2px":this.wrapper.style.bottom="2px"));var e=this.wrapper.offsetHeight;this.options.listenX&&(this.wrapperWidth=this.wrapper.clientWidth,this.options.resize?(this.indicatorWidth=n.max(n.round(this.wrapperWidth*this.wrapperWidth/this.scroller.scrollerWidth),8),this.indicatorStyle.width=this.indicatorWidth+"px"):this.indicatorWidth=this.indicator.clientWidth,this.maxPosX=this.wrapperWidth-this.indicatorWidth,this.sizeRatioX=this.options.speedRatioX||this.scroller.maxScrollX&&this.maxPosX/this.scroller.maxScrollX),this.options.listenY&&(this.wrapperHeight=this.wrapper.clientHeight,this.options.resize?(this.indicatorHeight=n.max(n.round(this.wrapperHeight*this.wrapperHeight/this.scroller.scrollerHeight),8),this.indicatorStyle.height=this.indicatorHeight+"px"):this.indicatorHeight=this.indicator.clientHeight,this.maxPosY=this.wrapperHeight-this.indicatorHeight,this.sizeRatioY=this.options.speedRatioY||this.scroller.maxScrollY&&this.maxPosY/this.scroller.maxScrollY),this.updatePosition()},updatePosition:function(){var e=n.round(this.sizeRatioX*this.scroller.x)||0,t=n.round(this.sizeRatioY*this.scroller.y)||0;this.options.ignoreBoundaries||(e<0?e=0:e>this.maxPosX&&(e=this.maxPosX),t<0?t=0:t>this.maxPosY&&(t=this.maxPosY)),this.x=e,this.y=t,this.scroller.options.useTransform?this.indicatorStyle[i.style.transform]="translate("+e+"px,"+t+"px)"+this.scroller.translateZ:(this.indicatorStyle.left=e+"px",this.indicatorStyle.top=t+"px")},_pos:function(e,t){e<0?e=0:e>this.maxPosX&&(e=this.maxPosX),t<0?t=0:t>this.maxPosY&&(t=this.maxPosY),e=this.options.listenX?n.round(e/this.sizeRatioX):this.scroller.x,t=this.options.listenY?n.round(t/this.sizeRatioY):this.scroller.y,this.scroller.scrollTo(e,t)}},s.ease=i.ease,s}(window,document,Math);

var UTILITIES={};UTILITIES.parseDate=function(e){if(typeof e=="undefined"||e==null)return;var t=e.indexOf(" ");return t>-1&&(e=e.substring(0,t)),Date.parse(e).toString("MM/dd/yy")},UTILITIES.get_city_acronym=function(e){e=e.toLowerCase();var t={};return t.charlotte="nc",t["new york"]="ny",t.chicago="chi",t.newark="nj",t.houston="tx",t["san francisco"]="sf",t["los angeles"]="la",t["washington, d.c."]="dc",t.washington="dc",t.brussels="bru",t.geneva="gva",t.london="uk",t["united kingdom"]="uk",t.russia="ru",t.moscow="ru",t.france="fr",t.paris="fr",t.beijing="bei",t["hong kong"]="hk",t.shanghai="sh",t["silicon valley"]="sv",t.taipei="tw",t.dubai="db",t[e]};
/*! jQuery Migrate v1.2.1 | (c) 2005, 2013 jQuery Foundation, Inc. and other contributors | jquery.org/license */
jQuery.migrateMute===void 0&&(jQuery.migrateMute=!0),function(e,t,n){function r(n){var r=t.console;i[n]||(i[n]=!0,e.migrateWarnings.push(n),r&&r.warn&&!e.migrateMute&&(r.warn("JQMIGRATE: "+n),e.migrateTrace&&r.trace&&r.trace()))}function a(t,a,i,o){if(Object.defineProperty)try{return Object.defineProperty(t,a,{configurable:!0,enumerable:!0,get:function(){return r(o),i},set:function(e){r(o),i=e}}),n}catch(s){}e._definePropertyBroken=!0,t[a]=i}var i={};e.migrateWarnings=[],!e.migrateMute&&t.console&&t.console.log&&t.console.log("JQMIGRATE: Logging is active"),e.migrateTrace===n&&(e.migrateTrace=!0),e.migrateReset=function(){i={},e.migrateWarnings.length=0},"BackCompat"===document.compatMode&&r("jQuery is not compatible with Quirks Mode");var o=e("<input/>",{size:1}).attr("size")&&e.attrFn,s=e.attr,u=e.attrHooks.value&&e.attrHooks.value.get||function(){return null},c=e.attrHooks.value&&e.attrHooks.value.set||function(){return n},l=/^(?:input|button)$/i,d=/^[238]$/,p=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,f=/^(?:checked|selected)$/i;a(e,"attrFn",o||{},"jQuery.attrFn is deprecated"),e.attr=function(t,a,i,u){var c=a.toLowerCase(),g=t&&t.nodeType;return u&&(4>s.length&&r("jQuery.fn.attr( props, pass ) is deprecated"),t&&!d.test(g)&&(o?a in o:e.isFunction(e.fn[a])))?e(t)[a](i):("type"===a&&i!==n&&l.test(t.nodeName)&&t.parentNode&&r("Can't change the 'type' of an input or button in IE 6/7/8"),!e.attrHooks[c]&&p.test(c)&&(e.attrHooks[c]={get:function(t,r){var a,i=e.prop(t,r);return i===!0||"boolean"!=typeof i&&(a=t.getAttributeNode(r))&&a.nodeValue!==!1?r.toLowerCase():n},set:function(t,n,r){var a;return n===!1?e.removeAttr(t,r):(a=e.propFix[r]||r,a in t&&(t[a]=!0),t.setAttribute(r,r.toLowerCase())),r}},f.test(c)&&r("jQuery.fn.attr('"+c+"') may use property instead of attribute")),s.call(e,t,a,i))},e.attrHooks.value={get:function(e,t){var n=(e.nodeName||"").toLowerCase();return"button"===n?u.apply(this,arguments):("input"!==n&&"option"!==n&&r("jQuery.fn.attr('value') no longer gets properties"),t in e?e.value:null)},set:function(e,t){var a=(e.nodeName||"").toLowerCase();return"button"===a?c.apply(this,arguments):("input"!==a&&"option"!==a&&r("jQuery.fn.attr('value', val) no longer sets properties"),e.value=t,n)}};var g,h,v=e.fn.init,m=e.parseJSON,y=/^([^<]*)(<[\w\W]+>)([^>]*)$/;e.fn.init=function(t,n,a){var i;return t&&"string"==typeof t&&!e.isPlainObject(n)&&(i=y.exec(e.trim(t)))&&i[0]&&("<"!==t.charAt(0)&&r("$(html) HTML strings must start with '<' character"),i[3]&&r("$(html) HTML text after last tag is ignored"),"#"===i[0].charAt(0)&&(r("HTML string cannot start with a '#' character"),e.error("JQMIGRATE: Invalid selector string (XSS)")),n&&n.context&&(n=n.context),e.parseHTML)?v.call(this,e.parseHTML(i[2],n,!0),n,a):v.apply(this,arguments)},e.fn.init.prototype=e.fn,e.parseJSON=function(e){return e||null===e?m.apply(this,arguments):(r("jQuery.parseJSON requires a valid JSON string"),null)},e.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||0>e.indexOf("compatible")&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e.browser||(g=e.uaMatch(navigator.userAgent),h={},g.browser&&(h[g.browser]=!0,h.version=g.version),h.chrome?h.webkit=!0:h.webkit&&(h.safari=!0),e.browser=h),a(e,"browser",e.browser,"jQuery.browser is deprecated"),e.sub=function(){function t(e,n){return new t.fn.init(e,n)}e.extend(!0,t,this),t.superclass=this,t.fn=t.prototype=this(),t.fn.constructor=t,t.sub=this.sub,t.fn.init=function(r,a){return a&&a instanceof e&&!(a instanceof t)&&(a=t(a)),e.fn.init.call(this,r,a,n)},t.fn.init.prototype=t.fn;var n=t(document);return r("jQuery.sub() is deprecated"),t},e.ajaxSetup({converters:{"text json":e.parseJSON}});var b=e.fn.data;e.fn.data=function(t){var a,i,o=this[0];return!o||"events"!==t||1!==arguments.length||(a=e.data(o,t),i=e._data(o,t),a!==n&&a!==i||i===n)?b.apply(this,arguments):(r("Use of jQuery.fn.data('events') is deprecated"),i)};var j=/\/(java|ecma)script/i,w=e.fn.andSelf||e.fn.addBack;e.fn.andSelf=function(){return r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),w.apply(this,arguments)},e.clean||(e.clean=function(t,a,i,o){a=a||document,a=!a.nodeType&&a[0]||a,a=a.ownerDocument||a,r("jQuery.clean() is deprecated");var s,u,c,l,d=[];if(e.merge(d,e.buildFragment(t,a).childNodes),i)for(c=function(e){return!e.type||j.test(e.type)?o?o.push(e.parentNode?e.parentNode.removeChild(e):e):i.appendChild(e):n},s=0;null!=(u=d[s]);s++)e.nodeName(u,"script")&&c(u)||(i.appendChild(u),u.getElementsByTagName!==n&&(l=e.grep(e.merge([],u.getElementsByTagName("script")),c),d.splice.apply(d,[s+1,0].concat(l)),s+=l.length));return d});var Q=e.event.add,x=e.event.remove,k=e.event.trigger,N=e.fn.toggle,T=e.fn.live,M=e.fn.die,S="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",C=RegExp("\\b(?:"+S+")\\b"),H=/(?:^|\s)hover(\.\S+|)\b/,A=function(t){return"string"!=typeof t||e.event.special.hover?t:(H.test(t)&&r("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),t&&t.replace(H,"mouseenter$1 mouseleave$1"))};e.event.props&&"attrChange"!==e.event.props[0]&&e.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),e.event.dispatch&&a(e.event,"handle",e.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),e.event.add=function(e,t,n,a,i){e!==document&&C.test(t)&&r("AJAX events should be attached to document: "+t),Q.call(this,e,A(t||""),n,a,i)},e.event.remove=function(e,t,n,r,a){x.call(this,e,A(t)||"",n,r,a)},e.fn.error=function(){var e=Array.prototype.slice.call(arguments,0);return r("jQuery.fn.error() is deprecated"),e.splice(0,0,"error"),arguments.length?this.bind.apply(this,e):(this.triggerHandler.apply(this,e),this)},e.fn.toggle=function(t,n){if(!e.isFunction(t)||!e.isFunction(n))return N.apply(this,arguments);r("jQuery.fn.toggle(handler, handler...) is deprecated");var a=arguments,i=t.guid||e.guid++,o=0,s=function(n){var r=(e._data(this,"lastToggle"+t.guid)||0)%o;return e._data(this,"lastToggle"+t.guid,r+1),n.preventDefault(),a[r].apply(this,arguments)||!1};for(s.guid=i;a.length>o;)a[o++].guid=i;return this.click(s)},e.fn.live=function(t,n,a){return r("jQuery.fn.live() is deprecated"),T?T.apply(this,arguments):(e(this.context).on(t,this.selector,n,a),this)},e.fn.die=function(t,n){return r("jQuery.fn.die() is deprecated"),M?M.apply(this,arguments):(e(this.context).off(t,this.selector||"**",n),this)},e.event.trigger=function(e,t,n,a){return n||C.test(e)||r("Global events are undocumented and deprecated"),k.call(this,e,t,n||document,a)},e.each(S.split("|"),function(t,n){e.event.special[n]={setup:function(){var t=this;return t!==document&&(e.event.add(document,n+"."+e.guid,function(){e.event.trigger(n,null,t,!0)}),e._data(this,n,e.guid++)),!1},teardown:function(){return this!==document&&e.event.remove(document,n+"."+e._data(this,n)),!1}}})}(jQuery,window);
/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
;(function(e){typeof define=="function"&&define.amd?define(["jquery"],e):typeof exports=="object"?e(require("jquery")):e(jQuery)})(function(e){function n(e){return u.raw?e:encodeURIComponent(e)}function r(e){return u.raw?e:decodeURIComponent(e)}function i(e){return n(u.json?JSON.stringify(e):String(e))}function s(e){e.indexOf('"')===0&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return e=decodeURIComponent(e.replace(t," ")),u.json?JSON.parse(e):e}catch(n){}}function o(t,n){var r=u.raw?t:s(t);return e.isFunction(n)?n(r):r}var t=/\+/g,u=e.cookie=function(t,s,a){if(s!==undefined&&!e.isFunction(s)){a=e.extend({},u.defaults,a);if(typeof a.expires=="number"){var f=a.expires,l=a.expires=new Date;l.setTime(+l+f*864e5)}return document.cookie=[n(t),"=",i(s),a.expires?"; expires="+a.expires.toUTCString():"",a.path?"; path="+a.path:"",a.domain?"; domain="+a.domain:"",a.secure?"; secure":""].join("")}var c=t?undefined:{},h=document.cookie?document.cookie.split("; "):[];for(var p=0,d=h.length;p<d;p++){var v=h[p].split("="),m=r(v.shift()),g=v.join("=");if(t&&t===m){c=o(g,s);break}!t&&(g=o(g))!==undefined&&(c[m]=g)}return c};u.defaults={},e.removeCookie=function(t,n){return e.cookie(t)===undefined?!1:(e.cookie(t,"",e.extend({},n,{expires:-1})),!e.cookie(t))}});
Date.CultureInfo={name:"en-US",englishName:"English (United States)",nativeName:"English (United States)",dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],abbreviatedDayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],shortestDayNames:["Su","Mo","Tu","We","Th","Fr","Sa"],firstLetterDayNames:["S","M","T","W","T","F","S"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],abbreviatedMonthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],amDesignator:"AM",pmDesignator:"PM",firstDayOfWeek:0,twoDigitYearMax:2029,dateElementOrder:"mdy",formatPatterns:{shortDate:"M/d/yyyy",longDate:"dddd, MMMM dd, yyyy",shortTime:"h:mm tt",longTime:"h:mm:ss tt",fullDateTime:"dddd, MMMM dd, yyyy h:mm:ss tt",sortableDateTime:"yyyy-MM-ddTHH:mm:ss",universalSortableDateTime:"yyyy-MM-dd HH:mm:ssZ",rfc1123:"ddd, dd MMM yyyy HH:mm:ss GMT",monthDay:"MMMM dd",yearMonth:"MMMM, yyyy"},regexPatterns:{jan:/^jan(uary)?/i,feb:/^feb(ruary)?/i,mar:/^mar(ch)?/i,apr:/^apr(il)?/i,may:/^may/i,jun:/^jun(e)?/i,jul:/^jul(y)?/i,aug:/^aug(ust)?/i,sep:/^sep(t(ember)?)?/i,oct:/^oct(ober)?/i,nov:/^nov(ember)?/i,dec:/^dec(ember)?/i,sun:/^su(n(day)?)?/i,mon:/^mo(n(day)?)?/i,tue:/^tu(e(s(day)?)?)?/i,wed:/^we(d(nesday)?)?/i,thu:/^th(u(r(s(day)?)?)?)?/i,fri:/^fr(i(day)?)?/i,sat:/^sa(t(urday)?)?/i,future:/^next/i,past:/^last|past|prev(ious)?/i,add:/^(\+|after|from)/i,subtract:/^(\-|before|ago)/i,yesterday:/^yesterday/i,today:/^t(oday)?/i,tomorrow:/^tomorrow/i,now:/^n(ow)?/i,millisecond:/^ms|milli(second)?s?/i,second:/^sec(ond)?s?/i,minute:/^min(ute)?s?/i,hour:/^h(ou)?rs?/i,week:/^w(ee)?k/i,month:/^m(o(nth)?s?)?/i,day:/^d(ays?)?/i,year:/^y((ea)?rs?)?/i,shortMeridian:/^(a|p)/i,longMeridian:/^(a\.?m?\.?|p\.?m?\.?)/i,timezone:/^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt)/i,ordinalSuffix:/^\s*(st|nd|rd|th)/i,timeContext:/^\s*(\:|a|p)/i},abbreviatedTimeZoneStandard:{GMT:"-000",EST:"-0400",CST:"-0500",MST:"-0600",PST:"-0700"},abbreviatedTimeZoneDST:{GMT:"-000",EDT:"-0500",CDT:"-0600",MDT:"-0700",PDT:"-0800"}},Date.getMonthNumberFromName=function(e){var t=Date.CultureInfo.monthNames,n=Date.CultureInfo.abbreviatedMonthNames,r=e.toLowerCase();for(var i=0;i<t.length;i++)if(t[i].toLowerCase()==r||n[i].toLowerCase()==r)return i;return-1},Date.getDayNumberFromName=function(e){var t=Date.CultureInfo.dayNames,n=Date.CultureInfo.abbreviatedDayNames,r=Date.CultureInfo.shortestDayNames,i=e.toLowerCase();for(var s=0;s<t.length;s++)if(t[s].toLowerCase()==i||n[s].toLowerCase()==i)return s;return-1},Date.isLeapYear=function(e){return e%4===0&&e%100!==0||e%400===0},Date.getDaysInMonth=function(e,t){return[31,Date.isLeapYear(e)?29:28,31,30,31,30,31,31,30,31,30,31][t]},Date.getTimezoneOffset=function(e,t){return t||!1?Date.CultureInfo.abbreviatedTimeZoneDST[e.toUpperCase()]:Date.CultureInfo.abbreviatedTimeZoneStandard[e.toUpperCase()]},Date.getTimezoneAbbreviation=function(e,t){var n=t||!1?Date.CultureInfo.abbreviatedTimeZoneDST:Date.CultureInfo.abbreviatedTimeZoneStandard,r;for(r in n)if(n[r]===e)return r;return null},Date.prototype.clone=function(){return new Date(this.getTime())},Date.prototype.compareTo=function(e){if(isNaN(this))throw new Error(this);if(e instanceof Date&&!isNaN(e))return this>e?1:this<e?-1:0;throw new TypeError(e)},Date.prototype.equals=function(e){return this.compareTo(e)===0},Date.prototype.between=function(e,t){var n=this.getTime();return n>=e.getTime()&&n<=t.getTime()},Date.prototype.addMilliseconds=function(e){return this.setMilliseconds(this.getMilliseconds()+e),this},Date.prototype.addSeconds=function(e){return this.addMilliseconds(e*1e3)},Date.prototype.addMinutes=function(e){return this.addMilliseconds(e*6e4)},Date.prototype.addHours=function(e){return this.addMilliseconds(e*36e5)},Date.prototype.addDays=function(e){return this.addMilliseconds(e*864e5)},Date.prototype.addWeeks=function(e){return this.addMilliseconds(e*6048e5)},Date.prototype.addMonths=function(e){var t=this.getDate();return this.setDate(1),this.setMonth(this.getMonth()+e),this.setDate(Math.min(t,this.getDaysInMonth())),this},Date.prototype.addYears=function(e){return this.addMonths(e*12)},Date.prototype.add=function(e){if(typeof e=="number")return this._orient=e,this;var t=e;return(t.millisecond||t.milliseconds)&&this.addMilliseconds(t.millisecond||t.milliseconds),(t.second||t.seconds)&&this.addSeconds(t.second||t.seconds),(t.minute||t.minutes)&&this.addMinutes(t.minute||t.minutes),(t.hour||t.hours)&&this.addHours(t.hour||t.hours),(t.month||t.months)&&this.addMonths(t.month||t.months),(t.year||t.years)&&this.addYears(t.year||t.years),(t.day||t.days)&&this.addDays(t.day||t.days),this},Date._validate=function(e,t,n,r){if(typeof e!="number")throw new TypeError(e+" is not a Number.");if(e<t||e>n)throw new RangeError(e+" is not a valid value for "+r+".");return!0},Date.validateMillisecond=function(e){return Date._validate(e,0,999,"milliseconds")},Date.validateSecond=function(e){return Date._validate(e,0,59,"seconds")},Date.validateMinute=function(e){return Date._validate(e,0,59,"minutes")},Date.validateHour=function(e){return Date._validate(e,0,23,"hours")},Date.validateDay=function(e,t,n){return Date._validate(e,1,Date.getDaysInMonth(t,n),"days")},Date.validateMonth=function(e){return Date._validate(e,0,11,"months")},Date.validateYear=function(e){return Date._validate(e,1,9999,"seconds")},Date.prototype.set=function(e){var t=e;return!t.millisecond&&t.millisecond!==0&&(t.millisecond=-1),!t.second&&t.second!==0&&(t.second=-1),!t.minute&&t.minute!==0&&(t.minute=-1),!t.hour&&t.hour!==0&&(t.hour=-1),!t.day&&t.day!==0&&(t.day=-1),!t.month&&t.month!==0&&(t.month=-1),!t.year&&t.year!==0&&(t.year=-1),t.millisecond!=-1&&Date.validateMillisecond(t.millisecond)&&this.addMilliseconds(t.millisecond-this.getMilliseconds()),t.second!=-1&&Date.validateSecond(t.second)&&this.addSeconds(t.second-this.getSeconds()),t.minute!=-1&&Date.validateMinute
(t.minute)&&this.addMinutes(t.minute-this.getMinutes()),t.hour!=-1&&Date.validateHour(t.hour)&&this.addHours(t.hour-this.getHours()),t.month!==-1&&Date.validateMonth(t.month)&&this.addMonths(t.month-this.getMonth()),t.year!=-1&&Date.validateYear(t.year)&&this.addYears(t.year-this.getFullYear()),t.day!=-1&&Date.validateDay(t.day,this.getFullYear(),this.getMonth())&&this.addDays(t.day-this.getDate()),t.timezone&&this.setTimezone(t.timezone),t.timezoneOffset&&this.setTimezoneOffset(t.timezoneOffset),this},Date.prototype.clearTime=function(){return this.setHours(0),this.setMinutes(0),this.setSeconds(0),this.setMilliseconds(0),this},Date.prototype.isLeapYear=function(){var e=this.getFullYear();return e%4===0&&e%100!==0||e%400===0},Date.prototype.isWeekday=function(){return!this.is().sat()&&!this.is().sun()},Date.prototype.getDaysInMonth=function(){return Date.getDaysInMonth(this.getFullYear(),this.getMonth())},Date.prototype.moveToFirstDayOfMonth=function(){return this.set({day:1})},Date.prototype.moveToLastDayOfMonth=function(){return this.set({day:this.getDaysInMonth()})},Date.prototype.moveToDayOfWeek=function(e,t){var n=(e-this.getDay()+7*(t||1))%7;return this.addDays(n===0?n+=7*(t||1):n)},Date.prototype.moveToMonth=function(e,t){var n=(e-this.getMonth()+12*(t||1))%12;return this.addMonths(n===0?n+=12*(t||1):n)},Date.prototype.getDayOfYear=function(){return Math.floor((this-new Date(this.getFullYear(),0,1))/864e5)},Date.prototype.getWeekOfYear=function(e){var t=this.getFullYear(),n=this.getMonth(),r=this.getDate(),i=e||Date.CultureInfo.firstDayOfWeek,s=8-(new Date(t,0,1)).getDay();s==8&&(s=1);var o=(Date.UTC(t,n,r,0,0,0)-Date.UTC(t,0,1,0,0,0))/864e5+1,u=Math.floor((o-s+7)/7);if(u===i){t--;var a=8-(new Date(t,0,1)).getDay();a==2||a==8?u=53:u=52}return u},Date.prototype.isDST=function(){return console.log("isDST"),this.toString().match(/(E|C|M|P)(S|D)T/)[2]=="D"},Date.prototype.getTimezone=function(){return Date.getTimezoneAbbreviation(this.getUTCOffset,this.isDST())},Date.prototype.setTimezoneOffset=function(e){var t=this.getTimezoneOffset(),n=Number(e)*-6/10;return this.addMinutes(n-t),this},Date.prototype.setTimezone=function(e){return this.setTimezoneOffset(Date.getTimezoneOffset(e))},Date.prototype.getUTCOffset=function(){var e=this.getTimezoneOffset()*-10/6,t;return e<0?(t=(e-1e4).toString(),t[0]+t.substr(2)):(t=(e+1e4).toString(),"+"+t.substr(1))},Date.prototype.getDayName=function(e){return e?Date.CultureInfo.abbreviatedDayNames[this.getDay()]:Date.CultureInfo.dayNames[this.getDay()]},Date.prototype.getMonthName=function(e){return e?Date.CultureInfo.abbreviatedMonthNames[this.getMonth()]:Date.CultureInfo.monthNames[this.getMonth()]},Date.prototype._toString=Date.prototype.toString,Date.prototype.toString=function(e){var t=this,n=function(t){return t.toString().length==1?"0"+t:t};return e?e.replace(/dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|zz?z?/g,function(e){switch(e){case"hh":return n(t.getHours()<13?t.getHours():t.getHours()-12);case"h":return t.getHours()<13?t.getHours():t.getHours()-12;case"HH":return n(t.getHours());case"H":return t.getHours();case"mm":return n(t.getMinutes());case"m":return t.getMinutes();case"ss":return n(t.getSeconds());case"s":return t.getSeconds();case"yyyy":return t.getFullYear();case"yy":return t.getFullYear().toString().substring(2,4);case"dddd":return t.getDayName();case"ddd":return t.getDayName(!0);case"dd":return n(t.getDate());case"d":return t.getDate().toString();case"MMMM":return t.getMonthName();case"MMM":return t.getMonthName(!0);case"MM":return n(t.getMonth()+1);case"M":return t.getMonth()+1;case"t":return t.getHours()<12?Date.CultureInfo.amDesignator.substring(0,1):Date.CultureInfo.pmDesignator.substring(0,1);case"tt":return t.getHours()<12?Date.CultureInfo.amDesignator:Date.CultureInfo.pmDesignator;case"zzz":case"zz":case"z":return""}}):this._toString()},Date.now=function(){return new Date},Date.today=function(){return Date.now().clearTime()},Date.prototype._orient=1,Date.prototype.next=function(){return this._orient=1,this},Date.prototype.last=Date.prototype.prev=Date.prototype.previous=function(){return this._orient=-1,this},Date.prototype._is=!1,Date.prototype.is=function(){return this._is=!0,this},Number.prototype._dateElement="day",Number.prototype.fromNow=function(){var e={};return e[this._dateElement]=this,Date.now().add(e)},Number.prototype.ago=function(){var e={};return e[this._dateElement]=this*-1,Date.now().add(e)},function(){var e=Date.prototype,t=Number.prototype,n="sunday monday tuesday wednesday thursday friday saturday".split(/\s/),r="january february march april may june july august september october november december".split(/\s/),i="Millisecond Second Minute Hour Day Week Month Year".split(/\s/),s,o=function(e){return function(){return this._is?(this._is=!1,this.getDay()==e):this.moveToDayOfWeek(e,this._orient)}};for(var u=0;u<n.length;u++)e[n[u]]=e[n[u].substring(0,3)]=o(u);var a=function(e){return function(){return this._is?(this._is=!1,this.getMonth()===e):this.moveToMonth(e,this._orient)}};for(var f=0;f<r.length;f++)e[r[f]]=e[r[f].substring(0,3)]=a(f);var l=function(e){return function(){return e.substring(e.length-1)!="s"&&(e+="s"),this["add"+e](this._orient)}},c=function(e){return function(){return this._dateElement=e,this}};for(var h=0;h<i.length;h++)s=i[h].toLowerCase(),e[s]=e[s+"s"]=l(i[h]),t[s]=t[s+"s"]=c(s)}(),Date.prototype.toJSONString=function(){return this.toString("yyyy-MM-ddThh:mm:ssZ")},Date.prototype.toShortDateString=function(){return this.toString(Date.CultureInfo.formatPatterns.shortDatePattern)},Date.prototype.toLongDateString=function(){return this.toString(Date.CultureInfo.formatPatterns.longDatePattern)},Date.prototype.toShortTimeString=function(){return this.toString(Date.CultureInfo.formatPatterns.shortTimePattern)},Date.prototype.toLongTimeString=function(){return this.toString(Date.CultureInfo.formatPatterns.longTimePattern)},Date.prototype.getOrdinal=function(){switch(this.getDate()){case 1:case 21
:case 31:return"st";case 2:case 22:return"nd";case 3:case 23:return"rd";default:return"th"}},function(){Date.Parsing={Exception:function(e){this.message="Parse error at '"+e.substring(0,10)+" ...'"}};var e=Date.Parsing,t=e.Operators={rtoken:function(t){return function(n){var i=n.match(t);if(i)return[i[0],n.substring(i[0].length)];throw new e.Exception(n)}},token:function(e){return function(e){return t.rtoken(new RegExp("^s*"+e+"s*"))(e)}},stoken:function(e){return t.rtoken(new RegExp("^"+e))},until:function(e){return function(t){var n=[],r=null;while(t.length){try{r=e.call(this,t)}catch(i){n.push(r[0]),t=r[1];continue}break}return[n,t]}},many:function(e){return function(t){var n=[],r=null;while(t.length){try{r=e.call(this,t)}catch(i){return[n,t]}n.push(r[0]),t=r[1]}return[n,t]}},optional:function(e){return function(t){var n=null;try{n=e.call(this,t)}catch(r){return[null,t]}return[n[0],n[1]]}},not:function(t){return function(n){try{t.call(this,n)}catch(r){return[null,n]}throw new e.Exception(n)}},ignore:function(e){return e?function(t){var n=null;return n=e.call(this,t),[null,n[1]]}:null},product:function(){var e=arguments[0],n=Array.prototype.slice.call(arguments,1),r=[];for(var i=0;i<e.length;i++)r.push(t.each(e[i],n));return r},cache:function(t){var n={},r=null;return function(i){try{r=n[i]=n[i]||t.call(this,i)}catch(s){r=n[i]=s}if(r instanceof e.Exception)throw r;return r}},any:function(){var t=arguments;return function(n){var r=null;for(var i=0;i<t.length;i++){if(t[i]==null)continue;try{r=t[i].call(this,n)}catch(s){r=null}if(r)return r}throw new e.Exception(n)}},each:function(){var t=arguments;return function(n){var r=[],i=null;for(var s=0;s<t.length;s++){if(t[s]==null)continue;try{i=t[s].call(this,n)}catch(o){throw new e.Exception(n)}r.push(i[0]),n=i[1]}return[r,n]}},all:function(){var e=arguments,t=t;return t.each(t.optional(e))},sequence:function(n,r,i){return r=r||t.rtoken(/^\s*/),i=i||null,n.length==1?n[0]:function(t){var s=null,o=null,u=[];for(var a=0;a<n.length;a++){try{s=n[a].call(this,t)}catch(f){break}u.push(s[0]);try{o=r.call(this,s[1])}catch(l){o=null;break}t=o[1]}if(!s)throw new e.Exception(t);if(o)throw new e.Exception(o[1]);if(i)try{s=i.call(this,s[1])}catch(h){throw new e.Exception(s[1])}return[u,s?s[1]:t]}},between:function(e,n,i){i=i||e;var s=t.each(t.ignore(e),n,t.ignore(i));return function(e){var t=s.call(this,e);return[[t[0][0],r[0][2]],t[1]]}},list:function(e,n,r){return n=n||t.rtoken(/^\s*/),r=r||null,e instanceof Array?t.each(t.product(e.slice(0,-1),t.ignore(n)),e.slice(-1),t.ignore(r)):t.each(t.many(t.each(e,t.ignore(n))),px,t.ignore(r))},set:function(n,r,i){return r=r||t.rtoken(/^\s*/),i=i||null,function(s){var o=null,u=null,a=null,f=null,l=[[],s],h=!1;for(var p=0;p<n.length;p++){a=null,u=null,o=null,h=n.length==1;try{o=n[p].call(this,s)}catch(v){continue}f=[[o[0]],o[1]];if(o[1].length>0&&!h)try{a=r.call(this,o[1])}catch(m){h=!0}else h=!0;!h&&a[1].length===0&&(h=!0);if(!h){var g=[];for(var y=0;y<n.length;y++)p!=y&&g.push(n[y]);u=t.set(g,r).call(this,a[1]),u[0].length>0&&(f[0]=f[0].concat(u[0]),f[1]=u[1])}f[1].length<l[1].length&&(l=f);if(l[1].length===0)break}if(l[0].length===0)return l;if(i){try{a=i.call(this,l[1])}catch(b){throw new e.Exception(l[1])}l[1]=a[1]}return l}},forward:function(e,t){return function(n){return e[t].call(this,n)}},replace:function(e,t){return function(n){var r=e.call(this,n);return[t,r[1]]}},process:function(e,t){return function(n){var r=e.call(this,n);return[t.call(this,r[0]),r[1]]}},min:function(t,n){return function(r){var i=n.call(this,r);if(i[0].length<t)throw new e.Exception(r);return i}}},n=function(e){return function(){var t=null,n=[];arguments.length>1?t=Array.prototype.slice.call(arguments):arguments[0]instanceof Array&&(t=arguments[0]);if(!t)return e.apply(null,arguments);for(var r=0,i=t.shift();r<i.length;r++)return t.unshift(i[r]),n.push(e.apply(null,t)),t.shift(),n}},i="optional not ignore cache".split(/\s/);for(var s=0;s<i.length;s++)t[i[s]]=n(t[i[s]]);var o=function(e){return function(){return arguments[0]instanceof Array?e.apply(null,arguments[0]):e.apply(null,arguments)}},u="each any all".split(/\s/);for(var a=0;a<u.length;a++)t[u[a]]=o(t[u[a]])}(),function(){var e=function(t){var n=[];for(var r=0;r<t.length;r++)t[r]instanceof Array?n=n.concat(e(t[r])):t[r]&&n.push(t[r]);return n};Date.Grammar={},Date.Translator={hour:function(e){return function(){this.hour=Number(e)}},minute:function(e){return function(){this.minute=Number(e)}},second:function(e){return function(){this.second=Number(e)}},meridian:function(e){return function(){this.meridian=e.slice(0,1).toLowerCase()}},timezone:function(e){return function(){var t=e.replace(/[^\d\+\-]/g,"");t.length?this.timezoneOffset=Number(t):this.timezone=e.toLowerCase()}},day:function(e){var t=e[0];return function(){this.day=Number(t.match(/\d+/)[0])}},month:function(e){return function(){this.month=e.length==3?Date.getMonthNumberFromName(e):Number(e)-1}},year:function(e){return function(){var t=Number(e);this.year=e.length>2?t:t+(t+2e3<Date.CultureInfo.twoDigitYearMax?2e3:1900)}},rday:function(e){return function(){switch(e){case"yesterday":this.days=-1;break;case"tomorrow":this.days=1;break;case"today":this.days=0;break;case"now":this.days=0,this.now=!0}}},finishExact:function(e){e=e instanceof Array?e:[e];var t=new Date;this.year=t.getFullYear(),this.month=t.getMonth(),this.day=1,this.hour=0,this.minute=0,this.second=0;for(var n=0;n<e.length;n++)e[n]&&e[n].call(this);this.hour=this.meridian=="p"&&this.hour<13?this.hour+12:this.hour;if(this.day>Date.getDaysInMonth(this.year,this.month))throw new RangeError(this.day+" is not a valid value for days.");var r=new Date(this.year,this.month,this.day,this.hour,this.minute,this.second);return this.timezone?r.set({timezone:this.timezone}):this.timezoneOffset&&r.set({timezoneOffset:this.timezoneOffset}),r},finish:function(t){t=t instanceof Array?e(t):[t];if(t.length===0)return null;for(var n=0;n<t.length;n++)typeof t[n]=="function"&&t[n].call
(this);if(this.now)return new Date;var r=Date.today(),i=null,s=this.days!=null||!!this.orient||!!this.operator;if(s){var o,u,a;a=this.orient=="past"||this.operator=="subtract"?-1:1,this.weekday&&(this.unit="day",o=Date.getDayNumberFromName(this.weekday)-r.getDay(),u=7,this.days=o?(o+a*u)%u:a*u),this.month&&(this.unit="month",o=this.month-r.getMonth(),u=12,this.months=o?(o+a*u)%u:a*u,this.month=null),this.unit||(this.unit="day");if(this[this.unit+"s"]==null||this.operator!=null)this.value||(this.value=1),this.unit=="week"&&(this.unit="day",this.value=this.value*7),this[this.unit+"s"]=this.value*a;return r.add(this)}return this.meridian&&this.hour&&(this.hour=this.hour<13&&this.meridian=="p"?this.hour+12:this.hour),this.weekday&&!this.day&&(this.day=r.addDays(Date.getDayNumberFromName(this.weekday)-r.getDay()).getDate()),this.month&&!this.day&&(this.day=1),r.set(this)}};var t=Date.Parsing.Operators,n=Date.Grammar,r=Date.Translator,i;n.datePartDelimiter=t.rtoken(/^([\s\-\.\,\/\x27]+)/),n.timePartDelimiter=t.stoken(":"),n.whiteSpace=t.rtoken(/^\s*/),n.generalDelimiter=t.rtoken(/^(([\s\,]|at|on)+)/);var s={};n.ctoken=function(e){var n=s[e];if(!n){var r=Date.CultureInfo.regexPatterns,i=e.split(/\s+/),o=[];for(var u=0;u<i.length;u++)o.push(t.replace(t.rtoken(r[i[u]]),i[u]));n=s[e]=t.any.apply(null,o)}return n},n.ctoken2=function(e){return t.rtoken(Date.CultureInfo.regexPatterns[e])},n.h=t.cache(t.process(t.rtoken(/^(0[0-9]|1[0-2]|[1-9])/),r.hour)),n.hh=t.cache(t.process(t.rtoken(/^(0[0-9]|1[0-2])/),r.hour)),n.H=t.cache(t.process(t.rtoken(/^([0-1][0-9]|2[0-3]|[0-9])/),r.hour)),n.HH=t.cache(t.process(t.rtoken(/^([0-1][0-9]|2[0-3])/),r.hour)),n.m=t.cache(t.process(t.rtoken(/^([0-5][0-9]|[0-9])/),r.minute)),n.mm=t.cache(t.process(t.rtoken(/^[0-5][0-9]/),r.minute)),n.s=t.cache(t.process(t.rtoken(/^([0-5][0-9]|[0-9])/),r.second)),n.ss=t.cache(t.process(t.rtoken(/^[0-5][0-9]/),r.second)),n.hms=t.cache(t.sequence([n.H,n.mm,n.ss],n.timePartDelimiter)),n.t=t.cache(t.process(n.ctoken2("shortMeridian"),r.meridian)),n.tt=t.cache(t.process(n.ctoken2("longMeridian"),r.meridian)),n.z=t.cache(t.process(t.rtoken(/^(\+|\-)?\s*\d\d\d\d?/),r.timezone)),n.zz=t.cache(t.process(t.rtoken(/^(\+|\-)\s*\d\d\d\d/),r.timezone)),n.zzz=t.cache(t.process(n.ctoken2("timezone"),r.timezone)),n.timeSuffix=t.each(t.ignore(n.whiteSpace),t.set([n.tt,n.zzz])),n.time=t.each(t.optional(t.ignore(t.stoken("T"))),n.hms,n.timeSuffix),n.d=t.cache(t.process(t.each(t.rtoken(/^([0-2]\d|3[0-1]|\d)/),t.optional(n.ctoken2("ordinalSuffix"))),r.day)),n.dd=t.cache(t.process(t.each(t.rtoken(/^([0-2]\d|3[0-1])/),t.optional(n.ctoken2("ordinalSuffix"))),r.day)),n.ddd=n.dddd=t.cache(t.process(n.ctoken("sun mon tue wed thu fri sat"),function(e){return function(){this.weekday=e}})),n.M=t.cache(t.process(t.rtoken(/^(1[0-2]|0\d|\d)/),r.month)),n.MM=t.cache(t.process(t.rtoken(/^(1[0-2]|0\d)/),r.month)),n.MMM=n.MMMM=t.cache(t.process(n.ctoken("jan feb mar apr may jun jul aug sep oct nov dec"),r.month)),n.y=t.cache(t.process(t.rtoken(/^(\d\d?)/),r.year)),n.yy=t.cache(t.process(t.rtoken(/^(\d\d)/),r.year)),n.yyy=t.cache(t.process(t.rtoken(/^(\d\d?\d?\d?)/),r.year)),n.yyyy=t.cache(t.process(t.rtoken(/^(\d\d\d\d)/),r.year)),i=function(){return t.each(t.any.apply(null,arguments),t.not(n.ctoken2("timeContext")))},n.day=i(n.d,n.dd),n.month=i(n.M,n.MMM),n.year=i(n.yyyy,n.yy),n.orientation=t.process(n.ctoken("past future"),function(e){return function(){this.orient=e}}),n.operator=t.process(n.ctoken("add subtract"),function(e){return function(){this.operator=e}}),n.rday=t.process(n.ctoken("yesterday tomorrow today now"),r.rday),n.unit=t.process(n.ctoken("minute hour day week month year"),function(e){return function(){this.unit=e}}),n.value=t.process(t.rtoken(/^\d\d?(st|nd|rd|th)?/),function(e){return function(){this.value=e.replace(/\D/g,"")}}),n.expression=t.set([n.rday,n.operator,n.value,n.unit,n.orientation,n.ddd,n.MMM]),i=function(){return t.set(arguments,n.datePartDelimiter)},n.mdy=i(n.ddd,n.month,n.day,n.year),n.ymd=i(n.ddd,n.year,n.month,n.day),n.dmy=i(n.ddd,n.day,n.month,n.year),n.date=function(e){return(n[Date.CultureInfo.dateElementOrder]||n.mdy).call(this,e)},n.format=t.process(t.many(t.any(t.process(t.rtoken(/^(dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|zz?z?)/),function(e){if(n[e])return n[e];throw Date.Parsing.Exception(e)}),t.process(t.rtoken(/^[^dMyhHmstz]+/),function(e){return t.ignore(t.stoken(e))}))),function(e){return t.process(t.each.apply(null,e),r.finishExact)});var o={},u=function(e){return o[e]=o[e]||n.format(e)[0]};n.formats=function(e){if(e instanceof Array){var n=[];for(var r=0;r<e.length;r++)n.push(u(e[r]));return t.any.apply(null,n)}return u(e)},n._formats=n.formats(["yyyy-MM-ddTHH:mm:ss","ddd, MMM dd, yyyy H:mm:ss tt","ddd MMM d yyyy HH:mm:ss zzz","d"]),n._start=t.process(t.set([n.date,n.time,n.expression],n.generalDelimiter,n.whiteSpace),r.finish),n.start=function(e){try{var t=n._formats.call({},e);if(t[1].length===0)return t}catch(r){}return n._start.call({},e)}}(),Date._parse=Date.parse,Date.parse=function(e){var t=null;if(!e)return null;try{t=Date.Grammar.start.call({},e)}catch(n){return null}return t[1].length===0?t[0]:null},Date.getParseFunction=function(e){var t=Date.Grammar.formats(e);return function(e){var n=null;try{n=t.call({},e)}catch(r){return null}return n[1].length===0?n[0]:null}},Date.parseExact=function(e,t){return Date.getParseFunction(t)(e)};
/*
 * jQuery UI Touch Punch 0.2.2
 *
 * Copyright 2011, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Depends:
 *  jquery.ui.widget.js
 *  jquery.ui.mouse.js
 */
(function(b){b.support.touch="ontouchend" in document;if(!b.support.touch){return;}var c=b.ui.mouse.prototype,e=c._mouseInit,a;function d(g,h){if(g.originalEvent.touches.length>1){return;}g.preventDefault();var i=g.originalEvent.changedTouches[0],f=document.createEvent("MouseEvents");f.initMouseEvent(h,true,true,window,1,i.screenX,i.screenY,i.clientX,i.clientY,false,false,false,false,0,null);g.target.dispatchEvent(f);}c._touchStart=function(g){var f=this;if(a||!f._mouseCapture(g.originalEvent.changedTouches[0])){return;}a=true;f._touchMoved=false;d(g,"mouseover");d(g,"mousemove");d(g,"mousedown");};c._touchMove=function(f){if(!a){return;}this._touchMoved=true;d(f,"mousemove");};c._touchEnd=function(f){if(!a){return;}d(f,"mouseup");d(f,"mouseout");if(!this._touchMoved){d(f,"click");}a=false;};c._mouseInit=function(){var f=this;f.element.bind("touchstart",b.proxy(f,"_touchStart")).bind("touchmove",b.proxy(f,"_touchMove")).bind("touchend",b.proxy(f,"_touchEnd"));e.call(f);};})(jQuery);
/*! http://mths.be/placeholder v2.0.6 by @mathias */
;(function(e,t,n){function f(e){var t={},r=/^jQuery\d+$/;return n.each(e.attributes,function(e,n){n.specified&&!r.test(n.name)&&(t[n.name]=n.value)}),t}function l(e,r){var i=this,s=n(i),o;if(i.value==s.attr("placeholder")&&s.hasClass("placeholder")){o=i==t.activeElement;if(s.data("placeholder-password")){s=s.hide().next().show().attr("id",s.removeAttr("id").data("placeholder-id"));if(e===!0)return s[0].value=r;s.focus()}else i.value="",s.removeClass("placeholder");o&&i.select()}}function c(){var e,t=this,r=n(t),i=r,s=this.id;if(t.value==""){if(t.type=="password"){if(!r.data("placeholder-textinput")){try{e=r.clone().attr({type:"text"})}catch(o){e=n("<input>").attr(n.extend(f(this),{type:"text"}))}e.removeAttr("name").data({"placeholder-password":!0,"placeholder-id":s}).bind("focus.placeholder",l),r.data({"placeholder-textinput":e,"placeholder-id":s}).before(e)}r=r.removeAttr("id").hide().prev().attr("id",s).show()}r.addClass("placeholder"),r[0].value=r.attr("placeholder")}else r.removeClass("placeholder")}var r="placeholder"in t.createElement("input"),i="placeholder"in t.createElement("textarea"),s=n.fn,o=n.valHooks,u,a;navigator.userAgent.indexOf("Opera/")!=-1&&(r=i=!1),r&&i?(a=s.placeholder=function(){return this},a.input=a.textarea=!0):(a=s.placeholder=function(){var e=this;return e.filter((r?"textarea":":input")+"[placeholder]").not(".placeholder").bind({"focus.placeholder":l,"blur.placeholder":c}).data("placeholder-enabled",!0).trigger("blur.placeholder"),e},a.input=r,a.textarea=i,u={get:function(e){var t=n(e);return t.data("placeholder-enabled")&&t.hasClass("placeholder")?"":e.value},set:function(e,r){var i=n(e);return i.data("placeholder-enabled")?(r==""?(e.value=r,e!=t.activeElement&&c.call(e)):i.hasClass("placeholder")?l.call(e,!0,r)||(e.value=r):e.value=r,i):e.value=r}},r||(o.input=u),i||(o.textarea=u),n(function(){n(t).delegate("form","submit.placeholder",function(){var e=n(".placeholder",this).each(l);setTimeout(function(){e.each(c)},10)})}),n(e).bind("beforeunload.placeholder",function(){n(".placeholder").each(function(){this.value=""})}))})(this,document,jQuery);
(function(){(function(e,t,n){var r,i,s;return s="slidesjs",i={animate_fallback:!1,enabled:!0,width:940,height:528,fixed_size:!1,fit_height:!1,fit_width:!1,disable_touch:!1,start:1,set_size:1,navigation:{active:!0,effect:"slide"},pagination:{active:!0,effect:"slide"},play:{active:!1,effect:"slide",interval:5e3,auto:!1,swap:!0,pauseOnHover:!1,stopOnInteraction:!1,restartDelay:2500},effect:{slide:{speed:500},fade:{speed:300,crossfade:!0}},callback:{loaded:function(){},start:function(){},complete:function(){},resize:function(){}}},r=function(){function t(t,n){this.element=t,this.options=e.extend(!0,{},i,n),this.slide_elements=null,this.slides=null,this.count=0,this._defaults=i,this._name=s,this.init()}return t}(),r.prototype.init=function(){function d(e){e.click(function(e){return e.preventDefault(),a.stop(!0),a.next(a.options.navigation.effect)})}function v(e){e.click(function(e){return e.preventDefault(),a.stop(!0),a.previous(a.options.navigation.effect)})}var n,r,i,s,o,u,a=this;n=e(this.element),this.data=e.data(this),e.data(this,"animating",!1),e.data(this,"total",n.children().not(".slidesjs-navigation",n).length),e.data(this,"current",this.options.start-1),e.data(this,"vendorPrefix",this._getVendorPrefix()),typeof TouchEvent!="undefined"&&(e.data(this,"touch",!0),this.options.effect.slide.speed=this.options.effect.slide.speed/2),n.css({overflow:"hidden"}),n.slidesContainer=n.children().not(".slidesjs-navigation",n).wrapAll("<div class='slidesjs-container'>",n).parent().css({overflow:"hidden",position:"relative"}),e(".slidesjs-container",n).wrapInner("<div class='slidesjs-control'>",n).children(),e(".slidesjs-control",n).css({position:"relative",left:0}),this.slide_elements=e(".slidesjs-control",n).children(),this.count=this.slide_elements.length;var f=[];for(var l=0;l<this.count;l++)f.push(e('<div class="slidesjs-slide"></div>').css({position:"absolute",top:0,left:0,width:"100%",zIndex:0,display:"none",webkitBackfaceVisibility:"hidden"}).append(this.slide_elements[l]));e(".slidesjs-control",n).append(f),this.slides=f,e.each(e(".slidesjs-control",n).children(),function(t){var n;return n=e(this),n.attr("slidesjs-index",t)}),this.data.touch&&!this.options.disable_touch&&(e(".slidesjs-control",n).on("touchstart",function(e){return a._touchstart(e)}),e(".slidesjs-control",n).on("touchmove",function(e){return a._touchmove(e)}),e(".slidesjs-control",n).on("touchend",function(e){return a._touchend(e)})),n.fadeIn(0);var c=this.update();this.data.touch&&this._setuptouch(),e(".slidesjs-control",n).children(":eq("+this.data.current+")").eq(0).fadeIn(0,function(){return e(this).css({zIndex:10})}),this.options.navigation.active&&(o=e("<a>",{"class":"slidesjs-previous slidesjs-navigation",href:"#",title:"Previous",text:"Previous"}).appendTo(n),r=e("<a>",{"class":"slidesjs-next slidesjs-navigation",href:"#",title:"Next",text:"Next"}).appendTo(n));var h=e(".slidesjs-next",n),p=e(".slidesjs-previous",n);return d(h),v(p),typeof this.options.navigation.custom_previous!="undefined"&&v(this.options.navigation.custom_previous),typeof this.options.navigation.custom_next!="undefined"&&d(this.options.navigation.custom_next),this.options.play.active&&(s=e("<a>",{"class":"slidesjs-play slidesjs-navigation",href:"#",title:"Play",text:"Play"}).appendTo(n),u=e("<a>",{"class":"slidesjs-stop slidesjs-navigation",href:"#",title:"Stop",text:"Stop"}).appendTo(n),s.click(function(e){return e.preventDefault(),a.play(!0)}),u.click(function(e){return e.preventDefault(),a.stop(!0)}),this.options.play.swap&&u.css({display:"none"})),this.options.pagination.active&&(i=e("<ul>",{"class":"slidesjs-pagination"}).appendTo(n),e.each(new Array(this.data.total),function(t){var n,r;return n=e("<li>",{"class":"slidesjs-pagination-item"}).appendTo(i),r=e("<a>",{href:"#","data-slidesjs-item":t,html:t+1}).appendTo(n),r.click(function(t){return t.preventDefault(),a.stop(!0),a.goto(e(t.currentTarget).attr("data-slidesjs-item")*1+1)})})),e(t).bind("resize",function(){var e=a.update();return a.options.callback.resize(a,e)}),this.options.callback.resize(this,c),this._setActive(),this.options.play.auto&&this.play(),this.options.callback.loaded(this.options.start)},r.prototype._setActive=function(t){var n,r;return n=e(this.element),this.data=e.data(this),r=t>-1?t:this.data.current,e(".active",n).removeClass("active"),e("li:eq("+r+") a",n).addClass("active")},r.prototype.update=function(){var t,n,r;t=e(this.element),this.data=e.data(this);if(this.options.fit_height){var i=0;e(".slidesjs-control",t).children().each(function(t,n){var r=e(n).outerHeight();r>i&&(i=r)}),console.log("[slidesjs] max-height:"+i),n=i,this.options.height=i}else this.options.fixed_size?n=this.options.height:(n=this.options.height/this.options.width*r,this.options.height=n);return e(".slidesjs-control",t).children(":not(:eq("+this.data.current+"))").css({display:"none",left:0,zIndex:0}),r=t.width(),this.options.width=r,e(".slidesjs-control, .slidesjs-container",t).css({width:r,height:n}),{width:r,height:n}},r.prototype.next=function(t){var n;return n=e(this.element),this.data=e.data(this),e.data(this,"direction","next"),t===void 0&&(t=this.options.navigation.effect),t==="fade"?this._fade():this._slide()},r.prototype.previous=function(t){var n;return n=e(this.element),this.data=e.data(this),e.data(this,"direction","previous"),t===void 0&&(t=this.options.navigation.effect),t==="fade"?this._fade():this._slide()},r.prototype.goto=function(t){var n,r;n=e(this.element),this.data=e.data(this),r===void 0&&(r=this.options.pagination.effect),t>this.data.total?t=this.data.total:t<1&&(t=1);if(typeof t=="number")return r==="fade"?this._fade(t):this._slide(t);if(typeof t=="string"){if(t==="first")return r==="fade"?this._fade(0):this._slide(0);if(t==="last")return r==="fade"?this._fade(this.data.total):this._slide(this.data.total)}},r.prototype._setuptouch=function(){var t,n,r,i;return t=e(this.element),this.data=e.data(this),i=e(".slidesjs-control",t),n=this.data.current+1,r=this.data.current-1
,r<0&&(r=this.data.total-1),n>this.data.total-1&&(n=0),i.children(":eq("+n+")").css({display:"block",left:this.options.width}),i.children(":eq("+r+")").css({display:"block",left:-this.options.width})},r.prototype._touchstart=function(t){if(!this.options.enabled)return;this.options.play.stopOnInteraction&&this.stop();var n,r;return n=e(this.element),this.data=e.data(this),r=t.originalEvent.touches[0],this._setuptouch(),e.data(this,"touchtimer",Number(new Date)),e.data(this,"touchstartx",r.pageX),e.data(this,"touchstarty",r.pageY),t.stopPropagation()},r.prototype._touchend=function(t){if(!this.options.enabled)return;var n,r,i,s,o,u,a,f=this;return n=e(this.element),this.data=e.data(this),u=t.originalEvent.touches[0],s=e(".slidesjs-control",n),s.position().left>this.options.width*.5||s.position().left>this.options.width*.1&&Number(new Date)-this.data.touchtimer<250?(e.data(this,"direction","previous"),this._slide()):s.position().left<-(this.options.width*.5)||s.position().left<-(this.options.width*.1)&&Number(new Date)-this.data.touchtimer<250?(e.data(this,"direction","next"),this._slide()):(i=this.data.vendorPrefix,a=i+"Transform",r=i+"TransitionDuration",o=i+"TransitionTimingFunction",s[0].style[a]="translateX(0px)",s[0].style[r]=this.options.effect.slide.speed*.85+"ms"),s.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd",function(){return i=f.data.vendorPrefix,a=i+"Transform",r=i+"TransitionDuration",o=i+"TransitionTimingFunction",s[0].style[a]="",s[0].style[r]="",s[0].style[o]=""}),t.stopPropagation()},r.prototype._touchmove=function(t){if(!this.options.enabled)return;var n,r,i,s,o;return n=e(this.element),this.data=e.data(this),s=t.originalEvent.touches[0],r=this.data.vendorPrefix,i=e(".slidesjs-control",n),o=r+"Transform",e.data(this,"scrolling",Math.abs(s.pageX-this.data.touchstartx)<Math.abs(s.pageY-this.data.touchstarty)),!this.data.animating&&!this.data.scrolling&&(t.preventDefault(),this._setuptouch(),i[0].style[o]="translateX("+(s.pageX-this.data.touchstartx)+"px)"),t.stopPropagation()},r.prototype.play=function(t){var n,r,i,s=this;n=e(this.element),this.data=e.data(this);if(!this.data.playInterval){t&&(r=this.data.current,this.data.direction="next",this.options.play.effect==="fade"?this._fade():this._slide()),e.data(this,"playInterval",setInterval(function(){return r=s.data.current,s.data.direction="next",s.options.play.effect==="fade"?s._fade():s._slide()},this.options.play.interval)),i=e(".slidesjs-container",n),this.options.play.pauseOnHover&&(i.unbind(),i.bind("mouseenter",function(){return s.stop()}),i.bind("mouseleave",function(){return s.options.play.restartDelay?e.data(s,"restartDelay",setTimeout(function(){return s.play(!0)},s.options.play.restartDelay)):s.play()})),e.data(this,"playing",!0),e(".slidesjs-play",n).addClass("slidesjs-playing");if(this.options.play.swap)return e(".slidesjs-play",n).hide(),e(".slidesjs-stop",n).show()}},r.prototype.stop=function(t){var n;n=e(this.element),this.data=e.data(this),clearInterval(this.data.playInterval),this.options.play.pauseOnHover&&t&&e(".slidesjs-container",n).unbind(),e.data(this,"playInterval",null),e.data(this,"playing",!1),e(".slidesjs-play",n).removeClass("slidesjs-playing");if(this.options.play.swap)return e(".slidesjs-stop",n).hide(),e(".slidesjs-play",n).show()},r.prototype._slide=function(t){if(!this.options.enabled)return;var n,r,i,s,o,u,a,f,l,c,h=this;n=e(this.element),this.data=e.data(this);if(!this.data.animating&&t!==this.data.current+1)return e.data(this,"animating",!0),r=this.data.current,t>-1?(t-=1,c=t>r?1:-1,i=t>r?-this.options.width:this.options.width,o=t):(c=this.data.direction==="next"?1:-1,i=this.data.direction==="next"?-this.options.width:this.options.width,o=r+c),o===-1&&(o=this.data.total-1),o===this.data.total&&(o=0),this._setActive(o),a=e(".slidesjs-control",n),t>-1&&a.children(":not(:eq("+r+"))").css({display:"none",left:0,zIndex:0}),a.children(":eq("+o+")").css({display:"block",left:c*this.options.width,zIndex:10}),this.options.callback.start(r+1),this.data.vendorPrefix&&!this.options.animation_fallback?(u=this.data.vendorPrefix,l=u+"Transform",s=u+"TransitionDuration",f=u+"TransitionTimingFunction",a[0].style[l]="translateX("+i+"px)",a[0].style[s]=this.options.effect.slide.speed+"ms",a.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd",function(){return a[0].style[l]="",a[0].style[s]="",a.children(":eq("+o+")").css({left:0}),a.children(":eq("+r+")").css({display:"none",left:0,zIndex:0}),e.data(h,"current",o),e.data(h,"animating",!1),a.unbind("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd"),a.children(":not(:eq("+o+"))").css({display:"none",left:0,zIndex:0}),h.data.touch&&h._setuptouch(),h.options.callback.complete(o+1)})):a.stop().animate({left:i},this.options.effect.slide.speed,function(){return a.css({left:0}),a.children(":eq("+o+")").css({left:0}),a.children(":eq("+r+")").css({display:"none",left:0,zIndex:0},e.data(h,"current",o),e.data(h,"animating",!1),h.options.callback.complete(o+1))})},r.prototype._fade=function(t){if(!this.options.enabled)return;var n,r,i,s,o,u=this;n=e(this.element),this.data=e.data(this);if(!this.data.animating&&t!==this.data.current+1)return e.data(this,"animating",!0),r=this.data.current,t?(t-=1,o=t>r?1:-1,i=t):(o=this.data.direction==="next"?1:-1,i=r+o),i===-1&&(i=this.data.total-1),i===this.data.total&&(i=0),this._setActive(i),s=e(".slidesjs-control",n),s.children(":eq("+i+")").css({display:"none",left:0,zIndex:10}),this.options.callback.start(r+1),this.options.effect.fade.crossfade?(s.children(":eq("+this.data.current+")").stop().fadeOut(this.options.effect.fade.speed),s.children(":eq("+i+")").stop().fadeIn(this.options.effect.fade.speed,function(){return s.children(":eq("+i+")").css({zIndex:0}),e.data(u,"animating",!1),e.data(u,"current",i),u.options.callback.complete(i+1)})):s.children(":eq("+r+")").stop().fadeOut(this.options.effect.fade.speed,function(){return s
.children(":eq("+i+")").stop().fadeIn(u.options.effect.fade.speed,function(){return s.children(":eq("+i+")").css({zIndex:10})}),e.data(u,"animating",!1),e.data(u,"current",i),u.options.callback.complete(i+1)})},r.prototype._getVendorPrefix=function(){var e,t,r,i,s;e=n.body||n.documentElement,r=e.style,i="transition",s=["Moz","Webkit","Khtml","O","ms"],i=i.charAt(0).toUpperCase()+i.substr(1),t=0;while(t<s.length){if(typeof r[s[t]+i]=="string")return s[t];t++}return!1},e.fn[s]=function(t){return this.each(function(){if(!e.data(this,"plugin_"+s))return e.data(this,"plugin_"+s,new r(this,t))})}})(jQuery,window,document)}).call(this);
(function(e){e.widget("ui.selectmenu",{getter:"value",version:"1.9",eventPrefix:"selectmenu",options:{transferClasses:!0,appendTo:"body",typeAhead:1e3,style:"dropdown",positionOptions:{my:"left top",at:"left bottom",offset:null},width:null,menuWidth:null,handleWidth:26,maxHeight:null,icons:null,format:null,escapeHtml:!1,bgImage:function(){}},_create:function(){var t=this,n=this.options,r=(this.element.attr("id")||"ui-selectmenu-"+Math.random().toString(16).slice(2,10)).replace(":","\\:");this.ids=[r,r+"-button",r+"-menu"],this._safemouseup=!0,this.isOpen=!1,this.newelement=e("<a />",{"class":this.widgetBaseClass+" ui-widget ui-state-default ui-corner-all",id:this.ids[1],role:"button",href:"#nogo",tabindex:this.element.attr("disabled")?1:0,"aria-haspopup":!0,"aria-owns":this.ids[2]}),this.newelementWrap=e("<span />").append(this.newelement).insertAfter(this.element);var i=this.element.attr("tabindex");i&&this.newelement.attr("tabindex",i),this.newelement.data("selectelement",this.element),this.selectmenuIcon=e('<span class="'+this.widgetBaseClass+'-icon ui-icon"></span>').prependTo(this.newelement),this.newelement.prepend('<span class="'+t.widgetBaseClass+'-status" />'),this.element.bind({"click.selectmenu":function(e){t.newelement.focus(),e.preventDefault()}}),this.newelement.bind("mousedown.selectmenu",function(e){return t._toggle(e,!0),n.style=="popup"&&(t._safemouseup=!1,setTimeout(function(){t._safemouseup=!0},300)),!1}).bind("click.selectmenu",function(){return!1}).bind("keydown.selectmenu",function(n){var r=!1;switch(n.keyCode){case e.ui.keyCode.ENTER:r=!0;break;case e.ui.keyCode.SPACE:t._toggle(n);break;case e.ui.keyCode.UP:n.altKey?t.open(n):t._moveSelection(-1);break;case e.ui.keyCode.DOWN:n.altKey?t.open(n):t._moveSelection(1);break;case e.ui.keyCode.LEFT:t._moveSelection(-1);break;case e.ui.keyCode.RIGHT:t._moveSelection(1);break;case e.ui.keyCode.TAB:r=!0;break;case e.ui.keyCode.PAGE_UP:case e.ui.keyCode.HOME:t.index(0);break;case e.ui.keyCode.PAGE_DOWN:case e.ui.keyCode.END:t.index(t._optionLis.length);break;default:r=!0}return r}).bind("keypress.selectmenu",function(e){return e.which>0&&t._typeAhead(e.which,"mouseup"),!0}).bind("mouseover.selectmenu",function(){n.disabled||e(this).addClass("ui-state-hover")}).bind("mouseout.selectmenu",function(){n.disabled||e(this).removeClass("ui-state-hover")}).bind("focus.selectmenu",function(){n.disabled||e(this).addClass("ui-state-focus")}).bind("blur.selectmenu",function(){n.disabled||e(this).removeClass("ui-state-focus")}),e(document).bind("mousedown.selectmenu-"+this.ids[0],function(e){t.isOpen&&t.close(e)}),this.element.bind("click.selectmenu",function(){t._refreshValue()}).bind("focus.selectmenu",function(){t.newelement&&t.newelement[0].focus()}),n.width||(n.width=this.element.outerWidth()),this.newelement.width(n.width),this.element.hide(),this.list=e("<ul />",{"class":"ui-widget ui-widget-content","aria-hidden":!0,role:"listbox","aria-labelledby":this.ids[1],id:this.ids[2]}),this.listWrap=e("<div />",{"class":t.widgetBaseClass+"-menu"}).append(this.list).appendTo(n.appendTo),this.list.bind("keydown.selectmenu",function(n){var r=!1;switch(n.keyCode){case e.ui.keyCode.UP:n.altKey?t.close(n,!0):t._moveFocus(-1);break;case e.ui.keyCode.DOWN:n.altKey?t.close(n,!0):t._moveFocus(1);break;case e.ui.keyCode.LEFT:t._moveFocus(-1);break;case e.ui.keyCode.RIGHT:t._moveFocus(1);break;case e.ui.keyCode.HOME:t._moveFocus(":first");break;case e.ui.keyCode.PAGE_UP:t._scrollPage("up");break;case e.ui.keyCode.PAGE_DOWN:t._scrollPage("down");break;case e.ui.keyCode.END:t._moveFocus(":last");break;case e.ui.keyCode.ENTER:case e.ui.keyCode.SPACE:t.close(n,!0),e(n.target).parents("li:eq(0)").trigger("mouseup");break;case e.ui.keyCode.TAB:r=!0,t.close(n,!0),e(n.target).parents("li:eq(0)").trigger("mouseup");break;case e.ui.keyCode.ESCAPE:t.close(n,!0);break;default:r=!0}return r}).bind("keypress.selectmenu",function(e){return e.which>0&&t._typeAhead(e.which,"focus"),!0}).bind("mousedown.selectmenu mouseup.selectmenu",function(){return!1}),e(window).bind("resize.selectmenu-"+this.ids[0],e.proxy(t.close,this))},_init:function(){var t=this,n=this.options,r=[];this.element.find("option").each(function(){var i=e(this);r.push({value:i.attr("value"),text:t._formatText(i.text()),selected:i.attr("selected"),disabled:i.attr("disabled"),classes:i.attr("class"),typeahead:i.attr("typeahead"),parentOptGroup:i.parent("optgroup"),bgImage:n.bgImage.call(i)})});var i=t.options.style=="popup"?" ui-state-active":"";this.list.html("");if(r.length)for(var s=0;s<r.length;s++){var o={role:"presentation"};r[s].disabled&&(o["class"]=this.namespace+"-state-disabled");var u={html:r[s].text||"&nbsp;",href:"#nogo",tabindex:-1,role:"option","aria-selected":!1};r[s].disabled&&(u["aria-disabled"]=r[s].disabled),r[s].typeahead&&(u.typeahead=r[s].typeahead);var a=e("<a/>",u),f=e("<li/>",o).append(a).data("index",s).addClass(r[s].classes).data("optionClasses",r[s].classes||"").bind("mouseup.selectmenu",function(n){if(t._safemouseup&&!t._disabled(n.currentTarget)&&!t._disabled(e(n.currentTarget).parents("ul>li."+t.widgetBaseClass+"-group "))){var r=e(this).data("index")!=t._selectedIndex();t.index(e(this).data("index")),t.select(n),r&&t.change(n),t.close(n,!0)}return!1}).bind("click.selectmenu",function(){return!1}).bind("mouseover.selectmenu focus.selectmenu",function(n){!e(n.currentTarget).hasClass(t.namespace+"-state-disabled")&&!e(n.currentTarget).parent("ul").parent("li").hasClass(t.namespace+"-state-disabled")&&(t._selectedOptionLi().addClass(i),t._focusedOptionLi().removeClass(t.widgetBaseClass+"-item-focus ui-state-hover"),e(this).removeClass("ui-state-active").addClass(t.widgetBaseClass+"-item-focus ui-state-hover"))}).bind("mouseout.selectmenu blur.selectmenu",function(){e(this).is(t._selectedOptionLi().selector)&&e(this).addClass(i),e(this).removeClass(t.widgetBaseClass+"-item-focus ui-state-hover")});if(r[s].parentOptGroup.length){var l=t.widgetBaseClass+"-group-"+this.element
.find("optgroup").index(r[s].parentOptGroup);this.list.find("li."+l).length?this.list.find("li."+l+":last ul").append(f):e(' <li role="presentation" class="'+t.widgetBaseClass+"-group "+l+(r[s].parentOptGroup.attr("disabled")?" "+this.namespace+'-state-disabled" aria-disabled="true"':'"')+'><span class="'+t.widgetBaseClass+'-group-label">'+r[s].parentOptGroup.attr("label")+"</span><ul></ul></li> ").appendTo(this.list).find("ul").append(f)}else f.appendTo(this.list);if(n.icons)for(var c in n.icons)if(f.is(n.icons[c].find)){f.data("optionClasses",r[s].classes+" "+t.widgetBaseClass+"-hasIcon").addClass(t.widgetBaseClass+"-hasIcon");var h=n.icons[c].icon||"";f.find("a:eq(0)").prepend('<span class="'+t.widgetBaseClass+"-item-icon ui-icon "+h+'"></span>'),r[s].bgImage&&f.find("span").css("background-image",r[s].bgImage)}}else e('<li role="presentation"><a href="#nogo" tabindex="-1" role="option"></a></li>').appendTo(this.list);var p=n.style=="dropdown";this.newelement.toggleClass(t.widgetBaseClass+"-dropdown",p).toggleClass(t.widgetBaseClass+"-popup",!p),this.list.toggleClass(t.widgetBaseClass+"-menu-dropdown ui-corner-bottom",p).toggleClass(t.widgetBaseClass+"-menu-popup ui-corner-all",!p).find("li:first").toggleClass("ui-corner-top",!p).end().find("li:last").addClass("ui-corner-bottom"),this.selectmenuIcon.toggleClass("ui-icon-triangle-1-s",p).toggleClass("ui-icon-triangle-2-n-s",!p);if(n.transferClasses){var d=this.element.attr("class")||"";this.newelement.add(this.list).addClass(d)}n.style=="dropdown"?this.list.width(n.menuWidth?n.menuWidth:n.width):this.list.width(n.menuWidth?n.menuWidth:n.width-n.handleWidth),this.list.css("height","auto");var v=this.listWrap.height(),m=e(window).height(),g=n.maxHeight?Math.min(n.maxHeight,m):m/3;v>g&&this.list.height(g),this._optionLis=this.list.find("li:not(."+t.widgetBaseClass+"-group)"),this.element.attr("disabled")?this.disable():this.enable(),this.index(this._selectedIndex()),this._selectedOptionLi().addClass(this.widgetBaseClass+"-item-focus"),clearTimeout(this.refreshTimeout),this.refreshTimeout=window.setTimeout(function(){t._refreshPosition()},200)},destroy:function(){this.element.removeData(this.widgetName).removeClass(this.widgetBaseClass+"-disabled"+" "+this.namespace+"-state-disabled").removeAttr("aria-disabled").unbind(".selectmenu"),e(window).unbind(".selectmenu-"+this.ids[0]),e(document).unbind(".selectmenu-"+this.ids[0]),this.newelementWrap.remove(),this.listWrap.remove(),this.element.unbind(".selectmenu").show(),e.Widget.prototype.destroy.apply(this,arguments)},_typeAhead:function(e,t){var n=this,r=String.fromCharCode(e).toLowerCase(),i=null,s=null;n._typeAhead_timer&&(window.clearTimeout(n._typeAhead_timer),n._typeAhead_timer=undefined),n._typeAhead_chars=(n._typeAhead_chars===undefined?"":n._typeAhead_chars).concat(r),n._typeAhead_chars.length<2||n._typeAhead_chars.substr(-2,1)===r&&n._typeAhead_cycling?(n._typeAhead_cycling=!0,i=r):(n._typeAhead_cycling=!1,i=n._typeAhead_chars);var o=(t!=="focus"?this._selectedOptionLi().data("index"):this._focusedOptionLi().data("index"))||0;for(var u=0;u<this._optionLis.length;u++){var a=this._optionLis.eq(u).text().substr(0,i.length).toLowerCase();if(a===i)if(n._typeAhead_cycling){s===null&&(s=u);if(u>o){s=u;break}}else s=u}s!==null&&this._optionLis.eq(s).find("a").trigger(t),n._typeAhead_timer=window.setTimeout(function(){n._typeAhead_timer=undefined,n._typeAhead_chars=undefined,n._typeAhead_cycling=undefined},n.options.typeAhead)},_uiHash:function(){var t=this.index();return{index:t,option:e("option",this.element).get(t),value:this.element[0].value}},open:function(e){var t=this,n=this.options;if(t.newelement.attr("aria-disabled")!="true"){t._closeOthers(e),t.newelement.addClass("ui-state-active"),t.listWrap.appendTo(n.appendTo),t.list.attr("aria-hidden",!1),t.listWrap.addClass(t.widgetBaseClass+"-open");var r=this._selectedOptionLi();n.style=="dropdown"?t.newelement.removeClass("ui-corner-all").addClass("ui-corner-top"):this.list.css("left",-5e3).scrollTop(this.list.scrollTop()+r.position().top-this.list.outerHeight()/2+r.outerHeight()/2).css("left","auto"),t._refreshPosition();var i=r.find("a");i.length&&i[0].focus(),t.isOpen=!0,t._trigger("open",e,t._uiHash())}},close:function(e,t){this.newelement.is(".ui-state-active")&&(this.newelement.removeClass("ui-state-active"),this.listWrap.removeClass(this.widgetBaseClass+"-open"),this.list.attr("aria-hidden",!0),this.options.style=="dropdown"&&this.newelement.removeClass("ui-corner-top").addClass("ui-corner-all"),t&&this.newelement.focus(),this.isOpen=!1,this._trigger("close",e,this._uiHash()))},change:function(e){this.element.trigger("change"),this._trigger("change",e,this._uiHash())},select:function(e){if(this._disabled(e.currentTarget))return!1;this._trigger("select",e,this._uiHash())},widget:function(){return this.listWrap.add(this.newelementWrap)},_closeOthers:function(t){e("."+this.widgetBaseClass+".ui-state-active").not(this.newelement).each(function(){e(this).data("selectelement").selectmenu("close",t)}),e("."+this.widgetBaseClass+".ui-state-hover").trigger("mouseout")},_toggle:function(e,t){this.isOpen?this.close(e,t):this.open(e)},_formatText:function(t){return this.options.format?t=this.options.format(t):this.options.escapeHtml&&(t=e("<div />").text(t).html()),t},_selectedIndex:function(){return this.element[0].selectedIndex},_selectedOptionLi:function(){return this._optionLis.eq(this._selectedIndex())},_focusedOptionLi:function(){return this.list.find("."+this.widgetBaseClass+"-item-focus")},_moveSelection:function(e,t){if(!this.options.disabled){var n=parseInt(this._selectedOptionLi().data("index")||0,10),r=n+e;r<0&&(r=0),r>this._optionLis.size()-1&&(r=this._optionLis.size()-1);if(r===t)return!1;this._optionLis.eq(r).hasClass(this.namespace+"-state-disabled")?(e>0?++e:--e,this._moveSelection(e,r)):this._optionLis.eq(r).trigger("mouseover").trigger("mouseup")}},_moveFocus:function(e,t){if(!isNaN(e))var n=parseInt(this._focusedOptionLi().data
("index")||0,10),r=n+e;else var r=parseInt(this._optionLis.filter(e).data("index"),10);r<0&&(r=0),r>this._optionLis.size()-1&&(r=this._optionLis.size()-1);if(r===t)return!1;var i=this.widgetBaseClass+"-item-"+Math.round(Math.random()*1e3);this._focusedOptionLi().find("a:eq(0)").attr("id",""),this._optionLis.eq(r).hasClass(this.namespace+"-state-disabled")?(e>0?++e:--e,this._moveFocus(e,r)):this._optionLis.eq(r).find("a:eq(0)").attr("id",i).focus(),this.list.attr("aria-activedescendant",i)},_scrollPage:function(e){var t=Math.floor(this.list.outerHeight()/this._optionLis.first().outerHeight());t=e=="up"?-t:t,this._moveFocus(t)},_setOption:function(e,t){this.options[e]=t,e=="disabled"&&(t&&this.close(),this.element.add(this.newelement).add(this.list)[t?"addClass":"removeClass"](this.widgetBaseClass+"-disabled"+" "+this.namespace+"-state-disabled").attr("aria-disabled",t))},disable:function(e,t){typeof e=="undefined"?this._setOption("disabled",!0):t=="optgroup"?this._disableOptgroup(e):this._disableOption(e)},enable:function(e,t){typeof e=="undefined"?this._setOption("disabled",!1):t=="optgroup"?this._enableOptgroup(e):this._enableOption(e)},_disabled:function(t){return e(t).hasClass(this.namespace+"-state-disabled")},_disableOption:function(e){var t=this._optionLis.eq(e);t&&(t.addClass(this.namespace+"-state-disabled").find("a").attr("aria-disabled",!0),this.element.find("option").eq(e).attr("disabled","disabled"))},_enableOption:function(e){var t=this._optionLis.eq(e);t&&(t.removeClass(this.namespace+"-state-disabled").find("a").attr("aria-disabled",!1),this.element.find("option").eq(e).removeAttr("disabled"))},_disableOptgroup:function(e){var t=this.list.find("li."+this.widgetBaseClass+"-group-"+e);t&&(t.addClass(this.namespace+"-state-disabled").attr("aria-disabled",!0),this.element.find("optgroup").eq(e).attr("disabled","disabled"))},_enableOptgroup:function(e){var t=this.list.find("li."+this.widgetBaseClass+"-group-"+e);t&&(t.removeClass(this.namespace+"-state-disabled").attr("aria-disabled",!1),this.element.find("optgroup").eq(e).removeAttr("disabled"))},index:function(t){if(!arguments.length)return this._selectedIndex();if(!!this._disabled(e(this._optionLis[t])))return!1;this.element[0].selectedIndex=t,this._refreshValue()},value:function(e){if(!arguments.length)return this.element[0].value;this.element[0].value=e,this._refreshValue()},_refreshValue:function(){var e=this.options.style=="popup"?" ui-state-active":"",t=this.widgetBaseClass+"-item-"+Math.round(Math.random()*1e3);this.list.find("."+this.widgetBaseClass+"-item-selected").removeClass(this.widgetBaseClass+"-item-selected"+e).find("a").attr("aria-selected","false").attr("id",""),this._selectedOptionLi().addClass(this.widgetBaseClass+"-item-selected"+e).find("a").attr("aria-selected","true").attr("id",t);var n=this.newelement.data("optionClasses")?this.newelement.data("optionClasses"):"",r=this._selectedOptionLi().data("optionClasses")?this._selectedOptionLi().data("optionClasses"):"";this.newelement.removeClass(n).data("optionClasses",r).addClass(r).find("."+this.widgetBaseClass+"-status").html(this._selectedOptionLi().find("a:eq(0)").html()),this.list.attr("aria-activedescendant",t)},_refreshPosition:function(){var e=this.options;if(e.style=="popup"&&!e.positionOptions.offset)var t=this._selectedOptionLi(),n="0 "+(this.list.offset().top-t.offset().top-(this.newelement.outerHeight()+t.outerHeight())/2);this.listWrap.zIndex(this.element.zIndex()+1).position({of:e.positionOptions.of||this.newelement,my:e.positionOptions.my,at:e.positionOptions.at,offset:e.positionOptions.offset||n,collision:e.positionOptions.collision||e.style=="popup"?"fit":"flip"})}})})(jQuery);
(function(e){e.fn.customInput=function(){return e(this).each(function(t){if(e(this).is("[type=checkbox],[type=radio]")&&e(this).parent(".custom-"+e(this).attr("type")).length==0){var n=e(this),r=e("label[for="+n.attr("id")+"]");if(!r.length)return;var i=n.is("[type=checkbox]")?"checkbox":"radio";e('<div class="custom-'+i+'"></div>').insertBefore(n).append(n,r);var s=e("input[name="+n.attr("name")+"]"),o=r.find("a[target=_blank]");o.each(function(){var t=this.href;e(this).bind("click",function(e){return e.stopPropagation(),e.preventDefault(),window.open(t,"_blank"),!1}),this.href="#",this.removeAttribute("target")}),r.hover(function(){e(this).addClass("hover"),i=="checkbox"?n.trigger("customOver"):e("[name="+n.attr("name")+"]").each(function(){e(this).trigger("customOverName")}),i=="checkbox"&&n.is(":checked")&&e(this).addClass("checkedHover")},function(){e(this).removeClass("hover checkedHover"),i=="checkbox"?n.trigger("customOut"):e("[name="+n.attr("name")+"]").each(function(){e(this).trigger("customOutName")})}),n.bind("updateState",function(){n.is(":checked")?(n.is(":radio")&&s.each(function(){e("label[for="+e(this).attr("id")+"]").removeClass("checked")}),r.addClass("checked")):r.removeClass("checked checkedHover checkedFocus")}).bind("updateState disable enable",function(){n.is(":disabled")?(r.addClass("disabled"),n.is(":checked")&&r.addClass("checkedDisabled")):r.removeClass("disabled checkedDisabled")}).trigger("updateState").click(function(){e(this).trigger("updateState")}).focus(function(){r.addClass("focus"),i=="checkbox"&&n.is(":checked")&&r.addClass("checkedFocus")}).blur(function(){r.removeClass("focus checkedFocus")})}}),this}})(jQuery);
/*
 * based off of Louis-Rémi Babé rotate plugin (https://github.com/lrbabe/jquery.rotate.js)
 *
 * cssTransforms: jQuery cssHooks adding a cross browser, animatible transforms
 *
 * Author Bobby Schultz
 */
 //
(function($) {

    var div = document.createElement('div'),
      divStyle = div.style;

    //give props to those who dont have them
    $.cssProps.transform = 
        divStyle.MozTransform === '' ? 'MozTransform' :
        (divStyle.msTransform === '' ? 'msTransform' :
        (divStyle.WebkitTransform === '' ? 'WebkitTransform' :
        (divStyle.OTransform === '' ? 'OTransform' :
        (divStyle.Transform === '' ? 'Transform' :
        false))));
    $.cssProps.transformOrigin = 
        divStyle.MozTransformOrigin === '' ? 'MozTransformOrigin' :
        (divStyle.msTransformOrigin === '' ? 'msTransformOrigin' :
        (divStyle.WebkitTransformOrigin === '' ? 'WebkitTransformOrigin' :
        (divStyle.OTransformOrigin === '' ? 'OTransformOrigin' :
        (divStyle.TransformOrigin === '' ? 'TransformOrigin' :
        false))));
        
    //define supported or not
    $.support.transform = $.cssProps.transform !== false || divStyle.filter === '' ? true : false;
    $.support.transformOrigin = $.cssProps.transformOrigin !== false ? true : false;

    //if ONLY IE matrixes are supported (IE9 beta6 will use css3)
    $.support.matrixFilter = (divStyle.filter === '' && $.cssProps.transform === false) ?
        true : false;
    div = null;

    //stop if no form of transforms are supported
    if($.support.transform === false)
        return;

    //opt out of letting jquery handle the units for custom setters/getters 
    $.cssNumber.skew = 
    $.cssNumber.skewX = 
    $.cssNumber.skewY = 
    $.cssNumber.scale =
    $.cssNumber.scaleX =
    $.cssNumber.scaleY =
    $.cssNumber.rotate = 
    $.cssNumber.matrix = true;
    
    $.cssNumber.transformOrigin = 
    $.cssNumber.transformOriginX = 
    $.cssNumber.transformOriginY = true; 
    
    
    if($.support.matrixFilter) {
        $.cssNumber.transformOrigin = 
        $.cssNumber.transformOriginX = 
        $.cssNumber.transformOriginY = true; 
        
        $.cssProps.transformOrigin = 'matrixFilter';
    }

    $.cssHooks.transform = {
        set: function(elem, val, unit) {
            if($.support.matrixFilter) {
                elem.style.filter = [val].join('');
            } else {
                elem.style[$.cssProps.transform] = val+'%';
            }
        },
        get: function(elem, computed) {
            if($.support.matrixFilter) {
                return elem.style.filter;
            } else {
                return elem.style[$.cssProps.transform];
            }
        }
    };
    
    $.cssHooks.transformOrigin = {
        set: function(elem, val, unit) {
            if(!$.support.matrixFilter) {
                val = (typeof val === 'string') ? val : val+(unit || '%');
                elem.style[$.cssProps.transformOrigin] = val;
            } else {
                val = val.split(",");
                $.cssHooks.transformOriginX.set( elem, val[0] );
                if(val.length > 1) {
                    $.cssHooks.transformOriginY.set( elem, val[1] );
                }
            }
        },
        get: function(elem, computed) {
            if(!$.support.matrixFilter) {
                return elem.style[$.cssProps.transformOrigin];
            } else {
                var originX = $.data( elem, 'transformOriginX' );
                var originY = $.data( elem, 'transformOriginY' );
                return originX && originY && originX === originY ? originX : '50%';
            }
        }
    };
    
    $.fx.step.transformOrigin = function( fx ) {
        $.cssHooks.transformOrigin.set( fx.elem, fx.now, fx.unit);
     };
    
    $.cssHooks.transformOriginX = {
        set: function(elem, val, unit) {
            if(!$.support.matrixFilter) {
                val = (typeof val === 'string') ? val : val+(unit || '%');
                elem.style[$.cssProps.transformOrigin+'X'] = val;
            } else {
                $.data( elem, 'transformOriginX', unit ? val+unit : val );
                setIEMatrix(elem);
            }
        },
        get: function(elem, computed) {
            if(!$.support.matrixFilter) {
                return elem.style[$.cssProps.transformOrigin+'X'];
            } else {
                var originX = $.data( elem, 'transformOriginX' );
                switch(originX) {
                    case 'left': return '0%';
                    case 'center': return '50%';
                    case 'right': return '100%';
                }
                return originX ? originX : '50%';
            }
        }
    };
    
    $.fx.step.transformOriginX = function( fx ) {
        $.cssHooks.transformOriginX.set( fx.elem, fx.now, fx.unit);
     };
    
    $.cssHooks.transformOriginY = {
        set: function(elem, val, unit) {
            if(!$.support.matrixFilter) {
                val = (typeof val === 'string') ? val : val+(unit || '%');
                elem.style[$.cssProps.transformOrigin+'Y'] = val;
            } else {
                $.data( elem, 'transformOriginY', unit ? val+unit : val );
                setIEMatrix(elem);
            }
        },
        get: function(elem, computed) {
            if(!$.support.matrixFilter) {
                return elem.style[$.cssProps.transformOrigin+'Y'];
            } else {
                var originY = $.data( elem, 'transformOriginY' );
                switch(originY) {
                    case 'top': return '0%';
                    case 'center': return '50%';
                    case 'bottom': return '100%';
                }
                return originY ? originY : '50%';
            }
        }
    };
    
    $.fx.step.transformOriginY = function( fx ) {
        $.cssHooks.transformOriginY.set( fx.elem, fx.now, fx.unit);
     };

    //create hooks for css transforms
    var rtn = function(v){return v;};
    var xy = [['X','Y'],'X','Y'];
    var abcdxy = [['A','B','C','D','X','Y'],'A','B','C','D','X','Y']
    var props = [
        {prop: 'rotate', 
            matrix: [function(v){ return Math.cos(v); },
                function(v){ return -Math.sin(v); },
                function(v){ return Math.sin(v); },
                function(v){ return Math.cos(v); } ],
            unit: 'rad',
            subProps: [''],
            fnc: toRadian},
        {prop: 'scale',
            matrix: [[rtn,0,0,rtn],
                [rtn,0,0,1],
                [1,0,0,rtn]],
            unit: '',
            subProps: xy,
            fnc: parseFloat,
            _default:1},
        {prop: 'skew',
            matrix: [[1,rtn,rtn,1],
                [1,rtn,0,1],
                [1,0,rtn,1]],
            unit: 'rad',
            subProps: xy,
            fnc: toRadian},
        {prop: 'translate',
            matrix: [[1,0,0,1,rtn,rtn],
                [1,0,0,1,rtn,0],
                [1,0,0,1,0,rtn]],
            standardUnit: 'px',
            subProps: xy,
            fnc: parseFloat},
        {prop: 'matrix',
            matrix: [[rtn,rtn,rtn,rtn,rtn,rtn],
                [rtn,0,0,1,0,0],
                [1,rtn,0,1,0,0],
                [1,0,rtn,1,0,0],
                [1,0,0,rtn,0,0],
                [1,0,0,1,0,rtn]],
            subProps: abcdxy,
            fnc: parseFloat}
        ];

        jQuery.each(props, function(n,prop){
        jQuery.each(prop.subProps, function(num, sub){
            var _cssProp, _prop = prop;

            if( $.isArray(sub) ) {
                //composite transform
                _cssProp = _prop.prop;
                var _sub = sub;
                $.cssHooks[_cssProp] = {
                    set: function( elem, val, unit ) {
                        jQuery.each(_sub, function(num, x){
                            $.cssHooks[_cssProp+x].set(elem, val, unit);
                        });
                    },
                    get: function( elem, computed ) {
                        var val = [];
                        jQuery.each(_sub, function(num, x){
                            val.push( $.cssHooks[_cssProp+x].get(elem, val) );
                        });
                        //hack until jQuery supports animating multiple properties
                        return val[0] || val[1];
                    }
                }
            } else {
                //independent transfrom
                _cssProp = _prop.prop+sub;
                $.cssHooks[_cssProp] = {
                    set: function( elem, val, unit ) {
                        $.data( elem, _cssProp, unit ? val+unit : val);

                        setCSSTransform( elem, _prop.fnc(unit ? val+unit : val), _cssProp,
                         _prop.unit || unit || _prop.standardUnit);
                    },
                    get: function( elem, computed ) {
                        
                        var p = $.data( elem, _cssProp );
                        //console.log(_cssProp+'get:'+p);
                        return p && p !== undefined ? p : _prop._default || 0;
                    }
                };
            }

            $.fx.step[_cssProp] = function( fx ) {
                fx.unit = fx.unit === 'px' && $.cssNumber[_cssProp] ? _prop.standardUnit : fx.unit;
                var unit = ($.cssNumber[_cssProp] ? '' : fx.unit);
                $.cssHooks[_cssProp].set( fx.elem, fx.now, fx.unit);
             };
        })
    });

    function setCSSTransform( elem, val, prop, unit ){
        if($.support.matrixFilter) {
            return setIEMatrix(elem, val);
        }
        
        //parse css string
        var allProps = parseCSSTransform(elem);
        
        //check for value to be set
        var a = /[X|Y]/.exec(prop);
        a = (a === null ? '' : a[0] ? a[0] : a);
        prop = /.*[^XY]/.exec(prop)[0];
        unit = unit === undefined ? '' : unit;
        
        //create return string
        var result = '';
        var wasUpdated = false;
        var arr;
        if(allProps !== null) {
            for(var item in allProps) {
                arr = allProps[item];
                if(prop === item) {
                    //update parsed data with new value
                    if(prop !== 'matrix') {
                        result += prop+'(';
                        result += a === 'X' || a === '' ? val+unit : 
                            (arr[0] !== '' ? arr[0] : $.cssHooks[prop+'X'].get(elem)+unit);
                        result += a === 'Y' ? ', '+val+unit : 
                            (arr[1] !== '' ? ', '+arr[1] : 
                            (prop+'Y' in $.cssHooks ? 
                                ', '+$.cssHooks[prop+'Y'].get(elem)+unit : ''));
                        result += ') ';
                    } else { 
                        result += val+' ';
                    }
                    wasUpdated = true;
                } else {
                    //dump parsed data to string
                    result += item + '(';
                    for(var i=0; i<arr.length; i++) {
                        result += arr[i];
                        if(i < arr.length-1 && arr[i+1] !== '')
                            result += ', '
                        else 
                            break;
                    }
                    result += ') ';
                } 
            }
        }
        
        //if prop was not found to be updated, then dump data
        if(!wasUpdated)
            result += prop+a+'('+val+unit+ ') ';
        
        //set all transform properties
        elem.style[$.cssProps.transform] = result;
    }

    
    function parseCSSTransform( elem ) {
        var props, prop, name, transform;
        //break up into single transform calls
        $(elem.style[$.cssProps.transform].replace(/(?:\,\s|\)|\()/g,"|").split(" "))
        //read each data point for the transform call
        .each(function(i, item){
            if(item !== '') {
                if(props === undefined) props = {}
                prop = item.split("|");
                name = prop.shift();
                transform = /.*[^XY]/.exec(name)[0];
                if(!props[transform]) props[transform] = ['','','','','',''];
                if(!/Y/.test(name)) props[transform][0] = prop[0];
                if(!/X/.test(name)) props[transform][1] = prop[1];
                if(prop.length == 6) {
                    props[transform][2] = prop[2];
                    props[transform][3] = prop[3];
                    props[transform][4] = prop[4];
                    props[transform][5] = prop[5];
                }
            }
        });
        
        return props !== undefined ? props : null ;
    }
    
    function ieOrigin(o, n, percent) {
        return percent * (o - n);
    }
    
    function toRadian(value) {
        if(typeof value === 'number') {
            return parseFloat(value);
        }
        if(value.indexOf("deg") != -1) {
            return parseInt(value,10) * (Math.PI * 2 / 360);
        } else if (value.indexOf("grad") != -1) {
            return parseInt(value,10) * (Math.PI/200);
        }
    }

    $.rotate = {
      radToDeg: function radToDeg( rad ) {
          return rad * 180 / Math.PI;
      }
    };

    //special case for IE matrix
    function setIEMatrix( elem, mat ) {
        var inverse, current, ang, org, originX, originY,
        runTransform = $.cssProps.transformOrigin === 'matrixFilter' ? true : false;

        current = [$.cssHooks.scaleX.get(elem),
                    toRadian($.cssHooks.skewY.get(elem)),
                    toRadian($.cssHooks.skewX.get(elem)),
                    $.cssHooks.scaleY.get(elem),
                    $.cssHooks.translateX.get(elem),
                    $.cssHooks.translateY.get(elem)];

        //start by multiply inverse of transform origin by matrix
        if(runTransform) {
            elem.style.filter = [
                "progid:DXImageTransform.Microsoft.Matrix"
                +"(M11=1,M12=0,M21=0,M22=1,SizingMethod='auto expand')"
            ].join('');
            var Wp = $.cssHooks.transformOriginX.get(elem);
            var Hp = $.cssHooks.transformOriginY.get(elem);
            Wp = Wp.indexOf('%') > 0 ? 
                (/[\d]*/.exec(Wp) / 100) : Wp;
            Hp = Hp.indexOf('%') > 0 ? 
                (/[\d]*/.exec(Hp) / 100) : Hp;

            var Wb = elem.offsetWidth;
            var Hb = elem.offsetHeight;
        } 

        //multiply old matrix to new matrix
        if( typeof mat !== 'array' || mat.length !== 6 ) {
            mat = current;
        } else {
            mat = [ ( (current[0]*mat[0]) + (current[1]*mat[2]) ),
                    ( (current[0]*mat[1]) + (current[1]*mat[3]) ),
                    ( (current[2]*mat[0]) + (current[3]*mat[2]) ),
                    ( (current[2]*mat[1]) + (current[3]*mat[3]) ),
                    mat[4],
                    mat[5]
                    ];
        }

        //multiply the transform and rotation matrixes
        ang = $.data(elem, 'rotate');
        if(ang) {
            ang = toRadian(ang);
            var cos = Math.cos(ang);
            var sin = Math.sin(ang);

            ang = [cos, -sin, sin, cos];
            mat = [ ( (mat[0]*ang[0]) + (mat[1]*ang[2]) ),
                    ( (mat[0]*ang[1]) + (mat[1]*ang[3]) ),
                    ( (mat[2]*ang[0]) + (mat[3]*ang[2]) ),
                    ( (mat[2]*ang[1]) + (mat[3]*ang[3]) ),
                    mat[4],
                    mat[5]
                    ];
        }
        
        //apply the matrix as a IE filter
        elem.style.filter = [
            "progid:DXImageTransform.Microsoft.Matrix(",
            "M11="+mat[0]+", ",
            "M12="+mat[1]+", ",
            "M21="+mat[2]+", ",
            "M22="+mat[3]+", ",
            "SizingMethod='auto expand'",
            ")"
            ].join('');
            
        if (runTransform) {
            var Wo = elem.offsetWidth;
            var Ho = elem.offsetHeight;
            elem.style.position = 'relative';
            elem.style.left = Wp * (Wb - Wo) + (parseInt(mat[4]) || 0);
            elem.style.top  = Hp * (Hb - Ho) + (parseInt(mat[5]) || 0);
        }
            //$('#console').append('<div> trans:'+Wp+":"+Wb+":"+Wo+":"+mat[4]+":"+elem.style.left+'</div>');
        
        
    }

})(jQuery);
/*!
 * jQuery Color Animations v@VERSION
 * https://github.com/jquery/jquery-color
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * Date: @DATE
 */
;(function(e,t){function h(e,t,n){var r=u[t.type]||{};return e==null?n||!t.def?null:t.def:(e=r.floor?~~e:parseFloat(e),isNaN(e)?t.def:r.mod?(e+r.mod)%r.mod:0>e?0:r.max<e?r.max:e)}function p(t){var n=s(),r=n._rgba=[];return t=t.toLowerCase(),c(i,function(e,i){var s,u=i.re.exec(t),a=u&&i.parse(u),f=i.space||"rgba";if(a)return s=n[f](a),n[o[f].cache]=s[o[f].cache],r=n._rgba=s._rgba,!1}),r.length?(r.join()==="0,0,0,0"&&e.extend(r,l.transparent),n):l[t]}function d(e,t,n){return n=(n+1)%1,n*6<1?e+(t-e)*n*6:n*2<1?t:n*3<2?e+(t-e)*(2/3-n)*6:e}var n="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",r=/^([\-+])=\s*(\d+\.?\d*)/,i=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(e){return[e[1],e[2],e[3],e[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(e){return[e[1]*2.55,e[2]*2.55,e[3]*2.55,e[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(e){return[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(e){return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(e){return[e[1],e[2]/100,e[3]/100,e[4]]}}],s=e.Color=function(t,n,r,i){return new e.Color.fn.parse(t,n,r,i)},o={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},u={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},a=s.support={},f=e("<p>")[0],l,c=e.each;f.style.cssText="background-color:rgba(1,1,1,.5)",a.rgba=f.style.backgroundColor.indexOf("rgba")>-1,c(o,function(e,t){t.cache="_"+e,t.props.alpha={idx:3,type:"percent",def:1}}),s.fn=e.extend(s.prototype,{parse:function(n,r,i,u){if(n===t)return this._rgba=[null,null,null,null],this;if(n.jquery||n.nodeType)n=e(n).css(r),r=t;var a=this,f=e.type(n),d=this._rgba=[];r!==t&&(n=[n,r,i,u],f="array");if(f==="string")return this.parse(p(n)||l._default);if(f==="array")return c(o.rgba.props,function(e,t){d[t.idx]=h(n[t.idx],t)}),this;if(f==="object")return n instanceof s?c(o,function(e,t){n[t.cache]&&(a[t.cache]=n[t.cache].slice())}):c(o,function(t,r){var i=r.cache;c(r.props,function(e,t){if(!a[i]&&r.to){if(e==="alpha"||n[e]==null)return;a[i]=r.to(a._rgba)}a[i][t.idx]=h(n[e],t,!0)}),a[i]&&e.inArray(null,a[i].slice(0,3))<0&&(a[i][3]=1,r.from&&(a._rgba=r.from(a[i])))}),this},is:function(e){var t=s(e),n=!0,r=this;return c(o,function(e,i){var s,o=t[i.cache];return o&&(s=r[i.cache]||i.to&&i.to(r._rgba)||[],c(i.props,function(e,t){if(o[t.idx]!=null)return n=o[t.idx]===s[t.idx],n})),n}),n},_space:function(){var e=[],t=this;return c(o,function(n,r){t[r.cache]&&e.push(n)}),e.pop()},transition:function(e,t){var n=s(e),r=n._space(),i=o[r],a=this.alpha()===0?s("transparent"):this,f=a[i.cache]||i.to(a._rgba),l=f.slice();return n=n[i.cache],c(i.props,function(e,r){var i=r.idx,s=f[i],o=n[i],a=u[r.type]||{};if(o===null)return;s===null?l[i]=o:(a.mod&&(o-s>a.mod/2?s+=a.mod:s-o>a.mod/2&&(s-=a.mod)),l[i]=h((o-s)*t+s,r))}),this[r](l)},blend:function(t){if(this._rgba[3]===1)return this;var n=this._rgba.slice(),r=n.pop(),i=s(t)._rgba;return s(e.map(n,function(e,t){return(1-r)*i[t]+r*e}))},toRgbaString:function(){var t="rgba(",n=e.map(this._rgba,function(e,t){return e==null?t>2?1:0:e});return n[3]===1&&(n.pop(),t="rgb("),t+n.join()+")"},toHslaString:function(){var t="hsla(",n=e.map(this.hsla(),function(e,t){return e==null&&(e=t>2?1:0),t&&t<3&&(e=Math.round(e*100)+"%"),e});return n[3]===1&&(n.pop(),t="hsl("),t+n.join()+")"},toHexString:function(t){var n=this._rgba.slice(),r=n.pop();return t&&n.push(~~(r*255)),"#"+e.map(n,function(e){return e=(e||0).toString(16),e.length===1?"0"+e:e}).join("")},toString:function(){return this._rgba[3]===0?"transparent":this.toRgbaString()}}),s.fn.parse.prototype=s.fn,o.hsla.to=function(e){if(e[0]==null||e[1]==null||e[2]==null)return[null,null,null,e[3]];var t=e[0]/255,n=e[1]/255,r=e[2]/255,i=e[3],s=Math.max(t,n,r),o=Math.min(t,n,r),u=s-o,a=s+o,f=a*.5,l,c;return o===s?l=0:t===s?l=60*(n-r)/u+360:n===s?l=60*(r-t)/u+120:l=60*(t-n)/u+240,u===0?c=0:f<=.5?c=u/a:c=u/(2-a),[Math.round(l)%360,c,f,i==null?1:i]},o.hsla.from=function(e){if(e[0]==null||e[1]==null||e[2]==null)return[null,null,null,e[3]];var t=e[0]/360,n=e[1],r=e[2],i=e[3],s=r<=.5?r*(1+n):r+n-r*n,o=2*r-s;return[Math.round(d(o,s,t+1/3)*255),Math.round(d(o,s,t)*255),Math.round(d(o,s,t-1/3)*255),i]},c(o,function(n,i){var o=i.props,u=i.cache,a=i.to,f=i.from;s.fn[n]=function(n){a&&!this[u]&&(this[u]=a(this._rgba));if(n===t)return this[u].slice();var r,i=e.type(n),l=i==="array"||i==="object"?n:arguments,p=this[u].slice();return c(o,function(e,t){var n=l[i==="object"?e:t.idx];n==null&&(n=p[t.idx]),p[t.idx]=h(n,t)}),f?(r=s(f(p)),r[u]=p,r):s(p)},c(o,function(t,i){if(s.fn[t])return;s.fn[t]=function(s){var o=e.type(s),u=t==="alpha"?this._hsla?"hsla":"rgba":n,a=this[u](),f=a[i.idx],l;return o==="undefined"?f:(o==="function"&&(s=s.call(this,f),o=e.type(s)),s==null&&i.empty?this:(o==="string"&&(l=r.exec(s),l&&(s=f+parseFloat(l[2])*(l[1]==="+"?1:-1))),a[i.idx]=s,this[u](a)))}})}),s.hook=function(t){var n=t.split(" ");c(n,function(t,n){e.cssHooks[n]={set:function(t,r){var i,o,u="";if(r!=="transparent"&&(e.type(r)!=="string"||(i=p(r)))){r=s(i||r);if(!a.rgba&&r._rgba[3]!==1){o=n==="backgroundColor"?t.parentNode:t;while((u===""||u==="transparent")&&o&&o.style)try{u=e.css(o,"backgroundColor"),o=o.parentNode}catch(f){}r=r.blend(u&&u!=="transparent"?u:"_default")}r=r.toRgbaString()}try{t.style[n]=r}catch(f){}}},e.fx.step[n]=function(t){t.colorInit||(t.start=s(t.elem,n),t.end=s(t.end),t.colorInit=!0
),e.cssHooks[n].set(t.elem,t.start.transition(t.end,t.pos))}})},s.hook(n),e.cssHooks.borderColor={expand:function(e){var t={};return c(["Top","Right","Bottom","Left"],function(n,r){t["border"+r+"Color"]=e}),t}},l=e.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",bordo:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}})(jQuery);
/*! Copyright (c) 2013 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.1.1
 *
 * Requires: 1.2.2+
 */
;(function(e){typeof define=="function"&&define.amd?define(["jquery"],e):e(jQuery)})(function(e){function o(t){var n=t||window.event,s=[].slice.call(arguments,1),o=0,u=0,a=0,f=0,l=0,c;t=e.event.fix(n),t.type="mousewheel",n.wheelDelta&&(o=n.wheelDelta),n.detail&&(o=n.detail*-1),n.deltaY&&(a=n.deltaY*-1,o=a),n.deltaX&&(u=n.deltaX,o=u*-1),n.wheelDeltaY!==undefined&&(a=n.wheelDeltaY),n.wheelDeltaX!==undefined&&(u=n.wheelDeltaX*-1),f=Math.abs(o);if(!r||f<r)r=f;l=Math.max(Math.abs(a),Math.abs(u));if(!i||l<i)i=l;return c=o>0?"floor":"ceil",o=Math[c](o/r),u=Math[c](u/i),a=Math[c](a/i),s.unshift(t,o,u,a),(e.event.dispatch||e.event.handle).apply(this,s)}var t=["wheel","mousewheel","DOMMouseScroll"],n="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],r,i;if(e.event.fixHooks)for(var s=t.length;s;)e.event.fixHooks[t[--s]]=e.event.mouseHooks;e.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var e=n.length;e;)this.addEventListener(n[--e],o,!1);else this.onmousewheel=o},teardown:function(){if(this.removeEventListener)for(var e=n.length;e;)this.removeEventListener(n[--e],o,!1);else this.onmousewheel=null}},e.fn.extend({mousewheel:function(e){return e?this.bind("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.unbind("mousewheel",e)}})});
/*! Hammer.JS - v1.0.6dev - 2013-05-04
 * http://eightmedia.github.com/hammer.js
 *
 * Copyright (c) 2013 Jorik Tangelder <j.tangelder@gmail.com>;
 * Licensed under the MIT license */

(function(t,e){"use strict";function n(){if(!i.READY){i.event.determineEventTypes();for(var t in i.gestures)i.gestures.hasOwnProperty(t)&&i.detection.register(i.gestures[t]);i.event.onTouch(i.DOCUMENT,i.EVENT_MOVE,i.detection.detect),i.event.onTouch(i.DOCUMENT,i.EVENT_END,i.detection.detect),i.READY=!0}}var i=function(t,e){return new i.Instance(t,e||{})};i.defaults={stop_browser_behavior:{userSelect:"none",touchAction:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}},i.HAS_POINTEREVENTS=navigator.pointerEnabled||navigator.msPointerEnabled,i.HAS_TOUCHEVENTS="ontouchstart"in t,i.MOBILE_REGEX=/mobile|tablet|ip(ad|hone|od)|android/i,i.NO_MOUSEEVENTS=i.HAS_TOUCHEVENTS&&navigator.userAgent.match(i.MOBILE_REGEX),i.EVENT_TYPES={},i.DIRECTION_DOWN="down",i.DIRECTION_LEFT="left",i.DIRECTION_UP="up",i.DIRECTION_RIGHT="right",i.POINTER_MOUSE="mouse",i.POINTER_TOUCH="touch",i.POINTER_PEN="pen",i.EVENT_START="start",i.EVENT_MOVE="move",i.EVENT_END="end",i.DOCUMENT=document,i.plugins={},i.READY=!1,i.Instance=function(t,e){var r=this;return n(),this.element=t,this.enabled=!0,this.options=i.utils.extend(i.utils.extend({},i.defaults),e||{}),this.options.stop_browser_behavior&&i.utils.stopDefaultBrowserBehavior(this.element,this.options.stop_browser_behavior),i.event.onTouch(t,i.EVENT_START,function(t){r.enabled&&i.detection.startDetect(r,t)}),this},i.Instance.prototype={on:function(t,e){for(var n=t.split(" "),i=0;n.length>i;i++)this.element.addEventListener(n[i],e,!1);return this},off:function(t,e){for(var n=t.split(" "),i=0;n.length>i;i++)this.element.removeEventListener(n[i],e,!1);return this},trigger:function(t,e){var n=i.DOCUMENT.createEvent("Event");n.initEvent(t,!0,!0),n.gesture=e;var r=this.element;return i.utils.hasParent(e.target,r)&&(r=e.target),r.dispatchEvent(n),this},enable:function(t){return this.enabled=t,this}};var r=null,o=!1,s=!1;i.event={bindDom:function(t,e,n){for(var i=e.split(" "),r=0;i.length>r;r++)t.addEventListener(i[r],n,!1)},onTouch:function(t,e,n){var a=this;this.bindDom(t,i.EVENT_TYPES[e],function(c){var u=c.type.toLowerCase();if(!u.match(/mouse/)||!s){u.match(/touch/)||u.match(/pointerdown/)||u.match(/mouse/)&&1===c.which?o=!0:u.match(/mouse/)&&1!==c.which&&(o=!1),u.match(/touch|pointer/)&&(s=!0);var h=0;o&&(i.HAS_POINTEREVENTS&&e!=i.EVENT_END?h=i.PointerEvent.updatePointer(e,c):u.match(/touch/)?h=c.touches.length:s||(h=u.match(/up/)?0:1),h>0&&e==i.EVENT_END?e=i.EVENT_MOVE:h||(e=i.EVENT_END),h||null===r?r=c:c=r,n.call(i.detection,a.collectEventData(t,e,c)),i.HAS_POINTEREVENTS&&e==i.EVENT_END&&(h=i.PointerEvent.updatePointer(e,c))),h||(r=null,o=!1,s=!1,i.PointerEvent.reset())}})},determineEventTypes:function(){var t;t=i.HAS_POINTEREVENTS?i.PointerEvent.getEvents():i.NO_MOUSEEVENTS?["touchstart","touchmove","touchend touchcancel"]:["touchstart mousedown","touchmove mousemove","touchend touchcancel mouseup"],i.EVENT_TYPES[i.EVENT_START]=t[0],i.EVENT_TYPES[i.EVENT_MOVE]=t[1],i.EVENT_TYPES[i.EVENT_END]=t[2]},getTouchList:function(t){return i.HAS_POINTEREVENTS?i.PointerEvent.getTouchList():t.touches?t.touches:[{identifier:1,pageX:t.pageX,pageY:t.pageY,target:t.target}]},collectEventData:function(t,e,n){var r=this.getTouchList(n,e),o=i.POINTER_TOUCH;return(n.type.match(/mouse/)||i.PointerEvent.matchType(i.POINTER_MOUSE,n))&&(o=i.POINTER_MOUSE),{center:i.utils.getCenter(r),timeStamp:(new Date).getTime(),target:n.target,touches:r,eventType:e,pointerType:o,srcEvent:n,preventDefault:function(){this.srcEvent.preventManipulation&&this.srcEvent.preventManipulation(),this.srcEvent.preventDefault&&this.srcEvent.preventDefault()},stopPropagation:function(){this.srcEvent.stopPropagation()},stopDetect:function(){return i.detection.stopDetect()}}}},i.PointerEvent={pointers:{},getTouchList:function(){var t=this,e=[];return Object.keys(t.pointers).sort().forEach(function(n){e.push(t.pointers[n])}),e},updatePointer:function(t,e){return t==i.EVENT_END?this.pointers={}:(e.identifier=e.pointerId,this.pointers[e.pointerId]=e),Object.keys(this.pointers).length},matchType:function(t,e){if(!e.pointerType)return!1;var n={};return n[i.POINTER_MOUSE]=e.pointerType==e.MSPOINTER_TYPE_MOUSE||e.pointerType==i.POINTER_MOUSE,n[i.POINTER_TOUCH]=e.pointerType==e.MSPOINTER_TYPE_TOUCH||e.pointerType==i.POINTER_TOUCH,n[i.POINTER_PEN]=e.pointerType==e.MSPOINTER_TYPE_PEN||e.pointerType==i.POINTER_PEN,n[t]},getEvents:function(){return["pointerdown MSPointerDown","pointermove MSPointerMove","pointerup pointercancel MSPointerUp MSPointerCancel"]},reset:function(){this.pointers={}}},i.utils={extend:function(t,n,i){for(var r in n)t[r]!==e&&i||(t[r]=n[r]);return t},hasParent:function(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1},getCenter:function(t){for(var e=[],n=[],i=0,r=t.length;r>i;i++)e.push(t[i].pageX),n.push(t[i].pageY);return{pageX:(Math.min.apply(Math,e)+Math.max.apply(Math,e))/2,pageY:(Math.min.apply(Math,n)+Math.max.apply(Math,n))/2}},getVelocity:function(t,e,n){return{x:Math.abs(e/t)||0,y:Math.abs(n/t)||0}},getAngle:function(t,e){var n=e.pageY-t.pageY,i=e.pageX-t.pageX;return 180*Math.atan2(n,i)/Math.PI},getDirection:function(t,e){var n=Math.abs(t.pageX-e.pageX),r=Math.abs(t.pageY-e.pageY);return n>=r?t.pageX-e.pageX>0?i.DIRECTION_LEFT:i.DIRECTION_RIGHT:t.pageY-e.pageY>0?i.DIRECTION_UP:i.DIRECTION_DOWN},getDistance:function(t,e){var n=e.pageX-t.pageX,i=e.pageY-t.pageY;return Math.sqrt(n*n+i*i)},getScale:function(t,e){return t.length>=2&&e.length>=2?this.getDistance(e[0],e[1])/this.getDistance(t[0],t[1]):1},getRotation:function(t,e){return t.length>=2&&e.length>=2?this.getAngle(e[1],e[0])-this.getAngle(t[1],t[0]):0},isVertical:function(t){return t==i.DIRECTION_UP||t==i.DIRECTION_DOWN},stopDefaultBrowserBehavior:function(t,e){var n,i=["webkit","khtml","moz","ms","o",""];if(e&&t.style){for(var r=0;i.length>r;r++)for(var o in e)e.hasOwnProperty(o)&&(n=o,i[r]&&(n=i[r]+n.substring(0,1).toUpperCase()+n.substring(1)),t.style[n]=e[o]);"none"==e.userSelect&&(t.onselectstart=function(){return!1})}}},i.detection={gestures:[],current:null,previous:null,stopped:!1,startDetect:function(t,e){this.current||(this.stopped=!1,this.current={inst:t,startEvent:i.utils.extend({},e),lastEvent:!1,name:""},this.detect(e))},detect:function(t){if(this.current&&!this.stopped){t=this.extendEventData(t);for(var e=this.current.inst.options,n=0,r=this.gestures.length;r>n;n++){var o=this.gestures[n];if(!this.stopped&&e[o.name]!==!1&&o.handler.call(o,t,this.current.inst)===!1){this.stopDetect();break}}return this.current&&(this.current.lastEvent=t),t.eventType==i.EVENT_END&&!t.touches.length-1&&this.stopDetect(),t}},stopDetect:function(){this.previous=i.utils.extend({},this.current),this.current=null,this.stopped=!0},extendEventData:function(t){var e=this.current.startEvent;if(e&&(t.touches.length!=e.touches.length||t.touches===e.touches)){e.touches=[];for(var n=0,r=t.touches.length;r>n;n++)e.touches.push(i.utils.extend({},t.touches[n]))}var o=t.timeStamp-e.timeStamp,s=t.center.pageX-e.center.pageX,a=t.center.pageY-e.center.pageY,c=i.utils.getVelocity(o,s,a);return i.utils.extend(t,{deltaTime:o,deltaX:s,deltaY:a,velocityX:c.x,velocityY:c.y,distance:i.utils.getDistance(e.center,t.center),angle:i.utils.getAngle(e.center,t.center),direction:i.utils.getDirection(e.center,t.center),scale:i.utils.getScale(e.touches,t.touches),rotation:i.utils.getRotation(e.touches,t.touches),startEvent:e}),t},register:function(t){var n=t.defaults||{};return n[t.name]===e&&(n[t.name]=!0),i.utils.extend(i.defaults,n,!0),t.index=t.index||1e3,this.gestures.push(t),this.gestures.sort(function(t,e){return t.index<e.index?-1:t.index>e.index?1:0}),this.gestures}},i.gestures=i.gestures||{},i.gestures.Hold={name:"hold",index:10,defaults:{hold_timeout:500,hold_threshold:1},timer:null,handler:function(t,e){switch(t.eventType){case i.EVENT_START:clearTimeout(this.timer),i.detection.current.name=this.name,this.timer=setTimeout(function(){"hold"==i.detection.current.name&&e.trigger("hold",t)},e.options.hold_timeout);break;case i.EVENT_MOVE:t.distance>e.options.hold_threshold&&clearTimeout(this.timer);break;case i.EVENT_END:clearTimeout(this.timer)}}},i.gestures.Tap={name:"tap",index:100,defaults:{tap_max_touchtime:250,tap_max_distance:10,tap_always:!0,doubletap_distance:20,doubletap_interval:300},handler:function(t,e){if(t.eventType==i.EVENT_END){var n=i.detection.previous,r=!1;if(t.deltaTime>e.options.tap_max_touchtime||t.distance>e.options.tap_max_distance)return;n&&"tap"==n.name&&t.timeStamp-n.lastEvent.timeStamp<e.options.doubletap_interval&&t.distance<e.options.doubletap_distance&&(e.trigger("doubletap",t),r=!0),(!r||e.options.tap_always)&&(i.detection.current.name="tap",e.trigger(i.detection.current.name,t))}}},i.gestures.Swipe={name:"swipe",index:40,defaults:{swipe_max_touches:1,swipe_velocity:.7},handler:function(t,e){if(t.eventType==i.EVENT_END){if(e.options.swipe_max_touches>0&&t.touches.length>e.options.swipe_max_touches)return;(t.velocityX>e.options.swipe_velocity||t.velocityY>e.options.swipe_velocity)&&(e.trigger(this.name,t),e.trigger(this.name+t.direction,t))}}},i.gestures.Drag={name:"drag",index:50,defaults:{drag_min_distance:10,correct_for_drag_min_distance:!0,drag_max_touches:1,drag_block_horizontal:!1,drag_block_vertical:!1,drag_lock_to_axis:!1,drag_lock_min_distance:25},triggered:!1,handler:function(t,n){if(i.detection.current.name!=this.name&&this.triggered)return n.trigger(this.name+"end",t),this.triggered=!1,e;if(!(n.options.drag_max_touches>0&&t.touches.length>n.options.drag_max_touches))switch(t.eventType){case i.EVENT_START:this.triggered=!1;break;case i.EVENT_MOVE:if(t.distance<n.options.drag_min_distance&&i.detection.current.name!=this.name)return;if(i.detection.current.name!=this.name&&(i.detection.current.name=this.name,n.options.correct_for_drag_min_distance)){var r=Math.abs(n.options.drag_min_distance/t.distance);i.detection.current.startEvent.center.pageX+=t.deltaX*r,i.detection.current.startEvent.center.pageY+=t.deltaY*r,t=i.detection.extendEventData(t)}(i.detection.current.lastEvent.drag_locked_to_axis||n.options.drag_lock_to_axis&&n.options.drag_lock_min_distance<=t.distance)&&(t.drag_locked_to_axis=!0);var o=i.detection.current.lastEvent.direction;t.drag_locked_to_axis&&o!==t.direction&&(t.direction=i.utils.isVertical(o)?0>t.deltaY?i.DIRECTION_UP:i.DIRECTION_DOWN:0>t.deltaX?i.DIRECTION_LEFT:i.DIRECTION_RIGHT),this.triggered||(n.trigger(this.name+"start",t),this.triggered=!0),n.trigger(this.name,t),n.trigger(this.name+t.direction,t),(n.options.drag_block_vertical&&i.utils.isVertical(t.direction)||n.options.drag_block_horizontal&&!i.utils.isVertical(t.direction))&&t.preventDefault();break;case i.EVENT_END:this.triggered&&n.trigger(this.name+"end",t),this.triggered=!1}}},i.gestures.Transform={name:"transform",index:45,defaults:{transform_min_scale:.01,transform_min_rotation:1,transform_always_block:!1},triggered:!1,handler:function(t,n){if(i.detection.current.name!=this.name&&this.triggered)return n.trigger(this.name+"end",t),this.triggered=!1,e;if(!(2>t.touches.length))switch(n.options.transform_always_block&&t.preventDefault(),t.eventType){case i.EVENT_START:this.triggered=!1;break;case i.EVENT_MOVE:var r=Math.abs(1-t.scale),o=Math.abs(t.rotation);if(n.options.transform_min_scale>r&&n.options.transform_min_rotation>o)return;i.detection.current.name=this.name,this.triggered||(n.trigger(this.name+"start",t),this.triggered=!0),n.trigger(this.name,t),o>n.options.transform_min_rotation&&n.trigger("rotate",t),r>n.options.transform_min_scale&&(n.trigger("pinch",t),n.trigger("pinch"+(1>t.scale?"in":"out"),t));break;case i.EVENT_END:this.triggered&&n.trigger(this.name+"end",t),this.triggered=!1}}},i.gestures.Touch={name:"touch",index:-1/0,defaults:{prevent_default:!1,prevent_mouseevents:!1},handler:function(t,n){return n.options.prevent_mouseevents&&t.pointerType==i.POINTER_MOUSE?(t.stopDetect(),e):(n.options.prevent_default&&t.preventDefault(),t.eventType==i.EVENT_START&&n.trigger(this.name,t),e)}},i.gestures.Release={name:"release",index:1/0,handler:function(t,e){t.eventType==i.EVENT_END&&e.trigger(this.name,t)}},"function"==typeof define&&"object"==typeof define.amd&&define.amd?(t.Hammer=i,define(function(){return i})):"object"==typeof module&&"object"==typeof module.exports?module.exports=i:t.Hammer=i})(this);
/*! Hammer.JS - v1.0.6dev - 2013-05-04
 * http://eightmedia.github.com/hammer.js
 *
 * Copyright (c) 2013 Jorik Tangelder <j.tangelder@gmail.com>;
 * Licensed under the MIT license */

(function(t,e){"use strict";function n(){if(!r.READY){r.event.determineEventTypes();for(var t in r.gestures)r.gestures.hasOwnProperty(t)&&r.detection.register(r.gestures[t]);r.event.onTouch(r.DOCUMENT,r.EVENT_MOVE,r.detection.detect),r.event.onTouch(r.DOCUMENT,r.EVENT_END,r.detection.detect),r.READY=!0}}var r=function(t,e){return new r.Instance(t,e||{})};r.defaults={stop_browser_behavior:{userSelect:"none",touchAction:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}},r.HAS_POINTEREVENTS=navigator.pointerEnabled||navigator.msPointerEnabled,r.HAS_TOUCHEVENTS="ontouchstart"in t,r.MOBILE_REGEX=/mobile|tablet|ip(ad|hone|od)|android/i,r.NO_MOUSEEVENTS=r.HAS_TOUCHEVENTS&&navigator.userAgent.match(r.MOBILE_REGEX),r.EVENT_TYPES={},r.DIRECTION_DOWN="down",r.DIRECTION_LEFT="left",r.DIRECTION_UP="up",r.DIRECTION_RIGHT="right",r.POINTER_MOUSE="mouse",r.POINTER_TOUCH="touch",r.POINTER_PEN="pen",r.EVENT_START="start",r.EVENT_MOVE="move",r.EVENT_END="end",r.DOCUMENT=document,r.plugins={},r.READY=!1,r.Instance=function(t,e){var i=this;return n(),this.element=t,this.enabled=!0,this.options=r.utils.extend(r.utils.extend({},r.defaults),e||{}),this.options.stop_browser_behavior&&r.utils.stopDefaultBrowserBehavior(this.element,this.options.stop_browser_behavior),r.event.onTouch(t,r.EVENT_START,function(t){i.enabled&&r.detection.startDetect(i,t)}),this},r.Instance.prototype={on:function(t,e){for(var n=t.split(" "),r=0;n.length>r;r++)this.element.addEventListener(n[r],e,!1);return this},off:function(t,e){for(var n=t.split(" "),r=0;n.length>r;r++)this.element.removeEventListener(n[r],e,!1);return this},trigger:function(t,e){var n=r.DOCUMENT.createEvent("Event");n.initEvent(t,!0,!0),n.gesture=e;var i=this.element;return r.utils.hasParent(e.target,i)&&(i=e.target),i.dispatchEvent(n),this},enable:function(t){return this.enabled=t,this}};var i=null,o=!1,a=!1;r.event={bindDom:function(t,e,n){for(var r=e.split(" "),i=0;r.length>i;i++)t.addEventListener(r[i],n,!1)},onTouch:function(t,e,n){var s=this;this.bindDom(t,r.EVENT_TYPES[e],function(c){var u=c.type.toLowerCase();if(!u.match(/mouse/)||!a){u.match(/touch/)||u.match(/pointerdown/)||u.match(/mouse/)&&1===c.which?o=!0:u.match(/mouse/)&&1!==c.which&&(o=!1),u.match(/touch|pointer/)&&(a=!0);var h=0;o&&(r.HAS_POINTEREVENTS&&e!=r.EVENT_END?h=r.PointerEvent.updatePointer(e,c):u.match(/touch/)?h=c.touches.length:a||(h=u.match(/up/)?0:1),h>0&&e==r.EVENT_END?e=r.EVENT_MOVE:h||(e=r.EVENT_END),h||null===i?i=c:c=i,n.call(r.detection,s.collectEventData(t,e,c)),r.HAS_POINTEREVENTS&&e==r.EVENT_END&&(h=r.PointerEvent.updatePointer(e,c))),h||(i=null,o=!1,a=!1,r.PointerEvent.reset())}})},determineEventTypes:function(){var t;t=r.HAS_POINTEREVENTS?r.PointerEvent.getEvents():r.NO_MOUSEEVENTS?["touchstart","touchmove","touchend touchcancel"]:["touchstart mousedown","touchmove mousemove","touchend touchcancel mouseup"],r.EVENT_TYPES[r.EVENT_START]=t[0],r.EVENT_TYPES[r.EVENT_MOVE]=t[1],r.EVENT_TYPES[r.EVENT_END]=t[2]},getTouchList:function(t){return r.HAS_POINTEREVENTS?r.PointerEvent.getTouchList():t.touches?t.touches:[{identifier:1,pageX:t.pageX,pageY:t.pageY,target:t.target}]},collectEventData:function(t,e,n){var i=this.getTouchList(n,e),o=r.POINTER_TOUCH;return(n.type.match(/mouse/)||r.PointerEvent.matchType(r.POINTER_MOUSE,n))&&(o=r.POINTER_MOUSE),{center:r.utils.getCenter(i),timeStamp:(new Date).getTime(),target:n.target,touches:i,eventType:e,pointerType:o,srcEvent:n,preventDefault:function(){this.srcEvent.preventManipulation&&this.srcEvent.preventManipulation(),this.srcEvent.preventDefault&&this.srcEvent.preventDefault()},stopPropagation:function(){this.srcEvent.stopPropagation()},stopDetect:function(){return r.detection.stopDetect()}}}},r.PointerEvent={pointers:{},getTouchList:function(){var t=this,e=[];return Object.keys(t.pointers).sort().forEach(function(n){e.push(t.pointers[n])}),e},updatePointer:function(t,e){return t==r.EVENT_END?this.pointers={}:(e.identifier=e.pointerId,this.pointers[e.pointerId]=e),Object.keys(this.pointers).length},matchType:function(t,e){if(!e.pointerType)return!1;var n={};return n[r.POINTER_MOUSE]=e.pointerType==e.MSPOINTER_TYPE_MOUSE||e.pointerType==r.POINTER_MOUSE,n[r.POINTER_TOUCH]=e.pointerType==e.MSPOINTER_TYPE_TOUCH||e.pointerType==r.POINTER_TOUCH,n[r.POINTER_PEN]=e.pointerType==e.MSPOINTER_TYPE_PEN||e.pointerType==r.POINTER_PEN,n[t]},getEvents:function(){return["pointerdown MSPointerDown","pointermove MSPointerMove","pointerup pointercancel MSPointerUp MSPointerCancel"]},reset:function(){this.pointers={}}},r.utils={extend:function(t,n,r){for(var i in n)t[i]!==e&&r||(t[i]=n[i]);return t},hasParent:function(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1},getCenter:function(t){for(var e=[],n=[],r=0,i=t.length;i>r;r++)e.push(t[r].pageX),n.push(t[r].pageY);return{pageX:(Math.min.apply(Math,e)+Math.max.apply(Math,e))/2,pageY:(Math.min.apply(Math,n)+Math.max.apply(Math,n))/2}},getVelocity:function(t,e,n){return{x:Math.abs(e/t)||0,y:Math.abs(n/t)||0}},getAngle:function(t,e){var n=e.pageY-t.pageY,r=e.pageX-t.pageX;return 180*Math.atan2(n,r)/Math.PI},getDirection:function(t,e){var n=Math.abs(t.pageX-e.pageX),i=Math.abs(t.pageY-e.pageY);return n>=i?t.pageX-e.pageX>0?r.DIRECTION_LEFT:r.DIRECTION_RIGHT:t.pageY-e.pageY>0?r.DIRECTION_UP:r.DIRECTION_DOWN},getDistance:function(t,e){var n=e.pageX-t.pageX,r=e.pageY-t.pageY;return Math.sqrt(n*n+r*r)},getScale:function(t,e){return t.length>=2&&e.length>=2?this.getDistance(e[0],e[1])/this.getDistance(t[0],t[1]):1},getRotation:function(t,e){return t.length>=2&&e.length>=2?this.getAngle(e[1],e[0])-this.getAngle(t[1],t[0]):0},isVertical:function(t){return t==r.DIRECTION_UP||t==r.DIRECTION_DOWN},stopDefaultBrowserBehavior:function(t,e){var n,r=["webkit","khtml","moz","ms","o",""];if(e&&t.style){for(var i=0;r.length>i;i++)for(var o in e)e.hasOwnProperty(o)&&(n=o,r[i]&&(n=r[i]+n.substring(0,1).toUpperCase()+n.substring(1)),t.style[n]=e[o]);"none"==e.userSelect&&(t.onselectstart=function(){return!1})}}},r.detection={gestures:[],current:null,previous:null,stopped:!1,startDetect:function(t,e){this.current||(this.stopped=!1,this.current={inst:t,startEvent:r.utils.extend({},e),lastEvent:!1,name:""},this.detect(e))},detect:function(t){if(this.current&&!this.stopped){t=this.extendEventData(t);for(var e=this.current.inst.options,n=0,i=this.gestures.length;i>n;n++){var o=this.gestures[n];if(!this.stopped&&e[o.name]!==!1&&o.handler.call(o,t,this.current.inst)===!1){this.stopDetect();break}}return this.current&&(this.current.lastEvent=t),t.eventType==r.EVENT_END&&!t.touches.length-1&&this.stopDetect(),t}},stopDetect:function(){this.previous=r.utils.extend({},this.current),this.current=null,this.stopped=!0},extendEventData:function(t){var e=this.current.startEvent;if(e&&(t.touches.length!=e.touches.length||t.touches===e.touches)){e.touches=[];for(var n=0,i=t.touches.length;i>n;n++)e.touches.push(r.utils.extend({},t.touches[n]))}var o=t.timeStamp-e.timeStamp,a=t.center.pageX-e.center.pageX,s=t.center.pageY-e.center.pageY,c=r.utils.getVelocity(o,a,s);return r.utils.extend(t,{deltaTime:o,deltaX:a,deltaY:s,velocityX:c.x,velocityY:c.y,distance:r.utils.getDistance(e.center,t.center),angle:r.utils.getAngle(e.center,t.center),direction:r.utils.getDirection(e.center,t.center),scale:r.utils.getScale(e.touches,t.touches),rotation:r.utils.getRotation(e.touches,t.touches),startEvent:e}),t},register:function(t){var n=t.defaults||{};return n[t.name]===e&&(n[t.name]=!0),r.utils.extend(r.defaults,n,!0),t.index=t.index||1e3,this.gestures.push(t),this.gestures.sort(function(t,e){return t.index<e.index?-1:t.index>e.index?1:0}),this.gestures}},r.gestures=r.gestures||{},r.gestures.Hold={name:"hold",index:10,defaults:{hold_timeout:500,hold_threshold:1},timer:null,handler:function(t,e){switch(t.eventType){case r.EVENT_START:clearTimeout(this.timer),r.detection.current.name=this.name,this.timer=setTimeout(function(){"hold"==r.detection.current.name&&e.trigger("hold",t)},e.options.hold_timeout);break;case r.EVENT_MOVE:t.distance>e.options.hold_threshold&&clearTimeout(this.timer);break;case r.EVENT_END:clearTimeout(this.timer)}}},r.gestures.Tap={name:"tap",index:100,defaults:{tap_max_touchtime:250,tap_max_distance:10,tap_always:!0,doubletap_distance:20,doubletap_interval:300},handler:function(t,e){if(t.eventType==r.EVENT_END){var n=r.detection.previous,i=!1;if(t.deltaTime>e.options.tap_max_touchtime||t.distance>e.options.tap_max_distance)return;n&&"tap"==n.name&&t.timeStamp-n.lastEvent.timeStamp<e.options.doubletap_interval&&t.distance<e.options.doubletap_distance&&(e.trigger("doubletap",t),i=!0),(!i||e.options.tap_always)&&(r.detection.current.name="tap",e.trigger(r.detection.current.name,t))}}},r.gestures.Swipe={name:"swipe",index:40,defaults:{swipe_max_touches:1,swipe_velocity:.7},handler:function(t,e){if(t.eventType==r.EVENT_END){if(e.options.swipe_max_touches>0&&t.touches.length>e.options.swipe_max_touches)return;(t.velocityX>e.options.swipe_velocity||t.velocityY>e.options.swipe_velocity)&&(e.trigger(this.name,t),e.trigger(this.name+t.direction,t))}}},r.gestures.Drag={name:"drag",index:50,defaults:{drag_min_distance:10,correct_for_drag_min_distance:!0,drag_max_touches:1,drag_block_horizontal:!1,drag_block_vertical:!1,drag_lock_to_axis:!1,drag_lock_min_distance:25},triggered:!1,handler:function(t,n){if(r.detection.current.name!=this.name&&this.triggered)return n.trigger(this.name+"end",t),this.triggered=!1,e;if(!(n.options.drag_max_touches>0&&t.touches.length>n.options.drag_max_touches))switch(t.eventType){case r.EVENT_START:this.triggered=!1;break;case r.EVENT_MOVE:if(t.distance<n.options.drag_min_distance&&r.detection.current.name!=this.name)return;if(r.detection.current.name!=this.name&&(r.detection.current.name=this.name,n.options.correct_for_drag_min_distance)){var i=Math.abs(n.options.drag_min_distance/t.distance);r.detection.current.startEvent.center.pageX+=t.deltaX*i,r.detection.current.startEvent.center.pageY+=t.deltaY*i,t=r.detection.extendEventData(t)}(r.detection.current.lastEvent.drag_locked_to_axis||n.options.drag_lock_to_axis&&n.options.drag_lock_min_distance<=t.distance)&&(t.drag_locked_to_axis=!0);var o=r.detection.current.lastEvent.direction;t.drag_locked_to_axis&&o!==t.direction&&(t.direction=r.utils.isVertical(o)?0>t.deltaY?r.DIRECTION_UP:r.DIRECTION_DOWN:0>t.deltaX?r.DIRECTION_LEFT:r.DIRECTION_RIGHT),this.triggered||(n.trigger(this.name+"start",t),this.triggered=!0),n.trigger(this.name,t),n.trigger(this.name+t.direction,t),(n.options.drag_block_vertical&&r.utils.isVertical(t.direction)||n.options.drag_block_horizontal&&!r.utils.isVertical(t.direction))&&t.preventDefault();break;case r.EVENT_END:this.triggered&&n.trigger(this.name+"end",t),this.triggered=!1}}},r.gestures.Transform={name:"transform",index:45,defaults:{transform_min_scale:.01,transform_min_rotation:1,transform_always_block:!1},triggered:!1,handler:function(t,n){if(r.detection.current.name!=this.name&&this.triggered)return n.trigger(this.name+"end",t),this.triggered=!1,e;if(!(2>t.touches.length))switch(n.options.transform_always_block&&t.preventDefault(),t.eventType){case r.EVENT_START:this.triggered=!1;break;case r.EVENT_MOVE:var i=Math.abs(1-t.scale),o=Math.abs(t.rotation);if(n.options.transform_min_scale>i&&n.options.transform_min_rotation>o)return;r.detection.current.name=this.name,this.triggered||(n.trigger(this.name+"start",t),this.triggered=!0),n.trigger(this.name,t),o>n.options.transform_min_rotation&&n.trigger("rotate",t),i>n.options.transform_min_scale&&(n.trigger("pinch",t),n.trigger("pinch"+(1>t.scale?"in":"out"),t));break;case r.EVENT_END:this.triggered&&n.trigger(this.name+"end",t),this.triggered=!1}}},r.gestures.Touch={name:"touch",index:-1/0,defaults:{prevent_default:!1,prevent_mouseevents:!1},handler:function(t,n){return n.options.prevent_mouseevents&&t.pointerType==r.POINTER_MOUSE?(t.stopDetect(),e):(n.options.prevent_default&&t.preventDefault(),t.eventType==r.EVENT_START&&n.trigger(this.name,t),e)}},r.gestures.Release={name:"release",index:1/0,handler:function(t,e){t.eventType==r.EVENT_END&&e.trigger(this.name,t)}},"function"==typeof define&&"object"==typeof define.amd&&define.amd?(t.Hammer=r,define(function(){return r})):"object"==typeof module&&"object"==typeof module.exports?module.exports=r:t.Hammer=r})(this),function(t,e){"use strict";t!==e&&(Hammer.event.bindDom=function(n,r,i){t(n).on(r,function(t){var n=t.originalEvent||t;n.pageX===e&&(n.pageX=t.pageX,n.pageY=t.pageY),n.target||(n.target=t.target),n.which===e&&(n.which=n.button),n.preventDefault||(n.preventDefault=t.preventDefault),n.stopPropagation||(n.stopPropagation=t.stopPropagation),i.call(this,n)})},Hammer.Instance.prototype.on=function(e,n){return t(this.element).on(e,n)},Hammer.Instance.prototype.off=function(e,n){return t(this.element).off(e,n)},Hammer.Instance.prototype.trigger=function(e,n){var r=t(this.element);return r.has(n.target).length&&(r=t(n.target)),r.trigger({type:e,gesture:n})},t.fn.hammer=function(e){return this.each(function(){var n=t(this),r=n.data("hammer");r?r&&e&&Hammer.utils.extend(r.options,e):n.data("hammer",new Hammer(this,e||{}))})})}(window.jQuery||window.Zepto);
(function(e){e.plugins.showTouches=function(t){function s(){for(var e in r)r.hasOwnProperty(e)&&!i[e]&&(document.body.removeChild(r[e]),delete r[e])}var n="position:absolute;z-index:9999;left:0;top:0;height:14px;width:14px;border:solid 2px #777;background:rgba(255,255,255,.7);border-radius:20px;pointer-events:none;margin-top:-9px;margin-left:-9px;",r={},i={};e.detection.register({name:"show_touches",priority:0,handler:function(o,u){i={};if(o.pointerType!=e.POINTER_MOUSE&&!t){s();return}for(var a=0,f=o.touches.length;a<f;a++){var l=o.touches[a],c=l.identifier;i[c]=l;if(!r[c]){var h=document.createElement("div");h.setAttribute("style",n),document.body.appendChild(h),r[c]=h}r[c].style.left=l.pageX+"px",r[c].style.top=l.pageY+"px"}s()}})}})(window.Hammer);
(function(e){e.plugins.fakeMultitouch=function(){var t=!1;e.HAS_POINTEREVENTS=navigator.msPointerEnabled&&navigator.msMaxTouchPoints&&navigator.msMaxTouchPoints>=1,e.event.getTouchList=function(n,r){if(e.HAS_POINTEREVENTS)return e.PointerEvent.getTouchList();if(n.touches)return n.touches;r==e.EVENT_START&&(t=!1);if(n.shiftKey){t||(t={pageX:n.pageX,pageY:n.pageY});var i=t.pageX-n.pageX,s=t.pageY-n.pageY;return[{identifier:1,pageX:t.pageX-i-50,pageY:t.pageY-s- -50,target:n.target},{identifier:2,pageX:t.pageX+i- -50,pageY:t.pageY+s-50,target:n.target}]}return t=!1,[{identifier:1,pageX:n.pageX,pageY:n.pageY,target:n.target}]}}})(window.Hammer);
/*
 * jQuery MultiSelect UI Widget 1.13
 * Copyright (c) 2012 Eric Hynds
 *
 * http://www.erichynds.com/jquery/jquery-ui-multiselect-widget/
 *
 * Depends:
 *   - jQuery 1.4.2+
 *   - jQuery UI 1.8 widget factory
 *
 * Optional:
 *   - jQuery UI effects
 *   - jQuery UI position utility
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 */
(function(d){var k=0;d.widget("ech.multiselect",{options:{header:!0,height:175,minWidth:225,classes:"",checkAllText:"Check all",uncheckAllText:"Uncheck all",noneSelectedText:"Select options",selectedText:"# selected",selectedList:0,show:null,hide:null,autoOpen:!1,multiple:!0,position:{}},_create:function(){var a=this.element.hide(),b=this.options;this.speed=d.fx.speeds._default;this._isOpen=!1;a=(this.button=d('<button type="button"><span class="ui-icon ui-icon-triangle-2-n-s"></span></button>')).addClass("ui-multiselect ui-widget ui-state-default ui-corner-all").addClass(b.classes).attr({title:a.attr("title"),"aria-haspopup":!0,tabIndex:a.attr("tabIndex")}).insertAfter(a);(this.buttonlabel=d("<span />")).html(b.noneSelectedText).appendTo(a);var a=(this.menu=d("<div />")).addClass("ui-multiselect-menu ui-widget ui-widget-content ui-corner-all").addClass(b.classes).appendTo(document.body),c=(this.header=d("<div />")).addClass("ui-widget-header ui-corner-all ui-multiselect-header ui-helper-clearfix").appendTo(a);(this.headerLinkContainer=d("<ul />")).addClass("ui-helper-reset").html(function(){return!0===b.header?'<li><a class="ui-multiselect-all" href="#"><span class="ui-icon ui-icon-check"></span><span>'+b.checkAllText+'</span></a></li><li><a class="ui-multiselect-none" href="#"><span class="ui-icon ui-icon-closethick"></span><span>'+b.uncheckAllText+"</span></a></li>":"string"===typeof b.header?"<li>"+b.header+"</li>":""}).append('<li class="ui-multiselect-close"><a href="#" class="ui-multiselect-close"><span class="ui-icon ui-icon-circle-close"></span></a></li>').appendTo(c);(this.checkboxContainer=d("<ul />")).addClass("ui-multiselect-checkboxes ui-helper-reset").appendTo(a);this._bindEvents();this.refresh(!0);b.multiple||a.addClass("ui-multiselect-single")},_init:function(){!1===this.options.header&&this.header.hide();this.options.multiple||this.headerLinkContainer.find(".ui-multiselect-all, .ui-multiselect-none").hide();this.options.autoOpen&&this.open();this.element.is(":disabled")&&this.disable()},refresh:function(a){var b=this.element,c=this.options,f=this.menu,h=this.checkboxContainer,g=[],e="",i=b.attr("id")||k++;b.find("option").each(function(b){d(this);var a=this.parentNode,f=this.innerHTML,h=this.title,k=this.value,b="ui-multiselect-"+(this.id||i+"-option-"+b),l=this.disabled,n=this.selected,m=["ui-corner-all"],o=(l?"ui-multiselect-disabled ":" ")+this.className,j;"OPTGROUP"===a.tagName&&(j=a.getAttribute("label"),-1===d.inArray(j,g)&&(e+='<li class="ui-multiselect-optgroup-label '+a.className+'"><a href="#">'+j+"</a></li>",g.push(j)));l&&m.push("ui-state-disabled");n&&!c.multiple&&m.push("ui-state-active");e+='<li class="'+o+'">';e+='<label for="'+b+'" title="'+h+'" class="'+m.join(" ")+'">';e+='<input id="'+b+'" name="multiselect_'+i+'" type="'+(c.multiple?"checkbox":"radio")+'" value="'+k+'" title="'+f+'"';n&&(e+=' checked="checked"',e+=' aria-selected="true"');l&&(e+=' disabled="disabled"',e+=' aria-disabled="true"');e+=" /><span>"+f+"</span></label></li>"});h.html(e);this.labels=f.find("label");this.inputs=this.labels.children("input");this._setButtonWidth();this._setMenuWidth();this.button[0].defaultValue=this.update();a||this._trigger("refresh")},update:function(){var a=this.options,b=this.inputs,c=b.filter(":checked"),f=c.length,a=0===f?a.noneSelectedText:d.isFunction(a.selectedText)?a.selectedText.call(this,f,b.length,c.get()):/\d/.test(a.selectedList)&&0<a.selectedList&&f<=a.selectedList?c.map(function(){return d(this).next().html()}).get().join(", "):a.selectedText.replace("#",f).replace("#",b.length);this.buttonlabel.html(a);return a},_bindEvents:function(){function a(){b[b._isOpen? "close":"open"]();return!1}var b=this,c=this.button;c.find("span").bind("click.multiselect",a);c.bind({click:a,keypress:function(a){switch(a.which){case 27:case 38:case 37:b.close();break;case 39:case 40:b.open()}},mouseenter:function(){c.hasClass("ui-state-disabled")||d(this).addClass("ui-state-hover")},mouseleave:function(){d(this).removeClass("ui-state-hover")},focus:function(){c.hasClass("ui-state-disabled")||d(this).addClass("ui-state-focus")},blur:function(){d(this).removeClass("ui-state-focus")}});this.header.delegate("a","click.multiselect",function(a){if(d(this).hasClass("ui-multiselect-close"))b.close();else b[d(this).hasClass("ui-multiselect-all")?"checkAll":"uncheckAll"]();a.preventDefault()});this.menu.delegate("li.ui-multiselect-optgroup-label a","click.multiselect",function(a){a.preventDefault();var c=d(this),g=c.parent().nextUntil("li.ui-multiselect-optgroup-label").find("input:visible:not(:disabled)"),e=g.get(),c=c.parent().text();!1!==b._trigger("beforeoptgrouptoggle",a,{inputs:e,label:c})&&(b._toggleChecked(g.filter(":checked").length!==g.length,g),b._trigger("optgrouptoggle",a,{inputs:e,label:c,checked:e[0].checked}))}).delegate("label","mouseenter.multiselect",function(){d(this).hasClass("ui-state-disabled")||(b.labels.removeClass("ui-state-hover"),d(this).addClass("ui-state-hover").find("input").focus())}).delegate("label","keydown.multiselect",function(a){a.preventDefault();switch(a.which){case 9:case 27:b.close();break;case 38:case 40:case 37:case 39:b._traverse(a.which,this);break;case 13:d(this).find("input")[0].click()}}).delegate('input[type="checkbox"], input[type="radio"]',"click.multiselect",function(a){var c=d(this),g=this.value,e=this.checked,i=b.element.find("option");this.disabled||!1===b._trigger("click",a,{value:g,text:this.title,checked:e})?a.preventDefault():(c.focus(),c.attr("aria-selected",e),i.each(function(){this.value===g?this.selected=e:b.options.multiple||(this.selected=!1)}),b.options.multiple||(b.labels.removeClass("ui-state-active"),c.closest("label").toggleClass("ui-state-active",e),b.close()),b.element.trigger("change"),setTimeout(d.proxy(b.update,b),10))});d(document).bind("mousedown.multiselect",function(a){b._isOpen&&(!d.contains(b.menu[0],a.target)&&!d.contains(b.button[0],a.target)&&a.target!==b.button[0])&&b.close()});d(this.element[0].form).bind("reset.multiselect",function(){setTimeout(d.proxy(b.refresh,b),10)})},_setButtonWidth:function(){var a=this.element.outerWidth(),b=this.options;/\d/.test(b.minWidth)&&a<b.minWidth&&(a=b.minWidth);this.button.width(a)},_setMenuWidth:function(){var a=this.menu,b=this.button.outerWidth()-parseInt(a.css("padding-left"),10)-parseInt(a.css("padding-right"),10)-parseInt(a.css("border-right-width"),10)-parseInt(a.css("border-left-width"),10);a.width(b||this.button.outerWidth())},_traverse:function(a,b){var c=d(b),f=38===a||37===a,c=c.parent()[f?"prevAll":"nextAll"]("li:not(.ui-multiselect-disabled, .ui-multiselect-optgroup-label)")[f?"last":"first"]();c.length?c.find("label").trigger("mouseover"):(c=this.menu.find("ul").last(),this.menu.find("label")[f? "last":"first"]().trigger("mouseover"),c.scrollTop(f?c.height():0))},_toggleState:function(a,b){return function(){this.disabled||(this[a]=b);b?this.setAttribute("aria-selected",!0):this.removeAttribute("aria-selected")}},_toggleChecked:function(a,b){var c=b&&b.length?b:this.inputs,f=this;c.each(this._toggleState("checked",a));c.eq(0).focus();this.update();var h=c.map(function(){return this.value}).get();this.element.find("option").each(function(){!this.disabled&&-1<d.inArray(this.value,h)&&f._toggleState("selected",a).call(this)});c.length&&this.element.trigger("change")},_toggleDisabled:function(a){this.button.attr({disabled:a,"aria-disabled":a})[a?"addClass":"removeClass"]("ui-state-disabled");var b=this.menu.find("input"),b=a?b.filter(":enabled").data("ech-multiselect-disabled",!0):b.filter(function(){return!0===d.data(this,"ech-multiselect-disabled")}).removeData("ech-multiselect-disabled");b.attr({disabled:a,"arial-disabled":a}).parent()[a?"addClass":"removeClass"]("ui-state-disabled");this.element.attr({disabled:a,"aria-disabled":a})},open:function(){var a=this.button,b=this.menu,c=this.speed,f=this.options,h=[];if(!(!1===this._trigger("beforeopen")||a.hasClass("ui-state-disabled")||this._isOpen)){var g=b.find("ul").last(),e=f.show,i=a.offset();d.isArray(f.show)&&(e=f.show[0],c=f.show[1]||this.speed);e&&(h=[e,c]);g.scrollTop(0).height(f.height);d.ui.position&&!d.isEmptyObject(f.position)?(f.position.of=f.position.of||a,b.show().position(f.position).hide()):b.css({top:i.top+a.outerHeight(),left:i.left});d.fn.show.apply(b,h);this.labels.eq(0).trigger("mouseover").trigger("mouseenter").find("input").trigger("focus");a.addClass("ui-state-active");this._isOpen=!0;this._trigger("open")}},close:function(){if(!1!==this._trigger("beforeclose")){var a=this.options,b=a.hide,c=this.speed,f=[];d.isArray(a.hide)&&(b=a.hide[0],c=a.hide[1]||this.speed);b&&(f=[b,c]);d.fn.hide.apply(this.menu,f);this.button.removeClass("ui-state-active").trigger("blur").trigger("mouseleave");this._isOpen=!1;this._trigger("close")}},enable:function(){this._toggleDisabled(!1)},disable:function(){this._toggleDisabled(!0)},checkAll:function(){this._toggleChecked(!0);this._trigger("checkAll")},uncheckAll:function(){this._toggleChecked(!1);this._trigger("uncheckAll")},getChecked:function(){return this.menu.find("input").filter(":checked")},destroy:function(){d.Widget.prototype.destroy.call(this);this.button.remove();this.menu.remove();this.element.show();return this},isOpen:function(){return this._isOpen},widget:function(){return this.menu},getButton:function(){return this.button},_setOption:function(a,b){var c=this.menu;switch(a){case "header":c.find("div.ui-multiselect-header")[b?"show":"hide"]();break;case "checkAllText":c.find("a.ui-multiselect-all span").eq(-1).text(b);break;case "uncheckAllText":c.find("a.ui-multiselect-none span").eq(-1).text(b);break;case "height":c.find("ul").last().height(parseInt(b,10));break;case "minWidth":this.options[a]=parseInt(b,10);this._setButtonWidth();this._setMenuWidth();break;case "selectedText":case "selectedList":case "noneSelectedText":this.options[a]=b;this.update();break;case "classes":c.add(this.button).removeClass(this.options.classes).addClass(b);break;case "multiple":c.toggleClass("ui-multiselect-single",!b),this.options.multiple=b,this.element[0].multiple=b,this.refresh()}d.Widget.prototype._setOption.apply(this,arguments)}})})(jQuery);

"undefined"==typeof jwplayer&&(jwplayer=function(e){if(jwplayer.api)return jwplayer.api.selectPlayer(e)},jwplayer.version="6.11.4923",jwplayer.vid=document.createElement("video"),jwplayer.audio=document.createElement("audio"),jwplayer.source=document.createElement("source"),function(){var e={},t=Array.prototype,n=Object.prototype,r=t.slice,i=t.concat,s=n.toString,o=n.hasOwnProperty,u=t.map,a=t.forEach,f=t.filter,l=t.some,c=t.indexOf,n=Array.isArray,h=Object.keys,p=function(e){if(e instanceof p)return e;if(!(this instanceof p))return new p(e)},d=p.each=p.forEach=function(t,n,r){if(null==t)return t;if(a&&t.forEach===a)t.forEach(n,r);else if(t.length===+t.length){for(var i=0,s=t.length;i<s;i++)if(n.call(r,t[i],i,t)===e)return}else for(var o=p.keys(t),i=0,s=o.length;i<s;i++)if(n.call(r,t[o[i]],o[i],t)===e)return;return t};p.map=p.collect=function(e,t,n){var r=[];return null==e?r:u&&e.map===u?e.map(t,n):(d(e,function(e,i,s){r.push(t.call(n,e,i,s))}),r)},p.find=p.detect=function(e,t,n){var r;return v(e,function(e,i,s){if(t.call(n,e,i,s))return r=e,!0}),r},p.filter=p.select=function(e,t,n){var r=[];return null==e?r:f&&e.filter===f?e.filter(t,n):(d(e,function(e,i,s){t.call(n,e,i,s)&&r.push(e)}),r)};var v=p.some=p.any=function(t,n,r){n||(n=p.identity);var i=!1;return null==t?i:l&&t.some===l?t.some(n,r):(d(t,function(t,s,o){if(i||(i=n.call(r,t,s,o)))return e}),!!i)};p.size=function(e){return null==e?0:e.length===+e.length?e.length:p.keys(e).length},p.after=function(e,t){return function(){if(1>--e)return t.apply(this,arguments)}},p.sortedIndex=function(e,t,n,r){n=null==n?p.identity:p.isFunction(n)?n:p.property(n),t=n.call(r,t);for(var i=0,s=e.length;i<s;){var o=i+s>>>1;n.call(r,e[o])<t?i=o+1:s=o}return i},p.find=p.detect=function(e,t,n){var r;return v(e,function(e,i,s){if(t.call(n,e,i,s))return r=e,!0}),r},v=p.some=p.any=function(t,n,r){n||(n=p.identity);var i=!1;return null==t?i:l&&t.some===l?t.some(n,r):(d(t,function(t,s,o){if(i||(i=n.call(r,t,s,o)))return e}),!!i)},p.contains=p.include=function(e,t){return null==e?!1:(e.length!==+e.length&&(e=p.values(e)),0<=p.indexOf(e,t))},p.difference=function(e){var n=i.apply(t,r.call(arguments,1));return p.filter(e,function(e){return!p.contains(n,e)})},p.without=function(e){return p.difference(e,r.call(arguments,1))},p.indexOf=function(e,t,n){if(null==e)return-1;var r=0,i=e.length;if(n){if("number"!=typeof n)return r=p.sortedIndex(e,t),e[r]===t?r:-1;r=0>n?Math.max(0,i+n):n}if(c&&e.indexOf===c)return e.indexOf(t,n);for(;r<i;r++)if(e[r]===t)return r;return-1},p.memoize=function(e,t){var n={};return t||(t=p.identity),function(){var r=t.apply(this,arguments);return p.has(n,r)?n[r]:n[r]=e.apply(this,arguments)}},p.keys=function(e){if(!p.isObject(e))return[];if(h)return h(e);var t=[],n;for(n in e)p.has(e,n)&&t.push(n);return t},p.pick=function(e){var n={},s=i.apply(t,r.call(arguments,1));return d(s,function(t){t in e&&(n[t]=e[t])}),n},p.isArray=n||function(e){return"[object Array]"==s.call(e)},p.isObject=function(e){return e===Object(e)},d("Arguments Function String Number Date RegExp".split(" "),function(e){p["is"+e]=function(t){return s.call(t)=="[object "+e+"]"}}),p.isArguments(arguments)||(p.isArguments=function(e){return!!e&&!!p.has(e,"callee")}),"function"!=typeof /./&&(p.isFunction=function(e){return"function"==typeof e}),p.isFinite=function(e){return isFinite(e)&&!isNaN(parseFloat(e))},p.isNaN=function(e){return p.isNumber(e)&&e!=+e},p.isBoolean=function(e){return!0===e||!1===e||"[object Boolean]"==s.call(e)},p.isNull=function(e){return null===e},p.isUndefined=function(e){return void 0===e},p.has=function(e,t){return o.call(e,t)},p.identity=function(e){return e},p.constant=function(e){return function(){return e}},p.property=function(e){return function(t){return t[e]}},this._=p}.call(jwplayer),function(e){function t(e){return function(){return o(e)}}function n(e,t,n,i,s){return function(){var o,u;if(s)n(e);else{try{if(o=e.responseXML)if(u=o.firstChild,o.lastChild&&"parsererror"===o.lastChild.nodeName){i&&i("Invalid XML",t,e);return}}catch(f){}if(o&&u)return n(e);(o=r.parseXML(e.responseText))&&o.firstChild?(e=r.extend({},e,{responseXML:o}),n(e)):i&&i(e.responseText?"Invalid XML":t,t,e)}}}var r=e.utils={},i=e._;r.exists=function(e){switch(typeof e){case"string":return 0<e.length;case"object":return null!==e;case"undefined":return!1}return!0},r.styleDimension=function(e){return e+(0<e.toString().indexOf("%")?"":"px")},r.getAbsolutePath=function(e,t){r.exists(t)||(t=document.location.href);if(r.exists(e)){var n;if(r.exists(e)){n=e.indexOf("://");var i=e.indexOf("?");n=0<n&&(0>i||i>n)}else n=void 0;if(n)return e;n=t.substring(0,t.indexOf("://")+3);var i=t.substring(n.length,t.indexOf("/",n.length+1)),s;0===e.indexOf("/")?s=e.split("/"):(s=t.split("?")[0],s=s.substring(n.length+i.length+1,s.lastIndexOf("/")),s=s.split("/").concat(e.split("/")));for(var o=[],u=0;u<s.length;u++)s[u]&&r.exists(s[u])&&"."!==s[u]&&(".."===s[u]?o.pop():o.push(s[u]));return n+i+"/"+o.join("/")}},r.extend=function(){var e=Array.prototype.slice.call(arguments,0);if(1<e.length){for(var t=e[0],n=function(e,n){void 0!==n&&null!==n&&(t[e]=n)},i=1;i<e.length;i++)r.foreach(e[i],n);return t}return null};var s=window.console=window.console||{log:function(){}};r.log=function(){var e=Array.prototype.slice.call(arguments,0);"object"==typeof s.log?s.log(e):s.log.apply(s,e)};var o=i.memoize(function(e){return null!==navigator.userAgent.toLowerCase().match(e)});r.isFF=t(/firefox/i),r.isChrome=t(/chrome/i),r.isIPod=t(/iP(hone|od)/i),r.isIPad=t(/iPad/i),r.isSafari602=t(/Macintosh.*Mac OS X 10_8.*6\.0\.\d* Safari/i),r.isIETrident=function(e){return e?(e=parseFloat(e).toFixed(1),o(RegExp("trident/.+rv:\\s*"+e,"i"))):o(/trident/i)},r.isMSIE=function(e){return e?(e=parseFloat(e).toFixed(1),o(RegExp("msie\\s*"+e,"i"))):o(/msie/i)},r.isIE=function(e){return e?(e=parseFloat(e).toFixed(1),11<=e?r.isIETrident(e):r.isMSIE(e)):r.isMSIE()||r.isIETrident()},r.isSafari=function(){return o(/safari/i)&&!o(/chrome/i)&&!
o(/chromium/i)&&!o(/android/i)},r.isIOS=function(e){return e?o(RegExp("iP(hone|ad|od).+\\sOS\\s"+e,"i")):o(/iP(hone|ad|od)/i)},r.isAndroidNative=function(e){return r.isAndroid(e,!0)},r.isAndroid=function(e,t){return t&&o(/chrome\/[123456789]/i)&&!o(/chrome\/18/)?!1:e?(r.isInt(e)&&!/\./.test(e)&&(e=""+e+"."),o(RegExp("Android\\s*"+e,"i"))):o(/Android/i)},r.isMobile=function(){return r.isIOS()||r.isAndroid()},r.isIframe=function(){return window.frameElement&&"IFRAME"===window.frameElement.nodeName},r.saveCookie=function(e,t){document.cookie="jwplayer."+e+"="+t+"; path=/"},r.getCookies=function(){for(var e={},t=document.cookie.split("; "),n=0;n<t.length;n++){var r=t[n].split("=");0===r[0].indexOf("jwplayer.")&&(e[r[0].substring(9,r[0].length)]=r[1])}return e},r.isInt=function(e){return 0===parseFloat(e)%1},r.typeOf=function(e){if(null===e)return"null";var t=typeof e;return"object"===t&&i.isArray(e)?"array":t},r.translateEventResponse=function(t,n){var i=r.extend({},n);if(t===e.events.JWPLAYER_FULLSCREEN&&!i.fullscreen)i.fullscreen="true"===i.message,delete i.message;else if("object"==typeof i.data){var s=i.data;delete i.data,i=r.extend(i,s)}else"object"==typeof i.metadata&&r.deepReplaceKeyName(i.metadata,["__dot__","__spc__","__dsh__","__default__"],["."," ","-","default"]);return r.foreach(["position","duration","offset"],function(e,t){i[t]&&(i[t]=Math.round(1e3*i[t])/1e3)}),i},r.flashVersion=function(){if(r.isAndroid())return 0;var e=navigator.plugins,t;try{if("undefined"!==e&&(t=e["Shockwave Flash"]))return parseInt(t.description.replace(/\D+(\d+)\..*/,"$1"),10)}catch(n){}if("undefined"!=typeof window.ActiveXObject)try{if(t=new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash"))return parseInt(t.GetVariable("$version").split(" ")[1].split(",")[0],10)}catch(i){}return 0},r.getScriptPath=function(e){for(var t=document.getElementsByTagName("script"),n=0;n<t.length;n++){var r=t[n].src;if(r&&0<=r.indexOf(e))return r.substr(0,r.indexOf(e))}return""},r.deepReplaceKeyName=function(t,n,i){switch(e.utils.typeOf(t)){case"array":for(var s=0;s<t.length;s++)t[s]=e.utils.deepReplaceKeyName(t[s],n,i);break;case"object":r.foreach(t,function(r,s){var o;if(n instanceof Array&&i instanceof Array){if(n.length!==i.length)return;o=n}else o=[n];for(var u=r,l=0;l<o.length;l++)u=u.replace(RegExp(n[l],"g"),i[l]);t[u]=e.utils.deepReplaceKeyName(s,n,i),r!==u&&delete t[r]})}return t};var u=r.pluginPathType={ABSOLUTE:0,RELATIVE:1,CDN:2};r.getPluginPathType=function(e){if("string"==typeof e){e=e.split("?")[0];var t=e.indexOf("://");if(0<t)return u.ABSOLUTE;var n=e.indexOf("/");return e=r.extension(e),0>t&&0>n&&(!e||!isNaN(e))?u.CDN:u.RELATIVE}},r.getPluginName=function(e){return e.replace(/^(.*\/)?([^-]*)-?.*\.(swf|js)$/,"$2")},r.getPluginVersion=function(e){return e.replace(/[^-]*-?([^\.]*).*$/,"$1")},r.isYouTube=function(e,t){return"youtube"===t||/^(http|\/\/).*(youtube\.com|youtu\.be)\/.+/.test(e)},r.youTubeID=function(e){try{return/v[=\/]([^?&]*)|youtu\.be\/([^?]*)|^([\w-]*)$/i.exec(e).slice(1).join("").replace("?","")}catch(t){return""}},r.isRtmp=function(e,t){return 0===e.indexOf("rtmp")||"rtmp"===t},r.foreach=function(e,t){var n,i;for(n in e)"function"===r.typeOf(e.hasOwnProperty)?e.hasOwnProperty(n)&&(i=e[n],t(n,i)):(i=e[n],t(n,i))},r.isHTTPS=function(){return 0===window.location.href.indexOf("https")},r.repo=function(){var t="http://p.jwpcdn.com/"+e.version.split(/\W/).splice(0,2).join("/")+"/";try{r.isHTTPS()&&(t=t.replace("http://","https://ssl."))}catch(n){}return t},r.versionCheck=function(t){t=("0"+t).split(/\W/);var n=e.version.split(/\W/),r=parseFloat(t[0]),i=parseFloat(n[0]);return r>i||r===i&&parseFloat("0"+t[1])>parseFloat(n[1])?!1:!0},r.ajax=function(e,t,i,s){var o,u=!1;0<e.indexOf("#")&&(e=e.replace(/#.*$/,""));if(e&&0<=e.indexOf("://")&&e.split("/")[2]!==window.location.href.split("/")[2]&&r.exists(window.XDomainRequest))o=new window.XDomainRequest,o.onload=n(o,e,t,i,s),o.ontimeout=o.onprogress=function(){},o.timeout=5e3;else{if(!r.exists(window.XMLHttpRequest))return i&&i("",e,o),o;var a=o=new window.XMLHttpRequest,f=e;o.onreadystatechange=function(){if(4===a.readyState)switch(a.status){case 200:n(a,f,t,i,s)();break;case 404:i("File not found",f,a)}}}o.overrideMimeType&&o.overrideMimeType("text/xml");var l=e,c=o;o.onerror=function(){i("Error loading file",l,c)};try{o.open("GET",e,!0)}catch(h){u=!0}return setTimeout(function(){if(u)i&&i(e,e,o);else try{o.send()}catch(t){i&&i(e,e,o)}},0),o},r.parseXML=function(e){var t;try{if(window.DOMParser){if(t=(new window.DOMParser).parseFromString(e,"text/xml"),t.childNodes&&t.childNodes.length&&"parsererror"===t.childNodes[0].firstChild.nodeName)return}else t=new window.ActiveXObject("Microsoft.XMLDOM"),t.async="false",t.loadXML(e)}catch(n){return}return t},r.between=function(e,t,n){return Math.max(Math.min(e,n),t)},r.seconds=function(e){if(i.isNumber(e))return e;e=e.replace(",",".");var t=e.split(":"),n=0;return"s"===e.slice(-1)?n=parseFloat(e):"m"===e.slice(-1)?n=60*parseFloat(e):"h"===e.slice(-1)?n=3600*parseFloat(e):1<t.length?(n=parseFloat(t[t.length-1]),n+=60*parseFloat(t[t.length-2]),3===t.length&&(n+=3600*parseFloat(t[t.length-3]))):n=parseFloat(e),n},r.serialize=function(e){return null===e?null:"true"===e.toString().toLowerCase()?!0:"false"===e.toString().toLowerCase()?!1:isNaN(Number(e))||5<e.length||0===e.length?e:Number(e)},r.addClass=function(e,t){var n=i.isString(e.className)?e.className.split(" "):[],s=i.isArray(t)?t:t.split(" ");i.each(s,function(e){i.contains(n,e)||n.push(e)}),e.className=r.trim(n.join(" "))},r.removeClass=function(e,t){var n=i.isString(e.className)?e.className.split(" "):[],s=i.isArray(t)?t:t.split(" ");e.className=r.trim(i.difference(n,s).join(" "))},r.indexOf=i.indexOf,r.noop=function(){},r.canCast=function(){var t=e.cast;return!(!t||!i.isFunction(t.available)||!t.available())}}(jwplayer),function(e){function t(e){var t=document.createElement("style");return e&&t.appendChild(document.createTextNode(e)),t.type="text/css"
,document.getElementsByTagName("head")[0].appendChild(t),t}function n(e,t,n){return s.exists(t)?(n=n?" !important":"","string"==typeof t&&isNaN(t)?/png|gif|jpe?g/i.test(t)&&0>t.indexOf("url")?"url("+t+")":t+n:0===t||"z-index"===e||"opacity"===e?""+t+n:/color/i.test(e)?"#"+s.pad(t.toString(16).replace(/^0x/i,""),6)+n:Math.ceil(t)+"px"+n):""}function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],i,s;if(void 0!==r&&null!==r)for(i in t){s=i,s=s.split("-");for(var o=1;o<s.length;o++)s[o]=s[o].charAt(0).toUpperCase()+s[o].slice(1);s=s.join(""),r.style[s]!==t[i]&&(r.style[s]=t[i])}}}function i(e){var t=o[e].sheet,n,r,i;if(t){n=t.cssRules,r=l[e],i=e;var s=a[i];i+=" { ";for(var u in s)i+=u+": "+s[u]+"; ";i+="}";if(void 0!==r&&r<n.length&&n[r].selectorText===e){if(i===n[r].cssText)return;t.deleteRule(r)}else r=n.length,l[e]=r;try{t.insertRule(i,r)}catch(f){}}}var s=e.utils,o={},u,a={},f=null,l={};s.cssKeyframes=function(e,n){var r=o.keyframes;r||(r=t(),o.keyframes=r);var r=r.sheet,i="@keyframes "+e+" { "+n+" }";try{r.insertRule(i,r.cssRules.length)}catch(s){}i=i.replace(/(keyframes|transform)/g,"-webkit-$1");try{r.insertRule(i,r.cssRules.length)}catch(u){}};var c=s.css=function(e,r,s){a[e]||(a[e]={});var l=a[e];s=s||!1;var c=!1,p,d;for(p in r)d=n(p,r[p],s),""!==d?d!==l[p]&&(l[p]=d,c=!0):void 0!==l[p]&&(delete l[p],c=!0);if(c){if(!o[e]){r=u&&u.sheet&&u.sheet.cssRules&&u.sheet.cssRules.length||0;if(!u||5e4<r)u=t();o[e]=u}null!==f?f.styleSheets[e]=a[e]:i(e)}};c.style=function(e,t,i){if(void 0!==e&&null!==e){void 0===e.length&&(e=[e]);var s={},o;for(o in t)s[o]=n(o,t[o]);if(null!==f&&!i){t=(t=e.__cssRules)||{};for(var u in s)t[u]=s[u];e.__cssRules=t,0>f.elements.indexOf(e)&&f.elements.push(e)}else r(e,s)}},c.block=function(e){null===f&&(f={id:e,styleSheets:{},elements:[]})},c.unblock=function(e){if(f&&(!e||f.id===e)){for(var t in f.styleSheets)i(t);for(e=0;e<f.elements.length;e++)t=f.elements[e],r(t,t.__cssRules);f=null}},s.clearCss=function(e){for(var t in a)0<=t.indexOf(e)&&delete a[t];for(var n in o)0<=n.indexOf(e)&&i(n)},s.transform=function(e,t){var n={};t=t||"",n.transform=t,n["-webkit-transform"]=t,n["-ms-transform"]=t,n["-moz-transform"]=t,n["-o-transform"]=t,"string"==typeof e?c(e,n):c.style(e,n)},s.dragStyle=function(e,t){c(e,{"-webkit-user-select":t,"-moz-user-select":t,"-ms-user-select":t,"-webkit-user-drag":t,"user-select":t,"user-drag":t})},s.transitionStyle=function(e,t){navigator.userAgent.match(/5\.\d(\.\d)? safari/i)||c(e,{"-webkit-transition":t,"-moz-transition":t,"-o-transition":t,transition:t})},s.rotate=function(e,t){s.transform(e,"rotate("+t+"deg)")},s.rgbHex=function(e){return e=String(e).replace("#",""),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),"#"+e.substr(-6)},s.hexToRgba=function(e,t){var n="rgb",r=[parseInt(e.substr(1,2),16),parseInt(e.substr(3,2),16),parseInt(e.substr(5,2),16)];return void 0!==t&&100!==t&&(n+="a",r.push(t/100)),n+"("+r.join(",")+")"}}(jwplayer),function(e){var t=e.foreach,n={mp4:"video/mp4",ogg:"video/ogg",oga:"audio/ogg",vorbis:"audio/ogg",webm:"video/webm",aac:"audio/mp4",mp3:"audio/mpeg",hls:"application/vnd.apple.mpegurl"},r={mp4:n.mp4,f4v:n.mp4,m4v:n.mp4,mov:n.mp4,m4a:n.aac,f4a:n.aac,aac:n.aac,mp3:n.mp3,ogv:n.ogg,ogg:n.ogg,oga:n.vorbis,vorbis:n.vorbis,webm:n.webm,m3u8:n.hls,m3u:n.hls,hls:n.hls},i=e.extensionmap={};t(r,function(e,t){i[e]={html5:t}}),t({flv:"video",f4v:"video",mov:"video",m4a:"video",m4v:"video",mp4:"video",aac:"video",f4a:"video",mp3:"sound",smil:"rtmp",m3u8:"hls",hls:"hls"},function(e,t){i[e]||(i[e]={}),i[e].flash=t}),i.types=n,i.mimeType=function(e){var r;return t(n,function(t,n){!r&&n==e&&(r=t)}),r},i.extType=function(e){return i.mimeType(r[e])}}(jwplayer.utils),function(e){var t=e.loaderstatus={NEW:0,LOADING:1,ERROR:2,COMPLETE:3},n=document;e.scriptloader=function(r){function i(e){a=t.ERROR,u.sendEvent(o.ERROR,e)}function s(e){a=t.COMPLETE,u.sendEvent(o.COMPLETE,e)}var o=jwplayer.events,u=e.extend(this,new o.eventdispatcher),a=t.NEW;this.load=function(){if(a==t.NEW){var u=e.scriptloader.loaders[r];if(u&&(a=u.getStatus(),2>a)){u.addEventListener(o.ERROR,i),u.addEventListener(o.COMPLETE,s);return}var l=n.createElement("script");l.addEventListener?(l.onload=s,l.onerror=i):l.readyState&&(l.onreadystatechange=function(e){("loaded"==l.readyState||"complete"==l.readyState)&&s(e)}),n.getElementsByTagName("head")[0].appendChild(l),l.src=r,a=t.LOADING,e.scriptloader.loaders[r]=this}},this.getStatus=function(){return a}},e.scriptloader.loaders={}}(jwplayer.utils),function(e){e.trim=function(e){return e.replace(/^\s+|\s+$/g,"")},e.pad=function(e,t,n){for(n||(n="0");e.length<t;)e=n+e;return e},e.xmlAttribute=function(e,t){for(var n=0;n<e.attributes.length;n++)if(e.attributes[n].name&&e.attributes[n].name.toLowerCase()===t.toLowerCase())return e.attributes[n].value.toString();return""},e.extension=function(e){if(!e||"rtmp"===e.substr(0,4))return"";var t;t=-1<e.indexOf("(format=m3u8-")?"m3u8":!1;if(t)return t;e=e.substring(e.lastIndexOf("/")+1,e.length).split("?")[0].split("#")[0];if(-1<e.lastIndexOf("."))return e.substr(e.lastIndexOf(".")+1,e.length).toLowerCase()},e.stringToColor=function(e){return e=e.replace(/(#|0x)?([0-9A-F]{3,6})$/gi,"$2"),3===e.length&&(e=e.charAt(0)+e.charAt(0)+e.charAt(1)+e.charAt(1)+e.charAt(2)+e.charAt(2)),parseInt(e,16)}}(jwplayer.utils),function(e){var t="touchmove",n="touchstart";e.touch=function(r){function i(e){e.type===n?(a=!0,h=o(d.DRAG_START,e)):e.type===t?a&&(p||(s(d.DRAG_START,e,h),p=!0),s(d.DRAG,e)):(a&&(p?s(d.DRAG_END,e):(e.cancelBubble=!0,s(d.TAP,e))),a=p=!1,h=null)}function s(e,t,n){l[e]&&(t.preventManipulation&&t.preventManipulation(),t.preventDefault&&t.preventDefault(),t=n?n:o(e,t))&&l[e](t)}function o(e,t){var n=null;t.touches&&t.touches.length?n=t.touches[0]:t.changedTouches&&t.changedTouches.length&&(n=t.changedTouches[0]);if(!n)return null;var r=u.getBoundingClientRect(),n={type:e,target:u,x:n.pageX-window.pageXOffset-r.left,y:n.pageY,deltaX:0,deltaY:0};return e!==d.TAP&&h&&(n.deltaX=n.x-h.x,
n.deltaY=n.y-h.y),n}var u=r,a=!1,l={},h=null,p=!1,d=e.touchEvents;return document.addEventListener(t,i),document.addEventListener("touchend",function(e){a&&p&&s(d.DRAG_END,e),a=p=!1,h=null}),document.addEventListener("touchcancel",i),r.addEventListener(n,i),r.addEventListener("touchend",i),this.addEventListener=function(e,t){l[e]=t},this.removeEventListener=function(e){delete l[e]},this}}(jwplayer.utils),function(e){e.touchEvents={DRAG:"jwplayerDrag",DRAG_START:"jwplayerDragStart",DRAG_END:"jwplayerDragEnd",TAP:"jwplayerTap"}}(jwplayer.utils),function(e){e.key=function(t){var n,r,i;this.edition=function(){return i&&i.getTime()<(new Date).getTime()?"invalid":n},this.token=function(){return r},e.exists(t)||(t="");try{t=e.tea.decrypt(t,"36QXq4W@GSBV^teR");var s=t.split("/");(n=s[0])?/^(free|pro|premium|enterprise|ads)$/i.test(n)?(r=s[1],s[2]&&0<parseInt(s[2])&&(i=new Date,i.setTime(String(s[2])))):n="invalid":n="free"}catch(o){n="invalid"}}}(jwplayer.utils),function(e){var t=e.tea={};t.encrypt=function(e,i){if(0==e.length)return"";var s=t.strToLongs(r.encode(e));1>=s.length&&(s[1]=0);for(var o=t.strToLongs(r.encode(i).slice(0,16)),u=s.length,a=s[u-1],f=s[0],l,h=Math.floor(6+52/u),p=0;0<h--;){p+=2654435769,l=p>>>2&3;for(var v=0;v<u;v++)f=s[(v+1)%u],a=(a>>>5^f<<2)+(f>>>3^a<<4)^(p^f)+(o[v&3^l]^a),a=s[v]+=a}return s=t.longsToStr(s),n.encode(s)},t.decrypt=function(e,i){if(0==e.length)return"";for(var s=t.strToLongs(n.decode(e)),o=t.strToLongs(r.encode(i).slice(0,16)),u=s.length,a=s[u-1],f=s[0],l,h=2654435769*Math.floor(6+52/u);0!=h;){l=h>>>2&3;for(var p=u-1;0<=p;p--)a=s[0<p?p-1:u-1],a=(a>>>5^f<<2)+(f>>>3^a<<4)^(h^f)+(o[p&3^l]^a),f=s[p]-=a;h-=2654435769}return s=t.longsToStr(s),s=s.replace(/\0+$/,""),r.decode(s)},t.strToLongs=function(e){for(var t=Array(Math.ceil(e.length/4)),n=0;n<t.length;n++)t[n]=e.charCodeAt(4*n)+(e.charCodeAt(4*n+1)<<8)+(e.charCodeAt(4*n+2)<<16)+(e.charCodeAt(4*n+3)<<24);return t},t.longsToStr=function(e){for(var t=Array(e.length),n=0;n<e.length;n++)t[n]=String.fromCharCode(e[n]&255,e[n]>>>8&255,e[n]>>>16&255,e[n]>>>24&255);return t.join("")};var n={code:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e,t){var i,s,o,u,a=[],f="",l,c,h=n.code;c=("undefined"==typeof t?0:t)?r.encode(e):e,l=c.length%3;if(0<l)for(;3>l++;)f+="=",c+="\0";for(l=0;l<c.length;l+=3)i=c.charCodeAt(l),s=c.charCodeAt(l+1),o=c.charCodeAt(l+2),u=i<<16|s<<8|o,i=u>>18&63,s=u>>12&63,o=u>>6&63,u&=63,a[l/3]=h.charAt(i)+h.charAt(s)+h.charAt(o)+h.charAt(u);return a=a.join(""),a=a.slice(0,a.length-f.length)+f},decode:function(e,t){t="undefined"==typeof t?!1:t;var i,s,o,u,a,f=[],l,c=n.code;l=t?r.decode(e):e;for(var h=0;h<l.length;h+=4)i=c.indexOf(l.charAt(h)),s=c.indexOf(l.charAt(h+1)),u=c.indexOf(l.charAt(h+2)),a=c.indexOf(l.charAt(h+3)),o=i<<18|s<<12|u<<6|a,i=o>>>16&255,s=o>>>8&255,o&=255,f[h/4]=String.fromCharCode(i,s,o),64==a&&(f[h/4]=String.fromCharCode(i,s)),64==u&&(f[h/4]=String.fromCharCode(i));return u=f.join(""),t?r.decode(u):u}},r={encode:function(e){return e=e.replace(/[\u0080-\u07ff]/g,function(e){return e=e.charCodeAt(0),String.fromCharCode(192|e>>6,128|e&63)}),e=e.replace(/[\u0800-\uffff]/g,function(e){return e=e.charCodeAt(0),String.fromCharCode(224|e>>12,128|e>>6&63,128|e&63)})},decode:function(e){return e=e.replace(/[\u00e0-\u00ef][\u0080-\u00bf][\u0080-\u00bf]/g,function(e){return e=(e.charCodeAt(0)&15)<<12|(e.charCodeAt(1)&63)<<6|e.charCodeAt(2)&63,String.fromCharCode(e)}),e=e.replace(/[\u00c0-\u00df][\u0080-\u00bf]/g,function(e){return e=(e.charCodeAt(0)&31)<<6|e.charCodeAt(1)&63,String.fromCharCode(e)})}}}(jwplayer.utils),function(e){e.events={COMPLETE:"COMPLETE",ERROR:"ERROR",API_READY:"jwplayerAPIReady",JWPLAYER_READY:"jwplayerReady",JWPLAYER_FULLSCREEN:"jwplayerFullscreen",JWPLAYER_RESIZE:"jwplayerResize",JWPLAYER_ERROR:"jwplayerError",JWPLAYER_SETUP_ERROR:"jwplayerSetupError",JWPLAYER_MEDIA_BEFOREPLAY:"jwplayerMediaBeforePlay",JWPLAYER_MEDIA_BEFORECOMPLETE:"jwplayerMediaBeforeComplete",JWPLAYER_COMPONENT_SHOW:"jwplayerComponentShow",JWPLAYER_COMPONENT_HIDE:"jwplayerComponentHide",JWPLAYER_MEDIA_BUFFER:"jwplayerMediaBuffer",JWPLAYER_MEDIA_BUFFER_FULL:"jwplayerMediaBufferFull",JWPLAYER_MEDIA_ERROR:"jwplayerMediaError",JWPLAYER_MEDIA_LOADED:"jwplayerMediaLoaded",JWPLAYER_MEDIA_COMPLETE:"jwplayerMediaComplete",JWPLAYER_MEDIA_SEEK:"jwplayerMediaSeek",JWPLAYER_MEDIA_TIME:"jwplayerMediaTime",JWPLAYER_MEDIA_VOLUME:"jwplayerMediaVolume",JWPLAYER_MEDIA_META:"jwplayerMediaMeta",JWPLAYER_MEDIA_MUTE:"jwplayerMediaMute",JWPLAYER_AUDIO_TRACKS:"jwplayerAudioTracks",JWPLAYER_AUDIO_TRACK_CHANGED:"jwplayerAudioTrackChanged",JWPLAYER_MEDIA_LEVELS:"jwplayerMediaLevels",JWPLAYER_MEDIA_LEVEL_CHANGED:"jwplayerMediaLevelChanged",JWPLAYER_CAPTIONS_CHANGED:"jwplayerCaptionsChanged",JWPLAYER_CAPTIONS_LIST:"jwplayerCaptionsList",JWPLAYER_CAPTIONS_LOADED:"jwplayerCaptionsLoaded",JWPLAYER_PLAYER_STATE:"jwplayerPlayerState",state:{BUFFERING:"BUFFERING",IDLE:"IDLE",PAUSED:"PAUSED",PLAYING:"PLAYING"},JWPLAYER_PLAYLIST_LOADED:"jwplayerPlaylistLoaded",JWPLAYER_PLAYLIST_ITEM:"jwplayerPlaylistItem",JWPLAYER_PLAYLIST_COMPLETE:"jwplayerPlaylistComplete",JWPLAYER_DISPLAY_CLICK:"jwplayerViewClick",JWPLAYER_PROVIDER_CLICK:"jwplayerProviderClick",JWPLAYER_VIEW_TAB_FOCUS:"jwplayerViewTabFocus",JWPLAYER_CONTROLS:"jwplayerViewControls",JWPLAYER_USER_ACTION:"jwplayerUserAction",JWPLAYER_INSTREAM_CLICK:"jwplayerInstreamClicked",JWPLAYER_INSTREAM_DESTROYED:"jwplayerInstreamDestroyed",JWPLAYER_AD_TIME:"jwplayerAdTime",JWPLAYER_AD_ERROR:"jwplayerAdError",JWPLAYER_AD_CLICK:"jwplayerAdClicked",JWPLAYER_AD_COMPLETE:"jwplayerAdComplete",JWPLAYER_AD_IMPRESSION:"jwplayerAdImpression",JWPLAYER_AD_COMPANIONS:"jwplayerAdCompanions",JWPLAYER_AD_SKIPPED:"jwplayerAdSkipped",JWPLAYER_AD_PLAY:"jwplayerAdPlay",JWPLAYER_AD_PAUSE:"jwplayerAdPause",JWPLAYER_AD_META:"jwplayerAdMeta",JWPLAYER_CAST_AVAILABLE:"jwplayerCastAvailable",JWPLAYER_CAST_SESSION:"jwplayerCastSession",JWPLAYER_CAST_AD_CHANGED:"jwplayerCastAdChanged"}}(jwplayer
),function(e){var t=e.utils;e.events.eventdispatcher=function(n,r){function i(e,n,r){if(e)for(var i=0;i<e.length;i++){var s=e[i];if(s){null!==s.count&&0===--s.count&&delete e[i];try{s.listener(n)}catch(o){t.log('Error handling "'+r+'" event listener ['+i+"]: "+o.toString(),s.listener,n)}}}}var s,o;this.resetEventListeners=function(){s={},o=[]},this.resetEventListeners(),this.addEventListener=function(e,n,r){try{t.exists(s[e])||(s[e]=[]),"string"===t.typeOf(n)&&(n=(new Function("return "+n))()),s[e].push({listener:n,count:r||null})}catch(i){t.log("error",i)}return!1},this.removeEventListener=function(e,n){var r;if(s[e]){try{if(void 0===n){s[e]=[];return}for(r=0;r<s[e].length;r++)if(s[e][r].listener.toString()===n.toString()){s[e].splice(r,1);break}}catch(i){t.log("error",i)}return!1}},this.addGlobalListener=function(e,n){try{"string"===t.typeOf(e)&&(e=(new Function("return "+e))()),o.push({listener:e,count:n||null})}catch(r){t.log("error",r)}return!1},this.removeGlobalListener=function(e){if(e){try{for(var n=o.length;n--;)o[n].listener.toString()===e.toString()&&o.splice(n,1)}catch(r){t.log("error",r)}return!1}},this.sendEvent=function(u,a){t.exists(a)||(a={}),t.extend(a,{id:n,version:e.version,type:u}),r&&t.log(u,a),i(s[u],a,u),i(o,a,u)}}}(window.jwplayer),function(e){var t={},n={};e.plugins=function(){},e.plugins.loadPlugins=function(r,i){return n[r]=new e.plugins.pluginloader(new e.plugins.model(t),i),n[r]},e.plugins.registerPlugin=function(n,r,i,s){var o=e.utils.getPluginName(n);t[o]||(t[o]=new e.plugins.plugin(n)),t[o].registerPlugin(n,r,i,s)}}(jwplayer),function(e){e.plugins.model=function(t){this.addPlugin=function(n){var r=e.utils.getPluginName(n);return t[r]||(t[r]=new e.plugins.plugin(n)),t[r]},this.getPlugins=function(){return t}}}(jwplayer),function(e){var t=jwplayer.utils,n=jwplayer.events;e.pluginmodes={FLASH:0,JAVASCRIPT:1,HYBRID:2},e.plugin=function(r){function i(){switch(t.getPluginPathType(r)){case t.pluginPathType.ABSOLUTE:return r;case t.pluginPathType.RELATIVE:return t.getAbsolutePath(r,window.location.href)}}function s(){p=setTimeout(function(){u=t.loaderstatus.COMPLETE,d.sendEvent(n.COMPLETE)},1e3)}function o(){u=t.loaderstatus.ERROR,d.sendEvent(n.ERROR,{url:r})}var u=t.loaderstatus.NEW,a,l,h,p,d=new n.eventdispatcher;t.extend(this,d),this.load=function(){if(u===t.loaderstatus.NEW)if(0<r.lastIndexOf(".swf"))a=r,u=t.loaderstatus.COMPLETE,d.sendEvent(n.COMPLETE);else if(t.getPluginPathType(r)===t.pluginPathType.CDN)u=t.loaderstatus.COMPLETE,d.sendEvent(n.COMPLETE);else{u=t.loaderstatus.LOADING;var e=new t.scriptloader(i());e.addEventListener(n.COMPLETE,s),e.addEventListener(n.ERROR,o),e.load()}},this.registerPlugin=function(e,r,i,s){p&&(clearTimeout(p),p=void 0),h=r,i&&s?(a=s,l=i):"string"==typeof i?a=i:"function"==typeof i?l=i:!i&&!s&&(a=e),u=t.loaderstatus.COMPLETE,d.sendEvent(n.COMPLETE)},this.getStatus=function(){return u},this.getPluginName=function(){return t.getPluginName(r)},this.getFlashPath=function(){if(a)switch(t.getPluginPathType(a)){case t.pluginPathType.ABSOLUTE:return a;case t.pluginPathType.RELATIVE:return 0<r.lastIndexOf(".swf")?t.getAbsolutePath(a,window.location.href):t.getAbsolutePath(a,i())}return null},this.getJS=function(){return l},this.getTarget=function(){return h},this.getPluginmode=function(){if("undefined"!=typeof a&&"undefined"!=typeof l)return e.pluginmodes.HYBRID;if("undefined"!=typeof a)return e.pluginmodes.FLASH;if("undefined"!=typeof l)return e.pluginmodes.JAVASCRIPT},this.getNewInstance=function(e,t,n){return new l(e,t,n)},this.getURL=function(){return r}}}(jwplayer.plugins),function(e){var t=e.utils,n=e.events,r=e._,i=t.foreach;e.plugins.pluginloader=function(e,s){function o(){l||(l=!0,f=t.loaderstatus.COMPLETE,m.sendEvent(n.COMPLETE))}function u(){(!h||0===r.keys(h).length)&&o();if(!l){var i=e.getPlugins();v=r.after(p,o),t.foreach(h,function(e){e=t.getPluginName(e);var r=i[e];e=r.getJS();var s=r.getTarget(),r=r.getStatus();r===t.loaderstatus.LOADING||r===t.loaderstatus.NEW||(e&&!t.versionCheck(s)&&m.sendEvent(n.ERROR,{message:"Incompatible player version"}),v())})}}function a(e){m.sendEvent(n.ERROR,{message:"File not found"}),e.url&&t.log("File not found",e.url),v()}var f=t.loaderstatus.NEW,l=!1,h=s,p=r.size(h),v,m=new n.eventdispatcher;t.extend(this,m),this.setupPlugins=function(n,r,s){var o={length:0,plugins:{}},u=0,a={},f=e.getPlugins();return i(r.plugins,function(e,i){var l=t.getPluginName(e),h=f[l],p=h.getFlashPath(),v=h.getJS(),m=h.getURL();p&&(o.plugins[p]=t.extend({},i),o.plugins[p].pluginmode=h.getPluginmode(),o.length++);try{if(v&&r.plugins&&r.plugins[m]){var y=document.createElement("div");y.id=n.id+"_"+l,y.style.position="absolute",y.style.top=0,y.style.zIndex=u+10,a[l]=h.getNewInstance(n,t.extend({},r.plugins[m]),y),u++,n.onReady(s(a[l],y,!0)),n.onResize(s(a[l],y))}}catch(b){t.log("ERROR: Failed to load "+l+".")}}),n.plugins=a,o},this.load=function(){if(!t.exists(s)||"object"===t.typeOf(s)){f=t.loaderstatus.LOADING,i(s,function(r){t.exists(r)&&(r=e.addPlugin(r),r.addEventListener(n.COMPLETE,u),r.addEventListener(n.ERROR,a))});var r=e.getPlugins();i(r,function(e,t){t.load()})}u()},this.destroy=function(){m&&(m.resetEventListeners(),m=null)},this.pluginFailed=a,this.getStatus=function(){return f}}}(jwplayer),function(e){e.parsers={localName:function(e){return e?e.localName?e.localName:e.baseName?e.baseName:"":""},textContent:function(t){return t?t.textContent?e.utils.trim(t.textContent):t.text?e.utils.trim(t.text):"":""},getChildNode:function(e,t){return e.childNodes[t]},numChildren:function(e){return e.childNodes?e.childNodes.length:0}}}(jwplayer),function(e){var t=e.parsers;(t.jwparser=function(){}).parseEntry=function(n,r){for(var i=[],s=[],o=e.utils.xmlAttribute,u=0;u<n.childNodes.length;u++){var a=n.childNodes[u];if("jwplayer"==a.prefix){var l=t.localName(a);"source"==l?(delete r.sources,i.push({file:o(a,"file"),"default":o(a,"default"),label:o(a,"label"),type:o(a,"type")})):"track"==l?(delete r.tracks,s.push({file
:o(a,"file"),"default":o(a,"default"),kind:o(a,"kind"),label:o(a,"label")})):(r[l]=e.utils.serialize(t.textContent(a)),"file"==l&&r.sources&&delete r.sources)}r.file||(r.file=r.link)}if(i.length){r.sources=[];for(u=0;u<i.length;u++)0<i[u].file.length&&(i[u]["default"]="true"==i[u]["default"]?!0:!1,i[u].label.length||delete i[u].label,r.sources.push(i[u]))}if(s.length){r.tracks=[];for(u=0;u<s.length;u++)0<s[u].file.length&&(s[u]["default"]="true"==s[u]["default"]?!0:!1,s[u].kind=s[u].kind.length?s[u].kind:"captions",s[u].label.length||delete s[u].label,r.tracks.push(s[u]))}return r}}(jwplayer),function(e){var t=jwplayer.utils,n=t.xmlAttribute,r=e.localName,i=e.textContent,s=e.numChildren,o=e.mediaparser=function(){};o.parseGroup=function(e,u){var a,f,l=[];for(f=0;f<s(e);f++)if(a=e.childNodes[f],"media"==a.prefix&&r(a))switch(r(a).toLowerCase()){case"content":n(a,"duration")&&(u.duration=t.seconds(n(a,"duration"))),0<s(a)&&(u=o.parseGroup(a,u)),n(a,"url")&&(u.sources||(u.sources=[]),u.sources.push({file:n(a,"url"),type:n(a,"type"),width:n(a,"width"),label:n(a,"label")}));break;case"title":u.title=i(a);break;case"description":u.description=i(a);break;case"guid":u.mediaid=i(a);break;case"thumbnail":u.image||(u.image=n(a,"url"));break;case"group":o.parseGroup(a,u);break;case"subtitle":var p={};p.file=n(a,"url"),p.kind="captions";if(0<n(a,"lang").length){var v=p;a=n(a,"lang");var m={zh:"Chinese",nl:"Dutch",en:"English",fr:"French",de:"German",it:"Italian",ja:"Japanese",pt:"Portuguese",ru:"Russian",es:"Spanish"};a=m[a]?m[a]:a,v.label=a}l.push(p)}u.hasOwnProperty("tracks")||(u.tracks=[]);for(f=0;f<l.length;f++)u.tracks.push(l[f]);return u}}(jwplayer.parsers),function(e){function t(t){for(var i={},s=0;s<t.childNodes.length;s++){var u=t.childNodes[s],a=o(u);if(a)switch(a.toLowerCase()){case"enclosure":i.file=n.xmlAttribute(u,"url");break;case"title":i.title=r(u);break;case"guid":i.mediaid=r(u);break;case"pubdate":i.date=r(u);break;case"description":i.description=r(u);break;case"link":i.link=r(u);break;case"category":i.tags=i.tags?i.tags+r(u):r(u)}}return i=e.mediaparser.parseGroup(t,i),i=e.jwparser.parseEntry(t,i),new jwplayer.playlist.item(i)}var n=jwplayer.utils,r=e.textContent,i=e.getChildNode,s=e.numChildren,o=e.localName;e.rssparser={},e.rssparser.parse=function(e){for(var n=[],r=0;r<s(e);r++){var u=i(e,r);if("channel"==o(u).toLowerCase())for(var a=0;a<s(u);a++){var f=i(u,a);"item"==o(f).toLowerCase()&&n.push(t(f))}}return n}}(jwplayer.parsers),function(e){var t=e.utils,n=e._;e.playlist=function(t){var r=[];return t=n.isArray(t)?t:[t],n.each(t,function(t){r.push(new e.playlist.item(t))}),r},e.playlist.filterPlaylist=function(e,i){var s=[];return n.each(e,function(e){e=t.extend({},e),e.sources=r(e.sources,!1,i);if(e.sources.length){for(var n=0;n<e.sources.length;n++)e.sources[n].label=e.sources[n].label||n.toString();s.push(e)}}),s};var r=e.playlist.filterSources=function(r,i,s){var o,u=[],a=i?e.embed.flashCanPlay:e.embed.html5CanPlay;if(r)return n.each(r,function(e){if(!e||!e.file)e=void 0;else{var n=t.trim(""+e.file),r=e.type;r||(r=t.extension(n),r=t.extensionmap.extType(r)),e=t.extend({},e,{file:n,type:r})}e&&a(e.file,e.type,s)&&(o=o||e.type,e.type===o&&u.push(e))}),u}}(jwplayer),function(e){var t=e.item=function(n){var r=jwplayer.utils,i=r.extend({},t.defaults,n),s,o;i.tracks=n&&r.exists(n.tracks)?n.tracks:[],0===i.sources.length&&(i.sources=[new e.source(i)]);for(s=0;s<i.sources.length;s++)o=i.sources[s]["default"],i.sources[s]["default"]=o?"true"==o.toString():!1,i.sources[s]=new e.source(i.sources[s]);if(i.captions&&!r.exists(n.tracks)){for(n=0;n<i.captions.length;n++)i.tracks.push(i.captions[n]);delete i.captions}for(s=0;s<i.tracks.length;s++)i.tracks[s]=new e.track(i.tracks[s]);return i};t.defaults={description:void 0,image:void 0,mediaid:void 0,title:void 0,sources:[],tracks:[]}}(jwplayer.playlist),function(e){var t=e.utils,n=e.events,r=e.parsers;e.playlist.loader=function(){function i(t){try{var i=t.responseXML.childNodes;t="";for(var s=0;s<i.length&&(t=i[s],8===t.nodeType);s++);"xml"===r.localName(t)&&(t=t.nextSibling);if("rss"!==r.localName(t))o("Not a valid RSS feed");else{var a=new e.playlist(r.rssparser.parse(t));u.sendEvent(n.JWPLAYER_PLAYLIST_LOADED,{playlist:a})}}catch(l){o()}}function s(e){o(e.match(/invalid/i)?"Not a valid RSS feed":"")}function o(e){u.sendEvent(n.JWPLAYER_ERROR,{message:e?e:"Error loading file"})}var u=new n.eventdispatcher;t.extend(this,u),this.load=function(e){t.ajax(e,i,s)}}}(jwplayer),function(e){var t=jwplayer.utils,n={file:void 0,label:void 0,type:void 0,"default":void 0};e.source=function(e){var r=t.extend({},n);return t.foreach(n,function(n){t.exists(e[n])&&(r[n]=e[n],delete e[n])}),r.type&&0<r.type.indexOf("/")&&(r.type=t.extensionmap.mimeType(r.type)),"m3u8"==r.type&&(r.type="hls"),"smil"==r.type&&(r.type="rtmp"),r}}(jwplayer.playlist),function(e){var t=jwplayer.utils,n={file:void 0,label:void 0,kind:"captions","default":!1};e.track=function(e){var r=t.extend({},n);return e||(e={}),t.foreach(n,function(n){t.exists(e[n])&&(r[n]=e[n],delete e[n])}),r}}(jwplayer.playlist),function(e){function t(e,t,r){var i=e.style;i.backgroundColor="#000",i.color="#FFF",i.width=n.styleDimension(r.width),i.height=n.styleDimension(r.height),i.display="table",i.opacity=1,r=document.createElement("p"),i=r.style,i.verticalAlign="middle",i.textAlign="center",i.display="table-cell",i.font="15px/20px Arial, Helvetica, sans-serif",r.innerHTML=t.replace(":",":<br>"),e.innerHTML="",e.appendChild(r)}var n=e.utils,r=e.events,i=e._,s=e.embed=function(o){function u(){if(!N){var t=m.playlist;if(i.isArray(t)){if(0===t.length){h();return}if(1===t.length&&(!t[0].sources||0===t[0].sources.length||!t[0].sources[0].file)){h();return}}if(!T)if(i.isString(t))x=new e.playlist.loader,x.addEventListener(r.JWPLAYER_PLAYLIST_LOADED,function(e){m.playlist=e.playlist,T=!1,u()}),x.addEventListener(r.JWPLAYER_ERROR,function(e){T=!1,h(e)}),T=!0,x.load(m.playlist);else if(S.getStatus()===n.loaderstatus
.COMPLETE){for(t=0;t<m.modes.length;t++){var l=m.modes[t],c=l.type;if(c&&s[c]){var v=n.extend({},m),l=new s[c](O,l,v,S,o);if(l.supportsConfig())return l.addEventListener(r.ERROR,a),l.embed(),n.css("object.jwswf, .jwplayer:focus",{outline:"none"}),n.css(".jw-tab-focus:focus",{outline:"solid 2px #0B7EF4"}),o}}m.fallback?(t="No suitable players found and fallback enabled",p(t,!0),n.log(t),new s.download(O,m,h)):(t="No suitable players found and fallback disabled",p(t,!1),n.log(t),O.parentNode.replaceChild(L,O))}}}function a(e){v(w+e.message)}function l(e){o.dispatchEvent(r.JWPLAYER_ERROR,{message:"Could not load plugin: "+e.message})}function h(e){e&&e.message?v("Error loading playlist: "+e.message):v(w+"No playable sources found")}function p(e,t){clearTimeout(C),C=setTimeout(function(){o.dispatchEvent(r.JWPLAYER_SETUP_ERROR,{message:e,fallback:t})},0)}function v(e){N||(m.fallback?(N=!0,t(O,e,m),p(e,!0)):p(e,!1))}var m=new s.config(o.config),g=m.width,y=m.height,w="Error loading player: ",E=document.getElementById(o.id),S=e.plugins.loadPlugins(o.id,m.plugins),x,T=!1,N=!1,C=-1,L=null;m.fallbackDiv&&(L=m.fallbackDiv,delete m.fallbackDiv),m.id=o.id,m.aspectratio?o.config.aspectratio=m.aspectratio:delete o.config.aspectratio;var A=o;n.foreach(m.events,function(e,t){var n=A[e];"function"==typeof n&&n.call(A,t)});var O=document.createElement("div");return O.id=E.id,O.style.width=0<g.toString().indexOf("%")?g:g+"px",O.style.height=0<y.toString().indexOf("%")?y:y+"px",E.parentNode.replaceChild(O,E),this.embed=function(){N||(S.addEventListener(r.COMPLETE,u),S.addEventListener(r.ERROR,l),S.load())},this.destroy=function(){S&&(S.destroy(),S=null),x&&(x.resetEventListeners(),x=null)},this.errorScreen=v,this};e.embed.errorScreen=t}(jwplayer),function(e){function t(e){if(e.playlist)for(var t=0;t<e.playlist.length;t++)e.playlist[t]=new i(e.playlist[t]);else{var s={};r.foreach(i.defaults,function(t){n(e,s,t)}),s.sources||(e.levels?(s.sources=e.levels,delete e.levels):(t={},n(e,t,"file"),n(e,t,"type"),s.sources=t.file?[t]:[])),e.playlist=[new i(s)]}}function n(e,t,n){r.exists(e[n])&&(t[n]=e[n],delete e[n])}var r=e.utils,i=e.playlist.item;(e.embed.config=function(n){var i={fallback:!0,height:270,primary:"html5",width:480,base:n.base?n.base:r.getScriptPath("jwplayer.js"),aspectratio:""};n=r.extend({},i,e.defaults,n);var i={type:"html5",src:n.base+"jwplayer.html5.js"},s={type:"flash",src:n.base+"jwplayer.flash.swf"};n.modes="flash"===n.primary?[s,i]:[i,s],n.listbar&&(n.playlistsize=n.listbar.size,n.playlistposition=n.listbar.position,n.playlistlayout=n.listbar.layout),n.flashplayer&&(s.src=n.flashplayer),n.html5player&&(i.src=n.html5player),t(n),s=n.aspectratio;if("string"!=typeof s||!r.exists(s))i=0;else{var o=s.indexOf(":");-1===o?i=0:(i=parseFloat(s.substr(0,o)),s=parseFloat(s.substr(o+1)),i=0>=i||0>=s?0:100*(s/i)+"%")}return-1===n.width.toString().indexOf("%")?delete n.aspectratio:i?n.aspectratio=i:delete n.aspectratio,n}).addConfig=function(e,n){return t(n),r.extend(e,n)}}(jwplayer),function(e){var t=e.utils,n=e.utils.css;e.embed.download=function(e,r,i){function s(e,t,n){return e=document.createElement(e),t&&(e.className="jwdownload"+t),n&&n.appendChild(e),e}var o=t.extend({},r),u,a=o.width?o.width:480,f=o.height?o.height:320,l;r=r.logo?r.logo:{prefix:t.repo(),file:"logo.png",margin:10};var h,p,d,v,m,g;p=o.playlist,o=["mp4","aac","mp3"];if(p&&p.length){d=p[0],v=d.sources;for(p=0;p<v.length;p++)m=v[p],m.file&&(g=m.type||t.extensionmap.extType(t.extension(m.file)),0<=t.indexOf(o,g)?(u=m.file,l=d.image):t.isYouTube(m.file,g)&&(h=m.file));u?(i=u,e&&(u=s("a","display",e),s("div","icon",u),s("div","logo",u),i&&u.setAttribute("href",t.getAbsolutePath(i))),i="#"+e.id+" .jwdownload",e.style.width="",e.style.height="",n(i+"display",{width:t.styleDimension(Math.max(320,a)),height:t.styleDimension(Math.max(180,f)),background:"black center no-repeat "+(l?"url("+l+")":""),backgroundSize:"contain",position:"relative",border:"none",display:"block"}),n(i+"display div",{position:"absolute",width:"100%",height:"100%"}),n(i+"logo",{top:r.margin+"px",right:r.margin+"px",background:"top right no-repeat url("+r.prefix+r.file+")"}),n(i+"icon",{background:"center no-repeat url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAgNJREFUeNrs28lqwkAYB/CZqNVDDj2r6FN41QeIy8Fe+gj6BL275Q08u9FbT8ZdwVfotSBYEPUkxFOoks4EKiJdaDuTjMn3wWBO0V/+sySR8SNSqVRKIR8qaXHkzlqS9jCfzzWcTCYp9hF5o+59sVjsiRzcegSckFzcjT+ruN80TeSlAjCAAXzdJSGPFXRpAAMYwACGZQkSdhG4WCzehMNhqV6vG6vVSrirKVEw66YoSqDb7cqlUilE8JjHd/y1MQefVzqdDmiaJpfLZWHgXMHn8F6vJ1cqlVAkEsGuAn83J4gAd2RZymQygX6/L1erVQt+9ZPWb+CDwcCC2zXGJaewl/DhcHhK3DVj+KfKZrMWvFarcYNLomAv4aPRSFZVlTlcSPA5fDweW/BoNIqFnKV53JvncjkLns/n/cLdS+92O7RYLLgsKfv9/t8XlDn4eDyiw+HA9Jyz2eyt0+kY2+3WFC5hluej0Ha7zQQq9PPwdDq1Et1sNsx/nFBgCqWJ8oAK1aUptNVqcYWewE4nahfU0YQnk4ntUEfGMIU2m01HoLaCKbTRaDgKtaVLk9tBYaBcE/6Artdr4RZ5TB6/dC+9iIe/WgAMYADDpAUJAxjAAAYwgGFZgoS/AtNNTF7Z2bL0BYPBV3Jw5xFwwWcYxgtBP5OkE8i9G7aWGOOCruvauwADALMLMEbKf4SdAAAAAElFTkSuQmCC)"})):h?(r=h,e=s("iframe","",e),e.src="http://www.youtube.com/embed/"+t.youTubeID(r),e.width=a,e.height=f,e.style.border="none"):i()}}}(jwplayer),function(e){var t=e.utils,n=e.events,r={};(e.embed.flash=function(s,o,u,a,l){function h(e,t,n){var r=document.createElement("param");r.setAttribute("name",t),r.setAttribute("value",n),e.appendChild(r)}function p(e,t,n){return function(){try{n&&document.getElementById(l.id+"_wrapper").appendChild(t);var r=document.getElementById(l.id).getPluginConfig("display");"function"==typeof e.resize&&e.resize(r.width,r.height),t.style.left=r.x,t.style.top=r.h}catch(i){}}}function v(e){if(!e)return{};var n={},r=[];return t.foreach(e,function(e,i){var s=t.getPluginName(e);r.push(e),t.foreach(i,function(e,t){n[s+"."+e]=t})}),n.plugins=r.join(","),n}var m=new e.events.eventdispatcher,g=t.flashVersion();t.extend(this,m),this.embed=function(){u.id=l.id;if(10>g)return m.sendEvent(n.ERROR,{message:"Flash version must be 10.0 or greater"
}),!1;var e,i,f=l.config.listbar,y=t.extend({},u);if(s.id+"_wrapper"===s.parentNode.id)e=document.getElementById(s.id+"_wrapper");else{e=document.createElement("div"),i=document.createElement("div"),i.style.display="none",i.id=s.id+"_aspect",e.id=s.id+"_wrapper",e.style.position="relative",e.style.display="block",e.style.width=t.styleDimension(y.width),e.style.height=t.styleDimension(y.height);if(l.config.aspectratio){var w=parseFloat(l.config.aspectratio);i.style.display="block",i.style.marginTop=l.config.aspectratio,e.style.height="auto",e.style.display="inline-block",f&&("bottom"===f.position?i.style.paddingBottom=f.size+"px":"right"===f.position&&(i.style.marginBottom=-1*f.size*(w/100)+"px"))}s.parentNode.replaceChild(e,s),e.appendChild(s),e.appendChild(i)}e=a.setupPlugins(l,y,p),0<e.length?t.extend(y,v(e.plugins)):delete y.plugins,"undefined"!=typeof y["dock.position"]&&"false"===y["dock.position"].toString().toLowerCase()&&(y.dock=y["dock.position"],delete y["dock.position"]),e=y.wmode||(y.height&&40>=y.height?"transparent":"opaque"),i="height width modes events primary base fallback volume".split(" ");for(f=0;f<i.length;f++)delete y[i[f]];i=t.getCookies(),t.foreach(i,function(e,t){"undefined"==typeof y[e]&&(y[e]=t)}),i=window.location.href.split("/"),i.splice(i.length-1,1),i=i.join("/"),y.base=i+"/",r[s.id]=y,t.isMSIE()?(i='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" " width="100%" height="100%"id="'+s.id+'" name="'+s.id+'" tabindex=0"">',i+='<param name="movie" value="'+o.src+'">',i+='<param name="allowfullscreen" value="true"><param name="allowscriptaccess" value="always">',i+='<param name="seamlesstabbing" value="true">',i+='<param name="wmode" value="'+e+'">',i+='<param name="bgcolor" value="#000000">',i+="</object>",s.outerHTML=i,e=document.getElementById(s.id)):(i=document.createElement("object"),i.setAttribute("type","application/x-shockwave-flash"),i.setAttribute("data",o.src),i.setAttribute("width","100%"),i.setAttribute("height","100%"),i.setAttribute("bgcolor","#000000"),i.setAttribute("id",s.id),i.setAttribute("name",s.id),i.className="jwswf",h(i,"allowfullscreen","true"),h(i,"allowscriptaccess","always"),h(i,"seamlesstabbing","true"),h(i,"wmode",e),s.parentNode.replaceChild(i,s),e=i),l.config.aspectratio&&(e.style.position="absolute"),l.container=e,l.setPlayer(e,"flash")},this.supportsConfig=function(){if(g){if(!u)return!0;if("string"===t.typeOf(u.playlist))return!0;try{var e=u.playlist[0].sources;if("undefined"==typeof e)return!0;for(var n=0;n<e.length;n++)if(e[n].file&&i(e[n].file,e[n].type))return!0}catch(r){}}return!1}}).getVars=function(e){return r[e]};var i=e.embed.flashCanPlay=function(e,n){if(t.isYouTube(e,n)||t.isRtmp(e,n)||"hls"===n)return!0;var r=t.extensionmap[n?n:t.extension(e)];return r?!!r.flash:!1}}(jwplayer),function(e){var t=e.utils,n=t.extensionmap,r=e.events;e.embed.html5=function(n,i,s,o,u){function a(e,t,r){return function(){try{var i=document.querySelector("#"+n.id+" .jwmain");r&&i.appendChild(t),"function"==typeof e.resize&&(e.resize(i.clientWidth,i.clientHeight),setTimeout(function(){e.resize(i.clientWidth,i.clientHeight)},400)),t.left=i.style.left,t.top=i.style.top}catch(s){}}}function l(e){h.sendEvent(e.type,{message:"HTML5 player not found"})}var h=this,p=new r.eventdispatcher;t.extend(h,p),h.embed=function(){if(e.html5){o.setupPlugins(u,s,a),n.innerHTML="";var p=e.utils.extend({},s);delete p.volume,p=new e.html5.player(p),u.container=document.getElementById(u.id),u.setPlayer(p,"html5")}else p=new t.scriptloader(i.src),p.addEventListener(r.ERROR,l),p.addEventListener(r.COMPLETE,h.embed),p.load()},h.supportsConfig=function(){if(e.vid.canPlayType)try{if("string"===t.typeOf(s.playlist))return!0;for(var n=s.playlist[0].sources,r=0;r<n.length;r++)if(e.embed.html5CanPlay(n[r].file,n[r].type,s.androidhls))return!0}catch(i){}return!1}},e.embed.html5CanPlay=function(r,i,s){if(null!==navigator.userAgent.match(/BlackBerry/i)||t.isIE(9))return!1;if(t.isYouTube(r,i))return!0;var o=t.extension(r);i=i||n.extType(o);if("hls"===i)if(s){s=t.isAndroidNative;if(s(2)||s(3)||s("4.0"))return!1;if(t.isAndroid())return!0}else if(t.isAndroid())return!1;if(t.isRtmp(r,i))return!1;r=n[i]||n[o];if(!r||r.flash&&!r.html5)return!1;var u;e:if(r=r.html5){try{u=!!e.vid.canPlayType(r);break e}catch(a){}u=!1}else u=!0;return u}}(jwplayer),function(e){var t=e.embed,n=e.embed.html5CanPlay,r=e.utils,i=e._,s=/\.(js|swf)$/;e.cast=e.cast||{},e.embed=r.extend(function(n){function i(){E="Adobe SiteCatalyst Error: Could not find Media Module"}var o=r.repo(),u=r.extend({},e.defaults),a=r.extend({},u,n.config),l=n.config,h=a.plugins,p=a.analytics,v=o+"jwpsrv.js",m=o+"sharing.js",g=o+"related.js",y=o+"gapro.js",u=e.key?e.key:u.key,w=(new e.utils.key(u)).edition(),E,h=h?h:{};"ads"==w&&a.advertising&&(s.test(a.advertising.client)?h[a.advertising.client]=a.advertising:h[o+a.advertising.client+".js"]=a.advertising),delete l.advertising,l.key=u,a.analytics&&s.test(a.analytics.client)&&(v=a.analytics.client),delete l.analytics,p&&"ads"!==w&&"enterprise"!==w&&delete p.enabled;if("free"==w||!p||!1!==p.enabled)h[v]=p?p:{};delete h.sharing,delete h.related;switch(w){case"ads":case"enterprise":if(l.sitecatalyst)try{window.s&&window.s.hasOwnProperty("Media")?new e.embed.sitecatalyst(n):i()}catch(S){i()};case"premium":a.related&&(s.test(a.related.client)&&(g=a.related.client),h[g]=a.related),a.ga&&(s.test(a.ga.client)&&(y=a.ga.client),h[y]=a.ga);case"pro":a.sharing&&(s.test(a.sharing.client)&&(m=a.sharing.client),h[m]=a.sharing),a.skin&&(l.skin=a.skin.replace(/^(beelden|bekle|five|glow|modieus|roundster|stormtrooper|vapor)$/i,r.repo()+"skins/$1.xml"))}return l.plugins=h,n.config=l,n=new t(n),E&&n.errorScreen(E),n},e.embed),e.embed.html5CanPlay=function(t,r){var s,o={file:t,type:r};return s=e.html5&&e.html5.chooseProvider?e.html5.chooseProvider(o)!==e.html5.VideoProvider:i.any(e.unregisteredProviders,function(e){return e.supports(o)}),s?!0:n.apply(this,arguments)}}(jwplayer),function(e){
var t=jwplayer.utils;e.sitecatalyst=function(e){function n(e){a.debug&&t.log(e)}function r(e){return e=e.split("/"),e=e[e.length-1],e=e.split("?"),e[0]}function i(){if(!d){d=!0;var e=u.getPosition();n("stop: "+l+" : "+e),s.Media.stop(l,e)}}function o(){v||(i(),v=!0,n("close: "+l),s.Media.close(l),m=!0,p=0)}var u=e,a=t.extend({},u.config.sitecatalyst),f={onPlay:function(){if(!m){var e=u.getPosition();d=!1,n("play: "+l+" : "+e),s.Media.play(l,e)}},onPause:i,onBuffer:i,onIdle:o,onPlaylistItem:function(e){try{m=!0,o(),p=0;var n;if(a.mediaName)n=a.mediaName;else{var i=u.getPlaylistItem(e.index);n=i.title?i.title:i.file?r(i.file):i.sources&&i.sources.length?r(i.sources[0].file):""}l=n,h=a.playerName?a.playerName:u.id}catch(s){t.log(s)}},onTime:function(){if(m){var e=u.getDuration();if(-1==e)return;v=d=m=!1,n("open: "+l+" : "+e+" : "+h),s.Media.open(l,e,h),n("play: "+l+" : 0"),s.Media.play(l,0)}e=u.getPosition();if(3<=Math.abs(e-p)){var t=p;n("seek: "+t+" to "+e),n("stop: "+l+" : "+t),s.Media.stop(l,t),n("play: "+l+" : "+e),s.Media.play(l,e)}p=e},onComplete:o},l,h,p,d=!0,v=!0,m;t.foreach(f,function(e){u[e](f[e])})}}(jwplayer.embed),function(e){function t(e,t){e[t]&&(e[t]=n.getAbsolutePath(e[t]))}var n=e.utils,r=e._,i=window.location.href;e.cast.setupCastConfig=function(e,r){var s=n.extend({},e.config);s.cast=n.extend({pageUrl:i},r);for(var o="base autostart controls fallback fullscreen width height mobilecontrols modes playlistlayout playlistposition playlistsize primary stretching sharing related ga skin logo listbar".split(" "),u=o.length;u--;)delete s[o[u]];o=s.plugins,delete s.plugins;for(var a in o)if(o.hasOwnProperty(a)){var f=o[a];if(f.client&&(/[\.\/]/.test(f.client)&&t(f,"client"),-1<f.client.indexOf("vast"))){u=s,f=n.extend({},f),f.client="vast",delete f.companiondiv;if(f.schedule){var l=void 0;for(l in f.schedule)f.schedule.hasOwnProperty(l)&&t(f.schedule[l].ad||f.schedule[l],"tag")}t(f,"tag"),u.advertising=f}}return e.position&&(s.position=e.position),0<e.item&&(s.item=e.item),s.captionLabel=n.getCookies().captionLabel,s},e.cast.setupFlashCastConfig=function(e){var t=e.config;t.playlist=e.getPlaylist();var i;return(i=r.find(t.plugins,function(e,t){return 0<t.indexOf("vast.js")}))?(i.client="vast",i={advertising:i}):i={},t=r.pick(t,"id captionLabel cast key playlist repeat".split(" ")),t.cast.pageUrl=window.location.href,n.extend(t,{captionLabel:n.getCookies().captionLabel,volume:e.getVolume(),mute:e.getMute(),id:e.id,position:e.getPosition(),item:e.getPlaylistIndex()},i),t}}(window.jwplayer),function(e,t){function n(e,t){e[t]&&(e[t]=i.getAbsolutePath(e[t]))}var r=t.cast,i=t.utils,s=t.events,o=s.state,u={};r.NS="urn:x-cast:com.longtailvideo.jwplayer",r.debug=!1,r.availability=null,r.available=function(t){t=t||r.availability;var n=e.chrome,i="available";return n.cast&&n.cast.ReceiverAvailability&&(i=n.cast.ReceiverAvailability.AVAILABLE),t===i},r.controller=function(a,l){function m(e,t){r.log("send command",e,t);var n={command:e};void 0!==t&&(n.args=t),F.sendMessage(r.NS,n,j,function(e){r.log("error message",e),"Invalid namespace"===e.description&&T()})}function g(e){e=!!r.available(e.availability),I.available!==e&&(I.available=e,S(s.JWPLAYER_CAST_AVAILABLE))}function y(e){r.log("existing session",e),!F&&!V&&(V=e.session,V.addMessageListener(r.NS,w))}function w(e,n){var i=JSON.parse(n);if(!i)throw"Message not proper JSON";if(i.reconcile){V.removeMessageListener(r.NS,w);var o=i.diff,u=V;if(!o.id||!i.appid||!i.pageUrl)o.id=t().id,i.appid=U.appid,i.pageUrl=R,V=F=null;o.id===a.id&&i.appid===U.appid&&i.pageUrl===R&&(F||(a.jwInstreamState()&&a.jwInstreamDestroy(!0),C(u),l.sendEvent(s.JWPLAYER_PLAYER_STATE,{oldstate:o.oldstate,newstate:o.newstate})),_(i)),V=null}}function E(e){I.active=!!e,e=I;var t;t=F&&F.receiver?F.receiver.friendlyName:"",e.deviceName=t,S(s.JWPLAYER_CAST_SESSION,{})}function S(e){var t=i.extend({},I);l.sendEvent(e,t)}function x(t){var n=e.chrome;t.code!==n.cast.ErrorCode.CANCEL&&(r.log("Cast Session Error:",t,F),t.code===n.cast.ErrorCode.SESSION_ERROR&&T())}function T(){F?(O(),F.stop(A,N)):A()}function N(e){r.error("Cast Session Stop error:",e,F),A()}function C(n){r.log("Session started:",n),F=n,F.addMessageListener(r.NS,M),F.addUpdateListener(L),a.jwPause(!0),a.jwSetFullscreen(!1),X=l.getVideo(),p=l.volume,v=l.mute,z=new r.provider(m),z.init(),l.setVideoProvider(z),a.jwPlay=function(e){!1===e?z.pause():z.play()},a.jwPause=function(e){a.jwPlay(!!e)},a.jwLoad=function(e){"number"===i.typeOf(e)&&l.setItem(e),z.load(e)},a.jwPlaylistItem=function(e){"number"===i.typeOf(e)&&l.setItem(e),z.playlistItem(e)},a.jwPlaylistNext=function(){a.jwPlaylistItem(l.item+1)},a.jwPlaylistPrev=function(){a.jwPlaylistItem(l.item-1)},a.jwSetVolume=function(e){i.exists(e)&&(e=Math.min(Math.max(0,e),100)|0,H(e)&&(e=Math.max(0,Math.min(e/100,1)),F.setReceiverVolumeLevel(e,P,function(e){r.error("set volume error",e),P()})))},a.jwSetMute=function(e){i.exists(e)||(e=!q.mute),B(e)&&F.setReceiverMuted(!!e,P,function(e){r.error("set muted error",e),P()})},a.jwGetVolume=function(){return q.volume|0},a.jwGetMute=function(){return!!q.mute},a.jwIsBeforePlay=function(){return!1};var u=a.jwSetCurrentCaptions;a.jwSetCurrentCaptions=function(e){u(e),z.sendCommand("caption",e)},a.jwSkipAd=function(e){W&&(W.skipAd(e),e=W.getAdModel(),e.complete=!0,l.sendEvent(s.JWPLAYER_CAST_AD_CHANGED,e))},a.jwClickAd=function(n){if(W&&300<W.timeSinceClick()&&(W.clickAd(n),l.state!==o.PAUSED)){var r={tag:n.tag};n.sequence&&(r.sequence=n.sequence),n.podcount&&(r.podcount=n.podcount),t(a.id).dispatchEvent(s.JWPLAYER_AD_CLICK,r),e.open(n.clickthrough)}},a.jwPlayAd=a.jwPauseAd=a.jwSetControls=a.jwForceState=a.jwReleaseState=a.jwSetFullscreen=a.jwDetachMedia=a.jwAttachMedia=j;var g=t(a.id).plugins;g.vast&&g.vast.jwPauseAd!==j&&($={jwPlayAd:g.vast.jwPlayAd,jwPauseAd:g.vast.jwPauseAd},g.vast.jwPlayAd=g.vast.jwPauseAd=j),P(),E(!0),n!==V&&z.setup(D(),l)}function L(e){r.log("Cast Session status",e),e?P():(z.sendEvent(s.JWPLAYER_PLAYER_STATE
,{oldstate:l.state,newstate:o.BUFFERING}),A())}function A(){r.log("_sessionStopped"),F&&(O(),F=null);if(X){delete a.jwSkipAd,delete a.jwClickAd,a.initializeAPI();var e=t(a.id).plugins;e.vast&&i.extend(e.vast,$),l.volume=p,l.mute=v,l.setVideoProvider(X),l.duration=0,z&&(z.destroy(),z=null),W&&(W.destroy(),W=null),l.state!==o.IDLE?i.isIPad()||i.isIPod()?(a.jwStop(!0),X.sendEvent(s.JWPLAYER_PLAYER_STATE,{oldstate:o.BUFFERING,newstate:o.IDLE})):(l.state=o.IDLE,a.jwPlay(!0),a.jwSeek(l.position)):X.sendEvent(s.JWPLAYER_PLAYER_STATE,{oldstate:o.BUFFERING,newstate:o.IDLE}),X=null}E(!1)}function O(){F.removeUpdateListener(L),F.removeMessageListener(r.NS,M)}function M(e,t){var n=JSON.parse(t);if(!n)throw"Message not proper JSON";_(n)}function _(e){if("state"===e.type)W&&(e.diff.newstate||e.diff.position)&&(W.destroy(),W=null,l.setVideoProvider(z),l.sendEvent(s.JWPLAYER_CAST_AD_CHANGED,{done:!0})),z.updateModel(e.diff,e.type),e=e.diff,void 0!==e.item&&l.item!==e.item&&(l.item=e.item,l.sendEvent(s.JWPLAYER_PLAYLIST_ITEM,{index:l.item}));else if("ad"===e.type){null===W&&(W=new r.adprovider(r.NS,F),W.init(),l.setVideoProvider(W)),W.updateModel(e.diff,e.type);var t=W.getAdModel();e.diff.clickthrough&&(t.onClick=a.jwClickAd),e.diff.skipoffset&&(t.onSkipAd=a.jwSkipAd),l.sendEvent(s.JWPLAYER_CAST_AD_CHANGED,t),e.diff.complete&&W.resetAdModel()}else"connection"===e.type?!0===e.closed&&T():r.error("received unhandled message",e.type,e)}function D(){var e=i.extend({},l.config);e.cast=i.extend({pageUrl:R},U);for(var t="base autostart controls fallback fullscreen width height mobilecontrols modes playlistlayout playlistposition playlistsize primary stretching sharing related ga skin logo listbar".split(" "),r=t.length;r--;)delete e[t[r]];t=e.plugins,delete e.plugins;for(var s in t)if(t.hasOwnProperty(s)){var o=t[s];if(o.client&&(/[\.\/]/.test(o.client)&&n(o,"client"),-1<o.client.indexOf("vast"))){r=e,o=i.extend({},o),o.client="vast",delete o.companiondiv;if(o.schedule){var u=void 0;for(u in o.schedule)o.schedule.hasOwnProperty(u)&&n(o.schedule[u].ad||o.schedule[u],"tag")}n(o,"tag"),r.advertising=o}}return l.position&&(e.position=l.position),0<l.item&&(e.item=l.item),e.captionLabel=i.getCookies().captionLabel,e}function P(){if(F&&F.receiver){var e=F.receiver.volume;if(e){var t=100*e.level|0;B(!!e.muted),H(t)}}}function H(e){var t=q.volume!==e;return t&&(q.volume=e,z.sendEvent(s.JWPLAYER_MEDIA_VOLUME,{volume:e})),t}function B(e){var t=q.mute!==e;return t&&(q.mute=e,z.sendEvent(s.JWPLAYER_MEDIA_MUTE,{mute:e})),t}function j(){}var p,v,F=null,I={available:!1,active:!1,deviceName:""},q={volume:null,mute:null},R=i.getAbsolutePath(e.location.href),U,z=null,W=null,X=null;p=l.volume,v=l.mute;var V=null,$=null;U=i.extend({},u,l.cast),n(U,"loadscreen"),n(U,"endscreen"),n(U,"logo"),U.appid&&(!e.cast||!e.cast.receiver)&&(r.loader.addEventListener("availability",g),r.loader.addEventListener("session",y),r.loader.initialize(U.appid)),this.startCasting=function(){F||a.jwInstreamState()||e.chrome.cast.requestSession(C,x)},this.stopCasting=T},r.log=function(){if(r.debug){var e=Array.prototype.slice.call(arguments,0);console.log.apply(console,e)}},r.error=function(){var e=Array.prototype.slice.call(arguments,0);console.error.apply(console,e)}}(window,jwplayer),function(e){function t(e){c.log("existing session",e),!E&&!b&&(b=e.session,b.addMessageListener(c.NS,n))}function n(t,r){var i=JSON.parse(r),o=b;if(!i)throw"Message not proper JSON";if(i.reconcile){b.removeMessageListener(c.NS,n),i.receiverFriendlyName=b.receiver.friendlyName;if(!i.pageUrl||!i.diff.id||!i.appid)i.pageUrl=w,i.diff.id=e().id,i.appid=y,b=E=null;m[i.diff.id]&&y===i.appid&&i.pageUrl===w&&(v=i.diff.id,y=i.appid,f(v,"jwInstreamDestroy"),s(o),f(v,g.message,i),b=null)}}function r(){E&&(E.removeUpdateListener(a),E.removeMessageListener(c.NS,o),E.stop(h.noop,u.bind(this)),E=null),f(v,g.cleanup)}function i(e,t){E.sendMessage(c.NS,{command:e,args:t},h.noop,function(e){c.error("message send error",e)})}function s(t){var n=e(v);E=t,E.addMessageListener(c.NS,o),E.addUpdateListener(a),n=e.cast.setupFlashCastConfig(n),b!==E&&i("setup",n),f(v,g.connected,{receiverFriendlyName:t.receiver.friendlyName})}function o(e,t){if(t){var n=JSON.parse(t);if(!n)throw"Message not proper JSON";f(v,g.message,n)}}function u(e){f(v,g.error,e||{})}function a(e){e||r()}function f(t,n,r){r?e(t).callInternal(n,r):e(t).callInternal(n)}function l(){}var c=e.cast,h=e.utils,p=e._,d=window.chrome||{},v,m={},g={},y,b,w=h.getAbsolutePath(window.location.href),E;c.NS="urn:x-cast:com.longtailvideo.jwplayer",c.flash={checkAvailability:function(e,n,r){g=r,y=n,m[e]=!0,c.loader.addEventListener("availability",function(t){"available"===t.availability&&f(e,g.available,t)}),c.loader.addEventListener("session",t),c.loader.initialize(n)},startCasting:function(e){v=e,d.cast.requestSession(s.bind(this),u.bind(this))},stopCasting:r,mute:function(e){E.setReceiverMuted(e,l,function(e){c.error("set muted error",e)})},volume:function(e){e=Math.max(0,Math.min(e/100,1)),E.setReceiverVolumeLevel(e,l,function(e){c.error("set volume error",e)})},messageReceiver:i,canCastItem:function(t){return p.any(t.levels,function(t){return e.embed.html5CanPlay(t.file,t.type)})}}}(window.jwplayer),function(e,t){function n(){t&&t.cast&&t.cast.isAvailable&&!a.apiConfig?(a.apiConfig=new t.cast.ApiConfig(new t.cast.SessionRequest(p),o,u,t.cast.AutoJoinPolicy.ORIGIN_SCOPED),t.cast.initialize(a.apiConfig,s,i)):15>h++&&setTimeout(n,1e3)}function r(){c&&(c.resetEventListeners(),c=null)}function i(){a.apiConfig=null}function s(){}function o(e){d.sendEvent("session",{session:e}),e.sendMessage(a.NS,{whoami:1})}function u(e){a.availability=e,d.sendEvent("availability",{availability:e})}window.chrome=t;var a=e.cast,f=e.utils,l=e.events,c,h=0,p=null,d=f.extend({initialize:function(e){p=e,null!==a.availability?d.sendEvent("availability",{availability:a.availability}):t&&t.cast?n():c||(c=new f.scriptloader("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"
),c.addEventListener(l.ERROR,r),c.addEventListener(l.COMPLETE,n),c.load())}},new l.eventdispatcher("cast.loader"));e.cast.loader=d}(window.jwplayer,window.chrome||{}),function(e,t){var n=[],r=e.utils,i=e.events,s=i.state,o="getBuffer getCaptionsList getControls getCurrentCaptions getCurrentQuality getCurrentAudioTrack getDuration getFullscreen getHeight getLockState getMute getPlaylistIndex getSafeRegion getPosition getQualityLevels getState getVolume getWidth isBeforeComplete isBeforePlay releaseState".split(" "),u="playlistNext stop forceState playlistPrev seek setCurrentCaptions setControls setCurrentQuality setVolume setCurrentAudioTrack".split(" "),a={onBufferChange:i.JWPLAYER_MEDIA_BUFFER,onBufferFull:i.JWPLAYER_MEDIA_BUFFER_FULL,onError:i.JWPLAYER_ERROR,onSetupError:i.JWPLAYER_SETUP_ERROR,onFullscreen:i.JWPLAYER_FULLSCREEN,onMeta:i.JWPLAYER_MEDIA_META,onMute:i.JWPLAYER_MEDIA_MUTE,onPlaylist:i.JWPLAYER_PLAYLIST_LOADED,onPlaylistItem:i.JWPLAYER_PLAYLIST_ITEM,onPlaylistComplete:i.JWPLAYER_PLAYLIST_COMPLETE,onReady:i.API_READY,onResize:i.JWPLAYER_RESIZE,onComplete:i.JWPLAYER_MEDIA_COMPLETE,onSeek:i.JWPLAYER_MEDIA_SEEK,onTime:i.JWPLAYER_MEDIA_TIME,onVolume:i.JWPLAYER_MEDIA_VOLUME,onBeforePlay:i.JWPLAYER_MEDIA_BEFOREPLAY,onBeforeComplete:i.JWPLAYER_MEDIA_BEFORECOMPLETE,onDisplayClick:i.JWPLAYER_DISPLAY_CLICK,onControls:i.JWPLAYER_CONTROLS,onQualityLevels:i.JWPLAYER_MEDIA_LEVELS,onQualityChange:i.JWPLAYER_MEDIA_LEVEL_CHANGED,onCaptionsList:i.JWPLAYER_CAPTIONS_LIST,onCaptionsChange:i.JWPLAYER_CAPTIONS_CHANGED,onAdError:i.JWPLAYER_AD_ERROR,onAdClick:i.JWPLAYER_AD_CLICK,onAdImpression:i.JWPLAYER_AD_IMPRESSION,onAdTime:i.JWPLAYER_AD_TIME,onAdComplete:i.JWPLAYER_AD_COMPLETE,onAdCompanions:i.JWPLAYER_AD_COMPANIONS,onAdSkipped:i.JWPLAYER_AD_SKIPPED,onAdPlay:i.JWPLAYER_AD_PLAY,onAdPause:i.JWPLAYER_AD_PAUSE,onAdMeta:i.JWPLAYER_AD_META,onCast:i.JWPLAYER_CAST_SESSION,onAudioTrackChange:i.JWPLAYER_AUDIO_TRACK_CHANGED,onAudioTracks:i.JWPLAYER_AUDIO_TRACKS},f={onBuffer:s.BUFFERING,onPause:s.PAUSED,onPlay:s.PLAYING,onIdle:s.IDLE};e.api=function(n){function l(e,t){r.foreach(e,function(e,n){E[e]=function(e){return t(n,e)}})}function p(e,t){var n="jw"+t.charAt(0).toUpperCase()+t.slice(1);E[t]=function(){var t=w.apply(this,[n].concat(Array.prototype.slice.call(arguments,0)));return e?E:t}}function v(t){C=[],L&&L.destroy&&L.destroy(),e.api.destroyPlayer(t.id)}function m(e,t){try{e.jwAddEventListener(t,'function(dat) { jwplayer("'+E.id+'").dispatchEvent("'+t+'", dat); }')}catch(n){if("flash"===E.renderingMode){var i=document.createElement("a");i.href=T.data,i.protocol!==location.protocol&&r.log("Warning: Your site ["+location.protocol+"] and JWPlayer ["+i.protocol+"] are hosted using different protocols")}r.log("Could not add internal listener")}}function y(e,t){return S[e]||(S[e]=[],T&&N&&m(T,e)),S[e].push(t),E}function w(){if(N){if(T){var e=Array.prototype.slice.call(arguments,0),t=e.shift();if("function"==typeof T[t]){switch(e.length){case 6:return T[t](e[0],e[1],e[2],e[3],e[4],e[5]);case 5:return T[t](e[0],e[1],e[2],e[3],e[4]);case 4:return T[t](e[0],e[1],e[2],e[3]);case 3:return T[t](e[0],e[1],e[2]);case 2:return T[t](e[0],e[1]);case 1:return T[t](e[0])}return T[t]()}}return null}C.push(arguments)}var E=this,S={},x={},T,N=!1,C=[],k,L,A={},O={};return E.container=n,E.id=n.id,E.setup=function(t){if(e.embed){var n=document.getElementById(E.id);return n&&(t.fallbackDiv=n),v(E),n=e(E.id),n.config=t,L=new e.embed(n),L.embed(),n}return E},E.getContainer=function(){return E.container},E.addButton=function(e,t,n,i){try{O[i]=n,w("jwDockAddButton",e,t,'jwplayer("'+E.id+'").callback("'+i+'")',i)}catch(s){r.log("Could not add dock button"+s.message)}},E.removeButton=function(e){w("jwDockRemoveButton",e)},E.callback=function(e){O[e]&&O[e]()},E.getMeta=function(){return E.getItemMeta()},E.getPlaylist=function(){var e=w("jwGetPlaylist");return"flash"===E.renderingMode&&r.deepReplaceKeyName(e,["__dot__","__spc__","__dsh__","__default__"],["."," ","-","default"]),e},E.getPlaylistItem=function(e){return r.exists(e)||(e=E.getPlaylistIndex()),E.getPlaylist()[e]},E.getRenderingMode=function(){return E.renderingMode},E.setFullscreen=function(e){return r.exists(e)?w("jwSetFullscreen",e):w("jwSetFullscreen",!w("jwGetFullscreen")),E},E.setMute=function(e){return r.exists(e)?w("jwSetMute",e):w("jwSetMute",!w("jwGetMute")),E},E.lock=function(){return E},E.unlock=function(){return E},E.load=function(t){return w("jwInstreamDestroy"),e(E.id).plugins.googima&&w("jwDestroyGoogima"),w("jwLoad",t),E},E.playlistItem=function(e){return w("jwPlaylistItem",parseInt(e,10)),E},E.resize=function(e,t){if("flash"!==E.renderingMode)w("jwResize",e,t);else{var n=document.getElementById(E.id+"_wrapper"),i=document.getElementById(E.id+"_aspect");i&&(i.style.display="none"),n&&(n.style.display="block",n.style.width=r.styleDimension(e),n.style.height=r.styleDimension(t))}return E},E.play=function(e){if(e!==t)return w("jwPlay",e),E;e=E.getState();var n=k&&k.getState();return n&&(n===s.IDLE||n===s.PLAYING||n===s.BUFFERING?w("jwInstreamPause"):w("jwInstreamPlay")),e===s.PLAYING||e===s.BUFFERING?w("jwPause"):w("jwPlay"),E},E.pause=function(e){return e===t?(e=E.getState(),e===s.PLAYING||e===s.BUFFERING?w("jwPause"):w("jwPlay")):w("jwPause",e),E},E.createInstream=function(){return new e.api.instream(this,T)},E.setInstream=function(e){return k=e},E.loadInstream=function(e,t){return k=E.setInstream(E.createInstream()).init(t),k.loadItem(e),k},E.destroyPlayer=function(){w("jwPlayerDestroy")},E.playAd=function(t){var n=e(E.id).plugins;n.vast?n.vast.jwPlayAd(t):w("jwPlayAd",t)},E.pauseAd=function(){var t=e(E.id).plugins;t.vast?t.vast.jwPauseAd():w("jwPauseAd")},l(f,function(e,t){return x[e]||(x[e]=[],y(i.JWPLAYER_PLAYER_STATE,function(t){var n=t.newstate;t=t.oldstate;if(n===e){var r=x[n];if(r)for(var i=0;i<r.length;i++){var s=r[i];"function"==typeof s&&s.call(this,{oldstate:t,newstate:n})}}})),x[e].push(t),E}),l(a,y),r.foreach(o,function(e,t){p(!1,t)}),r.foreach(u,
function(e,t){p(!0,t)}),E.remove=function(){if(!N)throw"Cannot call remove() before player is ready";v(this)},E.registerPlugin=function(t,n,r,i){e.plugins.registerPlugin(t,n,r,i)},E.setPlayer=function(e,t){T=e,E.renderingMode=t},E.detachMedia=function(){if("html5"===E.renderingMode)return w("jwDetachMedia")},E.attachMedia=function(e){if("html5"===E.renderingMode)return w("jwAttachMedia",e)},E.getAudioTracks=function(){return w("jwGetAudioTracks")},E.removeEventListener=function(e,t){var n=S[e];if(n)for(var r=n.length;r--;)n[r]===t&&n.splice(r,1)},E.dispatchEvent=function(e,t){var n=S[e];if(n)for(var n=n.slice(0),s=r.translateEventResponse(e,t),o=0;o<n.length;o++){var u=n[o];if("function"==typeof u)try{e===i.JWPLAYER_PLAYLIST_LOADED&&r.deepReplaceKeyName(s.playlist,["__dot__","__spc__","__dsh__","__default__"],["."," ","-","default"]),u.call(this,s)}catch(a){r.log("There was an error calling back an event handler",a)}}},E.dispatchInstreamEvent=function(e){k&&k.dispatchEvent(e,arguments)},E.callInternal=w,E.playerReady=function(e){N=!0,T||E.setPlayer(document.getElementById(e.id)),E.container=document.getElementById(E.id),r.foreach(S,function(e){m(T,e)}),y(i.JWPLAYER_PLAYLIST_ITEM,function(){A={}}),y(i.JWPLAYER_MEDIA_META,function(e){r.extend(A,e.metadata)}),y(i.JWPLAYER_VIEW_TAB_FOCUS,function(e){var t=E.getContainer();!0===e.hasFocus?r.addClass(t,"jw-tab-focus"):r.removeClass(t,"jw-tab-focus")});for(E.dispatchEvent(i.API_READY);0<C.length;)w.apply(this,C.shift())},E.getItemMeta=function(){return A},E},e.playerReady=function(t){var n=e.api.playerById(t.id);n||(n=e.api.selectPlayer(t.id)),n.playerReady(t)},e.api.selectPlayer=function(t){var i;return r.exists(t)||(t=0),t.nodeType?i=t:"string"==typeof t&&(i=document.getElementById(t)),i?(t=e.api.playerById(i.id))?t:e.api.addPlayer(new e.api(i)):"number"==typeof t?n[t]:null},e.api.playerById=function(e){for(var t=0;t<n.length;t++)if(n[t].id===e)return n[t];return null},e.api.addPlayer=function(e){for(var t=0;t<n.length;t++)if(n[t]===e)return e;return n.push(e),e},e.api.destroyPlayer=function(e){var i,s,o;r.foreach(n,function(t,n){n.id===e&&(i=t,s=n)});if(i===t||s===t)return null;r.clearCss("#"+s.id);if(o=document.getElementById(s.id+("flash"===s.renderingMode?"_wrapper":""))){"html5"===s.renderingMode&&s.destroyPlayer();var u=document.createElement("div");u.id=s.id,o.parentNode.replaceChild(u,o)}return n.splice(i,1),null}}(window.jwplayer),function(e){var t=e.events,n=e.utils,r=t.state;e.api.instream=function(e,i){function s(t,n){return f[t]||(f[t]=[],i.jwInstreamAddEventListener(t,'function(dat) { jwplayer("'+e.id+'").dispatchInstreamEvent("'+t+'", dat); }')),f[t].push(n),this}function o(e,n){return l[e]||(l[e]=[],s(t.JWPLAYER_PLAYER_STATE,function(t){var n=t.newstate,r=t.oldstate;if(n===e){var i=l[n];if(i)for(var s=0;s<i.length;s++){var o=i[s];"function"==typeof o&&o.call(this,{oldstate:r,newstate:n,type:t.type})}}})),l[e].push(n),this}var u,a,f={},l={},h=this;h.type="instream",h.init=function(){return e.callInternal("jwInitInstream"),h},h.loadItem=function(t,r){u=t,a=r||{},"array"===n.typeOf(t)?e.callInternal("jwLoadArrayInstream",u,a):e.callInternal("jwLoadItemInstream",u,a)},h.removeEvents=function(){f=l={}},h.removeEventListener=function(e,t){var n=f[e];if(n)for(var r=n.length;r--;)n[r]===t&&n.splice(r,1)},h.dispatchEvent=function(e,t){var r=f[e];if(r)for(var r=r.slice(0),i=n.translateEventResponse(e,t[1]),s=0;s<r.length;s++){var o=r[s];"function"==typeof o&&o.call(this,i)}},h.onError=function(e){return s(t.JWPLAYER_ERROR,e)},h.onMediaError=function(e){return s(t.JWPLAYER_MEDIA_ERROR,e)},h.onFullscreen=function(e){return s(t.JWPLAYER_FULLSCREEN,e)},h.onMeta=function(e){return s(t.JWPLAYER_MEDIA_META,e)},h.onMute=function(e){return s(t.JWPLAYER_MEDIA_MUTE,e)},h.onComplete=function(e){return s(t.JWPLAYER_MEDIA_COMPLETE,e)},h.onPlaylistComplete=function(e){return s(t.JWPLAYER_PLAYLIST_COMPLETE,e)},h.onPlaylistItem=function(e){return s(t.JWPLAYER_PLAYLIST_ITEM,e)},h.onTime=function(e){return s(t.JWPLAYER_MEDIA_TIME,e)},h.onBuffer=function(e){return o(r.BUFFERING,e)},h.onPause=function(e){return o(r.PAUSED,e)},h.onPlay=function(e){return o(r.PLAYING,e)},h.onIdle=function(e){return o(r.IDLE,e)},h.onClick=function(e){return s(t.JWPLAYER_INSTREAM_CLICK,e)},h.onInstreamDestroyed=function(e){return s(t.JWPLAYER_INSTREAM_DESTROYED,e)},h.onAdSkipped=function(e){return s(t.JWPLAYER_AD_SKIPPED,e)},h.play=function(e){i.jwInstreamPlay(e)},h.pause=function(e){i.jwInstreamPause(e)},h.hide=function(){e.callInternal("jwInstreamHide")},h.destroy=function(){h.removeEvents(),e.callInternal("jwInstreamDestroy")},h.setText=function(e){i.jwInstreamSetText(e?e:"")},h.getState=function(){return i.jwInstreamState()},h.setClick=function(e){i.jwInstreamClick&&i.jwInstreamClick(e)}}}(jwplayer),function(e){var t=e.api,n=t.selectPlayer,r=e._;t.selectPlayer=function(t){return(t=n(t))?t:{registerPlugin:function(t,n,r){"jwpsrv"!==t&&e.plugins.registerPlugin(t,n,r)}}},e.unregisteredProviders=[],t.registerProvider=function(t){e&&e.html5&&r.isFunction(e.html5.registerProvider)?e.html5.registerProvider(t):e.unregisteredProviders.push(t)}}(jwplayer));
(function(e){e.widget("ui.frontendVideo",{options:{default_jwplayer_params:{flashplayer:"/javascript/ruby/jwplayer/jwplayer.flash.swf",html5player:"/javascript/ruby/jwplayer/jwplayer.html5.js",ga:{},skin:"glow"}},_create:function(){var t=this,n=t.element,r=[],i=[];n.children("source").each(function(){r.push({file:this.src})}),t.options.default_jwplayer_params.sources=r,n.children("track").each(function(){i.push({file:this.src,label:this.label,kind:this.kind,srclang:this.srclang})}),t.options.default_jwplayer_params.tracks=i;var s=navigator.userAgent.toLowerCase();if(!s.match(/iPhone/i)){var o=e.extend({},t.options.default_jwplayer_params,t.options.jwplayer_params||{});jwplayer(t.element[0]).setup(o),typeof t.options.extra_params!="undefined"&&typeof t.options.extra_params.defaultVolume!="undefined"&&jwplayer(t.element[0]).setVolume(t.options.extra_params.defaultVolume)}return},destroy:function(){var t=this;try{jwplayer(t.element[0]).remove()}catch(n){}e.Widget.prototype.destroy.apply(this,arguments)}})})(jQuery);
/*! iScroll v5.0.4 ~ (c) 2008-2013 Matteo Spinelli ~ http://cubiq.org/license */
;var IScroll=function(e,t,n){function s(e,n){this.wrapper=typeof e=="string"?t.querySelector(e):e,this.scroller=this.wrapper.children[0],this.scrollerStyle=this.scroller.style,this.options={resizeIndicator:!0,mouseWheelSpeed:20,snapThreshold:.334,startX:0,startY:0,scrollY:!0,directionLockThreshold:5,momentum:!0,bounce:!0,bounceTime:600,bounceEasing:"",preventDefault:!0,HWCompositing:!0,useTransition:!0,useTransform:!0};for(var r in n)this.options[r]=n[r];this.translateZ=this.options.HWCompositing&&i.hasPerspective?" translateZ(0)":"",this.options.useTransition=i.hasTransition&&this.options.useTransition,this.options.useTransform=i.hasTransform&&this.options.useTransform,this.options.eventPassthrough=this.options.eventPassthrough===!0?"vertical":this.options.eventPassthrough,this.options.preventDefault=!this.options.eventPassthrough&&this.options.preventDefault,this.options.scrollY=this.options.eventPassthrough=="vertical"?!1:this.options.scrollY,this.options.scrollX=this.options.eventPassthrough=="horizontal"?!1:this.options.scrollX,this.options.freeScroll=this.options.freeScroll&&!this.options.eventPassthrough,this.options.directionLockThreshold=this.options.eventPassthrough?0:this.options.directionLockThreshold,this.options.bounceEasing=typeof this.options.bounceEasing=="string"?i.ease[this.options.bounceEasing]||i.ease.circular:this.options.bounceEasing,this.options.resizePolling=this.options.resizePolling===undefined?60:this.options.resizePolling,this.options.tap===!0&&(this.options.tap="tap"),this.options.invertWheelDirection=this.options.invertWheelDirection?-1:1,this.options.probeType==3&&(this.options.useTransition=!1),this.x=0,this.y=0,this.directionX=0,this.directionY=0,this._events={},this._init(),this.refresh(),this.scrollTo(this.options.startX,this.options.startY),this.enable()}function o(e,n,r){var i=t.createElement("div"),s=t.createElement("div");return r===!0&&(i.style.cssText="position:absolute;z-index:9999",s.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px"),s.className="iScrollIndicator",e=="h"?(r===!0&&(i.style.cssText+=";height:7px;left:2px;right:2px;bottom:0",s.style.height="100%"),i.className="iScrollHorizontalScrollbar"):(r===!0&&(i.style.cssText+=";width:7px;bottom:2px;top:2px;right:1px",s.style.width="100%"),i.className="iScrollVerticalScrollbar"),n||(i.style.pointerEvents="none"),i.appendChild(s),i}function u(n,r){this.wrapper=typeof r.el=="string"?t.querySelector(r.el):r.el,this.indicator=this.wrapper.children[0],this.indicatorStyle=this.indicator.style,this.scroller=n,this.options={listenX:!0,listenY:!0,interactive:!1,resize:!0,defaultScrollbars:!1,speedRatioX:0,speedRatioY:0};for(var s in r)this.options[s]=r[s];this.sizeRatioX=1,this.sizeRatioY=1,this.maxPosX=0,this.maxPosY=0,this.options.interactive&&(i.addEvent(this.indicator,"touchstart",this),i.addEvent(this.indicator,"MSPointerDown",this),i.addEvent(this.indicator,"mousedown",this),i.addEvent(e,"touchend",this),i.addEvent(e,"MSPointerUp",this),i.addEvent(e,"mouseup",this))}var r=e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.oRequestAnimationFrame||e.msRequestAnimationFrame||function(t){e.setTimeout(t,1e3/60)},i=function(){function o(e){return s===!1?!1:s===""?e:s+e.charAt(0).toUpperCase()+e.substr(1)}var r={},i=t.createElement("div").style,s=function(){var e=["t","webkitT","MozT","msT","OT"],t,n=0,r=e.length;for(;n<r;n++){t=e[n]+"ransform";if(t in i)return e[n].substr(0,e[n].length-1)}return!1}();r.getTime=Date.now||function(){return(new Date).getTime()},r.extend=function(e,t){for(var n in t)e[n]=t[n]},r.addEvent=function(e,t,n,r){e.addEventListener?e.addEventListener(t,n,!!r):e.attachEvent(t,n)},r.removeEvent=function(e,t,n,r){e.removeventListener?(e.removeEventListener(t,n,!!r),e.addEventListener(t,n,!!r)):e.detachEvent(t,n)},r.momentum=function(e,t,r,i,s){var o=e-t,u=n.abs(o)/r,a,f,l=6e-4;return a=e+u*u/(2*l)*(o<0?-1:1),f=u/l,a<i?(a=s?i-s/2.5*(u/8):i,o=n.abs(a-e),f=o/u):a>0&&(a=s?s/2.5*(u/8):0,o=n.abs(e)+a,f=o/u),{destination:n.round(a),duration:f}};var u=o("transform");return r.extend(r,{hasTransform:u!==!1,hasPerspective:o("perspective")in i,hasTouch:"ontouchstart"in e,hasPointer:navigator.msPointerEnabled,hasTransition:o("transition")in i}),r.isAndroidBrowser=/Android/.test(e.navigator.appVersion)&&/Version\/\d/.test(e.navigator.appVersion),r.extend(r.style={},{transform:u,transitionTimingFunction:o("transitionTimingFunction"),transitionDuration:o("transitionDuration"),transformOrigin:o("transformOrigin")}),r.hasClass=function(e,t){var n=new RegExp("(^|\\s)"+t+"(\\s|$)");return n.test(e.className)},r.addClass=function(e,t){if(r.hasClass(e,t))return;var n=e.className.split(" ");n.push(t),e.className=n.join(" ")},r.removeClass=function(e,t){if(!r.hasClass(e,t))return;var n=new RegExp("(^|\\s)"+t+"(\\s|$)","g");e.className=e.className.replace(n,"")},r.offset=function(e){var t=-e.offsetLeft,n=-e.offsetTop;while(e=e.offsetParent)t-=e.offsetLeft,n-=e.offsetTop;return{left:t,top:n}},r.extend(r.eventType={},{touchstart:1,touchmove:1,touchend:1,mousedown:2,mousemove:2,mouseup:2,MSPointerDown:3,MSPointerMove:3,MSPointerUp:3}),r.extend(r.ease={},{quadratic:{style:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",fn:function(e){return e*(2-e)}},circular:{style:"cubic-bezier(0.1, 0.57, 0.1, 1)",fn:function(e){return n.sqrt(1- --e*e)}},back:{style:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",fn:function(e){var t=4;return(e-=1)*e*((t+1)*e+t)+1}},bounce:{style:"",fn:function(e){return(e/=1)<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375}},elastic:{style:"",fn:function(e){var t=.22,r=.4;return e===0?0:e==1?1:r*n.pow(2,-10*e)*n.sin((e-t/4)*2*n.PI/t)+1}}}),r.tap=function(e,n){var r=t.createEvent("Event");r.initEvent(n,!0,!0),r.pageX=
e.pageX,r.pageY=e.pageY,e.target.dispatchEvent(r)},r.click=function(e){var n=e.target,r;n.tagName!="SELECT"&&n.tagName!="INPUT"&&n.tagName!="TEXTAREA"&&(r=t.createEvent("MouseEvents"),r.initMouseEvent("click",!0,!0,e.view,1,n.screenX,n.screenY,n.clientX,n.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,0,null),r._constructed=!0,n.dispatchEvent(r))},r}();return s.prototype={version:"5.0.4",_init:function(){this._initEvents(),(this.options.scrollbars||this.options.indicators)&&this._initIndicators(),this.options.mouseWheel&&this._initWheel(),this.options.snap&&this._initSnap(),this.options.keyBindings&&this._initKeys()},destroy:function(){this._initEvents(!0),this._execEvent("destroy")},_transitionEnd:function(e){if(e.target!=this.scroller)return;this._transitionTime(0),this.resetPosition(this.options.bounceTime)||this._execEvent("scrollEnd")},_start:function(e){if(i.eventType[e.type]!=1&&e.button!==0)return;if(!this.enabled||this.initiated&&i.eventType[e.type]!==this.initiated)return;this.options.preventDefault&&!i.isAndroidBrowser&&e.preventDefault();var t=e.touches?e.touches[0]:e,r;this.initiated=i.eventType[e.type],this.moved=!1,this.distX=0,this.distY=0,this.directionX=0,this.directionY=0,this.directionLocked=0,this._transitionTime(),this.isAnimating=!1,this.startTime=i.getTime(),this.options.useTransition&&this.isInTransition&&(r=this.getComputedPosition(),this._translate(n.round(r.x),n.round(r.y)),this.isInTransition=!1),this.startX=this.x,this.startY=this.y,this.absStartX=this.x,this.absStartY=this.y,this.pointX=t.pageX,this.pointY=t.pageY,this._execEvent("scrollStart")},_move:function(e){if(!this.enabled||i.eventType[e.type]!==this.initiated)return;this.options.preventDefault&&e.preventDefault();var t=e.touches?e.touches[0]:e,r=this.hasHorizontalScroll?t.pageX-this.pointX:0,s=this.hasVerticalScroll?t.pageY-this.pointY:0,o=i.getTime(),u,a,f,l;this.pointX=t.pageX,this.pointY=t.pageY,this.distX+=r,this.distY+=s,f=n.abs(this.distX),l=n.abs(this.distY);if(o-this.endTime>300&&f<10&&l<10)return;!this.directionLocked&&!this.options.freeScroll&&(f>l+this.options.directionLockThreshold?this.directionLocked="h":l>=f+this.options.directionLockThreshold?this.directionLocked="v":this.directionLocked="n");if(this.directionLocked=="h"){if(this.options.eventPassthrough=="vertical")e.preventDefault();else if(this.options.eventPassthrough=="horizontal"){this.initiated=!1;return}s=0}else if(this.directionLocked=="v"){if(this.options.eventPassthrough=="horizontal")e.preventDefault();else if(this.options.eventPassthrough=="vertical"){this.initiated=!1;return}r=0}u=this.x+r,a=this.y+s;if(u>0||u<this.maxScrollX)u=this.options.bounce?this.x+r/3:u>0?0:this.maxScrollX;if(a>0||a<this.maxScrollY)a=this.options.bounce?this.y+s/3:a>0?0:this.maxScrollY;this.directionX=r>0?-1:r<0?1:0,this.directionY=s>0?-1:s<0?1:0,this.moved=!0,this._translate(u,a),o-this.startTime>300&&(this.startTime=o,this.startX=this.x,this.startY=this.y,this.options.probeType==1&&this._execEvent("scroll")),this.options.probeType>1&&this._execEvent("scroll")},_end:function(e){if(!this.enabled||i.eventType[e.type]!==this.initiated)return;this.options.preventDefault&&e.preventDefault();var t=e.changedTouches?e.changedTouches[0]:e,r,s,o=i.getTime()-this.startTime,u=n.round(this.x),a=n.round(this.y),f=n.abs(u-this.startX),l=n.abs(a-this.startY),c=0,h="";this.scrollTo(u,a),this.isInTransition=0,this.initiated=0,this.endTime=i.getTime();if(this.resetPosition(this.options.bounceTime))return;if(!this.moved){this.options.tap&&i.tap(e,this.options.tap),this.options.click&&i.click(e);return}if(this._events.flick&&o<200&&f<100&&l<100){this._execEvent("flick");return}this.options.momentum&&o<300&&(r=this.hasHorizontalScroll?i.momentum(this.x,this.startX,o,this.maxScrollX,this.options.bounce?this.wrapperWidth:0):{destination:u,duration:0},s=this.hasVerticalScroll?i.momentum(this.y,this.startY,o,this.maxScrollY,this.options.bounce?this.wrapperHeight:0):{destination:a,duration:0},u=r.destination,a=s.destination,c=n.max(r.duration,s.duration),this.isInTransition=1);if(this.options.snap){var p=this._nearestSnap(u,a);this.currentPage=p,u=p.x,a=p.y,c=this.options.snapSpeed||n.max(n.max(n.min(f,1e3),n.min(f,1e3)),300),this.directionX=0,this.directionY=0,h=this.options.bounceEasing}if(u!=this.x||a!=this.y){if(u>0||u<this.maxScrollX||a>0||a<this.maxScrollY)h=i.ease.quadratic;this.scrollTo(u,a,c,h);return}this._execEvent("scrollEnd")},_resize:function(){var e=this;clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(function(){e.refresh()},this.options.resizePolling)},resetPosition:function(e){var t=this.x,n=this.y;return e=e||0,!this.hasHorizontalScroll||this.x>0?t=0:this.x<this.maxScrollX&&(t=this.maxScrollX),!this.hasVerticalScroll||this.y>0?n=0:this.y<this.maxScrollY&&(n=this.maxScrollY),t==this.x&&n==this.y?!1:(this.scrollTo(t,n,e,this.options.bounceEasing),!0)},disable:function(){this.enabled=!1},enable:function(){this.enabled=!0},refresh:function(){var e=this.wrapper.offsetHeight;this.wrapperWidth=this.wrapper.clientWidth,this.wrapperHeight=this.wrapper.clientHeight,this.scrollerWidth=this.scroller.offsetWidth,this.scrollerHeight=this.scroller.offsetHeight,this.maxScrollX=this.wrapperWidth-this.scrollerWidth,this.maxScrollY=this.wrapperHeight-this.scrollerHeight,this.hasHorizontalScroll=this.options.scrollX&&this.maxScrollX<0,this.hasVerticalScroll=this.options.scrollY&&this.maxScrollY<0,this.hasHorizontalScroll||(this.maxScrollX=0,this.scrollerWidth=this.wrapperWidth),this.hasVerticalScroll||(this.maxScrollY=0,this.scrollerHeight=this.wrapperHeight),this.endTime=0,this.directionX=0,this.directionY=0,this.wrapperOffset=i.offset(this.wrapper),this._execEvent("refresh"),this.resetPosition();if(this.options.snap){var t=this._nearestSnap(this.x,this.y);if(this.x==t.x&&this.y==t.y)return;this.currentPage=t,this.scrollTo(t.x,t.y)}},on:function(e,t){this._events[e]||(this._events[e]=[]),this._events[e].push(t)},_execEvent:function(e){if(!this._events[e])return;
var t=0,n=this._events[e].length;if(!n)return;for(;t<n;t++)this._events[e][t].call(this)},scrollBy:function(e,t,n,r){e=this.x+e,t=this.y+t,n=n||0,this.scrollTo(e,t,n,r)},scrollTo:function(e,t,n,r){r=r||i.ease.circular,!n||this.options.useTransition&&r.style?(this._transitionTimingFunction(r.style),this._transitionTime(n),this._translate(e,t)):this._animate(e,t,n,r.fn)},scrollToElement:function(e,t,r,s,o){e=e.nodeType?e:this.scroller.querySelector(e);if(!e)return;var u=i.offset(e);u.left-=this.wrapperOffset.left,u.top-=this.wrapperOffset.top,r===!0&&(r=n.round(e.offsetWidth/2-this.wrapper.offsetWidth/2)),s===!0&&(s=n.round(e.offsetHeight/2-this.wrapper.offsetHeight/2)),u.left-=r||0,u.top-=s||0,u.left=u.left>0?0:u.left<this.maxScrollX?this.maxScrollX:u.left,u.top=u.top>0?0:u.top<this.maxScrollY?this.maxScrollY:u.top,t=t===undefined||t===null||t==="auto"?n.max(n.abs(u.left)*2,n.abs(u.top)*2):t,this.scrollTo(u.left,u.top,t,o)},_transitionTime:function(e){e=e||0,this.scrollerStyle[i.style.transitionDuration]=e+"ms",this.indicator1&&this.indicator1.transitionTime(e),this.indicator2&&this.indicator2.transitionTime(e)},_transitionTimingFunction:function(e){this.scrollerStyle[i.style.transitionTimingFunction]=e,this.indicator1&&this.indicator1.transitionTimingFunction(e),this.indicator2&&this.indicator2.transitionTimingFunction(e)},_translate:function(e,t){this.options.useTransform?this.scrollerStyle[i.style.transform]="translate("+e+"px,"+t+"px)"+this.translateZ:(e=n.round(e),t=n.round(t),this.scrollerStyle.left=e+"px",this.scrollerStyle.top=t+"px"),this.x=e,this.y=t,this.indicator1&&this.indicator1.updatePosition(),this.indicator2&&this.indicator2.updatePosition()},_initEvents:function(t){var n=t?i.removeEvent:i.addEvent,r=this.options.bindToWrapper?this.wrapper:e;n(e,"orientationchange",this),n(e,"resize",this),n(this.wrapper,"mousedown",this),n(r,"mousemove",this),n(r,"mousecancel",this),n(r,"mouseup",this),i.hasPointer&&(n(this.wrapper,"MSPointerDown",this),n(r,"MSPointerMove",this),n(r,"MSPointerCancel",this),n(r,"MSPointerUp",this)),i.hasTouch&&(n(this.wrapper,"touchstart",this),n(r,"touchmove",this),n(r,"touchcancel",this),n(r,"touchend",this)),n(this.scroller,"transitionend",this),n(this.scroller,"webkitTransitionEnd",this),n(this.scroller,"oTransitionEnd",this),n(this.scroller,"MSTransitionEnd",this)},getComputedPosition:function(){var t=e.getComputedStyle(this.scroller,null),n,r;return this.options.useTransform?(t=t[i.style.transform].split(")")[0].split(", "),n=+(t[12]||t[4]),r=+(t[13]||t[5])):(n=+t.left.replace(/[^-\d]/g,""),r=+t.top.replace(/[^-\d]/g,"")),{x:n,y:r}},_initIndicators:function(){var e=this.options.interactiveScrollbars,t=typeof this.options.scrollbars!="object",n=typeof this.options.scrollbars!="string",r,i;this.options.scrollbars?(this.options.scrollY&&(r={el:o("v",e,this.options.scrollbars),interactive:e,defaultScrollbars:!0,customStyle:n,resize:this.options.resizeIndicator,listenX:!1},this.wrapper.appendChild(r.el)),this.options.scrollX&&(i={el:o("h",e,this.options.scrollbars),interactive:e,defaultScrollbars:!0,customStyle:n,resize:this.options.resizeIndicator,listenY:!1},this.wrapper.appendChild(i.el))):(r=this.options.indicators.length?this.options.indicators[0]:this.options.indicators,i=this.options.indicators[1]&&this.options.indicators[1]),r&&(this.indicator1=new u(this,r)),i&&(this.indicator2=new u(this,i)),this.on("refresh",function(){this.indicator1&&this.indicator1.refresh(),this.indicator2&&this.indicator2.refresh()}),this.on("destroy",function(){this.indicator1&&(this.indicator1.destroy(),this.indicator1=null),this.indicator2&&(this.indicator2.destroy(),this.indicator2=null)})},_initWheel:function(){i.addEvent(this.wrapper,"mousewheel",this),i.addEvent(this.wrapper,"DOMMouseScroll",this),this.on("destroy",function(){i.removeEvent(this.wrapper,"mousewheel",this),i.removeEvent(this.wrapper,"DOMMouseScroll",this)})},_wheel:function(e){if(!this.enabled)return;var t,n,r,i,s=this;clearTimeout(this.wheelTimeout),this.wheelTimeout=setTimeout(function(){s._execEvent("scrollEnd")},400),e.preventDefault();if("wheelDeltaX"in e)t=e.wheelDeltaX/120,n=e.wheelDeltaY/120;else if("wheelDelta"in e)t=n=e.wheelDelta/120;else{if(!("detail"in e))return;t=n=-e.detail/3}t*=this.options.mouseWheelSpeed,n*=this.options.mouseWheelSpeed,this.hasVerticalScroll||(t=n),r=this.x+(this.hasHorizontalScroll?t*this.options.invertWheelDirection:0),i=this.y+(this.hasVerticalScroll?n*this.options.invertWheelDirection:0),r>0?r=0:r<this.maxScrollX&&(r=this.maxScrollX),i>0?i=0:i<this.maxScrollY&&(i=this.maxScrollY),this.scrollTo(r,i,0),this.options.probeType>1&&this._execEvent("scroll")},_initSnap:function(){this.currentPage={},typeof this.options.snap=="string"&&(this.options.snap=this.scroller.querySelectorAll(this.options.snap)),this.on("refresh",function(){var e=0,t,r=0,i,s,o,u=0,a,f=this.options.snapStepX||this.wrapperWidth,l=this.options.snapStepY||this.wrapperHeight,c;this.pages=[];if(this.options.snap===!0){s=n.round(f/2),o=n.round(l/2);while(u>-this.scrollerWidth){this.pages[e]=[],t=0,a=0;while(a>-this.scrollerHeight)this.pages[e][t]={x:n.max(u,this.maxScrollX),y:n.max(a,this.maxScrollY),width:f,height:l,cx:u-s,cy:a-o},a-=l,t++;u-=f,e++}}else{c=this.options.snap,t=c.length,i=-1;for(;e<t;e++){if(e===0||c[e].offsetLeft<=c[e-1].offsetLeft)r=0,i++;this.pages[r]||(this.pages[r]=[]),u=n.max(-c[e].offsetLeft,this.maxScrollX),a=n.max(-c[e].offsetTop,this.maxScrollY),s=u-n.round(c[e].offsetWidth/2),o=a-n.round(c[e].offsetHeight/2),this.pages[r][i]={x:u,y:a,width:c[e].offsetWidth,height:c[e].offsetHeight,cx:s,cy:o},u>this.maxScrollX&&r++}}this.goToPage(this.currentPage.pageX||0,this.currentPage.pageY||0,0),this.options.snapThreshold%1===0?(this.snapThresholdX=this.options.snapThreshold,this.snapThresholdY=this.options.snapThreshold):(this.snapThresholdX=n.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width*this.options.snapThreshold),this.snapThresholdY=n.round(this.pages[this.currentPage
.pageX][this.currentPage.pageY].height*this.options.snapThreshold))}),this.on("flick",function(){var e=this.options.snapSpeed||n.max(n.max(n.min(n.abs(this.x-this.startX),1e3),n.min(n.abs(this.y-this.startY),1e3)),300);this.goToPage(this.currentPage.pageX+this.directionX,this.currentPage.pageY+this.directionY,e)})},_nearestSnap:function(e,t){var r=0,i=this.pages.length,s=0;if(n.abs(e-this.absStartX)<this.snapThresholdX&&n.abs(t-this.absStartY)<this.snapThresholdY)return this.currentPage;e>0?e=0:e<this.maxScrollX&&(e=this.maxScrollX),t>0?t=0:t<this.maxScrollY&&(t=this.maxScrollY);for(;r<i;r++)if(e>=this.pages[r][0].cx){e=this.pages[r][0].x;break}i=this.pages[r].length;for(;s<i;s++)if(t>=this.pages[0][s].cy){t=this.pages[0][s].y;break}return r==this.currentPage.pageX&&(r+=this.directionX,r<0?r=0:r>=this.pages.length&&(r=this.pages.length-1),e=this.pages[r][0].x),s==this.currentPage.pageY&&(s+=this.directionY,s<0?s=0:s>=this.pages[0].length&&(s=this.pages[0].length-1),t=this.pages[0][s].y),{x:e,y:t,pageX:r,pageY:s}},goToPage:function(e,t,r,i){i=i||this.options.bounceEasing,e>=this.pages.length?e=this.pages.length-1:e<0&&(e=0),t>=this.pages[0].length?t=this.pages[0].length-1:t<0&&(t=0);var s=this.pages[e][t].x,o=this.pages[e][t].y;r=r===undefined?this.options.snapSpeed||n.max(n.max(n.min(n.abs(s-this.x),1e3),n.min(n.abs(o-this.y),1e3)),300):r,this.currentPage={x:s,y:o,pageX:e,pageY:t},this.scrollTo(s,o,r,i)},next:function(e,t){var n=this.currentPage.pageX,r=this.currentPage.pageY;n++,n>=this.pages.length&&this.hasVerticalScroll&&(n=0,r++),this.goToPage(n,r,e,t)},prev:function(e,t){var n=this.currentPage.pageX,r=this.currentPage.pageY;n--,n<0&&this.hasVerticalScroll&&(n=0,r--),this.goToPage(n,r,e,t)},_initKeys:function(t){var n={pageUp:33,pageDown:34,end:35,home:36,left:37,up:38,right:39,down:40},r;if(typeof this.options.keyBindings=="object")for(r in this.options.keyBindings)typeof this.options.keyBindings[r]=="string"&&(this.options.keyBindings[r]=this.options.keyBindings[r].toUpperCase().charCodeAt(0));else this.options.keyBindings={};for(r in n)this.options.keyBindings[r]=this.options.keyBindings[r]||n[r];i.addEvent(e,"keydown",this),this.on("destroy",function(){i.removeEvent(e,"keydown",this)})},_key:function(e){if(!this.enabled)return;var t=this.options.snap,r=t?this.currentPage.pageX:this.x,s=t?this.currentPage.pageY:this.y,o=i.getTime(),u=this.keyTime||0,a=.25,f;this.options.useTransition&&this.isInTransition&&(f=this.getComputedPosition(),this._translate(n.round(f.x),n.round(f.y)),this.isInTransition=!1),this.keyAcceleration=o-u<200?n.min(this.keyAcceleration+a,50):0;switch(e.keyCode){case this.options.keyBindings.pageUp:this.hasHorizontalScroll&&!this.hasVerticalScroll?r+=t?1:this.wrapperWidth:s+=t?1:this.wrapperHeight;break;case this.options.keyBindings.pageDown:this.hasHorizontalScroll&&!this.hasVerticalScroll?r-=t?1:this.wrapperWidth:s-=t?1:this.wrapperHeight;break;case this.options.keyBindings.end:r=t?this.pages.length-1:this.maxScrollX,s=t?this.pages[0].length-1:this.maxScrollY;break;case this.options.keyBindings.home:r=0,s=0;break;case this.options.keyBindings.left:r+=t?-1:5+this.keyAcceleration>>0;break;case this.options.keyBindings.up:s+=t?1:5+this.keyAcceleration>>0;break;case this.options.keyBindings.right:r-=t?-1:5+this.keyAcceleration>>0;break;case this.options.keyBindings.down:s-=t?1:5+this.keyAcceleration>>0}if(t){this.goToPage(r,s);return}r>0?(r=0,this.keyAcceleration=0):r<this.maxScrollX&&(r=this.maxScrollX,this.keyAcceleration=0),s>0?(s=0,this.keyAcceleration=0):s<this.maxScrollY&&(s=this.maxScrollY,this.keyAcceleration=0),this.scrollTo(r,s,0),this.keyTime=o},_animate:function(e,t,n,s){function c(){var h=i.getTime(),p,d,v;if(h>=l){o.isAnimating=!1,o._translate(e,t),o.resetPosition(o.options.bounceTime)||o._execEvent("scrollEnd");return}h=(h-f)/n,v=s(h),p=(e-u)*v+u,d=(t-a)*v+a,o._translate(p,d),o.isAnimating&&r(c),o.options.probeType==3&&o._execEvent("scroll")}var o=this,u=this.x,a=this.y,f=i.getTime(),l=f+n;this.isAnimating=!0,c()},handleEvent:function(e){switch(e.type){case"touchstart":case"MSPointerDown":case"mousedown":this._start(e);break;case"touchmove":case"MSPointerMove":case"mousemove":this._move(e);break;case"touchend":case"MSPointerUp":case"mouseup":case"touchcancel":case"MSPointerCancel":case"mousecancel":this._end(e);break;case"orientationchange":case"resize":this._resize();break;case"transitionend":case"webkitTransitionEnd":case"oTransitionEnd":case"MSTransitionEnd":this._transitionEnd(e);break;case"DOMMouseScroll":case"mousewheel":this._wheel(e);break;case"keydown":this._key(e)}}},u.prototype={handleEvent:function(e){switch(e.type){case"touchstart":case"MSPointerDown":case"mousedown":this._start(e);break;case"touchmove":case"MSPointerMove":case"mousemove":this._move(e);break;case"touchend":case"MSPointerUp":case"mouseup":case"touchcancel":case"MSPointerCancel":case"mousecancel":this._end(e)}},destroy:function(){this.options.interactive&&(i.removeEvent(this.indicator,"touchstart",this),i.removeEvent(this.indicator,"MSPointerDown",this),i.removeEvent(this.indicator,"mousedown",this),i.removeEvent(e,"touchmove",this),i.removeEvent(e,"MSPointerMove",this),i.removeEvent(e,"mousemove",this),i.removeEvent(e,"touchend",this),i.removeEvent(e,"MSPointerUp",this),i.removeEvent(e,"mouseup",this)),this.options.defaultScrollbars&&this.wrapper.parentNode.removeChild(this.wrapper)},_start:function(t){var n=t.touches?t.touches[0]:t;t.preventDefault(),t.stopPropagation(),this.transitionTime(0),this.initiated=!0,this.moved=!1,this.lastPointX=n.pageX,this.lastPointY=n.pageY,this.startTime=i.getTime(),i.addEvent(e,"touchmove",this),i.addEvent(e,"MSPointerMove",this),i.addEvent(e,"mousemove",this),this.scroller._execEvent("scrollStart")},_move:function(e){var t=e.touches?e.touches[0]:e,n,r,s,o,u=i.getTime();this.moved=!0,n=t.pageX-this.lastPointX,this.lastPointX=t.pageX,r=t.pageY-this.lastPointY,this.lastPointY=t.pageY,s=this.x+n,o=this.y+r,this._pos(s,o),e.preventDefault(),
e.stopPropagation()},_end:function(t){if(!this.initiated)return;this.initiated=!1,t.preventDefault(),t.stopPropagation(),i.removeEvent(e,"touchmove",this),i.removeEvent(e,"MSPointerMove",this),i.removeEvent(e,"mousemove",this),this.moved&&this.scroller._execEvent("scrollEnd")},transitionTime:function(e){e=e||0,this.indicatorStyle[i.style.transitionDuration]=e+"ms"},transitionTimingFunction:function(e){this.indicatorStyle[i.style.transitionTimingFunction]=e},refresh:function(){this.transitionTime(0),this.options.listenX&&!this.options.listenY?this.indicatorStyle.display=this.scroller.hasHorizontalScroll?"block":"none":this.options.listenY&&!this.options.listenX?this.indicatorStyle.display=this.scroller.hasVerticalScroll?"block":"none":this.indicatorStyle.display=this.scroller.hasHorizontalScroll||this.scroller.hasVerticalScroll?"block":"none",this.scroller.hasHorizontalScroll&&this.scroller.hasVerticalScroll?(i.addClass(this.wrapper,"iScrollBothScrollbars"),i.removeClass(this.wrapper,"iScrollLoneScrollbar"),this.options.defaultScrollbars&&this.options.customStyle&&(this.options.listenX?this.wrapper.style.right="8px":this.wrapper.style.bottom="8px")):(i.removeClass(this.wrapper,"iScrollBothScrollbars"),i.addClass(this.wrapper,"iScrollLoneScrollbar"),this.options.defaultScrollbars&&this.options.customStyle&&(this.options.listenX?this.wrapper.style.right="2px":this.wrapper.style.bottom="2px"));var e=this.wrapper.offsetHeight;this.options.listenX&&(this.wrapperWidth=this.wrapper.clientWidth,this.options.resize?(this.indicatorWidth=n.max(n.round(this.wrapperWidth*this.wrapperWidth/this.scroller.scrollerWidth),8),this.indicatorStyle.width=this.indicatorWidth+"px"):this.indicatorWidth=this.indicator.clientWidth,this.maxPosX=this.wrapperWidth-this.indicatorWidth,this.sizeRatioX=this.options.speedRatioX||this.scroller.maxScrollX&&this.maxPosX/this.scroller.maxScrollX),this.options.listenY&&(this.wrapperHeight=this.wrapper.clientHeight,this.options.resize?(this.indicatorHeight=n.max(n.round(this.wrapperHeight*this.wrapperHeight/this.scroller.scrollerHeight),8),this.indicatorStyle.height=this.indicatorHeight+"px"):this.indicatorHeight=this.indicator.clientHeight,this.maxPosY=this.wrapperHeight-this.indicatorHeight,this.sizeRatioY=this.options.speedRatioY||this.scroller.maxScrollY&&this.maxPosY/this.scroller.maxScrollY),this.updatePosition()},updatePosition:function(){var e=n.round(this.sizeRatioX*this.scroller.x)||0,t=n.round(this.sizeRatioY*this.scroller.y)||0;this.options.ignoreBoundaries||(e<0?e=0:e>this.maxPosX&&(e=this.maxPosX),t<0?t=0:t>this.maxPosY&&(t=this.maxPosY)),this.x=e,this.y=t,this.scroller.options.useTransform?this.indicatorStyle[i.style.transform]="translate("+e+"px,"+t+"px)"+this.scroller.translateZ:(this.indicatorStyle.left=e+"px",this.indicatorStyle.top=t+"px")},_pos:function(e,t){e<0?e=0:e>this.maxPosX&&(e=this.maxPosX),t<0?t=0:t>this.maxPosY&&(t=this.maxPosY),e=this.options.listenX?n.round(e/this.sizeRatioX):this.scroller.x,t=this.options.listenY?n.round(t/this.sizeRatioY):this.scroller.y,this.scroller.scrollTo(e,t)}},s.ease=i.ease,s}(window,document,Math);
/*
*  *  Hyphenator 3.3.0 - client side hyphenation for webbrowsers
*  *  Copyright (C) 2011  Mathias Nater, Zürich (mathias at mnn dot ch)
*  *  Project and Source hosted on http://code.google.com/p/hyphenator/
*  * 
*  *  This JavaScript code is free software: you can redistribute
*  *  it and/or modify it under the terms of the GNU Lesser
*  *  General Public License (GNU LGPL) as published by the Free Software
*  *  Foundation, either version 3 of the License, or (at your option)
*  *  any later version.  The code is distributed WITHOUT ANY WARRANTY;
*  *  without even the implied warranty of MERCHANTABILITY or FITNESS
*  *  FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details.
*  *
*  *  As additional permission under GNU GPL version 3 section 7, you
*  *  may distribute non-source (e.g., minimized or compacted) forms of
*  *  that code without the copy of the GNU GPL normally required by
*  *  section 4, provided you include this license notice and a URL
*  *  through which recipients can access the Corresponding Source.
*  */

var Hyphenator=(function(window){var
supportedLang={'be':'be.js','ca':'ca.js','cs':'cs.js','da':'da.js','bn':'bn.js','de':'de.js','el':'el-monoton.js','el-monoton':'el-monoton.js','el-polyton':'el-polyton.js','en':'en-us.js','en-gb':'en-gb.js','en-us':'en-us.js','es':'es.js','fi':'fi.js','fr':'fr.js','grc':'grc.js','gu':'gu.js','hi':'hi.js','hu':'hu.js','hy':'hy.js','it':'it.js','kn':'kn.js','la':'la.js','lt':'lt.js','lv':'lv.js','ml':'ml.js','no':'no-nb.js','no-nb':'no-nb.js','nl':'nl.js','or':'or.js','pa':'pa.js','pl':'pl.js','pt':'pt.js','ru':'ru.js','sl':'sl.js','sv':'sv.js','ta':'ta.js','te':'te.js','tr':'tr.js','uk':'uk.js'},languageHint=(function(){var k,r='';for(k in supportedLang){if(supportedLang.hasOwnProperty(k)){r+=k+', ';}}r=r.substring(0,r.length-2);return r;}()),prompterStrings={'be':'Мова гэтага сайта не можа быць вызначаны аўтаматычна. Калі ласка пакажыце мову:','cs':'Jazyk této internetové stránky nebyl automaticky rozpoznán. Určete prosím její jazyk:','da':'Denne websides sprog kunne ikke bestemmes. Angiv venligst sprog:','de':'Die Sprache dieser Webseite konnte nicht automatisch bestimmt werden. Bitte Sprache angeben:','en':'The language of this website could not be determined automatically. Please indicate the main language:','es':'El idioma del sitio no pudo determinarse autom%E1ticamente. Por favor, indique el idioma principal:','fi':'Sivun kielt%E4 ei tunnistettu automaattisesti. M%E4%E4rit%E4 sivun p%E4%E4kieli:','fr':'La langue de ce site n%u2019a pas pu %EAtre d%E9termin%E9e automatiquement. Veuillez indiquer une langue, s.v.p.%A0:','hu':'A weboldal nyelvét nem sikerült automatikusan megállapítani. Kérem adja meg a nyelvet:','hy':'Չհաջողվեց հայտնաբերել այս կայքի լեզուն։ Խնդրում ենք նշեք հիմնական լեզուն՝','it':'Lingua del sito sconosciuta. Indicare una lingua, per favore:','kn':'ಜಾಲ ತಾಣದ ಭಾಷೆಯನ್ನು ನಿರ್ಧರಿಸಲು ಸಾಧ್ಯವಾಗುತ್ತಿಲ್ಲ. ದಯವಿಟ್ಟು ಮುಖ್ಯ ಭಾಷೆಯನ್ನು ಸೂಚಿಸಿ:','lt':'Nepavyko automatiškai nustatyti šios svetainės kalbos. Prašome įvesti kalbą:','lv':'Šīs lapas valodu nevarēja noteikt automātiski. Lūdzu norādiet pamata valodu:','ml':'ഈ വെ%u0D2C%u0D4D%u200Cസൈറ്റിന്റെ ഭാഷ കണ്ടുപിടിയ്ക്കാ%u0D28%u0D4D%u200D കഴിഞ്ഞില്ല. ഭാഷ ഏതാണെന്നു തിരഞ്ഞെടുക്കുക:','nl':'De taal van deze website kan niet automatisch worden bepaald. Geef de hoofdtaal op:','no':'Nettstedets språk kunne ikke finnes automatisk. Vennligst oppgi språk:','pt':'A língua deste site não pôde ser determinada automaticamente. Por favor indique a língua principal:','ru':'Язык этого сайта не может быть определен автоматически. Пожалуйста укажите язык:','sl':'Jezika te spletne strani ni bilo mogoče samodejno določiti. Prosim navedite jezik:','sv':'Spr%E5ket p%E5 den h%E4r webbplatsen kunde inte avg%F6ras automatiskt. V%E4nligen ange:','tr':'Bu web sitesinin dili otomatik olarak tespit edilememiştir. Lütfen dökümanın dilini seçiniz%A0:','uk':'Мова цього веб-сайту не може бути визначена автоматично. Будь ласка, вкажіть головну мову:'},basePath=(function(){var s=document.getElementsByTagName('script'),i=0,p,src,t;while(!!(t=s[i++])){if(!t.src){continue;}src=t.src;p=src.indexOf('Hyphenator.js');if(p!==-1){return src.substring(0,p);}}return'http://hyphenator.googlecode.com/svn/trunk/';}()),isLocal=(function(){var re=false;if(window.location.href.indexOf(basePath)!==-1){re=true;}return re;}()),documentLoaded=false,documentCount=0,persistentConfig=false,contextWindow=window,doFrames=false,dontHyphenate={'script':true,'code':true,'pre':true,'img':true,'br':true,'samp':true,'kbd':true,'var':true,'abbr':true,'acronym':true,'sub':true,'sup':true,'button':true,'option':true,'label':true,'textarea':true,'input':true},enableCache=true,storageType='local',storage,enableReducedPatternSet=false,enableRemoteLoading=true,displayToggleBox=false,hyphenateClass='hyphenate',dontHyphenateClass='donthyphenate',min=6,orphanControl=1,isBookmarklet=(function(){var loc=null,re=false,jsArray=document.getElementsByTagName('script'),i,l;for(i=0,l=jsArray.length;i<l;i++){if(!!jsArray[i].getAttribute('src')){loc=jsArray[i].getAttribute('src');}if(!loc){continue;}else if(loc.indexOf('Hyphenator.js?bm=true')!==-1){re=true;}}return re;}()),mainLanguage=null,defaultLanguage='',elements=[],exceptions={},countObjProps=function(obj){var k,l=0;for(k in obj){if(obj.hasOwnProperty(k)){l++;}}return l;},docLanguages={},state=0,url='(\\w*:\/\/)?((\\w*:)?(\\w*)@)?((([\\d]{1,3}\\.){3}([\\d]{1,3}))|((www\\.|[a-zA-Z]\\.)?[a-zA-Z0-9\\-\\.]+\\.([a-z]{2,4})))(:\\d*)?(\/[\\w#!:\\.?\\+=&%@!\\-]*)*',mail='[\\w-\\.]+@[\\w\\.]+',urlOrMailRE=new RegExp('('+url+')|('+mail+')','i'),zeroWidthSpace=(function(){var zws,ua=navigator.userAgent.toLowerCase();zws=String.fromCharCode(8203);if(ua.indexOf('msie 6')!==-1){zws='';}if(ua.indexOf('opera')!==-1&&ua.indexOf('version/10.00')!==-1){zws='';}return zws;}()),createElem=function(tagname,context){context=context||contextWindow;if(document.createElementNS){return context.document.createElementNS('http://www.w3.org/1999/xhtml',tagname);}else if(document.createElement){return context.document.createElement(tagname);}},onHyphenationDone=function(){},onError=function(e){/*window.alert("Hyphenator.js says:\n\nAn Error ocurred:\n"+e.message);*/},selectorFunction=function(){var tmp,el=[],i,l;if(document.getElementsByClassName){el=contextWindow.document.getElementsByClassName(hyphenateClass);}else{tmp=contextWindow.document.getElementsByTagName('*');l=tmp.length;for(i=0;i<l;i++){if(tmp[i].className.indexOf(hyphenateClass)!==-1&&tmp[i].className.indexOf(dontHyphenateClass)===-1){el.push(tmp[i]);}}}return el;},intermediateState='hidden',hyphen=String.fromCharCode(173),urlhyphen=zeroWidthSpace,safeCopy=true,Expando=(function(){var container={},name="HyphenatorExpando_"+Math.random(),uuid=0;return{getDataForElem:function(elem){return container[elem[name].id];},setDataForElem:function(elem,data){var id;if(elem[name]&&elem[name].id!==''){id=elem[name].id;}else{id=uuid++;elem[name]={'id':id};}container[id]=data;},appendDataForElem:function(elem,data){var k;for(k in data){if(data.hasOwnProperty(k)){container[elem[name].id][k]=data[k];}}},delDataOfElem:function(elem){delete container[elem[name]];}};}()),runOnContentLoaded=function(w,f){var DOMContentLoaded=function(){},toplevel,hyphRunForThis={};if(documentLoaded&&!hyphRunForThis[w.location.href]){f();hyphRunForThis[w.location.href]=true;return;}function init(context){contextWindow=context||window;if(!hyphRunForThis[contextWindow.location.href]&&(!documentLoaded||contextWindow!=window.parent)){documentLoaded=true;f();hyphRunForThis[contextWindow.location.href]=true;}}function doScrollCheck(){try{document.documentElement.doScroll("left");}catch(error){setTimeout(doScrollCheck,1);return;}init(window);}function doOnLoad(){var i,haveAccess,fl=window.frames.length;if(doFrames&&fl>0){for(i=0;i<fl;i++){haveAccess=undefined;try{haveAccess=window.frames[i].document.toString();}catch(e){haveAccess=undefined;}if(!!haveAccess){init(window.frames[i]);}}contextWindow=window;f();hyphRunForThis[window.location.href]=true;}else{init(window);}}if(document.addEventListener){DOMContentLoaded=function(){document.removeEventListener("DOMContentLoaded",DOMContentLoaded,false);if(doFrames&&window.frames.length>0){return;}else{init(window);}};}else if(document.attachEvent){DOMContentLoaded=function(){if(document.readyState==="complete"){document.detachEvent("onreadystatechange",DOMContentLoaded);if(doFrames&&window.frames.length>0){return;}else{init(window);}}};}if(document.addEventListener){document.addEventListener("DOMContentLoaded",DOMContentLoaded,false);window.addEventListener("load",doOnLoad,false);}else if(document.attachEvent){document.attachEvent("onreadystatechange",DOMContentLoaded);window.attachEvent("onload",doOnLoad);toplevel=false;try{toplevel=window.frameElement===null;}catch(e){}if(document.documentElement.doScroll&&toplevel){doScrollCheck();}}},getLang=function(el,fallback){if(!!el.getAttribute('lang')){return el.getAttribute('lang').toLowerCase();}try{if(!!el.getAttribute('xml:lang')){return el.getAttribute('xml:lang').toLowerCase();}}catch(ex){}if(el.tagName!=='HTML'){return getLang(el.parentNode,true);}if(fallback){return mainLanguage;}return null;},autoSetMainLanguage=function(w){w=w||contextWindow;var el=w.document.getElementsByTagName('html')[0],m=w.document.getElementsByTagName('meta'),i,text,e,ul;mainLanguage=getLang(el,false);if(!mainLanguage){for(i=0;i<m.length;i++){if(!!m[i].getAttribute('http-equiv')&&(m[i].getAttribute('http-equiv').toLowerCase()==='content-language')){mainLanguage=m[i].getAttribute('content').toLowerCase();}if(!!m[i].getAttribute('name')&&(m[i].getAttribute('name').toLowerCase()==='dc.language')){mainLanguage=m[i].getAttribute('content').toLowerCase();}if(!!m[i].getAttribute('name')&&(m[i].getAttribute('name').toLowerCase()==='language')){mainLanguage=m[i].getAttribute('content').toLowerCase();}}}if(!mainLanguage&&doFrames&&contextWindow!=window.parent){autoSetMainLanguage(window.parent);}if(!mainLanguage&&defaultLanguage!==''){mainLanguage=defaultLanguage;}if(!mainLanguage){text='';ul=navigator.language?navigator.language:navigator.userLanguage;ul=ul.substring(0,2);if(prompterStrings.hasOwnProperty(ul)){text=prompterStrings[ul];}else{text=prompterStrings.en;}text+=' (ISO 639-1)\n\n'+languageHint;mainLanguage=window.prompt(unescape(text),ul).toLowerCase();}if(!supportedLang.hasOwnProperty(mainLanguage)){if(supportedLang.hasOwnProperty(mainLanguage.split('-')[0])){mainLanguage=mainLanguage.split('-')[0];}else{e=new Error('The language "'+mainLanguage+'" is not yet supported.');throw e;}}},gatherDocumentInfos=function(){var elToProcess,tmp,i=0,process=function(el,hide,lang){var n,i=0,hyphenatorSettings={};if(hide&&intermediateState==='hidden'){if(!!el.getAttribute('style')){hyphenatorSettings.hasOwnStyle=true;}else{hyphenatorSettings.hasOwnStyle=false;}hyphenatorSettings.isHidden=true;el.style.visibility='hidden';}if(el.lang&&typeof(el.lang)==='string'){hyphenatorSettings.language=el.lang.toLowerCase();}else if(lang){hyphenatorSettings.language=lang.toLowerCase();}else{hyphenatorSettings.language=getLang(el,true);}lang=hyphenatorSettings.language;if(supportedLang[lang]){docLanguages[lang]=true;}else{if(supportedLang.hasOwnProperty(lang.split('-')[0])){lang=lang.split('-')[0];hyphenatorSettings.language=lang;}else if(!isBookmarklet){onError(new Error('Language '+lang+' is not yet supported.'));}}Expando.setDataForElem(el,hyphenatorSettings);elements.push(el);while(!!(n=el.childNodes[i++])){if(n.nodeType===1&&!dontHyphenate[n.nodeName.toLowerCase()]&&n.className.indexOf(dontHyphenateClass)===-1&&!(n in elToProcess)){process(n,false,lang);}}};if(isBookmarklet){elToProcess=contextWindow.document.getElementsByTagName('body')[0];process(elToProcess,false,mainLanguage);}else{elToProcess=selectorFunction();while(!!(tmp=elToProcess[i++])){process(tmp,true,'');}}if(!Hyphenator.languages.hasOwnProperty(mainLanguage)){docLanguages[mainLanguage]=true;}else if(!Hyphenator.languages[mainLanguage].prepared){docLanguages[mainLanguage]=true;}if(elements.length>0){Expando.appendDataForElem(elements[elements.length-1],{isLast:true});}},convertPatterns=function(lang){var plen,anfang,ende,pats,pat,key,tmp={};pats=Hyphenator.languages[lang].patterns;for(plen in pats){if(pats.hasOwnProperty(plen)){plen=parseInt(plen,10);anfang=0;ende=plen;while(!!(pat=pats[plen].substring(anfang,ende))){key=pat.replace(/\d/g,'');tmp[key]=pat;anfang=ende;ende+=plen;}}}Hyphenator.languages[lang].patterns=tmp;Hyphenator.languages[lang].patternsConverted=true;},convertExceptionsToObject=function(exc){var w=exc.split(', '),r={},i,l,key;for(i=0,l=w.length;i<l;i++){key=w[i].replace(/-/g,'');if(!r.hasOwnProperty(key)){r[key]=w[i];}}return r;},loadPatterns=function(lang){var url,xhr,head,script;if(supportedLang[lang]&&!Hyphenator.languages[lang]){url=basePath+'patterns/'+supportedLang[lang];}else{return;}if(isLocal&&!isBookmarklet){xhr=null;if(typeof XMLHttpRequest!=='undefined'){xhr=new XMLHttpRequest();}if(!xhr){try{xhr=new ActiveXObject("Msxml2.XMLHTTP");}catch(e){xhr=null;}}if(xhr){xhr.open('HEAD',url,false);xhr.setRequestHeader('Cache-Control','no-cache');xhr.send(null);if(xhr.status===404){onError(new Error('Could not load\n'+url));delete docLanguages[lang];return;}}}if(createElem){head=window.document.getElementsByTagName('head').item(0);script=createElem('script',window);script.src=url;script.type='text/javascript';head.appendChild(script);}},prepareLanguagesObj=function(lang){var lo=Hyphenator.languages[lang],wrd;if(!lo.prepared){if(enableCache){lo.cache={};lo['cache']=lo.cache;}if(enableReducedPatternSet){lo.redPatSet={};}if(lo.hasOwnProperty('exceptions')){Hyphenator.addExceptions(lang,lo.exceptions);delete lo.exceptions;}if(exceptions.hasOwnProperty('global')){if(exceptions.hasOwnProperty(lang)){exceptions[lang]+=', '+exceptions.global;}else{exceptions[lang]=exceptions.global;}}if(exceptions.hasOwnProperty(lang)){lo.exceptions=convertExceptionsToObject(exceptions[lang]);delete exceptions[lang];}else{lo.exceptions={};}convertPatterns(lang);wrd='[\\w'+lo.specialChars+'@'+String.fromCharCode(173)+String.fromCharCode(8204)+'-]{'+min+',}';lo.genRegExp=new RegExp('('+url+')|('+mail+')|('+wrd+')','gi');lo.prepared=true;}if(!!storage){try{storage.setItem('Hyphenator_'+lang,window.JSON.stringify(lo));}catch(e){}}},prepare=function(callback){var lang,interval,tmp1,tmp2;if(!enableRemoteLoading){for(lang in Hyphenator.languages){if(Hyphenator.languages.hasOwnProperty(lang)){prepareLanguagesObj(lang);}}state=2;callback();return;}state=1;for(lang in docLanguages){if(docLanguages.hasOwnProperty(lang)){if(!!storage&&storage.getItem('Hyphenator_'+lang)){Hyphenator.languages[lang]=window.JSON.parse(storage.getItem('Hyphenator_'+lang));if(exceptions.hasOwnProperty('global')){tmp1=convertExceptionsToObject(exceptions.global);for(tmp2 in tmp1){if(tmp1.hasOwnProperty(tmp2)){Hyphenator.languages[lang].exceptions[tmp2]=tmp1[tmp2];}}}if(exceptions.hasOwnProperty(lang)){tmp1=convertExceptionsToObject(exceptions[lang]);for(tmp2 in tmp1){if(tmp1.hasOwnProperty(tmp2)){Hyphenator.languages[lang].exceptions[tmp2]=tmp1[tmp2];}}delete exceptions[lang];}tmp1='[\\w'+Hyphenator.languages[lang].specialChars+'@'+String.fromCharCode(173)+String.fromCharCode(8204)+'-]{'+min+',}';Hyphenator.languages[lang].genRegExp=new RegExp('('+url+')|('+mail+')|('+tmp1+')','gi');delete docLanguages[lang];continue;}else{loadPatterns(lang);}}}if(countObjProps(docLanguages)===0){state=2;callback();return;}interval=window.setInterval(function(){var finishedLoading=true,lang;for(lang in docLanguages){if(docLanguages.hasOwnProperty(lang)){finishedLoading=false;if(!!Hyphenator.languages[lang]){delete docLanguages[lang];prepareLanguagesObj(lang);}}}if(finishedLoading){window.clearInterval(interval);state=2;callback();}},100);},toggleBox=function(){var myBox,bdy,myIdAttribute,myTextNode,myClassAttribute,text=(Hyphenator.doHyphenation?'Hy-phen-a-tion':'Hyphenation');if(!!(myBox=contextWindow.document.getElementById('HyphenatorToggleBox'))){myBox.firstChild.data=text;}else{bdy=contextWindow.document.getElementsByTagName('body')[0];myBox=createElem('div',contextWindow);myIdAttribute=contextWindow.document.createAttribute('id');myIdAttribute.nodeValue='HyphenatorToggleBox';myClassAttribute=contextWindow.document.createAttribute('class');myClassAttribute.nodeValue=dontHyphenateClass;myTextNode=contextWindow.document.createTextNode(text);myBox.appendChild(myTextNode);myBox.setAttributeNode(myIdAttribute);myBox.setAttributeNode(myClassAttribute);myBox.onclick=Hyphenator.toggleHyphenation;myBox.style.position='absolute';myBox.style.top='0px';myBox.style.right='0px';myBox.style.margin='0';myBox.style.backgroundColor='#AAAAAA';myBox.style.color='#FFFFFF';myBox.style.font='6pt Arial';myBox.style.letterSpacing='0.2em';myBox.style.padding='3px';myBox.style.cursor='pointer';myBox.style.WebkitBorderBottomLeftRadius='4px';myBox.style.MozBorderRadiusBottomleft='4px';bdy.appendChild(myBox);}},hyphenateWord=function(lang,word){var lo=Hyphenator.languages[lang],parts,i,l,w,wl,s,hypos,p,maxwins,win,pat=false,patk,c,t,n,numb3rs,inserted,hyphenatedword,val,subst,ZWNJpos=[];if(word===''){return'';}if(word.indexOf(hyphen)!==-1){return word;}if(enableCache&&lo.cache.hasOwnProperty(word)){return lo.cache[word];}if(lo.exceptions.hasOwnProperty(word)){return lo.exceptions[word].replace(/-/g,hyphen);}if(word.indexOf('-')!==-1){parts=word.split('-');for(i=0,l=parts.length;i<l;i++){parts[i]=hyphenateWord(lang,parts[i]);}return parts.join('-');}w='_'+word+'_';if(word.indexOf(String.fromCharCode(8204))!==-1){parts=w.split(String.fromCharCode(8204));w=parts.join('');for(i=0,l=parts.length;i<l;i++){parts[i]=parts[i].length.toString();}parts.pop();ZWNJpos=parts;}wl=w.length;s=w.split('');if(!!lo.charSubstitution){for(subst in lo.charSubstitution){if(lo.charSubstitution.hasOwnProperty(subst)){w=w.replace(new RegExp(subst,'g'),lo.charSubstitution[subst]);}}}if(word.indexOf("'")!==-1){w=w.toLowerCase().replace("'","’");}else{w=w.toLowerCase();}hypos=[];numb3rs={'0':0,'1':1,'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9};n=wl-lo.shortestPattern;for(p=0;p<=n;p++){maxwins=Math.min((wl-p),lo.longestPattern);for(win=lo.shortestPattern;win<=maxwins;win++){if(lo.patterns.hasOwnProperty(patk=w.substring(p,p+win))){pat=lo.patterns[patk];if(enableReducedPatternSet&&(typeof pat==='string')){lo.redPatSet[patk]=pat;}if(typeof pat==='string'){t=0;val=[];for(i=0;i<pat.length;i++){if(!!(c=numb3rs[pat.charAt(i)])){val.push(i-t,c);t++;}}pat=lo.patterns[patk]=val;}}else{continue;}for(i=0;i<pat.length;i++){c=p-1+pat[i];if(!hypos[c]||hypos[c]<pat[i+1]){hypos[c]=pat[i+1];}i++;}}}inserted=0;for(i=lo.leftmin;i<=(wl-2-lo.rightmin);i++){if(ZWNJpos.length>0&&ZWNJpos[0]===i){ZWNJpos.shift();s.splice(i+inserted-1,0,String.fromCharCode(8204));inserted++;}if(!!(hypos[i]&1)){s.splice(i+inserted+1,0,hyphen);inserted++;}}hyphenatedword=s.slice(1,-1).join('');if(enableCache){lo.cache[word]=hyphenatedword;}return hyphenatedword;},hyphenateURL=function(url){return url.replace(/([:\/\.\?#&_,;!@]+)/gi,'$&'+urlhyphen);},removeHyphenationFromElement=function(el){var h,i=0,n;switch(hyphen){case'|':h='\\|';break;case'+':h='\\+';break;case'*':h='\\*';break;default:h=hyphen;}while(!!(n=el.childNodes[i++])){if(n.nodeType===3){n.data=n.data.replace(new RegExp(h,'g'),'');n.data=n.data.replace(new RegExp(zeroWidthSpace,'g'),'');}else if(n.nodeType===1){removeHyphenationFromElement(n);}}},registerOnCopy=function(el){var body=el.ownerDocument.getElementsByTagName('body')[0],shadow,selection,range,rangeShadow,restore,oncopyHandler=function(e){e=e||window.event;var target=e.target||e.srcElement,currDoc=target.ownerDocument,body=currDoc.getElementsByTagName('body')[0],targetWindow='defaultView'in currDoc?currDoc.defaultView:currDoc.parentWindow;if(target.tagName&&dontHyphenate[target.tagName.toLowerCase()]){return;}shadow=currDoc.createElement('div');shadow.style.overflow='hidden';shadow.style.position='absolute';shadow.style.top='-5000px';shadow.style.height='1px';body.appendChild(shadow);if(!!window.getSelection){selection=targetWindow.getSelection();range=selection.getRangeAt(0);shadow.appendChild(range.cloneContents());removeHyphenationFromElement(shadow);selection.selectAllChildren(shadow);restore=function(){shadow.parentNode.removeChild(shadow);selection.addRange(range);};}else{selection=targetWindow.document.selection;range=selection.createRange();shadow.innerHTML=range.htmlText;removeHyphenationFromElement(shadow);rangeShadow=body.createTextRange();rangeShadow.moveToElementText(shadow);rangeShadow.select();restore=function(){shadow.parentNode.removeChild(shadow);if(range.text!==""){range.select();}};}window.setTimeout(restore,0);};if(!body){return;}el=el||body;if(window.addEventListener){el.addEventListener("copy",oncopyHandler,false);}else{el.attachEvent("oncopy",oncopyHandler);}},hyphenateElement=function(el){var hyphenatorSettings=Expando.getDataForElem(el),lang=hyphenatorSettings.language,hyphenate,n,i,controlOrphans=function(part){var h,r;switch(hyphen){case'|':h='\\|';break;case'+':h='\\+';break;case'*':h='\\*';break;default:h=hyphen;}if(orphanControl>=2){r=part.split(' ');r[1]=r[1].replace(new RegExp(h,'g'),'');r[1]=r[1].replace(new RegExp(zeroWidthSpace,'g'),'');r=r.join(' ');}if(orphanControl===3){r=r.replace(/[ ]+/g,String.fromCharCode(160));}return r;};if(Hyphenator.languages.hasOwnProperty(lang)){hyphenate=function(word){if(!Hyphenator.doHyphenation){return word;}else if(urlOrMailRE.test(word)){return hyphenateURL(word);}else{return hyphenateWord(lang,word);}};if(safeCopy&&(el.tagName.toLowerCase()!=='body')){registerOnCopy(el);}i=0;while(!!(n=el.childNodes[i++])){if(n.nodeType===3&&n.data.length>=min){n.data=n.data.replace(Hyphenator.languages[lang].genRegExp,hyphenate);if(orphanControl!==1){n.data=n.data.replace(/[\S]+ [\S]+$/,controlOrphans);}}}}if(hyphenatorSettings.isHidden&&intermediateState==='hidden'){el.style.visibility='visible';if(!hyphenatorSettings.hasOwnStyle){el.setAttribute('style','');el.removeAttribute('style');}else{if(el.style.removeProperty){el.style.removeProperty('visibility');}else if(el.style.removeAttribute){el.style.removeAttribute('visibility');}}}if(hyphenatorSettings.isLast){state=3;documentCount--;if(documentCount>(-1000)&&documentCount<=0){documentCount=(-2000);onHyphenationDone();}}},hyphenateDocument=function(){function bind(fun,arg){return function(){return fun(arg);};}var i=0,el;while(!!(el=elements[i++])){if(el.ownerDocument.location.href===contextWindow.location.href){window.setTimeout(bind(hyphenateElement,el),0);}}},removeHyphenationFromDocument=function(){var i=0,el;while(!!(el=elements[i++])){removeHyphenationFromElement(el);}state=4;},createStorage=function(){try{if(storageType!=='none'&&typeof(window.localStorage)!=='undefined'&&typeof(window.sessionStorage)!=='undefined'&&typeof(window.JSON.stringify)!=='undefined'&&typeof(window.JSON.parse)!=='undefined'){switch(storageType){case'session':storage=window.sessionStorage;break;case'local':storage=window.localStorage;break;default:storage=undefined;break;}}}catch(f){}},storeConfiguration=function(){if(!storage){return;}var settings={'STORED':true,'classname':hyphenateClass,'donthyphenateclassname':dontHyphenateClass,'minwordlength':min,'hyphenchar':hyphen,'urlhyphenchar':urlhyphen,'togglebox':toggleBox,'displaytogglebox':displayToggleBox,'remoteloading':enableRemoteLoading,'enablecache':enableCache,'onhyphenationdonecallback':onHyphenationDone,'onerrorhandler':onError,'intermediatestate':intermediateState,'selectorfunction':selectorFunction,'safecopy':safeCopy,'doframes':doFrames,'storagetype':storageType,'orphancontrol':orphanControl,'dohyphenation':Hyphenator.doHyphenation,'persistentconfig':persistentConfig,'defaultlanguage':defaultLanguage};storage.setItem('Hyphenator_config',window.JSON.stringify(settings));},restoreConfiguration=function(){var settings;if(storage.getItem('Hyphenator_config')){settings=window.JSON.parse(storage.getItem('Hyphenator_config'));Hyphenator.config(settings);}};return{version:'3.3.0',doHyphenation:true,languages:{},config:function(obj){var assert=function(name,type){if(typeof obj[name]===type){return true;}else{onError(new Error('Config onError: '+name+' must be of type '+type));return false;}},key;if(obj.hasOwnProperty('storagetype')){if(assert('storagetype','string')){storageType=obj.storagetype;}if(!storage){createStorage();}}if(!obj.hasOwnProperty('STORED')&&storage&&obj.hasOwnProperty('persistentconfig')&&obj.persistentconfig===true){restoreConfiguration();}for(key in obj){if(obj.hasOwnProperty(key)){switch(key){case'STORED':break;case'classname':if(assert('classname','string')){hyphenateClass=obj[key];}break;case'donthyphenateclassname':if(assert('donthyphenateclassname','string')){dontHyphenateClass=obj[key];}break;case'minwordlength':if(assert('minwordlength','number')){min=obj[key];}break;case'hyphenchar':if(assert('hyphenchar','string')){if(obj.hyphenchar==='&shy;'){obj.hyphenchar=String.fromCharCode(173);}hyphen=obj[key];}break;case'urlhyphenchar':if(obj.hasOwnProperty('urlhyphenchar')){if(assert('urlhyphenchar','string')){urlhyphen=obj[key];}}break;case'togglebox':if(assert('togglebox','function')){toggleBox=obj[key];}break;case'displaytogglebox':if(assert('displaytogglebox','boolean')){displayToggleBox=obj[key];}break;case'remoteloading':if(assert('remoteloading','boolean')){enableRemoteLoading=obj[key];}break;case'enablecache':if(assert('enablecache','boolean')){enableCache=obj[key];}break;case'enablereducedpatternset':if(assert('enablereducedpatternset','boolean')){enableReducedPatternSet=obj[key];}break;case'onhyphenationdonecallback':if(assert('onhyphenationdonecallback','function')){onHyphenationDone=obj[key];}break;case'onerrorhandler':if(assert('onerrorhandler','function')){onError=obj[key];}break;case'intermediatestate':if(assert('intermediatestate','string')){intermediateState=obj[key];}break;case'selectorfunction':if(assert('selectorfunction','function')){selectorFunction=obj[key];}break;case'safecopy':if(assert('safecopy','boolean')){safeCopy=obj[key];}break;case'doframes':if(assert('doframes','boolean')){doFrames=obj[key];}break;case'storagetype':if(assert('storagetype','string')){storageType=obj[key];}break;case'orphancontrol':if(assert('orphancontrol','number')){orphanControl=obj[key];}break;case'dohyphenation':if(assert('dohyphenation','boolean')){Hyphenator.doHyphenation=obj[key];}break;case'persistentconfig':if(assert('persistentconfig','boolean')){persistentConfig=obj[key];}break;case'defaultlanguage':if(assert('defaultlanguage','string')){defaultLanguage=obj[key];}break;default:onError(new Error('Hyphenator.config: property '+key+' not known.'));}}}if(storage&&persistentConfig){storeConfiguration();}},run:function(){documentCount=0;var process=function(){try{if(contextWindow.document.getElementsByTagName('frameset').length>0){return;}documentCount++;autoSetMainLanguage(undefined);gatherDocumentInfos();prepare(hyphenateDocument);if(displayToggleBox){toggleBox();}}catch(e){onError(e);}},i,haveAccess,fl=window.frames.length;if(!storage){createStorage();}if(!documentLoaded&&!isBookmarklet){runOnContentLoaded(window,process);}if(isBookmarklet||documentLoaded){if(doFrames&&fl>0){for(i=0;i<fl;i++){haveAccess=undefined;try{haveAccess=window.frames[i].document.toString();}catch(e){haveAccess=undefined;}if(!!haveAccess){contextWindow=window.frames[i];process();}}}contextWindow=window;process();}},addExceptions:function(lang,words){if(lang===''){lang='global';}if(exceptions.hasOwnProperty(lang)){exceptions[lang]+=", "+words;}else{exceptions[lang]=words;}},hyphenate:function(target,lang){var hyphenate,n,i;if(Hyphenator.languages.hasOwnProperty(lang)){if(!Hyphenator.languages[lang].prepared){prepareLanguagesObj(lang);}hyphenate=function(word){if(urlOrMailRE.test(word)){return hyphenateURL(word);}else{return hyphenateWord(lang,word);}};if(typeof target==='string'||target.constructor===String){return target.replace(Hyphenator.languages[lang].genRegExp,hyphenate);}else if(typeof target==='object'){i=0;while(!!(n=target.childNodes[i++])){if(n.nodeType===3&&n.data.length>=min){n.data=n.data.replace(Hyphenator.languages[lang].genRegExp,hyphenate);}else if(n.nodeType===1){if(n.lang!==''){Hyphenator.hyphenate(n,n.lang);}else{Hyphenator.hyphenate(n,lang);}}}}}else{onError(new Error('Language "'+lang+'" is not loaded.'));}},getRedPatternSet:function(lang){return Hyphenator.languages[lang].redPatSet;},isBookmarklet:function(){return isBookmarklet;},getConfigFromURI:function(){var loc=null,re={},jsArray=document.getElementsByTagName('script'),i,j,l,s,gp,option;for(i=0,l=jsArray.length;i<l;i++){if(!!jsArray[i].getAttribute('src')){loc=jsArray[i].getAttribute('src');}if(!loc){continue;}else{s=loc.indexOf('Hyphenator.js?');if(s===-1){continue;}gp=loc.substring(s+14).split('&');for(j=0;j<gp.length;j++){option=gp[j].split('=');if(option[0]==='bm'){continue;}if(option[1]==='true'){re[option[0]]=true;continue;}if(option[1]==='false'){re[option[0]]=false;continue;}if(isFinite(option[1])){re[option[0]]=parseInt(option[1],10);continue;}if(option[0]==='onhyphenationdonecallback'){re[option[0]]=new Function('',option[1]);continue;}re[option[0]]=option[1];}break;}}return re;},toggleHyphenation:function(){if(Hyphenator.doHyphenation){removeHyphenationFromDocument();Hyphenator.doHyphenation=false;storeConfiguration();toggleBox();}else{hyphenateDocument();Hyphenator.doHyphenation=true;storeConfiguration();toggleBox();}}};}(window));Hyphenator['languages']=Hyphenator.languages;Hyphenator['config']=Hyphenator.config;Hyphenator['run']=Hyphenator.run;Hyphenator['addExceptions']=Hyphenator.addExceptions;Hyphenator['hyphenate']=Hyphenator.hyphenate;Hyphenator['getRedPatternSet']=Hyphenator.getRedPatternSet;Hyphenator['isBookmarklet']=Hyphenator.isBookmarklet;Hyphenator['getConfigFromURI']=Hyphenator.getConfigFromURI;Hyphenator['toggleHyphenation']=Hyphenator.toggleHyphenation;window['Hyphenator']=Hyphenator;if(Hyphenator.isBookmarklet()){Hyphenator.config({displaytogglebox:true,intermediatestate:'visible',doframes:true});Hyphenator.config(Hyphenator.getConfigFromURI());Hyphenator.run();}Hyphenator.languages['de']={leftmin:2,rightmin:2,shortestPattern:2,longestPattern:12,specialChars:"äüöéßſ",patterns:{3:"2aaa1äa1ba1da1g2aia1j2aoa1öa1p2aqa1ßa2ua1xä1aä1bä1dä1gä1jä1k1äqä1ß1äxä1z1bibl21cacä32cc1céc4hc1jc4k3co2cp2cs3cu1cy2dc1de1did1ö1due1be1d4eee1fe1ge1ke1m2eoe1pe1qe1ße1te3üe1wey1e1zé1bé1cé1gé1hé1lé1oé1pé1ré1sé1v1fa1fä1fe1fé1fi1fo1fö1fu1fü1fy2gd1geg1n1guh1j2hl2hnh1q2hr4hsh2ü2hwh1zi1a2iä2ici1d2ifii2i1ji1ßi1üj2u1ka1käkl21ko1kök1q2ks1kü1le1li4ln1lo1lö2lx1ly1ma3mä2mc1me1mé1mi1mo1mö1mu1mü1my1na1nä1ne1né1nin1j1noo1b2oco1d2oi2ol2omo1qo1ßo2uo1vo1xö1bö1dö1e1öf2önöo1ö1ßö1vö1wö1zp2a1päp2e1pé1php1j1puqu42rc1re1ré1ri4rnr1q1ru1rü1ry1sa1sä1sc1se1sé1si1so1sös1t1su1sü1ta1tä1tet1h1ti1to2tö2ts1tu2tü2ua2ucu1h2uiu1ju1lun12uou1q2usu1w1üb2üc2üdü1gü1k2ünü1ß2ütü1vü1zv2r2vsw2aw2ä2wnw2rw2ux1a2xc1xex1jx1q1xu2xv2xyx1zy1by1ey1gy1hy1jy1ly1py1ry1vy1wy1yzä2zu1zw2",4:"_ax4_äm3_ch2_en1_eu1_fs4_gd2_gs4_he2_ia4_in1_ks2_md2_mm2_oa3_öd2_pf4_ph4_ps2_st4_th4_ts2_um3_ur1_xe3a1abaa1ca3au2abaab1ä1abd1abf1abg1abh2abi1abkab1l1abnab3r1abs2abu2abü1abw2aby1abz2ac_2acaa1cia1cl2acuad1c1add2adf2adh5adj2ado2adp2adq2adu2a1eae2bae2cae2da2ekae2pa2eta2ewae2xaf1a2afe2afia2fö2agaag2n2agt2ah_2ahsa1huah1wa1hyaif2a2ilaje22ak_2akb2akc2akd4ako2aks1akza1laa1lä2ale2ali2aloa1lu4aly2am_2amä2amf2amk2amla2mö2amu1anb2ane1anf1anh2anj1anl2anna1nö1anra1nü1anwao1ia1opa1or2ap_2apa2apea2péa2pfap2n2apr2ar_a1raa1rä1arb2are2arf2arh2ari2arr2arua2rü2arv2ary4asha2söa2süaße22a1tata1at2cat2eat2h3atmat1ö4atra3tü2au_2aub4auc2aue2aug2auj4aum4aunau1o2auu2auw2aux2auz2a1ü2a1v4avia2vr2a1wax2eays4ay3t2a1zaz2aaz2oaz2uäb2sä1ckä2daä2dräd2s2ä1eäf3läf3räf2säg2näh1aä3hi2ähm2ähsä1huäh1wä1imä1la2äleä1lu2ämläm2s2än_2äne2änsä1onä1paär1äär1c4äreär1oä1röä2rü1ärzä3suä3teät2häu1cä2uf1äug4äul2äumä2un2äur1äuß4ä1v3bah3basb2ärb2äs4b1bb3bebb2sbbu12b1c3be_3bea3beb3bek3bel1bembe1o3bet1bezbge3bib23bilbiz24b1j2bl_b2leb2lo3blü2b1mbni2bo4abo2cboe1b1op2böf2b1qb2r42br_3brä3brü4b1sb3säb3scb4slb2söbss2bs2t4b3tb5teb4thbt4rbtü1bu2fbü1c2b1v2b1w3by1by3pbys2ca1h3camc4an3carcäs2c1cec2d2c3do2cec2cefce1i2cek1cen1cer1cetce1u2c1f4ch_2chb2chc2chd1ché2chf2chg2chh2chj2chk2chp4chs2cht4chü2chv4chw2chzci1cci2s4ck_ck1ack1ä2ckb2ckc2ckd1cke2ckf2ckg2ckh1cki2ckk2ckm2ckp4cks2ckt1cku2ckv2ckw1cky2ckzc4l2clo11cluc2m2co2ccoi2cos42c1qcre2cry2cs2ac2si4c1tcti22c1z3da_da1ad1afd1agda1sdä2ud1chd3dhd5dodeg2d1eides1det2d3gl3dicdi2edi1pdi5v2d1jd3lad3ledl3mdl3sdni2d1obdo2o2d1qd2r4d3rid3rö2d1s4dsb4dsld2södss4dst42d1td2thdto2d3tödt3rd3tüdu2fdu1idu1odur22düb3düf3dün2d1wdwa2dy2s2d1z2e1aea2ceak1eam3e2ase1ä22eba2ebl2ebre3bue1cee1ci2ecoe3cr2ected2eed2öee1eeeg2e1eie1en2ef_2efa2efe2efi2eflefs22efu2efüegd4e3gee2gn2egue1hee1hi2ehme1hoehs22ehte1hue1hüeh1we1hy4eibe2idei1ee4ilei1p2eire2it2eiu2e1jek2a1ekdek4nek2oek4r2ektek2ue1la2eli2eln2eloe1lü2elz2ema2emm2emüen3fe4nre4nten1ue1nüe1nye1ofe1ohe4ole1ore1ove1ö2e3pae3puer1ae1räer1cer3h2erie1roer1ö2eru2esbes2c2esf4eshes3l2esmes2ö2esp2esres3we3syes3ze3teet2he3tie3tö2etre3tü2etz2euf1euke1um2euneu1p2eut2eux2e1ve3vo2ewae3wä2eweew2s2ex_e1xiex3l3exp2exu1exzey4neys4e3ziez2wégi2élu2é1t2é1u2é1z2fab43facf4ahf2alf2arf3atfä1cf1äu2f1cfe2c3fewf1ex3fez2f1fff2efff4ff3lff2s3fi_fid2fi2ofi2r3fis3fiz2f1jf2l22fl_1fläf4léf3löf4lü2föf2f1qf2r2f3ruf3rü4f1sf3scf3sifs2tf2süf3sy4f1tf2thf3töf3tü3fugf1umf2ur3fut2fübfü2r2f1v2f1w2f1zfz2afz2öfzu33ga_ga1c5gaiga1kgäs5gä4ugbi22g1cg1dag1dog1dögdt4gd1uge1cged4gef4g2el4g1gg3gegg4r2g1h4gh_gh2egh1lg2hugh1w2g1j4gl_2gls3glüg2ly2gn_gn2e2gng2gnp2gns2gnt2gnug2nüg2ny2gnzgo4a2goggo1igo1y2g1qg2r4gse2g4slgso2gsp4g4swg3sy2g1tg3tegt2sg3tügu1cgu2egu2t2gübgür1güs32g1v2g1w3haah1ahh1aph2as2h1c2heahe3x2hi_2hiahi2ehi2n2hio2hiuhlb4hld4hlg4hll2hlm2h2lohl2ö2h1mh2moh3möhm2sh2muh2nah2nähn2eh1nu2hodhoe42hoih2on2hoo2hop3hov1h2öhö2ch4örhr1chr3dhrf2hrg2h2rihrr4h3rüh2ryhrz2hss24h1th2thhto2h4tshtt4h3tühu1chu2n2hurhüs32h1vhvi23hyg3hyphz2o2ia_i4aai2ab2iaci2afi2ahi2aji2ak2iali2am2iani2apia1q2iasi3au2iavi1ämiär22i1bib2oic1cice1i1cii1clidt4i2dyie1ci1eii1exif3lif3rif2s2i1gi2gli3go2i1hi3heih3mih3nih3rihs2ih1wi1iei3igi1imi1inii3t2i1k4ikei2kni1la6ilbil2cilf22iloilv42im_2ime2imo2imt2imu2inein3f2inoi1nö2inp2inrin1ui1ny2i1oio1cio2dion2i2ori2oui2ovio2xi3ön2ip_i1pai1peiph2ip4li1pr2ips2ipu2i1qi1räir1cir2eir2i2irki1roi1rö2isb2iseis3ti2sü4itäi3töi3tü2itzium12i1v2i1w2i1xi2xai3xi2i1zi2zöja1c2jatje2aje1cje2gje2pje3wji2ajit3ji2vjoa3jo2iju2kjus32j1v3ka_ka1ck2adk2agka2o3kask1ähk1änkär2kby42k3cki1c3kir2kiz2k3j4kl_k2lek1lu2kly2k1mk2n2k3nek3nu3knü3komk2onk2os3kowkö2fk1ölk2r4kst44k1tk2thktt2k3tükt3zku1ckuh12kübkü1c2k1v2k1w3la_1lad2laf1lai3lao1lawlay1lä1c1läd2läf4lät2l1blb2slb2u2l1cl3cl4l1dld3rldt43le_2lec3ledle2e3leh2leple2u3lev2l1flf4ul3fü2l1glgd4l3go3liali1cl2ie3ligli3l2limli2o3liu4l1j2l1klk2l4l1lllb4llg4llk4ll5mlln22l1mlm1clm3plm3tlnd2l3nil1nul1nü3loklo2o2lox2lödlö2f4lög4löß2l1pl3palp2fl3pu2l1q4l1s4l1tl2thl6tsltt2l3tü1luf4luo2lur3lux2lüb5lüd2l1v2l3wly3c3lynly1oly3u2l1zl2zölz1wm1abmae2ma1f3mas3maßm4aymb4lmby4m3ch2m1dmd1ameb43mehme1o2meö3mesmeu1mi1c3mig3mil3mit2m1jm3kaml3cml3lml3s2m1mmmd2mmm2mm3pmm2smoa33moh3mom3mos3motmo1ymö2c4mökm1öl2m1pm2pfm3pu2m1q2m1sm3säm3scm3sem2süm3sy4m1tm2thm3tömtt2m3tümt3zmu1a3munm4us2müb3mün3müt2m1vmwa4my4s2m1z3na_n1af3nain1ar3nas3natn1au3näe3näs2näunby42n1cn2ck2n1dnd1cn2döndy33ne_2nec3nedn1efneg4ne2l3nenne2un2ew3nez2n1fnf2änff4n3finf4lnf2onf4rnf3s4n1gng3mn2gnn3hän3hen3hu3nian1idn4ie3niknin1n2ip2nitni3v3nix2n1k4n1nnn3fnng4n3ni3no_no1cn1of3nov3now3noz2nödn2ör2n1q6n1snsp4n3sy2n1tn3ton3tön4tsn3tun3tü1nu_1nud3nuenuf21nug1nuinu2n1nuo2nup2nur1nut1nuu1nux1nuz3nü_3nüs1nüt4n1w1ny_1nyhn1yo1nyr1nys1nyw2n1znz3so4aco4ado4aho2aro2aso4ato5au2obbob2e1objob1lo3caoc1co1ceo1cio1cko1cl2odrodt4o2ecoen12ofa2ofiof3l2ofo2oft2o1go3ghogs2o1hao1häo1heo1hio1hooh1soh3to1huoh1wo3ieo1imo1inoi2r2o1j2o1kok4n4okrokt4o1lao1läo1léol2io3loo1lu3olyoms2omy12ona2onä2onc2oneono1o1nuon3v1onyon3zoof2o1opo1oro1pao1pi2or_or1ao3räor1c4ore2orf2orh2orm2orq2orro3ru2osh2osio3sk2oso2o1to3tüoub4oug2o3uho3um2our2ouv2o1ü2ovi2ovo2o1wo3wiox2aox2eox3lo2xu1oxyo1yo2o1zoz2eo3ziöb2l2ö1cödi3öf3lög3lög3rö1heö1huö1keök3r3öl_öls2öm2sön2eö3niön2sö1nuö1peör1cör1oöru4ö2saö2spö2stö3su2ö1töt2höts2öze31pa_1paa1pacpag41pak1pap1pat1pau3päd3pär3päs2p1b2p3cpda41pe_pe2a1pedpef4pei11pel1pem1pen1pep3pet4pf_1pfäpff4pf3r2p1g4ph_ph2a2phä2phb4phd2phf4phg4phkph2l2phm2phn2phöph4r2phs2phz3pik1pilpi2o3pip3pispku22pl_3pläp4lo2p1n1p2opo1c3podpo2i3pokpo2wpo3xpö2c2p1ppp3lppt2p2r2p4rä2p1s4ps_p3sep2söp2st2p1tpt1ap3tep2thptt2ptü4pt3zpu1apub42puc2pur3put1püf2pülpün22p1v2p1w3py1pys4py3t2p1z1ra_r1abr2ad1raer2afr2alr2apr1arr2as2raß1rat1raür2ax4räf4räg2räh2rämrä2u2r1brbb2rb2orb2srb2ur1cer1cir1cl2r1dr2dördt43re_2reä3reg3rekre2u2reür1ew3rez2r1frf2u4r1gr1h42rh_2rha2rhä2rhö2rhsrid2r2ie3rigr2isr2itrix12r1j2r1krk4n4r1lr3larl2erl2örl3t4r1mrm2urnd4r3nern3frng2r3nirn1ör1nur1nür1nyro1c2rof3roir2onr1or4roß2rox2röf4rögr1ök4röpr1örrp4arp4erpf4r3porp3tr3pu2r1rrrb2rr1crr2or3ru4r1sr3sirs3lr3sor3sy4r1tr3tör4tsrtt4r3türt3zru1a3ruf4rug2rum3rut4ruz2rüb2r1v2r1w4r1xry2c2r1zrz2ö3sa_3saa3sai3sams1an3sat3säl2sc_2scj2scos2cr2scs2scusd4r3see3seh3seq3set2s1hsh2as3häsh3ns3hösh4rsib43sio2s1j4sk_4skbsk4lsk4n4skö4skss3läsl3bs3les3li4sna4snö3so_so4aso1c3sog3sol3somso3o3sos3sov3sow3sozsö2csö2fs1ös1sp22sp_s2pä2spls3pn2spt4spy2s1q6s1sss3l6st_s2ta2stb2stdst2e2stf2stg4sth2stj2stk4stl4stm2stns2to1stö2stp2stqs2trst2u1stü2stv2stwsu2nsu2s3suv3süc3sün4s3v2s1ws3was3we1s4ysyl12s1zsz2os3zü2ß1b2ß1f2ß1n2ß1w3ta_4taatah22tam3tas3tav3tax4täbtä1c4täd3täe3täg2täh4tämt1äptä2st2ät2täx4t1ct4ckt3clt3cr3te_2teh3ten3tes4th_th2e1thi2thk2thp2ths2thü2thvt2hy3tig3tik3tio3tip3tis3tiv2t1j4t3ltl4e3to_to1c3tod3tok3ton3too4toß3tow4töftö4l3tön4töß3töttpf42t1q2tr_3tritry14ts_ts1ot2söt3sy4t1tt3tit3tot3töttt4t3tut3tü2tub3tuc2tud3tue4tuf2tuh2tuk4tüb3tüf3tüm4t3v4t3wtwa21ty13typtys44t1ztz1ätz2öu1amu3auu1ayu1ämu1äu2u1bub2lub1ruc1cu1ceu1ciu1cl2u1d2u1eu2edu2eguen1u2ep2uffuf3luf3r2u1gugo3u2göu2gü2uh_uh1wu1ieu3iguk2au1keu1kiuk4nuk2öu1kuulb4ulg4u2lü1umf1umg1umk4umm1umr1umz4un_u3ne2unk1unruns21unt1unw2unzu3ofuos2u1pau3piu1pr2ur_u1raurd22ure2urfu1röur3purt2u3ruurü2u2sü2u1ß2u1tu3teuto1u3töu3tüu1ü22u1xux2eux2oux3tu1ya2u1z2übc2übdübe2üb3lüb3rüd3rüf3lü2gnüg3süh1aü1heüh1iüh1süh3tü1huüh1wül1aül2cül4eü1luün2sünt2ü1nuü1peü1piür1aürr2ür2süs2aü2stva1cva1sv4at2v1b2v1d1ve2ve3bve3cve3dve3gve3hve4ive3over1ves12veüve3v2v1g2v1hvi2cvig22vii2v1k2v1m2v1n3vol3voyvö2c2v1pv3revs2e2v3t2v1v2v1w2v1z1waa1wag1wah1walwa2p1was1wäh1wäl1wäswbu22w1c2w1dwe2a1weg1wehwe2i1wet2w1g2w3h1widwi2ewik21wil2w1k2w1l2w1mwn3s1wohwot21wöc2w1pw3ro2w1sws2t2w1twti21wucwul2wus21wühwül2wün32w1w1xa_1xae2x1bx1cex1chx1cl4x1d2xekxe2lx1emx2en3xes2x1f2x1g2x1hxib4xi1cxi3gxil1x3läx3le2x1m2x1nx1or4x1p2x1r4x1txt1äxt1uxu1axu2s2x1w3xy_3xys1yacy1äty1c2y1d4y2efy1f2ygi2yg2lyhr2y1i4y1k2yl3cynt2y1nuy1ofyom2y1ouypa2ype2y2pfy3phypo3y3riyrr2yse1y1t2yu2ry1z2za1c3zahz1anz1as2z3czdä1ze1e2z1h2z1j3zolzo2oz1orz1öl2z1qz3saz3shz3skz3sz2z1tz3töz3tüzu3azub4zud4zu3kzuz22züb2z1v4z1zzz2ö",5:"_ab1a_abi4_ab3l_abo2_ack2_ag4n_ag4r_ag2u_ai2s_al2e_ang2_an3s_apo1_aps2_as3t_at4h_au3d_ät2s_by4t_dab4_de1i_de1s_dü1b_dys1_ei3k_eke2_enn2_er1e_erf4_er1i_es1p_et2s_eu3t_ext4_fe2i_fi2s_ga4t_ge3u_im2a_im5m_in3e_ink4_int6_inu1_ire3_is2a_jor3_ka2i_ki4e_kus2_li2f_ma3d_ma2i_me2e_ne4s_ni4e_nob4_nus2_ob1a_obe2_or2a_ort2_ozo4_pro1_ro4a_rü1b_sch4_sha2_te2e_te2f_te2s_ti2a_tid1_ti2s_to2w_umo2_un3d_un3e_un3g_un3s_ur2i_ut2a_ut3r_übe4_vo4r_wa2s_wi4e_wor2_ya4l_za2s_zi2e_zwe2aa2beaa2gr4a2araart4aas5tab2äuab1ebabe1eabei12abela3ber2abet2abew3abfiab1irab1it2ableab3liab4loa2blua2bo_ab2ofa2bon2abora3braa4brä2abrü2abs_abs2aab5scabst4ab3szab1uraby4t2ac1ca1cem2ach_ach1a2achba1che4achfa1chiach3lach3mach3na1choach3öach3ra4chta1chuach3ü2achvac1in2ada_ad2ag4adav1a2dä2ade_2aden4a3diad2obad3ru2ads2ad3stad3szad4tead4tra2elaa2eleae2o3aes5ta2faka2fana3faraf4ata2faua2fexaf2fl2af3lafo1saf3raaf3räaf3reaf3röaf2spag1abag1arag1auag2diag2drag2duage1i2agesag3gl1aggr2a2glag4laa4glöag4nuag4roagsa2ags3pag2th2a1haah4at2a1heahe1sa1h2iahin3ah2löahnt21ahorah1osa2h3öahr1aah3riaht3saian3aid2sai1e2aien3ai3g4a3ik_ai3keai3kuai2loa1indain4ea1ingai2saaiso2a3iv_aive3a3ivla3ivs2akal2akarak4at4a1kea2kefa2keu2a1ki2ak3lak4li2a1kr4akra3akroak3sh2akta2aktb2a1kua2kun4a3kü2ala_al1abal1afala2ga3lalal1ama2larala4s2alatal1aual1ämal2bralb3sal2däal2dral3dualen1ale2pale4talf4r3algi3almba2l1öal2ös1alphal2ufa2lumal1ural2zw2am2aamab4amad2ama3g2am4e4ame_a2meba3meta2mewa3mi_a3miea3mis2ammlammu2am3pr2am2sam3sa1amt_am4töam2tu2ana_2anabana3ca3nak2anam2ananan1äs2anbuan3ch2and_2andua3nee2anfi4ang_2angf2anghang1l2angoang1r2a3nian2id2ank_an3klank1rankt4an2ky2anmu3annäan1oda3nola3nos2anpr1ansä1ansc2ansk2ant_2anto1antr1antw2a1nuanu3s2anzb2anzg2anzs1anzü2anzwa1os3ao3t2a3ot_a2pefa3pelap2faa3pfla3phäa2pht2ap3la2pot3applap3pu2a3pua3ra_ar2ab2arb_4arba2arbiar2bl2arbr2arbt2arbu1ar1ca2reaa4rega2reha4reka3renare3uar2ewarf1rar2glar2gnar2iaar1ima3riuarm2äarn2e2a1roar1oba2rorar2rh2arsaarse32arsiar2st2artoart3r2artsar1ufar1uhar1umarwa2ar2zä2arze1arztas3aua2s1äa2sca4as2ea2seb2asisas1ora2s1pas2phas2pias2poa3spuas2stas3teas3tias3to2astraßen3at1abat2afat4agata3la3tama2tatat1aua2t1ä4ate_a2teb4atena2tep4atesat3ha3athl4a3ti4atorat3räat3reat2saat2seat2siat2soat3taatt3sa3tubatu2nat2zoau2draue2baue2sau2faauff43aufn4au1iau2isau3lüaun2eau1nua4unz2aup22ausc1ausd3ausf1ausg1auslau2so1ausr1ausü1ausz2aut_2aute1autoauz2wa3v4aawi3eax4am2a1yaa1yeuaysi1ä2b3lä1cheä1chiäch3lä2chrä1chuäck2eäf2fläge1iäge3sä2g3lä2g3räg4ra1ä2gy2ä3heähl1aähl2eäh3neäh3riä1is_ä1iskä2k3lä2k3rälbe2äl2bläl2p3ämt2eän5deän2dräne1sän2f52ängeän2glän2gr2ä3niänk2eän2kränk2säp2pläp2präp4stär4afäre2när2grärk2särm2särse2är4siär2stärt4eär2thär2zwä5s4eäse3tä2s1päss2eäs2stäs4träte2nät1obä2t3rät2saät2sääts3lät4trät2zwäu2bräude3äu3eläuf2eäug3läu2maäun2eäu1nuäu3seä3usgä3uskä3usnäu2trba2bl2babs2b1afbais2ba2kabak1lbak1rbal2a2b1amban2ab1ang2banlban3tb1anzbar3bbar3nba2scba2stbau3gbau1sba1yobben3bbe4pbb2lö2b3d4bde1sbe3anbe3arbe3asb2ebe1be1cbedi4be1eh3bef4be3g2beil2b2einbe3li1ben_ben3nbe1ra3be1sbes2abe1ur3b2ew2b1ex2b5f4bfal22b1g2bges42b5h2bhut2bi3akbibe2bie2sbik2abil2abi2lubin2ebi2o1bio3dbi3onbiri1bi3seb1isobi2spb2it_b2itebi2tu2b1k4b3lad3blatb3leb3blem3blenb4letb3leub2lie2bligb3lisb2litb4locb3los2blun3blut4b3n2bnis1bo5asb1ob3bo2blbo2brbo3d22b1ofbo3febo1is3bon_bond1bo2ne3bonsbo4räbor2sb1ortbo2scbo3thbo2xibö2b32b1p2bpa2gb4ra_b4rahbrä4u2bre_3brea2breg3bremb4rer2brigb4riob3rohb4ronb4rucbru4sbs3arbsat2b4särbs2äubs2cabs4cub3se_bse2bbsi4tbs2kubso2rbs2plb3stob3stöb3stübtal3btil4b4ts2bu2e3bu3libung4b2urgbu2sa2b3z22c1abca1chca2e3ca3g4cal3tca2pecar3ncas3tca1y2c1ch2ce2drcen3gcere3ce3sh2ceta2chab2chaf1chaoch1äs1chef4chei2chic2chl2ch2lech2lu4ch2m2chn42chobcho2fch1ohch2r44chrech3rh2chuf2chuh2chum1cka_2ckac1ckag2ckalcka4r2ckau2ckeh2ckexck1imck1in3ckis2ck3l2ck3nck1o22ck3rckt2eclet4co3chco2d2co3dicoff4co1itco2keco2lecol2oco2peco1racor3dco3reco4te1c4r2cte3ecti4octur6cu2p32d1ab2d1acdagi2dah3lda1ho3d4aida1inda1isdal2ada3löd1altdamo3d4ampd2an_d1ang2danw2d1apd2aph4dapp3darlda2rod3arrdar3sd1artda2rudas4tdat2a4datmdau3e2dauk2d1äh2d1äp2därzdä3us2d1b4dbu2cdco4r2d1d2ddar2de2adde3asde3b43de1cdeco3de1e4de3gldehe2de3hod2eicde2löd2en_dend2den3gd2enhde2nide1nude1ondepi2d4er_de3rude2sade2spde2sude1unde3us2dexpd2exz2d1f42d1g2d2ge_2d1h2d2hisdi4abdi2addi4amdi1cediet3dik2adin2adi2obdi2spdist2di2tadi2thdit3sdi2tudi3z22d1k44d1l2dli2f2d3m24d5n2dnis1d2obadob4ld2obrdole4doll22doped2opp2dorc2dordd2orp2dortd2os_dos3sdot6hdo3undö2l13d2ör2d3p2drag4d3rai2drädd4räh4dre_2dreg4drem2d3rhd4ri_d4ridd4ried4rifd4rikd4rild3robd3rocd4roid3roud5rubdrü1bd2sands1änd3seidse4td3shodso2rd2späds2peds2pods2pud2steds2tids2tud2sundta2dd5teadt3hodt5s2du1ardub3l2d1uh2dumd2dumf2dumg2dumld2ump2dumrd1umsdung42dunrdun2s2duntdus3t2d1v2e3a2beab3lea2drea2g4ea3gaea3gleakt2ea2laeam1oea2nae2anoe3ar_ea2rae3arre3arveas3se3athea5tre3aug2ebedebe2i2ebeleb2en2ebeteb3loeb2lö2eb2oebot2ebö2seb4rueb2s1ebse22e3caech1äe1chiech3lech3mech3ne1chuech1weci6a2eckt2e1clec1s4e3d2aed2dre3deiede2re3d2oeds2äed2suedu2se3dy3ee3a2eeb2lee2ceee1chee2ckeede3e1effeef4leef3see1imeel2ee1empeena2e2enäe2encee3nie2enoeen3see1rae1erde1erkee1röeert2e1erzee3s2ees3kee3taee2thee1u2e1e2xef1are2fate2fäue3fe_ef1emef2er2eff_1effief2flefi2s1efkue3fraef4rüef3soef3spe2fumege1ue2gloeg3nieg2thegus32e1ha2e1häeh2eceh2ele3hereh1läehle2eh3loeh3mue3holehr1äeh3rieh3sheh3übei2blei3de2eidn1eifrei3gl2eigt2eigu2eil_2eilbeil3d2eilne1impei4näein3kei3o2eip2fei3ree1irre2is_2eitäei3teei2theitt4e3ke_e3kene3kese3keye3k2lekt2oe3k2wela2cel1afela2h2elaoela4s2e1läel2da2ele_elea2ele2c2eleh2elei1eleke3lepe3leu2elevele2x1elf_el3feelf4l1elfm1elfte3lieel3klel3leelm2ael5nae2lofe2lolelon2el2öfelö2selto22e1luel1ure2lyaelz2eema2keme2se2mop3empfem2saem2stem3t21emule2n1a4ena_2enace3nade4naf4enahe4nak4enam4enaten1äu2ene_2enem2enen2enesenf2aenf2uen3geen2gl1engpe3ni_e3nice4nide3niee3nio2enise3nit2enive2nofen1ohe3nolen1one3noteno2w2e1nö1entd1entn2entü1entw1entz2enut4enwüeo2fee1on_e1onde1onfe1onle1onre1onse1opee1opfeop4te3or_e3orbe3orse3orweo1s2e3os_eo3ulepa2gep3leep2paep4plep2prept2aepu2se3ra_era2ge1raie2rake1rale1rape2rare1rasera2ße1rawe1razer1äher1ämerb2eer3brer3da1erdber3de4ere_er1ebere2l2eren2erer2ereserf2eerf4rerg3s2erhüe3ribe3rio2erk_erk3te3ro_er3oaer1ofer1ohe3rone3rose3rowerö2d2eröker3p4er3rä2errüers2aer3seers2ier3sker3sner3sper3sz4ertier3uzerü4bes3abes3ake3sceesch2es2eles2hues2ide2siles2ire4skees3kles3kue4skye3sote3spies3sces3se2essoe1stre1stues4tüetab4et1am3etapet4atet1ähet2enete2oet3hüeti2m2e3toeto2bets2pet3suett1aet2thet2zäet2zweu1a2eu2gaeugs4euil4eu1ineu2käe3um_e3umbe3umleun2eeu1o2eur2eeu3speust4eut2heu2zw4everewä2se2we_e3wirewi2se3witex3atex1er1exis2ext_ex2tu2e3xye3z2aezi2sf1abefab5sfa2drfaib4fa2ke2fanb2fanf2fanlf1anp2fanrfan3s2fanw2f1ap3farifa3shf3aug3f4avfa2xa2f1b22f3d4fdie2f2echfe2drfe2eife1emfef4lf4eief1eisfel3tf2em_fem4m2fempfe2näfen3gfe2nof1entf2er_fe1raf2eref2ertf1erwfe2st3fete2fexpff3arff1auffe2eff3eiffe2mff4enf2fexff4laff4läff4lof3fluf3flüff3roff3röffs3t4f3g2fge3s2f1h2fi3atfi4dsfien3fi3klfi2krfil3dfilg4fi3lif2inafi3nifin2sfi3olfi3rafis2afis2pfi3tu4f1k4f3ladf3lapf3länf4leef3lerf3li_flo2wf4luc2f3m22f3n2fni2sfob2l2f1offoli3fo2nafo2nu2f1opfo1ra3form2f1ök2f1ölför2s4f1p2f4racf5radfra4mf5rap2fre_f3recf3red2fregf3repf4reufri3dfri2e2frig1frisf3rocfro2sf3rotf2sanfs3arf4scefs4cofse4tf2sphfs1prfs3s4fs3thf4ta_f2tabft1afft1anft1arf3tatft3hoft1opft2s1ftsa2ftse4ft3stf2tumftwa4ft3z23f2uhfung42funt2gabfgab4r2gabz2gadlga1flga2kagal2ag4amo2ganbgan3d2ganh2ganlgans22ganwga1ny2garb2garc3gardg2arsga3ruga2saga2siga3spgas3sgat2a2gatmgat4rgau1cg2aukg1aus2g1äp2gärz2g1b2gber2gby4tgd1ing1d3rgd3s2ge3a2geb2ageb4rge1e2ge3ecge2esge1imge1irge2isge3lege3lügelz2ge3migem2uge3nagen3ggen3ngeo2rge1ouge3p4ge1ragerm4ge3sigest2ge5trge1ulge1ur2g1ex2g1f4gga4tg2g3lgg4log2g3n3gh2rgie3ggi2elgi2gugi3negi3tugi4us4g3k2g1labg1lac3glad3glätg2l4e2gle_3gleag3lecg3leg2glehg3len2glesg4lia2glib2glifg2lik4gling2lio2glisg2lizglo3gg2lom2g1luglu2t2g1m2g2n2ag4na_2gnacg4nat3g2näg3neh2gneug2nieg2nifg4nin3g2nogno1r2g1of2g1ohgol2a2gord2gorggo2s1go3stgo3th2g1p2g4rebg4remg4rerg3retg3revgri2e3grif2grig2groc2grohgron4g4rosgro4ug4ruf2grut4g2s1gsa2gg3salgs3angs3arg3s2cg4scagsch4g4scogs2ehgsen1gs3ergse4tgsi2dg3silg3spigs3plgsrü2gs5s4gs3tag3stog3stögs3trg3stugs3tügti2mg5t4rgu3am2guedguet42g1uhgu1is3gummgu4stgut1agut3h2g3z2hab2ahab2eh2absha1kl2haleh1alph1amth2an_h2andh4ann2hanr2hantha2plha2pr2harbh2ardhasi1h1äff2h3b22h3d4hdan2he2adhe3behe2blhe3brhed2ghe3dihee4she2fä2heffhe2frhe2fuhe3guh1eieh1eifh1eighe2im4heioh1eiwhe3lihe3lohe2lö3hemdhe3mi3hemmh2en_he2näheng22henihe2nohen3z4he2ohe3onhe3ophe3phherg22hermhe3roh1eröhert2he3thhet2ih2e2uheu3ghe1y22h3f4hfi2s2h3g2hget42h1h2hi2achi1ce2hi3dh2idehi2krh1infh1inhhi3nohi4onhi3or2hip1hi2phhi2pih2i2rhi3rahi3rihirn1hi3rohir2shis2ahi2sehis2phi2sthi1thhi3ti2h1k4h4lachla2nh1lash1lath3lädh1läsh1läuh3lebhle3eh3lerh3lesh3lexh2lieh2lifh2liph2lish2lith3lochl1ofhl1oph4lorh3löch2löshl3t2h3lufh3lukh1lüfh2mabh3magh3manh3marh4mäch4mähh4mälh4mäuh3me_hme1eh3menh4monhm3p4hm3sahms1phn1adh3namhn1anhn3d4h2nelhn3exh2nich2nidh2niehn1imhn1inh2niphn3k4h2norhnts2h2nuch2nulho2blho2efho4fa3hole4holo3holzhom2ehono3ho1rahor3dh1orgho3slho2spho4st2hot_ho3thh1o2xho1y2hö3ckhö2s1h3öst2h3p2hr1achr3adh1raih3räuh2rech3redh3refh3relh3rephre2th3revh3richri4eh3rinh2robh3rohh3rolh4ronh2rorh3rouhrs3khr2suhr4swhr2thh3ruhh4rübh2sanh2sauh2späh2sphh1stah1stoh2s1uh2t1ahta4nht2ash2tärht1ehhte2sh4thohtod1h3töpht4riht3röht2soht2sphtti2ht3z2hu2buhuko3hu2lähu2loh1umsh1unah1up_h1upshurg2hu3sahu2sohu2tihut2th4übsh3übuhvil4hwe1c2hy2thzug4iab4liaf4li3ak_i3akti5al_ia2läial3bial3dialk2i3allia2lui4amoian2ei3anni2anoi3anti3anzi3ar_ia2rai2ascia3shi2asiias3siast4i3at_i4ate1iatri3atsia3uni1är_i1ärsi1ät_i1ätaib1eiibe4nibi2ki3blai3blei2b1öi4bräich1aich1äi1chei1chiich3lich3mi1choi1chuich1wi3damid2ani2deiidni3i2dol2i2drie3a2ie2bäie2blie2ckie2drie1e2iel3di1ell2i1eni3en_i3enai3endi2enei3enfi3enhi3enji3enki3enmi3enni3enöi3enpi3enrien2sie1nui3envi3enwi3enzie1o2i2erei4erii1ernie2röies2pie3sui1ettieu2eie1unif1arif4atif1aui2fecife2iif2enif2flif4läi1flüif4rai1freif3seif3spif2taiga3iig1läig4nai4gnäig4noig4raig3säig4seig3soi2harihe1eihe4nii3a4i1i4si2is_i2käri3ki_ik1ini2k3lik3noiko3si2kölik3räik3reik1s2ik3soik3szikt2eikt3ri2kuni3kusi1lä1il2daild1oil2drile2hil1el2ill_2illsi1lu2i2lumi3lusim4ati2megi2meji2meki2mew1immo1impoimp4s1impuim2stin2afin3ami3napina4sin1äsin3do2indrin3eii3nelin1euine2x2ingain2gl4inhei3nie2inigin2ir2inis2inn_2innlin1odin1orino3tin3suint2hin3zwi2odaio3e4iof4li2o3hio3k4i3ol_i3om_i3omsi3on_ion3di2onyi2o1pio4pfi3opsi3opti3or_i3orci3orpi3orsi3ortio3s2i2osti3ot_i3otsi3oz_i1ö2ki1ös_ipen3i3perip3fa2i1piipi2sip2plip3pui1r2ai3radirat2ir2bli3ree2irek2i3réir2glirg4sir2he2irigir4mäir2no1ironiro2sirr2hir3seir3shir2sti3sacis2api2saui2scaise3eisi2ais1opis1pais1peis3sais2stis4töis4tüit1amit1ani3tatit1auit2ärität22itelite4ni2texi5thr1itiii5tocit3rei3truit2sait2soit1uhitut4it2zä2i3u2i2vebive4niwur2ix2emiz1apiz1auize2niz4erizo2bi2z1wja3nejani1ja1stje3najet3tjo2b1job3rjoni1jo1rajord2jo2scjou4lju2blju3nijur2ok3a2aka3ar2kabh2kabska1frka1inka3kak1allkalo5k3amakand4kan2ekank42kanlk1anska3nu2kanw3kara2karbk2ardk2argk2arkk2arskar3tkaru2k2arwka3sekasi1kas3s2kattk1auskäse32k3b4kbo4nkbu2s2k3d2k1effkefi4kege2ke2glk1einkei1skeit2ke2lake2läk4eltk2en_ke2no2keo2ke2plk2er_k2erck2erlkerz2k6es_ket3ske1up2k3f42k1g22k1h4kho3mki3a4ki3drki2elki3k4ki3liki3lok2imik2in_k2ing2kinhk2inik2innkin3ski3orkio4skis2pkist2ki3zi2k1k44kla_k4lar4kle_4kleh2klic2kligk2link3lipk2lir4klizk4lopklö2sk2lötkluf23knabk4neiko2al2kobjkoff4ko1i2kol4ako3leko4muko3nu2kop_ko1pe2kops2kopzko3riko2spko2stko3ta2k1ouko2wek1o2x2k1p2k4rawk4raz2kre_2kreg2k3rh2krib2krip3kris2krufkrü1bk2sanks3ark2sauks2änksch4ks3hak3sofks1paks2puks3s2k1stak1stek1stok1strk1stuk2s1uk3talkt1amkt1anktä3skte3ekt1eik2texkt3hokt1imk3topkt4rokt3s4kul2a4kulpkung42kuntku2roku2spkus3tku2sukür4s2k3z2kze3lla3ba2labb2labf2labg2labhlab2ol2abr3labu2labwla1celad2il1adl2ladm3ladul1advla2falaf3slaf3tla2gala2gnlago2l2akk2l1al4lall4lalpl2amil2amp2lanb2lanf2lanll1anp2lanslar3sla2ru4lasdla3se2lash2lasila2so2laspla2stlat2ala3telat2s1lauglawa41länd2läub2läuc2läue1läufl3bacl3blälb3lel2blil3blolb3salb3selb4sklb3splbs6tl3chel3chilch3llch3rlch3ülch1wlda2gld1all3daml3dasl3datld1auld1ärl2deil2dexldo2rld2osld2ö2l2dreld4rüld3sald3stld3thle2adle2bl4leddle3dele3eilef2ale2gäle2glleg4r4lehs4leht3lei_l2eicl2eidl2eitlel3s4lemplem3sl2en_le2näl2enfle3nil2enkle1os3lepa3lepf3leprl2er_lerb4lerk2ler3tl1erzles2ele3shlesi1le3skles2t4lesw2lesy2leto4leud3leut2lexe2lexzl3fahlfe1elf3lolf2trlfur1lga3tlg3rel3gro2l1h23lhi_li3acli3akli3arlia1slibi34lickli4ds3lie_lig4nli3keli2krlil2a3limolin2al1inv2linzli4om3lis_4lishli2spliss2lit2ali3telit2hli3tu2lixili2zalk3lolk4nelk4ralk2s1lk3sälks3tl3k2ülla2nl3lapll1aullch4ll3d4ll2emll2esl2lexll3l2ll1obl3lowl2löfll5t4llu2fll1urll3z2lme2el2möllmpf4lms2tlna4rl3n4e2lobjl2obrlo1fllof4rloi4rlol2a2lopf2loptlo1ralo4rä2lorcl1ordlo3ro3lorq3los_lo4sa3loselo2ta2l1ovlo2velö2b3l1öhrlp3t42l3r2lre1slrut4lrü1bl3sacl2saul3sexlsho2ls2pels2pols3s2lst2al2stels4trls2tuls1uml2sunlsu3sl2tabltag4lt1aklt1ehlt2enlt3hol3thul2toblt1oplto2wlt1öll3törlt1ösl3trält3relt3sclt2solt1uhlu1anluba2lubs2lu2drlu2es2lufflu2golu2gu2l1uhlume22lumf2lumll2umpl1umsl1umw1lu2n2lunt2lunwl1urnl1urt2luselu2splu4stlu2tälüh1lly1ar2lymply3nolzo2flz3t2m2abe2mabk2mabs2mabtma2cima3damal3dmalu4mam3m2manbm2anfm2anh2manlm4ann2manzma2orm2app2marb4marrm1arzmat4cma3unma1yom1ähnmä1i2m1ärg2m1b2mbe2em3b4rm2d1äm2deimds2em2e1cmedi32medyme1efmega1m2eil3meldmell2m2en_m2ens2meou3mer_me1rame2ro3mersmes1ame4sä4mesume3th2m1ex2m1f4mfi4l4m1g22m1h4mi2admi3akmibi1mi3damie3lmi2ermi4etmi2kimi2ku4milzmi3nimi1nu3mir_mi3ra3miri3mirs3mirwmi2samise1mi2tami2th4mitz4m1k44m1l2m2mabmm1eimm3simm3spm2mummm2unmmül22m3n22mobj3m2odmo2dr4mog_mo2i32mol_mom2e3m2onmo3ne3mo2o2moptmo1ramork4m1o2xmp2flm3ponmp3ta2m3r2m2sanm4sapms1asm2saumsch2m4scom4sexmso2rm2späms2poms2pums3s2m3stoms4trms4tüms1ummt1abmt1akm3tammt1armt3homti2smt1ösm4ts1mt2samt2semt1um2m3uhmu3la2mulsmu3nim4unkmunt24munzmu3ra3musimu2spmus3tmu2sumuts32m1w2mwel42n1abna2bä4nabg4nabhna2bln2abona2br4nabt3n2ac4naddn2ade3n2ag3n2ahn3ahnnai2en3aign3air2n1akna2ka3nakon2al_na2län4alena2lu2nalyn4am_3name3namon1an_4nanb2nanh2nani4nank2nanl3nannna3non1anp2nanr2nanw5nar_2narcn2ard4narg3narin2ark2narmn2arpn2as_4naspn4ata4natmnats14natt4naufn3aug5naui3n2äcn1ähn2n1ännä2scn2äss2n3b4nbe3nnbes4nbu2snch3mnd2agndat2nd1aun2dein2dobndo1cnd1opnd1orn2drönd3thndt4rn2dü4ne2apne3asne3atne2bl3necane1ckne2de2nee32neff3nehm2n1ein2eid4neifne2ke3nelanel3bne3lin2em_n4en_n2enbn2encn2enhne2nin2enjnen3kne2non2ensn2envn2enwne2obne1os2nepfn2er_ne1ranere2n1erfn1erh3nerin1erkne2ron2erpn2erv3n2esn4es_nes4cnes1one2thneu1cneu3g2n1exnf1aknfo1snft2on2f1ung1adng3d4n3gefn3gerng3g4ng3hun2glon2glöng3neng1orngs3cng3tsn2gum2n1h4n3hann3harn3haunhe2rnib4lni2deni3drnie3bni1elnig2anig3rni3klni2kr3n2ilnim2o2ninfni2obni3okni3olni3ra3n2isni2tinit4sni3tunk2amn2kähnke2cnk2lonk2lunk4nan2knenk2öfn2köl2n3l22n1m4n2naunne2snn2exn2nofnn3scnn3senn2thnn1ur3nobl2no2dno3drn3olen2on_3nor_nor2a2norc3norh3norm3norsn1ortno3shno2spno2täno2tr2nö2f2n3p4npa2gnpro1npsy32n3r2n3savns2cans1ebnse2tn3sexn3siln2sphn2sponsrü2ns3s2ns2tins2tunst2ün2styns2umnta3mnt4atnt1ämnte2bnte1ent1ehnt2enn3ternteu3nte3vn3thrnti3cntmo2nt3sants2onts2pnts2tntum4nt3z21nu1anu3arnubi11nu1cnu2esnu2fe2n1uhnu3k4n2um_2numf2numg3numm2numr2nuna2nunt3nu2snu3scnu3senu3slnus1pnu2ta2nü4bnür1c2n1v2n3ver2nymun2zadn2zann2zärnz1ecn2zornz2öln2zwö2o3a2o4abioa3deo4a3ioa3ke2obano3bar2obe_2obea2obewobi4t2o3boo3briob3skobs2p2o3buobu2s2o3bü2oby4och1ao1cheoch3loch3moch1ooch3roch1socht2o1chuoch1wo3ckeo3ckio2ckoo3d2aod2dro3debo3dexo3diro3divo2donodo4so2dre2o3du2o1e2o4e3so2e3to3et_o3etsof1amof1auof2eno3feroffs2of2fuof1laof4läof4löof3raof3räof4rüofs1aof3thoga3dog2loo3g4nog3spohl1aoh3looh2lu3ohngoh2ni1ohnmo2h3öohr1aoh1ro2o1hyo1i2do2isco1ismoiss2oi1thoki2ook1läo2labol2arol4drole3eoler2ole3sol2faol2flolf1rol2glol2grol2klolk3rol2of1olymol2zwo2mabo2mebome3co2melo2mepom2esom3maom3pfomtu3ona2bo2naeo3nalon1apon2auonbe3one2ion3f2ong4rong3s4o3nion3k2onli4o3nodono3sons1aonsi2ons3lons1pont2hont3s2onukoor3foo4skoo2tr2o1ö2opab4opa5so1peco1peiope4no1pes2opf_op2fäo2pfeopf1l4oph2o3pheopin2op3li2o3poop4plop2pr2o1pr1opsiop3szo1rad2orak2oral3oramo1rasor1ätorb2l2orcaor2ce4orda1ordnor2do2ordr2ords2ordwore2hor1eror3gaor2glor2gn4oril2oritork2aork2s2o1ro2o1röorr4aor3rh2ors2or3shor3szor4töor2ufo2r3üo2ryaos3ados4anosa1sos4co2o3seose3eose2no3shoo4skaos3keo4skios2lo2os1pos2saos4säost1aos3to2osu42o3syo2tebote2s4ot2hot4heo2throt2inotli2ot4olot2oroto1so3traot2saot3scots1pot2thou2ceou2geou3glouri4outu4ove3so3wecoy1s4ozon1ö2bleö2b3röb2s3öch1lö2chröch2söcht4öd2stöf2flöh3riö3ig_ö2ko3öl1a2öl1eiöl1emöl4enöl1imöl1inöl3laöl1o2öl3saöl3szö2l1uölz2wönn2eön3scön3spöpf3lör3a2ör2drör2glör2klörs2eört2eör2trös2stös3teös2thös3trö2t3aöt2scöt2trözes4pa3dapa2drpa2elpa3ghpa1ho1pala1paläpa3li2paltpank42panlpant2papi23para1parc2parg1paro2parppa4stpat4cp3auf3pä2cpä2to2p1d2pea4rpech1pe2en2peicpe1im1peitpel3dpena4pe1ra1perl3pero5perspe3sape2stp2fabp2fadp2fafpf3aip2feipf3lopf3lup2forpf1ra2pfs2pf3slpf3sz2pf3tpgra2p3hopph3t2phu4s2p1hüpi2a3pias4p4id2pi2el3pierpi3lepin2epi3oipi2pepi3ri4pisopi1thpit2s2p1k2pkur11p2l43p4lap5la_p5lad2ple_ple1cp4legp4lem2pligp4likp4liz2p3lu2p1m2po3b42p3ohpo3id3poin3p4olpo3li2pondpo2plpo3pt2pornpor3spos2epo3ta3potepö2blp2p1hpp1läp2plep2pripp3sa1prak1prax1präd1präg3präm3präs2pre_2prec1pred1preipri4e2prig1p4ro3prob2proc3prod3prog3proj3prot1prüf2prünps4anp3s2hps1idps2pop3staps2tup3stü3p2syps2zept2abpt3atpte4lp4tospto2wp2t3rpt3s2pt1um3p2typu2dr2p1uh2pundpun2s2puntput2spwa4r1queura2abr3aalra3ar2rabd2rabf2rabgra2br2rabs2rabt1rabyra1cer2ackr4ad_rada23radf3radlrad5tra2gn4raht2raic1rake3rakür4al_ral3bra3le2ralgr4aliralk2r4alsra2lu3ralyr2ammr2an_4ranc2ranf2ranl2ranr2rapfr2ara2rarbr2arkr2arpr4as_ras2ar4at_r3atlrat4r4rau_4raud2rauf2raug3raum3r2äd3rän_3räni3räns2r1ärr2är_rä3raräu2s4räutr2bakr3blärb2lörb4rirb3serbs1orb3sprby4tr1chirch3lrch3mrch3rrch1wr2ck1r2dafrd2amr4dapr2deir3denrd1itr2dobr3donrd1osrd4rird3tard3thrdwa4re2amre3asreb1rre2bür2ech4reddre1elre1er3refe4reff3refl3refo5reg_rehl4r2ei_r2eie2reigr1einre3larel2ere3lorelu2r4em_r2emi4remur4en_r2enare2näre2nir2enzre3or3repe3repo4reppr1erfr1ergr1erkr1erlrer2nr2eror1erör1ertre2sa3rese3reso2ress3rest3resu2reulre2wi4rezirf2äurf2esrf4lör3flür3forrf4rurf4rürf2sarf2targ2abrg2anr2gnor2ha_r3herr2hoe2rholrhu2sri3amria1sri3atri1ceri1elri1euri2frrif3s5rig_5rige5rigjrig1l4rigrrik1lr2imb2rimprim2s2rink3rinn2rintr1inv4r1irris2ari3so3rissri2strit4r5riturk2amr2kährk4lork2lur3krirk2sprk1strk2tark1uhrk2umrku2nrle2ar3lecrle2ir3letr3l2irli2sr3l2orm2ärrm3d2r3me_r2meorm2esrmo1srm3sarmt2arna2brna4nr2naurn3drr4nefrn2eirne2nr5nesrn2etr4nexr3nodr1nötrn1ur2robj2robsro3e4roh1lro1irro3lerol3s2roly4rom_4romm4romt3ronnrons2ro1nyro3phr2oraro3shros2p3routrö2du1r2öh1r2öl3römir2ös_r2öse2r1p2r2plirpro1rps3trr2abrr2arrr1ämr3r2er4rewrr2herrik2rro3mrr2strr2thr3r2ürrü1brs3abrs2anrs3arr3shors2klr4skor4skrr4skurs4nor4sobrs2p4rs3s2rs2thrs2tir3stor3störs2tur3swirtal2rt1amrt1ärrten1r2thirto1prt1orr5trirt2sorube2ru2drru2fa3ruinru1is4rumfru2mi4ruml4rumz2rund4runn4runt2runwru3pr4r3urru2ra5ruroru2siru2strut3hru2zwrü1ch4rümmrz2anr2zarr2zasrz1idrz1oprz3terz2thr3zwä2s1absa2besa2blsa2br4sabss1adm3safasa2fe3safi3sagasag4nsa2grsail42s1aksa2ka3saki3sakr4sakt3salo5samms1amps2an_s3anbs2and3sani2s1apsa2po3sapr2s1ar3saris3arrs1aspsat2a4satmsa2trsa3tss1a4u3sau_3sauc3saue3saum3saur2s3avsa2vos3ähns1ält2s1äm2s1är3s2ät3säul2säuß4s3b4sba4n2scams2cans2cap2scar2s1ce4sch_s4chä4schb4schc2schd2schf2schg2schh2schks4chls4chö2schp2schq4schss4chu3schü2schv2schz4s3cl4s3d2sde1sseb4rse1ecse2glseg4rse3heseh1lseh1sseh3ts1ein3s2eks2el_s2elsse2nä3senkse2noseo2rs4er_3seraser3gs1erh3seriseru25ses_se3su2s1exse2xe4sexpsex3t4s3f4sflo44s3g2sha2k1shass3h2e3shi_3shidshi4rs3hoc4shof3shop3showsi2ad2siat5si1cs2ido3s4iesien3sie2ssi1f43s4igsig4nsi2kisik1lsi2krsik3ssi2ku3silosin1ision43s2issi2sasis3s3s2itsit3rsi3tusiv1asive3si2vr2s1k24skams3kar4skass4keps2kifs2kig4skirski1s3skiz4skom4skor4skow4sk3t2s1l23slal4slans2laws3lo_s3loe2s3m22s3n4snab4so3baso3et3softso3la3s2onsone2so2ny2sopf3sor_s1orc3sorsso4rus4os_2s1ox2s1ök2spaa2spaks2pan2spap2spaus2paz3späh2spärs2pee2spel2spet4s3pf2sphas3phe2sphispi2k4spil3spio4spip4spis4spla4splä2spod2spogs2poi2spok4spol4spr_3spru2s3ps2spun2spup3spur4sput4s3r4sret3srü2ds5safs3sagss1ajs3sals3s2äs4sces4scoss1ecssoi4ss2poss3s4sst2ass2thss2tis3stü4sta_3staast2ac2stag3stah2stak2stax3s2tä4stäg2st3c2steas2ted4stee2stem4stens2tep2ster4stes2stetst3ev4stexs4thäs4this2thu2stia2stibs2ticsti2e2stig2stiks2til2stio2stis2stiv2sto_s3tob1stof4ston4stoo1stoß4stou2stow2stoz2stöt1stru1stub4stuc2stue3stuf3stuhstu2n3stüt4st3zsu1ansuba24subi3su1c2s1uhsu1issul2asul2isult23summ3sun_su4nes1unf4sunt3s2upsup3psu2ras1urtsu3sasus1esu3shsu3sisus3s2sü4bsü2d1sweh24swie4swilsy4n34s3zas2zess2zis4s3zu4s3zwßen3gße2niße2noße2roßer3tßig4s2ß1s25taan4tab_2tabf2tabg2tabh2tabkta2br4tabsta2bü2tabw2tabz2t1ac3tacut1adatadi33taf_4tafft1afg3t2agt3agotai2ltai4r2takzta2latal3d3talo2talt3tameta2mit1amt3tan_2tanbta3ne4tanf2tang3tanit2ank4tanlt2anot1ansta2nuta3or2tapfta2pl2tarb4tark2taro2tartta2ruta3sata2tht3atlt4atmt1auk3taum4tägyt1ämt3tänzt2är_tä2ru4tätt2täuß4t3b2t3chat3chetch2itch3lt2chutch1w4t3d4tdun2te2a22teakte3alte3an3tebat2ech2teckte1emte2es2teff3teha3tehät2eieteik43teil5tel_3telatelb43telg3telk5teln3telp5tels3tem_tem3st6en_ten3ate2nät4enbten3gt4enhte2nit4enjt4enmten3n3terct4erit4erot3erötert2teru2t2estte2su3tet2t2et_4teth4tetl3teuf3teumte1unte2vite1xa4texp3text2texz4t1f4tfi2l4t1g2tger22th4at2hagt3hait2hak2t3hä3thea2thebt2hect2hekt2hem1then3theot2hest2heut2hik4th3l4th3m2th3n1t2hot3hoft3horthou24t3hö2thub4thunti2ad3tib4ti1cetieg42tiehti1elti1etti1eu3tif_ti1fr4tift3tilgti2lötil3stilt4ti2lut2imiti3nat1inbt1infti1nuti3orti3plti1rhti2sptium2tive3ti2za4t3k46t5li4t3m2tmal24t5n4tnes2to4asto5at4tobjtob2ltode2toi4rto3la3tole4tolz2tomg3topo2topt3tor_to1ra4torct1ord3toret1orgto2rö3torsto2rut2orwto3sc3toseto4sktos2p4toss3totrtots23t4outo3un3töch4t1ökt1öst4t3p21t2r45tra_3trac3trag3trak3tral4traß5träc3träg4träs4träß4treb4trec3tref4treg2trekt4remt4rert4rett4reut3rev2trez5t4ré2t3rh4tric2tridt4riptri2x3tro_3troe3tront4rop3troyt3röc2tröh3trös3trua4truktrum2t4rübt4rügts1adts1alt2sants1ast2sauts1emts3krtso2rt3sout2spät2spht2spots3s4t1st4ts2tut2s1u1tsubtt1abtt2actt1aktt2altta1st3telttes1tto1stt3rutt3rütts1ptt2untu3antuf2etuff3tul2at2um_3tun_3tune3tungt1up_tu2rätur1c3turntu2rotu4rutu2satu2sotu3ta3tüch3tür_tür1c3türe3türg4tütztwi4ety2pat2za2tz1agtz1altz1artz1aut3ze_t2zortz2thtz1wätz1witz1wuu1a2bu1a2cuad4ru1al_u1albu1alfu1alru1alsu1altua2luu1ansu3ar_u1arsua3saua2thuat2iubau1u3b4iu2bopub3räu2bübuch1auch1äu1cheu1chiuch3luch3much3nu1chuuch3üuch1wu2ckiu3d2au2donud3rau3druue2ckue2enu2elaue2leueli4ue2miue2näue2niue2nou2ereu3errue2tau3fahuf1akuf3aru3fasuf1au2ufe_uff4luffs4u2fobufo2ruf3säuf4sou2fumug1afug1akuga4sug1auug3d2ug3huu2g1lug3lou4gluu2g3nug1orug3roug3seug3siuh1lauh1läuh2liuhme4uhr1auh3riuhrt4uh2ruuh4rüui2chui1emu4igeu1in_u3käuu1k2lu1k4ruk2tauku2sul1abul1amula2sul1ämul2drule4nule2tu2lexul3f4uli2kul3kaul2knull2aull3sulo2iul1orul2sauls3z2ultaul3thult3sul2vrulz2wuma4rum2enum1ir1um3lumm2aum2suum3t2um2un2una_1unabun3acun4alun3at1unda1undd1undf2undg1undn1undv1undzune2bune2hung5hun2idunik4un2imuni2r2unisunks23unkuunna2uno4run2os2uns_un3se1unsiun3skun3spun3taun3trunt3s2untuu1o2bu3or_u3orsu1os_uote2u1pe2uper1up2faup2plup2prupt1oup4tru2rabu2rar2u1räur1änurch1ur3diure4nurf3turi2cur1imurk2s4u1rou3roluro1sur4swur2zaur2zäur2ziur2zou3sepus3klu4skous3ocu3sohus1ouu2spou2spuus2thus3tru1stuus2uru2tärut1egute2lut2esut2etu4tevutfi4ut2heu2thiu2thuuto3cut4orutos4ut3rüuts2put3teutts2ut2zo2u1u2uufe22u1v4u2ve_uz1weuz3z4übe3cüber3ü1cheüch3lüd3a4üd1o4üd3s2üdsa1üd3t4ü2f1aüfer2üf2flü2f1iüf2toü2g3lüg4stühla2ühl2eüh3moüh3neühn2süh1roühs2püh4thül2laül2loül2löü2n1aün2daün2dründ3sünen3ün2faün2frünn2sün3scün3seün3spün2zaüp2plür2flür2frür3scür3seür3spürt2hüse3hüse3lüse1süss2eüs2stü2t3rüt2s1üt2tr2v1abval2s2vang2varb2v1auve3arveit4ve3lave3leve3live3love3mave3muven2cve3neve3nive3növer3averd2vere2verf4verg4ve3river3kvert2ver3uve3tavete1ve3trve3x22v1f4vi3arvi2elvi2ervima2vi4navin2svi3savise4vi2spvis2u2v1l22v1obvo3gavo2gu2v1opvo2r1vor3avor3dvor3evor3gvo3ri2v3rav4ree2v3rov1stav3s2zvu2et2vumfwa5gewa3gowai2b2walb2walmwa3nawa3sawa3sewa3sh2wängwäs2c2w1b2we2bawe2blweb3swe2e4weed3we2fl2weiewe3niwerd2we2röwer2s1wesewe2spwe4stwet2s2w1eywie3lwin2e2wing1wi4rwi2sp1wisswi3th1wo1c1wolfwor3aw3s2kwun2s4wur_wur2s2xa2b1x2adxa1fl1x2agx3a2mx2anz1x2asx1e4gx2er_x2erexers22x3euxich2xide2xie3lxil2axi2loxi2lux2is1xis2cxi2sexis3sxi2su2x1k22x2l22x3s2x2t1axt2asx2tänxtfi4xt3s2x3turx1u2n2y1aby1al_y1a2myan2gy1anky2chiych3nyen4ny2erey2es_yes2pye2thygie5yke3nyk3s2y4le_yli4nyl3s2y2l1uyma4tym3p4ympi1y2n1oyno4dyon4iy1ontyp3any4p3sy3r2eyri2ayri1ey3r4oys2any3s2cy3s2hy4s3lysme3ys2poys1prys3t4y3s2zy2te_y2tesy3to1yure3zab3lz1a2dza3de2z1afza3grzale32z1amza2na3zani2zarb2zarcz1arm3zaubz3aug3zaun2z1äc3z2äh2z1ämz1ärgz1ärm4z3b4zbü1b2z3d2zdan2zeik4zelu25zen_zen3nze2no3zentz2er_zerk2z2ernzers2ze2säze3sczes1ezes1ize2spze2tr2z1ex2z1f42z1g2z2henzhir3zi3arzid3rzil2ezin2ezi2o3zi3opzirk22z3k42z1l22z1m2zme2e2z3n42z1ob2z1ofzo2gl2z1oh2zopezo2ri2z3ot2zö2f2z3p42z3r24z1s2zt3hozt3s2zu4chzudi4zu2elzu3f4zu3gl2zumf2zumg2zumlzun2ezung42zuntz1urkzu3s4zu5t2zür1cz1wac4zwahz1war2zwas4zwäl2zweg2zwet4zwirz2wit2z1woz1wörz1wur2z1wüz3z4az3z2o",6:"_ab3ol_ab1or_akt2a_al3br_alt3s_ampe4_an3d2_angs4_ans2p_ans2t_an3th_ari1e_ark2a_ar2sc_as4ta_au2f3_au4s3_be3ra_boge2_da2r1_darm1_de2al_de1o2_des2e_de3sk_des2t_do2mo_do1pe_dorf1_ehe1i_ei3e2_ei4na_ei2sp_ei4st_ei4tr_el2bi_elb3s_em3m2_end3s_enns3_en2t3_en4tr_er2da_ere3c_es3ta_est2h_es3to_es5tr_eu3g4_eve4r_flug1_for2t_fu2sc_ge3ne_guss1_he3fe_he3ri_inn2e_kamp2_kle2i_kopf1_le4ar_li4tu_ma3la_ma2st_mel2a_mi4t1_näs1c_no4th_oper4_oste2_ost3r_poka2_ram3s_reli1_ri2as_rö2s1_se3ck_sen3s_ser2u_se2t1_si4te_ski1e_tal2e_ta2to_te3no_te4st_ti5ta_tite4_to4pl_tro2s_tu3ri_uf2e2_ufer1_un3a2_uni4t_uns4t_uro2p_ur3s2_wah4l4a1a2naa2r1aaar3f4aat4s3ab1aufab1eilabe2laab1erkab1erzab1ins1a2blaab5lag1a2bläab4le_3a2blö2absarab3s2iab3s2p2abst_ab3ste1abteia1chalach3auach1eia3cho_ach1orach3su4ach1wa1ckarack2ena2ckinack2seack3slacon4na3d2abad3amaa2d1an3a4dapade2aladefi4a2deina2deri4ade1sades4sadi3enad4res2ad2t1a2f1eca2fentaf1erlaf4fluaf3s2aaf3s2haf2t1aaf2teiaf2t3raf2tura2f3urag1a2da3gen_age4naage2saage4si3a2gitag4ne_a2g3rea2g3riag4samag4setag4spoag3staag3stea2gundahl3a2ahl3szah4n1aah3r2eahrta2ain3spai3s2e2a3kam1a2kazaken2nak3rauak5tan2aktikak2t3r2aktstal1ageal3amealami5al3ampal1anaal1ansal1anza3lar_a3lareal2armal3arral1asial1assal3augal2b1lalb3lial2bohalb3rualds2ta4l1eha2l1eia2l1ela2lengal1epoal1erl3alermal1etaal1etha2l1eua4leur3a2lexal2glial1insa2linvalk1ar1alkohalk3s2alks4tal2labal2laual3lesal2lobalo2gaal1opeal1orc3alpe_al3sklal3sunal4takal3tamal2treal2trial2troalt2seal1umb2ambiqame2n1amer2aa2meriame3rua4mesh2a3mirami3taami3ti2ammalam2meiam2minam3stram2t1aam2t1äam4tel2amtemam2t3ram4treanadi3an1algan3dacande2san2dexand2suand1uran3e2can2ei_an3eifan1e4kan1ethanft5san3f2uang1ar3angeb2angiean2gla4angs_3a4nima4ninsan2keian4klöank3ra3an3naann2aban3n2ea2n1orans2enan2seuan3skrans1pa1anspran3s2z1antei1anthran2tro2anwet1anzeian2zwiar3abtara3d2a2r3al2a2rara2r1auar2bauar2bec2arbenar2bre2arbs2ar2droar1effar1ehra2reinar2erfa2reria2rerlar1intar2kalar2knear2korar4kriark1s4ark3saark3shar2lesar2nana2r1oparr3hear3s2har3staar3t2ear2thear3t2iartin2ar6triar2z1was1alaa3schea3schia2schma3schua3s2hiasin2gaska3sa3skopas3panas3s2aas3s2eas3s2ias2s1pass3tias3stras3stu2as3taas4tauas4tofast3räaswa2s3a2sylat1apfa2tausat3eiga2teliate2ru4athe1atil4sati2st4atmusatra4tat3romat4setat2s1pat4takat4tauat2teiatz1eratz3t2at2z1w2au1a2au2bliau2bloauf1an2aufe_2aufehauf1er2aufs_4augehaule2sau2malau2m1oaum3p2aum3s6au3n4aau2nio2au3r2au2sauau2spraus3s22auts4ava3t4äche1eäch2späch4stä2d1iaäft4s3äg3str2äh3t4äl2l1aämi3enäne2n1äng3seän2k3län2s1cänse3häp2s1cä2r3a2ä2r1eiär1intär2k3lärt2s3äse3g2äser2iäskop2ä3s2kräs6s1cä4s3t2ä4t1a2ät2e1iätein2ät2s1iät2s1pät2s3täum4s52ä3us_äu2s1pbacks4b1a2drbah2nuba2k1iba2krabal3th3b2andban2drba3n2eban4klban2kr2b1ansbar3deba2reibar2enbar3zwba3s2abau3sp3b2ä1cbbens2bb3lerbbru2cbe2delbe2erkbe1erlbe1etabei1f4bei3k4bei3labe1indbei3scbeis2ebei1stbeit2sbe3lasbe3lecbe3leibe2letbel3label3szbel3t4ben3arbe3nei3ben3gbe3n2iben2sebenst4ben2sub1ents2bentwben3unben3z2ber3ambe2ranbere4sber3nab1erntbe2robbe3ropbe3rumbe3slobes2pobess4ebes3szbe2tapbe3thabien3sbi2ke_bi2kes2b1inb2b1infbin3gl2b1intbi2solbi2s5tb2it2abla3b4b2lancb2latt2b3law3ble2a2b3legb3leinb3leseble3sz2blich3blickbling43blitzbo3ch2bo2e3ibon2debo1r2abo2reibo4rigbo4s3pbot2st2b3radb4ra3k2b3refb3reif2b3repbri2er2b3rolbrust3bru2thb2s1adb3sandb3sel_bse2n1b3s2esb2s1ofb3s2pubst3acbst1akbs3tätbst3erb2stipb4stodbs4trib4stübb2s1unbu2chibul2la2b3umkbu3r4ibus1erbu2sinbu2s1pbu2s1ubzeit1carri1ca3t4hcha2ck2ch1akch2anb3chancch1ang4chanz4char_1characha2sc3chato4chatuch1ärm3chef_3chefi3chefsch1eimcher3ach1ess2cheta1ch1iachi3na4chind2chinf2chinhch1insch1int1chiruch1offch1orcchre3s1chron2chunt2ck3an4ckeffck1ehe4ck1eick1entcke2rack2ereck1erhck2ern2ckero2ck1id2ckunt2ck1upcon2nec1s4trcussi43d2abäda2ben3d2ablda2bredab4rüdach3ada2chodach1sdal3b2d1amma2d1amt2d1ana2dangedan4kldan2kr2d1ans2dantwd2anz_4danzida2r3a2darb2dar2mada3s2hdat4e2da3teidate4n4d3atl4daush2d1ämt2d1änd2d1ängde3a2tde4ca_de2cka2d1eff2d1ehrdein2ddein2sdel1ändel1ec2delek2delem2delfmdelle2de2lopde3lordel5scdel2sodel3t4dem2ar2d1empden3th2dentwdera2bde1radde2rapder2bl2derdbderer33derieder3m2de4ruhde4rumde3sacdesa2gde4samdes2äcde2sebde4sehde2seide4setde2sinde2sordes3s2de2sto2d1etwde1urlde2xisdha1s4di3e2ddi3enidie2thdige4sdil2s52d1imb2d1ind2d1inf2d1inh2d1ins2d1intdion3sdi4re_di2rendi2ris2d1irl2d1isrdi4t3rdle2ra2d1o2fdo2mardo5n4adoni1e2d1opfdor2fädor2fldor2fr2d1orgdo2riedor2tadost1rdö2s1c3d4ra_2d3rad2drahm3d4ramd3rand2d3rät2d3räud4rea_d4reas3d4rehd4reiv4d3ren2d3rep4d3rer4dres_d4resc3d4ria2d5ricd5riegd4rin_3d4rit4dritu2d3rod2d3rot2d3rovdrö2s13d4ruc2d3ruh2d5rutd2sau2d2s1efds2eigd2serhds1errd3s2had2s1imds2infd3skuld2s1opds1orids1pasd2sprods3tabd4stagd4stead3steid4stemds4tilds4tipds1umsds2zend4theidtran2du1alvdu2bli2d1ufe2d1umb2d3umkd2ums_2d1umvdund2a2d1unfdun3kedun2kl2d1url2dursadwest3ea3dereadli4e3aleieat4e2eater1eat3s2e3au2feau1ste3b2akeb3lereb4leue3blieeb3reiebs3paeb3staeb3strebu2t12e3cheech1eie2cho_e2ch3rech3taech1uheck3seede2aledens1edi4aled2s1oed2s1pee2choeed3s2ee2lekee3lenee4nage1e2pie1erbtee3r2eeere2see4reteer2öse1ertree3r2uee4tateewa4re2f1adef1anae2fente3f4lu2e3f2oef3reaef3rolef3romef2tanege2raeg4saleg4stoegung4eh1ache3h2aleh2auseh1eff1e2hepehe1raeh1inteh1lameh2linehl2seehr1a2eh2reiehre3seh1ro2ehr1obehr1ofeh1stee2hunt2ei3a2ei2bareibu4tei2choei2d1aei3danei3dra4eien33eifrüeig2er2eigew2eigrueik2arei3kauei2lareilen1eil3f41eilzuei2moreim2plei2n1aei4nasein3dr2einduei4nelei2neu2einfoein3g2e1initein4szei2sa4eis2peeis4thei1stoei2sumei2tabei2tanei2tarei2troeit3umek1s4tek5trie2l1akel4amiel4ampel1ansel1anze2l1apel3ariel1asiel1aspel2ast3elbiseld3s22e3lebe2l1el1e2leme3lem_el1empel1erdel1erfel1erkel1erl2eles2el1esse2l1ideli2neel1itael3lanel5le_el3linell3spel1opee2l1orelo2riel2sumelte2kel2t3re2l1umel3useel2zwae2m1ad3emanze3m2ene2m1imem1intemi3tiemma3uem2meiem3pflem2spren4amee4nanden3angen3areen2ascen3atte3nauee2n1ären4ce_en2dalend3siend3szend2umen1e2ce4neine2n1elene4lee2nerfe4nerhe4nerk4enerne4nerz1engad3engagen3g2ien3gloeng3see2n1ineni3seen3k2üeno2mae2n1openost3en1ö2den3sacen2sauen2sebens2el1ensemensen1en3ska2enstoent4agen2teb1entfa3entgaen2thi3entlaenü1ste1o2b1e3p2f41episo1e2pocep2tale3rad_er3admeraf4aera1frer3aicer3alleran3de3raneer3anfe2ranher3anmer3apfe3rarie2rathe3ratie2ratme1rauber3aueerau2fer3augerb4sper3chl2erdece3recher1effer1eige2reiner1ele2e3reme3renae3renz4erer_e4rerl4ererne3reroer1errer1erse2rerter1erwer1esser1eul4erfür1ergolergs4t1erhabe2riat4e3ric4e3rieer1inber1inker1inter1ita1erklä2erkreern1oser1o2be2r1ope4ro2rer3smoert2aker2thoert4raerts2eeruf4ser1u4mer1underung4er1unser3untes2aches3anze3s2ases3cape3schaes3evaes2hares3intes2kates4loges2ortes2sau4essemessi2aes2sofes2spues3stres3stuest1ake1stare1state3stele1stile2stipes4trie2s1umes3umse4teinet3haleti2tae4t1ofetons4e2treset4riget2tabet2teiet2t3ret4troett3szetwa4retze4seu2esceu4glae3um2seum4sceums1peum3steu4neie3un2geu2nioeun3ka3eu3roeu1staeu1stoeu1stre2velae2vent1e2xeme2x1inex2tinfa2benfa2chof1aderfa3l2afal2klfal3tefalt2sfan2gr2f1ankf1an3zfar2br2f3arcfarr3s3f4art2f3arzfa3s4afa2to32f1auff1ausb2f1ärmfeatu42f1eckfe1inifek2tafe2l1afel2drfe2lesfe2l1ofen3safer2anfe2rauferde3fer2erf1erfaf2erl_f4erpaf2ers_fest1afest3rfeu4ruf2f3efffe1inf3f4räff3shoffs4trfid3scfi2kinfik1o2fi2kobfi2lesfi4linfil2ipfin3sp2f1intfi2s5tfit1o2fi2tor3f4läc2f5läd2f3läu2f3leb3f6limfli4ne2f5lon1f4lop1f4lot1f4lug4f3orgfo3rinfor4stfor2thfor3tu2f1o2xf3rand1f4ränfreik2frein42f3ricf4risc1f4ronfro2nafs1allfs4ammf2s1asf2sauff2sausf2sautfs1e2bf2s1emf2s1erf2si2df2s1o2f3spanf3s2plf2sprefs2prif2sprofs2pruf2stasf3steif2stipf3st4rf2s1unf2t1alft1e2hft1eigft1eisf4theif2t3rof2t3röf3t4ruft4samft3s2cft4sehfts3elfts2tift1url2f1unffun2klfun2ko2f1unmfu4re_fus2safus2stfzu4gaga2b5l2ga2dr2g1amtgan2gagan2grg3anla3g2ano2g1armga3r2og1arti2g1arzga2sorga4spega4sprgas4taga4ste2g1auf2g1autg2d1aug2d1erge3g2l2g1eifge2in_gein2sge2intgein2vgei3shgelb1rge5lehgell2age3lorgels2tgel3szge3lumge4namge4nargen1ebge3necgen3szgen3th2gentwge2rabger2erger3noge1r2öge3r2ug2e1s23ge3scges4pige3steges3thge3t2a2getapge3t4ugge2ne3g2het3g2hiegi3alogi2e1igie1stgi2me_gi4mesgi2met2g1indgin2ga2g1insgi3t2ag2lade2g1lag3glanz2gläuf2g3leb4g3lerg3lese3g2lid3g2lie3g2lit3g2loa3g2lobg3loch3g4lok3g2lop3g2lotgne2tr4g3notgoa3li2gonis2g1ope2g1opfg2o1ragra2bigra2bl2gradl2g3rah2g3rak2g3räu2g5re_2g3recg4re2eg3reit2g3ric2g3röh2g3rui2g3rum3g4rup2g3rüc3g4rüng3s2ahg4saltgs3amags3augg4s3cegs4chig4s3crg3sel_gs3elig3selngs5erkg4setags4pieg4spings2pitgsrat4g3stang3starg4s3täg5stämg3stelg1steugst2heg3stirgs3tocg4stolgs3topgst4rig4sturgs4tücgu1an_gu1ant2g1u2fgu1ins2g1unfg2ung_gunge2g2un4s2gunt22g1urlgurt3sgu2s3agus2spgus2stha2choha2delha4dinh1adle2h2al_ha2lauhal2bahalb3rhal2lahal2sthand3shan2krh4a3rah1arm_h2armehar2thh1arti2ha3sahat5t2h1aukthau2sahau2sc2hautohau2trhä3usphe1choh1echthe3ckehe2e3lhe2fanhe2f3lhe3friheim3phei4muheine2h1einkhe1ismhe1isthel1eche3lenhe4lof4h1emphend2she2nethenst2hen5trh1entshe2ral2heraphe3rasherb4she2relh1erfüh1erkeher3thher2zwhe1stahe2tapheter2he3t4she1x4ahfell1hi2angh1i4dihi3enshier1ihiers2hil2frh1induhin2enhi3n2ihin3n2hin3s22hi3rehl1anzh1lauth5len_hlen3ghl2ennhle2rahl1erghl1erwh4lerzh4lesihl1indh3listhlo2reh3losihl2sanhl2serhl3skuhl3slohme1inhmen2shme2rahn3eighn3einhne4n1hne4pfh3nerlh3nerzhn3s2khn1unfho2ch3ho2ckahock3tho2f3rhol1au4holdyhol3g4ho4lor3hol3sh1o2lyho2mecho2medho4seihotli42ho2w1h1raneh3rechh4rei_h3reich3r2enhr2erghr2erkhr2ermhr2erzh4rickh4rineh4rinhh4risth4romeh4romihr2sauhr2serhr4sethr2tabhr2tanhr2torhrt3rihr2trohrt2sahrt2sehr1umsh2s1ech3s2exh2s1ofhs2penhs2porh2spräh2sprohst2anh1stechst2heh1s2tih2storh1s4trhst3rih1stunhs2ungh3t2alht3aneh3tankh4tasyht3a2tht1e2ch2t1efhte2heh2teifh2temph2t1euh2t1exh4theihthe3uh2t1inh2tolyh2torgh4trefh2t3ruh2t3rühts2tihu2b1ahu2b3lhu4b3rhu2h1ahu2h1ihuk3t4hu2l3ahu2lerhu2lethu3m2ahung4shu3ni1hus4sahus2sphu2tabhu3t2hhutz1ihühne4h2wallh1weibhy2pe_i4a3g2ia2l1ai3aleiial3laia2lorial3t4ial3z2ia2nali3and2ia3p2fi2a3spi3a4tai3at4hib2blii2beigi2beisibela2iben3ai2blisib3renib4stei2bunki2buntibu2s1ich1eii2chini3chloi2ch3ri3ck2eid2ab4i2d1au1i2deeidel2äide3soide3sp1i2dio1idol_i3d2scid2s1pie2breie2choie2fauief3f4ie2f3lie2froie4g5lie3g4nie2g3riegs3cie3lasiel3auiel1ecielo4biel3sziel3taiena2bi3e2näien1ebie3neri3en3gi3e2noien3scien3siiens2kien3spien3szier3a2ie2rapie3resi3ereuierin3ier3k2i3ern_iers2tier3teies2spie1staie2t1aie4t1oie2triiet2seiet3zwifens2if1ergif1erhi1f4lai1frauif4reii1f4rüif2topift3szig2absig1artiga1s4ige4naig1erzi2g1imig3reiig4salig3sprig4stoig4stöig3strig3stüigung4i2h1ami2h1umik1amtik1anzik1artik3atti2k1aui2k1eiike2l1ik1erfi2kindi3k4läi2k3raik2trei2l3abi2l1acil1a2di2l1akil1ansil1aspi2l1auil3ausild2eril2doril1e2cil1eheil1einil2f3lilf4s3ilie4ni2l1ipi3lip_i3lipsil3l2ail3l2iil2makil2mauil2mini2l1oril3t2hilung4i2manwima2tri2melei2melfi4meshi2metiim2meiim1orgim3pseim3staimt3s2in3a2ci4nacki2n1adin2arain2arsi2n3auin2dalin2dan1indexind4riin3drü1indusin1ehein2erhi4neskine3un1info_1infosing1af1inhab2inhar2inhauin2i3dini3krini3sei3nitzin2nor1inntain3olsino1s2in1ö2dins2aminsch2in2seb2insenin3skr1insta1insufin3s2z1integin3t4rin5trii3n2umin3unzinvil4io2i3dio2naui3ons3ion4stiore4nipi3elipi3en1i2rakir2k3lirli4nir2makir2mauir2mumir2narirpla4irt2stiru2s1isage2is3arei2s1äni2schmis1chyi2s3crise3haise3hiise2n1is2endisen3si2serhiser2uis2hasi2s1idi2s1of3i2soti2sparis1picis2piti2sprois4sauis3stais3stoiss3tris3stuis2sumis4tabis4tamist2anis4teliste4nistes3is4tocis5törist4raist3reisum3pit1ab_ital1ait1altit2an_it1arti3tauci4t1axi2t1äsi2t1eii4teigit2eili4teinite2lai4tepoi2t1idit2innitmen2i2t1ofit3rafit3rasit3rauit3räuit3ricit3romit4ronit3runit2speit2stoit2tebit4triitt2spi2t1umi2tunsit1urgitzes4it2z1wi2v1akiv1angi2v1eiiv1elti2v1urizei3ci2z1irjahr4sja3l2ajean2sjekto2jek2trje4s3tje2t1aje2t3hje2t3rjet3s2jugen2jut2e1kab2blka2ben2kabla2kabläka3b4r2k1abt2k3adaka1f4lkaf3t2kaken42kala_ka2lanka3leikal2kakal2krkal4trkan2alka2nau2kanda2k1angk2ans_k2anz_2k1apfka3r2i2k1armk2arp3kar2pfk2artaka2s3tka3tanka3t4hka4t3r4kaufrkau3t22kautok1ä2mikä2s1ckdamp22k1e1cke2he_kehr2s2k1eic2k1eig2keinhkel1acke3lagkel1aukel3b4ke2lenkell4e2k1empken3au2kenläkens2kken3szk2enteken3thk2entrk2entu2kentwke1radk2erkok1e2rok2ers_ke2selke4t1ake2t3h2k1e2xki1f4lki1f4r2k1intkis4to4k1lack4leidk3lem_2k3lerkle2ra2k3leukle3usk2lisc2klistklit2s2k3locklo2i3klost4klung42k1lüc2k5nerkno4bl2k5norkoh3lukol2k5ko3n2ekon3s4ko1r2a2k1orckot3s22k3radk3rats2kraum2k3rät2k3rec2k3refk3reick3reih2k3rick3ries3k4ronks1e2bk2s1emk2sentks1erlk2s1idk2s1ink2s1o2k3s2peks2pork1s2tik2stork2sträk2stumks2zenk2t1adkt1aktkta4rek2t1auk2tempk2tentkte3ruk2t1idkt1insk2t1ofkt1opekt4rankt3rask4trefktro1skt3runk2tuns2k1uhrku3l2eku3l2i2k3umlkum2s1kun4s4kunst32k1up_kur2blku2reikuri2ekur2spkur2stlab4ralab4ri2l3absla2ce_la2gio2la1hola2k1ila1k4lla3min1lammf2l1amtlamt4sla4munl1analla2nau3l2andlan2gl2lanhäl2anhe4lanli2l3ann4lansä2lantrlan2zwlap4pll3artila2saulast1ola4tel2l3athl2auf_lau2fol2aufz2lausl2lausr2lauto2l1ähnlä2s1cl4betal2b1idlb2latl4bre_lb3ritlbst3elb4stol2b3uflbzei2l3d2acl2d1akld1amml2da2rld3arild1arml2delel3der_ld1erpl2d1idl2d1iml2dranl3d4rul2d1umle2chile2gaulei2br4l1eigl2ein_l2eindl2eine2leinkl2eintl4eistlei2talekt2a2lektr3l2ela3lemesle4nad2lendul2e2nolen3szl1ents4lentzlen2zil2e1rale2ragle2raul1erfol2erfrl2erfül2erkal2erkol2erlel4ers_lers2klers2tl2erzales2amle3serleste3le1stole2tat2le3thlet4tule3u2f2leurole2xislfang3l2f1ecl4feisl3f4läl3f4lulf3ramlgen2alge3ral2getilian2gli3chili2ckali3d2ali2deo2l1idolid3scli3enelien3slie2stli2grelik2spli3m2alin3alli3narli2nefli2nehli2nepli2nes2l1inflings52l1inh2l1injlink2sli2noll2ins_l2insal2insc2linsp2linst2l1intli3os_li2p3ali3s2a2l1islli2tallit1s2lit3szlizei3lk1alpl3k2anl3kar_lken3tl3k4lul2k3rol2k3rulk4ställ1abbll1affll1aktl3l2alll3amall2anwll1anzll1armll3augl2lausl2l1ämll1echlle3enl2l1efll1eiml3len_llen3gl3ler_lle2ral2lerzll1imbll1impll1insl2l1ofll1opfl3lor_l3lorel2l1oull3s2kll2sprllti2mllt5s2l2marclm1auslm1indlm1inslm3stelm3s2zln3are3l2ob_lob4ril1o2felo2gaulo3h2e2l1ohrlo2k3rl1o2lylo2minlo2n1olo3renlo4skelo2speloss2elo4stelo3thaloti4o2l3öfelpe2n3l2p1holrat4sl3s2all2sannl3sarel2s1ecl2s1emls1erels1ergl2serhls1erlls2logl3s2pil2sprol3s2pulstab6ls4tafl3stecl3steil3stell4stemls2tiel2stitls2zenlt1a2mlt3andlt1angl3tarblt1artl2t1aultbau1lt3elil5ten_lter3alt2erglt4erölte2thl2t1eul4theiltimo4l2t1ofl4t3ötltra3llt3räult4rielt3roclt3rosl2t3röl2t1umltu2ri4lu4b32l1ufelu2g1alu4g3llu2g3rlug3salug3splu1id_lu1is_2l1una2l1unf2l1unilu2s1ulu2t1alu4teglu2toplu4t3rl2z3acl3z2anlz2erklz1indlz2wecm2ab4rma2d4rma4d2sma2ge_ma2gebma2gefma2gegma2gekma2gepma2getma2gevma2gew2m1aggma3g4n2m1agomai4se2m1aktmal1akma2lanma2lauma3lermali1emal3lo2malltma2nauman3d2ma2net2mansa2mansä2mansc2mantwmar3g2maro3dma3r2uma2tanma2telma5trimat3semat3sp2mausg4m1ändmä3t4rm2d1ummedie4mee2n12m1eif2m1eig3meistme3lamme2lekme2lermelet42melf_mel2semel5t4mena2bme3nalmen3armen3aumen3glme3normen4skmen2somen3ta2mentnmer2er3merinme2sal4meser2me3shmes2stmeste2me1stome3t2amie3drmi2e1imien3smie2romie4timi2karmi3l2amilch1mild4s2m1impmin2enmin2eumin2ga3min2omi2t1rmit3s2mit5sami5tsumi2t1umk5re_m2m1akm2m1almm1angmm1anzm2m1aumme4namme2samm1inbmm1infmm1inhmm1insmm1intmmi3scmm3stamm3strmmüll1m4nesimode3smo2galmo2k1lmon2s3mon3su2m1opemo2rar2m1orcmor2drmo2rermos4tampf3limpf1ormp3strms3andm4s1efms1erwms1inims1orim2spedm2spotm2sprom4stagm3stelm3s2tims5träm3s2tumt3aremt1eltm2t1eum2t1immtmen2m2t3romt2sprmt1urtmu3cke4m3unfmu4s1amu2s1omut1aumut2stmvoll14n3absna2ch1nach3s4na2drna1f4rna2gemna2h1a3n2aldna2letnal3lanalmo2na2lopnal2phn2als_nal3t4n4amenna3m4n2n1amtnamt4sn1and24n1ang2n1ans2nantrnap2sina2r1an2arle4n3artna3r2unasyl2na3t4hnat4sanat4sc3n2aul4nausb4nausgn2auso4nauss4nausw2n1ä2mnär4s53nä1umnbe2inn2d1akn2danlnd1annnde2sendi2a3ndo2ben2d3ren2drobnd3rolnd3rosn2druind2sornd2spr2n1ebnne3ein4n1ehr3neigtnek3t42n1ele5neleb4nelek4nelemne3lennel4la3ne3lu2n1embn1e2mi2n3emp2n1emsnen3a2n1endgnen3einenen14nengb4nengs4nengtnens4enen3skn1entb4nentn5nentrn1ents4nentzne2n3u2n1epone2posne2ranne2rapne2raun1erbine2reb2nerfü3nergrn2erlin1ermän2ern_ne1rösn2ert_n1ertrne2rup2n1erzne3sannesi1ene3skane2s1pne1stanes3tine2tadne2tapn1etatne2taunet3han1e2tunet2zi2n1eupnfalt4nf5linnft4s3ng2absn2g1acn2g1akng2anfng1anzn2g1äln3g2enngen2an3gläsn2glicngrab6ng3ratng3rocngs3panich1sni3de_nie4n3ni3eneni1eronifes3ni2grenig4spni2kalni2karni3ker4n1imp3n2in_n2in4a4n3ind4n1inhni2nor2n1insn2ins_4ninse4n1int2n1invni2s1eni2s1pni3spinis3s4ni2s1uni3t4rni3tscnitts1n2k3adn2k1akn3k2aln2kansn2kausn2k1ärnk4ergnk1inhnk3lennk3lesn2klienk3lunn2k3ronks2eink3s2znk2taknk2tannkt1itnk4topnk2trunmen2snna2ben2nadan2n1annnen3gnn2erhnn2erknne2rönner2znnes1enne4stnn1o2rnn3s2pn2n1ufno2blano2leu3n2opano2radno1rakno3ral3n2os_n2ostenost1r2nostvno3tabno2telno3t3hno4tha2n1o2x4n1ö4lnräu3snre3sznrö2s1n2sangn2santn2sausn2s1änns1e2dns1entn2s1epns1erfns1ergn2serhns1ersnsfi4lnsho2fn2simpnsi4tensi2trns2kaln2s1opn2spatns2peins2penn3s2pins4piens3ponn2sprän4spronst1akn3starn3statns4tornstü1bn2s1unns2ungns4unrns4unsn4s3zint3absn3t2alnt1angnt2arbnt1arknt2armn2t1äunte3aunt1ebente3g6n2teignt4enent4ernnt4ersnt4ertnt2hern2t3hon3t4hunti3kln2tinfntini1nt2insn3ti1tntmen2nto3ment3recn5trepnt4rign5tropn2t3rünt4saunt2sto3n4tu_ntu2ra2n3umb2n1ums2n3umz3nung_n3ungl2n1uninu4t3rn2z1aun2z1ännzdi1snzi2ganzig4snz1inin2zurkn2z1wan2z1wän2z1wuoa3cheoa3chioa4k1lo4a3lao4a3mioanne43oa3seo3b2al2o3b2äob3ein2o3b2iob3iteo2b3li2o3bloo2b3reob3s2hob2staocha2boche4boch1eioch3ö2och3teochu2fo2ckarock2erock3szodein3ode2n1odene4ode3sp2o3diaof1a2co2f1eiof2f1a1offizof2f5lof2f3r2o1f1rof4samof2speof2sprof2s1uof2teio2g1abog1alaog1ango2g1eiogi2erog1steohen3sohl3auoh3lecohl1eioh3lemoh3lenoh3lepohls2eoh2n1ooho2laoh1o2poh4rinoimmu4oka2laokale43o2kelok2s1po2l1akolars2ol1aufol4damol1eieol1eisol2fraoli3k4ol2kreol2lakol2lelolo3p2ol1ortol2strol2z1aol2zinom2anwom1arto2m1auo2m1eio3men_o2meruom1erzomiet1om1ingom1orgo4munto2narbon3ausone2n3onens2on1ergon1eröo3netton3g2lon2i3do4nikro4n1imon3ingonlo2con3n2eo2nokeon1orconsa2gon4samon2sebonse2lonst2hon3t2aoo2k3lo2p3adop3aktopa2leop2f3aop3fahopf3laop1flüopi5a4op5lago2p3le1op3t4or3a2bor4altor2ando2ranhor3arbor3attor1ändor2baror2dauor2deuor2ditor2dumore4aso2r1efor1eigo2reino2rerfor1ethor2fleorf3s42orgetor3g2h2orgiaorgi1eor3gle2o3rico3rier4orin1or5ne_or3s4aor2täror2tefor2theor2torort3reo4r3un2o3s2ao3scheo2s1eio3s2hi2os2kl2os2koo3s2poos2seios2s3oos4sonos2s3pos2s3tosta2bos4teios2t3hos3tilost3räost3reost3ufo3s2zeota2goo5tarko3tarto2t1auot3augotei4not4em3otemp2ot5helo4t3hiot3hosot1opfoto2rao2t3reot3rinot4spaots2peot2sprot2t3rot4triou1f4lou4le_o3undsou3s2ioviso3owe2r11o2xido1y2enöbe2laöbe4liöh3l2eöl2k3löl2naröl2ungöp4s3tö2r3ecö2r1eiör2ergö2rerlör2f3lö2r1imörner2ör3s2kö2schaö2schlö2schwö2s1eiös2s1cöte4n3pa1f4rpa1k4lpak2topala3tpa2narpa3neipa2neu3pa2nopan3sl3panz4pa5regpa5rek1park_par2klpar2kr1partn1partypar3z2pa3s2ppat4e2pa5t4rpa3unipä3ckepä2t3hpät3s4pekt4spe2letpe2lexpell2apell4epen3dape4nenpe2n1o3pensipen3z2per2an1pere2per4nape2robperwa4pes3s2p2f1akpf1ansp2fa4rpf3arepf3armp2f1au4p3fe_pf1eimpf1einp3fen_p2fentp3fer_pf2erwp3f2esp2f3läpf3leipf3lie2p1heiphen3dphen3sphi2ka2phthepi3as_pi3chlpiela2ping3s3pinsepi3onu3pirinpi3t2aplan3gpo2laupo4lorpo1o2bpo1ralpo1raupo4stapo4stäpo2stopos6trpo2t1upp3anlppe2n1p2p1f4p3p2hopp5lanp2p3rap2p3repre2e13preis2p3rer3p4res1prinz2prosspro1stp3steap3stelp3s2tipt3albp4t3ecp4t1eip4telept1in1pto3mept1urspul2sppu2s3t2r3aacra2barrab2blr2aber1r4abi2r3abwra2chura2dam2radapraf3arra2ferra3gle3r2ahmrail4l2r3airra2krera2kro2raktira2la2ral3abr3alar3r4aldral3larall2e2rallgr3alp_2ralper3al3trama3srambi2ra2mer1r2ami2r1amtramt4sr4andar4anderand3sr4aner1rangirani1eran2kr2r1anm2r1anpr2ans_r2ansp2rantr2r3anw3rareirar3f42r3arz2rato_rat2st3raub_rau2mi3rausc2rausgrau2spraut5srä2s1c3rätser2b1abrbal3arba3rerb1artrb1aufrb1echr4belär3b2larbla2dr2ble_rb3lerrb2linrb4seirb3skarb4stärb3strr1che_r1chenrch1s2rch3sprch3tar3d2acr2d1akr2d1alrdani1rd1antrd1anzrd2ei_rden3drde3rerde3sprdi3a2rdia4lrdo2berd3ratre2altre3at_re3atsre2b1are2b1lreb3ra4rechs2reck_2recki2reditre2hacre2h1ire2h1orei4bl4reifrrei3gareim2p4reingr3eink4reinr4re2ke2r1elbre3lei2r1elf2r1elt4rempfrena2bre3nal3rendiren3drren4gl2rengpr1ense2rentw3r4er_2r1erbr2erbr2r1erdr2erki2rerlö2r1ermre2robr2erse2rerspr2erte2rertr2r1erzrer5zer2erzy3r4es_ress2ere1stare2thyreu3g2re3uni2r1eurrewa4rrf1ältr2fentrf3licrf3linrf2s1ärf2s3trf3t4rr2g1ahr2g1akrge4anrge2blr2getor2glanr2gleur2gligr2g1obr2gregr2gresr2gretrg3rinrg3s2prgs4tr3r4he_3r4henrho2i3rib2blri1cha2ridolrie2frriene4rien3srie2nuri1er_ri4ereri2f1ari2ferri2f1orim4scr2i3na2r1indri3n4erine1i2r1infrin2foring3lrin2gr2r1inh2rinitr1innu2r1insrin4sorin2spr2inva2rinve3risikri4s1pri3t2irit2trr3klaur2klisrk5nebr2k5nurk3räurk3rinrk2s1erk3shirk2tinrk2t3rrk3trark4trirk1unirlös3srl2s1prl3ster3m2agrma2larm1ansrm1anzrm1a2pr2maphr2m1efr2mider2m1imrm3starm3umsrn2andrn3anirn2a2rrn3arern3arirn3eifr4nerfr4nerkr4n1inr2n1opr2n1orrn3s2ärn3s2prn3s2zrn3t2ero2bei3rock_r2o3deroh3na3r2ohrro2madro2merror3alro2ratro2reiro2r1oror3thro3s2iro3smorost1rro4tagrote3iro2thoro4trirots2orot2taro3t2uro3untrö2b3lrpe2rerrer4srre2strr2n3ar2r3obrr3stur4samprs3anprs3antrsch2lr3schur3schwr2seinrse2n1rs2endrse4ners1erers1erörs1ersrs1erzrs1etars2kalrs2kanrs2kiers2kisr4s1opr4sordr2s3phrs2tecr3stier2stinr2stiprs4tobr4stotr3s4trr3s4türtals1rt1angrt1annrt1antrt1anzr2t1arrte1e2rt4eifr2telfr2temort1ersrt3holrt2humr2t1idr2tinfrto2rir4trakrt3recrt1rosrtrü2crt2sparts2pert2sprru2ckurude2aruf2s32r1uhrru1insru2m3ar2ums_2r1unar2unde2r1unf2runglrun2kr2r1unl2r1unmru2r1erus4stru3staru2t3rrü1benrwun3srz1a2cr5zenerz1engr3z2ofrzug2u3sabetsa3blesach3t2s1ada2s3affsa1f4r3s2al_sal2se2s1alt3s2alz4s1amnsam2tos2an2cs4and_3sang_2s3anh2s3anl2s3anssan4sk2s3anw3s4ar_3s2ara4s3arb3s2ard3s2ars4sartisa4ru24s3ath4s3atlsauri1s3ausw2s1änd3sänge2schak2schao3sche_2schefsch2en3sches4schexschi4es4chim3schis2schmö2schn_2schoxschs2e4sch3tscht2ascht4rsch2up3s4cop3sco4rsda3mese3at_s1echtsee3igseein2se1er_se1erö2s1effse2galse4helse2hinseh3rese2hüb2s1ei_2s1eig2seinb4seing2seinh4seink2seinl2seinn4seinr2seinw4s1eis3s2eitse2l1ase3ladsela2gse3lamsel1ec4selem2self_s3elixse2l3ösel3szsel3trs4e3ma2s1emp3s2en_se4nagsen3gl3s2enise4nob3s2enss2ent_s2enti2sentw2sentzse2n3use5refser2ers2erfrs3erfüs2ergr2serhöse2robs2ers_2sersas4ert_s2ertase3rum3s4ervse2selse1stase2tatse1u2n3s2ha_4s3hansho4resi2achsi3am_si3enesi1errsi3gnusi2g3rsig4stsi2k1äsik3t42s1immsi3n4a2s1ind2s1infsing1asin3ghsin2gr4s1inhsini1e2s1inq2s1ins2s1int4s1invsi2s1esi2s1osi2s1psi2tausi2tra3skala4skanz3s2ki_3s2kik3skulpsler3s3s4lipsli4tu4s5not2s1o2bs1o2he4sohng2s1ohr4so2lyson3auson3säso1ral2s3ordso2rei4s1ostso3unt2s1ö2l2spara2sparo3sparuspe3p42sperls2perr2spers3s2pez3s2plis3p4lu4s3poss2potts2pracs2pran2sprax2spräm4spräs2spred2spres2sprob2sprüfsrat2ssrö2s1ssa3bos2sanos4sansss2antss3attsse3hass1erös3s2essse3tass1offs2s1opss1oriss2pens2spros3stelss4tipss2turss1ums2stabb3s4tad3staff2stale2stalkst1alpst1ami4stan_sta4na3stand2stani2stans2stanws4tar_4staris3tat_2stauf2staum3staur2staus4stälts4tänd5stätts3täus4s5te_3s2tegste2gr3s4tehs2te2i3steig4steil1s2tel2stel_2steln2stels4stem_s5ten_st4ens4stermste4sts4teti3s2teu1steue4steufs2t3ho2stie_s2tiegs2tiel2stien3s2tif3s4tims4tinfs3tinnst1ins1stitu2sto3d4stod_s4toffs4t3om2stopo2stor_2store2storg2storis3tort2stose4stote2stöch2strad2strag4strai4strak2stral5straß2strua2strug3struk2strup2st3t43s4tud2stumt2stun_4stunn2stuntstu3rest3url2sturn2s3tus2stüch2stür_2stüre2stürg2stürs3s2tyl3su2b3su2cha2s1u2fsu1it_su2marsu2mau3s2umesu2mels3umfesum1o2su2mors3umsas3umst2s1uni2s1urlsüden24s3zeis2zena4szent4s3zetße2l1a2t1abb3tabel2taben3table2t3abn2t3abtta3d2s3taf2et1af4rta2ga24ta3gltag4sttah3leta3i2kta1insta1ir_t1a2kata2krotak6ta3taktb3t2al_ta3lagta3lak3t4aletal2löta2mert1amplt1a2na4t2andt3ankl2tanwa2tanwät2anz_t1anzat1anzuta2pe_ta2pes2t1armt1artitar2to2t1arz4t1aspta2tanta2tautat3eita2temtat3heta2tom4tatue2t1auf4taufg4taufnt1ausb3tausct2auset1ausk4tausltaxi1s2t1ältt1ängs3t4ebbte3cha3technteck2ete2ckite2en3te1erwteg3re3t2ei_t3eifr2t1ein4teinf4teinnt3eis_t3eisb3te3letel1eb2telemtel1ente4leute2littell2ete2l1ö3telt4tel3tatel3thte2min2temme2tempfte4m1utena2bte4naste4nauten3dat6endit6endote2nettens2et4entat3entb4tentdt4ente4tentnten3zwt3e2pi3t4er_tera2bte1rafter3am4terbs4terbtte2relt4erfrte3ria3termi2ternct4ers_terst4ter3zatesa2cte2santesä2cte2selte2sprtes3s2te2tat3teur_3t4ha_3thal_4t3hau1t2he_2t3heit4heint4henet4heni2therr3these2t3hil2t3himth4mag2t3hoc2t3hoht4hol_2t3hot1th2r2ti3a2mtiden2ti2deo3tief_3ti2erti2kamti2karti2kinti2kräti2larti2leiti2lel4t1imp3t2in_4t1indti3n2eting3lting3s2t1inj2t1int4t1invti2seiti1sta2ti3tuti2vanti2velti2v1oti2v3rtlung4tnes4s3tochtto4d1utom1e2to2mento2nauto2pakto2patto2rauto4ränto2relto3rent3orga3torint1ort_3tost4to1sta3to3teto2thotouil44tractt3rad_6trahm5t4rai2trand3trankt3rann3transt3raset3rasi3träne4t5re_tre2brt3recht4reck6t3red5t4ree4trefe4trefot4rei_4treic2treift3reigt3reint3reis6treitt3reiz6t3relt4ren_3trendt3rent2trepe2trepot4reprt4res_3treuh5trieb2triegtri4er5triggt3rind4tringtri3ni4trinn4tripttrizi13t4roitro2ke4trom_tro2mi4troml2t3rootro1pe3tropf2t3röttrums12trund5t4ruptru2thtrü1betrü1bu2t3rüct4sa4bt3s2act2s1aht4s3art2s1änts4cort3seiltse2n1t2s1erts1init2s1irt1slalt3spalts1parts2pedt3spekt3s2pit4stagts3takts4talt2stipt4stitts3tocts3tort2strits3türtta2bet2t1adtt2anttt1arttt1ebett1eiftt1eistte2lattel1otte2satte2sät4tetitt2häut2t3hot3tro1tt4roctt2sentt2sortt2spett2sprtt2stitu1almtu2chitu3fent3u2kr3t2ume2t3umf2t3umg2t3umk2t3umrtum2situm2so2t3umt2t3umz2t1una2t1und2t3unft3unga2tunif2t3unttu2re_tu2reitu2resturin1tück2s3tür3s3tütentze4n1tz2enetz1erltze2rotz2erst3ze2stzgel2tz1indtz1inttz2tinua2lauu3aletual2mau3a2louara2bu2be2cub3licu2b3luub2sanub2s1oub2spau1cha_uch1eiu3chesuch1iluch1inu2ch3ruch2souchst4u2ckemuder2eudi3enuditi4ue2neruenge4uen2zuue2r3aue2r1äu3erehu3ereru3erexuer3g2uer2neue2r3ouer3scuer3t2u3erumue4teku2f1äsu2f1eiu2f1emu3fen_u2fentuf2ernuf2frouf1oriuf4sinuf2spouft3s2u2g1apu2g1eiug3ladu3g2löug4serug3spaug4sprug4spuug5stäug3strug3stüuhe3s6uh2reruh4rinuisi4nui4s5tukle1iuk2t3ruld2seu2l1elul1erful1erhul1erwule2saul1etaul1insul2lesul2p1hul4samuls2thul4trium1allum1anzu2maut1um3d2umer2aum1ins3umsatum4serum2simu2m1uru3n2amu2n3an2un2asun4dabun4deiun2didun2dorun2d3r4unds_und3spund3stun2ei_un3einunen2tun4es41unget1ungew1unglüun2g1rung3raung3riung4saun3ide1u2nifun3islu3n2it3u2nivun2keiun3n2eunvol2u1or3cu2pf2eu2pf1iu3rabaura2beur2anbur2anhu2r1auur3b2aur1effu2releu4r1epur1erhur1erwur2griurg3s4ur1iniur3insur1intu2rinv1urlauur3sacur2sanur2sauur2serur4sinurst4rur2z1wu4s1afus4annu2s1ecu2s1eiu3seiduse1rau2serpu2s1opu2spatu3spekus1picus2porus4sezus2sofu1stalus3tauust2inu2stunu2sturut1altut3a2mu2t1apu2t1arute4geutel1eute2n1u2tentu4t1exu2t3hout1opfu2topsut3reaut3s2aut2s1äut5t4lutu4reutu5ruut2zinut2z1wuve3räüb2s3tücht4eü3ckenück1erü3den_üden4güdwes2ü2f1eiü2h1eiühl1acüh3r2eühr3taü2mentün2fliün2g3lün3strü2r1eiü3r2o1ü2schlüs2s1cü2t1alva2teiva2t3hvatik2va2t3rvat3s4va2t1uveits3ve3nalve3radve3rasver3b2ve4rekve4rinver3stver5te2ve3scves3tivi4a3tvie2w1vi2l1avi4leh2v1i2m2v1intvi3s2ovoll1avol2liv1steuwab2blwa3chewaffe2wa2g3nwah2liwal4dawal2tawal2towang4s1war2eware1iwart4ewass4e4webebwe2g1awe2g3lwe2g3rweg3s4wei4blwei2gawei3k4wei4trwel2t1wel4trwen3a4we2r3awer2bl1werbu1werduwerer2wer2fl1werk_wer2ka1werkewer2klwer2kuwer2tawer2to1wertswest1awes2thwest3rwes4tuwett3swi3ckawien2ewie2stwim2mawin2drwi3s2e1witzlwo2chawoche4woh2lewo2r3iwo4r3uwört2hwul3sewur2fa1wurstwus3te1wu4t1xe3lei3x2em_xen3s2x1i2doxin3s2xi2so2xis4täx1i2tuxtblo4x2t1eix4tentx2t3evy3chisyloni1y2p1iny1s4tyy2s1u22z3a2b2z3a2k2z1all2z3anf2z3anlz1artizar2tr2z1arzza1st42z3at3z1au2fzbübe32zecho2z1eck2z1effzei3lazeile42z1einzei3s4zeist4zei2trze2lenzell2azel3sz2z1empzens2ezent3sze2r3a2zerhöz2erl_2zerlö2z1erq2z1erzze3skuzes2spzes2stze2s3tze3sta2zettszger2azi3alozi1erhziers1zi1es_2z1impzin4er2z1inf2z1inhzin1itzin2sa2z1invzirk6szi3s2zzi1t2hzor4ne2z1oszz2t1auz4tehezt1inszt3reczu3ckezug1un2z1uhr2z1um_zumen22z1umszup2fizu3r2a2z1url2z1urs2z1urtz2wangz2weigz1weis2z1wel2z1wen2z1werz2werg2z1weszzi1s4",7:"_al4tei_amt4s3_and4ri_an3gli_angst3_an4si__an4tag_ausch3_be3erb_be3r2e_berg3a_bo4s3k_bu4ser_da4rin_da4te__da4tes_de4in__dien4e_ebe2r1_en2d3r_en4tei_er4dan_er4dar_er4dei_er4der_es5t4e_fer4no_fi3est_fi4le__fi4len_ge5nar_ge3r2a_ge3r2e_ger4in_hau2t1_her3an_ho4met_ima4ge_ka2b5l_lo3ver_lus4tr_men3t4_orts3e_pa4r1e_reb3s2_re3cha_rein4t_reli3e_res6tr_ro3m2a_sali3e_sim3p4_sto4re_tage4s_to4nin_tri3es_ul4mei_urin4s_ur3o2m_ve5n2e_wei4ta_wor4tu_zin4stab1er2raber4ziaber4zoab3essea4cherfa4cherka4cheröach1o2bach2t1oach1u2fa3d2ar3ade1r2aade3s2pade5str2ad3recaf4t5reage4neba4gentuage4ralage4selage2s3pag3esseags4toca2h1erhah4l1eiahner4eahre4s3ahr6tria3isch_1a2k4adak5t4riala5ch2a2l1angalb3einalb3eisal4berh3a2l1efa4l3einal3endsa2l1erfa2l1erha2l1ert3a2lerza2l1eskali4eneali4nalal3lenda2l1o2bal4spalalt3eigalt3ricalt4stüalzer4zamen4seamp2fa2am4schlana4lin2ana1s4and4artandel4san2d3rüand4sasand3stean2f5laan2g1eian2g3raan2k1anan2k3noan2k3rä3antennan3t4heant3rina3ra3lia2r1anga2r1ansa2r1anza2r3appar2b3unaren4seare3r2aa2r1erhar2f3raari3e4nari3erdari3ergarin3itark3amtar2k1arark3aueark3lagark4trear4merkar3m2ora2r1o2dar2r3adarre4n3ar4schlar4trama4schecasch3laa2s3e2ma2s1o2fas4s3eia1s4tasas6t3rea2t1aktater3s2ato4mana2t1ortat4schnatt3angat3t4häat2t3räat4zerkat4zerwat2z1inau2b1alauch3taau4ferkaup4terau2s1ahau4schmau4schoaus3erp3aussagaus4se_aus5triau2t1äuä3isch_äl4schlän3n4e2ä2r1eneär4mentäser4eiäse4renäskopf3ät4schlät4schräu4schmäus2s1cba2k1erban2k1aba2r1ambau3s2k2b1eier2b1eimebe1in2hbe2l1enben3dorben4spaben4spr2b1entbben5t4rber4ei_be4rerkber4in_ber3issbe2s1erb3esst_be3s4ze4b1illubis2s1cb2i3tusbjek4to2b3leidbo2l1anbor2d1ibor2d3rbor2t3rbra1st42b3rat_2b3riemb4schanb6schefb4s1erfb4s1ersbst1a2bb2s3träbs3treubtast3rbu4schlbu4schmbu4schwbügel3eca3s2a3ch3a2bich3anst3chartache4fer4chelemche4ler4chents4chentwche3rei2ch1e4x3chines2ch1invch3lein2ch1unf4ckense4ckentw4ckerhö4ckerke2ck1err4ckerze2ck1eseck4stro2ck1um3co4der_com4te_comtes4cre4mes2d1alar2d1ammädan4ce_dan5kladan2k1odar2m1i2d1au2f2d1aus3delei4gde3leindel4lebdel4leide2l1obdel4sandel2s5edel2s1p4denergden4sende2re2bde4reckder3ediderer4tderin4f4derklä4derneuder3taudes3eltde2sen1de4stredes4tumdeten4tdge4t1edie4nebdi3ens_die2s3cdi2s5tedi4tengd2o3r4ador2f1a2d3rast2d3rauc3d4reck2d3reic3d4riscdrunge3drü5cked4s1amtds3assid4schind2s1e2bd4seinsd2s1engd2s1entd2s1erfd2s1erkd2s1erzd4s1etad3s2kand2s1pard3stell2d1un3ddu4schndu4schrdu4schwe4aler_e3at5t4ebens3eebet2s3eb4scheeb4stätebs3temebs3t2hech1o2bede3n2eeden4seeden4speder3t2ed2s1esed2s3treein4see2f1e2be2f1i2de2f1insege4strehen6t3ehe3strehl3eineh4lenteh5l2erehr1e2cehr3erleienge44eigeno1ei2g3nei3k4laei4leineil3inseim3allei4nengein4fo_ein4fosein4hab3einkomei2n1o23einsate4inverekt4antekt3erfekt3ergela4bene2l3a2me2l1a2re2l1eine3leinee4leing2e3len_e4lensee2l1ente2l1erge2l1errell3ebeell3eiseller4nelt3eng3elternelt3s2kelt3s2pe2m3anfe2m1ansem2d3a2e2m1erw1e2metiem2p3leena3l2ien3d2acend4ortend3romend3s2pene4bene4n1enten4entr4e3ner_e2n1erd1e2nerge2n1erle2n1erre2n1erse2n1erte2n3erue2n1erwe4n3esseni3er_e2n1i4me2n1o2benob4lee2n1o2ren3s2poen4terb3entspr4entwetenz3erte4ratemerd3erwer3echser1e2ckere4dite2r1e2h4e3rei_4e3ren_e4rensee4rentne2r3erfe2r1erher3e4tiere4vid3ergebn4ergehäe3ri3k44e3rin_e2r1ini3erlebnermen4serm3ersers4toder4tersert3ins3erweck6erweise4s3atoe2s3einese4lere3s2peke3s2pore3s4praess3erges2s1paestab4be4starb1e2stase1s2tecest3ories3tropeten3d2eter4höeter4tre4traume6t3recetsch3wet2t3auette4n1et4t1umeu3ereieu3g2ereve5r2iewinde3e2z1ennfa4chebfa2ch1ifäh2r1ufeh4lei2f1eing4f1einh2f1einw2fe2lekfe2l1erfel4sohfe4rangfer3erz4ferneufest3ei2f1e4tafet2t3afeuer3effel2d1f2f3emifi1er2ffi2l1anfisch3o2f3leinflu4gerfor4teifor2t3r2f5raucf4schanf4scheff4s1ehrf2s1entf4s1etaf3s2kief2s1pasf3s2porf4stechf3s4telf3sternft1a2bef4t1entft4scheft4s3täft4stri2f1u2nifun2k3rfus2s1p4gangeb2g3ankuga2s3eigas5tangebe4amge4lanzge4lessgel3stegel3t2agen4auggen2d1rgen3eidgen3erngen4samgen4ta_2g1entfge4renggerin4fgerin4tger4satger4stoges3aufges3eltge2s3erges3s2tgien2e12g3isel3g2laub2g1lauf4g3lein4g3lisc2gni2s13g2num_2g3rede2g3reic2g3rein2g3renng3riese2g3ring3g4runsg4s3a2kg4schefg3s2eilg3s2pekg3s2porgst3entgst3errg4s3torgs4trat4gungew2g1unglguschi5gus4serhaf3f4lhalan4chal4beihal4t3rhar4mes2h1aufmhau4spahäu2s1chba2r3ahe4b1eihe5ch2ehe2f1eihef3ermheiler4hei4nehheit4s3he2l3auh3e2lekhel3ershel4meihe4n3a2hen3endhen3erg2h3entwher3a2bhe4reck4hereighe4rerwh1er2foherin4fherin4sh3erlauhe2s5trhie4rinhif3f4rhi2l3a4hin4t1ahir4nerhlags4ohle3runhner3eih3nungeho2l1ei2hot3s2hrei4bah4r3eigh3re2s1h2r1etah3rieslhr2s1achr2s3anhr3schlhr2s1enhr4s1inhr4s1ofh2s1achh4schanhse4lerh2s1erlh2s1ingh2s1parhst3alth2s3tauh3steinh5stellhst3ranh3taktsh4t3alth4t3a2mh4t3assh2t1eimh2t1eish4tentfht3erfoht3erfüh2t1erhh4terklht3erscht3ersth2t1erzh4t1eseh4t1esshte3stah4t3rakht3randh2t3rath4t5rinh2t3rolh2t3rosh4t1rösht3spriht4stabhts4tieht4stürh2t1urshu2b3eihu2b1enhu2l3eihu4lenthu2l1inhut4zeni3alenti3alerfi3alerhi3a2leti3a4liai1ät3s4i2b1aufich2t3rieb4stoieb4strie2f1akie2f1anie3g4rai2e2l1aien4erfienge4fien3s2eie3r2erie4rerfi2er5niier4sehier3staier3steies2s3tie2t3hoie4t1ö4i2f3armift3erkif4t3riift3s2pi2g1angi4gefari3g4neuig3steiig4strei2k1a4ki2k1anoi4kanzei2ker2li2k1etaik4leriik2o3p4ikt3erki2l3a2mi4lentsi2l1erfi2l1ergi2l1erril2f3reilig1a2ili4gabi2l1indil3l2eril4mangil2m3atil2z1arilz3erki2m1armimat5scima4turi2m1erfi2m1erzi2m1infi2m1insindes4ii2n1engin3erbei4nerbiiner4löing4sam3inkarninma4leinn4stains3ertin3skanin3stelin4s3umional3aion4spiir2m1eii4s1amtisch3ari3s2chei4schefi4schini2sch1lisch3leisch3obisch3reisch3rui4schwai4schwoisch3wuise3infi4seinti2s1ermi2s1essis4s1aci1s4tati1s4teui1s4tilit3a4reiten3s2iti4kani2t1in1i2t3ranits1a2git2s1e4its3er1it4stafi2v1enei2v1enti2z1enejek4terjektor4je2t1u2jugend3jung3s42k1a2bo2k3a2drka3len_ka4lenskal3eri2k1annakari3es2k1artikau2f1okauf4spke1in2d2k1eise2ke2lek2ke3letkel3s2kk3enten2k1ents4kerfahk4erfamk3ergebk3er4hökerin4tker4kenker4neuker4zeu2k1i2dekie2l3o2ki3l2aki3n4o32k1inse4k1lastkle3ari4k3leit2k1o2fekop4fenkot4tak2k3räum2k3redekreier4k4s1amtk2s1ersk2s1erwk3stat4k2t3a2rk2t1erhk2t1ingkti4terk4torgakt3oriek2u3n2akuri4erku4schl4l3aben4l1a2bl2l1a2drla2g1oblan2d3rlang3s4l1a2po2la2r1anla2r1eila4rene3l4ar3glar3ini2l1ar3t3lasserla2t3ralat4tanlat2t3rlau2b3rlaub4se2l1ausslär2m1al2b1edel2b1insld3a2b1ld3a2ckl2d1a2dl2d3a2nld4arm_lecht4ele2g1asleh3r2elein4duleit3s22le2lekle2m1o24lendet4lenerg2l1ennilen4sem2l3entwlent4wäle2r3asl3ereigle4rers3lergehl3ergen2l1ergilerin4s2l1er2ö3l2erra2l1esellgeräu33lichem3licherliebe4slie2s3clik4ter2l1indulingst4lin2k1ali4schu2l1i4solkor2b1ll1a2bel2l1abtl2l1a2mlle4n3all3endul4lentsl4lerfol4lergoll3erntll3ertrl2l1indl2lo2bel2l1o2rll1ö4sellus5t6l2m3a2blm3einsl2m1e2pl2m1erz2l1o2bllos3t4r2l1ö4l3l2s1a2dl4s1ambl4schinl4schmül2s1e2bl2s1ersl2s1erwl2s1impls3ohnel4t3amel2t3atol2t1eislt4stablt4stocltu4ranluf2t1aluf2t1eluf2t5rlung4sclus4s3alus2s1cluss3erlus2s1olus2s3plus2s3tlus4stälus4t1alust3relut1o2fmach4trma4ges_ma4laktma4l3atma2l3ut2m1analman4ce_man3ers2m1angr4ma3r2oma3s2pa4m1aspemassen3mas4telma1s4trma2ta2b2m1au2fmäu2s1cmbast3emedien3mein4dame1i4so2m1e2miment4spme2r3apme4rensmerin4dmerin4tmerz4en4m1essames2s1omes2s1pme4t3römierer4mil4cheminde4sming3s4mi4schami4schnmi4schwmis2s1cmi2s5tem2m1ansmme4linm4mentwmme2ra2mme4recmmi1s4tmo4n1ermor2d3amoster4mpf3erpmpf3errms5trenm2t1erfm4t1ergm2t1erlm2t1ersm2t1ertm4t1etam2t1insmt3s2kamun2d1amül4lenmütter3na3chenna2l1a2na4lent4n1a2nana4schw4n1a2synauf4frn4austenbe3r2en3ce2n3n2d1anznde4al_nde4lännde4robn2d3ratn4d3runnd4stabnds3taune2e2i22ne2he_4n3eing4n3eink3ne3l2o4n1endb4n1endd4n1endf4n1endh4n1endk4n1endp4n1endt4n1endwne4nenenen4ge_nen4gen4n1entl4n3entwne2ra2bne3r4alne2r3am4nerbe_4nerben4n5erfonerfor42n3erhö2n1erlöner4mit4n1ernt3n2ers_2n3ersa4n3essine2t1akne2t1annett4scnfi4le_n2g3a2mn2g1andn2g1einnge4ramnge4zänn2g1i2dn3g2locngs5trinie3l2a3n2ing4ni4schwnitt4san4k3algn2k1insn2k1ortnk2s1aln4n1alln4nentsn2n1unfn2o3ble2n1ob2s2n3o2fenor2d5rno4t3eino2t3inno2t1opn2s1a2dn2s1alln2s1äusn6schefn4schronsen4spn2s1erkn2s1erön2s1erwn2s1erzn4s1etan2s1inin4stat_nst3eifn3stemmns4tentnst4erön4stracn4strien3t2a3cn4tanzan2t1eisn4t1essn2t1inhnton2s1nt3reifnt3riegntu4re_ntu4res1n2ung4n2z1a2gn4zensen4zentwn4zentznz3erwe2o3b4enoben3d4oben3seobe4riso2ch1ecocher4ko3d2e1iof2f1inoge2l1io2h1eiso2h1erto2h1erzoh4lergoh4lerwo3isch_ol2l3auoll1e2col2l1eiol4lerkoma4nero3m2eiso2m1indo2m1into2n1erbo2n1erdon3n2anont3antont3erwon4t3riop4ferdopi3er_o2r3almor2d3amor2d1irord3s2to4rientor2k3aror4mansor4mentor3n2o1oro3n2aor2t1akor4t1anor2t1auort3eigort3erfor2t3evort3insor4trauort3ricor2t1umo4sentso2s3peross3andos4t3amos3tarrost4artos4ta4soster3eos4t1obost3ranost3roto3t2e1iote2l1aote4leio2t1erwo2t1i2mot4terkoun4ge_our4ne_ozen4taöchs4tuögen2s1öl2f1eiö2r1e2lö3r2erzö2r1uneö2sch3mpa2r3afpar3akt2par2erpar4kampar4kaupe2l3a2pe3li4npe3n2alper2r1a2ph1erspil4zerpingen4pi2z1in3ple5n4po2p3akpo2p3arpor4tinpor4trepor6tripo2s3tepost3eipost3rap2p3a2bppe4lerp4t1entpt3ereip4t1erwp4t1erz2r1acetra4chebra4chinracht3rr3a2d3r3ra1k4l2r3alm_r4alt2hram4manram4m3uram2p3lran4dep4r3aneiran4spara2r1inra4schl2r3asph2r3attarau3e2nrau4man2raus5srbe3r2erchst4rr2d1elbrden4glrder4err2d1innre3alerrech3ar3reigewrei3l2arei3l2irei3necre1in2v2re2lek2r1entl2r1ents4r3entzr4ergen2r1ernä4r3erns4r3ernt3r2ers_2r1ersare2s2tu2r3evid2r3e2x1rfi4le_rfolg4srf4s1idrf2s3prr2g1a2drge4ralrge4taprgi4selr2g3ralrg5s2turi2d3anri3ers_ri3estiri2f1eirif4terri4generin4dexrin4diz4rinnta3r4ins_r4inspirin4tegrin4t5rri4schori4schwr3i2talr2k3reark4stecrkt3ersrk2t1o2rl2s3tor2m1aldr2n1anzr4n3eisr4n1enern3enser4n1ergrn4erhir4n1ertrol4lanron4tanros2s1cro3st2arre4aler2s1a2dr4s1amtr2s3angr3sch2er4stantrs4temprs4terbrst3ingrst3ranr2t1almrt3a4rer2t3attrtei3lartei1s4rten3s2rt3ereir4terfor4t3erhr2t1erkrter4rerte3s2kr2t1imar4treisrt4s1ehr2t1urtru3a2r3ruch3strun2d1arund3er2r1u2ni4r3uniorus2s1pru2t1o2rve4n1er2z1erfr2z1ergr2z1erkr2z1erwrz2t3ror3z2wecsa2cho22s1a2drsa4gentsa3i2k1sa2l1ids3ameri6s1amma2s3a2nasan4dri4s3antr4s3a2sy2s3aufb2s3ausb3s2ausesbe3r2es4ch2al4schanc4schangsch3ei_4schemp4schess4schiru4schle_sch6lit4schre_4schrinsch3rom4schrousch3s2k4schunt4schwetsch4wilsdien4e2s1echo2s1e2ckse2e1i4se2h1a2se4h1eise4herk5s4ein_sein4dusei3n2esein4fos4eins_4seinsp4seinstsel3ers2s1endl4s1entf2s3entg2s1entsser3a2dse2r3als3erbe_s3ereig2s1erfo4serfül4serken2s3ernt4s3eröf4sersehse4r1ufse3rund4se4tap4s1e2thsi3ach_siege4ssi2g1a2si2k1absik3erlsin3g4lsing3sasi4schuska4te_4skategska4tes4s3klassni3er_sni3ersso4l1eisol4ler2s1orga5s2orgeso2r1o24s1o2ve4spensi2s1peri3s2pi4e4spier43s4prec3sprosssrat4scss1a2cks4s1alas4s1albs4s3amts4s3angs4s3anzs3sa1s2s2s1egasse3infss3ersessquet4s3ta3li4s3tanns4t2ars3staus_st3a2ve4stechn3steilhstei4naste4mar6s5ter_3sterncs4t3ese3s4tett1s2ti2rst1i4sosto3s2t1s4trah4strans3s4tras4straum4s5träg4sträne4s5tref4streibst3renn2s4trig2s5trisst3rollstro4ma4st3run2s4t3s42stum2sstum4sc3s4tunds2t3uni2s3tuns2st3urtsuch4st3s4zeneße3r2eißi2g1a2ta2b1anta4bend2t1a2drta2g1eitahl3sk3t2aktuta4lensta2l1optan4gar2t1anme4t1anna3t2ans_4t3ansi4t3anspta4rens3t4a3rita2ta2bta2t3erta2t1um4t3ausg4t3auss4t1auswtbauer4tbe3r2e4teilhet3einget3einlate2l1abte2l1acte2l1autele4bete4l1ecte4l1ehte4leinte4lerd4t3elf_te2l1inte4losttel3s2kte2m1ei3temperte4na2dte4na2g4t3endf4t1endl4t3endpten3d4rten3eidten3ens4tenerg4t1eng_ten4glate4n3in4tensem4t3entw4t3entzte3ran_te2re2bter3endte4rengte4rerkterer4z4terfol4terfül3ter3g2t6ergru4terklä2t1erlöter4mert3erneuter4re_ter4sert4erst_t4erstit4erstute4r1ufter4wäh2t3erzbtes3tantest3eitestes4teu3ereteu3eriteu2r3a2t3e2xe2t1e2xi4thrin_4thrinsti4dendti3e4n3tie4recti4gerzti3k2erti2ma2gtim2m1atin2g1at1in1ittin2k1l3t2ins_4t1inseti4que_ti4schatisch3w3ti3t2etle2r3atmen6t3tmo4desto2d1ertor3inttra3chatra4demtra4far3t4ran_tre4ale3t4reib2t3reih4trenditre2t3r3t4runkt3s2chat4schart3sch2et4schefts4chemtsch4lit4schrot2s1e2bt4seindt2s1engt2s1entt2s1i2dts4paret3s2pont3s2port4spreits3tätit2s3tepts3tradt4strants3traut2s3trät4streut4stropt2s3trütte4lebtte4lent3u2fertums5trtung4s5tu2r1ertu4schlt2z1e2ct2z1eiet2z1eistz3entsubal3l2ubi3os_u2b3rituch4spruch4toruch2t3ru4ckentu3ck2eruden3s2ue3reigue4rergue4rerku4erinnuer4neru3erunfu3eruntu2f1ä2ßu2f1erhu4ferleufs3temuf2t1ebu4gabteu2g1erfu2g1erlugge4stu2g3rüsu3isch_u3ischsuk2t1inulm3einu2m3a2ku2m1artu2m1ausument4su2m1ergu2m1erlu2m1erwumpf4lium2p3leum2s1peun2d1umun2k1a2unk4titunk2t3run2n3aduns4t1runte4riunvoll3up4t3a2upt3ergu2r3a2mu2r1anau2r1angu2r3atturgros4ur3s2zeu2s1eseusi3er_us3partu2s1pasu5s4pizust3abeu5strasus6trisute4leiuter4eruto4berut4schlut4schmut4schöut2s3pautz3engüch2s1cück3eriü4ckersück4speü3d2ensü2f1ergü2h1engü2h1erkü2h1erzühr3ei_ül2l1eiün2f1eiü2r1entüste3neva2t3a4va4t1inve4l1auvenen4dve3rand2ve3s2evid3s2tvie2h3avie4recvi2l1invollen4vormen4waffel3wah4lerwalt4stwar3stewa4schawä3schewe3cke_we3ckeswei3strwer4gelwe4r3iowest3eiwest1o2wim4m3uwolf4s3wol4lerwor2t3rxi2d1emx2t1e2dxtra3b4x2t3rany2l3a2myl4ante3zambiqzei2t1aze2l1a2ze2l1erze2l1inzel3t2hze4n3aczen4semzen4zerze2re2b2z1ergäz3erhalzerin4tzer4neb2z1ersazert1a2zert4anzer4tin4zerwei3z2erzazessen4zger4s1zin4ser4zinsufzon4terz3t2herzu2g1arzu4gentzwan2d1",8:"_al5l4en_anden6k_ar4m3ac_ar4t3ei_bei6ge__ber6gab_ber4g3r_de3r4en_einen6g_en4d3er_en5der__er4zen4_ka4t3io_lo4g3in_mode6ra_ost5end_oste6re_par3t4h_richt6e_sucher6_tan4k3la2ch1e2ca4ch3erwacht5ergach6tritack3sta43a2er2o1af4t3erlage4s3tiah4l3erhal4b3erw3a2l1e2bal2l3a4rall5erfaalli5er_al4t3erfam4t3ernand6spas3a4n1erban4g3erfan4g3erlan4g3erzang4s3poani5ers_an2t3a4ran2z1i4nau5ereinau4s3erwauster6mau4ten4gau4t3erhäs4s3erkbach7t4ebal4l3ehbe4r3eiwber6gan_ber3st4abe6steinbe4s3tolbote3n4ebst5einbbu4s3chach3e4ben6chergebcher6zie6ckergeb4d3achse2d1an3d23d4ärme_2d1e4ben3d2e1i2mde2l1a2gde4l3augdel5sterde4n3endden4k3li4den4semde3r4erbde3r4erfde4r3ero4d3erhöh4d3ersatdest5altdest5ratdienst5r2d1in1it4d3innerdi4t3erldi4t3ermdi4t3ersd4s3tätid3s4tern2d1u2m1edu4sch3le3a4reneech3t4eiege4n3a2eg4se4r1ehr6erleei4b3uteei4d3errei2m1a2gein6karnein6stalei6schwuei4s3erwek4t3erzeld5erstel4d3erwe4ler4fae4ler4lae4l3ernäe4l1e4taelgi5er_elgi5ersel4l3einemen4t3he6mentspen4d3esse4n3ermoeni5ers_en5sch4eenst5alten4s3täten4t3rolen4z3erfen4z3ergen4z3erke2r3a4sie4r3eis_e4r3entferi3e4n3er6tereiess4e3rees4t3enges4t3erhes4t3essestmo6deet4z3enteue6reifeut6schnfacher5ffal6schafal6schmfe4r3anzfrach6trf4s3tätif4s3tresf4s3tütef4t1e4tift4s3tanfzeiten6gas4t3el2g1eise2gel4b3ragel4b3rogel6dersge4l3ers4g3ereigge4ren4sge4r3entge4s3terglei4t5rgrammen6gros6selg3s4tatigs4t3rosgu4t3erhhaft4s3phal6lerfhau3f4lihau5steihau6terkhe4f3inghel4l3auhe2n1e2bhe4r3eishe4r3o4bhfel6lerhich6terho6ckerlhol6zeneh6rerlebh3s4terbh3t4akt_h4teil4zh4t3elith4t3entsht5erkenh6terneuh4t3erreh6terstaht6ersteht6raumeht4s3turhu4l3enghut4z3eria4l3ermie4n3a2gie4n3ergienst5räie4r3erziesen3s4ie4t3erhie4t3ertiker6fahi3l4aufbim4m3enti2n1e2bei4ner4trin2g1a2gin4n3ermin4s3tätir4m3untir4sch3wi4sch3eii5schingi6schwiri4s3etatiso6nendis4s3cheit4z3ergjah4r3eika4n1a4s6kantennkehr4s3oke4l3eim4ken4gagken5steiker6gebnkerin6stk3er4lauk3er4lebk6erlebe2k1er2zikeu6schlkor6dergkre1i2e4k4s3tanzk4t3erfolan2d3a22lat2t1alat4t3inl2d1e2seleben4s3lei6nerble4n3end5lentwetle4r3eim3l4ergew6lerwerbli4g3ers2l1in1itl6lereigl6lergebl6lergen2l1or3g2l4s3ort_l4s3tätils6ternels6ternsl4te4leml4t1e4skl2t1o2rilu2g1e2blus6serflus6serklus6serslu4t3ergl2z1u4femagi5er_magi5ersmar6schmmar6schrma4t3erdmen6tanz4m3entwi4m3ergänmes6sergmp4f3ergmp4f3erz4m3ungebmu4r1u2fnacht6ra4n3a2mernavi5er_navi5ersn4d3entsnder5stene2n1e2bn4g3erseng4s3e4h2n3i2gelni4k3ingn4k3erfanseh5eren4s3ort_n4s3prien4s3tatens6terbenst5opfenten6te_nt4s3parober3in4ode6rat_ode6rateoh4l3erholl5endsoll5erweol4z3ernonderer5on4t3endopf5erdeopi5ers_or4d3engo2r1e2ckorsch5lior4t3entor4t3ereor4t3offor4t3räuos4s3enzö4sch3eipargel6dpä4t1e2hpä4t3entpe4l3inkp2f1in3spos4t3agrach6trärali5er_rali5ersran4d3errau4m3agräu5scher2b1a2der4b3lastrch6terwrderin6sr4d3erntrege4l3äre4h3entreister6re4n3end4r3erken4r3erlaurge4l3errgen4z3w4r3innerrkstati6rk4t3engrk4t3erfrk6terscrk4t3erwr2m1o2rirn3e4benrol3l4enrpe4r3inr6scherlr4s3ort_r6strangr4t3erler4t3ernäru6ckerlrun6derlrun6dersrun6derwr4z3entssa4l3erbsat4z3en6schlein2s1e2bense4l3erl4s1e2pos6sereignse4r3eimse4r3enk2s1i2deoson5ende2s1o2riesrücker6sse3in4tstel4l3äs4t3endss4t3engls4t3entfste6rersstes6se_5st4reif1s4tri2ksun6derhtan6zerhta4r3eretau3f4litau6schrtau6schwtblock5e4t1e2bentein3e4cte2m1o2rte2n1e2bte3n4ei_ten4t3riten6zerh4t3erde_te4r3eif6tergreiter4n3art6erscha6terwerbtes6terkti4v3erlto6ckenttrücker6t4s1amt4t4s3esset3s4terotta6gess2t1u2niotu2r1a2gtu2r1e4tu2ch1e4cu3erin4tuern3s4tu4g3reisun4d3erfund5erhau2r1an5sur3a4renu6schentusch5werusi5ers_u4t3ersaüge6leiswach6stuwach4t4rwahl5entwandels6we5cken_wein4s3aweis4s3pwel6schlwel6schrwel4t3a2wen4k3ri5werdensxpor6terx2t1er2fx2t1il2l2z1e2benzeit5endzei4t3er4z3ergebzer4n3ei4z3erstezer4t3agzer6tere",9:"_char8me__er8stein_he6r5inn_men8schl_men8schw_rü6cker6_wort5en6_wor8tendach8traumalli7ers_allkon8tral5s6terbausan8ne_äh4l3e4be6b5rechtebs3e4r3inchner8ei_dampf8erfden6s5taue6ch5erziee4r3en4ge6l5eier_erg3el4s3fal6l5erk6fel6ternfor4m3a4gforni7er_fzei8tendgot6t5erggrab8schegren6z5eihä6s5chenhe6rin6nuherin8terh6l3er4näh6t5erspaieler8gebi2k1e2r2eil4d3en4ti4sch3e4hkamp8ferfke6rin6nulan6d5erwlan6d5erzleis6s5erlepositi86mel6ternmorgen5s65n2en3t2aner8schlenich8tersn4n3er4wano6t5entrnsch7werdn5s6ternen5s6ternsos4s3en4kpapieren8ram6m5ersr8blasserres6s5erw6r5innenmris6t5ersr6st5eingrs4t3er4wr4t3er4lasfal6l5erspani7er_sse6r5atts4s3e4strsu6m5ents4t3a4genttblocken8tes6ter6gür4g3en4gvati8ons_vol6l5endwer6t5ermwin4d3e4czer6t5rauzes6s5end",10:"_er8brecht_os8ten8deder6t5en6deren8z7endgram8m7endhrei6b5e6cos6t5er6werein8s7trewel6t5en6dwin8n7ersczge8rin8nu",11:"_er8stritt__spiege8leiach8träume_lei8t7er8scpapie8r7endpiegelei8en",12:"ach8träumen_7sprechende_",13:"_er8stritten_"},charSubstitution:{'ſ':'s'}};Hyphenator.languages['en-us']=Hyphenator.languages['en']={leftmin:2,rightmin:3,shortestPattern:2,longestPattern:9,specialChars:"",patterns:{3:"x1qei2e1je1f1to2tlou2w3c1tue1q4tvtw41tyo1q4tz4tcd2yd1wd1v1du1ta4eu1pas4y1droo2d1psw24sv1dod1m1fad1j1su4fdo2n4fh1fi4fm4fn1fopd42ft3fu1fy1ga2sss1ru5jd5cd1bg3bgd44uk2ok1cyo5jgl2g1m4pf4pg1gog3p1gr1soc1qgs2oi2g3w1gysk21coc5nh1bck1h1fh1h4hk1zo1ci4zms2hh1w2ch5zl2idc3c2us2igi3hi3j4ik1cab1vsa22btr1w4bp2io2ipu3u4irbk4b1j1va2ze2bf4oar1p4nz4zbi1u2iv4iy5ja1jeza1y1wk1bk3fkh4k1ikk4k1lk1mk5tk1w2ldr1mn1t2lfr1lr3j4ljl1l2lm2lp4ltn1rrh4v4yn1q1ly1maw1brg2r1fwi24ao2mhw4kr1cw5p4mkm1m1mo4wtwy4x1ar1ba2nn5mx1ex1h4mtx3i1muqu2p3wx3o4mwa1jx3p1naai2x1ua2fxx4y1ba2dn1jy1cn3fpr2y1dy1i",4:"4dryn2itni4on1inn1im_up3nik4ni4dy5giye4tyes4_ye44ab_nhe4nha4abe2n2gyn1guy1ery5eep2pe4abry3lay3lone4wne4v1nesy3chn1erne2q3neo1nenp2seps4hy2cey5lu2nedne2cyme44nk2y5at2adine2b2ne_y5ac2p1tp2ten1den1cun1cryn5dp2th4adup4twpub3ae4rxu3ayn5gaff4pue4n2au4p1ppuf4n2atag1ipu4mag1na2gon4asx3tix1t2pu2na4gya3haa3heah4la3ho_ti2a5ian2an5puspu2tnak4_th2n1kl_te4_ta4mu4u4mupmun23mum2alex4ob_sy25ynxal1i_st4y1o4xi5cxi5a4alm_si2_sh2m5sixhu4m4sh4m3r4amam2py2rabm2pixhi2yo5dr2ai4m1pmo2vmos2x2edmo2r4n1la2mor2asx3c2xas5yom4x4apxam3nme44mokrbi2nne44andy4osp4ot3noemn4omn4a4m1n4nog4m1l2angws4l1posw3shwri4wra4yp3iwom11wo2m2izrb4ow4nopo4pr2cem2isrd2iano4mig4y3pomi3awiz55mi_no4n4m1fme4v2re_wir42mes1menme2mme2gre1o2med4me_4nop4m5c4m1bwil21noureu2whi4w3ev4maprev2w1era2plpo4crfu4r4fyy5pu2maha3pu2mab2a2rn1p4npi44lyb4lya2p3nwam42l1w1lut4luplu3or1glluf4lu5a2wacltu2y3rol1tr4vv4r3guyr4rl1te4rh_nru4ar1il2sel4sc4l1rl5prl4plys4c4lovri3ar4ib4lof3lo_ar2par3q_os3ll4oll2i4as_ri1o3vokl2levoi44p1mlka35vo_ns4cas4ll1izr4iqr2is3vivl1it3lika2tan2sen2slrle42l3hlgo3l5gal5frns3mvi4p3ley_od2r2meles24athr4myle2al3drv1inldi4l2de2vilnt2il3civik4lce42l1b4lavv3ifrno4r3nua1trr2ocnt4sy4sok4syks4la2tuk4sck3ouko5ryss4a2tyau4b4klyys1tnu1akis4au3rki4pro4ek4ima2va5ki_nu4dn4umn3uokes4k1erav1irok2ke4g1keek2ed_me2aw3ikal4aws4k5agk3ab3ka_aye4ays4veg3jo4p5ba_4vedjew3n1v24ve_ja4pzar23vatizi4n1w41batba4z2b1bb2beix4o4i5w4b1d4be_rox5nym4nyp4n3za4ittr3por1r4i1ti1bel2ith2itei2su4rs2r1sars4cr2seis1p3betvag4i2sor1shbe3wr1sioad34b3hbi2bbi4d3bie3isf4ise2is_1bilr1sp5va_r5sw_le2uz4eir1ibi2tuxu3r1tiu1v2i1raze4nze4pb2l2uu4mo1biip3iz1eripe4b4louts44b1m4b3no3br3bodi4osbo4eru3aio4mi1ol4io_3booo1ce4inyin1u2insru2n2inn4inl4inkrv4e2inioch42iner3vo4indpi2np4idbt4lb4tob3trry4cry3t2in_o4elbu4ni2muim1i5saiil3v4ilnil1iil5fs1apo3er4b5w5by_bys4_in1sau4i1lazet4u2suo3ev2z1ii2go4igius1p5saw4s5bo2fi4ifti3fl4if_i3etsch2usc22ie4i2dui4dri2diid5dpi3au3ruz4ils1cuz4is4s5d4se_se4a2ce_2ici4ich3ceii1bri5bo1ceni1blse2g5seiibe43cepi2aniam4ur2li2al2i1acet4hy2scew41phy4ch_5phuhu4thu4gche2h4tyh4shur1durc44hr44h5p5sev5sexu1ra4s3fup3p2s3gph3t2sh_ho4g2h1n_he23ciau3pl4h1mci5ch2lozo4m4ciihi2vhi4p2cim2cin4phsu1peu1ouo1geu5osheu4sho4he4th1es4shwun5zun5ysi1bunu45cizo4glck3ihep5he2nh4ed1sioph2l5hazsi2rcly4zte4_ge21siscoe22cog5siu1siv5siz_ga24skes1l2s2leha4m2s1ms3ma1ogyo1h2u1ni3gus3gun2guegu4acov1gth3_eu3g4ros1n4_es3u2nez4zyum2pu1mi3som_ev2oig4cri2gov15goos4opgon2ul5v5goeu3lugob53go_2c1t4ph_g1nog1nic2te4sov4ulsgn4ag4myc4twcud5c4ufc4uipe2t3glo1gleul2igla4_eg23giz3cun5givgi4u3gir5gio1cusul4e2spagil4g1ic5gi__eb4cze41d2a5da_u1laggo44daf2dagg2gege4v1geo1gen2ged3dato1la2ge_ol2dol2i5daypek4p4eed1d42de_4gazol2tuiv3ol2vo2lys1sa2gamgaf4o2meui4n2ui2pe2cd4em4fugi4jku3fl3ufaf2tyf4to1denu4du4pe_2f3sfri2de1ps1si4f5pfos5d3eqs4sls4snfo2rss2tdes25fon4p1b_ci23payss5w2st_de1tf4l2de1v2fin4dey4d1fd4gast2idg1id2gyd1h25di_ud5dfi3au4cy_ch4pav43didu3cud1iff2fyu3crd1inst4r4f1ffev4fer11dio2fedfe4bdir2s2ty4fe_dis1on1au3ca4f5bon1c2ondd5k25far4fagpa1peys45eyc1exps4ul2dlyp4ale3whon3s3do_e1wa5doee5vud4oge1visu2msu2nub4euav4su2rp4ai6rk_d4or3dosu1atdo4v3doxp4adoo4k4swoo2padre4eus4e3upe5un2ophet5z4syc3syl4y3hoy1ads4pd4swd4syd2tho4wo3ta_du2c4etn2tabta2luac4es4wdu4g2ess4uabdu4n4duptav4st5bow1io1pr5dyn2tawe1sp2t1bop1uead1tz4et4chopy5ea4l4t1d4te_2tyle1si4esh1tee4tyat1cr4twoteg4es2c4eru1teoer1s2eroea2tte4po1rat1wh3tusea2v3teu3texer1i2e1ber1h4tey2t1f4t1ge3br2th_th2e4thle1ce3tumec2i2ths2erb1tia4tueer1aou5vtud2tif22tige1potu1aou4lttu41timt5toos4le1cre2pat4swe5owe1cue4ottsh4eos4e1ort4sce3ol4edieo2ge5of1tio4eno4enn5tiq4edoti4u1tive3my1tiz4othee2ct5laee2ft5lo4t1mee2mtme4e1meem5bcoi4to3be5exo1ry2tof1effel2iel2ftos24t1pe1la1traos2ceig2ei5de5ico2soe1h45egyeg5n",5:"_ach4e4go_e4goseg1ule5gurtre5feg4iceher4eg5ibeger44egaltre4mei5gle3imbe3infe1ingtra3beir4deit3eei3the5ity5triae4jud3efiteki4nek4la2trime4la_e4lactri4v4toute4law5toure3leaefil45elece4ledto2rae5len4tonye1lestro3ve4fic4tonoto3mytom4bto2mato5ice5limto2gre3lioe2listru5i4todo4ellaee4tyello4e5locel5ogeest4el2shel4tae5ludel5uge4mace4mage5man2t1n2ee2s4ee4p1e2mele4metee4naemi4eee4lyeel3i3tled3tle_e4mistlan4eed3iem3iztrus4emo4gti3zaem3pie4mule4dulemu3ne4dritiv4aedon2e4dolti3tle5neae5neeen3emtis4pti5sotis4m3tisee3newti3sae5niee5nile3nioedi5zen3ite5niu5enized1ited3imeno4ge4nosen3oven4swti5oc4t1s2en3uaen5ufe3ny_4en3zed3ibe3diae4oi4ede4s3tini4ed3deo3ret2ina2e2dae4culeo4toe5outec4te4t3t2t4tes2t1ine5pel4timpe2corephe4e4plie2col5tigutu3arti5fytu4bie3pro3tienep4sh5tidie4putt4icoeci4t4tick2ti2bec3imera4bti4aber3ar4tuf45tu3ier4bler3che4cib2ere_4thooecca54thil3thet4thea3turethan4e4cade4bitere4qe4ben5turieret4tur5oeav5oeav5itu5ry4tess4tes_ter5ve1rio4eriter4iueri4v1terier3m4ter3cte5pe4t1waer3noeast3er5obe5rocero4rer1oue3assea5sp1tent4ertler3twtwis4eru4t3tende1s4a3tenc5telsear2te2scateli4e3scres5cue1s2ee2sec3tel_te5giear5kear4cte5diear3ae3sha2t1ede5ande2sice2sid5tecttece44teattype3ty5phesi4uea4gees4mie2sole3acte2sone1a4bdys5pdy4sedu4petaun4d3uleta5sytas4e4tare4tarctar4ata5pl2estrta5mo4talke2surtal3idu5eleta4bta5lae3teoua5naet1ic4taf4etin4ta5doe5tir4taciuan4id1ucad1u1ae3trae3tre2d1s2syn5ouar2d4drowet3uaet5ymdro4pdril4dri4b5dreneu3rouar3ieute44draieu5truar3te2vasdop4pe5veadoo3ddoni4u4belsum3iev1erdoli4do4laev3idevi4le4vinevi4ve5voc2d5ofdo5dee4wage5wee4d1n4ewil54d5lue3wit2d3lou3ber5eye_u1b4i3dledfa3blfab3rfa4ce3dle_fain4suit3su5issu2g34d5lasu4b3fa3tasu1al4fato1di1vd2iti5disiuci4bfeas4di1redi4pl4feca5fectdio5gfe3life4mofen2d4st3wuc4it5ferr5diniucle3f4fesf4fie4stry1dinaf4flydi3ge3dictd4icedia5bs4tops1tle5stirs3tifs4ties1ticfic4is5tias4ti_4ficsfi3cuud3ers3thefil5iste2w4filyudev45finas4tedfi2nes2talfin4ns2tagde2tode4suflin4u1dicf2ly5ud5isu5ditde1scd2es_der5sfon4tu4don5dermss4lid4erhfor4is4siede2pudepi4fra4tf5reade3pade3nufril4frol5ud4side3nou4eneuens4ug5infu5el5dem_s5setfu5nefu3rifusi4fus4s4futade5lode5if4dee_5gal_3galiga3lo2d1eds3selg5amos2s5cssas3u1ing4ganouir4mgass4gath3uita4deaf5dav5e5dav44dato4darygeez44spotspor4s4pon4gelydark5s4ply4spio4geno4genydard5ge3omg4ery5gesigeth54getoge4tydan3g4g1g2da2m2g3gergglu5dach4gh3inspil4gh4to4cutr1gi4agia5rula5bspho5g4icogien5s2pheulch42sperspa4n5spai3c4utu1lenul4gigir4lg3islcu5pycu3picu4mic3umecu2maso5vi5glasu5liagli4bg3lig5culiglo3r4ul3mctu4ru1l4og4na_c3terul1tig2ning4nio4ultug4noncta4b4c3s2cru4dul5ulsor5dgo3isum5absor5ccris4go3nic4rinson4gsona45gos_cri5fcre4vum4bi5credg4raigran25solvsoft3so4ceunat44graygre4nco5zi4gritcoz5egruf4cow5ag5stecove4cos4es5menun4ersmel44corbco4pl4gu4tco3pacon5tsman3gy5racon3ghach4hae4mhae4th5aguha3lac4onecon4aun4ims3latu2ninhan4gs3ket5colocol5ihan4kuni3vhap3lhap5ttras4co4grhar2dco5agsir5aclim45sionhas5shaun44clichaz3acle4m1head3hearun3s4s3ingun4sws2ina2s1in4silysil4eh5elohem4p4clarhena45sidiheo5r1c4l4h4eras5icc2c1itu4orsh3ernshor4h3eryci3phshon34cipecion45cinoc1ingc4inahi5anhi4cohigh5h4il2shiv5h4ina3ship3cilihir4lhi3rohir4phir4rsh3iohis4ssh1inci4lau5pia4h1l4hlan44cier5shevcia5rhmet4ch4tish1erh5ods3cho2hoge4chi2z3chitho4mahome3hon4aho5ny3hoodhoon45chiouptu44ura_ho5ruhos4esew4ihos1p1housu4ragses5tu4rasur4behree5se5shs1e4s4h1s24chedh4tarht1enht5esur4fru3rifser4os4erlhun4tsen5gur1inu3riosen4dhy3pehy3phu1ritces5tur3iz4cesa4sencur4no4iancian3i4semeia5peiass45selv5selfi4atu3centse1le4ceniib5iaib3inseg3ruros43cencib3li3cell5cel_s5edli5bun4icam5icap4icar4s4ed3secticas5i4cayiccu44iceour4pe4ced_i5cidsea5wi2cipseas4i4clyur4pi4i1cr5icrai4cryic4teictu2ccon4urti4ic4umic5uoi3curcci4ai4daiccha5ca4thscof4ide4s4casys4cliscle5i5dieid3ios4choid1itid5iui3dlei4domid3owu5sadu5sanid5uous4apied4ecany4ield3s4cesien4ei5enn4sceii1er_i3esci1estus3ciuse5as4cedscav5if4frsca4pi3fieu5siau3siccan4eiga5bcan5d4calous5sli3gibig3ilig3inig3iti4g4lus1trig3orig5oti5greigu5iig1ur2c5ah4i5i44cag4cach4ca1blusur4sat3usa5tab5utoi3legil1erilev4uta4b4butail3iail2ibil3io3sanc2ilitil2izsal4t5bustil3oqil4tyil5uru3tati4magsa5losal4m4ute_4imetbu3res3act5sack2s1ab4imitim4nii3mon4utelbumi4bu3libu4ga4inav4utenbsor42b5s2u4tis4briti3neervi4vr3vic4inga4inger3vey4ingir3ven4ingo4inguu4t1li5ni_i4niain3ioin1isbo4tor5uscrunk5both5b5ota5bos42i1no5boriino4si4not5borein3seru3in2int_ru4glbor5di5nusut5of5bor_uto5gioge4io2grbon4au5tonru3enu4touion3iio5phior3ibod3iio5thi5otiio4toi4ourbne5gb3lisrt4shblen4ip4icr3triip3uli3quar4tivr3tigrti4db4le_b5itzira4bi4racird5ert5ibi4refbi3tri4resir5gibi5ourte5oir4isr3tebr4tagbin4diro4gvac3uir5ul2b3ifis5agis3arisas52is1cis3chbi4eris3erbi5enrson3be5yor5shais3ibisi4di5sisbe3tw4is4krs3es4ismsbe5trr3secva4geis2piis4py4is1sbe3sp4bes4be5nuval5ois1teis1tirrys4rros44be5mis5us4ita_rron4i4tagrri4vi3tani3tatbe3lorri4or4reoit4esbe1libe5gu4itiarre4frre4cbe3giit3igbe3dii2tim2itio4itisrp4h4r3pet4itonr4peait5rybe3debe3dai5tudit3ul4itz_4be2dbeat3beak4ro4varo4tyros4sro5roiv5ioiv1itror3i5root1roomval1ub3berva5mo4izarva5piron4eban3ijac4qban4ebal1ajer5srom4prom4iba4geazz5i5judgay5alax4idax4ickais4aw4ly3awaya1vorav5ocav3igke5liv3el_ve4lov4elyro1feke4tyv4erdv4e2sa5vanav3ag5k2ick4illkilo5au1thk4in_4ves_ro3crkin4gve4teaun5dk5ishau4l2au3gu4kleyaugh3ve4tyk5nes1k2noat3ulkosh4at5uekro5n4k1s2at5uaat4that5te5vianat4sk5vidil4abolaci4l4adela3dylag4nlam3o3landrob3la4tosr4noular4glar3ilas4ea4topr3nivr3nita2tomr5nica4toglbin44l1c2vi5gnat3ifat1ica5tiar3neyr5net4ati_ld5isat4hol4driv2incle4bileft55leg_5leggr4nerr3nel4len_3lencr4nar1lentle3phle4prvin5dler4e3lergr3mitl4eroat5evr4mio5lesq3lessr3menl3eva4vingrma5cvio3lvi1ou4leyevi5rovi3so4l1g4vi3sulgar3l4gesate5cat5apli4agli2amr3lo4li4asr4lisli5bir4ligr2led4lics4vitil4icul3icyl3idaat5ac3lidirk4lel4iffli4flr3ket3lighvit3r4vityriv3iri2tulim3ili4moris4pl4inar3ishris4clin3ir4is_li5og4l4iqlis4pas1trl2it_as4shas5phri2pla4socask3ia3sicl3kallka4ta3sibl4lawashi4l5leal3lecl3legl3lel5riphas4abar2shrin4grin4ear4sarin4dr2inal5lowarre4l5met3rimol4modlmon42l1n2a3roorim5ilo4civo4la5rigil5ogo3loguri5et5longlon4iri1erlood5r4icolop3il3opmlora44ricir4icerib3a5los_v5oleri4agria4blos4tlo4taar2mi2loutar2izar3iolpa5bl3phal5phi4rhall3pit5voltar4im3volv2l1s2vom5ivori4l4siear4fllt5agar4fivo4rylten4vo4talth3ia3reeltis4ar4drw5ablrgo4naraw4lu3brluch4lu3cilu3enwag5olu5idlu4ma5lumia5raur5gitwait5luo3rw5al_luss4r5gisar4atl5venrgi4nara3pwar4tar3alwas4tly5mely3no2lys4l5ysewa1teaque5ma2car3gicma4clr3get5magnwed4nmaid54maldrg3erweet3wee5vwel4lapoc5re4whwest3ap3in4aphires2tr4es_mar3vre5rumas4emas1t5matemath3rero4r4eriap5atr1er4m5bilre1pumbi4vapar4a5nuran3ul4med_an3uare5lure1lian4twre5itmel4tan2trre4fy4antomen4are3fire2fe4menemen4imens4re1de3ment2r2edme5onre4awwin4g5reavme4tare3anme1tere1alm4etr3wiserdin4rdi4aan4stwith3an2span4snan2samid4amid4gan5otwl4esr4dalm4illmin4a3mindrcum3rc4itr3charcen4min4tm4inumiot4wl3ina3niumis5lan3ita3nip4mithan3ioan1gla3neuws4per2bina3nena5neem4ninw5s4tan1dl4mocrrbi4fmo2d1mo4gomois2xac5ex4agor4bagmo3mer4baba3narrau4ta5monrare4rar5cra5nor4aniam1inr2amiam5ifra4lomo3spmoth3m5ouf3mousam3icxer4ixe5roraf4tr5aclm3petra3bixhil5mpi4aam3ag3quetm5pirmp5is3quer2que_qua5vmpov5mp4tram5ab3alyz4m1s25alyt4alysa4ly_ali4exi5di5multx4ime4aldia4laral3adal5abak1enain5opu3trn4abu4nac_na4can5act5putexpe3dna4lia4i4n4naltai5lya3ic_pur4rag5ulnank4nar3c4narenar3inar4ln5arm3agognas4c4ag4l4ageupul3cage4oaga4na4gab3nautnav4e4n1b4ncar5ad5umn3chaa3ducptu4rpti3mnc1innc4itad4suad3owad4len4dain5dana5diua3ditndi4ba3dion1ditn3dizn5ducndu4rnd2we3yar4n3eara3dianeb3uac4um5neckac3ulp4siba3cio5negene4laac1inne5mine4moa3cie4nene4a2cine4poyc5erac1er2p1s2pro1tn2erepro3lner4rych4e2nes_4nesp2nest4neswpri4sycom4n5evea4carab3uln4gabn3gelpre3vpre3rycot4ng5han3gibng1inn5gitn4glangov4ng5shabi5an4gumy4erf4n1h4a5bannhab3a5bal3n4iani3anni4apni3bani4bl_us5ani5dini4erni2fip3petn5igr_ure3_un3up3per_un5op3pennin4g_un5k5nis_p5pel_un1en4ithp4ped_un1ani3tr_to4pympa3_til4n3ketnk3inyn5ic_se2ny4o5gy4onsnmet44n1n2_ru4d5pounnni4vnob4lpo4tan5ocly4ped_ro4qyper5noge4pos1s_ri4gpo4ry1p4or_res2no4mono3my_ree2po4ninon5ipoin2y4poc5po4gpo5em5pod_4noscnos4enos5tno5tayp2ta3noun_ra4cnowl3_pi2tyra5m_pi4eyr5ia_out3_oth32n1s2ns5ab_or3t_or1d_or3cplu4mnsid1nsig4y3s2eys3ion4socns4pen5spiploi4_odd5nta4bpli4n_ni4cn5tib4plignti2fpli3a3plannti4p1p2l23ysis2p3k2ys3ta_mis1nu5enpi2tun3uinp3ithysur4nu1men5umi3nu4nyt3icnu3trz5a2b_li4t_li3o_li2n_li4g_lev1_lep5_len4pion4oard3oas4e3pi1ooat5ip4inoo5barobe4l_la4mo2binpind4_ju3rob3ul_is4i_ir5rp4in_ocif3o4cil_in3so4codpi3lopi3enocre33piec5pidipi3dep5ida_in2kod3icodi3oo2do4odor3pi4cypian4_ine2o5engze3rooe4ta_im3m_id4l_hov5_hi3b_het3_hes3_go4r_gi4bpho4ro5geoo4gero3gie3phobog3it_gi5azo5ol3phizo4groogu5i4z1z22ogyn_fes3ohab5_eye55phieph1icoiff4_en3sph4ero3ing_en3go5ism_to2qans3v_el5d_eer4bbi4to3kenok5iebio5mo4lanper1v4chs_old1eol3erpe5ruo3letol4fi_du4co3liaper3op4ernp4erio5lilpe5ono5liop4encpe4la_do4tpee4do5livcin2q3pediolo4rol5pld3tabol3ub3pedeol3uno5lusedg1le1loaom5ahoma5l2p2edom2beom4bl_de3o3fich3pe4ao4met_co4ro3mia_co3ek3shao5midom1inll1fll3teapa2teo4monom3pi3pare_ca4tlue1pon4aco3nanm2an_pa4pum2en_on5doo3nenng1hoon4guon1ico3nioon1iso5niupa3nypan4ao3nou_bri2pain4ra1oronsu4rk1hopac4tpa4ceon5umonva5_ber4ood5eood5i6rks_oop3io3ordoost5rz1scope5dop1erpa4ca_ba4g_awn4_av4i_au1down5io3pito5pon1sync_as1s_as1p_as3ctch1c_ar5so5ra_ow3elo3visov4enore5auea1mor3eioun2d_ant4orew4or4guou5etou3blo5rilor1ino1rio_ang4o3riuor2miorn2eo5rofoto5sor5pe3orrhor4seo3tisorst4o3tif_an5cor4tyo5rum_al3tos3al_af1tos4ceo4teso4tano5scros2taos4poos4paz2z3wosi4ue3pai",6:"os3ityos3itoz3ian_os4i4ey1stroos5tilos5titxquis3_am5atot3er_ot5erso3scopor3thyweek1noth3i4ot3ic_ot5icao3ticeor3thiors5enor3ougor3ityor3icaouch5i4o5ria_ani5mv1ativore5sho5realus2er__an3teover3sov4erttot3icoviti4o5v4olow3dero4r3agow5esto4posiop3ingo5phero5phanthy3sc3operaontif5on3t4ionten45paganp3agattele2gonspi4on3omyon4odipan3elpan4tyon3keyon5est3oncil_ar4tyswimm6par5diompro5par5elp4a4ripar4isomo4gepa5terst5scrpa5thy_atom5sta1tio5miniom3icaom3ic_ss3hatsky1scpear4lom3ena_ba5naol3umer1veilpedia4ped4icolli4er1treuo5liteol3ishpeli4epe4nano5lis_pen4thol3ingp4era_r1thoup4erago3li4f_bas4er1krauperme5ol5id_o3liceper3tio3lescolass4oi3terpe5tenpe5tiz_be5raoi5son_be3smphar5iphe3nooi5letph4es_oi3deroic3esph5ingr3ial_3ognizo5g2ly1o1gis3phone5phonio5geneo4gatora3mour2amenofit4tof5itera3chupi4ciepoly1eod5dedo5cureoc3ula1pole_5ocritpee2v1param4oc3raco4clamo3chetob5ingob3a3boast5eoke1st3nu3itpi5thanuf4fentu3meoerst2o3chasplas5tn3tinepli5ernti4ernter3sntre1pn4s3esplum4bnsati4npre4cns4moonon1eqnor5abpo3et5n5lessn5oniz5pointpoly5tnon4agnk3rup3nomicng1sprno5l4inois5i4n3o2dno3blenni3aln5keroppa5ran3itor3nitionis4ta5nine_ni3miznd3thrmu2dron3geripray4e5precipre5copre3emm3ma1bpre4lan5gerep3rese3press_can5cmedi2c5pri4e_ce4la3neticpris3op3rocal3chain4er5ipros3en4erarnera5bnel5iz_cit5rne4gatn5d2ifpt5a4bjanu3aign4itn3chisn5chiln5cheon4ces_nau3seid4iosna3talnas5tinan4itnanci4na5mitna5liahnau3zput3er2n1a2bhex2a3hatch1multi3hair1sm4pousg1utanmpo3rim4p1inmp5iesmphas4rach4empar5iraf5figriev1mpara5mo5seyram3et4mora_rane5oran4gemo3ny_monol4rap3er3raphymo3nizgno5morar5ef4raril1g2nacg1leadmoni3ara5vairav3elra5ziemon5gemon5etght1wemoi5sege3o1dmma5ryr5bine3fluoren1dixmis4ti_de3ra_de3rie3chasrch4err4ci4bm4inglm5ineedu2al_3miliame3tryrdi4er_des4crd3ingdi2rerme5thimet3alre5arr3mestim5ersadi2rende2ticdes3icre4cremen4temensu5re3disred5itre4facmen4dede2mosmen5acmem1o3reg3ismel5onm5e5dyme3died2d5ibren4te5mediare5pindd5a5bdata1bmba4t5cle4arma3tisma5scemar4lyre4spichs3huma5riz_dumb5re3strre4terbrus4qre3tribio1rhre5utiman3izre4valrev3elbi1orbbe2vie_eas3ire5vilba1thyman5is5maniamal4tymal4lima5linma3ligmag5inav3ioul5vet4rg3inglus3teanti1dl5umn_ltur3a_el3emltera4ltane5lp5ingloun5dans5gra2cabllos5etlor5ouric5aslo5rie_enam35ricidri4cie5lope_rid5erri3encri3ent_semi5lom3errig5an3logicril3iz5rimanlob5allm3ingrim4pell5out5rina__er4ril5linal2lin4l3le4tl3le4nriph5eliv3er_ge5og_han5k_hi3er_hon3olin3ea1l4inel4im4p_idol3_in3ci_la4cy_lath5rit3iclim4blrit5urriv5elriv3et4l4i4lli4gra_leg5elif3errk4linlid5er4lict_li4cor5licioli4atorl5ish_lig5a_mal5o_man5a_mer3c5less_rm5ersrm3ingy3thinle5sco3l4erilera5b5lene__mon3ele4matld4erild4erela4v4ar1nis44lativ_mo3rola5tanlan4telan5etlan4dllab3ic_mu5takin4dek3est_ro5filk3en4dro5ker5role__of5te4jestyys3icaron4al5izont_os4tlron4tai4v3ot_pe5tero3pelrop3ici5voreiv5il__pio5n_pre3mro4the_ran4tiv3en_rov5eliv3ellit3uati4tramr5pentrp5er__rit5ui4tismrp3ingit5ill_ros5tit3ica4i2tici5terirre4stit3era4ita5mita4bi_row5dist4lyis4ta_is4sesrsa5tiissen4is4sal_sci3erse4crrs5er_islan4rse5v2yo5netish5opis3honr4si4bis5han5iron_ir4minrtach4_self5iri3turten4diri5dei4rel4ire4de_sell5r4tieriq3uidrtil3irtil4lr4tilyr4tistiq5uefip4re4_sing4_ting4yn3chrru3e4lion3at2in4th_tin5krum3pli4no4cin3ityrun4ty_ton4aruti5nymbol5rvel4i_top5irv5er_r5vestin5geni5ness_tou5s_un3cein3cerincel45ryngei4n3auim3ulai5miniimi5lesac3riim5ida_ve5rasalar4ima5ryim3ageill5abil4istsan4deila5rai2l5am_wil5ii4ladeil3a4bsa5voright3iig3eraab5erd4ific_iff5enif5eroi3entiien5a45ie5gaidi5ou3s4cieab5latidi4arid5ianide3al4scopyab5rogid5ancic3ulaac5ardi2c5ocic3ipaic5inase2c3oi4carai4car_se4d4ei2b5riib5iteib5it_ib5ertib3eraac5aroi4ativ4ian4tse4molsen5ata5ceouh4warts5enedhus3t4s5enin4sentd4sentlsep3a34s1er_hun5kehu4min4servohro3poa5chethov5el5se5umhouse3sev3enho5senhort3eho5rishor5at3hol4ehol5arh5odizhlo3riac5robhis3elhion4ehimer4het4edsh5oldhe2s5ph5eroushort5here5aher4bahera3p3side_5sideshen5atsi5diz4signahel4lyact5ifhe3l4ihe5do55sine_h5ecathe4canad4dinsion5aad5er_har4lehard3e3sitioha5rasha3ranhan4tead3icahang5oadi4ersk5inesk5ing5hand_han4cyhan4cislith5hala3mh3ab4lsmall32g5y3n5gui5t3guard5smithad5ranaeri4eag5ellag3onia5guerso4labsol3d2so3licain5in4grada3s4on_gor5ougo5rizgondo5xpan4dait5ens5ophyal3end3g4o4ggnet4tglad5i5g4insgin5ge3g4in_spen4d2s5peog3imen5gies_3spher5giciagh5outsp5ingge5nizge4natge5lizge5lisgel4inxi5miz4gativgar5n4a5le5oga3nizgan5isga5mets5sengs4ses_fu4minfres5cfort5assi4erss5ilyfore5tfor5ayfo5ratal4ia_fon4dessur5aflo3ref5lessfis4tif1in3gstam4i5stands4ta4p5stat_fin2d5al5levs5tero4allicstew5afight5fi5del5ficie5ficiafi3cer5stickf3icena5log_st3ingf3icanama5ra5stockstom3a5stone2f3ic_3storef2f5iss4tradam5ascs4trays4tridf5fin_fend5efeath3fault5fa3thefar5thfam5is4fa4mafall5eew3inge5verbeven4ie5vengevel3oev3ellev5asteva2p5euti5let5roset3roget5rifsy5rinet3ricet5onaam5eraam5ilyami4noamor5ieti4noe5tidetai5loethod3eten4dtal5enes5urramp5enan3ageta5loge5strotan4detanta3ta5pere3ston4es2toes5times3tigta3rizestan43analy4taticta4tures4prean3arces3pertax4ises5onaes3olue5skintch5etanar4ies4i4ntead4ie2s5ima3natiande4sesh5enan3disan4dowang5iete5geres5ences5ecres5cana4n1icte2ma2tem3at3tenanwrita45erwau4tenesert3era3nieser3set5erniz4erniter4nis5ter3de4rivaan3i3fter3isan4imewo5vener3ineeri4ere3rient3ess_teth5e5ericke1ria4er3ester5esser3ent4erenea5nimier5enaer3emoth3easthe5atthe3iser5el_th5ic_th5icaere3in5thinkere5coth5odea5ninee3realan3ishan4klier4che5anniz4erandti4atoanoth5equi3lep5utat4ic1uan4scoe4probep3rehe4predans3poe4precan4surantal4e3penttim5ulep5anceo5rol3tine_eop3aran4tiewin4deap5eroen3ishen5icsen3etren5esten5esien5eroa3pheren3dicap3itae4nanten5amoem5ulaa3pituti3zen5emnize5missem5ishap5olaem5ine3tles_t5let_em1in2apor5iem3icaem5anael3op_el4labapos3te3liv3el5ishaps5esweath3e3lierel3icaar3actwa5verto3nate3libee4l1erel3egato3rietor5iza5radeelaxa4aran4gto3warelan4dej5udie5insttra5chtraci4ar5av4wa5gere5git5arbal4ar5easeg5ing4voteetrem5iar3enta5ressar5ial4tricsvor5abe3finetro5mitron5i4tronyar3iantro3sp5eficia3rieted5uloed3icae4d1erec3ulaec4tane4cremeco5roec3orae4concar5o5de4comme4cluse4clame5citeec5ifya5ronias3anta5sia_tu4nis2t3up_ecan5ce4belstur3ise4bel_eav3ene4a3tue5atifeath3ieat5eneart3eear4ilear4icear5eseam3ereal3oueal5erea5geread5iedum4be4ducts4duct_duc5eras3tenasur5adrea5rat3abl4d5outdo3natdom5izdo5lor4dlessu4bero3dles_at3alou3ble_d4is3tdirt5idi5niz3dine_at5ech5di3endi4cam1d4i3ad3ge4tud5estdev3ilde3strud3iedud3iesdes3tide2s5oat3egovis3itde4nardemor5at3en_uen4teuer4ilde5milat3eraugh3en3demicater5nuil5izdeli4ede5comde4cildecan4de4bonv3io4rdeb5it4dativ2d3a4bat3estu5laticu4tie5ulcheul3dercuss4icu5riaath5em3cultua5thenul3ingul5ishul4lar4vi4naul4liscu5ityctim3ic4ticuuls5esc5tantultra3ct5angcros4ecrop5ocro4pl5critiath5omum4blycre3at5vilitumor5oat5i5b5crat_cras5tcoro3ncop3iccom5ercol3orun5ishco3inc5clareat3ituunt3abat5ropun4tescit3iz4cisti4cista4cipicc5ing_cin3em3cinatuper5s5videsup3ingci2a5b5chini5videdupt5ib5vide_at4tag4ch1inch3ersch3er_ch5ene3chemiche5loure5atur4fercheap3vi5aliat3uravet3er4ch3abc5e4taau5sib3cessives4tece5ram2cen4e4cedenccou3turs5erur5tesur3theaut5enur4tiecav5al4cativave4nover3thcar5omca5percan4tycan3izcan5iscan4icus4lin3versecal4laver3ieca3latca5dencab3in3butiobuss4ebus5iebunt4iv4eresuten4i4u1t2iv3erenu3tineut3ingv4erelbroth35u5tizbound34b1orabon5at5vere_bom4bibol3icblun4t5blespblath5av3erav5enuebi3ogrbi5netven3om2v1a4bvac5ilbi3lizbet5izbe5strva5liebe5nigbbi4nabas4siva5nizbari4aav5ernbarbi5av5eryvel3liazi4eravi4er",7:"_dri5v4ban5dagvar5iedbina5r43bi3tio3bit5ua_ad4derution5auti5lizver5encbuf4ferus5terevermi4ncall5incast5ercas5tigccompa5z3o1phros5itiv5chanicuri4fico5stati5chine_y5che3dupport54v3iden5cific_un4ter_at5omiz4oscopiotele4g5craticu4m3ingv3i3liz4c3retaul4li4bcul4tiscur5a4b4c5utiva5ternauiv4er_del5i5qdem5ic_de4monsdenti5fdern5izdi4latou4b5ingdrag5on5drupliuar5ant5a5si4tec5essawo4k1enec5ifiee4compear5inate4f3eretro5phewide5sp5triciatri5cesefor5ese4fuse_oth5esiar5dinear4chantra5ventrac4tetrac4itar5ativa5ratioel5ativor5est_ar5adisel5ebraton4alie4l5ic_wea5rieel5igibe4l3ingto5cratem5igraem3i3niemoni5oench4erwave1g4a4pillavoice1ption5eewill5inent5age4enthesvaude3vtill5inep5recaep5ti5bva6guer4erati_tho5rizthor5it5thodicer5ence5ternitteri5zater5iesten4tage4sage_e4sagese4sert_an5est_e4sertse4servaes5idenes5ignaesis4tees5piraes4si4btal4lisestruc5e5titioounc5erxe4cutota5bleset5itiva4m5atoa4matis5stratu4f3ical5a5lyst4ficatefill5instern5isspend4gani5zasqual4la4lenti4g3o3nas5ophiz5sophicxpecto55graph_or5angeuri4al_4graphy4gress_smol5d4hang5erh5a5nizharp5enhar5terhel4lishith5erhro5niziam5eteia4tricic4t3uascour5au2r1al_5scin4dover4nescan4t55sa3tiou5do3ny_ven4de_under5ty2p5al_anti5sylla5bliner4arturn3ari5nite_5initioinsur5aion4eryiphras4_tim5o5_ten5an_sta5blrtroph4_se5rieiq3ui3t5i5r2izis5itiviso5mer4istral5i5ticki2t5o5mtsch3ie_re5mittro3fiti4v3er_i4vers_ros5per_pe5titiv3o3ro_ped5alro5n4is_or5ato4jestierom5ete_muta5bk5iness4latelitr4ial__mist5i_me5terr4ming_lev4er__mar5tilev4eralev4ers_mag5a5liar5iz5ligaterit5ers_lat5errit5er_r5ited__im5pinri3ta3blink5er_hon5ey5litica_hero5ior5aliz_hand5irip5lic_gen3t4tolo2gylloqui5_con5grt1li2erbad5ger4operag_eu4lertho3donter2ic__ar4tie_ge4ome_ge5ot1_he3mo1_he3p6a_he3roe_in5u2tpara5bl5tar2rht1a1mintalk1a5ta3gon_par5age_aster5_ne6o3f_noe1thstyl1is_poly1s5pathic_pre1ampa4tricl3o3niz_sem4ic_semid6_semip4_semir45ommend_semiv4lea4s1a_spin1oom5etryspher1o_to6poglo4ratospe3cio3s2paceso2lute_we2b1l_re1e4ca5bolicom5erseaf6fishside5swanal6ysano5a2cside5stl5ties_5lumniasid2ed_anti1reshoe1stscy4th1s4chitzsales5wsales3cat6tes_augh4tlau5li5fom5atizol5ogizo5litiorev5olure5vertre5versbi5d2ifbil2lab_earth5pera5blro1tronro3meshblan2d1blin2d1blon2d2bor1no5ro1bot1re4ti4zr5le5quperi5stper4malbut2ed_but4tedcad5e1moist5enre5stalress5ibchie5vocig3a3roint5er4matizariv1o1lcous2ticri3tie5phisti_be5stoog5ativo2g5a5rr3a3digm4b3ingre4posir4en4tade4als_od5uctsquasis6quasir6re5fer_p5trol3rec5olldic1aiddif5fra3pseu2dr5ebrat5metric2d1lead2d1li2epro2g1epre1neuod5uct_octor5apoin3came5triem5i5liepli5narpara3memin5glim5inglypi4grappal6matmis4er_m5istryeo3graporth1riop1ism__but4tio3normaonom1icfeb1ruafermi1o_de4moio5a5lesodit1icodel3lirb5ing_gen2cy_n4t3ingmo5lestration4get2ic_4g1lishobli2g1mon4ismnsta5blmon4istg2n1or_nov3el3ns5ceivno1vembmpa5rabno4rarymula5r4nom1a6lput4tinput4tedn5o5miz_cam4penag5er_nge5nesh2t1eoun1dieck2ne1skiifac1etncour5ane3backmono1s6mono3chmol1e5cpref5ac3militapre5tenith5i2lnge4n4end5est__capa5bje1re1mma1la1ply5styr1kovian_car5olprin4t3lo2ges_l2l3ishprof5it1s2tamp",8:"lead6er_url5ing_ces5si5bch5a5nis1le1noidlith1o5g_chill5ilar5ce1nym5e5trych5inessation5arload4ed_load6er_la4c3i5elth5i2lyneg5ativ1lunk3erwrit6er_wrap3arotrav5es51ke6linga5rameteman3u1scmar1gin1ap5illar5tisticamedio6c1me3gran3i1tesima3mi3da5bves1titemil2l1agv1er1eigmi6n3is_1verely_e4q3ui3s5tabolizg5rapher5graphicmo5e2lasinfra1s2mon4ey1lim3ped3amo4no1enab5o5liz_cor5nermoth4et2m1ou3sinm5shack2ppo5sitemul2ti5uab5it5abimenta5rignit1ernato5mizhypo1thani5ficatuad1ratu4n5i4an_ho6r1ic_ua3drati5nologishite3sidin5dling_trib5utin5glingnom5e1non1o1mistmpos5itenon1i4so_re5stattro1p2istrof4ic_g2norespgnet1ism5glo5binlem5aticflow2er_fla1g6elntrol5lifit5ted_treach1etra1versl5i5ticso3mecha6_for5mer_de5rivati2n3o1me3spac6i2t3i4an_thy4l1antho1k2er_eq5ui5to4s3phertha4l1amt3ess2es3ter1geiou3ba3dotele1r6ooxi6d1iceli2t1isonspir5apar4a1leed1ulingea4n3iesoc5ratiztch3i1er_kil2n3ipi2c1a3dpli2c1abt6ap6athdrom3e5d_le6icesdrif2t1a_me4ga1l1prema3cdren1a5lpres2plipro2cess_met4ala3do5word1syth3i2_non1e2m_post1ampto3mat4rec5ompepu5bes5cstrib5utqu6a3si31stor1ab_sem6is4star3tliqui3v4arr1abolic_sph6in1de5clar12d3aloneradi1o6gs3qui3tosports3wsports3cra5n2hascro5e2cor3bin1gespokes5wspi2c1il_te3legrcroc1o1d_un3at5t_dictio5cat1a1s2buss4ingbus6i2esbus6i2erbo2t1u1lro5e2las1s2pacinb1i3tivema5rine_r3pau5li_un5err5r5ev5er__vi2c3arback2er_ma5chinesi5resid5losophyan3ti1n2sca6p1ersca2t1olar2rangesep3temb1sci2uttse3mes1tar3che5tsem1a1ph",9:"re4t1ribuuto5maticl3chil6d1a4pe5able1lec3ta6bas5ymptotyes5ter1yl5mo3nell5losophizlo1bot1o1c5laratioba6r1onierse1rad1iro5epide1co6ph1o3nscrap4er_rec5t6angre2c3i1prlai6n3ess1lum5bia_3lyg1a1miec5ificatef5i5nites2s3i4an_1ki5neticjapan1e2smed3i3cinirre6v3ocde2c5linao3les3termil5li5listrat1a1gquain2t1eep5etitiostu1pi4d1v1oir5du1su2per1e6_mi1s4ers3di1methy_mim5i2c1i5nitely_5maph1ro15moc1ra1tmoro6n5isdu1op1o1l_ko6r1te1n3ar4chs_phi2l3ant_ga4s1om1teach4er_parag6ra4o6v3i4an_oth3e1o1sn3ch2es1to5tes3toro5test1eror5tively5nop5o5liha2p3ar5rttrib1ut1_eth1y6l1e2r3i4an_5nop1oly_graph5er_5eu2clid1o1lo3n4omtrai3tor1_ratio5na5mocratiz_rav5en1o",10:"se1mi6t5ic3tro1le1um5sa3par5iloli3gop1o1am1en3ta5bath3er1o1s3slova1kia3s2og1a1myo3no2t1o3nc2tro3me6c1cu2r1ance5noc3er1osth1o5gen1ih3i5pel1a4nfi6n3ites_ever5si5bs2s1a3chu1d1ri3pleg5_ta5pes1trproc3i3ty_s5sign5a3b3rab1o1loiitin5er5arwaste3w6a2mi1n2ut1erde3fin3itiquin5tes5svi1vip3a3r",11:"pseu3d6o3f2s2t1ant5shimi1n2ut1estpseu3d6o3d25tab1o1lismpo3lyph1onophi5lat1e3ltravers3a3bschro1ding12g1o4n3i1zat1ro1pol3it3trop1o5lis3trop1o5lesle3g6en2dreeth1y6l1eneor4tho3ni4t",12:"3ra4m5e1triz1e6p3i3neph1"}};Hyphenator.languages['es']={leftmin:2,rightmin:2,shortestPattern:1,longestPattern:13,specialChars:"áéíóúñ",patterns:{2:"1b1c1d1f1g1j1k1l1m1n1ñ1p1q1r1s1t1v1w1x1y1z",3:"_a22bb2bc2bd2bf2bg2bj2bkb2l2bm2bn2bp2bqb2r2bs2bt2bv2bw2bx2by2bz2cb2cc2cd2cf2cgc4h2cjc2kc2l2cm2cn2cp2cqc2r2cs2ct2cv2cw2cx2cy2cz2db2dc2dd2df2dg2dj2dk2dl2dm2dn2dp2dqd2r2ds2dt2dv2dw2dx2dy2dz4e_4é_4és2fb2fc2fd2ff2fg2fj2fkf2l2fm2fn2fp2fqf2r2fs2ft2fv2fw2fx2fy2fz2gb2gc2gd2gf2gg2gj2gkg2l2gm2gn2gp2gqg2r2gs2gt2gv2gw2gx2gy2gz2hb2hc2hd2hf2hg2hj2hk2hl2hm2hn2hp2hq2hr2hs2ht2hv2hw2hx2hy2hz4í_2jb2jc2jd2jf2jg2jj2jk2jl2jm2jn2jp2jq2jr2js2jt2jv2jw2jx2jy2jz2kb2kc2kd2kf2kg2kj2kkk2l2km2kn2kp2kqk2r2ks2kt2kv2kw2kx2ky2kz2lb2lc2ld2lf2lg2lj2lkl4l2lm2ln2lp2lq2lr2ls2lt2lv2lw2lx2ly2lz2mb2mc2md2mf2mg2mj2mk2ml2mm2mn2mp2mq2mr2ms2mt2mv2mw2mx2my2mz2nb2nc2nd2nf2ng2nj2nk2nl2nm2nn2np2nq2nr2ns2nt2nv2nw2nx2ny2nz2o_2pb2pc2pd2pf2pg2pj2pkp2l2pm2pn2pp2pqp2r2ps2pt2pv2pw2px2py2pz2qb2qc2qd2qf2qg2qj2qk2ql2qm2qn2qp2qq2qr2qs2qt2qv2qw2qx2qy2qz2rb2rc2rd2rf2rg2rj2rk2rl2rm2rn2rp2rqr2r2rs2rt2rv2rw2rx2ry2rz2sb2sc2sd2sf2sg2sj2sk2sl2sm2sn2sp2sq2sr2ss2st2sv2sw2sx2sy2sz2tb2tc2td2tf2tg2tj2tk2tm2tn2tp2tqt2r2ts2tt2tv2twt2x2ty2tz2vb2vc2vd2vf2vg2vj2vkv2l2vm2vn2vp2vqv2r2vs2vt2vv2vw2vx2vy2vz2wb2wc2wd2wf2wg2wj2wkw2l2wm2wn2wp2wqw2r2ws2wt2wv2ww2wx2wy2wz2xb2xc2xd2xf2xg2xj2xk2xl2xm2xn2xp2xq2xr2xs2xt2xv2xw2xx2xy2xz2yb2yc2yd2yf2yg2yj2yk2yl2ym2yn2yp2yq2yr2ys2yt2yv2yw2yx2yy2yz2zb2zc2zd2zf2zg2zj2zk2zl2zm2zn2zp2zq2zr2zs2zt2zv2zw2zx2zy2zz",4:"4ad_2al_4an_4ar_4as_4ás_2b1h2bl_2br_2ch_2cl_4cn_2cr_4ct_4cz_2d1h2dr_4ed_4en_4er_4es_2f1h2fl_2fr_4ft_2g2h2gl_4gn_2gr_2h1hi2a_4ía_i2o_2j1h2k2h2kl_2kr_2l1h2ll_mal22m1h4mn_2n1h2no_4ón_2os_4pc_2p1h2pl_4pn_2pr_4pt_2q1h2r1h2rr_3sa_2s1h2t1h2t2l2tr_4ts_4tz_2v1h2vl_2vr_2w1h2wl_2wr_2x1h2y1h2z1h",5:"_an3h4áis_4ando4aos_bien2bio1heco1h4éis_4eos_geo1h4ían_i2as_4ías_i2os_iso1hmal3bmal3cmal3dmal3fmal3gmal3mmal3pmal3qmal3smal3tmal3v4meo_neo1ho2os_2ótic3sas_s3te_",6:"_an2a2_an2á2_an2e2_an2é2_an2i2_an2í2_ani3m_aniña_ani3q_an2o2_an2ó2_an2u2_anu3l_bi1ox_bi1un_co2a2_co2á2_co2e2_co2é2_co2i2_co2í2_co3o4_co2ó2_co2u2_co2ú2_en2a2_en2á2_en2e2_en2é2_en1ej_en2i2_en2í2_en2o2_en2ó2_en2u2_en2ú2_in2a2_in2á2_in2e2_in2é2_in2i2_in2í2_in2o2_in2ó2_in2u2_in2ú2_re2a2_re2á2_re3e4_re2é2_re2i2_re2í2_re2o2_re2ó2_re1oc_re1oj_re2u2_re2ú24a3ba_acto1h4a3da_4adle_4adlo_4adme_4a3do_4adte_aero1hafro1haí5so_2ales_ana3líanfi1hante1h4a3ra_4a3rá_4a3re_4a3ré_a3rio_4a3se_4aste_asu3b24ates_auto1h2b3c2n2b3c2t2b3c2z2b3f2t2b3g2nbien3hbien3mbien3qbien3tbien3vbio1a2bio1á2bio1e2bio1é2bio1i2bio1í2bio1o2bio1ó2bio1u2bio1ú22b3m2n2b3p2n2b3p2s2b3p2t2b3t2s2b3t2z4caca44caga44cago42c3c2n2c3c2t2c3c2z2c3f2t2c3g2ncito1h2c3m2nco4artco4ártco4ercco4erzco4optco4ord2c3p2n2c3p2s2c3p2t2c3t2s2c3t2z4culo42d3c2n2d3c2t2d3c2zdeca1hde3seo2d3f2t2d3g2n2d3m2n2d3p2n2d3p2s2d3p2t2d3t2s2d3t2zeco1a2eco1á2eco1e2eco1é2eco1i2eco1í2eco1o2eco1ó2eco1u2eco1ú24edle_4edlo_4edme_4edte_emi2o2endo1hento1h4e3rá_4e3ré_4erla_4erle_4erlo_4erme_4erse_4erte_euco1heuro1hfono1hfoto1hgeo1a2geo1á2geo1e2geo1é2geo1i2geo1í2geo1o2geo1ó2geo1u2geo1ú2hemi1hhemo1hhexa1hhomo1h4íais_2i3ca_2i3co_4í3da_4í3do_4i4er_4i3ga_4i3go_4ísmo_iso1a2iso1á2iso1e2iso1é2iso1i2iso1í2iso1o2iso1ó2iso1u2iso1ú24ísta_kilo1h2l3c2n2l3c2t2l3c2z2l3f2t2l3g2n2l3m2n2l3p2n2l3p2s2l3p2t2l3t2s2l3t2zma4l3hmaxi1h2m3c2n2m3c2t2m3c2zmega1h2m3f2t2m3g2nmili1hmini1h2m3m2nmono1h2m3p2n2m3p2s2m3p2t2m3t2s2m3t2znamo1h2n3c2n2n3c2t2n3c2zneo1a2neo1á2neo1e2neo1é2neo1i2neo1í2neo1o2neo1ó2neo1u2neo1ú2neto1h2n3f2t2n3g2n2n3m2n2n3p2n2n3p2s2n3p2t2n3t2s2n3t2zocta1hocto1homni1h4ones_2o3sa_2o3so_para1h4pedo4poli1h3p2sic3p2siq4puta44puto42r3c2n2r3c2t2r3c2z2r3f2t2r3g2n2r3m2nromo1h2r3p2n2r3p2s2r3p2t2r3t2s2r3t2z2s3c2n2s3c2t2s3c2zsemi1h2s3f2t2s3g2n2s3m2n2s3p2n2s3p2s2s3p2ts3tal_s3tes_s3tor_2s3t2s2s3t2zsup6ra2t3c2n2t3c2t2t3c2ztele1h4teta_2t3f2t2t3g2n2t3m2ntopo1h2t3p2n2t3p2s2t3p2t2t3t2s2t3t2zu4teriwa3s4h2x3c2n2x3c2t2x3c2zxeno1h2x3f2t2x3g2n2x3m2n2x3p2n2x3p2s2x3p2t2x3t2s2x3t2z2y3c2n2y3c2t2y3c2z2y3f2t2y3g2n2y3m2n2y3p2n2y3p2s2y3p2t2y3t2s2y3t2z",7:"_ana3li_aná3li_ane3xa_ane3xá_ane3xe_ane3xé_ani3ll_ano5ta_ano3tá_anti1h_an2ú2__anua3l_anu3bl_anu3da_bi1aur_bi1ó2x_en1apa_en1arb_en1art_he4mee_hu4mea_hu4meo_mala1e_pre2a2_pre2á2_pre2e2_pre2é2_pre2h2_pre2i2_pre2í2_pre2o2_pre2ó2_pre2u2_pre2ú2_pro2a2_pro2á2_pro2e2_pro2é2_pro2h2_pro2i2_pro2í2_pro2o2_pro2ó2_pro2u2_pro2ú2_re3abr_re3ábr_re3a2q_re3a2z_re3i2m_re3inc_re3ing_re3ins_re3int_re3o2b_re1unt_so3a4s4a3ban_4a3bas_acante2acto1a2acto1á2acto1e2acto1é2acto1i2acto1í2acto1o2acto1ó2acto1u2acto1ú24a3das_4adlas_4adles_4adlos_4adnos_4a3dor_4a3dos_aero1a2aero1á2aero1e2aero1é2aero1i2aero1í2aero1o2aero1ó2aero1u2aero1ú2afro1a2afro1á2afro1e2afro1é2afro1i2afro1í2afro1o2afro1ó2afro1u2afro1ú2aí5sos_4a3mos_anfi1a2anfi1á2anfi1e2anfi1é2anfi1i2anfi1í2anfi1o2anfi1ó2anfi1u2anfi1ú2anglo1hante1a2ante1á2ante1e2ante1é2ante1i2ante1í2ante1o2ante1ó2ante1u2ante1ú24áosla_4áosle_4áoslo_4a3ran_4a3rán_4a3ras_4a3rás_archi1h4a3ren_4a3res_4a3rés_4a3ría_a3rios_4a3rís_4a4rme_4a3ron_4a3ros_4a3sen_4a3ses_4astes_auto1a2auto1á2auto1e2auto1é2auto1i2auto1í2auto1o2auto1ó2auto1u2auto1ú2bi1u2ní4cagas_centi1hciclo1hcito1a2cito1á2cito1e2cito1é2cito1i2cito1í2cito1o2cito1ó2cito1u2cito1ú23c2neorcnico1hco4accico4actico4adjuco4adyuco3agenco4e3táco3exisco4imbrco4incico4i3tocon1urbcrono1hdeca1a2deca1á2deca1e2deca1é2deca1i2deca1í2deca1o2deca1ó2deca1u2deca1ú2decimo1desa3fidesa3fídesa3güde4s3eqde3signde3sollea3cia_ea3cio_4eadla_ecano1hectro1h4edlas_4edles_4edlos_4ednos_4e3dro_4eedla_4emboca4e3mos_endo1a2endo1á2endo1e2endo1é2endo1i2endo1í2endo1o2endo1ó2endo1u2endo1ú2ento1a2ento1á2ento1e2ento1é2ento1i2ento1í2ento1o2ento1ó2ento1u2ento1ú2entre1h4éosla_4éosle_4éoslo_e5r4ad_e5r4an_4e3rán_e5r4as_4e3rás_4e3rés_4e3ría_4e3rís_4erlas_4erles_4erlos_4ernos_4e3ros_euco1a2euco1á2euco1e2euco1é2euco1i2euco1í2euco1o2euco1ó2euco1u2euco1ú2euro1a2euro1á2euro1e2euro1é2euro1i2euro1í2euro1o2euro1ó2euro1u2euro1ú2expoli4extra1hfono1a2fono1á2fono1e2fono1é2fono1i2fono1í2fono1o2fono1ó2fono1u2fono1ú2foto1a2foto1á2foto1e2foto1é2foto1i2foto1í2foto1o2foto1ó2foto1u2foto1ú2gluco1hhecto1hhelio1hhemi1a2hemi1á2hemi1e2hemi1é2hemi1i2hemi1í2hemi1o2hemi1ó2hemi1u2hemi1ú2hemo1a2hemo1á2hemo1e2hemo1é2hemo1i2hemo1í2hemo1o2hemo1ó2hemo1u2hemo1ú2hexa1a2hexa1á2hexa1e2hexa1é2hexa1i2hexa1í2hexa1o2hexa1ó2hexa1u2hexa1ú2hidro1hhisto1hhomo1a2homo1á2homo1e2homo1é2homo1i2homo1í2homo1o2homo1ó2homo1u2homo1ú2ia5res_2i3cas_icono1h2i3cos_4i2dal_4í3das_4i3deo_4í3dos_4i3gas_4i3gás_4í3mos_infra1hintra1h4ísmos_4ístas_4í3tes_kilo1a2kilo1á2kilo1e2kilo1é2kilo1i2kilo1í2kilo1o2kilo1ó2kilo1u2kilo1ú2li5áreamacro1hmante4amaxi1a2maxi1á2maxi1e2maxi1é2maxi1i2maxi1í2maxi1o2maxi1ó2maxi1u2maxi1ú2mega1a2mega1á2mega1e2mega1é2mega1i2mega1í2mega1o2mega1ó2mega1u2mega1ú23mente_micro1hmili1a2mili1á2mili4armili1e2mili1é2mili1i2mili1í2mili1o2mili1ó2mili1u2mili1ú2mini1a2mini1á2mini1e2mini1é2mini1i2mini1í2mini1o2mini1ó2mini1u2mini1ú2miria1hmono1a2mono1á2mono1e2mono1é2mono1i2mono1í2mono1o2mono1ó2mono1u2mono1ú2multi1hnamo1a2namo1á2namo1e2namo1é2namo1i2namo1í2namo1o2namo1ó2namo1u2namo1ú2necro1hneto1a2neto1á2neto1e2neto1é2neto1i2neto1í2neto1o2neto1ó2neto1u2neto1ú2norte1hocta1a2octa1á2octa1e2octa1é2octa1i2octa1í2octa1o2octa1ó2octa1u2octa1ú2octo1a2octo1á2octo1e2octo1é2octo1i2octo1í2octo1o2octo1ó2octo1u2octo1ú24o2ica_4o2ico_oligo1homni1a2omni1á2omni1e2omni1é2omni1i2omni1í2omni1o2omni1ó2omni1u2omni1ú22o3sas_2o3sos_4ósteo_paleo1hpara1a2para1á2para1e2para1é2para1i2para1í2para1o2para1ó2para1u2para1ú2penta1hpiezo1hpluri1hpoi3de_poli1a2poli1á2poli1e2poli1é2poli1i2poli1í2poli1o2poli1ó2poli1u2poli1ú2pos3ta_pre3olíproto1hradio1hranco1hretro1hrmano1hromo1a2romo1á2romo1e2romo1é2romo1i2romo1í2romo1o2romo1ó2romo1u2romo1ú2san4c5tsemi1a2semi1á2semi1e2semi1é2semi1i2semi1í2semi1o2semi1ó2semi1u2semi1ú2seudo1hsobre1hsocio1hs3tora_supra1htalmo1htele1a2tele1á2tele1e2tele1é2tele1i2tele1í2tele1o2tele1ó2tele1u2tele1ú2termo1h4tetas_tetra1hti2o3coti2o3qutopo1a2topo1á2topo1e2topo1é2topo1i2topo1í2topo1o2topo1ó2topo1u2topo1ú2tropo1hultra1hxeno1a2xeno1á2xeno1e2xeno1é2xeno1i2xeno1í2xeno1o2xeno1ó2xeno1u2xeno1ú2",8:"_an3aero_ane3xio_ane3xió_ani3dar_ani3mad_ani3mád_an3i2so_an3i2só_ani3vel_ano5che_ano5din_ano5mal_anó5mal_ano5nad_ano5nim_anó3nim_anti1a2_anti1á2_anti1e2_anti1é2_anti1i2_anti1í2_anti1o2_anti1ó2_anti1u2_anti1ú2_anua4lm_de2s2a2_de2s2á2_de2s2e2_de2s2é2_de2s2i2_de2s2í2_de2s2o2_de2s2ó2_de2s2u2_de2s2ú2_en1aciy_en1anch_en2artr_eno3jar_hepta1e_ina3nic_in3anim_iná3nim_in3apel_iné3dit_in3efic_ini3cia_ini3ciá_ini3cie_ino3cua_ino3cuo_intra1o_intra1u_inú3til_mal1est_mal1int_pos3tin_pos3tín_re3a2eg_re3alim_re3anim_re3aním_re3orga_retro1a_re3unir_re3unír_re3usar_re3usár_su2b2a2_su2b2á2_sub3arr_su2b2e2_su2b2é2_su2b2i2_su2b2í2_sub3ími_sub3índ_su2b2o2_su2b2ó2_su2b2u2_su2b2ú2_sur1est_sur1oes_tra2s1a_tra2s1o_tri1ó2x4a3bais_4a3ción_4ádmele_4ádmelo_4a3dora_4ádsela_4ádsele_4ádselo_4ádtele_4ádtelo_4ándola_4ándole_4ándolo_4ándome_4ándoos_4ándose_4ándote_anglo1a2anglo1á2anglo1e2anglo1é2anglo1i2anglo1í2anglo1o2anglo1ó2anglo1u2anglo1ú24áoslas_4áosles_4áoslos_4a3rais_archi1a2archi1á2archi1e2archi1é2archi1i2archi1í2archi1o2archi1ó2archi1u2archi1ú24a3reis_4a3réis_4a3ríais4a3rían_4a3rías_4a4r3la_4a4r3le_4a4r3lo_4árosla_4árosle_4ároslo_4a4r3se_4a4r3te_4a3seis_4asteis_biblio1hcardio1hcefalo1hcenti1a2centi1á2centi1e2centi1é2centi1i2centi1í2centi1o2centi1ó2centi1u2centi1ú2ciclo1a2ciclo1á2ciclo1e2ciclo1é2ciclo1i2ciclo1í2ciclo1o2ciclo1ó2ciclo1u2ciclo1ú2cnico1a2cnico1á2cnico1e2cnico1é2cnico1i2cnico1í2cnico1o2cnico1ó2cnico1u2cnico1ú2co4a3dunco4a3gulco4á3gulco4a3licco4aptacco4e3ficcon1imbrcontra1hco4o3perco4o3pércripto1hcrono1a2crono1á2crono1e2crono1é2crono1i2crono1í2crono1o2crono1ó2crono1u2crono1ú2de4s3abrde4s3agudesa3lindesa3livde4s3almdesa3lojde4s3anddesa3pañdesa3pegde4s3armdes4armede4s3asndesa3tindesa3yundesa3zondesa3zónde3semejde4s3endde4s3enjde4s3enmde4s3enrde4s3ensde3s4ertde3s4értde3siderde3sidiade3sidiode3siertde3socupde3solacde3soladde3soncede4s3ovade4s3ovide4s3oxide4s3oyede4s3oyéde3suelldodeca1hea3cias_ea3cios_ecano1a2ecano1á2ecano1e2ecano1é2ecano1i2ecano1í2ecano1o2ecano1ó2ecano1u2ecano1ú2ectro1a2ectro1á2ectro1e2ectro1é2ectro1i2ectro1í2ectro1o2ectro1ó2ectro1u2ectro1ú24édmele_4édmelo_4e3dros_4édsela_4édsele_4édselo_4édtele_4édtelo_entre1a2entre1á2entre1e2entre1é2entre1i2entre1í2entre1o2entre1ó2entre1u2entre1ú24éoslas_4éosles_4éoslos_e5r4áis_4e3réis_4e3rían_4e3rías_4e3rior_4érmele_4érmelo_4érsela_4érsele_4érselo_4értele_4értelo_extra1a2extra1á2extra1e2extra1é2extra1i2extra1í2extra1o2extra1ó2extra1u2extra1ú2gastro1hgluco1a2gluco1á2gluco1e2gluco1é2gluco1i2gluco1í2gluco1o2gluco1ó2gluco1u2gluco1ú2hecto1a2hecto1á2hecto1e2hecto1é2hecto1i2hecto1í2hecto1o2hecto1ó2hecto1u2hecto1ú2helio1a2helio1á2helio1e2helio1é2helio1i2helio1í2helio1o2helio1ó2helio1u2helio1ú2hemato1hhidro1a2hidro1á2hidro1e2hidro1é2hidro1i2hidro1í2hidro1o2hidro1ó2hidro1u2hidro1ú2hipe2r3rhisto1a2histo1á2histo1e2histo1é2histo1i2histo1í2histo1o2histo1ó2histo1u2histo1ú24ía3mos_icono1a2icono1á2icono1e2icono1é2icono1i2icono1í2icono1o2icono1ó2icono1u2icono1ú24i3deos_4i3gáis_infra1a2infra1á2infra1e2infra1é2infra1i2infra1í2infra1o2infra1ó2infra1u2infra1ú2inter4ésinter4inintra1a2intra1á2intra1e2intra1é2intra1i2intra1í2intra1o2intra1ó2intra1u2intra1ú24í4s3te_4ística_4ístico_macro1a2macro1á2macro1e2macro1é2macro1i2macro1í2macro1o2macro1ó2macro1u2macro1ú24meable_megalo1hmelano1hmicro1a2micro1á2micro1e2micro1é2micro1i2micro1í2micro1o2micro1ó2micro1u2micro1ú2miria1a2miria1á2miria1e2miria1é2miria1i2miria1í2miria1o2miria1ó2miria1u2miria1ú2multi1a2multi1á2multi1e2multi1é2multi1i2multi1í2multi1o2multi1ó2multi1u2multi1ú2necro1a2necro1á2necro1e2necro1é2necro1i2necro1í2necro1o2necro1ó2necro1u2necro1ú2norte1a2norte1á2norte1e2norte1é2norte1i2norte1í2norte1o2norte1ó2norte1u2norte1ú24o2icas_4o2icos_o4i3dal_4o2i3de_o4i3dea_oligo1a2oligo1á2oligo1e2oligo1é2oligo1i2oligo1í2oligo1o2oligo1ó2oligo1u2oligo1ú24ó3loga_4ó3logo_4ósteos_paleo1a2paleo1á2paleo1e2paleo1é2paleo1i2paleo1í2paleo1o2paleo1ó2paleo1u2paleo1ú2para2is_para4ísopenta1a2penta1á2penta1e2penta1é2penta1i2penta1í2penta1o2penta1ó2penta1u2penta1ú2piezo1a2piezo1á2piezo1e2piezo1é2piezo1i2piezo1í2piezo1o2piezo1ó2piezo1u2piezo1ú2plan4c5tpluri1a2pluri1á2pluri1e2pluri1é2pluri1i2pluri1í2pluri1o2pluri1ó2pluri1u2pluri1ú2poi3des_poli4arqpoli4árqpoli4u3rpos3tas_pre3eligpre3elijpre3eminpre3exispreo3cuppreo2cúppre3opinproto1a2proto1á2proto1e2proto1é2proto1i2proto1í2proto1o2proto1ó2proto1u2proto1ú2radio1a2radio1á2radio1e2radio1é2radio1i2radio1í2radio1o2radio1ó2radio1u2radio1ú2ranco1a2ranco1á2ranco1e2ranco1é2ranco1i2ranco1í2ranco1o2ranco1ó2ranco1u2ranco1ú2retro1a2retro1á2retro1e2retro1é2retro1i2retro1í2retro1o2retro1ó2retro1u2retro1ú2rmano1a2rmano1á2rmano1e2rmano1é2rmano1i2rmano1í2rmano1o2rmano1ó2rmano1u2rmano1ú2seudo1a2seudo1á2seudo1e2seudo1é2seudo1i2seudo1í2seudo1o2seudo1ó2seudo1u2seudo1ú2sobre1a2sobre1á2sobre1e2sobre1é2sobre1i2sobre1í2sobre1o2sobre1ó2sobre1u2sobre1ú2socio1a2socio1á2socio1e2socio1é2socio1i2socio1í2socio1o2socio1ó2socio1u2socio1ú2s3toras_s3tores_su4d3oessupe2r3rsupra1a2supra1á2supra1e2supra1é2supra1i2supra1í2supra1o2supra1ó2supra1u2supra1ú2talmo1a2talmo1á2talmo1e2talmo1é2talmo1i2talmo1í2talmo1o2talmo1ó2talmo1u2talmo1ú23te3ri3ntermo1a2termo1á2termo1e2termo1é2termo1i2termo1í2termo1o2termo1ó2termo1u2termo1ú2tetra1a2tetra1á2tetra1e2tetra1é2tetra1i2tetra1í2tetra1o2tetra1ó2tetra1u2tetra1ú2trans4artrans4ittropo1a2tropo1á2tropo1e2tropo1é2tropo1i2tropo1í2tropo1o2tropo1ó2tropo1u2tropo1ú2ultra1a2ultra1á2ultra1e2ultra1é2ultra1i2ultra1í2ultra1o2ultra1ó2ultra1u2ultra1ú2",9:"_bi1anual_bien1and_bien1apa_bien1ave_bien1est_bien1int_dieci1o2_en1aceit_en1aguaz_enu3mera_enu3merá_enu3mere_in3abarc_in3abord_in3acent_in3adapt_in3aplic_in3arrug_in3asist_in3efici_in3eludi_ine3narr_ino3cula_ino3culá_ino3cule_inte2r3r_mal1acon_mal1acos_pos2t2a2_pos2t2á2_pos2t2e2_pos2t2é2_pos3terg_pos2t2i2_pos2t2í2_post3ind_pos2t2o2_pos2t2ó2_post3ope_post3rev_pos2t2u2_pos2t2ú2_re3afirm_re3afírm_re3ajust_rea3júst_rea3lism_rea3list_rea3liza_rea3lizá_rea3líza_re3ubica_re3ubíca_reu3mati_reu3máti_su3b4ien_sub2i3ll_su4b3ray_sub3urba_su2d1est_sur1a2me_tele1imp_tele1obj_tra2s2oñ4á3bamos_4ád3mela_4ádmeles_4ádmelos_4ádnosla_4ádnosle_4ádnoslo_4a3doras_4a3dores_4ádselas_4ádseles_4ádselos_4ád3tela_4ádteles_4ádtelos_4a4i3gan_4ándolas_4ándoles_4ándolos_4ándonos_4á3ramos_4a3remos_4á3remos_4a4r3las_4a4r3les_4a4r3los_4á4rmele_4á4rmelo_4a4r3nos_4ároslas_4árosles_4ároslos_4á3semos_biblio1a2biblio1á2biblio1e2biblio1é2biblio1i2biblio1í2biblio1o2biblio1ó2biblio1u2biblio1ú2b4ien3do_cardio1a2cardio1á2cardio1e2cardio1é2cardio1i2cardio1í2cardio1o2cardio1ó2cardio1u2cardio1ú2cefalo1a2cefalo1á2cefalo1e2cefalo1é2cefalo1i2cefalo1í2cefalo1o2cefalo1ó2cefalo1u2cefalo1ú2contra1a2contra1á2contra1e2contra1é2contra1i2contra1í2contra1o2contra1ó2contra1u2contra1ú2cripto1a2cripto1á2cripto1e2cripto1é2cripto1i2cripto1í2cripto1o2cripto1ó2cripto1u2cripto1ú2desa3briddesa3certde4s3acotde4s3aficde4s3afilde4s3afinde4s3afordesa3garrde4s3ahijde4s3aliñdesa3marrdesa3moblde4s3anidde4s3animde4s3anímde4s3anudde4s3apoyde4s3arende4s3avisde4s3empéde4s3enamde4s3enchde4s3enclde4s3encode4s3encrde4s3encude3senfadde3senfádde4s3enfide4s3enfode4s3enfóde3sengañde3sengáñde4s3enlode4s3entade4s3entode4s3entrde4s3entude3s4ercide4s3espade3sesperde3sigualde3siluside4s3imande3sinencde3sinfecde4s3inflde3sistende4s3odorde4s3ordede4s3órdede4s3orejde3s4osegde3su3dande3su3darde3su3dasde4s3unimde4s3unirdodeca1a2dodeca1á2dodeca1e2dodeca1é2dodeca1i2dodeca1í2dodeca1o2dodeca1ó2dodeca1u2dodeca1ú24éd3mela_4édmeles_4édmelos_4édnosla_4édnosle_4édnoslo_4é3drica_4é3drico_4édselas_4édseles_4édselos_4éd3tela_4édteles_4édtelos_e5r4a3ba_e5r4a3da_e5r4a3do_e5r4a3ra_e5r4a3rá_e5r4a3re_e5r4a3ré_e5r4a3se_e5r4aste_e5r4ates_4e3ríais_4e3riora_4ér3mela_4érmeles_4érmelos_4érnosla_4érnosle_4érnoslo_4é3rosla_4é3rosle_4é3roslo_4érselas_4érseles_4érselos_4ér3tela_4érteles_4értelos_gastro1a2gastro1á2gastro1e2gastro1é2gastro1i2gastro1í2gastro1o2gastro1ó2gastro1u2gastro1ú2hemato1a2hemato1á2hemato1e2hemato1é2hemato1i2hemato1í2hemato1o2hemato1ó2hemato1u2hemato1ú2hipe2r1a2hipe2r1á2hipe2r1e2hipe2r1é2hipe2r1i2hipe2r1í2hipe2r1o2hipe2r1ó2hipe2r1u2hipe2r1ú24i2dales_4i3gamos_inter4inointer4ior4ís3teis_4í4s3tes_4ísticas_4ísticos_4meables_megalo1a2megalo1á2megalo1e2megalo1é2megalo1i2megalo1í2megalo1o2megalo1ó2megalo1u2megalo1ú2melano1a2melano1á2melano1e2melano1é2melano1i2melano1í2melano1o2melano1ó2melano1u2melano1ú2mili4arioo4i3deas_4o2i3des_4ó3logas_4o3logía_4ó3logos_pe5r4antepoli4andrpoli4éstes3ta3les_s3ti3lla_supe2r1a2supe2r1á2supe2r1e2supe2r1é2supe2r1i2supe2r1í2super4iorsupe2r1o2supe2r1ó2supe2r1u2supe2r1ú2t4eo3nes_tran4sacctrans4ido",10:"_an3e2pigr_ante2o3je_en1aguach_in3aguant_ina3movib_in3analiz_in3apreci_in3aprens_inte2r1a2_inte2r1á2_inte2r1e2_inte2r1é2_inte2r1i2_inte2r1í2_inte2r1o2_inte2r1ó2_inte2r1u2_inte2r1ú2_inu3tiliz_ma4l3e4du_pa4n1afri_pa4n1ópti_post3elec_pos3te3ri_pos3ti3go_pos3ti3la_post3impr_pos3ti3ne_pos3ti3za_pos3ti3zo_pos3tó3ni_pos3tu3la_pos3tu3lá_pos3tu3le_pos3tu3lé_pos3tu3ra_re3a2grup_re3aparec_re3utiliz_re3utilíz_sub3aflue_sub3enten_sub3estim_sub3estím_sub3ofici_su2d1a2fr_su2d1a2me_tran2s1ur4a3ciones_4ád3melas_4ádnoslas_4ádnosles_4ádnoslos_4ád3telas_4ándomela_4ándomele_4ándomelo_4ándosela_4ándosele_4ándoselo_4ándoseme_4ándotela_4ándotele_4ándotelo_4ándoteme_4a3ríamos_4á4r3mela_4á4r3sela_4á4r3sele_4á4r3selo_4á4r3tela_4á4r3tele_4á4r3telo_b4ien3das_centi5áreaco3n4imbride4s3abastde4s3abollde4s3abotode4s3aceitdesa3ciertde4s3acompde4s3aconsde4s3acoplde4s3acorrde4s3activde4s3adeudde4s3adornde4s3aferrde4s3agradde4s3agregde4s3agrupde4s3aherrde4s3ajustde4s3alentde4s3alfomde4s3alforde4s3aliende4s3alinede4s3almidde4s3alterde4s3amoldde4s3amortde4s3angeldesa3pacibde4s3apadrde4s3aparedesa3parecdesa3paricde4s3aplicde4s3apretde4s3aprobde4s3arbolde4s3arrimdesa3rrollde4s3arropde4s3arrugde4s3asentde4s3asistdesa3sosegde4s3atencde4s3atendde4s3atentde4s3atornde4s3autorde4s3embalde4s3embálde4s3embarde4s3embárde4s3embotde4s3empacde4s3empañde4s3empáñde4s3empatde4s3empegde4s3emplede4s3empozde4s3encabde4s3encadde4s3encajde4s3encájde4s3encamde3sencantde4s3encapde4s3encarde4s3encárde3senfrende4s3enfurde4s3engarde4s3engasde4s3engomde4s3engozde4s3engrade4s3enladde4s3enlazde3sentendde4s3enterde3sentiende3sentiénde4s3estimde4s3imponde4s3inhibde3s4interde4s3intoxde4s3inverde4s3obligde4s3obstrde4s3ub4icde4s3unierde3s4ustane4a3miento4éd3melas_4édnoslas_4édnosles_4édnoslos_4é3dricas_4é3dricos_4éd3telas_e5r4a3ban_e5r4a3bas_4e3ra3ble_e5r4a3das_e5r4a3dor_e5r4a3dos_e5r4a3mos_e5r4a3ran_e5r4a3rán_e5r4a3ras_e5r4a3rás_e5r4a3ren_e5r4a3res_e5r4a3rés_e5r4a3ría_e5r4a3rís_e5r4a3ron_e5r4a3sen_e5r4a3ses_e5r4astes_4e3re3mos_4e3ríamos_4e3rioras_4e3riores_4ér3melas_4érnoslas_4érnosles_4érnoslos_4é3roslas_4é3rosles_4é3roslos_4ér3telas_familia3riinter4esarmini4a5turo4i3dales_4o3logías_4o3lógica_4o3lógico_para4ulatape3r4e3miaperpon5d6rpoli4anteapoli4o5mies3ti3llas_s3ti3llón_super4ablesupe4r4a3rsupe4r4á3rtrans4ibertrans4igentrans4igirtrans4itabultra4ísmo",11:"_mal1andant_mal1andanz_pa4n1europ_sub2i3mien_tran2s1alp_tran2s1and_tran2s1atl_tran2s1oce4ándomelas_4ándomeles_4ándomelos_4ándoselas_4ándoseles_4ándoselos_4ándosenos_4ándotelas_4ándoteles_4ándotelos_4ándotenos_4á4r3melas_4á4r3meles_4á4r3melos_4á4r3nosla_4á4r3nosle_4á4r3noslo_4á4r3selas_4á4r3seles_4á4r3selos_4á4r3telas_4á4r3teles_4á4r3telos_de4s3abrochde4s3acelerde4s3acobarde4s3acomoddesa3cralizde4s3acuartde4s3aderezde4s3adorarde4s3advertde4s3agracide4s3agravide4s3alagarde4s3alquilde4s3alumbrde4s3amuebldesa3percibde4s3aprenddesa3prenside4s3aprietde4s3apropide4s3arraigde4s3arreglde4s3arrenddesa3sosiegde4s3atiendde4s3atrancde4s3embargde4s3embolsde4s3emborrde4s3emboscde4s3embragde4s3embrágde4s3embrujde4s3embrújde4s3empedrde4s3empeorde4s3empernde4s3empolvde4s3empotrde4s3encallde4s3encállde4s3enfundde4s3enhebrde4s3entierde4s3entiérde4s3envainde3sesperacde4s3imaginde4s3impresde4s3incentde4s3inclinde4s3incorpde4s3inflamde4s3informde4s3insectde4s3instalde3s4integrde4s3obedecde3s4ubstane5r4a3bais_4e3ra3bles_e5r4a3dora_e5r4a3rais_e5r4a3reis_e5r4a3réis_e5r4a3ríaise5r4a3rían_e5r4a3rías_e5r4a3seis_e5r4asteis_4i3gá3moos_4o3lógicas_4o3lógicos_2o3samente_super4ación4te4r5i4nsutrans4eúntetrans4icióntrans4istortrans4ubsta",12:"_in3ter2e3sa_in3ter2e3sá_in3ter2e3se_in3ter2e3sé_in3ter2e3so_in3ter2e3só_in3te3r4rog_pa4n1a4meri4á4r3noslas_4á4r3nosles_4á4r3noslos_deca2i3mientde4s3acostumde4s3acreditde4s3adormecdesa3guisadode4s3apolillde4s3articulde4s3embravede4s3embrávede4s3embrollde4s3embróllde4s3emparejde4s3emparéjde4s3emperezde4s3enganchde3senvolvimde4s3estabilde4s3impresXde4s3incruste5r4á3bamos_e5r4a3doras_e5r4a3dores_e5r4á3ramos_e5r4a3remos_e5r4á3remos_e5r4á3semos_4e3rioridad_4i3gá3monos_4i3gá3mosla_4i3gá3mosle_4i3gá3moslo_4i3gá3mosme_4i3gá3moste_s3ti3llones_trans4itorio",13:"_in3te3r4rump_in3te3r4rupc_in3te3r4ruptde4s3aprovechde4s3empaquetde4s3empaquétde4s3emparentde4s3esperanze5r4a3ríamos_4e3riormente_4i3gá3moosla_4i3gá3moosle_4i3gá3mooslo_4i3gá3mosela_4i3gá3mosele_4i3gá3moselo_4i3gá3moslas_4i3gá3mosles_4i3gá3moslos_supe3r4á3vit_",14:"4e3rioridades_4i3gá3monosla_4i3gá3monosle_4i3gá3monoslo_4i3gá3mooslas_4i3gá3moosles_4i3gá3mooslos_4i3gá3moselas_4i3gá3moseles_4i3gá3moselos_4i3gá3mosmele_4i3gá3mosmelo_4i3gá3mostele_4i3gá3mostelo_supe3r4á3vits_",15:"4e3ra3blemente_4i3gá3monoslas_4i3gá3monosles_4i3gá3monoslos_4i3gá3mos3mela_4i3gá3mosmeles_4i3gá3mosmelos_4i3gá3mos3tela_4i3gá3mosteles_4i3gá3mostelos_4o3lógicamente_",16:"4i3gá3mos3melas_4i3gá3mos3telas_",17:"_de3s4in3ter2e3sa_de3s4in3ter2e3sá_de3s4in3ter2e3se_de3s4in3ter2e3sé_de3s4in3ter2e3so_de3s4in3ter2e3só"}};Hyphenator.languages['fr']={leftmin:2,rightmin:3,shortestPattern:1,longestPattern:14,specialChars:"àâçèéêîïôûœ’'",patterns:{2:"1ç1j1q",3:"1gè’â41zu1zo1zi1zè1zé1ze1za’y4_y41wu1wo1wi1we1wa1vy1vû1vu1vô1vo1vî1vi1vê1vè1vé1ve1vâ1va’û4_û4’u4_u41ba1bâ1ty1be1bé1bè1bê1tû1tu1tô1bi1bî1to1tî1ti1tê1tè1té1te1tà1tâ1ta1bo1bô1sy1sû1su1sœ1bu1bû1by2’21ca1câ1sô1ce1cé1cè1cê1so1sî1si1sê1sè1sé1se1sâ1sa1ry1rû1ru1rô1ro1rî1ri1rê1rè1ré1re1râ1ra’a41py1pû1pu1pô1po1pî1pi1pê1pè1pé1pe1pâ1pa_ô41ci1cî’ô4’o4_o41nyn1x1nû1nu1nœ1nô1no1nî1ni1nê1nè1né1ne1nâ1co1cô1na1my1mû1mu1mœ1mô1mo1mî1mi1cœ1mê1mè1mé1me1mâ1ma1ly1lû1lu1lô1lo1lî1li1lê1lè1cu1cû1cy1lé1d’1da1dâ1le1là1de1dé1dè1dê1lâ1la1ky1kû1ku1kô1ko1kî1ki1kê1kè1ké1ke1kâ1ka2jk_a4’î4_î4’i4_i41hy1hû1hu1hô1ho1hî1hi1hê1hè1hé1he1hâ1ha1gy1gû1gu1gô1go1gî1gi1gê_â41gé1ge1gâ1ga1fy1di1dî1fû1fu1fô1fo’e41fî1fi1fê1fè1do1dô1fé1fe1fâ1fa’è41du1dû1dy_è4’é4_é4’ê4_ê4_e41zy",4:"1f2lab2h2ckg2ckp2cksd1s22ckb4ck_1c2k2chw4ze_4ne_2ckt1c2lad2hm1s22cht2chsch2r2chp4pe_1t2r1p2h_ph44ph_ph2l2phnph2r2phs1d2r2pht2chn4fe_2chm1p2l1p2r4me_1w2rch2l2chg1c2r2chb4ch_1f2r4le_4re_4de_f1s21k2r4we_1r2h_kh44kh_1k2h4ke_1c2h_ch44ge_4je_4se_1v2r_sh41s2h4ve_4sh_2shm2shr2shs4ce_il2l1b2r4be_1b2l4he_4te__th41t2h4th_g1s21g2r2thl1g2l2thm2thnth2r1g2n2ths2ckf",5:"2ck3h4rhe_4kes_4wes_4res_4cke_éd2hi4vre_4jes_4tre_4zes_4ges_4des_i1oxy4gle_d1d2h_cul44gne_4fre_o1d2l_sch44nes_4les_4gre_1s2ch_réu24sch_4the_1g2hy4gue_2schs4cle_1g2ho1g2hi1g2he4ses_4tes_1g2ha4ves_4she_4che_4cre_4ces_t1t2l4hes_l1s2t4bes_4ble__con4xil3lco1ap4que_vil3l4fle_co1arco1exco1enco1auco1axco1ef4pes_co1é2per3h4mes__pe4r4bre_4pre_4phe_1p2né4ple__dé2smil3llil3lhil3l4dre_cil3lgil3l4fes_",6:"’in1o2rcil4l4phre_4dres_l3lioni1algi2fent_émil4l4phle_rmil4l4ples_4phes_1p2neuextra14pres_y1asthpé2nul2xent__mé2sa2pent_y1algi4chre_1m2nès4bres_1p2tèr1p2tér4chle_’en1o24fles_oxy1a2avil4l_en1o24ques_uvil4lco1a2d4bles__in1a2’in1a21s2por_cons4_bi1u2’as2ta_in1e2’in1e2_in1é2’in1é21s2lov1s2lavco1acq2cent__as2ta_co1o24ches_hémi1é_in2er’in2er2s3homo1ioni_in1i2’in1i22went_4shes__ré1a2_ré1é2_ré1e2_ré2el_in1o2ucil4lco1accu2s3tr_ré2er_ré2èr4cles_2vent__ré1i22sent_2tent_2gent__ré1o24gues__re1s24sche_4thes_’en1a2e2s3ch4gres_1s2cop2lent__en1a22nent__in1u2’in1u24gnes_4cres_wa2g3n4fres_4tres_4gles_1octet_dé1o2_dé1io4thre__bi1au2jent__dé1a22zent_4vres_2dent_4ckes_4rhes__dy2s3sub1s22kent_2rent_2bent_3d2hal",7:"a2g3nos3d2houdé3rent__dé3s2t_dé3s2pé3dent_2r3heur2r3hydri1s2tat2frent_io1a2ctla2w3re’in2u3l_in2u3l2crent_’in2uit_in2uit1s2caph1s2clér_ré2ussi2s3ché_re2s3t_re2s3s4sches_é3cent__seu2le’in2ond_in2ond’in2i3t_in2i3t’in2i3q_ré2aux_in2i3q2shent__di1alduni1a2x’in2ept2flent__in2eptuni1o2v2brent_co2nurb2chent_2quent_1s2perm1s2phèr_ma2c3kuevil4l1s2phér1s2piel1s2tein1s2tigm4chles_1s2tock1s2tyle1p2sych_pro1é2_ma2r1x_stil3lpusil3libril3lcyril3l_pré1s2thril3l_mé3san_pré1u2_mé2s1i_pré1o2_pré1i2piril3lpupil3lâ2ment__pré1e2_pré1é2_pré2au_pré1a22prent_2vrent_supero2_di1e2npoly1u2è2ment_poly1s2poly1o2poly1i2poly1è2poly1é2poly1e2poly1a2supe4r1capil3l2plent_armil5lsemil4lmil4letvacil4l_di2s3h3ph2tis2dlent_a2s3tro4phres_l2ment_i1è2drei1arthr2drent_4phles_supers2ô2ment_extra2i2phent_su3r2ah_su2r3hextra2chypo1u21alcool_per1u2_per1o2_per1i2_per1é2hypo1s2_per1a2hypo1o2hypo1i2hypo1é2_pen2tahypo1e2hypo1a2y1s2tome2s3cophyperu2hype4r1hypers2hypero21m2némohyperi21m2nési4chres_a1è2drehyperé2hypere2hypera2’oua1ou_oua1ouo1s2tomo1s2timo1s2tato1s2tasomni1s2tung2s3_dé3s2c2blent__bio1a2télé1e2télé1i22clent_télé1s22guent_1é2nerg2grent_2trent__dé2s1œ2t3heuro1è2dre2gnent_2glent_4thres__bi1a2t1é2drie_bi1a2c_i2g3nin3s2at_’i2g3ni2ckent__i2g3né’ab3réa’i2g3né_ab3réa_per1e2",8:"_ma2l1ap_dy2s1u2_dy2s1o2_dy2s1i2n3s2ats__dy2s1a2distil3l1é2lectrinstil3l1s2trophe2n1i2vro2b3long1s2tomos_ae3s4ch’ae3s4ch_eu2r1a2ombud2s3’eu2r1a2_mono1s2_mono1u2o1s2téro_mono1o2eu1s2tato1s2tradfritil3la2l1algi_mono1i2_mono1é2_ovi1s2c’ovi1s2c_mono1e2_mono1a2co1assocpaléo1é2boutil3l1s2piros_ré2i3fi_pa2n1ischevil4l1s2patiaca3ou3t2_di1a2cé_para1s2_pa2r3héco1assur_su2b1é2tu2ment_su2ment__su2b1in_su2b3lupapil3lire3pent_’inte4r3_su2b1urab3sent__su2b1a2di2s3cophu2ment_fu2ment__intera2au2ment_as2ment_or2ment_’intera2_intere2pé1r2é2q_péri1os_péri1s2ja3cent__anti1a2_péri1u2’anti1a2er2ment__anti1e2ac3cent_ar2ment_to2ment_’intere2ré3gent_papil3leom2ment_’anti1e2photo1s2_anti1é2_interé2’anti1é2_anti1s2’anti1s23ph2talé’interé2ri2ment__interi2’interi2mi2ment_apo2s3tri2s3chio_pluri1ai2s3chia_intero2’intero2_inte4r3po1astre_interu2’interu2_inters2ai2ment_’inters2papil3la_tri1o2n_su2r1a2_pon2tet_pos2t3h_dés2a3mes3cent__pos2t3r_post1s2_tri1a2tta2ment__tri1a2nra2ment_is3cent__su2r1e2_tri1a2cfa2ment_da2ment__su3r2et_su2r1é2_mé2s1es_mé2g1oh_su2r1of_su2r1ox_re3s4ty_re3s4tu_ma2l1oc’a2g3nat_dé2s1é2_ma2l1entachy1a2_pud1d2ltchin3t2_re3s4trtran2s3p_bi2s1a2tran2s3hhémo1p2té3quent__a2g3nat_dé2s1i2télé1o2bo2g3nosiradio1a2télé1o2ppu2g3nacru3lent__sta2g3nre3lent__ré2a3le_di1a2mi",9:"_ré2a3lit_dé3s2o3lthermo1s2_dé3s2ist_dé3s2i3rmit3tent_éni3tent__do3lent__ré2a3lisopu3lent__pa3tent__re2s3cap_la3tent__co2o3lie_re2s3cou_re2s3cri_ma2g3num_re2s3pir_dé3s2i3dco2g3nititran2s1a2tran2s1o2_dé3s2exu_re3s4tab_re3s4tag_dé3s2ert_re3s4tat_re3s4tén_re3s4tér_re3s4tim_re3s4tip_re3s4toc_re3s4toptran2s1u2_no2n1obs_ma2l1a2v_ma2l1int_prou3d2hpro2s3tativa3lent__ta3lent__rétro1a2_pro1s2cé_ma2l1o2dcci3dent__pa3rent__su2r1int_su2r1inf_su2r1i2mtor3rent_cur3rent__mé2s1u2stri3dent__dé3s2orm_su3r2ell_ar3dent__su3r2eaupru3dent__pré2a3lacla2ment__su3r2a3t_pos2t1o2_pos2t1inqua2ment_ter3gent_ser3gent_rai3ment_abî2ment_éci2ment_’ar3gent__ar3gent_rin3gent_tan3gent_éli2ment_ani2ment_’apo2s3ta_apo2s3tavélo1s2kivol2t1amp_dé3s2orp_dé2s1u2n_péri2s3ssesqui1a2’ana3s4trfir2ment_écu2ment_ser3pent_pré3sent_’ar3pent__ar3pent_’in1s2tab_in1s2tab’in2o3cul_in2o3culplu2ment_bou2ment_’in2exora_in2exora_su2b3linbru2ment__su3b2é3r_milli1am’in2effab_in2effab’in2augur_di1a2cid_in2augur_pa2n1opt’in2a3nit_in2a3nit1informat_ana3s4trvanil3lis_di1a2tom_su3b2altvanil3linstéréo1s2_pa2n1a2fo1s2tratuépi2s3cop_ci2s1alp1s2tructu1é2lément1é2driquepapil3lomllu2ment_",10:"1s2tandardimmi3nent__émi3nent_imma3nent_réma3nent_épi3s4cope_in2i3miti’in2i3miti_res3sent_moye2n1â2gréti3cent__dé3s2a3crmon2t3réalinno3cent__mono1ï2dé_pa2n1a2méimpu3dent__pa2n1a2ra_amino1a2c’amino1a2c_pa2n1o2phinci3dent__ser3ment_appa3rent_déca3dent__dacryo1a2_dé3s2astr_re4s5trin_dé3s2é3gr_péri2s3ta_sar3ment__dé3s2oufr_re3s4tandchro2ment__com3ment__re2s3quil_re2s3pons_gem2ment__re2s3pect_re2s3ciso_dé3s2i3gn_dé3s2i3ligram2ment__dé3s2invo_re2s3cisitran3s2act’anti2enneindo3lent__sou3vent_indi3gent_dili3gent_flam2ment_impo3tent_inso3lent_esti2ment_’on3guent__on3guent_inti2ment__dé3s2o3défécu3lent_veni2ment_reli2ment_vidi2ment_chlo2r3é2tpu2g3nablechlo2r3a2cryth2ment_o2g3nomonicarê2ment__méta1s2ta_ma2l1aisé_macro1s2célo3quent_tran3s2ats_anti2enne",11:"_contre1s2cperti3nent_conti3nent__ma2l1a2dro_in2é3lucta_psycho1a2n_dé3s2o3pil’in2é3luctaperma3nent__in2é3narratesta3ment__su2b3liminrésur3gent_’in2é3narraimmis4cent__pro2g3nathchien3dent_sporu4lent_dissi3dent_corpu3lent_archi1é2pissubli2ment_indul3gent_confi3dent__syn2g3nathtrucu3lent_détri3ment_nutri3ment_succu3lent_turbu3lent__pa2r1a2che_pa2r1a2chèfichu3ment_entre3gent_conni3vent_mécon3tent_compé3tent__re4s5trict_dé3s2i3nen_re2s3plend1a2nesthésislalo2ment__dé3s2ensib_re4s5trein_phalan3s2tabsti3nent_",12:"polyva3lent_équiva4lent_monova3lent_amalga2ment_omnipo3tent__ma2l1a2dreséquipo3tent__dé3s2a3tellproémi3nent_contin3gent_munifi3cent__ma2g3nicideo1s2trictionsurémi3nent_préémi3nent__bai2se3main",13:"acquies4cent_intelli3gent_tempéra3ment_transpa3rent__ma2g3nificatantifer3ment_",14:"privatdo3cent_diaphrag2ment_privatdo3zent_ventripo3tent__contre3maître",15:"grandilo3quent_",16:"_chè2vre3feuille"}};Hyphenator.languages['ru']={leftmin:2,rightmin:2,shortestPattern:1,longestPattern:7,specialChars:unescape("абвгдеёжзийклмнопрстуфхцчшщъыьэюяАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯਂ%u200D"),patterns:{2:"1г1ж1м1п1ф1ц1ш1щъ1ы1ь11э1ю",3:"а1ба1да1еа1иа1ка1уа1ча1я1баб1вбг21бе2бжб1л1боб1т2бф2бц2бш2бщ1бы1бь1бя1вав1дв1л2вмвф22вц2вш2вщвъ21вы1вяг2а2ггг2и2гп2гф1дадв21де1дид1л1до2дп1ду2дфд1х2дщ2дъ1ды1дяе1а2ебе1ее1и2еоеэ2е1яжг2ж2м2жф2жц2жъ2зг1зе1зиз1лз1н2зт1зу2зцз1ч2зш1зы1зяи1аи1еи1ии1ки1л2ипи1ри1ти1чи1я2й1йд2йя12кг1ке2кмк2о2кп2кск2у2кф2кц2кш1кьк2ю2лб1ли2лм1ло2лпл1т2лцл1чл2ю1ля2мж2мм2мп2мф2мц2мщ2мэм2ю1на2нг1не1нин1л1но1нун1х2нц2нш2нщ1нын2э1няо1вог2о1ео3и2ойо1ко1т2оюо1япе1пх22пц2пш2пщ2рг2рз2рм2рп2рф2рх2рц2рш2рщ2рър2ю1сасг2с1зс2мс1н1сосп21ср1сусч2сш21сы1ся2тг2тжтм22тф4тц2тщ2тъ2ть2тэт2юу1ау1еу1иу1оу1у2уэу1я2фгф4и2фм2фф1ха2хг1хе1хи1хохп22хшца12цгци12цм3цу2цц3цыцю11чач1в1чеч2ж1чи1чм3чо1чуч2хш2в2шм2шфш1х2шц2шь2щмъю2ъя2ые2ыи2ыу2ьб2ь2еь2оь2юь2яэ1в2эгэ2мэ2нэ2пэс1э2фэх2э2цэя2ю1аю1бю1вю1ею1ию1к2юмю1хю1чю1яя1ея1ия1кя1ля1уа1ё1бё1дёе1ё2ёб1зёи1ё1кё1нёо1ёпё1у1ё1чёь2ёю1ё",4:"_аи2_ау2_ии2_ио2_ис3_ль2_оз4_ск2_ст2_уб2_уд2_уе2_ук2_уо3_уп2_ус2_ую2_юс14а3ааа2паа2раа2ца3буав1ва1веа1виа1воа2вта1вуа2вх2агаа2гд2агоа3гу2адва2длад2цае2ла2епае2сазв2азг2аз1ра2ихак1в1аккак2лак1са1лаа1леа3лиа1луа1лыа1лю2амаамб42амоа2мчан1ра1нь2а1оао2дао2као2рао2с2апоа1раа1реа1риа1роа1руар1ха1рыа1рюа1ряа1таа1тиа1тоа1туат2ха1тыа1тюа1тяа2убау2дау2хау2чауэ1ах2аах3с2ачаа2члач1та2шла2эрая2бая2вая2зба1зба2о2б1ббвы22б1д3бев3бее3бец2бещб1з21б2и3биаби2б2биж3бик3биоби1х2б3к2блы2бля2б3н3бот2бр_2брсб1ру2брьб1ряб3скбс4л1б2убу1с2б1х2б1чбы2с2бь_2бьс2бьтбэ1р3б2ю3вагва1звах13вац3вая2в1бв1вив1вр2вг21вев3вег1вее1вез1вес1вец1вею1веявзг2взд2взъ21визви1овиу3ви2ф2в1квк2лв2ла2вли2влю2вля1вме2в1нвно1в3нывов21вод1воквоп21вох1вою2вп22вр_1врюв1ряв1т21вуаву3г2вуиву3п1вхо2в1чвып2вых22вь_1вье2вьс2вьт1вью1вья1в2юга1зга2у2г3бгба2г1ви3ге_2г3ж2г1з2г1кг1ле2г3мг3няго1з3гойг2ол3гою2гр_2грюг4саг4сб2г3тгу1вгу1с2г1ч2г3ш2г3эда1зда2о2д1бд1ве1двид3вкд1вл2двя2дг23дез2дж_2джсдип2диу3ди1х2д1к2д1нд3надо1здоп2до1с2др_д1ред1рид1рыд1рядск22д1тду3гду2оду1х2дцу2дцы2д1ч2дыг2дыд2дыт2дыщ2дь_1дье2дьк2дьт1дью1дья1д2юеа2деа2зе1вее1вие1вое2вте1вуе1вхе1вьег2дед2жее2хе2жг2ежее3зее3зяеи2деи2меи2ое1каек2зе1кие1куе1лае1лее1луе1лые1люе3ляе2мче3наенс2е1нэе1оде2оие2омеоп2еос22епее2пле4пн2епое4пте1рае2рве1рее1рие1рое1руе1рые1рюе1ряе1сге1ск2есле3со2еспе1сте1тае1тие1тоет1ре1туе1тые1тюе1тяе1у22еубеуз2еф2л2ецве1чле2шлею2гея2зжа1з2ж1в2жгаж2гиж2гу2ж1дж2диждо3жду14ждь3жев2жжаж2жежи1о2ж1к2ж1лж3ма2ж1нжно1жоу32жп2жпо1ж2ру2ж1с2ж1ч2жь_2жьс2жьт1за1заа2заб2заг4зап2зас2зат2зау2зах2зая2з1б2з1вез1виз1воз1вр1звуз1вьз3га2зж2з3з23зи_3зис3зич2з1кзко12зм2з3мн2зне2зно2зну1зов1зое1зои1зон1зоозос21зохзош21зоэ1зоюз1раз1роз1руз2рюз1ря2з1сз1ти3зу_зу1в3зуе2зупзы2з2зыщ1зье1зьи1зью3зья1з2юи2аби2авиаг2иао2и2апи2аф2и1би1вии1ву2ивыиг2ди3ге2игли2гни1двид1ри1дьие2гие2дие2ри1зоиз1рийс2и3кои3куилп2и2ль2имаи3мии2мчинд21инжинс21инф1инъи1оби2оги1оди1ози1они1ори1ошип3ни2рви2рж1ирри2сби2сдис1ки4сси1сти2тми1у2иу3пиф1ли2фри1хуи2штию4лию2нию2тия2дйно1йп2лй2сбй2снй2сшй2тмй2хм1кавк2ад1кае1кай1кам1кан1кат1ках1каю2к1бк1вик1ву2к1дкда22кеа2к1з1кивки1о1киткк3ск3лы2кль1клю2к1н1ков1код1коз1кос1кош2кр_кс3гкс3мк3сок3су2к1ткт2р3куе1куй3кум1кур1кут2к1ч1ла_1лаел2аклау11лаял1брл1вел1вил1вол1вул2гллго11ле_1лен1лехл1зо2л1клк2в2л1лл2льллю12л1нлс3б1лу_лу1влу3г1луе1лунлу1с1лую1лы_1лые1лыж1лый1лым4ль_2льд3лье3льи2льк2льм2льн3льо2льт2льц2льч3лью3лья1лю_1люж3ля_2ляд3лям3лях3магма2умаф23мач4м1бм3бимб2л2мг22м1д3мкн2м1л2м1н3мод3мон3моп3мофмп2л2мрим1ры2м1смс2кмс2н2м1тмфи32м1х2мш2мым1мы2с2мь_2мьсмью1мэ1рмя1р2нач2нащ3ная2н1внг4лнг2р2н1днд2жн2длн2дцнег23недне3енеи23неунея23нийниу3ни1х3ниц3нищ2н1кнк2внк2лнк1с2н1нноб2ноэ2н3п2н1ро2н1сн2сгн2слн2сн2н1тн2тмну1х3ную2нф2нхо12н1чн2члнш2т3ны_2нь_1нье1ньи2ньк1ньо2ньс2ньт2ньч1нью1нья1н2юо3авоап12оба1обмоб1р1объ2обьов2то2вхо1дьое1бое2дое1оое2цо1зооие3ои2зои2мои2оойс2ок2в1окто3лао1лео3лоо1луо1лыо1люо3ляо3ма2омеом2чо2мьо3наонд2о1нронс2о1о2о2оло2офо1рао1рео1рио1ро2орцо1рыо1рюо1ряос2бо1ст2осхотв21отг1отдо3тио2тм1отхо1у2оуп2о3фе2охио1хро1хуо2цооч2ло1чтош2тоя2воя2доя2зпа3ф2п1дпе2з4п3к2пл_2п1нп3нап3ны3пой2пп22пр_при12прсп2руп3со2п1тп3ту3пуб2пф24п3ч2пь_2пьтп2ю11ра_раа21раю1рая2р1бр1вир1вор1вьр2гвр2гнрг2р2р1дрд2жр2длр2дц1ре_р1зори3ариб2р2ин1риу1риц1риш2р1кр2кврк1ср2льрлю1р3ляр2мч2р1н1ро_1роу2р1р4р1срс2кр2снрс2п2р1тр2тм1ру_1рулрф2лр2хврх1лрх1рр2цв2р1чр2члр2чмрш2т1ры_1рыб2рыз1рым2рь_1рье1рьи2рьк2рьс2рьт1рью1рьярэ1л1рю_1рюс1ряю1сб2с2бы2сбю1с2вс2гис2гнс2го1сд2с2дас2дес3дис2до1с2е1с2ж1с2и3сизси1х4ск_ск2л2скнск2рск1с2сль2снос2овсо1дс3пн2спь2ср_2с1сс2сбсс2лс2снсс2псст2сс2ч2ст_2стбс2те1сти2стк2стм2стн2стп2стс2стф2стц1стыс4тьсу2бсу1всу2зсу1хс1х22сца2сцо1счас1чл2счос3шн1съ2сы2зсы2с2сь_1сье2ськ2сьт1сью1сьясэ1рс2эс1с2юсю1с2сяз1тагт2ан1тас1тащ2тв_2тви2тву2твы2твя2т1д1т2ете1д2т1зтии2тик23ткн2т1лт2льт3мщ2т1нто1д1тощ2тп22трб2трв2трг2трд2трм2трн2трп2трр2трф2трщ2трът1рыт2сб2т1тт2тм1тущ2т1х2т1ч2тш24ть_3тье3тьить2м4тьттью1тю1т1тяг1тяж1тяпу2асуб1ру1виув2лу1воу1вуу2гву2глу2гнуд2ву3дууе2дуе2луе1суе2ху2жжу1зоу1каук1ву1киу1коу1лау1леу1луу1люу2мчу3нау1ньуо2буо2вуо2куо2пуо2суо2фу2плу1рау1реу1риу1роу3руу1рыу1рюу1ряу1сгус2лу1сму2снус2пус3су1сф2усцу2счу2сьу1тау1тиу1тоу1туу1ты1утюу1тяууг2уу2су3фиуф1лу2фру2хвух1лух1р1учру1чьу3шеу3шиу2шлу2шпуя2зфа2х3фашфаэ12ф1б2ф1в2ф1дфи2жфи1о3фит2ф1кф2лаф2лиф2ло2ф1н3фон3фотф1риф1роф1ру2ф3с2ф1тф2тм2фуф2ф1ч2фш22фь_ф2ю1ха2дхао32х1б1х2вх3вых3д2хео3х1з2хие2х1к2х1лу2х1нхоп2хоф2хоя2х1рых1ря2х1т1ху_2хуе2хуй1хун1хус1хуш2хуюх1х2хью13ца_3цам3цах2ц1бц2ве2цвы2ц1дце1зце1кце1т2ц1зцип2циу32ц1л2ц1н2цп22ц1р2ц1с2ц1тцы2п2ч1б2ч1дче1очжо23чик3чиц2ч1кч2ле2чли2чма2чмеч2мо2ч1н2ч1сч2те2чтм3чук2ч1ч2чь_1чье1чьи2чьс2чьт1чью1чья2ш1бше1кш1лыш2лю2ш1н4шниш2п2ш3пр2ш1р2ш1сш1ти2штс2ш1ч4шь_3шье3шьи3шью3шьяш2ю1щеи2ще1сще1хщеш22щ1н2щ1р2щь_ъе2гъе2дъе2лъе2съя3ны2блы3гаы3гиыг2лы2гны2длыз2ды2злы2зныиг1ык2лык1сы2льы2мчы3поыр2вы3саы3сеы2сны3соыс2пы2схыс2чы2сшыт2ры3шьь2вяь2дцье1кь2знь2и1ь2кльмо1ьс2кь2снь2тмьхо2ь2щаь2щеь2щуья1вэв1рэд1рэк1лэкс1э3маэ3ньэо2зэ1реэ1риэ1руэ1рыэск2эс3мэ2соэ2теэхо3ю2бвю2блю1дьюз2гю1зою1лаю1лею2лию1люю2мчю2нью1о1ю1раю1рею1рию1рою1рую1рыю1тию1тою1тую1тыю2щья2бря1воя1вуя2гняд1вяд1ря1зояк1ся2лья2мья3наянс2я1рая1рия1роя1рьяс1кяс1ляс2тя1таят3вя3тия1тоя1туя1тыя1тяях1ля1хуяце1я2шл2яю_2я1я6зь_й2кь6тр_а1вёа1лёа1рё1веё1вёз1вёс1вмё1вьёг1лёд1вёд1рё1дьёе1вё2ежёе3зёе1лё2епёе1рёё1веё1воё1ву2ёжеё3зеё1каё1киё1куё1лаё1леё1луё1лыё2мчё3наёнс22ёпеё2плё4пн2ёпоё4птё1раё1реё1риё1роё1руё1рыё1ск2ёслё3соё1стё1таё1тиё1тоёт1рё1туё1тыё1тюё1тя3жёвж2жёз1вё2знё3зуё1каё3куё1лён1лёх1луё3льёне3ё1ньёо1лё2омёо1рёо3фё1рьёс2дё1с2ёс2тё1сьё1т2ё3тьё_уё2у1лёу1рёу3шёц2вёч2тё1чьё3шьёы3сёь2щё_не88не_8бъ_8въ_8гъ_8дъ_8жъ_8зъ_8къ_8лъ_8мъ_8нъ_8пъ_8ръ_8съ_8тъ_8фъ_8хъ_8цъ_8чъ_8шъ_8щъ_",5:"_аб1р_ади2_ак1р_би2о_го2ф_дек2_ди1о_до3п_епи3_за3п_иг1р_изг2_из3н_ик1р_ле2о_на1в_на3т_не3т_ово1_ог3н_ос2п_от1в_ри2ч_ро2х_су2ж_тиа3_ти2г_ти2о_ум2ч_ур2в_ут2ра3блааб2люаб1риав3зоави2ааво1са2вотав1раав2сеа2глеаг2лиа2двеад2жиад1роаду3ча2дынае2гоае2диае2реаз1влаз1драз1обаи2г1аи3глако3т2акриа3лаг2алекало1залу2ша2льщ2аметамои2а2нафан2спанс1уаост1а3плаап2ра1аргуар2жа2ас1кас3миас3ноа1сьи1атакат3ваат1виат1ву2атезато2шат1риа1тьеа3тьюа3тьяау3доа2улеаут1рау3чьа2ф1лахми2аэ2лиаю1таба2бвба2дрба3зубалю1бас3мба1стба1трбе2глбе2гн3бе2збе3зибез3нбез1рбес3пби2обби2одби2онби2орби2тв1благб2ланб3ленб2луд2б2льб2людб2люеб2люлбо3вшбо2гдбо1з2бо2мчбо3мшбону1бо1рубо2сабо1скбо2твбот2рбоя2рб3рабб2равб2ран1брасб1рахб1рейб1рекб2ремб2рехб2ридб1рол1б2рю2б1с2бук1лбы2г1быс1кбыст1бю1тава2брвадь2ванс2ва1ства1трв2дохвед1рве3ду3везе3везлвез2у1вей_ве2п12вердвет3р1в2з2взо1бви2азви2акви2арвиа1тви3афви2гвви2гл1винт1винчв2левв2лекв2летв2лечв2лияв2люб4в3нав2несв3ну_во1б2во3вкво1двво1дрво2ерво2жжво3м2во1ру2ворц2ворьвос1кво1смво1снвот2рво1хл2вра_в2равв1рас2врац2вре_1вридв1риив1рикв1рилв1рисв1рит2в1ро2в1ры2в1с23все33в2сп3в2сювто3ш1ву1з2ву1кву1с2вух3вву1члвы3г2вы3знвы3т21вьин1в2э1г3дан2г3диге2б1гено1ге2обге2одге1орги2блги3брги2грги1слгист22гла_г2лавг1лай2глаяг2лет2гли_г2лин2гло_2глов2глог2глое2глой2глою2глую2г1лыг2ляж2глякг2навг2нанг3не_г2невг3ненг3непг3несг2нирг2ноег2ноиг2носго1б2го2влго2злгоз2нгоиг2гоми2го2сдго1сн2готдгоу3тго1члг1раег1райг1рарг1регг1рекг1рецг1рикг1рилг1ринг1рисг1ричг1ровг2розг1рокг1ронг1ропг1ротг1рофгру2пг1рывг1ряег1рялг1рят2г3с2да2б1да2грдат1р2двиз2дводд1воз2д1д23деврде2зиде2зудеио2де1кл3демеде2оддео3пде3плдес2кде2срде1хлд2жамд2ж3м2д1з2ди2аддиа2зди2арди2асди2обди2ордио1сди2пиди3птди3фрд2лев2д3м2днеа2днос24д3ныдо2блдов2лдо1д2до3дндоз2ндои2р2доктдо3плдос2п2дотд2дотл2дотъдо3ть3дохлдо2щуд1рабд1рард1рахд1рачд2раюд2реб2дрезд2релд2ремд2рий2дринд2рипд2рихд1родд1роед1ройд1ролд1ронд1росд1ротд1роюд1руб1друг1дружд1румд1рую2дрывд2рябд2рях2д1с2дс3кндуб3р2д1удду2дадуп1лдус1кд1услду1стду2чидуэ1т2д3це2д3ш2дъе2м2дымедь3яреади3еа3доеат1реба2се1браеб1рие1броеб1ры2евер2еволев1риев2хое2глее2глие2глоег2наег2но2ег2ред1вое1джее2дохе1друе2дуге2дусе2дынее2гиее1с2ее2стеж3дие2ж1резау3езд1реззу3е3зитез1обе1зомез1опез1отез1ошез2ряез1упез1усеи2г1еис1лека2б2е1ко2е1крек2роек1скеми3кемо1с2емуж2емыс2е1нрен3ш2е1о2бео3даео2деео2дое1о2жео3кле1ол_е1олаео3лие1олке1олые1олье1он_е2онае2ониео3ное1онсе1опеео2прео4пуео1ске1осме1оснео3схе1отле1о2че1о2щепат2е3плаеп1луе3плые4п3сер1вее3ре_ере3перо2б2еролер3ске3с2аес2бае2скее1слуе1слые1с4ме2спуе2стле3стует1веет1вие1тво2етечето1сет2ряе1тьее3тьюе3тьяеуб3реф1рееха2тех1обех1реех1ружа2блжа2бржат1в2ж1б23ж2глж2дакж2дачж2деп4ж2дл3ж2дяже3д2же1клже1о2же3п2же1с2же3ск2жжев2ж1з22жирр2ж3мо2ж1обжоу1сз1авуз1адрзае2дзае2хза3з2з1акт3з2анза3назанс2зар2взар2жзаст2за3ткзач2тза3ш2з2вавз2ван2зваяз2везз3в2кз1вла2зволз2глизг2наз2гнуз1д2вз2дешздож3зе2б1зе2евзе2од3зий_з1интзи2оззи1опзиу3мз2лащз2лобз2лопз2лорз2лющ2зна_з2навз2наез2найз2накз2нанз2натз2наю2зная2з3ни2з3ныз2обезо2бизо2глзо1дрзо1з21зой_1зок_з1окс1зол2зо1лгзо1лжзо3м21зом_2зомн2зонрзо2осзо2паз2оплз2опрз1оргз1оснзо1спзо2твз2отез1откз2отозо2шиз2ракзра2сз2рачз2ренз1ресз2риш2зуве2зу2г2зу1к3зумезу2прз1урбзъе2м2зыме2зымчи2агри2адеи2адииа2муи3анаианд2и3атуи2а1хиа2цеи2б1р2иваж2и1веи2в3з2и1вои1в2ри3в2сив2хои2глеи2глиигни3иг1роиг1руиг1рыи2дейи1д2жие3деие2зуи3ениие1о2иепи1и3ж2диз1в21из1дизо2ои3к2аик2ваи2квии2кляик1роик1скильт2имои2им3пли2м1рим2чаино1с1инсп1инсуио2боио2врио2деио3зои1окси1олеи1опти3ораио1руио2саи1отаи1отки1отсиоуг2ио2хоипат2ип2ляириу3ис3кеис3киис1лыис3меис3муис3нои2стли1сьиита2вит3ваит1виит1вуи2т1ри3тьюи3тьяиф2люиха3ди3х2оихо3ких1реих1рииш2лии2шлыию3тай2д3вй2о1сйо2трй3скайс2кейс4мой2с3фйх2с3ка2блказ3нка1зо1кал_1кало1калс3к2аска1стк2вакк2васк2вашк2возке2глкед1ркиос1ки2пл2к1к22клемк3ленк1леок2ликк2линк3лияк2лозк3ломкло3т1клук2кля_2клям2кляхк2ноп3ковако1др3конскоп2рко1руко1сккос3мко1сп1котнко2фрк1релкре1ок1реч1крибк1ридк2ризк2ритк1рихк1роак1робк2роек1рокк1роок1рорк1роск1рофк1рохк1роэкру1ск1рядк2с3вк2с3дк2сибк1скикс1клк1скокс3тек1стокс1трк1стукта2ккто1ску1ве1кулякуп1лку3рокус1кку1стку3ть1куче1куют3кующ2к1х22лабела2бл2лагола2грла1золак2р1лам_ла2усла2фр1ла1х2л3д2ле1влле1джле3доле1зрлек1л2лемнле2сбле2скле1твле1хрлиа2м3ливо3ливылиг2ллие3рли2кв2лимплио1сли2пллис3мли2твлиу3мли1хлли1хрл2к1ллни2ело2блло2влло1др2лоенло1звло2клло2рвло1рулос1к2лотдлот2рло2шл2л1с2лу1брлу1знлу1крлуо2длу3ть2л3ф22л1х2л2х3в1лых_2льск1льща1льще1льщу1люсьлю1таля1ви3ляво3лявыля1реля1рума2взма2гнма2дрма2дьма1зомас3лма2чтм3бля2м3в23м2глмеан2ме2егме2елме1зомеч1т2м1з2ми1зв2миздми1знми2крми2озми2ор2м1к2м2леем2лел4м3намне1д4мноем2нож4мной4мномм2нор4мноюм2нут4м3нымо1б2мо3влмо1дрмо2жжмо1звмо1зрмо3м2мо1румо1сммо1сн3мотим1раб2м1рому1стмут1рму3тьм2чавм2чалм2читм2чиш3м2щемы2мрмя1стнаб2рнаг2нна3ждна1з2на2илна2ин4наккнап2лна1с2на1твна1х2наэ1р2н1б2н2г1внги2онго1сн2дакн2д1внде3знде2сн3д2знд2рен2дрянд2спне1б22невннед2оне3дунее2дне1звне1знне1зоне1зрне1клне2олне3п2нес2кнест2не2фрне1хрне3шк2н1з2нзо1сни3б2ни2енни2клнила2ни1слнис3пнкоб2но1брно2влно1двно1дрно2ерно1звно2здно1зрно3кн3номеном3шно2рвно1руно2сч2нотдно3ф22н1ре2н1рин2с3внс2кен3слан2с3мнст2рнсу2рн2с3фн2съ3н2т1внт2рант2рент2рунт2рынут1рня1ви2о1а22обиоо1блюобо2с2обото3влаов3ноов2се2о3гео3гря2одано3де_о2дыно2дьбое2жиое1с2ое2сто2етоо3жди2озавоз2вио1здрозе1ооз3но2озоно2зопоз1уго2зымо3зысои2г1оиг2нои3мо2ок2ло3клюоко1бок1ск2окти2окумом2блом1риом2шео3мьяоно1боо3псоос3мо2отио3пако3паро2плиоп2лоо2пляоп2риоп2тоо1р2вор2тро1руео1руко1русо3садо2скеос1кио1с2лос3миос2пяос2свос2тао2сучо1с2чот3ваот1веот1виот1вло3терот1риот3смоту2ао3тьюо3тьяоус2коу3таоу3то2офаш2офит2офон2офото2фриох1лыо2хляох2ме2охороча1соч1лео3члиош3ваош2лаоэ1тиоя2рипави3пав3лпа2вьпа2дрпа2енпа1зопас1лпа2унпа1хупа2шт2п1в2пе2двпе3запе3зопе2льпе4плпе2снпе2сцпе2счпе2трпе2шт3пинк3пися4пла_пла1с2пленп1лею2плив2пло_2плов2плог2плый2плымп1лынп1лых2плю_п1лютп2лясп2ляшп3но1по1б2по3влпое2лпое2хпо1знпои2щ3полкп1оргпор2жпо1рупо1с43послпо3сспот2впот2рпо1х2поэ3мппо1д3превпре1зпрей2пре1л3претпри3вприг2при3кпри3лприп2п2риц3проипро3п2п1с2п3синп2т3впуг3нпу1стпу3тьпэ1рара2бл1рабора2гвра2глрад2жра2дцрак2в1ралг1рамк1рамн1раслрас3прас1трат1в2рахи1ращи2раятрб2лар2блерб2лорб2люрбо3ср3вакр3варр3вежр2вео1рветр3винр2витр2г1лрда1ср2д1врди2ардос2ре1вррег2нрее2врее2дрее2л1резкре1зррез2у1рейш1рекш3ремо1ренк1реньре1онре1опре1ох1репьре3р2ре1слре1счре1твре1чтре3шлр3жа_р3жамр3жанр3ж2др1з2ври3бр2риги2риджрие2лрие3рриз2врик2р1ринсрио2зрио2сри1отри3р2ри1с2ри3сб2риспри2флри3фрри1хлр2к1л2р1л2рнас4рне3оро2влро1двро1длро1др1родьрое2лрое2мрое2хро1зр1рокрро3псро1руро1ск1рослро1смрос2ф1росш1росю1роткроуг2ро2фрро1хлрош2лро3шн1роязрп2лор2плюрств2р2т1врт3варт2влрт1рарт1рерт1риртус1р3тьюрт1яч1рубаруг3н2руксрус1крус3лру3ть1руха1рухо1ручнр3ш2мры2двры2клры2х1ря1виса2блса2дьса2квса2клс1аппса1трса2унса1х22с3бусег2нсе1з2се1квсек1лсекс4семи1се2сксе2стси1омси1опси2пл2скам2скахск2вас2квис2кляс1кон2скошс1кра2скуе1слав1сладс1ламс3левс3леес1лейслео2с1летс3лею2слицс2ложс1люс2с3ля1смесс4меяс3мурс2нас2сная2сную2с3нысов2рсо1з2со3м2со1русо1сксо2сьсот2рсо1члсош2лс2павс2пеес2пелс2пенс2пехс2пешс2пеюс2пим2сполс2посс2рабсра2сс1ратсс3во4с5сис3с2к1ста_4ств_2ствлст2вя1стей1стелсте3хс3тешс2тиес2тиис2тичс2тиюст2ла2стли2стля1сто_1стов1стог1стод1стое1сток1стом1стон1стос1стотс2тоц1стою2стр_с1тут1стуюс2тыв2сть_2стьс3стью1стья1стям1стяхсуб1осу3глсу2евсу1крсума1супе2сус3лсус3псу1стсут1рсу2ф31с2фе1с2хе2с3цис2часс3чив2счикс2читсъе3дсъе3лсы2г1ся3тьта2блтаб2рта2гнта1з2та2плта1стта1тр2т1б22т2ват1вейт1велт1ветт1воет1вос2твою2т1врте2гнте1зо3текатек1л3текште1ох3терзтер3к3терятест2те2хотиа2мти2блти3д2тиис1т1импт1инд2тинж2тинфти1хр2т1к2тло2бтми2с2тобъто2влто1з2ток2р2томс2тонг1торг1торж1торсто1ру1торш2тотдто3тктпа1ттрдо2т1реат1регт1редт1реет1рецт1рею1трибт1ривт1рилт1римтри1от1риттри3фт1рищ2тройт1рортро3т2трою1трубт2руд2трукт2румт2рутт1ря_т1рявт1ряет1ряжт1ряйт3рякт1рятт1рящт1ряя4т1с2т2с3дтсеп2т2с3мт2с3пту2грту1слту1стту2фл1туша1тушо1тушьты2г12тя2чу2алеу3белубо1дубос21убрауб3рюу1ве_уг2науг2неуг1реуг1ряуда1суд1роуес2лу1з2вузо3пуко1бу1ку1у1лыху2озауост1уо2т1уп1люу3проурке3у2родурт2ру2садус1каус1киуск3лу1скрус3лиу1стеу1стяу3сьяу3терут2ляут1риу1тьеу3тьюуф2ляух1адуха2тух3ляу2чебуш1лафа2б1фа2гнфа1зофан2дфа1трфев1рфед1рфе1о3фи2глфи2зо2фобъфо2рвфо1руфос1кф1рабфра1зфра1сф1ратф2ренфре2сф2рижф2ризф2ронф2торфу3тлха2бл2х1акхан2дх1арш2х3ве2х3вихиат1хи1с2х1лавх1ласх1латх1лац1хлебх2лесх1летх3ло_х2лоп1х2му3х2ныхо2пехо1рух1осмхох1лх1раз1хранх1рейх2рисх1ров1хром2х1с2х1у2гх1у2рху3ра2х1ч2ца2плце1отцеп1лцес2лци2к1цик3лци2олци2скциф1р2ц1к2ц1о2б2ц1от2ц3ш2цып3лча2дрча2дцча2ер3чато3чатыче1влче2глчер2сче1сл1ч2лач3легч3лежч2ли_1ч2ло2ч1таша2блша2гнша2дрша1стш3венше2глше1о2ше3плше1с2ши2блши2плшиф1р2ш1к22шленш2ли_2шлив2шлилш2линш2лисш2лифш2ло_2шловш2лог2шляе2шлякш2ляп2шлят2шляч2шляю3ш2мыш2нуршу2евшуст12щ3в2ще2глщед1рщеис1ще3шкъе3доъ2е2ръе2хиыд2реы2дряы3ж2дыз2ваыз2наы2к1выко1зыре2хыс1киыс1куыт1виы3тьюы3тьяы2ш1лье1зоьми3дьми3кьне2оь2п1ль2стиь2стяьти3мь2тотьт2реьт2руьт2рыьхоз1ь3ягсэк2стэле1оэпи3кэс3теэт1раюзи2кю2к1вюре4мю2с1кю1стаю1стею1стою1стяюха1сяб1раяб3реяб1рияб3рюя1в2хя2г1ляз2гня2к1вя2к1ляст3вя1стояст1ряти1зя3тьюя3тьяа2ньшгст4ре2мьдзаи2лзао2ззаю2лз2рятзу2мьпое2ж2стьт6хуя_ы2рьмыя2вяьбат2а2двё2алёк2амёта1тьёб3лёнб2люёб1рёкб2рёмб2рёх3везёвёд1р2вёрдв2лёкв2лётв2нёс3всё3г2лётг2нёвг3нёнг2ноёд2рёбд2рёмдъё2м2евёре2глёер1вёет1вёе1тьёё1браёб1рыё1друё1зом2ё1ко2ё1крёк2ро2ёмужёпат2ё3плаёп1луё3плыё3ре_ёр3скё3с2аё2скеё3сту2ётечёто1сёха2тёх1ружё1с2з2вёзз2наёз2отёзъё2м2зымё2и1вёих1рёк3лёнк2роёлё3долёк1ллё2ск2лоён1льщё3м2щёнд2рёнё1б23номёоё2жио2скёот1вёо3тёрпё2тр2плёнп1лёюпоё2ж3прётр2блё1рвёт1рёзкрёз2у1рёкш3рёмо1рёнкроё2мсёкс4сё2ст2скуёс1лёт1стёлстё3хс3тёшт1вёлт1воётё2гнтё1зо3тёкатёк1л3тёкштёр3ктё2хоуг2нёуг1рёу1стёу3тёру1тьёу2чёб2х3вё1хлёбх2лёсчёр2с2шлёнъ2ё2рыд2рёырё2хьё1зояб3рё",6:"_аг1ро_аль3я_ас1то_аст1р_де1кв_ди2ак_до3т2_зав2р_ио4на_лес1к_люст1_ми1ом_мо2к1_на3ш2_не3вн_не1др_не1з2_не1сл_нос1к_нук1л_ос2ка_ос3пи_от1ро_от1ру_от1уж_по3в2_по3ж2_поз2н_прос2_ре2бр_ри2ск_септ2_те2о3_тиг1р_уз2наабе3ста3в2чеага1с2а2гитиа2глосаг2лотади2ода2д1руаза4ш3аз3веза2зовьа2зольа1зориаз2о1сак3лемако1б22аконсалуш1та2минтам2нетамо1з2ана2дцан2драан2сура2н1узап2ломапо4всап1релара2стар2бокар2валаре1дваре1олар2торар2т1р1ассигаст1вуас3темас2тинас2тияас1тооас1туха1стьеас2шедас2шесат1обеа2томнат1рахба2г1рбе2д1рбез1а2без5д4без1о2бе2с1кбе2с1тбес3тебес3ти1б2лазб3лази1б2лее1б2лея1б2луж2б3лю_бо1брабо1драбо1л2жбо1льсбо3м2лбо3скобо3стибра1зо1б2рал2б1рамб2рать1б2рач2б3рая1б2редб2ритоб2ритыб1ром_3брукс2б3рю_бу2г1рва2д1рва3ж2два2стрве2с1квзъе3д3в2кус2в3лаб3в2нук3в2нучвои2с1вос3пево2стрво3х2т2в1рам2в1рах2в1рен1в2ризвро3т2в3ская4в3ски4в3скувто1б2ву2х1а3в2шиввы3ш2лга1ст2г1лами2глась3г2лифг3лоблгнит2рго3ж2дго2с1аго1склго1спагу2с1кда2гендаст1р2д1вид2двинт2двинч2д1вис2д1вит1дворьде1б2лде1б2рдез1о2дерас2де2с3вди2алиди2алодио3деди1отиди3фто3дневн4д3но1дно3д23д2няшдо3в2мдо3ж2д2долимдо2м1р2допледо2предо2рубдот2ридо2ш3вдо3ш2кдо2шлы1дравш2дразвд1ране2д3реж1дрема1дремлдрем3н1дремы2д3рендре2скд2ресс1д2рож2д3роз1д2рыг1д2рягду2ста2дут1рды2г1р2ды2с1еб1ренеб1рове2б3рюе3в2меев2нимев2нятевра1с2е1вреев1рееев1рейев1реяега1с2е2гланедноу3ед1опре2дотве2д1още2дру_е2ду2бед1убое2дувеед1уст2е3душе2евидее2в1реест1ре4ждевеза2вре1з2ваез1о2гез1о2рез1у2дез1у2кезу2соезу2сыез1у2хез1учаеис1трек1стееле3скеле1сцеми3д2ен2д1реоб2рое2о3глео2гроеоде3зе2о3роеост1реот2руепа1трепис2кеп1лешеп1лющер1актере3доере1дрере1к2ере1х4ерио3зер1обл2ерови2ерокреро3ф2ес1кале2сковес1ласес2линес2ловес2ломес2пекес3полес2танес2четеук2лоефи3б2ех1атоех3валех3лопех1опоех1у2ч3ж2дел4ждемеже1к2вза2вруза3ж2дза3мнеза3р2д2з3ва_з3валь1з2вон2з1вуюзи2онози3т2рзко3п2зо3в2мзо2о3пзот2резот2ризро2с3зу2б3р2з1уз3з1у2моз1у2тезу2час2зы2г12зы2с1иа2зовиа2налиа1с2киа1стаиа1стоиат1роиг1рени2г1ряиди1омиди1оти2еводиз2гнеиз2налика1с2ик2с1тило1ски2менои2мену2имень1инстии3оновио3склио1с2пио2т1випа1трипо3к2ира2сти2р1ауири2скиро1з2ис3ка_ис3камис3кахис3ковис3ку_и2сламисо2ски2с3при2ст1вис1тязи2т1веит2ресит3роми2т1учи2х1асих2ло2ихлор1й2с3мука2брика3днека2д1рка2п1лка2прекар3трка1т2рка2ш1тке2с1кке2ст12к3ла_2к3ле_к3лем_2к3ли_2к3лив2к3лис2к3ло_2к3лос2к3лю_3к2ниж3к2няж1кольс2коминко2р3вкре2слкри2о3ксанд2к1стамк1стан3к2то_ку2п1рла3ж2д1лами_ла1сталаст1вла1стела1стола1стула1стяла1т2р1л2галлев1рале2г1лле1онтле1о2сле4скале1с2лле1спеле1т2рли2гро2л1испли2х3вло1б2р2ловия3ловодло2г3длого1слок3ла3лопас2л1оргло1с2плу1д4р1льсти1льстяма2к1р2м1аллма1с4тма2тобма2т1рме2с1кми2гремик1рими1опими1с2л3м2нешмоис1тмо2к3вмос1камо1с2пмо2т1рм2с1ор3м2стиму1с2кму1с4лнаби1она1в2рна3м2нна1рвана1т2рн1а2фрна3ш2лнд1рагнд1ражнд2риане1в2дне3вняне1д2лне2дране1дроне3ж2дне1з2лне1к2вне3м2н3не1о2не2одане1р2жне3с2нне1с2пне1с2хне1с2чне1т2вне3т2лне1т2р2нинспнист2рнко3п2н2к1ронно3п2но3з2оно1склно2слино1с2пн2сконн2с1окн3с2пентр1ажн2трарнтрас2н2тривн2трокнтр1удн2т1ря2н3ю2роб2левоб2лемобо3м2о2бра_о1браво1брано3в2лоо2в1риов3скоог3ла_ог3ли_ог3ло_од1вое2оди3а2о3димод2литодо3про2досио1драгод1ражод1разод1рако1дралод3ребо1дробод1рово2дымао2дымуо2е1вло3ежеко3ж2дуо1з2ваоз2вено1з2вяоз2глооз2доро2з1обозо1ру2о3кан2о3колол2ган1олимполу3д2о3множоне3ф2он2труоост1ро2пле_оп2литоп3лю_о3плясопо4всопоз2но3п2теора2с3ор2б3л2о3регоре2скор1испор1уксоса3ж2о2с3баос3кароск1воо2ски_о2сковос1койос1комос1коюос1куюос3лейос3логос3лыхос3мосос2нялос2пасо1с2пуос2с3мо3страос2цен2о3тек2о3техо3ткалот1работ1радот1разотра2сот1режот1рекот1речот1решот1родот1роеот1рокот1росот1рочот1ругот1у2чо2форио2ч1топас1тапа1степас1топас1тупа1тропери1опе2с1кпиаст1пи2ж3мпи2к1рп1лем_п1лемсп2ленкп1ле2оплес1к3п2ликпо3в2спод1вопо1звепо1здопо1з2лпо3мнопо3мну3по3п2по2шлопо2шлыпо2шляпре1огпри3д2приль2про1блпрод2лпро3ж2про1з2п1розопрофо23п2сал3п2сих3п2тихпус1кура2б1р1равняра2журра2зийра2зуб1ракизра2к3лра2нохран2сцра2п1лрас3к21растара2такра1т2р1р2вавр3ватарег2ляре2досре3ж2дре1з2лре1зна1ре1зоре1к2лре3мноре1о2рре1о2фре1о2црес1кире1с2пре3старе3сторе1т2рреуч3три3в2нри2глори3г2нри1д2рри3м2нри3м2чри3стври3т2рриэти2рне1с2рно3слро2блюро1б2р1рогол1рогруро3д2зрод2ле1розарро1з2в3розысрои2с31рокон1ролис1ролиц1ромор1ронаж1ронап1роносрооп1рро2плю2р1оргро1р2жро2скиро2скуро1с2п1рот2врот2рир3ствлр2таккр2т1обрт1оргрт2ранру2дар1ружейру1старуст1рр2х1инр1х2лор2х1опры2с1к2с1арк2с1атлса2ф1рсбезо3сбе3с22с3венсе2к1рсере2бсе3стасе3стесест1рс2канд1с2каф3скиноск3ляв2сконас2копс2скриб2с3ла_2с3лая2с3ли_2с3ло_с3лому2с3лос2с3лую2с3лые2с3лый2с3лым1с2наб1с2неж2с3никсно1з2со1б2рсо1л2гсо2риесо1с2п1с2пец2списяспо1з2сре2б1сре3доссанд2с3с2нес2сорист1верст2вол1с4те_1стен_с3тет_с3тете2стимп2стинд2стинф2стинъс2тишкс3т2лест2лилст2литс2то1б3с2тои2сторг2сторж2сторсстрас24страя2стредст1рей2стривст1риз2стрил2стрищст1роаст1родст1рохст2рубст1рушсуб1а2с2ценасы2п1лсыс1ката1вритак3лет1во1з2т1войтеле1отем2б1те2о3дте4п1лте2рактере2оте2скате2скути1знатила2м2т1инвти1с2лти3ствти3ф2р3т2кав3т2кан3т2кеттмист1то2бесто1б2лто3д2р2т1оммто1с2нто1с2пто1с2цт1рага2т1раж1требо1требут1ребьт1ревет1ревшт1резат1резнтреп1л3тре2стрес1кт1рестт1ретут2решь4тринст1роглт1роидтро3плт1росо4т3роц2т1рядту2жинты2с1к1у2бытуд1рамуе2с1кун2д1руро2длус1комус1ку_у3х4вофанд1рфе2с1кфиа2к1фи2нин2ф1оргфор3трфото3п2ф1у2п2х1изы1х2лор2х1о2кхо2пор2х1оснхри2плхро2мч2цетат2ц1о2дча2евоча2евычаст1вча1стеча1стуча1стячерст1ша2г1ршан2кршар3т2ша1тро3ш2кол2ш1лейш2лите4ш3мы_ще1б2лщи2п1лы2д1роы2к3лоынос3лыра2с3ье2с1кь3п2тоь2трабэри4трэро1с2эс2т1рэтил1аю2б1рею2идалюри2ск3явиксям2б3л_вст2р_реа2нбезу2свиз2гнвыб2редос2ня4ж3дик4ж3дичла2б1рлу3с4нни4сь_о2плюсоти4днпти4днреж4ди2стче_сы2мит2сься_аз3вёзам2нётас3тёмбё2д1р2в1рён2доплёдо2прё2д3рёж1дрёма1дрёмы2д3рёнеб1рён2е1врёерё3доерё1к2ес2чёт2ё1вре2ё3душёз1о2гён2д1рёс2танёх1атоёх3валёх3лопёх1опоза3мнёзот2рёиг1рёнла1стёлё4ска3м2нёшод3рёб2о3тёкот1рёкот1рёшп2лёнкплёс1к_рё2бррё1зна1рё1зорё3старё3стород2лёсе3стёсёст1р1стён_с3тёт_с3тётес3т2лётё4п1лтё2скатё2ску3т2кётт1ревёт2рёшьчёрст1",7:"_во2б3л_во3ж2д_за3м2н_ле2п3р_му2шт1_не1с2ц_обо3ж2_ра2с3т_ре2з3в_ро2з3в_ро2с3л_хо2р3в_че2с1ка2д1облаз2о1бра2н1о2бан1о2храпо3ч2тбили3т2б2лес1к2б3люсь1б2роди1б2росибро2с1кве2ст1вви2а1с2ви1с2ниво2б3лагри4в3нде2з1а2ди2с1тр2д1обладо1б2рад1о2сенд1о2син2д1осно2д1отря1д2разнд1ра2с3дро2г3неан2д1ре1д2лине1о2свие3п2лодере3м2не2р1у2пе2с1ка_е4с1ку_2ж1о2т1за2в1ри1з2о3ре2з1у2беи2л1а2ци2л1у2пино2к3лино3п2лисан2д1ки1с2ни2к3ласько1б2рикохо2р3ла2д1аглан2д1рла2ст1рле1з2о3лу3п2ломан2д1рме2ж1атме2ст1рна2и1с2на1р2вине2р1отни2л1ални2л1ам2н1инстнти1о2кобо1л2го3в2нуш1о2деяло2д1отчо2д1у2чоза2б3воко3п2ло3м2немо3м2нето2п1лейопо2ш3лоро2с3ло2с1ка_о1с2копо2с1ку_о1с2нимо1с2шивошпа2к3па2с1тыпе2д1инпе2к1лапе2ст1рподо3м2радо1б2рас3т2лрво1з2дремо2г3рес2с3мро2д1отро2ф1акр2т1акт2с1альп2сбе3з2сто2г3нс4т1ровсче2с1кте2с1ките2с1ко3т2ре2хтри2г1л2т1у2пруре2т3русла4ж3уто3п2сх1ра1с2ь2т1амп_бо2дра_об2люю_об2рее_об2рей_об2рею_об2рив_об2рил_об2рит_пом2ну_со2плаатро2скбино2скдро2ж3ж2дружейилло3к2ме2динсмис4с3ннар2ватне2о3рен2трассо4ж3девойс4ково2м3че_он2тратосо4м3нпо2додепо2стинпрем2норедо4плроб2лею2сбрук1б2лёс1кё2с1ка_ё4с1ку_1з2о3рёлё1з2о3о3м2нёмо3м2нёто2п1лёйпё2ст1рсчё2с1ктё2с1китё2с1ко3т2рё2х_чё2с1к",8:"_ар2т1о2_ме2ж1у2а2н1а2ме2д1о2бедло2к1а2ун2тр1а2го2д1о2пео2д1о2пыпо2д1о2кре2д1о2пр2т1у2чи_доб2рел_до1б2ри_па2н1ис_ро2с3пиди1с2лове2о3позиере3с2со2з1а2хавни1с2коло1и2с1трони3л2ампере1с2нсо2стритсо3т2калтро2етес_доб2рёлтро2етёс",9:"е2о3платои2л1а2минме2д1о2сммети2л1амо2д1о2болпо2д1у2роприче2с1крни3л2а3мпричё2с1к",10:"но4л1а2мин"}};Hyphenator.run();

function parseUri(e) {
    var t = parseUri.options,
        n = t.parser[t.strictMode ? "strict" : "loose"].exec(e),
        r = {},
        i = 14;
    while (i--) r[t.key[i]] = n[i] || "";
    return r[t.q.name] = {}, r[t.key[12]].replace(t.q.parser, function(e, n,
        i) {
        n && (r[t.q.name][n] = i)
    }), r
}
parseUri.options = {
    strictMode: !1,
    key: ["source", "protocol", "authority", "userInfo", "user", "password",
        "host", "port", "relative", "path", "directory", "file",
        "query", "anchor"
    ],
    q: {
        name: "queryKey",
        parser: /(?:^|&)([^&=]*)=?([^&]*)/g
    },
    parser: {
        strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
        loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
    }
};
typeof JSON != "object" && (JSON = {}),
    function() {
        "use strict";

        function f(e) {
            return e < 10 ? "0" + e : e
        }

        function quote(e) {
            return escapable.lastIndex = 0, escapable.test(e) ? '"' + e.replace(
                escapable, function(e) {
                    var t = meta[e];
                    return typeof t == "string" ? t : "\\u" + ("0000" +
                        e.charCodeAt(0).toString(16)).slice(-4)
                }) + '"' : '"' + e + '"'
        }

        function str(e, t) {
            var n, r, i, s, o = gap,
                u, a = t[e];
            a && typeof a == "object" && typeof a.toJSON == "function" && (
                a = a.toJSON(e)), typeof rep == "function" && (a = rep.call(
                t, e, a));
            switch (typeof a) {
                case "string":
                    return quote(a);
                case "number":
                    return isFinite(a) ? String(a) : "null";
                case "boolean":
                case "null":
                    return String(a);
                case "object":
                    if (!a) return "null";
                    gap += indent, u = [];
                    if (Object.prototype.toString.apply(a) ===
                        "[object Array]") {
                        s = a.length;
                        for (n = 0; n < s; n += 1) u[n] = str(n, a) ||
                            "null";
                        return i = u.length === 0 ? "[]" : gap ? "[\n" +
                            gap + u.join(",\n" + gap) + "\n" + o + "]" :
                            "[" + u.join(",") + "]", gap = o, i
                    }
                    if (rep && typeof rep == "object") {
                        s = rep.length;
                        for (n = 0; n < s; n += 1) typeof rep[n] ==
                            "string" && (r = rep[n], i = str(r, a), i && u.push(
                                quote(r) + (gap ? ": " : ":") + i))
                    } else
                        for (r in a) Object.prototype.hasOwnProperty.call(a,
                            r) && (i = str(r, a), i && u.push(quote(r) +
                            (gap ? ": " : ":") + i));
                    return i = u.length === 0 ? "{}" : gap ? "{\n" + gap +
                        u.join(",\n" + gap) + "\n" + o + "}" : "{" + u.join(
                            ",") + "}", gap = o, i
            }
        }
        typeof Date.prototype.toJSON != "function" && (Date.prototype.toJSON =
            function(e) {
                return isFinite(this.valueOf()) ? this.getUTCFullYear() +
                    "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) +
                    "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) +
                    ":" + f(this.getUTCSeconds()) + "Z" : null
            }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype
            .toJSON = function(e) {
                return this.valueOf()
            });
        var cx =
            /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            escapable =
            /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            gap, indent, meta = {
                "\b": "\\b",
                "	": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            },
            rep;
        typeof JSON.stringify != "function" && (JSON.stringify = function(e, t,
            n) {
            var r;
            gap = "", indent = "";
            if (typeof n == "number")
                for (r = 0; r < n; r += 1) indent += " ";
            else typeof n == "string" && (indent = n);
            rep = t;
            if (!t || typeof t == "function" || typeof t == "object" &&
                typeof t.length == "number") return str("", {
                "": e
            });
            throw new Error("JSON.stringify")
        }), typeof JSON.parse != "function" && (JSON.parse = function(text,
            reviver) {
            function walk(e, t) {
                var n, r, i = e[t];
                if (i && typeof i == "object")
                    for (n in i) Object.prototype.hasOwnProperty.call(
                        i, n) && (r = walk(i, n), r !==
                        undefined ? i[n] = r : delete i[n]);
                return reviver.call(e, t, i)
            }
            var j;
            text = String(text), cx.lastIndex = 0, cx.test(text) && (
                text = text.replace(cx, function(e) {
                    return "\\u" + ("0000" + e.charCodeAt(0).toString(
                        16)).slice(-4)
                }));
            if (/^[\],:{}\s]*$/.test(text.replace(
                /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(
                /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j =
                eval("(" + text + ")"), typeof reviver ==
                "function" ? walk({
                    "": j
                }, "") : j;
            throw new SyntaxError("JSON.parse")
        })
    }(),
    function(e, t) {
        "use strict";
        var n = e.History = e.History || {},
            r = e.jQuery;
        if (typeof n.Adapter != "undefined") throw new Error(
            "History.js Adapter has already been loaded...");
        n.Adapter = {
            bind: function(e, t, n) {
                r(e).bind(t, n)
            },
            trigger: function(e, t, n) {
                r(e).trigger(t, n)
            },
            extractEventData: function(e, n, r) {
                var i = n && n.originalEvent && n.originalEvent[e] || r &&
                    r[e] || t;
                return i
            },
            onDomLoad: function(e) {
                r(e)
            }
        }, typeof n.init != "undefined" && n.init()
    }(window),
    function(e, t) {
        "use strict";
        var n = e.document,
            r = e.setTimeout || r,
            i = e.clearTimeout || i,
            s = e.setInterval || s,
            o = e.History = e.History || {};
        if (typeof o.initHtml4 != "undefined") throw new Error(
            "History.js HTML4 Support has already been loaded...");
        o.initHtml4 = function() {
            if (typeof o.initHtml4.initialized != "undefined") return !1;
            o.initHtml4.initialized = !0, o.enabled = !0, o.savedHashes = [],
                o.isLastHash = function(e) {
                    var t = o.getHashByIndex(),
                        n;
                    return n = e === t, n
                }, o.isHashEqual = function(e, t) {
                    return e = encodeURIComponent(e).replace(/%25/g, "%"),
                        t = encodeURIComponent(t).replace(/%25/g, "%"), e ===
                        t
                }, o.saveHash = function(e) {
                    return o.isLastHash(e) ? !1 : (o.savedHashes.push(e), !
                        0)
                }, o.getHashByIndex = function(e) {
                    var t = null;
                    return typeof e == "undefined" ? t = o.savedHashes[o.savedHashes
                        .length - 1] : e < 0 ? t = o.savedHashes[o.savedHashes
                        .length + e] : t = o.savedHashes[e], t
                }, o.discardedHashes = {}, o.discardedStates = {}, o.discardState =
                function(e, t, n) {
                    var r = o.getHashByState(e),
                        i;
                    return i = {
                        discardedState: e,
                        backState: n,
                        forwardState: t
                    }, o.discardedStates[r] = i, !0
                }, o.discardHash = function(e, t, n) {
                    var r = {
                        discardedHash: e,
                        backState: n,
                        forwardState: t
                    };
                    return o.discardedHashes[e] = r, !0
                }, o.discardedState = function(e) {
                    var t = o.getHashByState(e),
                        n;
                    return n = o.discardedStates[t] || !1, n
                }, o.discardedHash = function(e) {
                    var t = o.discardedHashes[e] || !1;
                    return t
                }, o.recycleState = function(e) {
                    var t = o.getHashByState(e);
                    return o.discardedState(e) && delete o.discardedStates[
                        t], !0
                }, o.emulated.hashChange && (o.hashChangeInit = function() {
                    o.checkerFunction = null;
                    var t = "",
                        r, i, u, a, f = Boolean(o.getHash());
                    return o.isInternetExplorer() ? (r =
                        "historyjs-iframe", i = n.createElement(
                            "iframe"), i.setAttribute("id", r), i.setAttribute(
                            "src", "#"), i.style.display = "none",
                        n.body.appendChild(i), i.contentWindow.document
                        .open(), i.contentWindow.document.close(),
                        u = "", a = !1, o.checkerFunction =
                        function() {
                            if (a) return !1;
                            a = !0;
                            var n = o.getHash(),
                                r = o.getHash(i.contentWindow.document);
                            return n !== t ? (t = n, r !== n && (u =
                                    r = n, i.contentWindow.document
                                    .open(), i.contentWindow.document
                                    .close(), i.contentWindow.document
                                    .location.hash = o.escapeHash(
                                        n)), o.Adapter.trigger(
                                    e, "hashchange")) : r !== u &&
                                (u = r, f && r === "" ? o.back() :
                                    o.setHash(r, !1)), a = !1, !0
                        }) : o.checkerFunction = function() {
                        var n = o.getHash() || "";
                        return n !== t && (t = n, o.Adapter.trigger(
                            e, "hashchange")), !0
                    }, o.intervalList.push(s(o.checkerFunction, o.options
                        .hashChangeInterval)), !0
                }, o.Adapter.onDomLoad(o.hashChangeInit)), o.emulated.pushState &&
                (o.onHashChange = function(t) {
                        var n = t && t.newURL || o.getLocationHref(),
                            r = o.getHashByUrl(n),
                            i = null,
                            s = null,
                            u = null,
                            a;
                        return o.isLastHash(r) ? (o.busy(!1), !1) : (o.doubleCheckComplete(),
                            o.saveHash(r), r && o.isTraditionalAnchor(r) ?
                            (o.Adapter.trigger(e, "anchorchange"), o.busy(!
                                1), !1) : (i = o.extractState(o.getFullUrl(
                                r || o.getLocationHref()), !0), o.isLastSavedState(
                                i) ? (o.busy(!1), !1) : (s = o.getHashByState(
                                    i), a = o.discardedState(i), a ?
                                (o.getHashByIndex(-2) === o.getHashByState(
                                        a.forwardState) ? o.back(!1) :
                                    o.forward(!1), !1) : (o.pushState(
                                    i.data, i.title, encodeURI(
                                        i.url), !1), !0))))
                    }, o.Adapter.bind(e, "hashchange", o.onHashChange), o.pushState =
                    function(t, n, r, i) {
                        r = encodeURI(r).replace(/%25/g, "%");
                        if (o.getHashByUrl(r)) throw new Error(
                            "History.js does not support states with fragment-identifiers (hashes/anchors)."
                        );
                        if (i !== !1 && o.busy()) return o.pushQueue({
                            scope: o,
                            callback: o.pushState,
                            args: arguments,
                            queue: i
                        }), !1;
                        o.busy(!0);
                        var s = o.createStateObject(t, n, r),
                            u = o.getHashByState(s),
                            a = o.getState(!1),
                            f =
                            "/en/region-landing/washington-office.html?debug_mode=1",
                            l = o.getHash(),
                            c = o.expectedStateId == s.id;
                        return console.log("[fetching the state object]", s),
                            console.log("[fetching the state object]", u),
                            console.log("[fetching the state object]", a),
                            console.log("[fetching the state object]", f),
                            console.log("[fetching the state object]", l),
                            o.storeState(s), o.expectedStateId = s.id, o.recycleState(
                                s), o.setTitle(s), u === f ? (o.busy(!1), !
                                1) : (o.saveState(s), c || o.Adapter.trigger(
                                    e, "statechange"), !o.isHashEqual(u, l) &&
                                !o.isHashEqual(u, o.getShortUrl(o.getLocationHref())) &&
                                o.setHash(u, !1), o.busy(!1), !0)
                    }, o.replaceState = function(t, n, r, i) {
                        r = encodeURI(r).replace(/%25/g, "%");
                        if (o.getHashByUrl(r)) throw new Error(
                            "History.js does not support states with fragment-identifiers (hashes/anchors)."
                        );
                        if (i !== !1 && o.busy()) return o.pushQueue({
                            scope: o,
                            callback: o.replaceState,
                            args: arguments,
                            queue: i
                        }), !1;
                        o.busy(!0);
                        var s = o.createStateObject(t, n, r),
                            u = o.getHashByState(s),
                            a = o.getState(!1),
                            f = o.getHashByState(a),
                            l = o.getStateByIndex(-2);
                        return o.discardState(a, s, l), u === f ? (o.storeState(
                                    s), o.expectedStateId = s.id, o.recycleState(
                                    s), o.setTitle(s), o.saveState(s), o.Adapter
                                .trigger(e, "statechange"), o.busy(!1)) : o
                            .pushState(s.data, s.title, s.url, !1), !0
                    }), o.emulated.pushState && o.getHash() && !o.emulated.hashChange &&
                o.Adapter.onDomLoad(function() {
                    o.Adapter.trigger(e, "hashchange")
                })
        }, typeof o.init != "undefined" && o.init()
    }(window),
    function(e, t) {
        "use strict";
        var n = e.console || t,
            r = e.document,
            i = e.navigator,
            s = e.sessionStorage || !1,
            o = e.setTimeout,
            u = e.clearTimeout,
            a = e.setInterval,
            f = e.clearInterval,
            l = e.JSON,
            c = e.alert,
            h = e.History = e.History || {},
            p = e.history;
        try {
            s.setItem("TEST", "1"), s.removeItem("TEST")
        } catch (d) {
            s = !1
        }
        l.stringify = l.stringify || l.encode, l.parse = l.parse || l.decode;
        if (typeof h.init != "undefined") throw new Error(
            "History.js Core has already been loaded...");
        h.init = function(e) {
            return typeof h.Adapter == "undefined" ? !1 : (typeof h.initCore !=
                "undefined" && h.initCore(), typeof h.initHtml4 !=
                "undefined" && h.initHtml4(), !0)
        }, h.initCore = function(d) {
            if (typeof h.initCore.initialized != "undefined") return !1;
            h.initCore.initialized = !0, h.options = d || {}, h.options.hashChangeInterval =
                h.options.hashChangeInterval || 100, h.options.safariPollInterval =
                h.options.safariPollInterval || 500, h.options.doubleCheckInterval =
                h.options.doubleCheckInterval || 500, h.options.disableSuid =
                h.options.disableSuid || !1, h.options.storeInterval = h.options
                .storeInterval || 1e3, h.options.busyDelay = h.options.busyDelay ||
                250, h.options.debug = h.options.debug || !1, h.options.initialTitle =
                h.options.initialTitle || r.title, h.options.html4Mode = h.options
                .html4Mode || !0, h.options.delayInit = h.options.delayInit ||
                !1, h.intervalList = [], h.clearAllIntervals = function() {
                    var e, t = h.intervalList;
                    if (typeof t != "undefined" && t !== null) {
                        for (e = 0; e < t.length; e++) f(t[e]);
                        h.intervalList = null
                    }
                }, h.debug = function() {
                    (h.options.debug || !1) && h.log.apply(h, arguments)
                }, h.log = function() {
                    var e = typeof n != "undefined" && typeof n.log !=
                        "undefined" && typeof n.log.apply != "undefined",
                        t = r.getElementById("log"),
                        i, s, o, u, a;
                    e ? (u = Array.prototype.slice.call(arguments), i = u.shift(),
                            typeof n.debug != "undefined" ? n.debug.apply(n, [
                                i, u
                            ]) : n.log.apply(n, [i, u])) : i = "\n" +
                        arguments[0] + "\n";
                    for (s = 1, o = arguments.length; s < o; ++s) {
                        a = arguments[s];
                        if (typeof a == "object" && typeof l != "undefined")
                            try {
                                a = l.stringify(a)
                            } catch (f) {}
                        i += "\n" + a + "\n"
                    }
                    return t ? (t.value += i + "\n-----\n", t.scrollTop = t
                        .scrollHeight - t.clientHeight) : e || c(i), !0
                }, h.getInternetExplorerMajorVersion = function() {
                    var e = h.getInternetExplorerMajorVersion.cached =
                        typeof h.getInternetExplorerMajorVersion.cached !=
                        "undefined" ? h.getInternetExplorerMajorVersion.cached :
                        function() {
                            var e = 3,
                                t = r.createElement("div"),
                                n = t.getElementsByTagName("i");
                            while ((t.innerHTML = "<!--[if gt IE " + ++e +
                                "]><i></i><![endif]-->") && n[0]);
                            return e > 4 ? e : !1
                        }();
                    return e
                }, h.isInternetExplorer = function() {
                    var e = h.isInternetExplorer.cached = typeof h.isInternetExplorer
                        .cached != "undefined" ? h.isInternetExplorer.cached :
                        Boolean(h.getInternetExplorerMajorVersion());
                    return e
                }, h.options.html4Mode ? h.emulated = {
                    pushState: !0,
                    hashChange: !0
                } : h.emulated = {
                    pushState: !Boolean(e.history && e.history.pushState &&
                        e.history.replaceState && !
                        / Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i
                        .test(i.userAgent) && !
                        /AppleWebKit\/5([0-2]|3[0-2])/i.test(i.userAgent)
                    ),
                    hashChange: Boolean(!("onhashchange" in e ||
                            "onhashchange" in r) || h.isInternetExplorer() &&
                        h.getInternetExplorerMajorVersion() < 8)
                }, h.enabled = !h.emulated.pushState, h.bugs = {
                    setHash: Boolean(!h.emulated.pushState && i.vendor ===
                        "Apple Computer, Inc." &&
                        /AppleWebKit\/5([0-2]|3[0-3])/.test(i.userAgent)
                    ),
                    safariPoll: Boolean(!h.emulated.pushState && i.vendor ===
                        "Apple Computer, Inc." &&
                        /AppleWebKit\/5([0-2]|3[0-3])/.test(i.userAgent)
                    ),
                    ieDoubleCheck: Boolean(h.isInternetExplorer() && h.getInternetExplorerMajorVersion() <
                        8),
                    hashEscape: Boolean(h.isInternetExplorer() && h.getInternetExplorerMajorVersion() <
                        7)
                }, h.isEmptyObject = function(e) {
                    for (var t in e)
                        if (e.hasOwnProperty(t)) return !1;
                    return !0
                }, h.cloneObject = function(e) {
                    var t, n;
                    return e ? (t = l.stringify(e), n = l.parse(t)) : n = {},
                        n
                }, h.getRootUrl = function() {
                    var e = r.location.protocol + "//" + (r.location.hostname ||
                        r.location.host);
                    if (r.location.port || !1) e += ":" + r.location.port;
                    return e += "/", e
                }, h.getBaseHref = function() {
                    var e = r.getElementsByTagName("base"),
                        t = null,
                        n = "";
                    return e.length === 1 && (t = e[0], n = t.href.replace(
                            /[^\/]+$/, "")), n = n.replace(/\/+$/, ""), n &&
                        (n += "/"), n
                }, h.getBaseUrl = function() {
                    var e = h.getBaseHref() || h.getBasePageUrl() || h.getRootUrl();
                    return e
                }, h.getPageUrl = function() {
                    var e = h.getState(!1, !1),
                        t = (e || {}).url || h.getLocationHref(),
                        n;
                    return n = t.replace(/\/+$/, "").replace(/[^\/]+$/,
                        function(e, t, n) {
                            return /\./.test(e) ? e : e + "/"
                        }), n
                }, h.getBasePageUrl = function() {
                    var e = h.getLocationHref().replace(/[#\?].*/, "").replace(
                        /[^\/]+$/, function(e, t, n) {
                            return /[^\/]$/.test(e) ? "" : e
                        }).replace(/\/+$/, "") + "/";
                    return e
                }, h.getFullUrl = function(e, t) {
                    var n = e,
                        r = e.substring(0, 1);
                    return t = typeof t == "undefined" ? !0 : t,
                        /[a-z]+\:\/\//.test(e) || (r === "/" ? n = h.getRootUrl() +
                            e.replace(/^\/+/, "") : r === "#" ? n = h.getPageUrl()
                            .replace(/#.*/, "") + e : r === "?" ? n = h.getPageUrl()
                            .replace(/[\?#].*/, "") + e : t ? n = h.getBaseUrl() +
                            e.replace(/^(\.\/)+/, "") : n = h.getBasePageUrl() +
                            e.replace(/^(\.\/)+/, "")), n.replace(/\#$/, "")
                }, h.getShortUrl = function(e) {
                    var t = e,
                        n = h.getBaseUrl(),
                        r = h.getRootUrl();
                    return h.emulated.pushState && (t = t.replace(r, "/")),
                        t = t.replace(r, "/"), h.isTraditionalAnchor(t) &&
                        (t = "./" + t), t = t.replace(/^(\.\/)+/g, "./").replace(
                            /\#$/, ""), t
                }, h.getLocationHref = function(e) {
                    e = e || r;
                    var t;
                    return e.URL === e.location.href ? t = e.location.href :
                        e.location.href === decodeURIComponent(e.URL) ? t =
                        e.URL : e.location.hash && decodeURIComponent(e.location
                            .href.replace(/^[^#]+/, "")) === e.location.hash ?
                        t = e.location.href : e.URL.indexOf("#") == -1 && e
                        .location.href.indexOf("#") != -1 ? t = e.location.href :
                        t = e.URL || e.location.href, t.indexOf("#!") == 0 ?
                        "#" + t.substr(2) : t
                }, h.store = {}, h.idToState = h.idToState || {}, h.stateToId =
                h.stateToId || {}, h.urlToId = h.urlToId || {}, h.storedStates =
                h.storedStates || [], h.savedStates = h.savedStates || [],
                h.normalizeStore = function() {
                    h.store.idToState = h.store.idToState || {}, h.store.urlToId =
                        h.store.urlToId || {}, h.store.stateToId = h.store.stateToId || {}
                }, h.getState = function(e, t) {
                    typeof e == "undefined" && (e = !0), typeof t ==
                        "undefined" && (t = !0);
                    var n = h.getLastSavedState();
                    return !n && t && (n = h.createStateObject()), e && (n =
                            h.cloneObject(n), n.url = n.cleanUrl || n.url),
                        n
                }, h.getIdByState = function(e) {
                    var t = h.extractId(e.url),
                        n;
                    if (!t) {
                        n = h.getStateString(e);
                        if (typeof h.stateToId[n] != "undefined") t = h.stateToId[
                            n];
                        else if (typeof h.store.stateToId[n] != "undefined")
                            t = h.store.stateToId[n];
                        else {
                            for (;;) {
                                t = (new Date).getTime() + String(Math.random())
                                    .replace(/\D/g, "");
                                if (typeof h.idToState[t] == "undefined" &&
                                    typeof h.store.idToState[t] ==
                                    "undefined") break
                            }
                            h.stateToId[n] = t, h.idToState[t] = e
                        }
                    }
                    return t
                }, h.normalizeState = function(e) {
                    var t, n;
                    if (!e || typeof e != "object") e = {};
                    if (typeof e.normalized != "undefined") return e;
                    if (!e.data || typeof e.data != "object") e.data = {};
                    return t = {}, t.normalized = !0, t.title = e.title ||
                        "", t.url = h.getFullUrl(e.url ? e.url : h.getLocationHref()),
                        t.hash = h.getShortUrl(t.url), t.data = h.cloneObject(
                            e.data), t.id = h.getIdByState(t), t.cleanUrl =
                        t.url.replace(/\??\&_suid.*/, ""), t.url = t.cleanUrl,
                        n = !h.isEmptyObject(t.data), (t.title || n) && h.options
                        .disableSuid !== !0 && (t.hash = h.getShortUrl(t.url)
                            .replace(/\??\&_suid.*/, ""), /\?/.test(t.hash) ||
                            (t.hash += "?"), t.hash += "&_suid=" + t.id), t
                        .hashedUrl = h.getFullUrl(t.hash), (h.emulated.pushState ||
                            h.bugs.safariPoll) && h.hasUrlDuplicate(t) && (
                            t.url = t.hashedUrl), t
                }, h.createStateObject = function(e, t, n) {
                    var r = {
                        data: e,
                        title: t,
                        url: n
                    };
                    return r = h.normalizeState(r), r
                }, h.getStateById = function(e) {
                    e = String(e);
                    var n = h.idToState[e] || h.store.idToState[e] || t;
                    return n
                }, h.getStateString = function(e) {
                    var t, n, r;
                    return t = h.normalizeState(e), n = {
                        data: t.data,
                        title: e.title,
                        url: e.url
                    }, r = l.stringify(n), r
                }, h.getStateId = function(e) {
                    var t, n;
                    return t = h.normalizeState(e), n = t.id, n
                }, h.getHashByState = function(e) {
                    var t, n;
                    return t = h.normalizeState(e), n = t.hash, n
                }, h.extractId = function(e) {
                    var t, n, r, i;
                    return e.indexOf("#") != -1 ? i = e.split("#")[0] : i =
                        e, n = /(.*)\&_suid=([0-9]+)$/.exec(i), r = n ? n[1] ||
                        e : e, t = n ? String(n[2] || "") : "", t || !1
                }, h.isTraditionalAnchor = function(e) {
                    var t = !/[\/\?\.]/.test(e);
                    return t
                }, h.extractState = function(e, t) {
                    var n = null,
                        r, i;
                    return t = t || !1, r = h.extractId(e), r && (n = h.getStateById(
                        r)), n || (i = h.getFullUrl(e), r = h.getIdByUrl(
                            i) || !1, r && (n = h.getStateById(r)), !n &&
                        t && !h.isTraditionalAnchor(e) && (n = h.createStateObject(
                            null, null, i))), n
                }, h.getIdByUrl = function(e) {
                    var n = h.urlToId[e] || h.store.urlToId[e] || t;
                    return n
                }, h.getLastSavedState = function() {
                    return h.savedStates[h.savedStates.length - 1] || t
                }, h.getLastStoredState = function() {
                    return h.storedStates[h.storedStates.length - 1] || t
                }, h.hasUrlDuplicate = function(e) {
                    var t = !1,
                        n;
                    return n = h.extractState(e.url), t = n && n.id !== e.id,
                        t
                }, h.storeState = function(e) {
                    return h.urlToId[e.url] = e.id, h.storedStates.push(h.cloneObject(
                        e)), e
                }, h.isLastSavedState = function(e) {
                    var t = !1,
                        n, r, i;
                    return h.savedStates.length && (n = e.id, r = h.getLastSavedState(),
                        i = r.id, t = n === i), t
                }, h.saveState = function(e) {
                    return h.isLastSavedState(e) ? !1 : (h.savedStates.push(
                        h.cloneObject(e)), !0)
                }, h.getStateByIndex = function(e) {
                    var t = null;
                    return typeof e == "undefined" ? t = h.savedStates[h.savedStates
                        .length - 1] : e < 0 ? t = h.savedStates[h.savedStates
                        .length + e] : t = h.savedStates[e], t
                }, h.getCurrentIndex = function() {
                    var e = null;
                    return h.savedStates.length < 1 ? e = 0 : e = h.savedStates
                        .length - 1, e
                }, h.getHash = function(e) {
                    var t = h.getLocationHref(e),
                        n;
                    return n = h.getHashByUrl(t), n
                }, h.unescapeHash = function(e) {
                    var t = h.normalizeHash(e);
                    return t = decodeURIComponent(t), t
                }, h.normalizeHash = function(e) {
                    var t = e.replace(/[^#]*#/, "").replace(/#.*/, "");
                    return t
                }, h.setHash = function(e, t) {
                    var n, i;
                    return t !== !1 && h.busy() ? (h.pushQueue({
                        scope: h,
                        callback: h.setHash,
                        args: arguments,
                        queue: t
                    }), !1) : (h.busy(!0), n = h.extractState(e, !0), n &&
                        !h.emulated.pushState ? h.pushState(n.data, n.title,
                            n.url, !1) : h.getHash() !== e && (h.bugs.setHash ?
                            (i = h.getPageUrl(), h.pushState(null, null,
                                i + "#!" + e, !1)) : r.location.hash =
                            "!" + e), h)
                }, h.escapeHash = function(t) {
                    var n = h.normalizeHash(t);
                    return n = e.encodeURIComponent(n), h.bugs.hashEscape ||
                        (n = n.replace(/\%21/g, "!").replace(/\%26/g, "&").replace(
                            /\%3D/g, "=").replace(/\%3F/g, "?")), n
                }, h.getHashByUrl = function(e) {
                    var t = String(e).replace(/([^#]*)#?([^#]*)#?(.*)/,
                        "$2");
                    return t = h.unescapeHash(t), t.charAt(0) == "!" && (t =
                        t.substr(1)), t
                }, h.setTitle = function(e) {
                    var t = e.title,
                        n;
                    t || (n = h.getStateByIndex(0), n && n.url === e.url &&
                        (t = n.title || h.options.initialTitle));
                    try {
                        r.getElementsByTagName("title")[0].innerHTML = t.replace(
                            "<", "&lt;").replace(">", "&gt;").replace(
                            " & ", " &amp; ")
                    } catch (i) {}
                    return r.title = t, h
                }, h.queues = [], h.busy = function(e) {
                    typeof e != "undefined" ? h.busy.flag = e : typeof h.busy
                        .flag == "undefined" && (h.busy.flag = !1);
                    if (!h.busy.flag) {
                        u(h.busy.timeout);
                        var t = function() {
                            var e, r, i;
                            if (h.busy.flag) return;
                            for (e = h.queues.length - 1; e >= 0; --e) {
                                r = h.queues[e];
                                if (r.length === 0) continue;
                                i = r.shift(), n.log("[fireNext]", i, r,
                                    e), h.busy.timeout = o(t, h.options
                                    .busyDelay)
                            }
                        };
                        h.busy.timeout = o(t, h.options.busyDelay)
                    }
                    return h.busy.flag
                }, h.busy.flag = !1, h.fireQueueItem = function(e) {
                    return e.callback.apply(e.scope || h, e.args || [])
                }, h.pushQueue = function(e) {
                    return h.queues[e.queue || 0] = h.queues[e.queue || 0] || [],
                        h.queues[e.queue || 0].push(e), h
                }, h.queue = function(e, t) {
                    return typeof e == "function" && (e = {
                            callback: e
                        }), typeof t != "undefined" && (e.queue = t), h.busy() ?
                        h.pushQueue(e) : h.fireQueueItem(e), h
                }, h.clearQueue = function() {
                    return h.busy.flag = !1, h.queues = [], h
                }, h.stateChanged = !1, h.doubleChecker = !1, h.doubleCheckComplete =
                function() {
                    return h.stateChanged = !0, h.doubleCheckClear(), h
                }, h.doubleCheckClear = function() {
                    return h.doubleChecker && (u(h.doubleChecker), h.doubleChecker = !
                        1), h
                }, h.doubleCheck = function(e) {
                    return h.stateChanged = !1, h.doubleCheckClear(), h.bugs
                        .ieDoubleCheck && (h.doubleChecker = o(function() {
                            return h.doubleCheckClear(), h.stateChanged ||
                                e(), !0
                        }, h.options.doubleCheckInterval)), h
                }, h.safariStatePoll = function() {
                    var t = h.extractState(h.getLocationHref()),
                        n;
                    if (!h.isLastSavedState(t)) return n = t, n || (n = h.createStateObject()),
                        h.Adapter.trigger(e, "popstate"), h;
                    return
                }, h.back = function(e) {
                    return e !== !1 && h.busy() ? (h.pushQueue({
                        scope: h,
                        callback: h.back,
                        args: arguments,
                        queue: e
                    }), !1) : (h.busy(!0), h.doubleCheck(function() {
                        h.back(!1)
                    }), p.go(-1), !0)
                }, h.forward = function(e) {
                    return e !== !1 && h.busy() ? (h.pushQueue({
                        scope: h,
                        callback: h.forward,
                        args: arguments,
                        queue: e
                    }), !1) : (h.busy(!0), h.doubleCheck(function() {
                        h.forward(!1)
                    }), p.go(1), !0)
                }, h.go = function(e, t) {
                    var n;
                    if (e > 0)
                        for (n = 1; n <= e; ++n) h.forward(t);
                    else {
                        if (!(e < 0)) throw new Error(
                            "History.go: History.go requires a positive or negative integer passed."
                        );
                        for (n = -1; n >= e; --n) h.back(t)
                    }
                    return h
                };
            if (h.emulated.pushState) {
                var v = function() {};
                h.pushState = h.pushState || v, h.replaceState = h.replaceState ||
                    v
            } else h.onPopState = function(t, n) {
                    var r = !1,
                        i = !1,
                        s, o;
                    return h.doubleCheckComplete(), s = h.getHash(), s ? (o =
                        h.extractState(s || h.getLocationHref(), !0), o ?
                        h.replaceState(o.data, o.title, o.url, !1) : (h
                            .Adapter.trigger(e, "anchorchange"), h.busy(!
                                1)), h.expectedStateId = !1, !1) : (r =
                        h.Adapter.extractEventData("state", t, n) || !1,
                        r ? i = h.getStateById(r) : h.expectedStateId ?
                        i = h.getStateById(h.expectedStateId) : i = h.extractState(
                            h.getLocationHref()), i || (i = h.createStateObject(
                            null, null, h.getLocationHref())), h.expectedStateId = !
                        1, h.isLastSavedState(i) ? (h.busy(!1), !1) : (
                            h.storeState(i), h.saveState(i), h.setTitle(
                                i), h.Adapter.trigger(e, "statechange"),
                            h.busy(!1), !0))
                }, h.Adapter.bind(e, "popstate", h.onPopState), h.pushState =
                function(t, n, r, i) {
                    c("pushState: " + r);
                    if (h.getHashByUrl(r) && h.emulated.pushState) throw new Error(
                        "History.js does not support states with fragement-identifiers (hashes/anchors)."
                    );
                    if (i !== !1 && h.busy()) return h.pushQueue({
                        scope: h,
                        callback: h.pushState,
                        args: arguments,
                        queue: i
                    }), !1;
                    h.busy(!0);
                    var s = h.createStateObject(t, n, r);
                    return h.isLastSavedState(s) ? h.busy(!1) : (h.storeState(
                        s), h.expectedStateId = s.id, p.pushState(s
                        .id, s.title, s.url), h.Adapter.trigger(e,
                        "popstate")), !0
                }, h.replaceState = function(t, n, r, i) {
                    if (h.getHashByUrl(r) && h.emulated.pushState) throw new Error(
                        "History.js does not support states with fragement-identifiers (hashes/anchors)."
                    );
                    if (i !== !1 && h.busy()) return h.pushQueue({
                        scope: h,
                        callback: h.replaceState,
                        args: arguments,
                        queue: i
                    }), !1;
                    h.busy(!0);
                    var s = h.createStateObject(t, n, r);
                    return h.isLastSavedState(s) ? h.busy(!1) : (h.storeState(
                        s), h.expectedStateId = s.id, p.replaceState(
                        s.id, s.title, s.url), h.Adapter.trigger(e,
                        "popstate")), !0
                }; if (s) {
                try {
                    h.store = l.parse(s.getItem("History.store")) || {}
                } catch (m) {
                    h.store = {}
                }
                h.normalizeStore()
            } else h.store = {}, h.normalizeStore();
            h.Adapter.bind(e, "unload", h.clearAllIntervals), h.saveState(h
                    .storeState(h.extractState(h.getLocationHref(), !0))),
                s && (h.onUnload = function() {
                        var e, t, n;
                        try {
                            e = l.parse(s.getItem("History.store")) || {}
                        } catch (r) {
                            e = {}
                        }
                        e.idToState = e.idToState || {}, e.urlToId = e.urlToId || {},
                            e.stateToId = e.stateToId || {};
                        for (t in h.idToState) {
                            if (!h.idToState.hasOwnProperty(t)) continue;
                            e.idToState[t] = h.idToState[t]
                        }
                        for (t in h.urlToId) {
                            if (!h.urlToId.hasOwnProperty(t)) continue;
                            e.urlToId[t] = h.urlToId[t]
                        }
                        for (t in h.stateToId) {
                            if (!h.stateToId.hasOwnProperty(t)) continue;
                            e.stateToId[t] = h.stateToId[t]
                        }
                        h.store = e, h.normalizeStore(), n = l.stringify(e);
                        try {
                            s.setItem("History.store", n)
                        } catch (i) {
                            if (i.code !== DOMException.QUOTA_EXCEEDED_ERR)
                                throw i;
                            s.length && (s.removeItem("History.store"), s.setItem(
                                "History.store", n))
                        }
                    }, h.intervalList.push(a(h.onUnload, h.options.storeInterval)),
                    h.Adapter.bind(e, "beforeunload", h.onUnload), h.Adapter
                    .bind(e, "unload", h.onUnload));
            if (!h.emulated.pushState) {
                h.bugs.safariPoll && h.intervalList.push(a(h.safariStatePoll,
                    h.options.safariPollInterval));
                if (i.vendor === "Apple Computer, Inc." || (i.appCodeName ||
                    "") === "Mozilla") h.Adapter.bind(e, "hashchange",
                    function() {
                        h.Adapter.trigger(e, "popstate")
                    }), h.getHash() && h.Adapter.onDomLoad(function() {
                    h.Adapter.trigger(e, "hashchange")
                })
            }
        }, (!h.options || !h.options.delayInit) && h.init()
    }(window);

function fixedEncodeURIComponent(e) {
    return encodeURIComponent(e).replace(/[!'()*]/g, escape)
}

function getParameterByName(e) {
    e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var t = "[\\?&]" + e + "=([^&#]*)",
        n = new RegExp(t),
        r = n.exec(window.location.href);
    return r == null ? "" : decodeURIComponent(r[1].replace(/\+/g, " "))
}

function isIphone() {
    if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(
        /iPod/i)) {
        var e = navigator.userAgent.indexOf("Version/");
        return navigator.userAgent.substr(e + 8, 5)
    }
    return !1
}

function isIpad() {
    if (navigator.userAgent.match(/iPad/i)) {
        var e = navigator.userAgent.indexOf("Version/");
        return navigator.userAgent.substr(e + 8, 5)
    }
    return !1
}

function isDroid() {
    if (navigator.userAgent.match(/Android/i)) {
        var e = navigator.userAgent.indexOf("Version/");
        return navigator.userAgent.substr(e + 8, 5)
    }
    return !1
}

function isBlackBerry() {
    if (navigator.userAgent.match(/BlackBerry/i)) {
        var e = navigator.userAgent.indexOf("Version/");
        return navigator.userAgent.substr(e + 8, 5)
    }
    return !1
}

function target_blank() {
    return window.open(this.href), !1
}

function initTargetBlank(e) {
    var t = new Object;
    t.Initialize = function() {
        var t = e.find("a.target-blank");
        t.each(function(e) {
            var n = t[e];
            n.onclick = target_blank, n.onkeypress =
                target_blank
        })
    }, t.Initialize()
}

function externalLinkInit() {

}

function initIEFix() {}

function initCustomInput() {

}

function initCustomSelect() {

}

function initVideo(e) {
	
}

function initModal() {
    function e(e, t) {
        var n = $("#" + e);
        jwplayer(e).resize(t.w, t.h)
    }
    return
}

function fixMobileVideo() {

}

function addPlayButtonsToNewsModules() {}

function fixRTEImagesIE8() {

}

function fixRTEVideo(e) {

}

function fixVimeoAndYoutube() {
	
}

function fixVideoSizing() {

}

function initAudio() {

}

function initLightbox() {

}

function fixMobile() {
    var e = function(e) {
        e = $(e), e.unbind("focus").unbind("blur").unbind("mousedown").unbind(
            "mouseup").unbind("mouseout").unbind("click"), e.change(
            function() {
                e.selectmenu()
            })
    };
    $("select:not([multiple])").each(function(t, n) {
        e(n)
    })
}

function initMenu() {
    var e = $(".header-container"),
        t = $(".menu-toggle a"),
        n = $("nav", e),
        r;
    $(".navigation_landing").length ? r = $(
        ">ul:not('.mobile-header-bar')>li:not('.hide-on-navigation-landing')",
        n) : r = $(">ul:not('.mobile-header-bar')>li", n);
    var i = $(".mobile-nav-header .search-nav a"),
        s = $(".mobile-nav-header .search-nav form"),
        o = $("input[type='text']", s);
    i.click(function() {
        return s.addClass("toggled"), o.focus(), $(
            "header .h--logo.title").fadeTo(250, 0), !1
    }), o.blur(function() {
        s.removeClass("toggled"), $("header .h--logo.title").fadeTo(
            250, 1)
    });
    var u = !1;
    isBlackBerry() ? $(t).on("click", function() {
        return u ? (t.removeClass("touch-hover"), n.removeClass(
            "toggled"), r.removeClass("toggled"), u = !1) : (t.addClass(
            "touch-hover"), n.addClass("toggled"), u = !0), !1
    }) : Hammer(t).on("tap", function(e) {
        return u ? (t.removeClass("touch-hover"), n.removeClass(
            "toggled"), r.removeClass("toggled"), u = !1) : (t.addClass(
            "touch-hover"), n.addClass("toggled"), u = !0), !1
    }), r.each(function(e, t) {
        $(t).data("toggled", !1);
        var i = !1,
            s = $(">a", t),
            o = $(".drop", t),
            u = function(e) {
                if (getLayoutMode() == "mobile") return;
                if ($(t).hasClass("toggled")) return;
                o.css({
                    height: "auto",
                    visibility: "hidden"
                });
                var r = o.height();
                o.css({
                    height: "",
                    visibility: ""
                }), $(t).addClass("hover animating"), n.addClass(
                    "section-toggled"), o.stop().animate({
                    height: r
                }, {
                    complete: function() {
                        $(t).addClass("toggled"), $(t).data(
                            "toggled", !0), o.css({
                            height: "auto"
                        })
                    }
                })
            },
            a = function(e, i) {
                if (getLayoutMode() == "mobile") return;
                if ($(".search-preview-module").hasClass(
                    "active-module") && typeof i == "undefined")
                    return !1;
                $(t).removeClass("toggled hover"), $(t).data(
                        "toggled", !1), r.filter(".toggled").length ==
                    0, o.stop().animate({
                        height: 0
                    }, {
                        complete: function() {
                            $(t).removeClass("animating"),
                                Modernizr.csstransitions ?
                                $(
                                    ".header-container .view-all-wrapper"
                                ).removeClass("faded") : ($(
                                    ".header-container .a.search-view-all-link"
                                ).css({
                                    "background-color": "",
                                    color: ""
                                }), $(
                                    ".header-container .a.search-view-all-link"
                                ).attr("style", "")), $(
                                    ".search-preview-module"
                                ).parents(".drop-content").css(
                                    "display", ""), o.css(
                                    "height", ""), r.filter(
                                    ".hover").length == 0 &&
                                n.removeClass(
                                    "section-toggled"), $(
                                    ".search-preview-module"
                                ).removeClass(
                                    "active-module")
                        }
                    })
            };
        o.on("close_event", function(e, t) {
            a(e, t)
        }), o.on("open_event", function() {
            u()
        });
        var f = function() {
                $(t).data("toggled") ? ($(t).removeClass("toggled"),
                    r.filter(".toggled").length == 0 && n.removeClass(
                        "section-toggled"), $(t).data("toggled", !
                        1)) : ($(t).addClass("toggled"), n.addClass(
                    "section-toggled"), $(t).data("toggled", !
                    0))
            },
            l, c;
        $(t).on("close_drop", function() {
            a()
        }), $(t).on("open_drop", function() {
            u()
        }), $(t).on("mouseenter", function() {
            if ($(".touch").length) return;
            l = setTimeout(function() {
                u(), l = 0
            }, 250)
        }), $(t).on("mouseleave", function(e) {
            if ($("nav.header-nav").hasClass("nav-locked"))
                return;
            if ($(".touch").length) return;
            l ? clearTimeout(l) : (a(), c = setTimeout(
                function() {}, 1e3))
        }), s.click(function() {
            if (getLayoutMode() == "desktop" && !$(".touch")
                .length) return !0;
            if (getLayoutMode() == "mobile") return f(), !1;
            if ($(t).data("toggled")) return a(), !0;
            var e = r.filter(".toggled");
            return e.length && e.trigger("close_drop"),
                setTimeout(function() {
                    u()
                }, 250), !1
        }), $(t).hasClass("search-nav") && (Hammer($(
            ".header-container")).on("tap", function(e) {
            if ($(".touch").length == 0) return;
            var t = $(e.gesture.target);
            if (t.is("nav") || t.parents("nav").length)
                return;
            a()
        }), $(".form-wrapper input", t).on("blur", function() {
            if ($(".touch").length == 0) return;
            a()
        }))
    }), $(window).on("layoutChange", function() {
        r.trigger("close_drop");
        var e = $(".mobile-nav-header .search-nav form"),
            t = $("input[type='text']", e);
        t.trigger("blur")
    })
}

function initAccordion() {
    $(".accordion-wrapper").each(function(e, t) {
        if ($(t).parents(".ajax-module").length) return;
        var n = $(".accordion-trigger", t),
            r = $(".accordion-content-wrapper", t);
        n.on("click", function() {
            if ($(t).hasClass("toggled")) {
                var e = r.height();
                r.css("height", e), $(t).removeClass(
                    "toggled"), r.animate({
                    height: 0
                }, {
                    duration: 500
                })
            } else {
                r.css("height", "auto");
                var e = r.height();
                r.css("height", "0"), $(t).addClass(
                    "toggled"), r.animate({
                    height: e
                }, {
                    duration: 500,
                    complete: function() {
                        r.css({
                            height: ""
                        })
                    }
                })
            }
            return !1
        })
    })
}

function initPlaceholder() {
    var e = $("input, textarea");
    e.length > 0 && !$("body").hasClass("in-ruby-preview") && e.placeholder()
}

function initTouch() {
    if (!mobile_debug && $(".touch").length == 0) return;
    $(window).load(function() {
        if ($("body").hasClass("homepage")) return;
        var e = $.cookie("useCookies");
        if (typeof e == "undefined") return;
        var t = $("#swipe-hint-container");
        t.show();
        if (typeof $.cookie("winston.swipe-hint") != "undefined" &&
            $.cookie("winston.swipe-hint") == "1") {
            t.length > 0 && t.remove();
            return
        }
        $.cookie("winston.swipe-hint", "1", {
            expires: 30,
            path: "/"
        }), t.css("opacity", "1");
        var n = function() {
            t.css("opacity", "0"), setTimeout(function() {
                t.remove()
            }, 500), Hammer(t).off("tap")
        };
        Hammer(t).on("tap", function(e) {
            n()
        }), setTimeout(function() {
            n()
        }, 2e3)
    }), Hammer.plugins.fakeMultitouch(), Hammer.plugins.showTouches();
    var e = !1;
    Hammer($("body")).on("touch", function(e) {}).on("drag", function(t) {
        if (t.gesture.direction == Hammer.DIRECTION_UP || t.gesture
            .direction == Hammer.DIRECTION_DOWN || e) return e = !0, !
            1;
        var n = $(window).height(),
            r = function() {
                if ($("body.homepage").length > 0) return;
                var e = $(".main-header-right-btn-wrapper a"),
                    n = $(".main-header-left-btn-wrapper a");
                if (e.length == 0 || n.length == 0) return;
                var r = parseInt(e.css("max-width"), 10),
                    i = t.gesture.distance * 1.5,
                    s = e.offset().top,
                    o = $(window).scrollTop();
                if (o > s) return !1;
                t.gesture.direction == Hammer.DIRECTION_LEFT && !n.hasClass(
                        "active") ? (e.addClass("active swiping"),
                        e.css("width", i), i >= r && e.addClass(
                            "clicked")) : t.gesture.direction ==
                    Hammer.DIRECTION_RIGHT && !e.hasClass("active") &&
                    (n.addClass("active swiping"), n.css("width", i),
                        i >= r && n.addClass("clicked")), t.gesture
                    .preventDefault()
            },
            i = function() {
                var e = $(".overlay-arrow-container.right"),
                    n = $(".overlay-arrow-container.left"),
                    r = n.width() == 117 ? 100 : 145,
                    i = -1 * (r - t.gesture.distance * 1.5);
                i > 0 && (i = 0), t.gesture.direction == Hammer.DIRECTION_LEFT &&
                    !n.hasClass("active") ? (e.addClass(
                        "active swiping"), e.css("margin-right",
                        i), i == 0 && e.addClass("clicked")) : t.gesture
                    .direction == Hammer.DIRECTION_RIGHT && !e.hasClass(
                        "active") && (n.addClass("active swiping"),
                        n.css("margin-left", i), i == 0 && n.addClass(
                            "clicked")), t.gesture.preventDefault()
            };
        return $(".overlay_active").length ? i() : r(), !1
    }).on("release", function(t) {
        e = !1;
        var n = function() {
                var e = $(".main-header-btn-wrapper a.active");
                if (e.length == 0) return;
                e.hasClass("clicked") && e.trigger("click"), e.removeClass(
                    "swiping"), e.css("width", ""), setTimeout(
                    function() {
                        e.removeClass("active clicked")
                    }, 500)
            },
            r = function() {
                var e = $(".overlay-arrow-container.active");
                if (e.length == 0) return;
                e.hasClass("clicked") && e.find(
                    ".overlay-arrow-content").trigger(
                    "click.overlayClicked"), e.removeClass(
                    "swiping"), e.css({
                    "margin-left": "",
                    "margin-right": ""
                }), setTimeout(function() {
                    e.removeClass("active clicked")
                }, 500)
            };
        $(".overlay_active").length ? r() : n()
    })
}

function _get_layout_mode() {
    function n(e) {
        function t(e) {
            return ("0" + parseInt(e).toString(16)).slice(-2)
        }
        return e.indexOf("#") > -1 ? e : (e = e.match(
                /^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/), "#" + t(e[1]) +
            t(e[2]) + t(e[3]))
    }
    var e = {
            "#30b11e": "mobile",
            "#74b1e7": "tablet",
            "#de5c70": "desktop"
        },
        t = {
            "#aaa11e": "mobile-homepage",
            "#aaa1e7": "tablet-homepage",
            "#aaac70": "desktop-homepage"
        },
        r = n($("#m-indicator").css("background-color")),
        i = e[r];
    current_layout_mode = i;
    if ($(".homepage").length) {
        var s = n($("#arb-m-indicator").css("background-color")),
            o = t[s];
        current_layout_mode_homepage = o
    }
    return i
}

function getLayoutMode() {
    return current_layout_mode
}

function getLayoutModeHomepage() {
    return current_layout_mode_homepage
}

function animationSample() {
    var e = $("#overlay");
    if (e.length == 0) return;
    $(".overlay-button").css({
        position: "relative"
    });
    var t = $(".overlay-arrow-container.right .overlay-button");
    t.click(function() {
        var e = t.clone(),
            n = $(".overlay-arrow-container.left .overlay-button"),
            r = n.clone();
        r.css({
                left: "145px"
            }).hide(), e.css({
                left: "145px"
            }).hide(), t.parent().append(r), n.parent().append(e),
            n.animate({
                left: "-145px"
            }), e.show().animate({
                left: "0px"
            }), t.animate({
                left: "-145px"
            }), r.show().animate({
                left: "0px"
            });
        return
    })
}

function initLayoutEvent() {
    var e = _get_layout_mode(),
        t = getLayoutModeHomepage();
    $(window).resize(function() {
        var n = _get_layout_mode(),
            r = getLayoutModeHomepage();
        n != e ? (e = n, $(window).trigger("layoutChange")) : r !=
            t && (t = r, $(window).trigger("layoutChange:homepage"))
    })
}

function initSlideshows() {
    if ($(".quote-slideshow, .news-slideshow").length == 0) return;
    var e = !1;
    $.browser.safari && $(".touch").length == 0 && (e = !0), $(
        ".quote-slideshow-wrapper").each(function(t, n) {
        var r = 0,
            i = $(".quote-slideshow", n),
            s = $(".quote-slideshow-nav", n),
            o = $(".nav-status", n),
            u = $(".quote-slide", n).length;
        u += $(".news-slide", n).length;
        if (u == 0) return;
        if (u == 1) {
            $(n).find(".quote-slideshow-nav-wrapper").remove(), $(n)
                .find(".quote-slideshow").show();
            return
        }
        o.text("1 of " + u), i.slidesjs({
            animation_fallback: e,
            width: 304,
            height: 240,
            fit_height: !0,
            set_size: 3,
            effect: {
                slide: {
                    speed: 1e3
                }
            },
            navigation: {
                active: !1,
                custom_previous: $(".slidesjs-previous", n),
                custom_next: $(".slidesjs-next", n)
            },
            pagination: {
                active: !0
            },
            play: {
                active: !0,
                effect: "slide",
                interval: 1e4,
                auto: !0,
                swap: !0,
                pauseOnHover: !1,
                stopOnInteraction: !0,
                restartDelay: 2500
            },
            callback: {
                start: function(e) {},
                complete: function(e) {
                    o.text(e + " of " + u)
                },
                resize: function(e, t) {
                    var i = $(".slidesjs-pagination", n);
                    if (r == t.width) return;
                    var o = $(".homepage").length ?
                        getLayoutModeHomepage() :
                        getLayoutMode();
                    o == "desktop" || o ==
                        "desktop-homepage" ? (s.hide(),
                            i.show()) : o == "tablet" ||
                        o == "tablet-homepage" ? (s.show(),
                            i.hide()) : (s.show(), i.hide());
                    return;
                    var u, a, f, l
                }
            }
        });
        var a = $(".slidesjs-pagination", n),
            f = $(".homepage").length ? getLayoutModeHomepage() :
            getLayoutMode();
        f == "desktop" || f == "desktop-homepage" ? (s.hide(), a.show()) :
            f == "tablet" || f == "tablet-homepage" ? (s.show(), a.hide()) :
            (s.show(), a.hide())
    });
    var t = {
        mobile: 1,
        "mobile-homepage": 1,
        tablet: 2,
        "tablet-homepage": 2,
        desktop: 3,
        "desktop-homepage": 3
    };
    $(".news-slideshow-wrapper").each(function(n, r) {
        var i = 0,
            s = $(".news-slideshow", r),
            o = $(".news-slideshow-nav", r),
            u = $(".nav-status", r),
            a = $(".news-slide", r).length,
            f = 0;
        if (a == 0) return;
        var l = a;
        a > 3 && (l = "more"), $(r).addClass("slideshow-total-" + a),
            u.text("1 of " + a), s.slidesjs({
                animation_fallback: e,
                fixed_size: !0,
                fit_height: !0,
                set_size: 3,
                effect: {
                    slide: {
                        speed: 1e3
                    }
                },
                navigation: {
                    active: !1,
                    custom_previous: $(".slidesjs-previous", r),
                    custom_next: $(".slidesjs-next", r)
                },
                pagination: {
                    active: !0
                },
                play: {
                    active: !0,
                    effect: "slide",
                    interval: 1e4,
                    auto: !0,
                    swap: !0,
                    pauseOnHover: !1,
                    stopOnInteraction: !0,
                    restartDelay: 2500
                },
                callback: {
                    start: function(e) {},
                    complete: function(e) {
                        u.text(e + " of " + a)
                    },
                    resize: function(e, n) {
                        var s = $(".slidesjs-pagination", r);
                        if (i == n.width) return;
                        var l = $(".homepage").length ?
                            getLayoutModeHomepage() :
                            getLayoutMode();
                        l == "desktop" || l ==
                            "desktop-homepage" ? (o.hide(),
                                s.show()) : l == "tablet" ||
                            l == "tablet-homepage" ? (o.show(),
                                s.hide()) : (o.show(), s.hide()),
                            i = n.width;
                        var c = t[l],
                            h = e.slides,
                            p = e.slide_elements;
                        p.removeClass("last");
                        var d = Math.ceil(p.length / c),
                            v = $(
                                ".slidesjs-pagination-item",
                                r).hide();
                        a = d;
                        for (var m = 0, g = 0; m < d; m++,
                            g++) {
                            var y = $(h[g]);
                            $(v[g]).show();
                            var b = m * c,
                                w = p.slice(b, b + c);
                            y.append(w), y.children().last()
                                .addClass("last")
                        }
                        isIpad() && loadFunctions(), e.data
                            .total = d, f && (clearTimeout(
                                f), f = 0), f = setTimeout(
                                function() {
                                    e.goto(0), u.text(
                                            "1 of " + a), d ==
                                        1 ? e.options.enabled = !
                                        1 : e.options.enabled = !
                                        0
                                }, 200)
                    }
                }
            });
        var c = $(".slidesjs-pagination", r),
            h = $(".homepage").length ? getLayoutModeHomepage() :
            getLayoutMode();
        h == "desktop" || h == "desktop-homepage" ? (o.hide(), c.show()) :
            h == "tablet" || h == "tablet-homepage" ? (o.show(), c.hide()) :
            (o.show(), c.hide())
    })
}

function _measure_text_width(e, t) {
    var n = $("#" + e + "-ruler");
    return n.text(t), n.width()
}

function initGrid() {
    var e = $(".news-grid-module").filter(function(e) {
        return $(".news-grid-module").eq(e).parents(
            ".subsite-module").length > 0 ? !1 : !0
    });
    if (e.length == 0) return;
    var t = {
            mobile: [95, 248],
            tablet: [153, 363, 572],
            desktop: [190, 436, 682, 928]
        },
        n = function(e) {
            var n = $(".news-block-wrapper", e),
                r = n.length,
                i = t[getLayoutMode()],
                s = i.length;
            n.each(function(e, t) {
                $(t).removeClass(
                    "last weight-1 weight-2 weight-3 weight-4");
                if ($(t).data("weighted")) return;
                var n = $(".news-block-title-inner", t).text(),
                    r = _measure_text_width("news-grid", n),
                    s = [],
                    o = !1;
                $(i).each(function(e, n) {
                    var i = r * 1 / n;
                    !o && i <= 3 && ($(t).data(
                                "grid-weight", e + 1), $(t)
                            .data("grid-lines", i), o = !0),
                        s.push(i)
                })
            }), n = $.makeArray(n);
            while (n.length > 0) {
                var o = 0,
                    u = [],
                    a = 0,
                    f = 0;
                while (o < s && n.length > 0) {
                    var l = n.shift();
                    u.push(l);
                    var c = $(l).data("grid-weight");
                    c > a ? (a = c, f = 1) : c == a && f++, o += c
                }
                if (o > s) {
                    var h = o - s;
                    for (var p = 0; p < h;) {
                        var l = $(u[0]),
                            d = $(l).data("grid-lines");
                        $(u).each(function(e, t) {
                            var n = $(t).data("grid-weight");
                            n == a && f && h && ($(t).data(
                                    "grid-weight", n - 1), f--,
                                h--)
                        });
                        if (h != 0) {
                            var v = $(u).eq(0);
                            v.data("grid-weight", v.data("grid-weight") - 1),
                                h--
                        }
                    }
                } else if (o < s) {
                    var h = s - o;
                    for (var p = 0; p < h;) {
                        $(u).each(function(e, t) {
                            var n = $(t).data("grid-weight");
                            n < s && h && ($(t).data("grid-weight",
                                n + 1), h--)
                        });
                        if (h != 0) {
                            var v = $(u).eq(0);
                            v.data("grid-weight", v.data("grid-weight") - 1),
                                h--
                        }
                    }
                }
                var m = u.length;
                $(u).each(function(e, t) {
                    var n = $(t).data("grid-weight");
                    e + 1 == u.length && $(t).addClass("last"), $(t)
                        .addClass("weight-" + n), $(t).data(
                            "weighted", !0)
                })
            }
        },
        r = function(e) {
            var t = $(".news-block-wrapper", e),
                n = t.length;
            t.each(function(e, t) {
                var n = $(".news-block-title", t),
                    r = $(".news-block-title-inner", t),
                    i = n.height(),
                    s = r.height();
                s > i ? $(t).addClass("shim") : $(t).removeClass(
                    "shim")
            })
        };
    e.each(function(e, t) {
        var r = $(t).data("flex");
        (typeof r == "undefined" || r) && n(t);
        var i = $(".news-block-wrapper", t);
        i.each(function(e, t) {
            $(".news-block-title-wrapper strong", t).append(
                "<span class='overflow-shim'></span>")
        })
    }), e.each(function(e, t) {
        $(t).on("gridRecalibrate", function() {
            var e = $(t).data("flex");
            if (typeof e == "undefined" || e) $(t).find(
                ".news-block-wrapper").removeData(
                "weighted"), n(t);
            $(t).find(".news-block-wrapper").addClass(
                "hide"), recheckHiddens(t)
        })
    }), $(window).on("layoutChange", function() {
        var t = getLayoutMode();
        if (t != "mobile" && t != "tablet" && t != "desktop") return
        ;
        e.each(function(e, t) {
            $(t).trigger("gridRecalibrate")
        })
    }), $(window).on("resize", function() {
        e.each(function(e, t) {
            r(t)
        })
    }).trigger("resize")
}

function sampleToggleOverlay() {
    var e = $(".overlay-container");
    if (!e.length) return;
    e.hide();
    var t = $(".overlay-toggle");
    if (!t.length) return;
    t.click(function() {
        if (!!e.is(":visible")) return;
        e.show();
        var t = $(this);
        t.hasClass("business-card") ? e.find(".business-card").length &&
            e.find(".business-card").show() : t.hasClass(
                "sub-service-simple") && e.find(
                ".sub-service-simple").length && e.find(
                ".sub-service-simple").show()
    })
}

function _replace_borderradius_with_image() {
    $(".prof-search-module .letters-array li").not(".view-all").find("a").each(
        function(e, t) {
            $(t).append(
                "<img class='circle-shim' src='/images/letters-circle.png'>"
            )
        })
}

function ieFix() {
    if ($(".lt-ie9").length == 0) return;
    _replace_borderradius_with_image()
}

function initAddToBinder() {
    $(".add-to-binder").each(function(e, t) {
        var n = $("a.add-to-binder-anchor", t),
            r = $(".slideout-response", t),
            i = $(this).parents("#wrapper");
        i.length < 1 && (i = $(this).parent()), n.addClass(
            "add-to-binder-" + e), $(i).on("click",
            ".add-to-binder-" + e, function(e) {
                e.preventDefault(), ga("send", "event",
                    "Add To Binder Button", "Add To Binder",
                    window.location.pathname);
                var n = $.cookie("useCookies");
                if (typeof n == "undefined") return !1;
                $(t, i).addClass("active");
                var s = 1;
                return $.browser.msie && $.browser.version < 9 &&
                    (s = .9), r.css("opacity", 0), r.show(), r.animate({
                        opacity: s
                    }, {
                        duration: 250,
                        complete: function() {}
                    }), binderTimeout = setTimeout(function() {
                        r.fadeOut()
                    }, 5e3), !1
            })
    })
}

function handleClassSearch(e, t) {
    var n = $(e).attr("class");
    if (n.indexOf(t) == -1) return;
    var r = n.split(" ");
    for (var i = 0, s = r.length; i < s; i++) {
        var o = r[i];
        o.indexOf(t) != -1 && $(e).removeClass(o)
    }
}

function initSocialNav(e) {
    typeof e == "undefined" && (e = $(".social-share"));
    if (!e.length) return;
    e.each(function(e, t) {
        var n = social_share_counter++;
        handleClassSearch($(t), "social-share-"), $(t).addClass(
            "social-share-" + n);
        var r = $(t).parents(".ajax-module");
        r.length == 0 && (r = $(t).parent()), r.addClass(
            "social-nav-handle");
        var i = counter++;
        r.on("click", ".social-share-" + n + " >a", function() {
            var e = $(this),
                t = e.parents(".social-share"),
                n = $(".slideout-wrapper", t),
                r = $(".slideout-list", t),
                i = $(".slideout-shim", t),
                s = $(".slideout li", n),
                o = function() {
                    var e = 1;
                    $.browser.msie && $.browser.version < 9 &&
                        (e = .9), n.fadeTo(250, e), t.addClass(
                            "toggled")
                },
                u = function() {
                    n.find("li.social-share").height(34), n
                        .find("li.social-share").height(66),
                        n.stop().fadeTo(250, 0, function() {
                            n.hide(), n.css("opacity",
                                ""), t.removeClass(
                                "toggled")
                        })
                };
            return t.hasClass("toggled") ? u() : o(), !1
        }), r.on("close_slideout", function() {
            var e = $(".social-share.toggled", r),
                t = $(".slideout-wrapper", e),
                n = $(".slideout-shim", e),
                i = function() {
                    t.find("li.social-share").height(34), t
                        .find("li.social-share").height(66),
                        t.stop().fadeTo(250, 0, function() {
                            t.hide(), t.css("opacity",
                                ""), e.removeClass(
                                "toggled")
                        })
                };
            i()
        });
        return
    }), Hammer($("#wrapper")).on("tap", function(e) {
        var t = $(e.gesture.target);
        return (t.hasClass("slideout-shim") || t.parents(
            ".social-nav").length == 0) && $(
            ".social-nav-handle").trigger("close_slideout"), !1
    })
}

function prototypeDisableShareLinks() {
    var e = $("#overlay .social-share .slideout li a");
    if (!e.length) return;
    e.click(function(e) {
        return !1
    })
}

function initialLoadMoreEvents(e) {
    e.find(".news-block-wrapper").each(function(e, t) {
            e % 2 == 1 && $(t).addClass("subsite-last")
        }), e.attr("data-expanded", 1), e.find(".news-block-wrapper").addClass(
            "hide"), e.find(".news-block-wrapper").eq(0).removeClass("hide"),
        adjustModuleBoxes(e, !0)
}

function initLoadMore(e) {
    function n(e, t) {
        var n = e.parents(".news-grid-module"),
            r = n.find(".news-grid-wrapper"),
            i = parseInt(n.attr("data-expanded"), 10) + 1;
        n.attr("data-expanded", i), typeof t == "undefined" || !t ?
            adjustModuleBoxes(n) : n.attr("data-expanded", 1e4),
            loadMoreLimitCheck(n, 0, t), initTargetBlank($("body")),
            externalLinkInit()
    }
    var t = "#wrapper";
    typeof e != "undefined" ? (console.log(e), initialLoadMoreEvents(e),
        loadMoreLimitCheck(e, !0), t = e) : $(
        ".news-grid-module:not(.news-grid-filter-module)").each(
        function(e, t) {
            var n = $(t).find(".news-block-wrapper").length;
            if (n == 0) {
                $(t).find(".load-more-block").hide();
                return
            }
            initialLoadMoreEvents($(t)), loadMoreLimitCheck($(t), !0)
        }), $(".load-more-block", e).each(function(e, t) {
        if ($(t).parents(".news-grid-filter-module").length) return
        ;
        if ($(t).parents(".ajax-module").length > 0 && $(t).parents(
            "#overlay").length == 0) var r = $(t).parents(
            ".ajax-module");
        else var r = $(t).parents(".load-more-block-wrapper");
        var i = ".load-more-block";
        $(this).hasClass("professionals-load-more") ? i =
            ".load-more-block.professionals-load-more" : $(this).hasClass(
                "news-load-more") && (i =
                ".load-more-block.news-load-more"), r.off("click",
                i), r.on("click", i, function() {
                return n($(this)), !1
            });
        var s = $(t).parents(".subsite-module");
        s.off("click", ".view-all"), s.on("click", ".view-all",
            function() {
                return n($(this), 1), $(
                    ".subsite-loader-wrapper",
                    ".subsite-module").fadeIn(), !1
            });
        var o = $(t).parents(".news-grid-module");
        o.each(function(e, t) {
            $(t).parents(".subsite-module").length === 0 &&
                (o.off("click", ".view-all"), o.on("click",
                    ".view-all", function() {
                        return n($(this), 1), $(
                            "#overlay .white-loader"
                        ).show(), $(
                            "#overlay .white-loader"
                        ).animate({
                            opacity: .7
                        }, 500, function() {}), !1
                    }))
        })
    })
}

function loadMoreLimitCheck(e, t, n) {
}

function adjustModuleBoxes(e, t) {
    var n = 3,
        r = $(e).find(".news-grid-wrapper"),
        i = r.height(),
        s = $(e).find(".news-block-wrapper").eq(0);
    if (s.length == 0) return;
    var o = s.height() + parseInt(s.css("margin-bottom").replace("px", ""),
            10),
        u = n * $(e).attr("data-expanded");
    i = Math.max(i, o * n);
    var a = o * u,
        f = r.offset().top;
    r.css("height", i), (!$(e).parents(".subsite-module").length > 0 || !$(
        e).hasClass(".news-grid-filter-module")) && $(e).trigger(
        "gridRecalibrate"), recheckHiddens(e);
    if ($(e).find(".news-block-wrapper.hide").length == 0) {
        r.css("height", "");
        var a = r.height();
        r.height(i)
    }
    typeof t == "undefined" && (t = !1), t ? r.height("") : r.stop().animate({
        height: a
    }, 1e3, function() {
        $(this).css("height", ""), !newsModuleAjaxing && $(e).find(
            ".news-block-wrapper.hide").length == 0 && $(e).find(
            ".load-more-block-wrapper, .view-all").fadeOut(), $(
            window).trigger("refreshwrapperheight")
    })
}

function recheckHiddens(e) {
    var t = 3,
        n = $(e).find(".news-grid-wrapper"),
        r = n.height(),
        i = $(e).find(".news-block-wrapper").eq(0);
    if (i.length == 0) return;
    i.removeClass("hide");
    var s = i.outerHeight(!0);
    s = Math.ceil(s);
    var o = $(e).attr("data-expanded");
    typeof o == "undefined" && (o = 1);
    var u = t * o;
    r = Math.max(r, s * t);
    var a = s * u,
        f = Math.floor(n.offset().top),
        l = $(e).find(".news-block-wrapper.hide");
    if ($(e).attr("data-load-more-finished") && l.length == 0) return;
    var c = 0,
        h = !1;
    l.each(function(e, t) {
        $(t).removeClass("hide");
        var n = Math.ceil($(t).offset().top) - f;
        n = Math.ceil(n);
        if (n % s != 0) {
            var r = n % s,
                i = s / 2;
            r >= i ? n += s - n % s : n -= r, n = Math.max(n, 0)
        }
        if (n >= a) return c = e, h = !0, !1
    }), h && l.slice(c).addClass("hide")
}

function hashCheck() {
    var e = window.location.hash;
    if (e == last_hash) return;
    hashCheckFn()
}

function initHashControl() {
    hashCheckFn(1), hash_interval_id = setInterval(hashCheck, 100)
}

function hashCheckFn(e) {
    var t = window.location.hash.substr(1);
    if (t.indexOf("!") == 0) return;
    if (t.length > 0) {
        var n = $(".origin-" + t);
        pageHash = t, n.length > 0 && ($(".origin-body.origin-0").remove(),
            $(n[0]).show())
    }
}

function checkBioOrigins(e) {
}

function checkBioOrigins_overlay() {
    var e = $.cookie("origin");
    if (e != null) {
        var t, n, r, i = e.split(",");
        t = i[0], n = i[1], r = i[2];
        var s = document.referrer;
        $("#overlay .info-div").each(function(e, t) {
            var r = $(t).find(".origin-" + n);
            r.length > 0 ? $(r[0]).show() : $(t).find(".origin-0").show()
        })
    } else $(".origin-0").show()
}

function mailto(e) {
}

function initMailtoDisclaimer() {
}

function initFormPlaceholder() {
    var e = $(".form-module .fields dl");
    if (e.length == 0) return;
    var t, n;
    e.each(function(e, r) {
        t = $(".rtg-input input[type='text'], .rtg-input textarea",
                $(r)), n = $(".rtg-label label", $(r)).html(), $(r)
            .hasClass("required") && (n += " *"), t.attr(
                "placeholder", n)
    })
}

function initHideStateDropdown() {
    var e = $(".rtg-intl_address");
    if (e.length == 0) return;
    $(".ruby-state:not(.rtg-us_state)").hide(), e.each(function(e, t) {
        $(".rtg-country select", $(t)).change(function() {
            var e = $(this).val();
            e = e.toLowerCase();
            var n = $(".rtg-" + e + "_state", $(t));
            n.length == 0 && (n = $(".rtg-other_state", $(t))),
                $(".ruby-state", $(t)).hide(), n.show()
        }).trigger("change")
    })
}

function initCheckboxes() {
    var e = $("input[type='checkbox']");
    if (e.length == 0) return;
    e.each(function(e, t) {
        $(t).customInput()
    })
}

function initLanguageNav() {
}

function initDivetLinks() {
    $(window).trigger("overlay:init_links")
}

function initNavLinkActive() {
    $(".header-container .header-nav").eq(0).find("li").each(function(e, t) {
        var n = window.location.pathname,
            r = $(t).find("a").eq(0).attr("href");
        addHTTP(n) == r && $(t).addClass("active active-li")
    })
}

function navigationLandingFix() {
    $(window).on("layoutChange", function() {
        if ($(".navigation_landing").length > 0) {
            var e = $(".header-nav ul li.active .drop").height();
            $(".footer-container").css("padding-top", e + "px")
        }
    }), $(".navigation_landing").length > 0 && $(window).trigger(
        "layoutChange")
}

function initToolsSolutions() {
}

function showCache() {
}

function addHTTP(e) {
    if (typeof e == "undefined") return "";
    if (typeof e == "undefined") return;
    var t = window.location.host;
    return e.indexOf("http://") == 0 || e.indexOf("https://") == 0 || e.indexOf(
            "mailto:") == 0 ? e : e.substr(0, 1) != "/" ? "http://" + e :
        "http://" + t + e
}

function addHTTPS(e) {
    if (typeof e == "undefined") return;
    console.log("Creating absolute url for: " + e);
    if (typeof e == "undefined") return "";
    var t = window.location.host;
    return e.indexOf("http://") == 0 || e.indexOf("https://") == 0 || e.indexOf(
            "mailto:") == 0 ? e : e.substr(0, 1) != "/" ? "https://" + e :
        "https://" + t + e
}

function qualify(e) {
    var t = window.location.protocol;
    return t.indexOf("https:") == 0 ? addHTTPS(e) : addHTTP(e)
}

function strip_protocol(e) {
    return e.substr(e.indexOf("://") + 3)
}

function hyphenateTabs() {
    $(".main-header .main-header-btn-label").each(function(e, t) {
        var n = $(t).width(),
            r = $(t).text().replace(/^\s+|\s+$/g, ""),
            i = "";
        n > 115 && $(t).parents("a").addClass("hyphenate"), $(t).width(
            115)
    }), Hyphenator.run()
}

function makeDivetEllipsis() {
    $(".divet-lister .static-block-title").each(function(e, t) {
        var n = $(t).find(".static-block-title-inner");
        if ($(t).height() >= n.height()) return;
        var r = $(t).height();
        $(t).height(60);
        var i = 20,
            s = 0;
        while ($(t).height() < n.height()) {
            s++;
            var o = n.text();
            o = o.replace(/^\s+|\s+$/g, "");
            var u = o.split(" ");
            u.pop();
            var a = u.join(" ");
            n.text(a);
            if (s >= i) return !1
        }
        $(t).height(r), n.html(a + "<br>...")
    })
}

function loadFunctions() {
    var e = window.location.hash;
    if (e.indexOf("#!") != 0 && !$(window.location.hash).length &&
        getLayoutMode() != "desktop") {
        var t = 1;
        setTimeout(function() {
            window.scrollTo(0, t)
        }, 0)
    }
    $("html").addClass("iconic-loaded"), $("#overlay .overlay").show(), $(
        "#overlay .iconic-close").click(function() {
        $("#overlay").hide()
    })
}

function modernizrTouchFix() {
    navigator.userAgent.match(/IEMobile\/10\.0/) && $("html").removeClass(
        "no-touch").addClass("touch")
}

function isWindowsPhone() {
    return navigator.userAgent.match(/IEMobile\/10\.0/) ? !0 : !1
}

function createPhoneLinks() {
}

function androidFix() {
    var e = navigator.userAgent.toLowerCase(),
        t = e.indexOf("android") > -1;
    t && $("body").addClass("android")
}

function initSearchPageDropdown() {
}

function initCheckCookies() {
}

function isCookieFriendly() {
}

function setMasterCookie(e) {
}

function notifyOfCookieConsent() {
}

function runHandleMyBinderButton() {
}

function runCookieFunctions() {
}

function runAltBioCookie() {
}

function removeBioBottomMarginsForPrint() {
}

function updateShareThis() {
    var e = $(".social-share");
    if (e.length) {
        var t = [".email-li", ".linkedin-li", ".twitter-li", ".facebook-li",
                ".google-li"
            ],
            n = $.trim(parseUri(window.location.href).anchor || "");
        for (var r = 0; r < t.length; r++) {
            var i = t[r],
                s = e.find(i).find("a"),
                o = s.attr("data-url");
            s.attr("href", [o, encodeURIComponent(n)].join("%23"))
        }
    }
}

function updatePDFUrl() {
}

function fixPDF() {
}

function pdfFixForBio() {
}

function initVideoGallery() {
}

function fixTwoColTitleHeight() {
    $(window).resize(function() {
        var e = $(
                ".services_landing .two-col-lister .column-header-wrapper"
            ),
            t = $(e[0]).height(),
            n = $(e[1]).height(),
            r = t > n ? t : n;
        Modernizr.mq("(min-width: 1040px)") ? (e.height(r), $(
            ".services_landing .two-col-lister .column-header-wrapper"
        ).find(".h--large").addClass(
            "column-inner-position")) : ($(e[0]).css("height",
            "auto"), $(e[1]).css("height", "auto"), $(
            ".services_landing .two-col-lister .column-header-wrapper"
        ).find(".h--large").removeClass(
            "column-inner-position"))
    }), Modernizr.mq("(min-width: 1040px)") && $(window).trigger(
        "resize")
}
var console_debug = !0,
    mobile_debug = !1;
debug_mode_str = getParameterByName("debug_mode"), mobile_mode_str =
    getParameterByName("mobile_mode"), debug_mode_str.length == 0 && (
        console_debug = !1), mobile_mode_str.length && (mobile_debug = !0),
    console_debug ? $.browser.mozilla && typeof window.loadFirebugConsole !=
    "undefined" && window.loadFirebugConsole() : $.browser.msie ? (window.console = {},
        window.console.info = window.console.log = window.console.warn = window
        .console.error = function() {}) : (window.console = {}, window.console.info =
        window.console.log = window.console.warn = window.console.error =
        function() {});
var all_video_ids = [],
    current_layout_mode = "mobile",
    current_layout_mode_homepage = "mobile",
    binderTimeout, counter = 0,
    social_share_counter = 0,
    newsModuleAjaxing = !1,
    hash_interval_id, last_hash = "",
    hash_flag = !0,
    pageHash = "";
$(window).load(function() {
    loadFunctions()
}), isIpad() ? ($("html").addClass("ipad"), setTimeout(function() {
    $(window).trigger("load")
}, 3e3)) : isIphone() ? setTimeout(function() {
    $(window).trigger("load")
}, 3e3) : isDroid() && $("html").addClass("android"), $(document).ready(
    function() {
        initCheckCookies(), notifyOfCookieConsent(), androidFix(),
            modernizrTouchFix(), showCache(), initToolsSolutions(),
            checkBioOrigins(), $(window).on("overlay:ajax_load",
                checkBioOrigins_overlay), initTargetBlank($("body")),
            externalLinkInit(), initLayoutEvent(),
            prototypeDisableShareLinks(), initSearchPageDropdown(),
            initCustomSelect(), initFormPlaceholder(), initPlaceholder(),
            initHideStateDropdown(), initMenu(), initAccordion(), initTouch(),
            initGrid(), initLoadMore(), initCheckboxes(), initAddToBinder(),
            initVideoGallery(), initSocialNav(), initLanguageNav(), ieFix(),
            sampleToggleOverlay(), initDivetLinks(), createPhoneLinks(),
            isIpad() ? $("html").addClass("ipad") : isIphone() ? $("html").addClass(
                "iphone") : isDroid() && $("html").addClass("droid"), $.browser
            .msie && $("html").addClass("ie"), $(".lt-ie9").length > 0 &&
            initIEFix(), $(".lt-ie8").length > 0 && initIE7Fix(), (isIphone() ||
                isDroid() || isBlackBerry()) && !$(".video_gallery").length ?
            (fixRTEVideo(), fixMobileVideo()) : (fixRTEVideo(), initVideo()),
            fixRTEImagesIE8(), fixVideoSizing(), ($("html").hasClass("ipad") ||
                $("html").hasClass("iphone") || $("html").hasClass("droid")
            ) && fixMobile(), initAudio(), initMailtoDisclaimer(),
            initNavLinkActive(), navigationLandingFix(), hyphenateTabs(),
            makeDivetEllipsis(), removeBioBottomMarginsForPrint(), window.location
            .hash == "#pdfbuild" && fixPDF(), fixTwoColTitleHeight()
    }), $(window).on("load", function() {
    initSlideshows()
});


function initFullPageAjax() {
    $(window).on("fullpage:ajax_request", function(e, t) {
        pageHash > 0 || (pageHash = 0), $(".white-loader").show(),
            $(".white-loader").animate({
                opacity: .7
            }, 500, function() {}), $.get(t, {
                aj: "la"
            }, function(e, t, n) {
                e = $("<div>" + e + "</div>");
                if (e.find(".main-container").length > 0) {
                    $(".main-container").remove();
                    var r = $(".main-container", e);
                    $("#overlay").after(r), pageHash == 0 ?
                        checkBioOrigins() : checkBioOrigins(
                            pageHash)
                } else if (e.find(".services-la-container").length >
                    0) {
                    var i = e.find(".la-container");
                    $(".la-container").replaceWith(i)
                }
                $(".white-loader").animate({
                        opacity: 0
                    }, 1, function() {
                        $(this).hide()
                    }), initToolsSolutions(), initLanguageNav(),
                    initAddToBinder(), initSocialNav(),
                    initAccordion(), initSlideshows(), initGrid(),
                    initLoadMore(), initTargetBlank($("body")),
                    externalLinkInit(), $(
                        "#swipe-hint-container").length > 0 &&
                    $("#swipe-hint-container").remove(),
                    initMyBinder()
            }, "html")
    })
}
$(document).ready(function() {
    initFullPageAjax()
});

function clearCheckboxes() {
    $(".news-grid-filter-module input[type=checkbox]").each(function(e, t) {
        var n = $(t);
        n.is(":checked") && n.trigger("click")
    })
}

function loadCheckboxes(e) {
    if (!hasLoadedCheckboxes) {
        clearCheckboxes();
        for (var t = 0; t < e.length; t++) {
            var n = $(
                    ".news-grid-filter-module input[type=checkbox][value=" +
                    e[t] + "]"),
                r = n.is(":checked");
            r || n.click()
        }
    }
}

function initHistory() {
 
}
var hasCalledHistory = !1;
$(window).on("historyCalled", function() {
    hasCalledHistory = !0
});
var hasLoadedCheckboxes = !1;
$(window).on("loadedCheckboxes", function() {
        hasLoadedCheckboxes = !0
    }), $(".tags-nav a").on("click", function() {
        hasLoadedCheckboxes = !1
    }), $(document).ready(function() {
        initHistory()
    }), console.log(History.options, typeof History, typeof History.options),
    History.options.disableSuid = !0, History.options.html4Mode = !0, History.options
    .initialTitle = "W"

function recalibrateScrollParams() {
    accomplishScrollPoint = $(".header-container").height() + ($(
            ".arb-panel-1-middle").position().top - 50),
        accomplishScrollPoint = Math.floor(accomplishScrollPoint)
}

function recalibrateGrayLines() {
    if (getLayoutModeHomepage() == "mobile-homepage") return;
    $(".gray-line").show();
    var e = !1;
    $(".bordo-circle-1").hasClass("open") && (e = !0);
    var t = !1;
    $(".red-circle-1").hasClass("open") && (t = !0), $(".bordo-circle").each(
            function(e, t) {
                var n = parseInt($(t).attr("id").replace("bordo-", ""), 10),
                    r = $(t).css("left"),
                    i = $(t).css("top");
                $("#bordo-circle-" + n + "-gray-lines").css("left", r), $(
                    "#bordo-circle-" + n + "-gray-lines").css("top", i)
            }), $(".red-circle").each(function(e, t) {
            var n = parseInt($(t).attr("id").replace("red-", ""), 10),
                r = $(t).css("left"),
                i = $(t).css("top");
            $("#red-circle-" + n + "-gray-lines").css("left", r), $(
                "#red-circle-" + n + "-gray-lines").css("top", i)
        }), $(".gray-line").removeClass("open"), grayLineDefaultParams =
        new Array, $(".gray-line").each(function(e, t) {
            grayLineDefaultParams.push({
                title: "default",
                topPos: parseCssVal($(t).css("top")),
                leftPos: parseCssVal($(t).css("left")),
                width: $(t).width(),
                angle: convertMatrixToAngle($(t).find(
                    ".line-drawn"))
            })
        }), $(".gray-line").addClass("open"), grayLineOpenParams = new Array,
        $(".gray-line").each(function(e, t) {
            grayLineOpenParams.push({
                title: "default",
                topPos: parseCssVal($(t).css("top")),
                leftPos: parseCssVal($(t).css("left")),
                width: $(t).width(),
                angle: convertMatrixToAngle($(t).find(
                    ".line-drawn"))
            })
        }), $(".gray-line").removeClass("open"), e && $(
            ".bordo-grayline-container .gray-line").addClass("open"), t &&
        $(".red-grayline-container .gray-line").addClass("open")
}

function recalibrateMapCircleTransitionParams() {
    $(".location").removeClass("startState endState"), $(".location").addClass(
        "startState"), mapCircleStartParams = new Array;
    for (var e = 1; e <= $(".location").length; e++) {
        var t = $("loc-" + e);
        mapCircleStartParams.push({
            topPos: parseCssVal($(".loc-" + e).css("top")),
            leftPos: parseCssVal($(".loc-" + e).css("left"))
        })
    }
    $(".location").removeClass("startState endState"), $(".location").addClass(
        "endState"), mapCircleEndParams = new Array;
    for (var e = 1; e <= $(".location").length; e++) {
        var t = $("loc-" + e);
        mapCircleEndParams.push({
            topPos: parseCssVal($(".loc-" + e).css("top")),
            leftPos: parseCssVal($(".loc-" + e).css("left"))
        })
    }
    $(".map-bg").hasClass("shown") ? ($(".location").removeClass(
            "startState endState"), $(".location").addClass("endState"),
        $(".location").css("opacity", ""), $(".location").css("display",
            "")) : ($(".location").removeClass("startState endState"),
        $(".location").addClass("startState"), $(".location").css(
            "display", "")), $(".map-bg").hasClass("animated-in") && $(
        ".location-big").css("filter", "")
}

function recalibrateActiveIndicatorPosition() {
    var e = activeNewsSlide + 1,
        t = $(".blue-block").width(),
        n = parseCssVal($("#active-indicator").css("left")),
        r = parseCssVal($(".item").css("margin-right")),
        i = (e - 1) * (t + r);
    getLayoutModeHomepage() != "mobile-homepage" ? ($("#active-indicator").css(
        "left", i + "px"), $("#custom-pagination").css("left", "")) : (
        $("#custom-pagination").css("left", 70 - i + "px"), $(
            "#active-indicator").css("left", i + "px"))
}

function recalibrateLineTransitionParams() {
    var e = !1,
        t = !1;
    $(".bordo-circle-1").hasClass("not-loaded") ? e = !0 : $(
        ".bordo-circle-1").hasClass("open") && (t = !0);
    var n = !1,
        r = !1;
    $(".red-circle-1").hasClass("not-loaded") ? n = !0 : $(".red-circle-1")
        .hasClass("open") && (r = !0), $(".line").removeClass(
            "startState endState not-loaded"), $(".line").addClass(
            "not-loaded"), bordoLineDefaultParams = new Array, $(
            ".bordo-line").each(function(e, t) {
            bordoLineDefaultParams.push({
                color: "bordo",
                title: "default",
                topPos: parseCssVal($(t).css("top")),
                bottomPos: "auto",
                leftPos: parseCssVal($(t).css("left")),
                angle: convertMatrixToAngle($(t).find(
                    ".line-drawn")),
                width: $(t).width(),
                circleOpacity: $(t).css("opacity")
            })
        }), redLineDefaultParams = new Array, $(".red-line").each(function(
            e, t) {
            redLineDefaultParams.push({
                color: "red",
                title: "default",
                topPos: "auto",
                bottomPos: parseCssVal($(t).css("bottom")),
                leftPos: parseCssVal($(t).css("left")),
                angle: convertMatrixToAngle($(t).find(
                    ".line-drawn")),
                width: $(t).width(),
                circleOpacity: $(t).css("opacity")
            })
        }), $(".line").removeClass("startState endState not-loaded"), $(
            ".line").addClass("startState"), bordoLineStartParams = new Array,
        $(".bordo-line").each(function(e, t) {
            bordoLineStartParams.push({
                color: "bordo",
                title: "start",
                topPos: parseCssVal($(t).css("top")),
                bottomPos: "auto",
                leftPos: parseCssVal($(t).css("left")),
                angle: convertMatrixToAngle($(t).find(
                    ".line-drawn")),
                width: $(t).width(),
                circleOpacity: $(t).css("opacity")
            })
        }), redLineStartParams = new Array, $(".red-line").each(function(e,
            t) {
            redLineStartParams.push({
                color: "red",
                title: "start",
                topPos: "auto",
                bottomPos: parseCssVal($(t).css("bottom")),
                leftPos: parseCssVal($(t).css("left")),
                angle: convertMatrixToAngle($(t).find(
                    ".line-drawn")),
                width: $(t).width(),
                circleOpacity: $(t).css("opacity")
            })
        }), $(".line").removeClass("startState endState not-loaded"), $(
            ".line").addClass("endState"), bordoLineEndParams = new Array,
        $(".bordo-line").each(function(e, t) {
            bordoLineEndParams.push({
                color: "bordo",
                title: "end",
                topPos: parseCssVal($(t).css("top")),
                bottomPos: "auto",
                leftPos: parseCssVal($(t).css("left")),
                angle: convertMatrixToAngle($(t).find(
                    ".line-drawn")),
                width: $(t).width(),
                circleOpacity: $(t).css("opacity")
            })
        }), redLineEndParams = new Array, $(".red-line").each(function(e, t) {
            redLineEndParams.push({
                color: "red",
                title: "end",
                topPos: "auto",
                bottomPos: parseCssVal($(t).css("bottom")),
                leftPos: parseCssVal($(t).css("left")),
                angle: convertMatrixToAngle($(t).find(
                    ".line-drawn")),
                width: $(t).width(),
                circleOpacity: $(t).css("opacity")
            })
        }), $(".line").removeClass("startState endState"), t ? $(
            ".bordo-line").addClass("endState") : $(".bordo-line").addClass(
            "startState"), r ? $(".red-line").addClass("endState") : $(
            ".red-line").addClass("startState"), e && $(".bordo-line").removeClass(
            "startState endState").addClass("not-loaded"), n && $(
            ".red-line").removeClass("startState endState").addClass(
            "not-loaded")
}

function recalibrateCircleTransitionParams() {
    var e = !1,
        t = !1;
    $(".bordo-circle-1").hasClass("not-loaded") ? e = !0 : $(
        ".bordo-circle-1").hasClass("open") && (t = !0);
    var n = !1,
        r = !1;
    $(".red-circle-1").hasClass("not-loaded") ? n = !0 : $(".red-circle-1")
        .hasClass("open") && (r = !0), $(".circle").removeClass(
            "open not-loaded"), $(".circle").addClass("not-loaded"),
        bordoParamsDefault = {
            color: "bordo",
            title: "default",
            circle1Left: parseCssVal($(".bordo-circle-1").css("left")),
            circle2Left: parseCssVal($(".bordo-circle-2").css("left")),
            circle3Left: parseCssVal($(".bordo-circle-3").css("left")),
            circle1Top: parseCssVal($(".bordo-circle-1").css("top")),
            circle2Top: parseCssVal($(".bordo-circle-2").css("top")),
            circle3Top: parseCssVal($(".bordo-circle-3").css("top")),
            titleFontSize: parseCssVal($(".bordo-circle-1").find(
                ".circle-title").css("font-size")),
            widths: $(".bordo-circle-1").width(),
            heights: $(".bordo-circle-1").height(),
            headerTop: parseCssVal($(".bordo-circle-1").find(
                ".circle-title").css("top")),
            circleOpacity: $(".bordo-circle-1").find(".whole-circle").css(
                "opacity")
        }, redParamsDefault = {
            color: "red",
            title: "default",
            circle1Left: parseCssVal($(".red-circle-1").css("left")),
            circle2Left: parseCssVal($(".red-circle-2").css("left")),
            circle3Left: parseCssVal($(".red-circle-3").css("left")),
            circle1Bottom: parseCssVal($(".red-circle-1").css("bottom")),
            circle2Bottom: parseCssVal($(".red-circle-2").css("bottom")),
            circle3Bottom: parseCssVal($(".red-circle-3").css("bottom")),
            titleFontSize: parseCssVal($(".red-circle-1").find(
                ".circle-title").css("font-size")),
            widths: $(".red-circle-1").width(),
            heights: $(".red-circle-1").height(),
            headerTop: parseCssVal($(".red-circle-1").find(".circle-title")
                .css("top")),
            circleOpacity: $(".red-circle-1").find(".whole-circle").css(
                "opacity")
        }, $(".circle").removeClass("open not-loaded"), bordoParamsStart = {
            color: "bordo",
            title: "start",
            circle1Left: parseCssVal($(".bordo-circle-1").css("left")),
            circle2Left: parseCssVal($(".bordo-circle-2").css("left")),
            circle3Left: parseCssVal($(".bordo-circle-3").css("left")),
            circle1Top: parseCssVal($(".bordo-circle-1").css("top")),
            circle2Top: parseCssVal($(".bordo-circle-2").css("top")),
            circle3Top: parseCssVal($(".bordo-circle-3").css("top")),
            titleFontSize: parseCssVal($(".bordo-circle-1").find(
                ".circle-title").css("font-size")),
            widths: $(".bordo-circle-1").width(),
            heights: $(".bordo-circle-1").height(),
            headerTop: parseCssVal($(".bordo-circle-1").find(
                ".circle-title").css("top")),
            circleOpacity: $(".bordo-circle-1").find(".whole-circle").css(
                "opacity")
        }, redParamsStart = {
            color: "red",
            title: "start",
            circle1Left: parseCssVal($(".red-circle-1").css("left")),
            circle2Left: parseCssVal($(".red-circle-2").css("left")),
            circle3Left: parseCssVal($(".red-circle-3").css("left")),
            circle1Bottom: parseCssVal($(".red-circle-1").css("bottom")),
            circle2Bottom: parseCssVal($(".red-circle-2").css("bottom")),
            circle3Bottom: parseCssVal($(".red-circle-3").css("bottom")),
            titleFontSize: parseCssVal($(".red-circle-1").find(
                ".circle-title").css("font-size")),
            widths: $(".red-circle-1").width(),
            heights: $(".red-circle-1").height(),
            headerTop: parseCssVal($(".red-circle-1").find(".circle-title")
                .css("top")),
            circleOpacity: $(".red-circle-1").find(".whole-circle").css(
                "opacity")
        }, $(".circle").addClass("open"), bordoParamsEnd = {
            color: "bordo",
            title: "open",
            circle1Left: parseCssVal($(".bordo-circle-1").css("left")),
            circle2Left: parseCssVal($(".bordo-circle-2").css("left")),
            circle3Left: parseCssVal($(".bordo-circle-3").css("left")),
            circle1Top: parseCssVal($(".bordo-circle-1").css("top")),
            circle2Top: parseCssVal($(".bordo-circle-2").css("top")),
            circle3Top: parseCssVal($(".bordo-circle-3").css("top")),
            titleFontSize: parseCssVal($(".bordo-circle-1").find(
                ".circle-title").css("font-size")),
            widths: $(".bordo-circle-1").width(),
            heights: $(".bordo-circle-1").height(),
            headerTop: parseCssVal($(".bordo-circle-1").find(
                ".circle-title").css("top")),
            circleOpacity: $(".bordo-circle-1").find(".whole-circle").css(
                "opacity")
        }, redParamsEnd = {
            color: "red",
            title: "open",
            circle1Left: parseCssVal($(".red-circle-1").css("left")),
            circle2Left: parseCssVal($(".red-circle-2").css("left")),
            circle3Left: parseCssVal($(".red-circle-3").css("left")),
            circle1Bottom: parseCssVal($(".red-circle-1").css("bottom")),
            circle2Bottom: parseCssVal($(".red-circle-2").css("bottom")),
            circle3Bottom: parseCssVal($(".red-circle-3").css("bottom")),
            titleFontSize: parseCssVal($(".red-circle-1").find(
                ".circle-title").css("font-size")),
            widths: $(".red-circle-1").width(),
            heights: $(".red-circle-1").height(),
            headerTop: parseCssVal($(".red-circle-1").find(".circle-title")
                .css("top")),
            circleOpacity: $(".red-circle-1").find(".whole-circle").css(
                "opacity")
        }, t || $(".bordo-circle").removeClass("open"), r || $(
            ".red-circle").removeClass("open"), e && $(".bordo-circle").removeClass(
            "open").addClass("not-loaded"), n && $(".red-circle").removeClass(
            "open").addClass("not-loaded")
}

function fadeInbordoHeader() {
    if ($(".business-solutions-header").hasClass("active")) return;
    $(".business-solutions-header").animate({
        color: "#ffffff",
        "border-color": "#e9a42c"
    }, 500, function() {
        $(this).stop(!0, !0), $(this).css("color", ""), $(this).css(
            "border-color", ""), $(this).addClass("active")
    });
    if ($(".accomplished-header").hasClass("hovering") && $("html.touch").length ==
        0) return;
    $(".accomplished-header").animate({
        color: "#3b3b3b",
        "border-color": "transparent"
    }, 500, function() {
        $(this).stop(!0, !0), $(this).css("color", ""), $(this).css(
            "border-color", ""), $(this).removeClass(
            "active hovered hovering")
    })
}

function fadeInRedHeader() {

}

function openbordoCircles(e) {
    fadeInbordoHeader(), $(".bordo-circle").removeClass("active"), e.addClass(
        "active"), $(".black-gradient").addClass("active");
    var t = e.attr("id").replace("bordo-", "");
    $(".top-text").not(".top-text-" + t).fadeOut(500), $(".top-text-" + t).fadeIn(
        500);
    if (e.hasClass("open")) return !1;
    for (var n = 1; n <= $(".bordo-circle").length; n++) transitionLine($(
            "#bordo-line-" + n), bordoLineStartParams[n - 1],
        bordoLineEndParams[n - 1], 500), transitionCircle($(
            ".bordo-circle-" + n), bordoParamsStart, bordoParamsEnd,
        500);
    return !1
}

function openRedCircles(e) {

}

function transitionLine(e, t, n, r, i) {
    typeof i == "undefined" && (i = !1);
    if (n.topPos == "auto") var s = "auto";
    else var s = n.topPos + "px"; if (n.bottomPos == "auto") var o = "auto";
    else var o = n.bottomPos + "px";
    var u = n.circleOpacity;
    $.browser.msie && $.browser.version <= 9 && ($(".line").css("opacity",
        "1"), u = 1), e.css("text-indent", "0"), e.animate({
        top: s,
        left: n.leftPos + "px",
        bottom: o,
        width: n.width,
        "text-indent": "100px",
        opacity: u
    }, {
        step: function(r, i) {
            if (i.prop == "textIndent") {
                var s = n.angle - t.angle,
                    o = r * s / 100,
                    u = t.angle + o;
                e.find(".line-drawn").css("rotate", u + "deg")
            }
        },
        duration: r,
        complete: function() {
            e.removeClass("startState endState not-loaded"), n.title ==
                "default" ? e.addClass("not-loaded") : n.title ==
                "start" ? e.addClass("startState") : n.title ==
                "end" && e.addClass("endState"), e.css({
                    left: "",
                    bottom: "",
                    width: "",
                    "text-indent": "",
                    top: ""
                }), $.browser.msie && $.browser.version < 9 ? e
                .find(".line-drawn").removeAttr("style") : (e.css(
                    "opacity", ""), e.find(".line-drawn").css({
                    "-webkit-transform": "",
                    "-moz-transform": "",
                    "-ms-transform": "",
                    transform: ""
                })), i && (n.color == "red" ?
                    redCirclesAnimating = !1 : n.color ==
                    "bordo" && (bordoCirclesAnimating = !1))
        }
    })
}

function transitionCircle(e, t, n, r, i) {
    typeof i == "undefined" && (i = !1);
    var s = 0,
        o = 0,
        u = 0,
        a = 0,
        f = n.heights,
        l = n.widths;
    t.title == "open" && n.title == "default" && (l = t.widths, f = t.heights);
    if (e.hasClass("bordo-circle")) {
        var c = e.attr("id").replace("bordo-", "");
        a = "auto", u = "auto", c == "1" && (s = n.circle1Left, o = n.circle1Top),
            c == "2" && (s = n.circle2Left, o = n.circle2Top), c == "3" &&
            (s = n.circle3Left, o = n.circle3Top)
    } else if (e.hasClass("red-circle")) {
        var c = e.attr("id").replace("red-", "");
        o = "auto", c == "1" && (s = n.circle1Left, u = n.circle1Bottom), c ==
            "2" && (s = n.circle2Left, u = n.circle2Bottom), c == "3" && (s =
                n.circle3Left, u = n.circle3Bottom)
    }
    e.animate({
        "border-spacing": "100px",
        left: s,
        top: o,
        bottom: u,
        width: l,
        height: f
    }, {
        step: function(r, i) {
            n.color == "bordo" && (i.prop == "left" && $(
                "#bordo-circle-" + c + "-gray-lines").css(
                "left", r + "px"), i.prop == "top" && $(
                "#bordo-circle-" + c + "-gray-lines").css(
                "top", r + "px")), n.color == "red" && (i.prop ==
                "left" && $("#red-circle-" + c +
                    "-gray-lines").css("left", r + "px"), i
                .prop == "bottom" && $("#red-circle-" + c +
                    "-gray-lines").css("bottom", r + "px"));
            if (i.prop == "borderSpacing") {
                var s = r / 100;
                if (!$(this).hasClass("open")) var o = Math.max(
                    1 - s * 2, 0);
                else var o = Math.max(.05 * r - 4, 0);
                t.title == "start" && n.title == "open" &&
                    getLayoutModeHomepage() !=
                    "mobile-homepage" && $(".gray-line").each(
                        function(e, t) {
                            if (n.color == "bordo" && $(t).hasClass(
                                "red")) return;
                            if (n.color == "red" && $(t).hasClass(
                                "bordo")) return;
                            var r = grayLineOpenParams[e].leftPos -
                                grayLineDefaultParams[e].leftPos,
                                i = r * s;
                            i += grayLineDefaultParams[e].leftPos,
                                $(".gray-line").eq(e).css(
                                    "left", i + "px");
                            var r = grayLineOpenParams[e].topPos -
                                grayLineDefaultParams[e].topPos,
                                o = r * s;
                            o += grayLineDefaultParams[e].topPos,
                                $(".gray-line").eq(e).css("top",
                                    o + "px")
                        });
                if (t.title == "default" && n.title == "start") {
                    var u = r / 100;
                    e.find(".whole-circle").css("opacity", u);
                    return
                }
                if (n.title == "default") {
                    var u = 1 - r / 100;
                    e.find(".whole-circle").css("opacity", u);
                    return
                }
                e.find(".circle-link").css("opacity", o), e.find(
                    ".iconic-arrowRight").css("opacity", o);
                var a = n.headerTop - t.headerTop,
                    f = a * r / 100,
                    l = t.headerTop + f;
                e.find(".circle-title").css("top", l);
                var h = n.titleFontSize - t.titleFontSize,
                    p = h * r / 100,
                    d = t.titleFontSize + p;
                e.find(".circle-title").css("font-size", d +
                    "px")
            }
        },
        duration: r,
        complete: function() {
            e.css("border-spacing", 0), e.removeClass(
                    "not-loaded open"), n.title == "default" ?
                e.addClass("not-loaded") : n.title == "open" &&
                e.addClass("open"), e.removeClass("hovered"), e
                .css({
                    left: "",
                    right: "",
                    bottom: "",
                    width: "",
                    height: ""
                }), e.css("top", ""), e.find(".circle-title").css(
                    "top", ""), e.find(".circle-title").css(
                    "font-size", ""), e.find(".circle-link").css(
                    "opacity", ""), e.find(".iconic-arrowRight")
                .css("opacity", ""), e.find(".whole-circle").css(
                    "opacity", ""), e.find(".whole-circle").removeAttr(
                    "style"), parseInt(e.find(".circle-link").css(
                    "opacity"), 10) > 0 ? e.find(".circle-link")
                .css("display", "block") : e.find(
                    ".circle-link").css("display", "none"), n.color ==
                "bordo" && (n.title == "open" ? ($(
                    ".bordo-grayline-container .gray-line"
                ).addClass("open"), $(
                    ".bordo-grayline-container .gray-line"
                ).css({
                    left: "",
                    top: ""
                })) : $(
                    ".bordo-grayline-container .gray-line"
                ).removeClass("open")), n.color == "red" && (n.title ==
                    "open" ? ($(
                        ".red-grayline-container .gray-line"
                    ).addClass("open"), $(
                        ".red-grayline-container .gray-line"
                    ).css({
                        left: "",
                        top: ""
                    })) : $(
                        ".red-grayline-container .gray-line").removeClass(
                        "open")), i && (n.color == "red" ?
                    redCirclesAnimating = !1 : n.color ==
                    "bordo" && (bordoCirclesAnimating = !1))
        }
    })
}

function animateMapIn() {

}

function initMapEvents() {

}

function fadeOutMapCircles() {
    if (getLayoutModeHomepage() == "desktop-homepage") return;
    $(".map-bg").removeClass("animated-in");
    var e = 1500,
        t = 2e3;
    $(".location").animate({
        opacity: 0
    }, e, function() {
        $(".map-bg").addClass("animated-in"), $(".location").css(
            "display", ""), $(".location").css("opacity", "")
    }), $(".location-big").fadeIn(t, function() {
        $(".location-big").css("display", "")
    })
}

function initCircleHovers() {
    $(".circle-content").on("mouseover", function() {
        var e = $(this).parents(".circle");
        if (e.hasClass("active")) return
    }), $(".circle-content").on("mouseleave", function() {
        var e = $(this).parents(".circle");
        if (e.hasClass("active")) return
    })
}

function initHomepageSlideshows() {
    $(".number-slideshow").slidesjs({
        navigation: {
            effect: "fade"
        },
        pagination: {
            effect: "fade"
        },
        effect: {
            fade: {
                speed: 300,
                crossfade: !1
            }
        },
        callback: {
            complete: function(e) {
                $(".number-element").each(function(e, t) {
                    $(t).find(".numbers-value").html(0)
                }), $(".number-slideshow").removeClass(
                    "flipping"), scrollSlideNumbers($(
                    ".number-slideshow li").eq(e - 1))
            }
        }
    }), $(".number-scroll-left").on("click", function() {
        $(".slidesjs-previous").trigger("click")
    }), $(".number-scroll-right").on("click", function() {
        $(".slidesjs-next").trigger("click")
    });
    var e;
    $("#news-slideshow ul").slidesjs({
        disable_touch: !0,
        navigation: {
            effect: "fade"
        },
        pagination: {
            effect: "fade"
        },
        effect: {
            fade: {
                speed: 300,
                crossfade: !0
            }
        },
        callback: {
            start: function(e) {},
            complete: function(e) {}
        }
    }), $("#news-slideshow .item").on("click", function(e) {
        return clearInterval(newsAutoInterval), isTouchMobile ||
            moveToNewsSlide($(this)), !1
    }), checkTouchMobile(), isTouchMobile || ($("#news-slideshow .item")
        .on("mouseenter", function() {
            if ($(this).find(".item-name").hasClass("active"))
                return;
            $(this).find(".item-name").stop(!0, !0).animate({
                color: "#009ede"
            }, 500, function() {
                $(this).addClass("hovered"), $(this).css(
                    "color", "")
            })
        }), $("#news-slideshow .item").on("mouseleave", function() {
            if ($(this).find(".item-name").hasClass("active"))
                return;
            $(this).find(".item-name").stop(!0, !0).animate({
                color: "#3b3b3b"
            }, 500, function() {
                $(this).removeClass("hovered"), $(this).css(
                    "color", "")
            })
        })), newsAutoInterval = setInterval(function(e) {
        activeNewsSlide++, activeNewsSlide >= $(
            "#news-slideshow .item").length && (activeNewsSlide =
            0), moveToNewsSlide($("#news-slideshow .item").eq(
            activeNewsSlide))
    }, 5e3)
}

function moveToNewsSlide(e) {
    if (isNewsSliding) return !1;
    isNewsSliding = !0, $(e).find(".item-name").addClass("active");
    var t = parseInt($(e).attr("data-id"), 10);
    activeNewsSlide = t - 1;
    var n = $(".blue-block").width(),
        r = parseCssVal($("#active-indicator").css("left")),
        i = parseCssVal($(".item").css("margin-right")),
        s = (t - 1) * (n + i);
    $("#active-indicator").stop(!0, !0).animate({
        left: s + "px"
    }, {
        step: function(e, t) {
            if (getLayoutModeHomepage() == "mobile-homepage") {
                var n = 70 - e;
                $("#custom-pagination").css("left", n + "px")
            }
        },
        duration: 500,
        complete: function() {
            $("#news-slideshow .slidesjs-pagination li a").eq(t -
                1).trigger("click"), isNewsSliding = !1
        }
    }), $(".item-name").not(".item-" + t + "-name").animate({
        color: "#3b3b3b"
    }, 500, function() {
        $(this).removeClass("active")
    }), $(".item-" + t + "-name").stop(!0, !0).animate({
        color: "#009ede"
    }, 500, function() {
        $(this).css("color", "")
    })
}

function checkTouchMobile() {
    getLayoutModeHomepage() == "mobile-homepage" && $(".touch").length > 0 ?
        isTouchMobile = !0 : isTouchMobile = !1
}

function recalibrateTouchMobile() {
    checkTouchMobile(), isTouchMobile && Hammer($("#arb-panel-4")).on(
        "drag", function(e) {
            e.gesture.direction == Hammer.DIRECTION_LEFT &&
                isNewsSliding == 0 ? (clearInterval(newsAutoInterval),
                    activeNewsSlide++, activeNewsSlide >= $(
                        "#news-slideshow .item").length && (
                        activeNewsSlide = 0), moveToNewsSlide($(
                        "#news-slideshow .item").eq(activeNewsSlide))) :
                e.gesture.direction == Hammer.DIRECTION_RIGHT &&
                isNewsSliding == 0 && (clearInterval(newsAutoInterval),
                    activeNewsSlide--, activeNewsSlide < 0 && (
                        activeNewsSlide = $("#news-slideshow .item").length -
                        1), moveToNewsSlide($("#news-slideshow .item").eq(
                        activeNewsSlide)))
        })
}

function bordoDefaultToOpen() {
    if (!$(".bordo-circle-1").hasClass("not-loaded")) return;
    $(".bordo-circle").removeClass("active hovered");
	$(".black-gradient").removeClass("active");
    if (bordoCirclesAnimating) return;
    bordoCirclesAnimating = !0;
    var e = [1e3, 1400, 1600],
        t = !1;
    for (var n = 1; n <= $(".bordo-circle").length; n++) n == $(
        ".bordo-circle").length && (t = !0), transitionLine($(
            "#bordo-line-" + n), bordoLineDefaultParams[n - 1],
        bordoLineStartParams[n - 1], e[n - 1], t), transitionCircle($(
            ".bordo-circle-" + n), bordoParamsDefault,
        bordoParamsStart, e[n - 1], t)
}

function redDefaultToOpen() {

}

function bordoOpenToDefault() {
    if ($(".bordo-circle-1").hasClass("not-loaded")) return;
    if (bordoCirclesAnimating) return;
    bordoCirclesAnimating = !0;
    var e = [1e3, 1400, 1600];
    $(".bordo-circle").removeClass("active"), $(".top-text").fadeOut(500);
    var t = !1;
    for (var n = 1; n <= $(".bordo-circle").length; n++) {
        n == $(".bordo-circle").length ? t = !0 : t = !1;
        var r = bordoLineStartParams[n - 1],
            i = bordoParamsStart;
        $(".bordo-circle-" + n).hasClass("open") && (r =
                bordoLineEndParams[n - 1], i = bordoParamsEnd),
            transitionLine($("#bordo-line-" + n), r,
                bordoLineDefaultParams[n - 1], e[n - 1], t),
            transitionCircle($(".bordo-circle-" + n), i,
                bordoParamsDefault, e[n - 1], t)
    }
}

function redOpenToDefault() {

}

function initNumbersFlip() {
    $(".number-element").each(function(e, t) {
        var n = $(t).find(".numbers-value").html();
        $(t).find(".numbers-value").html(0), $(t).attr(
            "data-number", n)
    })
}

function scrollSlideNumbers(e) {
    if ($(".number-slideshow").hasClass("flipping")) return;
    $(".number-slideshow").addClass("flipping");
    var t = 0;
    typeof numberFlip != "undefined" && clearInterval(numberFlip);
    var n = 0;
    e.find(".number-element").each(function(e, t) {
        n = Math.max(n, parseInt($(t).attr("data-number"), 10))
    }), numberFlip = setInterval(function() {
        var r = $(e).find(".number-element");
        for (var i = 0; i < $(e).find(".number-element").length; i++) {
            var s = $(r.get(i)),
                o = s.find(".numbers-value").html();
            o = parseInt(o, 10);
            var u = s.attr("data-number");
            u = parseInt(u, 10), o + 1 < u && o++, s.find(
                ".numbers-value").html(o)
        }
        t++, t > n && (clearInterval(numberFlip), $(
            ".number-slideshow").removeClass("flipping"))
    }, 35)
}

function initCircleEvents() {
    $(".touch").length == 0 || $(".blackberry").length > 0 ? ($(
        ".bordo-circle").on("click", function(e) {
        return $(".bordo-circle").stop(!0, !0), $(
            ".bordo-line").stop(!0, !0), openbordoCircles(
            $(this)), e.stopPropagation(), !1
    }), $(".red-circle").on("click", function(e) {
        return $(".red-circle").stop(!0, !0), $(".red-line").stop(!
                0, !0), openRedCircles($(this)), e.stopPropagation(), !
            1
    })) : (Hammer($(".bordo-circle")).on("tap", function(e) {
        return $(".bordo-circle").stop(!0, !0), $(
            ".bordo-line").stop(!0, !0), openbordoCircles(
            $(this)), e.stopPropagation(), !1
    }), Hammer($(".red-circle")).on("tap", function(e) {
        return $(".red-circle").stop(!0, !0), $(".red-line").stop(!
                0, !0), openRedCircles($(this)), e.stopPropagation(), !
            1
    })), $(window).on("layoutChange:homepage", function() {
        $(".circle").stop(!0, !0), $(".line").stop(!0, !0),
            recalibrateCircleTransitionParams(),
            recalibrateMapCircleTransitionParams(),
            recalibrateLineTransitionParams(),
            recalibrateScrollParams(),
            recalibrateActiveIndicatorPosition(),
            recalibrateGrayLines(), recalibrateTouchMobile(),
            initMapEvents(), scrollCheckSet || (scrollCheckSet = !0,
                setInterval(scrollCheck, 200)),
            getLayoutModeHomepage() == "mobile-homepage" ? $(
                "#homepage-search").attr("placeholder",
                "Search by name, service, sector") : $(
                "#homepage-search").attr("placeholder",
                "Meet the team. Search for people by name, service, sector"
            ), $.browser.msie && $.browser.version <= 9 && ($(
                "#homepage-search").val(""), $(
                "#homepage-search").placeholder())
    })
}

function convertMatrixToAngle(e) {
    var t = e.get(0);
    if ($.browser.msie && $.browser.version < 9) var n = e.css("filter");
    else var r = window.getComputedStyle(t, null),
        n = r.getPropertyValue("-webkit-transform") || r.getPropertyValue(
            "-moz-transform") || r.getPropertyValue("-ms-transform") ||
        r.getPropertyValue("-o-transform") || r.getPropertyValue(
            "transform") || "fail...";
    var i = n.split("(")[1];
    if (typeof i == "undefined") return;
    i = i.split(")")[0], i = i.split(",");
    var s = i[0].replace("M11=", ""),
        o = i[1].replace("M12=", ""),
        u = i[2].replace("M21=", ""),
        a = i[3].replace("M22-", ""),
        f = Math.sqrt(s * s + o * o),
        l = Math.round(Math.atan2(o, s) * (180 / Math.PI));
    return l = Math.abs(l), l
}

function parseCssVal(e) {
    if (typeof e == "undefined") return "auto";
    var t = parseInt(e.replace("px", ""), 10);
    return isNaN(t) && (t = "auto"), t
}

function initScrollEvents() {
    $(".touch").length == 0 || $(".blackberry").length > 0 ? ($(
        ".accomplished-header").on("click", function() {
        $("body, html").animate({
            scrollTop: accomplishScrollPoint
        }, 2e3, function() {})
    }), $(".business-solutions-header").on("click", function() {
        $("body, html").animate({
            scrollTop: 0
        }, 2e3, function() {})
    })) : (Hammer($(".accomplished-header")).on("tap", function() {
        $("body, html").animate({
            scrollTop: accomplishScrollPoint
        }, 2e3, function() {})
    }), Hammer($(".business-solutions-header")).on("tap", function() {
        $("body, html").animate({
            scrollTop: 0
        }, 2e3, function() {})
    })), $(window).load(function() {
        $(window).scroll(function(e) {
            scrollFunctions()
        }), Hammer($("html, body")).on("drag", function() {
            scrollFunctions()
        })
    }), $(document).on("mousewheel", function(e, t, n, r) {
        if (scrollTop < accomplishScrollPoint && $(
            ".header-nav.section-toggled").length == 0) {
            e.preventDefault();
            if (isScrolling) return;
            t < 0 && scrollToAccomplish(), t > 0 && scrollToTop()
        }
    }), $(document).on("keydown", function(e, t) {
        if ($(".search-nav input:focus").length > 0) return;
        if ($(".header-nav.section-toggled").length > 0) return !0;
        scrollTop < accomplishScrollPoint && (e.which == 40 ? (e.stopPropagation(),
                e.preventDefault(), scrollToAccomplish()) : e.which ==
            38 && (e.stopPropagation(), e.preventDefault(),
                scrollToTop()))
    })
}

function scrollCheck() {
    scrollTop = $(window).scrollTop(), $("html.touch").length > 0 &&
        scrollFunctions(), scrollTop == scrollPrevCheck && (scrollTop >=
            accomplishScrollPoint / 2 ? (fadeInRedHeader(),
                redDefaultToOpen(), bordoOpenToDefault()) : (
                fadeInbordoHeader(), bordoDefaultToOpen(),
                redOpenToDefault())), scrollPrevCheck = scrollTop
}

function scrollFunctions() {
    scrollPrev = scrollTop, scrollTop = $(window).scrollTop(), scrollTop <=
        accomplishScrollPoint / 2 && scrollTop <= scrollPrev || scrollTop ==
        0 ? bordoDefaultToOpen() : scrollTop >= 100 && scrollTop >
        scrollPrev && bordoOpenToDefault(), scrollTop >=
        accomplishScrollPoint / 2 && scrollTop > scrollPrev ?
        redDefaultToOpen() : scrollTop <= 400 && scrollTop < scrollPrev &&
        redOpenToDefault(), scrollTop >= accomplishScrollPoint / 2 ?
        fadeInRedHeader() : fadeInbordoHeader(), scrollTop >
        accomplishScrollPoint, isOnScreen($(".map-bg")) && animateMapIn(),
        isOnScreen($(".number-element").eq(0)) && $(".number-slideshow li")
        .each(function(e, t) {
            if (e != 0) return;
            scrollSlideNumbers($(t))
        })
}

function scrollToAccomplish() {
    if (isScrolling) return;
    isScrolling = !0, $("body, html").animate({
        scrollTop: accomplishScrollPoint + 1
    }, 2e3, function() {
        isScrolling = !1, $(this).stop(!0, !0)
    })
}

function scrollToTop() {
    if (isScrolling) return;
    isScrolling = !0, $("body, html").animate({
        scrollTop: 0
    }, 2e3, function() {
        isScrolling = !1, $(this).stop(!0, !0)
    })
}

function isOnScreen(e) {
    return false
}

function isBlackberry() {
    navigator.userAgent.match(/BlackBerry/i) ? $("html").addClass(
        "blackberry") : $("html").addClass("no-blackberry")
}

function initHeaderFade() {
    $(".accomplished-header, .business-solutions-header").on("mouseenter",
        function() {
            $(this).addClass("hovering");
            if ($(this).hasClass("active")) return;
            $(this).stop(!0, !0).animate({
                color: "#ffffff"
            }, 500, function() {
                $(this).addClass("hovered"), $(this).css(
                    "color", "")
            })
        }), $(".accomplished-header, .business-solutions-header").on(
        "mouseleave", function() {
            $(this).removeClass("hovering");
            if ($(this).hasClass("active")) return;
            $(this).stop(!0, !0).animate({
                color: "#3b3b3b"
            }, 500, function() {
                $(this).removeClass("hovered hovering"), $(this)
                    .css("color", "")
            })
        })
}

function replaceCurlyBraces() {
    var e =
        ".circle-title, .circle-link-text, .top-text, .bottom-text, .number-slides-header, .numbers-caption, .news-slideshow-header, .news-item, .publication-link, .business-solutions-header, .accomplished-header";
    $(e).each(function(e, t) {
        var n = $(t).html().replace(/\u201c/g, '"'),
            r = n.replace(/\u201d/g, '"');
        $(t).html(r), typeof String.prototype.trim != "function" &&
            (String.prototype.trim = function() {
                return this.replace(/^\s+|\s+$/g, "")
            });
        var i = $(t).html().trim(),
            s = 0,
            o = "\u201c",
            u = 0,
            a = 0;
        while (i.indexOf('"', u) >= 0 && a < 120) {
            s++, a++, s % 2 == 0 ? o = "\u201d" : o = "\u201c", u =
                i.indexOf('"', u);
            var f = isBetweenAngleBrackets(i, u);
            if (f > 0) {
                u = i.indexOf('"', f), u == -1 && (u = 9999999), s--;
                continue
            }
            i = i.substr(0, u) + o + i.substr(u + 1)
        }
        $(t).html(i)
    })
}

function isBetweenAngleBrackets(e, t) {
    var n = e.indexOf("<"),
        r = e.indexOf(">"),
        i = 0;
    while (n >= 0 && r >= 0 && i < 120) {
        i++;
        if (n > t) return -1;
        if (t > n && t < r) return r;
        n = e.indexOf("<", r), r = e.indexOf(">", n)
    }
    return -1
}

function modernizrTouchFix() {
    navigator.userAgent.match(/IEMobile\/10\.0/) && $("html").removeClass(
        "no-touch").addClass("touch")
}
var bordoParamsDefault, bordoParamsStart, bordoParamsEnd, redParamsDefault,
    redParamsStart, redParamsEnd, mapCircleStartParams, mapCircleEndParams,
    bordoLineDefaultParams, bordoLineStartParams, bordoLineEndParams,
    redLineDefaultParams, redLineStartParams, redLineEndParams,
    grayLineDefaultParams, grayLineOpenParams, bordoHasOpened = !1,
    redHasOpened = !1,
    isScrolling = !1,
    isNewsSliding = !1,
    activeNewsSlide = 0,
    accomplishScrollPoint, redCirclesAnimating = !1,
    bordoCirclesAnimating = !1,
    isTouchMobile = !1,
    newsAutoInterval, scrollTop = 0,
    scrollPrev = 0,
    scrollCheckSet = !1,
    scrollPrevCheck = 0;
$(document).ready(function() {
    if ($(".homepage").length == 0) return;
    $(".overlay-container").remove(), modernizrTouchFix(), isBlackberry(),
        initCircleHovers(), initHomepageSlideshows(), initNumbersFlip(),
        isIphone() ? $(window).load(function() {
            setTimeout(function() {
                initCircleEvents(), initScrollEvents(),
                    initHeaderFade(), $(window).trigger(
                        "layoutChange:homepage")
            }, 500)
        }) : (initCircleEvents(), initScrollEvents(), initHeaderFade()),
        replaceCurlyBraces()
}), $(window).load(function() {
    $(window).trigger("layoutChange:homepage"), $(window).trigger(
        "scroll")
});

function initBinder() {
}

function initNonBinder() {
}


(function() {
    var e = {
        options: {
            labelObj: $("<div/>"),
            bodyObj: $("<div/>"),
            defaultOpen: !1
        },
        _create: function() {
            var e = this;
            e._model = {
                isOpen: !1,
                isAnimating: !1
            }, e._classes = {
                isOpen: "genericAccordion-active"
            }, e._handleDefaultState(), e._initAccordion()
        },
        _handleDefaultState: function() {
            var e = this;
            e.options.defaultOpen ? (e.options.labelObj.addClass(e._classes
                    .isOpen), e._model.isOpen = !0, e.options.bodyObj
                .slideDown(0)) : e.options.bodyObj.slideUp(0)
        },
        _initAccordion: function() {
            function t() {
                e.options.bodyObj.is(":visible") ? e.toggle(
                    "close") : e.toggle("open")
            }
            var e = this;
            e.options.labelObj.on("click", t)
        },
        toggle: function(e) {
            function r(e) {
                t._model.isOpen = e === "open", t._model.isAnimating = !
                    1, e === "open" ? (t.options.labelObj.addClass(
                            t._classes.isOpen), !isIpad() && !
                        isIphone() && t.options.bodyObj.find(
                            "input[type=text]").focus()) : t.options
                    .labelObj.removeClass(t._classes.isOpen), n
                    .resolve()
            }
            var t = this,
                n = $.Deferred();
            if (t._model.isAnimating) return;
            return t._model.isAnimating = !0, e === "open" ? t.options
                .bodyObj.stop().slideDown(500, r.bind(t, "open")) :
                t.options.bodyObj.stop().slideUp(500, r.bind(t,
                    "close")), n.promise()
        },
        isOpen: function() {
            var e = this;
            return e._model.isOpen
        },
        isAnimating: function() {
            var e = this;
            return e._model.isAnimating
        }
    };
    $.widget("ws.genericAccordion", e)
})();

(function() {
    function s() {
		
    }

    function o(e) {
		
    }

    function u() {
		
    }

    function a() {

    }

    function f(e) {
        typeof e != "undefined" && e()
    }

    function l(e) {
		
    }

    function c(e) {
        var t = $("#" + e),
            n = t.html(),
            r = t.prev();
        r.empty()
    }

    function h(e, t, n, r) {
    }

    function p(e, t, n, r) {
        if (t.hits.hits.length === 0 && r) return;
        h(e, t, !1, n)
    }

    function d(e, t) {
        var n = $("#" + e),
            r = n.html(),
            i = n.prev(),
            s = _.template(r, {
                data: t
            }),
            o = $("<div></div>").html(s);
        o = o.children();
        var u = i.children();
        i.isotope("remove", u), i.isotope("insert", o)
    }

    function v(e, t, n, i, s) {
		
    }

    function m(e, t, n) {
		
    }

    function g() {
		
    }

    function y(e, t) {

    }

    function b() {
		
    }

    function w() {
        $(".who-we-are form, .wwd-arb form").each(function(e, t) {
            var n = $("button", t);
            test_form = $(t), n.click(function() {
                $(t).trigger("submit")
            })
        })
    }

    function E() {
        var e;
        if ($("body.experience_landing").length > 0) e = $(
            ".prof-search-module form button");
        else {
            if (!($("body.homepage").length > 0)) return;
            e = $("form.search-team button")
        }
        $(e).click(function() {
            return $(this).parents("form").submit(), !1
        })
    }

    function S() {
        var e = $(".header-module").children(".contains-data"),
            t = e.length;
        if (!e.length) return;
        e[0].style.marginLeft = 16.5 * (3 - t) + "%";
        for (var n = 1; n < t; n++) e[n].style.marginLeft = "auto"
    }

    function x(e, t) {
        $(".white-loader").animate({
            opacity: 0
        }, e || 1, function() {
            $(this).hide(), $.isFunction(t) && t()
        })
    }

    function T() {
        var e = $(".attorney_search_results"),
            t = $(".general_search_results"),
            n, r;
        e.length ? (n = e, r = "attorney") : t.length && (t.hasClass(
                    "news_search_results") ? r = "news" : t.hasClass(
                    "sector_service_search_results") ? r =
                "sector_service" : r = "site_search", n = t), n && n.length &&
            n.searchManager({
                type: r,
                applyTemplate: h,
                removeLoader: x,
                clearTemplate: c,
                initLoadMore: y
            })
    }

    function N() {
        function e(e) {
            e.preventDefault();
            var t = this.action,
                n = $(this),
                r = n.serialize();
            r.indexOf("+") > -1 && (r = r.replace(/\+/g, "%20")), t
                .indexOf("?") > -1 ? window.location.href = [t, r].join(
                    "&") : window.location.href = [t, r].join("?")
        }
        $(
            "#scroll-wrapper form, .header-nav .who-we-are form, .header-nav .wwd-arb form, .experience_landing .main-container form"
        ).on("submit", e)
    }
    var e = 11,
        t = 12,
        n = 13,
        r = function(e) {
            var t = window.location.pathname,
                n = [];
            for (var r in e) n.push(r + "=" + JSON.stringify(e[r]));
            var i = n.length > 0 ? "?" + n.join("&") : "";
            ga("send", "pageview", t + i)
        },
        i = function(e, t) {
            var n = $(e).attr("title"),
                r = $(e).parent(),
                i, s = !0;
            $(e).multiselect({
                    noneSelectedText: n,
                    selectedText: n + " (#&nbsp;selected)",
                    checkAllText: "Select All",
                    uncheckAllText: "Deselect All",
                    beforeopen: function(e, t) {},
                    open: function(e, t) {
                        s = !1;
                        var n = i.outerHeight() - 15;
                        i.css("width", 0);
                        var o = r.outerWidth() - 2;
                        i.css("width", o), $(".lt-ie9").length == 0 &&
                            r.css({
                                "margin-bottom": -1 * n + "px"
                            }), r.addClass("ui-multiselect-active")
                    },
                    beforeclose: function() {
                        r.css({
                            "margin-bottom": ""
                        })
                    },
                    close: function() {
                        if (s) return;
                        s = !0, r.removeClass(
                            "ui-multiselect-active"), f(t)
                    },
                    checkAll: function(e, n) {
                        $("label", i).addClass(
                            "ui-multiselect-checked"), f(t)
                    },
                    uncheckAll: function(e, n) {
                        $("label", i).removeClass(
                            "ui-multiselect-checked"), f(t)
                    },
                    click: function(e, n) {
                        var r = $(e.currentTarget).parent();
                        n.checked ? r.addClass(
                            "ui-multiselect-checked") : r.removeClass(
                            "ui-multiselect-checked"), f(t)
                    }
                }), i = $(e).multiselect("widget"), $(".lt-ie9").length ==
                0 && (r.append(i), i.css("position", "static")), $(
                    "label:has(input[checked])", i).addClass(
                    "ui-multiselect-checked")
        };
    $(window).on("thoughtLeadershipQuery blogQuery", function(e, t) {
        v(t)
    }), $(document).ready(function() {
        s(), u(), g(), w(), T(), N(), a(), E(), $(window).trigger(
            "overlay:init_links")
    }), b()
})();
(function() {
    var e = {
        options: {
            type: "",
            applyTemplate: function() {},
            removeLoader: function() {},
            clearTemplate: function() {},
            initLoadMore: function() {}
        },
        _create: function() {
            var e = this;
            e._element = $(e.element), e._filters = e._element.find(
                    ".js-search-filters"), e._model = {
                    historyQuery: {},
                    totalCount: 0
                }, e._getHistoryQuery(), e._applyHistoryFilters(),
                e._initFilters(), e._model.initialQuery = e._filters
                .filterManager("getInitialQuery");
            var t;
            !$.isEmptyObject(e._model.historyQuery) || window.location
                .hash.indexOf("#!/?") > -1 ? (e._filters.filterManager(
                        "setSearchBox", e._model.historyQuery.q), t =
                    e._model.historyQuery) : t = e._model.initialQuery,
                e.applySearch(t, undefined, null, null).done(
                    function() {
                        window.setTimeout(function() {
                            e._filters.filterManager(
                                "scrollToResults")
                        }, 100)
                    }), e.options.initLoadMore({}, t)
        },
        _getHistoryQuery: function() {
			
        },
        _applyHistoryFilters: function() {
			
        },
        _initFilters: function() {
			
        },
        applySearch: function(e, t, n, r) {
			
        },
        _setSearchHeader: function(e) {
			
        },
        _combineQueryAndHash: function(e, t) {
            var n = this,
                r = e.q,
                i = e.tid,
                s = e.t_name,
                o = e.ntids,
                u = e.sort,
                a = n._model.initialQuery,
                f = [];
            r && f.push("q=" + encodeURIComponent(r)), (i || a.t) &&
                f.push("t=" + (i || a.t)), (s || a.t_name) && f.push(
                    "t_name=" + encodeURIComponent(s || a.t_name)),
                o && f.push("nt=" + o), u && f.push("sort=" + u);
            var l = f.join("&"),
                c = $.trim(parseUri(window.location.href).anchor ||
                    ""),
                h = [t, l].join("?");
            return h = [h, c].join("#"), h
        },
        _searchCallback: function(e, t, n) {
            var r = this;
            r._model.totalCount += e.hits.total;
            var i = $("#" + t);
            if (r.options.type === "site_search") {
                var s = i.parents(".search-zone"),
                    o = i.parents(".services_sectors_zone"),
                    u = o.find(
                        ".search-page__load-more-block-wrapper");
                u.length && (e.hits.total <= parseInt(u.attr(
                    "data-items")) ? u.fadeOut() : u.fadeIn());
                var a = $(".search-link", s),
                    f = a.attr("data-url");
                a.attr("href", r._combineQueryAndHash(n, f))
            }
            r.options.applyTemplate(t, e)
        }
    };
    $.widget("ws.searchManager", e)
})();

