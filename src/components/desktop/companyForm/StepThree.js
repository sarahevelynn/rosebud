import React from "react";
import SimpleStorage from "./SimpleStorage";

export class StepThree extends React.Component {
  constructor() {
    super();
    this.state = {
      flavors: "",
      capacity: "",
    };
    this.initialState = this.state;
  }

  handleFlavors = event => {
    this.setState({
      flavors: event.target.flavors
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
          <label htmlFor="flavors">
            What flavors do you want?
          </label>
          <select
                name="flavors"
                onChange={this.handleFlavors}
                value={this.state.flavors}
                className="signupInputDrop"
              >
                <option value="" disabled selected>
                  Looking to carry
                </option>
                <option>coco</option>
                <option>vanilla</option>
                <option>strawberry</option>
              </select>
          <hr />
          <label htmlFor="capacity">
            How much can you handle?
          </label>
          <input
            type="text"
            className="shorterInput"
            value={this.state.capacity}
            onChange={this.handleCapacity}
            name="capacity"
          />
        </div>
        <br />
        <hr className="mutliStepLine" />
      </div>
    );
  }
}
