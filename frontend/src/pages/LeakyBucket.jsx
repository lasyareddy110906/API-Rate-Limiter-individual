import Navbar from "../components/Navbar";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LeakyBucket = () => {
  const navigate = useNavigate();

  const LIMIT = 5;

  const [count, setCount] = useState(0);

  const handleTest = async () => {
    try {
      const res = await api.get("/api/leaky-bucket");

      console.log(res.data);

      setCount(res.data.requestsInBucket);

      // Navigate when bucket full
      if (
        res.data.requestsInBucket >= LIMIT
      ) {
        navigate("/playground", {
          state: {
            data: {
              success: false,
              algorithm:
                "Leaky Bucket",
              error:
                "Bucket Overflow",
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
          data: error.response?.data || { error: "Network/CORS Error", message: error.message },
          status: error.response?.status || 500,
        },
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <div className="max-w-5xl mx-auto p-10">
        <h1 className="text-5xl font-bold text-orange-400 mb-8">
          Leaky Bucket Algorithm
        </h1>

        <p className="text-lg leading-9 text-slate-300 mb-10">
          Leaky Bucket processes requests
          at a constant rate preventing
          sudden traffic spikes and
          smoothing network flow.
        </p>

        {/* Bucket Counter */}
        <div className="mb-8 bg-slate-900 p-6 rounded-2xl w-fit">
          <h2 className="text-2xl font-bold">
            Requests In Bucket
          </h2>

          <p className="text-5xl text-orange-400 mt-3">
            {count}/{LIMIT}
          </p>
        </div>

        <button
          onClick={handleTest}
          className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-2xl text-xl font-bold transition-all"
        >
          Send Request
        </button>
        <div>
          <div className="bg-slate-900 p-6 rounded-2xl mt-10 mb-8 border border-orange-500">
  <h2 className="text-2xl font-bold text-orange-400 mb-4">
    Developer Console Instructions
  </h2>

  <p className="text-slate-300 text-lg leading-8">
    Open the browser console to view live API requests,
    backend responses, request counters, and rate limit
    objects while testing the Leaky Bucket algorithm.
  </p>

  <div className="mt-6 bg-black p-5 rounded-xl border border-orange-500">
    <p className="text-orange-400 text-lg">
      Windows/Linux:
      <span className="text-white ml-2">
        CTRL + SHIFT + I
      </span>
    </p>

    <p className="text-orange-400 text-lg mt-3">
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

export default LeakyBucket;