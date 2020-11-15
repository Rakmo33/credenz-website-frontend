import React from 'react';
import Social from '../sideEventButton/sideEvent';
import Footer from '../Footer/footer';
import jwt from 'jwt-decode'

const Feedback = () => {

    let user = ""

    if(localStorage.getItem("user")) {
        user = jwt(localStorage.getItem("user"))
    }

    return (
        <>
       <form className="feedback">
           <div className="form-group">
               <label htmlFor="name">Name</label>
               <input type="text" className="form-control" name="name" id="name" 
               value={JSON.stringify(user["name"]).replace(/\"/g, "")} required ></input>
           </div>
           <div className="form-group">
               <label htmlFor="email">Email</label>
               <input type="email" className="form-control" name="email" id="email"
               value={JSON.stringify(user["email"]).replace(/\"/g, "")} required ></input>
           </div>
           <div className="form-group">
             <label htmlFor="message">Message</label>
            <textarea className="form-control" id="message" style={{resize:"none"}} rows="8"></textarea>
        </div>
        <button type="submit" className="btn">Submit</button>
       </form>
       <Social />
       <div style={{marginTop:'28vh'}} > <Footer/></div>
      
     </>
      );
}
 
export default Feedback;