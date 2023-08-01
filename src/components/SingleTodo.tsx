import React, { useState } from 'react'
import { Text } from '../model';
interface Props{
    todo:Text;
    todos:Text[];
    setTodos:React.Dispatch<React.SetStateAction<Text[]>>;
}

const SingleTodo:React.FC<Props> = ({todo,todos,setTodos}) => {

    const [edit,setEdit] = useState<boolean>(false);
    const [editText,setEditText] = useState<string>(todo.text); 

const handleDelete=(id:number)=>{
    setTodos(todos.filter((todo)=>todo.id!==id))
}

const handleEdit=(e:React.FormEvent,id:number)=>{
    e.preventDefault();
    setTodos(todos.map((todo)=>todo.id===id ? {...todo,todo:editText}:todo))
    setEdit(false)
}

  return (


    <form onSubmit={(e)=>handleEdit(e,todo.id)}>

{
    edit? (
        <input value={editText} onChange={(e)=>setEditText(e.target.value)}/>
    )
    : (
        <span>{todo.text}</span>
    )
}

        
        <button onClick={()=>{
            if(!edit) setEdit(!edit)
        }}>edit</button>
        <button onClick={()=>handleDelete(todo.id)}>delete</button>
    </form>
  )
}

export default SingleTodo