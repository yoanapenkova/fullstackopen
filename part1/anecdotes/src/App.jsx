import { useState } from 'react'

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const MostVotedAnecdote = ({anecdotes, points}) => {
  
  let maxVote = Math.max(...points);
  let index = points.indexOf(maxVote);

  if(maxVote == 0){
    return (
      <p>
          Insufficient data to determine.
      </p>
    )
  }

  return (
    <p>
        {anecdotes[index]} <br></br>
        has {points[index]} votes
    </p>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleRandom = () => {
    const randomNumber = getRandomInt(0,anecdotes.length - 1);
    setSelected(randomNumber)
  }

  const handleVote = () => {
    const copy = Array.from(points);
    copy[selected] += 1
    setPoints(copy)
  }

  return (
    <div>
      <h3>Anecdote of the day</h3>
      {anecdotes[selected]} <br></br>
      has {points[selected]} votes <br></br>
      <Button onClick={handleVote} text='vote' />
      <Button onClick={handleRandom} text='next anecdote' />

      <h3>Anecdote with most votes</h3>
      <MostVotedAnecdote anecdotes={anecdotes} points={points}/>
    </div>
  )
}

export default App