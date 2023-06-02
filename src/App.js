import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {

      time: new Date()
    }
    // this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    // setInterval(this.getTime, 1000);
    this.getTime()
  }

  componentDidUpdate() {
    console.log("Update lai 1 lan ")
    setTimeout(this.getTime, 1000);
  }

  getTime = () => {
    this.setState({
      time: new Date()
    })
  }

  render() {
    return (
      <div>
        <p>{this.state.time.toLocaleTimeString()}</p>
      </div>
    )
  }
}
export default App