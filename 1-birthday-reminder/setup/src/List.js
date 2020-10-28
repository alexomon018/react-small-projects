import React from 'react'

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        return (
          <article className='person'>
            <div key={person.id}>
              <h4>{person.name}</h4>
              <img src={person.image} alt='' />
              <p>{person.age} years</p>
            </div>
          </article>
        )
      })}
    </>
  )
}

export default List
