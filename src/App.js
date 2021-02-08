import { useState } from "react";
import Style from "./styles/style.scss";
import Header from "./components/Header/Header.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Job from "./pages/Job/Job.jsx";
import Skill from "./pages/Skill/Skill.jsx";

const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Header />
          <hr />
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/jobs">
            <Job />
          </Route>
          <Route path="/skills">
            <Skill />
          </Route>
        </div>
      </div>
    </Router>
  );
};

export default App;
