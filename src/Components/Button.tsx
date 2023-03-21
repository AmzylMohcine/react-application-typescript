interface Props {
  buttonText: string
  onClick: () => void
  color?: "primary" | "secondary" | "danger"
}
const Button = ({ buttonText, onClick, color = "primary" }: Props) => {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>
      {buttonText}
    </button>
  )
}

export default Button
