import Nav from './components/Nav';
import './index.css';
import Landing from "./components/Landing"
import Movies from "./components/Movies"
import Header from "./components/Header"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
    <div>
      <Routes />
      <Nav />
      <Landing />
      <Movies />
      <Header />
     </div>
     </Router>
  );
}

export default App;
