function TodoCard({ title, contents, id, toggleComplete, toggleDelete }) {
  return (
    <div className="bg-white border rounded-lg p-6 mt-6 grid gap-4 shadow-sm w-[290px] h-44">
      <strong className="text-2xl text-[#020817] text-left">{title}</strong>
      <p className="text-sm text-[#64748b] text-left">{contents}</p>
      <div className="flex gap-16">
        <button
          type="button"
          onClick={() => toggleDelete(id)}
          className="text-sm rounded-lg py-2 px-4 bg-[#ef4444] hover:bg-[#e04343] text-white justify-start items-start"
        >
          삭제하기
        </button>
        <button
          type="button"
          onClick={() => toggleComplete(id)}
          className="text-sm rounded-lg py-2 px-4 bg-black text-white hover:bg-[#2f2f30]"
        >
          완료하기
        </button>
      </div>
    </div>
  )
}

export default TodoCard
