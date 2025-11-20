import { useMutation, useQueryClient } from "@tanstack/react-query"
import { CreateTodo } from "../../../shared/api/create-todo"

type useCreateTodoProps = {
  title: string
  setTitle: React.Dispatch<React.SetStateAction<string>>
}

export default function useCreateTodo(props: useCreateTodoProps) {
  const { setTitle, title } = props
  const queryClient = useQueryClient()
  const { mutate, isPending } = useMutation({
    mutationFn: CreateTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] })
      setTitle("")
    },
  })

  const createNewTodo = (e: React.FormEvent) => {
    e.preventDefault()
    if (!title.trim()) return
    mutate(title)
  }

  return { createNewTodo, isPending }
}
