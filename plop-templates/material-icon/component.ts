import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("material-icon")
export class MaterialIcon extends LitElement {
  static styles = css`
    :host {
      display: inline-flex;
      vertical-align: 0;
    }

    .material-symbols-outlined {
      display: inline-block;
      font-family: "Material Symbols Outlined";
      font-size: 24px; /* Preferred icon size */
      font-style: normal;
      font-weight: 400;
      letter-spacing: normal;
      line-height: 1;
      text-transform: none;
      white-space: nowrap;
      word-wrap: normal;
      direction: ltr;
    }
  `;

  @property({ type: String, reflect: true, attribute: "icon-name" })
  iconName!: string;


  render() {
    const { iconName } = this;
    return html`<span class="material-symbols-outlined">${iconName}</span>`;
  }
}
