import React from 'react';
import ReactDOM from 'react-dom';
import './Login.css';


const Modal = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
      <div><button>WTH</button></div>
    <div className="modal" tabindex="-1">
    
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title">Modal title</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={ hide }>
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                <p>Modal body text goes here.</p>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
            </div>
            </div>
        
    </div>
    <h1> Modal should be called!! </h1>
    {console.log('sdmw')}
  </React.Fragment>, document.querySelector("#modal-root")
) : null;

export default Modal;