import TodoItem from "./todo-item"
import CompleteTodoButton from "./complete-todo-button"
import DeleteTodoButton from "./delete-todo-button"
import { useGetTodos } from "../model/use-get-todos"
import useDeleteTodo from "../model/use-delete-todo"
import useCompleteTodo from "../model/use-complete-todo"

export function TodoList() {
  const data = useGetTodos()
  const { deleteTodo, isPending, variables: deletingId } = useDeleteTodo()
  const completeTodo = useCompleteTodo()

  return (
    <section className="flex flex-col gap-4 w-2xl mt-8">
      <h2 className="text-2xl font-bold">Todo ({data.length})</h2>
      {data.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          completeButton={
            <CompleteTodoButton
              completed={todo.completed}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                completeTodo(todo.id, e)
              }
            />
          }
          deleteButton={
            <DeleteTodoButton
              onClick={() => deleteTodo(todo.id)}
              isPending={isPending && deletingId === todo.id}
            />
          }
        />
      ))}
    </section>
  )
}
