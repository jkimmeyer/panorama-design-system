import { css } from "lit";

export const radioGroupStyles = css`
  :host {
    --radio-button-size: var(--space-10);
    font-family: var(--ds-default-font);
  }

  .radio-group {
    --_radio-button-size: var(--radio-button-size);

    display: inline-flex;
    flex-direction: column;
    gap: var(--space-4);
  }

  .radio-group--heading {
    font-size: var(--_radio-button-size);
  }

  .radio {
    position: relative;
    outline-offset: 2px;

    &:focus-within {
      outline: 2px solid var(--color-primary);
    }
  }

  .radio--label {
    display: inline-flex;
    align-items: center;
    gap: var(--space-4);
    position: relative;
    padding-inline-start: calc(var(--space-8) * 2);
    font-size: calc(var(--radio-label-font, var(--radio-button-size)) * 0.8);
    line-height: 1.25;
    font-family: var(--ds-default-font);
    color: var(--color-black);
    cursor: pointer;
  }

  .radio--icon {
    display: none;
    position: absolute;
    top: 50%;
    left: 0;
    font-size: var(--radio-button-size);
    line-height: 1;
    color: var(--color-primary);
    transform: translateY(-50%);
  }

  .radio--label::before {
    content: "";
    position: absolute;
  }

  .radio--label::before {
    inset-inline-start: 0;
    inline-size: 20px;
    block-size: 20px;
    border: 2px solid var(--color-primary);
    border-radius: 100%;
    background-color: var(--color-white);
  }

  .radio--input:disabled {
    cursor: default;

    & + .radio--label {
      cursor: default;
      color: var(--color-disabled);
    }

    & + .radio--label::before {
      color: var(--color-disabled);
      border-color: var(--color-disabled);
    }
  }

  .radio--input:enabled {
    &:checked + .radio--label::before {
      border-color: var(--color-primary);
    }

    &:hover + .radio--label::before {
      background-color: var(--color-primary-container);
      filter: brightness(var(--interaction-state-hover, 1.2));
    }

    &:active + .radio--label::before {
      background-color: var(--color-primary-container);
      filter: brightness(var(--interaction-state-active, 1.4));
    }

    &:checked + .radio--label > .radio--icon {
      display: inline-flex;
    }

    &:checked:hover + .radio--label > .radio--icon {
      color: var(--color-primary-on-container);
    }

    &:checked:active + .radio--label > .radio--icon {
      color: var(--color-primary-on-container);
    }
  }
`;
