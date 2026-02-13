import React, { useState } from "react";
import cat from "../../assets/image3.png";
import Rose from "./Rose";

const Valentine = () => {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);

  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "Really sure??",
      "Plese rethink! 🥺",
      "Don't do this to me",
      "I'm gonna cry...",
      "You're breaking my heart ;(",
    ];
    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  if (yesPressed) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-pink-100 p-4">
        <img
          src="https://media.tenor.com/gU_Pb_7p_5AAAAAM/kermit-love.gif"
          alt="Success"
          className="rounded-lg shadow-2xl mb-6"
        />
        <Rose/>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-pink-50 p-6 text-center">
      <div className="bg-white p-10 rounded-3xl shadow-2xl border-4 border-pink-200 max-w-sm">
        <img
          src={cat}
          alt="cute cat"
          className="w-48 h-48 mx-auto mb-6 transition-transform hover:scale-110"
        />

        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Will you be my valentine? 💖
        </h1>
        <p className="text-pink-500 font-medium mb-8">
          Please say yes, My Love!
        </p>

        <div className="flex flex-col items-center gap-4">
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-bold rounded-full transition-all shadow-lg"
            style={{ fontSize: `${yesButtonSize}px`, padding: "10px 24px" }}
            onClick={() => setYesPressed(true)}
          >
            Yes 💖
          </button>

          <button
            onClick={handleNoClick}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-full transition-all text-sm shadow-md"
          >
            {getNoButtonText()}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Valentine;
