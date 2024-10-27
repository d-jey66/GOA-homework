function Card() {
  return (
    <div className="flex items-center justify-center h-[100vh]">
      <div className="bg-black w-[500px] h-[350px] rounded-[20px] flex items-center justify-center flex-col">
        <img src="https://media.istockphoto.com/id/1362997089/photo/portrait-of-businessman.jpg?s=612x612&w=0&k=20&c=dz4Js-MCUmNzLKjtndPELk0pKQa2X8DMVmwm6xr1HU0=" alt="" className="w-[120px] rounded-full h-[115px] mb-5" />
        <p className="text-white w-[80%]">A 35-year-old with a casual style—think jeans and tees—he works in tech, loves streaming shows, watching football, and spending weekends outdoors with family. He values independence and a close-knit circle of friends.</p>
      </div>
    </div>
  )
}

export default Card