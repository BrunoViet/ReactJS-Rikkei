import React from "react";
class Item extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            quantity:0
        }
    }

    handleBuy=()=>{
        this.setState({
            quantity:this.state.quantity+1
        })
    }

    handleSell=()=>{
        this.setState({
            quantity:this.state.quantity-1
        })
    }
    
  render() {
    const { img, name, price } = this.props;
    return (
      <>
        <div className='element'>
          <img src={img} alt='Photo' />
          <p id='name'>{name}</p>
          <span id='price'>USD {price}</span>
          <div className='buyAndSellContainer'>
            <button className='btn-sell' onClick={this.handleSell} id='sell'>
              Sell
            </button>
            <span id='amount'>{this.state.quantity}</span>
            <button className='btn-buy' onClick={this.handleBuy} id='buy'>
              Buy
            </button>
          </div>
        </div>
      </>
    );
  }
}
export default Item;