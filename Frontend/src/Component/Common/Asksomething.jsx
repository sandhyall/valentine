import React, { useState } from "react";
import emoji from "../../assets/image.png";
import Valentine from "./Valentine";

const Asksomething = () => {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);

  const getNoButtonText = () => {
    const phrases = [
      "No 💖",
      "Are you sure?",
      "Really sure??",
      "Think again!",
      "Last chance!",
      "Surely not?",
      "You might regret this!",
      "Give it another thought!",
      "Are you absolutely sure?",
      "This could be a mistake!",
      "Have a heart!",
      "Don't be so cold!",
      "Change of heart?",
      "Wouldn't you reconsider?",
      "Is that your final answer?",
      "You're breaking my heart ;(",
    ];
    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  const yesButtonSize = noCount * 20 + 16;

  if (yesPressed) {
    return (
      <div className="bg-red-400 h-screen flex flex-col items-center justify-center text-white p-4">
        <img
          src="https://media.tenor.com/gU_Pb_7p_5AAAAAM/kermit-love.gif"
          alt="Success"
          className="rounded-lg mb-4"

        />
        <Valentine/>
      </div>
    );
  }

  return (
    <div className="bg-red-100 h-screen flex items-center justify-center p-4">
      <div className="flex flex-col items-center gap-6 p-8 bg-white rounded-2xl shadow-2xl text-center max-w-sm w-full">
        <img src={emoji} alt="emoji" className="w-32 h-32 animate-bounce" />

        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-red-500">Hey Cutepie 💖</h2>
          <p className="text-lg text-gray-600 italic">
            I have a very important question...
          </p>
          <p className="text-xl font-semibold text-gray-800">can I?</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
          <button
            className="bg-green-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-green-600 transition-all shadow-lg"
            style={{ fontSize: `${yesButtonSize}px` }}
            onClick={() => setYesPressed(true)}
          >
            Yes 💖
          </button>

          <button
            onClick={() => setNoCount(noCount + 1)}
            className="bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-600 transition shadow-md"
          >
            {getNoButtonText()}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Asksomething;
