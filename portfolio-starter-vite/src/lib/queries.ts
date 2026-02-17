'use client'

import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const API_BASE_URL =
  import.meta.env.VITE_BACKEND_API_URL ||
  "https://aetrix-backend-git-master-ashintvs-projects.vercel.app/"
const USER_ID = import.meta.env.VITE_USER_ID || ""

//

// Create axios instance with timeout
const apiClient = axios.create({
  timeout: 30000,
})

// Fetch profile data
async function fetchProfile() {
  if (!USER_ID) {
    throw new Error('USER_ID environment variable is not set')
  }

  const response = await apiClient.get(`${API_BASE_URL}/profile/${USER_ID}`)
  return response.data
}

// Fetch achievements data
async function fetchAchievements() {
  if (!USER_ID) {
    throw new Error('USER_ID environment variable is not set')
  }

  const response = await apiClient.get(`${API_BASE_URL}/achievments/${USER_ID}`)
  return response.data
}

// Fetch projects data
async function fetchProjects() {
  if (!USER_ID) {
    throw new Error('USER_ID environment variable is not set')
  }

  const response = await apiClient.get(`${API_BASE_URL}/project/${USER_ID}`)
  return response.data
}

// Fetch skills data
async function fetchSkills() {
  if (!USER_ID) {
    throw new Error('USER_ID environment variable is not set')
  }

  const response = await apiClient.get(`${API_BASE_URL}/skills/${USER_ID}`)
  return response.data
}

// Custom hooks
export function useProfile() {
  return useQuery({
    queryKey: ['profile'],
    queryFn: fetchProfile,
  })
}

export function useAchievements() {
  return useQuery({
    queryKey: ['achievements'],
    queryFn: fetchAchievements,
  })
}

export function useProjects() {
  return useQuery({
    queryKey: ['projects'],
    queryFn: fetchProjects,
  })
}

export function useSkills() {
  return useQuery({
    queryKey: ['skills'],
    queryFn: fetchSkills,
  })
}
