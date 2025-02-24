import React, { useEffect, useRef } from 'react';
import gsap from "gsap";

function App() {
  const boxRef = useRef(null);
  const textRef = useRef(null);
  const tl = gsap.timeline({ repeat: 0 });

  useEffect(() => {
    // ! scene 1
    tl.to(boxRef.current, {
      duration: 1,
      x: "50vw",
      xPercent: -50,
      backgroundColor: "#ff6b6b",
      borderRadius: "20px",
      ease: "power4.inOut"
    });
    
    // ! scene 2 
    tl.to(boxRef.current, {
      y: "50vh",
      yPercent: -50,
      rotate: 720,
      backgroundColor: "#1dd1a1",
      scale: 1.2,
      duration: 1.2
    });
    
    // ! scene 3 
    tl.to(boxRef.current, {
      width: "100vw",
      height: "100vh",
      backgroundColor: "#feca57",
      borderRadius: "0px",
      duration: 0.5
    });
    
    // ! scene 4
    tl.to(textRef.current, {
      delay: 0.5,
      opacity: 1,
      color: "#222f3e",
      y: 0,
      scale: 1.3,
      duration: 2,
      ease: "elastic.out(1, 0.5)"
    });
  }, []);

  return (
    <div className=''>
      <div ref={boxRef} className='size-50 absolute top-0 left-0 shadow-xl'></div>
      <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center'>
        <h1 ref={textRef} className='opacity-0 text-lg text-center translate-y-[50%] font-bold transition-all'>GROUP 6</h1>
      </div>
    </div>
  );
}

export default App;
