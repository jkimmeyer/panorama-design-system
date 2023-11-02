import { LitElement, css, html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { customElement, property } from "lit/decorators.js";
import "../material-icon/component";
import { buttonStyles } from "./component.styles";

{{> typesPartial attributes=designSystem.components.button }}


export type ButtonType = "button" | "submit" | "reset";

@customElement("{{designSystem.prefix}}-button")
export class {{titleCase designSystem.prefix}}Button extends LitElement {
  static styles = [
    css`
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

  {{> propertiesPartial attributes=designSystem.components.button }}


  @property({ type: Boolean, reflect: true})
  disabled: boolean = false;

  @property({ type: String, reflect: true })
  label!: string;

  @property({ type: String, reflect: true })
  href: string | undefined = undefined;

  @property({ type: String, reflect: true })
  buttonType: ButtonType = "button";

  @property({ type: String, reflect: true })
  iconBefore: string = "";

  @property({ type: String, reflect: true })
  iconAfter: string = "";

  @property({ type: Boolean, reflect: true })
  iconOnly: boolean = false;

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
      <material-icon icon-name="${iconBefore}"></material-icon>
      <span class="${labelClasses}">
        ${label}
      </span>
      ${ iconOnly ? null : html`<material-icon icon-name="${iconAfter}"></material-icon>`}
    `

    if(href) {
      return html`
        <a class="button" href="${href}" ?icon-only="${iconOnly}" {{> dataAttrPartial designSystem.components.button}}>
          ${innerHtml}
        </a>
      `;
    } else {
      return html`
        <button class="button" ?disabled="${disabled}" ?icon-only="${iconOnly}" {{> dataAttrPartial designSystem.components.button}}>
          ${innerHtml}
        </button>
      `;
    }
  }
}
