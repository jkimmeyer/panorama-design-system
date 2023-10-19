import { html, property, query, customElement, LitElement } from "lit-element";
import { classMap } from "lit/directives/class-map.js";

@customElement("ds-checkbox")
export class DsCheckbox extends LitElement {
  @query("input")
  protected _checkboxNode!: HTMLInputElement;

  static styles = `css
    :host {

    }
  `;

  protected _handleChange() {
    const { checked, indeterminate } = this._checkboxNode;
    this.checked = checked;
    this.indeterminate = indeterminate;
  }

  @property({ type: Boolean, reflect: true })
  checked = false;

  @property({ type: Boolean, reflect: true })
  disabled = false;

  @property({ type: Boolean, reflect: true, attribute: "hide-label" })
  hideLabel = false;

  @property({ type: Boolean, reflect: true })
  indeterminate = false;

  @property({ attribute: "label" })
  label = "";

  @property()
  name!: string;

  @property()
  value!: string;

  render() {
    const {
      checked,
      disabled,
      hideLabel,
      indeterminate,
      label,
      name,
      value,
      _handleChange: handleChange,
    } = this;

    const labelClasses = classMap({
      [`checkbox--label`]: true,
      [`sr-only`]: hideLabel,
    });

    return html`
      <input
        id="checkbox"
        type="checkbox"
        class="checkbox--input"
        .disabled="${disabled}"
        .checked="${checked}"
        aria-checked="${indeterminate ? "mixed" : checked}"
        name="${name}"
        value="${value}"
        type="checkbox"
        @change="${handleChange}"
      />
      <label class="${labelClasses}">${label}</label>
    `;
  }
}
