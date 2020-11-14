import {useState} from 'react';
import axios from 'axios';

export const AllEvents = () => {

    const [eventDesc, setEventDesc] = useState('')


    try{
        axios.get('http://credenzwebsite.herokuapp.com/allevents').then(function (response) {
            //alert(JSON.stringify(response.data[0]["event_name"]));
            setEventDesc(response.data)
        })
    }
    catch(e) {
        alert("Axios error!" + e)
    }

    return(eventDesc)

}

export const EVENTS = AllEvents;