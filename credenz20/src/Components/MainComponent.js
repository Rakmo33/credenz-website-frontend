import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

import React, { Component } from "react";
import Home from "./HomeComponent/HomeComponent";
import Events from "./EventsComponent/EventsComponent";
import Register from "./RegisterComponent/RegisterComponent";
import Contact from "./ContactComponent/ContactComponent";
import About from "./AboutComponent/AboutComponent";
import { Switch, Route, Redirect } from "react-router-dom";
import NavBar from "./Navbar/Navbar";

class Main extends Component {
  render() {
    const HomePage = () => {
      return <Home />;
    };

    const EventsPage = () => {
      return <Events />;
    };

    const RegisterPage = () => {
      return <Register />;
    };

    const ContactPage = () => {
      return <Contact />;
    };

    const AboutPage = () => {
      return <About />;
    };

    return (
      <div>
        <NavBar />
        <Switch>
          <Route path='/home' component={HomePage} />
          <Route path='/events' component={EventsPage} />
          <Route path='/register' component={RegisterPage} />
          <Route path='/contact' component={ContactPage} />
          <Route path='/about' component={AboutPage} />
          <Redirect to='/home' />
        </Switch>
      </div>
    );
  }
}

export default Main;
