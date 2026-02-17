import axios from "axios"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Cache for API requests to prevent duplicate calls
const requestCache = new Map<string, Promise<any>>()

export async function apiRequest(path: string): Promise<any> {
  try {
    const userid = import.meta.env.VITE_USER_ID
    const api =
      import.meta.env.VITE_BACKEND_API_URL ||
      "https://aetrix-backend-git-master-ashintvs-projects.vercel.app/"
    if (!userid || !api) {
      console.error("Please provide VITE_USER_ID, VITE_BACKEND_API_URL in .env")
      return { user: [] }
    }
    const fullPath = `${api}/${path}/${userid}`

    // Return cached request if it exists to prevent duplicate calls
    if (requestCache.has(fullPath)) {
      return requestCache.get(fullPath)!
    }

    // Create and cache the request promise with increased timeout
    const requestPromise = axios
      .get(fullPath, { timeout: 30000 })
      .then((res) => res.data)
    requestCache.set(fullPath, requestPromise)

    return await requestPromise
  } catch (e) {
    console.error("API Request failed:", e)
    return { user: [] }
  }
}