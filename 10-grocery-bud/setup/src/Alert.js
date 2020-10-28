import React, { useEffect } from 'react'

const Alert = ({ type, msg, showAlert, items }) => {
  useEffect(() => {
    const time = setTimeout(() => {
      showAlert()
    }, 3000)

    return () => {
      clearTimeout(time)
    }
  }, [items])

  return <p className={`alert alert-${type}`}>{msg}</p>
}

export default Alert
