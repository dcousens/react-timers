var GLOBAL = global || window

function clearTimers () {
  this.clearIntervals()
  this.clearTimeouts()
}

module.exports = function Timers () {
  let intervals, timeouts

  return {
    clearIntervals () { intervals.forEach(GLOBAL.clearInterval) },
    clearTimeouts () { timeouts.forEach(GLOBAL.clearTimeout) },
    clearInterval (... args) { return GLOBAL.clearInterval(... args) },
    clearTimeout (... args) { return GLOBAL.clearTimeout(... args) },
    clearTimers,

    componentWillMount () {
      intervals = []
      timeouts = []
    },
    componentWillUnmount: clearTimers,

    setInterval (callback, ... args) {
      return intervals[intervals.push(GLOBAL.setInterval((... params) => { callback.call(this, ... params) }, ... args)) - 1]
    },
    setTimeout (callback, ... args) {
      return timeouts[timeouts.push(GLOBAL.setTimeout((... params) => { callback.call(this, ... params) }, ... args)) - 1]
    }
  }
}
