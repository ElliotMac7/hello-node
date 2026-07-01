# hello-node

A simple Node.js greeting utility.

## Instalation

```bash
git clone https://github.com/ElliotMac7/hello-node.git
cd hello-node
```

## Useage

```js
const { greet, farewell } = require('./index');

console.log(greet('Alice'));   // Hello, Alice!
console.log(farewell('Alice')); // Goodbye, Alice!
```

## Running Tests

```bash
npm test
```

## API

### `greet(name)`

Returns a greeting string. If no name is provided, defaults to `'World'`.

### `farewell(name)`

Returns a farewell string. If no name is provided, defaults to `'World'`.
