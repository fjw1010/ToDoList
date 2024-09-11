function TodoCard({ title, contents, id, toggleComplete, toggleDelete }) {
  return (
    <div>
      <strong>{title}</strong>
      <p>{contents}</p>
      <button type="button" onClick={() => toggleComplete(id)}>
        완료
      </button>
      <button type="button" onClick={() => toggleDelete(id)}>
        삭제
      </button>
    </div>
  )
}

export default TodoCard
