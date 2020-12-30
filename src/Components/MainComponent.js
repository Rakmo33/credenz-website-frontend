//"start": "npm run build && (cd server && npm start)",
import React, { Component } from "react";
import Home from "./HomeComponent/HomeComponent";
import Events from "./EventsComponent/EventsComponent";
import Register from "./RegisterComponent/RegisterComponent";
import Contact from "./ContactComponent/ContactComponent";
import Signup from "./SignupComponent/Signup";
import Edit from "./SignupComponent/EditProfile";
import { Switch, Route, Redirect } from "react-router-dom";
import NavBar from "./Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import About from "../Components/HomeComponent/Aboutus/Aboutus";
import SideEvents from "./SideEvents/sideEvents";
import LeaderBoard from "./SideEvents/leaderboard";
import Team from "../Components/Team/Team";
import Profile from "../Components/Profilepage/Profilepage";
import Admin from "../Components/AdminSection/Admin";
import AboutUs from '../Components/HomeComponent/Aboutus/Aboutus';
import Footer from '../Components/Footer/footer';
import './maincomponent.module.css';
import AOS from "aos";
import "aos/dist/aos.css";
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

class Main extends Component {
  componentDidMount() {
    AOS.init({
      duration: 2000,
    });
  }

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

    const EditProfilePage = () => {
      return <Edit />;
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

    const AboutUsPage = () => {
      return <AboutUs />;
    };

    return (
      <div>
        {/* <NavBar /> */}
        <Route render={ ({location}) =>(
          <TransitionGroup>
            <CSSTransition
            key={location.key}
            timeout={450}
            classNames="fade">
            <Switch location={location}>
              <Route path='/home' component={HomePage} />
              <Route path='/events' component={EventsPage} />
              <Route path='/register' component={RegisterPage} />
              <Route path='/contact' component={ContactPage} />
              <Route path='/about' component={AboutPage} />
              <Route path='/sideEvents' component={SideEvents} />
              <Route path='/leaderboard' component={LeaderBoardPage} />
              <Route path='/signup' component={SignUpPage} />
              <Route path='/edit' component={EditProfilePage} />
              <Route path='/team' component={TeamPage} />
              <Route path='/profile' component={ProfilePage} />
              <Route path='/admin' component={AdminPage} />
              <Route path='/aboutus' component={AboutUs} />
              <Redirect to='/home' />
            </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}/>
      </div>
    );
  }
}

export default Main;
