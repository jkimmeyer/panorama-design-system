import{i as h,s as x,x as u}from"./lit-element-8d145624.js";import{e as $}from"./class-map-10d9f55a.js";import{n as r,t as z}from"./property-c8c6de82.js";import"./component-cd18fe0b.js";const S=h`
.button {
  --button-height: 48px;
  --button-border: 1px solid;
  --button-border-radius: calc(var(--ds-border-radius));
  --button-inline-padding: var(--space-8);

  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: var(--space-8);
  min-height: var(--button-height);
  border: var(--button-border) var(--button-border-color);
  border-radius: var(--button-border-radius);
  padding-inline: var(--button-inline-padding);
  font-family: var(--ds-default-font);
  font-size: var(--ds-default-font-size);
  line-height: var(--ds-default-line-height);
  text-decoration: none;
  color: var(--button-color);
  background-color: var(--button-background-color);
  cursor: pointer;

  &[data-full-width] {
    width: 100%;
    display: flex;
  }
}

/* Link Styles */
.button:hover,
.button:visited,
.button:active {
  text-decoration: none;
}

.button:disabled {
  --button-main-color: var(--color-disabled);
  --button-on-main-color: var(--color-on-disabled);

  cursor: default;
  pointer-events: none;
}

.button:not(:disabled):where(:focus),
.button:not(:disabled):where(:hover),
.button:not(:disabled):where(:active) {
  color: var(--button-on-interaction-color);
  background-color: var(--button-interaction-color);
}

.button[data-icon-only] {
  aspect-ratio: 1;
}


.button:where([data-theme="primary"]) {
  --button-main-color: var(--color-primary);
  --button-on-main-color: var(--color-on-primary);
  --button-interaction-color: var(--color-primary-container);
  --button-on-interaction-color: var(--color-primary-on-container);
}


.button:where([data-theme="secondary"]) {
  --button-main-color: var(--color-secondary);
  --button-on-main-color: var(--color-on-secondary);
  --button-interaction-color: var(--color-secondary-container);
  --button-on-interaction-color: var(--color-secondary-on-container);
}


.button:where([data-appearance="filled"]) {
  --button-color: var(--button-on-main-color);
  --button-border-color: transparent;
  --button-background-color: var(--button-main-color);
}

.button:where([data-appearance="outline"]) {
  --button-color: var(--button-main-color);
  --button-border-color: var(--button-main-color);
  --button-background-color: transparent;
}

.button:where([data-appearance="text"]) {
  --button-color: var(--button-main-color);
  --button-border-color: transparent;
  --button-background-color: transparent;
}


.button:where([data-size="medium"]) {
  --button-height: calc(var(--size-factor-medium) * var(--space-12));
}

`;var O=Object.defineProperty,B=Object.getOwnPropertyDescriptor,o=(t,a,c,i)=>{for(var n=i>1?void 0:i?B(a,c):a,l=t.length-1,s;l>=0;l--)(s=t[l])&&(n=(i?s(a,c,n):s(n))||n);return i&&n&&O(a,c,n),n},m=(t=>(t.Filled="filled",t.Outline="outline",t.Text="text",t))(m||{}),v=(t=>(t.Medium="medium",t))(v||{}),g=(t=>(t.Primary="primary",t.Secondary="secondary",t))(g||{});let e=class extends x{constructor(){super(...arguments),this.buttonType="button",this.iconOnly=!1,this.iconBefore="",this.fullWidth=!1,this.iconAfter="",this.href="",this.disabled=!1}render(){const{iconOnly:t,iconBefore:a,iconAfter:c,label:i,href:n,fullWidth:l,disabled:s}=this,w=$({"button--text":!0,"sr-only":t}),p=u`
      <ikea-icon icon-name="${a}"></ikea-icon>
      <span class="${w}">
        ${i}
      </span>
      ${t?null:u`<ikea-icon icon-name="${c}"></ikea-icon>`}
    `;return n?u`
        <a class="button" href="${n}" ?data-icon-only="${t}" ?data-full-width="${l}" data-appearance="${this.appearance}" data-size="${this.size}" data-theme="${this.theme}">
          ${p}
        </a>
      `:u`
        <button class="button" ?disabled="${s}" ?data-icon-only="${t}" ?data-full-width="${l}" data-appearance="${this.appearance}" data-size="${this.size}" data-theme="${this.theme}">
          ${p}
        </button>
      `}};e.styles=[h`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      a, button {
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
    `,S];o([r({type:String,reflect:!0})],e.prototype,"appearance",2);o([r({type:String,reflect:!0})],e.prototype,"size",2);o([r({type:String,reflect:!0})],e.prototype,"theme",2);o([r({type:String,reflect:!0})],e.prototype,"label",2);o([r({type:String,reflect:!0})],e.prototype,"buttonType",2);o([r({type:Boolean,reflect:!0,attribute:"icon-only"})],e.prototype,"iconOnly",2);o([r({type:String,reflect:!0,attribute:"icon-before"})],e.prototype,"iconBefore",2);o([r({type:Boolean,reflect:!0,attribute:"full-width"})],e.prototype,"fullWidth",2);o([r({type:String,reflect:!0,attribute:"icon-after"})],e.prototype,"iconAfter",2);o([r({type:String,reflect:!0})],e.prototype,"href",2);o([r({type:Boolean,reflect:!0})],e.prototype,"disabled",2);e=o([z("ikea-button")],e);const A={title:"Design System - Beispiel IKEA/Components/Button",component:"ikea-button",argTypes:{appearance:{options:m,control:{type:"select"}},size:{options:v,control:{type:"select"}},theme:{options:g,control:{type:"select"}},label:{type:"string"},buttonType:{type:"string"},iconOnly:{type:"boolean"},iconBefore:{type:"string"},fullWidth:{type:"boolean"},iconAfter:{type:"string"},href:{type:"string"},disabled:{type:"boolean"}}},d={args:{appearance:"filled",size:"medium",theme:"primary",label:"Button",buttonType:"button",iconOnly:!1,iconBefore:"",fullWidth:!1,iconAfter:"",href:"",disabled:!1}};var b,f,y;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    appearance: "filled",
    size: "medium",
    theme: "primary",
    label: "Button",
    buttonType: "button",
    iconOnly: false,
    iconBefore: "",
    fullWidth: false,
    iconAfter: "",
    href: "",
    disabled: false
  }
}`,...(y=(f=d.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const D=["Default"];export{d as Default,D as __namedExportsOrder,A as default};
//# sourceMappingURL=component.stories-9cca74ad.js.map
