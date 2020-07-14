import React from "react";
import "./App.css";
import CakeList from "./CakeList";
import AddCake from "./AddCake";
import About from "./About";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import DeleteCake from "./DeleteCake";
import EditCake from "./EditCake";

function App() {
  return (
    <div className="App">
      <Router className="myRouter">
        <nav style={{ color: 'white' }}>
          <h3>Logo</h3>
          <Link to="/CakeList">CakeList</Link>
          <Link to="/AddCake">AddCake</Link>

          <Link to="/DeleteCake">Delete Cake</Link>
          <Link to="/EditCake">Edit Cake</Link>
          <Link to="/About">About</Link>
        </nav>
        <Route path="/About" component={About} />
        <Route path="/CakeList" component={CakeList} />
        <Route path="/AddCake" component={AddCake} />
        <Route path="/DeleteCake" component={DeleteCake} />
        <Route path="/EditCake" component={EditCake} />
      </Router>
    </div>
  );
}

export default App;
