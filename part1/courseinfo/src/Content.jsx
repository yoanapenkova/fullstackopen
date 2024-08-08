import Part from './Part';

const Content = (props) => {
  return (
    <div>
      <Part part={props.content[0].name} exercise={props.content[0].exercises}/>
      <Part part={props.content[1].name} exercise={props.content[1].exercises}/>
      <Part part={props.content[2].name} exercise={props.content[2].exercises}/>
    </div>
  )
}

export default Content