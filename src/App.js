import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import planets from "./data.json";
import Venus from "./page/Venus/Venus";
import Uranus from "./page/Uranus/Uranus";
import Saturn from "./page/Saturn/Saturn";
import Neptune from "./page/Neptune/Neptune";
import Mercury from "./page/Mercury/Mercury";
import Mars from "./page/Mars/Mars";
import Jupiter from "./page/Jupiter/Jupiter";
import Earth from "./page/Earth/Earth";
import Home from "./page/Home";
function App() {
  const [data, setData] = useState([]);

  React.useEffect(() => {
    setData(planets);
  }, []);

  return (
    <BrowserRouter>
      <Navbar planets={data} />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/venus" element={<Venus />} />
        <Route path="/uranus" element={<Uranus />} />
        <Route path="/saturn" element={<Saturn />} />
        <Route path="/neptune" element={<Neptune />} />
        <Route path="/mercury" element={<Mercury />} />
        <Route path="/mars" element={<Mars />} />
        <Route path="/jupiter" element={<Jupiter />} />
        <Route path="/earth" element={<Earth />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
