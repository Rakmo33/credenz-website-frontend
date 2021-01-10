import React , { useState }from 'react';
import Alert from 'react-bootstrap/Alert'; 
import { propTypes } from 'react-bootstrap/esm/Image';

const AlertDismissibleExample = (props)=> {
    const [show, setShow] = useState(true);
  
    if (show) {
      return (
        <Alert variant={props.var} onClose={() => setShow(false)} dismissible>
          {/* <Alert.Heading>Oh snap! You got an error!</Alert.Heading> */}
          <p>
           {props.children}
          </p>
        </Alert>
      );
    }
    return(
        null
    )
    // return <button onClick={() => setShow(true)}>Show Alert</button>;
  };
  
export default AlertDismissibleExample;
//   render(<AlertDismissibleExample />);