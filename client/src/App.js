import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import {} from 'react-router'
import Navigation from "./components/Navigation";
import Home from "./routes/Home";
import About from "./routes/About";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
