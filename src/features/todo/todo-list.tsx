import { useSuspenseQuery } from "@tanstack/react-query"
import { GetTodos } from "./get-todos"
import TodoItem from "./todo-item"

export default function TodoList() {
  const { data } = useSuspenseQuery({ queryKey: ["todos"], queryFn: GetTodos })
  return (
    <section className="flex flex-col gap-4 w-2xl">
      <h1 className="text-2xl font-bold">Todo ({data.length})</h1>
      {data.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </section>
  )
}
