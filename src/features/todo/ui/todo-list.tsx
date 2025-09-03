import { useSuspenseQuery } from "@tanstack/react-query"
import TodoItem from "./todo-item"
import CompleteTodoButton from "./complete-todo-button"
import DeleteTodoButton from "./delete-todo-button"
import { GetTodos } from "../api/get-todos"

export function TodoList() {
  const { data } = useSuspenseQuery({ queryKey: ["todos"], queryFn: GetTodos })
  return (
    <section className="flex flex-col gap-4 w-2xl mt-8">
      <h2 className="text-2xl font-bold">Todo ({data.length})</h2>
      {data.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          completeButton={<CompleteTodoButton {...todo} />}
          deleteButton={<DeleteTodoButton {...todo} />}
        />
      ))}
    </section>
  )
}
