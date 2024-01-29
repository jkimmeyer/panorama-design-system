import{i as m,s as _,x as u}from"./lit-element-8d145624.js";import{e as O}from"./class-map-10d9f55a.js";import{o as f}from"./if-defined-64006850.js";import{n as r,t as S}from"./property-c8c6de82.js";import{e as q}from"./query-2518e02e.js";import"./component-23aa3ab6.js";const B=m`
  :host {
    --icon-padding: calc(var(--space-8) * 2);
    --input-padding-block: calc(var(--space-8) * 0.5);

    display: flex;
    flex-direction: column;
    gap: var(--space-4);
    font: normal 400 16px/1.5 var(--ds-default-font);
  }

  .input--field {
    width: 100%;
    border: 1px solid var(--color-black);
    border-radius: var(--space-4);
    padding-block: var(--input-padding-block);
    padding-inline: calc(var(--space-8) * 0.5);
    font: normal 400 16px/1.5 var(--ds-default-font);

    .input[data-icon-before] & {
      padding-left: var(--icon-padding);
    }

    .input[data-icon-after] & {
      padding-right: var(--icon-padding);
    }

    &:enabled:not(:read-only):where(:focus, :hover, :active) {
      outline: none;
      border-color: var(--color-primary);
    }

    &:read-only {
      cursor: default;
      color: var(--color-on-read-only-container);
      border-color: var(--color-read-only);
    }

    &:disabled {
      cursor: default;
      color: var(--color-on-disabled-container);
      border-color: var(--color-disabled);
    }
  }

  .input--field:where([data-size="small"]) {
    --input-padding-block: calc(var(--size-factor-small) * var(--space-4));
  }

  .input--field:where([data-size="medium"]) {
    --input-padding-block: calc(var(--size-factor-medium) * var(--space-4));
  }

  .input {
    display: flex;
    align-items: center;
    position: relative;
  }

  .input--icon {
    position: absolute;

    &[data-icon-before] {
      left: var(--space-4);
    }

    &[data-icon-after] {
      right: var(--space-4);
    }
  }
`;var L=Object.defineProperty,T=Object.getOwnPropertyDescriptor,t=(a,n,p,l)=>{for(var o=l>1?void 0:l?T(n,p):n,d=a.length-1,i;d>=0;d--)(i=a[d])&&(o=(l?i(n,p,o):i(o))||o);return l&&o&&L(n,p,o),o},g=(a=>(a.Small="small",a.Medium="medium",a))(g||{});let e=class extends _{constructor(){super(...arguments),this._value="",this.disabled=!1,this.hiddenLabel=!1,this.inputType="text",this.readOnly=!1,this.required=!1,this.pattern=void 0,this.placeholder=void 0,this.value=void 0,this.iconBefore=void 0,this.iconAfter=void 0}_handleInput({target:a}){this.value=a.value}render(){const{disabled:a,hiddenLabel:n,inputType:p,label:l,readOnly:o,value:d,iconBefore:i,iconAfter:c,pattern:$,placeholder:w,required:y,_handleInput:x}=this,z=O({"input--label":!0,required:y,"sr-only":n});return u`
      <label class="${z}" for="input">${l}</label>
      <div
        class="input"
        ?data-icon-before="${!!i}"
        ?data-icon-after="${!!c}"
      >
        ${i?u`<zw-icon
              class="input--icon"
              data-icon-before
              icon-name="${i}"
            ></zw-icon>`:null}
        <input
          class="input--field"
          .disabled="${a}"
          id="input"
          ?disabled="${a}"
          ?readonly="${o}"
          ?required="${y}"
          pattern="${f($)}"
          placeholder="${f(w)}"
          value="${f(d)}"
          type="${p}"
          @input="${x}"
          data-size="${this.size}"
        />
        ${c?u`<zw-icon
              class="input--icon"
              data-icon-after
              icon-name="${c}"
            ></zw-icon>`:null}
      </div>
    `}};e.styles=[m`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      input {
        outline: none;
        margin: 0;
        padding: 0;
        font: inherit;
      }

      .required {
        &::after {
          content: "*";
        }
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
    `,B];t([q("input")],e.prototype,"_input",2);t([r({type:String,reflect:!0})],e.prototype,"size",2);t([r({type:Boolean,reflect:!0})],e.prototype,"disabled",2);t([r({type:Boolean,reflect:!0})],e.prototype,"hiddenLabel",2);t([r({type:String,reflect:!0,attribute:"input-type"})],e.prototype,"inputType",2);t([r({type:String,reflect:!0})],e.prototype,"label",2);t([r({type:Boolean,reflect:!0,attribute:"read-only"})],e.prototype,"readOnly",2);t([r({type:Boolean,reflect:!0})],e.prototype,"required",2);t([r({type:String,reflect:!0})],e.prototype,"pattern",2);t([r({type:String,reflect:!0})],e.prototype,"placeholder",2);t([r({type:String,reflect:!0})],e.prototype,"value",2);t([r({type:String,reflect:!0,attribute:"icon-before"})],e.prototype,"iconBefore",2);t([r({type:String,reflect:!0,attribute:"icon-after"})],e.prototype,"iconAfter",2);e=t([S("zw-input")],e);const E={title:"Design System - Beispiel ZWEITAG/Components/Input",component:"zw-input",argTypes:{size:{options:g,control:{type:"select"}},disabled:{type:"boolean"},hiddenLabel:{type:"boolean"},inputType:{type:"string"},label:{type:"string"},readOnly:{type:"boolean"},required:{type:"boolean"},pattern:{type:"string"},placeholder:{type:"string"},value:{type:"string"},iconBefore:{type:"string"},iconAfter:{type:"string"}}},s={args:{size:"small",disabled:!1,hiddenLabel:!1,inputType:"text",label:"Input Label",readOnly:!1,required:!1}};var b,v,h;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    size: "small",
    disabled: false,
    hiddenLabel: false,
    inputType: "text",
    label: "Input Label",
    readOnly: false,
    required: false
  }
}`,...(h=(v=s.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const Z=["Default"];export{s as Default,Z as __namedExportsOrder,E as default};
//# sourceMappingURL=component.stories-eb6b3711.js.map
