
import React, { useState } from 'react';
import ValentineProposal from './components/ValentineProposal';
import Celebration from './components/Celebration';
import HeartBackground from './components/HeartBackground';

const App: React.FC = () => {
  const [accepted, setAccepted] = useState(false);

  const handleAccept = () => {
    setAccepted(true);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-pink-100 via-rose-50 to-pink-200">
      <HeartBackground />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">
        {!accepted ? (
          <ValentineProposal onAccept={handleAccept} />
        ) : (
          <Celebration />
        )}
      </div>
    </div>
  );
};

export default App;
