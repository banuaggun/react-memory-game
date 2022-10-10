import React from 'react'
import Card from './Card'

function MainArea() {
  return (
    <div className='container my-3'>
      <h1 className="text-center">Memory Game</h1>
      <div className="row">
        <Card/>
        <Card/><Card/><Card/>
      </div>
      
    </div>
  )
}

export default MainArea