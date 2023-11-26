import { css } from "lit"

export const checkboxStyles = css`
  :host {
    --checkbox-size: var(--space-10);

    display: inline-flex;
    position: relative;
  }

  .checkbox {
    --_checkbox-size: var(--checkbox-size);

    outline-offset: 2px;

    &:focus-within {
      outline: 2px solid var(--color-primary);
    }

    {{#each variants.sizes}}
    &[data-size="{{this}}"] {
      --_checkbox-size: calc(var(--size-factor-{{this}}) * var(--checkbox-size));
    }
    {{/each}}
  }

  .checkbox--label {
    display: inline-flex;
    align-items: center;
    gap: var(--space-4);
    position: relative;
    padding-inline-start: calc(var(--_checkbox-size) * 1.5);
    font-family: var(--ds-default-font);
    font-size: var(--radio-label-font, var(--radio-button-size));
    color: var(--color-black);
    cursor: pointer;
  }

  .checkbox--icon {
    display: none;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    font-size: var(--_checkbox-size);
    color: var(--color-primary)
  }

  .checkbox--label::before {
    inset-inline-start: 0;
    inline-size: var(--_checkbox-size);
    block-size: var(--_checkbox-size);
    border: 2px solid var(--color-primary);
    border-radius: calc(var(--_checkbox-size) * 0.3);
    background-color: var(--color-white);
  }

  .checkbox--label::before {
    content: "";
    position: absolute;
  }

  .checkbox--input:checked + .checkbox--label::before {
    border-color: var(--color-primary);
  }

  .checkbox--input:disabled {
    cursor: default;

    & + .checkbox--label {
      cursor: default;
      color: var(--color-disabled);
    }

    & + .checkbox--label::before {
      color: var(--color-disabled);
      border-color: var(--color-disabled);
    }
  }

  .checkbox--input:not(:disabled):hover + .checkbox--label::before {
    background-color: var(--color-primary-container);
    filter: brightness(var(--interaction-state-hover, 1.2));
  }

  .checkbox--input:not(:disabled):active + .checkbox--label::before {
    background-color: var(--color-primary-container);
    filter: brightness(var(--interaction-state-active, 1.4));
  }

  /* stylelint-disable-next-line selector-max-combinators */
  .checkbox--input:checked + .checkbox--label > .checkbox--icon {
    display: inline-flex;
  }

  .checkbox--input[aria-checked="mixed"] + .checkbox--label > .checkbox--icon {
    display: inline-flex;
  }

  .checkbox--input:checked:hover + .checkbox--label > .checkbox--icon {
    color: var(--color-primary-on-container);
  }

  .checkbox--input:checked:active + .checkbox--label > .checkbox--icon {
    color: var(--color-primary-on-container);
  }
`
