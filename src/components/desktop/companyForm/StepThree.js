import React from "react";
import SimpleStorage from "./SimpleStorage";

export class StepThree extends React.Component {
  constructor() {
    super();
    this.state = {
      flavors: "",
      capacity: "",
      coco: "",
      vanilla: "",
      strawberry: ""
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

  handleCapacity = event => {
    this.setState({
      capacity: event.target.capacity
    });
  };

  render() {
    return (
      <div>
        <SimpleStorage parent={this} />
        <h2 className="formHeader">
          Please Indicate Your Administrator and Current Plan
        </h2>
        <div className="formSection2">
          <label htmlFor="flavors">What flavors do you want?</label>
          <div>
            <label className="form-check-label">
              <input
                type="checkbox"
                checked={this.state.coco}
                onChange={this.handleCoco}
                className="flavors"
              />
              coco
            </label>
            <label className="form-check-label">
              <input
                type="checkbox"
                checked={this.state.strawberry}
                onChange={this.handleStrawberry}
                className="flavors"
              />
              strawberry
            </label>
            <label className="form-check-label">
              <input
                type="checkbox"
                checked={this.state.vanilla}
                onChange={this.handleVanilla}
                className="flavors"
              />
              vanilla
            </label>
          </div>
          <hr />
          <label htmlFor="capacity">How Big of a Monthly Order?</label>
          <select
            name="subscription"
            onChange={this.handleCapacity}
            value={this.state.capacity}
            className="signupInputDrop"
          >
            <option value="" disabled selected>
              Look for..
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
