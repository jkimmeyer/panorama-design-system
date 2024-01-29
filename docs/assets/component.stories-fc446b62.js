import{i as y,s as z,x as u}from"./lit-element-8d145624.js";import{e as $}from"./class-map-10d9f55a.js";import{n as r,t as x}from"./property-c8c6de82.js";import"./component-23aa3ab6.js";const S=y`
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

  .button:where([data-theme="highlight"]) {
    --button-main-color: var(--color-highlight);
    --button-on-main-color: var(--color-on-highlight);
    --button-interaction-color: var(--color-highlight-container);
    --button-on-interaction-color: var(--color-highlight-on-container);
  }

  .button:where([data-appearance="filled"]) {
    --button-color: var(--button-on-main-color);
    --button-border-color: transparent;
    --button-background-color: var(--button-main-color);
  }

  .button:where([data-size="small"]) {
    --button-height: calc(var(--size-factor-small) * var(--space-12));
  }

  .button:where([data-size="medium"]) {
    --button-height: calc(var(--size-factor-medium) * var(--space-12));
  }

  .button:where([data-size="large"]) {
    --button-height: calc(var(--size-factor-large) * var(--space-12));
  }
`;var O=Object.defineProperty,B=Object.getOwnPropertyDescriptor,o=(t,a,c,i)=>{for(var n=i>1?void 0:i?B(a,c):a,l=t.length-1,s;l>=0;l--)(s=t[l])&&(n=(i?s(a,c,n):s(n))||n);return i&&n&&O(a,c,n),n},m=(t=>(t.Filled="filled",t))(m||{}),g=(t=>(t.Small="small",t.Medium="medium",t.Large="large",t))(g||{}),v=(t=>(t.Primary="primary",t.Secondary="secondary",t.Highlight="highlight",t))(v||{});let e=class extends z{constructor(){super(...arguments),this.buttonType="button",this.iconOnly=!1,this.iconBefore="",this.fullWidth=!1,this.iconAfter="",this.href="",this.disabled=!1}render(){const{iconOnly:t,iconBefore:a,iconAfter:c,label:i,href:n,fullWidth:l,disabled:s}=this,w=$({"button--text":!0,"sr-only":t}),d=u`
      <zw-icon icon-name="${a}"></zw-icon>
      <span class="${w}"> ${i} </span>
      ${t?null:u`<zw-icon icon-name="${c}"></zw-icon>`}
    `;return n?u`
        <a
          class="button"
          href="${n}"
          ?data-icon-only="${t}"
          ?data-full-width="${l}"
          data-appearance="${this.appearance}"
          data-size="${this.size}"
          data-theme="${this.theme}"
        >
          ${d}
        </a>
      `:u`
        <button
          class="button"
          ?disabled="${s}"
          ?data-icon-only="${t}"
          ?data-full-width="${l}"
          data-appearance="${this.appearance}"
          data-size="${this.size}"
          data-theme="${this.theme}"
        >
          ${d}
        </button>
      `}};e.styles=[y`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      a,
      button {
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
    `,S];o([r({type:String,reflect:!0})],e.prototype,"appearance",2);o([r({type:String,reflect:!0})],e.prototype,"size",2);o([r({type:String,reflect:!0})],e.prototype,"theme",2);o([r({type:String,reflect:!0})],e.prototype,"label",2);o([r({type:String,reflect:!0})],e.prototype,"buttonType",2);o([r({type:Boolean,reflect:!0,attribute:"icon-only"})],e.prototype,"iconOnly",2);o([r({type:String,reflect:!0,attribute:"icon-before"})],e.prototype,"iconBefore",2);o([r({type:Boolean,reflect:!0,attribute:"full-width"})],e.prototype,"fullWidth",2);o([r({type:String,reflect:!0,attribute:"icon-after"})],e.prototype,"iconAfter",2);o([r({type:String,reflect:!0})],e.prototype,"href",2);o([r({type:Boolean,reflect:!0})],e.prototype,"disabled",2);e=o([x("zw-button")],e);const P={title:"Design System - Beispiel ZWEITAG/Components/Button",component:"zw-button",argTypes:{appearance:{options:m,control:{type:"select"}},size:{options:g,control:{type:"select"}},theme:{options:v,control:{type:"select"}},label:{type:"string"},buttonType:{type:"string"},iconOnly:{type:"boolean"},iconBefore:{type:"string"},fullWidth:{type:"boolean"},iconAfter:{type:"string"},href:{type:"string"},disabled:{type:"boolean"}}},p={args:{appearance:"filled",size:"small",theme:"primary",label:"Button",buttonType:"button",iconOnly:!1,iconBefore:"",fullWidth:!1,iconAfter:"",href:"",disabled:!1}};var b,h,f;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    appearance: "filled",
    size: "small",
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
}`,...(f=(h=p.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const T=["Default"];export{p as Default,T as __namedExportsOrder,P as default};
//# sourceMappingURL=component.stories-fc446b62.js.map
