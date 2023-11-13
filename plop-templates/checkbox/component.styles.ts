import { css } from "lit"

export const checkboxStyles = css`
  :host {
    position: relative;
  }

  .checkbox--label {
    display: inline-flex;
    align-items: center;
    position: relative;
    padding-inline-start: calc(var(--space-medium) * 2);
    color: var(--color-primary-700);
    gap: var(--space-small);
    cursor: pointer;
  }

  .checkbox--icon {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    display: none;
  }

  .checkbox--label::before,
  .checkbox--label::after {
    content: "";
    position: absolute;
    z-index: var(--zLayer-default, 1);
  }

  .checkbox--label::before {
    inset-inline-start: 0;
    inline-size: 20px;
    block-size: 20px;
    border: 2px solid var(--color-primary);
    border-radius: var(--space-small);
    background-color: var(--color-white);
  }

  .checkbox--input:checked + .checkbox--label::before {
    border-color: var(--color-primary);
  }

  .checkbox--input:focus + .checkbox--label::before,
  .checkbox--input:hover + .checkbox--label::before {
    border-color: var(--color-secondary);
  }

  .checkbox--input:checked + .checkbox--label > .checkbox--icon {
    display: inline-flex;
  }
`
