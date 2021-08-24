import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HamburgerMenu from "./components/Hamburger-menu";
import HomePage from "./components/HomePage";

function App() {

  // TOGGLING HAMBURGER-MENU
  const [status, setStatus] = useState(false);

  return (
    <div className="appContainer">
      <Router>
        < HamburgerMenu
          checkingStatus={status}
          settingStatus={setStatus}
        />
        <Route exact path="/" component={HomePage} />
      </Router>
    </div>
  );
}

export default App;
