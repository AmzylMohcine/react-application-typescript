import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { productsCategory } from "./ProductList"

interface Props {
  onSubmit: (data: CommandFormData) => void
}
const schema = z.object({
  name: z.string().min(3, { message: "Mininum 5 Caracteres." }).max(50, { message: "Maximum 50 caracteres" }),
  category: z.enum(productsCategory),
  description: z.string().min(10, { message: "Minimum 10 Caracteres." }).max(200),
  amount: z.number({ invalid_type_error: " Le nombre est NAN" })
})

type CommandFormData = z.infer<typeof schema>

export const CommandeForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid }
  } = useForm<CommandFormData>({ resolver: zodResolver(schema) })
  return (
    <form
      action=""
      onSubmit={handleSubmit(data => {
        onSubmit(data)
        reset()
      })}
    >
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Nom du produit
        </label>
        <input {...register("name")} id="name" type="text" className="form-control" />
        {errors.name && <p className="text text-danger"> {errors.name.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Catégorie du produit
        </label>
        <select {...register("category")} id="category" className="form-select">
          <option value=""> </option>
          {productsCategory.map(productcategory => (
            <option key={productcategory} value={productcategory}>
              {productcategory}{" "}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Déscription du produit
        </label>
        <input {...register("description")} id="description" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Nombre du produit
        </label>
        <input {...register("amount", { valueAsNumber: true })} id="amount" type="number" className="form-control" />
      </div>

      <button className="btn btn-primary "> Submit </button>
    </form>
  )
}
