import React from 'react'
import Tour from './Tour'
const Tours = ({ tours, removeTour }) => {
  return (
    <section className='section'>
      {tours.map((tour) => {
        return (
          <Tour
            id={tour.id}
            name={tour.name}
            price={tour.price}
            info={tour.info}
            image={tour.image}
            removeTour={removeTour}
            key={tour.id}
          />
        )
      })}
    </section>
  )
}

export default Tours
