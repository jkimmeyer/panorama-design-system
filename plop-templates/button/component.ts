import { LitElement, css, html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { customElement, property } from "lit/decorators.js";
import "../icon/component";
import { buttonStyles } from "./component.styles";

{{> types }}


declare global {
  interface HTMLElementTagNameMap {
    "{{kebabCase meta.prefix}}-button": {{properCase meta.prefix}}Button;
  }
}

export type ButtonType = "button" | "submit" | "reset";

@customElement("{{meta.prefix}}-button")
export class {{properCase meta.prefix}}Button extends LitElement {
  static styles = [
    css`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      a, button {
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
    buttonStyles,
  ];

  {{> properties}}

  render() {
    const {
      iconOnly,
      iconBefore,
      iconAfter,
      label,
      href,
      disabled
    } = this;

    const labelClasses = classMap({
      "button--text": true,
      "sr-only": iconOnly,
    })

    const innerHtml = html`
      <{{meta.prefix}}-icon icon-name="${iconBefore}"></{{meta.prefix}}-icon>
      <span class="${labelClasses}">
        ${label}
      </span>
      ${ iconOnly ? null : html`<{{meta.prefix}}-icon icon-name="${iconAfter}"></{{meta.prefix}}-icon>`}
    `

    if(href) {
      return html`
        <a class="button" href="${href}" ?icon-only="${iconOnly}" {{> dataAttributes}}>
          ${innerHtml}
        </a>
      `;
    } else {
      return html`
        <button class="button" ?disabled="${disabled}" ?icon-only="${iconOnly}" {{> dataAttributes}}>
          ${innerHtml}
        </button>
      `;
    }
  }
}
