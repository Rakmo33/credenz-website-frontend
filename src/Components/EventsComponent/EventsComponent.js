import React, {useState} from 'react';
import SideEvent from '../sideEventButton/sideEvent';
import Modal1 from '../Modal/Modal';
import axios from 'axios';
import { EVENTS } from './allEvents';

const Events = () =>{

    const [show, setShow] = useState(false);
    const [event,setEvent] = useState("clash");
    const [EVENTS, setEVENTS] = useState("NULL")

    const handleClose = () => setShow(false);
    const handleShow = (event) => {
        setShow(true);
        setEvent(event);
    }

    async function AllEvents(){
    
        const response =  await axios.get('http://credenzwebsite.herokuapp.com/allevents')
        //console.log("I am response" + response);
        const data = await response.data
        //console.log("I am data" + JSON.stringify(data));
        setTimeout(() => {  console.log("I am sleeping"); }, 5);
        return data;
    }

    let result = AllEvents();

    result.then(res => {
        setEVENTS(res);
    })

    //console.log("Events"+ JSON.stringify(EVENTS))

    let type = false;

    return(
        <div>
            <SideEvent/>

            <h1 style={{color: "ivory"}}>Events Page</h1>
            <ul style={{color: "ivory"}}>
                <li >
                    All Events
                </li>
                <li onClick={ ()=>handleShow("clash") } >
                    Clash
                </li>
                <li onClick={ ()=>handleShow("rc") } >
                    Reverse Coding
                </li>
                <li onClick={ ()=>handleShow("enigma") }>
                    Enigma
                </li>
                <li onClick={ ()=>handleShow("xodia") }>
                    Xodia
                </li>
                <li onClick={ ()=>handleShow("webweaver") }>
                    Webweaver
                </li>
                <li onClick={ ()=>handleShow("bplan") }>
                    BPlan
                </li>
                <li onClick={ ()=>handleShow("quiz") } >
                    Quiz
                </li>
            </ul>

            <Modal1 show={show} handleClose={handleClose} type={type} event={event} event_info={EVENTS}/>
        </div>
    );
}

export default Events;