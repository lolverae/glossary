import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import create from "./components/create.component";
import edit from "./components/edit.component";
import list from "./components/list.component";
import createUser from "./components/createUsers.component";

import logo from "./logo192.png"

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          
        <nav className="navbar navbar-expand-lg navbar-light bg-light.bg-gradient">
            <a class="navbar-brand" href="/">
              <img src={logo} width="30" height="30" alt="logo" />
            </a>
            <Link to="/" className="navbar-brand">Glosario Control de Procesos I</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Glosario</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Crear nuevo</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/usuario" className="nav-link">Inicia</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>


          <Route path="/" exact component={list} />
          <Route path="/edit/:id" component={edit} />
          <Route path="/create" component={create} />
          <Route path="/usuario" component={createUser} />

        </div>
      

      </Router>
        
    );
  }
}

export default App;