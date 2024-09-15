const BC = new BroadcastChannel("f-channel")

BC.postMessage({ data: { title: "first", age: 25}})
BC.postMessage("Test");

// Subscribing to messages
BC.onmessage = (event) => {
    console.log(event);
  };
  
// Disconnecting
BC.close();