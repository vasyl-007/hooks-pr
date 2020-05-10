import React, { useState, useEffect, useContext } from "react";

const initialValue = 0;

function App() {
  // const newValue = useContext("MyContext");
  const [value, setValue] = useState(initialValue);

  return (
    <div>
      <h3>it works</h3>
      <button onClick={() => setValue(initialValue)}>Reset</button>
      <button onClick={() => setValue(value + 1)}>Increment</button>
      <button onClick={() => setValue(value - 1)}>Decrement</button>
      <button>{value}</button>
    </div>
  );
}

export default App;
