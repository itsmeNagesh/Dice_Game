import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import Heropage from './components/Heropage/Heropage'
import DiceRoll from './components/game/DiceRoll'
function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Heropage/>}/>
    <Route path="/start" element={<DiceRoll/>}/>
    {/* <Route path="" element={}/> */}
   </Routes>
   </BrowserRouter>
   </>
  )
}

export default App
