import { productsCategory } from "./ProductList"
interface Props {
  onSelectCatagory: (category: string) => void
}
export const CommandFilter = ({ onSelectCatagory }: Props) => {
  return (
    <select
      className="form-select"
      onChange={event => {
        onSelectCatagory(event.target.value)
      }}
    >
      <option value=""> All Categories</option>
      {productsCategory.map(productCategory => (
        <option key={productCategory}> {productCategory} </option>
      ))}
    </select>
  )
}
