import { Routes, Route } from "react-router-dom";

import Sample from "./models/sample/Sample";

function App() {
  return (
    <div className="App">
      <h1>HAILS - HANDSIGN ARTIFICIAL INTELLIGENCE LEARNING SYSTEM</h1>
      <Routes>
        <Route path="/" element={null} />
        <Route path="/sample" element={<Sample />} />
      </Routes>
    </div>
  );
}

export default App;
