module.exports = function Interval() {
  var intervals = []
  var timeouts = []

  return {
    clearIntervals: function() {
      intervals.map(clearInterval)
    },

    clearTimeouts: function() {
      timeouts.map(clearTimeout)
    },

    componentWillMount: function() {
      intervals = []
      timeouts = []
    },

    componentWillUnmount: function() {
      this.clearIntervals()
      this.clearTimeouts()
    },

    setInterval: function(callback, interval) {
      var self = this

      intervals.push(setInterval(function() {
        if (!self.isMounted()) return

        callback()
      }, interval))
    },

    setIntervalAsync: function(callback, interval) {
      var active = false
      var self = this

      intervals.push(setInterval(function() {
        if (active) return
        if (!self.isMounted()) return

        active = true
        callback(function() {
          active = false
        })
      }, interval))
    },

    setTimeout: function(callback, timeout) {
      var self = this

      timeouts.push(setTimeout(function() {
        if (!self.isMounted()) return

        callback()
      }, timeout))
    }
  }
}
