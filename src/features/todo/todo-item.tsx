import type { Todo } from "./Todo"

export default function TodoItem(todo: Todo) {
  return (
    <article className="flex gap-2 justify-between items-center border-2 border-neutral-700 p-4">
      <div className="flex gap-2 items-center">
        <input className="w-4 h-4" type="checkbox" />
        <p className="">{todo.title}</p>
      </div>
      <button className="px-2 py-1 bg-neutral-700 hover:bg-indigo-500 transition-colors">
        Delete
      </button>
    </article>
  )
}
