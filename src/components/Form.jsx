import React from 'react'
import shortid from 'shortid'

const Form = ({todo, setTodo, todoList, setTodoList}) => {

    const onSubmit = (event) => {
        event.preventDefault()
        setTodoList([...todoList, {name: todo, id: shortid.generate()}])
        
    }
    const handleChange = (event) => {
        setTodo(event.target.value)
        console.log(todoList)
    }

  return (
    <div className="flex  mt-20 justify-center">
        <form onSubmit={onSubmit} >
            <input type="text" 
            className='border-2 rounded-lg p-2 '
            placeholder='enter a new task'
            value={todo}
            onChange={handleChange}
            />
            <button className='bg-green-400 rounded-lg px-2 py-1 ml-3 
            font-poppins font-semibold' 
            type='submit'
            >add task</button>
        </form>
    </div>
  )
}

export default Form