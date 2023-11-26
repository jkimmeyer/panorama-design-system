import{i as g,s as x,x as b}from"./lit-element-8d145624.js";import{n as d,t as _}from"./property-c8c6de82.js";import{e as z}from"./query-2518e02e.js";import{e as $}from"./class-map-10d9f55a.js";import"./component-24cd48a8.js";const O=g`
  :host {
    --radio-button-size: var(--space-10);
    font-family: var(--ds-default-font);
  }

  .radio-group {
    --_radio-button-size: var(--radio-button-size);

    display: inline-flex;
    flex-direction: column;
    gap: var(--space-4);
  }

  .radio-group--heading {
    font-size: var(--_radio-button-size);
  }

  .radio {
    position: relative;
    outline-offset: 2px;

    &:focus-within {
      outline: 2px solid var(--color-primary);
    }
  }

  .radio--label {
    display: inline-flex;
    align-items: center;
    gap: var(--space-4);
    position: relative;
    padding-inline-start: calc(var(--space-8) * 2);
    font-size: calc(var(--radio-label-font, var(--radio-button-size)) * 0.8);
    line-height: 1.25;
    font-family: var(--ds-default-font);
    color: var(--color-black);
    cursor: pointer;
  }

  .radio--icon {
    display: none;
    position: absolute;
    top: 50%;
    left: 0;
    font-size: var(--radio-button-size);
    line-height: 1;
    color: var(--color-primary);
    transform: translateY(-50%);
  }

  .radio--label::before {
    content: "";
    position: absolute;
  }

  .radio--label::before {
    inset-inline-start: 0;
    inline-size: 20px;
    block-size: 20px;
    border: 2px solid var(--color-primary);
    border-radius: 100%;
    background-color: var(--color-white);
  }

  .radio--input:disabled {
    cursor: default;

    & + .radio--label {
      cursor: default;
      color: var(--color-disabled);
    }

    & + .radio--label::before {
      color: var(--color-disabled);
      border-color: var(--color-disabled);
    }
  }

  .radio--input:enabled {
    &:checked + .radio--label::before {
      border-color: var(--color-primary);
    }

    &:hover + .radio--label::before {
      background-color: var(--color-primary-container);
      filter: brightness(var(--interaction-state-hover, 1.2));
    }

    &:active + .radio--label::before {
      background-color: var(--color-primary-container);
      filter: brightness(var(--interaction-state-active, 1.4));
    }

    &:checked + .radio--label > .radio--icon {
      display: inline-flex;
    }

    &:checked:hover + .radio--label > .radio--icon {
      color: var(--color-primary-on-container);
    }

    &:checked:active + .radio--label > .radio--icon {
      color: var(--color-primary-on-container);
    }
  }
`;var w=Object.defineProperty,G=Object.getOwnPropertyDescriptor,r=(s,a,t,i)=>{for(var o=i>1?void 0:i?G(a,t):a,l=s.length-1,n;l>=0;l--)(n=s[l])&&(o=(i?n(a,t,o):n(o))||o);return i&&o&&w(a,t,o),o};let e=class extends x{constructor(){super(...arguments),this.disabled=!1,this.hiddenLabel=!1}_handleChange(){console.log({radioButtonValue:this._radioGroupNode.value})}render(){const{disabled:s,hiddenLabel:a,label:t,options:i,name:o,_handleChange:l}=this,n=$({"radio-group--heading":!0,"sr-only":a});return b`
      <div class="radio-group" role="group" aria-labelledby="a11y-radio-group">
        <div class="${n}" id="a11y-radio-group">
          ${t}
        </div>
        ${i.map((h,c)=>Object.entries(h).map(([m,y])=>b`
              <div class="radio">
                <input
                  id="radio-${c}"
                  class="radio--input | sr-only"
                  .disabled="${s}"
                  name="${o}"
                  value="${m}"
                  type="radio"
                  @change="${l}"
                />
                <label class="radio--label" for="radio-${c}">
                  <pano-a-icon
                    class="radio--icon"
                    icon-name="check"
                  ></pano-a-icon>
                  <div>${y}</div>
                </label>
              </div>
            `))}
      </div>
    `}};e.styles=[g`
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
    `,O];r([z("input")],e.prototype,"_radioGroupNode",2);r([d({type:String,reflect:!0})],e.prototype,"name",2);r([d({type:String,reflect:!0})],e.prototype,"label",2);r([d({type:Array,reflect:!0})],e.prototype,"options",2);r([d({type:Boolean,reflect:!0})],e.prototype,"disabled",2);r([d({type:Boolean,reflect:!0})],e.prototype,"hiddenLabel",2);e=r([_("pano-a-radio-group")],e);const S={title:"Design System - Beispiel A/Components/RadioGroup",component:"pano-a-radio-group",argTypes:{name:{type:"string"},label:{type:"string"},options:{control:"Array"},disabled:{type:"boolean"},hiddenLabel:{type:"boolean"}}},p={args:{name:"radio-group-1",label:"Radio Group Label",options:[{"option 1":"Option 1"},{"option 2":"Option 2"}],disabled:!1,hiddenLabel:!1}};var u,f,v;p.parameters={...p.parameters,docs:{...(u=p.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    name: "radio-group-1",
    label: "Radio Group Label",
    options: [{
      "option 1": "Option 1"
    }, {
      "option 2": "Option 2"
    }],
    disabled: false,
    hiddenLabel: false
  }
}`,...(v=(f=p.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const A=["Default"];export{p as Default,A as __namedExportsOrder,S as default};
//# sourceMappingURL=component.stories-004a5002.js.map
