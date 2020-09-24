import React, { Component } from 'react';
import  Home  from './HomeComponent';
import  Events  from './EventsComponent';
import  Register  from './RegisterComponent';
import  Contact  from './ContactComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

    render() {

        const HomePage = () => {
            return(
                <Home/>
            );
        }

        const EventsPage = () => {
            return(
                <Events/>
            );
        }

        const RegisterPage = () => {
            return(
                <Register/>
            );
        }

        const ContactPage = () => {
            return(
                <Contact/>
            );
        }


        return(
            <div>
                <Switch>
                    <Route path="/home" component = { HomePage } />
                    <Route path="/events" component = { EventsPage } />
                    <Route path="/register" component = { RegisterPage } />
                    <Route path="/contact" component = { ContactPage } />
                    <Redirect to="/home"/>
                </Switch>
                
            </div>
            
        );
    }

}

export default Main;