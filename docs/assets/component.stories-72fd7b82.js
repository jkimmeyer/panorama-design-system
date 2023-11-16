import{T as O,i as h,s as w,x as u}from"./lit-element-8d145624.js";import{e as S}from"./class-map-10d9f55a.js";import{n as r,t as z}from"./component-e249f554.js";import{e as B}from"./query-2518e02e.js";/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const f=a=>a??O,L=h`
  :host {
    --icon-padding: calc(var(--space-medium) * 2);
    --input-padding-block: calc(var(--space-medium) * 0.5);

    display: flex;
    flex-direction: column;
    gap: var(--space-small);
    font: normal 400 16px/1.5 var(--ds-default-font);
  }

  .input--field {
    width: 100%;
    border: 1px solid var(--color-primary);
    border-radius: var(--space-small);
    padding-block: var(--input-padding-block);
    padding-inline: calc(var(--space-medium) * 0.5);
    font: normal 400 16px/1.5 var(--ds-default-font);

    .input[data-icon-before] & {
      padding-left: var(--icon-padding);
    }

    .input[data-icon-after] & {
      padding-right: var(--icon-padding);
    }
  }

  .input--field:where([data-size="small"]) {
    --input-padding-block: calc(var(--space-small) * 0.5);
  }

  .input--field:where([data-size="medium"]) {
    --input-padding-block: calc(var(--space-medium) * 0.5);
  }

  .input {
    display: flex;
    align-items: center;
    position: relative;
  }

  .input--icon {
    position: absolute;

    &[data-icon-before] {
      left: var(--space-small);
    }

    &[data-icon-after] {
      right: var(--space-small);
    }
  }
`;var T=Object.defineProperty,q=Object.getOwnPropertyDescriptor,t=(a,l,p,o)=>{for(var i=o>1?void 0:o?q(l,p):l,s=a.length-1,n;s>=0;s--)(n=a[s])&&(i=(o?n(l,p,i):n(i))||i);return o&&i&&T(l,p,i),i},g=(a=>(a.Small="small",a.Medium="medium",a))(g||{});let e=class extends w{constructor(){super(...arguments),this._value="",this.disabled=!1,this.hiddenLabel=!1,this.inputType="text",this.readOnly=!1,this.required=!1,this.pattern=void 0,this.placeholder=void 0,this.value=void 0,this.iconBefore=void 0,this.iconAfter=void 0}_handleInput({target:a}){this.value=a.value}render(){const{disabled:a,hiddenLabel:l,inputType:p,label:o,readOnly:i,value:s,iconBefore:n,iconAfter:c,pattern:v,placeholder:x,_handleInput:$}=this,_=S({"input--label":!0,"sr-only":l});return u`
      <label class="${_}" for="input">${o}</label>
      <div
        class="input"
        ?data-icon-before="${!!n}"
        ?data-icon-after="${!!c}"
      >
        ${n?u`<material-icon
              class="input--icon"
              data-icon-before
              icon-name="${n}"
            ></material-icon>`:null}
        <input
          class="input--field"
          .disabled="${a}"
          id="input"
          ?disabled="${a}"
          ?read-only="${i}"
          pattern="${f(v)}"
          placeholder="${f(x)}"
          value="${f(s)}"
          type="${p}"
          @input="${$}"
          data-size="${this.size}"
        />
        ${c?u`<material-icon
              class="input--icon"
              data-icon-after
              icon-name="${c}"
            ></material-icon>`:null}
      </div>
    `}};e.styles=[h`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      input {
        margin: 0;
        padding: 0;
        font: inherit;
      }

      .sr-only {
        clip: rect(0, 0, 0, 0);
        overflow: hidden;
        position: absolute;
        width: 1px;
        height: 1px;
        margin: -1px;
        border-width: 0;
        padding: 0;
        white-space: nowrap;
      }
    `,L];t([B("input")],e.prototype,"_input",2);t([r({type:String,reflect:!0})],e.prototype,"size",2);t([r({type:Boolean,reflect:!0})],e.prototype,"disabled",2);t([r({type:Boolean,reflect:!0})],e.prototype,"hiddenLabel",2);t([r({type:String,reflect:!0,attribute:"input-type"})],e.prototype,"inputType",2);t([r({type:String,reflect:!0})],e.prototype,"label",2);t([r({type:Boolean,reflect:!0,attribute:"read-only"})],e.prototype,"readOnly",2);t([r({type:Boolean,reflect:!0})],e.prototype,"required",2);t([r({type:String,reflect:!0})],e.prototype,"pattern",2);t([r({type:String,reflect:!0})],e.prototype,"placeholder",2);t([r({type:String,reflect:!0})],e.prototype,"value",2);t([r({type:String,reflect:!0,attribute:"icon-before"})],e.prototype,"iconBefore",2);t([r({type:String,reflect:!0,attribute:"icon-after"})],e.prototype,"iconAfter",2);e=t([z("pano-input")],e);const j={component:"pano-input",argTypes:{size:{options:g,control:{type:"select"}},disabled:{type:"boolean"},hiddenLabel:{type:"boolean"},inputType:{type:"string"},label:{type:"string"},readOnly:{type:"boolean"},required:{type:"boolean"},pattern:{type:"string"},placeholder:{type:"string"},value:{type:"string"},iconBefore:{type:"string"},iconAfter:{type:"string"}}},d={args:{size:"small",disabled:!1,hiddenLabel:!1,inputType:"text",label:"Input Label",readOnly:!1,required:!1}};var y,b,m;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    size: "small",
    disabled: false,
    hiddenLabel: false,
    inputType: "text",
    label: "Input Label",
    readOnly: false,
    required: false
  }
}`,...(m=(b=d.parameters)==null?void 0:b.docs)==null?void 0:m.source}}};const C=["Default"];export{d as Default,C as __namedExportsOrder,j as default};
//# sourceMappingURL=component.stories-72fd7b82.js.map
