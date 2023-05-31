import React from "react";

class App extends React.Component {
  // Cau2
//   sum=(a,b)=>{
//     return a+b
//   }
//   render() {

//     const number1=6;
//     const number2=8;
//   return(
//     <div><h1>Tong cua {number1} va {number2} la: {this.sum(number1,number2)}</h1></div>
//   )
//   }

// Cau3

constructor(props) {
  super(props);
  this.state = {
    time:new Date(),
  }
}
render(){
  let time =new Date();
  return(
    <div>
      <h1>Dong ho</h1>
      
    </div>
  )
}

}


export default App;
