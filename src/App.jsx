import React from "react";
import "./App.css";
import Top from "./components/Top";
import AboutMe from "./components/AboutMe";
import { Helmet } from "react-helmet";
function App() {
  return (
    <div className="App">
      <Helmet>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0 "
        />
      </Helmet>
      <Top/>
      <AboutMe />
    </div>
  );
}

export default App;
