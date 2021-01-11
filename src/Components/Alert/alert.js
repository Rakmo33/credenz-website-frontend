import React, {useState} from 'react';
import Alert from 'react-bootstrap/Alert';

const AlertDismissibleExample = (props) => {
    const [show, setShow] = useState(true);
  
    if (show) {
      return (
        <Alert variant={props.var} onClose={() => setShow(false)} dismissible>
          {/* <Alert.Heading>{props.children}</Alert.Heading> */}
          <p>
          {props.children}
          </p>
        </Alert>
      );
    }
    return (
        null
    );
  }

export default AlertDismissibleExample;