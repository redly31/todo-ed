import { Suspense } from "react"
import Loader from "../shared/ui/loader"
import { NewTodoForm, TodoList } from "../features/todo"

export default function Layout() {
  return (
    <main>
      <Suspense fallback={<Loader />}>
        <NewTodoForm />
        <TodoList />
      </Suspense>
    </main>
  )
}
