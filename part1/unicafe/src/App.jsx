import { useState } from 'react'

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const StatisticLine = ({text, value}) => {
  if(text == 'positive') {
    return (
      <div>
        {text} {value} %
      </div>
    )
  }

  return (
    <div>
      {text} {value}
    </div>
  )
}

// a proper place to define a component
const Statistics = ({good, neutral, bad, all}) => {

  if (all == 0){
    return (
      <div>
        <h3>statistics</h3>
        <p>
          No feedback given
        </p>
      </div>
    )
  }
  
  return (
    <div>
      <h3>statistics</h3>
      <StatisticLine text='good' value={good} />
      <StatisticLine text='neutral' value={neutral} />
      <StatisticLine text='bad' value={bad} />
      <StatisticLine text='all' value={all} />
      <StatisticLine text='average' value={(good * 1 + neutral * 0 + bad * -1)/all} /> 
      <StatisticLine text='positive' value={good/all * 100} />
    </div>
  )
}

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

      <Statistics good={good} neutral={neutral} bad={bad} all={all}/>
    </div>
  )
}

export default App