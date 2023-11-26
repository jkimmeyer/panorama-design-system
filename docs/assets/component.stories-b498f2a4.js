import{i as y,s as $,x as p}from"./lit-element-8d145624.js";import{e as x}from"./class-map-10d9f55a.js";import{n as r,t as z}from"./property-c8c6de82.js";import"./component-24cd48a8.js";const B=y`
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

  .button:not(:disabled):where(:focus) {
    filter: brightness(1.1);
  }

  .button:not(:disabled):where(:hover) {
    filter: brightness(var(--interaction-state-hover));
  }

  .button:not(:disabled):where(:active) {
    filter: brightness(var(--interaction-state-active));
  }

  .button[data-icon-only] {
    aspect-ratio: 1;
  }

  .button:where([data-theme="primary"]) {
    --button-main-color: var(--color-primary);
    --button-on-main-color: var(--color-on-primary);
    --button-container-color: var(--color-primary-container);
    --button-on-container-color: var(--color-primary-on-container);
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

  .button:where([data-size="medium"]) {
    --button-height: calc(var(--size-factor-medium) * var(--space-12));
  }
`;var O=Object.defineProperty,S=Object.getOwnPropertyDescriptor,o=(t,a,s,i)=>{for(var n=i>1?void 0:i?S(a,s):a,l=t.length-1,c;l>=0;l--)(c=t[l])&&(n=(i?c(a,s,n):c(n))||n);return i&&n&&O(a,s,n),n},m=(t=>(t.Filled="filled",t.Outline="outline",t))(m||{}),v=(t=>(t.Medium="medium",t))(v||{}),g=(t=>(t.Primary="primary",t))(g||{});let e=class extends ${constructor(){super(...arguments),this.buttonType="button",this.iconOnly=!1,this.iconBefore="",this.fullWidth=!1,this.iconAfter="",this.href="",this.disabled=!1}render(){const{iconOnly:t,iconBefore:a,iconAfter:s,label:i,href:n,fullWidth:l,disabled:c}=this,w=x({"button--text":!0,"sr-only":t}),d=p`
      <pano-a-icon icon-name="${a}"></pano-a-icon>
      <span class="${w}"> ${i} </span>
      ${t?null:p`<pano-a-icon icon-name="${s}"></pano-a-icon>`}
    `;return n?p`
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
      `:p`
        <button
          class="button"
          ?disabled="${c}"
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
    `,B];o([r({type:String,reflect:!0})],e.prototype,"appearance",2);o([r({type:String,reflect:!0})],e.prototype,"size",2);o([r({type:String,reflect:!0})],e.prototype,"theme",2);o([r({type:String,reflect:!0})],e.prototype,"label",2);o([r({type:String,reflect:!0})],e.prototype,"buttonType",2);o([r({type:Boolean,reflect:!0,attribute:"icon-only"})],e.prototype,"iconOnly",2);o([r({type:String,reflect:!0,attribute:"icon-before"})],e.prototype,"iconBefore",2);o([r({type:Boolean,reflect:!0,attribute:"full-width"})],e.prototype,"fullWidth",2);o([r({type:String,reflect:!0,attribute:"icon-after"})],e.prototype,"iconAfter",2);o([r({type:String,reflect:!0})],e.prototype,"href",2);o([r({type:Boolean,reflect:!0})],e.prototype,"disabled",2);e=o([z("pano-a-button")],e);const W={title:"Design System - Beispiel A/Components/Button",component:"pano-a-button",argTypes:{appearance:{options:m,control:{type:"select"}},size:{options:v,control:{type:"select"}},theme:{options:g,control:{type:"select"}},label:{type:"string"},buttonType:{type:"string"},iconOnly:{type:"boolean"},iconBefore:{type:"string"},fullWidth:{type:"boolean"},iconAfter:{type:"string"},href:{type:"string"},disabled:{type:"boolean"}}},u={args:{appearance:"filled",size:"medium",theme:"primary",label:"Button",buttonType:"button",iconOnly:!1,iconBefore:"",fullWidth:!1,iconAfter:"",href:"",disabled:!1}};var b,f,h;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(h=(f=u.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const D=["Default"];export{u as Default,D as __namedExportsOrder,W as default};
//# sourceMappingURL=component.stories-b498f2a4.js.map
