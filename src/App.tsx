import { useState } from "react"
// import Alert from "./Components/Alert"
import Button from "./Components/Button/Button"
// import ListGroup from "./Components/ListGroup/ListGroup"
import "./app.css"
import { BiAngry } from "react-icons/Bi"
import { Like } from "./Components/Like/Like"
import produce from "immer"
import { Navbar } from "./Components/Navbar"
import { Cart } from "./Components/Cart"
import { ExpandableText } from "./Components/ExpandableText"

// import ListGroup from "./Components/ListGroup"
function App() {
  // const items = ["new york", "tanger", "san mames", "hello"]
  // const handleSelectedItem = (item: string) => {
  //   console.log(item)
  // }
  // const [alertVisible, setAlertVisibility] = useState(false)

  // const [drink, setDrink] = useState({
  //   title: "americano",
  //   price: 5
  // })

  // nested object

  // const [customer, setCustomer] = useState({
  //   name: "john",
  //   adress: {
  //     city: "san fransisco",
  //     zipCode: 94460
  //   }
  // })

  // // object

  // const [tags, setTags] = useState(["cheers ", "happy"])
  // const handleClick = () => {
  //   setDrink({ ...drink, price: 7 })
  //   console.log("You Clicked ")
  // }

  // const handleClicknested = () => {
  //   setCustomer({ ...customer, adress: { ...customer.adress, zipCode: 7888 } })
  //   console.log("nested")
  // }

  // const handleClickObject = () => {
  //   // add-tags
  //   setTags([...tags, "NewOne"])

  //   // remove happy from array
  //   // setTags(tags.filter(tag => tag !== "happy"))

  //   //update
  //   setTags(tags.map(tag => (tag === "cheers" ? "hapinness" : tag)))
  //   console.log(setTags)
  // }

  // const [bugs, setBugs] = useState([
  //   {
  //     id: 1,
  //     title: "bug1",
  //     fixed: false
  //   },
  //   {
  //     id: 2,
  //     title: "bug2",
  //     fixed: false
  //   }
  // ])

  // const handleImmer = () => {
  //   setBugs(
  //     produce(draft => {
  //       const bug = draft.find(bug => bug.id === 1)
  //       if (bug) bug.fixed = true
  //     })
  //   )
  //   console.log("Immer")
  // }
  // const [cartItems, setCartItems] = useState(["product1", "product2", "product3"])

  // const [game, setGame] = useState({
  //   id: 1,
  //   player: {
  //     name: "john"
  //   }
  // })

  // const [pizza, setPizza] = useState({
  //   name: "spiccy Peperonni ",
  //   toppings: ["Mushroom"]
  // })

  // const [cart, setCart] = useState({
  //   discount: 0.1,
  //   items: [
  //     { id: 1, title: "title 1", quantity: 1 },
  //     { id: 2, title: "title 1", quantity: 1 }
  //   ]
  // })
  const handleClick = () => {
    // setCart({ ...cart, items: cart.items.map(item => (item.id === 1 ? { ...item, quantity: 2 } : item)) })
    // setPizza({ ...pizza, toppings: [...pizza.toppings, "cheese  "] })
    // setGame(
    //   produce(draft => {
    //     draft.player.name = "New Name "
    //   })
    // )
    // setGame({ ...game, player: { name: "bob" } })
  }
  return (
    <div>
      <ExpandableText maxChars={100}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo adipisci asperiores, similique, neque libero iure quisquam aut atque quibusdam dicta quis possimus est saepe et nisi enim fugit! Vel, assumenda. Accusamus id dolores obcaecati neque soluta, eveniet necessitatibus consequuntur maxime, at ipsa esse placeat quasi possimus tenetur exercitationem ex repellendus doloremque autem. Aliquam dicta perferendis pariatur fugit odio maiores voluptatem. Temporibus, mollitia deserunt. Minima aliquid repellat quae nesciunt aut? Soluta, vel illo dolores quia sint iusto facere tenetur provident adipisci dolor. Iure deserunt in amet maiores earum accusantium debitis incidunt? Asperiores debitis modi cupiditate nostrum, corporis officiis nesciunt quia! Quo commodi dicta beatae illo atque corrupti praesentium officia cumque expedita? Incidunt, dolores. Libero sint suscipit voluptate facilis repellendus dignissimos? Labore? </ExpandableText>
      {/* 
      {cart.items.map((item, index) => (
        <ul key={index}>
          <li> {item.title}</li>
          <li> {item.quantity}</li>
        </ul>
      ))} */}

      {/* {pizza.toppings} */}

      {/* {game.player.name} */}

      {/* <Navbar cartItemsCount={cartItems.length} />
      <Cart
        cartItems={cartItems}
        onClear={() => {
          setCartItems([])
        }}
      /> */}

      {/* {bugs.map((bug, index) => (
        <p key={index}>
          {" "}
          {bug.title} {bug.fixed === true ? "Fixed" : "Not Fixed"}
        </p>
      ))}
      <button onClick={handleImmer}> Click me </button> */}
      {/* {drink.price}
      <button onClick={handleClick}> Click me </button>
      <button onClick={handleClicknested}> Click me nested object </button>
      {customer.adress.zipCode}

      <button onClick={handleClickObject}> Click me im an object </button>
      {tags.map(tag => tag)} */}

      {/* <ListGroup items={items} heading={"cities"} onSelectectItem={handleSelectedItem} />
      {alertVisible && <Alert onClose={() => setAlertVisibility(false)}> My Alert</Alert>}
      <Button
        color="danger"
        buttonText="Custom text button"
        onClick={() => {
          setAlertVisibility(true)
        }}
      /> */}
      {/* <Button
        buttonText="Button"
        color="primary"
        onClick={() => {
          console.log("You clicked ")
        }}
      />
      <BiAngry color="red" size="40" /> */}

      {/* <Like
        onClick={() => {
          console.log("You liked")
        }}
      /> */}
    </div>
  )
}

export default App
