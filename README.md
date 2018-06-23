# HTTP Status Codes and Messages

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