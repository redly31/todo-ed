import { useState } from "react"
import useCreateTodo from "../model/use-create-todo"

export function NewTodoForm() {
  const [title, setTitle] = useState("")
  const { createNewTodo, isPending } = useCreateTodo({ title, setTitle })

  return (
    <form onSubmit={createNewTodo} className="flex gap-2 flex-col items-start">
      <h2 className="text-2xl font-bold">Create New Todo</h2>
      <div className="flex w-full">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="New todo"
          className="border-2 w-full border-neutral-700 p-4 focus:border-indigo-500 outline-none"
        />
        <button
          disabled={isPending}
          type="submit"
          className={`px-8 text-white transition-colors ${
            isPending
              ? "bg-neutral-700 hover:bg-neutral-700 !cursor-progress"
              : "bg-neutral-700 hover:bg-indigo-500"
          }`}
        >
          Add
        </button>
      </div>
    </form>
  )
}
