import { LitElement, css, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";

export enum ButtonVariant {
  Primary = "primary",
}

const prefix = "ds";

@customElement(`${prefix}-button`)
export class DsButton extends LitElement {
  static styles = css`
    :host {
      --variant: "primary";
    }

    .${unsafeCSS(prefix)}-button {
      padding-inline: 16px;
      padding-block: 8px;
      border: none;
      cursor: pointer;
    }

    .${unsafeCSS(prefix)}-button[data-variant="primary"] {
      background-color: #5783db;
    }

    .${unsafeCSS(prefix)}-button:focus,
      .${unsafeCSS(prefix)}-button:hover,
      .${unsafeCSS(prefix)}-button:active {
      background-color: #55c2da;
    }
  `;

  @property({ type: ButtonVariant })
  variant: ButtonVariant = ButtonVariant.Primary;

  @property({ type: String })
  label: string = "DsButton";

  render() {
    return html`
      <button class="${prefix}-button" data-variant="${this.variant}">
        ${this.label}
      </button>
    `;
  }
}
