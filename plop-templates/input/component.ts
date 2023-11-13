import { LitElement, css, html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { customElement, property, query } from "lit/decorators.js";
import "../material-icon/component";
import { inputStyles } from "./component.styles";

{{> types }}


declare global {
  interface HTMLElementTagNameMap {
    "{{kebabCase meta.prefix}}-input": {{titleCase meta.prefix}}Input;
  }
}

export type InputType = "date" | "email" | "datetime-local" | "month" | "number" | "password" | "tel" | "text" | "time" | "search" | "url" | "week";

@customElement("{{meta.prefix}}-input")
export class {{titleCase meta.prefix }}Input extends LitElement {
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
    `,
    inputStyles,
  ];

  {{> properties}}

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
      _handleInput: handleInput,
    } = this;

    const labelClasses = classMap({
      [`input--label`]: true,
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
          ? html`<material-icon
              class="input--icon"
              data-icon-before
              icon-name="${iconBefore}"
            ></material-icon>`
          : null}
        <input
          class="input--field"
          .disabled="${disabled}"
          id="input"
          ?disabled="${disabled}"
          ?read-only="${readOnly}"
          pattern="${ifDefined(pattern)}"
          placeholder="${ifDefined(placeholder)}"
          value="${ifDefined(value)}"
          type="${inputType}"
          @input="${handleInput}"
          {{> dataAttributes}}
        />
        ${iconAfter
          ? html`<material-icon
              class="input--icon"
              data-icon-after
              icon-name="${iconAfter}"
            ></material-icon>`
          : null}
      </div>
    `
  }
}
