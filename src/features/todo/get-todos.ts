import { CustomInstance } from "../../shared/api/axios-instance"
import type { Todo } from "./Todo"

export async function GetTodos() {
  return CustomInstance<Todo[]>({
    url: `/todos?_limit=10`,
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
}
