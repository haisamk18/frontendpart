import React from 'react';
import { useState } from 'react';
import "../css/register.css";


function Register() {
    const [name,setName] = useState(null)
    const [email,setEmail] = useState(null)
    const [password,setPassword] = useState(null)
    const [confirmpassword,setConfirmpassword] = useState(null)
    const [isFaculty,setIsFaculty] =useState(false)
    const [facultyNumber,setFacultynumber] = useState(null)
    const [enrollmentNumber,setEnrollmentnumber] = useState(null)
    const [phone,setPhone]=useState(null)
   
    

    const [error,setError] =useState(false);
    const [seconderror,setSeconderror]=useState(false);
    


    const handleSubmit = async (e) => {
        e.preventDefault()
        if(password===confirmpassword &&phone && email && password &&confirmpassword &&facultyNumber &&enrollmentNumber ) {
                let item= {phone,name,email,password,isFaculty,facultyNumber,enrollmentNumber}
                 console.log(item);
                 setError(false)

             let users= await fetch("http://localhost:5000/api/users",{
               method:'POST',
               body:JSON.stringify(item),
               headers:{
                   "Content-Type":"application/json",
                   
                      
                    "Accept": "application/json"
                 },
             })  
           
              users= await users.json()
              console.warn("users",users)
                
                
                 
                 
        }
        else if(password!==confirmpassword) {
            setError(true);
        }
        else {
           setSeconderror(true);
        }
    }



   // function Submit() {
    //    if(password===confirmpassword) {
     //      let item= {username,email,password,isfaculty,facultyno,enrollmentno}
      //     console.log(item);
       //    console.log(error);
           
            
       // }
       // else {
      //      setError(()=> <p>Password didnt match</p>);
            
      //  }
        
        
   // }

   
        
        const handleChange = () => { 
          
          setIsFaculty(!isFaculty); 
          
        }; 

    return(
        <div >
            <form className="Reg-page" onSubmit={handleSubmit}>

            <div className="form">
                <h1>Sign Up</h1>
                <div className="form-body">
                    <div className="username">
                        <label className="form__label" for="username">Username </label>
                        <input className="form__input" type="text" id="username" placeholder="Username"

                        onChange={(e)=>setName(e.target.value)}
                        
                        />
                    </div>
                    
                    <div className="email">
                        <label className="form__label" for="email">Email </label>
                        <input  type="email" id="email" className="form__input" placeholder="Email"

                        onChange={(e)=>setEmail(e.target.value)}
                        
                        />
                    </div>
                    <div className="email">
                        <label className="form__label" for="phone">Phone </label>
                        <input  type="text" id="phone" className="form__input" placeholder="Email"

                        onChange={(e)=>setPhone(e.target.value)}
                        
                        />
                    </div>
                    <div className="password">
                        <label className="form__label" for="password">Password </label>
                        <input className="form__input" type="password"  id="password" placeholder="Password"
                        
                        onChange={(e)=>setPassword(e.target.value)}
                        
                        />
                    </div>
                    <div className="confirm-password">
                        <label className="form__label" for="confirmPassword">Confirm Password </label>
                        <input className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password"
                        
                        onChange={(e)=>setConfirmpassword(e.target.value)}
                        />
                    </div>
                   {error? (<p className='error'>"Password didn't matched"</p>):(<p></p>)}
                   {seconderror? (<p className='error'>"All fields are required"</p>):(<p></p>)}
                   

                    <div className="switchcontainer">

                        <span className="switchtext">Are you a faculty?</span>
                    
                    <div className="switch">

                       
                        
                        <label className="form__label" for="isFaculty"> 
                        <input className="form__input" type="checkbox" id="isFaculty"  onChange={handleChange}
                         />
                         <span className="slider"></span>
                        
                      
                        </label>
                        
                        
                       
                    </div>
                    </div>
                    
                    {!isFaculty? (<div>
                        <div className="Faculty No.">
                        <label className="form__label" for="faculty_no">Faculty No:</label>
                        <input className="form__input" type="text" id="faculty_no" placeholder="Faculty no."
                        
                        onChange={(e)=>setFacultynumber(e.target.value)}
                        />
                        </div>

                        <div className="Enrollment No.">
                        <label className="form__label" for="Enroll">Enrollment No:</label>
                        <input className="form__input" type="text" id="Enroll" placeholder="Enrollment no."
                        
                        onChange={(e)=>setEnrollmentnumber(e.target.value)}
                        />
                        </div>

                      
                        
                        <div className="footer">
                        <button type="submit"className="btn">Register</button>
                        
                        </div>
                        </div>


                    ):(<>
                        <div>
                        {error? (<p className='error'>"Password didn't matched"</p>):(<p></p>)}
                        {seconderror? (<p className='error'>"All fields are required"</p>):(<p></p>)}
                   
                        </div>
                       
                        <div className="footer">
                            
                        <button type="submit"  className="btn">Register</button>
                        
                    </div>
                    </>
                    )}
                </div>
                    
      </div> 
             <div className="Reg-img">

             
             
             </div> 
             </form>
        </div>
    )

}
export default Register