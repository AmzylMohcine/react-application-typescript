import { FormEvent, useRef, useState } from "react"
import immer from "immer"
import { useForm } from "react-hook-form"
import { FieldValues } from "react-hook-form/dist/types"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { isAborted } from "zod/lib"

// deine the shape of the form
// interface FormData {
//   name: string
//   age: number
// }

// define shchma using ZOD
const schema = z.object({
  name: z.string().min(3, "must be atleast 3 caracters"),
  age: z.number({ invalid_type_error: "Age field is required." }).min(18, { message: "Age must be atleast 18" })
})

type FormData = z.infer<typeof schema>

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<FormData>({ resolver: zodResolver(schema) })

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
        {errors.name && <p className="text-danger"> {errors.name.message}</p>}
      </div>

      <div className="mb-3">
        <label htmlFor="age" className="form">
          {" "}
          Age
        </label>
        <input {...register("age", { valueAsNumber: true })} id="age" type="number" className="form-control" />
        {errors.age && <p className="text-danger"> {errors.age.message}</p>}
      </div>

      <button disabled={!isValid} type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  )
}
