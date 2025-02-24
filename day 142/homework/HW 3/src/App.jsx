import React, { useEffect } from "react";

const App = () => {
  useEffect(() => {
    const loadGSAP = async () => {
      const gsapModule = await import("gsap");
      const gsap = gsapModule.default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      
      gsap.registerPlugin(ScrollTrigger);
      
      gsap.from(".hero-content", {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: "power3.out"
      });
      
      gsap.from(".project-card", {
        scrollTrigger: {
          trigger: "#projects",
          start: "top 80%"
        },
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8
      });
      
      gsap.from(".about-content", {
        scrollTrigger: {
          trigger: "#about",
          start: "top 70%"
        },
        opacity: 0,
        x: -50,
        duration: 0.8
      });
      
      gsap.from(".contact-form", {
        scrollTrigger: {
          trigger: "#contact",
          start: "top 80%"
        },
        opacity: 0,
        scale: 0.9,
        duration: 0.8
      });
      
      gsap.utils.toArray(".skill-bar").forEach(bar => {
        const width = bar.getAttribute("data-width");
        gsap.to(bar, {
          scrollTrigger: {
            trigger: "#about",
            start: "top 60%"
          },
          width: width,
          duration: 1.5,
          ease: "power3.out"
        });
      });
    };
    
    loadGSAP();
  }, []);

  return (
    <div className="font-sans text-gray-800">
      <header className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="hero-content text-center">
          <h1 className="text-5xl font-bold mb-4">ჩემი პორტფოლიო</h1>
          <p className="text-xl mb-8">Web Developer & Designer</p>
          <a href="#about" className="bg-white text-blue-600 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition">დამიკავშირდით</a>
        </div>
      </header>

      <section id="about" className="py-20 px-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">ჩემ შესახებ</h2>
        <div className="about-content grid md:grid-cols-2 gap-10">
          <div>
            <p className="mb-6">გამარჯობა! მე ვარ ვებ დეველოპერი რომელსაც უყვარს ლამაზი და ფუნქციონალური ვებსაიტების შექმნა. მე ვმუშაობ React-ით და მიყვარს ანიმაციები.</p>
            <p>როდესაც არ ვაკეთებ კოდინგს, მიყვარს ფოტოგრაფია, მოგზაურობა და ახალი ტექნოლოგიების შესწავლა.</p>
          </div>
          <div>
            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <span>React</span>
                <span>90%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded">
                <div className="skill-bar h-full bg-blue-600 rounded w-0" data-width="90%"></div>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <span>GSAP</span>
                <span>85%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded">
                <div className="skill-bar h-full bg-purple-600 rounded w-0" data-width="85%"></div>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <span>Tailwind CSS</span>
                <span>95%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded">
                <div className="skill-bar h-full bg-green-600 rounded w-0" data-width="95%"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-8 bg-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">ჩემი პროექტები</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="project-card bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-blue-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">ვებ აპლიკაცია</h3>
                <p className="text-gray-600 mb-4">React, Tailwind, GSAP</p>
                <a href="#" className="text-blue-600 font-medium">ნახეთ პროექტი →</a>
              </div>
            </div>
            <div className="project-card bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-purple-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">პორტფოლიო</h3>
                <p className="text-gray-600 mb-4">React, GSAP</p>
                <a href="#" className="text-blue-600 font-medium">ნახეთ პროექტი →</a>
              </div>
            </div>
            <div className="project-card bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-green-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">ელ-კომერცია</h3>
                <p className="text-gray-600 mb-4">React, Tailwind</p>
                <a href="#" className="text-blue-600 font-medium">ნახეთ პროექტი →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">დამიკავშირდით</h2>
        <div className="contact-form max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">სახელი</label>
            <input type="text" className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">ელ-ფოსტა</label>
            <input type="email" className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">შეტყობინება</label>
            <textarea className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"></textarea>
          </div>
          <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition">გაგზავნა</button>
        </div>
      </section>
    </div>
  );
};

export default App;