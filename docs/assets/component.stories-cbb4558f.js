import{i as m,s as x,x as u}from"./lit-element-8d145624.js";import{n as d,t as _}from"./property-c8c6de82.js";import{e as $}from"./query-2518e02e.js";import{e as O}from"./class-map-10d9f55a.js";import"./component-24cd48a8.js";const w=m`
  :host {
    --radio-button-size: var(--space-10);

    font-family: var(--ds-default-font);
  }

  .radio-group {
    --_radio-button-size: var(--radio-button-size);

    display: flex;
    flex-direction: column;
    gap: var(--space-4);
  }

  .radio-group--items {
    display: flex;
  }

  .radio-group--heading {
    display: block;
    font-size: var(--_radio-button-size);
  }

  .radio {
    position: relative;
    outline-offset: 2px;
    border: 1px solid;

    & + & {
      border-left: none;
    }

    &:focus-within {
      outline: 2px solid var(--color-primary);
    }
  }

  .radio--label {
    display: inline-flex;
    align-items: center;
    gap: var(--space-4);
    position: relative;
    padding: var(--space-4) var(--space-8);
    font-family: var(--ds-default-font);
    font-size: calc(var(--radio-label-font, var(--radio-button-size)) * 0.8);
    line-height: 1.25;
    color: var(--color-black);
    cursor: pointer;
  }

  .radio--input:disabled {
    cursor: default;

    & + .radio--label {
      color: var(--color-disabled);
      cursor: default;
    }
  }

  .radio--input:enabled {
    &:checked + .radio--label {
      border-color: var(--color-primary);
      color: var(--color-on-primary);
      background-color: var(--color-primary);
    }

    &:hover + .radio--label {
      background-color: var(--color-primary-container);
      filter: brightness(var(--interaction-state-hover, 1.2));
    }

    &:active + .radio--label {
      background-color: var(--color-primary-container);
      filter: brightness(var(--interaction-state-active, 1.4));
    }

    /* stylelint-disable-next-line selector-max-combinators */
    &:checked:hover + .radio--label {
      color: var(--color-primary-on-container);
    }

    /* stylelint-disable-next-line selector-max-combinators */
    &:checked:active + .radio--label {
      color: var(--color-primary-on-container);
    }
  }
`;var z=Object.defineProperty,G=Object.getOwnPropertyDescriptor,r=(s,a,t,i)=>{for(var o=i>1?void 0:i?G(a,t):a,l=s.length-1,n;l>=0;l--)(n=s[l])&&(o=(i?n(a,t,o):n(o))||o);return i&&o&&z(a,t,o),o};let e=class extends x{constructor(){super(...arguments),this.disabled=!1,this.hiddenLabel=!1}_handleChange(){console.log({radioButtonValue:this._radioGroupNode.value})}render(){const{disabled:s,hiddenLabel:a,label:t,options:i,name:o,_handleChange:l}=this,n=O({"radio-group--heading":!0,"sr-only":a});return u`
      <div class="radio-group" role="group" aria-labelledby="a11y-radio-group">
        <div class="${n}" id="a11y-radio-group">
          ${t}
        </div>

        <div class="radio-group--items">
          ${i.map((g,c)=>Object.entries(g).map(([y,h])=>u`
                <div class="radio">
                  <input
                    id="radio-${c}"
                    class="radio--input | sr-only"
                    .disabled="${s}"
                    name="${o}"
                    value="${y}"
                    type="radio"
                    @change="${l}"
                  />
                  <label class="radio--label" for="radio-${c}">
                    <div>${h}</div>
                  </label>
                </div>
              `))}
        </div>
      </div>
    `}};e.styles=[m`
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
    `,w];r([$("input")],e.prototype,"_radioGroupNode",2);r([d({type:String,reflect:!0})],e.prototype,"name",2);r([d({type:String,reflect:!0})],e.prototype,"label",2);r([d({type:Array,reflect:!0})],e.prototype,"options",2);r([d({type:Boolean,reflect:!0})],e.prototype,"disabled",2);r([d({type:Boolean,reflect:!0})],e.prototype,"hiddenLabel",2);e=r([_("pano-a-radio-group")],e);const A={title:"Design System - Beispiel A/Components/RadioGroup",component:"pano-a-radio-group",argTypes:{name:{type:"string"},label:{type:"string"},options:{control:"Array"},disabled:{type:"boolean"},hiddenLabel:{type:"boolean"}}},p={args:{name:"radio-group-1",label:"Radio Group Label",options:[{"option 1":"Option 1"},{"option 2":"Option 2"}],disabled:!1,hiddenLabel:!1}};var b,f,v;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(v=(f=p.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const B=["Default"];export{p as Default,B as __namedExportsOrder,A as default};
//# sourceMappingURL=component.stories-cbb4558f.js.map
