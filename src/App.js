// import React, { useState } from 'react';
import React from 'react';
import './App.css';

// function App() {
//   const [result, setResult] = useState(null);

//   const flipCoin = () => {
//     const randomResult = Math.random() < 0.5 ? 'Heads' : 'Tails';
//     setResult(randomResult);
//   };

//   return (
//     <div className="App">
//       <h1>Let's flip a coin!</h1>
//       <button onClick={flipCoin}>Flip</button>
//       {result && <h2>{result}</h2>}
//     </div>
//   );
// }
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      result:'',
      countSap:0,
      countNgua:0,
      imgSrc:"",
    }
  }

  handleCoin=() => {
    let result  = Math.round(Math.random()*10)
    if(result<5&& result>0) {
      this.setState({
        countSap:this.state.countSap+1,
        imgSrc:'https://www.pcgs.com/UserImages/04436864o.jpg'
      })
    }
    if(result>=5){
      this.setState({
        countNgua:this.state.countNgua+1,
        imgSrc:'https://www.pcgs.com/UserImages/04436864r.jpg'
      })
  }
}

  render() {
    return(
      <div style={{textAlign:'center'}}>
        <h1>Ấn nút để tung đồng xu</h1>
        <img src={this.state.imgSrc}/><br/>
        <button style={{fontSize:"100px"}} onClick={this.handleCoin}>Tung đồng xu</button>
        <p style={{fontSize:'50px'}}>
          Sấp:{this.state.countSap} <span> Ngửa:{this.state.countNgua}</span>
        </p>
        
      </div>
    )
  }
}
export default App;
