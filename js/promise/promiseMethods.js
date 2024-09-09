export default async (promises) => {
    const promiseCount = promises.length;
    const resolvedValues = [];
    let resolvedCount = 0;
  
    return new Promise((resolve, reject) => {
      promises.forEach((promise, index) => {
        promise.then((result) => {
          resolvedValues[index] = result;
          resolvedCount++;
  
          if (resolvedCount === promiseCount) {
            resolve(resolvedValues);
          }
        }, reject);
      });
    });
  };