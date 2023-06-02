import React from "react";
import Child from "./component/Child";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      age: 26
    }
    console.log('App constructor')
    this.handleChange = this.handleChange.bind(this)
  }

  componentWillMount() {
    console.log('App componentWillMount');
  }

  handleChange() {
    this.setState({
      age: 29
    })
  }
  render() {
    console.log('app render')
    return (
      <>
        <div>App Component</div>
        <button onClick={this.handleChange}>Change Age</button>
        <Child age={this.state.age} />
      </>

    )
  }

  componentDidMount() {
    console.log('App componentDidMount');
  }
}
export default App