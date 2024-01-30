import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount] = useState(0);
    console.log("counter comonent is rendered")
  return (
    <div>
       <p >Count:{count}</p>
      <button onClick={()=>setCount(count+1)}>+</button>
    </div>
  )
}

export default Counter
