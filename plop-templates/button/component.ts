import { LitElement, css, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";

export enum ButtonVariant {
{{#each designSystem.button.variants}}
  {{titleCase this}} = "{{this}}",
{{/each}}
}

@customElement("{{designSystem.prefix}}-button")
export class {{titleCase designSystem.prefix}}Button extends LitElement {
  static styles = css`
    :host {
      --variant: "primary";
    }

    .{{designSystem.prefix}}-button {
      padding-inline: var(--space-16);
      padding-block: var(--space-8);
      border: none;
      cursor: pointer;
    }
    {{#with designSystem}}
    {{#each button.variants}}

    .{{../prefix}}-button[data-variant="{{this}}"] {
      background-color: var(--color-button-{{this}});
    }
    {{/each}}
    {{/with}}

    .{{designSystem.prefix}}-button:focus,
    .{{designSystem.prefix}}-button:hover,
    .{{designSystem.prefix}}-button:active {
      background-color: var(--color-button-on-{{designSystem.button.variants.[0]}});
    }
  `;

  @property({ type: ButtonVariant })
  variant: ButtonVariant = ButtonVariant.{{titleCase designSystem.button.variants.[0]}};

  @property({ type: String })
  label: string = "{{titleCase designSystem.prefix}}Button";

  render() {
    return html`
      <button class="{{designSystem.prefix}}-button" data-variant="${this.variant}">
        ${this.label}
      </button>
    `;
  }
}
