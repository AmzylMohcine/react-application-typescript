interface Product {
  id: number
  name: string
  category: string
  description: string
  amount: number
}

interface Props {
  products: Product[]
  onDelete: (id: number) => void
}
export const CommandList = ({ products, onDelete }: Props) => {
  if (products.length === 0) return <p> no products to show.</p>
  return (
    <table className="table table-border">
      <thead>
        <tr>
          <th> Name </th>
          <th> Category</th>
          <th> Description</th>
          <th> Amount</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => (
          <tr key={product.id}>
            {" "}
            <td>{product.name}</td>
            <td> {product.category}</td>
            <td>{product.description}</td>
            <td> {product.amount}</td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => {
                  onDelete(product.id)
                }}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td>$ {products.reduce((acc, product) => product.amount + acc, 0).toFixed(2)}</td>
          <td></td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  )
}
