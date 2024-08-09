import { useState } from 'react'

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const handleGood = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    setAll(all + 1)
  }

  const handleNeutral = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    setAll(all + 1)
  }

  const handleBad = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
    setAll(all + 1)
  }

  return (
    <div>
      <h3>give feedback</h3>
      <Button onClick={handleGood} text='good' /> 
      <Button onClick={handleNeutral} text='neutral' /> 
      <Button onClick={handleBad} text='bad' />

      <h3>statistics</h3>
      <p>
        good {good} <br></br>
        neutral {neutral} <br></br>
        bad {bad} <br></br>
        all {all} <br></br>
        average {(good * 1 + neutral * 0 + bad * -1)/all} <br></br>
        positive {(good/all) * 100} %
      </p>
    </div>
  )
}

export default App