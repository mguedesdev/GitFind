import React from "react"
import './styles.css';

const Input = ({user, onInputChange}) => {
  
  const handleChange = (event) => {
    onInputChange(event.target.value);
  };

  return (<>
    <input 
              value={user} 
              onChange={handleChange} 
              name="usuario" 
              placeholder="@username"
            />
  </>
  )
}

export {Input}