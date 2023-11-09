import Form from "./components/Form"
import Header from "./components/Header"
import { useState } from "react"
import TodoList from "./components/TodoList"


function App() {

    const [todo, setTodo] = useState('')
    const [todoList, setTodoList] = useState([])

  return (
    <>
    <div className="bg-orange-200 h-screen">
    <Header />
     <div className="container mx-auto mt-4 bg-todo h-screen bg-no-repeat 
     bg-center"> 

     <Form 
      todo = {todo}
      setTodo = {setTodo}
      todoList = {todoList}
      setTodoList = {setTodoList}
     />

    
    <TodoList 
      todoList={todoList}
      setTodoList={setTodoList}
    />
     </div>
    </div>
   
    </>
  )
}

export default App
