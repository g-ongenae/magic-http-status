# HTTP Status Codes and Messages

[![Build Status](https://travis-ci.com/g-ongenae/magic-http-status.svg?branch=master)](https://travis-ci.com/g-ongenae/magic-http-status)

## Install

```bash
# With yarn
yarn add magic-http-status
# Or with npm
npm i magic-http-status
```

## Why

To easily prevent using [magic numbers](https://palantir.github.io/tslint/rules/no-magic-numbers/) for HTTP request and not having to recreate each time variable or enums...

## Example

```ts
import { MESSAGES, CODES } from 'magic-http-status';

response
    .status(CODES.OK)
    .send({
        message: MESSAGES.OK
    });
```