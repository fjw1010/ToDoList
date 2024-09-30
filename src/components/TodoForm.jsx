import { useState } from "react"

function TodoForm({ setTodos }) {
  const [title, setTitle] = useState("")
  const [contents, setContents] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    const newTodo = {
      id: crypto.randomUUID(),
      title: title,
      contents: contents,
      isDone: false,
    }
    setTodos((prev) => [...prev, newTodo])

    // Todo를 등록 할 때마다 제목과 내용 input이 초기화 되게
    setTitle("")
    setContents("")
  }
  return (
    <form onSubmit={handleSubmit} className="mt-8 mb-6">
      <div className="flex gap-6 items-center justify-center w-full">
        <p className="flex flex-col">
          <label htmlFor="ToDoTitle" className="text-sm">
            제목
          </label>
          <input
            id="ToDoTitle"
            type="text"
            value={title}
            className="border py-2 px-3 rounded-lg focus:outline-none w-[474px] h-full"
            onChange={(e) => setTitle(e.target.value)}
          />
        </p>
        <p className="flex flex-col">
          <label htmlFor="ToDoContents" className="text-sm">
            내용
          </label>
          <input
            id="ToDoContents"
            type="text"
            value={contents}
            className="border py-2 px-3 rounded-lg focus:outline-none w-[474px] h-full"
            onChange={(e) => setContents(e.target.value)}
          />
        </p>
        <button
          type="submit"
          className="transition ease-in-out rounded-md bg-black hover:bg-[#2f2f30] text-white text-base py-2 px-4"
        >
          작성하기
        </button>
      </div>
    </form>
  )
}

export default TodoForm
