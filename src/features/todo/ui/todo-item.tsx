import type { ReactNode } from "react"
import type { Todo } from "../../../shared/model/Todo"

type TodoItemProps = {
  todo: Todo
  children: ReactNode
}

export default function TodoItem(props: TodoItemProps) {
  const { todo, children } = props
  return (
    <article className="flex gap-2 justify-between border-neutral-700 border-2 items-center">
      <div className="p-4 flex items-center w-full">
        <p className={todo.completed ? `line-through text-neutral-400` : ""}>
          {todo.title}
        </p>
      </div>
      {children}
    </article>
  )
}
