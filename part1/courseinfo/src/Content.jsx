const Content = (props) => {
  return (
    <div>
      {props.content.map((prop) => (
          <p key={prop.part}>
            {prop.part} {prop.exercise}
          </p>
      ))}
    </div>
  )
}

export default Content