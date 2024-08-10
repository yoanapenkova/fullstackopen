const Filter = ({filter, functionOnChange}) => {
    return (
      <div>
        <input
          value={filter}
          onChange={functionOnChange}
        />
      </div>
    )
  }
  
  export default Filter