import { useRef, useState } from "react"
// import Alert from "./Components/Alert"
import Button from "./Components/Button/Button"
// import ListGroup from "./Components/ListGroup/ListGroup"
import "./app.css"
// import { BiAngry } from "react-icons/Bi"
// import { Like } from "./Components/Like/Like"
// import produce from "immer"
// import { Navbar } from "./Components/Navbar"
// import { Cart } from "./Components/Cart"
import { ExpandableText } from "./Components/ExpandableText"
import { Form } from "./Components/Form"
import { ExpenseList } from "./Expense-tracker/Components/ExpenseList"
import { ExpenseFilter } from "./Expense-tracker/Components/ExpenseFilter"
import { CommandList } from "./Commande-tracker/Components/CommandList"

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

  // const handleform = event => {
  //   event.preventDefault()
  //   alert("hello")
  // }
  const [selectedCategory, setSelectedCategory] = useState("")

  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "Desc1",
      amount: 10,
      category: "Utilities"
    },
    {
      id: 2,
      description: "Desc2",
      amount: 10,
      category: "Utilities"
    },
    {
      id: 3,
      description: "Desc3",
      amount: 10,
      category: "Utilities"
    },
    {
      id: 4,
      description: "Desc4",
      amount: 10,
      category: "Utilities"
    }
  ])

  const [products, setProducts] = useState([
    {
      id: 1,
      name: "product1",
      category: "home",
      description: "home products",
      amount: 20
    },
    {
      id: 2,
      name: "product2",
      category: "home",
      description: "home products",
      amount: 20
    }
  ])

  const visibleExpenses = selectedCategory ? expenses.filter(e => e.category === selectedCategory) : expenses

  return (
    <div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={category => {
            setSelectedCategory(category)
          }}
        />
      </div>

      <ExpenseList
        expenses={visibleExpenses}
        onDelete={id => {
          setExpenses(expenses.filter(e => e.id !== id))
        }}
      />
      <div className="mb-10">
        <h1> PRODUCT TRACKER </h1>
      </div>

      <CommandList
        products={products}
        onDelete={id => {
          setProducts(products.filter(e => e.id !== id))
        }}
      />

      {/* <Form /> */}
      {/* <ExpandableText maxChars={80}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, laborum at! Et consectetur facilis asperiores fugiat, aut repudiandae pariatur, eum molestiae iusto magnam quia vero quae animi quo dicta obcaecati. At ipsam ullam iusto tenetur quisquam rerum quod sit reprehenderit eveniet. Repellendus quos fugit quae est officia eveniet rerum, amet laudantium enim officiis cupiditate! Facere iure quia magni possimus exercitationem! Veritatis perferendis enim illum facere deserunt? Fugiat, sapiente laudantium sit sequi consequuntur pariatur eveniet voluptatum ipsum distinctio et, aut reprehenderit atque! Quae laboriosam repellat voluptatum ducimus nihil, ea ullam repudiandae. Debitis perferendis, eos dolorum voluptates corporis libero at, quod dignissimos provident qui sint sed, asperiores ratione animi assumenda nulla necessitatibus ex illo cupiditate odit! Odit nemo molestiae et nobis consequatur.</ExpandableText> */}
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
