import Navbar from "../components/Navbar";
import { useLocation, Link } from "react-router-dom";

const Playground = () => {
  const location = useLocation();

  const responseData =
    location.state?.data;

  const status =
    location.state?.status;

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <div className="max-w-6xl mx-auto p-10">
        
        {/* Heading */}
        <h1 className="text-5xl font-bold text-cyan-400 mb-10">
          API Playground
        </h1>

        {/* Backend Response */}
        <div className="bg-slate-900 rounded-3xl p-8 shadow-2xl mb-16">
          <h2 className="text-3xl font-bold mb-6">
            Backend Response
          </h2>

          <div className="mb-4">
            <span className="text-cyan-400 font-bold">
              Status:
            </span>{" "}
            {status}
          </div>

          <pre className="bg-black p-6 rounded-2xl overflow-x-auto text-green-400">
            {responseData
              ? JSON.stringify(
                  responseData,
                  null,
                  2
                )
              : "No response received"}
          </pre>
        </div>

        {/* Navigation Flashcards */}
        <h2 className="text-4xl font-bold text-center mb-10 text-white">
          Test Other Algorithms
        </h2>

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

export default Playground;
