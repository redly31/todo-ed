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
      className={`px-8 transition-colors ${
        isPending
          ? "bg-neutral-700 hover:bg-neutral-700 !cursor-progress"
          : "bg-neutral-700 hover:bg-indigo-500"
      }`}
    >
      {isPending ? "Deleting..." : "Delete"}
    </button>
  )
}
