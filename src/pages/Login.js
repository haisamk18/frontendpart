import React, { useState } from 'react';
import "../css/login.css";
import { useNavigate } from "react-router-dom";
import IMG from "../img/greivancebg.png";
import { Link } from 'react-router-dom'


 const Login=()=> {

	const [email,setEmail]=useState(null);
	const [password,setPassword]=useState(null);
	const [usertype,SetUsertype]=useState(null);
	const navigate = useNavigate();
	const [error,setError]=useState(false);

	const myStyle= {
		backgroundImage:`url(${IMG})`,
		
		backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',



	};

	
	

	const handleChange=(e)=> {
		e.preventDefault()
		const Data={email,password,usertype}
		console.log(Data)

		if (usertype==="student" && email && password ){
			navigate("/greivance");

		}
		else if(usertype==="faculty" && email && password ){
			navigate("/contact");
		}
		else if(!email || !password){
			
			setError(true);
		}
		
		
	}
	 return (
		 <div className='Fullpage' style={myStyle}>
			 
			 <div className='Logincredentials'>
			 <h3>User Login</h3>
				 <form onSubmit={handleChange}>
			            <label className="form__label" for="email">Username(Email)</label>
                        <input  type="email" id="email" className="form__input" placeholder="Email"

                        onChange={(e)=>setEmail(e.target.value)}
                        
                        />
						<label className="form__label" for="password">Password</label>
                        <input  type="password" id="password" className="form__input" placeholder="Password"

                        onChange={(e)=>setPassword(e.target.value)}
                        
                        />

                        <div>
							<span>User Type</span>
                        <select onChange={(e)=>SetUsertype(e.target.value)}>
							<option value="faculty">Faculty</option>
							<option value="student">Student</option>
						</select>
						</div>

						{error? (<p>"All field are required</p>):<></>}

						<div className="footer">
                        <button type="submit"className="btn">Login</button>
                        
                        </div>
						<div className='Reglink'>
                          <Link to="/signup">Register
						  </Link>

						</div>
						

						
						</form> 

			 </div>
		 </div>
	 )
 }
   
export default Login;