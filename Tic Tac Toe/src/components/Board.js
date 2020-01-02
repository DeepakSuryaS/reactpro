import React, { useState } from 'react'
import Block from './Block'

function Board(props) {
  const boardSize = props.boardSize
  const [blocks, setBlocks] = useState(Array(boardSize*boardSize).fill(null))
  const [xIsNext, setXIsNext] = useState(true)
  
  const style = {
    display: 'grid',
    gridTemplateColumns: `repeat(${boardSize}, 1fr)`,
    gridGap: '1px',
    margin: '100px'
  }
  
  // generate n * n blocks
  function renderBlocks(n) {
    const genBlocks = []
    for(let i = 0; i < n*n; i++) {
      genBlocks.push(<Block handleClick={() => handleClick(i)} key={i} value={blocks[i]} />)
    }
    return genBlocks
  }

  // fill block on click with X or O
  function handleClick(i) {
    const newBlocks = [...blocks]
    // return if match ended or block already filled
    if(calculateWinner(blocks) || blocks[i]) {
      return
    }
    newBlocks[i] = xIsNext ? 'X' : 'O'
    setBlocks(newBlocks)
    setXIsNext(!xIsNext)
  }

  function winningConditionsGen() {
    var size = parseInt(boardSize);
    var totalSquares = size * size;
    var numOfArr = size * 2;
    var wArr = new Array(numOfArr);
    var diagStrk1 = '';
    var diagStrk2 = '';

    for (var j = 0; j < size; j++) {
      let horiStrk = '';
      let vertiStrk = '';
      for (var i = 0; i < totalSquares; i++) {
        if (i / size === j) {
          horiStrk += i + ",";
          for (var k = 1; k < size; k++) {
            horiStrk += i + k + ",";
          }
        }
        if (i % size === j) {
          vertiStrk += i + ",";
        }
      }
      horiStrk = horiStrk.substring(0, horiStrk.length - 1);
      vertiStrk = vertiStrk.substring(0, vertiStrk.length - 1);
      var h = horiStrk.split(",");
      var v = vertiStrk.split(",");

      wArr[j] = v;
      wArr[j + size] = h;
      diagStrk1 += j * (size + 1) + ",";
      diagStrk2 += (j + 1) * (size - 1) + ",";
    }
    diagStrk1 = diagStrk1.substring(0, diagStrk1.length - 1);
    diagStrk1 = diagStrk1.split(",");
    wArr.push(diagStrk1);

    diagStrk2 = diagStrk2.substring(0, diagStrk2.length - 1);
    diagStrk2 = diagStrk2.split(",");
    wArr.push(diagStrk2);
    //console.log(diagStrk2);
    const winCondition = wArr;
    //console.log("win condition: ", winCondition)
    return winCondition
  }

  function calculateWinner(squares) {
    const lines = winningConditionsGen()
    for(let i = 0; i < lines.length; i++) {
      for(let j = 0; j < lines[i].length; j++) {
        if(squares[lines[i][j]] && squares[lines[i][j]]) {
          if(lines[i].every((val, index, arr) => squares[val] === squares[arr[0]])) {
            return squares[lines[i][j]]
          }
        }
      }
    }
    const newSquares = squares.filter(Boolean)
    if(newSquares.length === squares.length) {
      console.log("draw")
    }
    console.log('newSquares: ', newSquares)
    console.log('square: ', squares)
    console.log('lines: ', lines)
    return null;
  }

  let status
  const winner = calculateWinner(blocks)
  if(winner) {
    status = 'Winner: ' + winner
  } else {
    status = (xIsNext ? 'X' : 'O') + ' turn'
  }

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board" style={style}>
        { renderBlocks(boardSize) }
      </div>
    </div>
  )
}

export default Board