import { nanoid } from "nanoid"
import { CustomInstance } from "./axios-instance"
import type { Todo } from "../model/Todo"

export async function CreateTodo(title: string) {
  return CustomInstance<Todo>({
    url: "/todos",
    method: "POST",
    data: { title, completed: false, userId: 1, id: nanoid() },
  })
}
