import React from 'react'

const Menu = ({ title, desc, img, price }) => {
  return (
    <article className='menu-item'>
      <img className='photo' src={img} alt={title} />
      <div className='item-info'>
        <header>
          <h4>{title}</h4>
          <h3>$ {price}</h3>
        </header>
        <p className='item-text'>{desc}</p>
      </div>
    </article>
  )
}

export default Menu
