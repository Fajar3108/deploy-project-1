// p -> Count: 0
// buttton add -> count + 1

import { useState } from "react";

// button sub -> count - 1
const Counter = () => {
  const [count, setCount] = useState(0);

  const subtract = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>add</button>
      <button onClick={subtract}>sub</button>
    </div>
  );
};

export default Counter;
