import Navbar from "../components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SlidingWindow = () => {
  const navigate = useNavigate();

  const LIMIT = 5;

  const [count, setCount] = useState(0);

  const handleTest = async () => {
    try {
      const res = await axios.get(
        "http://localhost:9000/api/sliding-window"
      );

      console.log(res.data);

      setCount(res.data.requestsUsed);

      // Navigate when limit reached
      if (res.data.requestsUsed >= LIMIT) {
        navigate("/playground", {
          state: {
            data: {
              success: false,
              algorithm:
                "Sliding Window",
              error:
                "Rate Limit Exceeded",
              limit: LIMIT,
              message:
                "Too many requests. Try again later.",
            },
            status: 429,
          },
        });
      }
    } catch (error) {
      navigate("/playground", {
        state: {
          data: error.response.data,
          status:
            error.response.status,
        },
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <div className="max-w-5xl mx-auto p-10">
        <h1 className="text-5xl font-bold text-purple-400 mb-8">
          Sliding Window Algorithm
        </h1>

        <p className="text-lg leading-9 text-slate-300 mb-10">
          Sliding Window dynamically tracks
          requests over time providing
          smoother and more accurate
          traffic control.
        </p>

        {/* Request Counter */}
        <div className="mb-8 bg-slate-900 p-6 rounded-2xl w-fit">
          <h2 className="text-2xl font-bold">
            Requests Used
          </h2>

          <p className="text-5xl text-purple-400 mt-3">
            {count}/{LIMIT}
          </p>
        </div>

        <button
          onClick={handleTest}
          className="bg-purple-500 hover:bg-purple-600 px-8 py-4 rounded-2xl text-xl font-bold transition-all"
        >
          Send Request
        </button>
        <div>
          <div className="bg-slate-900 p-6 rounded-2xl mt-10 mb-8 border border-purple-500">
  <h2 className="text-2xl font-bold text-purple-400 mb-4">
    Developer Console Instructions
  </h2>

  <p className="text-slate-300 text-lg leading-8">
    Open the browser console to view live API requests,
    backend responses, request counters, and sliding
    window tracking objects while testing the
    Sliding Window algorithm.
  </p>

  <div className="mt-6 bg-black p-5 rounded-xl border border-purple-500">
    <p className="text-purple-400 text-lg">
      Windows/Linux:
      <span className="text-white ml-2">
        CTRL + SHIFT + I
      </span>
    </p>

    <p className="text-purple-400 text-lg mt-3">
      Mac:
      <span className="text-white ml-2">
        CMD + OPTION + I
      </span>
    </p>
  </div>
</div>
        </div>
      </div>
    </div>
  );
};

export default SlidingWindow;