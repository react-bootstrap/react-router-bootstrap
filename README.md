# react-router-bootstrap [![Travis][build-badge]][build] [![npm][npm-badge]][npm]
Integration between [React Router](https://github.com/reactjs/react-router) and [React-Bootstrap](https://github.com/react-bootstrap/react-bootstrap).

## Usage

Wrap your React-Bootstrap element in a `<LinkContainer>` to make it behave like a React Router `<Link>`:

```js
<LinkContainer to={{ pathname: '/foo', query: { bar: 'baz' } }}>
  <Button>Foo</Button>
</LinkContainer>
```

For the equivalent of `<IndexLink>`, use `<IndexLinkContainer>`.

## Pre-built components

Common navigation components already have a prebuilt version to make usage easier. For example `ButtonLink`:

```js
<ButtonLink to={{ pathname: '/foo', query: { bar: 'baz' } }} />
```

Just add the property `onlyActiveOnIndex` to make it behave like a React Router `<IndexLink>`.

Here is a list of the pre-built components:
- `ButtonLink`
- `NavItemLink`
- `MenuItemLink`
- `ListGroupItemLink`


## Installation

```
$ npm i -S react react-dom react-router react-bootstrap
$ npm i -S react-router-bootstrap
```

## Contributing

See [CONTRIBUTING](CONTRIBUTING.md).

[build-badge]: https://travis-ci.org/react-bootstrap/react-router-bootstrap.svg?branch=master
[build]: https://travis-ci.org/react-bootstrap/react-router-bootstrap

[npm-badge]: https://badge.fury.io/js/react-router-bootstrap.svg
[npm]: http://badge.fury.io/js/react-router-bootstrap
