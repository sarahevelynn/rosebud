import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import SimpleStorage, { resetParentState } from "./SimpleStorage";
import Loader from "react-loader-spinner";

var baseURL = "https://saveaway401k.herokuapp.com/";

const Confirm = ({ history }) => (
  <div>
    <h1>Confirm Info</h1>
    <StepFour history={history} />
  </div>
);

class StepFour extends Component {
  constructor(props) {
    let companyName = JSON.parse(window.localStorage._companyName);
    let companyEmail = JSON.parse(window.localStorage._companyEmail);
    let companyPhone = JSON.parse(window.localStorage._companyPhone);
    let companyAdressStreet = JSON.parse(
      window.localStorage._companyAdressStreet
    );
    let companyAdressApt = JSON.parse(window.localStorage._companyAdressApt);
    let companyAdressCity = JSON.parse(window.localStorage._companyAdressCity);
    let companyAdressState = JSON.parse(
      window.localStorage._companyAdressState
    );
    let companyAdressZip = JSON.parse(window.localStorage._companyAdressZip);
    let contactName = JSON.parse(window.localStorage._contactName);
    let contactNumber = JSON.parse(window.localStorage._contactNumber);
    let contactTitle = JSON.parse(window.localStorage._contactTitle);
    let extraInfo = JSON.parse(window.localStorage._extraInfo);
    let flavors = JSON.parse(window.localStorage._flavors);
    let capacity = JSON.parse(window.localStorage._capacity);
    super(props);
    this.state = {
      redirect: false,
      companyName: companyName,
      companyEmail: companyEmail,
      companyPhone: companyPhone,
      companyAdressStreet: companyAdressStreet,
      companyAdressApt: companyAdressApt,
      companyAdressCity: companyAdressCity,
      companyAdressState: companyAdressState,
      companyAdressZip: companyAdressZip,
      contactName: contactName,
      contactNumber: contactNumber,
      contactTitle: contactTitle,
      extraInfo: extraInfo,
      flavors: flavors,
      capacity: capacity,
      message: "",
      isLoading: false
    };
  }

  getCompanyInfo = event => {
    event.preventDefault();
    var data = new FormData(event.target);
    return {
      companyName: data.get("companyName"),
      companyEmail: data.get("companyEmail"),
      companyPhone: data.get("companyPhone"),
      companyAdressStreet: data.get("companyAdressStreet"),
      companyAdressApt: data.get("companyAdressApt"),
      companyAdressCity: data.get("companyAdressCity"),
      companyAdressState: data.get("companyAdressState"),
      companyAdressZip: data.get("companyAdressZip"),
      contactName: data.get("contactName"),
      contactNumber: data.get("contactNumber"),
      contactTitle: data.get("contactTitle"),
      extraInfo: data.get("extraInfo"),
      flavors: data.get("flavors"),
      capacity: data.get("capacity")
    };
  };

  sendMessage = event => {
    fetch("https://saveaway-email-server.herokuapp.com/companyEnrollment", {
      method: "post",
      body: JSON.stringify(this.getCompanyInfo(event)),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
      .then(resp => resp.json())
      .then(resp => {
        this.response = resp.message;
      });
  };

  addCompanyInfo = event => {
    const { history } = this.props;
    this.setState({ isLoading: true });
    event.preventDefault();
    console.log(this.getCompanyInfo(event));
    fetch(baseURL + "companyEnrollment", {
      method: "post",
      body: JSON.stringify(this.getCompanyInfo(event)),
      headers: new Headers({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      })
    })
      .then(this.sendMessage(event))
      .then(resetParentState(this, this.initialState))
      .then(
        setTimeout(() => {
          this.setState({
            message: "Information Sent!",
            isLoading: false
          });
        }, 1000)
      )
      .then(
        setTimeout(() => {
          this.setState({
            redirect: true
          });
        }, 2000)
      )
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    if (this.state.redirect === true) {
      return <Redirect to="/Confirmation" />;
    }
    return (
      <div>
        <SimpleStorage parent={this} />
        <h2 className="formHeader">
          Please Confirm and Submit Your Information
        </h2>
        <form onSubmit={this.addCompanyInfo}>
          <div className="formSection">
            <div className="formAnswer">
              <label htmlFor="companyName">Company Name</label>
              <input
                className="formInput"
                name="companyName"
                defaultValue={this.state.companyName}
              />
              <label htmlFor="companyEmail">Company Phone Email</label>
              <input
                className="formInput"
                name="companyEmail"
                defaultValue={this.state.companyEmail}
              />
            </div>
          </div>
          <br />
          <div className="formSection">
            <label htmlFor="companyPhone">Company Phone Number</label>
            <input
              className="formInput"
              name="companyPhone"
              defaultValue={this.state.companyPhone}
            />
          </div>
          <br />
          <div className="formSection">
            <label htmlFor="companyAdress">Company Adress</label>
            <hr />
            <div className="formAnswer">
              <label htmlFor="companyAdressStreet">Street </label>
              <input
                className="formInput"
                name="companyAdressStreet"
                defaultValue={this.state.companyAdressStreet}
              />
              <label htmlFor="companyAdressApt">Apt, Unit, Floor</label>
              <input
                className="formInput"
                name="companyAdressApt"
                defaultValue={this.state.companyAdressApt}
              />
            </div>
            <br />
            <div className="formAnswer">
              <label htmlFor="companyAdressCity">City</label>
              <input
                className="formInput"
                name="companyAdressCity"
                defaultValue={this.state.companyAdressCity}
              />
              <label htmlFor="companyAdressState">State</label>
              <input
                className="formInput"
                name="companyAdressState"
                defaultValue={this.state.companyAdressState}
              />
              <label htmlFor="companyAdressZip">Zip Code</label>
              <input
                className="formInput"
                name="companyAdressZip"
                defaultValue={this.state.companyAdressZip}
              />
            </div>
          </div>
          <br />
          <hr />
          <br />
          <div className="formSection2">
            <div className="formAnswer">
              <label htmlFor="contactName">What is your name?</label>
              <input
                className="formInput"
                name="contactName"
                defaultValue={this.state.contactName}
              />
              <label htmlFor="contactNumber">Your contact number</label>
              <input
                className="formInput"
                name="contactNumber"
                defaultValue={this.state.contactNumber}
              />
            </div>
            <hr />
            <div className="formAnswer">
              <label htmlFor="contactTitle">What is your title</label>
              <input
                className="formInput"
                name="contactTitle"
                defaultValue={this.state.contactTitle}
              />
            </div>
          </div>
          <br />
          <hr />
          <br />
          <div className="formSection2">
            <div className="formAnswer">
              <label htmlFor="extraInfo">Extra info</label>
              <input
                className="formInput"
                name="extraInfo"
                defaultValue={this.state.extraInfo}
              />
              <label htmlFor="flavors">Flavors</label>
              <input
                className="formInput"
                name="flavors"
                defaultValue={this.state.flavors}
              />
            </div>
          </div>
          <div className="formSection2">
            <div className="formAnswer">
              <label htmlFor="capacity">Capacity</label>
              <input
                className="formInput"
                name="capacity"
                defaultValue={this.state.capacity}
              />
            </div>
            <hr />
            <div className="waitingMessage">
              {this.state.isLoading === true ? (
                <Loader
                  type="ThreeDots"
                  color="#c33539"
                  height="50"
                  width="100"
                  className="Loader"
                />
              ) : (
                <p> {this.state.message} </p>
              )}
            </div>
            <div className="multiPageSubmit">
              <input
                type="submit"
                className="submitButton"
                defaultValue="Submit Your Enrollment"
              />
            </div>
            <hr />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(Confirm);
export { StepFour };
