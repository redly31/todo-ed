import { useQueryClient, useMutation } from "@tanstack/react-query"
import type { Todo } from "../model/Todo"
import { DeleteTodo } from "../api/delete-todo"

export default function DeleteTodoButton(todo: Todo) {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: () => DeleteTodo(todo.id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] })
    },
  })
  return (
    <button
      disabled={mutation.isPending}
      onClick={() => mutation.mutate()}
      className={`px-8 transition-colors ${
        mutation.isPending
          ? "bg-neutral-700 hover:bg-neutral-700 !cursor-progress"
          : "bg-neutral-700 hover:bg-indigo-500"
      }`}
    >
      Delete
    </button>
  )
}
