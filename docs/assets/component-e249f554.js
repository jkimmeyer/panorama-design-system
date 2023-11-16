import{u as d,f,i as m,s as u,x as h}from"./lit-element-8d145624.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const y=t=>(r,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(t,r)}):customElements.define(t,r)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const v={attribute:!0,type:String,converter:d,reflect:!1,hasChanged:f},b=(t=v,r,e)=>{const{kind:o,metadata:n}=e;let s=globalThis.litPropertyMetadata.get(n);if(s===void 0&&globalThis.litPropertyMetadata.set(n,s=new Map),s.set(e.name,t),o==="accessor"){const{name:i}=e;return{set(a){const c=r.get.call(this);r.set.call(this,a),this.requestUpdate(i,c,t)},init(a){return a!==void 0&&this.C(i,void 0,t),a}}}if(o==="setter"){const{name:i}=e;return function(a){const c=this[i];r.call(this,a),this.requestUpdate(i,c,t)}}throw Error("Unsupported decorator location: "+o)};function g(t){return(r,e)=>typeof e=="object"?b(t,r,e):((o,n,s)=>{const i=n.hasOwnProperty(s);return n.constructor.createProperty(s,i?{...o,wrapped:!0}:o),i?Object.getOwnPropertyDescriptor(n,s):void 0})(t,r,e)}var w=Object.defineProperty,P=Object.getOwnPropertyDescriptor,p=(t,r,e,o)=>{for(var n=o>1?void 0:o?P(r,e):r,s=t.length-1,i;s>=0;s--)(i=t[s])&&(n=(o?i(r,e,n):i(n))||n);return o&&n&&w(r,e,n),n};let l=class extends u{render(){const{iconName:t}=this;return h`<span class="material-symbols-outlined">${t}</span>`}};l.styles=m`
    :host {
      display: inline-flex;
      vertical-align: 0;
    }

    .material-symbols-outlined {
      display: inline-block;
      font-family: "Material Symbols Outlined", sans-serif;
      font-size: inherit; /* Preferred icon size */
      font-style: normal;
      font-weight: 400;
      letter-spacing: normal;
      line-height: 1;
      text-transform: none;
      white-space: nowrap;
      word-wrap: normal;
      direction: ltr;
    }
  `;p([g({type:String,reflect:!0,attribute:"icon-name"})],l.prototype,"iconName",2);l=p([y("material-icon")],l);export{g as n,y as t};
//# sourceMappingURL=component-e249f554.js.map
