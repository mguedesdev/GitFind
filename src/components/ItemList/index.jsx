import React from 'react'
import './styles.css';
import { ReactComponent as ForkIcon } from '../../assets/git-fork-svgrepo-com.svg';
import { ReactComponent as StarIcon } from '../../assets/git-star.svg';

const ItemList = ({title, description, link, language, stars, forks}) => {
  return (
    <div className='item-list'>
      <a href={link}><strong>{title}</strong></a>
      <p>{description}</p>
      <div className='icones'>
        <span>❤ {language}</span>
        <span><StarIcon /> {stars}</span>
        <span><ForkIcon /> {forks}</span>
      </div>
      <hr />
    </div>
  )
}

export default ItemList

