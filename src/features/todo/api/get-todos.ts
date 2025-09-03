import { CustomInstance } from "../../../shared/api/axios-instance"
import type { Todo } from "../model/Todo"

export async function GetTodos() {
  return CustomInstance<Todo[]>({
    url: `/todos`,
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
}
