import { CustomInstance } from "./axios-instance"
import type { Todo } from "../model/Todo"

export async function DeleteTodo(id: string) {
  return CustomInstance<Todo>({
    url: `/todos/${id}`,
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  })
}
