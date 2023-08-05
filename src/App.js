import "./App.css";
// import About from "./Components/About";
import Alert from "./Components/Alert";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState("light"); // Whether dark mode enabled or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#2f577a";
      showAlert("Dark Mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing Mode';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils Now';
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };

  return (
    <>
      {/* <Router> */}
      <Navbar
        title="TextUtils"
        aboutText="About Us"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Switch>
         <Route path="/About">
          <About/>
          </Route>
          <Route path="/">
          <TextForm showAlert= {showAlert} heading = "Enter your text to analyze below" mode = {mode}/>
          </Route>
</Switch>        */}

        {/* <Routes> */}
        {/* <Route exact path="/About" element = {<About/>}>
          </Route> */}
        {/* <Route exact path="/" element = {*/}
        <TextForm
          showAlert={showAlert}
          heading="Enter your text to analyze below"
          mode={mode}
        />
        {/* }
          </Route>
        </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
