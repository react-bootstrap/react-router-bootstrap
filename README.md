# react-router-bootstrap
Integration between [React Router](https://github.com/rackt/react-router) and [React-Bootstrap](https://github.com/react-bootstrap/react-bootstrap).

[![Build Status](https://travis-ci.org/react-bootstrap/react-router-bootstrap.svg?branch=master)](https://travis-ci.org/react-bootstrap/react-router-bootstrap)
[![npm version](https://badge.fury.io/js/react-router-bootstrap.svg)](http://badge.fury.io/js/react-router-bootstrap)

## Usage

Wrap your React-Bootstrap element in a `LinkContainer` to make it behave like a React Router `Link`:

```js
<LinkContainer to="/foo" query={{bar: "baz"}}>
  <Button>Foo</Button>
</LinkContainer>
```

To disable the element and the link, set the `disabled` prop on the `LinkContainer`. For the equivalent of `IndexLink`, use `IndexLinkContainer`.

As with React Router's `Link`, returning `false` from an `onClick` handler on `LinkContainer` will prevent the transition. However, this behavior will not apply to any `onClick` on the child, which instead will have to call `event.preventDefault()` explicitly to prevent the transition.

## Installation

```
npm install react-router-bootstrap
```

You will also want to have React Router and React-Bootstrap.

```
npm install react-router@latest react-bootstrap
```

## Contributing

See [CONTRIBUTING](CONTRIBUTING.md).
