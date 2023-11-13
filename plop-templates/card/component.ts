import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import "../material-icon/component";
import { cardStyles } from "./component.styles";

{{> types }}


declare global {
  interface HTMLElementTagNameMap {
    "{{kebabCase meta.prefix}}-card": {{titleCase meta.prefix}}Button;
  }
}

@customElement("{{meta.prefix}}-card")
export class {{titleCase meta.prefix}}Button extends LitElement {
  static styles = [
    css`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      a, card {
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
    cardStyles,
  ];

  {{> properties}}

  render() {
    const {
      href,
      disabled
    } = this;

    if(href) {
      return html`
        <a class="card" href="${href}" {{> dataAttributes}}>
          <slot></slot>
        </a>
      `;
    } else {
      return html`
        <div class="card" ?disabled="${disabled}" {{> dataAttributes}}>
          <slot></slot>
        </div>
      `;
    }
  }
}
