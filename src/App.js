import React from "react";

class App extends React.Component {
  constructor(){
    super();
    this.state={
      studentName:'Phuong'
    }
    // this.handleChange = this.handleChange.bind(this)
  }

  handleChange(){
    this.setState({
      studentName:this.state.studentName=='Sang'?'Phuong':'Sang'
    })
   
  }
  render(){
    return(
      <div>
        Student Name: {this.state.studentName}
        <button onClick={()=>this.handleChange()}>Change Student Name</button>
      </div>
    )
  }
}
export default App