import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:9000",
});

export const hungryLostApi = async (petId: string) => {
  const response = await api.post(`/time/hungry/${petId}`)
  return response.data
}
export const happinessLostApi = async (petId: string) => {
  const response = await api.post(`/time/happiness/${petId}`)
  console.log(response.data)
  return response.data
}
export const healthLostApi = async (petId: string) => {
  const response = await api.post(`/time/health/${petId}`)
  return response.data
}
