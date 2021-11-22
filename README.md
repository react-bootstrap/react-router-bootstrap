# react-router-bootstrap [![npm][npm-badge]][npm]
Integration between [React Router] v6 and [React Bootstrap].

## Installation

For React Router v6:
```sh
npm install -S react-router-bootstrap
```

For React Router v4 or v5 (see [rr-v4] branch):
```sh
npm install -S react-router-bootstrap@rr-v4
```

For React Router v3 or lower (see [rr-v3] branch):
```sh
npm install -S react-router-bootstrap@rr-v3
```

## Usage

Wrap your React Bootstrap element in a `<LinkContainer>` to make it behave like a React Router `<Link>`

`<LinkContainer>` accepts same parameters as React Router's [`<NavLink>`]

## Example

Following plain React Bootstrap component
```js
<Button href="/foo/bar">Foo</Button>
```
becomes
```js
import { LinkContainer } from 'react-router-bootstrap'
<LinkContainer to="/foo/bar">
  <Button>Foo</Button>
</LinkContainer>
```

## Contributing

See [CONTRIBUTING](CONTRIBUTING.md).

[React Router]: https://github.com/remix-run/react-router
[React Bootstrap]: https://github.com/react-bootstrap/react-bootstrap

[npm-badge]: https://badge.fury.io/js/react-router-bootstrap.svg
[npm]: http://badge.fury.io/js/react-router-bootstrap

[rr-v3]: https://github.com/react-bootstrap/react-router-bootstrap/tree/rr-v3
[rr-v4]: https://github.com/react-bootstrap/react-router-bootstrap/tree/rr-v4
[`<NavLink>`]: https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/api/NavLink.md
