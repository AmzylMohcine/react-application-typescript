import styles from "./Button.module.css"
interface Props {
  buttonText: string
  onClick: () => void
  color?: "primary" | "secondary" | "danger"
}
const Button = ({ buttonText, onClick, color }: Props) => {
  return (
    <button className={[styles.btn, styles["btn-" + color]].join(" ")} type="button" onClick={onClick}>
      {" "}
      My Button
    </button>
  )
}

export default Button
