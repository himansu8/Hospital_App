import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Appointment from './pages/Appointment'
import Login from './pages/Login'
import About from './pages/About'
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />


        </Routes>
        <ToastContainer position="top-center" />
      </BrowserRouter>
    </>
  );
}

export default App;
