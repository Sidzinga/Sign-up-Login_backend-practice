import React, { useState } from 'react';
import './App.css'

const LoginForm = () => {
  const [formData, setFormData] = useState({
     
});

  const handleChange = (e) => {
    e.preventDefault()
    const { name, value } = e.target;
    setFormData(values => ({...values,
      [name]: value,
    }));
    
  };

  const handleClick = (e) => {
    e.preventDefault();

 console.log(formData)
   ;
  };

 

  return (<><header><h1>Login</h1></header>
    <form onClick={handleClick} id ="form">
      <div id = 'info'><div>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      
      <button type="submit" onClick = {handleClick}>Submit</button></div>
    </form>

{console.log(formData)}
<div id = 'view'> 



<h1>Welcome {formData.firstName} </h1><br></br>

 </div>

</>
  );
};

export default LoginForm;
