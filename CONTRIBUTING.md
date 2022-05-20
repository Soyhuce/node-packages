
# Contributing

> We use pnpm for development.
> Please make sure you have node.js, npm and pnpm installed on your machine.

When contributing to this repository, please first discuss the change you wish to make via issue,
email, or any other method with the owners of this repository before making a change.

Please note we have a code of conduct, please follow it in all your interactions with the project.

After cloning this repository, run `pnpm i` to install dependencies. Then, you can run several commands:

- `pnpm clear` remove all build dist.
- `pnpm build:packages` runs build for all packages.
- `pnpm dev:packages` runs dev servers for all packages.
- `pnpm build:templates` runs build for all templates.
- `pnpm dev:templates` runs dev servers for all templates.
- `pnpm build:storybook` runs build for Storybook.
- `pnpm dev:storybook` runs dev server for Storybook.
- `pnpm lint` checks the code style.
- `pnpm lint:fix` checks and fixes the code style.
- `pnpm test:unit` runs unit tests.
- `pnpm test:e2e` runs end-to-end tests.
- `pnpm test` runs all tests.
- `pnpm cz` runs commitizen prompt.

## Pull Request Process

Before you create a pull request, please check the following todo:

- Pre commit hooks passed, please don't ignore it.
- `pnpm build:packages` and `pnpm build:templates` passed.

## License

By contributing to this repository, you agree that your contributions will be licensed under its MIT license.
