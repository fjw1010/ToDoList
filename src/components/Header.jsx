function Header() {
  return (
    <header className="flex px-6 py-4 border-b">
      <nav className="flex justify-between w-full items-center">
        <strong className="text-xl">TODO</strong>
        <div className="flex gap-5">
          <button className="transition ease-in-out border rounded-md py-2 px-4 bg-white w-full hover:bg-blue-50 text-[##020817] text-sm">
            @fjw1010
          </button>
          <img
            src="images/profile/githubImage.jpg"
            alt="github profile"
            className="w-12 rounded-full justify-end items-end"
          />
        </div>
      </nav>
    </header>
  )
}

export default Header
