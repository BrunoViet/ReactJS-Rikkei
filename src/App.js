import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(function () {
    document.title = `You clicked ${count2} times`
    console.log('hello')
  }, [count2])

  const handleIncrease = () => {
    setCount(count + 1)
    setCount2(count2 + 2)
  }
  return (
    <div>
      <h1>
        You clicked {count} times
        Computer get {count2}
      </h1>
      <button onClick={handleIncrease}>
        Increase
      </button>
    </div>
  )
}
export default App