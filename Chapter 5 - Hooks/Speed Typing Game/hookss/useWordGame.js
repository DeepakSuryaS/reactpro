import {useState, useEffect, useRef} from "react"

function useWordGame(startingTime = 10) {
  
  const [text, setText] = useState('')
  const [isTimeRunning, setIsTimeRunning] = useState(false)
  const [timeRemaining, setTimeRemaining] = useState(startingTime)
  const [wordCount, setWordCount] = useState(0)
  const textBoxRef = useRef(null)
  
  function startGame() {
    setIsTimeRunning(true)
    setTimeRemaining(startingTime)
    setText('')
    textBoxRef.current.disabled = false
    textBoxRef.current.focus()  
  }
  
  function endGame() {
    setWordCount(calculateWordCount(text))
    setIsTimeRunning(false)
  }
  
  function handleChange(e) {
    const {value} = e.target
    setText(value)
  }
  
  function calculateWordCount(text) {
    const wordsArr = text.trim().split(" ")
    return wordsArr.filter(word => word !== '').length    
  }
  
  useEffect(() => {
    if(isTimeRunning && timeRemaining > 0) {
      const timer = setTimeout(() => {
        setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 1)  
      }, 1000)
    } else if(timeRemaining === 0) {
      endGame()
    }
  }, [timeRemaining, isTimeRunning])

  return {textBoxRef, handleChange, text, isTimeRunning, timeRemaining, startGame, wordCount}
}

export default useWordGame