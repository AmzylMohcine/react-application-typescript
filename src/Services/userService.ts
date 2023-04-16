import apiClient, { CanceledError } from "./api-client"
import create from "./http-service"

export interface Users {
  id: number
  name: string
  phone: string
}

class userService {}

export default create("/users")
