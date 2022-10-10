import React from 'react'

function Card({value}) {
  return (
    <div className='col-3'>
      
      <center>
        <div className="mx-2 my-3 py-4 card">
          <h2><i className="bi bi-stars"></i>{value}</h2>
        </div>
        
      </center>
    </div>
  )
}

export default Card