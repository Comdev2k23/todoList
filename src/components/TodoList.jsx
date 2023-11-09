import React from 'react'
import Todo from './Todo'

const TodoList = ({todoList, setTodoList}) => {
  return (
    <div className='grid grid-cols-3 ml-3 my-4 
        '>
        {todoList.map((task) => (
            <Todo task = {task} 
                key={task.id}
                todoList={todoList}
                setTodoList={setTodoList}
            />
        ))}
    </div>
  )
}

export default TodoList