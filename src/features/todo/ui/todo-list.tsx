import TodoItem from "./todo-item"
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
        <TodoItem key={todo.id} todo={todo}>
          <CompleteTodoButton
            completed={todo.completed}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              completeTodo(todo.id, e)
            }
          />

          <DeleteTodoButton
            onClick={() => deleteTodo(todo.id)}
            isPending={isPending && deletingId === todo.id}
          />
        </TodoItem>
      ))}
    </section>
  )
}

type CompleteTodoButtonProps = {
  onChange: React.ChangeEventHandler<HTMLInputElement>
  completed: boolean
}

function CompleteTodoButton({ onChange, completed }: CompleteTodoButtonProps) {
  return (
    <input
      className="transition-colors w-8 h-8"
      type="checkbox"
      checked={completed}
      onChange={onChange}
    />
  )
}

type DeleteTodoButtonProps = {
  onClick: () => void
  isPending: boolean
}

export default function DeleteTodoButton({
  onClick,
  isPending,
}: DeleteTodoButtonProps) {
  return (
    <button
      disabled={isPending}
      onClick={onClick}
      className={`self-stretch flex-shrink-0 px-8 transition-colors ${
        isPending
          ? "bg-neutral-700 hover:bg-neutral-700 !cursor-progress"
          : "bg-neutral-700 hover:bg-indigo-500"
      }`}
    >
      {isPending ? "Deleting..." : "Delete"}
    </button>
  )
}
