import React, {useState} from 'react';

export default function Counter() {
  const [likes, setLikes] = useState(0);
  const [value, setValue] = useState('Hello');

  function increment() {
    setLikes(likes + 1);
  }

  function decrement() {
    setLikes(likes - 1);
  }

  return(
    <div>
      <h1>{likes}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <h2>{value}</h2>
      <input type="text" value={value} onChange={event => setValue(event.target.value)}/>
    </div>
  )
}