import React from "react";
import SimpleStorage from "./SimpleStorage";

export class StepThree extends React.Component {
  constructor() {
    super();
    this.state = {
      flavors: "",
      capacity: ""
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
          <label htmlFor="flavors">What flavors do you want?</label>
          <label className="form-check-label">
            <input
              type="checkbox"
              checked={this.state.isDrake}
              onChange={this.toggleChangeDrake}
              className="flavors"
            />
            coco
          </label>
          <label className="form-check-label">
            <input
              type="checkbox"
              checked={this.state.isDrake}
              onChange={this.toggleChangeDrake}
              className="flavors"
            />
            strawberry
          </label>
          <label className="form-check-label">
            <input
              type="checkbox"
              checked={this.state.isDrake}
              onChange={this.toggleChangeDrake}
              className="flavors"
            />
            vanilla
          </label>
          <hr />
          <label htmlFor="capacity">How much can you handle?</label>
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
