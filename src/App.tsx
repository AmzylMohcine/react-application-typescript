import { useState } from "react"
import Alert from "./Components/Alert"
import Button from "./Components/Button"

// import ListGroup from "./Components/ListGroup"
function App() {
  const items = ["new york", "tanger", "san mames", "hello"]
  const handleSelectedItem = (item: string) => {
    console.log(item)
  }
  const [alertVisible, setAlertVisibility] = useState(false)

  return (
    <div>
      {/* <ListGroup items={items} heading={"cities"} onSelectectItem={handleSelectedItem} /> */}
      {alertVisible && <Alert onClose={() => setAlertVisibility(false)}> My Alert</Alert>}
      <Button
        color="danger"
        buttonText="Custom text button"
        onClick={() => {
          setAlertVisibility(true)
        }}
      />
    </div>
  )
}

export default App
