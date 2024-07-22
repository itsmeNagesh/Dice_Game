import React, { useState } from 'react';
import  './dice.css'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function DiceRoll() {
  const navigate=useNavigate();
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState(0);
  const [flag, setFlag] = useState(false);

  const handleOne = (digit) => {
    setFlag(!flag);
    setSelectedNumber(digit);
  };
const handledice=()=>{
  console.log("jknfjvnfjvnf")
}
function getRandomArbitrary(min, max) {
  return Math.floor( Math.random() * (max - min) + min);
}
const[randomNumber,setRandomNumber]=useState(1);
const Diceroll=()=>{
  console.log('pp',selectedNumber)
  if(selectedNumber!=0){
  
 let getnumber=getRandomArbitrary(1,7);
console.log(getnumber);
 setRandomNumber(getnumber);
 if(selectedNumber===getnumber)
 {
  setScore((pre)=>pre+getnumber);
  notify(1);
  setSelectedNumber(0);
  console.log(selectedNumber,'last')
 }
 else{
  setScore((pre)=>pre-getnumber);
  setSelectedNumber(0);

 }
}
else{
  notify(3);
}
}
const[show,setshow]=useState(false);
const handleRule=()=>{
setshow(!show)
}
const notify = (k) => {
  if (k==1) {
    toast.success(`🦄 Wow you win ${ selectedNumber} points`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  } else if(k==2) {
    toast.info('Score is Reset Now', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
      });
  }
  else if(k==3){
    toast.warn('Please select Number', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
      });
  }
};

  return (
    <>
      <main>
      <button  className='btn btn-dark m-1' onClick={()=>navigate("/")}>Back</button>
      <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
        <div className="container">
          <div className="row">
                        <div className="col-md-6 mt-1">
                          <div className="scoretop">
                            <h1 className="p-0 m-0" style={{ fontSize: "5rem" }}>{score}</h1>
                            <h3>Total Score</h3>
                          </div>
                        </div>
                        <div className="col-md-6 mt-3">
                          <div className="d-flex flex-row-reverse fw-bold mt-1 pt-5">
                            <button className={selectedNumber===6 ? "me-4 border border-black bg-dark text-light" : "me-4 border border-black"} style={{ width: "10%", height: "3rem" }}  onClick={()=>handleOne(6)}>6</button>
                            <button className={selectedNumber===5 ? "me-4 border border-black bg-dark text-light" : "me-4 border border-black"}
                            style={{ width: "10%", height: "3rem" }}  onClick={()=>handleOne(5)}>5</button>
                            <button  className={selectedNumber===4 ? "me-4 border border-black bg-dark text-light" : "me-4 border border-black"} 
                            style={{ width: "10%", height: "3rem" }}   onClick={()=>handleOne(4)}>4</button>
                            <button className={selectedNumber===3 ? "me-4 border border-black bg-dark text-light" : "me-4 border border-black"} style={{ width: "10%", height: "3rem" }}  onClick={()=>handleOne(3)}>3</button>
                            <button  className={selectedNumber===2 ? "me-4 border border-black bg-dark text-light" : "me-4 border border-black"} style={{ width: "10%", height: "3rem" }}   onClick={()=>handleOne(2)}>2</button>
                            <button
                              className={selectedNumber===1 ? "me-4 border border-black bg-dark text-light" : "me-4 border border-black"}
                              style={{ width: "10%", height: "3rem" }}
                              onClick={()=>handleOne(1)}
                            >
                              1
                            </button>
                          </div>
                          <h5 className="d-flex flex-row-reverse fw-bold mt-2 me-3">Select Number</h5>
                        
                        </div>
          </div>
          <div className="row d-flex justify-content-center align-items-center">
                    <div className="text-center cursor-pointer">
                      <img src={`/images/dice_${randomNumber}.png`} alt="Roll Dice"  onClick={Diceroll}  style={{cursor:"pointer"}}/>
                      <h5 className="fw-bold ms-3">Click on Dice to roll</h5>
                      <button className="border border-black rounded py-1 fw-bold ms-3" style={{ width: "13rem" }} onClick={()=>{setScore(0),notify(2)}}>Reset Score</button><br />
                      <button className="border border-black rounded py-1 fw-bold ms-3 bg-dark text-light mt-3" style={{ width: "13rem" }} onClick={handleRule}>Show Rule</button>
                    
                    </div>
                    <div>
                    <div className='rule d-flex' style={{ display: show ? '' : 'none' ,}}>
                      <div  style={{ display: show ? '' : 'none' }}> <strong className='ms-4 '>How to Play Dice Game:</strong>
                      <ul className="">
                        <li >Select any Number</li>
                        <li>Click on dice image</li>
                        <li>after click on  dice  if selected number is equal to dice number you will get same point as dice </li>
                        <li>if you get wrong guess then  2 point will be dedcuted </li>
                      </ul></div>
                     <div> <button className='border-0' style={{ display: show ? '' : 'none' }} onClick={handleRule}>X</button></div>
                     
                    </div>
                   
                    
                    </div>
                    <div>
                   
                    </div>
                    
          </div>
        </div>
  
      </main>
    </>
  );
}

export default DiceRoll;
