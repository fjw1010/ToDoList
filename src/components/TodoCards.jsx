import TodoCard from "./TodoCard"

function TodoCards({ todos, title, toggleComplete, toggleDelete }) {
  return (
    <ul>
      <li>
        <strong>{title}</strong>
        {todos.map((todo) => {
          return (
            <TodoCard
              key={todo.id}
              id={todo.id}
              title={todo.title}
              contents={todo.contents}
              toggleComplete={toggleComplete}
              toggleDelete={toggleDelete}
            />
          )
        })}
      </li>
    </ul>
  )
}

export default TodoCards
