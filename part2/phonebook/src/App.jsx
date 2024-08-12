import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'

import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const [notificationMessage, setNotificationMessage] = useState(null)
  const [className, setClassName] = useState(null)

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()

    if (persons.some(person => person.name == newName)){
      let personDB = persons.find(person => person.name == newName)
      const confirmed = window.confirm(newName + " is already added to the phonebook, replace the old number with a new one?");
      
      if (confirmed) {
        const updatedPerson = { ...personDB, number: newNumber };

        personService
        .update(personDB.id, updatedPerson)
        .then(returnedPerson => {
          setPersons(persons.map(person => 
            person.id !== personDB.id ? person : returnedPerson
          ));
          console.log(`Person with ID ${personDB.id} updated successfully`)
        })
      }
    } else {
      const personObject = {
        name: newName,
        number: newNumber
      }

      personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
        })

        setNotificationMessage(
          `Added ${newName}`
        )
        setClassName('success')
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  const personsToShow = persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))

  const deletePerson = id => {
    personService
      .deletePerson(id)
      .then(() => {
        setPersons(persons.filter(person => person.id !== id))
        console.log(`Person with ID ${id} deleted successfully`)
      })
      .catch(error => {
        alert(`The person with ID '${id}' does not exist`)
      })
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notificationMessage} className={className}/>
      <p>Filter shown with:</p>
      <Filter
          filter={newFilter}
          functionOnChange={handleFilterChange}
      />
      <h2>add a new</h2>
      <PersonForm
        onSubmitFunction={addPerson}
        nameInput={newName}
        nameInputFunction={handleNameChange}
        numberInput={newNumber}
        numberInputFunction={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons persons={personsToShow} onDelete={deletePerson} />
    </div>
  )
}

export default App