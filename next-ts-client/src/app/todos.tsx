import Todo, { Todo_t } from "./todo"

export default async function Todos() {
  const response = await fetch("http://localhost:8000/todos")
  if (!response.ok) {
    return (
      <div>
        error fetching todos
      </div>
    )
  }
  const todos: Todo_t[] = await response.json()
  if (!todos) {
    return (
      <div>
        error fetching todos
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-y-2">
      {
        todos.map(todo => <Todo key={todo.id} todo={todo} />)
      }
    </div>
  )
}
