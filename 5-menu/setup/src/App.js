import React, { useState } from 'react'
import Menu from './Menu'
import Categories from './Categories'
import items from './data'

const allCategories = ['all', ...new Set(items.map((item) => item.category))]

function App() {
  const [menu, setMenu] = useState(items)
  const [categories, setCategories] = useState(allCategories)

  const filterItems = (category) => {
    if (category === 'all') {
      setMenu(items)
      return
    }
    const newItems = items.filter((item) => item.category === category)
    setMenu(newItems)
  }

  return (
    <section className='menu section'>
      <div className='title'>
        <h2>Our menu</h2>
        <div className='underline'></div>
      </div>
      <div className='btn-container'>
        <Categories categories={categories} filterItems={filterItems} />
      </div>
      <div className='section-center'>
        {menu.map((men) => (
          <Menu
            key={men.id}
            title={men.title}
            price={men.price}
            category={men.category}
            desc={men.desc}
            img={men.img}
          />
        ))}
      </div>
    </section>
  )
}

export default App
