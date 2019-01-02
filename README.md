[![npm version](https://badge.fury.io/js/figaro-js.svg)](https://badge.fury.io/js/figaro-js)
[![Build Status](https://travis-ci.org/LaunchPadLab/figaro-js.svg?branch=master)](https://travis-ci.org/LaunchPadLab/figaro-js)

# figaro-js

This package emulates the behavior of [figaro](https://github.com/laserlemon/figaro) for rails. It loads environment variables from an `application.yml` file into `process.env`.

## Quickstart

In `./config/application.yml`:

```yml
SOME_VAR: 'FOO'

development:
  IS_DEV: true

production:
  IS_PROD: true
```

In your start script:

```js

const Figaro = require('figaro-js')

Figaro.load()

console.log(process.env.SOME_VAR) // -> 'FOO'

```
Using ES6 syntax:
```js

import * as Figaro from 'figaro-js'

Figaro.load()

console.log(process.env.SOME_VAR) // -> 'FOO'

```

## Documentation

Full module API and usage info can be found in [docs.md](docs.md).