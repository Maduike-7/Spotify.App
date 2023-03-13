import React from 'react'
import Form from "./form"

function SignUp (){
    return(
        <div>
         <div className="crown">
           <h3>BRAND</h3>
           <hr />
           <h2>Sign up for free to start listening.</h2>
            <div className="signupButtons">
                 <br />
           <button className="facebook"><i class="fa-brands fa-facebook fa-fw --fa-li-margin"></i> Sign up with Facebook</button>
           <br />
           <button className="google"><i class="fa-brands fa-google fa-fw"></i> Sign up with Google</button>
           <p>or</p>  
            </div>
            
           <Form />
       </div>
       
       </div>
     
       
 
    )
}

export default SignUp;