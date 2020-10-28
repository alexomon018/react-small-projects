import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
const url = 'https://course-api.netlify.app/api/react-tours-project'

function App() {
  const [tours, setTours] = useState([])
  const [loading, setLoading] = useState(true)
  const getTours = async () => {
    try {
      setLoading(true)
      const promise = await fetch(url, { method: 'GET' })
      const data = await promise.json()
      setLoading(false)
      setTours(data)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  useEffect(() => {
    getTours()
  }, [])

  console.log(tours)

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className='title'>
          <h2>Our Tours</h2>
          <div className='underline'></div>
          <Tours tours={tours} removeTour={removeTour} />
        </div>
      )}
    </>
  )
}

export default App
