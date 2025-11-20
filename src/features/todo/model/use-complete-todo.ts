import { useMutation, useQueryClient } from "@tanstack/react-query"
import { UpdateTodo } from "../../../shared/api/update-todo"

export default function useCompleteTodo() {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: ({ id, completed }: { id: string; completed: boolean }) =>
      UpdateTodo(id, completed),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] })
    },
  })

  const completeTodo = (id: string, e: React.ChangeEvent<HTMLInputElement>) =>
    mutation.mutate({ id: id, completed: e.target.checked })
  return completeTodo
}
