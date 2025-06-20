import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Videoplay from "./pages/Videoplay";
import { Routes, Route } from "react-router";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videoplay/:id" element={<Videoplay />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
