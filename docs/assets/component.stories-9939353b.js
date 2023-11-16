import{i as f,s as x,x as k}from"./lit-element-8d145624.js";import{n as l,t as y}from"./component-e249f554.js";import{e as v}from"./query-2518e02e.js";import{e as g}from"./class-map-10d9f55a.js";const _=f`
  :host {
    position: relative;
  }

  .checkbox--label {
    display: inline-flex;
    align-items: center;
    position: relative;
    padding-inline-start: calc(var(--space-medium) * 2);
    color: var(--color-primary-700);
    gap: var(--space-small);
    cursor: pointer;
  }

  .checkbox--icon {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    display: none;
  }

  .checkbox--label::before,
  .checkbox--label::after {
    content: "";
    position: absolute;
    z-index: var(--zLayer-default, 1);
  }

  .checkbox--label::before {
    inset-inline-start: 0;
    inline-size: 20px;
    block-size: 20px;
    border: 2px solid var(--color-primary);
    border-radius: var(--space-small);
    background-color: var(--color-white);
  }

  .checkbox--input:checked + .checkbox--label::before {
    border-color: var(--color-primary);
  }

  .checkbox--input:focus + .checkbox--label::before,
  .checkbox--input:hover + .checkbox--label::before {
    border-color: var(--color-secondary);
  }

  .checkbox--input:checked + .checkbox--label > .checkbox--icon {
    display: inline-flex;
  }
`;var L=Object.defineProperty,$=Object.getOwnPropertyDescriptor,a=(r,t,n,c)=>{for(var o=c>1?void 0:c?$(t,n):t,i=r.length-1,s;i>=0;i--)(s=r[i])&&(o=(c?s(t,n,o):s(o))||o);return c&&o&&L(t,n,o),o};let e=class extends x{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.hiddenLabel=!1,this.indeterminate=!1}_handleChange(){const{checked:r,indeterminate:t}=this._checkboxNode;this.checked=r,this.indeterminate=t}render(){const{checked:r,disabled:t,hiddenLabel:n,indeterminate:c,label:o,name:i,value:s,_handleChange:u}=this,m=g({"checkbox--label":!0,"sr-only":n});return k`
      <input
        id="checkbox"
        class="checkbox--input | sr-only"
        .disabled="${t}"
        .checked="${r}"
        aria-checked="${c?"mixed":r}"
        name="${i}"
        value="${s}"
        type="checkbox"
        @change="${u}"
      />
      <label class="${m}" for="checkbox">
        <material-icon class="checkbox--icon" icon-name="check"></material-icon>
        <div>${o}</div>
      </label>
    `}};e.styles=[f`
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
    `,_];a([v("input")],e.prototype,"_checkboxNode",2);a([l({type:Boolean,reflect:!0})],e.prototype,"checked",2);a([l({type:Boolean,reflect:!0})],e.prototype,"disabled",2);a([l({type:Boolean,reflect:!0,attribute:"hidden-label"})],e.prototype,"hiddenLabel",2);a([l({type:Boolean,reflect:!0})],e.prototype,"indeterminate",2);a([l({type:String,reflect:!0})],e.prototype,"label",2);a([l({type:String,reflect:!0})],e.prototype,"name",2);a([l({type:String,reflect:!0})],e.prototype,"value",2);e=a([y("pano-checkbox")],e);const P={component:"pano-checkbox",argTypes:{checked:{type:"boolean"},disabled:{type:"boolean"},hiddenLabel:{type:"boolean"},indeterminate:{type:"boolean"},label:{type:"string"},name:{type:"string"},value:{type:"string"}}},d={args:{checked:!1,disabled:!1,hiddenLabel:!1,indeterminate:!1,label:"Checkbox Label",name:void 0,value:void 0}};var b,p,h;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: false,
    hiddenLabel: false,
    indeterminate: false,
    label: "Checkbox Label",
    name: undefined,
    value: undefined
  }
}`,...(h=(p=d.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};const S=["Default"];export{d as Default,S as __namedExportsOrder,P as default};
//# sourceMappingURL=component.stories-9939353b.js.map
