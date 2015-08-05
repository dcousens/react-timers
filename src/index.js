function clearTimers () {
  this.clearInterval()
  this.clearTimeouts()
}

module.exports = function Timers () {
  let intervals, timeouts

  return {
    clearIntervals () { intervals.forEach(clearInterval) },
    clearTimeouts () { timeouts.forEach(clearTimeout) },
    clearTimers: clearTimers,

    componentWillMount () {
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

    setInterval (callback, ... args) { intervals.push(setInterval((... params) => { callback.call(this, ... params) }, ... args)) },
    setTimeout (callback, ... args) { timeouts.push(setTimeout((... params) => { callback.call(this, ... params) }, ... args)) }
  }
}
