import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'

function App() {
  const [todoList, setTodoList] = useState([])
  const [item, setItem] = useState('')

  const addToDo = () => {
    if (item.trim()) { 
      setTodoList([...todoList, { item, checkItem: false }])
      setItem('')
    }
  }

  const handleCheck = (index) => {
    const updatedTodos = [...todoList];
    updatedTodos[index].checkItem = !updatedTodos[index].checkItem;
    setTodoList(updatedTodos);
  }

  return (
    <div className='flex bg-yellow-200 w-full h-full justify-center align-middle'>
      <div className='bg-white rounded-2xl w-fit h-32 flex flex-col'>
        <b className='text-4xl'>TO-DO App by PJ Vishnu</b>
        <br /><br />
        <div className='flex gap-1'>
          <input type="text" name="item" id="" className='border-4 border-amber-950 w-96 rounded-md' onChange={(e) => setItem(e.target.value)} />
          <button type="submit" className='bg-blue-500 h-8 w-10 rounded-md ' onClick={addToDo}>Add</button>
        </div>
        <br />
        <div>
          <ul>
            {todoList.map((todo, index) => (
              <li key={index} className='border-4 border-emerald-500 h-11 flex gap-1 text-lg w-full rounded-md text'>
                <input type="checkbox" name="" id="" checked={todo.checkItem} onChange={() => handleCheck(index)} size={30}/> 
                {todo.item} <br />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
