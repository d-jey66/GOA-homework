function Header() {

  return (
    <div className="flex flex-row items-center space-x-10 gap-60 shadow h-70 pb-5">
      <img src="./pngegg.png" alt="" className="w-[250px] ml-20 mt-10" />
      <div className="flex flex-row gap-14 text-[25px]">
        <p className="cursor-pointer">Home</p>
        <p className="cursor-pointer">About</p>
        <p className="cursor-pointer">Contact</p>
        <p className="cursor-pointer">Services</p>
        <p className="cursor-pointer">Location</p>
      </div>
      <button className="bg-black text-white w-36 h-14 ">Buy Tickets</button>
    </div>

  )
}

export default Header
