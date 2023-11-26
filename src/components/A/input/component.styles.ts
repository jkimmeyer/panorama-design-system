import { css } from "lit";

export const inputStyles = css`
  :host {
    --icon-padding: calc(var(--space-8) * 2);
    --input-padding-block: calc(var(--space-8) * 0.5);

    display: flex;
    flex-direction: column;
    gap: var(--space-4);
    font: normal 400 16px/1.5 var(--ds-default-font);
  }

  .input--field {
    width: 100%;
    border: 1px solid var(--color-black);
    border-radius: var(--space-4);
    padding-block: var(--input-padding-block);
    padding-inline: calc(var(--space-8) * 0.5);
    font: normal 400 16px/1.5 var(--ds-default-font);

    .input[data-icon-before] & {
      padding-left: var(--icon-padding);
    }

    .input[data-icon-after] & {
      padding-right: var(--icon-padding);
    }

    &:enabled:not(:read-only):where(:focus, :hover, :active) {
      outline: none;
      border-color: var(--color-primary);
    }

    &:read-only {
      cursor: default;
      color: var(--color-on-read-only-container);
      border-color: var(--color-read-only);
    }

    &:disabled {
      cursor: default;
      color: var(--color-on-disabled-container);
      border-color: var(--color-disabled);
    }
  }

  .input--field:where([data-size="small"]) {
    --input-padding-block: calc(var(--size-factor-small) * var(--space-4));
  }

  .input--field:where([data-size="medium"]) {
    --input-padding-block: calc(var(--size-factor-medium) * var(--space-4));
  }

  .input {
    display: flex;
    align-items: center;
    position: relative;
  }

  .input--icon {
    position: absolute;

    &[data-icon-before] {
      left: var(--space-4);
    }

    &[data-icon-after] {
      right: var(--space-4);
    }
  }
`;
