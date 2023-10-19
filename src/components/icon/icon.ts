import { css, html, property, query, customElement, LitElement } from "lit";

@customElement("pfreundt-icon")
export class PfreundtIcon extends LitElement {
  static styles = css`
    :host {
      display: inline-flex;
      vertical-align: 0;
    }

    .material-symbols-outlined {
      font-family: "Material Symbols Outlined";
      font-weight: normal;
      font-style: normal;
      font-size: 24px; /* Preferred icon size */
      display: inline-block;
      line-height: 1;
      text-transform: none;
      letter-spacing: normal;
      word-wrap: normal;
      white-space: nowrap;
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
