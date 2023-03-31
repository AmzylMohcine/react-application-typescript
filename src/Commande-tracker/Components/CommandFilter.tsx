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
      <option value="Home&Garden">Home&Garden</option>
      <option value="Beauty">Beauty</option>
      <option value="Accesory">Accesory</option>
      <option value="Sport">Sport</option>
    </select>
  )
}
