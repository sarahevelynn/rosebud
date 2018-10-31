import React from "react";
import SimpleStorage from "../../stores/SimpleStorage";

export class StepThree extends React.Component {
  constructor() {
    super();
    this.state = {
      Admin: "",
      PlanStatus: "",
      adminOtherTwo: false,
      AdminName: "",
      AdminPhone: "",
      AdminEmail: ""
    };
    this.initialState = this.state;
  }

  adminOtherTwo = () => {
    return (
      <div>
        <label htmlFor="Admin">Please Provide Admin Info</label>
        <input
          type="text"
          name="AdminName"
          className="signupInput"
          onChange={this.handleAdminName}
          placeholder="Name"
          value={this.state.AdminName}
        />
        <input
          type="text"
          name="AdminPhone"
          className="signupInput"
          onChange={this.handleAdminPhone}
          placeholder="Phone"
          value={this.state.AdminPhone}
        />
        <input
          type="text"
          name="AdminEmail"
          className="signupInput"
          onChange={this.handleAdminEmail}
          placeholder="Email"
          value={this.state.AdminEmail}
        />
      </div>
    );
  };

  handleOtherAdminChangeTwo = event => {
    this.setState({ Admin: event.target.value, adminOtherTwo: false }, () => {
      if (this.state.Admin === "No, it will be someone else") {
        this.setState({ adminOtherTwo: true });
      }
    });
  };

  handleAdminChange = event => {
    this.setState({ Admin: event.target.value });
  };

  handleAdminName = event => {
    this.setState({
      AdminName: event.target.value
    });
  };

  handleAdminPhone = event => {
    this.setState({
      AdminPhone: event.target.value
    });
  };

  handleAdminEmail = event => {
    this.setState({
      AdminEmail: event.target.value
    });
  };

  handlePlanStatusChange = event => {
    this.setState({ PlanStatus: event.target.value }, () => {
      this.props.sendData(this.state);
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
          <label htmlFor="Admin">
            Will you be the Administrator of the plan?
          </label>
          <select
            name="Admin"
            onChange={this.handleOtherAdminChangeTwo}
            value={this.state.Admin}
            className="signupInputDrop"
          >
            <option value="" disabled selected>
              Please Select Yes or No
            </option>
            <option>Yes, use my contact information as primary</option>
            <option>No, it will be someone else</option>
          </select>
          {this.state.adminOtherTwo ? this.adminOtherTwo() : null}
          <hr />
          <label htmlFor="PlanStatus">
            Does your company have a 401k plan now?
          </label>
          <select
            name="PlanStatus"
            onChange={this.handlePlanStatusChange}
            value={this.state.PlanStatus}
            className="signupInputDrop"
          >
            <option value="" disabled selected>
              Please Select Yes or No
            </option>
            <option>No, this is a new plan</option>
            <option>Yes, we will roll it over to SaveAway401k</option>
          </select>
        </div>
        <br />
        <hr className="mutliStepLine" />
      </div>
    );
  }
}
