import React from 'react';
import { useNavigate } from "react-router-dom";
const Greivance = () =>{
  const navigate = useNavigate();

    const handleClick = () => {
        navigate("/login");
    }

 
  return (
    <div>
      <h3>Sheeps</h3>
      <div>
        Goats are worst

        <button onClick={handleClick} type="button"> Hey </button>
      </div>
    </div>
  );
}
export default Greivance;