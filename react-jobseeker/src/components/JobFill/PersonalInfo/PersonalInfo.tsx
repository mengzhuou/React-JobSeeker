import React, { ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { withFuncProps } from "../../withFuncProps";
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
  }

  handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    this.setState({ [name]: value } as Pick<PersonalInfoState, keyof PersonalInfoState>);
  }

  handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    alert("Saved!");
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
                placeholder="Nina"
              />
            </label>
            <label>
              Last Name:
              <input
                type="text"
                name="lastName"
                value={lastName}
                onChange={this.handleChange}
                placeholder="Green"
              />
            </label>
          </div>
          <div className="row">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

// eslint-disable-next-line react-refresh/only-export-components
export default withFuncProps(PersonalInfo);
