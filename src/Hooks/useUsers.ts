import { useEffect, useState } from "react"
import userService, { Users } from "../Services/userService"
import { CanceledError } from "../Services/api-client"

const useUsers = () => {
  const [users, setUsers] = useState<Users[]>([])
  const [error, setError] = useState("")
  const [isLoading, setIsloading] = useState(false)

  useEffect(() => {
    setIsloading(true)

    const { request, cancel } = userService.getAll<Users>()
    request
      .then(res => {
        setUsers(res.data)
        setIsloading(false)
      })
      .catch(err => {
        if (err instanceof CanceledError) return
        setError(err.message)
        setIsloading(false)
      })

    return () => cancel()
  }, [])

  return { users, error, isLoading, setUsers, setError }
}

export default useUsers
