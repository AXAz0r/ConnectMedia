(function(t,e){"object"===typeof exports&&"object"===typeof module?module.exports=e():"function"===typeof define&&define.amd?define([],e):"object"===typeof exports?exports["ayu-tracker"]=e():t["ayu-tracker"]=e()})("undefined"!==typeof self?self:this,(function(){return function(){var __webpack_modules__={9662:function(t,e,r){var n=r(7854),o=r(614),i=r(6330),u=n.TypeError;t.exports=function(t){if(o(t))return t;throw u(i(t)+" is not a function")}},6077:function(t,e,r){var n=r(7854),o=r(614),i=n.String,u=n.TypeError;t.exports=function(t){if("object"==typeof t||o(t))return t;throw u("Can't set "+i(t)+" as a prototype")}},9670:function(t,e,r){var n=r(7854),o=r(111),i=n.String,u=n.TypeError;t.exports=function(t){if(o(t))return t;throw u(i(t)+" is not an object")}},4019:function(t){t.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},260:function(t,e,r){"use strict";var n,o,i,u=r(4019),a=r(9781),c=r(7854),s=r(614),f=r(111),p=r(2597),l=r(648),d=r(6330),y=r(8880),g=r(1320),h=r(3070).f,v=r(7976),w=r(9518),_=r(7674),b=r(5112),m=r(9711),x=c.Int8Array,S=x&&x.prototype,E=c.Uint8ClampedArray,T=E&&E.prototype,A=x&&w(x),O=S&&w(S),k=Object.prototype,j=c.TypeError,P=b("toStringTag"),I=m("TYPED_ARRAY_TAG"),R=m("TYPED_ARRAY_CONSTRUCTOR"),C=u&&!!_&&"Opera"!==l(c.opera),$=!1,M={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},L={BigInt64Array:8,BigUint64Array:8},B=function(t){if(!f(t))return!1;var e=l(t);return"DataView"===e||p(M,e)||p(L,e)},D=function(t){if(!f(t))return!1;var e=l(t);return p(M,e)||p(L,e)},q=function(t){if(D(t))return t;throw j("Target is not a typed array")},W=function(t){if(s(t)&&(!_||v(A,t)))return t;throw j(d(t)+" is not a typed array constructor")},U=function(t,e,r,n){if(a){if(r)for(var o in M){var i=c[o];if(i&&p(i.prototype,t))try{delete i.prototype[t]}catch(u){try{i.prototype[t]=e}catch(s){}}}O[t]&&!r||g(O,t,r?e:C&&S[t]||e,n)}},F=function(t,e,r){var n,o;if(a){if(_){if(r)for(n in M)if(o=c[n],o&&p(o,t))try{delete o[t]}catch(i){}if(A[t]&&!r)return;try{return g(A,t,r?e:C&&A[t]||e)}catch(i){}}for(n in M)o=c[n],!o||o[t]&&!r||g(o,t,e)}};for(n in M)o=c[n],i=o&&o.prototype,i?y(i,R,o):C=!1;for(n in L)o=c[n],i=o&&o.prototype,i&&y(i,R,o);if((!C||!s(A)||A===Function.prototype)&&(A=function(){throw j("Incorrect invocation")},C))for(n in M)c[n]&&_(c[n],A);if((!C||!O||O===k)&&(O=A.prototype,C))for(n in M)c[n]&&_(c[n].prototype,O);if(C&&w(T)!==O&&_(T,O),a&&!p(O,P))for(n in $=!0,h(O,P,{get:function(){return f(this)?this[I]:void 0}}),M)c[n]&&y(c[n],I,n);t.exports={NATIVE_ARRAY_BUFFER_VIEWS:C,TYPED_ARRAY_CONSTRUCTOR:R,TYPED_ARRAY_TAG:$&&I,aTypedArray:q,aTypedArrayConstructor:W,exportTypedArrayMethod:U,exportTypedArrayStaticMethod:F,isView:B,isTypedArray:D,TypedArray:A,TypedArrayPrototype:O}},1318:function(t,e,r){var n=r(5656),o=r(1400),i=r(6244),u=function(t){return function(e,r,u){var a,c=n(e),s=i(c),f=o(u,s);if(t&&r!=r){while(s>f)if(a=c[f++],a!=a)return!0}else for(;s>f;f++)if((t||f in c)&&c[f]===r)return t||f||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},4326:function(t,e,r){var n=r(1702),o=n({}.toString),i=n("".slice);t.exports=function(t){return i(o(t),8,-1)}},648:function(t,e,r){var n=r(7854),o=r(1694),i=r(614),u=r(4326),a=r(5112),c=a("toStringTag"),s=n.Object,f="Arguments"==u(function(){return arguments}()),p=function(t,e){try{return t[e]}catch(r){}};t.exports=o?u:function(t){var e,r,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=p(e=s(t),c))?r:f?u(e):"Object"==(n=u(e))&&i(e.callee)?"Arguments":n}},7741:function(t,e,r){var n=r(1702),o=n("".replace),i=function(t){return String(Error(t).stack)}("zxcasd"),u=/\n\s*at [^:]*:[^\n]*/,a=u.test(i);t.exports=function(t,e){if(a&&"string"==typeof t)while(e--)t=o(t,u,"");return t}},2128:function(t,e,r){var n=r(2597),o=r(3887),i=r(1236),u=r(3070);t.exports=function(t,e,r){for(var a=o(e),c=u.f,s=i.f,f=0;f<a.length;f++){var p=a[f];n(t,p)||r&&n(r,p)||c(t,p,s(e,p))}}},9920:function(t,e,r){var n=r(7293);t.exports=!n((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},8880:function(t,e,r){var n=r(9781),o=r(3070),i=r(9114);t.exports=n?function(t,e,r){return o.f(t,e,i(1,r))}:function(t,e,r){return t[e]=r,t}},9114:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},9781:function(t,e,r){var n=r(7293);t.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(t,e,r){var n=r(7854),o=r(111),i=n.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},8113:function(t,e,r){var n=r(5005);t.exports=n("navigator","userAgent")||""},7392:function(t,e,r){var n,o,i=r(7854),u=r(8113),a=i.process,c=i.Deno,s=a&&a.versions||c&&c.version,f=s&&s.v8;f&&(n=f.split("."),o=n[0]>0&&n[0]<4?1:+(n[0]+n[1])),!o&&u&&(n=u.match(/Edge\/(\d+)/),(!n||n[1]>=74)&&(n=u.match(/Chrome\/(\d+)/),n&&(o=+n[1]))),t.exports=o},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2914:function(t,e,r){var n=r(7293),o=r(9114);t.exports=!n((function(){var t=Error("a");return!("stack"in t)||(Object.defineProperty(t,"stack",o(1,7)),7!==t.stack)}))},2109:function(t,e,r){var n=r(7854),o=r(1236).f,i=r(8880),u=r(1320),a=r(3505),c=r(2128),s=r(4705);t.exports=function(t,e){var r,f,p,l,d,y,g=t.target,h=t.global,v=t.stat;if(f=h?n:v?n[g]||a(g,{}):(n[g]||{}).prototype,f)for(p in e){if(d=e[p],t.noTargetGet?(y=o(f,p),l=y&&y.value):l=f[p],r=s(h?p:g+(v?".":"#")+p,t.forced),!r&&void 0!==l){if(typeof d==typeof l)continue;c(d,l)}(t.sham||l&&l.sham)&&i(d,"sham",!0),u(f,p,d,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(e){return!0}}},2104:function(t,e,r){var n=r(4374),o=Function.prototype,i=o.apply,u=o.call;t.exports="object"==typeof Reflect&&Reflect.apply||(n?u.bind(i):function(){return u.apply(i,arguments)})},4374:function(t,e,r){var n=r(7293);t.exports=!n((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},6916:function(t,e,r){var n=r(4374),o=Function.prototype.call;t.exports=n?o.bind(o):function(){return o.apply(o,arguments)}},6530:function(t,e,r){var n=r(9781),o=r(2597),i=Function.prototype,u=n&&Object.getOwnPropertyDescriptor,a=o(i,"name"),c=a&&"something"===function(){}.name,s=a&&(!n||n&&u(i,"name").configurable);t.exports={EXISTS:a,PROPER:c,CONFIGURABLE:s}},1702:function(t,e,r){var n=r(4374),o=Function.prototype,i=o.bind,u=o.call,a=n&&i.bind(u,u);t.exports=n?function(t){return t&&a(t)}:function(t){return t&&function(){return u.apply(t,arguments)}}},5005:function(t,e,r){var n=r(7854),o=r(614),i=function(t){return o(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?i(n[t]):n[t]&&n[t][e]}},8173:function(t,e,r){var n=r(9662);t.exports=function(t,e){var r=t[e];return null==r?void 0:n(r)}},7854:function(t,e,r){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof r.g&&r.g)||function(){return this}()||Function("return this")()},2597:function(t,e,r){var n=r(1702),o=r(7908),i=n({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return i(o(t),e)}},3501:function(t){t.exports={}},4664:function(t,e,r){var n=r(9781),o=r(7293),i=r(317);t.exports=!n&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,e,r){var n=r(7854),o=r(1702),i=r(7293),u=r(4326),a=n.Object,c=o("".split);t.exports=i((function(){return!a("z").propertyIsEnumerable(0)}))?function(t){return"String"==u(t)?c(t,""):a(t)}:a},9587:function(t,e,r){var n=r(614),o=r(111),i=r(7674);t.exports=function(t,e,r){var u,a;return i&&n(u=e.constructor)&&u!==r&&o(a=u.prototype)&&a!==r.prototype&&i(t,a),t}},2788:function(t,e,r){var n=r(1702),o=r(614),i=r(5465),u=n(Function.toString);o(i.inspectSource)||(i.inspectSource=function(t){return u(t)}),t.exports=i.inspectSource},8340:function(t,e,r){var n=r(111),o=r(8880);t.exports=function(t,e){n(e)&&"cause"in e&&o(t,"cause",e.cause)}},9909:function(t,e,r){var n,o,i,u=r(8536),a=r(7854),c=r(1702),s=r(111),f=r(8880),p=r(2597),l=r(5465),d=r(6200),y=r(3501),g="Object already initialized",h=a.TypeError,v=a.WeakMap,w=function(t){return i(t)?o(t):n(t,{})},_=function(t){return function(e){var r;if(!s(e)||(r=o(e)).type!==t)throw h("Incompatible receiver, "+t+" required");return r}};if(u||l.state){var b=l.state||(l.state=new v),m=c(b.get),x=c(b.has),S=c(b.set);n=function(t,e){if(x(b,t))throw new h(g);return e.facade=t,S(b,t,e),e},o=function(t){return m(b,t)||{}},i=function(t){return x(b,t)}}else{var E=d("state");y[E]=!0,n=function(t,e){if(p(t,E))throw new h(g);return e.facade=t,f(t,E,e),e},o=function(t){return p(t,E)?t[E]:{}},i=function(t){return p(t,E)}}t.exports={set:n,get:o,has:i,enforce:w,getterFor:_}},614:function(t){t.exports=function(t){return"function"==typeof t}},4705:function(t,e,r){var n=r(7293),o=r(614),i=/#|\.prototype\./,u=function(t,e){var r=c[a(t)];return r==f||r!=s&&(o(e)?n(e):!!e)},a=u.normalize=function(t){return String(t).replace(i,".").toLowerCase()},c=u.data={},s=u.NATIVE="N",f=u.POLYFILL="P";t.exports=u},111:function(t,e,r){var n=r(614);t.exports=function(t){return"object"==typeof t?null!==t:n(t)}},1913:function(t){t.exports=!1},2190:function(t,e,r){var n=r(7854),o=r(5005),i=r(614),u=r(7976),a=r(3307),c=n.Object;t.exports=a?function(t){return"symbol"==typeof t}:function(t){var e=o("Symbol");return i(e)&&u(e.prototype,c(t))}},6244:function(t,e,r){var n=r(7466);t.exports=function(t){return n(t.length)}},133:function(t,e,r){var n=r(7392),o=r(7293);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},8536:function(t,e,r){var n=r(7854),o=r(614),i=r(2788),u=n.WeakMap;t.exports=o(u)&&/native code/.test(i(u))},6277:function(t,e,r){var n=r(1340);t.exports=function(t,e){return void 0===t?arguments.length<2?"":e:n(t)}},3070:function(t,e,r){var n=r(7854),o=r(9781),i=r(4664),u=r(3353),a=r(9670),c=r(4948),s=n.TypeError,f=Object.defineProperty,p=Object.getOwnPropertyDescriptor,l="enumerable",d="configurable",y="writable";e.f=o?u?function(t,e,r){if(a(t),e=c(e),a(r),"function"===typeof t&&"prototype"===e&&"value"in r&&y in r&&!r[y]){var n=p(t,e);n&&n[y]&&(t[e]=r.value,r={configurable:d in r?r[d]:n[d],enumerable:l in r?r[l]:n[l],writable:!1})}return f(t,e,r)}:f:function(t,e,r){if(a(t),e=c(e),a(r),i)try{return f(t,e,r)}catch(n){}if("get"in r||"set"in r)throw s("Accessors not supported");return"value"in r&&(t[e]=r.value),t}},1236:function(t,e,r){var n=r(9781),o=r(6916),i=r(5296),u=r(9114),a=r(5656),c=r(4948),s=r(2597),f=r(4664),p=Object.getOwnPropertyDescriptor;e.f=n?p:function(t,e){if(t=a(t),e=c(e),f)try{return p(t,e)}catch(r){}if(s(t,e))return u(!o(i.f,t,e),t[e])}},8006:function(t,e,r){var n=r(6324),o=r(748),i=o.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,i)}},5181:function(t,e){e.f=Object.getOwnPropertySymbols},9518:function(t,e,r){var n=r(7854),o=r(2597),i=r(614),u=r(7908),a=r(6200),c=r(9920),s=a("IE_PROTO"),f=n.Object,p=f.prototype;t.exports=c?f.getPrototypeOf:function(t){var e=u(t);if(o(e,s))return e[s];var r=e.constructor;return i(r)&&e instanceof r?r.prototype:e instanceof f?p:null}},7976:function(t,e,r){var n=r(1702);t.exports=n({}.isPrototypeOf)},6324:function(t,e,r){var n=r(1702),o=r(2597),i=r(5656),u=r(1318).indexOf,a=r(3501),c=n([].push);t.exports=function(t,e){var r,n=i(t),s=0,f=[];for(r in n)!o(a,r)&&o(n,r)&&c(f,r);while(e.length>s)o(n,r=e[s++])&&(~u(f,r)||c(f,r));return f}},5296:function(t,e){"use strict";var r={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,o=n&&!r.call({1:2},1);e.f=o?function(t){var e=n(this,t);return!!e&&e.enumerable}:r},7674:function(t,e,r){var n=r(1702),o=r(9670),i=r(6077);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,r={};try{t=n(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),t(r,[]),e=r instanceof Array}catch(u){}return function(r,n){return o(r),i(n),e?t(r,n):r.__proto__=n,r}}():void 0)},2140:function(t,e,r){var n=r(7854),o=r(6916),i=r(614),u=r(111),a=n.TypeError;t.exports=function(t,e){var r,n;if("string"===e&&i(r=t.toString)&&!u(n=o(r,t)))return n;if(i(r=t.valueOf)&&!u(n=o(r,t)))return n;if("string"!==e&&i(r=t.toString)&&!u(n=o(r,t)))return n;throw a("Can't convert object to primitive value")}},3887:function(t,e,r){var n=r(5005),o=r(1702),i=r(8006),u=r(5181),a=r(9670),c=o([].concat);t.exports=n("Reflect","ownKeys")||function(t){var e=i.f(a(t)),r=u.f;return r?c(e,r(t)):e}},1320:function(t,e,r){var n=r(7854),o=r(614),i=r(2597),u=r(8880),a=r(3505),c=r(2788),s=r(9909),f=r(6530).CONFIGURABLE,p=s.get,l=s.enforce,d=String(String).split("String");(t.exports=function(t,e,r,c){var s,p=!!c&&!!c.unsafe,y=!!c&&!!c.enumerable,g=!!c&&!!c.noTargetGet,h=c&&void 0!==c.name?c.name:e;o(r)&&("Symbol("===String(h).slice(0,7)&&(h="["+String(h).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!i(r,"name")||f&&r.name!==h)&&u(r,"name",h),s=l(r),s.source||(s.source=d.join("string"==typeof h?h:""))),t!==n?(p?!g&&t[e]&&(y=!0):delete t[e],y?t[e]=r:u(t,e,r)):y?t[e]=r:a(e,r)})(Function.prototype,"toString",(function(){return o(this)&&p(this).source||c(this)}))},4488:function(t,e,r){var n=r(7854),o=n.TypeError;t.exports=function(t){if(void 0==t)throw o("Can't call method on "+t);return t}},3505:function(t,e,r){var n=r(7854),o=Object.defineProperty;t.exports=function(t,e){try{o(n,t,{value:e,configurable:!0,writable:!0})}catch(r){n[t]=e}return e}},6200:function(t,e,r){var n=r(2309),o=r(9711),i=n("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5465:function(t,e,r){var n=r(7854),o=r(3505),i="__core-js_shared__",u=n[i]||o(i,{});t.exports=u},2309:function(t,e,r){var n=r(1913),o=r(5465);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.21.1",mode:n?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE",source:"https://github.com/zloirock/core-js"})},1400:function(t,e,r){var n=r(9303),o=Math.max,i=Math.min;t.exports=function(t,e){var r=n(t);return r<0?o(r+e,0):i(r,e)}},5656:function(t,e,r){var n=r(8361),o=r(4488);t.exports=function(t){return n(o(t))}},9303:function(t){var e=Math.ceil,r=Math.floor;t.exports=function(t){var n=+t;return n!==n||0===n?0:(n>0?r:e)(n)}},7466:function(t,e,r){var n=r(9303),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},7908:function(t,e,r){var n=r(7854),o=r(4488),i=n.Object;t.exports=function(t){return i(o(t))}},4590:function(t,e,r){var n=r(7854),o=r(3002),i=n.RangeError;t.exports=function(t,e){var r=o(t);if(r%e)throw i("Wrong offset");return r}},3002:function(t,e,r){var n=r(7854),o=r(9303),i=n.RangeError;t.exports=function(t){var e=o(t);if(e<0)throw i("The argument can't be less than 0");return e}},7593:function(t,e,r){var n=r(7854),o=r(6916),i=r(111),u=r(2190),a=r(8173),c=r(2140),s=r(5112),f=n.TypeError,p=s("toPrimitive");t.exports=function(t,e){if(!i(t)||u(t))return t;var r,n=a(t,p);if(n){if(void 0===e&&(e="default"),r=o(n,t,e),!i(r)||u(r))return r;throw f("Can't convert object to primitive value")}return void 0===e&&(e="number"),c(t,e)}},4948:function(t,e,r){var n=r(7593),o=r(2190);t.exports=function(t){var e=n(t,"string");return o(e)?e:e+""}},1694:function(t,e,r){var n=r(5112),o=n("toStringTag"),i={};i[o]="z",t.exports="[object z]"===String(i)},1340:function(t,e,r){var n=r(7854),o=r(648),i=n.String;t.exports=function(t){if("Symbol"===o(t))throw TypeError("Cannot convert a Symbol value to a string");return i(t)}},6330:function(t,e,r){var n=r(7854),o=n.String;t.exports=function(t){try{return o(t)}catch(e){return"Object"}}},9711:function(t,e,r){var n=r(1702),o=0,i=Math.random(),u=n(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+u(++o+i,36)}},3307:function(t,e,r){var n=r(133);t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(t,e,r){var n=r(9781),o=r(7293);t.exports=n&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},5112:function(t,e,r){var n=r(7854),o=r(2309),i=r(2597),u=r(9711),a=r(133),c=r(3307),s=o("wks"),f=n.Symbol,p=f&&f["for"],l=c?f:f&&f.withoutSetter||u;t.exports=function(t){if(!i(s,t)||!a&&"string"!=typeof s[t]){var e="Symbol."+t;a&&i(f,t)?s[t]=f[t]:s[t]=c&&p?p(e):l(e)}return s[t]}},9191:function(t,e,r){"use strict";var n=r(5005),o=r(2597),i=r(8880),u=r(7976),a=r(7674),c=r(2128),s=r(9587),f=r(6277),p=r(8340),l=r(7741),d=r(2914),y=r(1913);t.exports=function(t,e,r,g){var h=g?2:1,v=t.split("."),w=v[v.length-1],_=n.apply(null,v);if(_){var b=_.prototype;if(!y&&o(b,"cause")&&delete b.cause,!r)return _;var m=n("Error"),x=e((function(t,e){var r=f(g?e:t,void 0),n=g?new _(t):new _;return void 0!==r&&i(n,"message",r),d&&i(n,"stack",l(n.stack,2)),this&&u(b,this)&&s(n,this,x),arguments.length>h&&p(n,arguments[h]),n}));if(x.prototype=b,"Error"!==w&&(a?a(x,m):c(x,m,{name:!0})),c(x,_),!y)try{b.name!==w&&i(b,"name",w),b.constructor=x}catch(S){}return x}}},1703:function(t,e,r){var n=r(2109),o=r(7854),i=r(2104),u=r(9191),a="WebAssembly",c=o[a],s=7!==Error("e",{cause:7}).cause,f=function(t,e){var r={};r[t]=u(t,e,s),n({global:!0,forced:s},r)},p=function(t,e){if(c&&c[t]){var r={};r[t]=u(a+"."+t,e,s),n({target:a,stat:!0,forced:s},r)}};f("Error",(function(t){return function(e){return i(t,this,arguments)}})),f("EvalError",(function(t){return function(e){return i(t,this,arguments)}})),f("RangeError",(function(t){return function(e){return i(t,this,arguments)}})),f("ReferenceError",(function(t){return function(e){return i(t,this,arguments)}})),f("SyntaxError",(function(t){return function(e){return i(t,this,arguments)}})),f("TypeError",(function(t){return function(e){return i(t,this,arguments)}})),f("URIError",(function(t){return function(e){return i(t,this,arguments)}})),p("CompileError",(function(t){return function(e){return i(t,this,arguments)}})),p("LinkError",(function(t){return function(e){return i(t,this,arguments)}})),p("RuntimeError",(function(t){return function(e){return i(t,this,arguments)}}))},8675:function(t,e,r){"use strict";var n=r(260),o=r(6244),i=r(9303),u=n.aTypedArray,a=n.exportTypedArrayMethod;a("at",(function(t){var e=u(this),r=o(e),n=i(t),a=n>=0?n:r+n;return a<0||a>=r?void 0:e[a]}))},3462:function(t,e,r){"use strict";var n=r(7854),o=r(6916),i=r(260),u=r(6244),a=r(4590),c=r(7908),s=r(7293),f=n.RangeError,p=n.Int8Array,l=p&&p.prototype,d=l&&l.set,y=i.aTypedArray,g=i.exportTypedArrayMethod,h=!s((function(){var t=new Uint8ClampedArray(2);return o(d,t,{length:1,0:3},1),3!==t[1]})),v=h&&i.NATIVE_ARRAY_BUFFER_VIEWS&&s((function(){var t=new p(2);return t.set(1),t.set("2",1),0!==t[0]||2!==t[1]}));g("set",(function(t){y(this);var e=a(arguments.length>1?arguments[1]:void 0,1),r=c(t);if(h)return o(d,this,r,e);var n=this.length,i=u(r),s=0;if(i+e>n)throw f("Wrong length");while(s<i)this[e+s]=r[s++]}),!h||v)},4520:function(t){var e={utf8:{stringToBytes:function(t){return e.bin.stringToBytes(unescape(encodeURIComponent(t)))},bytesToString:function(t){return decodeURIComponent(escape(e.bin.bytesToString(t)))}},bin:{stringToBytes:function(t){for(var e=[],r=0;r<t.length;r++)e.push(255&t.charCodeAt(r));return e},bytesToString:function(t){for(var e=[],r=0;r<t.length;r++)e.push(String.fromCharCode(t[r]));return e.join("")}}};t.exports=e},2491:function(t){(function(){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",r={rotl:function(t,e){return t<<e|t>>>32-e},rotr:function(t,e){return t<<32-e|t>>>e},endian:function(t){if(t.constructor==Number)return 16711935&r.rotl(t,8)|4278255360&r.rotl(t,24);for(var e=0;e<t.length;e++)t[e]=r.endian(t[e]);return t},randomBytes:function(t){for(var e=[];t>0;t--)e.push(Math.floor(256*Math.random()));return e},bytesToWords:function(t){for(var e=[],r=0,n=0;r<t.length;r++,n+=8)e[n>>>5]|=t[r]<<24-n%32;return e},wordsToBytes:function(t){for(var e=[],r=0;r<32*t.length;r+=8)e.push(t[r>>>5]>>>24-r%32&255);return e},bytesToHex:function(t){for(var e=[],r=0;r<t.length;r++)e.push((t[r]>>>4).toString(16)),e.push((15&t[r]).toString(16));return e.join("")},hexToBytes:function(t){for(var e=[],r=0;r<t.length;r+=2)e.push(parseInt(t.substr(r,2),16));return e},bytesToBase64:function(t){for(var r=[],n=0;n<t.length;n+=3)for(var o=t[n]<<16|t[n+1]<<8|t[n+2],i=0;i<4;i++)8*n+6*i<=8*t.length?r.push(e.charAt(o>>>6*(3-i)&63)):r.push("=");return r.join("")},base64ToBytes:function(t){t=t.replace(/[^A-Z0-9+\/]/gi,"");for(var r=[],n=0,o=0;n<t.length;o=++n%4)0!=o&&r.push((e.indexOf(t.charAt(n-1))&Math.pow(2,-2*o+8)-1)<<2*o|e.indexOf(t.charAt(n))>>>6-2*o);return r}};t.exports=r})()},6796:function(t){function e(t){return!!t.constructor&&"function"===typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}function r(t){return"function"===typeof t.readFloatLE&&"function"===typeof t.slice&&e(t.slice(0,0))}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
t.exports=function(t){return null!=t&&(e(t)||r(t)||!!t._isBuffer)}},7952:function(t,e,r){r(8675),r(3462),r(1703),function(){var e=r(2491),n=r(4520).utf8,o=r(6796),i=r(4520).bin,u=function(t,r){t.constructor==String?t=r&&"binary"===r.encoding?i.stringToBytes(t):n.stringToBytes(t):o(t)?t=Array.prototype.slice.call(t,0):Array.isArray(t)||t.constructor===Uint8Array||(t=t.toString());for(var a=e.bytesToWords(t),c=8*t.length,s=1732584193,f=-271733879,p=-1732584194,l=271733878,d=0;d<a.length;d++)a[d]=16711935&(a[d]<<8|a[d]>>>24)|4278255360&(a[d]<<24|a[d]>>>8);a[c>>>5]|=128<<c%32,a[14+(c+64>>>9<<4)]=c;var y=u._ff,g=u._gg,h=u._hh,v=u._ii;for(d=0;d<a.length;d+=16){var w=s,_=f,b=p,m=l;s=y(s,f,p,l,a[d+0],7,-680876936),l=y(l,s,f,p,a[d+1],12,-389564586),p=y(p,l,s,f,a[d+2],17,606105819),f=y(f,p,l,s,a[d+3],22,-1044525330),s=y(s,f,p,l,a[d+4],7,-176418897),l=y(l,s,f,p,a[d+5],12,1200080426),p=y(p,l,s,f,a[d+6],17,-1473231341),f=y(f,p,l,s,a[d+7],22,-45705983),s=y(s,f,p,l,a[d+8],7,1770035416),l=y(l,s,f,p,a[d+9],12,-1958414417),p=y(p,l,s,f,a[d+10],17,-42063),f=y(f,p,l,s,a[d+11],22,-1990404162),s=y(s,f,p,l,a[d+12],7,1804603682),l=y(l,s,f,p,a[d+13],12,-40341101),p=y(p,l,s,f,a[d+14],17,-1502002290),f=y(f,p,l,s,a[d+15],22,1236535329),s=g(s,f,p,l,a[d+1],5,-165796510),l=g(l,s,f,p,a[d+6],9,-1069501632),p=g(p,l,s,f,a[d+11],14,643717713),f=g(f,p,l,s,a[d+0],20,-373897302),s=g(s,f,p,l,a[d+5],5,-701558691),l=g(l,s,f,p,a[d+10],9,38016083),p=g(p,l,s,f,a[d+15],14,-660478335),f=g(f,p,l,s,a[d+4],20,-405537848),s=g(s,f,p,l,a[d+9],5,568446438),l=g(l,s,f,p,a[d+14],9,-1019803690),p=g(p,l,s,f,a[d+3],14,-187363961),f=g(f,p,l,s,a[d+8],20,1163531501),s=g(s,f,p,l,a[d+13],5,-1444681467),l=g(l,s,f,p,a[d+2],9,-51403784),p=g(p,l,s,f,a[d+7],14,1735328473),f=g(f,p,l,s,a[d+12],20,-1926607734),s=h(s,f,p,l,a[d+5],4,-378558),l=h(l,s,f,p,a[d+8],11,-2022574463),p=h(p,l,s,f,a[d+11],16,1839030562),f=h(f,p,l,s,a[d+14],23,-35309556),s=h(s,f,p,l,a[d+1],4,-1530992060),l=h(l,s,f,p,a[d+4],11,1272893353),p=h(p,l,s,f,a[d+7],16,-155497632),f=h(f,p,l,s,a[d+10],23,-1094730640),s=h(s,f,p,l,a[d+13],4,681279174),l=h(l,s,f,p,a[d+0],11,-358537222),p=h(p,l,s,f,a[d+3],16,-722521979),f=h(f,p,l,s,a[d+6],23,76029189),s=h(s,f,p,l,a[d+9],4,-640364487),l=h(l,s,f,p,a[d+12],11,-421815835),p=h(p,l,s,f,a[d+15],16,530742520),f=h(f,p,l,s,a[d+2],23,-995338651),s=v(s,f,p,l,a[d+0],6,-198630844),l=v(l,s,f,p,a[d+7],10,1126891415),p=v(p,l,s,f,a[d+14],15,-1416354905),f=v(f,p,l,s,a[d+5],21,-57434055),s=v(s,f,p,l,a[d+12],6,1700485571),l=v(l,s,f,p,a[d+3],10,-1894986606),p=v(p,l,s,f,a[d+10],15,-1051523),f=v(f,p,l,s,a[d+1],21,-2054922799),s=v(s,f,p,l,a[d+8],6,1873313359),l=v(l,s,f,p,a[d+15],10,-30611744),p=v(p,l,s,f,a[d+6],15,-1560198380),f=v(f,p,l,s,a[d+13],21,1309151649),s=v(s,f,p,l,a[d+4],6,-145523070),l=v(l,s,f,p,a[d+11],10,-1120210379),p=v(p,l,s,f,a[d+2],15,718787259),f=v(f,p,l,s,a[d+9],21,-343485551),s=s+w>>>0,f=f+_>>>0,p=p+b>>>0,l=l+m>>>0}return e.endian([s,f,p,l])};u._ff=function(t,e,r,n,o,i,u){var a=t+(e&r|~e&n)+(o>>>0)+u;return(a<<i|a>>>32-i)+e},u._gg=function(t,e,r,n,o,i,u){var a=t+(e&n|r&~n)+(o>>>0)+u;return(a<<i|a>>>32-i)+e},u._hh=function(t,e,r,n,o,i,u){var a=t+(e^r^n)+(o>>>0)+u;return(a<<i|a>>>32-i)+e},u._ii=function(t,e,r,n,o,i,u){var a=t+(r^(e|~n))+(o>>>0)+u;return(a<<i|a>>>32-i)+e},u._blocksize=16,u._digestsize=16,t.exports=function(t,r){if(void 0===t||null===t)throw new Error("Illegal argument "+t);var n=e.wordsToBytes(u(t,r));return r&&r.asBytes?n:r&&r.asString?i.bytesToString(n):e.bytesToHex(n)}}()},743:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var md5__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(7952),md5__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(md5__WEBPACK_IMPORTED_MODULE_0__);class Ayu{constructor(){this.base="localhost"===window.location.hostname?"http://127.0.0.1:5000":"https://connectmedia.rs",this.logs=[],this.stats=[],this.timer=null,this.cooldowns={},this.signature=this.getSignature(),this.submittedStats=[]}log(t){let e=(new Date).getTime();this.logs.push({timestamp:e,message:t}),console.debug(`Ayu: ${t}`)}allLogs(){this.logs?(console.debug("-".repeat(16)+"Ayu Log Start"+"-".repeat(16)),this.logs.forEach((t=>{let e=new Date(t.timestamp);console.debug(`${e.toLocaleTimeString()}: ${t.message}`)})),console.debug("-".repeat(17)+"Ayu Log End"+"-".repeat(17))):console.debug("No logs to debug.")}async load(t){document.querySelectorAll("[data-ayu-widget]").forEach((async e=>{let r=parseInt(e.dataset.ayuWidget),n=e.dataset.ayuLoaded;if(r&&!n&&r===t){this.log(`Core is loading widget ${r}...`),e.dataset.ayuLoaded=!0;let t=await window.ayu.renderWidget(r);t&&(e.innerHTML=t,this.injectEvents(r),this.evalBodyScripts(r))}}))}destroy(){document.querySelectorAll("[data-ayu-widget]").forEach((async t=>{let e=parseInt(t.dataset.ayuWidget),r=t.dataset.ayuLoaded;e&&r&&(this.log(`Core is destroying widget ${e}...`),t.dataset.ayuLoaded="",t.innerHTML="")}))}getSignature(){let t="ayuSignature",e=window.localStorage.getItem(t);if(e)return e;{let e=window||__webpack_require__.g,r=t=>{let r=[];for(let n in e)r.push(n);return r.length.toString(36)},n=(t,e)=>(new Array(e+1).join("0")+t).slice(-e),o=navigator.userAgent.length.toString(36),i=n(o+r(),4),u=e.screen.width.toString(36),a=e.screen.height.toString(36),c=e.screen.availWidth.toString(36),s=e.screen.availHeight.toString(36),f=e.screen.colorDepth.toString(36),p=e.screen.pixelDepth.toString(36),l=md5__WEBPACK_IMPORTED_MODULE_0___default()(i+u+a+c+s+f+p);return window.localStorage.setItem(t,l),l}}distanceCheck(){let t=document.querySelectorAll("div[data-ayu-widget]");t.forEach((t=>{let e=t.dataset.ayuLoaded;if(!e){let e=Math.abs(t.getBoundingClientRect().top);if(e<=2*window.innerHeight){let e=parseInt(t.dataset.ayuWidget);window.ayu.load(e)}}}))}async renderWidget(t){let e=(new Date).getTime(),r=null,n=`${this.base}/api/v1/widget/${t}/render?uid=${this.signature}`,o=new URLSearchParams(window.location.search).get("ayu_origin");o&&(n=`${n}&org=${o}`);try{let o=new Request(n),i=await fetch(o);if(200===i.status){r=await i.text();let n=(new Date).getTime(),o=Math.round((n-e)/1e3*15)/15,u=i.headers.get("X-Ayu-Render-Time");this.log(`Widget #${t} fetched in ${o}s, rendered in ${u}s.`)}else{let e=await i.json();this.log(`Widget #${t} failed to render: [${e.code}] ${e.message}`)}}catch{this.log(`Widget #${t} failed to fetch, see console for details.`)}return r}injectClickEvents(t){this.log(`Injected click event tracking for widget ${t}.`);let e=document.querySelectorAll(`[data-ayu-widget="${t}"] .ayuPost`);e.forEach((t=>{t.addEventListener("click",window.ayu.trackClick)}))}injectViewEvents(t){this.log(`Injected view event tracking for widget ${t}.`);let e=document.querySelectorAll(`[data-ayu-widget="${t}"] .ayuPost`),r=new IntersectionObserver((t=>{t.forEach((t=>{!0===t.isIntersecting&&window.ayu.trackView(t)}))}),{threshold:[0]});e.forEach((t=>{r.observe(t)}))}injectEvents(t){this.injectClickEvents(t),this.injectViewEvents(t)}cooling(t,e){let r=`${e}-${t}`,n=Date.now(),o=this.cooldowns[r]?this.cooldowns[r]:0;return!(n>o+1500)||(this.cooldowns[r]=n,!1)}debounce(t,e=1e3){this.timer&&clearTimeout(this.timer),this.timer=setTimeout((()=>{t()}),e)}newStat(t,e,r){return{user:this.signature,widget:parseInt(t),kind:r,post:parseInt(e)}}statExists(t,e){let r=!1;return this.stats.forEach((n=>{r||n.post===t&&n.kind===e&&(r=!0)})),r||this.submittedStats.forEach((n=>{r||n.post===t&&n.kind===e&&(r=!0)})),r}findTarget(t){let e=null,r=t;while(null===e)r.classList.contains("ayuPost")?e=r:r=r.parentNode;return e}findWidgetId(t){let e,r=t;while(void 0===e)r=r.parentNode,e=r.dataset["ayuWidget"];return e}trackClick(t){let e=window.ayu.findTarget(t.target);if(e){let t="click",r=parseInt(e.dataset["ayuPost"]),n=e.dataset["ayuLink"],o=window.ayu.findWidgetId(e);if(!window.ayu.cooling(r,t)&&!window.ayu.statExists(r,t)){window.ayu.log(`Recorded ${t} for post #${r} in widget #${o}.`),window.ayu.stats.push(window.ayu.newStat(o,r,t));let e=window.open(n,"_blank");e.focus(),window.ayu.submitEvents()}}}trackView(t){let e=window.ayu.findTarget(t.target);if(e){let t="view",r=parseInt(e.dataset["ayuPost"]),n=window.ayu.findWidgetId(e);window.ayu.cooling(r,t)||window.ayu.statExists(r,t)||(window.ayu.log(`Recorded ${t} for post #${r} in widget #${n}.`),window.ayu.stats.push(window.ayu.newStat(n,r,t)),window.ayu.debounce((()=>{window.ayu.submitEvents()}),500))}}submitEvents(t=null){let e=JSON.parse(JSON.stringify(this.stats));this.stats=[];let r={};e.forEach((t=>{let e=r[t.widget]||[];e.push(t),r[t.widget]=e,this.submittedStats.push(t)}));for(let n in r)fetch(`${this.base}/api/v1/widget/${n}/track`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({events:r[n],origin:window.location.origin})}).then((e=>{201===e.status?console.debug("Stat submission succeeded."):console.debug("Stat submission failed!"),null!==t&&t()}))}evalBodyScripts(wid){let scripts=document.querySelectorAll(`[data-ayu-widget="${wid}"] script`);scripts.forEach((elm=>{if(elm.textContent)try{eval(elm.textContent)}catch{this.log("Failed to execute an inline script.")}elm.attributes["src"]&&fetch(elm.attributes["src"].value).then((resp=>{resp.text().then((body=>{try{eval(body)}catch{cothisnsole.log("Failed execute an external script.")}}))}))}))}init(){this.distanceCheck()}}__webpack_exports__["Z"]=Ayu}},__webpack_module_cache__={};function __webpack_require__(t){var e=__webpack_module_cache__[t];if(void 0!==e)return e.exports;var r=__webpack_module_cache__[t]={exports:{}};return __webpack_modules__[t](r,r.exports,__webpack_require__),r.exports}!function(){__webpack_require__.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return __webpack_require__.d(e,{a:e}),e}}(),function(){__webpack_require__.d=function(t,e){for(var r in e)__webpack_require__.o(e,r)&&!__webpack_require__.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){__webpack_require__.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){__webpack_require__.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){__webpack_require__.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){__webpack_require__.p=""}();var __webpack_exports__={};return function(){"use strict";if(__webpack_require__.r(__webpack_exports__),"undefined"!==typeof window){var t=window.document.currentScript,e=t&&t.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);e&&(__webpack_require__.p=e[1])}var r=__webpack_require__(743);window.ayu=new r.Z,window.ayu.log("Imported and assigned to window constant."),window.addEventListener("scroll",window.ayu.distanceCheck),window.ayu.log("Added the proximity event listener."),setTimeout((()=>{window.ayu.init(),window.ayu.log("Initialized.")}),100),setInterval((()=>{window.ayu.init()}),666),window.ayu.log("Placed an interval checker for initialization.")}(),__webpack_exports__}()}));
//# sourceMappingURL=ayu-tracker.umd.min.js.map