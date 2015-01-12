# Tests

All pull requests should include tests for bug or feature being added.

# Docs

Any substantial change should be reflected in the docs - (Currently just the repo README).

# Development

- `npm test` will run the tests with Karma and Webpack.
- `npm run tdd` will do the same as `npm test` but will watch for file changes and continuously run tests.
- `npm run visual-test` will launch webpack-dev-server on the default port (8080) where you can visually check your components. webpack-dev-server will dynamically generate an html file for you, go to [http://localhost:8080/public/visual](http://localhost:8080/public/visual). If you navigate to [http://localhost:8080/webpack-dev-server/public/visual] then it will automatically refresh as you make changes.
- `npm run build` will transpile the `src` folder to the `lib` folder

# Build

Please doe not include changes to the `lib` folder. We will do this when we prepare a release.

# Other useful resources for debugging

- [`npm link`](https://docs.npmjs.com/cli/link) is usefull to quickly include your development changes here to you application, which may help when testing bug fixes.
- [React Dev Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) is a chrome devtools plugin for React.
