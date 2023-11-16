/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const c=(n,r,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof r!="object"&&Object.defineProperty(n,r,e),e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function h(n,r){return(e,u,s)=>{const i=l=>{var o;return((o=l.renderRoot)==null?void 0:o.querySelector(n))??null};if(r){const{get:l,set:o}=typeof u=="object"?e:s??(()=>{const t=Symbol();return{get(){return this[t]},set(f){this[t]=f}}})();return c(e,u,{get(){if(r){let t=l.call(this);return t===void 0&&(t=i(this),o.call(this,t)),t}return i(this)}})}return c(e,u,{get(){return i(this)}})}}export{h as e};
//# sourceMappingURL=query-2518e02e.js.map
