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
      berry: "",
      vanilla: "",
      mint: ""
    };
    this.initialState = this.state;
  }

  handleCoco = event => {
    this.setState({
      flavors: event.target.coco
    });
  };

  handleVanilla = event => {
    this.setState({
      flavors: event.target.vanilla
    });
  };

  handleStrawberry = event => {
    this.setState({
      flavors: event.target.strawberry
    });
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
                checked={this.state.coco}
                onChange={this.handleCoco}
                className="flavors"
              />
              <img src={berry} className="flavorImage" alt="berry" />
            </label>
            <label className="formLabel">
              <input
                type="checkbox"
                checked={this.state.strawberry}
                onChange={this.handleStrawberry}
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
          <h3 id="order" htmlFor="quantity">Monthly Order Quantity?</h3>
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
