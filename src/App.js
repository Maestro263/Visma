import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import "./styles/App.scss";
import Home from "./components/Home";
import Person from "./components/Person";
import Starship from "./components/Starship";
import Vehicle from "./components/Vehicle";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="navigation">
          <ul className="pages">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/persons">Persons</Link>
            </li>
            <li>
              <Link to="/vehicles">Vehicles</Link>
            </li>
            <li>
              <Link to="/starships">Starships</Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/persons" element={<Person />}></Route>
          <Route path="/vehicles" element={<Vehicle />}></Route>
          <Route path="/starships" element={<Starship />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
