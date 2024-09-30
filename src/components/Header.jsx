function Header() {
  return (
    <header className="flex px-6 py-4 border-b">
      <nav className="flex justify-between w-full items-center">
        <strong className="text-xl">🍀TODO</strong>
        <div className="flex gap-5 items-center">
          <a
            href="https://github.com/fjw1010"
            className="transition ease-in-out border rounded-md py-2 px-4 bg-white w-full hover:bg-gray-100 text-[##020817] text-sm cursor-pointer content-center"
          >
            @fjw1010
          </a>
          <img
            src="images/profile/githubImage.jpg"
            alt="github profile"
            className="w-10 h-10 rounded-full justify-end items-end"
          />
        </div>
      </nav>
    </header>
  )
}

export default Header
