import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue:""
    }
  }

  handleChange=(e) => {
    this.setState({
      inputValue: e.target.value
    })
  }

  submitForm=(e) => {
    e.preventDefault();
    alert('Ban vua nhap: '+ this.state.inputValue)
  }
  render() {
    return(
      <>
      <form onSubmit={this.submitForm}>
        <input onChange={this.handleChange}/>
        <button type="submit">Submit</button>
      </form>
      </>
    )
  }
}
export default App