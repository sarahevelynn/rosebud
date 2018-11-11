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
    let coco = JSON.parse(window.localStorage._coco);
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
      coco: coco,
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
      coco: data.get("coco"),
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
              <h3> Company Information </h3>
              <hr />
              <label htmlFor="companyName">Name</label>
              <input
                className="formInputFinal"
                name="companyName"
                defaultValue={this.state.companyName}
              />
              <label htmlFor="companyEmail">Email</label>
              <input
                className="formInputFinal"
                name="companyEmail"
                defaultValue={this.state.companyEmail}
              />
              <label htmlFor="companyPhone">Phone</label>
              <input
                className="formInputFinal"
                name="companyPhone"
                defaultValue={this.state.companyPhone}
              />
            </div>
          </div>
          <hr />
          <br />
          <div className="formSection">
            <h3>Company Adress</h3>
            <hr />
            <div className="formAnswer">
              <label htmlFor="companyAdressStreet">Street </label>
              <input
                className="formInputFinal"
                name="companyAdressStreet"
                defaultValue={this.state.companyAdressStreet}
              />
              <label htmlFor="companyAdressApt">Apt, Unit, Floor</label>
              <input
                className="formInputFinal"
                name="companyAdressApt"
                defaultValue={this.state.companyAdressApt}
              />
            </div>
            <br />
            <div className="formAnswer">
              <label htmlFor="companyAdressCity">City</label>
              <input
                className="formInputFinal"
                name="companyAdressCity"
                defaultValue={this.state.companyAdressCity}
              />
              <label htmlFor="companyAdressState">State</label>
              <input
                className="formInputFinal"
                name="companyAdressState"
                defaultValue={this.state.companyAdressState}
              />
              <label htmlFor="companyAdressZip">Zip Code</label>
              <input
                className="formInputFinal"
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
              <h3> Contact Information </h3>
              <hr />
              <label htmlFor="contactName">Name</label>
              <input
                className="formInputFinal"
                name="contactName"
                defaultValue={this.state.contactName}
              />
              <label htmlFor="contactNumber">Contact number</label>
              <input
                className="formInputFinal"
                name="contactNumber"
                defaultValue={this.state.contactNumber}
              />
              <label htmlFor="contactTitle">Title</label>
              <input
                className="formInputFinal"
                name="contactTitle"
                defaultValue={this.state.contactTitle}
              />
            </div>
            <br />
            <div className="formAnswer">
              <label htmlFor="extraInfo">Extra info</label>
              <br />
              <input
                id="formInputExtra"
                name="extraInfo"
                defaultValue={this.state.extraInfo}
              />
            </div>
          </div>
          <div className="formSection2">
            <h3> Flavor Information </h3>
            <hr />
            <div className="formAnswer">
              <label htmlFor="coco">Chocolate?</label>
              <input
                className="formInputFinal"
                name="coco"
                defaultValue={this.state.coco}
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
            <div id="multiPageSubmit">
              <input type="submit" id="submitButton" defaultValue="Submit" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(Confirm);
export { StepFour };
