import React from "react";
import Modal from "react-modal";
import SimpleStorage from "../../stores/SimpleStorage";
import SaveAway401kPetiteK from "./Assets/SaveAway401kPetiteK.pdf";
import SaveAway401kSingularK from "./Assets/SaveAway401kSingularK.pdf";
import SaveAway401kUniversalK from "./Assets/SaveAway401kUniversalK.pdf";

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
      AutoEnroll: "",
      enrollmentPercentage: "",
      planType: "",
      provider: "",
      paymentCycle: "",
      modalIsOpen: false,
      providerOtherTwo: false,
      paymentCycleOther: false
    };
    this.initialState = this.state;
    Modal.setAppElement(document.body);
  }

  providerOtherTwo = () => {
    return (
      <div>
        <label htmlFor="provider">Please indicate your provider</label>
        <input
          type="text"
          name="provider"
          className="signupInput"
          onChange={this.handleProviderChangeTwo}
          value={this.state.provider}
        />
      </div>
    );
  };

  paymentCycleOther = () => {
    return (
      <div>
        <label htmlFor="paymentCycle">Please indicate your payment cycle</label>
        <input
          type="text"
          name="paymentCycle"
          className="signupInput"
          onChange={this.handlePaymentCycleChange}
          value={this.state.paymentCycle}
        />
      </div>
    );
  };

  handleAutoEnrollChange = event => {
    this.setState({ AutoEnroll: event.target.value });
  };

  handlePercentageChange = event => {
    this.setState({ enrollmentPercentage: event.target.value });
  };

  handlePlanChange = event => {
    this.setState({ planType: event.target.value });
  };

  handleProviderChangeTwo = event => {
    this.setState({ provider: event.target.value });
  };

  handlePaymentCycleChange = event => {
    this.setState({ paymentCycle: event.target.value }, () => {
      this.props.sendData(this.state);
    });
  };

  handleOtherProviderChangeTwo = event => {
    this.setState(
      { provider: event.target.value, providerOtherTwo: false },
      () => {
        if (this.state.provider === "Other") {
          this.setState({ providerOtherTwo: true });
        }
      }
    );
  };

  handlePaymentCycleOtherChange = event => {
    this.setState(
      { paymentCycle: event.target.value, paymentCycleOther: false },
      () => {
        if (this.state.paymentCycle === "Other") {
          this.setState({ paymentCycleOther: true });
        } else {
          this.props.sendData(this.state);
        }
      }
    );
  };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    return (
      <div>
        <SimpleStorage parent={this} />
        <h2 className="formHeader">
          Please Indicate Your Enrollment Preferences
        </h2>
        <div className="formSection2">
          <label htmlFor="AutoEnroll">
            Would you like to Auto Enroll Employees?
          </label>
          <select
            name="AutoEnroll"
            onChange={this.handleAutoEnrollChange}
            value={this.state.AutoEnroll}
            className="signupInputDrop"
          >
            <option value="" disabled selected>
              Please Select Yes or No
            </option>
            <option>Yes</option>
            <option>No</option>
          </select>
          <hr />
          <label htmlFor="enrollmentPercentage">
            Auto Enrollment Percentage
          </label>
          <input
            type="text"
            className="dropDownInput"
            onChange={this.handlePercentageChange}
            value={this.state.enrollmentPercentage}
            name="enrollmentPercentage"
            placeholder="Insert percentage you want to match"
          />
          <hr />
          <div id="planModal">
            <div>
              <label htmlFor="planType">Plan Type</label>
              <select
                name="planType"
                onChange={this.handlePlanChange}
                value={this.state.planType}
                className="signupInputDrop"
              >
                <option value="" disabled selected>
                  Looking to start a..
                </option>
                <option>SingularK</option>
                <option>PetiteK</option>
                <option>UniversalK</option>
              </select>
            </div>
            <button
              id="modalButton"
              className="modal-open"
              onClick={this.openModal}
            >
              Which Plan is Right for Me?
            </button>
            <Modal
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              contentLabel="planTypeModal"
              style={customStyles}
            >
              <div id="modal">
                <button onClick={this.closeModal} className="submitButton">
                  Close
                </button>
                <div>
                  <div className="modalPlan">
                    <a href={SaveAway401kSingularK} target="_blank">
                      <h1>SingularK</h1>
                    </a>
                    <div className="readMoreModal">
                      <h3> Read more about this plan</h3>
                      <a href={SaveAway401kSingularK} target="_blank">
                        <h4 className="modalPlanButton">Here</h4>
                      </a>
                    </div>
                  </div>
                  <div className="modalPlan2">
                    <a href={SaveAway401kPetiteK} target="_blank">
                      <h1>PetiteK</h1>
                    </a>
                    <div className="readMoreModal">
                      <h3> Read more about this plan</h3>
                      <a href={SaveAway401kPetiteK} target="_blank">
                        <h4 className="modalPlanButton">Here</h4>{" "}
                      </a>
                    </div>
                  </div>
                  <div className="modalPlan">
                    <a href={SaveAway401kUniversalK} target="_blank">
                      <h1>UniversalK</h1>
                    </a>

                    <div className="readMoreModal">
                      <h3> Read more about this plan</h3>
                      <a href={SaveAway401kUniversalK} target="_blank">
                        <h4 className="modalPlanButton">Here</h4>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Modal>
          </div>
        </div>

        <hr />
        <div className="formSection2">
          <label htmlFor="provider">Payroll Provider</label>
          <select
            className="signupInputDrop"
            name="provider"
            onChange={this.handleOtherProviderChangeTwo}
            value={this.state.provider}
          >
            <option value="" disabled selected>
              Select something...
            </option>
            <option>ADP</option>
            <option>Intuit</option>
            <option>Gusto</option>
            <option>OnPay</option>
            <option>SurePayroll</option>
            <option>Other</option>
          </select>
          {this.state.providerOtherTwo ? this.providerOtherTwo() : null}
          <hr />
          <label htmlFor="paymentCycle">Payment Cycle</label>
          <select
            name="paymentCycle"
            onChange={this.handlePaymentCycleOtherChange}
            value={this.state.paymentCycle}
          >
            <option value="" disabled selected>
              Select something...
            </option>
            <option value="Weekly">Weekly</option>
            <option value="Bi-Weekly">Bi-Weekly</option>
            <option value="Semi-Monthly">Semi-Monthly</option>
            <option value="Other">Other</option>
          </select>
          {this.state.paymentCycleOther ? this.paymentCycleOther() : null}
        </div>
        <br />
        <hr className="mutliStepLine" />
      </div>
    );
  }
}
