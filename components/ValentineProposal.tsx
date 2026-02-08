
import React, { useState, useCallback, useRef } from 'react';

interface ValentineProposalProps {
  onAccept: () => void;
}

const ValentineProposal: React.FC<ValentineProposalProps> = ({ onAccept }) => {
  const [noButtonPos, setNoButtonPos] = useState({ top: 'auto', left: 'auto', position: 'relative' as const });
  const containerRef = useRef<HTMLDivElement>(null);

  const moveButton = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    // Get viewport or container dimensions to keep the button within bounds
    const maxWidth = window.innerWidth - 150;
    const maxHeight = window.innerHeight - 100;

    const newTop = Math.max(50, Math.floor(Math.random() * maxHeight));
    const newLeft = Math.max(50, Math.floor(Math.random() * maxWidth));

    setNoButtonPos({
      top: `${newTop}px`,
      left: `${newLeft}px`,
      position: 'fixed' as const,
    });
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col items-center text-center max-w-lg w-full">
      <h1 className="text-4xl md:text-6xl font-romantic text-rose-600 mb-2 animate-bounce">
        Happy Rose Day! 🌹
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-rose-500 mb-8">
        Will you be my Valentine? ❤️
      </h2>

      <div className="w-full max-w-sm mb-12 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
        <img 
          src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeDVtdzY4a211bmwxZWdjZzdwbnRmYTc0c2pzeG8zaXc3czYxZzZvciZlcD12MV9naWZzX3NlYXJjaCZjdD1n/WftR1xWtMHPG0/giphy.gif" 
          alt="Cute Valentine Cat"
          className="w-full h-auto"
        />
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-center justify-center w-full">
        <button
          onClick={onAccept}
          className="px-10 py-4 bg-rose-500 hover:bg-rose-600 text-white font-bold text-xl rounded-full shadow-lg transform transition active:scale-95 hover:scale-110 z-20"
        >
          Yes! 😍
        </button>

        <button
          style={{ 
            top: noButtonPos.top, 
            left: noButtonPos.left, 
            position: noButtonPos.position,
            transition: 'all 0.2s ease-out'
          }}
          onMouseEnter={moveButton}
          onClick={moveButton}
          className="px-10 py-4 bg-gray-400 text-white font-bold text-xl rounded-full shadow-lg z-20 whitespace-nowrap"
        >
          No 😢
        </button>
      </div>
      
      <p className="mt-12 text-rose-400 font-medium italic animate-pulse">
        Choose wisely, my love...
      </p>
    </div>
  );
};

export default ValentineProposal;
