const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  let total_excercises = 0
  for (let i = 0; i < course["parts"].length; i++) {
    total_excercises += course["parts"][i]["exercises"]
  }

  return (
    <div>
      <Header course={course["name"]} />
      <Content parts={course["parts"]} />
      <Total n_exercises={total_excercises} />
    </div>
  )
}

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {

  return (
    <div>
        <Part title={props.parts[0]["name"]} n_exercises={props.parts[0]["exercises"]} key={1} />
        <Part title={props.parts[1]["name"]} n_exercises={props.parts[1]["exercises"]} key={2} />
        <Part title={props.parts[2]["name"]} n_exercises={props.parts[2]["exercises"]} key={3} />
    </div>
  )
}

const Part = (props) => {
  return (
    <p>{props.title} {props.n_exercises}</p>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.n_exercises}</p>
  )
}

export default App
