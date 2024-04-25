import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import First from './Components/First'
import Second from './Components/Second'
import Third from './Components/Third'

function App() {
  const [count, setCount] = useState(20);
  const [run, setrun] = useState(21);
  const [dance, setdance] = useState(69);

  return (
    <>
     <First value={count} data={"abc"} />

     <Second value={run} />

     <Third value={dance} />
    </>
  )
}

export default App
