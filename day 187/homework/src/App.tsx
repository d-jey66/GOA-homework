import { useEffect, useRef } from "react";

export default function AnimatedWebsite() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Create a simple animation library using Web Animations API
    const animateElement = (element: HTMLElement, options: {
      from?: { opacity?: number; y?: number };
      to?: { opacity?: number; y?: number };
      duration?: number;
      delay?: number;
      repeat?: boolean;
      yoyo?: boolean;
    }) => {
      const {
        from = {},
        to = {},
        duration = 1000,
        delay = 0,
        repeat = false,
        yoyo = false
      } = options;

      // Set initial state
      if (from.opacity !== undefined) {
        element.style.opacity = from.opacity.toString();
      }
      if (from.y !== undefined) {
        element.style.transform = `translateY(${from.y}px)`;
      }

      setTimeout(() => {
        const keyframes = [];
        
        // Starting keyframe
        keyframes.push({
          opacity: from.opacity !== undefined ? from.opacity : parseFloat(getComputedStyle(element).opacity),
          transform: from.y !== undefined ? `translateY(${from.y}px)` : element.style.transform || 'translateY(0px)'
        });

        // Ending keyframe
        keyframes.push({
          opacity: to.opacity !== undefined ? to.opacity : 1,
          transform: to.y !== undefined ? `translateY(${to.y}px)` : 'translateY(0px)'
        });

        const animationOptions: KeyframeAnimationOptions = {
          duration,
          fill: 'forwards',
          easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        };

        if (repeat) {
          animationOptions.iterations = Infinity;
          if (yoyo) {
            animationOptions.direction = 'alternate';
          }
        }

        element.animate(keyframes, animationOptions);
      }, delay);
    };

    // Animate title
    if (titleRef.current) {
      animateElement(titleRef.current, {
        from: { opacity: 0, y: -50 },
        to: { opacity: 1, y: 0 },
        duration: 1000
      });
    }

    // Animate cards
    cardsRef.current.forEach((card, i) => {
      if (card) {
        // Initial fade in animation
        animateElement(card, {
          from: { opacity: 0, y: 50 },
          to: { opacity: 1, y: 0 },
          duration: 800,
          delay: i * 300
        });

        // Floating animation
        setTimeout(() => {
          animateElement(card, {
            from: { y: 0 },
            to: { y: -5 },
            duration: 1500,
            delay: i * 300,
            repeat: true,
            yoyo: true
          });
        }, 1000);
      }
    });
  }, []);

  return (
    <main className="min-h-screen bg-black text-white p-8 flex flex-col items-center gap-10 overflow-hidden">
      <h1
        ref={titleRef}
        className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500"
      >
        Smooth Animations
      </h1>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {["Learn", "Build", "Enjoy"].map((text, i) => (
          <div
            key={i}
            ref={(el) => {
              cardsRef.current[i] = el;
            }}
            className="bg-gradient-to-br from-purple-700 to-pink-600 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            <h2 className="text-2xl font-semibold">{text}</h2>
            <p className="mt-2 text-sm text-gray-200">
              {`Let's ${text.toLowerCase()} with cool animations.`}
            </p>
          </div>
        ))}
      </section>

      <div className="w-full h-32 mt-16 bg-gradient-to-r from-fuchsia-500 to-blue-500 animate-pulse rounded-xl" />
    </main>
  );
}