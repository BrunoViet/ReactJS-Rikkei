import { useState, useReducer } from "react";

function App() {
  // const [count, setCount] = useState(0)

  const UP = 'UP';
  const DOWN = 'DOWN';

  const reducer = (state, actions) => {
    if (actions === UP) {
      return state += 1
    } else if (actions === DOWN) {
      return state -= 1
    }
  }

  const [count, dispatch] = useReducer(reducer, 0)

  return (
    <div className="app">
      <h1>Reducer</h1>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(UP)}>Up</button>
      <button onClick={() => dispatch(DOWN)}>Down</button>
    </div>
  )
}
export default App