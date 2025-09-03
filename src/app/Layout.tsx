import { Suspense } from "react"
import TodoList from "../features/todo/todo-list"
import Loader from "../shared/ui/loader"

export default function Layout() {
  return (
    <main>
      <Suspense fallback={<Loader />}>
        <TodoList />
      </Suspense>
    </main>
  )
}
