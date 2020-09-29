import React, {useState} from 'react';
import SideEvent from '../sideEventButton/sideEvent';
import Modal1 from '../Modal/Modal';

const Events = () =>{

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
    }
    let login = false;

    return(
        <div>
            <SideEvent/>
            <h1>Events Page</h1>
            <ul>
                <li onClick={ handleShow }>
                    clash
                </li>
            </ul>
            <ul>
                <li onClick={ handleShow }>
                    Enigma
                </li>
            </ul>
            <ul>
                <li onClick={ handleShow }>
                    Xodia
                </li>
            </ul>
            <Modal1 show={show} handleClose={handleClose} login={login} event={"clash"}/>
        </div>
    );
}

export default Events;