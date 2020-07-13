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
import PatientContextProvider from "./Context/PatientContext";
import WoundContextProvider from "./Context/WoundContext";
import './App.css';
import { PrivateRoute } from './Routes/PrivateRoute';
import { PublicRoute } from './Routes/PublicRoute';
import NewPatientForm from './Pages/newPatientForm';
import WoundAssessment from './Pages/woundAssessment'


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
                <PrivateRoute exact path="/new_wound_entry" component={WoundEntry} />
                <PrivateRoute exact path="/wound" component={WoundPage} />
                <PrivateRoute exact path="/new_patient_form" component={NewPatientForm} />
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
