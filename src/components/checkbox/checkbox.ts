import { css } from "lit";
import { html, property, query, customElement, LitElement } from "lit-element";
import { classMap } from "lit/directives/class-map.js";
import "../icon/icon";

@customElement("pfreundt-checkbox")
export class PfreundtCheckbox extends LitElement {
  @query("input")
  protected _checkboxNode!: HTMLInputElement;

  static styles = css`
    :host {
      position: relative;
    }

    .checkbox--label {
      display: inline-flex;
      align-items: center;
      position: relative;
      padding-inline-start: calc(var(--space-medium) * 2);
      color: var(--color-primary-700);
      gap: var(--space-small);
      cursor: pointer;
    }

    .checkbox--icon {
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      display: none;
    }

    .checkbox--label::before,
    .checkbox--label::after {
      content: "";
      position: absolute;
      z-index: var(--zLayer-default, 1);
    }

    .checkbox--label::before {
      inset-inline-start: 0;
      inline-size: 20px;
      block-size: 20px;
      border: 2px solid var(--color-primary);
      border-radius: var(--space-small);
      background-color: var(--color-white);
    }

    .checkbox--input:checked + .checkbox--label::before {
      border-color: var(--color-primary);
    }

    .checkbox--input:focus + .checkbox--label::before,
    .checkbox--input:hover + .checkbox--label::before {
      border-color: var(--color-secondary);
    }

    .checkbox--input:checked + .checkbox--label > .checkbox--icon {
      display: inline-flex;
    }

    .sr-only {
      visibility: hidden;
      position: absolute;
      overflow: hidden;
      clip: rect(0 0 0 0);
      width: 1px;
      height: 1px;
      margin: -1px;
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

  @property({ type: Boolean, reflect: true, attribute: "hidden-label" })
  hiddenLabel = false;

  @property({ type: Boolean, reflect: true })
  indeterminate = false;

  @property({ type: String, reflect: true })
  label = "";

  @property()
  name!: string;

  @property()
  value!: string;

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
        type="checkbox"
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
        <pfreundt-icon class="checkbox--icon" icon-name="check"></pfreundt-icon>
        <div>${label}</div>
      </label>
    `;
  }
}
