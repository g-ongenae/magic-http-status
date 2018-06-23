# HTTP Status Codes and Messages

[![Build Status](https://travis-ci.com/g-ongenae/status-codes.svg?branch=master)](https://travis-ci.com/g-ongenae/status-codes)

## Install

```bash
# With yarn
yarn add pkg-name
# Or with npm
npm i pkg-name
```

## Why

To easily prevent using [magic numbers](https://palantir.github.io/tslint/rules/no-magic-numbers/) for HTTP request and not having to recreate each time variable or enums...

## Example

```ts
import { MESSAGES, CODES } from 'pkg-name';

response
    .status(CODES.OK)
    .send({
        message: MESSAGES.OK
    });
```