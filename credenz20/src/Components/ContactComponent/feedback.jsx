import React, { Component } from 'react';

const Feedback = () => {
    return (
       <form className="feedback">
           <div className="form-group">
               <label htmlFor="name">Name</label>
               <input type="text" className="form-control" name="name" id="name" required ></input>
           </div>
           <div className="form-group">
               <label htmlFor="email">Email</label>
               <input type="email" className="form-control" name="email" id="email" required ></input>
           </div>
           <div className="form-group">
             <label htmlFor="message">Message</label>
            <textarea className="form-control" id="message" style={{resize:"none"}} rows="8"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
       </form>
      );
}
 
export default Feedback;