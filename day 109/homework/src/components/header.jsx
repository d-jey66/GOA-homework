function Header() {

    return (
      <div className="flex flex-row justify-between px-[30px] pt-3 shadow-md">
        <img src="https://i.pinimg.com/originals/18/a5/6c/18a56c95cc67e9cd3db848bb93f48b7e.png" alt="" className="w-[100px] mb-2" />
        <ul className="flex flex-row gap-[40px] relative top-[30px]">
            <li className="cursor-pointer">home</li>
            <li className="cursor-pointer">about</li>
            <li className="cursor-pointer">contact</li>
        </ul>
        <button className="bg-slate-200 h-11 w-20 relative top-4 rounded-[5px]">sign-in</button>
      </div>
    )
  }
  
  export default Header
  