import React from 'react'
import { memo } from 'react'

const Todos = ({todos}:any) => {
    console.log("Todos component rendered")
  return (
    <div>
        <h1>Todos Components</h1>
      {
        todos.map((todo:any,index:any)=>{
            return <p key={index}>todo</p>
        })
      }
    </div>
  )
}

export default memo(Todos)
