import React from "react";
import ListProduct from "./components/ListProduct";
import Cart from "./components/Cart";

class App extends React.Component {

  render() {
    return (
      <>
        <div className="row">
          <div className="col-6">
            <ListProduct />
          </div>
          <div className="col-6">
            <Cart />
          </div>
        </div>
      </>
    )
  }
}
export default App