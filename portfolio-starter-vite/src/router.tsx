import { createBrowserRouter, Navigate } from "react-router-dom"

import { RootLayout } from "@/layouts/root-layout"
import { HomePage } from "@/pages/home"
import { ComponentsPage } from "@/pages/components"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "components", element: <ComponentsPage /> },
    ],
  },
  { path: "*", element: <Navigate to="/" replace /> },
])
