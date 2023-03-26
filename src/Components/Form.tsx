import { FormEvent, useRef, useState } from "react"
import immer from "immer"
import { useForm } from "react-hook-form"
import { FieldValues } from "react-hook-form/dist/types"

export const Form = () => {
  const { register, handleSubmit } = useForm()
  console.log(register("name"))

  const onSubmit = (data: FieldValues) => console.log(data)

  // const handleSubmit = (event: FormEvent) => {
  //   event.preventDefault()
  //   console.log(person)
  // }
  // const nameRef = useRef<HTMLInputElement>(null)
  // const ageRef = useRef<HTMLInputElement>(null)

  // const [person, setPerson] = useState({
  //   name: "",
  //   age: 0
  // })

  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          {" "}
          Name{" "}
        </label>
        <input {...register("name")} id="name" type="text" className="form-control" />
      </div>

      <div className="mb-3">
        <label htmlFor="age" className="form">
          {" "}
          Age
        </label>
        <input {...register("age")} id="age" type="number" className="form-control" />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  )
}
