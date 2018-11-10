import React from "react";
import SimpleStorage from "./SimpleStorage";

export class StepOne extends React.Component {
  constructor() {
    super();
    this.state = {
      companyName: "",
      companyEmail: "",
      companyPhone: "",
      companyAdressStreet: "",
      companyAdressApt: "",
      companyAdressCity: "",
      companyAdressState: "",
      companyAdressZip: "",
    };
    this.initialState = this.state;
  }

  handleNameChange = event => {
    this.setState({
      companyName: event.target.value
    });
  };

  handlePhoneChange = event => {
    this.setState({
      companyPhone: event.target.value
    });
  };

  handleEmailChange = event => {
    this.setState({
      companyEmail: event.target.value
    });
  };

  handleAdressStreetChange = event => {
    this.setState({ companyAdressStreet: event.target.value });
  };

  handleAdressAptChange = event => {
    this.setState({ companyAdressApt: event.target.value });
  };

  handleAdressCityChange = event => {
    this.setState({ companyAdressCity: event.target.value });
  };

  handleStateChange = event => {
    this.setState({ companyAdressState: event.target.value });
  };

  handleAdressZipChange = event => {
    this.setState({ companyAdressZip: event.target.value });
  };

  render() {
    return (
      <div>
        <SimpleStorage parent={this} />
        <h1 className="formHeader">
          Please Fill Out Your Company Information
        </h1>
        <div className="formSection">
          <input
            type="text"
            className="shorterInput"
            value={this.state.companyName}
            onChange={this.handleNameChange}
            name="companyName"
            placeholder="Company Name"
          />
          <input
            type="text"
            className="shorterInput"
            value={this.state.companyPhone}
            onChange={this.handlePhoneChange}
            name="companyPhone"
            placeholder="Company Phone"
          />
          <input
            type="text"
            className="shorterInput"
            value={this.state.companyEmail}
            onChange={this.handleEmailChange}
            name="companyEmail"
            placeholder="Company Email"
          />
        </div>
        <br />
        <hr />
        <div className="formSection">
          <h2 id="addressLabel">Company Adress</h2>
          <br />
          <input
            type="text"
            className="addressInput"
            value={this.state.companyAdressStreet}
            onChange={this.handleAdressStreetChange}
            name="companyAdressStreet"
            placeholder="Street Address"
          />
          <input
            type="text"
            className="addressInput"
            value={this.state.companyAdressApt}
            onChange={this.handleAdressAptChange}
            name="companyAdressApt"
            placeholder="Apt, Unit, Floor"
          />
          <br />
          <input
            type="text"
            className="addressInput"
            value={this.state.companyAdressCity}
            onChange={this.handleAdressCityChange}
            name="companyAdressCity"
            placeholder="City"
          />
          <input
            type="text"
            className="addressInput"
            value={this.state.companyAdressState}
            onChange={this.handleStateChange}
            name="companyAdressState"
            placeholder="State"
          />
          <input
            type="text"
            className="addressInput"
            value={this.state.companyAdressZip}
            onChange={this.handleAdressZipChange}
            name="companyAdressZip"
            placeholder="Zip Code"
          />
        </div>
        <br />
        <hr className="mutliStepLine" />
      </div>
    );
  }
}
