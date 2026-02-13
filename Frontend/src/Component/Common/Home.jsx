import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-pink-400 to-red-400 overflow-hidden relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="animate-bounce absolute top-20 left-1/4 text-red-100 text-4xl">
          ❤️
        </div>
        <div className="animate-pulse absolute bottom-20 right-1/4 text-pink-200 text-6xl opacity-50">
          💖
        </div>
        <div
          className="animate-bounce absolute top-1/3 right-10 text-white text-2xl"
          style={{ animationDelay: "1s" }}
        >
          ✨
        </div>
      </div>

      <p
        className="text-white text-3xl font-serif mb-8 drop-shadow-md italic"
        style={{ fontFamily: "cursive" }}
      >
        💖 For my cutepie 💖
      </p>

      <div
        onClick={() => navigate("/love")}
        className="group relative w-80 h-52 bg-rose-400 rounded-lg shadow-2xl cursor-pointer flex items-center justify-center"
        style={{ perspective: "1000px" }}
      >
        <div
          className="absolute top-0 left-0 w-full h-1/2 bg-rose-600 rounded-t-lg transition-transform duration-700 origin-top group-hover:-rotate-x-180"
          style={{
            clipPath: "polygon(100% 0, 0% 0, 50% 100%)",
            transformStyle: "preserve-3d",
          }}
        ></div>

        <div className="text-center z-10">
          <span className="text-5xl block transform group-hover:scale-125 transition-transform duration-300">
            💌
          </span>
          <p className="mt-2 text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity">
            Open Me
          </p>
        </div>

        <p className="absolute -bottom-10 text-white text-sm italic tracking-widest">
          ✨ TAP TO OPEN YOUR SURPRISE ✨
        </p>
      </div>
    </div>
  );
};

export default Home;
