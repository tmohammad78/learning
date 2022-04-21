"use strict";

var _marked = /*#__PURE__*/regeneratorRuntime.mark(generator);

var a = function a() {
  return "This is sample arrow function";
};

var b = [1, 2, 3, 4, 5, 6];
var c = b.map(function (item) {
  return item * 2 + 1;
}).filter(function (item) {
  return item > 5;
});
var newMap = new Map({
  a: "1",
  3: "33"
});
var promiseObj = Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("success");
  }, 1000);
});
promiseObj.then(function () {
  console.log("Promise success");
}, function () {
  console.log("Promise Failed");
});

function generator() {
  return regeneratorRuntime.wrap(function generator$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return 1;

        case 2:
          _context.next = 4;
          return 2;

        case 4:
          _context.next = 6;
          return 3;

        case 6:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

var gen = generator();
gen.next().value;
gen.next().value;
gen.next().value;