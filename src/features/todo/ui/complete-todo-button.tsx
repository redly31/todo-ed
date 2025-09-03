import { useMutation, useQueryClient } from "@tanstack/react-query"
import type { Todo } from "../model/Todo"
import { UpdateTodo } from "../api/update-todo"

export default function CompleteTodoButton(todo: Todo) {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: (completed: boolean) => UpdateTodo(todo.id, completed),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] })
    },
  })
  return (
    <input
      className="w-4 h-4"
      type="checkbox"
      checked={todo.completed}
      onChange={(e) => mutation.mutate(e.target.checked)}
    />
  )
}
