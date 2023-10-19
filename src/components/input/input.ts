import {
  css,
  query,
  property,
  html,
  customElement,
  LitElement,
} from "lit-element";
import { classMap } from "lit/directives/class-map.js";

type InputType = "text" | "password" | "email" | "number" | "search";

@customElement("pfreundt-input")
export class PfreundtInput extends LitElement {
  @query("input")
  protected _input!: HTMLInputElement;

  protected _value = "";

  protected _handleInput({ target }: Event) {
    this.value = (target as HTMLInputElement).value;
  }

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      gap: var(--space-small);
    }

    .input--field {
      padding: var(--space-small);
      border: 1px solid var(--color-primary);
    }
  `;

  @property({ type: Boolean, reflect: true })
  disabled = false;

  @property({ type: Boolean, reflect: true })
  hiddenLabel = false;

  @property({ type: String, reflect: true, attribute: "input-type" })
  inputType: InputType = "text";

  @property({ type: String, reflect: true })
  label = "";

  @property({ type: Boolean, reflect: true })
  readonly = false;

  @property({ type: Boolean, reflect: true })
  required = false;

  @property()
  pattern = "";

  @property({ reflect: true })
  placeholder = "";

  @property()
  value!: string;

  @property()
  autocomplete = "";

  render() {
    const {
      autocomplete,
      disabled,
      hiddenLabel,
      inputType,
      label,
      readonly,
      value,
      _handleInput: handleInput,
    } = this;

    const labelClasses = classMap({
      [`input--label`]: true,
      [`sr-only`]: hiddenLabel,
    });
    return html`
      <label class="${labelClasses}">${label}</label>
      <input
        .autocomplete="${autocomplete}"
        class="input--field"
        .disabled="${disabled}"
        id="input"
        ?disabled="${disabled}"
        ?readonly="${readonly}"
        value="${value}"
        type="${inputType}"
        @input="${handleInput}"
      />
    `;
  }
}
