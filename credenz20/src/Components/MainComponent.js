
import React, { Component } from 'react';
import  Home  from './HomeComponent/HomeComponent';
import  Events  from './EventsComponent/EventsComponent';
import  Register  from './RegisterComponent/RegisterComponent';
import  Contact  from './ContactComponent/ContactComponent';
import About from './HomeComponent/Aboutus/Aboutus';
import Signup from './SignupForm/Signup';
import { Switch, Route, Redirect } from 'react-router-dom';
import NavBar from './Navbar/Navbar';
import "bootstrap/dist/css/bootstrap.css";

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

    const SignUpPage = () => {
      return <Signup />;
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
          <Route path='/signup' component={SignUpPage} />
          <Redirect to='/home' />
        </Switch>
      </div>
    );
  }
}

export default Main;
