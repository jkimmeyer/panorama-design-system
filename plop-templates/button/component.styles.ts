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
  --button-height: calc(var(--size-factor-{{this}}) * var(--space-12));
}

{{/each}}
`
