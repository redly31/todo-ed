type CompleteTodoButtonProps = {
  onChange: React.ChangeEventHandler<HTMLInputElement>
  completed: boolean
}

export default function CompleteTodoButton({
  onChange,
  completed,
}: CompleteTodoButtonProps) {
  return (
    <input
      className="w-4 h-4"
      type="checkbox"
      checked={completed}
      onChange={onChange}
    />
  )
}
