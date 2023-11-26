# Panorama Design system
Implementation of the master thesis from Johannes Kimmeyer.

# Deployment
[Demo Storybook](https://jkimmeyer.github.io/panorama-design-system)
[Demo Anwendung](https://jkimmeyer.github.io/panorama-demo)

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

* Check that the continuous integration on main is passing
* Review the generated changelog of the version bump PR
* Merge the version bump PR
