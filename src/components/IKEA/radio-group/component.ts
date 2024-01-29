import { css } from "lit";
import { html, LitElement } from "lit";
import { customElement, query, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import "../icon/component";
import { radioGroupStyles } from "./component.styles";

export type RadioGroupOption = {
  [key: string]: string;
};

@customElement("ikea-radio-group")
export class IkeaRadioGroup extends LitElement {
  @query("input")
  protected _radioGroupNode!: HTMLInputElement;

  protected _handleChange() {
    console.log({ radioButtonValue: this._radioGroupNode.value });
  }

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

  @property({ type: String, reflect: true })
  name!: string;

  @property({ type: String, reflect: true })
  label!: string;

  @property({ type: Array, reflect: true })
  options!: RadioGroupOption[];

  @property({ type: Boolean, reflect: true })
  disabled: boolean = false;

  @property({ type: Boolean, reflect: true })
  hiddenLabel: boolean = false;

  render() {
    const {
      disabled,
      hiddenLabel,
      label,
      options,
      name,
      _handleChange: handleChange,
    } = this;

    const radioGroupHeadingClasses = classMap({
      [`radio-group--heading`]: true,
      [`sr-only`]: hiddenLabel,
    });

    return html`
      <div class="radio-group" role="group" aria-labelledby="a11y-radio-group">
        <div class="${radioGroupHeadingClasses}" id="a11y-radio-group">
          ${label}
        </div>
        ${options.map((option, index) =>
          Object.entries(option).map(([optionsKey, optionsValue]) => {
            return html`
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
                <label class="radio--label" for="radio-${index}">
                  <ikea-icon class="radio--icon" icon-name="check"></ikea-icon>
                  <div>${optionsValue}</div>
                </label>
              </div>
            `;
          }),
        )}
      </div>
    `;
  }
}
