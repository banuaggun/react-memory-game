import React from 'react'

import '../assets/styles/win.css';

function Win({totalFlips, minutes, seconds, theme}) {
  return (
    <>
    <div className='win-screen'>
     <div className="col-md-10 dflex justify-content-center mx-auto my-4">
                <div className={`my-4 text-center text-${theme === 'light' ? "dark" : "light"}`}>
                    
                    <div className="row p-4">
                        <div className="card m-2 p-4 text-center rounded rounded-4 border-1 border-light bg-success bg-opacity-50">
                        <h2 className="card-title mt-4 fw-bold">You Win</h2>
                        <div className='card-body'>
                            <h5 className='mb-4'>Total Flips: {totalFlips}</h5>
                            <h5>Total Time {minutes} : {seconds}</h5>
                            <a href="/" className={`btn buton btn-outline-${theme === 'light' ? "" : "light"} fw-bold border border-2 rounded-4 py-2 px-4 mt-4 text-default`}>New Game</a>
                            </div>
                        </div>
                    </div>
                    
                </div>
                </div>
                </div>
                </>
  )
}

export default Win