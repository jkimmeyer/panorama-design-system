import { css } from "lit"

export const buttonStyles = css`
.button {
  --button-height: 48px;
  --button-border: 1px solid;
  --button-border-radius: calc(var(--ds-border-radius));
  --button-inline-padding: var(--space-8);

  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: var(--space-8);
  min-height: var(--button-height);
  border: var(--button-border) var(--button-border-color);
  border-radius: var(--button-border-radius);
  padding-inline: var(--button-inline-padding);
  font-family: var(--ds-default-font);
  font-size: var(--ds-default-font-size);
  line-height: var(--ds-default-line-height);
  text-decoration: none;
  color: var(--button-color);
  background-color: var(--button-background-color);
  cursor: pointer;

  &[data-full-width] {
    width: 100%;
    display: flex;
  }
}

/* Link Styles */
.button:hover,
.button:visited,
.button:active {
  text-decoration: none;
}

.button:disabled {
  --button-main-color: var(--color-disabled);
  --button-on-main-color: var(--color-on-disabled);

  cursor: default;
  pointer-events: none;
}

.button:not(:disabled):where(:focus),
.button:not(:disabled):where(:hover),
.button:not(:disabled):where(:active) {
  color: var(--button-on-interaction-color);
  background-color: var(--button-interaction-color);
}

.button[data-icon-only] {
  aspect-ratio: 1;
}


.button:where([data-theme="primary"]) {
  --button-main-color: var(--color-primary);
  --button-on-main-color: var(--color-on-primary);
  --button-interaction-color: var(--color-primary-container);
  --button-on-interaction-color: var(--color-primary-on-container);
}


.button:where([data-appearance="filled"]) {
  --button-color: var(--button-on-main-color);
  --button-border-color: transparent;
  --button-background-color: var(--button-main-color);
}

.button:where([data-appearance="text"]) {
  --button-color: var(--button-on-main-color);
  --button-border-color: transparent;
  --button-background-color: transparent;
}


.button:where([data-size="small"]) {
  --button-height: calc(var(--size-factor-small) * var(--space-12));
}

.button:where([data-size="medium"]) {
  --button-height: calc(var(--size-factor-medium) * var(--space-12));
}

.button:where([data-size="large"]) {
  --button-height: calc(var(--size-factor-large) * var(--space-12));
}

`
