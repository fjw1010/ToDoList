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
              id={todos.id}
              title={todos.title}
              contents={todos.contents}
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
