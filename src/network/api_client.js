import { baseUrl } from '@/config/app_const'
import axios from 'axios'

const apiClient = axios.create({
  baseURL: baseUrl,
  setTimeout: 10000,
})

apiClient.interceptors.request.use((config) => {
  console.log('Request: ', config.url)
  return config
})

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('Error:', error)
    return Promise.reject(error)
  },
)

export default apiClient
