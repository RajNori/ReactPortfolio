import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import Projects from './pages/projects';
import Experience from './pages/Experience';
//importing navbar as it is part of every single page the user navigates to//
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
<Router>
  <Routes>
    <Route path= "/" element={<Home />} />
    <Route path= "/projects" element={<Projects />} />
    <Route path= "/experience" element={<Experience />} />
  </Routes>
</Router>

    </div>
  );
}

export default App;
