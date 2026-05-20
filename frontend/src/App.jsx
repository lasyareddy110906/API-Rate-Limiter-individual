import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import FixedWindow from "./pages/FixedWindow";
import SlidingWindow from "./pages/SlidingWindow";
import TokenBucket from "./pages/TokenBucket";
import LeakyBucket from "./pages/LeakyBucket";
import RedisLimiter from "./pages/RedisLimiter";
import Playground from "./pages/Playground";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/fixed-window"
        element={<FixedWindow />}
      />

      <Route
        path="/sliding-window"
        element={<SlidingWindow />}
      />

      <Route
        path="/token-bucket"
        element={<TokenBucket />}
      />

      <Route
        path="/leaky-bucket"
        element={<LeakyBucket />}
      />

      <Route
        path="/redis"
        element={<RedisLimiter />}
      />

      <Route
        path="/playground"
        element={<Playground />}
      />
    </Routes>
  );
};

export default App;