import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

export enum ButtonAppearance {
  Primary = "primary",
  Secondary = "secondary",
}

export enum ButtonVariant {
  Text = "text",
  Outline = "outline",
  Filled = "filled",
}

export enum ButtonSize {
  Small = "small",
  Medium = "medium",
  Large = "large",
}
@customElement("pfreundt-button")
export class PfreundtButton extends LitElement {
  static styles = css`
    .pfreundt-button {
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

    .pfreundt-button[data-appearance="primary"] {
      --button-main-color: var(--color-primary);
      --button-contrast-main-color: var(--color-on-primary);
      --button-additional-color: var(--color-neutral-primary);

      --_button-interaction-color: var(--color-primary-interaction);
    }

    .pfreundt-button[data-appearance="secondary"] {
      --button-main-color: var(--color-secondary);
      --button-contrast-main-color: var(--color-on-secondary);
      --button-additional-color: var(--color-neutral-secondary);

      --_button-interaction-color: var(--color-secondary-interaction);
    }

    .pfreundt-button[data-variant="text"] {
      --button-color: var(--button-main-color);
      --button-border-color: transparent;
      --button-background-color: none;
    }
    .pfreundt-button[data-variant="outline"] {
      --button-color: var(--button-main-color);
      --button-border-color: var(--button-main-color);
      --button-background-color: none;
    }
    .pfreundt-button[data-variant="filled"] {
      --button-color: ;
      --button-border-color: ;
      --button-background-color: var(--button-main-color);
    }

    .pfreundt-button[data-size="small"] {
      --button-height: calc(var(--space-small) * 1.5);
    }
    .pfreundt-button[data-size="medium"] {
      --button-height: calc(var(--space-medium) * 1.5);
    }
    .pfreundt-button[data-size="large"] {
      --button-height: calc(var(--space-large) * 1.5);
    }
  `;

  @property({ type: String, reflect: true })
  appearance: ButtonAppearance = ButtonAppearance.Primary;

  @property({ type: String, reflect: true })
  variant: ButtonVariant = ButtonVariant.Text;

  @property({ type: String, reflect: true })
  size: ButtonSize = ButtonSize.Small;

  @property({ type: Boolean, reflect: true })
  disabled: boolean = false;

  @property({ type: String, reflect: true })
  label: string = "PfreundtButton";

  @property({ type: String, reflect: true })
  href!: string;

  render() {
    if (this.href) {
      return html`
        <a
          class="pfreundt-button"
          href="${this.href}"
          data-appearance="${this.appearance}"
          data-variant="${this.variant}"
          data-size="${this.size}"
        >
          ${this.label}
        </a>
      `;
    } else {
      return html`
        <button
          class="pfreundt-button"
          ?disabled="${this.disabled}"
          data-appearance="${this.appearance}"
          data-variant="${this.variant}"
          data-size="${this.size}"
        >
          ${this.label}
        </button>
      `;
    }
  }
}
