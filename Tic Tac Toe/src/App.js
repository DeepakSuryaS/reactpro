import React, { useState } from 'react'
import './App.css'
import Board from './components/Board'

function App() {
  const [tempBoardSize, setTempBoardSize] = useState(null)
  const [boardSize, setBoardSize] = useState(null)
  const [startGame, setStartGame] = useState(false)

  function handleSubmit(e) {
    e.preventDefault();
    setBoardSize(tempBoardSize)
    setStartGame(true)
  }

  return (
    <div className="App">
      {
        startGame ?
        <div className="game-board">
          <Board boardSize={boardSize} />
        </div>
        :
        <p>Choose board size to start game</p>
      }
      <label>Enter board size: </label>
      <input 
        type="text" 
        placeholder="Enter a number" 
        id="board-size"
        onChange={(e) => setTempBoardSize(e.target.value)}
      />
      <button type="submit" className="button" onClick={(e) => handleSubmit(e)}>Start Game</button>
    </div>
  )
}

export default App
