import React from "react";

class App extends React.Component {
  constructor(){
    super();
    this.state={
      studentName:'Phuong'
    }
  }
  render(){
    return(
      <div>
        Student Name: {this.state.studentName}
      </div>
    )
  }
}
export default App