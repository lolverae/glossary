  
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component"
import List from "./components/list.component";
import Edit from "./components/edit.component";
import CreateUser from "./components/createUsers.component";
import Create from "./components/create.component";

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={List} />
      <Route path="/edit/:id" component={Edit} />
      <Route path="/create" component={Create} />
      <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;