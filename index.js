function clearTimers () {
  this.clearInterval()
  this.clearTimeouts()
}

module.exports = function Timers () {
  var intervals = []
  var timeouts = []

  return {
    clearIntervals: function () { intervals.forEach(clearInterval) },
    clearTimeouts: function () { timeouts.forEach(clearTimeout) },
    clearTimers: clearTimers,

    componentWillMount: function () {
      intervals = []
      timeouts = []
    },
    componentWillUnmount: clearTimers,

    countDown: function (callback, timeout, interval) {
      var self = this
      var sleep = Math.min(timeout, interval)

      this.setTimeout(function () {
        var remaining = timeout - sleep

        callback(remaining)
        if (remaining <= 0) return

        self.countDown(callback, remaining, interval)
      }, sleep)
    },

    setInterval: function (callback, interval) {
      var self = this

      intervals.push(setInterval(function () {
        callback.call(self)
      }, interval))
    },

    setTimeout: function (callback, timeout) {
      var self = this

      timeouts.push(setTimeout(function () {
        callback.call(self)
      }, timeout))
    }
  }
}
