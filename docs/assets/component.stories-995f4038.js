import{i as y,s as w,x as p}from"./lit-element-8d145624.js";import{e as $}from"./class-map-10d9f55a.js";import{n,t as x}from"./component-e249f554.js";const z=y`
  .button {
    --button-height: 48px;
    --button-border: 1px solid;
    --button-border-radius: calc(var(--ds-border-radius));
    --button-inline-padding: var(--space-medium);

    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: var(--space-medium);
    min-height: var(--button-height);
    border: var(--button-border) var(--button-border-color);
    border-radius: var(--button-border-radius);
    padding-inline: var(--button-inline-padding);
    text-decoration: none;
    color: var(--button-color);
    background-color: var(--button-background-color);
    cursor: pointer;
    font-family: var(--ds-default-font);
    font-size: var(--ds-default-font-size);
    line-height: var(--ds-default-line-height);
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
    filter: brightness(1.2);
  }

  .button:not(:disabled):where(:active) {
    filter: brightness(1.3);
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

  .button:where([data-theme="secondary"]) {
    --button-main-color: var(--color-secondary);
    --button-on-main-color: var(--color-on-secondary);
    --button-container-color: var(--color-secondary-container);
    --button-on-container-color: var(--color-secondary-on-container);
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

  .button:where([data-size="small"]) {
    --button-height: calc(var(--space-small) * 1.5);
  }

  .button:where([data-size="medium"]) {
    --button-height: calc(var(--space-medium) * 1.5);
  }

  .button:where([data-size="large"]) {
    --button-height: calc(var(--space-large) * 1.5);
  }
`;var O=Object.defineProperty,S=Object.getOwnPropertyDescriptor,o=(t,a,l,i)=>{for(var r=i>1?void 0:i?S(a,l):a,c=t.length-1,s;c>=0;c--)(s=t[c])&&(r=(i?s(a,l,r):s(r))||r);return i&&r&&O(a,l,r),r},h=(t=>(t.Filled="filled",t.Outline="outline",t))(h||{}),g=(t=>(t.Small="small",t.Medium="medium",t.Large="large",t))(g||{}),v=(t=>(t.Primary="primary",t.Secondary="secondary",t))(v||{});let e=class extends w{constructor(){super(...arguments),this.buttonType="button",this.iconOnly=!1,this.iconBefore="",this.iconAfter="",this.href="",this.disabled=!1}render(){const{iconOnly:t,iconBefore:a,iconAfter:l,label:i,href:r,disabled:c}=this,s=$({"button--text":!0,"sr-only":t}),b=p`
      <material-icon icon-name="${a}"></material-icon>
      <span class="${s}"> ${i} </span>
      ${t?null:p`<material-icon icon-name="${l}"></material-icon>`}
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
          ?disabled="${c}"
          ?icon-only="${t}"
          data-appearance="${this.appearance}"
          data-size="${this.size}"
          data-theme="${this.theme}"
        >
          ${b}
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
    `,z];o([n({type:String,reflect:!0})],e.prototype,"appearance",2);o([n({type:String,reflect:!0})],e.prototype,"size",2);o([n({type:String,reflect:!0})],e.prototype,"theme",2);o([n({type:String,reflect:!0})],e.prototype,"label",2);o([n({type:String,reflect:!0})],e.prototype,"buttonType",2);o([n({type:Boolean,reflect:!0})],e.prototype,"iconOnly",2);o([n({type:String,reflect:!0})],e.prototype,"iconBefore",2);o([n({type:String,reflect:!0})],e.prototype,"iconAfter",2);o([n({type:String,reflect:!0})],e.prototype,"href",2);o([n({type:Boolean,reflect:!0})],e.prototype,"disabled",2);e=o([x("pano-button")],e);const A={component:"pano-button",argTypes:{appearance:{options:h,control:{type:"select"}},size:{options:g,control:{type:"select"}},theme:{options:v,control:{type:"select"}},label:{type:"string"},buttonType:{type:"string"},iconOnly:{type:"boolean"},iconBefore:{type:"string"},iconAfter:{type:"string"},href:{type:"string"},disabled:{type:"boolean"}}},u={args:{appearance:"filled",size:"small",theme:"primary",label:"Button",buttonType:"button",iconOnly:!1,iconBefore:"",iconAfter:"",href:"",disabled:!1}};var d,m,f;u.parameters={...u.parameters,docs:{...(d=u.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    appearance: "filled",
    size: "small",
    theme: "primary",
    label: "Button",
    buttonType: "button",
    iconOnly: false,
    iconBefore: "",
    iconAfter: "",
    href: "",
    disabled: false
  }
}`,...(f=(m=u.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};const T=["Default"];export{u as Default,T as __namedExportsOrder,A as default};
//# sourceMappingURL=component.stories-995f4038.js.map
