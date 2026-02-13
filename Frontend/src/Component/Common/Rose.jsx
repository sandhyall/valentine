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
        <iframe
          width="0"
          height="0"
          src="https://www.youtube.com/embed/ZhKxC5pc52k?autoplay=1&loop=1&playlist=ZhKxC5pc52k"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      )}

      <div className="bg-white p-8 rounded-3xl shadow-2xl border-2 border-rose-200 max-w-md w-full relative z-10 transition-all duration-500">
        <img
          src={Roses}
          alt="Beautiful Roses"
          className={`w-40 h-40 mx-auto mb-4 drop-shadow-lg ${showLetters ? "animate-pulse" : ""}`}
        />

        <div className="flex justify-center gap-1 mb-6">
          {"💖"
            .repeat(10)
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
            <h2 className="text-xl font-serif text-rose-600">
              You have a message...
            </h2>
            <button
              onClick={() => setShowLetters(true)}
              className="bg-rose-500 hover:bg-rose-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all active:scale-95 text-lg"
            >
              Read my love letters 💌
            </button>
          </div>
        ) : (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            {letters.map((text, index) => (
              <p
                key={index}
                className="text-gray-700 italic text-lg leading-relaxed border-b border-rose-50 pb-2 last:border-0"
              >
                "{text}"
              </p>
            ))}
            <p className="text-rose-400 font-bold mt-4 animate-pulse">
              Forever Yours ❤️
            </p>
          </div>
        )}
      </div>

      {showLetters && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute text-rose-200 animate-bounce opacity-40"
            //   style={{
            //     left: `${Math.random() * 100}%`,
            //     top: `${Math.random() * 100}%`,
            //     animationDuration: `${2 + Math.random() * 3}s`,
            //   }}
            >
              ❤️
            </div>
          ))}
        </div>
      )}

      <p className="mt-6 text-rose-300 text-xs uppercase tracking-widest">
        {showLetters ? "Music is playing... ♫" : "Tap to open"}
      </p>
    </div>
  );
};

export default Rose;
