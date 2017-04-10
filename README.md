# react-router-bootstrap [![Travis][build-badge]][build] [![npm][npm-badge]][npm]
Integration between [React Router](https://github.com/reactjs/react-router) and [React-Bootstrap](https://github.com/react-bootstrap/react-bootstrap).

> **IMPORTANT**: instructions below are for projects using React Router v3 and earlier.
> To find the latest integration package for React Router v4 and later see [master](https://github.com/react-bootstrap/react-router-bootstrap/tree/master) branch. 

## Usage

Wrap your React-Bootstrap element in a `<LinkContainer>` to make it behave like a React Router `<Link>`:

```js
<LinkContainer to={{ pathname: '/foo', query: { bar: 'baz' } }}>
  <Button>Foo</Button>
</LinkContainer>
```

For the equivalent of `<IndexLink>`, use `<IndexLinkContainer>`.

## Installation

```
$ npm i -S react react-dom react-router react-bootstrap
$ npm i -S react-router-bootstrap@rr-v3
```

## Contributing

See [CONTRIBUTING](CONTRIBUTING.md).

[build-badge]: https://travis-ci.org/react-bootstrap/react-router-bootstrap.svg?branch=master
[build]: https://travis-ci.org/react-bootstrap/react-router-bootstrap

[npm-badge]: https://badge.fury.io/js/react-router-bootstrap.svg
[npm]: http://badge.fury.io/js/react-router-bootstrap
