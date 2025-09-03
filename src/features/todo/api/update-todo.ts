import { CustomInstance } from "../../../shared/api/axios-instance"
import type { Todo } from "../model/Todo"

export async function UpdateTodo(id: string, completed: boolean) {
  return CustomInstance<Todo>({
    url: `/todos/${id}`,
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    data: { completed },
  })
}
