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
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="ToDoTitle">제목</label>
        <input
          id="ToDoTitle"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </p>
      <p>
        <label htmlFor="ToDoContents">내용</label>
        <input
          id="ToDoContents"
          type="text"
          value={contents}
          onChange={(e) => setContents(e.target.value)}
        />
      </p>
      <button type="submit">등록하기</button>
    </form>
  )
}

export default TodoForm
