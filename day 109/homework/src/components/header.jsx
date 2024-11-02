function Header() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center px-6 pt-3 shadow-md">
      <img
        src="https://i.pinimg.com/originals/18/a5/6c/18a56c95cc67e9cd3db848bb93f48b7e.png"
        alt="Logo"
        className="w-[80px] md:w-[100px] mb-2 md:mb-0"
      />
      <ul className="flex flex-col md:flex-row gap-6 md:gap-[40px] mt-4 md:mt-0">
        <li className="cursor-pointer text-center md:text-left">Home</li>
        <li className="cursor-pointer text-center md:text-left">About</li>
        <li className="cursor-pointer text-center md:text-left">Contact</li>
      </ul>
      <button className="bg-slate-200 h-10 w-full md:w-20 mt-4 md:mt-0 rounded-[5px]">
        Sign In
      </button>
    </div>
  );
}

export default Header;
