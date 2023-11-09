import React from 'react'
import TodoList from '../components/TodoList'

const Todo = ({task,todoList, setTodoList}) => {
    const deleteTodo = () => {
        setTodoList(todoList.filter((item) => item.id !== task.id))
    }
  return (
    <div className=''>
        <div className="flex flex-wrap gap-3 m-4 
        shadow-lg p-4 bg-white rounded-lg" > 
            <h1 className='font-poppins font-bold break-all'>{task.name}</h1>
            <button onClick={deleteTodo} className='bg-gray-400 rounded-lg px-2
            font-poppins font-semibold hover:opacity-70'>done</button>
        </div>
    </div>
  )
}

export default Todo