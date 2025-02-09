import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import gsap from 'gsap';
import { Menu, X, Home, EarthLock, ScanEye, CircleDollarSign} from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  useEffect(() => {
    gsap.from('.nav-item', {
      y: -100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power4.out"
    });
    gsap.to('.nav-item', {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.2,
      ease: "power4.out"
    });
  }, []);

  return (
    <header className="fixed w-full z-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center px-4 md:px-8 py-6">
          <h2 className="text-white text-2xl md:text-3xl font-black nav-item text-shadow-lg">ROCKSTAR</h2>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="hidden md:flex gap-8">
            <Link to="/" className="text-white hover:text-blue-500 transition-colors nav-item flex items-center gap-2 font-black text-xl text-shadow-lg">
              <Home size={20} />
              HOME
            </Link>
            <Link to="/privacy-policy" className="text-white hover:text-blue-500 transition-colors nav-item flex items-center gap-2 font-black text-xl text-shadow-lg">
              <EarthLock size={20} />
              PRIVACY POLICY
            </Link>
            <Link to="/payment" className="text-white hover:text-blue-500 transition-colors nav-item flex items-center gap-2 font-black text-xl text-shadow-lg">
              <CircleDollarSign size={20}/>
              PAYMENT
            </Link>
            <Link to="/login" className="text-white hover:text-blue-500 transition-colors nav-item flex items-center gap-2 font-black text-xl text-shadow-lg">
              <ScanEye size={20} />
              LOG IN
            </Link>
          </div>
        </div>

        <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"} px-4 pb-4`}>
          <div className="flex flex-col gap-4">
            <Link to="/" className="text-white hover:text-blue-500 transition-colors flex items-center gap-2 font-black text-xl text-shadow-lg">
              <Home size={20} />
              HOME
            </Link>
            <Link to="/privacy-policy" className="text-white hover:text-blue-500 transition-colors flex items-center gap-2 font-black text-xl text-shadow-lg">
            <EarthLock size={20} />
              PRIVACY POLICY
            </Link>
            <Link to="/payment" className="text-white hover:text-blue-500 transition-colors flex items-center gap-2 font-black text-xl text-shadow-lg">
            <CircleDollarSign size={20}/>
              PAYMENT
            </Link>
            <Link to="/login" className="text-white hover:text-blue-500 transition-colors flex items-center gap-2 font-black text-xl text-shadow-lg">
              <ScanEye size={20} />
              LOG IN
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
