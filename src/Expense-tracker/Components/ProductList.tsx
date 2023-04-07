import React, { useEffect, useState } from "react"

export const ProductList = ({ category }: { category: string }) => {
  const [pro, setPro] = useState<string[]>([])

  useEffect(() => {
    console.log("Fetching products in ", category)
    setPro(["Gradiant", "Nosense"])
  }, [category])
  return <div>ProductList</div>
}
