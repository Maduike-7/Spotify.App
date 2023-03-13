import React from 'react';
import Loginform from "./loginform"


function Login () {
    return(
        <div>
        <div className="crown">
          <h3>BRAND</h3>
          <hr />
          <br />
          <h6>To continue, log in to Spotify.</h6>
           <div className="signupButtons">
          <button className="facebook"><i class="fa-brands fa-facebook-square"></i> CONTINUE WITH FACEBOOK</button>
          <br />
          <button className="apple"><i class="fa-brands fa-fw fa-apple"></i> CONTINUE WITH APPLE</button>
            <br />
          <button className="google"><i class="fa-brands fa-google fa-fw"></i> CONTINUE WITH GOOGLE</button>
          <br />
          <button className="number">CONTINUE WITH PHONE NUMBER</button>
          <p>or</p>  
        </div>

        <Loginform />
        </div>
        </div>
    )
}

export default Login;