function clearTimers () {
  this.clearIntervals()
  this.clearTimeouts()
}

module.exports = function Timers () {
  let intervals, timeouts

  return {
    clearIntervals () { intervals.forEach(clearInterval) },
    clearTimeouts () { timeouts.forEach(clearTimeout) },
    clearInterval (... args) { return clearInterval(... args) },
    clearTimeout (... args) { return clearTimeout(... args) },
    clearTimers,

    componentWillMount () {
      intervals = []
      timeouts = []
    },
    componentWillUnmount: clearTimers,

    setInterval (callback, ... args) {
      return intervals[intervals.push(setInterval((... params) => { callback.call(this, ... params) }, ... args)) - 1]
    },
    setTimeout (callback, ... args) {
      return timeouts[timeouts.push(setTimeout((... params) => { callback.call(this, ... params) }, ... args)) - 1]
    }
  }
}
