import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TicTacToe from './Components.jsx/TicTacToe'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
       <TicTacToe />
    </div>
  )
}

export default App
