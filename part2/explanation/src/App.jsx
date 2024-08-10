import Note from './components/Note'

const App = ({ notes }) => {

  /* NOT PRACTICAL, MANY OBJECTS IN ARRAY -> USE MAP FUNCTION
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        <li>{notes[0].content}</li>
        <li>{notes[1].content}</li>
        <li>{notes[2].content}</li>
      </ul>
    </div>
  )
    */

  /* NOTES WITHOUT SEPARATE COMPONENT
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note =>
          <li key={note.id}>
            {note.content} 
          </li>
        )}
      </ul>
    </div>
  )
  */

  /*NOTE AS A SEPARATE COMPONENT*/

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => 
          <Note key={note.id} note={note} />
        )}
      </ul>
    </div>
  )
}

export default App