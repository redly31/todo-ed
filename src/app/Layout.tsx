import { Suspense } from "react"
import Loader from "../shared/ui/loader"
import { NewTodoForm, TodoList } from "../features/todo"

export default function Layout() {
  return (
    <main>
      <NewTodoForm />
      <Suspense fallback={<Loader />}>
        <TodoList />
      </Suspense>
    </main>
  )
}
