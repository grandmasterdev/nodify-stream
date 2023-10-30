# @nodifier/stream
Utility to convert readable stream to string in NodeJS

## Getting started

Installing
```bash
npm install --save @nodifier/stream
```

## Convert stream readable to string

```typescript
import { streamToString } from '@nodifier/stream'

const str = streamToString(readableStream);
```

**streamToString** is an async function. If you are using it in the confine of a function/method, you'll need to be sure you added `async/await`.

```typescript

async someFunction() {
    const str = await streamToString(readableStream);
}
```