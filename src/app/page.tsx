"use client"

import AddTodo from "./addtodo";
import Todo, { Todo_t } from "./todo";
import { useState } from "react";
const todos: Todo_t[] = [
  {
    id: 0,
    title: "Learn Typescript",
    status: "completed",
    dueDate: new Date(1e12)
  },
  {
    id: 1,
    title: "Learn Next.js",
    status: "in progress",
    dueDate: new Date(1e12 * 1.2)
  }
]

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <h1>
        Todos
      </h1>
      <div className="flex flex-col gap-y-2">
        {
          todos.map(todo => <Todo key={todo.id} todo={todo} />)
        }
      </div>
      <button className="fixed bottom-10 right-14 text-2xl bg-[#3a3f50] px-4 py-2 rounded-lg
        hover:opacity-80 duration-300 border-solid border-gray-200 border-1" onClick={() => setIsModalOpen(true)}>
        + Make a New Todo
      </button>
      {
        isModalOpen ?
          <AddTodo setIsModalOpen={setIsModalOpen} /> :
          ""
      }
    </div>
  );
}
