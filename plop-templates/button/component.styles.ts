import { css } from "lit"

export const buttonStyles = css`
.button {
  --button-height: 48px;
  --button-border: 1px solid;
  --button-border-radius: calc(var(--ds-border-radius));
  --button-inline-padding: var(--space-medium);
  --_button-main-color: var(--button-main-color);
  --_button-contrast-main-color: var(--button-contrast-main-color);
  --_button-interaction-color: var(--button-interaction-color);

  display: flex;
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
}

/* Link Styles */
.button:hover,
.button:visited,
.button:active {
  text-decoration: none;
}

.button:disabled {
  --button-main-color: var(--color-neutral-300);
  --button-contrast-main-color: var(--color-neutral-300);
  --button-additional-color: var(--color-neutral-300);

  cursor: default;
  pointer-events: none;
}

.button:not(:disabled):where(:focus) {
  --button-main-color: var(--_button-interaction-color);
}

.button:not(:disabled):where(:hover) {
  --button-main-color: var(--_button-interaction-color);
}

.button:not(:disabled):where(:active) {
  --button-main-color: var(--_button-interaction-color);
}

.button[icon-only] {
  aspect-ratio: 1;
}

{{#with designSystem}}
{{#each components.button.colors}}

.button:where([data-color="{{this}}"]) {
  --button-main-color: var(--color-{{this}});
  --button-contrast-main-color: var(--color-on-{{this}});
  --button-additional-color: var(--color-neutral-{{this}});
  --_button-interaction-color: var(--color-{{this}}-interaction);
}

{{/each}}

{{#each components.button.appearances}}
.button:where([data-appearance="{{this}}"]) {
  --button-color: {{applyColor "button" ../appearances this "text"}};
  --button-border-color: {{applyColor "button" ../appearances this "border"}};
  --button-background-color: {{applyColor "button" ../appearances this "background"}};
}

{{/each}}

{{#each components.button.sizes}}
.button:where([data-size="{{this}}"]) {
  --button-height: calc(var(--space-{{this}}) * 1.5);
}

{{/each}}
{{/with}}
`
