import React from 'react';
import Modal from '../Modal/Login';
import useModal from '../Modal/useModal';


const Register = () => {

    const {isShowing, toggle} = useModal();

    return(
        <div>
            <h1>Registrations Page</h1>

            <button className="button-default" onClick={toggle}>Show Modal</button>
            <Modal
                isShowing={isShowing}
                hide={toggle}
            />
        </div>
    );
}

export default Register;