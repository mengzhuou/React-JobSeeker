import React from "react";
import { useNavigate } from "react-router-dom";
import { withFuncProps } from "../withFuncProps";
import "./Menu.css";

interface MenuProps {
  navigate: ReturnType<typeof useNavigate>;
}

interface MenuState {}

class Menu extends React.Component<MenuProps, MenuState> {
  constructor(props: MenuProps) {
    super(props);
    this.state = {};
    this.preFillNav = this.preFillNav.bind(this);
  }

  preFillNav = () => {
    this.props.navigate("/PersonalInfo");
  };

  render() {
    return (
      <div className="App">
        <div className="buttonContainer">
          <div className="buttonRow">
            <button className="menuButton" onClick={this.preFillNav}>
              Prefill Your Info
            </button>
          </div>
        </div>
      </div>
    );
  }
}

// eslint-disable-next-line react-refresh/only-export-components
export default withFuncProps(Menu);
