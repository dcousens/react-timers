let React = require('react')
let Timers = require('../../src/')

let App = React.createClass({
  mixins: [Timers()],

  getInitialState () {
    return {
      text: new Date()
    }
  },

  componentDidMount () {
    this.setInterval(() => {
      this.setState({
        text: new Date()
      })
    }, 1000)
  },

  render () {
    return <h4>{this.state.text.toString()}</h4>
  }
})

React.render(React.createElement(App), document.getElementById('app'))
