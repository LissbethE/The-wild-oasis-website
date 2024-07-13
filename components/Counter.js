"use client";

import { useState } from "react";

function Counter({ data }) {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <button onClick={() => setCounter((c) => c + 1)}>{counter}😘</button>

      <ul>
        {data.map((user) => (
          <li key={user.name}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Counter;
