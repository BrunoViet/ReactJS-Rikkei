import React from "react";
class RollDice extends React.Component {
    constructor(props) {
      super(props);
    }
  
    handleClick=() =>{
      const { rolling, rollDice } = this.props;
      if (!rolling) {
        rollDice();
      }
    }
  
    render() {
      const { rolling } = this.props;
      return (
        <div>
          <button onClick={this.handleClick} disabled={rolling}>
            {rolling ? "Rolling..." : "Roll Dice!"}
          </button>
        </div>
      );
    }
  }
  export default RollDice;