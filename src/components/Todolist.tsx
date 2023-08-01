import React from 'react'
import { Text } from '../model';
import SingleTodo from './SingleTodo';
interface Props{
    todos:Text[];
    setTodos: React.Dispatch<React.SetStateAction<Text[]>>;
}

const Todolist:React.FC<Props> = ({todos,setTodos}) => {
  return (
    <div className='todolist'>
        {
            todos.map((todo)=>(
                <SingleTodo
                todo={todo}
                todos={todos}
                setTodos={setTodos}
                key={todo.id} />
            ))

        }

        
    </div>
  )
}

export default Todolist