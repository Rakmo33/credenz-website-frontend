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
    let login = false;

    return(
        <div>
            <SideEvent/>
            <h1>Events Page</h1>
            <ul>
                <li onClick={ ()=>handleShow("clash") }>
                    clash
                </li>
            </ul>
            <ul>
                <li onClick={ ()=>handleShow("enigma") }>
                    Enigma
                </li>
            </ul>
            <ul>
                <li onClick={ ()=>handleShow("xodia") }>
                    Xodia
                </li>
            </ul>
            <Modal1 show={show} handleClose={handleClose} login={login} event={event}/>
        </div>
    );
}

export default Events;