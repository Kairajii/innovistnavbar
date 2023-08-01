
import './App.css'
import Header from './components/Header';
import {Routes ,Route} from 'react-router-dom'
import HomePage from './components/pages/HomePage';
import CartPage from './components/pages/CartPage';
import { useState } from 'react';
const App = ()=>{
  
  return (
    <>
    <h1>UseContext Features</h1>
    <Header />
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/cart' element={<CartPage/>}/>
    </Routes>
    </>

  )
}

export default App;


// import { Text } from './model';
// import Todolist from './components/Todolist';
// const App:React.FC = () => {
//   const [ text,setText ] = useState<string>("");
//   const [ todos,setTodos ] = useState<Text[]>([]);

//  const handleAdd=(e:React.FormEvent)=>{
//   e.preventDefault();
//   if(text){ 
//     setTodos([...todos,{id:Date.now(),text}])
//     setText("")
//   }
//  }
// console.log(todos)
//   return (
//     <div className='App'>

//       <span>Taskify</span>
//       <form className="input__box" onSubmit={handleAdd}>

//       <input type="text"
//        placeholder='Enter the text'
//        value={text}
//        onChange={(e)=>setText(e.target.value)}
//        />
//         <button type='submit'>Add</button>
//        </form>
//        <Todolist todos={todos} setTodos={setTodos} />
//     </div>
//   )
// }

// export default App