import{i as k,s as u,x as v}from"./lit-element-8d145624.js";import{n as i,t as m}from"./property-c8c6de82.js";import{e as y}from"./query-2518e02e.js";import{e as g}from"./class-map-10d9f55a.js";import"./component-cd18fe0b.js";const _=k`
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
    color: var(--color-primary)
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
`;var z=Object.defineProperty,C=Object.getOwnPropertyDescriptor,c=(a,r,l,t)=>{for(var o=t>1?void 0:t?C(r,l):r,n=a.length-1,s;n>=0;n--)(s=a[n])&&(o=(t?s(r,l,o):s(o))||o);return t&&o&&z(r,l,o),o};let e=class extends u{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.hiddenLabel=!1,this.indeterminate=!1}_handleChange(){const{checked:a,indeterminate:r}=this._checkboxNode;this.checked=a,this.indeterminate=r}render(){const{checked:a,disabled:r,hiddenLabel:l,indeterminate:t,label:o,name:n,value:s,_handleChange:x}=this,f=g({"checkbox--label":!0,"sr-only":l});return v`
      <div class="checkbox" >
        <input
          id="checkbox"
          class="checkbox--input | sr-only"
          .disabled="${r}"
          .checked="${a}"
          aria-checked="${t?"mixed":a}"
          name="${n}"
          value="${s}"
          type="checkbox"
          @change="${x}"
        />
        <label class="${f}" for="checkbox">
          <ikea-icon class="checkbox--icon" icon-name="${t?"remove":"check"}"></ikea-icon>
          <div>${o}</div>
        </label>
    </div>
    `}};e.styles=[k`
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
    `,_];c([y("input")],e.prototype,"_checkboxNode",2);c([i({type:Boolean,reflect:!0})],e.prototype,"checked",2);c([i({type:Boolean,reflect:!0})],e.prototype,"disabled",2);c([i({type:Boolean,reflect:!0,attribute:"hidden-label"})],e.prototype,"hiddenLabel",2);c([i({type:Boolean,reflect:!0})],e.prototype,"indeterminate",2);c([i({type:String,reflect:!0})],e.prototype,"label",2);c([i({type:String,reflect:!0})],e.prototype,"name",2);c([i({type:String,reflect:!0})],e.prototype,"value",2);e=c([m("ikea-checkbox")],e);const D={title:"Design System - Beispiel IKEA/Components/Checkbox",component:"ikea-checkbox",argTypes:{checked:{type:"boolean"},disabled:{type:"boolean"},hiddenLabel:{type:"boolean"},indeterminate:{type:"boolean"},label:{type:"string"},name:{type:"string"},value:{type:"string"}}},b={args:{checked:!1,disabled:!1,hiddenLabel:!1,indeterminate:!1,label:"Checkbox Label",name:void 0,value:void 0}};var d,h,p;b.parameters={...b.parameters,docs:{...(d=b.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: false,
    hiddenLabel: false,
    indeterminate: false,
    label: "Checkbox Label",
    name: undefined,
    value: undefined
  }
}`,...(p=(h=b.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};const O=["Default"];export{b as Default,O as __namedExportsOrder,D as default};
//# sourceMappingURL=component.stories-94436a05.js.map
