import "./Button.css"
interface Props {
  // buttonText: string
  onClick: () => void
  // color?: "primary" | "secondary" | "danger"
}
const Button = ({ onClick }: Props) => {
  return (
    <button className="button btn-component" type="button" onClick={onClick}>
      {" "}
      My Button
    </button>
  )
}

export default Button
