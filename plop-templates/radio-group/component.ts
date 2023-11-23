import { css } from "lit";
import { html, LitElement } from "lit";
import { customElement, query, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import "../icon/component";
import { radioGroupStyles } from "./component.styles";

type RadioGroupOptions = {
  [key: string]: string;
};

@customElement("{{meta.prefix}}-radio-group")
export class {{properCase meta.prefix}}RadioGroup extends LitElement {
  @query("input")
  protected _radioGroupNode!: HTMLInputElement;

  static styles = [
    css`
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
    `,
    radioGroupStyles,
  ];

  {{> properties}}

  render() {
    const {
      disabled,
      hiddenLabel,
      label,
      options,
      name,
      _handleChange: handleChange,
    } = this;

    const labelClasses = classMap({
      [`radio--label`]: true,
      [`sr-only`]: hiddenLabel,
    });

    return html`
      <div class="radio-group" role="group" aria-labelledby="a11y-radio-group">
      	<div class="radio-group--heading" id="a11y-radio-group">${label}</div>
      ${Object.entries(options).map(([optionsKey, optionsValue], index) =>
        html`
        <div class="radio">
          <input
            id="radio-${index}"
            class="radio--input | sr-only"
            .disabled="${disabled}"
            name="${name}"
            value="${optionsKey}"
            type="radio"
            @change="${handleChange}"
          />
          <label class="${labelClasses}" for="radio-${index}">
            <{{meta.prefix}}-icon class="radio--icon" icon-name="check"></{{meta.prefix}}-icon>
            <div>${optionsValue}</div>
          </label>
        </div>
        `
      )}
    </div>
    `;
  }
}
