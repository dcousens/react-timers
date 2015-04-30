module.exports = function Interval() {
  var intervals = []

  return {
    clearIntervals: function() {
      intervals.map(clearInterval)
    },

    componentWillMount: function() {
      intervals = []
    },

    componentWillUnmount: function() {
      this.clearIntervals()
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
    }
  }
}
