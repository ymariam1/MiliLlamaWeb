import IOSAppPage from "./IOSAppPage";
import AndroidAppPage from "./AndroidAppPage.js";
import ConnectPage from "./ConnectPage";
import './App.css';
import React from "react";
import Header from "./Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content-container">
          <Switch>
            <Route path="/" exact>
              <div className="App-header">
                <h1 className="h1">Connect with <span className="headline-emphasis">thousands of Students</span> near you</h1>
                <div className="homepage-hero-sub-btn-wrapper">
                  <p className="lg">Mili Llama matches <strong>qualified college students</strong> and other community based individuals with half-day, 
                  full-day, and long-term substitute teaching assignments.</p>
                
                <div className="button-container">
                  <a id="k-12-link" class="btn-primary w-button">K-12&nbsp;Schools</a>
                  <a id="sub-link" href="" class="btn-primary-outline w-button">Substitute&nbsp;Teachers</a>
                  </div>
                  </div>
                  </div>
            </Route>
            <Route path="/ios-app" component={IOSAppPage} />
            <Route path="/android-app" component={AndroidAppPage} />
            <Route path="/connect" component={ConnectPage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
