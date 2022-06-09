import React, { useState } from 'react';
import "../css/login.css";
import { useNavigate } from "react-router-dom";


 const Login=()=> {

	const [email,setEmail]=useState(null);
	const [password,setPassword]=useState(null);
	const [usertype,SetUsertype]=useState(null);
	const navigate = useNavigate();
	const [error,setError]=useState(false);

	
	

	const handleChange=(e)=> {
		e.preventDefault()
		const Data={email,password,usertype}
		console.log(Data)

		if (usertype==="student" && email &&password ){
			navigate("/greivance");

		}
		else if(!email || !password){
			
			setError(true);
		}
		
		
	}
	 return (
		 <div>
			 <h3>User Login</h3>
			 <div className='Logincredentials'>
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
						

						
						</form> 

			 </div>
		 </div>
	 )
 }
   
export default Login;