import { RouterProvider } from "react-router-dom"

import { Providers } from "@/lib/providers"
import { router } from "@/router"

export function App() {
  return (
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  )
}
