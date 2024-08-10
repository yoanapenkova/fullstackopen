import Part from './Part'

const Content = ({content}) => {

    function totalExtercises(parts) {
        let total = 0
        for (let i = 0; i < parts.length; i++) {
            total += parts[i].exercises
        }
        return total
    }

    return (
      <div>
        {content.map(part => 
          <Part key={part.id} part={part} />
        )}
        <b>total of {totalExtercises(content)} exercises</b>
      </div>
    )
  }
  
  export default Content