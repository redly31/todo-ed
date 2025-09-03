import type { ReactNode } from "react"
import type { Todo } from "../model/Todo"

type TodoItemProps = {
  todo: Todo
  completeButton: ReactNode
  deleteButton: ReactNode
}

export default function TodoItem(props: TodoItemProps) {
  const { todo, completeButton, deleteButton } = props
  return (
    <article className="flex justify-between">
      <div className="border-neutral-700 p-4 border-2 flex gap-2 items-center w-full">
        {completeButton}
        <p className={todo.completed ? `line-through text-neutral-400` : ""}>
          {todo.title}
        </p>
      </div>
      {deleteButton}
    </article>
  )
}
