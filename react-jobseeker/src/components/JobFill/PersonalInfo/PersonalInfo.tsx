import React from "react";
import { useNavigate } from "react-router-dom";
import { withFuncProps } from "../../withFuncProps";

interface PersonalInfoProps {
  navigate: ReturnType<typeof useNavigate>;
}

interface PersonalInfoState {}

class PersonalInfo extends React.Component<PersonalInfoProps, PersonalInfoState> {
  constructor(props: PersonalInfoProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>SWE Job Fill</h1>
      </div>
    );
  }
}

// eslint-disable-next-line react-refresh/only-export-components
export default withFuncProps(PersonalInfo);
