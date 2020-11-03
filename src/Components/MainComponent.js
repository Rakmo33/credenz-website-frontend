
import React, { Component } from 'react';
import  Home  from './HomeComponent/HomeComponent';
import  Events  from './EventsComponent/EventsComponent';
import  Register  from './RegisterComponent/RegisterComponent';
import  Contact  from './ContactComponent/ContactComponent';
import Signup from './SignupComponent/Signup';
import { Switch, Route, Redirect } from 'react-router-dom';
import NavBar from './Navbar/Navbar';
import "bootstrap/dist/css/bootstrap.css";
import About from "../Components/HomeComponent/HomeComponent";
import SideEvents from "./SideEvents/sideEvents";
import LeaderBoard from './SideEvents/leaderboard';
import Footer from '../Components/Footer/footer';
import Team from '../Components/Team/Team';
import Profile from '../Components/Profilepage/Profilepage';
import Admin from '../Components/AdminSection/Admin';

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

    const SignUpPage = () => {
      return <Signup />;
    };

    const TeamPage = () => {
      return <Team />;
    };

    const ProfilePage = () => {
      return <Profile />;
    };

    const AdminPage = () => {
      return <Admin />;
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
          <Route path='/signup' component={SignUpPage} />
          <Route path='/team' component={TeamPage} />
          <Route path='/profile' component={ProfilePage} />
          <Route path='/admin' component={AdminPage} />
          <Redirect to='/home' />
        </Switch>
        {/* <Footer/> */}
      </div>
    );
  }
}

export default Main;