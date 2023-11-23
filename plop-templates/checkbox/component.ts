import { css } from "lit";
import { html, LitElement } from "lit";
import { customElement, query, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import "../icon/component";
import { checkboxStyles } from "./component.styles";

{{> types }}

@customElement("{{meta.prefix}}-checkbox")
export class {{properCase meta.prefix}}Checkbox extends LitElement {
  @query("input")
  protected _checkboxNode!: HTMLInputElement;

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
    checkboxStyles,
  ];

  protected _handleChange() {
    const { checked, indeterminate } = this._checkboxNode;
    this.checked = checked;
    this.indeterminate = indeterminate;
  }

  {{> properties}}

  render() {
    const {
      checked,
      disabled,
      hiddenLabel,
      indeterminate,
      label,
      name,
      value,
      _handleChange: handleChange,
    } = this;

    const labelClasses = classMap({
      [`checkbox--label`]: true,
      [`sr-only`]: hiddenLabel,
    });

    return html`
      <input
        id="checkbox"
        class="checkbox--input | sr-only"
        .disabled="${disabled}"
        .checked="${checked}"
        aria-checked="${indeterminate ? "mixed" : checked}"
        name="${name}"
        value="${value}"
        type="checkbox"
        @change="${handleChange}"
      />
      <label class="${labelClasses}" for="checkbox">
        <{{meta.prefix}}-icon class="checkbox--icon" icon-name="check"></{{meta.prefix}}-icon>
        <div>${label}</div>
      </label>
    `;
  }
}
