import React, { useState } from "react";
import HamburgerMenu from "./components/Hamburger-menu";

function App() {

  // TOGGLING HAMBURGER-MENU
  const [status, setStatus] = useState(false);

  return (
    <div className="appContainer">

      < HamburgerMenu
        checkingStatus={status}
        settingStatus={setStatus}
      />

    </div>
  );
}

export default App;
