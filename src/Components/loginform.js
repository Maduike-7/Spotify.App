import React from 'react';

export default function Loginform(){
    return(
        <div className="signupForm">
        <label>Email address or username</label>
        <br />
        <input type="email" placeholder="Email address or username" className="signupInput" />
        <br />
        <br />
    
        <label>Password</label>
        <br />
        <input type="email" placeholder="Password" className="signupInput" />
    
       <br />
       </div>
    )
}
