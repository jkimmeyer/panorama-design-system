import { LitElement, css, html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { customElement, property } from "lit/decorators.js";
import "../icon/component";
import { buttonStyles } from "./component.styles";

export enum ButtonAppearance {
  Filled = "filled"
}

export enum ButtonSize {
  Small = "small",
  Medium = "medium",
  Large = "large"
}

export enum ButtonTheme {
  Primary = "primary",
  Secondary = "secondary",
  Highlight = "highlight"
}

declare global {
  interface HTMLElementTagNameMap {
    "zw-button": ZwButton;
  }
}

export type ButtonType = "button" | "submit" | "reset";

@customElement("zw-button")
export class ZwButton extends LitElement {
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

  @property({ type: String, reflect: true })
  appearance!: ButtonAppearance;
  
  @property({ type: String, reflect: true })
  size!: ButtonSize;
  
  @property({ type: String, reflect: true })
  theme!: ButtonTheme;
  
  @property({ type: String, reflect: true })
  label!: string;
  
  @property({ type: String, reflect: true })
  buttonType: ButtonType = "button";
  
  @property({ type: Boolean, reflect: true, attribute: "icon-only" })
  iconOnly: boolean  = false;
  
  @property({ type: String, reflect: true, attribute: "icon-before" })
  iconBefore = "";
  
  @property({ type: Boolean, reflect: true, attribute: "full-width" })
  fullWidth: boolean  = false;
  
  @property({ type: String, reflect: true, attribute: "icon-after" })
  iconAfter = "";
  
  @property({ type: String, reflect: true })
  href = "";
  
  @property({ type: Boolean, reflect: true })
  disabled: boolean  = false;
  

  render() {
    const {
      iconOnly,
      iconBefore,
      iconAfter,
      label,
      href,
      fullWidth,
      disabled
    } = this;

    const labelClasses = classMap({
      "button--text": true,
      "sr-only": iconOnly,
    })

    const innerHtml = html`
      <zw-icon icon-name="${iconBefore}"></zw-icon>
      <span class="${labelClasses}">
        ${label}
      </span>
      ${ iconOnly ? null : html`<zw-icon icon-name="${iconAfter}"></zw-icon>`}
    `

    if(href) {
      return html`
        <a class="button" href="${href}" ?data-icon-only="${iconOnly}" ?data-full-width="${fullWidth}" data-appearance="${this.appearance}" data-size="${this.size}" data-theme="${this.theme}">
          ${innerHtml}
        </a>
      `;
    } else {
      return html`
        <button class="button" ?disabled="${disabled}" ?data-icon-only="${iconOnly}" ?data-full-width="${fullWidth}" data-appearance="${this.appearance}" data-size="${this.size}" data-theme="${this.theme}">
          ${innerHtml}
        </button>
      `;
    }
  }
}
