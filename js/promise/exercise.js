log = console.log
/**
 * Promise all
 */
{
    const promise1 = Promise.resolve(3)
    const promise2 = 34
    const promise3 = new Promise((resolve,reject) => {
        setTimeout(resolve, 100, 'foo');
    })
    Promise.all([promise1,promise2,promise3]).then(res => {
        console.log(res)
    })

    // const promise11 = Promise.resolve(3)
    // const promise21 = 34
    // const promise31 = new Promise((resolve,reject) => {
    //     setTimeout(reject, 100, 'foo');
    // })
    // Promise.all([promise11,promise21,promise31]).then(res => {
    //     console.log(res)
    // })
}
//// exercise
{
    const addTen = (number) =>  new Promise(resolve =>  resolve(number + 10))
    const multiplyByThree = (number) => new Promise(resolve =>  resolve(number * 3))
    const double = (number) => new Promise(resolve =>  resolve(number * 2))

    double(40).then(addTen).then(multiplyByThree).then(value => log(value))
}

{
    function createCancellationToken() {
        let cancel

        const token = new Promise((_,reject) => {
            cancel = () => reject(new Error("Canceled"))
        })

        return { token, cancel}
    }
    const { token, cancel } = createCancellationToken();

    function fetchData(cancellationToken) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Data fetched");
            }, 3000);
    
            cancellationToken.token.catch(() => {
                reject(new Error('Operation cancelled'));
            });
        });
    }

    const fetchPromise = fetchData({ token });

    setTimeout(() => {
        cancel()
    },1000)

    fetchPromise
    .then(data => console.log(data))
    .catch(error => console.error(error.message));
}