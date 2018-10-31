import React from "react";
import { CompanyEnrollment } from "./WelcomeStep";
import { StepOne } from "./StepOne";
import { StepTwo } from "./StepTwo";
import { StepThree } from "./StepThree";
import { StepFour } from "./StepFour";

const getNavStates = (indx, length) => {
  let styles = [];
  for (let i = 0; i < length; i++) {
    if (i < indx) {
      styles.push("done");
    } else if (i === indx) {
      styles.push("doing");
    } else {
      styles.push("todo");
    }
  }
  return { current: indx, styles: styles };
};

const checkNavState = (currentStep, stepsLength) => {
  if (currentStep > 0 && currentStep < stepsLength - 1) {
    return {
      showPreviousBtn: true,
      showNextBtn: true
    };
  } else if (currentStep === 0) {
    return {
      showPreviousBtn: false,
      showNextBtn: true
    };
  } else {
    return {
      showPreviousBtn: true,
      showNextBtn: false
    };
  }
};

export default class MultiStep extends React.Component {
  constructor() {
    super();
    this.state = {
      showPreviousBtn: false,
      showNextBtn: true,
      compState: 0,
      navState: getNavStates(0, 5),
      companyName: "",
      accountName: "",
      signupEmail: "",
      companyPhone: "",
      signupAdressStreet: "",
      signupAdressApt: "",
      signupAdressCity: "",
      signupAdressState: "",
      signupAdressZip: "",
      companyEIN: "",
      businessHours: "",
      AutoEnroll: "",
      enrollmentPercentage: "",
      planType: "",
      provider: "",
      paymentCycle: "",
      Admin: "",
      PlanStatus: "",
      AdminName: "",
      AdminPhone: "",
      AdminEmail: ""
    };
  }

  setNavState = next => {
    this.setState({
      navState: getNavStates(next, 5)
    });
    if (next < 5) {
      this.setState({ compState: next });
    }
    this.setState(checkNavState(next, 5));
  };

  handleKeyDown = event => {
    if (event.which === 13) {
      this.next();
    }
  };

  handleOnClick = event => {
    if (event.currentTarget.value === 5 - 1 && this.state.compState === 5 - 1) {
      this.setNavState(5);
    } else {
      this.setNavState(event.currentTarget.value);
    }
  };

  getEnteredInfo = event => {
    event.preventDefault();
    return {
      companyName: this.state.companyName,
      accountName: this.state.accountName,
      companyPhone: this.state.companyPhone,
      signupEmail: this.state.signupEmail,
      signupAdressStreet: this.state.signupAdressStreet,
      signupAdressApt: this.state.signupAdressApt,
      signupAdressCity: this.state.signupAdressCity,
      signupAdressState: this.state.signupAdressState,
      signupAdressZip: this.state.signupAdressZip,
      companyEIN: this.state.companyEIN,
      businessHours: this.state.businessHours,
      AutoEnroll: this.state.AutoEnroll,
      enrollmentPercentage: this.state.enrollmentPercentage,
      planType: this.state.planType,
      provider: this.state.provider,
      paymentCycle: this.state.paymentCycle,
      Admin: this.state.Admin,
      AdminName: this.state.AdminName,
      AdminPhone: this.state.AdminPhone,
      AdminEmail: this.state.AdminEmail,
      PlanStatus: this.state.PlanStatus
    };
  };

  sendMessage = event => {
    fetch("https://saveaway-email-server.herokuapp.com/companyEnrollment1", {
      method: "post",
      body: JSON.stringify(this.getEnteredInfo(event)),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
      .then(resp => resp.json())
      .then(resp => {
        this.response = resp.message;
      });
      console.log(this.state);
  };

  handleStepOne = data => {
    this.setState({
      companyName: data.companyName,
      accountName: data.accountName,
      signupEmail: data.signupEmail,
      companyPhone: data.companyPhone,
      signupAdressStreet: data.signupAdressStreet,
      signupAdressApt: data.signupAdressApt,
      signupAdressCity: data.signupAdressCity,
      signupAdressState: data.signupAdressState,
      signupAdressZip: data.signupAdressZip,
      companyEIN: data.companyEIN,
      businessHours: data.businessHours
    });
    console.log("handle1", this.state);
  };

  handleStepTwo = data => {
    this.setState({
      AutoEnroll: data.AutoEnroll,
      enrollmentPercentage: data.enrollmentPercentage,
      planType: data.planType,
      provider: data.provider,
      paymentCycle: data.paymentCycle
    });
    console.log("handle2", this.state);
  };

  handleStepThree = data => {
    this.setState({
      Admin: data.Admin,
      PlanStatus: data.PlanStatus,
      AdminName: data.AdminName,
      AdminPhone: data.AdminPhone,
      AdminEmail: data.AdminEmail
    });
    console.log("handle3", this.state);
  };

  next = (event) => {
    this.sendMessage(event)
    this.setNavState(this.state.compState + 1);
  };

  previous = () => {
    if (this.state.compState > 0) {
      this.setNavState(this.state.compState - 1);
    }
  };

  getClassName = (className, i) => {
    return className + "-" + this.state.navState.styles[i];
  };

  renderSteps = ({ steps }) => {
    return steps.map((s, i) => (
      <li
        className={this.getClassName("progtrckr", i)}
        onClick={this.handleOnClick}
        key={i}
        value={i}
      >
        <em>{i + 1}</em>
        <span>{steps[i].name}</span>
      </li>
    ));
  };

  render() {
    const steps = [
      { name: "Welcome", component: <CompanyEnrollment /> },
      {
        name: "Step One",
        component: <StepOne sendData={this.handleStepOne} />
      },
      {
        name: "Step Two",
        component: <StepTwo sendData={this.handleStepTwo}/>
      },
      {
        name: "Step Three",
        component: <StepThree sendData={this.handleStepThree}/>
      },
      {
        name: "Confirm!",
        component: <StepFour />
      }
    ];

    return (
      <div onKeyDown={this.handleKeyDown}>
        <ol className="progtrckr">{this.renderSteps({ steps })}</ol>
        {steps[this.state.compState].component}
        <div style={this.props.showNavigation ? {} : { display: "none" }}>
          <button
            className="nextButton"
            style={this.state.showPreviousBtn ? {} : { display: "none" }}
            onClick={this.previous}
          >
            Previous
          </button>

          <button
            className="previousButton"
            style={this.state.showNextBtn ? {} : { display: "none" }}
            onClick={this.next}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

MultiStep.defaultProps = {
  showNavigation: true
};
