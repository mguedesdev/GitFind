import React from "react";
import './styles.css';

const Button = ({handleGetData}) => {
  return (
    <button onClick={handleGetData} className="btnBuscar">Buscar</button>
  )
}

export default Button;