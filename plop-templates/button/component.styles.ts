import { css } from "lit"

export const buttonStyles = css`
.button {
  --button-height: 48px;
  --button-border: 1px solid;
  --button-border-radius: calc(var(--ds-border-radius));
  --button-inline-padding: var(--space-medium);

  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: var(--space-medium);
  min-height: var(--button-height);
  border: var(--button-border) var(--button-border-color);
  border-radius: var(--button-border-radius);
  padding-inline: var(--button-inline-padding);
  text-decoration: none;
  color: var(--button-color);
  background-color: var(--button-background-color);
  cursor: pointer;
  font-family: var(--ds-default-font);
  font-size: var(--ds-default-font-size);
  line-height: var(--ds-default-line-height);
}

/* Link Styles */
.button:hover,
.button:visited,
.button:active {
  text-decoration: none;
}

.button:disabled {
  --button-main-color: var(--color-gray-1);
  --button-contrast-main-color: var(--color-neutral-300);
  --button-additional-color: var(--color-neutral-300);

  cursor: default;
  pointer-events: none;
}

.button:not(:disabled):where(:focus) {
  filter: brightness(1.1);
}

.button:not(:disabled):where(:hover) {
  filter: brightness(1.2);
}

.button:not(:disabled):where(:active) {
  filter: brightness(1.3);
}

.button[icon-only] {
  aspect-ratio: 1;
}

{{#each variants.themes}}

.button:where([data-theme="{{this}}"]) {
  --button-main-color: var(--color-{{this}});
  --button-on-main-color: var(--color-on-{{this}});
  --button-container-color: var(--color-{{this}}-container);
  --button-on-container-color: var(--color-{{this}}-on-container);
}

{{/each}}

{{#each variants.appearances}}
.button:where([data-appearance="{{kebabCase this.name}}"]) {
  --button-color: {{applyColor "button" this "color"}};
  --button-border-color: {{applyColor "button" this "border-color"}};
  --button-background-color: {{applyColor "button" this "background-color"}};
}

{{/each}}

{{#each variants.sizes}}
.button:where([data-size="{{this}}"]) {
  --button-height: calc(var(--space-{{this}}) * 1.5);
}

{{/each}}
`
