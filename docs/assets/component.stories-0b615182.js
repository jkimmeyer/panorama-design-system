import{i as h,s as B,x as u}from"./lit-element-8d145624.js";import{e as O}from"./class-map-10d9f55a.js";import{o as f}from"./if-defined-64006850.js";import{n as a,t as S}from"./property-c8c6de82.js";import{e as w}from"./query-2518e02e.js";import"./component-ffd803ff.js";const z=h`
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

    &:focus,
    &:hover,
    &:active {
      outline: none;
      border-color: var(--color-primary);
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
`;var L=Object.defineProperty,T=Object.getOwnPropertyDescriptor,t=(r,o,p,l)=>{for(var i=l>1?void 0:l?T(o,p):o,s=r.length-1,n;s>=0;s--)(n=r[s])&&(i=(l?n(o,p,i):n(i))||i);return l&&i&&L(o,p,i),i},m=(r=>(r.Small="small",r.Medium="medium",r))(m||{});let e=class extends B{constructor(){super(...arguments),this._value="",this.disabled=!1,this.hiddenLabel=!1,this.inputType="text",this.readOnly=!1,this.required=!1,this.pattern=void 0,this.placeholder=void 0,this.value=void 0,this.iconBefore=void 0,this.iconAfter=void 0}_handleInput({target:r}){this.value=r.value}render(){const{disabled:r,hiddenLabel:o,inputType:p,label:l,readOnly:i,value:s,iconBefore:n,iconAfter:c,pattern:g,placeholder:x,_handleInput:$}=this,_=O({"input--label":!0,"sr-only":o});return u`
      <label class="${_}" for="input">${l}</label>
      <div
        class="input"
        ?data-icon-before="${!!n}"
        ?data-icon-after="${!!c}"
      >
        ${n?u`<pano-b-icon
              class="input--icon"
              data-icon-before
              icon-name="${n}"
            ></pano-b-icon>`:null}
        <input
          class="input--field"
          .disabled="${r}"
          id="input"
          ?disabled="${r}"
          ?read-only="${i}"
          pattern="${f(g)}"
          placeholder="${f(x)}"
          value="${f(s)}"
          type="${p}"
          @input="${$}"
          data-size="${this.size}"
        />
        ${c?u`<pano-b-icon
              class="input--icon"
              data-icon-after
              icon-name="${c}"
            ></pano-b-icon>`:null}
      </div>
    `}};e.styles=[h`
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
    `,z];t([w("input")],e.prototype,"_input",2);t([a({type:String,reflect:!0})],e.prototype,"size",2);t([a({type:Boolean,reflect:!0})],e.prototype,"disabled",2);t([a({type:Boolean,reflect:!0})],e.prototype,"hiddenLabel",2);t([a({type:String,reflect:!0,attribute:"input-type"})],e.prototype,"inputType",2);t([a({type:String,reflect:!0})],e.prototype,"label",2);t([a({type:Boolean,reflect:!0,attribute:"read-only"})],e.prototype,"readOnly",2);t([a({type:Boolean,reflect:!0})],e.prototype,"required",2);t([a({type:String,reflect:!0})],e.prototype,"pattern",2);t([a({type:String,reflect:!0})],e.prototype,"placeholder",2);t([a({type:String,reflect:!0})],e.prototype,"value",2);t([a({type:String,reflect:!0,attribute:"icon-before"})],e.prototype,"iconBefore",2);t([a({type:String,reflect:!0,attribute:"icon-after"})],e.prototype,"iconAfter",2);e=t([S("pano-b-input")],e);const j={title:"Design System - Beispiel B/Components/Input",component:"pano-b-input",argTypes:{size:{options:m,control:{type:"select"}},disabled:{type:"boolean"},hiddenLabel:{type:"boolean"},inputType:{type:"string"},label:{type:"string"},readOnly:{type:"boolean"},required:{type:"boolean"},pattern:{type:"string"},placeholder:{type:"string"},value:{type:"string"},iconBefore:{type:"string"},iconAfter:{type:"string"}}},d={args:{size:"small",disabled:!1,hiddenLabel:!1,inputType:"text",label:"Input Label",readOnly:!1,required:!1}};var b,y,v;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    size: "small",
    disabled: false,
    hiddenLabel: false,
    inputType: "text",
    label: "Input Label",
    readOnly: false,
    required: false
  }
}`,...(v=(y=d.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};const k=["Default"];export{d as Default,k as __namedExportsOrder,j as default};
//# sourceMappingURL=component.stories-0b615182.js.map
