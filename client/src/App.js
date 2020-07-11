import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Header"
import Wrapper from "./Components/Wrapper"
import Login from "./Pages/login"
import Register from "./Pages/registrationForm"
import SearchPage from "./Pages/searchPage"
import Patient from "./Pages/patientPage"
import WoundEntry from "./Pages/initialWoundEntry"
import WoundPage from "./Pages/woundPage"
import UserContextProvider from "./Context/AuthContext";
import './App.css';
import { PrivateRoute } from './Routes/PrivateRoute';
import { PublicRoute } from './Routes/PublicRoute';


function App() {
  return (
    <UserContextProvider>
      <Router>
        <Header />
        <Wrapper>
          <Switch>
            <Route exact path="/" component={Login} />
            <PublicRoute exact path="/registration" component={Register} />
            <PrivateRoute exact path="/home" component={SearchPage} />
            <PrivateRoute exact path="/patient/:patientID" component={Patient} />
            <PrivateRoute exact path="/new-wound-entry" component={WoundEntry} />
            <PrivateRoute exact path="/wound/:id" component={WoundPage} />
          </Switch>
        </Wrapper>
      </Router >
    </UserContextProvider>
  );
}

export default App;
