import React, { useState } from 'react'

const Tour = ({ id, name, price, info, image, removeTour }) => {
  const [readMore, setReadMore] = useState(true)

  return (
    <article className='single-tour'>
      <img src={image} alt={name} />
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>$ {price}</h4>
        </div>
        <p>
          {readMore ? `${info.substring(1, 200)}...` : info}{' '}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'Read More' : 'Read Less'}
          </button>
        </p>
        <button className='delete-btn' onClick={() => removeTour(id)}>
          Not interested
        </button>
      </footer>
    </article>
  )
}

export default Tour
