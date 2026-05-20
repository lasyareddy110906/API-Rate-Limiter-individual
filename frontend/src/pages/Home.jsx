import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <div className="flex flex-col items-center text-center px-6 pt-24 pb-20">
        
        {/* Heading */}
        <h1 className="text-6xl font-bold text-cyan-400 mb-6">
          API Rate Limiter
        </h1>

        {/* Description */}
        <p className="text-xl max-w-4xl text-slate-300 leading-9 mb-20">
          A scalable backend infrastructure project
          implementing Fixed Window, Sliding Window,
          Token Bucket, Leaky Bucket, and Redis
          distributed rate limiting.
        </p>

        {/* Flashcards Section */}
        <div className="flex flex-col items-center w-full">

          {/* Top Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl mb-8">

            {/* Fixed Window */}
            <Link to="/fixed-window">
              <div className="bg-slate-900 border border-cyan-500 p-8 rounded-3xl hover:scale-105 transition-all shadow-xl h-full">
                <h2 className="text-3xl font-bold text-cyan-400 mb-4">
                  Fixed Window
                </h2>

                <p className="text-slate-300 leading-8">
                  Controls requests using fixed
                  time intervals and request
                  counters.
                </p>
              </div>
            </Link>

            {/* Sliding Window */}
            <Link to="/sliding-window">
              <div className="bg-slate-900 border border-purple-500 p-8 rounded-3xl hover:scale-105 transition-all shadow-xl h-full">
                <h2 className="text-3xl font-bold text-purple-400 mb-4">
                  Sliding Window
                </h2>

                <p className="text-slate-300 leading-8">
                  Dynamically tracks requests
                  over rolling time windows.
                </p>
              </div>
            </Link>

            {/* Token Bucket */}
            <Link to="/token-bucket">
              <div className="bg-slate-900 border border-green-500 p-8 rounded-3xl hover:scale-105 transition-all shadow-xl h-full">
                <h2 className="text-3xl font-bold text-green-400 mb-4">
                  Token Bucket
                </h2>

                <p className="text-slate-300 leading-8">
                  Allows burst traffic using
                  refillable request tokens.
                </p>
              </div>
            </Link>
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl justify-center">

            {/* Leaky Bucket */}
            <Link to="/leaky-bucket">
              <div className="bg-slate-900 border border-orange-500 p-8 rounded-3xl hover:scale-105 transition-all shadow-xl h-full">
                <h2 className="text-3xl font-bold text-orange-400 mb-4">
                  Leaky Bucket
                </h2>

                <p className="text-slate-300 leading-8">
                  Smooths traffic by processing
                  requests at a constant rate.
                </p>
              </div>
            </Link>

            {/* Redis Limiter */}
            <Link to="/redis">
              <div className="bg-slate-900 border border-pink-500 p-8 rounded-3xl hover:scale-105 transition-all shadow-xl h-full">
                <h2 className="text-3xl font-bold text-pink-400 mb-4">
                  Redis Limiter
                </h2>

                <p className="text-slate-300 leading-8">
                  Distributed rate limiting
                  using centralized Redis storage.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;