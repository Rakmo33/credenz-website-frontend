import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./HomeComponent/HomeComponent";
import Events from "./EventsComponent/EventsComponent";
import Register from "./RegisterComponent/RegisterComponent";
import Contact from "./ContactComponent/ContactComponent";
import About from "../Components/HomeComponent/HomeComponent";
import { Switch, Route, Redirect } from "react-router-dom";
import NavBar from "./Navbar/Navbar";
import SideEvents from "./SideEvents/sideEvents";
import LeaderBoard from './SideEvents/leaderboard';
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

    const LeaderBoardPage = () => {
      return <LeaderBoard />;
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
          <Route path='/sideEvents' component={SideEvents} />
          <Route path='/leaderboard' component={LeaderBoardPage} />
          <Redirect to='/home' />
        </Switch>
      </div>
    );
  }
}

export default Main;
