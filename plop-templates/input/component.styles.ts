import { css } from "lit";

export const inputStyles = css`
  :host {
    --icon-padding: calc(var(--space-medium) * 2);

    display: flex;
    flex-direction: column;
    gap: var(--space-small);
    font: normal 400 16px/1.5 var(--ds-default-font);
  }

  .input--field {
    width: 100%;
    border: 1px solid var(--color-primary);
    border-radius: var(--space-small);
    padding-block: var(--space-medium);
    padding-inline: var(--space-small);
    font: normal 400 16px/1.5 var(--ds-default-font);

    .input[data-icon-before] & {
      padding-left: var(--icon-padding);
    }

    .input[data-icon-after] & {
      padding-right: var(--icon-padding);
    }
  }

  .input {
    display: flex;
    align-items: center;
    position: relative;
  }

  .input--icon {
    position: absolute;

    &[data-icon-before] {
      left: var(--space-small);
    }

    &[data-icon-after] {
      right: var(--space-small);
    }
  }
`;
