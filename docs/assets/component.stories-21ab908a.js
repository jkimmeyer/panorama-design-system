import{i as h,s as $,x as p}from"./lit-element-8d145624.js";import{e as x}from"./class-map-10d9f55a.js";import{n,t as w}from"./property-c8c6de82.js";import"./component-24cd48a8.js";const z=h`
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

  .button[icon-only] {
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
`;var B=Object.defineProperty,O=Object.getOwnPropertyDescriptor,o=(t,a,l,i)=>{for(var r=i>1?void 0:i?O(a,l):a,s=t.length-1,c;s>=0;s--)(c=t[s])&&(r=(i?c(a,l,r):c(r))||r);return i&&r&&B(a,l,r),r},m=(t=>(t.Filled="filled",t.Outline="outline",t))(m||{}),v=(t=>(t.Medium="medium",t))(v||{}),g=(t=>(t.Primary="primary",t))(g||{});let e=class extends ${constructor(){super(...arguments),this.buttonType="button",this.iconOnly=!1,this.iconBefore="",this.iconAfter="",this.href="",this.disabled=!1}render(){const{iconOnly:t,iconBefore:a,iconAfter:l,label:i,href:r,disabled:s}=this,c=x({"button--text":!0,"sr-only":t}),b=p`
      <pano-a-icon icon-name="${a}"></pano-a-icon>
      <span class="${c}"> ${i} </span>
      ${t?null:p`<pano-a-icon icon-name="${l}"></pano-a-icon>`}
    `;return r?p`
        <a
          class="button"
          href="${r}"
          ?icon-only="${t}"
          data-appearance="${this.appearance}"
          data-size="${this.size}"
          data-theme="${this.theme}"
        >
          ${b}
        </a>
      `:p`
        <button
          class="button"
          ?disabled="${s}"
          ?icon-only="${t}"
          data-appearance="${this.appearance}"
          data-size="${this.size}"
          data-theme="${this.theme}"
        >
          ${b}
        </button>
      `}};e.styles=[h`
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
    `,z];o([n({type:String,reflect:!0})],e.prototype,"appearance",2);o([n({type:String,reflect:!0})],e.prototype,"size",2);o([n({type:String,reflect:!0})],e.prototype,"theme",2);o([n({type:String,reflect:!0})],e.prototype,"label",2);o([n({type:String,reflect:!0})],e.prototype,"buttonType",2);o([n({type:Boolean,reflect:!0})],e.prototype,"iconOnly",2);o([n({type:String,reflect:!0})],e.prototype,"iconBefore",2);o([n({type:String,reflect:!0})],e.prototype,"iconAfter",2);o([n({type:String,reflect:!0})],e.prototype,"href",2);o([n({type:Boolean,reflect:!0})],e.prototype,"disabled",2);e=o([w("pano-a-button")],e);const T={title:"Design System - Beispiel A/Components/Button",component:"pano-a-button",argTypes:{appearance:{options:m,control:{type:"select"}},size:{options:v,control:{type:"select"}},theme:{options:g,control:{type:"select"}},label:{type:"string"},buttonType:{type:"string"},iconOnly:{type:"boolean"},iconBefore:{type:"string"},iconAfter:{type:"string"},href:{type:"string"},disabled:{type:"boolean"}}},u={args:{appearance:"filled",size:"medium",theme:"primary",label:"Button",buttonType:"button",iconOnly:!1,iconBefore:"",iconAfter:"",href:"",disabled:!1}};var d,f,y;u.parameters={...u.parameters,docs:{...(d=u.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    appearance: "filled",
    size: "medium",
    theme: "primary",
    label: "Button",
    buttonType: "button",
    iconOnly: false,
    iconBefore: "",
    iconAfter: "",
    href: "",
    disabled: false
  }
}`,...(y=(f=u.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const D=["Default"];export{u as Default,D as __namedExportsOrder,T as default};
//# sourceMappingURL=component.stories-21ab908a.js.map
