# Panorama Design system

Implementation of the master thesis from Johannes Kimmeyer.

# Deployment

* [Demo Storybook](https://jkimmeyer.github.io/panorama-design-system)
* [Demo Anwendung](https://jkimmeyer.github.io/panorama-demo)

## Setup

```bash
$ npm i
$ npm run generate:components
$ npm run storybook
```

## Components

The component templates can be found in `plop-templates`. The corresponding partials can be found in `plop-helpers/partials.ts`.

## CI

The CI also runs test checking the code style, the tests and the types of the application.
The CI will automatically deploy the website to GitHub Pages.

## Semantic Versioning

The panorama design system is published using semantic versioning.

We use an automated changelog and release workflow via GitHub Actions. Whenever a pull request is merged, a version bump PR will be created or updated, containing a generated changelog. For releasing a version:

- Check that the continuous integration on main is passing
- Review the generated changelog of the version bump PR
- Merge the version bump PR

## Design System Configuration

It is very simple to adapt the generated versions of the design system to your needs. The configuration can be found in `design-system-a.ts`.

This is a button with a few variants. You can easily extend the themes for example by adding a new theme to the `ColorTheme` enum and adding it to the `themes` array. You can also add new sizes or appearances. As you add new versions, you may need new design tokens. Please add theme to the `design-token-a.ts` file.

```typescript
button: {
  variants: {
    appearances: ButtonAppearances,
    sizes: ["medium"],
    themes: [ColorTheme.Primary],
  },
  properties: {
    ...buttonConfig.properties,
  },
},
```

A more complex button could look like this:

```typescript
button: {
  variants: {
    appearances: ButtonAppearances,
    sizes: ["small", "medium", "large"],
    themes: [ColorTheme.Primary, ColorTheme.Secondary, ColorTheme.Monochrome, ColorTheme.Success, ColorTheme.Warning, ColorTheme.Error],
  },
  ...
}
```

If you are interested in supporting this project, please contact me via [GitHub](https://github.com/jkimmeyer).
