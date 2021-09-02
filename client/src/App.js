import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Contact from "./components/Contact";
import HamburgerMenu from "./components/Hamburger-menu";
import HomePage from "./components/HomePage";
import Projects from "./components/Projects";

function App() {

  // TOGGLING HAMBURGER-MENU
  const [status, setStatus] = useState(false);

  // Close Hamburger Menu
  const closeMenu = () => {
    setStatus(false)
  };

  return (
    <div className="appContainer">
      <Router>
        < HamburgerMenu
          checkingStatus={status}
          settingStatus={setStatus}
          closeMenu={closeMenu}
        />
        <Route exact path="/" component={HomePage} />
        < Route path="/contact" component={Contact} />
        < Route path="/projects" component={Projects} />
      </Router>
    </div>
  );
}

export default App;
