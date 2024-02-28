function makeObject () {
    mainArr = [];
    camelCase = false;
    result = null;
    depth = 0;

    function camelifyKeys () {
        camelCase = true;
        updateAgain();
        return this;
    }

    function updateAgain () {
        if (!result) return;
        fromArray(mainArr);
    }

    function convertCamel (key) {
        return String(key).replace(/-./g, x => x[1].toUpperCase());
    }

    function toDepth (d) {
        depth = d;
        updateAgain();
        return this;
    }

    function print () {
        console.log(result);
        return this;
    }

    function convertToObject (arr, depth) {
        if (arr.length === 0 || depth === 0) {
            return arr;
        }
        const obj = {};
        arr.forEach(entry => {
            const [key, value] = entry;
            const mainKey = camelCase ? convertCamel(key) : key;
            obj[mainKey] = Array.isArray(value) ? convertToObject(value, depth - 1) : value;
        });
        return obj;
    }

    function fromArray (arr) {
        mainArr = arr;
        result = convertToObject(arr, depth);
        return this;
    }

    return { camelifyKeys, toDepth, fromArray, print };
}

const arr = [
    ['a-a', 42],
    ['b-bb', true],
    ['c', [
        ['d', []],
        [4, { foo: 'bar' }],
        ['f', [
            ['g-ggg', [
                [2, x => x],
            ]],
        ]],
    ]],
];

const obj = makeObject()
    .camelifyKeys()
    .fromArray(arr)
    .toDepth(4)
    .print();

// do NOT remove the following line
module.exports = makeObject;
