import React, { useEffect, useState } from "react"

interface List {
  id: number
  text: string
  checked: boolean
}

export const Pratique = () => {
  const [list, setList] = useState<List[]>([
    {
      id: 1,
      text: "text1",
      checked: false
    },
    {
      id: 2,
      text: "text2",
      checked: false
    }
  ])

  // toggle line through
  const handleToggle = (id: number) => {
    setList(
      list.map(itemList => {
        if (itemList.id === id) {
          return { ...itemList, checked: !itemList.checked }
        }
        return itemList
      })
    )
  }

  const [input, setInput] = useState("")

  // add to list
  const handleClick = () => {
    const newForm: List = { id: Date.now(), text: input, checked: false }
    setList([...list, newForm])
  }

  //delete from list
  const deleteById = (list: List) => {
    setList(prevList => prevList.filter(l => l.id !== list.id))
  }

  //modify
  const modifyItem = (list: List) => {
    const updatedItem = { ...list, text: list.text + "!" }
    setList(prevlist => prevlist.map(item => (item.id === list.id ? updatedItem : item)))
  }

  return (
    <div className="mb-10">
      <h1> My Beautiful to do list.</h1>

      <ul>
        {list.map(item => (
          <>
            <li
              key={item.id}
              onClick={() => {
                {
                  handleToggle(item.id)
                }
              }}
              style={{ textDecoration: item.checked ? "line-through" : "" }}
            >
              {" "}
              {item.text}
            </li>
            <button key={item.id} onClick={() => deleteById(item)}>
              {" "}
              Delete
            </button>
            <button key={item.id} onClick={() => modifyItem(item)}>
              {" "}
              Modify
            </button>
          </>
        ))}
      </ul>

      <input
        placeholder="add item"
        type="text"
        onChange={event => {
          setInput(event.currentTarget.value)
        }}
      />

      <button onClick={handleClick}> Submit </button>
    </div>
  )
}
