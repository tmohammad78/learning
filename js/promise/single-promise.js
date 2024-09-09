
class MyPromiseV1 {

    _promiseState = 'pending'
    _fulfillmentTasks = []
    _rejectionTasks = []
    _promiseResult = undefined

    resolve(value) {
        if(this._promiseState !== 'pending') return this;
        this._promiseState = 'fulfilled'
        this._promiseResult = value
        this._clearAndEnqueueTasks(this._fulfillmentTasks);
        return this;
    }

    reject(error) {
        if(this._promiseState !== 'pending') return this;
        this._promiseState = 'rejected'
        this._promiseResult = error
        this._clearAndEnqueueTasks(this._rejectionTasks);
        return this;
    }

    then(onFullFilled,onRejected) {
        const fulfillmentTask = () => {
            if(typeof onFullFilled === 'function') {
                onFullFilled(this._promiseResult)
            }
        }

        const rejectionTask = () => {
            if(typeof onRejected === 'function') {
                onRejected(this._promiseResult)
            }
        }

        switch(this._promiseState) {
            case 'pending':
                this._fulfillmentTasks.push(fulfillmentTask)
                this._rejectionTasks.push(rejectionTask);
                break;
            case 'fulfilled':
                addToTaskQueue(fulfillmentTask)
                break;
            case 'rejected':
                addToTaskQueue(rejectionTask)
                break;
            default:
                throw new Error()
        }
    }

    _clearAndEnqueueTasks(tasks) {
        this._fulfillmentTasks = undefined;
        this._rejectionTasks = undefined;
        tasks.map(addToTaskQueue);
    }

}

function addToTaskQueue(task) {
    setTimeout(task, 0);
}


///// test MyPromiseV1
const myPromiseV1 = new MyPromiseV1()
const myPromiseV12 = new MyPromiseV1()
myPromiseV1.resolve(3)
myPromiseV12.reject(new Error("test error"))
myPromiseV1.then(res => {
    console.log(res) /// 3
})
myPromiseV12.then(null,(err) => {
    console.log(err) //// test error
})


class MyPromiseV2 {

    _promiseState = 'pending'
    _fulfillmentTasks = []
    _rejectionTasks = []
    _promiseResult = undefined

    resolve(value) {
        if(this._promiseState !== 'pending') return this;
        this._promiseState = 'fulfilled'
        this._promiseResult = value
        this._clearAndEnqueueTasks(this._fulfillmentTasks);
        return this;
    }

    reject(error) {
        if(this._promiseState !== 'pending') return this;
        this._promiseState = 'rejected'
        this._promiseResult = error
        this._clearAndEnqueueTasks(this._rejectionTasks);
        return this;
    }

    then(onFullFilled,onRejected) {
        const newPromise = new MyPromiseV2()

        const fulfillmentTask = () => {
            if(typeof onFullFilled === 'function') {
                const returned = onFullFilled(this._promiseResult)
                newPromise.resolve(returned)
            } else {
                newPromise.resolve(this._promiseResult);
            }
        }

        const rejectionTask = () => {
            if(typeof onRejected === 'function') {
               const returned = onRejected(this._promiseResult)
               newPromise.resolve(returned)
            } else {
                newPromise.reject(this._promiseResult);
            }
        }

        switch(this._promiseState) {
            case 'pending':
                this._fulfillmentTasks.push(fulfillmentTask)
                this._rejectionTasks.push(rejectionTask);
                break;
            case 'fulfilled':
                addToTaskQueue(fulfillmentTask)
                break;
            case 'rejected':
                addToTaskQueue(rejectionTask)
                break;
            default:
                throw new Error()
        }

        return newPromise;
    }

    catch(rejectionReaction) {
        return this.then(null,rejectionReaction)
    }

    _clearAndEnqueueTasks(tasks) {
        this._fulfillmentTasks = undefined;
        this._rejectionTasks = undefined;
        tasks.map(addToTaskQueue);
    }

}

const myPromiseV21 = new MyPromiseV2();
myPromiseV21.resolve();
myPromiseV21
.then((value1) => {
    console.log(value1) /// undefined
    return 123;
})
.then((value2) => {
  console.log(value2) /// 123
});