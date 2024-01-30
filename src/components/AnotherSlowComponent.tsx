import React, { useState } from 'react'

const AnotherSlowComponent = () => {
    console.log("Another Slow component is rendered")
    const [todos,setTodos] = useState([]);

    const addTodos=()=>{
        setTodos((t)=>[...t,"New Todos"] as any)
    }
  return (
    <div>
      {
        todos.map((todo,index)=>(
            <p key={index}>todo</p>
        ))
      }
      <button onClick={addTodos}>Add Todos</button>
    </div>
  )
}

export default AnotherSlowComponent
