# react-interval

[![Version](http://img.shields.io/npm/v/react-interval.svg)](https://www.npmjs.org/package/react-interval)

A [react](https://github.com/facebook/react) setInterval mixin for mere mortals.
Any intervals that are set are automatically cleared based on the component life cycle.

**WARNING:** If you are performing an async action, you should still check if the component is mounted.


## Example

``` javascript
var Interval = require("react-interval")

module.exports = React.createClass({
	mixins: [Interval()],

	componentDidMount: function () {
		var self = this

		this.setTimeout(function () {
			self.setState({ lastUpdated: new Date() })
		}, 1000)

		this.setInterval(function () {
			self.setState({ lastUpdated: new Date() })
		}, 1000)

		this.setIntervalWait(function (callback) {
			request.get("myapi.com/data", function(err, res) {
				// component may have unmounted before request finished
				if (!self.isMounted) return callback()

				self.setState({ data: res.body })

				callback()
			})
		}, 4000)
	},

	render: function () {
		// ... etc
	}
})
```


## License

This library is free and open-source software released under the MIT license.
