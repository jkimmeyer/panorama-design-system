import { css } from 'lit';
export const cardStyles = css`
.card {
  max-width: 100%;
  padding: var(--space-small);
  color: var(--card-color);
  border: 1px solid var(--card-border);
  border-radius: var(--space-small);
  background-color: var(--card-background-color);
}

{{#each variants.themes}}

.card:where([data-theme="{{this}}"]) {
  --card-main-color: var(--color-{{this}});
  --card-on-main-color: var(--color-on-{{this}});
  --card-container-color: var(--color-{{this}}-container);
  --card-on-container-color: var(--color-{{this}}-on-container);
}

{{/each}}

{{#each variants.appearances}}
.card:where([data-appearance="{{kebabCase this.name}}"]) {
  --card-color: {{applyColor "card" this "color"}};
  --card-border-color: {{applyColor "card" this "border-color"}};
  --card-background-color: {{applyColor "card" this "background-color"}};
}

{{/each}}
`;
