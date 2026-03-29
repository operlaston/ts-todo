type TodoStatus = 'completed' | 'in progress' | 'not started';

export interface Todo_t {
  id: number;
  title: string;
  status: TodoStatus;
  dueDate: Date;
}

export default function Todo({ todo }: { todo: Todo_t }) {
  return (
    <div className="border-solid border-1 px-4 py-2 rounded-lg">
      <h2 className="">
        {todo.title}
      </h2>
      <div>
        {todo.status}
      </div>
      <div>
        {todo.dueDate.toString()}
      </div>
    </div>
  )
}

