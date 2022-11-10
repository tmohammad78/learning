## Circuit Breaker

We use circuit breaker when one service is down , alot of serice will get 500 , so circuit breaker close the connection and cause to any request doesn't send to down service and bypass them , on other hand it has half-open state that check that service is up or not , if it's up it will send that request to the server otherwise it continues to be close.

```
What's worse if you have many callers on a unresponsive supplier, then you can run out of critical resources leading to cascading failures across multiple systems due to these reasons we use this pattern
```