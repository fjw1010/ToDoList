import TodoCard from "./TodoCard"

function TodoCards({ todos, title, toggleComplete, toggleDelete }) {
  return (
    <section className="py-10">
      <strong>{title}</strong>
      {todos.length === 0 ? (
        <p className="pt-10 pb-10 text-base text-center">
          할 일이 없어요 ((_ ._)。゜zｚＺ)
        </p>
      ) : (
        <ul className="pt-6">
          {todos.map((todo) => (
            <TodoCard
              key={todo.id}
              id={todo.id}
              title={todo.title}
              contents={todo.contents}
              isDone={todo.isDone}
              toggleComplete={toggleComplete}
              toggleDelete={toggleDelete}
            />
          ))}
        </ul>
      )}
    </section>
  )
}

export default TodoCards
