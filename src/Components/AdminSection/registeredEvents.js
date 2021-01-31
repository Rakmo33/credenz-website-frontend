import React from 'react';

const RegisteredEvents =(props)=>{
   
    console.log(props.eveList);   
    console.log(props.eveList.length);   
    console.log(props.eveList[15]);   
    let i =0;
    for(i=0; i<50;i++){
        console.log(props.eveList[i]);
    }
    if(props.eveList.length > 0)
        {  return(
            props.eveList.map((x)=> {          
            return(
                <tr>
            {/* <th scope='row'>{count++}</th> */}
                <td>
                    {x.event_username}, {x.random_pw}
                </td>
            </tr>
            );  
    }) );
    } else{
        return(
            <tr>
                no events listed
            </tr>
        )
    }
}

export default RegisteredEvents;