import React from "react";
import SimpleStorage from "./SimpleStorage";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

export class StepTwo extends React.Component {
  constructor() {
    super();
    this.state = {
      contactName: "",
      contactNumber: "",
      contactTitle: "",
      extraInfo: ""
    };
    this.initialState = this.state;
  }

  handleContactName = event => {
    this.setState({ contactName: event.target.value });
  };

  handleContactNumber = event => {
    this.setState({ contactNumber: event.target.value });
  };

  handleContactTitle = event => {
    this.setState({ contactTitle: event.target.value });
  };

  handleExtraInfo = event => {
    this.setState({ extraInfo: event.target.value });
  };

  render() {
    return (
      <div>
        <SimpleStorage parent={this} />
        <h2 className="formHeader">
          Please Indicate Your Enrollment Preferences
        </h2>
        <div className="formSection2">
          <input
            type="text"
            className="shorterInput"
            value={this.state.companyPhone}
            onChange={this.handlePhoneChange}
            name="companyPhone"
            placeholder="Your name"
          />
          <input
            type="text"
            className="dropDownInput"
            onChange={this.handleContactNumber}
            value={this.state.contactNumber}
            name="contactNumber"
            placeholder="Your contact number"
          />
          <input
            type="text"
            className="shorterInput"
            value={this.state.contactTitle}
            onChange={this.handleContactTitle}
            name="contactTitle"
            placeholder="Your title"
          />
          <hr />
          <label htmlFor="extraInfo">Any extra information about yourself?</label>
          <br />
          <input
            type="text"
            id="message"
            value={this.state.extraInfo}
            onChange={this.handleExtraInfo}
            name="extraInfo"
          />
        </div>
        <br />
        <hr className="mutliStepLine" />
      </div>
    );
  }
}
