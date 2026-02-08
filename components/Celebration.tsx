
import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';

const Celebration: React.FC = () => {
  useEffect(() => {
    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({ 
        ...defaults, 
        particleCount, 
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ['#ff0000', '#ff69b4', '#ffffff']
      });
      confetti({ 
        ...defaults, 
        particleCount, 
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ['#ff0000', '#ff69b4', '#ffffff']
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center text-center max-w-2xl w-full animate-fade-in">
      <h1 className="text-5xl md:text-7xl font-romantic text-rose-600 mb-4 drop-shadow-lg">
        Yaaaaay! 💖
      </h1>
      <p className="text-2xl md:text-3xl font-semibold text-rose-500 mb-8 italic">
        I knew you'd say Yes!
      </p>

      <div className="w-full max-w-md mb-8 rounded-3xl overflow-hidden shadow-2xl border-8 border-pink-200 bg-white">
        <img 
          src="https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3d2hianhsMTJ5cXh0N2pzbXRrN3Z6bXR5MzVoMzN4YjAwcmo0dWUwdiZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/THOgCkRAlCJEAdLA8B/giphy.gif" 
          alt="Celebrating Cats"
          className="w-full h-auto"
        />
      </div>

      <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-rose-100 mt-4 max-w-lg">
        <p className="text-2xl text-rose-700 leading-relaxed font-bold font-romantic mb-4">
          Dear Kazi Saap,
        </p>
        <p className="text-lg text-rose-600 leading-relaxed font-medium">
          Every day is like Valentine's Day with you, Kazi Saap. I love you from my left kidney, right kindey, and my mutu. ❤️ 
        </p>
        <p className="text-lg text-rose-600 leading-relaxed font-medium mt-4">
          Many manny mannny more days to go. And yasss you signed up for it. 🙂
        </p>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Celebration;
