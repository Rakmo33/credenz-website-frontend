import React from 'react';
  
const getCurrentUser = () => {
    //alert("ysudh" )
    console.log("userfsdcszd   : " + JSON.parse(localStorage.getItem("user")))
    return JSON.parse(localStorage.getItem("user"));
}

getCurrentUser()

const Profile=()=>{

   return(
    <div>  
          
    <div style={{
        display:"flex",
        justifyContent:"space-around",
        
        maxWidth:"550px",
        margin:"5% 5%"
    }}>
    <div>
    <img style={{width:"160px",height:"160px",borderRadius:"80px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTU4TdrkxNElS4sy9i0HLQEDfnqicbXmKqbvg&usqp=CAU"/>
        </div>
        <div>
         <h4>name</h4>
         <h4>rank:1</h4>
         <h4>leaderboard</h4>
         <div style={{display:"inline",margin:"5%"}}>
          <h6>college</h6>
          <h6>username</h6>
          <h6>event count</h6>   
         </div>
        </div>
        </div> 
        <div style={{display:"flex"}}>
            <h2 style={{margin:" 5%"}}>Registered events</h2>
            <div style={{display:"inline",margin:"5%"}}>
            <br/>
            <br/>
          <h6>event</h6>
          <h6>event</h6>
          <h6>event </h6>   
         </div>
            </div>   
    </div>

    );



}

export default Profile;