import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu/Menu";

import React from "react";

interface AppProps {
}

interface AppState {
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Menu />} />
            {/* <Route path="/ClassicMode" element={<ClassicMode/>}/> */}
          </Routes>
          {/* <FooterNav /> */}
        </div>
      </Router>
    );
  }
}

export default App;
