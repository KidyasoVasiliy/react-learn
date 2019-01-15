"use strict";

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.array.from");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

var _employersNames = require("./helpers/employersNames");

var _money = require("./helpers/money");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MakeBusiness =
/*#__PURE__*/
function () {
  function MakeBusiness(owner, director, cash, emp) {
    _classCallCheck(this, MakeBusiness);

    this.owner = owner;
    this.director = director;
    this.cash = cash;
    this.emp = emp;
    this.sponsors = {
      eu: _money.eu,
      rus: _money.rus
    };
    this.sumSponsors = this.getSumSponsors();
    this.carefulSponsor = this.getCarefulSponsor();
  }

  _createClass(MakeBusiness, [{
    key: "getSumSponsors",
    value: function getSumSponsors() {
      var _this$sponsors = this.sponsors,
          europSponsor = _this$sponsors.eu,
          russianSponsor = _this$sponsors.rus;
      return [].concat(_toConsumableArray(europSponsor), _toConsumableArray(russianSponsor), ['unexpected sponsor']).join(', ');
    }
  }, {
    key: "getCarefulSponsor",
    value: function getCarefulSponsor() {
      var _this$sponsors$eu = _slicedToArray(this.sponsors.eu, 1),
          carefulSponsor = _this$sponsors$eu[0];

      return carefulSponsor;
    }
  }, {
    key: "info",
    get: function get() {
      console.log("\n    We have a business. Owner: ".concat(this.owner, " , director: ").concat(this.director || 'Victor', ". Our budget: ").concat(this.cash, ". And our employers: ").concat(this.emp.join(', '), "\n    And we have a sponsors:\n    ").concat(this.sumSponsors, "\n    Note. Be careful with ").concat(this.carefulSponsor, ". It's a huge risk.\n    "));
      return undefined;
    }
  }]);

  return MakeBusiness;
}();

var info = new MakeBusiness('Sam', null, _money.money, _employersNames.employersNames); // eslint-disable-next-line

info.info;