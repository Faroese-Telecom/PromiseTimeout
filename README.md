# PromiseTimeout
It allows for executing promises, but with set timeouts. 

__example__: I request from a server, but if I don't receieve a response before 15 seconds, then I want the promise to time out.

```js
const serverPromise = getUsers();
const result = await PromiseTimeout(15, "timed out!", serverPromise);
```

| parameters | type | description |
|---|---|---|
|timeoutInMiliseconds |`number`| The miliseconds it takes for the promise to timeout |
|timeoutMessage | `string` | the error message to be thrown when it times out |
| promise | `Promise` | the promise that needs to complete before the timeout |