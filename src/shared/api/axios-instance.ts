import axios, { type AxiosRequestConfig } from "axios"

export function CustomInstance<T>(config: AxiosRequestConfig) {
  const instance = axios.create({
    baseURL: "http://localhost:3000",
    headers: {
      "Content-Type": "application/json",
    },
  })
  return instance.request<T>(config).then((response) => response.data)
}
