import { useState } from "react";
import Style from "./styles/style.scss";
import Header from "./components/Header/Header.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Job from "./pages/Job/Job.jsx";
import Skill from "./pages/Skill/Skill.jsx";

const App = () => {
  const [localStorageHistory, setLocalStorageHistory] = useState([]);

  return (
    <Router>
      <div className="App">
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
    </Router>
  );
};

export default App;
