import { useState } from "react"
import { AiFillHeart } from "react-icons/Ai"
import { AiOutlineHeart } from "react-icons/Ai"

interface Props {
  onClick: () => void
}

export const Like = ({ onClick }: Props) => {
  const [status, setStatus] = useState(false)

  const toggle = () => {
    setStatus(!status)
    onClick()
  }

  if (status) {
    return <AiOutlineHeart size={20} onClick={toggle} />
  }

  return <AiFillHeart onClick={toggle} color="#ff6b81" size={20} />
}
