import { useMutation, useQueryClient } from "@tanstack/react-query"
import { DeleteTodo } from "../../../shared/api/delete-todo"

export default function useDeleteTodo() {
  const queryClient = useQueryClient()
  const { mutate, isPending, variables } = useMutation({
    mutationFn: (id: string) => DeleteTodo(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] })
    },
  })

  const deleteTodo = (id: string) => mutate(id)

  return { deleteTodo, isPending, variables }
}
