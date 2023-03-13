import React from 'react';
// import CenteredTabs from './tabs.js'

function Form() {
    return(
 <div className="signupForm">
    <label>What's your email?</label>
    <br />
    <input type="email" placeholder="Enter your email." className="signupInput" />
    <p>Use phone number instead</p>

    <label>Confirm your email</label>
    <br />
    <input type="email" placeholder="Enter your email again." className="signupInput" />

   <br />
   <label className="signupLabel">Create a password</label>
    <br />
    <input type="password" placeholder="Create a passwword." className="signupInput" />

    <br />
   <label className="signupLabel">What should we call you?</label>
    <br />
    <input type="text" placeholder="Enter a profile name." className="signupInput" />
    <p style={{color:"black", textDecoration:"none", paddingTop:"5px"}}>This appears on your profile.</p>
   
   <label>What's your date of birth?</label>
   <br />
   <div className="birthrow">
        <div className="daycolumn">
            <label>Day</label>
            <br />
            <input type="text" placeholder="DD" style={{width:"6vw", height:"7vh", padding:"1px 3px"}} />
        </div>
        <div className="monthcolumn" style={{marginLeft:"20px",}}>
            <label>Month</label>
            <br/>
            <input type="text" placeholder="Month" style={{height:"7vh", width:"15.4vw"}} /> 
        </div>
        <div className="yearcolumn" style={{marginLeft:"20px",}}>
            <label>Year</label>
            <br />
            <input type="text" placeholder="YYYY" style={{height:"7vh", width:"10vw"}} />   
        </div>
      
     </div>
            <br />
            <label>What's your gender?</label>
            <br/>
            <div style={{display:"flex"}}>
                <div style={{display:"flex"}}>
                 <input type="radio"/>
                 <p style={{margin:"2px 0px 0px 13px"}}>Male</p>  
                </div>
                <div style={{display:"flex", marginLeft:"20px"}}>
                 <input type="radio"/>
                 <p style={{margin:"2px 0px 0px 13px"}}>Female</p>  
                </div>
            </div>
            <br/>

          <a href="/main"><button type="button" className="btnn" style={{
                marginBorder:"35px 35px 35px 35px",
                backgroundColor:"red", 
                color:"black", 
                marginLeft:"110px", 
                marginTop:"30px",
                padding:"2% 5%",
                fontWeight:"700",
                fontSize:"larger"}}>Sign up</button></a>  
            <p style={{marginLeft:"100px",
            marginTop:"20px",
            textDecoration:"none",
            color:"black",
            fontSize:"larger"
        }}>Have an account? <a href="/login" style={{textDecoration:"underline", color:"red"}}>Log in</a> </p>
            
 </div>
    
    )
}

export default Form