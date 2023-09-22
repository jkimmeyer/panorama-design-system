import { LitElement, css, html, literal, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";

export enum ButtonAppearance {
{{#each designSystem.button.appearances}}
  {{titleCase this}} = "{{this}}",
{{/each}}
}

export enum ButtonSize {
{{#each designSystem.button.sizes}}
  {{titleCase this}} = "{{this}}",
{{/each}}
}

export enum ButtonVariant {
{{#each designSystem.button.variants}}
  {{titleCase this}} = "{{this}}",
{{/each}}
}

@customElement("{{designSystem.prefix}}-button")
export class {{titleCase designSystem.prefix}}Button extends LitElement {
  static styles = css`
    .{{designSystem.prefix}}-button {
      --button-height: 48px;
      --button-border: 1px solid;
      --button-border-radius: calc(var(--ds-border-radius));
      --button-inline-padding: var(--space-medium);

      --_button-main-color: var(--button-main-color);
      --_button-contrast-main-color: var(--button-contrast-main-color);
      --_button-interaction-color: var(--button-interaction-color);

      display: block;
      min-height: var(--button-height);
      padding-inline: var(--button-inline-padding);
      border: var(--button-border) var(--button-border-color);
      cursor: pointer;
      border-radius: var(--button-border-radius);
      color: var(--button-color);
      background-color: var(--button-background-color);
      text-decoration: none;
    }

    /* Link Styles */
    .pfreundt-button:hover,
    .pfreundt-button:visited,
    .pfreundt-button:active {
      text-decoration: none;
    }

    .pfreundt-button:not(:disabled):focus,
    .pfreundt-button:not(:disabled):hover,
    .pfreundt-button:not(:disabled):active {
      --button-main-color: var(--_button-interaction-color);
    }

    {{#with designSystem}}
    {{#each button.appearances}}

    .{{../prefix}}-button[data-appearance="{{this}}"] {
      --button-main-color: var(--color-{{this}});
      --button-contrast-main-color: var(--color-on-{{this}});
      --button-additional-color: var(--color-neutral-{{this}});

      --_button-interaction-color: var(--color-{{this}}-interaction);
    }
    {{/each}}

    {{#each button.variants}}
    .{{../prefix}}-button[data-variant="{{this}}"] {
      --button-color: {{applyColor "button" ../variants this "text"}};
      --button-border-color: {{applyColor "button" ../variants this "border"}};
      --button-background-color: {{applyColor "button" ../variants this "background"}};
    }
    {{/each}}

    {{#each button.sizes}}
    .{{../prefix}}-button[data-size="{{this}}"] {
      --button-height: calc(var(--space-{{this}}) * 1.5);
    }
    {{/each}}
    {{/with}}
  `;

  {{#each designSystem.button }}
    @property({ type: Button{{singularize(titleCase @key)}} })
    {{singularize @key}}: Button{{singularize(titleCase @key)}} = Button{{signularize(titleCase @key)}}.{{titleCase this.[0]}};

  {{/each}}

  @property({ type: Boolean})
  disabled: boolean = false;

  @property({ type: String })
  label: string = "{{titleCase designSystem.prefix}}Button";

  @property({ type: String })
  href: string = undefined;

  render() {
    if(this.href) {
      return html`
        <a class="{{designSystem.prefix}}-button" href="${this.href || nothing}" {{> dataAttrPartial designSystem.button}}>
          ${this.label}
        </button>
      `;
    } else {
      return html`
        <button class="{{designSystem.prefix}}-button" disabled="${this.disabled || nothing}" {{> dataAttrPartial designSystem.button}}>
          ${this.label}
        </button>
      `;
    }
  }
}
