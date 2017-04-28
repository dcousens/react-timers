var GLOBAL = global || window

function clearTimers () {
  this.clearIntervals()
  this.clearTimeouts()
}

module.exports = {
  clearIntervals: function clearIntervals () { this.__rt_intervals.forEach(GLOBAL.clearInterval) },
  clearTimeouts: function clearTimeouts () { this.__rt_timeouts.forEach(GLOBAL.clearTimeout) },
  clearInterval: function clearInterval (id) { return GLOBAL.clearInterval(id) },
  clearTimeout: function clearTimeout (id) { return GLOBAL.clearTimeout(id) },
  clearTimers: clearTimers,

  componentWillMount: function componentWillMount () {
    this.__rt_intervals = []
    this.__rt_timeouts = []
  },
  componentWillUnmount: clearTimers,

  setInterval: function setInterval (callback) {
    var id = GLOBAL.setInterval(callback.bind(this), [].slice.call(arguments, 1))
    this.__rt_intervals.push(id)
    return id
  },
  setTimeout: function setTimeout (callback) {
    var id = GLOBAL.setTimeout(callback.bind(this), [].slice.call(arguments, 1))
    this.__rt_timeouts.push(id)
    return id
  }
}
