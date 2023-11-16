import { css } from "lit"

export const radioGroupStyles = css`
  .radio-group {
    display: flex;
    flex-direction: column;
    gap: var(--space-small);
  }

  .radio-group--heading {
    font-size: var(--ds-default-font-size);
    font-family: var(--ds-default-font);
  }

  .radio {
    position: relative;
  }

  .radio--label {
    display: inline-flex;
    align-items: center;
    gap: var(--space-small);
    position: relative;
    padding-inline-start: calc(var(--space-medium) * 2);
    color: var(--color-primary-700);
    cursor: pointer;
  }

  .radio--icon {
    display: none;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }

  .radio--label::before,
  .radio--label::after {
    content: "";
    position: absolute;
    z-index: var(--zLayer-default, 1);
  }

  .radio--label::before {
    inset-inline-start: 0;
    inline-size: 20px;
    block-size: 20px;
    border: 2px solid var(--color-primary);
    border-radius: 100%;
    background-color: var(--color-white);
  }

  .radio--input:checked + .radio--label::before {
    border-color: var(--color-primary);
  }

  .radio--input:focus + .radio--label::before,
  .radio--input:hover + .radio--label::before {
    border-color: var(--color-secondary);
  }

  .radio--input:checked + .radio--label > .radio--icon {
    display: inline-flex;
  }
`
