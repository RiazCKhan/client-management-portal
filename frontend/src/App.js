import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    // Nav
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
