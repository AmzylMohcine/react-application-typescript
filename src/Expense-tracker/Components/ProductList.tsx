import React, { useEffect, useState } from "react"

export const ProductList = ({ category }: { category: string }) => {
  const [pro, setPro] = useState<string[]>([])

  useEffect(() => {
    console.log("Fetching products in ", category)
    setPro(["GradiantD", "Nosense"])
  }, [category])
  return <div>{category}</div>
}
