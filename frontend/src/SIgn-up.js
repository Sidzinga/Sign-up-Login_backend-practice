import React, { useState } from 'react';
import './App.css'

const Form = () => {
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

 

  return (<><header><h1>Sign-Up</h1></header>
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
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Phone-Number:
          <input
            type="number"
            name="number"
            value={formData.number}
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

</>
  );
};

export default Form;
