import { LitElement, css, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";

export enum CardVariant {
  Primary = "primary",
}

const prefix = "ds";

@customElement(`${prefix}-card`)
export class DsCard extends LitElement {
  static styles = css`
    :host {
      --variant: "primary";
    }

    .${unsafeCSS(prefix)}-card {
      padding-inline: 16px;
      padding-block: 32px;
      border: none;
    }

    .${unsafeCSS(prefix)}-card[data-variant="primary"] {
      background-color: #5783db;
    }
  `;

  @property({ type: CardVariant })
  variant: CardVariant = CardVariant.Primary;

  @property({ type: String })
  label: string = "DsCard";

  render() {
    return html`
      <div class="${prefix}-card" data-variant="${this.variant}">
        ${this.label}
      </div>
    `;
  }
}
