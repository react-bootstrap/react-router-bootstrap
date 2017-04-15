# react-router-bootstrap [![Travis][build-badge]][build] [![npm][npm-badge]][npm]
Integration between [React Router] v4 and [React Bootstrap].

## Installation

For React Router v4:
```sh
npm install -S react-router-bootstrap
```

For React Router v3 or lower (see [rr-v3] branch):
```sh
npm install -S react-router-bootstrap@rr-v3
```

## Usage

Wrap your React Bootstrap element in a `<LinkContainer>` to make it behave like a React Router `<Link>`

`<LinkContainer>` accepts same parameters as React Router's [`<NavLink>`]

Please note that by default React Router will match any location that contains path specified in `to` prop.
To make `<LinkContainer>` to match the location exactly, set `exact` prop to `true` or use `<IndexLinkContainer>` 
instead.

## Example

Following plain React Bootstrap component
```js
<Button href="/foo/bar">Foo</Button>
```
becomes
```js
<LinkContainer to="/foo/bar">
  <Button>Foo</Button>
</LinkContainer>
```

## Contributing

See [CONTRIBUTING](CONTRIBUTING.md).

[React Router]: https://github.com/reactjs/react-router
[React Bootstrap]: https://github.com/react-bootstrap/react-bootstrap

[build-badge]: https://travis-ci.org/react-bootstrap/react-router-bootstrap.svg?branch=master
[build]: https://travis-ci.org/react-bootstrap/react-router-bootstrap

[npm-badge]: https://badge.fury.io/js/react-router-bootstrap.svg
[npm]: http://badge.fury.io/js/react-router-bootstrap

[rr-v3]: https://github.com/react-bootstrap/react-router-bootstrap/tree/rr-v3
[`<NavLink>`]: https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/api/NavLink.md
