import { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [todos, setTodos] = useState([
    {
      id: crypto.randomUUID(),
      title: "리액트 공부하기",
      contents: "리액트 기초를 공부해봅시다.",
      isDone: false,
    },
    {
      id: crypto.randomUUID(),
      title,
      contents,
      isDone: true,
    },
  ]);

  // 완료
  const toggleComplete = (id) => {
    const upDateToDo = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isDone: !todo.isDone };
      }
      return todo;
    });
    setTodos(upDateToDo);
  };

  // 삭제
  const toggleDelet = (id) => {
    const removerToDo = todos.filter((todo) => todo.id !== id);
    setTodos(removerToDo);
  };
  return (
    <>
      <div>
        <header>
          <h1>TO DO LIST</h1>
        </header>
        <main>
          <div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const newTodo = {
                  id: crypto.randomUUID(),
                  title: title,
                  contents: contents,
                  isDone: false,
                };
                setTodos([...todos, newTodo]);
              }}
            >
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
          </div>
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
