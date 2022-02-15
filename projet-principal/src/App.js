import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navigation from './components/navigation';
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
        <Navigation /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
  );
}


export default App;
