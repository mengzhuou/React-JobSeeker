import React, { ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { withFuncProps } from "../../withFuncProps";
import FillAction from "../FillAction/FillAction";
import "./PersonalInfo.css";

interface PersonalInfoProps {
  navigate: ReturnType<typeof useNavigate>;
}

interface PersonalInfoState {
  firstName: string;
  lastName: string;
}

class PersonalInfo extends React.Component<PersonalInfoProps, PersonalInfoState> {
  constructor(props: PersonalInfoProps) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fillFirstName = this.fillFirstName.bind(this);
    this.fillLastName = this.fillLastName.bind(this);
  }

  componentDidMount() {
    // Check if localStorage has values and update state
    const firstName = localStorage.getItem("firstName");
    const lastName = localStorage.getItem("lastName");
    if (firstName !== null) {
      this.setState({ firstName });
    }
    if (lastName !== null) {
      this.setState({ lastName });
    }
  }

  handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    this.setState({ [name]: value } as Pick<PersonalInfoState, keyof PersonalInfoState>);
  }

  handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const { firstName, lastName } = this.state;
    // Save to local storage
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    alert("Saved!");
  }

  fillFirstName(firstName: string) {
    this.setState({ firstName });
    const firstNameInput = document.querySelector('input[name="firstName"]') as HTMLInputElement;
    if (firstNameInput) {
      firstNameInput.value = firstName;
    }
  }

  fillLastName(lastName: string) {
    this.setState({ lastName });
    const lastNameInput = document.querySelector('input[name="lastName"]') as HTMLInputElement;
    if (lastNameInput) {
      lastNameInput.value = lastName;
    }
  }

  render() {
    const { firstName, lastName } = this.state;

    return (
      <div className="container">
        <h1>SWE Job Filler</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <label>
              First Name:
              <input
                type="text"
                name="firstName"
                value={firstName}
                onChange={this.handleChange}
              />
            </label>
            <label>
              Last Name:
              <input
                type="text"
                name="lastName"
                value={lastName}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div className="row">
            <button type="submit">Submit</button>
          </div>
        </form>
        <FillAction 
          fillFirstName={this.fillFirstName} 
          fillLastName={this.fillLastName} 
        />
      </div>
    );
  }
}

// eslint-disable-next-line react-refresh/only-export-components
export default withFuncProps(PersonalInfo);
