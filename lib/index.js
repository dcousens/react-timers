"use strict";

function clearTimers() {
  this.clearImmediate();
  this.clearInterval();
  this.clearTimeouts();
}

module.exports = function Timers() {
  var immediates = undefined,
      intervals = undefined,
      timeouts = undefined;

  return {
    clearImmediates: function clearImmediates() {
      immediates.forEach(clearImmediate);
    },
    clearIntervals: function clearIntervals() {
      intervals.forEach(clearInterval);
    },
    clearTimeouts: function clearTimeouts() {
      timeouts.forEach(clearTimeout);
    },
    clearImmediate: (function (_clearImmediate) {
      function clearImmediate() {
        return _clearImmediate.apply(this, arguments);
      }

      clearImmediate.toString = function () {
        return _clearImmediate.toString();
      };

      return clearImmediate;
    })(function () {
      return clearImmediate.apply(undefined, arguments);
    }),
    clearInterval: (function (_clearInterval) {
      function clearInterval() {
        return _clearInterval.apply(this, arguments);
      }

      clearInterval.toString = function () {
        return _clearInterval.toString();
      };

      return clearInterval;
    })(function () {
      return clearInterval.apply(undefined, arguments);
    }),
    clearTimeout: (function (_clearTimeout) {
      function clearTimeout() {
        return _clearTimeout.apply(this, arguments);
      }

      clearTimeout.toString = function () {
        return _clearTimeout.toString();
      };

      return clearTimeout;
    })(function () {
      return clearTimeout.apply(undefined, arguments);
    }),
    clearTimers: clearTimers,

    componentWillMount: function componentWillMount() {
      immediates = [];
      intervals = [];
      timeouts = [];
    },
    componentWillUnmount: clearTimers,

    setImmediate: (function (_setImmediate) {
      function setImmediate(_x) {
        return _setImmediate.apply(this, arguments);
      }

      setImmediate.toString = function () {
        return _setImmediate.toString();
      };

      return setImmediate;
    })(function (callback) {
      var _this = this;

      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return immediates[immediates.push(setImmediate.apply(undefined, [function () {
        for (var _len2 = arguments.length, params = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          params[_key2] = arguments[_key2];
        }

        callback.call.apply(callback, [_this].concat(params));
      }].concat(args))) - 1];
    }),
    setInterval: (function (_setInterval) {
      function setInterval(_x2) {
        return _setInterval.apply(this, arguments);
      }

      setInterval.toString = function () {
        return _setInterval.toString();
      };

      return setInterval;
    })(function (callback) {
      var _this2 = this;

      for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        args[_key3 - 1] = arguments[_key3];
      }

      return intervals[intervals.push(setInterval.apply(undefined, [function () {
        for (var _len4 = arguments.length, params = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          params[_key4] = arguments[_key4];
        }

        callback.call.apply(callback, [_this2].concat(params));
      }].concat(args))) - 1];
    }),
    setTimeout: (function (_setTimeout) {
      function setTimeout(_x3) {
        return _setTimeout.apply(this, arguments);
      }

      setTimeout.toString = function () {
        return _setTimeout.toString();
      };

      return setTimeout;
    })(function (callback) {
      var _this3 = this;

      for (var _len5 = arguments.length, args = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
        args[_key5 - 1] = arguments[_key5];
      }

      return timeouts[timeouts.push(setTimeout.apply(undefined, [function () {
        for (var _len6 = arguments.length, params = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
          params[_key6] = arguments[_key6];
        }

        callback.call.apply(callback, [_this3].concat(params));
      }].concat(args))) - 1];
    })
  };
};