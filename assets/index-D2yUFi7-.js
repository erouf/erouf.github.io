(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function wl(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const ct={},fr=[],Rn=()=>{},Qu=()=>!1,la=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Rl=n=>n.startsWith("onUpdate:"),At=Object.assign,Cl=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},fd=Object.prototype.hasOwnProperty,nt=(n,e)=>fd.call(n,e),Oe=Array.isArray,hr=n=>ca(n)==="[object Map]",ef=n=>ca(n)==="[object Set]",We=n=>typeof n=="function",St=n=>typeof n=="string",Mi=n=>typeof n=="symbol",pt=n=>n!==null&&typeof n=="object",tf=n=>(pt(n)||We(n))&&We(n.then)&&We(n.catch),nf=Object.prototype.toString,ca=n=>nf.call(n),hd=n=>ca(n).slice(8,-1),rf=n=>ca(n)==="[object Object]",Pl=n=>St(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Vr=wl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ua=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},dd=/-\w/g,_i=ua(n=>n.replace(dd,e=>e.slice(1).toUpperCase())),pd=/\B([A-Z])/g,Wi=ua(n=>n.replace(pd,"-$1").toLowerCase()),sf=ua(n=>n.charAt(0).toUpperCase()+n.slice(1)),wa=ua(n=>n?`on${sf(n)}`:""),gi=(n,e)=>!Object.is(n,e),zs=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},af=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Dl=n=>{const e=parseFloat(n);return isNaN(e)?n:e},md=n=>{const e=St(n)?Number(n):NaN;return isNaN(e)?n:e};let gc;const fa=()=>gc||(gc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ll(n){if(Oe(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=St(i)?vd(i):Ll(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(St(n)||pt(n))return n}const gd=/;(?![^(]*\))/g,_d=/:([^]+)/,xd=/\/\*[^]*?\*\//g;function vd(n){const e={};return n.replace(xd,"").split(gd).forEach(t=>{if(t){const i=t.split(_d);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function ha(n){let e="";if(St(n))e=n;else if(Oe(n))for(let t=0;t<n.length;t++){const i=ha(n[t]);i&&(e+=i+" ")}else if(pt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Sd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Md=wl(Sd);function of(n){return!!n||n===""}const lf=n=>!!(n&&n.__v_isRef===!0),Hs=n=>St(n)?n:n==null?"":Oe(n)||pt(n)&&(n.toString===nf||!We(n.toString))?lf(n)?Hs(n.value):JSON.stringify(n,cf,2):String(n),cf=(n,e)=>lf(e)?cf(n,e.value):hr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[Ra(i,s)+" =>"]=r,t),{})}:ef(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Ra(t))}:Mi(e)?Ra(e):pt(e)&&!Oe(e)&&!rf(e)?String(e):e,Ra=(n,e="")=>{var t;return Mi(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};let kt;class Ed{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=kt,!e&&kt&&(this.index=(kt.scopes||(kt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=kt;try{return kt=this,e()}finally{kt=t}}}on(){++this._on===1&&(this.prevScope=kt,kt=this)}off(){this._on>0&&--this._on===0&&(kt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function yd(){return kt}let ht;const Ca=new WeakSet;class uf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,kt&&kt.active&&kt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ca.has(this)&&(Ca.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||hf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,_c(this),df(this);const e=ht,t=pn;ht=this,pn=!0;try{return this.fn()}finally{pf(this),ht=e,pn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Nl(e);this.deps=this.depsTail=void 0,_c(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ca.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){So(this)&&this.run()}get dirty(){return So(this)}}let ff=0,zr,Hr;function hf(n,e=!1){if(n.flags|=8,e){n.next=Hr,Hr=n;return}n.next=zr,zr=n}function Il(){ff++}function Ul(){if(--ff>0)return;if(Hr){let e=Hr;for(Hr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;zr;){let e=zr;for(zr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function df(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function pf(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),Nl(i),bd(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function So(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(mf(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function mf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===qr)||(n.globalVersion=qr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!So(n))))return;n.flags|=2;const e=n.dep,t=ht,i=pn;ht=n,pn=!0;try{df(n);const r=n.fn(n._value);(e.version===0||gi(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{ht=t,pn=i,pf(n),n.flags&=-3}}function Nl(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Nl(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function bd(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let pn=!0;const gf=[];function Jn(){gf.push(pn),pn=!1}function Qn(){const n=gf.pop();pn=n===void 0?!0:n}function _c(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=ht;ht=void 0;try{e()}finally{ht=t}}}let qr=0;class Td{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Fl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!ht||!pn||ht===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==ht)t=this.activeLink=new Td(ht,this),ht.deps?(t.prevDep=ht.depsTail,ht.depsTail.nextDep=t,ht.depsTail=t):ht.deps=ht.depsTail=t,_f(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=ht.depsTail,t.nextDep=void 0,ht.depsTail.nextDep=t,ht.depsTail=t,ht.deps===t&&(ht.deps=i)}return t}trigger(e){this.version++,qr++,this.notify(e)}notify(e){Il();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Ul()}}}function _f(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)_f(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Mo=new WeakMap,Gi=Symbol(""),Eo=Symbol(""),Yr=Symbol("");function Ct(n,e,t){if(pn&&ht){let i=Mo.get(n);i||Mo.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new Fl),r.map=i,r.key=t),r.track()}}function qn(n,e,t,i,r,s){const a=Mo.get(n);if(!a){qr++;return}const o=l=>{l&&l.trigger()};if(Il(),e==="clear")a.forEach(o);else{const l=Oe(n),c=l&&Pl(t);if(l&&t==="length"){const u=Number(i);a.forEach((f,h)=>{(h==="length"||h===Yr||!Mi(h)&&h>=u)&&o(f)})}else switch((t!==void 0||a.has(void 0))&&o(a.get(t)),c&&o(a.get(Yr)),e){case"add":l?c&&o(a.get("length")):(o(a.get(Gi)),hr(n)&&o(a.get(Eo)));break;case"delete":l||(o(a.get(Gi)),hr(n)&&o(a.get(Eo)));break;case"set":hr(n)&&o(a.get(Gi));break}}Ul()}function qi(n){const e=tt(n);return e===n?e:(Ct(e,"iterate",Yr),mn(n)?e:e.map(ei))}function Ol(n){return Ct(n=tt(n),"iterate",Yr),n}function fi(n,e){return xi(n)?dr(n)?$r(ei(e)):$r(e):ei(e)}const Ad={__proto__:null,[Symbol.iterator](){return Pa(this,Symbol.iterator,n=>fi(this,n))},concat(...n){return qi(this).concat(...n.map(e=>Oe(e)?qi(e):e))},entries(){return Pa(this,"entries",n=>(n[1]=fi(this,n[1]),n))},every(n,e){return Fn(this,"every",n,e,void 0,arguments)},filter(n,e){return Fn(this,"filter",n,e,t=>t.map(i=>fi(this,i)),arguments)},find(n,e){return Fn(this,"find",n,e,t=>fi(this,t),arguments)},findIndex(n,e){return Fn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Fn(this,"findLast",n,e,t=>fi(this,t),arguments)},findLastIndex(n,e){return Fn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Fn(this,"forEach",n,e,void 0,arguments)},includes(...n){return Da(this,"includes",n)},indexOf(...n){return Da(this,"indexOf",n)},join(n){return qi(this).join(n)},lastIndexOf(...n){return Da(this,"lastIndexOf",n)},map(n,e){return Fn(this,"map",n,e,void 0,arguments)},pop(){return wr(this,"pop")},push(...n){return wr(this,"push",n)},reduce(n,...e){return xc(this,"reduce",n,e)},reduceRight(n,...e){return xc(this,"reduceRight",n,e)},shift(){return wr(this,"shift")},some(n,e){return Fn(this,"some",n,e,void 0,arguments)},splice(...n){return wr(this,"splice",n)},toReversed(){return qi(this).toReversed()},toSorted(n){return qi(this).toSorted(n)},toSpliced(...n){return qi(this).toSpliced(...n)},unshift(...n){return wr(this,"unshift",n)},values(){return Pa(this,"values",n=>fi(this,n))}};function Pa(n,e,t){const i=Ol(n),r=i[e]();return i!==n&&!mn(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const wd=Array.prototype;function Fn(n,e,t,i,r,s){const a=Ol(n),o=a!==n&&!mn(n),l=a[e];if(l!==wd[e]){const f=l.apply(n,s);return o?ei(f):f}let c=t;a!==n&&(o?c=function(f,h){return t.call(this,fi(n,f),h,n)}:t.length>2&&(c=function(f,h){return t.call(this,f,h,n)}));const u=l.call(a,c,i);return o&&r?r(u):u}function xc(n,e,t,i){const r=Ol(n);let s=t;return r!==n&&(mn(n)?t.length>3&&(s=function(a,o,l){return t.call(this,a,o,l,n)}):s=function(a,o,l){return t.call(this,a,fi(n,o),l,n)}),r[e](s,...i)}function Da(n,e,t){const i=tt(n);Ct(i,"iterate",Yr);const r=i[e](...t);return(r===-1||r===!1)&&Hl(t[0])?(t[0]=tt(t[0]),i[e](...t)):r}function wr(n,e,t=[]){Jn(),Il();const i=tt(n)[e].apply(n,t);return Ul(),Qn(),i}const Rd=wl("__proto__,__v_isRef,__isVue"),xf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Mi));function Cd(n){Mi(n)||(n=String(n));const e=tt(this);return Ct(e,"has",n),e.hasOwnProperty(n)}class vf{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?Vd:yf:s?Ef:Mf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=Oe(e);if(!r){let l;if(a&&(l=Ad[t]))return l;if(t==="hasOwnProperty")return Cd}const o=Reflect.get(e,t,Dt(e)?e:i);if((Mi(t)?xf.has(t):Rd(t))||(r||Ct(e,"get",t),s))return o;if(Dt(o)){const l=a&&Pl(t)?o:o.value;return r&&pt(l)?bo(l):l}return pt(o)?r?bo(o):Vl(o):o}}class Sf extends vf{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const a=Oe(e)&&Pl(t);if(!this._isShallow){const c=xi(s);if(!mn(i)&&!xi(i)&&(s=tt(s),i=tt(i)),!a&&Dt(s)&&!Dt(i))return c||(s.value=i),!0}const o=a?Number(t)<e.length:nt(e,t),l=Reflect.set(e,t,i,Dt(e)?e:r);return e===tt(r)&&(o?gi(i,s)&&qn(e,"set",t,i):qn(e,"add",t,i)),l}deleteProperty(e,t){const i=nt(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&qn(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!Mi(t)||!xf.has(t))&&Ct(e,"has",t),i}ownKeys(e){return Ct(e,"iterate",Oe(e)?"length":Gi),Reflect.ownKeys(e)}}class Pd extends vf{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Dd=new Sf,Ld=new Pd,Id=new Sf(!0);const yo=n=>n,ds=n=>Reflect.getPrototypeOf(n);function Ud(n,e,t){return function(...i){const r=this.__v_raw,s=tt(r),a=hr(s),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=r[n](...i),u=t?yo:e?$r:ei;return!e&&Ct(s,"iterate",l?Eo:Gi),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:o?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function ps(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Nd(n,e){const t={get(r){const s=this.__v_raw,a=tt(s),o=tt(r);n||(gi(r,o)&&Ct(a,"get",r),Ct(a,"get",o));const{has:l}=ds(a),c=e?yo:n?$r:ei;if(l.call(a,r))return c(s.get(r));if(l.call(a,o))return c(s.get(o));s!==a&&s.get(r)},get size(){const r=this.__v_raw;return!n&&Ct(tt(r),"iterate",Gi),r.size},has(r){const s=this.__v_raw,a=tt(s),o=tt(r);return n||(gi(r,o)&&Ct(a,"has",r),Ct(a,"has",o)),r===o?s.has(r):s.has(r)||s.has(o)},forEach(r,s){const a=this,o=a.__v_raw,l=tt(o),c=e?yo:n?$r:ei;return!n&&Ct(l,"iterate",Gi),o.forEach((u,f)=>r.call(s,c(u),c(f),a))}};return At(t,n?{add:ps("add"),set:ps("set"),delete:ps("delete"),clear:ps("clear")}:{add(r){!e&&!mn(r)&&!xi(r)&&(r=tt(r));const s=tt(this);return ds(s).has.call(s,r)||(s.add(r),qn(s,"add",r,r)),this},set(r,s){!e&&!mn(s)&&!xi(s)&&(s=tt(s));const a=tt(this),{has:o,get:l}=ds(a);let c=o.call(a,r);c||(r=tt(r),c=o.call(a,r));const u=l.call(a,r);return a.set(r,s),c?gi(s,u)&&qn(a,"set",r,s):qn(a,"add",r,s),this},delete(r){const s=tt(this),{has:a,get:o}=ds(s);let l=a.call(s,r);l||(r=tt(r),l=a.call(s,r)),o&&o.call(s,r);const c=s.delete(r);return l&&qn(s,"delete",r,void 0),c},clear(){const r=tt(this),s=r.size!==0,a=r.clear();return s&&qn(r,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Ud(r,n,e)}),t}function Bl(n,e){const t=Nd(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(nt(t,r)&&r in i?t:i,r,s)}const Fd={get:Bl(!1,!1)},Od={get:Bl(!1,!0)},Bd={get:Bl(!0,!1)};const Mf=new WeakMap,Ef=new WeakMap,yf=new WeakMap,Vd=new WeakMap;function zd(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Hd(n){return n.__v_skip||!Object.isExtensible(n)?0:zd(hd(n))}function Vl(n){return xi(n)?n:zl(n,!1,Dd,Fd,Mf)}function Gd(n){return zl(n,!1,Id,Od,Ef)}function bo(n){return zl(n,!0,Ld,Bd,yf)}function zl(n,e,t,i,r){if(!pt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=Hd(n);if(s===0)return n;const a=r.get(n);if(a)return a;const o=new Proxy(n,s===2?i:t);return r.set(n,o),o}function dr(n){return xi(n)?dr(n.__v_raw):!!(n&&n.__v_isReactive)}function xi(n){return!!(n&&n.__v_isReadonly)}function mn(n){return!!(n&&n.__v_isShallow)}function Hl(n){return n?!!n.__v_raw:!1}function tt(n){const e=n&&n.__v_raw;return e?tt(e):n}function kd(n){return!nt(n,"__v_skip")&&Object.isExtensible(n)&&af(n,"__v_skip",!0),n}const ei=n=>pt(n)?Vl(n):n,$r=n=>pt(n)?bo(n):n;function Dt(n){return n?n.__v_isRef===!0:!1}function On(n){return Wd(n,!1)}function Wd(n,e){return Dt(n)?n:new Xd(n,e)}class Xd{constructor(e,t){this.dep=new Fl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:tt(e),this._value=t?e:ei(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||mn(e)||xi(e);e=i?e:tt(e),gi(e,t)&&(this._rawValue=e,this._value=i?e:ei(e),this.dep.trigger())}}function qd(n){return Dt(n)?n.value:n}const Yd={get:(n,e,t)=>e==="__v_raw"?n:qd(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Dt(r)&&!Dt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function bf(n){return dr(n)?n:new Proxy(n,Yd)}class $d{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Fl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=qr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ht!==this)return hf(this,!0),!0}get value(){const e=this.dep.track();return mf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Kd(n,e,t=!1){let i,r;return We(n)?i=n:(i=n.get,r=n.set),new $d(i,r,t)}const ms={},Zs=new WeakMap;let Ui;function jd(n,e=!1,t=Ui){if(t){let i=Zs.get(t);i||Zs.set(t,i=[]),i.push(n)}}function Zd(n,e,t=ct){const{immediate:i,deep:r,once:s,scheduler:a,augmentJob:o,call:l}=t,c=y=>r?y:mn(y)||r===!1||r===0?Yn(y,1):Yn(y);let u,f,h,p,x=!1,S=!1;if(Dt(n)?(f=()=>n.value,x=mn(n)):dr(n)?(f=()=>c(n),x=!0):Oe(n)?(S=!0,x=n.some(y=>dr(y)||mn(y)),f=()=>n.map(y=>{if(Dt(y))return y.value;if(dr(y))return c(y);if(We(y))return l?l(y,2):y()})):We(n)?e?f=l?()=>l(n,2):n:f=()=>{if(h){Jn();try{h()}finally{Qn()}}const y=Ui;Ui=u;try{return l?l(n,3,[p]):n(p)}finally{Ui=y}}:f=Rn,e&&r){const y=f,C=r===!0?1/0:r;f=()=>Yn(y(),C)}const g=yd(),d=()=>{u.stop(),g&&g.active&&Cl(g.effects,u)};if(s&&e){const y=e;e=(...C)=>{y(...C),d()}}let b=S?new Array(n.length).fill(ms):ms;const A=y=>{if(!(!(u.flags&1)||!u.dirty&&!y))if(e){const C=u.run();if(r||x||(S?C.some((R,T)=>gi(R,b[T])):gi(C,b))){h&&h();const R=Ui;Ui=u;try{const T=[C,b===ms?void 0:S&&b[0]===ms?[]:b,p];b=C,l?l(e,3,T):e(...T)}finally{Ui=R}}}else u.run()};return o&&o(A),u=new uf(f),u.scheduler=a?()=>a(A,!1):A,p=y=>jd(y,!1,u),h=u.onStop=()=>{const y=Zs.get(u);if(y){if(l)l(y,4);else for(const C of y)C();Zs.delete(u)}},e?i?A(!0):b=u.run():a?a(A.bind(null,!0),!0):u.run(),d.pause=u.pause.bind(u),d.resume=u.resume.bind(u),d.stop=d,d}function Yn(n,e=1/0,t){if(e<=0||!pt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Dt(n))Yn(n.value,e,t);else if(Oe(n))for(let i=0;i<n.length;i++)Yn(n[i],e,t);else if(ef(n)||hr(n))n.forEach(i=>{Yn(i,e,t)});else if(rf(n)){for(const i in n)Yn(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Yn(n[i],e,t)}return n}function rs(n,e,t,i){try{return i?n(...i):n()}catch(r){da(r,e,t)}}function _n(n,e,t,i){if(We(n)){const r=rs(n,e,t,i);return r&&tf(r)&&r.catch(s=>{da(s,e,t)}),r}if(Oe(n)){const r=[];for(let s=0;s<n.length;s++)r.push(_n(n[s],e,t,i));return r}}function da(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||ct;if(e){let o=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;o;){const u=o.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}o=o.parent}if(s){Jn(),rs(s,null,10,[n,l,c]),Qn();return}}Jd(n,t,r,i,a)}function Jd(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const Nt=[];let yn=-1;const pr=[];let hi=null,lr=0;const Tf=Promise.resolve();let Js=null;function Qd(n){const e=Js||Tf;return n?e.then(this?n.bind(this):n):e}function ep(n){let e=yn+1,t=Nt.length;for(;e<t;){const i=e+t>>>1,r=Nt[i],s=Kr(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function Gl(n){if(!(n.flags&1)){const e=Kr(n),t=Nt[Nt.length-1];!t||!(n.flags&2)&&e>=Kr(t)?Nt.push(n):Nt.splice(ep(e),0,n),n.flags|=1,Af()}}function Af(){Js||(Js=Tf.then(Rf))}function tp(n){Oe(n)?pr.push(...n):hi&&n.id===-1?hi.splice(lr+1,0,n):n.flags&1||(pr.push(n),n.flags|=1),Af()}function vc(n,e,t=yn+1){for(;t<Nt.length;t++){const i=Nt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Nt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function wf(n){if(pr.length){const e=[...new Set(pr)].sort((t,i)=>Kr(t)-Kr(i));if(pr.length=0,hi){hi.push(...e);return}for(hi=e,lr=0;lr<hi.length;lr++){const t=hi[lr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}hi=null,lr=0}}const Kr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Rf(n){try{for(yn=0;yn<Nt.length;yn++){const e=Nt[yn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),rs(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;yn<Nt.length;yn++){const e=Nt[yn];e&&(e.flags&=-2)}yn=-1,Nt.length=0,wf(),Js=null,(Nt.length||pr.length)&&Rf()}}let an=null,Cf=null;function Qs(n){const e=an;return an=n,Cf=n&&n.type.__scopeId||null,e}function Pf(n,e=an,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&na(-1);const s=Qs(e);let a;try{a=n(...r)}finally{Qs(s),i._d&&na(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function vn(n,e){if(an===null)return n;const t=xa(an),i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,a,o,l=ct]=e[r];s&&(We(s)&&(s={mounted:s,updated:s}),s.deep&&Yn(a),i.push({dir:s,instance:t,value:a,oldValue:void 0,arg:o,modifiers:l}))}return n}function bi(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(Jn(),_n(l,t,8,[n.el,o,n,e]),Qn())}}function np(n,e){if(Ot){let t=Ot.provides;const i=Ot.parent&&Ot.parent.provides;i===t&&(t=Ot.provides=Object.create(i)),t[n]=e}}function Gs(n,e,t=!1){const i=ah();if(i||mr){let r=mr?mr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&We(e)?e.call(i&&i.proxy):e}}const ip=Symbol.for("v-scx"),rp=()=>Gs(ip);function La(n,e,t){return Df(n,e,t)}function Df(n,e,t=ct){const{immediate:i,deep:r,flush:s,once:a}=t,o=At({},t),l=e&&i||!e&&s!=="post";let c;if(Jr){if(s==="sync"){const p=rp();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=Rn,p.resume=Rn,p.pause=Rn,p}}const u=Ot;o.call=(p,x,S)=>_n(p,u,x,S);let f=!1;s==="post"?o.scheduler=p=>{jt(p,u&&u.suspense)}:s!=="sync"&&(f=!0,o.scheduler=(p,x)=>{x?p():Gl(p)}),o.augmentJob=p=>{e&&(p.flags|=4),f&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const h=Zd(n,e,o);return Jr&&(c?c.push(h):l&&h()),h}function sp(n,e,t){const i=this.proxy,r=St(n)?n.includes(".")?Lf(i,n):()=>i[n]:n.bind(i,i);let s;We(e)?s=e:(s=e.handler,t=e);const a=ss(this),o=Df(r,s.bind(i),t);return a(),o}function Lf(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const ap=Symbol("_vte"),If=n=>n.__isTeleport,Xn=Symbol("_leaveCb"),gs=Symbol("_enterCb");function op(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return kl(()=>{n.isMounted=!0}),Hf(()=>{n.isUnmounting=!0}),n}const tn=[Function,Array],Uf={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:tn,onEnter:tn,onAfterEnter:tn,onEnterCancelled:tn,onBeforeLeave:tn,onLeave:tn,onAfterLeave:tn,onLeaveCancelled:tn,onBeforeAppear:tn,onAppear:tn,onAfterAppear:tn,onAppearCancelled:tn},Nf=n=>{const e=n.subTree;return e.component?Nf(e.component):e},lp={name:"BaseTransition",props:Uf,setup(n,{slots:e}){const t=ah(),i=op();return()=>{const r=e.default&&Bf(e.default(),!0);if(!r||!r.length)return;const s=Ff(r),a=tt(n),{mode:o}=a;if(i.isLeaving)return Ia(s);const l=Sc(s);if(!l)return Ia(s);let c=To(l,a,i,t,f=>c=f);l.type!==Ft&&jr(l,c);let u=t.subTree&&Sc(t.subTree);if(u&&u.type!==Ft&&!Oi(u,l)&&Nf(t).type!==Ft){let f=To(u,a,i,t);if(jr(u,f),o==="out-in"&&l.type!==Ft)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete f.afterLeave,u=void 0},Ia(s);o==="in-out"&&l.type!==Ft?f.delayLeave=(h,p,x)=>{const S=Of(i,u);S[String(u.key)]=u,h[Xn]=()=>{p(),h[Xn]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{x(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return s}}};function Ff(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==Ft){e=t;break}}return e}const cp=lp;function Of(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function To(n,e,t,i,r){const{appear:s,mode:a,persisted:o=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:h,onLeave:p,onAfterLeave:x,onLeaveCancelled:S,onBeforeAppear:g,onAppear:d,onAfterAppear:b,onAppearCancelled:A}=e,y=String(n.key),C=Of(t,n),R=(_,M)=>{_&&_n(_,i,9,M)},T=(_,M)=>{const L=M[1];R(_,M),Oe(_)?_.every(N=>N.length<=1)&&L():_.length<=1&&L()},U={mode:a,persisted:o,beforeEnter(_){let M=l;if(!t.isMounted)if(s)M=g||l;else return;_[Xn]&&_[Xn](!0);const L=C[y];L&&Oi(n,L)&&L.el[Xn]&&L.el[Xn](),R(M,[_])},enter(_){let M=c,L=u,N=f;if(!t.isMounted)if(s)M=d||c,L=b||u,N=A||f;else return;let B=!1;const Z=_[gs]=K=>{B||(B=!0,K?R(N,[_]):R(L,[_]),U.delayedLeave&&U.delayedLeave(),_[gs]=void 0)};M?T(M,[_,Z]):Z()},leave(_,M){const L=String(n.key);if(_[gs]&&_[gs](!0),t.isUnmounting)return M();R(h,[_]);let N=!1;const B=_[Xn]=Z=>{N||(N=!0,M(),Z?R(S,[_]):R(x,[_]),_[Xn]=void 0,C[L]===n&&delete C[L])};C[L]=n,p?T(p,[_,B]):B()},clone(_){const M=To(_,e,t,i,r);return r&&r(M),M}};return U}function Ia(n){if(pa(n))return n=vi(n),n.children=null,n}function Sc(n){if(!pa(n))return If(n.type)&&n.children?Ff(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&We(t.default))return t.default()}}function jr(n,e){n.shapeFlag&6&&n.component?(n.transition=e,jr(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Bf(n,e=!1,t){let i=[],r=0;for(let s=0;s<n.length;s++){let a=n[s];const o=t==null?a.key:String(t)+String(a.key!=null?a.key:s);a.type===sn?(a.patchFlag&128&&r++,i=i.concat(Bf(a.children,e,o))):(e||a.type!==Ft)&&i.push(o!=null?vi(a,{key:o}):a)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function Vf(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}const ea=new WeakMap;function Gr(n,e,t,i,r=!1){if(Oe(n)){n.forEach((x,S)=>Gr(x,e&&(Oe(e)?e[S]:e),t,i,r));return}if(kr(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Gr(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?xa(i.component):i.el,a=r?null:s,{i:o,r:l}=n,c=e&&e.r,u=o.refs===ct?o.refs={}:o.refs,f=o.setupState,h=tt(f),p=f===ct?Qu:x=>nt(h,x);if(c!=null&&c!==l){if(Mc(e),St(c))u[c]=null,p(c)&&(f[c]=null);else if(Dt(c)){c.value=null;const x=e;x.k&&(u[x.k]=null)}}if(We(l))rs(l,o,12,[a,u]);else{const x=St(l),S=Dt(l);if(x||S){const g=()=>{if(n.f){const d=x?p(l)?f[l]:u[l]:l.value;if(r)Oe(d)&&Cl(d,s);else if(Oe(d))d.includes(s)||d.push(s);else if(x)u[l]=[s],p(l)&&(f[l]=u[l]);else{const b=[s];l.value=b,n.k&&(u[n.k]=b)}}else x?(u[l]=a,p(l)&&(f[l]=a)):S&&(l.value=a,n.k&&(u[n.k]=a))};if(a){const d=()=>{g(),ea.delete(n)};d.id=-1,ea.set(n,d),jt(d,t)}else Mc(n),g()}}}function Mc(n){const e=ea.get(n);e&&(e.flags|=8,ea.delete(n))}fa().requestIdleCallback;fa().cancelIdleCallback;const kr=n=>!!n.type.__asyncLoader,pa=n=>n.type.__isKeepAlive;function up(n,e){zf(n,"a",e)}function fp(n,e){zf(n,"da",e)}function zf(n,e,t=Ot){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(ma(e,i,t),t){let r=t.parent;for(;r&&r.parent;)pa(r.parent.vnode)&&hp(i,e,t,r),r=r.parent}}function hp(n,e,t,i){const r=ma(e,n,i,!0);Wl(()=>{Cl(i[e],r)},t)}function ma(n,e,t=Ot,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...a)=>{Jn();const o=ss(t),l=_n(e,t,n,a);return o(),Qn(),l});return i?r.unshift(s):r.push(s),s}}const ii=n=>(e,t=Ot)=>{(!Jr||n==="sp")&&ma(n,(...i)=>e(...i),t)},dp=ii("bm"),kl=ii("m"),pp=ii("bu"),mp=ii("u"),Hf=ii("bum"),Wl=ii("um"),gp=ii("sp"),_p=ii("rtg"),xp=ii("rtc");function vp(n,e=Ot){ma("ec",n,e)}const Sp=Symbol.for("v-ndc"),Ao=n=>n?oh(n)?xa(n):Ao(n.parent):null,Wr=At(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Ao(n.parent),$root:n=>Ao(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>kf(n),$forceUpdate:n=>n.f||(n.f=()=>{Gl(n.update)}),$nextTick:n=>n.n||(n.n=Qd.bind(n.proxy)),$watch:n=>sp.bind(n)}),Ua=(n,e)=>n!==ct&&!n.__isScriptSetup&&nt(n,e),Mp={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=n;if(e[0]!=="$"){const h=a[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Ua(i,e))return a[e]=1,i[e];if(r!==ct&&nt(r,e))return a[e]=2,r[e];if(nt(s,e))return a[e]=3,s[e];if(t!==ct&&nt(t,e))return a[e]=4,t[e];wo&&(a[e]=0)}}const c=Wr[e];let u,f;if(c)return e==="$attrs"&&Ct(n.attrs,"get",""),c(n);if((u=o.__cssModules)&&(u=u[e]))return u;if(t!==ct&&nt(t,e))return a[e]=4,t[e];if(f=l.config.globalProperties,nt(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Ua(r,e)?(r[e]=t,!0):i!==ct&&nt(i,e)?(i[e]=t,!0):nt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:a}},o){let l;return!!(t[o]||n!==ct&&o[0]!=="$"&&nt(n,o)||Ua(e,o)||nt(s,o)||nt(i,o)||nt(Wr,o)||nt(r.config.globalProperties,o)||(l=a.__cssModules)&&l[o])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:nt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Ec(n){return Oe(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let wo=!0;function Ep(n){const e=kf(n),t=n.proxy,i=n.ctx;wo=!1,e.beforeCreate&&yc(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:p,updated:x,activated:S,deactivated:g,beforeDestroy:d,beforeUnmount:b,destroyed:A,unmounted:y,render:C,renderTracked:R,renderTriggered:T,errorCaptured:U,serverPrefetch:_,expose:M,inheritAttrs:L,components:N,directives:B,filters:Z}=e;if(c&&yp(c,i,null),a)for(const V in a){const J=a[V];We(J)&&(i[V]=J.bind(t))}if(r){const V=r.call(t,t);pt(V)&&(n.data=Vl(V))}if(wo=!0,s)for(const V in s){const J=s[V],ge=We(J)?J.bind(t,t):We(J.get)?J.get.bind(t,t):Rn,de=!We(J)&&We(J.set)?J.set.bind(t):Rn,_e=am({get:ge,set:de});Object.defineProperty(i,V,{enumerable:!0,configurable:!0,get:()=>_e.value,set:Ne=>_e.value=Ne})}if(o)for(const V in o)Gf(o[V],i,t,V);if(l){const V=We(l)?l.call(t):l;Reflect.ownKeys(V).forEach(J=>{np(J,V[J])})}u&&yc(u,n,"c");function q(V,J){Oe(J)?J.forEach(ge=>V(ge.bind(t))):J&&V(J.bind(t))}if(q(dp,f),q(kl,h),q(pp,p),q(mp,x),q(up,S),q(fp,g),q(vp,U),q(xp,R),q(_p,T),q(Hf,b),q(Wl,y),q(gp,_),Oe(M))if(M.length){const V=n.exposed||(n.exposed={});M.forEach(J=>{Object.defineProperty(V,J,{get:()=>t[J],set:ge=>t[J]=ge,enumerable:!0})})}else n.exposed||(n.exposed={});C&&n.render===Rn&&(n.render=C),L!=null&&(n.inheritAttrs=L),N&&(n.components=N),B&&(n.directives=B),_&&Vf(n)}function yp(n,e,t=Rn){Oe(n)&&(n=Ro(n));for(const i in n){const r=n[i];let s;pt(r)?"default"in r?s=Gs(r.from||i,r.default,!0):s=Gs(r.from||i):s=Gs(r),Dt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[i]=s}}function yc(n,e,t){_n(Oe(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Gf(n,e,t,i){let r=i.includes(".")?Lf(t,i):()=>t[i];if(St(n)){const s=e[n];We(s)&&La(r,s)}else if(We(n))La(r,n.bind(t));else if(pt(n))if(Oe(n))n.forEach(s=>Gf(s,e,t,i));else{const s=We(n.handler)?n.handler.bind(t):e[n.handler];We(s)&&La(r,s,n)}}function kf(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=n.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>ta(l,c,a,!0)),ta(l,e,a)),pt(e)&&s.set(e,l),l}function ta(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&ta(n,s,t,!0),r&&r.forEach(a=>ta(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=bp[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const bp={data:bc,props:Tc,emits:Tc,methods:Fr,computed:Fr,beforeCreate:It,created:It,beforeMount:It,mounted:It,beforeUpdate:It,updated:It,beforeDestroy:It,beforeUnmount:It,destroyed:It,unmounted:It,activated:It,deactivated:It,errorCaptured:It,serverPrefetch:It,components:Fr,directives:Fr,watch:Ap,provide:bc,inject:Tp};function bc(n,e){return e?n?function(){return At(We(n)?n.call(this,this):n,We(e)?e.call(this,this):e)}:e:n}function Tp(n,e){return Fr(Ro(n),Ro(e))}function Ro(n){if(Oe(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function It(n,e){return n?[...new Set([].concat(n,e))]:e}function Fr(n,e){return n?At(Object.create(null),n,e):e}function Tc(n,e){return n?Oe(n)&&Oe(e)?[...new Set([...n,...e])]:At(Object.create(null),Ec(n),Ec(e??{})):e}function Ap(n,e){if(!n)return e;if(!e)return n;const t=At(Object.create(null),n);for(const i in e)t[i]=It(n[i],e[i]);return t}function Wf(){return{app:null,config:{isNativeTag:Qu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let wp=0;function Rp(n,e){return function(i,r=null){We(i)||(i=At({},i)),r!=null&&!pt(r)&&(r=null);const s=Wf(),a=new WeakSet,o=[];let l=!1;const c=s.app={_uid:wp++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:lm,get config(){return s.config},set config(u){},use(u,...f){return a.has(u)||(u&&We(u.install)?(a.add(u),u.install(c,...f)):We(u)&&(a.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,h){if(!l){const p=c._ceVNode||Wt(i,r);return p.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),n(p,u,h),l=!0,c._container=u,u.__vue_app__=c,xa(p.component)}},onUnmount(u){o.push(u)},unmount(){l&&(_n(o,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=mr;mr=c;try{return u()}finally{mr=f}}};return c}}let mr=null;const Cp=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${_i(e)}Modifiers`]||n[`${Wi(e)}Modifiers`];function Pp(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||ct;let r=t;const s=e.startsWith("update:"),a=s&&Cp(i,e.slice(7));a&&(a.trim&&(r=t.map(u=>St(u)?u.trim():u)),a.number&&(r=t.map(Dl)));let o,l=i[o=wa(e)]||i[o=wa(_i(e))];!l&&s&&(l=i[o=wa(Wi(e))]),l&&_n(l,n,6,r);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,_n(c,n,6,r)}}const Dp=new WeakMap;function Xf(n,e,t=!1){const i=t?Dp:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let a={},o=!1;if(!We(n)){const l=c=>{const u=Xf(c,e,!0);u&&(o=!0,At(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!o?(pt(n)&&i.set(n,null),null):(Oe(s)?s.forEach(l=>a[l]=null):At(a,s),pt(n)&&i.set(n,a),a)}function ga(n,e){return!n||!la(e)?!1:(e=e.slice(2).replace(/Once$/,""),nt(n,e[0].toLowerCase()+e.slice(1))||nt(n,Wi(e))||nt(n,e))}function Ac(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:a,attrs:o,emit:l,render:c,renderCache:u,props:f,data:h,setupState:p,ctx:x,inheritAttrs:S}=n,g=Qs(n);let d,b;try{if(t.shapeFlag&4){const y=r||i,C=y;d=bn(c.call(C,y,u,f,p,h,x)),b=o}else{const y=e;d=bn(y.length>1?y(f,{attrs:o,slots:a,emit:l}):y(f,null)),b=e.props?o:Lp(o)}}catch(y){Xr.length=0,da(y,n,1),d=Wt(Ft)}let A=d;if(b&&S!==!1){const y=Object.keys(b),{shapeFlag:C}=A;y.length&&C&7&&(s&&y.some(Rl)&&(b=Ip(b,s)),A=vi(A,b,!1,!0))}return t.dirs&&(A=vi(A,null,!1,!0),A.dirs=A.dirs?A.dirs.concat(t.dirs):t.dirs),t.transition&&jr(A,t.transition),d=A,Qs(g),d}const Lp=n=>{let e;for(const t in n)(t==="class"||t==="style"||la(t))&&((e||(e={}))[t]=n[t]);return e},Ip=(n,e)=>{const t={};for(const i in n)(!Rl(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Up(n,e,t){const{props:i,children:r,component:s}=n,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?wc(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(a[h]!==i[h]&&!ga(c,h))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?wc(i,a,c):!0:!!a;return!1}function wc(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!ga(t,s))return!0}return!1}function Np({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const qf={},Yf=()=>Object.create(qf),$f=n=>Object.getPrototypeOf(n)===qf;function Fp(n,e,t,i=!1){const r={},s=Yf();n.propsDefaults=Object.create(null),Kf(n,e,r,s);for(const a in n.propsOptions[0])a in r||(r[a]=void 0);t?n.props=i?r:Gd(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function Op(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=n,o=tt(r),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(ga(n.emitsOptions,h))continue;const p=e[h];if(l)if(nt(s,h))p!==s[h]&&(s[h]=p,c=!0);else{const x=_i(h);r[x]=Co(l,o,x,p,n,!1)}else p!==s[h]&&(s[h]=p,c=!0)}}}else{Kf(n,e,r,s)&&(c=!0);let u;for(const f in o)(!e||!nt(e,f)&&((u=Wi(f))===f||!nt(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=Co(l,o,f,void 0,n,!0)):delete r[f]);if(s!==o)for(const f in s)(!e||!nt(e,f))&&(delete s[f],c=!0)}c&&qn(n.attrs,"set","")}function Kf(n,e,t,i){const[r,s]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(Vr(l))continue;const c=e[l];let u;r&&nt(r,u=_i(l))?!s||!s.includes(u)?t[u]=c:(o||(o={}))[u]=c:ga(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(s){const l=tt(t),c=o||ct;for(let u=0;u<s.length;u++){const f=s[u];t[f]=Co(r,l,f,c[f],n,!nt(c,f))}}return a}function Co(n,e,t,i,r,s){const a=n[t];if(a!=null){const o=nt(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&We(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=ss(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===Wi(t))&&(i=!0))}return i}const Bp=new WeakMap;function jf(n,e,t=!1){const i=t?Bp:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,a={},o=[];let l=!1;if(!We(n)){const u=f=>{l=!0;const[h,p]=jf(f,e,!0);At(a,h),p&&o.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return pt(n)&&i.set(n,fr),fr;if(Oe(s))for(let u=0;u<s.length;u++){const f=_i(s[u]);Rc(f)&&(a[f]=ct)}else if(s)for(const u in s){const f=_i(u);if(Rc(f)){const h=s[u],p=a[f]=Oe(h)||We(h)?{type:h}:At({},h),x=p.type;let S=!1,g=!0;if(Oe(x))for(let d=0;d<x.length;++d){const b=x[d],A=We(b)&&b.name;if(A==="Boolean"){S=!0;break}else A==="String"&&(g=!1)}else S=We(x)&&x.name==="Boolean";p[0]=S,p[1]=g,(S||nt(p,"default"))&&o.push(f)}}const c=[a,o];return pt(n)&&i.set(n,c),c}function Rc(n){return n[0]!=="$"&&!Vr(n)}const Xl=n=>n==="_"||n==="_ctx"||n==="$stable",ql=n=>Oe(n)?n.map(bn):[bn(n)],Vp=(n,e,t)=>{if(e._n)return e;const i=Pf((...r)=>ql(e(...r)),t);return i._c=!1,i},Zf=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Xl(r))continue;const s=n[r];if(We(s))e[r]=Vp(r,s,i);else if(s!=null){const a=ql(s);e[r]=()=>a}}},Jf=(n,e)=>{const t=ql(e);n.slots.default=()=>t},Qf=(n,e,t)=>{for(const i in e)(t||!Xl(i))&&(n[i]=e[i])},zp=(n,e,t)=>{const i=n.slots=Yf();if(n.vnode.shapeFlag&32){const r=e._;r?(Qf(i,e,t),t&&af(i,"_",r,!0)):Zf(e,i)}else e&&Jf(n,e)},Hp=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,a=ct;if(i.shapeFlag&32){const o=e._;o?t&&o===1?s=!1:Qf(r,e,t):(s=!e.$stable,Zf(e,r)),a=e}else e&&(Jf(n,e),a={default:1});if(s)for(const o in r)!Xl(o)&&a[o]==null&&delete r[o]},jt=qp;function Gp(n){return kp(n)}function kp(n,e){const t=fa();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:p=Rn,insertStaticContent:x}=n,S=(P,I,k,ee=null,$=null,ne=null,w=void 0,oe=null,ie=!!I.dynamicChildren)=>{if(P===I)return;P&&!Oi(P,I)&&(ee=ae(P),Ne(P,$,ne,!0),P=null),I.patchFlag===-2&&(ie=!1,I.dynamicChildren=null);const{type:Q,ref:re,shapeFlag:v}=I;switch(Q){case _a:g(P,I,k,ee);break;case Ft:d(P,I,k,ee);break;case Fa:P==null&&b(I,k,ee,w);break;case sn:N(P,I,k,ee,$,ne,w,oe,ie);break;default:v&1?C(P,I,k,ee,$,ne,w,oe,ie):v&6?B(P,I,k,ee,$,ne,w,oe,ie):(v&64||v&128)&&Q.process(P,I,k,ee,$,ne,w,oe,ie,Re)}re!=null&&$?Gr(re,P&&P.ref,ne,I||P,!I):re==null&&P&&P.ref!=null&&Gr(P.ref,null,ne,P,!0)},g=(P,I,k,ee)=>{if(P==null)i(I.el=o(I.children),k,ee);else{const $=I.el=P.el;I.children!==P.children&&c($,I.children)}},d=(P,I,k,ee)=>{P==null?i(I.el=l(I.children||""),k,ee):I.el=P.el},b=(P,I,k,ee)=>{[P.el,P.anchor]=x(P.children,I,k,ee,P.el,P.anchor)},A=({el:P,anchor:I},k,ee)=>{let $;for(;P&&P!==I;)$=h(P),i(P,k,ee),P=$;i(I,k,ee)},y=({el:P,anchor:I})=>{let k;for(;P&&P!==I;)k=h(P),r(P),P=k;r(I)},C=(P,I,k,ee,$,ne,w,oe,ie)=>{if(I.type==="svg"?w="svg":I.type==="math"&&(w="mathml"),P==null)R(I,k,ee,$,ne,w,oe,ie);else{const Q=P.el&&P.el._isVueCE?P.el:null;try{Q&&Q._beginPatch(),_(P,I,$,ne,w,oe,ie)}finally{Q&&Q._endPatch()}}},R=(P,I,k,ee,$,ne,w,oe)=>{let ie,Q;const{props:re,shapeFlag:v,transition:m,dirs:D}=P;if(ie=P.el=a(P.type,ne,re&&re.is,re),v&8?u(ie,P.children):v&16&&U(P.children,ie,null,ee,$,Na(P,ne),w,oe),D&&bi(P,null,ee,"created"),T(ie,P,P.scopeId,w,ee),re){for(const j in re)j!=="value"&&!Vr(j)&&s(ie,j,null,re[j],ne,ee);"value"in re&&s(ie,"value",null,re.value,ne),(Q=re.onVnodeBeforeMount)&&Sn(Q,ee,P)}D&&bi(P,null,ee,"beforeMount");const W=Wp($,m);W&&m.beforeEnter(ie),i(ie,I,k),((Q=re&&re.onVnodeMounted)||W||D)&&jt(()=>{Q&&Sn(Q,ee,P),W&&m.enter(ie),D&&bi(P,null,ee,"mounted")},$)},T=(P,I,k,ee,$)=>{if(k&&p(P,k),ee)for(let ne=0;ne<ee.length;ne++)p(P,ee[ne]);if($){let ne=$.subTree;if(I===ne||ih(ne.type)&&(ne.ssContent===I||ne.ssFallback===I)){const w=$.vnode;T(P,w,w.scopeId,w.slotScopeIds,$.parent)}}},U=(P,I,k,ee,$,ne,w,oe,ie=0)=>{for(let Q=ie;Q<P.length;Q++){const re=P[Q]=oe?di(P[Q]):bn(P[Q]);S(null,re,I,k,ee,$,ne,w,oe)}},_=(P,I,k,ee,$,ne,w)=>{const oe=I.el=P.el;let{patchFlag:ie,dynamicChildren:Q,dirs:re}=I;ie|=P.patchFlag&16;const v=P.props||ct,m=I.props||ct;let D;if(k&&Ti(k,!1),(D=m.onVnodeBeforeUpdate)&&Sn(D,k,I,P),re&&bi(I,P,k,"beforeUpdate"),k&&Ti(k,!0),(v.innerHTML&&m.innerHTML==null||v.textContent&&m.textContent==null)&&u(oe,""),Q?M(P.dynamicChildren,Q,oe,k,ee,Na(I,$),ne):w||J(P,I,oe,null,k,ee,Na(I,$),ne,!1),ie>0){if(ie&16)L(oe,v,m,k,$);else if(ie&2&&v.class!==m.class&&s(oe,"class",null,m.class,$),ie&4&&s(oe,"style",v.style,m.style,$),ie&8){const W=I.dynamicProps;for(let j=0;j<W.length;j++){const H=W[j],Me=v[H],ce=m[H];(ce!==Me||H==="value")&&s(oe,H,Me,ce,$,k)}}ie&1&&P.children!==I.children&&u(oe,I.children)}else!w&&Q==null&&L(oe,v,m,k,$);((D=m.onVnodeUpdated)||re)&&jt(()=>{D&&Sn(D,k,I,P),re&&bi(I,P,k,"updated")},ee)},M=(P,I,k,ee,$,ne,w)=>{for(let oe=0;oe<I.length;oe++){const ie=P[oe],Q=I[oe],re=ie.el&&(ie.type===sn||!Oi(ie,Q)||ie.shapeFlag&198)?f(ie.el):k;S(ie,Q,re,null,ee,$,ne,w,!0)}},L=(P,I,k,ee,$)=>{if(I!==k){if(I!==ct)for(const ne in I)!Vr(ne)&&!(ne in k)&&s(P,ne,I[ne],null,$,ee);for(const ne in k){if(Vr(ne))continue;const w=k[ne],oe=I[ne];w!==oe&&ne!=="value"&&s(P,ne,oe,w,$,ee)}"value"in k&&s(P,"value",I.value,k.value,$)}},N=(P,I,k,ee,$,ne,w,oe,ie)=>{const Q=I.el=P?P.el:o(""),re=I.anchor=P?P.anchor:o("");let{patchFlag:v,dynamicChildren:m,slotScopeIds:D}=I;D&&(oe=oe?oe.concat(D):D),P==null?(i(Q,k,ee),i(re,k,ee),U(I.children||[],k,re,$,ne,w,oe,ie)):v>0&&v&64&&m&&P.dynamicChildren&&P.dynamicChildren.length===m.length?(M(P.dynamicChildren,m,k,$,ne,w,oe),(I.key!=null||$&&I===$.subTree)&&eh(P,I,!0)):J(P,I,k,re,$,ne,w,oe,ie)},B=(P,I,k,ee,$,ne,w,oe,ie)=>{I.slotScopeIds=oe,P==null?I.shapeFlag&512?$.ctx.activate(I,k,ee,w,ie):Z(I,k,ee,$,ne,w,ie):K(P,I,ie)},Z=(P,I,k,ee,$,ne,w)=>{const oe=P.component=em(P,ee,$);if(pa(P)&&(oe.ctx.renderer=Re),tm(oe,!1,w),oe.asyncDep){if($&&$.registerDep(oe,q,w),!P.el){const ie=oe.subTree=Wt(Ft);d(null,ie,I,k),P.placeholder=ie.el}}else q(oe,P,I,k,$,ne,w)},K=(P,I,k)=>{const ee=I.component=P.component;if(Up(P,I,k))if(ee.asyncDep&&!ee.asyncResolved){V(ee,I,k);return}else ee.next=I,ee.update();else I.el=P.el,ee.vnode=I},q=(P,I,k,ee,$,ne,w)=>{const oe=()=>{if(P.isMounted){let{next:v,bu:m,u:D,parent:W,vnode:j}=P;{const De=th(P);if(De){v&&(v.el=j.el,V(P,v,w)),De.asyncDep.then(()=>{P.isUnmounted||oe()});return}}let H=v,Me;Ti(P,!1),v?(v.el=j.el,V(P,v,w)):v=j,m&&zs(m),(Me=v.props&&v.props.onVnodeBeforeUpdate)&&Sn(Me,W,v,j),Ti(P,!0);const ce=Ac(P),be=P.subTree;P.subTree=ce,S(be,ce,f(be.el),ae(be),P,$,ne),v.el=ce.el,H===null&&Np(P,ce.el),D&&jt(D,$),(Me=v.props&&v.props.onVnodeUpdated)&&jt(()=>Sn(Me,W,v,j),$)}else{let v;const{el:m,props:D}=I,{bm:W,m:j,parent:H,root:Me,type:ce}=P,be=kr(I);Ti(P,!1),W&&zs(W),!be&&(v=D&&D.onVnodeBeforeMount)&&Sn(v,H,I),Ti(P,!0);{Me.ce&&Me.ce._def.shadowRoot!==!1&&Me.ce._injectChildStyle(ce);const De=P.subTree=Ac(P);S(null,De,k,ee,P,$,ne),I.el=De.el}if(j&&jt(j,$),!be&&(v=D&&D.onVnodeMounted)){const De=I;jt(()=>Sn(v,H,De),$)}(I.shapeFlag&256||H&&kr(H.vnode)&&H.vnode.shapeFlag&256)&&P.a&&jt(P.a,$),P.isMounted=!0,I=k=ee=null}};P.scope.on();const ie=P.effect=new uf(oe);P.scope.off();const Q=P.update=ie.run.bind(ie),re=P.job=ie.runIfDirty.bind(ie);re.i=P,re.id=P.uid,ie.scheduler=()=>Gl(re),Ti(P,!0),Q()},V=(P,I,k)=>{I.component=P;const ee=P.vnode.props;P.vnode=I,P.next=null,Op(P,I.props,ee,k),Hp(P,I.children,k),Jn(),vc(P),Qn()},J=(P,I,k,ee,$,ne,w,oe,ie=!1)=>{const Q=P&&P.children,re=P?P.shapeFlag:0,v=I.children,{patchFlag:m,shapeFlag:D}=I;if(m>0){if(m&128){de(Q,v,k,ee,$,ne,w,oe,ie);return}else if(m&256){ge(Q,v,k,ee,$,ne,w,oe,ie);return}}D&8?(re&16&&te(Q,$,ne),v!==Q&&u(k,v)):re&16?D&16?de(Q,v,k,ee,$,ne,w,oe,ie):te(Q,$,ne,!0):(re&8&&u(k,""),D&16&&U(v,k,ee,$,ne,w,oe,ie))},ge=(P,I,k,ee,$,ne,w,oe,ie)=>{P=P||fr,I=I||fr;const Q=P.length,re=I.length,v=Math.min(Q,re);let m;for(m=0;m<v;m++){const D=I[m]=ie?di(I[m]):bn(I[m]);S(P[m],D,k,null,$,ne,w,oe,ie)}Q>re?te(P,$,ne,!0,!1,v):U(I,k,ee,$,ne,w,oe,ie,v)},de=(P,I,k,ee,$,ne,w,oe,ie)=>{let Q=0;const re=I.length;let v=P.length-1,m=re-1;for(;Q<=v&&Q<=m;){const D=P[Q],W=I[Q]=ie?di(I[Q]):bn(I[Q]);if(Oi(D,W))S(D,W,k,null,$,ne,w,oe,ie);else break;Q++}for(;Q<=v&&Q<=m;){const D=P[v],W=I[m]=ie?di(I[m]):bn(I[m]);if(Oi(D,W))S(D,W,k,null,$,ne,w,oe,ie);else break;v--,m--}if(Q>v){if(Q<=m){const D=m+1,W=D<re?I[D].el:ee;for(;Q<=m;)S(null,I[Q]=ie?di(I[Q]):bn(I[Q]),k,W,$,ne,w,oe,ie),Q++}}else if(Q>m)for(;Q<=v;)Ne(P[Q],$,ne,!0),Q++;else{const D=Q,W=Q,j=new Map;for(Q=W;Q<=m;Q++){const xe=I[Q]=ie?di(I[Q]):bn(I[Q]);xe.key!=null&&j.set(xe.key,Q)}let H,Me=0;const ce=m-W+1;let be=!1,De=0;const le=new Array(ce);for(Q=0;Q<ce;Q++)le[Q]=0;for(Q=D;Q<=v;Q++){const xe=P[Q];if(Me>=ce){Ne(xe,$,ne,!0);continue}let Te;if(xe.key!=null)Te=j.get(xe.key);else for(H=W;H<=m;H++)if(le[H-W]===0&&Oi(xe,I[H])){Te=H;break}Te===void 0?Ne(xe,$,ne,!0):(le[Te-W]=Q+1,Te>=De?De=Te:be=!0,S(xe,I[Te],k,null,$,ne,w,oe,ie),Me++)}const pe=be?Xp(le):fr;for(H=pe.length-1,Q=ce-1;Q>=0;Q--){const xe=W+Q,Te=I[xe],he=I[xe+1],Ge=xe+1<re?he.el||nh(he):ee;le[Q]===0?S(null,Te,k,Ge,$,ne,w,oe,ie):be&&(H<0||Q!==pe[H]?_e(Te,k,Ge,2):H--)}}},_e=(P,I,k,ee,$=null)=>{const{el:ne,type:w,transition:oe,children:ie,shapeFlag:Q}=P;if(Q&6){_e(P.component.subTree,I,k,ee);return}if(Q&128){P.suspense.move(I,k,ee);return}if(Q&64){w.move(P,I,k,Re);return}if(w===sn){i(ne,I,k);for(let v=0;v<ie.length;v++)_e(ie[v],I,k,ee);i(P.anchor,I,k);return}if(w===Fa){A(P,I,k);return}if(ee!==2&&Q&1&&oe)if(ee===0)oe.beforeEnter(ne),i(ne,I,k),jt(()=>oe.enter(ne),$);else{const{leave:v,delayLeave:m,afterLeave:D}=oe,W=()=>{P.ctx.isUnmounted?r(ne):i(ne,I,k)},j=()=>{ne._isLeaving&&ne[Xn](!0),v(ne,()=>{W(),D&&D()})};m?m(ne,W,j):j()}else i(ne,I,k)},Ne=(P,I,k,ee=!1,$=!1)=>{const{type:ne,props:w,ref:oe,children:ie,dynamicChildren:Q,shapeFlag:re,patchFlag:v,dirs:m,cacheIndex:D}=P;if(v===-2&&($=!1),oe!=null&&(Jn(),Gr(oe,null,k,P,!0),Qn()),D!=null&&(I.renderCache[D]=void 0),re&256){I.ctx.deactivate(P);return}const W=re&1&&m,j=!kr(P);let H;if(j&&(H=w&&w.onVnodeBeforeUnmount)&&Sn(H,I,P),re&6)ot(P.component,k,ee);else{if(re&128){P.suspense.unmount(k,ee);return}W&&bi(P,null,I,"beforeUnmount"),re&64?P.type.remove(P,I,k,Re,ee):Q&&!Q.hasOnce&&(ne!==sn||v>0&&v&64)?te(Q,I,k,!1,!0):(ne===sn&&v&384||!$&&re&16)&&te(ie,I,k),ee&&He(P)}(j&&(H=w&&w.onVnodeUnmounted)||W)&&jt(()=>{H&&Sn(H,I,P),W&&bi(P,null,I,"unmounted")},k)},He=P=>{const{type:I,el:k,anchor:ee,transition:$}=P;if(I===sn){dt(k,ee);return}if(I===Fa){y(P);return}const ne=()=>{r(k),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(P.shapeFlag&1&&$&&!$.persisted){const{leave:w,delayLeave:oe}=$,ie=()=>w(k,ne);oe?oe(P.el,ne,ie):ie()}else ne()},dt=(P,I)=>{let k;for(;P!==I;)k=h(P),r(P),P=k;r(I)},ot=(P,I,k)=>{const{bum:ee,scope:$,job:ne,subTree:w,um:oe,m:ie,a:Q}=P;Cc(ie),Cc(Q),ee&&zs(ee),$.stop(),ne&&(ne.flags|=8,Ne(w,P,I,k)),oe&&jt(oe,I),jt(()=>{P.isUnmounted=!0},I)},te=(P,I,k,ee=!1,$=!1,ne=0)=>{for(let w=ne;w<P.length;w++)Ne(P[w],I,k,ee,$)},ae=P=>{if(P.shapeFlag&6)return ae(P.component.subTree);if(P.shapeFlag&128)return P.suspense.next();const I=h(P.anchor||P.el),k=I&&I[ap];return k?h(k):I};let we=!1;const Be=(P,I,k)=>{let ee;P==null?I._vnode&&(Ne(I._vnode,null,null,!0),ee=I._vnode.component):S(I._vnode||null,P,I,null,null,null,k),I._vnode=P,we||(we=!0,vc(ee),wf(),we=!1)},Re={p:S,um:Ne,m:_e,r:He,mt:Z,mc:U,pc:J,pbc:M,n:ae,o:n};return{render:Be,hydrate:void 0,createApp:Rp(Be)}}function Na({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Ti({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Wp(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function eh(n,e,t=!1){const i=n.children,r=e.children;if(Oe(i)&&Oe(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=di(r[s]),o.el=a.el),!t&&o.patchFlag!==-2&&eh(a,o)),o.type===_a&&(o.patchFlag!==-1?o.el=a.el:o.__elIndex=s+(n.type===sn?1:0)),o.type===Ft&&!o.el&&(o.el=a.el)}}function Xp(n){const e=n.slice(),t=[0];let i,r,s,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,a=t.length-1;s<a;)o=s+a>>1,n[t[o]]<c?s=o+1:a=o;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}function th(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:th(e)}function Cc(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function nh(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?nh(e.subTree):null}const ih=n=>n.__isSuspense;function qp(n,e){e&&e.pendingBranch?Oe(n)?e.effects.push(...n):e.effects.push(n):tp(n)}const sn=Symbol.for("v-fgt"),_a=Symbol.for("v-txt"),Ft=Symbol.for("v-cmt"),Fa=Symbol.for("v-stc"),Xr=[];let Qt=null;function Ni(n=!1){Xr.push(Qt=n?null:[])}function Yp(){Xr.pop(),Qt=Xr[Xr.length-1]||null}let Zr=1;function na(n,e=!1){Zr+=n,n<0&&Qt&&e&&(Qt.hasOnce=!0)}function rh(n){return n.dynamicChildren=Zr>0?Qt||fr:null,Yp(),Zr>0&&Qt&&Qt.push(n),n}function Yi(n,e,t,i,r,s){return rh(ke(n,e,t,i,r,s,!0))}function $p(n,e,t,i,r){return rh(Wt(n,e,t,i,r,!0))}function ia(n){return n?n.__v_isVNode===!0:!1}function Oi(n,e){return n.type===e.type&&n.key===e.key}const sh=({key:n})=>n??null,ks=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?St(n)||Dt(n)||We(n)?{i:an,r:n,k:e,f:!!t}:n:null);function ke(n,e=null,t=null,i=0,r=null,s=n===sn?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&sh(e),ref:e&&ks(e),scopeId:Cf,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:an};return o?(Yl(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=St(t)?8:16),Zr>0&&!a&&Qt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Qt.push(l),l}const Wt=Kp;function Kp(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===Sp)&&(n=Ft),ia(n)){const o=vi(n,e,!0);return t&&Yl(o,t),Zr>0&&!s&&Qt&&(o.shapeFlag&6?Qt[Qt.indexOf(n)]=o:Qt.push(o)),o.patchFlag=-2,o}if(sm(n)&&(n=n.__vccOpts),e){e=jp(e);let{class:o,style:l}=e;o&&!St(o)&&(e.class=ha(o)),pt(l)&&(Hl(l)&&!Oe(l)&&(l=At({},l)),e.style=Ll(l))}const a=St(n)?1:ih(n)?128:If(n)?64:pt(n)?4:We(n)?2:0;return ke(n,e,t,i,r,a,s,!0)}function jp(n){return n?Hl(n)||$f(n)?At({},n):n:null}function vi(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:a,children:o,transition:l}=n,c=e?Zp(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&sh(c),ref:e&&e.ref?t&&s?Oe(s)?s.concat(ks(e)):[s,ks(e)]:ks(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==sn?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&vi(n.ssContent),ssFallback:n.ssFallback&&vi(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&jr(u,l.clone(u)),u}function cr(n=" ",e=0){return Wt(_a,null,n,e)}function Pc(n="",e=!1){return e?(Ni(),$p(Ft,null,n)):Wt(Ft,null,n)}function bn(n){return n==null||typeof n=="boolean"?Wt(Ft):Oe(n)?Wt(sn,null,n.slice()):ia(n)?di(n):Wt(_a,null,String(n))}function di(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:vi(n)}function Yl(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Oe(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Yl(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!$f(e)?e._ctx=an:r===3&&an&&(an.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else We(e)?(e={default:e,_ctx:an},t=32):(e=String(e),i&64?(t=16,e=[cr(e)]):t=8);n.children=e,n.shapeFlag|=t}function Zp(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=ha([e.class,i.class]));else if(r==="style")e.style=Ll([e.style,i.style]);else if(la(r)){const s=e[r],a=i[r];a&&s!==a&&!(Oe(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=i[r])}return e}function Sn(n,e,t,i=null){_n(n,e,7,[t,i])}const Jp=Wf();let Qp=0;function em(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||Jp,s={uid:Qp++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ed(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:jf(i,r),emitsOptions:Xf(i,r),emit:null,emitted:null,propsDefaults:ct,inheritAttrs:i.inheritAttrs,ctx:ct,data:ct,props:ct,attrs:ct,slots:ct,refs:ct,setupState:ct,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Pp.bind(null,s),n.ce&&n.ce(s),s}let Ot=null;const ah=()=>Ot||an;let ra,Po;{const n=fa(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(a=>a(s)):r[0](s)}};ra=e("__VUE_INSTANCE_SETTERS__",t=>Ot=t),Po=e("__VUE_SSR_SETTERS__",t=>Jr=t)}const ss=n=>{const e=Ot;return ra(n),n.scope.on(),()=>{n.scope.off(),ra(e)}},Dc=()=>{Ot&&Ot.scope.off(),ra(null)};function oh(n){return n.vnode.shapeFlag&4}let Jr=!1;function tm(n,e=!1,t=!1){e&&Po(e);const{props:i,children:r}=n.vnode,s=oh(n);Fp(n,i,s,e),zp(n,r,t||e);const a=s?nm(n,e):void 0;return e&&Po(!1),a}function nm(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Mp);const{setup:i}=t;if(i){Jn();const r=n.setupContext=i.length>1?rm(n):null,s=ss(n),a=rs(i,n,0,[n.props,r]),o=tf(a);if(Qn(),s(),(o||n.sp)&&!kr(n)&&Vf(n),o){if(a.then(Dc,Dc),e)return a.then(l=>{Lc(n,l)}).catch(l=>{da(l,n,0)});n.asyncDep=a}else Lc(n,a)}else lh(n)}function Lc(n,e,t){We(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:pt(e)&&(n.setupState=bf(e)),lh(n)}function lh(n,e,t){const i=n.type;n.render||(n.render=i.render||Rn);{const r=ss(n);Jn();try{Ep(n)}finally{Qn(),r()}}}const im={get(n,e){return Ct(n,"get",""),n[e]}};function rm(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,im),slots:n.slots,emit:n.emit,expose:e}}function xa(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(bf(kd(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Wr)return Wr[t](n)},has(e,t){return t in e||t in Wr}})):n.proxy}function sm(n){return We(n)&&"__vccOpts"in n}const am=(n,e)=>Kd(n,e,Jr);function om(n,e,t){try{na(-1);const i=arguments.length;return i===2?pt(e)&&!Oe(e)?ia(e)?Wt(n,null,[e]):Wt(n,e):Wt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&ia(t)&&(t=[t]),Wt(n,e,t))}finally{na(1)}}const lm="3.5.26";let Do;const Ic=typeof window<"u"&&window.trustedTypes;if(Ic)try{Do=Ic.createPolicy("vue",{createHTML:n=>n})}catch{}const ch=Do?n=>Do.createHTML(n):n=>n,cm="http://www.w3.org/2000/svg",um="http://www.w3.org/1998/Math/MathML",Wn=typeof document<"u"?document:null,Uc=Wn&&Wn.createElement("template"),fm={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Wn.createElementNS(cm,n):e==="mathml"?Wn.createElementNS(um,n):t?Wn.createElement(n,{is:t}):Wn.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Wn.createTextNode(n),createComment:n=>Wn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Wn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const a=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Uc.innerHTML=ch(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const o=Uc.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},ri="transition",Rr="animation",Qr=Symbol("_vtc"),uh={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},hm=At({},Uf,uh),dm=n=>(n.displayName="Transition",n.props=hm,n),pm=dm((n,{slots:e})=>om(cp,mm(n),e)),Ai=(n,e=[])=>{Oe(n)?n.forEach(t=>t(...e)):n&&n(...e)},Nc=n=>n?Oe(n)?n.some(e=>e.length>1):n.length>1:!1;function mm(n){const e={};for(const N in n)N in uh||(e[N]=n[N]);if(n.css===!1)return e;const{name:t="v",type:i,duration:r,enterFromClass:s=`${t}-enter-from`,enterActiveClass:a=`${t}-enter-active`,enterToClass:o=`${t}-enter-to`,appearFromClass:l=s,appearActiveClass:c=a,appearToClass:u=o,leaveFromClass:f=`${t}-leave-from`,leaveActiveClass:h=`${t}-leave-active`,leaveToClass:p=`${t}-leave-to`}=n,x=gm(r),S=x&&x[0],g=x&&x[1],{onBeforeEnter:d,onEnter:b,onEnterCancelled:A,onLeave:y,onLeaveCancelled:C,onBeforeAppear:R=d,onAppear:T=b,onAppearCancelled:U=A}=e,_=(N,B,Z,K)=>{N._enterCancelled=K,wi(N,B?u:o),wi(N,B?c:a),Z&&Z()},M=(N,B)=>{N._isLeaving=!1,wi(N,f),wi(N,p),wi(N,h),B&&B()},L=N=>(B,Z)=>{const K=N?T:b,q=()=>_(B,N,Z);Ai(K,[B,q]),Fc(()=>{wi(B,N?l:s),Bn(B,N?u:o),Nc(K)||Oc(B,i,S,q)})};return At(e,{onBeforeEnter(N){Ai(d,[N]),Bn(N,s),Bn(N,a)},onBeforeAppear(N){Ai(R,[N]),Bn(N,l),Bn(N,c)},onEnter:L(!1),onAppear:L(!0),onLeave(N,B){N._isLeaving=!0;const Z=()=>M(N,B);Bn(N,f),N._enterCancelled?(Bn(N,h),zc(N)):(zc(N),Bn(N,h)),Fc(()=>{N._isLeaving&&(wi(N,f),Bn(N,p),Nc(y)||Oc(N,i,g,Z))}),Ai(y,[N,Z])},onEnterCancelled(N){_(N,!1,void 0,!0),Ai(A,[N])},onAppearCancelled(N){_(N,!0,void 0,!0),Ai(U,[N])},onLeaveCancelled(N){M(N),Ai(C,[N])}})}function gm(n){if(n==null)return null;if(pt(n))return[Oa(n.enter),Oa(n.leave)];{const e=Oa(n);return[e,e]}}function Oa(n){return md(n)}function Bn(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[Qr]||(n[Qr]=new Set)).add(e)}function wi(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[Qr];t&&(t.delete(e),t.size||(n[Qr]=void 0))}function Fc(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let _m=0;function Oc(n,e,t,i){const r=n._endId=++_m,s=()=>{r===n._endId&&i()};if(t!=null)return setTimeout(s,t);const{type:a,timeout:o,propCount:l}=xm(n,e);if(!a)return i();const c=a+"end";let u=0;const f=()=>{n.removeEventListener(c,h),s()},h=p=>{p.target===n&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},o+1),n.addEventListener(c,h)}function xm(n,e){const t=window.getComputedStyle(n),i=x=>(t[x]||"").split(", "),r=i(`${ri}Delay`),s=i(`${ri}Duration`),a=Bc(r,s),o=i(`${Rr}Delay`),l=i(`${Rr}Duration`),c=Bc(o,l);let u=null,f=0,h=0;e===ri?a>0&&(u=ri,f=a,h=s.length):e===Rr?c>0&&(u=Rr,f=c,h=l.length):(f=Math.max(a,c),u=f>0?a>c?ri:Rr:null,h=u?u===ri?s.length:l.length:0);const p=u===ri&&/\b(?:transform|all)(?:,|$)/.test(i(`${ri}Property`).toString());return{type:u,timeout:f,propCount:h,hasTransform:p}}function Bc(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>Vc(t)+Vc(n[i])))}function Vc(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function zc(n){return(n?n.ownerDocument:document).body.offsetHeight}function vm(n,e,t){const i=n[Qr];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Hc=Symbol("_vod"),Sm=Symbol("_vsh"),Mm=Symbol(""),Em=/(?:^|;)\s*display\s*:/;function ym(n,e,t){const i=n.style,r=St(t);let s=!1;if(t&&!r){if(e)if(St(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();t[o]==null&&Ws(i,o,"")}else for(const a in e)t[a]==null&&Ws(i,a,"");for(const a in t)a==="display"&&(s=!0),Ws(i,a,t[a])}else if(r){if(e!==t){const a=i[Mm];a&&(t+=";"+a),i.cssText=t,s=Em.test(t)}}else e&&n.removeAttribute("style");Hc in n&&(n[Hc]=s?i.display:"",n[Sm]&&(i.display="none"))}const Gc=/\s*!important$/;function Ws(n,e,t){if(Oe(t))t.forEach(i=>Ws(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=bm(n,e);Gc.test(t)?n.setProperty(Wi(i),t.replace(Gc,""),"important"):n[i]=t}}const kc=["Webkit","Moz","ms"],Ba={};function bm(n,e){const t=Ba[e];if(t)return t;let i=_i(e);if(i!=="filter"&&i in n)return Ba[e]=i;i=sf(i);for(let r=0;r<kc.length;r++){const s=kc[r]+i;if(s in n)return Ba[e]=s}return e}const Wc="http://www.w3.org/1999/xlink";function Xc(n,e,t,i,r,s=Md(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Wc,e.slice(6,e.length)):n.setAttributeNS(Wc,e,t):t==null||s&&!of(t)?n.removeAttribute(e):n.setAttribute(e,s?"":Mi(t)?String(t):t)}function qc(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?ch(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(o!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=of(t):t==null&&o==="string"?(t="",a=!0):o==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(r||e)}function ur(n,e,t,i){n.addEventListener(e,t,i)}function Tm(n,e,t,i){n.removeEventListener(e,t,i)}const Yc=Symbol("_vei");function Am(n,e,t,i,r=null){const s=n[Yc]||(n[Yc]={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=wm(e);if(i){const c=s[e]=Pm(i,r);ur(n,o,c,l)}else a&&(Tm(n,o,a,l),s[e]=void 0)}}const $c=/(?:Once|Passive|Capture)$/;function wm(n){let e;if($c.test(n)){e={};let i;for(;i=n.match($c);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Wi(n.slice(2)),e]}let Va=0;const Rm=Promise.resolve(),Cm=()=>Va||(Rm.then(()=>Va=0),Va=Date.now());function Pm(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;_n(Dm(i,t.value),e,5,[i])};return t.value=n,t.attached=Cm(),t}function Dm(n,e){if(Oe(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Kc=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Lm=(n,e,t,i,r,s)=>{const a=r==="svg";e==="class"?vm(n,i,a):e==="style"?ym(n,t,i):la(e)?Rl(e)||Am(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Im(n,e,i,a))?(qc(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Xc(n,e,i,a,s,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!St(i))?qc(n,_i(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Xc(n,e,i,a))};function Im(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Kc(e)&&We(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Kc(e)&&St(t)?!1:e in n}const jc=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Oe(e)?t=>zs(e,t):e};function Um(n){n.target.composing=!0}function Zc(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const za=Symbol("_assign");function Jc(n,e,t){return e&&(n=n.trim()),t&&(n=Dl(n)),n}const Mn={created(n,{modifiers:{lazy:e,trim:t,number:i}},r){n[za]=jc(r);const s=i||r.props&&r.props.type==="number";ur(n,e?"change":"input",a=>{a.target.composing||n[za](Jc(n.value,t,s))}),(t||s)&&ur(n,"change",()=>{n.value=Jc(n.value,t,s)}),e||(ur(n,"compositionstart",Um),ur(n,"compositionend",Zc),ur(n,"change",Zc))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:r,number:s}},a){if(n[za]=jc(a),n.composing)return;const o=(s||n.type==="number")&&!/^0\d/.test(n.value)?Dl(n.value):n.value,l=e??"";o!==l&&(document.activeElement===n&&n.type!=="range"&&(i&&e===t||r&&n.value.trim()===l)||(n.value=l))}},Nm=At({patchProp:Lm},fm);let Qc;function Fm(){return Qc||(Qc=Gp(Nm))}const Om=((...n)=>{const e=Fm().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=Vm(i);if(!r)return;const s=e._component;!We(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const a=t(r,!1,Bm(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e});function Bm(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Vm(n){return St(n)?document.querySelector(n):n}const $l="182",zm=0,eu=1,Hm=2,Xs=1,Gm=2,Or=3,Si=0,Xt=1,$n=2,jn=0,gr=1,tu=2,nu=3,iu=4,km=5,Bi=100,Wm=101,Xm=102,qm=103,Ym=104,$m=200,Km=201,jm=202,Zm=203,Lo=204,Io=205,Jm=206,Qm=207,eg=208,tg=209,ng=210,ig=211,rg=212,sg=213,ag=214,Uo=0,No=1,Fo=2,xr=3,Oo=4,Bo=5,Vo=6,zo=7,fh=0,og=1,lg=2,Cn=0,hh=1,dh=2,ph=3,mh=4,gh=5,_h=6,xh=7,vh=300,ki=301,vr=302,Ho=303,Go=304,va=306,ko=1e3,Kn=1001,Wo=1002,Tt=1003,cg=1004,_s=1005,Pt=1006,Ha=1007,zi=1008,Jt=1009,Sh=1010,Mh=1011,es=1012,Kl=1013,Dn=1014,An=1015,ti=1016,jl=1017,Zl=1018,ts=1020,Eh=35902,yh=35899,bh=1021,Th=1022,dn=1023,ni=1026,Hi=1027,Ah=1028,Jl=1029,Sr=1030,Ql=1031,ec=1033,qs=33776,Ys=33777,$s=33778,Ks=33779,Xo=35840,qo=35841,Yo=35842,$o=35843,Ko=36196,jo=37492,Zo=37496,Jo=37488,Qo=37489,el=37490,tl=37491,nl=37808,il=37809,rl=37810,sl=37811,al=37812,ol=37813,ll=37814,cl=37815,ul=37816,fl=37817,hl=37818,dl=37819,pl=37820,ml=37821,gl=36492,_l=36494,xl=36495,vl=36283,Sl=36284,Ml=36285,El=36286,ug=3200,wh=0,fg=1,pi="",rn="srgb",Mr="srgb-linear",sa="linear",st="srgb",$i=7680,ru=519,hg=512,dg=513,pg=514,tc=515,mg=516,gg=517,nc=518,_g=519,su=35044,au="300 es",wn=2e3,aa=2001;function Rh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function oa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function xg(){const n=oa("canvas");return n.style.display="block",n}const ou={};function lu(...n){const e="THREE."+n.shift();console.log(e,...n)}function ze(...n){const e="THREE."+n.shift();console.warn(e,...n)}function Qe(...n){const e="THREE."+n.shift();console.error(e,...n)}function ns(...n){const e=n.join(" ");e in ou||(ou[e]=!0,ze(...n))}function vg(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}class yr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ga=Math.PI/180,yl=180/Math.PI;function as(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(wt[n&255]+wt[n>>8&255]+wt[n>>16&255]+wt[n>>24&255]+"-"+wt[e&255]+wt[e>>8&255]+"-"+wt[e>>16&15|64]+wt[e>>24&255]+"-"+wt[t&63|128]+wt[t>>8&255]+"-"+wt[t>>16&255]+wt[t>>24&255]+wt[i&255]+wt[i>>8&255]+wt[i>>16&255]+wt[i>>24&255]).toLowerCase()}function $e(n,e,t){return Math.max(e,Math.min(t,n))}function Sg(n,e){return(n%e+e)%e}function ka(n,e,t){return(1-t)*n+t*e}function Cr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Gt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Ke{constructor(e=0,t=0){Ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class os{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3],h=s[a+0],p=s[a+1],x=s[a+2],S=s[a+3];if(o<=0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o>=1){e[t+0]=h,e[t+1]=p,e[t+2]=x,e[t+3]=S;return}if(f!==S||l!==h||c!==p||u!==x){let g=l*h+c*p+u*x+f*S;g<0&&(h=-h,p=-p,x=-x,S=-S,g=-g);let d=1-o;if(g<.9995){const b=Math.acos(g),A=Math.sin(b);d=Math.sin(d*b)/A,o=Math.sin(o*b)/A,l=l*d+h*o,c=c*d+p*o,u=u*d+x*o,f=f*d+S*o}else{l=l*d+h*o,c=c*d+p*o,u=u*d+x*o,f=f*d+S*o;const b=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=b,c*=b,u*=b,f*=b}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],h=s[a+1],p=s[a+2],x=s[a+3];return e[t]=o*x+u*f+l*p-c*h,e[t+1]=l*x+u*h+c*f-o*p,e[t+2]=c*x+u*p+o*h-l*f,e[t+3]=u*x-o*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),h=l(i/2),p=l(r/2),x=l(s/2);switch(a){case"XYZ":this._x=h*u*f+c*p*x,this._y=c*p*f-h*u*x,this._z=c*u*x+h*p*f,this._w=c*u*f-h*p*x;break;case"YXZ":this._x=h*u*f+c*p*x,this._y=c*p*f-h*u*x,this._z=c*u*x-h*p*f,this._w=c*u*f+h*p*x;break;case"ZXY":this._x=h*u*f-c*p*x,this._y=c*p*f+h*u*x,this._z=c*u*x+h*p*f,this._w=c*u*f-h*p*x;break;case"ZYX":this._x=h*u*f-c*p*x,this._y=c*p*f+h*u*x,this._z=c*u*x-h*p*f,this._w=c*u*f+h*p*x;break;case"YZX":this._x=h*u*f+c*p*x,this._y=c*p*f+h*u*x,this._z=c*u*x-h*p*f,this._w=c*u*f-h*p*x;break;case"XZY":this._x=h*u*f-c*p*x,this._y=c*p*f-h*u*x,this._z=c*u*x+h*p*f,this._w=c*u*f+h*p*x;break;default:ze("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+o+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>f){const p=2*Math.sqrt(1+i-o-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>f){const p=2*Math.sqrt(1+o-i-f);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,t=0,i=0){G.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(cu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(cu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*t-s*r),f=2*(s*i-a*t);return this.x=t+l*c+a*f-o*u,this.y=i+l*u+o*c-s*f,this.z=r+l*f+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Wa.copy(this).projectOnVector(e),this.sub(Wa)}reflect(e){return this.sub(Wa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wa=new G,cu=new os;class Xe{constructor(e,t,i,r,s,a,o,l,c){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],p=i[5],x=i[8],S=r[0],g=r[3],d=r[6],b=r[1],A=r[4],y=r[7],C=r[2],R=r[5],T=r[8];return s[0]=a*S+o*b+l*C,s[3]=a*g+o*A+l*R,s[6]=a*d+o*y+l*T,s[1]=c*S+u*b+f*C,s[4]=c*g+u*A+f*R,s[7]=c*d+u*y+f*T,s[2]=h*S+p*b+x*C,s[5]=h*g+p*A+x*R,s[8]=h*d+p*y+x*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*s,p=c*s-a*l,x=t*f+i*h+r*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/x;return e[0]=f*S,e[1]=(r*c-u*i)*S,e[2]=(o*i-r*a)*S,e[3]=h*S,e[4]=(u*t-r*l)*S,e[5]=(r*s-o*t)*S,e[6]=p*S,e[7]=(i*l-c*t)*S,e[8]=(a*t-i*s)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Xa.makeScale(e,t)),this}rotate(e){return this.premultiply(Xa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Xa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Xa=new Xe,uu=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fu=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Mg(){const n={enabled:!0,workingColorSpace:Mr,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===st&&(r.r=Zn(r.r),r.g=Zn(r.g),r.b=Zn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===st&&(r.r=_r(r.r),r.g=_r(r.g),r.b=_r(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===pi?sa:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ns("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ns("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Mr]:{primaries:e,whitePoint:i,transfer:sa,toXYZ:uu,fromXYZ:fu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:rn},outputColorSpaceConfig:{drawingBufferColorSpace:rn}},[rn]:{primaries:e,whitePoint:i,transfer:st,toXYZ:uu,fromXYZ:fu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:rn}}}),n}const Ze=Mg();function Zn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function _r(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ki;class Eg{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ki===void 0&&(Ki=oa("canvas")),Ki.width=e.width,Ki.height=e.height;const r=Ki.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Ki}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=oa("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Zn(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Zn(t[i]/255)*255):t[i]=Zn(t[i]);return{data:t,width:e.width,height:e.height}}else return ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let yg=0;class ic{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yg++}),this.uuid=as(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(qa(r[a].image)):s.push(qa(r[a]))}else s=qa(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function qa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Eg.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(ze("Texture: Unable to serialize Texture."),{})}let bg=0;const Ya=new G;class Bt extends yr{constructor(e=Bt.DEFAULT_IMAGE,t=Bt.DEFAULT_MAPPING,i=Kn,r=Kn,s=Pt,a=zi,o=dn,l=Jt,c=Bt.DEFAULT_ANISOTROPY,u=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bg++}),this.uuid=as(),this.name="",this.source=new ic(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ya).x}get height(){return this.source.getSize(Ya).y}get depth(){return this.source.getSize(Ya).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){ze(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){ze(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ko:e.x=e.x-Math.floor(e.x);break;case Kn:e.x=e.x<0?0:1;break;case Wo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ko:e.y=e.y-Math.floor(e.y);break;case Kn:e.y=e.y<0?0:1;break;case Wo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=vh;Bt.DEFAULT_ANISOTROPY=1;class xt{constructor(e=0,t=0,i=0,r=1){xt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],x=l[9],S=l[2],g=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-S)<.01&&Math.abs(x-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+S)<.1&&Math.abs(x+g)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(c+1)/2,y=(p+1)/2,C=(d+1)/2,R=(u+h)/4,T=(f+S)/4,U=(x+g)/4;return A>y&&A>C?A<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(A),r=R/i,s=T/i):y>C?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=R/r,s=U/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=T/s,r=U/s),this.set(i,r,s,t),this}let b=Math.sqrt((g-x)*(g-x)+(f-S)*(f-S)+(h-u)*(h-u));return Math.abs(b)<.001&&(b=1),this.x=(g-x)/b,this.y=(f-S)/b,this.z=(h-u)/b,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Tg extends yr{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new Bt(r);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Pt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new ic(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pn extends Tg{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Ch extends Bt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ag extends Bt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ls{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,cn):cn.fromBufferAttribute(s,a),cn.applyMatrix4(e.matrixWorld),this.expandByPoint(cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),xs.copy(i.boundingBox)),xs.applyMatrix4(e.matrixWorld),this.union(xs)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,cn),cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Pr),vs.subVectors(this.max,Pr),ji.subVectors(e.a,Pr),Zi.subVectors(e.b,Pr),Ji.subVectors(e.c,Pr),si.subVectors(Zi,ji),ai.subVectors(Ji,Zi),Ri.subVectors(ji,Ji);let t=[0,-si.z,si.y,0,-ai.z,ai.y,0,-Ri.z,Ri.y,si.z,0,-si.x,ai.z,0,-ai.x,Ri.z,0,-Ri.x,-si.y,si.x,0,-ai.y,ai.x,0,-Ri.y,Ri.x,0];return!$a(t,ji,Zi,Ji,vs)||(t=[1,0,0,0,1,0,0,0,1],!$a(t,ji,Zi,Ji,vs))?!1:(Ss.crossVectors(si,ai),t=[Ss.x,Ss.y,Ss.z],$a(t,ji,Zi,Ji,vs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Vn=[new G,new G,new G,new G,new G,new G,new G,new G],cn=new G,xs=new ls,ji=new G,Zi=new G,Ji=new G,si=new G,ai=new G,Ri=new G,Pr=new G,vs=new G,Ss=new G,Ci=new G;function $a(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Ci.fromArray(n,s);const o=r.x*Math.abs(Ci.x)+r.y*Math.abs(Ci.y)+r.z*Math.abs(Ci.z),l=e.dot(Ci),c=t.dot(Ci),u=i.dot(Ci);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const wg=new ls,Dr=new G,Ka=new G;class Sa{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):wg.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Dr.subVectors(e,this.center);const t=Dr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Dr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ka.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Dr.copy(e.center).add(Ka)),this.expandByPoint(Dr.copy(e.center).sub(Ka))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const zn=new G,ja=new G,Ms=new G,oi=new G,Za=new G,Es=new G,Ja=new G;class Ph{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zn.copy(this.origin).addScaledVector(this.direction,t),zn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ja.copy(e).add(t).multiplyScalar(.5),Ms.copy(t).sub(e).normalize(),oi.copy(this.origin).sub(ja);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Ms),o=oi.dot(this.direction),l=-oi.dot(Ms),c=oi.lengthSq(),u=Math.abs(1-a*a);let f,h,p,x;if(u>0)if(f=a*l-o,h=a*o-l,x=s*u,f>=0)if(h>=-x)if(h<=x){const S=1/u;f*=S,h*=S,p=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;else h<=-x?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=x?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(ja).addScaledVector(Ms,h),p}intersectSphere(e,t){zn.subVectors(e.center,this.origin);const i=zn.dot(this.direction),r=zn.dot(zn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,zn)!==null}intersectTriangle(e,t,i,r,s){Za.subVectors(t,e),Es.subVectors(i,e),Ja.crossVectors(Za,Es);let a=this.direction.dot(Ja),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;oi.subVectors(this.origin,e);const l=o*this.direction.dot(Es.crossVectors(oi,Es));if(l<0)return null;const c=o*this.direction.dot(Za.cross(oi));if(c<0||l+c>a)return null;const u=-o*oi.dot(Ja);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mt{constructor(e,t,i,r,s,a,o,l,c,u,f,h,p,x,S,g){mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,f,h,p,x,S,g)}set(e,t,i,r,s,a,o,l,c,u,f,h,p,x,S,g){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=x,d[11]=S,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,r=1/Qi.setFromMatrixColumn(e,0).length(),s=1/Qi.setFromMatrixColumn(e,1).length(),a=1/Qi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*u,p=a*f,x=o*u,S=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+x*c,t[5]=h-S*c,t[9]=-o*l,t[2]=S-h*c,t[6]=x+p*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,x=c*u,S=c*f;t[0]=h+S*o,t[4]=x*o-p,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=p*o-x,t[6]=S+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,x=c*u,S=c*f;t[0]=h-S*o,t[4]=-a*f,t[8]=x+p*o,t[1]=p+x*o,t[5]=a*u,t[9]=S-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,p=a*f,x=o*u,S=o*f;t[0]=l*u,t[4]=x*c-p,t[8]=h*c+S,t[1]=l*f,t[5]=S*c+h,t[9]=p*c-x,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,p=a*c,x=o*l,S=o*c;t[0]=l*u,t[4]=S-h*f,t[8]=x*f+p,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*f+x,t[10]=h-S*f}else if(e.order==="XZY"){const h=a*l,p=a*c,x=o*l,S=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+S,t[5]=a*u,t[9]=p*f-x,t[2]=x*f-p,t[6]=o*u,t[10]=S*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Rg,e,Cg)}lookAt(e,t,i){const r=this.elements;return $t.subVectors(e,t),$t.lengthSq()===0&&($t.z=1),$t.normalize(),li.crossVectors(i,$t),li.lengthSq()===0&&(Math.abs(i.z)===1?$t.x+=1e-4:$t.z+=1e-4,$t.normalize(),li.crossVectors(i,$t)),li.normalize(),ys.crossVectors($t,li),r[0]=li.x,r[4]=ys.x,r[8]=$t.x,r[1]=li.y,r[5]=ys.y,r[9]=$t.y,r[2]=li.z,r[6]=ys.z,r[10]=$t.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],p=i[13],x=i[2],S=i[6],g=i[10],d=i[14],b=i[3],A=i[7],y=i[11],C=i[15],R=r[0],T=r[4],U=r[8],_=r[12],M=r[1],L=r[5],N=r[9],B=r[13],Z=r[2],K=r[6],q=r[10],V=r[14],J=r[3],ge=r[7],de=r[11],_e=r[15];return s[0]=a*R+o*M+l*Z+c*J,s[4]=a*T+o*L+l*K+c*ge,s[8]=a*U+o*N+l*q+c*de,s[12]=a*_+o*B+l*V+c*_e,s[1]=u*R+f*M+h*Z+p*J,s[5]=u*T+f*L+h*K+p*ge,s[9]=u*U+f*N+h*q+p*de,s[13]=u*_+f*B+h*V+p*_e,s[2]=x*R+S*M+g*Z+d*J,s[6]=x*T+S*L+g*K+d*ge,s[10]=x*U+S*N+g*q+d*de,s[14]=x*_+S*B+g*V+d*_e,s[3]=b*R+A*M+y*Z+C*J,s[7]=b*T+A*L+y*K+C*ge,s[11]=b*U+A*N+y*q+C*de,s[15]=b*_+A*B+y*V+C*_e,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],x=e[3],S=e[7],g=e[11],d=e[15],b=l*p-c*h,A=o*p-c*f,y=o*h-l*f,C=a*p-c*u,R=a*h-l*u,T=a*f-o*u;return t*(S*b-g*A+d*y)-i*(x*b-g*C+d*R)+r*(x*A-S*C+d*T)-s*(x*y-S*R+g*T)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],x=e[12],S=e[13],g=e[14],d=e[15],b=f*g*c-S*h*c+S*l*p-o*g*p-f*l*d+o*h*d,A=x*h*c-u*g*c-x*l*p+a*g*p+u*l*d-a*h*d,y=u*S*c-x*f*c+x*o*p-a*S*p-u*o*d+a*f*d,C=x*f*l-u*S*l-x*o*h+a*S*h+u*o*g-a*f*g,R=t*b+i*A+r*y+s*C;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/R;return e[0]=b*T,e[1]=(S*h*s-f*g*s-S*r*p+i*g*p+f*r*d-i*h*d)*T,e[2]=(o*g*s-S*l*s+S*r*c-i*g*c-o*r*d+i*l*d)*T,e[3]=(f*l*s-o*h*s-f*r*c+i*h*c+o*r*p-i*l*p)*T,e[4]=A*T,e[5]=(u*g*s-x*h*s+x*r*p-t*g*p-u*r*d+t*h*d)*T,e[6]=(x*l*s-a*g*s-x*r*c+t*g*c+a*r*d-t*l*d)*T,e[7]=(a*h*s-u*l*s+u*r*c-t*h*c-a*r*p+t*l*p)*T,e[8]=y*T,e[9]=(x*f*s-u*S*s-x*i*p+t*S*p+u*i*d-t*f*d)*T,e[10]=(a*S*s-x*o*s+x*i*c-t*S*c-a*i*d+t*o*d)*T,e[11]=(u*o*s-a*f*s-u*i*c+t*f*c+a*i*p-t*o*p)*T,e[12]=C*T,e[13]=(u*S*r-x*f*r+x*i*h-t*S*h-u*i*g+t*f*g)*T,e[14]=(x*o*r-a*S*r-x*i*l+t*S*l+a*i*g-t*o*g)*T,e[15]=(a*f*r-u*o*r+u*i*l-t*f*l-a*i*h+t*o*h)*T,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,h=s*c,p=s*u,x=s*f,S=a*u,g=a*f,d=o*f,b=l*c,A=l*u,y=l*f,C=i.x,R=i.y,T=i.z;return r[0]=(1-(S+d))*C,r[1]=(p+y)*C,r[2]=(x-A)*C,r[3]=0,r[4]=(p-y)*R,r[5]=(1-(h+d))*R,r[6]=(g+b)*R,r[7]=0,r[8]=(x+A)*T,r[9]=(g-b)*T,r[10]=(1-(h+S))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;if(e.x=r[12],e.y=r[13],e.z=r[14],this.determinant()===0)return i.set(1,1,1),t.identity(),this;let s=Qi.set(r[0],r[1],r[2]).length();const a=Qi.set(r[4],r[5],r[6]).length(),o=Qi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),un.copy(this);const c=1/s,u=1/a,f=1/o;return un.elements[0]*=c,un.elements[1]*=c,un.elements[2]*=c,un.elements[4]*=u,un.elements[5]*=u,un.elements[6]*=u,un.elements[8]*=f,un.elements[9]*=f,un.elements[10]*=f,t.setFromRotationMatrix(un),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=wn,l=!1){const c=this.elements,u=2*s/(t-e),f=2*s/(i-r),h=(t+e)/(t-e),p=(i+r)/(i-r);let x,S;if(l)x=s/(a-s),S=a*s/(a-s);else if(o===wn)x=-(a+s)/(a-s),S=-2*a*s/(a-s);else if(o===aa)x=-a/(a-s),S=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=wn,l=!1){const c=this.elements,u=2/(t-e),f=2/(i-r),h=-(t+e)/(t-e),p=-(i+r)/(i-r);let x,S;if(l)x=1/(a-s),S=a/(a-s);else if(o===wn)x=-2/(a-s),S=-(a+s)/(a-s);else if(o===aa)x=-1/(a-s),S=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=x,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Qi=new G,un=new mt,Rg=new G(0,0,0),Cg=new G(1,1,1),li=new G,ys=new G,$t=new G,hu=new mt,du=new os;class Ln{constructor(e=0,t=0,i=0,r=Ln.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin($e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-$e(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-$e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return hu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return du.setFromEuler(this),this.setFromQuaternion(du,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ln.DEFAULT_ORDER="XYZ";class Dh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Pg=0;const pu=new G,er=new os,Hn=new mt,bs=new G,Lr=new G,Dg=new G,Lg=new os,mu=new G(1,0,0),gu=new G(0,1,0),_u=new G(0,0,1),xu={type:"added"},Ig={type:"removed"},tr={type:"childadded",child:null},Qa={type:"childremoved",child:null};class Vt extends yr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pg++}),this.uuid=as(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vt.DEFAULT_UP.clone();const e=new G,t=new Ln,i=new os,r=new G(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new mt},normalMatrix:{value:new Xe}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=Vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return er.setFromAxisAngle(e,t),this.quaternion.multiply(er),this}rotateOnWorldAxis(e,t){return er.setFromAxisAngle(e,t),this.quaternion.premultiply(er),this}rotateX(e){return this.rotateOnAxis(mu,e)}rotateY(e){return this.rotateOnAxis(gu,e)}rotateZ(e){return this.rotateOnAxis(_u,e)}translateOnAxis(e,t){return pu.copy(e).applyQuaternion(this.quaternion),this.position.add(pu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(mu,e)}translateY(e){return this.translateOnAxis(gu,e)}translateZ(e){return this.translateOnAxis(_u,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?bs.copy(e):bs.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(Lr,bs,this.up):Hn.lookAt(bs,Lr,this.up),this.quaternion.setFromRotationMatrix(Hn),r&&(Hn.extractRotation(r.matrixWorld),er.setFromRotationMatrix(Hn),this.quaternion.premultiply(er.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(xu),tr.child=e,this.dispatchEvent(tr),tr.child=null):Qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ig),Qa.child=e,this.dispatchEvent(Qa),Qa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(xu),tr.child=e,this.dispatchEvent(tr),tr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lr,e,Dg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lr,Lg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),p=a(e.animations),x=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),x.length>0&&(i.nodes=x)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Vt.DEFAULT_UP=new G(0,1,0);Vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fn=new G,Gn=new G,eo=new G,kn=new G,nr=new G,ir=new G,vu=new G,to=new G,no=new G,io=new G,ro=new xt,so=new xt,ao=new xt;class hn{constructor(e=new G,t=new G,i=new G){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),fn.subVectors(e,t),r.cross(fn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){fn.subVectors(r,t),Gn.subVectors(i,t),eo.subVectors(e,t);const a=fn.dot(fn),o=fn.dot(Gn),l=fn.dot(eo),c=Gn.dot(Gn),u=Gn.dot(eo),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(c*l-o*u)*h,x=(a*u-o*l)*h;return s.set(1-p-x,x,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,kn)===null?!1:kn.x>=0&&kn.y>=0&&kn.x+kn.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,kn.x),l.addScaledVector(a,kn.y),l.addScaledVector(o,kn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return ro.setScalar(0),so.setScalar(0),ao.setScalar(0),ro.fromBufferAttribute(e,t),so.fromBufferAttribute(e,i),ao.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(ro,s.x),a.addScaledVector(so,s.y),a.addScaledVector(ao,s.z),a}static isFrontFacing(e,t,i,r){return fn.subVectors(i,t),Gn.subVectors(e,t),fn.cross(Gn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fn.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),fn.cross(Gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return hn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return hn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return hn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return hn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;nr.subVectors(r,i),ir.subVectors(s,i),to.subVectors(e,i);const l=nr.dot(to),c=ir.dot(to);if(l<=0&&c<=0)return t.copy(i);no.subVectors(e,r);const u=nr.dot(no),f=ir.dot(no);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(nr,a);io.subVectors(e,s);const p=nr.dot(io),x=ir.dot(io);if(x>=0&&p<=x)return t.copy(s);const S=p*c-l*x;if(S<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(i).addScaledVector(ir,o);const g=u*x-p*f;if(g<=0&&f-u>=0&&p-x>=0)return vu.subVectors(s,r),o=(f-u)/(f-u+(p-x)),t.copy(r).addScaledVector(vu,o);const d=1/(g+S+h);return a=S*d,o=h*d,t.copy(i).addScaledVector(nr,a).addScaledVector(ir,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Lh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ci={h:0,s:0,l:0},Ts={h:0,s:0,l:0};function oo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class et{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=rn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ze.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Ze.workingColorSpace){if(e=Sg(e,1),t=$e(t,0,1),i=$e(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=oo(a,s,e+1/3),this.g=oo(a,s,e),this.b=oo(a,s,e-1/3)}return Ze.colorSpaceToWorking(this,r),this}setStyle(e,t=rn){function i(s){s!==void 0&&parseFloat(s)<1&&ze("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:ze("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=rn){const i=Lh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zn(e.r),this.g=Zn(e.g),this.b=Zn(e.b),this}copyLinearToSRGB(e){return this.r=_r(e.r),this.g=_r(e.g),this.b=_r(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=rn){return Ze.workingToColorSpace(Rt.copy(this),e),Math.round($e(Rt.r*255,0,255))*65536+Math.round($e(Rt.g*255,0,255))*256+Math.round($e(Rt.b*255,0,255))}getHexString(e=rn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.workingToColorSpace(Rt.copy(this),t);const i=Rt.r,r=Rt.g,s=Rt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ze.workingColorSpace){return Ze.workingToColorSpace(Rt.copy(this),t),e.r=Rt.r,e.g=Rt.g,e.b=Rt.b,e}getStyle(e=rn){Ze.workingToColorSpace(Rt.copy(this),e);const t=Rt.r,i=Rt.g,r=Rt.b;return e!==rn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ci),this.setHSL(ci.h+e,ci.s+t,ci.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ci),e.getHSL(Ts);const i=ka(ci.h,Ts.h,t),r=ka(ci.s,Ts.s,t),s=ka(ci.l,Ts.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rt=new et;et.NAMES=Lh;let Ug=0;class br extends yr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ug++}),this.uuid=as(),this.name="",this.type="Material",this.blending=gr,this.side=Si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lo,this.blendDst=Io,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=xr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ru,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$i,this.stencilZFail=$i,this.stencilZPass=$i,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){ze(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){ze(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==gr&&(i.blending=this.blending),this.side!==Si&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Lo&&(i.blendSrc=this.blendSrc),this.blendDst!==Io&&(i.blendDst=this.blendDst),this.blendEquation!==Bi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==xr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ru&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$i&&(i.stencilFail=this.stencilFail),this.stencilZFail!==$i&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==$i&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ih extends br{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=fh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vt=new G,As=new Ke;let Ng=0;class gn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ng++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=su,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)As.fromBufferAttribute(this,t),As.applyMatrix3(e),this.setXY(t,As.x,As.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Cr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Gt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Cr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Cr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Cr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Cr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),i=Gt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),i=Gt(i,this.array),r=Gt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),i=Gt(i,this.array),r=Gt(r,this.array),s=Gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==su&&(e.usage=this.usage),e}}class Uh extends gn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Nh extends gn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class on extends gn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Fg=0;const nn=new mt,lo=new Vt,rr=new G,Kt=new ls,Ir=new ls,yt=new G;class ln extends yr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fg++}),this.uuid=as(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Rh(e)?Nh:Uh)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Xe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return nn.makeRotationFromQuaternion(e),this.applyMatrix4(nn),this}rotateX(e){return nn.makeRotationX(e),this.applyMatrix4(nn),this}rotateY(e){return nn.makeRotationY(e),this.applyMatrix4(nn),this}rotateZ(e){return nn.makeRotationZ(e),this.applyMatrix4(nn),this}translate(e,t,i){return nn.makeTranslation(e,t,i),this.applyMatrix4(nn),this}scale(e,t,i){return nn.makeScale(e,t,i),this.applyMatrix4(nn),this}lookAt(e){return lo.lookAt(e),lo.updateMatrix(),this.applyMatrix4(lo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rr).negate(),this.translate(rr.x,rr.y,rr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new on(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ls);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Kt.setFromBufferAttribute(s),this.morphTargetsRelative?(yt.addVectors(this.boundingBox.min,Kt.min),this.boundingBox.expandByPoint(yt),yt.addVectors(this.boundingBox.max,Kt.max),this.boundingBox.expandByPoint(yt)):(this.boundingBox.expandByPoint(Kt.min),this.boundingBox.expandByPoint(Kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const i=this.boundingSphere.center;if(Kt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Ir.setFromBufferAttribute(o),this.morphTargetsRelative?(yt.addVectors(Kt.min,Ir.min),Kt.expandByPoint(yt),yt.addVectors(Kt.max,Ir.max),Kt.expandByPoint(yt)):(Kt.expandByPoint(Ir.min),Kt.expandByPoint(Ir.max))}Kt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)yt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(yt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)yt.fromBufferAttribute(o,c),l&&(rr.fromBufferAttribute(e,c),yt.add(rr)),r=Math.max(r,i.distanceToSquared(yt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<i.count;U++)o[U]=new G,l[U]=new G;const c=new G,u=new G,f=new G,h=new Ke,p=new Ke,x=new Ke,S=new G,g=new G;function d(U,_,M){c.fromBufferAttribute(i,U),u.fromBufferAttribute(i,_),f.fromBufferAttribute(i,M),h.fromBufferAttribute(s,U),p.fromBufferAttribute(s,_),x.fromBufferAttribute(s,M),u.sub(c),f.sub(c),p.sub(h),x.sub(h);const L=1/(p.x*x.y-x.x*p.y);isFinite(L)&&(S.copy(u).multiplyScalar(x.y).addScaledVector(f,-p.y).multiplyScalar(L),g.copy(f).multiplyScalar(p.x).addScaledVector(u,-x.x).multiplyScalar(L),o[U].add(S),o[_].add(S),o[M].add(S),l[U].add(g),l[_].add(g),l[M].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let U=0,_=b.length;U<_;++U){const M=b[U],L=M.start,N=M.count;for(let B=L,Z=L+N;B<Z;B+=3)d(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const A=new G,y=new G,C=new G,R=new G;function T(U){C.fromBufferAttribute(r,U),R.copy(C);const _=o[U];A.copy(_),A.sub(C.multiplyScalar(C.dot(_))).normalize(),y.crossVectors(R,_);const L=y.dot(l[U])<0?-1:1;a.setXYZW(U,A.x,A.y,A.z,L)}for(let U=0,_=b.length;U<_;++U){const M=b[U],L=M.start,N=M.count;for(let B=L,Z=L+N;B<Z;B+=3)T(e.getX(B+0)),T(e.getX(B+1)),T(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new gn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new G,s=new G,a=new G,o=new G,l=new G,c=new G,u=new G,f=new G;if(e)for(let h=0,p=e.count;h<p;h+=3){const x=e.getX(h+0),S=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,S),a.fromBufferAttribute(t,g),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,g),o.add(u),l.add(u),c.add(u),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)yt.fromBufferAttribute(e,t),yt.normalize(),e.setXYZ(t,yt.x,yt.y,yt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let p=0,x=0;for(let S=0,g=l.length;S<g;S++){o.isInterleavedBufferAttribute?p=l[S]*o.data.stride+o.offset:p=l[S]*u;for(let d=0;d<u;d++)h[x++]=c[p++]}return new gn(h,u,f)}if(this.index===null)return ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ln,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Su=new mt,Pi=new Ph,ws=new Sa,Mu=new G,Rs=new G,Cs=new G,Ps=new G,co=new G,Ds=new G,Eu=new G,Ls=new G;class In extends Vt{constructor(e=new ln,t=new Ih){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Ds.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(co.fromBufferAttribute(f,e),a?Ds.addScaledVector(co,u):Ds.addScaledVector(co.sub(t),u))}t.add(Ds)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ws.copy(i.boundingSphere),ws.applyMatrix4(s),Pi.copy(e.ray).recast(e.near),!(ws.containsPoint(Pi.origin)===!1&&(Pi.intersectSphere(ws,Mu)===null||Pi.origin.distanceToSquared(Mu)>(e.far-e.near)**2))&&(Su.copy(s).invert(),Pi.copy(e.ray).applyMatrix4(Su),!(i.boundingBox!==null&&Pi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Pi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,S=h.length;x<S;x++){const g=h[x],d=a[g.materialIndex],b=Math.max(g.start,p.start),A=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let y=b,C=A;y<C;y+=3){const R=o.getX(y),T=o.getX(y+1),U=o.getX(y+2);r=Is(this,d,e,i,c,u,f,R,T,U),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const x=Math.max(0,p.start),S=Math.min(o.count,p.start+p.count);for(let g=x,d=S;g<d;g+=3){const b=o.getX(g),A=o.getX(g+1),y=o.getX(g+2);r=Is(this,a,e,i,c,u,f,b,A,y),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,S=h.length;x<S;x++){const g=h[x],d=a[g.materialIndex],b=Math.max(g.start,p.start),A=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let y=b,C=A;y<C;y+=3){const R=y,T=y+1,U=y+2;r=Is(this,d,e,i,c,u,f,R,T,U),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const x=Math.max(0,p.start),S=Math.min(l.count,p.start+p.count);for(let g=x,d=S;g<d;g+=3){const b=g,A=g+1,y=g+2;r=Is(this,a,e,i,c,u,f,b,A,y),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function Og(n,e,t,i,r,s,a,o){let l;if(e.side===Xt?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Si,o),l===null)return null;Ls.copy(o),Ls.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Ls);return c<t.near||c>t.far?null:{distance:c,point:Ls.clone(),object:n}}function Is(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,Rs),n.getVertexPosition(l,Cs),n.getVertexPosition(c,Ps);const u=Og(n,e,t,i,Rs,Cs,Ps,Eu);if(u){const f=new G;hn.getBarycoord(Eu,Rs,Cs,Ps,f),r&&(u.uv=hn.getInterpolatedAttribute(r,o,l,c,f,new Ke)),s&&(u.uv1=hn.getInterpolatedAttribute(s,o,l,c,f,new Ke)),a&&(u.normal=hn.getInterpolatedAttribute(a,o,l,c,f,new G),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new G,materialIndex:0};hn.getNormal(Rs,Cs,Ps,h.normal),u.face=h,u.barycoord=f}return u}class cs extends ln{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,p=0;x("z","y","x",-1,-1,i,t,e,a,s,0),x("z","y","x",1,-1,i,t,-e,a,s,1),x("x","z","y",1,1,e,i,t,r,a,2),x("x","z","y",1,-1,e,i,-t,r,a,3),x("x","y","z",1,-1,e,t,i,r,s,4),x("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new on(c,3)),this.setAttribute("normal",new on(u,3)),this.setAttribute("uv",new on(f,2));function x(S,g,d,b,A,y,C,R,T,U,_){const M=y/T,L=C/U,N=y/2,B=C/2,Z=R/2,K=T+1,q=U+1;let V=0,J=0;const ge=new G;for(let de=0;de<q;de++){const _e=de*L-B;for(let Ne=0;Ne<K;Ne++){const He=Ne*M-N;ge[S]=He*b,ge[g]=_e*A,ge[d]=Z,c.push(ge.x,ge.y,ge.z),ge[S]=0,ge[g]=0,ge[d]=R>0?1:-1,u.push(ge.x,ge.y,ge.z),f.push(Ne/T),f.push(1-de/U),V+=1}}for(let de=0;de<U;de++)for(let _e=0;_e<T;_e++){const Ne=h+_e+K*de,He=h+_e+K*(de+1),dt=h+(_e+1)+K*(de+1),ot=h+(_e+1)+K*de;l.push(Ne,He,ot),l.push(He,dt,ot),J+=6}o.addGroup(p,J,_),p+=J,h+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Er(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Ut(n){const e={};for(let t=0;t<n.length;t++){const i=Er(n[t]);for(const r in i)e[r]=i[r]}return e}function Bg(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Fh(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const Vg={clone:Er,merge:Ut};var zg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Un extends br{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zg,this.fragmentShader=Hg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Er(e.uniforms),this.uniformsGroups=Bg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Oh extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=wn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ui=new G,yu=new Ke,bu=new Ke;class Zt extends Oh{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=yl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ga*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return yl*2*Math.atan(Math.tan(Ga*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ui.x,ui.y).multiplyScalar(-e/ui.z),ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ui.x,ui.y).multiplyScalar(-e/ui.z)}getViewSize(e,t){return this.getViewBounds(e,yu,bu),t.subVectors(bu,yu)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ga*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const sr=-90,ar=1;class Gg extends Vt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Zt(sr,ar,e,t);r.layers=this.layers,this.add(r);const s=new Zt(sr,ar,e,t);s.layers=this.layers,this.add(s);const a=new Zt(sr,ar,e,t);a.layers=this.layers,this.add(a);const o=new Zt(sr,ar,e,t);o.layers=this.layers,this.add(o);const l=new Zt(sr,ar,e,t);l.layers=this.layers,this.add(l);const c=new Zt(sr,ar,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===wn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===aa)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,h,p),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class Bh extends Bt{constructor(e=[],t=ki,i,r,s,a,o,l,c,u){super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Vh extends Pn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Bh(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new cs(5,5,5),s=new Un({name:"CubemapFromEquirect",uniforms:Er(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Xt,blending:jn});s.uniforms.tEquirect.value=t;const a=new In(r,s),o=t.minFilter;return t.minFilter===zi&&(t.minFilter=Pt),new Gg(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}class Us extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const kg={type:"move"};class uo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Us,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Us,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Us,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const S of e.hand.values()){const g=t.getJointPose(S,i),d=this._getHandJoint(c,S);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,x=.005;c.inputState.pinching&&h>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(kg)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Us;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Wg extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ln,this.environmentIntensity=1,this.environmentRotation=new Ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Xg extends Bt{constructor(e=null,t=1,i=1,r,s,a,o,l,c=Tt,u=Tt,f,h){super(null,a,o,l,c,u,r,s,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const fo=new G,qg=new G,Yg=new Xe;class Fi{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=fo.subVectors(i,t).cross(qg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(fo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Yg.getNormalMatrix(e),r=this.coplanarPoint(fo).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Di=new Sa,$g=new Ke(.5,.5),Ns=new G;class rc{constructor(e=new Fi,t=new Fi,i=new Fi,r=new Fi,s=new Fi,a=new Fi){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=wn,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],f=s[5],h=s[6],p=s[7],x=s[8],S=s[9],g=s[10],d=s[11],b=s[12],A=s[13],y=s[14],C=s[15];if(r[0].setComponents(c-a,p-u,d-x,C-b).normalize(),r[1].setComponents(c+a,p+u,d+x,C+b).normalize(),r[2].setComponents(c+o,p+f,d+S,C+A).normalize(),r[3].setComponents(c-o,p-f,d-S,C-A).normalize(),i)r[4].setComponents(l,h,g,y).normalize(),r[5].setComponents(c-l,p-h,d-g,C-y).normalize();else if(r[4].setComponents(c-l,p-h,d-g,C-y).normalize(),t===wn)r[5].setComponents(c+l,p+h,d+g,C+y).normalize();else if(t===aa)r[5].setComponents(l,h,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Di.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Di.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Di)}intersectsSprite(e){Di.center.set(0,0,0);const t=$g.distanceTo(e.center);return Di.radius=.7071067811865476+t,Di.applyMatrix4(e.matrixWorld),this.intersectsSphere(Di)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ns.x=r.normal.x>0?e.max.x:e.min.x,Ns.y=r.normal.y>0?e.max.y:e.min.y,Ns.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ns)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class zh extends br{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Tu=new mt,bl=new Ph,Fs=new Sa,Os=new G;class Kg extends Vt{constructor(e=new ln,t=new zh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Fs.copy(i.boundingSphere),Fs.applyMatrix4(r),Fs.radius+=s,e.ray.intersectsSphere(Fs)===!1)return;Tu.copy(r).invert(),bl.copy(e.ray).applyMatrix4(Tu);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let x=h,S=p;x<S;x++){const g=c.getX(x);Os.fromBufferAttribute(f,g),Au(Os,g,l,r,e,t,this)}}else{const h=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let x=h,S=p;x<S;x++)Os.fromBufferAttribute(f,x),Au(Os,x,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Au(n,e,t,i,r,s,a){const o=bl.distanceSqToPoint(n);if(o<t){const l=new G;bl.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class is extends Bt{constructor(e,t,i=Dn,r,s,a,o=Tt,l=Tt,c,u=ni,f=1){if(u!==ni&&u!==Hi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ic(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class jg extends is{constructor(e,t=Dn,i=ki,r,s,a=Tt,o=Tt,l,c=ni){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,i,r,s,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Hh extends Bt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class sc extends ln{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],a=[];o(r),c(i),u(),this.setAttribute("position",new on(s,3)),this.setAttribute("normal",new on(s.slice(),3)),this.setAttribute("uv",new on(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(b){const A=new G,y=new G,C=new G;for(let R=0;R<t.length;R+=3)p(t[R+0],A),p(t[R+1],y),p(t[R+2],C),l(A,y,C,b)}function l(b,A,y,C){const R=C+1,T=[];for(let U=0;U<=R;U++){T[U]=[];const _=b.clone().lerp(y,U/R),M=A.clone().lerp(y,U/R),L=R-U;for(let N=0;N<=L;N++)N===0&&U===R?T[U][N]=_:T[U][N]=_.clone().lerp(M,N/L)}for(let U=0;U<R;U++)for(let _=0;_<2*(R-U)-1;_++){const M=Math.floor(_/2);_%2===0?(h(T[U][M+1]),h(T[U+1][M]),h(T[U][M])):(h(T[U][M+1]),h(T[U+1][M+1]),h(T[U+1][M]))}}function c(b){const A=new G;for(let y=0;y<s.length;y+=3)A.x=s[y+0],A.y=s[y+1],A.z=s[y+2],A.normalize().multiplyScalar(b),s[y+0]=A.x,s[y+1]=A.y,s[y+2]=A.z}function u(){const b=new G;for(let A=0;A<s.length;A+=3){b.x=s[A+0],b.y=s[A+1],b.z=s[A+2];const y=g(b)/2/Math.PI+.5,C=d(b)/Math.PI+.5;a.push(y,1-C)}x(),f()}function f(){for(let b=0;b<a.length;b+=6){const A=a[b+0],y=a[b+2],C=a[b+4],R=Math.max(A,y,C),T=Math.min(A,y,C);R>.9&&T<.1&&(A<.2&&(a[b+0]+=1),y<.2&&(a[b+2]+=1),C<.2&&(a[b+4]+=1))}}function h(b){s.push(b.x,b.y,b.z)}function p(b,A){const y=b*3;A.x=e[y+0],A.y=e[y+1],A.z=e[y+2]}function x(){const b=new G,A=new G,y=new G,C=new G,R=new Ke,T=new Ke,U=new Ke;for(let _=0,M=0;_<s.length;_+=9,M+=6){b.set(s[_+0],s[_+1],s[_+2]),A.set(s[_+3],s[_+4],s[_+5]),y.set(s[_+6],s[_+7],s[_+8]),R.set(a[M+0],a[M+1]),T.set(a[M+2],a[M+3]),U.set(a[M+4],a[M+5]),C.copy(b).add(A).add(y).divideScalar(3);const L=g(C);S(R,M+0,b,L),S(T,M+2,A,L),S(U,M+4,y,L)}}function S(b,A,y,C){C<0&&b.x===1&&(a[A]=b.x-1),y.x===0&&y.z===0&&(a[A]=C/2/Math.PI+.5)}function g(b){return Math.atan2(b.z,-b.x)}function d(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sc(e.vertices,e.indices,e.radius,e.detail)}}class ac extends sc{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ac(e.radius,e.detail)}}class Ma extends ln{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,h=t/l,p=[],x=[],S=[],g=[];for(let d=0;d<u;d++){const b=d*h-a;for(let A=0;A<c;A++){const y=A*f-s;x.push(y,-b,0),S.push(0,0,1),g.push(A/o),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let b=0;b<o;b++){const A=b+c*d,y=b+c*(d+1),C=b+1+c*(d+1),R=b+1+c*d;p.push(A,y,R),p.push(y,C,R)}this.setIndex(p),this.setAttribute("position",new on(x,3)),this.setAttribute("normal",new on(S,3)),this.setAttribute("uv",new on(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ma(e.width,e.height,e.widthSegments,e.heightSegments)}}class Zg extends Un{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Jg extends br{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wh,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Qg extends br{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ug,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class e_ extends br{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Gh extends Vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new et(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const ho=new mt,wu=new G,Ru=new G;class t_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ke(512,512),this.mapType=Jt,this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rc,this._frameExtents=new Ke(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;wu.setFromMatrixPosition(e.matrixWorld),t.position.copy(wu),Ru.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ru),t.updateMatrixWorld(),ho.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ho,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ho)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class n_ extends t_{constructor(){super(new Zt(90,1,.5,500)),this.isPointLightShadow=!0}}class i_ extends Gh{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new n_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class kh extends Oh{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class r_ extends Gh{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class s_ extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Cu(n,e,t,i){const r=a_(i);switch(t){case bh:return n*e;case Ah:return n*e/r.components*r.byteLength;case Jl:return n*e/r.components*r.byteLength;case Sr:return n*e*2/r.components*r.byteLength;case Ql:return n*e*2/r.components*r.byteLength;case Th:return n*e*3/r.components*r.byteLength;case dn:return n*e*4/r.components*r.byteLength;case ec:return n*e*4/r.components*r.byteLength;case qs:case Ys:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case $s:case Ks:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case qo:case $o:return Math.max(n,16)*Math.max(e,8)/4;case Xo:case Yo:return Math.max(n,8)*Math.max(e,8)/2;case Ko:case jo:case Jo:case Qo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Zo:case el:case tl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case nl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case il:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case rl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case sl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case al:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ol:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ll:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case cl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ul:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case fl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case hl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case dl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case pl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ml:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case gl:case _l:case xl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case vl:case Sl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ml:case El:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function a_(n){switch(n){case Jt:case Sh:return{byteLength:1,components:1};case es:case Mh:case ti:return{byteLength:2,components:1};case jl:case Zl:return{byteLength:2,components:4};case Dn:case Kl:case An:return{byteLength:4,components:1};case Eh:case yh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$l}}));typeof window<"u"&&(window.__THREE__?ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$l);function Wh(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function o_(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,u);else{f.sort((p,x)=>p.start-x.start);let h=0;for(let p=1;p<f.length;p++){const x=f[h],S=f[p];S.start<=x.start+x.count+1?x.count=Math.max(x.count,S.start+S.count-x.start):(++h,f[h]=S)}f.length=h+1;for(let p=0,x=f.length;p<x;p++){const S=f[p];n.bufferSubData(c,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var l_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,c_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,u_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,f_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,h_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,d_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,p_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,m_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,g_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,__=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,x_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,v_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,S_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,M_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,E_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,y_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,b_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,T_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,A_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,w_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,R_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,C_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,P_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,D_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,L_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,I_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,U_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,N_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,F_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,O_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,B_="gl_FragColor = linearToOutputTexel( gl_FragColor );",V_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,z_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,H_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,G_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,k_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,W_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,X_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,q_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Y_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,K_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,j_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Z_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,J_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Q_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,e0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,t0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,n0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,i0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,r0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,s0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,a0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,o0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,l0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,c0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,u0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,f0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,h0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,d0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,p0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,m0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,g0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,_0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,x0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,v0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,S0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,M0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,E0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,y0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,b0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,T0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,A0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,w0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,R0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,C0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,P0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,D0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,L0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,I0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,U0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,N0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,F0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,O0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,B0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,V0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,z0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,H0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,G0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,k0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,W0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,X0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,q0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Y0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,K0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,j0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Z0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,J0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Q0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ex=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,tx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,nx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ix=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ax=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ox=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ux=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,px=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,mx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,gx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,_x=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Sx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Mx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ex=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ax=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Rx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Cx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Px=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Lx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ix=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ux=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Fx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ox=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Vx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qe={alphahash_fragment:l_,alphahash_pars_fragment:c_,alphamap_fragment:u_,alphamap_pars_fragment:f_,alphatest_fragment:h_,alphatest_pars_fragment:d_,aomap_fragment:p_,aomap_pars_fragment:m_,batching_pars_vertex:g_,batching_vertex:__,begin_vertex:x_,beginnormal_vertex:v_,bsdfs:S_,iridescence_fragment:M_,bumpmap_pars_fragment:E_,clipping_planes_fragment:y_,clipping_planes_pars_fragment:b_,clipping_planes_pars_vertex:T_,clipping_planes_vertex:A_,color_fragment:w_,color_pars_fragment:R_,color_pars_vertex:C_,color_vertex:P_,common:D_,cube_uv_reflection_fragment:L_,defaultnormal_vertex:I_,displacementmap_pars_vertex:U_,displacementmap_vertex:N_,emissivemap_fragment:F_,emissivemap_pars_fragment:O_,colorspace_fragment:B_,colorspace_pars_fragment:V_,envmap_fragment:z_,envmap_common_pars_fragment:H_,envmap_pars_fragment:G_,envmap_pars_vertex:k_,envmap_physical_pars_fragment:e0,envmap_vertex:W_,fog_vertex:X_,fog_pars_vertex:q_,fog_fragment:Y_,fog_pars_fragment:$_,gradientmap_pars_fragment:K_,lightmap_pars_fragment:j_,lights_lambert_fragment:Z_,lights_lambert_pars_fragment:J_,lights_pars_begin:Q_,lights_toon_fragment:t0,lights_toon_pars_fragment:n0,lights_phong_fragment:i0,lights_phong_pars_fragment:r0,lights_physical_fragment:s0,lights_physical_pars_fragment:a0,lights_fragment_begin:o0,lights_fragment_maps:l0,lights_fragment_end:c0,logdepthbuf_fragment:u0,logdepthbuf_pars_fragment:f0,logdepthbuf_pars_vertex:h0,logdepthbuf_vertex:d0,map_fragment:p0,map_pars_fragment:m0,map_particle_fragment:g0,map_particle_pars_fragment:_0,metalnessmap_fragment:x0,metalnessmap_pars_fragment:v0,morphinstance_vertex:S0,morphcolor_vertex:M0,morphnormal_vertex:E0,morphtarget_pars_vertex:y0,morphtarget_vertex:b0,normal_fragment_begin:T0,normal_fragment_maps:A0,normal_pars_fragment:w0,normal_pars_vertex:R0,normal_vertex:C0,normalmap_pars_fragment:P0,clearcoat_normal_fragment_begin:D0,clearcoat_normal_fragment_maps:L0,clearcoat_pars_fragment:I0,iridescence_pars_fragment:U0,opaque_fragment:N0,packing:F0,premultiplied_alpha_fragment:O0,project_vertex:B0,dithering_fragment:V0,dithering_pars_fragment:z0,roughnessmap_fragment:H0,roughnessmap_pars_fragment:G0,shadowmap_pars_fragment:k0,shadowmap_pars_vertex:W0,shadowmap_vertex:X0,shadowmask_pars_fragment:q0,skinbase_vertex:Y0,skinning_pars_vertex:$0,skinning_vertex:K0,skinnormal_vertex:j0,specularmap_fragment:Z0,specularmap_pars_fragment:J0,tonemapping_fragment:Q0,tonemapping_pars_fragment:ex,transmission_fragment:tx,transmission_pars_fragment:nx,uv_pars_fragment:ix,uv_pars_vertex:rx,uv_vertex:sx,worldpos_vertex:ax,background_vert:ox,background_frag:lx,backgroundCube_vert:cx,backgroundCube_frag:ux,cube_vert:fx,cube_frag:hx,depth_vert:dx,depth_frag:px,distance_vert:mx,distance_frag:gx,equirect_vert:_x,equirect_frag:xx,linedashed_vert:vx,linedashed_frag:Sx,meshbasic_vert:Mx,meshbasic_frag:Ex,meshlambert_vert:yx,meshlambert_frag:bx,meshmatcap_vert:Tx,meshmatcap_frag:Ax,meshnormal_vert:wx,meshnormal_frag:Rx,meshphong_vert:Cx,meshphong_frag:Px,meshphysical_vert:Dx,meshphysical_frag:Lx,meshtoon_vert:Ix,meshtoon_frag:Ux,points_vert:Nx,points_frag:Fx,shadow_vert:Ox,shadow_frag:Bx,sprite_vert:Vx,sprite_frag:zx},Se={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},Tn={basic:{uniforms:Ut([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:Ut([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new et(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:Ut([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:Ut([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:Ut([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new et(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:Ut([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:Ut([Se.points,Se.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:Ut([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:Ut([Se.common,Se.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:Ut([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:Ut([Se.sprite,Se.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distance:{uniforms:Ut([Se.common,Se.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distance_vert,fragmentShader:qe.distance_frag},shadow:{uniforms:Ut([Se.lights,Se.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};Tn.physical={uniforms:Ut([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const Bs={r:0,b:0,g:0},Li=new Ln,Hx=new mt;function Gx(n,e,t,i,r,s,a){const o=new et(0);let l=s===!0?0:1,c,u,f=null,h=0,p=null;function x(A){let y=A.isScene===!0?A.background:null;return y&&y.isTexture&&(y=(A.backgroundBlurriness>0?t:e).get(y)),y}function S(A){let y=!1;const C=x(A);C===null?d(o,l):C&&C.isColor&&(d(C,1),y=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(A,y){const C=x(y);C&&(C.isCubeTexture||C.mapping===va)?(u===void 0&&(u=new In(new cs(1,1,1),new Un({name:"BackgroundCubeMaterial",uniforms:Er(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,T,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Li.copy(y.backgroundRotation),Li.x*=-1,Li.y*=-1,Li.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Li.y*=-1,Li.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Hx.makeRotationFromEuler(Li)),u.material.toneMapped=Ze.getTransfer(C.colorSpace)!==st,(f!==C||h!==C.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=C,h=C.version,p=n.toneMapping),u.layers.enableAll(),A.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new In(new Ma(2,2),new Un({name:"BackgroundMaterial",uniforms:Er(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:Si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(C.colorSpace)!==st,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(f!==C||h!==C.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=C,h=C.version,p=n.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function d(A,y){A.getRGB(Bs,Fh(n)),i.buffers.color.setClear(Bs.r,Bs.g,Bs.b,y,a)}function b(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(A,y=1){o.set(A),l=y,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,d(o,l)},render:S,addToRenderList:g,dispose:b}}function kx(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(M,L,N,B,Z){let K=!1;const q=f(B,N,L);s!==q&&(s=q,c(s.object)),K=p(M,B,N,Z),K&&x(M,B,N,Z),Z!==null&&e.update(Z,n.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,y(M,L,N,B),Z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function f(M,L,N){const B=N.wireframe===!0;let Z=i[M.id];Z===void 0&&(Z={},i[M.id]=Z);let K=Z[L.id];K===void 0&&(K={},Z[L.id]=K);let q=K[B];return q===void 0&&(q=h(l()),K[B]=q),q}function h(M){const L=[],N=[],B=[];for(let Z=0;Z<t;Z++)L[Z]=0,N[Z]=0,B[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:N,attributeDivisors:B,object:M,attributes:{},index:null}}function p(M,L,N,B){const Z=s.attributes,K=L.attributes;let q=0;const V=N.getAttributes();for(const J in V)if(V[J].location>=0){const de=Z[J];let _e=K[J];if(_e===void 0&&(J==="instanceMatrix"&&M.instanceMatrix&&(_e=M.instanceMatrix),J==="instanceColor"&&M.instanceColor&&(_e=M.instanceColor)),de===void 0||de.attribute!==_e||_e&&de.data!==_e.data)return!0;q++}return s.attributesNum!==q||s.index!==B}function x(M,L,N,B){const Z={},K=L.attributes;let q=0;const V=N.getAttributes();for(const J in V)if(V[J].location>=0){let de=K[J];de===void 0&&(J==="instanceMatrix"&&M.instanceMatrix&&(de=M.instanceMatrix),J==="instanceColor"&&M.instanceColor&&(de=M.instanceColor));const _e={};_e.attribute=de,de&&de.data&&(_e.data=de.data),Z[J]=_e,q++}s.attributes=Z,s.attributesNum=q,s.index=B}function S(){const M=s.newAttributes;for(let L=0,N=M.length;L<N;L++)M[L]=0}function g(M){d(M,0)}function d(M,L){const N=s.newAttributes,B=s.enabledAttributes,Z=s.attributeDivisors;N[M]=1,B[M]===0&&(n.enableVertexAttribArray(M),B[M]=1),Z[M]!==L&&(n.vertexAttribDivisor(M,L),Z[M]=L)}function b(){const M=s.newAttributes,L=s.enabledAttributes;for(let N=0,B=L.length;N<B;N++)L[N]!==M[N]&&(n.disableVertexAttribArray(N),L[N]=0)}function A(M,L,N,B,Z,K,q){q===!0?n.vertexAttribIPointer(M,L,N,Z,K):n.vertexAttribPointer(M,L,N,B,Z,K)}function y(M,L,N,B){S();const Z=B.attributes,K=N.getAttributes(),q=L.defaultAttributeValues;for(const V in K){const J=K[V];if(J.location>=0){let ge=Z[V];if(ge===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(ge=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(ge=M.instanceColor)),ge!==void 0){const de=ge.normalized,_e=ge.itemSize,Ne=e.get(ge);if(Ne===void 0)continue;const He=Ne.buffer,dt=Ne.type,ot=Ne.bytesPerElement,te=dt===n.INT||dt===n.UNSIGNED_INT||ge.gpuType===Kl;if(ge.isInterleavedBufferAttribute){const ae=ge.data,we=ae.stride,Be=ge.offset;if(ae.isInstancedInterleavedBuffer){for(let Re=0;Re<J.locationSize;Re++)d(J.location+Re,ae.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Re=0;Re<J.locationSize;Re++)g(J.location+Re);n.bindBuffer(n.ARRAY_BUFFER,He);for(let Re=0;Re<J.locationSize;Re++)A(J.location+Re,_e/J.locationSize,dt,de,we*ot,(Be+_e/J.locationSize*Re)*ot,te)}else{if(ge.isInstancedBufferAttribute){for(let ae=0;ae<J.locationSize;ae++)d(J.location+ae,ge.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let ae=0;ae<J.locationSize;ae++)g(J.location+ae);n.bindBuffer(n.ARRAY_BUFFER,He);for(let ae=0;ae<J.locationSize;ae++)A(J.location+ae,_e/J.locationSize,dt,de,_e*ot,_e/J.locationSize*ae*ot,te)}}else if(q!==void 0){const de=q[V];if(de!==void 0)switch(de.length){case 2:n.vertexAttrib2fv(J.location,de);break;case 3:n.vertexAttrib3fv(J.location,de);break;case 4:n.vertexAttrib4fv(J.location,de);break;default:n.vertexAttrib1fv(J.location,de)}}}}b()}function C(){U();for(const M in i){const L=i[M];for(const N in L){const B=L[N];for(const Z in B)u(B[Z].object),delete B[Z];delete L[N]}delete i[M]}}function R(M){if(i[M.id]===void 0)return;const L=i[M.id];for(const N in L){const B=L[N];for(const Z in B)u(B[Z].object),delete B[Z];delete L[N]}delete i[M.id]}function T(M){for(const L in i){const N=i[L];if(N[M.id]===void 0)continue;const B=N[M.id];for(const Z in B)u(B[Z].object),delete B[Z];delete N[M.id]}}function U(){_(),a=!0,s!==r&&(s=r,c(s.object))}function _(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:U,resetDefaultState:_,dispose:C,releaseStatesOfGeometry:R,releaseStatesOfProgram:T,initAttributes:S,enableAttribute:g,disableUnusedAttributes:b}}function Wx(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function a(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function o(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let x=0;x<f;x++)p+=u[x];t.update(p,i,1)}function l(c,u,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<c.length;x++)a(c[x],u[x],h[x]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let x=0;for(let S=0;S<f;S++)x+=u[S]*h[S];t.update(x,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Xx(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(T){return!(T!==dn&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const U=T===ti&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Jt&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==An&&!U)}function l(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(ze("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=n.getParameter(n.MAX_SAMPLES),R=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:x,maxTextureSize:S,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:b,maxVaryings:A,maxFragmentUniforms:y,maxSamples:C,samples:R}}function qx(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Fi,o=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,p){const x=f.clippingPlanes,S=f.clipIntersection,g=f.clipShadows,d=n.get(f);if(!r||x===null||x.length===0||s&&!g)s?u(null):c();else{const b=s?0:i,A=b*4;let y=d.clippingState||null;l.value=y,y=u(x,h,A,p);for(let C=0;C!==A;++C)y[C]=t[C];d.clippingState=y,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,p,x){const S=f!==null?f.length:0;let g=null;if(S!==0){if(g=l.value,x!==!0||g===null){const d=p+S*4,b=h.matrixWorldInverse;o.getNormalMatrix(b),(g===null||g.length<d)&&(g=new Float32Array(d));for(let A=0,y=p;A!==S;++A,y+=4)a.copy(f[A]).applyMatrix4(b,o),a.normal.toArray(g,y),g[y+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,g}}function Yx(n){let e=new WeakMap;function t(a,o){return o===Ho?a.mapping=ki:o===Go&&(a.mapping=vr),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ho||o===Go)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Vh(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const mi=4,Pu=[.125,.215,.35,.446,.526,.582],Vi=20,$x=256,Ur=new kh,Du=new et;let po=null,mo=0,go=0,_o=!1;const Kx=new G;class Lu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=Kx}=s;po=this._renderer.getRenderTarget(),mo=this._renderer.getActiveCubeFace(),go=this._renderer.getActiveMipmapLevel(),_o=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(po,mo,go),this._renderer.xr.enabled=_o,e.scissorTest=!1,or(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ki||e.mapping===vr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),po=this._renderer.getRenderTarget(),mo=this._renderer.getActiveCubeFace(),go=this._renderer.getActiveMipmapLevel(),_o=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Pt,minFilter:Pt,generateMipmaps:!1,type:ti,format:dn,colorSpace:Mr,depthBuffer:!1},r=Iu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Iu(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=jx(s)),this._blurMaterial=Jx(s,e,t),this._ggxMaterial=Zx(s,e,t)}return r}_compileMaterial(e){const t=new In(new ln,e);this._renderer.compile(t,Ur)}_sceneToCubeUV(e,t,i,r,s){const l=new Zt(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(Du),f.toneMapping=Cn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new In(new cs,new Ih({name:"PMREM.Background",side:Xt,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,g=S.material;let d=!1;const b=e.background;b?b.isColor&&(g.color.copy(b),e.background=null,d=!0):(g.color.copy(Du),d=!0);for(let A=0;A<6;A++){const y=A%3;y===0?(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[A],s.y,s.z)):y===1?(l.up.set(0,0,c[A]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[A],s.z)):(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[A]));const C=this._cubeSize;or(r,y*C,A>2?C:0,C,C),f.setRenderTarget(r),d&&f.render(S,l),f.render(e,l)}f.toneMapping=p,f.autoClear=h,e.background=b}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===ki||e.mapping===vr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Uu());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;or(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Ur)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=0+c*1.25,p=f*h,{_lodMax:x}=this,S=this._sizeLods[i],g=3*S*(i>x-mi?i-x+mi:0),d=4*(this._cubeSize-S);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=x-t,or(s,g,d,3*S,2*S),r.setRenderTarget(s),r.render(o,Ur),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=x-i,or(e,g,d,3*S,2*S),r.setRenderTarget(e),r.render(o,Ur)}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Qe("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[r];f.material=c;const h=c.uniforms,p=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Vi-1),S=s/x,g=isFinite(s)?1+Math.floor(u*S):Vi;g>Vi&&ze(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Vi}`);const d=[];let b=0;for(let T=0;T<Vi;++T){const U=T/S,_=Math.exp(-U*U/2);d.push(_),T===0?b+=_:T<g&&(b+=2*_)}for(let T=0;T<d.length;T++)d[T]=d[T]/b;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=d,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:A}=this;h.dTheta.value=x,h.mipInt.value=A-i;const y=this._sizeLods[r],C=3*y*(r>A-mi?r-A+mi:0),R=4*(this._cubeSize-y);or(t,C,R,3*y,2*y),l.setRenderTarget(t),l.render(f,Ur)}}function jx(n){const e=[],t=[],i=[];let r=n;const s=n-mi+1+Pu.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>n-mi?l=Pu[a-n+mi-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,x=6,S=3,g=2,d=1,b=new Float32Array(S*x*p),A=new Float32Array(g*x*p),y=new Float32Array(d*x*p);for(let R=0;R<p;R++){const T=R%3*2/3-1,U=R>2?0:-1,_=[T,U,0,T+2/3,U,0,T+2/3,U+1,0,T,U,0,T+2/3,U+1,0,T,U+1,0];b.set(_,S*x*R),A.set(h,g*x*R);const M=[R,R,R,R,R,R];y.set(M,d*x*R)}const C=new ln;C.setAttribute("position",new gn(b,S)),C.setAttribute("uv",new gn(A,g)),C.setAttribute("faceIndex",new gn(y,d)),i.push(new In(C,null)),r>mi&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Iu(n,e,t){const i=new Pn(n,e,t);return i.texture.mapping=va,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function or(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Zx(n,e,t){return new Un({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:$x,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ea(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Jx(n,e,t){const i=new Float32Array(Vi),r=new G(0,1,0);return new Un({name:"SphericalGaussianBlur",defines:{n:Vi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ea(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Uu(){return new Un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ea(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Nu(){return new Un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ea(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Ea(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Qx(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ho||l===Go,u=l===ki||l===vr;if(c||u){let f=e.get(o);const h=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new Lu(n)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const p=o.image;return c&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new Lu(n)),f=c?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function ev(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&ns("WebGLRenderer: "+i+" extension not supported."),r}}}function tv(n,e,t,i){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const x in h.attributes)e.remove(h.attributes[x]);h.removeEventListener("dispose",a),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const p in h)e.update(h[p],n.ARRAY_BUFFER)}function c(f){const h=[],p=f.index,x=f.attributes.position;let S=0;if(p!==null){const b=p.array;S=p.version;for(let A=0,y=b.length;A<y;A+=3){const C=b[A+0],R=b[A+1],T=b[A+2];h.push(C,R,R,T,T,C)}}else if(x!==void 0){const b=x.array;S=x.version;for(let A=0,y=b.length/3-1;A<y;A+=3){const C=A+0,R=A+1,T=A+2;h.push(C,R,R,T,T,C)}}else return;const g=new(Rh(h)?Nh:Uh)(h,1);g.version=S;const d=s.get(f);d&&e.remove(d),s.set(f,g)}function u(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function nv(n,e,t){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,p){n.drawElements(i,p,s,h*a),t.update(p,i,1)}function c(h,p,x){x!==0&&(n.drawElementsInstanced(i,p,s,h*a,x),t.update(p,i,x))}function u(h,p,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,x);let g=0;for(let d=0;d<x;d++)g+=p[d];t.update(g,i,1)}function f(h,p,x,S){if(x===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let d=0;d<h.length;d++)c(h[d]/a,p[d],S[d]);else{g.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,S,0,x);let d=0;for(let b=0;b<x;b++)d+=p[b]*S[b];t.update(d,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function iv(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:Qe("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function rv(n,e,t){const i=new WeakMap,r=new xt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==f){let M=function(){U.dispose(),i.delete(o),o.removeEventListener("dispose",M)};var p=M;h!==void 0&&h.texture.dispose();const x=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],A=o.morphAttributes.color||[];let y=0;x===!0&&(y=1),S===!0&&(y=2),g===!0&&(y=3);let C=o.attributes.position.count*y,R=1;C>e.maxTextureSize&&(R=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const T=new Float32Array(C*R*4*f),U=new Ch(T,C,R,f);U.type=An,U.needsUpdate=!0;const _=y*4;for(let L=0;L<f;L++){const N=d[L],B=b[L],Z=A[L],K=C*R*4*L;for(let q=0;q<N.count;q++){const V=q*_;x===!0&&(r.fromBufferAttribute(N,q),T[K+V+0]=r.x,T[K+V+1]=r.y,T[K+V+2]=r.z,T[K+V+3]=0),S===!0&&(r.fromBufferAttribute(B,q),T[K+V+4]=r.x,T[K+V+5]=r.y,T[K+V+6]=r.z,T[K+V+7]=0),g===!0&&(r.fromBufferAttribute(Z,q),T[K+V+8]=r.x,T[K+V+9]=r.y,T[K+V+10]=r.z,T[K+V+11]=Z.itemSize===4?r.w:1)}}h={count:f,texture:U,size:new Ke(C,R)},i.set(o,h),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let x=0;for(let g=0;g<c.length;g++)x+=c[g];const S=o.morphTargetsRelative?1:1-x;l.getUniforms().setValue(n,"morphTargetBaseInfluence",S),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function sv(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const av={[hh]:"LINEAR_TONE_MAPPING",[dh]:"REINHARD_TONE_MAPPING",[ph]:"CINEON_TONE_MAPPING",[mh]:"ACES_FILMIC_TONE_MAPPING",[_h]:"AGX_TONE_MAPPING",[xh]:"NEUTRAL_TONE_MAPPING",[gh]:"CUSTOM_TONE_MAPPING"};function ov(n,e,t,i,r){const s=new Pn(e,t,{type:n,depthBuffer:i,stencilBuffer:r}),a=new Pn(e,t,{type:ti,depthBuffer:!1,stencilBuffer:!1}),o=new ln;o.setAttribute("position",new on([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new on([0,2,0,0,2,0],2));const l=new Zg({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new In(o,l),u=new kh(-1,1,1,-1,0,1);let f=null,h=null,p=!1,x,S=null,g=[],d=!1;this.setSize=function(b,A){s.setSize(b,A),a.setSize(b,A);for(let y=0;y<g.length;y++){const C=g[y];C.setSize&&C.setSize(b,A)}},this.setEffects=function(b){g=b,d=g.length>0&&g[0].isRenderPass===!0;const A=s.width,y=s.height;for(let C=0;C<g.length;C++){const R=g[C];R.setSize&&R.setSize(A,y)}},this.begin=function(b,A){if(p||b.toneMapping===Cn&&g.length===0)return!1;if(S=A,A!==null){const y=A.width,C=A.height;(s.width!==y||s.height!==C)&&this.setSize(y,C)}return d===!1&&b.setRenderTarget(s),x=b.toneMapping,b.toneMapping=Cn,!0},this.hasRenderPass=function(){return d},this.end=function(b,A){b.toneMapping=x,p=!0;let y=s,C=a;for(let R=0;R<g.length;R++){const T=g[R];if(T.enabled!==!1&&(T.render(b,C,y,A),T.needsSwap!==!1)){const U=y;y=C,C=U}}if(f!==b.outputColorSpace||h!==b.toneMapping){f=b.outputColorSpace,h=b.toneMapping,l.defines={},Ze.getTransfer(f)===st&&(l.defines.SRGB_TRANSFER="");const R=av[h];R&&(l.defines[R]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=y.texture,b.setRenderTarget(S),b.render(c,u),S=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const Xh=new Bt,Tl=new is(1,1),qh=new Ch,Yh=new Ag,$h=new Bh,Fu=[],Ou=[],Bu=new Float32Array(16),Vu=new Float32Array(9),zu=new Float32Array(4);function Tr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Fu[r];if(s===void 0&&(s=new Float32Array(r),Fu[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Mt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Et(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ya(n,e){let t=Ou[e];t===void 0&&(t=new Int32Array(e),Ou[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function lv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function cv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2fv(this.addr,e),Et(t,e)}}function uv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mt(t,e))return;n.uniform3fv(this.addr,e),Et(t,e)}}function fv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4fv(this.addr,e),Et(t,e)}}function hv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Et(t,e)}else{if(Mt(t,i))return;zu.set(i),n.uniformMatrix2fv(this.addr,!1,zu),Et(t,i)}}function dv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Et(t,e)}else{if(Mt(t,i))return;Vu.set(i),n.uniformMatrix3fv(this.addr,!1,Vu),Et(t,i)}}function pv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Et(t,e)}else{if(Mt(t,i))return;Bu.set(i),n.uniformMatrix4fv(this.addr,!1,Bu),Et(t,i)}}function mv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function gv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2iv(this.addr,e),Et(t,e)}}function _v(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;n.uniform3iv(this.addr,e),Et(t,e)}}function xv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4iv(this.addr,e),Et(t,e)}}function vv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Sv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2uiv(this.addr,e),Et(t,e)}}function Mv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;n.uniform3uiv(this.addr,e),Et(t,e)}}function Ev(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4uiv(this.addr,e),Et(t,e)}}function yv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Tl.compareFunction=t.isReversedDepthBuffer()?nc:tc,s=Tl):s=Xh,t.setTexture2D(e||s,r)}function bv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Yh,r)}function Tv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||$h,r)}function Av(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||qh,r)}function wv(n){switch(n){case 5126:return lv;case 35664:return cv;case 35665:return uv;case 35666:return fv;case 35674:return hv;case 35675:return dv;case 35676:return pv;case 5124:case 35670:return mv;case 35667:case 35671:return gv;case 35668:case 35672:return _v;case 35669:case 35673:return xv;case 5125:return vv;case 36294:return Sv;case 36295:return Mv;case 36296:return Ev;case 35678:case 36198:case 36298:case 36306:case 35682:return yv;case 35679:case 36299:case 36307:return bv;case 35680:case 36300:case 36308:case 36293:return Tv;case 36289:case 36303:case 36311:case 36292:return Av}}function Rv(n,e){n.uniform1fv(this.addr,e)}function Cv(n,e){const t=Tr(e,this.size,2);n.uniform2fv(this.addr,t)}function Pv(n,e){const t=Tr(e,this.size,3);n.uniform3fv(this.addr,t)}function Dv(n,e){const t=Tr(e,this.size,4);n.uniform4fv(this.addr,t)}function Lv(n,e){const t=Tr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Iv(n,e){const t=Tr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Uv(n,e){const t=Tr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Nv(n,e){n.uniform1iv(this.addr,e)}function Fv(n,e){n.uniform2iv(this.addr,e)}function Ov(n,e){n.uniform3iv(this.addr,e)}function Bv(n,e){n.uniform4iv(this.addr,e)}function Vv(n,e){n.uniform1uiv(this.addr,e)}function zv(n,e){n.uniform2uiv(this.addr,e)}function Hv(n,e){n.uniform3uiv(this.addr,e)}function Gv(n,e){n.uniform4uiv(this.addr,e)}function kv(n,e,t){const i=this.cache,r=e.length,s=ya(t,r);Mt(i,s)||(n.uniform1iv(this.addr,s),Et(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=Tl:a=Xh;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function Wv(n,e,t){const i=this.cache,r=e.length,s=ya(t,r);Mt(i,s)||(n.uniform1iv(this.addr,s),Et(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Yh,s[a])}function Xv(n,e,t){const i=this.cache,r=e.length,s=ya(t,r);Mt(i,s)||(n.uniform1iv(this.addr,s),Et(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||$h,s[a])}function qv(n,e,t){const i=this.cache,r=e.length,s=ya(t,r);Mt(i,s)||(n.uniform1iv(this.addr,s),Et(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||qh,s[a])}function Yv(n){switch(n){case 5126:return Rv;case 35664:return Cv;case 35665:return Pv;case 35666:return Dv;case 35674:return Lv;case 35675:return Iv;case 35676:return Uv;case 5124:case 35670:return Nv;case 35667:case 35671:return Fv;case 35668:case 35672:return Ov;case 35669:case 35673:return Bv;case 5125:return Vv;case 36294:return zv;case 36295:return Hv;case 36296:return Gv;case 35678:case 36198:case 36298:case 36306:case 35682:return kv;case 35679:case 36299:case 36307:return Wv;case 35680:case 36300:case 36308:case 36293:return Xv;case 36289:case 36303:case 36311:case 36292:return qv}}class $v{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=wv(t.type)}}class Kv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Yv(t.type)}}class jv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const xo=/(\w+)(\])?(\[|\.)?/g;function Hu(n,e){n.seq.push(e),n.map[e.id]=e}function Zv(n,e,t){const i=n.name,r=i.length;for(xo.lastIndex=0;;){const s=xo.exec(i),a=xo.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Hu(t,c===void 0?new $v(o,n,e):new Kv(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new jv(o),Hu(t,f)),t=f}}}class js{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Zv(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Gu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Jv=37297;let Qv=0;function eS(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const ku=new Xe;function tS(n){Ze._getMatrix(ku,Ze.workingColorSpace,n);const e=`mat3( ${ku.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(n)){case sa:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return ze("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Wu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+eS(n.getShaderSource(e),o)}else return s}function nS(n,e){const t=tS(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const iS={[hh]:"Linear",[dh]:"Reinhard",[ph]:"Cineon",[mh]:"ACESFilmic",[_h]:"AgX",[xh]:"Neutral",[gh]:"Custom"};function rS(n,e){const t=iS[e];return t===void 0?(ze("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Vs=new G;function sS(){Ze.getLuminanceCoefficients(Vs);const n=Vs.x.toFixed(4),e=Vs.y.toFixed(4),t=Vs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function aS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Br).join(`
`)}function oS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function lS(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Br(n){return n!==""}function Xu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const cS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Al(n){return n.replace(cS,fS)}const uS=new Map;function fS(n,e){let t=qe[e];if(t===void 0){const i=uS.get(e);if(i!==void 0)t=qe[i],ze('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Al(t)}const hS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yu(n){return n.replace(hS,dS)}function dS(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function $u(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const pS={[Xs]:"SHADOWMAP_TYPE_PCF",[Or]:"SHADOWMAP_TYPE_VSM"};function mS(n){return pS[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const gS={[ki]:"ENVMAP_TYPE_CUBE",[vr]:"ENVMAP_TYPE_CUBE",[va]:"ENVMAP_TYPE_CUBE_UV"};function _S(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":gS[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const xS={[vr]:"ENVMAP_MODE_REFRACTION"};function vS(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":xS[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const SS={[fh]:"ENVMAP_BLENDING_MULTIPLY",[og]:"ENVMAP_BLENDING_MIX",[lg]:"ENVMAP_BLENDING_ADD"};function MS(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":SS[n.combine]||"ENVMAP_BLENDING_NONE"}function ES(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function yS(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=mS(t),c=_S(t),u=vS(t),f=MS(t),h=ES(t),p=aS(t),x=oS(s),S=r.createProgram();let g,d,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Br).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Br).join(`
`),d.length>0&&(d+=`
`)):(g=[$u(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Br).join(`
`),d=[$u(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Cn?"#define TONE_MAPPING":"",t.toneMapping!==Cn?qe.tonemapping_pars_fragment:"",t.toneMapping!==Cn?rS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,nS("linearToOutputTexel",t.outputColorSpace),sS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Br).join(`
`)),a=Al(a),a=Xu(a,t),a=qu(a,t),o=Al(o),o=Xu(o,t),o=qu(o,t),a=Yu(a),o=Yu(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",t.glslVersion===au?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===au?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const A=b+g+a,y=b+d+o,C=Gu(r,r.VERTEX_SHADER,A),R=Gu(r,r.FRAGMENT_SHADER,y);r.attachShader(S,C),r.attachShader(S,R),t.index0AttributeName!==void 0?r.bindAttribLocation(S,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function T(L){if(n.debug.checkShaderErrors){const N=r.getProgramInfoLog(S)||"",B=r.getShaderInfoLog(C)||"",Z=r.getShaderInfoLog(R)||"",K=N.trim(),q=B.trim(),V=Z.trim();let J=!0,ge=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(J=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,S,C,R);else{const de=Wu(r,C,"vertex"),_e=Wu(r,R,"fragment");Qe("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+K+`
`+de+`
`+_e)}else K!==""?ze("WebGLProgram: Program Info Log:",K):(q===""||V==="")&&(ge=!1);ge&&(L.diagnostics={runnable:J,programLog:K,vertexShader:{log:q,prefix:g},fragmentShader:{log:V,prefix:d}})}r.deleteShader(C),r.deleteShader(R),U=new js(r,S),_=lS(r,S)}let U;this.getUniforms=function(){return U===void 0&&T(this),U};let _;this.getAttributes=function(){return _===void 0&&T(this),_};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(S,Jv)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Qv++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=C,this.fragmentShader=R,this}let bS=0;class TS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new AS(e),t.set(e,i)),i}}class AS{constructor(e){this.id=bS++,this.code=e,this.usedTimes=0}}function wS(n,e,t,i,r,s,a){const o=new Dh,l=new TS,c=new Set,u=[],f=new Map,h=r.logarithmicDepthBuffer;let p=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(_){return c.add(_),_===0?"uv":`uv${_}`}function g(_,M,L,N,B){const Z=N.fog,K=B.geometry,q=_.isMeshStandardMaterial?N.environment:null,V=(_.isMeshStandardMaterial?t:e).get(_.envMap||q),J=V&&V.mapping===va?V.image.height:null,ge=x[_.type];_.precision!==null&&(p=r.getMaxPrecision(_.precision),p!==_.precision&&ze("WebGLProgram.getParameters:",_.precision,"not supported, using",p,"instead."));const de=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,_e=de!==void 0?de.length:0;let Ne=0;K.morphAttributes.position!==void 0&&(Ne=1),K.morphAttributes.normal!==void 0&&(Ne=2),K.morphAttributes.color!==void 0&&(Ne=3);let He,dt,ot,te;if(ge){const it=Tn[ge];He=it.vertexShader,dt=it.fragmentShader}else He=_.vertexShader,dt=_.fragmentShader,l.update(_),ot=l.getVertexShaderID(_),te=l.getFragmentShaderID(_);const ae=n.getRenderTarget(),we=n.state.buffers.depth.getReversed(),Be=B.isInstancedMesh===!0,Re=B.isBatchedMesh===!0,je=!!_.map,P=!!_.matcap,I=!!V,k=!!_.aoMap,ee=!!_.lightMap,$=!!_.bumpMap,ne=!!_.normalMap,w=!!_.displacementMap,oe=!!_.emissiveMap,ie=!!_.metalnessMap,Q=!!_.roughnessMap,re=_.anisotropy>0,v=_.clearcoat>0,m=_.dispersion>0,D=_.iridescence>0,W=_.sheen>0,j=_.transmission>0,H=re&&!!_.anisotropyMap,Me=v&&!!_.clearcoatMap,ce=v&&!!_.clearcoatNormalMap,be=v&&!!_.clearcoatRoughnessMap,De=D&&!!_.iridescenceMap,le=D&&!!_.iridescenceThicknessMap,pe=W&&!!_.sheenColorMap,xe=W&&!!_.sheenRoughnessMap,Te=!!_.specularMap,he=!!_.specularColorMap,Ge=!!_.specularIntensityMap,F=j&&!!_.transmissionMap,ye=j&&!!_.thicknessMap,fe=!!_.gradientMap,Ae=!!_.alphaMap,ue=_.alphaTest>0,se=!!_.alphaHash,me=!!_.extensions;let Ve=Cn;_.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(Ve=n.toneMapping);const ut={shaderID:ge,shaderType:_.type,shaderName:_.name,vertexShader:He,fragmentShader:dt,defines:_.defines,customVertexShaderID:ot,customFragmentShaderID:te,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:p,batching:Re,batchingColor:Re&&B._colorsTexture!==null,instancing:Be,instancingColor:Be&&B.instanceColor!==null,instancingMorph:Be&&B.morphTexture!==null,outputColorSpace:ae===null?n.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Mr,alphaToCoverage:!!_.alphaToCoverage,map:je,matcap:P,envMap:I,envMapMode:I&&V.mapping,envMapCubeUVHeight:J,aoMap:k,lightMap:ee,bumpMap:$,normalMap:ne,displacementMap:w,emissiveMap:oe,normalMapObjectSpace:ne&&_.normalMapType===fg,normalMapTangentSpace:ne&&_.normalMapType===wh,metalnessMap:ie,roughnessMap:Q,anisotropy:re,anisotropyMap:H,clearcoat:v,clearcoatMap:Me,clearcoatNormalMap:ce,clearcoatRoughnessMap:be,dispersion:m,iridescence:D,iridescenceMap:De,iridescenceThicknessMap:le,sheen:W,sheenColorMap:pe,sheenRoughnessMap:xe,specularMap:Te,specularColorMap:he,specularIntensityMap:Ge,transmission:j,transmissionMap:F,thicknessMap:ye,gradientMap:fe,opaque:_.transparent===!1&&_.blending===gr&&_.alphaToCoverage===!1,alphaMap:Ae,alphaTest:ue,alphaHash:se,combine:_.combine,mapUv:je&&S(_.map.channel),aoMapUv:k&&S(_.aoMap.channel),lightMapUv:ee&&S(_.lightMap.channel),bumpMapUv:$&&S(_.bumpMap.channel),normalMapUv:ne&&S(_.normalMap.channel),displacementMapUv:w&&S(_.displacementMap.channel),emissiveMapUv:oe&&S(_.emissiveMap.channel),metalnessMapUv:ie&&S(_.metalnessMap.channel),roughnessMapUv:Q&&S(_.roughnessMap.channel),anisotropyMapUv:H&&S(_.anisotropyMap.channel),clearcoatMapUv:Me&&S(_.clearcoatMap.channel),clearcoatNormalMapUv:ce&&S(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&S(_.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&S(_.iridescenceMap.channel),iridescenceThicknessMapUv:le&&S(_.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&S(_.sheenColorMap.channel),sheenRoughnessMapUv:xe&&S(_.sheenRoughnessMap.channel),specularMapUv:Te&&S(_.specularMap.channel),specularColorMapUv:he&&S(_.specularColorMap.channel),specularIntensityMapUv:Ge&&S(_.specularIntensityMap.channel),transmissionMapUv:F&&S(_.transmissionMap.channel),thicknessMapUv:ye&&S(_.thicknessMap.channel),alphaMapUv:Ae&&S(_.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(ne||re),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!K.attributes.uv&&(je||Ae),fog:!!Z,useFog:_.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:_.flatShading===!0&&_.wireframe===!1,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:we,skinning:B.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:Ne,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ve,decodeVideoTexture:je&&_.map.isVideoTexture===!0&&Ze.getTransfer(_.map.colorSpace)===st,decodeVideoTextureEmissive:oe&&_.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(_.emissiveMap.colorSpace)===st,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===$n,flipSided:_.side===Xt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:me&&_.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(me&&_.extensions.multiDraw===!0||Re)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return ut.vertexUv1s=c.has(1),ut.vertexUv2s=c.has(2),ut.vertexUv3s=c.has(3),c.clear(),ut}function d(_){const M=[];if(_.shaderID?M.push(_.shaderID):(M.push(_.customVertexShaderID),M.push(_.customFragmentShaderID)),_.defines!==void 0)for(const L in _.defines)M.push(L),M.push(_.defines[L]);return _.isRawShaderMaterial===!1&&(b(M,_),A(M,_),M.push(n.outputColorSpace)),M.push(_.customProgramCacheKey),M.join()}function b(_,M){_.push(M.precision),_.push(M.outputColorSpace),_.push(M.envMapMode),_.push(M.envMapCubeUVHeight),_.push(M.mapUv),_.push(M.alphaMapUv),_.push(M.lightMapUv),_.push(M.aoMapUv),_.push(M.bumpMapUv),_.push(M.normalMapUv),_.push(M.displacementMapUv),_.push(M.emissiveMapUv),_.push(M.metalnessMapUv),_.push(M.roughnessMapUv),_.push(M.anisotropyMapUv),_.push(M.clearcoatMapUv),_.push(M.clearcoatNormalMapUv),_.push(M.clearcoatRoughnessMapUv),_.push(M.iridescenceMapUv),_.push(M.iridescenceThicknessMapUv),_.push(M.sheenColorMapUv),_.push(M.sheenRoughnessMapUv),_.push(M.specularMapUv),_.push(M.specularColorMapUv),_.push(M.specularIntensityMapUv),_.push(M.transmissionMapUv),_.push(M.thicknessMapUv),_.push(M.combine),_.push(M.fogExp2),_.push(M.sizeAttenuation),_.push(M.morphTargetsCount),_.push(M.morphAttributeCount),_.push(M.numDirLights),_.push(M.numPointLights),_.push(M.numSpotLights),_.push(M.numSpotLightMaps),_.push(M.numHemiLights),_.push(M.numRectAreaLights),_.push(M.numDirLightShadows),_.push(M.numPointLightShadows),_.push(M.numSpotLightShadows),_.push(M.numSpotLightShadowsWithMaps),_.push(M.numLightProbes),_.push(M.shadowMapType),_.push(M.toneMapping),_.push(M.numClippingPlanes),_.push(M.numClipIntersection),_.push(M.depthPacking)}function A(_,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),_.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),_.push(o.mask)}function y(_){const M=x[_.type];let L;if(M){const N=Tn[M];L=Vg.clone(N.uniforms)}else L=_.uniforms;return L}function C(_,M){let L=f.get(M);return L!==void 0?++L.usedTimes:(L=new yS(n,M,_,s),u.push(L),f.set(M,L)),L}function R(_){if(--_.usedTimes===0){const M=u.indexOf(_);u[M]=u[u.length-1],u.pop(),f.delete(_.cacheKey),_.destroy()}}function T(_){l.remove(_)}function U(){l.dispose()}return{getParameters:g,getProgramCacheKey:d,getUniforms:y,acquireProgram:C,releaseProgram:R,releaseShaderCache:T,programs:u,dispose:U}}function RS(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function CS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Ku(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ju(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f,h,p,x,S,g){let d=n[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:x,renderOrder:f.renderOrder,z:S,group:g},n[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=x,d.renderOrder=f.renderOrder,d.z=S,d.group=g),e++,d}function o(f,h,p,x,S,g){const d=a(f,h,p,x,S,g);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):t.push(d)}function l(f,h,p,x,S,g){const d=a(f,h,p,x,S,g);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function c(f,h){t.length>1&&t.sort(f||CS),i.length>1&&i.sort(h||Ku),r.length>1&&r.sort(h||Ku)}function u(){for(let f=e,h=n.length;f<h;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function PS(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new ju,n.set(i,[a])):r>=s.length?(a=new ju,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function DS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new et};break;case"SpotLight":t={position:new G,direction:new G,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new G,halfWidth:new G,halfHeight:new G};break}return n[e.id]=t,t}}}function LS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let IS=0;function US(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function NS(n){const e=new DS,t=LS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new G);const r=new G,s=new mt,a=new mt;function o(c){let u=0,f=0,h=0;for(let _=0;_<9;_++)i.probe[_].set(0,0,0);let p=0,x=0,S=0,g=0,d=0,b=0,A=0,y=0,C=0,R=0,T=0;c.sort(US);for(let _=0,M=c.length;_<M;_++){const L=c[_],N=L.color,B=L.intensity,Z=L.distance;let K=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Sr?K=L.shadow.map.texture:K=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=N.r*B,f+=N.g*B,h+=N.b*B;else if(L.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(L.sh.coefficients[q],B);T++}else if(L.isDirectionalLight){const q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const V=L.shadow,J=t.get(L);J.shadowIntensity=V.intensity,J.shadowBias=V.bias,J.shadowNormalBias=V.normalBias,J.shadowRadius=V.radius,J.shadowMapSize=V.mapSize,i.directionalShadow[p]=J,i.directionalShadowMap[p]=K,i.directionalShadowMatrix[p]=L.shadow.matrix,b++}i.directional[p]=q,p++}else if(L.isSpotLight){const q=e.get(L);q.position.setFromMatrixPosition(L.matrixWorld),q.color.copy(N).multiplyScalar(B),q.distance=Z,q.coneCos=Math.cos(L.angle),q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),q.decay=L.decay,i.spot[S]=q;const V=L.shadow;if(L.map&&(i.spotLightMap[C]=L.map,C++,V.updateMatrices(L),L.castShadow&&R++),i.spotLightMatrix[S]=V.matrix,L.castShadow){const J=t.get(L);J.shadowIntensity=V.intensity,J.shadowBias=V.bias,J.shadowNormalBias=V.normalBias,J.shadowRadius=V.radius,J.shadowMapSize=V.mapSize,i.spotShadow[S]=J,i.spotShadowMap[S]=K,y++}S++}else if(L.isRectAreaLight){const q=e.get(L);q.color.copy(N).multiplyScalar(B),q.halfWidth.set(L.width*.5,0,0),q.halfHeight.set(0,L.height*.5,0),i.rectArea[g]=q,g++}else if(L.isPointLight){const q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),q.distance=L.distance,q.decay=L.decay,L.castShadow){const V=L.shadow,J=t.get(L);J.shadowIntensity=V.intensity,J.shadowBias=V.bias,J.shadowNormalBias=V.normalBias,J.shadowRadius=V.radius,J.shadowMapSize=V.mapSize,J.shadowCameraNear=V.camera.near,J.shadowCameraFar=V.camera.far,i.pointShadow[x]=J,i.pointShadowMap[x]=K,i.pointShadowMatrix[x]=L.shadow.matrix,A++}i.point[x]=q,x++}else if(L.isHemisphereLight){const q=e.get(L);q.skyColor.copy(L.color).multiplyScalar(B),q.groundColor.copy(L.groundColor).multiplyScalar(B),i.hemi[d]=q,d++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Se.LTC_FLOAT_1,i.rectAreaLTC2=Se.LTC_FLOAT_2):(i.rectAreaLTC1=Se.LTC_HALF_1,i.rectAreaLTC2=Se.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const U=i.hash;(U.directionalLength!==p||U.pointLength!==x||U.spotLength!==S||U.rectAreaLength!==g||U.hemiLength!==d||U.numDirectionalShadows!==b||U.numPointShadows!==A||U.numSpotShadows!==y||U.numSpotMaps!==C||U.numLightProbes!==T)&&(i.directional.length=p,i.spot.length=S,i.rectArea.length=g,i.point.length=x,i.hemi.length=d,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=y+C-R,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=T,U.directionalLength=p,U.pointLength=x,U.spotLength=S,U.rectAreaLength=g,U.hemiLength=d,U.numDirectionalShadows=b,U.numPointShadows=A,U.numSpotShadows=y,U.numSpotMaps=C,U.numLightProbes=T,i.version=IS++)}function l(c,u){let f=0,h=0,p=0,x=0,S=0;const g=u.matrixWorldInverse;for(let d=0,b=c.length;d<b;d++){const A=c[d];if(A.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),f++}else if(A.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),p++}else if(A.isRectAreaLight){const y=i.rectArea[x];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(g),a.identity(),s.copy(A.matrixWorld),s.premultiply(g),a.extractRotation(s),y.halfWidth.set(A.width*.5,0,0),y.halfHeight.set(0,A.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),x++}else if(A.isPointLight){const y=i.point[h];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(g),h++}else if(A.isHemisphereLight){const y=i.hemi[S];y.direction.setFromMatrixPosition(A.matrixWorld),y.direction.transformDirection(g),S++}}}return{setup:o,setupView:l,state:i}}function Zu(n){const e=new NS(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function FS(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Zu(n),e.set(r,[o])):s>=a.length?(o=new Zu(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const OS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,BS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,VS=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],zS=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],Ju=new mt,Nr=new G,vo=new G;function HS(n,e,t){let i=new rc;const r=new Ke,s=new Ke,a=new xt,o=new Qg,l=new e_,c={},u=t.maxTextureSize,f={[Si]:Xt,[Xt]:Si,[$n]:$n},h=new Un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:OS,fragmentShader:BS}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const x=new ln;x.setAttribute("position",new gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new In(x,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xs;let d=this.type;this.render=function(R,T,U){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||R.length===0)return;R.type===Gm&&(ze("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),R.type=Xs);const _=n.getRenderTarget(),M=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),N=n.state;N.setBlending(jn),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const B=d!==this.type;B&&T.traverse(function(Z){Z.material&&(Array.isArray(Z.material)?Z.material.forEach(K=>K.needsUpdate=!0):Z.material.needsUpdate=!0)});for(let Z=0,K=R.length;Z<K;Z++){const q=R[Z],V=q.shadow;if(V===void 0){ze("WebGLShadowMap:",q,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const J=V.getFrameExtents();if(r.multiply(J),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/J.x),r.x=s.x*J.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/J.y),r.y=s.y*J.y,V.mapSize.y=s.y)),V.map===null||B===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Or){if(q.isPointLight){ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Pn(r.x,r.y,{format:Sr,type:ti,minFilter:Pt,magFilter:Pt,generateMipmaps:!1}),V.map.texture.name=q.name+".shadowMap",V.map.depthTexture=new is(r.x,r.y,An),V.map.depthTexture.name=q.name+".shadowMapDepth",V.map.depthTexture.format=ni,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Tt,V.map.depthTexture.magFilter=Tt}else{q.isPointLight?(V.map=new Vh(r.x),V.map.depthTexture=new jg(r.x,Dn)):(V.map=new Pn(r.x,r.y),V.map.depthTexture=new is(r.x,r.y,Dn)),V.map.depthTexture.name=q.name+".shadowMap",V.map.depthTexture.format=ni;const de=n.state.buffers.depth.getReversed();this.type===Xs?(V.map.depthTexture.compareFunction=de?nc:tc,V.map.depthTexture.minFilter=Pt,V.map.depthTexture.magFilter=Pt):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Tt,V.map.depthTexture.magFilter=Tt)}V.camera.updateProjectionMatrix()}const ge=V.map.isWebGLCubeRenderTarget?6:1;for(let de=0;de<ge;de++){if(V.map.isWebGLCubeRenderTarget)n.setRenderTarget(V.map,de),n.clear();else{de===0&&(n.setRenderTarget(V.map),n.clear());const _e=V.getViewport(de);a.set(s.x*_e.x,s.y*_e.y,s.x*_e.z,s.y*_e.w),N.viewport(a)}if(q.isPointLight){const _e=V.camera,Ne=V.matrix,He=q.distance||_e.far;He!==_e.far&&(_e.far=He,_e.updateProjectionMatrix()),Nr.setFromMatrixPosition(q.matrixWorld),_e.position.copy(Nr),vo.copy(_e.position),vo.add(VS[de]),_e.up.copy(zS[de]),_e.lookAt(vo),_e.updateMatrixWorld(),Ne.makeTranslation(-Nr.x,-Nr.y,-Nr.z),Ju.multiplyMatrices(_e.projectionMatrix,_e.matrixWorldInverse),V._frustum.setFromProjectionMatrix(Ju,_e.coordinateSystem,_e.reversedDepth)}else V.updateMatrices(q);i=V.getFrustum(),y(T,U,V.camera,q,this.type)}V.isPointLightShadow!==!0&&this.type===Or&&b(V,U),V.needsUpdate=!1}d=this.type,g.needsUpdate=!1,n.setRenderTarget(_,M,L)};function b(R,T){const U=e.update(S);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Pn(r.x,r.y,{format:Sr,type:ti})),h.uniforms.shadow_pass.value=R.map.depthTexture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(T,null,U,h,S,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(T,null,U,p,S,null)}function A(R,T,U,_){let M=null;const L=U.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(L!==void 0)M=L;else if(M=U.isPointLight===!0?l:o,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const N=M.uuid,B=T.uuid;let Z=c[N];Z===void 0&&(Z={},c[N]=Z);let K=Z[B];K===void 0&&(K=M.clone(),Z[B]=K,T.addEventListener("dispose",C)),M=K}if(M.visible=T.visible,M.wireframe=T.wireframe,_===Or?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:f[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,U.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const N=n.properties.get(M);N.light=U}return M}function y(R,T,U,_,M){if(R.visible===!1)return;if(R.layers.test(T.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===Or)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,R.matrixWorld);const B=e.update(R),Z=R.material;if(Array.isArray(Z)){const K=B.groups;for(let q=0,V=K.length;q<V;q++){const J=K[q],ge=Z[J.materialIndex];if(ge&&ge.visible){const de=A(R,ge,_,M);R.onBeforeShadow(n,R,T,U,B,de,J),n.renderBufferDirect(U,null,B,de,R,J),R.onAfterShadow(n,R,T,U,B,de,J)}}}else if(Z.visible){const K=A(R,Z,_,M);R.onBeforeShadow(n,R,T,U,B,K,null),n.renderBufferDirect(U,null,B,K,R,null),R.onAfterShadow(n,R,T,U,B,K,null)}}const N=R.children;for(let B=0,Z=N.length;B<Z;B++)y(N[B],T,U,_,M)}function C(R){R.target.removeEventListener("dispose",C);for(const U in c){const _=c[U],M=R.target.uuid;M in _&&(_[M].dispose(),delete _[M])}}}const GS={[Uo]:No,[Fo]:Vo,[Oo]:zo,[xr]:Bo,[No]:Uo,[Vo]:Fo,[zo]:Oo,[Bo]:xr};function kS(n,e){function t(){let F=!1;const ye=new xt;let fe=null;const Ae=new xt(0,0,0,0);return{setMask:function(ue){fe!==ue&&!F&&(n.colorMask(ue,ue,ue,ue),fe=ue)},setLocked:function(ue){F=ue},setClear:function(ue,se,me,Ve,ut){ut===!0&&(ue*=Ve,se*=Ve,me*=Ve),ye.set(ue,se,me,Ve),Ae.equals(ye)===!1&&(n.clearColor(ue,se,me,Ve),Ae.copy(ye))},reset:function(){F=!1,fe=null,Ae.set(-1,0,0,0)}}}function i(){let F=!1,ye=!1,fe=null,Ae=null,ue=null;return{setReversed:function(se){if(ye!==se){const me=e.get("EXT_clip_control");se?me.clipControlEXT(me.LOWER_LEFT_EXT,me.ZERO_TO_ONE_EXT):me.clipControlEXT(me.LOWER_LEFT_EXT,me.NEGATIVE_ONE_TO_ONE_EXT),ye=se;const Ve=ue;ue=null,this.setClear(Ve)}},getReversed:function(){return ye},setTest:function(se){se?ae(n.DEPTH_TEST):we(n.DEPTH_TEST)},setMask:function(se){fe!==se&&!F&&(n.depthMask(se),fe=se)},setFunc:function(se){if(ye&&(se=GS[se]),Ae!==se){switch(se){case Uo:n.depthFunc(n.NEVER);break;case No:n.depthFunc(n.ALWAYS);break;case Fo:n.depthFunc(n.LESS);break;case xr:n.depthFunc(n.LEQUAL);break;case Oo:n.depthFunc(n.EQUAL);break;case Bo:n.depthFunc(n.GEQUAL);break;case Vo:n.depthFunc(n.GREATER);break;case zo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ae=se}},setLocked:function(se){F=se},setClear:function(se){ue!==se&&(ye&&(se=1-se),n.clearDepth(se),ue=se)},reset:function(){F=!1,fe=null,Ae=null,ue=null,ye=!1}}}function r(){let F=!1,ye=null,fe=null,Ae=null,ue=null,se=null,me=null,Ve=null,ut=null;return{setTest:function(it){F||(it?ae(n.STENCIL_TEST):we(n.STENCIL_TEST))},setMask:function(it){ye!==it&&!F&&(n.stencilMask(it),ye=it)},setFunc:function(it,xn,Nn){(fe!==it||Ae!==xn||ue!==Nn)&&(n.stencilFunc(it,xn,Nn),fe=it,Ae=xn,ue=Nn)},setOp:function(it,xn,Nn){(se!==it||me!==xn||Ve!==Nn)&&(n.stencilOp(it,xn,Nn),se=it,me=xn,Ve=Nn)},setLocked:function(it){F=it},setClear:function(it){ut!==it&&(n.clearStencil(it),ut=it)},reset:function(){F=!1,ye=null,fe=null,Ae=null,ue=null,se=null,me=null,Ve=null,ut=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,p=[],x=null,S=!1,g=null,d=null,b=null,A=null,y=null,C=null,R=null,T=new et(0,0,0),U=0,_=!1,M=null,L=null,N=null,B=null,Z=null;const K=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,V=0;const J=n.getParameter(n.VERSION);J.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(J)[1]),q=V>=1):J.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),q=V>=2);let ge=null,de={};const _e=n.getParameter(n.SCISSOR_BOX),Ne=n.getParameter(n.VIEWPORT),He=new xt().fromArray(_e),dt=new xt().fromArray(Ne);function ot(F,ye,fe,Ae){const ue=new Uint8Array(4),se=n.createTexture();n.bindTexture(F,se),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let me=0;me<fe;me++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(ye,0,n.RGBA,1,1,Ae,0,n.RGBA,n.UNSIGNED_BYTE,ue):n.texImage2D(ye+me,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ue);return se}const te={};te[n.TEXTURE_2D]=ot(n.TEXTURE_2D,n.TEXTURE_2D,1),te[n.TEXTURE_CUBE_MAP]=ot(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[n.TEXTURE_2D_ARRAY]=ot(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),te[n.TEXTURE_3D]=ot(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ae(n.DEPTH_TEST),a.setFunc(xr),$(!1),ne(eu),ae(n.CULL_FACE),k(jn);function ae(F){u[F]!==!0&&(n.enable(F),u[F]=!0)}function we(F){u[F]!==!1&&(n.disable(F),u[F]=!1)}function Be(F,ye){return f[F]!==ye?(n.bindFramebuffer(F,ye),f[F]=ye,F===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=ye),F===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=ye),!0):!1}function Re(F,ye){let fe=p,Ae=!1;if(F){fe=h.get(ye),fe===void 0&&(fe=[],h.set(ye,fe));const ue=F.textures;if(fe.length!==ue.length||fe[0]!==n.COLOR_ATTACHMENT0){for(let se=0,me=ue.length;se<me;se++)fe[se]=n.COLOR_ATTACHMENT0+se;fe.length=ue.length,Ae=!0}}else fe[0]!==n.BACK&&(fe[0]=n.BACK,Ae=!0);Ae&&n.drawBuffers(fe)}function je(F){return x!==F?(n.useProgram(F),x=F,!0):!1}const P={[Bi]:n.FUNC_ADD,[Wm]:n.FUNC_SUBTRACT,[Xm]:n.FUNC_REVERSE_SUBTRACT};P[qm]=n.MIN,P[Ym]=n.MAX;const I={[$m]:n.ZERO,[Km]:n.ONE,[jm]:n.SRC_COLOR,[Lo]:n.SRC_ALPHA,[ng]:n.SRC_ALPHA_SATURATE,[eg]:n.DST_COLOR,[Jm]:n.DST_ALPHA,[Zm]:n.ONE_MINUS_SRC_COLOR,[Io]:n.ONE_MINUS_SRC_ALPHA,[tg]:n.ONE_MINUS_DST_COLOR,[Qm]:n.ONE_MINUS_DST_ALPHA,[ig]:n.CONSTANT_COLOR,[rg]:n.ONE_MINUS_CONSTANT_COLOR,[sg]:n.CONSTANT_ALPHA,[ag]:n.ONE_MINUS_CONSTANT_ALPHA};function k(F,ye,fe,Ae,ue,se,me,Ve,ut,it){if(F===jn){S===!0&&(we(n.BLEND),S=!1);return}if(S===!1&&(ae(n.BLEND),S=!0),F!==km){if(F!==g||it!==_){if((d!==Bi||y!==Bi)&&(n.blendEquation(n.FUNC_ADD),d=Bi,y=Bi),it)switch(F){case gr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case tu:n.blendFunc(n.ONE,n.ONE);break;case nu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case iu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Qe("WebGLState: Invalid blending: ",F);break}else switch(F){case gr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case tu:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case nu:Qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case iu:Qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qe("WebGLState: Invalid blending: ",F);break}b=null,A=null,C=null,R=null,T.set(0,0,0),U=0,g=F,_=it}return}ue=ue||ye,se=se||fe,me=me||Ae,(ye!==d||ue!==y)&&(n.blendEquationSeparate(P[ye],P[ue]),d=ye,y=ue),(fe!==b||Ae!==A||se!==C||me!==R)&&(n.blendFuncSeparate(I[fe],I[Ae],I[se],I[me]),b=fe,A=Ae,C=se,R=me),(Ve.equals(T)===!1||ut!==U)&&(n.blendColor(Ve.r,Ve.g,Ve.b,ut),T.copy(Ve),U=ut),g=F,_=!1}function ee(F,ye){F.side===$n?we(n.CULL_FACE):ae(n.CULL_FACE);let fe=F.side===Xt;ye&&(fe=!fe),$(fe),F.blending===gr&&F.transparent===!1?k(jn):k(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),s.setMask(F.colorWrite);const Ae=F.stencilWrite;o.setTest(Ae),Ae&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),oe(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ae(n.SAMPLE_ALPHA_TO_COVERAGE):we(n.SAMPLE_ALPHA_TO_COVERAGE)}function $(F){M!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),M=F)}function ne(F){F!==zm?(ae(n.CULL_FACE),F!==L&&(F===eu?n.cullFace(n.BACK):F===Hm?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):we(n.CULL_FACE),L=F}function w(F){F!==N&&(q&&n.lineWidth(F),N=F)}function oe(F,ye,fe){F?(ae(n.POLYGON_OFFSET_FILL),(B!==ye||Z!==fe)&&(n.polygonOffset(ye,fe),B=ye,Z=fe)):we(n.POLYGON_OFFSET_FILL)}function ie(F){F?ae(n.SCISSOR_TEST):we(n.SCISSOR_TEST)}function Q(F){F===void 0&&(F=n.TEXTURE0+K-1),ge!==F&&(n.activeTexture(F),ge=F)}function re(F,ye,fe){fe===void 0&&(ge===null?fe=n.TEXTURE0+K-1:fe=ge);let Ae=de[fe];Ae===void 0&&(Ae={type:void 0,texture:void 0},de[fe]=Ae),(Ae.type!==F||Ae.texture!==ye)&&(ge!==fe&&(n.activeTexture(fe),ge=fe),n.bindTexture(F,ye||te[F]),Ae.type=F,Ae.texture=ye)}function v(){const F=de[ge];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function m(){try{n.compressedTexImage2D(...arguments)}catch(F){Qe("WebGLState:",F)}}function D(){try{n.compressedTexImage3D(...arguments)}catch(F){Qe("WebGLState:",F)}}function W(){try{n.texSubImage2D(...arguments)}catch(F){Qe("WebGLState:",F)}}function j(){try{n.texSubImage3D(...arguments)}catch(F){Qe("WebGLState:",F)}}function H(){try{n.compressedTexSubImage2D(...arguments)}catch(F){Qe("WebGLState:",F)}}function Me(){try{n.compressedTexSubImage3D(...arguments)}catch(F){Qe("WebGLState:",F)}}function ce(){try{n.texStorage2D(...arguments)}catch(F){Qe("WebGLState:",F)}}function be(){try{n.texStorage3D(...arguments)}catch(F){Qe("WebGLState:",F)}}function De(){try{n.texImage2D(...arguments)}catch(F){Qe("WebGLState:",F)}}function le(){try{n.texImage3D(...arguments)}catch(F){Qe("WebGLState:",F)}}function pe(F){He.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),He.copy(F))}function xe(F){dt.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),dt.copy(F))}function Te(F,ye){let fe=c.get(ye);fe===void 0&&(fe=new WeakMap,c.set(ye,fe));let Ae=fe.get(F);Ae===void 0&&(Ae=n.getUniformBlockIndex(ye,F.name),fe.set(F,Ae))}function he(F,ye){const Ae=c.get(ye).get(F);l.get(ye)!==Ae&&(n.uniformBlockBinding(ye,Ae,F.__bindingPointIndex),l.set(ye,Ae))}function Ge(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ge=null,de={},f={},h=new WeakMap,p=[],x=null,S=!1,g=null,d=null,b=null,A=null,y=null,C=null,R=null,T=new et(0,0,0),U=0,_=!1,M=null,L=null,N=null,B=null,Z=null,He.set(0,0,n.canvas.width,n.canvas.height),dt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ae,disable:we,bindFramebuffer:Be,drawBuffers:Re,useProgram:je,setBlending:k,setMaterial:ee,setFlipSided:$,setCullFace:ne,setLineWidth:w,setPolygonOffset:oe,setScissorTest:ie,activeTexture:Q,bindTexture:re,unbindTexture:v,compressedTexImage2D:m,compressedTexImage3D:D,texImage2D:De,texImage3D:le,updateUBOMapping:Te,uniformBlockBinding:he,texStorage2D:ce,texStorage3D:be,texSubImage2D:W,texSubImage3D:j,compressedTexSubImage2D:H,compressedTexSubImage3D:Me,scissor:pe,viewport:xe,reset:Ge}}function WS(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ke,u=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(v,m){return p?new OffscreenCanvas(v,m):oa("canvas")}function S(v,m,D){let W=1;const j=re(v);if((j.width>D||j.height>D)&&(W=D/Math.max(j.width,j.height)),W<1)if(typeof HTMLImageElement<"u"&&v instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&v instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&v instanceof ImageBitmap||typeof VideoFrame<"u"&&v instanceof VideoFrame){const H=Math.floor(W*j.width),Me=Math.floor(W*j.height);f===void 0&&(f=x(H,Me));const ce=m?x(H,Me):f;return ce.width=H,ce.height=Me,ce.getContext("2d").drawImage(v,0,0,H,Me),ze("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+H+"x"+Me+")."),ce}else return"data"in v&&ze("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),v;return v}function g(v){return v.generateMipmaps}function d(v){n.generateMipmap(v)}function b(v){return v.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:v.isWebGL3DRenderTarget?n.TEXTURE_3D:v.isWebGLArrayRenderTarget||v.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function A(v,m,D,W,j=!1){if(v!==null){if(n[v]!==void 0)return n[v];ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+v+"'")}let H=m;if(m===n.RED&&(D===n.FLOAT&&(H=n.R32F),D===n.HALF_FLOAT&&(H=n.R16F),D===n.UNSIGNED_BYTE&&(H=n.R8)),m===n.RED_INTEGER&&(D===n.UNSIGNED_BYTE&&(H=n.R8UI),D===n.UNSIGNED_SHORT&&(H=n.R16UI),D===n.UNSIGNED_INT&&(H=n.R32UI),D===n.BYTE&&(H=n.R8I),D===n.SHORT&&(H=n.R16I),D===n.INT&&(H=n.R32I)),m===n.RG&&(D===n.FLOAT&&(H=n.RG32F),D===n.HALF_FLOAT&&(H=n.RG16F),D===n.UNSIGNED_BYTE&&(H=n.RG8)),m===n.RG_INTEGER&&(D===n.UNSIGNED_BYTE&&(H=n.RG8UI),D===n.UNSIGNED_SHORT&&(H=n.RG16UI),D===n.UNSIGNED_INT&&(H=n.RG32UI),D===n.BYTE&&(H=n.RG8I),D===n.SHORT&&(H=n.RG16I),D===n.INT&&(H=n.RG32I)),m===n.RGB_INTEGER&&(D===n.UNSIGNED_BYTE&&(H=n.RGB8UI),D===n.UNSIGNED_SHORT&&(H=n.RGB16UI),D===n.UNSIGNED_INT&&(H=n.RGB32UI),D===n.BYTE&&(H=n.RGB8I),D===n.SHORT&&(H=n.RGB16I),D===n.INT&&(H=n.RGB32I)),m===n.RGBA_INTEGER&&(D===n.UNSIGNED_BYTE&&(H=n.RGBA8UI),D===n.UNSIGNED_SHORT&&(H=n.RGBA16UI),D===n.UNSIGNED_INT&&(H=n.RGBA32UI),D===n.BYTE&&(H=n.RGBA8I),D===n.SHORT&&(H=n.RGBA16I),D===n.INT&&(H=n.RGBA32I)),m===n.RGB&&(D===n.UNSIGNED_INT_5_9_9_9_REV&&(H=n.RGB9_E5),D===n.UNSIGNED_INT_10F_11F_11F_REV&&(H=n.R11F_G11F_B10F)),m===n.RGBA){const Me=j?sa:Ze.getTransfer(W);D===n.FLOAT&&(H=n.RGBA32F),D===n.HALF_FLOAT&&(H=n.RGBA16F),D===n.UNSIGNED_BYTE&&(H=Me===st?n.SRGB8_ALPHA8:n.RGBA8),D===n.UNSIGNED_SHORT_4_4_4_4&&(H=n.RGBA4),D===n.UNSIGNED_SHORT_5_5_5_1&&(H=n.RGB5_A1)}return(H===n.R16F||H===n.R32F||H===n.RG16F||H===n.RG32F||H===n.RGBA16F||H===n.RGBA32F)&&e.get("EXT_color_buffer_float"),H}function y(v,m){let D;return v?m===null||m===Dn||m===ts?D=n.DEPTH24_STENCIL8:m===An?D=n.DEPTH32F_STENCIL8:m===es&&(D=n.DEPTH24_STENCIL8,ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):m===null||m===Dn||m===ts?D=n.DEPTH_COMPONENT24:m===An?D=n.DEPTH_COMPONENT32F:m===es&&(D=n.DEPTH_COMPONENT16),D}function C(v,m){return g(v)===!0||v.isFramebufferTexture&&v.minFilter!==Tt&&v.minFilter!==Pt?Math.log2(Math.max(m.width,m.height))+1:v.mipmaps!==void 0&&v.mipmaps.length>0?v.mipmaps.length:v.isCompressedTexture&&Array.isArray(v.image)?m.mipmaps.length:1}function R(v){const m=v.target;m.removeEventListener("dispose",R),U(m),m.isVideoTexture&&u.delete(m)}function T(v){const m=v.target;m.removeEventListener("dispose",T),M(m)}function U(v){const m=i.get(v);if(m.__webglInit===void 0)return;const D=v.source,W=h.get(D);if(W){const j=W[m.__cacheKey];j.usedTimes--,j.usedTimes===0&&_(v),Object.keys(W).length===0&&h.delete(D)}i.remove(v)}function _(v){const m=i.get(v);n.deleteTexture(m.__webglTexture);const D=v.source,W=h.get(D);delete W[m.__cacheKey],a.memory.textures--}function M(v){const m=i.get(v);if(v.depthTexture&&(v.depthTexture.dispose(),i.remove(v.depthTexture)),v.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(m.__webglFramebuffer[W]))for(let j=0;j<m.__webglFramebuffer[W].length;j++)n.deleteFramebuffer(m.__webglFramebuffer[W][j]);else n.deleteFramebuffer(m.__webglFramebuffer[W]);m.__webglDepthbuffer&&n.deleteRenderbuffer(m.__webglDepthbuffer[W])}else{if(Array.isArray(m.__webglFramebuffer))for(let W=0;W<m.__webglFramebuffer.length;W++)n.deleteFramebuffer(m.__webglFramebuffer[W]);else n.deleteFramebuffer(m.__webglFramebuffer);if(m.__webglDepthbuffer&&n.deleteRenderbuffer(m.__webglDepthbuffer),m.__webglMultisampledFramebuffer&&n.deleteFramebuffer(m.__webglMultisampledFramebuffer),m.__webglColorRenderbuffer)for(let W=0;W<m.__webglColorRenderbuffer.length;W++)m.__webglColorRenderbuffer[W]&&n.deleteRenderbuffer(m.__webglColorRenderbuffer[W]);m.__webglDepthRenderbuffer&&n.deleteRenderbuffer(m.__webglDepthRenderbuffer)}const D=v.textures;for(let W=0,j=D.length;W<j;W++){const H=i.get(D[W]);H.__webglTexture&&(n.deleteTexture(H.__webglTexture),a.memory.textures--),i.remove(D[W])}i.remove(v)}let L=0;function N(){L=0}function B(){const v=L;return v>=r.maxTextures&&ze("WebGLTextures: Trying to use "+v+" texture units while this GPU supports only "+r.maxTextures),L+=1,v}function Z(v){const m=[];return m.push(v.wrapS),m.push(v.wrapT),m.push(v.wrapR||0),m.push(v.magFilter),m.push(v.minFilter),m.push(v.anisotropy),m.push(v.internalFormat),m.push(v.format),m.push(v.type),m.push(v.generateMipmaps),m.push(v.premultiplyAlpha),m.push(v.flipY),m.push(v.unpackAlignment),m.push(v.colorSpace),m.join()}function K(v,m){const D=i.get(v);if(v.isVideoTexture&&ie(v),v.isRenderTargetTexture===!1&&v.isExternalTexture!==!0&&v.version>0&&D.__version!==v.version){const W=v.image;if(W===null)ze("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)ze("WebGLRenderer: Texture marked for update but image is incomplete");else{te(D,v,m);return}}else v.isExternalTexture&&(D.__webglTexture=v.sourceTexture?v.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,D.__webglTexture,n.TEXTURE0+m)}function q(v,m){const D=i.get(v);if(v.isRenderTargetTexture===!1&&v.version>0&&D.__version!==v.version){te(D,v,m);return}else v.isExternalTexture&&(D.__webglTexture=v.sourceTexture?v.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,D.__webglTexture,n.TEXTURE0+m)}function V(v,m){const D=i.get(v);if(v.isRenderTargetTexture===!1&&v.version>0&&D.__version!==v.version){te(D,v,m);return}t.bindTexture(n.TEXTURE_3D,D.__webglTexture,n.TEXTURE0+m)}function J(v,m){const D=i.get(v);if(v.isCubeDepthTexture!==!0&&v.version>0&&D.__version!==v.version){ae(D,v,m);return}t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+m)}const ge={[ko]:n.REPEAT,[Kn]:n.CLAMP_TO_EDGE,[Wo]:n.MIRRORED_REPEAT},de={[Tt]:n.NEAREST,[cg]:n.NEAREST_MIPMAP_NEAREST,[_s]:n.NEAREST_MIPMAP_LINEAR,[Pt]:n.LINEAR,[Ha]:n.LINEAR_MIPMAP_NEAREST,[zi]:n.LINEAR_MIPMAP_LINEAR},_e={[hg]:n.NEVER,[_g]:n.ALWAYS,[dg]:n.LESS,[tc]:n.LEQUAL,[pg]:n.EQUAL,[nc]:n.GEQUAL,[mg]:n.GREATER,[gg]:n.NOTEQUAL};function Ne(v,m){if(m.type===An&&e.has("OES_texture_float_linear")===!1&&(m.magFilter===Pt||m.magFilter===Ha||m.magFilter===_s||m.magFilter===zi||m.minFilter===Pt||m.minFilter===Ha||m.minFilter===_s||m.minFilter===zi)&&ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(v,n.TEXTURE_WRAP_S,ge[m.wrapS]),n.texParameteri(v,n.TEXTURE_WRAP_T,ge[m.wrapT]),(v===n.TEXTURE_3D||v===n.TEXTURE_2D_ARRAY)&&n.texParameteri(v,n.TEXTURE_WRAP_R,ge[m.wrapR]),n.texParameteri(v,n.TEXTURE_MAG_FILTER,de[m.magFilter]),n.texParameteri(v,n.TEXTURE_MIN_FILTER,de[m.minFilter]),m.compareFunction&&(n.texParameteri(v,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(v,n.TEXTURE_COMPARE_FUNC,_e[m.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(m.magFilter===Tt||m.minFilter!==_s&&m.minFilter!==zi||m.type===An&&e.has("OES_texture_float_linear")===!1)return;if(m.anisotropy>1||i.get(m).__currentAnisotropy){const D=e.get("EXT_texture_filter_anisotropic");n.texParameterf(v,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(m.anisotropy,r.getMaxAnisotropy())),i.get(m).__currentAnisotropy=m.anisotropy}}}function He(v,m){let D=!1;v.__webglInit===void 0&&(v.__webglInit=!0,m.addEventListener("dispose",R));const W=m.source;let j=h.get(W);j===void 0&&(j={},h.set(W,j));const H=Z(m);if(H!==v.__cacheKey){j[H]===void 0&&(j[H]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,D=!0),j[H].usedTimes++;const Me=j[v.__cacheKey];Me!==void 0&&(j[v.__cacheKey].usedTimes--,Me.usedTimes===0&&_(m)),v.__cacheKey=H,v.__webglTexture=j[H].texture}return D}function dt(v,m,D){return Math.floor(Math.floor(v/D)/m)}function ot(v,m,D,W){const H=v.updateRanges;if(H.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,m.width,m.height,D,W,m.data);else{H.sort((le,pe)=>le.start-pe.start);let Me=0;for(let le=1;le<H.length;le++){const pe=H[Me],xe=H[le],Te=pe.start+pe.count,he=dt(xe.start,m.width,4),Ge=dt(pe.start,m.width,4);xe.start<=Te+1&&he===Ge&&dt(xe.start+xe.count-1,m.width,4)===he?pe.count=Math.max(pe.count,xe.start+xe.count-pe.start):(++Me,H[Me]=xe)}H.length=Me+1;const ce=n.getParameter(n.UNPACK_ROW_LENGTH),be=n.getParameter(n.UNPACK_SKIP_PIXELS),De=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,m.width);for(let le=0,pe=H.length;le<pe;le++){const xe=H[le],Te=Math.floor(xe.start/4),he=Math.ceil(xe.count/4),Ge=Te%m.width,F=Math.floor(Te/m.width),ye=he,fe=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ge),n.pixelStorei(n.UNPACK_SKIP_ROWS,F),t.texSubImage2D(n.TEXTURE_2D,0,Ge,F,ye,fe,D,W,m.data)}v.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ce),n.pixelStorei(n.UNPACK_SKIP_PIXELS,be),n.pixelStorei(n.UNPACK_SKIP_ROWS,De)}}function te(v,m,D){let W=n.TEXTURE_2D;(m.isDataArrayTexture||m.isCompressedArrayTexture)&&(W=n.TEXTURE_2D_ARRAY),m.isData3DTexture&&(W=n.TEXTURE_3D);const j=He(v,m),H=m.source;t.bindTexture(W,v.__webglTexture,n.TEXTURE0+D);const Me=i.get(H);if(H.version!==Me.__version||j===!0){t.activeTexture(n.TEXTURE0+D);const ce=Ze.getPrimaries(Ze.workingColorSpace),be=m.colorSpace===pi?null:Ze.getPrimaries(m.colorSpace),De=m.colorSpace===pi||ce===be?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,m.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,m.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let le=S(m.image,!1,r.maxTextureSize);le=Q(m,le);const pe=s.convert(m.format,m.colorSpace),xe=s.convert(m.type);let Te=A(m.internalFormat,pe,xe,m.colorSpace,m.isVideoTexture);Ne(W,m);let he;const Ge=m.mipmaps,F=m.isVideoTexture!==!0,ye=Me.__version===void 0||j===!0,fe=H.dataReady,Ae=C(m,le);if(m.isDepthTexture)Te=y(m.format===Hi,m.type),ye&&(F?t.texStorage2D(n.TEXTURE_2D,1,Te,le.width,le.height):t.texImage2D(n.TEXTURE_2D,0,Te,le.width,le.height,0,pe,xe,null));else if(m.isDataTexture)if(Ge.length>0){F&&ye&&t.texStorage2D(n.TEXTURE_2D,Ae,Te,Ge[0].width,Ge[0].height);for(let ue=0,se=Ge.length;ue<se;ue++)he=Ge[ue],F?fe&&t.texSubImage2D(n.TEXTURE_2D,ue,0,0,he.width,he.height,pe,xe,he.data):t.texImage2D(n.TEXTURE_2D,ue,Te,he.width,he.height,0,pe,xe,he.data);m.generateMipmaps=!1}else F?(ye&&t.texStorage2D(n.TEXTURE_2D,Ae,Te,le.width,le.height),fe&&ot(m,le,pe,xe)):t.texImage2D(n.TEXTURE_2D,0,Te,le.width,le.height,0,pe,xe,le.data);else if(m.isCompressedTexture)if(m.isCompressedArrayTexture){F&&ye&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ae,Te,Ge[0].width,Ge[0].height,le.depth);for(let ue=0,se=Ge.length;ue<se;ue++)if(he=Ge[ue],m.format!==dn)if(pe!==null)if(F){if(fe)if(m.layerUpdates.size>0){const me=Cu(he.width,he.height,m.format,m.type);for(const Ve of m.layerUpdates){const ut=he.data.subarray(Ve*me/he.data.BYTES_PER_ELEMENT,(Ve+1)*me/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ue,0,0,Ve,he.width,he.height,1,pe,ut)}m.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ue,0,0,0,he.width,he.height,le.depth,pe,he.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ue,Te,he.width,he.height,le.depth,0,he.data,0,0);else ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?fe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ue,0,0,0,he.width,he.height,le.depth,pe,xe,he.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ue,Te,he.width,he.height,le.depth,0,pe,xe,he.data)}else{F&&ye&&t.texStorage2D(n.TEXTURE_2D,Ae,Te,Ge[0].width,Ge[0].height);for(let ue=0,se=Ge.length;ue<se;ue++)he=Ge[ue],m.format!==dn?pe!==null?F?fe&&t.compressedTexSubImage2D(n.TEXTURE_2D,ue,0,0,he.width,he.height,pe,he.data):t.compressedTexImage2D(n.TEXTURE_2D,ue,Te,he.width,he.height,0,he.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?fe&&t.texSubImage2D(n.TEXTURE_2D,ue,0,0,he.width,he.height,pe,xe,he.data):t.texImage2D(n.TEXTURE_2D,ue,Te,he.width,he.height,0,pe,xe,he.data)}else if(m.isDataArrayTexture)if(F){if(ye&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ae,Te,le.width,le.height,le.depth),fe)if(m.layerUpdates.size>0){const ue=Cu(le.width,le.height,m.format,m.type);for(const se of m.layerUpdates){const me=le.data.subarray(se*ue/le.data.BYTES_PER_ELEMENT,(se+1)*ue/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,se,le.width,le.height,1,pe,xe,me)}m.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,pe,xe,le.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Te,le.width,le.height,le.depth,0,pe,xe,le.data);else if(m.isData3DTexture)F?(ye&&t.texStorage3D(n.TEXTURE_3D,Ae,Te,le.width,le.height,le.depth),fe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,pe,xe,le.data)):t.texImage3D(n.TEXTURE_3D,0,Te,le.width,le.height,le.depth,0,pe,xe,le.data);else if(m.isFramebufferTexture){if(ye)if(F)t.texStorage2D(n.TEXTURE_2D,Ae,Te,le.width,le.height);else{let ue=le.width,se=le.height;for(let me=0;me<Ae;me++)t.texImage2D(n.TEXTURE_2D,me,Te,ue,se,0,pe,xe,null),ue>>=1,se>>=1}}else if(Ge.length>0){if(F&&ye){const ue=re(Ge[0]);t.texStorage2D(n.TEXTURE_2D,Ae,Te,ue.width,ue.height)}for(let ue=0,se=Ge.length;ue<se;ue++)he=Ge[ue],F?fe&&t.texSubImage2D(n.TEXTURE_2D,ue,0,0,pe,xe,he):t.texImage2D(n.TEXTURE_2D,ue,Te,pe,xe,he);m.generateMipmaps=!1}else if(F){if(ye){const ue=re(le);t.texStorage2D(n.TEXTURE_2D,Ae,Te,ue.width,ue.height)}fe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,pe,xe,le)}else t.texImage2D(n.TEXTURE_2D,0,Te,pe,xe,le);g(m)&&d(W),Me.__version=H.version,m.onUpdate&&m.onUpdate(m)}v.__version=m.version}function ae(v,m,D){if(m.image.length!==6)return;const W=He(v,m),j=m.source;t.bindTexture(n.TEXTURE_CUBE_MAP,v.__webglTexture,n.TEXTURE0+D);const H=i.get(j);if(j.version!==H.__version||W===!0){t.activeTexture(n.TEXTURE0+D);const Me=Ze.getPrimaries(Ze.workingColorSpace),ce=m.colorSpace===pi?null:Ze.getPrimaries(m.colorSpace),be=m.colorSpace===pi||Me===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,m.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,m.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const De=m.isCompressedTexture||m.image[0].isCompressedTexture,le=m.image[0]&&m.image[0].isDataTexture,pe=[];for(let se=0;se<6;se++)!De&&!le?pe[se]=S(m.image[se],!0,r.maxCubemapSize):pe[se]=le?m.image[se].image:m.image[se],pe[se]=Q(m,pe[se]);const xe=pe[0],Te=s.convert(m.format,m.colorSpace),he=s.convert(m.type),Ge=A(m.internalFormat,Te,he,m.colorSpace),F=m.isVideoTexture!==!0,ye=H.__version===void 0||W===!0,fe=j.dataReady;let Ae=C(m,xe);Ne(n.TEXTURE_CUBE_MAP,m);let ue;if(De){F&&ye&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ae,Ge,xe.width,xe.height);for(let se=0;se<6;se++){ue=pe[se].mipmaps;for(let me=0;me<ue.length;me++){const Ve=ue[me];m.format!==dn?Te!==null?F?fe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,me,0,0,Ve.width,Ve.height,Te,Ve.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,me,Ge,Ve.width,Ve.height,0,Ve.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,me,0,0,Ve.width,Ve.height,Te,he,Ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,me,Ge,Ve.width,Ve.height,0,Te,he,Ve.data)}}}else{if(ue=m.mipmaps,F&&ye){ue.length>0&&Ae++;const se=re(pe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ae,Ge,se.width,se.height)}for(let se=0;se<6;se++)if(le){F?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,pe[se].width,pe[se].height,Te,he,pe[se].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Ge,pe[se].width,pe[se].height,0,Te,he,pe[se].data);for(let me=0;me<ue.length;me++){const ut=ue[me].image[se].image;F?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,me+1,0,0,ut.width,ut.height,Te,he,ut.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,me+1,Ge,ut.width,ut.height,0,Te,he,ut.data)}}else{F?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Te,he,pe[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Ge,Te,he,pe[se]);for(let me=0;me<ue.length;me++){const Ve=ue[me];F?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,me+1,0,0,Te,he,Ve.image[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,me+1,Ge,Te,he,Ve.image[se])}}}g(m)&&d(n.TEXTURE_CUBE_MAP),H.__version=j.version,m.onUpdate&&m.onUpdate(m)}v.__version=m.version}function we(v,m,D,W,j,H){const Me=s.convert(D.format,D.colorSpace),ce=s.convert(D.type),be=A(D.internalFormat,Me,ce,D.colorSpace),De=i.get(m),le=i.get(D);if(le.__renderTarget=m,!De.__hasExternalTextures){const pe=Math.max(1,m.width>>H),xe=Math.max(1,m.height>>H);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?t.texImage3D(j,H,be,pe,xe,m.depth,0,Me,ce,null):t.texImage2D(j,H,be,pe,xe,0,Me,ce,null)}t.bindFramebuffer(n.FRAMEBUFFER,v),oe(m)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,j,le.__webglTexture,0,w(m)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,W,j,le.__webglTexture,H),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Be(v,m,D){if(n.bindRenderbuffer(n.RENDERBUFFER,v),m.depthBuffer){const W=m.depthTexture,j=W&&W.isDepthTexture?W.type:null,H=y(m.stencilBuffer,j),Me=m.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;oe(m)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,w(m),H,m.width,m.height):D?n.renderbufferStorageMultisample(n.RENDERBUFFER,w(m),H,m.width,m.height):n.renderbufferStorage(n.RENDERBUFFER,H,m.width,m.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Me,n.RENDERBUFFER,v)}else{const W=m.textures;for(let j=0;j<W.length;j++){const H=W[j],Me=s.convert(H.format,H.colorSpace),ce=s.convert(H.type),be=A(H.internalFormat,Me,ce,H.colorSpace);oe(m)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,w(m),be,m.width,m.height):D?n.renderbufferStorageMultisample(n.RENDERBUFFER,w(m),be,m.width,m.height):n.renderbufferStorage(n.RENDERBUFFER,be,m.width,m.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Re(v,m,D){const W=m.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,v),!(m.depthTexture&&m.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=i.get(m.depthTexture);if(j.__renderTarget=m,(!j.__webglTexture||m.depthTexture.image.width!==m.width||m.depthTexture.image.height!==m.height)&&(m.depthTexture.image.width=m.width,m.depthTexture.image.height=m.height,m.depthTexture.needsUpdate=!0),W){if(j.__webglInit===void 0&&(j.__webglInit=!0,m.depthTexture.addEventListener("dispose",R)),j.__webglTexture===void 0){j.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),Ne(n.TEXTURE_CUBE_MAP,m.depthTexture);const De=s.convert(m.depthTexture.format),le=s.convert(m.depthTexture.type);let pe;m.depthTexture.format===ni?pe=n.DEPTH_COMPONENT24:m.depthTexture.format===Hi&&(pe=n.DEPTH24_STENCIL8);for(let xe=0;xe<6;xe++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,pe,m.width,m.height,0,De,le,null)}}else K(m.depthTexture,0);const H=j.__webglTexture,Me=w(m),ce=W?n.TEXTURE_CUBE_MAP_POSITIVE_X+D:n.TEXTURE_2D,be=m.depthTexture.format===Hi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(m.depthTexture.format===ni)oe(m)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,be,ce,H,0,Me):n.framebufferTexture2D(n.FRAMEBUFFER,be,ce,H,0);else if(m.depthTexture.format===Hi)oe(m)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,be,ce,H,0,Me):n.framebufferTexture2D(n.FRAMEBUFFER,be,ce,H,0);else throw new Error("Unknown depthTexture format")}function je(v){const m=i.get(v),D=v.isWebGLCubeRenderTarget===!0;if(m.__boundDepthTexture!==v.depthTexture){const W=v.depthTexture;if(m.__depthDisposeCallback&&m.__depthDisposeCallback(),W){const j=()=>{delete m.__boundDepthTexture,delete m.__depthDisposeCallback,W.removeEventListener("dispose",j)};W.addEventListener("dispose",j),m.__depthDisposeCallback=j}m.__boundDepthTexture=W}if(v.depthTexture&&!m.__autoAllocateDepthBuffer)if(D)for(let W=0;W<6;W++)Re(m.__webglFramebuffer[W],v,W);else{const W=v.texture.mipmaps;W&&W.length>0?Re(m.__webglFramebuffer[0],v,0):Re(m.__webglFramebuffer,v,0)}else if(D){m.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(n.FRAMEBUFFER,m.__webglFramebuffer[W]),m.__webglDepthbuffer[W]===void 0)m.__webglDepthbuffer[W]=n.createRenderbuffer(),Be(m.__webglDepthbuffer[W],v,!1);else{const j=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,H=m.__webglDepthbuffer[W];n.bindRenderbuffer(n.RENDERBUFFER,H),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,H)}}else{const W=v.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(n.FRAMEBUFFER,m.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,m.__webglFramebuffer),m.__webglDepthbuffer===void 0)m.__webglDepthbuffer=n.createRenderbuffer(),Be(m.__webglDepthbuffer,v,!1);else{const j=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,H=m.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,H),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,H)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function P(v,m,D){const W=i.get(v);m!==void 0&&we(W.__webglFramebuffer,v,v.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),D!==void 0&&je(v)}function I(v){const m=v.texture,D=i.get(v),W=i.get(m);v.addEventListener("dispose",T);const j=v.textures,H=v.isWebGLCubeRenderTarget===!0,Me=j.length>1;if(Me||(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=m.version,a.memory.textures++),H){D.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(m.mipmaps&&m.mipmaps.length>0){D.__webglFramebuffer[ce]=[];for(let be=0;be<m.mipmaps.length;be++)D.__webglFramebuffer[ce][be]=n.createFramebuffer()}else D.__webglFramebuffer[ce]=n.createFramebuffer()}else{if(m.mipmaps&&m.mipmaps.length>0){D.__webglFramebuffer=[];for(let ce=0;ce<m.mipmaps.length;ce++)D.__webglFramebuffer[ce]=n.createFramebuffer()}else D.__webglFramebuffer=n.createFramebuffer();if(Me)for(let ce=0,be=j.length;ce<be;ce++){const De=i.get(j[ce]);De.__webglTexture===void 0&&(De.__webglTexture=n.createTexture(),a.memory.textures++)}if(v.samples>0&&oe(v)===!1){D.__webglMultisampledFramebuffer=n.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let ce=0;ce<j.length;ce++){const be=j[ce];D.__webglColorRenderbuffer[ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,D.__webglColorRenderbuffer[ce]);const De=s.convert(be.format,be.colorSpace),le=s.convert(be.type),pe=A(be.internalFormat,De,le,be.colorSpace,v.isXRRenderTarget===!0),xe=w(v);n.renderbufferStorageMultisample(n.RENDERBUFFER,xe,pe,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,D.__webglColorRenderbuffer[ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),v.depthBuffer&&(D.__webglDepthRenderbuffer=n.createRenderbuffer(),Be(D.__webglDepthRenderbuffer,v,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(H){t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),Ne(n.TEXTURE_CUBE_MAP,m);for(let ce=0;ce<6;ce++)if(m.mipmaps&&m.mipmaps.length>0)for(let be=0;be<m.mipmaps.length;be++)we(D.__webglFramebuffer[ce][be],v,m,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,be);else we(D.__webglFramebuffer[ce],v,m,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);g(m)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let ce=0,be=j.length;ce<be;ce++){const De=j[ce],le=i.get(De);let pe=n.TEXTURE_2D;(v.isWebGL3DRenderTarget||v.isWebGLArrayRenderTarget)&&(pe=v.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(pe,le.__webglTexture),Ne(pe,De),we(D.__webglFramebuffer,v,De,n.COLOR_ATTACHMENT0+ce,pe,0),g(De)&&d(pe)}t.unbindTexture()}else{let ce=n.TEXTURE_2D;if((v.isWebGL3DRenderTarget||v.isWebGLArrayRenderTarget)&&(ce=v.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ce,W.__webglTexture),Ne(ce,m),m.mipmaps&&m.mipmaps.length>0)for(let be=0;be<m.mipmaps.length;be++)we(D.__webglFramebuffer[be],v,m,n.COLOR_ATTACHMENT0,ce,be);else we(D.__webglFramebuffer,v,m,n.COLOR_ATTACHMENT0,ce,0);g(m)&&d(ce),t.unbindTexture()}v.depthBuffer&&je(v)}function k(v){const m=v.textures;for(let D=0,W=m.length;D<W;D++){const j=m[D];if(g(j)){const H=b(v),Me=i.get(j).__webglTexture;t.bindTexture(H,Me),d(H),t.unbindTexture()}}}const ee=[],$=[];function ne(v){if(v.samples>0){if(oe(v)===!1){const m=v.textures,D=v.width,W=v.height;let j=n.COLOR_BUFFER_BIT;const H=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=i.get(v),ce=m.length>1;if(ce)for(let De=0;De<m.length;De++)t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer);const be=v.texture.mipmaps;be&&be.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let De=0;De<m.length;De++){if(v.resolveDepthBuffer&&(v.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),v.stencilBuffer&&v.resolveStencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),ce){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Me.__webglColorRenderbuffer[De]);const le=i.get(m[De]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,le,0)}n.blitFramebuffer(0,0,D,W,0,0,D,W,j,n.NEAREST),l===!0&&(ee.length=0,$.length=0,ee.push(n.COLOR_ATTACHMENT0+De),v.depthBuffer&&v.resolveDepthBuffer===!1&&(ee.push(H),$.push(H),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,$)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ee))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ce)for(let De=0;De<m.length;De++){t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.RENDERBUFFER,Me.__webglColorRenderbuffer[De]);const le=i.get(m[De]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.TEXTURE_2D,le,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(v.depthBuffer&&v.resolveDepthBuffer===!1&&l){const m=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[m])}}}function w(v){return Math.min(r.maxSamples,v.samples)}function oe(v){const m=i.get(v);return v.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&m.__useRenderToTexture!==!1}function ie(v){const m=a.render.frame;u.get(v)!==m&&(u.set(v,m),v.update())}function Q(v,m){const D=v.colorSpace,W=v.format,j=v.type;return v.isCompressedTexture===!0||v.isVideoTexture===!0||D!==Mr&&D!==pi&&(Ze.getTransfer(D)===st?(W!==dn||j!==Jt)&&ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qe("WebGLTextures: Unsupported texture color space:",D)),m}function re(v){return typeof HTMLImageElement<"u"&&v instanceof HTMLImageElement?(c.width=v.naturalWidth||v.width,c.height=v.naturalHeight||v.height):typeof VideoFrame<"u"&&v instanceof VideoFrame?(c.width=v.displayWidth,c.height=v.displayHeight):(c.width=v.width,c.height=v.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=N,this.setTexture2D=K,this.setTexture2DArray=q,this.setTexture3D=V,this.setTextureCube=J,this.rebindTextures=P,this.setupRenderTarget=I,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=ne,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=we,this.useMultisampledRTT=oe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function XS(n,e){function t(i,r=pi){let s;const a=Ze.getTransfer(r);if(i===Jt)return n.UNSIGNED_BYTE;if(i===jl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Zl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Eh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===yh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Sh)return n.BYTE;if(i===Mh)return n.SHORT;if(i===es)return n.UNSIGNED_SHORT;if(i===Kl)return n.INT;if(i===Dn)return n.UNSIGNED_INT;if(i===An)return n.FLOAT;if(i===ti)return n.HALF_FLOAT;if(i===bh)return n.ALPHA;if(i===Th)return n.RGB;if(i===dn)return n.RGBA;if(i===ni)return n.DEPTH_COMPONENT;if(i===Hi)return n.DEPTH_STENCIL;if(i===Ah)return n.RED;if(i===Jl)return n.RED_INTEGER;if(i===Sr)return n.RG;if(i===Ql)return n.RG_INTEGER;if(i===ec)return n.RGBA_INTEGER;if(i===qs||i===Ys||i===$s||i===Ks)if(a===st)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===qs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ys)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===$s)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ks)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===qs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ys)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===$s)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ks)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Xo||i===qo||i===Yo||i===$o)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Xo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===qo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Yo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===$o)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ko||i===jo||i===Zo||i===Jo||i===Qo||i===el||i===tl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ko||i===jo)return a===st?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Zo)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Jo)return s.COMPRESSED_R11_EAC;if(i===Qo)return s.COMPRESSED_SIGNED_R11_EAC;if(i===el)return s.COMPRESSED_RG11_EAC;if(i===tl)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===nl||i===il||i===rl||i===sl||i===al||i===ol||i===ll||i===cl||i===ul||i===fl||i===hl||i===dl||i===pl||i===ml)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===nl)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===il)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===rl)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===sl)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===al)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ol)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ll)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===cl)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ul)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===fl)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===hl)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===dl)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===pl)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ml)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===gl||i===_l||i===xl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===gl)return a===st?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===_l)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===xl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===vl||i===Sl||i===Ml||i===El)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===vl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Sl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ml)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===El)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ts?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const qS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,YS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class $S{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Hh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Un({vertexShader:qS,fragmentShader:YS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new In(new Ma(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class KS extends yr{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,x=null;const S=typeof XRWebGLBinding<"u",g=new $S,d={},b=t.getContextAttributes();let A=null,y=null;const C=[],R=[],T=new Ke;let U=null;const _=new Zt;_.viewport=new xt;const M=new Zt;M.viewport=new xt;const L=[_,M],N=new s_;let B=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let ae=C[te];return ae===void 0&&(ae=new uo,C[te]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(te){let ae=C[te];return ae===void 0&&(ae=new uo,C[te]=ae),ae.getGripSpace()},this.getHand=function(te){let ae=C[te];return ae===void 0&&(ae=new uo,C[te]=ae),ae.getHandSpace()};function K(te){const ae=R.indexOf(te.inputSource);if(ae===-1)return;const we=C[ae];we!==void 0&&(we.update(te.inputSource,te.frame,c||a),we.dispatchEvent({type:te.type,data:te.inputSource}))}function q(){r.removeEventListener("select",K),r.removeEventListener("selectstart",K),r.removeEventListener("selectend",K),r.removeEventListener("squeeze",K),r.removeEventListener("squeezestart",K),r.removeEventListener("squeezeend",K),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",V);for(let te=0;te<C.length;te++){const ae=R[te];ae!==null&&(R[te]=null,C[te].disconnect(ae))}B=null,Z=null,g.reset();for(const te in d)delete d[te];e.setRenderTarget(A),p=null,h=null,f=null,r=null,y=null,ot.stop(),i.isPresenting=!1,e.setPixelRatio(U),e.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){s=te,i.isPresenting===!0&&ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){o=te,i.isPresenting===!0&&ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f===null&&S&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(te){if(r=te,r!==null){if(A=e.getRenderTarget(),r.addEventListener("select",K),r.addEventListener("selectstart",K),r.addEventListener("selectend",K),r.addEventListener("squeeze",K),r.addEventListener("squeezestart",K),r.addEventListener("squeezeend",K),r.addEventListener("end",q),r.addEventListener("inputsourceschange",V),b.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(T),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let we=null,Be=null,Re=null;b.depth&&(Re=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,we=b.stencil?Hi:ni,Be=b.stencil?ts:Dn);const je={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer(je),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new Pn(h.textureWidth,h.textureHeight,{format:dn,type:Jt,depthTexture:new is(h.textureWidth,h.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,we),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const we={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,we),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Pn(p.framebufferWidth,p.framebufferHeight,{format:dn,type:Jt,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),ot.setContext(r),ot.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function V(te){for(let ae=0;ae<te.removed.length;ae++){const we=te.removed[ae],Be=R.indexOf(we);Be>=0&&(R[Be]=null,C[Be].disconnect(we))}for(let ae=0;ae<te.added.length;ae++){const we=te.added[ae];let Be=R.indexOf(we);if(Be===-1){for(let je=0;je<C.length;je++)if(je>=R.length){R.push(we),Be=je;break}else if(R[je]===null){R[je]=we,Be=je;break}if(Be===-1)break}const Re=C[Be];Re&&Re.connect(we)}}const J=new G,ge=new G;function de(te,ae,we){J.setFromMatrixPosition(ae.matrixWorld),ge.setFromMatrixPosition(we.matrixWorld);const Be=J.distanceTo(ge),Re=ae.projectionMatrix.elements,je=we.projectionMatrix.elements,P=Re[14]/(Re[10]-1),I=Re[14]/(Re[10]+1),k=(Re[9]+1)/Re[5],ee=(Re[9]-1)/Re[5],$=(Re[8]-1)/Re[0],ne=(je[8]+1)/je[0],w=P*$,oe=P*ne,ie=Be/(-$+ne),Q=ie*-$;if(ae.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(Q),te.translateZ(ie),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Re[10]===-1)te.projectionMatrix.copy(ae.projectionMatrix),te.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const re=P+ie,v=I+ie,m=w-Q,D=oe+(Be-Q),W=k*I/v*re,j=ee*I/v*re;te.projectionMatrix.makePerspective(m,D,W,j,re,v),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function _e(te,ae){ae===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(ae.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(r===null)return;let ae=te.near,we=te.far;g.texture!==null&&(g.depthNear>0&&(ae=g.depthNear),g.depthFar>0&&(we=g.depthFar)),N.near=M.near=_.near=ae,N.far=M.far=_.far=we,(B!==N.near||Z!==N.far)&&(r.updateRenderState({depthNear:N.near,depthFar:N.far}),B=N.near,Z=N.far),N.layers.mask=te.layers.mask|6,_.layers.mask=N.layers.mask&3,M.layers.mask=N.layers.mask&5;const Be=te.parent,Re=N.cameras;_e(N,Be);for(let je=0;je<Re.length;je++)_e(Re[je],Be);Re.length===2?de(N,_,M):N.projectionMatrix.copy(_.projectionMatrix),Ne(te,N,Be)};function Ne(te,ae,we){we===null?te.matrix.copy(ae.matrixWorld):(te.matrix.copy(we.matrixWorld),te.matrix.invert(),te.matrix.multiply(ae.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(ae.projectionMatrix),te.projectionMatrixInverse.copy(ae.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=yl*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(te){l=te,h!==null&&(h.fixedFoveation=te),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=te)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(N)},this.getCameraTexture=function(te){return d[te]};let He=null;function dt(te,ae){if(u=ae.getViewerPose(c||a),x=ae,u!==null){const we=u.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let Be=!1;we.length!==N.cameras.length&&(N.cameras.length=0,Be=!0);for(let I=0;I<we.length;I++){const k=we[I];let ee=null;if(p!==null)ee=p.getViewport(k);else{const ne=f.getViewSubImage(h,k);ee=ne.viewport,I===0&&(e.setRenderTargetTextures(y,ne.colorTexture,ne.depthStencilTexture),e.setRenderTarget(y))}let $=L[I];$===void 0&&($=new Zt,$.layers.enable(I),$.viewport=new xt,L[I]=$),$.matrix.fromArray(k.transform.matrix),$.matrix.decompose($.position,$.quaternion,$.scale),$.projectionMatrix.fromArray(k.projectionMatrix),$.projectionMatrixInverse.copy($.projectionMatrix).invert(),$.viewport.set(ee.x,ee.y,ee.width,ee.height),I===0&&(N.matrix.copy($.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Be===!0&&N.cameras.push($)}const Re=r.enabledFeatures;if(Re&&Re.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&S){f=i.getBinding();const I=f.getDepthInformation(we[0]);I&&I.isValid&&I.texture&&g.init(I,r.renderState)}if(Re&&Re.includes("camera-access")&&S){e.state.unbindTexture(),f=i.getBinding();for(let I=0;I<we.length;I++){const k=we[I].camera;if(k){let ee=d[k];ee||(ee=new Hh,d[k]=ee);const $=f.getCameraImage(k);ee.sourceTexture=$}}}}for(let we=0;we<C.length;we++){const Be=R[we],Re=C[we];Be!==null&&Re!==void 0&&Re.update(Be,ae,c||a)}He&&He(te,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),x=null}const ot=new Wh;ot.setAnimationLoop(dt),this.setAnimationLoop=function(te){He=te},this.dispose=function(){}}}const Ii=new Ln,jS=new mt;function ZS(n,e){function t(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function i(g,d){d.color.getRGB(g.fogColor.value,Fh(n)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function r(g,d,b,A,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(g,d):d.isMeshToonMaterial?(s(g,d),f(g,d)):d.isMeshPhongMaterial?(s(g,d),u(g,d)):d.isMeshStandardMaterial?(s(g,d),h(g,d),d.isMeshPhysicalMaterial&&p(g,d,y)):d.isMeshMatcapMaterial?(s(g,d),x(g,d)):d.isMeshDepthMaterial?s(g,d):d.isMeshDistanceMaterial?(s(g,d),S(g,d)):d.isMeshNormalMaterial?s(g,d):d.isLineBasicMaterial?(a(g,d),d.isLineDashedMaterial&&o(g,d)):d.isPointsMaterial?l(g,d,b,A):d.isSpriteMaterial?c(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,t(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===Xt&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,t(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===Xt&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,t(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,t(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);const b=e.get(d),A=b.envMap,y=b.envMapRotation;A&&(g.envMap.value=A,Ii.copy(y),Ii.x*=-1,Ii.y*=-1,Ii.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Ii.y*=-1,Ii.z*=-1),g.envMapRotation.value.setFromMatrix4(jS.makeRotationFromEuler(Ii)),g.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,g.aoMapTransform))}function a(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform))}function o(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,b,A){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*b,g.scale.value=A*.5,d.map&&(g.map.value=d.map,t(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function c(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function u(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function f(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function h(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function p(g,d,b){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Xt&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,d){d.matcap&&(g.matcap.value=d.matcap)}function S(g,d){const b=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function JS(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,A){const y=A.program;i.uniformBlockBinding(b,y)}function c(b,A){let y=r[b.id];y===void 0&&(x(b),y=u(b),r[b.id]=y,b.addEventListener("dispose",g));const C=A.program;i.updateUBOMapping(b,C);const R=e.render.frame;s[b.id]!==R&&(h(b),s[b.id]=R)}function u(b){const A=f();b.__bindingPointIndex=A;const y=n.createBuffer(),C=b.__size,R=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,C,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,A,y),y}function f(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return Qe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(b){const A=r[b.id],y=b.uniforms,C=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let R=0,T=y.length;R<T;R++){const U=Array.isArray(y[R])?y[R]:[y[R]];for(let _=0,M=U.length;_<M;_++){const L=U[_];if(p(L,R,_,C)===!0){const N=L.__offset,B=Array.isArray(L.value)?L.value:[L.value];let Z=0;for(let K=0;K<B.length;K++){const q=B[K],V=S(q);typeof q=="number"||typeof q=="boolean"?(L.__data[0]=q,n.bufferSubData(n.UNIFORM_BUFFER,N+Z,L.__data)):q.isMatrix3?(L.__data[0]=q.elements[0],L.__data[1]=q.elements[1],L.__data[2]=q.elements[2],L.__data[3]=0,L.__data[4]=q.elements[3],L.__data[5]=q.elements[4],L.__data[6]=q.elements[5],L.__data[7]=0,L.__data[8]=q.elements[6],L.__data[9]=q.elements[7],L.__data[10]=q.elements[8],L.__data[11]=0):(q.toArray(L.__data,Z),Z+=V.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(b,A,y,C){const R=b.value,T=A+"_"+y;if(C[T]===void 0)return typeof R=="number"||typeof R=="boolean"?C[T]=R:C[T]=R.clone(),!0;{const U=C[T];if(typeof R=="number"||typeof R=="boolean"){if(U!==R)return C[T]=R,!0}else if(U.equals(R)===!1)return U.copy(R),!0}return!1}function x(b){const A=b.uniforms;let y=0;const C=16;for(let T=0,U=A.length;T<U;T++){const _=Array.isArray(A[T])?A[T]:[A[T]];for(let M=0,L=_.length;M<L;M++){const N=_[M],B=Array.isArray(N.value)?N.value:[N.value];for(let Z=0,K=B.length;Z<K;Z++){const q=B[Z],V=S(q),J=y%C,ge=J%V.boundary,de=J+ge;y+=ge,de!==0&&C-de<V.storage&&(y+=C-de),N.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=y,y+=V.storage}}}const R=y%C;return R>0&&(y+=C-R),b.__size=y,b.__cache={},this}function S(b){const A={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(A.boundary=4,A.storage=4):b.isVector2?(A.boundary=8,A.storage=8):b.isVector3||b.isColor?(A.boundary=16,A.storage=12):b.isVector4?(A.boundary=16,A.storage=16):b.isMatrix3?(A.boundary=48,A.storage=48):b.isMatrix4?(A.boundary=64,A.storage=64):b.isTexture?ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ze("WebGLRenderer: Unsupported uniform value type.",b),A}function g(b){const A=b.target;A.removeEventListener("dispose",g);const y=a.indexOf(A.__bindingPointIndex);a.splice(y,1),n.deleteBuffer(r[A.id]),delete r[A.id],delete s[A.id]}function d(){for(const b in r)n.deleteBuffer(r[b]);a=[],r={},s={}}return{bind:l,update:c,dispose:d}}const QS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let En=null;function eM(){return En===null&&(En=new Xg(QS,16,16,Sr,ti),En.name="DFG_LUT",En.minFilter=Pt,En.magFilter=Pt,En.wrapS=Kn,En.wrapT=Kn,En.generateMipmaps=!1,En.needsUpdate=!0),En}class tM{constructor(e={}){const{canvas:t=xg(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:p=Jt}=e;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=a;const S=p,g=new Set([ec,Ql,Jl]),d=new Set([Jt,Dn,es,ts,jl,Zl]),b=new Uint32Array(4),A=new Int32Array(4);let y=null,C=null;const R=[],T=[];let U=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Cn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const _=this;let M=!1;this._outputColorSpace=rn;let L=0,N=0,B=null,Z=-1,K=null;const q=new xt,V=new xt;let J=null;const ge=new et(0);let de=0,_e=t.width,Ne=t.height,He=1,dt=null,ot=null;const te=new xt(0,0,_e,Ne),ae=new xt(0,0,_e,Ne);let we=!1;const Be=new rc;let Re=!1,je=!1;const P=new mt,I=new G,k=new xt,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $=!1;function ne(){return B===null?He:1}let w=i;function oe(E,O){return t.getContext(E,O)}try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${$l}`),t.addEventListener("webglcontextlost",Ve,!1),t.addEventListener("webglcontextrestored",ut,!1),t.addEventListener("webglcontextcreationerror",it,!1),w===null){const O="webgl2";if(w=oe(O,E),w===null)throw oe(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw Qe("WebGLRenderer: "+E.message),E}let ie,Q,re,v,m,D,W,j,H,Me,ce,be,De,le,pe,xe,Te,he,Ge,F,ye,fe,Ae,ue;function se(){ie=new ev(w),ie.init(),fe=new XS(w,ie),Q=new Xx(w,ie,e,fe),re=new kS(w,ie),Q.reversedDepthBuffer&&h&&re.buffers.depth.setReversed(!0),v=new iv(w),m=new RS,D=new WS(w,ie,re,m,Q,fe,v),W=new Yx(_),j=new Qx(_),H=new o_(w),Ae=new kx(w,H),Me=new tv(w,H,v,Ae),ce=new sv(w,Me,H,v),Ge=new rv(w,Q,D),xe=new qx(m),be=new wS(_,W,j,ie,Q,Ae,xe),De=new ZS(_,m),le=new PS,pe=new FS(ie),he=new Gx(_,W,j,re,ce,x,l),Te=new HS(_,ce,Q),ue=new JS(w,v,Q,re),F=new Wx(w,ie,v),ye=new nv(w,ie,v),v.programs=be.programs,_.capabilities=Q,_.extensions=ie,_.properties=m,_.renderLists=le,_.shadowMap=Te,_.state=re,_.info=v}se(),S!==Jt&&(U=new ov(S,t.width,t.height,r,s));const me=new KS(_,w);this.xr=me,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const E=ie.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=ie.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return He},this.setPixelRatio=function(E){E!==void 0&&(He=E,this.setSize(_e,Ne,!1))},this.getSize=function(E){return E.set(_e,Ne)},this.setSize=function(E,O,Y=!0){if(me.isPresenting){ze("WebGLRenderer: Can't change size while VR device is presenting.");return}_e=E,Ne=O,t.width=Math.floor(E*He),t.height=Math.floor(O*He),Y===!0&&(t.style.width=E+"px",t.style.height=O+"px"),U!==null&&U.setSize(t.width,t.height),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(_e*He,Ne*He).floor()},this.setDrawingBufferSize=function(E,O,Y){_e=E,Ne=O,He=Y,t.width=Math.floor(E*Y),t.height=Math.floor(O*Y),this.setViewport(0,0,E,O)},this.setEffects=function(E){if(S===Jt){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let O=0;O<E.length;O++)if(E[O].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(q)},this.getViewport=function(E){return E.copy(te)},this.setViewport=function(E,O,Y,X){E.isVector4?te.set(E.x,E.y,E.z,E.w):te.set(E,O,Y,X),re.viewport(q.copy(te).multiplyScalar(He).round())},this.getScissor=function(E){return E.copy(ae)},this.setScissor=function(E,O,Y,X){E.isVector4?ae.set(E.x,E.y,E.z,E.w):ae.set(E,O,Y,X),re.scissor(V.copy(ae).multiplyScalar(He).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(E){re.setScissorTest(we=E)},this.setOpaqueSort=function(E){dt=E},this.setTransparentSort=function(E){ot=E},this.getClearColor=function(E){return E.copy(he.getClearColor())},this.setClearColor=function(){he.setClearColor(...arguments)},this.getClearAlpha=function(){return he.getClearAlpha()},this.setClearAlpha=function(){he.setClearAlpha(...arguments)},this.clear=function(E=!0,O=!0,Y=!0){let X=0;if(E){let z=!1;if(B!==null){const ve=B.texture.format;z=g.has(ve)}if(z){const ve=B.texture.type,Ce=d.has(ve),Ee=he.getClearColor(),Pe=he.getClearAlpha(),Le=Ee.r,Fe=Ee.g,Ie=Ee.b;Ce?(b[0]=Le,b[1]=Fe,b[2]=Ie,b[3]=Pe,w.clearBufferuiv(w.COLOR,0,b)):(A[0]=Le,A[1]=Fe,A[2]=Ie,A[3]=Pe,w.clearBufferiv(w.COLOR,0,A))}else X|=w.COLOR_BUFFER_BIT}O&&(X|=w.DEPTH_BUFFER_BIT),Y&&(X|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ve,!1),t.removeEventListener("webglcontextrestored",ut,!1),t.removeEventListener("webglcontextcreationerror",it,!1),he.dispose(),le.dispose(),pe.dispose(),m.dispose(),W.dispose(),j.dispose(),ce.dispose(),Ae.dispose(),ue.dispose(),be.dispose(),me.dispose(),me.removeEventListener("sessionstart",cc),me.removeEventListener("sessionend",uc),Ei.stop()};function Ve(E){E.preventDefault(),lu("WebGLRenderer: Context Lost."),M=!0}function ut(){lu("WebGLRenderer: Context Restored."),M=!1;const E=v.autoReset,O=Te.enabled,Y=Te.autoUpdate,X=Te.needsUpdate,z=Te.type;se(),v.autoReset=E,Te.enabled=O,Te.autoUpdate=Y,Te.needsUpdate=X,Te.type=z}function it(E){Qe("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function xn(E){const O=E.target;O.removeEventListener("dispose",xn),Nn(O)}function Nn(E){id(E),m.remove(E)}function id(E){const O=m.get(E).programs;O!==void 0&&(O.forEach(function(Y){be.releaseProgram(Y)}),E.isShaderMaterial&&be.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,Y,X,z,ve){O===null&&(O=ee);const Ce=z.isMesh&&z.matrixWorld.determinant()<0,Ee=sd(E,O,Y,X,z);re.setMaterial(X,Ce);let Pe=Y.index,Le=1;if(X.wireframe===!0){if(Pe=Me.getWireframeAttribute(Y),Pe===void 0)return;Le=2}const Fe=Y.drawRange,Ie=Y.attributes.position;let Ye=Fe.start*Le,at=(Fe.start+Fe.count)*Le;ve!==null&&(Ye=Math.max(Ye,ve.start*Le),at=Math.min(at,(ve.start+ve.count)*Le)),Pe!==null?(Ye=Math.max(Ye,0),at=Math.min(at,Pe.count)):Ie!=null&&(Ye=Math.max(Ye,0),at=Math.min(at,Ie.count));const gt=at-Ye;if(gt<0||gt===1/0)return;Ae.setup(z,X,Ee,Y,Pe);let _t,lt=F;if(Pe!==null&&(_t=H.get(Pe),lt=ye,lt.setIndex(_t)),z.isMesh)X.wireframe===!0?(re.setLineWidth(X.wireframeLinewidth*ne()),lt.setMode(w.LINES)):lt.setMode(w.TRIANGLES);else if(z.isLine){let Ue=X.linewidth;Ue===void 0&&(Ue=1),re.setLineWidth(Ue*ne()),z.isLineSegments?lt.setMode(w.LINES):z.isLineLoop?lt.setMode(w.LINE_LOOP):lt.setMode(w.LINE_STRIP)}else z.isPoints?lt.setMode(w.POINTS):z.isSprite&&lt.setMode(w.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)ns("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),lt.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(ie.get("WEBGL_multi_draw"))lt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Ue=z._multiDrawStarts,rt=z._multiDrawCounts,Je=z._multiDrawCount,qt=Pe?H.get(Pe).bytesPerElement:1,Xi=m.get(X).currentProgram.getUniforms();for(let Yt=0;Yt<Je;Yt++)Xi.setValue(w,"_gl_DrawID",Yt),lt.render(Ue[Yt]/qt,rt[Yt])}else if(z.isInstancedMesh)lt.renderInstances(Ye,gt,z.count);else if(Y.isInstancedBufferGeometry){const Ue=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,rt=Math.min(Y.instanceCount,Ue);lt.renderInstances(Ye,gt,rt)}else lt.render(Ye,gt)};function lc(E,O,Y){E.transparent===!0&&E.side===$n&&E.forceSinglePass===!1?(E.side=Xt,E.needsUpdate=!0,hs(E,O,Y),E.side=Si,E.needsUpdate=!0,hs(E,O,Y),E.side=$n):hs(E,O,Y)}this.compile=function(E,O,Y=null){Y===null&&(Y=E),C=pe.get(Y),C.init(O),T.push(C),Y.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(C.pushLight(z),z.castShadow&&C.pushShadow(z))}),E!==Y&&E.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(C.pushLight(z),z.castShadow&&C.pushShadow(z))}),C.setupLights();const X=new Set;return E.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const ve=z.material;if(ve)if(Array.isArray(ve))for(let Ce=0;Ce<ve.length;Ce++){const Ee=ve[Ce];lc(Ee,Y,z),X.add(Ee)}else lc(ve,Y,z),X.add(ve)}),C=T.pop(),X},this.compileAsync=function(E,O,Y=null){const X=this.compile(E,O,Y);return new Promise(z=>{function ve(){if(X.forEach(function(Ce){m.get(Ce).currentProgram.isReady()&&X.delete(Ce)}),X.size===0){z(E);return}setTimeout(ve,10)}ie.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let ba=null;function rd(E){ba&&ba(E)}function cc(){Ei.stop()}function uc(){Ei.start()}const Ei=new Wh;Ei.setAnimationLoop(rd),typeof self<"u"&&Ei.setContext(self),this.setAnimationLoop=function(E){ba=E,me.setAnimationLoop(E),E===null?Ei.stop():Ei.start()},me.addEventListener("sessionstart",cc),me.addEventListener("sessionend",uc),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){Qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;const Y=me.enabled===!0&&me.isPresenting===!0,X=U!==null&&(B===null||Y)&&U.begin(_,B);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(me.cameraAutoUpdate===!0&&me.updateCamera(O),O=me.getCamera()),E.isScene===!0&&E.onBeforeRender(_,E,O,B),C=pe.get(E,T.length),C.init(O),T.push(C),P.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Be.setFromProjectionMatrix(P,wn,O.reversedDepth),je=this.localClippingEnabled,Re=xe.init(this.clippingPlanes,je),y=le.get(E,R.length),y.init(),R.push(y),me.enabled===!0&&me.isPresenting===!0){const Ce=_.xr.getDepthSensingMesh();Ce!==null&&Ta(Ce,O,-1/0,_.sortObjects)}Ta(E,O,0,_.sortObjects),y.finish(),_.sortObjects===!0&&y.sort(dt,ot),$=me.enabled===!1||me.isPresenting===!1||me.hasDepthSensing()===!1,$&&he.addToRenderList(y,E),this.info.render.frame++,Re===!0&&xe.beginShadows();const z=C.state.shadowsArray;if(Te.render(z,E,O),Re===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(X&&U.hasRenderPass())===!1){const Ce=y.opaque,Ee=y.transmissive;if(C.setupLights(),O.isArrayCamera){const Pe=O.cameras;if(Ee.length>0)for(let Le=0,Fe=Pe.length;Le<Fe;Le++){const Ie=Pe[Le];hc(Ce,Ee,E,Ie)}$&&he.render(E);for(let Le=0,Fe=Pe.length;Le<Fe;Le++){const Ie=Pe[Le];fc(y,E,Ie,Ie.viewport)}}else Ee.length>0&&hc(Ce,Ee,E,O),$&&he.render(E),fc(y,E,O)}B!==null&&N===0&&(D.updateMultisampleRenderTarget(B),D.updateRenderTargetMipmap(B)),X&&U.end(_),E.isScene===!0&&E.onAfterRender(_,E,O),Ae.resetDefaultState(),Z=-1,K=null,T.pop(),T.length>0?(C=T[T.length-1],Re===!0&&xe.setGlobalState(_.clippingPlanes,C.state.camera)):C=null,R.pop(),R.length>0?y=R[R.length-1]:y=null};function Ta(E,O,Y,X){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)Y=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLight)C.pushLight(E),E.castShadow&&C.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Be.intersectsSprite(E)){X&&k.setFromMatrixPosition(E.matrixWorld).applyMatrix4(P);const Ce=ce.update(E),Ee=E.material;Ee.visible&&y.push(E,Ce,Ee,Y,k.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Be.intersectsObject(E))){const Ce=ce.update(E),Ee=E.material;if(X&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),k.copy(E.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),k.copy(Ce.boundingSphere.center)),k.applyMatrix4(E.matrixWorld).applyMatrix4(P)),Array.isArray(Ee)){const Pe=Ce.groups;for(let Le=0,Fe=Pe.length;Le<Fe;Le++){const Ie=Pe[Le],Ye=Ee[Ie.materialIndex];Ye&&Ye.visible&&y.push(E,Ce,Ye,Y,k.z,Ie)}}else Ee.visible&&y.push(E,Ce,Ee,Y,k.z,null)}}const ve=E.children;for(let Ce=0,Ee=ve.length;Ce<Ee;Ce++)Ta(ve[Ce],O,Y,X)}function fc(E,O,Y,X){const{opaque:z,transmissive:ve,transparent:Ce}=E;C.setupLightsView(Y),Re===!0&&xe.setGlobalState(_.clippingPlanes,Y),X&&re.viewport(q.copy(X)),z.length>0&&fs(z,O,Y),ve.length>0&&fs(ve,O,Y),Ce.length>0&&fs(Ce,O,Y),re.buffers.depth.setTest(!0),re.buffers.depth.setMask(!0),re.buffers.color.setMask(!0),re.setPolygonOffset(!1)}function hc(E,O,Y,X){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[X.id]===void 0){const Ye=ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[X.id]=new Pn(1,1,{generateMipmaps:!0,type:Ye?ti:Jt,minFilter:zi,samples:Q.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace})}const ve=C.state.transmissionRenderTarget[X.id],Ce=X.viewport||q;ve.setSize(Ce.z*_.transmissionResolutionScale,Ce.w*_.transmissionResolutionScale);const Ee=_.getRenderTarget(),Pe=_.getActiveCubeFace(),Le=_.getActiveMipmapLevel();_.setRenderTarget(ve),_.getClearColor(ge),de=_.getClearAlpha(),de<1&&_.setClearColor(16777215,.5),_.clear(),$&&he.render(Y);const Fe=_.toneMapping;_.toneMapping=Cn;const Ie=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),C.setupLightsView(X),Re===!0&&xe.setGlobalState(_.clippingPlanes,X),fs(E,Y,X),D.updateMultisampleRenderTarget(ve),D.updateRenderTargetMipmap(ve),ie.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let at=0,gt=O.length;at<gt;at++){const _t=O[at],{object:lt,geometry:Ue,material:rt,group:Je}=_t;if(rt.side===$n&&lt.layers.test(X.layers)){const qt=rt.side;rt.side=Xt,rt.needsUpdate=!0,dc(lt,Y,X,Ue,rt,Je),rt.side=qt,rt.needsUpdate=!0,Ye=!0}}Ye===!0&&(D.updateMultisampleRenderTarget(ve),D.updateRenderTargetMipmap(ve))}_.setRenderTarget(Ee,Pe,Le),_.setClearColor(ge,de),Ie!==void 0&&(X.viewport=Ie),_.toneMapping=Fe}function fs(E,O,Y){const X=O.isScene===!0?O.overrideMaterial:null;for(let z=0,ve=E.length;z<ve;z++){const Ce=E[z],{object:Ee,geometry:Pe,group:Le}=Ce;let Fe=Ce.material;Fe.allowOverride===!0&&X!==null&&(Fe=X),Ee.layers.test(Y.layers)&&dc(Ee,O,Y,Pe,Fe,Le)}}function dc(E,O,Y,X,z,ve){E.onBeforeRender(_,O,Y,X,z,ve),E.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),z.onBeforeRender(_,O,Y,X,E,ve),z.transparent===!0&&z.side===$n&&z.forceSinglePass===!1?(z.side=Xt,z.needsUpdate=!0,_.renderBufferDirect(Y,O,X,z,E,ve),z.side=Si,z.needsUpdate=!0,_.renderBufferDirect(Y,O,X,z,E,ve),z.side=$n):_.renderBufferDirect(Y,O,X,z,E,ve),E.onAfterRender(_,O,Y,X,z,ve)}function hs(E,O,Y){O.isScene!==!0&&(O=ee);const X=m.get(E),z=C.state.lights,ve=C.state.shadowsArray,Ce=z.state.version,Ee=be.getParameters(E,z.state,ve,O,Y),Pe=be.getProgramCacheKey(Ee);let Le=X.programs;X.environment=E.isMeshStandardMaterial?O.environment:null,X.fog=O.fog,X.envMap=(E.isMeshStandardMaterial?j:W).get(E.envMap||X.environment),X.envMapRotation=X.environment!==null&&E.envMap===null?O.environmentRotation:E.envMapRotation,Le===void 0&&(E.addEventListener("dispose",xn),Le=new Map,X.programs=Le);let Fe=Le.get(Pe);if(Fe!==void 0){if(X.currentProgram===Fe&&X.lightsStateVersion===Ce)return mc(E,Ee),Fe}else Ee.uniforms=be.getUniforms(E),E.onBeforeCompile(Ee,_),Fe=be.acquireProgram(Ee,Pe),Le.set(Pe,Fe),X.uniforms=Ee.uniforms;const Ie=X.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ie.clippingPlanes=xe.uniform),mc(E,Ee),X.needsLights=od(E),X.lightsStateVersion=Ce,X.needsLights&&(Ie.ambientLightColor.value=z.state.ambient,Ie.lightProbe.value=z.state.probe,Ie.directionalLights.value=z.state.directional,Ie.directionalLightShadows.value=z.state.directionalShadow,Ie.spotLights.value=z.state.spot,Ie.spotLightShadows.value=z.state.spotShadow,Ie.rectAreaLights.value=z.state.rectArea,Ie.ltc_1.value=z.state.rectAreaLTC1,Ie.ltc_2.value=z.state.rectAreaLTC2,Ie.pointLights.value=z.state.point,Ie.pointLightShadows.value=z.state.pointShadow,Ie.hemisphereLights.value=z.state.hemi,Ie.directionalShadowMap.value=z.state.directionalShadowMap,Ie.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ie.spotShadowMap.value=z.state.spotShadowMap,Ie.spotLightMatrix.value=z.state.spotLightMatrix,Ie.spotLightMap.value=z.state.spotLightMap,Ie.pointShadowMap.value=z.state.pointShadowMap,Ie.pointShadowMatrix.value=z.state.pointShadowMatrix),X.currentProgram=Fe,X.uniformsList=null,Fe}function pc(E){if(E.uniformsList===null){const O=E.currentProgram.getUniforms();E.uniformsList=js.seqWithValue(O.seq,E.uniforms)}return E.uniformsList}function mc(E,O){const Y=m.get(E);Y.outputColorSpace=O.outputColorSpace,Y.batching=O.batching,Y.batchingColor=O.batchingColor,Y.instancing=O.instancing,Y.instancingColor=O.instancingColor,Y.instancingMorph=O.instancingMorph,Y.skinning=O.skinning,Y.morphTargets=O.morphTargets,Y.morphNormals=O.morphNormals,Y.morphColors=O.morphColors,Y.morphTargetsCount=O.morphTargetsCount,Y.numClippingPlanes=O.numClippingPlanes,Y.numIntersection=O.numClipIntersection,Y.vertexAlphas=O.vertexAlphas,Y.vertexTangents=O.vertexTangents,Y.toneMapping=O.toneMapping}function sd(E,O,Y,X,z){O.isScene!==!0&&(O=ee),D.resetTextureUnits();const ve=O.fog,Ce=X.isMeshStandardMaterial?O.environment:null,Ee=B===null?_.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Mr,Pe=(X.isMeshStandardMaterial?j:W).get(X.envMap||Ce),Le=X.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Fe=!!Y.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ie=!!Y.morphAttributes.position,Ye=!!Y.morphAttributes.normal,at=!!Y.morphAttributes.color;let gt=Cn;X.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(gt=_.toneMapping);const _t=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,lt=_t!==void 0?_t.length:0,Ue=m.get(X),rt=C.state.lights;if(Re===!0&&(je===!0||E!==K)){const Lt=E===K&&X.id===Z;xe.setState(X,E,Lt)}let Je=!1;X.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==rt.state.version||Ue.outputColorSpace!==Ee||z.isBatchedMesh&&Ue.batching===!1||!z.isBatchedMesh&&Ue.batching===!0||z.isBatchedMesh&&Ue.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Ue.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Ue.instancing===!1||!z.isInstancedMesh&&Ue.instancing===!0||z.isSkinnedMesh&&Ue.skinning===!1||!z.isSkinnedMesh&&Ue.skinning===!0||z.isInstancedMesh&&Ue.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ue.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ue.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ue.instancingMorph===!1&&z.morphTexture!==null||Ue.envMap!==Pe||X.fog===!0&&Ue.fog!==ve||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==xe.numPlanes||Ue.numIntersection!==xe.numIntersection)||Ue.vertexAlphas!==Le||Ue.vertexTangents!==Fe||Ue.morphTargets!==Ie||Ue.morphNormals!==Ye||Ue.morphColors!==at||Ue.toneMapping!==gt||Ue.morphTargetsCount!==lt)&&(Je=!0):(Je=!0,Ue.__version=X.version);let qt=Ue.currentProgram;Je===!0&&(qt=hs(X,O,z));let Xi=!1,Yt=!1,Ar=!1;const ft=qt.getUniforms(),zt=Ue.uniforms;if(re.useProgram(qt.program)&&(Xi=!0,Yt=!0,Ar=!0),X.id!==Z&&(Z=X.id,Yt=!0),Xi||K!==E){re.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),ft.setValue(w,"projectionMatrix",E.projectionMatrix),ft.setValue(w,"viewMatrix",E.matrixWorldInverse);const Ht=ft.map.cameraPosition;Ht!==void 0&&Ht.setValue(w,I.setFromMatrixPosition(E.matrixWorld)),Q.logarithmicDepthBuffer&&ft.setValue(w,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&ft.setValue(w,"isOrthographic",E.isOrthographicCamera===!0),K!==E&&(K=E,Yt=!0,Ar=!0)}if(Ue.needsLights&&(rt.state.directionalShadowMap.length>0&&ft.setValue(w,"directionalShadowMap",rt.state.directionalShadowMap,D),rt.state.spotShadowMap.length>0&&ft.setValue(w,"spotShadowMap",rt.state.spotShadowMap,D),rt.state.pointShadowMap.length>0&&ft.setValue(w,"pointShadowMap",rt.state.pointShadowMap,D)),z.isSkinnedMesh){ft.setOptional(w,z,"bindMatrix"),ft.setOptional(w,z,"bindMatrixInverse");const Lt=z.skeleton;Lt&&(Lt.boneTexture===null&&Lt.computeBoneTexture(),ft.setValue(w,"boneTexture",Lt.boneTexture,D))}z.isBatchedMesh&&(ft.setOptional(w,z,"batchingTexture"),ft.setValue(w,"batchingTexture",z._matricesTexture,D),ft.setOptional(w,z,"batchingIdTexture"),ft.setValue(w,"batchingIdTexture",z._indirectTexture,D),ft.setOptional(w,z,"batchingColorTexture"),z._colorsTexture!==null&&ft.setValue(w,"batchingColorTexture",z._colorsTexture,D));const en=Y.morphAttributes;if((en.position!==void 0||en.normal!==void 0||en.color!==void 0)&&Ge.update(z,Y,qt),(Yt||Ue.receiveShadow!==z.receiveShadow)&&(Ue.receiveShadow=z.receiveShadow,ft.setValue(w,"receiveShadow",z.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(zt.envMap.value=Pe,zt.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&O.environment!==null&&(zt.envMapIntensity.value=O.environmentIntensity),zt.dfgLUT!==void 0&&(zt.dfgLUT.value=eM()),Yt&&(ft.setValue(w,"toneMappingExposure",_.toneMappingExposure),Ue.needsLights&&ad(zt,Ar),ve&&X.fog===!0&&De.refreshFogUniforms(zt,ve),De.refreshMaterialUniforms(zt,X,He,Ne,C.state.transmissionRenderTarget[E.id]),js.upload(w,pc(Ue),zt,D)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(js.upload(w,pc(Ue),zt,D),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&ft.setValue(w,"center",z.center),ft.setValue(w,"modelViewMatrix",z.modelViewMatrix),ft.setValue(w,"normalMatrix",z.normalMatrix),ft.setValue(w,"modelMatrix",z.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Lt=X.uniformsGroups;for(let Ht=0,Aa=Lt.length;Ht<Aa;Ht++){const yi=Lt[Ht];ue.update(yi,qt),ue.bind(yi,qt)}}return qt}function ad(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function od(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(E,O,Y){const X=m.get(E);X.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),m.get(E.texture).__webglTexture=O,m.get(E.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:Y,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,O){const Y=m.get(E);Y.__webglFramebuffer=O,Y.__useDefaultFramebuffer=O===void 0};const ld=w.createFramebuffer();this.setRenderTarget=function(E,O=0,Y=0){B=E,L=O,N=Y;let X=null,z=!1,ve=!1;if(E){const Ee=m.get(E);if(Ee.__useDefaultFramebuffer!==void 0){re.bindFramebuffer(w.FRAMEBUFFER,Ee.__webglFramebuffer),q.copy(E.viewport),V.copy(E.scissor),J=E.scissorTest,re.viewport(q),re.scissor(V),re.setScissorTest(J),Z=-1;return}else if(Ee.__webglFramebuffer===void 0)D.setupRenderTarget(E);else if(Ee.__hasExternalTextures)D.rebindTextures(E,m.get(E.texture).__webglTexture,m.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Fe=E.depthTexture;if(Ee.__boundDepthTexture!==Fe){if(Fe!==null&&m.has(Fe)&&(E.width!==Fe.image.width||E.height!==Fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(E)}}const Pe=E.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(ve=!0);const Le=m.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Le[O])?X=Le[O][Y]:X=Le[O],z=!0):E.samples>0&&D.useMultisampledRTT(E)===!1?X=m.get(E).__webglMultisampledFramebuffer:Array.isArray(Le)?X=Le[Y]:X=Le,q.copy(E.viewport),V.copy(E.scissor),J=E.scissorTest}else q.copy(te).multiplyScalar(He).floor(),V.copy(ae).multiplyScalar(He).floor(),J=we;if(Y!==0&&(X=ld),re.bindFramebuffer(w.FRAMEBUFFER,X)&&re.drawBuffers(E,X),re.viewport(q),re.scissor(V),re.setScissorTest(J),z){const Ee=m.get(E.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ee.__webglTexture,Y)}else if(ve){const Ee=O;for(let Pe=0;Pe<E.textures.length;Pe++){const Le=m.get(E.textures[Pe]);w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0+Pe,Le.__webglTexture,Y,Ee)}}else if(E!==null&&Y!==0){const Ee=m.get(E.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Ee.__webglTexture,Y)}Z=-1},this.readRenderTargetPixels=function(E,O,Y,X,z,ve,Ce,Ee=0){if(!(E&&E.isWebGLRenderTarget)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=m.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ce!==void 0&&(Pe=Pe[Ce]),Pe){re.bindFramebuffer(w.FRAMEBUFFER,Pe);try{const Le=E.textures[Ee],Fe=Le.format,Ie=Le.type;if(!Q.textureFormatReadable(Fe)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Q.textureTypeReadable(Ie)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-X&&Y>=0&&Y<=E.height-z&&(E.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+Ee),w.readPixels(O,Y,X,z,fe.convert(Fe),fe.convert(Ie),ve))}finally{const Le=B!==null?m.get(B).__webglFramebuffer:null;re.bindFramebuffer(w.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(E,O,Y,X,z,ve,Ce,Ee=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=m.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ce!==void 0&&(Pe=Pe[Ce]),Pe)if(O>=0&&O<=E.width-X&&Y>=0&&Y<=E.height-z){re.bindFramebuffer(w.FRAMEBUFFER,Pe);const Le=E.textures[Ee],Fe=Le.format,Ie=Le.type;if(!Q.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Q.textureTypeReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ye=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,Ye),w.bufferData(w.PIXEL_PACK_BUFFER,ve.byteLength,w.STREAM_READ),E.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+Ee),w.readPixels(O,Y,X,z,fe.convert(Fe),fe.convert(Ie),0);const at=B!==null?m.get(B).__webglFramebuffer:null;re.bindFramebuffer(w.FRAMEBUFFER,at);const gt=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await vg(w,gt,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,Ye),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,ve),w.deleteBuffer(Ye),w.deleteSync(gt),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,O=null,Y=0){const X=Math.pow(2,-Y),z=Math.floor(E.image.width*X),ve=Math.floor(E.image.height*X),Ce=O!==null?O.x:0,Ee=O!==null?O.y:0;D.setTexture2D(E,0),w.copyTexSubImage2D(w.TEXTURE_2D,Y,0,0,Ce,Ee,z,ve),re.unbindTexture()};const cd=w.createFramebuffer(),ud=w.createFramebuffer();this.copyTextureToTexture=function(E,O,Y=null,X=null,z=0,ve=null){ve===null&&(z!==0?(ns("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ve=z,z=0):ve=0);let Ce,Ee,Pe,Le,Fe,Ie,Ye,at,gt;const _t=E.isCompressedTexture?E.mipmaps[ve]:E.image;if(Y!==null)Ce=Y.max.x-Y.min.x,Ee=Y.max.y-Y.min.y,Pe=Y.isBox3?Y.max.z-Y.min.z:1,Le=Y.min.x,Fe=Y.min.y,Ie=Y.isBox3?Y.min.z:0;else{const en=Math.pow(2,-z);Ce=Math.floor(_t.width*en),Ee=Math.floor(_t.height*en),E.isDataArrayTexture?Pe=_t.depth:E.isData3DTexture?Pe=Math.floor(_t.depth*en):Pe=1,Le=0,Fe=0,Ie=0}X!==null?(Ye=X.x,at=X.y,gt=X.z):(Ye=0,at=0,gt=0);const lt=fe.convert(O.format),Ue=fe.convert(O.type);let rt;O.isData3DTexture?(D.setTexture3D(O,0),rt=w.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(D.setTexture2DArray(O,0),rt=w.TEXTURE_2D_ARRAY):(D.setTexture2D(O,0),rt=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,O.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,O.unpackAlignment);const Je=w.getParameter(w.UNPACK_ROW_LENGTH),qt=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Xi=w.getParameter(w.UNPACK_SKIP_PIXELS),Yt=w.getParameter(w.UNPACK_SKIP_ROWS),Ar=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,_t.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,_t.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Le),w.pixelStorei(w.UNPACK_SKIP_ROWS,Fe),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Ie);const ft=E.isDataArrayTexture||E.isData3DTexture,zt=O.isDataArrayTexture||O.isData3DTexture;if(E.isDepthTexture){const en=m.get(E),Lt=m.get(O),Ht=m.get(en.__renderTarget),Aa=m.get(Lt.__renderTarget);re.bindFramebuffer(w.READ_FRAMEBUFFER,Ht.__webglFramebuffer),re.bindFramebuffer(w.DRAW_FRAMEBUFFER,Aa.__webglFramebuffer);for(let yi=0;yi<Pe;yi++)ft&&(w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,m.get(E).__webglTexture,z,Ie+yi),w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,m.get(O).__webglTexture,ve,gt+yi)),w.blitFramebuffer(Le,Fe,Ce,Ee,Ye,at,Ce,Ee,w.DEPTH_BUFFER_BIT,w.NEAREST);re.bindFramebuffer(w.READ_FRAMEBUFFER,null),re.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(z!==0||E.isRenderTargetTexture||m.has(E)){const en=m.get(E),Lt=m.get(O);re.bindFramebuffer(w.READ_FRAMEBUFFER,cd),re.bindFramebuffer(w.DRAW_FRAMEBUFFER,ud);for(let Ht=0;Ht<Pe;Ht++)ft?w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,en.__webglTexture,z,Ie+Ht):w.framebufferTexture2D(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,en.__webglTexture,z),zt?w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Lt.__webglTexture,ve,gt+Ht):w.framebufferTexture2D(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Lt.__webglTexture,ve),z!==0?w.blitFramebuffer(Le,Fe,Ce,Ee,Ye,at,Ce,Ee,w.COLOR_BUFFER_BIT,w.NEAREST):zt?w.copyTexSubImage3D(rt,ve,Ye,at,gt+Ht,Le,Fe,Ce,Ee):w.copyTexSubImage2D(rt,ve,Ye,at,Le,Fe,Ce,Ee);re.bindFramebuffer(w.READ_FRAMEBUFFER,null),re.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else zt?E.isDataTexture||E.isData3DTexture?w.texSubImage3D(rt,ve,Ye,at,gt,Ce,Ee,Pe,lt,Ue,_t.data):O.isCompressedArrayTexture?w.compressedTexSubImage3D(rt,ve,Ye,at,gt,Ce,Ee,Pe,lt,_t.data):w.texSubImage3D(rt,ve,Ye,at,gt,Ce,Ee,Pe,lt,Ue,_t):E.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,ve,Ye,at,Ce,Ee,lt,Ue,_t.data):E.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,ve,Ye,at,_t.width,_t.height,lt,_t.data):w.texSubImage2D(w.TEXTURE_2D,ve,Ye,at,Ce,Ee,lt,Ue,_t);w.pixelStorei(w.UNPACK_ROW_LENGTH,Je),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,qt),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Xi),w.pixelStorei(w.UNPACK_SKIP_ROWS,Yt),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Ar),ve===0&&O.generateMipmaps&&w.generateMipmap(rt),re.unbindTexture()},this.initRenderTarget=function(E){m.get(E).__webglFramebuffer===void 0&&D.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?D.setTextureCube(E,0):E.isData3DTexture?D.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?D.setTexture2DArray(E,0):D.setTexture2D(E,0),re.unbindTexture()},this.resetState=function(){L=0,N=0,B=null,re.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}}class us{constructor(e=0,t="Network Error"){this.status=e,this.text=t}}const nM=()=>{if(!(typeof localStorage>"u"))return{get:n=>Promise.resolve(localStorage.getItem(n)),set:(n,e)=>Promise.resolve(localStorage.setItem(n,e)),remove:n=>Promise.resolve(localStorage.removeItem(n))}},bt={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:nM()},oc=n=>n?typeof n=="string"?{publicKey:n}:n.toString()==="[object Object]"?n:{}:{},iM=(n,e="https://api.emailjs.com")=>{if(!n)return;const t=oc(n);bt.publicKey=t.publicKey,bt.blockHeadless=t.blockHeadless,bt.storageProvider=t.storageProvider,bt.blockList=t.blockList,bt.limitRate=t.limitRate,bt.origin=t.origin||e},Kh=async(n,e,t={})=>{const i=await fetch(bt.origin+n,{method:"POST",headers:t,body:e}),r=await i.text(),s=new us(i.status,r);if(i.ok)return s;throw s},jh=(n,e,t)=>{if(!n||typeof n!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!e||typeof e!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!t||typeof t!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},rM=n=>{if(n&&n.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},Zh=n=>n.webdriver||!n.languages||n.languages.length===0,Jh=()=>new us(451,"Unavailable For Headless Browser"),sM=(n,e)=>{if(!Array.isArray(n))throw"The BlockList list has to be an array";if(typeof e!="string")throw"The BlockList watchVariable has to be a string"},aM=n=>!n.list?.length||!n.watchVariable,oM=(n,e)=>n instanceof FormData?n.get(e):n[e],Qh=(n,e)=>{if(aM(n))return!1;sM(n.list,n.watchVariable);const t=oM(e,n.watchVariable);return typeof t!="string"?!1:n.list.includes(t)},ed=()=>new us(403,"Forbidden"),lM=(n,e)=>{if(typeof n!="number"||n<0)throw"The LimitRate throttle has to be a positive number";if(e&&typeof e!="string")throw"The LimitRate ID has to be a non-empty string"},cM=async(n,e,t)=>{const i=Number(await t.get(n)||0);return e-Date.now()+i},td=async(n,e,t)=>{if(!e.throttle||!t)return!1;lM(e.throttle,e.id);const i=e.id||n;return await cM(i,e.throttle,t)>0?!0:(await t.set(i,Date.now().toString()),!1)},nd=()=>new us(429,"Too Many Requests"),uM=async(n,e,t,i)=>{const r=oc(i),s=r.publicKey||bt.publicKey,a=r.blockHeadless||bt.blockHeadless,o=r.storageProvider||bt.storageProvider,l={...bt.blockList,...r.blockList},c={...bt.limitRate,...r.limitRate};return a&&Zh(navigator)?Promise.reject(Jh()):(jh(s,n,e),rM(t),t&&Qh(l,t)?Promise.reject(ed()):await td(location.pathname,c,o)?Promise.reject(nd()):Kh("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:s,service_id:n,template_id:e,template_params:t}),{"Content-type":"application/json"}))},fM=n=>{if(!n||n.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},hM=n=>typeof n=="string"?document.querySelector(n):n,dM=async(n,e,t,i)=>{const r=oc(i),s=r.publicKey||bt.publicKey,a=r.blockHeadless||bt.blockHeadless,o=bt.storageProvider||r.storageProvider,l={...bt.blockList,...r.blockList},c={...bt.limitRate,...r.limitRate};if(a&&Zh(navigator))return Promise.reject(Jh());const u=hM(t);jh(s,n,e),fM(u);const f=new FormData(u);return Qh(l,f)?Promise.reject(ed()):await td(location.pathname,c,o)?Promise.reject(nd()):(f.append("lib_version","4.4.1"),f.append("service_id",n),f.append("template_id",e),f.append("user_id",s),Kh("/api/v1.0/email/send-form",f))},pM={init:iM,send:uM,sendForm:dM,EmailJSResponseStatus:us},mM=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},gM={class:"flex flex-col items-center justify-center min-h-screen text-white font-sans p-2 select-none overflow-hidden"},_M={key:"select",class:"screen-box border-blue-500/30 shadow-blue-500/20"},xM={class:"flex gap-6 justify-center w-full"},vM={key:"reject",class:"screen-box border-red-500/50 shadow-red-900/50"},SM={key:"game",class:"flex flex-col items-center w-full max-w-md"},MM={class:"relative w-[340px] h-[300px] mb-8 transform scale-[0.85] sm:scale-100 transition-transform origin-center"},EM={key:"win",class:"screen-box border-yellow-400/50 shadow-[0_0_60px_rgba(250,204,21,0.3)]"},yM={class:"flex flex-col gap-3 w-full max-w-xs"},bM={class:"flex items-center gap-2 group"},TM={key:0,class:"text-red-400 text-xs font-bold pl-1 animate-pulse"},AM=["disabled"],wM="service_rfemzas",RM="template_j8w9l5c",CM="vYGev7OaoJPuOPmHh",PM={__name:"App",setup(n){const e=On("selection"),t=On(""),i=On(""),r=On("text-yellow-300"),s=On(""),a=On(!1),o=On(""),l=On([4,"","",5,"","",6,"",""]),c=On(null);let u,f,h,p,x,S=0,g=0;const d=R=>{R==="Taken"?e.value="rejection":(t.value=R,localStorage.setItem("userStatus",R),e.value="game")},b=()=>{const R=l.value.map(L=>L===""?0:parseInt(L));if(R.includes(0)){i.value="Fill all 6 empty circles.",r.value="text-yellow-300";return}if(new Set(R).size!==9||R.some(L=>L<1||L>9)){i.value="Use numbers 1-9 exactly once!",r.value="text-red-400";return}const U=R[0]+R[1]+R[2]+R[3],_=R[3]+R[4]+R[5]+R[6],M=R[6]+R[7]+R[8]+R[0];U===20&&_===20&&M===20?(e.value="win",C()):(i.value=`Sums: ${U}, ${_}, ${M}. Goal: 20`,r.value="text-red-300")},A=()=>{s.value="";const R=o.value.replace(/\D/g,"");if(R.length!==10){s.value="Please enter a valid 10-digit US number.";return}a.value=!0;const T={to_email:"subscriber@fynx.org",message:`Winner: ${t.value}. Phone: +1 ${R}`};pM.send(wM,RM,T,CM).then(()=>{alert("Sent! We will contact you shortly."),a.value=!1},U=>{console.error("FAILED...",U),alert("Error sending. Check console."),a.value=!1})},y=R=>{S=R.clientX/window.innerWidth*2-1,g=-(R.clientY/window.innerHeight)*2+1},C=()=>{p&&(p.material.color.setHex(16766720),p.material.emissive.setHex(11175936),p.material.wireframe=!1,p.material.roughness=.1,p.material.metalness=.9,x&&(x.rotation.z+=1))};return kl(()=>{document.addEventListener("mousemove",y),u=new Wg,f=new Zt(75,window.innerWidth/window.innerHeight,.1,1e3),h=new tM({alpha:!0,antialias:!0}),h.setSize(window.innerWidth,window.innerHeight),c.value&&c.value.appendChild(h.domElement);const R=new ac(1.6,1),T=new Jg({color:6333946,wireframe:!0,emissive:1981066,emissiveIntensity:.5});p=new In(R,T),u.add(p);const U=new ln,_=2e3,M=new Float32Array(_*3);for(let K=0;K<_*3;K++)M[K]=(Math.random()-.5)*50;U.setAttribute("position",new gn(M,3));const L=new zh({size:.05,color:16777215,transparent:!0});x=new Kg(U,L),u.add(x);const N=new i_(16777215,2,100);N.position.set(10,10,10),u.add(N);const B=new r_(4210752);u.add(B),f.position.z=5;function Z(){if(requestAnimationFrame(Z),f.position.x+=(S*.5-f.position.x)*.05,f.position.y+=(g*.5-f.position.y)*.05,f.lookAt(u.position),e.value==="win"){p.rotation.x+=.02,p.rotation.y+=.03;const K=1.6+Math.sin(Date.now()*.005)*.2;p.scale.set(K,K,K)}else p.rotation.x+=.002,p.rotation.y+=.002,x.rotation.y-=5e-4;h.render(u,f)}Z(),window.addEventListener("resize",()=>{f.aspect=window.innerWidth/window.innerHeight,f.updateProjectionMatrix(),h.setSize(window.innerWidth,window.innerHeight)})}),Wl(()=>{document.removeEventListener("mousemove",y)}),(R,T)=>(Ni(),Yi(sn,null,[ke("div",{ref_key:"canvasRef",ref:c,class:"fixed top-0 left-0 w-full h-full -z-10 bg-gray-900 bg-gradient-to-b from-gray-900 via-purple-900/20 to-black"},null,512),ke("main",gM,[Wt(pm,{name:"fade",mode:"out-in"},{default:Pf(()=>[e.value==="selection"?(Ni(),Yi("div",_M,[T[14]||(T[14]=ke("h1",{class:"text-5xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 drop-shadow-lg"}," STATUS CHECK ",-1)),ke("div",xM,[ke("button",{onClick:T[0]||(T[0]=U=>d("Single")),class:"btn-primary from-cyan-500 to-blue-600 ring-cyan-400"}," Single "),ke("button",{onClick:T[1]||(T[1]=U=>d("Taken")),class:"btn-primary from-purple-500 to-pink-600 ring-pink-400"}," Taken ")])])):e.value==="rejection"?(Ni(),Yi("div",vM,[T[15]||(T[15]=ke("h2",{class:"text-3xl font-bold mb-4 text-red-100"},"ACCESS DENIED",-1)),T[16]||(T[16]=ke("div",{class:"w-16 h-1 bg-red-500 mb-6 rounded-full"},null,-1)),T[17]||(T[17]=ke("p",{class:"text-lg mb-8 text-red-200"},[cr("Only "),ke("strong",{class:"text-white border-b-2 border-red-500"},"Single"),cr(" players can enter the game")],-1)),ke("button",{onClick:T[2]||(T[2]=U=>e.value="selection"),class:"text-sm text-gray-400 hover:text-white transition hover:scale-105"}," ← Return to Menu ")])):e.value==="game"?(Ni(),Yi("div",SM,[T[19]||(T[19]=ke("h2",{class:"text-3xl font-bold mb-2 tracking-wider drop-shadow-md"},"MAGIC TRIANGLE",-1)),T[20]||(T[20]=ke("div",{class:"bg-white/5 p-4 rounded-xl mb-6 text-center backdrop-blur-md border border-white/10 shadow-xl"},[ke("p",{class:"text-sm text-blue-100"},[cr("Fill the empty nodes."),ke("br"),cr("Sides must sum to "),ke("strong",{class:"text-cyan-300 text-lg"},"20"),cr(".")])],-1)),ke("div",MM,[T[18]||(T[18]=ke("svg",{class:"absolute top-0 left-0 w-full h-full -z-10 stroke-cyan-500/30 stroke-[4px] drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]"},[ke("polygon",{points:"170,25 315,275 25,275",fill:"none","stroke-linejoin":"round","stroke-linecap":"round"})],-1)),vn(ke("input",{"onUpdate:modelValue":T[3]||(T[3]=U=>l.value[0]=U),disabled:!0,class:"node locked animate-pulse-slow",style:{top:"0px",left:"146px"}},null,512),[[Mn,l.value[0]]]),vn(ke("input",{"onUpdate:modelValue":T[4]||(T[4]=U=>l.value[3]=U),disabled:!0,class:"node locked animate-pulse-slow",style:{top:"255px",left:"290px"}},null,512),[[Mn,l.value[3]]]),vn(ke("input",{"onUpdate:modelValue":T[5]||(T[5]=U=>l.value[6]=U),disabled:!0,class:"node locked animate-pulse-slow",style:{top:"255px",left:"5px"}},null,512),[[Mn,l.value[6]]]),vn(ke("input",{"onUpdate:modelValue":T[6]||(T[6]=U=>l.value[1]=U),class:"node editable",style:{top:"85px",left:"195px"},placeholder:"?"},null,512),[[Mn,l.value[1]]]),vn(ke("input",{"onUpdate:modelValue":T[7]||(T[7]=U=>l.value[2]=U),class:"node editable",style:{top:"170px",left:"242px"},placeholder:"?"},null,512),[[Mn,l.value[2]]]),vn(ke("input",{"onUpdate:modelValue":T[8]||(T[8]=U=>l.value[4]=U),class:"node editable",style:{top:"255px",left:"195px"},placeholder:"?"},null,512),[[Mn,l.value[4]]]),vn(ke("input",{"onUpdate:modelValue":T[9]||(T[9]=U=>l.value[5]=U),class:"node editable",style:{top:"255px",left:"100px"},placeholder:"?"},null,512),[[Mn,l.value[5]]]),vn(ke("input",{"onUpdate:modelValue":T[10]||(T[10]=U=>l.value[7]=U),class:"node editable",style:{top:"170px",left:"52px"},placeholder:"?"},null,512),[[Mn,l.value[7]]]),vn(ke("input",{"onUpdate:modelValue":T[11]||(T[11]=U=>l.value[8]=U),class:"node editable",style:{top:"85px",left:"100px"},placeholder:"?"},null,512),[[Mn,l.value[8]]])]),ke("button",{onClick:b,class:"px-12 py-4 bg-gradient-to-r from-green-500 to-emerald-700 hover:from-green-400 hover:to-emerald-600 rounded-full font-bold shadow-[0_0_30px_rgba(34,197,94,0.4)] transition-all transform active:scale-95 text-lg tracking-wide border border-green-400/30"}," VERIFY SUMS "),ke("p",{class:ha(["mt-6 text-center font-bold text-lg h-8 transition-all duration-300",r.value])},Hs(i.value),3)])):e.value==="win"?(Ni(),Yi("div",EM,[T[23]||(T[23]=ke("h1",{class:"text-5xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-br from-yellow-300 via-orange-400 to-yellow-500 drop-shadow-sm"}," VICTORY ",-1)),T[24]||(T[24]=ke("p",{class:"text-yellow-100/80 mb-8 text-sm tracking-widest uppercase"},"Genius Verified",-1)),ke("div",yM,[T[22]||(T[22]=ke("label",{class:"text-left text-xs font-bold text-yellow-500/80 uppercase tracking-widest pl-1"},"Mobile Number",-1)),ke("div",bM,[T[21]||(T[21]=ke("div",{class:"bg-gray-800/80 border border-gray-600 rounded-lg px-3 py-3 flex items-center gap-2 text-gray-300 select-none"},[ke("span",null,"🇺🇸"),ke("span",{class:"font-bold font-mono text-gray-400"},"+1")],-1)),vn(ke("input",{"onUpdate:modelValue":T[12]||(T[12]=U=>o.value=U),type:"tel",maxlength:"10",placeholder:"555 000 0000",class:"flex-1 bg-gray-900/50 text-white font-mono text-lg px-4 py-3 rounded-lg outline-none border border-gray-600 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all placeholder-gray-600",onInput:T[13]||(T[13]=U=>o.value=o.value.replace(/\D/g,""))},null,544),[[Mn,o.value]])]),s.value?(Ni(),Yi("p",TM,Hs(s.value),1)):Pc("",!0),ke("button",{onClick:A,disabled:a.value,class:"mt-6 w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-300 hover:to-orange-400 text-black font-black py-4 px-6 rounded-lg transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-1"},Hs(a.value?"TRANSMITTING...":"CLAIM REWARD"),9,AM)])])):Pc("",!0)]),_:1})])],64))}},DM=mM(PM,[["__scopeId","data-v-510c39d1"]]);Om(DM).mount("#app");
