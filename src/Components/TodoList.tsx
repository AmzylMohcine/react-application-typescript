import React, { useState } from "react"

interface item {
  id: number
  text: string
  completed: boolean
}
export const TodoList = () => {
  const [todos, setTodos] = useState<item[]>([
    { id: 1, text: "Learn TypeScript", completed: false },
    { id: 2, text: "Build todo App List", completed: false }
  ])

  const handleToggle = (id: number) => {
    setTodos(
      todos.map(todoList => {
        if (todoList.id === id) {
          return { ...todoList, completed: !todoList.completed }
        }
        return todoList
      })
    )
  }
  const [input, setInput] = useState("")
  const handlClick = () => {
    const newTodo: item = { id: Date.now(), text: input, completed: false }
    setTodos([...todos, newTodo])
  }
  return (
    <div className="main-container">
      <h1> Todo List</h1>
      <ul>
        {todos.map(todosList => (
          <li
            key={todosList.id}
            onClick={() => {
              {
                handleToggle(todosList.id)
              }
            }}
            style={{ textDecoration: todosList.completed ? "line-through" : " " }}
          >
            {" "}
            {todosList.text}
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="add todo item"
        onChange={event => {
          setInput(event.currentTarget.value)
        }}
      />
      <button
        onClick={() => {
          handlClick()
          console.log("Hello")
        }}
      >
        Add item
      </button>
    </div>
  )
}
