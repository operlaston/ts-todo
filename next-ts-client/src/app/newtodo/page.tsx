"use client"
import { useState, ChangeEvent } from "react";
import { useRouter } from "next/navigation";

export default function AddTodo() {
  const [formData, setFormData] = useState({
    title: "",
    dueDate: "",
  });

  const router = useRouter()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("title is ", formData.title)
    console.log("dueDate is ", formData.dueDate)
    const response = await fetch("http://localhost:8000/todos", {
      method: "POST",
      body: JSON.stringify({
        title: formData.title,
        dueDate: formData.dueDate
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    if (!response.ok) {
      const error = await response.text()
      console.error(error)
    }
    router.push('/')
  }

  return (
    <div className="grid place-items-center">
      <form className="bg-background rounded-lg px-7 py-4 flex flex-col gap-y-4" onSubmit={handleSubmit}>
        <h1>
          Add a New Todo
        </h1>
        <div className="flex flex-col">
          <label htmlFor="title">Title</label>
          <input type="text" placeholder="Name this task" id="title" name="title" value={formData.title}
            onChange={handleChange} className="border-white border-solid border-1 focus:outline-none" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="dueDate">Due Date</label>
          <input type="date" id="dueDate" name="dueDate" value={formData.dueDate} onChange={handleChange}
            className="border-white border-solid border-1 focus:outline-none" />
        </div>
        <button type="submit" className="bg-[#4a4f60] px-3 py-2 rounded-md duration-300 hover:bg-[#5a5f70]">
          Create New Todo
        </button>
      </form>
    </div>
  )
}
