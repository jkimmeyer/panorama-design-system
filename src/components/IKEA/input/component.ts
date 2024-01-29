import { LitElement, css, html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { customElement, property, query } from "lit/decorators.js";
import "../icon/component";
import { inputStyles } from "./component.styles";

export enum InputSize {
  Small = "small",
  Medium = "medium",
}

declare global {
  interface HTMLElementTagNameMap {
    "ikea-input": IkeaInput;
  }
}

export type InputType =
  | "date"
  | "email"
  | "datetime-local"
  | "month"
  | "number"
  | "password"
  | "tel"
  | "text"
  | "time"
  | "search"
  | "url"
  | "week";

@customElement("ikea-input")
export class IkeaInput extends LitElement {
  @query("input")
  protected _input!: HTMLInputElement;

  protected _value = "";

  protected _handleInput({ target }: Event) {
    this.value = (target as HTMLInputElement).value;
  }

  static styles = [
    css`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      input {
        outline: none;
        margin: 0;
        padding: 0;
        font: inherit;
      }

      .required {
        &::after {
          content: "*";
        }
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
    inputStyles,
  ];

  @property({ type: String, reflect: true })
  size!: InputSize;

  @property({ type: Boolean, reflect: true })
  disabled: boolean = false;

  @property({ type: Boolean, reflect: true })
  hiddenLabel: boolean = false;

  @property({ type: String, reflect: true, attribute: "input-type" })
  inputType: InputType = "text";

  @property({ type: String, reflect: true })
  label!: string;

  @property({ type: Boolean, reflect: true, attribute: "read-only" })
  readOnly: boolean = false;

  @property({ type: Boolean, reflect: true })
  required: boolean = false;

  @property({ type: String, reflect: true })
  pattern: string | undefined = undefined;

  @property({ type: String, reflect: true })
  placeholder: string | undefined = undefined;

  @property({ type: String, reflect: true })
  value: string | undefined = undefined;

  @property({ type: String, reflect: true, attribute: "icon-before" })
  iconBefore: string | undefined = undefined;

  @property({ type: String, reflect: true, attribute: "icon-after" })
  iconAfter: string | undefined = undefined;

  render() {
    const {
      disabled,
      hiddenLabel,
      inputType,
      label,
      readOnly,
      value,
      iconBefore,
      iconAfter,
      pattern,
      placeholder,
      required,
      _handleInput: handleInput,
    } = this;

    const labelClasses = classMap({
      [`input--label`]: true,
      [`required`]: required,
      [`sr-only`]: hiddenLabel,
    });

    return html`
      <label class="${labelClasses}" for="input">${label}</label>
      <div
        class="input"
        ?data-icon-before="${!!iconBefore}"
        ?data-icon-after="${!!iconAfter}"
      >
        ${iconBefore
          ? html`<ikea-icon
              class="input--icon"
              data-icon-before
              icon-name="${iconBefore}"
            ></ikea-icon>`
          : null}
        <input
          class="input--field"
          .disabled="${disabled}"
          id="input"
          ?disabled="${disabled}"
          ?readonly="${readOnly}"
          ?required="${required}"
          pattern="${ifDefined(pattern)}"
          placeholder="${ifDefined(placeholder)}"
          value="${ifDefined(value)}"
          type="${inputType}"
          @input="${handleInput}"
          data-size="${this.size}"
        />
        ${iconAfter
          ? html`<ikea-icon
              class="input--icon"
              data-icon-after
              icon-name="${iconAfter}"
            ></ikea-icon>`
          : null}
      </div>
    `;
  }
}
