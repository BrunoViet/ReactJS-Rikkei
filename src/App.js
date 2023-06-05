import React from "react";

import Login from "./component/Login";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      age: 26
    }
  }
  render() {
    return (
      <div>
        <Login />
      </div>
    )
  }

}
export default App