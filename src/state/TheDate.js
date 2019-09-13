import React from 'react';

class TheDate extends React.Component {
  constructor(props) {
    super(props)
    this.state = { datetime: new Date() };
    console.log('constructor')
  }

  //After state is called, update with setState so React knows it is changing.
  componentDidMount() {
    console.log('componentDidMount')
    this.interval = setInterval(() => {
      this.setState({
        datetime: new Date()
      })
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }
  render() {
    console.log('render');
    return (
      <div>{this.state.datetime.toLocaleString()}</div>
    )
}
}

export default TheDate