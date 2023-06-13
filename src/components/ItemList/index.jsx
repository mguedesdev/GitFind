import React, { useState } from "react";
import './styles.css';
import { ReactComponent as ForkIcon } from '../../assets/git-fork-svgrepo-com.svg';
import { ReactComponent as StarIcon } from '../../assets/git-star.svg';

const ItemList = ({title, description, link, language, stars, forks}) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    let xRotation = 15 * (centerY - clientY) / (rect.height / 2);
    let yRotation = -15 * (centerX - clientX) / (rect.width / 2);
    
    xRotation = Math.min(Math.max(xRotation, -15), 15);
    yRotation = Math.min(Math.max(yRotation, -15), 15);

    setRotation({ x: xRotation, y: yRotation });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <a href={link}
    target="_blank" 
    rel="noreferrer">
      <div className='item-list'
        style={{
          transform: `perspective(500px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transition: 'transform 0.1s',  
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}>
        <div className="title-container">
          <strong className='title'>{title}</strong>
        </div>
        <hr />
        <div className='description'>
          <p>{description}</p>
        </div>
        <hr />
        <div className='icons'>
          <span>❤ {language}</span>
          <span><StarIcon /> {stars}</span>
          <span><ForkIcon /> {forks}</span>
        </div>
      </div>
    </a>

  )
}

export default ItemList
