import { useQueryClient, useMutation } from "@tanstack/react-query"
import { useState } from "react"
import { CreateTodo } from "../api/create-todo"

export function NewTodoForm() {
  const [title, setTitle] = useState("")
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: CreateTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] })
      setTitle("")
    },
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!title.trim()) return
    mutation.mutate(title)
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 flex-col items-start">
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
          type="submit"
          className="px-8 bg-neutral-700 hover:bg-indigo-500 transition-colors"
        >
          Add
        </button>
      </div>
    </form>
  )
}
