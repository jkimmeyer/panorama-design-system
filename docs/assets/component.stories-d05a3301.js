import{i as x,s as u,x as v}from"./lit-element-8d145624.js";import{n as r,t as y}from"./property-c8c6de82.js";import{e as g}from"./query-2518e02e.js";import{e as z}from"./class-map-10d9f55a.js";import"./component-24cd48a8.js";const _=x`
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

  .checkbox--input:hover + .checkbox--label::before {
    background-color: var(--color-primary-container);
    filter: brightness(var(--interaction-state-hover, 1.2));
  }

  .checkbox--input:active + .checkbox--label::before {
    background-color: var(--color-primary-container);
    filter: brightness(var(--interaction-state-active, 1.4));
  }

  /* stylelint-disable-next-line selector-max-combinators */
  .checkbox--input:checked + .checkbox--label > .checkbox--icon {
    display: inline-flex;
  }

  .checkbox--input:checked:hover + .checkbox--label > .checkbox--icon {
    color: var(--color-primary-on-container);
  }

  .checkbox--input:checked:active + .checkbox--label > .checkbox--icon {
    color: var(--color-primary-on-container);
  }
`;var C=Object.defineProperty,$=Object.getOwnPropertyDescriptor,a=(o,t,l,i)=>{for(var c=i>1?void 0:i?$(t,l):t,n=o.length-1,s;n>=0;n--)(s=o[n])&&(c=(i?s(t,l,c):s(c))||c);return i&&c&&C(t,l,c),c},f=(o=>(o.Small="small",o))(f||{});let e=class extends u{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.hiddenLabel=!1,this.indeterminate=!1}_handleChange(){const{checked:o,indeterminate:t}=this._checkboxNode;this.checked=o,this.indeterminate=t}render(){const{checked:o,disabled:t,hiddenLabel:l,indeterminate:i,label:c,name:n,value:s,_handleChange:k}=this,m=z({"checkbox--label":!0,"sr-only":l});return v`
      <div class="checkbox" data-size="${this.size}">
        <input
          id="checkbox"
          class="checkbox--input | sr-only"
          .disabled="${t}"
          .checked="${o}"
          aria-checked="${i?"mixed":o}"
          name="${n}"
          value="${s}"
          type="checkbox"
          @change="${k}"
        />
        <label class="${m}" for="checkbox">
          <pano-a-icon class="checkbox--icon" icon-name="check"></pano-a-icon>
          <div>${c}</div>
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
    `,_];a([g("input")],e.prototype,"_checkboxNode",2);a([r({type:String,reflect:!0})],e.prototype,"size",2);a([r({type:Boolean,reflect:!0})],e.prototype,"checked",2);a([r({type:Boolean,reflect:!0})],e.prototype,"disabled",2);a([r({type:Boolean,reflect:!0,attribute:"hidden-label"})],e.prototype,"hiddenLabel",2);a([r({type:Boolean,reflect:!0})],e.prototype,"indeterminate",2);a([r({type:String,reflect:!0})],e.prototype,"label",2);a([r({type:String,reflect:!0})],e.prototype,"name",2);a([r({type:String,reflect:!0})],e.prototype,"value",2);e=a([y("pano-a-checkbox")],e);const O={title:"Design System - Beispiel A/Components/Checkbox",component:"pano-a-checkbox",argTypes:{size:{options:f,control:{type:"select"}},checked:{type:"boolean"},disabled:{type:"boolean"},hiddenLabel:{type:"boolean"},indeterminate:{type:"boolean"},label:{type:"string"},name:{type:"string"},value:{type:"string"}}},b={args:{size:"small",checked:!1,disabled:!1,hiddenLabel:!1,indeterminate:!1,label:"Checkbox Label",name:void 0,value:void 0}};var d,p,h;b.parameters={...b.parameters,docs:{...(d=b.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(p=b.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};const P=["Default"];export{b as Default,P as __namedExportsOrder,O as default};
//# sourceMappingURL=component.stories-d05a3301.js.map
