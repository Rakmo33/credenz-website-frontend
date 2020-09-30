
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
<<<<<<< HEAD

=======
import Home from "./HomeComponent/HomeComponent";
import Events from "./EventsComponent/EventsComponent";
import Register from "./RegisterComponent/RegisterComponent";
import Contact from "./ContactComponent/ContactComponent";
import About from "../Components/HomeComponent/HomeComponent";
import { Switch, Route, Redirect } from "react-router-dom";
import NavBar from "./Navbar/Navbar";
import SideEvents from "./SideEvents/sideEvents";
import LeaderBoard from './SideEvents/leaderboard';
>>>>>>> d67d819ad790c0e271be6ed05dbb0d10c90e7f86
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

<<<<<<< HEAD
    const SignUpPage = () => {
      return <Signup />;
=======
    const LeaderBoardPage = () => {
      return <LeaderBoard />;
>>>>>>> d67d819ad790c0e271be6ed05dbb0d10c90e7f86
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
<<<<<<< HEAD
          <Route path='/signup' component={SignUpPage} />
=======
          <Route path='/sideEvents' component={SideEvents} />
          <Route path='/leaderboard' component={LeaderBoardPage} />
>>>>>>> d67d819ad790c0e271be6ed05dbb0d10c90e7f86
          <Redirect to='/home' />
        </Switch>
      </div>
    );
  }
}

export default Main;
