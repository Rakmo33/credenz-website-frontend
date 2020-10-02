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
<<<<<<< HEAD
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
=======
            <h1 style={{color: "ivory"}}>Events Page</h1>
            <ul style={{color: "ivory"}}>
                <li onClick={ ()=>handleShow("clash") } >
                    clash
                </li>
                <li onClick={ ()=>handleShow("enigma") }>
                    Enigma
                </li>
>>>>>>> e7d9d21f34d1c32326e2c2d42384d13b3b76ee43
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
<<<<<<< HEAD
            <Modal1 show={show} handleClose={handleClose} login={login} event={event}/>
=======
            <Modal1 show={show} handleClose={handleClose} type={type} event={event}/>
>>>>>>> e7d9d21f34d1c32326e2c2d42384d13b3b76ee43
        </div>
    );
}

export default Events;