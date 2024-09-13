import { useState } from "react"
import Header from "./components/Header"
import TodoForm from "./components/TodoForm"
import TodoCards from "./components/TodoCards"

function App() {
  const [todos, setTodos] = useState([])

  // 완료
  const toggleComplete = (id) => {
    setTodos((prev) => {
      return prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isDone: !todo.isDone }
        }
        return todo
      })
    })
  }

  // 삭제
  const toggleDelete = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }
  return (
    <>
      <div className="p-10">
        <Header />
        <main>
          <TodoForm setTodos={setTodos} />
          <TodoCards
            title="🔥Working🔥"
            todos={todos.filter((todo) => !todo.isDone)}
            toggleComplete={toggleComplete}
            toggleDelete={toggleDelete}
          />
          <TodoCards
            title="✅Done✅"
            todos={todos.filter((todo) => !!todo.isDone)}
            toggleComplete={toggleComplete}
            toggleDelete={toggleDelete}
          />
        </main>
      </div>
    </>
  )
}

export default App
