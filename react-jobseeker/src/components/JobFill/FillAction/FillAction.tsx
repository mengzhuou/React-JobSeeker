import React from "react";

interface FillActionProps {
  fillFirstName: (firstName: string) => void;
  fillLastName: (lastName: string) => void;
}

class FillAction extends React.Component<FillActionProps> {
  constructor(props: FillActionProps) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    // Add event listener for keydown events
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    // Clean up event listener
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown(event: KeyboardEvent) {
    if (event.altKey && event.key === "3") {
      this.fillAction();
    }
  }

  fillAction() {
    const firstName = localStorage.getItem("firstName") || "";
    this.props.fillFirstName(firstName);
    const lastName = localStorage.getItem("lastName") || "";
    this.props.fillLastName(lastName);
  }

  render() {
    return null;
  }
}

export default FillAction;
