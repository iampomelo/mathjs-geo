!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):r.mathgeo=t()}(this,function(){"use strict";var r=Object.prototype.toString,t=function(t,n){return("Number"!==n||!Number.isNaN(t))&&r.call(t).replace(/.*\s(.*)]$/,"$1")===n},n=function(){return function(r,t){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return function(r,t){var n=[],e=!0,a=!1,o=void 0;try{for(var i,l=r[Symbol.iterator]();!(e=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);e=!0);}catch(r){a=!0,o=r}finally{try{!e&&l.return&&l.return()}finally{if(a)throw o}}return n}(r,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),e=function(){for(var r=arguments.length,e=Array(r),a=0;a<r;a++)e[a]=arguments[a];if(!e.length)return 0;var o=new Array(e.length),i=!0,l=!1,u=void 0;try{for(var f,y=Object.entries(e)[Symbol.iterator]();!(i=(f=y.next()).done);i=!0){var h=f.value,c=n(h,2),v=c[0],p=c[1];if(!t(p,"Number"))return 0;try{o[v]=p.toString().split(".")[1].length}catch(r){o[v]=0}}}catch(r){l=!0,u=r}finally{try{!i&&y.return&&y.return()}finally{if(l)throw u}}var d,g=Math.pow(10,(d=o,Math.max.apply(null,d))),m=0,s=!0,b=!1,w=void 0;try{for(var A,S=e[Symbol.iterator]();!(s=(A=S.next()).done);s=!0){m+=A.value*g}}catch(r){b=!0,w=r}finally{try{!s&&S.return&&S.return()}finally{if(b)throw w}}return m/g};return{add:e,sub:function(){for(var r=arguments.length,t=Array(r),n=0;n<r;n++)t[n]=arguments[n];var a=t.map(function(r,t){return t?-r:r});return e.apply(void 0,function(r){if(Array.isArray(r)){for(var t=0,n=Array(r.length);t<r.length;t++)n[t]=r[t];return n}return Array.from(r)}(a))},multi:function(){for(var r=arguments.length,e=Array(r),a=0;a<r;a++)e[a]=arguments[a];if(!e.length)return 0;var o=new Array(e.length),i=0,l=1,u=!0,f=!1,y=void 0;try{for(var h,c=Object.entries(e)[Symbol.iterator]();!(u=(h=c.next()).done);u=!0){var v=h.value,p=n(v,2),d=p[0],g=p[1];if(!t(g,"Number"))return 0;try{o[d]=g.toString().split(".")[1].length}catch(r){o[d]=0}i+=o[d],l*=g*Math.pow(10,o[d])}}catch(r){f=!0,y=r}finally{try{!u&&c.return&&c.return()}finally{if(f)throw y}}return l/Math.pow(10,i)},div:function(){for(var r=arguments.length,t=Array(r),n=0;n<r;n++)t[n]=arguments[n];if(!t.length)return 0;for(var e=t[0],a=0;a<t.length-1;a++){var o=void 0,i=void 0;try{o=e.toString().split(".")[1].length}catch(r){o=0}try{i=t[a+1].toString().split(".")[1].length}catch(r){i=0}var l=Math.max(o,i);e=e*Math.pow(10,l)/(t[a+1]*Math.pow(10,l))}return e}}});
