import apiClient, { CanceledError } from "./api-client"

export interface Users {
  id: number
  name: string
  phone: string
}

class userService {
  getAllUsers() {
    const controller = new AbortController()
    const request = apiClient.get<Users[]>("/users", { signal: controller.signal })

    return {
      request,
      cancel: () => {
        controller.abort()
      }
    }
  }

  deletUser(id: number) {
    return apiClient.delete("/users" + id)
  }

  addUser(user: Users) {
    return apiClient.post("/users", user)
  }

  updateUser(user: Users) {
    return apiClient.patch("/users" + user.id, user)
  }
}

export default new userService()
