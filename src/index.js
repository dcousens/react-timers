function clearTimers () {
  this.clearImmediate()
  this.clearInterval()
  this.clearTimeouts()
}

module.exports = function Timers () {
  let immediates, intervals, timeouts

  return {
    clearImmediates () { immediates.forEach(clearImmediate) },
    clearIntervals () { intervals.forEach(clearInterval) },
    clearTimeouts () { timeouts.forEach(clearTimeout) },
    clearImmediate (... args) { return clearImmediate(... args) },
    clearInterval (... args) { return clearInterval(... args) },
    clearTimeout (... args) { return clearTimeout(... args) },
    clearTimers,

    componentWillMount () {
      immediates = []
      intervals = []
      timeouts = []
    },
    componentWillUnmount: clearTimers,

    countDown (callback, timeout, interval) {
      const sleep = Math.min(timeout, interval)

      this.setTimeout(() => {
        const remaining = timeout - sleep

        callback(remaining)
        if (remaining <= 0) return

        this.countDown(callback, remaining, interval)
      }, sleep)
    },

    setImmediate (callback, ... args) {
      return immediates[immediates.push(setImmediate((... params) => { callback.call(this, ... params) }, ... args)) - 1]
    },
    setInterval (callback, ... args) {
      return intervals[intervals.push(setInterval((... params) => { callback.call(this, ... params) }, ... args)) - 1]
    },
    setTimeout (callback, ... args) {
      return timeouts[timeouts.push(setTimeout((... params) => { callback.call(this, ... params) }, ... args)) - 1]
    }
  }
}
