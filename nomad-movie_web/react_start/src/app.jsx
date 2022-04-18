import React, { useState, useEffect } from "react";
import './app.css'
import Button from './Button';

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("")
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  useEffect (() => {
    console.log('only once')
  });

  useEffect (() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log('when keyword changes ', keyword)
    }
  }, [keyword]);

  useEffect (() => {
    console.log('when counter changes ', counter)
  }, [counter]);
  
  useEffect (() => {
    console.log('when both changes ')
  }, [keyword, counter]);


  return (
    <div>
      <input 
        value={keyword} 
        onChange={onChange} 
        type="text" 
        placeholder="Search here"
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
