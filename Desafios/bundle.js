"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var delay = function delay() {
  return new Promise(function (resolve) {
    return console.log(setTimeout(resolve, 1000));
  });
};

function executaPromise() {
  return _executaPromise.apply(this, arguments);
}

function _executaPromise() {
  _executaPromise = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.t0 = console;
            _context.next = 3;
            return delay();

          case 3:
            _context.t1 = _context.sent;

            _context.t0.log.call(_context.t0, _context.t1);

            _context.t2 = console;
            _context.next = 8;
            return delay();

          case 8:
            _context.t3 = _context.sent;

            _context.t2.log.call(_context.t2, _context.t3);

            _context.t4 = console;
            _context.next = 13;
            return delay();

          case 13:
            _context.t5 = _context.sent;

            _context.t4.log.call(_context.t4, _context.t5);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _executaPromise.apply(this, arguments);
}

executaPromise();
