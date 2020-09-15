import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Header"
import Wrapper from "./Components/Wrapper"
import Login from "./Pages/Login"
import Register from "./Pages/RegistrationForm"
import SearchPage from "./Pages/SearchPage"
import Patient from "./Pages/PatientPage"
import WoundAssessment from './Pages/WoundAssessment'
import WoundPage from "./Pages/WoundPage"
import UserContextProvider from "./Context/AuthContext";
import PatientContextProvider from "./Context/PatientContext";
import WoundContextProvider from "./Context/WoundContext";
import { PrivateRoute } from './Routes/PrivateRoute';
import { PublicRoute } from './Routes/PublicRoute';
import './App.css';


function App() {
  return (
    <UserContextProvider>
      <PatientContextProvider>
        <WoundContextProvider>
          <Router>
            <Header />
            <Wrapper>
              <Switch>
                <Route exact path="/" component={Login} />
                <PublicRoute exact path="/registration" component={Register} />
                <PrivateRoute exact path="/home" component={SearchPage} />
                <PrivateRoute exact path="/patient" component={Patient} />
                <PrivateRoute exact path="/wound" component={WoundPage} />
                <PrivateRoute exact path="/wound_assessment" component={WoundAssessment} />
              </Switch>
            </Wrapper>
          </Router >
        </WoundContextProvider>
      </PatientContextProvider>
    </UserContextProvider>
  );
}

export default App;
