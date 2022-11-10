import logo from './logo.svg';
import './App.css';
import Register from './components/register/Register';
import Navbar from './components/navbar/Navbar';
import Login from './components/login/Login';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
          <div className="page-container">
              <Navbar />
              <div className="fix">
              <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
              </Routes>
              </div>
            </div>
      </Router>
  );
}

export default App;
