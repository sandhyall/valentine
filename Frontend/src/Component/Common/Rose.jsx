import React, { useState } from "react";
import Roses from "../../assets/Rose.png";

const Rose = () => {
  const [showLetters, setShowLetters] = useState(false);

  const letters = [
    "You're the person I look for in every room. ❤️",
    "Every day with you feels like a dream I never want to wake up from.",
    "Thank you for being my favorite person and my best friend.",
    "I love you more than words can ever describe. Happy Valentine's! 🌹",
  ];

  return (
    <div className="min-h-screen bg-rose-50 flex flex-col items-center justify-center p-6 text-center overflow-hidden relative">
      
    
      {showLetters && (
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10"></div> 
          <iframe
            className="w-full h-full object-cover scale-150" 
            src="https://www.youtube.com/embed/ZhKxC5pc52k?autoplay=1&mute=0&loop=1&playlist=ZhKxC5pc52k&controls=0&showinfo=0&modestbranding=1"
            title="Romantic Background"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
      )}

    
      <div className={`bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border-2 border-rose-200 max-w-md w-full relative z-20 transition-all duration-700 ${showLetters ? "scale-105" : ""}`}>
        <img
          src={Roses}
          alt="Beautiful Roses"
          className={`w-40 h-40 mx-auto mb-4 drop-shadow-lg transition-transform duration-500 ${showLetters ? "scale-110 animate-pulse" : ""}`}
        />

        <div className="flex justify-center gap-1 mb-6">
          {"💖"
            .repeat(7)
            .split("")
            .map((heart, i) => (
              <span
                key={i}
                className="animate-bounce"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {heart}
              </span>
            ))}
        </div>

        {!showLetters ? (
          <div className="space-y-4">
            <h2 className="text-2xl font-serif text-rose-600 font-bold">
              You have a special message...
            </h2>
            <button
              onClick={() => setShowLetters(true)}
              className="bg-rose-500 hover:bg-rose-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all transform hover:scale-110 active:scale-95 text-lg"
            >
              Open with Love 💌
            </button>
          </div>
        ) : (
          <div className="space-y-4 animate-in fade-in zoom-in duration-1000">
            {letters.map((text, index) => (
              <p
                key={index}
                className="text-gray-800 font-medium italic text-lg leading-relaxed border-b border-rose-100 pb-2 last:border-0"
              >
                "{text}"
              </p>
            ))}
            <div className="pt-4">
               <p className="text-rose-600 font-bold text-xl animate-pulse">
                Forever Yours ❤️
              </p>
            </div>
          </div>
        )}
      </div>

      {/* --- Floating Hearts --- */}
      {showLetters && (
        <div className="absolute inset-0 pointer-events-none z-30">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute text-rose-400 animate-pulse opacity-60"
            //   style={{
            //     left: `${Math.random() * 100}%`,
            //     top: `${Math.random() * 100}%`,
            //     fontSize: `${Math.random() * 20 + 10}px`,
            //     animationDuration: `${2 + Math.random() * 3}s`,
            //   }}
            >
              ❤️
            </div>
          ))}
        </div>
      )}

      <p className={`mt-6 text-xs uppercase tracking-widest z-20 ${showLetters ? "text-white" : "text-rose-300"}`}>
        {showLetters ? "Turn up the volume... ♫" : "Click the button to reveal"}
      </p>
    </div>
  );
};

export default Rose;