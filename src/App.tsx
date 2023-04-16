import { useEffect, useRef, useState } from "react"
import "./app.css"

import userService, { Users } from "./Services/userService"
import useUsers from "./Hooks/useUsers"

function App() {
  const { users, error, isLoading, setUsers, setError } = useUsers()

  const handleDelete = (user: Users) => {
    const originalUsers = [...users]
    setUsers(users.filter(u => u.id !== user.id))

    userService.deleteAll(user.id).catch(err => {
      setError(err.message)
      setUsers(originalUsers)
    })
  }
  const addUser = () => {
    const originalUsers = [...users]
    const newUser = { id: 15, name: "new User", phone: "070707077" }
    setUsers([...users, newUser])

    userService
      .create(newUser)
      .then(({ data: savedUser }) => setUsers([...users, savedUser]))
      .catch(err => {
        setError(err.message)
        setUsers(originalUsers)
      })
  }
  const updatedUser = (user: Users) => {
    const originalUsers = [...users]
    const updatedUser = { ...user, name: user.name + "!" }
    setUsers(users.map(u => (u.id === user.id ? updatedUser : u)))

    userService.update(updatedUser).catch(err => {
      setError(err.message)
      setUsers(originalUsers)
    })
  }
  return (
    <div>
      {error && <p className="text-danger"> {error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <button
        className="btn btn-primary mb-3"
        onClick={() => {
          addUser()
        }}
      >
        {" "}
        Add User{" "}
      </button>
      {users.map(user => (
        <ul className="list-group">
          <li key={user.id} className="list-group-item d-flex justify-content-between">
            {" "}
            {user.name}
            <div>
              <button
                className="btn btn-outline-secondary mx-1"
                onClick={() => {
                  updatedUser(user)
                }}
              >
                Update{" "}
              </button>
              <button className="btn btn-outline-danger" onClick={() => handleDelete(user)}>
                {" "}
                Delete{" "}
              </button>
            </div>
          </li>
        </ul>
      ))}
    </div>
  )
}

export default App
