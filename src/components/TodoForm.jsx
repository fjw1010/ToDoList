import { useState } from "react"

function TodoForm({ setTodos }) {
  const [title, setTitle] = useState("")
  const [contents, setContents] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
    // input에 아무런 값이 없을 경우에 등록 버튼을 눌렀을 때,
    // 아무런 이벤트도 발생하지 않도록

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
    <form onSubmit={handleSubmit} className="flex gap-4">
      <p className="flex flex-col gap-2">
        <label htmlFor="ToDoTitle" className="text-sm">
          제목
        </label>
        <input
          id="ToDoTitle"
          type="text"
          value={title}
          className="border p-2 rounded-lg focus:outline-none"
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
          className="border p-2 rounded-lg focus:outline-none"
          onChange={(e) => setContents(e.target.value)}
        />
      </p>
      <button
        type="submit"
        className="rounded-xl bg-slate-400 hover:bg-slate-600 text-white text-base p-4"
      >
        등록하기
      </button>
    </form>
  )
}

export default TodoForm
