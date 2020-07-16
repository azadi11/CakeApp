import React from "react";
import CakeList from "./CakeList";

import About from "./About";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <div>
        <Router className="myRouter">
          <nav style={{ color: "white" }}>
            <h3>Logo</h3>
            <Link to="/CakeList">CakeList</Link>
            <Link to="/About">About</Link>
          </nav>
          <Route path="/About" component={About} />
          <Route path="/CakeList" component={CakeList} />
        </Router>
      </div>
    );
  }
}
export default Nav;
