import React from 'react'
import ReactDOM from 'react-dom'

function PortalTest({flag}) {
  const xxx = (
    <h1>This is another Test</h1>
  )

  if (!flag) {
    return (xxx)
  } 
  else {
    console.log('inside portal')
    return ReactDOM.createPortal(xxx, document.getElementById('portal'))
  }
}

export default PortalTest
