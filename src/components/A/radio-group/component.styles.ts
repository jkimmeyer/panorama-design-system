import { css } from "lit";

export const radioGroupStyles = css`
  :host {
    --radio-button-size: var(--space-10);

    font-family: var(--ds-default-font);
  }

  .radio-group {
    --_radio-button-size: var(--radio-button-size);

    display: flex;
    flex-direction: column;
    gap: var(--space-4);
  }

  .radio-group--items {
    display: flex;
  }

  .radio-group--heading {
    display: block;
    font-size: var(--_radio-button-size);
  }

  .radio {
    position: relative;
    outline-offset: 2px;
    border: 1px solid;

    & + & {
      border-left: none;
    }

    &:focus-within {
      outline: 2px solid var(--color-primary);
    }
  }

  .radio--label {
    display: inline-flex;
    align-items: center;
    gap: var(--space-4);
    position: relative;
    padding: var(--space-4) var(--space-8);
    font-family: var(--ds-default-font);
    font-size: calc(var(--radio-label-font, var(--radio-button-size)) * 0.8);
    line-height: 1.25;
    color: var(--color-black);
    cursor: pointer;
  }

  .radio--input:disabled {
    cursor: default;

    & + .radio--label {
      color: var(--color-disabled);
      cursor: default;
    }
  }

  .radio--input:enabled {
    &:checked + .radio--label {
      border-color: var(--color-primary);
      color: var(--color-on-primary);
      background-color: var(--color-primary);
    }

    &:hover + .radio--label {
      background-color: var(--color-primary-container);
      filter: brightness(var(--interaction-state-hover, 1.2));
    }

    &:active + .radio--label {
      background-color: var(--color-primary-container);
      filter: brightness(var(--interaction-state-active, 1.4));
    }

    /* stylelint-disable-next-line selector-max-combinators */
    &:checked:hover + .radio--label {
      color: var(--color-primary-on-container);
    }

    /* stylelint-disable-next-line selector-max-combinators */
    &:checked:active + .radio--label {
      color: var(--color-primary-on-container);
    }
  }
`;
