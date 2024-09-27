function TodoCard({ title, contents, id, toggleComplete, toggleDelete }) {
  return (
    <section className="bg-white border rounded-lg p-6 shadow-sm w-[290px] h-44 grid">
      <article className="">
        <div>
          <strong className="text-2xl text-[#020817] text-left">{title}</strong>
          <p className="text-sm text-[#64748b] text-left">{contents}</p>
        </div>
        <div className="flex items-start gap-16">
          <button
            type="button"
            onClick={() => toggleDelete(id)}
            className="transition ease-in-out text-sm rounded-lg py-2 px-4 bg-[#ef4444] hover:bg-[#e04343] text-white"
          >
            삭제하기
          </button>
          <button
            type="button"
            onClick={() => toggleComplete(id)}
            className="transition ease-in-out text-sm rounded-lg py-2 px-4 bg-black text-white hover:bg-[#2f2f30]"
          >
            완료하기
          </button>
        </div>
      </article>
    </section>
  )
}

export default TodoCard
