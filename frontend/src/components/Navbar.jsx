import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-slate-900 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-cyan-400">
          API Rate Limiter
        </h1>

        <div className="flex gap-6 text-sm font-medium flex-wrap">
          <Link to="/">Home</Link>
          
          <Link to="/fixed-window">Fixed Window</Link>
          <Link to="/sliding-window">Sliding Window</Link>
          <Link to="/token-bucket">Token Bucket</Link>
          <Link to="/leaky-bucket">Leaky Bucket</Link>
          <Link to="/redis">Redis</Link>
          
          
        </div>
      </div>
    </nav>
  );``
};

export default Navbar;