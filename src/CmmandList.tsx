import React, { useEffect, useState } from "react"

export const CmmandList = ({ command }: { command: string }) => {
  const [cmdt, setCmdt] = useState<string[]>([])

  //AfterRendering
  useEffect(() => {
    console.log("Fetching" + { command })
    setCmdt(["Home", "Accesory"])
  }, [command])
  return <div>{command}</div>
}
