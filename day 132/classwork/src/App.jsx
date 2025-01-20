import { useEffect } from 'react';
import gsap from 'gsap';

export default function App() {
  useEffect(() => {
    gsap.fromTo(
      '#box-1',
      { x: 0, y: 0, duration: 1 },
      { x: 300, y: 300, duration: 1, delay: 1 }
    );
    gsap.fromTo(
      '#box-1',
      { x: 300, y: 300, duration: 1 },
      { x: 0, y: 0, duration: 1, delay: 3 }
    );
  }, []);

  return (
    <div>
      <div id="box-1" className="h-56 w-56 bg-black"></div>
    </div>
  );
}
