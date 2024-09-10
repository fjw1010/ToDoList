import { useState } from "react";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";

function App() {
  const [todos, setTodos] = useState([]);

  // 완료
  const toggleComplete = (id) => {
    setTodos((prev) => {
      prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isDone: !todo.isDone };
        }
        return todo;
      });
    });
  };

  // 삭제
  const toggleDelet = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };
  return (
    <>
      <div>
        <Header />
        <main>
          <TodoForm setTodos={setTodos} />

          <section>
            <article>
              <h2>🔥Working🔥</h2>
              {todos
                .filter((todo) => todo.isDone === false)
                .map((todo) => {
                  return (
                    <div key={todo.id}>
                      <h3>{todo.title}</h3>
                      <p>{todo.contents}</p>
                      <button onClick={() => toggleComplete(todo.id)}>
                        완료
                      </button>
                      <button onClick={() => toggleDelet(todo.id)}>삭제</button>
                    </div>
                  );
                })}
            </article>
            <article>
              <h2>✅Done✅</h2>
              {todos
                .filter((todo) => todo.isDone === true)
                .map((todo) => {
                  return (
                    <div key={todo.id}>
                      <h3>{todo.title}</h3>
                      <p>{todo.contents}</p>
                      <button onClick={() => toggleComplete(todo.id)}>
                        완료
                      </button>
                      <button onClick={() => toggleDelet(todo.id)}>삭제</button>
                    </div>
                  );
                })}
            </article>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
