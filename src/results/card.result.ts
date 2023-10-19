import { LitElement, css, html } from "lit";
import { property } from "lit/decorators";

export enum CardVariant {
  "Filled" = "filled",
  "Outline" = "outline",
}

@customElement("plop-test-button")
export class PlopTestButton extends LitElement {
  @property({ type: CardVariant })
  cardVariant: CardVariant = CardVariant.Filled;

  render() {
    return html`
      <div class="card">
        <slot name="card-header"></slot>
        <slot name="card-main"></slot>
        <slot name="card-footer"></slot>
      </div>
    `;
  }
}
