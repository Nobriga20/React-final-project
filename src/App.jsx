import Nav from "./components/Nav";
import "./index.css";
import Landing from "./components/Landing";
import Movies from "./components/Movies";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Movie from "./components/Movie";
import { useState } from "react";

function App() {
  const [data, setData] = useState(null);
  return (
    <Router>
      <Nav />
      <Header setData={setData} />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/movies" element={<Movies data={data} />} />
        <Route path="/movie/:id" element={<Movie />} />
      </Routes>
    </Router>
  );
}

export default App;
