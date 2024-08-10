import Part from './Part'

const Content = ({parts}) => {

    /* EXERCISE 2.2
    function totalExtercises(parts) {
        let total = 0
        for (let i = 0; i < parts.length; i++) {
            total += parts[i].exercises
        }
        return total
    }

    //this should go in the return part of the Content component down below if used the function of exercise 2.2
    <b>total of {totalExtercises(content)} exercises</b>

    */

    /* EXERCISE 2.3 */

    const total = parts.reduce((s, p) => {
        return s + p.exercises;
    }, 0);

    return (
      <div>
        {parts.map(part => 
          <Part key={part.id} part={part} />
        )}
        <b>total of {total} exercises</b>
      </div>
    )
  }
  
  export default Content