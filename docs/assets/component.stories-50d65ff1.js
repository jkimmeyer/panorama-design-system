import{i as x,s as u,x as v}from"./lit-element-8d145624.js";import{n as t,t as m}from"./property-c8c6de82.js";import{e as y}from"./query-2518e02e.js";import{e as g}from"./class-map-10d9f55a.js";import"./component-ffd803ff.js";const _=x`
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
`;var z=Object.defineProperty,C=Object.getOwnPropertyDescriptor,c=(r,a,n,i)=>{for(var o=i>1?void 0:i?C(a,n):a,l=r.length-1,s;l>=0;l--)(s=r[l])&&(o=(i?s(a,n,o):s(o))||o);return i&&o&&z(a,n,o),o};let e=class extends u{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.hiddenLabel=!1,this.indeterminate=!1}_handleChange(){const{checked:r,indeterminate:a}=this._checkboxNode;this.checked=r,this.indeterminate=a}render(){const{checked:r,disabled:a,hiddenLabel:n,indeterminate:i,label:o,name:l,value:s,_handleChange:f}=this,k=g({"checkbox--label":!0,"sr-only":n});return v`
      <div class="checkbox">
        <input
          id="checkbox"
          class="checkbox--input | sr-only"
          .disabled="${a}"
          .checked="${r}"
          aria-checked="${i?"mixed":r}"
          name="${l}"
          value="${s}"
          type="checkbox"
          @change="${f}"
        />
        <label class="${k}" for="checkbox">
          <pano-b-icon class="checkbox--icon" icon-name="check"></pano-b-icon>
          <div>${o}</div>
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
    `,_];c([y("input")],e.prototype,"_checkboxNode",2);c([t({type:Boolean,reflect:!0})],e.prototype,"checked",2);c([t({type:Boolean,reflect:!0})],e.prototype,"disabled",2);c([t({type:Boolean,reflect:!0,attribute:"hidden-label"})],e.prototype,"hiddenLabel",2);c([t({type:Boolean,reflect:!0})],e.prototype,"indeterminate",2);c([t({type:String,reflect:!0})],e.prototype,"label",2);c([t({type:String,reflect:!0})],e.prototype,"name",2);c([t({type:String,reflect:!0})],e.prototype,"value",2);e=c([m("pano-b-checkbox")],e);const D={title:"Design System - Beispiel B/Components/Checkbox",component:"pano-b-checkbox",argTypes:{checked:{type:"boolean"},disabled:{type:"boolean"},hiddenLabel:{type:"boolean"},indeterminate:{type:"boolean"},label:{type:"string"},name:{type:"string"},value:{type:"string"}}},b={args:{checked:!1,disabled:!1,hiddenLabel:!1,indeterminate:!1,label:"Checkbox Label",name:void 0,value:void 0}};var d,p,h;b.parameters={...b.parameters,docs:{...(d=b.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: false,
    hiddenLabel: false,
    indeterminate: false,
    label: "Checkbox Label",
    name: undefined,
    value: undefined
  }
}`,...(h=(p=b.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};const O=["Default"];export{b as Default,O as __namedExportsOrder,D as default};
//# sourceMappingURL=component.stories-50d65ff1.js.map
