//// Async await version
/// it returns promise 
async function fetchJson(url) {
    try { 
        const request = await fetch(url)
        const text = await request.text()
        return JSON.parse(text)
    } catch(error) {
        console.log(error)
    }
}

//// promise version 

function fetchJSONWithPromise() {
    return fetch(url)
    .then(request => request.text())
    .then(text => JSON.parse(text))
    .catch(err => {
        console.log(err)
    })
}

///// Return promise 
async function asyncFunc() {
    return 123; // (A)
}
asyncFunc().then(result => console.log(result))

/////// async function is started sync, then the current task finishes(c), then the result promise is settled async
async function asyncFunc() {
    console.log('asyncFunc() starts'); // (A)
    return 'abc';
}
asyncFunc().then(x => { // (B)
    console.log(`Resolved: ${x}`);
});
console.log('Task ends'); // (C)
  
// Output:
// 'asyncFunc() starts'
// 'Task ends'
// 'Resolved: abc'

//// concurrent 
async function concurrentPromiseAll() {
    const result = await Promise.all([
      paused('first'), paused('second')
    ]);
    assert.deepEqual(result, ['first', 'second']);
}
// Output:
// 'START first'
// 'START second'
// 'END first'
// 'END second'

async function concurrentAwait() {
    const resultPromise1 = paused('first');
    const resultPromise2 = paused('second');
    
    assert.equal(await resultPromise1, 'first');
    assert.equal(await resultPromise2, 'second');
  }
// Output:
// 'START first'
// 'START second'
// 'END first'
// 'END second'