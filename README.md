# react-timers

[![Version](http://img.shields.io/npm/v/react-timers.svg)](https://www.npmjs.org/package/react-timers)

A [react](https://github.com/facebook/react) `setInterval`/`setTimeout` mixin for mere mortals.
Any intervals that are set are automatically cleared based on the component life cycle.

**WARNING:** If you are performing an async action, you should still check if the component is mounted.


## Example

``` javascript
var Timers = require("react-timers")

module.exports = React.createClass({
	mixins: [Timers()],

	componentDidMount: function () {
		var self = this

		this.setTimeout(function () {
			self.setState({ lastUpdated: new Date() })
		}, 1000)

		this.setInterval(function () {
			self.setState({ lastUpdated: new Date() })
		}, 1000)

		this.countDown(function (remaining) {
			// remaining as 3000... 2000... 1000... 0
			if (remaining === 0) {
				self.setState({ text: 'Go!' })
			} else {
				self.setState({ text: Math.ceil(remaining / 1000) })
			}
		}, 3000, 1000)
	},

	render: function () {
		// ... etc
	}
})
```


## License

This library is free and open-source software released under the MIT license.
