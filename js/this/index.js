

const data = {
    name: "Mohammad",
    age: 25,
    sayHello(text = '') {
        console.log(`Hi ${this.name}, you are ${this.age}`,text)
    }
}

const itWillbeConvertedVersionOfData = {
    name: "Mohammad",
    age: 25,
    sayHello: function(text = '') {
        console.log(`Hi ${this.name}, you are ${this.age}`,text)
    }
}

data.sayHello()//// Hi Mohammad, you are 25

/////////////////////////////////////////////////////////////////////////////////////

const test2 = data.sayHello

test2() /// Hi undefined, you are undefined, here you didn't specify this, so it's out of scope of reciver.

/////////////////////////////////////////////////////////////////////////////////////

const newData = {
    name: "Ali",
    age: 32,
}
const test3 = data.sayHello.bind(newData)

test3() /// Hi Ali, you are 32

/////////////////////////////////////////////////////////////////////////////////////

data.sayHello.call(newData) /// Hi Ali, you are 32

/// it's like call, but you can pass array of argument
data.sayHello.apply(newData,['bye']) /// Hi Ali, you are 32 bye

/////////////////////////////////////////////////////////////////////////////////////

const func1 = (text) => data.sayHello(text)

func1()


/////////////////////////////////////////////////////////////////////////////////////
/// Extracting methods is so important, it causes we miss the this, so we should use bind, like react in class components

/// wrong way

class ClickHandler {
    constructor(id, elem) {
      this.id = id;
      elem.addEventListener('click', this.handleClick); // (A)
    }
    handleClick(event) {
      alert('Clicked ' + this.id);
    }
}

/// right way
const listener = this.handleClick.bind(this);
elem.addEventListener('click', listener);

/////////////////////////////////////////////////////////////////////////////////////

/// In this example, because inner function is ordinary function, so it has own this. inner variables hides the outer variables

/// wrong way
const prefixer1 = {
    prefix: '==> ',
    prefixStringArray(stringArray) {
        return stringArray.map(
        function (x) {
            return this.prefix + x; // (A)
        });
    },
};
  
/// right way
/// use arrow fn
const prefixer2 = {
    prefix: '==> ',
    prefixStringArray(stringArray) {
        return stringArray.map(x => this.prefix + x)
    },
};

/// use another variable
prefixStringArray(stringArray) {
    const that = this; // (A)
    return stringArray.map(
      function (x) {
        return that.prefix + x;
      });
}

//// use bind function
prefixStringArray(stringArray) {
    return stringArray.map(
      function (x) {
        return this.prefix + x;
      }.bind(this)); // (A)
},

//// pass this to map 
prefixStringArray(stringArray) {
    return stringArray.map(
      function (x) {
        return this.prefix + x;
      },
      this); // (A)
  },
  