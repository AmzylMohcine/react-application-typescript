import ListGroup from "./Components/ListGroup"
function App() {
  const items = ["new york", "tanger", "san mames"]
  return (
    <div>
      <ListGroup items={items} heading={"cities"} />
    </div>
  )
}

export default App
