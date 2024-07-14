import React from 'react'
import { useNavigate } from 'react-router-dom'
function Heropage() {
    const navigate=useNavigate();
  return (
    <>
    <main>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 ">
            <img src='/images/dices.png' alt='' className='img-fluid' /> </div>
          <div className="col-md-6 d-flex flex-column justify-content-center alignment-item-center">
            <div>
              <span className='fw-bold ' style={{fontSize:"15vh"}}>DICE GAME </span>
            </div>
          <div className=" d-flex  flex-row-reverse"><button className='btn btn-dark w-50' onClick={()=>navigate("/start")}>Play Now</button></div>
          </div>
        </div>
      </div>
    </main>
    </>
  )
}

export default Heropage