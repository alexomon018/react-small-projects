import React, { useState } from 'react'
import data from './data'
import SingleQuestion from './Question'
function App() {
  const [question, setQuestion] = useState(data)

  console.log(question)
  return (
    <div className='container'>
      <h3>Question and answer about login</h3>
      <section className='info'>
        {question.map((quest) => (
          <SingleQuestion
            key={quest.id}
            info={quest.info}
            title={quest.title}
          />
        ))}
      </section>
    </div>
  )
}

export default App
