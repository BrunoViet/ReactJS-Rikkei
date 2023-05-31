import React from "react";
import "./App.css";
import Header from "./Component/Header";
import ListItems from "./Component/ListIteam";


class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <ListItems />
      </div>
    );
  }
}


export default App;