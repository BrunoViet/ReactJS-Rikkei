import React from "react";
import ListProduct from "./components/ListProduct";
import Cart from "./components/Cart";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
          <ToastContainer />
        </div>
      </>
    )
  }
}
export default App