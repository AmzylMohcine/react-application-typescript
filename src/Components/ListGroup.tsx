import { MouseEvent } from "react"
function ListGroup() {
  const items = ["new york", "tanger", "san mames"]

  return (
    <>
      {items.length === 0 && <p> No result</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li className="list-group-item" key={index} onClick={(event: MouseEvent) => console.log(event.clientX)}>
            {item}
          </li>
        ))}
      </ul>
    </>
  )
}

export default ListGroup
