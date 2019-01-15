"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rus = exports.eu = exports.money = void 0;
var sponsors = {
  cash: [40000, 5000, 30400, 12000],
  eu: ['SRL', 'PLO', 'J&K'],
  rus: ['RusAuto', 'SBO']
};

var calcCash = function calcCash(own) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  var everyCash = args[0];
  var sumEveryCash = everyCash.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  });
  var total = own ? sumEveryCash : own + sumEveryCash;
  return total;
};

var money = calcCash(null, sponsors.cash);
exports.money = money;
var eu = sponsors.eu,
    rus = sponsors.rus;
exports.rus = rus;
exports.eu = eu;