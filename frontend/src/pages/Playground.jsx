import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";

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
        <h1 className="text-5xl font-bold text-cyan-400 mb-10">
          API Playground
        </h1>

        <div className="bg-slate-900 rounded-3xl p-8 shadow-2xl">
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
            {JSON.stringify(
              responseData,
              null,
              2
            )}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Playground;