import React, { useEffect, useRef, useState } from 'react'
import Todos from './Todos';
import Form from './Form';


const Home = () => {
  const [count,setCount] = useState(0);
  const [todos,setTodos] = useState(["todo 1","todo 2"])
  console.log("home component render")
  return (
    <div>
      <Form />
    </div>
  )
}

export default Home
