"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.employersNames = void 0;
var employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];
var names = [];
employers.forEach(function (employer) {
  if (employer.length > 0 && employer.length !== '') {
    names.push(employer);
  }
});
var employersNames = names.map(function (employersName) {
  return employersName.toLowerCase().trim();
});
exports.employersNames = employersNames;