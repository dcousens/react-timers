var GLOBAL = global || window

function clearTimers () {
  this.clearIntervals()
  this.clearTimeouts()
}

module.exports = {
  clearIntervals () { this.__rt_intervals.forEach(GLOBAL.clearInterval) },
  clearTimeouts () { this.__rt_timeouts.forEach(GLOBAL.clearTimeout) },
  clearInterval (... args) { return GLOBAL.clearInterval(... args) },
  clearTimeout (... args) { return GLOBAL.clearTimeout(... args) },
  clearTimers,

  componentWillMount () {
    this.__rt_intervals = []
    this.__rt_timeouts = []
  },
  componentWillUnmount: clearTimers,

  setInterval (callback, ... args) {
    return this.__rt_intervals[this.__rt_intervals.push(GLOBAL.setInterval((... params) => { callback.call(this, ... params) }, ... args)) - 1]
  },
  setTimeout (callback, ... args) {
    return this.__rt_timeouts[this.__rt_timeouts.push(GLOBAL.setTimeout((... params) => { callback.call(this, ... params) }, ... args)) - 1]
  }
}
