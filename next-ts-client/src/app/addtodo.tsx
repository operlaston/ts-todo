import { useState, ChangeEvent } from "react"

export default function AddTodo({ setIsModalOpen }:
  { setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
  const [formData, setFormData] = useState({
    title: "",
    dueDate: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-black/80 grid place-items-center">
      <form className="bg-background rounded-lg px-7 py-4 flex flex-col gap-y-4" onSubmit={e => e.preventDefault()}>
        <div className="underline">
          <span className="cursor-pointer" onClick={() => setIsModalOpen(false)}>Back</span>
        </div>
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
        <button type="submit" className="bg-[#3a3f50] px-3 py-2 rounded-md">
          Create New Todo
        </button>
      </form>
    </div>
  )
}
