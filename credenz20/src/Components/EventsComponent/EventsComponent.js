import React, {useState} from 'react';
import SideEvent from '../sideEventButton/sideEvent';
import Modal1 from '../Modal/Modal';

const Events = () =>{

    const [show, setShow] = useState(false);
    const [event,setEvent] = useState("clash");

    const handleClose = () => setShow(false);
    const handleShow = (event) => {
        setShow(true);
        setEvent(event);
    }

    let type = false;

    return(
        <div>
            <SideEvent/>
            <h1 style={{color: "ivory"}}>Events Page</h1>
            <ul style={{color: "ivory"}}>
                <li onClick={ ()=>handleShow("clash") } >
                    clash
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
            </ul>
            <Modal1 show={show} handleClose={handleClose} type={type} event={event}/>
        </div>
    );
}

export default Events;