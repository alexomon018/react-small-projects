import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [name, setName] = useState('')
  const [items, setItems] = useState([])
  const [edit, setEdit] = useState(false)
  const [editID, setEditID] = useState(null)
  const [alert, setAlert] = useState({
    show: false,
    msg: 'hello world',
    type: 'success',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name) {
      showAlert(true, 'danger', 'Please enter value')
    } else if (name && edit) {
      setItems(
        items.map((item) => {
          if (item.id === editID) {
            return { ...item, name: name }
          }
          return item
        })
      )
      setName('')
      setEditID(null)
      setEdit(false)
      showAlert(true, 'success', 'Item edited')
    } else {
      setItems((prevItems) => {
        return [
          ...prevItems,
          { id: new Date().getTime().toString(), name: name },
        ]
      })
      showAlert(true, 'danger', 'Item added')
      setName('')
    }
  }

  const clearItems = () => {
    setItems([])
  }
  const deleteItem = (id) => {
    const newItems = items.filter((item) => item.id !== id)
    setItems(newItems)
    setAlert({
      show: true,
      msg: 'Item deleted',
      type: 'danger',
    })
  }
  const editItem = (id) => {
    const findItem = items.find((item) => item.id === id)
    setEdit(true)
    setEditID(id)
    setName(findItem.name)
  }
  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg })
  }
  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} showAlert={showAlert} {...items} />}
        <h3>grocery bud</h3>
        <div className='form-control'>
          <input
            type='text'
            className='grocery'
            placeholder='e.g eggs'
            value={name}
            name='item'
            id='item'
            onChange={(e) => setName(e.target.value)}
          />
          <button type='submit' onClick={handleSubmit} className='submit-btn'>
            {edit ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      <div className='grocery-container'>
        <List items={items} deleteItem={deleteItem} editItem={editItem} />
      </div>

      {items.length > 0 && (
        <button className='clear-btn' onClick={clearItems}>
          clear items
        </button>
      )}
    </section>
  )
}

export default App
