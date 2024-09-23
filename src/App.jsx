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
      <div className="bg-[rgba(241,_245,_249,_0.4)] min-h-screen flex flex-col items-center">
        <Header />
        <main>
          <TodoForm setTodos={setTodos} />
          <TodoCards
            title={<strong className="text-2xl">Working...🔥</strong>}
            todos={todos.filter((todo) => !todo.isDone)}
            toggleComplete={toggleComplete}
            toggleDelete={toggleDelete}
          />
          <TodoCards
            title={<strong className="text-2xl">Done...🌟</strong>}
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
