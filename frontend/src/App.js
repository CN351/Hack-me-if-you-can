import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/Login"
import Register from "./components/Register"
import Dashboard from "./components/Dashboard"
import Checkup from "./components/CheckUp"
import Vaccine from "./components/Vac"

function App() {
  return (<Router>
    <div className="App">
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register}/>
          <Route path="/checkup" component={Checkup}/>
          <Route path="/vaccine" component={Vaccine}/>


        </Switch>

    </div></Router>
  );
}

export default App;
