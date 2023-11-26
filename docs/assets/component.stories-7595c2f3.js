import{i as x,s as m,x as v}from"./lit-element-8d145624.js";import{n as t,t as y}from"./property-c8c6de82.js";import{e as g}from"./query-2518e02e.js";import{e as z}from"./class-map-10d9f55a.js";import"./component-ffd803ff.js";const _=x`
  :host {
    --checkbox-size: var(--space-10);

    display: inline-flex;
    position: relative;
  }

  .checkbox {
    --_checkbox-size: var(--checkbox-size);

    outline-offset: 2px;

    &:focus-within {
      outline: 2px solid var(--color-primary);
    }

    &[data-size="small"] {
      --_checkbox-size: calc(var(--size-factor-small) * var(--checkbox-size));
    }
  }

  .checkbox--label {
    display: inline-flex;
    align-items: center;
    gap: var(--space-4);
    position: relative;
    padding-inline-start: calc(var(--_checkbox-size) * 1.5);
    font-family: var(--ds-default-font);
    font-size: var(--radio-label-font, var(--radio-button-size));
    color: var(--color-black);
    cursor: pointer;
  }

  .checkbox--icon {
    display: none;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    font-size: var(--_checkbox-size);
    color: var(--color-primary);
  }

  .checkbox--label::before {
    inset-inline-start: 0;
    inline-size: var(--_checkbox-size);
    block-size: var(--_checkbox-size);
    border: 2px solid var(--color-primary);
    border-radius: calc(var(--_checkbox-size) * 0.3);
    background-color: var(--color-white);
  }

  .checkbox--label::before {
    content: "";
    position: absolute;
  }

  .checkbox--input:checked + .checkbox--label::before {
    border-color: var(--color-primary);
  }

  .checkbox--input:disabled {
    cursor: default;

    & + .checkbox--label {
      cursor: default;
      color: var(--color-disabled);
    }

    & + .checkbox--label::before {
      color: var(--color-disabled);
      border-color: var(--color-disabled);
    }
  }

  .checkbox--input:not(:disabled):hover + .checkbox--label::before {
    background-color: var(--color-primary-container);
    filter: brightness(var(--interaction-state-hover, 1.2));
  }

  .checkbox--input:not(:disabled):active + .checkbox--label::before {
    background-color: var(--color-primary-container);
    filter: brightness(var(--interaction-state-active, 1.4));
  }

  /* stylelint-disable-next-line selector-max-combinators */
  .checkbox--input:checked + .checkbox--label > .checkbox--icon {
    display: inline-flex;
  }

  .checkbox--input[aria-checked="mixed"] + .checkbox--label > .checkbox--icon {
    display: inline-flex;
  }

  .checkbox--input:checked:hover + .checkbox--label > .checkbox--icon {
    color: var(--color-primary-on-container);
  }

  .checkbox--input:checked:active + .checkbox--label > .checkbox--icon {
    color: var(--color-primary-on-container);
  }
`;var $=Object.defineProperty,C=Object.getOwnPropertyDescriptor,c=(o,r,i,l)=>{for(var a=l>1?void 0:l?C(r,i):r,n=o.length-1,s;n>=0;n--)(s=o[n])&&(a=(l?s(r,i,a):s(a))||a);return l&&a&&$(r,i,a),a},k=(o=>(o.Small="small",o))(k||{});let e=class extends m{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.hiddenLabel=!1,this.indeterminate=!1}_handleChange(){const{checked:o,indeterminate:r}=this._checkboxNode;this.checked=o,this.indeterminate=r}render(){const{checked:o,disabled:r,hiddenLabel:i,indeterminate:l,label:a,name:n,value:s,_handleChange:f}=this,u=z({"checkbox--label":!0,"sr-only":i});return v`
      <div class="checkbox" data-size="${this.size}">
        <input
          id="checkbox"
          class="checkbox--input | sr-only"
          .disabled="${r}"
          .checked="${o}"
          aria-checked="${l?"mixed":o}"
          name="${n}"
          value="${s}"
          type="checkbox"
          @change="${f}"
        />
        <label class="${u}" for="checkbox">
          <pano-b-icon
            class="checkbox--icon"
            icon-name="${l?"remove":"check"}"
          ></pano-b-icon>
          <div>${a}</div>
        </label>
      </div>
    `}};e.styles=[x`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
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
    `,_];c([g("input")],e.prototype,"_checkboxNode",2);c([t({type:String,reflect:!0})],e.prototype,"size",2);c([t({type:Boolean,reflect:!0})],e.prototype,"checked",2);c([t({type:Boolean,reflect:!0})],e.prototype,"disabled",2);c([t({type:Boolean,reflect:!0,attribute:"hidden-label"})],e.prototype,"hiddenLabel",2);c([t({type:Boolean,reflect:!0})],e.prototype,"indeterminate",2);c([t({type:String,reflect:!0})],e.prototype,"label",2);c([t({type:String,reflect:!0})],e.prototype,"name",2);c([t({type:String,reflect:!0})],e.prototype,"value",2);e=c([y("pano-b-checkbox")],e);const O={title:"Design System - Beispiel B/Components/Checkbox",component:"pano-b-checkbox",argTypes:{size:{options:k,control:{type:"select"}},checked:{type:"boolean"},disabled:{type:"boolean"},hiddenLabel:{type:"boolean"},indeterminate:{type:"boolean"},label:{type:"string"},name:{type:"string"},value:{type:"string"}}},b={args:{size:"small",checked:!1,disabled:!1,hiddenLabel:!1,indeterminate:!1,label:"Checkbox Label",name:void 0,value:void 0}};var d,h,p;b.parameters={...b.parameters,docs:{...(d=b.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    size: "small",
    checked: false,
    disabled: false,
    hiddenLabel: false,
    indeterminate: false,
    label: "Checkbox Label",
    name: undefined,
    value: undefined
  }
}`,...(p=(h=b.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};const P=["Default"];export{b as Default,P as __namedExportsOrder,O as default};
//# sourceMappingURL=component.stories-7595c2f3.js.map
