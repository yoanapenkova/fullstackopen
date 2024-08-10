const PersonForm = ({onSubmitFunction, nameInput, nameInputFunction, numberInput, numberInputFunction}) => {
    return (
      <div>
        <form onSubmit={onSubmitFunction}>
            <div>
            name: <input
                value={nameInput}
                onChange={nameInputFunction}
            /> <br></br>
            number: <input
                value={numberInput}
                onChange={numberInputFunction}
            />
            </div>
            <div>
            <button type="submit">add</button>
            </div>
        </form>
      </div>
    )
  }
  
  export default PersonForm