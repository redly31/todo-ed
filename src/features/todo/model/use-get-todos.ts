import { useSuspenseQuery } from "@tanstack/react-query"
import { GetTodos } from "../../../shared/api/get-todos"

export const useGetTodos = () => {
  const { data } = useSuspenseQuery({ queryKey: ["todos"], queryFn: GetTodos })
  return data
}
