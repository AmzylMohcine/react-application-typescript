import { render } from "react-dom"

//PascalCasing
function Message() {
  // JSX
  const name = "Mo"
  if (name) {
    return <h1>Hello {name}</h1>
  }
  return <h1>Hello world </h1>
}

export default Message
