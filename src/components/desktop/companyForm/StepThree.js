import React from "react";
import SimpleStorage from "./SimpleStorage";
import berry from "./Assets/berry.png";
import mint from "./Assets/mint.png";
import vanilla from "./Assets/vanilla.png";

export class StepThree extends React.Component {
  constructor() {
    super();
    this.state = {
      checked: false,
      quantity: "",
      berry: false,
      vanilla: false,
      mint: false
    };
    this.initialState = this.state;
  }

  handleBerry = event => {
    this.setState(prevState => ({
      berry: !prevState.berry
    }));
  };

  handleVanilla = event => {
    this.setState(prevState => ({
      vanilla: !prevState.vanilla
    }));
  };

  handleMint = event => {
    this.setState(prevState => ({
      mint: !prevState.mint
    }));
  };

  handleQuantity = event => {
    this.setState({
      quantity: event.target.quantity
    });
  };

  render() {
    return (
      <div>
        <SimpleStorage parent={this} />
        <h2 className="formHeader">
          Please Indicate Your Flavor Preference and Amount
        </h2>
        <div className="formSection2">
          <div>
            <label className="formLabel">
              <input
                type="checkbox"
                checked={this.state.berry}
                onChange={this.handleBerry}
                className="flavors"
              />
              <img src={berry} className="flavorImage" alt="berry" />
            </label>
            <label className="formLabel">
              <input
                type="checkbox"
                checked={this.state.mint}
                onChange={this.handleMint}
                className="flavors"
              />
              <img src={mint} className="flavorImage" alt="mountain mint" />
            </label>
            <label className="formLabel">
              <input
                type="checkbox"
                checked={this.state.vanilla}
                onChange={this.handleVanilla}
                className="flavors"
              />
              <img src={vanilla} className="flavorImage" alt="vanilla" />
            </label>
          </div>
          <hr />
          <h3 id="order" htmlFor="quantity">
            Monthly Order Quantity?
          </h3>
          <select
            name="quantity"
            onChange={this.handleQuantity}
            value={this.state.quantity}
            className="signupInputDrop"
          >
            <option value="" disabled selected>
              Looking for..
            </option>
            <option>50 Pints/month</option>
            <option>100 Pints/month</option>
            <option>100+ Pints/month</option>
          </select>
        </div>
        <br />
        <hr className="mutliStepLine" />
      </div>
    );
  }
}
