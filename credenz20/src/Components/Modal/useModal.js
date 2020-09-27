import { useState } from 'react';

const useModal = () => {

    const [isShowing, setIsShowing] = useState(false);

    function toggleModal() {
        console.log('useModal called')
        setIsShowing(!isShowing);
    }

    return{
        isShowing,
        toggleModal,
    };

};

export default useModal;