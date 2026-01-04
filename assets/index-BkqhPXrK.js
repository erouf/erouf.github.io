(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function Fu(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const pt={},ds=[],si=()=>{},Hd=()=>!1,$o=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Ou=n=>n.startsWith("onUpdate:"),nn=Object.assign,Bu=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},G_=Object.prototype.hasOwnProperty,st=(n,e)=>G_.call(n,e),ze=Array.isArray,ps=n=>Da(n)==="[object Map]",Zo=n=>Da(n)==="[object Set]",Gf=n=>Da(n)==="[object Date]",je=n=>typeof n=="function",Dt=n=>typeof n=="string",ci=n=>typeof n=="symbol",xt=n=>n!==null&&typeof n=="object",Gd=n=>(xt(n)||je(n))&&je(n.then)&&je(n.catch),Wd=Object.prototype.toString,Da=n=>Wd.call(n),W_=n=>Da(n).slice(8,-1),Xd=n=>Da(n)==="[object Object]",zu=n=>Dt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,ia=Fu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Jo=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},X_=/-\w/g,or=Jo(n=>n.replace(X_,e=>e.slice(1).toUpperCase())),q_=/\B([A-Z])/g,dr=Jo(n=>n.replace(q_,"-$1").toLowerCase()),qd=Jo(n=>n.charAt(0).toUpperCase()+n.slice(1)),xl=Jo(n=>n?`on${qd(n)}`:""),rr=(n,e)=>!Object.is(n,e),go=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Yd=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Qo=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Wf;const el=()=>Wf||(Wf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function da(n){if(ze(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=Dt(i)?$_(i):da(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(Dt(n)||xt(n))return n}const Y_=/;(?![^(]*\))/g,j_=/:([^]+)/,K_=/\/\*[^]*?\*\//g;function $_(n){const e={};return n.replace(K_,"").split(Y_).forEach(t=>{if(t){const i=t.split(j_);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function pa(n){let e="";if(Dt(n))e=n;else if(ze(n))for(let t=0;t<n.length;t++){const i=pa(n[t]);i&&(e+=i+" ")}else if(xt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Z_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",J_=Fu(Z_);function jd(n){return!!n||n===""}function Q_(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=tl(n[i],e[i]);return t}function tl(n,e){if(n===e)return!0;let t=Gf(n),i=Gf(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=ci(n),i=ci(e),t||i)return n===e;if(t=ze(n),i=ze(e),t||i)return t&&i?Q_(n,e):!1;if(t=xt(n),i=xt(e),t||i){if(!t||!i)return!1;const r=Object.keys(n).length,s=Object.keys(e).length;if(r!==s)return!1;for(const a in n){const o=n.hasOwnProperty(a),l=e.hasOwnProperty(a);if(o&&!l||!o&&l||!tl(n[a],e[a]))return!1}}return String(n)===String(e)}function eg(n,e){return n.findIndex(t=>tl(t,e))}const Kd=n=>!!(n&&n.__v_isRef===!0),wr=n=>Dt(n)?n:n==null?"":ze(n)||xt(n)&&(n.toString===Wd||!je(n.toString))?Kd(n)?wr(n.value):JSON.stringify(n,$d,2):String(n),$d=(n,e)=>Kd(e)?$d(n,e.value):ps(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[vl(i,s)+" =>"]=r,t),{})}:Zo(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>vl(t))}:ci(e)?vl(e):xt(e)&&!ze(e)&&!Xd(e)?String(e):e,vl=(n,e="")=>{var t;return ci(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};let ln;class tg{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=ln,!e&&ln&&(this.index=(ln.scopes||(ln.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=ln;try{return ln=this,e()}finally{ln=t}}}on(){++this._on===1&&(this.prevScope=ln,ln=this)}off(){this._on>0&&--this._on===0&&(ln=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function ng(){return ln}let gt;const Sl=new WeakSet;class Zd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ln&&ln.active&&ln.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Sl.has(this)&&(Sl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Qd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Xf(this),ep(this);const e=gt,t=qn;gt=this,qn=!0;try{return this.fn()}finally{tp(this),gt=e,qn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Hu(e);this.deps=this.depsTail=void 0,Xf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Sl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){_c(this)&&this.run()}get dirty(){return _c(this)}}let Jd=0,ra,sa;function Qd(n,e=!1){if(n.flags|=8,e){n.next=sa,sa=n;return}n.next=ra,ra=n}function ku(){Jd++}function Vu(){if(--Jd>0)return;if(sa){let e=sa;for(sa=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;ra;){let e=ra;for(ra=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function ep(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function tp(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),Hu(i),ig(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function _c(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(np(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function np(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===ma)||(n.globalVersion=ma,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!_c(n))))return;n.flags|=2;const e=n.dep,t=gt,i=qn;gt=n,qn=!0;try{ep(n);const r=n.fn(n._value);(e.version===0||rr(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{gt=t,qn=i,tp(n),n.flags&=-3}}function Hu(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Hu(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function ig(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let qn=!0;const ip=[];function Ui(){ip.push(qn),qn=!1}function Ni(){const n=ip.pop();qn=n===void 0?!0:n}function Xf(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=gt;gt=void 0;try{e()}finally{gt=t}}}let ma=0;class rg{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Gu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!gt||!qn||gt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==gt)t=this.activeLink=new rg(gt,this),gt.deps?(t.prevDep=gt.depsTail,gt.depsTail.nextDep=t,gt.depsTail=t):gt.deps=gt.depsTail=t,rp(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=gt.depsTail,t.nextDep=void 0,gt.depsTail.nextDep=t,gt.depsTail=t,gt.deps===t&&(gt.deps=i)}return t}trigger(e){this.version++,ma++,this.notify(e)}notify(e){ku();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Vu()}}}function rp(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)rp(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const gc=new WeakMap,Fr=Symbol(""),xc=Symbol(""),_a=Symbol("");function Gt(n,e,t){if(qn&&gt){let i=gc.get(n);i||gc.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new Gu),r.map=i,r.key=t),r.track()}}function Ai(n,e,t,i,r,s){const a=gc.get(n);if(!a){ma++;return}const o=l=>{l&&l.trigger()};if(ku(),e==="clear")a.forEach(o);else{const l=ze(n),c=l&&zu(t);if(l&&t==="length"){const u=Number(i);a.forEach((f,h)=>{(h==="length"||h===_a||!ci(h)&&h>=u)&&o(f)})}else switch((t!==void 0||a.has(void 0))&&o(a.get(t)),c&&o(a.get(_a)),e){case"add":l?c&&o(a.get("length")):(o(a.get(Fr)),ps(n)&&o(a.get(xc)));break;case"delete":l||(o(a.get(Fr)),ps(n)&&o(a.get(xc)));break;case"set":ps(n)&&o(a.get(Fr));break}}Vu()}function Yr(n){const e=rt(n);return e===n?e:(Gt(e,"iterate",_a),zn(n)?e:e.map(Yn))}function nl(n){return Gt(n=rt(n),"iterate",_a),n}function Ki(n,e){return Fi(n)?Or(n)?Es(Yn(e)):Es(e):Yn(e)}const sg={__proto__:null,[Symbol.iterator](){return Ml(this,Symbol.iterator,n=>Ki(this,n))},concat(...n){return Yr(this).concat(...n.map(e=>ze(e)?Yr(e):e))},entries(){return Ml(this,"entries",n=>(n[1]=Ki(this,n[1]),n))},every(n,e){return gi(this,"every",n,e,void 0,arguments)},filter(n,e){return gi(this,"filter",n,e,t=>t.map(i=>Ki(this,i)),arguments)},find(n,e){return gi(this,"find",n,e,t=>Ki(this,t),arguments)},findIndex(n,e){return gi(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return gi(this,"findLast",n,e,t=>Ki(this,t),arguments)},findLastIndex(n,e){return gi(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return gi(this,"forEach",n,e,void 0,arguments)},includes(...n){return yl(this,"includes",n)},indexOf(...n){return yl(this,"indexOf",n)},join(n){return Yr(this).join(n)},lastIndexOf(...n){return yl(this,"lastIndexOf",n)},map(n,e){return gi(this,"map",n,e,void 0,arguments)},pop(){return ks(this,"pop")},push(...n){return ks(this,"push",n)},reduce(n,...e){return qf(this,"reduce",n,e)},reduceRight(n,...e){return qf(this,"reduceRight",n,e)},shift(){return ks(this,"shift")},some(n,e){return gi(this,"some",n,e,void 0,arguments)},splice(...n){return ks(this,"splice",n)},toReversed(){return Yr(this).toReversed()},toSorted(n){return Yr(this).toSorted(n)},toSpliced(...n){return Yr(this).toSpliced(...n)},unshift(...n){return ks(this,"unshift",n)},values(){return Ml(this,"values",n=>Ki(this,n))}};function Ml(n,e,t){const i=nl(n),r=i[e]();return i!==n&&!zn(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const ag=Array.prototype;function gi(n,e,t,i,r,s){const a=nl(n),o=a!==n&&!zn(n),l=a[e];if(l!==ag[e]){const f=l.apply(n,s);return o?Yn(f):f}let c=t;a!==n&&(o?c=function(f,h){return t.call(this,Ki(n,f),h,n)}:t.length>2&&(c=function(f,h){return t.call(this,f,h,n)}));const u=l.call(a,c,i);return o&&r?r(u):u}function qf(n,e,t,i){const r=nl(n);let s=t;return r!==n&&(zn(n)?t.length>3&&(s=function(a,o,l){return t.call(this,a,o,l,n)}):s=function(a,o,l){return t.call(this,a,Ki(n,o),l,n)}),r[e](s,...i)}function yl(n,e,t){const i=rt(n);Gt(i,"iterate",_a);const r=i[e](...t);return(r===-1||r===!1)&&Yu(t[0])?(t[0]=rt(t[0]),i[e](...t)):r}function ks(n,e,t=[]){Ui(),ku();const i=rt(n)[e].apply(n,t);return Vu(),Ni(),i}const og=Fu("__proto__,__v_isRef,__isVue"),sp=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(ci));function lg(n){ci(n)||(n=String(n));const e=rt(this);return Gt(e,"has",n),e.hasOwnProperty(n)}class ap{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?xg:up:s?cp:lp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=ze(e);if(!r){let l;if(a&&(l=sg[t]))return l;if(t==="hasOwnProperty")return lg}const o=Reflect.get(e,t,qt(e)?e:i);if((ci(t)?sp.has(t):og(t))||(r||Gt(e,"get",t),s))return o;if(qt(o)){const l=a&&zu(t)?o:o.value;return r&&xt(l)?Sc(l):l}return xt(o)?r?Sc(o):Xu(o):o}}class op extends ap{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const a=ze(e)&&zu(t);if(!this._isShallow){const c=Fi(s);if(!zn(i)&&!Fi(i)&&(s=rt(s),i=rt(i)),!a&&qt(s)&&!qt(i))return c||(s.value=i),!0}const o=a?Number(t)<e.length:st(e,t),l=Reflect.set(e,t,i,qt(e)?e:r);return e===rt(r)&&(o?rr(i,s)&&Ai(e,"set",t,i):Ai(e,"add",t,i)),l}deleteProperty(e,t){const i=st(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&Ai(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!ci(t)||!sp.has(t))&&Gt(e,"has",t),i}ownKeys(e){return Gt(e,"iterate",ze(e)?"length":Fr),Reflect.ownKeys(e)}}class cg extends ap{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const ug=new op,fg=new cg,hg=new op(!0);const vc=n=>n,Va=n=>Reflect.getPrototypeOf(n);function dg(n,e,t){return function(...i){const r=this.__v_raw,s=rt(r),a=ps(s),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=r[n](...i),u=t?vc:e?Es:Yn;return!e&&Gt(s,"iterate",l?xc:Fr),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:o?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function Ha(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function pg(n,e){const t={get(r){const s=this.__v_raw,a=rt(s),o=rt(r);n||(rr(r,o)&&Gt(a,"get",r),Gt(a,"get",o));const{has:l}=Va(a),c=e?vc:n?Es:Yn;if(l.call(a,r))return c(s.get(r));if(l.call(a,o))return c(s.get(o));s!==a&&s.get(r)},get size(){const r=this.__v_raw;return!n&&Gt(rt(r),"iterate",Fr),r.size},has(r){const s=this.__v_raw,a=rt(s),o=rt(r);return n||(rr(r,o)&&Gt(a,"has",r),Gt(a,"has",o)),r===o?s.has(r):s.has(r)||s.has(o)},forEach(r,s){const a=this,o=a.__v_raw,l=rt(o),c=e?vc:n?Es:Yn;return!n&&Gt(l,"iterate",Fr),o.forEach((u,f)=>r.call(s,c(u),c(f),a))}};return nn(t,n?{add:Ha("add"),set:Ha("set"),delete:Ha("delete"),clear:Ha("clear")}:{add(r){!e&&!zn(r)&&!Fi(r)&&(r=rt(r));const s=rt(this);return Va(s).has.call(s,r)||(s.add(r),Ai(s,"add",r,r)),this},set(r,s){!e&&!zn(s)&&!Fi(s)&&(s=rt(s));const a=rt(this),{has:o,get:l}=Va(a);let c=o.call(a,r);c||(r=rt(r),c=o.call(a,r));const u=l.call(a,r);return a.set(r,s),c?rr(s,u)&&Ai(a,"set",r,s):Ai(a,"add",r,s),this},delete(r){const s=rt(this),{has:a,get:o}=Va(s);let l=a.call(s,r);l||(r=rt(r),l=a.call(s,r)),o&&o.call(s,r);const c=s.delete(r);return l&&Ai(s,"delete",r,void 0),c},clear(){const r=rt(this),s=r.size!==0,a=r.clear();return s&&Ai(r,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=dg(r,n,e)}),t}function Wu(n,e){const t=pg(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(st(t,r)&&r in i?t:i,r,s)}const mg={get:Wu(!1,!1)},_g={get:Wu(!1,!0)},gg={get:Wu(!0,!1)};const lp=new WeakMap,cp=new WeakMap,up=new WeakMap,xg=new WeakMap;function vg(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Sg(n){return n.__v_skip||!Object.isExtensible(n)?0:vg(W_(n))}function Xu(n){return Fi(n)?n:qu(n,!1,ug,mg,lp)}function Mg(n){return qu(n,!1,hg,_g,cp)}function Sc(n){return qu(n,!0,fg,gg,up)}function qu(n,e,t,i,r){if(!xt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=Sg(n);if(s===0)return n;const a=r.get(n);if(a)return a;const o=new Proxy(n,s===2?i:t);return r.set(n,o),o}function Or(n){return Fi(n)?Or(n.__v_raw):!!(n&&n.__v_isReactive)}function Fi(n){return!!(n&&n.__v_isReadonly)}function zn(n){return!!(n&&n.__v_isShallow)}function Yu(n){return n?!!n.__v_raw:!1}function rt(n){const e=n&&n.__v_raw;return e?rt(e):n}function yg(n){return!st(n,"__v_skip")&&Object.isExtensible(n)&&Yd(n,"__v_skip",!0),n}const Yn=n=>xt(n)?Xu(n):n,Es=n=>xt(n)?Sc(n):n;function qt(n){return n?n.__v_isRef===!0:!1}function kt(n){return bg(n,!1)}function bg(n,e){return qt(n)?n:new Eg(n,e)}class Eg{constructor(e,t){this.dep=new Gu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:rt(e),this._value=t?e:Yn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||zn(e)||Fi(e);e=i?e:rt(e),rr(e,t)&&(this._rawValue=e,this._value=i?e:Yn(e),this.dep.trigger())}}function Tg(n){return qt(n)?n.value:n}const Ag={get:(n,e,t)=>e==="__v_raw"?n:Tg(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return qt(r)&&!qt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function fp(n){return Or(n)?n:new Proxy(n,Ag)}class wg{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Gu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ma-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&gt!==this)return Qd(this,!0),!0}get value(){const e=this.dep.track();return np(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Rg(n,e,t=!1){let i,r;return je(n)?i=n:(i=n.get,r=n.set),new wg(i,r,t)}const Ga={},Lo=new WeakMap;let Rr;function Cg(n,e=!1,t=Rr){if(t){let i=Lo.get(t);i||Lo.set(t,i=[]),i.push(n)}}function Pg(n,e,t=pt){const{immediate:i,deep:r,once:s,scheduler:a,augmentJob:o,call:l}=t,c=S=>r?S:zn(S)||r===!1||r===0?wi(S,1):wi(S);let u,f,h,d,g=!1,_=!1;if(qt(n)?(f=()=>n.value,g=zn(n)):Or(n)?(f=()=>c(n),g=!0):ze(n)?(_=!0,g=n.some(S=>Or(S)||zn(S)),f=()=>n.map(S=>{if(qt(S))return S.value;if(Or(S))return c(S);if(je(S))return l?l(S,2):S()})):je(n)?e?f=l?()=>l(n,2):n:f=()=>{if(h){Ui();try{h()}finally{Ni()}}const S=Rr;Rr=u;try{return l?l(n,3,[d]):n(d)}finally{Rr=S}}:f=si,e&&r){const S=f,y=r===!0?1/0:r;f=()=>wi(S(),y)}const m=ng(),p=()=>{u.stop(),m&&m.active&&Bu(m.effects,u)};if(s&&e){const S=e;e=(...y)=>{S(...y),p()}}let M=_?new Array(n.length).fill(Ga):Ga;const E=S=>{if(!(!(u.flags&1)||!u.dirty&&!S))if(e){const y=u.run();if(r||g||(_?y.some((w,R)=>rr(w,M[R])):rr(y,M))){h&&h();const w=Rr;Rr=u;try{const R=[y,M===Ga?void 0:_&&M[0]===Ga?[]:M,d];M=y,l?l(e,3,R):e(...R)}finally{Rr=w}}}else u.run()};return o&&o(E),u=new Zd(f),u.scheduler=a?()=>a(E,!1):E,d=S=>Cg(S,!1,u),h=u.onStop=()=>{const S=Lo.get(u);if(S){if(l)l(S,4);else for(const y of S)y();Lo.delete(u)}},e?i?E(!0):M=u.run():a?a(E.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function wi(n,e=1/0,t){if(e<=0||!xt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,qt(n))wi(n.value,e,t);else if(ze(n))for(let i=0;i<n.length;i++)wi(n[i],e,t);else if(Zo(n)||ps(n))n.forEach(i=>{wi(i,e,t)});else if(Xd(n)){for(const i in n)wi(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&wi(n[i],e,t)}return n}function La(n,e,t,i){try{return i?n(...i):n()}catch(r){il(r,e,t)}}function ui(n,e,t,i){if(je(n)){const r=La(n,e,t,i);return r&&Gd(r)&&r.catch(s=>{il(s,e,t)}),r}if(ze(n)){const r=[];for(let s=0;s<n.length;s++)r.push(ui(n[s],e,t,i));return r}}function il(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||pt;if(e){let o=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;o;){const u=o.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}o=o.parent}if(s){Ui(),La(s,null,10,[n,l,c]),Ni();return}}Dg(n,t,r,i,a)}function Dg(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const Jt=[];let Zn=-1;const ms=[];let $i=null,cs=0;const hp=Promise.resolve();let Io=null;function dp(n){const e=Io||hp;return n?e.then(this?n.bind(this):n):e}function Lg(n){let e=Zn+1,t=Jt.length;for(;e<t;){const i=e+t>>>1,r=Jt[i],s=ga(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function ju(n){if(!(n.flags&1)){const e=ga(n),t=Jt[Jt.length-1];!t||!(n.flags&2)&&e>=ga(t)?Jt.push(n):Jt.splice(Lg(e),0,n),n.flags|=1,pp()}}function pp(){Io||(Io=hp.then(_p))}function Ig(n){ze(n)?ms.push(...n):$i&&n.id===-1?$i.splice(cs+1,0,n):n.flags&1||(ms.push(n),n.flags|=1),pp()}function Yf(n,e,t=Zn+1){for(;t<Jt.length;t++){const i=Jt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Jt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function mp(n){if(ms.length){const e=[...new Set(ms)].sort((t,i)=>ga(t)-ga(i));if(ms.length=0,$i){$i.push(...e);return}for($i=e,cs=0;cs<$i.length;cs++){const t=$i[cs];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}$i=null,cs=0}}const ga=n=>n.id==null?n.flags&2?-1:1/0:n.id;function _p(n){try{for(Zn=0;Zn<Jt.length;Zn++){const e=Jt[Zn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),La(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Zn<Jt.length;Zn++){const e=Jt[Zn];e&&(e.flags&=-2)}Zn=-1,Jt.length=0,mp(),Io=null,(Jt.length||ms.length)&&_p()}}let Fn=null,gp=null;function Uo(n){const e=Fn;return Fn=n,gp=n&&n.type.__scopeId||null,e}function Ug(n,e=Fn,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&ih(-1);const s=Uo(e);let a;try{a=n(...r)}finally{Uo(s),i._d&&ih(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function bl(n,e){if(Fn===null)return n;const t=ol(Fn),i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,a,o,l=pt]=e[r];s&&(je(s)&&(s={mounted:s,updated:s}),s.deep&&wi(a),i.push({dir:s,instance:t,value:a,oldValue:void 0,arg:o,modifiers:l}))}return n}function gr(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(Ui(),ui(l,t,8,[n.el,o,n,e]),Ni())}}function Ng(n,e){if(Qt){let t=Qt.provides;const i=Qt.parent&&Qt.parent.provides;i===t&&(t=Qt.provides=Object.create(i)),t[n]=e}}function xo(n,e,t=!1){const i=N0();if(i||_s){let r=_s?_s._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&je(e)?e.call(i&&i.proxy):e}}const Fg=Symbol.for("v-scx"),Og=()=>xo(Fg);function El(n,e,t){return xp(n,e,t)}function xp(n,e,t=pt){const{immediate:i,deep:r,flush:s,once:a}=t,o=nn({},t),l=e&&i||!e&&s!=="post";let c;if(va){if(s==="sync"){const d=Og();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=si,d.resume=si,d.pause=si,d}}const u=Qt;o.call=(d,g,_)=>ui(d,u,g,_);let f=!1;s==="post"?o.scheduler=d=>{vn(d,u&&u.suspense)}:s!=="sync"&&(f=!0,o.scheduler=(d,g)=>{g?d():ju(d)}),o.augmentJob=d=>{e&&(d.flags|=4),f&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const h=Pg(n,e,o);return va&&(c?c.push(h):l&&h()),h}function Bg(n,e,t){const i=this.proxy,r=Dt(n)?n.includes(".")?vp(i,n):()=>i[n]:n.bind(i,i);let s;je(e)?s=e:(s=e.handler,t=e);const a=Ia(this),o=xp(r,s.bind(i),t);return a(),o}function vp(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const zg=Symbol("_vte"),kg=n=>n.__isTeleport,Vg=Symbol("_leaveCb");function Ku(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Ku(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Sp(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}const No=new WeakMap;function aa(n,e,t,i,r=!1){if(ze(n)){n.forEach((g,_)=>aa(g,e&&(ze(e)?e[_]:e),t,i,r));return}if(oa(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&aa(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?ol(i.component):i.el,a=r?null:s,{i:o,r:l}=n,c=e&&e.r,u=o.refs===pt?o.refs={}:o.refs,f=o.setupState,h=rt(f),d=f===pt?Hd:g=>st(h,g);if(c!=null&&c!==l){if(jf(e),Dt(c))u[c]=null,d(c)&&(f[c]=null);else if(qt(c)){c.value=null;const g=e;g.k&&(u[g.k]=null)}}if(je(l))La(l,o,12,[a,u]);else{const g=Dt(l),_=qt(l);if(g||_){const m=()=>{if(n.f){const p=g?d(l)?f[l]:u[l]:l.value;if(r)ze(p)&&Bu(p,s);else if(ze(p))p.includes(s)||p.push(s);else if(g)u[l]=[s],d(l)&&(f[l]=u[l]);else{const M=[s];l.value=M,n.k&&(u[n.k]=M)}}else g?(u[l]=a,d(l)&&(f[l]=a)):_&&(l.value=a,n.k&&(u[n.k]=a))};if(a){const p=()=>{m(),No.delete(n)};p.id=-1,No.set(n,p),vn(p,t)}else jf(n),m()}}}function jf(n){const e=No.get(n);e&&(e.flags|=8,No.delete(n))}el().requestIdleCallback;el().cancelIdleCallback;const oa=n=>!!n.type.__asyncLoader,Mp=n=>n.type.__isKeepAlive;function Hg(n,e){yp(n,"a",e)}function Gg(n,e){yp(n,"da",e)}function yp(n,e,t=Qt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(rl(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Mp(r.parent.vnode)&&Wg(i,e,t,r),r=r.parent}}function Wg(n,e,t,i){const r=rl(e,n,i,!0);$u(()=>{Bu(i[e],r)},t)}function rl(n,e,t=Qt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...a)=>{Ui();const o=Ia(t),l=ui(e,t,n,a);return o(),Ni(),l});return i?r.unshift(s):r.push(s),s}}const Vi=n=>(e,t=Qt)=>{(!va||n==="sp")&&rl(n,(...i)=>e(...i),t)},Xg=Vi("bm"),bp=Vi("m"),qg=Vi("bu"),Yg=Vi("u"),jg=Vi("bum"),$u=Vi("um"),Kg=Vi("sp"),$g=Vi("rtg"),Zg=Vi("rtc");function Jg(n,e=Qt){rl("ec",n,e)}const Qg=Symbol.for("v-ndc");function e0(n,e,t,i){let r;const s=t,a=ze(n);if(a||Dt(n)){const o=a&&Or(n);let l=!1,c=!1;o&&(l=!zn(n),c=Fi(n),n=nl(n)),r=new Array(n.length);for(let u=0,f=n.length;u<f;u++)r[u]=e(l?c?Es(Yn(n[u])):Yn(n[u]):n[u],u,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let o=0;o<n;o++)r[o]=e(o+1,o,void 0,s)}else if(xt(n))if(n[Symbol.iterator])r=Array.from(n,(o,l)=>e(o,l,void 0,s));else{const o=Object.keys(n);r=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const u=o[l];r[l]=e(n[u],u,l,s)}}else r=[];return r}const Mc=n=>n?Gp(n)?ol(n):Mc(n.parent):null,la=nn(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Mc(n.parent),$root:n=>Mc(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Tp(n),$forceUpdate:n=>n.f||(n.f=()=>{ju(n.update)}),$nextTick:n=>n.n||(n.n=dp.bind(n.proxy)),$watch:n=>Bg.bind(n)}),Tl=(n,e)=>n!==pt&&!n.__isScriptSetup&&st(n,e),t0={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=n;if(e[0]!=="$"){const h=a[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Tl(i,e))return a[e]=1,i[e];if(r!==pt&&st(r,e))return a[e]=2,r[e];if(st(s,e))return a[e]=3,s[e];if(t!==pt&&st(t,e))return a[e]=4,t[e];yc&&(a[e]=0)}}const c=la[e];let u,f;if(c)return e==="$attrs"&&Gt(n.attrs,"get",""),c(n);if((u=o.__cssModules)&&(u=u[e]))return u;if(t!==pt&&st(t,e))return a[e]=4,t[e];if(f=l.config.globalProperties,st(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Tl(r,e)?(r[e]=t,!0):i!==pt&&st(i,e)?(i[e]=t,!0):st(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:a}},o){let l;return!!(t[o]||n!==pt&&o[0]!=="$"&&st(n,o)||Tl(e,o)||st(s,o)||st(i,o)||st(la,o)||st(r.config.globalProperties,o)||(l=a.__cssModules)&&l[o])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:st(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Kf(n){return ze(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let yc=!0;function n0(n){const e=Tp(n),t=n.proxy,i=n.ctx;yc=!1,e.beforeCreate&&$f(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:g,activated:_,deactivated:m,beforeDestroy:p,beforeUnmount:M,destroyed:E,unmounted:S,render:y,renderTracked:w,renderTriggered:R,errorCaptured:L,serverPrefetch:v,expose:A,inheritAttrs:I,components:z,directives:B,filters:Z}=e;if(c&&i0(c,i,null),a)for(const F in a){const Y=a[F];je(Y)&&(i[F]=Y.bind(t))}if(r){const F=r.call(t,t);xt(F)&&(n.data=Xu(F))}if(yc=!0,s)for(const F in s){const Y=s[F],pe=je(Y)?Y.bind(t,t):je(Y.get)?Y.get.bind(t,t):si,de=!je(Y)&&je(Y.set)?Y.set.bind(t):si,se=Ac({get:pe,set:de});Object.defineProperty(i,F,{enumerable:!0,configurable:!0,get:()=>se.value,set:te=>se.value=te})}if(o)for(const F in o)Ep(o[F],i,t,F);if(l){const F=je(l)?l.call(t):l;Reflect.ownKeys(F).forEach(Y=>{Ng(Y,F[Y])})}u&&$f(u,n,"c");function k(F,Y){ze(Y)?Y.forEach(pe=>F(pe.bind(t))):Y&&F(Y.bind(t))}if(k(Xg,f),k(bp,h),k(qg,d),k(Yg,g),k(Hg,_),k(Gg,m),k(Jg,L),k(Zg,w),k($g,R),k(jg,M),k($u,S),k(Kg,v),ze(A))if(A.length){const F=n.exposed||(n.exposed={});A.forEach(Y=>{Object.defineProperty(F,Y,{get:()=>t[Y],set:pe=>t[Y]=pe,enumerable:!0})})}else n.exposed||(n.exposed={});y&&n.render===si&&(n.render=y),I!=null&&(n.inheritAttrs=I),z&&(n.components=z),B&&(n.directives=B),v&&Sp(n)}function i0(n,e,t=si){ze(n)&&(n=bc(n));for(const i in n){const r=n[i];let s;xt(r)?"default"in r?s=xo(r.from||i,r.default,!0):s=xo(r.from||i):s=xo(r),qt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[i]=s}}function $f(n,e,t){ui(ze(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Ep(n,e,t,i){let r=i.includes(".")?vp(t,i):()=>t[i];if(Dt(n)){const s=e[n];je(s)&&El(r,s)}else if(je(n))El(r,n.bind(t));else if(xt(n))if(ze(n))n.forEach(s=>Ep(s,e,t,i));else{const s=je(n.handler)?n.handler.bind(t):e[n.handler];je(s)&&El(r,s,n)}}function Tp(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=n.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>Fo(l,c,a,!0)),Fo(l,e,a)),xt(e)&&s.set(e,l),l}function Fo(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&Fo(n,s,t,!0),r&&r.forEach(a=>Fo(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=r0[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const r0={data:Zf,props:Jf,emits:Jf,methods:Zs,computed:Zs,beforeCreate:$t,created:$t,beforeMount:$t,mounted:$t,beforeUpdate:$t,updated:$t,beforeDestroy:$t,beforeUnmount:$t,destroyed:$t,unmounted:$t,activated:$t,deactivated:$t,errorCaptured:$t,serverPrefetch:$t,components:Zs,directives:Zs,watch:a0,provide:Zf,inject:s0};function Zf(n,e){return e?n?function(){return nn(je(n)?n.call(this,this):n,je(e)?e.call(this,this):e)}:e:n}function s0(n,e){return Zs(bc(n),bc(e))}function bc(n){if(ze(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function $t(n,e){return n?[...new Set([].concat(n,e))]:e}function Zs(n,e){return n?nn(Object.create(null),n,e):e}function Jf(n,e){return n?ze(n)&&ze(e)?[...new Set([...n,...e])]:nn(Object.create(null),Kf(n),Kf(e??{})):e}function a0(n,e){if(!n)return e;if(!e)return n;const t=nn(Object.create(null),n);for(const i in e)t[i]=$t(n[i],e[i]);return t}function Ap(){return{app:null,config:{isNativeTag:Hd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let o0=0;function l0(n,e){return function(i,r=null){je(i)||(i=nn({},i)),r!=null&&!xt(r)&&(r=null);const s=Ap(),a=new WeakSet,o=[];let l=!1;const c=s.app={_uid:o0++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:V0,get config(){return s.config},set config(u){},use(u,...f){return a.has(u)||(u&&je(u.install)?(a.add(u),u.install(c,...f)):je(u)&&(a.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,h){if(!l){const d=c._ceVNode||Pi(i,r);return d.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),n(d,u,h),l=!0,c._container=u,u.__vue_app__=c,ol(d.component)}},onUnmount(u){o.push(u)},unmount(){l&&(ui(o,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=_s;_s=c;try{return u()}finally{_s=f}}};return c}}let _s=null;const c0=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${or(e)}Modifiers`]||n[`${dr(e)}Modifiers`];function u0(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||pt;let r=t;const s=e.startsWith("update:"),a=s&&c0(i,e.slice(7));a&&(a.trim&&(r=t.map(u=>Dt(u)?u.trim():u)),a.number&&(r=t.map(Qo)));let o,l=i[o=xl(e)]||i[o=xl(or(e))];!l&&s&&(l=i[o=xl(dr(e))]),l&&ui(l,n,6,r);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,ui(c,n,6,r)}}const f0=new WeakMap;function wp(n,e,t=!1){const i=t?f0:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let a={},o=!1;if(!je(n)){const l=c=>{const u=wp(c,e,!0);u&&(o=!0,nn(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!o?(xt(n)&&i.set(n,null),null):(ze(s)?s.forEach(l=>a[l]=null):nn(a,s),xt(n)&&i.set(n,a),a)}function sl(n,e){return!n||!$o(e)?!1:(e=e.slice(2).replace(/Once$/,""),st(n,e[0].toLowerCase()+e.slice(1))||st(n,dr(e))||st(n,e))}function Qf(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:a,attrs:o,emit:l,render:c,renderCache:u,props:f,data:h,setupState:d,ctx:g,inheritAttrs:_}=n,m=Uo(n);let p,M;try{if(t.shapeFlag&4){const S=r||i,y=S;p=Qn(c.call(y,S,u,f,d,h,g)),M=o}else{const S=e;p=Qn(S.length>1?S(f,{attrs:o,slots:a,emit:l}):S(f,null)),M=e.props?o:h0(o)}}catch(S){ca.length=0,il(S,n,1),p=Pi(lr)}let E=p;if(M&&_!==!1){const S=Object.keys(M),{shapeFlag:y}=E;S.length&&y&7&&(s&&S.some(Ou)&&(M=d0(M,s)),E=Ts(E,M,!1,!0))}return t.dirs&&(E=Ts(E,null,!1,!0),E.dirs=E.dirs?E.dirs.concat(t.dirs):t.dirs),t.transition&&Ku(E,t.transition),p=E,Uo(m),p}const h0=n=>{let e;for(const t in n)(t==="class"||t==="style"||$o(t))&&((e||(e={}))[t]=n[t]);return e},d0=(n,e)=>{const t={};for(const i in n)(!Ou(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function p0(n,e,t){const{props:i,children:r,component:s}=n,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?eh(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(a[h]!==i[h]&&!sl(c,h))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?eh(i,a,c):!0:!!a;return!1}function eh(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!sl(t,s))return!0}return!1}function m0({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const Rp={},Cp=()=>Object.create(Rp),Pp=n=>Object.getPrototypeOf(n)===Rp;function _0(n,e,t,i=!1){const r={},s=Cp();n.propsDefaults=Object.create(null),Dp(n,e,r,s);for(const a in n.propsOptions[0])a in r||(r[a]=void 0);t?n.props=i?r:Mg(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function g0(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=n,o=rt(r),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(sl(n.emitsOptions,h))continue;const d=e[h];if(l)if(st(s,h))d!==s[h]&&(s[h]=d,c=!0);else{const g=or(h);r[g]=Ec(l,o,g,d,n,!1)}else d!==s[h]&&(s[h]=d,c=!0)}}}else{Dp(n,e,r,s)&&(c=!0);let u;for(const f in o)(!e||!st(e,f)&&((u=dr(f))===f||!st(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=Ec(l,o,f,void 0,n,!0)):delete r[f]);if(s!==o)for(const f in s)(!e||!st(e,f))&&(delete s[f],c=!0)}c&&Ai(n.attrs,"set","")}function Dp(n,e,t,i){const[r,s]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(ia(l))continue;const c=e[l];let u;r&&st(r,u=or(l))?!s||!s.includes(u)?t[u]=c:(o||(o={}))[u]=c:sl(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(s){const l=rt(t),c=o||pt;for(let u=0;u<s.length;u++){const f=s[u];t[f]=Ec(r,l,f,c[f],n,!st(c,f))}}return a}function Ec(n,e,t,i,r,s){const a=n[t];if(a!=null){const o=st(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&je(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=Ia(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===dr(t))&&(i=!0))}return i}const x0=new WeakMap;function Lp(n,e,t=!1){const i=t?x0:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,a={},o=[];let l=!1;if(!je(n)){const u=f=>{l=!0;const[h,d]=Lp(f,e,!0);nn(a,h),d&&o.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return xt(n)&&i.set(n,ds),ds;if(ze(s))for(let u=0;u<s.length;u++){const f=or(s[u]);th(f)&&(a[f]=pt)}else if(s)for(const u in s){const f=or(u);if(th(f)){const h=s[u],d=a[f]=ze(h)||je(h)?{type:h}:nn({},h),g=d.type;let _=!1,m=!0;if(ze(g))for(let p=0;p<g.length;++p){const M=g[p],E=je(M)&&M.name;if(E==="Boolean"){_=!0;break}else E==="String"&&(m=!1)}else _=je(g)&&g.name==="Boolean";d[0]=_,d[1]=m,(_||st(d,"default"))&&o.push(f)}}const c=[a,o];return xt(n)&&i.set(n,c),c}function th(n){return n[0]!=="$"&&!ia(n)}const Zu=n=>n==="_"||n==="_ctx"||n==="$stable",Ju=n=>ze(n)?n.map(Qn):[Qn(n)],v0=(n,e,t)=>{if(e._n)return e;const i=Ug((...r)=>Ju(e(...r)),t);return i._c=!1,i},Ip=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Zu(r))continue;const s=n[r];if(je(s))e[r]=v0(r,s,i);else if(s!=null){const a=Ju(s);e[r]=()=>a}}},Up=(n,e)=>{const t=Ju(e);n.slots.default=()=>t},Np=(n,e,t)=>{for(const i in e)(t||!Zu(i))&&(n[i]=e[i])},S0=(n,e,t)=>{const i=n.slots=Cp();if(n.vnode.shapeFlag&32){const r=e._;r?(Np(i,e,t),t&&Yd(i,"_",r,!0)):Ip(e,i)}else e&&Up(n,e)},M0=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,a=pt;if(i.shapeFlag&32){const o=e._;o?t&&o===1?s=!1:Np(r,e,t):(s=!e.$stable,Ip(e,r)),a=e}else e&&(Up(n,e),a={default:1});if(s)for(const o in r)!Zu(o)&&a[o]==null&&delete r[o]},vn=A0;function y0(n){return b0(n)}function b0(n,e){const t=el();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=si,insertStaticContent:g}=n,_=(P,U,G,ne=null,$=null,ie=null,C=void 0,ce=null,ae=!!U.dynamicChildren)=>{if(P===U)return;P&&!Vs(P,U)&&(ne=re(P),te(P,$,ie,!0),P=null),U.patchFlag===-2&&(ae=!1,U.dynamicChildren=null);const{type:ee,ref:oe,shapeFlag:b}=U;switch(ee){case al:m(P,U,G,ne);break;case lr:p(P,U,G,ne);break;case wl:P==null&&M(U,G,ne,C);break;case Un:z(P,U,G,ne,$,ie,C,ce,ae);break;default:b&1?y(P,U,G,ne,$,ie,C,ce,ae):b&6?B(P,U,G,ne,$,ie,C,ce,ae):(b&64||b&128)&&ee.process(P,U,G,ne,$,ie,C,ce,ae,Ce)}oe!=null&&$?aa(oe,P&&P.ref,ie,U||P,!U):oe==null&&P&&P.ref!=null&&aa(P.ref,null,ie,P,!0)},m=(P,U,G,ne)=>{if(P==null)i(U.el=o(U.children),G,ne);else{const $=U.el=P.el;U.children!==P.children&&c($,U.children)}},p=(P,U,G,ne)=>{P==null?i(U.el=l(U.children||""),G,ne):U.el=P.el},M=(P,U,G,ne)=>{[P.el,P.anchor]=g(P.children,U,G,ne,P.el,P.anchor)},E=({el:P,anchor:U},G,ne)=>{let $;for(;P&&P!==U;)$=h(P),i(P,G,ne),P=$;i(U,G,ne)},S=({el:P,anchor:U})=>{let G;for(;P&&P!==U;)G=h(P),r(P),P=G;r(U)},y=(P,U,G,ne,$,ie,C,ce,ae)=>{if(U.type==="svg"?C="svg":U.type==="math"&&(C="mathml"),P==null)w(U,G,ne,$,ie,C,ce,ae);else{const ee=P.el&&P.el._isVueCE?P.el:null;try{ee&&ee._beginPatch(),v(P,U,$,ie,C,ce,ae)}finally{ee&&ee._endPatch()}}},w=(P,U,G,ne,$,ie,C,ce)=>{let ae,ee;const{props:oe,shapeFlag:b,transition:x,dirs:D}=P;if(ae=P.el=a(P.type,ie,oe&&oe.is,oe),b&8?u(ae,P.children):b&16&&L(P.children,ae,null,ne,$,Al(P,ie),C,ce),D&&gr(P,null,ne,"created"),R(ae,P,P.scopeId,C,ne),oe){for(const J in oe)J!=="value"&&!ia(J)&&s(ae,J,null,oe[J],ie,ne);"value"in oe&&s(ae,"value",null,oe.value,ie),(ee=oe.onVnodeBeforeMount)&&Kn(ee,ne,P)}D&&gr(P,null,ne,"beforeMount");const X=E0($,x);X&&x.beforeEnter(ae),i(ae,U,G),((ee=oe&&oe.onVnodeMounted)||X||D)&&vn(()=>{ee&&Kn(ee,ne,P),X&&x.enter(ae),D&&gr(P,null,ne,"mounted")},$)},R=(P,U,G,ne,$)=>{if(G&&d(P,G),ne)for(let ie=0;ie<ne.length;ie++)d(P,ne[ie]);if($){let ie=$.subTree;if(U===ie||zp(ie.type)&&(ie.ssContent===U||ie.ssFallback===U)){const C=$.vnode;R(P,C,C.scopeId,C.slotScopeIds,$.parent)}}},L=(P,U,G,ne,$,ie,C,ce,ae=0)=>{for(let ee=ae;ee<P.length;ee++){const oe=P[ee]=ce?Zi(P[ee]):Qn(P[ee]);_(null,oe,U,G,ne,$,ie,C,ce)}},v=(P,U,G,ne,$,ie,C)=>{const ce=U.el=P.el;let{patchFlag:ae,dynamicChildren:ee,dirs:oe}=U;ae|=P.patchFlag&16;const b=P.props||pt,x=U.props||pt;let D;if(G&&xr(G,!1),(D=x.onVnodeBeforeUpdate)&&Kn(D,G,U,P),oe&&gr(U,P,G,"beforeUpdate"),G&&xr(G,!0),(b.innerHTML&&x.innerHTML==null||b.textContent&&x.textContent==null)&&u(ce,""),ee?A(P.dynamicChildren,ee,ce,G,ne,Al(U,$),ie):C||Y(P,U,ce,null,G,ne,Al(U,$),ie,!1),ae>0){if(ae&16)I(ce,b,x,G,$);else if(ae&2&&b.class!==x.class&&s(ce,"class",null,x.class,$),ae&4&&s(ce,"style",b.style,x.style,$),ae&8){const X=U.dynamicProps;for(let J=0;J<X.length;J++){const H=X[J],ye=b[H],fe=x[H];(fe!==ye||H==="value")&&s(ce,H,ye,fe,$,G)}}ae&1&&P.children!==U.children&&u(ce,U.children)}else!C&&ee==null&&I(ce,b,x,G,$);((D=x.onVnodeUpdated)||oe)&&vn(()=>{D&&Kn(D,G,U,P),oe&&gr(U,P,G,"updated")},ne)},A=(P,U,G,ne,$,ie,C)=>{for(let ce=0;ce<U.length;ce++){const ae=P[ce],ee=U[ce],oe=ae.el&&(ae.type===Un||!Vs(ae,ee)||ae.shapeFlag&198)?f(ae.el):G;_(ae,ee,oe,null,ne,$,ie,C,!0)}},I=(P,U,G,ne,$)=>{if(U!==G){if(U!==pt)for(const ie in U)!ia(ie)&&!(ie in G)&&s(P,ie,U[ie],null,$,ne);for(const ie in G){if(ia(ie))continue;const C=G[ie],ce=U[ie];C!==ce&&ie!=="value"&&s(P,ie,ce,C,$,ne)}"value"in G&&s(P,"value",U.value,G.value,$)}},z=(P,U,G,ne,$,ie,C,ce,ae)=>{const ee=U.el=P?P.el:o(""),oe=U.anchor=P?P.anchor:o("");let{patchFlag:b,dynamicChildren:x,slotScopeIds:D}=U;D&&(ce=ce?ce.concat(D):D),P==null?(i(ee,G,ne),i(oe,G,ne),L(U.children||[],G,oe,$,ie,C,ce,ae)):b>0&&b&64&&x&&P.dynamicChildren&&P.dynamicChildren.length===x.length?(A(P.dynamicChildren,x,G,$,ie,C,ce),(U.key!=null||$&&U===$.subTree)&&Fp(P,U,!0)):Y(P,U,G,oe,$,ie,C,ce,ae)},B=(P,U,G,ne,$,ie,C,ce,ae)=>{U.slotScopeIds=ce,P==null?U.shapeFlag&512?$.ctx.activate(U,G,ne,C,ae):Z(U,G,ne,$,ie,C,ae):j(P,U,ae)},Z=(P,U,G,ne,$,ie,C)=>{const ce=P.component=U0(P,ne,$);if(Mp(P)&&(ce.ctx.renderer=Ce),F0(ce,!1,C),ce.asyncDep){if($&&$.registerDep(ce,k,C),!P.el){const ae=ce.subTree=Pi(lr);p(null,ae,U,G),P.placeholder=ae.el}}else k(ce,P,U,G,$,ie,C)},j=(P,U,G)=>{const ne=U.component=P.component;if(p0(P,U,G))if(ne.asyncDep&&!ne.asyncResolved){F(ne,U,G);return}else ne.next=U,ne.update();else U.el=P.el,ne.vnode=U},k=(P,U,G,ne,$,ie,C)=>{const ce=()=>{if(P.isMounted){let{next:b,bu:x,u:D,parent:X,vnode:J}=P;{const Ie=Op(P);if(Ie){b&&(b.el=J.el,F(P,b,C)),Ie.asyncDep.then(()=>{P.isUnmounted||ce()});return}}let H=b,ye;xr(P,!1),b?(b.el=J.el,F(P,b,C)):b=J,x&&go(x),(ye=b.props&&b.props.onVnodeBeforeUpdate)&&Kn(ye,X,b,J),xr(P,!0);const fe=Qf(P),Ae=P.subTree;P.subTree=fe,_(Ae,fe,f(Ae.el),re(Ae),P,$,ie),b.el=fe.el,H===null&&m0(P,fe.el),D&&vn(D,$),(ye=b.props&&b.props.onVnodeUpdated)&&vn(()=>Kn(ye,X,b,J),$)}else{let b;const{el:x,props:D}=U,{bm:X,m:J,parent:H,root:ye,type:fe}=P,Ae=oa(U);xr(P,!1),X&&go(X),!Ae&&(b=D&&D.onVnodeBeforeMount)&&Kn(b,H,U),xr(P,!0);{ye.ce&&ye.ce._def.shadowRoot!==!1&&ye.ce._injectChildStyle(fe);const Ie=P.subTree=Qf(P);_(null,Ie,G,ne,P,$,ie),U.el=Ie.el}if(J&&vn(J,$),!Ae&&(b=D&&D.onVnodeMounted)){const Ie=U;vn(()=>Kn(b,H,Ie),$)}(U.shapeFlag&256||H&&oa(H.vnode)&&H.vnode.shapeFlag&256)&&P.a&&vn(P.a,$),P.isMounted=!0,U=G=ne=null}};P.scope.on();const ae=P.effect=new Zd(ce);P.scope.off();const ee=P.update=ae.run.bind(ae),oe=P.job=ae.runIfDirty.bind(ae);oe.i=P,oe.id=P.uid,ae.scheduler=()=>ju(oe),xr(P,!0),ee()},F=(P,U,G)=>{U.component=P;const ne=P.vnode.props;P.vnode=U,P.next=null,g0(P,U.props,ne,G),M0(P,U.children,G),Ui(),Yf(P),Ni()},Y=(P,U,G,ne,$,ie,C,ce,ae=!1)=>{const ee=P&&P.children,oe=P?P.shapeFlag:0,b=U.children,{patchFlag:x,shapeFlag:D}=U;if(x>0){if(x&128){de(ee,b,G,ne,$,ie,C,ce,ae);return}else if(x&256){pe(ee,b,G,ne,$,ie,C,ce,ae);return}}D&8?(oe&16&&Q(ee,$,ie),b!==ee&&u(G,b)):oe&16?D&16?de(ee,b,G,ne,$,ie,C,ce,ae):Q(ee,$,ie,!0):(oe&8&&u(G,""),D&16&&L(b,G,ne,$,ie,C,ce,ae))},pe=(P,U,G,ne,$,ie,C,ce,ae)=>{P=P||ds,U=U||ds;const ee=P.length,oe=U.length,b=Math.min(ee,oe);let x;for(x=0;x<b;x++){const D=U[x]=ae?Zi(U[x]):Qn(U[x]);_(P[x],D,G,null,$,ie,C,ce,ae)}ee>oe?Q(P,$,ie,!0,!1,b):L(U,G,ne,$,ie,C,ce,ae,b)},de=(P,U,G,ne,$,ie,C,ce,ae)=>{let ee=0;const oe=U.length;let b=P.length-1,x=oe-1;for(;ee<=b&&ee<=x;){const D=P[ee],X=U[ee]=ae?Zi(U[ee]):Qn(U[ee]);if(Vs(D,X))_(D,X,G,null,$,ie,C,ce,ae);else break;ee++}for(;ee<=b&&ee<=x;){const D=P[b],X=U[x]=ae?Zi(U[x]):Qn(U[x]);if(Vs(D,X))_(D,X,G,null,$,ie,C,ce,ae);else break;b--,x--}if(ee>b){if(ee<=x){const D=x+1,X=D<oe?U[D].el:ne;for(;ee<=x;)_(null,U[ee]=ae?Zi(U[ee]):Qn(U[ee]),G,X,$,ie,C,ce,ae),ee++}}else if(ee>x)for(;ee<=b;)te(P[ee],$,ie,!0),ee++;else{const D=ee,X=ee,J=new Map;for(ee=X;ee<=x;ee++){const ve=U[ee]=ae?Zi(U[ee]):Qn(U[ee]);ve.key!=null&&J.set(ve.key,ee)}let H,ye=0;const fe=x-X+1;let Ae=!1,Ie=0;const ue=new Array(fe);for(ee=0;ee<fe;ee++)ue[ee]=0;for(ee=D;ee<=b;ee++){const ve=P[ee];if(ye>=fe){te(ve,$,ie,!0);continue}let we;if(ve.key!=null)we=J.get(ve.key);else for(H=X;H<=x;H++)if(ue[H-X]===0&&Vs(ve,U[H])){we=H;break}we===void 0?te(ve,$,ie,!0):(ue[we-X]=ee+1,we>=Ie?Ie=we:Ae=!0,_(ve,U[we],G,null,$,ie,C,ce,ae),ye++)}const ge=Ae?T0(ue):ds;for(H=ge.length-1,ee=fe-1;ee>=0;ee--){const ve=X+ee,we=U[ve],_e=U[ve+1],qe=ve+1<oe?_e.el||Bp(_e):ne;ue[ee]===0?_(null,we,G,qe,$,ie,C,ce,ae):Ae&&(H<0||ee!==ge[H]?se(we,G,qe,2):H--)}}},se=(P,U,G,ne,$=null)=>{const{el:ie,type:C,transition:ce,children:ae,shapeFlag:ee}=P;if(ee&6){se(P.component.subTree,U,G,ne);return}if(ee&128){P.suspense.move(U,G,ne);return}if(ee&64){C.move(P,U,G,Ce);return}if(C===Un){i(ie,U,G);for(let b=0;b<ae.length;b++)se(ae[b],U,G,ne);i(P.anchor,U,G);return}if(C===wl){E(P,U,G);return}if(ne!==2&&ee&1&&ce)if(ne===0)ce.beforeEnter(ie),i(ie,U,G),vn(()=>ce.enter(ie),$);else{const{leave:b,delayLeave:x,afterLeave:D}=ce,X=()=>{P.ctx.isUnmounted?r(ie):i(ie,U,G)},J=()=>{ie._isLeaving&&ie[Vg](!0),b(ie,()=>{X(),D&&D()})};x?x(ie,X,J):J()}else i(ie,U,G)},te=(P,U,G,ne=!1,$=!1)=>{const{type:ie,props:C,ref:ce,children:ae,dynamicChildren:ee,shapeFlag:oe,patchFlag:b,dirs:x,cacheIndex:D}=P;if(b===-2&&($=!1),ce!=null&&(Ui(),aa(ce,null,G,P,!0),Ni()),D!=null&&(U.renderCache[D]=void 0),oe&256){U.ctx.deactivate(P);return}const X=oe&1&&x,J=!oa(P);let H;if(J&&(H=C&&C.onVnodeBeforeUnmount)&&Kn(H,U,P),oe&6)He(P.component,G,ne);else{if(oe&128){P.suspense.unmount(G,ne);return}X&&gr(P,null,U,"beforeUnmount"),oe&64?P.type.remove(P,U,G,Ce,ne):ee&&!ee.hasOnce&&(ie!==Un||b>0&&b&64)?Q(ee,U,G,!1,!0):(ie===Un&&b&384||!$&&oe&16)&&Q(ae,U,G),ne&&De(P)}(J&&(H=C&&C.onVnodeUnmounted)||X)&&vn(()=>{H&&Kn(H,U,P),X&&gr(P,null,U,"unmounted")},G)},De=P=>{const{type:U,el:G,anchor:ne,transition:$}=P;if(U===Un){Oe(G,ne);return}if(U===wl){S(P);return}const ie=()=>{r(G),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(P.shapeFlag&1&&$&&!$.persisted){const{leave:C,delayLeave:ce}=$,ae=()=>C(G,ie);ce?ce(P.el,ie,ae):ae()}else ie()},Oe=(P,U)=>{let G;for(;P!==U;)G=h(P),r(P),P=G;r(U)},He=(P,U,G)=>{const{bum:ne,scope:$,job:ie,subTree:C,um:ce,m:ae,a:ee}=P;nh(ae),nh(ee),ne&&go(ne),$.stop(),ie&&(ie.flags|=8,te(C,P,U,G)),ce&&vn(ce,U),vn(()=>{P.isUnmounted=!0},U)},Q=(P,U,G,ne=!1,$=!1,ie=0)=>{for(let C=ie;C<P.length;C++)te(P[C],U,G,ne,$)},re=P=>{if(P.shapeFlag&6)return re(P.component.subTree);if(P.shapeFlag&128)return P.suspense.next();const U=h(P.anchor||P.el),G=U&&U[zg];return G?h(G):U};let Te=!1;const Ge=(P,U,G)=>{let ne;P==null?U._vnode&&(te(U._vnode,null,null,!0),ne=U._vnode.component):_(U._vnode||null,P,U,null,null,null,G),U._vnode=P,Te||(Te=!0,Yf(ne),mp(),Te=!1)},Ce={p:_,um:te,m:se,r:De,mt:Z,mc:L,pc:Y,pbc:A,n:re,o:n};return{render:Ge,hydrate:void 0,createApp:l0(Ge)}}function Al({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function xr({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function E0(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Fp(n,e,t=!1){const i=n.children,r=e.children;if(ze(i)&&ze(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=Zi(r[s]),o.el=a.el),!t&&o.patchFlag!==-2&&Fp(a,o)),o.type===al&&(o.patchFlag!==-1?o.el=a.el:o.__elIndex=s+(n.type===Un?1:0)),o.type===lr&&!o.el&&(o.el=a.el)}}function T0(n){const e=n.slice(),t=[0];let i,r,s,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,a=t.length-1;s<a;)o=s+a>>1,n[t[o]]<c?s=o+1:a=o;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}function Op(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Op(e)}function nh(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function Bp(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?Bp(e.subTree):null}const zp=n=>n.__isSuspense;function A0(n,e){e&&e.pendingBranch?ze(n)?e.effects.push(...n):e.effects.push(n):Ig(n)}const Un=Symbol.for("v-fgt"),al=Symbol.for("v-txt"),lr=Symbol.for("v-cmt"),wl=Symbol.for("v-stc"),ca=[];let bn=null;function Dn(n=!1){ca.push(bn=n?null:[])}function w0(){ca.pop(),bn=ca[ca.length-1]||null}let xa=1;function ih(n,e=!1){xa+=n,n<0&&bn&&e&&(bn.hasOnce=!0)}function kp(n){return n.dynamicChildren=xa>0?bn||ds:null,w0(),xa>0&&bn&&bn.push(n),n}function kn(n,e,t,i,r,s){return kp(ke(n,e,t,i,r,s,!0))}function R0(n,e,t,i,r){return kp(Pi(n,e,t,i,r,!0))}function Vp(n){return n?n.__v_isVNode===!0:!1}function Vs(n,e){return n.type===e.type&&n.key===e.key}const Hp=({key:n})=>n??null,vo=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Dt(n)||qt(n)||je(n)?{i:Fn,r:n,k:e,f:!!t}:n:null);function ke(n,e=null,t=null,i=0,r=null,s=n===Un?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Hp(e),ref:e&&vo(e),scopeId:gp,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Fn};return o?(Qu(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=Dt(t)?8:16),xa>0&&!a&&bn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&bn.push(l),l}const Pi=C0;function C0(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===Qg)&&(n=lr),Vp(n)){const o=Ts(n,e,!0);return t&&Qu(o,t),xa>0&&!s&&bn&&(o.shapeFlag&6?bn[bn.indexOf(n)]=o:bn.push(o)),o.patchFlag=-2,o}if(k0(n)&&(n=n.__vccOpts),e){e=P0(e);let{class:o,style:l}=e;o&&!Dt(o)&&(e.class=pa(o)),xt(l)&&(Yu(l)&&!ze(l)&&(l=nn({},l)),e.style=da(l))}const a=Dt(n)?1:zp(n)?128:kg(n)?64:xt(n)?4:je(n)?2:0;return ke(n,e,t,i,r,a,s,!0)}function P0(n){return n?Yu(n)||Pp(n)?nn({},n):n:null}function Ts(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:a,children:o,transition:l}=n,c=e?D0(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Hp(c),ref:e&&e.ref?t&&s?ze(s)?s.concat(vo(e)):[s,vo(e)]:vo(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Un?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Ts(n.ssContent),ssFallback:n.ssFallback&&Ts(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Ku(u,l.clone(u)),u}function Js(n=" ",e=0){return Pi(al,null,n,e)}function Hs(n="",e=!1){return e?(Dn(),R0(lr,null,n)):Pi(lr,null,n)}function Qn(n){return n==null||typeof n=="boolean"?Pi(lr):ze(n)?Pi(Un,null,n.slice()):Vp(n)?Zi(n):Pi(al,null,String(n))}function Zi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Ts(n)}function Qu(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(ze(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Qu(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!Pp(e)?e._ctx=Fn:r===3&&Fn&&(Fn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else je(e)?(e={default:e,_ctx:Fn},t=32):(e=String(e),i&64?(t=16,e=[Js(e)]):t=8);n.children=e,n.shapeFlag|=t}function D0(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=pa([e.class,i.class]));else if(r==="style")e.style=da([e.style,i.style]);else if($o(r)){const s=e[r],a=i[r];a&&s!==a&&!(ze(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=i[r])}return e}function Kn(n,e,t,i=null){ui(n,e,7,[t,i])}const L0=Ap();let I0=0;function U0(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||L0,s={uid:I0++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new tg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Lp(i,r),emitsOptions:wp(i,r),emit:null,emitted:null,propsDefaults:pt,inheritAttrs:i.inheritAttrs,ctx:pt,data:pt,props:pt,attrs:pt,slots:pt,refs:pt,setupState:pt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=u0.bind(null,s),n.ce&&n.ce(s),s}let Qt=null;const N0=()=>Qt||Fn;let Oo,Tc;{const n=el(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(a=>a(s)):r[0](s)}};Oo=e("__VUE_INSTANCE_SETTERS__",t=>Qt=t),Tc=e("__VUE_SSR_SETTERS__",t=>va=t)}const Ia=n=>{const e=Qt;return Oo(n),n.scope.on(),()=>{n.scope.off(),Oo(e)}},rh=()=>{Qt&&Qt.scope.off(),Oo(null)};function Gp(n){return n.vnode.shapeFlag&4}let va=!1;function F0(n,e=!1,t=!1){e&&Tc(e);const{props:i,children:r}=n.vnode,s=Gp(n);_0(n,i,s,e),S0(n,r,t||e);const a=s?O0(n,e):void 0;return e&&Tc(!1),a}function O0(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,t0);const{setup:i}=t;if(i){Ui();const r=n.setupContext=i.length>1?z0(n):null,s=Ia(n),a=La(i,n,0,[n.props,r]),o=Gd(a);if(Ni(),s(),(o||n.sp)&&!oa(n)&&Sp(n),o){if(a.then(rh,rh),e)return a.then(l=>{sh(n,l)}).catch(l=>{il(l,n,0)});n.asyncDep=a}else sh(n,a)}else Wp(n)}function sh(n,e,t){je(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:xt(e)&&(n.setupState=fp(e)),Wp(n)}function Wp(n,e,t){const i=n.type;n.render||(n.render=i.render||si);{const r=Ia(n);Ui();try{n0(n)}finally{Ni(),r()}}}const B0={get(n,e){return Gt(n,"get",""),n[e]}};function z0(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,B0),slots:n.slots,emit:n.emit,expose:e}}function ol(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(fp(yg(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in la)return la[t](n)},has(e,t){return t in e||t in la}})):n.proxy}function k0(n){return je(n)&&"__vccOpts"in n}const Ac=(n,e)=>Rg(n,e,va),V0="3.5.26";let wc;const ah=typeof window<"u"&&window.trustedTypes;if(ah)try{wc=ah.createPolicy("vue",{createHTML:n=>n})}catch{}const Xp=wc?n=>wc.createHTML(n):n=>n,H0="http://www.w3.org/2000/svg",G0="http://www.w3.org/1998/Math/MathML",bi=typeof document<"u"?document:null,oh=bi&&bi.createElement("template"),W0={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?bi.createElementNS(H0,n):e==="mathml"?bi.createElementNS(G0,n):t?bi.createElement(n,{is:t}):bi.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>bi.createTextNode(n),createComment:n=>bi.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>bi.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const a=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{oh.innerHTML=Xp(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const o=oh.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},X0=Symbol("_vtc");function q0(n,e,t){const i=n[X0];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const lh=Symbol("_vod"),Y0=Symbol("_vsh"),j0=Symbol(""),K0=/(?:^|;)\s*display\s*:/;function $0(n,e,t){const i=n.style,r=Dt(t);let s=!1;if(t&&!r){if(e)if(Dt(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();t[o]==null&&So(i,o,"")}else for(const a in e)t[a]==null&&So(i,a,"");for(const a in t)a==="display"&&(s=!0),So(i,a,t[a])}else if(r){if(e!==t){const a=i[j0];a&&(t+=";"+a),i.cssText=t,s=K0.test(t)}}else e&&n.removeAttribute("style");lh in n&&(n[lh]=s?i.display:"",n[Y0]&&(i.display="none"))}const ch=/\s*!important$/;function So(n,e,t){if(ze(t))t.forEach(i=>So(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Z0(n,e);ch.test(t)?n.setProperty(dr(i),t.replace(ch,""),"important"):n[i]=t}}const uh=["Webkit","Moz","ms"],Rl={};function Z0(n,e){const t=Rl[e];if(t)return t;let i=or(e);if(i!=="filter"&&i in n)return Rl[e]=i;i=qd(i);for(let r=0;r<uh.length;r++){const s=uh[r]+i;if(s in n)return Rl[e]=s}return e}const fh="http://www.w3.org/1999/xlink";function hh(n,e,t,i,r,s=J_(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(fh,e.slice(6,e.length)):n.setAttributeNS(fh,e,t):t==null||s&&!jd(t)?n.removeAttribute(e):n.setAttribute(e,s?"":ci(t)?String(t):t)}function dh(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Xp(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(o!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=jd(t):t==null&&o==="string"?(t="",a=!0):o==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(r||e)}function Pr(n,e,t,i){n.addEventListener(e,t,i)}function J0(n,e,t,i){n.removeEventListener(e,t,i)}const ph=Symbol("_vei");function Q0(n,e,t,i,r=null){const s=n[ph]||(n[ph]={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=ex(e);if(i){const c=s[e]=ix(i,r);Pr(n,o,c,l)}else a&&(J0(n,o,a,l),s[e]=void 0)}}const mh=/(?:Once|Passive|Capture)$/;function ex(n){let e;if(mh.test(n)){e={};let i;for(;i=n.match(mh);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):dr(n.slice(2)),e]}let Cl=0;const tx=Promise.resolve(),nx=()=>Cl||(tx.then(()=>Cl=0),Cl=Date.now());function ix(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;ui(rx(i,t.value),e,5,[i])};return t.value=n,t.attached=nx(),t}function rx(n,e){if(ze(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const _h=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,sx=(n,e,t,i,r,s)=>{const a=r==="svg";e==="class"?q0(n,i,a):e==="style"?$0(n,t,i):$o(e)?Ou(e)||Q0(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ax(n,e,i,a))?(dh(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&hh(n,e,i,a,s,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Dt(i))?dh(n,or(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),hh(n,e,i,a))};function ax(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&_h(e)&&je(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return _h(e)&&Dt(t)?!1:e in n}const Bo=n=>{const e=n.props["onUpdate:modelValue"]||!1;return ze(e)?t=>go(e,t):e};function ox(n){n.target.composing=!0}function gh(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const gs=Symbol("_assign");function xh(n,e,t){return e&&(n=n.trim()),t&&(n=Qo(n)),n}const vh={created(n,{modifiers:{lazy:e,trim:t,number:i}},r){n[gs]=Bo(r);const s=i||r.props&&r.props.type==="number";Pr(n,e?"change":"input",a=>{a.target.composing||n[gs](xh(n.value,t,s))}),(t||s)&&Pr(n,"change",()=>{n.value=xh(n.value,t,s)}),e||(Pr(n,"compositionstart",ox),Pr(n,"compositionend",gh),Pr(n,"change",gh))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:r,number:s}},a){if(n[gs]=Bo(a),n.composing)return;const o=(s||n.type==="number")&&!/^0\d/.test(n.value)?Qo(n.value):n.value,l=e??"";o!==l&&(document.activeElement===n&&n.type!=="range"&&(i&&e===t||r&&n.value.trim()===l)||(n.value=l))}},lx={deep:!0,created(n,{value:e,modifiers:{number:t}},i){const r=Zo(e);Pr(n,"change",()=>{const s=Array.prototype.filter.call(n.options,a=>a.selected).map(a=>t?Qo(zo(a)):zo(a));n[gs](n.multiple?r?new Set(s):s:s[0]),n._assigning=!0,dp(()=>{n._assigning=!1})}),n[gs]=Bo(i)},mounted(n,{value:e}){Sh(n,e)},beforeUpdate(n,e,t){n[gs]=Bo(t)},updated(n,{value:e}){n._assigning||Sh(n,e)}};function Sh(n,e){const t=n.multiple,i=ze(e);if(!(t&&!i&&!Zo(e))){for(let r=0,s=n.options.length;r<s;r++){const a=n.options[r],o=zo(a);if(t)if(i){const l=typeof o;l==="string"||l==="number"?a.selected=e.some(c=>String(c)===String(o)):a.selected=eg(e,o)>-1}else a.selected=e.has(o);else if(tl(zo(a),e)){n.selectedIndex!==r&&(n.selectedIndex=r);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function zo(n){return"_value"in n?n._value:n.value}const cx={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},ux=(n,e)=>{const t=n._withKeys||(n._withKeys={}),i=e.join(".");return t[i]||(t[i]=(r=>{if(!("key"in r))return;const s=dr(r.key);if(e.some(a=>a===s||cx[a]===s))return n(r)}))},fx=nn({patchProp:sx},W0);let Mh;function hx(){return Mh||(Mh=y0(fx))}const dx=((...n)=>{const e=hx().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=mx(i);if(!r)return;const s=e._component;!je(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const a=t(r,!1,px(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e});function px(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function mx(n){return Dt(n)?document.querySelector(n):n}const ef="182",xs={ROTATE:0,DOLLY:1,PAN:2},us={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},_x=0,yh=1,gx=2,Mo=1,qp=2,Qs=3,cr=0,cn=1,Ri=2,Di=0,vs=1,bh=2,Eh=3,Th=4,xx=5,Dr=100,vx=101,Sx=102,Mx=103,yx=104,bx=200,Ex=201,Tx=202,Ax=203,Rc=204,Cc=205,wx=206,Rx=207,Cx=208,Px=209,Dx=210,Lx=211,Ix=212,Ux=213,Nx=214,Pc=0,Dc=1,Lc=2,As=3,Ic=4,Uc=5,Nc=6,Fc=7,Yp=0,Fx=1,Ox=2,ai=0,jp=1,Kp=2,$p=3,tf=4,Zp=5,Jp=6,Qp=7,em=300,Hr=301,ws=302,Oc=303,Bc=304,ll=306,zc=1e3,Ci=1001,kc=1002,Bt=1003,Bx=1004,Wa=1005,Xt=1006,Pl=1007,Ir=1008,Mn=1009,tm=1010,nm=1011,Sa=1012,nf=1013,fi=1014,ni=1015,Oi=1016,rf=1017,sf=1018,Ma=1020,im=35902,rm=35899,sm=1021,am=1022,Xn=1023,Bi=1026,Ur=1027,om=1028,af=1029,Rs=1030,of=1031,lf=1033,yo=33776,bo=33777,Eo=33778,To=33779,Vc=35840,Hc=35841,Gc=35842,Wc=35843,Xc=36196,qc=37492,Yc=37496,jc=37488,Kc=37489,$c=37490,Zc=37491,Jc=37808,Qc=37809,eu=37810,tu=37811,nu=37812,iu=37813,ru=37814,su=37815,au=37816,ou=37817,lu=37818,cu=37819,uu=37820,fu=37821,hu=36492,du=36494,pu=36495,mu=36283,_u=36284,gu=36285,xu=36286,zx=3200,lm=0,kx=1,Qi="",In="srgb",Cs="srgb-linear",ko="linear",lt="srgb",jr=7680,Ah=519,Vx=512,Hx=513,Gx=514,cf=515,Wx=516,Xx=517,uf=518,qx=519,wh=35044,Rh="300 es",ii=2e3,Vo=2001;function cm(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ho(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Yx(){const n=Ho("canvas");return n.style.display="block",n}const Ch={};function Ph(...n){const e="THREE."+n.shift();console.log(e,...n)}function Ve(...n){const e="THREE."+n.shift();console.warn(e,...n)}function it(...n){const e="THREE."+n.shift();console.error(e,...n)}function ya(...n){const e=n.join(" ");e in Ch||(Ch[e]=!0,Ve(...n))}function jx(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}class Wr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ao=Math.PI/180,vu=180/Math.PI;function Ua(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Vt[n&255]+Vt[n>>8&255]+Vt[n>>16&255]+Vt[n>>24&255]+"-"+Vt[e&255]+Vt[e>>8&255]+"-"+Vt[e>>16&15|64]+Vt[e>>24&255]+"-"+Vt[t&63|128]+Vt[t>>8&255]+"-"+Vt[t>>16&255]+Vt[t>>24&255]+Vt[i&255]+Vt[i>>8&255]+Vt[i>>16&255]+Vt[i>>24&255]).toLowerCase()}function Ze(n,e,t){return Math.max(e,Math.min(t,n))}function Kx(n,e){return(n%e+e)%e}function Dl(n,e,t){return(1-t)*n+t*e}function Gs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function an(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const $x={DEG2RAD:Ao};class Xe{constructor(e=0,t=0){Xe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Gr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3],h=s[a+0],d=s[a+1],g=s[a+2],_=s[a+3];if(o<=0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o>=1){e[t+0]=h,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==h||c!==d||u!==g){let m=l*h+c*d+u*g+f*_;m<0&&(h=-h,d=-d,g=-g,_=-_,m=-m);let p=1-o;if(m<.9995){const M=Math.acos(m),E=Math.sin(M);p=Math.sin(p*M)/E,o=Math.sin(o*M)/E,l=l*p+h*o,c=c*p+d*o,u=u*p+g*o,f=f*p+_*o}else{l=l*p+h*o,c=c*p+d*o,u=u*p+g*o,f=f*p+_*o;const M=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=M,c*=M,u*=M,f*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],h=s[a+1],d=s[a+2],g=s[a+3];return e[t]=o*g+u*f+l*d-c*h,e[t+1]=l*g+u*h+c*f-o*d,e[t+2]=c*g+u*d+o*h-l*f,e[t+3]=u*g-o*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),h=l(i/2),d=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:Ve("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+o+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(a-r)*d}else if(i>o&&i>f){const d=2*Math.sqrt(1+i-o-f);this._w=(u-l)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(s+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-i-f);this._w=(s-c)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-i-o);this._w=(a-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,t=0,i=0){W.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Dh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Dh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*t-s*r),f=2*(s*i-a*t);return this.x=t+l*c+a*f-o*u,this.y=i+l*u+o*c-s*f,this.z=r+l*f+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ll.copy(this).projectOnVector(e),this.sub(Ll)}reflect(e){return this.sub(Ll.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ll=new W,Dh=new Gr;class Ye{constructor(e,t,i,r,s,a,o,l,c){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],d=i[5],g=i[8],_=r[0],m=r[3],p=r[6],M=r[1],E=r[4],S=r[7],y=r[2],w=r[5],R=r[8];return s[0]=a*_+o*M+l*y,s[3]=a*m+o*E+l*w,s[6]=a*p+o*S+l*R,s[1]=c*_+u*M+f*y,s[4]=c*m+u*E+f*w,s[7]=c*p+u*S+f*R,s[2]=h*_+d*M+g*y,s[5]=h*m+d*E+g*w,s[8]=h*p+d*S+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*s,d=c*s-a*l,g=t*f+i*h+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(r*c-u*i)*_,e[2]=(o*i-r*a)*_,e[3]=h*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-o*t)*_,e[6]=d*_,e[7]=(i*l-c*t)*_,e[8]=(a*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Il.makeScale(e,t)),this}rotate(e){return this.premultiply(Il.makeRotation(-e)),this}translate(e,t){return this.premultiply(Il.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Il=new Ye,Lh=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ih=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Zx(){const n={enabled:!0,workingColorSpace:Cs,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===lt&&(r.r=Li(r.r),r.g=Li(r.g),r.b=Li(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===lt&&(r.r=Ss(r.r),r.g=Ss(r.g),r.b=Ss(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Qi?ko:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ya("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ya("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Cs]:{primaries:e,whitePoint:i,transfer:ko,toXYZ:Lh,fromXYZ:Ih,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:In},outputColorSpaceConfig:{drawingBufferColorSpace:In}},[In]:{primaries:e,whitePoint:i,transfer:lt,toXYZ:Lh,fromXYZ:Ih,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:In}}}),n}const tt=Zx();function Li(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ss(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Kr;class Jx{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Kr===void 0&&(Kr=Ho("canvas")),Kr.width=e.width,Kr.height=e.height;const r=Kr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Kr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ho("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Li(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Li(t[i]/255)*255):t[i]=Li(t[i]);return{data:t,width:e.width,height:e.height}}else return Ve("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Qx=0;class ff{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qx++}),this.uuid=Ua(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ul(r[a].image)):s.push(Ul(r[a]))}else s=Ul(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Ul(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Jx.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ve("Texture: Unable to serialize Texture."),{})}let ev=0;const Nl=new W;class tn extends Wr{constructor(e=tn.DEFAULT_IMAGE,t=tn.DEFAULT_MAPPING,i=Ci,r=Ci,s=Xt,a=Ir,o=Xn,l=Mn,c=tn.DEFAULT_ANISOTROPY,u=Qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ev++}),this.uuid=Ua(),this.name="",this.source=new ff(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Nl).x}get height(){return this.source.getSize(Nl).y}get depth(){return this.source.getSize(Nl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Ve(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ve(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==em)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zc:e.x=e.x-Math.floor(e.x);break;case Ci:e.x=e.x<0?0:1;break;case kc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zc:e.y=e.y-Math.floor(e.y);break;case Ci:e.y=e.y<0?0:1;break;case kc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=em;tn.DEFAULT_ANISOTROPY=1;class Tt{constructor(e=0,t=0,i=0,r=1){Tt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,S=(d+1)/2,y=(p+1)/2,w=(u+h)/4,R=(f+_)/4,L=(g+m)/4;return E>S&&E>y?E<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(E),r=w/i,s=R/i):S>y?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=w/r,s=L/r):y<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(y),i=R/s,r=L/s),this.set(i,r,s,t),this}let M=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(f-_)/M,this.z=(h-u)/M,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this.w=Ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this.w=Ze(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class tv extends Wr{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new tn(r);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Xt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new ff(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class oi extends tv{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class um extends tn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class nv extends tn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Na{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Vn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Vn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Vn):Vn.fromBufferAttribute(s,a),Vn.applyMatrix4(e.matrixWorld),this.expandByPoint(Vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Xa.copy(i.boundingBox)),Xa.applyMatrix4(e.matrixWorld),this.union(Xa)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Vn),Vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ws),qa.subVectors(this.max,Ws),$r.subVectors(e.a,Ws),Zr.subVectors(e.b,Ws),Jr.subVectors(e.c,Ws),Gi.subVectors(Zr,$r),Wi.subVectors(Jr,Zr),vr.subVectors($r,Jr);let t=[0,-Gi.z,Gi.y,0,-Wi.z,Wi.y,0,-vr.z,vr.y,Gi.z,0,-Gi.x,Wi.z,0,-Wi.x,vr.z,0,-vr.x,-Gi.y,Gi.x,0,-Wi.y,Wi.x,0,-vr.y,vr.x,0];return!Fl(t,$r,Zr,Jr,qa)||(t=[1,0,0,0,1,0,0,0,1],!Fl(t,$r,Zr,Jr,qa))?!1:(Ya.crossVectors(Gi,Wi),t=[Ya.x,Ya.y,Ya.z],Fl(t,$r,Zr,Jr,qa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const xi=[new W,new W,new W,new W,new W,new W,new W,new W],Vn=new W,Xa=new Na,$r=new W,Zr=new W,Jr=new W,Gi=new W,Wi=new W,vr=new W,Ws=new W,qa=new W,Ya=new W,Sr=new W;function Fl(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Sr.fromArray(n,s);const o=r.x*Math.abs(Sr.x)+r.y*Math.abs(Sr.y)+r.z*Math.abs(Sr.z),l=e.dot(Sr),c=t.dot(Sr),u=i.dot(Sr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const iv=new Na,Xs=new W,Ol=new W;class hf{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):iv.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xs.subVectors(e,this.center);const t=Xs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Xs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ol.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xs.copy(e.center).add(Ol)),this.expandByPoint(Xs.copy(e.center).sub(Ol))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const vi=new W,Bl=new W,ja=new W,Xi=new W,zl=new W,Ka=new W,kl=new W;class fm{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=vi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vi.copy(this.origin).addScaledVector(this.direction,t),vi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Bl.copy(e).add(t).multiplyScalar(.5),ja.copy(t).sub(e).normalize(),Xi.copy(this.origin).sub(Bl);const s=e.distanceTo(t)*.5,a=-this.direction.dot(ja),o=Xi.dot(this.direction),l=-Xi.dot(ja),c=Xi.lengthSq(),u=Math.abs(1-a*a);let f,h,d,g;if(u>0)if(f=a*l-o,h=a*o-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const _=1/u;f*=_,h*=_,d=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Bl).addScaledVector(ja,h),d}intersectSphere(e,t){vi.subVectors(e.center,this.origin);const i=vi.dot(this.direction),r=vi.dot(vi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,vi)!==null}intersectTriangle(e,t,i,r,s){zl.subVectors(t,e),Ka.subVectors(i,e),kl.crossVectors(zl,Ka);let a=this.direction.dot(kl),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Xi.subVectors(this.origin,e);const l=o*this.direction.dot(Ka.crossVectors(Xi,Ka));if(l<0)return null;const c=o*this.direction.dot(zl.cross(Xi));if(c<0||l+c>a)return null;const u=-o*Xi.dot(kl);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class wt{constructor(e,t,i,r,s,a,o,l,c,u,f,h,d,g,_,m){wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,f,h,d,g,_,m)}set(e,t,i,r,s,a,o,l,c,u,f,h,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,r=1/Qr.setFromMatrixColumn(e,0).length(),s=1/Qr.setFromMatrixColumn(e,1).length(),a=1/Qr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*u,d=a*f,g=o*u,_=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+g*c,t[5]=h-_*c,t[9]=-o*l,t[2]=_-h*c,t[6]=g+d*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,g=c*u,_=c*f;t[0]=h+_*o,t[4]=g*o-d,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=d*o-g,t[6]=_+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,g=c*u,_=c*f;t[0]=h-_*o,t[4]=-a*f,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*u,t[9]=_-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,d=a*f,g=o*u,_=o*f;t[0]=l*u,t[4]=g*c-d,t[8]=h*c+_,t[1]=l*f,t[5]=_*c+h,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,d=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-h*f,t[8]=g*f+d,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*f+g,t[10]=h-_*f}else if(e.order==="XZY"){const h=a*l,d=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+_,t[5]=a*u,t[9]=d*f-g,t[2]=g*f-d,t[6]=o*u,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rv,e,sv)}lookAt(e,t,i){const r=this.elements;return gn.subVectors(e,t),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),qi.crossVectors(i,gn),qi.lengthSq()===0&&(Math.abs(i.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),qi.crossVectors(i,gn)),qi.normalize(),$a.crossVectors(gn,qi),r[0]=qi.x,r[4]=$a.x,r[8]=gn.x,r[1]=qi.y,r[5]=$a.y,r[9]=gn.y,r[2]=qi.z,r[6]=$a.z,r[10]=gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],d=i[13],g=i[2],_=i[6],m=i[10],p=i[14],M=i[3],E=i[7],S=i[11],y=i[15],w=r[0],R=r[4],L=r[8],v=r[12],A=r[1],I=r[5],z=r[9],B=r[13],Z=r[2],j=r[6],k=r[10],F=r[14],Y=r[3],pe=r[7],de=r[11],se=r[15];return s[0]=a*w+o*A+l*Z+c*Y,s[4]=a*R+o*I+l*j+c*pe,s[8]=a*L+o*z+l*k+c*de,s[12]=a*v+o*B+l*F+c*se,s[1]=u*w+f*A+h*Z+d*Y,s[5]=u*R+f*I+h*j+d*pe,s[9]=u*L+f*z+h*k+d*de,s[13]=u*v+f*B+h*F+d*se,s[2]=g*w+_*A+m*Z+p*Y,s[6]=g*R+_*I+m*j+p*pe,s[10]=g*L+_*z+m*k+p*de,s[14]=g*v+_*B+m*F+p*se,s[3]=M*w+E*A+S*Z+y*Y,s[7]=M*R+E*I+S*j+y*pe,s[11]=M*L+E*z+S*k+y*de,s[15]=M*v+E*B+S*F+y*se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15],M=l*d-c*h,E=o*d-c*f,S=o*h-l*f,y=a*d-c*u,w=a*h-l*u,R=a*f-o*u;return t*(_*M-m*E+p*S)-i*(g*M-m*y+p*w)+r*(g*E-_*y+p*R)-s*(g*S-_*w+m*R)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],M=f*m*c-_*h*c+_*l*d-o*m*d-f*l*p+o*h*p,E=g*h*c-u*m*c-g*l*d+a*m*d+u*l*p-a*h*p,S=u*_*c-g*f*c+g*o*d-a*_*d-u*o*p+a*f*p,y=g*f*l-u*_*l-g*o*h+a*_*h+u*o*m-a*f*m,w=t*M+i*E+r*S+s*y;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/w;return e[0]=M*R,e[1]=(_*h*s-f*m*s-_*r*d+i*m*d+f*r*p-i*h*p)*R,e[2]=(o*m*s-_*l*s+_*r*c-i*m*c-o*r*p+i*l*p)*R,e[3]=(f*l*s-o*h*s-f*r*c+i*h*c+o*r*d-i*l*d)*R,e[4]=E*R,e[5]=(u*m*s-g*h*s+g*r*d-t*m*d-u*r*p+t*h*p)*R,e[6]=(g*l*s-a*m*s-g*r*c+t*m*c+a*r*p-t*l*p)*R,e[7]=(a*h*s-u*l*s+u*r*c-t*h*c-a*r*d+t*l*d)*R,e[8]=S*R,e[9]=(g*f*s-u*_*s-g*i*d+t*_*d+u*i*p-t*f*p)*R,e[10]=(a*_*s-g*o*s+g*i*c-t*_*c-a*i*p+t*o*p)*R,e[11]=(u*o*s-a*f*s-u*i*c+t*f*c+a*i*d-t*o*d)*R,e[12]=y*R,e[13]=(u*_*r-g*f*r+g*i*h-t*_*h-u*i*m+t*f*m)*R,e[14]=(g*o*r-a*_*r-g*i*l+t*_*l+a*i*m-t*o*m)*R,e[15]=(a*f*r-u*o*r+u*i*l-t*f*l-a*i*h+t*o*h)*R,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,h=s*c,d=s*u,g=s*f,_=a*u,m=a*f,p=o*f,M=l*c,E=l*u,S=l*f,y=i.x,w=i.y,R=i.z;return r[0]=(1-(_+p))*y,r[1]=(d+S)*y,r[2]=(g-E)*y,r[3]=0,r[4]=(d-S)*w,r[5]=(1-(h+p))*w,r[6]=(m+M)*w,r[7]=0,r[8]=(g+E)*R,r[9]=(m-M)*R,r[10]=(1-(h+_))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;if(e.x=r[12],e.y=r[13],e.z=r[14],this.determinant()===0)return i.set(1,1,1),t.identity(),this;let s=Qr.set(r[0],r[1],r[2]).length();const a=Qr.set(r[4],r[5],r[6]).length(),o=Qr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),Hn.copy(this);const c=1/s,u=1/a,f=1/o;return Hn.elements[0]*=c,Hn.elements[1]*=c,Hn.elements[2]*=c,Hn.elements[4]*=u,Hn.elements[5]*=u,Hn.elements[6]*=u,Hn.elements[8]*=f,Hn.elements[9]*=f,Hn.elements[10]*=f,t.setFromRotationMatrix(Hn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=ii,l=!1){const c=this.elements,u=2*s/(t-e),f=2*s/(i-r),h=(t+e)/(t-e),d=(i+r)/(i-r);let g,_;if(l)g=s/(a-s),_=a*s/(a-s);else if(o===ii)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Vo)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=ii,l=!1){const c=this.elements,u=2/(t-e),f=2/(i-r),h=-(t+e)/(t-e),d=-(i+r)/(i-r);let g,_;if(l)g=1/(a-s),_=a/(a-s);else if(o===ii)g=-2/(a-s),_=-(a+s)/(a-s);else if(o===Vo)g=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Qr=new W,Hn=new wt,rv=new W(0,0,0),sv=new W(1,1,1),qi=new W,$a=new W,gn=new W,Uh=new wt,Nh=new Gr;class hi{constructor(e=0,t=0,i=0,r=hi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ze(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Ve("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Uh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Uh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Nh.setFromEuler(this),this.setFromQuaternion(Nh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hi.DEFAULT_ORDER="XYZ";class hm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let av=0;const Fh=new W,es=new Gr,Si=new wt,Za=new W,qs=new W,ov=new W,lv=new Gr,Oh=new W(1,0,0),Bh=new W(0,1,0),zh=new W(0,0,1),kh={type:"added"},cv={type:"removed"},ts={type:"childadded",child:null},Vl={type:"childremoved",child:null};class Yt extends Wr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:av++}),this.uuid=Ua(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Yt.DEFAULT_UP.clone();const e=new W,t=new hi,i=new Gr,r=new W(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new wt},normalMatrix:{value:new Ye}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=Yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return es.setFromAxisAngle(e,t),this.quaternion.multiply(es),this}rotateOnWorldAxis(e,t){return es.setFromAxisAngle(e,t),this.quaternion.premultiply(es),this}rotateX(e){return this.rotateOnAxis(Oh,e)}rotateY(e){return this.rotateOnAxis(Bh,e)}rotateZ(e){return this.rotateOnAxis(zh,e)}translateOnAxis(e,t){return Fh.copy(e).applyQuaternion(this.quaternion),this.position.add(Fh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Oh,e)}translateY(e){return this.translateOnAxis(Bh,e)}translateZ(e){return this.translateOnAxis(zh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Za.copy(e):Za.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(qs,Za,this.up):Si.lookAt(Za,qs,this.up),this.quaternion.setFromRotationMatrix(Si),r&&(Si.extractRotation(r.matrixWorld),es.setFromRotationMatrix(Si),this.quaternion.premultiply(es.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(it("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(kh),ts.child=e,this.dispatchEvent(ts),ts.child=null):it("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(cv),Vl.child=e,this.dispatchEvent(Vl),Vl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Si.multiply(e.parent.matrixWorld)),e.applyMatrix4(Si),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(kh),ts.child=e,this.dispatchEvent(ts),ts.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,e,ov),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,lv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Yt.DEFAULT_UP=new W(0,1,0);Yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Gn=new W,Mi=new W,Hl=new W,yi=new W,ns=new W,is=new W,Vh=new W,Gl=new W,Wl=new W,Xl=new W,ql=new Tt,Yl=new Tt,jl=new Tt;class Wn{constructor(e=new W,t=new W,i=new W){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Gn.subVectors(e,t),r.cross(Gn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Gn.subVectors(r,t),Mi.subVectors(i,t),Hl.subVectors(e,t);const a=Gn.dot(Gn),o=Gn.dot(Mi),l=Gn.dot(Hl),c=Mi.dot(Mi),u=Mi.dot(Hl),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(c*l-o*u)*h,g=(a*u-o*l)*h;return s.set(1-d-g,g,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,yi)===null?!1:yi.x>=0&&yi.y>=0&&yi.x+yi.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,yi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,yi.x),l.addScaledVector(a,yi.y),l.addScaledVector(o,yi.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return ql.setScalar(0),Yl.setScalar(0),jl.setScalar(0),ql.fromBufferAttribute(e,t),Yl.fromBufferAttribute(e,i),jl.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(ql,s.x),a.addScaledVector(Yl,s.y),a.addScaledVector(jl,s.z),a}static isFrontFacing(e,t,i,r){return Gn.subVectors(i,t),Mi.subVectors(e,t),Gn.cross(Mi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gn.subVectors(this.c,this.b),Mi.subVectors(this.a,this.b),Gn.cross(Mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Wn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Wn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;ns.subVectors(r,i),is.subVectors(s,i),Gl.subVectors(e,i);const l=ns.dot(Gl),c=is.dot(Gl);if(l<=0&&c<=0)return t.copy(i);Wl.subVectors(e,r);const u=ns.dot(Wl),f=is.dot(Wl);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(ns,a);Xl.subVectors(e,s);const d=ns.dot(Xl),g=is.dot(Xl);if(g>=0&&d<=g)return t.copy(s);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(is,o);const m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return Vh.subVectors(s,r),o=(f-u)/(f-u+(d-g)),t.copy(r).addScaledVector(Vh,o);const p=1/(m+_+h);return a=_*p,o=h*p,t.copy(i).addScaledVector(ns,a).addScaledVector(is,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const dm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yi={h:0,s:0,l:0},Ja={h:0,s:0,l:0};function Kl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Je{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=In){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=tt.workingColorSpace){return this.r=e,this.g=t,this.b=i,tt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=tt.workingColorSpace){if(e=Kx(e,1),t=Ze(t,0,1),i=Ze(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Kl(a,s,e+1/3),this.g=Kl(a,s,e),this.b=Kl(a,s,e-1/3)}return tt.colorSpaceToWorking(this,r),this}setStyle(e,t=In){function i(s){s!==void 0&&parseFloat(s)<1&&Ve("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ve("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ve("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=In){const i=dm[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ve("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Li(e.r),this.g=Li(e.g),this.b=Li(e.b),this}copyLinearToSRGB(e){return this.r=Ss(e.r),this.g=Ss(e.g),this.b=Ss(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=In){return tt.workingToColorSpace(Ht.copy(this),e),Math.round(Ze(Ht.r*255,0,255))*65536+Math.round(Ze(Ht.g*255,0,255))*256+Math.round(Ze(Ht.b*255,0,255))}getHexString(e=In){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.workingToColorSpace(Ht.copy(this),t);const i=Ht.r,r=Ht.g,s=Ht.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=tt.workingColorSpace){return tt.workingToColorSpace(Ht.copy(this),t),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=In){tt.workingToColorSpace(Ht.copy(this),e);const t=Ht.r,i=Ht.g,r=Ht.b;return e!==In?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Yi),this.setHSL(Yi.h+e,Yi.s+t,Yi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Yi),e.getHSL(Ja);const i=Dl(Yi.h,Ja.h,t),r=Dl(Yi.s,Ja.s,t),s=Dl(Yi.l,Ja.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ht=new Je;Je.NAMES=dm;let uv=0;class Fa extends Wr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uv++}),this.uuid=Ua(),this.name="",this.type="Material",this.blending=vs,this.side=cr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rc,this.blendDst=Cc,this.blendEquation=Dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=As,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ah,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jr,this.stencilZFail=jr,this.stencilZPass=jr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Ve(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ve(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==vs&&(i.blending=this.blending),this.side!==cr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Rc&&(i.blendSrc=this.blendSrc),this.blendDst!==Cc&&(i.blendDst=this.blendDst),this.blendEquation!==Dr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==As&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ah&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==jr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==jr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==jr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class pm extends Fa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.combine=Yp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ct=new W,Qa=new Xe;let fv=0;class li{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:fv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=wh,this.updateRanges=[],this.gpuType=ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Qa.fromBufferAttribute(this,t),Qa.applyMatrix3(e),this.setXY(t,Qa.x,Qa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Gs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=an(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Gs(t,this.array)),t}setX(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Gs(t,this.array)),t}setY(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Gs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Gs(t,this.array)),t}setW(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),i=an(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),i=an(i,this.array),r=an(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),i=an(i,this.array),r=an(r,this.array),s=an(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==wh&&(e.usage=this.usage),e}}class mm extends li{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class _m extends li{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ii extends li{constructor(e,t,i){super(new Float32Array(e),t,i)}}let hv=0;const Pn=new wt,$l=new Yt,rs=new W,xn=new Na,Ys=new Na,Nt=new W;class Hi extends Wr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hv++}),this.uuid=Ua(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cm(e)?_m:mm)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ye().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pn.makeRotationFromQuaternion(e),this.applyMatrix4(Pn),this}rotateX(e){return Pn.makeRotationX(e),this.applyMatrix4(Pn),this}rotateY(e){return Pn.makeRotationY(e),this.applyMatrix4(Pn),this}rotateZ(e){return Pn.makeRotationZ(e),this.applyMatrix4(Pn),this}translate(e,t,i){return Pn.makeTranslation(e,t,i),this.applyMatrix4(Pn),this}scale(e,t,i){return Pn.makeScale(e,t,i),this.applyMatrix4(Pn),this}lookAt(e){return $l.lookAt(e),$l.updateMatrix(),this.applyMatrix4($l.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rs).negate(),this.translate(rs.x,rs.y,rs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ii(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ve("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Na);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){it("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];xn.setFromBufferAttribute(s),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&it('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hf);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){it("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if(xn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Ys.setFromBufferAttribute(o),this.morphTargetsRelative?(Nt.addVectors(xn.min,Ys.min),xn.expandByPoint(Nt),Nt.addVectors(xn.max,Ys.max),xn.expandByPoint(Nt)):(xn.expandByPoint(Ys.min),xn.expandByPoint(Ys.max))}xn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Nt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Nt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Nt.fromBufferAttribute(o,c),l&&(rs.fromBufferAttribute(e,c),Nt.add(rs)),r=Math.max(r,i.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&it('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){it("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new li(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<i.count;L++)o[L]=new W,l[L]=new W;const c=new W,u=new W,f=new W,h=new Xe,d=new Xe,g=new Xe,_=new W,m=new W;function p(L,v,A){c.fromBufferAttribute(i,L),u.fromBufferAttribute(i,v),f.fromBufferAttribute(i,A),h.fromBufferAttribute(s,L),d.fromBufferAttribute(s,v),g.fromBufferAttribute(s,A),u.sub(c),f.sub(c),d.sub(h),g.sub(h);const I=1/(d.x*g.y-g.x*d.y);isFinite(I)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(I),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(I),o[L].add(_),o[v].add(_),o[A].add(_),l[L].add(m),l[v].add(m),l[A].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let L=0,v=M.length;L<v;++L){const A=M[L],I=A.start,z=A.count;for(let B=I,Z=I+z;B<Z;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const E=new W,S=new W,y=new W,w=new W;function R(L){y.fromBufferAttribute(r,L),w.copy(y);const v=o[L];E.copy(v),E.sub(y.multiplyScalar(y.dot(v))).normalize(),S.crossVectors(w,v);const I=S.dot(l[L])<0?-1:1;a.setXYZW(L,E.x,E.y,E.z,I)}for(let L=0,v=M.length;L<v;++L){const A=M[L],I=A.start,z=A.count;for(let B=I,Z=I+z;B<Z;B+=3)R(e.getX(B+0)),R(e.getX(B+1)),R(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new li(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const r=new W,s=new W,a=new W,o=new W,l=new W,c=new W,u=new W,f=new W;if(e)for(let h=0,d=e.count;h<d;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*u;for(let p=0;p<u;p++)h[g++]=c[d++]}return new li(h,u,f)}if(this.index===null)return Ve("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Hi,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Hh=new wt,Mr=new fm,eo=new hf,Gh=new W,to=new W,no=new W,io=new W,Zl=new W,ro=new W,Wh=new W,so=new W;class di extends Yt{constructor(e=new Hi,t=new pm){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){ro.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(Zl.fromBufferAttribute(f,e),a?ro.addScaledVector(Zl,u):ro.addScaledVector(Zl.sub(t),u))}t.add(ro)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),eo.copy(i.boundingSphere),eo.applyMatrix4(s),Mr.copy(e.ray).recast(e.near),!(eo.containsPoint(Mr.origin)===!1&&(Mr.intersectSphere(eo,Gh)===null||Mr.origin.distanceToSquared(Gh)>(e.far-e.near)**2))&&(Hh.copy(s).invert(),Mr.copy(e.ray).applyMatrix4(Hh),!(i.boundingBox!==null&&Mr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Mr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=a[m.materialIndex],M=Math.max(m.start,d.start),E=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let S=M,y=E;S<y;S+=3){const w=o.getX(S),R=o.getX(S+1),L=o.getX(S+2);r=ao(this,p,e,i,c,u,f,w,R,L),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const M=o.getX(m),E=o.getX(m+1),S=o.getX(m+2);r=ao(this,a,e,i,c,u,f,M,E,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=a[m.materialIndex],M=Math.max(m.start,d.start),E=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let S=M,y=E;S<y;S+=3){const w=S,R=S+1,L=S+2;r=ao(this,p,e,i,c,u,f,w,R,L),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const M=m,E=m+1,S=m+2;r=ao(this,a,e,i,c,u,f,M,E,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function dv(n,e,t,i,r,s,a,o){let l;if(e.side===cn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===cr,o),l===null)return null;so.copy(o),so.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(so);return c<t.near||c>t.far?null:{distance:c,point:so.clone(),object:n}}function ao(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,to),n.getVertexPosition(l,no),n.getVertexPosition(c,io);const u=dv(n,e,t,i,to,no,io,Wh);if(u){const f=new W;Wn.getBarycoord(Wh,to,no,io,f),r&&(u.uv=Wn.getInterpolatedAttribute(r,o,l,c,f,new Xe)),s&&(u.uv1=Wn.getInterpolatedAttribute(s,o,l,c,f,new Xe)),a&&(u.normal=Wn.getInterpolatedAttribute(a,o,l,c,f,new W),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new W,materialIndex:0};Wn.getNormal(to,no,io,h.normal),u.face=h,u.barycoord=f}return u}class Os extends Hi{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ii(c,3)),this.setAttribute("normal",new Ii(u,3)),this.setAttribute("uv",new Ii(f,2));function g(_,m,p,M,E,S,y,w,R,L,v){const A=S/R,I=y/L,z=S/2,B=y/2,Z=w/2,j=R+1,k=L+1;let F=0,Y=0;const pe=new W;for(let de=0;de<k;de++){const se=de*I-B;for(let te=0;te<j;te++){const De=te*A-z;pe[_]=De*M,pe[m]=se*E,pe[p]=Z,c.push(pe.x,pe.y,pe.z),pe[_]=0,pe[m]=0,pe[p]=w>0?1:-1,u.push(pe.x,pe.y,pe.z),f.push(te/R),f.push(1-de/L),F+=1}}for(let de=0;de<L;de++)for(let se=0;se<R;se++){const te=h+se+j*de,De=h+se+j*(de+1),Oe=h+(se+1)+j*(de+1),He=h+(se+1)+j*de;l.push(te,De,He),l.push(De,Oe,He),Y+=6}o.addGroup(d,Y,v),d+=Y,h+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Os(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ps(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Ve("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Zt(n){const e={};for(let t=0;t<n.length;t++){const i=Ps(n[t]);for(const r in i)e[r]=i[r]}return e}function pv(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function gm(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const mv={clone:Ps,merge:Zt};var _v=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pi extends Fa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_v,this.fragmentShader=gv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ps(e.uniforms),this.uniformsGroups=pv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class xm extends Yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt,this.coordinateSystem=ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ji=new W,Xh=new Xe,qh=new Xe;class Nn extends xm{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=vu*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ao*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vu*2*Math.atan(Math.tan(Ao*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ji.x,ji.y).multiplyScalar(-e/ji.z),ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ji.x,ji.y).multiplyScalar(-e/ji.z)}getViewSize(e,t){return this.getViewBounds(e,Xh,qh),t.subVectors(qh,Xh)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ao*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ss=-90,as=1;class xv extends Yt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Nn(ss,as,e,t);r.layers=this.layers,this.add(r);const s=new Nn(ss,as,e,t);s.layers=this.layers,this.add(s);const a=new Nn(ss,as,e,t);a.layers=this.layers,this.add(a);const o=new Nn(ss,as,e,t);o.layers=this.layers,this.add(o);const l=new Nn(ss,as,e,t);l.layers=this.layers,this.add(l);const c=new Nn(ss,as,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===ii)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Vo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class vm extends tn{constructor(e=[],t=Hr,i,r,s,a,o,l,c,u){super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Sm extends oi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new vm(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Os(5,5,5),s=new pi({name:"CubemapFromEquirect",uniforms:Ps(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:cn,blending:Di});s.uniforms.tEquirect.value=t;const a=new di(r,s),o=t.minFilter;return t.minFilter===Ir&&(t.minFilter=Xt),new xv(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}class oo extends Yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vv={type:"move"};class Jl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new oo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new oo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new oo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(vv)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new oo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Sv extends Yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hi,this.environmentIntensity=1,this.environmentRotation=new hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Mv extends tn{constructor(e=null,t=1,i=1,r,s,a,o,l,c=Bt,u=Bt,f,h){super(null,a,o,l,c,u,r,s,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ql=new W,yv=new W,bv=new Ye;class Ji{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ql.subVectors(i,t).cross(yv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ql),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||bv.getNormalMatrix(e),r=this.coplanarPoint(Ql).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yr=new hf,Ev=new Xe(.5,.5),lo=new W;class df{constructor(e=new Ji,t=new Ji,i=new Ji,r=new Ji,s=new Ji,a=new Ji){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ii,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],f=s[5],h=s[6],d=s[7],g=s[8],_=s[9],m=s[10],p=s[11],M=s[12],E=s[13],S=s[14],y=s[15];if(r[0].setComponents(c-a,d-u,p-g,y-M).normalize(),r[1].setComponents(c+a,d+u,p+g,y+M).normalize(),r[2].setComponents(c+o,d+f,p+_,y+E).normalize(),r[3].setComponents(c-o,d-f,p-_,y-E).normalize(),i)r[4].setComponents(l,h,m,S).normalize(),r[5].setComponents(c-l,d-h,p-m,y-S).normalize();else if(r[4].setComponents(c-l,d-h,p-m,y-S).normalize(),t===ii)r[5].setComponents(c+l,d+h,p+m,y+S).normalize();else if(t===Vo)r[5].setComponents(l,h,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),yr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yr)}intersectsSprite(e){yr.center.set(0,0,0);const t=Ev.distanceTo(e.center);return yr.radius=.7071067811865476+t,yr.applyMatrix4(e.matrixWorld),this.intersectsSphere(yr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(lo.x=r.normal.x>0?e.max.x:e.min.x,lo.y=r.normal.y>0?e.max.y:e.min.y,lo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(lo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ba extends tn{constructor(e,t,i=fi,r,s,a,o=Bt,l=Bt,c,u=Bi,f=1){if(u!==Bi&&u!==Ur)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ff(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Tv extends ba{constructor(e,t=fi,i=Hr,r,s,a=Bt,o=Bt,l,c=Bi){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,i,r,s,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Mm extends tn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class cl extends Hi{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,h=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const M=p*h-a;for(let E=0;E<c;E++){const S=E*f-s;g.push(S,-M,0),_.push(0,0,1),m.push(E/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){const E=M+c*p,S=M+c*(p+1),y=M+1+c*(p+1),w=M+1+c*p;d.push(E,S,w),d.push(S,y,w)}this.setIndex(d),this.setAttribute("position",new Ii(g,3)),this.setAttribute("normal",new Ii(_,3)),this.setAttribute("uv",new Ii(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cl(e.width,e.height,e.widthSegments,e.heightSegments)}}class Av extends pi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class wv extends Fa{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lm,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Rv extends wv{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Xe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ze(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Je(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Je(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Je(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Cv extends Fa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Pv extends Fa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class ym extends Yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const ec=new wt,Yh=new W,jh=new W;class Dv{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.mapType=Mn,this.map=null,this.mapPass=null,this.matrix=new wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new df,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new Tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Yh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Yh),jh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(jh),t.updateMatrixWorld(),ec.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ec,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ec)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class pf extends xm{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Lv extends Dv{constructor(){super(new pf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Kh extends ym{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.target=new Yt,this.shadow=new Lv}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Iv extends ym{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Uv extends Nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class $h{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ze(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ze(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Nv extends Wr{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Ve("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Zh(n,e,t,i){const r=Fv(i);switch(t){case sm:return n*e;case om:return n*e/r.components*r.byteLength;case af:return n*e/r.components*r.byteLength;case Rs:return n*e*2/r.components*r.byteLength;case of:return n*e*2/r.components*r.byteLength;case am:return n*e*3/r.components*r.byteLength;case Xn:return n*e*4/r.components*r.byteLength;case lf:return n*e*4/r.components*r.byteLength;case yo:case bo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Eo:case To:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Hc:case Wc:return Math.max(n,16)*Math.max(e,8)/4;case Vc:case Gc:return Math.max(n,8)*Math.max(e,8)/2;case Xc:case qc:case jc:case Kc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Yc:case $c:case Zc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Jc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Qc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case eu:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case tu:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case nu:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case iu:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ru:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case su:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case au:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case ou:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case lu:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case cu:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case uu:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case fu:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case hu:case du:case pu:return Math.ceil(n/4)*Math.ceil(e/4)*16;case mu:case _u:return Math.ceil(n/4)*Math.ceil(e/4)*8;case gu:case xu:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Fv(n){switch(n){case Mn:case tm:return{byteLength:1,components:1};case Sa:case nm:case Oi:return{byteLength:2,components:1};case rf:case sf:return{byteLength:2,components:4};case fi:case nf:case ni:return{byteLength:4,components:1};case im:case rm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ef}}));typeof window<"u"&&(window.__THREE__?Ve("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ef);function bm(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Ov(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,u);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){const g=f[h],_=f[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,f[h]=_)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){const _=f[d];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Bv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zv=`#ifdef USE_ALPHAHASH
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
#endif`,kv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wv=`#ifdef USE_AOMAP
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
#endif`,Xv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qv=`#ifdef USE_BATCHING
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
#endif`,Yv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$v=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Zv=`#ifdef USE_IRIDESCENCE
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
#endif`,Jv=`#ifdef USE_BUMPMAP
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
#endif`,Qv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,eS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,iS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,aS=`#if defined( USE_COLOR_ALPHA )
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
#endif`,oS=`#define PI 3.141592653589793
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
} // validated`,lS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,cS=`vec3 transformedNormal = objectNormal;
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
#endif`,uS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pS="gl_FragColor = linearToOutputTexel( gl_FragColor );",mS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_S=`#ifdef USE_ENVMAP
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
#endif`,gS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,xS=`#ifdef USE_ENVMAP
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
#endif`,vS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,SS=`#ifdef USE_ENVMAP
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
#endif`,MS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ES=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,TS=`#ifdef USE_GRADIENTMAP
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
}`,AS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,RS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,CS=`uniform bool receiveShadow;
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
#endif`,PS=`#ifdef USE_ENVMAP
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
#endif`,DS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,LS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,IS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,US=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,NS=`PhysicalMaterial material;
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
#endif`,FS=`uniform sampler2D dfgLUT;
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
}`,OS=`
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
#endif`,BS=`#if defined( RE_IndirectDiffuse )
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
#endif`,zS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,VS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,HS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,GS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,WS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,XS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,YS=`#if defined( USE_POINTS_UV )
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
#endif`,jS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,KS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$S=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ZS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,JS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,QS=`#ifdef USE_MORPHTARGETS
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
#endif`,eM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,nM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,iM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,aM=`#ifdef USE_NORMALMAP
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
#endif`,oM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,uM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,dM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_M=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,SM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,MM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,yM=`float getShadowMask() {
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
}`,bM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,EM=`#ifdef USE_SKINNING
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
#endif`,TM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,AM=`#ifdef USE_SKINNING
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
#endif`,wM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,RM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,CM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,PM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,DM=`#ifdef USE_TRANSMISSION
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
#endif`,LM=`#ifdef USE_TRANSMISSION
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
#endif`,IM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,UM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,NM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,FM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const OM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,BM=`uniform sampler2D t2D;
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
}`,zM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,VM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,HM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GM=`#include <common>
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
}`,WM=`#if DEPTH_PACKING == 3200
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
}`,XM=`#define DISTANCE
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
}`,qM=`#define DISTANCE
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
}`,YM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KM=`uniform float scale;
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
}`,$M=`uniform vec3 diffuse;
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
}`,ZM=`#include <common>
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
}`,JM=`uniform vec3 diffuse;
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
}`,QM=`#define LAMBERT
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
}`,ey=`#define LAMBERT
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
}`,ty=`#define MATCAP
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
}`,ny=`#define MATCAP
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
}`,iy=`#define NORMAL
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
}`,ry=`#define NORMAL
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
}`,sy=`#define PHONG
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
}`,ay=`#define PHONG
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
}`,oy=`#define STANDARD
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
}`,ly=`#define STANDARD
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
}`,cy=`#define TOON
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
}`,uy=`#define TOON
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
}`,fy=`uniform float size;
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
}`,hy=`uniform vec3 diffuse;
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
}`,dy=`#include <common>
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
}`,py=`uniform vec3 color;
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
}`,my=`uniform float rotation;
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
}`,_y=`uniform vec3 diffuse;
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
}`,Ke={alphahash_fragment:Bv,alphahash_pars_fragment:zv,alphamap_fragment:kv,alphamap_pars_fragment:Vv,alphatest_fragment:Hv,alphatest_pars_fragment:Gv,aomap_fragment:Wv,aomap_pars_fragment:Xv,batching_pars_vertex:qv,batching_vertex:Yv,begin_vertex:jv,beginnormal_vertex:Kv,bsdfs:$v,iridescence_fragment:Zv,bumpmap_pars_fragment:Jv,clipping_planes_fragment:Qv,clipping_planes_pars_fragment:eS,clipping_planes_pars_vertex:tS,clipping_planes_vertex:nS,color_fragment:iS,color_pars_fragment:rS,color_pars_vertex:sS,color_vertex:aS,common:oS,cube_uv_reflection_fragment:lS,defaultnormal_vertex:cS,displacementmap_pars_vertex:uS,displacementmap_vertex:fS,emissivemap_fragment:hS,emissivemap_pars_fragment:dS,colorspace_fragment:pS,colorspace_pars_fragment:mS,envmap_fragment:_S,envmap_common_pars_fragment:gS,envmap_pars_fragment:xS,envmap_pars_vertex:vS,envmap_physical_pars_fragment:PS,envmap_vertex:SS,fog_vertex:MS,fog_pars_vertex:yS,fog_fragment:bS,fog_pars_fragment:ES,gradientmap_pars_fragment:TS,lightmap_pars_fragment:AS,lights_lambert_fragment:wS,lights_lambert_pars_fragment:RS,lights_pars_begin:CS,lights_toon_fragment:DS,lights_toon_pars_fragment:LS,lights_phong_fragment:IS,lights_phong_pars_fragment:US,lights_physical_fragment:NS,lights_physical_pars_fragment:FS,lights_fragment_begin:OS,lights_fragment_maps:BS,lights_fragment_end:zS,logdepthbuf_fragment:kS,logdepthbuf_pars_fragment:VS,logdepthbuf_pars_vertex:HS,logdepthbuf_vertex:GS,map_fragment:WS,map_pars_fragment:XS,map_particle_fragment:qS,map_particle_pars_fragment:YS,metalnessmap_fragment:jS,metalnessmap_pars_fragment:KS,morphinstance_vertex:$S,morphcolor_vertex:ZS,morphnormal_vertex:JS,morphtarget_pars_vertex:QS,morphtarget_vertex:eM,normal_fragment_begin:tM,normal_fragment_maps:nM,normal_pars_fragment:iM,normal_pars_vertex:rM,normal_vertex:sM,normalmap_pars_fragment:aM,clearcoat_normal_fragment_begin:oM,clearcoat_normal_fragment_maps:lM,clearcoat_pars_fragment:cM,iridescence_pars_fragment:uM,opaque_fragment:fM,packing:hM,premultiplied_alpha_fragment:dM,project_vertex:pM,dithering_fragment:mM,dithering_pars_fragment:_M,roughnessmap_fragment:gM,roughnessmap_pars_fragment:xM,shadowmap_pars_fragment:vM,shadowmap_pars_vertex:SM,shadowmap_vertex:MM,shadowmask_pars_fragment:yM,skinbase_vertex:bM,skinning_pars_vertex:EM,skinning_vertex:TM,skinnormal_vertex:AM,specularmap_fragment:wM,specularmap_pars_fragment:RM,tonemapping_fragment:CM,tonemapping_pars_fragment:PM,transmission_fragment:DM,transmission_pars_fragment:LM,uv_pars_fragment:IM,uv_pars_vertex:UM,uv_vertex:NM,worldpos_vertex:FM,background_vert:OM,background_frag:BM,backgroundCube_vert:zM,backgroundCube_frag:kM,cube_vert:VM,cube_frag:HM,depth_vert:GM,depth_frag:WM,distance_vert:XM,distance_frag:qM,equirect_vert:YM,equirect_frag:jM,linedashed_vert:KM,linedashed_frag:$M,meshbasic_vert:ZM,meshbasic_frag:JM,meshlambert_vert:QM,meshlambert_frag:ey,meshmatcap_vert:ty,meshmatcap_frag:ny,meshnormal_vert:iy,meshnormal_frag:ry,meshphong_vert:sy,meshphong_frag:ay,meshphysical_vert:oy,meshphysical_frag:ly,meshtoon_vert:cy,meshtoon_frag:uy,points_vert:fy,points_frag:hy,shadow_vert:dy,shadow_frag:py,sprite_vert:my,sprite_frag:_y},Me={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},ei={basic:{uniforms:Zt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:Zt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Je(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:Zt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:Zt([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:Zt([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new Je(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:Zt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:Zt([Me.points,Me.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:Zt([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:Zt([Me.common,Me.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:Zt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:Zt([Me.sprite,Me.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distance:{uniforms:Zt([Me.common,Me.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distance_vert,fragmentShader:Ke.distance_frag},shadow:{uniforms:Zt([Me.lights,Me.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};ei.physical={uniforms:Zt([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const co={r:0,b:0,g:0},br=new hi,gy=new wt;function xy(n,e,t,i,r,s,a){const o=new Je(0);let l=s===!0?0:1,c,u,f=null,h=0,d=null;function g(E){let S=E.isScene===!0?E.background:null;return S&&S.isTexture&&(S=(E.backgroundBlurriness>0?t:e).get(S)),S}function _(E){let S=!1;const y=g(E);y===null?p(o,l):y&&y.isColor&&(p(y,1),S=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(E,S){const y=g(S);y&&(y.isCubeTexture||y.mapping===ll)?(u===void 0&&(u=new di(new Os(1,1,1),new pi({name:"BackgroundCubeMaterial",uniforms:Ps(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,R,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),br.copy(S.backgroundRotation),br.x*=-1,br.y*=-1,br.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(br.y*=-1,br.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(gy.makeRotationFromEuler(br)),u.material.toneMapped=tt.getTransfer(y.colorSpace)!==lt,(f!==y||h!==y.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,f=y,h=y.version,d=n.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new di(new cl(2,2),new pi({name:"BackgroundMaterial",uniforms:Ps(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:cr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=tt.getTransfer(y.colorSpace)!==lt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||h!==y.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,f=y,h=y.version,d=n.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function p(E,S){E.getRGB(co,gm(n)),i.buffers.color.setClear(co.r,co.g,co.b,S,a)}function M(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,S=1){o.set(E),l=S,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,p(o,l)},render:_,addToRenderList:m,dispose:M}}function vy(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(A,I,z,B,Z){let j=!1;const k=f(B,z,I);s!==k&&(s=k,c(s.object)),j=d(A,B,z,Z),j&&g(A,B,z,Z),Z!==null&&e.update(Z,n.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,S(A,I,z,B),Z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function l(){return n.createVertexArray()}function c(A){return n.bindVertexArray(A)}function u(A){return n.deleteVertexArray(A)}function f(A,I,z){const B=z.wireframe===!0;let Z=i[A.id];Z===void 0&&(Z={},i[A.id]=Z);let j=Z[I.id];j===void 0&&(j={},Z[I.id]=j);let k=j[B];return k===void 0&&(k=h(l()),j[B]=k),k}function h(A){const I=[],z=[],B=[];for(let Z=0;Z<t;Z++)I[Z]=0,z[Z]=0,B[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:z,attributeDivisors:B,object:A,attributes:{},index:null}}function d(A,I,z,B){const Z=s.attributes,j=I.attributes;let k=0;const F=z.getAttributes();for(const Y in F)if(F[Y].location>=0){const de=Z[Y];let se=j[Y];if(se===void 0&&(Y==="instanceMatrix"&&A.instanceMatrix&&(se=A.instanceMatrix),Y==="instanceColor"&&A.instanceColor&&(se=A.instanceColor)),de===void 0||de.attribute!==se||se&&de.data!==se.data)return!0;k++}return s.attributesNum!==k||s.index!==B}function g(A,I,z,B){const Z={},j=I.attributes;let k=0;const F=z.getAttributes();for(const Y in F)if(F[Y].location>=0){let de=j[Y];de===void 0&&(Y==="instanceMatrix"&&A.instanceMatrix&&(de=A.instanceMatrix),Y==="instanceColor"&&A.instanceColor&&(de=A.instanceColor));const se={};se.attribute=de,de&&de.data&&(se.data=de.data),Z[Y]=se,k++}s.attributes=Z,s.attributesNum=k,s.index=B}function _(){const A=s.newAttributes;for(let I=0,z=A.length;I<z;I++)A[I]=0}function m(A){p(A,0)}function p(A,I){const z=s.newAttributes,B=s.enabledAttributes,Z=s.attributeDivisors;z[A]=1,B[A]===0&&(n.enableVertexAttribArray(A),B[A]=1),Z[A]!==I&&(n.vertexAttribDivisor(A,I),Z[A]=I)}function M(){const A=s.newAttributes,I=s.enabledAttributes;for(let z=0,B=I.length;z<B;z++)I[z]!==A[z]&&(n.disableVertexAttribArray(z),I[z]=0)}function E(A,I,z,B,Z,j,k){k===!0?n.vertexAttribIPointer(A,I,z,Z,j):n.vertexAttribPointer(A,I,z,B,Z,j)}function S(A,I,z,B){_();const Z=B.attributes,j=z.getAttributes(),k=I.defaultAttributeValues;for(const F in j){const Y=j[F];if(Y.location>=0){let pe=Z[F];if(pe===void 0&&(F==="instanceMatrix"&&A.instanceMatrix&&(pe=A.instanceMatrix),F==="instanceColor"&&A.instanceColor&&(pe=A.instanceColor)),pe!==void 0){const de=pe.normalized,se=pe.itemSize,te=e.get(pe);if(te===void 0)continue;const De=te.buffer,Oe=te.type,He=te.bytesPerElement,Q=Oe===n.INT||Oe===n.UNSIGNED_INT||pe.gpuType===nf;if(pe.isInterleavedBufferAttribute){const re=pe.data,Te=re.stride,Ge=pe.offset;if(re.isInstancedInterleavedBuffer){for(let Ce=0;Ce<Y.locationSize;Ce++)p(Y.location+Ce,re.meshPerAttribute);A.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Ce=0;Ce<Y.locationSize;Ce++)m(Y.location+Ce);n.bindBuffer(n.ARRAY_BUFFER,De);for(let Ce=0;Ce<Y.locationSize;Ce++)E(Y.location+Ce,se/Y.locationSize,Oe,de,Te*He,(Ge+se/Y.locationSize*Ce)*He,Q)}else{if(pe.isInstancedBufferAttribute){for(let re=0;re<Y.locationSize;re++)p(Y.location+re,pe.meshPerAttribute);A.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let re=0;re<Y.locationSize;re++)m(Y.location+re);n.bindBuffer(n.ARRAY_BUFFER,De);for(let re=0;re<Y.locationSize;re++)E(Y.location+re,se/Y.locationSize,Oe,de,se*He,se/Y.locationSize*re*He,Q)}}else if(k!==void 0){const de=k[F];if(de!==void 0)switch(de.length){case 2:n.vertexAttrib2fv(Y.location,de);break;case 3:n.vertexAttrib3fv(Y.location,de);break;case 4:n.vertexAttrib4fv(Y.location,de);break;default:n.vertexAttrib1fv(Y.location,de)}}}}M()}function y(){L();for(const A in i){const I=i[A];for(const z in I){const B=I[z];for(const Z in B)u(B[Z].object),delete B[Z];delete I[z]}delete i[A]}}function w(A){if(i[A.id]===void 0)return;const I=i[A.id];for(const z in I){const B=I[z];for(const Z in B)u(B[Z].object),delete B[Z];delete I[z]}delete i[A.id]}function R(A){for(const I in i){const z=i[I];if(z[A.id]===void 0)continue;const B=z[A.id];for(const Z in B)u(B[Z].object),delete B[Z];delete z[A.id]}}function L(){v(),a=!0,s!==r&&(s=r,c(s.object))}function v(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:L,resetDefaultState:v,dispose:y,releaseStatesOfGeometry:w,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function Sy(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function a(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function o(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let d=0;for(let g=0;g<f;g++)d+=u[g];t.update(d,i,1)}function l(c,u,f,h){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)a(c[g],u[g],h[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_]*h[_];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function My(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==Xn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const L=R===Oi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Mn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==ni&&!L)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Ve("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:E,maxFragmentUniforms:S,maxSamples:y,samples:w}}function yy(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Ji,o=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||r;return r=h,i=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const M=s?0:i,E=M*4;let S=p.clippingState||null;l.value=S,S=u(g,h,E,d);for(let y=0;y!==E;++y)S[y]=t[y];p.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,d,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,M=h.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,S=d;E!==_;++E,S+=4)a.copy(f[E]).applyMatrix4(M,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function by(n){let e=new WeakMap;function t(a,o){return o===Oc?a.mapping=Hr:o===Bc&&(a.mapping=ws),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Oc||o===Bc)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Sm(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const er=4,Jh=[.125,.215,.35,.446,.526,.582],Lr=20,Ey=256,js=new pf,Qh=new Je;let tc=null,nc=0,ic=0,rc=!1;const Ty=new W;class ed{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=Ty}=s;tc=this._renderer.getRenderTarget(),nc=this._renderer.getActiveCubeFace(),ic=this._renderer.getActiveMipmapLevel(),rc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=id(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(tc,nc,ic),this._renderer.xr.enabled=rc,e.scissorTest=!1,os(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Hr||e.mapping===ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),tc=this._renderer.getRenderTarget(),nc=this._renderer.getActiveCubeFace(),ic=this._renderer.getActiveMipmapLevel(),rc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Xt,minFilter:Xt,generateMipmaps:!1,type:Oi,format:Xn,colorSpace:Cs,depthBuffer:!1},r=td(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=td(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Ay(s)),this._blurMaterial=Ry(s,e,t),this._ggxMaterial=wy(s,e,t)}return r}_compileMaterial(e){const t=new di(new Hi,e);this._renderer.compile(t,js)}_sceneToCubeUV(e,t,i,r,s){const l=new Nn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(Qh),f.toneMapping=ai,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new di(new Os,new pm({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let p=!1;const M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,p=!0):(m.color.copy(Qh),p=!0);for(let E=0;E<6;E++){const S=E%3;S===0?(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[E],s.y,s.z)):S===1?(l.up.set(0,0,c[E]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[E],s.z)):(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[E]));const y=this._cubeSize;os(r,S*y,E>2?y:0,y,y),f.setRenderTarget(r),p&&f.render(_,l),f.render(e,l)}f.toneMapping=d,f.autoClear=h,e.background=M}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Hr||e.mapping===ws;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=id()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nd());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;os(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,js)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=0+c*1.25,d=f*h,{_lodMax:g}=this,_=this._sizeLods[i],m=3*_*(i>g-er?i-g+er:0),p=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=g-t,os(s,m,p,3*_,2*_),r.setRenderTarget(s),r.render(o,js),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-i,os(e,m,p,3*_,2*_),r.setRenderTarget(e),r.render(o,js)}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&it("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[r];f.material=c;const h=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Lr-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):Lr;m>Lr&&Ve(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Lr}`);const p=[];let M=0;for(let R=0;R<Lr;++R){const L=R/_,v=Math.exp(-L*L/2);p.push(v),R===0?M+=v:R<m&&(M+=2*v)}for(let R=0;R<p.length;R++)p[R]=p[R]/M;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:E}=this;h.dTheta.value=g,h.mipInt.value=E-i;const S=this._sizeLods[r],y=3*S*(r>E-er?r-E+er:0),w=4*(this._cubeSize-S);os(t,y,w,3*S,2*S),l.setRenderTarget(t),l.render(f,js)}}function Ay(n){const e=[],t=[],i=[];let r=n;const s=n-er+1+Jh.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>n-er?l=Jh[a-n+er-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,_=3,m=2,p=1,M=new Float32Array(_*g*d),E=new Float32Array(m*g*d),S=new Float32Array(p*g*d);for(let w=0;w<d;w++){const R=w%3*2/3-1,L=w>2?0:-1,v=[R,L,0,R+2/3,L,0,R+2/3,L+1,0,R,L,0,R+2/3,L+1,0,R,L+1,0];M.set(v,_*g*w),E.set(h,m*g*w);const A=[w,w,w,w,w,w];S.set(A,p*g*w)}const y=new Hi;y.setAttribute("position",new li(M,_)),y.setAttribute("uv",new li(E,m)),y.setAttribute("faceIndex",new li(S,p)),i.push(new di(y,null)),r>er&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function td(n,e,t){const i=new oi(n,e,t);return i.texture.mapping=ll,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function os(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function wy(n,e,t){return new pi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Ey,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ul(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Ry(n,e,t){const i=new Float32Array(Lr),r=new W(0,1,0);return new pi({name:"SphericalGaussianBlur",defines:{n:Lr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ul(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function nd(){return new pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ul(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function id(){return new pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ul(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function ul(){return`

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
	`}function Cy(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Oc||l===Bc,u=l===Hr||l===ws;if(c||u){let f=e.get(o);const h=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new ed(n)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const d=o.image;return c&&d&&d.height>0||u&&d&&r(d)?(t===null&&(t=new ed(n)),f=c?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Py(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&ya("WebGLRenderer: "+i+" extension not supported."),r}}}function Dy(n,e,t,i){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete r[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)e.update(h[d],n.ARRAY_BUFFER)}function c(f){const h=[],d=f.index,g=f.attributes.position;let _=0;if(d!==null){const M=d.array;_=d.version;for(let E=0,S=M.length;E<S;E+=3){const y=M[E+0],w=M[E+1],R=M[E+2];h.push(y,w,w,R,R,y)}}else if(g!==void 0){const M=g.array;_=g.version;for(let E=0,S=M.length/3-1;E<S;E+=3){const y=E+0,w=E+1,R=E+2;h.push(y,w,w,R,R,y)}}else return;const m=new(cm(h)?_m:mm)(h,1);m.version=_;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function Ly(n,e,t){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,d){n.drawElements(i,d,s,h*a),t.update(d,i,1)}function c(h,d,g){g!==0&&(n.drawElementsInstanced(i,d,s,h*a,g),t.update(d,i,g))}function u(h,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,h,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,i,1)}function f(h,d,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/a,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,s,h,0,_,0,g);let p=0;for(let M=0;M<g;M++)p+=d[M]*_[M];t.update(p,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Iy(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:it("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Uy(n,e,t){const i=new WeakMap,r=new Tt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==f){let A=function(){L.dispose(),i.delete(o),o.removeEventListener("dispose",A)};var d=A;h!==void 0&&h.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let S=0;g===!0&&(S=1),_===!0&&(S=2),m===!0&&(S=3);let y=o.attributes.position.count*S,w=1;y>e.maxTextureSize&&(w=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const R=new Float32Array(y*w*4*f),L=new um(R,y,w,f);L.type=ni,L.needsUpdate=!0;const v=S*4;for(let I=0;I<f;I++){const z=p[I],B=M[I],Z=E[I],j=y*w*4*I;for(let k=0;k<z.count;k++){const F=k*v;g===!0&&(r.fromBufferAttribute(z,k),R[j+F+0]=r.x,R[j+F+1]=r.y,R[j+F+2]=r.z,R[j+F+3]=0),_===!0&&(r.fromBufferAttribute(B,k),R[j+F+4]=r.x,R[j+F+5]=r.y,R[j+F+6]=r.z,R[j+F+7]=0),m===!0&&(r.fromBufferAttribute(Z,k),R[j+F+8]=r.x,R[j+F+9]=r.y,R[j+F+10]=r.z,R[j+F+11]=Z.itemSize===4?r.w:1)}}h={count:f,texture:L,size:new Xe(y,w)},i.set(o,h),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function Ny(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const Fy={[jp]:"LINEAR_TONE_MAPPING",[Kp]:"REINHARD_TONE_MAPPING",[$p]:"CINEON_TONE_MAPPING",[tf]:"ACES_FILMIC_TONE_MAPPING",[Jp]:"AGX_TONE_MAPPING",[Qp]:"NEUTRAL_TONE_MAPPING",[Zp]:"CUSTOM_TONE_MAPPING"};function Oy(n,e,t,i,r){const s=new oi(e,t,{type:n,depthBuffer:i,stencilBuffer:r}),a=new oi(e,t,{type:Oi,depthBuffer:!1,stencilBuffer:!1}),o=new Hi;o.setAttribute("position",new Ii([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Ii([0,2,0,0,2,0],2));const l=new Av({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new di(o,l),u=new pf(-1,1,1,-1,0,1);let f=null,h=null,d=!1,g,_=null,m=[],p=!1;this.setSize=function(M,E){s.setSize(M,E),a.setSize(M,E);for(let S=0;S<m.length;S++){const y=m[S];y.setSize&&y.setSize(M,E)}},this.setEffects=function(M){m=M,p=m.length>0&&m[0].isRenderPass===!0;const E=s.width,S=s.height;for(let y=0;y<m.length;y++){const w=m[y];w.setSize&&w.setSize(E,S)}},this.begin=function(M,E){if(d||M.toneMapping===ai&&m.length===0)return!1;if(_=E,E!==null){const S=E.width,y=E.height;(s.width!==S||s.height!==y)&&this.setSize(S,y)}return p===!1&&M.setRenderTarget(s),g=M.toneMapping,M.toneMapping=ai,!0},this.hasRenderPass=function(){return p},this.end=function(M,E){M.toneMapping=g,d=!0;let S=s,y=a;for(let w=0;w<m.length;w++){const R=m[w];if(R.enabled!==!1&&(R.render(M,y,S,E),R.needsSwap!==!1)){const L=S;S=y,y=L}}if(f!==M.outputColorSpace||h!==M.toneMapping){f=M.outputColorSpace,h=M.toneMapping,l.defines={},tt.getTransfer(f)===lt&&(l.defines.SRGB_TRANSFER="");const w=Fy[h];w&&(l.defines[w]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=S.texture,M.setRenderTarget(_),M.render(c,u),_=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const Em=new tn,Su=new ba(1,1),Tm=new um,Am=new nv,wm=new vm,rd=[],sd=[],ad=new Float32Array(16),od=new Float32Array(9),ld=new Float32Array(4);function Bs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=rd[r];if(s===void 0&&(s=new Float32Array(r),rd[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function It(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ut(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function fl(n,e){let t=sd[e];t===void 0&&(t=new Int32Array(e),sd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function By(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function zy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;n.uniform2fv(this.addr,e),Ut(t,e)}}function ky(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;n.uniform3fv(this.addr,e),Ut(t,e)}}function Vy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;n.uniform4fv(this.addr,e),Ut(t,e)}}function Hy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(It(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(It(t,i))return;ld.set(i),n.uniformMatrix2fv(this.addr,!1,ld),Ut(t,i)}}function Gy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(It(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(It(t,i))return;od.set(i),n.uniformMatrix3fv(this.addr,!1,od),Ut(t,i)}}function Wy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(It(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(It(t,i))return;ad.set(i),n.uniformMatrix4fv(this.addr,!1,ad),Ut(t,i)}}function Xy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function qy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;n.uniform2iv(this.addr,e),Ut(t,e)}}function Yy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;n.uniform3iv(this.addr,e),Ut(t,e)}}function jy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;n.uniform4iv(this.addr,e),Ut(t,e)}}function Ky(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function $y(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;n.uniform2uiv(this.addr,e),Ut(t,e)}}function Zy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;n.uniform3uiv(this.addr,e),Ut(t,e)}}function Jy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;n.uniform4uiv(this.addr,e),Ut(t,e)}}function Qy(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Su.compareFunction=t.isReversedDepthBuffer()?uf:cf,s=Su):s=Em,t.setTexture2D(e||s,r)}function eb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Am,r)}function tb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||wm,r)}function nb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Tm,r)}function ib(n){switch(n){case 5126:return By;case 35664:return zy;case 35665:return ky;case 35666:return Vy;case 35674:return Hy;case 35675:return Gy;case 35676:return Wy;case 5124:case 35670:return Xy;case 35667:case 35671:return qy;case 35668:case 35672:return Yy;case 35669:case 35673:return jy;case 5125:return Ky;case 36294:return $y;case 36295:return Zy;case 36296:return Jy;case 35678:case 36198:case 36298:case 36306:case 35682:return Qy;case 35679:case 36299:case 36307:return eb;case 35680:case 36300:case 36308:case 36293:return tb;case 36289:case 36303:case 36311:case 36292:return nb}}function rb(n,e){n.uniform1fv(this.addr,e)}function sb(n,e){const t=Bs(e,this.size,2);n.uniform2fv(this.addr,t)}function ab(n,e){const t=Bs(e,this.size,3);n.uniform3fv(this.addr,t)}function ob(n,e){const t=Bs(e,this.size,4);n.uniform4fv(this.addr,t)}function lb(n,e){const t=Bs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function cb(n,e){const t=Bs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function ub(n,e){const t=Bs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function fb(n,e){n.uniform1iv(this.addr,e)}function hb(n,e){n.uniform2iv(this.addr,e)}function db(n,e){n.uniform3iv(this.addr,e)}function pb(n,e){n.uniform4iv(this.addr,e)}function mb(n,e){n.uniform1uiv(this.addr,e)}function _b(n,e){n.uniform2uiv(this.addr,e)}function gb(n,e){n.uniform3uiv(this.addr,e)}function xb(n,e){n.uniform4uiv(this.addr,e)}function vb(n,e,t){const i=this.cache,r=e.length,s=fl(t,r);It(i,s)||(n.uniform1iv(this.addr,s),Ut(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=Su:a=Em;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function Sb(n,e,t){const i=this.cache,r=e.length,s=fl(t,r);It(i,s)||(n.uniform1iv(this.addr,s),Ut(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Am,s[a])}function Mb(n,e,t){const i=this.cache,r=e.length,s=fl(t,r);It(i,s)||(n.uniform1iv(this.addr,s),Ut(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||wm,s[a])}function yb(n,e,t){const i=this.cache,r=e.length,s=fl(t,r);It(i,s)||(n.uniform1iv(this.addr,s),Ut(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Tm,s[a])}function bb(n){switch(n){case 5126:return rb;case 35664:return sb;case 35665:return ab;case 35666:return ob;case 35674:return lb;case 35675:return cb;case 35676:return ub;case 5124:case 35670:return fb;case 35667:case 35671:return hb;case 35668:case 35672:return db;case 35669:case 35673:return pb;case 5125:return mb;case 36294:return _b;case 36295:return gb;case 36296:return xb;case 35678:case 36198:case 36298:case 36306:case 35682:return vb;case 35679:case 36299:case 36307:return Sb;case 35680:case 36300:case 36308:case 36293:return Mb;case 36289:case 36303:case 36311:case 36292:return yb}}class Eb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=ib(t.type)}}class Tb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=bb(t.type)}}class Ab{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const sc=/(\w+)(\])?(\[|\.)?/g;function cd(n,e){n.seq.push(e),n.map[e.id]=e}function wb(n,e,t){const i=n.name,r=i.length;for(sc.lastIndex=0;;){const s=sc.exec(i),a=sc.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){cd(t,c===void 0?new Eb(o,n,e):new Tb(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new Ab(o),cd(t,f)),t=f}}}class wo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);wb(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function ud(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Rb=37297;let Cb=0;function Pb(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const fd=new Ye;function Db(n){tt._getMatrix(fd,tt.workingColorSpace,n);const e=`mat3( ${fd.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(n)){case ko:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return Ve("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function hd(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Pb(n.getShaderSource(e),o)}else return s}function Lb(n,e){const t=Db(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Ib={[jp]:"Linear",[Kp]:"Reinhard",[$p]:"Cineon",[tf]:"ACESFilmic",[Jp]:"AgX",[Qp]:"Neutral",[Zp]:"Custom"};function Ub(n,e){const t=Ib[e];return t===void 0?(Ve("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const uo=new W;function Nb(){tt.getLuminanceCoefficients(uo);const n=uo.x.toFixed(4),e=uo.y.toFixed(4),t=uo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Fb(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ea).join(`
`)}function Ob(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Bb(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function ea(n){return n!==""}function dd(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function pd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const zb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mu(n){return n.replace(zb,Vb)}const kb=new Map;function Vb(n,e){let t=Ke[e];if(t===void 0){const i=kb.get(e);if(i!==void 0)t=Ke[i],Ve('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Mu(t)}const Hb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function md(n){return n.replace(Hb,Gb)}function Gb(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function _d(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const Wb={[Mo]:"SHADOWMAP_TYPE_PCF",[Qs]:"SHADOWMAP_TYPE_VSM"};function Xb(n){return Wb[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const qb={[Hr]:"ENVMAP_TYPE_CUBE",[ws]:"ENVMAP_TYPE_CUBE",[ll]:"ENVMAP_TYPE_CUBE_UV"};function Yb(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":qb[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const jb={[ws]:"ENVMAP_MODE_REFRACTION"};function Kb(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":jb[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const $b={[Yp]:"ENVMAP_BLENDING_MULTIPLY",[Fx]:"ENVMAP_BLENDING_MIX",[Ox]:"ENVMAP_BLENDING_ADD"};function Zb(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":$b[n.combine]||"ENVMAP_BLENDING_NONE"}function Jb(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Qb(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Xb(t),c=Yb(t),u=Kb(t),f=Zb(t),h=Jb(t),d=Fb(t),g=Ob(s),_=r.createProgram();let m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ea).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ea).join(`
`),p.length>0&&(p+=`
`)):(m=[_d(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ea).join(`
`),p=[_d(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ai?"#define TONE_MAPPING":"",t.toneMapping!==ai?Ke.tonemapping_pars_fragment:"",t.toneMapping!==ai?Ub("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,Lb("linearToOutputTexel",t.outputColorSpace),Nb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ea).join(`
`)),a=Mu(a),a=dd(a,t),a=pd(a,t),o=Mu(o),o=dd(o,t),o=pd(o,t),a=md(a),o=md(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Rh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Rh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=M+m+a,S=M+p+o,y=ud(r,r.VERTEX_SHADER,E),w=ud(r,r.FRAGMENT_SHADER,S);r.attachShader(_,y),r.attachShader(_,w),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function R(I){if(n.debug.checkShaderErrors){const z=r.getProgramInfoLog(_)||"",B=r.getShaderInfoLog(y)||"",Z=r.getShaderInfoLog(w)||"",j=z.trim(),k=B.trim(),F=Z.trim();let Y=!0,pe=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(Y=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,y,w);else{const de=hd(r,y,"vertex"),se=hd(r,w,"fragment");it("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+j+`
`+de+`
`+se)}else j!==""?Ve("WebGLProgram: Program Info Log:",j):(k===""||F==="")&&(pe=!1);pe&&(I.diagnostics={runnable:Y,programLog:j,vertexShader:{log:k,prefix:m},fragmentShader:{log:F,prefix:p}})}r.deleteShader(y),r.deleteShader(w),L=new wo(r,_),v=Bb(r,_)}let L;this.getUniforms=function(){return L===void 0&&R(this),L};let v;this.getAttributes=function(){return v===void 0&&R(this),v};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=r.getProgramParameter(_,Rb)),A},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Cb++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=y,this.fragmentShader=w,this}let eE=0;class tE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new nE(e),t.set(e,i)),i}}class nE{constructor(e){this.id=eE++,this.code=e,this.usedTimes=0}}function iE(n,e,t,i,r,s,a){const o=new hm,l=new tE,c=new Set,u=[],f=new Map,h=r.logarithmicDepthBuffer;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,A,I,z,B){const Z=z.fog,j=B.geometry,k=v.isMeshStandardMaterial?z.environment:null,F=(v.isMeshStandardMaterial?t:e).get(v.envMap||k),Y=F&&F.mapping===ll?F.image.height:null,pe=g[v.type];v.precision!==null&&(d=r.getMaxPrecision(v.precision),d!==v.precision&&Ve("WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));const de=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,se=de!==void 0?de.length:0;let te=0;j.morphAttributes.position!==void 0&&(te=1),j.morphAttributes.normal!==void 0&&(te=2),j.morphAttributes.color!==void 0&&(te=3);let De,Oe,He,Q;if(pe){const at=ei[pe];De=at.vertexShader,Oe=at.fragmentShader}else De=v.vertexShader,Oe=v.fragmentShader,l.update(v),He=l.getVertexShaderID(v),Q=l.getFragmentShaderID(v);const re=n.getRenderTarget(),Te=n.state.buffers.depth.getReversed(),Ge=B.isInstancedMesh===!0,Ce=B.isBatchedMesh===!0,et=!!v.map,P=!!v.matcap,U=!!F,G=!!v.aoMap,ne=!!v.lightMap,$=!!v.bumpMap,ie=!!v.normalMap,C=!!v.displacementMap,ce=!!v.emissiveMap,ae=!!v.metalnessMap,ee=!!v.roughnessMap,oe=v.anisotropy>0,b=v.clearcoat>0,x=v.dispersion>0,D=v.iridescence>0,X=v.sheen>0,J=v.transmission>0,H=oe&&!!v.anisotropyMap,ye=b&&!!v.clearcoatMap,fe=b&&!!v.clearcoatNormalMap,Ae=b&&!!v.clearcoatRoughnessMap,Ie=D&&!!v.iridescenceMap,ue=D&&!!v.iridescenceThicknessMap,ge=X&&!!v.sheenColorMap,ve=X&&!!v.sheenRoughnessMap,we=!!v.specularMap,_e=!!v.specularColorMap,qe=!!v.specularIntensityMap,N=J&&!!v.transmissionMap,Ee=J&&!!v.thicknessMap,me=!!v.gradientMap,Re=!!v.alphaMap,he=v.alphaTest>0,le=!!v.alphaHash,xe=!!v.extensions;let We=ai;v.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(We=n.toneMapping);const mt={shaderID:pe,shaderType:v.type,shaderName:v.name,vertexShader:De,fragmentShader:Oe,defines:v.defines,customVertexShaderID:He,customFragmentShaderID:Q,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:Ce,batchingColor:Ce&&B._colorsTexture!==null,instancing:Ge,instancingColor:Ge&&B.instanceColor!==null,instancingMorph:Ge&&B.morphTexture!==null,outputColorSpace:re===null?n.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Cs,alphaToCoverage:!!v.alphaToCoverage,map:et,matcap:P,envMap:U,envMapMode:U&&F.mapping,envMapCubeUVHeight:Y,aoMap:G,lightMap:ne,bumpMap:$,normalMap:ie,displacementMap:C,emissiveMap:ce,normalMapObjectSpace:ie&&v.normalMapType===kx,normalMapTangentSpace:ie&&v.normalMapType===lm,metalnessMap:ae,roughnessMap:ee,anisotropy:oe,anisotropyMap:H,clearcoat:b,clearcoatMap:ye,clearcoatNormalMap:fe,clearcoatRoughnessMap:Ae,dispersion:x,iridescence:D,iridescenceMap:Ie,iridescenceThicknessMap:ue,sheen:X,sheenColorMap:ge,sheenRoughnessMap:ve,specularMap:we,specularColorMap:_e,specularIntensityMap:qe,transmission:J,transmissionMap:N,thicknessMap:Ee,gradientMap:me,opaque:v.transparent===!1&&v.blending===vs&&v.alphaToCoverage===!1,alphaMap:Re,alphaTest:he,alphaHash:le,combine:v.combine,mapUv:et&&_(v.map.channel),aoMapUv:G&&_(v.aoMap.channel),lightMapUv:ne&&_(v.lightMap.channel),bumpMapUv:$&&_(v.bumpMap.channel),normalMapUv:ie&&_(v.normalMap.channel),displacementMapUv:C&&_(v.displacementMap.channel),emissiveMapUv:ce&&_(v.emissiveMap.channel),metalnessMapUv:ae&&_(v.metalnessMap.channel),roughnessMapUv:ee&&_(v.roughnessMap.channel),anisotropyMapUv:H&&_(v.anisotropyMap.channel),clearcoatMapUv:ye&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:fe&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:ve&&_(v.sheenRoughnessMap.channel),specularMapUv:we&&_(v.specularMap.channel),specularColorMapUv:_e&&_(v.specularColorMap.channel),specularIntensityMapUv:qe&&_(v.specularIntensityMap.channel),transmissionMapUv:N&&_(v.transmissionMap.channel),thicknessMapUv:Ee&&_(v.thicknessMap.channel),alphaMapUv:Re&&_(v.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(ie||oe),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!j.attributes.uv&&(et||Re),fog:!!Z,useFog:v.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:v.flatShading===!0&&v.wireframe===!1,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Te,skinning:B.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:te,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:We,decodeVideoTexture:et&&v.map.isVideoTexture===!0&&tt.getTransfer(v.map.colorSpace)===lt,decodeVideoTextureEmissive:ce&&v.emissiveMap.isVideoTexture===!0&&tt.getTransfer(v.emissiveMap.colorSpace)===lt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ri,flipSided:v.side===cn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:xe&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&v.extensions.multiDraw===!0||Ce)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return mt.vertexUv1s=c.has(1),mt.vertexUv2s=c.has(2),mt.vertexUv3s=c.has(3),c.clear(),mt}function p(v){const A=[];if(v.shaderID?A.push(v.shaderID):(A.push(v.customVertexShaderID),A.push(v.customFragmentShaderID)),v.defines!==void 0)for(const I in v.defines)A.push(I),A.push(v.defines[I]);return v.isRawShaderMaterial===!1&&(M(A,v),E(A,v),A.push(n.outputColorSpace)),A.push(v.customProgramCacheKey),A.join()}function M(v,A){v.push(A.precision),v.push(A.outputColorSpace),v.push(A.envMapMode),v.push(A.envMapCubeUVHeight),v.push(A.mapUv),v.push(A.alphaMapUv),v.push(A.lightMapUv),v.push(A.aoMapUv),v.push(A.bumpMapUv),v.push(A.normalMapUv),v.push(A.displacementMapUv),v.push(A.emissiveMapUv),v.push(A.metalnessMapUv),v.push(A.roughnessMapUv),v.push(A.anisotropyMapUv),v.push(A.clearcoatMapUv),v.push(A.clearcoatNormalMapUv),v.push(A.clearcoatRoughnessMapUv),v.push(A.iridescenceMapUv),v.push(A.iridescenceThicknessMapUv),v.push(A.sheenColorMapUv),v.push(A.sheenRoughnessMapUv),v.push(A.specularMapUv),v.push(A.specularColorMapUv),v.push(A.specularIntensityMapUv),v.push(A.transmissionMapUv),v.push(A.thicknessMapUv),v.push(A.combine),v.push(A.fogExp2),v.push(A.sizeAttenuation),v.push(A.morphTargetsCount),v.push(A.morphAttributeCount),v.push(A.numDirLights),v.push(A.numPointLights),v.push(A.numSpotLights),v.push(A.numSpotLightMaps),v.push(A.numHemiLights),v.push(A.numRectAreaLights),v.push(A.numDirLightShadows),v.push(A.numPointLightShadows),v.push(A.numSpotLightShadows),v.push(A.numSpotLightShadowsWithMaps),v.push(A.numLightProbes),v.push(A.shadowMapType),v.push(A.toneMapping),v.push(A.numClippingPlanes),v.push(A.numClipIntersection),v.push(A.depthPacking)}function E(v,A){o.disableAll(),A.instancing&&o.enable(0),A.instancingColor&&o.enable(1),A.instancingMorph&&o.enable(2),A.matcap&&o.enable(3),A.envMap&&o.enable(4),A.normalMapObjectSpace&&o.enable(5),A.normalMapTangentSpace&&o.enable(6),A.clearcoat&&o.enable(7),A.iridescence&&o.enable(8),A.alphaTest&&o.enable(9),A.vertexColors&&o.enable(10),A.vertexAlphas&&o.enable(11),A.vertexUv1s&&o.enable(12),A.vertexUv2s&&o.enable(13),A.vertexUv3s&&o.enable(14),A.vertexTangents&&o.enable(15),A.anisotropy&&o.enable(16),A.alphaHash&&o.enable(17),A.batching&&o.enable(18),A.dispersion&&o.enable(19),A.batchingColor&&o.enable(20),A.gradientMap&&o.enable(21),v.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.reversedDepthBuffer&&o.enable(4),A.skinning&&o.enable(5),A.morphTargets&&o.enable(6),A.morphNormals&&o.enable(7),A.morphColors&&o.enable(8),A.premultipliedAlpha&&o.enable(9),A.shadowMapEnabled&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.decodeVideoTextureEmissive&&o.enable(20),A.alphaToCoverage&&o.enable(21),v.push(o.mask)}function S(v){const A=g[v.type];let I;if(A){const z=ei[A];I=mv.clone(z.uniforms)}else I=v.uniforms;return I}function y(v,A){let I=f.get(A);return I!==void 0?++I.usedTimes:(I=new Qb(n,A,v,s),u.push(I),f.set(A,I)),I}function w(v){if(--v.usedTimes===0){const A=u.indexOf(v);u[A]=u[u.length-1],u.pop(),f.delete(v.cacheKey),v.destroy()}}function R(v){l.remove(v)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:y,releaseProgram:w,releaseShaderCache:R,programs:u,dispose:L}}function rE(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function sE(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function gd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function xd(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f,h,d,g,_,m){let p=n[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},n[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=m),e++,p}function o(f,h,d,g,_,m){const p=a(f,h,d,g,_,m);d.transmission>0?i.push(p):d.transparent===!0?r.push(p):t.push(p)}function l(f,h,d,g,_,m){const p=a(f,h,d,g,_,m);d.transmission>0?i.unshift(p):d.transparent===!0?r.unshift(p):t.unshift(p)}function c(f,h){t.length>1&&t.sort(f||sE),i.length>1&&i.sort(h||gd),r.length>1&&r.sort(h||gd)}function u(){for(let f=e,h=n.length;f<h;f++){const d=n[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function aE(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new xd,n.set(i,[a])):r>=s.length?(a=new xd,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function oE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new Je};break;case"SpotLight":t={position:new W,direction:new W,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new W,halfWidth:new W,halfHeight:new W};break}return n[e.id]=t,t}}}function lE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let cE=0;function uE(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function fE(n){const e=new oE,t=lE(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new W);const r=new W,s=new wt,a=new wt;function o(c){let u=0,f=0,h=0;for(let v=0;v<9;v++)i.probe[v].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,M=0,E=0,S=0,y=0,w=0,R=0;c.sort(uE);for(let v=0,A=c.length;v<A;v++){const I=c[v],z=I.color,B=I.intensity,Z=I.distance;let j=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Rs?j=I.shadow.map.texture:j=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=z.r*B,f+=z.g*B,h+=z.b*B;else if(I.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(I.sh.coefficients[k],B);R++}else if(I.isDirectionalLight){const k=e.get(I);if(k.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const F=I.shadow,Y=t.get(I);Y.shadowIntensity=F.intensity,Y.shadowBias=F.bias,Y.shadowNormalBias=F.normalBias,Y.shadowRadius=F.radius,Y.shadowMapSize=F.mapSize,i.directionalShadow[d]=Y,i.directionalShadowMap[d]=j,i.directionalShadowMatrix[d]=I.shadow.matrix,M++}i.directional[d]=k,d++}else if(I.isSpotLight){const k=e.get(I);k.position.setFromMatrixPosition(I.matrixWorld),k.color.copy(z).multiplyScalar(B),k.distance=Z,k.coneCos=Math.cos(I.angle),k.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),k.decay=I.decay,i.spot[_]=k;const F=I.shadow;if(I.map&&(i.spotLightMap[y]=I.map,y++,F.updateMatrices(I),I.castShadow&&w++),i.spotLightMatrix[_]=F.matrix,I.castShadow){const Y=t.get(I);Y.shadowIntensity=F.intensity,Y.shadowBias=F.bias,Y.shadowNormalBias=F.normalBias,Y.shadowRadius=F.radius,Y.shadowMapSize=F.mapSize,i.spotShadow[_]=Y,i.spotShadowMap[_]=j,S++}_++}else if(I.isRectAreaLight){const k=e.get(I);k.color.copy(z).multiplyScalar(B),k.halfWidth.set(I.width*.5,0,0),k.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=k,m++}else if(I.isPointLight){const k=e.get(I);if(k.color.copy(I.color).multiplyScalar(I.intensity),k.distance=I.distance,k.decay=I.decay,I.castShadow){const F=I.shadow,Y=t.get(I);Y.shadowIntensity=F.intensity,Y.shadowBias=F.bias,Y.shadowNormalBias=F.normalBias,Y.shadowRadius=F.radius,Y.shadowMapSize=F.mapSize,Y.shadowCameraNear=F.camera.near,Y.shadowCameraFar=F.camera.far,i.pointShadow[g]=Y,i.pointShadowMap[g]=j,i.pointShadowMatrix[g]=I.shadow.matrix,E++}i.point[g]=k,g++}else if(I.isHemisphereLight){const k=e.get(I);k.skyColor.copy(I.color).multiplyScalar(B),k.groundColor.copy(I.groundColor).multiplyScalar(B),i.hemi[p]=k,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Me.LTC_FLOAT_1,i.rectAreaLTC2=Me.LTC_FLOAT_2):(i.rectAreaLTC1=Me.LTC_HALF_1,i.rectAreaLTC2=Me.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const L=i.hash;(L.directionalLength!==d||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==M||L.numPointShadows!==E||L.numSpotShadows!==S||L.numSpotMaps!==y||L.numLightProbes!==R)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=S+y-w,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=R,L.directionalLength=d,L.pointLength=g,L.spotLength=_,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=M,L.numPointShadows=E,L.numSpotShadows=S,L.numSpotMaps=y,L.numLightProbes=R,i.version=cE++)}function l(c,u){let f=0,h=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const E=c[p];if(E.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),f++}else if(E.isSpotLight){const S=i.spot[d];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),d++}else if(E.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),a.identity(),s.copy(E.matrixWorld),s.premultiply(m),a.extractRotation(s),S.halfWidth.set(E.width*.5,0,0),S.halfHeight.set(0,E.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){const S=i.point[h];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),h++}else if(E.isHemisphereLight){const S=i.hemi[_];S.direction.setFromMatrixPosition(E.matrixWorld),S.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:i}}function vd(n){const e=new fE(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function hE(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new vd(n),e.set(r,[o])):s>=a.length?(o=new vd(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const dE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pE=`uniform sampler2D shadow_pass;
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
}`,mE=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],_E=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],Sd=new wt,Ks=new W,ac=new W;function gE(n,e,t){let i=new df;const r=new Xe,s=new Xe,a=new Tt,o=new Cv,l=new Pv,c={},u=t.maxTextureSize,f={[cr]:cn,[cn]:cr,[Ri]:Ri},h=new pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:dE,fragmentShader:pE}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new Hi;g.setAttribute("position",new li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new di(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mo;let p=this.type;this.render=function(w,R,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;w.type===qp&&(Ve("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),w.type=Mo);const v=n.getRenderTarget(),A=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),z=n.state;z.setBlending(Di),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const B=p!==this.type;B&&R.traverse(function(Z){Z.material&&(Array.isArray(Z.material)?Z.material.forEach(j=>j.needsUpdate=!0):Z.material.needsUpdate=!0)});for(let Z=0,j=w.length;Z<j;Z++){const k=w[Z],F=k.shadow;if(F===void 0){Ve("WebGLShadowMap:",k,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);const Y=F.getFrameExtents();if(r.multiply(Y),s.copy(F.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Y.x),r.x=s.x*Y.x,F.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Y.y),r.y=s.y*Y.y,F.mapSize.y=s.y)),F.map===null||B===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===Qs){if(k.isPointLight){Ve("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new oi(r.x,r.y,{format:Rs,type:Oi,minFilter:Xt,magFilter:Xt,generateMipmaps:!1}),F.map.texture.name=k.name+".shadowMap",F.map.depthTexture=new ba(r.x,r.y,ni),F.map.depthTexture.name=k.name+".shadowMapDepth",F.map.depthTexture.format=Bi,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Bt,F.map.depthTexture.magFilter=Bt}else{k.isPointLight?(F.map=new Sm(r.x),F.map.depthTexture=new Tv(r.x,fi)):(F.map=new oi(r.x,r.y),F.map.depthTexture=new ba(r.x,r.y,fi)),F.map.depthTexture.name=k.name+".shadowMap",F.map.depthTexture.format=Bi;const de=n.state.buffers.depth.getReversed();this.type===Mo?(F.map.depthTexture.compareFunction=de?uf:cf,F.map.depthTexture.minFilter=Xt,F.map.depthTexture.magFilter=Xt):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Bt,F.map.depthTexture.magFilter=Bt)}F.camera.updateProjectionMatrix()}const pe=F.map.isWebGLCubeRenderTarget?6:1;for(let de=0;de<pe;de++){if(F.map.isWebGLCubeRenderTarget)n.setRenderTarget(F.map,de),n.clear();else{de===0&&(n.setRenderTarget(F.map),n.clear());const se=F.getViewport(de);a.set(s.x*se.x,s.y*se.y,s.x*se.z,s.y*se.w),z.viewport(a)}if(k.isPointLight){const se=F.camera,te=F.matrix,De=k.distance||se.far;De!==se.far&&(se.far=De,se.updateProjectionMatrix()),Ks.setFromMatrixPosition(k.matrixWorld),se.position.copy(Ks),ac.copy(se.position),ac.add(mE[de]),se.up.copy(_E[de]),se.lookAt(ac),se.updateMatrixWorld(),te.makeTranslation(-Ks.x,-Ks.y,-Ks.z),Sd.multiplyMatrices(se.projectionMatrix,se.matrixWorldInverse),F._frustum.setFromProjectionMatrix(Sd,se.coordinateSystem,se.reversedDepth)}else F.updateMatrices(k);i=F.getFrustum(),S(R,L,F.camera,k,this.type)}F.isPointLightShadow!==!0&&this.type===Qs&&M(F,L),F.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(v,A,I)};function M(w,R){const L=e.update(_);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new oi(r.x,r.y,{format:Rs,type:Oi})),h.uniforms.shadow_pass.value=w.map.depthTexture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(R,null,L,h,_,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(R,null,L,d,_,null)}function E(w,R,L,v){let A=null;const I=L.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(I!==void 0)A=I;else if(A=L.isPointLight===!0?l:o,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const z=A.uuid,B=R.uuid;let Z=c[z];Z===void 0&&(Z={},c[z]=Z);let j=Z[B];j===void 0&&(j=A.clone(),Z[B]=j,R.addEventListener("dispose",y)),A=j}if(A.visible=R.visible,A.wireframe=R.wireframe,v===Qs?A.side=R.shadowSide!==null?R.shadowSide:R.side:A.side=R.shadowSide!==null?R.shadowSide:f[R.side],A.alphaMap=R.alphaMap,A.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,A.map=R.map,A.clipShadows=R.clipShadows,A.clippingPlanes=R.clippingPlanes,A.clipIntersection=R.clipIntersection,A.displacementMap=R.displacementMap,A.displacementScale=R.displacementScale,A.displacementBias=R.displacementBias,A.wireframeLinewidth=R.wireframeLinewidth,A.linewidth=R.linewidth,L.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const z=n.properties.get(A);z.light=L}return A}function S(w,R,L,v,A){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&A===Qs)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,w.matrixWorld);const B=e.update(w),Z=w.material;if(Array.isArray(Z)){const j=B.groups;for(let k=0,F=j.length;k<F;k++){const Y=j[k],pe=Z[Y.materialIndex];if(pe&&pe.visible){const de=E(w,pe,v,A);w.onBeforeShadow(n,w,R,L,B,de,Y),n.renderBufferDirect(L,null,B,de,w,Y),w.onAfterShadow(n,w,R,L,B,de,Y)}}}else if(Z.visible){const j=E(w,Z,v,A);w.onBeforeShadow(n,w,R,L,B,j,null),n.renderBufferDirect(L,null,B,j,w,null),w.onAfterShadow(n,w,R,L,B,j,null)}}const z=w.children;for(let B=0,Z=z.length;B<Z;B++)S(z[B],R,L,v,A)}function y(w){w.target.removeEventListener("dispose",y);for(const L in c){const v=c[L],A=w.target.uuid;A in v&&(v[A].dispose(),delete v[A])}}}const xE={[Pc]:Dc,[Lc]:Nc,[Ic]:Fc,[As]:Uc,[Dc]:Pc,[Nc]:Lc,[Fc]:Ic,[Uc]:As};function vE(n,e){function t(){let N=!1;const Ee=new Tt;let me=null;const Re=new Tt(0,0,0,0);return{setMask:function(he){me!==he&&!N&&(n.colorMask(he,he,he,he),me=he)},setLocked:function(he){N=he},setClear:function(he,le,xe,We,mt){mt===!0&&(he*=We,le*=We,xe*=We),Ee.set(he,le,xe,We),Re.equals(Ee)===!1&&(n.clearColor(he,le,xe,We),Re.copy(Ee))},reset:function(){N=!1,me=null,Re.set(-1,0,0,0)}}}function i(){let N=!1,Ee=!1,me=null,Re=null,he=null;return{setReversed:function(le){if(Ee!==le){const xe=e.get("EXT_clip_control");le?xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.ZERO_TO_ONE_EXT):xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.NEGATIVE_ONE_TO_ONE_EXT),Ee=le;const We=he;he=null,this.setClear(We)}},getReversed:function(){return Ee},setTest:function(le){le?re(n.DEPTH_TEST):Te(n.DEPTH_TEST)},setMask:function(le){me!==le&&!N&&(n.depthMask(le),me=le)},setFunc:function(le){if(Ee&&(le=xE[le]),Re!==le){switch(le){case Pc:n.depthFunc(n.NEVER);break;case Dc:n.depthFunc(n.ALWAYS);break;case Lc:n.depthFunc(n.LESS);break;case As:n.depthFunc(n.LEQUAL);break;case Ic:n.depthFunc(n.EQUAL);break;case Uc:n.depthFunc(n.GEQUAL);break;case Nc:n.depthFunc(n.GREATER);break;case Fc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Re=le}},setLocked:function(le){N=le},setClear:function(le){he!==le&&(Ee&&(le=1-le),n.clearDepth(le),he=le)},reset:function(){N=!1,me=null,Re=null,he=null,Ee=!1}}}function r(){let N=!1,Ee=null,me=null,Re=null,he=null,le=null,xe=null,We=null,mt=null;return{setTest:function(at){N||(at?re(n.STENCIL_TEST):Te(n.STENCIL_TEST))},setMask:function(at){Ee!==at&&!N&&(n.stencilMask(at),Ee=at)},setFunc:function(at,jn,_i){(me!==at||Re!==jn||he!==_i)&&(n.stencilFunc(at,jn,_i),me=at,Re=jn,he=_i)},setOp:function(at,jn,_i){(le!==at||xe!==jn||We!==_i)&&(n.stencilOp(at,jn,_i),le=at,xe=jn,We=_i)},setLocked:function(at){N=at},setClear:function(at){mt!==at&&(n.clearStencil(at),mt=at)},reset:function(){N=!1,Ee=null,me=null,Re=null,he=null,le=null,xe=null,We=null,mt=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,d=[],g=null,_=!1,m=null,p=null,M=null,E=null,S=null,y=null,w=null,R=new Je(0,0,0),L=0,v=!1,A=null,I=null,z=null,B=null,Z=null;const j=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,F=0;const Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(Y)[1]),k=F>=1):Y.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),k=F>=2);let pe=null,de={};const se=n.getParameter(n.SCISSOR_BOX),te=n.getParameter(n.VIEWPORT),De=new Tt().fromArray(se),Oe=new Tt().fromArray(te);function He(N,Ee,me,Re){const he=new Uint8Array(4),le=n.createTexture();n.bindTexture(N,le),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let xe=0;xe<me;xe++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(Ee,0,n.RGBA,1,1,Re,0,n.RGBA,n.UNSIGNED_BYTE,he):n.texImage2D(Ee+xe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,he);return le}const Q={};Q[n.TEXTURE_2D]=He(n.TEXTURE_2D,n.TEXTURE_2D,1),Q[n.TEXTURE_CUBE_MAP]=He(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[n.TEXTURE_2D_ARRAY]=He(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Q[n.TEXTURE_3D]=He(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),re(n.DEPTH_TEST),a.setFunc(As),$(!1),ie(yh),re(n.CULL_FACE),G(Di);function re(N){u[N]!==!0&&(n.enable(N),u[N]=!0)}function Te(N){u[N]!==!1&&(n.disable(N),u[N]=!1)}function Ge(N,Ee){return f[N]!==Ee?(n.bindFramebuffer(N,Ee),f[N]=Ee,N===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Ee),N===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Ee),!0):!1}function Ce(N,Ee){let me=d,Re=!1;if(N){me=h.get(Ee),me===void 0&&(me=[],h.set(Ee,me));const he=N.textures;if(me.length!==he.length||me[0]!==n.COLOR_ATTACHMENT0){for(let le=0,xe=he.length;le<xe;le++)me[le]=n.COLOR_ATTACHMENT0+le;me.length=he.length,Re=!0}}else me[0]!==n.BACK&&(me[0]=n.BACK,Re=!0);Re&&n.drawBuffers(me)}function et(N){return g!==N?(n.useProgram(N),g=N,!0):!1}const P={[Dr]:n.FUNC_ADD,[vx]:n.FUNC_SUBTRACT,[Sx]:n.FUNC_REVERSE_SUBTRACT};P[Mx]=n.MIN,P[yx]=n.MAX;const U={[bx]:n.ZERO,[Ex]:n.ONE,[Tx]:n.SRC_COLOR,[Rc]:n.SRC_ALPHA,[Dx]:n.SRC_ALPHA_SATURATE,[Cx]:n.DST_COLOR,[wx]:n.DST_ALPHA,[Ax]:n.ONE_MINUS_SRC_COLOR,[Cc]:n.ONE_MINUS_SRC_ALPHA,[Px]:n.ONE_MINUS_DST_COLOR,[Rx]:n.ONE_MINUS_DST_ALPHA,[Lx]:n.CONSTANT_COLOR,[Ix]:n.ONE_MINUS_CONSTANT_COLOR,[Ux]:n.CONSTANT_ALPHA,[Nx]:n.ONE_MINUS_CONSTANT_ALPHA};function G(N,Ee,me,Re,he,le,xe,We,mt,at){if(N===Di){_===!0&&(Te(n.BLEND),_=!1);return}if(_===!1&&(re(n.BLEND),_=!0),N!==xx){if(N!==m||at!==v){if((p!==Dr||S!==Dr)&&(n.blendEquation(n.FUNC_ADD),p=Dr,S=Dr),at)switch(N){case vs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case bh:n.blendFunc(n.ONE,n.ONE);break;case Eh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Th:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:it("WebGLState: Invalid blending: ",N);break}else switch(N){case vs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case bh:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Eh:it("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Th:it("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:it("WebGLState: Invalid blending: ",N);break}M=null,E=null,y=null,w=null,R.set(0,0,0),L=0,m=N,v=at}return}he=he||Ee,le=le||me,xe=xe||Re,(Ee!==p||he!==S)&&(n.blendEquationSeparate(P[Ee],P[he]),p=Ee,S=he),(me!==M||Re!==E||le!==y||xe!==w)&&(n.blendFuncSeparate(U[me],U[Re],U[le],U[xe]),M=me,E=Re,y=le,w=xe),(We.equals(R)===!1||mt!==L)&&(n.blendColor(We.r,We.g,We.b,mt),R.copy(We),L=mt),m=N,v=!1}function ne(N,Ee){N.side===Ri?Te(n.CULL_FACE):re(n.CULL_FACE);let me=N.side===cn;Ee&&(me=!me),$(me),N.blending===vs&&N.transparent===!1?G(Di):G(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),s.setMask(N.colorWrite);const Re=N.stencilWrite;o.setTest(Re),Re&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ce(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?re(n.SAMPLE_ALPHA_TO_COVERAGE):Te(n.SAMPLE_ALPHA_TO_COVERAGE)}function $(N){A!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),A=N)}function ie(N){N!==_x?(re(n.CULL_FACE),N!==I&&(N===yh?n.cullFace(n.BACK):N===gx?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Te(n.CULL_FACE),I=N}function C(N){N!==z&&(k&&n.lineWidth(N),z=N)}function ce(N,Ee,me){N?(re(n.POLYGON_OFFSET_FILL),(B!==Ee||Z!==me)&&(n.polygonOffset(Ee,me),B=Ee,Z=me)):Te(n.POLYGON_OFFSET_FILL)}function ae(N){N?re(n.SCISSOR_TEST):Te(n.SCISSOR_TEST)}function ee(N){N===void 0&&(N=n.TEXTURE0+j-1),pe!==N&&(n.activeTexture(N),pe=N)}function oe(N,Ee,me){me===void 0&&(pe===null?me=n.TEXTURE0+j-1:me=pe);let Re=de[me];Re===void 0&&(Re={type:void 0,texture:void 0},de[me]=Re),(Re.type!==N||Re.texture!==Ee)&&(pe!==me&&(n.activeTexture(me),pe=me),n.bindTexture(N,Ee||Q[N]),Re.type=N,Re.texture=Ee)}function b(){const N=de[pe];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function x(){try{n.compressedTexImage2D(...arguments)}catch(N){it("WebGLState:",N)}}function D(){try{n.compressedTexImage3D(...arguments)}catch(N){it("WebGLState:",N)}}function X(){try{n.texSubImage2D(...arguments)}catch(N){it("WebGLState:",N)}}function J(){try{n.texSubImage3D(...arguments)}catch(N){it("WebGLState:",N)}}function H(){try{n.compressedTexSubImage2D(...arguments)}catch(N){it("WebGLState:",N)}}function ye(){try{n.compressedTexSubImage3D(...arguments)}catch(N){it("WebGLState:",N)}}function fe(){try{n.texStorage2D(...arguments)}catch(N){it("WebGLState:",N)}}function Ae(){try{n.texStorage3D(...arguments)}catch(N){it("WebGLState:",N)}}function Ie(){try{n.texImage2D(...arguments)}catch(N){it("WebGLState:",N)}}function ue(){try{n.texImage3D(...arguments)}catch(N){it("WebGLState:",N)}}function ge(N){De.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),De.copy(N))}function ve(N){Oe.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),Oe.copy(N))}function we(N,Ee){let me=c.get(Ee);me===void 0&&(me=new WeakMap,c.set(Ee,me));let Re=me.get(N);Re===void 0&&(Re=n.getUniformBlockIndex(Ee,N.name),me.set(N,Re))}function _e(N,Ee){const Re=c.get(Ee).get(N);l.get(Ee)!==Re&&(n.uniformBlockBinding(Ee,Re,N.__bindingPointIndex),l.set(Ee,Re))}function qe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},pe=null,de={},f={},h=new WeakMap,d=[],g=null,_=!1,m=null,p=null,M=null,E=null,S=null,y=null,w=null,R=new Je(0,0,0),L=0,v=!1,A=null,I=null,z=null,B=null,Z=null,De.set(0,0,n.canvas.width,n.canvas.height),Oe.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:re,disable:Te,bindFramebuffer:Ge,drawBuffers:Ce,useProgram:et,setBlending:G,setMaterial:ne,setFlipSided:$,setCullFace:ie,setLineWidth:C,setPolygonOffset:ce,setScissorTest:ae,activeTexture:ee,bindTexture:oe,unbindTexture:b,compressedTexImage2D:x,compressedTexImage3D:D,texImage2D:Ie,texImage3D:ue,updateUBOMapping:we,uniformBlockBinding:_e,texStorage2D:fe,texStorage3D:Ae,texSubImage2D:X,texSubImage3D:J,compressedTexSubImage2D:H,compressedTexSubImage3D:ye,scissor:ge,viewport:ve,reset:qe}}function SE(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xe,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,x){return d?new OffscreenCanvas(b,x):Ho("canvas")}function _(b,x,D){let X=1;const J=oe(b);if((J.width>D||J.height>D)&&(X=D/Math.max(J.width,J.height)),X<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const H=Math.floor(X*J.width),ye=Math.floor(X*J.height);f===void 0&&(f=g(H,ye));const fe=x?g(H,ye):f;return fe.width=H,fe.height=ye,fe.getContext("2d").drawImage(b,0,0,H,ye),Ve("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+H+"x"+ye+")."),fe}else return"data"in b&&Ve("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),b;return b}function m(b){return b.generateMipmaps}function p(b){n.generateMipmap(b)}function M(b){return b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?n.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(b,x,D,X,J=!1){if(b!==null){if(n[b]!==void 0)return n[b];Ve("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let H=x;if(x===n.RED&&(D===n.FLOAT&&(H=n.R32F),D===n.HALF_FLOAT&&(H=n.R16F),D===n.UNSIGNED_BYTE&&(H=n.R8)),x===n.RED_INTEGER&&(D===n.UNSIGNED_BYTE&&(H=n.R8UI),D===n.UNSIGNED_SHORT&&(H=n.R16UI),D===n.UNSIGNED_INT&&(H=n.R32UI),D===n.BYTE&&(H=n.R8I),D===n.SHORT&&(H=n.R16I),D===n.INT&&(H=n.R32I)),x===n.RG&&(D===n.FLOAT&&(H=n.RG32F),D===n.HALF_FLOAT&&(H=n.RG16F),D===n.UNSIGNED_BYTE&&(H=n.RG8)),x===n.RG_INTEGER&&(D===n.UNSIGNED_BYTE&&(H=n.RG8UI),D===n.UNSIGNED_SHORT&&(H=n.RG16UI),D===n.UNSIGNED_INT&&(H=n.RG32UI),D===n.BYTE&&(H=n.RG8I),D===n.SHORT&&(H=n.RG16I),D===n.INT&&(H=n.RG32I)),x===n.RGB_INTEGER&&(D===n.UNSIGNED_BYTE&&(H=n.RGB8UI),D===n.UNSIGNED_SHORT&&(H=n.RGB16UI),D===n.UNSIGNED_INT&&(H=n.RGB32UI),D===n.BYTE&&(H=n.RGB8I),D===n.SHORT&&(H=n.RGB16I),D===n.INT&&(H=n.RGB32I)),x===n.RGBA_INTEGER&&(D===n.UNSIGNED_BYTE&&(H=n.RGBA8UI),D===n.UNSIGNED_SHORT&&(H=n.RGBA16UI),D===n.UNSIGNED_INT&&(H=n.RGBA32UI),D===n.BYTE&&(H=n.RGBA8I),D===n.SHORT&&(H=n.RGBA16I),D===n.INT&&(H=n.RGBA32I)),x===n.RGB&&(D===n.UNSIGNED_INT_5_9_9_9_REV&&(H=n.RGB9_E5),D===n.UNSIGNED_INT_10F_11F_11F_REV&&(H=n.R11F_G11F_B10F)),x===n.RGBA){const ye=J?ko:tt.getTransfer(X);D===n.FLOAT&&(H=n.RGBA32F),D===n.HALF_FLOAT&&(H=n.RGBA16F),D===n.UNSIGNED_BYTE&&(H=ye===lt?n.SRGB8_ALPHA8:n.RGBA8),D===n.UNSIGNED_SHORT_4_4_4_4&&(H=n.RGBA4),D===n.UNSIGNED_SHORT_5_5_5_1&&(H=n.RGB5_A1)}return(H===n.R16F||H===n.R32F||H===n.RG16F||H===n.RG32F||H===n.RGBA16F||H===n.RGBA32F)&&e.get("EXT_color_buffer_float"),H}function S(b,x){let D;return b?x===null||x===fi||x===Ma?D=n.DEPTH24_STENCIL8:x===ni?D=n.DEPTH32F_STENCIL8:x===Sa&&(D=n.DEPTH24_STENCIL8,Ve("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===fi||x===Ma?D=n.DEPTH_COMPONENT24:x===ni?D=n.DEPTH_COMPONENT32F:x===Sa&&(D=n.DEPTH_COMPONENT16),D}function y(b,x){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==Bt&&b.minFilter!==Xt?Math.log2(Math.max(x.width,x.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?x.mipmaps.length:1}function w(b){const x=b.target;x.removeEventListener("dispose",w),L(x),x.isVideoTexture&&u.delete(x)}function R(b){const x=b.target;x.removeEventListener("dispose",R),A(x)}function L(b){const x=i.get(b);if(x.__webglInit===void 0)return;const D=b.source,X=h.get(D);if(X){const J=X[x.__cacheKey];J.usedTimes--,J.usedTimes===0&&v(b),Object.keys(X).length===0&&h.delete(D)}i.remove(b)}function v(b){const x=i.get(b);n.deleteTexture(x.__webglTexture);const D=b.source,X=h.get(D);delete X[x.__cacheKey],a.memory.textures--}function A(b){const x=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(x.__webglFramebuffer[X]))for(let J=0;J<x.__webglFramebuffer[X].length;J++)n.deleteFramebuffer(x.__webglFramebuffer[X][J]);else n.deleteFramebuffer(x.__webglFramebuffer[X]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[X])}else{if(Array.isArray(x.__webglFramebuffer))for(let X=0;X<x.__webglFramebuffer.length;X++)n.deleteFramebuffer(x.__webglFramebuffer[X]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let X=0;X<x.__webglColorRenderbuffer.length;X++)x.__webglColorRenderbuffer[X]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[X]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const D=b.textures;for(let X=0,J=D.length;X<J;X++){const H=i.get(D[X]);H.__webglTexture&&(n.deleteTexture(H.__webglTexture),a.memory.textures--),i.remove(D[X])}i.remove(b)}let I=0;function z(){I=0}function B(){const b=I;return b>=r.maxTextures&&Ve("WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),I+=1,b}function Z(b){const x=[];return x.push(b.wrapS),x.push(b.wrapT),x.push(b.wrapR||0),x.push(b.magFilter),x.push(b.minFilter),x.push(b.anisotropy),x.push(b.internalFormat),x.push(b.format),x.push(b.type),x.push(b.generateMipmaps),x.push(b.premultiplyAlpha),x.push(b.flipY),x.push(b.unpackAlignment),x.push(b.colorSpace),x.join()}function j(b,x){const D=i.get(b);if(b.isVideoTexture&&ae(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&D.__version!==b.version){const X=b.image;if(X===null)Ve("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Ve("WebGLRenderer: Texture marked for update but image is incomplete");else{Q(D,b,x);return}}else b.isExternalTexture&&(D.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,D.__webglTexture,n.TEXTURE0+x)}function k(b,x){const D=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&D.__version!==b.version){Q(D,b,x);return}else b.isExternalTexture&&(D.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,D.__webglTexture,n.TEXTURE0+x)}function F(b,x){const D=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&D.__version!==b.version){Q(D,b,x);return}t.bindTexture(n.TEXTURE_3D,D.__webglTexture,n.TEXTURE0+x)}function Y(b,x){const D=i.get(b);if(b.isCubeDepthTexture!==!0&&b.version>0&&D.__version!==b.version){re(D,b,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+x)}const pe={[zc]:n.REPEAT,[Ci]:n.CLAMP_TO_EDGE,[kc]:n.MIRRORED_REPEAT},de={[Bt]:n.NEAREST,[Bx]:n.NEAREST_MIPMAP_NEAREST,[Wa]:n.NEAREST_MIPMAP_LINEAR,[Xt]:n.LINEAR,[Pl]:n.LINEAR_MIPMAP_NEAREST,[Ir]:n.LINEAR_MIPMAP_LINEAR},se={[Vx]:n.NEVER,[qx]:n.ALWAYS,[Hx]:n.LESS,[cf]:n.LEQUAL,[Gx]:n.EQUAL,[uf]:n.GEQUAL,[Wx]:n.GREATER,[Xx]:n.NOTEQUAL};function te(b,x){if(x.type===ni&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Xt||x.magFilter===Pl||x.magFilter===Wa||x.magFilter===Ir||x.minFilter===Xt||x.minFilter===Pl||x.minFilter===Wa||x.minFilter===Ir)&&Ve("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,pe[x.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,pe[x.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,pe[x.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,de[x.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,de[x.minFilter]),x.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,se[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Bt||x.minFilter!==Wa&&x.minFilter!==Ir||x.type===ni&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const D=e.get("EXT_texture_filter_anisotropic");n.texParameterf(b,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function De(b,x){let D=!1;b.__webglInit===void 0&&(b.__webglInit=!0,x.addEventListener("dispose",w));const X=x.source;let J=h.get(X);J===void 0&&(J={},h.set(X,J));const H=Z(x);if(H!==b.__cacheKey){J[H]===void 0&&(J[H]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,D=!0),J[H].usedTimes++;const ye=J[b.__cacheKey];ye!==void 0&&(J[b.__cacheKey].usedTimes--,ye.usedTimes===0&&v(x)),b.__cacheKey=H,b.__webglTexture=J[H].texture}return D}function Oe(b,x,D){return Math.floor(Math.floor(b/D)/x)}function He(b,x,D,X){const H=b.updateRanges;if(H.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,D,X,x.data);else{H.sort((ue,ge)=>ue.start-ge.start);let ye=0;for(let ue=1;ue<H.length;ue++){const ge=H[ye],ve=H[ue],we=ge.start+ge.count,_e=Oe(ve.start,x.width,4),qe=Oe(ge.start,x.width,4);ve.start<=we+1&&_e===qe&&Oe(ve.start+ve.count-1,x.width,4)===_e?ge.count=Math.max(ge.count,ve.start+ve.count-ge.start):(++ye,H[ye]=ve)}H.length=ye+1;const fe=n.getParameter(n.UNPACK_ROW_LENGTH),Ae=n.getParameter(n.UNPACK_SKIP_PIXELS),Ie=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let ue=0,ge=H.length;ue<ge;ue++){const ve=H[ue],we=Math.floor(ve.start/4),_e=Math.ceil(ve.count/4),qe=we%x.width,N=Math.floor(we/x.width),Ee=_e,me=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,qe),n.pixelStorei(n.UNPACK_SKIP_ROWS,N),t.texSubImage2D(n.TEXTURE_2D,0,qe,N,Ee,me,D,X,x.data)}b.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,fe),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ae),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ie)}}function Q(b,x,D){let X=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(X=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(X=n.TEXTURE_3D);const J=De(b,x),H=x.source;t.bindTexture(X,b.__webglTexture,n.TEXTURE0+D);const ye=i.get(H);if(H.version!==ye.__version||J===!0){t.activeTexture(n.TEXTURE0+D);const fe=tt.getPrimaries(tt.workingColorSpace),Ae=x.colorSpace===Qi?null:tt.getPrimaries(x.colorSpace),Ie=x.colorSpace===Qi||fe===Ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let ue=_(x.image,!1,r.maxTextureSize);ue=ee(x,ue);const ge=s.convert(x.format,x.colorSpace),ve=s.convert(x.type);let we=E(x.internalFormat,ge,ve,x.colorSpace,x.isVideoTexture);te(X,x);let _e;const qe=x.mipmaps,N=x.isVideoTexture!==!0,Ee=ye.__version===void 0||J===!0,me=H.dataReady,Re=y(x,ue);if(x.isDepthTexture)we=S(x.format===Ur,x.type),Ee&&(N?t.texStorage2D(n.TEXTURE_2D,1,we,ue.width,ue.height):t.texImage2D(n.TEXTURE_2D,0,we,ue.width,ue.height,0,ge,ve,null));else if(x.isDataTexture)if(qe.length>0){N&&Ee&&t.texStorage2D(n.TEXTURE_2D,Re,we,qe[0].width,qe[0].height);for(let he=0,le=qe.length;he<le;he++)_e=qe[he],N?me&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,_e.width,_e.height,ge,ve,_e.data):t.texImage2D(n.TEXTURE_2D,he,we,_e.width,_e.height,0,ge,ve,_e.data);x.generateMipmaps=!1}else N?(Ee&&t.texStorage2D(n.TEXTURE_2D,Re,we,ue.width,ue.height),me&&He(x,ue,ge,ve)):t.texImage2D(n.TEXTURE_2D,0,we,ue.width,ue.height,0,ge,ve,ue.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){N&&Ee&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Re,we,qe[0].width,qe[0].height,ue.depth);for(let he=0,le=qe.length;he<le;he++)if(_e=qe[he],x.format!==Xn)if(ge!==null)if(N){if(me)if(x.layerUpdates.size>0){const xe=Zh(_e.width,_e.height,x.format,x.type);for(const We of x.layerUpdates){const mt=_e.data.subarray(We*xe/_e.data.BYTES_PER_ELEMENT,(We+1)*xe/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,We,_e.width,_e.height,1,ge,mt)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,0,_e.width,_e.height,ue.depth,ge,_e.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,he,we,_e.width,_e.height,ue.depth,0,_e.data,0,0);else Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?me&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,0,_e.width,_e.height,ue.depth,ge,ve,_e.data):t.texImage3D(n.TEXTURE_2D_ARRAY,he,we,_e.width,_e.height,ue.depth,0,ge,ve,_e.data)}else{N&&Ee&&t.texStorage2D(n.TEXTURE_2D,Re,we,qe[0].width,qe[0].height);for(let he=0,le=qe.length;he<le;he++)_e=qe[he],x.format!==Xn?ge!==null?N?me&&t.compressedTexSubImage2D(n.TEXTURE_2D,he,0,0,_e.width,_e.height,ge,_e.data):t.compressedTexImage2D(n.TEXTURE_2D,he,we,_e.width,_e.height,0,_e.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?me&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,_e.width,_e.height,ge,ve,_e.data):t.texImage2D(n.TEXTURE_2D,he,we,_e.width,_e.height,0,ge,ve,_e.data)}else if(x.isDataArrayTexture)if(N){if(Ee&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Re,we,ue.width,ue.height,ue.depth),me)if(x.layerUpdates.size>0){const he=Zh(ue.width,ue.height,x.format,x.type);for(const le of x.layerUpdates){const xe=ue.data.subarray(le*he/ue.data.BYTES_PER_ELEMENT,(le+1)*he/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,le,ue.width,ue.height,1,ge,ve,xe)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,ge,ve,ue.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,we,ue.width,ue.height,ue.depth,0,ge,ve,ue.data);else if(x.isData3DTexture)N?(Ee&&t.texStorage3D(n.TEXTURE_3D,Re,we,ue.width,ue.height,ue.depth),me&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,ge,ve,ue.data)):t.texImage3D(n.TEXTURE_3D,0,we,ue.width,ue.height,ue.depth,0,ge,ve,ue.data);else if(x.isFramebufferTexture){if(Ee)if(N)t.texStorage2D(n.TEXTURE_2D,Re,we,ue.width,ue.height);else{let he=ue.width,le=ue.height;for(let xe=0;xe<Re;xe++)t.texImage2D(n.TEXTURE_2D,xe,we,he,le,0,ge,ve,null),he>>=1,le>>=1}}else if(qe.length>0){if(N&&Ee){const he=oe(qe[0]);t.texStorage2D(n.TEXTURE_2D,Re,we,he.width,he.height)}for(let he=0,le=qe.length;he<le;he++)_e=qe[he],N?me&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,ge,ve,_e):t.texImage2D(n.TEXTURE_2D,he,we,ge,ve,_e);x.generateMipmaps=!1}else if(N){if(Ee){const he=oe(ue);t.texStorage2D(n.TEXTURE_2D,Re,we,he.width,he.height)}me&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ge,ve,ue)}else t.texImage2D(n.TEXTURE_2D,0,we,ge,ve,ue);m(x)&&p(X),ye.__version=H.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function re(b,x,D){if(x.image.length!==6)return;const X=De(b,x),J=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+D);const H=i.get(J);if(J.version!==H.__version||X===!0){t.activeTexture(n.TEXTURE0+D);const ye=tt.getPrimaries(tt.workingColorSpace),fe=x.colorSpace===Qi?null:tt.getPrimaries(x.colorSpace),Ae=x.colorSpace===Qi||ye===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const Ie=x.isCompressedTexture||x.image[0].isCompressedTexture,ue=x.image[0]&&x.image[0].isDataTexture,ge=[];for(let le=0;le<6;le++)!Ie&&!ue?ge[le]=_(x.image[le],!0,r.maxCubemapSize):ge[le]=ue?x.image[le].image:x.image[le],ge[le]=ee(x,ge[le]);const ve=ge[0],we=s.convert(x.format,x.colorSpace),_e=s.convert(x.type),qe=E(x.internalFormat,we,_e,x.colorSpace),N=x.isVideoTexture!==!0,Ee=H.__version===void 0||X===!0,me=J.dataReady;let Re=y(x,ve);te(n.TEXTURE_CUBE_MAP,x);let he;if(Ie){N&&Ee&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Re,qe,ve.width,ve.height);for(let le=0;le<6;le++){he=ge[le].mipmaps;for(let xe=0;xe<he.length;xe++){const We=he[xe];x.format!==Xn?we!==null?N?me&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,xe,0,0,We.width,We.height,we,We.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,xe,qe,We.width,We.height,0,We.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,xe,0,0,We.width,We.height,we,_e,We.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,xe,qe,We.width,We.height,0,we,_e,We.data)}}}else{if(he=x.mipmaps,N&&Ee){he.length>0&&Re++;const le=oe(ge[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Re,qe,le.width,le.height)}for(let le=0;le<6;le++)if(ue){N?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,ge[le].width,ge[le].height,we,_e,ge[le].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,qe,ge[le].width,ge[le].height,0,we,_e,ge[le].data);for(let xe=0;xe<he.length;xe++){const mt=he[xe].image[le].image;N?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,xe+1,0,0,mt.width,mt.height,we,_e,mt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,xe+1,qe,mt.width,mt.height,0,we,_e,mt.data)}}else{N?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,we,_e,ge[le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,qe,we,_e,ge[le]);for(let xe=0;xe<he.length;xe++){const We=he[xe];N?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,xe+1,0,0,we,_e,We.image[le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,xe+1,qe,we,_e,We.image[le])}}}m(x)&&p(n.TEXTURE_CUBE_MAP),H.__version=J.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function Te(b,x,D,X,J,H){const ye=s.convert(D.format,D.colorSpace),fe=s.convert(D.type),Ae=E(D.internalFormat,ye,fe,D.colorSpace),Ie=i.get(x),ue=i.get(D);if(ue.__renderTarget=x,!Ie.__hasExternalTextures){const ge=Math.max(1,x.width>>H),ve=Math.max(1,x.height>>H);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?t.texImage3D(J,H,Ae,ge,ve,x.depth,0,ye,fe,null):t.texImage2D(J,H,Ae,ge,ve,0,ye,fe,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),ce(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,X,J,ue.__webglTexture,0,C(x)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,X,J,ue.__webglTexture,H),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ge(b,x,D){if(n.bindRenderbuffer(n.RENDERBUFFER,b),x.depthBuffer){const X=x.depthTexture,J=X&&X.isDepthTexture?X.type:null,H=S(x.stencilBuffer,J),ye=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ce(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,C(x),H,x.width,x.height):D?n.renderbufferStorageMultisample(n.RENDERBUFFER,C(x),H,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,H,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ye,n.RENDERBUFFER,b)}else{const X=x.textures;for(let J=0;J<X.length;J++){const H=X[J],ye=s.convert(H.format,H.colorSpace),fe=s.convert(H.type),Ae=E(H.internalFormat,ye,fe,H.colorSpace);ce(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,C(x),Ae,x.width,x.height):D?n.renderbufferStorageMultisample(n.RENDERBUFFER,C(x),Ae,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Ae,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ce(b,x,D){const X=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=i.get(x.depthTexture);if(J.__renderTarget=x,(!J.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),X){if(J.__webglInit===void 0&&(J.__webglInit=!0,x.depthTexture.addEventListener("dispose",w)),J.__webglTexture===void 0){J.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),te(n.TEXTURE_CUBE_MAP,x.depthTexture);const Ie=s.convert(x.depthTexture.format),ue=s.convert(x.depthTexture.type);let ge;x.depthTexture.format===Bi?ge=n.DEPTH_COMPONENT24:x.depthTexture.format===Ur&&(ge=n.DEPTH24_STENCIL8);for(let ve=0;ve<6;ve++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,ge,x.width,x.height,0,Ie,ue,null)}}else j(x.depthTexture,0);const H=J.__webglTexture,ye=C(x),fe=X?n.TEXTURE_CUBE_MAP_POSITIVE_X+D:n.TEXTURE_2D,Ae=x.depthTexture.format===Ur?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(x.depthTexture.format===Bi)ce(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ae,fe,H,0,ye):n.framebufferTexture2D(n.FRAMEBUFFER,Ae,fe,H,0);else if(x.depthTexture.format===Ur)ce(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ae,fe,H,0,ye):n.framebufferTexture2D(n.FRAMEBUFFER,Ae,fe,H,0);else throw new Error("Unknown depthTexture format")}function et(b){const x=i.get(b),D=b.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==b.depthTexture){const X=b.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),X){const J=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,X.removeEventListener("dispose",J)};X.addEventListener("dispose",J),x.__depthDisposeCallback=J}x.__boundDepthTexture=X}if(b.depthTexture&&!x.__autoAllocateDepthBuffer)if(D)for(let X=0;X<6;X++)Ce(x.__webglFramebuffer[X],b,X);else{const X=b.texture.mipmaps;X&&X.length>0?Ce(x.__webglFramebuffer[0],b,0):Ce(x.__webglFramebuffer,b,0)}else if(D){x.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[X]),x.__webglDepthbuffer[X]===void 0)x.__webglDepthbuffer[X]=n.createRenderbuffer(),Ge(x.__webglDepthbuffer[X],b,!1);else{const J=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,H=x.__webglDepthbuffer[X];n.bindRenderbuffer(n.RENDERBUFFER,H),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,H)}}else{const X=b.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),Ge(x.__webglDepthbuffer,b,!1);else{const J=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,H=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,H),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,H)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function P(b,x,D){const X=i.get(b);x!==void 0&&Te(X.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),D!==void 0&&et(b)}function U(b){const x=b.texture,D=i.get(b),X=i.get(x);b.addEventListener("dispose",R);const J=b.textures,H=b.isWebGLCubeRenderTarget===!0,ye=J.length>1;if(ye||(X.__webglTexture===void 0&&(X.__webglTexture=n.createTexture()),X.__version=x.version,a.memory.textures++),H){D.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(x.mipmaps&&x.mipmaps.length>0){D.__webglFramebuffer[fe]=[];for(let Ae=0;Ae<x.mipmaps.length;Ae++)D.__webglFramebuffer[fe][Ae]=n.createFramebuffer()}else D.__webglFramebuffer[fe]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){D.__webglFramebuffer=[];for(let fe=0;fe<x.mipmaps.length;fe++)D.__webglFramebuffer[fe]=n.createFramebuffer()}else D.__webglFramebuffer=n.createFramebuffer();if(ye)for(let fe=0,Ae=J.length;fe<Ae;fe++){const Ie=i.get(J[fe]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=n.createTexture(),a.memory.textures++)}if(b.samples>0&&ce(b)===!1){D.__webglMultisampledFramebuffer=n.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let fe=0;fe<J.length;fe++){const Ae=J[fe];D.__webglColorRenderbuffer[fe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,D.__webglColorRenderbuffer[fe]);const Ie=s.convert(Ae.format,Ae.colorSpace),ue=s.convert(Ae.type),ge=E(Ae.internalFormat,Ie,ue,Ae.colorSpace,b.isXRRenderTarget===!0),ve=C(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,ve,ge,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,D.__webglColorRenderbuffer[fe])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(D.__webglDepthRenderbuffer=n.createRenderbuffer(),Ge(D.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(H){t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture),te(n.TEXTURE_CUBE_MAP,x);for(let fe=0;fe<6;fe++)if(x.mipmaps&&x.mipmaps.length>0)for(let Ae=0;Ae<x.mipmaps.length;Ae++)Te(D.__webglFramebuffer[fe][Ae],b,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ae);else Te(D.__webglFramebuffer[fe],b,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(x)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let fe=0,Ae=J.length;fe<Ae;fe++){const Ie=J[fe],ue=i.get(Ie);let ge=n.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ge=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ge,ue.__webglTexture),te(ge,Ie),Te(D.__webglFramebuffer,b,Ie,n.COLOR_ATTACHMENT0+fe,ge,0),m(Ie)&&p(ge)}t.unbindTexture()}else{let fe=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(fe=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(fe,X.__webglTexture),te(fe,x),x.mipmaps&&x.mipmaps.length>0)for(let Ae=0;Ae<x.mipmaps.length;Ae++)Te(D.__webglFramebuffer[Ae],b,x,n.COLOR_ATTACHMENT0,fe,Ae);else Te(D.__webglFramebuffer,b,x,n.COLOR_ATTACHMENT0,fe,0);m(x)&&p(fe),t.unbindTexture()}b.depthBuffer&&et(b)}function G(b){const x=b.textures;for(let D=0,X=x.length;D<X;D++){const J=x[D];if(m(J)){const H=M(b),ye=i.get(J).__webglTexture;t.bindTexture(H,ye),p(H),t.unbindTexture()}}}const ne=[],$=[];function ie(b){if(b.samples>0){if(ce(b)===!1){const x=b.textures,D=b.width,X=b.height;let J=n.COLOR_BUFFER_BIT;const H=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ye=i.get(b),fe=x.length>1;if(fe)for(let Ie=0;Ie<x.length;Ie++)t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer);const Ae=b.texture.mipmaps;Ae&&Ae.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let Ie=0;Ie<x.length;Ie++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),fe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ye.__webglColorRenderbuffer[Ie]);const ue=i.get(x[Ie]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ue,0)}n.blitFramebuffer(0,0,D,X,0,0,D,X,J,n.NEAREST),l===!0&&(ne.length=0,$.length=0,ne.push(n.COLOR_ATTACHMENT0+Ie),b.depthBuffer&&b.resolveDepthBuffer===!1&&(ne.push(H),$.push(H),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,$)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ne))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),fe)for(let Ie=0;Ie<x.length;Ie++){t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.RENDERBUFFER,ye.__webglColorRenderbuffer[Ie]);const ue=i.get(x[Ie]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.TEXTURE_2D,ue,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const x=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function C(b){return Math.min(r.maxSamples,b.samples)}function ce(b){const x=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ae(b){const x=a.render.frame;u.get(b)!==x&&(u.set(b,x),b.update())}function ee(b,x){const D=b.colorSpace,X=b.format,J=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||D!==Cs&&D!==Qi&&(tt.getTransfer(D)===lt?(X!==Xn||J!==Mn)&&Ve("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):it("WebGLTextures: Unsupported texture color space:",D)),x}function oe(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=z,this.setTexture2D=j,this.setTexture2DArray=k,this.setTexture3D=F,this.setTextureCube=Y,this.rebindTextures=P,this.setupRenderTarget=U,this.updateRenderTargetMipmap=G,this.updateMultisampleRenderTarget=ie,this.setupDepthRenderbuffer=et,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=ce,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function ME(n,e){function t(i,r=Qi){let s;const a=tt.getTransfer(r);if(i===Mn)return n.UNSIGNED_BYTE;if(i===rf)return n.UNSIGNED_SHORT_4_4_4_4;if(i===sf)return n.UNSIGNED_SHORT_5_5_5_1;if(i===im)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===rm)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===tm)return n.BYTE;if(i===nm)return n.SHORT;if(i===Sa)return n.UNSIGNED_SHORT;if(i===nf)return n.INT;if(i===fi)return n.UNSIGNED_INT;if(i===ni)return n.FLOAT;if(i===Oi)return n.HALF_FLOAT;if(i===sm)return n.ALPHA;if(i===am)return n.RGB;if(i===Xn)return n.RGBA;if(i===Bi)return n.DEPTH_COMPONENT;if(i===Ur)return n.DEPTH_STENCIL;if(i===om)return n.RED;if(i===af)return n.RED_INTEGER;if(i===Rs)return n.RG;if(i===of)return n.RG_INTEGER;if(i===lf)return n.RGBA_INTEGER;if(i===yo||i===bo||i===Eo||i===To)if(a===lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===yo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===bo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Eo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===To)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===yo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===bo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Eo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===To)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Vc||i===Hc||i===Gc||i===Wc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Vc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Hc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Gc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Wc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Xc||i===qc||i===Yc||i===jc||i===Kc||i===$c||i===Zc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Xc||i===qc)return a===lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Yc)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===jc)return s.COMPRESSED_R11_EAC;if(i===Kc)return s.COMPRESSED_SIGNED_R11_EAC;if(i===$c)return s.COMPRESSED_RG11_EAC;if(i===Zc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Jc||i===Qc||i===eu||i===tu||i===nu||i===iu||i===ru||i===su||i===au||i===ou||i===lu||i===cu||i===uu||i===fu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Jc)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Qc)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===eu)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===tu)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===nu)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===iu)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ru)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===su)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===au)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ou)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===lu)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===cu)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===uu)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===fu)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===hu||i===du||i===pu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===hu)return a===lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===du)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===pu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===mu||i===_u||i===gu||i===xu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===mu)return s.COMPRESSED_RED_RGTC1_EXT;if(i===_u)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===gu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===xu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ma?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const yE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bE=`
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

}`;class EE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Mm(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new pi({vertexShader:yE,fragmentShader:bE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new di(new cl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class TE extends Wr{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null;const _=typeof XRWebGLBinding<"u",m=new EE,p={},M=t.getContextAttributes();let E=null,S=null;const y=[],w=[],R=new Xe;let L=null;const v=new Nn;v.viewport=new Tt;const A=new Nn;A.viewport=new Tt;const I=[v,A],z=new Uv;let B=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let re=y[Q];return re===void 0&&(re=new Jl,y[Q]=re),re.getTargetRaySpace()},this.getControllerGrip=function(Q){let re=y[Q];return re===void 0&&(re=new Jl,y[Q]=re),re.getGripSpace()},this.getHand=function(Q){let re=y[Q];return re===void 0&&(re=new Jl,y[Q]=re),re.getHandSpace()};function j(Q){const re=w.indexOf(Q.inputSource);if(re===-1)return;const Te=y[re];Te!==void 0&&(Te.update(Q.inputSource,Q.frame,c||a),Te.dispatchEvent({type:Q.type,data:Q.inputSource}))}function k(){r.removeEventListener("select",j),r.removeEventListener("selectstart",j),r.removeEventListener("selectend",j),r.removeEventListener("squeeze",j),r.removeEventListener("squeezestart",j),r.removeEventListener("squeezeend",j),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",F);for(let Q=0;Q<y.length;Q++){const re=w[Q];re!==null&&(w[Q]=null,y[Q].disconnect(re))}B=null,Z=null,m.reset();for(const Q in p)delete p[Q];e.setRenderTarget(E),d=null,h=null,f=null,r=null,S=null,He.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,i.isPresenting===!0&&Ve("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,i.isPresenting===!0&&Ve("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(E=e.getRenderTarget(),r.addEventListener("select",j),r.addEventListener("selectstart",j),r.addEventListener("selectend",j),r.addEventListener("squeeze",j),r.addEventListener("squeezestart",j),r.addEventListener("squeezeend",j),r.addEventListener("end",k),r.addEventListener("inputsourceschange",F),M.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(R),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,Ge=null,Ce=null;M.depth&&(Ce=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Te=M.stencil?Ur:Bi,Ge=M.stencil?Ma:fi);const et={colorFormat:t.RGBA8,depthFormat:Ce,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer(et),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),S=new oi(h.textureWidth,h.textureHeight,{format:Xn,type:Mn,depthTexture:new ba(h.textureWidth,h.textureHeight,Ge,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const Te={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,Te),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new oi(d.framebufferWidth,d.framebufferHeight,{format:Xn,type:Mn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),He.setContext(r),He.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function F(Q){for(let re=0;re<Q.removed.length;re++){const Te=Q.removed[re],Ge=w.indexOf(Te);Ge>=0&&(w[Ge]=null,y[Ge].disconnect(Te))}for(let re=0;re<Q.added.length;re++){const Te=Q.added[re];let Ge=w.indexOf(Te);if(Ge===-1){for(let et=0;et<y.length;et++)if(et>=w.length){w.push(Te),Ge=et;break}else if(w[et]===null){w[et]=Te,Ge=et;break}if(Ge===-1)break}const Ce=y[Ge];Ce&&Ce.connect(Te)}}const Y=new W,pe=new W;function de(Q,re,Te){Y.setFromMatrixPosition(re.matrixWorld),pe.setFromMatrixPosition(Te.matrixWorld);const Ge=Y.distanceTo(pe),Ce=re.projectionMatrix.elements,et=Te.projectionMatrix.elements,P=Ce[14]/(Ce[10]-1),U=Ce[14]/(Ce[10]+1),G=(Ce[9]+1)/Ce[5],ne=(Ce[9]-1)/Ce[5],$=(Ce[8]-1)/Ce[0],ie=(et[8]+1)/et[0],C=P*$,ce=P*ie,ae=Ge/(-$+ie),ee=ae*-$;if(re.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(ee),Q.translateZ(ae),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Ce[10]===-1)Q.projectionMatrix.copy(re.projectionMatrix),Q.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const oe=P+ae,b=U+ae,x=C-ee,D=ce+(Ge-ee),X=G*U/b*oe,J=ne*U/b*oe;Q.projectionMatrix.makePerspective(x,D,X,J,oe,b),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function se(Q,re){re===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(re.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;let re=Q.near,Te=Q.far;m.texture!==null&&(m.depthNear>0&&(re=m.depthNear),m.depthFar>0&&(Te=m.depthFar)),z.near=A.near=v.near=re,z.far=A.far=v.far=Te,(B!==z.near||Z!==z.far)&&(r.updateRenderState({depthNear:z.near,depthFar:z.far}),B=z.near,Z=z.far),z.layers.mask=Q.layers.mask|6,v.layers.mask=z.layers.mask&3,A.layers.mask=z.layers.mask&5;const Ge=Q.parent,Ce=z.cameras;se(z,Ge);for(let et=0;et<Ce.length;et++)se(Ce[et],Ge);Ce.length===2?de(z,v,A):z.projectionMatrix.copy(v.projectionMatrix),te(Q,z,Ge)};function te(Q,re,Te){Te===null?Q.matrix.copy(re.matrixWorld):(Q.matrix.copy(Te.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(re.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(re.projectionMatrix),Q.projectionMatrixInverse.copy(re.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=vu*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(Q){l=Q,h!==null&&(h.fixedFoveation=Q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function(Q){return p[Q]};let De=null;function Oe(Q,re){if(u=re.getViewerPose(c||a),g=re,u!==null){const Te=u.views;d!==null&&(e.setRenderTargetFramebuffer(S,d.framebuffer),e.setRenderTarget(S));let Ge=!1;Te.length!==z.cameras.length&&(z.cameras.length=0,Ge=!0);for(let U=0;U<Te.length;U++){const G=Te[U];let ne=null;if(d!==null)ne=d.getViewport(G);else{const ie=f.getViewSubImage(h,G);ne=ie.viewport,U===0&&(e.setRenderTargetTextures(S,ie.colorTexture,ie.depthStencilTexture),e.setRenderTarget(S))}let $=I[U];$===void 0&&($=new Nn,$.layers.enable(U),$.viewport=new Tt,I[U]=$),$.matrix.fromArray(G.transform.matrix),$.matrix.decompose($.position,$.quaternion,$.scale),$.projectionMatrix.fromArray(G.projectionMatrix),$.projectionMatrixInverse.copy($.projectionMatrix).invert(),$.viewport.set(ne.x,ne.y,ne.width,ne.height),U===0&&(z.matrix.copy($.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Ge===!0&&z.cameras.push($)}const Ce=r.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){f=i.getBinding();const U=f.getDepthInformation(Te[0]);U&&U.isValid&&U.texture&&m.init(U,r.renderState)}if(Ce&&Ce.includes("camera-access")&&_){e.state.unbindTexture(),f=i.getBinding();for(let U=0;U<Te.length;U++){const G=Te[U].camera;if(G){let ne=p[G];ne||(ne=new Mm,p[G]=ne);const $=f.getCameraImage(G);ne.sourceTexture=$}}}}for(let Te=0;Te<y.length;Te++){const Ge=w[Te],Ce=y[Te];Ge!==null&&Ce!==void 0&&Ce.update(Ge,re,c||a)}De&&De(Q,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),g=null}const He=new bm;He.setAnimationLoop(Oe),this.setAnimationLoop=function(Q){De=Q},this.dispose=function(){}}}const Er=new hi,AE=new wt;function wE(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,gm(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,M,E,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,S)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,M,E):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===cn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===cn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p),E=M.envMap,S=M.envMapRotation;E&&(m.envMap.value=E,Er.copy(S),Er.x*=-1,Er.y*=-1,Er.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Er.y*=-1,Er.z*=-1),m.envMapRotation.value.setFromMatrix4(AE.makeRotationFromEuler(Er)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=E*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===cn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function RE(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,E){const S=E.program;i.uniformBlockBinding(M,S)}function c(M,E){let S=r[M.id];S===void 0&&(g(M),S=u(M),r[M.id]=S,M.addEventListener("dispose",m));const y=E.program;i.updateUBOMapping(M,y);const w=e.render.frame;s[M.id]!==w&&(h(M),s[M.id]=w)}function u(M){const E=f();M.__bindingPointIndex=E;const S=n.createBuffer(),y=M.__size,w=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,y,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,S),S}function f(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return it("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const E=r[M.id],S=M.uniforms,y=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let w=0,R=S.length;w<R;w++){const L=Array.isArray(S[w])?S[w]:[S[w]];for(let v=0,A=L.length;v<A;v++){const I=L[v];if(d(I,w,v,y)===!0){const z=I.__offset,B=Array.isArray(I.value)?I.value:[I.value];let Z=0;for(let j=0;j<B.length;j++){const k=B[j],F=_(k);typeof k=="number"||typeof k=="boolean"?(I.__data[0]=k,n.bufferSubData(n.UNIFORM_BUFFER,z+Z,I.__data)):k.isMatrix3?(I.__data[0]=k.elements[0],I.__data[1]=k.elements[1],I.__data[2]=k.elements[2],I.__data[3]=0,I.__data[4]=k.elements[3],I.__data[5]=k.elements[4],I.__data[6]=k.elements[5],I.__data[7]=0,I.__data[8]=k.elements[6],I.__data[9]=k.elements[7],I.__data[10]=k.elements[8],I.__data[11]=0):(k.toArray(I.__data,Z),Z+=F.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(M,E,S,y){const w=M.value,R=E+"_"+S;if(y[R]===void 0)return typeof w=="number"||typeof w=="boolean"?y[R]=w:y[R]=w.clone(),!0;{const L=y[R];if(typeof w=="number"||typeof w=="boolean"){if(L!==w)return y[R]=w,!0}else if(L.equals(w)===!1)return L.copy(w),!0}return!1}function g(M){const E=M.uniforms;let S=0;const y=16;for(let R=0,L=E.length;R<L;R++){const v=Array.isArray(E[R])?E[R]:[E[R]];for(let A=0,I=v.length;A<I;A++){const z=v[A],B=Array.isArray(z.value)?z.value:[z.value];for(let Z=0,j=B.length;Z<j;Z++){const k=B[Z],F=_(k),Y=S%y,pe=Y%F.boundary,de=Y+pe;S+=pe,de!==0&&y-de<F.storage&&(S+=y-de),z.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=S,S+=F.storage}}}const w=S%y;return w>0&&(S+=y-w),M.__size=S,M.__cache={},this}function _(M){const E={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(E.boundary=4,E.storage=4):M.isVector2?(E.boundary=8,E.storage=8):M.isVector3||M.isColor?(E.boundary=16,E.storage=12):M.isVector4?(E.boundary=16,E.storage=16):M.isMatrix3?(E.boundary=48,E.storage=48):M.isMatrix4?(E.boundary=64,E.storage=64):M.isTexture?Ve("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ve("WebGLRenderer: Unsupported uniform value type.",M),E}function m(M){const E=M.target;E.removeEventListener("dispose",m);const S=a.indexOf(E.__bindingPointIndex);a.splice(S,1),n.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function p(){for(const M in r)n.deleteBuffer(r[M]);a=[],r={},s={}}return{bind:l,update:c,dispose:p}}const CE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let $n=null;function PE(){return $n===null&&($n=new Mv(CE,16,16,Rs,Oi),$n.name="DFG_LUT",$n.minFilter=Xt,$n.magFilter=Xt,$n.wrapS=Ci,$n.wrapT=Ci,$n.generateMipmaps=!1,$n.needsUpdate=!0),$n}class DE{constructor(e={}){const{canvas:t=Yx(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=Mn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const _=d,m=new Set([lf,of,af]),p=new Set([Mn,fi,Sa,Ma,rf,sf]),M=new Uint32Array(4),E=new Int32Array(4);let S=null,y=null;const w=[],R=[];let L=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ai,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let A=!1;this._outputColorSpace=In;let I=0,z=0,B=null,Z=-1,j=null;const k=new Tt,F=new Tt;let Y=null;const pe=new Je(0);let de=0,se=t.width,te=t.height,De=1,Oe=null,He=null;const Q=new Tt(0,0,se,te),re=new Tt(0,0,se,te);let Te=!1;const Ge=new df;let Ce=!1,et=!1;const P=new wt,U=new W,G=new Tt,ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $=!1;function ie(){return B===null?De:1}let C=i;function ce(T,O){return t.getContext(T,O)}try{const T={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ef}`),t.addEventListener("webglcontextlost",We,!1),t.addEventListener("webglcontextrestored",mt,!1),t.addEventListener("webglcontextcreationerror",at,!1),C===null){const O="webgl2";if(C=ce(O,T),C===null)throw ce(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw it("WebGLRenderer: "+T.message),T}let ae,ee,oe,b,x,D,X,J,H,ye,fe,Ae,Ie,ue,ge,ve,we,_e,qe,N,Ee,me,Re,he;function le(){ae=new Py(C),ae.init(),me=new ME(C,ae),ee=new My(C,ae,e,me),oe=new vE(C,ae),ee.reversedDepthBuffer&&h&&oe.buffers.depth.setReversed(!0),b=new Iy(C),x=new rE,D=new SE(C,ae,oe,x,ee,me,b),X=new by(v),J=new Cy(v),H=new Ov(C),Re=new vy(C,H),ye=new Dy(C,H,b,Re),fe=new Ny(C,ye,H,b),qe=new Uy(C,ee,D),ve=new yy(x),Ae=new iE(v,X,J,ae,ee,Re,ve),Ie=new wE(v,x),ue=new aE,ge=new hE(ae),_e=new xy(v,X,J,oe,fe,g,l),we=new gE(v,fe,ee),he=new RE(C,b,ee,oe),N=new Sy(C,ae,b),Ee=new Ly(C,ae,b),b.programs=Ae.programs,v.capabilities=ee,v.extensions=ae,v.properties=x,v.renderLists=ue,v.shadowMap=we,v.state=oe,v.info=b}le(),_!==Mn&&(L=new Oy(_,t.width,t.height,r,s));const xe=new TE(v,C);this.xr=xe,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const T=ae.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ae.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return De},this.setPixelRatio=function(T){T!==void 0&&(De=T,this.setSize(se,te,!1))},this.getSize=function(T){return T.set(se,te)},this.setSize=function(T,O,K=!0){if(xe.isPresenting){Ve("WebGLRenderer: Can't change size while VR device is presenting.");return}se=T,te=O,t.width=Math.floor(T*De),t.height=Math.floor(O*De),K===!0&&(t.style.width=T+"px",t.style.height=O+"px"),L!==null&&L.setSize(t.width,t.height),this.setViewport(0,0,T,O)},this.getDrawingBufferSize=function(T){return T.set(se*De,te*De).floor()},this.setDrawingBufferSize=function(T,O,K){se=T,te=O,De=K,t.width=Math.floor(T*K),t.height=Math.floor(O*K),this.setViewport(0,0,T,O)},this.setEffects=function(T){if(_===Mn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let O=0;O<T.length;O++)if(T[O].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(k)},this.getViewport=function(T){return T.copy(Q)},this.setViewport=function(T,O,K,q){T.isVector4?Q.set(T.x,T.y,T.z,T.w):Q.set(T,O,K,q),oe.viewport(k.copy(Q).multiplyScalar(De).round())},this.getScissor=function(T){return T.copy(re)},this.setScissor=function(T,O,K,q){T.isVector4?re.set(T.x,T.y,T.z,T.w):re.set(T,O,K,q),oe.scissor(F.copy(re).multiplyScalar(De).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(T){oe.setScissorTest(Te=T)},this.setOpaqueSort=function(T){Oe=T},this.setTransparentSort=function(T){He=T},this.getClearColor=function(T){return T.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor(...arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha(...arguments)},this.clear=function(T=!0,O=!0,K=!0){let q=0;if(T){let V=!1;if(B!==null){const Se=B.texture.format;V=m.has(Se)}if(V){const Se=B.texture.type,Pe=p.has(Se),be=_e.getClearColor(),Le=_e.getClearAlpha(),Ue=be.r,Be=be.g,Ne=be.b;Pe?(M[0]=Ue,M[1]=Be,M[2]=Ne,M[3]=Le,C.clearBufferuiv(C.COLOR,0,M)):(E[0]=Ue,E[1]=Be,E[2]=Ne,E[3]=Le,C.clearBufferiv(C.COLOR,0,E))}else q|=C.COLOR_BUFFER_BIT}O&&(q|=C.DEPTH_BUFFER_BIT),K&&(q|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",We,!1),t.removeEventListener("webglcontextrestored",mt,!1),t.removeEventListener("webglcontextcreationerror",at,!1),_e.dispose(),ue.dispose(),ge.dispose(),x.dispose(),X.dispose(),J.dispose(),fe.dispose(),Re.dispose(),he.dispose(),Ae.dispose(),xe.dispose(),xe.removeEventListener("sessionstart",Ff),xe.removeEventListener("sessionend",Of),mr.stop()};function We(T){T.preventDefault(),Ph("WebGLRenderer: Context Lost."),A=!0}function mt(){Ph("WebGLRenderer: Context Restored."),A=!1;const T=b.autoReset,O=we.enabled,K=we.autoUpdate,q=we.needsUpdate,V=we.type;le(),b.autoReset=T,we.enabled=O,we.autoUpdate=K,we.needsUpdate=q,we.type=V}function at(T){it("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function jn(T){const O=T.target;O.removeEventListener("dispose",jn),_i(O)}function _i(T){N_(T),x.remove(T)}function N_(T){const O=x.get(T).programs;O!==void 0&&(O.forEach(function(K){Ae.releaseProgram(K)}),T.isShaderMaterial&&Ae.releaseShaderCache(T))}this.renderBufferDirect=function(T,O,K,q,V,Se){O===null&&(O=ne);const Pe=V.isMesh&&V.matrixWorld.determinant()<0,be=O_(T,O,K,q,V);oe.setMaterial(q,Pe);let Le=K.index,Ue=1;if(q.wireframe===!0){if(Le=ye.getWireframeAttribute(K),Le===void 0)return;Ue=2}const Be=K.drawRange,Ne=K.attributes.position;let $e=Be.start*Ue,ct=(Be.start+Be.count)*Ue;Se!==null&&($e=Math.max($e,Se.start*Ue),ct=Math.min(ct,(Se.start+Se.count)*Ue)),Le!==null?($e=Math.max($e,0),ct=Math.min(ct,Le.count)):Ne!=null&&($e=Math.max($e,0),ct=Math.min(ct,Ne.count));const bt=ct-$e;if(bt<0||bt===1/0)return;Re.setup(V,q,be,K,Le);let Et,ft=N;if(Le!==null&&(Et=H.get(Le),ft=Ee,ft.setIndex(Et)),V.isMesh)q.wireframe===!0?(oe.setLineWidth(q.wireframeLinewidth*ie()),ft.setMode(C.LINES)):ft.setMode(C.TRIANGLES);else if(V.isLine){let Fe=q.linewidth;Fe===void 0&&(Fe=1),oe.setLineWidth(Fe*ie()),V.isLineSegments?ft.setMode(C.LINES):V.isLineLoop?ft.setMode(C.LINE_LOOP):ft.setMode(C.LINE_STRIP)}else V.isPoints?ft.setMode(C.POINTS):V.isSprite&&ft.setMode(C.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)ya("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ft.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(ae.get("WEBGL_multi_draw"))ft.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Fe=V._multiDrawStarts,ot=V._multiDrawCounts,nt=V._multiDrawCount,mn=Le?H.get(Le).bytesPerElement:1,qr=x.get(q).currentProgram.getUniforms();for(let _n=0;_n<nt;_n++)qr.setValue(C,"_gl_DrawID",_n),ft.render(Fe[_n]/mn,ot[_n])}else if(V.isInstancedMesh)ft.renderInstances($e,bt,V.count);else if(K.isInstancedBufferGeometry){const Fe=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,ot=Math.min(K.instanceCount,Fe);ft.renderInstances($e,bt,ot)}else ft.render($e,bt)};function Nf(T,O,K){T.transparent===!0&&T.side===Ri&&T.forceSinglePass===!1?(T.side=cn,T.needsUpdate=!0,ka(T,O,K),T.side=cr,T.needsUpdate=!0,ka(T,O,K),T.side=Ri):ka(T,O,K)}this.compile=function(T,O,K=null){K===null&&(K=T),y=ge.get(K),y.init(O),R.push(y),K.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(y.pushLight(V),V.castShadow&&y.pushShadow(V))}),T!==K&&T.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(y.pushLight(V),V.castShadow&&y.pushShadow(V))}),y.setupLights();const q=new Set;return T.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const Se=V.material;if(Se)if(Array.isArray(Se))for(let Pe=0;Pe<Se.length;Pe++){const be=Se[Pe];Nf(be,K,V),q.add(be)}else Nf(Se,K,V),q.add(Se)}),y=R.pop(),q},this.compileAsync=function(T,O,K=null){const q=this.compile(T,O,K);return new Promise(V=>{function Se(){if(q.forEach(function(Pe){x.get(Pe).currentProgram.isReady()&&q.delete(Pe)}),q.size===0){V(T);return}setTimeout(Se,10)}ae.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let ml=null;function F_(T){ml&&ml(T)}function Ff(){mr.stop()}function Of(){mr.start()}const mr=new bm;mr.setAnimationLoop(F_),typeof self<"u"&&mr.setContext(self),this.setAnimationLoop=function(T){ml=T,xe.setAnimationLoop(T),T===null?mr.stop():mr.start()},xe.addEventListener("sessionstart",Ff),xe.addEventListener("sessionend",Of),this.render=function(T,O){if(O!==void 0&&O.isCamera!==!0){it("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;const K=xe.enabled===!0&&xe.isPresenting===!0,q=L!==null&&(B===null||K)&&L.begin(v,B);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),xe.enabled===!0&&xe.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(xe.cameraAutoUpdate===!0&&xe.updateCamera(O),O=xe.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,O,B),y=ge.get(T,R.length),y.init(O),R.push(y),P.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Ge.setFromProjectionMatrix(P,ii,O.reversedDepth),et=this.localClippingEnabled,Ce=ve.init(this.clippingPlanes,et),S=ue.get(T,w.length),S.init(),w.push(S),xe.enabled===!0&&xe.isPresenting===!0){const Pe=v.xr.getDepthSensingMesh();Pe!==null&&_l(Pe,O,-1/0,v.sortObjects)}_l(T,O,0,v.sortObjects),S.finish(),v.sortObjects===!0&&S.sort(Oe,He),$=xe.enabled===!1||xe.isPresenting===!1||xe.hasDepthSensing()===!1,$&&_e.addToRenderList(S,T),this.info.render.frame++,Ce===!0&&ve.beginShadows();const V=y.state.shadowsArray;if(we.render(V,T,O),Ce===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset(),(q&&L.hasRenderPass())===!1){const Pe=S.opaque,be=S.transmissive;if(y.setupLights(),O.isArrayCamera){const Le=O.cameras;if(be.length>0)for(let Ue=0,Be=Le.length;Ue<Be;Ue++){const Ne=Le[Ue];zf(Pe,be,T,Ne)}$&&_e.render(T);for(let Ue=0,Be=Le.length;Ue<Be;Ue++){const Ne=Le[Ue];Bf(S,T,Ne,Ne.viewport)}}else be.length>0&&zf(Pe,be,T,O),$&&_e.render(T),Bf(S,T,O)}B!==null&&z===0&&(D.updateMultisampleRenderTarget(B),D.updateRenderTargetMipmap(B)),q&&L.end(v),T.isScene===!0&&T.onAfterRender(v,T,O),Re.resetDefaultState(),Z=-1,j=null,R.pop(),R.length>0?(y=R[R.length-1],Ce===!0&&ve.setGlobalState(v.clippingPlanes,y.state.camera)):y=null,w.pop(),w.length>0?S=w[w.length-1]:S=null};function _l(T,O,K,q){if(T.visible===!1)return;if(T.layers.test(O.layers)){if(T.isGroup)K=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(O);else if(T.isLight)y.pushLight(T),T.castShadow&&y.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Ge.intersectsSprite(T)){q&&G.setFromMatrixPosition(T.matrixWorld).applyMatrix4(P);const Pe=fe.update(T),be=T.material;be.visible&&S.push(T,Pe,be,K,G.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Ge.intersectsObject(T))){const Pe=fe.update(T),be=T.material;if(q&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),G.copy(T.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),G.copy(Pe.boundingSphere.center)),G.applyMatrix4(T.matrixWorld).applyMatrix4(P)),Array.isArray(be)){const Le=Pe.groups;for(let Ue=0,Be=Le.length;Ue<Be;Ue++){const Ne=Le[Ue],$e=be[Ne.materialIndex];$e&&$e.visible&&S.push(T,Pe,$e,K,G.z,Ne)}}else be.visible&&S.push(T,Pe,be,K,G.z,null)}}const Se=T.children;for(let Pe=0,be=Se.length;Pe<be;Pe++)_l(Se[Pe],O,K,q)}function Bf(T,O,K,q){const{opaque:V,transmissive:Se,transparent:Pe}=T;y.setupLightsView(K),Ce===!0&&ve.setGlobalState(v.clippingPlanes,K),q&&oe.viewport(k.copy(q)),V.length>0&&za(V,O,K),Se.length>0&&za(Se,O,K),Pe.length>0&&za(Pe,O,K),oe.buffers.depth.setTest(!0),oe.buffers.depth.setMask(!0),oe.buffers.color.setMask(!0),oe.setPolygonOffset(!1)}function zf(T,O,K,q){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(y.state.transmissionRenderTarget[q.id]===void 0){const $e=ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float");y.state.transmissionRenderTarget[q.id]=new oi(1,1,{generateMipmaps:!0,type:$e?Oi:Mn,minFilter:Ir,samples:ee.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace})}const Se=y.state.transmissionRenderTarget[q.id],Pe=q.viewport||k;Se.setSize(Pe.z*v.transmissionResolutionScale,Pe.w*v.transmissionResolutionScale);const be=v.getRenderTarget(),Le=v.getActiveCubeFace(),Ue=v.getActiveMipmapLevel();v.setRenderTarget(Se),v.getClearColor(pe),de=v.getClearAlpha(),de<1&&v.setClearColor(16777215,.5),v.clear(),$&&_e.render(K);const Be=v.toneMapping;v.toneMapping=ai;const Ne=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),y.setupLightsView(q),Ce===!0&&ve.setGlobalState(v.clippingPlanes,q),za(T,K,q),D.updateMultisampleRenderTarget(Se),D.updateRenderTargetMipmap(Se),ae.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let ct=0,bt=O.length;ct<bt;ct++){const Et=O[ct],{object:ft,geometry:Fe,material:ot,group:nt}=Et;if(ot.side===Ri&&ft.layers.test(q.layers)){const mn=ot.side;ot.side=cn,ot.needsUpdate=!0,kf(ft,K,q,Fe,ot,nt),ot.side=mn,ot.needsUpdate=!0,$e=!0}}$e===!0&&(D.updateMultisampleRenderTarget(Se),D.updateRenderTargetMipmap(Se))}v.setRenderTarget(be,Le,Ue),v.setClearColor(pe,de),Ne!==void 0&&(q.viewport=Ne),v.toneMapping=Be}function za(T,O,K){const q=O.isScene===!0?O.overrideMaterial:null;for(let V=0,Se=T.length;V<Se;V++){const Pe=T[V],{object:be,geometry:Le,group:Ue}=Pe;let Be=Pe.material;Be.allowOverride===!0&&q!==null&&(Be=q),be.layers.test(K.layers)&&kf(be,O,K,Le,Be,Ue)}}function kf(T,O,K,q,V,Se){T.onBeforeRender(v,O,K,q,V,Se),T.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),V.onBeforeRender(v,O,K,q,T,Se),V.transparent===!0&&V.side===Ri&&V.forceSinglePass===!1?(V.side=cn,V.needsUpdate=!0,v.renderBufferDirect(K,O,q,V,T,Se),V.side=cr,V.needsUpdate=!0,v.renderBufferDirect(K,O,q,V,T,Se),V.side=Ri):v.renderBufferDirect(K,O,q,V,T,Se),T.onAfterRender(v,O,K,q,V,Se)}function ka(T,O,K){O.isScene!==!0&&(O=ne);const q=x.get(T),V=y.state.lights,Se=y.state.shadowsArray,Pe=V.state.version,be=Ae.getParameters(T,V.state,Se,O,K),Le=Ae.getProgramCacheKey(be);let Ue=q.programs;q.environment=T.isMeshStandardMaterial?O.environment:null,q.fog=O.fog,q.envMap=(T.isMeshStandardMaterial?J:X).get(T.envMap||q.environment),q.envMapRotation=q.environment!==null&&T.envMap===null?O.environmentRotation:T.envMapRotation,Ue===void 0&&(T.addEventListener("dispose",jn),Ue=new Map,q.programs=Ue);let Be=Ue.get(Le);if(Be!==void 0){if(q.currentProgram===Be&&q.lightsStateVersion===Pe)return Hf(T,be),Be}else be.uniforms=Ae.getUniforms(T),T.onBeforeCompile(be,v),Be=Ae.acquireProgram(be,Le),Ue.set(Le,Be),q.uniforms=be.uniforms;const Ne=q.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ne.clippingPlanes=ve.uniform),Hf(T,be),q.needsLights=z_(T),q.lightsStateVersion=Pe,q.needsLights&&(Ne.ambientLightColor.value=V.state.ambient,Ne.lightProbe.value=V.state.probe,Ne.directionalLights.value=V.state.directional,Ne.directionalLightShadows.value=V.state.directionalShadow,Ne.spotLights.value=V.state.spot,Ne.spotLightShadows.value=V.state.spotShadow,Ne.rectAreaLights.value=V.state.rectArea,Ne.ltc_1.value=V.state.rectAreaLTC1,Ne.ltc_2.value=V.state.rectAreaLTC2,Ne.pointLights.value=V.state.point,Ne.pointLightShadows.value=V.state.pointShadow,Ne.hemisphereLights.value=V.state.hemi,Ne.directionalShadowMap.value=V.state.directionalShadowMap,Ne.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ne.spotShadowMap.value=V.state.spotShadowMap,Ne.spotLightMatrix.value=V.state.spotLightMatrix,Ne.spotLightMap.value=V.state.spotLightMap,Ne.pointShadowMap.value=V.state.pointShadowMap,Ne.pointShadowMatrix.value=V.state.pointShadowMatrix),q.currentProgram=Be,q.uniformsList=null,Be}function Vf(T){if(T.uniformsList===null){const O=T.currentProgram.getUniforms();T.uniformsList=wo.seqWithValue(O.seq,T.uniforms)}return T.uniformsList}function Hf(T,O){const K=x.get(T);K.outputColorSpace=O.outputColorSpace,K.batching=O.batching,K.batchingColor=O.batchingColor,K.instancing=O.instancing,K.instancingColor=O.instancingColor,K.instancingMorph=O.instancingMorph,K.skinning=O.skinning,K.morphTargets=O.morphTargets,K.morphNormals=O.morphNormals,K.morphColors=O.morphColors,K.morphTargetsCount=O.morphTargetsCount,K.numClippingPlanes=O.numClippingPlanes,K.numIntersection=O.numClipIntersection,K.vertexAlphas=O.vertexAlphas,K.vertexTangents=O.vertexTangents,K.toneMapping=O.toneMapping}function O_(T,O,K,q,V){O.isScene!==!0&&(O=ne),D.resetTextureUnits();const Se=O.fog,Pe=q.isMeshStandardMaterial?O.environment:null,be=B===null?v.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Cs,Le=(q.isMeshStandardMaterial?J:X).get(q.envMap||Pe),Ue=q.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Be=!!K.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ne=!!K.morphAttributes.position,$e=!!K.morphAttributes.normal,ct=!!K.morphAttributes.color;let bt=ai;q.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(bt=v.toneMapping);const Et=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ft=Et!==void 0?Et.length:0,Fe=x.get(q),ot=y.state.lights;if(Ce===!0&&(et===!0||T!==j)){const Kt=T===j&&q.id===Z;ve.setState(q,T,Kt)}let nt=!1;q.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==ot.state.version||Fe.outputColorSpace!==be||V.isBatchedMesh&&Fe.batching===!1||!V.isBatchedMesh&&Fe.batching===!0||V.isBatchedMesh&&Fe.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Fe.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Fe.instancing===!1||!V.isInstancedMesh&&Fe.instancing===!0||V.isSkinnedMesh&&Fe.skinning===!1||!V.isSkinnedMesh&&Fe.skinning===!0||V.isInstancedMesh&&Fe.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Fe.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Fe.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Fe.instancingMorph===!1&&V.morphTexture!==null||Fe.envMap!==Le||q.fog===!0&&Fe.fog!==Se||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==ve.numPlanes||Fe.numIntersection!==ve.numIntersection)||Fe.vertexAlphas!==Ue||Fe.vertexTangents!==Be||Fe.morphTargets!==Ne||Fe.morphNormals!==$e||Fe.morphColors!==ct||Fe.toneMapping!==bt||Fe.morphTargetsCount!==ft)&&(nt=!0):(nt=!0,Fe.__version=q.version);let mn=Fe.currentProgram;nt===!0&&(mn=ka(q,O,V));let qr=!1,_n=!1,zs=!1;const _t=mn.getUniforms(),rn=Fe.uniforms;if(oe.useProgram(mn.program)&&(qr=!0,_n=!0,zs=!0),q.id!==Z&&(Z=q.id,_n=!0),qr||j!==T){oe.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),_t.setValue(C,"projectionMatrix",T.projectionMatrix),_t.setValue(C,"viewMatrix",T.matrixWorldInverse);const sn=_t.map.cameraPosition;sn!==void 0&&sn.setValue(C,U.setFromMatrixPosition(T.matrixWorld)),ee.logarithmicDepthBuffer&&_t.setValue(C,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&_t.setValue(C,"isOrthographic",T.isOrthographicCamera===!0),j!==T&&(j=T,_n=!0,zs=!0)}if(Fe.needsLights&&(ot.state.directionalShadowMap.length>0&&_t.setValue(C,"directionalShadowMap",ot.state.directionalShadowMap,D),ot.state.spotShadowMap.length>0&&_t.setValue(C,"spotShadowMap",ot.state.spotShadowMap,D),ot.state.pointShadowMap.length>0&&_t.setValue(C,"pointShadowMap",ot.state.pointShadowMap,D)),V.isSkinnedMesh){_t.setOptional(C,V,"bindMatrix"),_t.setOptional(C,V,"bindMatrixInverse");const Kt=V.skeleton;Kt&&(Kt.boneTexture===null&&Kt.computeBoneTexture(),_t.setValue(C,"boneTexture",Kt.boneTexture,D))}V.isBatchedMesh&&(_t.setOptional(C,V,"batchingTexture"),_t.setValue(C,"batchingTexture",V._matricesTexture,D),_t.setOptional(C,V,"batchingIdTexture"),_t.setValue(C,"batchingIdTexture",V._indirectTexture,D),_t.setOptional(C,V,"batchingColorTexture"),V._colorsTexture!==null&&_t.setValue(C,"batchingColorTexture",V._colorsTexture,D));const Cn=K.morphAttributes;if((Cn.position!==void 0||Cn.normal!==void 0||Cn.color!==void 0)&&qe.update(V,K,mn),(_n||Fe.receiveShadow!==V.receiveShadow)&&(Fe.receiveShadow=V.receiveShadow,_t.setValue(C,"receiveShadow",V.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(rn.envMap.value=Le,rn.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&O.environment!==null&&(rn.envMapIntensity.value=O.environmentIntensity),rn.dfgLUT!==void 0&&(rn.dfgLUT.value=PE()),_n&&(_t.setValue(C,"toneMappingExposure",v.toneMappingExposure),Fe.needsLights&&B_(rn,zs),Se&&q.fog===!0&&Ie.refreshFogUniforms(rn,Se),Ie.refreshMaterialUniforms(rn,q,De,te,y.state.transmissionRenderTarget[T.id]),wo.upload(C,Vf(Fe),rn,D)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(wo.upload(C,Vf(Fe),rn,D),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&_t.setValue(C,"center",V.center),_t.setValue(C,"modelViewMatrix",V.modelViewMatrix),_t.setValue(C,"normalMatrix",V.normalMatrix),_t.setValue(C,"modelMatrix",V.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Kt=q.uniformsGroups;for(let sn=0,gl=Kt.length;sn<gl;sn++){const _r=Kt[sn];he.update(_r,mn),he.bind(_r,mn)}}return mn}function B_(T,O){T.ambientLightColor.needsUpdate=O,T.lightProbe.needsUpdate=O,T.directionalLights.needsUpdate=O,T.directionalLightShadows.needsUpdate=O,T.pointLights.needsUpdate=O,T.pointLightShadows.needsUpdate=O,T.spotLights.needsUpdate=O,T.spotLightShadows.needsUpdate=O,T.rectAreaLights.needsUpdate=O,T.hemisphereLights.needsUpdate=O}function z_(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(T,O,K){const q=x.get(T);q.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),x.get(T.texture).__webglTexture=O,x.get(T.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:K,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,O){const K=x.get(T);K.__webglFramebuffer=O,K.__useDefaultFramebuffer=O===void 0};const k_=C.createFramebuffer();this.setRenderTarget=function(T,O=0,K=0){B=T,I=O,z=K;let q=null,V=!1,Se=!1;if(T){const be=x.get(T);if(be.__useDefaultFramebuffer!==void 0){oe.bindFramebuffer(C.FRAMEBUFFER,be.__webglFramebuffer),k.copy(T.viewport),F.copy(T.scissor),Y=T.scissorTest,oe.viewport(k),oe.scissor(F),oe.setScissorTest(Y),Z=-1;return}else if(be.__webglFramebuffer===void 0)D.setupRenderTarget(T);else if(be.__hasExternalTextures)D.rebindTextures(T,x.get(T.texture).__webglTexture,x.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Be=T.depthTexture;if(be.__boundDepthTexture!==Be){if(Be!==null&&x.has(Be)&&(T.width!==Be.image.width||T.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(T)}}const Le=T.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(Se=!0);const Ue=x.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ue[O])?q=Ue[O][K]:q=Ue[O],V=!0):T.samples>0&&D.useMultisampledRTT(T)===!1?q=x.get(T).__webglMultisampledFramebuffer:Array.isArray(Ue)?q=Ue[K]:q=Ue,k.copy(T.viewport),F.copy(T.scissor),Y=T.scissorTest}else k.copy(Q).multiplyScalar(De).floor(),F.copy(re).multiplyScalar(De).floor(),Y=Te;if(K!==0&&(q=k_),oe.bindFramebuffer(C.FRAMEBUFFER,q)&&oe.drawBuffers(T,q),oe.viewport(k),oe.scissor(F),oe.setScissorTest(Y),V){const be=x.get(T.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+O,be.__webglTexture,K)}else if(Se){const be=O;for(let Le=0;Le<T.textures.length;Le++){const Ue=x.get(T.textures[Le]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+Le,Ue.__webglTexture,K,be)}}else if(T!==null&&K!==0){const be=x.get(T.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,be.__webglTexture,K)}Z=-1},this.readRenderTargetPixels=function(T,O,K,q,V,Se,Pe,be=0){if(!(T&&T.isWebGLRenderTarget)){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=x.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Pe!==void 0&&(Le=Le[Pe]),Le){oe.bindFramebuffer(C.FRAMEBUFFER,Le);try{const Ue=T.textures[be],Be=Ue.format,Ne=Ue.type;if(!ee.textureFormatReadable(Be)){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ee.textureTypeReadable(Ne)){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=T.width-q&&K>=0&&K<=T.height-V&&(T.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+be),C.readPixels(O,K,q,V,me.convert(Be),me.convert(Ne),Se))}finally{const Ue=B!==null?x.get(B).__webglFramebuffer:null;oe.bindFramebuffer(C.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(T,O,K,q,V,Se,Pe,be=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=x.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Pe!==void 0&&(Le=Le[Pe]),Le)if(O>=0&&O<=T.width-q&&K>=0&&K<=T.height-V){oe.bindFramebuffer(C.FRAMEBUFFER,Le);const Ue=T.textures[be],Be=Ue.format,Ne=Ue.type;if(!ee.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $e=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,$e),C.bufferData(C.PIXEL_PACK_BUFFER,Se.byteLength,C.STREAM_READ),T.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+be),C.readPixels(O,K,q,V,me.convert(Be),me.convert(Ne),0);const ct=B!==null?x.get(B).__webglFramebuffer:null;oe.bindFramebuffer(C.FRAMEBUFFER,ct);const bt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await jx(C,bt,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,$e),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,Se),C.deleteBuffer($e),C.deleteSync(bt),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,O=null,K=0){const q=Math.pow(2,-K),V=Math.floor(T.image.width*q),Se=Math.floor(T.image.height*q),Pe=O!==null?O.x:0,be=O!==null?O.y:0;D.setTexture2D(T,0),C.copyTexSubImage2D(C.TEXTURE_2D,K,0,0,Pe,be,V,Se),oe.unbindTexture()};const V_=C.createFramebuffer(),H_=C.createFramebuffer();this.copyTextureToTexture=function(T,O,K=null,q=null,V=0,Se=null){Se===null&&(V!==0?(ya("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Se=V,V=0):Se=0);let Pe,be,Le,Ue,Be,Ne,$e,ct,bt;const Et=T.isCompressedTexture?T.mipmaps[Se]:T.image;if(K!==null)Pe=K.max.x-K.min.x,be=K.max.y-K.min.y,Le=K.isBox3?K.max.z-K.min.z:1,Ue=K.min.x,Be=K.min.y,Ne=K.isBox3?K.min.z:0;else{const Cn=Math.pow(2,-V);Pe=Math.floor(Et.width*Cn),be=Math.floor(Et.height*Cn),T.isDataArrayTexture?Le=Et.depth:T.isData3DTexture?Le=Math.floor(Et.depth*Cn):Le=1,Ue=0,Be=0,Ne=0}q!==null?($e=q.x,ct=q.y,bt=q.z):($e=0,ct=0,bt=0);const ft=me.convert(O.format),Fe=me.convert(O.type);let ot;O.isData3DTexture?(D.setTexture3D(O,0),ot=C.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(D.setTexture2DArray(O,0),ot=C.TEXTURE_2D_ARRAY):(D.setTexture2D(O,0),ot=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,O.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,O.unpackAlignment);const nt=C.getParameter(C.UNPACK_ROW_LENGTH),mn=C.getParameter(C.UNPACK_IMAGE_HEIGHT),qr=C.getParameter(C.UNPACK_SKIP_PIXELS),_n=C.getParameter(C.UNPACK_SKIP_ROWS),zs=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,Et.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Et.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ue),C.pixelStorei(C.UNPACK_SKIP_ROWS,Be),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ne);const _t=T.isDataArrayTexture||T.isData3DTexture,rn=O.isDataArrayTexture||O.isData3DTexture;if(T.isDepthTexture){const Cn=x.get(T),Kt=x.get(O),sn=x.get(Cn.__renderTarget),gl=x.get(Kt.__renderTarget);oe.bindFramebuffer(C.READ_FRAMEBUFFER,sn.__webglFramebuffer),oe.bindFramebuffer(C.DRAW_FRAMEBUFFER,gl.__webglFramebuffer);for(let _r=0;_r<Le;_r++)_t&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,x.get(T).__webglTexture,V,Ne+_r),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,x.get(O).__webglTexture,Se,bt+_r)),C.blitFramebuffer(Ue,Be,Pe,be,$e,ct,Pe,be,C.DEPTH_BUFFER_BIT,C.NEAREST);oe.bindFramebuffer(C.READ_FRAMEBUFFER,null),oe.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(V!==0||T.isRenderTargetTexture||x.has(T)){const Cn=x.get(T),Kt=x.get(O);oe.bindFramebuffer(C.READ_FRAMEBUFFER,V_),oe.bindFramebuffer(C.DRAW_FRAMEBUFFER,H_);for(let sn=0;sn<Le;sn++)_t?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Cn.__webglTexture,V,Ne+sn):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Cn.__webglTexture,V),rn?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Kt.__webglTexture,Se,bt+sn):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Kt.__webglTexture,Se),V!==0?C.blitFramebuffer(Ue,Be,Pe,be,$e,ct,Pe,be,C.COLOR_BUFFER_BIT,C.NEAREST):rn?C.copyTexSubImage3D(ot,Se,$e,ct,bt+sn,Ue,Be,Pe,be):C.copyTexSubImage2D(ot,Se,$e,ct,Ue,Be,Pe,be);oe.bindFramebuffer(C.READ_FRAMEBUFFER,null),oe.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else rn?T.isDataTexture||T.isData3DTexture?C.texSubImage3D(ot,Se,$e,ct,bt,Pe,be,Le,ft,Fe,Et.data):O.isCompressedArrayTexture?C.compressedTexSubImage3D(ot,Se,$e,ct,bt,Pe,be,Le,ft,Et.data):C.texSubImage3D(ot,Se,$e,ct,bt,Pe,be,Le,ft,Fe,Et):T.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,Se,$e,ct,Pe,be,ft,Fe,Et.data):T.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,Se,$e,ct,Et.width,Et.height,ft,Et.data):C.texSubImage2D(C.TEXTURE_2D,Se,$e,ct,Pe,be,ft,Fe,Et);C.pixelStorei(C.UNPACK_ROW_LENGTH,nt),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,mn),C.pixelStorei(C.UNPACK_SKIP_PIXELS,qr),C.pixelStorei(C.UNPACK_SKIP_ROWS,_n),C.pixelStorei(C.UNPACK_SKIP_IMAGES,zs),Se===0&&O.generateMipmaps&&C.generateMipmap(ot),oe.unbindTexture()},this.initRenderTarget=function(T){x.get(T).__webglFramebuffer===void 0&&D.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?D.setTextureCube(T,0):T.isData3DTexture?D.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?D.setTexture2DArray(T,0):D.setTexture2D(T,0),oe.unbindTexture()},this.resetState=function(){I=0,z=0,B=null,oe.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}}const Md={type:"change"},mf={type:"start"},Rm={type:"end"},fo=new fm,yd=new Ji,LE=Math.cos(70*$x.DEG2RAD),Lt=new W,on=2*Math.PI,ut={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},oc=1e-6;class IE extends Nv{constructor(e,t=null){super(e,t),this.state=ut.NONE,this.target=new W,this.cursor=new W,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:xs.ROTATE,MIDDLE:xs.DOLLY,RIGHT:xs.PAN},this.touches={ONE:us.ROTATE,TWO:us.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new W,this._lastQuaternion=new Gr,this._lastTargetPosition=new W,this._quat=new Gr().setFromUnitVectors(e.up,new W(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new $h,this._sphericalDelta=new $h,this._scale=1,this._panOffset=new W,this._rotateStart=new Xe,this._rotateEnd=new Xe,this._rotateDelta=new Xe,this._panStart=new Xe,this._panEnd=new Xe,this._panDelta=new Xe,this._dollyStart=new Xe,this._dollyEnd=new Xe,this._dollyDelta=new Xe,this._dollyDirection=new W,this._mouse=new Xe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=NE.bind(this),this._onPointerDown=UE.bind(this),this._onPointerUp=FE.bind(this),this._onContextMenu=GE.bind(this),this._onMouseWheel=zE.bind(this),this._onKeyDown=kE.bind(this),this._onTouchStart=VE.bind(this),this._onTouchMove=HE.bind(this),this._onMouseDown=OE.bind(this),this._onMouseMove=BE.bind(this),this._interceptControlDown=WE.bind(this),this._interceptControlUp=XE.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Md),this.update(),this.state=ut.NONE}update(e=null){const t=this.object.position;Lt.copy(t).sub(this.target),Lt.applyQuaternion(this._quat),this._spherical.setFromVector3(Lt),this.autoRotate&&this.state===ut.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=on:i>Math.PI&&(i-=on),r<-Math.PI?r+=on:r>Math.PI&&(r-=on),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(Lt.setFromSpherical(this._spherical),Lt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Lt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Lt.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new W(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new W(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Lt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(fo.origin.copy(this.object.position),fo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(fo.direction))<LE?this.object.lookAt(this.target):(yd.setFromNormalAndCoplanarPoint(this.object.up,this.target),fo.intersectPlane(yd,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>oc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>oc||this._lastTargetPosition.distanceToSquared(this.target)>oc?(this.dispatchEvent(Md),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?on/60*this.autoRotateSpeed*e:on/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Lt.setFromMatrixColumn(t,0),Lt.multiplyScalar(-e),this._panOffset.add(Lt)}_panUp(e,t){this.screenSpacePanning===!0?Lt.setFromMatrixColumn(t,1):(Lt.setFromMatrixColumn(t,0),Lt.crossVectors(this.object.up,Lt)),Lt.multiplyScalar(e),this._panOffset.add(Lt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Lt.copy(r).sub(this.target);let s=Lt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*t*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=t-i.top,a=i.width,o=i.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(on*this._rotateDelta.x/t.clientHeight),this._rotateUp(on*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(on*this._rotateDelta.x/t.clientHeight),this._rotateUp(on*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Xe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function UE(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function NE(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function FE(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Rm),this.state=ut.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function OE(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case xs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ut.DOLLY;break;case xs.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ut.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ut.ROTATE}break;case xs.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ut.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ut.PAN}break;default:this.state=ut.NONE}this.state!==ut.NONE&&this.dispatchEvent(mf)}function BE(n){switch(this.state){case ut.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ut.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ut.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function zE(n){this.enabled===!1||this.enableZoom===!1||this.state!==ut.NONE||(n.preventDefault(),this.dispatchEvent(mf),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Rm))}function kE(n){this.enabled!==!1&&this._handleKeyDown(n)}function VE(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case us.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ut.TOUCH_ROTATE;break;case us.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ut.TOUCH_PAN;break;default:this.state=ut.NONE}break;case 2:switch(this.touches.TWO){case us.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ut.TOUCH_DOLLY_PAN;break;case us.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ut.TOUCH_DOLLY_ROTATE;break;default:this.state=ut.NONE}break;default:this.state=ut.NONE}this.state!==ut.NONE&&this.dispatchEvent(mf)}function HE(n){switch(this._trackPointer(n),this.state){case ut.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ut.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ut.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ut.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ut.NONE}}function GE(n){this.enabled!==!1&&n.preventDefault()}function WE(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function XE(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Ei(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Cm(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}var An={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ds={duration:.5,overwrite:!1,delay:0},_f,zt,vt,On=1e8,dt=1/On,yu=Math.PI*2,qE=yu/4,YE=0,Pm=Math.sqrt,jE=Math.cos,KE=Math.sin,Ft=function(e){return typeof e=="string"},At=function(e){return typeof e=="function"},zi=function(e){return typeof e=="number"},gf=function(e){return typeof e>"u"},mi=function(e){return typeof e=="object"},un=function(e){return e!==!1},xf=function(){return typeof window<"u"},ho=function(e){return At(e)||Ft(e)},Dm=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},jt=Array.isArray,$E=/random\([^)]+\)/g,ZE=/,\s*/g,bd=/(?:-?\.?\d|\.)+/gi,Lm=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,fs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,lc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Im=/[+-]=-?[.\d]+/,JE=/[^,'"\[\]\s]+/gi,QE=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Mt,Jn,bu,vf,wn={},Go={},Um,Nm=function(e){return(Go=Ls(e,wn))&&pn},Sf=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Ea=function(e,t){return!t&&console.warn(e)},Fm=function(e,t){return e&&(wn[e]=t)&&Go&&(Go[e]=t)||wn},Ta=function(){return 0},eT={suppressEvents:!0,isStart:!0,kill:!1},Ro={suppressEvents:!0,kill:!1},tT={suppressEvents:!0},Mf={},sr=[],Eu={},Om,Sn={},cc={},Ed=30,Co=[],yf="",bf=function(e){var t=e[0],i,r;if(mi(t)||At(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=Co.length;r--&&!Co[r].targetTest(t););i=Co[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new o_(e[r],i)))||e.splice(r,1);return e},Br=function(e){return e._gsap||bf(Bn(e))[0]._gsap},Bm=function(e,t,i){return(i=e[t])&&At(i)?e[t]():gf(i)&&e.getAttribute&&e.getAttribute(t)||i},fn=function(e,t){return(e=e.split(",")).forEach(t)||e},Rt=function(e){return Math.round(e*1e5)/1e5||0},St=function(e){return Math.round(e*1e7)/1e7||0},Ms=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},nT=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},Wo=function(){var e=sr.length,t=sr.slice(0),i,r;for(Eu={},sr.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Ef=function(e){return!!(e._initted||e._startAt||e.add)},zm=function(e,t,i,r){sr.length&&!zt&&Wo(),e.render(t,i,!!(zt&&t<0&&Ef(e))),sr.length&&!zt&&Wo()},km=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(JE).length<2?t:Ft(e)?e.trim():e},Vm=function(e){return e},Rn=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},iT=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},Ls=function(e,t){for(var i in t)e[i]=t[i];return e},Td=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=mi(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},Xo=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},ua=function(e){var t=e.parent||Mt,i=e.keyframes?iT(jt(e.keyframes)):Rn;if(un(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},rT=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},Hm=function(e,t,i,r,s){var a=e[r],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=a,t.parent=t._dp=e,t},hl=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,a=t._next;s?s._next=a:e[i]===t&&(e[i]=a),a?a._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},ur=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},zr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},sT=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Tu=function(e,t,i,r){return e._startAt&&(zt?e._startAt.revert(Ro):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},aT=function n(e){return!e||e._ts&&n(e.parent)},Ad=function(e){return e._repeat?Is(e._tTime,e=e.duration()+e._rDelay)*e:0},Is=function(e,t){var i=Math.floor(e=St(e/t));return e&&i===e?i-1:i},qo=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},dl=function(e){return e._end=St(e._start+(e._tDur/Math.abs(e._ts||e._rts||dt)||0))},pl=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=St(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),dl(e),i._dirty||zr(i,e)),e},Gm=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=qo(e.rawTime(),t),(!t._dur||Oa(0,t.totalDuration(),i)-t._tTime>dt)&&t.render(i,!0)),zr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-dt}},ti=function(e,t,i,r){return t.parent&&ur(t),t._start=St((zi(i)?i:i||e!==Mt?Ln(e,i,t):e._time)+t._delay),t._end=St(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Hm(e,t,"_first","_last",e._sort?"_start":0),Au(t)||(e._recent=t),r||Gm(e,t),e._ts<0&&pl(e,e._tTime),e},Wm=function(e,t){return(wn.ScrollTrigger||Sf("scrollTrigger",t))&&wn.ScrollTrigger.create(t,e)},Xm=function(e,t,i,r,s){if(Af(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!zt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Om!==yn.frame)return sr.push(e),e._lazy=[s,r],1},oT=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},Au=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},lT=function(e,t,i,r){var s=e.ratio,a=t<0||!t&&(!e._start&&oT(e)&&!(!e._initted&&Au(e))||(e._ts<0||e._dp._ts<0)&&!Au(e))?0:1,o=e._rDelay,l=0,c,u,f;if(o&&e._repeat&&(l=Oa(0,e._tDur,t),u=Is(l,o),e._yoyo&&u&1&&(a=1-a),u!==Is(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||zt||r||e._zTime===dt||!t&&e._zTime){if(!e._initted&&Xm(e,t,r,i,l))return;for(f=e._zTime,e._zTime=t||(i?dt:0),i||(i=t&&!f),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Tu(e,t,i,!0),e._onUpdate&&!i&&En(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&En(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&ur(e,1),!i&&!zt&&(En(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},cT=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Us=function(e,t,i,r){var s=e._repeat,a=St(t)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:St(a*(s+1)+e._rDelay*s):a,o>0&&!r&&pl(e,e._tTime=e._tDur*o),e.parent&&dl(e),i||zr(e.parent,e),e},wd=function(e){return e instanceof en?zr(e):Us(e,e._dur)},uT={_start:0,endTime:Ta,totalDuration:Ta},Ln=function n(e,t,i){var r=e.labels,s=e._recent||uT,a=e.duration()>=On?s.endTime(!1):e._dur,o,l,c;return Ft(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:i).totalDuration()/100:1)):o<0?(t in r||(r[t]=a),r[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&i&&(l=l/100*(jt(i)?i[0]:i).totalDuration()),o>1?n(e,t.substr(0,o-1),i)+l:a+l)):t==null?a:+t},fa=function(e,t,i){var r=zi(t[1]),s=(r?2:1)+(e<2?0:1),a=t[s],o,l;if(r&&(a.duration=t[1]),a.parent=i,e){for(o=a,l=i;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=un(l.vars.inherit)&&l.parent;a.immediateRender=un(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new Pt(t[0],a,t[s+1])},pr=function(e,t){return e||e===0?t(e):t},Oa=function(e,t,i){return i<e?e:i>t?t:i},Wt=function(e,t){return!Ft(e)||!(t=QE.exec(e))?"":t[1]},fT=function(e,t,i){return pr(i,function(r){return Oa(e,t,r)})},wu=[].slice,qm=function(e,t){return e&&mi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&mi(e[0]))&&!e.nodeType&&e!==Jn},hT=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return Ft(r)&&!t||qm(r,1)?(s=i).push.apply(s,Bn(r)):i.push(r)})||i},Bn=function(e,t,i){return vt&&!t&&vt.selector?vt.selector(e):Ft(e)&&!i&&(bu||!Ns())?wu.call((t||vf).querySelectorAll(e),0):jt(e)?hT(e,i):qm(e)?wu.call(e,0):e?[e]:[]},Ru=function(e){return e=Bn(e)[0]||Ea("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Bn(t,i.querySelectorAll?i:i===e?Ea("Invalid scope")||vf.createElement("div"):e)}},Ym=function(e){return e.sort(function(){return .5-Math.random()})},jm=function(e){if(At(e))return e;var t=mi(e)?e:{each:e},i=kr(t.ease),r=t.from||0,s=parseFloat(t.base)||0,a={},o=r>0&&r<1,l=isNaN(r)||o,c=t.axis,u=r,f=r;return Ft(r)?u=f={center:.5,edges:.5,end:1}[r]||0:!o&&l&&(u=r[0],f=r[1]),function(h,d,g){var _=(g||t).length,m=a[_],p,M,E,S,y,w,R,L,v;if(!m){if(v=t.grid==="auto"?0:(t.grid||[1,On])[1],!v){for(R=-On;R<(R=g[v++].getBoundingClientRect().left)&&v<_;);v<_&&v--}for(m=a[_]=[],p=l?Math.min(v,_)*u-.5:r%v,M=v===On?0:l?_*f/v-.5:r/v|0,R=0,L=On,w=0;w<_;w++)E=w%v-p,S=M-(w/v|0),m[w]=y=c?Math.abs(c==="y"?S:E):Pm(E*E+S*S),y>R&&(R=y),y<L&&(L=y);r==="random"&&Ym(m),m.max=R-L,m.min=L,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(v>_?_-1:c?c==="y"?_/v:v:Math.max(v,_/v))||0)*(r==="edges"?-1:1),m.b=_<0?s-_:s,m.u=Wt(t.amount||t.each)||0,i=i&&_<0?r_(i):i}return _=(m[h]-m.min)/m.max||0,St(m.b+(i?i(_):_)*m.v)+m.u}},Cu=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=St(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(zi(i)?0:Wt(i))}},Km=function(e,t){var i=jt(e),r,s;return!i&&mi(e)&&(r=i=e.radius||On,e.values?(e=Bn(e.values),(s=!zi(e[0]))&&(r*=r)):e=Cu(e.increment)),pr(t,i?At(e)?function(a){return s=e(a),Math.abs(s-a)<=r?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=On,u=0,f=e.length,h,d;f--;)s?(h=e[f].x-o,d=e[f].y-l,h=h*h+d*d):h=Math.abs(e[f]-o),h<c&&(c=h,u=f);return u=!r||c<=r?e[u]:a,s||u===a||zi(a)?u:u+Wt(a)}:Cu(e))},$m=function(e,t,i,r){return pr(jt(e)?!t:i===!0?!!(i=0):!r,function(){return jt(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},dT=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,a){return a(s)},r)}},pT=function(e,t){return function(i){return e(parseFloat(i))+(t||Wt(i))}},mT=function(e,t,i){return Jm(e,t,0,1,i)},Zm=function(e,t,i){return pr(i,function(r){return e[~~t(r)]})},_T=function n(e,t,i){var r=t-e;return jt(e)?Zm(e,n(0,e.length),t):pr(i,function(s){return(r+(s-e)%r)%r+e})},gT=function n(e,t,i){var r=t-e,s=r*2;return jt(e)?Zm(e,n(0,e.length-1),t):pr(i,function(a){return a=(s+(a-e)%s)%s||0,e+(a>r?s-a:a)})},Aa=function(e){return e.replace($E,function(t){var i=t.indexOf("[")+1,r=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(ZE);return $m(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},Jm=function(e,t,i,r,s){var a=t-e,o=r-i;return pr(s,function(l){return i+((l-e)/a*o||0)})},xT=function n(e,t,i,r){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var a=Ft(e),o={},l,c,u,f,h;if(i===!0&&(r=1)&&(i=null),a)e={p:e},t={p:t};else if(jt(e)&&!jt(t)){for(u=[],f=e.length,h=f-2,c=1;c<f;c++)u.push(n(e[c-1],e[c]));f--,s=function(g){g*=f;var _=Math.min(h,~~g);return u[_](g-_)},i=t}else r||(e=Ls(jt(e)?[]:{},e));if(!u){for(l in t)Tf.call(o,e,l,"get",t[l]);s=function(g){return Cf(g,o)||(a?e.p:e)}}}return pr(i,s)},Rd=function(e,t,i){var r=e.labels,s=On,a,o,l;for(a in r)o=r[a]-t,o<0==!!i&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},En=function(e,t,i){var r=e.vars,s=r[t],a=vt,o=e._ctx,l,c,u;if(s)return l=r[t+"Params"],c=r.callbackScope||e,i&&sr.length&&Wo(),o&&(vt=o),u=l?s.apply(c,l):s.call(c),vt=a,u},ta=function(e){return ur(e),e.scrollTrigger&&e.scrollTrigger.kill(!!zt),e.progress()<1&&En(e,"onInterrupt"),e},hs,Qm=[],e_=function(e){if(e)if(e=!e.name&&e.default||e,xf()||e.headless){var t=e.name,i=At(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:Ta,render:Cf,add:Tf,kill:UT,modifier:IT,rawVars:0},a={targetTest:0,get:0,getSetter:Rf,aliases:{},register:0};if(Ns(),e!==r){if(Sn[t])return;Rn(r,Rn(Xo(e,s),a)),Ls(r.prototype,Ls(s,Xo(e,a))),Sn[r.prop=t]=r,e.targetTest&&(Co.push(r),Mf[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Fm(t,r),e.register&&e.register(pn,r,hn)}else Qm.push(e)},ht=255,na={aqua:[0,ht,ht],lime:[0,ht,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ht],navy:[0,0,128],white:[ht,ht,ht],olive:[128,128,0],yellow:[ht,ht,0],orange:[ht,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ht,0,0],pink:[ht,192,203],cyan:[0,ht,ht],transparent:[ht,ht,ht,0]},uc=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*ht+.5|0},t_=function(e,t,i){var r=e?zi(e)?[e>>16,e>>8&ht,e&ht]:0:na.black,s,a,o,l,c,u,f,h,d,g;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),na[e])r=na[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&ht,r&ht,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&ht,e&ht]}else if(e.substr(0,3)==="hsl"){if(r=g=e.match(bd),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,r.length>3&&(r[3]*=1),r[0]=uc(l+1/3,s,a),r[1]=uc(l,s,a),r[2]=uc(l-1/3,s,a);else if(~e.indexOf("="))return r=e.match(Lm),i&&r.length<4&&(r[3]=1),r}else r=e.match(bd)||na.transparent;r=r.map(Number)}return t&&!g&&(s=r[0]/ht,a=r[1]/ht,o=r[2]/ht,f=Math.max(s,a,o),h=Math.min(s,a,o),u=(f+h)/2,f===h?l=c=0:(d=f-h,c=u>.5?d/(2-f-h):d/(f+h),l=f===s?(a-o)/d+(a<o?6:0):f===a?(o-s)/d+2:(s-a)/d+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),i&&r.length<4&&(r[3]=1),r},n_=function(e){var t=[],i=[],r=-1;return e.split(ar).forEach(function(s){var a=s.match(fs)||[];t.push.apply(t,a),i.push(r+=a.length+1)}),t.c=i,t},Cd=function(e,t,i){var r="",s=(e+r).match(ar),a=t?"hsla(":"rgba(",o=0,l,c,u,f;if(!s)return e;if(s=s.map(function(h){return(h=t_(h,t,1))&&a+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),i&&(u=n_(e),l=i.c,l.join(r)!==u.c.join(r)))for(c=e.replace(ar,"1").split(fs),f=c.length-1;o<f;o++)r+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:i).shift());if(!c)for(c=e.split(ar),f=c.length-1;o<f;o++)r+=c[o]+s[o];return r+c[f]},ar=(function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in na)n+="|"+e+"\\b";return new RegExp(n+")","gi")})(),vT=/hsl[a]?\(/,i_=function(e){var t=e.join(" "),i;if(ar.lastIndex=0,ar.test(t))return i=vT.test(t),e[1]=Cd(e[1],i),e[0]=Cd(e[0],i,n_(e[1])),!0},wa,yn=(function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,a=s,o=[],l,c,u,f,h,d,g=function _(m){var p=n()-r,M=m===!0,E,S,y,w;if((p>e||p<0)&&(i+=p-t),r+=p,y=r-i,E=y-a,(E>0||M)&&(w=++f.frame,h=y-f.time*1e3,f.time=y=y/1e3,a+=E+(E>=s?4:s-E),S=1),M||(l=c(_)),S)for(d=0;d<o.length;d++)o[d](y,h,w,m)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){Um&&(!bu&&xf()&&(Jn=bu=window,vf=Jn.document||{},wn.gsap=pn,(Jn.gsapVersions||(Jn.gsapVersions=[])).push(pn.version),Nm(Go||Jn.GreenSockGlobals||!Jn.gsap&&Jn||{}),Qm.forEach(e_)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(m){return setTimeout(m,a-f.time*1e3+1|0)},wa=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),wa=0,c=Ta},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),a=f.time*1e3+s},add:function(m,p,M){var E=p?function(S,y,w,R){m(S,y,w,R),f.remove(E)}:m;return f.remove(m),o[M?"unshift":"push"](E),Ns(),E},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&d>=p&&d--},_listeners:o},f})(),Ns=function(){return!wa&&yn.wake()},Qe={},ST=/^[\d.\-M][\d.\-,\s]/,MT=/["']/g,yT=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,a=i.length,o,l,c;s<a;s++)l=i[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[r]=isNaN(c)?c.replace(MT,"").trim():+c,r=l.substr(o+1).trim();return t},bT=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},ET=function(e){var t=(e+"").split("("),i=Qe[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[yT(t[1])]:bT(e).split(",").map(km)):Qe._CE&&ST.test(e)?Qe._CE("",e):i},r_=function(e){return function(t){return 1-e(1-t)}},s_=function n(e,t){for(var i=e._first,r;i;)i instanceof en?n(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?n(i.timeline,t):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=t)),i=i._next},kr=function(e,t){return e&&(At(e)?e:Qe[e]||ET(e))||t},Xr=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},a;return fn(e,function(o){Qe[o]=wn[o]=s,Qe[a=o.toLowerCase()]=i;for(var l in s)Qe[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Qe[o+"."+l]=s[l]}),s},a_=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},fc=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),a=s/yu*(Math.asin(1/r)||0),o=function(u){return u===1?1:r*Math.pow(2,-10*u)*KE((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:a_(o);return s=yu/s,l.config=function(c,u){return n(e,c,u)},l},hc=function n(e,t){t===void 0&&(t=1.70158);var i=function(a){return a?--a*a*((t+1)*a+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:a_(i);return r.config=function(s){return n(e,s)},r};fn("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;Xr(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});Qe.Linear.easeNone=Qe.none=Qe.Linear.easeIn;Xr("Elastic",fc("in"),fc("out"),fc());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(o){return o<t?n*o*o:o<i?n*Math.pow(o-1.5/e,2)+.75:o<r?n*(o-=2.25/e)*o+.9375:n*Math.pow(o-2.625/e,2)+.984375};Xr("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Xr("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});Xr("Circ",function(n){return-(Pm(1-n*n)-1)});Xr("Sine",function(n){return n===1?1:-jE(n*qE)+1});Xr("Back",hc("in"),hc("out"),hc());Qe.SteppedEase=Qe.steps=wn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,a=1-dt;return function(o){return((r*Oa(0,a,o)|0)+s)*i}}};Ds.ease=Qe["quad.out"];fn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return yf+=n+","+n+"Params,"});var o_=function(e,t){this.id=YE++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Bm,this.set=t?t.getSetter:Rf},Ra=(function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Us(this,+t.duration,1,1),this.data=t.data,vt&&(this._ctx=vt,vt.data.push(this)),wa||yn.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Us(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(Ns(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(pl(this,i),!s._dp||s.parent||Gm(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&ti(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===dt||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),zm(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+Ad(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+Ad(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?Is(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-dt?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?qo(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-dt?0:this._rts,this.totalTime(Oa(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),dl(this),sT(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ns(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==dt&&(this._tTime-=dt)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=St(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&ti(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(un(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?qo(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=tT);var r=zt;return zt=i,Ef(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),zt=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,wd(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,wd(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Ln(this,i),un(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,un(r)),this._dur||(this._zTime=-dt),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-dt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-dt,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-dt)},e.eventCallback=function(i,r,s){var a=this.vars;return arguments.length>1?(r?(a[i]=r,s&&(a[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete a[i],this):a[i]},e.then=function(i){var r=this,s=r._prom;return new Promise(function(a){var o=At(i)?i:Vm,l=function(){var u=r.then;r.then=null,s&&s(),At(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=u),a(o),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){ta(this)},n})();Rn(Ra.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-dt,_prom:0,_ps:!1,_rts:1});var en=(function(n){Cm(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=un(i.sortChildren),Mt&&ti(i.parent||Mt,Ei(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&Wm(Ei(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,a){return fa(0,arguments,this),this},t.from=function(r,s,a){return fa(1,arguments,this),this},t.fromTo=function(r,s,a,o){return fa(2,arguments,this),this},t.set=function(r,s,a){return s.duration=0,s.parent=this,ua(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Pt(r,s,Ln(this,a),1),this},t.call=function(r,s,a){return ti(this,Pt.delayedCall(0,r,s),a)},t.staggerTo=function(r,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new Pt(r,a,Ln(this,l)),this},t.staggerFrom=function(r,s,a,o,l,c,u){return a.runBackwards=1,ua(a).immediateRender=un(a.immediateRender),this.staggerTo(r,s,a,o,l,c,u)},t.staggerFromTo=function(r,s,a,o,l,c,u,f){return o.startAt=a,ua(o).immediateRender=un(o.immediateRender),this.staggerTo(r,s,o,l,c,u,f)},t.render=function(r,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:St(r),f=this._zTime<0!=r<0&&(this._initted||!c),h,d,g,_,m,p,M,E,S,y,w,R;if(this!==Mt&&u>l&&r>=0&&(u=l),u!==this._tTime||a||f){if(o!==this._time&&c&&(u+=this._time-o,r+=this._time-o),h=u,S=this._start,E=this._ts,p=!E,f&&(c||(o=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(w=this._yoyo,m=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,a);if(h=St(u%m),u===l?(_=this._repeat,h=c):(y=St(u/m),_=~~y,_&&_===y&&(h=c,_--),h>c&&(h=c)),y=Is(this._tTime,m),!o&&this._tTime&&y!==_&&this._tTime-y*m-this._dur<=0&&(y=_),w&&_&1&&(h=c-h,R=1),_!==y&&!this._lock){var L=w&&y&1,v=L===(w&&_&1);if(_<y&&(L=!L),o=L?0:u%c?c:u,this._lock=1,this.render(o||(R?0:St(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&En(this,"onRepeat"),this.vars.repeatRefresh&&!R&&(this.invalidate()._lock=1,y=_),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,v&&(this._lock=2,o=L?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!R&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;s_(this,R)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=cT(this,St(o),St(h)),M&&(u-=h-(h=M._start))),this._tTime=u,this._time=h,this._act=!E,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,o=0),!o&&u&&c&&!s&&!y&&(En(this,"onStart"),this._tTime!==u))return this;if(h>=o&&r>=0)for(d=this._first;d;){if(g=d._next,(d._act||h>=d._start)&&d._ts&&M!==d){if(d.parent!==this)return this.render(r,s,a);if(d.render(d._ts>0?(h-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(h-d._start)*d._ts,s,a),h!==this._time||!this._ts&&!p){M=0,g&&(u+=this._zTime=-dt);break}}d=g}else{d=this._last;for(var A=r<0?r:h;d;){if(g=d._prev,(d._act||A<=d._end)&&d._ts&&M!==d){if(d.parent!==this)return this.render(r,s,a);if(d.render(d._ts>0?(A-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(A-d._start)*d._ts,s,a||zt&&Ef(d)),h!==this._time||!this._ts&&!p){M=0,g&&(u+=this._zTime=A?-dt:dt);break}}d=g}}if(M&&!s&&(this.pause(),M.render(h>=o?0:-dt)._zTime=h>=o?1:-1,this._ts))return this._start=S,dl(this),this.render(r,s,a);this._onUpdate&&!s&&En(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(S===this._start||Math.abs(E)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&ur(this,1),!s&&!(r<0&&!o)&&(u||o||!l)&&(En(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var a=this;if(zi(s)||(s=Ln(this,s,r)),!(r instanceof Ra)){if(jt(r))return r.forEach(function(o){return a.add(o,s)}),this;if(Ft(r))return this.addLabel(r,s);if(At(r))r=Pt.delayedCall(0,r);else return this}return this!==r?ti(this,r,s):this},t.getChildren=function(r,s,a,o){r===void 0&&(r=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-On);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Pt?s&&l.push(c):(a&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===r)return s[a]},t.remove=function(r){return Ft(r)?this.removeLabel(r):At(r)?this.killTweensOf(r):(r.parent===this&&hl(this,r),r===this._recent&&(this._recent=this._last),zr(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=St(yn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Ln(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,a){var o=Pt.delayedCall(0,s||Ta,a);return o.data="isPause",this._hasPause=1,ti(this,o,Ln(this,r))},t.removePause=function(r){var s=this._first;for(r=Ln(this,r);s;)s._start===r&&s.data==="isPause"&&ur(s),s=s._next},t.killTweensOf=function(r,s,a){for(var o=this.getTweensOf(r,a),l=o.length;l--;)tr!==o[l]&&o[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var a=[],o=Bn(r),l=this._first,c=zi(s),u;l;)l instanceof Pt?nT(l._targets,o)&&(c?(!tr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(r,s){s=s||{};var a=this,o=Ln(a,r),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,d,g=Pt.to(a,Rn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||dt,onStart:function(){if(a.pause(),!d){var m=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==m&&Us(g,m,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,f||[])}},s));return h?g.render(0):g},t.tweenFromTo=function(r,s,a){return this.tweenTo(s,Rn({startAt:{time:Ln(this,r)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),Rd(this,Ln(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),Rd(this,Ln(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+dt)},t.shiftChildren=function(r,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(r=St(r);o;)o._start>=a&&(o._start+=r,o._end+=r),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=r);return zr(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),zr(this)},t.totalDuration=function(r){var s=0,a=this,o=a._last,l=On,c,u,f;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-r:r));if(a._dirty){for(f=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,ti(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!f&&!a._dp||f&&f.smoothChildTiming)&&(a._start+=St(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Us(a,a===Mt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(r){if(Mt._ts&&(zm(Mt,qo(r,Mt)),Om=yn.frame),yn.frame>=Ed){Ed+=An.autoSleep||120;var s=Mt._first;if((!s||!s._ts)&&An.autoSleep&&yn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||yn.sleep()}}},e})(Ra);Rn(en.prototype,{_lock:0,_hasPause:0,_forcing:0});var TT=function(e,t,i,r,s,a,o){var l=new hn(this._pt,e,t,0,1,d_,null,s),c=0,u=0,f,h,d,g,_,m,p,M;for(l.b=i,l.e=r,i+="",r+="",(p=~r.indexOf("random("))&&(r=Aa(r)),a&&(M=[i,r],a(M,e,t),i=M[0],r=M[1]),h=i.match(lc)||[];f=lc.exec(r);)g=f[0],_=r.substring(c,f.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==h[u++]&&(m=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?Ms(m,g)-m:parseFloat(g)-m,m:d&&d<4?Math.round:0},c=lc.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=o,(Im.test(r)||p)&&(l.e=0),this._pt=l,l},Tf=function(e,t,i,r,s,a,o,l,c,u){At(r)&&(r=r(s||0,e,a));var f=e[t],h=i!=="get"?i:At(f)?c?e[t.indexOf("set")||!At(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,d=At(f)?c?PT:f_:wf,g;if(Ft(r)&&(~r.indexOf("random(")&&(r=Aa(r)),r.charAt(1)==="="&&(g=Ms(h,r)+(Wt(h)||0),(g||g===0)&&(r=g))),!u||h!==r||Pu)return!isNaN(h*r)&&r!==""?(g=new hn(this._pt,e,t,+h||0,r-(h||0),typeof f=="boolean"?LT:h_,0,d),c&&(g.fp=c),o&&g.modifier(o,this,e),this._pt=g):(!f&&!(t in e)&&Sf(t,r),TT.call(this,e,t,h,r,d,l||An.stringFilter,c))},AT=function(e,t,i,r,s){if(At(e)&&(e=ha(e,s,t,i,r)),!mi(e)||e.style&&e.nodeType||jt(e)||Dm(e))return Ft(e)?ha(e,s,t,i,r):e;var a={},o;for(o in e)a[o]=ha(e[o],s,t,i,r);return a},l_=function(e,t,i,r,s,a){var o,l,c,u;if(Sn[e]&&(o=new Sn[e]).init(s,o.rawVars?t[e]:AT(t[e],r,s,a,i),i,r,a)!==!1&&(i._pt=l=new hn(i._pt,s,e,0,1,o.render,o,0,o.priority),i!==hs))for(c=i._ptLookup[i._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},tr,Pu,Af=function n(e,t,i){var r=e.vars,s=r.ease,a=r.startAt,o=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,f=r.yoyoEase,h=r.keyframes,d=r.autoRevert,g=e._dur,_=e._startAt,m=e._targets,p=e.parent,M=p&&p.data==="nested"?p.vars.targets:m,E=e._overwrite==="auto"&&!_f,S=e.timeline,y,w,R,L,v,A,I,z,B,Z,j,k,F;if(S&&(!h||!s)&&(s="none"),e._ease=kr(s,Ds.ease),e._yEase=f?r_(kr(f===!0?s:f,Ds.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!S&&!!r.runBackwards,!S||h&&!r.stagger){if(z=m[0]?Br(m[0]).harness:0,k=z&&r[z.prop],y=Xo(r,Mf),_&&(_._zTime<0&&_.progress(1),t<0&&u&&o&&!d?_.render(-1,!0):_.revert(u&&g?Ro:eT),_._lazy=0),a){if(ur(e._startAt=Pt.set(m,Rn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&un(l),startAt:null,delay:0,onUpdate:c&&function(){return En(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(zt||!o&&!d)&&e._startAt.revert(Ro),o&&g&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(o=!1),R=Rn({overwrite:!1,data:"isFromStart",lazy:o&&!_&&un(l),immediateRender:o,stagger:0,parent:p},y),k&&(R[z.prop]=k),ur(e._startAt=Pt.set(m,R)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(zt?e._startAt.revert(Ro):e._startAt.render(-1,!0)),e._zTime=t,!o)n(e._startAt,dt,dt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&un(l)||l&&!g,w=0;w<m.length;w++){if(v=m[w],I=v._gsap||bf(m)[w]._gsap,e._ptLookup[w]=Z={},Eu[I.id]&&sr.length&&Wo(),j=M===m?w:M.indexOf(v),z&&(B=new z).init(v,k||y,e,j,M)!==!1&&(e._pt=L=new hn(e._pt,v,B.name,0,1,B.render,B,0,B.priority),B._props.forEach(function(Y){Z[Y]=L}),B.priority&&(A=1)),!z||k)for(R in y)Sn[R]&&(B=l_(R,y,e,j,v,M))?B.priority&&(A=1):Z[R]=L=Tf.call(e,v,R,"get",y[R],j,M,0,r.stringFilter);e._op&&e._op[w]&&e.kill(v,e._op[w]),E&&e._pt&&(tr=e,Mt.killTweensOf(v,Z,e.globalTime(t)),F=!e.parent,tr=0),e._pt&&l&&(Eu[I.id]=1)}A&&p_(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!F,h&&t<=0&&S.render(On,!0,!0)},wT=function(e,t,i,r,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,f,h,d;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,d=e._targets.length;d--;){if(u=h[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Pu=1,e.vars[t]="+=0",Af(e,o),Pu=0,l?Ea(t+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)f=c[d],u=f._pt||f,u.s=(r||r===0)&&!s?r:u.s+(r||0)+a*u.c,u.c=i-u.s,f.e&&(f.e=Rt(i)+Wt(f.e)),f.b&&(f.b=u.s+Wt(f.b))},RT=function(e,t){var i=e[0]?Br(e[0]).harness:0,r=i&&i.aliases,s,a,o,l;if(!r)return t;s=Ls({},t);for(a in r)if(a in s)for(l=r[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},CT=function(e,t,i,r){var s=t.ease||r||"power1.inOut",a,o;if(jt(t))o=i[e]||(i[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=i[a]||(i[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},ha=function(e,t,i,r,s){return At(e)?e.call(t,i,r,s):Ft(e)&&~e.indexOf("random(")?Aa(e):e},c_=yf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",u_={};fn(c_+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return u_[n]=1});var Pt=(function(n){Cm(e,n);function e(i,r,s,a){var o;typeof r=="number"&&(s.duration=r,r=s,s=null),o=n.call(this,a?r:ua(r))||this;var l=o.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,M=r.parent||Mt,E=(jt(i)||Dm(i)?zi(i[0]):"length"in r)?[i]:Bn(i),S,y,w,R,L,v,A,I;if(o._targets=E.length?bf(E):Ea("GSAP target "+i+" not found. https://gsap.com",!An.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,g||h||ho(c)||ho(u)){if(r=o.vars,S=o.timeline=new en({data:"nested",defaults:_||{},targets:M&&M.data==="nested"?M.vars.targets:E}),S.kill(),S.parent=S._dp=Ei(o),S._start=0,h||ho(c)||ho(u)){if(R=E.length,A=h&&jm(h),mi(h))for(L in h)~c_.indexOf(L)&&(I||(I={}),I[L]=h[L]);for(y=0;y<R;y++)w=Xo(r,u_),w.stagger=0,p&&(w.yoyoEase=p),I&&Ls(w,I),v=E[y],w.duration=+ha(c,Ei(o),y,v,E),w.delay=(+ha(u,Ei(o),y,v,E)||0)-o._delay,!h&&R===1&&w.delay&&(o._delay=u=w.delay,o._start+=u,w.delay=0),S.to(v,w,A?A(y,v,E):0),S._ease=Qe.none;S.duration()?c=u=0:o.timeline=0}else if(g){ua(Rn(S.vars.defaults,{ease:"none"})),S._ease=kr(g.ease||r.ease||"none");var z=0,B,Z,j;if(jt(g))g.forEach(function(k){return S.to(E,k,">")}),S.duration();else{w={};for(L in g)L==="ease"||L==="easeEach"||CT(L,g[L],w,g.easeEach);for(L in w)for(B=w[L].sort(function(k,F){return k.t-F.t}),z=0,y=0;y<B.length;y++)Z=B[y],j={ease:Z.e,duration:(Z.t-(y?B[y-1].t:0))/100*c},j[L]=Z.v,S.to(E,j,z),z+=j.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||o.duration(c=S.duration())}else o.timeline=0;return d===!0&&!_f&&(tr=Ei(o),Mt.killTweensOf(E),tr=0),ti(M,Ei(o),s),r.reversed&&o.reverse(),r.paused&&o.paused(!0),(f||!c&&!g&&o._start===St(M._time)&&un(f)&&aT(Ei(o))&&M.data!=="nested")&&(o._tTime=-dt,o.render(Math.max(0,-u)||0)),m&&Wm(Ei(o),m),o}var t=e.prototype;return t.render=function(r,s,a){var o=this._time,l=this._tDur,c=this._dur,u=r<0,f=r>l-dt&&!u?l:r<dt?0:r,h,d,g,_,m,p,M,E,S;if(!c)lT(this,r,s,a);else if(f!==this._tTime||!r||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=f,E=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+r,s,a);if(h=St(f%_),f===l?(g=this._repeat,h=c):(m=St(f/_),g=~~m,g&&g===m?(h=c,g--):h>c&&(h=c)),p=this._yoyo&&g&1,p&&(S=this._yEase,h=c-h),m=Is(this._tTime,_),h===o&&!a&&this._initted&&g===m)return this._tTime=f,this;g!==m&&(E&&this._yEase&&s_(E,p),this.vars.repeatRefresh&&!p&&!this._lock&&h!==_&&this._initted&&(this._lock=a=1,this.render(St(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(Xm(this,u?r:h,a,s,f))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(r,s,a)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(S||this._ease)(h/c),this._from&&(this.ratio=M=1-M),!o&&f&&!s&&!m&&(En(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(M,d.d),d=d._next;E&&E.render(r<0?r:E._dur*E._ease(h/this._dur),s,a)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&Tu(this,r,s,a),En(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&En(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&Tu(this,r,!0,!0),(r||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&ur(this,1),!s&&!(u&&!o)&&(f||o||p)&&(En(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,a,o,l){wa||yn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Af(this,c),u=this._ease(c/this._dur),wT(this,r,s,a,o,u,c,l)?this.resetTo(r,s,a,o,1):(pl(this,0),this.parent||Hm(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ta(this):this.scrollTrigger&&this.scrollTrigger.kill(!!zt),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,tr&&tr.vars.overwrite!==!0)._first||ta(this),this.parent&&a!==this.timeline.totalDuration()&&Us(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=r?Bn(r):o,c=this._ptLookup,u=this._pt,f,h,d,g,_,m,p;if((!s||s==="all")&&rT(o,l))return s==="all"&&(this._pt=0),ta(this);for(f=this._op=this._op||[],s!=="all"&&(Ft(s)&&(_={},fn(s,function(M){return _[M]=1}),s=_),s=RT(o,s)),p=o.length;p--;)if(~l.indexOf(o[p])){h=c[p],s==="all"?(f[p]=s,g=h,d={}):(d=f[p]=f[p]||{},g=s);for(_ in g)m=h&&h[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&hl(this,m,"_pt"),delete h[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&ta(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return fa(1,arguments)},e.delayedCall=function(r,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(r,s,a){return fa(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,a){return Mt.killTweensOf(r,s,a)},e})(Ra);Rn(Pt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});fn("staggerTo,staggerFrom,staggerFromTo",function(n){Pt[n]=function(){var e=new en,t=wu.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var wf=function(e,t,i){return e[t]=i},f_=function(e,t,i){return e[t](i)},PT=function(e,t,i,r){return e[t](r.fp,i)},DT=function(e,t,i){return e.setAttribute(t,i)},Rf=function(e,t){return At(e[t])?f_:gf(e[t])&&e.setAttribute?DT:wf},h_=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},LT=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},d_=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},Cf=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},IT=function(e,t,i,r){for(var s=this._pt,a;s;)a=s._next,s.p===r&&s.modifier(e,t,i),s=a},UT=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?hl(this,t,"_pt"):t.dep||(i=1),t=r;return!i},NT=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},p_=function(e){for(var t=e._pt,i,r,s,a;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:a)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:a=t,t=i}e._pt=s},hn=(function(){function n(t,i,r,s,a,o,l,c,u){this.t=i,this.s=s,this.c=a,this.p=r,this.r=o||h_,this.d=l||this,this.set=c||wf,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=NT,this.m=i,this.mt=s,this.tween=r},n})();fn(yf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return Mf[n]=1});wn.TweenMax=wn.TweenLite=Pt;wn.TimelineLite=wn.TimelineMax=en;Mt=new en({sortChildren:!1,defaults:Ds,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});An.stringFilter=i_;var Vr=[],Po={},FT=[],Pd=0,OT=0,dc=function(e){return(Po[e]||FT).map(function(t){return t()})},Du=function(){var e=Date.now(),t=[];e-Pd>2&&(dc("matchMediaInit"),Vr.forEach(function(i){var r=i.queries,s=i.conditions,a,o,l,c;for(o in r)a=Jn.matchMedia(r[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(i.revert(),l&&t.push(i))}),dc("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),Pd=e,dc("matchMedia"))},m_=(function(){function n(t,i){this.selector=i&&Ru(i),this.data=[],this._r=[],this.isReverted=!1,this.id=OT++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){At(i)&&(s=r,r=i,i=At);var a=this,o=function(){var c=vt,u=a.selector,f;return c&&c!==a&&c.data.push(a),s&&(a.selector=Ru(s)),vt=a,f=r.apply(a,arguments),At(f)&&a._r.push(f),vt=c,a.selector=u,a.isReverted=!1,f};return a.last=o,i===At?o(a,function(l){return a.add(null,l)}):i?a[i]=o:o},e.ignore=function(i){var r=vt;vt=null,i(this),vt=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof Pt&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(i)}),l=s.data.length;l--;)c=s.data[l],c instanceof en?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Pt)&&c.revert&&c.revert(i);s._r.forEach(function(u){return u(i,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),r)for(var a=Vr.length;a--;)Vr[a].id===this.id&&Vr.splice(a,1)},e.revert=function(i){this.kill(i||{})},n})(),BT=(function(){function n(t){this.contexts=[],this.scope=t,vt&&vt.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){mi(i)||(i={matches:i});var a=new m_(0,s||this.scope),o=a.conditions={},l,c,u;vt&&!a.selector&&(a.selector=vt.selector),this.contexts.push(a),r=a.add("onMatch",r),a.queries=i;for(c in i)c==="all"?u=1:(l=Jn.matchMedia(i[c]),l&&(Vr.indexOf(a)<0&&Vr.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(Du):l.addEventListener("change",Du)));return u&&r(a,function(f){return a.add(null,f)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n})(),Yo={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return e_(r)})},timeline:function(e){return new en(e)},getTweensOf:function(e,t){return Mt.getTweensOf(e,t)},getProperty:function(e,t,i,r){Ft(e)&&(e=Bn(e)[0]);var s=Br(e||{}).get,a=i?Vm:km;return i==="native"&&(i=""),e&&(t?a((Sn[t]&&Sn[t].get||s)(e,t,i,r)):function(o,l,c){return a((Sn[o]&&Sn[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,i){if(e=Bn(e),e.length>1){var r=e.map(function(u){return pn.quickSetter(u,t,i)}),s=r.length;return function(u){for(var f=s;f--;)r[f](u)}}e=e[0]||{};var a=Sn[t],o=Br(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var f=new a;hs._pt=0,f.init(e,i?u+i:u,hs,0,[e]),f.render(1,f),hs._pt&&Cf(1,hs)}:o.set(e,l);return a?c:function(u){return c(e,l,i?u+i:u,o,1)}},quickTo:function(e,t,i){var r,s=pn.to(e,Rn((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return Mt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=kr(e.ease,Ds.ease)),Td(Ds,e||{})},config:function(e){return Td(An,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,a=e.extendTimeline;(r||"").split(",").forEach(function(o){return o&&!Sn[o]&&!wn[o]&&Ea(t+" effect requires "+o+" plugin.")}),cc[t]=function(o,l,c){return i(Bn(o),Rn(l||{},s),c)},a&&(en.prototype[t]=function(o,l,c){return this.add(cc[t](o,mi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Qe[e]=kr(t)},parseEase:function(e,t){return arguments.length?kr(e,t):Qe},getById:function(e){return Mt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new en(e),r,s;for(i.smoothChildTiming=un(e.smoothChildTiming),Mt.remove(i),i._dp=0,i._time=i._tTime=Mt._time,r=Mt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Pt&&r.vars.onComplete===r._targets[0]))&&ti(i,r,r._start-r._delay),r=s;return ti(Mt,i,0),i},context:function(e,t){return e?new m_(e,t):vt},matchMedia:function(e){return new BT(e)},matchMediaRefresh:function(){return Vr.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||Du()},addEventListener:function(e,t){var i=Po[e]||(Po[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=Po[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:_T,wrapYoyo:gT,distribute:jm,random:$m,snap:Km,normalize:mT,getUnit:Wt,clamp:fT,splitColor:t_,toArray:Bn,selector:Ru,mapRange:Jm,pipe:dT,unitize:pT,interpolate:xT,shuffle:Ym},install:Nm,effects:cc,ticker:yn,updateRoot:en.updateRoot,plugins:Sn,globalTimeline:Mt,core:{PropTween:hn,globals:Fm,Tween:Pt,Timeline:en,Animation:Ra,getCache:Br,_removeLinkedListItem:hl,reverting:function(){return zt},context:function(e){return e&&vt&&(vt.data.push(e),e._ctx=vt),vt},suppressOverwrites:function(e){return _f=e}}};fn("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return Yo[n]=Pt[n]});yn.add(en.updateRoot);hs=Yo.to({},{duration:0});var zT=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},kT=function(e,t){var i=e._targets,r,s,a;for(r in t)for(s=i.length;s--;)a=e._ptLookup[s][r],a&&(a=a.d)&&(a._pt&&(a=zT(a,r)),a&&a.modifier&&a.modifier(t[r],e,i[s],r))},pc=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,a){a._onInit=function(o){var l,c;if(Ft(s)&&(l={},fn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}kT(o,s)}}}},pn=Yo.registerPlugin({name:"attr",init:function(e,t,i,r,s){var a,o,l;this.tween=i;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],r,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var i=t._pt;i;)zt?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},pc("roundProps",Cu),pc("modifiers"),pc("snap",Km))||Yo;Pt.version=en.version=pn.version="3.14.2";Um=1;xf()&&Ns();Qe.Power0;Qe.Power1;Qe.Power2;Qe.Power3;Qe.Power4;Qe.Linear;Qe.Quad;Qe.Cubic;Qe.Quart;Qe.Quint;Qe.Strong;Qe.Elastic;Qe.Back;Qe.SteppedEase;Qe.Bounce;Qe.Sine;Qe.Expo;Qe.Circ;var Dd,nr,ys,Pf,Nr,Ld,Df,VT=function(){return typeof window<"u"},ki={},Cr=180/Math.PI,bs=Math.PI/180,ls=Math.atan2,Id=1e8,Lf=/([A-Z])/g,HT=/(left|right|width|margin|padding|x)/i,GT=/[\s,\(]\S/,ri={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Lu=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},WT=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},XT=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},qT=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},YT=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},__=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},g_=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},jT=function(e,t,i){return e.style[t]=i},KT=function(e,t,i){return e.style.setProperty(t,i)},$T=function(e,t,i){return e._gsap[t]=i},ZT=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},JT=function(e,t,i,r,s){var a=e._gsap;a.scaleX=a.scaleY=i,a.renderTransform(s,a)},QT=function(e,t,i,r,s){var a=e._gsap;a[t]=i,a.renderTransform(s,a)},yt="transform",dn=yt+"Origin",eA=function n(e,t){var i=this,r=this.target,s=r.style,a=r._gsap;if(e in ki&&s){if(this.tfm=this.tfm||{},e!=="transform")e=ri[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return i.tfm[o]=Ti(r,o)}):this.tfm[e]=a.x?a[e]:Ti(r,e),e===dn&&(this.tfm.zOrigin=a.zOrigin);else return ri.transform.split(",").forEach(function(o){return n.call(i,o,t)});if(this.props.indexOf(yt)>=0)return;a.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(dn,t,"")),e=yt}(s||t)&&this.props.push(e,t,s[e])},x_=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},tA=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Lf,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Df(),(!s||!s.isStart)&&!i[yt]&&(x_(i),r.zOrigin&&i[dn]&&(i[dn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},v_=function(e,t){var i={target:e,props:[],revert:tA,save:eA};return e._gsap||pn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},S_,Iu=function(e,t){var i=nr.createElementNS?nr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):nr.createElement(e);return i&&i.style?i:nr.createElement(e)},Tn=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Lf,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,Fs(t)||t,1)||""},Ud="O,Moz,ms,Ms,Webkit".split(","),Fs=function(e,t,i){var r=t||Nr,s=r.style,a=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Ud[a]+e in s););return a<0?null:(a===3?"ms":a>=0?Ud[a]:"")+e},Uu=function(){VT()&&window.document&&(Dd=window,nr=Dd.document,ys=nr.documentElement,Nr=Iu("div")||{style:{}},Iu("div"),yt=Fs(yt),dn=yt+"Origin",Nr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",S_=!!Fs("perspective"),Df=pn.core.reverting,Pf=1)},Nd=function(e){var t=e.ownerSVGElement,i=Iu("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),ys.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),ys.removeChild(i),s},Fd=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},M_=function(e){var t,i;try{t=e.getBBox()}catch{t=Nd(e),i=1}return t&&(t.width||t.height)||i||(t=Nd(e)),t&&!t.width&&!t.x&&!t.y?{x:+Fd(e,["x","cx","x1"])||0,y:+Fd(e,["y","cy","y1"])||0,width:0,height:0}:t},y_=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&M_(e))},fr=function(e,t){if(t){var i=e.style,r;t in ki&&t!==dn&&(t=yt),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(Lf,"-$1").toLowerCase())):i.removeAttribute(t)}},ir=function(e,t,i,r,s,a){var o=new hn(e._pt,t,i,0,1,a?g_:__);return e._pt=o,o.b=r,o.e=s,e._props.push(i),o},Od={deg:1,rad:1,turn:1},nA={grid:1,flex:1},hr=function n(e,t,i,r){var s=parseFloat(i)||0,a=(i+"").trim().substr((s+"").length)||"px",o=Nr.style,l=HT.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=r==="px",d=r==="%",g,_,m,p;if(r===a||!s||Od[r]||Od[a])return s;if(a!=="px"&&!h&&(s=n(e,t,i,"px")),p=e.getCTM&&y_(e),(d||a==="%")&&(ki[t]||~t.indexOf("adius")))return g=p?e.getBBox()[l?"width":"height"]:e[u],Rt(d?s/g*f:s/100*g);if(o[l?"width":"height"]=f+(h?a:r),_=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===nr||!_.appendChild)&&(_=nr.body),m=_._gsap,m&&d&&m.width&&l&&m.time===yn.time&&!m.uncache)return Rt(s/m.width*f);if(d&&(t==="height"||t==="width")){var M=e.style[t];e.style[t]=f+r,g=e[u],M?e.style[t]=M:fr(e,t)}else(d||a==="%")&&!nA[Tn(_,"display")]&&(o.position=Tn(e,"position")),_===e&&(o.position="static"),_.appendChild(Nr),g=Nr[u],_.removeChild(Nr),o.position="absolute";return l&&d&&(m=Br(_),m.time=yn.time,m.width=_[u]),Rt(h?g*s/f:g&&s?f/g*s:0)},Ti=function(e,t,i,r){var s;return Pf||Uu(),t in ri&&t!=="transform"&&(t=ri[t],~t.indexOf(",")&&(t=t.split(",")[0])),ki[t]&&t!=="transform"?(s=Pa(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Ko(Tn(e,dn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=jo[t]&&jo[t](e,t,i)||Tn(e,t)||Bm(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?hr(e,t,s,i)+i:s},iA=function(e,t,i,r){if(!i||i==="none"){var s=Fs(t,e,1),a=s&&Tn(e,s,1);a&&a!==i?(t=s,i=a):t==="borderColor"&&(i=Tn(e,"borderTopColor"))}var o=new hn(this._pt,e.style,t,0,1,d_),l=0,c=0,u,f,h,d,g,_,m,p,M,E,S,y;if(o.b=i,o.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=Tn(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(_=e.style[t],e.style[t]=r,r=Tn(e,t)||r,_?e.style[t]=_:fr(e,t)),u=[i,r],i_(u),i=u[0],r=u[1],h=i.match(fs)||[],y=r.match(fs)||[],y.length){for(;f=fs.exec(r);)m=f[0],M=r.substring(l,f.index),g?g=(g+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(g=1),m!==(_=h[c++]||"")&&(d=parseFloat(_)||0,S=_.substr((d+"").length),m.charAt(1)==="="&&(m=Ms(d,m)+S),p=parseFloat(m),E=m.substr((p+"").length),l=fs.lastIndex-E.length,E||(E=E||An.units[t]||S,l===r.length&&(r+=E,o.e+=E)),S!==E&&(d=hr(e,t,_,E)||0),o._pt={_next:o._pt,p:M||c===1?M:",",s:d,c:p-d,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=l<r.length?r.substring(l,r.length):""}else o.r=t==="display"&&r==="none"?g_:__;return Im.test(r)&&(o.e=0),this._pt=o,o},Bd={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},rA=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=Bd[i]||i,t[1]=Bd[r]||r,t.join(" ")},sA=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,a=i._gsap,o,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],ki[o]&&(l=1,o=o==="transformOrigin"?dn:yt),fr(i,o);l&&(fr(i,yt),a&&(a.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Pa(i,1),a.uncache=1,x_(r)))}},jo={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var a=e._pt=new hn(e._pt,t,i,0,0,sA);return a.u=r,a.pr=-10,a.tween=s,e._props.push(i),1}}},Ca=[1,0,0,1,0,0],b_={},E_=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},zd=function(e){var t=Tn(e,yt);return E_(t)?Ca:t.substr(7).match(Lm).map(Rt)},If=function(e,t){var i=e._gsap||Br(e),r=e.style,s=zd(e),a,o,l,c;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ca:s):(s===Ca&&!e.offsetParent&&e!==ys&&!i.svg&&(l=r.display,r.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,ys.appendChild(e)),s=zd(e),l?r.display=l:fr(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):ys.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Nu=function(e,t,i,r,s,a){var o=e._gsap,l=s||If(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,f=o.xOffset||0,h=o.yOffset||0,d=l[0],g=l[1],_=l[2],m=l[3],p=l[4],M=l[5],E=t.split(" "),S=parseFloat(E[0])||0,y=parseFloat(E[1])||0,w,R,L,v;i?l!==Ca&&(R=d*m-g*_)&&(L=S*(m/R)+y*(-_/R)+(_*M-m*p)/R,v=S*(-g/R)+y*(d/R)-(d*M-g*p)/R,S=L,y=v):(w=M_(e),S=w.x+(~E[0].indexOf("%")?S/100*w.width:S),y=w.y+(~(E[1]||E[0]).indexOf("%")?y/100*w.height:y)),r||r!==!1&&o.smooth?(p=S-c,M=y-u,o.xOffset=f+(p*d+M*_)-p,o.yOffset=h+(p*g+M*m)-M):o.xOffset=o.yOffset=0,o.xOrigin=S,o.yOrigin=y,o.smooth=!!r,o.origin=t,o.originIsAbsolute=!!i,e.style[dn]="0px 0px",a&&(ir(a,o,"xOrigin",c,S),ir(a,o,"yOrigin",u,y),ir(a,o,"xOffset",f,o.xOffset),ir(a,o,"yOffset",h,o.yOffset)),e.setAttribute("data-svg-origin",S+" "+y)},Pa=function(e,t){var i=e._gsap||new o_(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=Tn(e,dn)||"0",u,f,h,d,g,_,m,p,M,E,S,y,w,R,L,v,A,I,z,B,Z,j,k,F,Y,pe,de,se,te,De,Oe,He;return u=f=h=_=m=p=M=E=S=0,d=g=1,i.svg=!!(e.getCTM&&y_(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[yt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[yt]!=="none"?l[yt]:"")),r.scale=r.rotate=r.translate="none"),R=If(e,i.svg),i.svg&&(i.uncache?(Y=e.getBBox(),c=i.xOrigin-Y.x+"px "+(i.yOrigin-Y.y)+"px",F=""):F=!t&&e.getAttribute("data-svg-origin"),Nu(e,F||c,!!F||i.originIsAbsolute,i.smooth!==!1,R)),y=i.xOrigin||0,w=i.yOrigin||0,R!==Ca&&(I=R[0],z=R[1],B=R[2],Z=R[3],u=j=R[4],f=k=R[5],R.length===6?(d=Math.sqrt(I*I+z*z),g=Math.sqrt(Z*Z+B*B),_=I||z?ls(z,I)*Cr:0,M=B||Z?ls(B,Z)*Cr+_:0,M&&(g*=Math.abs(Math.cos(M*bs))),i.svg&&(u-=y-(y*I+w*B),f-=w-(y*z+w*Z))):(He=R[6],De=R[7],de=R[8],se=R[9],te=R[10],Oe=R[11],u=R[12],f=R[13],h=R[14],L=ls(He,te),m=L*Cr,L&&(v=Math.cos(-L),A=Math.sin(-L),F=j*v+de*A,Y=k*v+se*A,pe=He*v+te*A,de=j*-A+de*v,se=k*-A+se*v,te=He*-A+te*v,Oe=De*-A+Oe*v,j=F,k=Y,He=pe),L=ls(-B,te),p=L*Cr,L&&(v=Math.cos(-L),A=Math.sin(-L),F=I*v-de*A,Y=z*v-se*A,pe=B*v-te*A,Oe=Z*A+Oe*v,I=F,z=Y,B=pe),L=ls(z,I),_=L*Cr,L&&(v=Math.cos(L),A=Math.sin(L),F=I*v+z*A,Y=j*v+k*A,z=z*v-I*A,k=k*v-j*A,I=F,j=Y),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),d=Rt(Math.sqrt(I*I+z*z+B*B)),g=Rt(Math.sqrt(k*k+He*He)),L=ls(j,k),M=Math.abs(L)>2e-4?L*Cr:0,S=Oe?1/(Oe<0?-Oe:Oe):0),i.svg&&(F=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!E_(Tn(e,yt)),F&&e.setAttribute("transform",F))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(d*=-1,M+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,M+=M<=0?180:-180)),t=t||i.uncache,i.x=u-((i.xPercent=u&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+a,i.y=f-((i.yPercent=f&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+a,i.z=h+a,i.scaleX=Rt(d),i.scaleY=Rt(g),i.rotation=Rt(_)+o,i.rotationX=Rt(m)+o,i.rotationY=Rt(p)+o,i.skewX=M+o,i.skewY=E+o,i.transformPerspective=S+a,(i.zOrigin=parseFloat(c.split(" ")[2])||!t&&i.zOrigin||0)&&(r[dn]=Ko(c)),i.xOffset=i.yOffset=0,i.force3D=An.force3D,i.renderTransform=i.svg?oA:S_?T_:aA,i.uncache=0,i},Ko=function(e){return(e=e.split(" "))[0]+" "+e[1]},mc=function(e,t,i){var r=Wt(t);return Rt(parseFloat(t)+parseFloat(hr(e,"x",i+"px",r)))+r},aA=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,T_(e,t)},Tr="0deg",$s="0px",Ar=") ",T_=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,a=i.x,o=i.y,l=i.z,c=i.rotation,u=i.rotationY,f=i.rotationX,h=i.skewX,d=i.skewY,g=i.scaleX,_=i.scaleY,m=i.transformPerspective,p=i.force3D,M=i.target,E=i.zOrigin,S="",y=p==="auto"&&e&&e!==1||p===!0;if(E&&(f!==Tr||u!==Tr)){var w=parseFloat(u)*bs,R=Math.sin(w),L=Math.cos(w),v;w=parseFloat(f)*bs,v=Math.cos(w),a=mc(M,a,R*v*-E),o=mc(M,o,-Math.sin(w)*-E),l=mc(M,l,L*v*-E+E)}m!==$s&&(S+="perspective("+m+Ar),(r||s)&&(S+="translate("+r+"%, "+s+"%) "),(y||a!==$s||o!==$s||l!==$s)&&(S+=l!==$s||y?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Ar),c!==Tr&&(S+="rotate("+c+Ar),u!==Tr&&(S+="rotateY("+u+Ar),f!==Tr&&(S+="rotateX("+f+Ar),(h!==Tr||d!==Tr)&&(S+="skew("+h+", "+d+Ar),(g!==1||_!==1)&&(S+="scale("+g+", "+_+Ar),M.style[yt]=S||"translate(0, 0)"},oA=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,a=i.x,o=i.y,l=i.rotation,c=i.skewX,u=i.skewY,f=i.scaleX,h=i.scaleY,d=i.target,g=i.xOrigin,_=i.yOrigin,m=i.xOffset,p=i.yOffset,M=i.forceCSS,E=parseFloat(a),S=parseFloat(o),y,w,R,L,v;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=bs,c*=bs,y=Math.cos(l)*f,w=Math.sin(l)*f,R=Math.sin(l-c)*-h,L=Math.cos(l-c)*h,c&&(u*=bs,v=Math.tan(c-u),v=Math.sqrt(1+v*v),R*=v,L*=v,u&&(v=Math.tan(u),v=Math.sqrt(1+v*v),y*=v,w*=v)),y=Rt(y),w=Rt(w),R=Rt(R),L=Rt(L)):(y=f,L=h,w=R=0),(E&&!~(a+"").indexOf("px")||S&&!~(o+"").indexOf("px"))&&(E=hr(d,"x",a,"px"),S=hr(d,"y",o,"px")),(g||_||m||p)&&(E=Rt(E+g-(g*y+_*R)+m),S=Rt(S+_-(g*w+_*L)+p)),(r||s)&&(v=d.getBBox(),E=Rt(E+r/100*v.width),S=Rt(S+s/100*v.height)),v="matrix("+y+","+w+","+R+","+L+","+E+","+S+")",d.setAttribute("transform",v),M&&(d.style[yt]=v)},lA=function(e,t,i,r,s){var a=360,o=Ft(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Cr:1),c=l-r,u=r+c+"deg",f,h;return o&&(f=s.split("_")[1],f==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),f==="cw"&&c<0?c=(c+a*Id)%a-~~(c/a)*a:f==="ccw"&&c>0&&(c=(c-a*Id)%a-~~(c/a)*a)),e._pt=h=new hn(e._pt,t,i,r,c,WT),h.e=u,h.u="deg",e._props.push(i),h},kd=function(e,t){for(var i in t)e[i]=t[i];return e},cA=function(e,t,i){var r=kd({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=i.style,o,l,c,u,f,h,d,g;r.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),a[yt]=t,o=Pa(i,1),fr(i,yt),i.setAttribute("transform",c)):(c=getComputedStyle(i)[yt],a[yt]=t,o=Pa(i,1),a[yt]=c);for(l in ki)c=r[l],u=o[l],c!==u&&s.indexOf(l)<0&&(d=Wt(c),g=Wt(u),f=d!==g?hr(i,l,c,g):parseFloat(c),h=parseFloat(u),e._pt=new hn(e._pt,o,l,f,h-f,Lu),e._pt.u=g||0,e._props.push(l));kd(o,r)};fn("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",a=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(o){return e<2?n+o:"border"+o+n});jo[e>1?"border"+n:n]=function(o,l,c,u,f){var h,d;if(arguments.length<4)return h=a.map(function(g){return Ti(o,g,c)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(u+"").split(" "),d={},a.forEach(function(g,_){return d[g]=h[_]=h[_]||h[(_-1)/2|0]}),o.init(l,d,f)}});var A_={name:"css",register:Uu,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var a=this._props,o=e.style,l=i.vars.startAt,c,u,f,h,d,g,_,m,p,M,E,S,y,w,R,L,v;Pf||Uu(),this.styles=this.styles||v_(e),L=this.styles.props,this.tween=i;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(Sn[_]&&l_(_,t,i,r,e,s)))){if(d=typeof u,g=jo[_],d==="function"&&(u=u.call(i,r,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=Aa(u)),g)g(this,e,_,u,i)&&(R=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",ar.lastIndex=0,ar.test(c)||(m=Wt(c),p=Wt(u),p?m!==p&&(c=hr(e,_,c,p)+p):m&&(u+=m)),this.add(o,"setProperty",c,u,r,s,0,0,_),a.push(_),L.push(_,0,o[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(i,r,e,s):l[_],Ft(c)&&~c.indexOf("random(")&&(c=Aa(c)),Wt(c+"")||c==="auto"||(c+=An.units[_]||Wt(Ti(e,_))||""),(c+"").charAt(1)==="="&&(c=Ti(e,_))):c=Ti(e,_),h=parseFloat(c),M=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),M&&(u=u.substr(2)),f=parseFloat(u),_ in ri&&(_==="autoAlpha"&&(h===1&&Ti(e,"visibility")==="hidden"&&f&&(h=0),L.push("visibility",0,o.visibility),ir(this,o,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=ri[_],~_.indexOf(",")&&(_=_.split(",")[0]))),E=_ in ki,E){if(this.styles.save(_),v=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=Tn(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var A=e.style.perspective;e.style.perspective=u,u=Tn(e,"perspective"),A?e.style.perspective=A:fr(e,"perspective")}f=parseFloat(u)}if(S||(y=e._gsap,y.renderTransform&&!t.parseTransform||Pa(e,t.parseTransform),w=t.smoothOrigin!==!1&&y.smooth,S=this._pt=new hn(this._pt,o,yt,0,1,y.renderTransform,y,0,-1),S.dep=1),_==="scale")this._pt=new hn(this._pt,y,"scaleY",y.scaleY,(M?Ms(y.scaleY,M+f):f)-y.scaleY||0,Lu),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){L.push(dn,0,o[dn]),u=rA(u),y.svg?Nu(e,u,0,w,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==y.zOrigin&&ir(this,y,"zOrigin",y.zOrigin,p),ir(this,o,_,Ko(c),Ko(u)));continue}else if(_==="svgOrigin"){Nu(e,u,1,w,0,this);continue}else if(_ in b_){lA(this,y,_,h,M?Ms(h,M+u):u);continue}else if(_==="smoothOrigin"){ir(this,y,"smooth",y.smooth,u);continue}else if(_==="force3D"){y[_]=u;continue}else if(_==="transform"){cA(this,u,e);continue}}else _ in o||(_=Fs(_)||_);if(E||(f||f===0)&&(h||h===0)&&!GT.test(u)&&_ in o)m=(c+"").substr((h+"").length),f||(f=0),p=Wt(u)||(_ in An.units?An.units[_]:m),m!==p&&(h=hr(e,_,c,p)),this._pt=new hn(this._pt,E?y:o,_,h,(M?Ms(h,M+f):f)-h,!E&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?YT:Lu),this._pt.u=p||0,E&&v!==u?(this._pt.b=c,this._pt.e=v,this._pt.r=qT):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=XT);else if(_ in o)iA.call(this,e,_,c,M?M+u:u);else if(_ in e)this.add(e,_,c||e[_],M?M+u:u,r,s);else if(_!=="parseTransform"){Sf(_,u);continue}E||(_ in o?L.push(_,0,o[_]):typeof e[_]=="function"?L.push(_,2,e[_]()):L.push(_,1,c||e[_])),a.push(_)}}R&&p_(this)},render:function(e,t){if(t.tween._time||!Df())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Ti,aliases:ri,getSetter:function(e,t,i){var r=ri[t];return r&&r.indexOf(",")<0&&(t=r),t in ki&&t!==dn&&(e._gsap.x||Ti(e,"x"))?i&&Ld===i?t==="scale"?ZT:$T:(Ld=i||{})&&(t==="scale"?JT:QT):e.style&&!gf(e.style[t])?jT:~t.indexOf("-")?KT:Rf(e,t)},core:{_removeProperty:fr,_getMatrix:If}};pn.utils.checkPrefix=Fs;pn.core.getStyleSaver=v_;(function(n,e,t,i){var r=fn(n+","+e+","+t,function(s){ki[s]=1});fn(e,function(s){An.units[s]="deg",b_[s]=1}),ri[r[13]]=n+","+e,fn(i,function(s){var a=s.split(":");ri[a[1]]=r[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");fn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){An.units[n]="px"});pn.registerPlugin(A_);var Do=pn.registerPlugin(A_)||pn;Do.core.Tween;class Ba{constructor(e=0,t="Network Error"){this.status=e,this.text=t}}const uA=()=>{if(!(typeof localStorage>"u"))return{get:n=>Promise.resolve(localStorage.getItem(n)),set:(n,e)=>Promise.resolve(localStorage.setItem(n,e)),remove:n=>Promise.resolve(localStorage.removeItem(n))}},Ot={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:uA()},Uf=n=>n?typeof n=="string"?{publicKey:n}:n.toString()==="[object Object]"?n:{}:{},fA=(n,e="https://api.emailjs.com")=>{if(!n)return;const t=Uf(n);Ot.publicKey=t.publicKey,Ot.blockHeadless=t.blockHeadless,Ot.storageProvider=t.storageProvider,Ot.blockList=t.blockList,Ot.limitRate=t.limitRate,Ot.origin=t.origin||e},w_=async(n,e,t={})=>{const i=await fetch(Ot.origin+n,{method:"POST",headers:t,body:e}),r=await i.text(),s=new Ba(i.status,r);if(i.ok)return s;throw s},R_=(n,e,t)=>{if(!n||typeof n!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!e||typeof e!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!t||typeof t!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},hA=n=>{if(n&&n.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},C_=n=>n.webdriver||!n.languages||n.languages.length===0,P_=()=>new Ba(451,"Unavailable For Headless Browser"),dA=(n,e)=>{if(!Array.isArray(n))throw"The BlockList list has to be an array";if(typeof e!="string")throw"The BlockList watchVariable has to be a string"},pA=n=>!n.list?.length||!n.watchVariable,mA=(n,e)=>n instanceof FormData?n.get(e):n[e],D_=(n,e)=>{if(pA(n))return!1;dA(n.list,n.watchVariable);const t=mA(e,n.watchVariable);return typeof t!="string"?!1:n.list.includes(t)},L_=()=>new Ba(403,"Forbidden"),_A=(n,e)=>{if(typeof n!="number"||n<0)throw"The LimitRate throttle has to be a positive number";if(e&&typeof e!="string")throw"The LimitRate ID has to be a non-empty string"},gA=async(n,e,t)=>{const i=Number(await t.get(n)||0);return e-Date.now()+i},I_=async(n,e,t)=>{if(!e.throttle||!t)return!1;_A(e.throttle,e.id);const i=e.id||n;return await gA(i,e.throttle,t)>0?!0:(await t.set(i,Date.now().toString()),!1)},U_=()=>new Ba(429,"Too Many Requests"),xA=async(n,e,t,i)=>{const r=Uf(i),s=r.publicKey||Ot.publicKey,a=r.blockHeadless||Ot.blockHeadless,o=r.storageProvider||Ot.storageProvider,l={...Ot.blockList,...r.blockList},c={...Ot.limitRate,...r.limitRate};return a&&C_(navigator)?Promise.reject(P_()):(R_(s,n,e),hA(t),t&&D_(l,t)?Promise.reject(L_()):await I_(location.pathname,c,o)?Promise.reject(U_()):w_("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:s,service_id:n,template_id:e,template_params:t}),{"Content-type":"application/json"}))},vA=n=>{if(!n||n.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},SA=n=>typeof n=="string"?document.querySelector(n):n,MA=async(n,e,t,i)=>{const r=Uf(i),s=r.publicKey||Ot.publicKey,a=r.blockHeadless||Ot.blockHeadless,o=Ot.storageProvider||r.storageProvider,l={...Ot.blockList,...r.blockList},c={...Ot.limitRate,...r.limitRate};if(a&&C_(navigator))return Promise.reject(P_());const u=SA(t);R_(s,n,e),vA(u);const f=new FormData(u);return D_(l,f)?Promise.reject(L_()):await I_(location.pathname,c,o)?Promise.reject(U_()):(f.append("lib_version","4.4.1"),f.append("service_id",n),f.append("template_id",e),f.append("user_id",s),w_("/api/v1.0/email/send-form",f))},yA={init:fA,send:xA,sendForm:MA,EmailJSResponseStatus:Ba},bA={class:"flex flex-col items-center justify-center min-h-screen font-sans overflow-hidden p-4"},EA={key:0,id:"intro-panel",class:"relative p-10 rounded-[3rem] text-center max-w-md w-full backdrop-blur-xl bg-white/40 border border-white/50 shadow-2xl shadow-purple-500/10"},TA={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"3",stroke:"currentColor",class:"w-6 h-6 text-gray-400"},AA={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"3",stroke:"currentColor",class:"w-8 h-8 animate-bounce-short"},wA={key:1,class:"absolute bottom-12 w-full px-4 animate-fade-up flex justify-center"},RA={class:"bg-white/60 p-8 rounded-3xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] backdrop-blur-xl text-center border border-white/40 max-w-md w-full"},CA={class:"flex gap-3 justify-center"},PA={key:2,class:"absolute top-16 text-center animate-fade-in px-4 pointer-events-none"},DA={class:"text-8xl font-black mb-6 drop-shadow-xl bg-gradient-to-br from-purple-600 to-pink-500 bg-clip-text text-transparent scale-110"},LA={class:"bg-white/70 px-8 py-4 rounded-2xl shadow-xl backdrop-blur-xl border border-white/40 inline-block"},IA={class:"font-bold text-xl text-gray-800"},UA={key:3,class:"absolute inset-0 flex items-center justify-center p-4 animate-fade-in bg-white/20 backdrop-blur-sm z-50"},NA={class:"bg-white/80 p-10 rounded-[3rem] shadow-2xl backdrop-blur-xl border border-white/60 max-w-md w-full text-center"},FA={class:"space-y-4 mb-8"},OA={class:"relative"},BA=["value"],zA=["disabled"],kA={key:0},VA={key:1},HA={key:4,class:"absolute inset-0 flex items-center justify-center p-4 animate-fade-in bg-white/30 backdrop-blur-md z-50"},GA={class:"text-center p-12 rounded-[3rem] bg-white/90 shadow-2xl"},Vd=12,po=3,mo=4,_o=.05,WA={__name:"App",setup(n){const e=kt("intro"),t=kt(""),i=kt(0),r=kt(""),s=kt(""),a=kt(""),o=kt(!1),l=["January","February","March","April","May","June","July","August","September","October","November","December"],c=kt(null),u=kt(null),f=kt(!1),h=kt(0),d=kt(0),g=kt(0),_=kt(0),m=kt(!1),p=kt(null);let M,E,S,y,w=[];bp(()=>{B(),Z(),pe(),window.addEventListener("resize",de),c.value&&u.value&&(g.value=c.value.clientWidth,_.value=g.value-u.value.clientWidth-8),document.addEventListener("mousemove",A),document.addEventListener("mouseup",I),document.addEventListener("touchmove",A,{passive:!1}),document.addEventListener("touchend",I)}),$u(()=>{window.removeEventListener("resize",de),document.removeEventListener("mousemove",A),document.removeEventListener("mouseup",I),document.removeEventListener("touchmove",A),document.removeEventListener("touchend",I)});const R=Ac(()=>({transform:`translateX(${d.value}px)`,transition:f.value?"none":"transform 0.3s ease-out"})),L=Ac(()=>({width:`${d.value+50}px`,transition:f.value?"none":"width 0.3s ease-out",opacity:d.value>0?1:0}));function v(se){if(m.value)return;f.value=!0;const te=se.type.includes("touch")?se.touches[0].clientX:se.clientX;h.value=te-d.value}function A(se){if(!f.value||m.value)return;se.preventDefault();const De=(se.type.includes("touch")?se.touches[0].clientX:se.clientX)-h.value;d.value=Math.max(0,Math.min(De,_.value)),d.value>=_.value*.95&&z()}function I(){!f.value||m.value||(f.value=!1,d.value<_.value*.95&&(d.value=0))}function z(){m.value=!0,f.value=!1,d.value=_.value,navigator.vibrate&&navigator.vibrate(50),setTimeout(j,300)}function B(){M=new Sv,M.background=new Je("#FFF0E5"),E=new Nn(50,window.innerWidth/window.innerHeight,.1,100),E.position.set(0,6,7),E.lookAt(0,0,0),S=new DE({alpha:!0,antialias:!0}),S.setSize(window.innerWidth,window.innerHeight),S.shadowMap.enabled=!0,S.shadowMap.type=qp,S.physicallyCorrectLights=!0,S.toneMapping=tf,S.toneMappingExposure=1.2,p.value&&p.value.appendChild(S.domElement),y=new IE(E,S.domElement),y.enableZoom=!1,y.enablePan=!1,y.autoRotate=!0,y.autoRotateSpeed=.5;const se=new Iv(16777215,.5);M.add(se);const te=new Kh(16777215,4);te.position.set(5,8,5),te.castShadow=!0,te.shadow.mapSize.width=2048,te.shadow.mapSize.height=2048,te.shadow.bias=-1e-4,M.add(te);const De=new Kh(16772829,2);De.position.set(-5,3,-5),M.add(De)}function Z(){const se=new Os(.92,.25,.92),te=new Rv({color:4073251,roughness:.35,metalness:0,clearcoat:1,clearcoatRoughness:.15,reflectivity:.5,ior:1.45}),De=(mo-1)*(1+_o)/2,Oe=(po-1)*(1+_o)/2;for(let He=0;He<po;He++)for(let Q=0;Q<mo;Q++){const re=new di(se,te);re.position.set(Q*(1+_o)-De,0,He*(1+_o)-Oe),re.castShadow=!0,re.receiveShadow=!0,re.userData={gridX:Q,gridZ:He},M.add(re),w.push(re)}}function j(){y.autoRotate=!1,Do.to(E.position,{x:0,y:8,z:6,duration:1.5,ease:"power2.inOut"});const se=document.getElementById("intro-panel");Do.to(se,{opacity:0,y:-50,scale:.9,duration:.5,onComplete:()=>e.value="question"})}function k(){if(!t.value)return;e.value="demonstration";const se=Vd-1;parseInt(t.value)===se?r.value="Exactly right! Watch the logic...":r.value=`Nice try! For 12 squares, you need ${se} breaks.`,setTimeout(F,300)}function F(){const se=Do.timeline({defaults:{ease:"back.out(1.7)",duration:.6},onComplete:()=>{setTimeout(()=>{e.value="birthday"},2e3)}});se.to({},{onStart:()=>i.value=1},"+=0.5");const te=w.filter(Oe=>Oe.userData.gridZ>0);se.to(te.map(Oe=>Oe.position),{z:"+=0.45",y:"+=0.05",rotationX:"-=0.1"}),se.to({},{onStart:()=>i.value=2},"+=0.1");const De=w.filter(Oe=>Oe.userData.gridZ>1);se.to(De.map(Oe=>Oe.position),{z:"+=0.45",y:"+=0.05",rotationX:"-=0.1"});for(let Oe=0;Oe<mo-1;Oe++)for(let He=0;He<po;He++){se.to({},{onStart:()=>i.value++},">-0.1");const Q=w.filter(re=>re.userData.gridZ===He&&re.userData.gridX>Oe);if(Q.length){const re=(Math.random()-.5)*.3;se.to(Q.map(Te=>Te.position),{x:"+=0.35",y:"+=0.02"},"<"),se.to(Q.map(Te=>Te.rotation),{z:re,y:re},"<")}}se.to(w.map(Oe=>Oe.rotation),{y:Math.PI*2,x:0,z:0,duration:2,ease:"elastic.out(1, 0.3)",stagger:{each:.05,from:"center"}},"+=0.5")}function Y(){if(!s.value||!a.value){alert("Please enter both day and month!");return}o.value=!0;const se={to_name:"Developer",from_name:"Elenor",message:`Elenor's Birthday is: ${s.value} of ${a.value}`,reply_to:"noreply@game.com"};yA.send("service_rfemzas","template_j8w9l5c",se,"vYGev7OaoJPuOPmHh").then(te=>{console.log("SUCCESS!",te.status,te.text),o.value=!1,e.value="final"},te=>{console.log("FAILED...",te),o.value=!1,alert("Something went wrong sending the data. Check console.")})}function pe(){requestAnimationFrame(pe),y.update(),S.render(M,E)}function de(){E.aspect=window.innerWidth/window.innerHeight,E.updateProjectionMatrix(),S.setSize(window.innerWidth,window.innerHeight)}return(se,te)=>(Dn(),kn(Un,null,[ke("div",{ref_key:"canvasRef",ref:p,class:"fixed inset-0 -z-10 bg-gradient-to-br from-orange-50 via-white to-purple-50"},null,512),ke("main",bA,[e.value==="intro"?(Dn(),kn("div",EA,[te[7]||(te[7]=ke("h1",{class:"text-5xl font-extrabold mb-6 leading-tight tracking-tight drop-shadow-sm"},[ke("span",{class:"bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent"}," Why are you visiting again, Elenor? ")],-1)),te[8]||(te[8]=ke("p",{class:"mb-10 text-xl font-medium text-gray-700"},"Let's play another game.",-1)),ke("div",{class:"relative w-full h-16 rounded-full bg-gray-200/50 backdrop-blur-md border border-white/60 shadow-inner overflow-hidden p-1",ref_key:"sliderTrack",ref:c},[ke("div",{class:"absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-400 to-purple-500 opacity-50",style:da(L.value)},null,4),ke("div",{class:pa(["absolute inset-0 flex items-center justify-center pointer-events-none",{"opacity-0":m.value}])},[...te[4]||(te[4]=[ke("span",{class:"text-xl font-bold text-gray-500/60 animate-shimmer bg-clip-text text-transparent bg-gradient-to-r from-gray-400 via-white to-gray-400 bg-[length:200%_auto]"}," slide to play ",-1)])],2),ke("div",{ref_key:"sliderKnob",ref:u,class:pa(["relative z-10 h-full aspect-square bg-white rounded-full shadow-md flex items-center justify-center cursor-grab active:cursor-grabbing transition-transform",{"bg-gradient-to-br from-cyan-300 to-purple-400 text-white":m.value}]),style:da(R.value),onMousedown:v,onTouchstartPassive:v},[m.value?(Dn(),kn("svg",AA,[...te[6]||(te[6]=[ke("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 12.75l6 6 9-13.5"},null,-1)])])):(Dn(),kn("svg",TA,[...te[5]||(te[5]=[ke("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8.25 4.5l7.5 7.5-7.5 7.5"},null,-1)])]))],38)],512)])):Hs("",!0),e.value==="question"?(Dn(),kn("div",wA,[ke("div",RA,[te[15]||(te[15]=ke("h2",{class:"text-2xl font-extrabold mb-4 text-gray-800"},"Chocolate Logic",-1)),ke("p",{class:"mb-8 text-lg font-medium text-gray-700 leading-relaxed"},[te[9]||(te[9]=Js(" You have a ",-1)),ke("span",{class:"font-bold text-purple-700"},wr(po)+"x"+wr(mo)+" chocolate bar"),Js(" ("+wr(Vd)+" squares). "),te[10]||(te[10]=ke("br",null,null,-1)),te[11]||(te[11]=ke("br",null,null,-1)),te[12]||(te[12]=Js(" What is the ",-1)),te[13]||(te[13]=ke("span",{class:"border-b-2 border-pink-400"},"minimum number of breaks",-1)),te[14]||(te[14]=Js(" required to separate every single square? ",-1))]),ke("div",CA,[bl(ke("input",{"onUpdate:modelValue":te[0]||(te[0]=De=>t.value=De),type:"number",placeholder:"?",class:"w-24 text-center text-3xl font-bold border-2 border-purple-200 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition-all bg-white/80 text-purple-900",onKeyup:ux(k,["enter"])},null,544),[[vh,t.value]]),ke("button",{onClick:k,class:"bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 rounded-xl font-bold text-lg hover:shadow-lg hover:scale-105 transition-all active:scale-95"},"Check")])])])):Hs("",!0),e.value==="demonstration"?(Dn(),kn("div",PA,[ke("h2",DA,wr(i.value),1),ke("div",LA,[ke("p",IA,wr(r.value),1)])])):Hs("",!0),e.value==="birthday"?(Dn(),kn("div",UA,[ke("div",NA,[te[18]||(te[18]=ke("h2",{class:"text-4xl font-extrabold mb-2 bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent"}," One Last Thing... ",-1)),te[19]||(te[19]=ke("p",{class:"text-gray-600 mb-8 font-medium"},"When should we celebrate your birthday?",-1)),ke("div",FA,[ke("div",OA,[bl(ke("select",{"onUpdate:modelValue":te[1]||(te[1]=De=>a.value=De),class:"w-full appearance-none bg-white border-2 border-pink-100 px-6 py-4 rounded-2xl text-lg font-bold text-gray-700 focus:outline-none focus:border-pink-400 focus:ring-4 focus:ring-pink-400/20 transition-all cursor-pointer"},[te[16]||(te[16]=ke("option",{value:"",disabled:"",selected:""},"Select Month",-1)),(Dn(),kn(Un,null,e0(l,De=>ke("option",{key:De,value:De},wr(De),9,BA)),64))],512),[[lx,a.value]]),te[17]||(te[17]=ke("div",{class:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-pink-400"},[ke("svg",{class:"fill-current h-6 w-6",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},[ke("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})])],-1))]),bl(ke("input",{"onUpdate:modelValue":te[2]||(te[2]=De=>s.value=De),type:"number",min:"1",max:"31",placeholder:"Day (1-31)",class:"w-full bg-white border-2 border-pink-100 px-6 py-4 rounded-2xl text-lg font-bold text-gray-700 focus:outline-none focus:border-pink-400 focus:ring-4 focus:ring-pink-400/20 transition-all"},null,512),[[vh,s.value]])]),ke("button",{onClick:Y,disabled:o.value,class:"w-full bg-gradient-to-r from-pink-500 to-orange-400 text-white py-4 rounded-2xl font-bold text-xl hover:shadow-xl hover:scale-[1.02] transition-all active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"},[o.value?(Dn(),kn("span",VA,"Sending...")):(Dn(),kn("span",kA,"Send ✨"))],8,zA)])])):Hs("",!0),e.value==="final"?(Dn(),kn("div",HA,[ke("div",GA,[te[20]||(te[20]=ke("div",{class:"text-6xl mb-6"},"💌",-1)),te[21]||(te[21]=ke("h2",{class:"text-4xl font-extrabold mb-4 text-gray-800"},"Received!",-1)),te[22]||(te[22]=ke("p",{class:"text-xl text-gray-600"},"Thanks for playing, Elenor.",-1)),ke("button",{onClick:te[3]||(te[3]=De=>se.location.reload()),class:"mt-8 text-pink-500 font-bold hover:underline"},"Play Again")])])):Hs("",!0)])],64))}};dx(WA).mount("#app");
