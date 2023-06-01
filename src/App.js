import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     color:"black",
     isShown: false,
     fontSize: 10,
     content:"Hello Babe!"
    }
  }

  handleToggle=() => {
    this.setState({
      isShown: !this.state.isShown  
    })
  }

  handleChangeBackground=() => {
    this.setState({
     color:this.state.color=='black'?'red':'black',
     fontSize:this.state.fontSize==10?14:10,
     content:this.state.content=='Hello Babe!'?"I LOVE U":'Hello Babe!'
    })
  }
  render() {
    return(
      <>
      {this.state.isShown?(
        <>
        <p style={{color:this.state.color,fontSize:this.state.fontSize}}>
        {this.state.content}
        </p>
        <button onClick={this.handleChangeBackground}>Change</button>
        </> 
      ):(
        ""
      )}
      <button onClick={this.handleToggle}>Toggle</button>
      </>
    )
  }
}
export default App