import Part from './Part';

const Content = (props) => {
  return (
    <div>
      <Part part={props.content[0].part} exercise={props.content[0].exercise}/>
      <Part part={props.content[1].part} exercise={props.content[1].exercise}/>
      <Part part={props.content[2].part} exercise={props.content[2].exercise}/>
    </div>
  )
}

export default Content