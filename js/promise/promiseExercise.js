/*
The problem is if the sync fn, throw a error execption,
and the async function will not execute 
*/

async function asyncFuncV1() {
    doSomethingSync(); // (A)
    return doSomethingAsync()
    .then(result => {
        console.log("Async result:", result);
    });
}

function doSomethingSync() {
    throw new Error("Synchronous error occurred!");
}

function doSomethingAsync() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Async result");
        }, 1000);
    });
}

// asyncFuncV1().then(() => {
//     console.log("Async function completed successfully.");
// }).catch(error => {
//     console.error("Caught an error:", error);
// });



////// Solution 1
/**
 * Add try catch
 */

async function asyncFuncV2() {
    try {
        doSomethingSync(); // (A)
        return doSomethingAsync()
        .then(result => {
            console.log("Async result:", result);
        });
    } catch(err) {
        return Promise.reject(err); 
    }

}

asyncFuncV2().then(() => {
    console.log("Async function completed successfully.");
}).catch(error => {
    console.error("Caught an error:", error);
});

