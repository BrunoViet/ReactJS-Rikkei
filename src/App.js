import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     number:'',
     array:[],
     total:0
    }
  }

  handleChange=(e) => {
    this.setState({
      number: Number(e.target.value)
    })
  }

  submitForm=(e) => {
    e.preventDefault();
    this.setState({
      array:[...this.state.array,this.state.number],
      total:this.state.total+this.state.number,
      number:''
    })
  }
  render() {
    return(
      <>
      <form onSubmit={this.submitForm}>
        <input 
        type="number"
        value={this.state.number}
        onChange={this.handleChange}/>
        <button type="submit">Submit</button>
      </form>
      <div>
        {this.state.array.join("+") + "="+this.state.total}
      </div>
      </>
    )
  }
}
export default App